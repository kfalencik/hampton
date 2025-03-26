<template>
    <section id="services" class="bg-lightGrey" style="overflow: hidden">
        <div class="max-w-8xl mx-auto text-center">
            <h2 class="mb-0">Services</h2>
            <p class="text-grey text-center max-w-4xl mx-auto mt-2 mb-8">With years of expertise in the industry, we have successfully delivered projects of all scales and complexities. At every step of the way, from design to completion, we are with you.</p>
            <div class="services-wrapper my-4 mt-10 items-start" :class="[{'columns-3': viewport.isGreaterOrEquals('desktopMedium')}]">
                <swiper
                    v-if="!viewport.isGreaterOrEquals('desktopMedium')"
                    class="w-full"
                    :modules="modules"
                    loop
                    :space-between="50"
                    :slides-per-view="viewport.isGreaterThan('tablet') ? 2 : 1"
                    :pagination="{ clickable: true }"
                >
                    <swiper-slide v-for="(service, index) in services" :key="`slideshow-slide-${index}`" class="py-10 mb-10 text-center">
                        <i class="text-5xl text-secondary" :class="service.icon"></i>
                        <h3 class="my-4">{{ service.heading }}</h3>
                        <small>{{ service.subheading }}</small>
                    </swiper-slide>
                </swiper>
                <template v-else>
                    <div v-for="(service, item) in services" :key="`service-${index}`" class="aspect-square py-10 text-center px-6">
                        <i class="text-5xl text-secondary" :class="service.icon"></i>
                        <h3 class="my-4">{{ service.heading }}</h3>
                        <small>{{ service.subheading }}</small>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from  'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';

    const modules = [Pagination]

    const viewport = useViewport()

    const services = computed(() => {
        return [
        {
            icon: 'bi-palette',
            heading: 'Interior Design',
            subheading: 'We offer comprehensive interior design services, from initial concepts to final solutions.'
        },
        {
            icon: 'bi-columns-gap',
            heading: 'Floor Finishing',
            subheading: 'We handle the installation of various types of floors, including wooden, stone, and laminate, ensuring durability and aesthetics.'
        }
        ,{
            icon: 'bi-bricks',
            heading: 'Walls and Ceilings',
            subheading: 'We provide wall partition installation, painting, wallpapering, and ceiling finishing, including suspended ceilings.'
        }
        ,{
            icon: ' bi-door-closed',
            heading: 'Windows and Doors',
            subheading: 'We ensure professional installation and replacement of windows and doors, focusing on acoustic and thermal insulation.'
        },
        {
            icon: 'bi-droplet-half',
            heading: 'Kitchens and Bathrooms',
            subheading: 'We carry out complete kitchen and bathroom arrangements, from design to installation, tailored to your individual preferences.'
        },
        {
            icon: 'bi-lightning-charge',
            heading: 'Electrical and Plumbing Work',
            subheading: 'We perform electrical and plumbing installations, modernizations, and repairs.'
        }
    ]
    })
</script>