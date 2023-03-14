# Práctica de Cypress(CRUD API Testing)

<p align = "middle">
👋 <b>Bienvenido</b>
</p>
<p align="middle">
  <img src="https://img.shields.io/badge/library-cypress-green.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/library-json server-gray.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>


## ¿Qué vas a encontrar en este repositorio?

- Uso de la api de [json-server](https://github.com/typicode/json-server)
- Uso de Javascript como lenguaje
- Uso de Cypress como libreria de testing
- Uso de json-server para crear una "full fake REST API"
- Uso de metodos GET, PUT, POST, DELETE y sus validaciones

## ¿Empezamos?

Primero obtenemos el código e instalamos las dependencias necesarias.
```
git clone https://github.com/ValenUNLP/CRUD-API-Test.git
cd CRUD-API-Test
npm install
```
Paso siguiente, iniciamos json-server en el puerto 3000
```
npm start
```

Si queremos que se abra la UI de Cypress para poder ver como trabajan los tests con mas facilidad.

```
npx cypress open
```

Caso contrario, podemos ejecutar de manera "headless", lo cual nos va a mostrar los resultados en la misma consola y mucho mas rapido.
```
npx cypress run
```
