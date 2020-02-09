<template>
  <div class="loading">
    <div class="spinner-box">
      <atom-spinner
        :animation-duration="1000"
        :size="80"
        :color="'#ff1d5e'"
        class="spinner"
      />
      <div>正在加载数据</div>
    </div>
  </div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'
export default {
  name: 'Loading',
  components: {
    AtomSpinner
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}
.loading::after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.spinner-box {
  display: inline-block;
  color: #fff;
  text-align: center;
}
.spinner {
  display: inline-block;
}
</style>
