<script setup lang="ts">
import { ref, computed } from 'vue';

let input = ref('')
let content: string[] = []

const displayInput = () => {
  content.push(input.value)
  input.value = ''
}

</script>

<template>
  <div class="h-dvh flex">
    <div class="bg-slate-100 h-full w-1/2 p-10 text-slate-600 text-2xl">
      <h1 class="text-2xl font-bold w-full border-b-2 mb-4">Adventure</h1>
      <p id="output" v-for="line in content" :key="line.id" class="flex items-center text-lg">
        <span class="pr-2">
          <NuxtImg src="/images/sword.svg" width="15px" />
        </span>
        {{ line }}
      </p>
      <div id="input" class="flex items-center">
        <span class="pr-2">
          <NuxtImg src="/images/sword.svg" width="15px" />
        </span>
        <input class="bg-slate-100 text-slate-800 text-lg focus:outline-none w-full border-slate-200 border-b-2 py-1 pl-2"
          type="text" id="cmd" v-model="input" @keyup.enter="displayInput">
        <button 
          class="w-auto pl-6 text-lg"
          @click="displayInput"
        >
          SEND
        </button>
      </div>
    </div>
    <div class="bg-slate-900 h-full w-1/2 p-10 text-slate-100 text-lg">
      <p>Serge</p>
    </div>
  </div>
</template>



<style scoped></style>