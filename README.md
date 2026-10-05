# 🚀 Talento Tech — Node.js

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/API-Fake%20Store-6C63FF?style=for-the-badge" alt="Fake Store API">
  <img src="https://img.shields.io/badge/Status-Completed-2EA44F?style=for-the-badge" alt="Status">
</p>

<p align="center">
  <b>Aplicación CLI desarrollada con Node.js para consumir una API REST.</b>
</p>

<p align="center">
  <a href="https://github.com/franjavi1/Talento-Tech-Node-Js">
    🔗 Ver repositorio
  </a>
</p>

---

## 🧩 ¿De qué trata?

Este proyecto fue desarrollado como parte de la formación **Talento Tech — Node.js**.

La aplicación permite interactuar con la **Fake Store API** directamente desde la terminal utilizando comandos.

La idea principal es practicar cómo una aplicación Node.js puede:

```text
        👨‍💻 Usuario
             │
             ▼
       💻 Terminal
             │
             ▼
       📦 Node.js
             │
       ┌─────┴─────┐
       │           │
      GET         POST
       │           │
       └─────┬─────┘
             │
             ▼
      🌐 Fake Store API
             │
             ▼
        📦 Productos
```

---

## ⚡ Funcionalidades

|    Método   | Función                     | Ejemplo             |
| :---------: | --------------------------- | ------------------- |
|   🟢 `GET`  | Obtener todos los productos | `GET products`      |
|   🔵 `GET`  | Obtener un producto         | `GET products/7`    |
|  🟡 `POST`  | Crear un producto           | `POST products ...` |
| 🔴 `DELETE` | Eliminar un producto        | `DELETE products/5` |

---

## 🛠️ Tecnologías

<p align="center">

| Tecnología            | Uso                           |
| --------------------- | ----------------------------- |
| 🟢 **Node.js**        | Entorno de ejecución          |
| 🟡 **JavaScript**     | Lenguaje principal            |
| 🌐 **Fetch API**      | Peticiones HTTP               |
| 🛒 **Fake Store API** | API REST utilizada            |
| 📦 **ES Modules**     | Organización de módulos       |
| 💻 **CLI**            | Interacción mediante terminal |

</p>

---

## 📁 Estructura del proyecto

```text
📦 Talento-Tech-Node-Js
│
├── 📄 index.js
│   └── Punto de entrada de la aplicación
│
├── 📄 funciones.js
│   └── Funciones para consumir la API
│
├── 📄 package.json
│   └── Configuración y scripts del proyecto
│
└── 📄 README.md
    └── Documentación
```

---

# 🚀 Instalación

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/franjavi1/Talento-Tech-Node-Js.git
```

### 2️⃣ Entrar al proyecto

```bash
cd Talento-Tech-Node-Js
```

### 3️⃣ Ejecutar

```bash
npm start
```

También podés ejecutar directamente:

```bash
node index.js
```

---

# 🎮 Uso

La aplicación recibe los comandos directamente desde la terminal.

La estructura general es:

```text
npm start MÉTODO RECURSO [PARÁMETROS]
```

Por ejemplo:

```text
npm start GET products
       │    │     │
       │    │     └── Recurso
       │    └──────── Método HTTP
       └───────────── Script
```

---

# 🟢 GET — Obtener productos

## Obtener todos

```bash
npm start GET products
```

La aplicación realiza una petición:

```text
GET
 │
 ▼
https://fakestoreapi.com/products
 │
 ▼
📦 Lista de productos
```

---

## 🔎 Obtener un producto

Para obtener un producto específico:

```bash
npm start GET products/7
```

En este caso:

```text
GET
 │
 ▼
products/7
 │
 ▼
Producto con ID 7
```

---

# 🟡 POST — Crear un producto

Para crear un producto:

```bash
npm start POST products T-Shirt-Rex 300 remeras
```

Los datos enviados son:

```text
Título     → T-Shirt-Rex
Precio     → 300
Categoría  → remeras
```

La aplicación prepara los datos y realiza una petición:

```text
💻 Terminal
     │
     ▼
   POST
     │
     ▼
🌐 Fake Store API
     │
     ▼
📦 Nuevo producto
```

---

# 🔴 DELETE — Eliminar un producto

Para eliminar un producto:

```bash
npm start DELETE products/5
```

El flujo es:

```text
DELETE
   │
   ▼
products/5
   │
   ▼
🗑️ Producto eliminado
```

---

# 🧠 Conceptos practicados

Este proyecto permite practicar conceptos fundamentales de Node.js:

* 🟢 `process.argv`
* 🟢 `async / await`
* 🟢 `fetch()`
* 🟢 Promesas
* 🟢 Métodos HTTP
* 🟢 Consumo de APIs REST
* 🟢 `try / catch`
* 🟢 `finally`
* 🟢 ES Modules
* 🟢 `import` / `export`
* 🟢 Argumentos desde la terminal
* 🟢 Manejo de respuestas HTTP

---

# 🔍 ¿Cómo funciona `process.argv`?

Cuando ejecutamos:

```bash
npm start GET products/7
```

Node recibe los argumentos enviados desde la terminal.

Conceptualmente:

```javascript
process.argv
```

contiene información sobre la ejecución.

Al utilizar:

```javascript
process.argv.slice(2)
```

obtenemos solamente los argumentos que nos interesan:

```javascript
[
  "GET",
  "products/7"
]
```

Entonces la aplicación puede determinar:

```text
Método  → GET
Recurso → products/7
```

---

# 🏗️ Arquitectura simplificada

```text
                 👨‍💻
              USUARIO
                 │
                 ▼
             💻 CLI
                 │
                 ▼
             index.js
                 │
          ┌──────┴──────┐
          │             │
          ▼             ▼
     process.argv   funciones.js
                        │
                        ▼
                     fetch()
                        │
                        ▼
                🌐 Fake Store API
                        │
                        ▼
                  📦 Productos
```

---

# 🌐 API utilizada

El proyecto utiliza:

**Fake Store API**

```text
https://fakestoreapi.com/products
```

Esta API permite trabajar con productos de prueba y es muy útil para practicar el consumo de APIs REST.

---

# 📚 Objetivo del proyecto

El objetivo principal es comprender cómo desarrollar una aplicación con **Node.js** capaz de comunicarse con una API externa.

El proyecto sirve como práctica de los primeros conceptos de desarrollo backend:

```text
JavaScript
    ↓
Node.js
    ↓
HTTP
    ↓
API REST
    ↓
Datos JSON
```

---

# 👨‍💻 Autor

### Francisco Javier Stevenin

🎓 Proyecto realizado durante la formación **Talento Tech — Node.js**

🔗 GitHub:

https://github.com/franjavi1

---

<p align="center">

### ⭐ Si este proyecto te resulta útil, podés darle una estrella al repositorio.

**🚀 Node.js · JavaScript · REST API · CLI**

</p>

