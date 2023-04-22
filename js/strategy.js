class SortingStrategy {
  sort(data) {
    // abstract method, to be implemented by subclasses
  }
}
class QuickSort extends SortingStrategy {
  sort(data) {
    // use quicksort algorithm to sort data
    console.log('QuickSort')
  }
}
class MergeSort extends SortingStrategy {
  sort(data) {
    // use mergesort algorithm to sort data
    console.log('MergeSort')
  }
}
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  sort(data) {
    this.strategy.sort(data);
  }
}

const sorter1 = new Sorter(new QuickSort());
sorter1.sort([1, 2, 3, 4, 5]); // outputs "QuickSort"

const sorter2 = new Sorter(new MergeSort());
sorter2.sort([1, 2, 3, 4, 5]); // outputs "MergeSort"

