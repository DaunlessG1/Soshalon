<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="dark" >
      <b-navbar-brand @click="dashboard()">
        <img id="logo" src="\logo.png">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

          <img id="profile" :src="this.img">
          <b-nav-item-dropdown id="my-nav-dropdown" toggle-class="nav-link-custom" right>
            <img id="editprofile" :src="this.img">
            <p>
              {{this.username}}
              <br>
              {{this.email}}
            </p>
            <b-button variant="info" @click="editprofile()">Edit</b-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="viewAppointments()">VIEW APPOINTMENTS</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="logout()">SIGN OUT</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import $ from "jquery";
import router from "router";
import axios from "axios";
export default {
  name: "Header2",
  data() {
    return { 
      username: "",
      email: "",
      img: ""
    };
  },
  mounted() {
    axios.get("http://localhost:3000/profile").then(response => {
      for (var i in response.data.data) {
        this.username = response.data.data[i].username;
        this.email = response.data.data[i].email;
        this.img = response.data.data[i].img;
        console.log(this.img);
      }
    });

  },

  methods: {
    format(value, event) {
      return value.toLowerCase();
    },
    editprofile() {
      router.push({ path: "/profile" });
    },
    logout() {
      router.push({ path: "/" });
      sessionStorage.setItem("token", false);
    },
    viewAppointments() {
      router.push({ path: "/appointments" });
    },
    dashboard() {
      router.push({ path: "/dashboard" });
    }
  }
};
</script>
<style>
.mb-3,
.my-3 {
  margin-bottom: 0rem !important;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
#logo {
  width: 200px;
  height: auto;
}
.bg-dark {
  background-color: black !important;
}
#notify {
  width: 50px;
  height: 50px;
}
#profile {
  width: 50px;
  height: 50px;
  border: 2px solid #ffff;
  border-radius: 50px;
}
#editprofile {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #ffff;
  margin-left: -1px;
}
.dropdown-menu {
  top: 100%;
  z-index: 1000;
  min-width: 16rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: white;
  text-align: center;
  list-style: none;
  background-color: #000;
  background-clip: padding-box;
  border: 2px solid #f8f9fa;
  border-radius: 0.25rem;
}

.btn-secondary {
  color: #545b62;
  background-color: rgba(255, 255, 255, 0.8);
  margin-left: 665%;
}
.btn-secondary:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
}
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
.dropdown-item {
  color: rgba(0, 188, 212, 0.8);
}

</style>