# Integración Frontend-Backend

Este documento describe la integración entre el frontend (Next.js) y el backend (NestJS) del portfolio personal.

## Configuración

### Variables de Entorno

Asegúrate de tener las siguientes variables en tu archivo `.env`:

```env
NEXT_PUBLIC_API_URL='http://localhost:3001/api/v1'
```

### Dependencias Instaladas

- `axios`: Cliente HTTP para peticiones REST
- `@tanstack/react-query`: Gestión de estado asíncrono y caché
- `zustand`: Gestor de estado global (preparado para uso futuro)

## Estructura de la Integración

### 1. Configuración de API

**Ubicación**: `src/lib/api/`

- `axios-client.ts`: Cliente Axios configurado con interceptores
- `endpoints.ts`: Definición de todos los endpoints
- `services/`: Servicios para consumir la API
  - `portfolio.service.ts`: Servicio para obtener datos del portfolio
  - `contact.service.ts`: Servicio para enviar mensajes de contacto

### 2. Tipos TypeScript

**Ubicación**: `src/lib/types/`

- `api.types.ts`: Tipos genéricos para respuestas de API
- `portfolio.types.ts`: Tipos específicos del portfolio

### 3. Gestión de Estado

**TanStack Query** se usa para:

- Caché automático de datos
- Refetch inteligente
- Estados de loading y error
- Retry automático

**Configuración**: `src/lib/providers/query-provider.tsx`

### 4. Hooks Personalizados

**`usePortfolio()`**: Hook principal para consumir datos del portfolio

```typescript
const { data, isLoading, error, refetch } = usePortfolio();
```

### 5. Componentes Integrados

Todos los componentes principales han sido integrados con el backend:

#### Intro

- Título dinámico desde `personalInfo.title`
- Descripción desde `personalInfo.description`
- Links a CV, LinkedIn y GitHub

#### About

- Texto "About Me" desde `personalInfo.aboutMe`

#### Experience

- Lista completa de experiencias
- Formato de fechas (solo años)
- Skills asociadas a cada experiencia

#### Projects

- Muestra los primeros 2 proyectos
- Imágenes desde el backend
- Skills asociadas

#### Contact

- Formulario con 4 campos: name, email, subject, message
- Validación con Zod
- Integración con endpoint del backend

#### Footer

- Año: 2025
- Nombre: Nelson Cadenas

## Endpoints Consumidos

### Portfolio Completo

```
GET /api/v1/portfolio
```

Retorna toda la información del portfolio en una sola petición.

### Enviar Mensaje de Contacto

```
POST /api/v1/contact-messages/send
```

Body:

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

## Estados de Carga

Todos los componentes manejan tres estados:

1. **Loading**: Muestra skeletons mientras carga
2. **Error**: Muestra mensaje de error si falla
3. **Success**: Muestra los datos cuando están disponibles

## Optimizaciones Implementadas

### Imágenes

- Configuración de dominios remotos en `next.config.js`
- Uso de `next/image` para optimización automática
- Lazy loading por defecto

### Caché

- TanStack Query cachea datos por 1 minuto
- No refetch automático al cambiar de ventana
- Retry automático en caso de error (1 intento)

### Performance

- Server Components donde es posible
- Client Components solo cuando es necesario
- Animaciones con Framer Motion preservadas

## Cómo Probar

1. **Iniciar el backend**:

```bash
cd backend
npm run start:dev
```

2. **Iniciar el frontend**:

```bash
cd frontend
npm run dev
```

3. **Verificar**:

- Abrir http://localhost:3000
- Los datos deben cargarse desde el backend
- El formulario de contacto debe funcionar

## Troubleshooting

### Error de CORS

Si ves errores de CORS, verifica:

- Backend está corriendo en puerto 3001
- Variable `CORS_ORIGIN` en backend incluye `http://localhost:3000`

### Imágenes no cargan

Verifica:

- `next.config.js` tiene configurado el dominio correcto
- Las URLs de imágenes en el backend son accesibles

### Datos no se actualizan

- Verifica que el backend tenga datos en la base de datos
- Usa las devtools de React Query para ver el estado del caché
- Intenta hacer refetch manual

## Próximos Pasos

- [ ] Implementar área privada (backoffice)
- [ ] Agregar autenticación JWT
- [ ] Implementar CRUD completo desde el frontend
- [ ] Agregar más secciones al portfolio
- [ ] Implementar internacionalización (i18n)
- [ ] Agregar analytics
- [ ] Implementar SEO avanzado
