import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MSD.IA",
  description: "Metodologia Senior de Desenvolvimento com IA",
  lang: 'pt-BR',
  
  themeConfig: {
    nav: [
      { text: 'Manifesto', link: '/manifesto' },
      { text: 'Playbook', link: '/playbook/setup' },
      { text: 'Prompts', link: '/prompts/library' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'A Metodologia Living Lab', link: '/docs/guia-estudos/metodologia' }
        ]
      },
      {
        text: 'Módulo 1: O Arquiteto Sintético',
        items: [
          { text: 'Discovery e Briefing Inicial', link: '/docs/modulo-1-discovery/aula-1-briefing' },
          { text: 'Refinamento do Contexto', link: '/docs/modulo-1-discovery/aula-2-refinamento-briefing' }
        ]
      },
      {
        text: 'Módulo 2: O QA Adversarial',
        items: [
          { text: 'Encontrando Falhas Críticas', link: '/docs/modulo-2-analise-risco/aula-1-qa-adversarial' }
        ]
      },
      {
        text: 'Módulo 3: Lógica Determinística',
        items: [
          { text: 'Regras e Tabelas Verdade', link: '/docs/modulo-3-logica/aula-1-tabelas-verdade' }
        ]
      },
      {
        text: 'Módulo 4: Refinamento Estratégico',
        items: [
          { text: 'Pivotagem de Negócio', link: '/docs/modulo-4-estrategia/aula-1-pivotagem' },
          { text: 'Estratégia de Transição', link: '/docs/modulo-4-estrategia/aula-2-estrategia-transicao' }
        ]
      },
      {
        text: 'Módulo 5: Arquitetura Técnica',
        items: [
          { text: 'Design Patterns e Soluções', link: '/docs/modulo-5-engenharia/aula-1-patterns' }
        ]
      },
      {
        text: 'Módulo 6: Documentação e Delivery',
        items: [
          { text: 'Documento de Visão (1ª Versão)', link: '/docs/modulo-6-documentacao/aula-1-design-thinking' },
          { text: 'Refinamento do Problema', link: '/docs/modulo-6-documentacao/aula-2-refinamento-problema' },
          { text: 'Integrando o Fluxo Operacional', link: '/docs/modulo-6-documentacao/aula-3-integrando-operacional' },
          { text: 'Revisões Finais do Documento', link: '/docs/modulo-6-documentacao/aula-4-revisoes-finais' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/seu-usuario' }
    ],
    
    footer: {
      message: 'MSD.IA - Metodologia Senior.',
      copyright: 'Copyright © 2026'
    }
  }
})