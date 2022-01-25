module.exports = {
	bytesToSize: (bytes = 0) => {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
		if (bytes === 0) return '0 Byte'
		var index = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
		return Math.round(bytes / Math.pow(1024, index), 2) + ' ' + sizes[index]
	}
}
