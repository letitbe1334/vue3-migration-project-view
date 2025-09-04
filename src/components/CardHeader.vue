<template>
  <div class="card-header">
    <span class="header-sequence">{{ padSequence }}</span> 
    <span class="header-contents">{{ contents }}</span>
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
  name: 'CardHeader'
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
  sequence: number
  contents: string
}

/******************************
 * @inject_선언
 *******************************/

/******************************
 * @Props_선언
 * TODO type & default 작성
 *******************************/
const props = withDefaults(defineProps<propType>(), {
  sequence: 0,
  contents: ''
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
const padSequence = computed(() => {
  // 두자리까지만 표현
  let pad = '0'
  if (props.sequence > 0) {
    let textSequence = String(props.sequence)
    pad = textSequence.length > 1 ? textSequence : `0${textSequence}`
  }
  return `${pad}.`
})

/******************************
 * @Watch_선언
 *******************************/

/******************************
 * @Life_cycle_선언
 *******************************/

/******************************
 * @Function_선언
 * TODO function 주석 작성 (asdffunctionannotation 사용)
 *  * arrow function 사용해도 무관
 *******************************/

/******************************
 * @Provide_선언
 *  ! types 폴더에 type 명시
 *******************************/
</script>
