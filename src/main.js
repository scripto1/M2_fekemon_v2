const pokemon = [
	{
		name: '이상해씨',
		image: 'img/000101.png',
		type: '풀, 독',
	},
	{
		name: '파이리',
		image: 'img/000401.png',
		type: '불꽃',
	},
	{
		name: '꼬부기',
		image: 'img/000701.png',
		type: '풀, 독',
	},
	{
		name: '캐터피',
		image: 'img/001001.png',
		type: '풀, 독',
	},
	{
		name: '단데기',
		image: 'img/001101.png',
		type: '풀, 독',
	},
]

document.getElementById('search').addEventListener('keyup', (e) => {
	const searchData = e.target.value;
	
	displayItem(filterData)
})

