<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color=" #d1edc4"
    >
      <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><UserFilled /></el-icon>
        <span>住院信息</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Menu /></el-icon>
        <span>处方信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Histogram /></el-icon>
        <span>检查情况</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><HelpFilled /></el-icon>
        <span>出院信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
