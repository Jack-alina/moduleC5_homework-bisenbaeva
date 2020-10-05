function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

let inputNode = document.querySelector('.j-myValidate');
let resultNode = document.querySelector('.j-query-result');

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

inputNode.addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
});

inputNode.addEventListener('keydown', function(e) {
	if(e.keyCode === 13) {
		if(this.value >= 1 && this.value <=10) {
			this.disabled = true;
			const value = this.value;		
			useRequest('https://picsum.photos/v2/list?limit=' + value, displayResult);
		}
		else {
			resultNode.innerHTML = "число вне диапазона от 1 до 10, попробуйте снова";
			this.value = '';
		};			
	};	
});