<template>
  <div class="top">
      <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    :popper-effect="dark"
  >
    <el-menu-item index="0" @click="toindex">汪苏泷</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="tomv">MV</el-menu-item>
    <el-sub-menu index="2">
      <template #title>歌曲分类</template>
      <el-menu-item index="2-1" @click="topopular">流行</el-menu-item>
      <el-menu-item index="2-2" @click="toclassic">情歌</el-menu-item>
      <el-menu-item index="2-3">古典</el-menu-item>
<!--      <el-sub-menu index="2-4">-->
<!--        <template #title>item four</template>-->
<!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--      </el-sub-menu>-->
    </el-sub-menu>
  </el-menu>
  </div>

</template>

<script >
import { ref } from 'vue'

const activeIndex = ref('1')

export default {
  name: "Header",
  data(){
      return{
      }
  },
  created(){

  },

  methods:{
      toindex(){
        this.$router.push("/index")
      },
    tomv(){
      this.$router.push("/mv")

    },
    topopular(){
      this.$router.push("/popular")
    },
    toclassic(){
      this.$router.push("/classic")
    },


      handleSelect(key,keypath){
        console.log(key)
      }
  }
}
</script>

<style scoped>
.top{
  height: 70px; 
  line-height: 70px; 
  /* border-bottom: 1px solid #ccc;  */
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center; 
} 

.flex-grow {
  flex-grow: 1;
}

</style>