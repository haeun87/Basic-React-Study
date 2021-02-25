import { Component } from 'react';
import ReactDOM from 'react-dom';
import ProtoTypes from 'prop-types';

// Type 1. class 형태로 선언
class Summary1 extends Component {

  static protoType =  {// 입력 데이터를 검증함
    ingredients: ProtoTypes.number.isRequired, // DataType과 누락 여부를 함께 검증함
    steps: ProtoTypes.number.isRequired,
    title: (props, propName) => // 조건 검증도 가능함
      (typeof props[propName] !== 'string') ?
        new Error('제목(title)은 문자열이어야 합니다.') :
        (props[propName].length > 20) ?
          new Error('제목은 20자 이내여야 합니다.') : 
          null
  };

  static defaultProps = { // 입력이 없는 때에 사용되는 default 값
    ingredients: 3,
    steps: 5,
    title: '[무제]'
  }

  render(){
    const { ingredients, steps, title } = this.props;
    return (
      <div className="Summary1">
        <h1>{ title }</h1>
          <p>
            <span>재료 { ingredients } 종류 | </span>
            <span>총 { steps } 단계 </span>
          </p>
      </div>
    );
    }
}

// Type 2. 함수 형태로 선언
const Summary2 = ({ ingredients=5, steps=10, title=`[무제]` }) => {
  return (
    <div className="Summary2">
      <h1>{ title }</h1>
        <p>
          <span>재료 { ingredients } 종류 | </span>
          <span>총 { steps } 단계 </span>
        </p>
    </div>
  );
}

Summary2.propTypes = {
  ingredients: ProtoTypes.number.isRequired, // DataType과 누락 여부를 함께 검증함
  steps: ProtoTypes.number.isRequired,
  title: (props, propName) => // 조건 검증도 가능함
    (typeof props[propName] !== 'string') ?
      new Error('제목(title)은 문자열이어야 합니다.') :
      (props[propName].length > 20) ?
        new Error('제목은 20자 이내여야 합니다.') : 
        null
};


ReactDOM.render(
    // <Summary1 title="정말 맛있는 비스킷과 달걀"
    // />,
    <Summary2 ingredients="20" steps="5" title="오리 훈제 구이"
    />,
  document.getElementById('root')
);

