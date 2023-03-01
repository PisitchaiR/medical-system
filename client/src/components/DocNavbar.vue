<style  scoped>
template {
  scroll-behavior: smooth;
}

.underline-1 {
  background-image: linear-gradient(90deg, rgb(0, 0, 0), #000000);
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: right bottom;
  text-decoration: none;
  transition: background-size 500ms ease;
  padding-bottom: 10px;
}

.underline-1:hover {
  background-size: 100% 3px;
  background-position: left bottom;
}

.underline-2 {
  background-image: linear-gradient(90deg, #111727, #ff5757);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  text-decoration: none;
}

.curcer {
  cursor: default;
}
</style>

<template>
  <div>
    <div class="mx-auto md:px-[100px]">
      <div class="py-[20px] flex justify-between underline-2">
        <div class="flex">
          <img class="w-[35px] h-[35px] mr-3" src="../assets/logo.png" alt="" />
          <p class="text-xl font-normal curcer mt-[3px]">{{ pname }}</p>
        </div>
        <div class="flex">
          <div class="mr-[47px] text-center">
            <router-link style="cursor: pointer; text-decoration: none" class="text-[20px] underline-1 mt-[3px]" to="/">
              Home
            </router-link>
          </div>
          <div class="mr-[47px]">
            <router-link style="cursor: pointer; text-decoration: none" class="text-[20px] underline-1 mt-[3px]"
              to="/pay1">
              Medicine
            </router-link>
          </div>

          <div class="mr-[47px]">
            <router-link style="cursor: pointer; text-decoration: none" class="text-[20px] underline-1 mt-[3px]"
              to="/pay1">
              All patients
            </router-link>
            <div v-if="isOpen" class="border-[1px] bg-[#f5f6f8] border-black rounded-md absolute mt-8">
              <div class="flex p-3">
                <img src="../assets/User.png" alt="" class="mr-[5px]" />
                <a href="#" class="curcer">{{ UserName }}</a>
              </div>
              <div class="flex p-3">
                <img src="../assets/logout.png" alt="" class="mr-[5px]" />
                <a href="#">{{ Logout }}</a>
              </div>
            </div>
          </div>
          <div class="mr-[47px]">
            <a class="text-[20px]" @click="isOpen = !isOpen" href="#">
              <img src="../assets/User_cicrle_light.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pname: "W&N",
      isOpen: false,
      UserName: "wiwat liangkobkit",
      Logout: "Logout",
    };
  },
  methods: {},
  components: {},
  watch: {},
};
</script>