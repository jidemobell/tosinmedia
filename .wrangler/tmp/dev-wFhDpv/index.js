var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/routes/testimonials.js
async function handleTestimonials(request) {
  const url = new URL(request.url);
  if (url.pathname === "/api/testimonials" && request.method === "GET") {
    const testimonials = [
      {
        id: 1,
        name: "Luise Hanerika",
        role: "Fashion Designer",
        message: "TosinPeter Photography captured my special moments beautifully!",
        image: "/img/author-image/author-image-3.png"
      },
      {
        id: 2,
        name: "John Doe",
        role: "Event Planner",
        message: "The professionalism and creativity were outstanding!",
        image: "/img/author-image/author-image-3.png"
      },
      {
        id: 3,
        name: "Jane Smith",
        role: "Wedding Planner",
        message: "Highly recommended for any event!",
        image: "/img/author-image/author-image-3.png"
      },
      {
        id: 4,
        name: "Michael Johnson",
        role: "Corporate Client",
        message: "Exceptional service and attention to detail.",
        image: "/img/author-image/author-image-3.png"
      },
      {
        id: 5,
        name: "Sarah Connor",
        role: "Fashion Model",
        message: "The photoshoot was a dream come true!",
        image: "/img/author-image/author-image-3.png"
      }
    ];
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        // Allow all origins (replace '*' with your frontend domain in production)
      }
    });
  }
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
      // Allow all origins
    }
  });
}
__name(handleTestimonials, "handleTestimonials");

// api/routes/user.js
async function handleUser(request) {
  const url = new URL(request.url);
  if (url.pathname === "/api/user/login" && request.method === "POST") {
    const body = await request.json();
    const { username, password } = body;
    if (username === "testuser" && password === "password123") {
      return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  if (url.pathname === "/api/user/profile" && request.method === "GET") {
    const user = {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      bookings: [
        { id: 1, event: "Wedding Photography", status: "completed" },
        { id: 2, event: "Corporate Event", status: "pending" }
      ]
    };
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  if (url.pathname === "/api/user/submit-testimonial" && request.method === "POST") {
    const body = await request.json();
    const { event, message } = body;
    return new Response(JSON.stringify({ message: "Testimonial submitted successfully", event }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(handleUser, "handleUser");

// api/routes/events.js
async function handleEvents(request) {
  const url = new URL(request.url);
  if (url.pathname === "/api/events" && request.method === "GET") {
    const events = [
      { id: 1, name: "Wedding Photography", date: "2025-06-01", status: "completed" },
      { id: 2, name: "Corporate Event", date: "2025-06-15", status: "pending" }
    ];
    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  if (url.pathname === "/api/events" && request.method === "POST") {
    const body = await request.json();
    const { name, date } = body;
    return new Response(JSON.stringify({ message: "Event created successfully", name, date }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(handleEvents, "handleEvents");

// api/routes/admin.js
function generateFakeUsers(count = 100) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: `user${index + 1}`,
    email: `user${index + 1}@example.com`,
    status: index % 2 === 0 ? "active" : "disabled",
    // Alternate between active and disabled
    created_date: new Date(Date.now() - index * 864e5).toISOString(),
    // Created dates spread over the last 100 days
    updated_date: new Date(Date.now() - index * 432e5).toISOString()
    // Updated dates spread over the last 50 days
  }));
}
__name(generateFakeUsers, "generateFakeUsers");
async function handleAdmin(request) {
  const url = new URL(request.url);
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        // Allow all origins (replace '*' with your frontend domain in production)
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        // Allowed methods
        "Access-Control-Allow-Headers": "Content-Type"
        // Allowed headers
      }
    });
  }
  if (url.pathname === "/api/admin/create-user" && request.method === "POST") {
    const body = await request.json();
    const { username, email, role } = body;
    const newUser = { id: Date.now(), username, email, role };
    return new Response(JSON.stringify({ message: "User created successfully", user: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/create-appointment" && request.method === "POST") {
    const body = await request.json();
    const { userId, date, time, service } = body;
    const newAppointment = { id: Date.now(), userId, date, time, service };
    return new Response(JSON.stringify({ message: "Appointment created successfully", appointment: newAppointment }), {
      status: 201,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/send-reminder" && request.method === "POST") {
    const body = await request.json();
    const { userId, appointmentId } = body;
    return new Response(JSON.stringify({ message: `Reminder sent to user ${userId} for appointment ${appointmentId}` }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/mark-paid" && request.method === "PUT") {
    const body = await request.json();
    const { bookingId } = body;
    return new Response(JSON.stringify({ message: `Booking ${bookingId} marked as paid` }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/view-bookings" && request.method === "GET") {
    const bookings = [
      { id: 1, userId: 101, service: "Photography", date: "2025-05-15", status: "pending" },
      { id: 2, userId: 102, service: "Videography", date: "2025-05-20", status: "paid" }
    ];
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/view-testimonials" && request.method === "GET") {
    const testimonials = [
      { id: 1, name: "Luise Hanerika", message: "Amazing service!", role: "Fashion Designer" },
      { id: 2, name: "John Doe", message: "Highly recommended!", role: "Event Planner" }
    ];
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  if (url.pathname === "/api/admin/view-users" && request.method === "GET") {
    const users = generateFakeUsers(100);
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  return new Response(JSON.stringify({ error: "Not Found" }), {
    status: 404,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}
__name(handleAdmin, "handleAdmin");

// api/routes/bookings.js
async function handleBookings(request) {
  const url = new URL(request.url);
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }
  if (url.pathname === "/api/admin/view-bookings" && request.method === "GET") {
    const bookings = generateFakeBookings(20);
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
  return new Response(JSON.stringify({ error: "Not Found" }), {
    status: 404,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}
__name(handleBookings, "handleBookings");
function generateFakeBookings(count = 10) {
  const users = ["user1", "user2", "user3", "user4", "user5"];
  const events = ["Wedding", "Birthday", "Corporate Event", "Anniversary", "Graduation"];
  const paymentMediums = ["stripe", "cash", "transfer"];
  return Array.from({ length: count }, (_, index) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const randomPayment = paymentMediums[Math.floor(Math.random() * paymentMediums.length)];
    const now = /* @__PURE__ */ new Date();
    return {
      id: index + 1,
      booking_user: randomUser,
      event_name: randomEvent,
      event_date: new Date(now.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1e3).toISOString(),
      // Random future date
      booking_created: new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1e3).toISOString(),
      // Random past date
      completed: Math.random() > 0.5,
      // Randomly completed or not
      amount: (Math.random() * 1e3 + 100).toFixed(2),
      // Random amount between 100 and 1100
      payment_medium: randomPayment,
      updated: new Date(now.getTime() - Math.random() * 10 * 24 * 60 * 60 * 1e3).toISOString()
      // Random recent update
    };
  });
}
__name(generateFakeBookings, "generateFakeBookings");

// api/index.js
var api_default = {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          // Allow all origins (replace '*' with your frontend domain in production)
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
          // Allowed methods
          "Access-Control-Allow-Headers": "Content-Type"
          // Allowed headers
        }
      });
    }
    if (url.pathname.startsWith("/api/admin")) {
      return handleAdmin(request);
    }
    if (url.pathname.startsWith("/api/testimonials")) {
      return handleTestimonials(request);
    }
    if (url.pathname.startsWith("/api/user")) {
      return handleUser(request);
    }
    if (url.pathname.startsWith("/api/events")) {
      return handleEvents(request);
    }
    if (url.pathname.startsWith("/api/bookings")) {
      return handleBookings(request);
    }
    return new Response("Not Found", { status: 404 });
  }
};

// ../../../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-migKK5/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = api_default;

// ../../../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-migKK5/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
