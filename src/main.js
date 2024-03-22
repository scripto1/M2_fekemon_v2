const pokemons = [
	{
		id: 1,
		name: '이상해씨',
		type1: '풀',
		type2: '독',
		image: 'img/000101.png',
	},
	{
		id: 2,
		name: '파이리',
		type1: '불꽃',
		type2: '',
		image: 'img/000401.png',
	},
	{
		id: 3,
		name: '꼬부기',
		type1: '물',
		type2: '',
		image: 'img/000701.png',
	},
	{
		id: 4,
		name: '캐터피',
		type1: '벌레',
		type2: '',
		image: 'img/001001.png',
	},
	{
		id: 5,
		name: '단데기',
		type1: '벌레',
		type2: '',
		image: 'img/001101.png',
	},
	{
		id: 6,
		name: '뿔충이',
		type1: '벌레',
		type2: '독',
		image: 'img/001301.png',
	},
	{
		id: 7,
		name: '독침붕',
		type1: '벌레',
		type2: '독',
		image: 'img/001501.png',
	},
	{
		id: 8,
		name: '구구',
		type1: '노말',
		type2: '비행',
		image: 'img/001601.png',
	},
	{
		id: 9,
		name: '레트라',
		type1: '노말',
		type2: '',
		image: 'img/002002.png',
	},
	{
		id: 10,
		name: '피카츄',
		type1: '전기',
		type2: '',
		image: 'img/002501.png',
	},
]

// 검색 결과에 따라 list 요소 보여주기 
const list = document.getElementById('list');

function showList(val='') {
	list.innerHTML = '';
	const res = pokemons.forEach(pokemon => {
		if(pokemon.name.includes(val)) {
			const li = document.createElement('li');
			li.innerHTML = /* HTML */ `
				<div class="card1-img">
					<img src="${pokemon.image}" alt="${pokemon.name}">
				</div>				
				<p>${pokemon.name}</p>
				<div class="type-cont">
					<div class="type1">${pokemon.type1}</div>					
					<div class="type2">${pokemon.type2}</div>					
				</div>			
			`
			list.appendChild(li)
		} else if (pokemon.type1.includes(val)) {			
			const li = document.createElement('li');
			li.innerHTML = /* HTML */ `
				<div class="card1-img">
					<img src="${pokemon.image}" alt="${pokemon.name}">
				</div>				
				<p>${pokemon.name}</p>
				<div class="type-cont">
					<div class="type1">${pokemon.type1}</div>					
					<div class="type2">${pokemon.type2}</div>					
				</div>			
			`
			list.appendChild(li)
		} else if (pokemon.type2.includes(val)) {			
			const li = document.createElement('li');
			li.innerHTML = /* HTML */ `
				<div class="card1-img">
					<img src="${pokemon.image}" alt="${pokemon.name}">
				</div>				
				<p>${pokemon.name}</p>
				<div class="type-cont">
					<div class="type1">${pokemon.type1}</div>					
					<div class="type2">${pokemon.type2}</div>					
				</div>			
			`
			list.appendChild(li)
		}		
	})
}
showList()

// 타입에 따라 색상 변경
const type1El = document.querySelector('.type1');

pokemons.forEach((pokemon) => {
  const type1Class = `type1-${pokemon.type1}`;
  type1El.classList.add(type1Class);
});

// 검색 기능
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const val = searchInput.value
	console.log(val)
	showList(val)
})

// 모달 
const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')
const showBtn = document.querySelector('.show-modal')
const closeBtn = document.querySelector('.close-btn')

showBtn.addEventListener('click', () => main.classList.add('active'))
closeBtn.addEventListener('click', () => main.classList.remove('active'))