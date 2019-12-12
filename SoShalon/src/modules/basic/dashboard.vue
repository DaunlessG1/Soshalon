<template>
  <div id="dashboard">
    <Header2></Header2>
    <br>
    <div class="row">
      <div class="col-md-6">
        <b-form-input id="addressInput" size="ml" placeholder="Search address" v-model="search"></b-form-input>
      </div>
      <div class="col-md-6">
        <b-form-input
          id="serviceInput"
          size="ml"
          placeholder="Search Service"
          @input.native="findNow"
          v-model="search2"
        ></b-form-input>
      </div>
    </div>

    <div v-if="filterByService">
      <div class="col-md-6">
        <div v-for="user in serviceArr">
          <serviceProviderCard
            v-bind:img="user.img"
            v-bind:id="user._id"
            v-bind:fullname="user.fullname"
            v-bind:address="user.address"
            v-bind:sched="user.date + ' - ' + user.time"
            v-bind:serviceOffered="user.serviceOffered"
            v-bind:email ="user.email"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-6">
          <div v-for="user in filteredList">
            <serviceProviderCard
              v-bind:img="user.img"
              v-bind:id="user._id"
              v-bind:fullname="user.fullname"
              v-bind:address="user.address"
              v-bind:sched="user.date + ' - ' + user.time"
              v-bind:serviceOffered="user.serviceOffered"
            />
          </div>
        </div>
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
import router from "router";
import axios from "axios";
export default {
  components: {
    Header2,
    serviceProviderCard
  },

  data() {
    return {
      search: "",
      search2: "",
      users: [],
      serviceArr: [],
      filterByService: false
    };
  },
  mounted() {
    axios.get("http://localhost:3000/dashboard").then(response => {
      for (var i in response.data.data) {
        if (response.data.data[i].post == true) {
          this.users.push(response.data.data[i]);
          //console.log(response.data.data[i].serviceOffered);
        }
      }
    });
    //console.log("users; ", this.users);
  },
  computed: {
    filteredList() {
      return this.users.filter(user => {
        var filter = user.address
          .toLowerCase()
          .includes(this.search.toLowerCase());
        //filter = user.fullname.toLowerCase().includes(search2.toLowerCase());
        return filter;
      });
    }
  },
  methods: {
    format(value, event) {
      return value.toLowerCase();
    },
    findNow() {
      if (this.search2 !== "") {
        var size = this.search2.length;
        this.users.forEach(element => {
          element.serviceOffered.forEach(service => {
            if (
              this.search2.toLowerCase() == service.toLowerCase().slice(0, size)
            ) {
              if (!this.serviceArr.includes(element)) {
                this.serviceArr.push(element);
                this.filterByService = true;
              }
            }
          });
        });
      } else {
        this.filterByService = false;
        this.serviceArr = []
      }
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
#addressInput {
  width: 50%;
  margin-left: 40%;
  opacity: 0.5;
}
#serviceInput {
  width: 50%;
  opacity: 0.5;
}
#addressInput:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
#serviceInput:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
</style>