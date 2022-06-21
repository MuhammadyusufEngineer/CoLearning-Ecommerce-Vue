<!-- <template>

    <div class="custom-select " style="width:140px;">
        <select>
            <option v-for="item in options" :value="item.id" :key="item.id"> {{ item.text }} </option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {id: 0, text: "All categories"},
                {id: 1, text: "Bakery"},
                {id: 2, text: "Fruit"},
                {id: 3, text: "Vegetables"},
                {id: 4, text: "Meat"},
                {id: 5, text: "Drinks"},
                {id: 6, text: "Kitchen"},
                {id: 7, text: "Nutrition"},
                {id: 8, text: "Baby"},
                {id: 9, text: "Pharmacy"},
            ],
        }
    },
}
</script> -->
<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
    <div class="ui-custom-select">
        <div class="current-value" @click="is_open = !is_open">
            {{ current_item.title }}
            <div class="arrow" :class="{ reverse: is_open }">
            <img src="../assets/img/chevron-down.svg" alt=""></div>

            <transition name="fade">
                <ul v-if="is_open" class="values" :class="{ open: is_open }">
                    <li v-for="item in items" :key="item.value" class="value" @click="change_current_item(item)">
                        {{ item.title }}
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [

                {
                    title: "Bakery",
                    value: "1"
                },

                {
                    title: "Fruit",
                    value: "2"
                },

                {
                    title: "Vegetables",
                    value: "3"
                },

                {
                    title: "Meat",
                    value: "4"
                },

                {
                    title: "Drinks",
                    value: "5"
                },
                {
                    title: "Kitchen",
                    value: "6"
                },
                {
                    title: "Nutrition",
                    value: "7"
                },
                {
                    title: "Baby",
                    value: "8"
                },
                {
                    title: "Pharmacy",
                    value: "9"
                },
                
            ],

            current_item_value: 0,

            is_open: false
        };
    },

    methods: {
        change_current_item(item) {
            const index_new_item = this.items.indexOf(item);

            if (index_new_item !== -1) {
                this.current_item_value = index_new_item;
                this.$parent.$emit(
                    "select_change_current_item",
                    this.items[index_new_item]
                );
            }
        }
    },

    computed: {
        current_item() {
            if (typeof this.items[this.current_item_value] !== "undefined") {
                return this.items[this.current_item_value];
            } else {
                return {
                    title: "Элемент не найден",
                    value: false
                };
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ui-custom-select {
    width: 134px;
    .current-value {
        padding: 2px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 8px;
        position: relative;

        .arrow {
            width: 10px !important;
            display: inline-block;
            transform: rotate(0);
            -webkit-transform: rotate(0);
            transition: all 0.3s;

            &.reverse {
                transform: rotate(180deg);
            }
        }

        .values {
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            width: 116px !important;
            display: none;
            list-style: none;
            background: #fff;
            box-shadow: 0 4px 14px rgba(218, 221, 218, 0.4);
            border: 2px solid #eeeded;
            border-radius: 12px;
            padding: 8px 0;
            transform: translate(0, 100%);
            z-index: 30;
            &.open {
                display: block;
            }

            .value {
                padding: 10px 15px;
                cursor: pointer;
                &:hover {
                    background: rgb(238, 237, 237);
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>