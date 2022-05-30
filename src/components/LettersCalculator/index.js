import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputLetters: ''}

  onChangeInput = event => {
    this.setState({inputLetters: event.target.value})
  }

  render() {
    const {inputLetters} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="letters-input">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
            id="letters-input"
          />
          <p className="letters-count">No.of letters: {inputLetters.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
