// Functions for submitting and retrieving scores from API/Postgres
const baseURL = process.env.REACT_APP_BASE_URL 

export const submitScore = async (user, score, gameMode, difficulty) => {
  const settings = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    // mode: 'cors',
    body: JSON.stringify({
      "player_name": user,
      "score": score,
      "game_mode": gameMode,
      "difficulty": difficulty
    })
  }
  try {
    const response = await fetch(`${baseURL}/submit-score`, settings)
    return response
  } catch (e) {
    return e
  }

}

export const getRecentScores = async () => {
  try {
    const response = await fetch(`${baseURL}/recent`)
    console.log(baseURL)
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const getHighScores = async (gameMode, difficulty) => {
  try {
    const response = await fetch(`${baseURL}/leader-board?gameMode=${gameMode}&difficulty=${difficulty}`)
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

