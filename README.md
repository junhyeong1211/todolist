# todolist

2023-07-04 22:42
1. form 사용 이유 알아볼 것
2. reindexList라고 적어둔 함수를 Array.map, Array.slice, spread operation으로 만들어 볼 것. (TIP. map의 콜백함수 두번째 인자는 key값이다.)
3. reindexList를 Array.filter로도 만들어볼 것
4. 사람들은 왜 vanilla js를 사용할 때 퓨어 자바스크립트가 아닌 jQuery를 선호하는지 알아올 것.

고생했어요


2023-07-15 22:09
오늘 코드 봤어요. 생각 많이 해서 작성한게 눈에 잘 보이네요.
아마도 innerHtml을 사용했다면 훨씬 쉽게 작성 할 수 있었을 거에요.

```javascript
let todos = ['두부 사오기', '과자 먹기', '티비 보기'];

function deleteTodo(key) {
  todos = todos.filter((_, k) => k !== key);
}

function render() {
  return todos.map((todo, key) => {
    return `
      <div>
        <p>${key + 1}. ${todo}</p>
        <button onclick="deleteTodo(${key})">X</button>
      </div>
    `;
  });
}

// todolist root div
const wrapper = document.getElementById('list');
wrapper.innerHtml = render().join('');
```

이런식이면 꽤 깔끔하게 코드가 나올 수도 있어요 :)
제가 이번주 훈련이었어서 카톡을 제대로 못봤었네요. 내일 카톡에 대한 대답을 제대로 해줄게요
"실행 컨텍스트" 를 명확히 알았다면 let, const, var가 어떤 차이가 있는지, block scope란 무엇인지, 이벤트 루프란 무엇인지, 메세지 큐가 무엇인지 이해했을거라고 생각해요.
만약 이걸 아직 이해하지 못했다면 이거와 관련해서 공부해보는게 좋을 것 같아요.

바닐라 자바스크립트로 string을 쪼개고 붙이고 하는 일들은 실무에서도 굉장히 중요해요.
Array.[fill, reduce, filter, some, every, map, ...] 등등 많이 알아두어서 적재적소에 사용하는 사람이 되었으면 해요.

코드를 짤 줄 아는 것과 남에게 코드를 보여주고 자신의 의도를 이해시키는것과는 상당히 거리가 있어요.
위에서 말한 prototype 함수들을 정말 잘 사용할 수 있으면, 자신의 의도를 이해시켜 비즈니스 비용을 감소시킬 수 있다는 것을 명심하고 꼭 알아두세요.

고생 많이했어요




