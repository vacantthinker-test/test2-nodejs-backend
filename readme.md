#### node.js 服务器 express

---

package.json
```json
{
  "name": "test2-nodejs-backend", // name 项目名称
  "dependencies": { // 依赖 多个依赖 对象 key-value
    "express": "^4.17.1" // 名称 - 版本号
  }
}

```

```text
> start
> node index.js

3000 端口 服务器 启动了

```

[协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
```text
http://localhost:3000/
```

```text
> watch
> nodemon index.js

[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
3000 端口 服务器 启动了

[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
3000 端口 服务器 启动了


```

---

end
finished
