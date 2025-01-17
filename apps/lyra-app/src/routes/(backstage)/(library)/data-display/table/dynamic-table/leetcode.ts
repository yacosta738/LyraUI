import { staticTable, type Control } from '@lyra/ui';

export default async (
	body: {
		id?: number;
		title?: string;
		difficulty?: string;
		control?: Control;
	} = {}
) => {
	const data = [
		{ id: 1, title: '1. Two Sum', difficulty: 'Easy', createdAt: new Date() },
		{ id: 2, title: '2. Add Two Numbers', difficulty: 'Medium', createdAt: new Date() },
		{
			id: 3,
			title: '3. Longest Substring Without Repeating Characters',
			difficulty: 'Medium',
			createdAt: new Date(),
		},
		{ id: 4, title: '4. Median of Two Sorted Arrays', difficulty: 'Hard', createdAt: new Date() },
		{
			id: 5,
			title: '5. Longest Palindromic Substring',
			difficulty: 'Medium',
			createdAt: new Date(),
		},
		{ id: 6, title: '6. Zigzag Conversion', difficulty: 'Medium', createdAt: new Date() },
		{ id: 7, title: '7. Reverse Integer', difficulty: 'Medium', createdAt: new Date() },
		{ id: 8, title: '8. String to Integer (atoi)', difficulty: 'Medium', createdAt: new Date() },
		{ id: 9, title: '9. Palindrome Number', difficulty: 'Easy', createdAt: new Date() },
		{ id: 10, title: '10. Regular Expression Matching', difficulty: 'Hard', createdAt: new Date() },
		{ id: 11, title: '11. Container With Most Water', difficulty: 'Medium', createdAt: new Date() },
		{ id: 12, title: '12. Integer to Roman', difficulty: 'Medium', createdAt: new Date() },
		{ id: 13, title: '13. Roman to Integer', difficulty: 'Easy', createdAt: new Date() },
		{ id: 14, title: '14. Longest Common Prefix', difficulty: 'Easy', createdAt: new Date() },
		{ id: 15, title: '15. 3Sum', difficulty: 'Medium', createdAt: new Date() },
		{ id: 16, title: '16. 3Sum Closest', difficulty: 'Medium', createdAt: new Date() },
		{
			id: 17,
			title: '17. Letter Combinations of a Phone Number',
			difficulty: 'Medium',
			createdAt: new Date(),
		},
		{ id: 18, title: '18. 4Sum', difficulty: 'Medium', createdAt: new Date() },
		{
			id: 19,
			title: '19. Remove Nth Node From End of List',
			difficulty: 'Medium',
			createdAt: new Date(),
		},
		{ id: 20, title: '20. Valid Parentheses', difficulty: 'Easy', createdAt: new Date() },
		{ id: 21, title: '21. Merge Two Sorted Lists', difficulty: 'Easy', createdAt: new Date() },
		{ id: 22, title: '22. Generate Parentheses', difficulty: 'Medium', createdAt: new Date() },
		{ id: 23, title: '23. Merge k Sorted Lists', difficulty: 'Easy', createdAt: new Date() },
		{ id: 24, title: '24. Swap Nodes in Pairs', difficulty: 'Medium', createdAt: new Date() },
		{ id: 25, title: '25. Reverse Nodes in k-Group', difficulty: 'Easy', createdAt: new Date() },
		{
			id: 26,
			title: '26. Remove Duplicates from Sorted Array',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 27, title: '27. Remove Element', difficulty: 'Easy', createdAt: new Date() },
		{
			id: 28,
			title: '28. Find the Index of the First Occurrence in a String',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 29, title: '29. Divide Two Integers', difficulty: 'Medium', createdAt: new Date() },
		{
			id: 30,
			title: '30. Substring with Concatenation of All Words',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 31, title: '31. Next Permutation', difficulty: 'Medium', createdAt: new Date() },
		{ id: 32, title: '32. Longest Valid Parentheses', difficulty: 'Easy', createdAt: new Date() },
		{
			id: 33,
			title: '33. Search in Rotated Sorted Array',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 34,
			title: '34. Find First and Last Position of Element in Sorted Array',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 35, title: '35. Search Insert Position', difficulty: 'Easy', createdAt: new Date() },
		{ id: 36, title: '36. Valid Sudoku', difficulty: 'Easy', createdAt: new Date() },
		{ id: 37, title: '37. Sudoku Solver', difficulty: 'Easy', createdAt: new Date() },
		{ id: 38, title: '38. Count and Say', difficulty: 'Easy', createdAt: new Date() },
		{ id: 39, title: '39. Combination Sum', difficulty: 'Easy', createdAt: new Date() },
		{ id: 40, title: '40. Combination Sum II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 41, title: '41. First Missing Positive', difficulty: 'Easy', createdAt: new Date() },
		{ id: 42, title: '42. Trapping Rain Water', difficulty: 'Easy', createdAt: new Date() },
		{ id: 43, title: '43. Multiply Strings', difficulty: 'Easy', createdAt: new Date() },
		{ id: 44, title: '44. Wildcard Matching', difficulty: 'Easy', createdAt: new Date() },
		{ id: 45, title: '45. Jump Game II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 46, title: '46. Permutations', difficulty: 'Easy', createdAt: new Date() },
		{ id: 47, title: '47. Permutations II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 48, title: '48. Rotate Image', difficulty: 'Easy', createdAt: new Date() },
		{ id: 49, title: '49. Group Anagrams', difficulty: 'Easy', createdAt: new Date() },
		{ id: 50, title: '50. Pow(x, n)', difficulty: 'Easy', createdAt: new Date() },
		{ id: 51, title: '51. N-Queens', difficulty: 'Easy', createdAt: new Date() },
		{ id: 52, title: '52. N-Queens II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 53, title: '53. Maximum Subarray', difficulty: 'Easy', createdAt: new Date() },
		{ id: 54, title: '54. Spiral Matrix', difficulty: 'Easy', createdAt: new Date() },
		{ id: 55, title: '55. Jump Game', difficulty: 'Easy', createdAt: new Date() },
		{ id: 56, title: '56. Merge Intervals', difficulty: 'Easy', createdAt: new Date() },
		{ id: 57, title: '57. Insert Interval', difficulty: 'Easy', createdAt: new Date() },
		{ id: 58, title: '58. Length of Last Word', difficulty: 'Easy', createdAt: new Date() },
		{ id: 59, title: '59. Spiral Matrix II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 60, title: '60. Permutation Sequence', difficulty: 'Easy', createdAt: new Date() },
		{ id: 61, title: '61. Rotate List', difficulty: 'Easy', createdAt: new Date() },
		{ id: 62, title: '62. Unique Paths', difficulty: 'Easy', createdAt: new Date() },
		{ id: 63, title: '63. Unique Paths II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 64, title: '64. Minimum Path Sum', difficulty: 'Easy', createdAt: new Date() },
		{ id: 65, title: '65. Valid Number', difficulty: 'Easy', createdAt: new Date() },
		{ id: 66, title: '66. Plus One', difficulty: 'Easy', createdAt: new Date() },
		{ id: 67, title: '67. Add Binary', difficulty: 'Easy', createdAt: new Date() },
		{ id: 68, title: '68. Text Justification', difficulty: 'Easy', createdAt: new Date() },
		{ id: 69, title: '69. Sqrt(x)', difficulty: 'Easy', createdAt: new Date() },
		{ id: 70, title: '70. Climbing Stairs', difficulty: 'Easy', createdAt: new Date() },
		{ id: 71, title: '71. Simplify Path', difficulty: 'Easy', createdAt: new Date() },
		{ id: 72, title: '72. Edit Distance', difficulty: 'Easy', createdAt: new Date() },
		{ id: 73, title: '73. Set Matrix Zeroes', difficulty: 'Easy', createdAt: new Date() },
		{ id: 74, title: '74. Search a 2D Matrix', difficulty: 'Easy', createdAt: new Date() },
		{ id: 75, title: '75. Sort Colors', difficulty: 'Easy', createdAt: new Date() },
		{ id: 76, title: '76. Minimum Window Substring', difficulty: 'Easy', createdAt: new Date() },
		{ id: 77, title: '77. Combinations', difficulty: 'Easy', createdAt: new Date() },
		{ id: 78, title: '78. Subsets', difficulty: 'Easy', createdAt: new Date() },
		{ id: 79, title: '79. Word Search', difficulty: 'Easy', createdAt: new Date() },
		{
			id: 80,
			title: '80. Remove Duplicates from Sorted Array II',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 81,
			title: '81. Search in Rotated Sorted Array II',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 82,
			title: '82. Remove Duplicates from Sorted List II',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 83,
			title: '83. Remove Duplicates from Sorted List',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 84,
			title: '84. Largest Rectangle in Histogram',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 85, title: '85. Maximal Rectangle', difficulty: 'Easy', createdAt: new Date() },
		{ id: 86, title: '86. Partition List', difficulty: 'Easy', createdAt: new Date() },
		{ id: 87, title: '87. Scramble String', difficulty: 'Easy', createdAt: new Date() },
		{ id: 88, title: '88. Merge Sorted Array', difficulty: 'Easy', createdAt: new Date() },
		{ id: 89, title: '89. Gray Code', difficulty: 'Easy', createdAt: new Date() },
		{ id: 90, title: '90. Subsets II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 91, title: '91. Decode Ways', difficulty: 'Easy', createdAt: new Date() },
		{ id: 92, title: '92. Reverse Linked List II', difficulty: 'Easy', createdAt: new Date() },
		{ id: 93, title: '93. Restore IP Addresses', difficulty: 'Easy', createdAt: new Date() },
		{
			id: 94,
			title: '94. Binary Tree Inorder Traversal',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{
			id: 95,
			title: '95. Unique Binary Search Trees II',
			difficulty: 'Easy',
			createdAt: new Date(),
		},
		{ id: 96, title: '96. Unique Binary Search Trees', difficulty: 'Easy', createdAt: new Date() },
		{ id: 97, title: '97. Interleaving String', difficulty: 'Easy', createdAt: new Date() },
		{ id: 98, title: '98. Validate Binary Search Tree', difficulty: 'Easy', createdAt: new Date() },
		{ id: 99, title: '99. Recover Binary Search Tree', difficulty: 'Easy', createdAt: new Date() },
		{ id: 100, title: '100. Same Tree', difficulty: 'Easy', createdAt: new Date() },
	];

	let res = [...data];
	if (body.title) {
		const titleUpper = body.title.toUpperCase();
		res = res.filter((item) => item.title.toUpperCase().includes(titleUpper));
	}

	if (body.difficulty) {
		const difficulty = body.difficulty;
		res = res.filter((item) => item.difficulty.includes(difficulty));
	}

	const result = staticTable(res, body.control);
	let count = 0;
	if (body.control?.paginationType === 'offset') {
		count = res.length;
	} else {
		// if is the end of the list, the cursor is empty
		count = result.length === 0 ? 0 : res.length;
	}
	return {
		message: 'OK',
		result: result,
		count: count,
	};
};
