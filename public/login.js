const signIn = document.getElementById('signIn')
const nameInput = document.getElementById('username')

signIn.addEventListener('submit', (e) => {
    e.preventDefault()

    window.localStorage.setItem('username', nameInput.value)
    window.location.href = './account.html'
})