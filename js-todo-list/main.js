// TO DO
document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')
  const input = document.querySelector('#input')
  const btn = document.querySelector('#addBtn')

  ul.addEventListener('click', (e)=> {
    const targetTagName = e.target.tagName
    switch (targetTagName) {
      case 'LI':
        e.target.classList.toggle('checked')  
        break;
      case 'SPAN':
        ul.removeChild(e.target.parentNode)
        break;
    }
  })
  
  btn.addEventListener('click', function() {
    const inputContent = document.createTextNode(input.value)
    const li = document.createElement('li')
    const close = document.createElement('span')
    
    li.appendChild(inputContent)

    close.setAttribute('class', 'close')
    close.appendChild(document.createTextNode('x'))
    
    li.appendChild(close)
    ul.appendChild(li)
  })
})