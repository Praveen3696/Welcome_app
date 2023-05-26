// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onPushing = () => {
    // eslint-disable-next-line
    const {isClicked} = this.state
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>

          <button className="button" onClick={this.onPushing}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
