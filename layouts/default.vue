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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    html {
        color: #686868;
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif !important;
        font-weight: 400;
    }

    h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5 {
        color: #212121;
        font-family: "Quattrocento Sans", serif !important;
        font-weight: bold;
    }

    h1, .h1 {
        font-size: 84px;
    }

    h2, .h2 {
        font-size: 40px;
        line-height: 1.23;
        margin-bottom: 15px;
        letter-spacing: -.03em;
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
        width: 70px;
        height: 1px;
        border-top: 1px solid #e1e1e1;

        &--vertical {
            height: 70px;
            width: 1px;
            border-left: 1px solid #e1e1e1;
        }
    }

    .divider-block {
        padding-left: 125px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 23px;
            left: 0;
            width: 70px;
            border-top: 1px solid #e1e1e1;
        }
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
