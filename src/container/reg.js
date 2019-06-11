const reg = {
  email: /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^1[3456789]\d{9}$/,
  tel: /^1(?:[38][0-9]|4[56789]|5[012356789]|6[567]|7[012345678]|9[189])\d{8}$/,
  cn: /^[\u4e00-\u9fa5]{0,}$/, // 匹配汉字
  post: /[1-9]\d{5}(?!\d)/, // 邮编
  emoji: /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, // 表情符号
  numCut: /\B(?=(\d{3})+\b)/g, // 用逗号隔开数字，例如 12345678 123456789" => "12,345,678 123,456,789"
  time: /^([01][0-9]|[2][0-3]):[0-5][0-9]$/, // 匹配两位数的时间 "02:07"
  oneTime: /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/, // 匹配时间可以是单位的 例如："7:9"
  ipV4: /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/
}

export default reg
