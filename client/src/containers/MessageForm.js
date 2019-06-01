import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleNewMessage = event => {
    event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="form">
        <div className="col-md-4 col-sm-6">
          <form onSubmit={this.handleNewMessage}>
            {this.props.errors.message && (
              <div className="alert alert-danger">
                {this.props.errors.message}
              </div>
            )}
            <textarea
              type="text"
              className="form-control"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button type="submit" className="btn__auth">
              Post Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
