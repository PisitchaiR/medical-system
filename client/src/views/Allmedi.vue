<script setup>

import { storeToRefs } from 'pinia'
import { useFetchStore } from './../stores/counter.js'

const counterStore = useFetchStore()
const { allmedi } = storeToRefs(counterStore);
</script>

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