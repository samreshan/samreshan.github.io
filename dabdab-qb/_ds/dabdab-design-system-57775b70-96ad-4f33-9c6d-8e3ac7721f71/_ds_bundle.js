/* @ds-bundle: {"format":4,"namespace":"DabdabDesignSystem_57775b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"PatternPanel","sourcePath":"components/surfaces/PatternPanel.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1c0d82f557e6","components/core/Button.jsx":"ff0f1da189fa","components/core/Icon.jsx":"73d5d41c704a","components/core/IconButton.jsx":"200bf7d3fb03","components/core/Logo.jsx":"8dc3eaa71bc8","components/core/Tag.jsx":"e0396f93e1bd","components/forms/Checkbox.jsx":"35f30d2e5189","components/forms/Field.jsx":"cc42ff9e731f","components/forms/Input.jsx":"0e123dd967a9","components/forms/Radio.jsx":"b1f86f13d340","components/forms/Select.jsx":"9debac5fe149","components/forms/Switch.jsx":"142cc237c787","components/forms/Textarea.jsx":"ac9a72152755","components/navigation/Navbar.jsx":"a6611833baef","components/navigation/SideNav.jsx":"4ce248a7a2f5","components/navigation/Tabs.jsx":"79547ead3545","components/surfaces/Card.jsx":"801fe8e3e431","components/surfaces/Dialog.jsx":"7edb158ffabf","components/surfaces/PatternPanel.jsx":"a51df14e8f80","components/surfaces/Toast.jsx":"35e5f3417d8d","components/surfaces/Tooltip.jsx":"4c6718331f12","ui_kits/studio-ops/Pipeline.jsx":"2f8cdf731dcd","ui_kits/studio-ops/ProjectDetail.jsx":"209b91110a80","ui_kits/studio-ops/Settings.jsx":"d8c518c9e7ef","ui_kits/studio-site/CaseStudy.jsx":"ba8216e508c4","ui_kits/studio-site/Contact.jsx":"213a6ca4a536","ui_kits/studio-site/Home.jsx":"fee11579e569"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DabdabDesignSystem_57775b = window.DabdabDesignSystem_57775b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tiny mono uppercase status/label chip. Not interactive. */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dab-badge dab-badge--${tone} ${className}`.trim()
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "dab-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";

/** Monochrome lucide glyph, masked so it always takes the inherited text colour. */
function Icon({
  name,
  size = 18,
  label,
  className = "",
  style,
  ...rest
}) {
  const url = `var(--icon-${name}, url("${LUCIDE_BASE}${name}.svg"))`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dab-icon ${className}`.trim(),
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    style: {
      width: size,
      height: size,
      WebkitMaskImage: url,
      maskImage: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The system's primary action. Sticker-shadow pill; hover lifts toward the light,
 * press drops into the shadow.
 * @startingPoint section="Core" subtitle="Pill buttons with sticker shadows" viewport="700x180"
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  className = "",
  ...rest
}) {
  const cls = ["dab-btn", `dab-btn--${variant}`, `dab-btn--${size}`, fullWidth ? "dab-btn--full" : "", className].filter(Boolean).join(" ");
  const glyph = size === "lg" ? 20 : size === "sm" ? 15 : 18;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: glyph
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: glyph
  }) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: rest.type || "button",
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-round icon-only control for toolbars, cards and nav. */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["dab-iconbtn", `dab-iconbtn--${variant}`, `dab-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? 22 : size === "sm" ? 16 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK = "var(--logo-mark)";

/**
 * The Dabdab mark, optionally locked up with the wordmark.
 * The mark is masked, so it renders in whatever `color` it inherits.
 * @startingPoint section="Brand" subtitle="Mark and wordmark lockups" viewport="700x160"
 */
function Logo({
  lockup = "horizontal",
  size = 32,
  tone = "inherit",
  markSrc,
  href,
  className = "",
  ...rest
}) {
  const url = markSrc ? `url("${markSrc}")` : MARK;
  const color = tone === "ink" ? "var(--ink)" : tone === "paper" ? "var(--paper)" : tone === "brand" ? "var(--dab-yellow-500)" : undefined;
  const cls = ["dab-logo", lockup === "stacked" ? "dab-logo--stacked" : "", className].filter(Boolean).join(" ");
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dab-logo__mark",
    style: {
      width: size,
      height: size,
      WebkitMaskImage: url,
      maskImage: url
    },
    role: "img",
    "aria-label": "Dabdab"
  }), lockup !== "mark" ? /*#__PURE__*/React.createElement("span", {
    className: "dab-logo__word",
    style: {
      fontSize: size * 0.72
    }
  }, "dabdab") : null);
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    style: {
      color
    }
  }, rest), body);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono pill for filters, capabilities and tech stack. Optionally selectable/removable. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = "",
  ...rest
}) {
  const interactive = Boolean(onClick);
  const cls = ["dab-tag", interactive ? "dab-tag--interactive" : "", selected ? "dab-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick,
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    className: "dab-tag__remove",
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with optional description line. Checked = brand yellow fill. */
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `dab-check ${disabled ? "dab-check--disabled" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dab-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "dab-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "dab-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + hint + error wrapper. Wrap any control; keeps vertical rhythm consistent. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `dab-field ${className}`.trim()
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "dab-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "dab-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "dab-field__error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 13
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dab-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input. 2px ink border; focus adds the sticker shadow. */
function Input({
  size = "md",
  icon,
  invalid = false,
  className = "",
  ...rest
}) {
  const cls = ["dab-input", `dab-input--${size}`, invalid ? "dab-input--invalid" : "", className].filter(Boolean).join(" ");
  const field = /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("span", {
    className: "dab-input-wrap dab-input-wrap--icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  }), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — same box as Checkbox but round, with a dot. */
function Radio({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `dab-check dab-check--radio ${disabled ? "dab-check--disabled" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dab-check__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dab-check__dot"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "dab-check__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "dab-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with the brand's border treatment and a lucide chevron. */
function Select({
  options = [],
  size = "md",
  placeholder,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "dab-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: `dab-select__control dab-input--${size} ${className}`.trim()
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "dab-select__chev",
    name: "chevron-down",
    size: 17
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — the only component allowed to bounce (spring easing on the knob). */
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `dab-switch ${disabled ? "dab-switch--disabled" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dab-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dab-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line input. Vertically resizable, 4 rows by default. */
function Textarea({
  rows = 4,
  invalid = false,
  className = "",
  ...rest
}) {
  const cls = ["dab-textarea", invalid ? "dab-textarea--invalid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: rows,
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marketing / product site header. Sticky, veiled and blurred by default.
 * @startingPoint section="Navigation" subtitle="Sticky site header with brand lockup" viewport="700x120"
 */
function Navbar({
  links = [],
  active,
  tone = "paper",
  actions,
  logoSize = 26,
  markSrc,
  className = "",
  ...rest
}) {
  const cls = ["dab-navbar", `dab-navbar--${tone}`, tone === "ink" ? "dab-on-ink" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: logoSize,
    href: "#",
    markSrc: markSrc,
    tone: tone === "ink" ? "paper" : "ink"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "dab-navbar__links"
  }, links.map(raw => {
    const l = typeof raw === "string" ? {
      label: raw,
      href: "#"
    } : raw;
    const isActive = (active ?? "") === l.label;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      className: `dab-navbar__link ${isActive ? "dab-navbar__link--active" : ""}`.trim(),
      href: l.href || "#",
      onClick: l.onClick
    }, l.label);
  })), actions ? /*#__PURE__*/React.createElement("div", {
    className: "dab-navbar__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** App sidebar: brand slot, grouped items, footer slot. Active item is a yellow pill. */
function SideNav({
  items = [],
  active,
  onSelect,
  brand,
  footer,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: `dab-sidenav ${className}`.trim()
  }, rest), brand ? /*#__PURE__*/React.createElement("div", {
    className: "dab-sidenav__brand"
  }, brand) : null, items.map((raw, i) => {
    if (raw && raw.group) return /*#__PURE__*/React.createElement("div", {
      className: "dab-sidenav__group",
      key: `g${i}`
    }, raw.group);
    const item = typeof raw === "string" ? {
      value: raw,
      label: raw
    } : raw;
    const isActive = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      type: "button",
      className: `dab-sidenav__item ${isActive ? "dab-sidenav__item--active" : ""}`.trim(),
      "aria-current": isActive ? "page" : undefined,
      onClick: () => onSelect && onSelect(item.value)
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 17
    }) : null, item.label, item.badge != null ? /*#__PURE__*/React.createElement("span", {
      className: "dab-sidenav__badge"
    }, item.badge) : null);
  }), footer ? /*#__PURE__*/React.createElement("div", {
    className: "dab-sidenav__footer"
  }, footer) : null);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tab strip. `underline` for page-level sections, `pill` for in-panel view switches. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  className = "",
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `dab-tabs dab-tabs--${variant} ${className}`.trim(),
    role: "tablist"
  }, rest), items.map(raw => {
    const item = typeof raw === "string" ? {
      value: raw,
      label: raw
    } : raw;
    const selected = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      className: "dab-tab",
      role: "tab",
      type: "button",
      "aria-selected": selected,
      onClick: () => onChange && onChange(item.value)
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 15
    }) : null, item.label, item.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "dab-tab__count"
    }, item.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The container primitive. `sticker` is the brand-forward look (2px ink border +
 * offset shadow); `plain` is the quiet one for dense UI.
 * @startingPoint section="Surfaces" subtitle="Card variants: plain, sticker, ink, brand" viewport="700x260"
 */
function Card({
  children,
  variant = "plain",
  eyebrow,
  title,
  media,
  footer,
  interactive = false,
  className = "",
  ...rest
}) {
  const cls = ["dab-card", `dab-card--${variant}`, interactive ? "dab-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    className: "dab-card__media"
  }, media) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "dab-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    className: "dab-card__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "dab-card__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "dab-card__footer"
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal dialog: scrim + blur, sticker-shadow panel, spring pop-in. */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dab-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `dab-dialog ${className}`.trim(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      maxWidth: width
    },
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "dab-dialog__head"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "dab-dialog__title"
  }, title) : null, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "dab-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "dab-dialog__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PatternPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A section/hero surface carrying the brand's hand-drawn weave texture.
 * The tint is pre-baked per tone (ink-on-yellow, yellow-on-ink, ink-on-paper).
 */
function PatternPanel({
  children,
  tone = "brand",
  tile = 520,
  squared = false,
  className = "",
  style,
  ...rest
}) {
  const cls = ["dab-panel", `dab-panel--${tone}`, squared ? "dab-panel--square" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dab-panel__texture",
    style: {
      backgroundSize: `${tile}px ${tile}px`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dab-panel__inner"
  }, children));
}
Object.assign(__ds_scope, { PatternPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PatternPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  success: "check-circle",
  danger: "alert-triangle",
  info: "info",
  brand: "sparkles"
};

/** Transient confirmation. Slides up with a spring; ink border, sticker shadow. */
function Toast({
  tone = "success",
  title,
  message,
  icon,
  onDismiss,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `dab-toast dab-toast--${tone} ${className}`.trim(),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "dab-toast__icon",
    name: icon || GLYPH[tone] || "info",
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    className: "dab-toast__text"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "dab-toast__title"
  }, title) : null, message ? /*#__PURE__*/React.createElement("div", {
    className: "dab-toast__msg"
  }, message) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** CSS-only tooltip: wraps a trigger, shows on hover and focus-within. */
function Tooltip({
  label,
  placement = "top",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dab-tooltip dab-tooltip--${placement} ${className}`.trim()
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "dab-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-ops/Pipeline.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Button,
  IconButton,
  Icon,
  Tabs,
  Input,
  Tooltip,
  Switch
} = window.DabdabDesignSystem_57775b;
const PROJECTS = [{
  id: "p1",
  client: "Northwind Pay",
  name: "Checkout rebuild",
  stage: "In build",
  tone: "brand",
  lead: "AS",
  due: "12 Aug",
  progress: 0.72,
  stack: ["Node", "Redis"]
}, {
  id: "p2",
  client: "Kora Retail",
  name: "WebGL configurator",
  stage: "In build",
  tone: "brand",
  lead: "PT",
  due: "26 Aug",
  progress: 0.41,
  stack: ["WebGL", "React"]
}, {
  id: "p3",
  client: "Haul",
  name: "Warehouse dashboard",
  stage: "Review",
  tone: "info",
  lead: "SM",
  due: "04 Sep",
  progress: 0.9,
  stack: ["Postgres"]
}, {
  id: "p4",
  client: "Mira Health",
  name: "Onboarding v3",
  stage: "Shipped",
  tone: "success",
  lead: "AS",
  due: "—",
  progress: 1,
  stack: ["React"]
}, {
  id: "p5",
  client: "Dune Labs",
  name: "Data pipeline audit",
  stage: "Scoping",
  tone: "neutral",
  lead: "RB",
  due: "18 Sep",
  progress: 0.12,
  stack: ["Rust"]
}, {
  id: "p6",
  client: "Ferro",
  name: "Shader budget rescue",
  stage: "Blocked",
  tone: "danger",
  lead: "PT",
  due: "Overdue",
  progress: 0.55,
  stack: ["WebGL"]
}];
function Avatar({
  initials,
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-pill)",
      background: "var(--dab-yellow-200)",
      border: "var(--border-hairline) solid var(--ink)",
      font: "var(--weight-bold) 11px var(--font-mono)",
      color: "var(--ink)"
    }
  }, initials);
}
function Meter({
  value
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 96,
      height: 6,
      background: "var(--n-100)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: `${value * 100}%`,
      height: "100%",
      background: value === 1 ? "var(--status-success-solid)" : "var(--dab-yellow-500)"
    }
  }));
}
function Row({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(p),
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr 1.2fr 1fr 90px 70px",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-card)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      cursor: "pointer",
      transition: "var(--transition-control)",
      boxShadow: "var(--shadow-soft-1)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-soft-2)";
      e.currentTarget.style.borderColor = "var(--n-200)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-soft-1)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, p.client), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-semibold) var(--text-md)/1.2 var(--font-sans)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      marginTop: 2
    }
  }, p.name)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    dot: p.stage === "Shipped" || p.stage === "Blocked"
  }, p.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, p.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s))), /*#__PURE__*/React.createElement(Meter, {
    value: p.progress
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: p.due === "Overdue" ? "var(--status-danger-fg)" : "var(--text-muted)"
    }
  }, p.due), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: p.lead
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: "var(--text-faint)"
    }
  })));
}
function Pipeline({
  onOpen,
  onShip
}) {
  const [tab, setTab] = React.useState("active");
  const [view, setView] = React.useState("List");
  const [mine, setMine] = React.useState(false);
  const list = PROJECTS.filter(p => tab === "active" ? p.stage !== "Shipped" : tab === "shipped" ? p.stage === "Shipped" : true).filter(p => mine ? p.lead === "AS" : true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) var(--space-10)",
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Studio pipeline"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tighter)",
      marginTop: "var(--space-2)"
    }
  }, "Six live engagements")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search projects",
    size: "sm",
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Filters"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders-horizontal",
    label: "Filters",
    variant: "outline",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "plus",
    onClick: onShip
  }, "New project"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)"
    }
  }, [["In build", "2", "brand"], ["In review", "1", "plain"], ["Blocked", "1", "plain"], ["Shipped this Q", "7", "ink"]].map(([l, n, v]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    variant: v === "brand" ? "brand" : v === "ink" ? "ink" : "plain",
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: v === "plain" ? "var(--text-muted)" : v === "ink" ? "var(--n-400)" : "var(--alpha-ink-64)"
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-black) var(--text-3xl)/var(--leading-flat) var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      marginTop: "var(--space-3)",
      color: v === "ink" ? "var(--dab-yellow-500)" : "var(--ink)"
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "var(--space-10)",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "active",
      label: "Active",
      count: 5
    }, {
      value: "shipped",
      label: "Shipped",
      count: 1
    }, {
      value: "all",
      label: "All",
      count: 6
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Only mine",
    checked: mine,
    onChange: e => setMine(e.target.checked)
  }), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ["List", "Board"],
    value: view,
    onChange: setView
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginTop: "var(--space-5)"
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Row, {
    key: p.id,
    p: p,
    onOpen: onOpen
  })), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    style: {
      alignItems: "center",
      textAlign: "center",
      padding: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)"
    }
  }, "Nothing here yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, "Change the filter, or start a project.")) : null));
}
Object.assign(window, {
  Pipeline,
  PROJECTS,
  Avatar,
  Meter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-ops/Pipeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-ops/ProjectDetail.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Button,
  IconButton,
  Icon,
  Tabs,
  Checkbox,
  Tooltip
} = window.DabdabDesignSystem_57775b;
const TASKS = [{
  t: "Queue the settlement write path",
  done: true,
  who: "AS"
}, {
  t: "Read model for order history",
  done: true,
  who: "SM"
}, {
  t: "Load test at 8× peak",
  done: false,
  who: "AS"
}, {
  t: "Runbook handover session",
  done: false,
  who: "RB"
}];
const ACTIVITY = [["git-commit-horizontal", "Merged", "queue/settlement-worker", "18m"], ["message-square", "Northwind Pay", "“Can we pull the load test forward?”", "2h"], ["check-circle", "Read model shipped to staging", "p95 down to 910ms", "yesterday"], ["alert-triangle", "Sandbox timeout during test run", "retried, passed", "2d"]];
function ProjectDetail({
  onBack,
  onShip
}) {
  const [tab, setTab] = React.useState("brief");
  const [tasks, setTasks] = React.useState(TASKS);
  const toggle = i => setTasks(ts => ts.map((x, j) => j === i ? {
    ...x,
    done: !x.done
  } : x));
  const Avatar = window.Avatar;
  const Meter = window.Meter;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) var(--space-10)",
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "Pipeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Northwind Pay \xB7 Sprint \xB7 Week 5 of 6"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tighter)",
      marginTop: "var(--space-2)"
    }
  }, "Checkout rebuild"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "In build"), ["Node", "Redis", "Postgres"].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Duplicate"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Duplicate",
    variant: "outline"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Archive"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "archive",
    label: "Archive",
    variant: "outline"
  })), /*#__PURE__*/React.createElement(Button, {
    iconRight: "rocket",
    onClick: onShip
  }, "Ship build"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "8fr 4fr",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "brief",
      label: "Brief"
    }, {
      value: "tasks",
      label: "Tasks",
      count: `${tasks.filter(t => !t.done).length} open`
    }, {
      value: "activity",
      label: "Activity"
    }],
    value: tab,
    onChange: setTab
  }), tab === "brief" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "The bottleneck",
    title: "Checkout p95 sits at 3.4 seconds"
  }, "Every order fans out into eleven synchronous calls. One of them talks to a payments sandbox that has never been load-tested. Front end stays as-is."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-4)"
    }
  }, [["840ms", "current p95"], ["8×", "peak load tested"], ["0", "downtime windows"]].map(([n, l], i) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    variant: i === 0 ? "brand" : "plain",
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-black) var(--text-2xl)/1 var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: i === 0 ? "var(--alpha-ink-64)" : "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, l))))) : tab === "tasks" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      marginTop: "var(--space-6)"
    }
  }, tasks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-card)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-soft-1)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: t.done,
    onChange: () => toggle(i),
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: t.done ? "line-through" : "none",
        color: t.done ? "var(--text-faint)" : "var(--text-heading)"
      }
    }, t.t)
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: t.who,
    size: 24
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      marginTop: "var(--space-6)"
    }
  }, ACTIVITY.map(([ic, who, what, when], i) => /*#__PURE__*/React.createElement("div", {
    key: who + i,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      borderBottom: "var(--border-hairline) solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    style: {
      color: "var(--text-muted)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-semibold) var(--text-base)/1.3 var(--font-sans)",
      color: "var(--text-heading)"
    }
  }, who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, what)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: "var(--text-faint)"
    }
  }, when))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sticker",
    eyebrow: "Progress",
    title: "72% of sprint scope"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    value: 0.72
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)",
      marginTop: "var(--space-4)"
    }
  }, "Due 12 Aug \xB7 6 working days left")), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Squad"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, [["AS", "Aayush S.", "Lead engineer"], ["SM", "Sunita M.", "Backend"], ["RB", "Riya B.", "Product design"]].map(([ini, n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: ini
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, r)))))), /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    eyebrow: "Next milestone",
    title: "Load test at 8\xD7 peak"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--n-300)",
      marginTop: "var(--space-3)"
    }
  }, "Thursday, 10:00 GMT+5:45")))));
}
Object.assign(window, {
  ProjectDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-ops/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-ops/Settings.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Select,
  Switch,
  Checkbox,
  Button,
  Tabs,
  Badge,
  Toast
} = window.DabdabDesignSystem_57775b;
function Settings() {
  const [tab, setTab] = React.useState("studio");
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) var(--space-10)",
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Workspace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tighter)",
      marginTop: "var(--space-2)"
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "studio",
      label: "Studio"
    }, {
      value: "notify",
      label: "Notifications"
    }, {
      value: "billing",
      label: "Billing"
    }],
    value: tab,
    onChange: setTab
  })), tab === "studio" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Identity",
    title: "Studio details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Studio name",
    htmlFor: "sn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "sn",
    defaultValue: "dabdab"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Timezone",
    htmlFor: "tz"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "tz",
    options: ["Asia/Kathmandu (GMT+5:45)", "Europe/London", "America/New_York"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Reply target",
    hint: "Shown on the public contact form.",
    htmlFor: "rt"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "rt",
    options: ["Within one working day", "Within two working days", "Same day"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Public email",
    htmlFor: "pe"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pe",
    icon: "mail",
    defaultValue: "hello@dabdab.studio"
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Pipeline",
    title: "Defaults"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Sprint slots visible on the site",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-archive shipped projects after 90 days"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Require a measured bottleneck before a project leaves Scoping",
    description: "Blocks the stage change until a metric is filled in",
    defaultChecked: true
  })))) : tab === "notify" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Email",
    title: "What reaches your inbox"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "New brief submitted",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Project blocked",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Daily digest"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    eyebrow: "Quiet hours",
    title: "18:00 \u2192 09:00 GMT+5:45"
  }, "Nothing but blocked-project alerts gets through.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sticker",
    eyebrow: "Plan",
    title: "Studio \xB7 12 seats",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Active"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      style: {
        marginLeft: "auto"
      }
    }, "Change plan"))
  }, "Billed annually. Next invoice 01 Sep 2026."), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Payment",
    title: "Card on file"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      marginTop: "var(--space-3)"
    }
  }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4402 \xB7 exp 09/29"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSaved(true)
  }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Discard")), saved ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-6)",
      bottom: "var(--space-6)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Saved",
    message: "Workspace settings updated.",
    onDismiss: () => setSaved(false)
  })) : null);
}
Object.assign(window, {
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-ops/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/CaseStudy.jsx
try { (() => {
const {
  Button,
  Card,
  PatternPanel,
  Tag,
  Badge,
  Icon
} = window.DabdabDesignSystem_57775b;
function CaseStudy({
  onBack
}) {
  const wrap = window.siteWrap;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(PatternPanel, {
    tone: "brand",
    tile: 520,
    squared: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "var(--space-16) var(--space-8) var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow",
    style: {
      color: "var(--alpha-ink-64)",
      marginTop: "var(--space-8)"
    }
  }, "Fintech \xB7 2026 \xB7 Six weeks"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-black) var(--text-6xl)/var(--leading-flat) var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      margin: "var(--space-4) 0 0",
      maxWidth: "18ch"
    }
  }, "Cut checkout latency 4\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, ["Node", "Postgres", "Redis", "Load testing"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "var(--space-16) var(--space-8) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)"
    }
  }, [["4×", "faster p95 checkout"], ["840ms", "down from 3.4s"], ["6 wks", "start to shipped"], ["0", "downtime windows"]].map(([n, l], i) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    variant: i === 0 ? "brand" : "plain"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-black) var(--text-4xl)/var(--leading-flat) var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--text-heading)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: i === 0 ? "var(--alpha-ink-64)" : "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "4fr 8fr",
      gap: "var(--space-12)",
      marginTop: "var(--space-20)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "The bottleneck"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    dot: true
  }, "Before: 3.4s p95"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "After: 840ms p95"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      maxWidth: "62ch"
    }
  }, "Checkout was fine at launch and unusable at scale. Every order fanned out into eleven synchronous calls, and one of them talked to a payments sandbox that had never been load-tested."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "64ch"
    }
  }, "We rebuilt the write path around a queue, moved settlement off the request, and put a read model in front of the order history. Nothing was rewritten that didn't need to be \u2014 the front end shipped unchanged."), /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    eyebrow: "Client, week six"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) var(--text-xl)/var(--leading-snug) var(--font-display)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--paper)"
    }
  }, "\u201CThey found the jam in four days. We'd been staring at it for a year.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--n-300)",
      marginTop: "var(--space-4)"
    }
  }, "VP Engineering")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "64ch"
    }
  }, "Six weeks, one migration, no downtime window. The team kept the runbook; we kept the load tests in their repo."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-20)",
      borderTop: "var(--border-thick) solid var(--ink)",
      paddingTop: "var(--space-8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Next case"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, "A configurator that renders on a laptop")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 32,
    style: {
      color: "var(--ink)"
    }
  }))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Contact.jsx
try { (() => {
const {
  Button,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Toast,
  Icon,
  Badge
} = window.DabdabDesignSystem_57775b;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [engagement, setEngagement] = React.useState("sprint");
  const [email, setEmail] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const bad = touched && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const wrap = window.siteWrap;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "var(--space-16) var(--space-8) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Start a project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-3)",
      maxWidth: "20ch"
    }
  }, "Tell us where it's jammed"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      maxWidth: "52ch",
      marginTop: "var(--space-5)"
    }
  }, "One form, no discovery call to book a discovery call. We reply within a day, in your timezone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      marginTop: "var(--space-10)",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    htmlFor: "n",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Aayush Shrestha"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "e",
    required: true,
    error: bad ? "That email doesn't look right." : undefined,
    hint: "We reply within a day."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    icon: "mail",
    placeholder: "you@company.com",
    invalid: bad,
    value: email,
    onChange: ev => setEmail(ev.target.value),
    onBlur: () => setTouched(true)
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Budget",
    htmlFor: "b"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "b",
    placeholder: "Pick a range",
    options: ["Under $10k", "$10–50k", "$50–150k", "$150k+"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "How do you want to work?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "eng",
    label: "Sprint",
    description: "2\u20136 weeks, fixed scope, one bottleneck",
    checked: engagement === "sprint",
    onChange: () => setEngagement("sprint")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "eng",
    label: "Partner",
    description: "Ongoing, monthly, we sit in your standups",
    checked: engagement === "partner",
    onChange: () => setEngagement("partner")
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What's the bottleneck?",
    htmlFor: "m"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "m",
    rows: 4,
    placeholder: "The checkout takes 3 seconds and nobody knows why."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add a WebGL scope",
    description: "Adds roughly two weeks"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-up-right",
    onClick: () => setSent(true)
  }, "Send it"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, "or email hello@dabdab.studio")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sticker",
    eyebrow: "Response time",
    title: "Within one working day"
  }, "Kathmandu is GMT+5:45 \u2014 we overlap with Europe all morning and the US East Coast all evening."), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    eyebrow: "Currently",
    title: "Two sprint slots open"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink",
    dot: true
  }, "August"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "September"))), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    eyebrow: "Studio",
    title: "Where to find us"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, [["map-pin", "Jhamsikhel, Lalitpur, Nepal"], ["mail", "hello@dabdab.studio"], ["github", "github.com/dabdab"]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    style: {
      color: "var(--text-muted)"
    }
  }), t)))))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-6)",
      bottom: "var(--space-6)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Sent",
    message: "We'll reply within a working day.",
    onDismiss: () => setSent(false)
  })) : null);
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Home.jsx
try { (() => {
const {
  Button,
  Card,
  PatternPanel,
  Tag,
  Badge,
  Icon,
  Logo
} = window.DabdabDesignSystem_57775b;
const MARK = "var(--logo-mark)";
const siteWrap = {
  maxWidth: 1160,
  margin: "0 auto",
  padding: "0 var(--space-8)"
};
function MarkBlock({
  h = 190,
  tone = "ink"
}) {
  return /*#__PURE__*/React.createElement(PatternPanel, {
    tone: tone,
    tile: 210,
    squared: true,
    style: {
      height: h,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      display: "block",
      background: tone === "ink" ? "var(--dab-yellow-500)" : "var(--ink)",
      WebkitMaskImage: MARK,
      maskImage: MARK,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat"
    }
  }));
}
function Hero({
  onWork
}) {
  return /*#__PURE__*/React.createElement(PatternPanel, {
    tone: "brand",
    tile: 560,
    squared: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...siteWrap,
      padding: "var(--space-24) var(--space-8) var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow",
    style: {
      color: "var(--alpha-ink-64)"
    }
  }, "Design & technology studio \xB7 Kathmandu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-black) var(--text-7xl)/var(--leading-flat) var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      margin: "var(--space-5) 0 0",
      maxWidth: 15 + "ch"
    }
  }, "One dab, exactly where it hurts"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      maxWidth: "52ch",
      marginTop: "var(--space-6)",
      color: "var(--ink)"
    }
  }, "We build the parts that are hard \u2014 the backend that buckles at scale, the WebGL scene that has to run on a laptop, the interface nobody wants to redesign again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    iconRight: "arrow-up-right"
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onWork
  }, "See the work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-12)",
      flexWrap: "wrap"
    }
  }, ["WebGL", "Node", "Postgres", "React", "Figma", "Rust"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))));
}
const CAPS = [{
  icon: "database",
  title: "Backend architecture",
  body: "Queues, schemas and pipelines that hold at 100× the traffic you have today."
}, {
  icon: "box",
  title: "WebGL & real-time",
  body: "Proprietary 3D and shader work, budgeted to run on the hardware your users actually own."
}, {
  icon: "layout",
  title: "Product design",
  body: "High-fidelity UI in days, not quarters — shipped as code, not as a slide."
}];
const WORK = [{
  eyebrow: "Fintech · 2026",
  title: "Cut checkout latency 4×",
  body: "A bottlenecked Node pipeline, rebuilt in six weeks.",
  tone: "ink"
}, {
  eyebrow: "Retail · 2025",
  title: "A configurator that renders on a laptop",
  body: "Custom WebGL, 60fps on integrated graphics.",
  tone: "brand"
}, {
  eyebrow: "Logistics · 2025",
  title: "One dashboard for 40 warehouses",
  body: "Replaced nine spreadsheets and a nightly export.",
  tone: "ink"
}, {
  eyebrow: "Health · 2024",
  title: "Onboarding drop-off down 38%",
  body: "Same product, four fewer steps.",
  tone: "brand"
}];
function Home({
  onOpenCase
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onWork: onOpenCase
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...siteWrap,
      padding: "var(--space-24) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-3)",
      maxWidth: "22ch"
    }
  }, "Not a deliverable. An operational partner."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)",
      marginTop: "var(--space-10)"
    }
  }, CAPS.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    variant: "sticker",
    title: c.title
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 26,
    style: {
      marginBottom: "var(--space-4)",
      color: "var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("div", null, c.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...siteWrap,
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, "Four bottlenecks, gone")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "arrow-right"
  }, "All 24 projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: "var(--space-5)",
      marginTop: "var(--space-8)"
    }
  }, WORK.map((w, i) => /*#__PURE__*/React.createElement(Card, {
    key: w.title,
    variant: "sticker",
    interactive: true,
    onClick: onOpenCase,
    eyebrow: w.eyebrow,
    title: w.title,
    media: /*#__PURE__*/React.createElement(MarkBlock, {
      h: i % 3 === 0 ? 230 : 190,
      tone: w.tone
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: i === 0 ? "success" : "neutral",
      dot: i === 0
    }, i === 0 ? "Shipped" : "Case study"), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16,
      style: {
        marginLeft: "auto"
      }
    })),
    style: {
      gridColumn: i % 3 === 0 ? "span 1" : "span 1"
    }
  }, w.body)))), /*#__PURE__*/React.createElement(PatternPanel, {
    tone: "ink",
    tile: 480,
    squared: true,
    className: "dab-on-ink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...siteWrap,
      padding: "var(--space-20) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-8)"
    }
  }, [["6 wks", "median time to shipped"], ["11", "countries served"], ["4×", "fastest measured speed-up"], ["0", "handover documents"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-black) var(--text-5xl)/var(--leading-flat) var(--font-display)",
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--dab-yellow-500)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--alpha-paper-72)",
      marginTop: "var(--space-3)"
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...siteWrap,
      padding: "var(--space-24) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "4fr 8fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow"
  }, "The studio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, "Functionally beautiful.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      maxWidth: "60ch"
    }
  }, "Dabdab was founded on the idea that deep technical architecture and intuitive product design are the same job. We sit inside your operation, find the exact place it's jammed, and fix that \u2014 then make it feel premium on the way out."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-up-right"
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: "mail"
  }, "Say hello"))))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "dab-on-ink",
    style: {
      background: "var(--ink)",
      padding: "var(--space-16) 0 var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...siteWrap,
      display: "flex",
      gap: "var(--space-12)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    tone: "paper"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      maxWidth: "34ch",
      color: "var(--alpha-paper-72)",
      font: "var(--type-body)"
    }
  }, "Kathmandu, Nepal \xB7 working GMT+5:45, shipping worldwide.")), [["Studio", ["Work", "About", "Journal", "Careers"]], ["Contact", ["hello@dabdab.studio", "+977 1 000 0000", "LinkedIn", "GitHub"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dab-eyebrow",
    style: {
      color: "var(--n-400)"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: "var(--paper)",
      textDecoration: "none",
      font: "var(--type-body)"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...siteWrap,
      marginTop: "var(--space-12)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--n-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 dabdab"), /*#__PURE__*/React.createElement("span", null, "Functionally beautiful")));
}
Object.assign(window, {
  Home,
  SiteFooter,
  MarkBlock,
  siteWrap,
  MARK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.PatternPanel = __ds_scope.PatternPanel;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
