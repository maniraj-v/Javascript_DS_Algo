// Bubble Sort

const array = [8,12,7,1,2,6,5]

for(let i=0;i<array.length;i++){
	for(let j=i+1;j<array.length;j++){
			if(array[i] > array[j]){
      		const temp = array[i]
          array[i] = array[j]
          array[j] = temp
      }
	}
}

console.log(array)
