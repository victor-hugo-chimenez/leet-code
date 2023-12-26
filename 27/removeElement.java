class Solution {
    public int removeElement(int[] nums, int val) {
        int i = 0;
        int j = 0;

        for (; i < nums.length; i++) {
            if(nums[i] != val) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
}