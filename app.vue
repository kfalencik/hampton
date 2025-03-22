<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html {
    letter-spacing: 0.03em;
    font-weight: lighter;
  }

  p {
    margin: 0 0 1rem 0;
  }

  .carousel__pagination {
    &-button {
      width: 40px !important;
      height: 5px !important;
      background-color: white !important;

      &:hover {
        background-color: #c7bc8f !important;
      }

      &--active {
        background-color: #c7bc8f !important;
      }
    }
  }
</style>