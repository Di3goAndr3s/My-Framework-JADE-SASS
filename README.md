# My framework

## Modern front-end framework JADE/STYLUS

### Arquitectura CSS

#### BEM (bloque, elemento, modificador)

BEM es una metodología para nombrar y clasificar selectores CSS de manera estricta, transparente e informativa.

_Bloque:_ es una entidad independiente. Puede ser visto como un objeto o un modulo. Un ejemplo es el buscador o el header.

```css
.bloque {}
.menu {}
.search {}
```

_Elemento:_ parte de un bloque que cumple una función. Un ejemplo es un input o un button, una imagen o un enlace.

```css
    .bloque__elemento {}
    .menu__item {}
    .search__input {}
```

_Modificador:_ con un modificador se crea un bloque similar a otro existente. Por ej. el activo de un menú.

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

_Documentación:_ [Sitio oficial BEM](http://bem.info/)

#### OOCSS (CSS orientado a objetos)

OOCSS es una metodología basada en dos principios:


1. División de los componentes en estructura(layout) y skin(theme). Esta separación de estructura y estilos nos permite trabajar de manera modular con los “skins” que se pueden aplicar a   los diversos módulos u objetos.

_Ejemplo_

_Jade_

```html
ul.menu.menu--left.menu--blue
li:a(href="#") Inicio
li:a(href="#") Quíenes somos
...
```

_Html_

```html
<ul class="menu menu--left menu--blue"
 <li><a href="#">Inicio</a>
 <li><a href="#">Quíenes somos</a>
 ...
</ul>
```

_Stylus_

```css

MyBlue = #1e6ce2

.menu
 .menu--left
  float left
  
 .menu--blue
  color MyBlue
```

_Css_

```css
.menu {}
.menu .menu--left {float: left;}
.menu .menu--blue {color: #1e6ce2;}
```

2. Separacion del contenedor y el contenido: Se evita el uso de selectores dependientes, por ejemplo Aside h2 {}, pues h2 ya deberia estar definido con sus modificadores.

_Ejemplo_

_Jade_

```html
aside
 h2.modificador
```
_Stylus_

```css
h2 {}
h2.modificador {}
aside {}
```

_My_ Framework esta influenciado por las [CSS Guidelines](https://github.com/csswizardry/CSS-Guidelines/) de Harry Roberts de [CSS wizardry](http://csswizardry.com/).


> Yo trabajo bajo OOCSS; Divido los componentes en estructura (objetos) y skin (extension). Como analogía (No ejemplo) observad lo siguiente:

`
.habitación{}

.habitación--cocina{}
.habitación--cuarto{}
.habitación--baño{}
`
> Tenemos diferentes tipos de habitaciones en una casa, pero todas ellas reciben un trato similar; todas tienen suelo, techo, paredes y puertas. Podemos compartir esta información con una clase abstracta '.habitación{}. Sin embargo, tenemos diferentes tipos de habitación que las difieren de otras; la cocina puede tener un suelo de baldosas y el dormitorio puede tener alfombra, un baño puede no tener ventana pero es muy probable que un cuarto si la tenga, y cada habitación puede tener las paredes de diferente color. OOCSS (Object Oriented CSS) nos enseña a abstraer los estilos compartidos en un objeto base y luego extender esta información con clases más específicas que añadan estilo(s) único(s).

> Entonces, en vez de construir docenas de componentes únicos, prueba a identificar patrones de diseño repetidos y abstráelos dentro de clases reusables; construye esqueletos como 'objetos' base y luego enclavija clases a éstos objetos para extender sus estilos en circunstancias más específicas o únicas.

> Si tienes que construir nuevos componentes divídelos en estructura y skin; construye la estructura del componente usando clases muy genéricas de manera que se puedan rehusar y añadirle las clases más específicas para estilizar y añadir diseño.


_Documentación:_

 |[Wiki OOCSS](https://github.com/stubbornella/oocss/wiki/)
 |[Blog del Autor](http://www.stubbornella.org/)

