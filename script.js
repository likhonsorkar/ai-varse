const humbugermenu1 = document.querySelector("#humbugermenu1");
const humbugermenu2 = document.querySelector("#humbugermenu2");
const humburgerIcon2 = document.querySelector("#humburger-icon2");
const logo = document.querySelector("#logo");
humbugermenu1.addEventListener('click',()=>{
    humbugermenu2.style.display = 'block';
    humbugermenu1.style.display = 'none';
    logo.style.display = 'none';
 });
humburgerIcon2.addEventListener('click',()=>{
    humbugermenu2.style.display = 'none';
    humbugermenu1.style.display = 'block';
    logo.style.display = 'block';
 });