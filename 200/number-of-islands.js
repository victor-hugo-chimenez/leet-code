/**
Runtime 50ms
    Beats99.58%of users with JavaScript
Memory 51.80MB
    Beats87.83%of users with JavaScrip
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsWithDFS = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let numberOfIslands = 0
    
    function depthFirstSearch(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1') {
            return
        }

        // Mark as visited
        grid[row][col] = '0'

        depthFirstSearch(row, col+1) // right
        depthFirstSearch(row, col-1) // left
        depthFirstSearch(row - 1, col) // below
        depthFirstSearch(row + 1, col) // above
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            
            if(grid[i][j] === '1') {
                numberOfIslands++
                depthFirstSearch(i, j)
            }


        }
    }

    return numberOfIslands
};


class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(1)
    }

    find (x) {
        let result = x
        while (this.parent[result] !== result) {
            this.parent[result] = this.parent[this.parent[result]]
            result = this.parent[result]
        }

        return result
    }

    union (x,y) {
        const parentX = this.find(x)
        const parentY = this.find(y)

        if (parentX === parentY) {
            return 0; // Already Union
        }

        if (this.rank[parentX] > this.rank[parentY]) { // If parentX has more childrens than parentY
            this.parent[parentY] = parentX
            this.rank[parentX] += this.rank[parentY]
        } else {
            this.parent[parentX] = parentY
            this.rank[parentY] += this.rank[parentX]
        }

        return 1;
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslandsWithUnionFind(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const uf = new UnionFind(rows * cols)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {

                if (j < cols - 1 && grid[i][j + 1] === '1') { // Verify if right cell is inside the matrix and if is land
                    uf.union(i * cols + j, i * cols + j + 1); // Linear Indexing
                }

                if (i < rows - 1 && grid[i + 1][j] === '1') { // Verify if below cell is inside the matrix and if is land
                    uf.union(i * cols + j, (i + 1) * cols + j);
                }
            }
        }
    }

    // Count unique roots
    let uniqueIslands = new Set();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                let root = uf.find(i * cols + j);
                uniqueIslands.add(root);
            }
        }
    }

    return uniqueIslands.size;

}

// Exemplo de uso
const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log(numIslandsWithUnionFind(grid1));
  
  const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
  console.log(numIslandsWithUnionFind(grid2));
