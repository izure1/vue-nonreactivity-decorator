# vue-nonreactivity-decorator

**[vue-nonreactivity-decorator](https://www.npmjs.com/package/vue-nonreactivity-decorator)** supports non-reactivity features that are not supported by **[vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator)**. Use decorators for class properties that don't require reactivity.

You can refer to the example below.

```
import { Vue, Component } from 'vue-property-decorator'
import NonReactivity from 'vue-nonreactivity-decorator'

@Component
class YourComponent extends Vue {

    @NonReactivity('Hello, World!') // Initial value
    private yourProperty!: string

    sayHello(): void {
        console.log(yourProperty)
        this.yourProperty = 'Vue is awesome'
    }

}
```

## Install
Can be downloaded from [here](https://www.npmjs.com/package/vue-nonreactivity-decorator).
```
npm i vue-nonreactivity-decorator
```