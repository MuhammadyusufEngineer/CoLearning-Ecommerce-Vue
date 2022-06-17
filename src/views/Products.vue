<template>
  Products page
</template>
<style lang="scss" scoped>

[slider] {
  position: relative;
  height:6px;
  border-radius: 10px;
  text-align: left;
  margin: 45px 0 10px 0;
}

[slider] > div {
  position: absolute;
  left: 13px;
  right: 15px;
  height:6px;
}

[slider] > div > [inverse-left] {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 10px;
  background-color: #ebebeb;
  margin: 0 7px;
}

[slider] > div > [inverse-right] {
  position: absolute;
  right: 0;
  height: 6px;
  border-radius: 10px;
  background-color: #ebebeb;
  margin: 0 7px;
}

[slider] > div > [range] {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 14px;
  background-color: #6A983C;
}

[slider] > div > [thumb] {
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

[slider] > input[type="range"] {
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

div[slider] > input[type="range"]::-ms-track {
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider] > input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider] > input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
  border: transparent;
}

div[slider] > input[type="range"]:focus {
  outline: none;
}

div[slider] > input[type="range"]::-ms-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type="range"]::-moz-range-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  border: 0 none;
  background: red;
  -webkit-appearance: none;
}

div[slider] > input[type="range"]::-ms-fill-lower {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type="range"]::-ms-fill-upper {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type="range"]::-ms-tooltip {
  display: none;
}

[slider] > div > [sign] {
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

[slider] > div > [sign]:after {
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

[slider] > div > [sign] > span {
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
}

[slider]:hover > div > [sign] {
  opacity: 1;
}


</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";


// import required modules
import { FreeMode } from "swiper";
export default {
    name: 'Products',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [FreeMode]
        };
    },
}
</script>