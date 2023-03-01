<template>
  <div>
    <Docnav />
    <div class="mt-[30px] container mx-auto">
      <button @click="isOpencate = !isOpencate" class="p-2  bg-black text-white rounded-lg">
       
            <p class="flex ">Category  <img src="../assets/Arrow_drop_down_big.png" alt="" class="ml-[5px]" /></p>
      
      </button>
      <div
        v-if="isOpencate"
        class="border-[1px] border-black rounded-md absolute mt-2"
      >
        <div class=" p-3">
          
          <a href="#" class="curcer">asdad</a>
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
    };
  },

  components: {
    Docnav,
  },
};
</script>

<style>
</style>