# My framework

## Modern front-end framework JADE/STYLUS

### Arquitectura CSS

#### BEM

Utiliza la nomenclatura BEM (bloque, elemento, modificador)

Bloque: es una entidad independiente. Puede ser simple o compuesto por otros bloques. Ej.: buscador (simple) o header (compuesto).

```css
    .bloque {}
    .menu {}
    .search {}
```

Elemento: parte de un bloque que cumple una función. Ej.: input y button.

```css
    .bloque__elemento {}
    .menu__item {}
    .search__input {}
```

Modificador: con un modificador se crea un bloque similar a otro existente. Por ej. el activo de un menú.

```css
    .bloque--modificador{}
    .menu–-activo.
    .search--error {}
```

Los bloques y elementos tienen nombres únicos (selectores de clase CSS). Si el bloque es .nav, un elemento se llamaría .nav__item y un modificador sería .nav__item–activo.

```css
    .bloque{}
    .bloque__elemento{}
    .bloque--modificador{}
```

*Documentación:* [Sitio oficial BEM](http://bem.info/)

#### OOCSS

My framework utiliza el principio OOCSS (CSS orientado a objetos)


   1.  División de los componentes en estructura(layout) y skin(theme). Esta separación de estructura y estilos nos permite trabajar de manera modular con los “skins” que se pueden aplicar a los diversos módulos u objetos.

  *Ejemplo

  *Jade

```jade

    .foo(class="menu menu--left menu--blue")

```

  *Stylus

```stylus

    .menu {}
    .menu--left {float: left;}
    .menu--blue {}

  ```

   2. Separacion del contenedor y el contenido:
   Se evita el uso de selectores dependientes, por ejemplo Aside h2 {}, pues h2 ya deberia estar definido con sus modificadores

    *Ejemplo

   ```
   Ej. aside
        h2
   ```


Citando a Harry Roberts de [CSSwizardry](http://csswizardry.com/) en su CSS Guidelines [Guidelines](https://github.com/csswizardry/CSS-Guidelines)

```
Yo trabajo bajo OOCSS; Divido los componentes en estructura (objetos) y skin (extension). Como analogía (No ejemplo) observad lo siguiente:

.habitación{}

.habitación--cocina{}
.habitación--cuarto{}
.habitación--baño{}

Tenemos diferentes tipos de habitaciones en una casa, pero todas ellas reciben un trato similar; todas tienen suelo, techo, paredes y puertas. Podemos compartir esta información con una clase abstracta '.habitación{}. Sin embargo, tenemos diferentes tipos de habitación que las difieren de otras; la cocina puede tener un suelo de baldosas y el dormitorio puede tener alfombra, un baño puede no tener ventana pero es muy probable que un cuarto si la tenga, y cada habitación puede tener las paredes de diferente color. OOCSS (Object Oriented CSS) nos enseña a abstraer los estilos compartidos en un objeto base y luego extender esta información con clases más específicas que añadan estilo(s) único(s).

Entonces, en vez de construir docenas de componentes únicos, prueba a identificar patrones de diseño repetidos y abstráelos dentro de clases reusables; construye esqueletos como 'objetos' base y luego enclavija clases a éstos objetos para extender sus estilos en circunstancias más específicas o únicas.

Si tienes que construir nuevos componentes divídelos en estructura y skin; construye la estructura del componente usando clases muy genéricas de manera que se puedan rehusar y añadirle las clases más específicas para estilizar y añadir diseño.
```

*Documentación:*

 [Wiki OOCSS](https://github.com/stubbornella/oocss/wiki)
 [Blog del Autor](http://www.stubbornella.org/)

