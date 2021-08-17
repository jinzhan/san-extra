/**
 * @file 实现san定义全局组件
 * @author jinzhan
*/

import san, {Component as SanComponent} from 'san';
const globalComponents = {};

// export class Component extends SanComponent {
//     constructor(options) {
//         super(options);
//         const components = this.components || this.constructor.components;
//         Object.assign(components, globalComponents);
//     }
// };

function inherits(subClass, superClass) {
    let subClassProto = subClass.prototype;
    let F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    Object.assign(subClass.prototype, subClassProto);
};

export function Component(options) {
    SanComponent.call(this, options);
    const components = this.components || this.constructor.components;
    Object.assign(components, globalComponents);
};

inherits(Component, SanComponent);

/**
 * 注入全局组件
 * 
 * @param {Object} 要注册的全局components的组件键值对
 * 
 * registerComponent({
 *  's-button': Button
 * })
*/

export const registerComponent = components => {
    Object.assign(globalComponents, components);
};

export const defineComponent = (proto, SuperComponent) => san.defineComponent(proto, SuperComponent || Component);
