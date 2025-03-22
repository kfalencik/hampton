<template>
    <transition name="page">
    <div>
        <Header />
        <main class="min-h-screen">
            <slot />
        </main>
        <Footer />
    </div>
    </transition>
</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    html {
        color: #686868;
        scroll-behavior: smooth;
    }

    h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5 {
        color: #212121;
        font-family: "Markazi Text", serif;
    }

    h1, .h1 {
        font-size: 84px;
    }

    h2, .h2 {
        font-size: 40px;
    }

    h3, .h3 {
        font-size: 30px;
    }

    h4, .h4 {
        font-size: 26px;
    }

    h5, .h5 {
        font-size: 24px;
    }

    h6, .h6 {
        font-size: 18px;
    }

    p {
        margin: 0 0 13px;
    }

    .divider {
        margin: 25px 0;
        height: 70px;
        width: 1px;
        border-left: 1px solid #e1e1e1;
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.3s ease;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0.8;
    }
</style>
