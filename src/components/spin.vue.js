
import { defineComponent, createVNode as h, Transition } from 'vue'

const spinner =/*<base64>*/`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<style>
  svg{
    stroke:#2d8cf0;
    fill:#2d8cf0;
    animation:rotate .8s steps(8) infinite;
    transform-origin:center;
  }
  @keyframes rotate{to{transform:rotate(1turn)}}
</style>
<g transform="rotate(315,16,16)"><circle cx="16" cy="5" r="3"/></g>
<g transform="rotate(270,16,16)"><circle cx="16" cy="5" r="2.75"/></g>
<g transform="rotate(225,16,16)"><circle cx="16" cy="5" r="2.5"/></g>
<g transform="rotate(180,16,16)"><circle cx="16" cy="5" r="2.25"/></g>
<g transform="rotate(135,16,16)"><circle cx="16" cy="5" r="2"/></g>
<g transform="rotate(90,16,16)"><circle cx="16" cy="5" r="1.75"/></g>
<g transform="rotate(45,16,16)"><circle cx="16" cy="5" r="1.5"/></g>
<g transform="rotate(0,16,16)"><circle cx="16" cy="5" r="1.25"/></g>
</svg>
`/*</base64>*/

export const Spin = defineComponent({
  props: { show: { type: Boolean, default: true } },
  setup(props) {
    let render
    return () => h(Transition, { name: 'fade' }, render ??= () => [
      props.show ? h('div', { class: 'ivu-spin ivu-spin-fix' }, [h('div', {
        class: 'ivu-spin-main', style: {
          width: '64px', height: '64px',
          backgroundImage: `url("${spinner}")`
        }
      })]) : null
    ])
  }
})

const $bar = 'ivu-loading-bar', style = 'height:3px'
export const Bar = defineComponent({
  props: {
    loading: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
  },
  setup(props) {
    let render
    return () => h(Transition, { name: 'fade' }, render ??= () => {
      const { loading, error } = props
      return (loading || error) ? h('div', { class: $bar, style }, [
        h('div', {
          class: {
            [`${$bar}-inner`]: true,
            [`${$bar}-inner-color-primary`]: loading,
            [`${$bar}-inner-failed-color-error`]: error
          },
          style
        }, loading ? Array.from({ length: 5 }, (_, i) => {
          return h('div', {
            class: `${$bar}-inner`,
            style: `${style};animation-delay:${-i}s`
          })
        }) : null)
      ]) : null
    })
  }
})