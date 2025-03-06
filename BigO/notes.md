# Big O

- Descobrir o melhor jeito de implementar uma função
- Avaliar qual o melhor algoritmo
- importante saber as diferentes implementações
- Código eficiente porém que seja fácil de ler


## Time Complexity
### Time Problem

- Maquinas diferentes vao gravar diferentes tempos
- a mesmas maquina tambem vai gravar tempos diferentes
- Então precisamos de outro jeito para avaliar nossos códigos

### Se não o tempo, o que

- Contar o numero de operação simples que o computador performa

### Big O

- Formalizar a contagem
- calcula quando o tempo de execução de uma função aumenta de acordo com a entrada

### Simplifying BigO
- Constantes nao importam
- operações arimeticas são constantes
- Atribuir variaveis tbm é constante, ou seja se eu atribuir x = 5 é igual a atribuir x = 100000
- Acessar elementots em um array com index ou objetco com chave é constante tbm

## Space Complexity

- Quanto de memória adicional para rodar o código no nosso algoritmo?
- Maioria dos tipos primitivos são constantes
- Strings são diferentes

## Logarithms

- Ao contrário da exponenciacao
- primeiro numero base, () resultado, resultado é a potencia que se elevada a base vai resultar no resultado
log2(8) = 3
qual numero elevado a 2 equivale a 8

- algoritmos envolvem logatirmos (searching and sorting)
- recursao as vezes envolve

# Performance of Arrays And Objects

## Objects

- Não tem ordem
- key value pairs
- remover, procurar, inserir e acessar, são bom com objetos

## Arrays
Ordered Lists

- Quando voce precisa de ordem
- Acessar O(1);
- Searching O(n);
- Insert - depende onde, exemplo no final é O(1), em outros casos é O(n), pois tem que reeindexar todos os outros elementos
- Remove - mesma coisa do insert

### Array Methods

- Push, Pop -> O(1)
- Shif, Unshift, concat, slice, splice -> O(n) (causa um efeito cascata, pois voce precisa reindexar os elementos do array)
- Sort - O(N * log N);
- ForEach, Map, Reduce, Filter.. -> O(n);

