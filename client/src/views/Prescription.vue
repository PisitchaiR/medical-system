<style scoped>
.underline1 {
  background-image: linear-gradient(90deg, #111727, #FF5757);
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
        <p class="text-lg">Prescription</p>
      </div>

      <div class="mt-[30px] px-6">
        <div class="border-2 border-black rounded-lg">
          <div class="px-2 py-2">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                  class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-800 border-collapse border border-slate-400 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-5 border-collapse border border-slate-400">
                      Order
                    </th>
                    <th scope="col" class="px-6 py-5 border-collapse border border-slate-400 text-end">
                      Qty
                    </th>
                    <th scope="col" class="px-6 py-5 text-end">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-100 dark:bg-gray-700" v-for="(value, index) in prescription" :key="index">
                    <th scope="row"
                      class="px-6 py-4 font-medium border-collapse border border-slate-400 text-gray-900 dark:text-white">
                      {{ value.order }}
                    </th>
                    <td class="px-6 py-4 border-collapse border border-slate-400">
                      {{ value.quantity }}
                    </td>
                    <td class="px-6 py-4 border-collapse border border-slate-400">
                      {{ value.Price }} บาท
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="font-semibold text-gray-900 dark:text-white dark:bg-black">
                    <th scope="row" class="px-6 py-3 text-base border-collapse border border-slate-400">
                      Total
                    </th>
                    <td class="px-6 py-3 text-end border-collapse border border-slate-400">
                      {{ sumquantity }}
                    </td>
                    <td class="px-6 py-3 text-end border-collapse border border-slate-400">
                      {{ sumtotal }} บาท
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end items-end mt-[50px] px-16">
        <div @click="this.$router.push('pay2')">
          <button class="bg-black rounded-lg py-2 px-8  text-white item-end">Next</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  data: () => ({
    prescription: [
      { order: "sadad", quantity: 2, Price: 2 },
      { order: "12131", quantity: 3, Price: 3 },
      { order: "paraza", quantity: 3, Price: 4 },
    ],

    cart: [],

  }),
  computed: {
    sumPrice() {
      return this.prescription.reduce((a, b) => {
        return a + (b.Price);
      }, 0);
    },
    sumquantity() {
      return this.prescription.reduce((a, b) => {
        return a + (b.quantity);
      }, 0);
    },

  },


  created() {
    this.cart = JSON.parse(localStorage.getItem('cart'))
  },



  components: {
    Nav,
  },
};
</script>

