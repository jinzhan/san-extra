import {Component, registerComponent, defineComponent} from '@src';
import App from'@app';

const SLabel = defineComponent({
    template: '<div>comp 1: {{text}} </div>'
});

registerComponent({
    'b-label': defineComponent({
        template: '<div>comp 2 {{text}}</div>'
    })
});

class Demo extends Component {
    static components = {
        's-label': SLabel
    };

    static template = /*html*/`
        <div>
            <s-label text="{{text}}"></s-label>
            <div>----------------------</div>
            <b-label text="{{text}}"></b-label>
        </div>
    `;
    initData() {
        return {
            text: 'haha'
        };
    }   
};

App(Demo, '#app');
