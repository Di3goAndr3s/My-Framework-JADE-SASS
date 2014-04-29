# My framework

## Modern front-end framework JADE/STYLUS

### Arquitectura CSS

#### BEM (bloque, elemento, modificador)

BEM es una metodología para nombrar y clasificar selectores CSS de manera estricta, transparente e informativa.

                    _My_ Framework utiliza la nomenclatura BEM 

Bloque: es una entidad independiente. Puede ser simple o compuesto por otros bloques. Ej.: buscador (simple) o header (compuesto).

```css
    .bloque {}
    .menu {}
    .search {}
```

(`)test(`)
(`test)

Elemento: parte de un bloque que cumple una función. Ej.: input y button.

```css
    .bloque__elemento {}
    .menu__item {}
    .search__input {}
```

Modificador: con un modificador se crea un bloque similar a otro existente. Por ej. el activo de un menú.

```css
    .bloque--modificador {}
    .menu–-activo {}
    .search--error {}
```

Los bloques y elementos tienen nombres únicos (selectores de clase CSS). Si el bloque es .nav, un elemento se llamaría .nav__item y un modificador sería .nav__item–activo.

```css
    .bloque {}
    .bloque__elemento {}
    .bloque--modificador {}
```

*Documentación:* [Sitio oficial BEM](http://bem.info/)

#### OOCSS

My framework utiliza los principios OOCSS (CSS orientado a objetos)


   + División de los componentes en estructura(layout) y skin(theme). Esta separación de estructura y estilos nos permite trabajar de manera modular con los “skins” que se pueden aplicar a   los diversos módulos u objetos.

  #####Ejemplo

  *Jade

```html
    ul.menu.menu--left.menu--blue
     li:a(href="#") Inicio
     li:a(href="#") Quíenes somos
     ...
```

  *Html*

```html
    <ul class="menu menu--left menu--blue"
     <li><a href="#">Inicio</a>
     <li><a href="#">Quíenes somos</a>
     ...
    </ul>
```

  *Stylus*

```css

    MyBlue = #1e6ce2

    .menu
     .menu--left
       float left
     .menu--blue
       color MyBlue
    ...
```

  *Css*

```css
    .menu {}
    .menu .menu--left {float: left;}
    .menu .menu--blue {color: #1e6ce2;}
    ...
```

   + Separacion del contenedor y el contenido: Se evita el uso de selectores dependientes, por ejemplo Aside h2 {}, pues h2 ya deberia estar definido con sus modificadores.

    *Ejemplo*

      *Jade*

```html
    aside
     h2.modificador
```
  *Stylus*

```css
     h2 {}
     h2.modificador {}
     aside {}
```


Citando a Harry Roberts de [CSSwizardry](http://csswizardry.com/) [Chris Coyer](http://css-tricks.com/why-ems/) en su CSS Guidelines [Guidelines](https://github.com/csswizardry/CSS-Guidelines/)


>Yo trabajo bajo OOCSS; Divido los componentes en estructura (objetos) y skin (extension). Como analogía (No ejemplo) observad lo siguiente:

```
.habitación{}

.habitación--cocina{}
.habitación--cuarto{}
.habitación--baño{}
```
>Tenemos diferentes tipos de habitaciones en una casa, pero todas ellas reciben un trato similar; todas tienen suelo, techo, paredes y puertas. Podemos compartir esta información con una clase abstracta '.habitación{}. Sin embargo, tenemos diferentes tipos de habitación que las difieren de otras; la cocina puede tener un suelo de baldosas y el dormitorio puede tener alfombra, un baño puede no tener ventana pero es muy probable que un cuarto si la tenga, y cada habitación puede tener las paredes de diferente color. OOCSS (Object Oriented CSS) nos enseña a abstraer los estilos compartidos en un objeto base y luego extender esta información con clases más específicas que añadan estilo(s) único(s).

>Entonces, en vez de construir docenas de componentes únicos, prueba a identificar patrones de diseño repetidos y abstráelos dentro de clases reusables; construye esqueletos como 'objetos' base y luego enclavija clases a éstos objetos para extender sus estilos en circunstancias más específicas o únicas.

>Si tienes que construir nuevos componentes divídelos en estructura y skin; construye la estructura del componente usando clases muy genéricas de manera que se puedan rehusar y añadirle las clases más específicas para estilizar y añadir diseño.


*Documentación:*

 [Wiki OOCSS](https://github.com/stubbornella/oocss/wiki/)
 [Blog del Autor](http://www.stubbornella.org/)

