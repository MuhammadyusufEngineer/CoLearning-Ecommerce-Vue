<template>
  <section class="pt-0">
    <div class="main-container flex-col items-start">
      <p class="py-4 mb-2 text-[12px] font-normal leading-[16px]">
        <router-link to="/" class="text-[#A9A9A9]">Homepage</router-link>
        <span class="mx-2">/</span>
        <span href="#">Fruit and vegetables</span>
      </p>
      <div class="w-full flex flex-wrap items-center justify-between mb-2 p-2">
        <h1 class="text-[32px] font-semibold font-['Poppins'] leading-[28px] mb-5 md:mb-0">Fruit and vegetables</h1>
        <div class="flex items-center w-[275px] justify-between">
          <div class="flex items-center gap-[5px] cursor-pointer hover:bg-[#f4f8ec] p-1 rounded-md grid-view-img"
            @click="grid">
            <div>
              <div class="min-w-[16px] h-4 grid-view-img" src="@/assets/img/grid-view-gray.svg" alt="grid view icon">
                <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.3335 1.3335H4.66683C2.82588 1.3335 1.3335 2.82588 1.3335 4.66683V31.3335C1.3335 33.1744 2.82588 34.6668 4.66683 34.6668H31.3335C33.1744 34.6668 34.6668 33.1744 34.6668 31.3335V4.66683C34.6668 2.82588 33.1744 1.3335 31.3335 1.3335Z"
                    stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.3335 18.0002H34.6668" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M18.0002 1.3335V34.6668" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </div>
            </div>
            <p class="text-[12px] font-normal leading-[16px] grid-view-txt">Grid view</p>
          </div>
          <div class="flex items-center gap-[5px] cursor-pointer hover:bg-[#f4f8ec] p-1 rounded-md list-view-img active"
            @click="list">
            <div class="list-gray">
              <div class="min-w-[16px] h-4 list-view-img" src="@/assets/img/list-view-green.svg" alt="list view icon">
                <svg width="100%" height="100%" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 2H5.33333C3.49238 2 2 3.49238 2 5.33333V32C2 33.841 3.49238 35.3333 5.33333 35.3333H32C33.841 35.3333 35.3333 33.841 35.3333 32V5.33333C35.3333 3.49238 33.841 2 32 2Z"
                    stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 10.3333H35.3333" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2 18.6667H35.3333" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2 27H35.3333" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </div>
            </div>
            <p class="text-[12px] text-[#6a983c] font-normal leading-[16px] list-view-txt">List view</p>
          </div>
          <div class="flex items-center gap-[5px]">
            <p
              class="text-[12px] bg-[#F4F8EC] text-[#6A983C] rounded-[12px] font-['Poppins'] px-2 font-semibold leading-[18px]">
              117</p>
            <p class="text-[12px] text-[#a9a9a9] font-normal leading-[16px]">Products</p>
          </div>
        </div>
      </div>
      <div class="py-4 relative filters">
        <div class="w-full flex flex-wrap items-center gap-4 mb-4">
          <div class="invisible-layer" v-show="is_modal_open" @click="is_modal_open = !is_modal_open"></div>
          <div @click="AsideMenu"
            class="block lg:hidden p-2 bg-[#6A983C] rounded-xl cursor-pointer filter-btn">
            <img src="@/assets/img/filter.svg" alt="">
          </div>
          <form class="gray-rounded">
            <Radio />
            <Radio />
          </form>

          <div class="gray-rounded">
            <Filter name="todo" />
          </div>

          <div class="gray-rounded">
            <Filter name="todo1" />
          </div>
          <div class="gray-rounded flex items-center gap-6">
            <Filter name="todo2" />
            <div class="w-[1px] h-5 bg-[#d1d1d1]"></div>
            <CustomSelect />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <p class="text-[12px] font-semibold font-['Poppins']">Applied filters: </p>
          <div class="tag tag-selected">Selected filter <img src="@/assets/img/cross.svg" alt=""></div>
          <div class="tag tag-selected">Selected filter <img src="@/assets/img/cross.svg" alt=""></div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-container flex justify-between relative">
    <div class="absolute -bottom-full lg:relative ml-5 lg:max-w-[30%] duration-300 filter-aside" v-if="is_modal_open"
      id="filter-aside">
      <div class="flex flex-col items-start">
        <AsideCategory />
        <AsideCheckbox />
        <AsideRating />
      </div>
      <p class="text-[18px] mb-[23px] font-semibold leading-[27px] font-['Poppins']">Rating</p>
      <div class="range-slider">
        <input type="range" min="0" max="180" step="1" v-model="sliderMin">
        <input type="range" min="0" max="180" step="1" v-model="sliderMax">
      </div>
      <div class="w-full flex items-center jsutify-between gap-[14px] mb-[31px]">
        <div>
          <p class="text-[12px] font-semibold leading-[18px] font-['Poppins']">Min</p>
          <input
            class="max-w-[109px] rounded-xl bg-[#f9f9f9] border border-solid py-3 px-4 font-normal font-[14px] text-[#a9a9a9]  border-[#d1d1d1]"
            placeholder="0" type="number" v-model="sliderMin">
        </div>
        <p>-</p>
        <div>
          <p class="text-[12px] font-semibold leading-[18px] font-['Poppins']">Min</p>
          <input
            class="max-w-[109px] rounded-xl bg-[#f9f9f9] border border-solid py-3 px-4 font-normal font-[14px] text-[#a9a9a9]  border-[#d1d1d1]"
            placeholder="000" type="number" v-model="sliderMax">
        </div>
      </div>
      <button class="btn-success btn-sm mr-[34px] apply-btn" @click="ApplyBtn">Apply</button>
      <button class="btn-transparent btn-sm">Reset</button>

    </div>
    <div class="w-full lg:w-[70%]">
      <transition name="fade" mode="out-in">
        <div :key="listStyle" class="flex flex-row flex-wrap justify-evenly gap-y-[10px] prod-body active">
          <ProductCard v-if="listStyle === 'grid'" v-for="index in 10" :key="'A' + index" gridType="grid" />
          <ProductCard v-else v-for="index in 10" :key="'B' + index" gridType="list" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Filter from '@/components/Filter.vue'
import Radio from '@/components/Radio.vue'
import AsideCheckbox from '@/components/AsideCheckbox.vue'
import AsideCategory from '@/components/AsideCategory.vue'
import AsideRating from '@/components/AsideRating.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import ProductCard from '@/components/ProductCard.vue'
import listGreen from '@/assets/img/list-view-green.svg'
import listGray from '@/assets/img/list-view-gray.svg'
import gridGreen from '@/assets/img/grid-view-green.svg'
import gridGray from '@/assets/img/grid-view-gray.svg'
export default {
  name: 'Products',
  props: {
    name: String,
  },
  data() {
    return {
      listGreen,
      listGray,
      gridGreen,
      gridGray,
      listStyle: 'col',
      minAngle: 10,
      maxAngle: 30,
      is_modal_open : false
    }
  },
  components: {
    CustomSelect,
    Filter,
    Radio,
    AsideCheckbox,
    AsideCategory,
    AsideRating,
    ProductCard,
  },
  methods: {
    grid() {
      this.listStyle = 'grid'
      let gridImg = document.querySelector('.grid-view-img')
      let listImg = document.querySelector('.list-view-img')
      gridImg.classList.add('active')
      listImg.classList.remove('active')
    },
    list() {
      this.listStyle = 'col'
      let gridImg = document.querySelector('.grid-view-img')
      let listImg = document.querySelector('.list-view-img')
      gridImg.classList.remove('active')
      listImg.classList.add('active')
    },
    AsideMenu() {
      let aside = document.querySelector('.filter-aside')
      let body = document.querySelector('body')
      body.classList.toggle('active')
      aside.classList.toggle('active')

    },
    ApplyBtn() {
      let aside = document.querySelector('.filter-aside')
      let body = document.querySelector('body')
      aside.classList.remove('active')
      body.classList.remove('active')
    }
  },
  computed: {
    sliderMin: {
      get: function() {
        var val = parseInt(this.minAngle);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      }
    },
    sliderMax: {
      get: function() {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      }
    }
  }
}
</script>

<style lang="scss">
.invisible-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 1000%;
    z-index: 9998;
}
.grid-view-img,
.list-view-img {

  .list-view-txt,
  .grid-view-txt {
    color: #a9a9a9 !important;
  }

  svg {
    path {
      stroke: #a9a9a9;
    }
  }
}

.grid-view-img.active,
.list-view-img.active {

  .list-view-txt,
  .grid-view-txt {
    color: #6A983C !important;
  }

  svg {
    path {
      stroke: #6A983C;
    }
  }
}

.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 1em;
  margin-bottom: 23px;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}



input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  background: #ebebeb;
  border-radius: none;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: none;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
  background: #fff;
  cursor: pointer;
  margin-top: -7px;
  -webkit-appearance: none;
}
</style>
