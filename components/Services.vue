<template>
    <section id="services" class="bg-lightGrey" style="overflow: hidden">
        <div class="max-w-8xl mx-auto text-center">
            <h2 class="mb-0">Services</h2>
            <small>With years of expertise in the industry, we have successfully delivered projects of all scales and complexities. Find out what our company can do for you</small>
            <div class="services-wrapper my-4 mt-10" :class="[{'columns-2': viewport.matches('tablet', 'desktop')}, {'columns-3': viewport.isGreaterOrEquals('desktopMedium')}]">
                <div v-for="(service, item) in services" :key="`service-${index}`" class="aspect-square py-10 text-center px-6">
                    <i class="text-5xl" :class="service.icon"></i>
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
            icon: 'bi-people',
            heading: 'General Contracting',
            subheading: 'We have a long list of professional contractors, with whom our engineers and architects enjoy to work on a majority of our projects!'
        },
        {
            icon: 'bi-building',
            heading: 'Building Information Modeling',
            subheading: 'Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.'
        }
        ,{
            icon: 'bi-palette',
            heading: 'Design & Build',
            subheading: 'If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.'
        }
        ,{
            icon: ' bi-tools',
            heading: 'Construction Services',
            subheading: 'Our customers love the pace/quality tempo that we show during each of the principal construction processes!'
        },
        {
            icon: 'bi-hammer',
            heading: 'Pre-construction Services',
            subheading: 'We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand…'
        },
        {
            icon: 'bi-bricks',
            heading: 'Construction Management',
            subheading: 'Professional construction project management is essential for facilitating and directing the entire process to achieve ideal results.'
        }
    ]
    })
</script>