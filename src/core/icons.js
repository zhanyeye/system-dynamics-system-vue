/**
 * Custom icon list
 * All icons are loaded here for easy management
 * @see https://vue.ant.design/components/icon/#Custom-Font-Icon
 *
 * 自定义图标加载表
 * 所有图标均从这里加载，方便管理
 */
import bxAnaalyse from '@/assets/icons/bx-analyse.svg?inline' // path to your '*.svg?inline' file.
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1976081_kufanr4p9g8.js'
})

export { bxAnaalyse, IconFont }
