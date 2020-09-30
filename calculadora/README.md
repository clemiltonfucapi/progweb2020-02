# Projeto Calculadora – Programação WEB II
O projeto deve atender os seguintes requisitos: 
1.	Adicione os eventos dos números(0,1,2,3,4,5,6,7,8,9) e das operações “soma”, “subtração”, “multiplicação”, “divisão”.
2.	Permitir a entrada de números decimais (“.”)
3.	Botão AC(ALL CANCEL): ao ser clicado, os comandos são apagados e o valor do display é alterado para zero
4.	Botão CE(CLEAR ENTRY): ao ser clicado, apenas o último comando  é cancelado. 
5.	Botão %: Essa operação deve ser feita da seguinte maneira: 
a.	10% de 56 ->  [“10”, “*”, “56”, “%” ] -> 10*(56/100) = 5.6
6.	Ao se clicar em duas operações seguidas, apenas a ultima operação é considerada.
7.	Ao se terminar uma operação( Ex: 2+2), caso o usuário clique em igual mais de uma vez, a última operação, deve ser realizada novamente.
8.	Desconsiderar zeros à esquerda. Caso o usuário tente adicionar, não permita.  
9.	Caso ocorra alguma operação inválida, deve ser mostrado a mensagem “ERRO” na calculadora. Ex: [“10”, “+” ]
10.	Não permitir números maiores que 10 dígitos. Caso o resultado seja maior que isso, mostrar “ERRO” no display
11.	Permitir o uso dos números do teclado na calculadora. Adicionar evento do tipo “keyup”. 
12.	Configurar evento de som ao se clicar em um botão
13.	Colocar data e hora atual na tela da calculadora
14.	Tratar dízimas periódicas, para não ultrapassarem o display.
