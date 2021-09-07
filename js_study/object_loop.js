//배열 - 단순 나열
var memberArray = ['egoing','gra','leez'] 
console.group('array loop')

var i = 0;
while(i<memberArray.length){
    console.log(memberArray[i]);
    i=i+1
}
console.groupEnd('array loop')

//객체 - 이름이 있는 정보를 정리정돈할 때 주로 사용함
console.group('array loop')
var memberObject = {
    manager:'eg',
    deverloper:'wef',
    designer:"leee"
}

for(var name in memberObject){
    console.log(name,memberObject[name]);
}
console.groupEnd('array loop')


