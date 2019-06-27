'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536859564199_3953';



  // start serve port
  config.cluster = {
    listen: {
      port: 9080
    }
  };

  // add your config here
  config.middleware = ['printdate','forbidip'];

  config.forbidip = {
    forbidips:[
      '192.168.0.10'
    ]
  }

  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      ignoreJSON: false,
    },
    domainWhiteList: ['http://127.0.0.1:9080'],
  };

  config.sequelize  = {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'weap_race',
      username: 'root',
      password: 'root',
  };

  config.cors = {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
  };
  
  return config;
};
