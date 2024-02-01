// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    //return row.sort(); // returning shallow copy
      // retaining original references
      return [...row].sort(); // returns deep copy
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99; // if change 0 and not 2 will change OG and not copy
    // innter references get retained
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  