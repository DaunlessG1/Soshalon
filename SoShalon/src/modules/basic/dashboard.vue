<template>
  <div id="dashboard">
    <Header2></Header2>
    <div class="result_part">
      <div v-for="user in users" v-bind:key="user._id">
        <serviceProviderCard
          v-bind:id="user._id"
          v-bind:fullname="user.fullname"
          v-bind:address="user.address"
          v-bind:sched="user.email"
          v-bind:serviceOffered="user.serviceOffered" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import serviceProviderCard from "components/card/card.vue";
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import { METHODS } from "http";
import { format } from "path";
import router from 'router';
import axios from 'axios';
export default {
  components: {
    Header2,
    serviceProviderCard
  },
  
  data() {
    return {
      users:[]
    };
  },
  mounted() {
    axios.get("http://localhost:3000/dashboard").then(response => {
      for(var i in response.data.data){
        if(response.data.data[i].post == true){
          this.users.push(response.data.data[i])
          //console.log(response.data.data[i].serviceOffered)
        }
        
         }
    });
  },
  methods: {
    format(value, event) {
      return value.toLowerCase();
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

</style>