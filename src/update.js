import format from 'date-fns/format';

const span = document.querySelector('#time-now');

export default function update() {
  span.textContent = '';
  span.textContent = format(new Date(), 'h:mm:ssa');
  setTimeout(update, 1000);
}
