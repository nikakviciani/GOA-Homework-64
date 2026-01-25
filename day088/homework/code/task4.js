// https://leetcode.com/problems/plus-one/description/?envType=problem-list-v2&envId=array

class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """

        number = int(''.join(map(str, digits)))
      
        number += 1
        return [int(d) for d in str(number)]
