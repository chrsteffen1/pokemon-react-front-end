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
  {games.length ?
  <div>
    {games.map(game =>
      <div>
        {game.activity}
      </div>
      )}
  </div>
  :
  <>
  <h2>No results</h2>
  </>
  }
  </>
  );
}

export default GameSearchForm;