# Notes MCP Authentication Backend

## Descripción

Backend para el sistema de autenticación y gestión de notas utilizando MCP (Model Context Protocol) con FastMCP y Stytch para autenticación OAuth.

## Características

- **Autenticación OAuth**: Integración con Stytch para autenticación segura
- **API MCP**: Implementación del protocolo MCP para herramientas de notas
- **Gestión de notas**: Funcionalidades para crear y obtener notas de usuario
- **CORS habilitado**: Configuración para desarrollo frontend
- **Validación JWT**: Verificación de tokens usando RS256

## Requisitos

- Python 3.12+
- Variables de entorno configuradas
- Dependencias del proyecto instaladas

## Instalación

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
cd notes-mcp-auth
```

2. **Instalar dependencias**:
```bash
uv sync
```

3. **Configurar variables de entorno**:
Crear archivo `.env` en el directorio raíz del proyecto:
```env
STYTCH_DOMAIN=https://test.stytch.com
STYTCH_PROJECT_ID=project-test-9200fce6-b71e-473c-a7e5-c3a362054fa2
STYTCH_SECRET=secret-test-9200fce6-b71e-473c-a7e5-c3a362054fa2
```

## Uso

### Ejecutar el servidor

```bash
python main.py
```

El servidor se ejecutará en `http://127.0.0.1:8000`

### Endpoints disponibles

- **`/.well-known/oauth-protected-resource`**: Metadatos OAuth
- **Herramientas MCP**:
  - `get_my_notes`: Obtener notas del usuario
  - `add_note`: Agregar nueva nota

## Estructura del proyecto

```
notes-mcp-auth/
├── main.py              # Servidor principal MCP (en directorio raíz)
├── pyproject.toml       # Configuración del proyecto y dependencias
├── uv.lock              # Lock file de dependencias
├── backend/             # Directorio del backend
│   └── README.md        # Este archivo
└── frontend/            # Directorio del frontend
```

## Configuración

### Stytch
- Configurar proyecto en [Stytch Dashboard](https://console.stytch.com)
- Obtener Project ID y Secret
- Configurar URLs de redirección permitidas

### CORS
El servidor está configurado para permitir todas las origenes en desarrollo:
```python
allow_origins=["*"]
allow_credentials=True
```

## Desarrollo

### Agregar nuevas herramientas MCP

```python
@mcp.tool()
def nueva_herramienta(ctx, parametro: str) -> str:
    """Descripción de la herramienta"""
    return "resultado"
```

### Agregar nuevas rutas personalizadas

```python
@mcp.custom_route("/ruta", methods=["GET"])
def mi_ruta(request: StarletteRequest) -> JSONResponse:
    return JSONResponse({"mensaje": "Hola"})
```

## Seguridad

- **JWT RS256**: Algoritmo de firma asimétrica
- **Validación de tokens**: Verificación automática de JWT
- **CORS configurado**: Solo para desarrollo

## Troubleshooting

### Error: "STYTCH_DOMAIN not found"
- Verificar que el archivo `.env` existe en el directorio raíz del proyecto
- Comprobar que las variables están definidas correctamente

### Error de autenticación
- Verificar configuración de Stytch
- Comprobar que los tokens JWT son válidos

## Licencia

[Especificar licencia del proyecto]
