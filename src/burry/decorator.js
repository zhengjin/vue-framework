/* eslint-disable no-console,no-unused-vars,no-debugger */
let parameter;//参数工厂
/**
 * 在around之前
 * @returns {function(*, *, *): *}
 */
export const before = function (...param) {
    parameter = param;
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.before(() => {
            console.log(`Action-${parameter[0]} 触发埋点!`);
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};

/**
 * 在around之后
 * @returns {function(*, *, *): *}
 */
export const after = function (...param) {
    parameter = param;
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.after(() => {
            console.log(`Action-${parameter[0]} 触发埋点!`);
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const around = function (...param) {
    parameter = param;
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.around(() => {
            console.log(`Action-${parameter[0]} 触发埋点!`);
            console.log(`Action-${key} 触发埋点before!`);
        }, () => {
            console.log(`Action-${parameter[0]} 触发埋点!`);
            console.log(`Action-${key} 触发埋点after!`);
        });
    };
};
