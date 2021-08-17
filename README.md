# san-extra

为 san 提供常用的组件增强，包括：全局组件、mixin、组合式API等。


## Installation

```
npm install san-extra
```

## Usage

`san-extra` 为 san 提供的额外增强能力；



### 全局组件


```js
import {Component, registerComponent, defineComponent} from 'san-extra';


// 定义全局组件
registerComponent({
    'my-comp': defineComponent({
        template: '<div>{{text}}</div>'
    })
});

// 使用class的形式
class Demo extends Component {
    static template = /*html*/`
        <div>
            <my-comp text="{{text}}"></my-comp>
        </div>
    `;
};


// 使用defineComponent
defineComponent({
    template: /*html*/`
        <div>
            <my-comp text="{{text}}"></my-comp>
        </div>
    `
})

```



### mixin

```js
import {Component, mixin} from 'san-extra';

class Demo extends Component{
    static components = {
        'b-label': BLabel
    };
    static template = /*html*/`
    <div>
        <s-label text="{{text}}"></s-label>
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

```

### 组合式API

敬请期待
