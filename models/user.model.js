const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
  },
  createdBy: {
    type: Date,
    default: new Date(),
  },
  updatedBy: {
    type: Date,
    default: new Date(),
  },
  lastActiveTime: {
    type: Date,
    default: new Date(),
  },
  uuid: {
    type: String,
  },
  jwtToken: {
    type: String,
  },
});

// Save password in encrypted format
userSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password ? user.password : '', salt, (
        err,
        hash,
      ) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
userSchema.methods.comparePassword = function (pw, cb) {
  bcrypt.compare(pw, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);
