<template>
    <footer class=" text-white" :class="[{'mr-40': viewport.isGreaterOrEquals('desktopWide')}]" style="background-color: #060e2b">
        <Contact />
        <div class="max-w-8xl mx-auto text-center p-5 pb-10">
            <NuxtLink class="grow" to="/">
                <img class="mx-auto mb-4" src="/img/logo.png" style="height: 40px;" alt="Hamptons Construction Group" />
            </NuxtLink>
            <div class="text-xs">© Copyright Hamptons Construction Group {{ year }}</div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';

    const viewport = useViewport()

    const year = ref(new Date().getFullYear())
</script>