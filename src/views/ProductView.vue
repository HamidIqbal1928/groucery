<template>
    <v-app class="mt-16">
      <v-main>
        <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h4" id="title">Popular Product</v-toolbar-title>
        </v-toolbar>
            <v-row dense no-gutters class="mr-4 ml-4">
          <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(product, i) in products" :key="i">
            <v-card class="mx-auto rounded-xl mt-1" max-width="300" color="" flat outlined style="border: 2px solid green;">
              <div align="center" justify="center">
                <v-img max-height="200" max-width="300" contain :src="product.img"></v-img>
              </div>
  
              <v-card-title class="title">{{ product.title }}</v-card-title>
              <v-card-title class="grey--text text-grey-darken-1 caption mt-n6" id="subtitle">{{product.subtitle}}</v-card-title>
              <v-card-title class="mt-n4" id="price">{{ product.price }}</v-card-title>
  
              <v-card-actions class="mx-16 mt-1" style="justify-content: center;">
                <v-btn outlined class="mt-n2 add small-btn bordered-btn" @click="decrement(product)">
                  <v-icon color="green">mdi-minus</v-icon>
                </v-btn>
  
                <strong class="mx-2">{{ product.bpm }}</strong>
                <v-btn outlined class="mt-n2 add small-btn bordered-btn" @click="increment(product)">
                  <v-icon color="green">mdi-plus</v-icon>
                </v-btn>
  
                <div class="btn">
                  <v-btn class="mx-2 mt-n3 small-btn bordered-btn" fab dark small color="green">
                    <v-icon dark>mdi-shopping</v-icon>
                  </v-btn>
                  <v-btn class="mx-2 mt-n3 small-btn bordered-btn" fab dark small color="green">
                    <v-icon dark>mdi-heart</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </template>
  
  
  <script>
  export default {
    data: () => ({
      bpm: 1,
      products: [
        { img: "fish.png", title: "Fried Fish", subtitle: "1kg-10Kg", price: "Rs: $23", bpm:1 },
        { img: "meat.png", title: "Fresh Meat", subtitle: "1kg-10Kg", price: "Rs: $30",bpm:1 },
        { img: "sandwich.png", title: "Sandwich Peaces", subtitle: "kg-10kg", price: "Rs: $10",bpm:1},
        { img: "chicken.png", title: "chicken Peaces", subtitle: "1kg-10kg", price: "Rs: $25",bpm:1},

        { img: "vegitable.png", title: "Fresh Vegitable", subtitle: "1kg-10Kg", price: "Rs: $17",bpm:1 },
        { img: "fruit-b.png", title: "Fresh fruit", subtitle: "1kg-10kg", price: "Rs: $24",bpm:1 },
        { img: "fruit.png", title: "Fruit Products", subtitle: "1kg-10Kg", price: "Rs: $40",bpm:1 },
        { img: "vegi.png", title: "Vegitable Products", subtitle: "1bkt-10bkt", price: "Rs: $150",bpm:1},
        

        { img: "face.png", title: "Face wash", subtitle: "1btl-10btl", price: "Rs: $12",bpm:1 },
        { img: "beauty.png", title: "Beauty Products", subtitle: "1btl-100btl", price: "Rs: $150",bpm:1},  
         { img: "base.png", title: "Makeup Products", subtitle: "1pack-10pack", price: "Rs: $100",bpm:1 },
        { img: "cream.png", title: "Beauty Creams", subtitle: "1btl-10btl", price: "Rs: $40",bpm:1 },

       
        { img: "office.png", title: "Office Products", subtitle: "1kg-10Kg", price: "Rs: $10",bpm:1 },
        { img: "baby.png", title: "Baby Products", subtitle: "1btl-100btl", price: "Rs: $50",bpm:1},
      ],
    }),
    methods: {
      increment(product) {
        product.bpm++;
      },
      decrement(product) {
        if (product.bpm > 0) {
          product.bpm--;
        }
      }
  
    },
  };
  </script>
  
  <style>
  .title {
    margin-top: 23px;
    margin-bottom: 5px;
    font-size: x-large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  #subtitle {
    font-size: large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  #price {
    font-size: large;
    color: green;
    font-weight: 900;
    text-align: center;
  }
  
  .green-border {
    border: 2px solid green;
  }
  
  .small-btn {
    padding: 0 !important;
    min-width: 32px !important;
    width: 32px !important;
    height: 32px !important;
  }
  .bordered-btn {
    border: 2px solid green !important;
    border-radius: 50%;
   
  }
  .shopping{
    margin-top: 10px;
    font-size: large;
    
    
    
  }
  
  </style>