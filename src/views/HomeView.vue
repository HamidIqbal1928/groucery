<template>
  <v-app>
    <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="mt-6">
            <v-card class="mx-auto rounded-xl" flat>
              <v-img src="cover2.png" max-height="100%" max-width="100%" contain>
                <v-card-title class="top ml-10">
                  <h2 class="title1">Order your</h2>
                </v-card-title>
                <v-card-title class="ml-10 mt-n6">
                  <h2 class="title2">Daily Groceries</h2>
                </v-card-title>
                <v-card-text class="ml-10">
                  <h3 class="sub-heading">#Free Delivery</h3>
                </v-card-text>
                <v-card-text class="ml-10">
                  <v-row class="search-container">
                    <v-col cols="4" class="label">
                      <v-text-field label="Search your daily groceries" prepend-inner-icon="mdi-magnify"
                        class="custom-text-field " hide-details></v-text-field>
                    </v-col>
                    <v-col cols="2" class="marginLeft">
                      <v-btn color="green" dark x-large class="py-7 d-none d-sm-none d-md-flex search">
                        search
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-img>
            </v-card>
          </div>
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h4" id="title"> Category </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49D9A0">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>

          <CategoryComponent />

          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h4" id="title">Popular Product</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="green" dark class="px-8">See All</v-btn>
          </v-toolbar>
          <ProductComponent/>
          <v-card flat color="#E2F2E5" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title class="text-h6 mt-5" id="bundle">Popular Bundle Pack</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <PackComponent />
          </v-card>
          <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              ">
              <h3 class="client">What Our Clients Say</h3>
            </div>
            <ClientComponent />
          </v-card>
          <v-toolbar flat color="transparent" class="mt-8">
            <v-toolbar-title class="text-h6 " id="bundle">Our Trusted Partner</v-toolbar-title>
          </v-toolbar>
          <PartnerComponent />
          <v-card flat color="#E2F2E5" class="rounded-xl mtop mbottom mx-10 pa-4" height="350">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="5">
                <v-card class="mobileimg" outlined flat height="330" width="200">
                  <v-img :src="require('../assets/mobile.png')" alt="Mobile Image"></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="7">
                <h1 class="mt-16">Download App</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                  Provident sequi esse tempore maiores quasi quia non.<br />
                  Itaque laboriosam dicta nostrum accusantium assumenda,<br />
                  vitae ab ut vel tenetur minima natus commodi!
                </p>
                <div class="mt-4">
                  <v-btn color="black" dark class="mb-10">
                    <v-icon color="white" left>mdi-apple</v-icon>
                    App Store
                  </v-btn>
                  <v-btn color="black" dark class="ml-4 mb-10">
                    <v-icon color="white" left>mdi-google-play</v-icon>
                    Play Store
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  </v-app>
</template>

<script>
import CategoryComponent from '../components/CategoryComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
import PackComponent from '../components/PackComponent.vue';
import ClientComponent from '../components/ClientComponent.vue';
import PartnerComponent from '../components/PartnerComponent.vue';


export default {
  name: "HomeView",
  data: () => ({
    toggle_exclusive: 1,
  }),
  components: {
    CategoryComponent,
    ProductComponent,
    PackComponent,
    ClientComponent,
    PartnerComponent,
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
