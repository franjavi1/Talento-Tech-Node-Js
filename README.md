# Talento Tech - Node.js

Aplicación de línea de comandos desarrollada con **Node.js** como parte de la formación de **Talento Tech**.

El proyecto permite interactuar con la API pública de **Fake Store API** para consultar, crear y eliminar productos.

## Tecnologías utilizadas

* Node.js
* JavaScript
* Fetch API
* Fake Store API
* ES Modules

El proyecto utiliza `"type": "module"` para trabajar con `import` y `export`.

## Estructura del proyecto

```text
Talento-Tech-Node-Js/
│
├── index.js
├── funciones.js
├── package.json
└── README.md
```

### `index.js`

Es el archivo principal de la aplicación.

Recibe los argumentos ingresados desde la terminal y determina qué operación realizar:

* GET todos los productos
* GET un producto por ID
* POST crear un producto
* DELETE eliminar un producto

### `funciones.js`

Contiene las funciones encargadas de realizar las peticiones a la API:

* `getProducts()`
* `getProduct(id)`
* `postProduct(title, price, category)`
* `deleteProduct(id)`

Estas funciones utilizan `fetch()` para comunicarse con Fake Store API.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/franjavi1/Talento-Tech-Node-Js.git
```

Ingresar a la carpeta:

```bash
cd Talento-Tech-Node-Js
```

No es necesario instalar dependencias externas para ejecutar el proyecto.

## Ejecución

El proyecto incluye el siguiente script:

```bash
npm start
```

También puede ejecutarse directamente con:

```bash
node index.js
```

## Operaciones disponibles

### Obtener todos los productos

```bash
npm start GET products
```

También:

```bash
node index.js GET products
```

### Obtener un producto por ID

```bash
npm start GET products/7
```

Por ejemplo:

```bash
npm start GET products/1
```

### Crear un producto

La aplicación recibe:

```text
POST products título precio categoría
```

Ejemplo:

```bash
npm start POST products T-Shirt-Rex 300 remeras
```

El precio se convierte a número antes de enviarse a la API.

### Eliminar un producto

```bash
npm start DELETE products/5
```

Por ejemplo:

```bash
npm start DELETE products/10
```

## Funcionamiento

La aplicación obtiene los argumentos enviados desde la terminal mediante:

```javascript
process.argv.slice(2)
```

Luego identifica:

```text
Método → Recurso → Parámetros
```

Por ejemplo:

```bash
npm start GET products/7
```

se interpreta como:

```text
Método:   GET
Recurso:  products/7
ID:       7
```

A partir de estos datos, `index.js` determina qué función ejecutar.

## API utilizada

El proyecto utiliza **Fake Store API**:

```text
https://fakestoreapi.com/products
```

Las operaciones implementadas utilizan los siguientes métodos HTTP:

| Método | Operación                   |
| ------ | --------------------------- |
| GET    | Obtener todos los productos |
| GET    | Obtener un producto por ID  |
| POST   | Crear un producto           |
| DELETE | Eliminar un producto        |

## Objetivo del proyecto

El objetivo es practicar conceptos fundamentales de Node.js, incluyendo:

* Ejecución de aplicaciones desde la terminal.
* Uso de `process.argv`.
* Módulos ES (`import` / `export`).
* Funciones asíncronas.
* `async/await`.
* Consumo de APIs.
* Uso de `fetch()`.
* Métodos HTTP.
* Envío de datos mediante `POST`.
* Eliminación de recursos mediante `DELETE`.
* Manejo de errores con `try/catch`.
* Uso de `finally`.

## Autor

**Francisco Javier Stevenin**

Proyecto realizado como parte de la formación **Talento Tech - Node.js**.
