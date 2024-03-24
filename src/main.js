const pokemons = [
	{
		id: 1,
		name: '이상해씨',
		type1: '풀',
		classType1: 'grass',
		type2: '독',
		classType2: 'poison',
		image: 'img/000101.png',
	},
	{
		id: 2,
		name: '파이리',
		type1: '불꽃',
		classType1: 'fire',
		type2: '',
		classType2: '',
		image: 'img/000401.png',
	},
	{
		id: 3,
		name: '꼬부기',
		type1: '물',
		classType1: 'water',
		type2: '',
		classType2: '',
		image: 'img/000701.png',
	},
	{
		id: 4,
		name: '캐터피',
		type1: '벌레',
		classType1: 'insect',
		type2: '',
		classType2: '',
		image: 'img/001001.png',
	},
	{
		id: 5,
		name: '단데기',
		type1: '벌레',
		classType1: 'insect',
		type2: '',
		classType2: '',
		image: 'img/001101.png',
	},
	{
		id: 6,
		name: '뿔충이',
		type1: '벌레',
		classType1: 'insect',
		type2: '독',
		classType2: 'poison',
		image: 'img/001301.png',
	},
	{
		id: 7,
		name: '독침붕',
		type1: '벌레',
		classType1: 'insect',
		type2: '독',
		classType2: 'poison',
		image: 'img/001501.png',
	},
	{
		id: 8,
		name: '구구',
		type1: '노말',
		classType1: 'normal',
		type2: '비행',
		classType2: 'fly',
		image: 'img/001601.png',
	},
	{
		id: 9,
		name: '레트라',
		type1: '노말',
		classType1: 'normal',
		type2: '',
		classType2: '',
		image: 'img/002002.png',
	},
	{
		id: 10,
		name: '피카츄',
		type1: '전기',
		classType1: 'electric',
		type2: '',
		classType2: '',
		image: 'img/002501.png',
	},
]

const newMemberAddBtn = document.querySelector('.show-modal'),
	mainBg = document.querySelector('main'),
	popupForm = document.querySelector('.modal-box'),
	crossBtn = document.querySelector('.closeBtn'),
	submitBtn = document.querySelector('.createBtn'),
 	modalTitle = document.querySelector('.modal-header'),
	popupFooter = document.querySelector('.modal-footer'),
	imgInput = document.querySelector('.img'),
	imgHolder = document.querySelector('.imgholder'),
	form = document.querySelector('form'),
	formInputFields = document.querySelectorAll('form input'),
	uploadimg = document.querySelector("#uploadimg"),
	name = document.getElementById("name"),
	type1 = document.getElementById("type1"),
	type2 = document.getElementById("type2")
	// userInfo = document.querySelector(".userInfo"),	
	// filterData = document.getElementById("search")

// loading 화면
let loader = document.getElementById('preloader');
window.addEventListener('load', () => {
	setTimeout( () => {
		loader.style.display = 'none';
	}, 1550)
})

// reload 기능
document.getElementById('reload').addEventListener('click', () => {
  location.reload();
});

// 검색 결과에 따라 list 요소 보여주기 
const list = document.getElementById('list');

function createLiEl(pokemon) {
	const li = document.createElement('li');
		li.innerHTML = /* HTML */ `
			<div class="card1-img">
				<img src="${pokemon.image}" alt="${pokemon.name}">
			</div>				
			<p>${pokemon.name}</p>
			<div class="type-cont">
				<div class="type1-${pokemon.classType1}">${pokemon.type1}</div>					
				<div class="type2-${pokemon.classType2}">${pokemon.type2}</div>					
			</div>			
		`
	list.appendChild(li)
}
 
function showList(val='') {
	list.innerHTML = '';
	const res = pokemons.forEach(pokemon => {
		if(pokemon.name.includes(val)) {
			createLiEl(pokemon) 
		} else if (pokemon.type1.includes(val)) {			
			createLiEl(pokemon) 
		} else if (pokemon.type2.includes(val)) {			
			createLiEl(pokemon) 
		}		
	})
}
showList()


// 검색 버튼 기능
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
const showBtn = document.querySelector('.show-modal')
const closeBtn = document.querySelector('.closeBtn')
const editModal = document.querySelector('.editmodal-box')
const showEdit = document.querySelector('ul#list')
const closeEdit = document.querySelector('.editCloseBtn')

showBtn.addEventListener('click', () => main.classList.add('active'))
closeBtn.addEventListener('click', () => main.classList.remove('active'))
showEdit.addEventListener('click', () => editModal.classList.add('active'))
closeEdit.addEventListener('click', () => editModal.classList.remove('active'))


// 파일 업로드 간단 버전
// file.onchange = function () {
// 	imgInput.src = URL.createObjectURL(file.files[0]);
// }

uploadimg.onchange = function() {
	if(uploadimg.files[0].size < 1000000) { 
		let fileReader = new FileReader()
		fileReader.onload = function(e) {
			let imgUrl = e.target.result
			imgInput.src = imgUrl
		}
		fileReader.readAsDataURL(uploadimg.files[0])
	}
}

// 로컬 스토리지에 정보 저장

let originalData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []
let getData = [...originalData]

let isEdit = false, editId

form.addEventListener('submit', (e)=> {
	e.preventDefault()

	const information = {
		name: name.value,
		type1: type1.value,
		type2: type2.value,		
		image: imgInput.src == undefined ? "./img/person-fill.svg" : imgInput.src,
	}

	if(!isEdit) {
		originalData.push(information)
	} else {
		originalData[editId] = information
	}
	getData = [...originalData]
	
	const ulElement = document.querySelector('ul')
	const newLiEl = document.createElement('li')
		newLiEl.innerHTML = /* HTML */ `
		<div class="card1-img">
			<img src="${information.image}" alt="${information.name}">
		</div>				
		<p>${information.name}</p>
		<div class="type-cont">
			<div class="type1-normal">${information.type1}</div>					
			<div class="type2-poison">${information.type2}</div>					
		</div>			
	`
	ulElement.appendChild(newLiEl);

	localStorage.setItem('userProfile', JSON.stringify(originalData))

	submitBtn.innerHTML = "Submit"

	mainBg.classList.remove('active')
	popupForm.classList.remove('active')
	form.reset()
})










