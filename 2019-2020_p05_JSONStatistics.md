# Práctica 5. Tratamiento de Datos. Formato JSON.
### Factor de ponderación: 7

#### Tratamiento de Datos. Formato JSON.

El objetivo de esta práctica es familiarizarse con el formato JSON, crear módulos en Javascript y procesar datos para
obtener estadísticas simples sobre países.

En [este repositorio](https://github.com/samayo/country-json) se encuentran disponibles diversos datos en
formato JSON que contienen información relativa a diferentes países: sus nombres, capitales, moneda, religión,
población, etc.

Utilice el [visualizador on-line de JSON](http://jsonviewer.stack.hu/) para una primera toma de contacto con
esos datos.

Comience por escribir diferentes módulos (ficheros `.js`), un módulo para cada tipología de datos, en los que se incluyan en
forma de variables la información por países correspondiente a un determinado aspecto (idioma, religión, etc.)
de cada país.
Así por ejemplo el fichero `countryReligion.js` debería contener una variable que almacenara los datos de
religión de cada uno de los países.
Ese fichero (módulo) debería exportar esa variable para hacerla disponible a otros programas JavaScript.

Desarrolle a continuación un programa `countryData.js`que permita combinar en un único fichero `countryData.json` un conjunto de métricas
para todos los países considerados.
Haga que ese fichero `countryData.json` contenga al menos la siguiente información para cada uno de los
países:

* Nombre
* Abreviatura del nombre
* Altura promedio de los varones (Avg Male Height)
* Capital de cada país
* Continente
* Moneda
* Código de la moneda
* Religión
* Altura
* Esperanza de vida
* Número de habitantes
* Densidad de Población
* Superficie
* Temperatura promedio

Utilice nuevamente el [visualizador on-line de JSON](http://jsonviewer.stack.hu/) para mostrar el contenido
del fichero JSON que ha creado.

Desarrolle como siguiente paso un programa `contryStats.js` que utilice los datos que ha agregado para
imprimir en pantalla la información que da respuesta a las siguientes cuestiones:

* El país más poblado del mundo es P y el menos poblado es P.
* El país con mayor densidad de población en América es P.
* Los 3 países con mayor esperanza de vida en cada uno de los continentes son: ...
* La media de la altura promedio de los varones en cada uno de los continentes es: 
* Los porcentajes correspondientes (en función del número de países con cada religión) a las 5 religiones más
  extendidas en el mundo son:
* Los países con más bajas temperaturas en cada uno de los continentes son los siguientes:

Además de las anteriores, imprima los valores correspondientes a 3 aspectos adicionales de su elección que se
puedan extraer de los datos suministrados.



### Rúbrica de evaluacion del ejercicio

Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar este ejercicio:
1. El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
2. Deben usarse estructuras de datos adecuadas (objetos, arrays, strings) para representar los diferentes elementos que intervienen en el problema.
3. Capacidad del programador(a) de introducir cambios en el programa desarrollado.
4. El formato del código ha de cumplir con lo establecido en la [Guía de Estilo de Google](https://google.github.io/styleguide/jsguide.html)
para Javascript. Utilice [ESLint](https://eslint.org/), convenientemente configurado, si se considera necesario para cumplir con este requisito.
5. El código ha de estar documentado con [JSDoc](https://jsdoc.app/).
6. Modularidad: el programa ha de escribirse de modo que las diferentes funcionalidades
que se precisen sean encapsuladas en módulos, funciones y métodos cuya extensión léxica se
mantenga acotada.
7. Eficiencia del código desarrollado.
