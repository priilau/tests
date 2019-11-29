import React from "react";

class Test8 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.enabled = true;
  }

  state = {
    fullName: "",
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

  enableDisable = () => {
    if(this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
    document.getElementById("fieldset").disabled = this.enabled;
  }

  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset id="fieldset">
            <input name="fullName" onChange={this.handleChange} placeholder="full name" value={this.state.fullName} />
            <input name="phoneNumber" onChange={this.handleChange} placeholder="phone number" value={this.state.phoneNumber} />
            <input name="address" onChange={this.handleChange} placeholder="address" value={this.state.address} />
            <input type="submit" value="Send data"/>
          </fieldset>
        </form>
        <button onClick={this.enableDisable}>enable/disable</button>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);