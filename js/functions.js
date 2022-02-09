function toggleTheme() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'style.css') {
      theme.setAttribute('href', 'try.css');
      localStorage.setItem("test", 'try.css');
  } else {
      theme.setAttribute('href', 'style.css');
      localStorage.setItem("test", 'style.css');
  }   
}
function setCSS(){
  var el = document.getElementById('test');
  var theme = localStorage.getItem('test');
  if (theme) {
      el.href = theme;
  }
}
function swap(file){
  var theme = document.getElementsByTagName('link')[0];
  if(theme.getAttribute('href') == theme.getItem('test')){}
  else {
      theme.setAttribute('href', localStorage.getItem('test'));
  }
}
window.onload = function(){
  setCSS();
  swap(localStorage.getItem('test'));
}
