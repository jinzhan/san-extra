import {shallowMount} from 'san-test-utils';
import {ExtComponent, registerComponent, defineComponent} from '../src';

describe('Greet', () => {
    it('register global components successfully', () => {
        registerComponent({
            's-label': defineComponent({
                template: '<div>SLabel: {{msg}} </div>'
            })
        });

        const msg = 'Hello World';

        const Greet = defineComponent({ 
            initData() {
                return {
                    msg
                };
            },
            template: /*html*/`
                <div>
                    <s-label msg="{{msg}}"></s-label>
                </div>
            `
        });

        const wrapper = shallowMount(Greet);
        expect(wrapper.text()).toBe(msg);
    });
});
