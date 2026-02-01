let soLuot = prompt("Hôm nay có bao nhiêu lượt mượn sách?");
soLuot = parseInt(soLuot);

for (let i = 1; i <= soLuot; i++) {
    let tenNguoi = prompt("Nhập tên người mượn:");
    let tenSach = prompt("Nhập tên sách:");
    let soNgay = prompt("Nhập số ngày mượn:");
    soNgay = parseInt(soNgay);

    if (soNgay > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        console.log("Mượn thành công");
    }
}

console.log("Tổng số lượt mượn: " + soLuot);
