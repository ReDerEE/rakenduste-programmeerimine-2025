import "../style/Personal.css"

function Personal() {
  return (
    <div id="personalBox">
      <div id="name">
        <h1>Carl-Eric Sepp</h1>
      </div>
      <div id="hobbiesList">
        Hobbies
        <ul>
          <li>VR games</li>
          <li>Cooking</li>
          <li>Spending time with friends and family</li>
        </ul>
      </div>
      <div id="contactForm">
        <input
          type="email"
          id="emailInput"
          placeholder="thisEmail@email.com"
        />
        <br />
        <input
          type="text"
          id="textInput"
          placeholder="Random text"
        />
        <br />
        <button>Call to Action</button>
      </div>
    </div>
  )
}

export default Personal
