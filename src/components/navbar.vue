<template>
  <v-app-bar fixed color="primary" dark>
    <!-- App title -->
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        Netflix Roulette
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navbar links -->
    <v-toolbar-items>
      <v-btn text v-for="item in navItems" :key="item.title" :to="item.link">
        <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <!-- Profile button -->
      <!-- <v-btn v-if="user" text to="/profile">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
      </v-btn> -->

      <!-- Signout button -->
      <!-- <v-btn v-if="user" text @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        Signout
      </v-btn> -->
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    navItems() {
      let items = [
        { icon: "movie", title: "Random Movie", link: "/" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" },
      ];

      return items;
    },
  },
};
</script>
