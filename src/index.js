let sharedData = {};
let installed = false;

/**
 * Add 'shared' option to Vue constructor.
 */
function init() {
  const options = this.$options;
  if (options.shared) {
    sharedData = options.shared;
  }
}

/**
 * Install vue-shared-data plugin.
 *
 * @param Vue {Vue}
 */
export default function install(Vue) {
  if (installed) {
    return;
  }

  Vue.mixin({ beforeCreate: init });

  // Define Vue.$shred property.
  Object.defineProperty(Vue.prototype, '$shared', { get: () => sharedData });

  installed = true;
}

// When Vue is defined as global, install this plugin automatically.
if (window && window.Vue && window.Vue.use) {
  window.Vue.use(install);
}
