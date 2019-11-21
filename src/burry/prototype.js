/* eslint-disable no-debugger */
Function.prototype.before = function (beforefn, ...arg) {
    let _self = this;
    return function () {
        beforefn.apply(this, arg);
        return _self.apply(this, arg);
    };
};
Function.prototype.after = function (afterfn) {
    let _self = this;
    return function () {
        let ret = _self.apply(this);
        afterfn.apply(this);
        return ret;
    };
};
Function.prototype.around = function (beforefn, afterfn) {
    let _self = this;
    return function () {
        beforefn.apply(this);
        let ret = _self.apply(this);
        afterfn.apply(this);
        return ret;
    };
};
