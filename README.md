# kariu-utils

## Basics:
`` npm i kariu-utils ``

## How to use:
`` import { functionName } from kariu-utils ``

## Example:
```
import { array, string, dom, math } from 'kariu-utils';
console.log(string.toBoolean('true'));

```

### array functions:
- useFilter(arrayOfObject, filterKeys, allFilterKeys = [] ) :
This function will filter your array of objects and return a new one.
 - arrayOfObject: your array to filter.
 - filterKeys: your object of filters. ex: { search: 'plop', id: [5, 8, 9]}. The keyword "search" will look for string within the allFilterKeys param if given or your entire array.

 - allFilterKeys: optional. if given, will only filter within given range.

- useSort(array, key, order):
The function will sort your array according to your desire.
 - array: your array of objects.
 - key: the key given will order the results.
 ex: useSort( [{id: 2, name: "second"}, {id: 1, name: "first"}], "id", "desc") =>  [{id: 1, name: "first"}, {id: 2, name: "second"}]
 - order: only accepts "desc" or "asc".
