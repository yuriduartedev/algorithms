## Search Bynary

- A pesquisa binária é uma forma de resolver uma busca exluindo o máximo de possibilidades possíveis a cada tentativa,
  com isso conseguimos aumentar muito a velocidade com que fazemos determinadas buscas.

Ex.: Um exemplo básico de pesquisa binária sei advinhar um número que eu estou pensando entre 1 e 100.

[1, 2, 3, ... 100]

Você deve tentar adivinha o número com o menor número de tentativas possível. A cada tentativa, digo se você chutou muito
para cima, muito para baixo ou se acertou.

Digamos que começou tentando assim: 1, 2, 3, 4 ... Veja como ficaria:

1. Muito baixo...
2. Muito baixo...
3. Muito baixo...
4. Muito baixo...

Essa é uma forma ruim de tentar acertar um número, isso se chama pesquisa simples, a cada tentativa você está eliminando
apenas um número. Se o número correto fosse o 99 você precisaria de 99 tentativas para acertar.

### Uma maneira melhor de buscar

Aqui está uma técnica melhor, comece pelo 50.

50. Muito baixo, mas você eliminou metade dos números! Agora você sabe que os números de 1 a 50 são muito baixos, Próximo...
51. Muito alto, mas novamente você pode cortar metade dos números restantes!

Com a pesquisa binária você chuta um número intermediário e elimina a metade dos números restantes a cada vez. O próximo
número é o 63 (entre 50 e 75). Próximo

57. Acertou!

Isso é a pesquisa binária. Você acaba de aprender um algoritmo! Aqui está a quantidade de números que você pode eliminar a cada tentativa.

[100 itens] -> [50] -> [25] -> [13] -> [7] -> [4] -> [2] -> [1] = 7 etapas!
