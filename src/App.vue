<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component"/>
      </transition>
    </router-view>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>