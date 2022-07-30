
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let testArraySort = [9, -3, 3, 0, -5, 18, -29, 2, 16, 4, 55, 3];
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
    function binarySearch(array, item){
        let start = 0;
        let end = array.length;
        let middle;
        let found = false;
        let position = -1;
        while(found === false && start <= end){
            count ++; 
            middle = Math.floor((start + end) / 2);

            if (array[middle] === item){
                position = middle;
                found = true;
                return position;
            }

            if (item < array[middle]){
                end = middle - 1;
            }else{
                start = middle + 1;
            }
        }
        return position;
    }
    // console.log(binarySearch(testArray, 10));




    
//selection sort=======================================
    function selectionSort(array){
        for (let i = 0; i < array.length; i++){
            for (let j = i+1; j < array.length; j++){
                let arr_1 = array[i];
                let arr_2 = array[j];
                if (array[i] > array[j]){
                    array[i] = arr_2;
                    array[j] = arr_1;
                }
            }
        }
        return array;
    }
    // console.log(selectionSort(testArraySort)); 


//quick sort===========================================
function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++){
        if (i === pivotIndex) continue
        if (array[i] < pivot){
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];

}
// console.log(quickSort(testArraySort));




