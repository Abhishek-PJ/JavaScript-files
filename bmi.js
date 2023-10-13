const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (height && weight == isNaN()) {
    result.innerHTML = 'Enter correct values';
  } else {
    const c = Math.round(weight / (height * height));
    result.innerHTML = `Your BMI is:${c}`;
  }
});
