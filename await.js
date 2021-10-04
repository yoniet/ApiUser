function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x);
}

f1();

// async function myFunction() {
//     return "Hello";
// }

// async function myFunction() {
//     return Promise.resolve("Hello");
// }

// console.log( myFunction());