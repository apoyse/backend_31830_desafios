Estaría bueno ir haciendo un Readme similar a este, documentando que endpoints tenemos, que método http, que parámetros y body van recibir. Y también que respuesta vamos a obtener.
También como van a ser entregas de desafíos pueden dejar sus dudas por acá o cualquier comentario, quedando mucho más ordenado.

Pueden escribirlo sin formato pero si no pueden usar algún editor de Markdown para que sea más facil darle "estilo". Ejemplo: https://www.makeareadme.com/
Luego cuando lo abran con algún editor o en github, va a verse con estilo!

---

# Desafío Clase 8 - Api Restful

## Rutas de acceso:

### Get Product

GET: /api/productos

Response: array de productos

### Get Product by id

GET: /api/productos/id

Response: producto: {id, title, price, thumbnail}

### Save product

POST: /api/productos

body: { "title", "price","thumbnail" }

Response: producto: {id, title, price, thumbnail}

### Update product

PUT: /api/productos/id

body: { "title", "price","thumbnail" }

Response: producto actualizado: {id, title, price, thumbnail}

### Delete Product by id

DELETE: /api/productos/id

Response: producto: {id, title, price, thumbnail}

## Vistas:

/: Formulario para cargar un producto
