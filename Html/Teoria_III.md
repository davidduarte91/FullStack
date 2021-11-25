## Envío GET vs POST (video 53 - get-vs-post.html)
Esto es a modo informativo/teórico porque con solo html se puede hacer muy poco para el envío de formularios. Se necesita Javascript.
El método GET es el que se ejecuta cuando entramos a una página a través de la url, es decir desde la barra de navegación. Cuando toca "enviar" en la barra aparece al final "enviar.html?" y dice en pantalla que "no puede hacer un GET a enviar formularios/enviar.html". Es el método por defecto que tienen todas las páginas cuando entramos a través de la url.
    
Por otro lado está el envío POST, es el envío de formularios por la parte de atrás de la página. Cuando tocamos "enviar" el comportamiento es distinto. No dice que no está pudiendo hacer un GET a enviar.html, simplemente nos da un error 405. Esto significa que él ha intentado enviar la información pero la información no ha llegado, no ha encontrado el archivo para enviarle esa información.
    
Volviendo al GET, al dar enviar a lo último aparece un signo de interrogación y nos pone que no puede hacer el get. Después de esa interrogación, irían los campos que se están enviando del formulario. Por eso el atributo "name" es obligatorio, porque si no lo ponemos no estamos enviando información realmente.

Luego de colocar los "name" en cada input, en la barra de búsqueda se puede ver los datos que se están enviando por url. Esta es la forma de hacerlo a través de la url. Como los campos están vacíos no se están enviando nada, pero luego de colocar mis datos en las casillas y tocar "enviar", ya se pueden ver los datos en la barra de búsqueda

Haciendo lo mismo con post, da un error 405 y en la barra de búsqueda no aparece nada. Para ver los datos que se están enviando hay que ir a inspeccionar elemento -> pestaña Network -> clear para borrar todo -> luego "enviar" y en enviar.html en la parte de abajo se verán los datos

## ¿Qué es el contenido embebido? (video 54 - )
- El contenido embebido es todo el contenido que nos traemos desde fuera. Imágenes, videos, audio.
- Estos archivos son los que más peso (tamaño) añaden a un sitio web
- Los tipos más conocidos son: Imágenes, audio, video, iframes

* **Imágenes:** Los formatos de imágenes para web los podemos clasificar en 2 tipos:
 1. Vectoriales:
 - svg (recomendado siempre que se pueda)
 2. Mapa de bits
 - jpg
 - png 8 y 24 (si se necesita transparencias)
 - gif (para imagen animada)
 - webp (el formato que menos pesa) 
  
