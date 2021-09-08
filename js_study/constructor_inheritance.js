//prototype 개념 이해용이기 때문에 실제는 class.js파일 참고해서 코딩하면 가성비 좋은 코딩을 할 수 있습니다~~!

function Person(name,first,second){
    this.name=name
    this.first=first
    this.second=second
}

Person.prototype.sum = function(){
    return this.first+this.second
}

function PersonPlus(name,first,second,third){
    Person.call(this,name,first,second)
    this.third =third
}

// replace 방법이 아닌 __proto__만 바꿔줌 
//PersonPlus.prototype.__proto__ = Person.prototype

//personPlus prototype 루트 아예 바꿔버리기~~!!
PersonPlus.prototype = Object.create(Person.prototype)

PersonPlus.prototype.constructor=PersonPlus

//이 코드가 위로 올라가면 avg 위에 덮어써져서 지워짐 
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3
}

var kim = new PersonPlus('kim',10,20,30)
console.log("kim.sum(): ",kim.sum());
console.log("kim.avg(): ",kim.avg());
console.log('kim.constructor',kim.constructor);
