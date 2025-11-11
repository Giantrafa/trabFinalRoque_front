## 📁 Estrutura do Projeto
```

├── package-lock.json     ← controla versões das dependências (mantenha)
├── package.json          ← lista dependências e scripts (mantenha)
├── public/
│   ├── favicon.ico       ← ícone do navegador
│   └── index.html        ← página HTML base do React
└── src/
    ├── App.js            ← roteamento principal (Login + Dashboard)
    ├── components/
    │   └── ChartCard.js  ← componente dos cards de gráfico
    ├── data/
    │   └── sampleData.js ← dados de exemplo dos gráficos ##
    ├── index.js          ← ponto de entrada da aplicação
    ├── pages/
    │   ├── Dashboard.js  ← página dos gráficos ##
    │   └── Login.js      ← tela de login ##
    └── styles.css        ← estilos globais

```