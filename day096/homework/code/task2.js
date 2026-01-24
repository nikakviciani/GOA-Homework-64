// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """

        # Make sure nums1 is the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2)
        left, right = 0, m

        while left <= right:
            i = (left + right)
            j = (m + n + 1) 

            maxLeftA = float('-inf') if i == 0 else nums1[i - 1]
            minRightA = float('inf') if i == m else nums1[i]

            maxLeftB = float('-inf') if j == 0 else nums2[j - 1]
            minRightB = float('inf') if j == n else nums2[j]

            # Correct partition
            if maxLeftA <= minRightB and maxLeftB <= minRightA:
                if (m + n) % 2 == 0:
                    return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0
                else:
                    return float(max(maxLeftA, maxLeftB))

            elif maxLeftA > minRightB:
                right = i - 1
            else:
                left = i + 1
