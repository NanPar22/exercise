<template>
  <div
    class="w-full h-[10%] bg-green-600 fiexd dropshadow_Header p-2 flex justify-center items-center gap-20"
  >
    <div class="flex gap-14">
      <NuxtLink to="/">
        <div class="text-[25px] font-bold text-white drop-shadow-xl">
          หน้าแรก
        </div>
      </NuxtLink>
      <NuxtLink to="/Exercise_Poses">
        <div class="text-[25px] font-bold text-white drop-shadow-xl">
          ท่าบริหาร
        </div>
      </NuxtLink>
    </div>
    <img
      src="public/Images/ตรามหาวิทยาลัยราขภัฎอุบลราชธานี.png"
      alt=""
      class="h-[150px] mt-16"
    />
    <div class="flex gap-14">
      <NuxtLink to="/Profile">
        <div class="text-[25px] font-bold text-white drop-shadow-xl">
          ความเป็นมา
        </div>
      </NuxtLink>
      <NuxtLink to="/Author">
        <div class="text-[25px] font-bold text-white drop-shadow-xl">
          ผู้จัดทำ
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
