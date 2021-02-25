import { Component } from 'react';
import ReactDOM from 'react-dom';

/*
 (참고) this 바인딩
  - 자바스크립트에서 this는 Browser일 때, node.js일 때, strict 모드 일 때 등 값이 달라질 수 있는 위험이 있다.
  - bind로 this 또는 특정 객체를 바인딩하면 그 객체 내에 있는 this는 그 this 또는 특정 객체로 고정된다.
  - 특정 객체로 고정하는 경우 클래스에서 호출하는 this 프로퍼티 들은 동일 명칭의 특정 객체 프로퍼티로 간주되며, this의 경우에는 객체 자신의 프로퍼티로 간주된다.
  - this로 바인딩하는 경우에는 생성자 내부에 선언하여 사용하면 되고, 특정 객체인 경우에는 외부에서 해당 객체에 대한 별도 바인딩으로 설정하여 새로운 객체로 받아 사용하면 된다. 
*/
// 클래스 형태로 구현
class AddColorForm1 extends Component {
  constructor(props){
    super(props);
    // 클래스 프로퍼티에 this를 사용하여 메서드를 직접 바인딩함(관련 메서드에 this 영역 바인딩)
    this.submit = this.submit.bind(this);
  }
  submit(e){
    const { _title, _color } = this.refs;
    e.preventDefault();
    this.props.onNewColor(_title.value, _color.value)
    _title.value= '';
    _color.value='#000000';
    _title.focus();
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" 
          type="text" 
          placeholder="색 이름..." required />
        <input ref="_color" 
              type="color" required />
        <button>추가</button>
      </form>
    )
  }
}

/*
  fn: f=>f
  특정 함수에 더미 함수를 설정하여 오류 발생시 '단순히 자신이 받은 첫 번째 인자를 반환'하게 만들 수 있다.
   => 더미 함수 설정으로 해당 함수를 실행하지 않은 것처럼 처리하고 넘기게 됨
*/
// 상태가 없는 함수형 컴포넌트로 구현
const AddColorForm2 = ({onNewColor=f=>f}) => {
  let _title, _color;
  
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value, _color.value)
    _title.value= '';
    _color.value='#000000';
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input }
        type="text" 
        placeholder="색 이름..." required />
      <input ref={input => _color = input }
            type="color" required />
      <button>추가</button>
    </form>
  );

}

ReactDOM.render(
    // <AddColorForm1 onNewColor={
    //   ( title, color ) => { 
    //     console.log(`TODO: 새로운 색 정보 ${title}과 ${color}를 리스트에 넣는다`) 
    //     console.log(`TODO: 새로운 색을 가지고 UI를 표시한다`);
    //   }} 
    // />,
    <AddColorForm2 onNewColor={
      ( title, color ) => { 
        console.log(`TODO: 새로운 색 정보 ${title}과 ${color}를 리스트에 넣는다`) 
        console.log(`TODO: 새로운 색을 가지고 UI를 표시한다`);
      }} 
    />,
  document.getElementById('root')
);
