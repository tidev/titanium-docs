import tiApi from '../api/api.json';

export default ({
  Vue,
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
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
}