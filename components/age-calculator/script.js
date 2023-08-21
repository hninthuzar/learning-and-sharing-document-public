const btnz = document.querySelector("#calcz");
const displayz = document.querySelector("#displayz");

btnz.onclick = () => {
  let d1 = Number(document.querySelector("#dd").value);
  let m1 = Number(document.querySelector("#mm").value);
  let y1 = Number(document.querySelector("#yy").value);

  if(d1 && m1 && y1) {
    let datez = new Date();

    let d2 = datez.getDate();
    let m2 = datez.getMonth() + 1;
    let y2 = datez.getFullYear();

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2) {
      d2 += months[m2 - 1];
      m2 -= 1;
    }
    if(m1 > m2) {
      m2 += 12;
      y2 -= 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    let dtextz = d > 1? 'days' : 'day';
    let mtextz = m > 1? 'months' : 'month';
    let ytextz = y > 1? 'years' : 'year';

    displayz.innerHTML = `${y} ${ytextz} , ${m} ${mtextz} and ${d} ${dtextz}`;

  } else {
    alert("Fill All Input");
  }
};