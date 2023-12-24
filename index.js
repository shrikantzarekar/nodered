const express = require('express');
const RED = require('node-red');

// Create an Express app
const app = express();

// Initialize Node-RED
RED.init(app, {});

// Serve the editor UI
app.use(RED.httpAdmin);

// Serve the http nodes UI
app.use(RED.httpNode);

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Node-RED is running on port ' + (process.env.PORT || 3000));
});
