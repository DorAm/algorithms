/**
 * NumberOfIslands
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of
 * islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Time: O(n * m)
 * Space: O(n * m)
 *
 **/
function NumberOfIslands(grid) {
    const gridCopy = JSON.parse(JSON.stringify(grid));
    const dfs = (i, j) => {
        if (0 <= i && i < gridCopy.length && 0 <= j && j < gridCopy[i].length && gridCopy[i][j] === '1') {
            gridCopy[i][j] = 0;
            dfs(i + 1, j);
            dfs(i, j + 1);
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    };

    let islandCounter = 0;
    for (let i = 0; i < gridCopy.length; i++) {
        for (let j = 0; j < gridCopy[i].length; j++) {
            if (gridCopy[i][j] === '1') {
                islandCounter++;
                dfs(i, j);
            }
        }
    }
    return islandCounter;
}

grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

NumberOfIslands(grid);
