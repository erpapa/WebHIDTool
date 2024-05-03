// bubble sort
// q:这个方法是干什么用的？
// a:冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
// q:时间复杂度是多少？
// a:O(n^2)
// q:空间复杂度是多少？
// a:O(1)
// q:稳定性是怎样的？
// a:稳定
// q:这个方法有什么缺点？
// a:效率低下
// q:有没有更高效的排序算法？
// a:是的，比如快速排序、归并排序、堆排序等等
function bubbleSort(arr) {
  //Check if the array is empty or not
  if (arr.length === 0) {
    return arr;
  }
  //loop through the array
  for (var i = 0; i < arr.length; i++) {
    //loop through the array again
    for (var j = 0; j < arr.length - i; j++) {
      //if the current element is larger than the next element
      if (arr[j] > arr[j + 1]) {
        //swap the elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 初始化无序数组
var arr = [3, 2, 1, 5, 4, 6, 7, 9, 8, 0];
// 排序
var sortedArr = bubbleSort(arr);
// 输出排序后的数组
console.log(sortedArr);
