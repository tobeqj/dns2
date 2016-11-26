//聊天记录
module.exports = {
	attributes:{
		message_group:{
			model:'MessageGroup'
		},
		type:'integer',
		content:'text',
		user:{
			model:'User'
		},
		creater:{
			model:'User'
		},
		status: {
      		type:'boolean',
      		defaultsTo:false
    	},
    	messageTime:{
    		type:'date'
    	},
    	isPersonMessage: {
      		type:'boolean',
      		defaultsTo:true
    	},
	}
};