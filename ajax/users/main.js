const nameDOM = document.querySelector('.name');
const usernameDOM = document.querySelector('.username');
const emailDOM = document.querySelector('.email');
const cityDOM = document.querySelector('.location');
const imageDOM = document.querySelector('.main-image');
const genderDOM = document.querySelector('.gender');
const ageDOM = document.querySelector('.age');

const fillUserDOM = (userInfo) => {
  nameDOM.textContent = userInfo.name;
  usernameDOM.textContent = userInfo.user;
  emailDOM.textContent = userInfo.email;
  cityDOM.textContent = userInfo.location;
  imageDOM.src = userInfo.pic;
  genderDOM.textContent = userInfo.sex;
  
  const icon = document.createElement('i');
  genderDOM.insertAdjacentElement('afterbegin', icon);
  userInfo.sex === 'female' ? icon.className = 'fas fa-venus' : icon.className = 'fas fa-mars';
}

const parseInfo = (response) => {
  return {
    name: `${response.name.first} ${response.name.last}`,
    user: `${response.login.username}`,
    email: `${response.email}`,
    pic: `${response.picture.medium}`,
    location: `${response.location.city}, ${response.location.state}`,
    sex: `${response.gender}`
  }  
}

const getUser = () => {

  axios.get('https://randomuser.me/api/')
  .then(response => response.data.results[0])
  .then(response => parseInfo(response))
  .then(data => fillUserDOM(data))
  .catch(error => {
    if (error.response) {
      nameDOM.textContent = error;
    } else {
      nameDOM.textContent = error.message;
    }
  });

}

getUser();

document.querySelector('button').addEventListener('click', getUser);