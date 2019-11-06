const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
// 按id查询
router.get('/list_fid',function(req,res){
	var obj=req.query;
	console.log(obj);
  pool.query('select * from fooddetails where fid=?',[obj.fid],function(err,result){
      if(err) throw err;
	  if(result.length>0){
	  res.send(result[0]);
	  }else{
	  res.send('查询不到该数据');
	  }
  })
});
module.exports = router;