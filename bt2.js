let totalReturn = prompt("How many book returns today?");
totalReturn = parseInt(totalReturn);

let lateCount = 0;

for (let i = 1; i <= totalReturn; i++) {
    let returnName = prompt("Enter returner name:");
    let bookName = prompt("Enter book name:");
    
    let borrowedDays = prompt("Enter borrowed days:");
    borrowedDays = parseInt(borrowedDays);

    while (borrowedDays < 1 || isNaN(borrowedDays)) {
        borrowedDays = prompt("Invalid! Enter borrowed days again (>=1):");
        borrowedDays = parseInt(borrowedDays);
    }

    if (borrowedDays <= 14) {
        console.log("On-time return");
    } else if (borrowedDays >= 15 && borrowedDays <= 21) {
        console.log("Slightly late");
        console.log("Warning penalty");
        lateCount++;
    } else {
        console.log("Seriously overdue");
        console.log("Need official penalty report");
        lateCount++;
    }
}

console.log("Total returns: " + totalReturn);
console.log("Late returns: " + lateCount);
