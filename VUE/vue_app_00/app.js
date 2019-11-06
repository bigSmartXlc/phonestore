//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
//2:配置第三方模块
//2.1:配置连接池
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  database: "news",
  connectionLimit: 15
})
//2.2:跨域
var server = express();
server.use(cors({
  origin: ["http://localhost:5500","http://localhost:5501","http://127.0.0.1:5500","http://127.0.0.1:5501"],
  credentials: true
}))
//2.3:session
server.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
}))
//2.9:指定静态目录
server.use(express.static("public"))

server.listen(3000);
//3:完成第一个功能用户登录

//4:完成第二个功能:商品分页显示
//30   60~86
// 获取热门新闻
server.get("/hot", (req, res) => {
  var sql = "SELECT * from hotnews";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send("0")
    }
  })
});
// 获取新闻列表
server.get("/newslist", (req, res) => {
  var sql = "select * from newslist";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send("0")
    }
  })
});

// 获取新闻详情
server.get("/newsinfo", (req, res) => {
  var id = req.query.id;
  var sql = "select * from newslist where newsid=?";
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send(result);
      //console.log(id) 查询当前newsid;
      pool.query("select clicktimes from newslist where newsid=?", [id], (err, result) => {
        var clicktime = JSON.parse( JSON.stringify(result))[0].clicktimes;
        //console.log(clicktime) 浏览次数+1;
        pool.query("update newslist set clicktimes=? where newsid=?", [parseInt(clicktime)+1,id], (err, result) => {
          if (err) throw err;
          if (result.affectedRows > 0) {
            //console.log("浏览量+1");
          }
        })
      })
    } else {
      res.send("0")
    }
  })
})
// 加载评论
server.get("/loadcontent", (req, res) => {
  var id = req.query.id;
  // //console.log(id);
  pool.query('select * from contentlist where newsid=?', [id], (err, result) => {
    // //console.log(result);
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send([])
    }
  })
})
// 添加评论
server.get("/addcontent", (req, res) => {
  var obj = req.query;
  console.log(obj);
  var sql = "insert into contentlist value(?,?,?,?,?)"
  pool.query(sql, [null, obj.id, null, obj.time, obj.content], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send("1")
    } else {
      res.send("0")
    }
  })
})
// 获取图片列表
server.get("/piclist",(req,res)=>{
  var subid=req.query.subid;
  if(subid==0){
    pool.query("select * from piclist",(err,result)=>{
      if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send([])
    }
    })
  }else{
    pool.query("select * from piclist where subid=?",[subid],(err,result)=>{
      if (err) throw err;
      if (result.length > 0) {
        res.send(result)
      } else {
        res.send([])
      }
  })
}
})

// 获取图片详情
server.get("/picinfo",(req,res)=>{
  var id=req.query.id;
  pool.query("select * from piclist where picid=?",[id],(err,result)=>{
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send([])
    }
  })
})
// 获取商品列表
server.get("/goodslist",(req,res)=>{
  pool.query("select * from goodslist",(err,result)=>{
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send([])
    }
  })
})
// 获取商品详情 
server.get("/goodsinfo",(req,res)=>{
  var goodsid=req.query.id;
  pool.query("select * from goodslist where goodsid=?",[goodsid],(err,result)=>{
    if (err) throw err;
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send([])
    }
  })
})



