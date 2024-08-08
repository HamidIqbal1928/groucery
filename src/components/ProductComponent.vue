<template>
  <v-app>
    <v-main>
      <v-row justify="center" class="space px-16">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined style="border: 2px solid green;">
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
          <v-spacer></v-spacer>
          <div class="btn ">
            <v-btn class="mx-2 mt-n3  small-btn bordered-btn" fab dark small color="green">
            <v-icon dark> mdi-shopping </v-icon>
          </v-btn>
          <v-btn class="mx-2 mt-n3  small-btn bordered-btn" fab dark small color="green">
            <v-icon dark> mdi-heart </v-icon>
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
      { img: "pr2.png", title: "Perry's Ice Cream", subtitle: "1Ltr-10Ltr", price: "Rs: $12",bpm:1 },
      { img: "vegitable.png", title: "Fresh Vegitable", subtitle: "1kg-10Kg", price: "Rs: $17",bpm:1 },
      { img: "baby.png", title: "Baby Pack", subtitle: "Lotions,wipes,oil", price: "Rs: $40",bpm:1 },
      { img: "office.png", title: "Office Products", subtitle: "1kg-10Kg", price: "Rs: $10",bpm:1 },
      { img: "beauty.png", title: "Beauty Products", subtitle: "1btl-100btl", price: "Rs: $50",bpm:1},
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