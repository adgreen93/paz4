'use strict';

import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('paz4App.admin', ['paz4App.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
