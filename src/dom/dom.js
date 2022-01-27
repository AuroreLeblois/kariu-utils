module.exports = {
	getPosRelativeTo: (refFrom, refTo = null) => {
		if (!refFrom) return {}

		const refFromRect = refFrom.getBoundingClientRect()
		const refToRect = (refTo ? refTo.getBoundingClientRect() : refFrom.parentNode.getBoundingClientRect())

		// leftBot par défaut
		let result = {
			position: 'absolute',
			left: refToRect.left,
			top: (refToRect.top + refToRect.height)
		}
		// rightBot
		if ((result.left + refFromRect.width) > window.innerWidth) {
			result.left = (refToRect.left - (refFromRect.width - refToRect.width))
		}
		// top
		const top = (refToRect.top - refFromRect.height)
		if ((result.top + refFromRect.height) > window.innerHeight && top < window.innerHeight) {
			result.top = top
		}
		return result
	}
}
