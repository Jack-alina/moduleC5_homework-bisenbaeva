// находим все необходимые ноды
const resultNode = document.querySelector('.j-result');
const pageNumberNode = document.querySelector('.j-page-number');
const limitNode = document.querySelector('.j-limit');
const btn = document.querySelector('.j-btn');

// функция для валидации введенных значений
function validFunc(pageNumber, limit) {
	pageNumberValid = pageNumber >= 1 && pageNumber<= 10;
	limitValid = limit >= 1 && limit <= 10;
	return(pageNumberValid && limitValid);
	// return((pageNumber >= 1 && pageNumber<= 10) && (limit >= 1 && limit <= 10));
};

// функция вывда в результат сообщения о том, 
// что номер страницы и/или лимит вне диапазона от 1 до 10
function outOfRange() {
	if(!pageNumberValid && !limitValid) {
		resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
	}
	else if (!pageNumberValid) {
		resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
	}
	else {
		resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
	}
};

// функция вывода в результат списка картинок
function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
    
  resultNode.innerHTML = cards;
};

// функция для отправки запроса
const useRequest = (url) => {
		fetch(url)
		.then((response) => { return response.json(); })
		.then((data) => { displayResult(data); localStorage.setItem('url', url)})
		.catch(() => { console.log('error') });
};

useRequest(localStorage.getItem('url'));

// обработчик клика на кнопку запроса
btn.addEventListener('click', () => {
	const pageNumber = pageNumberNode.value;
	const limit = limitNode.value;
	if(validFunc(pageNumber, limit) == false) {
		outOfRange();
	}
	else {
		useRequest(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`);
	};	
});