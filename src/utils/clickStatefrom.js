export default {
  install(Vue) {
    // 防止重复点击
    Vue.directive('preventClick', {
      inserted(el, binding) {
        el.addEventListener('click', () => {
          if (!el.disabled) {
            el.disabled = true;
            setTimeout(() => {
              el.disabled = false
            }, 3000)
          }
        })
      }
    })
  }
}