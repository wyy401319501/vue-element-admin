module.exports = {
  title: '页面标题 - 站点标题',

  /**
   * @type {boolean} true | false
   * @description 是否显示右侧悬浮配置按钮
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否显示页面标签功能条
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description 是否将头部布局固定
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 菜单栏中是否显示LOGO
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 默认显示错误日志的环境
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
