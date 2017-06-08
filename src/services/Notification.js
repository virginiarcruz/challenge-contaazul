import toastr from 'toastr'

export default class Notification {
    
    warning (title, message) {
        this.fire('warning', message, title)
    }

    error (title, message) {
        this.fire('error', message, title)
    }

    success (title, message) {
        this.fire('success', message, title)
    }

    info (title, message) {
        this.fire('info', message, title)
    }

    fire (type, message, title = null) {
        toastr[type](message, title)
    }
}