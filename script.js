





const commentBox = document.querySelector('.js-comments')
let html = ''
const getComents = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await data.json()

    console.log(comments)
    

comments.forEach((comment) => {
const {name, email, body} = comment


 html = html + `
    <div class="comment">
    <h4 class="name">Vārds: ${name}</h4>
    <span class="email">E-pasts: ${email}</span>
    <p class="text">${body}</p>
    </div>
    `
});

commentBox.innerHTML = html


}

getComents()

const form = document.querySelector('.js-form')
form.addEventListener('submit', (e) => {

 e.preventDefault ()
    

const name = document.querySelector('.js-form-text').value
const email = document.querySelector('.js-form-email').value
const body = document.querySelector('.js-form-body').value
console.log(name)
console.log(email)
console.log(body.trim())


 html = html + `
    <div class="comment">
    <h4 class="name">Vārds: ${name}</h4>
    <span class="email">E-pasts: ${email}</span>
    <p class="text">${body}</p>
    </div>
    `
    commentBox.innerHTML = html

})

const images = document.querySelectorAll('.js-image')
const next = document.querySelector('.js-next')
const prev = document.querySelector('.js-prev')

let activeIndex = 0

next.addEventListener('click', () => {
    images.forEach((image) => {
image.classList.remove('active')
    })

if(activeIndex === images.length - 1) {
    activeIndex = 0
} else {
    activeIndex = activeIndex + 1
}

images[activeIndex].classList.add('active')


})

prev.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === 0) {
        activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }
    images[activeIndex].classList.add('active')
})

