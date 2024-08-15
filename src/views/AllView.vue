<template>
    <v-app>
    <v-app-bar color="white" flat>
      <v-badge color="#D5F0DB" dot>
        <v-img class="ml-5" src="1.png" contain width="30"></v-img>
      </v-badge>
  
      <v-toolbar-title class="ml-4">
        <span class="etext">E</span><strong>Grocery</strong>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <div class="navbar">
        <v-btn to="/">Home</v-btn> |
        <v-btn to="/product">Products</v-btn> |
        <v-btn to="/bundle">Bundles</v-btn> |
        <v-btn to="/contact-us">Contact Us</v-btn>
      </div>
  
      <v-spacer></v-spacer>
  
      <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
        <v-avatar color="#FFF0EE" size="40">
          <v-icon x-small color="#FF6D59">mdi-heart</v-icon>
        </v-avatar>
      </v-badge>
  
      <v-badge color="#41AB55" overlap content="3" class="mr-2 mt-1">
        <v-avatar color="#ECF7EE" size="40">
          <v-icon x-small color="#41AB55">mdi-cart</v-icon>
        </v-avatar>
      </v-badge>
  
      <span class="grey--text d-none d-sm-flex">
        Hello, <strong>{{ currentUser ? currentUser.name : 'Guest' }}</strong>
      </span>
  
      <v-menu offset-y class="custom-menu">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="menu-icon">
            <v-img :src="userImage" contain width="30" v-if="userImage"></v-img>
            <v-icon width="30" v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
  
        <v-list v-if="currentUser" class="menu-list">
          <v-list-item class="menu-list-item">
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
            <v-list-item-title class="logout-btn">
              <v-icon color="blue-darken-2 mr-1 mb-1">mdi-logout</v-icon>Logout
            </v-list-item-title>
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
    <router-view />
    <FooterComponent/>
    </v-app>
  </template>
  
  <script>
  import FooterComponent from '@/components/FooterComponent.vue';

  
  
  export default {
    name: "HomeView",
    data: () => ({
      toggle_exclusive: 1,
    }),
    components: {
      FooterComponent,
    },
  };
  </script>
  <style>
  .mobileimg {
    margin-left: 3rem;
    border: 2px solid green !important;
    border-radius: 22px;
  }
  
  #title {
    margin-top: 23px;
    margin-bottom: 23px;
    font-size: x-large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  .client {
    /* margin-top: 23px; */
    margin-bottom: 33px;
    font-size: xx-large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  #bundle {
    margin-top: 23px;
    margin-bottom: 23px;
    font-size: x-large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  .sub-heading {
    color: green;
  }
  
  .custom-text-field .v-input__control {
    border: 1px solid green;
  }
  
  .marginLeft {
    margin-left: -119px;
  }
  
  .mtop {
    margin-top: 100px;
  }
  
  .mbottom {
    margin-bottom: 100px;
  }
  
  .v-card.borderme {
    border: 2px solid green !important;
  }
  
  .v-card.borderout {
    border: 1px solid #d5f0db !important;
  }
  
  .v-btn:not(.v-btn--round).v-size--default.add {
    min-width: 0px !important;
  }
  
  .theme--light.v-sheet--outlined.mobile {
    border: 2px solid black !important;
  }
  
  @media only screen and (max-width: 600px) {
    h2.title1, h2.title2 {
      font-size: 15px;
    }
    .top {
      margin-top: 20px;
    }
    .search-container {
      display: none;
    }
  }
  
  @media only screen and (max-width: 360) {
    h2.title1 {
      font-size: 15px;
    }
  
    h2.title2 {
      font-size: 15px;
    }
  
    .top {
      margin-top: 20px;
    }
  }
  
  @media only screen and (min-width: 600px) {
    .top {
      margin-top: 70px;
    }
  }
  
  @media only screen and (min-width: 768px) {
    .top {
      margin-top: 120px;
    }
  }
  </style>
  