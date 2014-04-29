My
==

# My framework

## Modern front-end framework JADE/STYLUS

### Arquitectura CSS

#### BEM

Utiliza la nomenclatura BEM (bloque, elemento, modificador)

Bloque: es una entidad independiente. Puede ser simple o compuesto por otros bloques. Ej.: buscador (simple) o header (compuesto).

```bloque
    .bloque {}
    .menu {}
    .search {}
```

Elemento: parte de un bloque que cumple una función. Ej.: input y button.

```elemento
    .bloque__elemento {}
    .menu__item {}
    .search__input {}
```

Modificador: con un modificador se crea un bloque similar a otro existente. Por ej. el activo de un menú.

```Modificador
    .bloque--modificador{}
    .menu–-activo.
    .search---error {}
```

Los bloques y elementos tienen nombres únicos (selectores de clase CSS). Si el bloque es .nav, un elemento se llamaría .nav__item y un modificador sería .nav__item–activo.

```css
    .bloque{}
    .bloque__elemento{}
    .bloque--modificador{}
```

*Documentación:* [Sitio oficinal](http://bem.info/)
