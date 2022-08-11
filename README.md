# Desafió login v2 - Héctor Bustos - comisión 30980

Las rutas son:

- Ruta protegida (trae los datos del usuarios, solo de prueba) --> [GET] /

- Ruta de registro --> [POST] /register
- Ruta de inicio de sesión --> [POST] /login
- Ruta de termino de sesión --> [GET] /logout
- Ruta de obtiene información del process --> [GET] /info

El tiempo de vida de las sesiones son de 10 minutos.

## Se agrega lectura de .env con dotenv

### Datos a agregar en .env

- PORT ( viene por defecto 8080)
- COOKIE_MAX_AGE (numero en segundos)
- SECRET_SESSION (cadena de texto)
- MOONGODB_URI (Uri para entrar a mongodb)
