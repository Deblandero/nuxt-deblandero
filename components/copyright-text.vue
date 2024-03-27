<script setup lang="ts">
import { mailToOD } from 'assets/tools/mailto'
</script>

<template>
  <section class="absolute bottom-0 left-0 container w-full py-2 pl-4">
    <p class="sm:hidden">Deblandero ©</p>
    <p class="hidden sm:block">Deblandero | Droits d'auteur © Tous droits réservés.</p>
    <p class="text-sm">
      Designed and Developed by
      <span class="text-blue-2 hover:text-blue-1 hover:cursor-pointer" @click="mailToOD()">Oli</span>
    </p>
  </section>
</template>

<style scoped>

</style>