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

Cada elemento de la lista se representa con la etiqueta `<li>`, tanto en las ul como en las ol

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

## Listas ordenadas (video 28 - listas.html)
Es muy importante saber cuando es correspondiente usar una lista ordenada o desordenada, ya que el navegador los interpreta de distintas maneras.

## Listas de definición (video 29 - listas.html)
Cada elemento de una lista de definición lleva 2 etiquetas:
* **dt** -> **Definition term:** El término que vamos a definir.
* **dd** -> **Definition description:** La descripción del término.

## Listas anidadas y de atributos (video 30 - )
Se pueden construir listas anidadas teniendo en uno de los `li` otro ul/ol según sea necesario. Se pueden construir de cualquier manera

```
<ol>
    <li>
        HTML
        <ul>
            <li>Estructura</li>
            <li>Sintaxis</li>
            <li>Etiquetas</li>
        </ul>
    </li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

* Atributos de las listas:

        ol ->
            type: Estilo de numeración (1, A, a, I, i)
            start: Inicio de la secuencia (un número)
        ul ->
            type: Estilo de los items (disc, square, circle)


## Introducción a las tablas (video 31 - tablas.html)
Las tablas en HTML sirven para mostrar contenido tabulado

La estructura básica de una tabla se compone de:
* **table:** Etiqueta que encierra una tabla.
* **tr:** table row, etiqueta que construye una fila.
* **td:** table data, etiqueta que construye una celda.

**truco:** el número de celdas dentro de un `td` establecerá el número de columnas de una tabla. 

## Estructura completa de una tabla (video 33 - tablas.html)
Los *títulos* de las tablas se establecen con la etiqueta `caption`, es una etiqueta opcional, y según la especificación, esa etiqueta se coloca justo después de la etiqueta table.

Las *cabeceras* de las tablas se establecen con la etiqueta `thead`. Dentro tendremos un etiqueta `tr` normal, pero en el caso de las celdas, las estableceremos con la etiqueta `th` en lugar de `td`

El contenido de la tabla debe ir dentro de una etiqueta `tbody` para representar el cuerpo de la tabla.

De forma opcional podemos colocar un `tfood` a la tabla para establecer un pie de tabla, esto es algo que algunas tablas tienen como suma de cantidades o total.

## Atributos de las tablas (video 34 - tablas.html)
Para hacer que las celdas ocupen más de una fila o más de una columna tenemos dos atributos:
- *rowspan*: sirve para queuna celda ocupe más de una gila, el valor por defecto es 1
- *colspan:* sirve para que una celda ocupe más de una columna, el valor por defecto es 1

Cuando se usa `rowspan` hay que tener en cuenta que "empuja" a las celdas que están debajo, y ese caso hay que eliminar una celda

## Seleccionar columnas (video 35 - tablas.html)
Si necesitamos que una etiqueta `col` agrupe más de una columna, tenemos el atributo `span`, que funciona exactamente igual que `rowspan` y `colspan`

```
<colgroup>
     <col span="5"> <!--equivale a la primera columna-->
     <col>          <!--a la segunda-->
</colgroup>
```

## Más etiquetas importantes de bloques (video 37 - otras_etiquetas_bloque.html)
- *addres:* Se utiliza para aportar información de contacto para el article más cercano o para todo el body
- *blokquote:* Se utiliza para marcar las citas a otros autores o ducumentos. Se puede incluir el atributo `cite` para poner un enlace al documento original y fuente
- *pre:* Se utiliza para tener código preformateado que necesita ser representado igual que se escribió
- *div:* Se usa como división del documento, semánticamente no significa nada. Es un contenedor genérico que se usa generalmente para dar estilos a través de css o para usar algo denominado "delegación de eventos" en javascript
- *hr:* horizontal rule. Se utiliza para decirle al navegador que vamos a cambiar de tema

##  Más etiquetas de linea (video 38 - otras_etiquetas_linea.html )
- *span:* Es un contenedor de línea, equivalente a `div`. Se suele usar oara encerrar palabras o pequeñps textos y darles estilo a través de CSS o localizarlos desde JavaScript. Semánticamente no significa nada.

- *q:* Es el equivalente a blockquote. Significa quote (por eso el de bloque se llama block - quote). Sirve para poner citas pero en línea.

- *code:* Sirve para encerrar código que queremos representar visualmente. Suele ir unido con la etiqueta `pre`

Entidades especiales en HTML - (Código ASCII)[https://ascii.cl/es/codigos-html.htm]

* Simbolos en el teclado. (& + ctrl + espacio) -> da todas las combinaciones que se pueden hacer para obtener símbolos

## Estructura básica de formulario (video 40 - estructura_basica.html)
La estructura básica de un formulario se compone de 4 elementos
- *form:* es la etiqueta que engloba nuestro formulario.
- *label:* Sirve para escribir el nombre del campo a rellenar. Debe tener el atributo `for` al cual se le indica un `id` que lo que hará será emparejar el label con su input correspondiente.
- *input:* Sirve para crear un campo que permitirá al usuario interactuar. El único atributo obligatorio del input es `name`
- *button:* crea un botón que permitirá enviar el formulario

Cuando se clickea en el button, que hace el envío del formulario, por defecto el navegador reinicia la página. Eso se puede pausar con JS. 

A dónde va el formulario luego de tocar el botón de "enviar" se define en el atributo del `form`
```
<form action="contacto.html">
</form>
```
## Asociar input y label (video 41 - estructura_basica.html)
```
<form>
    <label for="name">Nombre</label>
    <input id="name">
    <button>Enviar</button>
</form>
```
## Button vs type button (video 42 - tipos-de-input.html)
Algunos de los tipos de `inputs` que existen
- *button:* Se comporta igual que un botón `<button>`
- *submit:* para enviar el formulario

- *date:* Se utiliza para introducir una fecha
- *datetime:* Obsoleto
- *datetime-local:* fecha y hora. No funciona en firefox
- *time:* para introducir una hora
    TIP
        Se recomienda usar datetime-local y time para seleccionar fecha y hora
- *hidden:* Campo oculto. Puede contener valor pero no se mostrará
- *month:* para introducir un mes
- *week:* para introducir el número de semana del año

- *color:* Se utiliza para especificar un color
- *number:* para introducir valores numéricos
- *range:* para establecer un rango
- *reset:* para resetear el formulario

- *search:* para las barras de búsqueda
- *tel:* para introducir números telefónicos
- *email:* para introducir un email
- *password:* para contraseñas
- *url:* para introducir URLs

- *text:* valor por defecto



`<input type="button" value="Name">` hay una diferencia con poner la etiqueta `<button>Name</button>`. En el primero se coloca el atributo value.

Un <input type="button"> no sirve para enviar el formulario, sino para realizar alguna acción usando JS. Se ve porque no refresca la página y en cambio con el <button> sí. Para que pueda enviarse el formulario se utiliza el `type="submit"`

## Inputs para fechas (video 43 - tipos-de-input.html)
```
<form>
    <input type="date">
    <input type="datetime-local">
    <input type="date">
    <input type="time">
    <input type="month">
    <input type="week">
</form>
```
## Inputs para celulares (video 44 tipos-de-inputs)
Para ver en el celular: (esto es para ver cómo el teclado va variando de acuerdo el `type` que se coloque. No me funcionó en el celular. Volver a intentar más adelante)
- en la búsqueda poner "cmd" y se abre la consola
- ahora poner "ipconfig" y sale la dirección de red

## Inputs extra (video 45 - tipos-de-input.html)
- *color:* Se utiliza para especificar un color
- *number:* para valores numéricos. No deja ingresar letras
- *range:* para establecer un rango. Con el atributo `step` se puede colocar cada cuánto aumenta y con "min" y "max" desde qué hasta qué número
- *reset:* para resetear el formulario
- *text:* valor por defecto

## Input radio (video 46 - inputs-de-selección.html)
- *radio:* Permite seleccionar una única opción de una lista de opciones relacionadas

Se coloca el atributo obligatorio "name" con el mismo nombre en cada label porque de esa manera le digo al navegador que las tres opciones pertenecen a la misma categoría y entonces permite seleccionar una sola opción

`checked` es un atributo booleano y se coloca así. Sirve para dejar marcada una opción por defecto

El `value=masculino` sirve que para cuando se envíe el formulario a un servidor, detecte la selección "gender" y la elección "masculino"

## Input checkbox (video 47 - inputs-de-selección.html)
- *checkbox:* permite seleccionar varias opciones de una lista de opciones relacionadas.
El input también puede ir fuera del label. Se pueden utilizar los atributos `chequed` (pueden usarse en más de uno) y `value` como en el radio.

## Elemento select básico (video 48 - inputs-de-seleccion.html)
- *select:* crea una lista de opciones donde podemos seleccionar una o varias opciones. No son un input tipo `select` sino que son una etiqueta aparte. Es una mezcla entre "radio" y "checkbox".
Cada opción irá dentro de una etiqueta `<option> </option>`

El atributo "multiple" es para seleccionar más de uno

## Elemento select avanzado (video 49 - inputs-de-seleccion.html)
Si tenemos muchas opciones podemos ordenarlas por categorías a través de la etiqueta `<optgroup></optgroup>` con el atributo *label* para nombrar la categoría.

## Datalist (video 50 - inputs-de-seleccion.html)
Datalist son muy similares a los select, solo que incluyen un filtro para que se pueda buscar de una forma más sencilla.

```
<form>
        <input type="list" list="pets">
        <datalist id="pets">
            <option value="perro"></option>
            <!--elimina los nombres en medio de las option porque se muestra como principal lo que está en el value-->
        </datalist>    
</form>
```
## Más elementos para formularios (video 51 - mas-elementos.html)
- *fieldset:* Se utiliza para agrupar elementos dentro de un formulario.
- *legend:* Representa una etiqueta para el contenido del fieldset
- *file:* Este input se utiliza para cargar archivos y enviarlos desde un formulario
- *meter:* Representa un valor dentro de un rango conocido
- *progress:* representa el progreso de una tarea
- *textarea:* se utiliza para introducir texto en un formulario

## Atributos para formularios (video 52 - atributos-formularios.html)
Hay bastantes. Hay que fijarse en la documentación para conocer más.
- *placeholder:* Da una pista de lo que el usuario tiene que introducir. Para tema de estilos con lo que está escrito en el input, no se utiliza placeholder. Se usa css
- *required:* Hace que un campo sea obligatorio. el usuario puede desactivar el "required" desde "inspeccionar elemento". Por eso existen otras validaciones que se hacen con js. Igualmente hay que usarlo como primera validación
- *readonly:* Hace que un campo sea de solo lectura. Sí envía lo que tiene escrito
- *disabled:* Desactiva el campo, no se podrá escribir en el autofocus. No se envía lo que tiene escrito
- *min - max:* Establece el mínimo y máximo de un campo numérico. No es obligatorio poner min y max juntos, puede ir uno solo
- *minlenght - maxlenght:* Establece el mínimo y máximo de caracteres de un campo de texto
- *selected:* Equivale a checked en los select. Sirve para establecer una opción por defecto
- *autofocus:* Para cargar el foco por defecto al cargar el formulario
