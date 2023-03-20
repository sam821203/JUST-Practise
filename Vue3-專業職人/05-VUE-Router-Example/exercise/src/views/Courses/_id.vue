<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isError = ref(false)
    const courses = reactive({ data: {} });
    let timer = null;

    onMounted(() => {
      axios.get(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`)
        .then(res => {
          courses.data = res.data.data[0];
        })
        .catch(error => {
          isError.value = true;
          courses.data['error_message'] = error.response.data.error_message;

          timer = setTimeout(() => {
            // 回到指定的頁面
            // router.push({ path: "/Courses" });

            // 回到上一頁
            router.go(-1);
          }, 3000)
        });
    })

    // 當這個 Component 被離開時，就會清除掉 setTimeout
    onMounted(() => {
      clearTimeout(timer);
    })

    return { 
      courses,
      isError,
    };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{ courses.data.name }}</h1>
      <h2>NTD: {{ courses.data.money }}</h2>
      <img :src="courses.data.photo" alt="" />
      <div v-if="Object.keys(courses.data).length !== 0">
        <img :src="courses.data.teacher.img" alt="" />
        <p>{{ courses.data.teacher.name }}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{ courses.data.error_message }}</h1>
  </div>
</template>

<style></style>
