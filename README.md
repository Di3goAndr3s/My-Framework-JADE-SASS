# *My* framework

### Modern front-end framework JADE/STYLUS

## ¿Qué es My?

Es un framework Html y Css compilado en Jade y Stylus

## ¿Por que My y que busca?

**My** nace de la necesidad de documentar y estandarizar el marco de trabajo que uso para marcar y estilizar en mi oficio como front-end.

+ Busca tener un sistema de grilla flexible basado en modelo de caja flexible `display flex`.
+ Busca generar patrones(mixins) html y csss que permitan hacer una arquitectura modular y escalable.
+ Busca generar patrones Easing(cubic-bezier) que permitan usar transiciones CSS3 avanzadas.
+ Busca generar bloques, bloques de elementos y modificadores de elementos de manera eficiente tanto en html como en css.
+ Busca agilizar el proceso de marcado mediante Jade y el proceso de estilizado mediante Styles.
+ Busca tener un codigo limpio e identado.
+ Incluye elementos de bloques como botones, enlaces, imagenes, titulos, elementos de formularios, paneles, columnas con sus respectivos modificadores.

## ¿Por que Jade y Stylus?

La respuesta es sencilla. Un código Stylus es muchísimo más sencillo de mantener, con menos horas de trabajo que significa menos costes que un CSS en bruto. Asi mismo un codigo Jade es mas rapido, limpio y eficiente que un Html neto.

Aunque tienen una curva de aprendizaje moderada, se van a encontrar con dos lenguajes de alto nivel, completos y documentados. Es cuestion de acostumbrarse a la identación y a la sintaxis. 

Por otro lado, __My__ busca integrarse, en un futuro, con frameworks de aplicaciones como expressjs para nodejs.

**Documentación:**

 [Sitio oficial Jade](http://jade-lang.com/)
 | [Sitio oficial Stylus](http://learnboost.github.io/stylus/)

## Influencias My

### Filosofía NRY

### Flex Layout

Todos los bloques construido con **My** no deberian tener anchos `width auto` ni altos fijos `height auto`. Buscan ser fluidos y su _Width_ es regido por su contenedor o por su grid.

**Documentación:** 
 [Chris Coyier](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) 
 | [David Walsh](http://davidwalsh.name/stylus-grid/)
 | [Philip Walton](http://philipwalton.github.io/solved-by-flexbox/demos/grids/) 

### CSS Guidelines

__**My** Framework__ esta influenciado por las [CSS Guidelines](https://github.com/csswizardry/CSS-Guidelines/) de Harry Roberts de [CSS wizardry](http://csswizardry.com/).

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

## Arquitectura My

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

es una guía de estilo escrita por Jonathan Snook un diseñador, desarrollador web y autor de The Art and Science of CSS publicado por SitePoint. SMACSS abarca 12 capítulos que se pueden leerle gratuitamente online que explican cómo categorizar las reglas CSS. El acceso premium incluye 4 capítulos extras, sobre cómo aprovechar las características de los pre-procesadores de CSS para trabajar con SMACSS, cuándo definir estilos base y cuándo definir módulos, cómo trabajar con iconos, cómo lidiar con estados complejos y 2 videos.

## Estructura My

## Stylus y My

## Jade y My

## Preprocesando My

