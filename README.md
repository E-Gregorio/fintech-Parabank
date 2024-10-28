# ParaBank Automated Tests

Este proyecto contiene pruebas automatizadas para ParaBank utilizando Playwright con TypeScript.

## Estado de las Pruebas
[![Playwright Tests for ParaBank](https://github.com/{tu-usuario}/{tu-repo}/actions/workflows/playwright.yml/badge.svg)](https://github.com/{tu-usuario}/{tu-repo}/actions/workflows/playwright.yml)

## Prerequisitos

- Node.js 16 o superior
- npm (viene con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/{tu-usuario}/{tu-repo}.git
cd {tu-repo}
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar navegadores de Playwright:
```bash
npx playwright install
```

## Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con interfaz visual
npm run test:headed

# Ejecutar pruebas en modo debug
npm run test:debug

# Ejecutar pruebas con UI de Playwright
npm run test:ui
```

## Estructura del Proyecto

```
├── tests/
│   └── bank.spec.ts
├── pages/
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   └── AccountsOverviewPage.ts
├── playwright.config.ts
└── package.json
```

## CI/CD

Este proyecto utiliza GitHub Actions para la integración continua. Las pruebas se ejecutan automáticamente en cada push y pull request a las ramas main, master y develop.