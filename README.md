# A&C Propiedades

Proyecto web desarrollado con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/), usando TypeScript.  
Este sitio está pensado para mostrar información de servicios inmobiliarios y cuenta con un formulario de contacto.

## 🚀 Estructura del Proyecto

```
/
├── public/
│   └── favicon/
│   └── logo/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Inicio/
│   │   ├── Navbar.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios/
│   │   │   ├── index.astro
│   │   │   └── ...
│   │   └── ...
│   └── styles/
│       └── global.css
├── tailwind.config.js (o .mjs)
├── package.json
```

## 🧑‍💻 Tecnologías

- **Astro**: Framework principal.
- **Tailwind CSS**: Utilidades para estilos.
- **TypeScript**: Tipado estático.
- **Vite**: Bundler y servidor de desarrollo.

## 📦 Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/acPropiedades.git
   cd acPropiedades
   ```
2. Instala dependencias:
   ```
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

## 📝 Funcionalidades

- Página principal con información de la empresa.
- Navegación entre servicios.
- Formulario de contacto.
- Diseño responsivo y optimizado.

## 📄 Estructura de componentes

Los componentes están organizados por funcionalidad en la carpeta `src/components`.  
Las páginas y rutas están en `src/pages`, siguiendo la estructura recomendada por Astro.

## 🛠️ Comandos útiles

| Comando            | Acción                                   |
|--------------------|------------------------------------------|
| `npm install`      | Instala dependencias                     |
| `npm run dev`      | Inicia servidor de desarrollo            |
| `npm run build`    | Compila el sitio para producción         |
| `npm run preview`  | Previsualiza el sitio compilado          |

## 📚 Recursos

- [Documentación Astro](https://docs.astro.build)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)

---

**Autor:** DNO8 
**Licencia:** MIT
