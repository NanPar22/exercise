<template>
  <div class="h-full w-full p-2 mt-14 flex flex-col items-center">
    <div class="flex justify-center items-center bg-slate-400 h-[15%] w-[50%]">
      ตราผู้มีส่วนร่วม
    </div>
    <div class="relative w-[300px] h-[300px] mx-auto mt-[200px] mb-[200px]">
      <!-- วงกลมที่มีรูปหมุนรอบปุ่มกลาง -->
      <div class="absolute inset-0 animate-spin-slow">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="absolute w-12 h-12 rounded-full overflow-hidden"
          :style="getImagePosition(index, images.length)"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- ปุ่มกลางวงกลมที่ไม่หมุน -->
      <button
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 flex items-center font-semibold p-2 drop-shadow-lg"
      >
      เริ่มออกกำลังกาย
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images: { src: string; alt: string }[] = [
  { src: "/images/img1.jpg", alt: "Image 1" },
  { src: "/images/img2.jpg", alt: "Image 2" },
  { src: "/images/img3.jpg", alt: "Image 3" },
  { src: "/images/img4.jpg", alt: "Image 4" },
  { src: "/images/img5.jpg", alt: "Image 5" },
  { src: "/images/img6.jpg", alt: "Image 6" },
];

// ฟังก์ชันคำนวณตำแหน่งรูปเป็นวงกลม
const getImagePosition = (index: number, total: number): string => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 200;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  const deg = (angle * 180) / Math.PI;

  return `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-deg}deg);
  `;
};
</script>

<style scoped>
/* หมุนวงกลมที่มีรูปภาพ */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* หมุนวงกลมที่มีรูปภาพ */
.animate-spin-slow {
  animation: spin-slow 50s linear infinite;
}
</style>
