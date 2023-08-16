# SPRINT 8

Sprint final de modulo 8 - Desarrollo de Aplicaciones Full Stack JavaScript Trainee v2.0

## Dependencias

El proyecto utiliza las siguientes dependencias:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs) ^2.4.3
- [dotenv](https://www.npmjs.com/package/dotenv) ^16.3.1
- [express](https://www.npmjs.com/package/express) ^4.18.2
- [express-fileupload](https://www.npmjs.com/package/express-fileupload) ^1.4.0
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) ^7.1.2
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) ^9.0.1
- [morgan](https://www.npmjs.com/package/morgan) ^1.10.0
- [pg](https://www.npmjs.com/package/pg) ^8.11.2
- [pg-hstore](https://www.npmjs.com/package/pg-hstore) ^2.3.4
- [sequelize](https://www.npmjs.com/package/sequelize) ^6.32.1

## Requisitos Previos

Antes de comenzar, asegúrate de seguir estos pasos:

1. Ejecuta el archivo `inicio.sql` en tu base de datos para configurar la estructura inicial.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Ejecuta `npm install` para instalar las dependencias necesarias.

2. Crea un archivo `.env` en base al `.env.example` proporcionado y completa las variables de entorno requeridas.

3. Para ejecutar la aplicación en modo de desarrollo, usa el comando `npm run dev` (asegúrate de tener `nodemon` instalado de forma global). Si no tienes `nodemon`, utiliza `npm run start` en su lugar.
