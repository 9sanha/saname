class Person{
    //클래스 생성자 함수
    constructor(name, first, second){
        console.log('생성자 함수 호출');
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype: '+(this.first+this.second)
    }
}

//construct함수 - 객체 생성 및 객체 초기화

var kim = new Person('kim',10,20)
var lee = new Person('lee',10,20)

// 클래스 내 함수보다 우선순위 높음
kim.sum = function(){
    return 'this: '+(this.first+this.second)
}

console.log('kim:',kim);
console.log('kim.sum():',kim.sum());
console.log('lee.sum():',lee.sum());
