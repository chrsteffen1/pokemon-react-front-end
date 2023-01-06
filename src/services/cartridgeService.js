

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cartridges`

export async function search(gameQuery) {
  console.log(gameQuery, 'GaME QUERY')
  const res = await fetch(`${BASE_URL}/search`)
  return res.json()
}

