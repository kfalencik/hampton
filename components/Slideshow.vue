<template>
    <div class="slideshow w-full flex relative">
        <swiper
            class="h-full"
            :modules="modules"
            autoplay
            loop
            :slides-per-view="1"
            :pagination="{ clickable: true }"
        >
            <swiper-slide v-for="(slide, index) in slides" :key="`slideshow-slide-${index}`">
                <img :src="slide.img" />
                <div class="overlay absolute h-full left-0">
                    <div class="max-w-8xl mx-auto text-white px-4">
                        <div class="max-w-5xl">
                            <h1 class="text-white">{{ slide.heading }}</h1>
                            <p>{{ slide.subheading }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="slideshow__sidebar bg-white fixed z-10 absolute flex flex-column items-center">
            <div class="small text-black text-uppercase font-bold text-spacing-340 py-3">Hamptons Construction Group</div>
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
import { Autoplay, Pagination } from  'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const viewport = useViewport()

const slides = ref([
    {
        img: '/img/slide-2.jpeg',
        heading: 'Your dreams, crafted with passion and precision',
        subheading: 'Our projects are distinguished by attention to detail, the use of the finest materials, and unique solutions that meet the expectations of even the most discerning clients.',
    },
    {
        img: '/img/slide-1.jpeg',
        heading: 'Crafting Homes, Creating Memories',
        subheading: 'Each project is more than construction; it\'s about building spaces where memories are made.',
    },
    {
        img: '/img/slide-3.jpeg',
        heading: 'Precision in Every Detail, Excellence in Every Build',
        subheading: 'We focus on the fine details to deliver exceptional quality in every project',
    }
])

const modules = [Autoplay, Pagination]
</script>

<style>
    .slideshow {
        height: calc(100vh - 160px);
        min-height: 500px;

        .swiper-button-prev {
            left: 25px;
        }

        .swiper-button-next {
            right: 25px;
        }

        .swiper-pagination {
            bottom: 10px !important;

            @media screen and (min-width: 1024px) {
                bottom: 60px !important;
            }
        }

        .overlay {
            width: calc(100% - 60px);
            padding: 30px;
            padding-top: 8vh;
            top: 0;
            background-color: rgba(2,78,123,0.4);

            @media screen and (min-width: 768px) {
                padding-top: 15vh;
            }

            @media screen and (min-width: 1024px) {
                padding-top: 25vh;
            }

            @media screen and (min-width: 1400px) {
                width: 100%;
                padding-left: 0;
                padding-right: 0;
            }
        }

        .swiper {
            margin-left: 6.25vw;
            min-height: 500px;

            @media screen and (max-width: 1024px) {
                margin-left: 0;
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
            min-height: 500px;
            filter: blur(3px)
        }

        @media screen and (max-width: 1024px) {
            display: block;
            height: auto;
        }
    }
</style>
