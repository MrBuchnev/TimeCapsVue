<template lang="html">
    <div class="capsule">
        <div class="row">
            <div class="capsule__images col">
                <div class="capsule__image-container">
                    <img class="capsule__image capsule__image--main" src="../../assets/capsule.png" />
                    <countdown class="capsule__countdown" :time="50 * 18 * 60 * 60 * 1000">
                        <template slot-scope="props">{{ props.days }}d : {{ props.hours }}h : {{ props.minutes }}m : {{ props.seconds }}s</template>
                    </countdown>
                </div>
                <img class="capsule__image capsule__image--rect1" src="../../assets/rectangular.png" />
                <img class="capsule__image capsule__image--rect2" src="../../assets/rectangular.png" />
                <img class="capsule__image capsule__image--rect3" src="../../assets/rectangular.png" />
                <div class="capsule__image capsule__image--shadow"></div>
            </div>
            <div class="capsule__description">
                <h1>
                    The concept of Timecaps is simple and elegant
                </h1>
                <h3>
                    TimeCaps is a free video app that allows you to create a time capsule, a video message that you
                    send to any of your phone contacts to be unlocked on a date decided by you.
                </h3>
                <div class="row">
                    <div class="capsule__paragraph col">
                        <p class="capsule__number">01</p>
                        <p class="capsule__text">
                            TimeCaps is a new type of social media app. It build excitement and anticipation
                            around the unlocking of a future moment, rather than giving users instant gratification.
                            You can send messages to one person, a group or to yourself.
                        </p>
                    </div>
                    <div class="capsule__paragraph col">
                        <p class="capsule__number">02</p>
                        <p class="capsule__text">
                            When you send a video time capsule, the recipient sees a notification with a single image
                            from the video. He or she will wonder what you have said in your message but will have to
                            wait - from five minutes to 50 years!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-countdown.js"></script>
<script>Vue.component(VueCountdown.name, VueCountdown);</script>

<script type="text/javascript" src="./Capsule.js"></script>
<style src="./Capsule.scss" lang="scss" scoped></style>
