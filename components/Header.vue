<template>
    <header class="header font-bold top-0 w-screen z-20 uppercase text-sm" :class="{'sticky': viewport.isLessThan('tablet')}">
        <template v-if="viewport.isGreaterOrEquals('tablet')">
            <div class="max-w-8xl mx-auto h-full">
                <nav class="px-6 py-4 h-full flex flex-auto justify-between items-center">
                    <NuxtLink to="/">
                        <img src="/img/logo-headline.jpg" alt="Hamptons Construction Group" style="height: 90px"/>
                    </NuxtLink>
                    <div class="grow"></div>
                    <div>
                        <NuxtLink v-for="(link, index) in menuLinks" class="ml-10" :key="`menu-links-${index}`" :to="link.link" :class="{'text-primary': activeLink === index}">{{ link.name }}</NuxtLink>
                    </div>
                </nav>
            </div>
            <div class="header-sticky text-xs" :class="{'header-sticky--active': fixed}">
                <div class="max-w-8xl mx-auto h-full">
                    <nav class="px-6 py-4 h-full flex flex-auto justify-between items-center">
                        <NuxtLink class="grow mr-20" to="/">
                            <img src="/img/logo.jpg" alt="Hamptons Construction Group" style="height: 40px"/>
                        </NuxtLink>
                        <div class="grow"></div>
                        <div>
                            <NuxtLink v-for="(link, index) in menuLinks" class="ml-10" :key="`menu-links-${index}`" :to="link.link" :class="{'text-primary': activeLink === index}">{{ link.name }}</NuxtLink>
                        </div>
                    </nav>
                </div>
            </div>
        </template>
        <div v-else class="flex py-3 p-5 justify-between items-center h-full sticky">
                <div class="spacer" style="width: 36px;"></div>
                <NuxtLink class="z-55" to="/" @click="mobileMenu = false">
                    <img src="/img/logo.jpg" alt="Hamptons Construction Group" style="height: 40px"/>
                </NuxtLink>
                <button class="z-55" @click="mobileMenu = !mobileMenu"><i :class="`${mobileMenu ? 'bi-x-lg' : 'bi-list'} text-3xl`"></i></button>
                <div v-if="mobileMenu" class="overlay fixed left-0 top-0 bottom-0 right-0 z-50 overflow-hidden" @click="mobileMenu = !mobileMenu">
                    <nav class="mt-30 flex flex-col text-center text-2xl">
                        <NuxtLink v-for="(link, index) in menuLinks" :key="`menu-links-${index}`" :to="link.link" class="text-white my-3":class="{'text-primary': activeLink === index}">{{ link.name }}</NuxtLink>
                    </nav>
                </div>
            </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue';

    const viewport = useViewport()

    const fixed = ref(false);
    const mobileMenu = ref(false);
    const activeLink = ref(0)
    const scrollPosition = ref(0)
    const prevScrollPosition = ref(0)

    const menuLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About us',
            link: '#hello'
        },
        {
            name: 'Services',
            link: '#services'
        },
        {
            name: 'Our Team',
            link: '#our-team'
        },
        {
            name: 'Contact',
            link: '#about-us'
        }
    ]
    
    const handleScroll = () => {
        prevScrollPosition.value = scrollPosition.value
        scrollPosition.value = window.scrollY || window.pageYOffset;
        fixed.value = scrollPosition.value > 60
    };

    onMounted(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
    });
</script>

<style scoped>
    .header {
        background-color: white;
        transition: transform 0.3s linear;
        height: 160px;

        @media screen and (max-width: 768px) {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        &-sticky {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
            height: 80px;
            width: 100%;
            z-index: 999;
            background: white;
            transform: translateY(-80px);
            transition: transform 0.4s ease;

            &--active {
                transform: translateY(0px);
            }
        }

        @media screen and (max-width: 768px) {
            height: 80px;
        }
    }

    .overlay {
        background: rgba(2,78,123,0.4);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }
</style>