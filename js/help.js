(function(){
  const sections={
    objetivo:'🎯 Objetivo da plataforma', flashcards:'🎴 Flashcards & Dicionário', cenarios:'🏢 Cenários Práticos', diagnostico:'🧪 Diagnóstico', aprender:'📚 Aprender', adaptativo:'🎯 Hoje / Treino adaptativo', revisao:'🔄 Revisão no Hoje', patterns:'🧩 Estruturas de perguntas', englishOnly:'🇺🇸 English Only', exam:'⏱️ Exam Mode', speed:'⏱️ Simulador', progresso:'📈 Progresso / Indicadores de preparação', backup:'💾 Backup e sincronização', rotina:'🧭 Roteiro de estudo'
  };
  window.CCARHelp={sections, link:(id,from)=>`index.html?help=${encodeURIComponent(id)}${from?'&return='+encodeURIComponent(from):''}`};
})();
