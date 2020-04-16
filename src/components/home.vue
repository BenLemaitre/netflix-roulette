<template>
  <v-container class="mt-3" flexbox center>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 align="center">Random Movie</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-form
          @submit.prevent="onGetRandomMovie"
          ref="form"
          align="center"
          lazy-validation
        >
          <!-- Region -->
          <v-layout row>
            <v-flex xs12>
              <v-select
                v-model="region"
                :items="regions"
                :rules="[(v) => !!v || 'Region is required']"
                label="Netflix Region"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <!-- Genre -->
          <v-layout row>
            <v-flex xs12>
              <p>Genre</p>
              <v-btn-toggle borderless v-model="genre">
                <v-btn
                  v-for="genre in genres"
                  :key="genre.value"
                  :value="genre.value"
                >
                  <v-icon left>{{ genre.icon }}</v-icon>
                  <span class="hidden-sm-and-down">{{ genre.text }}</span>
                </v-btn>
              </v-btn-toggle>
            </v-flex>
          </v-layout>
          <!-- IMDb Score -->
          <v-layout row>
            <v-flex xs12 mb-5>
              <p class="mt-3">IMDb Score</p>
              <v-btn-toggle borderless v-model="score">
                <v-btn v-for="i in 9" :key="i" :value="i">
                  <!-- <v-icon left>star</v-icon> -->
                  <span>{{ i }}+</span>
                </v-btn>
              </v-btn-toggle>
            </v-flex>
          </v-layout>
          <!-- Form Buttons -->
          <!-- <v-divider></v-divider> -->
          <v-layout row mt-5>
            <v-flex xs12>
              <!-- Validate -->
              <v-btn color="success" class="mr-4" @click="onGetRandomMovie">
                Random
              </v-btn>
              <!-- Reset -->
              <v-btn color="error" class="mr-4" @click="onResetForm">
                Reset
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  mounted() {
    // this.axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //   .then((res) => console.log(res));
  },
  data() {
    return {
      regions: ["USA", "France"],
      genres: [
        { value: "horror", icon: "mdi-format-align-center", text: "Horror" },
        {
          value: "thriller",
          icon: "mdi-format-align-center",
          text: "Thriller",
        },
        {
          value: "comedies",
          icon: "mdi-format-align-center",
          text: "Comedies",
        },
        {
          value: "documentaries",
          icon: "mdi-format-align-center",
          text: "Documentaries",
        },
      ],
      region: null,
      genre: "",
      score: "",
    };
  },
  methods: {
    onGetRandomMovie() {
      console.log(this.region);
      console.log(this.genre);
      console.log(this.score);
    },
    onResetForm() {
      this.region = null;
      this.genre = "";
      this.score = "";
    },
  },
};
</script>
