<template>
    <div class="slideshow w-full flex relative">
        <swiper
            :slides-per-view="1"
        >
            <swiper-slide v-for="(slide, index) in slides" :key="`slideshow-slide-${index}`">
                <img :src="slide.img" />
                <div class="overlay absolute h-full left-0">
                    <div class="max-w-8xl mx-auto text-white">
                        <div class="max-w-5xl">
                            <h1 class="text-white">{{ slide.heading }}</h1>
                            <p>{{ slide.subheading }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="slideshow__sidebar bg-white fixed z-10 absolute flex flex-column items-center">
            <div class="small text-black text-uppercase font-bold text-spacing-340">Hamptons Construction Group</div>
            <div class="divider divider--vertical"></div>
            <ul class="list text-center">
                <li><a href="#" class="bi-facebook"></a></li>
                <li><a href="#" class="bi-twitter"></a></li>
                <li><a href="#" class="bi-linkedin"></a></li>
                <li><a href="#" class="bi-instagram"></a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const slides = ref([
    {
        img: '/img/slide-0.jpg',
        heading: 'Your dreams, crafted with passion and precision',
        subheading: 'Our projects are distinguished by attention to detail, the use of the finest materials, and unique solutions that meet the expectations of even the most discerning clients.',
        link: false
    },
    {
        img: '/img/slide1.jpeg',
        heading: ' Luxuriöses Villenanwesen im exquisiten Neuengland-Stil mit prachtvollen Gartenanlagen',
        subheading: 'München – Obermenzing / Villenkolonie Hartmannshofen',
        link: false
    },
    {
        img: '/img/slide1.jpeg',
        heading: 'Als Immobilienmakler nicht nur in München zu Hause',
        subheading: 'Berlin – Insel Schwanenwerder',
        link: false
    }
])
</script>

<style scoped>
    .slideshow {
        height: calc(100vh - 160px);

        .overlay {
            width: calc(100% - 80px);
            padding: 40px;
            top: 0;
            background-color: rgba(2,78,123,0.7);

            @media screen and (min-width: 1024px) {
                width: calc(100% - 160px);
                padding-left: 120px;
                padding-top: 25vh;
            }

            @media screen and (min-width: 1600px) {
                padding-left: 100px;
                width: calc(100% - 140px);
            }
        }
    
        &__sidebar {
            justify-content: center;
            width: 6.25vw;
            padding: 15px;
            top: 0;
            bottom: 0;
            left: 0;
            min-width: 80px;

            .small {
                writing-mode: vertical-lr;
                transform: rotate(180deg);
                white-space: nowrap;
            }

            @media screen and (max-width: 1024px) {
                width: 100%;
                position: relative;
                top: auto;
                bottom: auto;
                left: auto;

                .small {
                    writing-mode: lr;
                    transform: rotate(0);
                    margin: 10px 0;
                }

                .divider {
                    display: none;
                }

                ul {
                    display: flex;

                    li {
                        margin: 0 10px;
                    }
                }
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 1024px) {
            display: block;
            height: auto;
        }
    }
</style>
