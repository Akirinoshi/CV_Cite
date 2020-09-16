<template>
  <div id="Home">

    <transition name="Loader">
    <Loader v-if="loading" class="loader"/>
    </transition>


    <transition-group name="homeMainList">
      <h1 v-bind:key="'h1Home'" v-if="!loadingText">{{ h1 }}</h1>
      <h2 v-bind:key="'h2Home'" v-if="!loadingText">{{ h2 }}</h2>

      <div style="margin-top: 30px" v-if="!loadingText" v-bind:key="'0divBtnHome'">
        <div id="testbutton" href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"
             v-on:click="show = !show" class="learn-more" v-bind:key="'1divBtnHome'"></div>
      </div>
    </transition-group>


    <transition name="duck">
      <img :src="image" v-if="show" class="img1"/>
    </transition>
    <transition name="duck1">
      <img :src="image1" v-if="show" class="img2"/>
    </transition>
    <transition name="duck2">
      <img :src="image2" v-if="show" class="img3"/>
    </transition>
  </div>
</template>

<script>
import Loader from "@/components/LoaderHome";
import image from "@/components/images/duck.png"
import image1 from "@/components/images/duck1.png"
import image2 from "@/components/images/duck2.png"

export default {
  data() {
    return {
      h1: 'Hello, this is my site CV!',
      h2: 'Here will be a lot of interesting , you can read about me , my skills and you can see my projects , funny animation and more else.',
      loading: true,
      loadingText: true,
      image: image,
      image1: image1,
      image2: image2,
      show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      setTimeout(() => {
        this.loadingText = false
      }, 800)
    }, 2000)
  },
  components: {
    Loader
  }
}
</script>

<style scoped>
* {
  text-align: center;
}

h1 {
  margin-top: 20px;
  color: #fff;
  text-align: center;
}

h2 {
  text-align: center;
  color: white;
  margin-top: 20px;
  color: #fff;
  padding-left: 200px;
  padding-right: 200px;
  text-align: center;
}

.loader {
  align-content: center;
}

.img1 {
  margin-top: 40px;
  width: 400px;
  height: 400px;
}

.img2 {
  margin-top: 40px;
  width: 550px;
  height: 400px;
}

.img3 {
  margin-top: 40px;
  width: 400px;
  height: 400px;
}

button {
  margin-top: 60px;
}

.duck-enter-active, .duck-leave-active {
  transition: opacity 5s;
}

.duck-enter,
.duck-leave-to {
  opacity: 0;
}

.duck1-enter-active, .duck1-leave-active {
  transition: opacity 4.2s;
}

.duck1-enter,
.duck1-leave-to {
  opacity: 0;
}

.duck2-enter-active, .duck2-leave-active {
  transition: opacity 4.2s;
}

.duck2-enter,
.duck2-leave-to {
  opacity: 0;
}

.homeMainList-enter-active, .homeMainList-leave-active {
  transition: opacity 4.3s;
}

.homeMainList-enter,
.homeMainList-leave-of {
  opacity: 0;
}

.Loader-enter-active{
  animation: Loader-in .5s;
}

.Loader-leave-active {
  animation: Loader-in .5s reverse;
}
@keyframes Loader-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}

/*.Loader-enter,*/
/*.Loader-leave-of {*/
/*  opacity: 0;*/
/*}*/

/*  */

#testbutton {
  width: 150px;
  height: 50px;
  border-radius: 180px;
  position: relative;
  left: calc(50% - 75px);
  top: calc(50% - 25px);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  cursor: pointer;
  line-height: 12px;
}

#testbutton:before {
  content: '';
  z-index: 1;
  position: absolute;
  display: block;
  width: 80%;
  height: 70%;
  top: 15%;
  left: 10%;
  transition: 0.3s opacity ease-in-out;
  filter: blur(15px);
  opacity: 0;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
}

#testbutton:hover:before {
  opacity: 1;
  transition: 0.3s opacity ease-in-out;
  filter: blur(25px);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
}

#testbutton:after {
  content: 'Goose';
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: rgba(235, 235, 235, 1);
  font-weight: bold;
  z-index: 5;
  position: absolute;
  display: block;
  border-radius: 180px;
  width: 92%;
  height: 80%;
  top: 10%;
  left: 4%;
  background-color: rgb(19, 20, 22);
}

</style>



