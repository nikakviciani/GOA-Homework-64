# 3) დაწერეთ merge_sort-ის თქვენი ალგორითმი, აიღეთ 2-3 test case რომ შეამოწმოთ სწორად მუშაობს თუ არა. დაწერეთ მისი დროითი სირთულე

# insertion_sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]      # ელემენტი, რომელიც უნდა ჩავასვათ სწორ ადგილას
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]  # ვწევთ მარჯვნივ სანამ არ შესრულდება while-ის პირობა
            j -= 1

        arr[j + 1] = key

    return arr


# merge sort ის აზრი არის ცვლადის დაყოფა იქამდე სანამ არ დარჩება ერთ -ერთი ელემენტი,შემდეგ კი ვიწყებთ შედარებას ყველაზე პატარა ელემენტიდან და ვაერთიანებთ მას შემდეგ რაც შედარება დასრულდება
# 1                              [3,5,7,9,2,3,5,7,3,5,7]
# 1                             /                       \          
# 1                   [3,5,7,9,2]                     [3,5,7,3,5,7] 
# 1                    /       \                       /          \                  
# 1                [3,5]      [7,9,2]             [3,5]        [7,3,5,7]
# 1              /   \       /    \               /   \        /      \
# 1           [3]   [5]   [7]   [9,2]           [3]   [5]    [7]   [3,5,7] 
# 1                             /    \                            /    \
# 1                             [9]   [2]                       [3]   [5,7]  
# უმცირესი:2 ორზე ,მეტია 3,მერე 5, მერე 7,მერე 9 
# რეზულიტატი [2,3,3,5,5,7,7,7,9]
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    while i < len(left):
        result.append(left[i])
        i += 1
    while j < len(right):
        result.append(right[j])
        j += 1
    return result
print(merge_sort([3,5,7,9,2,3,5,7,3,5,7]))
print(insertion_sort([3,5,7,9,2,3,5,7,3,5,7]))


# def insertion_sort(arr):
#     for i in range(len(arr)):

#         for j in range(len(arr)):

#             if arr[i] < arr[j]:
#                 arr[i], arr[j] = arr[j], arr[i]

# test = [6, 1, 4, 3, 7, 5]
# insertion_sort(test)
# print(test)



# def merge_sort(arr):
#     left_arr  = arr[:len(arr)//2]
#     right_arr = arr[len(arr)//2:]


#     if len(left_arr) > 1:
#         merge_sort(left_arr)
#     if len(right_arr) > 1:
#         merge_sort(right_arr)

#     i = 0
#     j = 0
#     k = 0

#     while i < len(left_arr) and j < len(right_arr):
#         if left_arr[i] < right_arr[j]:
#             arr[k] = left_arr[i]
#             i += 1
#         else:
#             arr[k] = right_arr[j]
#             j += 1
#         k += 1
    
#     while i < len(left_arr):
#         arr[k] = left_arr[i]
#         i += 1
#         k += 1
    
#     while j < len(right_arr):
#         arr[k] = right_arr[j]
#         j += 1
#         k += 1

# test_arr = [6, 1, 5, 3, 8, 9, 6, 7]
# merge_sort(test_arr)
# print(test_arr)