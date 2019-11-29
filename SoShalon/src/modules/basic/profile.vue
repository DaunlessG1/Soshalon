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
                            style="height: 140px; background-color: rgb(233, 236, 239);"
                          >
                            <img src class="image" id="img">
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">{{this.username}}</p>
                          <p class="mb-0">{{this.email}}</p>
                          <div class="input-group">
                            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                              <div class="fields">
                                <label>Upload File</label>
                                <br>
                                <input type="file" ref="file" @change="onSelect()">
                              </div>
                              <div class="fields">
                                <button>Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" onsubmit="event.preventDefault();">
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
                                      v-model="input.fullname"
                                      :placeholder="[[ this.fullname ]]"
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
                                      v-model="input.username"
                                      :placeholder="[[ this.username ]]"
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
                                      type="text"
                                      v-model="input.email"
                                      :placeholder="[[this.email]]"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Adress</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      v-model="input.address"
                                      :placeholder="[[this.address]]"
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
                                      v-model="input.fb"
                                      :placeholder="[[this.fb]]"
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
                                      v-model="input.contactNo"
                                      :placeholder="[[this.contactNo]]"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="container">
                                <b>What service/s do you offer?</b>
                                <br>
                                <label class="checkbox-inline">
                                  <input
                                    id="service1"
                                    type="checkbox"
                                    value="NailPolish"
                           
                                    :placeholder="[[this.service1]]"
                                  >Nail Polish
                                </label>
                                <br>
                                <label class="checkbox-inline">
                                  <input
                                    id="service2"
                                    type="checkbox"
                                    value="Haircut"
                             
                                    :placeholder="[[this.service2]]"
                                  >Hair cut
                                </label>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>About</label>
                                    <textarea
                                      v-model="input.description"
                                      :placeholder="[[this.description]]"
                                      class="form-control"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <b>Set your Schedule</b>
                            <br>
                            <div class="col">
                              <div class="form-group">
                                <label>From</label>
                                <input class="form-control" type="text" placeholder value>
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-group">
                                <label>To</label>
                                <input class="form-control" type="text" name placeholder value>
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
                                      placeholder=" "
                                      v-model="input.currentPassword"
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
                                      v-model="input.newPassword"
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
                                      v-model="input.ConfirmPassword"
                                    >
                                  </div>
                                </div>
                              </div>
                              <b>Mark check to post Profile</b>
                              <br>
                              <label class="checkbox-inline">
                                <input
                                  id="checkboxpost"
                                  type="checkbox"
                                  :value="this.ispost"
                                  :placeholder="[[this.ispost]]"
                                >Post Profile
                              </label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button
                                type="submit"
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
sessionStorage.setItem("token", false);
export default {
  name: "profile",
  data() {
    return {
      ispost: $("#checkboxpost").val(),
      file: "",
      fullname: "",
      email: "",
      username: "",
      fb: "",
      contactNo: "",
      service1: $("#service1").val(),
      service2: $("#service2").val(),
      description: "",
      password: "",
      img: "",
      address:"",
      input: {    
        fullname: "",
        username: "",
        email: "",
        address:"",
        fb: "",
        contactNo: "",
        description: "",
        currentPassword: "",
        newPassword: "",
        ConfirmPassword: ""
      }
    };
  },
  components: {
    Header2
  },
  mounted() {
    axios.get("http://localhost:3000/profile").then(response => {
      //this.username = response.data.data.username
      for (var i in response.data.data) {
        this.username = response.data.data[i].username;
        this.fullname = response.data.data[i].fullname;
        this.email = response.data.data[i].email;
        this.fb = response.data.data[i].fb;
        this.contactNo = response.data.data[i].contactNo;
        this.service1 = response.data.data[i].service1;
        this.service2 = response.data.data[i].service2;
        this.description = response.data.data[i].description;
        this.img = response.data.data[i].img;
        this.address = response.data.data[i].address;
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
      if (this.input.fullname == "") {
        this.input.fullname = this.fullname;
      }
      if (this.input.fb == "") {
        this.input.fb = this.fb;
      }
      if (this.input.contactNo == "") {
        this.input.contactNo = this.contactNo;
      }
      if (this.input.description == "") {
        this.input.description = this.description;
      }
      if(this.input.address == ""){
        this.input.address == this.address;
      }
      if(this.input.email == ""){
        this.input.email == this.email;
      }
      if (this.input.password == "") {
        alert(fasd)
        var data2 = {
          fullname: this.input.fullname,
          fb: this.input.fb,
          contactNo: this.input.contactNo,
          service1: this.service1,
          service2: this.service2,
          description: this.input.description,
          email: this.input.email,
          username: this.input.username,
          imagepath: this.img,
          post: this.ispost,
          address : this.input.address
        };
        axios.post("http://localhost:3000/updateProfile", data2).then(
              response => {
                if (response.data.message == "ok") {
                  console.log("ok");
                  this.alertSuccess();
                }
              },
              err => {
                console.log(err);
              }
        );
      }
       else {
        var data = {
          fullname: this.input.fullname,
          fb: this.input.fb,
          contactNo: this.input.contactNo,
          service1: this.service1,
          service2: this.service2,
          description: this.input.description,
          Password: this.input.newPassword,
          email: this.input.email,
          username: this.input.username,
          imagepath: this.img,
          post: this.ispost,
          address : this.input.address
        };
        //alert(this.post)
        AUTH.passwordValidation(this.input.newPassword);
        if (AUTH.passwordValid == 1) {
          if (this.input.newPassword == this.input.ConfirmPassword) {
            axios.post("http://localhost:3000/updateProfile", data).then(
              response => {
                if (response.data.message == "ok") {
                  console.log("ok");
                  this.alertSuccess();
                  //router.push({ path: "/login" });
                }
              },
              err => {
                console.log(err);
              }
            );
          } else {
            alert("Password did not match");
          }
        }
      }
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
      var img = URL.createObjectURL(file);
      //this.file = img;
      $("#img").attr("src", img);
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios
          .post("http://localhost:3000/upload", formData)
          .then(response => {
            this.img = response.data.file.path + ".jpg";
            //console.log(this.img)
            //this.message = "Uploaded!!"
          });
        err => {
          console.log(err);
        };
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
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
</style>


       



