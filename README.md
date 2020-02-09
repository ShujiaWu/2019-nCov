### 更新说明
在原作者的基础上做了以下修改：

1. 新增定时任务，每30分钟自动拉取数据，运行方式见下文。
2. 页面数据改为动态获取，并未页面添加loading。

### 运行说明
定时任务在 `data` 中，请先执行 `npm install`。

### 定时任务说明
配置 `data/task.js` 文件中的 `shellOrder` ,定时任务运行脚本运行命令，例如：`sh /apps/html/ncov/info/data/task.sh`。

配置 `data/task.sh` ，`node` 所在路径，和获取数据js文件的地址。例如： `/usr/local/node/bin/node /apps/html/ncov/info/data/build-data.js`

安装 `pm2`, `npm install -g pm2`

进入到定时任务所在的目录`cd /apps/html/ncov/info/data`

执行`pm2 start task.js --name "ncov-task"`

### 附加说明
如果运行 `npm run serve` 和 `npm run build` 报错，请根据自己实际系统修改。笔者系统为`Mac`,其他系统请自行修改。

### 缘起

此次肺炎疫情波及甚广，只能自封于家中看看新闻、打打游戏。
昨天看了` ` ` 山月 ` ` `大佬的[《武汉肺炎疫情实时动态省市地图开发》](https://juejin.im/post/5e312aedf265da3e3e7548ff)心潮澎湃，决定拿起键盘照撸一个。开发时间较短，bug在所难免，各位大佬见谅。

![](https://user-gold-cdn.xitu.io/2020/2/2/17004d09534b9196?w=2169&h=2310&f=png&s=1298299)

### 程序基本介绍

1. 数据抓取自` ` ` 腾讯新闻 ` ` `
2. 图表采用Echarts(内部使用了vue-echarts)
3. 支持【省】级地图
4. Vue-cli@3脚手架项目

5.[查看源代码](https://github.com/border-1px/2019-nCov)
6.[线上示例](http://101.200.145.232)

### 快速开始

``` 

# 安装依赖

npm i

# 抓取腾讯新闻数据

node ./build-data.js

# 开发模式

npm run serve
```

### 未实现

定时执行 build-data.js，抓取最新数据。

