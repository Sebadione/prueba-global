
# Prueba Global

## 📋 Descripción
Este proyecto es una API construida con **NestJS** que gestiona usuarios y perfiles, utilizando **MongoDB Atlas** como base de datos en la nube y **Swagger** para la documentación. Proporciona operaciones CRUD para manejar entidades como User y Profile. Proyecto realizado como prueba técnica.

---

## 🛠 Características
- **Endpoints CRUD**:
  - Crear, leer, actualizar y eliminar usuarios.
  - Manejo de perfiles anidados dentro de los usuarios.
- **Validación** con `class-validator`.
- **Documentación** de API con **Swagger**.
- **Base de datos**: MongoDB mediante **Mongoose**.
- **Ruta base de la API**: /api/v1.

---

## 🚢 Ejecutar con Docker

Si prefieres ejecutar este proyecto usando Docker, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Sebadione/prueba-global.git
   cd prueba-global
   ```

1. **Construir la imagen de Docker**:
   En el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen Docker:
   ```bash
   docker build -t prueba-global .
   ```

2. **Ejecutar el contenedor**:
   Una vez que la imagen esté construida, ejecuta el contenedor con el siguiente comando:
   ```bash
   docker run -p 3000:3000 prueba-global
   ```

3. **Accede a la API**:
   La aplicación estará disponible en [http://localhost:3000/api/v1](http://localhost:3000/api/v1).

---

Si prefieres usar Docker Compose para gestionar la ejecución, sigue estos pasos:

1. **Inicia la aplicación**:
   Ejecuta el siguiente comando en el directorio raíz del proyecto:
   ```bash
   docker-compose up --build

## 🚀 Instalación sin Docker

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Sebadione/prueba-global.git
   cd prueba-global
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

4. **Ejecutar el proyecto**:
   - **Modo desarrollo**:
     ```bash
     npm run start:dev
     ```
   - **Producción**:
     ```bash
     npm run build
     npm run start:prod
     ```

---

## 📚 Documentación de API
Accede a la documentación de la API generada con Swagger en:
```
http://localhost:3000/api-docs
```

---

## 🔑 Endpoints principales
### Usuarios (`/users`)
- `GET /users`: Obtener todos los usuarios.
- `GET /users/:id`: Obtener un usuario por su ID.
- `POST /users`: Crear un nuevo usuario.
- `PUT /users/:id`: Actualizar un usuario por ID.
- `DELETE /users/:id`: Eliminar un usuario por ID.

---

## ✅ **Pruebas**
Este proyecto incluye pruebas unitarias para los endpoints GET.

1. **Ejecutar pruebas**:
   ```bash
   npm run test
   ```

---

## 🛑 Requisitos
- Node.js >= 16.x

---
