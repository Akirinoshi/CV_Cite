<template>
  <div>
    <transition name="LoaderBiography">
    <LoaderBiography v-if="!loading" class="Loader"/>
    </transition>

    <transition-group name="textBio">
    <div v-if="loading" v-bind:key="'mainDiv'">
      <h1 v-bind:key="'h1'">Here will be biography</h1>
    </div>
    </transition-group>
  </div>
</template>

<script>
import LoaderBiography from "@/components/LoaderBiography";

export default {
  name: "Biography",
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = !this.loading
    }, 2400)
  },
  components: {
    LoaderBiography
  }
}

</script>

<style scoped>
h1 {
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

.LoaderBiography-enter-active, .LoaderBiography-leave-active {
  transition: opacity 0.1s;
}

.LoaderBiography-enter,
.LoaderBiography-leave-to {
  opacity: 0;
}

.textBio-enter-active, .textBio-leave-active {
  transition: opacity 3s;
}

.textBio-enter,
.textBio-leave-to {
  opacity: 0;
}
</style>