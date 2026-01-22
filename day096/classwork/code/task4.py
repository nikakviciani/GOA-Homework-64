# https://chatgpt.com/c/696d1519-44e8-8325-9536-fab1042c0f81

class Solution(object):
    def strStr(self, haystack, needle):
         """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if needle == "":
            return 0

        n = len(haystack)
        m = len(needle)

        for i in range(n - m + 1):
            if haystack[i:i + m] == needle:
                return i

        return -1
