<template>
  <div>
    <div v-if="loginForm">
      <v-card class="mx-auto mt-16 pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
          variant="outlined" v-model="userData.email" :rules="dataValidationRules.email" required></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible" :rules="dataValidationRules.password" required
          v-model="userData.password"></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours.
            If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card>

        <v-btn class="mb-8" type="submit" color="blue" size="large" variant="tonal" block v-on:click="login()">
          Log In
          <a href="../src/views/HomeView.vue" target="_blank"> </a>
        </v-btn>

        <v-card-text class="text-center">
          <v-btn class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank"
            v-on:click="signUp()">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </v-btn>
        </v-card-text>
      </v-card>

    </div>
    <div v-else>
      <!-- <div v-if="this.$vuetify.breakpoint.mdAndUp"> -->
        <HomeView />
      <!-- </div>
      <div v-else>
        <MobileView />
      </div> -->
    </div>
  </div>
</template>
<script>
import HomeView from '@/views/HomeView.vue';
import p1 from './assets/hamid.png';
import p2 from './assets/noman.png';

// import MobileView from '@/views/MobileView.vue';


export default {
  name: "App",
  components: {
    HomeView,
    // MobileView
  },
  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
      itemArray: [],
      usersArray: [
        {
          name: "Muhammad Numan",
          email: "numanrazzaq@gmail.com",
          password: "12345678",
          image: p2,
          phNo: "03041792624",
          address: "Chak no 24 Wb Vehari",
          login: false
        },
        {
          name: "Hamid",
          email: "hamid@gmail.com",
          password: "12345678",
          image: p1,
          phNo: "03041792624",
          address: "Chak no 28 Wb Vehari",
          login: false
        }
      
      ],
      loginForm: true,
      dataValidationRules: {
        email: [
          value => {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'Must be a valid e-mail.'
          },],
        password: [
          value => {
            if (value?.length >= 8 && /[0-9-]+/.test(value)) return true

            return 'Password needs to be at least 8 digits.'
          },],
      }
    }
  },
  beforeMount() {
    this.fetchData();
    this.checkLoggedIn();
  },
  methods: {
    fetchData() {
      if (localStorage.getItem('itemsJson') == null) {
        this.itemArray = this.usersArray
        localStorage.setItem('itemsJson', JSON.stringify(this.itemArray))
      }
    },
    checkLoggedIn() {
      // Check if user is logged in by looking at localStorage or session
      if (localStorage.getItem('isLoggedIn')) {
        this.loginForm = false; // Set to false to show logged-in view
      }
    },
    // login() {
    // Validate email and password (you can use vuelidate or custom logic)
    // const storedItems = JSON.parse(localStorage.getItem('itemsJson'));
    // const user = storedItems.find(item => this.userData.email===item.email)
    // if (user) {
    //   if (this.userData.email === user.email && this.userData.password === user.password) {
    //   // Redirect to home page (replace with your route)
    // localStorage.setItem('isLoggedIn', true);
    //   this.loginForm = false; // Show logged-in view
    // } 
    //     else {
    //       // Show invalid email or password message
    //       alert('Invalid credentials');
    //     }
    //   }else{
    //     alert("Data not found data against "+ this.userData.email);
    //   }
    // },
    login() {
      // Example of how login might work
      const userEmail = this.userData.email;
      const storedItems = JSON.parse(localStorage.getItem('itemsJson'));
      const user = storedItems.find(item => this.userData.email === item.email)

      if (user) {
        if (this.userData.email === user.email && this.userData.password === user.password) {
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('userEmail', userEmail);
          this.loginForm = false; // Redirect to home page after login
          this.$router.push('/');
        } else {
          alert('Invalid credentials');
        }
      }
    },

    signUp() {
      this.$router.push('/signup')
    }
  }
}
</script>