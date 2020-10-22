// TODO GTB-4: * 很多方法不符合单一职责，建议按照业务逻辑划分模块或方法
// TODO GTB-4: * 不要去disable eslint，这通常说明代码工程实践存在问题
// TODO GTB-1: * 大部分功能已实现，样式需要微调
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-undef */
function fetchData(url) {
  // TODO GTB-4: - 代码不需要注释，通过代码本身来体现业务功能
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // end -->
  // TODO GTB-4: - 建议把数据请求提取到单独的service
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .catch(function (e) {
      return e;
    });
}

// TODO GTB-3: - 不推荐jquery调用函数，声明函数后，直接函数调用就可以了
$(function () {
  // TODO GTB-4: - 长方法，建议拆分逻辑
  const currentUrl = window.location.href;
  const splitArray = currentUrl.split("/");
  //   console.log(splitArray);
  // TODO GTB-1: - 需要检查URL访问，当请求/any/1时，不应返回user
  const requestId = splitArray[splitArray.length - 1];
  const url = `http://localhost:8080/users/${requestId}`;
  fetchData(url)
    .then((result) => {
      if (result.message) {
        // TODO GTB-3: - 应该通过请求status code去判断请求是否成功，而不是通过message
        console.log(result.message);
        return;
      }
      console.log(result);
      // TODO GTB-3: - user和educations数据是两个请求，可以分别获取，获取后独立渲染
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
        // TODO GTB-3: - 在for循环中，每次都要操作DOM获取元素，影响性能，不推荐这样做
        $(".educations-ul").append(itemStr);
      });
      //   console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
