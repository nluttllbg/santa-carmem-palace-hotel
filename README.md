# Santa Carmem Palace Hotel

Landing page institucional em Next.js 14, Tailwind CSS, GSAP, ScrollTrigger e Lenis.

## Rodar localmente
```bash
npm install
npm run dev
```

## Gerar a versão estática

```bash
npm ci
npm run build
```

A exportação estática é criada em `out/`. O workflow em `.github/workflows/deploy.yml` publica esse conteúdo no GitHub Pages sempre que há um push para `main` (ou manualmente pela aba Actions).

## GitHub Pages

O site está configurado para o endereço de projeto `https://nluttllbg.github.io/santa-carmem-palace-hotel/`. O `basePath` do Next.js corresponde ao nome do repositório.

## Observações
- As imagens são carregadas de URLs públicas do Unsplash e precisam de internet.
- Confirme com o hotel a disponibilidade de café da manhã e demais serviços antes de divulgar condições específicas.
- Depoimentos, preços, tipos de quarto e horários não foram inventados nem incluídos.
