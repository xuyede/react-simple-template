const express = require('express')

const app = express()

app.use( express.static('./build/') )

app.listen(12305, () => {
  console.log('服务器启动, 监听12305端口: http://127.0.0.1:12305')
})