module.exports = {
	capitalize: (string) => {
		if (!string.length) return ''

		return (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
	},
	getByteLength: (string) => {
		return Buffer.byteLength(string, 'utf8')
	},
	isJson: (string) => {
		try {
			JSON.parse(string)
		} catch (err) { return false }
		return true
	},
	isEmail: (string) => {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(String(string).toLowerCase())
	},
	removeAccents: (string) => {
		if (!string.length) return ''

		return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	},
	removeSpecialChar: (string) => {
		if (!string.length) return ''

		return string.replace(/[^a-zA-Z ]/g, '')
	},
	replaceWhiteSpaces: (string, replacement) => {
		if (!string.length) return ''

		return string.replace(/\s+/g, replacement)
	},
	toBoolean: (string) => {
		if (string === 'false') return false
		return true
	}
}
