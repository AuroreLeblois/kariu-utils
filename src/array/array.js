module.exports = {
	useFilter: (array = [], filters, allKeySearch = []) {
	  if (datas.length === 0) return [];
	  let dataCopy = datas;
	  let filterKeys = {};
	  filterKeys = Object.keys(filters);

	  filterKeys.map((key) => {
		if (filters[key].length === 0) return false;

		let arrayTmp = [];

		if (key === 'search') {
		  if (!allKeySearch.length) {
			allKeySearch = Object.keys(datas[0]);
		  }
		  allKeySearch.map((itemSearch) => {
			let dataToPush = {};
			dataToPush = dataCopy.filter((elem) =>
			  !elem[itemSearch]
				? null
				: elem[itemSearch].toString().toLowerCase().indexOf(filters[key].toString().toLowerCase()) >= 0
			);
			arrayTmp = arrayTmp.concat(dataToPush);
			return true;
		  });
		  arrayTmp = arrayTmp.filter((v, i, a) => a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i);
		  dataCopy = arrayTmp;
		} else {
		  // Tous les autres cas
		  filters[key].map((item) => {
			let dataToPush = {};
			dataToPush = dataCopy.filter((elem) =>
			  typeof elem[key] === 'string' ? elem[key].includes(item) : elem[key] === item
			);
			arrayTmp = arrayTmp.concat(dataToPush);
			return true;
		  });
		  dataCopy = arrayTmp;
		}
		return true;
	  });
	  return dataCopy;
  },
	split: (array, howManyPerArray = 1) => {
		let idx = 0
		let arrays = {}
		do {
			arrays[idx] = array.splice(0, howManyPerArray)
			idx++
		} while (array.length)
		return arrays
	},
	useSort: (array = [], colKey, desc) {
	  const dataSorted = sortDatas(collection, colKey, desc);
	  return dataSorted;
	}

	function sortDatas(collection, value, desc) {
	  return collection.sort((objA, objB) => {
		let a = '';
		let b = '';
		const isNumber = !isNaN(objA[value] || '') && !isNaN(objB[value] || '');

		if (isNumber) {
		  a = objA[value] ? parseFloat(objA[value]) : 0;
		  b = objB[value] ? parseFloat(objB[value]) : 0;
		} else if (typeof objA[value] === 'string' || typeof objB[value] === 'string') {
		  a = objA[value] ? objA[value].toLowerCase() : '';
		  b = objB[value] ? objB[value].toLowerCase() : '';
		} else {
		  a = objA[value];
		  b = objB[value];
		}

		if (desc === 'asc') {
		  // eslint-disable-next-line no-nested-ternary
		  return a > b ? 1 : b > a ? -1 : 0;
		}
		// eslint-disable-next-line no-nested-ternary
		return a > b ? -1 : b > a ? 1 : 0;
	  });
	}

}
