<template>
  <v-row justify="center" class="space px-16 pb-5">
    <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(pack, i) in packs" :key="i">
      <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined style="border: 2px solid green;">
        <div align="center" justify="center">
          <v-img
            max-height="300"
            max-width="300"
            contain
            :src="pack.img"
          ></v-img>
        </div>

        <v-card-title class=" title">{{ pack.title }}</v-card-title>
        <v-card-title class="grey--text text-grey-darken-1 caption mt-n6" id="subtitle">{{
          pack.subtitle
        }}</v-card-title>
        <v-card-title class="mt-n4" id="price">{{ pack.price }}</v-card-title>

        <v-card-actions class="mx-16 mt-1" style="justify-content: center;">
          <v-btn outlined class="mt-n2 add small-btn bordered-btn" @click="decrement(pack)">
            <v-icon color="green">mdi-minus</v-icon>
          </v-btn>

          <strong class="mx-2">{{ pack.bpm }}</strong>
          <v-btn outlined class="mt-n2 add small-btn bordered-btn" @click="increment(pack)">
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
</template>

<script>
export default {
  data: () => ({
      bpm: 1,
    packs: [
      { img: "fruit-box.png", title: "Full Box", subtitle: "Mango, Nuts, Apple, Bannas", price: "Rs:$60", bpm:1 },
      { img: "medicine.png", title: "Medicine Pack", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "Rs:$85", bpm:1 },
      { img: "oil.png", title: "Medium Oil Pack", subtitle: "Cooking Oil ", price: "Rs:$45", bpm:1 },
      { img: "p4.png", title: "Medium Box", subtitle: "Strawberry, orange & others", price: "Rs:$40", bpm:1 },
      { img: "p5.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "Rs:$15", bpm:1 },
      { img: "p6.png", title: "small Box", subtitle: "Small pack of limes", price: "Rs:$25", bpm:1 },
    ],
  }),
  methods: {
    increment(pack) {
      pack.bpm++;
    },
    decrement(pack) {
      if (pack.bpm > 0) {
        pack.bpm--;
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
.btn{
  margin-left: 39px;
  display: flex;
  /* flex-direction: row; */
}


</style>