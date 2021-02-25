import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css'; // 단순히 공간 안에 import하면 적용됨

const Star = ({ selected=false, onClick=f=>f }) =>
<div className={(selected) ? "star selected" : "star"}
     onClick={onClick}>
</div>

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

class StarRating extends Component {

  static propTypes  = {
    totalStars: PropTypes.number
  }

  static defaultProps = {
    totalStars: 5
  }

  constructor(props){
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0
    }
    this.change = this.change.bind(this)
  }
  
  change(starsSelected){
    this.setState({ starsSelected })
  }

  render(){
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
          <Star key={i} 
            selected={i < starsSelected } // starSelected 전까지 모두 selected 처리
            onClick={() => this.change(i + 1)} // 0부터 시작하므로 + 1
          />
        )}
        <p>별점: {starsSelected} / {totalStars}</p>
      </div>
    )
  }
}


ReactDOM.render(
    <StarRating totalStars={7} starsSelected={3} />,
  document.getElementById('root')
);


