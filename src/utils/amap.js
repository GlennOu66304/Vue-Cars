import Vue from 'vue'
// How to disable TypeScript warnings in VSCode?
// https://stackoverflow.com/questions/42632215/how-to-disable-typescript-warnings-in-vscode
import VueAMap from 'vue-amap';
// vue-amap
// https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'a3ea74856c28dc74cbc89d6ffd9b37a4',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4'
});