/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-undef */
function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // end -->
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .catch(function (e) {
      return e;
    });
}

$(function () {
  const url = "http://localhost:8080/users/1";
  fetchData(url)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
