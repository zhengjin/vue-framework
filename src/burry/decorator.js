/* eslint-disable no-console,no-unused-vars,no-debugger */
let parameter = new Map();//参数工厂
/**
 * 在around之前
 * @param param
 * @returns {Function}
 */
export const before = function (...param) {
    return function (target, key, descriptor) {
        parameter.set('before' + key, param);
        descriptor.value = descriptor.value.before(() => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param}****before****-触发事件名称-${key} 触发埋点!`);
        });
    };
};

/**
 * 在around之后
 * @param param
 * @returns {Function}
 */
export const after = function (...param) {
    return function (target, key, descriptor) {
        parameter.set('after' + key, param);
        descriptor.value = descriptor.value.after(() => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param}****after****-触发事件名称-${key} 触发埋点!`);
        });
    };
};
export const around = function (...param) {
    return function (target, key, descriptor) {
        parameter.set('around' + key, param);
        descriptor.value = descriptor.value.around(() => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param} ****around*****-触发事件名称-${key} 触发埋点before!`);
        }, () => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param} ***around***-触发事件名称-${key} 触发埋点after!`);
        });
    };
};
