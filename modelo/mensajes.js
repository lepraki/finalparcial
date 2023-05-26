const {
    Schema,
    model
} = require('mongoose');

const MensajeScheme = Schema({

    
    nombre: {
        type: String,
        required: true
    },
    Descrip: {
        type: String,
        required: true
    },
     
   
});

module.exports = model('Mensaje', MensajeScheme);