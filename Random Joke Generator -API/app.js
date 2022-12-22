const joke_api = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const joke_show = document.getElementById('joke');
const btn = document.getElementById('btn');
const emg = document.getElementById('emg');

const getJoke = () => {
  joke_show.classList.remove('fade');
  fetch ( joke_api )
      .then(data => data.json())
      .then(item => {
        joke_show.innerText = item.joke
        joke_show.classList.add('fade');
        emg.innerHTML = '&#128514'
      })
}
getJoke()

btn.addEventListener('click', () => {
  getJoke()
  emg.innerHTML = '&#128522'
})

