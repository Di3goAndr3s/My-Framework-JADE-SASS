# *My* framework

### Modern front-end framework JADE/STYLUS

## ¿Qué es My?

Es un framework Html y Css compilado en Jade y Stylus. Utilizar _My_ implica trabajar con una metodología agil y moderna que trae beneficios para el mantenimiento, escalabilidad y desarrollo de los proyectos.

_My_ nace de la necesidad de documentar y estandarizar el marco de trabajo que uso para marcar y estilizar en mi oficio como front-end.

## ¿Por que My?

Se llama _My_ por que espera que quien lo use se apropie de el y lo haga suyo. Esta diseñado para que todo el html y css se modificado sin afectar la metodologia de trabajo que enmarca el framework.

## ¿Qué lo hace diferente a otros frameworks?

+ Posee un sistema de grilla flexible basado en el modelo de caja flexible `display flex`.
+ Posee patrones Easing mediante cubic-bezier que permiten usar transiciones CSS3 avanzadas.
+ Mixins integrados con Font-awesome para crear iconos de manera rapida desde el html o desde el Css con las pseudoclases `::after` y `::before`.
+ Mixin y variables Html predifinidas mediante Jade
+ Los componentes cumplen con el nivel de conformidad A de accesibilidad web.
+ Los componentes cumplen con las 10 reglas de usabilidad web de [Jakob Nielsen](http://www.nngroup.com/articles/ten-usability-heuristics/) 

## ¿Qué lo hace igual a otros frameworks?

+ Busca generar bloques, bloques de elementos y modificadores de elementos de manera eficiente tanto en Html como en Css.
+ Tiene patrones Css que permiten hacer una arquitectura modular y escalable.
+ Busca generar buenas practicas en el codigo.

## ¿Por que Jade y Stylus?

La respuesta es sencilla. Un código Stylus es muchísimo más sencillo de mantener, con menos horas de trabajo que significa menos costes que un CSS en bruto. Asi mismo un codigo Jade es mas rapido, limpio y eficiente que un Html neto.

Aunque tienen una curva de aprendizaje moderada, se van a encontrar con dos lenguajes de alto nivel, completos y documentados. Es cuestion de acostumbrarse a la identación y a la sintaxis. 

Por otro lado, __My__ busca integrarse, en un futuro, con frameworks de aplicaciones como expressjs para nodejs.

**Documentación:**

 [Sitio oficial Jade](http://jade-lang.com/)
 | [Sitio oficial Stylus](http://learnboost.github.io/stylus/)

## Influencias My

### Filosofía NRY

>El principio No te repitas (en inglés Don't Repeat Yourself o DRY, también conocido como Una vez y sólo una) es una filosofía de definición de procesos que promueve la reducción de la duplicación especialmente en computación. Según este principio toda pieza de información nunca debería ser duplicada debido a que la duplicación incrementa la dificultad en los cambios y evolución posterior, puede perjudicar la claridad y crear un espacio para posibles inconsistencias. Por "pieza de información" podemos entender, en un sentido amplio, desde datos almacenados en una base de datos pasando por el código fuente de un programa de software hasta llegar a información textual o documentación.

>Cuando el principio DRY se aplica de forma eficiente los cambios en cualquier parte del proceso requieren cambios en un único lugar. Por el contrario, si algunas partes del proceso están repetidas por varios sitios, los cambios pueden provocar fallos con mayor facilidad si todos los sitios en los que aparece no se encuentran sincronizados.

### Flex Layout

> un modelo de cajas de CSS optimizado para diseño de interfaces. Flexbox proporciona un sistema de diseño adicional a los que ya ofrece CSS. [CSS21] En este nuevo modelo de cajas, los elementos secundarios de una caja se disponen tanto horizontal como verticalmente, y el espacio no utilizado puede asignarse a un elemento secundario específico o distribuirse entre los diferentes elementos secundarios mediante la asignación de "flex" a los elementos secundarios que se deben expandir. El anidamiento de estas cajas (horizontal dentro de vertical o vertical dentro de horizontal) se puede utilizar para crear diseños en dos dimensiones. Flexbox se basa en el modelo de cajas del lenguaje de interfaz de usuario XUL que se utiliza en la interfaz de usuario de un gran número de aplicaciones basadas en Mozilla (como Firefox).

`Todos los bloques construidos  no deberian tener anchos ni altos fijos. Buscan ser fluidos y su alyo y ancho es regido por su contenedor o por su grid.`

**Documentación:** 
 [Chris Coyier](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) 
 | [David Walsh](http://davidwalsh.name/stylus-grid/)
 | [Philip Walton](http://philipwalton.github.io/solved-by-flexbox/demos/grids/) 

### CSS Guidelines

> _My_ Framework__ esta influenciado por las [CSS Guidelines](https://github.com/csswizardry/CSS-Guidelines/) de Harry Roberts de [CSS wizardry](http://csswizardry.com/).

Harry Roberts dice:

> Yo trabajo bajo OOCSS; Divido los componentes en estructura (objetos) y skin (extension). Como analogía (No ejemplo) observad lo siguiente:

```
.habitación{}

.habitación--cocina{}
.habitación--cuarto{}
.habitación--baño{}
```
> Tenemos diferentes tipos de habitaciones en una casa, pero todas ellas reciben un trato similar; todas tienen suelo, techo, paredes y puertas. Podemos compartir esta información con una clase abstracta '.habitación{}. Sin embargo, tenemos diferentes tipos de habitación que las difieren de otras; la cocina puede tener un suelo de baldosas y el dormitorio puede tener alfombra, un baño puede no tener ventana pero es muy probable que un cuarto si la tenga, y cada habitación puede tener las paredes de diferente color. OOCSS (Object Oriented CSS) nos enseña a abstraer los estilos compartidos en un objeto base y luego extender esta información con clases más específicas que añadan estilo(s) único(s).

> Entonces, en vez de construir docenas de componentes únicos, prueba a identificar patrones de diseño repetidos y abstráelos dentro de clases reusables; construye esqueletos como 'objetos' base y luego enclavija clases a éstos objetos para extender sus estilos en circunstancias más específicas o únicas.

> Si tienes que construir nuevos componentes divídelos en estructura y skin; construye la estructura del componente usando clases muy genéricas de manera que se puedan rehusar y añadirle las clases más específicas para estilizar y añadir diseño.

### Arquitectura CSS

#### BEM (bloque, elemento, modificador)

BEM es una metodología para nombrar y clasificar selectores CSS de manera estricta, transparente e informativa.

__Bloque:__ es una entidad independiente. Puede ser visto como un objeto o un modulo. Un ejemplo es el buscador o el header.

```css
.bloque {}
.menu {}
.search {}
```

__Elemento:__  parte de un bloque que cumple una función. Un ejemplo es un input o un button, una imagen o un enlace.

```css
.bloque__elemento {}
.menu__item {}
.search__input {}
```

__Modificador:__  con un modificador se crea un bloque similar a otro existente. Por ej. el activo de un menú.

```css
.bloque--modificador {}
.menu--activo {}
.search--error {}
```

Los bloques y elementos buscan tener selectores únicos. Si el bloque es `.menu`, un elemento se llamaria `.menu__item` y un modificador sería `.menu__item–-activo`.

```css
.bloque {}
.bloque__elemento {}
.bloque--modificador {}
```

__Documentación:__  [Sitio oficial BEM](http://bem.info/)

#### OOCSS (CSS orientado a objetos)

OOCSS es una metodología basada en dos principios:

+ División de los componentes en estructura(layout) y skin(theme). Esta separación de estructura y estilos nos permite trabajar de manera modular con los “skins” que se pueden aplicar a   los diversos módulos u objetos.

__Ejemplo__ 

__Jade__ 

```jade
ul.menu.menu--left.menu--blue
 li:a(href="#") Inicio
 li:a(href="#") Quíenes somos
...
```

__Html__ 

```html
<ul class="menu menu--left menu--blue"
 <li><a href="#">Inicio</a>
 <li><a href="#">Quíenes somos</a>
 ...
</ul>
```

__Stylus__ 

```css

MyBlue = #1e6ce2

.menu
 .menu--left
  float left
  
 .menu--blue
  color MyBlue
```

__Css__ 

```css
.menu {}
.menu .menu--left {float: left;}
.menu .menu--blue {color: #1e6ce2;}
```

+ Separacion del contenedor y el contenido: Se evita el uso de selectores dependientes, por ejemplo `Aside h2 {}`, pues `h2` ya deberia estar definido con sus modificadores.

__Ejemplo__

__Jade__

```html
aside
 h2.modificador
```
__Stylus__

```css
h2 {}
h2.modificador {}
aside {}
```
**Documentación:**

 [Wiki OOCSS](https://github.com/stubbornella/oocss/wiki/)
 | [Blog del Autor](http://www.stubbornella.org/)


#### SMACSS (Arquitectura escalable y modular para CSS)

SMACSS es una arquitectura y filosofía, tambien llamadada guia de estilos, para la estructuración de las hojas de estilos de un proyecto, buscando facilitar la mantenibilidad y flexibilidad, mediante la categorización de los estilos en diferentes archivos.

SMACSS define cinco categorías o archivos que apropia __My__: 

**Base:**
En esta categoría se incluyen los estilos base de nuestro proyecto, incluyendo reset o el Normalize.css, tipografías y márgenes básicos de todo el sitio.

__Ejemplo__

__Stylus__

```css
color1 = #01DFFD
color2 = color1 * 2

body
form 
 margin 0
 padding 0

a 
 color color1
 &:hover 
  color color2   
```

__Css__
```css

 body, form {
    margin: 0;
    padding: 0;
}

a {
    color: #039;
}

a:hover {
    color: #03F;    
}
```
**Module:**
Los módulos son todos aquellos componentes reutilizables e independientes, lo que en BEM serian los bloques o los componentes en OOCSS.

__Ejemplo__

__Stylus__

```css
.module
 h2 
  padding 5px
 span 
  padding 15px
```

__Css__
```css

.module > h2 {
    padding: 5px;
}

.module span {
    padding: 5px;
}
```

**State:**
Son los modificadores de los elementos, las reglas de estado son todas aquellas que determinan como se verá un módulo, cuando se encuentra en un estado en específico.

__Ejemplo__

__Stylus__

```css
.error 
  background-color red
  color white
    
.is-tab-active 
  background-color white
  color black
```

__Css__
```css
.error {
    background-color: red;
    color: white;
}

.is-tab-active {
    background-color: white;
    color: black;
}
```

**Layout:**
Hoja de estilos con las reglas que definen los contenedores y la grilla.

__Ejemplo__

__Stylus__

```css

anchoBox = 960px

header
article
footer 
  width anchoBox
  margin auto

.article-left
    @import article
    border solid color2
    border-width 1px 0 0
```

__Css__
```css
header, article, footer {
    width: 960px;
    margin: auto;
}

.side-left {
    border: solid #CCC;
    border-width: 1px 0 0;
}
```

**Theme:**
Es lo que en OOCSS seria el _Skin_, en esta hoja se almacenan los colores, formas y tamaños.

__Ejemplo__

__Stylus__

```css
.borderSlider
  border 1px solid
  
.borderSliderblue 
    border-color color1
```

__Css__
```css
.borderSlider {
    border: 1px solid;
}

.borderSliderblue {
    border-color: blue;
}
```

__Documentación:__  [Sitio oficial SMACSS](http://smacss.com/)

## Estructura My

## Stylus y My

## Jade y My

## Preprocesando My

