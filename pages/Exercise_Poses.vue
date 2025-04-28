<template>
  <div class="w-full h-screen pt-[3%] flex flex-col bg-[#50C878]/20">
    <h2
      class="text-center mb-2 font-bold text-[50px] text-[#f3a73c] drop-shadow-lg"
    >
      ท่าบริหาร
    </h2>
    <div class="flex gap-2 h-full p-2">
      <div
        class="bg-black/20 rounded-lg h-full w-[50%] flex flex-col justify-between p-5"
      >
        <!-- Display video -->
        <div>
          <video
            ref="videoPlayer"
            :src="currentVideo.link"
            width="930"
            height="480"
            controls
            autoplay
            @ended="onVideoEnded"
          ></video>
          <p
            class="text-center mt-5 text-[30px] font-semibold text-white drop-shadow-lg"
          >
            {{ currentVideo.title }}
          </p>
        </div>

        <!-- Pagination -->
        <div class="flex justify-between w-full mb-10 px-5">
          <!-- Previous button -->
          <button
            :disabled="currentPage === 0"
            @click="currentPage--"
            class="px-4 py-2 bg-blue-500 text-white rounded"
          >
            ย้อนกลับ
          </button>

          <!-- Show Next button only if not completed all videos -->
          <button
            :disabled="currentPage === videolink.length - 1"
            @click="currentPage++"
            class="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>

          <!-- Show Start Over button if all videos are completed -->
          <button
            v-if="currentPage === videolink.length - 1"
            @click="resetVideos"
            class="px-4 py-2 bg-green-500 text-white rounded"
          >
            กลับไปเริ่ม 1
          </button>
        </div>
      </div>

      <div class="h-full w-[50%]">
        <div
          class="p-5 bg-black/20 h-full w-full flex flex-col gap-5 items-center rounded-lg"
        >
          <div class="h-[50%] w-full flex justify-center items-center">
            <div class="place-content-center flex justify-center">
              <img :src="currentVideo.Image" alt="" class="  " />
            </div>
          </div>
          <p
            class="h-[50%] w-full text-center text-[40px] font-semibold text-white drop-shadow-lg"
          >
            {{ currentVideo.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="group absolute bottom-5 right-5">
      <button @click="showWarningPopup = true">
        <i
          class="fa-solid fa-circle-exclamation text-[50px] text-red-600 drop-shadow-lg"
        ></i>
      </button>
      <div
        class="absolute border-1 bg-red-300 text-white bottom-full mb-2 right-1/2 translate-x-1/2 w-max px-2 py-1 text-lg font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        คำเตือน
      </div>
    </div>

    <div
      v-if="showWarningPopup"
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded-lg text-center w-[90%] max-w-lg">
        <h2 class="text-2xl font-bold text-red-500 mb-4">คำเตือน</h2>
        <div
          v-if="showWarningPopup"
          class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <div class="bg-white p-8 rounded-lg text-center w-[90%] max-w-lg">
            <h2 class="text-2xl font-bold text-red-500 mb-4">คำเตือน</h2>
            <p class="mb-2 text-lg text-center text-gray-800 font-semibold ">อาการที่ควรหยุดบริหารร่างกาย</p>
            <table
              class="w-full text-left mb-6 border-separate border-spacing-4"
            >
              <tr>
                <td class="text-lg text-gray-800">
                  1. มีอาการปวดหลังส่วนล่างเพิ่มมากขึ้นในระดับรุนแรง
                </td>
              </tr>
              <tr>
                <td class="text-lg text-gray-800">
                  2. มีอาการปวดหลังส่วนล่างและร้าวลงขาเพิ่มมากขึ้น
                </td>
              </tr>
              <tr>
                <td class="text-lg text-gray-800">
                  3. มีอาการชาขาเพิ่มมากขึ้น
                </td>
              </tr>
              <tr>
                <td class="text-lg text-gray-800">
                  4. มีอาการอ่อนแรงกล้ามเนื้อขาเพิ่มมากขึ้น
                </td>
              </tr>
              <tr>
                <td class="text-lg text-gray-800">
                  5. มีปัญหาเกี่ยวกับระบบขับถ่ายที่รุนแรงเพิ่มมากขึ้น
                </td>
              </tr>
              <tr>
                <td class="text-lg text-gray-800">
                  6. มีความผิดปกติที่ส่งผลต่อกิจวัตรประจำวันอย่างรุนแรง
                </td>
              </tr>
              <tr class="">
                <td class=" mt-2 text-lg text-center text-red-400 font-semibold">
                  หากมีความผิดปกติดังที่กล่าวมา
                  หรือมีข้อสงสัยต่อความผิดปกติอื่นๆ ที่เกิดขึ้น
                  ควรหยุดออกกำลังกายทันที
                </td>
              </tr>
            </table>
            <button
              @click="closePopup"
              class="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              ปิด
            </button>
          </div>
        </div>

        <button
          @click="closePopup"
          class="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          ปิด
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const videolink = [
  {
    title: "ท่ากายบริหาร 1",
    link: "/Video/AnyConv.com__video_555978068754694196-RghvyHx4.mp4",
    Image: "/Images/รูปภาพ3.png",
    description:
      "นอนหงายไขว้ขา ใช้มือด้านตรงข้าม ค่อย ๆ ดึงเข่าลงจนรู้สึกตึง ค้างนับ 1-10 วินาที (ทำ2ข้าง) 5 ครั้ง/รอบ อย่างน้อย 2 รอบ/วัน",
  },
  {
    title: "ท่ากายบริหาร 2",
    link: "/Video/AnyConv.com__video_555978068754694196-RghvyHx4(1).mp4",
    Image: "/Images/รูปภาพ4.png",
    description:
      "นอนหงายใช้มือสอดใต้เข่า ดึงเข่าชิดอก จนรู้สึกตึง ค้างนับ 1-10 วินาที (ทำ2ข้าง) ทำ 5 ครั้ง/รอบ อย่างน้อย 2 รอบ/วัน",
  },
  {
    title: "ท่ากายบริหาร 3",
    link: "/Video/video_555978068754694196-RghvyHx4-2.mp4",
    Image: "/Images/รูปภาพ5.png",
    description:
      "นอนคว่ำ แขนวางข้างลำตัว เกร็งแอ่นหลังขึ้นนิ่งค้างไว้ ค้างนับ 1-10 วินาทีทำ 5 ครั้ง/รอบ อย่างน้อย 2 รอบ/วัน",
  },
  {
    title: "ท่ากายบริหาร 4",
    link: "/Video/AnyConv.com__video_555978068754694196-RghvyHx4 3.mp4",
    Image: "/Images/รูปภาพ6.png",
    description:
      "นอนคว่ำ แล้วใช้มือดันเหยียดแขนตรงให้หลังแอ่น ค้างนับ 1-10 วินาที ทำ 5 ครั้ง/รอบ ทำอย่างน้อย 2 รอบ/วัน",
  },
  {
    title: "ท่ากายบริหาร 5",
    link: "/Video/video_555978068754694196-RghvyHx4-4.mp4",
    Image: "/Images/รูปภาพ7.png",
    description:
      "นั่งบนส้นเท้า โน้มตัวไปด้านหน้า แล้วเหยียดแขน 2 ข้างจนรู้สึกตึง ค้างนับ 1-10 วินาที ทำ 5 ครั้ง/รอบ อย่างน้อย 2 รอบ/วัน",
  },
  {
    title: "ท่ากายบริหาร 6",
    link: "/Video/AnyConv.com__video_555978068754694196-RghvyHx4 5.mp4",
    Image: "/Images/รูปภาพ8.png",
    description:
      "ยืนตรง ใช้มือดันเอวให้หลังแอ่นไปด้านหน้า ค้างนับ 1-10 วินาที ทำ 5 ครั้ง/รอบ ทำอย่างน้อย 2 รอบ/วัน",
  },
];

const currentPage = ref(0);

const currentVideo = computed(() => videolink[currentPage.value]);

// Handle video end and set a timeout to switch to the next video after 5 seconds
const onVideoEnded = () => {
  if (currentPage.value < videolink.length - 1) {
    setTimeout(() => {
      currentPage.value++;
    }, 5000); // 5 seconds
  }
};

// Reset the video progress to the first video
const resetVideos = () => {
  currentPage.value = 0;
};

const showWarningPopup = ref(false);
const closePopup = () => {
  showWarningPopup.value = false;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
