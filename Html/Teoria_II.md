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

## Introducción a enlaces (video 22)