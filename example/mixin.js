// import {Component, defineComponent} from 'san';
import {mixin, Component, defineComponent} from '@src';
import App from'@app';

const BLabel = defineComponent({
    template: '<div>comp 1: {{text}} </div>'
});

class Demo extends Component{
    static components = {
        'b-label': BLabel
    };
    static template = /*html*/`
    <div>
        <s-label text="{{text}}"></s-label>
        <div>----------------------</div>
        <b-label text="{{text}}"></b-label>
    </div>
    `;
};

mixin(Demo, {
    components: {
        's-label': defineComponent({
            template: '<div>s-label: {{text}} </div>'
        })
    },
})

App(Demo, '#app');
