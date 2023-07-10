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
      reindex();
    });
  }
});

function reindex() {
  const lis = ul.querySelectorAll('li'); //ul 요소 내의 li 선택

  lis.forEach((li, index) => {
    const textNode = li.firstChild; //첫번째 텍스트 노드 선택
    const text = textNode.textContent.split('. ')[1]; //숫자와 텍스트 분리
    textNode.textContent = `${index + 1}. ${text}`; //노드 내용 업데이트

    const existingDelBtn = li.querySelector('button');
    if (!existingDelBtn) { //버튼 존재않는다면...
      const delBtn = document.createElement('button'); //버튼 만듦
      delBtn.innerText = "V";
      delBtn.addEventListener('click', (event) => {
        event.stopPropagation(); //매서드 호출, 부모로 전달 방지
        li.remove();
        reindex();
      });

      li.appendChild(delBtn); //생성한 del버튼 li요소에 추가
    }
  });
}