/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	//手机号
    phone: {
      type: 'string',
      unique: true,
      size: 18
    },

    //支付密码
    password: {
      type: 'string'
    },

    //用户昵称
    nickname: {
      type: 'string',
      size: 60
    },

    //用户头像
    avatar: {
    	type: 'string'
    },

    //斗牛币
     money: {
      type: 'float',
      defaultsTo:0
    },

    //vip等级数
    vip:{
    	type:'integer',
    	defaultsTo:1	
    },

    //创建的房间
    rooms: {
      collection: 'Room',
      via: 'sponsor'
    },

    //加入的房间
    play_rooms: {
      collection: 'Room',
    },

  },
   beforeCreate:function(entity, next) {
    if(entity.password){
      sails.services['passport'].hashPassword(entity.password, function(err, password){
        entity.password = password;
        next();
      });
    }else{
      next();
    }
  },
  beforeUpdate:function(entity, next){
    if(entity.password){
      sails.services['passport'].hashPassword(entity.password, function(err, password){
        entity.password = password;
        next();
      });
    }else{
      next();
    }
  }
};

