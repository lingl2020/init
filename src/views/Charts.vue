<template>
  <div ref="container" class="container">
    <div class="content-top">
      <div>
        {{ $dateFormat(new Date()).format("YYYY年MM月DD日 HH:mm:ss") }}
      </div>
      <div class="content-top-operation">
        <button v-if="!isFulScreen" @click="fullScreen">show</button>
        <button v-if="isFulScreen" @click="closeFulScreen">hide</button>
      </div>
    </div>
    <div class="content-body">
      <div>
        <div>
          <span>此时此刻有：</span>
          <label>{{ 100 }}</label>
          <span>位活跃用户</span>
        </div>
        <div></div>
      </div>
      <div></div>

      <div ref="chart" style="width: 500px; height: 300px"></div>
    </div>
    <div>
      <a-table :columns="columns" :data-source="tableData">
        <div slot="age" slot-scope="age">
          <div>
            <div style="background-color: red;">
              {{ age }}
            </div>
          </div>
        </div>
      </a-table>
    </div>
  </div>
</template>

<script>
// import echarts from '../utils/_echarts'

const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    scopedSlots: { customRender: 'age' },
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

import { Line } from "@antv/g2plot";

import { Table as aTable } from "ant-design-vue";
export default {
  name: "Charts",
  components: {
    aTable,
  },
  data() {
    return {
      isFulScreen: false,
      tableData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      columns,
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    fullScreen() {
      this.isFulScreen = !this.isFulScreen;
      this.$refs.container.requestFullscreen();
    },
    closeFulScreen() {
      this.isFulScreen = !this.isFulScreen;
      document.exitFullscreen();
    },
    drawChart() {
      const line = new Line("container", {
        data: [
          {
            Date: "2010-01",
            scales: 1998,
          },
          {
            Date: "2010-02",
            scales: 1850,
          },
          {
            Date: "2010-03",
            scales: 1720,
          },
        ],
        padding: "auto",
        xField: "Date",
        yField: "scales",
        xAxis: {
          type: "timeCat",
          tickCount: 5,
        },
      });

      line.render();

      // const myChart = echarts.init(this.$refs.chart)

      // const option = {
      //   xAxis: {
      //     // type: "category",
      //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      //   },
      //   yAxis: {
      //     type: "value",
      //   },
      //   series: [
      //     {
      //       data: [820, 932, 901, 934, 1290, 1330, 1320],
      //       type: "line",
      //     },
      //   ],
      // };

      // myChart.setOption(option)
    },
    colorSetting(i) {
      if (i > 80) {
        return { background: "#003366" };
      }
      if (i > 60 && i < 80) {
        return { background: "#006699" };
      }
      if (i > 40 && i < 60) {
        return { background: "#0099CC" };
      }
      if (i > 20 && i < 40) {
        return { background: "#00CCFF" };
      }

      // switch (i) {
      //   case i > 80:
      //     break;
      //   case i > 60 && i < 80:
      //     break;
      //   case i > 40 && i < 60:
      //     break;
      //   case i > 20 && i < 40:
      //     break;
      //   default:
      //     break;
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  .content-top {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    div {
      float: left;
      width: 50%;
    }
    :last-child {
      text-align: right;
    }
  }
  .content-body {
    :first-child {
      box-sizing: border-box;
      overflow: hidden;
      div {
        margin: 5px;
        float: left;
        height: 290px;
        border: 1px solid #dddddd;
      }
      div:hover {
        box-shadow: 0 0 5px #888888;
      }
      :first-child {
        width: 28%;
      }
      :last-child {
        width: 67%;
      }
    }
  }
}
</style>