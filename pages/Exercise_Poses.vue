<template>
  <div class="h-full w-full p-2 mt-14 flex flex-col items-center">
    ท่าบบริหาร

    <div class="group  absolute bottom-5 right-5">
      <NuxtLink to="/Warning">
        <i
          class="fa-solid fa-circle-exclamation text-[50px] text-red-600 drop-shadow-lg"
        ></i>
      </NuxtLink>
      <div
        class="absolute border-1 bg-red-300 text-white    bottom-full mb-2 right-1/2 translate-x-1/2 w-max px-2 py-1 text-sm font-bold   rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        คำเตือน
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
