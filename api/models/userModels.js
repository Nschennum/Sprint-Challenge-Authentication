const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true, 
    minlength: 12
  }
});

UserSchema.pre('save', function(next) {
  bcrypt
  .hash(this.password, 10)
  .then(hash => {
    this.password = hash;
    next();
  })
  .catch(err => {
    return next(err);
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  bcrypt.compare(plainTextPW, this.password, function(err, isValid){
    if(err){
      return callBack(err)
    }
    callBack(null, isValid)
  })
};

module.exports = mongoose.model('User', UserSchema);
