<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">
      <a :href="input" target="blank">点赞</a>
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style lang="less" scoped>
</style>
