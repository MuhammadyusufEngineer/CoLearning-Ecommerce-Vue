<template>
    <div class="invisible-layer" v-show="is_open" @click="is_open = !is_open"></div>
    <div class="ui-custom-select">
        <div class="current-value" @click="is_open = !is_open">
            {{ current_item.title }}
            <div class="arrow" :class="{ reverse: is_open }">
                <img src="../assets/img/chevron-down.svg" alt="">
            </div>

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
            is_open: false,
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
        },
    },

    computed: {
        current_item() {
            if (typeof this.items[this.current_item_value] !== "undefined") {
                return this.items[this.current_item_value];
            } else {
                return {
                    title: "Element did not found",
                    value: false
                };
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.invisible-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 1000%;
}
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
            z-index: 9999;

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