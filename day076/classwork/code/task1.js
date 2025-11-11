// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

Array.prototype.remove_ = function(integer_list, values_list) {
    let result = [];
    
    for (let num of integer_list) {
    if (!values_list.includes(num)) { 
        result.push(num);
    }
    }
    
    return result;
};
