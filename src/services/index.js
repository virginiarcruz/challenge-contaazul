import angular from 'angular'
import ngResource from 'angular-resource'

import Veiculo from './Veiculo'
import Notification from './Notification'

angular.module('services', [ngResource])

.service('Veiculo', Veiculo)
.service('Notification', Notification)

export default 'services'