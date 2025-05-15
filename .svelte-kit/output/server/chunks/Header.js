import "clsx";
import { d as sanitize_props, r as rest_props, f as fallback, h as spread_attributes, i as bind_props, p as pop, b as push, j as sanitize_slots, g as getContext, k as spread_props, l as slot, m as attr_class, a as escape_html } from "./index.js";
function ButtonSkeleton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "size"]);
  push();
  let href = fallback($$props["href"], void 0);
  let size = fallback($$props["size"], "default");
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        href,
        rel: $$restProps.target === "_blank" ? "noopener noreferrer" : void 0,
        role: "button",
        ...$$restProps
      },
      null,
      {
        "bx--skeleton": true,
        "bx--btn": true,
        "bx--btn--field": size === "field",
        "bx--btn--sm": size === "small",
        "bx--btn--lg": size === "lg",
        "bx--btn--xl": size === "xl"
      }
    )}></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps }, null, {
      "bx--skeleton": true,
      "bx--btn": true,
      "bx--btn--field": size === "field",
      "bx--btn--sm": size === "small",
      "bx--btn--lg": size === "lg",
      "bx--btn--xl": size === "xl"
    })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, size });
  pop();
}
function Button($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  push();
  let hasIconOnly, iconProps, buttonProps;
  let kind = fallback($$props["kind"], "primary");
  let size = fallback($$props["size"], "default");
  let expressive = fallback($$props["expressive"], false);
  let isSelected = fallback($$props["isSelected"], false);
  let icon = fallback($$props["icon"], void 0);
  let iconDescription = fallback($$props["iconDescription"], void 0);
  let tooltipAlignment = fallback($$props["tooltipAlignment"], "center");
  let tooltipPosition = fallback($$props["tooltipPosition"], "bottom");
  let as = fallback($$props["as"], false);
  let skeleton = fallback($$props["skeleton"], false);
  let disabled = fallback($$props["disabled"], false);
  let href = fallback($$props["href"], void 0);
  let tabindex = fallback($$props["tabindex"], "0");
  let type = fallback($$props["type"], "button");
  let ref = fallback($$props["ref"], null);
  const ctx = getContext("ComposedModal");
  if (ctx && ref) {
    ctx.declareRef(ref);
  }
  hasIconOnly = (icon || $$slots.icon) && !$$slots.default;
  iconProps = {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  };
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  if (skeleton) {
    $$payload.out += "<!--[-->";
    ButtonSkeleton($$payload, spread_props([
      { href, size },
      $$restProps,
      { style: hasIconOnly && "width: 3rem;" }
    ]));
  } else if (as) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { props: buttonProps });
    $$payload.out += `<!---->`;
  } else if (href && !disabled) {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<a${spread_attributes({ ...buttonProps }, null)}>`;
    if (hasIconOnly) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr_class("", void 0, { "bx--assistive-text": true })}>${escape_html(iconDescription)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----> `;
    if ($$slots.icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      slot(
        $$payload,
        $$props,
        "icon",
        spread_props([
          {
            style: hasIconOnly ? "margin-left: 0" : void 0
          },
          iconProps
        ])
      );
      $$payload.out += `<!---->`;
    } else if (icon) {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<!---->`;
      icon?.($$payload, spread_props([
        {
          style: hasIconOnly ? "margin-left: 0" : void 0
        },
        iconProps
      ]));
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...buttonProps }, null)}>`;
    if (hasIconOnly) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr_class("", void 0, { "bx--assistive-text": true })}>${escape_html(iconDescription)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----> `;
    if ($$slots.icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      slot(
        $$payload,
        $$props,
        "icon",
        spread_props([
          {
            style: hasIconOnly ? "margin-left: 0" : void 0
          },
          iconProps
        ])
      );
      $$payload.out += `<!---->`;
    } else if (icon) {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<!---->`;
      icon?.($$payload, spread_props([
        {
          style: hasIconOnly ? "margin-left: 0" : void 0
        },
        iconProps
      ]));
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    kind,
    size,
    expressive,
    isSelected,
    icon,
    iconDescription,
    tooltipAlignment,
    tooltipPosition,
    as,
    skeleton,
    disabled,
    href,
    tabindex,
    type,
    ref
  });
  pop();
}
function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "title"]);
  push();
  let labelled, attributes;
  let size = fallback($$props["size"], 16);
  let title = fallback($$props["title"], void 0);
  labelled = $$sanitized_props["aria-label"] || $$sanitized_props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$sanitized_props["tabindex"]) === 0 ? true : void 0
  };
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      preserveAspectRatio: "xMidYMid meet",
      width: size,
      height: size,
      ...attributes,
      ...$$restProps
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title>${escape_html(title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function Header($$payload) {
  $$payload.out += `<header class="header sticky-header fixed-header"><div class="container"><div class="header-inner d-none d-lg-flex svelte-1hgj3jf"><div class="header-logo"><a href="/"><img src="img/logo/bitmap.png" alt="logo" style="height: 20px;"></a></div> <div class="header-navigation svelte-1hgj3jf"><button class="header-navigation-trigger" aria-label="Open navigation menu"><span></span> <span></span> <span></span></button> <nav class="main-navigation"><ul class="section-name"><li data-menuanchor="first-section" class="active"><a href="#first-section">Welcome</a></li> <li data-menuanchor="second-section"><a href="#second-section">About</a></li> <li data-menuanchor="third-section"><a href="#third-section">Portfolios</a></li> <li data-menuanchor="fourth-section"><a href="#fourth-section">Testimonials</a></li> <li data-menuanchor="fifth-section"><a href="#fifth-section">Contact</a></li></ul></nav></div> <div class="header-cta svelte-1hgj3jf">`;
  Button($$payload, {
    kind: "secondary",
    href: "https://calendly.com/your-calendly-link",
    target: "_blank",
    icon: Calendar,
    iconDescription: "Book Appointment",
    style: "background-color: black; color: white; font-weight: bold; padding: 10px 33px; border-radius: 2px;",
    children: ($$payload2) => {
      $$payload2.out += `<span class="button-text svelte-1hgj3jf">Book Appointment</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="mobile-menu-wrapper d-block d-lg-none"><div class="mobile-menu clearfix"><a href="/" class="mobile-logo"><img src="img/logo/logo-light.png" alt="mobile logo"></a></div></div></div></header>`;
}
export {
  Header as H
};
