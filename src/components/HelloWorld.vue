<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex;
		align-items: center;
		justify-content: center;">
      <div style="position: absolute;width: 200px;left:560px;padding-left: 30px; font-weight: bold; color: dodgerblue">汪苏泷</div>
      <div style="flex: 1"></div>
      <div style="width: 100px">
          <el-dropdown>
              <span class="el-dropdown-link" >
                  <br>
                  <div>更多</div>
                  

            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>

              </span>
              <template #dropdown>
                  <el-dropdown-menu>
                      <el-dropdown-item @click="person">个人信息</el-dropdown-item>
                      <el-dropdown-item @click="logout">快乐</el-dropdown-item>
                      <el-dropdown-item @click="logout">伤感</el-dropdown-item>
                      <el-dropdown-item @click="logout">流行</el-dropdown-item>
                      <el-dropdown-item @click="logout">古典</el-dropdown-item>
<!--                        <el-dropdown-item disabled >切换</el-dropdown-item>-->
<!--                        <el-dropdown-item divided>注册</el-dropdown-item>-->
                  </el-dropdown-menu>
              </template>
          </el-dropdown>
      </div>


  </div>

</template>

<script >

export default {
  name: "Header",
  data(){
      return{
          user:{},
      }
  },
  created(){

  },

  methods:{
      logout(){
      },
      person(){
      }
  }
}
</script>

<style scoped>

</style>