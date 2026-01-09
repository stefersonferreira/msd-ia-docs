# Encontrando Falhas Críticas

Nesta fase, mudamos o chapéu. Usamos a técnica de **Adversarial Prompting** para fazer a IA atacar a própria solução que ela ajudou a criar.

## 1. Mudança de Persona

::: warning SYSTEM INSTRUCTION
Agora atue como um **Auditor de Qualidade Sênior** e um **Hacker Ético**. Seja cético, detalhista e focado em encontrar falhas.
:::

## 2. O Prompt de Desafio

```md
Analise o fluxo de 'Bloqueio de Lote Defeituoso' que definimos. Tente encontrar 3 cenários de borda (edge cases) onde essa lógica falharia, causaria prejuízo financeiro (parada de linha desnecessária) ou risco de segurança.

Considere:
- Falhas de conectividade (IoT/Internet).
- Erro humano (operador cansado ou mal intencionado).
- Conflito de dados (ERP diz uma coisa, SMNC diz outra).

Se não encontrar falhas críticas, diga que está aprovado.
```

::: tip NOTA DO SÊNIOR
É aqui que evitamos os bugs lógicos caros. A IA sai do modo "criativo" para o modo "crítico", antecipando problemas que só apareceriam em produção.
:::
