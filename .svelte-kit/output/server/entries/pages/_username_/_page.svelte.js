import { s as store_get, e as ensure_array_like, a as escape_html, u as unsubscribe_stores, p as pop, b as push } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let profile = {};
  let bookings = [];
  let testimonials = [];
  store_get($$store_subs ??= {}, "$page", page).params.username;
  const each_array = ensure_array_like(bookings);
  const each_array_1 = ensure_array_like(testimonials);
  $$payload.out += `<div><h1>Welcome, ${escape_html(profile.username)}</h1> <section><h2>Your Bookings</h2> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let booking = each_array[$$index];
    $$payload.out += `<li>${escape_html(booking.event_name)} - ${escape_html(booking.status)} `;
    if (booking.status === "pending") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button>Pay Now</button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></section> <section><h2>Your Testimonials</h2> <ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let testimonial = each_array_1[$$index_1];
    $$payload.out += `<li>${escape_html(testimonial.message)}</li>`;
  }
  $$payload.out += `<!--]--></ul></section></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
