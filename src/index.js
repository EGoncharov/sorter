class Sorter {
  constructor(name) {
    this.arr = [];
    this.compareFunction = this.defaultCompareFunction;
  }

  defaultCompareFunction(a,b) {
    return a-b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var sortindices = indices.sort(this.defaultCompareFunction);
    var arrSort = [];
      for (var i=0; i<sortindices.length; i++) {
        this.arr[sortindices[i]] = arrSort[i];
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;