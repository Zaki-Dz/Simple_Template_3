let nav = document.querySelector('nav ul')
let navBtn = document.querySelector('nav i')

navBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
})
