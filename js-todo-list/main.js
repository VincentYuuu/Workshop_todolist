// TO DO
document.addEventListener('DOMContentLoaded', function() {
  const ul = document.querySelector('ul')

  ul.addEventListener('click', (e)=> {
    const targetTagName = e.target.tagName
    switch (targetTagName) {
      case 'LI':
        e.target.classList.toggle('checked')  
        break;
    }
  })
})