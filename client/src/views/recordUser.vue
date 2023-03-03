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

      <div v-for="(value, index) in cart" :key="index">
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
      <!-- <div class="mt-[30px] px-6">
                        <div class="border-2 border-black rounded-lg">
                              <div class="px-2 py-2">
                                    <div class="relative overflow-x-auto">
                                          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead
                                                      class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-800 border-collapse border border-slate-400 dark:text-gray-400">
                                                      <tr>
                                                            <th scope="col"
                                                                  class="px-6 py-5 border-collapse border border-slate-400">
                                                                  รายการยา
                                                            </th>
                                                            <th scope="col"
                                                                  class="px-6 py-5 border-collapse border border-slate-400 text-end">
                                                                  จำนวนชิ้น
                                                            </th>
                                                            <th scope="col" class="px-6 py-5 text-end">ราคาต่อชิ้น</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr class="bg-gray-100 dark:bg-gray-700" v-for="(value, index) in cart"
                                                            :key="index">
                                                            <th  v-if='value.name != ""' scope="row"
                                                                  class="px-6 py-4 font-medium border-collapse border border-slate-400 text-gray-900 dark:text-white">
                                                                  {{ value.name }}
                                                            </th>
                                                            <td
                                                                  class="px-6 py-4 border-collapse border border-slate-400 text-end">
                                                                  {{ value.quantity }}
                                                            </td>
                                                            <td
                                                                  class="px-6 py-4 border-collapse border border-slate-400 text-end">
                                                                  {{ value.price }} บาท
                                                            </td>
                                                      </tr>
                                                </tbody>
                                                <tfoot>
                                                      <tr  class="font-semibold text-gray-900 dark:text-white dark:bg-black">
                                                            <th scope="row"
                                                                  class="px-6 py-3 text-base border-collapse border border-slate-400">
                                                                  Total
                                                            </th>
                                                            <td
                                                                  class="px-6 py-3 text-end border-collapse border border-slate-400">
                                                                  {{ sumquantity }}
                                                            </td>
                                                            <td
                                                                  class="px-6 py-3 text-end border-collapse border border-slate-400">
                                                                  {{ totalPrice }} บาท
                                                            </td>
                                                      </tr>
                                                </tfoot>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div> -->

      <div class="flex justify-end items-end mt-[50px] px-16">
        <div @click="this.$router.push('pay2')">
          <button class="bg-black rounded-lg py-2 px-8 text-white item-end">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  data: () => ({
    cart: [],
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

