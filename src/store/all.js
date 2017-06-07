import { mapState, mapHandlers , mapActions, mergeGetters } from './helpers'

import fleet from '@/views/fleet/Store'

export default {
    state: {
        fleet: fleet.state
    },
    handlers: {
        ...mapHandlers('fleet', fleet.handlers)
    },
    actions: {
        ...mapActions('fleet', fleet.actions)
    },
    getters: mergeGetters(
        {}, fleet.getters
    )
}
