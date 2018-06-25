exports.config = {
  namespace: `library_view`,
  fsNamespace: 'library_view',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
};
