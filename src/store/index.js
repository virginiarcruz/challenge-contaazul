import angular from 'angular'
import flux from 'flux'

import all from './all'

angular.module('store', ['flux'])

.store('store', function(){
    return {
        initialize: function(){
            this.state = this.immutable({
                ...all.state
            })
        },
        handlers: { ...all.handlers },

        exports: all.getters,

        ...all.actions
    }
})

export default 'store'