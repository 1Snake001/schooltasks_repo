class Sum {
  sum(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count += array[i];
    }
    return count;
  }
}

export default Sum;
