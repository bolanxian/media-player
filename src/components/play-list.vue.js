
import { defineComponent, createVNode as h, shallowRef as sr } from 'vue'
import { Icon, CellGroup, Cell, ButtonGroup, Button, Drawer } from 'view-ui-plus'

export default defineComponent({
  name: 'PlayList',
  emits: ['play'],
  props: {
    list: { type: Array, required: true },
    name: { type: String, default: '播放列表' }
  },
  data() {
    return {
      isDrawerOpen: false,
      index: 0
    }
  },
  watch: {
    list(a, b) {
      if (a !== b) { this.reset() }
    }
  },
  computed: {
    title() {
      const { name, index, list } = this
      return `${name}[${list.length === 0 ? '0/0' : `${index + 1}/${list.length}`}]`
    }
  },
  methods: {
    set(index) {
      this.isDrawerOpen = false
      this.index = index
      this.current()
    },
    reset() {
      this.index = 0
      this.current()
    },
    prev() {
      if (--this.index < 0) { this.index = (this.list.length || 1) - 1 }
      this.current()
    },
    current() {
      const cur = this.list[this.index]
      if (cur != null) { this.$emit('play', cur) }
    },
    next() {
      if (++this.index >= this.list.length) { this.index = 0 }
      this.current()
    },
    delete(index) {
      const vm = this, vmIndex = vm.index
      vm.list.splice(index, 1)
      if (vmIndex >= vm.list.length) {
        vm.prev()
      } else if (vmIndex === index) {
        vm.current()
      }
    },
    openDrawer() { this.isDrawerOpen = true },
    setDrawer(value) { this.isDrawerOpen = value }
  },
  render(_, cache) {
    const vm = this, { title } = vm
    return h(Cell, { title }, cache[__LINE__] ??= {
      extra: () => [
        h(ButtonGroup, null, cache[__LINE__] ??= () => [
          h(Button, { onClick: vm.openDrawer }, () => '详细信息'),
          h(Button, { onClick: vm.prev }, () => '上一个'),
          h(Button, { onClick: vm.next }, () => '下一个')
        ]),
        h(Drawer, {
          title, width: 384,
          modelValue: vm.isDrawerOpen,
          'onUpdate:modelValue': vm.setDrawer
        }, cache[__LINE__] ??= () => [
          h(CellGroup, {
            onOnClick: vm.set, style: 'padding: 0px'
          }, cache[__LINE__] ??= () => Array.from(vm.list, (value, index) =>
            h(Cell, {
              title: value.name, name: index, selected: vm.index === index
            }, {
              extra: () => h(Button, {
                onClick(e) { e.stopPropagation(); vm.delete(index) }
              }, () => h(Icon, { type: 'md-close' }))
            })
          ))
        ])
      ]
    })
  }
})