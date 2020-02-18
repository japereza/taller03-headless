![](https://raw.github.com/japereza/miso4208-taller02-e2e/master/src/common/images/logo-uniandes.png)

# TALLER 03 Lighthouse - Headless Testing

Repo que contiene las evidencias del taller 3 Lighthouse - Headless Testing desarrollado por:

- [x] Angela Patricia Anaya Castañeda:
    - Estudiante MATI - 201510682
    - ap.anaya10@uniandes.edu.co
- [x] Javier Alexander Perez Arevalo
    - Estudiante MATI - 201811140
    - ja.pereza@uniandes.edu.co


# EVIDENCIAS

## 1. Cypress

Se toma lo hecho en el taller 02 y se ejecuta en modo Headless. Esta es la ruta al video que genero `cypress run .`:
https://github.com/japereza/taller03-headless/tree/master/cypress/cypress/videos

## 2. Protactor

Se toma lo hecho en el taller 02 y se ejecuta en modo Headless. Este es el protractor.conf.js modificado:
https://github.com/japereza/taller03-headless/blob/master/protactor/e2e/protractor.conf.js

## 3. Puppeteer

El ejercicio de puppeteer se trabaja de nuevo para mejorar su ejecucion con JEST y se escriben pruebas
https://github.com/japereza/taller03-headless/tree/master/puppeteer

Por defecto Puppeteer trabaja Headless pero se sube el proyecto configurado para trabajar Headfull como fue el reto del taller:
```javascript
const browser = await puppeteer.launch({
    headless: false
  })
```
https://github.com/japereza/taller03-headless/blob/master/puppeteer/setup.js
