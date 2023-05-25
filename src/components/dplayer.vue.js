
import { defineComponent, createVNode as h, shallowRef as sr } from 'vue'
import DPlayer from 'dplayer'

export default defineComponent({
  props: {
    width: { type: Number, default: () => 960 },
    height: { type: Number, default: () => 540 }
  },
  setup(props, ctx) {
    return {
      player: sr(null)
    }
  },
  computed: {
    video() { return this.player?.video ?? null }
  },
  methods: {
    setVideo(url) {
      this.video.src = url
      //this.player.switchVideo({ url }, {})
    },
    readDanmaku(dan) {
      const { danmaku } = this.player
      danmaku.dan = dan.sort((a, b) => (a.time - b.time))
      danmaku.seek()
    },
    play() {
      this.player.play()
    },
    pause() {
      this.player.pause()
    },
    playpause() {
      this.player.toggle()
    },
    volume(a) {
      return this.player.volume(a)
    },
    relativeVolume(a) {
      return this.player.volume(this.video.volume + a)
    },
    relativeSeek(time) {
      this.player.seek(this.video.currentTime + time)
    }
  },
  mounted() {
    const vm = this, { container } = vm.$refs
    const player = vm.player = new DPlayer({
      container,
      volume: 1,
      hotkey: false,
      screenshot: false,
      video: {},
      danmaku: { api: 'api/', id: '0' },
      apiBackend: {
        send(options) { options.error() },
        read(options) { options.success([]) }
      }
    })
    vm.video.volume = 1
    vm.video.crossOrigin = null
    player.danmaku.opacity(0.35)
  },
  beforeUnmount() {
    this.player.destroy()
    this.player = null
  },
  render() {
    const vm = this, { width, height } = vm
    return h('div', {
      class: 'player-container player-force-show-controls player-hide-layers',
      style: {
        '--dplayer-width': width === 0 ? '100%' : width + 'px',
        '--dplayer-height': height + 'px'
      }
    }, [
      h('div', { ref: 'container', class: 'dplayer' })
    ])
  }
})
