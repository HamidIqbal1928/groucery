<template>
    <v-app class="mt-16">
      <v-main>
        <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h4" id="title">Popular Bundle</v-toolbar-title>
        </v-toolbar>
            <v-row dense no-gutters class="mr-4 ml-4 mb-2">
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
        { img: "medium.png", title: "Full Box Fruit", subtitle: "Mango, Nuts, Apple, Bannas", price: "Rs:$60", bpm:1 },
        { img: "fruit-box.png", title: "Medium Box", subtitle: "Mango, Nuts, Apple, Bannas", price: "Rs: $30",bpm:1 },
        { img: "small.png", title: "Small Box", subtitle: "kg-10kg", price: "Rs: $10",bpm:1},
        { img: "x-small.png", title: " Extra-small Box", subtitle: "One food box", price: "Rs: $25",bpm:1},

        { img: "medicine.png", title: "Medicine Pack", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "Rs:$85", bpm:1 },
        { img: "injection.png", title: "injection pack", subtitle: "1pc-10pc", price: "Rs: $44",bpm:1 },
        { img: "panadol.png", title: "panadol pack", subtitle: "1pc-10pc", price: "Rs: $12",bpm:1 },
        { img: "medi.png", title: "Medium Pack", subtitle: "1box-10box", price: "Rs: $150",bpm:1},
       
        { img: "oil.png", title: "Office Products", subtitle: "1kg-10Kg", price: "Rs: $10",bpm:1 },
        { img: "p4.png", title: "Medium Box", subtitle: "Strawberry, orange & others", price: "Rs:$40", bpm:1 },
      { img: "p5.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "Rs:$15", bpm:1 },
      { img: "p6.png", title: "small Box", subtitle: "Small pack of limes", price: "Rs:$25", bpm:1 },
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
  .btn{
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
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