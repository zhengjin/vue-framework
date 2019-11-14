/* eslint-disable no-console,no-unused-vars,no-debugger */
export const before = function (...args) {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.before(() => {
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const after = function (...args) {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.after(() => {
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const around = function (...args) {
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.around((evnt) => {
            debugger
            console.log(`Action-${key} 触发埋点before!`);
        }, () => {
            debugger
            console.log(`Action-${key} 触发埋点after!`);
        });
    };
};
