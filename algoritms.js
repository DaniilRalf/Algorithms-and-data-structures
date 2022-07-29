
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;


//linear search========================================
function linearSearch(array, item){
    for (let i = 0; i < array.length; i++){
        count ++;
        if (array[i] === item){
            return i; //return index element
        }
    }
    return null;
}
// console.log(linearSearch(testArray, 9));


//binary search=======================================



