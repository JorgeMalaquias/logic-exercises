function diagonalReverse(matrix) {
    const newMatrix = [...matrix];
    let l1 = 0;
    let l2 = newMatrix.length - 1;
    let c1 = 0;
    let c2 = newMatrix.length - 1;

    while (c2 > c1) {
        let aux = newMatrix[l1][c1];
        newMatrix[l1][c1] = newMatrix[l2][c2];
        newMatrix[l2][c2] = aux;
        aux = newMatrix[l1][c2];
        newMatrix[l1][c2] = newMatrix[l2][c1];
        newMatrix[l2][c1] = aux;
        l1++;
        c1++;
        l2--;
        c2--;
    }
    return newMatrix;
}

function countMatrix(matrixA, matrixB) {
    let count = 0;
    for (let i = 0; i < matrixA.length; i++) {
        for (j = 0; j < matrixA[i].length; j++) {
            let isEqual = 1;
            if (i + matrixB.length - 1 >= matrixA.length || j + matrixB[0].length - 1 >= matrixA[i].length) {
                isEqual = 0;
                break;
            }
            for (let k = 0; k < matrixB.length; k++) {
                for (l = 0; l < matrixB[k].length; l++) {
                    if (matrixB[k][l] !== matrixA[i + k][j + l]) {
                        isEqual = 0;
                        break;
                    }
                }
                if (isEqual === 0) {
                    break;
                }
            }
            if (isEqual === 1) {
                count++;
            }
        }
    }
    return count;
}


console.log("Example 1");
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}
console.log("");
const newMatrix = diagonalReverse(matrix);
for (let i = 0; i < newMatrix.length; i++) {
    console.log(newMatrix[i]);
}

console.log("Example 2");
const matrixA = [[1, 3, 3, 3], [3, 3, 6, 6], [6, 6, 9, 14], [1, 3, 3, 3], [3, 3, 6, 6], [6, 6, 9, 14]];
const matrixB = [[3, 3], [6, 6]];
console.log("matrix A");
for (let i = 0; i < matrixA.length; i++) {
    console.log(matrixA[i]);
}
console.log("submatrix B");
for (let i = 0; i < matrixB.length; i++) {
    console.log(matrixB[i]);
}
const count = countMatrix(matrixA, matrixB);
console.log(`Matrix b repeats ${count} time(s) in the Matrix A!`);