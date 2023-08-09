## ANOTAÇÕES PARA ESTUDO

Para importar a biblioteco instalada para dentro do nosso projeto, deve ser feito uma solicitação require()
Gguarda essa informação em uma constante, geralmente com o mesmo nome da biblioteca:
    
    const lodash = require('lodash');

E também é possivel desestruturar essa biblioteca e importar somente os metodos que vão ser utlizados no projeto, exemplo
    
    const { uniq } = require('lodash');


Se você não sabe ao certo quais metodos vai utilizar da biblioteca, ou se vai utilizar todos, importa ela completa;
Se você já sabe quais os métodos vai utilizar, é interessante que importe somente o necessário


- Utilizando um dos metodos como exemplo:

Abaixo terei um arrayOriginal que contem um conjunto de numeros e alguns deles estão repetidos;
Eu devo fazer um novo arrayFiltrado retirando somente esses numeros repetidos

    const arrayOriginal = [1, 2, 2, 3, 5, 8, 8, 1];

    const arrayFiltrado = lodash.uniq(arrayOriginal)
    console.log(arrayFiltrado); //imprime no terminal: [ 1, 2, 3, 5, 8 ]


Para podermos fazer uma importação de um arquivo para qualquer outro arquivo, ele primeiro deve ser exportado (module.export)
E para fazer a importação é o mesmo padrão do visto acima, mas tem um porem, se o arquivo for do mesmo jeito (js para js), na solicitação deve ser feito um ('./nomeDoArquivo')
Sempre deve conter ./ antes do nome se o arquivo importado for do mesmo tipo.

    const arrayNumeros = [1, 2, 2, 4, 6];

    const arrayLetras = ['a', 'a', 'b', 'e', 'f'];

    module.exports = {
        arrayNumeros,
        arrayLetras
    }
