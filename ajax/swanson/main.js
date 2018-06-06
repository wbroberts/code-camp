const blockquote = document.querySelector('blockquote');
const quote = document.getElementById('ronSwanson');

const url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

const fadeOut = (el) => {
  el.className = 'fade-out';
}

const fadeIn = (el) => {
  el.className = '';
  el.className = 'fade-in';
  document.querySelector('.author').textContent = '- Ron Swanson';
}


const fetching = () => {
  fadeOut(blockquote);

   setTimeout(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      quote.textContent = `"${data[0]}"`;
      fadeIn(blockquote);
    })
    .catch(error => console.log(error));
  }, 1000);
  
}

const jQuerying = () => {
  fadeOut(blockquote);

  setTimeout(() => {
    $.getJSON(url)
    .done(response => {
      $(quote).text(`"${response[0]}"`);
      fadeIn(blockquote);
    })
    .fail(error => console.log(error));
  }, 1000);
  
}

const axiosing = () => {
  fadeOut(blockquote);

   setTimeout(() => {
    axios.get(url)
    .then(response => {
      quote.textContent = `"${response.data[0]}"`;
      fadeIn(blockquote);
    })
    .catch(error => console.log(error.message));
  }, 1000);
  
}

fetching();

document.getElementById('fetch').addEventListener('click', fetching);

$('#jQ').click(jQuerying);

document.getElementById('axios').addEventListener('click', axiosing);