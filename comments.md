完成度：
=======
* 大部分功能已实现，样式需要微调

Details:

- \- 需要检查URL访问，当请求/any/1时，不应返回user

测试：
=====


Details:



知识点：
=======
* 合理的使用了flex

Details:

- \- 用npm去管理包依赖
- \- 不推荐jquery调用函数，声明函数后，直接函数调用就可以了
- \- 应该通过请求status code去判断请求是否成功，而不是通过message
- \- user和educations数据是两个请求，可以分别获取，获取后独立渲染
- \- 在for循环中，每次都要操作DOM获取元素，影响性能，不推荐这样做

工程实践：
=========
* 很多方法不符合单一职责，建议按照业务逻辑划分模块或方法
* 不要去disable eslint，这通常说明代码工程实践存在问题

Details:

- \- 不要提交注释
- \- 代码不需要注释，通过代码本身来体现业务功能
- \- 建议把数据请求提取到单独的service
- \- 长方法，建议拆分逻辑
- \- 使用shorthand

综合：
=====


Details:


