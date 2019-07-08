'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 用户信息
  router.get('/', controller.home.index);
  router.get('/user/login', controller.home.login);
  router.post('/user/add', controller.home.insert);
  // router.get('/user/:count', controller.home.queryList);
  // router.get('/create', controller.home.create);

  // 问题库
  router.get('/question/query/:id', controller.question.getByList);
  router.post('/question/create', controller.question.insert);
  router.post('/question/update', controller.question.update);

};
