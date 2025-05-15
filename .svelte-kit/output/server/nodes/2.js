import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2._nUZb4Ku.js","_app/immutable/chunks/FqEdNSdB.js","_app/immutable/chunks/CuIcymPu.js","_app/immutable/chunks/BQjKAKWr.js","_app/immutable/chunks/BtxDQVFl.js","_app/immutable/chunks/C2Y7dR0l.js","_app/immutable/chunks/C5zrE2JS.js","_app/immutable/chunks/CAHhALS2.js","_app/immutable/chunks/DxNlWU_Q.js","_app/immutable/chunks/BRARO86z.js","_app/immutable/chunks/iFSSAk2C.js","_app/immutable/chunks/TF1EcFJg.js","_app/immutable/chunks/BOYgcdNA.js"];
export const stylesheets = ["_app/immutable/assets/Header.CksPqHxl.css","_app/immutable/assets/2.CP2cvi00.css"];
export const fonts = [];
