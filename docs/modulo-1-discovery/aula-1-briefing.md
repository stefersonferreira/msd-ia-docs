# Discovery e Briefing Inicial
**Estudo de Caso:** Sistema SMNC (Monitoramento de Não Conformidades)

Nesta etapa, aprendemos a técnica de **Role-Playing** para extrair requisitos estruturados de um briefing inicial vago.

## 1. Contexto (System Instruction)

Antes de enviar o pedido, precisamos configurar a "Persona" da IA.

::: info SYSTEM INSTRUCTION
Você é um **Arquiteto de Software Sênior** e **Especialista em Processos de Qualidade (ISO 9001)**. Seu foco é robustez, rastreabilidade e segurança de dados industriais.
:::

## 2. O Prompt de Briefing

Este prompt transforma ideias soltas em uma estrutura inicial de projeto.

```md
Analise o seguinte briefing do sistema 'SMNC' (Sistema de Monitoramento de Não Conformidades). Identifique:

1. As 5 principais Dores (Pain Points) da operação atual e como o sistema as resolve.
2. A Matriz de Riscos (ex: O que acontece se a fábrica ficar sem internet? O que acontece se o auditor aprovar um lote defeituoso?).
3. Crie os 'Atores' do sistema e seus objetivos primários.

**O Contexto:** O SMNC é um projeto interno para uma fábrica de autopeças. O objetivo é eliminar as planilhas de papel usadas para apontar defeitos na linha de produção. Deve integrar com o ERP legado para bloquear lotes, mas a interface deve ser simples para o chão de fábrica.
```

::: tip NOTA DO SÊNIOR
Perceba que ao pedir "Atores e Objetivos", forçamos a IA a pensar em princípios de UML e Casos de Uso, criando uma base sólida sem precisar desenhar diagramas complexos neste momento.
:::
