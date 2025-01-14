# Supabase Project

Este repositorio proporciona una configuración básica para interactuar con Supabase utilizando la biblioteca de cliente de Supabase en Node.js. El proyecto está configurado para utilizar variables de entorno para gestionar de manera segura las claves API.

## Requisitos

- Node.js (v12 o superior)
- npm (v6 o superior)

## Configuración

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno. Puedes utilizar los valores proporcionados por tu proyecto de Supabase:

    ```plaintext
    SUPABASE_URL=https://zgevclinpwbiguyqeegi.supabase.co
    SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZXZjbGlucHdiaWd1eXFlZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDYyOTEsImV4cCI6MjAzNzg4MjI5MX0.gd_YS9b7jC1eVEh163t19MtiiJ2y_DcpeRD4orxSO5U
    ```

4. El archivo `index.js` debe tener el siguiente contenido para conectarse a Supabase utilizando las variables de entorno:

    ```javascript
    require('dotenv').config();
    const { createClient } = require('@supabase/supabase-js');

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    module.exports = supabase;

    // Ejemplo de uso
    async function getData() {
        const { data, error } = await supabase
            .from('tu_tabla')
            .select('*');

        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Data:', data);
        }
    }

    getData();
    ```

## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando:

```bash
node index.js
