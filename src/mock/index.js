const Mock = require("mockjs")

const data = Mock.mock({
    "data|20":[
        {
            "name":"@cname",
            "id|+1":1,
            "tel":/^1(3|5|7|8|9)\d{9}$/,
            "img":'@Image("200*100","azure","red","天蓝")'
        }
    ]
})

export default data;  