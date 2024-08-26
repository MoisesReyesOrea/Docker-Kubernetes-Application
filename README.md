# Docker-Kubernetes-Application (Hub de entretenimiento)  

## 1. Descripción  
Este proyecto es acerca de una aplicación web full stack para visualización de contenido de video para el programa Mega-Liderly, el frontend de este proyecto se realizó con Angular 16, el backend con ASP.NET Core 8 y la base de datos con SQL Server, la aplicación se ejecuta en contenedores Docker, un contenedor para la parte del frontend (Angular), otro contenedor para el Backend y otro más para la base de datos, además se utiliza kubernetes para la gestión de estos contenedores, cada uno con su propio Pod y la comunicación entre estos se realiza mediante el uso de servicios de kubernetes.
Este repositorio cuenta con 3 directorios de cada una de las partes que conforman el proyecto (Angular, asp.NET, SQL Server) en el cual cada uno contiene sus propios archivos Dockerfile, .dockerignore y deployment.yaml para la creación del despliegue y ejecución en contenedores.  

### Objetivo  
Crear una aplicación para la visualización de contenido de entretenimiento como películas, series y deportes, y además llevar la aplicación a contenedores para facilitar el despliegue y su escalabilidad.  

## 2. Requerimientos técnicos:  
Docker: Se debe tener un entorno capaz de ejecutar docker y kubernetes para correr la aplicación, puede ser Docker-desktop.  
- Docker-Desktop: es una aplicación que proporciona una forma sencilla y eficiente de desarrollar, probar y ejecutar aplicaciones en contenedores en un entorno local. Está disponible para sistemas operativos Windows y macOS, y actúa como una interfaz de usuario gráfica para Docker, permitiendo a los desarrolladores interactuar con Docker y Kubernetes.  

GIT: Debe tener Instalado GIT si desea clonar el proyecto.  

## 3. Proceso de desarrollo

### Detalles
Docker es una plataforma que permite a los desarrolladores y equipos de TI crear, desplegar y ejecutar aplicaciones en contenedores de manera eficiente y consistente. Su capacidad para empaquetar aplicaciones con todas sus dependencias y su portabilidad hacen que sea una herramienta fundamental en el desarrollo moderno de software, especialmente en desarrollo de microservicios y DevOps y que pueden ser ejecutados en cualquier entorno asegurando su funcionalidad.    

Kubernetes es una plataforma de orquestación de contenedores que automatiza el despliegue, la escalabilidad, y la gestión de aplicaciones en contenedores. Permite gestionar aplicaciones complejas en contenedores en un entorno distribuido de manera eficiente.  

El proceso de desarrollo estuvo compuesto por 5 fases, en las primeras 5 se desarrolló la aplicación en sus fases como Frontend, Backend, SQl Server, Comunicación y testeo, la quinta fase fue la implementación de Docker y Kubernetes al proyecto.  

## 4. ¿Cómo ejecutar la aplicación?

-- Clona el repositorio haciendo ```git clone https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application.git``` o de manera alternativa descargalo como archivo ZIP y descomprimelo en una carpeta.  

-- Ejecuta el servicio de Docker como por ejemplo docker-desktop o minikube   

-- Creación de imágenes Docker, Abre la terminal en la dirección dentro de la carpeta del proyecto Angular y ejecuta el comando ```'docker build -t hub-de-entretenimiento_angularv16:1 .'``` esto creará la imagen con la configuración del archivo Dockerfile para la posterior creación del contenedor en los pods de kubernetes. Hacer lo mismo para la carpeta de ASP.NET con el comando ```'docker build -t aspnetcore8:1 .'``` y SQL Server ```'docker build -t sqlserver:1 .'```  

-- Creación de los Pods Kubernetes, en la misma terminal ejecuta los siguientes comandos ```'kubectl apply -f deployment.yaml'```  ```'kubectl apply -f asp-deployment.yaml'``` ```'kubectl apply -f sql-deployment.yaml'``` , esto creará los pod.  

-- La aplicación ya se estará ejecutando, abre el navegador y ve a la dirección `http://localhost:31000/` la aplicación se ejecutará en este enlace.  


## 5. Explicación  

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



### Conexión con API REST desarrollada en ASP.NET Core 8 para acceder a base de datos realizada en SQL Server  
**NOTA: La carpeta que contiene el proyecto de la API está en el siguiente enlace: [https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/HubDeEntretenimientoMegaLiderlyBackend](https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/HubDeEntretenimientoMegaLiderlyBackend)**

En la siguiente imagen se muestra la página login de la interfaz en Angular conectada a la API en la ruta: ```http://localhost:3000``` y recibiendo respuesta con status: 200, despues de validar que el usuario y la contraseña ingresadas son correctas y existen en la base de datos SQL Server.
![RespuestaDesdeBackend](https://github.com/user-attachments/assets/9f88f3d2-8aa5-4c0a-ab0c-f7f25893db31)


Si el usuario y contraseña son correctas devuelve mensaje 'Sesión iniciada correctamente'
![SesionIniciadaCorrectamente](https://github.com/user-attachments/assets/3b593c7b-9caf-4e8b-ab9c-a820f427e13b)


Si el usuario ingresado no existe en la base de datos se devuelve un error y un mensaje de 'Usuario no registrado'.
![UsuarioNoRegistrado](https://github.com/user-attachments/assets/2f6e306f-8946-49b9-bf0a-d58be51c65bf)


Si el usuario sí existe en la BD pero la contraseña no coincide con la registrada, se devuelve un error y un mensaje de 'Contraseña incorrecta'.
![ContraseñaIngresadaIncorrectamente](https://github.com/user-attachments/assets/abca7b8c-c09c-4cdb-8ecc-5a5dd7a07a5e)


## 6. Base de datos normalizada (Diagrama).

![diagrama entidad-relacion HUB](https://github.com/user-attachments/assets/118b3518-9f2f-48e1-86ea-63124f605131)

## 7. Documentación de API ASP.NET Core 8 - Swagger

Se utilizó Swagger para documentar y probar cada funcion de las APIs:
![SwaggerDocumentation](https://github.com/user-attachments/assets/0799ee90-416d-403a-b06a-a26ee17abdfc)

## 8. Archivos de configuración de ambientes, Docker y Kubernetes.

Los archivos Docker y .yaml se encuentran dentro de cada carpeta con la aplicación correspondiente. aquí los accesos directos:
https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/Hub-de-Entretenimiento_Angularv16_MegaLiderly
[https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/HubDeEntretenimientoMegaLiderlyBackend](https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/HubDeEntretenimientoMegaLiderlyBackend)
[https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/Hub-de-Entretenimiento_Angularv16_MegaLiderly](https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/Hub-de-Entretenimiento_Angularv16_MegaLiderly)
[https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/SQL%20Server%20Docker](https://github.com/MoisesReyesOrea/Docker-Kubernetes-Application/tree/main/SQL%20Server%20Docker)
## 9. Mejoras a futuro.



## 10. Problemas conocidos.



## 11. Sprint Review
**¿Qué salio bien?**  
- La navegación entre componentes es fluida y dinámica, así como la comunicación entre ellos.

**¿Qué puedo hacer diferente?**
- Se pudieran crear servicios, organizar mejor los componentes y modulos para reutilizar de una mejor manera el código, ademas de que se da una mejor eficiencia y facilidad de escalamiento a la aplicación.  

**¿Qué no salio bien ?**  
- El manejo de listas como: favoriteList, viewedList, popularList que son listas dinamicas que van agregando o eliminando elementos durante la ejecución y actualizar eso de manera reactiva no salio como esperaba.




