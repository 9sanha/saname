//배열 - 단순 나열
var memberArray = ['egoing','gra','leez'] 
console.log('memberArray[1]:',memberArray[1]);

//객체 - 이름이 있는 정보를 정리정돈할 때 주로 사용함
var memberObject = {
    manager:'eg',
    deverloper:'wef',
    designer:"leee"
}

console.log('memberObject.designerm:',memberObject.designer);
memberObject.designer = 'update'
delete memberObject.manager
console.log('memberObject.designerm:',memberObject['designer']);
console.log('afrer',memberObject.manager);

