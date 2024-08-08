# LITIGADE

Este proyecto es una prueba técnica.

La aplicación es una pagina de presentación para la empresa demoninada 'Liigade'. En ella se muestra toda la información relacionada a la empresa y a su vez posee un formulario en
la sección principal para poder agendar una cita. 

Las tecnologias utilizadas para el frontend son las siguientes:
+ React
+ TailwindCSS
+ Typescript

Las tecnologias utilizadas para el backend son las siguientes:
+ MongoDB
+ Flask
+ Python

## Scripts disponibles

Los comandos disponibles son los siguientes:

### `yarn start`

corre la aplicacion en modo desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para poder ver la pagina.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `docker-compose up`

Levanta el servicio para la base de datos. Para este caso se crea un contenedor con docker
utilizando una imagen de MongoDB. Si es la primera que se levanta el mismo crea al usuario indicado en el archivo 'init-mongo.js'. Este servicio cuenta con el volumen integrado para poder almacenar de forma correcta los datos.

### `py server.py`

Corre el servidor en el puerto 5000. Para ejecutar este comando se debe de estar dentro de la carpeta 'server'. Para este caso unicamente se crea una pequeña API con el endpoint para almacenar las citas.
