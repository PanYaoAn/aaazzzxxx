(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{184:function(e,n,t){"use strict";t.r(n);var r=t(0),s=Object(r.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"vue-proxy的跨域代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-proxy的跨域代理"}},[e._v("#")]),e._v(" Vue proxy的跨域代理")]),e._v(" "),t("h3",{attrs:{id:"_1-vue-config-js-在里面找到devserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-config-js-在里面找到devserver"}},[e._v("#")]),e._v(" 1.vue.config.js,在里面找到devServer")]),e._v(" "),t("pre",[t("code",[e._v('module.exports = {\n    devServer: {\n        open: false, // 自动打开浏览器\n        hot: true, // 实时打包编译\n        host: "0.0.0.0",\n        inline: true, // 表示实时刷新浏览器\n        port: "8020", // 指定打开浏览器的端口号\n        // 对本地服务器进行配置\n        proxy: {\n            "/api": {\n                // 需要跨域的目标URL \n                target: "http://192.168.0.103:8081",\n                changeOrigin: true,\n                ws: true,\n                pathRewrite: {\n                    "^/api": \'\'\n                }\n            }\n        }\n\n    }\n}\n')])]),e._v(" "),t("h3",{attrs:{id:"到你的axios的请求接口更改地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#到你的axios的请求接口更改地址"}},[e._v("#")]),e._v(" 到你的axios的请求接口更改地址")]),e._v(" "),t("pre",[t("code",[e._v('import axios from "./Server"\nconst base = {\n    // baseUrl: \'http://192.168.0.103:8081\', 目标的网址和端口\n    baseUrl: "/api",\n    index: "/index",\n\n}\nexport class firstApi {\n    static getFisrtList(num) {\n        return axios.get(base.baseUrl + base.index, {\n                params: {\n                    num: num\n                }\n            })\n            .then(res => res)\n    }\n\n}')])])])}],!1,null,null,null);n.default=s.exports}}]);