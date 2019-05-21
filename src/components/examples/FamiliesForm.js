import React, { Component } from "react";
import PropTypes from "prop-types";

class FamiliesForm extends Component {
  state = {
    fields: {
      title: ""
    }
  };

  handleInputChange = evt =>
    this.setState({ fields: { [evt.target.name]: evt.target.value } });

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addFamily({ variables: { title: this.state.fields.title } });
  };

  render() {
    const { title } = this.state.fields;
    return (
      <form className="create-characters__form" onSubmit={this.handleSubmit}>
        <label className="create-characters__label" htmlFor="title">
          Title:
        </label>
        <input
          name="title"
          id="title"
          type="text"
          className="create-characters__input"
          value={title}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="create-characters__submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    );
  }
}

FamiliesForm.propTypes = {
  addFamily: PropTypes.func.isRequired
};

export default FamiliesForm;
