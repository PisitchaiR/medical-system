<template>
  <AppLayout>
    <div class="w-full h-full flex flex-col items-center flex-grow">
      <!-- top -->
      <div class="h-2/5 relative w-full">
        <div class="bg-primary h-2/3 flex justify-center rounded-b-3xl">
          <img class="absolute top-1/3" src="../assets/Navbar/Logo.png" alt="" />
        </div>
      </div>
      <!-- body -->
      <div class="w-fit flex flex-col items-center">
        <p class="text-center text-4xl">Register</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
      </div>
      <div class="flex flex-col w-2/3 xl:w-1/3 mt-10 gap-y-5">
        <input v-model='name' type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Name" />
        <input v-model='idcard' type="text" class="border border-black rounded-full p-2 px-4 text-lg"
          placeholder="Id-card" />
        <input v-model='password' type="text" class="border border-black rounded-full p-2 px-4 text-lg"
          placeholder="password" />
        <input v-model='phone' type="text" class="border border-black rounded-full p-2 px-4 text-lg"
          placeholder="phone number" />

        <button class="w-full bg-primary text-white text-lg font-semibold py-2 rounded-md mt-10" @click="register()">
          Register
        </button>
        <p class="text-sm xl:text-md text-gray-400 text-center">Have an account? <a @click="this.$router.push('/login')"
            class="text-black/70 cursor-pointer">Back to login ✨</a></p>

      </div>
    </div>
  </AppLayout>
</template>
  
<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/MainNav.vue";
import axios from "axios";
export default {
  components: {
    AppLayout,
    Nav,
  },
  data() {
    return {
      lastcard: ["Name", "Id-card", "password", "phone number"],
      name: '', idcard: '', password: '', phone: ''
    };
  },
  methods: {
    // ifelse condition
    async showAlert() {
      // Use sweetalert2
      const Toast = await this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    },
    async register() {
      const data = {
        name: this.name, idCard: this.idcard, password: this.password, phone: this.phone
      }
      console.log(data);
      if (this.name !== '' && this.idCard !== '' && this.password !== '' && this.phone !== '') {
        const result = await axios.post('http://localhost:8080/api/auth/register', data)
        console.log(result.data)
        if (result.data.status === "errorid") {
          this.$swal.fire(
            'Idcard already use!',
            'You clicked the button!',
            'error'
          )
        }
        else if (result.data.status === "errorphone") {
          this.$swal.fire(
            'Phonenumber already use!',
            'You clicked the button!',
            'error'
          )
        } else {

          await this.showAlert()
          await this.$router.push('/login')
        }
      }
      else {
        this.$swal.fire(
          'Please enter all inputs !',
          'You clicked the button!',
          'error'
        )
      }

    }
  },
};
</script>
  
<style></style>
  