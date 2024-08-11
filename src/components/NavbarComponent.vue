<template>
  <v-app>

  <router-view />
</v-app>
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
      const userEmail = localStorage.getItem('userEmail');
      const userImage = localStorage.getItem('userImage');

      if (storedItems && userEmail) {
        this.currentUser = storedItems.find(item => item.email === userEmail);
        this.userImage = userImage || null;
      } else {
        this.currentUser = null;
        this.userImage = null;
      }
    },
    checkLoggedIn() {
      if (localStorage.getItem('isLoggedIn')) {
        this.loginForm = false; // If this is relevant in your setup
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
.etext {
  color: green;
  font-size: x-large;
  font-weight: 900;
}
.navbar {
  margin-left: -8rem;
}
.custom-menu .v-list {
  background-color: #f5f5f5;
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.menu-title {
  font-weight: bold;
  margin-left: 1rem;
  color: #333;
}
.menu-subtitle {
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  color: #777;
}
.menu-icon {
  color: green;
}
.logout-btn {
  color: blue;
}
</style>
