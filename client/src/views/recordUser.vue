<style scoped>
.underline1 {
  background-image: linear-gradient(90deg, #111727, #ff5757);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  text-decoration: none;
  background-repeat: no-repeat;
  padding-bottom: 10px;
  display: inline;
  padding-right: 50px;
}
</style>

<template>
  <div>
  <Nav />
  <div class="container mx-auto mt-[50px]">
    <div class="font-semibold">
      <p class="text-lg">Record</p>
    </div>

    <div class="w-full border border-black mt-0.5 " v-for="(value, index) in cart"  :key="index" >
        <div class="text-sm text-left text-gray-500 dark:text-gray-400" @click="showTable = !showTable">
          <thead class="w-full h-full border-b-2 " >
            <tr class="text-[#A0A0A0]   ">
              <th scope="col" class="px-10 py-3">ชื่อยา</th>
              <th scope="col" class="px-10 py-3">โรงพยาบาล</th>
              <th scope="col" class="px-10 py-3 pr-0">ราคา</th>
            </tr>
            <tr class="text-black  whitespace-nowrap">
              <th scope="col" class="px-10 py-3">{{ value.name }}</th>
              <th scope="col" class="px-10 py-3">W & N</th>
              <th scope="col" class="px-10 py-3 pr-0">{{ value.price }}</th>
            </tr>
          </thead>
          <div class="border border-black">

</div>
          <tbody v-if="showTable" @click="showTable = !showTable" class="border-b-2 w-full h-full ">
            
            <tr class='clickable-row'>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">info</td>
                <td>
                </td>
                <td class="px-6 py-4">รูปยา</td>
              </tr>
              <tr class='clickable-row'>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ value.info }}</td>
                <td></td>
                <td class="px-6 py-4"><img :src="value.pic" alt=""></td>
              </tr>
            </tbody>

          </div>
        </div>

      <!-- <div v-for="(value, index) in cart " :key="index"  @click="showTable = !showTable" >
        <div class="w-full border border-black mt-5 ">
          <div class="py-3 px-8 flex justify-between">
            <div>
              <div class="text-[#A0A0A0]">ชื่อยา</div>
              <div>{{ value.name }}</div>
            </div>
            <div>
              <div class="text-[#A0A0A0]">โรงพยาบาล</div>
              <div>w&n</div>
            </div>
            <div>
              <div class="text-[#A0A0A0]">ราคา</div>
              <div>{{ value.price }}</div>
            </div>
          </div>
        </div>
        </div>

        <div v-for="(value, index) in cart" :key="index"  v-if="showTable">
        <div class="w-full border border-black mt-5 ">
          <div class="py-3 px-8 flex justify-between">
            <div>
              <div class="text-[#A0A0A0]">ชื่อยา</div>
              <div>{{ value.name }}</div>
            </div>
            <div>
              <div class="text-[#A0A0A0]">โรงพยาบาล</div>
              <div>w&n</div>
            </div>
            <div>
              <div class="text-[#A0A0A0]">ราคา</div>
              <div>{{ value.price }}</div>
            </div>
          </div>
        </div>
        </div> -->

        
      </div>
    </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  data: () => ({
    cart: [],
    showTable: false
  }),
  computed: {
    sumPrice() {
      return this.cart.reduce((a, b) => {
        return a + b.price;
      }, 0);
    },
    sumquantity() {
      return this.cart.reduce((a, b) => {
        return a + b.quantity;
      }, 0);
    },
    totalPrice() {
      return this.cart.reduce(
        (price, addmore) => price + addmore.price * addmore.quantity,
        0
      );
    },
  },

  created() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  },

  components: {
    Nav,
  },
};
</script>

