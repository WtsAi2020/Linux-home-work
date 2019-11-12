<template>
  <div class="loginHome">
      <H3>Linux 作业</H3>
      <login></login>    
  </div>
</template>

<script>
import login from '../componts/Login';
export default {
  name: "loginHome",
  data: {
    return: {}
  },
  components:{
      login
  }
};
</script>

<style lang="scss" scoped>
    .loginHome {
        display: flex;
        justify-content: center;
    }
</style>