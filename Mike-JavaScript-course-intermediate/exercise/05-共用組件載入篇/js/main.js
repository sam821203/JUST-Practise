window.onload = function () {

  const headerEl = document.getElementById('header');
  const footerEL = document.getElementById('footer');

  function headerData() {
    return axios.get('./components/header.html');
  }

  const footerData = () => axios.get('./components/footer.html');

  axios.all([headerData(), footerData()]).then(axios.spread(function (header, footer) {
    headerEl.innerHTML = header.data;
    footerEL.innerHTML = footer.data;
    // console.log(header, footer);
  }))

  // axios.get('./components/header.html').then(function (res) {
  //   headerEl.innerHTML = res.data;
  // })

  // axios.get('./components/footer.html').then(function (res) {
  //   footerEl.innerHTML = res.data;
  // })
}