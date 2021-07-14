//检查数据类型
let checkdata = target => {
	return Object.prototype.toString.call(target).slice(8, -1)
}

let deepClone = ele => {
	let res
	if(checkdata(ele) === 'Object') {
		res = {}
	} else if(checkdata(ele) === 'Array') {
		res = []
	} else {
		return ele
	}
	for(let i in ele) {	
		if(checkdata(ele) === 'Object' || checkdata((ele)) === 'Array') {
			res[i] = deepClone(ele[i])
		} else {
			res[i] = ele[i]
		}	
	}
	return res
}
