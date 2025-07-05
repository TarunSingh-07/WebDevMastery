let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed, please enter a valid number");
}

let sum = parseInt(a) + parseInt(b)

// let x = 1
// try {
//     console.log('The sum is : ', sum * x);
// } catch (error) {
//     console.log('Error aa geya bhai');
// }
// finally {
//     console.log('Files are being closed and db connection is being closed');
//     // This will always run
//     // It basically helps when you have functions that need to be executed regardless of whether an error occurred or not
// }

function main() {
    let x = 1
    try {
        console.log('The sum is : ', sum * x);
        return true
    } catch (error) {
        console.log('Error aa geya bhai');
        return false
    }
    finally {
        console.log('Files are being closed and db connection is being closed');
    }
    // Idhr return hone ke baad toh code nhi chalega but 'finally' mention karne se ye code chalega, jo last wala clog he.
}

let c = main()