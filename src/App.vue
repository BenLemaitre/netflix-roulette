<template>
  <v-app>
    <!-- Navbar -->
    <Navbar />
    <!-- App Content -->
    <main>
      <v-container class="mt-12">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth snackbar -->
        <!-- <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn dark text @click="authSnackbar = false">Close</v-btn>
        </v-snackbar> -->

        <!-- Auth Errors snackbar -->
        <!-- <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError.message }}</h3>
          <v-btn dark text to="/signin">Signin</v-btn>
        </v-snackbar> -->
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
