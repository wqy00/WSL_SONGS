<template>
  <div class="body">
    <div class="title">汪苏泷个人主页</div>

    <div class="image-center">
    <span class="demonstration">Switch when indicator is hovered (default)</span
    >
      <el-carousel height="450px">
        <el-carousel-item v-for="item in 4" >
          <img :src="require('@/assets/p'+item+'.jpg')" class="avatar">
        </el-carousel-item>
      </el-carousel>
    </div>


    <div class="data">
<!--      <div class="avatar">-->
<!--        <img src="@/assets/p1.jpg" class="avatar"><img>-->
<!--      </div>-->
      <div class="description">
            <p>汪苏泷个人简介： 汪苏泷（Silence），1989年9月17日出生于辽宁省沈阳市，毕业于沈阳音乐学院作曲系，中国内地唱作男歌手、音乐人。</p>
        <p>2010年5月，发布个人首张专辑《弗斯特》；11月，发布首张个人EP《慢慢懂》 [1]  。
          2012年8月，发行第二张个人专辑《万有引力》 [2]  。
          2014年6月，发行第三张原创专辑《传世乐章》 [3]  。
          2015年7月，为电视剧《花千骨》演唱主题曲《年轮》 [4]  ；
          10月，发行第四张原创专辑《登陆计划》，该专辑获得11大颁奖礼和17座奖杯 [4]  。2016年4月，出版首部生活随笔集《这个世界让我有一点不懂》 [5]  ；8月 ，为电视剧《微微一笑很倾城》创作并演唱片头曲《一笑倾城》 [6]  ；9月，“登陆星球”演唱会在北京举行 [7]  。2017年4月，汪苏泷第五张原创专辑《莱芙》正式发行 [8]  ；6月，为电视剧《夏至未至》创作并演唱插曲《那个男孩》 [9]  ；11月起，担任节目《火星研究院》常驻嘉宾。2018年2月，为电影《唐人街探案2》演唱推广曲《摇滚唐人街》 [10]  ；3月，为电影《奇葩朵朵》创作并演唱推广曲《和你在一起》 [11]  ；4月，为电视剧《忽而今夏》创作并演唱同名主题曲 [12]  ；9月，发布个人第六张专辑《克制凶猛》 [13]  。2019年3月，加盟唱作人生态挑战节目《我是唱作人》 [14]  ；10月17日，入选2019福布斯中国30岁以下精英榜 [15]  。2021年9月19日，参加东方卫视代际潮音综艺节目《中国梦之声·我们的歌第三季》。 [158]</p>
        <p>2023年1月24日，参加“奋进新征程——2023中国网络视听年度盛典”，参与音乐情景秀《望星空》。 [220]</p>
      
      </div> 
    </div>

  </div>





</template>

<script>
export default {
  name: "index",
  data(){
    return{
      images:["@/assets/p1.jpg","@/assets/p2.png","@/assets/p3.png","@/assets/p4.png"]
    }
  },
}




</script>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.data{
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
  }
  .title{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style:italic;
    font-size: 20px;
    color:pink;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .avatar{
    width: 70%;
    height: 450px;
  }
  .description{

    width: 870px;
    height: 410px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style:italic;
    font-size: 20px;
    color:pink;
  }
  .image-center{
    width: 70%;
    height: 500px;
  }
/*hover images*/
.demonstration {
  color: white;
}


/*hover images*/

</style>