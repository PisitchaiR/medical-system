<template>
    <div>
        <Docnav />
        <div class="mt-[30px] container mx-auto">
            <button @click="isOpencate = !isOpencate" class="p-2  bg-black text-white rounded-lg">

                <p class="flex ">Category <img src="../assets/Arrow_drop_down_big.png" alt="" class="ml-[5px]" /></p>

            </button>
            <div v-if="isOpencate" class="border-[1px] border-black rounded-md absolute mt-2">
                <div class=" p-3 bg-[#f5f6f8]" v-for="(value, index) in meditype" :key="index">
                    <a href="#" class="curcer">{{ value }}</a>
                </div>
            </div>
        </div>


        <!-- cardmedicine -->
        <div class="container mx-auto px-2 pb-10">
            <div class="mt-[16px] grid grid-cols-4 gap-2">

                <div class="max-w-xs rounded overflow-hidden shadow-lg" v-for="(value, index) in allmedi" :key="index">
                    <img class="w-full h-[200px] object-cover" :src="value.pic">
                    <div class="px-4 py-2">
                        <div class="font-bold text-xl mb-2">{{ value.name }} ({{ value.price }})</div>
                        <p class="text-gray-700 text-base">
                            {{ value.info }}
                        </p>
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
            checknumber: 0,


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
        lob(value) {
            if (value.checknumber <= 0) {
                this.value = 0
            } else {
                value.checknumber--
            }
        }
    },
};
</script>
  
<style></style>