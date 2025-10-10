# 🐾 VivaPet - Clínica Veterinária & Pet Shop

![VivaPet Banner](public/favicon.svg)

## 🎨 Visão Geral do Projeto

VivaPet é uma landing page profissional e moderna para clínica veterinária e pet shop, desenvolvida com as mais recentes tecnologias web. O design foi cuidadosamente elaborado para transmitir confiança, profissionalismo e amor pelos animais.

## ✨ Características Principais

### Design Profissional

- **Paleta de Cores Moderna**: Azul (#3b82f6) representando confiança, Laranja (#f97316) transmitindo energia e alegria dos pets
- **Tipografia Otimizada**: Inter para corpo de texto e Poppins para títulos
- **UI/UX Excepcional**: Interface intuitiva com animações suaves e transições fluidas
- **Responsivo**: Perfeito em todos os dispositivos (mobile, tablet, desktop)

## Tecnologias Utilizadas

### Core

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React 19** - Biblioteca JavaScript

### Estilização

- **TailwindCSS** - Framework CSS utility-first
- **Shadcn/UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones SVG modernos

### Fontes

- **Inter** - Fonte sans-serif para corpo
- **Poppins** - Fonte display para títulos

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
