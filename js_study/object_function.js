var kim = {
    name:'kim',
    first:20,
    second:10
}
var lee = {
    name:'lee',
    first:20,
    second:40
}
lee.__Proto__=kim
function sum(prefix){
    return prefix+(this.first+this.second)
}
//sum() == sum.call();
// 모든 함수는 call이라는 함수를 갖고있어요
//사실 자바스크립트에서는 함수도 객체래오

//sum()의 this값이 kim이 되는겁니당
//함수의 첫번째 인자는 this값이 되는거구요
//그 다음 인자부터 sum함수의 인자로 넘어갑니당
console.log('sum.call(kim)->',sum.call(kim,'prefix'));
console.log('sum.call(lee)->',sum.call(lee,'prefix'));

