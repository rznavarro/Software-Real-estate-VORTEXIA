const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    maxlength: [200, 'El título no puede tener más de 200 caracteres']
  },
  price: {
    type: String,
    required: [true, 'El precio es obligatorio'],
    trim: true
  },
  priceNumeric: {
    type: Number,
    required: [true, 'El precio numérico es obligatorio']
  },
  location: {
    type: String,
    required: [true, 'La ubicación es obligatoria'],
    trim: true
  },
  status: {
    type: String,
    enum: ['disponible', 'vendida', 'alquilada', 'reservada', 'en_negociacion'],
    default: 'disponible',
    required: true
  },
  type: {
    type: String,
    enum: ['Casa', 'Apartamento', 'Villa', 'Penthouse', 'Comercial', 'Terreno', 'Oficina'],
    required: true
  },
  bedrooms: {
    type: Number,
    min: [0, 'Las habitaciones no pueden ser negativas'],
    default: 0
  },
  bathrooms: {
    type: Number,
    min: [0, 'Los baños no pueden ser negativos'],
    default: 0
  },
  area: {
    type: String,
    trim: true
  },
  areaNumeric: {
    type: Number,
    min: [0, 'El área no puede ser negativa']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [2000, 'La descripción no puede tener más de 2000 caracteres']
  },
  paymentMethods: [{
    type: String,
    enum: ['Contado', 'Financiamiento', 'Permuta', 'Mensual', 'Financiamiento Premium']
  }],
  interestedClients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  }],
  daysOnMarket: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  leads: {
    type: Number,
    default: 0
  },
  profitMargin: {
    type: String,
    trim: true
  },
  profitMarginNumeric: {
    type: Number,
    default: 0
  },
  marketTrend: {
    type: String,
    enum: ['up', 'down', 'stable'],
    default: 'stable'
  },
  urgency: {
    type: String,
    enum: ['high', 'medium', 'low', 'none'],
    default: 'none'
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    caption: String,
    isMain: {
      type: Boolean,
      default: false
    }
  }],
  // Información de venta/alquiler
  soldTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  },
  soldDate: {
    type: Date
  },
  soldPrice: {
    type: Number
  },
  rentedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  },
  rentMonths: {
    type: Number
  },
  monthlyRent: {
    type: String
  },
  monthlyRentNumeric: {
    type: Number
  },
  // Características adicionales
  features: [{
    type: String,
    trim: true
  }],
  amenities: [{
    type: String,
    trim: true
  }],
  // Información de ubicación detallada
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  // Información de marketing
  marketingStatus: {
    type: String,
    enum: ['active', 'paused', 'expired'],
    default: 'active'
  },
  marketingBudget: {
    type: Number,
    default: 0
  },
  marketingChannels: [{
    type: String,
    enum: ['Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'Referencias', 'Sitio Web']
  }],
  // Historial de actividades
  activities: [{
    type: {
      type: String,
      enum: ['view', 'lead', 'offer', 'negotiation', 'sale', 'rent']
    },
    description: String,
    date: {
      type: Date,
      default: Date.now
    },
    contact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    },
    outcome: String,
    notes: String
  }],
  // Asignación
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  // Etiquetas y categorización
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    enum: ['residencial', 'comercial', 'industrial', 'terreno'],
    default: 'residencial'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para optimizar consultas
propertySchema.index({ status: 1 });
propertySchema.index({ type: 1 });
propertySchema.index({ location: 1 });
propertySchema.index({ priceNumeric: 1 });
propertySchema.index({ areaNumeric: 1 });
propertySchema.index({ urgency: 1 });
propertySchema.index({ createdAt: -1 });
propertySchema.index({ assignedTo: 1 });

// Métodos estáticos
propertySchema.statics.findByStatus = function(status) {
  return this.find({ status });
};

propertySchema.statics.findByType = function(type) {
  return this.find({ type });
};

propertySchema.statics.findByPriceRange = function(minPrice, maxPrice) {
  return this.find({
    priceNumeric: { $gte: minPrice, $lte: maxPrice }
  });
};

propertySchema.statics.findUrgent = function() {
  return this.find({ urgency: 'high' });
};

// Métodos de instancia
propertySchema.methods.addActivity = function(activity) {
  this.activities.push(activity);
  return this.save();
};

propertySchema.methods.updateStatus = function(newStatus) {
  this.status = newStatus;
  if (newStatus === 'vendida' || newStatus === 'alquilada') {
    this.daysOnMarket = Math.ceil((new Date() - this.createdAt) / (1000 * 60 * 60 * 24));
  }
  return this.save();
};

propertySchema.methods.addView = function() {
  this.views += 1;
  return this.save();
};

propertySchema.methods.addLead = function() {
  this.leads += 1;
  return this.save();
};

// Virtuals
propertySchema.virtual('isAvailable').get(function() {
  return this.status === 'disponible';
});

propertySchema.virtual('isSold').get(function() {
  return this.status === 'vendida';
});

propertySchema.virtual('isRented').get(function() {
  return this.status === 'alquilada';
});

propertySchema.virtual('mainImage').get(function() {
  const mainImg = this.images.find(img => img.isMain);
  return mainImg ? mainImg.url : (this.images[0] ? this.images[0].url : null);
});

propertySchema.virtual('daysOnMarketFormatted').get(function() {
  if (this.status === 'disponible') {
    return Math.ceil((new Date() - this.createdAt) / (1000 * 60 * 60 * 24));
  }
  return this.daysOnMarket;
});

// Middleware pre-save para actualizar días en mercado
propertySchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'disponible') {
    this.daysOnMarket = Math.ceil((new Date() - this.createdAt) / (1000 * 60 * 60 * 24));
  }
  next();
});

module.exports = mongoose.model('Property', propertySchema); 