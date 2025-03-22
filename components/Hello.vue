<template>
    <div id="hello" :class="{'py-20': viewport.isGreaterOrEquals('desktop')}" style="overflow: hidden">
        <div class="max-w-8xl p-5 py-15 mx-auto flex flex-col relative items-center" :class="{'flex-row': viewport.isGreaterOrEquals('desktop')}">
            <div class="hello-text">
                <div class="divider-block">
                    <h2>Hampton Construction Group is a renowned construction company based in Naples, Florida</h2>
                    <div>
                        <p class="text-black my-8">Founded by three friends who combined their unique experiences to create a company capable of handling the most demanding projects. </p>
                        <p>We specialize in home construction and high-end renovations, with a strong emphasis on top-quality and precision. Our projects are distinguished by attention to detail, the use of the finest materials, and unique solutions that meet the expectations of even the most discerning clients.</p>
                    </div>
                </div>
            </div>
            <div class="grow hello-pictures">
                <div class="hello-pictures__picture">
                    <img class="mb-5" src="/img/hello-1.jpeg" />
                </div>
                <div class="hello-pictures__picture">
                    <img src="/img/hello-2.jpeg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const viewport = useViewport()
</script>

<style scoped>
    .hello-text {
        width: 65%;

        @media screen and (max-width: 1024px) {
            width: 100%;
            text-align: center;
        }
    }
    .hello-pictures {
        margin-left: 30px;
        position: relative;

        @media screen and (max-width: 1024px) {
            margin-left: 0;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            display: flex;
        }

        @media screen and (min-width: 1400px) {
            display: flex;
            position: absolute;
            left: 50px;
            margin-left: 50px;
            transform: translateX(65%);
        }

        &__picture {
            height: 400px;
            width: 100%;
            margin: 15px 0;

            @media screen and (min-width: 768px) and (max-width: 1024px) {
                width: 50%;
                margin: 15px;
            }

            @media screen and (min-width: 1400px) {
                margin-right: 30px;
            }

            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }
</style>