const bind = (fn, context, ...rest) => {
    return function (...arg) {
        return fn.call(context, ...rest.concat(arg))
    }
}
bind();