<template>
  <div>
    <Header2></Header2>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <br>
    <br>
    <div class="container">
      <div class="row flex-lg-nowrap">
        <div class="col">
          <div class="row">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <div class="row">
                      <div class="col-12 col-sm-auto mb-3">
                        <div class="mx-auto" style="width: 140px;">
                          <div
                            class="d-flex justify-content-center align-items-center rounded"
                            style="height: 140px; background-color: rgb(233, 236, 239);">
                            <img :src="this.img" class="image" id="img">
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">{{this.username}}</p>
                          <p class="mb-0">{{this.email}}</p>
                          <div class="input-group">
                            <form  enctype="multipart/form-data">
                              <div class="fields">
                                <br>
                                <input type="file" ref="file" name="file" @change="onSelect()">
                              </div>
                             
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" >
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Full Name</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      value = this.fullname
                                      v-model="fullname"
                                     
                                    >
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Username</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="username"
                                      value = this.username
                                      v-model="username"
                                      >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Email</label>
                                    <input
                                      class="form-control"
                                      type="email"
                                      name="email"
                                      value = this.email
                                      v-model="email"
                                      >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Address</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="address"
                                      value = this.address
                                      v-model="address"
                                      
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Facebook Messenger</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value = this.fb
                                      v-model="fb"
                                      
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Contact number</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value = this.contactNo
                                      v-model="contactNo"
                                      
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="container">
                                <b>What service/s do you offer?</b><br>
                                <input type="checkbox" id="service1" value="HairCut" v-model="checkedService">
                                <label for="HairCut">Hair Cut</label>
                                <br>
                                <input type="checkbox" id="service2" value="NailPolish" v-model="checkedService">
                                <label for="NailPolish">Nail Polish</label><br>
                                <span>Service/s Offered: {{service}}</span>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>About</label>
                                    <textarea
                                      value = this.description
                                      v-model="description"
                                      
                                      class="form-control"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <b>Set your Schedule</b><br>
                          <div class="row">
                            <div class="col mb-3">
                            <div class="form-group">
                              <label>Date :  </label>
                              <input type="date" id="myDate"  v-model="date" value = this.date>
                              <label>From :  </label>
                              <input type="time" name="timeFrom" v-model="timeFrom" value = this.timeFrom>
                              <label>To :   </label>
                              <input type="time" name="timeTo"  v-model="timeTo" value = this.timeTo>
                              <br>
                              <span>Date: {{date +"--- "+ time}}</span>
                            </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2">
                                <b>Change Password</b>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Current Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      v-model="password"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder
                                      v-model="newPassword"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>
                                      Confirm
                                      <span class="d-none d-xl-inline">Password</span>
                                    </label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder
                                      v-model="ConfirmPassword"
                                    >
                                  </div>
                                </div>
                              </div>
                              <b>Mark check to post Profile</b>
                              <br>
                              <label class="checkbox-inline">
                               <input type="checkbox" id="checkbox" v-model="Postchecked">
                               <label for="checkbox">POST PROFILE</label>
                              </label><br>
                              <span>Status :{{status}}</span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button
                                class="btn btn-primary"
                                v-on:click="updateProfile()"
                              >Save Changes</button>
                            </div>
                            <div class="col d-flex justify-content-end">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="cancel()"
                              >cancel</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>
<script>

import $ from "jquery";
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import axios from "axios";
import router from "router";
//import DateTimePicker from 'vue-vanilla-datetime-picker';
sessionStorage.setItem("token", false);
export default {
  name: "profile",
  data() {
    return {
      time: "",
      status: "", 
      email:"",
      address:"",
      service:[],
      checkedService :[],
      Postchecked: false,
      file: "",
      fullname: "",
      username: "",
      fb: "",
      contactNo: "",
      description: "",
      password: "",
      img: "",
      ConfirmPassword: "",
      currentPassword: "",
      newPassword: "",
      date:"2019-01-01",
      timeFrom:"00:00:00",
      timeTo:"00:00:00"
 
    };
  },
  components: {
    Header2
  },
  mounted() {
    axios.get("http://localhost:3000/profile").then(response => {
      for (var i in response.data.data) {
        this.email = response.data.data[i].email;
        this.address =response.data.data[i].address;
        this.password = response.data.data[i].password;
        this.username = response.data.data[i].username;
        this.fullname = response.data.data[i].fullname;
        this.fb = response.data.data[i].fb;
        this.contactNo = response.data.data[i].contactNo;
        this.service = response.data.data[i].serviceOffered;
        this.description = response.data.data[i].description;
        this.img = response.data.data[i].img;
        this.date = response.data.data[i].date;
        this.time = response.data.data[i].time;
        if(response.data.data[i].post){
          this.status = "Posted!"
        }
        else{
          this.status = "Not posted yet try again!"
        }
      }
    });
  },

  methods: {
    alertSuccess() {
      this.$swal({
        type: "success",
        title: "SUCCESS!",
        text: "Your Profile has been updated"
      });
    },
    cancel() {
      router.push({ path: "/dashboard" });
    },
    updateProfile() {   
      if (this.password != "") {
        var data = {
          email: this.email,
          address: this.address,
          fullname: this.fullname,
          fb: this.fb,
          contactNo: this.contactNo,
          description: this.description,
          Password: this.newPassword,
          username: this.username,
          imagepath: this.img,
          post: this.Postchecked,
          service: this.checkedService,
          date:this.date,
          time : this.timeFrom +" "+ this.timeTo
        };
      }
        axios.post("http://localhost:3000/updateProfile", data).then(
          response => {
          if (response.data.message == "ok") {
            this.alertSuccess();
          }
          else{
            console.log("error")
          }
          },
          err => {
            console.log(err);
          });
    },
    onSelect() {
      //const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;  
      var img = URL.createObjectURL(file);
      $("#img").attr("src", img);
      const formData = new FormData();
      formData.append("file", this.file);
         axios
          .post("http://localhost:3000/api/file", formData)
          .then(response => {
            var str = response.data.path
            str = str.replace(/\\/g,"/")
            var requiredString = str.substring(str.indexOf('/'),str.length).trim();
            this.img = requiredString;
          
          });
        err => {
          console.log(err);
        };
    }
    
  }
};
</script>
<style scoped>
.image {
  width: 140px;
  height: 140px;
}
body {
  margin-top: 20px;
  background: #f8f8f8;
}
label{
  color:palevioletred;

  font-family: Arial;
  font-size: 15px;
}
input [type=text]{
  width: 100%;
  padding: 10px 10px;
  margin: 2px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
b{
  padding: 2px;
  font-family: Arial;
  font-size: 15px;
}
</style>


       



