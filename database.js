const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vortexia', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    
    // Crear índices para optimizar consultas
    await createIndexes();
    
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};

const createIndexes = async () => {
  try {
    // Índices para Contact
    await mongoose.model('Contact').createIndexes({ email: 1 });
    await mongoose.model('Contact').createIndexes({ segment: 1 });
    await mongoose.model('Contact').createIndexes({ priority: 1 });
    
    // Índices para Property
    await mongoose.model('Property').createIndexes({ status: 1 });
    await mongoose.model('Property').createIndexes({ type: 1 });
    await mongoose.model('Property').createIndexes({ location: 1 });
    
    // Índices para Team
    await mongoose.model('Team').createIndexes({ position: 1 });
    await mongoose.model('Team').createIndexes({ department: 1 });
    
    console.log('✅ Índices de base de datos creados');
  } catch (error) {
    console.log('⚠️ Algunos índices ya existen o no se pudieron crear');
  }
};

module.exports = connectDB; 