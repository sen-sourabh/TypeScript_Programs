/**
 * @returns 
 * Will return simple numeric array
 */
export const emptyArray = (): any => {
    return []
}

/**
 * 
 * @param args 
 * will accept numeric or string type values seperated by comma (,)
 * @example
 * const arr = createArray(1, 2, 3, 4, 6, ...)
 * const arr = createArray("raj", "cup", "mug", "cat", "dog", ...)
 * 
 * @returns 
 * Will return an array of given values
 * @example
 * [1, 2, 3, 4, 6, ...]
 */
export const createArray = (...args: number[]): any => {
    try {
        return [...args];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param position 
 * Will accept position as number
 * @returns 
 * Will return value at given position
 */
export const getElementFromPosition = (array: any, position: number | string): any => {
    try {
        return array[position]
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param element 
 * Will accept numeric or string value or element
 * @returns 
 * Will return array with added new element at the end
 */
export const addElementAtEndOfArray = (array: any, element: number | string): any => {
    try {
        return [...array].push(element);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @returns 
 * Will return array without last element
 */
export const removeLastElementFromArray = (array: any): any => {
    try {
        return array.pop();
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or  string array
 * @returns 
 * Will return array without first element
 */
export const removeFirstElementFromArray = (array: any): any => {
    try {
        array.shift();
        return array;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param element 
 * Will accept new element that need to be added
 * @returns 
 * Will return array with given element
 */
export const addNewElementAtBeginingOfArray = (array: any, element: number | string): any => {
    try {
        array.unshift(element);
        return array;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric, string or object array
 * @returns 
 * Will return length of array
 */
export const getLength = (array: any): any => {
    try {
        return array.length;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param element
 * Will accept element to search
 * @returns 
 * Will return true (If exists) else false
 */
export const contains = (array: any, element: number | string): any => {
    try {
        return array.includes(element) ? true : false;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array1 
 * Will accept numeric, string or objects array
 * @param array2 
 * Will accept numeric, string or objects array
 * @returns
 * Will return merged array 
 */
export const mergeTwoArrays = (array1: any, array2: any): any => {
    try {
        return [...array1, ...array2];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric array
 * @param order 
 * Will accept keyword as 'ASC' or 'DESC'
 * @returns 
 * Will return sorted array as per the given order
 */
export const sort = (array: any, order: string): any => {
    try {
        if (order === 'DESC') {
            return array.sort((x: number, y: number) => { return y - x });
        } else {
            return array.sort((x: number, y: number) => { return x - y });
        }
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric, string or object array
 * @returns 
 * Will return reversed array
 */
export const reverse = (array: any): any => {
    try {
        let arr = [];
        for (let i = array.length - 1; i >= 0; i--) {
            arr.push(array[i]);
        }
        return arr;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param element 
 * Will accpet numeric or string value
 * @returns 
 * Will return the position or index of given element
 */
export const findIndexOfElement = (array: any, element: number | string): any => {
    try {
        return array.indexOf(element);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * @param position 
 * Will accept index number or position of element
 * @returns 
 * Will return array without that value at given position
 */
export const removeElement = (array: any, position: number): any => {
    try {
        array.splice(position, 1);
        return array;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric, string or objects array
 * @returns 
 * Will return new array.
 */
export const copy = (array: any): any => {
    try {
        return [...array];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric, string or objects array
 * @returns 
 * Will return true (If array is empty) else false
 */
export const isEmpty = (array: any): any => {
    try {
        return array.length === 0 ? true : false;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric or string array
 * 
 * @param delimeter
 * Will accept character
 * 
 * @returns 
 * Will return string
 */
export const arrayToString = (array: any, delimeter: string): any => {
    try {
        return array.join(delimeter);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param text 
 * Will accept string
 * 
 * @param delimeter
 * Will accept character
 * 
 * @returns 
 * Will return array
 */
export const stringToArray = (text: string, delimeter: string): any => {
    try {
        return text.split(delimeter);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric array
 * @returns 
 * Will return minimum value
 */
export const findMinimum = (array: any): any => {
    try {
        return [...sort(array, 'ASC')][0];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric array
 * @returns 
 * Will return maxmum value
 */
export const findMaximum = (array: any): any => {
    try {
        return [...sort(array, 'DESC')][0];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric array
 * @returns 
 * Will return sum of all values
 */
export const sumFromArray = (array: any): any => {
    try {
        return array.length === 0 ? 0 : array.reduce((totalSum: number, x: number) => totalSum + x);
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric array
 * @returns 
 * Will return average of all values
 */
export const averageFromArray = (array: any): any => {
    try {
        let totalSum = array.length === 0 ? 0 : array.reduce((totalSum: number, x: number) => totalSum + x);
        return totalSum === 0 ? 0 : totalSum / array.length;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric/string array
 * @returns 
 * Will return new array without duplicate elements
 */
export const removeDuplicateFromArray = (array: any): any => {
    try {
        let newArray: any[] = [];
        if (array.length > 0) {
            array.map(((x: string | number) => {
                if (!contains(newArray, x)) { newArray.push(x) }
            }));
        }
        return [...newArray];
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric/string array
 * @returns 
 * Will return true or fasle when wether all elements are same/identical or not respectively 
 */
export const isAllElementsAreIdentical = (array: any): any => {
    try {
        return array.length <= 1 ? false : removeDuplicateFromArray(array).length === 1 ? true : false;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param array 
 * Will accept numeric/string array
 * @returns 
 * Will return true or fasle when wether all elements are unique or not respectively 
 */
export const isAllElementsAreUnique = (array: any): any => {
    try {
        let afterLength = removeDuplicateFromArray(array).length;
        return array.length <= 1 ? true : array.length != afterLength ? false : true;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param primaryArray 
 * Will accept numeric/string array
 * @param secondaryArray 
 * Will accept numeric/string array
 * @returns 
 * Will return true (if secondaryArray is a subset of primaryArray) else false
 */
export const isSubset = (primaryArray: number[] | string[], secondaryArray: number[] | string[]) => {
    try {
        let flag = 0;
        for (let i = 0; i < secondaryArray.length; i++) {
            if (!contains(primaryArray, secondaryArray[i])) {
                flag = 1;
                break;
            }
        }
        return flag ? false : true;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param arr 
 * Will accept numeric or string array
 * @param element 
 * Will accept any element of type numeric or string
 * @returns 
 * Will return position of element
 */
export const findfirstOccurenceOfElement = (arr: number[] | string[], element: number | string) => {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i]) {
                return i;
            }
        }
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param arr 
 * Will accept numeric or string array
 * @param element 
 * Will accept any element of type numeric or string
 * @returns 
 * Will return total of occurence of element in array
 */
export const countOccurenceOfElement = (arr: number[] | string[], element: number | string) => {
    try {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i]) {
                count++;
            }
        }
        return count;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param arr 
 * Will accept numric/string array
 * @param element 
 * Will accept numeric/string element value
 * @returns 
 * Will retrun new array without given element
 */
export const removeOccurenceOfElement = (arr: any[], element: number | string) => {
    try {
        let newArr: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i]) {
                continue;
            }
            newArr = [...newArr, arr[i]];
        }
        return newArr;
    } catch (error) {
        return error;
    }
}

/**
 *
 * @description
 * Falsy array example:
 * [false, null, 3, undefined, 0, 5, NaN, "", 'cat', {}, { id: 1, name: 'Raj'}]
 * @param arr 
 * Will accept hybrid type of array
 * @returns 
 * Will return new array without any falsy elements in an array
 */
export const removeAllFalsyElements = (arr: any[]) => {
    try {
        let newArr: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i] || arr[i] === undefined || Number.isNaN(arr[i]) || arr[i] === "" || arr[i] === '' || arr[i] === 0 || (typeof arr[i] === "object" && Object.keys(arr[i]).length === 0)) {
                continue;
            }
            newArr = [...newArr, arr[i]];
        }
        return newArr;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @description
 * Falsy array example:
 * [false, null, 3, undefined, 0, 5, NaN, "", 'cat', {}, { id: 1, name: 'Raj'}]
 * @param arr 
 * Will accept hybrid type of array
 * @returns 
 * Will return true (If array has any falsy element) else false
 */
export const hasFalsy = (arr: any[]) => {
    try {
        let flag = 0;
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i] || arr[i] === undefined || Number.isNaN(arr[i]) || arr[i] === "" || arr[i] === '' || arr[i] === 0 || (typeof arr[i] === "object" && Object.keys(arr[i]).length === 0)) {
                flag = 1;
                break;
            }
        }
        return flag ? true : false;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @description
 * Nested array: [1, [2, [3], 4, [5, 6, [7]]]]
 * Flattern array: [1, 2, 3, 4, 5, 6, 7]
 * @param arr 
 * Will accept array of type numeric/string
 * @returns 
 * Will return flattern array
 */
export const flattenArray = (arr: any[]): any => {
    try {
        let newArr: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            let tempArr: any[] = [];
            if (typeof arr[i] === "object") {
                tempArr = flattenArray(arr[i])
            }
            newArr = tempArr.length > 0 ? [...newArr, ...tempArr] : newArr = [...newArr, arr[i]];
        }
        return newArr;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @description
 * Fucntion will return single random element from an array
 * @param arr 
 * Will accept array of type numeric/string
 * @returns 
 * Will return single element from an array
 */
export const getRandomElement = (arr: string[] | number[]): any => {
    try {
        return !isEmpty(arr) ? arr[Math.floor(Math.random() * Number(arr.length - 1))] : 'Array must contain at least one element';
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @description
 * Function will shuffle the array elements  
 * input: [1, 2, 3, 4, 5]  
 * output: [3, 4, 2, 1, 5]
 * @param arr
 * Will accept array of type numeric/string
 * @returns 
 * Will return shuffled element's array
 */
export const shuffleArray = (arr: string[] | number[]): any => {
    try {
        return !isEmpty(arr) ? arr.sort(() => Math.random() - 0.5) : 'Array must contain at least one element';
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @description
 * Function will compare the array and return the tru and false if array are identical with elements  
 * input: [1, 2, 3, 4, 5]  
 * output: [3, 4, 2, 1, 5] //true
 * @param 
 * Will accept primaryArray & secondaryArray of type numeric/string
 * @returns 
 * Will return true If array elements are equal.
 */
export const compareArray = (primaryArray: string[] | number[], secondaryArray: string[] | number[]): any => {
    try {
        if (
            (!isEmpty(primaryArray) && !isEmpty(secondaryArray)) && 
            (primaryArray.length === secondaryArray.length) && 
            (isSubset(primaryArray, secondaryArray))
        ) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}
