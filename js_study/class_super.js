class Person{
    //클래스 생성자 함수 constructor()
    constructor(name, first, second){
        //console.log('class Person 생성자 함수 호출');
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second
    }
}
//상속
//기존 class의 메소드 등의 기능을 다른 class에서 가져다 쓰고 싶을 때 
//코드 중복 없이 기존 class의 기능만 가져올 수 있게 한다.

//extends Person - Person이라는 class를 확장한다
class PersonPlus extends Person{
    constructor(name, first, second,third){
        //부모 class의 생성자 호출
        super(name,first,second);  
        this.third = third;
    }
    sum(){
        //부모 class의 함수 호출( 부모 class = super)
        return super.sum()+this.third
    }
    avg(){
        return (this.first+this.second+this.third)/3
    }
}

var kim = new PersonPlus('kim',10,20,30)

console.log('kim.avg():',kim.avg());

