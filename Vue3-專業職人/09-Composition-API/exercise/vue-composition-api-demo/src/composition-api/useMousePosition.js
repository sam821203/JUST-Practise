import { onMounted, onUnmounted } from 'vue';

export function MousePosition() {
  const x = ref(0);
  const y = ref(0);

  const positionUpdate = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', positionUpdate);
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', positionUpdate);
  })

  return { x, y };
}