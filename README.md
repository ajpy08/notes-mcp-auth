# Notes MCP Authentication

## Descripción

Sistema completo de gestión de notas con autenticación OAuth implementado usando MCP (Model Context Protocol). El proyecto combina un backend Python con FastMCP y un frontend React con Stytch para proporcionar una experiencia de usuario segura y moderna.

## Arquitectura

- **Backend**: API MCP con autenticación JWT usando Stytch
- **Frontend**: Aplicación React con sistema de login integrado
- **Protocolo**: MCP para comunicación entre componentes
- **Autenticación**: OAuth 2.0 con Stytch

## Características principales

- 🔐 Autenticación segura con Stytch
- 📝 Gestión de notas por usuario
- 🚀 API MCP estándar
- ⚛️ Frontend React moderno
- 🔄 CORS configurado para desarrollo

## Estructura del proyecto

```
notes-mcp-auth/
├── main.py              # Servidor MCP principal
├── pyproject.toml       # Dependencias Python
├── backend/             # Documentación del backend
├── frontend/            # Aplicación React
└── README.md            # Este archivo
```

## Inicio rápido

### Backend
```bash
cd notes-mcp-auth
uv sync
python main.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Tecnologías

- **Backend**: Python, FastMCP, Stytch, SQLAlchemy
- **Frontend**: React 19, Vite, Stytch React
- **Protocolo**: MCP (Model Context Protocol)
- **Autenticación**: OAuth 2.0, JWT RS256

## Documentación

- **Backend**: Ver [backend/README.md](backend/README.md)
- **Frontend**: Ver [frontend/README.md](frontend/README.md)

## Licencia

[Especificar licencia del proyecto]
