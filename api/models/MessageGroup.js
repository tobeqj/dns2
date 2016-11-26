//聊天群组
module.exports = {
	attributes:{
		name:'string',
		notes:{
			collection:'MessageNote',
			via:'message_group'
		},
		users:{
			collection: 'User',
		},
		room:{
			model:'Room'
		}
	}
	
};