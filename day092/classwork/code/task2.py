# 3) შექმენით სორტირების ალგორითმი თქვენი ხელით, (ჩასმის ხერხით სორტირება) კომენტარებით დაწერეთ თუ როგორ მუშაობს და როგორ შეგვიძლია ვმართოთ დალაგება ზრდადობით მოხდება თუ კლებადობით
arr_list=[3,4,2,7,5,9]
# Insertion sort - ჩასმით სორტირება


nums = [6, 2, 8, 3, 4]

def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i

        while arr[j - 1] > arr[j] and j > 0:
            arr[j - 1], arr[j] = arr[j], arr[j - 1]
            j -= 1

insertion_sort(nums)