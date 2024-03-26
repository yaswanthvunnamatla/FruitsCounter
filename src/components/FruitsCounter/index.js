// Write your code here
import {Component} from 'react'
import './index.css'
class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onClickMangoBtn = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }
  onClickBananaBtn = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="fruits-container">
        <div className="container">
          <h1 className="main-heading">
            Bob ate <span className="count">{mangoesCount} </span>
            mangoes <span className="count">{bananasCount} </span>bananas
          </h1>
          <div className="counter-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <div className="buttons-container">
                <button
                  className="mango-button button"
                  type="button"
                  onClick={this.onClickMangoBtn}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <div className="buttons-container">
                <button
                  className="banana-button button"
                  type="button"
                  onClick={this.onClickBananaBtn}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
