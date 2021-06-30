const mainSection = document.querySelector('.main')
let lastScrollValue = 0
const getRandomInt= () => parseInt(Math.random() * (7-1) + 1)
const getViews = () => parseInt(Math.random()*(10000-10)+10)
const getDay = () => parseInt(Math.random()*(255-10)+10)

const cardVideo = (thumbID, userID, views, day) => `
    <div class="main__video">
    <figure>
        <img src="./images/thumbnail0${thumbID}.jpg" alt="Thumb">
    </figure>
    <div class="main__info">
        <figure>
            <img src="./images/user0${userID}.jpg" alt="Channel icon">
        </figure>
        <div class="main__texts-container">
            <h2 class="main__video-title">Lorem ipsum dolor sit amet, consectetur</h2>
            <h3 class="main__video-details">User ${views}K views ${day} day ago</h3>
        </div>
    </div>
    </div>
    `

window.addEventListener('scroll', () => {
    let userID = getRandomInt()
    let thumbID = getRandomInt()
    let videoViews = getViews()
    let day = getDay()

    if(window.scrollY > lastScrollValue+200) {
        lastScrollValue = window.scrollY
        mainSection.innerHTML += cardVideo(userID,thumbID, videoViews, day)
    }
})