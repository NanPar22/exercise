<template>
  <div
    class="w-full h-[6%] bg-black/10 drop-shadow-2xl    p-2 flex justify-center items-center gap-20 "
  >
    <div class="flex gap-14">
      <NuxtLink to="/">
        <div class="text-[25px] font-bold text-[#3c6849]">
          หน้าแรก
        </div>
      </NuxtLink>
      <NuxtLink to="/Exercise_Poses">
        <div class="text-[25px] font-bold text-[#3c6849]">
          ท่าบริหาร
        </div>
      </NuxtLink>
    </div>
    <!-- <img
      src="public/Images/ตรามหาวิทยาลัยราขภัฎอุบลราชธานี.png"
      alt=""
      class="h-[150px] mt-16"
    /> -->
    <div class="flex gap-14">
      <NuxtLink to="/Profile">
        <div class="text-[25px] font-bold text-[#3c6849]">
          ความเป็นมา
        </div>
      </NuxtLink>
      <NuxtLink to="/Author">
        <div class="text-[25px] font-bold text-[#3c6849]">
          ผู้จัดทำ
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
