<template>
    <footer class="bg-darkGrey text-white p-5 py-8 text-center">
        <div class="max-w-8xl mx-auto">
            <NuxtLink class="grow" to="/">
                <img class="mx-auto mb-4" src="/img/logo.jpg" height="40" alt="Hampton Construction Group" />
            </NuxtLink>
            <div class="text-xs">© Copyright Hampton Construction Group {{ year }}</div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';

    const year = ref(new Date().getFullYear())
</script>