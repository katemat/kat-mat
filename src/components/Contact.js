import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      buttonText: 'message sent',
    })
  }

  formSubmit = (e) => {
    e.preventDefault()

    this.setState({
      buttonText: '...sending',
    })

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }

    axios
      .post('https://sheltered-ridge-41042.herokuapp.com/contact', data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch(() => {
        console.log('Message not sent')
        alert('message not sent')
      })
  }

  render() {
    return (
      <section className="contact-page">
        <article className="contact-form">
          <h3>Drop me a line</h3>
          <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <div className="form-group">
              <input
                onChange={(e) => this.setState({ name: e.target.value })}
                name="name"
                type="text"
                placeholder="Your Name"
                value={this.state.name}
                required
                className="form-control"
              />
              <input
                onChange={(e) => this.setState({ email: e.target.value })}
                name="email"
                className="form-control"
                type="email"
                placeholder="your@email.com"
                required
                value={this.state.email}
              />
              <textarea
                onChange={(e) => this.setState({ message: e.target.value })}
                name="message"
                rows="5"
                placeholder="Your message here..."
                className="form-control"
                value={this.state.message}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              {this.state.buttonText}
            </button>
          </form>
        </article>
      </section>
    )
  }
}

export default Contact
