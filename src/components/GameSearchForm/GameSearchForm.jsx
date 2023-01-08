import { useState } from "react";
import * as cartridgeService from '../../services/cartridgeService'

const GameSearchForm = (props) => {
  const [formData, setFormData] = useState({
    gameQuery: ''
  })

  const [games, setGames] = useState([])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleGameSearch(formData)
  }
  
  const handleGameSearch = async formData => {
    const gameResults = await cartridgeService.search(formData)
    setGames(gameResults)
    console.log(formData, 'FORM DATA')
  }



  return (  
  <>
  <h1>Do you want an activity?</h1>
  <div>
    <button onClick={handleSubmit}>New Activity</button>
  </div>
  {/* <form onSubmit={handleSubmit}>
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
  </form> */}
  <div>
    {games.activity}
  </div>
  </>
  );
}

export default GameSearchForm;