/* eslint-disable no-console,no-unused-vars,no-debugger */
let parameter = new Map();//参数工厂
/**
 * 在around之前
 * @param param
 * @returns {Function}
 */
export const before = function (...param) {
    // parameter = new Map();
    // parameter.set('before', param);
    return function (target, key, descriptor) {
        // let ssss = param;
        // descriptor.writable = param;
        parameter.set('before' + key, param);
        descriptor.value = descriptor.value.before(() => {
            console.log(`Action 参数-${param}-${key} 触发埋点!`);
            // console.log(`Action-${parameter[0]} 触发埋点!`);
            // console.log(`Action-${key} 触发埋点!`);
        });
    };
};

/**
 * 在around之后
 * @param param
 * @returns {Function}
 */
export const after = function (...param) {
    // parameter = param;
    // parameter.set('after', param);
    return function (target, key, descriptor) {
        parameter.set('after' + key, param);
        descriptor.value = descriptor.value.after(() => {
            console.log(`Action 参数-${param}****after****-${key} 触发埋点!`);
            // console.log(`Action-${parameter[0]} 触发埋点!`);
            // console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const around = function (...param) {
    // parameter = param;
    // parameter.set('around', param);
    return function (target, key, descriptor) {
        parameter.set('around' + key, param);
        descriptor.value = descriptor.value.around(() => {
            console.log(`Action 参数-${param} ****around*****-${key} 触发埋点before!`);
            // console.log(`Action-${parameter[0]} 触发埋点!`);
            // console.log(`Action-${key} 触发埋点before!`);
        }, () => {
            console.log(`Action 参数-${param} ***around***-${key} 触发埋点after!`);
            // console.log(`Action-${parameter[0]} 触发埋点!`);
            // console.log(`Action-${key} 触发埋点after!`);
        });
    };
};
