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
	},

	hasScrollY: (ref) => {
		if (!ref) return false
		return (ref.scrollHeight > ref.height)
	},

	hasScrollX: (ref) => {
		if (!ref) return false
		return (ref.scrollWidth > ref.width)
	},

	scrollToLast: (ref, limit = 0) => {
		if (!ref) return
		const scrollBottom = (ref.scrollHeight - (Math.round(ref.scrollTop) + ref.offsetHeight))
		if (limit && (scrollBottom >= limit)) return

		if (ref.lastElementChild) ref.scrollTo(0, ref.lastElementChild.offsetTop)
	}
}
