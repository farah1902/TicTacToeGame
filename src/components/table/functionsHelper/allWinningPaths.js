export function checkWin(arr, setLocalState) {
  let winningPaths = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPaths.length; i++) {
    for (let g = 0; g < 3; g++) {
      for (let k = 0; k < arr.length; k++) {
        if (winningPaths[i][g] === arr[k].index) {
          winningPaths[i][g] = arr[k];
        }
      }
    }
  }

  // time complexity is O(n^3)
  winningPaths.forEach((ele) => {
    const r0 = typeof ele[0] === "object" ? ele[0].value : undefined;
    const r1 = typeof ele[1] === "object" ? ele[1].value : undefined;
    const r2 = typeof ele[2] === "object" ? ele[2].value : undefined;

    const concat = JSON.stringify([r0, r1, r2]);
    if (concat === "[1,1,1]" || concat === "[2,2,2]") {
      setLocalState((previous) => {
        return { ...previous, winerPath: ele, IsthereAwiner: true };
      });
    }
  });
}
