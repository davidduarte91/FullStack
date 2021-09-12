## Elementos de bloque y elementos de línea (video 15)
Los elementos de bloque van a ocupar todo el ancho disponible auqneu su contenido no lo haga, por lo que los elementos que pongamos a continuación saltarán a la siguiente línea.

## Elementos de línea I (video 17)
`<em></em>` -> emphasis. No se usa para simplemente poner el texto en itálica, para eso está CSS. Le decimos al navegador que el texto entre `em` tiene más importancia que el resto del texto.

`<strong></strong>` -> más enfasis. Lo que esté dentro es lo más importante, por encima de "em"

`small` -> Menos enfasis que el texto normal. Es un poco más pequeño que el resto del texto. Le decimos al navegador que tiene menos relevancia que el resto del texto.

`<br>` -> Forzar un salto de línea. Se usa sin la barra de cierre (`</br>`). Se usa en un poema por ejemplo donde sí es relevante que haya un salto de línea. En VSCode para que ponga sin la barra hay que ir a "dar formato al documento con.." y elegir "Configurar el formateador predeterminado" y "elegir características del html".
Para separar a dos elementos NO utilizar varios `<br>` porque es una mala práctica. Para eso está CSS

`<wbr>` -> Salto de línea si hiciera falta. Cuando un texto es demasiado largo y quiero configurar para que "corte" un una parte específica. Si es una url la pongo después de cada barra para que corte después de cada barra. Los guiones también los considera como elementos "wbr" asi que se puede usar guiones bajos.

`time` -> Se usa para representar un contenido de hora/fecha. Se usa por ejemplo cuando tenemos un post o un blog que se ha publicado cierta hora y día. Sería completamente válido si solo pusiera la fecha o la hora.

`i` -> italic. Se usa generalmente cuando se trabaja con librería de iconos. Visitar (Font Awesome)[https://fontawesome.com/]
`b` -> bold. Se hace generalmente con CSS
`u` -> underline. Se hace generalmente con CSS
> estas tres últimas sí sirven para dar estilo

`sup` -> Superíndice
`sub` -> Subíndice

## Introducción a los atributos (video 19)
Los atributos son valores adicionales que configuran los elementos y/o ajustan su comportamiento.
En términos generales hay dos tipos de atributos
* Comunes: Su sintaxis es -> atributo="valor"
Ejemplo: `<html lang="es">`

* Booleanos: Su sintaxis es -> atributo

## Atributos globales (video 21)
Algunos atributos globales que están disponibles para la mayoría de etiquetas en HTML

- class -> Éste atributo se usa para dar estilos a través de CSS
- id -> Es un identificador único que se utiliza para seleccionar el elemento desde JS y para hacer navegación a través de anclas. No se puede repetir y debe ser único.
- title -> Es un atributo que ayuda a la accesibilidad mostrando una descripción del elemento al que pertenece. Aparece el mensaje en un tooltip
- data-* -> Es un atributo que nos permite guardar algún valor en la etiqueta HTML. Se utiliza más para JS. Guarda valores que se pueden ver a través de la consola.

## Introducción a enlaces (video 22 - Folder: web-demo)
**Enlaces:** Conocidos por links popularmente. Su objetivo es conectar una página web con otra página web, con un recurso tanto interno como externo, o con otro sitio web.

Tienen el atributo obligatorio `href`, donde le especificamos la ruta del recurso o sitio que queremos obtener.

También tiene el atributo `target`, que configura cómo queremos visualizar el recurso o sitio que solicitamos.

Si dentro del `href` escribo un slash (/) antes de la ruta, me aparecerá un texto que dice "Body de nuestra página web en un servidor local". Trata sobre rutas absolutas y relativas y se explaya mejor en el siguiente video.

## Rutas absolutas y relativas (video 23 - Folder: web-demo)
* **Rutas absolutas:** Tienen un protocolo, http o https y son únicas en la red. Se suelen utilizar para rutas externas.
* **Rutas relativas:** Pueden ser relativas al punto donde nos encontramos o relativas a la raiz del proyecto

No usan protocolo

Si el recurso se encuentra al mismo nivel (en la misma carpeta) pondremos únicamente el nombre del archivo.

Si necesitas salir de la carpeta actual usaremos ../ y se pone uno por uno cada nivel (carpeta) de la que queremos salir.

Si solo se coloca un "/" le estamos diciendo que vaya al nivel más alto y por defecto en ese nivel buscará un archivo con el nombre "index.html". Por eso es importante que la pagína principal tenga un archivo con ese nombre

## Atributos de los enlaces (video 24 - Folder: web-demo)
* **target:** Define dónde se abrirá el recurso solicitado. Por norma general siempre que uses rutas absolutas pondrás como valor "_blank" (ya viene por defecto el valor "_self" que abre el enlace en la misma pestaña)

* **dowload:** Atributo booleano, sirve para descargar el recurso solicitado.
Importante, el recurso debe estar en tu mismo servidor. NO se puede descargar el html de un enlace externo.
Y si abro el archivo sin usar el servidor local, no funcionará el atributo dowload. Para descargar imágenes de enlaces externos no funciona.

## Navegación con anclas (video 25 - web_demo/paginas/blog e index.html)
Para navegar en distintas partes de la misma página se utiliza el siguiente médodo:
```
<p><a href="#post-1">Post 1</a></p>
<p><a href="#post-2">Post 2</a></p>

<article id="post-1"> 
</article>

<article id="post-2">
</article>
```
Para navegar entre distintos archivos a una parte específica.

en el index.html (si no funciona, poner el punto adelante como en este caso)
```
<p><a href="./paginas/blog.html#post-1">Post 1</a></p>
<p><a href="./paginas/blog.html#post-2">Post 2</a></p>
```
a donde apunta...
```
<article id="post-1"> 
</article>

<article id="post-2">
</article>
```

El `id` va en el artículo y en el `href` va el nombre del id con el *#*

## Introducción a las listas (video 26 - listas.html)
Las listas en HTML sirven para listar contenido. En función del tipo de contenido de nuestra lista tenemos tres tipos de listas:
* **ul** -> **unordered list:** Se utilizan cuando el orden de los elementos no influye (lista de la compra)
* **ol** -> **ordered list:** Se utilizan cuando el orden de los elementos es importante (top 10)
* **dl** -> **definition list:** Se utilizan para hacer una lista de definiciones (diccionario)

## Listas desordenadas (video 27 - listas.html)
Semántica correcta de un menú
```
<nav>
    <ul>
        <li><a href="#post-1">Post 1</a></li>
        <li><a href="#post-2">Post 2</a></li>
        <li><a href="#post-3">Post 3</a></li>
        <li><a href="#post-4">Post 4</a></li>
        <li><a href="#post-5">Post 5</a></li>
    </ul>
</nav>
```