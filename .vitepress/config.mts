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
        text: 'Fundamentos',
        items: [
          { text: 'O Manifesto MSD.IA', link: '/manifesto' },
          { text: 'Pilares da IA no Código', link: '/pilares' },
        ]
      },
      {
        text: 'Playbook (Prática)',
        items: [
          { text: '1. Setup do Ambiente', link: '/playbook/setup' },
          { text: '2. Workflow de Refatoração', link: '/playbook/refatoracao' },
          { text: '3. Testes com IA', link: '/playbook/testes' },
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