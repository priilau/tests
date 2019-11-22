import React from "react";

class Test7 extends React.PureComponent {
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

  render() {
    return (
      <div>
        <Task />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="fullName" onChange={this.handleChange} placeholder="full name" value={this.state.fullName} />
          <input name="phoneNumber" onChange={this.handleChange} placeholder="phone number" value={this.state.phoneNumber} />
          <input name="address" onChange={this.handleChange} placeholder="address" value={this.state.address} />
          <input type="submit" value="Send data"/>
        </form>
      </div>
    );
  }
}

export default Test7;

const Task = () => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>
  </div>
);