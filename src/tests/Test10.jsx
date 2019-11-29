import React from "react";

class Test10 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fullName = React.createRef();
    this.personalCode = React.createRef();
    this.phoneNumber = React.createRef();
    this.address = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formBody = {
     fullName: this.fullName.current.value,
     personalCode: this.personalCode.current.value,
     phoneNumber: this.phoneNumber.current.value,
     address: this.address.current.value,
    };
    fetch("/api/v1/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formBody)
    })
    .then(res => res.text())
    .then(data => {
      console.log(data);
      this.setState({responseText: data});
    })
    .catch(err => {
      console.log("err:", err);
    });
  }

  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="fullName" placeholder="full name" ref={this.fullName}/>
          <input name="personalCode" placeholder="personal code" ref={this.personalCode}/>
          <input name="phoneNumber" placeholder="phone number" ref={this.phoneNumber}/>
          <input name="address" placeholder="address" ref={this.address}/>
          <input type="submit" value="Send data"/>
        </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
