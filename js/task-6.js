class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    
    itemCount() {
        return this.collection.length;
    }
    
    pageCount() { 
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }
    
  pageItemCount(pageIndex) {
    const amountOfPages = this.pageCount();
    const itemsAll = this.itemCount();

    if(amountOfPages <= pageIndex || pageIndex<0){
        return -1;
    }
    
    if (pageIndex === amountOfPages - 1) {
          return itemsAll - (pageIndex * this.itemsPerPage)
    }
      
      if (pageIndex < amountOfPages - 1) {
        return this.itemsPerPage
    }
    
}

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
        return -1
        };
        return Math.floor(itemIndex / this.itemsPerPage);
        }
	}

// ТЕСТ 1: Обычный массив
const helper = new PaginationHelper(
    ['a', 'b', 'c', 'd', 'e', 'f'],
    4
);

console.log('=== ТЕСТ 1: Обычный массив ===');

console.log(helper.itemCount());       // 6
console.log(helper.pageCount());       // 2

console.log(helper.pageItemCount(0));  // 4
console.log(helper.pageItemCount(1));  // 2
console.log(helper.pageItemCount(2));  // -1
console.log(helper.pageItemCount(-1)); // -1

console.log(helper.pageIndex(0));      // 0
console.log(helper.pageIndex(2));      // 0
console.log(helper.pageIndex(4));      // 1
console.log(helper.pageIndex(5));      // 1
console.log(helper.pageIndex(6));      // -1
console.log(helper.pageIndex(-10));    // -1


// ТЕСТ 2: Все страницы заполнены
const helper2 = new PaginationHelper(
    [1, 2, 3, 4, 5, 6, 7, 8],
    4
);

console.log('=== ТЕСТ 2: Полные страницы ===');

console.log(helper2.itemCount());      // 8
console.log(helper2.pageCount());      // 2

console.log(helper2.pageItemCount(0)); // 4
console.log(helper2.pageItemCount(1)); // 4
console.log(helper2.pageItemCount(2)); // -1

console.log(helper2.pageIndex(7));     // 1
console.log(helper2.pageIndex(8));     // -1


// ТЕСТ 3: Пустой массив
const helper3 = new PaginationHelper([], 4);

console.log('=== ТЕСТ 3: Пустой массив ===');

console.log(helper3.itemCount());      // 0
console.log(helper3.pageCount());      // 0
console.log(helper3.pageItemCount(0)); // -1
console.log(helper3.pageIndex(0));     // -1


// ТЕСТ 4: Один элемент
const helper4 = new PaginationHelper(['a'], 4);

console.log('=== ТЕСТ 4: Один элемент ===');

console.log(helper4.itemCount());      // 1
console.log(helper4.pageCount());      // 1
console.log(helper4.pageItemCount(0)); // 1
console.log(helper4.pageItemCount(1)); // -1
console.log(helper4.pageIndex(0));     // 0
console.log(helper4.pageIndex(1));     // -1