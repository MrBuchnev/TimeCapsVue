<template lang="html">
    <div class="howto">
        <div class="row">
            <div class="howto__heading">
                <h1>
                    How to create a time capsule with your TimeCaps Mobile App:
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="howto__container col">
                <div class="howto__images">
                    <img class="howto__circle" src="../../assets/circle.png" alt="">
                    <img class="howto__phone" src="../../assets/phone.png" alt="">
                </div>
                <div class="howto__slider">
                    <flickity-slider
                        ref="flickity"
                        :options="flickityOptions">
                        <div
                            v-for="(cell, index) in cells"
                            :key="index"
                            class="carousel-cell">
                            <div class="cell-contents">
                                <div class="image-container">
                                    <img :src="cell.src" alt="picture">
                                </div>
                                <div class="step-info">
                                    <h3>Step {{ cell.step }}</h3>
                                    <p>
                                        {{ cell.text }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </flickity-slider>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./HowTo.js"></script>
<style src="./HowTo.scss" lang="scss" scoped></style>
