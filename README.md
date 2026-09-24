Prep CCAR-F — Estudo para Certificação Anthropic

Aplicação web estática para apoiar a preparação para a certificação Anthropic Claude Architect (CCAR-F), com foco em dois aspectos complementares:

Domínio técnico: conceitos de arquitetura, agentes, ferramentas, MCP, Claude Code, prompts, contexto e confiabilidade.

Inglês técnico: vocabulário, estruturas de perguntas e leitura técnica para quem precisa de apoio adicional para estudar em inglês.

Importante: este projeto é uma ferramenta de estudo autoral. O conteúdo, cenários e simulados da aplicação não são questões oficiais da Anthropic e não devem ser tratados como reprodução do exame real.

📚 Sobre o projeto

O Prep CCAR-F nasceu da necessidade de transformar o estudo da certificação em uma experiência prática, organizada e progressiva.

A aplicação foi pensada especialmente para pessoas que já possuem conhecimento técnico, mas precisam consolidar os conceitos cobrados na preparação e/ou desenvolver a capacidade de interpretar documentação e questões técnicas em inglês.

A proposta não é substituir a documentação oficial nem garantir aprovação. O objetivo é fornecer uma camada de treino, revisão, aplicação e acompanhamento de progresso.

🎯 Objetivos

A aplicação busca ajudar o estudante a:

revisar conceitos técnicos relacionados ao ecossistema Claude;

memorizar vocabulário técnico em inglês;

reconhecer estruturas recorrentes de perguntas;

praticar decisões arquiteturais em cenários;

desenvolver velocidade de leitura técnica;

identificar diferenças entre termos semelhantes;

revisar conteúdos por domínio;

acompanhar o progresso de estudo;

treinar inglês técnico sem transformar o estudo em um curso de inglês geral;

estudar de forma independente diretamente pelo navegador.

🧭 Estrutura da aplicação

A aplicação possui duas trilhas complementares.

                         ┌─────────────────────┐
                         │    Página inicial   │
                         └──────────┬──────────┘
                                    │
                  ┌─────────────────┴─────────────────┐
                  │                                   │
                  ▼                                   ▼
        ┌───────────────────┐               ┌────────────────────┐
        │  🧠 Estudo técnico │               │ 🇺🇸 Inglês técnico │
        └─────────┬─────────┘               └──────────┬─────────┘
                  │                                    │
        ┌─────────┼─────────┐              ┌───────────┼──────────┐
        ▼         ▼         ▼              ▼           ▼          ▼
   Flashcards  Cenários  Simulador     Diagnóstico  Estruturas  Hoje
        │         │         │                                      │
        └─────────┴─────────┘                                      ▼
                                                           English Only
                                                                 │
                                                                 ▼
                                                            Exam Mode

O English Breakdown é opcional. Usuários que já possuem boa leitura técnica em inglês podem concentrar o estudo nas ferramentas técnicas da aplicação.

🧠 Trilha de estudo técnico

1. Flashcards

Os flashcards são destinados à revisão rápida do vocabulário e dos conceitos.

Cada cartão apresenta informações como:

domínio;

módulo;

termo em inglês;

pronúncia;

tradução;

definição técnica em inglês;

exemplo de utilização;

contexto ou possível armadilha conceitual.

Interação

O cartão possui frente e verso.

Na frente, o estudante vê o termo e a definição técnica.

Ao virar o cartão, encontra:

tradução;

exemplo;

contexto de aplicação;

observações relacionadas ao conceito.

Também existe suporte à reprodução da pronúncia utilizando a API de síntese de voz disponível no navegador.

Atalhos

Quando o foco estiver nos flashcards:

Tecla

Ação

Space

Virar o cartão

←

Cartão anterior

→

Próximo cartão

A

Ouvir a pronúncia

Classificação

O estudante pode classificar os termos conforme o nível de domínio, permitindo acompanhar a evolução do vocabulário.

📖 2. Dicionário

O dicionário permite consultar os módulos de forma mais direta, sem depender da navegação sequencial dos flashcards.

É útil principalmente para:

revisão de um conceito específico;

consulta rápida antes de resolver um cenário;

comparação entre termos;

recuperação de uma definição já estudada.

Os conteúdos podem ser filtrados por domínio.

🧩 3. Cenários práticos

Os cenários transformam conceitos isolados em situações arquiteturais.

Cada cenário apresenta:

uma situação em inglês;

uma pergunta;

alternativas;

indicação da resposta;

explicação técnica em inglês;

análise explicativa em português.

A versão atual possui 8 cenários autorais, distribuídos entre os cinco domínios de estudo.

Temas trabalhados

Os cenários abordam situações como:

isolamento de contexto em subagentes;

respostas informativas de erro em ferramentas;

saída estruturada e JSON;

enforcement de workflows;

hooks antes/depois de chamadas;

regras em CLAUDE.md;

degradação de contexto;

proveniência de informações.

Objetivo

O objetivo não é apenas memorizar uma definição.

O estudante deve identificar:

qual princípio técnico resolve o problema apresentado e por quê.

⏱️ 4. Simulador

O simulador trabalha questões em formato mais próximo de uma situação de prova.

A aplicação utiliza um tempo de 60 segundos por questão, permitindo praticar:

leitura rápida;

identificação de palavras-chave;

eliminação de alternativas;

interpretação da intenção da pergunta;

tomada de decisão sob pressão de tempo.

Após a resposta, o sistema apresenta explicações em inglês e português.

As questões do simulador são material autoral de treinamento e não representam questões oficiais da certificação.

🇺🇸 English Breakdown

O English Breakdown é o módulo dedicado especificamente ao inglês técnico.

Ele não foi criado para ensinar inglês geral.

O objetivo é desenvolver a capacidade de interpretar frases técnicas e perguntas de certificação com menos dependência de tradução palavra por palavra.

🎓 Níveis de treinamento

O módulo utiliza uma progressão em etapas:

1. Entender blocos

O estudante aprende a reconhecer grupos de palavras que possuem significado técnico conjunto.

Exemplo:

under which conditions

Em vez de interpretar cada palavra isoladamente, o estudante aprende a reconhecer a estrutura como:

"sob quais condições"

2. Tradução guiada

O estudante recebe apoio para decompor frases técnicas em partes menores.

A ideia é entender:

Which approach
would most effectively
reduce context growth?

como blocos de significado.

3. Reconhecimento de estruturas

O foco passa a ser reconhecer padrões recorrentes em perguntas técnicas.

Alguns padrões trabalhados incluem:

Which approach would most effectively...

must

may

should

without

under which conditions

in order to

rather than

instead of

while maintaining

without requiring

4. Inglês sem tradução imediata

Depois de reconhecer as estruturas, o estudante começa a interpretar frases diretamente em inglês.

O objetivo é diminuir a dependência de:

Inglês → tradução palavra por palavra → entendimento

e aproximar o processo de:

Inglês técnico → significado

5. Exam Mode

O último estágio simula uma situação em que o estudante precisa interpretar perguntas sem receber ajuda imediata.

A intenção é aproximar o treinamento da leitura exigida durante uma prova técnica.

🧠 Treino adaptativo

O módulo Hoje organiza o treinamento com base no progresso armazenado no navegador.

A ideia é evitar que o estudante precise decidir manualmente todos os dias:

"O que eu deveria estudar agora?"

O sistema pode direcionar o treino para:

estruturas ainda não dominadas;

itens que precisam de revisão;

dificuldades identificadas no diagnóstico;

progressão dos níveis de treinamento.

Assim, o estudante pode utilizar o módulo como uma rotina diária de estudo.

🔍 Diagnóstico

O diagnóstico serve para identificar o nível atual de leitura técnica.

Ele ajuda a decidir se o estudante deve:

seguir diretamente para o conteúdo técnico;

utilizar o English Breakdown como apoio;

reforçar determinadas estruturas antes de avançar.

Isso é importante porque a aplicação foi projetada para usuários com níveis diferentes de inglês.

Quem já possui boa leitura técnica não precisa percorrer obrigatoriamente todo o módulo de inglês.

📊 Progresso

A aplicação mantém informações de progresso localmente no navegador.

Entre os dados utilizados estão:

termos dominados;

progresso dos flashcards;

configurações do English Breakdown;

evolução do treinamento;

última atividade/trilha utilizada.

A página inicial utiliza essas informações para permitir uma experiência de:

"Continuar de onde parei."

💾 Persistência e Backup

A aplicação é estática e não depende de uma API própria para armazenar o progresso.

Os dados são persistidos no:

localStorage

do navegador.

Isso significa que o progresso fica associado ao navegador/dispositivo utilizado.

Backup

A aplicação possui mecanismo de exportação/importação de progresso em JSON.

Isso permite:

Navegador A
     │
     ▼
Exportar backup
     │
     ▼
arquivo JSON
     │
     ▼
Navegador B
     │
     ▼
Importar backup

Recomendação

Faça backups periódicos, principalmente antes de:

limpar os dados do navegador;

trocar de computador;

reinstalar o sistema operacional;

alterar o ambiente de desenvolvimento.

🏗️ Arquitetura técnica

A aplicação foi construída como uma Single Page Application estática, com um segundo HTML dedicado ao módulo de inglês.

Não existe backend obrigatório para executar o projeto.

Estrutura atual:

ccar-f-study/
│
├── index.html
├── english-breakdown.html
├── CHANGELOG-v2.5.md
│
├── css/
│   ├── main.css
│   ├── components.css
│   └── breakdown.css
│
└── js/
    ├── app.js
    ├── breakdown.js
    ├── help.js
    ├── modal.js
    └── storage.js

⚙️ Tecnologias utilizadas

Front-end

HTML5

CSS3

JavaScript

React 18

JSX

Tailwind CSS via CDN

Babel Standalone

Google Fonts

Bibliotecas carregadas no navegador

A aplicação utiliza recursos CDN para carregar:

React;

ReactDOM;

Babel;

Tailwind CSS;

fontes Inter;

fonte JetBrains Mono.

Por isso, a aplicação atualmente depende de conexão com a internet para carregar esses recursos externos quando executada dessa forma.

🧩 Organização dos arquivos

index.html

Página principal da aplicação.

Responsável por carregar a aplicação React e seus recursos.

english-breakdown.html

Página independente do módulo de inglês técnico.

A separação permite que o English Breakdown seja tratado como um módulo próprio sem transformar a aplicação inteira em um curso de inglês.

js/app.js

Contém a aplicação principal, incluindo:

interface;

flashcards;

dicionário;

cenários;

simulador;

navegação;

progresso;

conteúdo dos módulos técnicos.

js/breakdown.js

Contém a lógica do English Breakdown.

Inclui:

diagnóstico;

treinamento;

estruturas;

treino adaptativo;

English Only;

Exam Mode;

progresso;

configurações específicas do módulo.

js/storage.js

Centraliza funções relacionadas à persistência local e ao backup.

js/help.js

Responsável por comportamentos relacionados ao sistema de ajuda contextual.

js/modal.js

Contém componentes/utilitários relacionados aos modais utilizados pela interface.

css/main.css

Estilos gerais da aplicação.

css/components.css

Estilos reutilizáveis dos componentes da interface.

css/breakdown.css

Estilos específicos do English Breakdown.

🎨 Interface

A interface utiliza uma identidade visual baseada em:

fundo escuro;

tons de azul/cinza;

destaque âmbar;

verde para estados positivos;

vermelho para erros;

tipografia técnica com JetBrains Mono.

A proposta visual é aproximar a experiência de uma ferramenta técnica de desenvolvimento, evitando a aparência de um aplicativo educacional infantilizado.

📱 Responsividade

A interface foi construída para funcionar em diferentes tamanhos de tela.

O layout utiliza classes responsivas do Tailwind para adaptar:

cards;

botões;

menus;

grids;

modais;

conteúdo dos flashcards.

O objetivo é permitir utilização tanto em desktop quanto em telas menores.

🔊 Pronúncia

Os flashcards possuem recurso de leitura da pronúncia através da API:

window.speechSynthesis

A voz configurada prioriza:

en-US

A disponibilidade e a qualidade da voz podem variar conforme o navegador e o sistema operacional.

🧭 Sistema de ajuda

A aplicação possui um guia geral e ajuda contextual.

Guia geral

Explica:

como estudar;

para que serve cada ferramenta;

como utilizar as trilhas;

como utilizar o módulo de inglês;

como realizar backup.

Ajuda contextual

A ajuda pode explicar diretamente:

um termo;

uma funcionalidade;

uma etapa do treinamento;

uma decisão de estudo.

O módulo de inglês utiliza a chamada:

"Como usar este módulo?"

para diferenciar a ajuda específica da documentação geral da aplicação.

🔐 Privacidade

A aplicação não possui, na arquitetura atual, um backend próprio para coleta de dados do usuário.

O progresso é armazenado localmente no navegador por meio de localStorage.

Isso significa que:

não existe conta obrigatória;

não existe login obrigatório;

o progresso fica no dispositivo/navegador;

limpar os dados do site pode remover o progresso local;

o backup JSON permite transportar o progresso manualmente.

🌐 Deploy no GitHub Pages

A aplicação foi projetada para funcionar como site estático.

Uma opção simples é utilizar:

GitHub Pages

Passos gerais

Criar um repositório no GitHub.

Enviar os arquivos do projeto.

Manter index.html na raiz publicada.

Acessar:

Settings
→ Pages
→ Deploy from a branch

Selecionar a branch utilizada.

Selecionar a pasta:

/root

Salvar.

Depois que o GitHub Pages concluir o deploy, o projeto poderá ser acessado pela URL disponibilizada pelo GitHub.

💻 Execução local

Como é uma aplicação estática, ela pode ser executada utilizando um servidor HTTP local.

Por exemplo, utilizando a extensão Live Server no VS Code.

Depois de iniciar o servidor, abrir:

index.html

ou a URL fornecida pelo servidor local.

O english-breakdown.html também pode ser acessado diretamente.

🛠️ Desenvolvimento

Para modificar a aplicação:

Conteúdo técnico

Editar principalmente:

js/app.js

English Breakdown

Editar:

js/breakdown.js

Interface

Editar:

css/main.css
css/components.css
css/breakdown.css

Persistência

Editar:

js/storage.js

🧪 Checklist antes de publicar uma nova versão

Antes de fazer commit/deploy, verificar:

index.html abre corretamente.

Flashcards funcionam.

Pronúncia funciona.

Filtros funcionam.

Dicionário funciona.

Os 8 cenários carregam.

O simulador funciona.

O timer funciona.

English Breakdown abre.

Diagnóstico funciona.

Treino adaptativo funciona.

Exam Mode funciona.

Progresso continua após atualizar a página.

Exportação de backup funciona.

Importação de backup funciona.

Navegação entre as páginas funciona.

Links relativos funcionam no GitHub Pages.

Não existem referências a conteúdo apresentado como "questão oficial".

Não existem textos antigos que contradigam a estrutura atual da aplicação.

🗂️ Domínios de estudo

O conteúdo técnico da aplicação está organizado em cinco grandes domínios.

Domínio

Peso utilizado no material

Principais temas

D1 — Architecture

27%

Agentic Loops, Multi-Agent, Subagents, Workflow, Hooks, Task Decomposition, Session State

D2 — Tools & MCP

18%

Tool Design, Structured Errors, Tool Choice, MCP, Grep vs Glob

D3 — Claude Code

20%

CLAUDE.md, Commands, Skills, Permissions, Hooks, Plan Mode, CI/CD

D4 — Prompts & Output

20%

System Prompts, Few-Shot, Structured Output, Validation, Batch Processing, Review

D5 — Context & Reliability

15%

Context Truncation, Ambiguity, Error Cascading, Codebase Exploration, Sampling, Provenance

Os percentuais acima representam a organização utilizada pelo material desta aplicação. Consulte sempre a documentação oficial da certificação para informações atuais sobre o exame.

📚 Metodologia de estudo

A aplicação combina diferentes formas de prática porque cada ferramenta possui uma função diferente.

             CONHECER
                │
                ▼
          ┌───────────┐
          │ Flashcards│
          └─────┬─────┘
                │
                ▼
             REVISAR
                │
                ▼
          ┌───────────┐
          │ Dicionário│
          └─────┬─────┘
                │
                ▼
             APLICAR
                │
                ▼
          ┌───────────┐
          │  Cenários │
          └─────┬─────┘
                │
                ▼
             TESTAR
                │
                ▼
          ┌───────────┐
          │ Simulador │
          └─────┬─────┘
                │
                ▼
         INTERPRETAR MELHOR
                │
                ▼
       ┌──────────────────┐
       │ English Breakdown│
       └──────────────────┘

O English Breakdown pode ser utilizado em paralelo ou apenas quando o estudante perceber que o inglês está dificultando a compreensão do conteúdo.

🧑‍💻 Público-alvo

A aplicação foi pensada principalmente para:

desenvolvedores;

engenheiros de software;

arquitetos de software;

profissionais que trabalham com IA;

estudantes da certificação;

profissionais com conhecimento técnico, mas com dificuldade de leitura em inglês;

profissionais que já possuem inglês técnico e desejam apenas reforçar conceitos.

⚠️ Limitações atuais

A aplicação possui algumas limitações importantes.

1. Não é uma plataforma oficial

Não existe vínculo implícito entre este projeto e a Anthropic.

2. Não substitui documentação oficial

O conteúdo deve ser utilizado como apoio ao estudo.

3. Conteúdo estático

Os dados dos módulos ficam no código da aplicação.

Adicionar ou alterar conteúdo exige modificar os arquivos JavaScript.

4. Persistência local

O progresso não é sincronizado automaticamente entre dispositivos.

5. Dependência de CDN

A versão atual carrega algumas bibliotecas diretamente de CDNs.

🚀 Possíveis evoluções

Algumas evoluções naturais para o projeto:

banco de questões maior;

mais cenários por domínio;

métricas detalhadas de desempenho;

histórico de simulados;

gráficos de evolução;

revisão espaçada mais sofisticada;

seleção automática de questões por dificuldade;

modo de estudo por domínio;

sistema de tags;

busca global;

PWA/offline;

instalação como aplicativo;

sincronização entre dispositivos;

backend para persistência;

autenticação;

geração de novos exercícios;

integração com modelos de IA para explicações;

análise automática dos erros mais frequentes;

painel de preparação individual.

📌 Princípios do projeto

O desenvolvimento da aplicação segue alguns princípios:

Clareza

Cada ferramenta deve ter uma finalidade clara.

Progressão

O estudante deve conseguir sair do conhecimento básico e chegar à prática.

Contexto

Conceitos devem ser relacionados a situações reais sempre que possível.

Inglês técnico

O foco é interpretação técnica, não inglês geral.

Autonomia

O estudante deve conseguir utilizar a plataforma sem depender de acompanhamento externo.

Transparência

Conteúdo autoral não deve ser apresentado como questão oficial ou documentação oficial.

📄 Licença

Defina aqui a licença desejada para o projeto antes de publicar no GitHub.

Exemplo:

MIT License

ou outra licença compatível com os objetivos do projeto.

👤 Autor

Projeto desenvolvido como ferramenta de estudo e preparação técnica para certificação.

⭐ Se este projeto for útil

Se o projeto for disponibilizado publicamente no GitHub, sugestões, correções e melhorias podem ser incorporadas por meio de:

Issues;

Pull Requests;

discussões sobre conteúdo;

melhorias de UX;

novos cenários;

correções técnicas.

📌 Aviso final

Este projeto é uma ferramenta complementar de preparação.

Ele não garante aprovação, não representa questões reais do exame e não substitui a documentação, os requisitos e as informações oficiais disponibilizadas pela organização responsável pela certificação.

O conteúdo deve ser revisado periodicamente para acompanhar mudanças na certificação e nas tecnologias abordadas.
