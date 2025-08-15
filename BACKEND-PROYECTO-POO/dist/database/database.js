import mongoose from 'mongoose';
import config from '../config/config.js';
mongoose.connect(config.mongoUri).then(async () => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
});
//# sourceMappingURL=database.js.map