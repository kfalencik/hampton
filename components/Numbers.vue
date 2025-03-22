<template>
    <div class="w-full p-5 py-15 bg-secondary text-primary">
        <div class="max-w-8xl mx-auto pb-10 text-center uppercase">
            <h2 class="subheading">Hollenders in Zahlen</h2>
        </div>
        <div class="max-w-8xl mx-auto text-center">
        </div>
    </div>
</template>

<script setup>
const slides = computed(() => {
    return [
    {
        icon: 'bi-people',
        number: dataStore.numbers ? dataStore.numbers.number1 : 0,
        heading: 'Aktive Kundengesuche',
        subheading: null
    },
    {
        icon: 'bi-file-text',
        number: dataStore.numbers ? dataStore.numbers.number2 : 0,
        heading: 'Versendete Exposés',
        subheading: 'in den letzten 6 Monaten'
    }
    ,{
        icon: 'bi-door-open',
        number: dataStore.numbers ? dataStore.numbers.number3 : 0,
        heading: 'Besichtigungen',
        subheading: 'in den letzten 12 Monaten'
    }
    ,{
        icon: 'bi-person-raised-hand',
        number: dataStore.numbers ? dataStore.numbers.number4 : 0,
        heading: 'Mitarbeiter',
        subheading: null
    },
    {
        icon: 'bi-geo-fill',
        number: dataStore.numbers ? dataStore.numbers.number5 : 0,
        heading: 'Standorte',
        subheading: null
    }
]
})
</script>