const update = document.querySelector('#update');
const bitcoin = document.querySelector('.bitcoin');

const usd = document.querySelector('.usd');
const eur = document.querySelector('.eur');
const gbp = document.querySelector('.gbp');

let currency = 'USD';

const getRate = (money) => {

  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      const data = response.data.bpi;
      bitcoin.textContent = `$ ${data[money].rate} ${money}`;
    })
    .catch(error => {
      bitcoin.textContent = 'Something went wrong fetching current Bitcoin rate';
      console.log(error)
    });

};

getRate(currency);

usd.addEventListener('click', () => {
  currency = 'USD';
  getRate(currency);
});

eur.addEventListener('click', () => {
  currency = 'EUR';
  getRate(currency);
});

gbp.addEventListener('click', () => {
  currency = 'GBP';
  getRate(currency);
});

update.addEventListener('click', getRate(currency));