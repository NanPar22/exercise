<template>
  <div class="w-full flex flex-col bg-[#50C878]/20">
    <!-- ส่วนหัวข้อ -->
    <div class="w-full h-screen flex flex-col items-center justify-center  bg-cover bg- bg-[url('Images/82a3c332-cc71-4f00-9282-722e4ecb5782-pica.png')] ">

      <div class="text-center space-y-6 p-4 max-w-7xl mx-auto drop-shadow-xl h-[60%] flex justify-center items-center ">
       <div class=" bg-black/30 rounded-lg  p-10 flex flex-col gap-10 mt-10     ">
        <h1
          class="font-extrabold text-6xl text-[#f3a73c]  drop-shadow-2xl  leading-snug tracking-wide"
        >
          โครงการโปรแกรมการบริหารร่างกายสำหรับผู้สูงอายุแก้อาการปวดหลัง
        </h1>
        <h2
          class="font-semibold text-2xl text-[#ffe2b7] drop-shadow-lg leading-relaxed max-w-[] mx-auto"
        >
          ภายใต้โครงการพัฒนาโปรแกรมออกกำลังกายด้วยกระบวนการวิศวกรสังคมเพื่อยกระดับคุณภาพชีวิตผู้สูงอายุ
        </h2>
       </div>
      </div>

      <!-- โลโก้มหาวิทยาลัย -->
      <div class="flex flex-wrap gap-8 justify-center items-center mt-[20px]  w-full h-[30] ">
        <img
          src="public/Images/ตรามหาวิทยาลัยราขภัฎอุบลราชธานี.png"
          alt="ตรามหาวิทยาลัย"
          class="w-36 h-36  object-contain rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="public/Images/1.png"
          alt="โลโก้ที่ 1"
          class="w-36 h-36 object-contain rounded-full  transition-all duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="public/Images/รูปภาพ2.png"
          alt="โลโก้ที่ 2"
          class="w-36 h-36 object-contain bg-white rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>

    <!-- วิดีโอ -->
    <div class="flex gap-2 pt-5  h-screen ">
      <div class="flex flex-col gap-10 w-[60%] h-[100%] p-5  ">
        <div class="relative w-full h-[68%] bg-cover rounded-3xl ">
          <video
            ref="videoRef"
            class="w-full h-auto object-cover rounded-3xl"
            autoplay
            muted
            loop
            playsinline
          >
            <source
              src="/Video/video_555978068754694196-RghvyHx4.MP4"
              type="video/mp4"
            />
          </video>

          <!-- ปุ่มเปิดเสียง -->
          <button
            @click="toggleMute"
            class="absolute bottom-[2px] right-6 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 text-gray-900 font-semibold text-lg shadow-md hover:bg-white transition-all duration-300 ease-in-out"
          >
            {{ isMuted ? "🔇 เปิดเสียง" : "🔊 ปิดเสียง" }}
          </button>
        </div>
        <div class="w-full h-[50%]">
          <p class="  p-5 font-semibold text-[25px] text-black   bg-black/10 rounded-lg    ">
          ที่มาและความสำคัญ จากกลุ่มนักศึกษาแกนนำคณะแพทย์แผนไทยและแพทย์ทางเลือก
          สาขาการแพทย์แผนไทยมหาวิทยาลัยราชภัฏอุบลราชธานีได้ไปสำรวจบรริบถชุมชนและเก็บข้อมูลที่ตำบลนาเยีย
          อำเภอนาเยีย จังหวัดอุบลราชธานี โดยใช้เครื่องมือวิศวกรสังคม เช่น
          เครื่องมือฟ้าประทาน เครื่องมือนาฬิกาชีวิต เครื่องมือไทม์ไลน์พัฒนาการ
          เครื่องมือไทม์ไลน์กระบวนการ เครื่องมือ M.I.C Model.
          ทั้งนี้ด้วยกระบวนการวิศวกรสังคม
        </p>
        </div>
      </div>
      <div class="flex justify-center items-center w-[40%]">
        <img
          src="public/Images/LINE_ALBUM_ท่ากายบริหาร_250423_1.jpg"
          alt=""
          class="h-[900px]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const videoRef = ref<HTMLVideoElement | null>(null);
const isMuted = ref(true);
const contentDiv = ref<HTMLElement | null>(null);

// Toggle mute on video
const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted;
    isMuted.value = videoRef.value.muted;
  }
};

// IntersectionObserver to trigger animation on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentDiv.value?.classList.remove("opacity-0", "translate-y-16");
          contentDiv.value?.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the div is in view
    }
  );

  if (contentDiv.value) {
    observer.observe(contentDiv.value);
  }
});
</script>

<style scoped>
/* เพิ่มสไตล์ที่ทันสมัยและสวยงาม */
</style>
