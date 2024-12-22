//4.1 Sum of a Range
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

//4.2 Reversing an Array

function reverseArray(arr)
{
    let reverseArr = [];

    for (let i = arr.length-1; i >= 0 ; i--)
        reverseArr.push(arr[i]);
    
    return reverseArr;
}

//4.2 Part 2
function reverseArrayInPlace(arr)
{
    for (let i = 0, j= arr.length-1; i < j ; i++,j--)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
    }
}


//4.3 A List

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

//4.3 part 2
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
// Gets an  element and a list & produces a new list. The new list adds the element to the front of the input list
function prepend(value, list) {
  return {value, rest: list};
}

//takes a list and a number and returns the element at the given position in 
//the list (with zero referring to the first element) or undefined when there
// is no such element(make it recursive)
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

//4.4 Deep Compare
function deepEqual(a, b)
{
    if (typeof(a)===typeof(b))
    {
        if(a===null && b===null) return true;
        if(a===null || b===null) return false;

        if (typeof(a)==='object')
        {
            if(Object.keys(a).length === Object.keys(a).length)
            {
                let temp_bool=true;
                for (let key of Object.keys(a))
                {
                    temp_bool = temp_bool && deepEqual(a[key],b[key]);
                    if (!temp_bool) return false;
                }
                return temp_bool;
            }
            else return false;
        }
        else return a === b;
    }
    else return false;
}






