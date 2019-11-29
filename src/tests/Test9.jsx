import React from "react";

class Test9 extends React.PureComponent {
  state = {
    fullName: "",
    personalCode: 0,
    phoneNumber: 0,
    address: "",
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
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

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }
  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="fullName" onChange={this.handleChange} placeholder="full name" value={this.state.fullName} />
          <input name="personalCode" onChange={this.handleChange} placeholder="personal code" value={this.state.personalCode} />
          <input name="phoneNumber" onChange={this.handleChange} placeholder="phone number" value={this.state.phoneNumber} />
          <input name="address" onChange={this.handleChange} placeholder="address" value={this.state.adress} />
          <input type="submit" value="Send data"/>
        </form>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
