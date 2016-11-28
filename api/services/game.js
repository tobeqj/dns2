
module.exports = {

	hpqj: function(pnum){
		pnum = pnum || 10;
		if(pnum > 10) return {info:'人数超出'};
		var pk = [
		  1,2,3,4,5,6,7,8,9,10,11,12,13,
		  14,15,16,17,18,19,20,21,22,23,24,25,26,
		  27,28,29,30,31,32,33,34,35,36,37,38,39,
		  40,41,42,43,44,45,46,47,48,49,50,51,52
		 ];
		var arr = [];
		for(var i=0; i<pnum; i++){
			var item = [];
			for(var j=0; j<5; j++){
				var index = Math.round(Math.random()*(pk.length-1));
				item.push(pk.splice(index, 1)[0]);	
			}
			arr.push(item);
			
		}
		var result = [];
		for(var i=0, l=arr.length; i<l; i++){
			var item = {
				img:arr[i],
				res:this.calc(arr[i])
			}
			result.push(item);
		}
		return result; 
	},

	calc:function(pk){
		var arr = [];
		for(var i=0,l=pk.length; i<l; i++){
			arr.push(pk[i]);
		}
		var niu = false;
		for(var i=0; i<3; i++){
			for(var j=i+1; j<4; j++){
				for(var k=j+1; k<5; k++){
					var rs1 = (arr[i]%13>10)?10:arr[i]%13,
						rs2 = (arr[j]%13>10)?10:arr[j]%13,
						rs3 = (arr[k]%13>10)?10:arr[k]%13;
					if((rs1+rs2+rs3)%10 == 0){
						niu = true;
						arr.splice(i, 1);
						arr.splice(arr.indexOf(pk[j]), 1);
						arr.splice(arr.indexOf(pk[k]), 1);
						var r1 = (arr[0]%13>10)?10:arr[0]%13,
							r2 = (arr[1]%13>10)?10:arr[1]%13,
						result =  (r1+r2)%10;
						if(result == 0) return {num:[i,j,k], result:'牛牛', max:this.max(pk)};
						return {num:[i,j,k], result:'牛'+result, max:this.max(pk)};
					}
				}
			}
		}
		if(!niu) return {result:'无牛', max:this.max(pk)};;
	},

	max(num){
		var arr   = [];
		var cparr = [];
		for(var i=0,l=num.length;i<l; i++){
			var item = (num[i]%13>10)?10:num[i]%13;
				item = item == 0?13:item;
			arr.push(item);
			cparr.push(item);
		}
		var max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]);
		var index = arr.indexOf(max);
		arr.splice(index, 1);
		var max2 = Math.max(arr[0],arr[1],arr[2],arr[3]);
		arr.splice(arr.indexOf(max2), 1);
		var max3 = Math.max(arr[0],arr[1],arr[2]);
		arr.splice(arr.indexOf(max3), 1);
		var max4 = Math.max(arr[0],arr[1]);

		if(max > max2){
			return index;
		}else if(max == max2&&max2 == max3 && max3 == max4){
			var index2 = cparr.indexOf(max2);
			var index3 = cparr.indexOf(max3);
			var index4 = cparr.indexOf(max4);
			return num.indexOf(Math.min(num[index], num[index2], num[index3], num[index4]));
		}else if(max == max2&&max2 == max3 ){
			var index2 = cparr.indexOf(max2);
			var index3 = cparr.indexOf(max3);
			return num.indexOf(Math.min(num[index], num[index2], num[index3]));
		}else if(max == max2){
			var index2 = cparr.indexOf(max2);
			return num.indexOf(Math.min(num[index], num[index2]));
		}  
	}
	
}