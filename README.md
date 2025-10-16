# 🐾 VivaPet - Professional Veterinary Clinic & Pet Shop Landing Page

![Badges](https://img.shields.io/badge/Next.js-15-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square) ![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

> 🚀 **Fictional Portfolio Project** - A professional landing page for a veterinary clinic and pet shop, demonstrating structure, resources, and best practices in modern web development.

---

## 📋 About the Project

**VivaPet** is a portfolio project demonstrating the creation of a complete and professional landing page for a veterinary clinic and pet shop business. It features modern design, scalable componentization, professional animations, and multilingual support.

### 🎯 Objectives

- Showcase of modern web development skills
- Demonstration of React/Next.js architecture
- Best practices in TypeScript, TailwindCSS, and animations
- Scalable structure pattern with i18n
- Example of landing page for service business

### ✨ Key Features

- ✅ **Professional Design**: Modern and attractive interface
- ✅ **Responsive**: Works on all devices
- ✅ **Smooth Animations**: Fluid transitions
- ✅ **Performance Optimized**: Next.js 15 with Turbopack
- ✅ **Strict TypeScript**: Complete typing
- ✅ **Multilingual**: Support for multiple languages
- ✅ **SEO Optimized**: Metadata and semantic structure
- ✅ **Accessible**: Accessible components

---

## 🚀 Technologies Used

### Core

- Next.js 15 - React Framework with App Router
- React 19 - JavaScript Library
- TypeScript 5 - Typed Language

### Styling

- TailwindCSS 4 - Utility-first CSS
- Shadcn/UI - Accessible Components
- Lucide React - SVG Icons

### Animations

- Framer Motion - React Animations
- Anime.js - JavaScript Animations

### Internationalization

- next-intl - Multilingual Support
- JSON messages in multiple languages

### Quality

- ESLint - Code Linting
- Prettier - Code Formatting
- Radix UI - Accessibility

---

## 📦 Installation and Execution

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

```bash
git clone https://github.com/usuario/vivapet.git
cd vivapet
npm install
npm run dev
# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev       # Server with Turbopack
npm run build     # Production build
npm run start     # Production server
npm run lint      # Check code
npm run lint:fix  # Fix automatically
npm run format    # Format with Prettier
```

---

## 🏗️ Project Structure

```
vivapet/
├── public/
│   ├── images/            # Optimized images
│   │   ├── doctors/       # Veterinarian photos
│   │   ├── products/      # Product images
│   │   └── services/      # Service images
│   └── favicon.svg
├── messages/              # Translations (i18n)
├── src/
│   ├── app/
│   │   ├── [locale]/     # Routes by language
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── commons/      # Base components
│   │   └── resources/
│   │       └── landing/  # Landing page components
│   ├── types/            # TypeScript interfaces
│   ├── utils/            # Data and helpers
│   └── lib/              # Utilities
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Landing Page Sections

| Section           | Description                      |
| ----------------- | -------------------------------- |
| **Navbar**        | Responsive menu with navigation  |
| **Hero**          | Presentation with call-to-action |
| **Services**      | Veterinary services offered      |
| **Products**      | Pet shop product catalog         |
| **Professionals** | Veterinarians and team           |
| **Booking**       | Appointment form                 |
| **Contact**       | Form and information             |
| **Footer**        | Links and information            |

---

## 🎨 Color Palette

| Color            | Usage             |
| ---------------- | ----------------- |
| Blue (#3b82f6)   | Primary, trust    |
| Orange (#f97316) | Secondary, energy |
| Gray (#111827)   | Main text         |

---

## 📱 Responsiveness

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🌍 Internationalization

Supports language routing:

```
http://localhost:3000/pt   # Portuguese
http://localhost:3000/en   # English
http://localhost:3000/es   # Spanish
```

---

## ⚡ Performance

- Turbopack: Fast builds
- Image Optimization: Lazy loading
- Code Splitting: Automatic
- SSG: Pre-rendering

---

## 📚 Documentation

- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)

---

## 👥 Author

**Developed by**: Gabriel M.  
**Type**: Fictional portfolio project  
**Year**: 2025
