var body = document.querySelector('body');

var box = document.querySelectorAll('.box');
console.log(box);

box.forEach(function (e) {
  e.addEventListener('click', function (i) {
    if (i.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
    if (i.target.id == 'orangered') {
      body.style.backgroundColor = 'orangered';
    }

    if (i.target.id == 'green') {
      body.style.backgroundColor = i.target.id;
    }

    if (i.target.id == 'purple') {
      body.style.backgroundColor = i.target.id;
    }
  });
});
