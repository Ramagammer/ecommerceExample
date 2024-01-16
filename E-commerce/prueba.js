function chunkArrayInGroups(arr, size) {

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    newArr.slice(size)
    console.log(newArr)
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);