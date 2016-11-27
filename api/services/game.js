var pk = [
		  1,2,3,4,5,6,7,8,9,10,11,12,13,
		  14,15,16,17,18,19,20,21,22,23,24,25,26,
		  27,28,29,30,31,32,33,34,35,36,37,38,39,
		  40,41,42,43,44,45,46,47,48,49,50,51,52
		 ];
module.exports = {
	hpqj: function(pnum){
		if(pnum > 10) return {info:'人数超出'};
		var arr = [];
		for(var i=0; i<pnum; i++){
			var item = [];
			for(var j=0; j<5; j++){
				var index = Math.round(Math.random()*(pk.length-1));
				item.push(pk.splice(index, 1));	
			}
			arr.push(item);
			
		}
		return arr; 
	}
	
}