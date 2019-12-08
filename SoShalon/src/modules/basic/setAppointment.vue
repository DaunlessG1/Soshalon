<template>
  <div id="setAppointment">
  <Header2></Header2>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"/>
    <br />
    <br />
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
                            <!-- <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;" class="image" src="">140x140</span> -->
                            <img  class="image" :src="this.img">
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">@{{this.username}}</p>
                          <p class="mb-0">Address :{{this.address}}</p>
                          <p class="mb-0">service:{{this.service}}</p>
                          
                        </div>
                      </div>
                    </div>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <label id="appointment">APPOINTMENT DETAILS</label>
                                  <div>
                                    <label id="service">Service:</label>
                                    <div id="app">
                                      <select id="select" v-model="selected" class="selectpicker" >
                                          <option v-for="service in services" v-bind:key="service.servicename">
                                            {{ service.servicename }}
                                          </option>
                                      </select>
                                      <br>
                                      <span>Selected Service:
                                      {{selected.service}}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <label id="service">Date:</label>
                                    <b-col sm="8">
                                      <b>{{this.date}}</b>
                                    </b-col>
                                  </div>
                                  <div>
                                    <label id="service">Time:</label>
                                    <b-col sm="8">
                                      <b>{{this.time}}</b>
                                    </b-col>
                                  </div>
                                  <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label id="service">Description:</label>
                                    <textarea
                                      v-model="input.description2"
                                      class="form-control"
                                      rows="5"
                                      placeholder="Add description bere..."
                                    ></textarea>
                                  </div>
                                </div>
                                </div>
                     
                               <div class="col">
                                  <label id="appointment">PERSONAL DETAILS</label>
                                  <div class="form-group">
                                    <label id="service">Fullname:</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="fullname"
                                      placeholder="Enter name"
                                      value
                                      v-model="input.fullname2"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label id="service">Home Address:</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="username"
                                      placeholder="Enter home address"
                                      value
                                      v-model="input.address2"
                                    />
                                    <br>
                                    <label id="appointment">CONTACT DETAILS</label>
                                  <div class="form-group">
                                    <label id="service">Contact number:</label>
                                    <input
                                      class="form-control"
                                      type="phone"
                                      placeholder="Enter phone number"
                                      v-model="input.contactNo2"
                                    />
                                    <label id="service">Messenger:</label>
                                    <input
                                      class="form-control"
                                      type="messenger"
                                      placeholder="Add messenger here..."
                                      v-model="input.messenger2"
                                    />
                                  </div>
                                </div>
                                </div>
                              </div>
                              </div>
                               <div class="row">
                                <div class="col mb-3">
                                  <div class="col d-flex justify-content-end">
                                    <b-button
                                      v-on:click="alertDisplay1()"
                                      variant="danger"
                                    >CANCEL</b-button>
                                    <br />
                                    <br />
                                    <b-button
                                      v-on:click="submit()"
                                      variant="info"
                                    >SUBMIT</b-button>
                                  </div>
                                </div>
                              </div>
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
    <br />
    <br />
  </div>

</template>
<script>
import $ from "jquery";
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import { constants } from "fs";
import axios from "axios";
import router from "router";
export default {
  components:{
    Header2
  },
  name: "profile",

  mounted(){  
     axios.get("http://localhost:3000/setAppointment").then(response => {
      for (var i in response.data.data) {
        this.fullname =response.data.data[i].fullname;
        this.img = response.data.data[i].img;
        this.username = response.data.data[i].username;
        this.address = response.data.data[i].address;
        this.service =response.data.data[i].serviceOffered;
        this.date = response.data.data[i].date;
        this.time = response.data.data[i].time;
        this.ServiceProviderId = response.data.data[i]._id;
      }
      console.log(this.image)
    });
  },
    data() {
    return {
      selected: '',
        services: [
        {servicename: 'HairCut'},
        {servicename: 'NailPolish'}
      ],
      ServiceProviderId :"",
      date: "",
      time: "",
      fullname: "",
      img:"",
      username:"",
      address:"",
      service:"",
      input: {
        fullname2: "",
        address2: "",
        messenger2: "",
        contactNo2: "",
        description2: "",
      }
    };
  },
  methods: {
    error() {
      this.$swal({
        type: "warning",
        title: "Error",
        text: "All fields must be filled!"
      });
    },
    alertDisplay() {
      this.$swal({
        type: "success",
        title: "SUCCESS!",
        text: "Your appointment has been submitted"
      });
    },
    alertDisplay1() {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    submit() {
      var data = {
        ServiceProviderId: this.ServiceProviderId,
        fullname: this.input.fullname2,
        address: this.input.address2,
        messenger:this.input.messenger2,
        contactNo:this.input.contactNo2,
        description: this.input.description2,
        service: this.selected,
        date : this.date,
        time : this.time,
        SPfullname: this.fullname,
        SPusername: this.username
      };
      axios.post("http://localhost:3000/addAppointment", data)
        .then(response => {
          if (response.data.message == "ok") {
            this.alertDisplay();
          }
          else if(response.data.message == 'err'){
            this.error();
          }
          err => {
            console.log(err); 
          };
        });
    }

  },
   
  
};
// font-family: "Times New Roman", Times, serif;
</script>
<style scoped>
body {
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-dark-purple-geometric-minimalist-background-effectgradientbusiness-image_87387.jpg");
}
#logo {
  width: 200px;
  height: auto;
}
.bg-dark {
  background-color: black !important;
}
#notify {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1449px;
  top: 25px;
}

h4 {
  color: #00bcd4;
}
p {
  color: #00bcd4;
}
#appointment {
  color: #ff3377;
  font-weight: bold;
 
  text-align: center;
}
#service {
  color: #00bcd4;
  font-weight: bold;
}
.image {
    width: auto;
    height: 140px;
    max-width: 150px;
    max-height: 140px;
}
.select {
  width: 50%;
}
</style>