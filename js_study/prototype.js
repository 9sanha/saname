function Person(name,first,second,third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third
}
//prototype - 객체 내 함수를 객체 외부로 인출하여 함수 원형을 만듦
//-> 메모리 절약으로 성능 향상 
Person.prototype.sum=function(){
    return 'prototype: '+(this.first+this.second+this.third);
}

var kim = new Person('kim',10,20,30)

kim.sum = function(){
    return 'this: '+(this.first+this.second+this.third);
}
// 실행 순서 
// 1. 객체가(kim) sum() 함수를 갖고있는지 판단
//-> 객체의 sum() 함수 재정의
//2. 객체 안에 없으면(lee) prototype 내에 sum()함수가 있는지 판단
var lee = new Person('lee',10,20,40)

console.log('kim.sum():',kim.sum());
console.log('lee.sum():',lee.sum());
