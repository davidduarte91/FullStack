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

### Imágenes
Los formatos de imágenes para web los podemos clasificar en 2 tipos:
 1. Vectoriales:
    - svg (recomendado siempre que se pueda. No añaden nada de peso)
 2. Mapa de bits
    - jpg
    - png 8 y 24 (si se necesita transparencias)
    - gif (para imagen animada)
    - webp (el formato que menos pesa. Es muy importante convertir las imágenes a este formato para subir luego a la web. La gran ventaja es que admite tanto transparencias como animación. Los demás formatos se pueden convertir a webp) 
  
## Imágenes de bits vs imágenes vectoriales (video 55 - )
Las imágenes de bits (la mayoría que existen) al hacerle zoom empiezan a difuminarse los bordes. Carga las imágenes en esta [página](es.vectormagic.com).

Usar svg solo en los casos que haga falta, porque no todas las imágenes van a poder ser vectorizadas. Pero sí para los íconos

## Imágenes de bits WEBP (video 56)
Las imágenes de bits están compuestos por miles de cuadraditos pequeños llamados bits, y a mayor resolución mayor es el peso que tiene la imágen. El formato adecuado para web.
El formato **jpg** es el más usado pero no admite animaciones ni transparencias (si no hay que usar esas dos características, este formato es la mejor opción). El **gif** tiene movimientos.

Este [convertidor](imagen.online-convert.com/es/convertir-a-webp) convierte justamente las imágenes a **webp** para que pese menos y no pierda calidad. Soporta jpg, png y gif. Las webp se abren con un navegador. Es la mejor opción para trabajar con imágenes que no puedan ser vectoriales

## Insertar imágenes en HTML (video 57 - contenido-embebido.html)
Funcionan tanto las imágenes en su formato original como en su formato webp. Si hago clic en el archivo de la imagen suv, me aparecerá el código que está detrás y que "pinta" en el navegador.

Hay dos maneras de insertar la imagen svg: La primera es colocando la ruta en la etiqueta `img` y la otra es copiando y pegando todo el código del svg en el html. En la primera opción se puede modificar el tamaño y sirve para mostrarlo en pantalla, y la segunda sirve para modificar el código y cambiar sus características

## Device Pixel Ratio (video 58 - contenido-embebido.html)
Se utiliza para cuando queremos hacer webs que sean "responsive", es decir, que se vean bien en un celular.

Es la relación que existe entre los píxeles reales que tiene el dispositivo y los píxeles que tenemos disponibles para "pintar" contenido.

DPR = pixeles reales / pixeles disponibles

**viewport** es el espacio que tenemos disponible para dibujar.

[whatismyviewport](whatismyviewport) para ver el tamaño de mi pantalla. El screen size de mi compu es de 1366 x 768, y el viewport size varía un poco: 1304 x 697. Eso es por la distancia que tengo desde donde termina la barra del navegador hasta la parte de abajo. Entonces, el trozo que se está "comiendo" el navegador con la barra es lo que genera la diferencia entre ambos sizes.

El espacio que tenemos para dibujar en la compu, en el celu no se representa de la misma manera. 
En la página muestra DPR: 1, que es el tamaño natural de la pantalla. En mi caso de 1366 x 768.

Cuando trabajamos en un celu el DPR no suele ser 1, de hecho nunca es 1 en un celu. En los celus se está trabajando con 2.4, 2.6 y en algunos casos con 3 o más de 3. Entrando a "inspeccionar elemento" y cambiando el tamaño de pantalla a un teléfono, se ve como cambia el DPR a 3.

Aunque aumente el tamaño de pantalla, la imagen seguirá midiendo 300px. En teoría, si el espacio que tenemos disponible en un teléfono son 360px, esta imagen se debería ver bien en un teléfono.
    
Si tuviéramos un DPR en los teléfonos de 1, esta imagen se vería bien. Pero el DPR de los teléfonos suele ser 2 o 3, entonces para lograr eso simula que está en un celu y hace zoom al 200% para subir el DPR a 2. Y para comprobarlo entra a "consola" y escribe "devicepixelratio" y dice el número (y debería estar en 2 por ser un celu supuestamente)

Si la imagen se desborda, coloca el style y la img en "max-width: 100%" y ahí ya no se desborda. Pero hay que tener en cuenta que aunque se ve bien en el celu, se tiene una imagen de 1000px. Pero pesa mucho y en un celu no hace falta que tenga ese tamaño, y es un error muy común usar la misma imagen para escritorio como para móvil. Se logra que se vea bien en el celu, pero el tamaño es demasiado grande para obtener el mismo resultado final. Sería más lógico una imagen de 1000px para escritorio y 200px para movil.