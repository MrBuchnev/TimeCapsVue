<template lang="html">
    <div class="navigation" :class="{ 'navigation--hidden': !showNavigation }">
        <a class="navigation__logo-container" href="#">
            <img class="navigation__logo" src="../../assets/logo.png" />
        </a>
        <input v-model="navMenuOpen" type="checkbox" class="navigation__checkbox" id="navi-toggle">
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Help & Support</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Cookie policy</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Privacy Policy</a>
                </li>
                <li class="navigation__item navigation__item--ios">
                    <img src="../../assets/apple.png" />
                    <a href="#" class="navigation__link">Download iOs</a>
                </li>
                <li class="navigation__item navigation__item--android">
                    <img src="../../assets/android.png" />
                    <a href="#" class="navigation__link">Download Android</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script type="text/javascript" src="./Navigation.js"></script>
<style src="./Navigation.scss" lang="scss" scoped></style>
