/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');
moment.locale('zh-cn');
module.exports = {
	roomList(req, res){
		var start = req.param('start'),
		limit     = req.param('limit');
		Room.find({skip:start,limit:limit}).populate('sponsor').exec(function(err, result){
			if(err) return res.json({success:false, info:'查询失败'});
			for(var i=0,l=result.length; i<l; i++){
				result[i].updatedAt = moment(result[i].updatedAt).startOf('hour').fromNow();
				result[i].nickname = result[i].sponsor['nickname'];
				result[i].sponsorId = result[i].sponsor['id'];
				result[i].sponsorAvatar = result[i].sponsor['avatar'] || '';
			}
			delete result.sponsor;
			return res.json({success:true, info:'查询成功', data:result});
		})
	},
	createRoom:function(req, res){
		var room = {
	  		sponsor:req.param('sponsor'),
	  		type:req.param('type'),
	  		min_money:req.param('min_money'),
	  		max_money:req.param('max_money'),
	  		min_vip:req.param('min_vip'),
	  		max_play:req.param('max_play')
	  	}
	  	User.findOne({phone:req.param('phone')}).exec(function(err, entity){
	  		if(err || !entity) return res.json({success:false, info:'用户不存在'});
	  		room['sponsor'] = entity['id'];
	  		Room.create(room).exec(function(err, result){
		  		if(err) return res.json({success:false, info:'创建房间失败'});
		  		return res.json({success:true, info:'创建房间成功'});
		  	}); 
	  	});
	  	
		//return res.json(req.allParams());
	},

	inRoom(req, res){
		 sails.log('inRoom');
		 console.log(req.param['roomId']);
		 if(req.isSocket){
 	 	 	sails.sockets.join(req, req.param['roomId']);
 	 	 	return res.json({success:true, info:'进入房间'});
 	 	 }else{
 	 	 	return res.json({success:false, info:'进入房间失败'});
 	 	 }
	},

	outRoom(req, res){

	}

};

