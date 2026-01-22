// 3) მოიძიეთ ინფორმაცია quick sort (სწრაფი სორტირება) და merge sort ალგორითმებზე, დაწერეთ ამ ალგორითმების კოდი თქვენი, მოახდინეთ კოდის დებაგირება  და დაწერეთ კომენტარებით თუ როგორ მუშაობს
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }}
    const pivot = arr[arr.length - 1]; // Choose the last element as pivot
    const left = []; // Elements less than pivot
    const right = []; // Elements greater than pivot       

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];