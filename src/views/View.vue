<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">{{ provinceName }} | 疫情状况</div>
      <div class="update-time">截止 {{ updateTime }}</div>
      <div class="shuoming" @click="handleModal"><span>数据说明</span></div>
    </div>

    <e-summary :total="total"></e-summary>

    <figure>
      <e-charts
        ref="map"
        :options="map"
        :init-options="initOptions"
        autoresize
      ></e-charts>
    </figure>

    <div class="table">
      <ul class="table-header">
        <li>地区</li>
        <li>新增</li>
        <li>累计确诊</li>
        <li>治愈</li>
        <li>死亡</li>
      </ul>
      <ul class="table-body">
        <li
          v-for="(item, index) in table"
          :key="index"
          class="table-line table-province"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.today.confirm }}</div>
          <div>{{ item.total.confirm }}</div>
          <div>{{ item.total.heal }}</div>
          <div>{{ item.total.dead }}</div>
        </li>
      </ul>
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script>
import buildMapData from '../data/map'
import EAlert from '../components/Alert'
import { getNameByPinyin } from '../data/zhen'
import ECharts from '../components/ECharts.vue'
import ESummary from '../components/Summary.vue'
import Loading from '../components/Loading.vue'

export default {
  components: {
    ECharts,
    ESummary,
    Loading
  },
  data () {
    return {
      loading: true,
      updateTime: '',
      total: {},
      map: {},
      table: [],
      provinceName: '',
      initOptions: {
        renderer: 'canvas'
      }
    }
  },
  methods: {
    handleModal () {
      EAlert({
        title: '数据说明',
        msg: `
          <div>
            <div>0. 数据爬取自【腾讯新闻】,在原有基础上增加了“省”一级的疫情地图。</div><br>
            <div>以下内容为腾讯数据声明：</div>
            <div>1. 全部数据来源于国家卫健委、各省卫健委以及权威媒体报道。</div><br>
            <div>2. 腾讯新闻的统计方法如下：</div>
            <div>
              a. 国家卫健委公布数据时，全国总数与国家卫健委保持一致。<br>
              b. 各省卫健委陆续公布数据，如果各省数据总和已经超过之前国家卫健委总数，则切换为直接使用各省数据总和。
            </div><br>
            <div>3. 国家卫健委及各省卫健委公布数据的发布时间和统计时间段各不相同，比如国家卫健委公布了最新全国数据，而各省还没有公布各自最新数据，故而会在部分时段出现国家总数不等于分省数据之和。</div>
          </div>
        `
      })
    }
  },
  created () {
    let province = this.$route.path.substr(1)
    this.provinceName = getNameByPinyin(province)
    // const { updateTime, total, map, table } = buildMapData(this.provinceName)

    // this.updateTime = updateTime
    // this.total = total
    // this.table = table
    // this.map = map

    this.loading = true
    buildMapData(this.provinceName).then(result => {
      this.updateTime = result.updateTime
      this.total = result.total
      this.table = result.table
      this.map = result.map

      this.loading = false
    })
  }
}
</script>
