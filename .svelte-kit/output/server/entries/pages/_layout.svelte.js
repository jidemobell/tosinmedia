import { s as store_get, o as head, l as slot, u as unsubscribe_stores, p as pop, b as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { H as Header } from "../../chunks/Header.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let showHeader;
  const headerRoutes = ["/photo-gallery", "/photo-details"];
  showHeader = headerRoutes.includes(store_get($$store_subs ??= {}, "$page", page).url.pathname);
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="shortcut icon" href="#"> <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700">`;
  });
  if (!showHeader) {
    $$payload.out += "<!--[-->";
    Header($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
