const express = require('express');
const supabase = require('./superBaseClient.js'); // Asegúrate de que la ruta es correcta

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('test_table')  // Usa el nombre exacto de la tabla
      .select('*');
    
    if (error) {
      console.error('Error fetching data:', error);
      throw error;
    }

    console.log('Data fetched successfully:', data);
    res.json(data); // Enviar los datos como respuesta JSON
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
