# Guía de Verificación Manual - Integración Frontend-Backend

Esta guía te llevará paso a paso para verificar que la integración entre el frontend y backend funciona correctamente.

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:

- ✅ Node.js instalado
- ✅ Docker Desktop corriendo (para PostgreSQL)
- ✅ Dos terminales abiertas

---

## 🚀 Paso 1: Iniciar el Backend

### 1.1 Iniciar la Base de Datos (PostgreSQL)

Abre una terminal y ejecuta:

```bash
cd backend
docker-compose up -d
```

**Verificación**: Deberías ver algo como:

```
✔ Container portfolio-cms-postgres-1  Started
```

### 1.2 Verificar que la Base de Datos tiene Datos

```bash
npm run prisma:studio
```

Esto abrirá Prisma Studio en tu navegador (http://localhost:5555). Verifica que tengas:

- ✅ Al menos 1 registro en `PersonalInfo` (con `isActive = true`)
- ✅ Al menos 1 registro en `Experience` (con `isActive = true`)
- ✅ Al menos 1 registro en `Project` (con `isActive = true`)

**Si NO tienes datos**, ejecuta el seed:

```bash
npm run prisma:seed
```

### 1.3 Iniciar el Servidor Backend

En la misma terminal del backend:

```bash
npm run start:dev
```

**Verificación exitosa**: Deberías ver:

```
🚀 Application is running on: http://localhost:3001/api/v1
📚 Environment: development
🌐 CORS enabled for: http://localhost:3000
🔒 Security: Helmet enabled, JWT authentication active
```

**Mantén esta terminal abierta** ✋

---

## 🎨 Paso 2: Iniciar el Frontend

### 2.1 Abrir una Nueva Terminal

Abre una **segunda terminal** y ejecuta:

```bash
cd frontend
npm run dev
```

**Verificación exitosa**: Deberías ver:

```
▲ Next.js 15.2.4
- Local:        http://localhost:3000
- Environments: .env

✓ Starting...
✓ Ready in 2.5s
```

**Mantén esta terminal abierta también** ✋

---

## ✅ Paso 3: Verificaciones Manuales

Ahora abre tu navegador en **http://localhost:3000** y realiza las siguientes verificaciones:

### 3.1 ✅ Verificar Componente Intro

**Qué verificar:**

- [✅] El título principal (h1) se carga desde el backend
- [✅] La descripción se muestra correctamente
- [✅] El botón "Download CV" aparece (si hay cvUrl en backend)
- [✅] El botón de LinkedIn aparece (si hay linkedinUrl)
- [✅] El botón de GitHub aparece (si hay githubUrl)
- [✅] Los botones tienen los links correctos

**Cómo verificar:**

1. Observa el título principal - debe ser diferente al hardcodeado original
2. Haz clic derecho en los botones → "Copiar dirección del enlace"
3. Verifica que las URLs coincidan con las del backend

**Estado de Loading:**

- [ ] Mientras carga, deberías ver skeletons (barras grises animadas)

---

### 3.2 ✅ Verificar Componente About

**Qué verificar:**

- [✅] El texto "About Me" se carga desde el backend
- [✅] El texto es diferente al hardcodeado original
- [✅] Se muestra correctamente formateado

**Cómo verificar:**

1. Desplázate a la sección "About Me"
2. Lee el contenido - debe coincidir con el `aboutMe` del backend
3. Abre Prisma Studio y compara el texto

---

### 3.3 ✅ Verificar Componente Experience

**Qué verificar:**

- [✅] Se muestran todas las experiencias del backend
- [✅] Cada experiencia muestra: Compañía + Ubicación
- [✅] Se muestra el título del puesto
- [✅] El periodo muestra solo años (ej: "2023 - 2024" o "2024 - Present")
- [✅] La descripción se muestra completa
- [✅] Las tecnologías/skills aparecen como badges

**Cómo verificar:**

1. Desplázate a la sección "My Experience"
2. Cuenta cuántas experiencias se muestran
3. Abre Prisma Studio → tabla `Experience`
4. Verifica que el número coincida con los registros activos
5. Compara los datos de una experiencia con el backend

**Verificar formato de fechas:**

- Si `endDate` es null → debe mostrar "Present"
- Si `startDate` y `endDate` son del mismo año → solo mostrar ese año
- Si son diferentes → mostrar "YYYY - YYYY"

---

### 3.4 ✅ Verificar Componente Projects

**Qué verificar:**

- [✅] Se muestran exactamente 2 proyectos (aunque haya más en backend)
- [✅] Cada proyecto muestra una imagen
- [✅] El título del proyecto es correcto
- [✅] La descripción se muestra completa
- [✅] Las skills aparecen como badges
- [✅] El link a GitHub funciona (si existe)

**Cómo verificar:**

1. Desplázate a la sección "My Projects"
2. Cuenta los proyectos - deben ser máximo 2
3. Haz clic en una imagen - debe llevarte al GitHub del proyecto
4. Verifica que las imágenes se cargan correctamente

**Si las imágenes NO cargan:**

- Abre la consola del navegador (F12)
- Busca errores relacionados con imágenes
- Verifica que `next.config.js` tenga configurado el dominio correcto

---

### 3.5 ✅ Verificar Formulario de Contacto

#### Prueba 1: Datos Válidos

**Pasos:**

1. Desplázate a la sección "Get In Touch"
2. Verifica que el email mostrado coincida con el del backend
3. Llena el formulario:
   - **Name**: Tu Nombre (mínimo 2 caracteres)
   - **Email**: tu@email.com (email válido)
   - **Subject**: Prueba de integración (mínimo 2 caracteres)
   - **Message**: Este es un mensaje de prueba para verificar la integración (mínimo 10 caracteres)
4. Haz clic en "Submit"

**Resultado esperado:**

- [✅] El botón cambia a "Sending..." mientras envía
- [✅] Aparece un toast verde con "Message sent successfully!"
- [✅] El formulario se limpia automáticamente

**Verificar en backend:**

1. Abre Prisma Studio
2. Ve a la tabla `ContactMessage`
3. Deberías ver tu mensaje recién enviado

#### Prueba 2: Datos Inválidos

**Pasos:**

1. Intenta enviar el formulario con:
   - Name vacío
   - Email inválido (ej: "test")
   - Subject con 1 carácter
   - Message con menos de 10 caracteres

**Resultado esperado:**

- [✅] Aparecen mensajes de error en rojo debajo de cada campo
- [✅] El formulario NO se envía
- [✅] Los mensajes de error son claros y descriptivos

**Ejemplos de mensajes de error:**

- "Name must be at least 2 characters"
- "Must be a valid email"
- "Subject must be at least 2 characters"
- "Message must be at least 10 characters"

---

### 3.6 ✅ Verificar Footer

**Qué verificar:**

- [✅] Muestra "© 2025 Nelson Cadenas. All rights reserved."

---

### 3.7 ✅ Verificar Navegación entre Secciones

**Qué verificar:**

- [✅] El menú de navegación funciona
- [✅] Al hacer clic en cada link, se desplaza a la sección correcta
- [✅] El scroll es suave (smooth)
- [✅] La sección activa se resalta en el menú

**Cómo verificar:**

1. Haz clic en "Home" → debe ir al inicio
2. Haz clic en "About" → debe ir a About Me
3. Haz clic en "Experience" → debe ir a experiencias
4. Haz clic en "Projects" → debe ir a proyectos
5. Haz clic en "Contact" → debe ir al formulario

---

### 3.8 ✅ Verificar Responsive Design

**Qué verificar:**

- [✅] La página se ve bien en desktop
- [✅] La página se ve bien en tablet
- [✅] La página se ve bien en móvil

**Cómo verificar:**

1. Abre DevTools (F12)
2. Haz clic en el ícono de dispositivo móvil (o Ctrl+Shift+M)
3. Prueba diferentes tamaños:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
4. Verifica que todo se vea bien en cada tamaño

---

### 3.9 ✅ Verificar Estados de Loading

**Qué verificar:**

- [✅] Al cargar la página, se muestran skeletons
- [✅] Los skeletons desaparecen cuando los datos cargan
- [✅] No hay "flash" de contenido

**Cómo verificar:**

1. Abre DevTools (F12) → pestaña "Network"
2. Activa "Disable cache"
3. Selecciona "Slow 3G" en el throttling
4. Recarga la página (Ctrl+R)
5. Observa los skeletons mientras carga

---

### 3.10 ✅ Verificar Manejo de Errores de Red

#### Prueba 1: Backend Apagado

**Pasos:**

1. Detén el servidor backend (Ctrl+C en la terminal del backend)
2. Recarga la página del frontend (Ctrl+R)

**Resultado esperado:**

- [✅] Se muestran mensajes de error amigables
- [✅] No se rompe la aplicación
- [✅] Los componentes muestran "Failed to load..." o similar

#### Prueba 2: Backend Funcionando de Nuevo

**Pasos:**

1. Vuelve a iniciar el backend: `npm run start:dev`
2. Recarga la página del frontend

**Resultado esperado:**

- [✅] Los datos se cargan correctamente
- [✅] Todo funciona normal

---

## 🔍 Verificaciones en la Consola del Navegador

Abre DevTools (F12) y verifica:

### Console (Consola)

- [✅] No hay errores en rojo
- [✅] No hay warnings críticos
- [✅] Solo deberías ver logs informativos (si los hay)

### Network (Red)

1. Recarga la página
2. Busca la petición a `/portfolio`
3. Verifica:
   - [✅] Status: 200 OK
   - [✅] Response contiene los datos esperados
   - [✅] Time: menos de 1 segundo

### Application (Aplicación)

1. Ve a "Application" → "Local Storage"
2. Busca el caché de TanStack Query
3. Verifica que los datos del portfolio estén cacheados

---

## 📊 Checklist Final

Marca cada verificación completada:

### Componentes

- [✅] Intro carga datos del backend
- [✅] About carga datos del backend
- [✅] Experience carga datos del backend
- [✅] Projects carga datos del backend (máximo 2)
- [✅] Contact envía datos al backend
- [✅] Footer muestra datos correctos

### Funcionalidad

- [✅] Formulario valida datos correctamente
- [✅] Formulario envía datos exitosamente
- [✅] Navegación entre secciones funciona
- [✅] Responsive design funciona en todos los tamaños
- [✅] Estados de loading se muestran correctamente
- [✅] Errores se manejan apropiadamente

### Performance

- [✅] La página carga rápido (< 3 segundos)
- [✅] Las imágenes se optimizan automáticamente
- [✅] No hay errores en consola
- [✅] El caché funciona correctamente

---

## 🐛 Troubleshooting

### Problema: "Failed to load portfolio data"

**Solución:**

1. Verifica que el backend esté corriendo
2. Verifica que la URL sea correcta: `http://localhost:3001/api/v1`
3. Verifica CORS en el backend
4. Revisa la consola del navegador para más detalles

### Problema: Las imágenes no cargan

**Solución:**

1. Verifica `next.config.js` → `remotePatterns`
2. Asegúrate de que las URLs de imágenes sean accesibles
3. Reinicia el servidor de Next.js después de cambiar `next.config.js`

### Problema: El formulario no envía

**Solución:**

1. Verifica que todos los campos cumplan las validaciones
2. Revisa la consola del navegador para errores
3. Verifica que el backend esté corriendo
4. Verifica el endpoint: `POST /api/v1/contact-messages/send`

### Problema: No hay datos en el backend

**Solución:**

```bash
cd backend
npm run prisma:seed
```

---

## 📝 Reportar Resultados

Después de completar todas las verificaciones, documenta:

### ✅ Verificaciones Exitosas

Lista las verificaciones que pasaron correctamente.

### ❌ Problemas Encontrados

Lista cualquier problema encontrado con:

- Descripción del problema
- Pasos para reproducirlo
- Mensaje de error (si hay)
- Captura de pantalla (si es relevante)

### 💡 Sugerencias de Mejora

Lista cualquier mejora que notes durante las pruebas.

---

## 🎯 Conclusión

Si todas las verificaciones pasaron:
✅ **La integración está funcionando correctamente**

Si encontraste problemas:
⚠️ **Documenta los problemas y solicita ayuda**

---

**Última actualización**: 29 de Noviembre, 2025  
**Versión**: 1.0.0
