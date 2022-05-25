const getRamen = () => {
  fetch("http://localhost:3000/ramens/")
    .then(res => res.json())
    .then(arr => arr.forEach(ramen => renderRamenMenu(ramen)))
}

const renderRamenMenu = (ramen) => {
  let menuDiv = document.querySelector('div')
  let imgMenuDiv = document.createElement('div')
  let imgMenu = document.createElement('img')
  let btn = document.createElement('button')

  imgMenu.src = ramen.image
  imgMenu.addEventListener('click', () => renderRamenDetail(ramen))

  btn.textContent = "delete"
  btn.className = 'delete-btn'
  btn.addEventListener('click', () => {
    console.log("hey")
    btn.parentNode.remove()
  })

  imgMenuDiv.append(imgMenu)
  imgMenuDiv.append(btn)

  menuDiv.append(imgMenuDiv)
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

    if (e.target['new-image'].value === "" || null) {
      alert("Image required")
      return
    } else {
      newRamen['name'] = e.target['new-name'].value
      newRamen['restaurant'] = e.target['new-restaurant'].value
      newRamen['image'] = e.target['new-image'].value
      newRamen['rating'] = e.target['new-rating'].value
      newRamen['comment'] = e.target['new-comment'].value

      renderRamenMenu(newRamen)
      renderRamenDetail(newRamen)
      form.reset()
    }
  })
}

const editFormInfo = () => {
  const form = document.querySelector('#edit-ramen')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let imgDetail = document.querySelector(".detail-image")
    let name = document.querySelector('.name')
    let restaurant = document.querySelector('.restaurant')

    let editRamen = {}

    editRamen['name'] = name.textContent
    editRamen['restaurant'] = restaurant.textContent
    editRamen['image'] = imgDetail.src
    editRamen['rating'] = e.target['new-rating'].value
    editRamen['comment'] = e.target['new-comment'].value

    renderRamenDetail(editRamen)
    form.reset()
  })
}

formInfo();
editFormInfo();
getRamen();
getRamenDetail();