<script setup lang="ts">
import { ref, reactive } from 'vue';
import Character from '@/assets/rpg/classes/character'

let input = ref('')
let index = ref(1)
let content: string[] = reactive([])
let chap : object[] = [
  { dep: 0, content: 'Le RPG de Serge !', question: '', answer: '', finished: false},
  { dep: 1, content: '', question: "Comment t'appels-tu", answer: '', type: 'question'},
  { dep: 0, content: 'Après la question', question: "", answer: '', finished: false}
]
let character = new Character('')

// const browsContext = async (chapter: any = chap[0]) => {
//   let context = new Context(
//     chapter.dep, chapter.content, chapter.question, chapter.answer, chapter.type
//   )

//   switch (context.type) {
//     case 'text':
//       if (context.content !== ''){
//         content.push(context.content)
//         setTimeout(() => { index.value ++ }, 3000)
//       }
//       break
//     case 'question':
//       if (context.content !== '' && content[content.length -1] !== context.content){content.push(context.content)}
//       if (context.question !== '' && content[content.length -1] !== context.question){content.push(context.question)}

//       // CHARACTER QUESTION
//       if (context.dependency === 1) {
//         console.log('character question')
  
//         character.name = input.value
//       }

//       if (input.value !== '') {
//         content.push(input.value)
//         setTimeout(() => { index.value ++ }, 3000)
//       }
//       input.value = ''
//       break
//     default:
//       console.log('Sorry you are out of context')
//   }
  
// }



</script>

<template>
  <div class="h-dvh flex">
    <div class="bg-slate-100 h-full w-1/2 p-10 text-slate-600 text-2xl">
     <terminal :chapter="chap"/>
    </div>
    <div class="bg-slate-900 h-full w-1/2 p-10 text-slate-100 text-lg">
      <p v-if="character.name !== ''">name: {{ character.name }}</p>
    </div>
  </div>
</template>



<style scoped></style>