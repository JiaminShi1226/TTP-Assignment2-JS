let numbers = [1, 2, 3, 4, 5];
let numbers1 = [2, 4, 6, 8, 10];
const fruits = ["apple", "banana", "orange", "grape"];
const animals = ["cat", "dog", "bird", "dog", "fish"];
const student = {
  firstname: "John",
  lastname: "Doe",
  age: 22,
  gender: "male",
};
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
const nums = [0, 1, 0, 3, 12];

//1. myEach()
function myEach(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
let forEach = myEach(numbers, (ele) => {
  return ele;
});
console.log(forEach);

//2. myMap()
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
let doubledNumbers = myMap(numbers, (ele) => {
  return ele * 2;
});
console.log(doubledNumbers);

//3. myFilter()
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(callback(arr[i]));
    }
  }
  return result;
}
let evenNumbers = myFilter(numbers, (ele) => {
  return ele;
});
console.log(evenNumbers);

//4. mySome()
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true;
  }
  return false;
}
let hasNumbers = mySome(numbers, (ele) => {
  return ele % 2 === 0;
});
console.log(hasNumbers);

//5. myEvery()
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) return false;
  }
  return true;
}
let allNumbersEven = myEvery(numbers1, (ele) => {
  return ele % 2 === 0;
});
console.log(allNumbersEven);

//6. myReduce()
function myReduce(arr, callback, init) {
  let acc = init;
  for (const ele of arr) {
    acc = callback(acc, ele);
  }
  return acc;
}
let sum = myReduce(numbers, (acc, cur) => acc + cur, 0);
console.log(sum);

//7. myIncludes()
function myIncludes(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) return true;
  }
  return false;
}
console.log(myIncludes(fruits, "banana"));

//8. myIndexOf()
function myIndexOf(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) return i;
  }
  return -1;
}
console.log(myIndexOf(fruits, "orange"));
console.log(myIndexOf(fruits, "pear"));

//9. myPush()
function myPush(arr, ele) {
  arr[arr.length] = ele;
  return arr.length;
}
const length = myPush(fruits, "pear");
console.log(length);

//10. myUnshift()
function myUnshift(arr, ele) {
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] === ele) return i;
  }
  return -1;
}
console.log(myUnshift(animals, "dog"));
console.log(myUnshift(animals, "cow"));

//11. grabKeys()
function grabKeys(obj) {
  const result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}
console.log(grabKeys(student));

//12. grabValues()
function grabValues(obj) {
  const result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}
console.log(grabValues(car));

//Misc problem 1
function sumOfRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += this[i];
  }
  return sum;
}

//Misc problem 2
function reverseArray(arr) {
  let temp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}
function reverseArrayInPlace(arr) {
  let temp;
  let j = arr.length - 1;
  for (let i = 0; i < j; i++) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
}

//Misc problem 3
function arrayToList() {
  let list = {
    value: this[0],
    rest: {},
  };
  let ptr = list;

  for (let i = 1; i < this.length; i++) {
    let next = {
      value: this[i],
      rest: {},
    };
    ptr.rest = next;
    ptr = next;
  }

  return list;
}

//Misc problem 4
function deepComparison(obj) {
  if (typeof obj === "object" && obj != null) {
    keys1 = this.grabKeys();
    keys2 = obj.grabKeys();

    if (keys1.length != keys2.length) return false;

    for (const key in this) {
      if (obj[key] === undefined) return false;
      else if (this[key] === obj[key]) continue;
      else return false;
    }
  }
  return true;
}

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZeros(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }
  return nums;
}
const result = moveZeros(nums);
console.log(result);
