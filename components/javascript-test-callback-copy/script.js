
function aa(x, y, callback) {
	let z = x + y;
	callback(z);
}

aa(2, 3, function(z){
	console.log("CallBack  " + (z + 2));
});



let x = [1, 2, 3];
let y = [3, 5, 6];
let a = [...x];
a.splice(0,1);
console.log({a});
console.log({x});

let data = {value: {bb: "ff"}};
// let value = data.value;
let {value} = {...data};
console.log({value});
// let  z = x.concat(y);

// let  z = [...x , "8", ...y];

// Object.assign(x, y);
// console.log({x});

// console.log({z});

// function gg(a,b, c=3, ...h) {

// }

// gg(1, 2, 7);


// let aa1 = [1, 2, 3, 4, 5];
// let bb1 = [6, 7, 8, 9, 10];


// for(let i= o; i < aa1.length; i++) {
// 	aa1[i].append(bb1[i]);
// }
// aa1.forEach((el, index) => {
// 	aa1[index].append (bb1[index]);
// });