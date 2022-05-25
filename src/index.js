// const ramens  = "http://localhost:3000/ramens"

const getRamen = () => {
  fetch("http://localhost:3000/ramens/")
    .then(res => res.json())
    .then(arr => arr.forEach(ramen => renderRamenMenu(ramen)))
}

const renderRamenMenu = (ramen) => {
  // console.log(ramen)
  let menuDiv = document.querySelector('div')
  let imgMenu = document.createElement('img')

  imgMenu.src = ramen.image
  imgMenu.addEventListener('click', () => renderRamenDetail(ramen))

  menuDiv.append(imgMenu)
}

const getRamenDetail = () => {
  fetch("http://localhost:3000/ramens/1")
    .then(res => res.json())
    .then(ramen => renderRamenDetail(ramen))
}

const renderRamenDetail = (ramen) => {
  let imgDetail = document.querySelector(".detail-image")
  let name = document.querySelector('.name')
  let restaurant = document.querySelector('.restaurant')
  let rating = document.querySelector('#rating-display')
  let comment = document.querySelector('#comment-display')

  imgDetail.src = ramen.image
  name.textContent = ramen.name
  restaurant.textContent = ramen.restaurant
  rating.textContent = ramen.rating
  comment.textContent = ramen.comment
}


const formInfo = () => {
  const form = document.querySelector('#new-ramen')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newRamen = {}

    newRamen['name'] = e.target['new-name'].value
    newRamen['restaurant'] = e.target['new-restaurant'].value
    newRamen['image'] = e.target['new-image'].value
    newRamen['rating'] = e.target['new-rating'].value
    newRamen['comment'] = e.target['new-comment'].value

    renderRamenMenu(newRamen)
    renderRamenDetail(newRamen)
    form.reset()
  })
}

formInfo()
getRamen();
getRamenDetail();
