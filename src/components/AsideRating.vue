<template>
    <div class="aside-links aside-rating mb-12">
        <h4 class="aside-links__title">Ratings</h4>
        <div class="flex flex-col gap-3">
            <div class="filter-text flex items-center gap-2">
                <input type="checkbox" id="rate5" name="todo" value="todo">
                <label for="rate5" class="flex items-center gap-[4.61px]"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"></label>
            </div>
            <div class="filter-text flex items-center gap-2">
                <input type="checkbox" id="rate1" name="todo" value="todo" checked>
                <label for="rate1" class="flex items-center gap-[4.61px]"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img
                        src="@/assets/img/icon-star-stroke.svg" alt="icon-star"></label>
            </div>
            <div class="filter-text flex items-center gap-2">
                <input type="checkbox" id="rate2" name="todo" value="todo" checked>
                <label for="rate2" class="flex items-center gap-[4.61px]"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg" alt="icon-star"><img
                        src="@/assets/img/icon-star-stroke.svg" alt="icon-star"></label>
            </div>
            <div class="filter-text flex items-center gap-2">
                <input type="checkbox" id="rate3" name="todo" value="todo">
                <label for="rate3" class="flex items-center gap-[4.61px]"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star.svg" alt="icon-star"><img
                        src="@/assets/img/icon-star-stroke.svg" alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg" alt="icon-star"></label>
            </div>
            <div class="filter-text flex items-center gap-2">
                <input type="checkbox" id="rate4" name="todo" value="todo">
                <label for="rate4" class="flex items-center gap-[4.61px]"><img src="@/assets/img/icon-star.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg" alt="icon-star"><img
                        src="@/assets/img/icon-star-stroke.svg" alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg"
                        alt="icon-star"><img src="@/assets/img/icon-star-stroke.svg" alt="icon-star"></label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AsideRating'
}
</script>