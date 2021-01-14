import { Component } from 'vue'

const NON_REACTIVITY: WeakMap<Vue, Map<string, any>> = new WeakMap

function ensureMap(component: Vue): Map<string, any> {
    if (!NON_REACTIVITY.has(component)) {
        NON_REACTIVITY.set(component, new Map)
    }
    return NON_REACTIVITY.get(component)!
}

function setNonReactivity(component: Vue, key: string, value: any): void {
    ensureMap(component).set(key, value)
}

function getNonReactivity(component: Vue, key: string): any {
    return ensureMap(component).get(key)
}

export function NonReactivity(target: Vue, property: string): void {
    Object.defineProperty(target, property, {
        get() {
            return getNonReactivity(target, property)
        },
        set(v: any) {
            setNonReactivity(target, property, v)
        }
    })
}