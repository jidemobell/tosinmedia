import "clsx";
import { b as push, f as fallback, e as ensure_array_like, m as attr_class, a as escape_html, i as bind_props, p as pop, q as attr, t as copy_payload, v as assign_payload } from "../../../chunks/index.js";
function Sider($$payload, $$props) {
  push();
  let activeSection = fallback($$props["activeSection"], "dashboard");
  let sections = fallback(
    $$props["sections"],
    () => [
      {
        name: "Dashboard",
        icon: "🏠",
        id: "dashboard"
      },
      { name: "Users", icon: "👤", id: "users" },
      {
        name: "Appointments",
        icon: "📅",
        id: "appointments"
      },
      // { name: 'Testimonials', icon: '💬', id: 'testimonials' },
      { name: "Bookings", icon: "📖", id: "bookings" }
    ],
    true
  );
  const each_array = ensure_array_like(sections);
  $$payload.out += `<div class="sider svelte-1jv1cds"><div class="sider-header svelte-1jv1cds"><h2>Admin Panel</h2></div> <ul class="sider-menu svelte-1jv1cds"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<li><button type="button"${attr_class("svelte-1jv1cds", void 0, { "active": activeSection === section.id })}><span class="icon svelte-1jv1cds">${escape_html(section.icon)}</span> <span class="name svelte-1jv1cds">${escape_html(section.name)}</span></button></li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { activeSection, sections });
  pop();
}
function UserManagement($$payload, $$props) {
  push();
  let filteredUsers, paginatedUsers, totalPages;
  let users = [];
  let activeFilter = "all";
  let currentPage = 1;
  const rowsPerPage = 20;
  filteredUsers = users.filter((user) => {
    return true;
  });
  paginatedUsers = filteredUsers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const each_array = ensure_array_like(paginatedUsers);
  $$payload.out += `<div class="user-management svelte-oi0jdi"><div class="filters svelte-oi0jdi"><button${attr_class("svelte-oi0jdi", void 0, { "active": activeFilter === "all" })}>All</button> <button${attr_class("svelte-oi0jdi", void 0, { "active": activeFilter === "active" })}>Active</button> <button${attr_class("svelte-oi0jdi", void 0, { "active": activeFilter === "disabled" })}>Disabled</button></div> <table class="user-table svelte-oi0jdi"><thead><tr><th class="svelte-oi0jdi">Username</th><th class="svelte-oi0jdi">Email</th><th class="svelte-oi0jdi">Status</th><th class="svelte-oi0jdi">Last Updated</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let user = each_array[$$index];
    $$payload.out += `<tr><td class="svelte-oi0jdi">${escape_html(user.username)}</td><td class="svelte-oi0jdi">${escape_html(user.email)}</td><td class="svelte-oi0jdi">${escape_html(user.status)}</td><td class="svelte-oi0jdi">${escape_html(user.updated_date)}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> <div class="pagination svelte-oi0jdi"><button${attr("disabled", currentPage === 1, true)} class="svelte-oi0jdi">Previous</button> <span>Page ${escape_html(currentPage)} of ${escape_html(totalPages)}</span> <button${attr("disabled", currentPage === totalPages, true)} class="svelte-oi0jdi">Next</button></div></div>`;
  pop();
}
function AppointmentManagement($$payload, $$props) {
  push();
  let appointments = [];
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  const each_array = ensure_array_like(appointments);
  $$payload.out += `<div class="appointment-management svelte-yb5cex"><h1>Appointment Management</h1> <table class="appointment-table svelte-yb5cex"><thead><tr><th class="svelte-yb5cex">Name</th><th class="svelte-yb5cex">Date Created</th><th class="svelte-yb5cex">Reason</th><th class="svelte-yb5cex">Appointment Date</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let appointment = each_array[$$index];
    $$payload.out += `<tr><td class="svelte-yb5cex">${escape_html(appointment.name)}</td><td class="svelte-yb5cex">${escape_html(formatDate(appointment.date_created))}</td><td class="svelte-yb5cex">${escape_html(appointment.reason)}</td><td class="svelte-yb5cex">${escape_html(formatDate(appointment.appointment_date_selected))}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  pop();
}
function BookingManagement($$payload, $$props) {
  push();
  let bookings = [];
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  const each_array = ensure_array_like(bookings);
  $$payload.out += `<div class="booking-management svelte-1z10zwn"><h1>Booking Management</h1> <table class="booking-table svelte-1z10zwn"><thead><tr><th class="svelte-1z10zwn">User</th><th class="svelte-1z10zwn">Event</th><th class="svelte-1z10zwn">Event Date</th><th class="svelte-1z10zwn">Booking Created</th><th class="svelte-1z10zwn">Completed</th><th class="svelte-1z10zwn">Amount</th><th class="svelte-1z10zwn">Payment Medium</th><th class="svelte-1z10zwn">Updated</th><th class="svelte-1z10zwn">History</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let booking = each_array[$$index];
    $$payload.out += `<tr><td class="svelte-1z10zwn"><a${attr("href", `/admin/users/${booking.booking_user}`)} class="link svelte-1z10zwn">${escape_html(booking.booking_user)}</a></td><td class="svelte-1z10zwn"><a${attr("href", `/admin/events/${booking.event_name}`)} class="link svelte-1z10zwn">${escape_html(booking.event_name)}</a></td><td class="svelte-1z10zwn">${escape_html(formatDate(booking.event_date))}</td><td class="svelte-1z10zwn">${escape_html(formatDate(booking.booking_created))}</td><td class="svelte-1z10zwn">${escape_html(booking.completed ? "Yes" : "No")}</td><td class="svelte-1z10zwn">$${escape_html(booking.amount)}</td><td class="svelte-1z10zwn">`;
    if (booking.payment_medium === "stripe") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", `/admin/receipts/stripe/${booking.id}`)} class="link svelte-1z10zwn">Stripe</a>`;
    } else if (booking.payment_medium === "cash") {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<a${attr("href", `/admin/receipts/cash/${booking.id}`)} class="link svelte-1z10zwn">Cash</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(booking.payment_medium)}`;
    }
    $$payload.out += `<!--]--></td><td class="svelte-1z10zwn">${escape_html(formatDate(booking.updated))}</td><td class="svelte-1z10zwn"><a${attr("href", `/admin/bookings/history/${booking.id}`)} class="link svelte-1z10zwn">View History</a></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  pop();
}
function DashboardManagement($$payload, $$props) {
  let activeSection = fallback($$props["activeSection"], "dashboard");
  $$payload.out += `<div class="dashboard-management svelte-1q38dci">`;
  if (activeSection === "users") {
    $$payload.out += "<!--[-->";
    UserManagement($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (activeSection === "appointments") {
    $$payload.out += "<!--[-->";
    AppointmentManagement($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (activeSection === "bookings") {
    $$payload.out += "<!--[-->";
    BookingManagement($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (activeSection === "dashboard") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1>Welcome to the Admin Dashboard</h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { activeSection });
}
function _page($$payload, $$props) {
  push();
  let activeSection = "dashboard";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="admin-dashboard svelte-12qc28"><header class="dark-header svelte-12qc28"><h1>Admin Dashboard</h1></header> <main class="dashboard-layout svelte-12qc28">`;
    Sider($$payload2, {
      class: "sider",
      get activeSection() {
        return activeSection;
      },
      set activeSection($$value) {
        activeSection = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="dashboard-content svelte-12qc28">`;
    DashboardManagement($$payload2, { activeSection });
    $$payload2.out += `<!----></div></main></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
