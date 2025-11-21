const base = { label: "Total de Ecolas da pesquisa", value: 75054 };

export const data1 = [
  { label: "Escolas Filtradas", value: 1565 },
  { ...base },
];

export const data2 = [
  { label: "Escolas", value: 69 },
  { ...base },
];

export const data3 = [
  { label: "Escolas", value: 18 },
  { ...base },
];

export const data4 = [
  { label: "Escolas", value: 5282 },
  { ...base },
];


export const sampleData = [
  { id: 1, label: "Quais escolas do Nordeste oferecem, em um mesmo espaço, as etapas de Educação Infantil, Ensino Fundamental e Ensino Médio?", values: data1 },
  { id: 2, label: "Quais escolas de Recife não oferecem acesso adequado a alunos com deficiência?", values: data2 },
  { id: 3, label: "Quais escolas do Nordeste ainda não possuem os seguintes elementos (água potável, energia elétrica, coleta de lixo e abastecimento de água)", values: data3 },
  { id: 4, label: "Quais escolas da região Nordeste dispõem de áreas destinadas ao lazer e à prática de esportes? ", values: data4 },
];
