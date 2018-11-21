import http from 'axios';
import Vuex from 'vuex';

export default ({
  Vue,
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer
}) => {
  Vue.filter('formatTypes', function (types) {
    if (!types) {
      return 'void';
    }

    if (Array.isArray(types)) {
      return `${types.join(' | ')}`;
    }

    return types;
  });

  Vue.use(Vuex);
  const store = createStore(Vue, router.options.base);
  options.store = store;
}

function createStore(Vue, baseUrl) {
  return new Vuex.Store({
    state: {
      metadata: {}
    },
    actions: {
      fetchMetadata ({ commit }, id) {
        const url = `${baseUrl}metadata/${id.toLowerCase()}.json`;
        return http.get(url).then(response => {
          commit('setMetadata', { id, metadata: response.data });
        });
      }
    },
    mutations: {
      setMetadata (state, { id, metadata }) {
        Vue.set(state.metadata, id, metadata);
      }
    }
  })
}
