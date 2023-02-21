<template>
    <div>
        <el-menu
            style="width: 200px; min-height: calc(100vh - 50px)"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="path"
            router

            text-color="#fff">
<!--            @open="handleOpen"-->
<!--            @close="handleClose"-->



            <el-sub-menu index="1"  v-if="user.role === 1">
                <template #title>
                    <el-icon><Discount /></el-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="/user">
                    <el-icon><Avatar /></el-icon>
                    <span>用户管理</span>
                </el-menu-item>
            </el-sub-menu>


            <el-sub-menu index="2" >

                    <template #title>
                        <el-icon><Edit /></el-icon>
                        <span>数据管理</span>
                    </template>

                <el-menu-item index="/welcome">
                    <el-icon><HomeFilled /></el-icon>
                    <span>欢迎</span>
                </el-menu-item>

                <el-menu-item index="/person">
                    <el-icon><EditPen /></el-icon>
                    <span>个人信息管理</span>
                </el-menu-item>

                <el-menu-item index="/healthCode">
                    <el-icon><StarFilled /></el-icon>
                    <span>健康码管理</span>
                </el-menu-item>

                <el-menu-item index="/trace">
                    <el-icon><Position /></el-icon>
                    <span>健康信息上报</span>
                </el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="2" >
                <template #title>
                    <el-icon><Menu /></el-icon>
                    <span>友链</span>
                </template>
                <el-menu-item index="/contact">
                    <el-icon><Paperclip /></el-icon>
                    <span>Contact me</span>
                </el-menu-item>

                <el-menu-item index="/share">
                    <el-icon><Share /></el-icon>
                    <span>分享</span>
                </el-menu-item>
            </el-sub-menu>



<!--            <el-menu-item index="2">-->
<!--                <el-icon><icon-menu /></el-icon>-->
<!--                <span>Navigator Two</span>-->
<!--            </el-menu-item>-->

<!--            <el-menu-item index="3" disabled>-->
<!--                <el-icon><document /></el-icon>-->
<!--                <span>Navigator Three</span>-->
<!--            </el-menu-item>-->

<!--            <el-menu-item index="4">-->
<!--                <el-icon><setting /></el-icon>-->
<!--                <span>Navigator Four</span>-->
<!--            </el-menu-item>-->

        </el-menu>
    </div>
</template>

<script>

export default {
    name: "Aside",
    components: {User},
    data(){
        return{
            user: {},
            path: this.$route.path  //默认菜单高亮
        }
    },
    created() {
        let userStr = sessionStorage.getItem("user") || "{}"
        this.user = JSON.parse(userStr)

        // 请求服务端，确认当前登录用户的 合法信息
        request.get("/user/" + this.user.id).then(res => {
          if (res.flag === true) {
              this.user = res.data
              console.log(res)
          }
        })
    }

}
</script>

<style scoped>

</style>