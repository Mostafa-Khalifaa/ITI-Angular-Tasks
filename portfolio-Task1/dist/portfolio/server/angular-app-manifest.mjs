
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1828, hash: '57536ae093e47e84f423978eb4045c31442e3c9baab2807a539b9acbfdd26d27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'a14e42a1e4d0fc6706ea20ffdd5e208e9acef3ea14f6fa1cb5ffc4296dd5f6b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23107, hash: 'a57039463a34138b67e4582066f172eb0d8f7e4d33181d69016002b4dc49db0e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N3GZVBPS.css': {size: 4544, hash: '77VuYXCVQuQ', text: () => import('./assets-chunks/styles-N3GZVBPS_css.mjs').then(m => m.default)}
  },
};
