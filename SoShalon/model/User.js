var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  img: { 
   type:String,
   required: false
  },
  fullname: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  contactNo: {
    type: String,
    required: false
  },
  fb: {
    type: String,
    required: false
  },
  serviceOffered: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  post:{
    type: Boolean,
    required: false
  },
  date:{
    type: Date,
    required: false
  },
  time:{
    type:String,
    required: false
  }
  //,
  // schedule: {
  //   type: String,
  //   required: false,
  //   enum:[]
  // }
});

UserSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      if(password == user.password){
        return callback(null, user);
      }
      else{
        return callback();
      }
      
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;