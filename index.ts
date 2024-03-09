import { 
    emptyArray,
    addElementAtEndOfArray,
    addNewElementAtBeginingOfArray,
    arrayToString,
    contains,
    copy,
    createArray,
    findIndexOfElement,
    findMaximum,
    findMinimum,
    getElementFromPosition,
    getLength,
    isEmpty,
    mergeTwoArrays,
    removeElement,
    removeFirstElementFromArray,
    removeLastElementFromArray,
    reverse,
    sort,
    stringToArray,
    sumFromArray,
    averageFromArray,
    removeDuplicateFromArray,
    isAllElementsAreIdentical,
    isAllElementsAreUnique,
    isSubset,
    findfirstOccurenceOfElement,
    countOccurenceOfElement,
    removeOccurenceOfElement,
    removeAllFalsyElements,
    hasFalsy,
    flattenArray,
    getRandomElement,
    shuffleArray,
    compareArray
} from "./arrays";

console.log('\n------------------------ Start Arrays Programs ------------------------');
console.log('1. Create an empty array: ', emptyArray());
console.log('2. Create an array with 5 numbers. & Create an array with 3 strings: ', createArray(3, 4, 5, 6, 77, 8, 90));
console.log('3. Access the third element of an array: ', getElementFromPosition([1, 2, 3, 4, 5], 3));
console.log('4. Add an element to the end of an array: ', addElementAtEndOfArray([1, 2, 3, 4, 5], 6));
console.log('5. Remove the first element of an array: ', removeFirstElementFromArray([1, 2, 3, 4, 5]));
console.log('6. Remove the last element of an array: ', removeLastElementFromArray([1, 2, 3, 4, 5]));
console.log('7. Remove the last element of an array: ', removeLastElementFromArray([1, 2, 3, 4, 5]));
console.log('8. Add an element to the beginning of an array: ', addNewElementAtBeginingOfArray([2, 3, 4, 5], 1));
console.log('9. Get the length of an array: ', getLength([1, 2, 3, 4, 5, 6]));
console.log('10. Check if an array contains a specific element: ', contains([1, 2, 3, 4, 5, 6], 4));
console.log('11. Concatenate/Merge two arrays: ', mergeTwoArrays([1, 2, 4, 5, 3], [8, 3, 1, 4]));
console.log('12. Sort an array in ascending order. & Sort an array in descending order: ', sort([6, 3, 8, 1, 2, 0, 34], 'DESC'));
console.log('13. Reverse an array: ', reverse([12, 23, 34, 45, 67, 78]));
console.log('14. Find the index of a specific element in an array: ', findIndexOfElement([1, 2, 3, 4, 5, 6], 8));
console.log('15. Remove an element from an array by index: ', removeElement([1, 2, 3, 4, 5, 6], 4));
console.log('16. Create a copy of an array: ', copy([3, 2, 1, 5, 4, 6, 3]));
console.log('17. Check if an array is empty. & Check if an array is not empty: ', isEmpty([]));
console.log('18. Join all elements of an array into a string: ', arrayToString([1, 3, 5, 6, 8, 99, 2], ' | '));
console.log('19. Convert a string into an array: ', stringToArray('1, 2, 3, 4, 5', ','));
console.log('20. Find the minimum value in an array: ', findMinimum([45, 23, 43, 67, 21, 12, 65]));
console.log('21. Find the maximum value in an array: ', findMaximum([45, 23, 43, 67, 21, 12, 65]));
console.log('22. Sum all values in an array: ', sumFromArray([2, 70]));
console.log('23. Average all values in an array: ', averageFromArray([70, 2]));
console.log('24. Remove duplicates from an array: ', removeDuplicateFromArray([1, 1, 1, 1, 1]));
console.log('25. Check if all elements in an array are the same/identical: ', isAllElementsAreIdentical([1, 2, 3, 4, 5]));
console.log('26. Check if an array contains only unique values: ', isAllElementsAreUnique([1, 3, 4, 5, 6]));
console.log('27. Check if an array contains a specific subset of values: ', isSubset([1, 2, 3, 4, 5, 6], [3, 5, 1]));
console.log('28. Find the first occurrence of a value in an array: ', findfirstOccurenceOfElement(['dog', 'hen', 'cat', 'horse', 'cat'], 'cat'));
console.log('29. Count the number of occurrences of a value in an array: ', countOccurenceOfElement(['cat', 'hen', 'cat', 'horse', 'cat'], 'cat'));
console.log('30. Remove all occurrences of a value from an array: ', removeOccurenceOfElement(['cat', 'hen', 'cat', 'horse', 'cat', 'dog'], 'cat'));
console.log('31. Remove all falsy values from an array: ', removeAllFalsyElements([false, null, 3, undefined, 0, 5, NaN, "", 'cat', {}, { id: 1, name: 'Raj'}]));
console.log('32. Check if an array contains any falsy values: ', hasFalsy([false, null, 3, undefined, 0, 5, NaN, "", 'cat', {}, { id: 1, name: 'Raj'}]));
console.log('33. Flatten a nested array: ', flattenArray([1, [2, [3], 4, [5, 6, [7]]]]));
console.log('34. Select a random element from an array: ', getRandomElement([34, 45, 23, 12, 4, 56]));
console.log('35. Shuffle an array in random order: ', shuffleArray([34, 45, 23, 12, 4, 56]));
console.log('36. Compare two arrays for equality: ', compareArray([1, 2, 3, 4, 5], [2, 3, 1, 4, 5]));












console.log('\n\n------------------------ End Arrays Programs ------------------------');
