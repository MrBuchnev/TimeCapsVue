<template lang="html">
    <div class="motto">
        <div class="row">
            <div class="motto__column">
                <h2>
                    The possibilities of the content you send are endless - from heartfelt messages
                    to predictions and motivational messages. It's fun. It's meaningful. It's uplifting.
                </h2>
            </div>
            <div class="motto__slider">
                <flickity-slider
                    ref="flickity"
                    :options="flickityOptions">
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="carousel-cell">
                        <img :src="image.src" :alt="`${'portrait-' + index}`" />
                    </div>
                </flickity-slider>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./Motto.js"></script>
<style src="./Motto.scss" lang="scss" scoped></style>
