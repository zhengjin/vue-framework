/* eslint-disable no-console,no-unused-vars,no-debugger */
/**
 * 在around之前
 * @returns {function(*, *, *): *}
 */
export const before = function () {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.before(() => {
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};

/**
 * 在around之后
 * @returns {function(*, *, *): *}
 */
export const after = function () {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.after(() => {
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const around = function () {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.around(() => {
            console.log(`Action-${key} 触发埋点before!`);
        }, () => {
            console.log(`Action-${key} 触发埋点after!`);
        });
    };
};

/**
 * 带事件对象
 * @returns {function(*, *, *): *}
 */
export const eventBefore = function () {
    return function (target, key, descriptor) {
        let method = descriptor.value;
        descriptor.value = function(...args){
            debugger
            try{
                return method.apply(this, args) //this为方法执行时的所在对象
            }catch(e){
                console.log(`method.apply error :${e}`);
            }
        };
        return descriptor
    };
};
