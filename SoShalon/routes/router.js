var express = require('express');
var router = express.Router();
var User = require('../model/user');
var userId;
const multer = require("multer");
const fs = require('fs');

// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + 'modules/basic/login.vue'));
});


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

router.post('/api/file',function(req,res){
    var upload = multer({ storage : storage}).single('file');
    upload(req,res,function(err) {
        if(err) {
          console.log(err)
            return res.end("Error uploading file.");
        }
        console.log(req.file)
        res.send(req.file)
        //res.end("File is uploaded");
    });
});




// fetch users that matches in search tab
router.get('/search', function(req,res){
  User.find({address: req.body.address, service1: req.body.service, service2:req.body.service}, (err,users)=>{
    if(err){
      res.send(err)
    }
    res.json({data:users})
  })
})



//fetch current User
router.get('/profile', function (req, res) {
  User.find({ _id: userId }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ data: user });
    //console.log(user)
  });
})

//fetch all users
router.get('/dashboard', function(req,res){
  User.find({}, (err,users)=>{
    if(err){
      res.send(err)
    }
    res.json({data:users})
  })
})

//login authentication
router.post('/auth', function (req, res, next) {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        res.status(401).json({ message: err.message })
        //return next(err);
      } else {
        req.session.userId = user._id;
        //req.session.password = user.password;
        userId = req.session.userId;
        res.status(200).json({ message: 'ok' })
        //return res.redirect('modules/basic/dashboard.vue');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

//register save to db
router.post('/create', function (req, res) {
  let user = new User(req.body)
  user.save()
    .then(() => {
      res.status(200).json({ message: 'ok' })
      console.log('ok')
    })
    .catch(err => {
      res.status(401).json({ message: err.message })
      console.log('error')
    })
})

//update user's profile
router.post('/updateProfile', function (req, res) {
  var email = req.body.email;
  //console.log(email)
  var username = req.body.username.trim();
  var address = req.body.address;
  var fullname = req.body.fullname;
  var fb = req.body.fb;
  var contactNo = req.body.contactNo;
  var description = req.body.description;
  var Password = req.body.Password.trim();
  var image = req.body.imagepath;
  var post = req.body.post;
  var service = req.body.service;
  var schedDate = req.body.date;
  var time = req.body.time;
  User.update({ _id :userId}, { $set: { fullname:fullname,
  email : email,
  username :username,
  address: address,
  fb : fb,
  contactNo : contactNo,
  description : description,
  Password : Password,
  img : image,
  post : post,
  service : service,
  date: schedDate,
  time:time
 } }, function (err, result) {
    console.log(result)
    if (err) {
      console.log(err);
      res.status(401).json({ message: err.message })
    }
    else {
      console.log(result);
      res.status(200).json({ message: 'ok' })
    }
  });
})

// GET route after registering
router.get('/dashboard', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;