# Descripcion
microservicio encargado de proporcionar productos basados en una lista de ingredientes: `tomato, lemon, potato, rice, ketchup, lettuce, onion, cheese, meat, chicken`

los productos seran vendidos en una cantidad aleatoria, no siempre se tendra disponibles productos para la venta por lo que la cantidad puede venir en 0.


### Instrucciones
1. clonar el repositorio
2. instalar dependencias con el comando: 
`npm install && npm install -d`
3. ejecutar el proyecto 
`npm run start:dev`
4. para comprar un producto ingrese a la URI: `/api/farmers-market/buy?ingredient=${INGREDIENT}`