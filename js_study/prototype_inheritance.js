//__proto__를 이용한 객체 상속
var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj

console.log('subObj.subVal ->',subObj.subVal);
console.log('subObj.superVal ->',subObj.superVal);
subObj.superval = 'change sub'
console.log('부모 객체 값 안변함 -> ',superObj.superVal);

//Object.create를 이용한 객체 상속
var subObj1 = Object.create(superObj)
subObj.subVal = 'sub'

console.log('subObj1.subVal ->',subObj1.subVal);
console.log('subObj1.superVal ->',subObj1.superVal);
subObj.superval = 'change sub'
console.log('부모 객체 값 안변함 -> ',superObj.superVal);

//응용

var kim = {
    name:'kim',
    first:10,
    second:30,
    sum:function(){
        return this.first+this.second
    }
}

//lee.__proto__ = kim
var lee = Object.create(kim)

lee.first=10
lee.second =10
lee.avg=function(){
    return (this.first+this.second)/2
}

console.log('lee.sum(): ',lee.sum());
console.log('lee.avg(): ',lee.avg());
