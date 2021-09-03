# HTML
- IP: Es el identificador numérico de una página web, es único y representa la dirección donde está el ordenador que contiene esa página web. Sería como el dni, cada web tiene una ip única.

- Dominio web /URL: Uniform Resources Locator. Es el nombre asociado a la IP que utilizamos para solicitar recursos, en nuestro caso un sitio web. Damos un nombre a esa dirección ip para recordar el dominio.

- DNS: Domain Name System. Es un servidor cuya principal función es traducir el nombre de dominio a su identificador único.

- Sitio web: Es un conjunto de uno o varios recursos web alojados en el mismo dominio.

- Servidor web: Es un ordenador cuyo objetivo es servir recursos web.

- Hosting: Es el almacenamiento del servidor web. El disco duro donde el servidor guarda los recursos.

- Petición: Es la acción de pedir recursos a un servidor.

## ¿Qué es HTML?
* Es un lenguaje de marcado de hipertexto (Hyper Text Markup Languaje)
* HTML no es un lenguaje de programación, es un lenguaje de estructura
* Es la base con la que están creadas TODAS las páginas web del mundo.
* Cada etiqueta le dice al navegador y a los motores de búsqueda cuál es la estructura de los documentos, elementos, organización, etc.

## Estructura de un sitio web (video #7)
Para iniciar la estructura base de un documento html: **! + tabulación** (!-- --)
Atajo de teclado para comentario: **ctrl + }**

* Live server: Para iniciar un servidor que haga cambios en tiempo real. Debo abrir la carpeta que contiene el documento.
La diferencia entre abrir el html desde la carpeta e ir actualizando y usar el live server como servidor, es que en el primero en la barra de tareas a la izquierda dirá "Archivo" y en el otro mostrará una dirección ip. Así trabajamos en nuestra página como si estuviéramos trabajando con un servidor real.

## Títulos y párrafos
* Loren + tabulación: para usar texto de relleno
* Para que el texto se ajuste a la ventana: Archivo, Preferencias, Configuración, escribir "Wrap" y en "editor:Word Wrap" marcar ON.
Cada título con los "h" tienen su jerarquía. Si un h3 está debajo de un h2, pertenece a ese h2. Deben pertenecer al que está por encima, por jerarquía.

## Header, Main y Footer
* <header></header>: encabezado
* <main></main>: contenido principal
* <footer></footer>: pie de página

## Section vs article I
* section: Es un contenedor genérico que agrupa contenido que está relacionado. Cuando creamos bloques cuyo contenido es parte de un bloque total usaremos section.
* article: Es un contenedor que representa contenido independiente, es decir, podemos leer ese fragmento en cualquier otro sitio y tendría sentido por sí mismo.
* aside: se utiliza para representar contenido relacionado pero que no forma parte del contenido principal. 

Anidamiento:
    Un section puede contener articles, por ejemplo. si tenemos varios artículos que hablan sobre etiquetas HTML, deben ir dentro de un section, ya que es contenido relacionado entre sí, y los article serían contenido independiente porque podríamos leer uno sin haber leído el resto, y seguiría teniendo sentido.
    El article es definido como un componente de la páguna de contenido independiente, esto implica que esta etiqueta pueda tener un header y un footer propios.
    También existe el caso en el que un article contenga varias secciones, el articulo independiente podría ser navegadores y este contener dentro secciones como navegadores más utilizados en 2020.

## Section vs article II (video 12)
```
<section>
    <h2>Noticias del Día</h2>
        <article>Noticia 1</article>
        <article>Noticia 2</article>
        <article>Noticia 3</article>
</section>
```
> No es semánticamente correcto

Para detectar si una pagína web está correcta se puede visitar [Markup Validation Services](https://validator.w3.org/)

> En el ejemplo de arriba la página de validator dice que no identifica los headers en cada artículo

```
<section>
    <h2>Noticias del Día</h2>
        <article>
            <header>
                 <h3>Noticia 1</h3>
            </header>
            <p>Lorem ipsum dolor </p>
            <footer>La noticia 1 ocurrió en Madrid</footer>
        </article> 
        <article>
            <h3>Noticia 2</h3>
            <p>Lorem ipsum dolor </p>
        </article>
        <article>
            <h3>Noticia 3</h3>
            <p>Lorem ipsum dolor </p>
        </article>
</section>
```
> Ahora sí está semánticamente correcto. Se puede comprobar con el validator. Cada article puede tener un header y footer (no es obligatorio, pero como son contenido independiente se les permite tener ambos)

## Section vs Article III (video 13)
Ahorá se verá el caso de un `article` conteniendo un `section`