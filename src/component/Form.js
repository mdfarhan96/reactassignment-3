import React, { Component } from "react";
import Details from "./Details";
export class Form extends Component {
  state = {
    name: "",
    dept: "",
    rating: "",
    user: [],
    details: true,
  };

  DetailsChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  DetailsSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
      details: this.state.details,
    };

    const tempArr = this.state.user;
    tempArr.push(tempObj);
    this.setState({
      user: tempArr,
      details: !this.state.details,
    });
  };

  Backpage = () => {
    this.setState({
      details: !this.state.details,
    });
  };

  render() {
    console.log(this.state.user, "USER");
    return (
      <>
        {this.state.details ? (
          <div className="feedbackform">
            <h1>Employee FeedBack Form</h1>
            <form className="forms">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.DetailsChange}
                required
              />
              <br />
              <label htmlFor="">Department:</label>
              <input
                type="text"
                name="dept"
                id="dept"
                value={this.state.dept}
                onChange={this.DetailsChange}
                required
              />
              <br />
              <label htmlFor="">Rating: </label>
              <input
                type="text"
                name="rating"
                id="rating"
                value={this.state.rating}
                onChange={this.DetailsChange}
                required
              />
              <br />
              <button onClick={this.DetailsSubmit.bind(this)}>Submit</button>
            </form>
          </div>
        ) : (
          <Details data={this.state.user} back={this.Backpage} />
        )}
      </>
    );
  }
}

export default Form;
