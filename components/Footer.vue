<template>
    <footer class="bg-primary text-white p-5 py-8 text-center">
        <div class="max-w-8xl mx-auto">
            <NuxtLink class="grow" to="/">
                <img class="mx-auto mb-4" src="/img/logo.jpg" style="height: 40px;" alt="Hamptons Construction Group" />
            </NuxtLink>
            <div class="text-xs">© Copyright Hamptons Construction Group {{ year }}</div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';

    const year = ref(new Date().getFullYear())
</script>