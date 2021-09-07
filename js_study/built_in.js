console.log('Math.PI',Math.PI);
console.log('Math.random()',Math.random()); //method 객체 소속 함수를 보통 메소드라고 부름
//소숫점 내림
console.log('Math.floor(3.9)',Math.floor(2.2));

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val)
    }
}
console.log('MyMath.PI:',MyMath.PI);
console.log('MyMath.random():',MyMath.random());
console.log('MyMath.floor(val):',MyMath.floor(3.9));

MyMath_PI = Math.PI; 
function MyMath_random(){
    return MyMath.random()
}
function MyMath_floor(val){
    return MyMath.floor(val)
}

