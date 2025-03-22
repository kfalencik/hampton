<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

definePageMeta({
    layout: 'simple'
})
</script>

<template>
    <div class="bg-secondary w-screen h-screen p-5">
        <NuxtLink class="text-center" to="/">
            <img class="mx-auto" src="/img/logo.jpg" alt="Hampton Construction Group" style="height: 90px"/>
        </NuxtLink>

        <v-container>
            <div class="bg-white max-w-4xl mx-auto rounded-lg p-10 mt-10">
                {{ error }}
                <v-alert
                    text="Sie haben eine Seite aufgerufen, die nicht oder nicht mehr existiert. "
                    title="Die von Ihnen aufgerufene Seite existiert nicht"
                    type="warning"
                />
            </div>
        </v-container>
    </div>
</template>