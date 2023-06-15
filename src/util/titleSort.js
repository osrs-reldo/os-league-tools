// from https://stackoverflow.com/questions/34347008/how-can-i-sort-a-javascript-array-while-ignoring-articles-a-an-the
function stripArticles(title) {
  const articles = ['a', 'an', 'the'];
  const re = new RegExp(`^(?:(${articles.join('|')}) )(.*)$`);
  const replacor = ($0, $1, $2) => `${$2}, ${$1}`;

  return title.toLowerCase().replace(re, replacor);
}

export default function titleSort(a, b) {
  const cleanA = stripArticles(a);
  const cleanB = stripArticles(b);
  // eslint-disable-next-line no-nested-ternary
  return cleanA === cleanB ? 0 : cleanA < cleanB ? -1 : 1;
}
