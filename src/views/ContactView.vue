<template>
    <v-app>
      <v-main class="mt-16">
        <v-col class="mb-4">
          <h1 align="center" justify="center" class="heading">
             Contact Us 
          </h1>  
        </v-col>
          <testComponent/>
      </v-main>
      </v-app>
  </template>
  <script>
  // @ is an alias to /src
  // import SignUp from '@/views/SignUpView.vue'
  import testComponent from '@/components/testComponent.vue'
  
  export default {
    name: 'ContactView',
    components: {
      testComponent
    }
  }
  </script>
<!--   
  <style>
  .heading{
    opacity: 0;
      animation: slidebottom 1s ease forwards;
  }
  @keyframes slidebottom{
      0%{
          transform: translatey(-900px);
          opacity: 0;
      }
      100%{
      transform: translatey( 0px);
      opacity: 1;
      }
  } 
  
  </style> -->