function sumOfDistinctElements(set1, set2) {
    // Initialize an empty array to store distinct elements
    let distinctElements = [];

    // Iterate through elements in set1
    for (let element of set1) {
        // If the element is not in distinctElements, add it to the sum
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Iterate through elements in set2
    for (let element of set2) {
        // If the element is not in distinctElements, add it to the sum
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of distinct elements
    let sumResult = distinctElements.reduce((sum, element) => sum + element, 0);

    return sumResult;
}

function dotProduct(v1, v2) {
    // Calculate dot product using nested loop
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonality(vectors) {
    // Iterate through pairs of vectors
    for (let i = 0; i < vectors.length; i += 2) {
        const v1 = vectors[i];
        const v2 = vectors[i + 1];

        // Calculate dot product using the dotProduct function
        const dotResult = dotProduct(v1, v2);

        // Check if the dot product is zero (vectors are orthogonal)
        if (dotResult === 0) {
            console.log(`Vectors [${v1}] and [${v2}] are orthogonal.`);
        } else {
            console.log(`Vectors [${v1}] and [${v2}] are not orthogonal.`);
        }
    }
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const output = sumOfDistinctElements(set1, set2);
console.log("Output:", output);

const vectors = [
    [1, 2, 3],
    [4, -1, 2],
    [0, 2, -1],
    [-2, 0, 1]
];

checkOrthogonality(vectors);
