/* eslint-disable no-console,no-unused-vars,no-debugger */
/**
 * 在around之前
 * @param param
 * @returns {Function}
 */
export const before = function (...param) {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.before((evt, arg) => {
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
        descriptor.value = descriptor.value.after((evt, arg) => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param}****after****-触发事件名称-${key} 触发埋点!`);
        });
    };
};
export const around = function (...param) {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.around((evt, arg) => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param} ****around*****-触发事件名称-${key} 触发埋点before!`);
        }, (evt, ...arg) => {
            const page = window.location.pathname;
            console.log(`pageName id-${page}Action 参数-${param} ***around***-触发事件名称-${key} 触发埋点after!`);
        });
    };
};
