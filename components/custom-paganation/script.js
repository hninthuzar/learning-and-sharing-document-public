const resultEl = document.querySelector('.pagable-results');
const pageSize = document.querySelector('select[name="page-size"]');
const pageCurr = document.querySelector('input[name="page-curr"]')
const resultCount = document.querySelector('.result-count')
const pageNoCurr = document.querySelector('.page-no-curr');
const pageNoCount = document.querySelector('.page-no-count')
const btnFirst = document.querySelector('.page-btn-first');
const btnPrev = document.querySelector('.page-btn-prev');
const btnNext = document.querySelector('.page-btn-next');
const btnLast = document.querySelector('.page-btn-last');

const getResultCount = () => results.length;
const getPageSize = () => +pageSize.value;
const getCurrPage = () => +pageCurr.value;
const getPageCount = () => Math.ceil(getResultCount() / getPageSize());

let results = [];

const pageResponse = (records, pageSize, page) =>
  (start => records.slice(start, Math.min(records.length, start + pageSize)))
  (pageSize * (page - 1));

const main = async () => {
  btnFirst.addEventListener('click', navFirst);
  btnPrev.addEventListener('click', navPrev);
  btnNext.addEventListener('click', navNext);
  btnLast.addEventListener('click', navLast);
  pageCurr.addEventListener('change', navCustom);
  pageSize.addEventListener('change', changeCount);
  
  retrieveAllStatuses().then(response => {
    results = response; // Store globally, or in a scope...
    updatePager();
    redraw();
  });
};

const redraw = () => {
  resultEl.innerHTML = '';
  const paged = pageResponse(results, getPageSize(), getCurrPage());
  const ul = document.createElement('ul');
  paged.forEach(record => {
    const li = document.createElement('li');
    li.textContent = record.status;
    ul.append(li);
  });
  resultEl.append(ul);
};

const navFirst = (e) => {
  updateCurrPage(1);
  redraw();
}

const navPrev = (e) => {
  updateCurrPage(reboundPage(getCurrPage() - 1));
  redraw();
}

const navNext = (e) => {
  updateCurrPage(reboundPage(getCurrPage() + 1));
  redraw();
}

const navLast = (e) => {
  updateCurrPage(getPageCount());
  redraw();
}

const navCustom = (e) => {
  updateCurrPage(reboundPage(getCurrPage()));
  updatePager();
  redraw();
}

const changeCount = (e) => {
  updatePager();
  redraw();
};

const updateCurrPage = (page) => {
  pageNoCurr.textContent = page;
  pageCurr.value = page;
}

const reboundPage = (page) =>
  (pageCount => page < 1 ? 1 : page > pageCount ? pageCount : page)
  (getPageCount())

const updatePager = () => {
  const count = getPageCount();
  const curr = getCurrPage();
  pageCurr.value = curr > count ? 1 : curr;
  pageNoCurr.textContent = curr > count ? 1 : curr;
  pageNoCount.textContent = count;
  resultCount.textContent = getResultCount();
};

const retrieveAllStatuses = () => Promise.resolve([
  { status: "Do what is right not what is easy." },
  { status: "Hey there, WhatsApp is using me."},
  { status: "Too Busy" },
  { status: "Only you can give me that feeling." },
  { status: "I had a horribly busy day in converting oxygen into carbon dioxide" },
  { status: "Be yourself; everyone else is already taken" },
  { status: "Your attitude may hurt me, But main can Kill You!!"},
  { status: "Love is Blind, be careful." },
  { status: "'SUCCESS' is depend on U." },
  { status: "If you love someone set it free." },
  { status: "Love is sweet, When it's new. But it is sweeter when it's true." },
  { status: "Where there is love, there is life." },
  { status: "Not always 'Available' try your luck.." },
  { status: "I am not changed it's just I grew up and you should try too." },
  { status: "The biggest slap to your enemies is your success." },
  { status: "Born to express, not to impress."},
]);

main();