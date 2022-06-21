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
          <div class="flex items-center gap-[5px] cursor-pointer hover:bg-[#f4f8ec] p-1 rounded-md" @click="grid">
            <div>
              <img class="min-w-[16px] h-4 grid-view-img" src="@/assets/img/grid-view-gray.svg" alt="grid view icon">
            </div>
            <p class="text-[12px] font-normal leading-[16px] grid-view-txt">Grid view</p>
          </div>
          <div class="flex items-center gap-[5px] list-view cursor-pointer hover:bg-[#f4f8ec] p-1 rounded-md" @click="list">
            <div class="list-gray">
              <img class="min-w-[16px] h-4 list-view-img" src="@/assets/img/list-view-green.svg" alt="list view icon">
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
          <a href="#filter-aside" @click="AsideMenu" class="block lg:hidden p-2 bg-[#6A983C] rounded-xl cursor-pointer filter-btn">
            <img src="@/assets/img/filter.svg" alt="">
          </a>
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

  <section class="home-container flex justify-between">
    <div class="absolute -left-full lg:left-0 lg:relative ml-5 lg:max-w-[30%] duration-300 filter-aside"
      id="filter-aside">
      <div class="flex flex-col items-start">
        <AsideCategory />
        <AsideCheckbox />
        <AsideRating />
      </div>
      <div slider id="slider-distance" class="mb-[23px]">
        <div>
          <div inverse-left style="width:70%;"></div>
          <div inverse-right style="width:70%;"></div>
          <div range style="left:30%;right:40%;"></div>
          <span thumb style="left:30%;"></span>
          <span thumb style="left:60%;"></span>
          <div sign style="left:30%;">
            <span id="value">30</span>
          </div>
          <div sign style="left:60%;">
            <span id="value">60</span>
          </div>
        </div>
        <input type="range" tabindex="0" value="30" max="100" min="0" step="1" oninput="
            this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
            var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
            var children = this.parentNode.childNodes[1].childNodes;
            children[1].style.width=value+'%';
            children[5].style.left=value+'%';
            children[7].style.left=value+'%';children[11].style.left=value+'%';
            children[11].childNodes[1].innerHTML=this.value;" />

        <input type="range" tabindex="0" value="60" max="100" min="0" step="1" oninput="
            this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
            var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
            var children = this.parentNode.childNodes[1].childNodes;
            children[3].style.width=(100-value)+'%';
            children[5].style.right=(100-value)+'%';
            children[9].style.left=value+'%';children[13].style.left=value+'%';
            children[13].childNodes[1].innerHTML=this.value;" />
      </div>
      <div class="w-full flex items-center jsutify-between gap-[14px] mb-[31px]">
        <div>
          <p class="text-[12px] font-semibold leading-[18px] font-['Poppins']">Min</p>
          <input
            class="max-w-[109px] rounded-xl bg-[#f9f9f9] border border-solid py-3 px-4 font-normal font-[14px] text-[#a9a9a9]  border-[#d1d1d1]"
            placeholder="0" type="number">
        </div>
        <p>-</p>
        <div>
          <p class="text-[12px] font-semibold leading-[18px] font-['Poppins']">Min</p>
          <input
            class="max-w-[109px] rounded-xl bg-[#f9f9f9] border border-solid py-3 px-4 font-normal font-[14px] text-[#a9a9a9]  border-[#d1d1d1]"
            placeholder="000" type="number">
        </div>
      </div>
      <button class="btn-success btn-sm mr-[34px] apply-btn" @click="ApplyBtn">Apply</button>
      <button class="btn-transparent btn-sm">Reset</button>

    </div>
    <div class="w-full lg:w-[70%]">
      <div class="flex flex-row flex-wrap justify-evenly gap-8">
        <Product v-for="index in 10" :key="index" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
[slider] {
  position: relative;
  height: 6px;
  border-radius: 10px;
  text-align: left;
  margin: 45px 0 10px 0;
}

[slider]>div {
  position: absolute;
  left: 13px;
  right: 15px;
  height: 6px;
}

[slider]>div>[inverse-left] {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 10px;
  background-color: #ebebeb;
  margin: 0 7px;
}

[slider]>div>[inverse-right] {
  position: absolute;
  right: 0;
  height: 6px;
  border-radius: 10px;
  background-color: #ebebeb;
  margin: 0 7px;
}

[slider]>div>[range] {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 14px;
  background-color: #6A983C;
}

[slider]>div>[thumb] {
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 20px;
  width: 20px;
  text-align: left;
  margin-left: -11px;
  cursor: pointer;
  border: 1px solid #D1D1D1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 50%;
  outline: none;
}

[slider]>input[type="range"] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 3;
  height: 6px;
  top: -2px;
  width: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}

div[slider]>input[type="range"]::-ms-track {
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider]>input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider]>input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
  border: transparent;
}

div[slider]>input[type="range"]:focus {
  outline: none;
}

div[slider]>input[type="range"]::-ms-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider]>input[type="range"]::-moz-range-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider]>input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
  -webkit-appearance: none;
}

div[slider]>input[type="range"]::-ms-fill-lower {
  background: transparent;
  border: 0 none;
}

div[slider]>input[type="range"]::-ms-fill-upper {
  background: transparent;
  border: 0 none;
}

div[slider]>input[type="range"]::-ms-tooltip {
  display: none;
}

[slider]>div>[sign] {
  opacity: 0;
  position: absolute;
  margin-left: -11px;
  top: -39px;
  z-index: 3;
  background-color: #6A983C;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  -webkit-border-radius: 28px;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}

[slider]>div>[sign]:after {
  position: absolute;
  content: "";
  left: 0;
  border-radius: 16px;
  top: 19px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top-width: 16px;
  border-top-style: solid;
  border-top-color: #6A983C;
}

[slider]>div>[sign]>span {
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
}

[slider]:hover>div>[sign] {
  opacity: 1;
}
</style>
<script>
import Filter from '@/components/Filter.vue'
import Radio from '@/components/Radio.vue'
import AsideCheckbox from '@/components/AsideCheckbox.vue'
import AsideCategory from '@/components/AsideCategory.vue'
import AsideRating from '@/components/AsideRating.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import Product from '@/components/Product.vue'
import listGreen from '@/assets/img/list-view-green.svg'
import listGray from '@/assets/img/list-view-gray.svg'
import gridGreen from '@/assets/img/grid-view-green.svg'
import gridGray from '@/assets/img/grid-view-gray.svg'
export default {
  name: 'Products',
  data() {
    return {
      listGreen,
      listGray,
      gridGreen,
      gridGray,
    }
  },
  components: {
    CustomSelect,
    Filter,
    Radio,
    AsideCheckbox,
    AsideCategory,
    AsideRating,
    Product
  },
  props: {
    name: String,
  },
  methods: {
    grid() {
      let gridText = document.querySelector('.grid-view-txt')
      let gridImg = document.querySelector('.grid-view-img')
      let listText = document.querySelector('.list-view-txt')
      let listImg = document.querySelector('.list-view-img')
      let prod = document.querySelectorAll('.product-box')
      prod.forEach(item => {
        item.classList.remove('list')
        item.classList.add('grid')
      })
      gridText.classList.add('text-[#6a983c]')
      gridText.classList.remove('text-[#a9a9a9]')
      gridImg.src = this.gridGreen
      listText.classList.remove('text-[#6a983c]')
      listText.classList.add('text-[#a9a9a9]')
      listImg.src = this.listGray
    },
    list() {
      let gridText = document.querySelector('.grid-view-txt')
      let gridImg = document.querySelector('.grid-view-img')
      let listText = document.querySelector('.list-view-txt')
      let listImg = document.querySelector('.list-view-img')
      let prod = document.querySelectorAll('.product-box')
      prod.forEach(item => {
        item.classList.remove('grid')
        item.classList.add('list')
      })
      listText.classList.add('text-[#6a983c]')
      listText.classList.remove('text-[#a9a9a9]')
      listImg.src = this.listGreen
      gridText.classList.remove('text-[#6a983c]')
      gridText.classList.add('text-[#a9a9a9]')
      gridImg.src = this.gridGray
    },
    AsideMenu() {
      let aside = document.querySelector('.filter-aside')
        aside.classList.toggle('active')

    },
    ApplyBtn() {
      let aside = document.querySelector('.filter-aside')
        aside.classList.remove('active')
    }
  }
}
</script>