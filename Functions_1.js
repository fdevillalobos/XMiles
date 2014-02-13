function load(t, e) {
    $(function () {
        var n = $("body"),
            i = n.data("controller"),
            r = n.data("action");
        if ("string" == typeof t) {
            var o = t.split("#");
            if (o[0] != i || o[1] != r) return;
            e(i, r)
        } else if ("undefined" != typeof t.controllers)
            for (var a in t.controllers) {
                var s = t.controllers[a];
                if (a == i)
                    if (0 == s.length) e(i, r);
                    else
                        for (var u = 0, l = s.length; l > u; ++u)
                            if (s[u] == r) {
                                e(i, r);
                                break
                            }
            } else {
                if (t.controller != i) return;
                ("undefined" == typeof t.action || t.action == r) && e(i, r)
            }
    })
}! function (t, e) {
    function n(t) {
        var e = t.length,
            n = ce.type(t);
        return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        var e = _e[t] = {};
        return ce.each(t.match(de) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function r(t, n, i, r) {
        if (ce.acceptData(t)) {
            var o, a, s = ce.expando,
                u = t.nodeType,
                l = u ? ce.cache : t,
                c = u ? t[s] : t[s] && s;
            if (c && l[c] && (r || l[c].data) || i !== e || "string" != typeof n) return c || (c = u ? t[s] = ee.pop() || ce.guid++ : s), l[c] || (l[c] = u ? {} : {
                toJSON: ce.noop
            }), ("object" == typeof n || "function" == typeof n) && (r ? l[c] = ce.extend(l[c], n) : l[c].data = ce.extend(l[c].data, n)), a = l[c], r || (a.data || (a.data = {}), a = a.data), i !== e && (a[ce.camelCase(n)] = i), "string" == typeof n ? (o = a[n], null == o && (o = a[ce.camelCase(n)])) : o = a, o
        }
    }

    function o(t, e, n) {
        if (ce.acceptData(t)) {
            var i, r, o = t.nodeType,
                a = o ? ce.cache : t,
                u = o ? t[ce.expando] : ce.expando;
            if (a[u]) {
                if (e && (i = n ? a[u] : a[u].data)) {
                    ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !s(i) : !ce.isEmptyObject(i)) return
                }(n || (delete a[u].data, s(a[u]))) && (o ? ce.cleanData([t], !0) : ce.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
            }
        }
    }

    function a(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var r = "data-" + n.replace(Se, "-$1").toLowerCase();
            if (i = t.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : De.test(i) ? ce.parseJSON(i) : i
                } catch (o) {}
                ce.data(t, n, i)
            } else i = e
        }
        return i
    }

    function s(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c() {
        try {
            return K.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, n) {
        if (ce.isFunction(e)) return ce.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ce.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (qe.test(e)) return ce.filter(e, t, n);
            e = ce.filter(e, t)
        }
        return ce.grep(t, function (t) {
            return ce.inArray(t, e) >= 0 !== n
        })
    }

    function h(t) {
        var e = ze.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function f(t, e) {
        return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function m(t) {
        return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
    }

    function g(t) {
        var e = on.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
    }

    function y(t, e) {
        if (1 === e.nodeType && ce.hasData(t)) {
            var n, i, r, o = ce._data(t),
                a = ce._data(e, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) ce.event.add(e, n, s[n][i])
            }
            a.data && (a.data = ce.extend({}, a.data))
        }
    }

    function b(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                r = ce._data(e);
                for (i in r.events) ce.removeEvent(e, i, r.handle);
                e.removeAttribute(ce.expando)
            }
            "script" === n && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function w(t, n) {
        var i, r, o = 0,
            a = typeof t.getElementsByTagName !== V ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== V ? t.querySelectorAll(n || "*") : e;
        if (!a)
            for (a = [], i = t.childNodes || t; null != (r = i[o]); o++)!n || ce.nodeName(r, n) ? a.push(r) : ce.merge(a, w(r, n));
        return n === e || n && ce.nodeName(t, n) ? ce.merge([t], a) : a
    }

    function k(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }

    function x(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = _n.length; r--;)
            if (e = _n[r] + n, e in t) return e;
        return i
    }

    function T(t, e) {
        return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
    }

    function C(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (o[a] = ce._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[a] = ce._data(i, "olddisplay", j(i.nodeName)))) : o[a] || (r = T(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
        for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function _(t, e, n) {
        var i = yn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function D(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ce.css(t, n + Cn[o], !0, r)), i ? ("content" === n && (a -= ce.css(t, "padding" + Cn[o], !0, r)), "margin" !== n && (a -= ce.css(t, "border" + Cn[o] + "Width", !0, r))) : (a += ce.css(t, "padding" + Cn[o], !0, r), "padding" !== n && (a += ce.css(t, "border" + Cn[o] + "Width", !0, r)));
        return a
    }

    function S(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = pn(t),
            a = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = dn(t, e, o), (0 > r || null == r) && (r = t.style[e]), bn.test(r)) return r;
            i = a && (ce.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + D(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }

    function j(t) {
        var e = K,
            n = kn[t];
        return n || (n = E(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = E(t, e), cn.detach()), kn[t] = n), n
    }

    function E(t, e) {
        var n = ce(e.createElement(t)).appendTo(e.body),
            i = ce.css(n[0], "display");
        return n.remove(), i
    }

    function N(t, e, n, i) {
        var r;
        if (ce.isArray(e)) ce.each(e, function (e, r) {
            n || Sn.test(t) ? i(t, r) : N(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ce.type(e)) i(t, e);
        else
            for (r in e) N(t + "[" + r + "]", e[r], n, i)
    }

    function M(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(de) || [];
            if (ce.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function O(t, e, n, i) {
        function r(s) {
            var u;
            return o[s] = !0, ce.each(t[s] || [], function (t, s) {
                var l = s(e, n, i);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {}, a = t === Wn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function $(t, n) {
        var i, r, o = ce.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
        return i && ce.extend(!0, t, i), t
    }

    function A(t, n, i) {
        for (var r, o, a, s, u = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in i) a = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                r || (r = s)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
    }

    function H(t, e, n, i) {
        var r, o, a, s, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (r in l)
                    if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function F() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function L() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function R() {
        return setTimeout(function () {
            Zn = e
        }), Zn = ce.now()
    }

    function I(t, e, n) {
        for (var i, r = (oi[e] || []).concat(oi["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function P(t, e, n) {
        var i, r, o = 0,
            a = ri.length,
            s = ce.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (r) return !1;
                for (var e = Zn || R(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
            }, l = s.promise({
                elem: t,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Zn || R(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ce.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) l.tweens[n].run(1);
                    return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (B(c, l.opts.specialEasing); a > o; o++)
            if (i = ri[o].call(l, t, c, l.opts)) return i;
        return ce.map(c, I, l), ce.isFunction(l.opts.start) && l.opts.start.call(t, l), ce.fx.timer(ce.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (i = ce.camelCase(n), r = e[i], o = t[n], ce.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = ce.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function q(t, e, n) {
        var i, r, o, a, s, u, l = this,
            c = {}, p = t.style,
            d = t.nodeType && T(t),
            h = ce._data(t, "fxshow");
        n.queue || (s = ce._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, l.always(function () {
            l.always(function () {
                s.unqueued--, ce.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== j(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ce.support.shrinkWrapBlocks || l.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], ei.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) continue;
                c[i] = h && h[i] || ce.style(t, i)
            }
        if (!ce.isEmptyObject(c)) {
            h ? "hidden" in h && (d = h.hidden) : h = ce._data(t, "fxshow", {}), o && (h.hidden = !d), d ? ce(t).show() : l.done(function () {
                ce(t).hide()
            }), l.done(function () {
                var e;
                ce._removeData(t, "fxshow");
                for (e in c) ce.style(t, e, c[e])
            });
            for (i in c) a = I(d ? h[i] : 0, i, l), i in h || (h[i] = a.start, d && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function U(t, e, n, i, r) {
        return new U.prototype.init(t, e, n, i, r)
    }

    function W(t, e) {
        var n, i = {
                height: t
            }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Cn[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function G(t) {
        return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var z, Y, V = typeof e,
        X = t.location,
        K = t.document,
        Q = K.documentElement,
        J = t.jQuery,
        Z = t.$,
        te = {}, ee = [],
        ne = "1.10.2",
        ie = ee.concat,
        re = ee.push,
        oe = ee.slice,
        ae = ee.indexOf,
        se = te.toString,
        ue = te.hasOwnProperty,
        le = ne.trim,
        ce = function (t, e) {
            return new ce.fn.init(t, e, Y)
        }, pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = /\S+/g,
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^[\],:{}\s]*$/,
        ve = /(?:^|:|,)(?:\s*\[)+/g,
        ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        we = /^-ms-/,
        ke = /-([\da-z])/gi,
        xe = function (t, e) {
            return e.toUpperCase()
        }, Te = function (t) {
            (K.addEventListener || "load" === t.type || "complete" === K.readyState) && (Ce(), ce.ready())
        }, Ce = function () {
            K.addEventListener ? (K.removeEventListener("DOMContentLoaded", Te, !1), t.removeEventListener("load", Te, !1)) : (K.detachEvent("onreadystatechange", Te), t.detachEvent("onload", Te))
        };
    ce.fn = ce.prototype = {
        jquery: ne,
        constructor: ce,
        init: function (t, n, i) {
            var r, o;
            if (!t) return this;
            if ("string" == typeof t) {
                if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (r[1]) {
                    if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), me.test(r[1]) && ce.isPlainObject(n))
                        for (r in n) ce.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = K.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = K, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return oe.call(this)
        },
        get: function (t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function (t) {
            var e = ce.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return ce.each(this, t, e)
        },
        ready: function (t) {
            return ce.ready.promise().done(t), this
        },
        slice: function () {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        map: function (t) {
            return this.pushStack(ce.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: re,
        sort: [].sort,
        splice: [].splice
    }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function () {
        var t, n, i, r, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (r in o) t = s[r], i = o[r], s !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, a = t && ce.isArray(t) ? t : []) : a = t && ce.isPlainObject(t) ? t : {}, s[r] = ce.extend(c, a, i)) : i !== e && (s[r] = i));
        return s
    }, ce.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        noConflict: function (e) {
            return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = J), ce
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? ce.readyWait++ : ce.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--ce.readyWait : !ce.isReady) {
                if (!K.body) return setTimeout(ce.ready);
                ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (z.resolveWith(K, [ce]), ce.fn.trigger && ce(K).trigger("ready").off("ready"))
            }
        },
        isFunction: function (t) {
            return "function" === ce.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === ce.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function (t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[se.call(t)] || "object" : typeof t
        },
        isPlainObject: function (t) {
            var n;
            if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t)) return !1;
            try {
                if (t.constructor && !ue.call(t, "constructor") && !ue.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ce.support.ownLast)
                for (n in t) return ue.call(t, n);
            for (n in t);
            return n === e || ue.call(t, n)
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function (t) {
            throw new Error(t)
        },
        parseHTML: function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || K;
            var i = me.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, r), r && ce(r).remove(), ce.merge([], i.childNodes))
        },
        parseJSON: function (e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ce.trim(e), e && ge.test(e.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + e)() : (ce.error("Invalid JSON: " + e), void 0)
        },
        parseXML: function (n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (o) {
                i = e
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
        },
        noop: function () {},
        globalEval: function (e) {
            e && ce.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(we, "ms-").replace(ke, xe)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t);
            if (i) {
                if (s)
                    for (; a > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: le && !le.call("ï»¿Â ") ? function (t) {
            return null == t ? "" : le.call(t)
        } : function (t) {
            return null == t ? "" : (t + "").replace(he, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : re.call(i, t)), i
        },
        inArray: function (t, e, n) {
            var i;
            if (e) {
                if (ae) return ae.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, n) {
            var i = n.length,
                r = t.length,
                o = 0;
            if ("number" == typeof i)
                for (; i > o; o++) t[r++] = n[o];
            else
                for (; n[o] !== e;) t[r++] = n[o++];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            var i, r = [],
                o = 0,
                a = t.length;
            for (n = !! n; a > o; o++) i = !! e(t[o], o), n !== i && r.push(t[o]);
            return r
        },
        map: function (t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t),
                u = [];
            if (s)
                for (; a > o; o++) r = e(t[o], o, i), null != r && (u[u.length] = r);
            else
                for (o in t) r = e(t[o], o, i), null != r && (u[u.length] = r);
            return ie.apply([], u)
        },
        guid: 1,
        proxy: function (t, n) {
            var i, r, o;
            return "string" == typeof n && (o = t[n], n = t, t = o), ce.isFunction(t) ? (i = oe.call(arguments, 2), r = function () {
                return t.apply(n || this, i.concat(oe.call(arguments)))
            }, r.guid = t.guid = t.guid || ce.guid++, r) : e
        },
        access: function (t, n, i, r, o, a, s) {
            var u = 0,
                l = t.length,
                c = null == i;
            if ("object" === ce.type(i)) {
                o = !0;
                for (u in i) ce.access(t, n, u, i[u], !0, a, s)
            } else if (r !== e && (o = !0, ce.isFunction(r) || (s = !0), c && (s ? (n.call(t, r), n = null) : (c = n, n = function (t, e, n) {
                return c.call(ce(t), n)
            })), n))
                for (; l > u; u++) n(t[u], i, s ? r : r.call(t[u], u, n(t[u], i)));
            return o ? t : c ? n.call(t) : l ? n(t[0], i) : a
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (t, e, n, i) {
            var r, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = a[o];
            return r
        }
    }), ce.ready.promise = function (e) {
        if (!z)
            if (z = ce.Deferred(), "complete" === K.readyState) setTimeout(ce.ready);
            else if (K.addEventListener) K.addEventListener("DOMContentLoaded", Te, !1), t.addEventListener("load", Te, !1);
        else {
            K.attachEvent("onreadystatechange", Te), t.attachEvent("onload", Te);
            var n = !1;
            try {
                n = null == t.frameElement && K.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!ce.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    Ce(), ce.ready()
                }
            }()
        }
        return z.promise(e)
    }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    }), Y = ce(K),
    function (t, e) {
        function n(t, e, n, i) {
            var r, o, a, s, u, l, c, p, f, m;
            if ((e ? e.ownerDocument || e : P) !== O && M(e), e = e || O, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (s = e.nodeType) && 9 !== s) return [];
            if (A && !i) {
                if (r = be.exec(t))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && R(e, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return te.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = r[3]) && T.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(a)), n
                    }
                if (T.qsa && (!H || !H.test(t))) {
                    if (p = c = I, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (l = d(t), (c = e.getAttribute("id")) ? p = c.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + h(l[u]);
                        f = he.test(t) && e.parentNode || e, m = l.join(",")
                    }
                    if (m) try {
                        return te.apply(n, f.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(le, "$1"), e, n, i)
        }

        function i() {
            function t(n, i) {
                return e.push(n += " ") > _.cacheLength && delete t[e.shift()], t[n] = i
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[I] = !0, t
        }

        function o(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) _.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function u(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return r(function (e) {
                return e = +e, r(function (n, i) {
                    for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function p() {}

        function d(t, e) {
            var i, r, o, a, s, u, l, c = W[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (s = t, u = [], l = _.preFilter; s;) {
                (!i || (r = pe.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = de.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in _.filter)!(r = ve[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return e ? s.length : s ? n.error(t) : W(t, u).slice(0)
        }

        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = q++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function (e, n, a) {
                var s, u, l, c = B + " " + o;
                if (a) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r)
                            if (l = e[I] || (e[I] = {}), (u = l[i]) && u[0] === c) {
                                if ((s = u[1]) === !0 || s === C) return s === !0
                            } else if (u = l[i] = [c], u[1] = t(e, n, a) || C, u[1] === !0) return !0
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, e, n, i, r) {
            for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), l && e.push(s));
            return a
        }

        function v(t, e, n, i, o, a) {
            return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), r(function (r, a, s, u) {
                var l, c, p, d = [],
                    h = [],
                    f = a.length,
                    m = r || w(e || "*", s.nodeType ? [s] : s, []),
                    v = !t || !r && e ? m : g(m, d, t, s, u),
                    y = n ? o || (r ? t : f || i) ? [] : a : v;
                if (n && n(v, y, s, u), i)
                    for (l = g(y, h), i(l, [], s, u), c = l.length; c--;)(p = l[c]) && (y[h[c]] = !(v[h[c]] = p));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(p = y[c]) && l.push(v[c] = p);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(p = y[c]) && (l = o ? ne.call(r, p) : d[c]) > -1 && (r[l] = !(a[l] = p))
                    }
                } else y = g(y === a ? y.splice(f, y.length) : y), o ? o(null, a, y, u) : te.apply(a, y)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = f(function (t) {
                    return t === e
                }, a, !0), l = f(function (t) {
                    return ne.call(e, t) > -1
                }, a, !0), c = [
                    function (t, n, i) {
                        return !o && (i || n !== E) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i))
                    }
                ]; r > s; s++)
                if (n = _.relative[t[s].type]) c = [f(m(c), n)];
                else {
                    if (n = _.filter[t[s].type].apply(null, t[s].matches), n[I]) {
                        for (i = ++s; r > i && !_.relative[t[i].type]; i++);
                        return v(s > 1 && m(c), s > 1 && h(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function b(t, e) {
            var i = 0,
                o = e.length > 0,
                a = t.length > 0,
                s = function (r, s, u, l, c) {
                    var p, d, h, f = [],
                        m = 0,
                        v = "0",
                        y = r && [],
                        b = null != c,
                        w = E,
                        k = r || a && _.find.TAG("*", c && s.parentNode || s),
                        x = B += null == w ? 1 : Math.random() || .1;
                    for (b && (E = s !== O && s, C = i); null != (p = k[v]); v++) {
                        if (a && p) {
                            for (d = 0; h = t[d++];)
                                if (h(p, s, u)) {
                                    l.push(p);
                                    break
                                }
                            b && (B = x, C = ++i)
                        }
                        o && ((p = !h && p) && m--, r && y.push(p))
                    }
                    if (m += v, o && v !== m) {
                        for (d = 0; h = e[d++];) h(y, f, s, u);
                        if (r) {
                            if (m > 0)
                                for (; v--;) y[v] || f[v] || (f[v] = J.call(l));
                            f = g(f)
                        }
                        te.apply(l, f), b && !r && f.length > 0 && m + e.length > 1 && n.uniqueSort(l)
                    }
                    return b && (B = x, E = w), y
                };
            return o ? r(s) : s
        }

        function w(t, e, i) {
            for (var r = 0, o = e.length; o > r; r++) n(t, e[r], i);
            return i
        }

        function k(t, e, n, i) {
            var r, o, a, s, u, l = d(t);
            if (!i && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === e.nodeType && A && _.relative[o[1].type]) {
                    if (e = (_.find.ID(a.matches[0].replace(Te, Ce), e) || [])[0], !e) return n;
                    t = t.slice(o.shift().value.length)
                }
                for (r = ve.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                    if ((u = _.find[s]) && (i = u(a.matches[0].replace(Te, Ce), he.test(o[0].type) && e.parentNode || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t) return te.apply(n, i), n;
                        break
                    }
            }
            return j(t, l)(i, e, !A, n, he.test(t)), n
        }
        var x, T, C, _, D, S, j, E, N, M, O, $, A, H, F, L, R, I = "sizzle" + -new Date,
            P = t.document,
            B = 0,
            q = 0,
            U = i(),
            W = i(),
            G = i(),
            z = !1,
            Y = function (t, e) {
                return t === e ? (z = !0, 0) : 0
            }, V = typeof e,
            X = 1 << 31,
            K = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            Z = Q.push,
            te = Q.push,
            ee = Q.slice,
            ne = Q.indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ae = oe.replace("w", "w#"),
            se = "\\[" + re + "*(" + oe + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + re + "*\\]",
            ue = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            pe = new RegExp("^" + re + "*," + re + "*"),
            de = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            he = new RegExp(re + "*[+~]"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
            me = new RegExp(ue),
            ge = new RegExp("^" + ae + "$"),
            ve = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ue),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            }, ye = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /^(?:input|select|textarea|button)$/i,
            ke = /^h\d$/i,
            xe = /'|\\/g,
            Te = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Ce = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
            };
        try {
            te.apply(Q = ee.call(P.childNodes), P.childNodes), Q[P.childNodes.length].nodeType
        } catch (_e) {
            te = {
                apply: Q.length ? function (t, e) {
                    Z.apply(t, ee.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        S = n.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, T = n.support = {}, M = n.setDocument = function (t) {
            var e = t ? t.ownerDocument || t : P,
                n = e.defaultView;
            return e !== O && 9 === e.nodeType && e.documentElement ? (O = e, $ = e.documentElement, A = !S(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                M()
            }), T.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), T.getElementsByTagName = o(function (t) {
                return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
            }), T.getElementsByClassName = o(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), T.getById = o(function (t) {
                return $.appendChild(t).id = I, !e.getElementsByName || !e.getElementsByName(I).length
            }), T.getById ? (_.find.ID = function (t, e) {
                if (typeof e.getElementById !== V && A) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function (t) {
                var e = t.replace(Te, Ce);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function (t) {
                var e = t.replace(Te, Ce);
                return function (t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), _.find.TAG = T.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, _.find.CLASS = T.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== V && A ? e.getElementsByClassName(t) : void 0
            }, F = [], H = [], (T.qsa = ye.test(e.querySelectorAll)) && (o(function (t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || H.push("\\[" + re + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
            }), o(function (t) {
                var n = e.createElement("input");
                n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && H.push("[*^$]=" + re + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (T.matchesSelector = ye.test(L = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function (t) {
                T.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), F.push("!=", ue)
            }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), R = ye.test($.contains) || $.compareDocumentPosition ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = $.compareDocumentPosition ? function (t, n) {
                if (t === n) return z = !0, 0;
                var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                return i ? 1 & i || !T.sortDetached && n.compareDocumentPosition(t) === i ? t === e || R(P, t) ? -1 : n === e || R(P, n) ? 1 : N ? ne.call(N, t) - ne.call(N, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
            } : function (t, n) {
                var i, r = 0,
                    o = t.parentNode,
                    a = n.parentNode,
                    u = [t],
                    l = [n];
                if (t === n) return z = !0, 0;
                if (!o || !a) return t === e ? -1 : n === e ? 1 : o ? -1 : a ? 1 : N ? ne.call(N, t) - ne.call(N, n) : 0;
                if (o === a) return s(t, n);
                for (i = t; i = i.parentNode;) u.unshift(i);
                for (i = n; i = i.parentNode;) l.unshift(i);
                for (; u[r] === l[r];) r++;
                return r ? s(u[r], l[r]) : u[r] === P ? -1 : l[r] === P ? 1 : 0
            }, e) : O
        }, n.matches = function (t, e) {
            return n(t, null, null, e)
        }, n.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== O && M(t), e = e.replace(fe, "='$1']"), !(!T.matchesSelector || !A || F && F.test(e) || H && H.test(e))) try {
                var i = L.call(t, e);
                if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return n(e, O, null, [t]).length > 0
        }, n.contains = function (t, e) {
            return (t.ownerDocument || t) !== O && M(t), R(t, e)
        }, n.attr = function (t, n) {
            (t.ownerDocument || t) !== O && M(t);
            var i = _.attrHandle[n.toLowerCase()],
                r = i && K.call(_.attrHandle, n.toLowerCase()) ? i(t, n, !A) : e;
            return r === e ? T.attributes || !A ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
        }, n.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, n.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (z = !T.detectDuplicates, N = !T.sortStable && t.slice(0), t.sort(Y), z) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return t
        }, D = n.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += D(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i]; i++) n += D(e);
            return n
        }, _ = n.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ve,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(Te, Ce), t[3] = (t[4] || t[5] || "").replace(Te, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var n, i = !t[5] && t[2];
                    return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && me.test(i) && (n = d(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(Te, Ce).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && U(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, e, i) {
                    return function (r) {
                        var o = n.attr(r, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, u) {
                        var l, c, p, d, h, f, m = o !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = e; p = p[m];)
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[I] || (g[I] = {}), l = c[t] || [], h = l[0] === B && l[1], d = l[0] === B && l[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (d = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++d && p === e) {
                                        c[t] = [B, h, d];
                                        break
                                    }
                            } else if (y && (l = (e[I] || (e[I] = {}))[t]) && l[0] === B) d = l[1];
                            else
                                for (;
                                    (p = ++h && p && p[m] || (d = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[I] || (p[I] = {}))[t] = [B, d]), p !== e)););
                            return d -= r, d === i || 0 === d % i && d / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, e) {
                    var i, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                    return o[I] ? o(e) : o.length > 1 ? (i = [t, t, "", e], _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, n) {
                        for (var i, r = o(t, e), a = r.length; a--;) i = ne.call(t, r[a]), t[i] = !(n[i] = r[a])
                    }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [],
                        n = [],
                        i = j(t.replace(le, "$1"));
                    return i[I] ? r(function (t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, i(e, null, o, n), !n.pop()
                    }
                }),
                has: r(function (t) {
                    return function (e) {
                        return n(t, e).length > 0
                    }
                }),
                contains: r(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || D(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function (t) {
                    return ge.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Te, Ce).toLowerCase(),
                    function (e) {
                        var n;
                        do
                            if (n = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === $
                },
                focus: function (t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                    return !0
                },
                parent: function (t) {
                    return !_.pseudos.empty(t)
                },
                header: function (t) {
                    return ke.test(t.nodeName)
                },
                input: function (t) {
                    return we.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[x] = u(x);
        for (x in {
            submit: !0,
            reset: !0
        }) _.pseudos[x] = l(x);
        p.prototype = _.filters = _.pseudos, _.setFilters = new p, j = n.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = G[t + " "];
            if (!o) {
                for (e || (e = d(t)), n = e.length; n--;) o = y(e[n]), o[I] ? i.push(o) : r.push(o);
                o = G(t, b(r, i))
            }
            return o
        }, T.sortStable = I.split("").sort(Y).join("") === I, T.detectDuplicates = z, M(), T.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), T.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || a("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || a(ie, function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null
        }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
    }(t);
    var _e = {};
    ce.Callbacks = function (t) {
        t = "string" == typeof t ? _e[t] || i(t) : ce.extend({}, t);
        var n, r, o, a, s, u, l = [],
            c = !t.once && [],
            p = function (e) {
                for (r = t.memory && e, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
                    if (l[s].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (c ? c.length && p(c.shift()) : r ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var e = l.length;
                        ! function i(e) {
                            ce.each(e, function (e, n) {
                                var r = ce.type(n);
                                "function" === r ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), n ? a = l.length : r && (u = e, p(r))
                    }
                    return this
                },
                remove: function () {
                    return l && ce.each(arguments, function (t, e) {
                        for (var i;
                            (i = ce.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, s >= i && s--)
                    }), this
                },
                has: function (t) {
                    return t ? ce.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = c = r = e, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = e, r || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (t, e) {
                    return !l || o && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : p(e)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return d
    }, ce.extend({
        Deferred: function (t) {
            var e = [
                ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ce.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return ce.Deferred(function (n) {
                            ce.each(e, function (e, o) {
                                var a = o[0],
                                    s = ce.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ce.extend(t, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, ce.each(e, function (t, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function (t) {
            var e, n, i, r = 0,
                o = oe.call(arguments),
                a = o.length,
                s = 1 !== a || t && ce.isFunction(t.promise) ? a : 0,
                u = 1 === s ? t : ce.Deferred(),
                l = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? oe.call(arguments) : r, i === e ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --s;
            return s || u.resolveWith(i, o), u.promise()
        }
    }), ce.support = function (e) {
        var n, i, r, o, a, s, u, l, c, p = K.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], i = p.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
        o = K.createElement("select"), s = o.appendChild(K.createElement("option")), r = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== p.className, e.leadingWhitespace = 3 === p.firstChild.nodeType, e.tbody = !p.getElementsByTagName("tbody").length, e.htmlSerialize = !! p.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !! i.style.cssFloat, e.checkOn = !! r.value, e.optSelected = s.selected, e.enctype = !! K.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled;
        try {
            delete p.test
        } catch (d) {
            e.deleteExpando = !1
        }
        r = K.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = K.createDocumentFragment(), a.appendChild(r), e.appendChecked = r.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(u = "on" + c, "t"), e[c + "Bubbles"] = u in t || p.attributes[u].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (c in ce(e)) break;
        return e.ownLast = "0" !== c, ce(function () {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = K.getElementsByTagName("body")[0];
            a && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = p.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = l && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function () {
                e.boxSizing = 4 === p.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(p, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(p, null) || {
                width: "4px"
            }).width, i = p.appendChild(K.createElement("div")), i.style.cssText = p.style.cssText = o, i.style.marginRight = i.style.width = "0", p.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== V && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== p.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = r = i = null)
        }), n = o = a = s = i = r = null, e
    }({});
    var De = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Se = /([A-Z])/g;
    ce.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !! t && !s(t)
        },
        data: function (t, e, n) {
            return r(t, e, n)
        },
        removeData: function (t, e) {
            return o(t, e)
        },
        _data: function (t, e, n) {
            return r(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return o(t, e, !0)
        },
        acceptData: function (t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), ce.fn.extend({
        data: function (t, n) {
            var i, r, o = null,
                s = 0,
                u = this[0];
            if (t === e) {
                if (this.length && (o = ce.data(u), 1 === u.nodeType && !ce._data(u, "parsedAttrs"))) {
                    for (i = u.attributes; s < i.length; s++) r = i[s].name, 0 === r.indexOf("data-") && (r = ce.camelCase(r.slice(5)), a(u, r, o[r]));
                    ce._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                ce.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                ce.data(this, t, n)
            }) : u ? a(u, t, ce.data(u, t)) : null
        },
        removeData: function (t) {
            return this.each(function () {
                ce.removeData(this, t)
            })
        }
    }), ce.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ce._data(t, e), n && (!i || ce.isArray(n) ? i = ce._data(t, e, ce.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = ce.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = ce._queueHooks(t, e),
                a = function () {
                    ce.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return ce._data(t, n) || ce._data(t, n, {
                empty: ce.Callbacks("once memory").add(function () {
                    ce._removeData(t, e + "queue"), ce._removeData(t, n)
                })
            })
        }
    }), ce.fn.extend({
        queue: function (t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ce.queue(this[0], t) : n === e ? this : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ce.dequeue(this, t)
            })
        },
        delay: function (t, e) {
            return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, n) {
            var i, r = 1,
                o = ce.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --r || o.resolveWith(a, [a])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; s--;) i = ce._data(a[s], t + "queueHooks"), i && i.empty && (r++, i.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var je, Ee, Ne = /[\t\r\n\f]/g,
        Me = /\r/g,
        Oe = /^(?:input|select|textarea|button|object)$/i,
        $e = /^(?:a|area)$/i,
        Ae = /^(?:checked|selected)$/i,
        He = ce.support.getSetAttribute,
        Fe = ce.support.input;
    ce.fn.extend({
        attr: function (t, e) {
            return ce.access(this, ce.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ce.removeAttr(this, t)
            })
        },
        prop: function (t, e) {
            return ce.access(this, ce.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = ce.propFix[t] || t, this.each(function () {
                try {
                    this[t] = e, delete this[t]
                } catch (n) {}
            })
        },
        addClass: function (t) {
            var e, n, i, r, o, a = 0,
                s = this.length,
                u = "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function (e) {
                ce(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(de) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = ce.trim(i)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (ce.isFunction(t)) return this.each(function (e) {
                ce(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(de) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        n.className = t ? ce.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ce.isFunction(t) ? this.each(function (n) {
                ce(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n)
                    for (var e, i = 0, r = ce(this), o = t.match(de) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === V || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function (t) {
            var n, i, r, o = this[0]; {
                if (arguments.length) return r = ce.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = r ? t.call(this, n, ce(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
                });
                if (o) return i = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(Me, "") : null == n ? "" : n)
            }
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ce.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, u = 0 > r ? s : o ? r : 0; s > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ce(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = ce.makeArray(e), a = r.length; a--;) i = r[a], (i.selected = ce.inArray(ce(i).val(), o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        },
        attr: function (t, n, i) {
            var r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === V ? ce.prop(t, n, i) : (1 === a && ce.isXMLDoc(t) || (n = n.toLowerCase(), r = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ee : je)), i === e ? r && "get" in r && null !== (o = r.get(t, n)) ? o : (o = ce.find.attr(t, n), null == o ? e : o) : null !== i ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), void 0))
        },
        removeAttr: function (t, e) {
            var n, i, r = 0,
                o = e && e.match(de);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Fe && He || !Ae.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""), t.removeAttribute(He ? n : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, n, i) {
            var r, o, a, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ce.isXMLDoc(t), a && (n = ce.propFix[n] || n, o = ce.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ce.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Oe.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), Ee = {
        set: function (t, e, n) {
            return e === !1 ? ce.removeAttr(t, n) : Fe && He || !Ae.test(n) ? t.setAttribute(!He && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (t, n) {
        var i = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = Fe && He || !Ae.test(n) ? function (t, n, r) {
            var o = ce.expr.attrHandle[n],
                a = r ? e : (ce.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = o, a
        } : function (t, n, i) {
            return i ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Fe && He || (ce.attrHooks.value = {
        set: function (t, e, n) {
            return ce.nodeName(t, "input") ? (t.defaultValue = e, void 0) : je && je.set(t, e, n)
        }
    }), He || (je = {
        set: function (t, n, i) {
            var r = t.getAttributeNode(i);
            return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function (t, n, i) {
        var r;
        return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }, ce.valHooks.button = {
        get: function (t, n) {
            var i = t.getAttributeNode(n);
            return i && i.specified ? i.value : e
        },
        set: je.set
    }, ce.attrHooks.contenteditable = {
        set: function (t, e, n) {
            je.set(t, "" === e ? !1 : e, n)
        }
    }, ce.each(["width", "height"], function (t, e) {
        ce.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ce.support.hrefNormalized || ce.each(["href", "src"], function (t, e) {
        ce.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ce.support.style || (ce.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || e
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    }), ce.support.optSelected || (ce.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ce.propFix[this.toLowerCase()] = this
    }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function () {
        ce.valHooks[this] = {
            set: function (t, e) {
                return ce.isArray(e) ? t.checked = ce.inArray(ce(t).val(), e) >= 0 : void 0
            }
        }, ce.support.checkOn || (ce.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Le = /^(?:input|select|textarea)$/i,
        Re = /^key/,
        Ie = /^(?:mouse|contextmenu)|click/,
        Pe = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {
        global: {},
        add: function (t, n, i, r, o) {
            var a, s, u, l, c, p, d, h, f, m, g, v = ce._data(t);
            if (v) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = ce.guid++), (s = v.events) || (s = v.events = {}), (p = v.handle) || (p = v.handle = function (t) {
                    return typeof ce === V || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(p.elem, arguments)
                }, p.elem = t), n = (n || "").match(de) || [""], u = n.length; u--;) a = Be.exec(n[u]) || [], f = g = a[1], m = (a[2] || "").split(".").sort(), f && (c = ce.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ce.event.special[f] || {}, d = ce.extend({
                    type: f,
                    origType: g,
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ce.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, c.setup && c.setup.call(t, r, m, p) !== !1 || (t.addEventListener ? t.addEventListener(f, p, !1) : t.attachEvent && t.attachEvent("on" + f, p))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), ce.event.global[f] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, r) {
            var o, a, s, u, l, c, p, d, h, f, m, g = ce.hasData(t) && ce._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(de) || [""], l = e.length; l--;)
                    if (s = Be.exec(e[l]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (p = ce.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, p.remove && p.remove.call(t, a));
                        u && !d.length && (p.teardown && p.teardown.call(t, f, g.handle) !== !1 || ce.removeEvent(t, h, g.handle), delete c[h])
                    } else
                        for (h in c) ce.event.remove(t, h + e[l], n, i, !0);
                ce.isEmptyObject(c) && (delete g.handle, ce._removeData(t, "events"))
            }
        },
        trigger: function (n, i, r, o) {
            var a, s, u, l, c, p, d, h = [r || K],
                f = ue.call(n, "type") ? n.type : n,
                m = ue.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = p = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Pe.test(f + ce.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), s = f.indexOf(":") < 0 && "on" + f, n = n[ce.expando] ? n : new ce.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[f] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                if (!o && !c.noBubble && !ce.isWindow(r)) {
                    for (l = c.delegateType || f, Pe.test(l + f) || (u = u.parentNode); u; u = u.parentNode) h.push(u), p = u;
                    p === (r.ownerDocument || K) && h.push(p.defaultView || p.parentWindow || t)
                }
                for (d = 0;
                    (u = h[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? l : c.bindType || f, a = (ce._data(u, "events") || {})[n.type] && ce._data(u, "handle"), a && a.apply(u, i), a = s && u[s], a && ce.acceptData(u) && a.apply && a.apply(u, i) === !1 && n.preventDefault();
                if (n.type = f, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && ce.acceptData(r) && s && r[f] && !ce.isWindow(r)) {
                    p = r[s], p && (r[s] = null), ce.event.triggered = f;
                    try {
                        r[f]()
                    } catch (g) {}
                    ce.event.triggered = e, p && (r[s] = p)
                }
                return n.result
            }
        },
        dispatch: function (t) {
            t = ce.event.fix(t);
            var n, i, r, o, a, s = [],
                u = oe.call(arguments),
                l = (ce._data(this, "events") || {})[t.type] || [],
                c = ce.event.special[t.type] || {};
            if (u[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ce.event.handlers.call(this, t, l), n = 0;
                    (o = s[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, a = 0;
                        (r = o.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, n) {
            var i, r, o, a, s = [],
                u = n.delegateCount,
                l = t.target;
            if (u && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], a = 0; u > a; a++) r = n[a], i = r.selector + " ", o[i] === e && (o[i] = r.needsContext ? ce(i, this).index(l) >= 0 : ce.find(i, this, null, [l]).length), o[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (t) {
            if (t[ce.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ie.test(r) ? this.mouseHooks : Re.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ce.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || K), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, n) {
                var i, r, o, a = n.button,
                    s = n.fromElement;
                return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || K, o = r.documentElement, i = r.body, t.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement : s), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return ce.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var r = ce.extend(new ce.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ce.event.trigger(r, null, e) : ce.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ce.removeEvent = K.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === V && (t[i] = null), t.detachEvent(i, n))
    }, ce.Event = function (t, e) {
        return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? u : l) : this.type = t, e && ce.extend(this, e), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, void 0) : new ce.Event(t, e)
    }, ce.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        ce.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !ce.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ce.support.submitBubbles || (ce.event.special.submit = {
        setup: function () {
            return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function (t) {
                var n = t.target,
                    i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
                i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), ce._data(i, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), void 0)
        }
    }), ce.support.changeBubbles || (ce.event.special.change = {
        setup: function () {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ce.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
            })), !1) : (ce.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Le.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                }), ce._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ce.event.remove(this, "._change"), !Le.test(this.nodeName)
        }
    }), ce.support.focusinBubbles || ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = 0,
            i = function (t) {
                ce.event.simulate(e, t.target, ce.event.fix(t), !0)
            };
        ce.event.special[e] = {
            setup: function () {
                0 === n++ && K.addEventListener(t, i, !0)
            },
            teardown: function () {
                0 === --n && K.removeEventListener(t, i, !0)
            }
        }
    }), ce.fn.extend({
        on: function (t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (a in t) this.on(a, n, i, t[a], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = l;
            else if (!r) return this;
            return 1 === o && (s = r, r = function (t) {
                return ce().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ce.guid++)), this.each(function () {
                ce.event.add(this, t, r, i, n)
            })
        },
        one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function (t, n, i) {
            var r, o;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ce(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, n, t[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = l), this.each(function () {
                ce.event.remove(this, t, i, n)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                ce.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ce.event.trigger(t, e, n, !0) : void 0
        }
    });
    var qe = /^.[^:#\[\.,]*$/,
        Ue = /^(?:parents|prev(?:Until|All))/,
        We = ce.expr.match.needsContext,
        Ge = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ce.fn.extend({
        find: function (t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(ce(t).filter(function () {
                for (e = 0; r > e; e++)
                    if (ce.contains(i[e], this)) return !0
            }));
            for (e = 0; r > e; e++) ce.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        has: function (t) {
            var e, n = ce(t, this),
                i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)
                    if (ce.contains(this, n[e])) return !0
            })
        },
        not: function (t) {
            return this.pushStack(d(this, t || [], !0))
        },
        filter: function (t) {
            return this.pushStack(d(this, t || [], !1))
        },
        is: function (t) {
            return !!d(this, "string" == typeof t && We.test(t) ? ce(t) : t || [], !1).length
        },
        closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], a = We.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ce.unique(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t),
                i = ce.merge(this.get(), n);
            return this.pushStack(ce.unique(i))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ce.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return ce.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return ce.dir(t, "parentNode", n)
        },
        next: function (t) {
            return p(t, "nextSibling")
        },
        prev: function (t) {
            return p(t, "previousSibling")
        },
        nextAll: function (t) {
            return ce.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return ce.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return ce.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return ce.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return ce.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return ce.sibling(t.firstChild)
        },
        contents: function (t) {
            return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
        }
    }, function (t, e) {
        ce.fn[t] = function (n, i) {
            var r = ce.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Ge[t] || (r = ce.unique(r)), Ue.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    }), ce.extend({
        filter: function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        },
        dir: function (t, n, i) {
            for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !ce(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
            return r
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ye = / jQuery\d+="(?:null|\d+)"/g,
        Ve = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        Xe = /^\s+/,
        Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qe = /<([\w:]+)/,
        Je = /<tbody/i,
        Ze = /<|&#?\w+;/,
        tn = /<(?:script|style|link)/i,
        en = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, un = h(K),
        ln = un.appendChild(K.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ce.fn.extend({
        text: function (t) {
            return ce.access(this, function (t) {
                return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = f(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, i = t ? ce.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ce.cleanData(w(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ce.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return ce.clone(this, t, e)
            })
        },
        html: function (t) {
            return ce.access(this, function (t) {
                var n = this[0] || {}, i = 0,
                    r = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ye, "") : e;
                if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ve.test(t) || !ce.support.leadingWhitespace && Xe.test(t) || sn[(Qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Ke, "<$1></$2>");
                    try {
                        for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(w(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = ce.map(this, function (t) {
                return [t.nextSibling, t.parentNode]
            }),
                e = 0;
            return this.domManip(arguments, function (n) {
                var i = t[e++],
                    r = t[e++];
                r && (i && i.parentNode !== r && (i = this.nextSibling), ce(this).remove(), r.insertBefore(n, i))
            }, !0), e ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e, n) {
            t = ie.apply([], t);
            var i, r, o, a, s, u, l = 0,
                c = this.length,
                p = this,
                d = c - 1,
                h = t[0],
                f = ce.isFunction(h);
            if (f || !(1 >= c || "string" != typeof h || ce.support.checkClone) && nn.test(h)) return this.each(function (i) {
                var r = p.eq(i);
                f && (t[0] = h.call(this, i, r.html())), r.domManip(t, e, n)
            });
            if (c && (u = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
                for (a = ce.map(w(u, "script"), m), o = a.length; c > l; l++) r = u, l !== d && (r = ce.clone(r, !0, !0), o && ce.merge(a, w(r, "script"))), e.call(this[l], r, l);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ce.map(a, g), l = 0; o > l; l++) r = a[l], rn.test(r.type || "") && !ce._data(r, "globalEval") && ce.contains(s, r) && (r.src ? ce._evalUrl(r.src) : ce.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
                u = i = null
            }
            return this
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ce.fn[t] = function (t) {
            for (var n, i = 0, r = [], o = ce(t), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ce(o[i])[e](n), re.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ce.extend({
        clone: function (t, e, n) {
            var i, r, o, a, s, u = ce.contains(t.ownerDocument, t);
            if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ve.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ln.innerHTML = t.outerHTML, ln.removeChild(o = ln.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))
                for (i = w(o), s = w(t), a = 0; null != (r = s[a]); ++a) i[a] && b(r, i[a]);
            if (e)
                if (n)
                    for (s = s || w(t), i = i || w(o), a = 0; null != (r = s[a]); a++) y(r, i[a]);
                else y(t, o);
            return i = w(o, "script"), i.length > 0 && v(i, !u && w(t, "script")), i = s = r = null, o
        },
        buildFragment: function (t, e, n, i) {
            for (var r, o, a, s, u, l, c, p = t.length, d = h(e), f = [], m = 0; p > m; m++)
                if (o = t[m], o || 0 === o)
                    if ("object" === ce.type(o)) ce.merge(f, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (s = s || d.appendChild(e.createElement("div")), u = (Qe.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Ke, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!ce.support.leadingWhitespace && Xe.test(o) && f.push(e.createTextNode(Xe.exec(o)[0])), !ce.support.tbody)
                    for (o = "table" !== u || Je.test(o) ? "<table>" !== c[1] || Je.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ce.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ce.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else f.push(e.createTextNode(o));
            for (s && d.removeChild(s), ce.support.appendChecked || ce.grep(w(f, "input"), k), m = 0; o = f[m++];)
                if ((!i || -1 === ce.inArray(o, i)) && (a = ce.contains(o.ownerDocument, o), s = w(d.appendChild(o), "script"), a && v(s), n))
                    for (r = 0; o = s[r++];) rn.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function (t, e) {
            for (var n, i, r, o, a = 0, s = ce.expando, u = ce.cache, l = ce.support.deleteExpando, c = ce.event.special; null != (n = t[a]); a++)
                if ((e || ce.acceptData(n)) && (r = n[s], o = r && u[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, o.handle);
                    u[r] && (delete u[r], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, ee.push(r))
                }
        },
        _evalUrl: function (t) {
            return ce.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ce.fn.extend({
        wrapAll: function (t) {
            if (ce.isFunction(t)) return this.each(function (e) {
                ce(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return ce.isFunction(t) ? this.each(function (e) {
                ce(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ce(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = ce.isFunction(t);
            return this.each(function (n) {
                ce(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, pn, dn, hn = /alpha\([^)]*\)/i,
        fn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        yn = new RegExp("^(" + pe + ")(.*)$", "i"),
        bn = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
        wn = new RegExp("^([+-])=(" + pe + ")", "i"),
        kn = {
            BODY: "block"
        }, xn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Cn = ["Top", "Right", "Bottom", "Left"],
        _n = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({
        css: function (t, n) {
            return ce.access(this, function (t, n, i) {
                var r, o, a = {}, s = 0;
                if (ce.isArray(n)) {
                    for (o = pn(t), r = n.length; r > s; s++) a[n[s]] = ce.css(t, n[s], !1, o);
                    return a
                }
                return i !== e ? ce.style(t, n, i) : ce.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function () {
            return C(this, !0)
        },
        hide: function () {
            return C(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                T(this) ? ce(this).show() : ce(this).hide()
            })
        }
    }), ce.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = dn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ce.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, n, i, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, a, s, u = ce.camelCase(n),
                    l = t.style;
                if (n = ce.cssProps[u] || (ce.cssProps[u] = x(l, u)), s = ce.cssHooks[n] || ce.cssHooks[u], i === e) return s && "get" in s && (o = s.get(t, !1, r)) !== e ? o : l[n];
                if (a = typeof i, "string" === a && (o = wn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ce.css(t, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ce.cssNumber[u] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (i = s.set(t, i, r)) === e))) try {
                    l[n] = i
                } catch (c) {}
            }
        },
        css: function (t, n, i, r) {
            var o, a, s, u = ce.camelCase(n);
            return n = ce.cssProps[u] || (ce.cssProps[u] = x(t.style, u)), s = ce.cssHooks[n] || ce.cssHooks[u], s && "get" in s && (a = s.get(t, !0, i)), a === e && (a = dn(t, n, r)), "normal" === a && n in Tn && (a = Tn[n]), "" === i || i ? (o = parseFloat(a), i === !0 || ce.isNumeric(o) ? o || 0 : a) : a
        }
    }), t.getComputedStyle ? (pn = function (e) {
        return t.getComputedStyle(e, null)
    }, dn = function (t, n, i) {
        var r, o, a, s = i || pn(t),
            u = s ? s.getPropertyValue(n) || s[n] : e,
            l = t.style;
        return s && ("" !== u || ce.contains(t.ownerDocument, t) || (u = ce.style(t, n)), bn.test(u) && vn.test(n) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = r, l.minWidth = o, l.maxWidth = a)), u
    }) : K.documentElement.currentStyle && (pn = function (t) {
        return t.currentStyle
    }, dn = function (t, n, i) {
        var r, o, a, s = i || pn(t),
            u = s ? s[n] : e,
            l = t.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !mn.test(n) && (r = l.left, o = t.runtimeStyle, a = o && o.left, a && (o.left = t.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = r, a && (o.left = a)), "" === u ? "auto" : u
    }), ce.each(["height", "width"], function (t, e) {
        ce.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? 0 === t.offsetWidth && gn.test(ce.css(t, "display")) ? ce.swap(t, xn, function () {
                    return S(t, e, i)
                }) : S(t, e, i) : void 0
            },
            set: function (t, n, i) {
                var r = i && pn(t);
                return _(t, n, i ? D(t, e, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ce.support.opacity || (ce.cssHooks.opacity = {
        get: function (t, e) {
            return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = hn.test(o) ? o.replace(hn, r) : o + " " + r)
        }
    }), ce(function () {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
            get: function (t, e) {
                return e ? ce.swap(t, {
                    display: "inline-block"
                }, dn, [t, "marginRight"]) : void 0
            }
        }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function (t, e) {
            ce.cssHooks[e] = {
                get: function (t, n) {
                    return n ? (n = dn(t, e), bn.test(n) ? ce(t).position()[e] + "px" : n) : void 0
                }
            }
        })
    }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
    }, ce.expr.filters.visible = function (t) {
        return !ce.expr.filters.hidden(t)
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        ce.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Cn[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, vn.test(t) || (ce.cssHooks[t + e].set = _)
    });
    var Dn = /%20/g,
        Sn = /\[\]$/,
        jn = /\r?\n/g,
        En = /^(?:submit|button|image|reset|file)$/i,
        Nn = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({
        serialize: function () {
            return ce.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ce.prop(this, "elements");
                return t ? ce.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ce(this).is(":disabled") && Nn.test(this.nodeName) && !En.test(t) && (this.checked || !en.test(t))
            }).map(function (t, e) {
                var n = ce(this).val();
                return null == n ? null : ce.isArray(n) ? ce.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(jn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(jn, "\r\n")
                }
            }).get()
        }
    }), ce.param = function (t, n) {
        var i, r = [],
            o = function (t, e) {
                e = ce.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t)) ce.each(t, function () {
            o(this.name, this.value)
        });
        else
            for (i in t) N(i, t[i], n, o);
        return r.join("&").replace(Dn, "+")
    }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ce.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ce.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Mn, On, $n = ce.now(),
        An = /\?/,
        Hn = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        In = /^(?:GET|HEAD)$/,
        Pn = /^\/\//,
        Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qn = ce.fn.load,
        Un = {}, Wn = {}, Gn = "*/".concat("*");
    try {
        On = X.href
    } catch (zn) {
        On = K.createElement("a"), On.href = "", On = On.href
    }
    Mn = Bn.exec(On.toLowerCase()) || [], ce.fn.load = function (t, n, i) {
        if ("string" != typeof t && qn) return qn.apply(this, arguments);
        var r, o, a, s = this,
            u = t.indexOf(" ");
        return u >= 0 && (r = t.slice(u, t.length), t = t.slice(0, u)), ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: n
        }).done(function (t) {
            o = arguments, s.html(r ? ce("<div>").append(ce.parseHTML(t)).find(r) : t)
        }).complete(i && function (t, e) {
            s.each(i, o || [t.responseText, e, t])
        }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ce.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: On,
            type: "GET",
            isLocal: Rn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ce.parseJSON,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? $($(t, ce.ajaxSettings), e) : $(ce.ajaxSettings, t)
        },
        ajaxPrefilter: M(Un),
        ajaxTransport: M(Wn),
        ajax: function (t, n) {
            function i(t, n, i, r) {
                var o, p, y, b, k, T = n;
                2 !== w && (w = 2, u && clearTimeout(u), c = e, s = r || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (b = A(d, x, i)), b = H(d, b, x, o), o ? (d.ifModified && (k = x.getResponseHeader("Last-Modified"), k && (ce.lastModified[a] = k), k = x.getResponseHeader("etag"), k && (ce.etag[a] = k)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, y = b.error, o = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || T) + "", o ? m.resolveWith(h, [p, T, x]) : m.rejectWith(h, [x, T, y]), x.statusCode(v), v = e, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? p : y]), g.fireWith(h, [x, T]), l && (f.trigger("ajaxComplete", [x, d]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var r, o, a, s, u, l, c, p, d = ce.ajaxSetup({}, n),
                h = d.context || d,
                f = d.context && (h.nodeType || h.jquery) ? ce(h) : ce.event,
                m = ce.Deferred(),
                g = ce.Callbacks("once memory"),
                v = d.statusCode || {}, y = {}, b = {}, w = 0,
                k = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!p)
                                for (p = {}; e = Ln.exec(s);) p[e[1].toLowerCase()] = e[2];
                            e = p[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return w || (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || k;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || On) + "").replace(Hn, "").replace(Pn, Mn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (r = Bn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Mn[1] && r[2] === Mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), O(Un, d, n, x), 2 === w) return x;
            l = d.global, l && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !In.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (An.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(a) ? a.replace(Fn, "$1_=" + $n++) : a + (An.test(a) ? "&" : "?") + "_=" + $n++)), d.ifModified && (ce.lastModified[a] && x.setRequestHeader("If-Modified-Since", ce.lastModified[a]), ce.etag[a] && x.setRequestHeader("If-None-Match", ce.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Gn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === w)) return x.abort();
            k = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) x[o](d[o]);
            if (c = O(Wn, d, n, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (u = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, c.send(y, i)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return ce.get(t, e, n, "json")
        },
        getScript: function (t, n) {
            return ce.get(t, e, n, "script")
        }
    }), ce.each(["get", "post"], function (t, n) {
        ce[n] = function (t, i, r, o) {
            return ce.isFunction(i) && (o = o || r, r = i, i = e), ce.ajax({
                url: t,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return ce.globalEval(t), t
            }
        }
    }), ce.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ce.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, i = K.head || ce("head")[0] || K.documentElement;
            return {
                send: function (e, r) {
                    n = K.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Yn = [],
        Vn = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Yn.pop() || ce.expando + "_" + $n++;
            return this[t] = !0, t
        }
    }), ce.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, a, s, u = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Vn, "$1" + o) : n.jsonp !== !1 && (n.url += (An.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ce.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = t[o], t[o] = function () {
            s = arguments
        }, r.always(function () {
            t[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Yn.push(o)), s && ce.isFunction(a) && a(s[0]), s = a = e
        }), "script") : void 0
    });
    var Xn, Kn, Qn = 0,
        Jn = t.ActiveXObject && function () {
            var t;
            for (t in Xn) Xn[t](e, !0)
        };
    ce.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return !this.isLocal && F() || L()
    } : F, Kn = ce.ajaxSettings.xhr(), ce.support.cors = !! Kn && "withCredentials" in Kn, Kn = ce.support.ajax = !! Kn, Kn && ce.ajaxTransport(function (n) {
        if (!n.crossDomain || ce.support.cors) {
            var i;
            return {
                send: function (r, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r) u.setRequestHeader(s, r[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), i = function (t, r) {
                        var s, l, c, p;
                        try {
                            if (i && (r || 4 === u.readyState))
                                if (i = e, a && (u.onreadystatechange = ce.noop, Jn && delete Xn[a]), r) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (h) {
                            r || o(-1, h)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(i) : (a = ++Qn, Jn && (Xn || (Xn = {}, ce(t).unload(Jn)), Xn[a] = i), u.onreadystatechange = i) : i()
                },
                abort: function () {
                    i && i(e, !0)
                }
            }
        }
    });
    var Zn, ti, ei = /^(?:toggle|show|hide)$/,
        ni = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        ri = [q],
        oi = {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = ni.exec(e),
                        o = r && r[3] || (ce.cssNumber[t] ? "" : "px"),
                        a = (ce.cssNumber[t] || "px" !== o && +i) && ni.exec(ce.css(n.elem, t)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, ce.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --u)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }
            ]
        };
    ce.Animation = ce.extend(P, {
        tweener: function (t, e) {
            ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], oi[n] = oi[n] || [], oi[n].unshift(e)
        },
        prefilter: function (t, e) {
            e ? ri.unshift(t) : ri.push(t)
        }
    }), ce.Tween = U, U.prototype = {
        constructor: U,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = U.propHooks[this.prop];
            return t && t.get ? t.get(this) : U.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = U.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this
        }
    }, U.prototype.init.prototype = U.prototype, U.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ce.each(["toggle", "show", "hide"], function (t, e) {
        var n = ce.fn[e];
        ce.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, i, r)
        }
    }), ce.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var r = ce.isEmptyObject(t),
                o = ce.speed(e, n, i),
                a = function () {
                    var e = P(this, ce.extend({}, t), o);
                    (r || ce._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (t, n, i) {
            var r = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    o = ce.timers,
                    a = ce._data(this);
                if (n) a[n] && a[n].stop && r(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && ii.test(n) && r(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                (e || !i) && ce.dequeue(this, t)
            })
        },
        finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = ce._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = ce.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, ce.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ce.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        ce.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ce.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ce.extend({}, t) : {
            complete: n || !n && e || ce.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ce.isFunction(e) && e
        };
        return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
        }, i
    }, ce.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ce.timers = [], ce.fx = U.prototype.init, ce.fx.tick = function () {
        var t, n = ce.timers,
            i = 0;
        for (Zn = ce.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || ce.fx.stop(), Zn = e
    }, ce.fx.timer = function (t) {
        t() && ce.timers.push(t) && ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function () {
        clearInterval(ti), ti = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function (t) {
        return ce.grep(ce.timers, function (e) {
            return t === e.elem
        }).length
    }), ce.fn.offset = function (t) {
        if (arguments.length) return t === e ? this : this.each(function (e) {
            ce.offset.setOffset(this, t, e)
        });
        var n, i, r = {
                top: 0,
                left: 0
            }, o = this[0],
            a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (r = o.getBoundingClientRect()), i = G(a), {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r
    }, ce.offset = {
        setOffset: function (t, e, n) {
            var i = ce.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var r, o, a = ce(t),
                s = a.offset(),
                u = ce.css(t, "top"),
                l = ce.css(t, "left"),
                c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [u, l]) > -1,
                p = {}, d = {};
            c ? (d = a.position(), r = d.top, o = d.left) : (r = parseFloat(u) || 0, o = parseFloat(l) || 0), ce.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + r), null != e.left && (p.left = e.left - s.left + o), "using" in e ? e.using.call(t, p) : a.css(p)
        }
    }, ce.fn.extend({
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ce.css(i, "marginTop", !0),
                    left: e.left - n.left - ce.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || Q; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");) t = t.offsetParent;
                return t || Q
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var i = /Y/.test(n);
        ce.fn[t] = function (r) {
            return ce.access(this, function (t, r, o) {
                var a = G(t);
                return o === e ? a ? n in a ? a[n] : a.document.documentElement[r] : t[r] : (a ? a.scrollTo(i ? ce(a).scrollLeft() : o, i ? o : ce(a).scrollTop()) : t[r] = o, void 0)
            }, t, r, arguments.length, null)
        }
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function (t, n) {
        ce.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function (i, r) {
            ce.fn[r] = function (r, o) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    s = i || (r === !0 || o === !0 ? "margin" : "border");
                return ce.access(this, function (n, i, r) {
                    var o;
                    return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? ce.css(n, i, s) : ce.style(n, i, r, s)
                }, n, a ? r : e, a, null)
            }
        })
    }), ce.fn.size = function () {
        return this.length
    }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ce
    }))
}(window),
function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (i) {
            var r, o, a, s, u, l, c, p;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), u = s === e ? null : s, l = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                    var d = i.data("ujs:submit-button");
                    d && (a.push(d), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                p = {
                    type: r || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function (t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
                    },
                    success: function (t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function (t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: u
                }, l && (p.xhrFields = {
                    withCredentials: l
                }), o && (p.url = o);
                var h = n.ajax(p);
                return i.trigger("ajax:send", h), h
            }
            return !1
        },
        handleMethod: function (i) {
            var r = n.href(i),
                o = i.data("method"),
                a = i.attr("target"),
                s = t("meta[name=csrf-token]").attr("content"),
                u = t("meta[name=csrf-param]").attr("content"),
                l = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            u !== e && s !== e && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
        },
        disableFormElements: function (e) {
            e.find(n.disableSelector).each(function () {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function (e) {
            e.find(n.enableSelector).each(function () {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function (t) {
            var e, i = t.data("confirm"),
                r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function (e, n, i) {
            var r, o, a = t(),
                s = n || "input,textarea",
                u = e.find(s);
            return u.each(function () {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var r = t(this),
            o = r.data("method"),
            a = r.data("params");
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (!(!i.metaKey && !i.ctrlKey || o && "GET" !== o || a)) return !0;
            var s = n.handleRemote(r);
            return s === !1 ? n.enableElement(r) : s.error(function () {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r = t(this),
            o = r.data("remote") !== e,
            a = n.blankInputs(r, n.requiredInputSelector),
            s = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (a && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [a])) return n.stopEverything(i);
        if (o) {
            if (s) {
                setTimeout(function () {
                    n.disableFormElements(r)
                }, 13);
                var u = n.fire(r, "ajax:aborted:file", [s]);
                return u || setTimeout(function () {
                    n.enableFormElements(r)
                }, 13), u
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function () {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        var e = t("meta[name=csrf-token]").attr("content"),
            n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}(jQuery),
function () {
    var t = this,
        e = t._,
        n = {}, i = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = i.push,
        s = i.slice,
        u = i.concat,
        l = r.toString,
        c = r.hasOwnProperty,
        p = i.forEach,
        d = i.map,
        h = i.reduce,
        f = i.reduceRight,
        m = i.filter,
        g = i.every,
        v = i.some,
        y = i.indexOf,
        b = i.lastIndexOf,
        w = Array.isArray,
        k = Object.keys,
        x = o.bind,
        T = function (t) {
            return t instanceof T ? t : this instanceof T ? (this._wrapped = t, void 0) : new T(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.5.2";
    var C = T.each = T.forEach = function (t, e, i) {
        if (null != t)
            if (p && t.forEach === p) t.forEach(e, i);
            else if (t.length === +t.length) {
            for (var r = 0, o = t.length; o > r; r++)
                if (e.call(i, t[r], r, t) === n) return
        } else
            for (var a = T.keys(t), r = 0, o = a.length; o > r; r++)
                if (e.call(i, t[a[r]], a[r], t) === n) return
    };
    T.map = T.collect = function (t, e, n) {
        var i = [];
        return null == t ? i : d && t.map === d ? t.map(e, n) : (C(t, function (t, r, o) {
            i.push(e.call(n, t, r, o))
        }), i)
    };
    var _ = "Reduce of empty array with no initial value";
    T.reduce = T.foldl = T.inject = function (t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), h && t.reduce === h) return i && (e = T.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
        if (C(t, function (t, o, a) {
            r ? n = e.call(i, n, t, o, a) : (n = t, r = !0)
        }), !r) throw new TypeError(_);
        return n
    }, T.reduceRight = T.foldr = function (t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return i && (e = T.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var a = T.keys(t);
            o = a.length
        }
        if (C(t, function (s, u, l) {
            u = a ? a[--o] : --o, r ? n = e.call(i, n, t[u], u, l) : (n = t[u], r = !0)
        }), !r) throw new TypeError(_);
        return n
    }, T.find = T.detect = function (t, e, n) {
        var i;
        return D(t, function (t, r, o) {
            return e.call(n, t, r, o) ? (i = t, !0) : void 0
        }), i
    }, T.filter = T.select = function (t, e, n) {
        var i = [];
        return null == t ? i : m && t.filter === m ? t.filter(e, n) : (C(t, function (t, r, o) {
            e.call(n, t, r, o) && i.push(t)
        }), i)
    }, T.reject = function (t, e, n) {
        return T.filter(t, function (t, i, r) {
            return !e.call(n, t, i, r)
        }, n)
    }, T.every = T.all = function (t, e, i) {
        e || (e = T.identity);
        var r = !0;
        return null == t ? r : g && t.every === g ? t.every(e, i) : (C(t, function (t, o, a) {
            return (r = r && e.call(i, t, o, a)) ? void 0 : n
        }), !! r)
    };
    var D = T.some = T.any = function (t, e, i) {
        e || (e = T.identity);
        var r = !1;
        return null == t ? r : v && t.some === v ? t.some(e, i) : (C(t, function (t, o, a) {
            return r || (r = e.call(i, t, o, a)) ? n : void 0
        }), !! r)
    };
    T.contains = T.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : D(t, function (t) {
            return t === e
        })
    }, T.invoke = function (t, e) {
        var n = s.call(arguments, 2),
            i = T.isFunction(e);
        return T.map(t, function (t) {
            return (i ? e : t[e]).apply(t, n)
        })
    }, T.pluck = function (t, e) {
        return T.map(t, function (t) {
            return t[e]
        })
    }, T.where = function (t, e, n) {
        return T.isEmpty(e) ? n ? void 0 : [] : T[n ? "find" : "filter"](t, function (t) {
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        })
    }, T.findWhere = function (t, e) {
        return T.where(t, e, !0)
    }, T.max = function (t, e, n) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && T.isEmpty(t)) return -1 / 0;
        var i = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return C(t, function (t, r, o) {
            var a = e ? e.call(n, t, r, o) : t;
            a > i.computed && (i = {
                value: t,
                computed: a
            })
        }), i.value
    }, T.min = function (t, e, n) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && T.isEmpty(t)) return 1 / 0;
        var i = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return C(t, function (t, r, o) {
            var a = e ? e.call(n, t, r, o) : t;
            a < i.computed && (i = {
                value: t,
                computed: a
            })
        }), i.value
    }, T.shuffle = function (t) {
        var e, n = 0,
            i = [];
        return C(t, function (t) {
            e = T.random(n++), i[n - 1] = i[e], i[e] = t
        }), i
    }, T.sample = function (t, e, n) {
        return arguments.length < 2 || n ? t[T.random(t.length - 1)] : T.shuffle(t).slice(0, Math.max(0, e))
    };
    var S = function (t) {
        return T.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    T.sortBy = function (t, e, n) {
        var i = S(e);
        return T.pluck(T.map(t, function (t, e, r) {
            return {
                value: t,
                index: e,
                criteria: i.call(n, t, e, r)
            }
        }).sort(function (t, e) {
            var n = t.criteria,
                i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var j = function (t) {
        return function (e, n, i) {
            var r = {}, o = null == n ? T.identity : S(n);
            return C(e, function (n, a) {
                var s = o.call(i, n, a, e);
                t(r, s, n)
            }), r
        }
    };
    T.groupBy = j(function (t, e, n) {
        (T.has(t, e) ? t[e] : t[e] = []).push(n)
    }), T.indexBy = j(function (t, e, n) {
        t[e] = n
    }), T.countBy = j(function (t, e) {
        T.has(t, e) ? t[e]++ : t[e] = 1
    }), T.sortedIndex = function (t, e, n, i) {
        n = null == n ? T.identity : S(n);
        for (var r = n.call(i, e), o = 0, a = t.length; a > o;) {
            var s = o + a >>> 1;
            n.call(i, t[s]) < r ? o = s + 1 : a = s
        }
        return o
    }, T.toArray = function (t) {
        return t ? T.isArray(t) ? s.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
    }, T.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t).length
    }, T.first = T.head = T.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : s.call(t, 0, e)
    }, T.initial = function (t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, T.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }, T.rest = T.tail = T.drop = function (t, e, n) {
        return s.call(t, null == e || n ? 1 : e)
    }, T.compact = function (t) {
        return T.filter(t, T.identity)
    };
    var E = function (t, e, n) {
        return e && T.every(t, T.isArray) ? u.apply(n, t) : (C(t, function (t) {
            T.isArray(t) || T.isArguments(t) ? e ? a.apply(n, t) : E(t, e, n) : n.push(t)
        }), n)
    };
    T.flatten = function (t, e) {
        return E(t, e, [])
    }, T.without = function (t) {
        return T.difference(t, s.call(arguments, 1))
    }, T.uniq = T.unique = function (t, e, n, i) {
        T.isFunction(e) && (i = n, n = e, e = !1);
        var r = n ? T.map(t, n, i) : t,
            o = [],
            a = [];
        return C(r, function (n, i) {
            (e ? i && a[a.length - 1] === n : T.contains(a, n)) || (a.push(n), o.push(t[i]))
        }), o
    }, T.union = function () {
        return T.uniq(T.flatten(arguments, !0))
    }, T.intersection = function (t) {
        var e = s.call(arguments, 1);
        return T.filter(T.uniq(t), function (t) {
            return T.every(e, function (e) {
                return T.indexOf(e, t) >= 0
            })
        })
    }, T.difference = function (t) {
        var e = u.apply(i, s.call(arguments, 1));
        return T.filter(t, function (t) {
            return !T.contains(e, t)
        })
    }, T.zip = function () {
        for (var t = T.max(T.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = T.pluck(arguments, "" + n);
        return e
    }, T.object = function (t, e) {
        if (null == t) return {};
        for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, T.indexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = 0,
            r = t.length;
        if (n) {
            if ("number" != typeof n) return i = T.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (; r > i; i++)
            if (t[i] === e) return i;
        return -1
    }, T.lastIndexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = null != n;
        if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var r = i ? n : t.length; r--;)
            if (t[r] === e) return r;
        return -1
    }, T.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = t, t += n;
        return o
    };
    var N = function () {};
    T.bind = function (t, e) {
        var n, i;
        if (x && t.bind === x) return x.apply(t, s.call(arguments, 1));
        if (!T.isFunction(t)) throw new TypeError;
        return n = s.call(arguments, 2), i = function () {
            if (!(this instanceof i)) return t.apply(e, n.concat(s.call(arguments)));
            N.prototype = t.prototype;
            var r = new N;
            N.prototype = null;
            var o = t.apply(r, n.concat(s.call(arguments)));
            return Object(o) === o ? o : r
        }
    }, T.partial = function (t) {
        var e = s.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(s.call(arguments)))
        }
    }, T.bindAll = function (t) {
        var e = s.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return C(e, function (e) {
            t[e] = T.bind(t[e], t)
        }), t
    }, T.memoize = function (t, e) {
        var n = {};
        return e || (e = T.identity),
        function () {
            var i = e.apply(this, arguments);
            return T.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
        }
    }, T.delay = function (t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, T.defer = function (t) {
        return T.delay.apply(T, [t, 1].concat(s.call(arguments, 1)))
    }, T.throttle = function (t, e, n) {
        var i, r, o, a = null,
            s = 0;
        n || (n = {});
        var u = function () {
            s = n.leading === !1 ? 0 : new Date, a = null, o = t.apply(i, r)
        };
        return function () {
            var l = new Date;
            s || n.leading !== !1 || (s = l);
            var c = e - (l - s);
            return i = this, r = arguments, 0 >= c ? (clearTimeout(a), a = null, s = l, o = t.apply(i, r)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
        }
    }, T.debounce = function (t, e, n) {
        var i, r, o, a, s;
        return function () {
            o = this, r = arguments, a = new Date;
            var u = function () {
                var l = new Date - a;
                e > l ? i = setTimeout(u, e - l) : (i = null, n || (s = t.apply(o, r)))
            }, l = n && !i;
            return i || (i = setTimeout(u, e)), l && (s = t.apply(o, r)), s
        }
    }, T.once = function (t) {
        var e, n = !1;
        return function () {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, T.wrap = function (t, e) {
        return function () {
            var n = [t];
            return a.apply(n, arguments), e.apply(this, n)
        }
    }, T.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
            return e[0]
        }
    }, T.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, T.keys = k || function (t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var n in t) T.has(t, n) && e.push(n);
        return e
    }, T.values = function (t) {
        for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
        return i
    }, T.pairs = function (t) {
        for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
        return i
    }, T.invert = function (t) {
        for (var e = {}, n = T.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
        return e
    }, T.functions = T.methods = function (t) {
        var e = [];
        for (var n in t) T.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, T.extend = function (t) {
        return C(s.call(arguments, 1), function (e) {
            if (e)
                for (var n in e) t[n] = e[n]
        }), t
    }, T.pick = function (t) {
        var e = {}, n = u.apply(i, s.call(arguments, 1));
        return C(n, function (n) {
            n in t && (e[n] = t[n])
        }), e
    }, T.omit = function (t) {
        var e = {}, n = u.apply(i, s.call(arguments, 1));
        for (var r in t) T.contains(n, r) || (e[r] = t[r]);
        return e
    }, T.defaults = function (t) {
        return C(s.call(arguments, 1), function (e) {
            if (e)
                for (var n in e) void 0 === t[n] && (t[n] = e[n])
        }), t
    }, T.clone = function (t) {
        return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
    }, T.tap = function (t, e) {
        return e(t), t
    };
    var M = function (t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
        var r = l.call(t);
        if (r != l.call(e)) return !1;
        switch (r) {
        case "[object String]":
            return t == String(e);
        case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = n.length; o--;)
            if (n[o] == t) return i[o] == e;
        var a = t.constructor,
            s = e.constructor;
        if (a !== s && !(T.isFunction(a) && a instanceof a && T.isFunction(s) && s instanceof s)) return !1;
        n.push(t), i.push(e);
        var u = 0,
            c = !0;
        if ("[object Array]" == r) {
            if (u = t.length, c = u == e.length)
                for (; u-- && (c = M(t[u], e[u], n, i)););
        } else {
            for (var p in t)
                if (T.has(t, p) && (u++, !(c = T.has(e, p) && M(t[p], e[p], n, i)))) break;
            if (c) {
                for (p in e)
                    if (T.has(e, p) && !u--) break;
                c = !u
            }
        }
        return n.pop(), i.pop(), c
    };
    T.isEqual = function (t, e) {
        return M(t, e, [], [])
    }, T.isEmpty = function (t) {
        if (null == t) return !0;
        if (T.isArray(t) || T.isString(t)) return 0 === t.length;
        for (var e in t)
            if (T.has(t, e)) return !1;
        return !0
    }, T.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, T.isArray = w || function (t) {
        return "[object Array]" == l.call(t)
    }, T.isObject = function (t) {
        return t === Object(t)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        T["is" + t] = function (e) {
            return l.call(e) == "[object " + t + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function (t) {
        return !(!t || !T.has(t, "callee"))
    }), "function" != typeof / . / && (T.isFunction = function (t) {
        return "function" == typeof t
    }), T.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, T.isNaN = function (t) {
        return T.isNumber(t) && t != +t
    }, T.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == l.call(t)
    }, T.isNull = function (t) {
        return null === t
    }, T.isUndefined = function (t) {
        return void 0 === t
    }, T.has = function (t, e) {
        return c.call(t, e)
    }, T.noConflict = function () {
        return t._ = e, this
    }, T.identity = function (t) {
        return t
    }, T.times = function (t, e, n) {
        for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
        return i
    }, T.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var O = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    O.unescape = T.invert(O.escape);
    var $ = {
        escape: new RegExp("[" + T.keys(O.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(O.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (t) {
        T[t] = function (e) {
            return null == e ? "" : ("" + e).replace($[t], function (e) {
                return O[t][e]
            })
        }
    }), T.result = function (t, e) {
        if (null == t) return void 0;
        var n = t[e];
        return T.isFunction(n) ? n.call(t) : n
    }, T.mixin = function (t) {
        C(T.functions(t), function (e) {
            var n = T[e] = t[e];
            T.prototype[e] = function () {
                var t = [this._wrapped];
                return a.apply(t, arguments), R.call(this, n.apply(T, t))
            }
        })
    };
    var A = 0;
    T.uniqueId = function (t) {
        var e = ++A + "";
        return t ? t + e : e
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (t, e, n) {
        var i;
        n = T.defaults({}, n, T.templateSettings);
        var r = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        t.replace(r, function (e, n, i, r, s) {
            return a += t.slice(o, s).replace(L, function (t) {
                return "\\" + F[t]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + e.length, e
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            i = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (e) return i(e, T);
        var u = function (t) {
            return i.call(this, t, T)
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
    }, T.chain = function (t) {
        return T(t).chain()
    };
    var R = function (t) {
        return this._chain ? T(t).chain() : t
    };
    T.mixin(T), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = i[t];
        T.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], R.call(this, n)
        }
    }), C(["concat", "join", "slice"], function (t) {
        var e = i[t];
        T.prototype[t] = function () {
            return R.call(this, e.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function () {
    this.Gmaps = {
        build: function (t, e) {
            var n;
            return null == e && (e = {}), n = _.isFunction(e.handler) ? e.handler : Gmaps.Objects.Handler, new n(t, e)
        },
        Builders: {},
        Objects: {},
        Google: {
            Objects: {},
            Builders: {}
        }
    }
}.call(this),
function () {
    var t, e = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    t = ["extended", "included"], this.Gmaps.Base = function () {
        function n() {}
        return n.extend = function (n) {
            var i, r, o;
            for (i in n) r = n[i], e.call(t, i) < 0 && (this[i] = r);
            return null != (o = n.extended) && o.apply(this), this
        }, n.include = function (n) {
            var i, r, o;
            for (i in n) r = n[i], e.call(t, i) < 0 && (this.prototype[i] = r);
            return null != (o = n.included) && o.apply(this), this
        }, n
    }()
}.call(this),
function () {
    this.Gmaps.Objects.BaseBuilder = function () {
        function t() {}
        return t.prototype.build = function () {
            return new(this.model_class())(this.serviceObject)
        }, t.prototype.before_init = function () {}, t.prototype.after_init = function () {}, t.prototype.addListener = function (t, e) {
            return this.primitives().addListener(this.getServiceObject(), t, e)
        }, t.prototype.getServiceObject = function () {
            return this.serviceObject
        }, t.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, t.prototype.model_class = function () {
            return this.constructor.OBJECT
        }, t
    }()
}.call(this),
function () {
    this.Gmaps.Objects.Builders = function (t, e, n) {
        return e.PRIMITIVES = n, t.OBJECT = e, t.PRIMITIVES = n, {
            build: function (e, n, i) {
                var r;
                return r = new t(e, n, i), r.build()
            }
        }
    }
}.call(this),
function () {
    this.Gmaps.Objects.Handler = function () {
        function t(t, e) {
            this.type = t, null == e && (e = {}), this.setPrimitives(e), this.setOptions(e), this.resetBounds()
        }
        return t.prototype.buildMap = function (t, e) {
            var n = this;
            return null == e && (e = function () {}), this.map = this._map_builder().build(t, function () {
                return n._createClusterer(), e()
            })
        }, t.prototype.addMarkers = function (t, e) {
            var n = this;
            return _.map(t, function (t) {
                return n.addMarker(t, e)
            })
        }, t.prototype.addMarker = function (t, e) {
            var n;
            return n = this._marker_builder().build(t, e, this.marker_options), n.setMap(this.getMap()), this.clusterer.addMarker(n), n
        }, t.prototype.addCircles = function (t, e) {
            var n = this;
            return _.map(t, function (t) {
                return n.addCircle(t, e)
            })
        }, t.prototype.addCircle = function (t, e) {
            return this._addResource("circle", t, e)
        }, t.prototype.addPolylines = function (t, e) {
            var n = this;
            return _.map(t, function (t) {
                return n.addPolyline(t, e)
            })
        }, t.prototype.addPolyline = function (t, e) {
            return this._addResource("polyline", t, e)
        }, t.prototype.addPolygons = function (t, e) {
            var n = this;
            return _.map(t, function (t) {
                return n.addPolygon(t, e)
            })
        }, t.prototype.addPolygon = function (t, e) {
            return this._addResource("polygon", t, e)
        }, t.prototype.addKmls = function (t, e) {
            var n = this;
            return _.map(t, function (t) {
                return n.addKml(t, e)
            })
        }, t.prototype.addKml = function (t, e) {
            return this._addResource("kml", t, e)
        }, t.prototype.fitMapToBounds = function () {
            return this.map.fitToBounds(this.bounds.getServiceObject())
        }, t.prototype.getMap = function () {
            return this.map.getServiceObject()
        }, t.prototype.setOptions = function (t) {
            return this.marker_options = _.extend(this._default_marker_options(), t.markers), this.builders = _.extend(this._default_builders(), t.builders), this.models = _.extend(this._default_models(), t.models)
        }, t.prototype.resetBounds = function () {
            return this.bounds = this._bound_builder().build()
        }, t.prototype.setPrimitives = function (t) {
            return this.primitives = void 0 === t.primitives ? this._rootModule().Primitives() : _.isFunction(t.primitives) ? t.primitives() : t.primitives
        }, t.prototype.currentInfowindow = function () {
            return this.builders.Marker.CURRENT_INFOWINDOW
        }, t.prototype._addResource = function (t, e, n) {
            var i;
            return i = this["_" + t + "_builder"]().build(e, n), i.setMap(this.getMap()), i
        }, t.prototype._clusterize = function () {
            return _.isObject(this.marker_options.clusterer)
        }, t.prototype._createClusterer = function () {
            return this.clusterer = this._clusterer_builder().build({
                map: this.getMap()
            }, this.marker_options.clusterer)
        }, t.prototype._default_marker_options = function () {
            return {
                singleInfowindow: !0,
                maxRandomDistance: 100,
                clusterer: {
                    maxZoom: 5,
                    gridSize: 50
                }
            }
        }, t.prototype._bound_builder = function () {
            return this._builder("Bound")
        }, t.prototype._clusterer_builder = function () {
            return this._builder("Clusterer")
        }, t.prototype._marker_builder = function () {
            return this._builder("Marker")
        }, t.prototype._map_builder = function () {
            return this._builder("Map")
        }, t.prototype._kml_builder = function () {
            return this._builder("Kml")
        }, t.prototype._circle_builder = function () {
            return this._builder("Circle")
        }, t.prototype._polyline_builder = function () {
            return this._builder("Polyline")
        }, t.prototype._polygon_builder = function () {
            return this._builder("Polygon")
        }, t.prototype._builder = function (t) {
            var e;
            return null == this[e = "__builder" + t] && (this[e] = Gmaps.Objects.Builders(this.builders[t], this.models[t], this.primitives)), this["__builder" + t]
        }, t.prototype._default_models = function () {
            var t;
            return t = this._rootModule().Objects, this._clusterize() ? t : (t.Clusterer = Gmaps.Objects.NullClusterer, t)
        }, t.prototype._default_builders = function () {
            return this._rootModule().Builders
        }, t.prototype._rootModule = function () {
            return null == this.__rootModule && (this.__rootModule = Gmaps[this.type]), this.__rootModule
        }, t
    }()
}.call(this),
function () {
    this.Gmaps.Objects.NullClusterer = function () {
        function t() {}
        return t.prototype.addMarkers = function () {}, t.prototype.addMarker = function () {}, t.prototype.clear = function () {}, t
    }()
}.call(this),
function () {
    this.Gmaps.Google.Objects.Common = {
        getServiceObject: function () {
            return this.serviceObject
        },
        setMap: function (t) {
            return this.getServiceObject().setMap(t)
        },
        clear: function () {
            return this.serviceObject.setMap(null), this.serviceObject = null
        },
        show: function () {
            return this.serviceObject.setVisible(!0)
        },
        hide: function () {
            return this.serviceObject.setVisible(!1)
        },
        isVisible: function () {
            return this.serviceObject.getVisible()
        },
        primitives: function () {
            return this.constructor.PRIMITIVES
        }
    }
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Bound = function (t) {
        function n() {
            this.before_init(), this.serviceObject = new(this.primitives().latLngBounds), this.after_init()
        }
        return e(n, t), n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Circle = function (t) {
        function n(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_circle(), this.after_init()
        }
        return e(n, t), n.prototype.create_circle = function () {
            return new(this.primitives().circle)(this.circle_options())
        }, n.prototype.circle_options = function () {
            var t;
            return t = {
                center: new(this.primitives().latLng)(this.args.lat, this.args.lng),
                radius: this.args.radius
            }, _.defaults(t, this.provider_options)
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Clusterer = function (t) {
        function n(t, e) {
            this.args = t, this.options = e, this.before_init(), this.serviceObject = new(this.primitives().clusterer)(this.args.map, [], this.options), this.after_init()
        }
        return e(n, t), n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Kml = function (t) {
        function n(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_kml(), this.after_init()
        }
        return e(n, t), n.prototype.create_kml = function () {
            return new(this.primitives().kml)(this.args.url, this.kml_options())
        }, n.prototype.kml_options = function () {
            var t;
            return t = {}, _.defaults(t, this.provider_options)
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Map = function (t) {
        function n(t, e) {
            var n;
            this.before_init(), n = _.extend(this.default_options(), t.provider), this.internal_options = t.internal, this.serviceObject = new(this.primitives().map)(document.getElementById(this.internal_options.id), n), this.on_map_load(e), this.after_init()
        }
        return e(n, t), n.prototype.build = function () {
            return new(this.model_class())(this.serviceObject, this.primitives())
        }, n.prototype.on_map_load = function (t) {
            return this.primitives().addListenerOnce(this.serviceObject, "idle", t)
        }, n.prototype.default_options = function () {
            return {
                mapTypeId: this.primitives().mapTypes("ROADMAP"),
                center: new(this.primitives().latLng)(0, 0),
                zoom: 8
            }
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, e = {}.hasOwnProperty,
        n = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    this.Gmaps.Google.Builders.Marker = function (e) {
        function i(e, n, i) {
            this.args = e, this.provider_options = null != n ? n : {}, this.internal_options = null != i ? i : {}, this.infowindow_binding = t(this.infowindow_binding, this), this.before_init(), this.create_marker(), this.create_infowindow(), this.after_init()
        }
        return n(i, e), i.CURRENT_INFOWINDOW = void 0, i.CACHE_STORE = {}, i.prototype.build = function () {
            return new(this.model_class())(this.serviceObject, this.infowindow)
        }, i.prototype.create_marker = function () {
            return this.serviceObject = new(this.primitives().marker)(this.marker_options())
        }, i.prototype.create_infowindow = function () {
            return _.isString(this.args.infowindow) ? (this.infowindow = new(this.primitives().infowindow)({
                content: this.args.infowindow
            }), this.bind_infowindow()) : null
        }, i.prototype.marker_options = function () {
            var t, e;
            return e = this._randomized_coordinates(), t = {
                title: this.args.marker_title,
                position: new(this.primitives().latLng)(e[0], e[1]),
                icon: this._get_picture("picture"),
                shadow: this._get_picture("shadow")
            }, _.extend(this.provider_options, t)
        }, i.prototype.bind_infowindow = function () {
            return this.addListener("click", this.infowindow_binding)
        }, i.prototype.infowindow_binding = function () {
            return this.panTo(), this._should_close_infowindow() && this.constructor.CURRENT_INFOWINDOW.close(), this.infowindow.open(this.getServiceObject().getMap(), this.getServiceObject()), this.constructor.CURRENT_INFOWINDOW = this.infowindow
        }, i.prototype.panTo = function () {
            return this.getServiceObject().getMap().panTo(this.getServiceObject().getPosition())
        }, i.prototype._get_picture = function (t) {
            return _.isObject(this.args[t]) && _.isString(this.args[t].url) ? this._create_or_retrieve_image(this._picture_args(t)) : null
        }, i.prototype._create_or_retrieve_image = function (t) {
            return void 0 === this.constructor.CACHE_STORE[t.url] && (this.constructor.CACHE_STORE[t.url] = new(this.primitives().markerImage)(t.url, t.size, t.origin, t.anchor, t.scaledSize)), this.constructor.CACHE_STORE[t.url]
        }, i.prototype._picture_args = function (t) {
            return {
                url: this.args[t].url,
                anchor: this._createImageAnchorPosition(this.args[t].anchor),
                size: new(this.primitives().size)(this.args[t].width, this.args[t].height),
                scaledSize: null,
                origin: null
            }
        }, i.prototype._createImageAnchorPosition = function (t) {
            return _.isArray(t) ? new(this.primitives().point)(t[0], t[1]) : null
        }, i.prototype._should_close_infowindow = function () {
            return this.internal_options.singleInfowindow && null != this.constructor.CURRENT_INFOWINDOW
        }, i.prototype._randomized_coordinates = function () {
            var t, e, n, i, r;
            return _.isNumber(this.internal_options.maxRandomDistance) ? (r = function () {
                return 2 * Math.random() - 1
            }, n = this.internal_options.maxRandomDistance * r(), i = this.internal_options.maxRandomDistance * r(), t = parseFloat(this.args.lat) + 180 / Math.PI * (i / 6378137), e = parseFloat(this.args.lng) + 90 / Math.PI * (n / 6378137) / Math.cos(this.args.lat), [t, e]) : [this.args.lat, this.args.lng]
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Polygon = function (t) {
        function n(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_polygon(), this.after_init()
        }
        return e(n, t), n.prototype.create_polygon = function () {
            return new(this.primitives().polygon)(this.polygon_options())
        }, n.prototype.polygon_options = function () {
            var t;
            return t = {
                path: this._build_path()
            }, _.defaults(t, this.provider_options)
        }, n.prototype._build_path = function () {
            var t = this;
            return _.map(this.args, function (e) {
                return new(t.primitives().latLng)(e.lat, e.lng)
            })
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Builders.Polyline = function (t) {
        function n(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_polyline(), this.after_init()
        }
        return e(n, t), n.prototype.create_polyline = function () {
            return new(this.primitives().polyline)(this.polyline_options())
        }, n.prototype.polyline_options = function () {
            var t;
            return t = {
                path: this._build_path()
            }, _.defaults(t, this.provider_options)
        }, n.prototype._build_path = function () {
            var t = this;
            return _.map(this.args, function (e) {
                return new(t.primitives().latLng)(e.lat, e.lng)
            })
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Bound = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.include(Gmaps.Google.Objects.Common), n.prototype.extendWith = function (t) {
            var e, n = this;
            return e = _.isArray(t) ? t : [t], _.each(e, function (t) {
                return t.updateBounds(n)
            })
        }, n.prototype.extend = function (t) {
            return this.getServiceObject().extend(this.primitives().latLngFromPosition(t))
        }, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Circle = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.include(Gmaps.Google.Objects.Common), n.prototype.updateBounds = function (t) {
            return t.extend(this.getServiceObject().getBounds().getNorthEast()), t.extend(this.getServiceObject().getBounds().getSouthWest())
        }, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    this.Gmaps.Google.Objects.Clusterer = function () {
        function e(e) {
            this.serviceObject = e, this.clear = t(this.clear, this), this.addMarker = t(this.addMarker, this), this.addMarkers = t(this.addMarkers, this)
        }
        return e.prototype.addMarkers = function (t) {
            var e = this;
            return _.each(t, function (t) {
                return e.addMarker(t)
            })
        }, e.prototype.addMarker = function (t) {
            return this.serviceObject.addMarker(t.serviceObject)
        }, e.prototype.clear = function () {
            return this.serviceObject.clearMarkers()
        }, e
    }()
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Kml = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.prototype.updateBounds = function () {}, n.prototype.setMap = function (t) {
            return this.getServiceObject().setMap(t)
        }, n.prototype.getServiceObject = function () {
            return this.serviceObject
        }, n.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Map = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.prototype.getServiceObject = function () {
            return this.serviceObject
        }, n.prototype.centerOn = function (t) {
            return this.getServiceObject().setCenter(this.primitives().latLngFromPosition(t))
        }, n.prototype.fitToBounds = function (t) {
            return t.isEmpty() ? void 0 : this.getServiceObject().fitBounds(t)
        }, n.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Marker = function (t) {
        function n(t, e) {
            this.serviceObject = t, this.infowindow = e
        }
        return e(n, t), n.include(Gmaps.Google.Objects.Common), n.prototype.updateBounds = function (t) {
            return t.extend(this.getServiceObject().position)
        }, n.prototype.panTo = function () {
            return this.getServiceObject().getMap().panTo(this.getServiceObject().getPosition())
        }, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Polygon = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.include(Gmaps.Google.Objects.Common), n.prototype.updateBounds = function () {}, n
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    this.Gmaps.Google.Objects.Polyline = function (t) {
        function n(t) {
            this.serviceObject = t
        }
        return e(n, t), n.include(Gmaps.Google.Objects.Common), n.prototype.updateBounds = function () {}, n
    }(Gmaps.Base)
}.call(this),
function () {
    this.Gmaps.Google.Primitives = function () {
        var t;
        return t = {
            point: google.maps.Point,
            size: google.maps.Size,
            circle: google.maps.Circle,
            latLng: google.maps.LatLng,
            latLngBounds: google.maps.LatLngBounds,
            map: google.maps.Map,
            mapTypez: google.maps.MapTypeId,
            markerImage: google.maps.MarkerImage,
            marker: google.maps.Marker,
            infowindow: google.maps.InfoWindow,
            listener: google.maps.event.addListener,
            clusterer: MarkerClusterer,
            listenerOnce: google.maps.event.addListenerOnce,
            polyline: google.maps.Polyline,
            polygon: google.maps.Polygon,
            kml: google.maps.KmlLayer,
            addListener: function (e, n, i) {
                return t.listener(e, n, i)
            },
            addListenerOnce: function (e, n, i) {
                return t.listenerOnce(e, n, i)
            },
            mapTypes: function (e) {
                return t.mapTypez[e]
            },
            latLngFromPosition: function (e) {
                return _.isArray(e) ? new t.latLng(e[0], e[1]) : _.isNumber(e.lat) && _.isNumber(e.lng) ? new t.latLng(e.lat, e.lng) : e
            }
        }
    }
}.call(this),
function () {}.call(this), ! function (t) {
    "use strict";
    t(function () {
        t.support.transition = function () {
            var t = function () {
                var t, e = document.createElement("bootstrap"),
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (t in n)
                    if (void 0 !== e.style[t]) return n[t]
            }();
            return t && {
                end: t
            }
        }()
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function (n) {
            t(n).on("click", e, this.close)
        };
    n.prototype.close = function (e) {
        function n() {
            i.trigger("closed").remove()
        }
        var i, r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), i = t(o), e && e.preventDefault(), i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(e = t.Event("close")), e.isDefaultPrevented() || (i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.on(t.support.transition.end, n) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("alert");
            r || i.data("alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = i, this
    }, t(document).on("click.alert.data-api", e, n.prototype.close)
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var e = this,
                n = t.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), n && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), n ? e.$element.one(t.support.transition.end, function () {
                    e.$element.focus().trigger("shown")
                }) : e.$element.focus().trigger("shown")
            }))
        },
        hide: function (e) {
            e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function () {
            var e = this;
            t(document).on("focusin.modal", function (t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        },
        escape: function () {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var e = this,
                n = setTimeout(function () {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function () {
                clearTimeout(n), e.hideModal()
            })
        },
        hideModal: function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.removeBackdrop(), t.$element.trigger("hidden")
            })
        },
        removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (e) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && n;
                if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                i ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
        }
    };
    var n = t.fn.modal;
    t.fn.modal = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("modal"),
                o = t.extend({}, t.fn.modal.defaults, i.data(), "object" == typeof n && n);
            r || i.data("modal", r = new e(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function (e) {
        var n = t(this),
            i = n.attr("href"),
            r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
        e.preventDefault(), r.modal(o).one("hide", function () {
            n.focus()
        })
    })
}(window.jQuery), ! function (t) {
    "use strict";

    function e() {
        t(".dropdown-backdrop").remove(), t(i).each(function () {
            n(t(this)).removeClass("open")
        })
    }

    function n(e) {
        var n, i = e.attr("data-target");
        return i || (i = e.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), n = i && t(i), n && n.length || (n = e.parent()), n
    }
    var i = "[data-toggle=dropdown]",
        r = function (e) {
            var n = t(e).on("click.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    r.prototype = {
        constructor: r,
        toggle: function () {
            var i, r, o = t(this);
            if (!o.is(".disabled, :disabled")) return i = n(o), r = i.hasClass("open"), e(), r || ("ontouchstart" in document.documentElement && t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click", e), i.toggleClass("open")), o.focus(), !1
        },
        keydown: function (e) {
            var r, o, a, s, u;
            if (/(38|40|27)/.test(e.keyCode) && (r = t(this), e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled"))) {
                if (a = n(r), s = a.hasClass("open"), !s || s && 27 == e.keyCode) return 27 == e.which && a.find(i).focus(), r.click();
                o = t("[role=menu] li:not(.divider):visible a", a), o.length && (u = o.index(o.filter(":focus")), 38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < o.length - 1 && u++, ~u || (u = 0), o.eq(u).focus())
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown)
}(window.jQuery), ! function (t) {
    "use strict";

    function e(e, n) {
        var i, r = t.proxy(this.process, this),
            o = t(e).is("body") ? t(window) : t(e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, n), this.$scrollElement = o.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (i = t(e).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
    }
    e.prototype = {
        constructor: e,
        refresh: function () {
            var e, n = this;
            this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function () {
                var e = t(this),
                    i = e.data("target") || e.attr("href"),
                    r = /^#\w/.test(i) && t(i);
                return r && r.length && [
                    [r.position().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
                ] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        },
        process: function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                i = n - this.$scrollElement.height(),
                r = this.offsets,
                o = this.targets,
                a = this.activeTarget;
            if (e >= i) return a != (t = o.last()[0]) && this.activate(t);
            for (t = r.length; t--;) a != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
        },
        activate: function (e) {
            var n, i;
            this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = t(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {
        offset: 10
    }, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        show: function () {
            var e, n, i, r = this.element,
                o = r.closest("ul:not(.dropdown-menu)"),
                a = r.attr("data-target");
            a || (a = r.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], i = t.Event("show", {
                relatedTarget: e
            }), r.trigger(i), i.isDefaultPrevented() || (n = t(a), this.activate(r.parent("li"), o), this.activate(n, n.parent(), function () {
                r.trigger({
                    type: "shown",
                    relatedTarget: e
                })
            })))
        },
        activate: function (e, n, i) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
            }
            var o = n.find("> .active"),
                a = i && t.support.transition && o.hasClass("fade");
            a ? o.one(t.support.transition.end, r) : r(), o.removeClass("in")
        }
    };
    var n = t.fn.tab;
    t.fn.tab = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("tab");
            r || i.data("tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("tooltip", t, e)
    };
    e.prototype = {
        constructor: e,
        init: function (e, n, i) {
            var r, o, a, s, u;
            for (this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.enabled = !0, a = this.options.trigger.split(" "), u = a.length; u--;) s = a[u], "click" == s ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != s && (r = "hover" == s ? "mouseenter" : "focus", o = "hover" == s ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (e) {
            return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        },
        enter: function (e) {
            var n, i = t.fn[this.type].defaults,
                r = {};
            return this._options && t.each(this._options, function (t, e) {
                i[t] != e && (r[t] = e)
            }, this), n = t(e.currentTarget)[this.type](r).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show), void 0) : n.show()
        },
        leave: function (e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", this.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide), void 0) : n.hide()
        },
        show: function () {
            var e, n, i, r, o, a, s = t.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), n = this.getPosition(), i = e[0].offsetWidth, r = e[0].offsetHeight, o) {
                case "bottom":
                    a = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case "top":
                    a = {
                        top: n.top - r,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;
                case "left":
                    a = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left - i
                    };
                    break;
                case "right":
                    a = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left + n.width
                    }
                }
                this.applyPlacement(a, o), this.$element.trigger("shown")
            }
        },
        applyPlacement: function (t, e) {
            var n, i, r, o, a = this.tip(),
                s = a[0].offsetWidth,
                u = a[0].offsetHeight;
            a.offset(t).addClass(e).addClass("in"), n = a[0].offsetWidth, i = a[0].offsetHeight, "top" == e && i != u && (t.top = t.top + u - i, o = !0), "bottom" == e || "top" == e ? (r = 0, t.left < 0 && (r = -2 * t.left, t.left = 0, a.offset(t), n = a[0].offsetWidth, i = a[0].offsetHeight), this.replaceArrow(r - s + n, n, "left")) : this.replaceArrow(i - u, i, "top"), o && a.offset(t)
        },
        replaceArrow: function (t, e, n) {
            this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
        },
        setContent: function () {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function e() {
                var e = setTimeout(function () {
                    n.off(t.support.transition.end).detach()
                }, 500);
                n.one(t.support.transition.end, function () {
                    clearTimeout(e), n.detach()
                })
            }
            var n = this.tip(),
                i = t.Event("hide");
            return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : n.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function () {
            var e = this.$element[0];
            return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function () {
            var t, e = this.$element,
                n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        },
        tip: function () {
            return this.$tip = this.$tip || t(this.options.template)
        },
        arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function (e) {
            var n = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("tooltip"),
                o = "object" == typeof n && n;
            r || i.data("tooltip", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e,
        setContent: function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var t, e = this.$element,
                n = this.options;
            return t = ("function" == typeof n.content ? n.content.call(e[0]) : n.content) || e.attr("data-content")
        },
        tip: function () {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("popover"),
                o = "object" == typeof n && n;
            r || i.data("popover", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, n)
    };
    e.prototype.setState = function (t) {
        var e = "disabled",
            n = this.$element,
            i = n.data(),
            r = n.is("input") ? "val" : "html";
        t += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[t] || this.options[t]), setTimeout(function () {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("button"),
                o = "object" == typeof n && n;
            r || i.data("button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, t.fn.button.defaults = {
        loadingText: "loading..."
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.button.data-api", "[data-toggle^=button]", function (e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, n), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.prototype = {
        constructor: e,
        dimension: function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        },
        show: function () {
            var e, n, i, r;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (e = this.dimension(), n = t.camelCase(["scroll", e].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
                    if (r = i.data("collapse"), r && r.transitioning) return;
                    i.collapse("hide"), r || i.data("collapse", null)
                }
                this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][n])
            }
        },
        hide: function () {
            var e;
            !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
        },
        reset: function (t) {
            var e = this.dimension();
            return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function (e, n, i) {
            var r = this,
                o = function () {
                    "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i)
                };
            this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
        },
        toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var n = t.fn.collapse;
    t.fn.collapse = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("collapse"),
                o = t.extend({}, t.fn.collapse.defaults, i.data(), "object" == typeof n && n);
            r || i.data("collapse", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.collapse.defaults = {
        toggle: !0
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (e) {
        var n, i = t(this),
            r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(r).data("collapse") ? "toggle" : i.data();
        i[t(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(r).collapse(o)
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.prototype = {
        cycle: function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function (e) {
            var n = this.getActiveIndex(),
                i = this;
            if (!(e > this.$items.length - 1 || 0 > e)) return this.sliding ? this.$element.one("slid", function () {
                i.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
        },
        pause: function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function () {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function () {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function (e, n) {
            var i, r = this.$element.find(".item.active"),
                o = n || r[e](),
                a = this.interval,
                s = "next" == e ? "left" : "right",
                u = "next" == e ? "first" : "last",
                l = this;
            if (this.sliding = !0, a && this.pause(), o = o.length ? o : this.$element.find(".item")[u](), i = t.Event("slide", {
                relatedTarget: o[0],
                direction: s
            }), !o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                    var e = t(l.$indicators.children()[l.getActiveIndex()]);
                    e && e.addClass("active")
                })), t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                    o.addClass(e), o[0].offsetWidth, r.addClass(s), o.addClass(s), this.$element.one(t.support.transition.end, function () {
                        o.removeClass([e, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                            l.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                    r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return a && this.cycle(), this
            }
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("carousel"),
                o = t.extend({}, t.fn.carousel.defaults, "object" == typeof n && n),
                a = "string" == typeof n ? n : o.slide;
            r || i.data("carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }, t.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var n, i, r = t(this),
            o = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = t.extend({}, o.data(), r.data());
        o.carousel(a), (i = r.attr("data-slide-to")) && o.data("carousel").pause().to(i).cycle(), e.preventDefault()
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
    };
    e.prototype = {
        constructor: e,
        select: function () {
            var t = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(t)).change(), this.hide()
        },
        updater: function (t) {
            return t
        },
        show: function () {
            var e = t.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: e.top + e.height,
                left: e.left
            }).show(), this.shown = !0, this
        },
        hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function () {
            var e;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (e = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, e ? this.process(e) : this)
        },
        process: function (e) {
            var n = this;
            return e = t.grep(e, function (t) {
                return n.matcher(t)
            }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function (t) {
            return~ t.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (t) {
            for (var e, n = [], i = [], r = []; e = t.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? i.push(e) : r.push(e) : n.push(e);
            return n.concat(i, r)
        },
        highlighter: function (t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(new RegExp("(" + e + ")", "ig"), function (t, e) {
                return "<strong>" + e + "</strong>"
            })
        },
        render: function (e) {
            var n = this;
            return e = t(e).map(function (e, i) {
                return e = t(n.options.item).attr("data-value", i), e.find("a").html(n.highlighter(i)), e[0]
            }), e.first().addClass("active"), this.$menu.html(e), this
        },
        next: function () {
            var e = this.$menu.find(".active").removeClass("active"),
                n = e.next();
            n.length || (n = t(this.$menu.find("li")[0])), n.addClass("active")
        },
        prev: function () {
            var t = this.$menu.find(".active").removeClass("active"),
                e = t.prev();
            e.length || (e = this.$menu.find("li").last()), e.addClass("active")
        },
        listen: function () {
            this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
        },
        eventSupported: function (t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        },
        move: function (t) {
            if (this.shown) {
                switch (t.keyCode) {
                case 9:
                case 13:
                case 27:
                    t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.prev();
                    break;
                case 40:
                    t.preventDefault(), this.next()
                }
                t.stopPropagation()
            }
        },
        keydown: function (e) {
            this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
        },
        keypress: function (t) {
            this.suppressKeyPressRepeat || this.move(t)
        },
        keyup: function (t) {
            switch (t.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
            case 13:
                if (!this.shown) return;
                this.select();
                break;
            case 27:
                if (!this.shown) return;
                this.hide();
                break;
            default:
                this.lookup()
            }
            t.stopPropagation(), t.preventDefault()
        },
        focus: function () {
            this.focused = !0
        },
        blur: function () {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function (t) {
            t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function (e) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
        },
        mouseleave: function () {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var n = t.fn.typeahead;
    t.fn.typeahead = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("typeahead"),
                o = "object" == typeof n && n;
            r || i.data("typeahead", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function () {
        return t.fn.typeahead = n, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function () {
        var e = t(this);
        e.data("typeahead") || e.typeahead(e.data())
    })
}(window.jQuery), ! function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = t.extend({}, t.fn.affix.defaults, n), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = t(e), this.checkPosition()
    };
    e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e, n = t(document).height(),
                i = this.$window.scrollTop(),
                r = this.$element.offset(),
                o = this.options.offset,
                a = o.bottom,
                s = o.top,
                u = "affix affix-top affix-bottom";
            "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top()), "function" == typeof a && (a = o.bottom()), e = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= i ? "top" : !1, this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? r.top - i : null, this.$element.removeClass(u).addClass("affix" + (e ? "-" + e : "")))
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function (n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("affix"),
                o = "object" == typeof n && n;
            r || i.data("affix", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {
        offset: 0
    }, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this),
                n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
        })
    })
}(window.jQuery),
function () {
    var t, e, n, i, r, o, a, s, u, l, c, p, d, h, f, m, g, v, y, b, w, k, x, T, C, _, D, S, j, E, N, M, O, $, A, H, F, L, R, I, P, B, q, U, W, G = {}.hasOwnProperty,
        z = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    a = 10, p = null, N = null, k = null, _ = {}, l = null, L = (null != (W = document.cookie.match(/request_method=(\w+)/)) ? W[1].toUpperCase() : void 0) || "", U = null, g = function (t) {
        var e;
        return B("page:fetch"), e = H(t), null != U && U.abort(), U = new XMLHttpRequest, U.open("GET", e, !0), U.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), U.setRequestHeader("X-XHR-Referer", N), U.onload = function () {
            var e;
            return B("page:receive"), (e = j()) ? (M(t), s.apply(null, f(e)), O(), document.location.hash ? document.location.href = document.location.href : I(), B("page:load")) : document.location.href = t
        }, U.onloadend = function () {
            return U = null
        }, U.onabort = function () {
            return A()
        }, U.onerror = function () {
            return document.location.href = t
        }, U.send()
    }, m = function (t) {
        var e;
        return o(), e = _[t], null != U && U.abort(), s(e.title, e.body), E(e), B("page:restore")
    }, o = function () {
        return _[p.position] = {
            url: document.location.href,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset
        }, u(a)
    }, S = function (t) {
        return null == t && (t = a), /^[\d]+$/.test(t) ? a = parseInt(t) : void 0
    }, u = function (t) {
        var e, n;
        for (e in _) G.call(_, e) && (n = _[e], e <= p.position - t && (_[e] = null))
    }, s = function (e, n, i, r) {
        return document.title = e, document.documentElement.replaceChild(n, document.body), null != i && t.update(i), F(), r && d(), p = window.history.state, B("page:change")
    }, d = function () {
        var t, e, n, i, r, o, a, s, u, l, c, p;
        for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, u = o.length; u > a; a++)
            if (r = o[a], "" === (c = r.type) || "text/javascript" === c) {
                for (e = document.createElement("script"), p = r.attributes, s = 0, l = p.length; l > s; s++) t = p[s], e.setAttribute(t.name, t.value);
                e.appendChild(document.createTextNode(r.innerHTML)), i = r.parentNode, n = r.nextSibling, i.removeChild(r), i.insertBefore(e, n)
            }
    }, F = function () {
        var t, e, n, i;
        for (e = Array.prototype.slice.call(document.body.getElementsByTagName("noscript")), n = 0, i = e.length; i > n; n++) t = e[n], t.parentNode.removeChild(t)
    }, M = function (t) {
        return t !== N ? window.history.pushState({
            turbolinks: !0,
            position: p.position + 1
        }, "", t) : void 0
    }, O = function () {
        var t, e;
        return (t = U.getResponseHeader("X-XHR-Redirected-To")) ? (e = H(t) === t ? document.location.hash : "", window.history.replaceState(p, "", t + e)) : void 0
    }, A = function () {
        return window.history.replaceState({
            turbolinks: !0,
            position: Date.now()
        }, "", document.location.href)
    }, $ = function () {
        return p = window.history.state
    }, E = function (t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, I = function () {
        return window.scrollTo(0, 0)
    }, H = function (t) {
        var e;
        return e = t, null == t.href && (e = document.createElement("A"), e.href = t), e.href.replace(e.hash, "")
    }, B = function (t) {
        var e;
        return e = document.createEvent("Events"), e.initEvent(t, !0, !0), document.dispatchEvent(e)
    }, D = function () {
        return !B("page:before-change")
    }, j = function () {
        var t, e, n, i, r, o;
        return e = function () {
            var t;
            return 400 <= (t = U.status) && 600 > t
        }, o = function () {
            return U.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function (t) {
            var e, n, i, r, o;
            for (r = t.head.childNodes, o = [], n = 0, i = r.length; i > n; n++) e = r[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && o.push(e.src || e.href);
            return o
        }, t = function (t) {
            var e;
            return k || (k = i(document)), e = i(t), e.length !== k.length || r(e, k).length !== k.length
        }, r = function (t, e) {
            var n, i, r, o, a;
            for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), a = [], i = 0, r = t.length; r > i; i++) n = t[i], z.call(e, n) >= 0 && a.push(n);
            return a
        }, !e() && o() && (n = l(U.responseText), n && !t(n)) ? n : void 0
    }, f = function (e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, e.body, t.get(e).token, "runScripts"]
    }, t = {
        get: function (t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'),
                token: null != e ? "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0 : void 0
            }
        },
        update: function (t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, n = function () {
        var t, e, n, i, r, o;
        e = function (t) {
            return (new DOMParser).parseFromString(t, "text/html")
        }, t = function (t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, e
        }, n = function (t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.open("replace"), e.write(t), e.close(), e
        };
        try {
            if (window.DOMParser) return r = e("<html><body><p>test"), e
        } catch (a) {
            return i = a, r = t("<html><body><p>test"), t
        } finally {
            if (1 !== (null != r ? null != (o = r.body) ? o.childNodes.length : void 0 : void 0)) return n
        }
    }, w = function (t) {
        return t.defaultPrevented ? void 0 : (document.removeEventListener("click", v, !1), document.addEventListener("click", v, !1))
    }, v = function (t) {
        var e;
        return t.defaultPrevented || (e = h(t), "A" !== e.nodeName || y(t, e)) ? void 0 : (D() || q(e.href), t.preventDefault())
    }, h = function (t) {
        var e;
        for (e = t.target; e.parentNode && "A" !== e.nodeName;) e = e.parentNode;
        return e
    }, c = function (t) {
        return location.protocol !== t.protocol || location.host !== t.host
    }, e = function (t) {
        return (t.hash && H(t)) === H(location) || t.href === location.href + "#"
    }, T = function (t) {
        var e;
        return e = H(t), e.match(/\.[a-z]+(\?.*)?$/g) && !e.match(/\.html?(\?.*)?$/g)
    }, x = function (t) {
        for (var e; !e && t !== document;) e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
        return e
    }, P = function (t) {
        return 0 !== t.target.length
    }, C = function (t) {
        return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
    }, y = function (t, n) {
        return c(n) || e(n) || T(n) || x(n) || P(n) || C(t)
    }, b = function () {
        return A(), $(), l = n(), document.addEventListener("click", w, !0), window.addEventListener("popstate", function (t) {
            var e;
            return e = t.state, (null != e ? e.turbolinks : void 0) ? _[e.position] ? m(e.position) : q(t.target.location.href) : void 0
        }, !1)
    }, r = window.history && window.history.pushState && window.history.replaceState && void 0 !== window.history.state, i = !navigator.userAgent.match(/CriOS\//), R = "GET" === L || "" === L, r && i && R ? (q = function (t) {
        return N = document.location.href, o(), g(t)
    }, b()) : q = function (t) {
        return document.location.href = t
    }, this.Turbolinks = {
        visit: q,
        pagesCached: S
    }
}.call(this),
function (t, e) {
    function n() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function i() {
        var t = new Date;
        return n(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function r(e, n) {
        var i, r = t(e).data(),
            o = {}, a = new RegExp("^" + n.toLowerCase() + "([A-Z])"),
            n = new RegExp("^" + n.toLowerCase());
        for (var s in r) n.test(s) && (i = s.replace(a, function (t, e) {
            return e.toLowerCase()
        }), o[i] = r[s]);
        return o
    }

    function o(e) {
        var n = {};
        if (d[e] || (e = e.split("-")[0], d[e])) {
            var i = d[e];
            return t.each(p, function (t, e) {
                e in i && (n[e] = i[e])
            }), n
        }
    }
    var a = t(window),
        s = function (n, r) {
            this.date = e, this.viewDate = i(), this._process_options(r), this.element = t(n), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(h.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
                return parseInt(e) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    s.prototype = {
        constructor: s,
        _process_options: function (e) {
            this._o = t.extend({}, this._o, e);
            var n = this.o = t.extend({}, this._o),
                i = n.language;
            switch (d[i] || (i = i.split("-")[0], d[i] || (i = c.language)), n.language = i, n.startView) {
            case 2:
            case "decade":
                n.startView = 2;
                break;
            case 1:
            case "year":
                n.startView = 1;
                break;
            default:
                n.startView = 0
            }
            switch (n.minViewMode) {
            case 1:
            case "months":
                n.minViewMode = 1;
                break;
            case 2:
            case "years":
                n.minViewMode = 2;
                break;
            default:
                n.minViewMode = 0
            }
            n.startView = Math.max(n.startView, n.minViewMode), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
            var r = h.parseFormat(n.format);
            n.startDate !== -1 / 0 && (n.startDate = n.startDate ? n.startDate instanceof Date ? this._local_to_utc(this._zero_time(n.startDate)) : h.parseDate(n.startDate, r, n.language) : -1 / 0), 1 / 0 !== n.endDate && (n.endDate = n.endDate ? n.endDate instanceof Date ? this._local_to_utc(this._zero_time(n.endDate)) : h.parseDate(n.endDate, r, n.language) : 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10)
            });
            var o = String(n.orientation).toLowerCase().split(/\s+/g),
                a = n.orientation.toLowerCase();
            if (o = t.grep(o, function (t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), n.orientation = {
                x: "auto",
                y: "auto"
            }, a && "auto" !== a)
                if (1 === o.length) switch (o[0]) {
                case "top":
                case "bottom":
                    n.orientation.y = o[0];
                    break;
                case "left":
                case "right":
                    n.orientation.x = o[0]
                } else a = t.grep(o, function (t) {
                    return /^left|right$/.test(t)
                }), n.orientation.x = a[0] || "auto", a = t.grep(o, function (t) {
                    return /^top|bottom$/.test(t)
                }), n.orientation.y = a[0] || "auto";
                else;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (t) {
            for (var e, n, i = 0; i < t.length; i++) e = t[i][0], n = t[i][1], e.on(n)
        },
        _unapplyEvents: function (t) {
            for (var e, n, i = 0; i < t.length; i++) e = t[i][0], n = t[i][1], e.off(n)
        },
        _buildEvents: function () {
            this.isInput ? this._events = [
                [this.element, {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function () {
                        this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function () {
                        this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this)
                }]
            ], this._secondaryEvents = [
                [this.picker, {
                    click: t.proxy(this.click, this)
                }],
                [t(window), {
                    resize: t.proxy(this.place, this)
                }],
                [t(document), {
                    "mousedown touchstart": t.proxy(function (t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (e, n) {
            var i = n || this.date,
                r = this._utc_to_local(i);
            this.element.trigger({
                type: e,
                date: r,
                format: t.proxy(function (t) {
                    var e = t || this.o.format;
                    return h.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function (t) {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), t && t.preventDefault(), this._trigger("show")
        },
        hide: function () {
            this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function () {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        },
        _utc_to_local: function (t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function (t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            return this.date
        },
        setDate: function (t) {
            this.setUTCDate(this._local_to_utc(t))
        },
        setUTCDate: function (t) {
            this.date = t, this.setValue()
        },
        setValue: function () {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
        },
        getFormattedDate: function (t) {
            return t === e && (t = this.o.format), h.formatDate(this.date, t, this.o.language)
        },
        setStartDate: function (t) {
            this._process_options({
                startDate: t
            }), this.update(), this.updateNavArrows()
        },
        setEndDate: function (t) {
            this._process_options({
                endDate: t
            }), this.update(), this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function (t) {
            this._process_options({
                daysOfWeekDisabled: t
            }), this.update(), this.updateNavArrows()
        },
        place: function () {
            if (!this.isInline) {
                var e = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = 10,
                    r = a.width(),
                    o = a.height(),
                    s = a.scrollTop(),
                    u = parseInt(this.element.parents().filter(function () {
                        return "auto" != t(this).css("z-index")
                    }).first().css("z-index")) + 10,
                    l = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    p = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    d = l.left,
                    h = l.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - p)) : (this.picker.addClass("datepicker-orient-left"), l.left < 0 ? d -= l.left - i : l.left + e > r && (d = r - e - i));
                var f, m, g = this.o.orientation.y;
                "auto" === g && (f = -s + l.top - n, m = s + o - (l.top + c + n), g = Math.max(f, m) === m ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? h += c : h -= n + parseInt(this.picker.css("padding-top")), this.picker.css({
                    top: h,
                    left: d,
                    zIndex: u
                })
            }
        },
        _allow_update: !0,
        update: function () {
            if (this._allow_update) {
                var t, n = this.date && new Date(this.date),
                    i = !1;
                arguments.length ? (t = arguments[0], t instanceof Date && (t = this._local_to_utc(t)), i = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = h.parseDate(t, this.o.format, this.o.language), this.date < this.o.startDate ? (this.viewDate = new Date(this.o.startDate), this.date = new Date(this.o.startDate)) : this.date > this.o.endDate ? (this.viewDate = new Date(this.o.endDate), this.date = new Date(this.o.endDate)) : this.date ? (this.viewDate = new Date(this.date), this.date = new Date(this.date)) : this.date = e, i ? this.setValue() : t && n && this.date && n.getTime() !== this.date.getTime() && this._trigger("changeDate"), !this.date && n && this._trigger("clearDate"), this.fill()
            }
        },
        fillDow: function () {
            var t = this.o.weekStart,
                e = "<tr>";
            if (this.o.calendarWeeks) {
                var n = '<th class="cw">&nbsp;</th>';
                e += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + d[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function () {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + d[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function (e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function (e) {
            var n = [],
                i = this.viewDate.getUTCFullYear(),
                r = this.viewDate.getUTCMonth(),
                o = this.date && this.date.valueOf(),
                a = new Date;
            return e.getUTCFullYear() < i || e.getUTCFullYear() == i && e.getUTCMonth() < r ? n.push("old") : (e.getUTCFullYear() > i || e.getUTCFullYear() == i && e.getUTCMonth() > r) && n.push("new"), this.o.todayHighlight && e.getUTCFullYear() == a.getFullYear() && e.getUTCMonth() == a.getMonth() && e.getUTCDate() == a.getDate() && n.push("today"), e.valueOf() == o && n.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 != t.inArray(e.valueOf(), this.range) && n.push("selected")), n
        },
        fill: function () {
            var i, r = new Date(this.viewDate),
                o = r.getUTCFullYear(),
                a = r.getUTCMonth(),
                s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                u = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                c = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[a] + " " + o), this.picker.find("tfoot th.today").text(d[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(d[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
            var p = n(o, a - 1, 28),
                f = h.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
            p.setUTCDate(f), p.setUTCDate(f - (p.getUTCDay() - this.o.weekStart + 7) % 7);
            var m = new Date(p);
            m.setUTCDate(m.getUTCDate() + 42), m = m.valueOf();
            for (var g, v = []; p.valueOf() < m;) {
                if (p.getUTCDay() == this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
                    var y = new Date(+p + 864e5 * ((this.o.weekStart - p.getUTCDay() - 7) % 7)),
                        b = new Date(+y + 864e5 * ((11 - y.getUTCDay()) % 7)),
                        w = new Date(+(w = n(b.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - w.getUTCDay()) % 7)),
                        k = (b - w) / 864e5 / 7 + 1;
                    v.push('<td class="cw">' + k + "</td>")
                }
                if (g = this.getClassNames(p), g.push("day"), this.o.beforeShowDay !== t.noop) {
                    var x = this.o.beforeShowDay(this._utc_to_local(p));
                    x === e ? x = {} : "boolean" == typeof x ? x = {
                        enabled: x
                    } : "string" == typeof x && (x = {
                        classes: x
                    }), x.enabled === !1 && g.push("disabled"), x.classes && (g = g.concat(x.classes.split(/\s+/))), x.tooltip && (i = x.tooltip)
                }
                g = t.unique(g), v.push('<td class="' + g.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + p.getUTCDate() + "</td>"), p.getUTCDay() == this.o.weekEnd && v.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
            var T = this.date && this.date.getUTCFullYear(),
                C = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");
            T && T == o && C.eq(this.date && this.date.getUTCMonth()).addClass("active"), (s > o || o > l) && C.addClass("disabled"), o == s && C.slice(0, u).addClass("disabled"), o == l && C.slice(c + 1).addClass("disabled"), v = "", o = 10 * parseInt(o / 10, 10);
            var _ = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");
            o -= 1;
            for (var D = -1; 11 > D; D++) v += '<span class="year' + (-1 == D ? " old" : 10 == D ? " new" : "") + (T == o ? " active" : "") + (s > o || o > l ? " disabled" : "") + '">' + o + "</span>", o += 1;
            _.html(v)
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    n = t.getUTCMonth();
                switch (this.viewMode) {
                case 0:
                    this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 1:
                case 2:
                    this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    })
                }
            }
        },
        click: function (e) {
            e.preventDefault();
            var i, r, o, a = t(e.target).closest("span, td, th");
            if (1 == a.length) switch (a[0].nodeName.toLowerCase()) {
            case "th":
                switch (a[0].className) {
                case "datepicker-switch":
                    this.showMode(1);
                    break;
                case "prev":
                case "next":
                    var s = h.modes[this.viewMode].navStep * ("prev" == a[0].className ? -1 : 1);
                    switch (this.viewMode) {
                    case 0:
                        this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate);
                        break;
                    case 1:
                    case 2:
                        this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                    }
                    this.fill();
                    break;
                case "today":
                    var u = new Date;
                    u = n(u.getFullYear(), u.getMonth(), u.getDate(), 0, 0, 0), this.showMode(-2);
                    var l = "linked" == this.o.todayBtn ? null : "view";
                    this._setDate(u, l);
                    break;
                case "clear":
                    var c;
                    this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                }
                break;
            case "span":
                a.is(".disabled") || (this.viewDate.setUTCDate(1), a.is(".month") ? (o = 1, r = a.parent().find("span").index(a), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(r), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(n(i, r, o))) : (o = 1, r = 0, i = parseInt(a.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(i, r, o))), this.showMode(-1), this.fill());
                break;
            case "td":
                a.is(".day") && !a.is(".disabled") && (o = parseInt(a.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), a.is(".old") ? 0 === r ? (r = 11, i -= 1) : r -= 1 : a.is(".new") && (11 == r ? (r = 0, i += 1) : r += 1), this._setDate(n(i, r, o)))
            }
        },
        _setDate: function (t, e) {
            e && "date" != e || (this.date = t && new Date(t)), e && "view" != e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || e && "date" != e || this.hide()
        },
        moveMonth: function (t, n) {
            if (!t) return e;
            if (!n) return t;
            var i, r, o = new Date(t.valueOf()),
                a = o.getUTCDate(),
                s = o.getUTCMonth(),
                u = Math.abs(n);
            if (n = n > 0 ? 1 : -1, 1 == u) r = -1 == n ? function () {
                return o.getUTCMonth() == s
            } : function () {
                return o.getUTCMonth() != i
            }, i = s + n, o.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
            else {
                for (var l = 0; u > l; l++) o = this.moveMonth(o, n);
                i = o.getUTCMonth(), o.setUTCDate(a), r = function () {
                    return i != o.getUTCMonth()
                }
            }
            for (; r();) o.setUTCDate(--a), o.setUTCMonth(i);
            return o
        },
        moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function (t) {
            if (this.picker.is(":not(:visible)")) return 27 == t.keyCode && this.show(), void 0;
            var e, n, r, o = !1;
            switch (t.keyCode) {
            case 27:
                this.hide(), t.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation) break;
                e = 37 == t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.date || i(), e), r = this.moveYear(this.viewDate, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.date || i(), e), r = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.date || i()), n.setUTCDate(n.getUTCDate() + e), r = new Date(this.viewDate), r.setUTCDate(this.viewDate.getUTCDate() + e)), this.dateWithinRange(n) && (this.date = n, this.viewDate = r, this.setValue(), this.update(), t.preventDefault(), o = !0);
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation) break;
                e = 38 == t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.date || i(), e), r = this.moveYear(this.viewDate, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.date || i(), e), r = this.moveMonth(this.viewDate, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.date || i()), n.setUTCDate(this.date.getUTCDate() + 7 * e), r = new Date(this.viewDate), r.setUTCDate(this.viewDate.getUTCDate() + 7 * e)), this.dateWithinRange(n) && (this.date = n, this.viewDate = r, this.setValue(), this.update(), t.preventDefault(), o = !0);
                break;
            case 13:
                this.hide(), t.preventDefault();
                break;
            case 9:
                this.hide()
            }
            if (o) {
                this._trigger("changeDate");
                var a;
                this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.change()
            }
        },
        showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + h.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    var u = function (e, n) {
        this.element = t(e), this.inputs = t.map(n.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete n.inputs, t(this.inputs).datepicker(n).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    u.prototype = {
        updateDates: function () {
            this.dates = t.map(this.pickers, function (t) {
                return t.date
            }), this.updateRanges()
        },
        updateRanges: function () {
            var e = t.map(this.dates, function (t) {
                return t.valueOf()
            });
            t.each(this.pickers, function (t, n) {
                n.setRange(e)
            })
        },
        dateUpdated: function (e) {
            var n = t(e.target).data("datepicker"),
                i = n.getUTCDate(),
                r = t.inArray(e.target, this.inputs),
                o = this.inputs.length;
            if (-1 != r) {
                if (i < this.dates[r])
                    for (; r >= 0 && i < this.dates[r];) this.pickers[r--].setUTCDate(i);
                else if (i > this.dates[r])
                    for (; o > r && i > this.dates[r];) this.pickers[r++].setUTCDate(i);
                this.updateDates()
            }
        },
        remove: function () {
            t.map(this.pickers, function (t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var l = t.fn.datepicker;
    t.fn.datepicker = function (n) {
        var i = Array.apply(null, arguments);
        i.shift();
        var a;
        return this.each(function () {
            var l = t(this),
                p = l.data("datepicker"),
                d = "object" == typeof n && n;
            if (!p) {
                var h = r(this, "date"),
                    f = t.extend({}, c, h, d),
                    m = o(f.language),
                    g = t.extend({}, c, m, h, d);
                if (l.is(".input-daterange") || g.inputs) {
                    var v = {
                        inputs: g.inputs || l.find("input").toArray()
                    };
                    l.data("datepicker", p = new u(this, t.extend(g, v)))
                } else l.data("datepicker", p = new s(this, g))
            }
            return "string" == typeof n && "function" == typeof p[n] && (a = p[n].apply(p, i), a !== e) ? !1 : void 0
        }), a !== e ? a : this
    };
    var c = t.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        daysOfWeekDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0
    }, p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = s;
    var d = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    }, h = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function (t) {
                return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
            },
            getDaysInMonth: function (t, e) {
                return [31, h.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function (t) {
                var e = t.replace(this.validParts, "\x00").split("\x00"),
                    n = t.match(this.validParts);
                if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: n
                }
            },
            parseDate: function (i, r, o) {
                if (!i) return e;
                if (i instanceof Date) return i;
                if ("string" == typeof r && (r = h.parseFormat(r)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                    var a, u, l = /([\-+]\d+)([dmwy])/,
                        c = i.match(/([\-+]\d+)([dmwy])/g);
                    i = new Date;
                    for (var p = 0; p < c.length; p++) switch (a = l.exec(c[p]), u = parseInt(a[1]), a[2]) {
                    case "d":
                        i.setUTCDate(i.getUTCDate() + u);
                        break;
                    case "m":
                        i = s.prototype.moveMonth.call(s.prototype, i, u);
                        break;
                    case "w":
                        i.setUTCDate(i.getUTCDate() + 7 * u);
                        break;
                    case "y":
                        i = s.prototype.moveYear.call(s.prototype, i, u)
                    }
                    return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
                }
                var f, m, a, c = i && i.match(this.nonpunctuation) || [],
                    i = new Date,
                    g = {}, v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    y = {
                        yyyy: function (t, e) {
                            return t.setUTCFullYear(e)
                        },
                        yy: function (t, e) {
                            return t.setUTCFullYear(2e3 + e)
                        },
                        m: function (t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; 0 > e;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() != e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t
                        },
                        d: function (t, e) {
                            return t.setUTCDate(e)
                        }
                    };
                y.M = y.MM = y.mm = y.m, y.dd = y.d, i = n(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
                var b = r.parts.slice();
                if (c.length != b.length && (b = t(b).filter(function (e, n) {
                    return -1 !== t.inArray(n, v)
                }).toArray()), c.length == b.length) {
                    for (var p = 0, w = b.length; w > p; p++) {
                        if (f = parseInt(c[p], 10), a = b[p], isNaN(f)) switch (a) {
                        case "MM":
                            m = t(d[o].months).filter(function () {
                                var t = this.slice(0, c[p].length),
                                    e = c[p].slice(0, t.length);
                                return t == e
                            }), f = t.inArray(m[0], d[o].months) + 1;
                            break;
                        case "M":
                            m = t(d[o].monthsShort).filter(function () {
                                var t = this.slice(0, c[p].length),
                                    e = c[p].slice(0, t.length);
                                return t == e
                            }), f = t.inArray(m[0], d[o].monthsShort) + 1
                        }
                        g[a] = f
                    }
                    for (var k, x, p = 0; p < v.length; p++) x = v[p], x in g && !isNaN(g[x]) && (k = new Date(i), y[x](k, g[x]), isNaN(k) || (i = k))
                }
                return i
            },
            formatDate: function (e, n, i) {
                if (!e) return "";
                "string" == typeof n && (n = h.parseFormat(n));
                var r = {
                    d: e.getUTCDate(),
                    D: d[i].daysShort[e.getUTCDay()],
                    DD: d[i].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: d[i].monthsShort[e.getUTCMonth()],
                    MM: d[i].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m;
                for (var e = [], o = t.extend([], n.separators), a = 0, s = n.parts.length; s >= a; a++) o.length && e.push(o.shift()), e.push(r[n.parts[a]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    h.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + h.headTemplate + "<tbody></tbody>" + h.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + h.headTemplate + h.contTemplate + h.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = h, t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = l, this
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var n = t(this);
        n.data("datepicker") || (e.preventDefault(), n.datepicker("show"))
    }), t(function () {
        t('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery),
function () {
    jQuery(function () {
        return $("a[rel~=popover], .has-popover").popover(), $("a[rel~=tooltip], .has-tooltip").tooltip()
    })
}.call(this),
function () {
    var t;
    t = function () {
        return load({
            controllers: {
                users: ["index"]
            }
        }, function () {}), $(function () {
            return $(window).scroll(function () {
                return $(this).scrollTop() < 100 ? $("#see-more").fadeIn() : $("#see-more").fadeOut()
            }), $("#see-more a").click(function () {
                return $("body,html").animate({
                    scrollTop: 800
                }, 200)
            })
        })
    }, $(document).ready(t)
}.call(this),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(t) {
        if (t.minTime && (t.minTime = v(t.minTime)), t.maxTime && (t.maxTime = v(t.maxTime)), t.durationTime && "function" != typeof t.durationTime && (t.durationTime = v(t.durationTime)), t.disableTimeRanges.length > 0) {
            for (var e in t.disableTimeRanges) t.disableTimeRanges[e] = [v(t.disableTimeRanges[e][0]), v(t.disableTimeRanges[e][1])];
            t.disableTimeRanges = t.disableTimeRanges.sort(function (t, e) {
                return t[0] - e[0]
            })
        }
        return t
    }

    function n(e) {
        var n = e.data("timepicker-settings"),
            i = e.data("timepicker-list");
        i && i.length && (i.remove(), e.data("timepicker-list", !1)), i = t("<ul />", {
            "class": "ui-timepicker-list"
        });
        var r = t("<div />", {
            "class": "ui-timepicker-wrapper",
            tabindex: -1
        });
        r.css({
            display: "none",
            position: "absolute"
        }).append(i), n.className && r.addClass(n.className), null === n.minTime && null === n.durationTime || !n.showDuration || r.addClass("ui-timepicker-with-duration");
        var a = n.minTime;
        "function" == typeof n.durationTime ? a = v(n.durationTime()) : null !== n.durationTime && (a = n.durationTime);
        var u = null !== n.minTime ? n.minTime : 0,
            l = null !== n.maxTime ? n.maxTime : u + w - 1;
        u >= l && (l += w), l === w - 1 && -1 !== n.timeFormat.indexOf("H") && (l = w);
        for (var c = n.disableTimeRanges, p = 0, d = c.length, h = u; l >= h; h += 60 * n.step) {
            var y = h,
                b = t("<li />");
            if (b.data("time", y), b.text(g(y, n.timeFormat)), (null !== n.minTime || null !== n.durationTime) && n.showDuration) {
                var k = t("<span />");
                k.addClass("ui-timepicker-duration"), k.text(" (" + m(h - a) + ")"), b.append(k)
            }
            d > p && (y >= c[p][1] && (p += 1), c[p] && y >= c[p][0] && y < c[p][1] && b.addClass("ui-timepicker-disabled")), i.append(b)
        }
        r.data("timepicker-input", e), e.data("timepicker-list", r);
        var x = n.appendTo;
        "string" == typeof x ? x = t(x) : "function" == typeof x && (x = x(e)), x.append(r), s(e, i), i.on("click", "li", function () {
            e.off("focus.timepicker"), e.on("focus.timepicker-ie-hack", function () {
                e.off("focus.timepicker-ie-hack"), e.on("focus.timepicker", T.show)
            }), o(e) || e[0].focus(), i.find("li").removeClass("ui-timepicker-selected"), t(this).addClass("ui-timepicker-selected"), f(e) && (e.trigger("hideTimepicker"), r.hide())
        })
    }

    function i() {
        return new Date(1970, 1, 1, 0, 0, 0)
    }

    function r(e) {
        var n = t(e.target),
            i = n.closest(".ui-timepicker-input");
        0 === i.length && 0 === n.closest(".ui-timepicker-wrapper").length && (T.hide(), t("body").unbind(".ui-timepicker"), t(window).unbind(".ui-timepicker"))
    }

    function o(t) {
        var e = t.data("timepicker-settings");
        return (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && e.disableTouchKeyboard
    }

    function a(e, n, i) {
        if (!i && 0 !== i) return !1;
        var r = e.data("timepicker-settings"),
            o = !1,
            a = 30 * r.step;
        return n.find("li").each(function (e, n) {
            var r = t(n),
                s = r.data("time") - i;
            return Math.abs(s) < a || s == a ? (o = r, !1) : void 0
        }), o
    }

    function s(t, e) {
        e.find("li").removeClass("ui-timepicker-selected");
        var n = v(l(t));
        if (null !== n) {
            var i = a(t, e, n);
            if (i) {
                var r = i.offset().top - e.offset().top;
                (r + i.outerHeight() > e.outerHeight() || 0 > r) && e.scrollTop(e.scrollTop() + i.position().top - i.outerHeight()), i.addClass("ui-timepicker-selected")
            }
        }
    }

    function u() {
        if ("" !== this.value) {
            var e = t(this),
                n = e.data("timepicker-list");
            if (!n || !n.is(":visible")) {
                var i = v(this.value);
                if (null === i) return e.trigger("timeFormatError"), void 0;
                var r = e.data("timepicker-settings"),
                    o = !1;
                if (null !== r.minTime && i < r.minTime ? o = !0 : null !== r.maxTime && i > r.maxTime && (o = !0), t.each(r.disableTimeRanges, function () {
                    return i >= this[0] && i < this[1] ? (o = !0, !1) : void 0
                }), r.forceRoundTime) {
                    var a = i % (60 * r.step);
                    a >= 30 * r.step ? i += 60 * r.step - a : i -= a
                }
                var s = g(i, r.timeFormat);
                o ? c(e, s, "error") && e.trigger("timeRangeError") : c(e, s)
            }
        }
    }

    function l(t) {
        return t.is("input") ? t.val() : t.data("ui-timepicker-value")
    }

    function c(t, e, n) {
        return t.is("input") && t.val(e), t.data("ui-timepicker-value") != e ? (t.data("ui-timepicker-value", e), "select" == n ? t.trigger("selectTime").trigger("changeTime").trigger("change") : "error" != n && t.trigger("changeTime"), !0) : (t.trigger("selectTime"), !1)
    }

    function p(e) {
        var n = t(this),
            i = n.data("timepicker-list");
        if (!i || !i.is(":visible")) {
            if (40 != e.keyCode) return d(e, n);
            o(n) || n.focus()
        }
        switch (e.keyCode) {
        case 13:
            return f(n) && T.hide.apply(this), e.preventDefault(), !1;
        case 38:
            var r = i.find(".ui-timepicker-selected");
            return r.length ? r.is(":first-child") || (r.removeClass("ui-timepicker-selected"), r.prev().addClass("ui-timepicker-selected"), r.prev().position().top < r.outerHeight() && i.scrollTop(i.scrollTop() - r.outerHeight())) : (i.find("li").each(function (e, n) {
                return t(n).position().top > 0 ? (r = t(n), !1) : void 0
            }), r.addClass("ui-timepicker-selected")), !1;
        case 40:
            return r = i.find(".ui-timepicker-selected"), 0 === r.length ? (i.find("li").each(function (e, n) {
                return t(n).position().top > 0 ? (r = t(n), !1) : void 0
            }), r.addClass("ui-timepicker-selected")) : r.is(":last-child") || (r.removeClass("ui-timepicker-selected"), r.next().addClass("ui-timepicker-selected"), r.next().position().top + 2 * r.outerHeight() > i.outerHeight() && i.scrollTop(i.scrollTop() + r.outerHeight())), !1;
        case 27:
            i.find("li").removeClass("ui-timepicker-selected"), T.hide();
            break;
        case 9:
            T.hide();
            break;
        default:
            return d(e, n)
        }
    }

    function d(t, e) {
        return !e.data("timepicker-settings").disableTextInput || t.ctrlKey || t.altKey || t.metaKey || 2 != t.keyCode && 8 != t.keyCode && t.keyCode < 46
    }

    function h(e) {
        var n = t(this),
            i = n.data("timepicker-list");
        if (!i || !i.is(":visible")) return !0;
        switch (e.keyCode) {
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 65:
        case 77:
        case 80:
        case 186:
        case 8:
        case 46:
            s(n, i);
            break;
        default:
            return
        }
    }

    function f(t) {
        var e = t.data("timepicker-settings"),
            n = t.data("timepicker-list"),
            i = null,
            r = n.find(".ui-timepicker-selected");
        if (r.hasClass("ui-timepicker-disabled")) return !1;
        if (r.length ? i = r.data("time") : l(t) && (i = v(l(t)), s(t, n)), null !== i) {
            var o = g(i, e.timeFormat);
            c(t, o, "select")
        }
        return !0
    }

    function m(t) {
        var e, n = Math.round(t / 60);
        if (Math.abs(n) < 60) e = [n, x.mins];
        else if (60 == n) e = ["1", x.hr];
        else {
            var i = (n / 60).toFixed(1);
            "." != x.decimal && (i = i.replace(".", x.decimal)), e = [i, x.hrs]
        }
        return e.join(" ")
    }

    function g(t, e) {
        if (null !== t) {
            for (var n, i, r = new Date(b.valueOf() + 1e3 * t), o = "", a = 0; a < e.length; a++) switch (i = e.charAt(a)) {
            case "a":
                o += r.getHours() > 11 ? "pm" : "am";
                break;
            case "A":
                o += r.getHours() > 11 ? "PM" : "AM";
                break;
            case "g":
                n = r.getHours() % 12, o += 0 === n ? "12" : n;
                break;
            case "G":
                o += r.getHours();
                break;
            case "h":
                n = r.getHours() % 12, 0 !== n && 10 > n && (n = "0" + n), o += 0 === n ? "12" : n;
                break;
            case "H":
                n = r.getHours(), t === w && (n = 24), o += n > 9 ? n : "0" + n;
                break;
            case "i":
                var s = r.getMinutes();
                o += s > 9 ? s : "0" + s;
                break;
            case "s":
                t = r.getSeconds(), o += t > 9 ? t : "0" + t;
                break;
            default:
                o += i
            }
            return o
        }
    }

    function v(t) {
        if ("" === t) return null;
        if (!t || t + 0 == t) return t;
        "object" == typeof t && (t = t.getHours() + ":" + y(t.getMinutes()) + ":" + y(t.getSeconds())), t = t.toLowerCase(), new Date(0);
        var e;
        if (-1 === t.indexOf(":") ? (e = t.match(/^([0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/), e || (e = t.match(/^([0-2][0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/))) : e = t.match(/^(\d{1,2})(?::([0-5][0-9]))?(?::([0-5][0-9]))?\s*([pa]?)m?$/), !e) return null;
        var n, i = parseInt(1 * e[1], 10);
        n = e[4] ? 12 == i ? "p" == e[4] ? 12 : 0 : i + ("p" == e[4] ? 12 : 0) : i;
        var r = 1 * e[2] || 0,
            o = 1 * e[3] || 0;
        return 3600 * n + 60 * r + o
    }

    function y(t) {
        return ("0" + t).slice(-2)
    }
    var b = i(),
        w = 86400,
        k = {
            className: null,
            minTime: null,
            maxTime: null,
            durationTime: null,
            step: 30,
            showDuration: !1,
            timeFormat: "g:ia",
            scrollDefaultNow: !1,
            scrollDefaultTime: !1,
            selectOnBlur: !1,
            disableTouchKeyboard: !0,
            forceRoundTime: !1,
            appendTo: "body",
            disableTimeRanges: [],
            closeOnWindowScroll: !1,
            disableTextInput: !1
        }, x = {
            decimal: ".",
            mins: "mins",
            hr: "hr",
            hrs: "hrs"
        }, T = {
            init: function (n) {
                return this.each(function () {
                    var i = t(this);
                    if ("SELECT" == i[0].tagName) {
                        for (var r = {
                            type: "text",
                            value: i.val()
                        }, o = i[0].attributes, a = 0; a < o.length; a++) r[o[a].nodeName] = o[a].nodeValue;
                        var s = t("<input />", r);
                        i.replaceWith(s), i = s
                    }
                    var l = t.extend({}, k);
                    n && (l = t.extend(l, n)), l.lang && (x = t.extend(x, l.lang)), l = e(l), i.data("timepicker-settings", l), i.prop("autocomplete", "off"), i.on("click.timepicker focus.timepicker", T.show), i.on("change.timepicker", u), i.on("keydown.timepicker", p), i.on("keyup.timepicker", h), i.addClass("ui-timepicker-input"), u.call(i.get(0))
                })
            },
            show: function () {
                var e = t(this),
                    i = e.data("timepicker-settings");
                o(e) && e.blur();
                var s = e.data("timepicker-list");
                if (!e.prop("readonly") && (s && 0 !== s.length && "function" != typeof i.durationTime || (n(e), s = e.data("timepicker-list")), !s.is(":visible"))) {
                    T.hide(), s.show(), e.offset().top + e.outerHeight(!0) + s.outerHeight() > t(window).height() + t(window).scrollTop() ? s.offset({
                        left: e.offset().left + parseInt(s.css("marginLeft").replace("px", ""), 10),
                        top: e.offset().top - s.outerHeight() + parseInt(s.css("marginTop").replace("px", ""), 10)
                    }) : s.offset({
                        left: e.offset().left + parseInt(s.css("marginLeft").replace("px", ""), 10),
                        top: e.offset().top + e.outerHeight() + parseInt(s.css("marginTop").replace("px", ""), 10)
                    });
                    var u = s.find(".ui-timepicker-selected");
                    if (u.length || (l(e) ? u = a(e, s, v(l(e))) : i.scrollDefaultNow ? u = a(e, s, v(new Date)) : i.scrollDefaultTime !== !1 && (u = a(e, s, v(i.scrollDefaultTime)))), u && u.length) {
                        var c = s.scrollTop() + u.position().top - u.outerHeight();
                        s.scrollTop(c)
                    } else s.scrollTop(0);
                    t("body").on("touchstart.ui-timepicker mousedown.ui-timepicker", r), i.closeOnWindowScroll && t(window).on("scroll.ui-timepicker", r), e.trigger("showTimepicker")
                }
            },
            hide: function () {
                t(".ui-timepicker-wrapper:visible").each(function () {
                    var e = t(this),
                        n = e.data("timepicker-input"),
                        i = n.data("timepicker-settings");
                    i && i.selectOnBlur && f(n), e.hide(), n.trigger("hideTimepicker")
                })
            },
            option: function (n, i) {
                var r = this,
                    o = r.data("timepicker-settings"),
                    a = r.data("timepicker-list");
                if ("object" == typeof n) o = t.extend(o, n);
                else if ("string" == typeof n && "undefined" != typeof i) o[n] = i;
                else if ("string" == typeof n) return o[n];
                return o = e(o), r.data("timepicker-settings", o), a && (a.remove(), r.data("timepicker-list", !1)), r
            },
            getSecondsFromMidnight: function () {
                return v(l(this))
            },
            getTime: function (t) {
                var e = this;
                return t || (t = new Date), t.setHours(0, 0, 0, 0), new Date(t.valueOf() + 1e3 * v(l(e)))
            },
            setTime: function (t) {
                var e = this,
                    n = g(v(t), e.data("timepicker-settings").timeFormat);
                c(e, n), e.data("timepicker-list") && s(e, e.data("timepicker-list"))
            },
            remove: function () {
                var t = this;
                t.hasClass("ui-timepicker-input") && (t.removeAttr("autocomplete", "off"), t.removeClass("ui-timepicker-input"), t.removeData("timepicker-settings"), t.off(".timepicker"), t.data("timepicker-list") && t.data("timepicker-list").remove(), t.removeData("timepicker-list"))
            }
        };
    t.fn.timepicker = function (e) {
        return T[e] ? T[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.timepicker"), void 0) : T.init.apply(this, arguments)
    }
}), ! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(t) {
        if (t.minTime && (t.minTime = v(t.minTime)), t.maxTime && (t.maxTime = v(t.maxTime)), t.durationTime && "function" != typeof t.durationTime && (t.durationTime = v(t.durationTime)), t.disableTimeRanges.length > 0) {
            for (var e in t.disableTimeRanges) t.disableTimeRanges[e] = [v(t.disableTimeRanges[e][0]), v(t.disableTimeRanges[e][1])];
            t.disableTimeRanges = t.disableTimeRanges.sort(function (t, e) {
                return t[0] - e[0]
            })
        }
        return t
    }

    function n(e) {
        var n = e.data("timepicker-settings"),
            i = e.data("timepicker-list");
        i && i.length && (i.remove(), e.data("timepicker-list", !1)), i = t("<ul />", {
            "class": "ui-timepicker-list"
        });
        var r = t("<div />", {
            "class": "ui-timepicker-wrapper",
            tabindex: -1
        });
        r.css({
            display: "none",
            position: "absolute"
        }).append(i), n.className && r.addClass(n.className), null === n.minTime && null === n.durationTime || !n.showDuration || r.addClass("ui-timepicker-with-duration");
        var a = n.minTime;
        "function" == typeof n.durationTime ? a = v(n.durationTime()) : null !== n.durationTime && (a = n.durationTime);
        var u = null !== n.minTime ? n.minTime : 0,
            l = null !== n.maxTime ? n.maxTime : u + w - 1;
        u >= l && (l += w), l === w - 1 && -1 !== n.timeFormat.indexOf("H") && (l = w);
        for (var c = n.disableTimeRanges, p = 0, d = c.length, h = u; l >= h; h += 60 * n.step) {
            var y = h,
                b = t("<li />");
            if (b.data("time", y), b.text(g(y, n.timeFormat)), (null !== n.minTime || null !== n.durationTime) && n.showDuration) {
                var k = t("<span />");
                k.addClass("ui-timepicker-duration"), k.text(" (" + m(h - a) + ")"), b.append(k)
            }
            d > p && (y >= c[p][1] && (p += 1), c[p] && y >= c[p][0] && y < c[p][1] && b.addClass("ui-timepicker-disabled")), i.append(b)
        }
        r.data("timepicker-input", e), e.data("timepicker-list", r);
        var x = n.appendTo;
        "string" == typeof x ? x = t(x) : "function" == typeof x && (x = x(e)), x.append(r), s(e, i), i.on("click", "li", function () {
            e.off("focus.timepicker"), e.on("focus.timepicker-ie-hack", function () {
                e.off("focus.timepicker-ie-hack"), e.on("focus.timepicker", T.show)
            }), o(e) || e[0].focus(), i.find("li").removeClass("ui-timepicker-selected"), t(this).addClass("ui-timepicker-selected"), f(e) && (e.trigger("hideTimepicker"), r.hide())
        })
    }

    function i() {
        return new Date(1970, 1, 1, 0, 0, 0)
    }

    function r(e) {
        var n = t(e.target),
            i = n.closest(".ui-timepicker-input");
        0 === i.length && 0 === n.closest(".ui-timepicker-wrapper").length && (T.hide(), t("body").unbind(".ui-timepicker"), t(window).unbind(".ui-timepicker"))
    }

    function o(t) {
        var e = t.data("timepicker-settings");
        return (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && e.disableTouchKeyboard
    }

    function a(e, n, i) {
        if (!i && 0 !== i) return !1;
        var r = e.data("timepicker-settings"),
            o = !1,
            a = 30 * r.step;
        return n.find("li").each(function (e, n) {
            var r = t(n),
                s = r.data("time") - i;
            return Math.abs(s) < a || s == a ? (o = r, !1) : void 0
        }), o
    }

    function s(t, e) {
        e.find("li").removeClass("ui-timepicker-selected");
        var n = v(l(t));
        if (null !== n) {
            var i = a(t, e, n);
            if (i) {
                var r = i.offset().top - e.offset().top;
                (r + i.outerHeight() > e.outerHeight() || 0 > r) && e.scrollTop(e.scrollTop() + i.position().top - i.outerHeight()), i.addClass("ui-timepicker-selected")
            }
        }
    }

    function u() {
        if ("" !== this.value) {
            var e = t(this),
                n = e.data("timepicker-list");
            if (!n || !n.is(":visible")) {
                var i = v(this.value);
                if (null === i) return e.trigger("timeFormatError"), void 0;
                var r = e.data("timepicker-settings"),
                    o = !1;
                if (null !== r.minTime && i < r.minTime ? o = !0 : null !== r.maxTime && i > r.maxTime && (o = !0), t.each(r.disableTimeRanges, function () {
                    return i >= this[0] && i < this[1] ? (o = !0, !1) : void 0
                }), r.forceRoundTime) {
                    var a = i % (60 * r.step);
                    a >= 30 * r.step ? i += 60 * r.step - a : i -= a
                }
                var s = g(i, r.timeFormat);
                o ? c(e, s, "error") && e.trigger("timeRangeError") : c(e, s)
            }
        }
    }

    function l(t) {
        return t.is("input") ? t.val() : t.data("ui-timepicker-value")
    }

    function c(t, e, n) {
        return t.is("input") && t.val(e), t.data("ui-timepicker-value") != e ? (t.data("ui-timepicker-value", e), "select" == n ? t.trigger("selectTime").trigger("changeTime").trigger("change") : "error" != n && t.trigger("changeTime"), !0) : (t.trigger("selectTime"), !1)
    }

    function p(e) {
        var n = t(this),
            i = n.data("timepicker-list");
        if (!i || !i.is(":visible")) {
            if (40 != e.keyCode) return d(e, n);
            o(n) || n.focus()
        }
        switch (e.keyCode) {
        case 13:
            return f(n) && T.hide.apply(this), e.preventDefault(), !1;
        case 38:
            var r = i.find(".ui-timepicker-selected");
            return r.length ? r.is(":first-child") || (r.removeClass("ui-timepicker-selected"), r.prev().addClass("ui-timepicker-selected"), r.prev().position().top < r.outerHeight() && i.scrollTop(i.scrollTop() - r.outerHeight())) : (i.find("li").each(function (e, n) {
                return t(n).position().top > 0 ? (r = t(n), !1) : void 0
            }), r.addClass("ui-timepicker-selected")), !1;
        case 40:
            return r = i.find(".ui-timepicker-selected"), 0 === r.length ? (i.find("li").each(function (e, n) {
                return t(n).position().top > 0 ? (r = t(n), !1) : void 0
            }), r.addClass("ui-timepicker-selected")) : r.is(":last-child") || (r.removeClass("ui-timepicker-selected"), r.next().addClass("ui-timepicker-selected"), r.next().position().top + 2 * r.outerHeight() > i.outerHeight() && i.scrollTop(i.scrollTop() + r.outerHeight())), !1;
        case 27:
            i.find("li").removeClass("ui-timepicker-selected"), T.hide();
            break;
        case 9:
            T.hide();
            break;
        default:
            return d(e, n)
        }
    }

    function d(t, e) {
        return !e.data("timepicker-settings").disableTextInput || t.ctrlKey || t.altKey || t.metaKey || 2 != t.keyCode && 8 != t.keyCode && t.keyCode < 46
    }

    function h(e) {
        var n = t(this),
            i = n.data("timepicker-list");
        if (!i || !i.is(":visible")) return !0;
        switch (e.keyCode) {
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 65:
        case 77:
        case 80:
        case 186:
        case 8:
        case 46:
            s(n, i);
            break;
        default:
            return
        }
    }

    function f(t) {
        var e = t.data("timepicker-settings"),
            n = t.data("timepicker-list"),
            i = null,
            r = n.find(".ui-timepicker-selected");
        if (r.hasClass("ui-timepicker-disabled")) return !1;
        if (r.length ? i = r.data("time") : l(t) && (i = v(l(t)), s(t, n)), null !== i) {
            var o = g(i, e.timeFormat);
            c(t, o, "select")
        }
        return !0
    }

    function m(t) {
        var e, n = Math.round(t / 60);
        if (Math.abs(n) < 60) e = [n, x.mins];
        else if (60 == n) e = ["1", x.hr];
        else {
            var i = (n / 60).toFixed(1);
            "." != x.decimal && (i = i.replace(".", x.decimal)), e = [i, x.hrs]
        }
        return e.join(" ")
    }

    function g(t, e) {
        if (null !== t) {
            for (var n, i, r = new Date(b.valueOf() + 1e3 * t), o = "", a = 0; a < e.length; a++) switch (i = e.charAt(a)) {
            case "a":
                o += r.getHours() > 11 ? "pm" : "am";
                break;
            case "A":
                o += r.getHours() > 11 ? "PM" : "AM";
                break;
            case "g":
                n = r.getHours() % 12, o += 0 === n ? "12" : n;
                break;
            case "G":
                o += r.getHours();
                break;
            case "h":
                n = r.getHours() % 12, 0 !== n && 10 > n && (n = "0" + n), o += 0 === n ? "12" : n;
                break;
            case "H":
                n = r.getHours(), t === w && (n = 24), o += n > 9 ? n : "0" + n;
                break;
            case "i":
                var s = r.getMinutes();
                o += s > 9 ? s : "0" + s;
                break;
            case "s":
                t = r.getSeconds(), o += t > 9 ? t : "0" + t;
                break;
            default:
                o += i
            }
            return o
        }
    }

    function v(t) {
        if ("" === t) return null;
        if (!t || t + 0 == t) return t;
        "object" == typeof t && (t = t.getHours() + ":" + y(t.getMinutes()) + ":" + y(t.getSeconds())), t = t.toLowerCase(), new Date(0);
        var e;
        if (-1 === t.indexOf(":") ? (e = t.match(/^([0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/), e || (e = t.match(/^([0-2][0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/))) : e = t.match(/^(\d{1,2})(?::([0-5][0-9]))?(?::([0-5][0-9]))?\s*([pa]?)m?$/), !e) return null;
        var n, i = parseInt(1 * e[1], 10);
        n = e[4] ? 12 == i ? "p" == e[4] ? 12 : 0 : i + ("p" == e[4] ? 12 : 0) : i;
        var r = 1 * e[2] || 0,
            o = 1 * e[3] || 0;
        return 3600 * n + 60 * r + o
    }

    function y(t) {
        return ("0" + t).slice(-2)
    }
    var b = i(),
        w = 86400,
        k = {
            className: null,
            minTime: null,
            maxTime: null,
            durationTime: null,
            step: 30,
            showDuration: !1,
            timeFormat: "g:ia",
            scrollDefaultNow: !1,
            scrollDefaultTime: !1,
            selectOnBlur: !1,
            disableTouchKeyboard: !0,
            forceRoundTime: !1,
            appendTo: "body",
            disableTimeRanges: [],
            closeOnWindowScroll: !1,
            disableTextInput: !1
        }, x = {
            decimal: ".",
            mins: "mins",
            hr: "hr",
            hrs: "hrs"
        }, T = {
            init: function (n) {
                return this.each(function () {
                    var i = t(this);
                    if ("SELECT" == i[0].tagName) {
                        for (var r = {
                            type: "text",
                            value: i.val()
                        }, o = i[0].attributes, a = 0; a < o.length; a++) r[o[a].nodeName] = o[a].nodeValue;
                        var s = t("<input />", r);
                        i.replaceWith(s), i = s
                    }
                    var l = t.extend({}, k);
                    n && (l = t.extend(l, n)), l.lang && (x = t.extend(x, l.lang)), l = e(l), i.data("timepicker-settings", l), i.prop("autocomplete", "off"), i.on("click.timepicker focus.timepicker", T.show), i.on("change.timepicker", u), i.on("keydown.timepicker", p), i.on("keyup.timepicker", h), i.addClass("ui-timepicker-input"), u.call(i.get(0))
                })
            },
            show: function () {
                var e = t(this),
                    i = e.data("timepicker-settings");
                o(e) && e.blur();
                var s = e.data("timepicker-list");
                if (!e.prop("readonly") && (s && 0 !== s.length && "function" != typeof i.durationTime || (n(e), s = e.data("timepicker-list")), !s.is(":visible"))) {
                    T.hide(), s.show(), e.offset().top + e.outerHeight(!0) + s.outerHeight() > t(window).height() + t(window).scrollTop() ? s.offset({
                        left: e.offset().left + parseInt(s.css("marginLeft").replace("px", ""), 10),
                        top: e.offset().top - s.outerHeight() + parseInt(s.css("marginTop").replace("px", ""), 10)
                    }) : s.offset({
                        left: e.offset().left + parseInt(s.css("marginLeft").replace("px", ""), 10),
                        top: e.offset().top + e.outerHeight() + parseInt(s.css("marginTop").replace("px", ""), 10)
                    });
                    var u = s.find(".ui-timepicker-selected");
                    if (u.length || (l(e) ? u = a(e, s, v(l(e))) : i.scrollDefaultNow ? u = a(e, s, v(new Date)) : i.scrollDefaultTime !== !1 && (u = a(e, s, v(i.scrollDefaultTime)))), u && u.length) {
                        var c = s.scrollTop() + u.position().top - u.outerHeight();
                        s.scrollTop(c)
                    } else s.scrollTop(0);
                    t("body").on("touchstart.ui-timepicker mousedown.ui-timepicker", r), i.closeOnWindowScroll && t(window).on("scroll.ui-timepicker", r), e.trigger("showTimepicker")
                }
            },
            hide: function () {
                t(".ui-timepicker-wrapper:visible").each(function () {
                    var e = t(this),
                        n = e.data("timepicker-input"),
                        i = n.data("timepicker-settings");
                    i && i.selectOnBlur && f(n), e.hide(), n.trigger("hideTimepicker")
                })
            },
            option: function (n, i) {
                var r = this,
                    o = r.data("timepicker-settings"),
                    a = r.data("timepicker-list");
                if ("object" == typeof n) o = t.extend(o, n);
                else if ("string" == typeof n && "undefined" != typeof i) o[n] = i;
                else if ("string" == typeof n) return o[n];
                return o = e(o), r.data("timepicker-settings", o), a && (a.remove(), r.data("timepicker-list", !1)), r
            },
            getSecondsFromMidnight: function () {
                return v(l(this))
            },
            getTime: function (t) {
                var e = this;
                return t || (t = new Date), t.setHours(0, 0, 0, 0), new Date(t.valueOf() + 1e3 * v(l(e)))
            },
            setTime: function (t) {
                var e = this,
                    n = g(v(t), e.data("timepicker-settings").timeFormat);
                c(e, n), e.data("timepicker-list") && s(e, e.data("timepicker-list"))
            },
            remove: function () {
                var t = this;
                t.hasClass("ui-timepicker-input") && (t.removeAttr("autocomplete", "off"), t.removeClass("ui-timepicker-input"), t.removeData("timepicker-settings"), t.off(".timepicker"), t.data("timepicker-list") && t.data("timepicker-list").remove(), t.removeData("timepicker-list"))
            }
        };
    t.fn.timepicker = function (e) {
        return T[e] ? T[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.timepicker"), void 0) : T.init.apply(this, arguments)
    }
}),
function () {}.call(this),
function () {
    var t;
    t = function () {
        return load({
            controllers: {
                tasks: ["new", "index"]
            }
        }, function () {
            var t, e, n;
            return e = new Date, t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0), $("#startTimepicker").timepicker(), $(".startDatepicker").datepicker({
                format: "dd/mm/yyyy",
                startDate: new Date
            }), $("#applicationDatepicker").datepicker({
                format: "dd/mm/yyyy",
                startDate: $(".startDatepicker").val()
            }), $(".startDatepicker").on("changeDate", function (t) {
                return $("#applicationDatepicker").datepicker("setStartDate", t.date), $("#applicationDatepicker").datepicker("update")
            }), n = $("#category_subcategory_id").html(), $(document).ready($("#subcategory_select").hide()), $("#category_name").change(function () {
                var t, e, i;
                return t = $("#category_name :selected").text(), e = t.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1"), i = $(n).filter("optgroup[label='" + e + "']").html(), i ? ($("#category_subcategory_id").html(i), $("#subcategory_select").show()) : ($("#category_subcategory_id").empty(), $("#subcategory_select").hide())
            }), $("#viewMap").click(function () {
                var t, e;
                return e = new google.maps.Geocoder, t = $("#location").val(), e && t ? e.geocode({
                    address: t
                }, function (t, e) {
                    var n, i, r;
                    return e === google.maps.GeocoderStatus.OK ? (i = t[0].geometry.location.lb, r = t[0].geometry.location.mb, n = '<img src= "http://maps.google.com/maps/api/staticmap?size=600x300&sensor=false&zoom=16&markers=' + i + "%2C" + r + '"/>', document.getElementById("resultArea").innerHTML = n) : void 0
                }) : void 0
            }), $("#distanceCheckbox").click(function () {
                return $("#location").is(":disabled") ? $("#location").attr("disabled", !1) : $("#location").attr("disabled", !0)
            })
        })
    }, $(document).ready(t), $(window).bind("page:change", t)
}.call(this);