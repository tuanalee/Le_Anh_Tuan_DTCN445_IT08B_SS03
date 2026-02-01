let successCount = 0;
let failCount = 0;

while (true) {
    let answer = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (answer === "không") {
        break;
    }

    if (answer === "có") {
        let readerName = prompt("Nhập tên bạn đọc:");
        let bookName = prompt("Nhập tên sách:");

        let currentDays = prompt("Nhập số ngày đã mượn:");
        currentDays = parseInt(currentDays);

        let extendDays = prompt("Nhập số ngày muốn gia hạn thêm:");
        extendDays = parseInt(extendDays);

        let totalDays = currentDays + extendDays;

        if (totalDays > 60) {
            console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
            failCount++;
        } 
        else if (currentDays > 45) {
            console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
            failCount++;
        } 
        else {
            console.log("Gia hạn thành công");
            successCount++;
        }
    }
}

console.log("===== THỐNG KÊ =====");
console.log("Số lần gia hạn thành công: " + successCount);
console.log("Số lần gia hạn không thành công: " + failCount);
