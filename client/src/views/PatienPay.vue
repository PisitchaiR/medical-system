<template>
  <div>
    <Nav />
    <div class="container mx-auto mt-[50px] flex">
      <div class="mr-[100px]">
        <div class="card purple">
          <div class="max-w-sm w-full lg:max-w-full lg:flex">

            <div class=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8 w-[600px] mb-[40px]">

                <div class="text-white font-bold text-xl mb-2">PreScript</div>

              </div>
              <div>
                <p class="text-white text-[42px] font-bold leading-none mb-[50px]">wiwat liangkobkit</p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="text-gray-100 text-lg mb-2"> Hospitalid: #123123123</p>
                  <p class="text-gray-100"> tel: 086-412-2323</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <div class="w-full lg:max-w-full lg:flex mb-[20px]">
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              IdentificationNumber
            </label>
            <input v-model="IdentificationNumber"
              class="appearance-none block w-[400px] bg-white text-gray-700 border border-black rounded-xl  py-3 px-4 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" type="text">
          </div>
        </div>



        <div class="w-full lg:max-w-full lg:flex mb-[20px]">
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " for="grid-last-name">
              Bank
            </label>

            <select id="countries"
              class="w-[400px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none block w-[600px] bg-white text-gray-700 border border-black rounded-xl  py-3 px-4 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500">
              <option selected>
                <h1> Choose a Bank</h1>
                <img src="../assets/Arrow_drop_down_big1.png" alt="">
              </option>
              <option value="kbank">K-Bank:12312311312331</option>
              <option value="CA">K-Bank:12312311312331</option>
              <option value="FR">K-Bank:12312311312331</option>
              <option value="DE">K-Bank:12312311312331</option>
            </select>
          </div>
        </div>



        <div class="w-full lg:max-w-full lg:flex mb-[20px] ">
          <div class="w-full md:w-1/2 px-3 ">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " >
              Name
            </label>
            <input v-model="name"
              class="appearance-none block w-[400px] bg-white text-gray-700 border border-black rounded-xl  py-3 px-4 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" type="text">
          </div>
        </div>


        <div class="w-full lg:max-w-full lg:flex mb-[20px]">
          <div class="w-full md:w-1/2 px-3">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black" for="file_input">money transfer
              slip</label>
            <input
              class="bg-white text-gray-700 border border-black rounded-xl  py-3 px-4 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500"
              aria-describedby="file_input_help" id="file_input" type="file">
          </div>
        </div>


        <!-- button -->
        <div class="w-full lg:max-w-full lg:flex mb-[20px]">
          <div class="w-full md:w-1/2 px-3 ">
            <button @click="this.$router.push('/')" class="bg-black hover:bg-[#181818] text-white font-bold py-2 px-8 rounded-xl">
              confirm
            </button>
          </div>



        </div>









      </div>



    </div>
    <!-- <div class="grid grid-cols-12 gap-4 py-[30px] justify-center pt-[200px]">
      <div class="cols-2">
      </div>
      <div class="col-span-5 card purple h-[300px] ">
        <div>
          asdadaddaas
          asdasdd
        </div>
        <div>
          asdadaddaas
          asdasdd
        </div>
        <div>
          asdadaddaas
          asdasdd
        </div>
      </div>
      <div class="col-span-4">

        <h1 class="text-[32px]">asdasddd</h1>
        <input v-model='text'
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username">
      </div>
    </div> -->
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  data: () => ({
    text: '',
    name: '',
    IdentificationNumber: '',
    bank: [
      {
        bankname: "K-bank",
        bankid: '1231-2312-1313',

      }, {},

    ]
  }),
  components: {
    Nav,
  },
};
</script>

<style  scoped >
.card {

  box-sizing: border-box;
  padding: 2em;
  border-radius: 25px;
  color: white;
  line-height: 25px;
  box-shadow: 5px 5px 10px #ccc;
  float: left;

}

.card.purple {
  background: linear-gradient(150deg, #111727, #ff5757 150%);
}
</style>