API REST desarrollada en Node.js + TypeScript, organizada bajo el patrón MVC, con autenticación, validaciones, carga de archivos y conexión a MongoDB, diseñada para ser consumida por un frontend previamente provisto.

Tecnologías utilizadas: Node.js - Express - TypeScript - MongoDB + Mongoose - JWT (JSON Web Token) - bcryptjs - Zod - Multer - Morgan - dotenv - Cors


Estructura de carpetas que propusimos: 

── src/

─ app.ts                (Configuración de Express)
─ server.ts             (Arranque del servidor)


── config/
─ env.ts            (Variables de entorno)
─ mongodb.ts        (Conexión a MongoDB)
─ logger.ts         (Logger (morgan))


── routes/
─ authRoutes.ts
─ productsRoutes.ts


── controllers/
─ authController.ts
─ productsController.ts


── interfaces/
─ Iproduct.ts
─ Iuser.ts
─ IuserTokenPayload.ts


── models/
─ productModel.ts
─ userModel.ts


── middlewares/
─ authMiddleware.ts
─ rateLimitMiddleware.ts
─ validateMiddleware.ts
─ notFoundMiddleware.ts


── services/
─ authService.ts


─ uploads/
─ dist/
─ .env
─ .env.example
─ package.json
─ tsconfig.json

El backend fue reorganizado siguiendo el patrón MVC, separando responsabilidades para mejorar la mantenibilidad, escalabilidad y claridad del código.

Routes: definen los endpoints.

Controllers: manejan las requests y responses.

Services: encapsulan la lógica de negocio.

Models: definen los esquemas y acceso a datos.

Middlewares: lógica transversal (auth, validaciones, rate limit).

Se separó el punto de entrada del servidor (server.ts) de la configuración de Express (app.ts), evitando un archivo monolítico y resolviendo problemas de mantenimiento y escalabilidad.

Funcionalidades:

Crear productos (protegido)

Obtener listado de productos

Filtrado desde base de datos usando query params:

Categoría

Precio mínimo / máximo

Nombre (búsqueda parcial)

Actualizar productos (protegido)

Eliminar productos (protegido)

Proyecto desarrollado como Trabajo Final de Backend – UTN
Alumno: José Quesada