document.addEventListener('DOMContentLoaded', fetchJoke);

function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('joke');
            jokeElement.innerHTML = data.value;
        })
        .catch(error => console.error('Error fetching joke:', error));
}
