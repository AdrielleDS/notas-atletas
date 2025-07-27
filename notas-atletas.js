let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calculaMediaAtletas(objAtletas) {
  
  for (let i = 0; i < objAtletas.length; i++) {
    const atleta = objAtletas[i];
    let notas = [...atleta.notas]; 

    // 1. Ordena as notas em ordem crescente
    notas.sort((a, b) => a - b);

    // 2. Elimina a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // 3. Calcula a soma das notas computadas
    let somaNotas = 0;
    notasComputadas.forEach(nota => {
      somaNotas += nota;
    });

    // 4. Calcula a média válida
    const mediaValida = somaNotas / notasComputadas.length;

    // 5. Apresenta o resultado para o usuário
    console.log(`Atleta: ${atleta.nome}`);
    // Exibe as notas originais
    
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    // Exibe a média válida
    console.log(`Média Válida: ${String(mediaValida).replace('.', ',')}\n`); // Substitui ponto por vírgula para o formato PT-BR
  }
}

=======
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calculaMediaAtletas(objAtletas) {
  
  for (let i = 0; i < objAtletas.length; i++) {
    const atleta = objAtletas[i];
    let notas = [...atleta.notas]; 

    // 1. Ordena as notas em ordem crescente
    notas.sort((a, b) => a - b);

    // 2. Elimina a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // 3. Calcula a soma das notas computadas
    let somaNotas = 0;
    notasComputadas.forEach(nota => {
      somaNotas += nota;
    });

    // 4. Calcula a média válida
    const mediaValida = somaNotas / notasComputadas.length;

    // 5. Apresenta o resultado para o usuário
    console.log(`Atleta: ${atleta.nome}`);
    // Exibe as notas originais
    
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    // Exibe a média válida
    console.log(`Média Válida: ${String(mediaValida).replace('.', ',')}\n`); // Substitui ponto por vírgula para o formato PT-BR
  }
}

>>>>>>> 295d5180769421864fd05792302bad94c57f7376
calculaMediaAtletas(atletas);
