// // function addinator(array) {
// //     let count = 0;
// //     for(let number of array) {
// //         count += number;
// //     }
// //     return count;
// // }

module.exports = (array) => {
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum;
};
// arrow function => 