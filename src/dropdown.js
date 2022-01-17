export function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
      
  }

export const dropDownMenu = (()=>{
  const body = document.querySelector("body");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const nav = document.createElement('div');
  nav.classList.add("dropdown");

  const navBtn = document.createElement("button");
  navBtn.classList.add("dropbtn");
  // navBtn.setAttribute('onclick', 'myFunction()')
  navBtn.innerText = "Dropdown";

  const content = document.createElement('div');
  content.classList.add('dropdown-content');
  content.setAttribute('id', 'myDropdown');

  content.innerHTML = `
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  `;

  nav.appendChild(navBtn);
  nav.appendChild(content);
  wrapper.appendChild(nav)
  body.appendChild(wrapper);
})()


// Close the dropdown menu if the user clicks outside of it
export function handleEvent(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

const dropBtn = document.querySelector('.dropbtn')
dropBtn.addEventListener('click', myFunction)

window.onclick = handleEvent
