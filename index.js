view = (num) => {
  document.getElementById('result').value += num;
};
compute = () => {
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
};
clr = () => {
  document.getElementById('result').value = '';
};
