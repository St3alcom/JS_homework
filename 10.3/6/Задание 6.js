const values = [1, 100, 5, 6, 13, 13, 22, 5];
const duplicates = values.filter((number, index, numbers) => {
    console.log(number); 
    console.log(index); 
    console.log(numbers); 
    return numbers.indexOf(number) !== index;
    });
    console.log(duplicates);