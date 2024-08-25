# ONE-Oracle
Proyecto de encriptador de texto oracle

Es posible notar que los dos no tienen exactamente el mismo patrón, cada uno tiene su identidad. Sin embargo, podemos ver algunos puntos que podemos destacar que es bueno tener en su README, como:

    Título e imagen de portada;
    Insignias;
    Índice;
    Descripción del Proyecto;
    Estado del proyecto;
    Demostración de funciones y aplicaciones;
    Acceso al Proyecto;
    Tecnologías utilizadas;
    Personas Contribuyentes;
    Personas Desarrolladoras del Proyecto;
    Licencia.

<h1 align="center"> Poyecto de Oracle ONE </h1>


Una vez hecho esto, si quieres, puedes hacer una portada o logo del proyecto para poner después del título. 

¿cómo poner la imagen en el archivo? Una vez que hayas creado o encontrado tu diseño, puedes abrirlo en el explorador de archivos y arrastrarlo al archivo README que se está editando, aquí hay un ejemplo hecho en Windows:
i-09 *Traducción: Una descripción de la imágen aquí.*

Dentro de los corchetes [ ], el nombre del archivo de la imagen aparecerá como una descripción, pero es interesante que describas en detalle de qué se trata para ayudar con la accesibilidad. Y dentro de los paréntesis aparece un enlace a tu imagen que GitHub genera al convertirla y alojarla.

Otra forma de colocar una imagen, que es más segura, sería cargar la imagen en su propio repositorio o usar servicios de alojamiento de imágenes como imgur o pasteboard y colocar el enlace generado en markdown, así:

![descripción de la imágen](URL de la imagen generada por el servicio de alojamiento o GitHub)

También puedes usar imágenes disponibles en Internet tomando el enlace y colocándolo de la misma manera mencionada anteriormente, pero no se recomienda, ya que la imagen puede eliminarse y tu repositorio se quedará sin ella más adelante.
Badges

Algunos repositorios utilizan badges, que en traducción literal son placa, emblema o insignia. Sus objetivos son indicar el estado actual del proyecto, licencia si la tiene, versiones, dependencias, pruebas y entre otros.

Un ejemplo del uso de badges en un repositorio de Dropbox, Dropbox Core SDK para Java 8+:
i-10

En él, las insignias se utilizaron para:

    Licencia: Instituto Tecnológico de Massachusetts (MIT);
    Versión de la herramienta de administración de dependencias, Maven: versión 4.0.1;
    Fecha de la última versión del proyecto: Agosto.

Si quieres hacer tus badges, puedes usar Shields.io, que proporciona en la página principal varios ejemplos de Insignias y, además, puedes pegar el enlace a tu repositorio de GitHub en el cuadro de texto inicial, por lo que automáticamente te sugerirá algunas insignias para que las uses en tu proyecto, proporcionando el enlace de la insignia para copiar y pegar en tu README.
i-11

Ejemplos:

1) Estado del proyecto:

Código generado:

   ![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Si deseas dejarlo centrado, también puedes usar la etiqueta de align de HTML, así:

   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>

2) Stars del proyecto:

Código generado:

   ![GitHub Org's stars](https://img.shields.io/github/stars/camilafernanda?style=social)

Resultado:
stars
Índice

GitHub genera automáticamente una tabla de contenido para los archivos README en función de los títulos de las secciones. Para verlo, selecciona el ícono de menú en la esquina superior izquierda del archivo.
readme

Especialmente en README largos, esta es una herramienta excelente para navegar por el documento, ya que redirige al usuario al tema seleccionado.

Sin embargo, si estás interesado en crear tu propio índice para verlo en el archivo, también puedes hacerlo en Markdown.

Ejemplo:

##Índice

*[Título e imagen de portada](#Título-e-imagen-de-portada)

*[Insignias](#insignias)

*[Índice](#índice)

*[Descripción del proyecto](#descripción-del-proyecto)

*[Estado del proyecto](#Estado-del-proyecto)

*[Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)

*[Acceso al proyecto](#acceso-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas Contribuyentes](#personas-contribuyentes)

*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)

* [Licencia](#licencia)

*[Conclusión](#conclusión)

Resultado
i-13_2
Descripción del Proyecto

Como es un objetivo del archivo README describir el proyecto, es bueno que presentes justo después del título o imagen de portada y/o insignias si las tiene, una breve explicación de su proyecto con tu objetivo principal.

Puedes tomar una descripción más objetiva, como la del Dropbox Core SDK para Java 8+:
i-13 *Traducción: una biblioteca de Java para acceder a la API Core v2 basada en HTTP de Dropbox. Este SDK también es compatible con Core API v1 anterior, pero esta compatibilidad se eliminará en algún momento.*

O puede entrar en más detalles, como se hizo en el proyecto GlicoCare y presentar cifras que ejemplifiquen el proyecto, si tiene:
i-12_2
Estado del proyecto

Si optas por no utilizar Badges sobre el estado del proyecto, es interesante que pongas esta información en el propio texto. Ejemplo:

:construction: Proyecto en construcción :construction:

Resultado:

🚧 Proyecto en construcción 🚧

O si quieres centrar:

<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>

En este ejemplo, se usó el emoji :construction:, pero puede usarlo en cualquier parte del archivo, como antes de los subtítulos. En este Gist de Rafael Xavier de Souza, puedes encontrar una variedad de emojis para usar en tu README y hacerlo más llamativo.
Características de la aplicación y demostración

Puedes enumerar las características de tu proyecto para que sea más fácil de entender para el usuario. Para eso, puedes hacerlo así:

## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: descripción de la funcionalidad 1- `Funcionalidad 2`: descripción de la funcionalidad 2- `Funcionalidad 2a`: descripción de la funcionalidade 2a relacionada con la funcionalidad 2- `Funcionalidad 3`: descripción de la funcionalidad 3

Resultado:
i-14

Además, si es posible, es interesante presentar las funcionalidades con un ejemplo visual del proyecto, como un gif, imágenes o vídeo.

Recordando que el procedimiento para colocar gif es el mismo que el adoptado para imágenes y puedes grabar gifs con grabadores de pantalla, como Acethinker.
Acceso al proyecto

Si tu proyecto está onine con un servicio de alojamiento, puedes proporcionar el enlace. De lo contrario, se puede apostar por gifs e imágenes, como se mencionó anteriormente, así como indicar cómo el usuario puede descargar el proyecto, abrirlo y ejecutarlo.

¿Cómo se puede hacer en Markdown?

\## 📁 Acceso al proyecto

**Indica cómo se puede descargar o acceder al código fuente del proyecto, ya sea proyecto inicial o final**

\## 🛠️ Abre y ejecuta el proyecto

**Muestra las instrucciones necesarias para abrir y ejecutar el proyecto**

Tecnologías utilizadas

También puedes mencionar las tecnologías utilizadas en el proyecto, es una excelente manera de demostrar lo que has estado estudiando en este mar que es la tecnología.

Puedes citar con textos, ejemplo:
i-15
Personas Contribuyentes

Si tu proyecto tiene colaboradores, es bueno agregarlos al README. Un ejemplo fantástico de esto es Docusaurus, donde tienes las fotos de todos los colaboradores y un enlace a otro documento markdown con mensajes importantes para aquellos que también quieren contribuir:
i-18
Personas desarolladoras del proyecto

¡Ahora es tu turno! Es importante que pongas tu foto también, si no te gustan las fotos usa el usuario por defecto de GitHub o haz tu propio Octocat. Además, puedes vincular tu nombre de usuario, por si algún usuario quiere ponerse en contacto o denunciar algo.

## Autores

| [<img src="https://avatars.githubusercontent.com/u/37356058?v=4" width=115><br><sub>Camila Fernanda Alves</sub>](https://github.com/camilafernanda) |  [<img src="https://avatars.githubusercontent.com/u/71970858?v=4" width=115><br><sub>Ellen Pimentel</sub>]([https://github.com/guilhermeonrails](https://github.com/ellenpimentel)) |  [<img src="https://avatars.githubusercontent.com/u/91544872?v=4" width=115><br><sub>Génesys Rondón</sub>](https://github.com/genesysaluralatam) |
| :---: | :---: | :---: |

Resultado:
i-22
Licencia

Generalmente, los repositorios públicos en GitHub se utilizan para compartir software de código abierto. Sin embargo, para que un repositorio sea verdaderamente de código abierto, necesita obtener una licencia para que otros tengan la libertad de usar, cambiar y distribuir el software.

Por tanto, si tu repositorio tiene licencia, es imprescindible que la pongas en tu README. Como se hace en Docusaurus:
i-20 *Traducción: Docusaurus tiene licencia del MIT. La documentación de Docusaurus (p. ej., archivos .md en la carpeta ./docs) tiene licencia Creative Commons.*