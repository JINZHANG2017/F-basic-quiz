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
  const currentUrl = window.location.href;
  const splitArray = currentUrl.split("/");
  //   console.log(splitArray);
  const requestId = splitArray[splitArray.length - 1];
  const url = `http://localhost:8080/users/${requestId}`;
  fetchData(url)
    .then((result) => {
      if (result.message) {
        console.log(result.message);
        return;
      }
      console.log(result);
      $(".name").html(result.name);
      $(".age").html(result.age);
      $(".user-description").html(result.description);
      result.educations.forEach((value) => {
        const itemStr = `<li class="educations-items">
          <div class="year">${value.year}</div>
          <div>
            <header class="education-header">${value.title}</header>
            <div class="education-description">${value.description}</div>
          </div>
        </li>`;
        $(".educations-ul").append(itemStr);
      });
      //   console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
