const { createApp } = Vue

createApp({
  data() {
    return {
      nome: 'Renato Luan de Sousa Araujo',
      descricao: 'Gosto de treinar musculação, sou apaixonado por natureza e música. Amo tudo que envolva sobrevivência, especialmente jogos de computador.',
      profissao: 'Docente na Universidade SENAI RM de Anápolis - área de Tecnologia',
      formacao: 'Formado em Redes de Computadores | Pós em Front-End (em andamento)',
      experiencia1: '3 anos como Analista de Sistema Hospitalar - SOULMV',
      experiencia2: '2 anos como Suporte N2',
      caracteristicas: 'Ágil, pontual, criativo e com princípios invioláveis',
      linkedin: 'https://www.linkedin.com/in/renato-luan-a21052236',
      email: 'renatoluanti@gmail.com'
    }
  }
}).mount('#app')
