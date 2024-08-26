# Hub De Entretenimiento Mega - Liderly

## 1. Descripción
Este repositorio cuenta con una app web realizada con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14. Se trata de una aplicacion frontend para la visualizacion de peliculas, series, deportes y más en formato de streaming.

### Objetivo
El objetivo es crear una aplicación full stack siendo este proyecto la parte del frontend que sera conectada a un backend para la visualizacion de archivos multimedia.

## 2. Requerimientos técnicos:
NODE: Se debe instalar NODE JS v18 en el sistema operativo  
ANGULAR/CLI: Para poder manipular el proyecto con la interfaz de Angular v16  
GIT: Debe tener Instalado GIT  

## 3. ¿Cómo ejecutar la aplicación?

-- Clona el repositorio haciendo ```git clone https://github.com/MoisesReyesOrea/Hub-de-Entretenimiento_Angularv16_MegaLiderly.git```  
-- Instala de los paquetes y módulos requeridos: ```npm install```  
-- Abre cualquier terminal en la direccion dentro de la carpeta del proyecto y ejecuta el comando ```'npm start'``` o ```'ng serve'``` o bien hacerlo desde un editor de código.  
-- Abre algún navegador y ve a la dirección `http://localhost:4200/` la aplicación se ejecutará en ese enlace.  

## 4. Explicación  
Para correr la aplicación se ejecuta el comando ```'npm start'```, esta imágen muestra el server en ejecucion para el funcionamiento de la aplicación.
![ejecucion](https://github.com/user-attachments/assets/1fb79272-7f6f-4588-aa74-1d883f188433)


Página de inicio de sesión, los campos de ingreso de datos cuentan con validaciones que deberán ser cumplidas para habilitar el boton de inicio de sesión y así entrar a la aplicación
![inicio-de-sesion](https://github.com/user-attachments/assets/e65a4703-e9eb-452d-bf50-f32066e4c494)


Página de inicio de la aplicación aquí se muestran algunas recomendaciónes populares, en la parte de abajo esta la barra de navegación para visitar diferentes páginas y ver distinto contenido.
![home-page](https://github.com/user-attachments/assets/c8a196d0-9597-41f1-9645-adbf2dda6d89)


Pagina de peliculas, aqui se muestran todas las peliculas disponibles en el momento, hay otras páginas similares con contenido distinto como series, eventos deportivos, historial de visitas y favoritos.
![movies-page](https://github.com/user-attachments/assets/4e367769-3835-4c39-b5fc-46e22e32f06c)

### Pruebas Unitarias
Como parte de la calidad del software se realizan los testing correspondientes a los componentes y servicios de la aplicación.

Codigo para el testing de la sección 'LOGIN' de la aplicacion, se ejecutan pruebas que se encargan de verificar las validaciones de los datos ingresados en el formulario. 
![Captura de pantalla 2024-07-25 121505](https://github.com/user-attachments/assets/a8fb64fe-e779-41d2-8b2c-128181423999)
![Captura de pantalla 2024-07-25 121528](https://github.com/user-attachments/assets/e3158d34-f226-47bc-99bd-71f768c7bd8f)


#### Reporte Code Coverage:
![Captura de pantalla 2024-07-25 121104](https://github.com/user-attachments/assets/762c4499-7c74-4fb0-88b9-10e49c4915ae)



### Conexión con API REST desarrollada en express.js para acceder a base de datos realizada en SQL Server  
**NOTA: El repositorio que contiene el proyecto de la API y la Base de datos está en el siguiente enlace: https://github.com/MoisesReyesOrea/Hub-de-Entretenimiento_Backend-ExpressJS_MEGA**

En la siguiente imagen se muestra la página login de la interfaz en Angular conectada a la API en la ruta: ```http://localhost:3000``` y recibiendo respuesta con status: 200, despues de validar que el usuario y la contraseña ingresadas son correctas y existen en la base de datos SQL Server.
![RespuestaDesdeBackend](https://github.com/user-attachments/assets/9f88f3d2-8aa5-4c0a-ab0c-f7f25893db31)


Si el usuario y contraseña son correctas devuelve mensaje 'Sesión iniciada correctamente'
![SesionIniciadaCorrectamente](https://github.com/user-attachments/assets/3b593c7b-9caf-4e8b-ab9c-a820f427e13b)


Si el usuario ingresado no existe en la base de datos se devuelve un error y un mensaje de 'Usuario no registrado'.
![UsuarioNoRegistrado](https://github.com/user-attachments/assets/2f6e306f-8946-49b9-bf0a-d58be51c65bf)


Si el usuario sí existe en la BD pero la contraseña no coincide con la registrada, se devuelve un error y un mensaje de 'Contraseña incorrecta'.
![ContraseñaIngresadaIncorrectamente](https://github.com/user-attachments/assets/abca7b8c-c09c-4cdb-8ecc-5a5dd7a07a5e)



## 5. Proceso de desarrollo

### Detalles
Angular es un framework de código abierto en TypeScript mantenido por Google y una comunidad activa de desarrolladores.

Diseñado para la creación eficiente de aplicaciones web dinámicas y de una sola página (SPA), Angular ofrece una estructura robusta basada en componentes.



## 6. Tabla con Sprint Review
**¿Qué salio bien?**  
- La navegación entre componentes es fluida y dinámica, así como la comunicación entre ellos.

**¿Qué puedo hacer diferente?**
- Se pudieran crear servicios, organizar mejor los componentes y modulos para reutilizar de una mejor manera el código, ademas de que se da una mejor eficiencia y facilidad de escalamiento a la aplicación.  

**¿Qué no salio bien ?**  
- El manejo de listas como: favoriteList, viewedList, popularList que son listas dinamicas que van agregando o eliminando elementos durante la ejecución y actualizar eso de manera reactiva no salio como esperaba.





This project was generated with Angular CLI version 16.2.14.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
