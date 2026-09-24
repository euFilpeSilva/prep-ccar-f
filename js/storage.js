(function(){
  const KEYS = Object.freeze({
    mainStudy: 'ccar_learned_status',
    breakdownProgress: 'ccar_english_progress_v2',
    breakdownSettings: 'ccar_english_settings_v2',
    backupMeta: 'ccar_global_backup_meta_v2'
  });
  const APP_ID = 'CCAR-F Study';
  const SCHEMA_VERSION = 2;
  const APP_KEYS = [KEYS.mainStudy, KEYS.breakdownProgress, KEYS.breakdownSettings];

  function read(key, fallback=null){ try { const raw=localStorage.getItem(key); return raw===null?fallback:JSON.parse(raw); } catch(e){ return fallback; } }
  function write(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
  function collect(){
    const storage={};
    APP_KEYS.forEach(k=>{ const v=localStorage.getItem(k); if(v!==null) storage[k]=v; });
    return { app: APP_ID, schemaVersion: SCHEMA_VERSION, exportedAt: new Date().toISOString(), storage };
  }
  function summarize(payload){
    let main={}; let bp={};
    try{ main=payload.storage?.[KEYS.mainStudy]?JSON.parse(payload.storage[KEYS.mainStudy]):{}; }catch(e){}
    try{ bp=payload.storage?.[KEYS.breakdownProgress]?JSON.parse(payload.storage[KEYS.breakdownProgress]):{}; }catch(e){}
    const statuses=Object.values(main||{});
    const flashcards={total:30, studied:statuses.filter(x=>x && x!=='unlearned').length, mastered:statuses.filter(x=>x==='easy').length, difficult:statuses.filter(x=>x==='review').length, errors:statuses.filter(x=>x==='hard').length};
    const items=bp.items||{}; const studied=Object.keys(items).length; const exam=bp.exam||{};
    return {flashcards, breakdown:{studied, examAttempts:exam.attempts||0, examCorrect:exam.correct||0, diagnostic:bp.diagnostic?'concluído':'não concluído'}};
  }
  function normalize(payload){
    if(payload && payload.schemaVersion===1 && payload.app==='CCAR-F English Breakdown' && payload.storage && typeof payload.storage==='object'){
      const migrated={app:APP_ID,schemaVersion:SCHEMA_VERSION,exportedAt:payload.exportedAt||new Date().toISOString(),storage:{}};
      if(typeof payload.storage['ccar_english_progress_v2']==='string') migrated.storage[KEYS.breakdownProgress]=payload.storage['ccar_english_progress_v2'];
      if(typeof payload.storage['ccar_english_settings_v2']==='string') migrated.storage[KEYS.breakdownSettings]=payload.storage['ccar_english_settings_v2'];
      return migrated;
    }
    return payload;
  }
  function validate(payload){
    const normalized=normalize(payload);
    if(!normalized || normalized.app!==APP_ID) throw new Error('Este arquivo não pertence ao CCAR-F Study.');
    if(normalized.schemaVersion!==SCHEMA_VERSION) throw new Error(`Versão de backup não suportada: ${normalized.schemaVersion}.`);
    if(!normalized.storage || typeof normalized.storage!=='object' || Array.isArray(normalized.storage)) throw new Error('Estrutura de backup inválida.');
    if(Object.keys(normalized.storage).some(k=>!APP_KEYS.includes(k))) throw new Error('O backup contém dados de armazenamento não reconhecidos.');
    APP_KEYS.forEach(k=>{ if(normalized.storage[k]!==undefined && typeof normalized.storage[k]!=='string') throw new Error(`Formato inválido para ${k}.`); });
    return normalized;
  }
  function restore(payload){
    payload=validate(payload);
    APP_KEYS.forEach(k=>localStorage.removeItem(k));
    Object.entries(payload.storage).forEach(([k,v])=>localStorage.setItem(k,String(v)));
    localStorage.setItem(KEYS.backupMeta, JSON.stringify({lastImportedAt:new Date().toISOString(),sourceExportedAt:payload.exportedAt||null}));
  }
  function download(payload=collect()){
    const stamp=payload.exportedAt.replace(/[:.]/g,'-');
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob); const a=document.createElement('a');
    a.href=url; a.download=`ccarf-study-progress-${stamp}.json`; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    localStorage.setItem(KEYS.backupMeta, JSON.stringify({lastExportedAt:payload.exportedAt}));
    return payload;
  }
  window.CCARStorage={KEYS,APP_ID,SCHEMA_VERSION,APP_KEYS,read,write,collect,summarize,normalize,validate,restore,download};
})();
