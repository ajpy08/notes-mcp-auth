# Notes MCP Frontend

## Descripción

Frontend React para el sistema de gestión de notas con autenticación integrada usando Stytch. La aplicación permite a los usuarios autenticarse y gestionar sus notas personales.

## Características

- **Autenticación Stytch**: Sistema de login seguro con Stytch
- **Gestión de notas**: Interfaz para crear y ver notas de usuario
- **React 19**: Utiliza la última versión de React con hooks modernos
- **Vite**: Build tool rápido para desarrollo
- **Responsive**: Diseño adaptable a diferentes dispositivos

## Requisitos

- Node.js 18+
- npm o yarn
- Cuenta de Stytch configurada

## Instalación

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
cd notes-mcp-auth/frontend
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar variables de entorno**:
Crear archivo `.env` en el directorio `frontend/`:
```env
VITE_STYTCH_PUBLIC_TOKEN=tu_public_token_aqui
```

## Uso

### Desarrollo

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173`

### Build de producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Estructura del proyecto

```
frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── package.json         # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
├── eslint.config.js    # Configuración de ESLint
└── .env                # Variables de entorno (no incluido en git)
```

## Configuración

### Stytch

1. **Crear cuenta en [Stytch](https://stytch.com)**
2. **Configurar proyecto**:
   - Obtener Project ID
   - Obtener Public Token
   - Configurar URLs de redirección

3. **Configurar variables de entorno**:
El token público se configura automáticamente desde `VITE_STYTCH_PUBLIC_TOKEN` en `.env`

### URLs de redirección

Para desarrollo local, usar:
- `http://localhost:5173` (página principal)

Para producción, usar tu dominio real.

## Componentes principales

### App.jsx
- Componente raíz de la aplicación
- Maneja el estado de autenticación del usuario
- Renderiza `StytchLogin` o `IdentityProvider` según el estado

### StytchLogin
- Formulario de login proporcionado por Stytch
- Maneja autenticación con email/password
- Configurado para redirigir después del login

### IdentityProvider
- Componente que se muestra después del login
- Aquí puedes agregar la funcionalidad de gestión de notas

## Dependencias principales

- **@stytch/react**: Componentes de UI para Stytch
- **@stytch/vanilla-js**: Cliente JavaScript de Stytch
- **react**: Biblioteca principal de React
- **vite**: Build tool y servidor de desarrollo

## Desarrollo

### Agregar nuevos componentes

```jsx
// src/components/MiComponente.jsx
import React from 'react';

function MiComponente() {
  return <div>Mi componente</div>;
}

export default MiComponente;
```

### Agregar nuevas páginas

```jsx
// src/pages/MiPagina.jsx
import React from 'react';

function MiPagina() {
  return <div>Mi página</div>;
}

export default MiPagina;
```

### Configurar rutas

Usar React Router para navegación entre páginas:
```bash
npm install react-router-dom
```

## Troubleshooting

### Error: "The Connected App requested could not be found"
- Verificar que el archivo `.env` existe con `VITE_STYTCH_PUBLIC_TOKEN`
- Comprobar que las URLs de redirección estén configuradas en Stytch
- Asegurarse de que el dominio esté en la lista de permitidos

### Error de CORS
- Verificar que el backend tenga CORS configurado correctamente
- Comprobar que las URLs coincidan entre frontend y backend

### Problemas de autenticación
- Verificar configuración de Stytch
- Comprobar que el usuario esté registrado en Stytch

## Despliegue

### Variables de entorno
Crear archivo `.env` para configuración local:
```env
VITE_STYTCH_PUBLIC_TOKEN=tu_token_aqui
```

### Build de producción
```bash
npm run build
```

Los archivos se generarán en el directorio `dist/`

## Licencia

[Especificar licencia del proyecto]
