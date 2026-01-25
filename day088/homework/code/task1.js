// https://leetcode.com/problems/longest-common-prefix/?envType=problem-list-v2&envId=array

class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""

        for i in range(len(strs[0])):         
            char = strs[0][i]

            for word in strs:                
                if i >= len(word) or word[i] != char:
                    return strs[0][:i]

        return strs[0]
