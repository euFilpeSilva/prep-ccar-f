
(function(){
  const icons={danger:'⚠️',warning:'⚠️',success:'✓',info:'💡'};
  function close(root,value){root.remove();return value}
  function show(options={}){
    const type=options.type||'info';
    const root=document.createElement('div');root.className='app-modal-root';
    const title=options.title||'Aviso'; const message=options.message||'';
    const icon=options.icon||icons[type]||icons.info;
    root.innerHTML=`<div class="app-modal" data-type="${type}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="app-modal-head"><div><span class="app-modal-icon">${icon}</span> <span class="app-modal-title">${escapeHtml(title)}</span></div><button class="app-modal-close" type="button" aria-label="Fechar">×</button></div>
      <div class="app-modal-body">${escapeHtml(message)}</div>
      <div class="app-modal-foot">${options.cancelText?`<button class="app-modal-btn" data-action="cancel">${escapeHtml(options.cancelText)}</button>`:''}<button class="app-modal-btn ${type==='danger'?'danger':type==='warning'?'warning':'primary'}" data-action="confirm">${escapeHtml(options.confirmText||'Entendi')}</button></div>
    </div>`;
    document.body.appendChild(root);
    const modal=root.querySelector('.app-modal');
    const confirmBtn=root.querySelector('[data-action="confirm"]');
    const cancelBtn=root.querySelector('[data-action="cancel"]');
    const closeBtn=root.querySelector('.app-modal-close');
    return new Promise(resolve=>{
      const finish=v=>{document.removeEventListener('keydown',onKey);close(root,v);resolve(v)};
      const onKey=e=>{if(e.key==='Escape')finish(false);};
      document.addEventListener('keydown',onKey);confirmBtn.onclick=()=>finish(true);closeBtn.onclick=()=>finish(false);if(cancelBtn)cancelBtn.onclick=()=>finish(false);
      setTimeout(()=>confirmBtn.focus(),0);
    });
  }
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  window.AppModal={
    confirm:show,
    alert:(options={})=>show({...options,cancelText:null,confirmText:options.confirmText||'Entendi'})
  };
})();
