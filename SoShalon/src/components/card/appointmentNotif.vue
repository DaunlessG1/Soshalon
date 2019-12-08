<template>
    <div>   
      <div>
        
        <b-card no-body class="overflow-hidden" >
          <b-row no-gutters>
            <b-col >
                <b-card-text id="text">
                 <b>Customer Name : </b>{{customerName}}<br>
                  <b>Address : </b>{{address}}<br>
                  <b>Contact Number : </b>{{ContactNo}}<br> 
                  <b>FB Messenger : </b>{{fb}}<br>
                  <b>Date : </b>{{date}}<br>
                  <b>Time : </b>{{time}}<br>
                  <b>Service Needed: </b>{{service}}<br>
                  <b>Description: </b>{{description}}<br>
                  <button  @click ="confirm()" class="button1">Confirm</button>  
                  <button  @click ="del()" class="button2">Delete</button>
                </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
</template>

<script>
//import AUTH from "services/auth";
import router from "router";
import axios from "axios";
export default {
  name: "dashboard",
  props: {
      id: String,
      customerName: String,
      address: String,
      ContactNo: String,
      fb: String,
      date: String,
      time: String,
      service: Array,
      description: String,
      status: Boolean,
     
  },
  data() {
    return {
      isHidden: false
    };
  },
  methods :{
    confirm(){
      this.$swal({
        type: "success",
        title: "SUCCESS!",
        text: "Appointment has been Confirmed"
      });

    },
    del(){
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
            "You successfully deleted this appointment",
            "success"
          );
          
        } else {
          this.$swal("Cancelled", "Appointment is still intact", "info");
        }
      });
    }
  }
};
</script>
<style>

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 13px;
  font-weight: 200;
  line-height: 1.4;
  color: #212529;
  text-align: left;
  background-color: #fff;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
#address {
  width: 195px;
  margin-left: 65%;
}
.card {
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
    word-wrap: break-word;
    background-color:rgba(0, 0, 0, 0.9);
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0;
    color: white;
}
hr{
    color: white;
}
.rounded-0{
  height: 200px;
  width: auto;
  max-width: 250px;
  max-height: 250px
  
}
#text{
  margin-top: 10px;
  margin-left: 10px;
}
button{
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}
.button1{
  background-color: #4CAF50; /* Green */
}
.button2{
  background-color:red /* Green */
}
b{
  font-size: 15px;
  color: #00bcd4;
}
</style>