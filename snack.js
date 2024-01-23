var style = document.createElement('link');
  style.rel = "stylesheet";
  style.href = "/style.css";
  document.head.appendChild(style);
function snackbar(msg){
  var sb = document.createElement('div');
  document.body.appendChild(sb);
  sb.style = 'position : fixed; bottom: 50px;';
  sb.innerHTML = `<div class='snackbar'><p>${msg}</p><span class='material-symbols-outlined' onclick='this.parentElement.parentElement.remove()'>close</span></div>`;
}
