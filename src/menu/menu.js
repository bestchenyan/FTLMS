let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};


/**
 * 输电线故障管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.fault_icon = {
  name: '输电线故障管理',
  icon: 'fa fa-th',
  children: {}
};
let faultManage = menu.fault_icon.children;

faultManage.fault_monitoring = {
  name: '故障状态监测',
  path: '/fault_monitoring',

};
faultManage.fault_entering = {
  name: '故障信息录入',
  path: '/fault_entering',
};
faultManage.fault_history = {
  name: '历史故障管理',
  path: '/fault_history',
};

/**
 * 用户模块管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.user_manage = {
  name: '用户模块管理',
  icon: 'fa fa-file-text-o',
  children: {}
};

let userManage = menu.user_manage.children;
userManage.register = {
  name: '用户注册',
  path: '/user_register',
};
userManage.lineManagerUser = {
  name: '线路管理员',
  path: '/lineManagerUser',
};
userManage.inspectionUser = {
  name: '巡检人员',
  path: '/inspectionUser',
};
/**
 * 输电线传感器信息获取与存储
 * @type {{name: string, icon: string, children: {}}}
 */
menu.sensor_manage = {
  name: '输电线传感器信息管理',
  icon: 'fa fa-user-circle-o',
  path: '/messageManger'
  // children: {}
};
menu.data_manage = {
  name: '梦梦模块管理',
  icon: 'fa fa-file-text-o',
  children: {}
};
let dataManage = menu.data_manage.children;
dataManage.dataShow = {
  name: '原始数据展示',
  icon: 'fa fa-user-circle-o',
  path: '/dataShow'
  // children: {}
};
dataManage.dataAnaly = {
  name: '数据预处理',
  icon: 'fa fa-user-circle-o',
  path: '/dataAnalysis'
  // children: {}
};
dataManage.figShow = {
  name: '关联规则',
  icon: 'fa fa-user-circle-o',
  path: '/figShow'
  // children: {}
};
// let sensorManage = menu.sensor_manage.children;



// /**
//  * 分类管理
//  * @type {{name: string, icon: string, children: {}}}
//  */
// menu.category_manage = {
//   name: '分类管理',
//   icon: 'fa fa-sitemap',
//   children: {}
// };
// let CategoryManage = menu.category_manage.children;

// CategoryManage.category = {
//   name: '分类列表',
//   path: '/category_manage',
// };



// menu.permission_manage = {
//   name: '权限管理',
//   icon: 'fa fa-qrcode',
//   children: {}
// };
// let PermissionManage = menu.permission_manage.children;

// PermissionManage.role = {
//   name: '角色管理',
//   path: '/role_manage',
// };

// PermissionManage.permission = {
//   name: '权限列表',
//   path: '/permission_list',
// };

export default menu;

// if(__DEV__){

//   menu.development_tools = {
//     name: '开发工具',
//     icon: 'fa fa-wrench',
//     children: {}
//   };

//   let DevelopmentTools = menu.development_tools.children;

//   DevelopmentTools.code = {
//     name: '构建代码',
//     path: '/build_code',
//   };

// }
