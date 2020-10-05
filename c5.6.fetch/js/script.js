const firstNumberNode = document.querySelector('.j-first-number');
const secondNumberNode = document.querySelector('.j-second-number');
const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-query-result');

function displayResult(apiData) {
  const card = `<img src="${apiData}" class="card-image">`;    
  resultNode.innerHTML = card;
};

firstNumberNode.addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
});

secondNumberNode.addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
});

const useRequest = (firstNumber, secondNumber) => {
  return fetch('https://picsum.photos/' + firstNumber + '/' + secondNumber)
    .then((response) => {
      return displayResult(response.url);
    })
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
  const firstNumber = firstNumberNode.value;
  const secondNumber = secondNumberNode.value;
  if((firstNumber >= 100 && firstNumber <= 300) && (secondNumber >= 100 && secondNumber <= 300)) {
    await useRequest(firstNumber, secondNumber);
  }
  else {
    resultNode.innerHTML = "одно из чисел (или оба числа) вне диапазона от 100 до 300";
  };
});