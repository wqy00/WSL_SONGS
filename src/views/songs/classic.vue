<template>

    <div class="songs">
      <el-card class="box-card" shadow="hover">
        <div>篝火旁</div>
        <audio controls>
        <source src="@/assets/index.mp3" type="audio/mpeg">
        Your browser does not support this audio format.
        </audio>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div>泡沫</div>
        <audio controls>
        <source src="@/assets/music1.mp3" type="audio/mpeg">
        Your browser does not support this audio format.
        </audio>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div>春娇与志明</div>
        <audio controls>
        <source src="@/assets/music2.mp3" type="audio/mpeg">
        Your browser does not support this audio format.
        </audio>
        <br>
        <textarea class="lyric">
          街道办GDC、欧阳耀莹 - 春娇与志明
  作词：街道办
  作曲：街道办、KT
  混音：树牵
  
  Jcool：
  
  有个女仔令我思想变得大个
  
  当初我幼稚行为
  
  对你犯下大错
  
  你话我唔识谂
  
  用钱买无用饰品
  
  你慢慢心淡觉得我
  
  对感情唔认真
  
  要知道男人系天生嘅小朋友
  
  小朋友弱点会
  
  忽略另一半感受
  
  要改正好简单我只系欠调教
  
  经历得多反而可以
  
  令到爱意浓厚
  
  Vai：
  
  志明嘅世界永远好动
  
  带着可爱
  
  佢冇时间迷茫
  
  爱情错过却唔可再
  
  从开始走到结尾哪个
  
  不会变大个
  
  但春娇想要那个你
  
  又有谁可以劝阻
  
  等待UFO纵有变数
  
  最普通嘅佢哋世上遍布
  
  爱漫春天散落
  
  每个季节嘅消耗
  看着花瓣跌落过程
  撑得过衰老
  欧阳耀莹：
  重新出发吗huh
  更渴望未来
  以往这少年懂爱吗
  仿佛不够
  成长会进化吗
  也信念自由
  我爱这少年讽刺吗
  这花开吗
  留：
  我爱你
  你是唱将我做配合
  但你予我这过程细致
  给我培训
  情与爱
  太过复杂
  我要太多喘息
  但你爱我嘅以后
  不会太过忐忑
  当拥有嘅时候
  又接近放手
  循环播放剧情
  有多少个然后
  如果系现实我会
  选择打破现实
  喺你嘅世界里面
  我会选择慢慢渐入
  Vai：
  志明嘅世界永远
  好动带着可爱
  佢冇时间迷茫
  爱情错过却唔可再
  从开始走到结尾哪个
  不会变大个
  但春娇想要那个你
  又有谁可以劝阻
  等待UFO纵有变数
  最普通嘅佢哋世上遍布
  爱漫春天散落
  每个季节嘅消耗
  看着花瓣跌落
  过程撑得过衰老
  欧阳耀莹：
  重新出发吗huh
  更渴望未来
  以往这少年懂爱吗
  仿佛不够
  成长会进化吗
  也信念自由
  我爱这少年讽刺吗
  这花开吗
  Garyu：
  破碎婚姻里出身
  逼出佢嘅硬净
  佢再牺牲佢嘅率真
  改变佢嘅硬颈
  戴眼镜嘅佢明白波珠
  解决唔到逃避
  要长大要负责任
  缩短两个人嘅距离
  美梦里学会感慨
  你亦放肆你的爱
  用力转载
  越过比赛
  为我掩盖
  都因为爱
  欧阳耀莹：
  重新出发吗huh
  更渴望未来
  以往这少年懂爱吗
  仿佛不够
  成长会进化吗
  也信念自由
  我爱这少年讽刺吗
  这花开吗
        </textarea>
      </el-card>
  
  
  
    </div>
  
  
  
  
  
  </template>
  
  <script>
export default {
  name: "classic"
}
  </script>
  
  <style scoped>
  .songs{
      display: flex; 
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .box-card{
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .lyric{
    margin-top: 20px;
    border-radius: 20px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style:italic;
    font-size: 20px;
    color:burlywood;
    width: 300px;
    height: 200px;
  }
  
  </style>