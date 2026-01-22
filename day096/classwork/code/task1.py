# :https://leetcode.com/problems/palindrome-number/

class Solution(object):
    def isPalindrome(self, x):
        if x < 0:
            return False
        
        num = str(x)
        return num == num[::-1]
