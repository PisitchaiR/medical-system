<template>
  <div>
    <Docnav />
    <div class="mt-[30px] container mx-auto">
      <button @click="isOpencate = !isOpencate" class="p-2  bg-black text-white rounded-lg">

        <p class="flex ">Category <img src="../assets/Arrow_drop_down_big.png" alt="" class="ml-[5px]" /></p>

      </button>
      <div v-if="isOpencate" class="border-[1px] border-black rounded-md absolute mt-2 ">
        <div class=" p-3 bg-[#f5f6f8]" v-for="(value, index) in meditype" :key="index">
          <a href="#" class="curcer">{{ value }}</a>
        </div>
      </div>

      <!-- cartorder -->
      <div class="py-[100px] px-[30px]">
        <div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead
              class="text-sm text-gray-700 uppercase bg-white dark:bg-gray-800 border-collapse border border-slate-400 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-5 border-collapse border border-slate-400">
                  ชื่อยา
                </th>
                <th scope="col" class="px-6 py-5 border-collapse border border-slate-400 text-end">
                  จำนวนชิ้น
                </th>
                <th scope="col" class="px-6 py-5 text-end">ราคาต่อ1ชิ้น</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-100 dark:bg-gray-700" v-for="(value, index) in cart" :key="index">
                <th scope="row"
                  class="px-6 py-4 font-medium border-collapse border border-slate-400 text-gray-900 dark:text-white">
                  {{ value.name }}
                </th>
                <td class="px-6 py-4 border-collapse border border-slate-400 text-end">
                  {{ value.quantity }}
                </td>
                <td class="px-6 py-4 border-collapse border border-slate-400 text-end">
                  {{ value.price }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 dark:text-white dark:bg-black">
                <th scope="row" class="px-6 py-3 text-base border-collapse border border-slate-400">
                  Total
                </th>
                <td class="px-6 py-3 text-end border-collapse border border-slate-400">
                  {{ sumamount }}
                </td>
                <td class="px-6 py-3 text-end border-collapse border border-slate-400">
                  {{ totalPrice }} บาท
                </td>
              </tr>
            </tfoot>
          </table>
          <button @click="past"
            class="w-full bg-green-800 text-white hover:bg-green-400 hover:text-black mt-5 rounded-lg h-[40px]">จ่ายยา</button>
        </div>
      </div>


      <!-- cardmedicine -->
      <div class=" px-2 pb-[50px]">
        <div class="mt-[16px] grid grid-cols-5 gap-2">

          <div class="max-w-xs rounded-lg overflow-hidden shadow-lg" v-for="(value, index) in allmedi" :key="index">
            <img class="w-full h-[200px] object-cover" :src="value.pic">
            <div class="px-4 py-2">
              <div class="font-bold text-xl mb-2">{{ value.name }} ({{ value.price }} บาท)</div>
              <p class="text-gray-700 text-base">
                {{ value.info }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex justify-center">
              <button class="inline-block bg-black rounded-full px-4 py-2 text-sm font-semibold text-white mr-2 mb-2"
                @click="lob(value); removeFromCart(value, index)">
                -
              </button>
              <span class=" block text-[18px] font-bold px-3 py-1 rounded-sm text-black">{{ value.quantity }}</span>
              <button class="inline-block bg-black rounded-full px-4 py-2 text-sm font-semibold text-white mr-2 mb-2"
                @click="addToCart(value); value.quantity++">
                +
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>



  </div>
</template>

<script>
import Docnav from "../components/DocNavbar.vue";
export default {
  data() {
    return {
      isOpencate: false,
      allmedi: [
        {
          id: 0,
          name: 'พารา',
          price: 15,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://punsuk.com/2623-6737-thickbox_default/tylenol-paracetamol-500-100-.jpg'
        },
        {
          id: 1,
          name: 'ทิงเจอร์ไทเมอรอซอล',
          price: 25,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://pornchaiinter.com/upload-img/pornchaiin/Drugs%2C_Vitamins_%26_Supplements_for_Animal/IODINE-TINCTURE__DR-AN-021-LW1D__.jpg'
        },
        {
          id: 2,
          name: 'น้ำเกลือล้างแผล 1000มิลลิลิตร',
          price: 80,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg'
        },
        {
          id: 3,
          name: 'น้ำเกลือล้างแผล 300มิลลิลิตร',
          price: 80,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg'
        },
        {
          id: 4,
          name: 'น้ำเกลือล้างแผล 400มิลลิลิตร',
          price: 80,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg'
        }
        ,
        {
          id: 5,
          name: 'ทิงเจอร์ไทเมอรอซอล',
          price: 25,
          quantity: 0,
          info: 'lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet',
          amount: 100,
          type: 'ยาสามัญประจำบ้าน',
          pic: 'https://pornchaiinter.com/upload-img/pornchaiin/Drugs%2C_Vitamins_%26_Supplements_for_Animal/IODINE-TINCTURE__DR-AN-021-LW1D__.jpg'
        }
      ],
      meditype: ["ยาสามัญประจำบ้าน",
        "ยาควบคุมพิเศษ",
        'ยาอันตราย',
        'ยาที่ไม่ใช่ยาอันตราย'],
      cart: [],
    };
  },

  components: {
    Docnav,
  },


  methods: {
    // addToCart(value) {
    //   const index = this.cart.findIndex((value) => value.id === item.id)
    //   index === -1 ? (this.cart.push({ ...item, amount: 1 })) : this.cart[index].amount++ ; value.quantity++
    // },
    lob(value) {
      if (value.quantity <= 0) {
        this.value = 0
      } else {
        value.quantity--
      }
    },
    addToCart(product) {
      if ((this.cart.find(item => item.id === product.id))) {
        this.cart = this.cart.map(item => {
          if (item.id === product.id) {
            item.quantity++;
            item.amount--;
          }
          return item;
        })
        return;
      }
      this.cart.push({
        ...product,
        quantity: 1,
      });
      this.quantity++
      console.log(this.cart)
    },

    removeFromCart(product, index) {
      if ((this.cart.find(item => item.id === product.id))) {
        console.log(product)
        console.log(this.cart)
        if (product.quantity == 0) {
          this.cart = this.cart.filter(x => x.id != product.id);
          console.log(this.cart);
        }
        this.cart = this.cart.map(item => {
          if (item.id === product.id && product.quantity != 0) {
            item.quantity--;
          }
          return item;
        }), console.log(this.cart);
        return;
      }
    },
    past() {
      window.localStorage.setItem('cart', JSON.stringify(this.cart))

    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((price, addmore) => price + addmore.price * addmore.quantity, 0)
    },
    sumamount() {
      return this.cart.reduce((a, b) => {
        return a + (b.quantity);
      }, 0);
    }
  },



};
</script>

<style scoped></style>