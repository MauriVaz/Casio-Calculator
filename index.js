let state = false;
view = (num) => {
  document.getElementById('result').value += num;
};
compute = () => {
  let x = document.getElementById('result').value;
  try {
    let y = eval(x);
    document.getElementById('result').value = y;
  } catch (error) {
    clr();
  }
};
del = () => {
  let x = document.getElementById('result').value;
  let numS = x + '';
  let find;
  let operando;
  array = x.split('');
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (x === '/' || x === '+' || x === '-' || x === '*') {
      find = i;
    }
  }
  let num1 = numS.substring(0, find);
  operando = array[find];
  operando = parseInt(operando);
  if (array.length === 1) {
    clr();
  } else {
    document.getElementById('result').value = num1.charAt(0, find - 1);
  }
};

clr = () => {
  document.getElementById('result').value = '';
};
on = () => {
  document.getElementById('result').style.backgroundColor = 'lightgreen';
  clr();
};
off = () => {
  document.getElementById('result').style.backgroundColor = 'black';
  clr();
};
