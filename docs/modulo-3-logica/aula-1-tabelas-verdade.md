# Regras e Tabelas Verdade

O objetivo aqui é eliminar ambiguidades. Texto corrido gera dúvida; tabelas geram lógica booleana (`if/else`) pronta para codar.

## O Prompt Determinístico

```md
Crie uma Tabela Verdade para a decisão de 'Liberação de Lote' baseada em 3 variáveis:

1. Gravidade da Não Conformidade (Crítica / Leve).
2. Histórico do Fornecedor (Confiável / Em Risco).
3. Resultado do Teste Automatizado (Passou / Falhou).

Defina a ação do sistema para cada combinação (Ex: Bloqueio Total, Liberação Condicional, Alerta ao Gerente). Existe alguma combinação ambígua?
```

::: info POR QUE ISSO FUNCIONA?
Programadores pensam em matrizes de decisão. Ao pedir uma tabela, você entrega para o time de desenvolvimento uma especificação que não deixa margem para interpretação errada ("eu achei que era para liberar...").
:::
