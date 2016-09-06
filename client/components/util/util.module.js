'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('paz4App.util', [])
  .factory('Util', UtilService)
  .name;
