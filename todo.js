const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //폼 제출시 새로고침 안함

  if (input.value !== '') { //내가 실제 입력시
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    
    const index = ul.children.length + 1; //목차 표시
    li.innerText = `${index}. ${input.value} `; // 목차, 띄어쓰기, 입력 값 함께 표시
    delBtn.innerText="V"; //delete버튼을 v로 표시함
   
    li.appendChild(delBtn); //li의 자식
    ul.appendChild(li); //ui의 자식

    input.value = ''; //입력 상자 비워버리기

    delBtn.addEventListener('click', () =>{
      li.remove(); //클릭 이벤트 발생시 list 사라짐
      /*reindexList(); if문으로 1,2,3 목차에서 2사라지면 3이 2가되도록 하고 싶은데 잘 안됨*/
    });
  }
});
/*
function reindexList() {
  if(
} 일단 유기*/