# vue-nonreactivity-decorator

vue-nonreactivity-decorator supports non-reactivity features that are not supported by vue-property-decorator. Use decorators for class properties that don't require reactivity.

You can refer to the example below.

```
import { Vue, Component } from 'vue-property-decorator'
import NonReactivity from 'vue-nonreactivity-decorator'

@Component
class YourComponent extends Vue {
    @NonReactivity('Hello, World!')
    private yourProperty!: string
}
```

## Install
```
npm i vue-nonreactivity-decorator
```