let totalBooks = 0;
let lostBooks = 0;
let outOfStock = 0;
let manyStock = 0;
let normalStock = 0;

while (true) {
    let choice = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (choice === "không") {
        break;
    }

    if (choice === "có") {
        let bookCode = prompt("Nhập mã sách:");
        let bookName = prompt("Nhập tên sách:");

        let quantity = prompt("Nhập số lượng thực tế trong kho:");
        quantity = parseInt(quantity);

        let status = prompt("Nhập tình trạng sách (1-Bình thường, 2-Mất):");
        status = parseInt(status);

        totalBooks++;

        if (status === 2) {
            console.log("Sách mất");
            lostBooks++;
        } 
        else if (status === 1 && quantity === 0) {
            console.log("Sách hết hàng");
            outOfStock++;
        } 
        else if (status === 1 && quantity >= 10) {
            console.log("Sách tồn kho nhiều");
            manyStock++;
        } 
        else if (status === 1 && quantity >= 1 && quantity <= 9) {
            console.log("Sách tồn kho bình thường");
            normalStock++;
        }
    }
}

console.log("===== BÁO CÁO KIỂM KÊ =====");
console.log("Tổng số sách đã kiểm kê: " + totalBooks + " cuốn");
console.log("Số sách mất: " + lostBooks + " cuốn");
console.log("Số sách hết hàng: " + outOfStock + " cuốn");
