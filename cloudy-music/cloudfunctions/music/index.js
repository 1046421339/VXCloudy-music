// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'ljj-2g7uf1f392b1f2f9'
})

//引入路由
const TcbRouter = require('tcb-router')
//引入axios
const axios = require('axios')
//定义基础URL，修改你的穿透地址
const BASE_URL = 'https://ljjwxcloudy.cn1.utools.club'


// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })
  //歌单列表请求，需要传入url,起始初始记录数，安装创建时间降序排列
  app.router('playlist', async (ctx, next) => {
    ctx.body = await cloud.database().collection('playlist')
      .skip(event.start)
      .limit(event.count)
      .orderBy('createTime', 'desc')
      .get()
      .then((res) => {
        return res
      })
  })

  //歌单详情请求，传入歌单id,注意转成int类型
  app.router('musiclist',async(ctx,next)=>{
    console.log('######'+event.playlistId)
    const res = await axios.get(`${BASE_URL}/playlist/detail?id=${(event.playlistId)}`)
    console.log('######'+res)
    ctx.body=res.data
  })
  return app.serve()
}