
import { defineComponent, createVNode as h, shallowRef as sr, createCommentVNode } from 'vue'
import { Icon } from 'view-ui-plus'
import { on, off, document } from '../bind'
const { isArray } = Array

export const DropGlobal = defineComponent({
  emits: {
    dragover: null,
    drop: null
  },
  methods: {
    handle(e) {
      this.$emit(e.type, e)
    }
  },
  beforeMount() {
    on(document, 'dragover', this.handle)
    on(document, 'drop', this.handle)
  },
  beforeUnmount() {
    off(document, 'dragover', this.handle)
    off(document, 'drop', this.handle)
  },
  render() {
    return createCommentVNode('global')
  }
})
export default defineComponent({
  name: 'DropFile',
  emits: { change(files) { return isArray(files) } },
  props: {
    accept: { type: String, default: '' },
    global: { type: Boolean, default: false },
    reason: { type: String, default: '' },
    multiple: { type: Boolean, default: true },
    paste: { type: Boolean, default: false }
  },
  setup(props, ctx) {
    return {
      textarea: sr(null),
      file: sr(null)
    }
  },
  methods: {
    handleClick(e) {
      this.file.click()
      e.target.blur()
      e.preventDefault()
      e.stopPropagation()
    },
    handleChange(e) {
      const files = this.file.files
      if (files?.length > 0) {
        this.$emit('change', Array.from(files))
      }
    },
    handleDragover(e) {
      e.preventDefault()
      e.stopPropagation()
    },
    handleDrop(e) {
      const { target } = e
      if (this.global && !this.$el.contains(target) && e.type !== 'paste') {
        const tag = target.tagName
        if ('INPUT' === tag || 'TEXTAREA' === tag || target.isContentEditable) { return }
      }
      e.preventDefault(); e.stopPropagation()
      const files = (e.dataTransfer ?? e.clipboardData).files
      if (files.length > 0) {
        this.$emit('change', Array.from(files))
      }
    }
  },
  render() {
    const vm = this, slot = vm.$slots.default
    return h('div', {
      class: 'ivu-upload ivu-upload-drag',
      onDragover: vm.handleDragover,
      onDrop: vm.handleDrop
    }, [
      vm.global ? h(DropGlobal, {
        onDragover: vm.handleDragover,
        onDrop: vm.handleDrop
      }) : null,
      h('input', {
        ref: 'file',
        type: 'file', accept: vm.accept, multiple: vm.multiple,
        onChange: vm.handleChange
      }),
      h('textarea', {
        ref: 'textarea',
        style: {
          position: 'absolute',
          top: '0', left: '0',
          width: '100%', height: '100%',
          border: '0 none',
          resize: 'none',
          cursor: 'pointer',
          opacity: '0'
        },
        onCopy: vm.handleDragover,
        onPaste: vm.handleDrop,
        onClick: vm.handleClick
      }),
      slot != null ? slot() : [
        h('div', { class: 'ivu-card-head', style: 'text-align: left' }, [
          h('p', null, [
            h(Icon, { type: 'ios-folder-open', size: 20 }),
            `单击或拖动${vm.reason}文件到此${vm.global ? '页面' : '处'}`
          ])
        ]),
        h('div', { class: 'ivu-card-body' }, vm.$slots.body?.())
      ]
    ])
  }
})