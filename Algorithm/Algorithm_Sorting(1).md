# π μκ³ λ¦¬μ¦ - μ λ ¬(1)

<br>

### π μ λ ¬(Sorting)
- λ°°μ΄ λ΄ μμλ€μ λ²νΈμμ΄λ μ¬μ  μμμ κ°μ΄ μΌμ  μμλλ‘ μ΄κ±°νλ μκ³ λ¦¬μ¦
- λν μ λ ¬ μκ³ λ¦¬μ¦ λ³ κ΅¬ν ν¨μ 
    - κ±°ν μ λ ¬(Bubble Sort) : `bubbleSort_1()`, `bubbleSort_2()`, `bubbleSort_3()`, `bubbleSort()`
    - μ ν μ λ ¬(Selection Sort) : `selectionSort()`
    - μ½μ μ λ ¬(Insertion Sort) : `insertionSort()`
    - λ³ν© μ λ ¬(Merge Sort) : `mergeSort()`
    - ν΅ μ λ ¬(Quick Sort) : `quickSort()`
    - κ³΅ν΅ ν¨μ : `swap()`, `ascending()`, `descending()`

<br> 


### π κ±°ν μ λ ¬(Bubble Sort)

- μλ‘ μΈμ ν λ μμλ₯Ό λΉκ΅νλ©° μ λ ¬νλ μκ³ λ¦¬μ¦
- νκ·  μκ° λ³΅μ‘λ : O(n^2)
- μκ³ λ¦¬μ¦ λμ λ°©μ

<img src = "https://t1.daumcdn.net/cfile/tistory/2248E53E576F5A8819">

- μ°Έκ³  : https://ko.wikipedia.org/wiki/κ±°ν_μ λ ¬



<br> 

### π κ±°ν μ λ ¬(Bubble Sort) κ΅¬ν (1)
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};
```




<br> 

### π κ±°ν μ λ ¬(Bubble Sort) κ΅¬ν (2)
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};
```




<br> 

### π μ ν μ λ ¬(Selection Sort) 
- μ΅μκ°μ μ°Ύμ λ°μ΄ν° μμ­μ κ°μ₯ μμΌλ‘ μ΄λνλ λ°©μμ λ°λ³΅ν΄ μ μ²΄ μμ­μ μ λ ¬νλ€
- νκ·  μκ° λ³΅μ‘λ : O(n^2)
- μκ³ λ¦¬μ¦ λμ λ°©μ

<img src = "https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif">

- μ°Έκ³  : https://ko.wikipedia.org/wiki/μ ν_μ λ ¬


<br> 

### π μ ν μ λ ¬(Selection Sort) κ΅¬ν
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};
```



<br> 

### π μ½μ μ λ ¬(Selection Sort)
- μ΄λ―Έ μ λ ¬λ λ°μ΄ν° μμ­κ³Ό λΉκ΅νλ©°, μμ μ μμΉλ₯Ό μ°Ύμ μμλ₯Ό μ½μνμ¬ μ λ ¬νλ μκ³ λ¦¬μ¦
- νκ·  μκ° λ³΅μ‘λ : O(n^2)
- μκ³ λ¦¬μ¦ λμ λ°©μ 
<img src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif">

- μ°Έκ³  : https://ko.wikipedia.org/wiki/μ½μ_μ λ ¬




<br> 

### π μ½μ μ λ ¬(Selection Sort) κ΅¬ν
```javascript
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(tmp, arr[j])) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};
```

