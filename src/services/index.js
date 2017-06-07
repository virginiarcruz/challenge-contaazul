import angular from 'angular'
import ngResource from 'angular-resource'

import Veiculo from './Veiculo'

angular.module('services', [ngResource])

.service('Veiculo', Veiculo);

export default 'services'