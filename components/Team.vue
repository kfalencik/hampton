<template>
    <section id="our-team" class="bg-white" style="overflow: hidden">
        <div class="max-w-8xl mx-auto">
            <div class="divider-block">
            <h2 class="mb-0">Meet Our Team!</h2>
            <p class="text-grey-darken-3 mx-auto mt-2 mb-16">Great projects start with great people. Our team is built on trust, skill, and a shared commitment to doing things the right way—bringing vision and expertise to every job.</p>
        </div>
            <div class="team-wrapper">
                <div v-for="(person, index) in team" :key="`team-item-${index}`" class="mb-10 py-5" :class="[{'pa-10': viewport.isGreaterOrEquals('desktop')}]">
                    <div class="text-center mx-auto border-2" :class="[{'float-left mr-6': viewport.isGreaterOrEquals('desktop')}]" style="border-radius: 100%; overflow: hidden; width: 200px; height: 200px;">
                        <img :src="`/img/${person.img}`" :alt="person.name" />
                    </div>
                    <div>
                        <h3 class="mt-4">{{ person.name }}</h3>
                        <small class="text-primary">{{ person.role }}</small>
                        <p class="mt-3">{{ person.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const viewport = useViewport()

    const team = computed(() => {
        return [
        {
            img: 'eugene.jpeg',
            name: 'Eugene Pratasenia',
            role: 'Co-founder and CEO',
            description: 'Eugene is responsible for ensuring that every aspect of the project comes together seamlessly. With his extensive experience in managing multiple businesses, he coordinates with suppliers and contractors, ensuring all components are perfectly aligned, contributing to the company\'s commitment to excellence.'
        },
        {
            img: 'peter.jpeg',
            name: 'Peter Falencik',
            role: 'Co-Founder & President',
            description: 'Peter is responsible for shaping the vision of each project and overseeing its execution, ensuring every detail meets the highest standards. With extensive experience in modern, innovative design, he has successfully led the company in Europe since 2000.'
        },
        {
            img: 'default-user.png',
            name: 'Sergey Pratasenia',
            role: 'Project Manager',
            description: 'Sergey is responsible for overseeing projects and ensuring they are completed on time and within budget. With a keen eye on the financial aspects, he ensures that every project runs smoothly and efficiently.'
        }
    ]
    })
</script>