<template>

    <a href="#" class="product-box">
        <div class="product-imgBox">
            <div class="product-sale-tag tag tag-selected">-36%</div>
        </div>
        <div class="product-content">
            <div>
                <div class="product-header">
                    <h4 class="product-title">Product title</h4>
                    <p class="product-desc">Space for a small product description</p>
                    <div class="product-rating">
                        <img src="@/assets/img/icon-star-stroke.svg" alt="icon star" v-for="index in 5" :key="index">
                    </div>
                </div>
                <table class="table-auto product-about">
                    <tr>
                        <td>Fresheness</td>
                        <td class="product-status"><span class="text-[#6A983C]">New</span> (Extra new)</td>
                    </tr>
                    <tr>
                        <td>Farm</td>
                        <td class="product-pharm">Grocery Tarm Fields</td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td class="product-delivery">Europe</td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td><span class="text-[#6A983C]">320</span> pcs</td>
                    </tr>
                </table>
            </div>
            <div class="product-price-and-btn">
                <div>
                    <p class="product-price">36.99 USD</p>
                    <p class="product-sale">48.56</p>
                </div>
                <div class="product-shipping">
                    <p class="product-shipping-status">Free shipping</p>
                    <p class="product-shipping-duration">Delivery in day</p>
                </div>
                <div class="product-btns">
                    <button class="btn-buy btn-success btn-md btn-animate">Product detail <img
                            src="@/assets/img/chevron-right.svg" alt="chevron right"></button>
                    <button class="btn-gray btn-md"><img class="w-4 h-4" src="@/assets/img/icon-heart.svg"
                            alt="icon heart">Add
                        to
                        wishlist</button>
                </div>
                <button class="btn-buy btn-success btn-animate btn-sm buy-now">Buy now</button>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    name: 'Product',
   
}
</script>