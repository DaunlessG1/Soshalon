<template>
  <div id="appointments">
    <Header2></Header2>
    <br>
    <br>
    <div v-for="appointment in appointments"  v-bind:key="appointment._id">
      <appointmentcard
        v-bind:id="appointment._id"
        v-bind:customerName="appointment.fullname"
        v-bind:address="appointment.address"
        v-bind:ContactNo="appointment.contactNo"
        v-bind:fb="appointment.messenger"
        v-bind:date="appointment.date"
        v-bind:time="appointment.time"
        v-bind:service="appointment.service"
        v-bind:description="appointment.description"
      ></appointmentcard>
    </div>
  </div>
</template>

<script>
import appointmentcard from "components/card/appointmentNotif.vue";
import Header2 from "components/frame/Header2.vue";
import Sidebar from "components/frame/Sidebar.vue";
import AUTH from "services/auth";
import { METHODS } from "http";
import { format } from "path";
import axios from "axios";
export default {
  components: {
    appointmentcard,
    Header2
  },
  data() {
    return {
      appointments: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/appointments").then(response => {
      for (var i in response.data.data) {
        this.appointments.push(response.data.data[i]);
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
.bg-dark {
  background-color: black !important;
}
hr {
  color: white;
}
</style>