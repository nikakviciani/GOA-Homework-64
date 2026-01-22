// 2) debugging მოახდინეთ ჩვენ მიერ გაკვეთილზე განხილული insertion_sort (ჩასმის ხერხით სორიტების) ალგორითმის და ახსენით როგორ მუშაობს კომენტარებით

function insertionSort(arr) {   
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Current element to be inserted
        let j = i - 1; // Index of the previous element

        // Compare key with previous elements and shift them right if they're greater
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }

        // Insert the key in its correct position
        arr[j + 1] = key;
    }

    return arr;}
