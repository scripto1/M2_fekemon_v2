const pokemon = [
	{
		id: 1,
		name: '이상해씨',
		type: '풀, 독',
		image: 'img/000101.png',
	},
	{
		id: 2,
		name: '파이리',
		type: '불꽃',
		image: 'img/000401.png',
	},
	{
		id: 3,
		name: '꼬부기',
		type: '물',
		image: 'img/000701.png',
	},
	{
		id: 4,
		name: '캐터피',
		type: '벌레',
		image: 'img/001001.png',
	},
	{
		id: 5,
		name: '단데기',
		type: '벌레',
		image: 'img/001101.png',
	},
	{
		id: 6,
		name: '뿔충이',
		type: '벌레, 독',
		image: 'img/001301.png',
	},
	{
		id: 7,
		name: '독침붕',
		type: '벌레, 독',
		image: 'img/001501.png',
	},
	{
		id: 8,
		name: '구구',
		type: '노말, 비행',
		image: 'img/001601.png',
	},
	{
		id: 9,
		name: '레트라',
		type: '노말',
		image: 'img/002002.png',
	},
	{
		id: 10,
		name: '피카츄',
		type: '전기',
		image: 'img/002501.png',
	},
]

document.getElementById('search').addEventListener('keyup', (e) => {
	const searchData = e.target.value;
	
	displayItem(filterData)
})

