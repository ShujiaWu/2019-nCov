// 脚本所在路径配置
const shellOrder = `sh /apps/html/ncov/info/data/task.sh`
const { exec } = require('child_process')
const schedule = require('node-schedule')

console.log(shellOrder)
schedule.scheduleJob('0 /30 * * * *', () => {
  exec(shellOrder, (err, stdout, stderr) => {
    if (err) {
      console.log('err: ', err)
    } else {
      console.log(new Date(), '定时任务执行成功,', stdout)
    }
  })
})
