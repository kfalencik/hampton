<template>
    <section id="services" class="bg-lightGrey" style="overflow: hidden">
        <div class="max-w-8xl mx-auto text-center">
            <h2 class="mb-0">Services</h2>
            <small>With years of expertise in the industry, we have successfully delivered projects of all scales and complexities. At every step of the way, from design to completion, we are with you.</small>
            <div class="services-wrapper my-4 mt-10" :class="[{'columns-2': viewport.matches('tablet', 'desktop')}, {'columns-3': viewport.isGreaterOrEquals('desktopMedium')}]">
                <div v-for="(service, item) in services" :key="`service-${index}`" class="aspect-square py-10 text-center px-6">
                    <i class="text-5xl text-secondary" :class="service.icon"></i>
                    <h3 class="my-4">{{ service.heading }}</h3>
                    <small>{{ service.subheading }}</small>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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