# VivaPet - Modern Pet Shop Landing Page

Uma landing page completa e responsiva para a VivaPet, um pet shop moderno que oferece serviços de banho, tosa, hospedagem, catálogo de produtos, agendamento online e contato.

## Tecnologias Utilizadas

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS v4**
- Componentes UI locais simulando shadcn/ui

## Como Rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Bibliotecas Opcionais

Para funcionalidades extras, instale opcionalmente:

```bash
npm install @shadcn/ui lucide-react framer-motion class-variance-authority
```

Sem essas bibliotecas, o projeto usa componentes locais em `components/ui/*` que simulam a API do shadcn/ui.

## Estrutura do Projeto

- `app/`: Páginas Next.js
- `components/`: Componentes React organizados por seção
- `data/`: Dados mock para produtos e serviços
- `lib/`: Utilitários e tipos TypeScript
- `public/images/`: Imagens do projeto (substitua pelos arquivos reais)

## Funcionalidades

- Navbar responsiva com menu mobile
- Seção Hero com call-to-actions
- Serviços com cards interativos
- Catálogo de produtos com badges
- Formulário de agendamento com validação
- Formulário de contato
- Footer com links e informações

## SEO e Acessibilidade

- Metadados otimizados
- Atributos alt em imagens
- Estrutura semântica HTML
- Labels e aria-required em formulários

## Build e Deploy

```bash
npm run build
npm start
```

Para deploy, use Vercel, Netlify ou qualquer plataforma que suporte Next.js.
