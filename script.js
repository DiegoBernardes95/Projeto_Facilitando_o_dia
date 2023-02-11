import redlineSync from 'readline-sync';
import chalk from 'chalk';

const lista = [];
let resp = "";

const adicionarNaLista = (prop) => {
  lista.push(prop);
};

const ordenar = () => {
  lista.sort();
};

const listar = () => {
  lista.forEach((elemento)=> { console.log(`• ${elemento}`); });
};

while (true) {
  resp = redlineSync.question(chalk.yellow("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: "));

  if (resp.toLowerCase() == "sair") {
    console.log(chalk.bgRed('Lista Ordenada de Propriedades CSS: '));
    ordenar();
    listar();
    console.log(chalk.red('---------------------------------X---------------------------------'));
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicionarNaLista(resp);
  }
}