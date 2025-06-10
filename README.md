# API de Libros

Este proyecto es una **API RESTful** desarrollada con **Node.js**, **Express** y **MongoDB**, diseñada para la gestión completa de libros dentro de una plataforma web. Además de las operaciones CRUD básicas, está pensada para integrarse con una interfaz frontend en React y cuenta con rutas protegidas mediante autenticación de usuarios.

## Características principales

- Crear, listar, editar y eliminar libros  
- Cada libro puede tener título, autor, editorial, año, precio y más  
- Integración con un sistema de autenticación JWT para usuarios registrados  
- Rutas protegidas para operaciones sensibles  
- Listo para conectarse con un frontend en React  
- Código modular y limpio  

## Tecnologías utilizadas

- Node.js  
- Express  
- MongoDB + Mongoose  
- dotenv  
- jsonwebtoken  
- bcryptjs  
- cors  
- nodemon  

## Instalación

1. Cloná el repositorio:
```bash
git clone https://github.com/k-hroma/apiLibros.git
cd apiLibros
```

2. Instalá las dependencias:
```bash
npm install
```

3. Creá un archivo `.env` con las siguientes variables:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/librosdb
JWT_SECRET=tu_clave_secreta
```

4. Ejecutá el servidor:
```bash
npm run dev
```

## Endpoints disponibles

### Libros

| Método | Ruta              | Descripción                      |
|--------|-------------------|----------------------------------|
| GET    | /api/books        | Lista todos los libros           |
| GET    | /api/books/:id    | Obtiene un libro por ID          |
| POST   | /api/books        | Crea un nuevo libro *(autenticado)* |
| PATCH  | /api/books/:id    | Edita un libro *(autenticado)*  |
| DELETE | /api/books/:id    | Elimina un libro *(autenticado)*|

### Autenticación

| Método | Ruta                | Descripción                 |
|--------|---------------------|-----------------------------|
| POST   | /api/auth/register  | Registra un nuevo usuario   |
| POST   | /api/auth/login     | Inicia sesión y devuelve token JWT |

## Estructura del proyecto

```
apiLibros/
├── auth/
│   ├── auth.controller.js
│   └── auth.routes.js
├── controllers/
│   └── book.controller.js
├── models/
│   ├── book.model.js
│   └── user.model.js
├── routes/
│   ├── book.routes.js
│   └── auth.routes.js
├── middlewares/
│   └── verifyToken.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Frontend

Este backend está pensado para integrarse con un cliente desarrollado en **React**, donde los usuarios pueden:

- Ver y buscar libros  
- Registrarse e iniciar sesión  
- Crear, editar o eliminar libros (si están autenticados)  

> Pronto estará disponible el enlace al repositorio del frontend.

## Mejoras futuras

- Validaciones con Zod o Joi  
- Filtros y búsqueda avanzada  
- Paginación y ordenamiento  
- Panel de administrador  

## Autor

Desarrollado por [k-hroma](https://github.com/k-hroma)

---

> Este proyecto forma parte de una aplicación completa para la gestión y venta de libros. Es un ejemplo práctico de backend con autenticación, pensado para producción.
