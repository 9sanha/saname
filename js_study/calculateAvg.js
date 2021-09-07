
function calculateAvg(price1,price2,price3){
    const avg = (price1+price2+price3)/3
    return avg
}
const p1 = 5000;
const p2 = 4999;
const p3 = 2984;
console.log(`평균가격: ${calculateAvg(p1,p2,p3)}`);