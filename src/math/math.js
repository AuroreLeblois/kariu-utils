module.exports = {
	bytesToSize: (bytes = 0) => {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
		if (bytes === 0) return '0 Byte'
		var index = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
		return Math.round(bytes / Math.pow(1024, index), 2) + ' ' + sizes[index]
	},
	randomNumberFloor: (min, max) => {
    	return Math.floor(Math.random() * (max - min) + min);
	},
	randomNumberInclusive: (min, max) => {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
