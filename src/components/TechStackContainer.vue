<template>
  <div v-for="techstach in items" class="tech-stack-container">
    <div class="tech-stack-title"><q-icon name="arrow_right" size="1.2em" /> {{ techstach.title }}</div>
    <div v-for="tech in techstach.techs" class="tech-list">
      <span class="tech">
        {{ tech.name }} 
        <q-badge v-if="tech.pick" outline color="primary">
          선정
        </q-badge>
      </span>
      <span class="tech-description">
        {{ tech.description }}
      </span>
    </div>
    <div class="tech-pick-reason">
      🏆 선정한 이유 : {{ techstach.pickReason }}
    </div>
  </div>
</template>

<script setup lang="ts">
/******************************
 * #Important 사용하지 않는 로직, 변수 등 선언 X
 *******************************/

/******************************
 * @import_선언
 * TODO 아래 순서에 맞추어 import (각 순서 마다 띄우기)
 *  * 1. Dependency
 *  * 2. Utils
 *  * 3. Types
 *  * 4. Stores
 *  * 5. Vue
 *  * 6. Etc (생길 시 얘기.)
 *******************************/

/******************************
 * @컴포넌트_옵션_선언
 * TODO 이름 정의 (파일 이름 그대로 지정)
 *******************************/
defineOptions({
  name: 'TechStackContainer'
})

/******************************
 * @Pinia_store_선언
 * TODO 반응형 유지를 위해 storeToRefs 사용 (function은 사용 X)
 *******************************/
/******************************
 * @Emit_선언
 *******************************/

/******************************
 * @Vue_관련_선언 (ex. vue-router)
 *******************************/

/******************************
 * @Interface_선언
 *******************************/
interface propType {
  items: Array<techstachType>
}
export interface techstachType {
  title: string
  techs: Array<techType>
  pickReason: string
}
interface techType {
  name: string
  pick: boolean
  description: string
}

/******************************
 * @inject_선언
 *******************************/

/******************************
 * @Props_선언
 * TODO type & default 작성
 *******************************/
const props = withDefaults(defineProps<propType>(), {
  items: () => []
})

/******************************
 * @VModel_선언
 *******************************/

/******************************
 * @Data_선언
 * TODO ref, reactive 사용, 불명확한 단어 사용 X (ex. data, date)
 *******************************/

/******************************
 * @Computed_선언
 *******************************/

/******************************
 * @Watch_선언
 *******************************/

/******************************
 * @Life_cycle_선언
 *******************************/
onBeforeMount(() => {
  init()
})

/******************************
 * @Function_선언
 * TODO function 주석 작성 (asdffunctionannotation 사용)
 *  * arrow function 사용해도 무관
 *******************************/
function init() {
}


/******************************
 * @Provide_선언
 *  ! types 폴더에 type 명시
 *******************************/
</script>
