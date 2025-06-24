# 2) შექმენით manual_max ფუნქცია რომელსაც პარამეტრად გადაეცემა სია და აბრუნებს ყველაზე დიდ მნიშვნელობას. ასევე შექმენით manual_len ფუნქცია რომელიც თვლის გადაცემული მიმდევრობის სიგრძეს
def manual_max(lst):
    if not lst:
        return None
    max_value = lst[0]
    for i in lst[1:]:
        if i > max_value:
            max_value = i
    return max_value










# sxv rame
num=[12,5,235,2,675,68,93,8,787,9,]
# index 
num.index(5)#me ramdenime indeqszea
num.count(9)#ramdenjer meordeba

# set iwereba ase
kk={2,245,7,745,4,56,79675,685746,57,687980,97,8675645,}
# tanmimdevroba da dublikaten=bi ar aaqvs(ar seizleba) მარა არის შეცვლადი
