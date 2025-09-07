<template>
  <div v-if="haveContents" class="card-contents">
    <div v-if="!isAggregated" class="asistobe-container">
      <div class="asis-container">
        <q-badge color="blue">
          AS-IS
        </q-badge>
        <br/>
        <div v-if="haveAsis">
          <template v-for="(asis, idx) in asisContents" :key="`${idx}_asis_${asis.laguageType}`">
            <div v-html="asis.description"></div>
            <pre v-if="asis.laguageType != 'image'">
              <code :class="`language-${asis.laguageType}`">{{ convertAngleBrackets(asis.contents) }}</code>
            </pre>
            <q-img
              v-else
              :src="asis.contents"
              spinner-color="white"
              fit="contain"
              width="100%"
            />
          </template>
        </div>
        <NoContents v-else />
      </div>
      <div class="tobe-container">
        <q-badge color="blue">
          TO-BE
        </q-badge>
        <div v-if="isSame">
          😚 AS-IS와 동일해요.
        </div>
        <div v-else-if="haveTobe">
          <template v-for="(tobe, idx) in tobeContents" :key="`${idx}_tobe_${tobe.laguageType}`">
            <div v-html="tobe.description"></div>
            <pre v-if="tobe.laguageType != 'image'">
              <code :class="`language-${tobe.laguageType}`">{{ convertAngleBrackets(tobe.contents) }}</code>
            </pre>
            <q-img
              v-else
              :src="tobe.contents"
              spinner-color="white"
              fit="contain"
              width="100%"
            />
              <!-- style="height: 400px; max-width: 400px" -->
          </template>
        </div>
        <NoContents v-else />
        <br/>
      </div>
    </div>
    <div v-else class="aggregate-container">
      <template v-for="(item, idx) in aggregateContents" :key="`${idx}_aggregate_${item.laguageType}`">
        <div v-html="item.description"></div>
        <template v-if="item.laguageType === 'image'">
          <q-img
            v-if="!item.isUrl"
            :src="item.contents"
            spinner-color="white"
            width="100%"
            fit="contain"
          />
          <picture v-else>
            <!-- AVIF -->
            <source :srcset="item.contents + '.avif'" type="image/avif">
            <!-- WebP -->
            <source :srcset="item.contents + '.webp'" type="image/webp">
            <!-- JPG fallback -->
            <img :src="item.contents + '.jpg'" alt="데이터 비교" style="width: 100%; height: auto;">
          </picture>
        </template>
        <component
          v-else-if="item.laguageType === 'components'"
          :is="item.contents"
          :items="item.items"
        />
        <pre v-else>
          <code :class="`language-${item.laguageType}`">{{ convertAngleBrackets(item.contents) }}</code>
        </pre>
      </template>
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
import hljs from 'highlight.js';
import { contentsType } from './CardContainer.vue';

/******************************
 * @컴포넌트_옵션_선언
 * TODO 이름 정의 (파일 이름 그대로 지정)
 *******************************/
defineOptions({
  name: 'CardContents'
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
  haveContents: boolean
  isAggregated: boolean
  asisContents?: Array<contentsType>
  tobeContents?: Array<contentsType>
  aggregateContents?: Array<contentsType>
  isSame?: boolean
}

/******************************
 * @inject_선언
 *******************************/

/******************************
 * @Props_선언
 * TODO type & default 작성
 *******************************/
const props = withDefaults(defineProps<propType>(), {
  haveContents: false,
  isAggregated: false,
  laguageType: 'html',
  asisContents: () => [],
  tobeContents: () => [],
  aggregateContents: () => [],
  isSame: false,
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
const haveAsis = computed(() => props.asisContents && props.asisContents.length > 0)
const haveTobe = computed(() => props.tobeContents && props.tobeContents.length > 0)

/******************************
 * @Watch_선언
 *******************************/

/******************************
 * @Life_cycle_선언
 *******************************/
onMounted(async () => {
  await nextTick(); // DOM 업데이트 완료 후
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(block => {
    // Element → HTMLElement 타입 단언
    const el = block as HTMLElement & { dataset: DOMStringMap };
    
    // 이미 하이라이트했는지 체크
    if (!el.dataset.highlighted) {
      hljs.highlightElement(el);
      el.dataset.highlighted = 'yes';
    }
  });
})

/******************************
 * @Function_선언
 * TODO function 주석 작성 (asdffunctionannotation 사용)
 *  * arrow function 사용해도 무관
 *******************************/
/******************************
 * TODO (목적): <, >를 &lt;, &gt;로 변환
 * @param (1): 변환하고자 하는 코드
 * @return (반환): 변환된 코드
 *******************************/
function convertAngleBrackets(text: string): string {
  return text
  // return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/******************************
 * @Provide_선언
 *  ! types 폴더에 type 명시
 *******************************/
</script>
