# set-si unda davuwerot .add it .append is magivrad
# xolo .pop is magivrad iwereba .remove
# set-ebis saerto elementebis gaertianeba .union 
# .union
# interseqtion tanakveta
# rac 2rive setsia
# .diference sxvaoba
# abrunebs im elements romelic ar iyo meore cvladsi


# 1) შექმენით რიცხვების set, ჩამოწერეთ მისი ყველა თვისება, შემდეგ დაამტეთ და წაშალეთ 2 ელემენტი: add და remove მეთოდების საშვალებით. შემდეგ შექემნით მეორე set და არსებულ 2 set-ს შორის შეასრულეთ სამივე მოქმედება: union, intersection, difference
firstset={3,58,22,64,256,455}
seqset={2452,65,57,6543,57,}

print(firstset.union(seqset))
print(firstset.difference(seqset))
print(firstset.intersection(seqset))
print(seqset.intersection(firstset))















# nums1 = {5, 3, 12, 436, 568, 457, 3, 23, 76, 8}
# nums2 = {7,9,12, 63, 436, 12, 13, 53, 67}

# print(nums1[4]) - არ შეიძლება, არ არის დალაგებული
# {4, 5, 6, 4} = {4, 5, 6} - set შლის განმეორებით ელემენტებს

# set-ში შესაძლებელია ელემენტების ჩამატება ან წაშლა

# nums1.add(1)
# nums1.remove(3)

# print(nums1)


nums1 = {5, 3, 12, 436, 568, 457, 3, 23, 76, 8}
nums2 = {7,9,12, 63, 436, 12, 13, 53, 67}

# set1.union(set2) - აერთიანებს 2 set-ის ელემენტებს მესამე 3-ში
union = nums1.union(nums2)

# set1.intersection(set2) - აბრუნებს ახალ set-ს, სადაც ის ელემენტებია, რომელბიც იყო აღებულ set-ებში
intersection = nums1.intersection(nums2)

# set1.difference(set2) - აბრუნებს ახალ set-ს, რომელშიც ის ელემენტებია, რომლებიც იყო პირველ set-ში და არ იყო მეორეში
difference = nums1.difference(nums2)
# print(difference)

nums3 = {1, 2, 3}
nums3.add(4, 5)
print(nums3)