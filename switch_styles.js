function toggleTheme() {
  const theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') === 'style_serious.css') {
    theme.setAttribute('href', 'style.css');
  } else {
    theme.setAttribute('href', 'style_serious.css');
  }
}

document.getElementById("switch_button").addEventListener("click", toggleTheme);
