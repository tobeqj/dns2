/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req,res,next){
 	 	return res.json({status:1,info:'保存成功'});

 	},
 	login:function(req, res, next){
 		var phone = req.param('phone');
 		var password  = req.param('password');
 		sails.log(req.allParams());
 		sails.log(phone);
 		sails.log(password);
 		User.findOne({phone:phone}).exec(function(err, entity){
 			if(err) return res.json({success:false, info:'登录失败'});
 			if(entity){
 				sails.services['passport'].validatePassword(password, entity.password, function(error, result){
 					if(result){
 						var data = {
 							id:entity['id'],
 							nickname:entity['nickname'],
 							avatar:entity['avatar']||''
 						}
 						return res.json({success:true, data:data, info: '登录'});
 					}else{
 						return res.json({success:false, info: '密码错误'});
 					}
 				})
 					
 			}else{
 				return res.json({success:false, info:'请检查手机号码'});
 			}
 		});
 	},
 	signup:function(req, res, next){
 		var phone = req.param('phone');
 		var password = req.param('password');
 		var nickname = '牛'+Math.round(Math.random()*1000000);
 		User.findOne({phone:phone}).exec(function(err, entity){
 			if(err) return res.json({success:false, info:'注册失败'});
 			if(entity){
 				return res.json({success:false, info:'该手机号已被注册'});
 			}else{
 				User.create({phone:phone, password:password, nickname:nickname}).exec(function(err, result){
		 			if(err) return res.json({success:false, info:'注册失败'});
		 			return res.json({success:true, info:'注册成功'});
		 		});
 			}
 		});
 	}


};

