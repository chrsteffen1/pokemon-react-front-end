

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cartridges`

export async function search(gameQuery) {
  const res = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameQuery)
  })
  return res.json()
}

