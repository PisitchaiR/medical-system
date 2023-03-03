<template>
      <div>
            <Docnav />
            <div class="mx-w-5xl mt-[40px]">
                  <div class="container mx-auto  mt-[50px] flex grid grid-cols-5 gap-3 gap-y-[30px]">
                        <div class="rounded-3xl w-[200px] h-[250px] bg-white drop-shadow-xl mx-[20px]"
                              v-for="(val,index) in allslip " :key="index">
                              <div class="text-justify justify-center p-5">
                                    <img class="py-4 h-full w-full" :src="val.slipp">
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
    
<script>
import Docnav from "../components/DocNavbar.vue";
import slip from "../assets/slip.png"

export default {
      data: () => ({
            allslip: [
                  {
                        slipp: slip,
                  },
                  {
                        slipp: slip,
                  },
                  {
                        slipp: slip,
                  }
            ],

      }),

      components: {
            Docnav

      }
}
</script>
    
<style scoped></style>