function handleClick() {
  var list = document.getElementById('dropdownClick');
  if (list.className === 'topnav') {
    list.className += 'responsive';
    // change topnav to topnav.responsive
  } else {
    list.className = "top"
  }
}
