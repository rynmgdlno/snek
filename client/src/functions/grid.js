// Generates grid class names for game board

export const grid = (gridSize) => {
  let gridArray = []
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      gridArray.push({x: j, y: i})
    }
  }
  return gridArray
}
