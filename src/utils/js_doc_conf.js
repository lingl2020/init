module.exports = {
  // 让jsdoc识别 @log
  tag: 'log',
  // 告知插件this.$log是发送埋点的方法，定义成数组是因为有的项目可能存在多个
  method: ['$log'],
  // pageType前缀，即会给项目pageType加前缀来区分不同项目
  prefix: 'H5BOOK',
  // pageType具体生成规则，不同项目可能规则不同
  pageTypeGen: function({ prefix, routeName, dir, path, fileName }) {
    return (prefix + routeName).toUpperCase();
  },
  // 公共的backup说明，最终单个埋点backup由公共的和私有的拼接而成
  params: 'uid：用户id',
  // 项目信息，埋点上报用
  projectInfo: {
    projectId: '工程id，一般用项目名称',
    projectName: '中文名称',
    projectDesc: '项目描述',
    projectIsShowOldMark: false  // 是否展示老数据
  }
}
