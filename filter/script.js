const tagAll = document.getElementById('tagAll')
const tag1 = document.getElementById('tag1')
const tag2 = document.getElementById('tag2')
const tag3 = document.getElementById('tag3')
const tag4 = document.getElementById('tag4')
const tag5 = document.getElementById('tag5')
const tag6 = document.getElementById('tag6')

const filterSelection = (tag) => {
  const items = document.querySelectorAll('.item');

  if (tag === 'all') tag = ""

  items.forEach((item) => {
    removeClass(item, 'show')

    if (item.className.includes(tag)) {
      addClass(item, 'show')
    }
  })
}

const addClass = (el, name) => {
  const getClasses = el.className.split(' ');
  const names = name.split(' ')

  names.forEach((name) => {
    if (!getClasses.includes(name)) {
      el.className += ` ${name}`;
    }
  })
}

const removeClass = (el, name) => {
  const names = name.split(' ')

  names.forEach((name) => {
    const regex = new RegExp(`\\b${name}\\b`, 'g');

    el.className = el.className.replace(regex, '')
  })
}

const addActive = () => {
  const tags = document.querySelectorAll(".filter-tag")

  tags.forEach((btn) => {
    btn.addEventListener("click", function () {
      const current = document.querySelector('.active')

      current.classList.remove("active")

      this.classList.add("active")
    })
  })
}

tagAll.addEventListener('click', () => {
  filterSelection("all")
})
tag1.addEventListener('click', () => {
  filterSelection("tag1")
})
tag2.addEventListener('click', () => {
  filterSelection("tag2")
})
tag3.addEventListener('click', () => {
  filterSelection("tag3")
})
tag4.addEventListener('click', () => {
  filterSelection("tag4")
})
tag5.addEventListener('click', () => {
  filterSelection("tag5")
})
tag6.addEventListener('click', () => {
  filterSelection("tag6")
})

filterSelection("all")
addActive()

// AOS.init({
//   duration: 1000,
//   once: true,
//   easing: "ease-out",
// });