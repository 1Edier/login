require('dotenv').config();
const express = require('express');
const cors = require('cors');

    
const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Rutas
const loginRouter = require('./src/routes/login.route');
const userRouter = require('./src/routes/users.routes');


app.use('/login', loginRouter);
app.use('/users', userRouter);




// Inicia el servidor Node.js
app.listen(PORT, () => {
    console.log(`API de Node.js escuchando en el puerto ${PORT}`);
});
