<template>
  <div>
    <NavigationBar />

    <router-view/>
  </div>
</template>


<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  components: {
    NavigationBar
  }
}


</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #24252A;
}
</style>