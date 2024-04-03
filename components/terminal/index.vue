<script setup lang="ts">
import { reactive, ref } from 'vue';
import Context from '/assets/rpg/classes/context'

const emit = defineEmits(['answer'])

let input = ref('')
let index = ref(1)
let content: string[] = reactive([])

const props = defineProps({
  chapter: {type: Array, require: true, default: {
  dep: 0,
  content: 'Serge !',
  question: '',
  answer: '',
  type: 'text'
}},
  icon: {type: Array, require: true, default: ['/images/sword.svg']}
})

const browsContext = (chapter: Context) => {
  let context = new Context(
    chapter.dep, chapter.content, chapter.question, chapter.answer, chapter.type
  )

  switch (context.type) {
    case 'text':
      if (context.content !== ''){
        content.push(context.content)
        setTimeout(() => { index.value ++ }, 3000)
      }
      break
    case 'question':
      if (context.content !== '' && content[content.length -1] !== context.content){content.push(context.content)}
      if (context.question !== '' && content[content.length -1] !== context.question){content.push(context.question)}
      
      if (input.value !== '') {
        emit('answer', input.value)
        content.push(input.value)
        setTimeout(() => { index.value ++ }, 3000)
      }
      input.value = ''
      break
    default:
      console.log('Sorry you are out of context')
  }
  
}

watch(index, (newIndex, oldIndex) => {
  if(index.value <= props.chapter.length -1) {
    browsContext(props.chapter[index.value])
  }
})

onNuxtReady(() => {
  index.value = 0
})

</script>

<template>
  <p id="output" v-for="(line, index) in content" :key="index" class="flex items-center text-lg">
    <span class="pr-2">
      <NuxtImg :src="icon[0]" width="15px" />
    </span> 
    {{ line }}
  </p>
  <div id="input" class="flex items-center">
    <span class="pr-2">
      <NuxtImg :src="icon[0]" width="15px" />
    </span>
    <input class="bg-slate-100 text-slate-800 text-lg focus:outline-none w-full border-slate-200 border-b-2 py-1 pl-2"
      type="text" 
      id="cmd" 
      v-model="input" 
      @keyup.enter="browsContext(props.chapter[index])">
    <button 
      class="w-auto pl-6 text-lg"
      @click="browsContext(props.chapter[index])"
    >
      SEND
    </button>
  </div>
</template>

<style scoped>

</style>