<script setup>
  import { mailToOD } from '~/assets/tools/mailto';
</script>

<template>
  <div class="grid grid-cols-4 gap-4 items-center h-screen">
    <div class="col-span-4 md:col-span-3 flex justify-center">
      <SvgComputerDesktop class="hidden md:block" />
      <SvgComputerMobile class="md:hidden w-64" />
    </div>
    <!-- <div class="col-span-4 md:col-span-1 flex items-center flex-col pt-24 px-4 sm:pr-16 md:pr-32"> -->
    <div class="absolute w-1/2 right-24 text-right">
      <p class="w-full text-3xl">DEBLANDER OLIVIER</p>
      <p class="w-full text-xl font-extrabold">webdeveloper.</p>
      <div class="w-full flex items-start">
        <button @click="mailToOD()">
          <NuxtImg src="/images/post-office.png" width="25px"/>
        </button>
      </div>
      <p class="w-1/2 text-xl pt-4">Explorateur du code et créateur digital, je façonne des mondes en ligne à travers la magie du développement web.</p>
    </div>
  </div>
  <CopyrightText/>
</template>

<style lang="scss" scoped></style>