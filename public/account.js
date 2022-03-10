const welcomeBanner = document.getElementById('welcomeNameSec')

welcomeBanner.innerText += ' ' + window.localStorage.getItem('username')