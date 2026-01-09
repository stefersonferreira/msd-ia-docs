# Design Patterns e Soluções Técnicas

Agora que temos as regras, precisamos de engenharia. Vamos pedir arquitetura de software para problemas específicos.

## Prompt de Solução de Vulnerabilidades

```md
Para resolver: 'O Inspetor Preguiçoso' (Problema de Integridade).
Foco: O operador marca 'Tudo OK' sem olhar as peças para bater a meta.
Solicitação: Proponha um algoritmo de 'Validação de Tempo e Padrão'. Como o sistema pode detectar anomalias se um checklist de 10 minutos for feito em 30 segundos?

Para resolver: 'O Lote Fantasma' (Sincronia ERP).
Foco: O ERP cai, o SMNC continua operando offline. Quando o ERP volta, os IDs dos lotes mudaram.
Solicitação: Desenhe a lógica de 'Reconciliação de IDs' e armazenamento local (Store & Forward).
```

::: info RESULTADO ESPERADO
Aqui o aluno aprende a não aceitar apenas texto genérico. A IA deve sugerir padrões como Time-to-complete checks e geração de UUIDs locais para sincronia posterior.
:::
