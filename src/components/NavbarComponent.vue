<template>
  <v-app-bar app color="white" flat>
    <v-badge color="#D5F0DB" dot>
      <v-img class="ml-5" src="1.png" contain width="30" ></v-img>
    </v-badge>

    <v-toolbar-title class="ml-4">
      <span class="etext">E</span><strong>Grocery</strong>
    </v-toolbar-title>

    <v-spacer></v-spacer>

   
    <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="40">
        <v-icon x-small color="#FF6D59"> mdi-heart</v-icon>
      </v-avatar>
    </v-badge>
    <v-badge color="#41AB55" overlap content="3" class="mr-2 mt-1">
      <v-avatar color="#ECF7EE" size="40">
        <v-icon x-small color="#41AB55">mdi-cart</v-icon>
      </v-avatar>
    </v-badge>
    <span class="grey--text d-none d-sm-flex"
      >Hello, <strong> {{ currentUser ? currentUser.name : 'Guest' }}</strong></span
    >
        <v-menu  offset-y class="custom-menu">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" class="menu-icon">
              <v-img class="ml-5" :src="userImage" contain width="30" v-if="userImage"></v-img>
              <v-icon class="ml-5" width="30" v-else>mdi-account-circle</v-icon>
            </v-btn>
          </template>
        <v-list v-if="currentUser"  class="menu-list">
          <v-list-item  class="menu-list-item">
            <v-list-item-avatar>
              <v-avatar size="40" class="avatar">
              <v-img :src="userImage" contain v-if="userImage"></v-img>
              <v-icon v-else>mdi-account-circle</v-icon>
            </v-avatar>
              </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="menu-title">{{ currentUser.name }}</v-list-item-title>
              <v-list-item-subtitle class="menu-subtitle">{{ currentUser.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-title class="logout-btn"> <v-icon color="blue-darken-2 mr-1 mb-1">mdi-logout</v-icon>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>No user logged in</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      currentUser: null,
      userImage: null,
    };
  },
  mounted() {
    this.getCurrentUser();
    this.checkLoggedIn();
  },
  methods: {
    getCurrentUser() {
      const storedItems = JSON.parse(localStorage.getItem('itemsJson'));
      const userEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email from localStorage
      const userImage = localStorage.getItem('userImage')

      if (storedItems && userEmail) {
        this.currentUser = storedItems.find(item => item.email === userEmail);
        this.userImage = userImage || null;
      } else {
        this.currentUser = null;
        this.userImage = null;
      }
    },
    checkLoggedIn() {
        // Check if user is logged in by looking at localStorage or session
        if (localStorage.getItem('isLoggedIn')) {
          this.loginForm = false; // Set to false to show logged-in view
        }
      },
    logout() {
  localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('itemsJson');
      localStorage.removeItem('userImage');
      this.currentUser = null;
      this.$router.push('/login');
      window.location.reload();
}
  }
};
</script>


<style>
.v-toolbar__title {
  font-size: 1rem !important;
}
.img{
  border-top: 50px;
}
.etext{
  color: green;
  font-size: x-large;
  font-weight: 900;
}
.v-list-item-avatar {
  margin-right: 16px;
}
.image {
  width: 5%;
  margin-right: 65rem;
}
.navbar {
  margin-left: -8rem;
}

.custom-menu .v-list {
  background-color: #f5f5f5; /* Light gray background */
  border-radius: 18px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.custom-menu .menu-list-item {
  
  border-bottom: 1px solid #ddd; /* Divider line between items */
}

.custom-menu .menu-list-item:last-child {
  border-bottom: none; /* Remove bottom border for last item */
}

.menu-title {
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #333; /* Darker text for title */
}

.menu-subtitle {
  margin-bottom: 1rem;
  margin-left: .5rem;
  color: #777; /* Lighter text for subtitle */
}

.menu-icon {
  color: #1976D2; /* Customize icon color */
}
.avatar{
  margin-left: 2.5rem; 
}
.logo{
  font-size: xx-large;
}
.logout-btn {
color: blue;
}
</style>