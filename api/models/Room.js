/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	//房间名字
  	name:'string',
  	//房间ID
  	room_id:'integer',
  	 //房间创建者
    sponsor: {
      model: 'User'
    },
  	//1.火拼抢金、2.百人大战
  	type: {
  	  type: 'integer',
      enum: [1, 2, 3],
      defaultsTo: 1
  	},

  	//最低投注
  	min_money:{
  		type:'integer',
  		defaultsTo:1
  	},

  	//最高投注
  	max_money:{
  		type:'integer',
  		defaultsTo:1
  	},

  	//允许进入的最低vip等级
  	min_vip:{
  		type:'integer',
  		defaultsTo:1
  	},

  	//允许进入最大人数
  	max_play:{
  		type:'integer',
  		defaultsTo:10000
  	}


  }
};

