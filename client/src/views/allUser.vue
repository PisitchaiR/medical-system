<style  scoped>

</style>


<template>
    <div>
      <Docnav />
        
<div class="mt-[50px] mx-auto xl:px-[200px] lg:px-[150px] md:px-[100px] ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  #User Id
                </th>
                <th scope="col" class="px-3 py-3">
                  Identification Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(val, index) in userInfo" key="index">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {{val.id}}
                </th>
                <td class="px-6 py-4">
                  {{val.name}}
                </td>
                <td class="px-3 py-4">
                  {{val.idCard}}
                </td>
                <td class="px-6 py-4">
                  {{val.phone}}
                </td>
                <td class="px-6 py-4">
                  {{val.role}}
                </td>
            </tr>
        </tbody>
    </table>

    
</div>

    </div>
</template>

<script>
import Docnav from "../components/DocNavbar.vue"

export default {
    data: () => ({
     
    
      show: false,
      inName: '',
      inIdcard: '',
      userInfo: [
      {
          id: '1',
          idCard: '1212312',
          name: 'Wiranyupa Petch-in',
          phone: '03288742',
          role: 'doctor'
        },
        {
          id: '2',
          idCard: '1212312',
          name: 'Wiwat liangkobkit',
          phone: '03288742',
          role: 'doctor'
        },
        {
          id: '3',
          idCard: '1212312',
          name: 'Osian Mccarty',
          phone: '09374318',
          role: 'doctor'
        },
        {
          id: '4',
          idCard: '1212312',
          name: 'Ollie Martin',
          phone: '09374318',
          role: 'doctor'
        },
        {
          id: '5',
          idCard: '02397129',
          name: 'Layla Trevino',
          phone: '042784',
          role: 'patient'
        },
        {
          id: '6',
          idCard: '02397129',
          name: 'Alisha Potter',
          phone: '042784',
          role: 'patient'
        },
        {
          id: '7',
          idCard: '02397129',
          name: 'Clyde Tyler',
          phone: '042784',
          role: 'patient'
        },
        {
          id: '8',
          idCard: '02397129',
          name: 'Nina Decker',
          phone: '042784',
          role: 'patient'
        },
        {
          id: '9',
          idCard: '02397129',
          name: 'Kaine Robbins',
          phone: '042784',
          role: 'patient'
        },

        
      ],
    
  
  methods: {
  },

    }),
    components: {
        Docnav,

    }
}
</script>
