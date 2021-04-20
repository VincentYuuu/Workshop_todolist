// TO DO
//document.addEventListener('DOMContentLoaded', function() {
//  const ul = document.querySelector('ul')
//  const input = document.querySelector('#input')
//  const btn = document.querySelector('#addBtn')

//  ul.addEventListener('click', (e)=> {
//    const targetTagName = e.target.tagName
//    switch (targetTagName) {
//      case 'LI':
//        e.target.classList.toggle('checked')  
//        break;
//      case 'SPAN':
//        ul.removeChild(e.target.parentNode)
//        break;
//    }
//  })

  
  
//  btn.addEventListener('click', function() {
//    const inputValue = document.createTextNode(input.value)
//    const li = document.createElement('li')
//    const close = document.createElement('span')
    
//    li.appendChild(inputValue)

//    close.setAttribute('class', 'close')
//    close.appendChild(document.createTextNode('x'))
    
//    li.appendChild(close)
//    ul.appendChild(li)
//  })
//})

//document.addEventListener('DOMContentLoaded', function() {
//  const ul = document.querySelector('ul')
//  const li = document.querySelectorAll('li')
//  const input = document.querySelector('#input')
//  const btn = document.querySelector('#addBtn')
//  const close = document.querySelectorAll('span.close')

//  for (let i = 0; i < li.length; i++) {
//    li[i].addEventListener('click', function() {
//      this.classList.toggle('checked') 
//    })
//    close[i].addEventListener('click', function() {
//      this.parentNode.remove()
//    })
//  }

    
//    btn.addEventListener('click', function() {
//      const newLi = document.createElement('li')
//      const inputValue = document.createTextNode(input.value)
//      const newClose = document.createElement('span')
//      newLi.addEventListener('click', function() {
//        this.classList.toggle('checked') 
//      })
//      newClose.addEventListener('click', function() {
//        this.parentNode.remove()
//      })
      
//      newLi.appendChild(inputValue)
      
//      newClose.setAttribute('class', 'close')
//      newClose.appendChild(document.createTextNode('x'))
  
//      newLi.appendChild(newClose)
//      ul.appendChild(newLi)
//    })
//})