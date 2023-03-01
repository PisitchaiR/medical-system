<template>
  <div>
    <Nav />
    
      <div class="grid grid-cols-12 gap-4 py-[30px]">
        <div class="cols-2">
        </div>
        <div class="col-span-5 card purple">
          <div>
sadsad
          </div>
        </div>

        <div class="col-span-5 card purple">
          <div>
sadsad
          </div>
        </div>
      </div>
 
  </div>
</template>

<script>
import Nav from "../components/Navbar.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style  scoped >
.card {
  
  box-sizing: border-box;
  padding: 2em;
  font-family: Ubuntu;
  border-radius: 25px;
  color: white;
  line-height: 25px;
  box-shadow: 5px 5px 10px #ccc;
  float: left;
  margin-right: 1em;
}
.card.purple {
  background: linear-gradient(150deg, #111727, #ff5757 150%);
}
</style>