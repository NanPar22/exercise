<template>
  <div class="w-full h-full pt-[5%] flex flex-col bg-[#F4F4F9] overflow-hidden">
    <!-- หัวข้อ 'ผู้จัดทำ' -->
    <h2
      class="text-center mb- font-extrabold text-[48px] text-[#f3a73c] drop-shadow-lg animate-slideUp"
    >
      ผู้จัดทำ
    </h2>

    <!-- รายชื่อผู้จัดทำ -->
    <ul
      class="animate-slideUp pl-10 text-[22px] pt-2 text-[#5c4d3e] text-left space-y-2 mx-auto max-w-[600px]"
    >
      <li>นายเศรษฐพงศ์ แสนโคคตร</li>
      <li>นางสาว อัจฉรา สีสินธุ์</li>
      <li>นางสาวเพ็ญชิตา ไชยพรม</li>
      <li>นางสาวฐิตาพร พรมโพธิน</li>
      <li>นางสาวหทัยรัตน์ ยาตรา</li>
      <li>นาย ประสพชัย รอบโลก</li>
      <li>นาย กษิดิ์เดช โคตุทา</li>
      <li>นางสาวลักษมี โคตวงศ์</li>
      <li>นางสาวสุริยงค์ ผาเพศ</li>
      <li>นางาพรพิชญา ชาลี</li>
    </ul>

    <!-- หัวข้อ 'อาจารย์ที่ปรึกษา' -->
    <h2
      class="text-center mt-4 font-extrabold text-[48px] text-[#f3a73c] drop-shadow-lg animate-slideUp"
    >
      อาจารย์ที่ปรึกษา
    </h2>

    <!-- รายชื่ออาจารย์ที่ปรึกษา -->
    <ul
      class="animate-slideUp ml-[800px]  text-[22px] pt-2 text-[#5c4d3e] text-left space-y-2 mx-auto max-w-[600px] "
    >
      <li>อาจารย์ ดร.สุพรรณฉัตร หนูสวัสดิ์</li>
      <li>ผู้ช่วยศาสตราจารย์ ดร.จินตนา จุลทัศน์</li>
      <li>ผู้ช่วยศาสตราจารย์สุภาวดี นนทพจน์</li>
      <li>ผู้ช่วยศาสตราจารย์กัญญารัตน์ เป็งงำเมือง</li>
      <li>ผู้ช่วยศาสตราจารย์พิชชานันท์ เธียรทองอินทร์</li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 1.2s ease-out forwards;
}

/* ตั้งค่าช้าสำหรับ p หรือ ul ที่ต้องการให้แสดงทีละส่วน */
ul li {
  animation-delay: 0.4s;
}
ul li:nth-child(2) {
  animation-delay: 0.6s;
}
ul li:nth-child(3) {
  animation-delay: 0.8s;
}
ul li:nth-child(4) {
  animation-delay: 1s;
}
ul li:nth-child(5) {
  animation-delay: 1.2s;
}
ul li:nth-child(6) {
  animation-delay: 1.4s;
}
ul li:nth-child(7) {
  animation-delay: 1.6s;
}
ul li:nth-child(8) {
  animation-delay: 1.8s;
}
ul li:nth-child(9) {
  animation-delay: 2s;
}
ul li:nth-child(10) {
  animation-delay: 2.2s;
}

h2 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

ul {
  padding-left: 0;
  list-style-type: none;
}
</style>
