import { useState } from "react";

const GameSearchForm = (props) => {
  const [formData, setFormData] = useState({
    gameQuery: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleGameSearch(formData)
  }



  return (  
  <>
  <form onSubmit={handleSubmit}>
    <h1>Find a game</h1>
    <input
      type="search"
      autoComplete="off"
      placeholder="pick a game"
      id="game-query"
      value={formData.gameQuery}
      name='gameQuery'
      onChange={handleChange}
    >
    </input>
  </form>
  </>
  );
}
 
export default GameSearchForm;