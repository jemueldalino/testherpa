!function (r) {
  var n = {};
  function i(e) {
    if (n[e]) 
      return n[e].exports;
    
    var t = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return r[e].call(t.exports, t, t.exports, i),
    t.l = !0,
    t.exports
  }
  i.m = r,
  i.c = n,
  i.d = function (e, t, r) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  },
  i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  },
  i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) 
      return t;
    
    if (4 & e && "object" == typeof t && t && t.__esModule) 
      return t;
    
    var r = Object.create(null);
    if (i.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) 
      for (var n in t) 
        i.d(r, n, function (e) {
          return t[e]
        }.bind(null, n));
      
    
    return r
  },
  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t),
    t
  },
  i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  i.p = "/",
  i(i.s = 189)
}([
function (e, t, r) {
    var l = r(5),
      p = r(42).f,
      d = r(29),
      u = r(19),
      h = r(98),
      f = r(127),
      g = r(79);
    e.exports = function (e, t) {
      var r,
        n,
        i,
        o = e.target,
        a = e.global,
        s = e.stat,
        c = a ? l : s ? l[o] || h(o, {}) : (l[o] || {}).prototype;
      if (c) 
        for (r in t) {
          if (n = t[r], i = e.noTargetGet ? (i = p(c, r)) && i.value : c[r], ! g(a ? r : o + (s ? "." : "#") + r, e.forced) && void 0 !== i) {
            if (typeof n == typeof i) 
              continue;
            
            f(n, i)
          }
          (e.sham || i && i.sham) && d(n, "sham", !0),
          u(c, r, n, e)
        }
      
    }
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "g", function () {
      return i
    }),
    r.d(t, "a", function () {
      return o
    }),
    r.d(t, "f", function () {
      return a
    }),
    r.d(t, "d", function () {
      return p
    }),
    r.d(t, "j", function () {
      return d
    }),
    r.d(t, "c", function () {
      return u
    }),
    r.d(t, "l", function () {
      return h
    }),
    r.d(t, "k", function () {
      return f
    }),
    r.d(t, "e", function () {
      return g
    }),
    r.d(t, "i", function () {
      return w
    }),
    r.d(t, "h", function () {
      return m
    }),
    r.d(t, "b", function () {
      return v
    });
    var t = r(41),
      t = r(167),
      t = r(32),
      t = r(47),
      t = r(13),
      t = r(24),
      t = r(15),
      t = r(25),
      t = r(20),
      t = r(16),
      t = r(26),
      t = r(38),
      t = r(70),
      n = r(96);
    function c(e, t) {
      var r;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (r = function (e, t) {
          if (e) {
            if ("string" == typeof e) 
              return s(e, t);
            
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
          }
        }(e)) || t && e && "number" == typeof e.length) {
          r && (e = r);
          var n = 0,
            t = function () {};
          return {
            s: t,
            n: function () {
              return n >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[n++]
              }
            },
            e: function (e) {
              throw e
            },
            f: t
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var i,
        o = !0,
        a = !1;
      return {
        s: function () {
          r = e[Symbol.iterator]()
        },
        n: function () {
          var e = r.next();
          return o = e.done,
          e
        },
        e: function (e) {
          a = !0,
          i = e
        },
        f: function () {
          try {
            o || null == r.return || r.return()
          } finally {
            if (a) 
              throw i
            
          }
        }
      }
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) 
        n[r] = e[r];
      
      return n
    }
    function l(e) {
      return(l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }
    var i = function () {
        return window.self !== window.top
      },
      o = "sherpa-sdk",
      a = function () {
        var e = window.location != window.parent.location ? document.referrer : document.location.href;
        return p(e)
      },
      p = function (e) {
        var t = document.createElement("a");
        return t.href = e,
        "".concat(t.protocol, "//").concat(t.host)
      },
      d = function (t) {
        try {
          return JSON.parse(t)
        } catch (e) {
          return t
        }
      },
      u = function (e, t, r) {
        var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
          i = 4 < arguments.length ? arguments[4] : void 0,
          o = document.createElement("iframe");
        o.title = "sherpa° Map",
        o.allowPaymentRequest = !1,
        o["aria-hidden"] = !0,
        o.src = e,
        o.allowFullscreen = !0;
        n = n ? "\n  height: 100% !important;\n  top: 0 !important;\n  left: 0 !important;\n  min-height: 100% !important;\n  position: fixed !important;\n  z-index: 99999999 !important;\n  " : "\n  height: 0px !important;\n  ";
        return o.style.cssText = "".concat("\n  border:0;background: transparent !important;\n  overflow: hidden !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important;\n  min-width: 300px;\n  width: 100% !important;  \n  display: block !important;      \n  user-select: none !important;\n  ", " ").concat(n),
        o.frameBorder = "0",
        o.setAttribute("data-sdk-version", r.sdkVersion),
        o.setAttribute("data-build-date", r.buildDate),
        o.setAttribute("data-element-id", t),
        null != (null == i ? void 0 : i.onLoad) && (o.onload = i.onLoad),
        o
      },
      h = function (e) {
        try {
          return document.querySelector(e),
          !0
        } catch (e) {}
        return !1
      },
      f = function (r, s, c) {
        return null == r ? "" : Array.isArray(r) ? r.reduce(function (e, r, a) {
          return "".concat(e).concat(Object.keys(r).reduce(function (e, t) {
            var n = null != s ? s[t] : t;
            if ("object" !== l(i = r[t])) 
              return "".concat(e, "&").concat(c, "[").concat(a, "][").concat(n, "]=").concat(i);
            
            var i,
              o = Object.keys(i)[0];
            if ("object" !== l(i = i[o])) 
              return "".concat(e, "&").concat(c, "[").concat(a, "][").concat(n, "][").concat(o, "]=").concat(i);
            
            t = Object.keys(i).reduce(function (e, t) {
              var r = null != s ? s[t] : t,
                t = i[r];
              return "".concat(e, "&").concat(c, "[").concat(a, "][").concat(n, "][").concat(o, "][").concat(r, "]=").concat(t)
            }, "");
            return "".concat(e).concat(t)
          }, ""))
        }, "") : Object.keys(r).reduce(function (e, t) {
          return e + function (e, t) {
            return null == t ? "" : "".concat(2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "&").concat(encodeURIComponent(e), "=").concat(encodeURIComponent("".concat(t)))
          }(null != s ? s[t] : t, r[t])
        }, "")
      },
      g = function (e) {
        e = document.querySelector(e);
        return null == e && (e = document.createElement("div"), document.body.appendChild(e)),
        e
      },
      w = function (a) {
        var s = {
            height: 0,
            width: 0
          },
          e = new(window.ResizeObserver || n.a)(function (e, t) {
            var r,
              n = c(e);
            try {
              for (n.s(); !(r = n.n()).done;) {
                var i = r.value.contentRect,
                  o = {
                    height: i.height,
                    width: i.width
                  };
                o.height === s.height && o.width === s.width || a(o),
                s = o
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          }),
          t = document.querySelector(".observe-resizing");
        null != t && e.observe(t)
      },
      m = function e(t, r) {
        return setTimeout(function () {
          null == t ? e(t, r) : r()
        }, 10)
      },
      v = function (e) {
        return null == e ? "" : "string" == typeof e ? e : "".concat(e, "px")
      }
  },
  function (e, t, r) {
    e.exports = function () {
      "use strict";
      var c = "millisecond",
        h = "second",
        f = "minute",
        g = "hour",
        w = "day",
        m = "week",
        v = "month",
        l = "quarter",
        y = "year",
        _ = "date",
        a = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        e = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
        o = function (e, t, r) {
          var n = String(e);
          return ! n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
        },
        t = {
          s: o,
          z: function (e) {
            var t = - e.utcOffset(),
              r = Math.abs(t),
              n = Math.floor(r / 60),
              i = r % 60;
            return(t <= 0 ? "+" : "-") + o(n, 2, "0") + ":" + o(i, 2, "0")
          },
          m: function e(t, r) {
            if (t.date() < r.date()) 
              return - e(r, t);
            
            var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
              i = t.clone().add(n, v),
              o = r - i < 0,
              a = t.clone().add(n + (o ? -1 : 1), v);
            return + (-(n + (r - i) / (o ? i - a : a - i)) || 0)
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function (e) {
            return {
              M: v,
              y: y,
              w: m,
              d: w,
              D: _,
              h: g,
              m: f,
              s: h,
              ms: c,
              Q: l
            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
          },
          u: function (e) {
            return void 0 === e
          }
        },
        s = "en",
        p = {};
      p[s] = e;
      var n = function (e) {
          return e instanceof u
        },
        i = function (e, t, r) {
          var n;
          if (! e) 
            return s;
          
          if ("string" == typeof e) 
            p[e] && (n = e),
            t && (p[e] = t, n = e);
           else {
            var i = e.name;
            p[i] = e,
            n = i
          }
          return ! r && n && (s = n),
          n || ! r && s
        },
        d = function (e, t) {
          if (n(e)) 
            return e.clone();
          
          var r = "object" == typeof t ? t : {};
          return r.date = e,
          r.args = arguments,
          new u(r)
        },
        S = t;
      S.l = i,
      S.i = n,
      S.w = function (e, t) {
        return d(e, {
          locale: t.$L,
          utc: t.$u,
          x: t.$x,
          $offset: t.$offset
        })
      };
      var u = function () {
          function e(e) {
            this.$L = i(e.locale, null, !0),
            this.parse(e)
          }
          var t = e.prototype;
          return t.parse = function (e) {
            this.$d = function (e) {
              var t = e.date,
                r = e.utc;
              if (null === t) 
                return new Date(NaN);
              
              if (S.u(t)) 
                return new Date;
              
              if (t instanceof Date) 
                return new Date(t);
              
              if ("string" == typeof t && !/Z$/i.test(t)) {
                var n = t.match(a);
                if (n) {
                  var i = n[2] - 1 || 0,
                    o = (n[7] || "0").substring(0, 3);
                  return r ? new Date(Date.UTC(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)
                }
              }
              return new Date(t)
            }(e),
            this.$x = e.x || {},
            this.init()
          },
          t.init = function () {
            var e = this.$d;
            this.$y = e.getFullYear(),
            this.$M = e.getMonth(),
            this.$D = e.getDate(),
            this.$W = e.getDay(),
            this.$H = e.getHours(),
            this.$m = e.getMinutes(),
            this.$s = e.getSeconds(),
            this.$ms = e.getMilliseconds()
          },
          t.$utils = function () {
            return S
          },
          t.isValid = function () {
            return !("Invalid Date" === this.$d.toString())
          },
          t.isSame = function (e, t) {
            var r = d(e);
            return this.startOf(t) <= r && r <= this.endOf(t)
          },
          t.isAfter = function (e, t) {
            return d(e) < this.startOf(t)
          },
          t.isBefore = function (e, t) {
            return this.endOf(t) < d(e)
          },
          t.$g = function (e, t, r) {
            return S.u(e) ? this[t] : this.set(r, e)
          },
          t.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          },
          t.valueOf = function () {
            return this.$d.getTime()
          },
          t.startOf = function (e, t) {
            var n = this,
              i = !! S.u(t) || t,
              r = S.p(e),
              o = function (e, t) {
                var r = S.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                return i ? r : r.endOf(w)
              },
              a = function (e, t) {
                return S.w(n.toDate()[e].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
              },
              s = this.$W,
              c = this.$M,
              l = this.$D,
              p = "set" + (
              this.$u ? "UTC" : ""
            );
            switch (r) {
              case y: return i ? o(1, 0) : o(31, 11);
              case v: return i ? o(1, c) : o(0, c + 1);
              case m: var d = this.$locale().weekStart || 0,
                  u = (s < d ? s + 7 : s) - d;
                return o(i ? l - u : l + (6 - u), c);
              case w:
              case _: return a(p + "Hours", 0);
              case g: return a(p + "Minutes", 1);
              case f: return a(p + "Seconds", 2);
              case h: return a(p + "Milliseconds", 3);
              default:
                return this.clone()
            }
          },
          t.endOf = function (e) {
            return this.startOf(e, !1)
          },
          t.$set = function (e, t) {
            var r,
              n = S.p(e),
              i = "set" + (
              this.$u ? "UTC" : ""
            ),
              o = (r =
                {}, r[w] = i + "Date", r[_] = i + "Date", r[v] = i + "Month", r[y] = i + "FullYear", r[g] = i + "Hours", r[f] = i + "Minutes", r[h] = i + "Seconds", r[c] = i + "Milliseconds", r)[n],
              a = n === w ? this.$D + (t - this.$W) : t;
            if (n === v || n === y) {
              var s = this.clone().set(_, 1);
              s.$d[o](a),
              s.init(),
              this.$d = s.set(_, Math.min(this.$D, s.daysInMonth())).$d
            } else 
              o && this.$d[o](a);
            
            return this.init(),
            this
          },
          t.set = function (e, t) {
            return this.clone().$set(e, t)
          },
          t.get = function (e) {
            return this[S.p(e)]()
          },
          t.add = function (r, e) {
            var t,
              n = this;
            r = Number(r);
            var i = S.p(e),
              o = function (e) {
                var t = d(n);
                return S.w(t.date(t.date() + Math.round(e * r)), n)
              };
            if (i === v) 
              return this.set(v, this.$M + r);
            
            if (i === y) 
              return this.set(y, this.$y + r);
            
            if (i === w) 
              return o(1);
            
            if (i === m) 
              return o(7);
            
            var a = (t =
                {}, t[f] = 6e4, t[g] = 36e5, t[h] = 1e3, t)[i] || 1,
              s = this.$d.getTime() + r * a;
            return S.w(s, this)
          },
          t.subtract = function (e, t) {
            return this.add(-1 * e, t)
          },
          t.format = function (e) {
            var i = this;
            if (!this.isValid()) 
              return "Invalid Date";
            
            var o = e || "YYYY-MM-DDTHH:mm:ssZ",
              r = S.z(this),
              t = this.$locale(),
              n = this.$H,
              a = this.$m,
              s = this.$M,
              c = t.weekdays,
              l = t.months,
              p = function (e, t, r, n) {
                return e && (e[t] || e(i, o)) || r[t].substr(0, n)
              },
              d = function (e) {
                return S.s(n % 12 || 12, e, "0")
              },
              u = t.meridiem || function (e, t, r) {
                var n = e < 12 ? "AM" : "PM";
                return r ? n.toLowerCase() : n
              },
              h = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: s + 1,
                MM: S.s(s + 1, 2, "0"),
                MMM: p(t.monthsShort, s, l, 3),
                MMMM: p(l, s),
                D: this.$D,
                DD: S.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: p(t.weekdaysMin, this.$W, c, 2),
                ddd: p(t.weekdaysShort, this.$W, c, 3),
                dddd: c[this.$W],
                H: String(n),
                HH: S.s(n, 2, "0"),
                h: d(1),
                hh: d(2),
                a: u(n, a, !0),
                A: u(n, a, !1),
                m: String(a),
                mm: S.s(a, 2, "0"),
                s: String(this.$s),
                ss: S.s(this.$s, 2, "0"),
                SSS: S.s(this.$ms, 3, "0"),
                Z: r
              };
            return o.replace(b, function (e, t) {
              return t || h[e] || r.replace(":", "")
            })
          },
          t.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          },
          t.diff = function (e, t, r) {
            var n,
              i = S.p(t),
              o = d(e),
              a = 6e4 * (o.utcOffset() - this.utcOffset()),
              s = this - o,
              c = S.m(this, o);
            return c = (n =
              {}, n[y] = c / 12, n[v] = c, n[l] = c / 3, n[m] =( s - a) / 6048e5, n[w] =( s - a) / 864e5, n[g] = s / 36e5, n[f] = s / 6e4, n[h] = s / 1e3, n)[i] || s,
            r ? c : S.a(c)
          },
          t.daysInMonth = function () {
            return this.endOf(v).$D
          },
          t.$locale = function () {
            return p[this.$L]
          },
          t.locale = function (e, t) {
            if (! e) 
              return this.$L;
            
            var r = this.clone(),
              n = i(e, t, !0);
            return n && (r.$L = n),
            r
          },
          t.clone = function () {
            return S.w(this.$d, this)
          },
          t.toDate = function () {
            return new Date(this.valueOf())
          },
          t.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          },
          t.toISOString = function () {
            return this.$d.toISOString()
          },
          t.toString = function () {
            return this.$d.toUTCString()
          },
          e
        }(),
        r = u.prototype;
      return d.prototype = r,
      [
        [
          "$ms", c
        ],
        [
          "$s", h
        ],
        [
          "$m", f
        ],
        [
          "$H", g
        ],
        [
          "$W", w
        ],
        [
          "$M", v
        ],
        [
          "$y", y
        ],
        [
          "$D", _
        ]
      ].forEach(function (t) {
        r[t[1]] = function (e) {
          return this.$g(e, t[0], t[1])
        }
      }),
      d.extend = function (e, t) {
        return e.$i || (e(t, u, d), e.$i =! 0),
        d
      },
      d.locale = i,
      d.isDayjs = n,
      d.unix = function (e) {
        return d(1e3 * e)
      },
      d.en = p[s],
      d.Ls = p,
      d.p = {},
      d
    }()
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !! e()
      } catch (e) {
        return !0
      }
    }
  },
  function (e, t, r) {
    "use strict";
    var n = r(170);
    r.d(t, "EventMessageType", function () {
      return n.a
    });
    var i = r(171);
    r.d(t, "IntegrationMode", function () {
      return i.a
    });
    var o = r(172);
    r.o(o, "Intent") && r.d(t, "Intent", function () {
      return o.Intent
    }),
    r.o(o, "SdkElement") && r.d(t, "SdkElement", function () {
      return o.SdkElement
    }),
    r.o(o, "placements") && r.d(t, "placements", function () {
      return o.placements
    });
    var a = r(56);
    r.o(a, "Intent") && r.d(t, "Intent", function () {
      return a.Intent
    }),
    r.o(a, "SdkElement") && r.d(t, "SdkElement", function () {
      return a.SdkElement
    }),
    r.o(a, "placements") && r.d(t, "placements", function () {
      return a.placements
    });
    var s = r(173);
    r.o(s, "Intent") && r.d(t, "Intent", function () {
      return s.Intent
    }),
    r.o(s, "SdkElement") && r.d(t, "SdkElement", function () {
      return s.SdkElement
    }),
    r.o(s, "placements") && r.d(t, "placements", function () {
      return s.placements
    })
  },
  function (r, e, t) {
    !function (e) {
      function t(e) {
        return e && e.Math == Math && e
      }
      r.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || function () {
        return this
      }() || Function("return this")()
    }.call(this, t(125))
  },
  function (e, t, r) {
    var n = r(5),
      i = r(75),
      o = r(10),
      a = r(76),
      s = r(104),
      r = r(132),
      c = i("wks"),
      l = n.Symbol,
      p = r ? l : l && l.withoutSetter || a;
    e.exports = function (e) {
      return o(c, e) && (s || "string" == typeof c[e]) || (s && o(l, e) ? c[e] = l[e] : c[e] = p("Symbol." + e)),
      c[e]
    }
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  },
  function (e, t, r) {
    var n = r(7);
    e.exports = function (e) {
      if (! n(e)) 
        throw TypeError(String(e) + " is not an object");
      
      return e
    }
  },
  function (e, t, r) {
    r = r(3);
    e.exports = ! r(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    })
  },
  function (e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return r.call(e, t)
    }
  },
  function (e, t, r) {
    var n = r(9),
      i = r(126),
      o = r(8),
      a = r(73),
      s = Object.defineProperty;
    t.f = n ? s : function (e, t, r) {
      if (o(e), t = a(t, !0), o(r), i) 
        try {
          return s(e, t, r)
        }
       catch (e) {}
      if ("get" in r || "set" in r) 
        throw TypeError("Accessors not supported");
      
      return "value" in r && (e[t] = r.value),
      e
    }
  },
  function (e, t, r) {
    var n = r(28);
    e.exports = function (e) {
      return Object(n(e))
    }
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      var r = Q[e] = b(K[V]);
      return G(r, {
        type: H,
        tag: e,
        description: t
      }),
      l || (r.description = t),
      r
    }
    function i(t, e) {
      w(t);
      var r = v(e),
        e = S(r).concat(ce(r));
      return q(e, function (e) {
        l && ! se.call(r, e) || ae(t, e, r[e])
      }),
      t
    }
    var o = r(0),
      a = r(5),
      s = r(35),
      c = r(34),
      l = r(9),
      p = r(104),
      d = r(132),
      u = r(3),
      h = r(10),
      f = r(61),
      g = r(7),
      w = r(8),
      m = r(12),
      v = r(22),
      y = r(73),
      _ = r(51),
      b = r(54),
      S = r(66),
      A = r(77),
      C = r(202),
      x = r(103),
      E = r(42),
      U = r(11),
      T = r(72),
      k = r(29),
      R = r(19),
      O = r(75),
      N = r(74),
      D = r(60),
      L = r(76),
      I = r(6),
      M = r(141),
      P = r(142),
      B = r(50),
      j = r(30),
      q = r(44).forEach,
      z = N("hidden"),
      H = "Symbol",
      V = "prototype",
      N = I("toPrimitive"),
      G = j.set,
      F = j.getterFor(H),
      Y = Object[V],
      K = a.Symbol,
      W = s("JSON", "stringify"),
      X = E.f,
      J = U.f,
      Z = C.f,
      $ = T.f,
      Q = O("symbols"),
      ee = O("op-symbols"),
      te = O("string-to-symbol-registry"),
      re = O("symbol-to-string-registry"),
      O = O("wks"),
      a = a.QObject,
      ne = ! a || ! a[V] || ! a[V].findChild,
      ie = l && u(function () {
        return 7 != b(J({}, "a", {
          get: function () {
            return J(this, "a", {value: 7}).a
          }
        })).a
      }) ? function (e, t, r) {
        var n = X(Y, t);
        n && delete Y[t],
        J(e, t, r),
        n && e !== Y && J(Y, t, n)
      } : J,
      oe = d ? function (e) {
        return "symbol" == typeof e
      } : function (e) {
        return Object(e)instanceof K
      },
      ae = function (e, t, r) {
        e === Y && ae(ee, t, r),
        w(e);
        t = y(t, !0);
        return w(r),
        h(Q, t) ? (r.enumerable ? (h(e, z) && e[z][t] && (e[z][t] =! 1),
        r = b(r, {
          enumerable: _(0, !1)
        })) : (h(e, z) || J(e, z, _(1, {})), e[z][t] =! 0), ie(e, t, r)) : J(e, t, r)
      },
      se = function (e) {
        var t = y(e, !0),
          e = $.call(this, t);
        return !(this === Y && h(Q, t) && ! h(ee, t)) && (!(e || ! h(this, t) || ! h(Q, t) || h(this, z) && this[z][t]) || e)
      },
      a = function (e, t) {
        var r = v(e),
          e = y(t, !0);
        if (r !== Y || ! h(Q, e) || h(ee, e)) {
          t = X(r, e);
          return ! t || ! h(Q, e) || h(r, z) && r[z][e] || (t.enumerable =! 0),
          t
        }
      },
      d = function (e) {
        var e = Z(v(e)),
          t = [];
        return q(e, function (e) {
          h(Q, e) || h(D, e) || t.push(e)
        }),
        t
      },
      ce = function (e) {
        var t = e === Y,
          e = Z(t ? ee : v(e)),
          r = [];
        return q(e, function (e) {
          ! h(Q, e) || t && ! h(Y, e) || r.push(Q[e])
        }),
        r
      };
    p || (R((K = function () {
      if (this instanceof K) 
        throw TypeError("Symbol is not a constructor");
      
      var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        t = L(e),
        r = function (e) {
          this === Y && r.call(ee, e),
          h(this, z) && h(this[z], t) && (this[z][t] =! 1),
          ie(this, t, _(1, e))
        };
      return l && ne && ie(Y, t, {
        configurable: !0,
        set: r
      }),
      n(t, e)
    })[V], "toString", function () {
      return F(this).tag
    }), R(K, "withoutSetter", function (e) {
      return n(L(e), e)
    }), T.f = se, U.f = ae, E.f = a, A.f = C.f = d, x.f = ce, M.f = function (e) {
      return n(I(e), e)
    },
    l && (J(K[V], "description", {
      configurable: !0,
      get: function () {
        return F(this).description
      }
    }), c || R(Y, "propertyIsEnumerable", se, {
      unsafe: !0
    }))),
    o({
      global: !0,
      wrap: !0,
      forced: ! p,
      sham: ! p
    }, {Symbol: K}),
    q(S(O), function (e) {
      P(e)
    }),
    o({
      target: H,
      stat: !0,
      forced: ! p
    }, {
      for  : function (e) {
        var t = String(e);
        if (h(te, t)) 
          return te[t];
        
        e = K(t);
        return te[t] = e,
        re[e] = t,
        e
      }
    ,
    keyFor: function (e) {
      if (! oe(e)) 
        throw TypeError(e + " is not a symbol");
      
      if (h(re, e)) 
        return re[e]
      
    },
    useSetter: function () {
      ne = !0
    },
    useSimple: function () {
      ne = !1
    }
  }),
  o({
    target: "Object",
    stat: !0,
    forced: ! p,
    sham: ! l
  }, {
    create: function (e, t) {
      return void 0 === t ? b(e) : i(b(e), t)
    },
    defineProperty: ae,
    defineProperties: i,
    getOwnPropertyDescriptor: a
  }),
  o({
    target: "Object",
    stat: !0,
    forced: ! p
  }, {
    getOwnPropertyNames: d,
    getOwnPropertySymbols: ce
  }),
  o({
    target: "Object",
    stat: !0,
    forced: u(function () {
      x.f(1)
    })
  }, {
    getOwnPropertySymbols: function (e) {
      return x.f(m(e))
    }
  }),
  W && o({
    target: "JSON",
    stat: !0,
    forced: ! p || u(function () {
      var e = K();
      return "[null]" != W([e]) || "{}" != W({a: e}) || "{}" != W(Object(e))
    })
  }, {
    stringify: function (e, t, r) {
      for (var n, i =[e], o = 1; o < arguments.length;) 
        i.push(arguments[o++]);
      
      if ((g(n = t) || void 0 !== e) && ! oe(e)) 
        return f(t) || (t = function (e, t) {
          if ("function" == typeof n && (t = n.call(this, e, t)), ! oe(t)) 
            return t
          
        }),
        i[1] = t,
        W.apply(null, i)
      
    }
  }),
  K[V][N] || k(K[V], N, K[V].valueOf),
  B(K, H),
  D[z] = !0
},
function (e, t, r) {
  var n = r(36),
    i = Math.min;
  e.exports = function (e) {
    return 0 < e ? i(n(e), 9007199254740991) : 0
  }
},
function (e, t, r) {
  var n = r(114),
    i = r(19),
    r = r(194);
  n || i(Object.prototype, "toString", r, {
    unsafe: !0
  })
},
function (e, t, r) {
  "use strict";
  var n = r(22),
    i = r(85),
    o = r(67),
    a = r(30),
    r = r(118),
    s = "Array Iterator",
    c = a.set,
    l = a.getterFor(s);
  e.exports = r(Array, "Array", function (e, t) {
    c(this, {
      type: s,
      target: n(e),
      index: 0,
      kind: t
    })
  }, function () {
    var e = l(this),
      t = e.target,
      r = e.kind,
      n = e.index ++;
    return ! t || n >= t.length ? {
      value: e.target = void 0,
      done: !0
    } : "keys" == r ? {
      value: n,
      done: !1
    } : "values" == r ? {
      value: t[n],
      done: !1
    } : {
      value: [
        n, t[n]
      ],
      done: !1
    }
  }, "values"),
  o.Arguments = o.Array,
  i("keys"),
  i("values"),
  i("entries")
},
function (e, t, r) {
  "use strict";
  var i = r(155),
    n = Object.prototype.toString;
  function o(e) {
    return "[object Array]" === n.call(e)
  }
  function a(e) {
    return void 0 === e
  }
  function s(e) {
    return null !== e && "object" == typeof e
  }
  function c(e) {
    if ("[object Object]" !== n.call(e)) 
      return !1;
    
    e = Object.getPrototypeOf(e);
    return null === e || e === Object.prototype
  }
  function l(e) {
    return "[object Function]" === n.call(e)
  }
  function p(e, t) {
    if (null != e) 
      if (o(e = "object" != typeof e ? [e] : e)) 
        for (var r = 0, n = e.length; r < n; r++) 
          t.call(null, e[r], r, e);
        
      
     else 
      for (var i in e) 
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
      
    
  }
  e.exports = {
    isArray: o,
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === n.call(e)
    },
    isBuffer: function (e) {
      return null !== e && ! a(e) && null !== e.constructor && ! a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData
    },
    isArrayBufferView: function (e) {
      return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    },
    isString: function (e) {
      return "string" == typeof e
    },
    isNumber: function (e) {
      return "number" == typeof e
    },
    isObject: s,
    isPlainObject: c,
    isUndefined: a,
    isDate: function (e) {
      return "[object Date]" === n.call(e)
    },
    isFile: function (e) {
      return "[object File]" === n.call(e)
    },
    isBlob: function (e) {
      return "[object Blob]" === n.call(e)
    },
    isFunction: l,
    isStream: function (e) {
      return s(e) && l(e.pipe)
    },
    isURLSearchParams: function (e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    },
    isStandardBrowserEnv: function () {
      return("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    },
    forEach: p,
    merge: function r() {
      var n = {};
      function e(e, t) {
        c(n[t]) && c(e) ? n[t] = r(n[t], e) : c(e) ? n[t] = r({}, e) : o(e) ? n[t] = e.slice() : n[t] = e
      }
      for (var t = 0, i = arguments.length; t < i; t++) 
        p(arguments[t], e);
      
      return n
    },
    extend: function (r, e, n) {
      return p(e, function (e, t) {
        r[t] = n && "function" == typeof e ? i(e, n) : e
      }),
      r
    },
    trim: function (e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "")
    },
    stripBOM: function (e) {
      return e = 65279 === e.charCodeAt(0) ? e.slice(1) : e
    }
  }
},
function (e, t, r) {
  "use strict";
  r.d(t, "g", function () {
    return o
  }),
  r.d(t, "f", function () {
    return s
  }),
  r.d(t, "a", function () {
    return c
  }),
  r.d(t, "e", function () {
    return l
  }),
  r.d(t, "h", function () {
    return p
  }),
  r.d(t, "b", function () {
    return h
  }),
  r.d(t, "c", function () {
    return d
  }),
  r.d(t, "d", function () {
    return u
  });
  function n(e, t) {
    var r,
      n,
      i,
      o;
    switch (null != (e = window.$sherpa.V2.getElement(e)) && (r = e.config.placement), t.data.intent) {
      case a.Intent.ViewProductDetails:
        !function (e, t) {
          e = null !== (e = e.data.parameters) && void 0 !== e ? e : {};
          window.$sherpa.V2.createElement("application", {
            selectedProductId: e.productId,
            language: e.language,
            currency: e.currency,
            placement: t.placement
          }).mount("sherpa-application-element")
        }(t, {placement: r});
        break;
      case a.Intent.CheckVisaStatus:
        console.log("CHECK VISA STATUS");
        break;
      case a.Intent.ScrollTo: n = t,
        (o = window.$sherpa.V2.getElement(n.elementId)) && o.domElement && (i = null === (n = n.data) || void 0 === n || null === (i = n.parameters) || void 0 === i ? void 0 : i.offsetTop, o = o.domElement.getBoundingClientRect(), window.scrollTo({
          top: o.top + (i || 0),
          behavior: "smooth"
        }))
    }
  }
  var a = r(4),
    i = r(1),
    o = function (e, t, r) {
      window.parent.postMessage(JSON.stringify({type: t, data: r, scope: "@joinsherpa/v2", elementId: e}), Object(i.f)())
    },
    s = function (e, t, r, n) {
      n = {
        type: t,
        data: n,
        scope: "@joinsherpa/v2"
      },
      e = '[data-element-id="'.concat(e, '"]'),
      e = document.querySelector(e);
      null != e && e.contentWindow.postMessage(JSON.stringify(n), r)
    },
    c = function (e, t, r) {
      window.onSherpaEvent({type: t, data: r, scope: "@joinsherpa/v2", elementId: e})
    },
    l = function (e) {
      window.addEventListener("message", e, !1)
    },
    p = function (e, t, r) {
      o(e, a.EventMessageType.sendIntent, {
        intent: t,
        parameters: r
      })
    },
    d = function (e, t) {
      e = document.querySelector('iframe[data-element-id="'.concat(e, '"]'));
      null != e && (e.style.height = "".concat(t, "px"))
    },
    u = function (e) {
      window.$sherpa.V2.getElement(e.elementId).unmount()
    },
    h = function (e, t) {
      switch (e.type) {
        case a.EventMessageType.iframeResized: d(t, e.data.height);
          break;
        case a.EventMessageType.sendIntent: n(t, e);
          break;
        case a.EventMessageType.legacyModalClose: u(e)
      }
    }
},
function (e, t, r) {
  var s = r(5),
    c = r(29),
    l = r(10),
    p = r(98),
    n = r(99),
    r = r(30),
    i = r.get,
    d = r.enforce,
    u = String(String).split("String");
  (e.exports = function (e, t, r, n) {
    var i = !! n && !! n.unsafe,
      o = !! n && !! n.enumerable,
      a = !! n && !! n.noTargetGet;
    "function" == typeof r && ("string" != typeof t || l(r, "name") || c(r, "name", t), (n = d(r)).source || (n.source = u.join("string" == typeof t ? t : ""))),
    e !== s ? (i ? ! a && e[t] && (o =! 0) : delete e[t], o ? e[t] = r : c(e, t, r)) : o ? e[t] = r : p(t, r)
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && i(this).source || n(this)
  })
},
function (e, t, r) {
  "use strict";
  var n = r(110).charAt,
    i = r(30),
    r = r(118),
    o = "String Iterator",
    a = i.set,
    s = i.getterFor(o);
  r(String, "String", function (e) {
    a(this, {
      type: o,
      string: String(e),
      index: 0
    })
  }, function () {
    var e = s(this),
      t = e.string,
      r = e.index;
    return r >= t.length ? {
      value: void 0,
      done: !0
    } : (r = n(t, r), e.index += r.length, {
      value: r,
      done: !1
    })
  })
},
function (e, t, r) {
  "use strict";
  var n = r(0),
    r = r(131);
  n({
    target: "Array",
    proto: !0,
    forced: [].forEach != r
  }, {forEach: r})
},
function (e, t, r) {
  var n = r(59),
    i = r(28);
  e.exports = function (e) {
    return n(i(e))
  }
},
function (e, t, r) {
  var n,
    i = r(5),
    o = r(133),
    a = r(131),
    s = r(29);
  for (n in o) {
    var c = i[n],
      c = c && c.prototype;
    if (c && c.forEach !== a) 
      try {
        s(c, "forEach", a)
      }
     catch (e) {
      c.forEach = a
    }
  }
},
function (e, t, r) {
  "use strict";
  var n,
    i,
    o,
    a,
    s,
    c = r(0),
    l = r(9),
    p = r(5),
    d = r(10),
    u = r(7),
    h = r(11).f,
    r = r(127),
    f = p.Symbol;
  ! l || "function" != typeof f || "description" in f.prototype && void 0 === f().description || (n =
    {}, r(i = function () {
    var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
      t = this instanceof i ? new f(e) : void 0 === e ? f() : f(e);
    return "" === e && (n[t] =! 0),
    t
  }, f), (r = i.prototype = f.prototype).constructor = i, o = r.toString, a = "Symbol(test)" == String(f("test")), s =/^Symbol\((.*)\)[^)]+$/, h(r, "description", {
    configurable: !0,
    get: function () {
      var e = u(this) ? this.valueOf() : this,
        t = o.call(e);
      if (d(n, e)) 
        return "";
      
      t = a ? t.slice(7, -1) : t.replace(s, "$1");
      return "" === t ? void 0 : t
    }
  }), c({
    global: !0,
    forced: !0
  }, {Symbol: i}))
},
function (e, t, r) {
  r(142)("iterator")
},
function (e, t, r) {
  var n,
    i = r(5),
    o = r(133),
    a = r(16),
    s = r(29),
    r = r(6),
    c = r("iterator"),
    l = r("toStringTag"),
    p = a.values;
  for (n in o) {
    var d = i[n],
      u = d && d.prototype;
    if (u) {
      if (u[c] !== p) 
        try {
          s(u, c, p)
        }
       catch (e) {
        u[c] = p
      }
      if (u[l] || s(u, l, n), o[n]) 
        for (var h in a) 
          if (u[h] !== a[h]) 
            try {
              s(u, h, a[h])
            }
          
        
       catch (e) {
        u[h] = a[h]
      }
    }
  }
},
function (e, t, r) {
  e.exports = function () {
    "use strict";
    /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */
    var r = Object.prototype.toString,
      C = Array.isArray || function e(t) {
        return r.call(t) === "[object Array]"
      };
    function u(e) {
      return typeof e === "function"
    }
    function o(e) {
      return C(e) ? "array" : typeof e
    }
    function x(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function l(e, t) {
      return e != null && typeof e === "object" && t in e
    }
    function p(e, t) {
      return e != null && typeof e !== "object" && e.hasOwnProperty && e.hasOwnProperty(t)
    }
    var n = RegExp.prototype.test;
    function t(e, t) {
      return n.call(e, t)
    }
    var i = /\S/;
    function E(e) {
      return ! t(i, e)
    }
    var a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    function e(e) {
      return String(e).replace(/[&<>"'`=\/]/g, function e(t) {
        return a[t]
      })
    }
    var U = /\s*/,
      T = /\s+/,
      k = /\s*=/,
      R = /\s*\}/,
      O = /#|\^|\/|>|\{|&|=|!/;
    function s(e, t) {
      if (! e) 
        return [];
      
      var r = false;
      var n = [];
      var i = [];
      var o = [];
      var a = false;
      var s = false;
      var c = "";
      var l = 0;
      function p() {
        if (a && ! s) 
          while (o.length) 
            delete i[o.pop()];
          
         else 
          o = [];
         a = false;
        s = false
      }
      var d,
        u,
        h;
      function f(e) {
        if (typeof e === "string") 
          e = e.split(T, 2);
        
        if (! C(e) || e.length !== 2) 
          throw new Error("Invalid tags: " + e);
        
        d = new RegExp(x(e[0]) + "\\s*");
        u = new RegExp("\\s*" + x(e[1]));
        h = new RegExp("\\s*" + x("}" + e[1]))
      }
      f(t || I.tags);
      var g = new L(e);
      var w,
        m,
        v,
        y,
        _,
        b;
      while (! g.eos()) {
        w = g.pos;
        v = g.scanUntil(d);
        if (v) 
          for (var S = 0, A = v.length; S < A; ++ S) {
            y = v.charAt(S);
            if (E(y)) {
              o.push(i.length);
              c += y
            } else {
              s = true;
              r = true;
              c += " "
            } i.push([
              "text",
              y,
              w,
              w + 1
            ]);
            w += 1;
            if (y === "\n") {
              p();
              c = "";
              l = 0;
              r = false
            }
          }
        
        if (! g.scan(d)) 
          break;
        
        a = true;
        m = g.scan(O) || "name";
        g.scan(U);
        if (m === "=") {
          v = g.scanUntil(k);
          g.scan(k);
          g.scanUntil(u)
        } else if (m === "{") {
          v = g.scanUntil(h);
          g.scan(R);
          g.scanUntil(u);
          m = "&"
        } else 
          v = g.scanUntil(u);
        
        if (! g.scan(u)) 
          throw new Error("Unclosed tag at " + g.pos);
        
        if (m == ">") 
          _ = [
            m,
            v,
            w,
            g.pos,
            c,
            l,
            r
          ];
         else 
          _ = [m, v, w, g.pos];
         l++;
        i.push(_);
        if (m === "#" || m === "^") 
          n.push(_);
         else if (m === "/") {
          b = n.pop();
          if (! b) 
            throw new Error('Unopened section "' + v + '" at ' + w);
          
          if (b[1] !== v) 
            throw new Error('Unclosed section "' + b[1] + '" at ' + w)
          
        } else if (m === "name" || m === "{" || m === "&") 
          s = true;
         else if (m === "=") 
          f(v)
        
      }
      p();
      b = n.pop();
      if (b) 
        throw new Error('Unclosed section "' + b[1] + '" at ' + g.pos);
      
      return D(N(i))
    }
    function N(e) {
      var t = [];
      var r,
        n;
      for (var i = 0, o = e.length; i < o; ++ i) {
        r = e[i];
        if (r) 
          if (r[0] === "text" && n && n[0] === "text") {
            n[1] += r[1];
            n[3] = r[3]
          }
         else {
          t.push(r);
         n = r
      }
    }
    return t
  }
  function D(e) {
    var t = [];
    var r = t;
    var n = [];
    var i,
      o;
    for (var a = 0, s = e.length; a < s; ++ a) {
      i = e[a];
      switch (i[0]) {
        case "#":
        case "^": r.push(i);
          n.push(i);
          r = i[4] = [];
          break;
        case "/": o = n.pop();
          o[5] = i[2];
          r = n.length > 0 ? n[n.length - 1][4] : t;
          break;
        default: r.push(i)
      }
    }
    return t
  }
  function L(e) {
    this.string = e;
    this.tail = e;
    this.pos = 0
  }
  function c(e, t) {
    this.view = e;
    this.cache = {
      ".": this.view
    };
    this.parent = t
  }
  function d() {
    this.templateCache = {
      _cache: {},
      set: function e(t, r) {
        this._cache[t] = r
      },
      get: function e(t) {
        return this._cache[t]
      },
      clear: function e() {
        this._cache = {}
      }
    }
  }
  L.prototype.eos = function e() {
    return this.tail === ""
  },
  L.prototype.scan = function e(t) {
    var r = this.tail.match(t);
    if (! r || r.index !== 0) 
      return "";
    
    var n = r[0];
    this.tail = this.tail.substring(n.length);
    this.pos += n.length;
    return n
  },
  L.prototype.scanUntil = function e(t) {
    var r = this.tail.search(t),
      n;
    switch (r) {
      case - 1: n = this.tail;
        this.tail = "";
        break;
      case 0: n = "";
        break;
      default: n = this.tail.substring(0, r);
        this.tail = this.tail.substring(r)
    }
    this.pos += n.length;
    return n
  },
  c.prototype.push = function e(t) {
    return new c(t, this)
  },
  c.prototype.lookup = function e(t) {
    var r = this.cache;
    var n;
    if (r.hasOwnProperty(t)) 
      n = r[t];
     else {
      var i = this,
        o,
        a,
        s,
        c = false;
      while (i) {
        if (t.indexOf(".") > 0) {
          o = i.view;
          a = t.split(".");
          s = 0;
          while (o != null && s < a.length) {
            if (s === a.length - 1) 
              c = l(o, a[s]) || p(o, a[s]);
            
            o = o[a[s++]]
          }
        } else {
          o = i.view[t];
          c = l(i.view, t)
        }
        if (c) {
          n = o;
          break
        }
        i = i.parent
      }
      r[t] = n
    }
    if (u(n)) 
      n = n.call(this.view);
    
    return n
  },
  d.prototype.clearCache = function e() {
    if (typeof this.templateCache !== "undefined") 
      this.templateCache.clear()
    
  },
  d.prototype.parse = function e(t, r) {
    var n = this.templateCache;
    var i = t + ":" + (
      r || I.tags
    ).join(":");
    var o = typeof n !== "undefined";
    var a = o ? n.get(i) : undefined;
    if (a == undefined) {
      a = s(t, r);
      o && n.set(i, a)
    }
    return a
  },
  d.prototype.render = function e(t, r, n, i) {
    var o = this.getConfigTags(i);
    var a = this.parse(t, o);
    var s = r instanceof c ? r : new c(r, undefined);
    return this.renderTokens(a, s, n, t, i)
  },
  d.prototype.renderTokens = function e(t, r, n, i, o) {
    var a = "";
    var s,
      c,
      l;
    for (var p = 0, d = t.length; p < d; ++ p) {
      l = undefined;
      s = t[p];
      c = s[0];
      if (c === "#") 
        l = this.renderSection(s, r, n, i, o);
       else if (c === "^") 
        l = this.renderInverted(s, r, n, i, o);
       else if (c === ">") 
        l = this.renderPartial(s, r, n, o);
       else if (c === "&") 
        l = this.unescapedValue(s, r);
       else if (c === "name") 
        l = this.escapedValue(s, r, o);
       else if (c === "text") 
        l = this.rawValue(s);
      
      if (l !== undefined) 
        a += l
      
    }
    return a
  },
  d.prototype.renderSection = function e(t, r, n, i, o) {
    var a = this;
    var s = "";
    var c = r.lookup(t[1]);
    function l(e) {
      return a.render(e, r, n, o)
    }
    if (! c) 
      return;
    
    if (C(c)) 
      for (var p = 0, d = c.length; p < d; ++ p) 
        s += this.renderTokens(t[4], r.push(c[p]), n, i, o);
      
     else if (typeof c === "object" || typeof c === "string" || typeof c === "number") 
      s += this.renderTokens(t[4], r.push(c), n, i, o);
     else if (u(c)) {
      if (typeof i !== "string") 
        throw new Error("Cannot use higher-order sections without the original template");
      
      c = c.call(r.view, i.slice(t[3], t[5]), l);
      if (c != null) 
        s += c
      
    } else 
      s += this.renderTokens(t[4], r, n, i, o);
    
    return s
  },
  d.prototype.renderInverted = function e(t, r, n, i, o) {
    var a = r.lookup(t[1]);
    if (! a || C(a) && a.length === 0) 
      return this.renderTokens(t[4], r, n, i, o)
    
  },
  d.prototype.indentPartial = function e(t, r, n) {
    var i = r.replace(/[^ \t]/g, "");
    var o = t.split("\n");
    for (var a = 0; a < o.length; a++) 
      if (o[a].length && (a > 0 || ! n)) 
        o[a] = i + o[a];
      
    
    return o.join("\n")
  },
  d.prototype.renderPartial = function e(t, r, n, i) {
    if (! n) 
      return;
    
    var o = this.getConfigTags(i);
    var a = u(n) ? n(t[1]) : n[t[1]];
    if (a != null) {
      var s = t[6];
      var c = t[5];
      var l = t[4];
      var p = a;
      if (c == 0 && l) 
        p = this.indentPartial(a, l, s);
      
      var d = this.parse(p, o);
      return this.renderTokens(d, r, n, p, i)
    }
  },
  d.prototype.unescapedValue = function e(t, r) {
    var n = r.lookup(t[1]);
    if (n != null) 
      return n
    
  },
  d.prototype.escapedValue = function e(t, r, n) {
    var i = this.getConfigEscape(n) || I.escape;
    var o = r.lookup(t[1]);
    if (o != null) 
      return typeof o === "number" && i === I.escape ? String(o) : i(o)
    
  },
  d.prototype.rawValue = function e(t) {
    return t[1]
  },
  d.prototype.getConfigTags = function e(t) {
    if (C(t)) 
      return t;
     else if (t && typeof t === "object") 
      return t.tags;
     else 
      return undefined
    
  },
  d.prototype.getConfigEscape = function e(t) {
    if (t && typeof t === "object" && ! C(t)) 
      return t.escape;
     else 
      return undefined
    
  };
  var I = {
      name: "mustache.js",
      version: "4.2.0",
      tags: [
        "{{", "}}"
      ],
      clearCache: undefined,
      escape: undefined,
      parse: undefined,
      render: undefined,
      Scanner: undefined,
      Context: undefined,
      Writer: undefined,
      set templateCache(e) {
        h.templateCache = e
      },
      get templateCache() {
        return h.templateCache
      }
    },
    h = new d;
  return I.clearCache = function e() {
    return h.clearCache()
  },
  I.parse = function e(t, r) {
    return h.parse(t, r)
  },
  I.render = function e(t, r, n, i) {
    if (typeof t !== "string") 
      throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + o(t) + '" was given as the first ' + "argument for mustache#render(template, view, partials)");
    
    return h.render(t, r, n, i)
  },
  I.escape = e,
  I.Scanner = L,
  I.Context = c,
  I.Writer = d,
  I
}()}, function (e, t) {
e.exports = function (e) {
  if (null == e) 
    throw TypeError("Can't call method on " + e);
  
  return e
}}, function (e, t, r) {
var n = r(9),
  i = r(11),
  o = r(51);
e.exports = n ? function (e, t, r) {
  return i.f(e, t, o(1, r))
} : function (e, t, r) {
  return e[t] = r,
  e
}}, function (e, t, r) {
var n,
  i,
  o,
  a,
  s,
  c,
  l,
  p,
  d = r(191),
  u = r(5),
  h = r(7),
  f = r(29),
  g = r(10),
  w = r(100),
  m = r(74),
  r = r(60),
  u = u.WeakMap;
l = d ? (n = w.state || (w.state = new u), i = n.get, o = n.has, a = n.set, s = function (e, t) {
  return t.facade = e,
  a.call(n, e, t),
  t
},
c = function (e) {
  return i.call(n, e) || {}
},
function (e) {
  return o.call(n, e)
}) : (r[p = m("state")] =! 0, s = function (e, t) {
  return t.facade = e,
  f(e, p, t),
  t
},
c = function (e) {
  return g(e, p) ? e[p] : {}
},
function (e) {
  return g(e, p)
}),
e.exports = {
  set: s,
  get: c,
  has: l,
  enforce: function (e) {
    return l(e) ? c(e) : s(e, {})
  },
  getterFor: function (r) {
    return function (e) {
      var t;
      if (! h(e) || (t = c(e)).type !== r) 
        throw TypeError("Incompatible receiver, " + r + " required");
      
      return t
    }
  }
}}, function (e, t) {
e.exports = function (e) {
  if ("function" != typeof e) 
    throw TypeError(String(e) + " is not a function");
  
  return e
}}, function (e, t, r) {
var n = r(0),
  i = r(12),
  o = r(66);
n({
  target: "Object",
  stat: !0,
  forced: r(3)(function () {
    o(1)
  })
}, {
  keys: function (e) {
    return o(i(e))
  }
})}, function (e, t, r) {
"use strict";
var n = r(0),
  i = r(44).filter;
n({
  target: "Array",
  proto: !0,
  forced: ! r(65)("filter")
}, {
  filter: function (e) {
    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
  }
})}, function (e, t) {
e.exports = !1}, function (e, t, r) {
function n(e) {
  return "function" == typeof e ? e : void 0
}
var i = r(129),
  o = r(5);
e.exports = function (e, t) {
  return arguments.length < 2 ? n(i[e]) || n(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
}}, function (e, t) {
var r = Math.ceil,
  n = Math.floor;
e.exports = function (e) {
  return isNaN(e = + e) ? 0 : (0 < e ? n : r)(e)
}}, function (e, t, r) {
"use strict";
var n = r(0),
  r = r(81);
n({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== r
}, {exec: r})}, function (e, t, r) {
var n = r(9),
  i = r(11).f,
  r = Function.prototype,
  o = r.toString,
  a = /^\s*function ([^ (]*)/;
! n || "name" in r || i(r, "name", {
  configurable: !0,
  get: function () {
    try {
      return o.call(this).match(a)[1]
    } catch (e) {
      return ""
    }
  }
})}, function (e, t, r) {
var n = r(0),
  i = r(3),
  o = r(22),
  a = r(42).f,
  r = r(9),
  i = i(function () {
    a(1)
  });
n({
  target: "Object",
  stat: !0,
  forced: ! r || i,
  sham: ! r
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return a(o(e), t)
  }
})}, function (e, t, r) {
var n = r(0),
  i = r(9),
  c = r(128),
  l = r(22),
  p = r(42),
  d = r(64);
n({
  target: "Object",
  stat: !0,
  sham: ! i
}, {
  getOwnPropertyDescriptors: function (e) {
    for (var t, r, n = l(e), i = p.f, o = c(n), a =
      {}, s = 0; o.length > s;) 
      void 0 !== (r = i(n, t = o[s++])) && d(a, t, r);
    
    return a
  }
})}, function (e, t, r) {
"use strict";
  var n = r(0),
i = r(3),
l = r(61),
p = r(7),
d = r(12),
u = r(14),
h = r(64),
f = r(80),
o = r(65),
a = r(6),
r = r(63),
g = a("isConcatSpreadable"),
w = 9007199254740991,
m = "Maximum allowed index exceeded",
i = 51 <= r || ! i(function () {
      var e = [];
      return e[g] = !1,
      e.concat()[0] !== e
    }),
o = o("concat");
  n({
    target: "Array",
    proto: !0,
    forced: ! i || ! o
  }, {
    concat: function (e) {
      for (var t, r, n, i = d(this), o = f(i, 0), a = 0, s = -1, c = arguments.length; s < c; s++) 
        if (function (e) {
          if (! p(e)) 
            return !1;
          
          var t = e[g];
          return void 0 !== t ? !! t : l(e)
        }(n = -1 === s ? i : arguments[s])) {
          if (r = u(n.length), w < a + r) 
            throw TypeError(m);
          
          for (t = 0; t < r; t++, a++) 
            t in n && h(o, a, n[t])
          
        }
      
     else {
      if (w <= a) 
        throw TypeError(m);
      
      h(o, a++, n)
    }
    return o.length = a,
    o
  }})},function (e, t, r) {var n = r(9),
i = r(72),
o = r(51),
a = r(22),
s = r(73),
c = r(10),
l = r(126),
p = Object.getOwnPropertyDescriptor;t.f = n ? p : function (e, t) {
if (e = a(e), t = s(t, !0), l) 
  try {
    return p(e, t)
  }
 catch (e) {}
if (c(e, t)) 
  return o(! i.f.call(e, t), e[t])
}},function (e, t) {var r = {}.toString;e.exports = function (e) {
return r.call(e).slice(8, -1)}},function (e, t, r) {var _ = r(45),
b = r(59),
S = r(12),
A = r(14),
C = r(80),
x = [].push,
r = function (u) {
  var h = 1 == u,
    f = 2 == u,
    g = 3 == u,
    w = 4 == u,
    m = 6 == u,
    v = 7 == u,
    y = 5 == u || m;
  return function (e, t, r, n) {
    for (var i, o, a = S(e), s = b(a), c = _(t, r, 3), l = A(s.length), p = 0, n = n || C, d = h ? n(e, l) : f || v ? n(e, 0) : void 0; p < l; p++) 
      if ((y || p in s) && (o = c(i = s[p], p, a), u)) 
        if (h) 
          d[p] = o;
        
      
    
   else if (o) 
    switch (u) {
      case 3:
        return !0;
      case 5:
        return i;
      case 6:
        return p;
      case 2: x.call(d, i)
    }
   else 
    switch (u) {
      case 4:
        return !1;
      case 7: x.call(d, i)
    }
  
  return m ? -1 : g || w ? w : d
}};e.exports = {
forEach: r(0),
map: r(1),
filter: r(2),
some: r(3),
every: r(4),
find: r(5),
findIndex: r(6),
filterOut: r(7)}},function (e, t, r) {var o = r(31);e.exports = function (n, i, e) {
if (o(n), void 0 === i) 
  return n;

switch (e) {
  case 0:
    return function () {
      return n.call(i)
    };
  case 1:
    return function (e) {
      return n.call(i, e)
    };
  case 2:
    return function (e, t) {
      return n.call(i, e, t)
    };
  case 3:
    return function (e, t, r) {
      return n.call(i, e, t, r)
    }
}
return function () {
  return n.apply(i, arguments)
}}},function (e, t, r) {"use strict";var n = r(3);e.exports = function (e, t) {
var r = [][e];
return !! r && n(function () {
  r.call(null, t || function () {
    throw 1
  }, 1)
})}},function (e, t, r) {"use strict";var n = r(0),
l = r(7),
p = r(61),
d = r(78),
u = r(14),
h = r(22),
f = r(64),
i = r(6),
r = r(65)("slice"),
g = i("species"),
w = [].slice,
m = Math.max;n({
target: "Array",
proto: !0,
forced: ! r}, {
slice: function (e, t) {
  var r,
    n,
    i,
    o = h(this),
    a = u(o.length),
    s = d(e, a),
    c = d(void 0 === t ? a : t, a);
  if (p(o) && ((r = "function" == typeof(r = o.constructor) && (r === Array || p(r.prototype)) || l(r) && null === (r = r[g]) ? void 0 : r) === Array || void 0 === r)) 
    return w.call(o, s, c);
  
  for (n = new(void 0 === r ? Array : r)(m(c - s, 0)),
  i = 0; s < c; s++,
  i ++) 
    s in o && f(n, i, o[s]);
  
  return n.length = i,
  n
}})},function (e, t, r) {"use strict";var n = r(108),
x = r(8),
E = r(14),
U = r(36),
o = r(28),
T = r(136),
k = r(193),
R = r(111),
O = Math.max,
N = Math.min;n("replace", 2, function (i, _, b, e) {
var S = e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
  A = e.REPLACE_KEEPS_$0,
  C = S ? "$" : "$0";
return [
  function (e, t) {
    var r = o(this),
      n = null == e ? void 0 : e[i];
    return void 0 !== n ? n.call(e, r, t) : _.call(String(r), e, t)
  },
  function (e, t) {
    if (! S && A || "string" == typeof t && -1 === t.indexOf(C)) {
      var r = b(_, e, this, t);
      if (r.done) 
        return r.value
      
    }
    var n = x(e),
      i = String(this),
      o = "function" == typeof t;
    o || (t = String(t));
    var a,
      s = n.global;
    s && (a = n.unicode, n.lastIndex = 0);
    for (var c =[];;) {
      var l = R(n, i);
      if (null === l) 
        break;
      
      if (c.push(l), ! s) 
        break;
      
      "" === String(l[0]) && (n.lastIndex = T(i, E(n.lastIndex), a))
    }
    for (var p, d = "", u = 0, h = 0; h < c.length; h++) {
      for (var l = c[h], f = String(l[0]), g = O(N(U(l.index), i.length), 0), w =[], m = 1; m < l.length; m++) 
        w.push(void 0 === (p = l[m]) ? p : String(p));
      
      var v,
        y = l.groups,
        y = o ? (v =[f].concat(w, g, i), void 0 !== y && v.push(y), String(t.apply(void 0, v))) : k(f, i, g, w, y, t);
      u <= g && (d += i.slice(u, g) + y, u = g + f.length)
    }
    return d + i.slice(u)
  }
]})},function (e, t, r) {"use strict";var n = r(19),
i = r(8),
o = r(3),
a = r(109),
s = "toString",
c = RegExp.prototype,
l = c[s],
r = o(function () {
  return "/a/b" != l.call({source: "a", flags: "b"})
}),
o = l.name != s;(r || o) && n(RegExp.prototype, s, function () {
var e = i(this),
  t = String(e.source),
  r = e.flags;
return "/" + t + "/" + String(void 0 === r && e instanceof RegExp && !("flags" in c) ? a.call(e) : r)}, {
unsafe: !0})},function (e, t, r) {var n = r(11).f,
i = r(10),
o = r(6)("toStringTag");e.exports = function (e, t, r) {
e && ! i(e = r ? e : e.prototype, o) && n(e, o, {
  configurable: !0,
  value: t
})}},function (e, t) {e.exports = function (e, t) {
return {
  enumerable: !(1 & e),
  configurable: !(2 & e),
  writable: !(4 & e),
  value: t
}}},function (e, t, r) {"use strict";var n = r(0),
i = r(101).indexOf,
r = r(46),
o = [].indexOf,
a = !! o && 1 / [1].indexOf(1, -0) < 0,
r = r("indexOf");n({
target: "Array",
proto: !0,
forced: a || ! r}, {
indexOf: function (e) {
  return a ? o.apply(this, arguments) || 0 : i(this, e, 1 < arguments.length ? arguments[1] : void 0)
}})},function (e, t, r) {"use strict";var n = r(0),
i = r(59),
o = r(22),
r = r(46),
a = [].join,
i = i != Object,
r = r("join", ",");n({
target: "Array",
proto: !0,
forced: i || ! r}, {
join: function (e) {
  return a.call(o(this), void 0 === e ? "," : e)
}})},function (e, t, r) {function n() {}function i(e) {
return "<script>" + e + "</" + h + ">"}var o,
a = r(8),
s = r(139),
c = r(102),
l = r(60),
p = r(140),
d = r(97),
r = r(74),
u = "prototype",
h = "script",
f = r("IE_PROTO"),
g = function () {
  try {
    o = document.domain && new ActiveXObject("htmlfile")
  } catch (e) {}
  var e;
  g = o ? function (e) {
    e.write(i("")),
    e.close();
    var t = e.parentWindow.Object;
    return e = null,
    t
  }(o) : ((e = d("iframe")).style.display = "none", p.appendChild(e), e.src = String("javascript:"), (e = e.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), e.F);
  for (var t = c.length; t--;) 
    delete g[u][c[t]];
  
  return g()
};l[f] = !0,e.exports = Object.create || function (e, t) {
var r;
return null !== e ? (n[u] = a(e), r = new n, n[u] = null, r[f] = e) : r = g(),
void 0 === t ? r : s(r, t)}},function (e, t, r) {"use strict";var n = r(0),
i = r(44).find,
o = r(85),
r = "find",
a = !0;r in[] && Array(1)[r](function () {
a = !1}),n({
target: "Array",
proto: !0,
forced: a}, {
find: function (e) {
  return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
}}),o(r)},function (e, t) {},function (e, t, r) {"use strict";var n = r(169);r.o(n, "TripElement") && r.d(t, "TripElement", function () {
return n.TripElement}),r.o(n, "createApplicationElement") && r.d(t, "createApplicationElement", function () {
return n.createApplicationElement}),r.o(n, "createMapElement") && r.d(t, "createMapElement", function () {
return n.createMapElement}),r.o(n, "createTripElement") && r.d(t, "createTripElement", function () {
return n.createTripElement});var i = r(177);r.o(i, "TripElement") && r.d(t, "TripElement", function () {
return i.TripElement}),r.o(i, "createApplicationElement") && r.d(t, "createApplicationElement", function () {
return i.createApplicationElement}),r.o(i, "createMapElement") && r.d(t, "createMapElement", function () {
return i.createMapElement}),r.o(i, "createTripElement") && r.d(t, "createTripElement", function () {
return i.createTripElement});var o = r(180);r.d(t, "createApplicationElement", function () {
return o.a})},function (n, e, t) {!function () {
"use strict";
for (var i =[
  null, 0, {}
], s = 44032, c = 4352, l = function (e, t) {
  this.codepoint = e,
  this.feature = t
},
o =
  {},
a =[],
e = 0; e <= 255; ++ e) 
  a[e] = 0;

l.fromCharCode = [
  function (e, t, r) {
    return t < 60 || 13311 < t && t < 42607 ? new l(t, i) : e(t, r)
  },
  function (e, t, r) {
    var n = o[t];
    return n || (n = e(t, r)).feature && 10 < ++ a[t >> 8 & 255] && (o[t] = n),
    n
  },
  function (e, t, r) {
    return r ? e(t, r) : new l(t, null)
  },
  function (e, t, r) {
    if (t < c || 4371 <= t && t < s || 55204 < t) 
      return e(t, r);
    
    if (c <= t && t < 4371) {
      for (var n =
        {}, i = 21 * (t - c), o = 0; o < 21; ++ o) 
        n[4449 + o] = s + 28 * (o + i);
      
      return new l(t, [,, n])
    }
    var a = [];
    if (0 != (r =( e = t - s) % 28)) 
      a[0] = [
        s + e - r,
        4519 + r
      ];
     else 
      for (a[0] =[
        c + Math.floor(e / 588),
        4449 + Math.floor(e % 588 / 28)
      ], a[2] =
        {}, o = 1; o < 28; ++ o) 
        a[2][4519 + o] = t + o;
      
    
    return new l(t, a)
  },
  function (e, t, r) {
    var n = (l.udata[65280 & t] || {})[t];
    return new l(t, n || i)
  }
].reduceRight(function (r, n) {
  return function (e, t) {
    return n(r, e, t)
  }
}, null),
l.isHighSurrogate = function (e) {
  return 55296 <= e && e <= 56319
},
l.isLowSurrogate = function (e) {
  return 56320 <= e && e <= 57343
},
l.prototype.prepFeature = function () {
  this.feature || (this.feature = l.fromCharCode(this.codepoint, !0).feature)
},
l.prototype.toString = function () {
  if (this.codepoint < 65536) 
    return String.fromCharCode(this.codepoint);
  
  var e = this.codepoint - 65536;
  return String.fromCharCode(Math.floor(e / 1024) + 55296, e % 1024 + 56320)
},
l.prototype.getDecomp = function () {
  return this.prepFeature(),
  this.feature[0] || null
},
l.prototype.isCompatibility = function () {
  return this.prepFeature(),
  !!this.feature[1] && 256 & this.feature[1]
},
l.prototype.isExclude = function () {
  return this.prepFeature(),
  !!this.feature[1] && 512 & this.feature[1]
},
l.prototype.getCanonicalClass = function () {
  return this.prepFeature(),
  this.feature[1] ? 255 & this.feature[1] : 0
},
l.prototype.getComposite = function (e) {
  if (this.prepFeature(), !this.feature[2]) 
    return null;
  
  e = this.feature[2][e.codepoint];
  return e ? l.fromCharCode(e) : null
};
function p(e) {
  this.str = e,
  this.cursor = 0
}
p.prototype.next = function () {
  if (this.str && this.cursor < this.str.length) {
    var e,
      t = this.str.charCodeAt(this.cursor ++);
    return l.isHighSurrogate(t) && this.cursor < this.str.length && l.isLowSurrogate(e = this.str.charCodeAt(this.cursor)) && (t = 1024 * (t - 55296) + (e - 56320) + 65536, ++ this.cursor),
    l.fromCharCode(t)
  }
  return this.str = null
};
function d(e, t) {
  this.it = e,
  this.canonical = t,
  this.resBuf = []
}
d.prototype.next = function () {
  if (0 === this.resBuf.length) {
    var e = this.it.next();
    if (! e) 
      return null;
    
    this.resBuf = function e(t, r) {
      var n = r.getDecomp();
      if (! n || t && r.isCompatibility()) 
        return [r];
      
      for (var i =[], o = 0; o < n.length; ++ o) 
        var a = e(t, l.fromCharCode(n[o])),
          i = i.concat(a);
      
      return i
    }(this.canonical, e)
  }
  return this.resBuf.shift()
};
function u(e) {
  this.it = e,
  this.resBuf = []
}
u.prototype.next = function () {
  if (0 === this.resBuf.length) 
    do {
      var e = this.it.next();
      if (! e) 
        break;
      
      var t = e.getCanonicalClass(),
        r = this.resBuf.length;
      if (0 !== t) 
        for (; 0 < r; -- r) 
          if (this.resBuf[r - 1].getCanonicalClass() <= t) 
            break
          
        
      
    } while (this.resBuf.splice(r, 0, e), 0 !== t);
  
  return this.resBuf.shift()
};
function h(e) {
  this.it = e,
  this.procBuf = [],
  this.resBuf = [],
  this.lastClass = null
}
h.prototype.next = function () {
  for (; 0 === this.resBuf.length;) {
    var e,
      t,
      r = this.it.next();
    if (! r) {
      this.resBuf = this.procBuf,
      this.procBuf = [];
      break
    }
    0 === this.procBuf.length ? (this.lastClass = r.getCanonicalClass(), this.procBuf.push(r)) : (e = this.procBuf[0].getComposite(r), t = r.getCanonicalClass(), e && (this.lastClass < t || 0 === this.lastClass) ? this.procBuf[0] = e : (0 === t && (this.resBuf = this.procBuf, this.procBuf =[]), this.lastClass = t, this.procBuf.push(r)))
  }
  return this.resBuf.shift()
};
function t(e, t) {
  for (var r, n = function (e, t) {
    switch (e) {
      case "NFD":
        return new u(new d(new p(t), !0));
      case "NFKD":
        return new u(new d(new p(t), !1));
      case "NFC":
        return new h(new u(new d(new p(t), !0)));
      case "NFKC":
        return new h(new u(new d(new p(t), !1)))
    }
    throw e + " is invalid"
  }(e, t),
  i = ""; r = n.next();) 
    i += r.toString();
  
  return i
}
l.udata = {
  0: {
    60: [
      ,, {
        824: 8814
      }
    ],
    61: [
      ,, {
        824: 8800
      }
    ],
    62: [
      ,, {
        824: 8815
      }
    ],
    65: [
      ,, {
        768: 192,
        769: 193,
        770: 194,
        771: 195,
        772: 256,
        774: 258,
        775: 550,
        776: 196,
        777: 7842,
        778: 197,
        780: 461,
        783: 512,
        785: 514,
        803: 7840,
        805: 7680,
        808: 260
      }
    ],
    66: [
      ,, {
        775: 7682,
        803: 7684,
        817: 7686
      }
    ],
    67: [
      ,, {
        769: 262,
        770: 264,
        775: 266,
        780: 268,
        807: 199
      }
    ],
    68: [
      ,, {
        775: 7690,
        780: 270,
        803: 7692,
        807: 7696,
        813: 7698,
        817: 7694
      }
    ],
    69: [
      ,, {
        768: 200,
        769: 201,
        770: 202,
        771: 7868,
        772: 274,
        774: 276,
        775: 278,
        776: 203,
        777: 7866,
        780: 282,
        783: 516,
        785: 518,
        803: 7864,
        807: 552,
        808: 280,
        813: 7704,
        816: 7706
      }
    ],
    70: [
      ,, {
        775: 7710
      }
    ],
    71: [
      ,, {
        769: 500,
        770: 284,
        772: 7712,
        774: 286,
        775: 288,
        780: 486,
        807: 290
      }
    ],
    72: [
      ,, {
        770: 292,
        775: 7714,
        776: 7718,
        780: 542,
        803: 7716,
        807: 7720,
        814: 7722
      }
    ],
    73: [
      ,, {
        768: 204,
        769: 205,
        770: 206,
        771: 296,
        772: 298,
        774: 300,
        775: 304,
        776: 207,
        777: 7880,
        780: 463,
        783: 520,
        785: 522,
        803: 7882,
        808: 302,
        816: 7724
      }
    ],
    74: [
      ,, {
        770: 308
      }
    ],
    75: [
      ,, {
        769: 7728,
        780: 488,
        803: 7730,
        807: 310,
        817: 7732
      }
    ],
    76: [
      ,, {
        769: 313,
        780: 317,
        803: 7734,
        807: 315,
        813: 7740,
        817: 7738
      }
    ],
    77: [
      ,, {
        769: 7742,
        775: 7744,
        803: 7746
      }
    ],
    78: [
      ,, {
        768: 504,
        769: 323,
        771: 209,
        775: 7748,
        780: 327,
        803: 7750,
        807: 325,
        813: 7754,
        817: 7752
      }
    ],
    79: [
      ,, {
        768: 210,
        769: 211,
        770: 212,
        771: 213,
        772: 332,
        774: 334,
        775: 558,
        776: 214,
        777: 7886,
        779: 336,
        780: 465,
        783: 524,
        785: 526,
        795: 416,
        803: 7884,
        808: 490
      }
    ],
    80: [
      ,, {
        769: 7764,
        775: 7766
      }
    ],
    82: [
      ,, {
        769: 340,
        775: 7768,
        780: 344,
        783: 528,
        785: 530,
        803: 7770,
        807: 342,
        817: 7774
      }
    ],
    83: [
      ,, {
        769: 346,
        770: 348,
        775: 7776,
        780: 352,
        803: 7778,
        806: 536,
        807: 350
      }
    ],
    84: [
      ,, {
        775: 7786,
        780: 356,
        803: 7788,
        806: 538,
        807: 354,
        813: 7792,
        817: 7790
      }
    ],
    85: [
      ,, {
        768: 217,
        769: 218,
        770: 219,
        771: 360,
        772: 362,
        774: 364,
        776: 220,
        777: 7910,
        778: 366,
        779: 368,
        780: 467,
        783: 532,
        785: 534,
        795: 431,
        803: 7908,
        804: 7794,
        808: 370,
        813: 7798,
        816: 7796
      }
    ],
    86: [
      ,, {
        771: 7804,
        803: 7806
      }
    ],
    87: [
      ,, {
        768: 7808,
        769: 7810,
        770: 372,
        775: 7814,
        776: 7812,
        803: 7816
      }
    ],
    88: [
      ,, {
        775: 7818,
        776: 7820
      }
    ],
    89: [
      ,, {
        768: 7922,
        769: 221,
        770: 374,
        771: 7928,
        772: 562,
        775: 7822,
        776: 376,
        777: 7926,
        803: 7924
      }
    ],
    90: [
      ,, {
        769: 377,
        770: 7824,
        775: 379,
        780: 381,
        803: 7826,
        817: 7828
      }
    ],
    97: [
      ,, {
        768: 224,
        769: 225,
        770: 226,
        771: 227,
        772: 257,
        774: 259,
        775: 551,
        776: 228,
        777: 7843,
        778: 229,
        780: 462,
        783: 513,
        785: 515,
        803: 7841,
        805: 7681,
        808: 261
      }
    ],
    98: [
      ,, {
        775: 7683,
        803: 7685,
        817: 7687
      }
    ],
    99: [
      ,, {
        769: 263,
        770: 265,
        775: 267,
        780: 269,
        807: 231
      }
    ],
    100: [
      ,, {
        775: 7691,
        780: 271,
        803: 7693,
        807: 7697,
        813: 7699,
        817: 7695
      }
    ],
    101: [
      ,, {
        768: 232,
        769: 233,
        770: 234,
        771: 7869,
        772: 275,
        774: 277,
        775: 279,
        776: 235,
        777: 7867,
        780: 283,
        783: 517,
        785: 519,
        803: 7865,
        807: 553,
        808: 281,
        813: 7705,
        816: 7707
      }
    ],
    102: [
      ,, {
        775: 7711
      }
    ],
    103: [
      ,, {
        769: 501,
        770: 285,
        772: 7713,
        774: 287,
        775: 289,
        780: 487,
        807: 291
      }
    ],
    104: [
      ,, {
        770: 293,
        775: 7715,
        776: 7719,
        780: 543,
        803: 7717,
        807: 7721,
        814: 7723,
        817: 7830
      }
    ],
    105: [
      ,, {
        768: 236,
        769: 237,
        770: 238,
        771: 297,
        772: 299,
        774: 301,
        776: 239,
        777: 7881,
        780: 464,
        783: 521,
        785: 523,
        803: 7883,
        808: 303,
        816: 7725
      }
    ],
    106: [
      ,, {
        770: 309,
        780: 496
      }
    ],
    107: [
      ,, {
        769: 7729,
        780: 489,
        803: 7731,
        807: 311,
        817: 7733
      }
    ],
    108: [
      ,, {
        769: 314,
        780: 318,
        803: 7735,
        807: 316,
        813: 7741,
        817: 7739
      }
    ],
    109: [
      ,, {
        769: 7743,
        775: 7745,
        803: 7747
      }
    ],
    110: [
      ,, {
        768: 505,
        769: 324,
        771: 241,
        775: 7749,
        780: 328,
        803: 7751,
        807: 326,
        813: 7755,
        817: 7753
      }
    ],
    111: [
      ,, {
        768: 242,
        769: 243,
        770: 244,
        771: 245,
        772: 333,
        774: 335,
        775: 559,
        776: 246,
        777: 7887,
        779: 337,
        780: 466,
        783: 525,
        785: 527,
        795: 417,
        803: 7885,
        808: 491
      }
    ],
    112: [
      ,, {
        769: 7765,
        775: 7767
      }
    ],
    114: [
      ,, {
        769: 341,
        775: 7769,
        780: 345,
        783: 529,
        785: 531,
        803: 7771,
        807: 343,
        817: 7775
      }
    ],
    115: [
      ,, {
        769: 347,
        770: 349,
        775: 7777,
        780: 353,
        803: 7779,
        806: 537,
        807: 351
      }
    ],
    116: [
      ,, {
        775: 7787,
        776: 7831,
        780: 357,
        803: 7789,
        806: 539,
        807: 355,
        813: 7793,
        817: 7791
      }
    ],
    117: [
      ,, {
        768: 249,
        769: 250,
        770: 251,
        771: 361,
        772: 363,
        774: 365,
        776: 252,
        777: 7911,
        778: 367,
        779: 369,
        780: 468,
        783: 533,
        785: 535,
        795: 432,
        803: 7909,
        804: 7795,
        808: 371,
        813: 7799,
        816: 7797
      }
    ],
    118: [
      ,, {
        771: 7805,
        803: 7807
      }
    ],
    119: [
      ,, {
        768: 7809,
        769: 7811,
        770: 373,
        775: 7815,
        776: 7813,
        778: 7832,
        803: 7817
      }
    ],
    120: [
      ,, {
        775: 7819,
        776: 7821
      }
    ],
    121: [
      ,, {
        768: 7923,
        769: 253,
        770: 375,
        771: 7929,
        772: 563,
        775: 7823,
        776: 255,
        777: 7927,
        778: 7833,
        803: 7925
      }
    ],
    122: [
      ,, {
        769: 378,
        770: 7825,
        775: 380,
        780: 382,
        803: 7827,
        817: 7829
      }
    ],
    160: [
      [32], 256
    ],
    168: [
      [
        32, 776
      ],
      256, {
        768: 8173,
        769: 901,
        834: 8129
      }
    ],
    170: [
      [97], 256
    ],
    175: [
      [
        32, 772
      ],
      256
    ],
    178: [
      [50], 256
    ],
    179: [
      [51], 256
    ],
    180: [
      [
        32, 769
      ],
      256
    ],
    181: [
      [956], 256
    ],
    184: [
      [
        32, 807
      ],
      256
    ],
    185: [
      [49], 256
    ],
    186: [
      [111], 256
    ],
    188: [
      [
        49, 8260, 52
      ],
      256
    ],
    189: [
      [
        49, 8260, 50
      ],
      256
    ],
    190: [
      [
        51, 8260, 52
      ],
      256
    ],
    192: [
      [65, 768]
    ],
    193: [
      [65, 769]
    ],
    194: [
      [
        65, 770
      ],, {
        768: 7846,
        769: 7844,
        771: 7850,
        777: 7848
      }
    ],
    195: [
      [65, 771]
    ],
    196: [
      [
        65, 776
      ],, {
        772: 478
      }
    ],
    197: [
      [
        65, 778
      ],, {
        769: 506
      }
    ],
    198: [
      ,, {
        769: 508,
        772: 482
      }
    ],
    199: [
      [
        67, 807
      ],, {
        769: 7688
      }
    ],
    200: [
      [69, 768]
    ],
    201: [
      [69, 769]
    ],
    202: [
      [
        69, 770
      ],, {
        768: 7872,
        769: 7870,
        771: 7876,
        777: 7874
      }
    ],
    203: [
      [69, 776]
    ],
    204: [
      [73, 768]
    ],
    205: [
      [73, 769]
    ],
    206: [
      [73, 770]
    ],
    207: [
      [
        73, 776
      ],, {
        769: 7726
      }
    ],
    209: [
      [78, 771]
    ],
    210: [
      [79, 768]
    ],
    211: [
      [79, 769]
    ],
    212: [
      [
        79, 770
      ],, {
        768: 7890,
        769: 7888,
        771: 7894,
        777: 7892
      }
    ],
    213: [
      [
        79, 771
      ],, {
        769: 7756,
        772: 556,
        776: 7758
      }
    ],
    214: [
      [
        79, 776
      ],, {
        772: 554
      }
    ],
    216: [
      ,, {
        769: 510
      }
    ],
    217: [
      [85, 768]
    ],
    218: [
      [85, 769]
    ],
    219: [
      [85, 770]
    ],
    220: [
      [
        85, 776
      ],, {
        768: 475,
        769: 471,
        772: 469,
        780: 473
      }
    ],
    221: [
      [89, 769]
    ],
    224: [
      [97, 768]
    ],
    225: [
      [97, 769]
    ],
    226: [
      [
        97, 770
      ],, {
        768: 7847,
        769: 7845,
        771: 7851,
        777: 7849
      }
    ],
    227: [
      [97, 771]
    ],
    228: [
      [
        97, 776
      ],, {
        772: 479
      }
    ],
    229: [
      [
        97, 778
      ],, {
        769: 507
      }
    ],
    230: [
      ,, {
        769: 509,
        772: 483
      }
    ],
    231: [
      [
        99, 807
      ],, {
        769: 7689
      }
    ],
    232: [
      [101, 768]
    ],
    233: [
      [101, 769]
    ],
    234: [
      [
        101, 770
      ],, {
        768: 7873,
        769: 7871,
        771: 7877,
        777: 7875
      }
    ],
    235: [
      [101, 776]
    ],
    236: [
      [105, 768]
    ],
    237: [
      [105, 769]
    ],
    238: [
      [105, 770]
    ],
    239: [
      [
        105, 776
      ],, {
        769: 7727
      }
    ],
    241: [
      [110, 771]
    ],
    242: [
      [111, 768]
    ],
    243: [
      [111, 769]
    ],
    244: [
      [
        111, 770
      ],, {
        768: 7891,
        769: 7889,
        771: 7895,
        777: 7893
      }
    ],
    245: [
      [
        111, 771
      ],, {
        769: 7757,
        772: 557,
        776: 7759
      }
    ],
    246: [
      [
        111, 776
      ],, {
        772: 555
      }
    ],
    248: [
      ,, {
        769: 511
      }
    ],
    249: [
      [117, 768]
    ],
    250: [
      [117, 769]
    ],
    251: [
      [117, 770]
    ],
    252: [
      [
        117, 776
      ],, {
        768: 476,
        769: 472,
        772: 470,
        780: 474
      }
    ],
    253: [
      [121, 769]
    ],
    255: [
      [121, 776]
    ]
  },
  256: {
    256: [
      [65, 772]
    ],
    257: [
      [97, 772]
    ],
    258: [
      [
        65, 774
      ],, {
        768: 7856,
        769: 7854,
        771: 7860,
        777: 7858
      }
    ],
    259: [
      [
        97, 774
      ],, {
        768: 7857,
        769: 7855,
        771: 7861,
        777: 7859
      }
    ],
    260: [
      [65, 808]
    ],
    261: [
      [97, 808]
    ],
    262: [
      [67, 769]
    ],
    263: [
      [99, 769]
    ],
    264: [
      [67, 770]
    ],
    265: [
      [99, 770]
    ],
    266: [
      [67, 775]
    ],
    267: [
      [99, 775]
    ],
    268: [
      [67, 780]
    ],
    269: [
      [99, 780]
    ],
    270: [
      [68, 780]
    ],
    271: [
      [100, 780]
    ],
    274: [
      [
        69, 772
      ],, {
        768: 7700,
        769: 7702
      }
    ],
    275: [
      [
        101, 772
      ],, {
        768: 7701,
        769: 7703
      }
    ],
    276: [
      [69, 774]
    ],
    277: [
      [101, 774]
    ],
    278: [
      [69, 775]
    ],
    279: [
      [101, 775]
    ],
    280: [
      [69, 808]
    ],
    281: [
      [101, 808]
    ],
    282: [
      [69, 780]
    ],
    283: [
      [101, 780]
    ],
    284: [
      [71, 770]
    ],
    285: [
      [103, 770]
    ],
    286: [
      [71, 774]
    ],
    287: [
      [103, 774]
    ],
    288: [
      [71, 775]
    ],
    289: [
      [103, 775]
    ],
    290: [
      [71, 807]
    ],
    291: [
      [103, 807]
    ],
    292: [
      [72, 770]
    ],
    293: [
      [104, 770]
    ],
    296: [
      [73, 771]
    ],
    297: [
      [105, 771]
    ],
    298: [
      [73, 772]
    ],
    299: [
      [105, 772]
    ],
    300: [
      [73, 774]
    ],
    301: [
      [105, 774]
    ],
    302: [
      [73, 808]
    ],
    303: [
      [105, 808]
    ],
    304: [
      [73, 775]
    ],
    306: [
      [
        73, 74
      ],
      256
    ],
    307: [
      [
        105, 106
      ],
      256
    ],
    308: [
      [74, 770]
    ],
    309: [
      [106, 770]
    ],
    310: [
      [75, 807]
    ],
    311: [
      [107, 807]
    ],
    313: [
      [76, 769]
    ],
    314: [
      [108, 769]
    ],
    315: [
      [76, 807]
    ],
    316: [
      [108, 807]
    ],
    317: [
      [76, 780]
    ],
    318: [
      [108, 780]
    ],
    319: [
      [
        76, 183
      ],
      256
    ],
    320: [
      [
        108, 183
      ],
      256
    ],
    323: [
      [78, 769]
    ],
    324: [
      [110, 769]
    ],
    325: [
      [78, 807]
    ],
    326: [
      [110, 807]
    ],
    327: [
      [78, 780]
    ],
    328: [
      [110, 780]
    ],
    329: [
      [
        700, 110
      ],
      256
    ],
    332: [
      [
        79, 772
      ],, {
        768: 7760,
        769: 7762
      }
    ],
    333: [
      [
        111, 772
      ],, {
        768: 7761,
        769: 7763
      }
    ],
    334: [
      [79, 774]
    ],
    335: [
      [111, 774]
    ],
    336: [
      [79, 779]
    ],
    337: [
      [111, 779]
    ],
    340: [
      [82, 769]
    ],
    341: [
      [114, 769]
    ],
    342: [
      [82, 807]
    ],
    343: [
      [114, 807]
    ],
    344: [
      [82, 780]
    ],
    345: [
      [114, 780]
    ],
    346: [
      [
        83, 769
      ],, {
        775: 7780
      }
    ],
    347: [
      [
        115, 769
      ],, {
        775: 7781
      }
    ],
    348: [
      [83, 770]
    ],
    349: [
      [115, 770]
    ],
    350: [
      [83, 807]
    ],
    351: [
      [115, 807]
    ],
    352: [
      [
        83, 780
      ],, {
        775: 7782
      }
    ],
    353: [
      [
        115, 780
      ],, {
        775: 7783
      }
    ],
    354: [
      [84, 807]
    ],
    355: [
      [116, 807]
    ],
    356: [
      [84, 780]
    ],
    357: [
      [116, 780]
    ],
    360: [
      [
        85, 771
      ],, {
        769: 7800
      }
    ],
    361: [
      [
        117, 771
      ],, {
        769: 7801
      }
    ],
    362: [
      [
        85, 772
      ],, {
        776: 7802
      }
    ],
    363: [
      [
        117, 772
      ],, {
        776: 7803
      }
    ],
    364: [
      [85, 774]
    ],
    365: [
      [117, 774]
    ],
    366: [
      [85, 778]
    ],
    367: [
      [117, 778]
    ],
    368: [
      [85, 779]
    ],
    369: [
      [117, 779]
    ],
    370: [
      [85, 808]
    ],
    371: [
      [117, 808]
    ],
    372: [
      [87, 770]
    ],
    373: [
      [119, 770]
    ],
    374: [
      [89, 770]
    ],
    375: [
      [121, 770]
    ],
    376: [
      [89, 776]
    ],
    377: [
      [90, 769]
    ],
    378: [
      [122, 769]
    ],
    379: [
      [90, 775]
    ],
    380: [
      [122, 775]
    ],
    381: [
      [90, 780]
    ],
    382: [
      [122, 780]
    ],
    383: [
      [115], 256, {
        775: 7835
      }
    ],
    416: [
      [
        79, 795
      ],, {
        768: 7900,
        769: 7898,
        771: 7904,
        777: 7902,
        803: 7906
      }
    ],
    417: [
      [
        111, 795
      ],, {
        768: 7901,
        769: 7899,
        771: 7905,
        777: 7903,
        803: 7907
      }
    ],
    431: [
      [
        85, 795
      ],, {
        768: 7914,
        769: 7912,
        771: 7918,
        777: 7916,
        803: 7920
      }
    ],
    432: [
      [
        117, 795
      ],, {
        768: 7915,
        769: 7913,
        771: 7919,
        777: 7917,
        803: 7921
      }
    ],
    439: [
      ,, {
        780: 494
      }
    ],
    452: [
      [
        68, 381
      ],
      256
    ],
    453: [
      [
        68, 382
      ],
      256
    ],
    454: [
      [
        100, 382
      ],
      256
    ],
    455: [
      [
        76, 74
      ],
      256
    ],
    456: [
      [
        76, 106
      ],
      256
    ],
    457: [
      [
        108, 106
      ],
      256
    ],
    458: [
      [
        78, 74
      ],
      256
    ],
    459: [
      [
        78, 106
      ],
      256
    ],
    460: [
      [
        110, 106
      ],
      256
    ],
    461: [
      [65, 780]
    ],
    462: [
      [97, 780]
    ],
    463: [
      [73, 780]
    ],
    464: [
      [105, 780]
    ],
    465: [
      [79, 780]
    ],
    466: [
      [111, 780]
    ],
    467: [
      [85, 780]
    ],
    468: [
      [117, 780]
    ],
    469: [
      [220, 772]
    ],
    470: [
      [252, 772]
    ],
    471: [
      [220, 769]
    ],
    472: [
      [252, 769]
    ],
    473: [
      [220, 780]
    ],
    474: [
      [252, 780]
    ],
    475: [
      [220, 768]
    ],
    476: [
      [252, 768]
    ],
    478: [
      [196, 772]
    ],
    479: [
      [228, 772]
    ],
    480: [
      [550, 772]
    ],
    481: [
      [551, 772]
    ],
    482: [
      [198, 772]
    ],
    483: [
      [230, 772]
    ],
    486: [
      [71, 780]
    ],
    487: [
      [103, 780]
    ],
    488: [
      [75, 780]
    ],
    489: [
      [107, 780]
    ],
    490: [
      [
        79, 808
      ],, {
        772: 492
      }
    ],
    491: [
      [
        111, 808
      ],, {
        772: 493
      }
    ],
    492: [
      [490, 772]
    ],
    493: [
      [491, 772]
    ],
    494: [
      [439, 780]
    ],
    495: [
      [658, 780]
    ],
    496: [
      [106, 780]
    ],
    497: [
      [
        68, 90
      ],
      256
    ],
    498: [
      [
        68, 122
      ],
      256
    ],
    499: [
      [
        100, 122
      ],
      256
    ],
    500: [
      [71, 769]
    ],
    501: [
      [103, 769]
    ],
    504: [
      [78, 768]
    ],
    505: [
      [110, 768]
    ],
    506: [
      [197, 769]
    ],
    507: [
      [229, 769]
    ],
    508: [
      [198, 769]
    ],
    509: [
      [230, 769]
    ],
    510: [
      [216, 769]
    ],
    511: [
      [248, 769]
    ],
    66045: [, 220]
  },
  512: {
    512: [
      [65, 783]
    ],
    513: [
      [97, 783]
    ],
    514: [
      [65, 785]
    ],
    515: [
      [97, 785]
    ],
    516: [
      [69, 783]
    ],
    517: [
      [101, 783]
    ],
    518: [
      [69, 785]
    ],
    519: [
      [101, 785]
    ],
    520: [
      [73, 783]
    ],
    521: [
      [105, 783]
    ],
    522: [
      [73, 785]
    ],
    523: [
      [105, 785]
    ],
    524: [
      [79, 783]
    ],
    525: [
      [111, 783]
    ],
    526: [
      [79, 785]
    ],
    527: [
      [111, 785]
    ],
    528: [
      [82, 783]
    ],
    529: [
      [114, 783]
    ],
    530: [
      [82, 785]
    ],
    531: [
      [114, 785]
    ],
    532: [
      [85, 783]
    ],
    533: [
      [117, 783]
    ],
    534: [
      [85, 785]
    ],
    535: [
      [117, 785]
    ],
    536: [
      [83, 806]
    ],
    537: [
      [115, 806]
    ],
    538: [
      [84, 806]
    ],
    539: [
      [116, 806]
    ],
    542: [
      [72, 780]
    ],
    543: [
      [104, 780]
    ],
    550: [
      [
        65, 775
      ],, {
        772: 480
      }
    ],
    551: [
      [
        97, 775
      ],, {
        772: 481
      }
    ],
    552: [
      [
        69, 807
      ],, {
        774: 7708
      }
    ],
    553: [
      [
        101, 807
      ],, {
        774: 7709
      }
    ],
    554: [
      [214, 772]
    ],
    555: [
      [246, 772]
    ],
    556: [
      [213, 772]
    ],
    557: [
      [245, 772]
    ],
    558: [
      [
        79, 775
      ],, {
        772: 560
      }
    ],
    559: [
      [
        111, 775
      ],, {
        772: 561
      }
    ],
    560: [
      [558, 772]
    ],
    561: [
      [559, 772]
    ],
    562: [
      [89, 772]
    ],
    563: [
      [121, 772]
    ],
    658: [
      ,, {
        780: 495
      }
    ],
    688: [
      [104], 256
    ],
    689: [
      [614], 256
    ],
    690: [
      [106], 256
    ],
    691: [
      [114], 256
    ],
    692: [
      [633], 256
    ],
    693: [
      [635], 256
    ],
    694: [
      [641], 256
    ],
    695: [
      [119], 256
    ],
    696: [
      [121], 256
    ],
    728: [
      [
        32, 774
      ],
      256
    ],
    729: [
      [
        32, 775
      ],
      256
    ],
    730: [
      [
        32, 778
      ],
      256
    ],
    731: [
      [
        32, 808
      ],
      256
    ],
    732: [
      [
        32, 771
      ],
      256
    ],
    733: [
      [
        32, 779
      ],
      256
    ],
    736: [
      [611], 256
    ],
    737: [
      [108], 256
    ],
    738: [
      [115], 256
    ],
    739: [
      [120], 256
    ],
    740: [
      [661], 256
    ],
    66272: [, 220]
  },
  768: {
    768: [
      , 230
    ],
    769: [
      , 230
    ],
    770: [
      , 230
    ],
    771: [
      , 230
    ],
    772: [
      , 230
    ],
    773: [
      , 230
    ],
    774: [
      , 230
    ],
    775: [
      , 230
    ],
    776: [
      , 230, {
        769: 836
      }
    ],
    777: [
      , 230
    ],
    778: [
      , 230
    ],
    779: [
      , 230
    ],
    780: [
      , 230
    ],
    781: [
      , 230
    ],
    782: [
      , 230
    ],
    783: [
      , 230
    ],
    784: [
      , 230
    ],
    785: [
      , 230
    ],
    786: [
      , 230
    ],
    787: [
      , 230
    ],
    788: [
      , 230
    ],
    789: [
      , 232
    ],
    790: [
      , 220
    ],
    791: [
      , 220
    ],
    792: [
      , 220
    ],
    793: [
      , 220
    ],
    794: [
      , 232
    ],
    795: [
      , 216
    ],
    796: [
      , 220
    ],
    797: [
      , 220
    ],
    798: [
      , 220
    ],
    799: [
      , 220
    ],
    800: [
      , 220
    ],
    801: [
      , 202
    ],
    802: [
      , 202
    ],
    803: [
      , 220
    ],
    804: [
      , 220
    ],
    805: [
      , 220
    ],
    806: [
      , 220
    ],
    807: [
      , 202
    ],
    808: [
      , 202
    ],
    809: [
      , 220
    ],
    810: [
      , 220
    ],
    811: [
      , 220
    ],
    812: [
      , 220
    ],
    813: [
      , 220
    ],
    814: [
      , 220
    ],
    815: [
      , 220
    ],
    816: [
      , 220
    ],
    817: [
      , 220
    ],
    818: [
      , 220
    ],
    819: [
      , 220
    ],
    820: [
      , 1
    ],
    821: [
      , 1
    ],
    822: [
      , 1
    ],
    823: [
      , 1
    ],
    824: [
      , 1
    ],
    825: [
      , 220
    ],
    826: [
      , 220
    ],
    827: [
      , 220
    ],
    828: [
      , 220
    ],
    829: [
      , 230
    ],
    830: [
      , 230
    ],
    831: [
      , 230
    ],
    832: [
      [768], 230
    ],
    833: [
      [769], 230
    ],
    834: [
      , 230
    ],
    835: [
      [787], 230
    ],
    836: [
      [
        776, 769
      ],
      230
    ],
    837: [
      , 240
    ],
    838: [
      , 230
    ],
    839: [
      , 220
    ],
    840: [
      , 220
    ],
    841: [
      , 220
    ],
    842: [
      , 230
    ],
    843: [
      , 230
    ],
    844: [
      , 230
    ],
    845: [
      , 220
    ],
    846: [
      , 220
    ],
    848: [
      , 230
    ],
    849: [
      , 230
    ],
    850: [
      , 230
    ],
    851: [
      , 220
    ],
    852: [
      , 220
    ],
    853: [
      , 220
    ],
    854: [
      , 220
    ],
    855: [
      , 230
    ],
    856: [
      , 232
    ],
    857: [
      , 220
    ],
    858: [
      , 220
    ],
    859: [
      , 230
    ],
    860: [
      , 233
    ],
    861: [
      , 234
    ],
    862: [
      , 234
    ],
    863: [
      , 233
    ],
    864: [
      , 234
    ],
    865: [
      , 234
    ],
    866: [
      , 233
    ],
    867: [
      , 230
    ],
    868: [
      , 230
    ],
    869: [
      , 230
    ],
    870: [
      , 230
    ],
    871: [
      , 230
    ],
    872: [
      , 230
    ],
    873: [
      , 230
    ],
    874: [
      , 230
    ],
    875: [
      , 230
    ],
    876: [
      , 230
    ],
    877: [
      , 230
    ],
    878: [
      , 230
    ],
    879: [
      , 230
    ],
    884: [
      [697]
    ],
    890: [
      [
        32, 837
      ],
      256
    ],
    894: [
      [59]
    ],
    900: [
      [
        32, 769
      ],
      256
    ],
    901: [
      [168, 769]
    ],
    902: [
      [913, 769]
    ],
    903: [
      [183]
    ],
    904: [
      [917, 769]
    ],
    905: [
      [919, 769]
    ],
    906: [
      [921, 769]
    ],
    908: [
      [927, 769]
    ],
    910: [
      [933, 769]
    ],
    911: [
      [937, 769]
    ],
    912: [
      [970, 769]
    ],
    913: [
      ,, {
        768: 8122,
        769: 902,
        772: 8121,
        774: 8120,
        787: 7944,
        788: 7945,
        837: 8124
      }
    ],
    917: [
      ,, {
        768: 8136,
        769: 904,
        787: 7960,
        788: 7961
      }
    ],
    919: [
      ,, {
        768: 8138,
        769: 905,
        787: 7976,
        788: 7977,
        837: 8140
      }
    ],
    921: [
      ,, {
        768: 8154,
        769: 906,
        772: 8153,
        774: 8152,
        776: 938,
        787: 7992,
        788: 7993
      }
    ],
    927: [
      ,, {
        768: 8184,
        769: 908,
        787: 8008,
        788: 8009
      }
    ],
    929: [
      ,, {
        788: 8172
      }
    ],
    933: [
      ,, {
        768: 8170,
        769: 910,
        772: 8169,
        774: 8168,
        776: 939,
        788: 8025
      }
    ],
    937: [
      ,, {
        768: 8186,
        769: 911,
        787: 8040,
        788: 8041,
        837: 8188
      }
    ],
    938: [
      [921, 776]
    ],
    939: [
      [933, 776]
    ],
    940: [
      [
        945, 769
      ],, {
        837: 8116
      }
    ],
    941: [
      [949, 769]
    ],
    942: [
      [
        951, 769
      ],, {
        837: 8132
      }
    ],
    943: [
      [953, 769]
    ],
    944: [
      [971, 769]
    ],
    945: [
      ,, {
        768: 8048,
        769: 940,
        772: 8113,
        774: 8112,
        787: 7936,
        788: 7937,
        834: 8118,
        837: 8115
      }
    ],
    949: [
      ,, {
        768: 8050,
        769: 941,
        787: 7952,
        788: 7953
      }
    ],
    951: [
      ,, {
        768: 8052,
        769: 942,
        787: 7968,
        788: 7969,
        834: 8134,
        837: 8131
      }
    ],
    953: [
      ,, {
        768: 8054,
        769: 943,
        772: 8145,
        774: 8144,
        776: 970,
        787: 7984,
        788: 7985,
        834: 8150
      }
    ],
    959: [
      ,, {
        768: 8056,
        769: 972,
        787: 8e3,
        788: 8001
      }
    ],
    961: [
      ,, {
        787: 8164,
        788: 8165
      }
    ],
    965: [
      ,, {
        768: 8058,
        769: 973,
        772: 8161,
        774: 8160,
        776: 971,
        787: 8016,
        788: 8017,
        834: 8166
      }
    ],
    969: [
      ,, {
        768: 8060,
        769: 974,
        787: 8032,
        788: 8033,
        834: 8182,
        837: 8179
      }
    ],
    970: [
      [
        953, 776
      ],, {
        768: 8146,
        769: 912,
        834: 8151
      }
    ],
    971: [
      [
        965, 776
      ],, {
        768: 8162,
        769: 944,
        834: 8167
      }
    ],
    972: [
      [959, 769]
    ],
    973: [
      [965, 769]
    ],
    974: [
      [
        969, 769
      ],, {
        837: 8180
      }
    ],
    976: [
      [946], 256
    ],
    977: [
      [952], 256
    ],
    978: [
      [933], 256, {
        769: 979,
        776: 980
      }
    ],
    979: [
      [978, 769]
    ],
    980: [
      [978, 776]
    ],
    981: [
      [966], 256
    ],
    982: [
      [960], 256
    ],
    1008: [
      [954], 256
    ],
    1009: [
      [961], 256
    ],
    1010: [
      [962], 256
    ],
    1012: [
      [920], 256
    ],
    1013: [
      [949], 256
    ],
    1017: [
      [931], 256
    ],
    66422: [
      , 230
    ],
    66423: [
      , 230
    ],
    66424: [
      , 230
    ],
    66425: [
      , 230
    ],
    66426: [, 230]
  },
  1024: {
    1024: [
      [1045, 768]
    ],
    1025: [
      [1045, 776]
    ],
    1027: [
      [1043, 769]
    ],
    1030: [
      ,, {
        776: 1031
      }
    ],
    1031: [
      [1030, 776]
    ],
    1036: [
      [1050, 769]
    ],
    1037: [
      [1048, 768]
    ],
    1038: [
      [1059, 774]
    ],
    1040: [
      ,, {
        774: 1232,
        776: 1234
      }
    ],
    1043: [
      ,, {
        769: 1027
      }
    ],
    1045: [
      ,, {
        768: 1024,
        774: 1238,
        776: 1025
      }
    ],
    1046: [
      ,, {
        774: 1217,
        776: 1244
      }
    ],
    1047: [
      ,, {
        776: 1246
      }
    ],
    1048: [
      ,, {
        768: 1037,
        772: 1250,
        774: 1049,
        776: 1252
      }
    ],
    1049: [
      [1048, 774]
    ],
    1050: [
      ,, {
        769: 1036
      }
    ],
    1054: [
      ,, {
        776: 1254
      }
    ],
    1059: [
      ,, {
        772: 1262,
        774: 1038,
        776: 1264,
        779: 1266
      }
    ],
    1063: [
      ,, {
        776: 1268
      }
    ],
    1067: [
      ,, {
        776: 1272
      }
    ],
    1069: [
      ,, {
        776: 1260
      }
    ],
    1072: [
      ,, {
        774: 1233,
        776: 1235
      }
    ],
    1075: [
      ,, {
        769: 1107
      }
    ],
    1077: [
      ,, {
        768: 1104,
        774: 1239,
        776: 1105
      }
    ],
    1078: [
      ,, {
        774: 1218,
        776: 1245
      }
    ],
    1079: [
      ,, {
        776: 1247
      }
    ],
    1080: [
      ,, {
        768: 1117,
        772: 1251,
        774: 1081,
        776: 1253
      }
    ],
    1081: [
      [1080, 774]
    ],
    1082: [
      ,, {
        769: 1116
      }
    ],
    1086: [
      ,, {
        776: 1255
      }
    ],
    1091: [
      ,, {
        772: 1263,
        774: 1118,
        776: 1265,
        779: 1267
      }
    ],
    1095: [
      ,, {
        776: 1269
      }
    ],
    1099: [
      ,, {
        776: 1273
      }
    ],
    1101: [
      ,, {
        776: 1261
      }
    ],
    1104: [
      [1077, 768]
    ],
    1105: [
      [1077, 776]
    ],
    1107: [
      [1075, 769]
    ],
    1110: [
      ,, {
        776: 1111
      }
    ],
    1111: [
      [1110, 776]
    ],
    1116: [
      [1082, 769]
    ],
    1117: [
      [1080, 768]
    ],
    1118: [
      [1091, 774]
    ],
    1140: [
      ,, {
        783: 1142
      }
    ],
    1141: [
      ,, {
        783: 1143
      }
    ],
    1142: [
      [1140, 783]
    ],
    1143: [
      [1141, 783]
    ],
    1155: [
      , 230
    ],
    1156: [
      , 230
    ],
    1157: [
      , 230
    ],
    1158: [
      , 230
    ],
    1159: [
      , 230
    ],
    1217: [
      [1046, 774]
    ],
    1218: [
      [1078, 774]
    ],
    1232: [
      [1040, 774]
    ],
    1233: [
      [1072, 774]
    ],
    1234: [
      [1040, 776]
    ],
    1235: [
      [1072, 776]
    ],
    1238: [
      [1045, 774]
    ],
    1239: [
      [1077, 774]
    ],
    1240: [
      ,, {
        776: 1242
      }
    ],
    1241: [
      ,, {
        776: 1243
      }
    ],
    1242: [
      [1240, 776]
    ],
    1243: [
      [1241, 776]
    ],
    1244: [
      [1046, 776]
    ],
    1245: [
      [1078, 776]
    ],
    1246: [
      [1047, 776]
    ],
    1247: [
      [1079, 776]
    ],
    1250: [
      [1048, 772]
    ],
    1251: [
      [1080, 772]
    ],
    1252: [
      [1048, 776]
    ],
    1253: [
      [1080, 776]
    ],
    1254: [
      [1054, 776]
    ],
    1255: [
      [1086, 776]
    ],
    1256: [
      ,, {
        776: 1258
      }
    ],
    1257: [
      ,, {
        776: 1259
      }
    ],
    1258: [
      [1256, 776]
    ],
    1259: [
      [1257, 776]
    ],
    1260: [
      [1069, 776]
    ],
    1261: [
      [1101, 776]
    ],
    1262: [
      [1059, 772]
    ],
    1263: [
      [1091, 772]
    ],
    1264: [
      [1059, 776]
    ],
    1265: [
      [1091, 776]
    ],
    1266: [
      [1059, 779]
    ],
    1267: [
      [1091, 779]
    ],
    1268: [
      [1063, 776]
    ],
    1269: [
      [1095, 776]
    ],
    1272: [
      [1067, 776]
    ],
    1273: [
      [1099, 776]
    ]
  },
  1280: {
    1415: [
      [
        1381, 1410
      ],
      256
    ],
    1425: [
      , 220
    ],
    1426: [
      , 230
    ],
    1427: [
      , 230
    ],
    1428: [
      , 230
    ],
    1429: [
      , 230
    ],
    1430: [
      , 220
    ],
    1431: [
      , 230
    ],
    1432: [
      , 230
    ],
    1433: [
      , 230
    ],
    1434: [
      , 222
    ],
    1435: [
      , 220
    ],
    1436: [
      , 230
    ],
    1437: [
      , 230
    ],
    1438: [
      , 230
    ],
    1439: [
      , 230
    ],
    1440: [
      , 230
    ],
    1441: [
      , 230
    ],
    1442: [
      , 220
    ],
    1443: [
      , 220
    ],
    1444: [
      , 220
    ],
    1445: [
      , 220
    ],
    1446: [
      , 220
    ],
    1447: [
      , 220
    ],
    1448: [
      , 230
    ],
    1449: [
      , 230
    ],
    1450: [
      , 220
    ],
    1451: [
      , 230
    ],
    1452: [
      , 230
    ],
    1453: [
      , 222
    ],
    1454: [
      , 228
    ],
    1455: [
      , 230
    ],
    1456: [
      , 10
    ],
    1457: [
      , 11
    ],
    1458: [
      , 12
    ],
    1459: [
      , 13
    ],
    1460: [
      , 14
    ],
    1461: [
      , 15
    ],
    1462: [
      , 16
    ],
    1463: [
      , 17
    ],
    1464: [
      , 18
    ],
    1465: [
      , 19
    ],
    1466: [
      , 19
    ],
    1467: [
      , 20
    ],
    1468: [
      , 21
    ],
    1469: [
      , 22
    ],
    1471: [
      , 23
    ],
    1473: [
      , 24
    ],
    1474: [
      , 25
    ],
    1476: [
      , 230
    ],
    1477: [
      , 220
    ],
    1479: [, 18]
  },
  1536: {
    1552: [
      , 230
    ],
    1553: [
      , 230
    ],
    1554: [
      , 230
    ],
    1555: [
      , 230
    ],
    1556: [
      , 230
    ],
    1557: [
      , 230
    ],
    1558: [
      , 230
    ],
    1559: [
      , 230
    ],
    1560: [
      , 30
    ],
    1561: [
      , 31
    ],
    1562: [
      , 32
    ],
    1570: [
      [1575, 1619]
    ],
    1571: [
      [1575, 1620]
    ],
    1572: [
      [1608, 1620]
    ],
    1573: [
      [1575, 1621]
    ],
    1574: [
      [1610, 1620]
    ],
    1575: [
      ,, {
        1619: 1570,
        1620: 1571,
        1621: 1573
      }
    ],
    1608: [
      ,, {
        1620: 1572
      }
    ],
    1610: [
      ,, {
        1620: 1574
      }
    ],
    1611: [
      , 27
    ],
    1612: [
      , 28
    ],
    1613: [
      , 29
    ],
    1614: [
      , 30
    ],
    1615: [
      , 31
    ],
    1616: [
      , 32
    ],
    1617: [
      , 33
    ],
    1618: [
      , 34
    ],
    1619: [
      , 230
    ],
    1620: [
      , 230
    ],
    1621: [
      , 220
    ],
    1622: [
      , 220
    ],
    1623: [
      , 230
    ],
    1624: [
      , 230
    ],
    1625: [
      , 230
    ],
    1626: [
      , 230
    ],
    1627: [
      , 230
    ],
    1628: [
      , 220
    ],
    1629: [
      , 230
    ],
    1630: [
      , 230
    ],
    1631: [
      , 220
    ],
    1648: [
      , 35
    ],
    1653: [
      [
        1575, 1652
      ],
      256
    ],
    1654: [
      [
        1608, 1652
      ],
      256
    ],
    1655: [
      [
        1735, 1652
      ],
      256
    ],
    1656: [
      [
        1610, 1652
      ],
      256
    ],
    1728: [
      [1749, 1620]
    ],
    1729: [
      ,, {
        1620: 1730
      }
    ],
    1730: [
      [1729, 1620]
    ],
    1746: [
      ,, {
        1620: 1747
      }
    ],
    1747: [
      [1746, 1620]
    ],
    1749: [
      ,, {
        1620: 1728
      }
    ],
    1750: [
      , 230
    ],
    1751: [
      , 230
    ],
    1752: [
      , 230
    ],
    1753: [
      , 230
    ],
    1754: [
      , 230
    ],
    1755: [
      , 230
    ],
    1756: [
      , 230
    ],
    1759: [
      , 230
    ],
    1760: [
      , 230
    ],
    1761: [
      , 230
    ],
    1762: [
      , 230
    ],
    1763: [
      , 220
    ],
    1764: [
      , 230
    ],
    1767: [
      , 230
    ],
    1768: [
      , 230
    ],
    1770: [
      , 220
    ],
    1771: [
      , 230
    ],
    1772: [
      , 230
    ],
    1773: [, 220]
  },
  1792: {
    1809: [
      , 36
    ],
    1840: [
      , 230
    ],
    1841: [
      , 220
    ],
    1842: [
      , 230
    ],
    1843: [
      , 230
    ],
    1844: [
      , 220
    ],
    1845: [
      , 230
    ],
    1846: [
      , 230
    ],
    1847: [
      , 220
    ],
    1848: [
      , 220
    ],
    1849: [
      , 220
    ],
    1850: [
      , 230
    ],
    1851: [
      , 220
    ],
    1852: [
      , 220
    ],
    1853: [
      , 230
    ],
    1854: [
      , 220
    ],
    1855: [
      , 230
    ],
    1856: [
      , 230
    ],
    1857: [
      , 230
    ],
    1858: [
      , 220
    ],
    1859: [
      , 230
    ],
    1860: [
      , 220
    ],
    1861: [
      , 230
    ],
    1862: [
      , 220
    ],
    1863: [
      , 230
    ],
    1864: [
      , 220
    ],
    1865: [
      , 230
    ],
    1866: [
      , 230
    ],
    2027: [
      , 230
    ],
    2028: [
      , 230
    ],
    2029: [
      , 230
    ],
    2030: [
      , 230
    ],
    2031: [
      , 230
    ],
    2032: [
      , 230
    ],
    2033: [
      , 230
    ],
    2034: [
      , 220
    ],
    2035: [, 230]
  },
  2048: {
    2070: [
      , 230
    ],
    2071: [
      , 230
    ],
    2072: [
      , 230
    ],
    2073: [
      , 230
    ],
    2075: [
      , 230
    ],
    2076: [
      , 230
    ],
    2077: [
      , 230
    ],
    2078: [
      , 230
    ],
    2079: [
      , 230
    ],
    2080: [
      , 230
    ],
    2081: [
      , 230
    ],
    2082: [
      , 230
    ],
    2083: [
      , 230
    ],
    2085: [
      , 230
    ],
    2086: [
      , 230
    ],
    2087: [
      , 230
    ],
    2089: [
      , 230
    ],
    2090: [
      , 230
    ],
    2091: [
      , 230
    ],
    2092: [
      , 230
    ],
    2093: [
      , 230
    ],
    2137: [
      , 220
    ],
    2138: [
      , 220
    ],
    2139: [
      , 220
    ],
    2276: [
      , 230
    ],
    2277: [
      , 230
    ],
    2278: [
      , 220
    ],
    2279: [
      , 230
    ],
    2280: [
      , 230
    ],
    2281: [
      , 220
    ],
    2282: [
      , 230
    ],
    2283: [
      , 230
    ],
    2284: [
      , 230
    ],
    2285: [
      , 220
    ],
    2286: [
      , 220
    ],
    2287: [
      , 220
    ],
    2288: [
      , 27
    ],
    2289: [
      , 28
    ],
    2290: [
      , 29
    ],
    2291: [
      , 230
    ],
    2292: [
      , 230
    ],
    2293: [
      , 230
    ],
    2294: [
      , 220
    ],
    2295: [
      , 230
    ],
    2296: [
      , 230
    ],
    2297: [
      , 220
    ],
    2298: [
      , 220
    ],
    2299: [
      , 230
    ],
    2300: [
      , 230
    ],
    2301: [
      , 230
    ],
    2302: [
      , 230
    ],
    2303: [, 230]
  },
  2304: {
    2344: [
      ,, {
        2364: 2345
      }
    ],
    2345: [
      [2344, 2364]
    ],
    2352: [
      ,, {
        2364: 2353
      }
    ],
    2353: [
      [2352, 2364]
    ],
    2355: [
      ,, {
        2364: 2356
      }
    ],
    2356: [
      [2355, 2364]
    ],
    2364: [
      , 7
    ],
    2381: [
      , 9
    ],
    2385: [
      , 230
    ],
    2386: [
      , 220
    ],
    2387: [
      , 230
    ],
    2388: [
      , 230
    ],
    2392: [
      [
        2325, 2364
      ],
      512
    ],
    2393: [
      [
        2326, 2364
      ],
      512
    ],
    2394: [
      [
        2327, 2364
      ],
      512
    ],
    2395: [
      [
        2332, 2364
      ],
      512
    ],
    2396: [
      [
        2337, 2364
      ],
      512
    ],
    2397: [
      [
        2338, 2364
      ],
      512
    ],
    2398: [
      [
        2347, 2364
      ],
      512
    ],
    2399: [
      [
        2351, 2364
      ],
      512
    ],
    2492: [
      , 7
    ],
    2503: [
      ,, {
        2494: 2507,
        2519: 2508
      }
    ],
    2507: [
      [2503, 2494]
    ],
    2508: [
      [2503, 2519]
    ],
    2509: [
      , 9
    ],
    2524: [
      [
        2465, 2492
      ],
      512
    ],
    2525: [
      [
        2466, 2492
      ],
      512
    ],
    2527: [
      [
        2479, 2492
      ],
      512
    ]
  },
  2560: {
    2611: [
      [
        2610, 2620
      ],
      512
    ],
    2614: [
      [
        2616, 2620
      ],
      512
    ],
    2620: [
      , 7
    ],
    2637: [
      , 9
    ],
    2649: [
      [
        2582, 2620
      ],
      512
    ],
    2650: [
      [
        2583, 2620
      ],
      512
    ],
    2651: [
      [
        2588, 2620
      ],
      512
    ],
    2654: [
      [
        2603, 2620
      ],
      512
    ],
    2748: [
      , 7
    ],
    2765: [
      , 9
    ],
    68109: [
      , 220
    ],
    68111: [
      , 230
    ],
    68152: [
      , 230
    ],
    68153: [
      , 1
    ],
    68154: [
      , 220
    ],
    68159: [
      , 9
    ],
    68325: [
      , 230
    ],
    68326: [, 220]
  },
  2816: {
    2876: [
      , 7
    ],
    2887: [
      ,, {
        2878: 2891,
        2902: 2888,
        2903: 2892
      }
    ],
    2888: [
      [2887, 2902]
    ],
    2891: [
      [2887, 2878]
    ],
    2892: [
      [2887, 2903]
    ],
    2893: [
      , 9
    ],
    2908: [
      [
        2849, 2876
      ],
      512
    ],
    2909: [
      [
        2850, 2876
      ],
      512
    ],
    2962: [
      ,, {
        3031: 2964
      }
    ],
    2964: [
      [2962, 3031]
    ],
    3014: [
      ,, {
        3006: 3018,
        3031: 3020
      }
    ],
    3015: [
      ,, {
        3006: 3019
      }
    ],
    3018: [
      [3014, 3006]
    ],
    3019: [
      [3015, 3006]
    ],
    3020: [
      [3014, 3031]
    ],
    3021: [, 9]
  },
  3072: {
    3142: [
      ,, {
        3158: 3144
      }
    ],
    3144: [
      [3142, 3158]
    ],
    3149: [
      , 9
    ],
    3157: [
      , 84
    ],
    3158: [
      , 91
    ],
    3260: [
      , 7
    ],
    3263: [
      ,, {
        3285: 3264
      }
    ],
    3264: [
      [3263, 3285]
    ],
    3270: [
      ,, {
        3266: 3274,
        3285: 3271,
        3286: 3272
      }
    ],
    3271: [
      [3270, 3285]
    ],
    3272: [
      [3270, 3286]
    ],
    3274: [
      [
        3270, 3266
      ],, {
        3285: 3275
      }
    ],
    3275: [
      [3274, 3285]
    ],
    3277: [, 9]
  },
  3328: {
    3398: [
      ,, {
        3390: 3402,
        3415: 3404
      }
    ],
    3399: [
      ,, {
        3390: 3403
      }
    ],
    3402: [
      [3398, 3390]
    ],
    3403: [
      [3399, 3390]
    ],
    3404: [
      [3398, 3415]
    ],
    3405: [
      , 9
    ],
    3530: [
      , 9
    ],
    3545: [
      ,, {
        3530: 3546,
        3535: 3548,
        3551: 3550
      }
    ],
    3546: [
      [3545, 3530]
    ],
    3548: [
      [
        3545, 3535
      ],, {
        3530: 3549
      }
    ],
    3549: [
      [3548, 3530]
    ],
    3550: [
      [3545, 3551]
    ]
  },
  3584: {
    3635: [
      [
        3661, 3634
      ],
      256
    ],
    3640: [
      , 103
    ],
    3641: [
      , 103
    ],
    3642: [
      , 9
    ],
    3656: [
      , 107
    ],
    3657: [
      , 107
    ],
    3658: [
      , 107
    ],
    3659: [
      , 107
    ],
    3763: [
      [
        3789, 3762
      ],
      256
    ],
    3768: [
      , 118
    ],
    3769: [
      , 118
    ],
    3784: [
      , 122
    ],
    3785: [
      , 122
    ],
    3786: [
      , 122
    ],
    3787: [
      , 122
    ],
    3804: [
      [
        3755, 3737
      ],
      256
    ],
    3805: [
      [
        3755, 3745
      ],
      256
    ]
  },
  3840: {
    3852: [
      [3851], 256
    ],
    3864: [
      , 220
    ],
    3865: [
      , 220
    ],
    3893: [
      , 220
    ],
    3895: [
      , 220
    ],
    3897: [
      , 216
    ],
    3907: [
      [
        3906, 4023
      ],
      512
    ],
    3917: [
      [
        3916, 4023
      ],
      512
    ],
    3922: [
      [
        3921, 4023
      ],
      512
    ],
    3927: [
      [
        3926, 4023
      ],
      512
    ],
    3932: [
      [
        3931, 4023
      ],
      512
    ],
    3945: [
      [
        3904, 4021
      ],
      512
    ],
    3953: [
      , 129
    ],
    3954: [
      , 130
    ],
    3955: [
      [
        3953, 3954
      ],
      512
    ],
    3956: [
      , 132
    ],
    3957: [
      [
        3953, 3956
      ],
      512
    ],
    3958: [
      [
        4018, 3968
      ],
      512
    ],
    3959: [
      [
        4018, 3969
      ],
      256
    ],
    3960: [
      [
        4019, 3968
      ],
      512
    ],
    3961: [
      [
        4019, 3969
      ],
      256
    ],
    3962: [
      , 130
    ],
    3963: [
      , 130
    ],
    3964: [
      , 130
    ],
    3965: [
      , 130
    ],
    3968: [
      , 130
    ],
    3969: [
      [
        3953, 3968
      ],
      512
    ],
    3970: [
      , 230
    ],
    3971: [
      , 230
    ],
    3972: [
      , 9
    ],
    3974: [
      , 230
    ],
    3975: [
      , 230
    ],
    3987: [
      [
        3986, 4023
      ],
      512
    ],
    3997: [
      [
        3996, 4023
      ],
      512
    ],
    4002: [
      [
        4001, 4023
      ],
      512
    ],
    4007: [
      [
        4006, 4023
      ],
      512
    ],
    4012: [
      [
        4011, 4023
      ],
      512
    ],
    4025: [
      [
        3984, 4021
      ],
      512
    ],
    4038: [, 220]
  },
  4096: {
    4133: [
      ,, {
        4142: 4134
      }
    ],
    4134: [
      [4133, 4142]
    ],
    4151: [
      , 7
    ],
    4153: [
      , 9
    ],
    4154: [
      , 9
    ],
    4237: [
      , 220
    ],
    4348: [
      [4316], 256
    ],
    69702: [
      , 9
    ],
    69759: [
      , 9
    ],
    69785: [
      ,, {
        69818: 69786
      }
    ],
    69786: [
      [69785, 69818]
    ],
    69787: [
      ,, {
        69818: 69788
      }
    ],
    69788: [
      [69787, 69818]
    ],
    69797: [
      ,, {
        69818: 69803
      }
    ],
    69803: [
      [69797, 69818]
    ],
    69817: [
      , 9
    ],
    69818: [, 7]
  },
  4352: {
    69888: [
      , 230
    ],
    69889: [
      , 230
    ],
    69890: [
      , 230
    ],
    69934: [
      [69937, 69927]
    ],
    69935: [
      [69938, 69927]
    ],
    69937: [
      ,, {
        69927: 69934
      }
    ],
    69938: [
      ,, {
        69927: 69935
      }
    ],
    69939: [
      , 9
    ],
    69940: [
      , 9
    ],
    70003: [
      , 7
    ],
    70080: [, 9]
  },
  4608: {
    70197: [
      , 9
    ],
    70198: [
      , 7
    ],
    70377: [
      , 7
    ],
    70378: [, 9]
  },
  4864: {
    4957: [
      , 230
    ],
    4958: [
      , 230
    ],
    4959: [
      , 230
    ],
    70460: [
      , 7
    ],
    70471: [
      ,, {
        70462: 70475,
        70487: 70476
      }
    ],
    70475: [
      [70471, 70462]
    ],
    70476: [
      [70471, 70487]
    ],
    70477: [
      , 9
    ],
    70502: [
      , 230
    ],
    70503: [
      , 230
    ],
    70504: [
      , 230
    ],
    70505: [
      , 230
    ],
    70506: [
      , 230
    ],
    70507: [
      , 230
    ],
    70508: [
      , 230
    ],
    70512: [
      , 230
    ],
    70513: [
      , 230
    ],
    70514: [
      , 230
    ],
    70515: [
      , 230
    ],
    70516: [, 230]
  },
  5120: {
    70841: [
      ,, {
        70832: 70844,
        70842: 70843,
        70845: 70846
      }
    ],
    70843: [
      [70841, 70842]
    ],
    70844: [
      [70841, 70832]
    ],
    70846: [
      [70841, 70845]
    ],
    70850: [
      , 9
    ],
    70851: [, 7]
  },
  5376: {
    71096: [
      ,, {
        71087: 71098
      }
    ],
    71097: [
      ,, {
        71087: 71099
      }
    ],
    71098: [
      [71096, 71087]
    ],
    71099: [
      [71097, 71087]
    ],
    71103: [
      , 9
    ],
    71104: [, 7]
  },
  5632: {
    71231: [
      , 9
    ],
    71350: [
      , 9
    ],
    71351: [, 7]
  },
  5888: {
    5908: [
      , 9
    ],
    5940: [
      , 9
    ],
    6098: [
      , 9
    ],
    6109: [, 230]
  },
  6144: {
    6313: [, 228]
  },
  6400: {
    6457: [
      , 222
    ],
    6458: [
      , 230
    ],
    6459: [, 220]
  },
  6656: {
    6679: [
      , 230
    ],
    6680: [
      , 220
    ],
    6752: [
      , 9
    ],
    6773: [
      , 230
    ],
    6774: [
      , 230
    ],
    6775: [
      , 230
    ],
    6776: [
      , 230
    ],
    6777: [
      , 230
    ],
    6778: [
      , 230
    ],
    6779: [
      , 230
    ],
    6780: [
      , 230
    ],
    6783: [
      , 220
    ],
    6832: [
      , 230
    ],
    6833: [
      , 230
    ],
    6834: [
      , 230
    ],
    6835: [
      , 230
    ],
    6836: [
      , 230
    ],
    6837: [
      , 220
    ],
    6838: [
      , 220
    ],
    6839: [
      , 220
    ],
    6840: [
      , 220
    ],
    6841: [
      , 220
    ],
    6842: [
      , 220
    ],
    6843: [
      , 230
    ],
    6844: [
      , 230
    ],
    6845: [, 220]
  },
  6912: {
    6917: [
      ,, {
        6965: 6918
      }
    ],
    6918: [
      [6917, 6965]
    ],
    6919: [
      ,, {
        6965: 6920
      }
    ],
    6920: [
      [6919, 6965]
    ],
    6921: [
      ,, {
        6965: 6922
      }
    ],
    6922: [
      [6921, 6965]
    ],
    6923: [
      ,, {
        6965: 6924
      }
    ],
    6924: [
      [6923, 6965]
    ],
    6925: [
      ,, {
        6965: 6926
      }
    ],
    6926: [
      [6925, 6965]
    ],
    6929: [
      ,, {
        6965: 6930
      }
    ],
    6930: [
      [6929, 6965]
    ],
    6964: [
      , 7
    ],
    6970: [
      ,, {
        6965: 6971
      }
    ],
    6971: [
      [6970, 6965]
    ],
    6972: [
      ,, {
        6965: 6973
      }
    ],
    6973: [
      [6972, 6965]
    ],
    6974: [
      ,, {
        6965: 6976
      }
    ],
    6975: [
      ,, {
        6965: 6977
      }
    ],
    6976: [
      [6974, 6965]
    ],
    6977: [
      [6975, 6965]
    ],
    6978: [
      ,, {
        6965: 6979
      }
    ],
    6979: [
      [6978, 6965]
    ],
    6980: [
      , 9
    ],
    7019: [
      , 230
    ],
    7020: [
      , 220
    ],
    7021: [
      , 230
    ],
    7022: [
      , 230
    ],
    7023: [
      , 230
    ],
    7024: [
      , 230
    ],
    7025: [
      , 230
    ],
    7026: [
      , 230
    ],
    7027: [
      , 230
    ],
    7082: [
      , 9
    ],
    7083: [
      , 9
    ],
    7142: [
      , 7
    ],
    7154: [
      , 9
    ],
    7155: [, 9]
  },
  7168: {
    7223: [
      , 7
    ],
    7376: [
      , 230
    ],
    7377: [
      , 230
    ],
    7378: [
      , 230
    ],
    7380: [
      , 1
    ],
    7381: [
      , 220
    ],
    7382: [
      , 220
    ],
    7383: [
      , 220
    ],
    7384: [
      , 220
    ],
    7385: [
      , 220
    ],
    7386: [
      , 230
    ],
    7387: [
      , 230
    ],
    7388: [
      , 220
    ],
    7389: [
      , 220
    ],
    7390: [
      , 220
    ],
    7391: [
      , 220
    ],
    7392: [
      , 230
    ],
    7394: [
      , 1
    ],
    7395: [
      , 1
    ],
    7396: [
      , 1
    ],
    7397: [
      , 1
    ],
    7398: [
      , 1
    ],
    7399: [
      , 1
    ],
    7400: [
      , 1
    ],
    7405: [
      , 220
    ],
    7412: [
      , 230
    ],
    7416: [
      , 230
    ],
    7417: [, 230]
  },
  7424: {
    7468: [
      [65], 256
    ],
    7469: [
      [198], 256
    ],
    7470: [
      [66], 256
    ],
    7472: [
      [68], 256
    ],
    7473: [
      [69], 256
    ],
    7474: [
      [398], 256
    ],
    7475: [
      [71], 256
    ],
    7476: [
      [72], 256
    ],
    7477: [
      [73], 256
    ],
    7478: [
      [74], 256
    ],
    7479: [
      [75], 256
    ],
    7480: [
      [76], 256
    ],
    7481: [
      [77], 256
    ],
    7482: [
      [78], 256
    ],
    7484: [
      [79], 256
    ],
    7485: [
      [546], 256
    ],
    7486: [
      [80], 256
    ],
    7487: [
      [82], 256
    ],
    7488: [
      [84], 256
    ],
    7489: [
      [85], 256
    ],
    7490: [
      [87], 256
    ],
    7491: [
      [97], 256
    ],
    7492: [
      [592], 256
    ],
    7493: [
      [593], 256
    ],
    7494: [
      [7426], 256
    ],
    7495: [
      [98], 256
    ],
    7496: [
      [100], 256
    ],
    7497: [
      [101], 256
    ],
    7498: [
      [601], 256
    ],
    7499: [
      [603], 256
    ],
    7500: [
      [604], 256
    ],
    7501: [
      [103], 256
    ],
    7503: [
      [107], 256
    ],
    7504: [
      [109], 256
    ],
    7505: [
      [331], 256
    ],
    7506: [
      [111], 256
    ],
    7507: [
      [596], 256
    ],
    7508: [
      [7446], 256
    ],
    7509: [
      [7447], 256
    ],
    7510: [
      [112], 256
    ],
    7511: [
      [116], 256
    ],
    7512: [
      [117], 256
    ],
    7513: [
      [7453], 256
    ],
    7514: [
      [623], 256
    ],
    7515: [
      [118], 256
    ],
    7516: [
      [7461], 256
    ],
    7517: [
      [946], 256
    ],
    7518: [
      [947], 256
    ],
    7519: [
      [948], 256
    ],
    7520: [
      [966], 256
    ],
    7521: [
      [967], 256
    ],
    7522: [
      [105], 256
    ],
    7523: [
      [114], 256
    ],
    7524: [
      [117], 256
    ],
    7525: [
      [118], 256
    ],
    7526: [
      [946], 256
    ],
    7527: [
      [947], 256
    ],
    7528: [
      [961], 256
    ],
    7529: [
      [966], 256
    ],
    7530: [
      [967], 256
    ],
    7544: [
      [1085], 256
    ],
    7579: [
      [594], 256
    ],
    7580: [
      [99], 256
    ],
    7581: [
      [597], 256
    ],
    7582: [
      [240], 256
    ],
    7583: [
      [604], 256
    ],
    7584: [
      [102], 256
    ],
    7585: [
      [607], 256
    ],
    7586: [
      [609], 256
    ],
    7587: [
      [613], 256
    ],
    7588: [
      [616], 256
    ],
    7589: [
      [617], 256
    ],
    7590: [
      [618], 256
    ],
    7591: [
      [7547], 256
    ],
    7592: [
      [669], 256
    ],
    7593: [
      [621], 256
    ],
    7594: [
      [7557], 256
    ],
    7595: [
      [671], 256
    ],
    7596: [
      [625], 256
    ],
    7597: [
      [624], 256
    ],
    7598: [
      [626], 256
    ],
    7599: [
      [627], 256
    ],
    7600: [
      [628], 256
    ],
    7601: [
      [629], 256
    ],
    7602: [
      [632], 256
    ],
    7603: [
      [642], 256
    ],
    7604: [
      [643], 256
    ],
    7605: [
      [427], 256
    ],
    7606: [
      [649], 256
    ],
    7607: [
      [650], 256
    ],
    7608: [
      [7452], 256
    ],
    7609: [
      [651], 256
    ],
    7610: [
      [652], 256
    ],
    7611: [
      [122], 256
    ],
    7612: [
      [656], 256
    ],
    7613: [
      [657], 256
    ],
    7614: [
      [658], 256
    ],
    7615: [
      [952], 256
    ],
    7616: [
      , 230
    ],
    7617: [
      , 230
    ],
    7618: [
      , 220
    ],
    7619: [
      , 230
    ],
    7620: [
      , 230
    ],
    7621: [
      , 230
    ],
    7622: [
      , 230
    ],
    7623: [
      , 230
    ],
    7624: [
      , 230
    ],
    7625: [
      , 230
    ],
    7626: [
      , 220
    ],
    7627: [
      , 230
    ],
    7628: [
      , 230
    ],
    7629: [
      , 234
    ],
    7630: [
      , 214
    ],
    7631: [
      , 220
    ],
    7632: [
      , 202
    ],
    7633: [
      , 230
    ],
    7634: [
      , 230
    ],
    7635: [
      , 230
    ],
    7636: [
      , 230
    ],
    7637: [
      , 230
    ],
    7638: [
      , 230
    ],
    7639: [
      , 230
    ],
    7640: [
      , 230
    ],
    7641: [
      , 230
    ],
    7642: [
      , 230
    ],
    7643: [
      , 230
    ],
    7644: [
      , 230
    ],
    7645: [
      , 230
    ],
    7646: [
      , 230
    ],
    7647: [
      , 230
    ],
    7648: [
      , 230
    ],
    7649: [
      , 230
    ],
    7650: [
      , 230
    ],
    7651: [
      , 230
    ],
    7652: [
      , 230
    ],
    7653: [
      , 230
    ],
    7654: [
      , 230
    ],
    7655: [
      , 230
    ],
    7656: [
      , 230
    ],
    7657: [
      , 230
    ],
    7658: [
      , 230
    ],
    7659: [
      , 230
    ],
    7660: [
      , 230
    ],
    7661: [
      , 230
    ],
    7662: [
      , 230
    ],
    7663: [
      , 230
    ],
    7664: [
      , 230
    ],
    7665: [
      , 230
    ],
    7666: [
      , 230
    ],
    7667: [
      , 230
    ],
    7668: [
      , 230
    ],
    7669: [
      , 230
    ],
    7676: [
      , 233
    ],
    7677: [
      , 220
    ],
    7678: [
      , 230
    ],
    7679: [, 220]
  },
  7680: {
    7680: [
      [65, 805]
    ],
    7681: [
      [97, 805]
    ],
    7682: [
      [66, 775]
    ],
    7683: [
      [98, 775]
    ],
    7684: [
      [66, 803]
    ],
    7685: [
      [98, 803]
    ],
    7686: [
      [66, 817]
    ],
    7687: [
      [98, 817]
    ],
    7688: [
      [199, 769]
    ],
    7689: [
      [231, 769]
    ],
    7690: [
      [68, 775]
    ],
    7691: [
      [100, 775]
    ],
    7692: [
      [68, 803]
    ],
    7693: [
      [100, 803]
    ],
    7694: [
      [68, 817]
    ],
    7695: [
      [100, 817]
    ],
    7696: [
      [68, 807]
    ],
    7697: [
      [100, 807]
    ],
    7698: [
      [68, 813]
    ],
    7699: [
      [100, 813]
    ],
    7700: [
      [274, 768]
    ],
    7701: [
      [275, 768]
    ],
    7702: [
      [274, 769]
    ],
    7703: [
      [275, 769]
    ],
    7704: [
      [69, 813]
    ],
    7705: [
      [101, 813]
    ],
    7706: [
      [69, 816]
    ],
    7707: [
      [101, 816]
    ],
    7708: [
      [552, 774]
    ],
    7709: [
      [553, 774]
    ],
    7710: [
      [70, 775]
    ],
    7711: [
      [102, 775]
    ],
    7712: [
      [71, 772]
    ],
    7713: [
      [103, 772]
    ],
    7714: [
      [72, 775]
    ],
    7715: [
      [104, 775]
    ],
    7716: [
      [72, 803]
    ],
    7717: [
      [104, 803]
    ],
    7718: [
      [72, 776]
    ],
    7719: [
      [104, 776]
    ],
    7720: [
      [72, 807]
    ],
    7721: [
      [104, 807]
    ],
    7722: [
      [72, 814]
    ],
    7723: [
      [104, 814]
    ],
    7724: [
      [73, 816]
    ],
    7725: [
      [105, 816]
    ],
    7726: [
      [207, 769]
    ],
    7727: [
      [239, 769]
    ],
    7728: [
      [75, 769]
    ],
    7729: [
      [107, 769]
    ],
    7730: [
      [75, 803]
    ],
    7731: [
      [107, 803]
    ],
    7732: [
      [75, 817]
    ],
    7733: [
      [107, 817]
    ],
    7734: [
      [
        76, 803
      ],, {
        772: 7736
      }
    ],
    7735: [
      [
        108, 803
      ],, {
        772: 7737
      }
    ],
    7736: [
      [7734, 772]
    ],
    7737: [
      [7735, 772]
    ],
    7738: [
      [76, 817]
    ],
    7739: [
      [108, 817]
    ],
    7740: [
      [76, 813]
    ],
    7741: [
      [108, 813]
    ],
    7742: [
      [77, 769]
    ],
    7743: [
      [109, 769]
    ],
    7744: [
      [77, 775]
    ],
    7745: [
      [109, 775]
    ],
    7746: [
      [77, 803]
    ],
    7747: [
      [109, 803]
    ],
    7748: [
      [78, 775]
    ],
    7749: [
      [110, 775]
    ],
    7750: [
      [78, 803]
    ],
    7751: [
      [110, 803]
    ],
    7752: [
      [78, 817]
    ],
    7753: [
      [110, 817]
    ],
    7754: [
      [78, 813]
    ],
    7755: [
      [110, 813]
    ],
    7756: [
      [213, 769]
    ],
    7757: [
      [245, 769]
    ],
    7758: [
      [213, 776]
    ],
    7759: [
      [245, 776]
    ],
    7760: [
      [332, 768]
    ],
    7761: [
      [333, 768]
    ],
    7762: [
      [332, 769]
    ],
    7763: [
      [333, 769]
    ],
    7764: [
      [80, 769]
    ],
    7765: [
      [112, 769]
    ],
    7766: [
      [80, 775]
    ],
    7767: [
      [112, 775]
    ],
    7768: [
      [82, 775]
    ],
    7769: [
      [114, 775]
    ],
    7770: [
      [
        82, 803
      ],, {
        772: 7772
      }
    ],
    7771: [
      [
        114, 803
      ],, {
        772: 7773
      }
    ],
    7772: [
      [7770, 772]
    ],
    7773: [
      [7771, 772]
    ],
    7774: [
      [82, 817]
    ],
    7775: [
      [114, 817]
    ],
    7776: [
      [83, 775]
    ],
    7777: [
      [115, 775]
    ],
    7778: [
      [
        83, 803
      ],, {
        775: 7784
      }
    ],
    7779: [
      [
        115, 803
      ],, {
        775: 7785
      }
    ],
    7780: [
      [346, 775]
    ],
    7781: [
      [347, 775]
    ],
    7782: [
      [352, 775]
    ],
    7783: [
      [353, 775]
    ],
    7784: [
      [7778, 775]
    ],
    7785: [
      [7779, 775]
    ],
    7786: [
      [84, 775]
    ],
    7787: [
      [116, 775]
    ],
    7788: [
      [84, 803]
    ],
    7789: [
      [116, 803]
    ],
    7790: [
      [84, 817]
    ],
    7791: [
      [116, 817]
    ],
    7792: [
      [84, 813]
    ],
    7793: [
      [116, 813]
    ],
    7794: [
      [85, 804]
    ],
    7795: [
      [117, 804]
    ],
    7796: [
      [85, 816]
    ],
    7797: [
      [117, 816]
    ],
    7798: [
      [85, 813]
    ],
    7799: [
      [117, 813]
    ],
    7800: [
      [360, 769]
    ],
    7801: [
      [361, 769]
    ],
    7802: [
      [362, 776]
    ],
    7803: [
      [363, 776]
    ],
    7804: [
      [86, 771]
    ],
    7805: [
      [118, 771]
    ],
    7806: [
      [86, 803]
    ],
    7807: [
      [118, 803]
    ],
    7808: [
      [87, 768]
    ],
    7809: [
      [119, 768]
    ],
    7810: [
      [87, 769]
    ],
    7811: [
      [119, 769]
    ],
    7812: [
      [87, 776]
    ],
    7813: [
      [119, 776]
    ],
    7814: [
      [87, 775]
    ],
    7815: [
      [119, 775]
    ],
    7816: [
      [87, 803]
    ],
    7817: [
      [119, 803]
    ],
    7818: [
      [88, 775]
    ],
    7819: [
      [120, 775]
    ],
    7820: [
      [88, 776]
    ],
    7821: [
      [120, 776]
    ],
    7822: [
      [89, 775]
    ],
    7823: [
      [121, 775]
    ],
    7824: [
      [90, 770]
    ],
    7825: [
      [122, 770]
    ],
    7826: [
      [90, 803]
    ],
    7827: [
      [122, 803]
    ],
    7828: [
      [90, 817]
    ],
    7829: [
      [122, 817]
    ],
    7830: [
      [104, 817]
    ],
    7831: [
      [116, 776]
    ],
    7832: [
      [119, 778]
    ],
    7833: [
      [121, 778]
    ],
    7834: [
      [
        97, 702
      ],
      256
    ],
    7835: [
      [383, 775]
    ],
    7840: [
      [
        65, 803
      ],, {
        770: 7852,
        774: 7862
      }
    ],
    7841: [
      [
        97, 803
      ],, {
        770: 7853,
        774: 7863
      }
    ],
    7842: [
      [65, 777]
    ],
    7843: [
      [97, 777]
    ],
    7844: [
      [194, 769]
    ],
    7845: [
      [226, 769]
    ],
    7846: [
      [194, 768]
    ],
    7847: [
      [226, 768]
    ],
    7848: [
      [194, 777]
    ],
    7849: [
      [226, 777]
    ],
    7850: [
      [194, 771]
    ],
    7851: [
      [226, 771]
    ],
    7852: [
      [7840, 770]
    ],
    7853: [
      [7841, 770]
    ],
    7854: [
      [258, 769]
    ],
    7855: [
      [259, 769]
    ],
    7856: [
      [258, 768]
    ],
    7857: [
      [259, 768]
    ],
    7858: [
      [258, 777]
    ],
    7859: [
      [259, 777]
    ],
    7860: [
      [258, 771]
    ],
    7861: [
      [259, 771]
    ],
    7862: [
      [7840, 774]
    ],
    7863: [
      [7841, 774]
    ],
    7864: [
      [
        69, 803
      ],, {
        770: 7878
      }
    ],
    7865: [
      [
        101, 803
      ],, {
        770: 7879
      }
    ],
    7866: [
      [69, 777]
    ],
    7867: [
      [101, 777]
    ],
    7868: [
      [69, 771]
    ],
    7869: [
      [101, 771]
    ],
    7870: [
      [202, 769]
    ],
    7871: [
      [234, 769]
    ],
    7872: [
      [202, 768]
    ],
    7873: [
      [234, 768]
    ],
    7874: [
      [202, 777]
    ],
    7875: [
      [234, 777]
    ],
    7876: [
      [202, 771]
    ],
    7877: [
      [234, 771]
    ],
    7878: [
      [7864, 770]
    ],
    7879: [
      [7865, 770]
    ],
    7880: [
      [73, 777]
    ],
    7881: [
      [105, 777]
    ],
    7882: [
      [73, 803]
    ],
    7883: [
      [105, 803]
    ],
    7884: [
      [
        79, 803
      ],, {
        770: 7896
      }
    ],
    7885: [
      [
        111, 803
      ],, {
        770: 7897
      }
    ],
    7886: [
      [79, 777]
    ],
    7887: [
      [111, 777]
    ],
    7888: [
      [212, 769]
    ],
    7889: [
      [244, 769]
    ],
    7890: [
      [212, 768]
    ],
    7891: [
      [244, 768]
    ],
    7892: [
      [212, 777]
    ],
    7893: [
      [244, 777]
    ],
    7894: [
      [212, 771]
    ],
    7895: [
      [244, 771]
    ],
    7896: [
      [7884, 770]
    ],
    7897: [
      [7885, 770]
    ],
    7898: [
      [416, 769]
    ],
    7899: [
      [417, 769]
    ],
    7900: [
      [416, 768]
    ],
    7901: [
      [417, 768]
    ],
    7902: [
      [416, 777]
    ],
    7903: [
      [417, 777]
    ],
    7904: [
      [416, 771]
    ],
    7905: [
      [417, 771]
    ],
    7906: [
      [416, 803]
    ],
    7907: [
      [417, 803]
    ],
    7908: [
      [85, 803]
    ],
    7909: [
      [117, 803]
    ],
    7910: [
      [85, 777]
    ],
    7911: [
      [117, 777]
    ],
    7912: [
      [431, 769]
    ],
    7913: [
      [432, 769]
    ],
    7914: [
      [431, 768]
    ],
    7915: [
      [432, 768]
    ],
    7916: [
      [431, 777]
    ],
    7917: [
      [432, 777]
    ],
    7918: [
      [431, 771]
    ],
    7919: [
      [432, 771]
    ],
    7920: [
      [431, 803]
    ],
    7921: [
      [432, 803]
    ],
    7922: [
      [89, 768]
    ],
    7923: [
      [121, 768]
    ],
    7924: [
      [89, 803]
    ],
    7925: [
      [121, 803]
    ],
    7926: [
      [89, 777]
    ],
    7927: [
      [121, 777]
    ],
    7928: [
      [89, 771]
    ],
    7929: [
      [121, 771]
    ]
  },
  7936: {
    7936: [
      [
        945, 787
      ],, {
        768: 7938,
        769: 7940,
        834: 7942,
        837: 8064
      }
    ],
    7937: [
      [
        945, 788
      ],, {
        768: 7939,
        769: 7941,
        834: 7943,
        837: 8065
      }
    ],
    7938: [
      [
        7936, 768
      ],, {
        837: 8066
      }
    ],
    7939: [
      [
        7937, 768
      ],, {
        837: 8067
      }
    ],
    7940: [
      [
        7936, 769
      ],, {
        837: 8068
      }
    ],
    7941: [
      [
        7937, 769
      ],, {
        837: 8069
      }
    ],
    7942: [
      [
        7936, 834
      ],, {
        837: 8070
      }
    ],
    7943: [
      [
        7937, 834
      ],, {
        837: 8071
      }
    ],
    7944: [
      [
        913, 787
      ],, {
        768: 7946,
        769: 7948,
        834: 7950,
        837: 8072
      }
    ],
    7945: [
      [
        913, 788
      ],, {
        768: 7947,
        769: 7949,
        834: 7951,
        837: 8073
      }
    ],
    7946: [
      [
        7944, 768
      ],, {
        837: 8074
      }
    ],
    7947: [
      [
        7945, 768
      ],, {
        837: 8075
      }
    ],
    7948: [
      [
        7944, 769
      ],, {
        837: 8076
      }
    ],
    7949: [
      [
        7945, 769
      ],, {
        837: 8077
      }
    ],
    7950: [
      [
        7944, 834
      ],, {
        837: 8078
      }
    ],
    7951: [
      [
        7945, 834
      ],, {
        837: 8079
      }
    ],
    7952: [
      [
        949, 787
      ],, {
        768: 7954,
        769: 7956
      }
    ],
    7953: [
      [
        949, 788
      ],, {
        768: 7955,
        769: 7957
      }
    ],
    7954: [
      [7952, 768]
    ],
    7955: [
      [7953, 768]
    ],
    7956: [
      [7952, 769]
    ],
    7957: [
      [7953, 769]
    ],
    7960: [
      [
        917, 787
      ],, {
        768: 7962,
        769: 7964
      }
    ],
    7961: [
      [
        917, 788
      ],, {
        768: 7963,
        769: 7965
      }
    ],
    7962: [
      [7960, 768]
    ],
    7963: [
      [7961, 768]
    ],
    7964: [
      [7960, 769]
    ],
    7965: [
      [7961, 769]
    ],
    7968: [
      [
        951, 787
      ],, {
        768: 7970,
        769: 7972,
        834: 7974,
        837: 8080
      }
    ],
    7969: [
      [
        951, 788
      ],, {
        768: 7971,
        769: 7973,
        834: 7975,
        837: 8081
      }
    ],
    7970: [
      [
        7968, 768
      ],, {
        837: 8082
      }
    ],
    7971: [
      [
        7969, 768
      ],, {
        837: 8083
      }
    ],
    7972: [
      [
        7968, 769
      ],, {
        837: 8084
      }
    ],
    7973: [
      [
        7969, 769
      ],, {
        837: 8085
      }
    ],
    7974: [
      [
        7968, 834
      ],, {
        837: 8086
      }
    ],
    7975: [
      [
        7969, 834
      ],, {
        837: 8087
      }
    ],
    7976: [
      [
        919, 787
      ],, {
        768: 7978,
        769: 7980,
        834: 7982,
        837: 8088
      }
    ],
    7977: [
      [
        919, 788
      ],, {
        768: 7979,
        769: 7981,
        834: 7983,
        837: 8089
      }
    ],
    7978: [
      [
        7976, 768
      ],, {
        837: 8090
      }
    ],
    7979: [
      [
        7977, 768
      ],, {
        837: 8091
      }
    ],
    7980: [
      [
        7976, 769
      ],, {
        837: 8092
      }
    ],
    7981: [
      [
        7977, 769
      ],, {
        837: 8093
      }
    ],
    7982: [
      [
        7976, 834
      ],, {
        837: 8094
      }
    ],
    7983: [
      [
        7977, 834
      ],, {
        837: 8095
      }
    ],
    7984: [
      [
        953, 787
      ],, {
        768: 7986,
        769: 7988,
        834: 7990
      }
    ],
    7985: [
      [
        953, 788
      ],, {
        768: 7987,
        769: 7989,
        834: 7991
      }
    ],
    7986: [
      [7984, 768]
    ],
    7987: [
      [7985, 768]
    ],
    7988: [
      [7984, 769]
    ],
    7989: [
      [7985, 769]
    ],
    7990: [
      [7984, 834]
    ],
    7991: [
      [7985, 834]
    ],
    7992: [
      [
        921, 787
      ],, {
        768: 7994,
        769: 7996,
        834: 7998
      }
    ],
    7993: [
      [
        921, 788
      ],, {
        768: 7995,
        769: 7997,
        834: 7999
      }
    ],
    7994: [
      [7992, 768]
    ],
    7995: [
      [7993, 768]
    ],
    7996: [
      [7992, 769]
    ],
    7997: [
      [7993, 769]
    ],
    7998: [
      [7992, 834]
    ],
    7999: [
      [7993, 834]
    ],
    8e3: [
      [
        959, 787
      ],, {
        768: 8002,
        769: 8004
      }
    ],
    8001: [
      [
        959, 788
      ],, {
        768: 8003,
        769: 8005
      }
    ],
    8002: [
      [8e3, 768]
    ],
    8003: [
      [8001, 768]
    ],
    8004: [
      [8e3, 769]
    ],
    8005: [
      [8001, 769]
    ],
    8008: [
      [
        927, 787
      ],, {
        768: 8010,
        769: 8012
      }
    ],
    8009: [
      [
        927, 788
      ],, {
        768: 8011,
        769: 8013
      }
    ],
    8010: [
      [8008, 768]
    ],
    8011: [
      [8009, 768]
    ],
    8012: [
      [8008, 769]
    ],
    8013: [
      [8009, 769]
    ],
    8016: [
      [
        965, 787
      ],, {
        768: 8018,
        769: 8020,
        834: 8022
      }
    ],
    8017: [
      [
        965, 788
      ],, {
        768: 8019,
        769: 8021,
        834: 8023
      }
    ],
    8018: [
      [8016, 768]
    ],
    8019: [
      [8017, 768]
    ],
    8020: [
      [8016, 769]
    ],
    8021: [
      [8017, 769]
    ],
    8022: [
      [8016, 834]
    ],
    8023: [
      [8017, 834]
    ],
    8025: [
      [
        933, 788
      ],, {
        768: 8027,
        769: 8029,
        834: 8031
      }
    ],
    8027: [
      [8025, 768]
    ],
    8029: [
      [8025, 769]
    ],
    8031: [
      [8025, 834]
    ],
    8032: [
      [
        969, 787
      ],, {
        768: 8034,
        769: 8036,
        834: 8038,
        837: 8096
      }
    ],
    8033: [
      [
        969, 788
      ],, {
        768: 8035,
        769: 8037,
        834: 8039,
        837: 8097
      }
    ],
    8034: [
      [
        8032, 768
      ],, {
        837: 8098
      }
    ],
    8035: [
      [
        8033, 768
      ],, {
        837: 8099
      }
    ],
    8036: [
      [
        8032, 769
      ],, {
        837: 8100
      }
    ],
    8037: [
      [
        8033, 769
      ],, {
        837: 8101
      }
    ],
    8038: [
      [
        8032, 834
      ],, {
        837: 8102
      }
    ],
    8039: [
      [
        8033, 834
      ],, {
        837: 8103
      }
    ],
    8040: [
      [
        937, 787
      ],, {
        768: 8042,
        769: 8044,
        834: 8046,
        837: 8104
      }
    ],
    8041: [
      [
        937, 788
      ],, {
        768: 8043,
        769: 8045,
        834: 8047,
        837: 8105
      }
    ],
    8042: [
      [
        8040, 768
      ],, {
        837: 8106
      }
    ],
    8043: [
      [
        8041, 768
      ],, {
        837: 8107
      }
    ],
    8044: [
      [
        8040, 769
      ],, {
        837: 8108
      }
    ],
    8045: [
      [
        8041, 769
      ],, {
        837: 8109
      }
    ],
    8046: [
      [
        8040, 834
      ],, {
        837: 8110
      }
    ],
    8047: [
      [
        8041, 834
      ],, {
        837: 8111
      }
    ],
    8048: [
      [
        945, 768
      ],, {
        837: 8114
      }
    ],
    8049: [
      [940]
    ],
    8050: [
      [949, 768]
    ],
    8051: [
      [941]
    ],
    8052: [
      [
        951, 768
      ],, {
        837: 8130
      }
    ],
    8053: [
      [942]
    ],
    8054: [
      [953, 768]
    ],
    8055: [
      [943]
    ],
    8056: [
      [959, 768]
    ],
    8057: [
      [972]
    ],
    8058: [
      [965, 768]
    ],
    8059: [
      [973]
    ],
    8060: [
      [
        969, 768
      ],, {
        837: 8178
      }
    ],
    8061: [
      [974]
    ],
    8064: [
      [7936, 837]
    ],
    8065: [
      [7937, 837]
    ],
    8066: [
      [7938, 837]
    ],
    8067: [
      [7939, 837]
    ],
    8068: [
      [7940, 837]
    ],
    8069: [
      [7941, 837]
    ],
    8070: [
      [7942, 837]
    ],
    8071: [
      [7943, 837]
    ],
    8072: [
      [7944, 837]
    ],
    8073: [
      [7945, 837]
    ],
    8074: [
      [7946, 837]
    ],
    8075: [
      [7947, 837]
    ],
    8076: [
      [7948, 837]
    ],
    8077: [
      [7949, 837]
    ],
    8078: [
      [7950, 837]
    ],
    8079: [
      [7951, 837]
    ],
    8080: [
      [7968, 837]
    ],
    8081: [
      [7969, 837]
    ],
    8082: [
      [7970, 837]
    ],
    8083: [
      [7971, 837]
    ],
    8084: [
      [7972, 837]
    ],
    8085: [
      [7973, 837]
    ],
    8086: [
      [7974, 837]
    ],
    8087: [
      [7975, 837]
    ],
    8088: [
      [7976, 837]
    ],
    8089: [
      [7977, 837]
    ],
    8090: [
      [7978, 837]
    ],
    8091: [
      [7979, 837]
    ],
    8092: [
      [7980, 837]
    ],
    8093: [
      [7981, 837]
    ],
    8094: [
      [7982, 837]
    ],
    8095: [
      [7983, 837]
    ],
    8096: [
      [8032, 837]
    ],
    8097: [
      [8033, 837]
    ],
    8098: [
      [8034, 837]
    ],
    8099: [
      [8035, 837]
    ],
    8100: [
      [8036, 837]
    ],
    8101: [
      [8037, 837]
    ],
    8102: [
      [8038, 837]
    ],
    8103: [
      [8039, 837]
    ],
    8104: [
      [8040, 837]
    ],
    8105: [
      [8041, 837]
    ],
    8106: [
      [8042, 837]
    ],
    8107: [
      [8043, 837]
    ],
    8108: [
      [8044, 837]
    ],
    8109: [
      [8045, 837]
    ],
    8110: [
      [8046, 837]
    ],
    8111: [
      [8047, 837]
    ],
    8112: [
      [945, 774]
    ],
    8113: [
      [945, 772]
    ],
    8114: [
      [8048, 837]
    ],
    8115: [
      [945, 837]
    ],
    8116: [
      [940, 837]
    ],
    8118: [
      [
        945, 834
      ],, {
        837: 8119
      }
    ],
    8119: [
      [8118, 837]
    ],
    8120: [
      [913, 774]
    ],
    8121: [
      [913, 772]
    ],
    8122: [
      [913, 768]
    ],
    8123: [
      [902]
    ],
    8124: [
      [913, 837]
    ],
    8125: [
      [
        32, 787
      ],
      256
    ],
    8126: [
      [953]
    ],
    8127: [
      [
        32, 787
      ],
      256, {
        768: 8141,
        769: 8142,
        834: 8143
      }
    ],
    8128: [
      [
        32, 834
      ],
      256
    ],
    8129: [
      [168, 834]
    ],
    8130: [
      [8052, 837]
    ],
    8131: [
      [951, 837]
    ],
    8132: [
      [942, 837]
    ],
    8134: [
      [
        951, 834
      ],, {
        837: 8135
      }
    ],
    8135: [
      [8134, 837]
    ],
    8136: [
      [917, 768]
    ],
    8137: [
      [904]
    ],
    8138: [
      [919, 768]
    ],
    8139: [
      [905]
    ],
    8140: [
      [919, 837]
    ],
    8141: [
      [8127, 768]
    ],
    8142: [
      [8127, 769]
    ],
    8143: [
      [8127, 834]
    ],
    8144: [
      [953, 774]
    ],
    8145: [
      [953, 772]
    ],
    8146: [
      [970, 768]
    ],
    8147: [
      [912]
    ],
    8150: [
      [953, 834]
    ],
    8151: [
      [970, 834]
    ],
    8152: [
      [921, 774]
    ],
    8153: [
      [921, 772]
    ],
    8154: [
      [921, 768]
    ],
    8155: [
      [906]
    ],
    8157: [
      [8190, 768]
    ],
    8158: [
      [8190, 769]
    ],
    8159: [
      [8190, 834]
    ],
    8160: [
      [965, 774]
    ],
    8161: [
      [965, 772]
    ],
    8162: [
      [971, 768]
    ],
    8163: [
      [944]
    ],
    8164: [
      [961, 787]
    ],
    8165: [
      [961, 788]
    ],
    8166: [
      [965, 834]
    ],
    8167: [
      [971, 834]
    ],
    8168: [
      [933, 774]
    ],
    8169: [
      [933, 772]
    ],
    8170: [
      [933, 768]
    ],
    8171: [
      [910]
    ],
    8172: [
      [929, 788]
    ],
    8173: [
      [168, 768]
    ],
    8174: [
      [901]
    ],
    8175: [
      [96]
    ],
    8178: [
      [8060, 837]
    ],
    8179: [
      [969, 837]
    ],
    8180: [
      [974, 837]
    ],
    8182: [
      [
        969, 834
      ],, {
        837: 8183
      }
    ],
    8183: [
      [8182, 837]
    ],
    8184: [
      [927, 768]
    ],
    8185: [
      [908]
    ],
    8186: [
      [937, 768]
    ],
    8187: [
      [911]
    ],
    8188: [
      [937, 837]
    ],
    8189: [
      [180]
    ],
    8190: [
      [
        32, 788
      ],
      256, {
        768: 8157,
        769: 8158,
        834: 8159
      }
    ]
  },
  8192: {
    8192: [
      [8194]
    ],
    8193: [
      [8195]
    ],
    8194: [
      [32], 256
    ],
    8195: [
      [32], 256
    ],
    8196: [
      [32], 256
    ],
    8197: [
      [32], 256
    ],
    8198: [
      [32], 256
    ],
    8199: [
      [32], 256
    ],
    8200: [
      [32], 256
    ],
    8201: [
      [32], 256
    ],
    8202: [
      [32], 256
    ],
    8209: [
      [8208], 256
    ],
    8215: [
      [
        32, 819
      ],
      256
    ],
    8228: [
      [46], 256
    ],
    8229: [
      [
        46, 46
      ],
      256
    ],
    8230: [
      [
        46, 46, 46
      ],
      256
    ],
    8239: [
      [32], 256
    ],
    8243: [
      [
        8242, 8242
      ],
      256
    ],
    8244: [
      [
        8242, 8242, 8242
      ],
      256
    ],
    8246: [
      [
        8245, 8245
      ],
      256
    ],
    8247: [
      [
        8245, 8245, 8245
      ],
      256
    ],
    8252: [
      [
        33, 33
      ],
      256
    ],
    8254: [
      [
        32, 773
      ],
      256
    ],
    8263: [
      [
        63, 63
      ],
      256
    ],
    8264: [
      [
        63, 33
      ],
      256
    ],
    8265: [
      [
        33, 63
      ],
      256
    ],
    8279: [
      [
        8242, 8242, 8242, 8242
      ],
      256
    ],
    8287: [
      [32], 256
    ],
    8304: [
      [48], 256
    ],
    8305: [
      [105], 256
    ],
    8308: [
      [52], 256
    ],
    8309: [
      [53], 256
    ],
    8310: [
      [54], 256
    ],
    8311: [
      [55], 256
    ],
    8312: [
      [56], 256
    ],
    8313: [
      [57], 256
    ],
    8314: [
      [43], 256
    ],
    8315: [
      [8722], 256
    ],
    8316: [
      [61], 256
    ],
    8317: [
      [40], 256
    ],
    8318: [
      [41], 256
    ],
    8319: [
      [110], 256
    ],
    8320: [
      [48], 256
    ],
    8321: [
      [49], 256
    ],
    8322: [
      [50], 256
    ],
    8323: [
      [51], 256
    ],
    8324: [
      [52], 256
    ],
    8325: [
      [53], 256
    ],
    8326: [
      [54], 256
    ],
    8327: [
      [55], 256
    ],
    8328: [
      [56], 256
    ],
    8329: [
      [57], 256
    ],
    8330: [
      [43], 256
    ],
    8331: [
      [8722], 256
    ],
    8332: [
      [61], 256
    ],
    8333: [
      [40], 256
    ],
    8334: [
      [41], 256
    ],
    8336: [
      [97], 256
    ],
    8337: [
      [101], 256
    ],
    8338: [
      [111], 256
    ],
    8339: [
      [120], 256
    ],
    8340: [
      [601], 256
    ],
    8341: [
      [104], 256
    ],
    8342: [
      [107], 256
    ],
    8343: [
      [108], 256
    ],
    8344: [
      [109], 256
    ],
    8345: [
      [110], 256
    ],
    8346: [
      [112], 256
    ],
    8347: [
      [115], 256
    ],
    8348: [
      [116], 256
    ],
    8360: [
      [
        82, 115
      ],
      256
    ],
    8400: [
      , 230
    ],
    8401: [
      , 230
    ],
    8402: [
      , 1
    ],
    8403: [
      , 1
    ],
    8404: [
      , 230
    ],
    8405: [
      , 230
    ],
    8406: [
      , 230
    ],
    8407: [
      , 230
    ],
    8408: [
      , 1
    ],
    8409: [
      , 1
    ],
    8410: [
      , 1
    ],
    8411: [
      , 230
    ],
    8412: [
      , 230
    ],
    8417: [
      , 230
    ],
    8421: [
      , 1
    ],
    8422: [
      , 1
    ],
    8423: [
      , 230
    ],
    8424: [
      , 220
    ],
    8425: [
      , 230
    ],
    8426: [
      , 1
    ],
    8427: [
      , 1
    ],
    8428: [
      , 220
    ],
    8429: [
      , 220
    ],
    8430: [
      , 220
    ],
    8431: [
      , 220
    ],
    8432: [, 230]
  },
  8448: {
    8448: [
      [
        97, 47, 99
      ],
      256
    ],
    8449: [
      [
        97, 47, 115
      ],
      256
    ],
    8450: [
      [67], 256
    ],
    8451: [
      [
        176, 67
      ],
      256
    ],
    8453: [
      [
        99, 47, 111
      ],
      256
    ],
    8454: [
      [
        99, 47, 117
      ],
      256
    ],
    8455: [
      [400], 256
    ],
    8457: [
      [
        176, 70
      ],
      256
    ],
    8458: [
      [103], 256
    ],
    8459: [
      [72], 256
    ],
    8460: [
      [72], 256
    ],
    8461: [
      [72], 256
    ],
    8462: [
      [104], 256
    ],
    8463: [
      [295], 256
    ],
    8464: [
      [73], 256
    ],
    8465: [
      [73], 256
    ],
    8466: [
      [76], 256
    ],
    8467: [
      [108], 256
    ],
    8469: [
      [78], 256
    ],
    8470: [
      [
        78, 111
      ],
      256
    ],
    8473: [
      [80], 256
    ],
    8474: [
      [81], 256
    ],
    8475: [
      [82], 256
    ],
    8476: [
      [82], 256
    ],
    8477: [
      [82], 256
    ],
    8480: [
      [
        83, 77
      ],
      256
    ],
    8481: [
      [
        84, 69, 76
      ],
      256
    ],
    8482: [
      [
        84, 77
      ],
      256
    ],
    8484: [
      [90], 256
    ],
    8486: [
      [937]
    ],
    8488: [
      [90], 256
    ],
    8490: [
      [75]
    ],
    8491: [
      [197]
    ],
    8492: [
      [66], 256
    ],
    8493: [
      [67], 256
    ],
    8495: [
      [101], 256
    ],
    8496: [
      [69], 256
    ],
    8497: [
      [70], 256
    ],
    8499: [
      [77], 256
    ],
    8500: [
      [111], 256
    ],
    8501: [
      [1488], 256
    ],
    8502: [
      [1489], 256
    ],
    8503: [
      [1490], 256
    ],
    8504: [
      [1491], 256
    ],
    8505: [
      [105], 256
    ],
    8507: [
      [
        70, 65, 88
      ],
      256
    ],
    8508: [
      [960], 256
    ],
    8509: [
      [947], 256
    ],
    8510: [
      [915], 256
    ],
    8511: [
      [928], 256
    ],
    8512: [
      [8721], 256
    ],
    8517: [
      [68], 256
    ],
    8518: [
      [100], 256
    ],
    8519: [
      [101], 256
    ],
    8520: [
      [105], 256
    ],
    8521: [
      [106], 256
    ],
    8528: [
      [
        49, 8260, 55
      ],
      256
    ],
    8529: [
      [
        49, 8260, 57
      ],
      256
    ],
    8530: [
      [
        49, 8260, 49, 48
      ],
      256
    ],
    8531: [
      [
        49, 8260, 51
      ],
      256
    ],
    8532: [
      [
        50, 8260, 51
      ],
      256
    ],
    8533: [
      [
        49, 8260, 53
      ],
      256
    ],
    8534: [
      [
        50, 8260, 53
      ],
      256
    ],
    8535: [
      [
        51, 8260, 53
      ],
      256
    ],
    8536: [
      [
        52, 8260, 53
      ],
      256
    ],
    8537: [
      [
        49, 8260, 54
      ],
      256
    ],
    8538: [
      [
        53, 8260, 54
      ],
      256
    ],
    8539: [
      [
        49, 8260, 56
      ],
      256
    ],
    8540: [
      [
        51, 8260, 56
      ],
      256
    ],
    8541: [
      [
        53, 8260, 56
      ],
      256
    ],
    8542: [
      [
        55, 8260, 56
      ],
      256
    ],
    8543: [
      [
        49, 8260
      ],
      256
    ],
    8544: [
      [73], 256
    ],
    8545: [
      [
        73, 73
      ],
      256
    ],
    8546: [
      [
        73, 73, 73
      ],
      256
    ],
    8547: [
      [
        73, 86
      ],
      256
    ],
    8548: [
      [86], 256
    ],
    8549: [
      [
        86, 73
      ],
      256
    ],
    8550: [
      [
        86, 73, 73
      ],
      256
    ],
    8551: [
      [
        86, 73, 73, 73
      ],
      256
    ],
    8552: [
      [
        73, 88
      ],
      256
    ],
    8553: [
      [88], 256
    ],
    8554: [
      [
        88, 73
      ],
      256
    ],
    8555: [
      [
        88, 73, 73
      ],
      256
    ],
    8556: [
      [76], 256
    ],
    8557: [
      [67], 256
    ],
    8558: [
      [68], 256
    ],
    8559: [
      [77], 256
    ],
    8560: [
      [105], 256
    ],
    8561: [
      [
        105, 105
      ],
      256
    ],
    8562: [
      [
        105, 105, 105
      ],
      256
    ],
    8563: [
      [
        105, 118
      ],
      256
    ],
    8564: [
      [118], 256
    ],
    8565: [
      [
        118, 105
      ],
      256
    ],
    8566: [
      [
        118, 105, 105
      ],
      256
    ],
    8567: [
      [
        118, 105, 105, 105
      ],
      256
    ],
    8568: [
      [
        105, 120
      ],
      256
    ],
    8569: [
      [120], 256
    ],
    8570: [
      [
        120, 105
      ],
      256
    ],
    8571: [
      [
        120, 105, 105
      ],
      256
    ],
    8572: [
      [108], 256
    ],
    8573: [
      [99], 256
    ],
    8574: [
      [100], 256
    ],
    8575: [
      [109], 256
    ],
    8585: [
      [
        48, 8260, 51
      ],
      256
    ],
    8592: [
      ,, {
        824: 8602
      }
    ],
    8594: [
      ,, {
        824: 8603
      }
    ],
    8596: [
      ,, {
        824: 8622
      }
    ],
    8602: [
      [8592, 824]
    ],
    8603: [
      [8594, 824]
    ],
    8622: [
      [8596, 824]
    ],
    8653: [
      [8656, 824]
    ],
    8654: [
      [8660, 824]
    ],
    8655: [
      [8658, 824]
    ],
    8656: [
      ,, {
        824: 8653
      }
    ],
    8658: [
      ,, {
        824: 8655
      }
    ],
    8660: [
      ,, {
        824: 8654
      }
    ]
  },
  8704: {
    8707: [
      ,, {
        824: 8708
      }
    ],
    8708: [
      [8707, 824]
    ],
    8712: [
      ,, {
        824: 8713
      }
    ],
    8713: [
      [8712, 824]
    ],
    8715: [
      ,, {
        824: 8716
      }
    ],
    8716: [
      [8715, 824]
    ],
    8739: [
      ,, {
        824: 8740
      }
    ],
    8740: [
      [8739, 824]
    ],
    8741: [
      ,, {
        824: 8742
      }
    ],
    8742: [
      [8741, 824]
    ],
    8748: [
      [
        8747, 8747
      ],
      256
    ],
    8749: [
      [
        8747, 8747, 8747
      ],
      256
    ],
    8751: [
      [
        8750, 8750
      ],
      256
    ],
    8752: [
      [
        8750, 8750, 8750
      ],
      256
    ],
    8764: [
      ,, {
        824: 8769
      }
    ],
    8769: [
      [8764, 824]
    ],
    8771: [
      ,, {
        824: 8772
      }
    ],
    8772: [
      [8771, 824]
    ],
    8773: [
      ,, {
        824: 8775
      }
    ],
    8775: [
      [8773, 824]
    ],
    8776: [
      ,, {
        824: 8777
      }
    ],
    8777: [
      [8776, 824]
    ],
    8781: [
      ,, {
        824: 8813
      }
    ],
    8800: [
      [61, 824]
    ],
    8801: [
      ,, {
        824: 8802
      }
    ],
    8802: [
      [8801, 824]
    ],
    8804: [
      ,, {
        824: 8816
      }
    ],
    8805: [
      ,, {
        824: 8817
      }
    ],
    8813: [
      [8781, 824]
    ],
    8814: [
      [60, 824]
    ],
    8815: [
      [62, 824]
    ],
    8816: [
      [8804, 824]
    ],
    8817: [
      [8805, 824]
    ],
    8818: [
      ,, {
        824: 8820
      }
    ],
    8819: [
      ,, {
        824: 8821
      }
    ],
    8820: [
      [8818, 824]
    ],
    8821: [
      [8819, 824]
    ],
    8822: [
      ,, {
        824: 8824
      }
    ],
    8823: [
      ,, {
        824: 8825
      }
    ],
    8824: [
      [8822, 824]
    ],
    8825: [
      [8823, 824]
    ],
    8826: [
      ,, {
        824: 8832
      }
    ],
    8827: [
      ,, {
        824: 8833
      }
    ],
    8828: [
      ,, {
        824: 8928
      }
    ],
    8829: [
      ,, {
        824: 8929
      }
    ],
    8832: [
      [8826, 824]
    ],
    8833: [
      [8827, 824]
    ],
    8834: [
      ,, {
        824: 8836
      }
    ],
    8835: [
      ,, {
        824: 8837
      }
    ],
    8836: [
      [8834, 824]
    ],
    8837: [
      [8835, 824]
    ],
    8838: [
      ,, {
        824: 8840
      }
    ],
    8839: [
      ,, {
        824: 8841
      }
    ],
    8840: [
      [8838, 824]
    ],
    8841: [
      [8839, 824]
    ],
    8849: [
      ,, {
        824: 8930
      }
    ],
    8850: [
      ,, {
        824: 8931
      }
    ],
    8866: [
      ,, {
        824: 8876
      }
    ],
    8872: [
      ,, {
        824: 8877
      }
    ],
    8873: [
      ,, {
        824: 8878
      }
    ],
    8875: [
      ,, {
        824: 8879
      }
    ],
    8876: [
      [8866, 824]
    ],
    8877: [
      [8872, 824]
    ],
    8878: [
      [8873, 824]
    ],
    8879: [
      [8875, 824]
    ],
    8882: [
      ,, {
        824: 8938
      }
    ],
    8883: [
      ,, {
        824: 8939
      }
    ],
    8884: [
      ,, {
        824: 8940
      }
    ],
    8885: [
      ,, {
        824: 8941
      }
    ],
    8928: [
      [8828, 824]
    ],
    8929: [
      [8829, 824]
    ],
    8930: [
      [8849, 824]
    ],
    8931: [
      [8850, 824]
    ],
    8938: [
      [8882, 824]
    ],
    8939: [
      [8883, 824]
    ],
    8940: [
      [8884, 824]
    ],
    8941: [
      [8885, 824]
    ]
  },
  8960: {
    9001: [
      [12296]
    ],
    9002: [[12297]]
  },
  9216: {
    9312: [
      [49], 256
    ],
    9313: [
      [50], 256
    ],
    9314: [
      [51], 256
    ],
    9315: [
      [52], 256
    ],
    9316: [
      [53], 256
    ],
    9317: [
      [54], 256
    ],
    9318: [
      [55], 256
    ],
    9319: [
      [56], 256
    ],
    9320: [
      [57], 256
    ],
    9321: [
      [
        49, 48
      ],
      256
    ],
    9322: [
      [
        49, 49
      ],
      256
    ],
    9323: [
      [
        49, 50
      ],
      256
    ],
    9324: [
      [
        49, 51
      ],
      256
    ],
    9325: [
      [
        49, 52
      ],
      256
    ],
    9326: [
      [
        49, 53
      ],
      256
    ],
    9327: [
      [
        49, 54
      ],
      256
    ],
    9328: [
      [
        49, 55
      ],
      256
    ],
    9329: [
      [
        49, 56
      ],
      256
    ],
    9330: [
      [
        49, 57
      ],
      256
    ],
    9331: [
      [
        50, 48
      ],
      256
    ],
    9332: [
      [
        40, 49, 41
      ],
      256
    ],
    9333: [
      [
        40, 50, 41
      ],
      256
    ],
    9334: [
      [
        40, 51, 41
      ],
      256
    ],
    9335: [
      [
        40, 52, 41
      ],
      256
    ],
    9336: [
      [
        40, 53, 41
      ],
      256
    ],
    9337: [
      [
        40, 54, 41
      ],
      256
    ],
    9338: [
      [
        40, 55, 41
      ],
      256
    ],
    9339: [
      [
        40, 56, 41
      ],
      256
    ],
    9340: [
      [
        40, 57, 41
      ],
      256
    ],
    9341: [
      [
        40, 49, 48, 41
      ],
      256
    ],
    9342: [
      [
        40, 49, 49, 41
      ],
      256
    ],
    9343: [
      [
        40, 49, 50, 41
      ],
      256
    ],
    9344: [
      [
        40, 49, 51, 41
      ],
      256
    ],
    9345: [
      [
        40, 49, 52, 41
      ],
      256
    ],
    9346: [
      [
        40, 49, 53, 41
      ],
      256
    ],
    9347: [
      [
        40, 49, 54, 41
      ],
      256
    ],
    9348: [
      [
        40, 49, 55, 41
      ],
      256
    ],
    9349: [
      [
        40, 49, 56, 41
      ],
      256
    ],
    9350: [
      [
        40, 49, 57, 41
      ],
      256
    ],
    9351: [
      [
        40, 50, 48, 41
      ],
      256
    ],
    9352: [
      [
        49, 46
      ],
      256
    ],
    9353: [
      [
        50, 46
      ],
      256
    ],
    9354: [
      [
        51, 46
      ],
      256
    ],
    9355: [
      [
        52, 46
      ],
      256
    ],
    9356: [
      [
        53, 46
      ],
      256
    ],
    9357: [
      [
        54, 46
      ],
      256
    ],
    9358: [
      [
        55, 46
      ],
      256
    ],
    9359: [
      [
        56, 46
      ],
      256
    ],
    9360: [
      [
        57, 46
      ],
      256
    ],
    9361: [
      [
        49, 48, 46
      ],
      256
    ],
    9362: [
      [
        49, 49, 46
      ],
      256
    ],
    9363: [
      [
        49, 50, 46
      ],
      256
    ],
    9364: [
      [
        49, 51, 46
      ],
      256
    ],
    9365: [
      [
        49, 52, 46
      ],
      256
    ],
    9366: [
      [
        49, 53, 46
      ],
      256
    ],
    9367: [
      [
        49, 54, 46
      ],
      256
    ],
    9368: [
      [
        49, 55, 46
      ],
      256
    ],
    9369: [
      [
        49, 56, 46
      ],
      256
    ],
    9370: [
      [
        49, 57, 46
      ],
      256
    ],
    9371: [
      [
        50, 48, 46
      ],
      256
    ],
    9372: [
      [
        40, 97, 41
      ],
      256
    ],
    9373: [
      [
        40, 98, 41
      ],
      256
    ],
    9374: [
      [
        40, 99, 41
      ],
      256
    ],
    9375: [
      [
        40, 100, 41
      ],
      256
    ],
    9376: [
      [
        40, 101, 41
      ],
      256
    ],
    9377: [
      [
        40, 102, 41
      ],
      256
    ],
    9378: [
      [
        40, 103, 41
      ],
      256
    ],
    9379: [
      [
        40, 104, 41
      ],
      256
    ],
    9380: [
      [
        40, 105, 41
      ],
      256
    ],
    9381: [
      [
        40, 106, 41
      ],
      256
    ],
    9382: [
      [
        40, 107, 41
      ],
      256
    ],
    9383: [
      [
        40, 108, 41
      ],
      256
    ],
    9384: [
      [
        40, 109, 41
      ],
      256
    ],
    9385: [
      [
        40, 110, 41
      ],
      256
    ],
    9386: [
      [
        40, 111, 41
      ],
      256
    ],
    9387: [
      [
        40, 112, 41
      ],
      256
    ],
    9388: [
      [
        40, 113, 41
      ],
      256
    ],
    9389: [
      [
        40, 114, 41
      ],
      256
    ],
    9390: [
      [
        40, 115, 41
      ],
      256
    ],
    9391: [
      [
        40, 116, 41
      ],
      256
    ],
    9392: [
      [
        40, 117, 41
      ],
      256
    ],
    9393: [
      [
        40, 118, 41
      ],
      256
    ],
    9394: [
      [
        40, 119, 41
      ],
      256
    ],
    9395: [
      [
        40, 120, 41
      ],
      256
    ],
    9396: [
      [
        40, 121, 41
      ],
      256
    ],
    9397: [
      [
        40, 122, 41
      ],
      256
    ],
    9398: [
      [65], 256
    ],
    9399: [
      [66], 256
    ],
    9400: [
      [67], 256
    ],
    9401: [
      [68], 256
    ],
    9402: [
      [69], 256
    ],
    9403: [
      [70], 256
    ],
    9404: [
      [71], 256
    ],
    9405: [
      [72], 256
    ],
    9406: [
      [73], 256
    ],
    9407: [
      [74], 256
    ],
    9408: [
      [75], 256
    ],
    9409: [
      [76], 256
    ],
    9410: [
      [77], 256
    ],
    9411: [
      [78], 256
    ],
    9412: [
      [79], 256
    ],
    9413: [
      [80], 256
    ],
    9414: [
      [81], 256
    ],
    9415: [
      [82], 256
    ],
    9416: [
      [83], 256
    ],
    9417: [
      [84], 256
    ],
    9418: [
      [85], 256
    ],
    9419: [
      [86], 256
    ],
    9420: [
      [87], 256
    ],
    9421: [
      [88], 256
    ],
    9422: [
      [89], 256
    ],
    9423: [
      [90], 256
    ],
    9424: [
      [97], 256
    ],
    9425: [
      [98], 256
    ],
    9426: [
      [99], 256
    ],
    9427: [
      [100], 256
    ],
    9428: [
      [101], 256
    ],
    9429: [
      [102], 256
    ],
    9430: [
      [103], 256
    ],
    9431: [
      [104], 256
    ],
    9432: [
      [105], 256
    ],
    9433: [
      [106], 256
    ],
    9434: [
      [107], 256
    ],
    9435: [
      [108], 256
    ],
    9436: [
      [109], 256
    ],
    9437: [
      [110], 256
    ],
    9438: [
      [111], 256
    ],
    9439: [
      [112], 256
    ],
    9440: [
      [113], 256
    ],
    9441: [
      [114], 256
    ],
    9442: [
      [115], 256
    ],
    9443: [
      [116], 256
    ],
    9444: [
      [117], 256
    ],
    9445: [
      [118], 256
    ],
    9446: [
      [119], 256
    ],
    9447: [
      [120], 256
    ],
    9448: [
      [121], 256
    ],
    9449: [
      [122], 256
    ],
    9450: [[48], 256]
  },
  10752: {
    10764: [
      [
        8747, 8747, 8747, 8747
      ],
      256
    ],
    10868: [
      [
        58, 58, 61
      ],
      256
    ],
    10869: [
      [
        61, 61
      ],
      256
    ],
    10870: [
      [
        61, 61, 61
      ],
      256
    ],
    10972: [
      [
        10973, 824
      ],
      512
    ]
  },
  11264: {
    11388: [
      [106], 256
    ],
    11389: [
      [86], 256
    ],
    11503: [
      , 230
    ],
    11504: [
      , 230
    ],
    11505: [, 230]
  },
  11520: {
    11631: [
      [11617], 256
    ],
    11647: [
      , 9
    ],
    11744: [
      , 230
    ],
    11745: [
      , 230
    ],
    11746: [
      , 230
    ],
    11747: [
      , 230
    ],
    11748: [
      , 230
    ],
    11749: [
      , 230
    ],
    11750: [
      , 230
    ],
    11751: [
      , 230
    ],
    11752: [
      , 230
    ],
    11753: [
      , 230
    ],
    11754: [
      , 230
    ],
    11755: [
      , 230
    ],
    11756: [
      , 230
    ],
    11757: [
      , 230
    ],
    11758: [
      , 230
    ],
    11759: [
      , 230
    ],
    11760: [
      , 230
    ],
    11761: [
      , 230
    ],
    11762: [
      , 230
    ],
    11763: [
      , 230
    ],
    11764: [
      , 230
    ],
    11765: [
      , 230
    ],
    11766: [
      , 230
    ],
    11767: [
      , 230
    ],
    11768: [
      , 230
    ],
    11769: [
      , 230
    ],
    11770: [
      , 230
    ],
    11771: [
      , 230
    ],
    11772: [
      , 230
    ],
    11773: [
      , 230
    ],
    11774: [
      , 230
    ],
    11775: [, 230]
  },
  11776: {
    11935: [
      [27597], 256
    ],
    12019: [[40863], 256]
  },
  12032: {
    12032: [
      [19968], 256
    ],
    12033: [
      [20008], 256
    ],
    12034: [
      [20022], 256
    ],
    12035: [
      [20031], 256
    ],
    12036: [
      [20057], 256
    ],
    12037: [
      [20101], 256
    ],
    12038: [
      [20108], 256
    ],
    12039: [
      [20128], 256
    ],
    12040: [
      [20154], 256
    ],
    12041: [
      [20799], 256
    ],
    12042: [
      [20837], 256
    ],
    12043: [
      [20843], 256
    ],
    12044: [
      [20866], 256
    ],
    12045: [
      [20886], 256
    ],
    12046: [
      [20907], 256
    ],
    12047: [
      [20960], 256
    ],
    12048: [
      [20981], 256
    ],
    12049: [
      [20992], 256
    ],
    12050: [
      [21147], 256
    ],
    12051: [
      [21241], 256
    ],
    12052: [
      [21269], 256
    ],
    12053: [
      [21274], 256
    ],
    12054: [
      [21304], 256
    ],
    12055: [
      [21313], 256
    ],
    12056: [
      [21340], 256
    ],
    12057: [
      [21353], 256
    ],
    12058: [
      [21378], 256
    ],
    12059: [
      [21430], 256
    ],
    12060: [
      [21448], 256
    ],
    12061: [
      [21475], 256
    ],
    12062: [
      [22231], 256
    ],
    12063: [
      [22303], 256
    ],
    12064: [
      [22763], 256
    ],
    12065: [
      [22786], 256
    ],
    12066: [
      [22794], 256
    ],
    12067: [
      [22805], 256
    ],
    12068: [
      [22823], 256
    ],
    12069: [
      [22899], 256
    ],
    12070: [
      [23376], 256
    ],
    12071: [
      [23424], 256
    ],
    12072: [
      [23544], 256
    ],
    12073: [
      [23567], 256
    ],
    12074: [
      [23586], 256
    ],
    12075: [
      [23608], 256
    ],
    12076: [
      [23662], 256
    ],
    12077: [
      [23665], 256
    ],
    12078: [
      [24027], 256
    ],
    12079: [
      [24037], 256
    ],
    12080: [
      [24049], 256
    ],
    12081: [
      [24062], 256
    ],
    12082: [
      [24178], 256
    ],
    12083: [
      [24186], 256
    ],
    12084: [
      [24191], 256
    ],
    12085: [
      [24308], 256
    ],
    12086: [
      [24318], 256
    ],
    12087: [
      [24331], 256
    ],
    12088: [
      [24339], 256
    ],
    12089: [
      [24400], 256
    ],
    12090: [
      [24417], 256
    ],
    12091: [
      [24435], 256
    ],
    12092: [
      [24515], 256
    ],
    12093: [
      [25096], 256
    ],
    12094: [
      [25142], 256
    ],
    12095: [
      [25163], 256
    ],
    12096: [
      [25903], 256
    ],
    12097: [
      [25908], 256
    ],
    12098: [
      [25991], 256
    ],
    12099: [
      [26007], 256
    ],
    12100: [
      [26020], 256
    ],
    12101: [
      [26041], 256
    ],
    12102: [
      [26080], 256
    ],
    12103: [
      [26085], 256
    ],
    12104: [
      [26352], 256
    ],
    12105: [
      [26376], 256
    ],
    12106: [
      [26408], 256
    ],
    12107: [
      [27424], 256
    ],
    12108: [
      [27490], 256
    ],
    12109: [
      [27513], 256
    ],
    12110: [
      [27571], 256
    ],
    12111: [
      [27595], 256
    ],
    12112: [
      [27604], 256
    ],
    12113: [
      [27611], 256
    ],
    12114: [
      [27663], 256
    ],
    12115: [
      [27668], 256
    ],
    12116: [
      [27700], 256
    ],
    12117: [
      [28779], 256
    ],
    12118: [
      [29226], 256
    ],
    12119: [
      [29238], 256
    ],
    12120: [
      [29243], 256
    ],
    12121: [
      [29247], 256
    ],
    12122: [
      [29255], 256
    ],
    12123: [
      [29273], 256
    ],
    12124: [
      [29275], 256
    ],
    12125: [
      [29356], 256
    ],
    12126: [
      [29572], 256
    ],
    12127: [
      [29577], 256
    ],
    12128: [
      [29916], 256
    ],
    12129: [
      [29926], 256
    ],
    12130: [
      [29976], 256
    ],
    12131: [
      [29983], 256
    ],
    12132: [
      [29992], 256
    ],
    12133: [
      [3e4], 256
    ],
    12134: [
      [30091], 256
    ],
    12135: [
      [30098], 256
    ],
    12136: [
      [30326], 256
    ],
    12137: [
      [30333], 256
    ],
    12138: [
      [30382], 256
    ],
    12139: [
      [30399], 256
    ],
    12140: [
      [30446], 256
    ],
    12141: [
      [30683], 256
    ],
    12142: [
      [30690], 256
    ],
    12143: [
      [30707], 256
    ],
    12144: [
      [31034], 256
    ],
    12145: [
      [31160], 256
    ],
    12146: [
      [31166], 256
    ],
    12147: [
      [31348], 256
    ],
    12148: [
      [31435], 256
    ],
    12149: [
      [31481], 256
    ],
    12150: [
      [31859], 256
    ],
    12151: [
      [31992], 256
    ],
    12152: [
      [32566], 256
    ],
    12153: [
      [32593], 256
    ],
    12154: [
      [32650], 256
    ],
    12155: [
      [32701], 256
    ],
    12156: [
      [32769], 256
    ],
    12157: [
      [32780], 256
    ],
    12158: [
      [32786], 256
    ],
    12159: [
      [32819], 256
    ],
    12160: [
      [32895], 256
    ],
    12161: [
      [32905], 256
    ],
    12162: [
      [33251], 256
    ],
    12163: [
      [33258], 256
    ],
    12164: [
      [33267], 256
    ],
    12165: [
      [33276], 256
    ],
    12166: [
      [33292], 256
    ],
    12167: [
      [33307], 256
    ],
    12168: [
      [33311], 256
    ],
    12169: [
      [33390], 256
    ],
    12170: [
      [33394], 256
    ],
    12171: [
      [33400], 256
    ],
    12172: [
      [34381], 256
    ],
    12173: [
      [34411], 256
    ],
    12174: [
      [34880], 256
    ],
    12175: [
      [34892], 256
    ],
    12176: [
      [34915], 256
    ],
    12177: [
      [35198], 256
    ],
    12178: [
      [35211], 256
    ],
    12179: [
      [35282], 256
    ],
    12180: [
      [35328], 256
    ],
    12181: [
      [35895], 256
    ],
    12182: [
      [35910], 256
    ],
    12183: [
      [35925], 256
    ],
    12184: [
      [35960], 256
    ],
    12185: [
      [35997], 256
    ],
    12186: [
      [36196], 256
    ],
    12187: [
      [36208], 256
    ],
    12188: [
      [36275], 256
    ],
    12189: [
      [36523], 256
    ],
    12190: [
      [36554], 256
    ],
    12191: [
      [36763], 256
    ],
    12192: [
      [36784], 256
    ],
    12193: [
      [36789], 256
    ],
    12194: [
      [37009], 256
    ],
    12195: [
      [37193], 256
    ],
    12196: [
      [37318], 256
    ],
    12197: [
      [37324], 256
    ],
    12198: [
      [37329], 256
    ],
    12199: [
      [38263], 256
    ],
    12200: [
      [38272], 256
    ],
    12201: [
      [38428], 256
    ],
    12202: [
      [38582], 256
    ],
    12203: [
      [38585], 256
    ],
    12204: [
      [38632], 256
    ],
    12205: [
      [38737], 256
    ],
    12206: [
      [38750], 256
    ],
    12207: [
      [38754], 256
    ],
    12208: [
      [38761], 256
    ],
    12209: [
      [38859], 256
    ],
    12210: [
      [38893], 256
    ],
    12211: [
      [38899], 256
    ],
    12212: [
      [38913], 256
    ],
    12213: [
      [39080], 256
    ],
    12214: [
      [39131], 256
    ],
    12215: [
      [39135], 256
    ],
    12216: [
      [39318], 256
    ],
    12217: [
      [39321], 256
    ],
    12218: [
      [39340], 256
    ],
    12219: [
      [39592], 256
    ],
    12220: [
      [39640], 256
    ],
    12221: [
      [39647], 256
    ],
    12222: [
      [39717], 256
    ],
    12223: [
      [39727], 256
    ],
    12224: [
      [39730], 256
    ],
    12225: [
      [39740], 256
    ],
    12226: [
      [39770], 256
    ],
    12227: [
      [40165], 256
    ],
    12228: [
      [40565], 256
    ],
    12229: [
      [40575], 256
    ],
    12230: [
      [40613], 256
    ],
    12231: [
      [40635], 256
    ],
    12232: [
      [40643], 256
    ],
    12233: [
      [40653], 256
    ],
    12234: [
      [40657], 256
    ],
    12235: [
      [40697], 256
    ],
    12236: [
      [40701], 256
    ],
    12237: [
      [40718], 256
    ],
    12238: [
      [40723], 256
    ],
    12239: [
      [40736], 256
    ],
    12240: [
      [40763], 256
    ],
    12241: [
      [40778], 256
    ],
    12242: [
      [40786], 256
    ],
    12243: [
      [40845], 256
    ],
    12244: [
      [40860], 256
    ],
    12245: [[40864], 256]
  },
  12288: {
    12288: [
      [32], 256
    ],
    12330: [
      , 218
    ],
    12331: [
      , 228
    ],
    12332: [
      , 232
    ],
    12333: [
      , 222
    ],
    12334: [
      , 224
    ],
    12335: [
      , 224
    ],
    12342: [
      [12306], 256
    ],
    12344: [
      [21313], 256
    ],
    12345: [
      [21316], 256
    ],
    12346: [
      [21317], 256
    ],
    12358: [
      ,, {
        12441: 12436
      }
    ],
    12363: [
      ,, {
        12441: 12364
      }
    ],
    12364: [
      [12363, 12441]
    ],
    12365: [
      ,, {
        12441: 12366
      }
    ],
    12366: [
      [12365, 12441]
    ],
    12367: [
      ,, {
        12441: 12368
      }
    ],
    12368: [
      [12367, 12441]
    ],
    12369: [
      ,, {
        12441: 12370
      }
    ],
    12370: [
      [12369, 12441]
    ],
    12371: [
      ,, {
        12441: 12372
      }
    ],
    12372: [
      [12371, 12441]
    ],
    12373: [
      ,, {
        12441: 12374
      }
    ],
    12374: [
      [12373, 12441]
    ],
    12375: [
      ,, {
        12441: 12376
      }
    ],
    12376: [
      [12375, 12441]
    ],
    12377: [
      ,, {
        12441: 12378
      }
    ],
    12378: [
      [12377, 12441]
    ],
    12379: [
      ,, {
        12441: 12380
      }
    ],
    12380: [
      [12379, 12441]
    ],
    12381: [
      ,, {
        12441: 12382
      }
    ],
    12382: [
      [12381, 12441]
    ],
    12383: [
      ,, {
        12441: 12384
      }
    ],
    12384: [
      [12383, 12441]
    ],
    12385: [
      ,, {
        12441: 12386
      }
    ],
    12386: [
      [12385, 12441]
    ],
    12388: [
      ,, {
        12441: 12389
      }
    ],
    12389: [
      [12388, 12441]
    ],
    12390: [
      ,, {
        12441: 12391
      }
    ],
    12391: [
      [12390, 12441]
    ],
    12392: [
      ,, {
        12441: 12393
      }
    ],
    12393: [
      [12392, 12441]
    ],
    12399: [
      ,, {
        12441: 12400,
        12442: 12401
      }
    ],
    12400: [
      [12399, 12441]
    ],
    12401: [
      [12399, 12442]
    ],
    12402: [
      ,, {
        12441: 12403,
        12442: 12404
      }
    ],
    12403: [
      [12402, 12441]
    ],
    12404: [
      [12402, 12442]
    ],
    12405: [
      ,, {
        12441: 12406,
        12442: 12407
      }
    ],
    12406: [
      [12405, 12441]
    ],
    12407: [
      [12405, 12442]
    ],
    12408: [
      ,, {
        12441: 12409,
        12442: 12410
      }
    ],
    12409: [
      [12408, 12441]
    ],
    12410: [
      [12408, 12442]
    ],
    12411: [
      ,, {
        12441: 12412,
        12442: 12413
      }
    ],
    12412: [
      [12411, 12441]
    ],
    12413: [
      [12411, 12442]
    ],
    12436: [
      [12358, 12441]
    ],
    12441: [
      , 8
    ],
    12442: [
      , 8
    ],
    12443: [
      [
        32, 12441
      ],
      256
    ],
    12444: [
      [
        32, 12442
      ],
      256
    ],
    12445: [
      ,, {
        12441: 12446
      }
    ],
    12446: [
      [12445, 12441]
    ],
    12447: [
      [
        12424, 12426
      ],
      256
    ],
    12454: [
      ,, {
        12441: 12532
      }
    ],
    12459: [
      ,, {
        12441: 12460
      }
    ],
    12460: [
      [12459, 12441]
    ],
    12461: [
      ,, {
        12441: 12462
      }
    ],
    12462: [
      [12461, 12441]
    ],
    12463: [
      ,, {
        12441: 12464
      }
    ],
    12464: [
      [12463, 12441]
    ],
    12465: [
      ,, {
        12441: 12466
      }
    ],
    12466: [
      [12465, 12441]
    ],
    12467: [
      ,, {
        12441: 12468
      }
    ],
    12468: [
      [12467, 12441]
    ],
    12469: [
      ,, {
        12441: 12470
      }
    ],
    12470: [
      [12469, 12441]
    ],
    12471: [
      ,, {
        12441: 12472
      }
    ],
    12472: [
      [12471, 12441]
    ],
    12473: [
      ,, {
        12441: 12474
      }
    ],
    12474: [
      [12473, 12441]
    ],
    12475: [
      ,, {
        12441: 12476
      }
    ],
    12476: [
      [12475, 12441]
    ],
    12477: [
      ,, {
        12441: 12478
      }
    ],
    12478: [
      [12477, 12441]
    ],
    12479: [
      ,, {
        12441: 12480
      }
    ],
    12480: [
      [12479, 12441]
    ],
    12481: [
      ,, {
        12441: 12482
      }
    ],
    12482: [
      [12481, 12441]
    ],
    12484: [
      ,, {
        12441: 12485
      }
    ],
    12485: [
      [12484, 12441]
    ],
    12486: [
      ,, {
        12441: 12487
      }
    ],
    12487: [
      [12486, 12441]
    ],
    12488: [
      ,, {
        12441: 12489
      }
    ],
    12489: [
      [12488, 12441]
    ],
    12495: [
      ,, {
        12441: 12496,
        12442: 12497
      }
    ],
    12496: [
      [12495, 12441]
    ],
    12497: [
      [12495, 12442]
    ],
    12498: [
      ,, {
        12441: 12499,
        12442: 12500
      }
    ],
    12499: [
      [12498, 12441]
    ],
    12500: [
      [12498, 12442]
    ],
    12501: [
      ,, {
        12441: 12502,
        12442: 12503
      }
    ],
    12502: [
      [12501, 12441]
    ],
    12503: [
      [12501, 12442]
    ],
    12504: [
      ,, {
        12441: 12505,
        12442: 12506
      }
    ],
    12505: [
      [12504, 12441]
    ],
    12506: [
      [12504, 12442]
    ],
    12507: [
      ,, {
        12441: 12508,
        12442: 12509
      }
    ],
    12508: [
      [12507, 12441]
    ],
    12509: [
      [12507, 12442]
    ],
    12527: [
      ,, {
        12441: 12535
      }
    ],
    12528: [
      ,, {
        12441: 12536
      }
    ],
    12529: [
      ,, {
        12441: 12537
      }
    ],
    12530: [
      ,, {
        12441: 12538
      }
    ],
    12532: [
      [12454, 12441]
    ],
    12535: [
      [12527, 12441]
    ],
    12536: [
      [12528, 12441]
    ],
    12537: [
      [12529, 12441]
    ],
    12538: [
      [12530, 12441]
    ],
    12541: [
      ,, {
        12441: 12542
      }
    ],
    12542: [
      [12541, 12441]
    ],
    12543: [
      [
        12467, 12488
      ],
      256
    ]
  },
  12544: {
    12593: [
      [4352], 256
    ],
    12594: [
      [4353], 256
    ],
    12595: [
      [4522], 256
    ],
    12596: [
      [4354], 256
    ],
    12597: [
      [4524], 256
    ],
    12598: [
      [4525], 256
    ],
    12599: [
      [4355], 256
    ],
    12600: [
      [4356], 256
    ],
    12601: [
      [4357], 256
    ],
    12602: [
      [4528], 256
    ],
    12603: [
      [4529], 256
    ],
    12604: [
      [4530], 256
    ],
    12605: [
      [4531], 256
    ],
    12606: [
      [4532], 256
    ],
    12607: [
      [4533], 256
    ],
    12608: [
      [4378], 256
    ],
    12609: [
      [4358], 256
    ],
    12610: [
      [4359], 256
    ],
    12611: [
      [4360], 256
    ],
    12612: [
      [4385], 256
    ],
    12613: [
      [4361], 256
    ],
    12614: [
      [4362], 256
    ],
    12615: [
      [4363], 256
    ],
    12616: [
      [4364], 256
    ],
    12617: [
      [4365], 256
    ],
    12618: [
      [4366], 256
    ],
    12619: [
      [4367], 256
    ],
    12620: [
      [4368], 256
    ],
    12621: [
      [4369], 256
    ],
    12622: [
      [4370], 256
    ],
    12623: [
      [4449], 256
    ],
    12624: [
      [4450], 256
    ],
    12625: [
      [4451], 256
    ],
    12626: [
      [4452], 256
    ],
    12627: [
      [4453], 256
    ],
    12628: [
      [4454], 256
    ],
    12629: [
      [4455], 256
    ],
    12630: [
      [4456], 256
    ],
    12631: [
      [4457], 256
    ],
    12632: [
      [4458], 256
    ],
    12633: [
      [4459], 256
    ],
    12634: [
      [4460], 256
    ],
    12635: [
      [4461], 256
    ],
    12636: [
      [4462], 256
    ],
    12637: [
      [4463], 256
    ],
    12638: [
      [4464], 256
    ],
    12639: [
      [4465], 256
    ],
    12640: [
      [4466], 256
    ],
    12641: [
      [4467], 256
    ],
    12642: [
      [4468], 256
    ],
    12643: [
      [4469], 256
    ],
    12644: [
      [4448], 256
    ],
    12645: [
      [4372], 256
    ],
    12646: [
      [4373], 256
    ],
    12647: [
      [4551], 256
    ],
    12648: [
      [4552], 256
    ],
    12649: [
      [4556], 256
    ],
    12650: [
      [4558], 256
    ],
    12651: [
      [4563], 256
    ],
    12652: [
      [4567], 256
    ],
    12653: [
      [4569], 256
    ],
    12654: [
      [4380], 256
    ],
    12655: [
      [4573], 256
    ],
    12656: [
      [4575], 256
    ],
    12657: [
      [4381], 256
    ],
    12658: [
      [4382], 256
    ],
    12659: [
      [4384], 256
    ],
    12660: [
      [4386], 256
    ],
    12661: [
      [4387], 256
    ],
    12662: [
      [4391], 256
    ],
    12663: [
      [4393], 256
    ],
    12664: [
      [4395], 256
    ],
    12665: [
      [4396], 256
    ],
    12666: [
      [4397], 256
    ],
    12667: [
      [4398], 256
    ],
    12668: [
      [4399], 256
    ],
    12669: [
      [4402], 256
    ],
    12670: [
      [4406], 256
    ],
    12671: [
      [4416], 256
    ],
    12672: [
      [4423], 256
    ],
    12673: [
      [4428], 256
    ],
    12674: [
      [4593], 256
    ],
    12675: [
      [4594], 256
    ],
    12676: [
      [4439], 256
    ],
    12677: [
      [4440], 256
    ],
    12678: [
      [4441], 256
    ],
    12679: [
      [4484], 256
    ],
    12680: [
      [4485], 256
    ],
    12681: [
      [4488], 256
    ],
    12682: [
      [4497], 256
    ],
    12683: [
      [4498], 256
    ],
    12684: [
      [4500], 256
    ],
    12685: [
      [4510], 256
    ],
    12686: [
      [4513], 256
    ],
    12690: [
      [19968], 256
    ],
    12691: [
      [20108], 256
    ],
    12692: [
      [19977], 256
    ],
    12693: [
      [22235], 256
    ],
    12694: [
      [19978], 256
    ],
    12695: [
      [20013], 256
    ],
    12696: [
      [19979], 256
    ],
    12697: [
      [30002], 256
    ],
    12698: [
      [20057], 256
    ],
    12699: [
      [19993], 256
    ],
    12700: [
      [19969], 256
    ],
    12701: [
      [22825], 256
    ],
    12702: [
      [22320], 256
    ],
    12703: [[20154], 256]
  },
  12800: {
    12800: [
      [
        40, 4352, 41
      ],
      256
    ],
    12801: [
      [
        40, 4354, 41
      ],
      256
    ],
    12802: [
      [
        40, 4355, 41
      ],
      256
    ],
    12803: [
      [
        40, 4357, 41
      ],
      256
    ],
    12804: [
      [
        40, 4358, 41
      ],
      256
    ],
    12805: [
      [
        40, 4359, 41
      ],
      256
    ],
    12806: [
      [
        40, 4361, 41
      ],
      256
    ],
    12807: [
      [
        40, 4363, 41
      ],
      256
    ],
    12808: [
      [
        40, 4364, 41
      ],
      256
    ],
    12809: [
      [
        40, 4366, 41
      ],
      256
    ],
    12810: [
      [
        40, 4367, 41
      ],
      256
    ],
    12811: [
      [
        40, 4368, 41
      ],
      256
    ],
    12812: [
      [
        40, 4369, 41
      ],
      256
    ],
    12813: [
      [
        40, 4370, 41
      ],
      256
    ],
    12814: [
      [
        40, 4352, 4449, 41
      ],
      256
    ],
    12815: [
      [
        40, 4354, 4449, 41
      ],
      256
    ],
    12816: [
      [
        40, 4355, 4449, 41
      ],
      256
    ],
    12817: [
      [
        40, 4357, 4449, 41
      ],
      256
    ],
    12818: [
      [
        40, 4358, 4449, 41
      ],
      256
    ],
    12819: [
      [
        40, 4359, 4449, 41
      ],
      256
    ],
    12820: [
      [
        40, 4361, 4449, 41
      ],
      256
    ],
    12821: [
      [
        40, 4363, 4449, 41
      ],
      256
    ],
    12822: [
      [
        40, 4364, 4449, 41
      ],
      256
    ],
    12823: [
      [
        40, 4366, 4449, 41
      ],
      256
    ],
    12824: [
      [
        40, 4367, 4449, 41
      ],
      256
    ],
    12825: [
      [
        40, 4368, 4449, 41
      ],
      256
    ],
    12826: [
      [
        40, 4369, 4449, 41
      ],
      256
    ],
    12827: [
      [
        40, 4370, 4449, 41
      ],
      256
    ],
    12828: [
      [
        40, 4364, 4462, 41
      ],
      256
    ],
    12829: [
      [
        40,
        4363,
        4457,
        4364,
        4453,
        4523,
        41
      ],
      256
    ],
    12830: [
      [
        40,
        4363,
        4457,
        4370,
        4462,
        41
      ],
      256
    ],
    12832: [
      [
        40, 19968, 41
      ],
      256
    ],
    12833: [
      [
        40, 20108, 41
      ],
      256
    ],
    12834: [
      [
        40, 19977, 41
      ],
      256
    ],
    12835: [
      [
        40, 22235, 41
      ],
      256
    ],
    12836: [
      [
        40, 20116, 41
      ],
      256
    ],
    12837: [
      [
        40, 20845, 41
      ],
      256
    ],
    12838: [
      [
        40, 19971, 41
      ],
      256
    ],
    12839: [
      [
        40, 20843, 41
      ],
      256
    ],
    12840: [
      [
        40, 20061, 41
      ],
      256
    ],
    12841: [
      [
        40, 21313, 41
      ],
      256
    ],
    12842: [
      [
        40, 26376, 41
      ],
      256
    ],
    12843: [
      [
        40, 28779, 41
      ],
      256
    ],
    12844: [
      [
        40, 27700, 41
      ],
      256
    ],
    12845: [
      [
        40, 26408, 41
      ],
      256
    ],
    12846: [
      [
        40, 37329, 41
      ],
      256
    ],
    12847: [
      [
        40, 22303, 41
      ],
      256
    ],
    12848: [
      [
        40, 26085, 41
      ],
      256
    ],
    12849: [
      [
        40, 26666, 41
      ],
      256
    ],
    12850: [
      [
        40, 26377, 41
      ],
      256
    ],
    12851: [
      [
        40, 31038, 41
      ],
      256
    ],
    12852: [
      [
        40, 21517, 41
      ],
      256
    ],
    12853: [
      [
        40, 29305, 41
      ],
      256
    ],
    12854: [
      [
        40, 36001, 41
      ],
      256
    ],
    12855: [
      [
        40, 31069, 41
      ],
      256
    ],
    12856: [
      [
        40, 21172, 41
      ],
      256
    ],
    12857: [
      [
        40, 20195, 41
      ],
      256
    ],
    12858: [
      [
        40, 21628, 41
      ],
      256
    ],
    12859: [
      [
        40, 23398, 41
      ],
      256
    ],
    12860: [
      [
        40, 30435, 41
      ],
      256
    ],
    12861: [
      [
        40, 20225, 41
      ],
      256
    ],
    12862: [
      [
        40, 36039, 41
      ],
      256
    ],
    12863: [
      [
        40, 21332, 41
      ],
      256
    ],
    12864: [
      [
        40, 31085, 41
      ],
      256
    ],
    12865: [
      [
        40, 20241, 41
      ],
      256
    ],
    12866: [
      [
        40, 33258, 41
      ],
      256
    ],
    12867: [
      [
        40, 33267, 41
      ],
      256
    ],
    12868: [
      [21839], 256
    ],
    12869: [
      [24188], 256
    ],
    12870: [
      [25991], 256
    ],
    12871: [
      [31631], 256
    ],
    12880: [
      [
        80, 84, 69
      ],
      256
    ],
    12881: [
      [
        50, 49
      ],
      256
    ],
    12882: [
      [
        50, 50
      ],
      256
    ],
    12883: [
      [
        50, 51
      ],
      256
    ],
    12884: [
      [
        50, 52
      ],
      256
    ],
    12885: [
      [
        50, 53
      ],
      256
    ],
    12886: [
      [
        50, 54
      ],
      256
    ],
    12887: [
      [
        50, 55
      ],
      256
    ],
    12888: [
      [
        50, 56
      ],
      256
    ],
    12889: [
      [
        50, 57
      ],
      256
    ],
    12890: [
      [
        51, 48
      ],
      256
    ],
    12891: [
      [
        51, 49
      ],
      256
    ],
    12892: [
      [
        51, 50
      ],
      256
    ],
    12893: [
      [
        51, 51
      ],
      256
    ],
    12894: [
      [
        51, 52
      ],
      256
    ],
    12895: [
      [
        51, 53
      ],
      256
    ],
    12896: [
      [4352], 256
    ],
    12897: [
      [4354], 256
    ],
    12898: [
      [4355], 256
    ],
    12899: [
      [4357], 256
    ],
    12900: [
      [4358], 256
    ],
    12901: [
      [4359], 256
    ],
    12902: [
      [4361], 256
    ],
    12903: [
      [4363], 256
    ],
    12904: [
      [4364], 256
    ],
    12905: [
      [4366], 256
    ],
    12906: [
      [4367], 256
    ],
    12907: [
      [4368], 256
    ],
    12908: [
      [4369], 256
    ],
    12909: [
      [4370], 256
    ],
    12910: [
      [
        4352, 4449
      ],
      256
    ],
    12911: [
      [
        4354, 4449
      ],
      256
    ],
    12912: [
      [
        4355, 4449
      ],
      256
    ],
    12913: [
      [
        4357, 4449
      ],
      256
    ],
    12914: [
      [
        4358, 4449
      ],
      256
    ],
    12915: [
      [
        4359, 4449
      ],
      256
    ],
    12916: [
      [
        4361, 4449
      ],
      256
    ],
    12917: [
      [
        4363, 4449
      ],
      256
    ],
    12918: [
      [
        4364, 4449
      ],
      256
    ],
    12919: [
      [
        4366, 4449
      ],
      256
    ],
    12920: [
      [
        4367, 4449
      ],
      256
    ],
    12921: [
      [
        4368, 4449
      ],
      256
    ],
    12922: [
      [
        4369, 4449
      ],
      256
    ],
    12923: [
      [
        4370, 4449
      ],
      256
    ],
    12924: [
      [
        4366,
        4449,
        4535,
        4352,
        4457
      ],
      256
    ],
    12925: [
      [
        4364, 4462, 4363, 4468
      ],
      256
    ],
    12926: [
      [
        4363, 4462
      ],
      256
    ],
    12928: [
      [19968], 256
    ],
    12929: [
      [20108], 256
    ],
    12930: [
      [19977], 256
    ],
    12931: [
      [22235], 256
    ],
    12932: [
      [20116], 256
    ],
    12933: [
      [20845], 256
    ],
    12934: [
      [19971], 256
    ],
    12935: [
      [20843], 256
    ],
    12936: [
      [20061], 256
    ],
    12937: [
      [21313], 256
    ],
    12938: [
      [26376], 256
    ],
    12939: [
      [28779], 256
    ],
    12940: [
      [27700], 256
    ],
    12941: [
      [26408], 256
    ],
    12942: [
      [37329], 256
    ],
    12943: [
      [22303], 256
    ],
    12944: [
      [26085], 256
    ],
    12945: [
      [26666], 256
    ],
    12946: [
      [26377], 256
    ],
    12947: [
      [31038], 256
    ],
    12948: [
      [21517], 256
    ],
    12949: [
      [29305], 256
    ],
    12950: [
      [36001], 256
    ],
    12951: [
      [31069], 256
    ],
    12952: [
      [21172], 256
    ],
    12953: [
      [31192], 256
    ],
    12954: [
      [30007], 256
    ],
    12955: [
      [22899], 256
    ],
    12956: [
      [36969], 256
    ],
    12957: [
      [20778], 256
    ],
    12958: [
      [21360], 256
    ],
    12959: [
      [27880], 256
    ],
    12960: [
      [38917], 256
    ],
    12961: [
      [20241], 256
    ],
    12962: [
      [20889], 256
    ],
    12963: [
      [27491], 256
    ],
    12964: [
      [19978], 256
    ],
    12965: [
      [20013], 256
    ],
    12966: [
      [19979], 256
    ],
    12967: [
      [24038], 256
    ],
    12968: [
      [21491], 256
    ],
    12969: [
      [21307], 256
    ],
    12970: [
      [23447], 256
    ],
    12971: [
      [23398], 256
    ],
    12972: [
      [30435], 256
    ],
    12973: [
      [20225], 256
    ],
    12974: [
      [36039], 256
    ],
    12975: [
      [21332], 256
    ],
    12976: [
      [22812], 256
    ],
    12977: [
      [
        51, 54
      ],
      256
    ],
    12978: [
      [
        51, 55
      ],
      256
    ],
    12979: [
      [
        51, 56
      ],
      256
    ],
    12980: [
      [
        51, 57
      ],
      256
    ],
    12981: [
      [
        52, 48
      ],
      256
    ],
    12982: [
      [
        52, 49
      ],
      256
    ],
    12983: [
      [
        52, 50
      ],
      256
    ],
    12984: [
      [
        52, 51
      ],
      256
    ],
    12985: [
      [
        52, 52
      ],
      256
    ],
    12986: [
      [
        52, 53
      ],
      256
    ],
    12987: [
      [
        52, 54
      ],
      256
    ],
    12988: [
      [
        52, 55
      ],
      256
    ],
    12989: [
      [
        52, 56
      ],
      256
    ],
    12990: [
      [
        52, 57
      ],
      256
    ],
    12991: [
      [
        53, 48
      ],
      256
    ],
    12992: [
      [
        49, 26376
      ],
      256
    ],
    12993: [
      [
        50, 26376
      ],
      256
    ],
    12994: [
      [
        51, 26376
      ],
      256
    ],
    12995: [
      [
        52, 26376
      ],
      256
    ],
    12996: [
      [
        53, 26376
      ],
      256
    ],
    12997: [
      [
        54, 26376
      ],
      256
    ],
    12998: [
      [
        55, 26376
      ],
      256
    ],
    12999: [
      [
        56, 26376
      ],
      256
    ],
    13e3: [
      [
        57, 26376
      ],
      256
    ],
    13001: [
      [
        49, 48, 26376
      ],
      256
    ],
    13002: [
      [
        49, 49, 26376
      ],
      256
    ],
    13003: [
      [
        49, 50, 26376
      ],
      256
    ],
    13004: [
      [
        72, 103
      ],
      256
    ],
    13005: [
      [
        101, 114, 103
      ],
      256
    ],
    13006: [
      [
        101, 86
      ],
      256
    ],
    13007: [
      [
        76, 84, 68
      ],
      256
    ],
    13008: [
      [12450], 256
    ],
    13009: [
      [12452], 256
    ],
    13010: [
      [12454], 256
    ],
    13011: [
      [12456], 256
    ],
    13012: [
      [12458], 256
    ],
    13013: [
      [12459], 256
    ],
    13014: [
      [12461], 256
    ],
    13015: [
      [12463], 256
    ],
    13016: [
      [12465], 256
    ],
    13017: [
      [12467], 256
    ],
    13018: [
      [12469], 256
    ],
    13019: [
      [12471], 256
    ],
    13020: [
      [12473], 256
    ],
    13021: [
      [12475], 256
    ],
    13022: [
      [12477], 256
    ],
    13023: [
      [12479], 256
    ],
    13024: [
      [12481], 256
    ],
    13025: [
      [12484], 256
    ],
    13026: [
      [12486], 256
    ],
    13027: [
      [12488], 256
    ],
    13028: [
      [12490], 256
    ],
    13029: [
      [12491], 256
    ],
    13030: [
      [12492], 256
    ],
    13031: [
      [12493], 256
    ],
    13032: [
      [12494], 256
    ],
    13033: [
      [12495], 256
    ],
    13034: [
      [12498], 256
    ],
    13035: [
      [12501], 256
    ],
    13036: [
      [12504], 256
    ],
    13037: [
      [12507], 256
    ],
    13038: [
      [12510], 256
    ],
    13039: [
      [12511], 256
    ],
    13040: [
      [12512], 256
    ],
    13041: [
      [12513], 256
    ],
    13042: [
      [12514], 256
    ],
    13043: [
      [12516], 256
    ],
    13044: [
      [12518], 256
    ],
    13045: [
      [12520], 256
    ],
    13046: [
      [12521], 256
    ],
    13047: [
      [12522], 256
    ],
    13048: [
      [12523], 256
    ],
    13049: [
      [12524], 256
    ],
    13050: [
      [12525], 256
    ],
    13051: [
      [12527], 256
    ],
    13052: [
      [12528], 256
    ],
    13053: [
      [12529], 256
    ],
    13054: [[12530], 256]
  },
  13056: {
    13056: [
      [
        12450, 12497, 12540, 12488
      ],
      256
    ],
    13057: [
      [
        12450, 12523, 12501, 12449
      ],
      256
    ],
    13058: [
      [
        12450, 12531, 12506, 12450
      ],
      256
    ],
    13059: [
      [
        12450, 12540, 12523
      ],
      256
    ],
    13060: [
      [
        12452, 12491, 12531, 12464
      ],
      256
    ],
    13061: [
      [
        12452, 12531, 12481
      ],
      256
    ],
    13062: [
      [
        12454, 12457, 12531
      ],
      256
    ],
    13063: [
      [
        12456,
        12473,
        12463,
        12540,
        12489
      ],
      256
    ],
    13064: [
      [
        12456, 12540, 12459, 12540
      ],
      256
    ],
    13065: [
      [
        12458, 12531, 12473
      ],
      256
    ],
    13066: [
      [
        12458, 12540, 12512
      ],
      256
    ],
    13067: [
      [
        12459, 12452, 12522
      ],
      256
    ],
    13068: [
      [
        12459, 12521, 12483, 12488
      ],
      256
    ],
    13069: [
      [
        12459, 12525, 12522, 12540
      ],
      256
    ],
    13070: [
      [
        12460, 12525, 12531
      ],
      256
    ],
    13071: [
      [
        12460, 12531, 12510
      ],
      256
    ],
    13072: [
      [
        12462, 12460
      ],
      256
    ],
    13073: [
      [
        12462, 12491, 12540
      ],
      256
    ],
    13074: [
      [
        12461, 12517, 12522, 12540
      ],
      256
    ],
    13075: [
      [
        12462, 12523, 12480, 12540
      ],
      256
    ],
    13076: [
      [
        12461, 12525
      ],
      256
    ],
    13077: [
      [
        12461,
        12525,
        12464,
        12521,
        12512
      ],
      256
    ],
    13078: [
      [
        12461,
        12525,
        12513,
        12540,
        12488,
        12523
      ],
      256
    ],
    13079: [
      [
        12461,
        12525,
        12527,
        12483,
        12488
      ],
      256
    ],
    13080: [
      [
        12464, 12521, 12512
      ],
      256
    ],
    13081: [
      [
        12464,
        12521,
        12512,
        12488,
        12531
      ],
      256
    ],
    13082: [
      [
        12463,
        12523,
        12476,
        12452,
        12525
      ],
      256
    ],
    13083: [
      [
        12463, 12525, 12540, 12493
      ],
      256
    ],
    13084: [
      [
        12465, 12540, 12473
      ],
      256
    ],
    13085: [
      [
        12467, 12523, 12490
      ],
      256
    ],
    13086: [
      [
        12467, 12540, 12509
      ],
      256
    ],
    13087: [
      [
        12469, 12452, 12463, 12523
      ],
      256
    ],
    13088: [
      [
        12469,
        12531,
        12481,
        12540,
        12512
      ],
      256
    ],
    13089: [
      [
        12471, 12522, 12531, 12464
      ],
      256
    ],
    13090: [
      [
        12475, 12531, 12481
      ],
      256
    ],
    13091: [
      [
        12475, 12531, 12488
      ],
      256
    ],
    13092: [
      [
        12480, 12540, 12473
      ],
      256
    ],
    13093: [
      [
        12487, 12471
      ],
      256
    ],
    13094: [
      [
        12489, 12523
      ],
      256
    ],
    13095: [
      [
        12488, 12531
      ],
      256
    ],
    13096: [
      [
        12490, 12494
      ],
      256
    ],
    13097: [
      [
        12494, 12483, 12488
      ],
      256
    ],
    13098: [
      [
        12495, 12452, 12484
      ],
      256
    ],
    13099: [
      [
        12497,
        12540,
        12475,
        12531,
        12488
      ],
      256
    ],
    13100: [
      [
        12497, 12540, 12484
      ],
      256
    ],
    13101: [
      [
        12496, 12540, 12524, 12523
      ],
      256
    ],
    13102: [
      [
        12500,
        12450,
        12473,
        12488,
        12523
      ],
      256
    ],
    13103: [
      [
        12500, 12463, 12523
      ],
      256
    ],
    13104: [
      [
        12500, 12467
      ],
      256
    ],
    13105: [
      [
        12499, 12523
      ],
      256
    ],
    13106: [
      [
        12501,
        12449,
        12521,
        12483,
        12489
      ],
      256
    ],
    13107: [
      [
        12501, 12451, 12540, 12488
      ],
      256
    ],
    13108: [
      [
        12502,
        12483,
        12471,
        12455,
        12523
      ],
      256
    ],
    13109: [
      [
        12501, 12521, 12531
      ],
      256
    ],
    13110: [
      [
        12504,
        12463,
        12479,
        12540,
        12523
      ],
      256
    ],
    13111: [
      [
        12506, 12477
      ],
      256
    ],
    13112: [
      [
        12506, 12491, 12498
      ],
      256
    ],
    13113: [
      [
        12504, 12523, 12484
      ],
      256
    ],
    13114: [
      [
        12506, 12531, 12473
      ],
      256
    ],
    13115: [
      [
        12506, 12540, 12472
      ],
      256
    ],
    13116: [
      [
        12505, 12540, 12479
      ],
      256
    ],
    13117: [
      [
        12509, 12452, 12531, 12488
      ],
      256
    ],
    13118: [
      [
        12508, 12523, 12488
      ],
      256
    ],
    13119: [
      [
        12507, 12531
      ],
      256
    ],
    13120: [
      [
        12509, 12531, 12489
      ],
      256
    ],
    13121: [
      [
        12507, 12540, 12523
      ],
      256
    ],
    13122: [
      [
        12507, 12540, 12531
      ],
      256
    ],
    13123: [
      [
        12510, 12452, 12463, 12525
      ],
      256
    ],
    13124: [
      [
        12510, 12452, 12523
      ],
      256
    ],
    13125: [
      [
        12510, 12483, 12495
      ],
      256
    ],
    13126: [
      [
        12510, 12523, 12463
      ],
      256
    ],
    13127: [
      [
        12510,
        12531,
        12471,
        12519,
        12531
      ],
      256
    ],
    13128: [
      [
        12511, 12463, 12525, 12531
      ],
      256
    ],
    13129: [
      [
        12511, 12522
      ],
      256
    ],
    13130: [
      [
        12511,
        12522,
        12496,
        12540,
        12523
      ],
      256
    ],
    13131: [
      [
        12513, 12460
      ],
      256
    ],
    13132: [
      [
        12513, 12460, 12488, 12531
      ],
      256
    ],
    13133: [
      [
        12513, 12540, 12488, 12523
      ],
      256
    ],
    13134: [
      [
        12516, 12540, 12489
      ],
      256
    ],
    13135: [
      [
        12516, 12540, 12523
      ],
      256
    ],
    13136: [
      [
        12518, 12450, 12531
      ],
      256
    ],
    13137: [
      [
        12522, 12483, 12488, 12523
      ],
      256
    ],
    13138: [
      [
        12522, 12521
      ],
      256
    ],
    13139: [
      [
        12523, 12500, 12540
      ],
      256
    ],
    13140: [
      [
        12523, 12540, 12502, 12523
      ],
      256
    ],
    13141: [
      [
        12524, 12512
      ],
      256
    ],
    13142: [
      [
        12524,
        12531,
        12488,
        12466,
        12531
      ],
      256
    ],
    13143: [
      [
        12527, 12483, 12488
      ],
      256
    ],
    13144: [
      [
        48, 28857
      ],
      256
    ],
    13145: [
      [
        49, 28857
      ],
      256
    ],
    13146: [
      [
        50, 28857
      ],
      256
    ],
    13147: [
      [
        51, 28857
      ],
      256
    ],
    13148: [
      [
        52, 28857
      ],
      256
    ],
    13149: [
      [
        53, 28857
      ],
      256
    ],
    13150: [
      [
        54, 28857
      ],
      256
    ],
    13151: [
      [
        55, 28857
      ],
      256
    ],
    13152: [
      [
        56, 28857
      ],
      256
    ],
    13153: [
      [
        57, 28857
      ],
      256
    ],
    13154: [
      [
        49, 48, 28857
      ],
      256
    ],
    13155: [
      [
        49, 49, 28857
      ],
      256
    ],
    13156: [
      [
        49, 50, 28857
      ],
      256
    ],
    13157: [
      [
        49, 51, 28857
      ],
      256
    ],
    13158: [
      [
        49, 52, 28857
      ],
      256
    ],
    13159: [
      [
        49, 53, 28857
      ],
      256
    ],
    13160: [
      [
        49, 54, 28857
      ],
      256
    ],
    13161: [
      [
        49, 55, 28857
      ],
      256
    ],
    13162: [
      [
        49, 56, 28857
      ],
      256
    ],
    13163: [
      [
        49, 57, 28857
      ],
      256
    ],
    13164: [
      [
        50, 48, 28857
      ],
      256
    ],
    13165: [
      [
        50, 49, 28857
      ],
      256
    ],
    13166: [
      [
        50, 50, 28857
      ],
      256
    ],
    13167: [
      [
        50, 51, 28857
      ],
      256
    ],
    13168: [
      [
        50, 52, 28857
      ],
      256
    ],
    13169: [
      [
        104, 80, 97
      ],
      256
    ],
    13170: [
      [
        100, 97
      ],
      256
    ],
    13171: [
      [
        65, 85
      ],
      256
    ],
    13172: [
      [
        98, 97, 114
      ],
      256
    ],
    13173: [
      [
        111, 86
      ],
      256
    ],
    13174: [
      [
        112, 99
      ],
      256
    ],
    13175: [
      [
        100, 109
      ],
      256
    ],
    13176: [
      [
        100, 109, 178
      ],
      256
    ],
    13177: [
      [
        100, 109, 179
      ],
      256
    ],
    13178: [
      [
        73, 85
      ],
      256
    ],
    13179: [
      [
        24179, 25104
      ],
      256
    ],
    13180: [
      [
        26157, 21644
      ],
      256
    ],
    13181: [
      [
        22823, 27491
      ],
      256
    ],
    13182: [
      [
        26126, 27835
      ],
      256
    ],
    13183: [
      [
        26666, 24335, 20250, 31038
      ],
      256
    ],
    13184: [
      [
        112, 65
      ],
      256
    ],
    13185: [
      [
        110, 65
      ],
      256
    ],
    13186: [
      [
        956, 65
      ],
      256
    ],
    13187: [
      [
        109, 65
      ],
      256
    ],
    13188: [
      [
        107, 65
      ],
      256
    ],
    13189: [
      [
        75, 66
      ],
      256
    ],
    13190: [
      [
        77, 66
      ],
      256
    ],
    13191: [
      [
        71, 66
      ],
      256
    ],
    13192: [
      [
        99, 97, 108
      ],
      256
    ],
    13193: [
      [
        107, 99, 97, 108
      ],
      256
    ],
    13194: [
      [
        112, 70
      ],
      256
    ],
    13195: [
      [
        110, 70
      ],
      256
    ],
    13196: [
      [
        956, 70
      ],
      256
    ],
    13197: [
      [
        956, 103
      ],
      256
    ],
    13198: [
      [
        109, 103
      ],
      256
    ],
    13199: [
      [
        107, 103
      ],
      256
    ],
    13200: [
      [
        72, 122
      ],
      256
    ],
    13201: [
      [
        107, 72, 122
      ],
      256
    ],
    13202: [
      [
        77, 72, 122
      ],
      256
    ],
    13203: [
      [
        71, 72, 122
      ],
      256
    ],
    13204: [
      [
        84, 72, 122
      ],
      256
    ],
    13205: [
      [
        956, 8467
      ],
      256
    ],
    13206: [
      [
        109, 8467
      ],
      256
    ],
    13207: [
      [
        100, 8467
      ],
      256
    ],
    13208: [
      [
        107, 8467
      ],
      256
    ],
    13209: [
      [
        102, 109
      ],
      256
    ],
    13210: [
      [
        110, 109
      ],
      256
    ],
    13211: [
      [
        956, 109
      ],
      256
    ],
    13212: [
      [
        109, 109
      ],
      256
    ],
    13213: [
      [
        99, 109
      ],
      256
    ],
    13214: [
      [
        107, 109
      ],
      256
    ],
    13215: [
      [
        109, 109, 178
      ],
      256
    ],
    13216: [
      [
        99, 109, 178
      ],
      256
    ],
    13217: [
      [
        109, 178
      ],
      256
    ],
    13218: [
      [
        107, 109, 178
      ],
      256
    ],
    13219: [
      [
        109, 109, 179
      ],
      256
    ],
    13220: [
      [
        99, 109, 179
      ],
      256
    ],
    13221: [
      [
        109, 179
      ],
      256
    ],
    13222: [
      [
        107, 109, 179
      ],
      256
    ],
    13223: [
      [
        109, 8725, 115
      ],
      256
    ],
    13224: [
      [
        109, 8725, 115, 178
      ],
      256
    ],
    13225: [
      [
        80, 97
      ],
      256
    ],
    13226: [
      [
        107, 80, 97
      ],
      256
    ],
    13227: [
      [
        77, 80, 97
      ],
      256
    ],
    13228: [
      [
        71, 80, 97
      ],
      256
    ],
    13229: [
      [
        114, 97, 100
      ],
      256
    ],
    13230: [
      [
        114,
        97,
        100,
        8725,
        115
      ],
      256
    ],
    13231: [
      [
        114,
        97,
        100,
        8725,
        115,
        178
      ],
      256
    ],
    13232: [
      [
        112, 115
      ],
      256
    ],
    13233: [
      [
        110, 115
      ],
      256
    ],
    13234: [
      [
        956, 115
      ],
      256
    ],
    13235: [
      [
        109, 115
      ],
      256
    ],
    13236: [
      [
        112, 86
      ],
      256
    ],
    13237: [
      [
        110, 86
      ],
      256
    ],
    13238: [
      [
        956, 86
      ],
      256
    ],
    13239: [
      [
        109, 86
      ],
      256
    ],
    13240: [
      [
        107, 86
      ],
      256
    ],
    13241: [
      [
        77, 86
      ],
      256
    ],
    13242: [
      [
        112, 87
      ],
      256
    ],
    13243: [
      [
        110, 87
      ],
      256
    ],
    13244: [
      [
        956, 87
      ],
      256
    ],
    13245: [
      [
        109, 87
      ],
      256
    ],
    13246: [
      [
        107, 87
      ],
      256
    ],
    13247: [
      [
        77, 87
      ],
      256
    ],
    13248: [
      [
        107, 937
      ],
      256
    ],
    13249: [
      [
        77, 937
      ],
      256
    ],
    13250: [
      [
        97, 46, 109, 46
      ],
      256
    ],
    13251: [
      [
        66, 113
      ],
      256
    ],
    13252: [
      [
        99, 99
      ],
      256
    ],
    13253: [
      [
        99, 100
      ],
      256
    ],
    13254: [
      [
        67, 8725, 107, 103
      ],
      256
    ],
    13255: [
      [
        67, 111, 46
      ],
      256
    ],
    13256: [
      [
        100, 66
      ],
      256
    ],
    13257: [
      [
        71, 121
      ],
      256
    ],
    13258: [
      [
        104, 97
      ],
      256
    ],
    13259: [
      [
        72, 80
      ],
      256
    ],
    13260: [
      [
        105, 110
      ],
      256
    ],
    13261: [
      [
        75, 75
      ],
      256
    ],
    13262: [
      [
        75, 77
      ],
      256
    ],
    13263: [
      [
        107, 116
      ],
      256
    ],
    13264: [
      [
        108, 109
      ],
      256
    ],
    13265: [
      [
        108, 110
      ],
      256
    ],
    13266: [
      [
        108, 111, 103
      ],
      256
    ],
    13267: [
      [
        108, 120
      ],
      256
    ],
    13268: [
      [
        109, 98
      ],
      256
    ],
    13269: [
      [
        109, 105, 108
      ],
      256
    ],
    13270: [
      [
        109, 111, 108
      ],
      256
    ],
    13271: [
      [
        80, 72
      ],
      256
    ],
    13272: [
      [
        112, 46, 109, 46
      ],
      256
    ],
    13273: [
      [
        80, 80, 77
      ],
      256
    ],
    13274: [
      [
        80, 82
      ],
      256
    ],
    13275: [
      [
        115, 114
      ],
      256
    ],
    13276: [
      [
        83, 118
      ],
      256
    ],
    13277: [
      [
        87, 98
      ],
      256
    ],
    13278: [
      [
        86, 8725, 109
      ],
      256
    ],
    13279: [
      [
        65, 8725, 109
      ],
      256
    ],
    13280: [
      [
        49, 26085
      ],
      256
    ],
    13281: [
      [
        50, 26085
      ],
      256
    ],
    13282: [
      [
        51, 26085
      ],
      256
    ],
    13283: [
      [
        52, 26085
      ],
      256
    ],
    13284: [
      [
        53, 26085
      ],
      256
    ],
    13285: [
      [
        54, 26085
      ],
      256
    ],
    13286: [
      [
        55, 26085
      ],
      256
    ],
    13287: [
      [
        56, 26085
      ],
      256
    ],
    13288: [
      [
        57, 26085
      ],
      256
    ],
    13289: [
      [
        49, 48, 26085
      ],
      256
    ],
    13290: [
      [
        49, 49, 26085
      ],
      256
    ],
    13291: [
      [
        49, 50, 26085
      ],
      256
    ],
    13292: [
      [
        49, 51, 26085
      ],
      256
    ],
    13293: [
      [
        49, 52, 26085
      ],
      256
    ],
    13294: [
      [
        49, 53, 26085
      ],
      256
    ],
    13295: [
      [
        49, 54, 26085
      ],
      256
    ],
    13296: [
      [
        49, 55, 26085
      ],
      256
    ],
    13297: [
      [
        49, 56, 26085
      ],
      256
    ],
    13298: [
      [
        49, 57, 26085
      ],
      256
    ],
    13299: [
      [
        50, 48, 26085
      ],
      256
    ],
    13300: [
      [
        50, 49, 26085
      ],
      256
    ],
    13301: [
      [
        50, 50, 26085
      ],
      256
    ],
    13302: [
      [
        50, 51, 26085
      ],
      256
    ],
    13303: [
      [
        50, 52, 26085
      ],
      256
    ],
    13304: [
      [
        50, 53, 26085
      ],
      256
    ],
    13305: [
      [
        50, 54, 26085
      ],
      256
    ],
    13306: [
      [
        50, 55, 26085
      ],
      256
    ],
    13307: [
      [
        50, 56, 26085
      ],
      256
    ],
    13308: [
      [
        50, 57, 26085
      ],
      256
    ],
    13309: [
      [
        51, 48, 26085
      ],
      256
    ],
    13310: [
      [
        51, 49, 26085
      ],
      256
    ],
    13311: [
      [
        103, 97, 108
      ],
      256
    ]
  },
  27136: {
    92912: [
      , 1
    ],
    92913: [
      , 1
    ],
    92914: [
      , 1
    ],
    92915: [
      , 1
    ],
    92916: [, 1]
  },
  27392: {
    92976: [
      , 230
    ],
    92977: [
      , 230
    ],
    92978: [
      , 230
    ],
    92979: [
      , 230
    ],
    92980: [
      , 230
    ],
    92981: [
      , 230
    ],
    92982: [, 230]
  },
  42496: {
    42607: [
      , 230
    ],
    42612: [
      , 230
    ],
    42613: [
      , 230
    ],
    42614: [
      , 230
    ],
    42615: [
      , 230
    ],
    42616: [
      , 230
    ],
    42617: [
      , 230
    ],
    42618: [
      , 230
    ],
    42619: [
      , 230
    ],
    42620: [
      , 230
    ],
    42621: [
      , 230
    ],
    42652: [
      [1098], 256
    ],
    42653: [
      [1100], 256
    ],
    42655: [
      , 230
    ],
    42736: [
      , 230
    ],
    42737: [, 230]
  },
  42752: {
    42864: [
      [42863], 256
    ],
    43e3: [
      [294], 256
    ],
    43001: [[339], 256]
  },
  43008: {
    43014: [
      , 9
    ],
    43204: [
      , 9
    ],
    43232: [
      , 230
    ],
    43233: [
      , 230
    ],
    43234: [
      , 230
    ],
    43235: [
      , 230
    ],
    43236: [
      , 230
    ],
    43237: [
      , 230
    ],
    43238: [
      , 230
    ],
    43239: [
      , 230
    ],
    43240: [
      , 230
    ],
    43241: [
      , 230
    ],
    43242: [
      , 230
    ],
    43243: [
      , 230
    ],
    43244: [
      , 230
    ],
    43245: [
      , 230
    ],
    43246: [
      , 230
    ],
    43247: [
      , 230
    ],
    43248: [
      , 230
    ],
    43249: [, 230]
  },
  43264: {
    43307: [
      , 220
    ],
    43308: [
      , 220
    ],
    43309: [
      , 220
    ],
    43347: [
      , 9
    ],
    43443: [
      , 7
    ],
    43456: [, 9]
  },
  43520: {
    43696: [
      , 230
    ],
    43698: [
      , 230
    ],
    43699: [
      , 230
    ],
    43700: [
      , 220
    ],
    43703: [
      , 230
    ],
    43704: [
      , 230
    ],
    43710: [
      , 230
    ],
    43711: [
      , 230
    ],
    43713: [
      , 230
    ],
    43766: [, 9]
  },
  43776: {
    43868: [
      [42791], 256
    ],
    43869: [
      [43831], 256
    ],
    43870: [
      [619], 256
    ],
    43871: [
      [43858], 256
    ],
    44013: [, 9]
  },
  48128: {
    113822: [, 1]
  },
  53504: {
    119134: [
      [
        119127, 119141
      ],
      512
    ],
    119135: [
      [
        119128, 119141
      ],
      512
    ],
    119136: [
      [
        119135, 119150
      ],
      512
    ],
    119137: [
      [
        119135, 119151
      ],
      512
    ],
    119138: [
      [
        119135, 119152
      ],
      512
    ],
    119139: [
      [
        119135, 119153
      ],
      512
    ],
    119140: [
      [
        119135, 119154
      ],
      512
    ],
    119141: [
      , 216
    ],
    119142: [
      , 216
    ],
    119143: [
      , 1
    ],
    119144: [
      , 1
    ],
    119145: [
      , 1
    ],
    119149: [
      , 226
    ],
    119150: [
      , 216
    ],
    119151: [
      , 216
    ],
    119152: [
      , 216
    ],
    119153: [
      , 216
    ],
    119154: [
      , 216
    ],
    119163: [
      , 220
    ],
    119164: [
      , 220
    ],
    119165: [
      , 220
    ],
    119166: [
      , 220
    ],
    119167: [
      , 220
    ],
    119168: [
      , 220
    ],
    119169: [
      , 220
    ],
    119170: [
      , 220
    ],
    119173: [
      , 230
    ],
    119174: [
      , 230
    ],
    119175: [
      , 230
    ],
    119176: [
      , 230
    ],
    119177: [
      , 230
    ],
    119178: [
      , 220
    ],
    119179: [
      , 220
    ],
    119210: [
      , 230
    ],
    119211: [
      , 230
    ],
    119212: [
      , 230
    ],
    119213: [
      , 230
    ],
    119227: [
      [
        119225, 119141
      ],
      512
    ],
    119228: [
      [
        119226, 119141
      ],
      512
    ],
    119229: [
      [
        119227, 119150
      ],
      512
    ],
    119230: [
      [
        119228, 119150
      ],
      512
    ],
    119231: [
      [
        119227, 119151
      ],
      512
    ],
    119232: [
      [
        119228, 119151
      ],
      512
    ]
  },
  53760: {
    119362: [
      , 230
    ],
    119363: [
      , 230
    ],
    119364: [, 230]
  },
  54272: {
    119808: [
      [65], 256
    ],
    119809: [
      [66], 256
    ],
    119810: [
      [67], 256
    ],
    119811: [
      [68], 256
    ],
    119812: [
      [69], 256
    ],
    119813: [
      [70], 256
    ],
    119814: [
      [71], 256
    ],
    119815: [
      [72], 256
    ],
    119816: [
      [73], 256
    ],
    119817: [
      [74], 256
    ],
    119818: [
      [75], 256
    ],
    119819: [
      [76], 256
    ],
    119820: [
      [77], 256
    ],
    119821: [
      [78], 256
    ],
    119822: [
      [79], 256
    ],
    119823: [
      [80], 256
    ],
    119824: [
      [81], 256
    ],
    119825: [
      [82], 256
    ],
    119826: [
      [83], 256
    ],
    119827: [
      [84], 256
    ],
    119828: [
      [85], 256
    ],
    119829: [
      [86], 256
    ],
    119830: [
      [87], 256
    ],
    119831: [
      [88], 256
    ],
    119832: [
      [89], 256
    ],
    119833: [
      [90], 256
    ],
    119834: [
      [97], 256
    ],
    119835: [
      [98], 256
    ],
    119836: [
      [99], 256
    ],
    119837: [
      [100], 256
    ],
    119838: [
      [101], 256
    ],
    119839: [
      [102], 256
    ],
    119840: [
      [103], 256
    ],
    119841: [
      [104], 256
    ],
    119842: [
      [105], 256
    ],
    119843: [
      [106], 256
    ],
    119844: [
      [107], 256
    ],
    119845: [
      [108], 256
    ],
    119846: [
      [109], 256
    ],
    119847: [
      [110], 256
    ],
    119848: [
      [111], 256
    ],
    119849: [
      [112], 256
    ],
    119850: [
      [113], 256
    ],
    119851: [
      [114], 256
    ],
    119852: [
      [115], 256
    ],
    119853: [
      [116], 256
    ],
    119854: [
      [117], 256
    ],
    119855: [
      [118], 256
    ],
    119856: [
      [119], 256
    ],
    119857: [
      [120], 256
    ],
    119858: [
      [121], 256
    ],
    119859: [
      [122], 256
    ],
    119860: [
      [65], 256
    ],
    119861: [
      [66], 256
    ],
    119862: [
      [67], 256
    ],
    119863: [
      [68], 256
    ],
    119864: [
      [69], 256
    ],
    119865: [
      [70], 256
    ],
    119866: [
      [71], 256
    ],
    119867: [
      [72], 256
    ],
    119868: [
      [73], 256
    ],
    119869: [
      [74], 256
    ],
    119870: [
      [75], 256
    ],
    119871: [
      [76], 256
    ],
    119872: [
      [77], 256
    ],
    119873: [
      [78], 256
    ],
    119874: [
      [79], 256
    ],
    119875: [
      [80], 256
    ],
    119876: [
      [81], 256
    ],
    119877: [
      [82], 256
    ],
    119878: [
      [83], 256
    ],
    119879: [
      [84], 256
    ],
    119880: [
      [85], 256
    ],
    119881: [
      [86], 256
    ],
    119882: [
      [87], 256
    ],
    119883: [
      [88], 256
    ],
    119884: [
      [89], 256
    ],
    119885: [
      [90], 256
    ],
    119886: [
      [97], 256
    ],
    119887: [
      [98], 256
    ],
    119888: [
      [99], 256
    ],
    119889: [
      [100], 256
    ],
    119890: [
      [101], 256
    ],
    119891: [
      [102], 256
    ],
    119892: [
      [103], 256
    ],
    119894: [
      [105], 256
    ],
    119895: [
      [106], 256
    ],
    119896: [
      [107], 256
    ],
    119897: [
      [108], 256
    ],
    119898: [
      [109], 256
    ],
    119899: [
      [110], 256
    ],
    119900: [
      [111], 256
    ],
    119901: [
      [112], 256
    ],
    119902: [
      [113], 256
    ],
    119903: [
      [114], 256
    ],
    119904: [
      [115], 256
    ],
    119905: [
      [116], 256
    ],
    119906: [
      [117], 256
    ],
    119907: [
      [118], 256
    ],
    119908: [
      [119], 256
    ],
    119909: [
      [120], 256
    ],
    119910: [
      [121], 256
    ],
    119911: [
      [122], 256
    ],
    119912: [
      [65], 256
    ],
    119913: [
      [66], 256
    ],
    119914: [
      [67], 256
    ],
    119915: [
      [68], 256
    ],
    119916: [
      [69], 256
    ],
    119917: [
      [70], 256
    ],
    119918: [
      [71], 256
    ],
    119919: [
      [72], 256
    ],
    119920: [
      [73], 256
    ],
    119921: [
      [74], 256
    ],
    119922: [
      [75], 256
    ],
    119923: [
      [76], 256
    ],
    119924: [
      [77], 256
    ],
    119925: [
      [78], 256
    ],
    119926: [
      [79], 256
    ],
    119927: [
      [80], 256
    ],
    119928: [
      [81], 256
    ],
    119929: [
      [82], 256
    ],
    119930: [
      [83], 256
    ],
    119931: [
      [84], 256
    ],
    119932: [
      [85], 256
    ],
    119933: [
      [86], 256
    ],
    119934: [
      [87], 256
    ],
    119935: [
      [88], 256
    ],
    119936: [
      [89], 256
    ],
    119937: [
      [90], 256
    ],
    119938: [
      [97], 256
    ],
    119939: [
      [98], 256
    ],
    119940: [
      [99], 256
    ],
    119941: [
      [100], 256
    ],
    119942: [
      [101], 256
    ],
    119943: [
      [102], 256
    ],
    119944: [
      [103], 256
    ],
    119945: [
      [104], 256
    ],
    119946: [
      [105], 256
    ],
    119947: [
      [106], 256
    ],
    119948: [
      [107], 256
    ],
    119949: [
      [108], 256
    ],
    119950: [
      [109], 256
    ],
    119951: [
      [110], 256
    ],
    119952: [
      [111], 256
    ],
    119953: [
      [112], 256
    ],
    119954: [
      [113], 256
    ],
    119955: [
      [114], 256
    ],
    119956: [
      [115], 256
    ],
    119957: [
      [116], 256
    ],
    119958: [
      [117], 256
    ],
    119959: [
      [118], 256
    ],
    119960: [
      [119], 256
    ],
    119961: [
      [120], 256
    ],
    119962: [
      [121], 256
    ],
    119963: [
      [122], 256
    ],
    119964: [
      [65], 256
    ],
    119966: [
      [67], 256
    ],
    119967: [
      [68], 256
    ],
    119970: [
      [71], 256
    ],
    119973: [
      [74], 256
    ],
    119974: [
      [75], 256
    ],
    119977: [
      [78], 256
    ],
    119978: [
      [79], 256
    ],
    119979: [
      [80], 256
    ],
    119980: [
      [81], 256
    ],
    119982: [
      [83], 256
    ],
    119983: [
      [84], 256
    ],
    119984: [
      [85], 256
    ],
    119985: [
      [86], 256
    ],
    119986: [
      [87], 256
    ],
    119987: [
      [88], 256
    ],
    119988: [
      [89], 256
    ],
    119989: [
      [90], 256
    ],
    119990: [
      [97], 256
    ],
    119991: [
      [98], 256
    ],
    119992: [
      [99], 256
    ],
    119993: [
      [100], 256
    ],
    119995: [
      [102], 256
    ],
    119997: [
      [104], 256
    ],
    119998: [
      [105], 256
    ],
    119999: [
      [106], 256
    ],
    12e4: [
      [107], 256
    ],
    120001: [
      [108], 256
    ],
    120002: [
      [109], 256
    ],
    120003: [
      [110], 256
    ],
    120005: [
      [112], 256
    ],
    120006: [
      [113], 256
    ],
    120007: [
      [114], 256
    ],
    120008: [
      [115], 256
    ],
    120009: [
      [116], 256
    ],
    120010: [
      [117], 256
    ],
    120011: [
      [118], 256
    ],
    120012: [
      [119], 256
    ],
    120013: [
      [120], 256
    ],
    120014: [
      [121], 256
    ],
    120015: [
      [122], 256
    ],
    120016: [
      [65], 256
    ],
    120017: [
      [66], 256
    ],
    120018: [
      [67], 256
    ],
    120019: [
      [68], 256
    ],
    120020: [
      [69], 256
    ],
    120021: [
      [70], 256
    ],
    120022: [
      [71], 256
    ],
    120023: [
      [72], 256
    ],
    120024: [
      [73], 256
    ],
    120025: [
      [74], 256
    ],
    120026: [
      [75], 256
    ],
    120027: [
      [76], 256
    ],
    120028: [
      [77], 256
    ],
    120029: [
      [78], 256
    ],
    120030: [
      [79], 256
    ],
    120031: [
      [80], 256
    ],
    120032: [
      [81], 256
    ],
    120033: [
      [82], 256
    ],
    120034: [
      [83], 256
    ],
    120035: [
      [84], 256
    ],
    120036: [
      [85], 256
    ],
    120037: [
      [86], 256
    ],
    120038: [
      [87], 256
    ],
    120039: [
      [88], 256
    ],
    120040: [
      [89], 256
    ],
    120041: [
      [90], 256
    ],
    120042: [
      [97], 256
    ],
    120043: [
      [98], 256
    ],
    120044: [
      [99], 256
    ],
    120045: [
      [100], 256
    ],
    120046: [
      [101], 256
    ],
    120047: [
      [102], 256
    ],
    120048: [
      [103], 256
    ],
    120049: [
      [104], 256
    ],
    120050: [
      [105], 256
    ],
    120051: [
      [106], 256
    ],
    120052: [
      [107], 256
    ],
    120053: [
      [108], 256
    ],
    120054: [
      [109], 256
    ],
    120055: [
      [110], 256
    ],
    120056: [
      [111], 256
    ],
    120057: [
      [112], 256
    ],
    120058: [
      [113], 256
    ],
    120059: [
      [114], 256
    ],
    120060: [
      [115], 256
    ],
    120061: [
      [116], 256
    ],
    120062: [
      [117], 256
    ],
    120063: [[118], 256]
  },
  54528: {
    120064: [
      [119], 256
    ],
    120065: [
      [120], 256
    ],
    120066: [
      [121], 256
    ],
    120067: [
      [122], 256
    ],
    120068: [
      [65], 256
    ],
    120069: [
      [66], 256
    ],
    120071: [
      [68], 256
    ],
    120072: [
      [69], 256
    ],
    120073: [
      [70], 256
    ],
    120074: [
      [71], 256
    ],
    120077: [
      [74], 256
    ],
    120078: [
      [75], 256
    ],
    120079: [
      [76], 256
    ],
    120080: [
      [77], 256
    ],
    120081: [
      [78], 256
    ],
    120082: [
      [79], 256
    ],
    120083: [
      [80], 256
    ],
    120084: [
      [81], 256
    ],
    120086: [
      [83], 256
    ],
    120087: [
      [84], 256
    ],
    120088: [
      [85], 256
    ],
    120089: [
      [86], 256
    ],
    120090: [
      [87], 256
    ],
    120091: [
      [88], 256
    ],
    120092: [
      [89], 256
    ],
    120094: [
      [97], 256
    ],
    120095: [
      [98], 256
    ],
    120096: [
      [99], 256
    ],
    120097: [
      [100], 256
    ],
    120098: [
      [101], 256
    ],
    120099: [
      [102], 256
    ],
    120100: [
      [103], 256
    ],
    120101: [
      [104], 256
    ],
    120102: [
      [105], 256
    ],
    120103: [
      [106], 256
    ],
    120104: [
      [107], 256
    ],
    120105: [
      [108], 256
    ],
    120106: [
      [109], 256
    ],
    120107: [
      [110], 256
    ],
    120108: [
      [111], 256
    ],
    120109: [
      [112], 256
    ],
    120110: [
      [113], 256
    ],
    120111: [
      [114], 256
    ],
    120112: [
      [115], 256
    ],
    120113: [
      [116], 256
    ],
    120114: [
      [117], 256
    ],
    120115: [
      [118], 256
    ],
    120116: [
      [119], 256
    ],
    120117: [
      [120], 256
    ],
    120118: [
      [121], 256
    ],
    120119: [
      [122], 256
    ],
    120120: [
      [65], 256
    ],
    120121: [
      [66], 256
    ],
    120123: [
      [68], 256
    ],
    120124: [
      [69], 256
    ],
    120125: [
      [70], 256
    ],
    120126: [
      [71], 256
    ],
    120128: [
      [73], 256
    ],
    120129: [
      [74], 256
    ],
    120130: [
      [75], 256
    ],
    120131: [
      [76], 256
    ],
    120132: [
      [77], 256
    ],
    120134: [
      [79], 256
    ],
    120138: [
      [83], 256
    ],
    120139: [
      [84], 256
    ],
    120140: [
      [85], 256
    ],
    120141: [
      [86], 256
    ],
    120142: [
      [87], 256
    ],
    120143: [
      [88], 256
    ],
    120144: [
      [89], 256
    ],
    120146: [
      [97], 256
    ],
    120147: [
      [98], 256
    ],
    120148: [
      [99], 256
    ],
    120149: [
      [100], 256
    ],
    120150: [
      [101], 256
    ],
    120151: [
      [102], 256
    ],
    120152: [
      [103], 256
    ],
    120153: [
      [104], 256
    ],
    120154: [
      [105], 256
    ],
    120155: [
      [106], 256
    ],
    120156: [
      [107], 256
    ],
    120157: [
      [108], 256
    ],
    120158: [
      [109], 256
    ],
    120159: [
      [110], 256
    ],
    120160: [
      [111], 256
    ],
    120161: [
      [112], 256
    ],
    120162: [
      [113], 256
    ],
    120163: [
      [114], 256
    ],
    120164: [
      [115], 256
    ],
    120165: [
      [116], 256
    ],
    120166: [
      [117], 256
    ],
    120167: [
      [118], 256
    ],
    120168: [
      [119], 256
    ],
    120169: [
      [120], 256
    ],
    120170: [
      [121], 256
    ],
    120171: [
      [122], 256
    ],
    120172: [
      [65], 256
    ],
    120173: [
      [66], 256
    ],
    120174: [
      [67], 256
    ],
    120175: [
      [68], 256
    ],
    120176: [
      [69], 256
    ],
    120177: [
      [70], 256
    ],
    120178: [
      [71], 256
    ],
    120179: [
      [72], 256
    ],
    120180: [
      [73], 256
    ],
    120181: [
      [74], 256
    ],
    120182: [
      [75], 256
    ],
    120183: [
      [76], 256
    ],
    120184: [
      [77], 256
    ],
    120185: [
      [78], 256
    ],
    120186: [
      [79], 256
    ],
    120187: [
      [80], 256
    ],
    120188: [
      [81], 256
    ],
    120189: [
      [82], 256
    ],
    120190: [
      [83], 256
    ],
    120191: [
      [84], 256
    ],
    120192: [
      [85], 256
    ],
    120193: [
      [86], 256
    ],
    120194: [
      [87], 256
    ],
    120195: [
      [88], 256
    ],
    120196: [
      [89], 256
    ],
    120197: [
      [90], 256
    ],
    120198: [
      [97], 256
    ],
    120199: [
      [98], 256
    ],
    120200: [
      [99], 256
    ],
    120201: [
      [100], 256
    ],
    120202: [
      [101], 256
    ],
    120203: [
      [102], 256
    ],
    120204: [
      [103], 256
    ],
    120205: [
      [104], 256
    ],
    120206: [
      [105], 256
    ],
    120207: [
      [106], 256
    ],
    120208: [
      [107], 256
    ],
    120209: [
      [108], 256
    ],
    120210: [
      [109], 256
    ],
    120211: [
      [110], 256
    ],
    120212: [
      [111], 256
    ],
    120213: [
      [112], 256
    ],
    120214: [
      [113], 256
    ],
    120215: [
      [114], 256
    ],
    120216: [
      [115], 256
    ],
    120217: [
      [116], 256
    ],
    120218: [
      [117], 256
    ],
    120219: [
      [118], 256
    ],
    120220: [
      [119], 256
    ],
    120221: [
      [120], 256
    ],
    120222: [
      [121], 256
    ],
    120223: [
      [122], 256
    ],
    120224: [
      [65], 256
    ],
    120225: [
      [66], 256
    ],
    120226: [
      [67], 256
    ],
    120227: [
      [68], 256
    ],
    120228: [
      [69], 256
    ],
    120229: [
      [70], 256
    ],
    120230: [
      [71], 256
    ],
    120231: [
      [72], 256
    ],
    120232: [
      [73], 256
    ],
    120233: [
      [74], 256
    ],
    120234: [
      [75], 256
    ],
    120235: [
      [76], 256
    ],
    120236: [
      [77], 256
    ],
    120237: [
      [78], 256
    ],
    120238: [
      [79], 256
    ],
    120239: [
      [80], 256
    ],
    120240: [
      [81], 256
    ],
    120241: [
      [82], 256
    ],
    120242: [
      [83], 256
    ],
    120243: [
      [84], 256
    ],
    120244: [
      [85], 256
    ],
    120245: [
      [86], 256
    ],
    120246: [
      [87], 256
    ],
    120247: [
      [88], 256
    ],
    120248: [
      [89], 256
    ],
    120249: [
      [90], 256
    ],
    120250: [
      [97], 256
    ],
    120251: [
      [98], 256
    ],
    120252: [
      [99], 256
    ],
    120253: [
      [100], 256
    ],
    120254: [
      [101], 256
    ],
    120255: [
      [102], 256
    ],
    120256: [
      [103], 256
    ],
    120257: [
      [104], 256
    ],
    120258: [
      [105], 256
    ],
    120259: [
      [106], 256
    ],
    120260: [
      [107], 256
    ],
    120261: [
      [108], 256
    ],
    120262: [
      [109], 256
    ],
    120263: [
      [110], 256
    ],
    120264: [
      [111], 256
    ],
    120265: [
      [112], 256
    ],
    120266: [
      [113], 256
    ],
    120267: [
      [114], 256
    ],
    120268: [
      [115], 256
    ],
    120269: [
      [116], 256
    ],
    120270: [
      [117], 256
    ],
    120271: [
      [118], 256
    ],
    120272: [
      [119], 256
    ],
    120273: [
      [120], 256
    ],
    120274: [
      [121], 256
    ],
    120275: [
      [122], 256
    ],
    120276: [
      [65], 256
    ],
    120277: [
      [66], 256
    ],
    120278: [
      [67], 256
    ],
    120279: [
      [68], 256
    ],
    120280: [
      [69], 256
    ],
    120281: [
      [70], 256
    ],
    120282: [
      [71], 256
    ],
    120283: [
      [72], 256
    ],
    120284: [
      [73], 256
    ],
    120285: [
      [74], 256
    ],
    120286: [
      [75], 256
    ],
    120287: [
      [76], 256
    ],
    120288: [
      [77], 256
    ],
    120289: [
      [78], 256
    ],
    120290: [
      [79], 256
    ],
    120291: [
      [80], 256
    ],
    120292: [
      [81], 256
    ],
    120293: [
      [82], 256
    ],
    120294: [
      [83], 256
    ],
    120295: [
      [84], 256
    ],
    120296: [
      [85], 256
    ],
    120297: [
      [86], 256
    ],
    120298: [
      [87], 256
    ],
    120299: [
      [88], 256
    ],
    120300: [
      [89], 256
    ],
    120301: [
      [90], 256
    ],
    120302: [
      [97], 256
    ],
    120303: [
      [98], 256
    ],
    120304: [
      [99], 256
    ],
    120305: [
      [100], 256
    ],
    120306: [
      [101], 256
    ],
    120307: [
      [102], 256
    ],
    120308: [
      [103], 256
    ],
    120309: [
      [104], 256
    ],
    120310: [
      [105], 256
    ],
    120311: [
      [106], 256
    ],
    120312: [
      [107], 256
    ],
    120313: [
      [108], 256
    ],
    120314: [
      [109], 256
    ],
    120315: [
      [110], 256
    ],
    120316: [
      [111], 256
    ],
    120317: [
      [112], 256
    ],
    120318: [
      [113], 256
    ],
    120319: [[114], 256]
  },
  54784: {
    120320: [
      [115], 256
    ],
    120321: [
      [116], 256
    ],
    120322: [
      [117], 256
    ],
    120323: [
      [118], 256
    ],
    120324: [
      [119], 256
    ],
    120325: [
      [120], 256
    ],
    120326: [
      [121], 256
    ],
    120327: [
      [122], 256
    ],
    120328: [
      [65], 256
    ],
    120329: [
      [66], 256
    ],
    120330: [
      [67], 256
    ],
    120331: [
      [68], 256
    ],
    120332: [
      [69], 256
    ],
    120333: [
      [70], 256
    ],
    120334: [
      [71], 256
    ],
    120335: [
      [72], 256
    ],
    120336: [
      [73], 256
    ],
    120337: [
      [74], 256
    ],
    120338: [
      [75], 256
    ],
    120339: [
      [76], 256
    ],
    120340: [
      [77], 256
    ],
    120341: [
      [78], 256
    ],
    120342: [
      [79], 256
    ],
    120343: [
      [80], 256
    ],
    120344: [
      [81], 256
    ],
    120345: [
      [82], 256
    ],
    120346: [
      [83], 256
    ],
    120347: [
      [84], 256
    ],
    120348: [
      [85], 256
    ],
    120349: [
      [86], 256
    ],
    120350: [
      [87], 256
    ],
    120351: [
      [88], 256
    ],
    120352: [
      [89], 256
    ],
    120353: [
      [90], 256
    ],
    120354: [
      [97], 256
    ],
    120355: [
      [98], 256
    ],
    120356: [
      [99], 256
    ],
    120357: [
      [100], 256
    ],
    120358: [
      [101], 256
    ],
    120359: [
      [102], 256
    ],
    120360: [
      [103], 256
    ],
    120361: [
      [104], 256
    ],
    120362: [
      [105], 256
    ],
    120363: [
      [106], 256
    ],
    120364: [
      [107], 256
    ],
    120365: [
      [108], 256
    ],
    120366: [
      [109], 256
    ],
    120367: [
      [110], 256
    ],
    120368: [
      [111], 256
    ],
    120369: [
      [112], 256
    ],
    120370: [
      [113], 256
    ],
    120371: [
      [114], 256
    ],
    120372: [
      [115], 256
    ],
    120373: [
      [116], 256
    ],
    120374: [
      [117], 256
    ],
    120375: [
      [118], 256
    ],
    120376: [
      [119], 256
    ],
    120377: [
      [120], 256
    ],
    120378: [
      [121], 256
    ],
    120379: [
      [122], 256
    ],
    120380: [
      [65], 256
    ],
    120381: [
      [66], 256
    ],
    120382: [
      [67], 256
    ],
    120383: [
      [68], 256
    ],
    120384: [
      [69], 256
    ],
    120385: [
      [70], 256
    ],
    120386: [
      [71], 256
    ],
    120387: [
      [72], 256
    ],
    120388: [
      [73], 256
    ],
    120389: [
      [74], 256
    ],
    120390: [
      [75], 256
    ],
    120391: [
      [76], 256
    ],
    120392: [
      [77], 256
    ],
    120393: [
      [78], 256
    ],
    120394: [
      [79], 256
    ],
    120395: [
      [80], 256
    ],
    120396: [
      [81], 256
    ],
    120397: [
      [82], 256
    ],
    120398: [
      [83], 256
    ],
    120399: [
      [84], 256
    ],
    120400: [
      [85], 256
    ],
    120401: [
      [86], 256
    ],
    120402: [
      [87], 256
    ],
    120403: [
      [88], 256
    ],
    120404: [
      [89], 256
    ],
    120405: [
      [90], 256
    ],
    120406: [
      [97], 256
    ],
    120407: [
      [98], 256
    ],
    120408: [
      [99], 256
    ],
    120409: [
      [100], 256
    ],
    120410: [
      [101], 256
    ],
    120411: [
      [102], 256
    ],
    120412: [
      [103], 256
    ],
    120413: [
      [104], 256
    ],
    120414: [
      [105], 256
    ],
    120415: [
      [106], 256
    ],
    120416: [
      [107], 256
    ],
    120417: [
      [108], 256
    ],
    120418: [
      [109], 256
    ],
    120419: [
      [110], 256
    ],
    120420: [
      [111], 256
    ],
    120421: [
      [112], 256
    ],
    120422: [
      [113], 256
    ],
    120423: [
      [114], 256
    ],
    120424: [
      [115], 256
    ],
    120425: [
      [116], 256
    ],
    120426: [
      [117], 256
    ],
    120427: [
      [118], 256
    ],
    120428: [
      [119], 256
    ],
    120429: [
      [120], 256
    ],
    120430: [
      [121], 256
    ],
    120431: [
      [122], 256
    ],
    120432: [
      [65], 256
    ],
    120433: [
      [66], 256
    ],
    120434: [
      [67], 256
    ],
    120435: [
      [68], 256
    ],
    120436: [
      [69], 256
    ],
    120437: [
      [70], 256
    ],
    120438: [
      [71], 256
    ],
    120439: [
      [72], 256
    ],
    120440: [
      [73], 256
    ],
    120441: [
      [74], 256
    ],
    120442: [
      [75], 256
    ],
    120443: [
      [76], 256
    ],
    120444: [
      [77], 256
    ],
    120445: [
      [78], 256
    ],
    120446: [
      [79], 256
    ],
    120447: [
      [80], 256
    ],
    120448: [
      [81], 256
    ],
    120449: [
      [82], 256
    ],
    120450: [
      [83], 256
    ],
    120451: [
      [84], 256
    ],
    120452: [
      [85], 256
    ],
    120453: [
      [86], 256
    ],
    120454: [
      [87], 256
    ],
    120455: [
      [88], 256
    ],
    120456: [
      [89], 256
    ],
    120457: [
      [90], 256
    ],
    120458: [
      [97], 256
    ],
    120459: [
      [98], 256
    ],
    120460: [
      [99], 256
    ],
    120461: [
      [100], 256
    ],
    120462: [
      [101], 256
    ],
    120463: [
      [102], 256
    ],
    120464: [
      [103], 256
    ],
    120465: [
      [104], 256
    ],
    120466: [
      [105], 256
    ],
    120467: [
      [106], 256
    ],
    120468: [
      [107], 256
    ],
    120469: [
      [108], 256
    ],
    120470: [
      [109], 256
    ],
    120471: [
      [110], 256
    ],
    120472: [
      [111], 256
    ],
    120473: [
      [112], 256
    ],
    120474: [
      [113], 256
    ],
    120475: [
      [114], 256
    ],
    120476: [
      [115], 256
    ],
    120477: [
      [116], 256
    ],
    120478: [
      [117], 256
    ],
    120479: [
      [118], 256
    ],
    120480: [
      [119], 256
    ],
    120481: [
      [120], 256
    ],
    120482: [
      [121], 256
    ],
    120483: [
      [122], 256
    ],
    120484: [
      [305], 256
    ],
    120485: [
      [567], 256
    ],
    120488: [
      [913], 256
    ],
    120489: [
      [914], 256
    ],
    120490: [
      [915], 256
    ],
    120491: [
      [916], 256
    ],
    120492: [
      [917], 256
    ],
    120493: [
      [918], 256
    ],
    120494: [
      [919], 256
    ],
    120495: [
      [920], 256
    ],
    120496: [
      [921], 256
    ],
    120497: [
      [922], 256
    ],
    120498: [
      [923], 256
    ],
    120499: [
      [924], 256
    ],
    120500: [
      [925], 256
    ],
    120501: [
      [926], 256
    ],
    120502: [
      [927], 256
    ],
    120503: [
      [928], 256
    ],
    120504: [
      [929], 256
    ],
    120505: [
      [1012], 256
    ],
    120506: [
      [931], 256
    ],
    120507: [
      [932], 256
    ],
    120508: [
      [933], 256
    ],
    120509: [
      [934], 256
    ],
    120510: [
      [935], 256
    ],
    120511: [
      [936], 256
    ],
    120512: [
      [937], 256
    ],
    120513: [
      [8711], 256
    ],
    120514: [
      [945], 256
    ],
    120515: [
      [946], 256
    ],
    120516: [
      [947], 256
    ],
    120517: [
      [948], 256
    ],
    120518: [
      [949], 256
    ],
    120519: [
      [950], 256
    ],
    120520: [
      [951], 256
    ],
    120521: [
      [952], 256
    ],
    120522: [
      [953], 256
    ],
    120523: [
      [954], 256
    ],
    120524: [
      [955], 256
    ],
    120525: [
      [956], 256
    ],
    120526: [
      [957], 256
    ],
    120527: [
      [958], 256
    ],
    120528: [
      [959], 256
    ],
    120529: [
      [960], 256
    ],
    120530: [
      [961], 256
    ],
    120531: [
      [962], 256
    ],
    120532: [
      [963], 256
    ],
    120533: [
      [964], 256
    ],
    120534: [
      [965], 256
    ],
    120535: [
      [966], 256
    ],
    120536: [
      [967], 256
    ],
    120537: [
      [968], 256
    ],
    120538: [
      [969], 256
    ],
    120539: [
      [8706], 256
    ],
    120540: [
      [1013], 256
    ],
    120541: [
      [977], 256
    ],
    120542: [
      [1008], 256
    ],
    120543: [
      [981], 256
    ],
    120544: [
      [1009], 256
    ],
    120545: [
      [982], 256
    ],
    120546: [
      [913], 256
    ],
    120547: [
      [914], 256
    ],
    120548: [
      [915], 256
    ],
    120549: [
      [916], 256
    ],
    120550: [
      [917], 256
    ],
    120551: [
      [918], 256
    ],
    120552: [
      [919], 256
    ],
    120553: [
      [920], 256
    ],
    120554: [
      [921], 256
    ],
    120555: [
      [922], 256
    ],
    120556: [
      [923], 256
    ],
    120557: [
      [924], 256
    ],
    120558: [
      [925], 256
    ],
    120559: [
      [926], 256
    ],
    120560: [
      [927], 256
    ],
    120561: [
      [928], 256
    ],
    120562: [
      [929], 256
    ],
    120563: [
      [1012], 256
    ],
    120564: [
      [931], 256
    ],
    120565: [
      [932], 256
    ],
    120566: [
      [933], 256
    ],
    120567: [
      [934], 256
    ],
    120568: [
      [935], 256
    ],
    120569: [
      [936], 256
    ],
    120570: [
      [937], 256
    ],
    120571: [
      [8711], 256
    ],
    120572: [
      [945], 256
    ],
    120573: [
      [946], 256
    ],
    120574: [
      [947], 256
    ],
    120575: [[948], 256]
  },
  55040: {
    120576: [
      [949], 256
    ],
    120577: [
      [950], 256
    ],
    120578: [
      [951], 256
    ],
    120579: [
      [952], 256
    ],
    120580: [
      [953], 256
    ],
    120581: [
      [954], 256
    ],
    120582: [
      [955], 256
    ],
    120583: [
      [956], 256
    ],
    120584: [
      [957], 256
    ],
    120585: [
      [958], 256
    ],
    120586: [
      [959], 256
    ],
    120587: [
      [960], 256
    ],
    120588: [
      [961], 256
    ],
    120589: [
      [962], 256
    ],
    120590: [
      [963], 256
    ],
    120591: [
      [964], 256
    ],
    120592: [
      [965], 256
    ],
    120593: [
      [966], 256
    ],
    120594: [
      [967], 256
    ],
    120595: [
      [968], 256
    ],
    120596: [
      [969], 256
    ],
    120597: [
      [8706], 256
    ],
    120598: [
      [1013], 256
    ],
    120599: [
      [977], 256
    ],
    120600: [
      [1008], 256
    ],
    120601: [
      [981], 256
    ],
    120602: [
      [1009], 256
    ],
    120603: [
      [982], 256
    ],
    120604: [
      [913], 256
    ],
    120605: [
      [914], 256
    ],
    120606: [
      [915], 256
    ],
    120607: [
      [916], 256
    ],
    120608: [
      [917], 256
    ],
    120609: [
      [918], 256
    ],
    120610: [
      [919], 256
    ],
    120611: [
      [920], 256
    ],
    120612: [
      [921], 256
    ],
    120613: [
      [922], 256
    ],
    120614: [
      [923], 256
    ],
    120615: [
      [924], 256
    ],
    120616: [
      [925], 256
    ],
    120617: [
      [926], 256
    ],
    120618: [
      [927], 256
    ],
    120619: [
      [928], 256
    ],
    120620: [
      [929], 256
    ],
    120621: [
      [1012], 256
    ],
    120622: [
      [931], 256
    ],
    120623: [
      [932], 256
    ],
    120624: [
      [933], 256
    ],
    120625: [
      [934], 256
    ],
    120626: [
      [935], 256
    ],
    120627: [
      [936], 256
    ],
    120628: [
      [937], 256
    ],
    120629: [
      [8711], 256
    ],
    120630: [
      [945], 256
    ],
    120631: [
      [946], 256
    ],
    120632: [
      [947], 256
    ],
    120633: [
      [948], 256
    ],
    120634: [
      [949], 256
    ],
    120635: [
      [950], 256
    ],
    120636: [
      [951], 256
    ],
    120637: [
      [952], 256
    ],
    120638: [
      [953], 256
    ],
    120639: [
      [954], 256
    ],
    120640: [
      [955], 256
    ],
    120641: [
      [956], 256
    ],
    120642: [
      [957], 256
    ],
    120643: [
      [958], 256
    ],
    120644: [
      [959], 256
    ],
    120645: [
      [960], 256
    ],
    120646: [
      [961], 256
    ],
    120647: [
      [962], 256
    ],
    120648: [
      [963], 256
    ],
    120649: [
      [964], 256
    ],
    120650: [
      [965], 256
    ],
    120651: [
      [966], 256
    ],
    120652: [
      [967], 256
    ],
    120653: [
      [968], 256
    ],
    120654: [
      [969], 256
    ],
    120655: [
      [8706], 256
    ],
    120656: [
      [1013], 256
    ],
    120657: [
      [977], 256
    ],
    120658: [
      [1008], 256
    ],
    120659: [
      [981], 256
    ],
    120660: [
      [1009], 256
    ],
    120661: [
      [982], 256
    ],
    120662: [
      [913], 256
    ],
    120663: [
      [914], 256
    ],
    120664: [
      [915], 256
    ],
    120665: [
      [916], 256
    ],
    120666: [
      [917], 256
    ],
    120667: [
      [918], 256
    ],
    120668: [
      [919], 256
    ],
    120669: [
      [920], 256
    ],
    120670: [
      [921], 256
    ],
    120671: [
      [922], 256
    ],
    120672: [
      [923], 256
    ],
    120673: [
      [924], 256
    ],
    120674: [
      [925], 256
    ],
    120675: [
      [926], 256
    ],
    120676: [
      [927], 256
    ],
    120677: [
      [928], 256
    ],
    120678: [
      [929], 256
    ],
    120679: [
      [1012], 256
    ],
    120680: [
      [931], 256
    ],
    120681: [
      [932], 256
    ],
    120682: [
      [933], 256
    ],
    120683: [
      [934], 256
    ],
    120684: [
      [935], 256
    ],
    120685: [
      [936], 256
    ],
    120686: [
      [937], 256
    ],
    120687: [
      [8711], 256
    ],
    120688: [
      [945], 256
    ],
    120689: [
      [946], 256
    ],
    120690: [
      [947], 256
    ],
    120691: [
      [948], 256
    ],
    120692: [
      [949], 256
    ],
    120693: [
      [950], 256
    ],
    120694: [
      [951], 256
    ],
    120695: [
      [952], 256
    ],
    120696: [
      [953], 256
    ],
    120697: [
      [954], 256
    ],
    120698: [
      [955], 256
    ],
    120699: [
      [956], 256
    ],
    120700: [
      [957], 256
    ],
    120701: [
      [958], 256
    ],
    120702: [
      [959], 256
    ],
    120703: [
      [960], 256
    ],
    120704: [
      [961], 256
    ],
    120705: [
      [962], 256
    ],
    120706: [
      [963], 256
    ],
    120707: [
      [964], 256
    ],
    120708: [
      [965], 256
    ],
    120709: [
      [966], 256
    ],
    120710: [
      [967], 256
    ],
    120711: [
      [968], 256
    ],
    120712: [
      [969], 256
    ],
    120713: [
      [8706], 256
    ],
    120714: [
      [1013], 256
    ],
    120715: [
      [977], 256
    ],
    120716: [
      [1008], 256
    ],
    120717: [
      [981], 256
    ],
    120718: [
      [1009], 256
    ],
    120719: [
      [982], 256
    ],
    120720: [
      [913], 256
    ],
    120721: [
      [914], 256
    ],
    120722: [
      [915], 256
    ],
    120723: [
      [916], 256
    ],
    120724: [
      [917], 256
    ],
    120725: [
      [918], 256
    ],
    120726: [
      [919], 256
    ],
    120727: [
      [920], 256
    ],
    120728: [
      [921], 256
    ],
    120729: [
      [922], 256
    ],
    120730: [
      [923], 256
    ],
    120731: [
      [924], 256
    ],
    120732: [
      [925], 256
    ],
    120733: [
      [926], 256
    ],
    120734: [
      [927], 256
    ],
    120735: [
      [928], 256
    ],
    120736: [
      [929], 256
    ],
    120737: [
      [1012], 256
    ],
    120738: [
      [931], 256
    ],
    120739: [
      [932], 256
    ],
    120740: [
      [933], 256
    ],
    120741: [
      [934], 256
    ],
    120742: [
      [935], 256
    ],
    120743: [
      [936], 256
    ],
    120744: [
      [937], 256
    ],
    120745: [
      [8711], 256
    ],
    120746: [
      [945], 256
    ],
    120747: [
      [946], 256
    ],
    120748: [
      [947], 256
    ],
    120749: [
      [948], 256
    ],
    120750: [
      [949], 256
    ],
    120751: [
      [950], 256
    ],
    120752: [
      [951], 256
    ],
    120753: [
      [952], 256
    ],
    120754: [
      [953], 256
    ],
    120755: [
      [954], 256
    ],
    120756: [
      [955], 256
    ],
    120757: [
      [956], 256
    ],
    120758: [
      [957], 256
    ],
    120759: [
      [958], 256
    ],
    120760: [
      [959], 256
    ],
    120761: [
      [960], 256
    ],
    120762: [
      [961], 256
    ],
    120763: [
      [962], 256
    ],
    120764: [
      [963], 256
    ],
    120765: [
      [964], 256
    ],
    120766: [
      [965], 256
    ],
    120767: [
      [966], 256
    ],
    120768: [
      [967], 256
    ],
    120769: [
      [968], 256
    ],
    120770: [
      [969], 256
    ],
    120771: [
      [8706], 256
    ],
    120772: [
      [1013], 256
    ],
    120773: [
      [977], 256
    ],
    120774: [
      [1008], 256
    ],
    120775: [
      [981], 256
    ],
    120776: [
      [1009], 256
    ],
    120777: [
      [982], 256
    ],
    120778: [
      [988], 256
    ],
    120779: [
      [989], 256
    ],
    120782: [
      [48], 256
    ],
    120783: [
      [49], 256
    ],
    120784: [
      [50], 256
    ],
    120785: [
      [51], 256
    ],
    120786: [
      [52], 256
    ],
    120787: [
      [53], 256
    ],
    120788: [
      [54], 256
    ],
    120789: [
      [55], 256
    ],
    120790: [
      [56], 256
    ],
    120791: [
      [57], 256
    ],
    120792: [
      [48], 256
    ],
    120793: [
      [49], 256
    ],
    120794: [
      [50], 256
    ],
    120795: [
      [51], 256
    ],
    120796: [
      [52], 256
    ],
    120797: [
      [53], 256
    ],
    120798: [
      [54], 256
    ],
    120799: [
      [55], 256
    ],
    120800: [
      [56], 256
    ],
    120801: [
      [57], 256
    ],
    120802: [
      [48], 256
    ],
    120803: [
      [49], 256
    ],
    120804: [
      [50], 256
    ],
    120805: [
      [51], 256
    ],
    120806: [
      [52], 256
    ],
    120807: [
      [53], 256
    ],
    120808: [
      [54], 256
    ],
    120809: [
      [55], 256
    ],
    120810: [
      [56], 256
    ],
    120811: [
      [57], 256
    ],
    120812: [
      [48], 256
    ],
    120813: [
      [49], 256
    ],
    120814: [
      [50], 256
    ],
    120815: [
      [51], 256
    ],
    120816: [
      [52], 256
    ],
    120817: [
      [53], 256
    ],
    120818: [
      [54], 256
    ],
    120819: [
      [55], 256
    ],
    120820: [
      [56], 256
    ],
    120821: [
      [57], 256
    ],
    120822: [
      [48], 256
    ],
    120823: [
      [49], 256
    ],
    120824: [
      [50], 256
    ],
    120825: [
      [51], 256
    ],
    120826: [
      [52], 256
    ],
    120827: [
      [53], 256
    ],
    120828: [
      [54], 256
    ],
    120829: [
      [55], 256
    ],
    120830: [
      [56], 256
    ],
    120831: [[57], 256]
  },
  59392: {
    125136: [
      , 220
    ],
    125137: [
      , 220
    ],
    125138: [
      , 220
    ],
    125139: [
      , 220
    ],
    125140: [
      , 220
    ],
    125141: [
      , 220
    ],
    125142: [, 220]
  },
  60928: {
    126464: [
      [1575], 256
    ],
    126465: [
      [1576], 256
    ],
    126466: [
      [1580], 256
    ],
    126467: [
      [1583], 256
    ],
    126469: [
      [1608], 256
    ],
    126470: [
      [1586], 256
    ],
    126471: [
      [1581], 256
    ],
    126472: [
      [1591], 256
    ],
    126473: [
      [1610], 256
    ],
    126474: [
      [1603], 256
    ],
    126475: [
      [1604], 256
    ],
    126476: [
      [1605], 256
    ],
    126477: [
      [1606], 256
    ],
    126478: [
      [1587], 256
    ],
    126479: [
      [1593], 256
    ],
    126480: [
      [1601], 256
    ],
    126481: [
      [1589], 256
    ],
    126482: [
      [1602], 256
    ],
    126483: [
      [1585], 256
    ],
    126484: [
      [1588], 256
    ],
    126485: [
      [1578], 256
    ],
    126486: [
      [1579], 256
    ],
    126487: [
      [1582], 256
    ],
    126488: [
      [1584], 256
    ],
    126489: [
      [1590], 256
    ],
    126490: [
      [1592], 256
    ],
    126491: [
      [1594], 256
    ],
    126492: [
      [1646], 256
    ],
    126493: [
      [1722], 256
    ],
    126494: [
      [1697], 256
    ],
    126495: [
      [1647], 256
    ],
    126497: [
      [1576], 256
    ],
    126498: [
      [1580], 256
    ],
    126500: [
      [1607], 256
    ],
    126503: [
      [1581], 256
    ],
    126505: [
      [1610], 256
    ],
    126506: [
      [1603], 256
    ],
    126507: [
      [1604], 256
    ],
    126508: [
      [1605], 256
    ],
    126509: [
      [1606], 256
    ],
    126510: [
      [1587], 256
    ],
    126511: [
      [1593], 256
    ],
    126512: [
      [1601], 256
    ],
    126513: [
      [1589], 256
    ],
    126514: [
      [1602], 256
    ],
    126516: [
      [1588], 256
    ],
    126517: [
      [1578], 256
    ],
    126518: [
      [1579], 256
    ],
    126519: [
      [1582], 256
    ],
    126521: [
      [1590], 256
    ],
    126523: [
      [1594], 256
    ],
    126530: [
      [1580], 256
    ],
    126535: [
      [1581], 256
    ],
    126537: [
      [1610], 256
    ],
    126539: [
      [1604], 256
    ],
    126541: [
      [1606], 256
    ],
    126542: [
      [1587], 256
    ],
    126543: [
      [1593], 256
    ],
    126545: [
      [1589], 256
    ],
    126546: [
      [1602], 256
    ],
    126548: [
      [1588], 256
    ],
    126551: [
      [1582], 256
    ],
    126553: [
      [1590], 256
    ],
    126555: [
      [1594], 256
    ],
    126557: [
      [1722], 256
    ],
    126559: [
      [1647], 256
    ],
    126561: [
      [1576], 256
    ],
    126562: [
      [1580], 256
    ],
    126564: [
      [1607], 256
    ],
    126567: [
      [1581], 256
    ],
    126568: [
      [1591], 256
    ],
    126569: [
      [1610], 256
    ],
    126570: [
      [1603], 256
    ],
    126572: [
      [1605], 256
    ],
    126573: [
      [1606], 256
    ],
    126574: [
      [1587], 256
    ],
    126575: [
      [1593], 256
    ],
    126576: [
      [1601], 256
    ],
    126577: [
      [1589], 256
    ],
    126578: [
      [1602], 256
    ],
    126580: [
      [1588], 256
    ],
    126581: [
      [1578], 256
    ],
    126582: [
      [1579], 256
    ],
    126583: [
      [1582], 256
    ],
    126585: [
      [1590], 256
    ],
    126586: [
      [1592], 256
    ],
    126587: [
      [1594], 256
    ],
    126588: [
      [1646], 256
    ],
    126590: [
      [1697], 256
    ],
    126592: [
      [1575], 256
    ],
    126593: [
      [1576], 256
    ],
    126594: [
      [1580], 256
    ],
    126595: [
      [1583], 256
    ],
    126596: [
      [1607], 256
    ],
    126597: [
      [1608], 256
    ],
    126598: [
      [1586], 256
    ],
    126599: [
      [1581], 256
    ],
    126600: [
      [1591], 256
    ],
    126601: [
      [1610], 256
    ],
    126603: [
      [1604], 256
    ],
    126604: [
      [1605], 256
    ],
    126605: [
      [1606], 256
    ],
    126606: [
      [1587], 256
    ],
    126607: [
      [1593], 256
    ],
    126608: [
      [1601], 256
    ],
    126609: [
      [1589], 256
    ],
    126610: [
      [1602], 256
    ],
    126611: [
      [1585], 256
    ],
    126612: [
      [1588], 256
    ],
    126613: [
      [1578], 256
    ],
    126614: [
      [1579], 256
    ],
    126615: [
      [1582], 256
    ],
    126616: [
      [1584], 256
    ],
    126617: [
      [1590], 256
    ],
    126618: [
      [1592], 256
    ],
    126619: [
      [1594], 256
    ],
    126625: [
      [1576], 256
    ],
    126626: [
      [1580], 256
    ],
    126627: [
      [1583], 256
    ],
    126629: [
      [1608], 256
    ],
    126630: [
      [1586], 256
    ],
    126631: [
      [1581], 256
    ],
    126632: [
      [1591], 256
    ],
    126633: [
      [1610], 256
    ],
    126635: [
      [1604], 256
    ],
    126636: [
      [1605], 256
    ],
    126637: [
      [1606], 256
    ],
    126638: [
      [1587], 256
    ],
    126639: [
      [1593], 256
    ],
    126640: [
      [1601], 256
    ],
    126641: [
      [1589], 256
    ],
    126642: [
      [1602], 256
    ],
    126643: [
      [1585], 256
    ],
    126644: [
      [1588], 256
    ],
    126645: [
      [1578], 256
    ],
    126646: [
      [1579], 256
    ],
    126647: [
      [1582], 256
    ],
    126648: [
      [1584], 256
    ],
    126649: [
      [1590], 256
    ],
    126650: [
      [1592], 256
    ],
    126651: [[1594], 256]
  },
  61696: {
    127232: [
      [
        48, 46
      ],
      256
    ],
    127233: [
      [
        48, 44
      ],
      256
    ],
    127234: [
      [
        49, 44
      ],
      256
    ],
    127235: [
      [
        50, 44
      ],
      256
    ],
    127236: [
      [
        51, 44
      ],
      256
    ],
    127237: [
      [
        52, 44
      ],
      256
    ],
    127238: [
      [
        53, 44
      ],
      256
    ],
    127239: [
      [
        54, 44
      ],
      256
    ],
    127240: [
      [
        55, 44
      ],
      256
    ],
    127241: [
      [
        56, 44
      ],
      256
    ],
    127242: [
      [
        57, 44
      ],
      256
    ],
    127248: [
      [
        40, 65, 41
      ],
      256
    ],
    127249: [
      [
        40, 66, 41
      ],
      256
    ],
    127250: [
      [
        40, 67, 41
      ],
      256
    ],
    127251: [
      [
        40, 68, 41
      ],
      256
    ],
    127252: [
      [
        40, 69, 41
      ],
      256
    ],
    127253: [
      [
        40, 70, 41
      ],
      256
    ],
    127254: [
      [
        40, 71, 41
      ],
      256
    ],
    127255: [
      [
        40, 72, 41
      ],
      256
    ],
    127256: [
      [
        40, 73, 41
      ],
      256
    ],
    127257: [
      [
        40, 74, 41
      ],
      256
    ],
    127258: [
      [
        40, 75, 41
      ],
      256
    ],
    127259: [
      [
        40, 76, 41
      ],
      256
    ],
    127260: [
      [
        40, 77, 41
      ],
      256
    ],
    127261: [
      [
        40, 78, 41
      ],
      256
    ],
    127262: [
      [
        40, 79, 41
      ],
      256
    ],
    127263: [
      [
        40, 80, 41
      ],
      256
    ],
    127264: [
      [
        40, 81, 41
      ],
      256
    ],
    127265: [
      [
        40, 82, 41
      ],
      256
    ],
    127266: [
      [
        40, 83, 41
      ],
      256
    ],
    127267: [
      [
        40, 84, 41
      ],
      256
    ],
    127268: [
      [
        40, 85, 41
      ],
      256
    ],
    127269: [
      [
        40, 86, 41
      ],
      256
    ],
    127270: [
      [
        40, 87, 41
      ],
      256
    ],
    127271: [
      [
        40, 88, 41
      ],
      256
    ],
    127272: [
      [
        40, 89, 41
      ],
      256
    ],
    127273: [
      [
        40, 90, 41
      ],
      256
    ],
    127274: [
      [
        12308, 83, 12309
      ],
      256
    ],
    127275: [
      [67], 256
    ],
    127276: [
      [82], 256
    ],
    127277: [
      [
        67, 68
      ],
      256
    ],
    127278: [
      [
        87, 90
      ],
      256
    ],
    127280: [
      [65], 256
    ],
    127281: [
      [66], 256
    ],
    127282: [
      [67], 256
    ],
    127283: [
      [68], 256
    ],
    127284: [
      [69], 256
    ],
    127285: [
      [70], 256
    ],
    127286: [
      [71], 256
    ],
    127287: [
      [72], 256
    ],
    127288: [
      [73], 256
    ],
    127289: [
      [74], 256
    ],
    127290: [
      [75], 256
    ],
    127291: [
      [76], 256
    ],
    127292: [
      [77], 256
    ],
    127293: [
      [78], 256
    ],
    127294: [
      [79], 256
    ],
    127295: [
      [80], 256
    ],
    127296: [
      [81], 256
    ],
    127297: [
      [82], 256
    ],
    127298: [
      [83], 256
    ],
    127299: [
      [84], 256
    ],
    127300: [
      [85], 256
    ],
    127301: [
      [86], 256
    ],
    127302: [
      [87], 256
    ],
    127303: [
      [88], 256
    ],
    127304: [
      [89], 256
    ],
    127305: [
      [90], 256
    ],
    127306: [
      [
        72, 86
      ],
      256
    ],
    127307: [
      [
        77, 86
      ],
      256
    ],
    127308: [
      [
        83, 68
      ],
      256
    ],
    127309: [
      [
        83, 83
      ],
      256
    ],
    127310: [
      [
        80, 80, 86
      ],
      256
    ],
    127311: [
      [
        87, 67
      ],
      256
    ],
    127338: [
      [
        77, 67
      ],
      256
    ],
    127339: [
      [
        77, 68
      ],
      256
    ],
    127376: [
      [
        68, 74
      ],
      256
    ]
  },
  61952: {
    127488: [
      [
        12411, 12363
      ],
      256
    ],
    127489: [
      [
        12467, 12467
      ],
      256
    ],
    127490: [
      [12469], 256
    ],
    127504: [
      [25163], 256
    ],
    127505: [
      [23383], 256
    ],
    127506: [
      [21452], 256
    ],
    127507: [
      [12487], 256
    ],
    127508: [
      [20108], 256
    ],
    127509: [
      [22810], 256
    ],
    127510: [
      [35299], 256
    ],
    127511: [
      [22825], 256
    ],
    127512: [
      [20132], 256
    ],
    127513: [
      [26144], 256
    ],
    127514: [
      [28961], 256
    ],
    127515: [
      [26009], 256
    ],
    127516: [
      [21069], 256
    ],
    127517: [
      [24460], 256
    ],
    127518: [
      [20877], 256
    ],
    127519: [
      [26032], 256
    ],
    127520: [
      [21021], 256
    ],
    127521: [
      [32066], 256
    ],
    127522: [
      [29983], 256
    ],
    127523: [
      [36009], 256
    ],
    127524: [
      [22768], 256
    ],
    127525: [
      [21561], 256
    ],
    127526: [
      [28436], 256
    ],
    127527: [
      [25237], 256
    ],
    127528: [
      [25429], 256
    ],
    127529: [
      [19968], 256
    ],
    127530: [
      [19977], 256
    ],
    127531: [
      [36938], 256
    ],
    127532: [
      [24038], 256
    ],
    127533: [
      [20013], 256
    ],
    127534: [
      [21491], 256
    ],
    127535: [
      [25351], 256
    ],
    127536: [
      [36208], 256
    ],
    127537: [
      [25171], 256
    ],
    127538: [
      [31105], 256
    ],
    127539: [
      [31354], 256
    ],
    127540: [
      [21512], 256
    ],
    127541: [
      [28288], 256
    ],
    127542: [
      [26377], 256
    ],
    127543: [
      [26376], 256
    ],
    127544: [
      [30003], 256
    ],
    127545: [
      [21106], 256
    ],
    127546: [
      [21942], 256
    ],
    127552: [
      [
        12308, 26412, 12309
      ],
      256
    ],
    127553: [
      [
        12308, 19977, 12309
      ],
      256
    ],
    127554: [
      [
        12308, 20108, 12309
      ],
      256
    ],
    127555: [
      [
        12308, 23433, 12309
      ],
      256
    ],
    127556: [
      [
        12308, 28857, 12309
      ],
      256
    ],
    127557: [
      [
        12308, 25171, 12309
      ],
      256
    ],
    127558: [
      [
        12308, 30423, 12309
      ],
      256
    ],
    127559: [
      [
        12308, 21213, 12309
      ],
      256
    ],
    127560: [
      [
        12308, 25943, 12309
      ],
      256
    ],
    127568: [
      [24471], 256
    ],
    127569: [[21487], 256]
  },
  63488: {
    194560: [
      [20029]
    ],
    194561: [
      [20024]
    ],
    194562: [
      [20033]
    ],
    194563: [
      [131362]
    ],
    194564: [
      [20320]
    ],
    194565: [
      [20398]
    ],
    194566: [
      [20411]
    ],
    194567: [
      [20482]
    ],
    194568: [
      [20602]
    ],
    194569: [
      [20633]
    ],
    194570: [
      [20711]
    ],
    194571: [
      [20687]
    ],
    194572: [
      [13470]
    ],
    194573: [
      [132666]
    ],
    194574: [
      [20813]
    ],
    194575: [
      [20820]
    ],
    194576: [
      [20836]
    ],
    194577: [
      [20855]
    ],
    194578: [
      [132380]
    ],
    194579: [
      [13497]
    ],
    194580: [
      [20839]
    ],
    194581: [
      [20877]
    ],
    194582: [
      [132427]
    ],
    194583: [
      [20887]
    ],
    194584: [
      [20900]
    ],
    194585: [
      [20172]
    ],
    194586: [
      [20908]
    ],
    194587: [
      [20917]
    ],
    194588: [
      [168415]
    ],
    194589: [
      [20981]
    ],
    194590: [
      [20995]
    ],
    194591: [
      [13535]
    ],
    194592: [
      [21051]
    ],
    194593: [
      [21062]
    ],
    194594: [
      [21106]
    ],
    194595: [
      [21111]
    ],
    194596: [
      [13589]
    ],
    194597: [
      [21191]
    ],
    194598: [
      [21193]
    ],
    194599: [
      [21220]
    ],
    194600: [
      [21242]
    ],
    194601: [
      [21253]
    ],
    194602: [
      [21254]
    ],
    194603: [
      [21271]
    ],
    194604: [
      [21321]
    ],
    194605: [
      [21329]
    ],
    194606: [
      [21338]
    ],
    194607: [
      [21363]
    ],
    194608: [
      [21373]
    ],
    194609: [
      [21375]
    ],
    194610: [
      [21375]
    ],
    194611: [
      [21375]
    ],
    194612: [
      [133676]
    ],
    194613: [
      [28784]
    ],
    194614: [
      [21450]
    ],
    194615: [
      [21471]
    ],
    194616: [
      [133987]
    ],
    194617: [
      [21483]
    ],
    194618: [
      [21489]
    ],
    194619: [
      [21510]
    ],
    194620: [
      [21662]
    ],
    194621: [
      [21560]
    ],
    194622: [
      [21576]
    ],
    194623: [
      [21608]
    ],
    194624: [
      [21666]
    ],
    194625: [
      [21750]
    ],
    194626: [
      [21776]
    ],
    194627: [
      [21843]
    ],
    194628: [
      [21859]
    ],
    194629: [
      [21892]
    ],
    194630: [
      [21892]
    ],
    194631: [
      [21913]
    ],
    194632: [
      [21931]
    ],
    194633: [
      [21939]
    ],
    194634: [
      [21954]
    ],
    194635: [
      [22294]
    ],
    194636: [
      [22022]
    ],
    194637: [
      [22295]
    ],
    194638: [
      [22097]
    ],
    194639: [
      [22132]
    ],
    194640: [
      [20999]
    ],
    194641: [
      [22766]
    ],
    194642: [
      [22478]
    ],
    194643: [
      [22516]
    ],
    194644: [
      [22541]
    ],
    194645: [
      [22411]
    ],
    194646: [
      [22578]
    ],
    194647: [
      [22577]
    ],
    194648: [
      [22700]
    ],
    194649: [
      [136420]
    ],
    194650: [
      [22770]
    ],
    194651: [
      [22775]
    ],
    194652: [
      [22790]
    ],
    194653: [
      [22810]
    ],
    194654: [
      [22818]
    ],
    194655: [
      [22882]
    ],
    194656: [
      [136872]
    ],
    194657: [
      [136938]
    ],
    194658: [
      [23020]
    ],
    194659: [
      [23067]
    ],
    194660: [
      [23079]
    ],
    194661: [
      [23e3]
    ],
    194662: [
      [23142]
    ],
    194663: [
      [14062]
    ],
    194664: [
      [14076]
    ],
    194665: [
      [23304]
    ],
    194666: [
      [23358]
    ],
    194667: [
      [23358]
    ],
    194668: [
      [137672]
    ],
    194669: [
      [23491]
    ],
    194670: [
      [23512]
    ],
    194671: [
      [23527]
    ],
    194672: [
      [23539]
    ],
    194673: [
      [138008]
    ],
    194674: [
      [23551]
    ],
    194675: [
      [23558]
    ],
    194676: [
      [24403]
    ],
    194677: [
      [23586]
    ],
    194678: [
      [14209]
    ],
    194679: [
      [23648]
    ],
    194680: [
      [23662]
    ],
    194681: [
      [23744]
    ],
    194682: [
      [23693]
    ],
    194683: [
      [138724]
    ],
    194684: [
      [23875]
    ],
    194685: [
      [138726]
    ],
    194686: [
      [23918]
    ],
    194687: [
      [23915]
    ],
    194688: [
      [23932]
    ],
    194689: [
      [24033]
    ],
    194690: [
      [24034]
    ],
    194691: [
      [14383]
    ],
    194692: [
      [24061]
    ],
    194693: [
      [24104]
    ],
    194694: [
      [24125]
    ],
    194695: [
      [24169]
    ],
    194696: [
      [14434]
    ],
    194697: [
      [139651]
    ],
    194698: [
      [14460]
    ],
    194699: [
      [24240]
    ],
    194700: [
      [24243]
    ],
    194701: [
      [24246]
    ],
    194702: [
      [24266]
    ],
    194703: [
      [172946]
    ],
    194704: [
      [24318]
    ],
    194705: [
      [140081]
    ],
    194706: [
      [140081]
    ],
    194707: [
      [33281]
    ],
    194708: [
      [24354]
    ],
    194709: [
      [24354]
    ],
    194710: [
      [14535]
    ],
    194711: [
      [144056]
    ],
    194712: [
      [156122]
    ],
    194713: [
      [24418]
    ],
    194714: [
      [24427]
    ],
    194715: [
      [14563]
    ],
    194716: [
      [24474]
    ],
    194717: [
      [24525]
    ],
    194718: [
      [24535]
    ],
    194719: [
      [24569]
    ],
    194720: [
      [24705]
    ],
    194721: [
      [14650]
    ],
    194722: [
      [14620]
    ],
    194723: [
      [24724]
    ],
    194724: [
      [141012]
    ],
    194725: [
      [24775]
    ],
    194726: [
      [24904]
    ],
    194727: [
      [24908]
    ],
    194728: [
      [24910]
    ],
    194729: [
      [24908]
    ],
    194730: [
      [24954]
    ],
    194731: [
      [24974]
    ],
    194732: [
      [25010]
    ],
    194733: [
      [24996]
    ],
    194734: [
      [25007]
    ],
    194735: [
      [25054]
    ],
    194736: [
      [25074]
    ],
    194737: [
      [25078]
    ],
    194738: [
      [25104]
    ],
    194739: [
      [25115]
    ],
    194740: [
      [25181]
    ],
    194741: [
      [25265]
    ],
    194742: [
      [25300]
    ],
    194743: [
      [25424]
    ],
    194744: [
      [142092]
    ],
    194745: [
      [25405]
    ],
    194746: [
      [25340]
    ],
    194747: [
      [25448]
    ],
    194748: [
      [25475]
    ],
    194749: [
      [25572]
    ],
    194750: [
      [142321]
    ],
    194751: [
      [25634]
    ],
    194752: [
      [25541]
    ],
    194753: [
      [25513]
    ],
    194754: [
      [14894]
    ],
    194755: [
      [25705]
    ],
    194756: [
      [25726]
    ],
    194757: [
      [25757]
    ],
    194758: [
      [25719]
    ],
    194759: [
      [14956]
    ],
    194760: [
      [25935]
    ],
    194761: [
      [25964]
    ],
    194762: [
      [143370]
    ],
    194763: [
      [26083]
    ],
    194764: [
      [26360]
    ],
    194765: [
      [26185]
    ],
    194766: [
      [15129]
    ],
    194767: [
      [26257]
    ],
    194768: [
      [15112]
    ],
    194769: [
      [15076]
    ],
    194770: [
      [20882]
    ],
    194771: [
      [20885]
    ],
    194772: [
      [26368]
    ],
    194773: [
      [26268]
    ],
    194774: [
      [32941]
    ],
    194775: [
      [17369]
    ],
    194776: [
      [26391]
    ],
    194777: [
      [26395]
    ],
    194778: [
      [26401]
    ],
    194779: [
      [26462]
    ],
    194780: [
      [26451]
    ],
    194781: [
      [144323]
    ],
    194782: [
      [15177]
    ],
    194783: [
      [26618]
    ],
    194784: [
      [26501]
    ],
    194785: [
      [26706]
    ],
    194786: [
      [26757]
    ],
    194787: [
      [144493]
    ],
    194788: [
      [26766]
    ],
    194789: [
      [26655]
    ],
    194790: [
      [26900]
    ],
    194791: [
      [15261]
    ],
    194792: [
      [26946]
    ],
    194793: [
      [27043]
    ],
    194794: [
      [27114]
    ],
    194795: [
      [27304]
    ],
    194796: [
      [145059]
    ],
    194797: [
      [27355]
    ],
    194798: [
      [15384]
    ],
    194799: [
      [27425]
    ],
    194800: [
      [145575]
    ],
    194801: [
      [27476]
    ],
    194802: [
      [15438]
    ],
    194803: [
      [27506]
    ],
    194804: [
      [27551]
    ],
    194805: [
      [27578]
    ],
    194806: [
      [27579]
    ],
    194807: [
      [146061]
    ],
    194808: [
      [138507]
    ],
    194809: [
      [146170]
    ],
    194810: [
      [27726]
    ],
    194811: [
      [146620]
    ],
    194812: [
      [27839]
    ],
    194813: [
      [27853]
    ],
    194814: [
      [27751]
    ],
    194815: [[27926]]
  },
  63744: {
    63744: [
      [35912]
    ],
    63745: [
      [26356]
    ],
    63746: [
      [36554]
    ],
    63747: [
      [36040]
    ],
    63748: [
      [28369]
    ],
    63749: [
      [20018]
    ],
    63750: [
      [21477]
    ],
    63751: [
      [40860]
    ],
    63752: [
      [40860]
    ],
    63753: [
      [22865]
    ],
    63754: [
      [37329]
    ],
    63755: [
      [21895]
    ],
    63756: [
      [22856]
    ],
    63757: [
      [25078]
    ],
    63758: [
      [30313]
    ],
    63759: [
      [32645]
    ],
    63760: [
      [34367]
    ],
    63761: [
      [34746]
    ],
    63762: [
      [35064]
    ],
    63763: [
      [37007]
    ],
    63764: [
      [27138]
    ],
    63765: [
      [27931]
    ],
    63766: [
      [28889]
    ],
    63767: [
      [29662]
    ],
    63768: [
      [33853]
    ],
    63769: [
      [37226]
    ],
    63770: [
      [39409]
    ],
    63771: [
      [20098]
    ],
    63772: [
      [21365]
    ],
    63773: [
      [27396]
    ],
    63774: [
      [29211]
    ],
    63775: [
      [34349]
    ],
    63776: [
      [40478]
    ],
    63777: [
      [23888]
    ],
    63778: [
      [28651]
    ],
    63779: [
      [34253]
    ],
    63780: [
      [35172]
    ],
    63781: [
      [25289]
    ],
    63782: [
      [33240]
    ],
    63783: [
      [34847]
    ],
    63784: [
      [24266]
    ],
    63785: [
      [26391]
    ],
    63786: [
      [28010]
    ],
    63787: [
      [29436]
    ],
    63788: [
      [37070]
    ],
    63789: [
      [20358]
    ],
    63790: [
      [20919]
    ],
    63791: [
      [21214]
    ],
    63792: [
      [25796]
    ],
    63793: [
      [27347]
    ],
    63794: [
      [29200]
    ],
    63795: [
      [30439]
    ],
    63796: [
      [32769]
    ],
    63797: [
      [34310]
    ],
    63798: [
      [34396]
    ],
    63799: [
      [36335]
    ],
    63800: [
      [38706]
    ],
    63801: [
      [39791]
    ],
    63802: [
      [40442]
    ],
    63803: [
      [30860]
    ],
    63804: [
      [31103]
    ],
    63805: [
      [32160]
    ],
    63806: [
      [33737]
    ],
    63807: [
      [37636]
    ],
    63808: [
      [40575]
    ],
    63809: [
      [35542]
    ],
    63810: [
      [22751]
    ],
    63811: [
      [24324]
    ],
    63812: [
      [31840]
    ],
    63813: [
      [32894]
    ],
    63814: [
      [29282]
    ],
    63815: [
      [30922]
    ],
    63816: [
      [36034]
    ],
    63817: [
      [38647]
    ],
    63818: [
      [22744]
    ],
    63819: [
      [23650]
    ],
    63820: [
      [27155]
    ],
    63821: [
      [28122]
    ],
    63822: [
      [28431]
    ],
    63823: [
      [32047]
    ],
    63824: [
      [32311]
    ],
    63825: [
      [38475]
    ],
    63826: [
      [21202]
    ],
    63827: [
      [32907]
    ],
    63828: [
      [20956]
    ],
    63829: [
      [20940]
    ],
    63830: [
      [31260]
    ],
    63831: [
      [32190]
    ],
    63832: [
      [33777]
    ],
    63833: [
      [38517]
    ],
    63834: [
      [35712]
    ],
    63835: [
      [25295]
    ],
    63836: [
      [27138]
    ],
    63837: [
      [35582]
    ],
    63838: [
      [20025]
    ],
    63839: [
      [23527]
    ],
    63840: [
      [24594]
    ],
    63841: [
      [29575]
    ],
    63842: [
      [30064]
    ],
    63843: [
      [21271]
    ],
    63844: [
      [30971]
    ],
    63845: [
      [20415]
    ],
    63846: [
      [24489]
    ],
    63847: [
      [19981]
    ],
    63848: [
      [27852]
    ],
    63849: [
      [25976]
    ],
    63850: [
      [32034]
    ],
    63851: [
      [21443]
    ],
    63852: [
      [22622]
    ],
    63853: [
      [30465]
    ],
    63854: [
      [33865]
    ],
    63855: [
      [35498]
    ],
    63856: [
      [27578]
    ],
    63857: [
      [36784]
    ],
    63858: [
      [27784]
    ],
    63859: [
      [25342]
    ],
    63860: [
      [33509]
    ],
    63861: [
      [25504]
    ],
    63862: [
      [30053]
    ],
    63863: [
      [20142]
    ],
    63864: [
      [20841]
    ],
    63865: [
      [20937]
    ],
    63866: [
      [26753]
    ],
    63867: [
      [31975]
    ],
    63868: [
      [33391]
    ],
    63869: [
      [35538]
    ],
    63870: [
      [37327]
    ],
    63871: [
      [21237]
    ],
    63872: [
      [21570]
    ],
    63873: [
      [22899]
    ],
    63874: [
      [24300]
    ],
    63875: [
      [26053]
    ],
    63876: [
      [28670]
    ],
    63877: [
      [31018]
    ],
    63878: [
      [38317]
    ],
    63879: [
      [39530]
    ],
    63880: [
      [40599]
    ],
    63881: [
      [40654]
    ],
    63882: [
      [21147]
    ],
    63883: [
      [26310]
    ],
    63884: [
      [27511]
    ],
    63885: [
      [36706]
    ],
    63886: [
      [24180]
    ],
    63887: [
      [24976]
    ],
    63888: [
      [25088]
    ],
    63889: [
      [25754]
    ],
    63890: [
      [28451]
    ],
    63891: [
      [29001]
    ],
    63892: [
      [29833]
    ],
    63893: [
      [31178]
    ],
    63894: [
      [32244]
    ],
    63895: [
      [32879]
    ],
    63896: [
      [36646]
    ],
    63897: [
      [34030]
    ],
    63898: [
      [36899]
    ],
    63899: [
      [37706]
    ],
    63900: [
      [21015]
    ],
    63901: [
      [21155]
    ],
    63902: [
      [21693]
    ],
    63903: [
      [28872]
    ],
    63904: [
      [35010]
    ],
    63905: [
      [35498]
    ],
    63906: [
      [24265]
    ],
    63907: [
      [24565]
    ],
    63908: [
      [25467]
    ],
    63909: [
      [27566]
    ],
    63910: [
      [31806]
    ],
    63911: [
      [29557]
    ],
    63912: [
      [20196]
    ],
    63913: [
      [22265]
    ],
    63914: [
      [23527]
    ],
    63915: [
      [23994]
    ],
    63916: [
      [24604]
    ],
    63917: [
      [29618]
    ],
    63918: [
      [29801]
    ],
    63919: [
      [32666]
    ],
    63920: [
      [32838]
    ],
    63921: [
      [37428]
    ],
    63922: [
      [38646]
    ],
    63923: [
      [38728]
    ],
    63924: [
      [38936]
    ],
    63925: [
      [20363]
    ],
    63926: [
      [31150]
    ],
    63927: [
      [37300]
    ],
    63928: [
      [38584]
    ],
    63929: [
      [24801]
    ],
    63930: [
      [20102]
    ],
    63931: [
      [20698]
    ],
    63932: [
      [23534]
    ],
    63933: [
      [23615]
    ],
    63934: [
      [26009]
    ],
    63935: [
      [27138]
    ],
    63936: [
      [29134]
    ],
    63937: [
      [30274]
    ],
    63938: [
      [34044]
    ],
    63939: [
      [36988]
    ],
    63940: [
      [40845]
    ],
    63941: [
      [26248]
    ],
    63942: [
      [38446]
    ],
    63943: [
      [21129]
    ],
    63944: [
      [26491]
    ],
    63945: [
      [26611]
    ],
    63946: [
      [27969]
    ],
    63947: [
      [28316]
    ],
    63948: [
      [29705]
    ],
    63949: [
      [30041]
    ],
    63950: [
      [30827]
    ],
    63951: [
      [32016]
    ],
    63952: [
      [39006]
    ],
    63953: [
      [20845]
    ],
    63954: [
      [25134]
    ],
    63955: [
      [38520]
    ],
    63956: [
      [20523]
    ],
    63957: [
      [23833]
    ],
    63958: [
      [28138]
    ],
    63959: [
      [36650]
    ],
    63960: [
      [24459]
    ],
    63961: [
      [24900]
    ],
    63962: [
      [26647]
    ],
    63963: [
      [29575]
    ],
    63964: [
      [38534]
    ],
    63965: [
      [21033]
    ],
    63966: [
      [21519]
    ],
    63967: [
      [23653]
    ],
    63968: [
      [26131]
    ],
    63969: [
      [26446]
    ],
    63970: [
      [26792]
    ],
    63971: [
      [27877]
    ],
    63972: [
      [29702]
    ],
    63973: [
      [30178]
    ],
    63974: [
      [32633]
    ],
    63975: [
      [35023]
    ],
    63976: [
      [35041]
    ],
    63977: [
      [37324]
    ],
    63978: [
      [38626]
    ],
    63979: [
      [21311]
    ],
    63980: [
      [28346]
    ],
    63981: [
      [21533]
    ],
    63982: [
      [29136]
    ],
    63983: [
      [29848]
    ],
    63984: [
      [34298]
    ],
    63985: [
      [38563]
    ],
    63986: [
      [40023]
    ],
    63987: [
      [40607]
    ],
    63988: [
      [26519]
    ],
    63989: [
      [28107]
    ],
    63990: [
      [33256]
    ],
    63991: [
      [31435]
    ],
    63992: [
      [31520]
    ],
    63993: [
      [31890]
    ],
    63994: [
      [29376]
    ],
    63995: [
      [28825]
    ],
    63996: [
      [35672]
    ],
    63997: [
      [20160]
    ],
    63998: [
      [33590]
    ],
    63999: [
      [21050]
    ],
    194816: [
      [27966]
    ],
    194817: [
      [28023]
    ],
    194818: [
      [27969]
    ],
    194819: [
      [28009]
    ],
    194820: [
      [28024]
    ],
    194821: [
      [28037]
    ],
    194822: [
      [146718]
    ],
    194823: [
      [27956]
    ],
    194824: [
      [28207]
    ],
    194825: [
      [28270]
    ],
    194826: [
      [15667]
    ],
    194827: [
      [28363]
    ],
    194828: [
      [28359]
    ],
    194829: [
      [147153]
    ],
    194830: [
      [28153]
    ],
    194831: [
      [28526]
    ],
    194832: [
      [147294]
    ],
    194833: [
      [147342]
    ],
    194834: [
      [28614]
    ],
    194835: [
      [28729]
    ],
    194836: [
      [28702]
    ],
    194837: [
      [28699]
    ],
    194838: [
      [15766]
    ],
    194839: [
      [28746]
    ],
    194840: [
      [28797]
    ],
    194841: [
      [28791]
    ],
    194842: [
      [28845]
    ],
    194843: [
      [132389]
    ],
    194844: [
      [28997]
    ],
    194845: [
      [148067]
    ],
    194846: [
      [29084]
    ],
    194847: [
      [148395]
    ],
    194848: [
      [29224]
    ],
    194849: [
      [29237]
    ],
    194850: [
      [29264]
    ],
    194851: [
      [149e3]
    ],
    194852: [
      [29312]
    ],
    194853: [
      [29333]
    ],
    194854: [
      [149301]
    ],
    194855: [
      [149524]
    ],
    194856: [
      [29562]
    ],
    194857: [
      [29579]
    ],
    194858: [
      [16044]
    ],
    194859: [
      [29605]
    ],
    194860: [
      [16056]
    ],
    194861: [
      [16056]
    ],
    194862: [
      [29767]
    ],
    194863: [
      [29788]
    ],
    194864: [
      [29809]
    ],
    194865: [
      [29829]
    ],
    194866: [
      [29898]
    ],
    194867: [
      [16155]
    ],
    194868: [
      [29988]
    ],
    194869: [
      [150582]
    ],
    194870: [
      [30014]
    ],
    194871: [
      [150674]
    ],
    194872: [
      [30064]
    ],
    194873: [
      [139679]
    ],
    194874: [
      [30224]
    ],
    194875: [
      [151457]
    ],
    194876: [
      [151480]
    ],
    194877: [
      [151620]
    ],
    194878: [
      [16380]
    ],
    194879: [
      [16392]
    ],
    194880: [
      [30452]
    ],
    194881: [
      [151795]
    ],
    194882: [
      [151794]
    ],
    194883: [
      [151833]
    ],
    194884: [
      [151859]
    ],
    194885: [
      [30494]
    ],
    194886: [
      [30495]
    ],
    194887: [
      [30495]
    ],
    194888: [
      [30538]
    ],
    194889: [
      [16441]
    ],
    194890: [
      [30603]
    ],
    194891: [
      [16454]
    ],
    194892: [
      [16534]
    ],
    194893: [
      [152605]
    ],
    194894: [
      [30798]
    ],
    194895: [
      [30860]
    ],
    194896: [
      [30924]
    ],
    194897: [
      [16611]
    ],
    194898: [
      [153126]
    ],
    194899: [
      [31062]
    ],
    194900: [
      [153242]
    ],
    194901: [
      [153285]
    ],
    194902: [
      [31119]
    ],
    194903: [
      [31211]
    ],
    194904: [
      [16687]
    ],
    194905: [
      [31296]
    ],
    194906: [
      [31306]
    ],
    194907: [
      [31311]
    ],
    194908: [
      [153980]
    ],
    194909: [
      [154279]
    ],
    194910: [
      [154279]
    ],
    194911: [
      [31470]
    ],
    194912: [
      [16898]
    ],
    194913: [
      [154539]
    ],
    194914: [
      [31686]
    ],
    194915: [
      [31689]
    ],
    194916: [
      [16935]
    ],
    194917: [
      [154752]
    ],
    194918: [
      [31954]
    ],
    194919: [
      [17056]
    ],
    194920: [
      [31976]
    ],
    194921: [
      [31971]
    ],
    194922: [
      [32e3]
    ],
    194923: [
      [155526]
    ],
    194924: [
      [32099]
    ],
    194925: [
      [17153]
    ],
    194926: [
      [32199]
    ],
    194927: [
      [32258]
    ],
    194928: [
      [32325]
    ],
    194929: [
      [17204]
    ],
    194930: [
      [156200]
    ],
    194931: [
      [156231]
    ],
    194932: [
      [17241]
    ],
    194933: [
      [156377]
    ],
    194934: [
      [32634]
    ],
    194935: [
      [156478]
    ],
    194936: [
      [32661]
    ],
    194937: [
      [32762]
    ],
    194938: [
      [32773]
    ],
    194939: [
      [156890]
    ],
    194940: [
      [156963]
    ],
    194941: [
      [32864]
    ],
    194942: [
      [157096]
    ],
    194943: [
      [32880]
    ],
    194944: [
      [144223]
    ],
    194945: [
      [17365]
    ],
    194946: [
      [32946]
    ],
    194947: [
      [33027]
    ],
    194948: [
      [17419]
    ],
    194949: [
      [33086]
    ],
    194950: [
      [23221]
    ],
    194951: [
      [157607]
    ],
    194952: [
      [157621]
    ],
    194953: [
      [144275]
    ],
    194954: [
      [144284]
    ],
    194955: [
      [33281]
    ],
    194956: [
      [33284]
    ],
    194957: [
      [36766]
    ],
    194958: [
      [17515]
    ],
    194959: [
      [33425]
    ],
    194960: [
      [33419]
    ],
    194961: [
      [33437]
    ],
    194962: [
      [21171]
    ],
    194963: [
      [33457]
    ],
    194964: [
      [33459]
    ],
    194965: [
      [33469]
    ],
    194966: [
      [33510]
    ],
    194967: [
      [158524]
    ],
    194968: [
      [33509]
    ],
    194969: [
      [33565]
    ],
    194970: [
      [33635]
    ],
    194971: [
      [33709]
    ],
    194972: [
      [33571]
    ],
    194973: [
      [33725]
    ],
    194974: [
      [33767]
    ],
    194975: [
      [33879]
    ],
    194976: [
      [33619]
    ],
    194977: [
      [33738]
    ],
    194978: [
      [33740]
    ],
    194979: [
      [33756]
    ],
    194980: [
      [158774]
    ],
    194981: [
      [159083]
    ],
    194982: [
      [158933]
    ],
    194983: [
      [17707]
    ],
    194984: [
      [34033]
    ],
    194985: [
      [34035]
    ],
    194986: [
      [34070]
    ],
    194987: [
      [160714]
    ],
    194988: [
      [34148]
    ],
    194989: [
      [159532]
    ],
    194990: [
      [17757]
    ],
    194991: [
      [17761]
    ],
    194992: [
      [159665]
    ],
    194993: [
      [159954]
    ],
    194994: [
      [17771]
    ],
    194995: [
      [34384]
    ],
    194996: [
      [34396]
    ],
    194997: [
      [34407]
    ],
    194998: [
      [34409]
    ],
    194999: [
      [34473]
    ],
    195e3: [
      [34440]
    ],
    195001: [
      [34574]
    ],
    195002: [
      [34530]
    ],
    195003: [
      [34681]
    ],
    195004: [
      [34600]
    ],
    195005: [
      [34667]
    ],
    195006: [
      [34694]
    ],
    195007: [
      [17879]
    ],
    195008: [
      [34785]
    ],
    195009: [
      [34817]
    ],
    195010: [
      [17913]
    ],
    195011: [
      [34912]
    ],
    195012: [
      [34915]
    ],
    195013: [
      [161383]
    ],
    195014: [
      [35031]
    ],
    195015: [
      [35038]
    ],
    195016: [
      [17973]
    ],
    195017: [
      [35066]
    ],
    195018: [
      [13499]
    ],
    195019: [
      [161966]
    ],
    195020: [
      [162150]
    ],
    195021: [
      [18110]
    ],
    195022: [
      [18119]
    ],
    195023: [
      [35488]
    ],
    195024: [
      [35565]
    ],
    195025: [
      [35722]
    ],
    195026: [
      [35925]
    ],
    195027: [
      [162984]
    ],
    195028: [
      [36011]
    ],
    195029: [
      [36033]
    ],
    195030: [
      [36123]
    ],
    195031: [
      [36215]
    ],
    195032: [
      [163631]
    ],
    195033: [
      [133124]
    ],
    195034: [
      [36299]
    ],
    195035: [
      [36284]
    ],
    195036: [
      [36336]
    ],
    195037: [
      [133342]
    ],
    195038: [
      [36564]
    ],
    195039: [
      [36664]
    ],
    195040: [
      [165330]
    ],
    195041: [
      [165357]
    ],
    195042: [
      [37012]
    ],
    195043: [
      [37105]
    ],
    195044: [
      [37137]
    ],
    195045: [
      [165678]
    ],
    195046: [
      [37147]
    ],
    195047: [
      [37432]
    ],
    195048: [
      [37591]
    ],
    195049: [
      [37592]
    ],
    195050: [
      [37500]
    ],
    195051: [
      [37881]
    ],
    195052: [
      [37909]
    ],
    195053: [
      [166906]
    ],
    195054: [
      [38283]
    ],
    195055: [
      [18837]
    ],
    195056: [
      [38327]
    ],
    195057: [
      [167287]
    ],
    195058: [
      [18918]
    ],
    195059: [
      [38595]
    ],
    195060: [
      [23986]
    ],
    195061: [
      [38691]
    ],
    195062: [
      [168261]
    ],
    195063: [
      [168474]
    ],
    195064: [
      [19054]
    ],
    195065: [
      [19062]
    ],
    195066: [
      [38880]
    ],
    195067: [
      [168970]
    ],
    195068: [
      [19122]
    ],
    195069: [
      [169110]
    ],
    195070: [
      [38923]
    ],
    195071: [[38923]]
  },
  64e3: {
    64e3: [
      [20999]
    ],
    64001: [
      [24230]
    ],
    64002: [
      [25299]
    ],
    64003: [
      [31958]
    ],
    64004: [
      [23429]
    ],
    64005: [
      [27934]
    ],
    64006: [
      [26292]
    ],
    64007: [
      [36667]
    ],
    64008: [
      [34892]
    ],
    64009: [
      [38477]
    ],
    64010: [
      [35211]
    ],
    64011: [
      [24275]
    ],
    64012: [
      [20800]
    ],
    64013: [
      [21952]
    ],
    64016: [
      [22618]
    ],
    64018: [
      [26228]
    ],
    64021: [
      [20958]
    ],
    64022: [
      [29482]
    ],
    64023: [
      [30410]
    ],
    64024: [
      [31036]
    ],
    64025: [
      [31070]
    ],
    64026: [
      [31077]
    ],
    64027: [
      [31119]
    ],
    64028: [
      [38742]
    ],
    64029: [
      [31934]
    ],
    64030: [
      [32701]
    ],
    64032: [
      [34322]
    ],
    64034: [
      [35576]
    ],
    64037: [
      [36920]
    ],
    64038: [
      [37117]
    ],
    64042: [
      [39151]
    ],
    64043: [
      [39164]
    ],
    64044: [
      [39208]
    ],
    64045: [
      [40372]
    ],
    64046: [
      [37086]
    ],
    64047: [
      [38583]
    ],
    64048: [
      [20398]
    ],
    64049: [
      [20711]
    ],
    64050: [
      [20813]
    ],
    64051: [
      [21193]
    ],
    64052: [
      [21220]
    ],
    64053: [
      [21329]
    ],
    64054: [
      [21917]
    ],
    64055: [
      [22022]
    ],
    64056: [
      [22120]
    ],
    64057: [
      [22592]
    ],
    64058: [
      [22696]
    ],
    64059: [
      [23652]
    ],
    64060: [
      [23662]
    ],
    64061: [
      [24724]
    ],
    64062: [
      [24936]
    ],
    64063: [
      [24974]
    ],
    64064: [
      [25074]
    ],
    64065: [
      [25935]
    ],
    64066: [
      [26082]
    ],
    64067: [
      [26257]
    ],
    64068: [
      [26757]
    ],
    64069: [
      [28023]
    ],
    64070: [
      [28186]
    ],
    64071: [
      [28450]
    ],
    64072: [
      [29038]
    ],
    64073: [
      [29227]
    ],
    64074: [
      [29730]
    ],
    64075: [
      [30865]
    ],
    64076: [
      [31038]
    ],
    64077: [
      [31049]
    ],
    64078: [
      [31048]
    ],
    64079: [
      [31056]
    ],
    64080: [
      [31062]
    ],
    64081: [
      [31069]
    ],
    64082: [
      [31117]
    ],
    64083: [
      [31118]
    ],
    64084: [
      [31296]
    ],
    64085: [
      [31361]
    ],
    64086: [
      [31680]
    ],
    64087: [
      [32244]
    ],
    64088: [
      [32265]
    ],
    64089: [
      [32321]
    ],
    64090: [
      [32626]
    ],
    64091: [
      [32773]
    ],
    64092: [
      [33261]
    ],
    64093: [
      [33401]
    ],
    64094: [
      [33401]
    ],
    64095: [
      [33879]
    ],
    64096: [
      [35088]
    ],
    64097: [
      [35222]
    ],
    64098: [
      [35585]
    ],
    64099: [
      [35641]
    ],
    64100: [
      [36051]
    ],
    64101: [
      [36104]
    ],
    64102: [
      [36790]
    ],
    64103: [
      [36920]
    ],
    64104: [
      [38627]
    ],
    64105: [
      [38911]
    ],
    64106: [
      [38971]
    ],
    64107: [
      [24693]
    ],
    64108: [
      [148206]
    ],
    64109: [
      [33304]
    ],
    64112: [
      [20006]
    ],
    64113: [
      [20917]
    ],
    64114: [
      [20840]
    ],
    64115: [
      [20352]
    ],
    64116: [
      [20805]
    ],
    64117: [
      [20864]
    ],
    64118: [
      [21191]
    ],
    64119: [
      [21242]
    ],
    64120: [
      [21917]
    ],
    64121: [
      [21845]
    ],
    64122: [
      [21913]
    ],
    64123: [
      [21986]
    ],
    64124: [
      [22618]
    ],
    64125: [
      [22707]
    ],
    64126: [
      [22852]
    ],
    64127: [
      [22868]
    ],
    64128: [
      [23138]
    ],
    64129: [
      [23336]
    ],
    64130: [
      [24274]
    ],
    64131: [
      [24281]
    ],
    64132: [
      [24425]
    ],
    64133: [
      [24493]
    ],
    64134: [
      [24792]
    ],
    64135: [
      [24910]
    ],
    64136: [
      [24840]
    ],
    64137: [
      [24974]
    ],
    64138: [
      [24928]
    ],
    64139: [
      [25074]
    ],
    64140: [
      [25140]
    ],
    64141: [
      [25540]
    ],
    64142: [
      [25628]
    ],
    64143: [
      [25682]
    ],
    64144: [
      [25942]
    ],
    64145: [
      [26228]
    ],
    64146: [
      [26391]
    ],
    64147: [
      [26395]
    ],
    64148: [
      [26454]
    ],
    64149: [
      [27513]
    ],
    64150: [
      [27578]
    ],
    64151: [
      [27969]
    ],
    64152: [
      [28379]
    ],
    64153: [
      [28363]
    ],
    64154: [
      [28450]
    ],
    64155: [
      [28702]
    ],
    64156: [
      [29038]
    ],
    64157: [
      [30631]
    ],
    64158: [
      [29237]
    ],
    64159: [
      [29359]
    ],
    64160: [
      [29482]
    ],
    64161: [
      [29809]
    ],
    64162: [
      [29958]
    ],
    64163: [
      [30011]
    ],
    64164: [
      [30237]
    ],
    64165: [
      [30239]
    ],
    64166: [
      [30410]
    ],
    64167: [
      [30427]
    ],
    64168: [
      [30452]
    ],
    64169: [
      [30538]
    ],
    64170: [
      [30528]
    ],
    64171: [
      [30924]
    ],
    64172: [
      [31409]
    ],
    64173: [
      [31680]
    ],
    64174: [
      [31867]
    ],
    64175: [
      [32091]
    ],
    64176: [
      [32244]
    ],
    64177: [
      [32574]
    ],
    64178: [
      [32773]
    ],
    64179: [
      [33618]
    ],
    64180: [
      [33775]
    ],
    64181: [
      [34681]
    ],
    64182: [
      [35137]
    ],
    64183: [
      [35206]
    ],
    64184: [
      [35222]
    ],
    64185: [
      [35519]
    ],
    64186: [
      [35576]
    ],
    64187: [
      [35531]
    ],
    64188: [
      [35585]
    ],
    64189: [
      [35582]
    ],
    64190: [
      [35565]
    ],
    64191: [
      [35641]
    ],
    64192: [
      [35722]
    ],
    64193: [
      [36104]
    ],
    64194: [
      [36664]
    ],
    64195: [
      [36978]
    ],
    64196: [
      [37273]
    ],
    64197: [
      [37494]
    ],
    64198: [
      [38524]
    ],
    64199: [
      [38627]
    ],
    64200: [
      [38742]
    ],
    64201: [
      [38875]
    ],
    64202: [
      [38911]
    ],
    64203: [
      [38923]
    ],
    64204: [
      [38971]
    ],
    64205: [
      [39698]
    ],
    64206: [
      [40860]
    ],
    64207: [
      [141386]
    ],
    64208: [
      [141380]
    ],
    64209: [
      [144341]
    ],
    64210: [
      [15261]
    ],
    64211: [
      [16408]
    ],
    64212: [
      [16441]
    ],
    64213: [
      [152137]
    ],
    64214: [
      [154832]
    ],
    64215: [
      [163539]
    ],
    64216: [
      [40771]
    ],
    64217: [
      [40846]
    ],
    195072: [
      [38953]
    ],
    195073: [
      [169398]
    ],
    195074: [
      [39138]
    ],
    195075: [
      [19251]
    ],
    195076: [
      [39209]
    ],
    195077: [
      [39335]
    ],
    195078: [
      [39362]
    ],
    195079: [
      [39422]
    ],
    195080: [
      [19406]
    ],
    195081: [
      [170800]
    ],
    195082: [
      [39698]
    ],
    195083: [
      [4e4]
    ],
    195084: [
      [40189]
    ],
    195085: [
      [19662]
    ],
    195086: [
      [19693]
    ],
    195087: [
      [40295]
    ],
    195088: [
      [172238]
    ],
    195089: [
      [19704]
    ],
    195090: [
      [172293]
    ],
    195091: [
      [172558]
    ],
    195092: [
      [172689]
    ],
    195093: [
      [40635]
    ],
    195094: [
      [19798]
    ],
    195095: [
      [40697]
    ],
    195096: [
      [40702]
    ],
    195097: [
      [40709]
    ],
    195098: [
      [40719]
    ],
    195099: [
      [40726]
    ],
    195100: [
      [40763]
    ],
    195101: [[173568]]
  },
  64256: {
    64256: [
      [
        102, 102
      ],
      256
    ],
    64257: [
      [
        102, 105
      ],
      256
    ],
    64258: [
      [
        102, 108
      ],
      256
    ],
    64259: [
      [
        102, 102, 105
      ],
      256
    ],
    64260: [
      [
        102, 102, 108
      ],
      256
    ],
    64261: [
      [
        383, 116
      ],
      256
    ],
    64262: [
      [
        115, 116
      ],
      256
    ],
    64275: [
      [
        1396, 1398
      ],
      256
    ],
    64276: [
      [
        1396, 1381
      ],
      256
    ],
    64277: [
      [
        1396, 1387
      ],
      256
    ],
    64278: [
      [
        1406, 1398
      ],
      256
    ],
    64279: [
      [
        1396, 1389
      ],
      256
    ],
    64285: [
      [
        1497, 1460
      ],
      512
    ],
    64286: [
      , 26
    ],
    64287: [
      [
        1522, 1463
      ],
      512
    ],
    64288: [
      [1506], 256
    ],
    64289: [
      [1488], 256
    ],
    64290: [
      [1491], 256
    ],
    64291: [
      [1492], 256
    ],
    64292: [
      [1499], 256
    ],
    64293: [
      [1500], 256
    ],
    64294: [
      [1501], 256
    ],
    64295: [
      [1512], 256
    ],
    64296: [
      [1514], 256
    ],
    64297: [
      [43], 256
    ],
    64298: [
      [
        1513, 1473
      ],
      512
    ],
    64299: [
      [
        1513, 1474
      ],
      512
    ],
    64300: [
      [
        64329, 1473
      ],
      512
    ],
    64301: [
      [
        64329, 1474
      ],
      512
    ],
    64302: [
      [
        1488, 1463
      ],
      512
    ],
    64303: [
      [
        1488, 1464
      ],
      512
    ],
    64304: [
      [
        1488, 1468
      ],
      512
    ],
    64305: [
      [
        1489, 1468
      ],
      512
    ],
    64306: [
      [
        1490, 1468
      ],
      512
    ],
    64307: [
      [
        1491, 1468
      ],
      512
    ],
    64308: [
      [
        1492, 1468
      ],
      512
    ],
    64309: [
      [
        1493, 1468
      ],
      512
    ],
    64310: [
      [
        1494, 1468
      ],
      512
    ],
    64312: [
      [
        1496, 1468
      ],
      512
    ],
    64313: [
      [
        1497, 1468
      ],
      512
    ],
    64314: [
      [
        1498, 1468
      ],
      512
    ],
    64315: [
      [
        1499, 1468
      ],
      512
    ],
    64316: [
      [
        1500, 1468
      ],
      512
    ],
    64318: [
      [
        1502, 1468
      ],
      512
    ],
    64320: [
      [
        1504, 1468
      ],
      512
    ],
    64321: [
      [
        1505, 1468
      ],
      512
    ],
    64323: [
      [
        1507, 1468
      ],
      512
    ],
    64324: [
      [
        1508, 1468
      ],
      512
    ],
    64326: [
      [
        1510, 1468
      ],
      512
    ],
    64327: [
      [
        1511, 1468
      ],
      512
    ],
    64328: [
      [
        1512, 1468
      ],
      512
    ],
    64329: [
      [
        1513, 1468
      ],
      512
    ],
    64330: [
      [
        1514, 1468
      ],
      512
    ],
    64331: [
      [
        1493, 1465
      ],
      512
    ],
    64332: [
      [
        1489, 1471
      ],
      512
    ],
    64333: [
      [
        1499, 1471
      ],
      512
    ],
    64334: [
      [
        1508, 1471
      ],
      512
    ],
    64335: [
      [
        1488, 1500
      ],
      256
    ],
    64336: [
      [1649], 256
    ],
    64337: [
      [1649], 256
    ],
    64338: [
      [1659], 256
    ],
    64339: [
      [1659], 256
    ],
    64340: [
      [1659], 256
    ],
    64341: [
      [1659], 256
    ],
    64342: [
      [1662], 256
    ],
    64343: [
      [1662], 256
    ],
    64344: [
      [1662], 256
    ],
    64345: [
      [1662], 256
    ],
    64346: [
      [1664], 256
    ],
    64347: [
      [1664], 256
    ],
    64348: [
      [1664], 256
    ],
    64349: [
      [1664], 256
    ],
    64350: [
      [1658], 256
    ],
    64351: [
      [1658], 256
    ],
    64352: [
      [1658], 256
    ],
    64353: [
      [1658], 256
    ],
    64354: [
      [1663], 256
    ],
    64355: [
      [1663], 256
    ],
    64356: [
      [1663], 256
    ],
    64357: [
      [1663], 256
    ],
    64358: [
      [1657], 256
    ],
    64359: [
      [1657], 256
    ],
    64360: [
      [1657], 256
    ],
    64361: [
      [1657], 256
    ],
    64362: [
      [1700], 256
    ],
    64363: [
      [1700], 256
    ],
    64364: [
      [1700], 256
    ],
    64365: [
      [1700], 256
    ],
    64366: [
      [1702], 256
    ],
    64367: [
      [1702], 256
    ],
    64368: [
      [1702], 256
    ],
    64369: [
      [1702], 256
    ],
    64370: [
      [1668], 256
    ],
    64371: [
      [1668], 256
    ],
    64372: [
      [1668], 256
    ],
    64373: [
      [1668], 256
    ],
    64374: [
      [1667], 256
    ],
    64375: [
      [1667], 256
    ],
    64376: [
      [1667], 256
    ],
    64377: [
      [1667], 256
    ],
    64378: [
      [1670], 256
    ],
    64379: [
      [1670], 256
    ],
    64380: [
      [1670], 256
    ],
    64381: [
      [1670], 256
    ],
    64382: [
      [1671], 256
    ],
    64383: [
      [1671], 256
    ],
    64384: [
      [1671], 256
    ],
    64385: [
      [1671], 256
    ],
    64386: [
      [1677], 256
    ],
    64387: [
      [1677], 256
    ],
    64388: [
      [1676], 256
    ],
    64389: [
      [1676], 256
    ],
    64390: [
      [1678], 256
    ],
    64391: [
      [1678], 256
    ],
    64392: [
      [1672], 256
    ],
    64393: [
      [1672], 256
    ],
    64394: [
      [1688], 256
    ],
    64395: [
      [1688], 256
    ],
    64396: [
      [1681], 256
    ],
    64397: [
      [1681], 256
    ],
    64398: [
      [1705], 256
    ],
    64399: [
      [1705], 256
    ],
    64400: [
      [1705], 256
    ],
    64401: [
      [1705], 256
    ],
    64402: [
      [1711], 256
    ],
    64403: [
      [1711], 256
    ],
    64404: [
      [1711], 256
    ],
    64405: [
      [1711], 256
    ],
    64406: [
      [1715], 256
    ],
    64407: [
      [1715], 256
    ],
    64408: [
      [1715], 256
    ],
    64409: [
      [1715], 256
    ],
    64410: [
      [1713], 256
    ],
    64411: [
      [1713], 256
    ],
    64412: [
      [1713], 256
    ],
    64413: [
      [1713], 256
    ],
    64414: [
      [1722], 256
    ],
    64415: [
      [1722], 256
    ],
    64416: [
      [1723], 256
    ],
    64417: [
      [1723], 256
    ],
    64418: [
      [1723], 256
    ],
    64419: [
      [1723], 256
    ],
    64420: [
      [1728], 256
    ],
    64421: [
      [1728], 256
    ],
    64422: [
      [1729], 256
    ],
    64423: [
      [1729], 256
    ],
    64424: [
      [1729], 256
    ],
    64425: [
      [1729], 256
    ],
    64426: [
      [1726], 256
    ],
    64427: [
      [1726], 256
    ],
    64428: [
      [1726], 256
    ],
    64429: [
      [1726], 256
    ],
    64430: [
      [1746], 256
    ],
    64431: [
      [1746], 256
    ],
    64432: [
      [1747], 256
    ],
    64433: [
      [1747], 256
    ],
    64467: [
      [1709], 256
    ],
    64468: [
      [1709], 256
    ],
    64469: [
      [1709], 256
    ],
    64470: [
      [1709], 256
    ],
    64471: [
      [1735], 256
    ],
    64472: [
      [1735], 256
    ],
    64473: [
      [1734], 256
    ],
    64474: [
      [1734], 256
    ],
    64475: [
      [1736], 256
    ],
    64476: [
      [1736], 256
    ],
    64477: [
      [1655], 256
    ],
    64478: [
      [1739], 256
    ],
    64479: [
      [1739], 256
    ],
    64480: [
      [1733], 256
    ],
    64481: [
      [1733], 256
    ],
    64482: [
      [1737], 256
    ],
    64483: [
      [1737], 256
    ],
    64484: [
      [1744], 256
    ],
    64485: [
      [1744], 256
    ],
    64486: [
      [1744], 256
    ],
    64487: [
      [1744], 256
    ],
    64488: [
      [1609], 256
    ],
    64489: [
      [1609], 256
    ],
    64490: [
      [
        1574, 1575
      ],
      256
    ],
    64491: [
      [
        1574, 1575
      ],
      256
    ],
    64492: [
      [
        1574, 1749
      ],
      256
    ],
    64493: [
      [
        1574, 1749
      ],
      256
    ],
    64494: [
      [
        1574, 1608
      ],
      256
    ],
    64495: [
      [
        1574, 1608
      ],
      256
    ],
    64496: [
      [
        1574, 1735
      ],
      256
    ],
    64497: [
      [
        1574, 1735
      ],
      256
    ],
    64498: [
      [
        1574, 1734
      ],
      256
    ],
    64499: [
      [
        1574, 1734
      ],
      256
    ],
    64500: [
      [
        1574, 1736
      ],
      256
    ],
    64501: [
      [
        1574, 1736
      ],
      256
    ],
    64502: [
      [
        1574, 1744
      ],
      256
    ],
    64503: [
      [
        1574, 1744
      ],
      256
    ],
    64504: [
      [
        1574, 1744
      ],
      256
    ],
    64505: [
      [
        1574, 1609
      ],
      256
    ],
    64506: [
      [
        1574, 1609
      ],
      256
    ],
    64507: [
      [
        1574, 1609
      ],
      256
    ],
    64508: [
      [1740], 256
    ],
    64509: [
      [1740], 256
    ],
    64510: [
      [1740], 256
    ],
    64511: [[1740], 256]
  },
  64512: {
    64512: [
      [
        1574, 1580
      ],
      256
    ],
    64513: [
      [
        1574, 1581
      ],
      256
    ],
    64514: [
      [
        1574, 1605
      ],
      256
    ],
    64515: [
      [
        1574, 1609
      ],
      256
    ],
    64516: [
      [
        1574, 1610
      ],
      256
    ],
    64517: [
      [
        1576, 1580
      ],
      256
    ],
    64518: [
      [
        1576, 1581
      ],
      256
    ],
    64519: [
      [
        1576, 1582
      ],
      256
    ],
    64520: [
      [
        1576, 1605
      ],
      256
    ],
    64521: [
      [
        1576, 1609
      ],
      256
    ],
    64522: [
      [
        1576, 1610
      ],
      256
    ],
    64523: [
      [
        1578, 1580
      ],
      256
    ],
    64524: [
      [
        1578, 1581
      ],
      256
    ],
    64525: [
      [
        1578, 1582
      ],
      256
    ],
    64526: [
      [
        1578, 1605
      ],
      256
    ],
    64527: [
      [
        1578, 1609
      ],
      256
    ],
    64528: [
      [
        1578, 1610
      ],
      256
    ],
    64529: [
      [
        1579, 1580
      ],
      256
    ],
    64530: [
      [
        1579, 1605
      ],
      256
    ],
    64531: [
      [
        1579, 1609
      ],
      256
    ],
    64532: [
      [
        1579, 1610
      ],
      256
    ],
    64533: [
      [
        1580, 1581
      ],
      256
    ],
    64534: [
      [
        1580, 1605
      ],
      256
    ],
    64535: [
      [
        1581, 1580
      ],
      256
    ],
    64536: [
      [
        1581, 1605
      ],
      256
    ],
    64537: [
      [
        1582, 1580
      ],
      256
    ],
    64538: [
      [
        1582, 1581
      ],
      256
    ],
    64539: [
      [
        1582, 1605
      ],
      256
    ],
    64540: [
      [
        1587, 1580
      ],
      256
    ],
    64541: [
      [
        1587, 1581
      ],
      256
    ],
    64542: [
      [
        1587, 1582
      ],
      256
    ],
    64543: [
      [
        1587, 1605
      ],
      256
    ],
    64544: [
      [
        1589, 1581
      ],
      256
    ],
    64545: [
      [
        1589, 1605
      ],
      256
    ],
    64546: [
      [
        1590, 1580
      ],
      256
    ],
    64547: [
      [
        1590, 1581
      ],
      256
    ],
    64548: [
      [
        1590, 1582
      ],
      256
    ],
    64549: [
      [
        1590, 1605
      ],
      256
    ],
    64550: [
      [
        1591, 1581
      ],
      256
    ],
    64551: [
      [
        1591, 1605
      ],
      256
    ],
    64552: [
      [
        1592, 1605
      ],
      256
    ],
    64553: [
      [
        1593, 1580
      ],
      256
    ],
    64554: [
      [
        1593, 1605
      ],
      256
    ],
    64555: [
      [
        1594, 1580
      ],
      256
    ],
    64556: [
      [
        1594, 1605
      ],
      256
    ],
    64557: [
      [
        1601, 1580
      ],
      256
    ],
    64558: [
      [
        1601, 1581
      ],
      256
    ],
    64559: [
      [
        1601, 1582
      ],
      256
    ],
    64560: [
      [
        1601, 1605
      ],
      256
    ],
    64561: [
      [
        1601, 1609
      ],
      256
    ],
    64562: [
      [
        1601, 1610
      ],
      256
    ],
    64563: [
      [
        1602, 1581
      ],
      256
    ],
    64564: [
      [
        1602, 1605
      ],
      256
    ],
    64565: [
      [
        1602, 1609
      ],
      256
    ],
    64566: [
      [
        1602, 1610
      ],
      256
    ],
    64567: [
      [
        1603, 1575
      ],
      256
    ],
    64568: [
      [
        1603, 1580
      ],
      256
    ],
    64569: [
      [
        1603, 1581
      ],
      256
    ],
    64570: [
      [
        1603, 1582
      ],
      256
    ],
    64571: [
      [
        1603, 1604
      ],
      256
    ],
    64572: [
      [
        1603, 1605
      ],
      256
    ],
    64573: [
      [
        1603, 1609
      ],
      256
    ],
    64574: [
      [
        1603, 1610
      ],
      256
    ],
    64575: [
      [
        1604, 1580
      ],
      256
    ],
    64576: [
      [
        1604, 1581
      ],
      256
    ],
    64577: [
      [
        1604, 1582
      ],
      256
    ],
    64578: [
      [
        1604, 1605
      ],
      256
    ],
    64579: [
      [
        1604, 1609
      ],
      256
    ],
    64580: [
      [
        1604, 1610
      ],
      256
    ],
    64581: [
      [
        1605, 1580
      ],
      256
    ],
    64582: [
      [
        1605, 1581
      ],
      256
    ],
    64583: [
      [
        1605, 1582
      ],
      256
    ],
    64584: [
      [
        1605, 1605
      ],
      256
    ],
    64585: [
      [
        1605, 1609
      ],
      256
    ],
    64586: [
      [
        1605, 1610
      ],
      256
    ],
    64587: [
      [
        1606, 1580
      ],
      256
    ],
    64588: [
      [
        1606, 1581
      ],
      256
    ],
    64589: [
      [
        1606, 1582
      ],
      256
    ],
    64590: [
      [
        1606, 1605
      ],
      256
    ],
    64591: [
      [
        1606, 1609
      ],
      256
    ],
    64592: [
      [
        1606, 1610
      ],
      256
    ],
    64593: [
      [
        1607, 1580
      ],
      256
    ],
    64594: [
      [
        1607, 1605
      ],
      256
    ],
    64595: [
      [
        1607, 1609
      ],
      256
    ],
    64596: [
      [
        1607, 1610
      ],
      256
    ],
    64597: [
      [
        1610, 1580
      ],
      256
    ],
    64598: [
      [
        1610, 1581
      ],
      256
    ],
    64599: [
      [
        1610, 1582
      ],
      256
    ],
    64600: [
      [
        1610, 1605
      ],
      256
    ],
    64601: [
      [
        1610, 1609
      ],
      256
    ],
    64602: [
      [
        1610, 1610
      ],
      256
    ],
    64603: [
      [
        1584, 1648
      ],
      256
    ],
    64604: [
      [
        1585, 1648
      ],
      256
    ],
    64605: [
      [
        1609, 1648
      ],
      256
    ],
    64606: [
      [
        32, 1612, 1617
      ],
      256
    ],
    64607: [
      [
        32, 1613, 1617
      ],
      256
    ],
    64608: [
      [
        32, 1614, 1617
      ],
      256
    ],
    64609: [
      [
        32, 1615, 1617
      ],
      256
    ],
    64610: [
      [
        32, 1616, 1617
      ],
      256
    ],
    64611: [
      [
        32, 1617, 1648
      ],
      256
    ],
    64612: [
      [
        1574, 1585
      ],
      256
    ],
    64613: [
      [
        1574, 1586
      ],
      256
    ],
    64614: [
      [
        1574, 1605
      ],
      256
    ],
    64615: [
      [
        1574, 1606
      ],
      256
    ],
    64616: [
      [
        1574, 1609
      ],
      256
    ],
    64617: [
      [
        1574, 1610
      ],
      256
    ],
    64618: [
      [
        1576, 1585
      ],
      256
    ],
    64619: [
      [
        1576, 1586
      ],
      256
    ],
    64620: [
      [
        1576, 1605
      ],
      256
    ],
    64621: [
      [
        1576, 1606
      ],
      256
    ],
    64622: [
      [
        1576, 1609
      ],
      256
    ],
    64623: [
      [
        1576, 1610
      ],
      256
    ],
    64624: [
      [
        1578, 1585
      ],
      256
    ],
    64625: [
      [
        1578, 1586
      ],
      256
    ],
    64626: [
      [
        1578, 1605
      ],
      256
    ],
    64627: [
      [
        1578, 1606
      ],
      256
    ],
    64628: [
      [
        1578, 1609
      ],
      256
    ],
    64629: [
      [
        1578, 1610
      ],
      256
    ],
    64630: [
      [
        1579, 1585
      ],
      256
    ],
    64631: [
      [
        1579, 1586
      ],
      256
    ],
    64632: [
      [
        1579, 1605
      ],
      256
    ],
    64633: [
      [
        1579, 1606
      ],
      256
    ],
    64634: [
      [
        1579, 1609
      ],
      256
    ],
    64635: [
      [
        1579, 1610
      ],
      256
    ],
    64636: [
      [
        1601, 1609
      ],
      256
    ],
    64637: [
      [
        1601, 1610
      ],
      256
    ],
    64638: [
      [
        1602, 1609
      ],
      256
    ],
    64639: [
      [
        1602, 1610
      ],
      256
    ],
    64640: [
      [
        1603, 1575
      ],
      256
    ],
    64641: [
      [
        1603, 1604
      ],
      256
    ],
    64642: [
      [
        1603, 1605
      ],
      256
    ],
    64643: [
      [
        1603, 1609
      ],
      256
    ],
    64644: [
      [
        1603, 1610
      ],
      256
    ],
    64645: [
      [
        1604, 1605
      ],
      256
    ],
    64646: [
      [
        1604, 1609
      ],
      256
    ],
    64647: [
      [
        1604, 1610
      ],
      256
    ],
    64648: [
      [
        1605, 1575
      ],
      256
    ],
    64649: [
      [
        1605, 1605
      ],
      256
    ],
    64650: [
      [
        1606, 1585
      ],
      256
    ],
    64651: [
      [
        1606, 1586
      ],
      256
    ],
    64652: [
      [
        1606, 1605
      ],
      256
    ],
    64653: [
      [
        1606, 1606
      ],
      256
    ],
    64654: [
      [
        1606, 1609
      ],
      256
    ],
    64655: [
      [
        1606, 1610
      ],
      256
    ],
    64656: [
      [
        1609, 1648
      ],
      256
    ],
    64657: [
      [
        1610, 1585
      ],
      256
    ],
    64658: [
      [
        1610, 1586
      ],
      256
    ],
    64659: [
      [
        1610, 1605
      ],
      256
    ],
    64660: [
      [
        1610, 1606
      ],
      256
    ],
    64661: [
      [
        1610, 1609
      ],
      256
    ],
    64662: [
      [
        1610, 1610
      ],
      256
    ],
    64663: [
      [
        1574, 1580
      ],
      256
    ],
    64664: [
      [
        1574, 1581
      ],
      256
    ],
    64665: [
      [
        1574, 1582
      ],
      256
    ],
    64666: [
      [
        1574, 1605
      ],
      256
    ],
    64667: [
      [
        1574, 1607
      ],
      256
    ],
    64668: [
      [
        1576, 1580
      ],
      256
    ],
    64669: [
      [
        1576, 1581
      ],
      256
    ],
    64670: [
      [
        1576, 1582
      ],
      256
    ],
    64671: [
      [
        1576, 1605
      ],
      256
    ],
    64672: [
      [
        1576, 1607
      ],
      256
    ],
    64673: [
      [
        1578, 1580
      ],
      256
    ],
    64674: [
      [
        1578, 1581
      ],
      256
    ],
    64675: [
      [
        1578, 1582
      ],
      256
    ],
    64676: [
      [
        1578, 1605
      ],
      256
    ],
    64677: [
      [
        1578, 1607
      ],
      256
    ],
    64678: [
      [
        1579, 1605
      ],
      256
    ],
    64679: [
      [
        1580, 1581
      ],
      256
    ],
    64680: [
      [
        1580, 1605
      ],
      256
    ],
    64681: [
      [
        1581, 1580
      ],
      256
    ],
    64682: [
      [
        1581, 1605
      ],
      256
    ],
    64683: [
      [
        1582, 1580
      ],
      256
    ],
    64684: [
      [
        1582, 1605
      ],
      256
    ],
    64685: [
      [
        1587, 1580
      ],
      256
    ],
    64686: [
      [
        1587, 1581
      ],
      256
    ],
    64687: [
      [
        1587, 1582
      ],
      256
    ],
    64688: [
      [
        1587, 1605
      ],
      256
    ],
    64689: [
      [
        1589, 1581
      ],
      256
    ],
    64690: [
      [
        1589, 1582
      ],
      256
    ],
    64691: [
      [
        1589, 1605
      ],
      256
    ],
    64692: [
      [
        1590, 1580
      ],
      256
    ],
    64693: [
      [
        1590, 1581
      ],
      256
    ],
    64694: [
      [
        1590, 1582
      ],
      256
    ],
    64695: [
      [
        1590, 1605
      ],
      256
    ],
    64696: [
      [
        1591, 1581
      ],
      256
    ],
    64697: [
      [
        1592, 1605
      ],
      256
    ],
    64698: [
      [
        1593, 1580
      ],
      256
    ],
    64699: [
      [
        1593, 1605
      ],
      256
    ],
    64700: [
      [
        1594, 1580
      ],
      256
    ],
    64701: [
      [
        1594, 1605
      ],
      256
    ],
    64702: [
      [
        1601, 1580
      ],
      256
    ],
    64703: [
      [
        1601, 1581
      ],
      256
    ],
    64704: [
      [
        1601, 1582
      ],
      256
    ],
    64705: [
      [
        1601, 1605
      ],
      256
    ],
    64706: [
      [
        1602, 1581
      ],
      256
    ],
    64707: [
      [
        1602, 1605
      ],
      256
    ],
    64708: [
      [
        1603, 1580
      ],
      256
    ],
    64709: [
      [
        1603, 1581
      ],
      256
    ],
    64710: [
      [
        1603, 1582
      ],
      256
    ],
    64711: [
      [
        1603, 1604
      ],
      256
    ],
    64712: [
      [
        1603, 1605
      ],
      256
    ],
    64713: [
      [
        1604, 1580
      ],
      256
    ],
    64714: [
      [
        1604, 1581
      ],
      256
    ],
    64715: [
      [
        1604, 1582
      ],
      256
    ],
    64716: [
      [
        1604, 1605
      ],
      256
    ],
    64717: [
      [
        1604, 1607
      ],
      256
    ],
    64718: [
      [
        1605, 1580
      ],
      256
    ],
    64719: [
      [
        1605, 1581
      ],
      256
    ],
    64720: [
      [
        1605, 1582
      ],
      256
    ],
    64721: [
      [
        1605, 1605
      ],
      256
    ],
    64722: [
      [
        1606, 1580
      ],
      256
    ],
    64723: [
      [
        1606, 1581
      ],
      256
    ],
    64724: [
      [
        1606, 1582
      ],
      256
    ],
    64725: [
      [
        1606, 1605
      ],
      256
    ],
    64726: [
      [
        1606, 1607
      ],
      256
    ],
    64727: [
      [
        1607, 1580
      ],
      256
    ],
    64728: [
      [
        1607, 1605
      ],
      256
    ],
    64729: [
      [
        1607, 1648
      ],
      256
    ],
    64730: [
      [
        1610, 1580
      ],
      256
    ],
    64731: [
      [
        1610, 1581
      ],
      256
    ],
    64732: [
      [
        1610, 1582
      ],
      256
    ],
    64733: [
      [
        1610, 1605
      ],
      256
    ],
    64734: [
      [
        1610, 1607
      ],
      256
    ],
    64735: [
      [
        1574, 1605
      ],
      256
    ],
    64736: [
      [
        1574, 1607
      ],
      256
    ],
    64737: [
      [
        1576, 1605
      ],
      256
    ],
    64738: [
      [
        1576, 1607
      ],
      256
    ],
    64739: [
      [
        1578, 1605
      ],
      256
    ],
    64740: [
      [
        1578, 1607
      ],
      256
    ],
    64741: [
      [
        1579, 1605
      ],
      256
    ],
    64742: [
      [
        1579, 1607
      ],
      256
    ],
    64743: [
      [
        1587, 1605
      ],
      256
    ],
    64744: [
      [
        1587, 1607
      ],
      256
    ],
    64745: [
      [
        1588, 1605
      ],
      256
    ],
    64746: [
      [
        1588, 1607
      ],
      256
    ],
    64747: [
      [
        1603, 1604
      ],
      256
    ],
    64748: [
      [
        1603, 1605
      ],
      256
    ],
    64749: [
      [
        1604, 1605
      ],
      256
    ],
    64750: [
      [
        1606, 1605
      ],
      256
    ],
    64751: [
      [
        1606, 1607
      ],
      256
    ],
    64752: [
      [
        1610, 1605
      ],
      256
    ],
    64753: [
      [
        1610, 1607
      ],
      256
    ],
    64754: [
      [
        1600, 1614, 1617
      ],
      256
    ],
    64755: [
      [
        1600, 1615, 1617
      ],
      256
    ],
    64756: [
      [
        1600, 1616, 1617
      ],
      256
    ],
    64757: [
      [
        1591, 1609
      ],
      256
    ],
    64758: [
      [
        1591, 1610
      ],
      256
    ],
    64759: [
      [
        1593, 1609
      ],
      256
    ],
    64760: [
      [
        1593, 1610
      ],
      256
    ],
    64761: [
      [
        1594, 1609
      ],
      256
    ],
    64762: [
      [
        1594, 1610
      ],
      256
    ],
    64763: [
      [
        1587, 1609
      ],
      256
    ],
    64764: [
      [
        1587, 1610
      ],
      256
    ],
    64765: [
      [
        1588, 1609
      ],
      256
    ],
    64766: [
      [
        1588, 1610
      ],
      256
    ],
    64767: [
      [
        1581, 1609
      ],
      256
    ]
  },
  64768: {
    64768: [
      [
        1581, 1610
      ],
      256
    ],
    64769: [
      [
        1580, 1609
      ],
      256
    ],
    64770: [
      [
        1580, 1610
      ],
      256
    ],
    64771: [
      [
        1582, 1609
      ],
      256
    ],
    64772: [
      [
        1582, 1610
      ],
      256
    ],
    64773: [
      [
        1589, 1609
      ],
      256
    ],
    64774: [
      [
        1589, 1610
      ],
      256
    ],
    64775: [
      [
        1590, 1609
      ],
      256
    ],
    64776: [
      [
        1590, 1610
      ],
      256
    ],
    64777: [
      [
        1588, 1580
      ],
      256
    ],
    64778: [
      [
        1588, 1581
      ],
      256
    ],
    64779: [
      [
        1588, 1582
      ],
      256
    ],
    64780: [
      [
        1588, 1605
      ],
      256
    ],
    64781: [
      [
        1588, 1585
      ],
      256
    ],
    64782: [
      [
        1587, 1585
      ],
      256
    ],
    64783: [
      [
        1589, 1585
      ],
      256
    ],
    64784: [
      [
        1590, 1585
      ],
      256
    ],
    64785: [
      [
        1591, 1609
      ],
      256
    ],
    64786: [
      [
        1591, 1610
      ],
      256
    ],
    64787: [
      [
        1593, 1609
      ],
      256
    ],
    64788: [
      [
        1593, 1610
      ],
      256
    ],
    64789: [
      [
        1594, 1609
      ],
      256
    ],
    64790: [
      [
        1594, 1610
      ],
      256
    ],
    64791: [
      [
        1587, 1609
      ],
      256
    ],
    64792: [
      [
        1587, 1610
      ],
      256
    ],
    64793: [
      [
        1588, 1609
      ],
      256
    ],
    64794: [
      [
        1588, 1610
      ],
      256
    ],
    64795: [
      [
        1581, 1609
      ],
      256
    ],
    64796: [
      [
        1581, 1610
      ],
      256
    ],
    64797: [
      [
        1580, 1609
      ],
      256
    ],
    64798: [
      [
        1580, 1610
      ],
      256
    ],
    64799: [
      [
        1582, 1609
      ],
      256
    ],
    64800: [
      [
        1582, 1610
      ],
      256
    ],
    64801: [
      [
        1589, 1609
      ],
      256
    ],
    64802: [
      [
        1589, 1610
      ],
      256
    ],
    64803: [
      [
        1590, 1609
      ],
      256
    ],
    64804: [
      [
        1590, 1610
      ],
      256
    ],
    64805: [
      [
        1588, 1580
      ],
      256
    ],
    64806: [
      [
        1588, 1581
      ],
      256
    ],
    64807: [
      [
        1588, 1582
      ],
      256
    ],
    64808: [
      [
        1588, 1605
      ],
      256
    ],
    64809: [
      [
        1588, 1585
      ],
      256
    ],
    64810: [
      [
        1587, 1585
      ],
      256
    ],
    64811: [
      [
        1589, 1585
      ],
      256
    ],
    64812: [
      [
        1590, 1585
      ],
      256
    ],
    64813: [
      [
        1588, 1580
      ],
      256
    ],
    64814: [
      [
        1588, 1581
      ],
      256
    ],
    64815: [
      [
        1588, 1582
      ],
      256
    ],
    64816: [
      [
        1588, 1605
      ],
      256
    ],
    64817: [
      [
        1587, 1607
      ],
      256
    ],
    64818: [
      [
        1588, 1607
      ],
      256
    ],
    64819: [
      [
        1591, 1605
      ],
      256
    ],
    64820: [
      [
        1587, 1580
      ],
      256
    ],
    64821: [
      [
        1587, 1581
      ],
      256
    ],
    64822: [
      [
        1587, 1582
      ],
      256
    ],
    64823: [
      [
        1588, 1580
      ],
      256
    ],
    64824: [
      [
        1588, 1581
      ],
      256
    ],
    64825: [
      [
        1588, 1582
      ],
      256
    ],
    64826: [
      [
        1591, 1605
      ],
      256
    ],
    64827: [
      [
        1592, 1605
      ],
      256
    ],
    64828: [
      [
        1575, 1611
      ],
      256
    ],
    64829: [
      [
        1575, 1611
      ],
      256
    ],
    64848: [
      [
        1578, 1580, 1605
      ],
      256
    ],
    64849: [
      [
        1578, 1581, 1580
      ],
      256
    ],
    64850: [
      [
        1578, 1581, 1580
      ],
      256
    ],
    64851: [
      [
        1578, 1581, 1605
      ],
      256
    ],
    64852: [
      [
        1578, 1582, 1605
      ],
      256
    ],
    64853: [
      [
        1578, 1605, 1580
      ],
      256
    ],
    64854: [
      [
        1578, 1605, 1581
      ],
      256
    ],
    64855: [
      [
        1578, 1605, 1582
      ],
      256
    ],
    64856: [
      [
        1580, 1605, 1581
      ],
      256
    ],
    64857: [
      [
        1580, 1605, 1581
      ],
      256
    ],
    64858: [
      [
        1581, 1605, 1610
      ],
      256
    ],
    64859: [
      [
        1581, 1605, 1609
      ],
      256
    ],
    64860: [
      [
        1587, 1581, 1580
      ],
      256
    ],
    64861: [
      [
        1587, 1580, 1581
      ],
      256
    ],
    64862: [
      [
        1587, 1580, 1609
      ],
      256
    ],
    64863: [
      [
        1587, 1605, 1581
      ],
      256
    ],
    64864: [
      [
        1587, 1605, 1581
      ],
      256
    ],
    64865: [
      [
        1587, 1605, 1580
      ],
      256
    ],
    64866: [
      [
        1587, 1605, 1605
      ],
      256
    ],
    64867: [
      [
        1587, 1605, 1605
      ],
      256
    ],
    64868: [
      [
        1589, 1581, 1581
      ],
      256
    ],
    64869: [
      [
        1589, 1581, 1581
      ],
      256
    ],
    64870: [
      [
        1589, 1605, 1605
      ],
      256
    ],
    64871: [
      [
        1588, 1581, 1605
      ],
      256
    ],
    64872: [
      [
        1588, 1581, 1605
      ],
      256
    ],
    64873: [
      [
        1588, 1580, 1610
      ],
      256
    ],
    64874: [
      [
        1588, 1605, 1582
      ],
      256
    ],
    64875: [
      [
        1588, 1605, 1582
      ],
      256
    ],
    64876: [
      [
        1588, 1605, 1605
      ],
      256
    ],
    64877: [
      [
        1588, 1605, 1605
      ],
      256
    ],
    64878: [
      [
        1590, 1581, 1609
      ],
      256
    ],
    64879: [
      [
        1590, 1582, 1605
      ],
      256
    ],
    64880: [
      [
        1590, 1582, 1605
      ],
      256
    ],
    64881: [
      [
        1591, 1605, 1581
      ],
      256
    ],
    64882: [
      [
        1591, 1605, 1581
      ],
      256
    ],
    64883: [
      [
        1591, 1605, 1605
      ],
      256
    ],
    64884: [
      [
        1591, 1605, 1610
      ],
      256
    ],
    64885: [
      [
        1593, 1580, 1605
      ],
      256
    ],
    64886: [
      [
        1593, 1605, 1605
      ],
      256
    ],
    64887: [
      [
        1593, 1605, 1605
      ],
      256
    ],
    64888: [
      [
        1593, 1605, 1609
      ],
      256
    ],
    64889: [
      [
        1594, 1605, 1605
      ],
      256
    ],
    64890: [
      [
        1594, 1605, 1610
      ],
      256
    ],
    64891: [
      [
        1594, 1605, 1609
      ],
      256
    ],
    64892: [
      [
        1601, 1582, 1605
      ],
      256
    ],
    64893: [
      [
        1601, 1582, 1605
      ],
      256
    ],
    64894: [
      [
        1602, 1605, 1581
      ],
      256
    ],
    64895: [
      [
        1602, 1605, 1605
      ],
      256
    ],
    64896: [
      [
        1604, 1581, 1605
      ],
      256
    ],
    64897: [
      [
        1604, 1581, 1610
      ],
      256
    ],
    64898: [
      [
        1604, 1581, 1609
      ],
      256
    ],
    64899: [
      [
        1604, 1580, 1580
      ],
      256
    ],
    64900: [
      [
        1604, 1580, 1580
      ],
      256
    ],
    64901: [
      [
        1604, 1582, 1605
      ],
      256
    ],
    64902: [
      [
        1604, 1582, 1605
      ],
      256
    ],
    64903: [
      [
        1604, 1605, 1581
      ],
      256
    ],
    64904: [
      [
        1604, 1605, 1581
      ],
      256
    ],
    64905: [
      [
        1605, 1581, 1580
      ],
      256
    ],
    64906: [
      [
        1605, 1581, 1605
      ],
      256
    ],
    64907: [
      [
        1605, 1581, 1610
      ],
      256
    ],
    64908: [
      [
        1605, 1580, 1581
      ],
      256
    ],
    64909: [
      [
        1605, 1580, 1605
      ],
      256
    ],
    64910: [
      [
        1605, 1582, 1580
      ],
      256
    ],
    64911: [
      [
        1605, 1582, 1605
      ],
      256
    ],
    64914: [
      [
        1605, 1580, 1582
      ],
      256
    ],
    64915: [
      [
        1607, 1605, 1580
      ],
      256
    ],
    64916: [
      [
        1607, 1605, 1605
      ],
      256
    ],
    64917: [
      [
        1606, 1581, 1605
      ],
      256
    ],
    64918: [
      [
        1606, 1581, 1609
      ],
      256
    ],
    64919: [
      [
        1606, 1580, 1605
      ],
      256
    ],
    64920: [
      [
        1606, 1580, 1605
      ],
      256
    ],
    64921: [
      [
        1606, 1580, 1609
      ],
      256
    ],
    64922: [
      [
        1606, 1605, 1610
      ],
      256
    ],
    64923: [
      [
        1606, 1605, 1609
      ],
      256
    ],
    64924: [
      [
        1610, 1605, 1605
      ],
      256
    ],
    64925: [
      [
        1610, 1605, 1605
      ],
      256
    ],
    64926: [
      [
        1576, 1582, 1610
      ],
      256
    ],
    64927: [
      [
        1578, 1580, 1610
      ],
      256
    ],
    64928: [
      [
        1578, 1580, 1609
      ],
      256
    ],
    64929: [
      [
        1578, 1582, 1610
      ],
      256
    ],
    64930: [
      [
        1578, 1582, 1609
      ],
      256
    ],
    64931: [
      [
        1578, 1605, 1610
      ],
      256
    ],
    64932: [
      [
        1578, 1605, 1609
      ],
      256
    ],
    64933: [
      [
        1580, 1605, 1610
      ],
      256
    ],
    64934: [
      [
        1580, 1581, 1609
      ],
      256
    ],
    64935: [
      [
        1580, 1605, 1609
      ],
      256
    ],
    64936: [
      [
        1587, 1582, 1609
      ],
      256
    ],
    64937: [
      [
        1589, 1581, 1610
      ],
      256
    ],
    64938: [
      [
        1588, 1581, 1610
      ],
      256
    ],
    64939: [
      [
        1590, 1581, 1610
      ],
      256
    ],
    64940: [
      [
        1604, 1580, 1610
      ],
      256
    ],
    64941: [
      [
        1604, 1605, 1610
      ],
      256
    ],
    64942: [
      [
        1610, 1581, 1610
      ],
      256
    ],
    64943: [
      [
        1610, 1580, 1610
      ],
      256
    ],
    64944: [
      [
        1610, 1605, 1610
      ],
      256
    ],
    64945: [
      [
        1605, 1605, 1610
      ],
      256
    ],
    64946: [
      [
        1602, 1605, 1610
      ],
      256
    ],
    64947: [
      [
        1606, 1581, 1610
      ],
      256
    ],
    64948: [
      [
        1602, 1605, 1581
      ],
      256
    ],
    64949: [
      [
        1604, 1581, 1605
      ],
      256
    ],
    64950: [
      [
        1593, 1605, 1610
      ],
      256
    ],
    64951: [
      [
        1603, 1605, 1610
      ],
      256
    ],
    64952: [
      [
        1606, 1580, 1581
      ],
      256
    ],
    64953: [
      [
        1605, 1582, 1610
      ],
      256
    ],
    64954: [
      [
        1604, 1580, 1605
      ],
      256
    ],
    64955: [
      [
        1603, 1605, 1605
      ],
      256
    ],
    64956: [
      [
        1604, 1580, 1605
      ],
      256
    ],
    64957: [
      [
        1606, 1580, 1581
      ],
      256
    ],
    64958: [
      [
        1580, 1581, 1610
      ],
      256
    ],
    64959: [
      [
        1581, 1580, 1610
      ],
      256
    ],
    64960: [
      [
        1605, 1580, 1610
      ],
      256
    ],
    64961: [
      [
        1601, 1605, 1610
      ],
      256
    ],
    64962: [
      [
        1576, 1581, 1610
      ],
      256
    ],
    64963: [
      [
        1603, 1605, 1605
      ],
      256
    ],
    64964: [
      [
        1593, 1580, 1605
      ],
      256
    ],
    64965: [
      [
        1589, 1605, 1605
      ],
      256
    ],
    64966: [
      [
        1587, 1582, 1610
      ],
      256
    ],
    64967: [
      [
        1606, 1580, 1610
      ],
      256
    ],
    65008: [
      [
        1589, 1604, 1746
      ],
      256
    ],
    65009: [
      [
        1602, 1604, 1746
      ],
      256
    ],
    65010: [
      [
        1575, 1604, 1604, 1607
      ],
      256
    ],
    65011: [
      [
        1575, 1603, 1576, 1585
      ],
      256
    ],
    65012: [
      [
        1605, 1581, 1605, 1583
      ],
      256
    ],
    65013: [
      [
        1589, 1604, 1593, 1605
      ],
      256
    ],
    65014: [
      [
        1585, 1587, 1608, 1604
      ],
      256
    ],
    65015: [
      [
        1593, 1604, 1610, 1607
      ],
      256
    ],
    65016: [
      [
        1608, 1587, 1604, 1605
      ],
      256
    ],
    65017: [
      [
        1589, 1604, 1609
      ],
      256
    ],
    65018: [
      [
        1589,
        1604,
        1609,
        32,
        1575,
        1604,
        1604,
        1607,
        32,
        1593,
        1604,
        1610,
        1607,
        32,
        1608,
        1587,
        1604,
        1605
      ],
      256
    ],
    65019: [
      [
        1580,
        1604,
        32,
        1580,
        1604,
        1575,
        1604,
        1607
      ],
      256
    ],
    65020: [
      [
        1585, 1740, 1575, 1604
      ],
      256
    ]
  },
  65024: {
    65040: [
      [44], 256
    ],
    65041: [
      [12289], 256
    ],
    65042: [
      [12290], 256
    ],
    65043: [
      [58], 256
    ],
    65044: [
      [59], 256
    ],
    65045: [
      [33], 256
    ],
    65046: [
      [63], 256
    ],
    65047: [
      [12310], 256
    ],
    65048: [
      [12311], 256
    ],
    65049: [
      [8230], 256
    ],
    65056: [
      , 230
    ],
    65057: [
      , 230
    ],
    65058: [
      , 230
    ],
    65059: [
      , 230
    ],
    65060: [
      , 230
    ],
    65061: [
      , 230
    ],
    65062: [
      , 230
    ],
    65063: [
      , 220
    ],
    65064: [
      , 220
    ],
    65065: [
      , 220
    ],
    65066: [
      , 220
    ],
    65067: [
      , 220
    ],
    65068: [
      , 220
    ],
    65069: [
      , 220
    ],
    65072: [
      [8229], 256
    ],
    65073: [
      [8212], 256
    ],
    65074: [
      [8211], 256
    ],
    65075: [
      [95], 256
    ],
    65076: [
      [95], 256
    ],
    65077: [
      [40], 256
    ],
    65078: [
      [41], 256
    ],
    65079: [
      [123], 256
    ],
    65080: [
      [125], 256
    ],
    65081: [
      [12308], 256
    ],
    65082: [
      [12309], 256
    ],
    65083: [
      [12304], 256
    ],
    65084: [
      [12305], 256
    ],
    65085: [
      [12298], 256
    ],
    65086: [
      [12299], 256
    ],
    65087: [
      [12296], 256
    ],
    65088: [
      [12297], 256
    ],
    65089: [
      [12300], 256
    ],
    65090: [
      [12301], 256
    ],
    65091: [
      [12302], 256
    ],
    65092: [
      [12303], 256
    ],
    65095: [
      [91], 256
    ],
    65096: [
      [93], 256
    ],
    65097: [
      [8254], 256
    ],
    65098: [
      [8254], 256
    ],
    65099: [
      [8254], 256
    ],
    65100: [
      [8254], 256
    ],
    65101: [
      [95], 256
    ],
    65102: [
      [95], 256
    ],
    65103: [
      [95], 256
    ],
    65104: [
      [44], 256
    ],
    65105: [
      [12289], 256
    ],
    65106: [
      [46], 256
    ],
    65108: [
      [59], 256
    ],
    65109: [
      [58], 256
    ],
    65110: [
      [63], 256
    ],
    65111: [
      [33], 256
    ],
    65112: [
      [8212], 256
    ],
    65113: [
      [40], 256
    ],
    65114: [
      [41], 256
    ],
    65115: [
      [123], 256
    ],
    65116: [
      [125], 256
    ],
    65117: [
      [12308], 256
    ],
    65118: [
      [12309], 256
    ],
    65119: [
      [35], 256
    ],
    65120: [
      [38], 256
    ],
    65121: [
      [42], 256
    ],
    65122: [
      [43], 256
    ],
    65123: [
      [45], 256
    ],
    65124: [
      [60], 256
    ],
    65125: [
      [62], 256
    ],
    65126: [
      [61], 256
    ],
    65128: [
      [92], 256
    ],
    65129: [
      [36], 256
    ],
    65130: [
      [37], 256
    ],
    65131: [
      [64], 256
    ],
    65136: [
      [
        32, 1611
      ],
      256
    ],
    65137: [
      [
        1600, 1611
      ],
      256
    ],
    65138: [
      [
        32, 1612
      ],
      256
    ],
    65140: [
      [
        32, 1613
      ],
      256
    ],
    65142: [
      [
        32, 1614
      ],
      256
    ],
    65143: [
      [
        1600, 1614
      ],
      256
    ],
    65144: [
      [
        32, 1615
      ],
      256
    ],
    65145: [
      [
        1600, 1615
      ],
      256
    ],
    65146: [
      [
        32, 1616
      ],
      256
    ],
    65147: [
      [
        1600, 1616
      ],
      256
    ],
    65148: [
      [
        32, 1617
      ],
      256
    ],
    65149: [
      [
        1600, 1617
      ],
      256
    ],
    65150: [
      [
        32, 1618
      ],
      256
    ],
    65151: [
      [
        1600, 1618
      ],
      256
    ],
    65152: [
      [1569], 256
    ],
    65153: [
      [1570], 256
    ],
    65154: [
      [1570], 256
    ],
    65155: [
      [1571], 256
    ],
    65156: [
      [1571], 256
    ],
    65157: [
      [1572], 256
    ],
    65158: [
      [1572], 256
    ],
    65159: [
      [1573], 256
    ],
    65160: [
      [1573], 256
    ],
    65161: [
      [1574], 256
    ],
    65162: [
      [1574], 256
    ],
    65163: [
      [1574], 256
    ],
    65164: [
      [1574], 256
    ],
    65165: [
      [1575], 256
    ],
    65166: [
      [1575], 256
    ],
    65167: [
      [1576], 256
    ],
    65168: [
      [1576], 256
    ],
    65169: [
      [1576], 256
    ],
    65170: [
      [1576], 256
    ],
    65171: [
      [1577], 256
    ],
    65172: [
      [1577], 256
    ],
    65173: [
      [1578], 256
    ],
    65174: [
      [1578], 256
    ],
    65175: [
      [1578], 256
    ],
    65176: [
      [1578], 256
    ],
    65177: [
      [1579], 256
    ],
    65178: [
      [1579], 256
    ],
    65179: [
      [1579], 256
    ],
    65180: [
      [1579], 256
    ],
    65181: [
      [1580], 256
    ],
    65182: [
      [1580], 256
    ],
    65183: [
      [1580], 256
    ],
    65184: [
      [1580], 256
    ],
    65185: [
      [1581], 256
    ],
    65186: [
      [1581], 256
    ],
    65187: [
      [1581], 256
    ],
    65188: [
      [1581], 256
    ],
    65189: [
      [1582], 256
    ],
    65190: [
      [1582], 256
    ],
    65191: [
      [1582], 256
    ],
    65192: [
      [1582], 256
    ],
    65193: [
      [1583], 256
    ],
    65194: [
      [1583], 256
    ],
    65195: [
      [1584], 256
    ],
    65196: [
      [1584], 256
    ],
    65197: [
      [1585], 256
    ],
    65198: [
      [1585], 256
    ],
    65199: [
      [1586], 256
    ],
    65200: [
      [1586], 256
    ],
    65201: [
      [1587], 256
    ],
    65202: [
      [1587], 256
    ],
    65203: [
      [1587], 256
    ],
    65204: [
      [1587], 256
    ],
    65205: [
      [1588], 256
    ],
    65206: [
      [1588], 256
    ],
    65207: [
      [1588], 256
    ],
    65208: [
      [1588], 256
    ],
    65209: [
      [1589], 256
    ],
    65210: [
      [1589], 256
    ],
    65211: [
      [1589], 256
    ],
    65212: [
      [1589], 256
    ],
    65213: [
      [1590], 256
    ],
    65214: [
      [1590], 256
    ],
    65215: [
      [1590], 256
    ],
    65216: [
      [1590], 256
    ],
    65217: [
      [1591], 256
    ],
    65218: [
      [1591], 256
    ],
    65219: [
      [1591], 256
    ],
    65220: [
      [1591], 256
    ],
    65221: [
      [1592], 256
    ],
    65222: [
      [1592], 256
    ],
    65223: [
      [1592], 256
    ],
    65224: [
      [1592], 256
    ],
    65225: [
      [1593], 256
    ],
    65226: [
      [1593], 256
    ],
    65227: [
      [1593], 256
    ],
    65228: [
      [1593], 256
    ],
    65229: [
      [1594], 256
    ],
    65230: [
      [1594], 256
    ],
    65231: [
      [1594], 256
    ],
    65232: [
      [1594], 256
    ],
    65233: [
      [1601], 256
    ],
    65234: [
      [1601], 256
    ],
    65235: [
      [1601], 256
    ],
    65236: [
      [1601], 256
    ],
    65237: [
      [1602], 256
    ],
    65238: [
      [1602], 256
    ],
    65239: [
      [1602], 256
    ],
    65240: [
      [1602], 256
    ],
    65241: [
      [1603], 256
    ],
    65242: [
      [1603], 256
    ],
    65243: [
      [1603], 256
    ],
    65244: [
      [1603], 256
    ],
    65245: [
      [1604], 256
    ],
    65246: [
      [1604], 256
    ],
    65247: [
      [1604], 256
    ],
    65248: [
      [1604], 256
    ],
    65249: [
      [1605], 256
    ],
    65250: [
      [1605], 256
    ],
    65251: [
      [1605], 256
    ],
    65252: [
      [1605], 256
    ],
    65253: [
      [1606], 256
    ],
    65254: [
      [1606], 256
    ],
    65255: [
      [1606], 256
    ],
    65256: [
      [1606], 256
    ],
    65257: [
      [1607], 256
    ],
    65258: [
      [1607], 256
    ],
    65259: [
      [1607], 256
    ],
    65260: [
      [1607], 256
    ],
    65261: [
      [1608], 256
    ],
    65262: [
      [1608], 256
    ],
    65263: [
      [1609], 256
    ],
    65264: [
      [1609], 256
    ],
    65265: [
      [1610], 256
    ],
    65266: [
      [1610], 256
    ],
    65267: [
      [1610], 256
    ],
    65268: [
      [1610], 256
    ],
    65269: [
      [
        1604, 1570
      ],
      256
    ],
    65270: [
      [
        1604, 1570
      ],
      256
    ],
    65271: [
      [
        1604, 1571
      ],
      256
    ],
    65272: [
      [
        1604, 1571
      ],
      256
    ],
    65273: [
      [
        1604, 1573
      ],
      256
    ],
    65274: [
      [
        1604, 1573
      ],
      256
    ],
    65275: [
      [
        1604, 1575
      ],
      256
    ],
    65276: [
      [
        1604, 1575
      ],
      256
    ]
  },
  65280: {
    65281: [
      [33], 256
    ],
    65282: [
      [34], 256
    ],
    65283: [
      [35], 256
    ],
    65284: [
      [36], 256
    ],
    65285: [
      [37], 256
    ],
    65286: [
      [38], 256
    ],
    65287: [
      [39], 256
    ],
    65288: [
      [40], 256
    ],
    65289: [
      [41], 256
    ],
    65290: [
      [42], 256
    ],
    65291: [
      [43], 256
    ],
    65292: [
      [44], 256
    ],
    65293: [
      [45], 256
    ],
    65294: [
      [46], 256
    ],
    65295: [
      [47], 256
    ],
    65296: [
      [48], 256
    ],
    65297: [
      [49], 256
    ],
    65298: [
      [50], 256
    ],
    65299: [
      [51], 256
    ],
    65300: [
      [52], 256
    ],
    65301: [
      [53], 256
    ],
    65302: [
      [54], 256
    ],
    65303: [
      [55], 256
    ],
    65304: [
      [56], 256
    ],
    65305: [
      [57], 256
    ],
    65306: [
      [58], 256
    ],
    65307: [
      [59], 256
    ],
    65308: [
      [60], 256
    ],
    65309: [
      [61], 256
    ],
    65310: [
      [62], 256
    ],
    65311: [
      [63], 256
    ],
    65312: [
      [64], 256
    ],
    65313: [
      [65], 256
    ],
    65314: [
      [66], 256
    ],
    65315: [
      [67], 256
    ],
    65316: [
      [68], 256
    ],
    65317: [
      [69], 256
    ],
    65318: [
      [70], 256
    ],
    65319: [
      [71], 256
    ],
    65320: [
      [72], 256
    ],
    65321: [
      [73], 256
    ],
    65322: [
      [74], 256
    ],
    65323: [
      [75], 256
    ],
    65324: [
      [76], 256
    ],
    65325: [
      [77], 256
    ],
    65326: [
      [78], 256
    ],
    65327: [
      [79], 256
    ],
    65328: [
      [80], 256
    ],
    65329: [
      [81], 256
    ],
    65330: [
      [82], 256
    ],
    65331: [
      [83], 256
    ],
    65332: [
      [84], 256
    ],
    65333: [
      [85], 256
    ],
    65334: [
      [86], 256
    ],
    65335: [
      [87], 256
    ],
    65336: [
      [88], 256
    ],
    65337: [
      [89], 256
    ],
    65338: [
      [90], 256
    ],
    65339: [
      [91], 256
    ],
    65340: [
      [92], 256
    ],
    65341: [
      [93], 256
    ],
    65342: [
      [94], 256
    ],
    65343: [
      [95], 256
    ],
    65344: [
      [96], 256
    ],
    65345: [
      [97], 256
    ],
    65346: [
      [98], 256
    ],
    65347: [
      [99], 256
    ],
    65348: [
      [100], 256
    ],
    65349: [
      [101], 256
    ],
    65350: [
      [102], 256
    ],
    65351: [
      [103], 256
    ],
    65352: [
      [104], 256
    ],
    65353: [
      [105], 256
    ],
    65354: [
      [106], 256
    ],
    65355: [
      [107], 256
    ],
    65356: [
      [108], 256
    ],
    65357: [
      [109], 256
    ],
    65358: [
      [110], 256
    ],
    65359: [
      [111], 256
    ],
    65360: [
      [112], 256
    ],
    65361: [
      [113], 256
    ],
    65362: [
      [114], 256
    ],
    65363: [
      [115], 256
    ],
    65364: [
      [116], 256
    ],
    65365: [
      [117], 256
    ],
    65366: [
      [118], 256
    ],
    65367: [
      [119], 256
    ],
    65368: [
      [120], 256
    ],
    65369: [
      [121], 256
    ],
    65370: [
      [122], 256
    ],
    65371: [
      [123], 256
    ],
    65372: [
      [124], 256
    ],
    65373: [
      [125], 256
    ],
    65374: [
      [126], 256
    ],
    65375: [
      [10629], 256
    ],
    65376: [
      [10630], 256
    ],
    65377: [
      [12290], 256
    ],
    65378: [
      [12300], 256
    ],
    65379: [
      [12301], 256
    ],
    65380: [
      [12289], 256
    ],
    65381: [
      [12539], 256
    ],
    65382: [
      [12530], 256
    ],
    65383: [
      [12449], 256
    ],
    65384: [
      [12451], 256
    ],
    65385: [
      [12453], 256
    ],
    65386: [
      [12455], 256
    ],
    65387: [
      [12457], 256
    ],
    65388: [
      [12515], 256
    ],
    65389: [
      [12517], 256
    ],
    65390: [
      [12519], 256
    ],
    65391: [
      [12483], 256
    ],
    65392: [
      [12540], 256
    ],
    65393: [
      [12450], 256
    ],
    65394: [
      [12452], 256
    ],
    65395: [
      [12454], 256
    ],
    65396: [
      [12456], 256
    ],
    65397: [
      [12458], 256
    ],
    65398: [
      [12459], 256
    ],
    65399: [
      [12461], 256
    ],
    65400: [
      [12463], 256
    ],
    65401: [
      [12465], 256
    ],
    65402: [
      [12467], 256
    ],
    65403: [
      [12469], 256
    ],
    65404: [
      [12471], 256
    ],
    65405: [
      [12473], 256
    ],
    65406: [
      [12475], 256
    ],
    65407: [
      [12477], 256
    ],
    65408: [
      [12479], 256
    ],
    65409: [
      [12481], 256
    ],
    65410: [
      [12484], 256
    ],
    65411: [
      [12486], 256
    ],
    65412: [
      [12488], 256
    ],
    65413: [
      [12490], 256
    ],
    65414: [
      [12491], 256
    ],
    65415: [
      [12492], 256
    ],
    65416: [
      [12493], 256
    ],
    65417: [
      [12494], 256
    ],
    65418: [
      [12495], 256
    ],
    65419: [
      [12498], 256
    ],
    65420: [
      [12501], 256
    ],
    65421: [
      [12504], 256
    ],
    65422: [
      [12507], 256
    ],
    65423: [
      [12510], 256
    ],
    65424: [
      [12511], 256
    ],
    65425: [
      [12512], 256
    ],
    65426: [
      [12513], 256
    ],
    65427: [
      [12514], 256
    ],
    65428: [
      [12516], 256
    ],
    65429: [
      [12518], 256
    ],
    65430: [
      [12520], 256
    ],
    65431: [
      [12521], 256
    ],
    65432: [
      [12522], 256
    ],
    65433: [
      [12523], 256
    ],
    65434: [
      [12524], 256
    ],
    65435: [
      [12525], 256
    ],
    65436: [
      [12527], 256
    ],
    65437: [
      [12531], 256
    ],
    65438: [
      [12441], 256
    ],
    65439: [
      [12442], 256
    ],
    65440: [
      [12644], 256
    ],
    65441: [
      [12593], 256
    ],
    65442: [
      [12594], 256
    ],
    65443: [
      [12595], 256
    ],
    65444: [
      [12596], 256
    ],
    65445: [
      [12597], 256
    ],
    65446: [
      [12598], 256
    ],
    65447: [
      [12599], 256
    ],
    65448: [
      [12600], 256
    ],
    65449: [
      [12601], 256
    ],
    65450: [
      [12602], 256
    ],
    65451: [
      [12603], 256
    ],
    65452: [
      [12604], 256
    ],
    65453: [
      [12605], 256
    ],
    65454: [
      [12606], 256
    ],
    65455: [
      [12607], 256
    ],
    65456: [
      [12608], 256
    ],
    65457: [
      [12609], 256
    ],
    65458: [
      [12610], 256
    ],
    65459: [
      [12611], 256
    ],
    65460: [
      [12612], 256
    ],
    65461: [
      [12613], 256
    ],
    65462: [
      [12614], 256
    ],
    65463: [
      [12615], 256
    ],
    65464: [
      [12616], 256
    ],
    65465: [
      [12617], 256
    ],
    65466: [
      [12618], 256
    ],
    65467: [
      [12619], 256
    ],
    65468: [
      [12620], 256
    ],
    65469: [
      [12621], 256
    ],
    65470: [
      [12622], 256
    ],
    65474: [
      [12623], 256
    ],
    65475: [
      [12624], 256
    ],
    65476: [
      [12625], 256
    ],
    65477: [
      [12626], 256
    ],
    65478: [
      [12627], 256
    ],
    65479: [
      [12628], 256
    ],
    65482: [
      [12629], 256
    ],
    65483: [
      [12630], 256
    ],
    65484: [
      [12631], 256
    ],
    65485: [
      [12632], 256
    ],
    65486: [
      [12633], 256
    ],
    65487: [
      [12634], 256
    ],
    65490: [
      [12635], 256
    ],
    65491: [
      [12636], 256
    ],
    65492: [
      [12637], 256
    ],
    65493: [
      [12638], 256
    ],
    65494: [
      [12639], 256
    ],
    65495: [
      [12640], 256
    ],
    65498: [
      [12641], 256
    ],
    65499: [
      [12642], 256
    ],
    65500: [
      [12643], 256
    ],
    65504: [
      [162], 256
    ],
    65505: [
      [163], 256
    ],
    65506: [
      [172], 256
    ],
    65507: [
      [175], 256
    ],
    65508: [
      [166], 256
    ],
    65509: [
      [165], 256
    ],
    65510: [
      [8361], 256
    ],
    65512: [
      [9474], 256
    ],
    65513: [
      [8592], 256
    ],
    65514: [
      [8593], 256
    ],
    65515: [
      [8594], 256
    ],
    65516: [
      [8595], 256
    ],
    65517: [
      [9632], 256
    ],
    65518: [[9675], 256]
  }
};
var r = {
  nfc: function (e) {
    return t("NFC", e)
  },
  nfd: function (e) {
    return t("NFD", e)
  },
  nfkc: function (e) {
    return t("NFKC", e)
  },
  nfkd: function (e) {
    return t("NFKD", e)
  }
};
(n.exports = r).shimApplied = !1,
String.prototype.normalize || (Object.defineProperty(String.prototype, "normalize", {
  enumerable: !1,
  configurable: !0,
  writable: !0,
  value: function () {
    var e = "" + this,
      t = void 0 === arguments[0] ? "NFC" : arguments[0];
    if (null == this) 
      throw new TypeError("Cannot call method on " + Object.prototype.toString.call(this));
    
    if ("NFC" === t) 
      return r.nfc(e);
    
    if ("NFD" === t) 
      return r.nfd(e);
    
    if ("NFKC" === t) 
      return r.nfkc(e);
    
    if ("NFKD" === t) 
      return r.nfkd(e);
    
    throw new RangeError("Invalid normalization form: " + t)
  }
}), r.shimApplied =! 0)}()},function (e, t, r) {var n = r(3),
i = r(43),
o = "".split;e.exports = n(function () {
return !Object("z").propertyIsEnumerable(0)}) ? function (e) {
return "String" == i(e) ? o.call(e, "") : Object(e)} : Object},function (e, t) {e.exports = {}},function (e, t, r) {var n = r(43);e.exports = Array.isArray || function (e) {
return "Array" == n(e)}},function (e, t, r) {var n = r(43),
r = r(5);e.exports = "process" == n(r.process)},function (e, t, r) {var n,
i,
o = r(5),
r = r(105),
o = o.process,
o = o && o.versions,
o = o && o.v8;o ? i = (n = o.split("."))[0] + n[1] : r && (!(n = r.match(/Edge\/(\d+)/)) || 74 <= n[1]) && (n = r.match(/Chrome\/(\d+)/)) && (i = n[1]),e.exports = i &&+ i},function (e, t, r) {"use strict";var n = r(73),
i = r(11),
o = r(51);e.exports = function (e, t, r) {
t = n(t);
t in e ? i.f(e, t, o(0, r)) : e[t] = r}},function (e, t, r) {var n = r(3),
i = r(6),
o = r(63),
a = i("species");e.exports = function (t) {
return 51 <= o || ! n(function () {
  var e = [];
  return(e.constructor = {})[a] = function () {
    return {foo: 1}
  },
  1 !== e[t](Boolean).foo
})}},function (e, t, r) {var n = r(130),
i = r(102);e.exports = Object.keys || function (e) {
return n(e, i)}},function (e, t) {e.exports = {}},function (e, t, r) {"use strict";var n = r(0),
i = r(44).map;n({
target: "Array",
proto: !0,
forced: ! r(65)("map")}, {
map: function (e) {
  return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
}})},function (e, t) {e.exports = function (e, t, r) {
if (!(e instanceof t)) 
  throw TypeError("Incorrect " + (
  r ? r + " " : ""
) + "invocation");

return e}},function (e, t, r) {var n = r(0),
i = r(149);n({
target: "Array",
stat: !0,
forced: ! r(124)(function (e) {
  Array.from(e)
})}, {from: i})},function (e, t, r) {e.exports = r(221)},function (e, t, r) {"use strict";var n = {}.propertyIsEnumerable,
i = Object.getOwnPropertyDescriptor,
o = i && ! n.call({
  1: 2
}, 1);t.f = o ? function (e) {
e = i(this, e);
return !! e && e.enumerable} : n},function (e, t, r) {var i = r(7);e.exports = function (e, t) {
if (! i(e)) 
  return e;

var r,
  n;
if (t && "function" == typeof(r = e.toString) && ! i(n = r.call(e))) 
  return n;

if ("function" == typeof(r = e.valueOf) && ! i(n = r.call(e))) 
  return n;

if (! t && "function" == typeof(r = e.toString) && ! i(n = r.call(e))) 
  return n;

throw TypeError("Can't convert object to primitive value")}},function (e, t, r) {var n = r(75),
i = r(76),
o = n("keys");e.exports = function (e) {
return o[e] || (o[e] = i(e))}},function (e, t, r) {var n = r(34),
i = r(100);(e.exports = function (e, t) {
return i[e] || (i[e] = void 0 !== t ? t : {})})("versions", []).push({
version: "3.10.0",
mode: n ? "pure" : "global",
copyright: "© 2021 Denis Pushkarev (zloirock.ru)"})},function (e, t) {var r = 0,
n = Math.random();e.exports = function (e) {
return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (
  ++ r + n
).toString(36)}},function (e, t, r) {var n = r(130),
i = r(102).concat("length", "prototype");t.f = Object.getOwnPropertyNames || function (e) {
return n(e, i)}},function (e, t, r) {var n = r(36),
i = Math.max,
o = Math.min;e.exports = function (e, t) {
e = n(e);
return e < 0 ? i(e + t, 0) : o(e, t)}},function (e, t, r) {var n = r(3),
i = /#|\.prototype\./,
r = function (e, t) {
  e = a[o(e)];
  return e == c || e != s && ("function" == typeof t ? n(t) : !! t)
},
o = r.normalize = function (e) {
  return String(e).replace(i, ".").toLowerCase()
},
a = r.data = {},
s = r.NATIVE = "N",
c = r.POLYFILL = "P";e.exports = r},function (e, t, r) {var n = r(7),
i = r(61),
o = r(6)("species");e.exports = function (e, t) {
var r;
return new(void 0 === (r = i(e) && ("function" == typeof(r = e.constructor) && (r === Array || i(r.prototype)) || n(r) && null === (r = r[o])) ? void 0 : r) ? Array : r)(0 === t ? 0 : t)}},function (e, t, r) {"use strict";var d = r(109),
n = r(135),
i = r(75),
u = RegExp.prototype.exec,
h = i("native-string-replace", String.prototype.replace),
o = u,
f = (r =/a/, i =/b*/g, u.call(r, "a"), u.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
g = n.UNSUPPORTED_Y || n.BROKEN_CARET,
w = void 0 !== /()??/.exec("")[1];e.exports = o = f || w || g ? function (e) {
var t,
  r,
  n,
  i,
  o = this,
  a = g && o.sticky,
  s = d.call(o),
  c = o.source,
  l = 0,
  p = e;
return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), p = String(e).slice(o.lastIndex), 0 < o.lastIndex && (! o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")", p = " " + p, l++), r = new RegExp("^(?:" + c + ")", s)),
w && (r = new RegExp("^" + c + "$(?!\\s)", s)),
f && (t = o.lastIndex),
n = u.call(a ? r : o, p),
a ? n ? (n.input = n.input.slice(l), n[0] = n[0].slice(l), n.index = o.lastIndex, o.lastIndex += n[0].length) : o.lastIndex = 0 : f && n && (o.lastIndex = o.global ? n.index + n[0].length : t),
w && n && 1 < n.length && h.call(n[0], r, function () {
  for (i = 1; i < arguments.length - 2; i++) 
    void 0 === arguments[i] && (n[i] = void 0)
  
}),
n} : o},function (e, t, r) {r(0)({
target: "Object",
stat: !0}, {setPrototypeOf: r(116)})},function (e, t, r) {var n = r(0),
i = r(3),
o = r(12),
a = r(117),
r = r(138);n({
target: "Object",
stat: !0,
forced: i(function () {
  a(1)
}),
sham: ! r}, {
getPrototypeOf: function (e) {
  return a(o(e))
}})},function (e, t, r) {var n = r(0),
i = r(35),
o = r(31),
a = r(8),
s = r(7),
c = r(54),
l = r(201),
r = r(3),
p = i("Reflect", "construct"),
d = r(function () {
  function e() {}
  return !(p(function () {}, [], e)instanceof e)
}),
u = ! r(function () {
  p(function () {})
}),
r = d || u;n({
target: "Reflect",
stat: !0,
forced: r,
sham: r}, {
construct: function (e, t) {
  o(e),
  a(t);
  var r = arguments.length < 3 ? e : o(arguments[2]);
  if (u && ! d) 
    return p(e, t, r);
  
  if (e == r) {
    switch (t.length) {
      case 0:
        return new e;
      case 1:
        return new e(t[0]);
      case 2:
        return new e(t[0], t[1]);
      case 3:
        return new e(t[0], t[1], t[2]);
      case 4:
        return new e(t[0], t[1], t[2], t[3])
    }
    var n = [null];
    return n.push.apply(n, t),
    new(l.apply(e, n))
  }
  n = r.prototype,
  r = c(s(n) ? n : Object.prototype),
  n = Function.apply.call(e, r, t);
  return s(n) ? n : r
}})},function (e, t, r) {var n = r(6),
i = r(54),
r = r(11),
o = n("unscopables"),
a = Array.prototype;null == a[o] && r.f(a, o, {
configurable: !0,
value: i(null)}),e.exports = function (e) {
a[o][e] = !0}},function (e, t, r) {"use strict";var n = r(0),
i = r(101).includes,
r = r(85);n({
target: "Array",
proto: !0}, {
includes: function (e) {
  return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
}}),r("includes")},function (e, t, r) {"use strict";var n = r(0),
i = r(31),
o = r(12),
a = r(3),
s = r(46),
c = [],
l = c.sort,
r = a(function () {
  c.sort(void 0)
}),
a = a(function () {
  c.sort(null)
}),
s = s("sort");n({
target: "Array",
proto: !0,
forced: r || ! a || ! s}, {
sort: function (e) {
  return void 0 === e ? l.call(o(this)) : l.call(o(this), i(e))
}})},function (e, t, r) {var n = r(115),
i = r(67),
o = r(6)("iterator");e.exports = function (e) {
if (null != e) 
  return e[o] || e["@@iterator"] || i[n(e)]
}},function (e, t, r) {"use strict";var n = r(0),
i = r(42).f,
o = r(14),
a = r(145),
s = r(28),
c = r(146),
r = r(34),
l = "".startsWith,
p = Math.min,
c = c("startsWith");n({
target: "String",
proto: !0,
forced: !!(r || c || (!(i = i(String.prototype, "startsWith")) || i.writable)) && ! c}, {
startsWith: function (e) {
  var t = String(s(this));
  a(e);
  var r = o(p(1 < arguments.length ? arguments[1] : void 0, t.length)),
    e = String(e);
  return l ? l.call(t, e, r) : t.slice(r, r + e.length) === e
}})},function (e, t, r) {"use strict";function f(e) {
var t;
return !(! b(e) || "function" != typeof(t = e.then)) && t}function i(d, u) {
var h;
d.notified || (d.notified =! 0, h = d.reactions, k(function () {
  for (var e = d.value, t = 1 == d.state, r = 0; h.length > r;) {
    var n,
      i,
      o,
      a = h[r++],
      s = t ? a.ok : a.fail,
      c = a.resolve,
      l = a.reject,
      p = a.domain;
    try {
      s ? (t || (2 === d.rejection && re(d), d.rejection = 1), !0 === s ? n = e : (p && p.enter(), n = s(e), p && (p.exit(), o =! 0)), n === a.promise ? l(F("Promise-chain cycle")) : (i = f(n)) ? i.call(n, c, l) : c(n)) : l(e)
    } catch (e) {
      p && ! o && p.exit(),
      l(e)
    }
  }
  d.reactions = [],
  d.notified = !1,
  u && ! d.rejection && ee(d)
}))}function o(e, t, r) {
var n,
  i;
Z ? ((n = Y.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), h.dispatchEvent(n)) : n = {
  promise: t,
  reason: r
},
! $ && (i = h["on" + e]) ? i(n) : e === Q && O("Unhandled promise rejection", r)}function a(t, r, n) {
return function (e) {
  t(r, e, n)
}}function s(e, t, r) {
e.done || (e.done =! 0, (e = r ? r : e).value = t, e.state = 2, i(e, !0))}var n,
c,
l,
p,
d = r(0),
u = r(34),
h = r(5),
g = r(35),
w = r(215),
m = r(19),
v = r(121),
y = r(50),
_ = r(122),
b = r(7),
S = r(31),
A = r(69),
C = r(99),
x = r(123),
E = r(124),
U = r(137),
T = r(152).set,
k = r(216),
R = r(218),
O = r(219),
N = r(154),
D = r(220),
L = r(30),
I = r(79),
M = r(6),
P = r(62),
B = r(63),
j = M("species"),
q = "Promise",
z = L.get,
H = L.set,
V = L.getterFor(q),
G = w,
F = h.TypeError,
Y = h.document,
K = h.process,
W = g("fetch"),
X = N.f,
J = X,
Z = !!(Y && Y.createEvent && h.dispatchEvent),
$ = "function" == typeof PromiseRejectionEvent,
Q = "unhandledrejection",
I = I(q, function () {
  if (!(C(G) !== String(G))) {
    if (66 === B) 
      return !0;
    
    if (! P && ! $) 
      return !0
    
  }
  if (u && ! G.prototype. finally) 
    return !0;
  
  if (51 <= B && /native code/.test(G)) 
    return !1;
  
  function e(e) {
    e(function () {}, function () {})
  }
  var t = G.resolve(1);
  return(t.constructor = {})[j] = e,
  !(t.then(function () {})instanceof e)
}),
E = I || ! E(function (e) {
  G.all(e).catch(function () {})
}),
ee = function (i) {
  T.call(h, function () {
    var e,
      t = i.facade,
      r = i.value,
      n = te(i);
    if (n && (e = D(function () {
      P ? K.emit("unhandledRejection", r, t) : o(Q, t, r)
    }), i.rejection = P || te(i) ? 2 : 1, e.error)) 
      throw e.value
    
  })
},
te = function (e) {
  return 1 !== e.rejection && ! e.parent
},
re = function (t) {
  T.call(h, function () {
    var e = t.facade;
    P ? K.emit("rejectionHandled", e) : o("rejectionhandled", e, t.value)
  })
},
ne = function (r, e, t) {
  if (! r.done) {
    r.done = !0,
    t && (r = t);
    try {
      if (r.facade === e) 
        throw F("Promise can't be resolved itself");
      
      var n = f(e);
      n ? k(function () {
        var t = {
          done: !1
        };
        try {
          n.call(e, a(ne, t, r), a(s, t, r))
        } catch (e) {
          s(t, e, r)
        }
      }) : (r.value = e, r.state = 1, i(r, !1))
    } catch (e) {
      s({
        done: !1
      }, e, r)
    }
  }
};I && (G = function (e) {
A(this, G, q),
S(e),
n.call(this);
var t = z(this);
try {
  e(a(ne, t), a(s, t))
} catch (e) {
  s(t, e)
}},(n = function (e) {
H(this, {
  type: q,
  done: !1,
  notified: !1,
  parent: !1,
  reactions: [],
  rejection: !1,
  state: 0,
  value: void 0
})}).prototype = v(G.prototype, {
then: function (e, t) {
  var r = V(this),
    n = X(U(this, G));
  return n.ok = "function" != typeof e || e,
  n.fail = "function" == typeof t && t,
  n.domain = P ? K.domain : void 0,
  r.parent = !0,
  r.reactions.push(n),
  0 != r.state && i(r, !1),
  n.promise
},
catch  : function (e) {
  return this.then(void 0, e)
}}),c = function () {var e = new n,
t = z(e);this.promise = e,this.resolve = a(ne, t),this.reject = a(s, t)},N.f = X = function (e) {return e === G || e === l ? new c : J(e)},u || "function" != typeof w || (p = w.prototype.then, m(w.prototype, "then", function (e, t) {var r = this;return new G(function (e, t) {
p.call(r, e, t)}).then(e, t)}, {unsafe: !0}), "function" == typeof W && d({global: !0,enumerable: !0,forced: !0}, {fetch: function (e) {
return R(G, W.apply(h, arguments))}}))),d({global: !0,wrap: !0,forced: I}, {Promise: G}),y(G, q, !1, !0),_(q),l = g(q),d({target: q,stat: !0,forced: I}, {reject: function (e) {
var t = X(this);
return t.reject.call(void 0, e),
t.promise}}),d({target: q,stat: !0,forced: u || I}, {resolve: function (e) {
return R(u && this === l ? G : this, e)}}),d({target: q,stat: !0,forced: E}, {all: function (e) {
var s = this,
  t = X(s),
  c = t.resolve,
  l = t.reject,
  r = D(function () {
    var n = S(s.resolve),
      i = [],
      o = 0,
      a = 1;
    x(e, function (e) {
      var t = o++,
        r = !1;
      i.push(void 0),
      a++,
      n.call(s, e).then(function (e) {
        r || (r =! 0, i[t] = e, -- a || c(i))
      }, l)
    }),
    -- a || c(i)
  });
return r.error && l(r.value),
t.promise},race: function (e) {
var r = this,
  n = X(r),
  i = n.reject,
  t = D(function () {
    var t = S(r.resolve);
    x(e, function (e) {
      t.call(r, e).then(n.resolve, i)
    })
  });
return t.error && i(t.value),
n.promise}})},function (e, t, r) {"use strict";e.exports = function (r) {var c = [];return c.toString = function () {
return this.map(function (e) {
  var t = function (e, t) {
    var r = e[1] || "",
      n = e[3];
    if (! n) 
      return r;
    
    if (t && "function" == typeof btoa) {
      e = function (e) {
        e = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
        e = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
        return "/*# ".concat(e, " */")
      }(n),
      t = n.sources.map(function (e) {
        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
      });
      return [r].concat(t).concat([e]).join("\n")
    }
    return [r].join("\n")
  }(e, r);
  return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
}).join("")},c.i = function (e, t, r) {
"string" == typeof e && (e =[[null, e, ""]]);
var n = {};
if (r) 
  for (var i = 0; i < this.length; i++) {
    var o = this[i][0];
    null != o && (n[o] =! 0)
  }

for (var a = 0; a < e.length; a++) {
  var s = [].concat(e[a]);
  r && n[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), c.push(s))
}},c}},function (e, t) {},function (e, t, r) {"use strict";var n;(n ={}).TRANSIT = "TRANSIT",n.TOURISM = "TOURISM",n.BUSINESS = "BUSINESS"},function (e, t, r) {"use strict";r.d(t, "a", function () {return n});var t = r(82),t = r(83),t = r(84),t = r(13),t = r(24),t = r(15),t = r(25),t = r(20),t = r(16),t = r(26),o = r(4),a = r(18),s = r(1);function i(e) {return(i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
return typeof e} : function (e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function c(e, t) {for (var r = 0; r < t.length; r++) {
var n = t[r];
n.enumerable = n.enumerable || !1,
n.configurable = !0,
"value" in n && (n.writable =! 0),
Object.defineProperty(e, n.key, n)}}function l(e, t) {return(l = Object.setPrototypeOf || function (e, t) {
return e.__proto__ = t,
e})(e, t)}function p(r) {var n = function () {
if ("undefined" == typeof Reflect || !Reflect.construct) 
  return !1;

if (Reflect.construct.sham) 
  return !1;

if ("function" == typeof Proxy) 
  return !0;

try {
  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
  !0
} catch (e) {
  return !1
}}();return function () {
var e,
  t = d(r);
return e = n ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
t = this,
!(e = e) || "object" !== i(e) && "function" != typeof e ? function (e) {
  if (void 0 !== e) 
    return e;
  
  throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}(t) : e}}function d(e) {return(d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
return e.__proto__ || Object.getPrototypeOf(e)})(e)}var n = function () {!function (e, t) {
if ("function" != typeof t && null !== t) 
  throw new TypeError("Super expression must either be null or a function");

e.prototype = Object.create(t && t.prototype, {
  constructor: {
    value: e,
    writable: !0,
    configurable: !0
  }
}),
t && l(e, t)}(i, o["SdkElement"]);var e,
t,
r,
n = p(i);function i(e) {
var t;
return function (e, t) {
  if (!(e instanceof t)) 
    throw new TypeError("Cannot call a class as a function")
  
}(this, i),
(t = n.call(this, e.url, e.integrationBridge)).config = e,
t}return e = i,(t =[
{
  key: "mount",
  value: function (e) {
    if (Object(s.l)(e)) {
      ("covid-testing-locator" === this.config.view || this.config.features.covidTestingLocatorEnabled && !this.config.features.travelRestrictionsEnabled) && (this.config.url += "/covid-testing-locator");
      var t = this.createUrl(this.config),
        t = Object(s.c)(t, this.id, {
          hasPwLogo: !0,
          askDataConsent: !1,
          showEntryRequirements: !0,
          showTravelRestriction: !0,
          showCollapseTravelRestrictions: !1,
          showTravelRestrictionsInitiallyCollapsed: !0,
          useSearchBtn: !0,
          showAsTrip: !0,
          showHelpBtn: !0,
          showInputActions: !0,
          sdkVersion: "1.7.1",
          buildDate: "2021-09-01 21:44",
          showDepartureDateSelector: !0,
          showDestinationSelector: !0,
          showOriginSelector: !0,
          trackCustomEvents: !1,
          showQuarantineOnReturn: !1,
          enableUtmPassThrough: !0,
          enablePlacementDetection: !0,
          mode: "dom",
          iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",
          embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
          integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",
          integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",
          customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",
          requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"
        });
      return this.domElement = Object(s.e)(e),
      this.domElement.innerHTML = null,
      this.domElement.appendChild(t),
      this
    }
    console.error("Not a valid query selector", e)
  }
}, {
  key: "update",
  value: function () {
    return Object(a.f)(this.id, o.EventMessageType.elementStateUpdated, this.originDomain),
    this
  }
}, {
  key: "createUrl",
  value: function (e) {
    var t = "".concat(e.url);
    return t += "?appId=".concat(e.appId),
    t += "&elementId=".concat(this.id),
    null != e.language && (t += "&language=".concat(e.language)),
    null != e.currency && (t += "&currency=".concat(e.currency)),
    null != e.placement && (t += "&placement=".concat(e.placement)),
    null != e.defaultNationality && (t += "&defaultNationality=".concat(e.defaultNationality)),
    t += Object(s.k)(e.covidLocator, {
      longitude: "locatorLng",
      latitude: "locatorLat",
      zoom: "locatorZoom",
      country: "locatorCountry"
    }),
    t += Object(s.k)(e.trip),
    t += Object(s.k)(e.features),
    t += Object(s.k)(e.preferences),
    t += Object(s.k)(e.queryParams)
  }
}]) && c(e.prototype, t),r && c(e, r),i}()},function (e, t, r) {e.exports = function () {"use strict";var o = {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"};return function (e, t, r) {
var n = t.prototype,
  i = n.format;
r.en.formats = o,
n.format = function (e) {
  void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
  var t = this.$locale().formats,
    r = function (e, i) {
      return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, t, r) {
        var n = r && r.toUpperCase();
        return t || i[r] || o[r] || i[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, r) {
          return t || r.slice(1)
        })
      })
    }(e, void 0 === t ? {} : t);
  return i.call(this, r)
}}}()},function (e, t, r) {"use strict";r.d(t, "a", function () {return F});var a,o = [],n = "ResizeObserver loop completed with undelivered notifications.";(t = a = a || {}).BORDER_BOX = "border-box",t.CONTENT_BOX = "content-box",t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";function f(e) {return Object.freeze(e)}var i = function (e, t) {
this.inlineSize = e,
this.blockSize = t,
f(this)},g = (s.prototype.toJSON = function () {
var e = this;
return {
  x: e.x,
  y: e.y,
  top: e.top,
  right: e.right,
  bottom: e.bottom,
  left: e.left,
  width: e.width,
  height: e.height
}},s.fromRect = function (e) {
return new s(e.x, e.y, e.width, e.height)},s);function s(e, t, r, n) {return this.x = e,this.y = t,this.width = r,this.height = n,this.top = this.y,this.left = this.x,this.bottom = this.top + this.height,this.right = this.left + this.width,f(this)}function w(e) {return e instanceof SVGElement && "getBBox" in e}function m(e) {if (w(e)) {
var t = e.getBBox(),
  r = t.width,
  t = t.height;
return ! r && ! t}return r = e.offsetWidth,t = e.offsetHeight,!(r || t || e.getClientRects().length)}function c(e) {if (e instanceof Element) 
return 1;var t = null === (t = null === e || void 0 === e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;return !!(t && e instanceof t.Element)}function v(e) {return parseFloat(e || "0")}function y(e, t, r) {return void 0 === e && (e = 0),void 0 === t && (t = 0),new i(((r = void 0 === r ? !1 : r) ? t : e) || 0, (r ? e : t) || 0)}function l(e, t) {if (void 0 === t && (t =! 1), C.has(e) && ! t) 
return C.get(e);if (m(e)) 
return C.set(e, T),
T;var r = getComputedStyle(e),
n = w(e) && e.ownerSVGElement && e.getBBox(),
i = ! U && "border-box" === r.boxSizing,
o = E.test(r.writingMode || ""),
a = ! n && x.test(r.overflowY || ""),
s = ! n && x.test(r.overflowX || ""),
c = n ? 0 : v(r.paddingTop),
l = n ? 0 : v(r.paddingRight),
p = n ? 0 : v(r.paddingBottom),
d = n ? 0 : v(r.paddingLeft),
u = n ? 0 : v(r.borderTopWidth),
h = n ? 0 : v(r.borderRightWidth),
t = n ? 0 : v(r.borderBottomWidth),
l = d + l,
p = c + p,
h = (n ? 0 : v(r.borderLeftWidth)) + h,
u = u + t,
t = s ? e.offsetHeight - u - e.clientHeight : 0,
s = a ? e.offsetWidth - h - e.clientWidth : 0,
a = i ? l + h : 0,
i = i ? p + u : 0,
a = n ? n.width : v(r.width) - a - s,
i = n ? n.height : v(r.height) - i - t,
h = a + l + s + h,
u = i + p + t + u,
i = f({
  devicePixelContentBoxSize: y(Math.round(a * devicePixelRatio), Math.round(i * devicePixelRatio), o),
  borderBoxSize: y(h, u, o),
  contentBoxSize: y(a, i, o),
  contentRect: new g(d, c, a, i)
});return C.set(e, i),i}function p(e, t, r) {var n = (r = l(e, r)).borderBoxSize,
i = r.contentBoxSize,
o = r.devicePixelContentBoxSize;switch (t) {
case a.DEVICE_PIXEL_CONTENT_BOX:
  return o;
case a.BORDER_BOX:
  return n;
default:
  return i}}function d(e) {if (m(e)) 
return 1 / 0;for (var t = 0, r = e.parentNode; r;) 
t += 1,
r = r.parentNode;return t}function u(r) {o.forEach(function (t) {
t.activeTargets.splice(0, t.activeTargets.length),
t.skippedTargets.splice(0, t.skippedTargets.length),
t.observationTargets.forEach(function (e) {
  e.isActive() && (d(e.target) > r ? t.activeTargets : t.skippedTargets).push(e)
})})}function h() {var e,
t = 0;for (u(t); o.some(function (e) {
return 0 < e.activeTargets.length});) 
t = function () {
  var i = 1 / 0,
    t = [];
  o.forEach(function (e) {
    var n;
    0 !== e.activeTargets.length && (n =[], e.activeTargets.forEach(function (e) {
      var t = new k(e.target),
        r = d(e.target);
      n.push(t),
      e.lastReportedSize = p(e.target, e.observedBox),
      r < i && (i = r)
    }), t.push(function () {
      e.callback.call(e.observer, n, e.observer)
    }), e.activeTargets.splice(0, e.activeTargets.length))
  });
  for (var e = 0, r = t; e < r.length; e++) 
    (0, r[e])();
  
  return i
}(),u(t);return o.some(function (e) {
return 0 < e.skippedTargets.length}) && ("function" == typeof ErrorEvent ? e = new ErrorEvent("error", {message: n}) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = n), window.dispatchEvent(e)),0 < t}function _(e) {var t,
r;S || (t = 0, r = document.createTextNode(""), new MutationObserver(function () {
return R.splice(0).forEach(function (e) {
  return e()
})}).observe(r, {
characterData: !0}), S = function () {
r.textContent = "" + (
t ? t-- : t++)}),R.push(e),S()}function b(e) {return void 0 === e && (e = 0),Date.now() + e}var S,A = "undefined" != typeof window ? window : {},C = new WeakMap,x = /auto|scroll/,E = /^tb|vertical/,U = /msie|trident/i.test(A.navigator && A.navigator.userAgent),T = f({
devicePixelContentBoxSize: y(),
borderBoxSize: y(),
contentBoxSize: y(),
contentRect: new g(0, 0, 0, 0)}),k = function (e) {
var t = l(e);
this.target = e,
this.contentRect = t.contentRect,
this.borderBoxSize = f([t.borderBoxSize]),
this.contentBoxSize = f([t.contentBoxSize]),
this.devicePixelContentBoxSize = f([t.devicePixelContentBoxSize])},R = [],O = 0,N = {
attributes: !0,
characterData: !0,
childList: !0,
subtree: !0},D = [
"resize",
"load",
"transitionend",
"animationend",
"animationstart",
"animationiteration",
"keyup",
"keydown",
"mouseup",
"mousedown",
"mouseover",
"mouseout",
"blur",
"focus"],L = !1;function I() {var e = this;this.stopped = !0,this.listener = function () {
return e.schedule()}}function M(e) {! O && 0 < e && P.start(),(O += e) || P.stop()}var P = new(I.prototype.run = function (t) {
var r,
  e,
  n = this;
void 0 === t && (t = 250),
L || (L =! 0, r = b(t), e = function () {
  var e = !1;
  try {
    e = h()
  } finally {
    if (L =! 1, t = r - b(), ! O) 
      return;
    
    e ? n.run(1e3) : 0 < t ? n.run(t) : n.start()
  }
},
_(function () {
  requestAnimationFrame(e)
}))}, I.prototype.schedule = function () {
this.stop(),
this.run()}, I.prototype.observe = function () {
function e() {
  return t.observer && t.observer.observe(document.body, N)
}
var t = this;
document.body ? e() : A.addEventListener("DOMContentLoaded", e)}, I.prototype.start = function () {
var t = this;
this.stopped && (this.stopped =! 1, this.observer = new MutationObserver(this.listener), this.observe(), D.forEach(function (e) {
  return A.addEventListener(e, t.listener, !0)
}))}, I.prototype.stop = function () {
var t = this;
this.stopped || (this.observer && this.observer.disconnect(), D.forEach(function (e) {
  return A.removeEventListener(e, t.listener, !0)
}), this.stopped =! 0)}, I),B = (j.prototype.isActive = function () {
var e,
  t = p(this.target, this.observedBox, !0);
return e = this.target,
w(e) || function (e) {
  switch (e.tagName) {
    case "INPUT":
      if ("image" !== e.type) 
        break;
      
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0
  }
  return !1
}(e) || "inline" !== getComputedStyle(e).display || (this.lastReportedSize = t),
this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize},j);function j(e, t) {this.target = e,this.observedBox = t || a.CONTENT_BOX,this.lastReportedSize = {
inlineSize: 0,
blockSize: 0}}function q(e, t) {for (var r = 0; r < e.length; r += 1) 
if (e[r].target === t) 
  return r;
return -1}var z = function (e, t) {
this.activeTargets = [],
this.skippedTargets = [],
this.observationTargets = [],
this.observer = e,
this.callback = t},H = new WeakMap,V = (G.connect = function (e, t) {
t = new z(e, t);
H.set(e, t)},G.observe = function (e, t, r) {
var n = H.get(e),
  e = 0 === n.observationTargets.length;
q(n.observationTargets, t) < 0 && (e && o.push(n), n.observationTargets.push(new B(t, r && r.box)), M(1), P.schedule())},G.unobserve = function (e, t) {
var r = H.get(e),
  e = q(r.observationTargets, t),
  t = 1 === r.observationTargets.length;
0 <= e && (t && o.splice(o.indexOf(r), 1), r.observationTargets.splice(e, 1), M(-1))},G.disconnect = function (t) {
var r = this,
  e = H.get(t);
e.observationTargets.slice().forEach(function (e) {
  return r.unobserve(t, e.target)
}),
e.activeTargets.splice(0, e.activeTargets.length)},G);function G() {}var F = (Y.prototype.observe = function (e, t) {if (0 === arguments.length) 
throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if (! c(e)) 
throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");V.observe(this, e, t)},Y.prototype.unobserve = function (e) {if (0 === arguments.length) 
throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if (! c(e)) 
throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");V.unobserve(this, e)},Y.prototype.disconnect = function () {V.disconnect(this)},Y.toString = function () {return "function ResizeObserver () { [polyfill code] }"},Y);function Y(e) {if (0 === arguments.length) 
throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if ("function" != typeof e) 
throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");V.connect(this, e)}},function (e, t, r) {var n = r(5),r = r(7),i = n.document,o = r(i) && r(i.createElement);e.exports = function (e) {return o ? i.createElement(e) : {}}},function (e, t, r) {var n = r(5),i = r(29);e.exports = function (t, r) {try {
i(n, t, r)} catch (e) {
n[t] = r}return r}},function (e, t, r) {var r = r(100),n = Function.toString;"function" != typeof r.inspectSource && (r.inspectSource = function (e) {return n.call(e)}),e.exports = r.inspectSource},function (e, t, r) {var n = r(5),i = r(98),r = "__core-js_shared__",r = n[r] || i(r, {});e.exports = r},function (e, t, r) {var c = r(22),l = r(14),p = r(78),r = function (s) {
return function (e, t, r) {
  var n,
    i = c(e),
    o = l(i.length),
    a = p(r, o);
  if (s && t != t) {
    for (; a < o;) 
      if ((n = i[a++]) != n) 
        return !0
      
    
  } else 
    for (; a < o; a++) 
      if ((s || a in i) && i[a] === t) 
        return s || a || 0;
      
    
  
  return ! s && -1
}};e.exports = {includes: r(!0),indexOf: r(!1)}},function (e, t) {e.exports = ["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function (e, t) {t.f = Object.getOwnPropertySymbols},function (e, t, r) {var n = r(62),i = r(63),r = r(3);e.exports = !!Object.getOwnPropertySymbols && ! r(function () {return !Symbol.sham && (n ? 38 === i : 37 < i && i < 41)})},function (e, t, r) {r = r(35);e.exports = r("navigator", "userAgent") || ""},function (e, t, r) {"use strict";var n = r(0),i = r(134).trim;n({target: "String",proto: !0,forced: r(192)("trim")}, {trim: function () {
return i(this)}})},function (e, t) {e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"},function (e, t, r) {"use strict";r(37);var l = r(19),p = r(3),d = r(6),u = r(81),h = r(29),f = d("species"),g = ! p(function () {
var e = /./;
return e.exec = function () {
  var e = [];
  return e.groups = {
    a: "7"
  },
  e
},
"7" !== "".replace(e, "$<a>")}),w = "$0" === "a".replace(/./, "$0"),r = d("replace"),m = !!/./[r] && "" === /./[r]("a", "$0"),v = ! p(function () {
var e = /(?:)/,
  t = e.exec;
e.exec = function () {
  return t.apply(this, arguments)
};
e = "ab".split(e);
return 2 !== e.length || "a" !== e[0] || "b" !== e[1]});e.exports = function (r, e, t, n) {var o,
i,
a = d(r),
s = ! p(function () {
  var e = {};
  return e[a] = function () {
    return 7
  },
  7 != "" [r](e)
}),
c = s && ! p(function () {
  var e = !1,
    t = /a/;
  return "split" === r && ((t =
    { constructor: {}
  }).constructor[f] = function () {
    return t
  },
  t.flags = "",
  t[a] =/./[a]),
  t.exec = function () {
    return e = !0,
    null
  },
  t[a](""),
  ! e
});s && c && ("replace" !== r || g && w && ! m) && ("split" !== r || v) || (o =/./[a], t =( c = t(a, "" [r], function (e, t, r, n, i) {
return t.exec === u ? s && ! i ? {
  done: !0,
  value: o.call(t, r, n)
} : {
  done: !0,
  value: e.call(r, t, n)
} : {
  done: !1
}}, {
REPLACE_KEEPS_$0: w,
REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m}))[0],i = c[1],l(String.prototype, r, t),l(RegExp.prototype, a, 2 == e ? function (e, t) {
return i.call(e, this, t)} : function (e) {
return i.call(e, this)})),n && h(RegExp.prototype[a], "sham", !0)}},function (e, t, r) {"use strict";var n = r(8);e.exports = function () {var e = n(this),
t = "";return e.global && (t += "g"),e.ignoreCase && (t += "i"),e.multiline && (t += "m"),e.dotAll && (t += "s"),e.unicode && (t += "u"),e.sticky && (t += "y"),t}},function (e, t, r) {var a = r(36),s = r(28),r = function (o) {
return function (e, t) {
  var r,
    n = String(s(e)),
    i = a(t),
    e = n.length;
  return i < 0 || e <= i ? o ? "" : void 0 : (t = n.charCodeAt(i)) < 55296 || 56319 < t || i + 1 === e || (r = n.charCodeAt(i + 1)) < 56320 || 57343 < r ? o ? n.charAt(i) : t : o ? n.slice(i, i + 2) : r - 56320 + (t - 55296 << 10) + 65536
}};e.exports = {codeAt: r(!1),charAt: r(!0)}},function (e, t, r) {var n = r(43),i = r(81);e.exports = function (e, t) {var r = e.exec;if ("function" == typeof r) {
r = r.call(e, t);
if ("object" != typeof r) 
  throw TypeError("RegExp exec method returned something other than an Object or null");

return r}if ("RegExp" !== n(e)) 
throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e, t)}},function (e, t, r) {"use strict";var n = r(108),p = r(113),m = r(8),d = r(28),v = r(137),y = r(136),_ = r(14),b = r(111),u = r(81),r = r(3),h = [].push,S = Math.min,A = 4294967295,C = ! r(function () {
return !RegExp(A, "y")});n("split", 2, function (i, f, g) {var w = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (e, t) {
var r = String(d(this)),
  n = void 0 === t ? A : t >>> 0;
if (0 == n) 
  return [];

if (void 0 === e) 
  return [r];

if (! p(e)) 
  return f.call(r, e, n);

for (var i, o, a, s =[], t =( e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), c = 0, l = new RegExp(e.source, t + "g"); (i = u.call(l, r)) && !(c < (o = l.lastIndex) && (s.push(r.slice(c, i.index)), 1 < i.length && i.index < r.length && h.apply(s, i.slice(1)), a = i[0].length, c = o, s.length >= n));) 
  l.lastIndex === i.index && l.lastIndex ++;

return c === r.length ? ! a && l.test("") || s.push("") : s.push(r.slice(c)),
s.length > n ? s.slice(0, n) : s} : "0".split(void 0, 0).length ? function (e, t) {
return void 0 === e && 0 === t ? [] : f.call(this, e, t)} : f;return [
function (e, t) {
  var r = d(this),
    n = null == e ? void 0 : e[i];
  return void 0 !== n ? n.call(e, r, t) : w.call(String(r), e, t)
},
function (e, t) {
  var r = g(w, e, this, t, w !== f);
  if (r.done) 
    return r.value;
  
  var n = m(e),
    i = String(this),
    r = v(n, RegExp),
    o = n.unicode,
    e = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (C ? "y" : "g"),
    a = new r(C ? n : "^(?:" + n.source + ")", e),
    s = void 0 === t ? A : t >>> 0;
  if (0 == s) 
    return [];
  
  if (0 === i.length) 
    return null === b(a, i) ? [i] : [];
  
  for (var c = 0, l = 0, p =[]; l < i.length;) {
    a.lastIndex = C ? l : 0;
    var d,
      u = b(a, C ? i : i.slice(l));
    if (null === u || (d = S(_(a.lastIndex + (C ? 0 : l)), i.length)) === c) 
      l = y(i, l, o);
     else {
      if (p.push(i.slice(c, l)), p.length === s) 
        return p;
      
      for (var h = 1; h <= u.length - 1; h++) 
        if (p.push(u[h]), p.length === s) 
          return p;
        
      
      l = c = d
    }
  }
  return p.push(i.slice(c)),
  p
}]}, ! C)},function (e, t, r) {var n = r(7),i = r(43),o = r(6)("match");e.exports = function (e) {var t;return n(e) && (void 0 !== (t = e[o]) ? !! t : "RegExp" == i(e))}},function (e, t, r) {var n = {};n[r(6)("toStringTag")] = "z",e.exports = "[object z]" === String(n)},function (e, t, r) {var n = r(114),i = r(43),o = r(6)("toStringTag"),a = "Arguments" == i(function () {
return arguments}());e.exports = n ? i : function (e) {var t;return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(e = function (e, t) {
try {
  return e[t]
} catch (e) {}}(t = Object(e), o)) ? e : a ? i(t) : "Object" == (e = i(t)) && "function" == typeof t.callee ? "Arguments" : e}},function (e, t, r) {var i = r(8),o = r(200);e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {var r,
n = !1,
e = {};try {
(r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
n = e instanceof Array} catch (e) {}return function (e, t) {
return i(e),
o(t),
n ? r.call(e, t) : e.__proto__ = t,
e}}() : void 0)},function (e, t, r) {var n = r(10),i = r(12),o = r(74),r = r(138),a = o("IE_PROTO"),s = Object.prototype;e.exports = r ? Object.getPrototypeOf : function (e) {return e = i(e),n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null}},function (e, t, r) {"use strict";function g() {return this}var w = r(0),m = r(143),v = r(117),y = r(116),_ = r(50),b = r(29),S = r(19),n = r(6),A = r(34),C = r(67),r = r(144),x = r.IteratorPrototype,E = r.BUGGY_SAFARI_ITERATORS,U = n("iterator"),T = "values",k = "entries";e.exports = function (e, t, r, n, i, o, a) {m(r, t, n);function s(e) {
if (e === i && f) 
  return f;

if (! E && e in u) 
  return u[e];

switch (e) {
  case "keys":
  case T:
  case k: return function () {
      return new r(this, e)
    }
}
return function () {
  return new r(this)
}}var c,
l,
p = t + " Iterator",
d = !1,
u = e.prototype,
h = u[U] || u["@@iterator"] || i && u[i],
f = ! E && h || s(i),
n = "Array" == t && u.entries || h;if (n && (e = v(n.call(new e)), x !== Object.prototype && e.next && (A || v(e) === x || (y ? y(e, x) : "function" != typeof e[U] && b(e, U, g)), _(e, p, !0, !0), A && (C[p] = g))), i == T && h && h.name !== T && (d =! 0, f = function () {
return h.call(this)}), A && ! a || u[U] === f || b(u, U, f), C[t] = f, i) 
if (c =
  { values: s(T),
  keys: o ? f : s("keys"),
  entries: s(k)
}, a) 
  for (l in c) 
    ! E && ! d && l in u || S(u, l, c[l]);
  
 else 
w({
  target: t,
  proto: !0,
  forced: E || d
}, c);return c}},function (e, t, r) {"use strict";var n = r(0),i = r(145),o = r(28);n({target: "String",proto: !0,forced: ! r(146)("includes")}, {includes: function (e) {
return ! !~ String(o(this)).indexOf(i(e), 1 < arguments.length ? arguments[1] : void 0)}})},function (t, e, r) {t = function (a) {"use strict";var c,
e = Object.prototype,
l = e.hasOwnProperty,
t = "function" == typeof Symbol ? Symbol : {},
n = t.iterator || "@@iterator",
r = t.asyncIterator || "@@asyncIterator",
i = t.toStringTag || "@@toStringTag";function o(e, t, r) {
return Object.defineProperty(e, t, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}),
e[t]}try {
o({}, "")} catch (e) {
o = function (e, t, r) {
  return e[t] = r
}}function s(e, t, r, n) {
var i,
  o,
  a,
  s,
  t = t && t.prototype instanceof w ? t : w,
  t = Object.create(t.prototype),
  n = new x(n || []);
return t._invoke = (i = e, o = r, a = n, s = d, function (e, t) {
  if (s === h) 
    throw new Error("Generator is already running");
  
  if (s === f) {
    if ("throw" === e) 
      throw t;
    
    return U()
  }
  for (a.method = e, a.arg = t;;) {
    var r = a.delegate;
    if (r) {
      var n = function e(t, r) {
        var n = t.iterator[r.method];
        if (n === c) {
          if (r.delegate = null, "throw" === r.method) {
            if (t.iterator.return && (r.method = "return", r.arg = c, e(t, r), "throw" === r.method)) 
              return g;
            
            r.method = "throw",
            r.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return g
        }
        n = p(n, t.iterator, r.arg);
        if ("throw" === n.type) 
          return r.method = "throw",
          r.arg = n.arg,
          r.delegate = null,
          g;
        
        var n = n.arg;
        if (! n) 
          return r.method = "throw",
          r.arg = new TypeError("iterator result is not an object"),
          r.delegate = null,
          g;
        
        {
          if (! n.done) 
            return n;
          
          r[t.resultName] = n.value,
          r.next = t.nextLoc,
          "return" !== r.method && (r.method = "next", r.arg = c)
        } r.delegate = null;
        return g
      }(r, a);
      if (n) {
        if (n === g) 
          continue;
        
        return n
      }
    }
    if ("next" === a.method) 
      a.sent = a._sent = a.arg;
     else if ("throw" === a.method) {
      if (s === d) 
        throw s = f,
        a.arg;
      
      a.dispatchException(a.arg)
    } else 
      "return" === a.method && a.abrupt("return", a.arg);
     s = h;
    n = p(i, o, a);
    if ("normal" === n.type) {
      if (s = a.done ? f : u, n.arg !== g) 
        return {value: n.arg, done: a.done}
      
    } else 
      "throw" === n.type && (s = f, a.method = "throw", a.arg = n.arg)
    
  }
}),
t}function p(e, t, r) {
try {
  return {
    type: "normal",
    arg: e.call(t, r)
  }
} catch (e) {
  return {type: "throw", arg: e}
}}a.wrap = s;var d = "suspendedStart",
u = "suspendedYield",
h = "executing",
f = "completed",
g = {};function w() {}function m() {}function v() {}var y = {};y[n] = function () {
return this};t = Object.getPrototypeOf,t = t && t(t(E([])));t && t !== e && l.call(t, n) && (y = t);var _ = v.prototype = w.prototype = Object.create(y);function b(e) {
["next", "throw", "return"].forEach(function (t) {
  o(e, t, function (e) {
    return this._invoke(t, e)
  })
})}function S(a, s) {
var t;
this._invoke = function (r, n) {
  function e() {
    return new s(function (e, t) {
      !function t(e, r, n, i) {
        e = p(a[e], a, r);
        if ("throw" !== e.type) {
          var o = e.arg,
            r = o.value;
          return r && "object" == typeof r && l.call(r, "__await") ? s.resolve(r.__await).then(function (e) {
            t("next", e, n, i)
          }, function (e) {
            t("throw", e, n, i)
          }) : s.resolve(r).then(function (e) {
            o.value = e,
            n(o)
          }, function (e) {
            return t("throw", e, n, i)
          })
        }
        i(e.arg)
      }(r, n, e, t)
    })
  }
  return t = t ? t.then(e, e) : e()
}}function A(e) {
var t = {
  tryLoc: e[0]
};
1 in e && (t.catchLoc = e[1]),
2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
this.tryEntries.push(t)}function C(e) {
var t = e.completion || {};
t.type = "normal",
delete t.arg,
e.completion = t}function x(e) {
this.tryEntries = [
  {
    tryLoc: "root"
  }
],
e.forEach(A, this),
this.reset(!0)}function E(t) {
if (t) {
  var e = t[n];
  if (e) 
    return e.call(t);
  
  if ("function" == typeof t.next) 
    return t;
  
  if (!isNaN(t.length)) {
    var r = -1,
      e = function e() {
        for (; ++ r < t.length;) 
          if (l.call(t, r)) 
            return e.value = t[r],
            e.done = !1,
            e;
          
        
        return e.value = c,
        e.done = !0,
        e
      };
    return e.next = e
  }
}
return {next: U}}function U() {
return {
  value: c,
  done: !0
}}return((m.prototype = _.constructor = v).constructor = m).displayName = o(v, i, "GeneratorFunction"),a.isGeneratorFunction = function (e) {
e = "function" == typeof e && e.constructor;
return !! e && (e === m || "GeneratorFunction" === (e.displayName || e.name))},a.mark = function (e) {
return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, o(e, i, "GeneratorFunction")),
e.prototype = Object.create(_),
e},a.awrap = function (e) {
return {__await: e}},b(S.prototype),S.prototype[r] = function () {
return this},a.AsyncIterator = S,a.async = function (e, t, r, n, i) {
void 0 === i && (i = Promise);
var o = new S(s(e, t, r, n), i);
return a.isGeneratorFunction(t) ? o : o.next().then(function (e) {
  return e.done ? e.value : o.next()
})},b(_),o(_, i, "Generator"),_[n] = function () {
return this},_.toString = function () {
return "[object Generator]"},a.keys = function (r) {
var e,
  n = [];
for (e in r) 
  n.push(e);

return n.reverse(),
function e() {
  for (; n.length;) {
    var t = n.pop();
    if (t in r) 
      return e.value = t,
      e.done = !1,
      e
    
  }
  return e.done = !0,
  e
}},a.values = E,x.prototype = {
constructor: x,
reset: function (e) {
  if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done =! 1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(C), ! e) 
    for (var t in this) 
      "t" === t.charAt(0) && l.call(this, t) && !isNaN(+ t.slice(1)) && (this[t] = c)
    
  
},
stop: function () {
  this.done = !0;
  var e = this.tryEntries[0].completion;
  if ("throw" === e.type) 
    throw e.arg;
  
  return this.rval
},
dispatchException: function (r) {
  if (this.done) 
    throw r;
  
  var n = this;
  function e(e, t) {
    return o.type = "throw",
    o.arg = r,
    n.next = e,
    t && (n.method = "next", n.arg = c),
    !! t
  }
  for (var t = this.tryEntries.length - 1; 0 <= t; -- t) {
    var i = this.tryEntries[t],
      o = i.completion;
    if ("root" === i.tryLoc) 
      return e("end");
    
    if (i.tryLoc <= this.prev) {
      var a = l.call(i, "catchLoc"),
        s = l.call(i, "finallyLoc");
      if (a && s) {
        if (this.prev < i.catchLoc) 
          return e(i.catchLoc, !0);
        
        if (this.prev < i.finallyLoc) 
          return e(i.finallyLoc)
        
      } else if (a) {
        if (this.prev < i.catchLoc) 
          return e(i.catchLoc, !0)
        
      } else {
        if (! s) 
          throw new Error("try statement without catch or finally");
        
        if (this.prev < i.finallyLoc) 
          return e(i.finallyLoc)
        
      }
    }
  }
},
abrupt: function (e, t) {
  for (var r = this.tryEntries.length - 1; 0 <= r; -- r) {
    var n = this.tryEntries[r];
    if (n.tryLoc <= this.prev && l.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
      var i = n;
      break
    }
  }
  var o = (i = i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i.completion : {};
  return o.type = e,
  o.arg = t,
  i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(o)
},
complete: function (e, t) {
  if ("throw" === e.type) 
    throw e.arg;
  
  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
  g
},
finish: function (e) {
  for (var t = this.tryEntries.length - 1; 0 <= t; -- t) {
    var r = this.tryEntries[t];
    if (r.finallyLoc === e) 
      return this.complete(r.completion, r.afterLoc),
      C(r),
      g
    
  }
},
catch  : function (e) {
  for (var t = this.tryEntries.length - 1; 0 <= t; -- t) {
    var r = this.tryEntries[t];
    if (r.tryLoc === e) {
      var n,
        i = r.completion;
      return "throw" === i.type && (n = i.arg, C(r)),
      n
    }
  }
  throw new Error("illegal catch attempt")
},delegateYield: function (e, t, r) {
return this.delegate = {
  iterator: E(e),
  resultName: t,
  nextLoc: r
},
"next" === this.method && (this.arg = c),
g}},a}(t.exports);try {regeneratorRuntime = t} catch (e) {Function("r", "regeneratorRuntime = r")(t)}},function (e, t, r) {var i = r(19);e.exports = function (e, t, r) {for (var n in t) i(e, n, t[n], r);return e}},function (e, t, r) {"use strict";var n = r(35),i = r(11),o = r(6),a = r(9),s = o("species");e.exports = function (e) {var t = n(e),e = i.f;a && t && ! t[s] && e(t, s, {configurable: !0,get: function () {
return this}})}},function (e, t, r) {function w(e, t) {this.stopped = e,this.result = t}var m = r(8),v = r(151),y = r(14),_ = r(45),b = r(88),S = r(150);e.exports = function (e, t, r) {function n(e) {return o && S(o),new w(!0, e)}function i(e) {return u ? (m(e), f ? g(e[0], e[1], n) : g(e[0], e[1])) : f ? g(e, n) : g(e)}var o,a,s,c,l,p,d = r && r.that,u = !(! r || ! r.AS_ENTRIES),h = !(! r || ! r.IS_ITERATOR),f = !(! r || ! r.INTERRUPTED),g = _(t, d, 1 + u + f);if (h) o = e; else {if ("function" != typeof(h = b(e))) 
throw TypeError("Target is not iterable");if (v(h)) {
for (a = 0, s = y(e.length); a < s; a++) 
  if ((c = i(e[a])) && c instanceof w) 
    return c;
  

return new w(!1)}o = h.call(e)}for (l = o.next; !(p = l.call(o)).done;) {try {
c = i(p.value)} catch (e) {
throw S(o),
e}if ("object" == typeof c && c && c instanceof w) 
return c}return new w(!1)}},function (e, t, r) {var i = r(6)("iterator"),o = !1;try {var n = 0,a = {
next: function () {
  return {
    done: !! n++
  }
},
return: function () {
  o = !0
}};a[i] = function () {return this},Array.from(a, function () {throw 2})} catch (e) {}e.exports = function (e, t) {if (! t && ! o) return !1;var r = !1;try {var n = {};n[i] = function () {
return {
  next: function () {
    return {
      done: r = !0
    }
  }
}},e(n)} catch (e) {}return r}},function (e, t) {var r = function () {return this}();try {r = r || new Function("return this")()} catch (e) {"object" == typeof window && (r = window)}e.exports = r},function (e, t, r) {var n = r(9),i = r(3),o = r(97);e.exports = ! n && ! i(function () {return 7 != Object.defineProperty(o("div"), "a", {get: function () {
return 7}}).a})},function (e, t, r) {var s = r(10),c = r(128),l = r(42),p = r(11);e.exports = function (e, t) {for (var r = c(t), n = p.f, i = l.f, o = 0; o < r.length; o++) {var a = r[o];s(e, a) || n(e, a, i(t, a))}}},function (e, t, r) {var n = r(35),i = r(77),o = r(103),a = r(8);e.exports = n("Reflect", "ownKeys") || function (e) {var t = i.f(a(e)),r = o.f;return r ? t.concat(r(e)) : t}},function (e, t, r) {r = r(5);e.exports = r},function (e, t, r) {var a = r(10),s = r(22),c = r(101).indexOf,l = r(60);e.exports = function (e, t) {var r,n = s(e),i = 0,o = [];for (r in n) ! a(l, r) && a(n, r) && o.push(r);for (; t.length > i;) a(n, r = t[i++]) && (~ c(o, r) || o.push(r));return o}},function (e, t, r) {"use strict";var n = r(44).forEach,r = r(46)("forEach");e.exports = r ? [].forEach : function (e) {return n(this, e, 1 < arguments.length ? arguments[1] : void 0)}},function (e, t, r) {r = r(104);e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator},function (e, t) {e.exports = {CSSRuleList: 0,CSSStyleDeclaration: 0,CSSValueList: 0,ClientRectList: 0,DOMRectList: 0,DOMStringList: 0,DOMTokenList: 1,DataTransferItemList: 0,FileList: 0,HTMLAllCollection: 0,HTMLCollection: 0,HTMLFormElement: 0,HTMLSelectElement: 0,MediaList: 0,MimeTypeArray: 0,NamedNodeMap: 0,NodeList: 1,PaintRequestList: 0,Plugin: 0,PluginArray: 0,SVGLengthList: 0,SVGNumberList: 0,SVGPathSegList: 0,SVGPointList: 0,SVGStringList: 0,SVGTransformList: 0,SourceBufferList: 0,StyleSheetList: 0,TextTrackCueList: 0,TextTrackList: 0,TouchList: 0}},function (e, t, r) {var n = r(28),r = "[" + r(107) + "]",i = RegExp("^" + r + r + "*"),o = RegExp(r + r + "*$"),r = function (t) {return function (e) {
e = String(n(e));
return 1 & t && (e = e.replace(i, "")),
e = 2 & t ? e.replace(o, "") : e}};e.exports = {start: r(1),end: r(2),trim: r(3)}},function (e, t, r) {"use strict";r = r(3);function n(e, t) {return RegExp(e, t)}t.UNSUPPORTED_Y = r(function () {var e = n("a", "y");return e.lastIndex = 2,null != e.exec("abcd")}),t.BROKEN_CARET = r(function () {var e = n("^r", "gy");return e.lastIndex = 2,null != e.exec("str")})},function (e, t, r) {"use strict";var n = r(110).charAt;e.exports = function (e, t, r) {return t + (r ? n(e, t).length : 1)}},function (e, t, r) {var n = r(8),i = r(31),o = r(6)("species");e.exports = function (e, t) {var r,e = n(e).constructor;return void 0 === e || null == (r = n(e)[o]) ? t : i(r)}},function (e, t, r) {r = r(3);e.exports = ! r(function () {function e() {}return e.prototype.constructor = null,Object.getPrototypeOf(new e) !== e.prototype})},function (e, t, r) {var n = r(9),a = r(11),s = r(8),c = r(66);e.exports = n ? Object.defineProperties : function (e, t) {s(e);for (var r, n = c(t), i = n.length, o = 0; o < i;) a.f(e, r = n[o++], t[r]);return e}},function (e, t, r) {r = r(35);e.exports = r("document", "documentElement")},function (e, t, r) {r = r(6);t.f = r},function (e, t, r) {var n = r(129),i = r(10),o = r(141),a = r(11).f;e.exports = function (e) {var t = n.Symbol || (n.Symbol ={});i(t, e) || a(t, e, {value: o.f(e)})}},function (e, t, r) {"use strict";function n() {return this}var i = r(144).IteratorPrototype,o = r(54),a = r(51),s = r(50),c = r(67);e.exports = function (e, t, r) {t += " Iterator";return e.prototype = o(i, {next: a(1, r)}),s(e, t, !1, !0),c[t] = n,e}},function (e, t, r) {"use strict";var n,i = r(3),o = r(117),a = r(29),s = r(10),c = r(6),l = r(34),p = c("iterator"),r = !1;[].keys && ("next" in (c = [].keys()) ? (c = o(o(c))) !== Object.prototype && (n = c) : r =! 0);i = null == n || i(function () {var e = {};return n[p].call(e) !== e});i && (n ={}),l && ! i || s(n, p) || a(n, p, function () {return this}),e.exports = {IteratorPrototype: n,BUGGY_SAFARI_ITERATORS: r}},function (e, t, r) {var n = r(113);e.exports = function (e) {if (n(e)) throw TypeError("The method doesn't accept regular expressions");return e}},function (e, t, r) {var n = r(6)("match");e.exports = function (t) {var r = /./;try {"/./" [t](r)} catch (e) {try {
return r[n] = !1,
"/./" [t](r)} catch (e) {}}return !1}},function (e, t, r) {var n = r(0),r = r(203);n({global: !0,forced: parseInt != r}, {parseInt: r})},function (e, t, r) {var n = r(3),i = r(6),o = r(34),a = i("iterator");e.exports = ! n(function () {var e = new URL("b?a=1&b=2&c=3", "http://a"),r = e.searchParams,n = "";return e.pathname = "c%20d",r.forEach(function (e, t) {r.delete("b"),n += t + e}),o && ! e.toJSON || ! r.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || ! r[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host})},function (e, t, r) {"use strict";var h = r(45),f = r(12),g = r(209),w = r(151),m = r(14),v = r(64),y = r(88);e.exports = function (e) {var t,r,n,i,o,a,s = f(e),c = "function" == typeof this ? this : Array,l = arguments.length,p = 1 < l ? arguments[1] : void 0,d = void 0 !== p,e = y(s),u = 0;if (d && (p = h(p, 2 < l ? arguments[2] : void 0, 2)), null == e || c == Array && w(e)) for (r = new c(t = m(s.length)); u < t; u++) 
a = d ? p(s[u], u) : s[u],
v(r, u, a); else for (o =( i = e.call(s)).next, r = new c; !(n = o.call(i)).done; u++) 
a = d ? g(i, p, [
  n.value, u
], !0) : n.value,
v(r, u, a);return r.length = u,r}},function (e, t, r) {var n = r(8);e.exports = function (e) {var t = e.return;if (void 0 !== t) return n(t.call(e)).value}},function (e, t, r) {var n = r(6),i = r(67),o = n("iterator"),a = Array.prototype;e.exports = function (e) {return void 0 !== e && (i.Array === e || a[o] === e)}},function (e, t, r) {function n(e) {var t;b.hasOwnProperty(e) && (t = b[e], delete b[e], t())}function i(e) {return function () {n(e)}}function o(e) {n(e.data)}var a,s = r(5),c = r(3),l = r(45),p = r(140),d = r(97),u = r(153),h = r(62),f = s.location,g = s.setImmediate,w = s.clearImmediate,m = s.process,v = s.MessageChannel,y = s.Dispatch,_ = 0,b = {},S = "onreadystatechange",r = function (e) {s.postMessage(e + "", f.protocol + "//" + f.host)};g && w || (g = function (e) {for (var t =[], r = 1; r < arguments.length;) t.push(arguments[r++]);return b[++ _] = function () {("function" == typeof e ? e : Function(e)).apply(void 0, t)},a(_),_},w = function (e) {delete b[e]},h ? a = function (e) {m.nextTick(i(e))} : y && y.now ? a = function (e) {y.now(i(e))} : v && ! u ? (v =( u = new v).port2, u.port1.onmessage = o, a = l(v.postMessage, v, 1)) : s.addEventListener && "function" == typeof postMessage && ! s.importScripts && f && "file:" !== f.protocol && ! c(r) ? (a = r, s.addEventListener("message", o, !1)) : a = S in d("script") ? function (e) {p.appendChild(d("script"))[S] = function () {p.removeChild(this),n(e)}} : function (e) {setTimeout(i(e), 0)}),e.exports = {set: g,clear: w}},function (e, t, r) {r = r(105);e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)},function (e, t, r) {"use strict";function n(e) {var r,n;this.promise = new e(function (e, t) {if (void 0 !== r || void 0 !== n) 
throw TypeError("Bad Promise constructor");r = e,n = t}),this.resolve = i(r),this.reject = i(n)}var i = r(31);e.exports.f = function (e) {return new n(e)}},function (e, t, r) {"use strict";e.exports = function (r, n) {return function () {for (var e = new Array(arguments.length), t = 0; t < e.length; t++) 
e[t] = arguments[t];return r.apply(n, e)}}},function (e, t, r) {"use strict";var i = r(17);function o(e) {return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")}e.exports = function (e, t, r) {if (! t) return e;var n,r = r ? r(t) : i.isURLSearchParams(t) ? t.toString() : (n =[], i.forEach(t, function (e, t) {
null != e && (i.isArray(e) ? t += "[]" : e =[e], i.forEach(e, function (e) {
  i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
  n.push(o(t) + "=" + o(e))
}))}), n.join("&"));return r && (-1 !== (t = e.indexOf("#")) && (e = e.slice(0, t)), e +=( -1 === e.indexOf("?") ? "?" : "&") + r),e}},function (e, t, r) {"use strict";e.exports = function (e) {return !(! e || ! e.__CANCEL__)}},function (s, e, c) {"use strict";!function (e) {var r = c(17),n = c(227),t = {
"Content-Type": "application/x-www-form-urlencoded"};function i(e, t) {! r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)}var o,a = {
adapter: o = "undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e) ? c(159) : o,
transformRequest: [
  function (e, t) {
    return n(t, "Accept"),
    n(t, "Content-Type"),
    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
  }
],
transformResponse: [function (e) {
    if ("string" == typeof e) 
      try {
        e = JSON.parse(e)
      }
     catch (e) {}
    return e
  }
],
timeout: 0,
xsrfCookieName: "XSRF-TOKEN",
xsrfHeaderName: "X-XSRF-TOKEN",
maxContentLength: -1,
maxBodyLength: -1,
validateStatus: function (e) {
  return 200 <= e && e < 300
},
headers: {
  common: {
    Accept: "application/json, text/plain, */*"
  }
}};r.forEach(["delete", "get", "head"], function (e) {a.headers[e] = {}}),r.forEach(["post", "put", "patch"], function (e) {a.headers[e] = r.merge(t)}),s.exports = a}.call(this, c(226))},function (e, t, r) {"use strict";var c = r(17),l = r(228),p = r(230),d = r(156),u = r(231),h = r(234),f = r(235),g = r(160);e.exports = function (s) {return new Promise(function (t, r) {var n = s.data,
i = s.headers;c.isFormData(n) && delete i["Content-Type"];var e,
o = new XMLHttpRequest;s.auth && (e = s.auth.username || "", a = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "", i.Authorization = "Basic " + btoa(e + ":" + a));var a = u(s.baseURL, s.url);if (o.open(s.method.toUpperCase(), d(a, s.params, s.paramsSerializer), !0), o.timeout = s.timeout, o.onreadystatechange = function () {
var e;
o && 4 === o.readyState && (0 !== o.status || o.responseURL && 0 === o.responseURL.indexOf("file:")) && (e = "getAllResponseHeaders" in o ? h(o.getAllResponseHeaders()) : null, e =
  {
  data: s.responseType && "text" !== s.responseType ? o.response : o.responseText,
  status: o.status,
  statusText: o.statusText,
  headers: e,
  config: s,
  request: o
}, l(t, r, e), o = null)},o.onabort = function () {
o && (r(g("Request aborted", s, "ECONNABORTED", o)), o = null)},o.onerror = function () {
r(g("Network Error", s, null, o)),
o = null},o.ontimeout = function () {
var e = "timeout of " + s.timeout + "ms exceeded";
s.timeoutErrorMessage && (e = s.timeoutErrorMessage),
r(g(e, s, "ECONNABORTED", o)),
o = null},! c.isStandardBrowserEnv() || (a =( s.withCredentials || f(a)) && s.xsrfCookieName ? p.read(s.xsrfCookieName) : void 0) && (i[s.xsrfHeaderName] = a),"setRequestHeader" in o && c.forEach(i, function (e, t) {
void 0 === n && "content-type" === t.toLowerCase() ? delete i[t] : o.setRequestHeader(t, e)}),c.isUndefined(s.withCredentials) || (o.withCredentials =!! s.withCredentials),s.responseType) 
try {
  o.responseType = s.responseType
} catch (e) {
if ("json" !== s.responseType) 
  throw e
}"function" == typeof s.onDownloadProgress && o.addEventListener("progress", s.onDownloadProgress),"function" == typeof s.onUploadProgress && o.upload && o.upload.addEventListener("progress", s.onUploadProgress),s.cancelToken && s.cancelToken.promise.then(function (e) {
o && (o.abort(), r(e), o = null)}),o.send(n = n || null)})}},function (e, t, r) {"use strict";var o = r(229);e.exports = function (e, t, r, n, i) {e = new Error(e);return o(e, t, r, n, i)}},function (e, t, r) {"use strict";var p = r(17);e.exports = function (t, r) {r = r || {};var n = {},e = [
"url", "method", "data"],i = [
"headers", "auth", "proxy", "params"],o = [
"baseURL",
"transformRequest",
"transformResponse",
"paramsSerializer",
"timeout",
"timeoutMessage",
"withCredentials",
"adapter",
"responseType",
"xsrfCookieName",
"xsrfHeaderName",
"onUploadProgress",
"onDownloadProgress",
"decompress",
"maxContentLength",
"maxBodyLength",
"maxRedirects",
"transport",
"httpAgent",
"httpsAgent",
"cancelToken",
"socketPath",
"responseEncoding"],a = ["validateStatus"];function s(e, t) {return p.isPlainObject(e) && p.isPlainObject(t) ? p.merge(e, t) : p.isPlainObject(t) ? p.merge({}, t) : p.isArray(t) ? t.slice() : t}function c(e) {p.isUndefined(r[e]) ? p.isUndefined(t[e]) || (n[e] = s(void 0, t[e])) : n[e] = s(t[e], r[e])}p.forEach(e, function (e) {p.isUndefined(r[e]) || (n[e] = s(void 0, r[e]))}),p.forEach(i, c),p.forEach(o, function (e) {p.isUndefined(r[e]) ? p.isUndefined(t[e]) || (n[e] = s(void 0, t[e])) : n[e] = s(void 0, r[e])}),p.forEach(a, function (e) {e in r ? n[e] = s(t[e], r[e]) : e in t && (n[e] = s(void 0, t[e]))});var l = e.concat(i).concat(o).concat(a),a = Object.keys(t).concat(Object.keys(r)).filter(function (e) {
return -1 === l.indexOf(e)});return p.forEach(a, c),n}},function (e, t, r) {"use strict";function n(e) {this.message = e}n.prototype.toString = function () {return "Cancel" + (this.message ? ": " + this.message : "")},n.prototype.__CANCEL__ = !0,e.exports = n},function (e, t, r) {"use strict";var n = r(0),i = r(44).every;n({target: "Array",proto: !0,forced: ! r(46)("every")}, {every: function (e) {return i(this, e, 1 < arguments.length ? arguments[1] : void 0)}})},function (e, t, r) {var o = r(7),a = r(116);e.exports = function (e, t, r) {var n,i;return a && "function" == typeof(n = t.constructor) && n !== r && o(i = n.prototype) && i !== r.prototype && a(e, i),e}},function (e, t, r) {"use strict";var n = r(250),r = r(252);e.exports = n("Set", function (e) {return function () {return e(this, arguments.length ? arguments[0] : void 0)}}, r)},function (e, t, r) {function n(e) {s(e, p, {value: {
objectID: "O" + ++ d,
weakData: {}}})}var i = r(60),o = r(7),a = r(10),s = r(11).f,c = r(76),l = r(251),p = c("meta"),d = 0,u = Object.isExtensible || function () {return !0},h = e.exports = {REQUIRED: !1,fastKey: function (e, t) {
if (! o(e)) 
  return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;

if (! a(e, p)) {
  if (! u(e)) 
    return "F";
  
  if (! t) 
    return "E";
  
  n(e)
}
return e[p].objectID},getWeakData: function (e, t) {
if (! a(e, p)) {
  if (! u(e)) 
    return !0;
  
  if (! t) 
    return !1;
  
  n(e)
}
return e[p].weakData},onFreeze: function (e) {
return l && h.REQUIRED && u(e) && ! a(e, p) && n(e),
e}};i[p] = !0},function (e, t, r) {"use strict";var n = r(0),i = r(253).left,o = r(46),a = r(63),r = r(62);n({target: "Array",proto: !0,forced: ! o("reduce") || ! r && 79 < a && a < 83}, {reduce: function (e) {return i(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)}})},function (e, t, r) {"use strict";var n = r(0),i = r(44).some;n({target: "Array",proto: !0,forced: ! r(46)("some")}, {some: function (e) {return i(this, e, 1 < arguments.length ? arguments[1] : void 0)}})},function (e, t, r) {"use strict";r(94);var n = r(56);r.o(n, "TripElement") && r.d(t, "TripElement", function () {return n.TripElement}),r.o(n, "createApplicationElement") && r.d(t, "createApplicationElement", function () {return n.createApplicationElement}),r.o(n, "createMapElement") && r.d(t, "createMapElement", function () {return n.createMapElement}),r.o(n, "createTripElement") && r.d(t, "createTripElement", function () {return n.createTripElement});var i = r(176);r.d(t, "createMapElement", function () {return i.a})},function (e, t, r) {"use strict";var n;r.d(t, "a", function () {return n}),(t = n = n || {}).sdkLoaded = "sdkLoaded",t.iframeResized = "iframeResized",t.elementStateUpdated = "elementStateUpdated",t.sendIntent = "sendIntent",t.legacySdkOptions = "sdkOptions",t.legacyModalClose = "modalClose"},function (e, t, r) {"use strict";var n;r.d(t, "a", function () {return n}),(t = n = n || {}).Iframe = "iframe",t.Embedded = "embedded"},function (e, t) {},function (e, t, r) {"use strict";var n = r(174);r.d(t, "Intent", function () {return n.a}),r.d(t, "SdkElement", function () {return n.b});var i = r(56);r.o(i, "placements") && r.d(t, "placements", function () {return i.placements});var o = r(92);r.o(o, "placements") && r.d(t, "placements", function () {return o.placements});r(93);var a = r(175);r.d(t, "placements", function () {return a.a})},function (e, t, r) {"use strict";r.d(t, "a", function () {return n}),r.d(t, "b", function () {return a});var n,i = r(1);function o(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}(r = n = n || {}).ViewProductDetails = "apply-product",r.CheckVisaStatus = "CHECK_VISA_STATUS",r.ScrollTo = "scroll-to";var a = function e(t, r) {!function (e, t) {if (!(e instanceof t)) 
throw new TypeError("Cannot call a class as a function")}(this, e),o(this, "domElement", void 0),o(this, "id", void 0),o(this, "originDomain", void 0),o(this, "integrationBridge", void 0),this.id = btoa(Math.random() + "").substr(10, 5),this.originDomain = Object(i.d)(t),this.integrationBridge = r}},function (e, t, r) {"use strict";r.d(t, "a", function () {return n});var n = ["homePage","discovery","mmb","search","bookingConfirmation","destiantionPage","covidPage"]},function (e, t, r) {"use strict";r.d(t, "a", function () {return n});var t = r(68),t = r(32),t = r(13),t = r(33),t = r(39),t = r(21),t = r(23),t = r(40),l = r(94);function o(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function p(n) {for (var e = 1; e < arguments.length; e++) {var i = null != arguments[e] ? arguments[e] : {};e % 2 ? o(Object(i), !0).forEach(function (e) {
var t,
  r;
t = n,
e = i[r = e],
r in t ? Object.defineProperty(t, r, {
  value: e,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[r] = e}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function (e) {
Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))})}return n}var n = function (e, t, r) {var n = t.appId,i = t.variables,o = t.language,a = t.currency,s = t.features,c = t.defaultNationality,t = r || {},t = {
appId: null !== (r = null === t ? void 0 : t.appId) && void 0 !== r ? r : n,
language: null !== (n = null === t ? void 0 : t.language) && void 0 !== n ? n : o,
currency: null !== (o = null === t ? void 0 : t.currency) && void 0 !== o ? o : a,
defaultNationality: null !== (a = null === t ? void 0 : t.defaultNationality) && void 0 !== a ? a : c,
placement: null === t ? void 0 : t.placement,
url: i.mapElementUrl,
integrationBridge: e,
trip: t.trip,
preferences: t.preferences,
covidLocator: t.covidLocator,
features: p(p({}, s.map), t.features),
queryParams: t.queryParams,
view: (null === t ? void 0 : t.view) || "travel-restrictions"},t = new l.a(t);return e.addElement(t),t}},function (e, t, r) {"use strict";var n = r(178);r.d(t, "TripElement", function () {return n.a});var i = r(179);r.d(t, "createTripElement", function () {return i.a});var o = r(92);r.o(o, "createApplicationElement") && r.d(t, "createApplicationElement", function () {return o.createApplicationElement}),r.o(o, "createMapElement") && r.d(t, "createMapElement", function () {return o.createMapElement})},function (e, t, r) {"use strict";r.d(t, "a", function () {return n});var t = r(82),t = r(83),t = r(84),t = r(13),t = r(24),t = r(15),t = r(25),t = r(20),t = r(16),t = r(26),o = r(4),a = r(18),s = r(1);function i(e) {return(i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function c(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function l(e, t) {return(l = Object.setPrototypeOf || function (e, t) {return e.__proto__ = t,e})(e, t)}function p(r) {var n = function () {if ("undefined" == typeof Reflect || !Reflect.construct) 
return !1;if (Reflect.construct.sham) 
return !1;if ("function" == typeof Proxy) 
return !0;try {
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
!0} catch (e) {
return !1}}();return function () {var e,
t = d(r);return e = n ? (e = d(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments),t = this,!(e = e) || "object" !== i(e) && "function" != typeof e ? function (e) {
if (void 0 !== e) 
  return e;

throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t) : e}}function d(e) {return(d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {return e.__proto__ || Object.getPrototypeOf(e)})(e)}var n = function () {!function (e, t) {if ("function" != typeof t && null !== t) 
throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, {
constructor: {
  value: e,
  writable: !0,
  configurable: !0
}}),t && l(e, t)}(i, o["SdkElement"]);var e,t,r,n = p(i);function i(e) {var t;return function (e, t) {
if (!(e instanceof t)) 
  throw new TypeError("Cannot call a class as a function")
}(this, i),(t = n.call(this, e.url, e.integrationBridge)).config = e,t}return e = i,(t =[{
key: "mount",
value: function (e) {
  if (Object(s.l)(e)) {
    var t = this.createUrl(this.config),
      t = Object(s.c)(t, this.id, {
        hasPwLogo: !0,
        askDataConsent: !1,
        showEntryRequirements: !0,
        showTravelRestriction: !0,
        showCollapseTravelRestrictions: !1,
        showTravelRestrictionsInitiallyCollapsed: !0,
        useSearchBtn: !0,
        showAsTrip: !0,
        showHelpBtn: !0,
        showInputActions: !0,
        sdkVersion: "1.7.1",
        buildDate: "2021-09-01 21:44",
        showDepartureDateSelector: !0,
        showDestinationSelector: !0,
        showOriginSelector: !0,
        trackCustomEvents: !1,
        showQuarantineOnReturn: !1,
        enableUtmPassThrough: !0,
        enablePlacementDetection: !0,
        mode: "dom",
        iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",
        embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
        integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",
        integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",
        customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",
        requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"
      });
    return this.domElement = Object(s.e)(e),
    this.domElement.innerHTML = null,
    this.domElement.appendChild(t),
    this
  }
  console.error("Not a valid query selector", e)
}}, {
key: "update",
value: function () {
  return Object(a.f)(this.id, o.EventMessageType.elementStateUpdated, this.originDomain),
  this
}}, {
key: "createUrl",
value: function (e) {
  var t = "".concat(e.url);
  return t += "?appId=".concat(e.appId),
  t += "&elementId=".concat(this.id),
  null != e.language && (t += "&language=".concat(e.language)),
  null != e.placement && (t += "&placement=".concat(e.placement)),
  null != e.defaultNationality && (t += "&defaultPassport=".concat(e.defaultNationality)),
  null != e.defaultPassport && (t += "&defaultPassport=".concat(e.defaultPassport)),
  null != e.selected && null != e.selected.segment && (t += "&selected[segment]=".concat(e.selected.segment), null != e.selected.groupType && (t += "&selected[groupType]=".concat(e.selected.groupType)), null != e.selected.groupType && (t += "&selected[extended]=".concat(e.selected.extended))),
  t += Object(s.k)(e.features),
  t += Object(s.k)(e.preferences),
  t += Object(s.k)(e.queryParams),
  t += Object(s.k)(e.segments, null, "s"),
  t += Object(s.k)(e.travellers, null, "t")
}}]) && c(e.prototype, t),r && c(e, r),i}()},function (e, t, r) {"use strict";r.d(t, "a", function () {return n});var t = r(32),t = r(13),t = r(33),t = r(39),t = r(21),t = r(23),t = r(40),l = r(57);function o(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function p(n) {for (var e = 1; e < arguments.length; e++) {var i = null != arguments[e] ? arguments[e] : {};e % 2 ? o(Object(i), !0).forEach(function (e) {
var t,
  r;
t = n,
e = i[r = e],
r in t ? Object.defineProperty(t, r, {
  value: e,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[r] = e}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function (e) {
Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))})}return n}var n = function (e, t, r) {var n = t.appId,i = t.variables,o = t.language,a = t.defaultNationality,s = t.defaultPassport,c = t.features,t = r || {},t = {
appId: null !== (r = null === t ? void 0 : t.appId) && void 0 !== r ? r : n,
language: null !== (n = null === t ? void 0 : t.language) && void 0 !== n ? n : o,
defaultNationality: null !== (o = null === t ? void 0 : t.defaultNationality) && void 0 !== o ? o : a,
defaultPassport: null !== (a = null === t ? void 0 : t.defaultPassport) && void 0 !== a ? a : s,
placement: null === t ? void 0 : t.placement,
url: i.tripElementUrl,
integrationBridge: e,
tripCategory: t.tripCategory,
segments: t.segments,
travellers: t.travellers,
preferences: t.preferences,
features: p(p({}, c.trip), t.features),
selected: {
  segment: null === (c = t.selected) || void 0 === c ? void 0 : c.segment,
  extended: null === (c = t.selected) || void 0 === c ? void 0 : c.extended,
  groupType: null === (c = t.selected) || void 0 === c ? void 0 : c.groupType
},
queryParams: t.queryParams},t = new l.TripElement(t);return e.addElement(t),t}},function (e, t, r) {"use strict";r.d(t, "a", function () {return A});r(82),r(83),r(84),r(13),r(24),r(15),r(25),r(20),r(16),r(26);var n,o = r(4),a = r(18),s = r(1);r(49);function i(e) {return(i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function c(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function l(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var p = function () {if (null == n) {
if ("object" !== ("undefined" == typeof document ? "undefined" : i(document)) || !document || "function" != typeof Element || !Element) 
  return n = !1;

var e;
n = "scrollBehavior" in document.documentElement.style || !!(e = Element.prototype.scrollTo) && !/\{\s*\[native code\]\s*\}/.test(e.toString())}return n}(),d = function () {function r(e, t) {
!function (e, t) {
  if (!(e instanceof t)) 
    throw new TypeError("Cannot call a class as a function")
  
}(this, r),
this._viewportRuler = e,
l(this, "_previousHTMLStyles", {
  top: "",
  left: ""
}),
l(this, "_previousScrollPosition", void 0),
l(this, "_isEnabled", !1),
l(this, "_document", void 0),
l(this, "_stylesheet", "\n        .global-scrollblock {\n            position: fixed;\n            width: 100%;\n            overflow-y: scroll;\n        }\n    "),
l(this, "_styleElement", void 0),
this._document = t}var e,
t,
n;return e = r,(t =[
{
  key: "enable",
  value: function () {
    var e;
    this._canBeEnabled() && (this._addStyleSheet(), e = this._document.documentElement, this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = e.style.left || "", this._previousHTMLStyles.top = e.style.top || "", e.style.left = Object(s.b)(-this._previousScrollPosition.left),
    e.style.top = Object(s.b)(-this._previousScrollPosition.top),
    e.classList.add("global-scrollblock"),
    this._isEnabled =! 0)
  }
},
{
  key: "disable",
  value: function () {
    var e,
      t,
      r,
      n,
      i;
    this._isEnabled && (this._removeStyleSheet(), e = this._document.documentElement, i = this._document.body, t = e.style, r = i.style, n = t.scrollBehavior || "", i = r.scrollBehavior || "", this._isEnabled =! 1, t.left = this._previousHTMLStyles.left, t.top = this._previousHTMLStyles.top, e.classList.remove("global-scrollblock"), p && (t.scrollBehavior = r.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), p && (t.scrollBehavior = n, r.scrollBehavior = i))
  }
},
{
  key: "_canBeEnabled",
  value: function () {
    if (this._document.documentElement.classList.contains("global-scrollblock") || this._isEnabled) 
      return !1;
    
    var e = this._document.body,
      t = this._viewportRuler.getViewportSize();
    return e.scrollHeight > t.height || e.scrollWidth > t.width
  }
},
{
  key: "_addStyleSheet",
  value: function () {
    this._styleElement = document.createElement("style"),
    this._styleElement.innerHTML = this._stylesheet,
    document.head.append(this._styleElement)
  }
}, {
  key: "_removeStyleSheet",
  value: function () {
    this._styleElement && this._styleElement.remove()
  }
}]) && c(e.prototype, t),n && c(e, n),r}();function u(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function h(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var f = function () {function n(e, t) {var r = this;!function (e, t) {
if (!(e instanceof t)) 
  throw new TypeError("Cannot call a class as a function")
}(this, n),this._window = e,this._document = t,h(this, "_resizeTimeoutId", null),h(this, "_viewportSize", void 0),h(this, "_resizeHandler", void 0),h(this, "_changeListener", function (e) {
r._viewportSize = null,
r._resizeHandler && (r._resizeTimeoutId && (clearTimeout(r._resizeTimeoutId), r._resizeTimeoutId = null), r._resizeTimeoutId = setTimeout(function () {
  r._resizeHandler(e)
}, 100))}),this.isBrowser() && ((t = this._getWindow()).addEventListener("resize", this._changeListener), t.addEventListener("orientationchange", this._changeListener))}var e,t,r;return e = n,(t =[{
key: "isBrowser",
value: function () {
  return null != this._window
}},{
key: "setResizeHandler",
value: function (e) {
  this._resizeHandler = e
}},{
key: "getViewportSize",
value: function () {
  this._viewportSize || this._updateViewportSize();
  var e = {
    width: this._viewportSize.width,
    height: this._viewportSize.height
  };
  return this.isBrowser() || (this._viewportSize = null),
  e
}},{
key: "getViewportRect",
value: function () {
  var e = this.getViewportScrollPosition(),
    t = this.getViewportSize(),
    r = t.width,
    t = t.height;
  return {
    top: e.top,
    left: e.left,
    bottom: e.top + t,
    right: e.left + r,
    height: t,
    width: r
  }
}}, {
key: "getViewportScrollPosition",
value: function () {
  if (!this.isBrowser()) 
    return {top: 0, left: 0};
  
  var e = this._document,
    t = this._getWindow(),
    r = e.documentElement,
    n = r.getBoundingClientRect();
  return {
    top: - n.top || e.body.scrollTop || t.scrollY || r.scrollTop || 0,
    left: - n.left || e.body.scrollLeft || t.scrollX || r.scrollLeft || 0
  }
}}, {
key: "destroy",
value: function () {
  var e;
  this.isBrowser() && ((e = this._getWindow()).removeEventListener("resize", this._changeListener), e.removeEventListener("orientationchange", this._changeListener))
}}, {
key: "_getWindow",
value: function () {
  return this._document.defaultView || window
}}, {
key: "_updateViewportSize",
value: function () {
  var e = this._getWindow();
  this._viewportSize = this.isBrowser() ? {
    width: e.innerWidth,
    height: e.innerHeight
  } : {
    width: 0,
    height: 0
  }
}}]) && u(e.prototype, t),r && u(e, r),n}();function g(e) {return(g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function w(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function m(e, t) {return(m = Object.setPrototypeOf || function (e, t) {return e.__proto__ = t,e})(e, t)}function v(r) {var n = function () {if ("undefined" == typeof Reflect || !Reflect.construct) 
return !1;if (Reflect.construct.sham) 
return !1;if ("function" == typeof Proxy) 
return !0;try {
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
!0} catch (e) {
return !1}}();return function () {var e,
t = _(r);return e = n ? (e = _(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments),t = this,!(e = e) || "object" !== g(e) && "function" != typeof e ? y(t) : e}}function y(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e) {return(_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {return e.__proto__ || Object.getPrototypeOf(e)})(e)}function b(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var S = function () {!function (e, t) {
if ("function" != typeof t && null !== t) 
  throw new TypeError("Super expression must either be null or a function");

e.prototype = Object.create(t && t.prototype, {
  constructor: {
    value: e,
    writable: !0,
    configurable: !0
  }
}),
t && m(e, t)}(i, o["SdkElement"]);var e,
t,
r,
n = v(i);function i(e) {
var t;
return function (e, t) {
  if (!(e instanceof t)) 
    throw new TypeError("Cannot call a class as a function")
  
}(this, i),
(t = n.call(this, e.url, e.integrationBridge)).config = e,
b(y(t), "_viewportRuler", void 0),
b(y(t), "_blockScrollStrategy", void 0),
b(y(t), "onLoadHandler", function () {
  var e = {
    sdkVersion: "v2",
    elementId: t.id,
    affiliateId: t.config.affiliateId,
    language: t.config.language,
    currency: t.config.currency
  };
  Object(a.f)(t.id, o.EventMessageType.legacySdkOptions, t.originDomain, e)
}),
t}return e = i,(t =[
{
  key: "mount",
  value: function (e) {
    var t = this;
    if (Object(s.l)(e)) {
      this._viewportRuler = new f(window, document),
      this._blockScrollStrategy = new d(this._viewportRuler, document),
      this._blockScrollStrategy.enable(),
      this._viewportRuler.setResizeHandler(function (e) {
        t._blockScrollStrategy.disable(),
        t._blockScrollStrategy.enable()
      });
      var r = this.createUrl(this.config),
        r = Object(s.c)(r, this.id, {
          hasPwLogo: !0,
          askDataConsent: !1,
          showEntryRequirements: !0,
          showTravelRestriction: !0,
          showCollapseTravelRestrictions: !1,
          showTravelRestrictionsInitiallyCollapsed: !0,
          useSearchBtn: !0,
          showAsTrip: !0,
          showHelpBtn: !0,
          showInputActions: !0,
          sdkVersion: "1.7.1",
          buildDate: "2021-09-01 21:44",
          showDepartureDateSelector: !0,
          showDestinationSelector: !0,
          showOriginSelector: !0,
          trackCustomEvents: !1,
          showQuarantineOnReturn: !1,
          enableUtmPassThrough: !0,
          enablePlacementDetection: !0,
          mode: "dom",
          iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",
          embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
          integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",
          integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",
          customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",
          requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"
        }, !0, {onLoad: this.onLoadHandler});
      return this.domElement = Object(s.e)(e),
      this.domElement.innerHTML = null,
      this.domElement.appendChild(r),
      this
    }
    console.error("Not a valid query selector", e)
  }
}, {
  key: "unmount",
  value: function () {
    this.domElement.remove(),
    this._viewportRuler.destroy(),
    this._blockScrollStrategy.disable()
  }
}, {
  key: "createUrl",
  value: function (e) {
    var t = "".concat(e.url);
    return null != e.orderId ? t += "/orders/".concat(e.orderId) : null != e.selectedProductId && (t += "/applications/products/".concat(e.selectedProductId)),
    t += "?appId=".concat(e.appId),
    t += "&elementId=".concat(this.id),
    t += "&runningInIframe=true",
    t += "&affiliateId=".concat(e.affiliateId),
    null != e.language && (t += "&language=".concat(e.language)),
    null != e.currency && (t += "&currency=".concat(e.currency)),
    null != e.placement && (t += "&placement=".concat(e.placement)),
    t
  }
}]) && w(e.prototype, t),r && w(e, r),i}(),A = (r(93), function (e, t, r) {var n = t.appId,
i = t.variables,
o = t.language,
a = t.affiliateId,
s = t.currency,
t = r || {},
t = {
  appId: null !== (r = null === t ? void 0 : t.appId) && void 0 !== r ? r : n,
  language: null !== (n = null === t ? void 0 : t.language) && void 0 !== n ? n : o,
  currency: null !== (o = null === t ? void 0 : t.currency) && void 0 !== o ? o : s,
  placement: null === t ? void 0 : t.placement,
  affiliateId: a,
  url: i.applicationElementUrl,
  integrationBridge: e,
  selectedProductId: t.selectedProductId,
  queryParams: t.queryParams
},
t = new S(t);return e.addElement(t),t})},function (t, e, r) {!function () {"use strict";function e() {var e,n,s,c,r,t,l = window,p = document;
function d(e, t) {
  this.scrollLeft = e,
  this.scrollTop = t
}
function i(e) {
  if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) 
    return !0;
  
  if ("object" == typeof e && "smooth" === e.behavior) 
    return !1;
  
  throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
}
function o(e, t) {
  return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
}
function a(e, t) {
  t = l.getComputedStyle(e, null)["overflow" + t];
  return "auto" === t || "scroll" === t
}
function u(e) {
  for (; e !== p.body && !1 === (r = void 0, r = o(t = e, "Y") && a(t, "Y"), t = o(t, "X") && a(t, "X"), r || t);) 
    e = e.parentNode || e.host;
  
  var t,
    r;
  return e
}
function h(e) {
  var t,
    r = (c() - e.startTime) / n;
  t = r = 1 < r ? 1 : r,
  r = .5 * (1 - Math.cos(Math.PI * t)),
  t = e.startX + (e.x - e.startX) * r,
  r = e.startY + (e.y - e.startY) * r,
  e.method.call(e.scrollable, t, r),
  t === e.x && r === e.y || l.requestAnimationFrame(h.bind(l, e))
}
function f(e, t, r) {
  var n,
    i,
    o,
    a = c(),
    e = e === p.body ? (i =( n = l).scrollX || l.pageXOffset, o = l.scrollY || l.pageYOffset, s.scroll) : (i =( n = e).scrollLeft, o = e.scrollTop, d);
  h({
    scrollable: n,
    method: e,
    startTime: a,
    startX: i,
    startY: o,
    x: t,
    y: r
  })
}
"scrollBehavior" in p.documentElement.style && !0 !== l.__forceSmoothScrollPolyfill__ || (e = l.HTMLElement || l.Element, n = 468, s =
  { scroll: l.scroll || l.scrollTo,
  scrollBy: l.scrollBy,
  elementScroll: e.prototype.scroll || d,
  scrollIntoView: e.prototype.scrollIntoView
}, c = l.performance && l.performance.now ? l.performance.now.bind(l.performance) : Date.now, t = l.navigator.userAgent, r = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0, l.scroll = l.scrollTo = function () {
  void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? f.call(l, p.body, void 0 !== arguments[0].left ?~~ arguments[0].left
  : l.scrollX || l.pageXOffset, void 0 !== arguments[0].top ?~~ arguments[0].top
  : l.scrollY || l.pageYOffset) : s.scroll.call(l, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : l.scrollX || l.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : l.scrollY || l.pageYOffset))
},
l.scrollBy = function () {
  void 0 !== arguments[0] && (i(arguments[0]) ? s.scrollBy.call(l, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(l, p.body, ~~ arguments[0].left + (l.scrollX || l.pageXOffset), ~~ arguments[0].top + (l.scrollY || l.pageYOffset)))
},
e.prototype.scroll = e.prototype.scrollTo = function () {
  if (void 0 !== arguments[0]) 
    if (!0 !== i(arguments[0])) {
      var e = arguments[0].left,
        t = arguments[0].top;
      f.call(this, this, void 0 === e ? this.scrollLeft :~~ e, void 0 === t ? this.scrollTop :~~ t)
    }
   else {
    if ("number" == typeof arguments[0] && void 0 === arguments[1]) 
      throw new SyntaxError("Value could not be converted");
    
   s.elementScroll.call(this, void 0 !== arguments[0].left ?~~ arguments[0].left
  : "object" != typeof arguments[0] ?~~ arguments[0]
  : this.scrollLeft, void 0 !== arguments[0].top ?~~ arguments[0].top
  : void 0 !== arguments[1] ?~~ arguments[1]
  : this.scrollTop)
}},e.prototype.scrollBy = function () {
void 0 !== arguments[0] && (!0 !== i(arguments[0]) ? this.scroll({
  left :~~ arguments[0].left + this.scrollLeft,
  top :~~ arguments[0].top + this.scrollTop,
  behavior: arguments[0].behavior
}) : s.elementScroll.call(this, void 0 !== arguments[0].left ?~~ arguments[0].left + this.scrollLeft :~~ arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ?~~ arguments[0].top + this.scrollTop :~~ arguments[1] + this.scrollTop))},e.prototype.scrollIntoView = function () {
var e,
  t,
  r;
!0 !== i(arguments[0]) ? (t =( e = u(this)).getBoundingClientRect(), r = this.getBoundingClientRect(), e !== p.body ? (f.call(this, e, e.scrollLeft + r.left - t.left, e.scrollTop + r.top - t.top), "fixed" !== l.getComputedStyle(e).position && l.scrollBy({left: t.left, top: t.top, behavior: "smooth"})) : l.scrollBy({left: r.left, top: r.top, behavior: "smooth"})) : s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])})}t.exports = {polyfill: e}}()},function (e) {e.exports = JSON.parse('[{"cc":"PNG","r":"PG-NCD","i":"POM","c":"Port Moresby"},{"cc":"ISL","r":"IS-2","i":"KEF","c":"Reykjavík"},{"cc":"KOS","r":"XK-01","i":"PRN","c":"Prishtina"},{"cc":"CAN","r":"CA-AB","i":"YEG","c":"Edmonton"},{"cc":"CAN","r":"CA-NS","i":"YHZ","c":"Halifax"},{"cc":"CAN","r":"CA-ON","i":"YOW","c":"Ottawa"},{"cc":"CAN","r":"CA-QC","i":"YUL","c":"Montréal"},{"cc":"CAN","r":"CA-BC","i":"YVR","c":"Vancouver"},{"cc":"CAN","r":"CA-MB","i":"YWG","c":"Winnipeg"},{"cc":"CAN","r":"CA-AB","i":"YYC","c":"Calgary"},{"cc":"CAN","r":"CA-BC","i":"YYJ","c":"Victoria"},{"cc":"CAN","r":"CA-NL","i":"YYT","c":"St. John\'s"},{"cc":"CAN","r":"CA-ON","i":"YYZ","c":"Toronto"},{"cc":"CAN","r":"CA-SK","i":"YXE","c":"Saskatoon"},{"cc":"DZA","r":"DZ-35","i":"ALG","c":"Algiers"},{"cc":"BFA","r":"BF-KAD","i":"OUA","c":"Ouagadougou"},{"cc":"GHA","r":"GH-AA","i":"ACC","c":"Accra"},{"cc":"NGA","r":"NG-FC","i":"ABV","c":"Abuja"},{"cc":"NGA","r":"NG-AK","i":"QUO","c":"Uyo"},{"cc":"NGA","r":"NG-KN","i":"KAN","c":"Kano"},{"cc":"NGA","r":"NG-LA","i":"LOS","c":"Lagos"},{"cc":"NER","r":"NE-8","i":"NIM","c":"Niamey"},{"cc":"TUN","r":"TN-11","i":"TUN","c":"Tunis"},{"cc":"BEL","r":"BE-BRU","i":"BRU","c":"Brussels"},{"cc":"BEL","r":"BE-WHT","i":"CRL","c":"Brussels"},{"cc":"BEL","r":"BE-WLG","i":"LGG","c":"Liège"},{"cc":"DEU","r":"DE-BR","i":"SXF","c":"Berlin"},{"cc":"DEU","r":"DE-SN","i":"DRS","c":"Dresden"},{"cc":"DEU","r":"DE-HE","i":"FRA","c":"Frankfurt am Main"},{"cc":"DEU","r":"DE-NW","i":"FMO","c":"Münster"},{"cc":"DEU","r":"DE-HH","i":"HAM","c":"Hamburg"},{"cc":"DEU","r":"DE-NW","i":"CGN","c":"Cologne"},{"cc":"DEU","r":"DE-NW","i":"DUS","c":"Düsseldorf"},{"cc":"DEU","r":"DE-BY","i":"MUC","c":"Munich"},{"cc":"DEU","r":"DE-BY","i":"NUE","c":"Nuremberg"},{"cc":"DEU","r":"DE-SN","i":"LEJ","c":"Leipzig"},{"cc":"DEU","r":"DE-BW","i":"STR","c":"Stuttgart"},{"cc":"DEU","r":"DE-BE","i":"TXL","c":"Berlin"},{"cc":"DEU","r":"DE-NI","i":"HAJ","c":"Hannover"},{"cc":"DEU","r":"DE-HB","i":"BRE","c":"Bremen"},{"cc":"DEU","r":"DE-NW","i":"DTM","c":"Dortmund"},{"cc":"DEU","r":"DE-BW","i":"FKB","c":"Baden-Baden"},{"cc":"EST","r":"EE-37","i":"TLL","c":"Tallinn"},{"cc":"FIN","r":"FI-ES","i":"HEL","c":"Helsinki"},{"cc":"GBR","r":"GB-NIR","i":"BFS","c":"Belfast"},{"cc":"GBR","r":"GB-NIR","i":"BHD","c":"Belfast"},{"cc":"GBR","r":"GB-ENG","i":"BHX","c":"Birmingham"},{"cc":"GBR","r":"GB-ENG","i":"MAN","c":"Manchester"},{"cc":"GBR","r":"GB-ENG","i":"DSA","c":"Doncaster"},{"cc":"GBR","r":"GB-WLS","i":"CWL","c":"Cardiff"},{"cc":"GBR","r":"GB-ENG","i":"BRS","c":"Bristol"},{"cc":"GBR","r":"GB-ENG","i":"LPL","c":"Liverpool"},{"cc":"GBR","r":"GB-ENG","i":"LTN","c":"London"},{"cc":"GBR","r":"GB-ENG","i":"BOH","c":"Bournemouth"},{"cc":"GBR","r":"GB-ENG","i":"SOU","c":"Southampton"},{"cc":"GBR","r":"GB-ENG","i":"LGW","c":"London"},{"cc":"GBR","r":"GB-ENG","i":"LHR","c":"London"},{"cc":"GBR","r":"GB-ENG","i":"LBA","c":"Leeds"},{"cc":"GBR","r":"GB-ENG","i":"NCL","c":"Newcastle"},{"cc":"GBR","r":"GB-ENG","i":"EMA","c":"Nottingham"},{"cc":"GBR","r":"GB-SCT","i":"ABZ","c":"Aberdeen"},{"cc":"GBR","r":"GB-SCT","i":"GLA","c":"Glasgow"},{"cc":"GBR","r":"GB-SCT","i":"EDI","c":"Edinburgh"},{"cc":"GBR","r":"GB-ENG","i":"NWI","c":"Norwich"},{"cc":"GBR","r":"GB-ENG","i":"STN","c":"London"},{"cc":"GBR","r":"GB-ENG","i":"EXT","c":"Exeter"},{"cc":"GBR","r":"GB-ENG","i":"LKZ","c":"Lakenheath"},{"cc":"GBR","r":"GB-ENG","i":"MHZ","c":"Mildenhall"},{"cc":"GBR","r":"GB-ENG","i":"FFD","c":"Fairford"},{"cc":"GBR","r":"GB-ENG","i":"BZZ","c":"Brize Norton"},{"cc":"NLD","r":"NL-NH","i":"AMS","c":"Amsterdam"},{"cc":"NLD","r":"NL-NB","i":"EIN","c":"Eindhoven"},{"cc":"IRL","r":"IE-C","i":"ORK","c":"Cork"},{"cc":"IRL","r":"IE-D","i":"DUB","c":"Dublin"},{"cc":"IRL","r":"IE-CE","i":"SNN","c":"Shannon"},{"cc":"DNK","r":"DK-83","i":"BLL","c":"Billund"},{"cc":"DNK","r":"DK-84","i":"CPH","c":"Copenhagen"},{"cc":"DNK","r":"DK-81","i":"AAL","c":"Aalborg"},{"cc":"LUX","r":"LU-L","i":"LUX","c":"Luxembourg"},{"cc":"NOR","r":"NO-18","i":"BOO","c":"Bodø"},{"cc":"NOR","r":"NO-12","i":"BGO","c":"Bergen"},{"cc":"NOR","r":"NO-02","i":"OSL","c":"Oslo"},{"cc":"NOR","r":"NO-19","i":"TOS","c":"Tromsø"},{"cc":"NOR","r":"NO-17","i":"TRD","c":"Trondheim"},{"cc":"NOR","r":"NO-11","i":"SVG","c":"Stavanger"},{"cc":"POL","r":"PL-PM","i":"GDN","c":"Gdańsk"},{"cc":"POL","r":"PL-MA","i":"KRK","c":"Kraków"},{"cc":"POL","r":"PL-SL","i":"KTW","c":"Katowice"},{"cc":"POL","r":"PL-MZ","i":"WMI","c":"Warsaw"},{"cc":"POL","r":"PL-WP","i":"POZ","c":"Poznań"},{"cc":"POL","r":"PL-MZ","i":"WAW","c":"Warsaw"},{"cc":"POL","r":"PL-DS","i":"WRO","c":"Wrocław"},{"cc":"SWE","r":"SE-Q","i":"GOT","c":"Gothenburg"},{"cc":"SWE","r":"SE-M","i":"MMX","c":"Malmö"},{"cc":"SWE","r":"SE-BD","i":"LLA","c":"Luleå"},{"cc":"SWE","r":"SE-AB","i":"ARN","c":"Stockholm"},{"cc":"DEU","r":"DE-RP","i":"RMS","c":"Ramstein"},{"cc":"LVA","r":"LV-RIX","i":"RIX","c":"Riga"},{"cc":"LTU","r":"LT-VL","i":"VNO","c":"Vilnius"},{"cc":"ZAF","r":"ZA-WC","i":"CPT","c":"Cape Town"},{"cc":"ZAF","r":"ZA-WC","i":"GRJ","c":"George"},{"cc":"ZAF","r":"ZA-NL","i":"DUR","c":"Durban"},{"cc":"ZAF","r":"ZA-GT","i":"JNB","c":"Johannesburg"},{"cc":"BWA","r":"BW-SE","i":"GBE","c":"Gaborone"},{"cc":"SWZ","r":"SZ-LU","i":"SHO","c":"Lubombo"},{"cc":"MUS","r":"MU-GP","i":"MRU","c":"Port Louis"},{"cc":"ZMB","r":"ZM-09","i":"LUN","c":"Lusaka"},{"cc":"MDG","r":"MG-T","i":"TNR","c":"Antananarivo"},{"cc":"AGO","r":"AO-LUA","i":"LAD","c":"Luanda"},{"cc":"MOZ","r":"MZ-MPM","i":"MPM","c":"Maputo"},{"cc":"SYC","r":"SC-20","i":"SEZ","c":"Mahe Island"},{"cc":"TCD","r":"TD-CB","i":"NDJ","c":"N\'Djamena"},{"cc":"ZWE","r":"ZW-HA","i":"HRE","c":"Harare"},{"cc":"NAM","r":"NA-KH","i":"WDH","c":"Windhoek"},{"cc":"COD","r":"CD-KN","i":"FIH","c":"Kinshasa"},{"cc":"MLI","r":"ML-2","i":"BKO","c":"Bamako"},{"cc":"ESP","r":"ES-CN","i":"SPC","c":"Sta Cruz de la Palma, La Palma Island"},{"cc":"ESP","r":"ES-CN","i":"LPA","c":"Gran Canaria Island"},{"cc":"ESP","r":"ES-CN","i":"TFS","c":"Tenerife Island"},{"cc":"ESP","r":"ES-CN","i":"TFN","c":"Tenerife Island"},{"cc":"SLE","r":"SL-N","i":"FNA","c":"Freetown"},{"cc":"LBR","r":"LR-MG","i":"ROB","c":"Monrovia"},{"cc":"MAR","r":"MA-CAS","i":"CMN","c":"Casablanca"},{"cc":"SEN","r":"SN-DK","i":"DSS","c":"Dakar"},{"cc":"SEN","r":"SN-DK","i":"DKR","c":"Dakar"},{"cc":"MRT","r":"MR-NKC","i":"NKC","c":"Nouakchott"},{"cc":"CPV","r":"CV-B","i":"SID","c":"Espargos"},{"cc":"ETH","r":"ET-AA","i":"ADD","c":"Addis Ababa"},{"cc":"SOM","r":"SO-WO","i":"HGA","c":"Hargeisa"},{"cc":"EGY","r":"EG-C","i":"CAI","c":"Cairo"},{"cc":"EGY","r":"EG-BA","i":"HRG","c":"Hurghada"},{"cc":"EGY","r":"EG-KN","i":"LXR","c":"Luxor"},{"cc":"KEN","r":"KE-110","i":"NBO","c":"Nairobi"},{"cc":"KEN","r":"KE-300","i":"MBA","c":"Mombasa"},{"cc":"LBY","r":"LY-TB","i":"TIP","c":"Tripoli"},{"cc":"RWA","r":"RW-01","i":"KGL","c":"Kigali"},{"cc":"SSD","r":"SS-17","i":"JUB","c":"Juba"},{"cc":"SDN","r":"SD-03","i":"KRT","c":"Khartoum"},{"cc":"TZA","r":"TZ-02","i":"DAR","c":"Dar es Salaam"},{"cc":"TZA","r":"TZ-07","i":"ZNZ","c":"Zanzibar"},{"cc":"UGA","r":"UG-C","i":"EBB","c":"Kampala"},{"cc":"IDN","r":"ID-KI","i":"AAP","c":"Samarinda"},{"cc":"USA","r":"US-NM","i":"ABQ","c":"Albuquerque"},{"cc":"USA","r":"US-MD","i":"ADW","c":"Camp Springs"},{"cc":"USA","r":"US-TX","i":"AFW","c":"Fort Worth"},{"cc":"USA","r":"US-GA","i":"AGS","c":"Augusta"},{"cc":"USA","r":"US-TX","i":"AMA","c":"Amarillo"},{"cc":"USA","r":"US-GA","i":"ATL","c":"Atlanta"},{"cc":"USA","r":"US-TX","i":"AUS","c":"Austin"},{"cc":"USA","r":"US-NC","i":"AVL","c":"Asheville"},{"cc":"USA","r":"US-CA","i":"BAB","c":"Marysville"},{"cc":"USA","r":"US-LA","i":"BAD","c":"Bossier c"},{"cc":"USA","r":"US-CT","i":"BDL","c":"Hartford"},{"cc":"USA","r":"US-WA","i":"BFI","c":"Seattle"},{"cc":"USA","r":"US-ME","i":"BGR","c":"Bangor"},{"cc":"USA","r":"US-AL","i":"BHM","c":"Birmingham"},{"cc":"USA","r":"US-MT","i":"BIL","c":"Billings"},{"cc":"USA","r":"US-IL","i":"BLV","c":"Belleville"},{"cc":"USA","r":"US-IL","i":"BMI","c":"Bloomington/Normal"},{"cc":"USA","r":"US-TN","i":"BNA","c":"Nashville"},{"cc":"USA","r":"US-ID","i":"BOI","c":"Boise"},{"cc":"USA","r":"US-MA","i":"BOS","c":"Boston"},{"cc":"USA","r":"US-NY","i":"BUF","c":"Buffalo"},{"cc":"USA","r":"US-MD","i":"BWI","c":"Baltimore"},{"cc":"USA","r":"US-SC","i":"CAE","c":"Columbia"},{"cc":"USA","r":"US-MS","i":"CBM","c":"Columbus"},{"cc":"USA","r":"US-TN","i":"CHA","c":"Chattanooga"},{"cc":"USA","r":"US-SC","i":"CHS","c":"Charleston"},{"cc":"USA","r":"US-IA","i":"CID","c":"Cedar Rapids"},{"cc":"USA","r":"US-OH","i":"CLE","c":"Cleveland"},{"cc":"USA","r":"US-NC","i":"CLT","c":"Charlotte"},{"cc":"USA","r":"US-OH","i":"CMH","c":"Columbus"},{"cc":"USA","r":"US-CO","i":"COS","c":"Colorado Springs"},{"cc":"USA","r":"US-TX","i":"CRP","c":"Corpus Christi"},{"cc":"USA","r":"US-WV","i":"CRW","c":"Charleston"},{"cc":"USA","r":"US-KY","i":"CVG","c":"Cincinnati / Covington"},{"cc":"USA","r":"US-NM","i":"CVS","c":"Clovis"},{"cc":"USA","r":"US-FL","i":"DAB","c":"Daytona Beach"},{"cc":"USA","r":"US-TX","i":"DAL","c":"Dallas"},{"cc":"TTO","r":"TT-POS","i":"POS","c":"Port of Spain"},{"cc":"ATG","r":"AG-04","i":"ANU","c":"St. John\'s"},{"cc":"BRB","r":"BB-01","i":"BGI","c":"Seawell"},{"cc":"CUW","r":"NL-CW","i":"CUR","c":"Willemstad"},{"cc":"DMA","r":"DM-02","i":"DOM","c":"Marigot"},{"cc":"VGB","r":"VG","i":"EIS","c":"Tortola"},{"cc":"MTQ","r":"MQ","i":"FDF","c":"Fort de France"},{"cc":"BHS","r":"BS-FP","i":"FPO","c":"Freeport"},{"cc":"CYM","r":"KY","i":"GCM","c":"Grand Cayman"},{"cc":"GUY","r":"GY-DE","i":"GEO","c":"Georgetown"},{"cc":"BHS","r":"BS-EX","i":"GGT","c":"George Town"},{"cc":"GRD","r":"GD-03","i":"GND","c":"St. George\'s"},{"cc":"JAM","r":"JM-08","i":"MBJ","c":"Montego Bay"},{"cc":"GUY","r":"GY-DE","i":"OGL","c":"Georgetown"},{"cc":"LCA","r":"LC-02","i":"SLU","c":"Castries"},{"cc":"VCT","r":"VC-04","i":"SVD","c":"Kingstown"},{"cc":"TTO","r":"TT-TOB","i":"TAB","c":"Tobago"},{"cc":"USA","r":"US-OH","i":"DAY","c":"Dayton"},{"cc":"USA","r":"US-IA","i":"DBQ","c":"Dubuque"},{"cc":"USA","r":"US-VA","i":"DCA","c":"Washington"},{"cc":"USA","r":"US-CO","i":"DEN","c":"Denver"},{"cc":"USA","r":"US-TX","i":"DFW","c":"Dallas-Fort Worth"},{"cc":"USA","r":"US-TX","i":"DLF","c":"Del Rio"},{"cc":"USA","r":"US-MN","i":"DLH","c":"Duluth"},{"cc":"USA","r":"US-DE","i":"DOV","c":"Dover"},{"cc":"USA","r":"US-IA","i":"DSM","c":"Des Moines"},{"cc":"USA","r":"US-MI","i":"DTW","c":"Detroit"},{"cc":"USA","r":"US-TX","i":"DYS","c":"Abilene"},{"cc":"USA","r":"US-CA","i":"EDW","c":"Edwards"},{"cc":"USA","r":"US-OK","i":"END","c":"Enid"},{"cc":"USA","r":"US-PA","i":"ERI","c":"Erie"},{"cc":"USA","r":"US-NJ","i":"EWR","c":"Newark"},{"cc":"USA","r":"US-OH","i":"FFO","c":"Dayton"},{"cc":"USA","r":"US-FL","i":"FLL","c":"Fort Lauderdale"},{"cc":"USA","r":"US-AR","i":"FSM","c":"Fort Smith"},{"cc":"USA","r":"US-TX","i":"FTW","c":"Fort Worth"},{"cc":"USA","r":"US-IN","i":"FWA","c":"Fort Wayne"},{"cc":"USA","r":"US-WA","i":"GEG","c":"Spokane"},{"cc":"USA","r":"US-MS","i":"GPT","c":"Gulfport"},{"cc":"USA","r":"US-WI","i":"GRB","c":"Green Bay"},{"cc":"USA","r":"US-NC","i":"GSB","c":"Goldsboro"},{"cc":"USA","r":"US-NC","i":"GSO","c":"Greensboro"},{"cc":"USA","r":"US-SC","i":"GSP","c":"Greenville"},{"cc":"USA","r":"US-IN","i":"GUS","c":"Peru"},{"cc":"USA","r":"US-MN","i":"HIB","c":"Hibbing"},{"cc":"USA","r":"US-NM","i":"HMN","c":"Alamogordo"},{"cc":"USA","r":"US-TX","i":"HOU","c":"Houston"},{"cc":"USA","r":"US-AL","i":"HSV","c":"Huntsville"},{"cc":"USA","r":"US-WV","i":"HTS","c":"Huntington"},{"cc":"USA","r":"US-VA","i":"IAD","c":"Washington"},{"cc":"USA","r":"US-TX","i":"IAH","c":"Houston"},{"cc":"USA","r":"US-KS","i":"ICT","c":"Wichita"},{"cc":"USA","r":"US-IN","i":"IND","c":"Indianapolis"},{"cc":"USA","r":"US-MS","i":"JAN","c":"Jackson"},{"cc":"USA","r":"US-FL","i":"JAX","c":"Jacksonville"},{"cc":"USA","r":"US-NY","i":"JFK","c":"New York"},{"cc":"USA","r":"US-MO","i":"JLN","c":"Joplin"},{"cc":"USA","r":"US-NV","i":"LAS","c":"Las Vegas"},{"cc":"USA","r":"US-CA","i":"LAX","c":"Los Angeles"},{"cc":"USA","r":"US-TX","i":"LBB","c":"Lubbock"},{"cc":"USA","r":"US-OH","i":"LCK","c":"Columbus"},{"cc":"USA","r":"US-KY","i":"LEX","c":"Lexington"},{"cc":"USA","r":"US-VA","i":"LFI","c":"Hampton"},{"cc":"USA","r":"US-LA","i":"LFT","c":"Lafayette"},{"cc":"USA","r":"US-NY","i":"LGA","c":"New York"},{"cc":"USA","r":"US-AR","i":"LIT","c":"Little Rock"},{"cc":"USA","r":"US-OK","i":"LTS","c":"Altus"},{"cc":"USA","r":"US-AZ","i":"LUF","c":"Glendale"},{"cc":"USA","r":"US-MI","i":"MBS","c":"Saginaw"},{"cc":"USA","r":"US-FL","i":"MCF","c":"Tampa"},{"cc":"USA","r":"US-MO","i":"MCI","c":"Kansas c"},{"cc":"USA","r":"US-FL","i":"MCO","c":"Orlando"},{"cc":"USA","r":"US-IL","i":"MDW","c":"Chicago"},{"cc":"USA","r":"US-TN","i":"MEM","c":"Memphis"},{"cc":"USA","r":"US-GA","i":"MGE","c":"Marietta"},{"cc":"USA","r":"US-AL","i":"MGM","c":"Montgomery"},{"cc":"USA","r":"US-NH","i":"MHT","c":"Manchester"},{"cc":"USA","r":"US-FL","i":"MIA","c":"Miami"},{"cc":"USA","r":"US-WI","i":"MKE","c":"Milwaukee"},{"cc":"USA","r":"US-IL","i":"MLI","c":"Moline"},{"cc":"USA","r":"US-LA","i":"MLU","c":"Monroe"},{"cc":"USA","r":"US-AL","i":"MOB","c":"Mobile"},{"cc":"USA","r":"US-WI","i":"MSN","c":"Madison"},{"cc":"USA","r":"US-MN","i":"MSP","c":"Minneapolis"},{"cc":"USA","r":"US-LA","i":"MSY","c":"New Orleans"},{"cc":"USA","r":"US-ID","i":"MUO","c":"Mountain Home"},{"cc":"USA","r":"US-CA","i":"OAK","c":"Oakland"},{"cc":"USA","r":"US-OK","i":"OKC","c":"Oklahoma c"},{"cc":"USA","r":"US-NE","i":"OMA","c":"Omaha"},{"cc":"USA","r":"US-CA","i":"ONT","c":"Ontario"},{"cc":"USA","r":"US-IL","i":"ORD","c":"Chicago"},{"cc":"USA","r":"US-VA","i":"ORF","c":"Norfolk"},{"cc":"USA","r":"US-FL","i":"PAM","c":"Panama c"},{"cc":"USA","r":"US-FL","i":"PBI","c":"West Palm Beach"},{"cc":"USA","r":"US-OR","i":"PDX","c":"Portland"},{"cc":"USA","r":"US-VA","i":"PHF","c":"Newport News"},{"cc":"USA","r":"US-PA","i":"PHL","c":"Philadelphia"},{"cc":"USA","r":"US-AZ","i":"PHX","c":"Phoenix"},{"cc":"USA","r":"US-IL","i":"PIA","c":"Peoria"},{"cc":"USA","r":"US-PA","i":"PIT","c":"Pittsburgh"},{"cc":"USA","r":"US-RI","i":"PVD","c":"Providence"},{"cc":"USA","r":"US-ME","i":"PWM","c":"Portland"},{"cc":"USA","r":"US-NC","i":"RDU","c":"Raleigh/Durham"},{"cc":"USA","r":"US-IL","i":"RFD","c":"Chicago/Rockford"},{"cc":"USA","r":"US-VA","i":"RIC","c":"Richmond"},{"cc":"USA","r":"US-TX","i":"RND","c":"Universal c"},{"cc":"USA","r":"US-NV","i":"RNO","c":"Reno"},{"cc":"USA","r":"US-VA","i":"ROA","c":"Roanoke"},{"cc":"USA","r":"US-NY","i":"ROC","c":"Rochester"},{"cc":"USA","r":"US-MN","i":"RST","c":"Rochester"},{"cc":"USA","r":"US-FL","i":"RSW","c":"Fort Myers"},{"cc":"USA","r":"US-CA","i":"SAN","c":"San Diego"},{"cc":"USA","r":"US-TX","i":"SAT","c":"San Antonio"},{"cc":"USA","r":"US-GA","i":"SAV","c":"Savannah"},{"cc":"USA","r":"US-IN","i":"SBN","c":"South Bend"},{"cc":"USA","r":"US-KY","i":"SDF","c":"Louisville"},{"cc":"USA","r":"US-WA","i":"SEA","c":"Seattle"},{"cc":"USA","r":"US-FL","i":"SFB","c":"Orlando"},{"cc":"USA","r":"US-CA","i":"SFO","c":"San Francisco"},{"cc":"USA","r":"US-MO","i":"SGF","c":"Springfield"},{"cc":"USA","r":"US-CA","i":"SJC","c":"San Jose"},{"cc":"USA","r":"US-WA","i":"SKA","c":"Spokane"},{"cc":"USA","r":"US-UT","i":"SLC","c":"Salt Lake c"},{"cc":"USA","r":"US-CA","i":"SMF","c":"Sacramento"},{"cc":"USA","r":"US-CA","i":"SNA","c":"Santa Ana"},{"cc":"USA","r":"US-IL","i":"SPI","c":"Springfield"},{"cc":"USA","r":"US-TX","i":"SPS","c":"Wichita Falls"},{"cc":"USA","r":"US-FL","i":"SRQ","c":"Sarasota/Bradenton"},{"cc":"USA","r":"US-SC","i":"SSC","c":"Sumter"},{"cc":"USA","r":"US-MO","i":"STL","c":"St Louis"},{"cc":"USA","r":"US-MO","i":"SUS","c":"St Louis"},{"cc":"USA","r":"US-CA","i":"SUU","c":"Fairfield"},{"cc":"USA","r":"US-IA","i":"SUX","c":"Sioux c"},{"cc":"USA","r":"US-NY","i":"SYR","c":"Syracuse"},{"cc":"USA","r":"US-MO","i":"SZL","c":"Knob Noster"},{"cc":"USA","r":"US-WA","i":"TCM","c":"Tacoma"},{"cc":"USA","r":"US-OK","i":"TIK","c":"Oklahoma c"},{"cc":"USA","r":"US-FL","i":"TLH","c":"Tallahassee"},{"cc":"USA","r":"US-OH","i":"TOL","c":"Toledo"},{"cc":"USA","r":"US-FL","i":"TPA","c":"Tampa"},{"cc":"USA","r":"US-TN","i":"TRI","c":"Bristol/Johnson/Kingsport"},{"cc":"USA","r":"US-OK","i":"TUL","c":"Tulsa"},{"cc":"USA","r":"US-AZ","i":"TUS","c":"Tucson"},{"cc":"USA","r":"US-TN","i":"TYS","c":"Knoxville"},{"cc":"USA","r":"US-CA","i":"VBG","c":"Lompoc"},{"cc":"USA","r":"US-FL","i":"VPS","c":"Valparaiso"},{"cc":"USA","r":"US-GA","i":"WRB","c":"Warner Robins"},{"cc":"ALB","r":"AL-11","i":"TIA","c":"Tirana"},{"cc":"BGR","r":"BG-02","i":"BOJ","c":"Burgas"},{"cc":"BGR","r":"BG-23","i":"SOF","c":"Sofia"},{"cc":"BGR","r":"BG-03","i":"VAR","c":"Varna"},{"cc":"CYP","r":"CY-04","i":"LCA","c":"Larnarca"},{"cc":"CYP","r":"CY-06","i":"PFO","c":"Paphos"},{"cc":"GBR","r":"GB-U-A","i":"AKT","c":"Akrotiri"},{"cc":"HRV","r":"HR-21","i":"ZAG","c":"Zagreb"},{"cc":"ESP","r":"ES-V","i":"ALC","c":"Alicante"},{"cc":"ESP","r":"ES-CT","i":"BCN","c":"Barcelona"},{"cc":"ESP","r":"ES-M","i":"MAD","c":"Madrid"},{"cc":"ESP","r":"ES-AN","i":"AGP","c":"Málaga"},{"cc":"ESP","r":"ES-PM","i":"PMI","c":"Palma De Mallorca"},{"cc":"ESP","r":"ES-GA","i":"SCQ","c":"Santiago de Compostela"},{"cc":"FRA","r":"FR-NAQ","i":"BOD","c":"Bordeaux/Mérignac"},{"cc":"FRA","r":"FR-OCC","i":"TLS","c":"Toulouse/Blagnac"},{"cc":"FRA","r":"FR-ARA","i":"LYS","c":"Lyon"},{"cc":"FRA","r":"FR-PAC","i":"MRS","c":"Marseille"},{"cc":"FRA","r":"FR-PAC","i":"NCE","c":"Nice"},{"cc":"FRA","r":"FR-IDF","i":"CDG","c":"Paris"},{"cc":"FRA","r":"FR-IDF","i":"ORY","c":"Paris"},{"cc":"FRA","r":"FR-GES","i":"BSL","c":"Bâle/Mulhouse"},{"cc":"GRC","r":"GR-A1","i":"ATH","c":"Athens"},{"cc":"GRC","r":"GR-91","i":"HER","c":"Heraklion"},{"cc":"GRC","r":"GR-54","i":"SKG","c":"Thessaloniki"},{"cc":"HUN","r":"HU-PE","i":"BUD","c":"Budapest"},{"cc":"ITA","r":"IT-75","i":"BRI","c":"Bari"},{"cc":"ITA","r":"IT-82","i":"CTA","c":"Catania"},{"cc":"ITA","r":"IT-82","i":"PMO","c":"Palermo"},{"cc":"ITA","r":"IT-88","i":"CAG","c":"Cagliari"},{"cc":"ITA","r":"IT-25","i":"MXP","c":"Milan"},{"cc":"ITA","r":"IT-25","i":"BGY","c":"Bergamo"},{"cc":"ITA","r":"IT-21","i":"TRN","c":"Torino"},{"cc":"ITA","r":"IT-42","i":"GOA","c":"Genova"},{"cc":"ITA","r":"IT-25","i":"LIN","c":"Milan"},{"cc":"ITA","r":"IT-45","i":"BLQ","c":"Bologna"},{"cc":"ITA","r":"IT-34","i":"TSF","c":"Treviso"},{"cc":"ITA","r":"IT-34","i":"VRN","c":"Verona"},{"cc":"ITA","r":"IT-34","i":"VCE","c":"Venice"},{"cc":"ITA","r":"IT-62","i":"CIA","c":"Rome"},{"cc":"ITA","r":"IT-62","i":"FCO","c":"Rome"},{"cc":"ITA","r":"IT-72","i":"NAP","c":"Nápoli"},{"cc":"ITA","r":"IT-52","i":"PSA","c":"Pisa"},{"cc":"SVN","r":"SI-061","i":"LJU","c":"Ljubljana"},{"cc":"CZE","r":"CZ-PR","i":"PRG","c":"Prague"},{"cc":"ISR","r":"IL-M","i":"TLV","c":"Tel Aviv"},{"cc":"ISR","r":"IL-D","i":"VDA","c":"Eilat"},{"cc":"MLT","r":"MT-25","i":"MLA","c":"Valletta"},{"cc":"AUT","r":"AT-9","i":"VIE","c":"Vienna"},{"cc":"PRT","r":"PT-08","i":"FAO","c":"Faro"},{"cc":"PRT","r":"PT-20","i":"TER","c":"Praia da Vitória"},{"cc":"PRT","r":"PT-20","i":"PDL","c":"Ponta Delgada"},{"cc":"PRT","r":"PT-13","i":"OPO","c":"Porto"},{"cc":"PRT","r":"PT-11","i":"LIS","c":"Lisbon"},{"cc":"BIH","r":"BA-BIH","i":"SJJ","c":"Sarajevo"},{"cc":"ROU","r":"RO-B","i":"OTP","c":"Bucharest"},{"cc":"CHE","r":"CH-GE","i":"GVA","c":"Geneva"},{"cc":"CHE","r":"CH-ZH","i":"ZRH","c":"Zurich"},{"cc":"TUR","r":"TR-06","i":"ESB","c":"Ankara"},{"cc":"TUR","r":"TR-01","i":"ADA","c":"Adana"},{"cc":"TUR","r":"TR-07","i":"AYT","c":"Antalya"},{"cc":"TUR","r":"TR-27","i":"GZT","c":"Gaziantep"},{"cc":"TUR","r":"TR-34","i":"ISL","c":"Istanbul"},{"cc":"TUR","r":"TR-35","i":"ADB","c":"İzmir"},{"cc":"TUR","r":"TR-48","i":"DLM","c":"Dalaman"},{"cc":"TUR","r":"TR-25","i":"ERZ","c":"Erzurum"},{"cc":"TUR","r":"TR-61","i":"TZX","c":"Trabzon"},{"cc":"TUR","r":"TR-32","i":"ISE","c":"Isparta"},{"cc":"TUR","r":"TR-48","i":"BJV","c":"Bodrum"},{"cc":"TUR","r":"TR-34","i":"SAW","c":"Istanbul"},{"cc":"TUR","r":"TR-34","i":"IST","c":"Istanbul"},{"cc":"MKD","r":"MK-004","i":"SKP","c":"Skopje"},{"cc":"SRB","r":"RS-00","i":"BEG","c":"Belgrade"},{"cc":"MNE","r":"ME-16","i":"TGD","c":"Podgorica"},{"cc":"SVK","r":"SK-BL","i":"BTS","c":"Bratislava"},{"cc":"DOM","r":"DO-11","i":"PUJ","c":"Punta Cana"},{"cc":"DOM","r":"DO-01","i":"SDQ","c":"Santo Domingo"},{"cc":"GTM","r":"GT-GU","i":"GUA","c":"Guatemala c"},{"cc":"JAM","r":"JM-01","i":"KIN","c":"Kingston"},{"cc":"MEX","r":"MX-GRO","i":"ACA","c":"Acapulco"},{"cc":"MEX","r":"MX-JAL","i":"GDL","c":"Guadalajara"},{"cc":"MEX","r":"MX-SON","i":"HMO","c":"Hermosillo"},{"cc":"MEX","r":"MX-DIF","i":"MEX","c":"Mexico c"},{"cc":"MEX","r":"MX-NLE","i":"MTY","c":"Monterrey"},{"cc":"MEX","r":"MX-JAL","i":"PVR","c":"Puerto Vallarta"},{"cc":"MEX","r":"MX-BCS","i":"SJD","c":"San José del Cabo"},{"cc":"MEX","r":"MX-BCN","i":"TIJ","c":"Tijuana"},{"cc":"MEX","r":"MX-ROO","i":"CUN","c":"Cancún"},{"cc":"PAN","r":"PA-8","i":"PTY","c":"Tocumen"},{"cc":"CRI","r":"CR-G","i":"LIR","c":"Liberia"},{"cc":"SLV","r":"SV-PA","i":"SAL","c":"San Salvador (San Luis Talpa)"},{"cc":"CUB","r":"CU-03","i":"HAV","c":"Havana"},{"cc":"CUB","r":"CU-04","i":"VRA","c":"Varadero"},{"cc":"BHS","r":"BS-NP","i":"NAS","c":"Nassau"},{"cc":"BLZ","r":"BZ-BZ","i":"BZE","c":"Belize c"},{"cc":"COK","r":"CK-U-A","i":"RAR","c":"Avarua"},{"cc":"PYF","r":"PF-U-A","i":"PPT","c":"Papeete"},{"cc":"NZL","r":"NZ-AUK","i":"AKL","c":"Auckland"},{"cc":"NZL","r":"NZ-CAN","i":"CHC","c":"Christchurch"},{"cc":"NZL","r":"NZ-WGN","i":"WLG","c":"Wellington"},{"cc":"BHR","r":"BH-15","i":"BAH","c":"Manama"},{"cc":"SAU","r":"SA-04","i":"DMM","c":"Ad Dammam"},{"cc":"SAU","r":"SA-04","i":"DHA","c":"Dhahran"},{"cc":"SAU","r":"SA-02","i":"JED","c":"Jeddah"},{"cc":"SAU","r":"SA-03","i":"MED","c":"Medina"},{"cc":"SAU","r":"SA-01","i":"RUH","c":"Riyadh"},{"cc":"IRN","r":"IR-07","i":"IKA","c":"Tehran"},{"cc":"IRN","r":"IR-07","i":"THR","c":"Tehran"},{"cc":"IRN","r":"IR-30","i":"MHD","c":"Mashhad"},{"cc":"IRN","r":"IR-14","i":"SYZ","c":"Shiraz"},{"cc":"IRN","r":"IR-01","i":"TBZ","c":"Tabriz"},{"cc":"JOR","r":"JO-AM","i":"AMM","c":"Amman"},{"cc":"KWT","r":"KW-FA","i":"KWI","c":"Kuwait c"},{"cc":"LBN","r":"LB-JL","i":"BEY","c":"Beirut"},{"cc":"OMN","r":"OM-WU","i":"DQM","c":"Duqm"},{"cc":"OMN","r":"OM-BA","i":"MNH","c":"Al Masna\'ah"},{"cc":"ARE","r":"AE-AZ","i":"AUH","c":"Abu Dhabi"},{"cc":"ARE","r":"AE-DU","i":"DXB","c":"Dubai"},{"cc":"ARE","r":"AE-DU","i":"DWC","c":"Jebel Ali"},{"cc":"ARE","r":"AE-SH","i":"SHJ","c":"Sharjah"},{"cc":"OMN","r":"OM-MA","i":"MCT","c":"Muscat"},{"cc":"PAK","r":"PK-PB","i":"ISB","c":"Islamabad"},{"cc":"PAK","r":"PK-PB","i":"SKT","c":"Sialkot"},{"cc":"IRQ","r":"IQ-BG","i":"BGW","c":"Baghdad"},{"cc":"IRQ","r":"IQ-BA","i":"BSR","c":"Basrah"},{"cc":"SYR","r":"SY-HL","i":"ALP","c":"Aleppo"},{"cc":"SYR","r":"SY-DI","i":"DAM","c":"Damascus"},{"cc":"SYR","r":"SY-LA","i":"LTK","c":"Latakia"},{"cc":"QAT","r":"QA-DA","i":"DOH","c":"Doha"},{"cc":"USA","r":"US-AK","i":"FAI","c":"Fairbanks"},{"cc":"USA","r":"US-AK","i":"ANC","c":"Anchorage"},{"cc":"GUM","r":"GU-U-A","i":"GUM","c":"Hagåtña, Guam International Airport"},{"cc":"PHL","r":"PH-MSR","i":"CGY","c":"Cagayan de Oro c"},{"cc":"USA","r":"US-HI","i":"HNL","c":"Honolulu"},{"cc":"TWN","r":"TW-X-KM","i":"KNH","c":"Shang-I"},{"cc":"TWN","r":"TW-KHH","i":"KHH","c":"Kaohsiung c"},{"cc":"TWN","r":"TW-TAO","i":"TPE","c":"Taipei"},{"cc":"JPN","r":"JP-12","i":"NRT","c":"Tokyo / Narita"},{"cc":"JPN","r":"JP-27","i":"KIX","c":"Osaka"},{"cc":"JPN","r":"JP-01","i":"CTS","c":"Chitose / Tomakomai"},{"cc":"JPN","r":"JP-40","i":"FUK","c":"Fukuoka"},{"cc":"JPN","r":"JP-46","i":"KOJ","c":"Kagoshima"},{"cc":"JPN","r":"JP-23","i":"NGO","c":"Tokoname"},{"cc":"JPN","r":"JP-22","i":"FSZ","c":"Makinohara / Shimada"},{"cc":"JPN","r":"JP-27","i":"ITM","c":"Osaka"},{"cc":"JPN","r":"JP-13","i":"HND","c":"Ota, Tokyo"},{"cc":"JPN","r":"JP-13","i":"OKO","c":"Fussa"},{"cc":"KOR","r":"KR-46","i":"MWX","c":"Piseo-ri (Muan)"},{"cc":"KOR","r":"KR-45","i":"KUV","c":"Kunsan"},{"cc":"KOR","r":"KR-49","i":"CJU","c":"Jeju c"},{"cc":"KOR","r":"KR-26","i":"PUS","c":"Busan"},{"cc":"KOR","r":"KR-28","i":"ICN","c":"Seoul"},{"cc":"KOR","r":"KR-41","i":"OSN","c":"Pyeongtaek"},{"cc":"KOR","r":"KR-11","i":"GMP","c":"Seoul"},{"cc":"KOR","r":"KR-43","i":"CJJ","c":"Cheongju"},{"cc":"JPN","r":"JP-47","i":"OKA","c":"Naha"},{"cc":"JPN","r":"JP-47","i":"DNA","c":"Okinawa"},{"cc":"PHL","r":"PH-PAM","i":"CRK","c":"Angeles/Mabalacat"},{"cc":"PHL","r":"PH-U-A","i":"MNL","c":"Pasay / Parañaque, Metro Manila"},{"cc":"PHL","r":"PH-DAV","i":"DVO","c":"Davao c"},{"cc":"PHL","r":"PH-CEB","i":"CEB","c":"Lapu-Lapu c"},{"cc":"RUS","r":"RU-CE","i":"GRV","c":"Grozny"},{"cc":"ARG","r":"AR-B","i":"EZE","c":"Buenos Aires"},{"cc":"BRA","r":"BR-PA","i":"BEL","c":"Belém"},{"cc":"BRA","r":"BR-DF","i":"BSB","c":"Brasília"},{"cc":"BRA","r":"BR-MG","i":"CNF","c":"Belo Horizonte"},{"cc":"BRA","r":"BR-PR","i":"CWB","c":"Curitiba"},{"cc":"BRA","r":"BR-AM","i":"MAO","c":"Manaus"},{"cc":"BRA","r":"BR-SC","i":"FLN","c":"Florianópolis"},{"cc":"BRA","r":"BR-RJ","i":"GIG","c":"Rio De Janeiro"},{"cc":"BRA","r":"BR-SP","i":"GRU","c":"São Paulo"},{"cc":"BRA","r":"BR-RN","i":"NAT","c":"Natal"},{"cc":"BRA","r":"BR-SP","i":"CGH","c":"São Paulo"},{"cc":"BRA","r":"BR-BA","i":"SSA","c":"Salvador"},{"cc":"CHL","r":"CL-RM","i":"SCL","c":"Santiago"},{"cc":"ECU","r":"EC-X","i":"LTX","c":"Latacunga"},{"cc":"ECU","r":"EC-P","i":"UIO","c":"Quito"},{"cc":"COL","r":"CO-CUN","i":"BOG","c":"Bogota"},{"cc":"BOL","r":"BO-S","i":"VVI","c":"Santa Cruz"},{"cc":"PER","r":"PE-LIM","i":"LIM","c":"Lima"},{"cc":"PER","r":"PE-CUS","i":"CUZ","c":"Cusco"},{"cc":"URY","r":"UY-CA","i":"MVD","c":"Montevideo"},{"cc":"VEN","r":"VE-B","i":"BLA","c":"Barcelona"},{"cc":"VEN","r":"VE-X","i":"CCS","c":"Caracas"},{"cc":"GLP","r":"GP-U-A","i":"PTP","c":"Pointe-à-Pitre"},{"cc":"PRI","r":"PR-U-A","i":"SJU","c":"San Juan"},{"cc":"TUN","r":"TN-51","i":"NBE","c":"Enfidha"},{"cc":"SXM","r":"SX-U-A","i":"SXM","c":"Saint Martin"},{"cc":"KAZ","r":"KZ-ALM","i":"ALA","c":"Almaty"},{"cc":"KAZ","r":"KZ-AKM","i":"TSE","c":"Astana"},{"cc":"KGZ","r":"KG-C","i":"FRU","c":"Bishkek"},{"cc":"KAZ","r":"KZ-KAR","i":"KGF","c":"Karaganda"},{"cc":"AZE","r":"AZ-BA","i":"GYD","c":"Baku"},{"cc":"ARM","r":"AM-ER","i":"EVN","c":"Yerevan"},{"cc":"GEO","r":"GE-TB","i":"TBS","c":"Tbilisi"},{"cc":"RUS","r":"RU-KHA","i":"KHV","c":"Khabarovsk"},{"cc":"UKR","r":"UA-32","i":"KBP","c":"Kiev"},{"cc":"UKR","r":"UA-43","i":"SIP","c":"Simferopol"},{"cc":"UKR","r":"UA-63","i":"HRK","c":"Kharkiv"},{"cc":"UKR","r":"UA-51","i":"ODS","c":"Odessa"},{"cc":"RUS","r":"RU-SPE","i":"LED","c":"St. Petersburg"},{"cc":"BLR","r":"BY-MI","i":"MSQ","c":"Minsk"},{"cc":"RUS","r":"RU-KYA","i":"KJA","c":"Krasnoyarsk"},{"cc":"RUS","r":"RU-NVS","i":"OVB","c":"Novosibirsk"},{"cc":"RUS","r":"RU-ROS","i":"ROV","c":"Rostov-on-Don"},{"cc":"RUS","r":"RU-KDA","i":"AER","c":"Sochi"},{"cc":"RUS","r":"RU-SVE","i":"SVX","c":"Yekaterinburg"},{"cc":"TKM","r":"TM-A","i":"ASB","c":"Ashgabat"},{"cc":"UZB","r":"UZ-TO","i":"TAS","c":"Tashkent"},{"cc":"RUS","r":"RU-MOS","i":"ZIA","c":"Moscow"},{"cc":"RUS","r":"RU-MOS","i":"DME","c":"Moscow"},{"cc":"RUS","r":"RU-MOS","i":"SVO","c":"Moscow"},{"cc":"RUS","r":"RU-MOS","i":"VKO","c":"Moscow"},{"cc":"RUS","r":"RU-TA","i":"KZN","c":"Kazan"},{"cc":"RUS","r":"RU-BA","i":"UFA","c":"Ufa"},{"cc":"RUS","r":"RU-SAM","i":"KUF","c":"Samara"},{"cc":"IND","r":"IN-MM","i":"BOM","c":"Mumbai"},{"cc":"IND","r":"IN-GA","i":"GOI","c":"Vasco da Gama"},{"cc":"LKA","r":"LK-1","i":"CMB","c":"Colombo"},{"cc":"LKA","r":"LK-3","i":"HRI","c":"Mattala"},{"cc":"KHM","r":"KH-8","i":"PNH","c":"Phnom Penh"},{"cc":"KHM","r":"KH-17","i":"REP","c":"Siem Reap"},{"cc":"IND","r":"IN-WB","i":"CCU","c":"Kolkata"},{"cc":"BGD","r":"BD-3","i":"DAC","c":"Dhaka"},{"cc":"HKG","r":"HK-U-A","i":"HKG","c":"Hong Kong"},{"cc":"IND","r":"IN-PB","i":"ATQ","c":"Amritsar"},{"cc":"IND","r":"IN-DL","i":"DEL","c":"New Delhi"},{"cc":"MAC","r":"MO-U-A","i":"MFM","c":"Macau"},{"cc":"NPL","r":"NP-BA","i":"KTM","c":"Kathmandu"},{"cc":"IND","r":"IN-KA","i":"BLR","c":"Bangalore"},{"cc":"IND","r":"IN-KL","i":"COK","c":"Kochi"},{"cc":"IND","r":"IN-KL","i":"CCJ","c":"Calicut"},{"cc":"IND","r":"IN-TG","i":"HYD","c":"Hyderabad"},{"cc":"IND","r":"IN-TN","i":"MAA","c":"Chennai"},{"cc":"IND","r":"IN-KL","i":"TRV","c":"Thiruvananthapuram"},{"cc":"MDV","r":"MV-MLE","i":"MLE","c":"Malé"},{"cc":"THA","r":"TH-10","i":"DMK","c":"Bangkok"},{"cc":"THA","r":"TH-10","i":"BKK","c":"Bangkok"},{"cc":"THA","r":"TH-50","i":"CNX","c":"Chiang Mai"},{"cc":"THA","r":"TH-83","i":"HKT","c":"Phuket"},{"cc":"VNM","r":"VN-60","i":"DAD","c":"Da Nang"},{"cc":"VNM","r":"VN-15","i":"HAN","c":"Hanoi"},{"cc":"VNM","r":"VN-23","i":"SGN","c":"Ho Chi Minh c"},{"cc":"MMR","r":"MM-04","i":"MDL","c":"Mandalay"},{"cc":"MMR","r":"MM-06","i":"RGN","c":"Yangon"},{"cc":"IDN","r":"ID-SN","i":"UPG","c":"Ujung Pandang-Celebes Island"},{"cc":"IDN","r":"ID-BA","i":"DPS","c":"Denpasar-Bali Island"},{"cc":"IDN","r":"ID-PA","i":"DJJ","c":"Jayapura-Papua Island"},{"cc":"IDN","r":"ID-JI","i":"SUB","c":"Surabaya"},{"cc":"IDN","r":"ID-PB","i":"SOQ","c":"Sorong-Papua Island"},{"cc":"BRN","r":"BN-BM","i":"BWN","c":"Bandar Seri Begawan"},{"cc":"IDN","r":"ID-BT","i":"CGK","c":"Jakarta"},{"cc":"IDN","r":"ID-SU","i":"KNO","c":"Medan"},{"cc":"MYS","r":"MY-14","i":"KUL","c":"Kuala Lumpur"},{"cc":"SGP","r":"SG-04","i":"SIN","c":"Singapore"},{"cc":"AUS","r":"AU-QLD","i":"BNE","c":"Brisbane"},{"cc":"AUS","r":"AU-VIC","i":"MEL","c":"Melbourne"},{"cc":"CHN","r":"CN-37","i":"YNT","c":"Yantai"},{"cc":"AUS","r":"AU-SA","i":"ADL","c":"Adelaide"},{"cc":"AUS","r":"AU-WA","i":"PER","c":"Perth"},{"cc":"AUS","r":"AU-ACT","i":"CBR","c":"Canberra"},{"cc":"AUS","r":"AU-NSW","i":"SYD","c":"Sydney"},{"cc":"CHN","r":"CN-11","i":"PEK","c":"Beijing"},{"cc":"CHN","r":"CN-13","i":"PKX","c":"Beijing"},{"cc":"CHN","r":"CN-15","i":"HET","c":"Hohhot"},{"cc":"CHN","r":"CN-12","i":"TSN","c":"Tianjin"},{"cc":"CHN","r":"CN-14","i":"TYN","c":"Taiyuan"},{"cc":"CHN","r":"CN-44","i":"CAN","c":"Guangzhou"},{"cc":"CHN","r":"CN-43","i":"CSX","c":"Changsha"},{"cc":"CHN","r":"CN-45","i":"KWL","c":"Guilin c"},{"cc":"CHN","r":"CN-45","i":"NNG","c":"Nanning"},{"cc":"CHN","r":"CN-44","i":"SZX","c":"Shenzhen"},{"cc":"CHN","r":"CN-41","i":"CGO","c":"Zhengzhou"},{"cc":"CHN","r":"CN-42","i":"WUH","c":"Wuhan"},{"cc":"CHN","r":"CN-46","i":"HAK","c":"Haikou"},{"cc":"CHN","r":"CN-46","i":"SYX","c":"Sanya"},{"cc":"CHN","r":"CN-61","i":"XIY","c":"Xi\'an"},{"cc":"MNG","r":"MN-047","i":"UBN","c":"Ulaanbaatar"},{"cc":"MNG","r":"MN-1","i":"ULN","c":"Ulan Bator"},{"cc":"CHN","r":"CN-53","i":"KMG","c":"Kunming"},{"cc":"CHN","r":"CN-35","i":"XMN","c":"Xiamen"},{"cc":"CHN","r":"CN-35","i":"FOC","c":"Fuzhou"},{"cc":"CHN","r":"CN-33","i":"HGH","c":"Hangzhou"},{"cc":"CHN","r":"CN-37","i":"TNA","c":"Jinan"},{"cc":"CHN","r":"CN-33","i":"NGB","c":"Ningbo"},{"cc":"CHN","r":"CN-32","i":"NKG","c":"Nanjing"},{"cc":"CHN","r":"CN-31","i":"PVG","c":"Shanghai"},{"cc":"CHN","r":"CN-31","i":"SHA","c":"Shanghai"},{"cc":"CHN","r":"CN-33","i":"WNZ","c":"Wenzhou"},{"cc":"CHN","r":"CN-50","i":"CKG","c":"Chongqing"},{"cc":"CHN","r":"CN-52","i":"KWE","c":"Guiyang"},{"cc":"CHN","r":"CN-51","i":"CTU","c":"Chengdu"},{"cc":"CHN","r":"CN-65","i":"URC","c":"Ürümqi"},{"cc":"CHN","r":"CN-23","i":"HRB","c":"Harbin"},{"cc":"CHN","r":"CN-21","i":"DLC","c":"Dalian"},{"cc":"CHN","r":"CN-21","i":"SHE","c":"Shenyang"},{"cc":"TUR","r":"TR-07","i":"GZP","c":"Gazipasa"},{"cc":"EGY","r":"EG-BA","i":"RMF","c":"Marsa Alam"},{"cc":"EGY","r":"EG-JS","i":"SSH","c":"Sharm El Sheikh"},{"cc":"SUR","r":"SR-PR","i":"PBM","c":"Zanderij"},{"cc":"USA","r":"US-CA","i":"BUR","c":"Burbank"},{"cc":"USA","r":"US-TX","i":"ELP","c":"El Paso"},{"cc":"ABW","r":"AW-U-A","i":"AUA","c":"Aruba"},{"cc":"BMU","r":"BM-U-A","i":"BDA","c":"Bermuda"},{"cc":"BES","r":"BQ-U-A","i":"BON","c":"Bonaire"},{"cc":"BHS","r":"BS-HI","i":"ELH","c":"North Eleuthera"},{"cc":"BHS","r":"BS-MH","i":"MHH","c":"Marsh Harbour"},{"cc":"CAN","r":"CA-QC","i":"YQB","c":"Quebec"},{"cc":"COL","r":"CO-ANT","i":"MDE","c":"Medellin"},{"cc":"COL","r":"CO-ATL","i":"BAQ","c":"Barranquilla"},{"cc":"COL","r":"CO-BOL","i":"CTG","c":"Cartagena"},{"cc":"COL","r":"CO-RIS","i":"PEI","c":"Pereira"},{"cc":"COL","r":"CO-VAC","i":"CLO","c":"Cali"},{"cc":"CRI","r":"CR-A","i":"SJO","c":"San Jose"},{"cc":"DOM","r":"DO-18","i":"POP","c":"Puerto Plata"},{"cc":"DOM","r":"DO-25","i":"STI","c":"Santiago"},{"cc":"ECU","r":"EC-G","i":"GYE","c":"Guayaquil"},{"cc":"HND","r":"HN-CR","i":"SAP","c":"San Pedro Sula"},{"cc":"HND","r":"HN-FM","i":"TGU","c":"Tegucigalpa"},{"cc":"HND","r":"HN-IB","i":"RTB","c":"Roatan"},{"cc":"HTI","r":"HT-OU","i":"PAP","c":"Port Au Prince"},{"cc":"KNA","r":"KN-U-A","i":"SKB","c":"St. Kitts"},{"cc":"LCA","r":"LC-11","i":"UVF","c":"St. Lucia"},{"cc":"MEX","r":"MX-AGU","i":"AGU","c":"Aguascalientes"},{"cc":"MEX","r":"MX-BCS","i":"LAP","c":"La Paz"},{"cc":"MEX","r":"MX-BCS","i":"LTO","c":"Loreto"},{"cc":"MEX","r":"MX-CHH","i":"CUU","c":"Chihuahua"},{"cc":"MEX","r":"MX-COA","i":"TRC","c":"Torreon"},{"cc":"MEX","r":"MX-COL","i":"ZLO","c":"Manzanillo"},{"cc":"MEX","r":"MX-DUR","i":"DGO","c":"Durango"},{"cc":"MEX","r":"MX-GRO","i":"ZIH","c":"Ixtapa/Zihuatanejo"},{"cc":"MEX","r":"MX-GUA","i":"BJX","c":"Leon/Guanajuato"},{"cc":"MEX","r":"MX-MIC","i":"MLM","c":"Morelia"},{"cc":"MEX","r":"MX-OAX","i":"HUX","c":"Huatulco"},{"cc":"MEX","r":"MX-OAX","i":"OAX","c":"Oaxaca"},{"cc":"MEX","r":"MX-QUE","i":"QRO","c":"Queretaro"},{"cc":"MEX","r":"MX-ROO","i":"CZM","c":"Cozumel"},{"cc":"MEX","r":"MX-SIN","i":"CUL","c":"Culiacan"},{"cc":"MEX","r":"MX-SIN","i":"MZT","c":"Mazatlan"},{"cc":"MEX","r":"MX-SLP","i":"SLP","c":"San Luis Potosi"},{"cc":"MEX","r":"MX-YUC","i":"MID","c":"Merida"},{"cc":"MEX","r":"MX-ZAC","i":"ZCL","c":"Zacatecas"},{"cc":"NIC","r":"NI-MN","i":"MGA","c":"Managua"},{"cc":"TCA","r":"TC-PR","i":"PLS","c":"Providenciales"},{"cc":"USA","r":"US-AR","i":"XNA","c":"Fayetteville/Springd."},{"cc":"USA","r":"US-AR","i":"TXK","c":"Texarkana"},{"cc":"USA","r":"US-AZ","i":"FLG","c":"Grand Canyon"},{"cc":"USA","r":"US-AZ","i":"YUM","c":"Yuma"},{"cc":"USA","r":"US-CA","i":"BFL","c":"Bakersfield"},{"cc":"USA","r":"US-CA","i":"FAT","c":"Fresno"},{"cc":"USA","r":"US-CA","i":"LGB","c":"Long Beach"},{"cc":"USA","r":"US-CA","i":"MRY","c":"Monterey"},{"cc":"USA","r":"US-CA","i":"PSP","c":"Palm Springs"},{"cc":"USA","r":"US-CA","i":"SBP","c":"San Luis Obispo"},{"cc":"USA","r":"US-CA","i":"SBA","c":"Santa Barbara"},{"cc":"USA","r":"US-CA","i":"STS","c":"Santa Rosa"},{"cc":"USA","r":"US-CO","i":"ASE","c":"Aspen"},{"cc":"USA","r":"US-CO","i":"DRO","c":"Durango"},{"cc":"USA","r":"US-CO","i":"GJT","c":"Grand Junction"},{"cc":"USA","r":"US-CO","i":"GUC","c":"Gunnison"},{"cc":"USA","r":"US-CO","i":"HDN","c":"Hayden"},{"cc":"USA","r":"US-CO","i":"MTJ","c":"Montrose"},{"cc":"USA","r":"US-CO","i":"EGE","c":"Vail/Eagle"},{"cc":"USA","r":"US-CT","i":"HVN","c":"New Haven"},{"cc":"USA","r":"US-FL","i":"GNV","c":"Gainesville"},{"cc":"USA","r":"US-FL","i":"EYW","c":"Key West"},{"cc":"USA","r":"US-FL","i":"MLB","c":"Melbourne"},{"cc":"USA","r":"US-FL","i":"ECP","c":"Panama c"},{"cc":"USA","r":"US-FL","i":"PNS","c":"Pensacola"},{"cc":"USA","r":"US-HI","i":"OGG","c":"Kahului/Maui"},{"cc":"USA","r":"US-HI","i":"KOA","c":"Kona/Hawaii"},{"cc":"USA","r":"US-HI","i":"LIH","c":"Lihue"},{"cc":"USA","r":"US-IA","i":"ALO","c":"Waterloo"},{"cc":"USA","r":"US-IL","i":"CMI","c":"Champaign/Urbana"},{"cc":"USA","r":"US-IN","i":"EVV","c":"Evansville"},{"cc":"USA","r":"US-KS","i":"GCK","c":"Garden c"},{"cc":"USA","r":"US-KS","i":"MHK","c":"Manhattan"},{"cc":"USA","r":"US-LA","i":"AEX","c":"Alexandria"},{"cc":"USA","r":"US-LA","i":"BTR","c":"Baton Rouge"},{"cc":"USA","r":"US-LA","i":"LCH","c":"Lake Charles"},{"cc":"USA","r":"US-LA","i":"SHV","c":"Shreveport"},{"cc":"USA","r":"US-MA","i":"MVY","c":"Martha\'s Vineyard"},{"cc":"USA","r":"US-MA","i":"ACK","c":"Nantucket"},{"cc":"USA","r":"US-MD","i":"SBY","c":"Salisbury/Ocean c"},{"cc":"USA","r":"US-MI","i":"FNT","c":"Flint"},{"cc":"USA","r":"US-MI","i":"GRR","c":"Grand Rapids"},{"cc":"USA","r":"US-MI","i":"AZO","c":"Kalamazoo/Battle Creek"},{"cc":"USA","r":"US-MI","i":"LAN","c":"Lansing"},{"cc":"USA","r":"US-MI","i":"MQT","c":"Marquette"},{"cc":"USA","r":"US-MI","i":"TVC","c":"Traverse c"},{"cc":"USA","r":"US-MO","i":"COU","c":"Columbia"},{"cc":"USA","r":"US-MT","i":"BZN","c":"Bozeman"},{"cc":"USA","r":"US-MT","i":"FCA","c":"Kalispell-Glacier"},{"cc":"USA","r":"US-MT","i":"MSO","c":"Missoula"},{"cc":"USA","r":"US-NC","i":"FAY","c":"Fayetteville"},{"cc":"USA","r":"US-NC","i":"PGV","c":"Greenville"},{"cc":"USA","r":"US-NC","i":"OAJ","c":"Jacksonville"},{"cc":"USA","r":"US-NC","i":"EWN","c":"New Bern"},{"cc":"USA","r":"US-NC","i":"ILM","c":"Wilmington"},{"cc":"USA","r":"US-ND","i":"BIS","c":"Bismarck"},{"cc":"USA","r":"US-ND","i":"FAR","c":"Fargo"},{"cc":"USA","r":"US-NE","i":"GRI","c":"Grand Island"},{"cc":"USA","r":"US-NM","i":"ROW","c":"Roswell"},{"cc":"USA","r":"US-NM","i":"SAF","c":"Santa Fe"},{"cc":"USA","r":"US-NY","i":"ALB","c":"Albany"},{"cc":"USA","r":"US-NY","i":"ISP","c":"Islip"},{"cc":"USA","r":"US-NY","i":"ITH","c":"Ithaca"},{"cc":"USA","r":"US-NY","i":"SWF","c":"New York"},{"cc":"USA","r":"US-NY","i":"ART","c":"Watertown"},{"cc":"USA","r":"US-NY","i":"HPN","c":"White Plains"},{"cc":"USA","r":"US-OH","i":"CAK","c":"Akron/Canton"},{"cc":"USA","r":"US-OK","i":"LAW","c":"Lawton/Fort Sill"},{"cc":"USA","r":"US-OK","i":"SWO","c":"Stillwater"},{"cc":"USA","r":"US-OR","i":"EUG","c":"Eugene"},{"cc":"USA","r":"US-OR","i":"MFR","c":"Medford"},{"cc":"USA","r":"US-OR","i":"RDM","c":"Redmond/Bend"},{"cc":"USA","r":"US-PA","i":"ABE","c":"Allentown"},{"cc":"USA","r":"US-PA","i":"MDT","c":"Harrisburg"},{"cc":"USA","r":"US-PA","i":"SCE","c":"State College"},{"cc":"USA","r":"US-PA","i":"AVP","c":"Wilkes-Barre/Scranton"},{"cc":"USA","r":"US-PA","i":"IPT","c":"Williamsport"},{"cc":"USA","r":"US-SC","i":"FLO","c":"Florence"},{"cc":"USA","r":"US-SC","i":"HHH","c":"Hilton Head Island"},{"cc":"USA","r":"US-SC","i":"MYR","c":"Myrtle Beach"},{"cc":"USA","r":"US-SD","i":"RAP","c":"Rapid c"},{"cc":"USA","r":"US-SD","i":"FSD","c":"Sioux Falls"},{"cc":"USA","r":"US-TX","i":"ABI","c":"Abilene"},{"cc":"USA","r":"US-TX","i":"BPT","c":"Beaumont/Port Arthur"},{"cc":"USA","r":"US-TX","i":"BRO","c":"Brownsville"},{"cc":"USA","r":"US-TX","i":"CLL","c":"College Station"},{"cc":"USA","r":"US-TX","i":"DRT","c":"Del Rio"},{"cc":"USA","r":"US-TX","i":"HRL","c":"Harlingen"},{"cc":"USA","r":"US-TX","i":"GRK","c":"Killeen/Fort Hood"},{"cc":"USA","r":"US-TX","i":"LRD","c":"Laredo"},{"cc":"USA","r":"US-TX","i":"GGG","c":"Longview"},{"cc":"USA","r":"US-TX","i":"MFE","c":"McAllen"},{"cc":"USA","r":"US-TX","i":"MAF","c":"Midland/Odessa"},{"cc":"USA","r":"US-TX","i":"SJT","c":"San Angelo"},{"cc":"USA","r":"US-TX","i":"TYR","c":"Tyler"},{"cc":"USA","r":"US-TX","i":"ACT","c":"Waco"},{"cc":"USA","r":"US-UT","i":"SGU","c":"St. George"},{"cc":"USA","r":"US-VA","i":"CHO","c":"Charlottesville"},{"cc":"USA","r":"US-VA","i":"LYH","c":"Lynchburg"},{"cc":"USA","r":"US-VT","i":"BTV","c":"Burlington"},{"cc":"USA","r":"US-WI","i":"ATW","c":"Appleton"},{"cc":"USA","r":"US-WI","i":"LSE","c":"La Crosse"},{"cc":"USA","r":"US-WI","i":"CWA","c":"Wausau"},{"cc":"USA","r":"US-WY","i":"JAC","c":"Jackson Hole"},{"cc":"VIR","r":"US-VI","i":"STX","c":"Saint Croix Island"},{"cc":"VIR","r":"US-VI","i":"STT","c":"St Thomas Island"},{"cc":"IND","r":"IN-GJ","i":"AMD","c":"Ahmedabad"},{"cc":"DEU","r":"DE-BE","i":"BER","c":"Berlin"}]')},function (e) {e.exports = JSON.parse('[{"name":"Alabama","regionCode":"US-AL","isoAlpha3":"USA"},{"name":"Alaska","regionCode":"US-AK","isoAlpha3":"USA"},{"name":"Arizona","regionCode":"US-AZ","isoAlpha3":"USA"},{"name":"Arkansas","regionCode":"US-AR","isoAlpha3":"USA"},{"name":"California","regionCode":"US-CA","isoAlpha3":"USA"},{"name":"Colorado","regionCode":"US-CO","isoAlpha3":"USA"},{"name":"Connecticut","regionCode":"US-CT","isoAlpha3":"USA"},{"name":"Delaware","regionCode":"US-DE","isoAlpha3":"USA"},{"name":"Florida","regionCode":"US-FL","isoAlpha3":"USA"},{"name":"Georgia","regionCode":"US-GA","isoAlpha3":"USA"},{"name":"Hawaii","regionCode":"US-HI","isoAlpha3":"USA"},{"name":"Idaho","regionCode":"US-ID","isoAlpha3":"USA"},{"name":"Illinois","regionCode":"US-IL","isoAlpha3":"USA"},{"name":"Indiana","regionCode":"US-IN","isoAlpha3":"USA"},{"name":"Iowa","regionCode":"US-IA","isoAlpha3":"USA"},{"name":"Kansas","regionCode":"US-KS","isoAlpha3":"USA"},{"name":"Kentucky","regionCode":"US-KY","isoAlpha3":"USA"},{"name":"Louisiana","regionCode":"US-LA","isoAlpha3":"USA"},{"name":"Maine","regionCode":"US-ME","isoAlpha3":"USA"},{"name":"Maryland","regionCode":"US-MD","isoAlpha3":"USA"},{"name":"Massachusetts","regionCode":"US-MA","isoAlpha3":"USA"},{"name":"Michigan","regionCode":"US-MI","isoAlpha3":"USA"},{"name":"Minnesota","regionCode":"US-MN","isoAlpha3":"USA"},{"name":"Mississippi","regionCode":"US-MS","isoAlpha3":"USA"},{"name":"Missouri","regionCode":"US-MO","isoAlpha3":"USA"},{"name":"Montana","regionCode":"US-MT","isoAlpha3":"USA"},{"name":"Nebraska","regionCode":"US-NE","isoAlpha3":"USA"},{"name":"Nevada","regionCode":"US-NV","isoAlpha3":"USA"},{"name":"New Hampshire","regionCode":"US-NH","isoAlpha3":"USA"},{"name":"New Jersey","regionCode":"US-NJ","isoAlpha3":"USA"},{"name":"New Mexico","regionCode":"US-NM","isoAlpha3":"USA"},{"name":"New York","regionCode":"US-NY","isoAlpha3":"USA"},{"name":"North Carolina","regionCode":"US-NC","isoAlpha3":"USA"},{"name":"North Dakota","regionCode":"US-ND","isoAlpha3":"USA"},{"name":"Ohio","regionCode":"US-OH","isoAlpha3":"USA"},{"name":"Oklahoma","regionCode":"US-OK","isoAlpha3":"USA"},{"name":"Oregon","regionCode":"US-OR","isoAlpha3":"USA"},{"name":"Pennsylvania","regionCode":"US-PA","isoAlpha3":"USA"},{"name":"Rhode Island","regionCode":"US-RI","isoAlpha3":"USA"},{"name":"South Carolina","regionCode":"US-SC","isoAlpha3":"USA"},{"name":"South Dakota","regionCode":"US-SD","isoAlpha3":"USA"},{"name":"Tennessee","regionCode":"US-TN","isoAlpha3":"USA"},{"name":"Texas","regionCode":"US-TX","isoAlpha3":"USA"},{"name":"Utah","regionCode":"US-UT","isoAlpha3":"USA"},{"name":"Vermont","regionCode":"US-VT","isoAlpha3":"USA"},{"name":"Virginia","regionCode":"US-VA","isoAlpha3":"USA"},{"name":"Washington","regionCode":"US-WA","isoAlpha3":"USA"},{"name":"West Virginia","regionCode":"US-WV","isoAlpha3":"USA"},{"name":"Wisconsin","regionCode":"US-WI","isoAlpha3":"USA"},{"name":"Wyoming","regionCode":"US-WY","isoAlpha3":"USA"},{"name":"District of Columbia","regionCode":"US-DC","isoAlpha3":"USA"},{"name":"New South Wales","regionCode":"AU-NSW","isoAlpha3":"AUS"},{"name":"Queensland","regionCode":"AU-QLD","isoAlpha3":"AUS"},{"name":"South Australia","regionCode":"AU-SA","isoAlpha3":"AUS"},{"name":"Tasmania","regionCode":"AU-TAS","isoAlpha3":"AUS"},{"name":"Victoria","regionCode":"AU-VIC","isoAlpha3":"AUS"},{"name":"Western Australia","regionCode":"AU-WA","isoAlpha3":"AUS"},{"name":"Australian Capital Territory","regionCode":"AU-ACT","isoAlpha3":"AUS"},{"name":"Northern Territory","regionCode":"AU-NT","isoAlpha3":"AUS"},{"name":"Alberta","regionCode":"CA-AB","isoAlpha3":"CAN"},{"name":"British Columbia","regionCode":"CA-BC","isoAlpha3":"CAN"},{"name":"Manitoba","regionCode":"CA-MB","isoAlpha3":"CAN"},{"name":"New Brunswick","regionCode":"CA-NB","isoAlpha3":"CAN"},{"name":"Newfoundland and Labrador","regionCode":"CA-NL","isoAlpha3":"CAN"},{"name":"Northwest Territories","regionCode":"CA-NT","isoAlpha3":"CAN"},{"name":"Nova Scotia","regionCode":"CA-NS","isoAlpha3":"CAN"},{"name":"Nunavut","regionCode":"CA-NU","isoAlpha3":"CAN"},{"name":"Ontario","regionCode":"CA-ON","isoAlpha3":"CAN"},{"name":"Prince Edward Island","regionCode":"CA-PE","isoAlpha3":"CAN"},{"name":"Quebec","regionCode":"CA-QC","isoAlpha3":"CAN"},{"name":"Saskatchewan","regionCode":"CA-SK","isoAlpha3":"CAN"},{"name":"Yukon","regionCode":"CA-YT","isoAlpha3":"CAN"},{"name":"Guangxi Zhuang Autonomous Region","regionCode":"CN-GX","isoAlpha3":"CHN"},{"name":"Inner Mongolia Autonomous Region","regionCode":"CN-NM","isoAlpha3":"CHN"},{"name":"Ningxia Hui Autonomous Region","regionCode":"CN-NX","isoAlpha3":"CHN"},{"name":"Xinjiang Uyghur Autonomous Region","regionCode":"CN-XJ","isoAlpha3":"CHN"},{"name":"Tibet Autonomous Region","regionCode":"CN-XZ","isoAlpha3":"CHN"},{"name":"Beijing Municipality","regionCode":"CN-BJ","isoAlpha3":"CHN"},{"name":"Chongqing Municipality","regionCode":"CN-CQ","isoAlpha3":"CHN"},{"name":"Shanghai Municipality","regionCode":"CN-SH","isoAlpha3":"CHN"},{"name":"Tianjin Municipality","regionCode":"CN-TJ","isoAlpha3":"CHN"},{"name":"Anhui Province","regionCode":"CN-AH","isoAlpha3":"CHN"},{"name":"Fujian Province","regionCode":"CN-FJ","isoAlpha3":"CHN"},{"name":"Gansu Province","regionCode":"CN-GS","isoAlpha3":"CHN"},{"name":"Guangdong Province","regionCode":"CN-GD","isoAlpha3":"CHN"},{"name":"Guizhou Province","regionCode":"CN-GZ","isoAlpha3":"CHN"},{"name":"Hainan Province","regionCode":"CN-HI","isoAlpha3":"CHN"},{"name":"Hebei Province","regionCode":"CN-HE","isoAlpha3":"CHN"},{"name":"Heilongjiang Province","regionCode":"CN-HL","isoAlpha3":"CHN"},{"name":"Henan Province","regionCode":"CN-HA","isoAlpha3":"CHN"},{"name":"Hubei Province","regionCode":"CN-HB","isoAlpha3":"CHN"},{"name":"Hunan Province","regionCode":"CN-HN","isoAlpha3":"CHN"},{"name":"Jiangsu Province","regionCode":"CN-JS","isoAlpha3":"CHN"},{"name":"Jiangxi Province","regionCode":"CN-JX","isoAlpha3":"CHN"},{"name":"Jilin Province","regionCode":"CN-JL","isoAlpha3":"CHN"},{"name":"Liaoning Province","regionCode":"CN-LN","isoAlpha3":"CHN"},{"name":"Qinghai Province","regionCode":"CN-QH","isoAlpha3":"CHN"},{"name":"Shaanxi Province","regionCode":"CN-SN","isoAlpha3":"CHN"},{"name":"Shandong Province","regionCode":"CN-SD","isoAlpha3":"CHN"},{"name":"Shanxi Province","regionCode":"CN-SX","isoAlpha3":"CHN"},{"name":"Sichuan Province","regionCode":"CN-SC","isoAlpha3":"CHN"},{"name":"Yunnan Province","regionCode":"CN-YN","isoAlpha3":"CHN"},{"name":"Zhejiang Province","regionCode":"CN-ZJ","isoAlpha3":"CHN"},{"name":"Scotland","regionCode":"GB-SCT","isoAlpha3":"GBR"},{"name":"England","regionCode":"GB-ENG","isoAlpha3":"GBR"},{"name":"Northern Ireland","regionCode":"GB-NIR","isoAlpha3":"GBR"},{"name":"Wales","regionCode":"GB-WLS","isoAlpha3":"GBR"}]')},function (e, t, r) {r = r(243);e.exports = "string" == typeof r ? r : r.toString()},function (e, t) {e.exports = '<script id="sherpa-template-dropdown-selected" type="text/template"> <div class="sherpa-dropdown">\n      <button class="sherpa-dropdown__current">\n           {{#selectedCountry}}\n          <div class="sherpa-dropdown__current__left">\n               {{#selectedIsAirport}}\n              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>\n               {{/selectedIsAirport}}\n\n               {{#selectedIsRegion}}\n              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.245 3.6L15.425 4.5H18.875C19.2875 4.5 19.625 4.8375 19.625 5.25V11.25C19.625 11.6625 19.2875 12 18.875 12H14.99C14.63 12 14.3225 11.7525 14.255 11.4L14.075 10.5H9.875V14.3863C11.7276 14.2535 13.2044 15.3182 14.629 16.3452C15.7574 17.1588 16.8531 17.9487 18.0769 18.101C20.4154 18.392 21 20.4049 21 21.375H2C2 15.7852 4.9852 15.2479 8.25733 14.659C8.29651 14.6519 8.33574 14.6449 8.375 14.6378V3.75C8.375 3.3375 8.7125 3 9.125 3H14.51C14.87 3 15.1775 3.255 15.245 3.6Z" fill="#222426"/></svg>\n               {{/selectedIsRegion}}\n\n               {{#selectedIsCountry}}\n                <img src=" {{selectedFlagUrl}}" onerror="this.style.display=\'none\'" alt="">\n               {{/selectedIsCountry}}\n          </div>\n          <div class="sherpa-dropdown__current__center">\n               {{#selectedIsAirport}}\n                 {{selectedCityName}},  {{selectedAirportCode}}\n               {{/selectedIsAirport}}\n\n               {{#selectedIsRegion}}\n                 {{selectedRegionName}},  {{selectedCountry}}\n               {{/selectedIsRegion}}\n\n               {{#selectedIsCountry}}\n                 {{selectedCountryName}}\n               {{/selectedIsCountry}}\n          </div>\n          <div class="sherpa-dropdown__current__right">\n              <div class="icon-down">\n                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path id="icon/navigation/expand_more_24px" d="M15.8751 8.99999L11.9951 12.88L8.1151 8.99999C7.92827 8.81274 7.67462 8.7075 7.4101 8.7075C7.14558 8.7075 6.89193 8.81274 6.7051 8.99999C6.3151 9.38999 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.38999 17.2951 8.99999C16.9051 8.61999 16.2651 8.60999 15.8751 8.99999Z" fill="#222426"/></g></svg>\n              </div>\n          </div>\n           {{/selectedCountry}}\n           {{^selectedCountry}}\n          <div class="sherpa-dropdown__current__left">\n              <img src=" {{selectedFlagUrl}}" onerror="this.style.display=\'none\'" alt="">\n          </div>\n          <div class="sherpa-dropdown__current__center">\n               {{selectLabel}}\n          </div>\n          <div class="sherpa-dropdown__current__right">\n              <div class="icon-down">\n                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path id="icon/navigation/expand_more_24px" d="M15.8751 8.99999L11.9951 12.88L8.1151 8.99999C7.92827 8.81274 7.67462 8.7075 7.4101 8.7075C7.14558 8.7075 6.89193 8.81274 6.7051 8.99999C6.3151 9.38999 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.38999 17.2951 8.99999C16.9051 8.61999 16.2651 8.60999 15.8751 8.99999Z" fill="#222426"/></g></svg>\n              </div>\n          </div>\n           {{/selectedCountry}}\n      </button>\n      <div class="sherpa-dropdown__opened">\n      </div>\n  </div> <\/script> <script id="sherpa-template-dropdown-options" type="text/template"> <div class="sherpa-dropdown-options  {{#showAsOverlay}}sherpa-dropdown-options--overlay {{/showAsOverlay}}">\n      <div class="sherpa-dropdown-options__search">\n          <div class="sherpa-dropdown-options__search_wrap">\n              <i class="icon-search"></i>\n              <input type="text" id="sherpa-dropdown-options__search_input" autocomplete="off" placeholder=" {{#regionsAndAirportsEnabled}}{{localization.searchInputRegionsAndAirports}}{{/regionsAndAirportsEnabled}}{{^regionsAndAirportsEnabled}}{{localization.searchInput}}{{/regionsAndAirportsEnabled}}"/>\n          </div>\n      </div>\n\n      <div class="sherpa-dropdown-options__wrap" >\n           {{#selections}}\n           {{#isDivider}}\n          <div class="dropdown-options--divider">\n               {{title}}\n          </div>\n           {{/isDivider}}\n\n           {{#isCountry}}\n          <div class="dropdown-options dropdown-options--visible" type=" {{type}}" code=" {{countryCode}}" role="option">\n              <div class="dropdown-options__flag">\n                  <img src=" {{flagUrl}}" onerror="this.style.display=\'none\'" alt="">\n              </div>\n              <div class="dropdown-options__name"> {{name}}</div>\n          </div>\n           {{/isCountry}}\n\n           {{#isAirport}}\n          <div class="dropdown-options dropdown-options--visible dropdown-options--airport" type=" {{type}}" code=" {{countryCode}}" airport-code=" {{airportCode}}" region-code=" {{regionCode}}" role="option">\n            <div class="dropdown-options__flag">\n                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>\n            </div>\n              <div class="dropdown-options__name airport-info"> {{cityName}},  {{airportCode}}</div>\n              \x3c!-- <div class="dropdown-options__name"> {{airportName}}</div> --\x3e\n          </div>\n           {{/isAirport}}\n\n           {{#isRegion}}\n          <div class="dropdown-options dropdown-options--visible dropdown-options--region" type=" {{type}}" code=" {{countryCode}}" region-code=" {{regionCode}}" role="option">\n            <div class="dropdown-options__flag">\n            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.245 3.6L15.425 4.5H18.875C19.2875 4.5 19.625 4.8375 19.625 5.25V11.25C19.625 11.6625 19.2875 12 18.875 12H14.99C14.63 12 14.3225 11.7525 14.255 11.4L14.075 10.5H9.875V14.3863C11.7276 14.2535 13.2044 15.3182 14.629 16.3452C15.7574 17.1588 16.8531 17.9487 18.0769 18.101C20.4154 18.392 21 20.4049 21 21.375H2C2 15.7852 4.9852 15.2479 8.25733 14.659C8.29651 14.6519 8.33574 14.6449 8.375 14.6378V3.75C8.375 3.3375 8.7125 3 9.125 3H14.51C14.87 3 15.1775 3.255 15.245 3.6Z" fill="#222426"/></svg>\n            </div>\n              <div class="dropdown-options__name region-info"> {{regionName}},  {{countryCode}}</div>\n          </div>\n           {{/isRegion}}\n\n\n           {{/selections}}\n          <div class="dropdown-options__empty"> {{localization.emptyNationality}}</div>\n      </div>\n  </div> <\/script> '},function (e, t) {e.exports = '<div id="sherpa-root"></div> <script id="sherpa-template-root" type="text/template"> <div class="widget sherpa- {{affiliate}}{{#isLangRight}}is-right-lang {{/isLangRight}}">\n   <div class="widget__header">\n    \x3c!-- <i class="icon-white"></i> --\x3e\n    <img src=" {{cdnUrl}}/img/ {{affiliate}}/passport_24px.svg" alt="">\n    <span class="desktop">\n       {{headerTitle}}\n    </span>\n\n    <span class="mobile">\n       {{headerTitle}}\n    </span>\n   </div>\n\n   <div class="widget__body  {{^showInputActions}}widget__body--no-actions {{/showInputActions}}">\n     {{#showInputActions}}\n\n    <div class="widget__body__requirements  {{#hasPwLogo}}widget__body__requirements--hasPwLogo {{/hasPwLogo}}">\n\n         {{#showAsTrip}}\n            <div class="widget__body__message ">\n               {{localization.changeTripDetails}}\n            </div>\n\n            <div class="widget__body__dropdown" id="sherpa-dropdown-wrap">\n\n              <div class="sherpa-origin-wrapper" data-show=" {{showOriginSelector}}">\n                <label class="label" for="sherpa-origin-dropdown"> {{localization.from}}</label>\n                <div class="sherpa-dropdown-wrap__current" id="sherpa-origin-dropdown"></div>\n                <div class="sherpa-dropdown-wrap__options  {{#showAsOverlay}}sherpa-dropdown-wrap__options--overlay {{/showAsOverlay}}" id="sherpa-origin-dropdown-options"></div>\n              </div>\n\n                <div class="sherpa-destination-wrapper" data-show=" {{showDestinationSelector}}">\n                  <label class="label" for="sherpa-destination-dropdown"> {{localization.to}}</label>\n                  <div class="sherpa-dropdown-wrap__current" id="sherpa-destination-dropdown"></div>\n                  <div class="sherpa-dropdown-wrap__options  {{#showAsOverlay}}sherpa-dropdown-wrap__options--overlay {{/showAsOverlay}}" id="sherpa-destination-dropdown-options"></div>\n                </div>\n\n                <div class="sherpa-departure-date-wrapper" data-show=" {{showDepartureDateSelector}}">\n                  <label class="label" for="sherpa-departure-date"> {{localization.departureDate}}</label>\n                  <input id="sherpa-departure-date" type="date" value=" {{departureDate}}" min=" {{departureDateMin}}"/>\n                </div>\n\n                <div class="sherpa-passport-wrapper" data-show=" {{showPassportSelector}}">\n                  <div class="label"> {{localization.passport}}</div>\n                  <div class="sherpa-dropdown-wrap__current" id="sherpa-requirements-dropdown"></div>\n                  <div class="sherpa-dropdown-wrap__options  {{#showAsOverlay}}sherpa-dropdown-wrap__options--overlay {{/showAsOverlay}}" id="sherpa-requirements-dropdown-options"></div>\n                </div>\n\n                 {{#useSearchBtn}}\n                <button class="sherpa-btn sherpa-btn--full" id="sherpa-btn-check">\n                     {{localization.searchBtn}}\n                    <i class="icon-angle-right"></i>\n                    <i class="icon-spin4 animate-spin"></i>\n                </button>\n                 {{/useSearchBtn}}\n\n\n            </div>\n         {{/showAsTrip}}\n         {{^showAsTrip}}\n            <div class="widget__body__message ">\n                 {{requirementsMsg}}\n            </div>\n\n            <div class="widget__body__dropdown" id="sherpa-dropdown-wrap">\n            <div class="label" data-show=" {{showOriginSelector}}" for="sherpa-origin-dropdown"> {{localization.passport}}</div>\n            <div class="sherpa-dropdown-wrap__current" id="sherpa-requirements-dropdown"></div>\n            <div class="sherpa-dropdown-wrap__options" id="sherpa-requirements-dropdown-options"></div>\n\n             {{#selectDestination}}\n            <div class="label" data-show=" {{showDestinationSelector}}" for="sherpa-destination-dropdown"> {{localization.destination}}</div>\n            <div class="sherpa-dropdown-wrap__current" id="sherpa-destination-dropdown"></div>\n            <div class="sherpa-dropdown-wrap__options" id="sherpa-destination-dropdown-options"></div>\n             {{/selectDestination}}\n\n             {{^selectDestination}}\n\n                 {{#showDestinations}}\n                    <div class="label"> {{localization.destination}}</div>\n                     {{#destinations}}\n                    <button class="destination destination- {{destinationCode}}{{#isSelected}}dest-selected {{/isSelected}}{{^isSelected}}dest-not-selected {{/isSelected}}" data-id=" {{destinationCode}}">\n                        <img src=" {{flagUrl}}" onerror="this.style.display=\'none\'" data-id=" {{destinationCode}}" alt="">\n                        <span data-id=" {{destinationCode}}"> {{title}}</span>\n                    </button>\n                     {{/destinations}}\n                 {{/showDestinations}}\n\n             {{/selectDestination}}\n            </div>\n         {{/showAsTrip}}\n\n\n\n       {{#hasPwLogo}}\n        <div class="widget__body__logo">\n          <a href="https://www.joinsherpa.com?utm_source=requirementswidget&utm_medium= {{affiliate}}" target="_blank" rel="noopener" data-link-type="POWERED_BY" data-source-type="REQUIREMENTS_WIDGET" tabindex="-1">\n            <img src=" {{cdnUrl}}/img/ {{affiliate}}/poweredby-sherpa.svg" alt="powered by sherpa">\n          </a>\n        </div>\n       {{/hasPwLogo}}\n\n    </div>\n     {{/showInputActions}}\n\n    <div class="widget__body__results" id="widget__body__results">\n        <div class="widget__body__results__loading">\n\n             {{#showAsTrip}}\n            <div class="widget-spinner widget-spinner-circle">\n            </div>\n            <div class="loading-text">\n                loading...\n            </div>\n             {{/showAsTrip}}\n             {{^showAsTrip}}\n            <div class="icon-message-wrap">\n                <img src=" {{cdnUrl}}/img/ {{affiliate}}/passport_big.svg" alt="">\n            </div>\n            <div class="widget-progress-bar">\n                <div class="progress"></div>\n            </div>\n             {{/showAsTrip}}\n\n        </div>\n\n        <div class="widget__body__results__success" id="sherpa-requirements-results">\n        </div>\n\n        <div class="widget__body__results__error" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}">\n            \x3c!-- <div class="left">\n\n            </div>\n            <div class="right">\n                <h3>\n                     {{localization.generalErrorTitle}}\n                </h3>\n                <div class="widget__body__results__error_text">\n                     {{localization.generalErrorText}}\n                </div>\n                <div class="sherpa-btn"\n                    onclick="$sherpa. {{sdkBase}}.createWidget( {{widgetOptions}});">\n                     {{localization.generalErrorBtn}}\n                    <i class="icon-angle-right"></i>\n                </div>\n            </div> --\x3e\n            <div class="title">\n                 {{localization.generalErrorTitle}}\n            </div>\n            <div class="description">\n                <div class="icon">\n                    <img src=" {{cdnUrl}}/img/ {{affiliate}}/passport_big.svg" alt="">\n                </div>\n                <div class="text">\n                     {{localization.generalErrorText}}\n                </div>\n            </div>\n        </div>\n\n        <div class="widget__body__results__default" id="sherpa-empty-state">\n            <div class="title">\n                 {{#showDefaultTitle}}\n                   {{localization.generalDefaultTitle}}\n                 {{/showDefaultTitle}}\n            </div>\n            <div class="description">\n                <div class="icon">\n                    <img src=" {{cdnUrl}}/img/ {{affiliate}}/passport_big.svg" alt="">\n                </div>\n                <div class="text">\n                   {{#showDefaultShort}}\n                     {{localization.generalDefaultShort}}\n                   {{/showDefaultShort}}\n                   {{^showDefaultShort}}\n                     {{localization.generalDefault}}\n                   {{/showDefaultShort}}\n                </div>\n            </div>\n          \x3c!-- <div class="left">\n\n          </div>\n          <div class="right">\n              <h3 class="color--default">\n                   {{localization.generalDefault}}\n              </h3>\n          </div> --\x3e\n        </div>\n\n        <div class="widget__body__results__just-fine">\n            \x3c!-- <div class="title">\n                 {{localization.generalDefaultTitle}}\n            </div> --\x3e\n            <div class="description">\n                <div class="icon">\n                    <img src=" {{cdnUrl}}/img/ {{affiliate}}/passport_big.svg" alt="">\n                </div>\n                <div class="text">\n                     {{localization.generalJustFine}}\n                </div>\n            </div>\n                \x3c!-- <div class="left">\n\n                </div>\n                <div class="right">\n                    <h3>\n                         {{localization.generalJustFine}}\n                    </h3>\n                </div> --\x3e\n        </div>\n    </div>\n   </div>\n\n  </div> <\/script> <script id="sherpa-template-result" type="text/template"> <div class="result-list">\n      <div class="result-list__body  {{#isSingeResult}}result-list--tall  {{/isSingeResult}}">\n           {{#results}}\n\n          <div class="result-item result-item-- {{requirementType}}result-item-country- {{destinationCode}}{{#hasBorder}}result-item--border {{/hasBorder}}{{#isSelected}}selected {{/isSelected}}{{^isSelected}}not-selected {{/isSelected}}" id="sherpa-result-item- {{index}}">\n\n              \x3c!-- <div class="result-item__hero">\n                <span> {{title}}</span>\n              </div> --\x3e\n\n              \x3c!-- <div class="destination destination--inline">\n                <img src=" {{flagUrl}}" onerror="this.style.display=\'none\'">\n                <span> {{title}}</span>\n              </div> --\x3e\n\n\n               {{#showTitle}}\n              <div class="result-item__header">\n                   {{#showCountryFlag}}\n                  <div class="result-item__header_subflag">\n                    <div class="result-item__header_flag">\n                      <img src=" {{flagUrl}}" onerror="this.style.display=\'none\'" alt="">\n                    </div>\n                    <div> {{title}}</div>\n                  </div>\n                   {{/showCountryFlag}}\n                   {{^showCountryFlag}}\n                  <div class="result-item__header_subtitle">\n                    <div class="result-item__header_subtitle-text"> {{localization.whatYouNeedToKnow}}</div>\n                    <div class="result-item__header_subtitle-actions">\n                         {{#showSubscribeBtn}}\n                        <a role="button" id="sherpa-btn-subscribe-small" class="sherpa-btn-secondary sherpa-btn-secondary--small sherpa-btn-subscribe" href=" {{subscribeUrl}}" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" target="_blank" rel="noopener external" data-link-type="SUBSCRIBE" data-source-type="TYPEFORM" >\n                            <svg class="sherpa-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="sherpa-icon"  fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 11.1666L13.5267 12.0266C13.9467 12.4466 13.6534 13.1666 13.0534 13.1666H2.94008C2.34674 13.1666 2.05341 12.4466 2.47341 12.0266L3.33341 11.1666V7.16659C3.33341 4.93325 4.90674 3.06659 7.00008 2.61325V1.83325C7.00008 1.27992 7.44674 0.833252 8.00008 0.833252C8.55341 0.833252 9.00008 1.27992 9.00008 1.83325V2.61325C11.0934 3.06659 12.6667 4.93325 12.6667 7.16659V11.1666ZM9.32674 13.8399C9.32674 14.5733 8.73341 15.1666 8.00007 15.1666C7.26674 15.1666 6.67341 14.5733 6.67341 13.8399H9.32674ZM8.66674 9.16659V10.4999H7.33341V9.16659H8.66674ZM8.00007 7.83325C8.36674 7.83325 8.66674 7.53325 8.66674 7.16658V5.83325C8.66674 5.46659 8.36674 5.16658 8.00007 5.16658C7.63341 5.16658 7.33341 5.46659 7.33341 5.83325V7.16658C7.33341 7.53325 7.63341 7.83325 8.00007 7.83325Z"/>\n                            </svg>\n                             {{localization.subscribe}}\n                        </a>\n                         {{/showSubscribeBtn}}\n                         {{#showHelpBtn}}\n                        <a id="sherpa-btn-help-small" class="sherpa-btn-secondary sherpa-btn-secondary--small sherpa-btn-help" href="https://joinsherpa.zendesk.com/hc/en-us?utm_medium=widget&utm_source= {{affiliate}}" target="_blank" rel="noopener external" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" data-link-type="HELP" data-source-type="FAQ" >\n                            <svg class="sherpa-btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 11C11.45 11 11 10.55 11 10V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V10C13 10.55 12.55 11 12 11ZM11 13V15H13V13H11Z"/>\n                            </svg>\n                             {{localization.help}}\n                        </a>\n                         {{/showHelpBtn}}\n                    </div>\n                </div>\n                   {{/showCountryFlag}}\n              </div>\n               {{/showTitle}}\n\n               {{#showResult}}\n               {{#showTravelRestriction}}\n\n              <div class="result-item__visa-requirements" id="sherpaTravelRestrictionsComponent" data-index= {{index}}>\n                 {{#showTravelRestrictionsTitle}}\n                <div class="visa-requirements__title visa-requirements__title--show" data-collapsible=" {{showCollapseTravelRestrictions}}" data-collapsed=" {{collapseTravelRestrictionsState}}" data-index= {{index}}>\n                  <div>\n                    <span class="visa-requirements__title__text">\n                       {{#isReturn}}\n                         {{localization.onReturn}}{{#showCountryInTitle}}{{title}}{{/showCountryInTitle}}\n                       {{/isReturn}}\n                       {{^isReturn}}\n                         {{localization.travelRestrictionsFor}}{{#showCountryInTitle}}{{title}}{{/showCountryInTitle}}\n                       {{/isReturn}}\n                  </span>\n                  </div>\n\n                   {{#showCollapseTravelRestrictions}}\n                    <div class="result-item__travel-restrictions-control">\n                      <button class="sherpa-btn-secondary--label travel-restrictions-control__more"> {{localization.collapsible.showMore}}</button>\n                      <button class="sherpa-btn-secondary--label travel-restrictions-control__less"> {{localization.collapsible.showLess}}</button>\n                    </div>\n                   {{/showCollapseTravelRestrictions}}\n                </div>\n                 {{/showTravelRestrictionsTitle}}\n\n                  <div class="visa-requirements__insights" data-collapsed=" {{collapseTravelRestrictionsState}}" data-index= {{index}}>\n                    \x3c!-- Travel Restriction Tiles --\x3e\n                     {{#restrictionTiles}}\n\n                     {{#hasContent}}\n                    <div class="tile-wrapper">\n                      <button class="tile tile- {{id}}tile-show  {{^isAvailable}}tile-not-available {{/isAvailable}}{{#isRegion}}tile--region {{/isRegion}}" aria-disabled=" {{disabled}}" data-index=" {{index}}" data-id=" {{id}}" data-has-content=" {{hasContent}}" data-clickable=" {{clickable}}" data-category=" {{category}}" data-subcategory=" {{subCategory}}" data-nationality=" {{nationality}}" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}"  data-trip=" {{dataTrip}}">\n                        <div class="tile__header">\n                            <span class="tile__header__icon">\n                                <img src=" {{iconUrl}}" alt=" {{iconAlt}}">\n                            </span>\n                            <span class="tile__header__headline">\n                                 {{headline}}\n                            </span>\n                        </div>\n                        <div class="tile__content">\n                             {{title}}{{#clickable}}<span class="arrow">&nbsp;»</span> {{/clickable}}{{#clickable}}<span href="#" class="see-more">.&nbsp;See more</span> {{/clickable}}\n                        </div>\n                      </button>\n                    </div>\n                     {{/hasContent}}\n                     {{^hasContent}}\n                    <div class="tile-wrapper  {{#isStretch}}tile-wrapper--stretch {{/isStretch}}">\n                      <button class="tile tile- {{id}}tile-show tile-no-content  {{#isRegion}}tile--region {{/isRegion}}{{#isStretch}}tile-stretch {{/isStretch}}" data-id=" {{id}}" data-has-content=" {{hasContent}}" data-destination=" {{destination}}" data-region=" {{regionCode}}"></button>\n                    </div>\n                     {{/hasContent}}\n\n                    \x3c!-- Travel Restrictions Tile Details --\x3e\n                    <div class="tile-details tile-details- {{id}}tile-details-hide" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}">\n                        <div class="tile-details__header">\n                            <button class="navigate-back back-button">\n                                <span class="navigation-back icon-back">\n                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <g><path id="icon/navigation/arrow_back_ios_24px" d="M17.0019 2.98499C16.5119 2.49499 15.7219 2.49499 15.2319 2.98499L6.92189 11.295C6.53189 11.685 6.53189 12.315 6.92189 12.705L15.2319 21.015C15.7219 21.505 16.5119 21.505 17.0019 21.015C17.4919 20.525 17.4919 19.735 17.0019 19.245L9.76189 11.995L17.0119 4.74499C17.4919 4.26499 17.4919 3.46499 17.0019 2.98499Z"/></g>\n                                        </svg>\n                                </span>\n                                <span class="back"> {{localization.back}}</span>\n                            </button>\n                            <span class="tile-details__header__icon">\n                                <img src=" {{iconUrl}}" alt=" {{iconAlt}}">\n                            </span>\n                            <span>\n                                 {{headline}}\n                            </span>\n                        </div>\n\n                        <div class="tile_details__content" tabindex=0>\n                            <div class="tile-details-header__title"> {{title}}</div>\n                            <div class="tile-details-header__description"> {{{description}}}</div>\n                             {{#more}}\n                            <div class="tile-details-header__moreTitle"> {{localization.additionalDetails}}</div>\n                            <div class="tile-details-header__more"> {{{more}}}</div>\n                             {{/more}}\n                        </div>\n\n                        <div class="tile_details__footer">\n                             {{#documentLinks}}\n                            <br><br>\n                            <div class="tile-details__documentLink">\n                                <a href=" {{url}}" target="_blank" rel="noopener external" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" data-link-type="LINK" data-source-type="DOCUMENT">  {{localization.additionalGovernmentForm}}</a><span class="icon-forward"><i class="icon-external-link"></i></span>\n                            </div>\n                             {{/documentLinks}}\n                            <br><br>\n                            <div class="tile-details__source"> {{localization.viewSource}}(<a href=" {{sourceUrl}}" target="_blank" rel="noopener external" data-origin=" {{origin}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" data-link-type="SOURCE" data-source-type=" {{sourceType}}"> {{sourceName}}</a><span class="icon-forward"><i class="icon-external-link"></i>)</span>\n                            </div>\n\n                            <div class="tile-details__last-updated">\n                                <span class="last-updated__status"></span><span> {{localization.lastUpdatedAt}}:  {{lastUpdatedAt}}</span>\n                            </div>\n\n                            \x3c!-- Ratings --\x3e\n                            <div class="tile-details__rating">\n                              <p>\n                                 {{localization.helpful}}\n                              </p>\n                              <div class="rating">\n                                \x3c!-- Thumbs up --\x3e\n                                <div class="tile-details__rating__button like grow" data-country=" {{destination}}" data-origin=" {{origin}}" data-category=" {{category}}" data-subcategory=" {{subCategory}}" data-nationality=" {{nationality}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" data-id=" {{restrictionId}}" data-value="true">\n                                  <i class="fa fa-thumbs-up fa-3x like" aria-hidden="true">\n                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/></svg>\n                                  </i>\n                                </div>\n                                \x3c!-- Thumbs down --\x3e\n                                <div class="tile-details__rating__button dislike grow" data-country=" {{destination}}" data-origin=" {{origin}}" data-category=" {{category}}" data-subcategory=" {{subCategory}}" data-nationality=" {{nationality}}" data-destination=" {{destination}}" data-region=" {{regionCode}}" data-trip=" {{dataTrip}}" data-id=" {{restrictionId}}" data-value="false">\n                                  <i class="fa fa-thumbs-down fa-3x like" aria-hidden="true">\n                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10.88 21.94l5.53-5.54c.37-.37.58-.88.58-1.41V5c0-1.1-.9-2-2-2H6c-.8 0-1.52.48-1.83 1.21L.91 11.82C.06 13.8 1.51 16 3.66 16h5.65l-.95 4.58c-.1.5.05 1.01.41 1.37.59.58 1.53.58 2.11-.01zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>\n                                  </i>\n                                </div>\n                              </div>\n                            </div>\n\n                          \x3c!-- Helpful feedback --\x3e\n                          <div class="tile-details__helpful-feedback hide">\n                            <div class="tile-details__helpful-feedback__questions">\n                              <p> {{ localization.feedback.update.title }}</p>\n\n                              <label>\n                                <input type="radio" name="helpful-feedback" value="DO_NOT_LIKE">  {{ localization.feedback.update.DO_NOT_LIKE }}\n                              </label><br>\n\n                              <label>\n                                <input type="radio" name="helpful-feedback" value="CONFUSING">  {{ localization.feedback.update.CONFUSING }}\n                              </label><br>\n\n                              <label>\n                                <input type="radio" name="helpful-feedback" value="INCORRECT_INFORMATION">  {{ localization.feedback.update.INCORRECT_INFORMATION }}\n                              </label><br>\n\n                              <label>\n                                <input type="radio" name="helpful-feedback" value="DOES_NOT_ANSWER">  {{ localization.feedback.update.DOES_NOT_ANSWER }}\n                              </label><br>\n                            </div>\n                            <button class="sherpa-btn sherpa-btn-secondary--small tile-details__helpful-feedback__submit" type="submit" disabled="true">\n                               {{ localization.feedback.submit }}\n                            </button>\n                          </div>\n                          <p class=\'tile-details__footer__thankyou hide\'><em> {{ localization.feedback.update.thankyou }}</em></p>\n                      </div>\n                      \x3c!-- / Travel Restrictions Tile Details --\x3e\n\n                    </div>\n                     {{/restrictionTiles}}\n                    \x3c!-- / Travel Restriction Tiles --\x3e\n                  </div>\n              </div>\n               {{/showTravelRestriction}}\n               {{/showResult}}\n\n               {{#showSubscribe}}\n\n              <div class="result-item__visa-requirements result-item__visa-requirements--subscribe" data-collapsed=" {{collapseTravelRestrictionsState}}" id="sherpaSubscribeComponent">\n                <div class="subscribe__container">\n                  <div class="subscribe__icon">\n                      <img src=" {{cdnUrl}}/img/ {{affiliate}}/announcement_24px.svg" alt>\n                  </div>\n                  <div class="subscribe__content"> {{localization.messages.receiveAlerts}}</div>\n                  <div class="subscribe__actions">\n                    <a class="subscribe__actions-btn sherpa-btn-secondary" id="sherpa-btn-subscribe" href=" {{subscribeUrl}}" target="_blank" rel="noopener external" data-link-type="SUBSCRIBE" data-source-type="TYPEFORM" data-placement="visaVerdict" >\n                         {{localization.stayUpdated}}\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n               {{/showSubscribe}}\n\n               {{#showNoDomesticAvailable}}\n\n              <div class="result-item__visa-requirements result-item__visa-requirements--subscribe" id="sherpaNoDomesticAvailable">\n                <div class="subscribe__container">\n                  <div class="subscribe__icon">\n                      <img src=" {{cdnUrl}}/img/ {{affiliate}}/announcement_24px.svg" alt>\n                  </div>\n                  <div class="subscribe__content"> {{localization.messages.domesticNotAvailable}}</div>\n\n                </div>\n              </div>\n\n               {{/showNoDomesticAvailable}}\n\n               {{#showMoreSearchOptions}}\n\n              <div class="result-item__visa-requirements result-item__visa-requirements--subscribe" id="sherpaMoreSearchOptions">\n                <div class="subscribe__container">\n                  <div class="subscribe__icon">\n                      <img src=" {{cdnUrl}}/img/ {{affiliate}}/announcement_24px.svg" alt>\n                  </div>\n                  <div class="subscribe__content"> {{localization.messages.moreSearchOptions}}</div>\n\n                </div>\n              </div>\n\n               {{/showMoreSearchOptions}}\n\n               {{#showEntryRequirements}}\n               {{#isReturn}}\n               {{/isReturn}}\n               {{^isReturn}}\n              <div class="result-item__visa-requirements" id="sherpaEntryRequirementsComponent">\n\n                  <div class="result-item__container">\n                     {{#showVisaRequirementsTitleOutside}}\n                    <div class="result-item__visa_title">\n                         {{localization.visaRequirements}}\n                    </div>\n                     {{/showVisaRequirementsTitleOutside}}\n\n                    <div class="result-item__content  {{^availVisa.applicationCode}}result-item__content--long  {{/availVisa.applicationCode}}">\n\n                        <div class="result-item__visa_title">\n                             {{^showVisaRequirementsTitleOutside}}\n                             {{localization.visaRequirements}}\n                             {{/showVisaRequirementsTitleOutside}}\n                        </div>\n\n                        <div class="result-item__visa_container">\n                            <div class="result-item__top">\n                                <div class="result-item__description">\n                                   {{#iconUrl}}\n                                  <span class="icon-visa-req"><img src=" {{iconUrl}}" alt=" {{iconAlt}}"></span>\n                                   {{/iconUrl}}\n                                  <div class="result-item__content_top">\n                                      <div> {{text}}</div>\n                                      <div> {{infoText}}</div>\n                                  </div>\n                                </div>\n\n\n                                <div class="result-item__actions result-item__product result-item__product--inside-container">\n                                  \x3c!-- eVisa --\x3e\n                                   {{#availVisa.applicationCode}}\n                                    <button class="result-item__product_btn sherpa-btn" id="sherpa-btn-apply- {{availVisa.applicationCode}}-inside"  data-productId=" {{availVisa.applicationCode}}">\n                                         {{localization.applyBtn}}\n                                        <i class="icon-angle-right"></i>\n                                        <i class="icon-spin4 animate-spin"></i>\n                                    </button>\n                                   {{/availVisa.applicationCode}}\n                                   {{^availVisa.applicationCode}}\n\n                                  \x3c!-- Embassy Search or Paper Visa --\x3e\n                                   {{#showPaperVisaProvider}}\n                                    <button class="result-item__product_btn sherpa-btn-secondary sherpa-btn-secondary--wide" id="sherpa-btn-paper-visa- {{index}}" onclick="window.open(\' {{paperVisaProviderUrl}}\', \'_blank\')" data-origin=" {{origin}}" data-destination=" {{destination}}" data-trip=" {{dataTrip}}" data-nationality=" {{nationality}}" data-link-type="PAPER_VISA" >\n                                         {{localization.applyBtn}}\n                                    </button>\n                                   {{/showPaperVisaProvider}}\n                                   {{#showEmbassySearch}}\n                                    <button class="result-item__product_btn sherpa-btn-secondary sherpa-btn-secondary--wide" id="sherpa-btn-embassy- {{index}}" onclick="window.open(\' {{embassySearchUrl}}\', \'_blank\')"  data-link-type="EMBASSY" >\n                                         {{localization.searchEmbassy}}\n                                    </button>\n                                   {{/showEmbassySearch}}\n                                   {{/availVisa.applicationCode}}\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n\n                  </div>\n              </div>\n               {{/isReturn}}\n               {{/showEntryRequirements}}\n          </div>\n\n           {{/results}}\n      </div>\n\n      <div class="result-list__footer">\n          \x3c!--  {{#bottomMessage}}\n          <div class="result-list__footer_left">\n              <div class="result-list__footer_left_icon">\n                  <i class="icon- {{bottomMessageStyle}}"></i>\n              </div>\n              <div class="result-list__footer_left_text">\n                   {{{bottomMessage}}}\n              </div>\n          </div>\n           {{/bottomMessage}}--\x3e\n\n           {{^showInputActions}}\n           {{#hasPwLogo}}\n            <div class="widget__body__logo">\n              <a href="https://www.joinsherpa.com?utm_source=requirementswidget&utm_medium= {{affiliate}}" target="_blank" rel="noopener" data-link-type="POWERED_BY" data-source-type="REQUIREMENTS_WIDGET" tabindex="-1">\n                <img src=" {{cdnUrl}}/img/ {{affiliate}}/poweredby-sherpa.svg" alt="powered by sherpa">\n              </a>\n            </div>\n           {{/hasPwLogo}}\n           {{/showInputActions}}\n\n          <span></span> \x3c!-- empty element to trick space-between if poweredBy is not shown --\x3e\n\n          <span class="">\n             {{#externalLinkIconBefore}}<i class="icon-external-link"></i> {{/externalLinkIconBefore}}\n            <a href=" {{disclaimerUrl}}" target="_blank" rel="noopener" data-link-type="DISCLAIMER" > {{localization.preDisclaimer}}{{localization.disclaimer}}</a>\n             {{^externalLinkIconBefore}}<i class="icon-external-link"></i> {{/externalLinkIconBefore}}\n          </span>\n\n\n\n\n      </div>\n  </div> <\/script> '},function (e, t, r) {r = r(244);e.exports = "string" == typeof r ? r : r.toString()},function (e, t, r) {r = r(254);e.exports = "string" == typeof r ? r : r.toString()},function (e, t, r) {r(190),e.exports = r(199)},function (e, t, r) {"use strict";r.r(t);var n,t = r(21),t = r(23),t = r(47),t = r(106),t = r(48),t = r(37),t = r(52),t = r(38),t = r(112),t = r(15),t = r(49),t = r(195),t = r(53),t = r(196),t = r(198),t = r(181);r.n(t).a.polyfill(),[Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {e.hasOwnProperty("append") || Object.defineProperty(e, "append", {configurable: !0,enumerable: !0,writable: !0,value: function () {var e = Array.prototype.slice.call(arguments),
r = document.createDocumentFragment();e.forEach(function (e) {
var t = e instanceof Node;
r.appendChild(t ? e : document.createTextNode(String(e)))}),this.appendChild(r)}})}),[Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {configurable: !0,enumerable: !0,writable: !0,value: function () {null !== this.parentNode && this.parentNode.removeChild(this)}})}),[Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {configurable: !0,enumerable: !0,writable: !0,value: function () {var e = Array.prototype.slice.call(arguments),
r = document.createDocumentFragment();e.forEach(function (e) {
var t = e instanceof Node;
r.appendChild(t ? e : document.createTextNode(String(e)))}),this.insertBefore(r, this.firstChild)}})}),/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js *//*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {if ("Element" in e) {var t = "classList",r = "prototype",n = e.Element[r],i = Object,o = String[r].trim || function () {
return this.replace(/^\s+|\s+$/g, "")},a = Array[r].indexOf || function (e) {
for (var t = 0, r = this.length; t < r; t++) 
  if (t in this && this[t] === e) 
    return t;
  

return -1},s = function (e, t) {
this.name = e,
this.code = DOMException[e],
this.message = t},c = function (e, t) {
if ("" === t) 
  throw new s("SYNTAX_ERR", "The token must not be empty.");

if (/\s/.test(t)) 
  throw new s("INVALID_CHARACTER_ERR", "The token must not contain space characters.");

return a.call(e, t)},l = function (e) {
for (var t = o.call(e.getAttribute("class") || ""), r = t ? t.split(/\s+/) : [], n = 0, i = r.length; n < i; n++) 
  this.push(r[n]);

this._updateClassName = function () {
  e.setAttribute("class", this.toString())
}},p = l[r] = [],e = function () {
return new l(this)};if (s[r] = Error[r], p.item = function (e) {return this[e] || null},p.contains = function (e) {return ~ c(this, e + "")},p.add = function () {for (var e, t = arguments, r = 0, n = t.length, i =! 1; ~ c(this, e = t[r] + "") || (this.push(e), i =! 0), ++ r < n;) i && this._updateClassName()},p.remove = function () {var e,
t,
r = arguments,
n = 0,
i = r.length,
o = !1;do {
for (t = c(this, e = r[n] + ""); ~ t;) 
  this.splice(t, 1),
  o = !0,
  t = c(this, e)
} while (++ n < i);o && this._updateClassName()},p.toggle = function (e, t) {var r = this.contains(e),
n = r ? !0 !== t && "remove" : !1 !== t && "add";return n && this[n](e),!0 === t || !1 === t ? t : ! r},p.replace = function (e, t) {e = c(e + "");~ e && (this.splice(e, 1, t), this._updateClassName())},p.toString = function () {return this.join(" ")},i.defineProperty) {p = {
get: e,
enumerable: !0,
configurable: !0};try {
i.defineProperty(n, t, p)} catch (e) {
void 0 !== e.number && -2146823252 !== e.number || (p.enumerable =! 1, i.defineProperty(n, t, p))}} else i[r].__defineGetter__ && n.__defineGetter__(t, e)}}(self),(r = document.createElement("_")).classList.add("c1", "c2"),r.classList.contains("c2") || ((t = function (e) {var n = DOMTokenList.prototype[e];DOMTokenList.prototype[e] = function (e) {for (var t = arguments.length, r = 0; r < t; r++) n.call(this, arguments[r])}})("add"),t("remove")),r.classList.toggle("c3", !1),r.classList.contains("c3") && (n = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (e, t) {return 1 in arguments && !this.contains(e) == ! t ? t : n.call(this, e)}),"replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (e, t) {var r = this.toString().split(" "),e = r.indexOf(e + "");~ e && (r = r.slice(e), this.remove.apply(this, r), this.add(t), this.add.apply(this, r.slice(1)))}),r = null)},function (e, t, r) {var n = r(5),r = r(99),n = n.WeakMap;e.exports = "function" == typeof n && /native code/.test(r(n))},function (e, t, r) {var n = r(3),i = r(107);e.exports = function (e) {return n(function () {return !! i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e})}},function (e, t, r) {var n = r(12),u = Math.floor,i = "".replace,h = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,f = /\$([$&'`]|\d{1,2})/g;e.exports = function (o, a, s, c, l, e) {var p = s + o.length,d = c.length,t = f;return void 0 !== l && (l = n(l), t = h),i.call(e, t, function (e, t) {var r;switch (t.charAt(0)) {case "$":
return "$";case "&":
return o;case "`":
return a.slice(0, s);case "'":
return a.slice(p);case "<": r = l[t.slice(1, -1)];
break;default:
var n = + t;
if (0 == n) 
  return e;

if (d < n) {
  var i = u(n / 10);
  return 0 === i ? e : i <= d ? void 0 === c[i - 1] ? t.charAt(1) : c[i - 1] + t.charAt(1) : e
}
r = c[n - 1]}return void 0 === r ? "" : r})}},function (e, t, r) {"use strict";var n = r(114),i = r(115);e.exports = n ? {}.toString : function () {return "[object " + i(this) + "]"}},function (e, t, r) {"use strict";var n = r(0),d = r(78),u = r(36),h = r(14),f = r(12),g = r(80),w = r(64),r = r(65)("splice"),m = Math.max,v = Math.min;n({target: "Array",proto: !0,forced: ! r}, {splice: function (e, t) {var r,n,i,o,a,s,c = f(this),l = h(c.length),p = d(e, l),e = arguments.length;if (0 === e ? r = n = 0 : n = 1 === e ? (r = 0, l - p) : (r = e - 2, v(m(u(t), 0), l - p)), 9007199254740991 < l + r - n) throw TypeError("Maximum allowed length exceeded");for (i = g(c, n), o = 0; o < n; o++) (a = p + o) in c && w(i, o, c[a]);if (r < (i.length = n)) {for (o = p; o < l - n; o++) 
s = o + r,
(a = o + n) in c ? c[s] = c[a] : delete c[s];for (o = l; l - n + r < o; o--) 
delete c[o - 1]} else if (n < r) for (o = l - n; p < o; o--) 
s = o + r - 1,
(a = o + n - 1) in c ? c[s] = c[a] : delete c[s];for (o = 0; o < r; o++) c[o + p] = arguments[o + 2];return c.length = l - n + r,i}})},function (e, t, r) {"use strict";var n = r(0),i = r(9),o = r(197),a = r(12),s = r(31),c = r(11);i && n({target: "Object",proto: !0,forced: o}, {__defineGetter__: function (e, t) {c.f(a(this), e, {get: s(t),enumerable: !0,configurable: !0})}})},function (e, t, r) {"use strict";var n = r(34),i = r(5),r = r(3);e.exports = n || ! r(function () {var e = Math.random();__defineSetter__.call(null, e, function () {}),delete i[e]})},function (e, t, r) {!function () {"use strict";(function (e) {if (e && "undefined" != typeof window) {var t = document.createElement("style");return t.setAttribute("type", "text/css"),t.innerHTML = e,document.head.appendChild(t),e}})('date-input-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  border-radius: 0;\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n  cursor: default;\n  z-index: 1; }\n  date-input-polyfill[data-open="false"] {\n    display: none; }\n  date-input-polyfill[data-open="true"] {\n    display: block; }\n  date-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    border-radius: 0;\n    font-family: sans-serif;\n    font-size: 14px;\n    box-shadow: none; }\n  date-input-polyfill select, date-input-polyfill button {\n    border: 0;\n    border-bottom: 1px solid #E0E0E0;\n    height: 24px;\n    vertical-align: top; }\n  date-input-polyfill select {\n    width: 50%; }\n    date-input-polyfill select:first-of-type {\n      border-right: 1px solid #E0E0E0;\n      width: 30%; }\n  date-input-polyfill button {\n    padding: 0;\n    width: 20%;\n    background: #E0E0E0; }\n  date-input-polyfill table {\n    border-collapse: collapse; }\n  date-input-polyfill th, date-input-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center; }\n  date-input-polyfill td[data-day] {\n    cursor: pointer; }\n    date-input-polyfill td[data-day]:hover {\n      background: #E0E0E0; }\n  date-input-polyfill [data-selected] {\n    font-weight: bold;\n    background: #D8EAF6; }\n\ninput[data-has-picker]::-ms-clear {\n  display: none; }\n');var a = function (e, t) {if (!(e instanceof t)) 
throw new TypeError("Cannot call a class as a function")},e = function () {function n(e, t) {
for (var r, n = 0; n < t.length; n++) 
  r = t[n],
  r.enumerable = r.enumerable || !1,
  r.configurable = !0,
  "value" in r && (r.writable =! 0),
  Object.defineProperty(e, r.key, r)
}return function (e, t, r) {
return t && n(e.prototype, t),
r && n(e, r),
e}}(),s = function () {function p() {
var n = this;
if (a(this, p), p.instance) 
  return p.instance;

this.date = new Date,
this.input = null,
this.isOpen = !1,
this.container = document.createElement("date-input-polyfill"),
this.year = document.createElement("select"),
p.createRangeSelect(this.year, this.date.getFullYear() - 80, this.date.getFullYear() + 20),
this.year.className = "yearSelect",
this.year.addEventListener("change", function () {
  n.date.setYear(n.year.value),
  n.refreshDaysMatrix()
}),
this.container.appendChild(this.year),
this.month = document.createElement("select"),
this.month.className = "monthSelect",
this.month.addEventListener("change", function () {
  n.date.setMonth(n.month.value),
  n.refreshDaysMatrix()
}),
this.container.appendChild(this.month),
this.today = document.createElement("button"),
this.today.textContent = "Today",
this.today.addEventListener("click", function () {
  n.date = new Date,
  n.setInput()
}),
this.container.appendChild(this.today);
var e = document.createElement("table");
this.daysHead = document.createElement("thead"),
this.days = document.createElement("tbody"),
this.days.addEventListener("click", function (e) {
  var t = e.target;
  if (! t.hasAttribute("data-day")) 
    return !1;
  
  var r = n.days.querySelector("[data-selected]");
  r && r.removeAttribute("data-selected"),
  t.setAttribute("data-selected", ""),
  n.date.setDate(parseInt(t.textContent)),
  n.setInput()
}),
e.appendChild(this.daysHead),
e.appendChild(this.days),
this.container.appendChild(e),
this.hide(),
document.body.appendChild(this.container),
document.addEventListener("click", function (e) {
  for (var t = e.target, r = t === n.container; ! r && (t = t.parentNode);) 
    r = t === n.container;
  
  "date" === e.target.getAttribute("type") || r || n.hide()
})}return e(p, [
{
  key: "hide",
  value: function () {
    this.container.setAttribute("data-open", this.isOpen = !1)
  }
},
{
  key: "show",
  value: function () {
    this.container.setAttribute("data-open", this.isOpen = !0)
  }
},
{
  key: "goto",
  value: function (e) {
    var t = e.getBoundingClientRect();
    this.container.style.top = t.top + t.height + (document.documentElement.scrollTop || document.body.scrollTop) + "px",
    this.container.style.left = t.left + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px",
    this.show()
  }
},
{
  key: "attachTo",
  value: function (e) {
    return e === this.input && this.isOpen ? !1 : void(this.input = e, this.sync(), this.goto(this.input.element))
  }
}, {
  key: "sync",
  value: function () {
    this.date = this.input.element.valueAsDate ? p.absoluteDate(this.input.element.valueAsDate) : new Date,
    this.year.value = this.date.getFullYear(),
    this.month.value = this.date.getMonth(),
    this.refreshDaysMatrix()
  }
}, {
  key: "setInput",
  value: function () {
    var e = this;
    this.input.element.value = this.date.getFullYear() + "-" + (
      "0" + (
        this.date.getMonth() + 1
      )
    ).slice(-2) + "-" + (
      "0" + this.date.getDate()
    ).slice(-2),
    this.input.element.focus(),
    setTimeout(function () {
      e.hide()
    }, 100),
    this.pingInput()
  }
}, {
  key: "refreshLocale",
  value: function () {
    if (this.locale === this.input.locale) 
      return !1;
    
    this.locale = this.input.locale;
    for (var e =["<tr>"], t = 0, r = this.input.localeText.days.length; t < r; ++ t) 
      e.push('<th scope="col">' + this.input.localeText.days[t] + "</th>");
    
    this.daysHead.innerHTML = e.join(""),
    p.createRangeSelect(this.month, 0, 11, this.input.localeText.months, this.date.getMonth()),
    this.today.textContent = this.input.localeText.today
  }
}, {
  key: "refreshDaysMatrix",
  value: function () {
    this.refreshLocale();
    for (var e = this.date.getFullYear(), t = this.date.getMonth(), r = new Date(e, t, 1).getDay(), n = new Date(this.date.getFullYear(), t + 1, 0).getDate(), i = p.absoluteDate(this.input.element.valueAsDate) || !1, o = i && e === i.getFullYear() && t === i.getMonth(), a =[], s = 0; s < n + r; ++ s) {
      if (0 == s % 7 && a.push("\n          " + (
      0 === s ? "" : "</tr>"
    ) + "\n          <tr>\n        "), s + 1 <= r) {
        a.push("<td></td>");
        continue
      }
      var c = s + 1 - r,
        l = o && i.getDate() === c;
      a.push("<td data-day " + (
      l ? "data-selected" : ""
    ) + ">\n          " + c + "\n        </td>")
    }
    this.days.innerHTML = a.join("")
  }
}, {
  key: "pingInput",
  value: function () {
    var t,
      r;
    try {
      t = new Event("input"),
      r = new Event("change")
    } catch (e) {
      t = document.createEvent("KeyboardEvent"),
      t.initEvent("input", !0, !1),
      r = document.createEvent("KeyboardEvent"),
      r.initEvent("change", !0, !1)
    }
    this.input.element.dispatchEvent(t),
    this.input.element.dispatchEvent(r)
  }
}], [
{
  key: "createRangeSelect",
  value: function (e, t, r, n, i) {
    e.innerHTML = "";
    for (var o, a = t; a <= r; ++ a) {
      o = document.createElement("option"),
      e.appendChild(o);
      var s = n ? n[a - t] : a;
      o.text = s,
      o.value = a,
      a === i && (o.selected = "selected")
    }
    return e
  }
}, {
  key: "absoluteDate",
  value: function (e) {
    return e && new Date(e.getTime() + 1e3 * (60 * e.getTimezoneOffset()))
  }
}]),p}();s.instance = null;var c = {"en_en-US": {
days: [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
],
months: [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
],
today: "Today",
format: "M/D/Y"},"en-GB": {
days: [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
],
months: [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
],
today: "Today",
format: "D/M/Y"},"zh_zh-CN": {
days: [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
],
months: [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
],
today: "今天",
format: "Y/M/D"},"zh-Hans_zh-Hans-CN": {
days: [
  "周日",
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六"
],
months: [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
],
today: "今天",
format: "Y/M/D"},"zh-Hant_zh-Hant-TW": {
days: [
  "週日",
  "週一",
  "週二",
  "週三",
  "週四",
  "週五",
  "週六"
],
months: [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
],
today: "今天",
format: "Y/M/D"},"de_de-DE": {
days: [
  "So",
  "Mo",
  "Di",
  "Mi",
  "Do",
  "Fr",
  "Sa"
],
months: [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
],
today: "Heute",
format: "D.M.Y"},"da_da-DA": {
days: [
  "Søn",
  "Man",
  "Tirs",
  "Ons",
  "Tors",
  "Fre",
  "Lør"
],
months: [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December"
],
today: "I dag",
format: "D/M/Y"},es: {
days: [
  "Dom",
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb"
],
months: [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
today: "Hoy",
format: "D/M/Y"},hi: {
days: [
  "रवि",
  "सोम",
  "मंगल",
  "बुध",
  "गुरु",
  "शुक्र",
  "शनि"
],
months: [
  "जनवरी",
  "फरवरी",
  "मार्च",
  "अप्रेल",
  "मै",
  "जून",
  "जूलाई",
  "अगस्त",
  "सितम्बर",
  "आक्टोबर",
  "नवम्बर",
  "दिसम्बर"
],
today: "आज",
format: "D/M/Y"},pt: {
days: [
  "Dom",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sáb"
],
months: [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
],
today: "Hoje",
format: "D/M/Y"},ja: {
days: [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土"
],
months: [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月"
],
today: "今日",
format: "Y/M/D"},"nl_nl-NL_nl-BE": {
days: [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag"
],
months: [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December"
],
today: "Vandaag",
format: "D/M/Y"},"tr_tr-TR": {
days: [
  "Pzr",
  "Pzt",
  "Sal",
  "Çrş",
  "Prş",
  "Cum",
  "Cmt"
],
months: [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
],
today: "Bugün",
format: "D/M/Y"},"fr_fr-FR": {
days: [
  "Dim",
  "Lun",
  "Mar",
  "Mer",
  "Jeu",
  "Ven",
  "Sam"
],
months: [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
],
today: "Auj.",
format: "D/M/Y"},"uk_uk-UA": {
days: [
  "Нд",
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб"
],
months: [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень"
],
today: "Сьогодні",
format: "D.M.Y"},it: {
days: [
  "Dom",
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab"
],
months: [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "ottobre",
  "Novembre",
  "Dicembre"
],
today: "Oggi",
format: "D/M/Y"},pl: {
days: [
  "Nie",
  "Pon",
  "Wto",
  "Śro",
  "Czw",
  "Pt",
  "Sob"
],
months: [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień"
],
today: "Dzisiaj",
format: "D.M.Y"},cs: {
days: [
  "Po",
  "Út",
  "St",
  "Čt",
  "Pá",
  "So",
  "Ne"
],
months: [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec"
],
today: "Dnes",
format: "D.M.Y"},ru: {
days: [
  "Вс",
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб"
],
months: [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
],
today: "Сегодня",
format: "D.M.Y"}},t = function () {function o(e) {
var r = this;
a(this, o),
this.element = e,
this.element.setAttribute("data-has-picker", "");
for (var t = this.element, n = ""; t.parentNode && (n = t.getAttribute("lang"), ! n);) 
  t = t.parentNode;

this.locale = n || "en",
this.localeText = this.getLocaleText(),
Object.defineProperties(this.element, {
  value: {
    get: function () {
      return r.element.polyfillValue
    },
    set: function (e) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) 
        return r.element.polyfillValue = "",
        r.element.setAttribute("value", ""),
        !1;
      
      r.element.polyfillValue = e;
      var t = e.split("-");
      r.element.setAttribute("value", r.localeText.format.replace("Y", t[0]).replace("M", t[1]).replace("D", t[2]))
    }
  },
  valueAsDate: {
    get: function () {
      return r.element.polyfillValue ? new Date(r.element.polyfillValue) : null
    },
    set: function (e) {
      r.element.value = e.toISOString().slice(0, 10)
    }
  },
  valueAsNumber: {
    get: function () {
      return r.element.value ? r.element.valueAsDate.getTime() : NaN
    },
    set: function (e) {
      r.element.valueAsDate = new Date(e)
    }
  }
}),
this.element.value = this.element.getAttribute("value");
var i = function () {
  s.instance.attachTo(r)
};
this.element.addEventListener("focus", i),
this.element.addEventListener("mousedown", i),
this.element.addEventListener("mouseup", i),
this.element.addEventListener("keydown", function (e) {
  var t = new Date;
  switch (e.keyCode) {
    case 27: s.instance.hide();
      break;
    case 38: r.element.valueAsDate && (t.setDate(r.element.valueAsDate.getDate() + 1), r.element.valueAsDate = t, s.instance.pingInput());
      break;
    case 40: r.element.valueAsDate && (t.setDate(r.element.valueAsDate.getDate() - 1), r.element.valueAsDate = t, s.instance.pingInput());
      break;
    default:
}
s.instance.sync()})}return e(o, [{
key: "getLocaleText",
value: function () {
  var e = this.locale.toLowerCase();
  for (var t in c) {
    var r = t.split("_").map(function (e) {
      return e.toLowerCase()
    });
    if (! !~ r.indexOf(e)) 
      return c[t]
    
  }
  for (var n in c) {
    var i = n.split("_").map(function (e) {
      return e.toLowerCase()
    });
    if (! !~ i.indexOf(e.substr(0, 2))) 
      return c[n]
    
  }
  return this.locale = "en",
  this.getLocaleText()
}}], [{
key: "supportsDateInput",
value: function () {
  var e = document.createElement("input");
  e.setAttribute("type", "date");
  var t = "not-a-date";
  return e.setAttribute("value", t),
  document.currentScript && !document.currentScript.hasAttribute("data-nodep-date-input-polyfill-debug") && e.value !== t
}}, {
key: "addPickerToDateInputs",
value: function () {
  var e = document.querySelectorAll('input[type="date"]:not([data-has-picker]):not([readonly])'),
    t = e.length;
  if (! t) 
    return !1;
  
  for (var r = 0; r < t; ++ r) 
    new o(e[r])
  
}}]),o}();if (! t.supportsDateInput()) {var r = function () {s.instance = new s,t.addPickerToDateInputs(),document.querySelector("body").addEventListener("mousedown", function () {t.addPickerToDateInputs()})};if ("complete" === document.readyState) r(); else {var n = !1;document.addEventListener("DOMContentLoaded", function () {n = !0,r()}),window.addEventListener("load", function () {n || r()})}}}()},function (e, t, r) {var n = r(258),r = r(257);void 0 === r.$sherpa && (r.$sherpa = n),e.exports = n},function (e, t, r) {var n = r(7);e.exports = function (e) {if (! n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");return e}},function (e, t, r) {"use strict";var o = r(31),a = r(7),s = [].slice,c = {};e.exports = Function.bind || function (t) {var r = o(this),n = s.call(arguments, 1),i = function () {var e = n.concat(s.call(arguments));return this instanceof i ? function (e, t, r) {if (!(t in c)) {
for (var n =[], i = 0; i < t; i++) 
  n[i] = "a[" + i + "]";

c[t] = Function("C,a", "return new C(" + n.join(",") + ")")}return c[t](e, r)}(r, e.length, e) : r.apply(t, e)};return a(r.prototype) && (i.prototype = r.prototype),i}},function (e, t, r) {var n = r(22),i = r(77).f,o = {}.toString,a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];e.exports.f = function (e) {return a && "[object Window]" == o.call(e) ? function (e) {try {return i(e)} catch (e) {return a.slice()}}(e) : i(n(e))}},function (e, t, r) {var n = r(5),i = r(134).trim,r = r(107),o = n.parseInt,a = /^[+-]?0[Xx]/,r = 8 !== o(r + "08") || 22 !== o(r + "0x16");e.exports = r ? function (e, t) {e = i(String(e));return o(e, t >>> 0 || (a.test(e) ? 16 : 10))} : o},function (e, t, r) {"use strict";function s(e, t, r) {for (var n = -1, i = r; ++ n < 6;) i += t * e[n],e[n] = i % 1e7,i = o(i / 1e7)}function c(e, t) {for (var r = 6, n = 0; 0 <= -- r;) n += e[r],e[r] = o(n / t),n = n % t * 1e7}function l(e) {for (var t, r = 6, n = ""; 0 <= -- r;) "" === n && 0 !== r && 0 === e[r] || (t = String(e[r]), n = "" === n ? t : n + u.call("0", 7 - t.length) + t);return n}var n = r(0),p = r(36),d = r(205),u = r(206),r = r(3),i = 1..toFixed,o = Math.floor,h = function (e, t, r) {return 0 === t ? r : t % 2 == 1 ? h(e, t - 1, r * e) : h(e * e, t / 2, r)};n({target: "Number",proto: !0,forced: i && ("0.000" !== 8e-5. toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || ! r(function () {i.call({})})}, {toFixed: function (e) {var t,r,n = d(this),i = p(e),o = [
0,
0,
0,
0,
0,
0],a = "",e = "0";if (i < 0 || 20 < i) throw RangeError("Incorrect fraction digits");if (n != n) return "NaN";if (n <= -1e21 || 1e21 <= n) return String(n);if (n < 0 && (a = "-", n = - n), 1e-21 < n) if (n =( r = function (e) {
for (var t = 0, r = e; 4096 <= r;) 
  t += 12,
  r /= 4096;

for (; 2 <= r;) 
  t += 1,
  r /= 2;

return t}(n * h(2, 69, 1)) - 69) < 0 ? n * h(2, - r, 1) : n / h(2, r, 1), n *= 4503599627370496, 0 < (r = 52 - r)) {
for (s(o, 0, n), t = i; 7 <= t;) 
  s(o, 1e7, 0),
  t -= 7;

for (s(o, h(10, t, 1), 0), t = r - 1; 23 <= t;) 
  c(o, 1 << 23),
  t -= 23;

c(o, 1 << t),
s(o, 1, 1),
c(o, 2),
e = l(o)} else s(o, 0, n),s(o, 1 << - r, 0),e = l(o) + u.call("0", i);return e = 0 < i ? a + ((r = e.length) <= i ? "0." + u.call("0", i - r) + e : e.slice(0, r - i) + "." + e.slice(r - i)) : a + e}})},function (e, t, r) {var n = r(43);e.exports = function (e) {if ("number" != typeof e && "Number" != n(e)) throw TypeError("Incorrect invocation");return + e}},function (e, t, r) {"use strict";var i = r(36),o = r(28);e.exports = function (e) {var t = String(o(this)),r = "",n = i(e);if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");for (; 0 < n; (n >>>= 1) && (t += t)) 1 & n && (r += t);return r}},function (e, t, r) {"use strict";r(20);function m(e, t) {var r,n,i;if ("[" == t.charAt(0)) return "]" == t.charAt(t.length - 1) && (r = J(t.slice(1, -1))) ? void(e.host = r) : M;if (ne(e)) return t = x(t),F.test(t) || null === (r = X(t)) ? M : void(e.host = r);if (Y.test(t)) return M;for (r = "", n = C(t), i = 0; i < n.length; i++) r += te(n[i], Z);e.host = r}function p(e) {var t,r,n,i;if ("number" == typeof e) {for (t =[], r = 0; r < 4; r++) t.unshift(e % 256),e = D(e / 256);return t.join(".")}if ("object" != typeof e) return e;for (t = "", n = function (e) {for (var t = null, r = 1, n = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (r < i && (t = n, r = i), n = null, i = 0) : (null === n && (n = o), ++ i);return r < i && (t = n, r = i),t}(e),r = 0; r < 8; r++) i && 0 === e[r] || (i = i && !1, n === r ? (t += r ? ":" : "::", i =! 0) : (t += e[r].toString(16), r < 7 && (t += ":")));return "[" + t + "]"}function v(e) {return "" != e.username || "" != e.password}function i(e) {return ! e.host || e.cannotBeABaseURL || "file" == e.scheme}function y(e, t) {return 2 == e.length && B.test(e.charAt(0)) && (":" == (e = e.charAt(1)) || ! t && "|" == e)}function _(e) {var t;return 1 < e.length && y(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)}function b(e) {var t = e.path,r = t.length;! r || "file" == e.scheme && 1 == r && y(t[0], !0) || t.pop()}function s(e, t, r, n) {var i,o,a,s = r || ie,c = 0,l = "",p = !1,d = !1,u = !1;for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path =[], e.query = null, e.fragment = null, e.cannotBeABaseURL =! 1, t = t.replace(K, "")), t = t.replace(W, ""), i = C(t); c <= i.length;) {switch (o = i[c], s) {case ie:if (! o || ! B.test(o)) {if (r) return I;s = ae;continue}l += o.toLowerCase(),s = oe;break;case oe:if (o && (j.test(o) || "+" == o || "-" == o || "." == o)) l += o.toLowerCase(); else {if (":" != o) {if (r) 
return I;l = "",s = ae,c = 0;continue}if (r && (ne(e) != A(re, l) || "file" == l && (v(e) || null !== e.port) || "file" == e.scheme && ! e.host)) return;if (e.scheme = l, r) return void(ne(e) && re[e.scheme] == e.port && (e.port = null));l = "","file" == e.scheme ? s = me : ne(e) && n && n.scheme == e.scheme ? s = se : ne(e) ? s = de : "/" == i[c + 1] ? (s = ce, c++) : (e.cannotBeABaseURL =! 0, e.path.push(""), s = Se)}break;case ae:if (! n || n.cannotBeABaseURL && "#" != o) return I;if (n.cannotBeABaseURL && "#" == o) {e.scheme = n.scheme,e.path = n.path.slice(),e.query = n.query,e.fragment = "",e.cannotBeABaseURL = !0,s = Ce;break}s = "file" == n.scheme ? me : le;continue;case se:if ("/" != o || "/" != i[c + 1]) {s = le;continue}s = ue,c++;break;case ce:if ("/" == o) {s = he;break}s = be;continue;case le:if (e.scheme = n.scheme, o == S) e.username = n.username,e.password = n.password,e.host = n.host,e.port = n.port,e.path = n.path.slice(),e.query = n.query; else if ("/" == o || "\\" == o && ne(e)) s = pe; else if ("?" == o) e.username = n.username,e.password = n.password,e.host = n.host,e.port = n.port,e.path = n.path.slice(),e.query = "",s = Ae; else {if ("#" != o) {e.username = n.username,e.password = n.password,e.host = n.host,e.port = n.port,e.path = n.path.slice(),e.path.pop(),s = be;continue}e.username = n.username,e.password = n.password,e.host = n.host,e.port = n.port,e.path = n.path.slice(),e.query = n.query,e.fragment = "",s = Ce}break;case pe:if (!ne(e) || "/" != o && "\\" != o) {if ("/" != o) {e.username = n.username,e.password = n.password,e.host = n.host,e.port = n.port,s = be;continue}s = he} else s = ue;break;case de:if (s = ue, "/" != o || "/" != l.charAt(c + 1)) continue;c++;break;case ue:if ("/" == o || "\\" == o) break;s = he;continue;case he:if ("@" == o) {p && (l = "%40" + l);for (var p =! 0, h = C(l), f = 0; f < h.length; f++) {var g = h[f];":" != g || u ? (g = te(g, ee), u ? e.password += g : e.username += g) : u = !0}l = ""} else if (o == S || "/" == o || "?" == o || "#" == o || "\\" == o && ne(e)) {if (p && "" == l) return "Invalid authority";c -= C(l).length + 1,l = "",s = fe} else l += o;break;case fe:case ge:if (r && "file" == e.scheme) {s = ye;continue}if (":" != o || d) {if (o == S || "/" == o || "?" == o || "#" == o || "\\" == o && ne(e)) {if (ne(e) && "" == l) 
return M;if (r && "" == l && (v(e) || null !== e.port)) 
return;if (a = m(e, l)) 
return a;if (l = "", s = _e, r) 
return;continue}"[" == o ? d = !0 : "]" == o && (d =! 1),l += o} else {if ("" == l) return M;if (a = m(e, l)) return a;if (l = "", s = we, r == ge) return}break;case we:if (! q.test(o)) {if (o == S || "/" == o || "?" == o || "#" == o || "\\" == o && ne(e) || r) {if ("" != l) {
var w = parseInt(l, 10);
if (65535 < w) 
  return P;

e.port = ne(e) && w === re[e.scheme] ? null : w,
l = ""}if (r) 
return;s = _e;continue}return P}l += o;break;case me:if (e.scheme = "file", "/" == o || "\\" == o) s = ve; else {if (! n || "file" != n.scheme) {s = be;continue}if (o == S) e.host = n.host,e.path = n.path.slice(),e.query = n.query; else if ("?" == o) e.host = n.host,e.path = n.path.slice(),e.query = "",s = Ae; else {if ("#" != o) {
_(i.slice(c).join("")) || (e.host = n.host, e.path = n.path.slice(), b(e)),
s = be;
continue}e.host = n.host,e.path = n.path.slice(),e.query = n.query,e.fragment = "",s = Ce}}break;case ve:if ("/" == o || "\\" == o) {s = ye;break}n && "file" == n.scheme && ! _(i.slice(c).join("")) && (y(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host),s = be;continue;case ye:if (o == S || "/" == o || "\\" == o || "?" == o || "#" == o) {if (! r && y(l)) s = be; else if ("" == l) {if (e.host = "", r) 
return;s = _e} else {if (a = m(e, l)) 
return a;if ("localhost" == e.host && (e.host = ""), r) 
return;l = "",s = _e}continue}l += o;break;case _e:if (ne(e)) {if (s = be, "/" != o && "\\" != o) continue} else if (r || "?" != o) if (r || "#" != o) {if (o != S && (s = be, "/" != o)) 
continue} else e.fragment = "",s = Ce; else e.query = "",s = Ae;break;case be: if (o == S || "/" == o || "\\" == o && ne(e) || ! r && ("?" == o || "#" == o)) {if (".." === (w =( w = l).toLowerCase()) || "%2e." === w || ".%2e" === w || "%2e%2e" === w ? (b(e), "/" == o || "\\" == o && ne(e) || e.path.push("")) : "." === (w = l) || "%2e" === w.toLowerCase() ? "/" == o || "\\" == o && ne(e) || e.path.push("") : ("file" == e.scheme && ! e.path.length && y(l) && (e.host && (e.host = ""), l = l.charAt(0) + ":"), e.path.push(l)), l = "", "file" == e.scheme && (o == S || "?" == o || "#" == o)) for (; 1 < e.path.length && "" === e.path[0];) e.path.shift();"?" == o ? (e.query = "", s = Ae) : "#" == o && (e.fragment = "", s = Ce)} else l += te(o, Q);break;case Se: "?" == o ? (e.query = "", s = Ae) : "#" == o ? (e.fragment = "", s = Ce) : o != S && (e.path[0] += te(o, Z));break;case Ae: r || "#" != o ? o != S && ("'" == o && ne(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : te(o, Z)) : (e.fragment = "", s = Ce);break;case Ce: o != S && (e.fragment += te(o, $))} c++}}var S,n,o,a = r(0),c = r(9),l = r(148),d = r(5),u = r(139),h = r(19),f = r(69),A = r(10),g = r(208),C = r(149),w = r(110).codeAt,x = r(210),E = r(50),U = r(211),r = r(30),T = d.URL,k = U.URLSearchParams,R = U.getState,O = r.set,N = r.getterFor("URL"),D = Math.floor,L = Math.pow,I = "Invalid scheme",M = "Invalid host",P = "Invalid port",B = /[A-Za-z]/,j = /[\d+-.A-Za-z]/,q = /\d/,z = /^(0x|0X)/,H = /^[0-7]+$/,V = /^\d+$/,G = /^[\dA-Fa-f]+$/,F = /[\u0000\t\u000A\u000D #%/:?@[\\]]/,Y = /[\u0000\t\u000A\u000D #/:?@[\\]]/,K = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,W = /[\t\u000A\u000D]/g,X = function (e) {var t,r,n,i,o,a,s,c = e.split(".");if (c.length && "" == c[c.length - 1] && c.pop(), 4 < (t = c.length)) return e;for (r =[], n = 0; n < t; n++) {if ("" == (i = c[n])) return e;if (o = 10, 1 < i.length && "0" == i.charAt(0) && (o = z.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0; else {if (!(10 == o ? V : 8 == o ? H : G).test(i)) return e;a = parseInt(i, o)} r.push(a)}for (n = 0; n < t; n++) if (a = r[n], n == t - 1) {if (a >= L(256, 5 - t)) return null} else if (255 < a) return null;for (s = r.pop(), n = 0; n < r.length; n++) s += r[n] * L(256, 3 - n);return s},J = function (e) {function t() {return e.charAt(u)}var r,n,i,o,a,s,c,l = [0,0,0,0,0,0,0,0],p = 0,d = null,u = 0;if (":" == t()) {if (":" != e.charAt(1)) return;u += 2,d = ++ p}for (; t();) {if (8 == p) return;if (":" != t()) {for (r = n = 0; n < 4 && G.test(t());) r = 16 * r + parseInt(t(), 16),u ++,n ++;if ("." == t()) {if (0 == n) return;if (u -= n, 6 < p) return;for (i = 0; t();) {if (o = null, 0 < i) {if (!("." == t() && i < 4)) return;u++}if (! q.test(t())) return;for (; q.test(t());) {if (a = parseInt(t(), 10), null === o) o = a; else {if (0 == o) 
return;o = 10 * o + a}if (255 < o) return;u++}l[p] = 256 * l[p] + o,2 != ++ i && 4 != i || p++}if (4 != i) return;break}if (":" == t()) {if (u++, ! t()) return} else if (t()) return;l[p++] = r} else {if (null !== d) return;u++,d = ++ p}}if (null !== d) for (s = p - d, p = 7; 0 != p && 0 < s;) c = l[p],l[p--] = l[d + s - 1],l[d + -- s] = c; else if (8 != p) return;return l},Z = {},$ = g({}, Z, {" ": 1,'"': 1,"<": 1,">": 1,"`": 1}),Q = g({}, $, {"#": 1,"?": 1,"{": 1,"}": 1}),ee = g({}, Q, {"/": 1,":": 1,";": 1,"=": 1,"@": 1,"[": 1,"\\": 1,"]": 1,"^": 1,"|": 1}),te = function (e, t) {var r = w(e, 0);return 32 < r && r < 127 && ! A(t, e) ? e : encodeURIComponent(e)},re = {ftp: 21,file: null,http: 80,https: 443,ws: 80,wss: 443},ne = function (e) {return A(re, e.scheme)},ie = {},oe = {},ae = {},se = {},ce = {},le = {},pe = {},de = {},ue = {},he = {},fe = {},ge = {},we = {},me = {},ve = {},ye = {},_e = {},be = {},Se = {},Ae = {},Ce = {},xe = function (e) {var t,r = f(this, xe, "URL"),n = 1 < arguments.length ? arguments[1] : void 0,e = String(e),i = O(r, {type: "URL"});if (void 0 !== n) if (n instanceof xe) t = N(n); else if (a = s(t = {}, String(n))) throw TypeError(a);if (a = s(i, e, null, t)) throw TypeError(a);var o = i.searchParams = new k,a = R(o);a.updateSearchParams(i.query),a.updateURL = function () {i.query = String(o) || null},c || (r.href = Ee.call(r), r.origin = Ue.call(r), r.protocol = Te.call(r), r.username = ke.call(r), r.password = Re.call(r), r.host = Oe.call(r), r.hostname = Ne.call(r), r.port = De.call(r), r.pathname = Le.call(r), r.search = Ie.call(r), r.searchParams = Me.call(r), r.hash = Pe.call(r))},r = xe.prototype,Ee = function () {var e = N(this),t = e.scheme,r = e.username,n = e.password,i = e.host,o = e.port,a = e.path,s = e.query,c = e.fragment,l = t + ":";return null !== i ? (l += "//", v(e) && (l += r + (n ? ":" + n : "") + "@"), l += p(i), null !== o && (l += ":" + o)) : "file" == t && (l += "//"),l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "",null !== s && (l += "?" + s),null !== c && (l += "#" + c),l},Ue = function () {var e = N(this),t = e.scheme,r = e.port;if ("blob" == t) try {return new URL(t.path[0]).origin} catch (e) {return "null"}return "file" != t && ne(e) ? t + "://" + p(e.host) + (null !== r ? ":" + r : "") : "null"},Te = function () {return N(this).scheme + ":"},ke = function () {return N(this).username},Re = function () {return N(this).password},Oe = function () {var e = N(this),t = e.host,e = e.port;return null === t ? "" : null === e ? p(t) : p(t) + ":" + e},Ne = function () {var e = N(this).host;return null === e ? "" : p(e)},De = function () {var e = N(this).port;return null === e ? "" : String(e)},Le = function () {var e = N(this),t = e.path;return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""},Ie = function () {var e = N(this).query;return e ? "?" + e : ""},Me = function () {return N(this).searchParams},Pe = function () {var e = N(this).fragment;return e ? "#" + e : ""},g = function (e, t) {return {get: e,set: t,configurable: !0,enumerable: !0}};c && u(r, {href: g(Ee, function (e) {var t = N(this),e = String(e),e = s(t, e);if (e) throw TypeError(e);R(t.searchParams).updateSearchParams(t.query)}),origin: g(Ue),protocol: g(Te, function (e) {var t = N(this);s(t, String(e) + ":", ie)}),username: g(ke, function (e) {var t = N(this),r = C(String(e));if (! i(t)) {t.username = "";for (var n = 0; n < r.length; n++) t.username += te(r[n], ee)}}),password: g(Re, function (e) {var t = N(this),r = C(String(e));if (! i(t)) {t.password = "";for (var n = 0; n < r.length; n++) t.password += te(r[n], ee)}}),host: g(Oe, function (e) {var t = N(this);t.cannotBeABaseURL || s(t, String(e), fe)}),hostname: g(Ne, function (e) {var t = N(this);t.cannotBeABaseURL || s(t, String(e), ge)}),port: g(De, function (e) {var t = N(this);i(t) || ("" == (e = String(e)) ? t.port = null : s(t, e, we))}),pathname: g(Le, function (e) {var t = N(this);t.cannotBeABaseURL || (t.path =[], s(t, e + "", _e))}),search: g(Ie, function (e) {var t = N(this);"" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", s(t, e, Ae)),R(t.searchParams).updateSearchParams(t.query)}),searchParams: g(Me),hash: g(Pe, function (e) {var t = N(this);"" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", s(t, e, Ce)) : t.fragment = null})}),h(r, "toJSON", function () {return Ee.call(this)}, {enumerable: !0}),h(r, "toString", function () {return Ee.call(this)}, {enumerable: !0}),T && (n = T.createObjectURL, o = T.revokeObjectURL, n && h(xe, "createObjectURL", function (e) {return n.apply(T, arguments)}), o && h(xe, "revokeObjectURL", function (e) {return o.apply(T, arguments)})),E(xe, "URL"),a({global: !0,forced: ! l,sham: ! c}, {URL: xe})},function (e, t, r) {"use strict";var u = r(9),n = r(3),h = r(66),f = r(103),g = r(72),w = r(12),m = r(59),i = Object.assign,o = Object.defineProperty;e.exports = ! i || n(function () {if (u && 1 !== i({b: 1}, i(o({}, "a", {enumerable: !0,get: function () {o(this, "b", {value: 3,enumerable: !1})}}), {b: 2})).b) return !0;var e = {},t = {},r = Symbol(),n = "abcdefghijklmnopqrst";return e[r] = 7,n.split("").forEach(function (e) {t[e] = e}),7 != i({}, e)[r] || h(i({}, t)).join("") != n}) ? function (e, t) {for (var r = w(e), n = arguments.length, i = 1, o = f.f, a = g.f; i < n;) for (var s, c = m(arguments[i++]), l = o ? h(c).concat(o(c)) : h(c), p = l.length, d = 0; d < p;) s = l[d++],u && ! a.call(c, s) || (r[s] = c[s]);return r} : i},function (e, t, r) {var i = r(8),o = r(150);e.exports = function (t, e, r, n) {try {return n ? e(i(r)[0], r[1]) : e(r)} catch (e) {throw o(t),e}}},function (e, t, r) {"use strict";function m(e) {return e + 22 + 75 * (e < 26)}function o(e) {var t,r = [],n = (e = function (e) {for (var t =[], r = 0, n = e.length; r < n;) {var i,o = e.charCodeAt(r++);55296 <= o && o <= 56319 && r < n ? 56320 == (64512 & (i = e.charCodeAt(r++))) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o), r --) : t.push(o)}return t}(e)).length,i = 128,o = 0,a = 72;for (p = 0; p < e.length; p ++) (t = e[p]) < 128 && r.push(b(t));var s = r.length,c = s;for (s && r.push("-"); c < n;) {for (var l = v, p = 0; p < e.length; p++) i <= (t = e[p]) && t < l && (l = t);var d = c + 1;if (l - i > _((v - o) / d)) throw RangeError(y);for (o +=( l - i) * d, i = l, p = 0; p < e.length; p++) {if ((t = e[p]) < i && ++ o > v) throw RangeError(y);if (t == i) {for (var u = o, h = 36;; h += 36) {var f = h <= a ? 1 : a + 26 <= h ? 26 : h - a;if (u < f) break;var g = u - f,w = 36 - f;r.push(b(m(f + g % w))),u = _(g / w)}r.push(b(m(u))),a = function (e, t, r) {var n = 0;for (e = r ? _(e / 700) : e >> 1, e += _(e / t); 455 < e; n += 36) e = _(e / 35);return _(n + 36 * e / (e + 38))}(o, d, c == s),o = 0,++ c}}++ o,++ i}return r.join("")}var v = 2147483647,a = /[^\0-\u007E]/,s = /[.\u3002\uFF0E\uFF61]/g,y = "Overflow: input needs wider integers to process",_ = Math.floor,b = String.fromCharCode;e.exports = function (e) {for (var t, r =[], n = e.toLowerCase().replace(s, ".").split("."), i = 0; i < n.length; i++) t = n[i],r.push(a.test(t) ? "xn--" + o(t) : t);return r.join(".")}},function (e, t, r) {"use strict";r(16);function i(t) {try {return decodeURIComponent(t)} catch (e) {return t}}function o(e) {var t,r = e.replace(I, " "),n = 4;try {return decodeURIComponent(r)} catch (e) {for (; n;) r = r.replace((t = n--, M[t - 1] || (M[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))), i);return r}}function n(e) {return B[e]}function a(e) {return encodeURIComponent(e).replace(P, n)}function p(e, t) {if (t) for (var r, n = t.split("&"), i = 0; i < n.length;) (r = n[i++]).length && (r = r.split("="), e.push({key: o(r.shift()),value: o(r.join("="))}))}function d(e) {this.entries.length = 0,p(this.entries, e)}function l(e, t) {if (e < t) throw TypeError("Not enough arguments")}var s = r(0),c = r(35),u = r(148),h = r(19),f = r(121),g = r(50),w = r(143),m = r(30),v = r(69),y = r(10),_ = r(45),b = r(115),S = r(8),A = r(7),C = r(54),x = r(51),E = r(212),U = r(88),r = r(6),T = c("fetch"),k = c("Headers"),r = r("iterator"),R = "URLSearchParams",O = R + "Iterator",N = m.set,D = m.getterFor(R),L = m.getterFor(O),I = /\+/g,M = Array(4),P = /[!'()~]|%20/g,B = {"!": "%21","'": "%27","(": "%28",")": "%29","~": "%7E","%20": "+"},j = w(function (e, t) {N(this, {type: O,iterator: E(D(e).entries),kind: t})}, "Iterator", function () {var e = L(this),t = e.kind,r = e.iterator.next(),e = r.value;return r.done || (r.value = "keys" === t ? e.key : "values" === t ? e.value : [e.key, e.value]),r}),q = function () {v(this, q, R);var e,t,r,n,i,o,a,s,c = 0 < arguments.length ? arguments[0] : void 0,l = [];if (N(this, {type: R,entries: l,updateURL: function () {},updateSearchParams: d}), void 0 !== c) if (A(c)) if ("function" == typeof(e = U(c))) for (r =( t = e.call(c)).next; !(o = r.call(t)).done;) {if ((o =( i =( n = E(S(o.value))).next).call(n)).done || (a = i.call(n)).done || ! i.call(n).done) throw TypeError("Expected sequence with length 2");l.push({key: o.value + "",value: a.value + ""})} else for (s in c) y(c, s) && l.push({key: s,value: c[s] + ""}); else p(l, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")},w = q.prototype;f(w, {append: function (e, t) {l(arguments.length, 2);var r = D(this);r.entries.push({key: e + "",value: t + ""}),r.updateURL()},delete: function (e) {l(arguments.length, 1);for (var t = D(this), r = t.entries, n = e + "", i = 0; i < r.length;) r[i].key === n ? r.splice(i, 1) : i++;t.updateURL()},get: function (e) {l(arguments.length, 1);for (var t = D(this).entries, r = e + "", n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;return null},getAll: function (e) {l(arguments.length, 1);for (var t = D(this).entries, r = e + "", n =[], i = 0; i < t.length; i++) t[i].key === r && n.push(t[i].value);return n},has: function (e) {l(arguments.length, 1);for (var t = D(this).entries, r = e + "", n = 0; n < t.length;) if (t[n++].key === r) return !0;return !1},set: function (e, t) {l(arguments.length, 1);for (var r, n = D(this), i = n.entries, o =! 1, a = e + "", s = t + "", c = 0; c < i.length; c++) (r = i[c]).key === a && (o ? i.splice(c--, 1) : (o =! 0, r.value = s));o || i.push({key: a, value: s}),n.updateURL()},sort: function () {for (var e, t, r = D(this), n = r.entries, i = n.slice(), o = n.length = 0; o < i.length; o++) {for (e = i[o], t = 0; t < o; t++) if (n[t].key > e.key) {n.splice(t, 0, e);break}t === o && n.push(e)}r.updateURL()},forEach: function (e) {for (var t, r = D(this).entries, n = _(e, 1 < arguments.length ? arguments[1] : void 0, 3), i = 0; i < r.length;) n((t = r[i++]).value, t.key, this)},keys: function () {return new j(this, "keys")},values: function () {return new j(this, "values")},entries: function () {return new j(this, "entries")}}, {enumerable: !0}),h(w, r, w.entries),h(w, "toString", function () {for (var e, t = D(this).entries, r =[], n = 0; n < t.length;) e = t[n++],r.push(a(e.key) + "=" + a(e.value));return r.join("&")}, {enumerable: !0}),g(q, R),s({global: !0,forced: ! u}, {URLSearchParams: q}),u || "function" != typeof T || "function" != typeof k || s({global: !0,enumerable: !0,forced: !0}, {fetch: function (e) {var t,r,n = [e];return 1 < arguments.length && (A(t = arguments[1]) && (r = t.body, b(r) === R && ((e = t.headers ? new k(t.headers) : new k).has("content-type") || e.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = C(t, {body: x(0, String(r)),headers: x(0, e)}))), n.push(t)),T.apply(this, n)}}),e.exports = {URLSearchParams: q,getState: D}},function (e, t, r) {var n = r(8),i = r(88);e.exports = function (e) {var t = i(e);if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");return n(t.call(e))}},function (e, t, r) {"use strict";var n = r(108),a = r(8),s = r(28),c = r(214),l = r(111);n("search", 1, function (n, i, o) {return [function (e) {var t = s(this),r = null == e ? void 0 : e[n];return void 0 !== r ? r.call(e, t) : new RegExp(e)[n](String(t))},function (e) {var t = o(i, e, this);if (t.done) return t.value;var r = a(e),t = String(this),e = r.lastIndex;c(e, 0) || (r.lastIndex = 0);t = l(r, t);return c(r.lastIndex, e) || (r.lastIndex = e),null === t ? -1 : t.index}]})},function (e, t) {e.exports = Object.is || function (e, t) {return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t}},function (e, t, r) {r = r(5);e.exports = r.Promise},function (e, t, r) {var n,i,o,a,s,c,l,p,d = r(5),u = r(42).f,h = r(152).set,f = r(153),g = r(217),w = r(62),m = d.MutationObserver || d.WebKitMutationObserver,v = d.document,y = d.process,r = d.Promise,u = u(d, "queueMicrotask"),u = u && u.value;u || (n = function () {var e,t;for (w && (e = y.domain) && e.exit(); i;) {t = i.fn,i = i.next;try {t()} catch (e) {throw i? a(): o = void 0,e}}o = void 0,e && e.enter()},a = f || w || g || ! m || ! v ? r && r.resolve ? (l = r.resolve(void 0), p = l.then, function () {p.call(l, n)}) : w ? function () {y.nextTick(n)} : function () {h.call(d, n)} : (s =! 0, c = v.createTextNode(""), new m(n).observe(c, {characterData: !0}), function () {c.data = s = ! s})),e.exports = u || function (e) {e = {fn: e,next: void 0};o && (o.next = e),i || (i = e, a()),o = e}},function (e, t, r) {r = r(105);e.exports = /web0s(?!.*chrome)/i.test(r)},function (e, t, r) {var n = r(8),i = r(7),o = r(154);e.exports = function (e, t) {if (n(e), i(t) && t.constructor === e) return t;e = o.f(e);return(0, e.resolve)(t),e.promise}},function (e, t, r) {var n = r(5);e.exports = function (e, t) {var r = n.console;r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t))}},function (e, t) {e.exports = function (e) {try {return {error: !1,value: e()}} catch (e) {return {error: !0,value: e}}}},function (e, t, r) {"use strict";var n = r(17),i = r(155),o = r(222),a = r(161);function s(e) {var t = new o(e),e = i(o.prototype.request, t);return n.extend(e, o.prototype, t),n.extend(e, t),e}var c = s(r(158));c.Axios = o,c.create = function (e) {return s(a(c.defaults, e))},c.Cancel = r(162),c.CancelToken = r(236),c.isCancel = r(157),c.all = function (e) {return Promise.all(e)},c.spread = r(237),c.isAxiosError = r(238),e.exports = c,e.exports.default = c},function (e, t, r) {"use strict";var n = r(17),i = r(156),o = r(223),a = r(224),s = r(161);function c(e) {this.defaults = e,this.interceptors = {request: new o,response: new o}}c.prototype.request = function (e) {"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},(e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";var t = [a, void 0],r = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {t.unshift(e.fulfilled, e.rejected)}), this.interceptors.response.forEach(function (e) {t.push(e.fulfilled, e.rejected)}); t.length;) r = r.then(t.shift(), t.shift());return r},c.prototype.getUri = function (e) {return e = s(this.defaults, e),i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")},n.forEach(["delete", "get", "head", "options"], function (r) {c.prototype[r] = function (e, t) {return this.request(s(t || {}, {method: r,url: e,data: (t || {}).data}))}}),n.forEach(["post", "put", "patch"], function (n) {c.prototype[n] = function (e, t, r) {return this.request(s(r || {}, {method: n,url: e,data: t}))}}),e.exports = c},function (e, t, r) {"use strict";var n = r(17);function i() {this.handlers = []}i.prototype.use = function (e, t) {return this.handlers.push({fulfilled: e, rejected: t}),this.handlers.length - 1},i.prototype.eject = function (e) {this.handlers[e] && (this.handlers[e] = null)},i.prototype.forEach = function (t) {n.forEach(this.handlers, function (e) {null !== e && t(e)})},e.exports = i},function (e, t, r) {"use strict";var n = r(17),i = r(225),o = r(157),a = r(158);function s(e) {e.cancelToken && e.cancelToken.throwIfRequested()}e.exports = function (t) {return s(t),t.headers = t.headers || {},t.data = i(t.data, t.headers, t.transformRequest),t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),n.forEach(["delete","get","head","post","put","patch","common"], function (e) {delete t.headers[e]}),(t.adapter || a.adapter)(t).then(function (e) {return s(t),e.data = i(e.data, e.headers, t.transformResponse),e}, function (e) {return o(e) || (s(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))),Promise.reject(e)})}},function (e, t, r) {"use strict";var n = r(17);e.exports = function (t, r, e) {return n.forEach(e, function (e) {t = e(t, r)}),t}},function (e, t) {var r,n,e = e.exports = {};function i() {throw new Error("setTimeout has not been defined")}function o() {throw new Error("clearTimeout has not been defined")}function a(t) {if (r === setTimeout) return setTimeout(t, 0);if ((r === i || ! r) && setTimeout) return r = setTimeout,setTimeout(t, 0);try {return r(t, 0)} catch (e) {try {return r.call(null, t, 0)} catch (e) {return r.call(this, t, 0)}}}!function () {try {r = "function" == typeof setTimeout ? setTimeout : i} catch (e) {r = i}try {n = "function" == typeof clearTimeout ? clearTimeout : o} catch (e) {n = o}}();var s,c = [],l = !1,p = -1;function d() {l && s && (l =! 1, s.length ? c = s.concat(c) : p = -1, c.length && u())}function u() {if (! l) {var e = a(d);l = !0;for (var t = c.length; t;) {for (s = c, c =[]; ++ p < t;) s && s[p].run();p = -1,t = c.length}s = null,l = !1,function (t) {if (n === clearTimeout) return clearTimeout(t);if ((n === o || ! n) && clearTimeout) return n = clearTimeout,clearTimeout(t);try {n(t)} catch (e) {try {return n.call(null, t)} catch (e) {return n.call(this, t)}}}(e)}}function h(e, t) {this.fun = e,this.array = t}function f() {}e.nextTick = function (e) {var t = new Array(arguments.length - 1);if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];c.push(new h(e, t)),1 !== c.length || l || a(u)},h.prototype.run = function () {this.fun.apply(null, this.array)},e.title = "browser",e.browser = !0,e.env = {},e.argv = [],e.version = "",e.versions = {},e.on = f,e.addListener = f,e.once = f,e.off = f,e.removeListener = f,e.removeAllListeners = f,e.emit = f,e.prependListener = f,e.prependOnceListener = f,e.listeners = function (e) {return []},e.binding = function (e) {throw new Error("process.binding is not supported")},e.cwd = function () {return "/"},e.chdir = function (e) {throw new Error("process.chdir is not supported")},e.umask = function () {return 0}},function (e, t, r) {"use strict";var i = r(17);e.exports = function (r, n) {i.forEach(r, function (e, t) {t !== n && t.toUpperCase() === n.toUpperCase() && (r[n] = e, delete r[t])})}},function (e, t, r) {"use strict";var i = r(160);e.exports = function (e, t, r) {var n = r.config.validateStatus;r.status && n && ! n(r.status) ? t(i("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)}},function (e, t, r) {"use strict";e.exports = function (e, t, r, n, i) {return e.config = t,r && (e.code = r),e.request = n,e.response = i,e.isAxiosError = !0,e.toJSON = function () {return {message: this.message,name: this.name,description: this.description,number: this.number,fileName: this.fileName,lineNumber: this.lineNumber,columnNumber: this.columnNumber,stack: this.stack,config: this.config,code: this.code}},e}},function (e, t, r) {"use strict";var s = r(17);e.exports = s.isStandardBrowserEnv() ? {write: function (e, t, r, n, i, o) {var a = [];a.push(e + "=" + encodeURIComponent(t)),s.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),s.isString(n) && a.push("path=" + n),s.isString(i) && a.push("domain=" + i),!0 === o && a.push("secure"),document.cookie = a.join("; ")},read: function (e) {e = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return e ? decodeURIComponent(e[3]) : null},remove: function (e) {this.write(e, "", Date.now() - 864e5)}} : {write: function () {},read: function () {return null},remove: function () {}}},function (e, t, r) {"use strict";var n = r(232),i = r(233);e.exports = function (e, t) {return e && ! n(t) ? i(e, t) : t}},function (e, t, r) {"use strict";e.exports = function (e) {return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function (e, t, r) {"use strict";e.exports = function (e, t) {return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e}},function (e, t, r) {"use strict";var i = r(17),o = ["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports = function (e) {var t,r,n = {};return e && i.forEach(e.split("\n"), function (e) {r = e.indexOf(":"),t = i.trim(e.substr(0, r)).toLowerCase(),r = i.trim(e.substr(r + 1)),t && (n[t] && 0 <= o.indexOf(t) || (n[t] = "set-cookie" === t ? (n[t] || []).concat([r]) : n[t] ? n[t] + ", " + r : r))}),n}},function (e, t, r) {"use strict";var n,i,o,a = r(17);function s(e) {return i && (o.setAttribute("href", e), e = o.href),o.setAttribute("href", e), {href: o.href,protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",host: o.host,search: o.search ? o.search.replace(/^\?/, "") : "",hash: o.hash ? o.hash.replace(/^#/, "") : "",hostname: o.hostname,port: o.port,pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname}}e.exports = a.isStandardBrowserEnv() ? (i =/(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a"), n = s(window.location.href), function (e) {e = a.isString(e) ? s(e) : e;return e.protocol === n.protocol && e.host === n.host}) : function () {return !0}},function (e, t, r) {"use strict";var n = r(162);function i(e) {if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {t = e});var r = this;e(function (e) {r.reason || (r.reason = new n(e), t(r.reason))})}i.prototype.throwIfRequested = function () {if (this.reason) throw this.reason},i.source = function () {var t;return {token: new i(function (e) {t = e}),cancel: t}},e.exports = i},function (e, t, r) {"use strict";e.exports = function (t) {return function (e) {return t.apply(null, e)}}},function (e, t, r) {"use strict";e.exports = function (e) {return "object" == typeof e && !0 === e.isAxiosError}},function (e, t) {e.exports = '<iframe src="${iframeUrl}" id="sherpa-integration-iframe" title="Sherpa Widget" allowfullscreen> </iframe> <style>#sherpa-wrap{width:100%;height:100%;top:0;left:0;min-height:100%;border:none;display:block;position:fixed;background-color:transparent;z-index:99999999}#sherpa-wrap #sherpa-integration-iframe{width:100%;height:100%;background-color:transparent;border:none;overflow-x:hidden}@media (max-width:768px){.sherpa-is-loading,.sherpa-is-open{height:100%;overflow:hidden;position:initial!important}.sherpa-is-loading #sherpa-wrap{position:fixed}.sherpa-is-open #sherpa-wrap{position:absolute}.sherpa-is-open>*{display:none}}</style> '},function (e, t, r) {var n = r(0),i = r(241).values;n({target: "Object",stat: !0}, {values: function (e) {return i(e)}})},function (e, t, r) {var c = r(9),l = r(66),p = r(22),d = r(72).f,r = function (s) {return function (e) {for (var t, r = p(e), n = l(r), i = n.length, o = 0, a =[]; o < i;) t = n[o++],c && ! d.call(r, t) || a.push(s ? [t, r[t]] : r[t]);return a}};e.exports = {entries: r(!0),values: r(!1)}},function (e, t, r) {var n = r(9),i = r(5),o = r(79),a = r(164),s = r(11).f,c = r(77).f,l = r(113),p = r(109),d = r(135),u = r(19),h = r(3),f = r(30).set,g = r(122),w = r(6)("match"),m = i.RegExp,v = m.prototype,y = /a/g,_ = /a/g,b = new m(y) !== y,S = d.UNSUPPORTED_Y;if (n && o("RegExp", ! b || S || h(function () {return _[w] = !1,m(y) != y || m(_) == _ || "/a/i" != m(y, "i")}))) {for (var A = function (e, t) {var r,n = this instanceof A,i = l(e),o = void 0 === t;if (! n && i && e.constructor === A && o) return e;b ? i && ! o && (e = e.source) : e instanceof A && (o && (t = p.call(e)), e = e.source),S && (r =!! t && -1 < t.indexOf("y")) && (t = t.replace(/y/g, ""));n = a(b ? new m(e, t) : m(e, t), n ? this : v, A);return S && r && f(n, {sticky: r}),n},C = c(m),x = 0; C.length > x;) !function (t) {t in A || s(A, t, {configurable: !0,get: function () {return m[t]},set: function (e) {m[t] = e}})}(C[x++]);(v.constructor = A).prototype = v,u(i, "RegExp", A)}g("RegExp")},function (e, t, r) {r = r(91)(!1);r.push([e.i, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap);"]),r.push([e.i, '@font-face{font-family:"fontello";src:url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.eot);src:url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.eot?37913465#iefix) format("embedded-opentype"),url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.woff2?37913465) format("woff2"),url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.woff?37913465) format("woff"),url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.ttf?37913465) format("truetype"),url(https://sdk-sandbox.joinsherpa.io/cdn/icons-font/fontello.svg?37913465#fontello) format("svg");font-weight:normal;font-style:normal}\n#sherpa-widget-wrap [class^=icon-]:before,#sherpa-widget-wrap [class*=" icon-"]:before{font-family:"fontello";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n#sherpa-widget-wrap .icon-thumbsup:before{content:""}\n#sherpa-widget-wrap .icon-success-copy:before{content:""}\n#sherpa-widget-wrap .icon-yellow:before{content:""}\n#sherpa-widget-wrap .icon-external-link:before{content:""}\n#sherpa-widget-wrap .icon-white:before{content:""}\n#sherpa-widget-wrap .icon-search:before{content:""}\n#sherpa-widget-wrap .icon-clock:before{content:""}\n#sherpa-widget-wrap .icon-spin4:before{content:""}\n#sherpa-widget-wrap .icon-angle-right:before{content:""}\n.sherpa-btn{display:inline-block;padding:12px 0;padding-left:1rem;padding-right:.75rem;min-width:164px;white-space:nowrap;background-color:#206ee8;line-height:16px;font-weight:500;font-size:16px;letter-spacing:.2px;text-align:center;color:#fff;border-radius:4px;border:none;cursor:pointer}\n.sherpa-btn .icon-angle-right{display:inline-block}\n.sherpa-btn .icon-spin4{display:none !important}\n.sherpa-btn--loading .icon-angle-right{display:none}\n.sherpa-btn--loading .icon-spin4{display:inline-block !important}\n.sherpa-btn:disabled{background-color:#e4e5e5 !important;color:#434547;font-weight:bold;border:none !important}\n.sherpa-btn:disabled:hover{color:#434547 !important}\n.sherpa-btn--full{width:100%}\n.sherpa-btn-secondary{padding:12px 0;padding-left:1rem;padding-right:1rem;min-width:164px;white-space:nowrap;line-height:1rem;font-weight:bold;letter-spacing:.2px;text-align:center;color:#222426;background-color:#fff;border-radius:4px;cursor:pointer;border:1px solid #222426;text-decoration:none;color:#222426;display:inline-flex;align-items:center;justify-content:center}\n.sherpa-btn-secondary:link,.sherpa-btn-secondary:visited{color:#222426 !important}\n.sherpa-btn-secondary svg.sherpa-btn-icon{fill:#222426;width:1rem;margin-right:.5rem}\n.sherpa-btn-secondary:hover{background:#fff;color:#206ee8 !important}\n.sherpa-btn-secondary:hover svg.sherpa-btn-icon{fill:#206ee8}\n.sherpa-btn-secondary img{margin-right:.5rem}\n.sherpa-btn-secondary--small{min-width:1rem;font-size:1rem;line-height:1.5rem;padding:.25rem .75rem .25rem .5rem}\n.sherpa-btn-secondary--wide{min-width:200px}\n.sherpa-btn-secondary--label{min-width:1rem;font-size:.9rem;line-height:1.5rem;background:none;background-color:initial;border:none}\n.sherpa-btn-secondary--label:hover{cursor:pointer;color:#206ee8}\n#sherpa-widget-wrap{font-family:"DM Sans",sans-serif}\n#sherpa-widget-wrap .animate-spin{-webkit-animation:spin 2s infinite linear;animation:spin 2s infinite linear}\n@-webkit-keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\n@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\n#sherpa-widget-wrap #sherpa-dropdown-wrap,#sherpa-widget-wrap #sherpa-origin-dropdown-options,#sherpa-widget-wrap #sherpa-destination-dropdown-options,#sherpa-widget-wrap #sherpa-requirements-dropdown-options{max-width:310px;padding:0 1.5rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-wrap__options,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-wrap__options,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-wrap__options,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-wrap__options{position:absolute;width:100%;z-index:2;box-sizing:border-box;padding-right:1rem;padding-left:0}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-wrap__options--overlay,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-wrap__options--overlay,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-wrap__options--overlay,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-wrap__options--overlay{padding-left:0;padding-right:2rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown{margin-bottom:1rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current{cursor:pointer !important;font-family:"DM Sans",sans-serif;display:flex;width:100%;flex-direction:row;position:relative;border-radius:4px;height:46px;border:solid 1px #000;background-color:#fff;text-overflow:clip;white-space:nowrap;overflow:hidden;padding:0}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current>div,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current>div,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current>div,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current>div{display:inline-block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__left,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__left,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__left,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__left{border-right:1px solid #000;max-height:100%;height:46px;width:60px;position:relative}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__left svg,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__left svg,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__left svg,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__left svg{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__left img,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__left img{border:1px solid #e4e5e5}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__center,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__center,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__center,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__center{height:46px;line-height:46px;margin-left:8px;vertical-align:top;font-weight:500;font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:61%}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__right{position:absolute;top:50%;transform:translateY(-50%);right:5px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__right i,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__right i,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__right i,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__right i{color:#123a7d}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__current__right .icon-down,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__current__right .icon-down,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__current__right .icon-down,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__current__right .icon-down{margin-bottom:-5px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown__opened,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown__opened,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown__opened,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown__opened{display:none}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown .is-open__opened,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown .is-open__opened,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown .is-open__opened,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown .is-open__opened{display:block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options{background-color:#fff;position:relative;height:300px;box-shadow:0px 4px 4px rgba(0,0,0,.25);border-radius:8px;margin-top:-6px;display:none}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search{font-size:12px;text-align:center;padding:12px 14px 0 14px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search:after,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search:after,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search:after,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search:after{content:" ";width:10px;height:10px;top:0;right:0}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap{position:relative;text-align:left;width:100%;background-color:#fff;cursor:pointer}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input{box-sizing:border-box;width:100%;font-size:14px;border:1px solid #222426;border-radius:4px;padding:10px 0 !important;margin:0;padding-left:2rem !important;color:#222426}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder{color:#222426}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder{color:#222426}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder{color:#222426}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input:focus,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input:focus,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input:focus,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input:focus{box-shadow:0px 2px 6px rgba(0,0,0,.15);outline-color:#206ee8 !important}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__search i,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__search i,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__search i,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search i{font-size:15px;position:absolute;top:50%;transform:translateY(-50%);left:.5rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap{width:98%;top:2%;height:76%;position:relative;overflow-y:scroll;-webkit-overflow-scrolling:touch}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar{width:.5rem;border-radius:.5rem;background-color:#f3f3f5}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal{height:4px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track{border:1px #eff1f2 solid;border-radius:10px;box-shadow:0 0 6px #eff1f2 inset}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb{background-color:#bdbdbe;border-radius:16px;min-height:1rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover{background-color:#f3f3f5}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused{background-color:#f3f3f5}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible{display:block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag{display:inline-block;padding:2px 7px 4px 14px;width:2.5rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img{border:1px solid #e4e5e5;width:24px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name{display:inline-block;vertical-align:text-bottom;padding:2px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider{padding:0 1rem;font-weight:bold}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info{font-size:1rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name{font-size:.8rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result{display:block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info{font-size:1rem}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result{display:block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty{display:none;text-align:center;padding:40px 30px;line-height:initial;font-size:13px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible{display:block}\n#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-options--overlay,#sherpa-widget-wrap #sherpa-origin-dropdown-options .sherpa-dropdown-options--overlay,#sherpa-widget-wrap #sherpa-destination-dropdown-options .sherpa-dropdown-options--overlay,#sherpa-widget-wrap #sherpa-requirements-dropdown-options .sherpa-dropdown-options--overlay{top:-4rem;padding:0}\n#sherpa-widget-wrap #sherpa-dropdown-wrap.is-open .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-origin-dropdown-options.is-open .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-destination-dropdown-options.is-open .sherpa-dropdown__current__right,#sherpa-widget-wrap #sherpa-requirements-dropdown-options.is-open .sherpa-dropdown__current__right{transform:rotate(180deg);transform:rotate(180deg);margin-top:-3px}\n#sherpa-widget-wrap #sherpa-dropdown-wrap.is-open .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-origin-dropdown-options.is-open .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-destination-dropdown-options.is-open .sherpa-dropdown-options,#sherpa-widget-wrap #sherpa-requirements-dropdown-options.is-open .sherpa-dropdown-options{display:block;overflow:hidden}\n#sherpa-widget-wrap .is-open .sherpa-dropdown-options{display:block !important;overflow:hidden}\n#sherpa-widget-wrap .is-open .sherpa-dropdown__current__right{transform:rotate(180deg) !important;top:10px !important}\n@media(max-width: 768px){#sherpa-widget-wrap #sherpa-dropdown-wrap{max-width:100%}#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-dropdown-wrap__options{padding-right:0}}\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-departure-date-wrapper{position:relative}#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-departure-date-wrapper:after{z-index:0;content:"";position:absolute;top:36px;right:10px;width:1.5rem;height:1.5rem;background:url("https://sdk-sandbox.joinsherpa.io/cdn/img/sherpa/calendar_today-24px.svg")}#sherpa-widget-wrap #sherpa-dropdown-wrap .sherpa-departure-date-wrapper #sherpa-departure-date{background:rgba(0,0,0,0);z-index:1}}\n#sherpa-widget-wrap .alert-domestic--notavailable{padding:.5rem;border:1px solid #000;border-radius:.25rem}\n#sherpa-widget-wrap .result-item__visa-requirements--subscribe{padding:.5rem 1.5rem 1.5rem 1.5rem;box-sizing:border-box}\n#sherpa-widget-wrap .result-item__visa-requirements--subscribe[data-collapsed=true]{display:none !important}\n#sherpa-widget-wrap .result-item__visa-requirements--hide{display:none !important}\n#sherpa-widget-wrap .subscribe__container{display:flex;flex-direction:column;justify-content:center;padding:1rem;align-items:center;background:rgba(32,110,232,.15);border-radius:.25rem}\n#sherpa-widget-wrap .subscribe__icon{margin-right:1rem;display:flex;flex-direction:column;justify-content:center}\n#sherpa-widget-wrap .subscribe__actions{margin-top:.5rem}\n#sherpa-widget-wrap .subscribe__actions-btn{padding:.25rem .5rem;line-height:24px}\n#sherpa-widget-wrap .subscribe__content{flex-grow:1}\n#sherpa-widget-wrap .tile{border:none;margin:0;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;text-align:inherit;align-items:inherit;border:1px solid #e4e5e5;box-sizing:border-box;border-radius:4px;padding:1rem;display:flex;flex-direction:column;min-height:144px;width:100%;margin-bottom:1rem}\n#sherpa-widget-wrap .tile::-moz-focus-inner{border:0;padding:0}\n#sherpa-widget-wrap .tile[data-clickable=true]:hover{cursor:pointer;border:1px solid #222426;box-shadow:0px 4px 4px rgba(0,0,0,.25)}\n#sherpa-widget-wrap .tile .back-button,#sherpa-widget-wrap .tile .arrow,#sherpa-widget-wrap .tile .see-more{color:#206ee8}\n#sherpa-widget-wrap .tile .see-more{display:none}\n#sherpa-widget-wrap .tile-wrapper{display:flex;flex-basis:100%;flex:auto;width:250px;max-width:100%;box-sizing:border-box}\n#sherpa-widget-wrap .tile-stretch{min-height:0 !important;max-height:0 !important;height:0 !important;padding:0 !important;line-height:0 !important;overflow:hidden !important;margin:0 !important}\n#sherpa-widget-wrap .tile-no-content{border:none}\n#sherpa-widget-wrap .tile-no-content:hover{border:none;box-shadow:none;cursor:default}\n#sherpa-widget-wrap .tile-not-available{border:none;background:rgba(243,243,245,.5)}\n#sherpa-widget-wrap .tile-details{display:flex;flex-direction:column;justify-content:space-between;min-height:304px;border:1px solid #e4e5e5;box-sizing:border-box;border-radius:4px;width:100%;padding:1rem;margin-bottom:1rem}\n#sherpa-widget-wrap .tile-details__rating{display:flex;align-items:center;width:100%;margin-top:2em;text-align:left;border-top:1px solid #e4e5e5;margin-bottom:-1em}\n#sherpa-widget-wrap .tile-details__rating p{margin:.5em}\n#sherpa-widget-wrap .tile-details__rating__button i,#sherpa-widget-wrap .tile-details__rating__button svg,#sherpa-widget-wrap .tile-details__rating__button path{pointer-events:none}\n#sherpa-widget-wrap .tile-details__rating .like,#sherpa-widget-wrap .tile-details__rating .dislike{display:inline-block;cursor:pointer;margin:8px;font-size:1rem}\n#sherpa-widget-wrap .tile-details__rating .like::before,#sherpa-widget-wrap .tile-details__rating .dislike::before{content:none}\n#sherpa-widget-wrap .tile-details__rating .dislike:hover,#sherpa-widget-wrap .tile-details__rating .like:hover{transition:all .2s ease-in-out;transform:scale(1.1)}\n#sherpa-widget-wrap .tile-details__rating .dislike:hover svg path,#sherpa-widget-wrap .tile-details__rating .like:hover svg path{fill:#206ee8}\n#sherpa-widget-wrap .tile-details__rating .active svg path{fill:#206ee8}\n#sherpa-widget-wrap .tile-details__footer__thankyou.hide{display:none}\n#sherpa-widget-wrap .tile-details__helpful-feedback{border-top:1px solid #e4e5e5;margin-top:1rem}\n#sherpa-widget-wrap .tile-details__helpful-feedback.hide{display:none}\n#sherpa-widget-wrap .tile-details__helpful-feedback button{margin-top:1rem}\n#sherpa-widget-wrap .tile_details__content{display:block;max-height:150px;overflow-y:auto;flex-grow:1}\n#sherpa-widget-wrap .tile-details__header{display:flex;flex-direction:row;align-items:center;font-weight:500;border-bottom:1px solid #e4e5e5;padding-bottom:1rem}\n#sherpa-widget-wrap .tile-details-header__title{font-size:1.125rem;font-weight:500;padding:1rem 0}\n#sherpa-widget-wrap .tile-details-header__description{line-height:1.5rem;margin-bottom:1rem;max-width:750px}\n#sherpa-widget-wrap .tile-details-header__description .selected-countries-preview{display:inline;border-bottom:1px dotted #222426;cursor:pointer}\n#sherpa-widget-wrap .tile-details-header__description .selected-countries-preview:hover{font-weight:normal}\n#sherpa-widget-wrap .tile-details-header__description .selected-countries-preview--show{font-weight:300;font-style:italic}\n#sherpa-widget-wrap .tile-details-header__description .selected-countries-preview--hide{display:none}\n#sherpa-widget-wrap .tile-details-header__moreTitle{font-weight:bold;margin-bottom:.5rem}\n#sherpa-widget-wrap .tile-details-header__more{white-space:pre-line}\n#sherpa-widget-wrap .tile-details__source,#sherpa-widget-wrap .tile-details__documentLink{display:inline;align-items:center}\n#sherpa-widget-wrap .tile-details__source .icon-forward,#sherpa-widget-wrap .tile-details__documentLink .icon-forward{display:inline;align-items:center}\n#sherpa-widget-wrap .tile-details__source .icon-forward img,#sherpa-widget-wrap .tile-details__documentLink .icon-forward img{height:1rem}\n#sherpa-widget-wrap .tile .tile__header{display:flex;flex-direction:row;align-items:center;margin-bottom:1rem;font-weight:500}\n#sherpa-widget-wrap .tile__header__icon,#sherpa-widget-wrap .tile-details__header__icon{margin-right:.875rem;display:flex;align-items:center}\n#sherpa-widget-wrap .icon-back{margin-right:.25rem;display:flex;align-items:center}\n#sherpa-widget-wrap .icon-back:hover{cursor:pointer}\n#sherpa-widget-wrap .icon-back svg{fill:currentColor}\n#sherpa-widget-wrap .back-button{background:none;display:flex;align-items:center;border:none;margin:0;padding:0}\n#sherpa-widget-wrap .back-button:hover{box-shadow:none}\n#sherpa-widget-wrap .back{margin-right:2rem;color:#206ee8}\n#sherpa-widget-wrap .back:hover{cursor:pointer}\n#sherpa-widget-wrap .tile-show{display:flex}\n#sherpa-widget-wrap .tile-hide{display:none}\n#sherpa-widget-wrap .tile-details-show{display:flex}\n#sherpa-widget-wrap .tile-details-hide{display:none}\n#sherpa-widget-wrap .visa-requirements__insights{margin-bottom:1.5rem;display:inline-flex;flex-wrap:wrap;padding-bottom:0;padding-left:1.5rem;padding-right:1.5rem;display:inline-flex;flex-wrap:wrap;margin:0 0 0 -1rem}\n#sherpa-widget-wrap .visa-requirements__insights[data-collapsed=true]{display:none !important}\n#sherpa-widget-wrap .visa-requirements__insights>*.tile-wrapper{margin:0 0 0 1rem}\n#sherpa-widget-wrap .visa-requirements__insights--grid{display:block;margin:0}\n#sherpa-widget-wrap .visa-requirements__title{margin:1rem 1.5rem 1rem 1.5rem;font-size:1.125rem;font-weight:500;color:#222426;flex-direction:row;justify-content:space-between}\n#sherpa-widget-wrap .visa-requirements__title--show{display:flex}\n#sherpa-widget-wrap .visa-requirements__title--hide{display:none}\n#sherpa-widget-wrap .visa-requirements__title .visa-requirements__title__icon{display:none}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsible=true]{border-bottom:solid 1px #e5e5e5;padding-bottom:.5rem}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsible=true] .visa-requirements__title__icon{display:block;position:absolute;height:24px;width:24px;border:solid 1px #222426;border-radius:4px}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsible=true] .visa-requirements__title__icon span{justify-content:center;line-height:100%;height:100%;align-items:center}\n#sherpa-widget-wrap .visa-requirements__title .travel-restrictions-control-icon{display:inline-block;min-width:initial;padding:initial}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsed=true] .travel-restrictions-control__more,#sherpa-widget-wrap .visa-requirements__title[data-collapsed=true] .travel-restrictions-control-icon__more{display:flex}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsed=true] .travel-restrictions-control__less,#sherpa-widget-wrap .visa-requirements__title[data-collapsed=true] .travel-restrictions-control-icon__less{display:none}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsed=false] .travel-restrictions-control__more,#sherpa-widget-wrap .visa-requirements__title[data-collapsed=false] .travel-restrictions-control-icon__more{display:none}\n#sherpa-widget-wrap .visa-requirements__title[data-collapsed=false] .travel-restrictions-control__less,#sherpa-widget-wrap .visa-requirements__title[data-collapsed=false] .travel-restrictions-control-icon__less{display:flex}\n#sherpa-widget-wrap .visa-requirements__title .result-item__travel-restrictions-control{font-size:.9rem;line-height:1.5rem;cursor:pointer}\n#sherpa-widget-wrap .visa-requirements__title .result-item__travel-restrictions-control:hover{color:#206ee8}\n#sherpa-widget-wrap .tile-details__last-updated{display:flex;align-items:center;margin-top:.5rem}\n#sherpa-widget-wrap .tile-details__last-updated .last-updated__status{display:block;width:.5625rem;height:.5625rem;border-radius:1rem;background-color:#de3232;margin-right:.5rem}\n#sherpa-widget-wrap .destination{display:flex;justify-content:space-between;padding:.75rem .75rem;border-radius:.25rem;background:none;align-items:center;margin-bottom:.5rem;width:100%}\n#sherpa-widget-wrap .destination img{margin-right:1rem}\n#sherpa-widget-wrap .destination span{flex-grow:1;font-size:1.125rem}\n#sherpa-widget-wrap .destination:hover{background:#e4e5e5;cursor:pointer}\n#sherpa-widget-wrap .destination.dest-selected{border:1px solid #222426;background:#fff}\n#sherpa-widget-wrap .destination.dest-not-selected{border:none}\n#sherpa-widget-wrap .destination span{text-align:left}\n#sherpa-widget-wrap .destination--inline{display:inline-flex !important}\n#sherpa-widget-wrap .result-item__container{display:flex;justify-content:space-between;box-sizing:border-box;max-width:100%}\n#sherpa-widget-wrap .selected{display:block}\n#sherpa-widget-wrap .not-selected{display:none}\n#sherpa-widget-wrap #sherpaSubscribeComponent{box-sizing:border-box}\n#sherpa-widget-wrap .result-list{display:flex;flex-direction:column;justify-content:space-between;height:100%}\n#sherpa-widget-wrap .result-list--tall .result-item{border-bottom:none}\n#sherpa-widget-wrap .result-list__footer{width:100%;box-sizing:border-box;color:#5f5f5f;font-size:14px;min-height:20px;text-align:right;padding-right:1.5rem;padding-bottom:1.5rem;display:flex;flex-direction:row;justify-content:space-between}\n#sherpa-widget-wrap .result-list__footer .widget__body__logo{position:initial;padding:0}\n#sherpa-widget-wrap .result-list__footer_left{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;padding:0;padding-left:33px;font-size:15px;line-height:normal;color:#3f3f3f}\n#sherpa-widget-wrap .result-list__footer_left_icon{display:inline-block;vertical-align:top}\n#sherpa-widget-wrap .result-list__footer_left_text{max-width:87%;display:inline-block;line-height:17px;margin-left:5px}\n#sherpa-widget-wrap .result-list__footer_left i{font-size:21px;margin-left:-5px;margin-top:-1px}\n#sherpa-widget-wrap .result-list__footer_left .icon-success-copy{color:#3f8649}\n#sherpa-widget-wrap .result-list__footer_left .icon-thumbsup{color:#123a7d}\n#sherpa-widget-wrap .result-list__footer_left .icon-yellow{color:#f9ac00}\n#sherpa-widget-wrap .result-list__footer.severity--yellow_left_text{font-size:15px;line-height:1.27;letter-spacing:normal}\n#sherpa-widget-wrap .result-list__footer_right{display:table-cell;vertical-align:middle;text-align:right;padding-right:13px;min-width:200px}\n#sherpa-widget-wrap .result-list__footer_right i{color:#123a7d;font-size:13px;margin-left:3px}\n#sherpa-widget-wrap .result-list__footer_right a{color:#123a7d}\n#sherpa-widget-wrap .result-item{width:100%;padding:0 0 0 0;box-sizing:border-box}\n#sherpa-widget-wrap .result-item .icon-success-copy{font-size:18px}\n#sherpa-widget-wrap .result-item .icon-clock{position:relative;top:1px;font-size:18px}\n#sherpa-widget-wrap .result-item__top{display:flex;padding:0 1.5rem;align-items:flex-start;justify-content:space-between}\n#sherpa-widget-wrap .result-item__top .result-item__description{display:flex}\n#sherpa-widget-wrap .result-item__hero{margin-bottom:1.5rem;font-size:1.25rem;font-weight:500;display:flex !important;flex-direction:row;align-items:center}\n#sherpa-widget-wrap .result-item__header{padding:0 1.5rem;width:100%;letter-spacing:.3px;color:#222426;display:flex !important;flex-direction:row;align-items:center;box-sizing:border-box;font-size:1.25rem;font-weight:bold}\n#sherpa-widget-wrap .result-item__header_flag{display:flex;align-items:center;margin-right:.75rem;border:1px solid #e4e5e5;height:100%}\n#sherpa-widget-wrap .result-item__header_subflag{padding-top:1.5rem;display:flex;margin-bottom:1rem}\n#sherpa-widget-wrap .result-item__header_subtitle{display:flex;width:100%;padding-top:1.5rem;display:flex;justify-content:space-between}\n#sherpa-widget-wrap .result-item__header_subtitle-actions{display:flex}\n#sherpa-widget-wrap .result-item__header_subtitle-actions a{margin-right:.5rem}\n#sherpa-widget-wrap .result-item__header_subtitle-actions a:last-child{margin-right:0}\n#sherpa-widget-wrap .result-item__visa-requirements{width:100%;display:inline-block;box-sizing:border-box}\n#sherpa-widget-wrap .result-item__visa-requirements a,#sherpa-widget-wrap .result-item__visa-requirements a:visited{color:#206ee8}\n#sherpa-widget-wrap .result-item__visa-requirements .icon-external-link{font-size:.8rem;margin-left:.25rem;color:#206ee8}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__visa_title{width:100%;margin-bottom:1rem;font-size:1.125rem;font-weight:500;padding:0 1.5rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__product{text-align:center;display:inline-block;display:block}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__product_btn:nth-child(2){margin-top:1rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__product button.sherpa-btn{border:none;box-sizing:border-box !important}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__product button.sherpa-btn:focus{box-shadow:rgba(34,36,38,.5) 0px 0px 0px 3px;outline:0;outline-color:#206ee8 !important}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__product--inside-container{display:block}\n#sherpa-widget-wrap .result-item__visa-requirements:last-child{margin-bottom:.5rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__last-updated{width:28%;display:inline-block;text-align:center;color:#434547;font-size:.8rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content{display:inline-block;margin-left:3px;flex-grow:1}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_top{display:inline-block;letter-spacing:.3px;color:#3f3f3f;margin-left:15px;line-height:22px}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_top>div{margin-bottom:.5rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_source{margin-top:.5rem;display:inline-block;letter-spacing:.3px;color:#3f3f3f;margin-left:15px;line-height:22px;font-size:.8rem}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom{margin-top:13px;margin-left:36px;color:#3f3f3f}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--warning{color:#b43938}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-icon{color:#12873f}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-text{margin-left:20px}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-text span{font-size:15px;color:#12873f;line-height:1.47}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-icon{color:#12873f}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-text{margin-left:30px}\n#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal .result-item_bottom-text span{font-size:15px;color:#12873f;line-height:1.47}\n#sherpa-widget-wrap .result-item>div{display:inline-block;vertical-align:text-top;box-sizing:border-box}\n#sherpa-widget-wrap .result-item__flag{float:left;position:relative;top:1px}\n#sherpa-widget-wrap .result-item__flag img{width:26px;border:1px solid #e4e5e5}\n#sherpa-widget-wrap .result-item_bottom-icon{position:absolute}\n#sherpa-widget-wrap .result-item_bottom-icon .icon-success-copy{font-size:21px}\n#sherpa-widget-wrap .result-item_bottom-icon .icon-yellow{color:#f9ac00;font-size:18px}\n#sherpa-widget-wrap .result-item_bottom-text{margin-left:30px;font-size:14px}\n#sherpa-widget-wrap .result-item__status{display:none}\n@media(min-width: 320px){#sherpa-widget-wrap .tile-wrapper{flex-basis:calc(100%-1rem)}#sherpa-widget-wrap .result-item__top{flex-direction:column}}\n@media(max-width: 768px){#sherpa-widget-wrap .tile-wrapper--stretch{margin:0 !important}#sherpa-widget-wrap .result-list{border-left:solid 1px #d8d8d8}#sherpa-widget-wrap .result-list__footer{padding:0 0 1rem 3.5rem;text-align:left}#sherpa-widget-wrap .result-list__footer_left{justify-content:center;font-size:15px;width:100%;padding:0;padding-top:20px}#sherpa-widget-wrap .result-list__footer_left_text{max-width:80%;text-align:left}#sherpa-widget-wrap .result-list__footer_right{display:inline-block;width:100%;text-align:center;font-size:14px;padding:16px 0px;font-size:14px;padding:16px 0px}#sherpa-widget-wrap .result-list__footer_right i{font-size:13px;margin-left:5px}#sherpa-widget-wrap .result-list__footer a,#sherpa-widget-wrap .result-list__footer a:visited{color:#206ee8}#sherpa-widget-wrap .result-item__visa-requirements--show{display:initial}#sherpa-widget-wrap .result-item__visa-requirements--hide{display:none}#sherpa-widget-wrap .result-item__visa-requirements .result-item__content{width:100%}#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_top{line-height:23px;font-size:17px;margin-left:11px;max-width:100%}#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom{margin-left:0}#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--warning .result-item_bottom-text{margin-left:37px}#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--alert,#sherpa-widget-wrap .result-item__visa-requirements .result-item__content_bottom--normal{margin-left:32px}#sherpa-widget-wrap .result-item__header{margin-top:0;margin-bottom:.5em}#sherpa-widget-wrap .result-item__header_subtitle{flex-direction:column}#sherpa-widget-wrap .result-item__header_subtitle-text{display:none}#sherpa-widget-wrap .result-item__header_subtitle-actions{order:0;margin-bottom:.5rem;justify-content:flex-end}#sherpa-widget-wrap .result-item__top{flex-direction:column}}\n@media(max-width: 992px){#sherpa-widget-wrap .result-item__product--inside-container{margin-top:1rem;margin-bottom:1rem}#sherpa-widget-wrap .result-item__header{margin-bottom:.5em}#sherpa-widget-wrap .result-item__header_subtitle{flex-direction:column}#sherpa-widget-wrap .result-item__header_subtitle-text{flex-direction:column;order:1}#sherpa-widget-wrap .result-item__header_subtitle-actions{order:0;margin-bottom:.5rem;justify-content:flex-start}}\n@media(min-width: 768px){#sherpa-widget-wrap .tile-wrapper{flex-basis:calc(100% - 1rem)}#sherpa-widget-wrap .subscribe__container{flex-direction:row}#sherpa-widget-wrap .subscribe__actions{margin-top:0;margin-left:1rem}#sherpa-widget-wrap .result-item__product_btn{margin-left:1rem}#sherpa-widget-wrap .result-item__top{flex-direction:column}}\n@media(min-width: 992px){#sherpa-widget-wrap .tile-wrapper{flex-basis:calc(50% - 1rem)}#sherpa-widget-wrap .result-item__top{flex-direction:row}}\n@media(min-width: 1211px){#sherpa-widget-wrap .tile-wrapper{flex-basis:auto}}\n#sherpa-widget-wrap *::-ms-backdrop,#sherpa-widget-wrap .result-item__product{margin:auto !important}\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){#sherpa-widget-wrap .visa-requirements__insights{display:flex;justify-content:space-between;flex-wrap:wrap}#sherpa-widget-wrap .result-item__visa-requirements .result-item__container .result-item__content{width:100%}}\n#sherpa-widget-wrap .widget *:focus{outline-color:#206ee8 !important}\n#sherpa-widget-wrap .widget.is-right-lang{direction:rtl}\n#sherpa-widget-wrap .widget.is-right-lang .widget__body__results{border-right:none;border-left:1px solid #e0e0e0}\n#sherpa-widget-wrap .widget.is-right-lang .widget__body__results .sherpa-btn{padding-left:15px;padding-right:40px}\n#sherpa-widget-wrap .widget.is-right-lang .widget__body__results .sherpa-btn .icon-angle-right{transform:rotate(180deg)}\n#sherpa-widget-wrap .widget.is-right-lang .widget__body__message{padding:1.5rem}\n#sherpa-widget-wrap .widget.is-right-lang .widget__body__logo{position:absolute;bottom:0;padding:0 40px 1rem 2rem}\n#sherpa-widget-wrap .widget.is-right-lang .result-item{padding-right:33px;padding-left:0}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__flag{float:right}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__content_top{margin-right:15px;margin-left:0 !important}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__product_btn{padding-right:16px;border:none}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__product_btn .icon-angle-right{transform:rotate(180deg)}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__content_bottom{margin-right:36px;margin-left:0}\n#sherpa-widget-wrap .widget.is-right-lang .result-item_bottom-text{margin-right:30px;margin-left:0px}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__footer_left_text{margin-right:5px;margin-left:0}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__visa-requirements--show{display:initial}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__visa-requirements--hide{display:none !important}\n#sherpa-widget-wrap .widget.is-right-lang .result-list .icon-external-link{display:inline-block;transform:scale(-1, 1)}\n#sherpa-widget-wrap .widget.is-right-lang .result-list__footer_left{padding-right:33px;padding-left:0}\n#sherpa-widget-wrap .widget.is-right-lang .result-list__footer_left_text{margin-right:5px;margin-left:0}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap{right:10%}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap .result-item{padding-right:33px;padding-left:0}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap .sherpa-dropdown__current__right{right:calc(100% - 26px)}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap .sherpa-dropdown__current__center{margin-right:15px;margin-left:0}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap .sherpa-dropdown__current__left{border-left:1px solid #c4c4c4;border-right-width:0px}\n#sherpa-widget-wrap .widget.is-right-lang #sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input{margin-left:0;margin-right:15px}\n#sherpa-widget-wrap .widget.is-right-lang .widget__header img{margin-left:.5rem;margin-right:.5rem}\n#sherpa-widget-wrap .widget.is-right-lang .widget__header span{word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}\n#sherpa-widget-wrap .widget.is-right-lang .destination img{margin-left:.5rem;margin-right:0}\n#sherpa-widget-wrap .widget.is-right-lang .tile__header__icon{margin-right:0;margin-left:.5rem}\n#sherpa-widget-wrap .widget.is-right-lang .result-item__header_flag{padding-right:0;padding-left:3rem;height:100%}\n#sherpa-widget-wrap .widget input[type=date]::-webkit-clear-button{display:none}\n#sherpa-widget-wrap .widget input[type=date]::-webkit-inner-spin-button{display:none}\n#sherpa-widget-wrap .widget input[type=date]::-webkit-calendar-picker-indicator{color:#2c3e50}\n#sherpa-widget-wrap .widget input[type=date]{cursor:pointer;position:relative;-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;border:1px solid #222426;background:#fff;padding:12px;display:inline-block !important;visibility:visible !important;border-radius:.25rem;margin-bottom:1rem;box-sizing:border-box;padding-right:.5rem;min-height:2.875rem}\n#sherpa-widget-wrap .widget-spinner{width:32px;height:32px;clear:both;margin:20px auto}\n#sherpa-widget-wrap .widget-spinner-circle{border:4px rgba(0,0,0,.25) solid;border-top:4px #000 solid;border-radius:50%;-webkit-animation:spCircRot .6s infinite linear;animation:spCircRot .6s infinite linear}\n@-webkit-keyframes spCircRot{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(359deg)}}\n@keyframes spCircRot{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}\n#sherpa-widget-wrap .widget__header{color:#4e4a41;background-color:#fff;border:1px solid #e0e0e0;padding:12px 20px;font-size:130%;display:flex;align-items:center;font-size:1.125rem;font-weight:500}\n#sherpa-widget-wrap .widget__header img{margin-right:1rem}\n#sherpa-widget-wrap .widget__header span{vertical-align:text-top;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}\n#sherpa-widget-wrap .widget__header i{font-size:22px;margin-left:-4px}\n#sherpa-widget-wrap .widget__body{background-color:#f8f8f8;display:flex;width:100%;box-sizing:border-box}\n#sherpa-widget-wrap .widget__body--no-actions{border-left:1px solid #e0e0e0}\n#sherpa-widget-wrap .widget__body>div{margin:0;outline:0;vertical-align:top}\n#sherpa-widget-wrap .widget__body__dropdown .label{display:block;padding-bottom:4px}\n#sherpa-widget-wrap .widget__body__dropdown:last-child{margin-bottom:.5rem}\n#sherpa-widget-wrap .widget__body__message{padding:1.5rem;font-size:18px;line-height:1.56;letter-spacing:.17px}\n#sherpa-widget-wrap .widget__body__message--none{padding-bottom:0}\n#sherpa-widget-wrap .widget__body__logo{position:absolute;bottom:0;padding:0px 0px 1rem 1.5rem}\n#sherpa-widget-wrap .widget__body__logo img{height:24px}\n#sherpa-widget-wrap .widget__body__disclaimer{position:absolute;bottom:1.5rem;padding-left:1.5rem;font-size:.875rem}\n#sherpa-widget-wrap .widget__body__disclaimer .icon-external-link{color:#206ee8}\n#sherpa-widget-wrap .widget__body__requirements{box-sizing:border-box;position:relative;width:26%;min-width:300px;background-color:#fff;border:1px solid #e0e0e0;border-top:none;padding-bottom:1.5rem;color:#3f3f3f;line-height:1.56;letter-spacing:.2px;color:#3f3f3f;vertical-align:top;padding-bottom:3.5rem}\n#sherpa-widget-wrap .widget__body__requirements--hasPwLogo{min-height:220px}\n#sherpa-widget-wrap .widget__body__results{width:100%;vertical-align:bottom;background-color:#fff;border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;box-sizing:border-box;min-height:8rem}\n#sherpa-widget-wrap .widget__body__results__loading{display:none;text-align:center;justify-content:center;align-items:center;flex-direction:column;padding:1rem}\n#sherpa-widget-wrap .widget__body__results__loading .icon-message-wrap{margin-top:-2rem}\n#sherpa-widget-wrap .widget__body__results__loading .icon-message-wrap img{width:80px;margin-bottom:1rem}\n#sherpa-widget-wrap .widget__body__results__loading .widget-progress-bar{width:200px;height:5px;background-color:#f4f4f4;display:inline-block;text-align:center;border-radius:5px;overflow:hidden}\n#sherpa-widget-wrap .widget__body__results__loading .widget-progress-bar .progress{width:80%;height:5px;background-color:#222426;-webkit-animation:progressBar 3s cubic-bezier(0.12, 0.98, 1, 0.55);animation:progressBar 3s cubic-bezier(0.12, 0.98, 1, 0.55)}\n@-webkit-keyframes progressBar{0%{width:0}100%{width:80%}}\n@keyframes progressBar{0%{width:0}100%{width:80%}}\n#sherpa-widget-wrap .widget__body__results__success{display:none;background-color:#fff}\n#sherpa-widget-wrap .widget__body__results__error,#sherpa-widget-wrap .widget__body__results__just-fine,#sherpa-widget-wrap .widget__body__results__default{display:none;box-sizing:border-box;width:100%;padding:2rem;overflow:hidden}\n#sherpa-widget-wrap .widget__body__results__error>div,#sherpa-widget-wrap .widget__body__results__just-fine>div,#sherpa-widget-wrap .widget__body__results__default>div{display:inline-block}\n#sherpa-widget-wrap .widget__body__results__error .left,#sherpa-widget-wrap .widget__body__results__just-fine .left,#sherpa-widget-wrap .widget__body__results__default .left{box-sizing:border-box;background:url("https://sdk-sandbox.joinsherpa.io/cdn/img/passport-stamp-copy@3x.png") left top no-repeat;width:135px;height:135px;background-repeat:no-repeat;background-size:100% 100%}\n#sherpa-widget-wrap .widget__body__results__error_text,#sherpa-widget-wrap .widget__body__results__just-fine_text,#sherpa-widget-wrap .widget__body__results__default_text{font-size:16px;line-height:1.44;letter-spacing:normal;color:#3f3f3f;margin-top:2px}\n#sherpa-widget-wrap .widget__body__results__error .right,#sherpa-widget-wrap .widget__body__results__just-fine .right,#sherpa-widget-wrap .widget__body__results__default .right{vertical-align:top;white-space:normal;width:60%}\n#sherpa-widget-wrap .widget__body__results__error .right h3,#sherpa-widget-wrap .widget__body__results__just-fine .right h3,#sherpa-widget-wrap .widget__body__results__default .right h3{font-size:22px;color:#b43938;font-weight:normal;margin:0}\n#sherpa-widget-wrap .widget__body__results__error .right .sherpa-btn,#sherpa-widget-wrap .widget__body__results__just-fine .right .sherpa-btn,#sherpa-widget-wrap .widget__body__results__default .right .sherpa-btn{padding-left:40px;padding-right:15px;position:relative;top:20px;border:none}\n#sherpa-widget-wrap .widget__body__results__error .right .sherpa-btn i,#sherpa-widget-wrap .widget__body__results__just-fine .right .sherpa-btn i,#sherpa-widget-wrap .widget__body__results__default .right .sherpa-btn i{margin-left:20px}\n#sherpa-widget-wrap .widget__body__results__error .title,#sherpa-widget-wrap .widget__body__results__just-fine .title,#sherpa-widget-wrap .widget__body__results__default .title{font-size:1.5rem;color:#206ee8;font-weight:500;margin-bottom:1.5rem}\n#sherpa-widget-wrap .widget__body__results__error .description,#sherpa-widget-wrap .widget__body__results__just-fine .description,#sherpa-widget-wrap .widget__body__results__default .description{display:flex;flex-direction:row;align-items:center}\n#sherpa-widget-wrap .widget__body__results__error .description .text,#sherpa-widget-wrap .widget__body__results__just-fine .description .text,#sherpa-widget-wrap .widget__body__results__default .description .text{flex-grow:1;box-sizing:border-box;padding:0 2rem;max-width:430px;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}\n#sherpa-widget-wrap .widget__body__results__default .right h3{padding-top:1.5em;color:#3f3f3f}\n#sherpa-widget-wrap .widget__body__results--loading{vertical-align:middle}\n#sherpa-widget-wrap .widget__body__results--loading .widget__body__results__loading{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;min-height:8rem}\n#sherpa-widget-wrap .widget__body__results--success .widget__body__results__success{display:block;height:100%}\n#sherpa-widget-wrap .widget__body__results--error .title{color:#de3232}\n#sherpa-widget-wrap .widget__body__results--error .widget__body__results__error{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%}\n#sherpa-widget-wrap .widget__body__results--default .widget__body__results__default{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%}\n#sherpa-widget-wrap .widget__body__results--just-fine .widget__body__results__just-fine{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%}\n@media(max-width: 992px){#sherpa-widget-wrap .widget .icon-message-wrap{margin-top:0}#sherpa-widget-wrap .widget__body__results__default .left{height:120px !important;background-size:100px !important}#sherpa-widget-wrap .widget__body__results__default .right h3{padding-top:0em;font-size:18px}#sherpa-widget-wrap .widget__body__requirements{width:37%}}\n@media(max-width: 768px){#sherpa-widget-wrap .widget__header{font-size:20px}#sherpa-widget-wrap .widget__body{display:block}#sherpa-widget-wrap .widget__body>div{display:block}#sherpa-widget-wrap .widget__body__requirements{width:100%;padding:0;min-height:inherit;padding-bottom:5rem}#sherpa-widget-wrap .widget__body__message{padding:5% 7%}#sherpa-widget-wrap .widget__body__results{width:100%}#sherpa-widget-wrap .widget__body__results__error,#sherpa-widget-wrap .widget__body__results__just-fine,#sherpa-widget-wrap .widget__body__results__default{padding:1rem 0;width:90%;margin-left:5%;white-space:initial}#sherpa-widget-wrap .widget__body__results__error_text,#sherpa-widget-wrap .widget__body__results__just-fine_text,#sherpa-widget-wrap .widget__body__results__default_text{margin-top:10px;margin-bottom:20px}#sherpa-widget-wrap .widget__body__results__error .left,#sherpa-widget-wrap .widget__body__results__just-fine .left,#sherpa-widget-wrap .widget__body__results__default .left{width:100%;text-align:center;background-position:center;height:200px;background-size:170px}#sherpa-widget-wrap .widget__body__results__error .right,#sherpa-widget-wrap .widget__body__results__just-fine .right,#sherpa-widget-wrap .widget__body__results__default .right{width:100%;text-align:center;padding-bottom:40px}#sherpa-widget-wrap .widget__body__results__error .right .sherpa-btn,#sherpa-widget-wrap .widget__body__results__just-fine .right .sherpa-btn,#sherpa-widget-wrap .widget__body__results__default .right .sherpa-btn{top:0}#sherpa-widget-wrap .widget__body__results__error .right p,#sherpa-widget-wrap .widget__body__results__just-fine .right p,#sherpa-widget-wrap .widget__body__results__default .right p{font-size:18px;padding:4px 20px 19px 20px}#sherpa-widget-wrap .widget__body__results__error .title,#sherpa-widget-wrap .widget__body__results__just-fine .title,#sherpa-widget-wrap .widget__body__results__default .title{font-size:1.2rem}}\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){#sherpa-widget-wrap .widget__body *:focus,#sherpa-widget-wrap .widget__body *:focus{outline:1px solid blue}#sherpa-widget-wrap .widget__body>div{display:block}}\n#sherpa-widget-wrap .mobile{display:none}\n#sherpa-widget-wrap .desktop{display:initial}\n#sherpa-widget-wrap div[data-show=false]{display:none !important}\n@media(max-width: 768px){#sherpa-widget-wrap .mobile{display:initial}#sherpa-widget-wrap .desktop{display:none}#sherpa-widget-wrap .sherpa-btn{width:100%}#sherpa-widget-wrap .sherpa-btn-secondary{width:100%}}\ndate-input-polyfill{padding:.5rem;border-radius:.25rem}\ndate-input-polyfill .yearSelect{margin-top:.5rem;margin-left:.5rem;float:left}\ndate-input-polyfill .monthSelect{margin-top:.5rem;margin-left:2rem}\ndate-input-polyfill button{position:absolute;bottom:1rem;right:1rem}\ndate-input-polyfill table{margin-top:1rem;margin-bottom:2.5rem}\n#sherpa-widget-wrap .sherpa-sherpa{color:#222426}\n#sherpa-widget-wrap .sherpa-sherpa input{font-family:"DM Sans"}\n#sherpa-widget-wrap .sherpa-sherpa .sherpa-btn{background-color:#222426}\n#sherpa-widget-wrap .sherpa-sherpa .sherpa-btn:hover{background-color:#206ee8;color:#fff}\n#sherpa-widget-wrap .sherpa-sherpa .sherpa-btn:active{background-color:#222f89;color:#fff}\n#sherpa-widget-wrap .sherpa-sherpa .back-button{color:#206ee8}\n#sherpa-widget-wrap .sherpa-sherpa .sherpa-btn-secondary{color:#222426}\n#sherpa-widget-wrap .sherpa-sherpa .sherpa-btn-secondary:hover{color:#206ee8}\n#sherpa-widget-wrap .sherpa-sherpa .widget__header{color:#000;background-color:#fff;border:1px solid #e0e0e0}\n#sherpa-widget-wrap .sherpa-sherpa .widget__body__results__loading .widget-progress-bar .progress{background-color:#222426}\n#sherpa-widget-wrap .sherpa-sherpa .widget__body__requirements{border-top:none;color:#000}', ""]),e.exports = r},function (e, t, r) {r = r(91)(!1);r.push([e.i, '#sherpa-dropdown-wrap,#sherpa-origin-dropdown-options,#sherpa-destination-dropdown-options,#sherpa-requirements-dropdown-options{max-width:310px;padding:0 1.5rem}#sherpa-dropdown-wrap .sherpa-dropdown-wrap__options,#sherpa-origin-dropdown-options .sherpa-dropdown-wrap__options,#sherpa-destination-dropdown-options .sherpa-dropdown-wrap__options,#sherpa-requirements-dropdown-options .sherpa-dropdown-wrap__options{position:absolute;width:100%;z-index:2;box-sizing:border-box;padding-right:1rem;padding-left:0}#sherpa-dropdown-wrap .sherpa-dropdown-wrap__options--overlay,#sherpa-origin-dropdown-options .sherpa-dropdown-wrap__options--overlay,#sherpa-destination-dropdown-options .sherpa-dropdown-wrap__options--overlay,#sherpa-requirements-dropdown-options .sherpa-dropdown-wrap__options--overlay{padding-left:0;padding-right:2rem}#sherpa-dropdown-wrap .sherpa-dropdown,#sherpa-origin-dropdown-options .sherpa-dropdown,#sherpa-destination-dropdown-options .sherpa-dropdown,#sherpa-requirements-dropdown-options .sherpa-dropdown{margin-bottom:1rem}#sherpa-dropdown-wrap .sherpa-dropdown__current,#sherpa-origin-dropdown-options .sherpa-dropdown__current,#sherpa-destination-dropdown-options .sherpa-dropdown__current,#sherpa-requirements-dropdown-options .sherpa-dropdown__current{cursor:pointer !important;font-family:"DM Sans",sans-serif;display:flex;width:100%;flex-direction:row;position:relative;border-radius:4px;height:46px;border:solid 1px #000;background-color:#fff;text-overflow:clip;white-space:nowrap;overflow:hidden;padding:0}#sherpa-dropdown-wrap .sherpa-dropdown__current>div,#sherpa-origin-dropdown-options .sherpa-dropdown__current>div,#sherpa-destination-dropdown-options .sherpa-dropdown__current>div,#sherpa-requirements-dropdown-options .sherpa-dropdown__current>div{display:inline-block}#sherpa-dropdown-wrap .sherpa-dropdown__current__left,#sherpa-origin-dropdown-options .sherpa-dropdown__current__left,#sherpa-destination-dropdown-options .sherpa-dropdown__current__left,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__left{border-right:1px solid #000;max-height:100%;height:46px;width:60px;position:relative}#sherpa-dropdown-wrap .sherpa-dropdown__current__left img,#sherpa-dropdown-wrap .sherpa-dropdown__current__left svg,#sherpa-origin-dropdown-options .sherpa-dropdown__current__left img,#sherpa-origin-dropdown-options .sherpa-dropdown__current__left svg,#sherpa-destination-dropdown-options .sherpa-dropdown__current__left img,#sherpa-destination-dropdown-options .sherpa-dropdown__current__left svg,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__left img,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__left svg{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}#sherpa-dropdown-wrap .sherpa-dropdown__current__left img,#sherpa-origin-dropdown-options .sherpa-dropdown__current__left img,#sherpa-destination-dropdown-options .sherpa-dropdown__current__left img,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__left img{border:1px solid #e4e5e5}#sherpa-dropdown-wrap .sherpa-dropdown__current__center,#sherpa-origin-dropdown-options .sherpa-dropdown__current__center,#sherpa-destination-dropdown-options .sherpa-dropdown__current__center,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__center{height:46px;line-height:46px;margin-left:8px;vertical-align:top;font-weight:500;font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:61%}#sherpa-dropdown-wrap .sherpa-dropdown__current__right,#sherpa-origin-dropdown-options .sherpa-dropdown__current__right,#sherpa-destination-dropdown-options .sherpa-dropdown__current__right,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__right{position:absolute;top:50%;transform:translateY(-50%);right:5px}#sherpa-dropdown-wrap .sherpa-dropdown__current__right i,#sherpa-origin-dropdown-options .sherpa-dropdown__current__right i,#sherpa-destination-dropdown-options .sherpa-dropdown__current__right i,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__right i{color:#123a7d}#sherpa-dropdown-wrap .sherpa-dropdown__current__right .icon-down,#sherpa-origin-dropdown-options .sherpa-dropdown__current__right .icon-down,#sherpa-destination-dropdown-options .sherpa-dropdown__current__right .icon-down,#sherpa-requirements-dropdown-options .sherpa-dropdown__current__right .icon-down{margin-bottom:-5px}#sherpa-dropdown-wrap .sherpa-dropdown__opened,#sherpa-origin-dropdown-options .sherpa-dropdown__opened,#sherpa-destination-dropdown-options .sherpa-dropdown__opened,#sherpa-requirements-dropdown-options .sherpa-dropdown__opened{display:none}#sherpa-dropdown-wrap .sherpa-dropdown .is-open__opened,#sherpa-origin-dropdown-options .sherpa-dropdown .is-open__opened,#sherpa-destination-dropdown-options .sherpa-dropdown .is-open__opened,#sherpa-requirements-dropdown-options .sherpa-dropdown .is-open__opened{display:block}#sherpa-dropdown-wrap .sherpa-dropdown-options,#sherpa-origin-dropdown-options .sherpa-dropdown-options,#sherpa-destination-dropdown-options .sherpa-dropdown-options,#sherpa-requirements-dropdown-options .sherpa-dropdown-options{background-color:#fff;position:relative;height:300px;box-shadow:0px 4px 4px rgba(0,0,0,.25);border-radius:8px;margin-top:-6px;display:none}#sherpa-dropdown-wrap .sherpa-dropdown-options__search,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search{font-size:12px;text-align:center;padding:12px 14px 0 14px}#sherpa-dropdown-wrap .sherpa-dropdown-options__search:after,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search:after,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search:after,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search:after{content:" ";width:10px;height:10px;top:0;right:0}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap{position:relative;text-align:left;width:100%;background-color:#fff;cursor:pointer}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input{box-sizing:border-box;width:100%;font-size:14px;border:1px solid #222426;border-radius:4px;padding:10px 0 !important;margin:0;padding-left:2rem !important;color:#222426}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder, #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input::-moz-placeholder{color:#222426}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder, #sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input:-ms-input-placeholder{color:#222426}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input::placeholder{color:#222426}#sherpa-dropdown-wrap .sherpa-dropdown-options__search_wrap input:focus,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search_wrap input:focus,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search_wrap input:focus,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search_wrap input:focus{box-shadow:0px 2px 6px rgba(0,0,0,.15);outline-color:#206ee8 !important}#sherpa-dropdown-wrap .sherpa-dropdown-options__search i,#sherpa-origin-dropdown-options .sherpa-dropdown-options__search i,#sherpa-destination-dropdown-options .sherpa-dropdown-options__search i,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__search i{font-size:15px;position:absolute;top:50%;transform:translateY(-50%);left:.5rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap{width:98%;top:2%;height:76%;position:relative;overflow-y:scroll;-webkit-overflow-scrolling:touch}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar{width:.5rem;border-radius:.5rem;background-color:#f3f3f5}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar:horizontal{height:4px}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-track{border:1px #eff1f2 solid;border-radius:10px;box-shadow:0 0 6px #eff1f2 inset}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap::-webkit-scrollbar-thumb{background-color:#bdbdbe;border-radius:16px;min-height:1rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options:hover{background-color:#f3f3f5}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options.focused{background-color:#f3f3f5}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--visible{display:block}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag{display:inline-block;padding:2px 7px 4px 14px;width:2.5rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__flag img{border:1px solid #e4e5e5;width:24px}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__name{display:inline-block;vertical-align:text-bottom;padding:2px}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--divider{padding:0 1rem;font-weight:bold}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-info{font-size:1rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport .airport-name{font-size:.8rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--airport.search-result{display:block}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region{display:none;cursor:pointer;margin:10px 12px;text-overflow:clip;white-space:nowrap;overflow:hidden;border-radius:4px;padding-top:.25rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region .region-info{font-size:1rem}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options--region.search-result{display:block}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty{display:none;text-align:center;padding:40px 30px;line-height:initial;font-size:13px}#sherpa-dropdown-wrap .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-origin-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-destination-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible,#sherpa-requirements-dropdown-options .sherpa-dropdown-options__wrap .dropdown-options__empty--visible{display:block}#sherpa-dropdown-wrap .sherpa-dropdown-options--overlay,#sherpa-origin-dropdown-options .sherpa-dropdown-options--overlay,#sherpa-destination-dropdown-options .sherpa-dropdown-options--overlay,#sherpa-requirements-dropdown-options .sherpa-dropdown-options--overlay{top:-4rem;padding:0}#sherpa-dropdown-wrap.is-open .sherpa-dropdown__current__right,#sherpa-origin-dropdown-options.is-open .sherpa-dropdown__current__right,#sherpa-destination-dropdown-options.is-open .sherpa-dropdown__current__right,#sherpa-requirements-dropdown-options.is-open .sherpa-dropdown__current__right{transform:rotate(180deg);transform:rotate(180deg);margin-top:-3px}#sherpa-dropdown-wrap.is-open .sherpa-dropdown-options,#sherpa-origin-dropdown-options.is-open .sherpa-dropdown-options,#sherpa-destination-dropdown-options.is-open .sherpa-dropdown-options,#sherpa-requirements-dropdown-options.is-open .sherpa-dropdown-options{display:block;overflow:hidden}.is-open .sherpa-dropdown-options{display:block !important;overflow:hidden}.is-open .sherpa-dropdown__current__right{transform:rotate(180deg) !important;top:10px !important}@media(max-width: 768px){#sherpa-dropdown-wrap{max-width:100%}#sherpa-dropdown-wrap .sherpa-dropdown-wrap__options{padding-right:0}}@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){#sherpa-dropdown-wrap .sherpa-departure-date-wrapper{position:relative}#sherpa-dropdown-wrap .sherpa-departure-date-wrapper:after{z-index:0;content:"";position:absolute;top:36px;right:10px;width:1.5rem;height:1.5rem;background:url("https://sdk-sandbox.joinsherpa.io/cdn/img/sherpa/calendar_today-24px.svg")}#sherpa-dropdown-wrap .sherpa-departure-date-wrapper #sherpa-departure-date{background:rgba(0,0,0,0);z-index:1}}', ""]),e.exports = r},function (e, t) {e.exports = '<div id="sherpa-consent-form"></div> <script id="sherpa-consent-template" type="text/template"> <div id="sherpa-consent">\n      <div class="consent-bg sherpa-consent-close">\n      </div>\n      <div class="consent-modal">\n          <div class="consent-modal__header">\n              <div class="consent-modal__logo">\n                  <img src=" {{cdnUrl}}/img/tui/sherpa-logo-onwhite.svg">\n              </div>\n              <div class="consent-modal__close sherpa-consent-close">\n                  <img src=" {{cdnUrl}}/img/tui/close.svg">\n              </div>\n          </div>\n\n          <div class="consent-modal__body">\n              \x3c!-- <div class="consent-modal__question">\n                  <img src=" {{cdnUrl}}/img/tui/visa.svg">\n                  <div class="question">\n                      <div class="question__header">\n                           {{localization.title}}\n                      </div>\n                      <div class="question__text">\n                           {{localization.description}}\n                      </div>\n                  </div>\n              </div> --\x3e\n\n              <div class="consent-modal__features-list">\n                  <div class="features-list__item">\n                      <img src=" {{cdnUrl}}/img/consent-checkmark.svg">\n                      <span> {{localization.featureProcess}}</span>\n                  </div>\n                  <div class="features-list__item">\n                      <img src=" {{cdnUrl}}/img/consent-checkmark.svg">\n                      <span> {{localization.featurePayment}}</span>\n                  </div>\n                  <div class="features-list__item">\n                      <img src=" {{cdnUrl}}/img/consent-checkmark.svg">\n                      <span> {{localization.featureSecurity}}</span>\n                  </div>\n              </div>\n\n              <div class="consent-modal__section">\n\n                <div class="consent-modal__consent">\n                    <div class="consent-modal__info">\n                         {{{localization.info}}}\n                    </div>\n\n                    <div class="consent-modal__info-list">\n                        <div class="info-list__item">\n                            <img src=" {{cdnUrl}}/img/tui/loc-search-person.svg">\n                            <span> {{localization.contactInfo}}</span>\n                        </div>\n                        <div class="info-list__item">\n                            <img src=" {{cdnUrl}}/img/tui/loc-search-location.svg">\n                            <span> {{localization.tripDetails}}</span>\n                        </div>\n                    </div>\n                </div>\n\n                \x3c!-- <div class="consent-modal__privacy">\n                     {{localization.poweredBy}}{{view}}\n                    <a href=" {{disclaimerUrl}}" target="_blank" rel="noopener">\n                         {{localization.termsOfUse}}\n                    </a>\n                    <img src=" {{cdnUrl}}/img/tui/external-link.svg">\n                </div> --\x3e\n\n                <div class="consent-modal__action">\n                        <div class="sherpa-btn sherpa-consent-close" data-open="true" data-consent="true">\n                                 {{localization.checkoutBtn}}\n                            <i class="icon-angle-right"></i>\n                            <i class="icon-spin4 icon-spin4 animate-spin"></i>\n                        </div>\n\n                        <div class="sherpa-manual sherpa-consent-close" data-open="true" data-consent="false">\n                             {{localization.manualEnter}}\n                        </div>\n                </div>\n\n              </div>\n          </div>\n      </div>\n  </div> <\/script> '},function (e, t, r) {r = r(247);e.exports = "string" == typeof r ? r : r.toString()},function (e, t, r) {r = r(91)(!1);r.push([e.i, "#sherpa-consent{width:100%;height:100%;top:0;left:0;min-height:100%;border:none;display:block;position:fixed;z-index:99999999}#sherpa-consent .consent-bg{background-color:#fff;height:100%}#sherpa-consent .consent-modal{position:absolute;display:flex;flex-direction:column;top:.5rem;left:.5rem;height:calc(100% - 1rem);width:calc(100% - 1rem);margin-right:.5rem;margin-bottom:.5rem;box-sizing:content-box;background-color:#fff}#sherpa-consent .consent-modal__section{display:flex;flex-direction:row;justify-content:space-evenly}#sherpa-consent .consent-modal__body{display:flex;flex-direction:column;align-items:center}#sherpa-consent .consent-modal__header{display:flex;justify-content:space-between;align-items:center;background-color:#e2f3fe;height:3rem;padding:0 17px;text-transform:uppercase}#sherpa-consent .consent-modal__logo img{height:30px}#sherpa-consent .consent-modal__close{height:22px;cursor:pointer}#sherpa-consent .consent-modal__question{display:flex;align-items:center;flex-direction:row;padding:10px 117px;background-color:#fbfbfb}#sherpa-consent .consent-modal__question img{width:85px}#sherpa-consent .consent-modal .question{margin-left:17px}#sherpa-consent .consent-modal .question__header{font-size:22px;font-weight:bold;letter-spacing:.04px;color:#0a295f;text-transform:uppercase;white-space:nowrap}#sherpa-consent .consent-modal .question__text{font-size:18px;font-weight:300;line-height:1.28;color:#4c4c4c;margin-top:5px}#sherpa-consent .consent-modal__features-list{display:flex;align-items:center;justify-content:space-around;padding:20px;font-size:16px;font-weight:300;letter-spacing:.37px;color:#4c4c4c;border-bottom:solid 1px #f1f1f1;border-top:solid 1px #f1f1f1;width:calc(100% - 4rem)}#sherpa-consent .consent-modal__features-list__item img{margin-top:4px;margin-right:4px}#sherpa-consent .consent-modal__features-list__item span{margin-left:4px}#sherpa-consent .consent-modal__info{padding-top:30px;font-size:16px;font-weight:bold;line-height:1.33;text-align:center;color:#092a5e}#sherpa-consent .consent-modal__info-list{display:flex;align-self:center;padding:5px 15px;font-size:18px;font-weight:300;color:#4c4c4c;margin-top:2rem}#sherpa-consent .consent-modal .info-list__item{display:flex;padding:2px 14px}#sherpa-consent .consent-modal .info-list__item span{margin-left:5px}#sherpa-consent .consent-modal__privacy{align-self:center;padding:20px;font-size:14px;line-height:1.63;text-align:center;color:#4c4c4c}#sherpa-consent .consent-modal__privacy a{color:#206ee8}#sherpa-consent .consent-modal__privacy img{position:relative;left:9px;top:3px}#sherpa-consent .consent-modal__action{display:flex;flex-direction:column;margin-top:15px}#sherpa-consent .consent-modal__action .sherpa-btn{width:100px;align-self:center;padding:20px 26px;font-size:18px;font-weight:normal;text-transform:uppercase;border-radius:3px}#sherpa-consent .consent-modal__action .sherpa-manual{cursor:pointer;padding:20px;font-size:18px;line-height:1.63;text-decoration:underline;text-align:center;color:#4c4c4c}@media(max-width: 768px){#sherpa-consent .consent-modal{width:96%;left:2%;margin-left:0;height:calc(100% - 1rem);overflow-y:auto}#sherpa-consent .consent-modal__head{display:flex;padding:15px 13px;align-items:center}#sherpa-consent .consent-modal__section{flex-direction:column;width:100%;align-items:center}#sherpa-consent .consent-modal__body{padding-bottom:50px}#sherpa-consent .consent-modal__header{padding:17px}#sherpa-consent .consent-modal__title{display:none}#sherpa-consent .consent-modal__logo{margin-left:5px}#sherpa-consent .consent-modal__close{margin-left:auto}#sherpa-consent .consent-modal__features-list{flex-direction:column;align-items:initial}#sherpa-consent .consent-modal .features-list__item{padding:6px 0px}#sherpa-consent .consent-modal__info-list{flex-direction:column}#sherpa-consent .consent-modal__question{padding:16px 20px;display:flex;align-items:center}#sherpa-consent .consent-modal__question img{display:none}#sherpa-consent .consent-modal__question__text{margin-left:0}#sherpa-consent .consent-modal .question{margin-left:0}#sherpa-consent .consent-modal__info{padding:21px;text-align:left}#sherpa-consent .consent-modal__privacy{max-width:initial;text-align:left}}", ""]),e.exports = r},function (e, t, r) {"use strict";var n = r(0),i = r(249),o = r(12),a = r(14),s = r(36),c = r(80);n({target: "Array",proto: !0}, {flat: function () {var e = arguments.length ? arguments[0] : void 0,t = o(this),r = a(t.length),n = c(t, 0);return n.length = i(n, t, t, r, 0, void 0 === e ? 1 : s(e)),n}})},function (e, t, r) {"use strict";var u = r(61),h = r(14),f = r(45),g = function (e, t, r, n, i, o, a, s) {for (var c, l = i, p = 0, d =!! a && f(a, s, 3); p < n;) {if (p in r) {if (c = d ? d(r[p], p, t) : r[p], 0 < o && u(c)) l = g(e, t, c, h(c.length), l, o - 1) - 1; else {if (9007199254740991 <= l) throw TypeError("Exceed the acceptable array length");e[l] = c} l++}p++}return l};e.exports = g},function (e, t, r) {"use strict";var w = r(0),m = r(5),v = r(79),y = r(19),_ = r(166),b = r(123),S = r(69),A = r(7),C = r(3),x = r(124),E = r(50),U = r(164);e.exports = function (r, e, t) {function n(e) {var r = h[e];y(h, e, "add" == e ? function (e) {return r.call(this, 0 === e ? 0 : e),this} : "delete" == e ? function (e) {return !(p && ! A(e)) && r.call(this, 0 === e ? 0 : e)} : "get" == e ? function (e) {return p && ! A(e) ? void 0 : r.call(this, 0 === e ? 0 : e)} : "has" == e ? function (e) {return !(p && ! A(e)) && r.call(this, 0 === e ? 0 : e)} : function (e, t) {return r.call(this, 0 === e ? 0 : e, t),this})}var i,o,a,s,c,l = -1 !== r.indexOf("Map"),p = -1 !== r.indexOf("Weak"),d = l ? "set" : "add",u = m[r],h = u && u.prototype,f = u,g = {};return v(r, "function" != typeof u || !(p || h.forEach && ! C(function () {(new u).entries().next()}))) ? (f = t.getConstructor(e, r, l, d), _.REQUIRED =! 0) : v(r, !0) && (o =( i = new f)[d](p ? {} : -0, 1) != i,a = C(function () {i.has(1)}),s = x(function (e) {new u(e)}),c =! p && C(function () {for (var e = new u, t = 5; t--;) e[d](t, t);return ! e.has(-0)}),s || (((f = e(function (e, t) {S(e, f, r);e = U(new u, e, f);return null != t && b(t, e[d], {that: e,AS_ENTRIES: l}),e})).prototype = h).constructor = f),(a || c) && (n("delete"), n("has"), l && n("get")),(c || o) && n(d),p && h.clear && delete h.clear),g[r] = f,w({global: !0,forced: f != u}, g),E(f, r),p || t.setStrong(f, r, l),f}},function (e, t, r) {r = r(3);e.exports = ! r(function () {return Object.isExtensible(Object.preventExtensions({}))})},function (e, t, r) {"use strict";var l = r(11).f,p = r(54),d = r(121),u = r(45),h = r(69),f = r(123),a = r(118),s = r(122),g = r(9),w = r(166).fastKey,r = r(30),m = r.set,v = r.getterFor;e.exports = {getConstructor: function (e, r, n, i) {function o(e, t, r) {var n,i = s(e),o = c(e, t);return o ? o.value = r : (i.last = o ={index: n = w(t, !0),key: t,value: r,previous: r = i.last,next: void 0,removed: !1}, i.first || (i.first = o), r && (r.next = o), g ? i.size ++ : e.size ++, "F" !== n && (i.index[n] = o)),e}var a = e(function (e, t) {h(e, a, r),m(e, {type: r,index: p(null),first: void 0,last: void 0,size: 0}),g || (e.size = 0),null != t && f(t, e[i], {that: e,AS_ENTRIES: n})}),s = v(r),c = function (e, t) {var r,n = s(e),e = w(t);if ("F" !== e) return n.index[e];for (r = n.first; r; r = r.next) if (r.key == t) return r};return d(a.prototype, {clear: function () {for (var e = s(this), t = e.index, r = e.first; r;) r.removed = !0,r.previous && (r.previous = r.previous.next = void 0),delete t[r.index],r = r.next;e.first = e.last = void 0,g ? e.size = 0 : this.size = 0},delete: function (e) {var t,r = s(this),n = c(this, e);return n && (t = n.next, e = n.previous, delete r.index[n.index], n.removed =! 0, e && (e.next = t), t && (t.previous = e), r.first == n && (r.first = t), r.last == n && (r.last = e), g ? r.size -- : this.size --),!! n},forEach: function (e) {for (var t, r = s(this), n = u(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.next : r.first;) for (n(t.value, t.key, this); t && t.removed;) t = t.previous},has: function (e) {return !! c(this, e)}}),d(a.prototype, n ? {get: function (e) {e = c(this, e);return e && e.value},set: function (e, t) {return o(this, 0 === e ? 0 : e, t)}} : {add: function (e) {return o(this, e = 0 === e ? 0 : e, e)}}),g && l(a.prototype, "size", {get: function () {return s(this).size}}),a},setStrong: function (e, t, r) {var n = t + " Iterator",i = v(t),o = v(n);a(e, t, function (e, t) {m(this, {type: n,target: e,state: i(e),kind: t,last: void 0})}, function () {for (var e = o(this), t = e.kind, r = e.last; r && r.removed;) r = r.previous;return e.target && (e.last = r = r ? r.next : e.state.first) ? "keys" == t ? {value: r.key,done: !1} : "values" == t ? {value: r.value,done: !1} : {value: [r.key, r.value],done: !1} : {value: e.target = void 0,done: !0}}, r ? "entries" : "values", ! r, !0),s(t)}}},function (e, t, r) {var p = r(31),d = r(12),u = r(59),h = r(14),r = function (l) {return function (e, t, r, n) {p(t);var i = d(e),o = u(i),a = h(i.length),s = l ? a - 1 : 0,c = l ? -1 : 1;if (r < 2) for (;;) {if (s in o) {n = o[s],s += c;break}if (s += c, l ? s < 0 : a <= s) throw TypeError("Reduce of empty array with no initial value")}for (; l ? 0 <= s : s < a; s += c) s in o && (n = t(n, o[s], s, i));return n}};e.exports = {left: r(!1),right: r(!0)}},function (e, t, r) {r = r(91)(!1);r.push([e.i, "#requirementsWidgetIframe{overflow:hidden;margin:0px;padding:0px;border:none;min-width:300px;width:100%;transition:all .1s ease}", ""]),e.exports = r},function (e, t, r) {var n = r(0),i = r(256),r = r(85);n({target: "Array",proto: !0}, {fill: i}),r("fill")},function (e, t, r) {"use strict";var a = r(12),s = r(78),c = r(14);e.exports = function (e) {for (var t = a(this), r = c(t.length), n = arguments.length, i = s(1 < n ? arguments[1] : void 0, r), n = 2 < n ? arguments[2] : void 0, o = void 0 === n ? r : s(n, r); i < o;) t[i++] = e;return t}},function (e, t, r) {"use strict";!function (t) {e.exports = function () {if ("object" == typeof globalThis) return globalThis;var e;try {e = this || new Function("return this")()} catch (e) {if ("object" == typeof window) return window;if ("object" == typeof self) return self;if (void 0 !== t) return t}return e}()}.call(this, r(125))},function (e, t, r) {"use strict";r.r(t),r.d(t, "V1", function () {return lt}),r.d(t, "V2", function () {return pt});r(82),r(83),r(84),r(13),r(24),r(15),r(25),r(20),r(16),r(26),r(86),r(119),r(32),r(33),r(39),r(21),r(23),r(40),r(41),r(53),r(48),r(37),r(120),r(112),r(38),r(49),r(68),r(87),r(147),r(204),r(207),r(213),r(89),r(52),r(90);var n = r(71),i = r.n(n);(A ={}).altair = "alternativeairlines",A.americanairlines = "americanairlines",A.condor = "condor",A.findmyfare = "findmyfare",A.flashpack = "flashpack",A.flynas = "flynas",A.icelandair = "icelandair",A.sherpa = "sherpa",A.tui = "tui",A.globalworktravel = "globalworktravel",A.rehlat = "rehlat",A.indus = "indus",A.travelsphere = "travelsphere",A.tourradar = "tourradar",A.thomalex = "thomalex",A.kiwi = "kiwi",A.latam = "latam",A.naturaladventure = "naturaladventure",A.millatravel = "millatravel",A.cwt = "cwt",A.egencia = "egencia",A.uniworld = "uniworld",A.ttc = "ttc",A.adventureworld = "adventureworld",A.get = "get",A.costsaver = "costsaver",A.trafalgar = "trafalgar",A.lionworldtravel = "lionworldtravel",A.contiki = "contiki",A.aatkings = "aatkings",A.africantravel = "africantravel",A.insight = "insight",A.inspiringjourneys = "inspiringjourneys",A.luxurygold = "luxurygold",A.rch = "rch",A.tripactions = "tripactions",A.brendan = "brendan",A.cullinan = "cullinan",A.tripninja = "tripninja",A.turkishairlines = "turkishairlines",A.afklm = "afklm",A.triplegend = "triplegend",A.travelocity = "travelocity",A.wotif = "wotif",A.orbitz = "orbitz",A.mrjet = "mrjet",A.lastminute = "lastminute",A.expedia = "expedia",A.cheaptickets = "cheaptickets",A.ebookers = "ebookers",A.barrhead = "barrhead",A.tuinl = "tuinl",A.haggis = "haggis",A.hex = "hex",A.cal = "cal",A.gadventures = "gadventures",A.aircanada = "aircanada",A.fareportal = "fareportal",A.directtravel = "directtravel",A.atpi = "atpi",A.avian = "avian",A.airbaltic = "airbaltic",A.globalstar = "globalstar",A.moragslodge = "moragslodge",A.flighthub = "flighthub",A.justfly = "justfly",A.lotpolish = "lotpolish";var o,N,D,L,d,a = {V1: "V1",V2: "V2"};(t ={}).TRANSIT = "TRANSIT",t.TOURISM = "TOURISM",t.BUSINESS = "BUSINESS",(n = o = o || {}).GA = "GA",n.TM = "TM",(A = N = N || {}).success = "success-copy",A.yellow = "yellow",A.thumb_up = "thumbsup",A.clock = "clock",(t = D = D || {}).TO_HOME = "TO_HOME",t.E_VISA = "E_VISA",t.NOT_REQUIRED = "NOT_REQUIRED",t.EMBASSY_VISA = "EMBASSY_VISA",t.ON_ARRIVAL = "ON_ARRIVAL",t.ETA = "ETA",t.ESTA = "ESTA",t.SPECIAL_PROVISIONS = "SPECIAL_PROVISIONS",(n = L = L || {}).alert = "alert",n.warning = "warning",n.normal = "normal",(A = d = d || {}).Iframe = "iframe",A.Dom = "dom",A.Embedded = "embedded";var S,c = "requirementsWidgetIframe",p = "sherpa-widget",s = "sherpa-widget-discovery";function l(e, t, r, n, i, o, a) {try {var s = e[o](a),c = s.value} catch (e) {return void r(e)}s.done ? t(c) : Promise.resolve(c).then(n, i)}function u(s) {return function () {var e = this,a = arguments;return new Promise(function (t, r) {var n = s.apply(e, a);function i(e) {l(n, t, r, i, o, "next", e)}function o(e) {l(n, t, r, i, o, "throw", e)}i(void 0)})}}function h(e, t) {if (null == e) return {};var r,n = function (e, t) {if (null == e) return {};var r,n,i = {},o = Object.keys(e);for (n = 0; n < o.length; n++) r = o[n],0 <= t.indexOf(r) || (i[r] = e[r]);return i}(e, t);if (Object.getOwnPropertySymbols) for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) r = i[o],0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);return n}function f(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function g(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}function w(e) {return(w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function m(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}function v(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function y(e, t, r) {return t && v(e.prototype, t),r && v(e, r),e}(t = S = S || {}).Mmb = "mmb",t.Confirmation = "confirmation";var _ = function () {function e() {m(this, e)}return y(e, null, [{key: "appendTrackingScript",value: function () {var e = "sherpa-tm";document.getElementById(e) && document.getElementById(e).remove();var t = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','".concat("GTM-PJPT3MW", "');"),r = document.createElement("script"),t = document.createTextNode(t);if (r.id = e, r.appendChild(t), document.getElementsByTagName("head")[0].appendChild(r),"object" !== ("undefined" == typeof dataLayer ? "undefined" : w(dataLayer))) return console.error("Sherpa: dataLayer is not an object, cant add custom dimensions"),!1;dataLayer.affiliateId || dataLayer.push({affiliateId: I.affiliateId})}},{key: "addConfigDataToDataLayer",value: function (e) {}},{key: "pushImpression",value: function (e) {if ("object" !== ("undefined" == typeof dataLayer ? "undefined" : w(dataLayer))) return console.error("pushImpression no dataLayer"),!1;e && 0 < e.length && dataLayer.push({event: I.ecomEvent.productsViewed,ecommerce: {impressions: e}})}},{key: "sendEvent",value: function (e) {var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;if ("object" !== ("undefined" == typeof dataLayer ? "undefined" : w(dataLayer))) return !1;dataLayer.push(function (t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? f(Object(r), !0).forEach(function (e) {
g(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (e) {
Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}({event: e,eventAction: t,eventLabel: r,eventValue: n}, i))}}, {key: "pushProductClick",value: function (e) {var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "unknown";if ("object" !== ("undefined" == typeof dataLayer ? "undefined" : w(dataLayer))) return console.error("pushImpression no dataLayer"),!1;dataLayer.push({event: I.ecomEvent.productClick,ecommerce: {click: {
actionField: {
  list: t
},
products: e}}})}}]),e}(),I = function () {function s() {m(this, s)}return y(s, null, [{key: "load",value: function (e) {if (s.setAffiliateId(e), s.isLoaded) return !1;s.isLoaded = !0,s.activeIntegration === o.TM ? _.appendTrackingScript() : console.warn("Analytics not loaded")}},{key: "sendEvent",value: function (e) {s.activeIntegration === o.TM && _.sendEvent(e, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null)}},{key: "trackImpression",value: function (e) {var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "unknown",i = [];try {e.forEach(function (e) {e.response.visa.forEach(function (e) {
var t,
  r;
"availableVisas" in e && e.availableVisas[0] && (r = 1 < (r =( t = e.availableVisas[0].applicationCode).split("__")).length ? r[1] : "", i.push({
  id: t,
  name: e.availableVisas[0].name,
  position: (i.length + 1).toString(),
  category: e.requirement,
  variant: r,
  list: n,
  affiliateId: s.affiliateId
}))})}),_.pushImpression(i)} catch (e) {console.warn(e)}}},{key: "trackProductClick",value: function (e, t) {var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "unknown",n = [];if (e.applications) for (var i = 0; i < e.applications.length; i++) {var o = e.applications[i],
a = "unkonwn";o.data && o.data.arrivalDate && (a = s.calculateDateDifference(o.data.arrivalDate)),o.programId === e.selectedProductId && n.push({
name: o.availVisa.name,
id: o.programId,
category: o.availVisa.type,
variant: o.data.nationality,
position: (i + 1).toString(),
list: r,
affiliateId: s.affiliateId,
daysToTravel: a})} else n.push({id: e.selectedProductId, affiliateId: s.affiliateId}); _.pushProductClick(n, r)}}, {key: "addConfigDataToDataLayer",value: function (e) {var t = e.defaultNationalityCountry || "unknown",r = e.language,n = e.itinerary ? e.itinerary.map(function (e) {var t = s.calculateDateDifference(e.arrivalDate);return {
destinationCountry: e.destinationCountry,
arrivalDate: e.arrivalDate,
delta: t || -1}}) : "unknown",i = e.placement;this.setPlacement(i);var o = e.travellers ? e.travellers.length : -1,a = null == e.showTravelRestriction || e.showTravelRestriction,e = null == e.showEntryRequirements || e.showEntryRequirements;dataLayer.push({placement: i,language: r,defaultNationality: t,itinerary: n,groupSize: "".concat(o),showTravelRestriction: "".concat(a),showEntryRequirements: "".concat(e)})}}, {key: "trackCreateWidget",value: function (e) {var t = e.defaultNationalityCountry,r = e.itinerary;null != r && (r = r.sort(function (e, t) {e = null === (e = e.destinationCountry) || void 0 === e ? void 0 : e.toUpperCase(),t = null === (t = t.destinationCountry) || void 0 === t ? void 0 : t.toUpperCase();return e < t ? -1 : t < e ? 1 : 0}).map(function (e) {return e.destinationCountry}).toString());try {s.addConfigDataToDataLayer(e)} catch (e) {console.error("Could not add config data to datalayer")}e.travellers;e = h(e, ["travellers"]);s.sendEvent(s.cat.createWidget, t, r, null, {config: e}),setTimeout(u(regeneratorRuntime.mark(function e() {return regeneratorRuntime.wrap(function (e) {for (;;) 
switch (e.prev = e.next) {
  case 0: e.next = 6;
    break;
  case 6:
  case "end":
    return e.stop()
}}, e)})), 0)}}, {key: "trackSubscribe",value: function (e) {setTimeout(u(regeneratorRuntime.mark(function e() {return regeneratorRuntime.wrap(function (e) {for (;;) 
switch (e.prev = e.next) {
  case 0: e.next = 6;
    break;
  case 6:
  case "end":
    return e.stop()
}}, e)})), 0)}}, {key: "trackOpenCheckout",value: function (e, t) {var r = (e = e || {}).currency || "",n = e.language || "",i = "";try {i = e.applications.map(function (e) {return "".concat(e.data.nationality, "-").concat(e.data.destinationCountry, "-").concat(e.programId)}).sort(function (e, t) {e = e.toUpperCase(),t = t.toUpperCase();return e < t ? -1 : t < e ? 1 : 0}).toString()} catch (e) {}t = t || {};n = "".concat(r, ",").concat(n);"widgetOpenCheckout" == t.checkoutInitiator ? s.sendEvent(s.cat.widgetOpenCheckout, n, i) : s.sendEvent(s.cat.basicOpenCheckout, n, i)}}, {key: "_millisToMinutesAndSeconds",value: function (e) {var t = Math.floor(e / 6e4),e = parseInt((e % 6e4 / 1e3).toFixed(0));return t + ":" + (e < 10 ? "0" : "") + e}}, {key: "iframeLoading",value: function () {s.timeTracking.iframeStart = (new Date).getTime()}}, {key: "iframeLoaded",value: function () {var e = (new Date).getTime() - s.timeTracking.iframeStart,e = s._millisToMinutesAndSeconds(e);s.sendEvent(s.cat.iframeLoadingTime, e)}}, {key: "iframeError",value: function () {var e = (new Date).getTime() - s.timeTracking.iframeStart,e = s._millisToMinutesAndSeconds(e);s.sendEvent(s.cat.iframeErrorLoadingTime, e)}}, {key: "httpLoading",value: function (e) {s.timeTracking.iframeStart = (new Date).getTime(),s.timeTracking.httpStartCount = e}}, {key: "httpAllLoaded",value: function () {var e = (new Date).getTime() - s.timeTracking.iframeStart,t = s.timeTracking.httpStartCount.toFixed(),e = s._millisToMinutesAndSeconds(e);s.sendEvent(s.cat.httpRequestAll, t, e)}}, {key: "getUtmQueryParams",value: function (e) {if (null == e || e) {var e = new URLSearchParams(window.location.search),r = [];return e.forEach(function (e, t) {t.startsWith("utm_") && r.push(t + "=" + e)}),r}}}]),s}();g(I, "isLoaded", !1),g(I, "activeIntegration", "TM"),g(I, "affiliateId", "sherpa"),g(I, "placement", void 0),g(I, "getClientId", function () {try {var t,r = window.ga;return r(function () {var e = r.getAll()[0];t = e.get("clientId")}),t} catch (e) {return}}),g(I, "setAffiliateId", function (e) {I.affiliateId = e}),g(I, "getAffiliateId", function () {return I.affiliateId || "unknown"}),g(I, "setPlacement", function (e) {I.placement = e}),g(I, "getPlacement", function () {return I.placement || "unknown"}),g(I, "determinePlacement", function (e, t) {null != t && ! t || (0 <= (e = e.replace(/[^\w\s]/gi, "")).indexOf("restriction") || 0 <= e.indexOf("requirement") ? I.setPlacement("restrictions-page") : 0 <= e.indexOf("destination") ? I.setPlacement("destination-page") : 0 <= e.indexOf("booking") || 0 <= e.indexOf("manage") || 0 <= e.indexOf("reservation") ? I.setPlacement("mmb") : 0 <= e.indexOf("applyjoinsherpa") ? I.setPlacement("sherpa-webapp") : 0 <= e.indexOf("demo") ? I.setPlacement("demo") : 0 <= e.indexOf("payment") || 0 <= e.indexOf("confirmation") || 0 <= e.indexOf("checkout") || 0 <= e.indexOf("receipt") ? I.setPlacement("confirmation-page") : I.setPlacement("unknown"))}),g(I, "calculateDateDifference", function (e) {var t = "unknown";try {var r = new Date(e),n = new Date,i = (r.getTime() - n.getTime()) / 864e5,t = (i = Math.ceil(i)).toString()} catch (e) {console.log("Sherpa: Could not find date delta between travel date and today")}return t}),g(I, "cat", {basicOpenCheckout: "basicOpenCheckout",widgetOpenCheckout: "widgetOpenCheckout",createWidget: "createWidget",doNotCreateWidget: "doNotCreateWidget",sdkEmitted: "sdkEmitted",widgetError: "widgetError",widgetCountryChange: "widgetCountryChange",widgetDestinationChange: "widgetDestinationChange",widgetDepartureDateChange: "widgetDepartureDateChange",widgetOriginChange: "widgetOriginChange",widgetExpandTravelRestrictionsChange: "widgetExpandTravelRestrictionsChange",widgetHttpError: "widgetHttpError",iframeLoadingTime: "iframeLoadingTime",iframeErrorLoadingTime: "iframeErrorLoadingTime",httpRequestAll: "httpRequestAll",searchRequirements: "searchRequirements"}),g(I, "ecomEvent", {productsViewed: "ec:productsViewed",productClick: "ec:productClick"}),g(I, "timeTracking", {iframeStart: 0,httpStart: 0,httpStartCount: 0});r(47),r(55),r(163),r(70);var n = r(2),b = r.n(n),A = r(95),t = r.n(A),n = r(182),A = r(183);function C(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function x(t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? C(Object(r), !0).forEach(function (e) {O(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}function E(e, t) {return function (e) {if (Array.isArray(e)) return e}(e) || function (e, t) {if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {var r = [],n = !0,i = !1,o = void 0;try {for (var a, s = e[Symbol.iterator](); !(n =( a = s.next()).done) && (r.push(a.value), ! t || r.length !== t); n =! 0) } catch (e) {i = !0,o = e} finally {try {n || null == s.return || s.return()} finally {if (i) throw o}}return r}}(e, t) || function (e, t) {if (e) {if ("string" == typeof e) return U(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? U(e, t) : void 0}}(e, t) || function () {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e, t) {(null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];return n}function T(e, t, r, n, i, o, a) {try {var s = e[o](a),c = s.value} catch (e) {return void r(e)}s.done ? t(c) : Promise.resolve(c).then(n, i)}function k(s) {return function () {var e = this,a = arguments;return new Promise(function (t, r) {var n = s.apply(e, a);function i(e) {T(n, t, r, i, o, "next", e)}function o(e) {T(n, t, r, i, o, "throw", e)}i(void 0)})}}function R(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function O(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}b.a.extend(t.a);var M = A,P = n,B = i.a,j = ["ar"],q = function () {function p(e) {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, p),O(this, "CONCURRENT_REQ_MAX", 2),O(this, "AFFILIATE_HEADERS", {icelandair: "icelandair",condor: "condor",flashpack: "flashpack"}),O(this, "CHECK_SPAN_MSEC", 318),O(this, "timerPointer", null),O(this, "isPullRunning", !1),O(this, "asyncPull", []),O(this, "currentReqCount", 1),p.affiliateHeader = e}var e,t,r,n,i,o,a,s,c,l;return e = p,t = [{key: "setRequirementsApiKey",value: function (e) {e && (p.requirementsApiKey = e)}},{key: "setShowEntryRequirements",value: function (e) {p.showEntryRequirements = e}},{key: "setShowTravelRestriction",value: function (e) {p.showTravelRestriction = e}},{key: "setShowQuarantineOnReturn",value: function (e) {p.showQuarantineOnReturn = e}}, {key: "setShowCollapseTravelRestriction",value: function (e) {p.showCollapseTravelRestrictions = e}}, {key: "setShowTravelRestrictionsInitiallyCollapsed",value: function (e) {p.collapseTravelRestrictionsState = e}}, {key: "setShowSubscribe",value: function (e) {p.showSubscribe = e}}, {key: "setShowSubscribeBtn",value: function (e) {p.showSubscribeBtn = e}}, {key: "setPaperVisaProvider",value: function (e, t) {p.showPaperVisaProvider = e,p.paperVisaProviderUrl = t}}, {key: "setShowHelpBtn",value: function (e) {p.showHelpBtn = e}}, {key: "setShowInputActions",value: function (e) {p.showInputActions = e}}, {key: "setShowAsTrip",value: function (e) {p.showAsTrip = e}}, {key: "setShowDepartureDateSelector",value: function (e) {p.showDepartureDateSelector = e}}, {key: "setShowDestinationSelector",value: function (e) {p.showDestinationSelector = e}}, {key: "setShowOriginSelector",value: function (e) {p.showOriginSelector = e}}, {key: "setShowPassportSelector",value: function (e) {p.showPassportSelector = e}}, {key: "setIntegrationMode",value: function (e) {p.mode = e}}, {key: "setSelectDestination",value: function (e) {p.selectDestination = e}}, {key: "setEnableUtmPassThrough",value: function (e) {p.enableUtmPassThrough = e}}, {key: "setEnablePlacementDetection",value: function (e) {p.enablePlacementDetection = e}}, {key: "_callRequirements",value: (l = k(regeneratorRuntime.mark(function e(t) {var r;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return r = {
    citizenship: t.citizenship,
    destination: t.country,
    key: p.requirementsApiKey,
    language: p.currentLang,
    affiliateId: p.affiliateHeader
  },
  t.airportCode,
  e.next = 6,
  B.get("".concat("https://requirements-api.sandbox.joinsherpa.com", "/").concat("v2/entry-requirements"), {
    params: r,
    withCredentials: !1,
    headers: {
      "Content-Type": "application/json"
    }
  });
case 6:
  return r = e.sent,
  e.abrupt("return", r);
case 8:
case "end":
  return e.stop()}}, e)})), function (e) {return l.apply(this, arguments)})}, {key: "_callCountry",value: (c = k(regeneratorRuntime.mark(function e(t) {var r,n,i,o,a;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return a = t.country,
  r = t.originCountries && t.originCountries.join(","),
  n = t.destinationCountries && t.destinationCountries.join(","),
  o = t.activeDate,
  t.country.length,
  i = (i = "v2/countries/".concat(a)).replace("?&", "?"),
  a = {
    key: p.requirementsApiKey,
    language: p.currentLang,
    affiliateId: p.affiliateHeader,
    include: "restriction,procedure"
  },
  null != r && (a["filter[restriction.originCountries]"] = r, a["filter[procedure.originCountries]"] = r),
  null != n && (a["filter[restriction.destinationCountries]"] = n, a["filter[procedure.destinationCountries]"] = n),
  null != o && (a["filter[restriction.activeDate]"] = o.slice(0, 10), a["filter[procedure.activeDate]"] = o.slice(0, 10)),
  o = ["air"],
  o = t.isInternational ? o.concat("international") : o.concat("domestic"),
  a.tags = o.join(","),
  t.isOrigin,
  e.next = 18,
  B.get("".concat("https://requirements-api.sandbox.joinsherpa.com", "/").concat(i), {
    params: a,
    withCredentials: !1,
    headers: {
      "Content-Type": "application/json"
    }
  });
case 18:
  return a = e.sent,
  e.abrupt("return", a);
case 20:
case "end":
  return e.stop()}}, e)})), function (e) {return c.apply(this, arguments)})}, {key: "_callRegion",value: (s = k(regeneratorRuntime.mark(function e(t) {var r,n,i,o,a,s,c,l;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return l = t.regionCode,
  r = null === (o = t.originCountries) || void 0 === o ? void 0 : o.join(","),
  n = null === (c = t.destinationCountries) || void 0 === c ? void 0 : c.join(","),
  i = null === (a = t.originRegions) || void 0 === a ? void 0 : a.filter(function (e) {
    return 0 < p.findRegion(e).length
  }).join(","),
  o = null === (s = t.destinationRegions) || void 0 === s ? void 0 : s.filter(function (e) {
    return 0 < p.findRegion(e).length
  }).join(","),
  c = t.activeDate,
  a = null != t.originRegionCode && null != t.destinationRegionCode,
  t.country.length,
  s = (s = "v2/regions/".concat(l)).replace("?&", "?"),
  l = {
    key: p.requirementsApiKey,
    language: p.currentLang,
    affiliateId: p.affiliateHeader,
    include: "restriction,procedure"
  },
  null == r || a || (l["filter[restriction.originCountries]"] = r, l["filter[procedure.originCountries]"] = r),
  null != i && 0 < i.length && (l["filter[restriction.originRegions]"] = i, l["filter[procedure.originRegions]"] = i),
  null == n || a || (l["filter[restriction.destinationCountries]"] = n, l["filter[procedure.destinationCountries]"] = n),
  null != o && (l["filter[restriction.destinationRegions]"] = o, l["filter[procedure.destinationRegions]"] = o),
  null != c && (l["filter[restriction.activeDate]"] = c.slice(0, 10), l["filter[procedure.activeDate]"] = c.slice(0, 10)),
  c = ["air"],
  c = t.isInternational ? c.concat("international") : c.concat("domestic"),
  l.tags = c.join(","),
  e.next = 22,
  B.get("".concat("https://requirements-api.sandbox.joinsherpa.com", "/").concat(s), {
    params: l,
    withCredentials: !1,
    headers: {
      "Content-Type": "application/json"
    }
  });
case 22:
  return l = e.sent,
  e.abrupt("return", l);
case 24:
case "end":
  return e.stop()}}, e)})), function (e) {return s.apply(this, arguments)})}, {key: "_callLocalization",value: (a = k(regeneratorRuntime.mark(function e() {var t;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return t = (t = 2 === (t = p.currentLang).length ? {
    ar: "ar-SA",
    cz: "cz-HK",
    da: "da-DK",
    de: "de-DE",
    dk: "da-DK",
    en: "en",
    es: "es-XL",
    fi: "fi-FI",
    fr: "fr-FR",
    is: "is-IS",
    it: "it-IT",
    lv: "lv-LV",
    nl: "nl-NL",
    no: "no-NO",
    pt: "pt-BR",
    ru: "ru-RU",
    sv: "sv-SE",
    tr: "tr-TR"
  }[t] : t).replace("en-US", "en"),
  e.next = 6,
  B.get("".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/localization/").concat(t, ".json"));
case 6:
  return e.abrupt("return", e.sent);
case 7:
case "end":
  return e.stop()}}, e)})), function () {return a.apply(this, arguments)})}, {key: "_logError",value: function (e) {e.response ? (console.log(e.response.data), console.log(e.response.status), console.log(e.response.headers), I.sendEvent(I.cat.widgetHttpError, JSON.stringify(e.response))) : e.request ? (I.sendEvent(I.cat.widgetHttpError, JSON.stringify(e.request)), console.log(e.request)) : (I.sendEvent(I.cat.widgetHttpError, JSON.stringify(e.message.toString())), console.log("Error", e.message))}}, {key: "_performRequest",value: (o = k(regeneratorRuntime.mark(function e(r) {var n = this;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return e.abrupt("return", new Promise(function (e) {
    var t = null;
    r.then(function (e) {
      t = "data" in e ? e.data : null
    }).catch(n._logError).then(function () {
      e(t),
      n.currentReqCount --
    })
  }));
case 1:
case "end":
  return e.stop()}}, e)})), function (e) {return o.apply(this, arguments)})}, {key: "_startAsyncPull",value: function (o) {var e,r = this;this.isPullRunning || (this.isPullRunning =! 0, (e = function () {if (0 !== r.asyncPull.length) {if (!(r.currentReqCount >= r.CONCURRENT_REQ_MAX)) 
for (var e = 0; e < r.CONCURRENT_REQ_MAX - r.currentReqCount; e++) 
  !function () {
    var n,
      e,
      t,
      i;
    0 !== r.asyncPull.length && (n = r.asyncPull.shift(), r.currentReqCount ++, e = null, e = r._performRequest(r._callRequirements(n)), t = null, p.getShowTravelRestriction() && ("country" === n.type.toLowerCase() && (t = r._performRequest(r._callCountry(n))), "region" !== n.type.toLowerCase() || n.isUnknownDomestic || (t = r._performRequest(r._callRegion(n)))), i =["air"], i = n.isInternational ? i.concat("international") : i.concat("domestic"), Promise.all([e, t]).then(function (e) {
      var t = E(e, 2),
        r = t[0],
        e = t[1],
        t = x(x({}, r), {}, {
          restriction: {
            entryStatus: "UNKNOWN",
            exitStatus: "UNKNOWN",
            travelRestriction: null,
            quarantineProcedure: null,
            restrictions: [],
            procedures: []
          }
        });
      null != e && (t.restriction.entryStatus = e.data.attributes.entryStatus, t.restriction.exitStatus = e.data.attributes.exitStatus, r = e.included.find(function (e) {
        return "RESTRICTION" === e.type && "ENTRY" === e.attributes.subCategory
      }), t.restriction.travelRestriction = r, t.restriction.restrictions = e.included.filter(function (t) {
        return "RESTRICTION" === t.type && ! t.attributes.tags.includes("FULLY_VACCINATED") && i.every(function (e) {
          return t.attributes.tags.includes(e)
        })
      }), r = e.included.find(function (e) {
        return "PROCEDURE" === e.type && "QUARANTINE" === e.attributes.category
      }), t.restriction.quarantineProcedure = r, t.restriction.procedures = e.included.filter(function (r) {
        return "PROCEDURE" === r.type && i.every(function (e) {
          var t;
          return r.attributes.tags.includes(e) && ! r.attributes.tags.includes("FULLY_VACCINATED") && !(null !== (e = r.attributes.documentType) && void 0 !== e && e.includes("ETA") || null !== (e = r.attributes.documentType) && void 0 !== e && e.includes("E_VISA") || null !== (t = r.attributes.documentType) && void 0 !== t && t.includes("EMBASSY_VISA") || null !== (t = r.attributes.documentType) && void 0 !== t && t.includes("VISA"))
        })
      })),
      o({response: t, request: n})
    }))
  }
()} else r._stopAsyncPull()})(),this.timerPointer = setInterval(function () {e()}, this.CHECK_SPAN_MSEC))}}, {key: "_stopAsyncPull",value: function () {this.isPullRunning = !1,clearInterval(this.timerPointer)}}, {key: "fetchLocalization",value: (i = k(regeneratorRuntime.mark(function e() {return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return e.abrupt("return", this._performRequest(this._callLocalization()));
case 1:
case "end":
  return e.stop()}}, e, this)})), function () {return i.apply(this, arguments)})}, {key: "fetchRequirements",value: (n = k(regeneratorRuntime.mark(function e(t) {var r,o = this;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {
case 0:
  return r = 0,
  t = t.map(function (e) {
    return x(x({}, e), {}, {
      index: r++
    })
  }),
  e.abrupt("return", new Promise(function (r) {
    var n = [],
      i = t.length;
    o.asyncPull = o.asyncPull.concat(t),
    I.httpLoading(i),
    o._startAsyncPull(function (e) {
      var t = e.response,
        e = e.request;
      n.push({request: e, response: t}),
      n.length === i && (I.httpAllLoaded(), r(n.sort(function (e, t) {
        return e.request.index - t.request.index
      })))
    })
  }));
case 3:
case "end":
  return e.stop()}}, e)})), function (e) {return n.apply(this, arguments)})}],r = [{key: "searchDestinations",value: function (e) {return [].concat(this.mapAirport(this.findByAirportCode(e)))}},{key: "getIsLangDirectionRight",value: function () {return -1 != j.indexOf(p.currentLang)}},{key: "getFlagUrlByCode",value: function (e) {return "https://cdn.joinsherpa.io/flags/".concat(e.toUpperCase(), ".svg")}},{key: "setLang",value: function (e) {e ? -1 != p.LANG.indexOf(e) ? (2 === e.length && (e ={ar: "ar-SA",da: "da-DK",dk: "da-DK",de: "de-DE",en: "en-US",es: "es-XL",fi: "fi-FI",fr: "fr-FR",is: "is-IS",it: "it-IT",lv: "lv-LV",nl: "nl-NL",no: "no-NO",pt: "pt-BR",ru: "ru-RU",sv: "sv-SE",tr: "tr-TR",zh: "zh-HK"}[e] || "en-US"), p.currentLang = e) : console.warn("CRITICAL | Invalid lang. ".concat(e, " not in ").concat(p.LANG)) : console.warn("Using default lang ".concat(p.currentLang))}}, {key: "getLang",value: function () {return this.currentLang}}, {key: "getShowEntryRequirements",value: function () {return p.showEntryRequirements}}, {key: "getShowTravelRestriction",value: function () {return p.showTravelRestriction}}, {key: "getShowQuarantineOnReturn",value: function () {return p.showQuarantineOnReturn}}, {key: "getShowCollapaseTravelRestriction",value: function () {return p.showCollapseTravelRestrictions}}, {key: "getCollapaseTravelRestrictionState",value: function () {return !0 === this.getShowCollapaseTravelRestriction() && p.collapseTravelRestrictionsState}}, {key: "toggleCollapaseTravelRestrictionState",value: function () {return p.collapseTravelRestrictionsState = ! p.collapseTravelRestrictionsState,p.collapseTravelRestrictionsState}}, {key: "getShowSubscribe",value: function () {return p.showSubscribe}}, {key: "getShowSubscribeBtn",value: function () {return p.showSubscribeBtn}}, {key: "getPaperVisaProvider",value: function () {return {show: this.showPaperVisaProvider, url: this.paperVisaProviderUrl}}}, {key: "getShowHelpBtn",value: function () {return p.showHelpBtn}}, {key: "getShowInputActions",value: function () {return p.showInputActions}}, {key: "getShowAsTrip",value: function () {return p.showAsTrip}}, {key: "getShowDepartureDateSelector",value: function () {return p.showDepartureDateSelector}}, {key: "getShowDestinationSelector",value: function () {return p.showDestinationSelector}}, {key: "getShowOriginSelector",value: function () {return p.showOriginSelector}}, {key: "getShowPassportSelector",value: function () {return p.showPassportSelector}}, {key: "getIntegrationMode",value: function () {return p.mode}}, {key: "getIconUrl",value: function (e) {return "".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/img/").concat(p.affiliateHeader, "/").concat(e, ".svg")}}, {key: "getSelectDestination",value: function () {return p.selectDestination}}, {key: "isUtmPassThroughEnabled",value: function () {return p.enableUtmPassThrough}}, {key: "isPlacementDetectionEnabled",value: function () {return p.enablePlacementDetection}}, {key: "mapAirport",value: function (e) {return e.map(function (e) {return {airportCode: e.i,regionCode: e.r,airportName: e.name,cityName: e.c,countryCode: e.cc,type: "airport"}})}}, {key: "mapRegion",value: function (e) {return e.map(function (e) {return {countryName: e.name,countryCode: e.isoAlpha3,regionCode: e.regionCode,regionName: e.name,type: "region"}})}}],t && R(e.prototype, t),r && R(e, r),p}();function z(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}O(q, "LANG", ["ar","ar-SA","da","da-DK","de","de-DE","en","en-CA","en-GB","es","es-XL","fi","fi-FI","fr","fr-FR","fr-CA","is","is-IS","it","it-IT","nl","nl-NL","no","no-NO","pt","pt-BR","ru","ru-RU","sv","sv-SE","tr","tr-TR","zh","zh-HK","lv","lv-LV"]),O(q, "DEFAULT_LANG", "en"),O(q, "DEFAULT_COUNTY", "CA"),O(q, "currentLang", q.DEFAULT_LANG),O(q, "showEntryRequirements", !0),O(q, "showTravelRestriction", !1),O(q, "showCollapseTravelRestrictions", !1),O(q, "collapseTravelRestrictionsState", !0),O(q, "showSubscribe", !1),O(q, "showSubscribeBtn", !1),O(q, "showHelpBtn", !1),O(q, "showInputActions", !0),O(q, "showAsTrip", !1),O(q, "affiliateHeader", null),O(q, "requirementsApiKey", "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"),O(q, "selectDestination", !0),O(q, "showDepartureDateSelector", !0),O(q, "showDestinationSelector", !0),O(q, "showOriginSelector", !0),O(q, "showPassportSelector", !0),O(q, "showPaperVisaProvider", !1),O(q, "paperVisaProviderUrl", null),O(q, "showQuarantineOnReturn", !1),O(q, "enableUtmPassThrough", !1),O(q, "enablePlacementDetection", !1),O(q, "mode", d.Dom),O(q, "findByAirportCode", function (t) {if (null == t) return [];var e = P.filter(function (e) {return e.i === t.toUpperCase()});return e = 0 === e.length ? P.filter(function (e) {return -1 < e.name.toUpperCase().indexOf(t.toUpperCase()) || -1 < e.c.toUpperCase().indexOf(t.toUpperCase())}) : e}),O(q, "findRegion", function (t) {if (null == t) return [];var e = M.filter(function (e) {return e.regionCode === t.toUpperCase() || -1 < e.name.toUpperCase().indexOf(t.toUpperCase())});return e = -1 < "washington".toLowerCase().indexOf(t) ? e.concat(M.filter(function (e) {return "US-DC" === e.regionCode})) : e}),O(q, "getAirports", function () {return P}),O(q, "getRegions", function () {return M});var H = r(239),n = function () {function n() {var e,t,r;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, n),r = function (e, t) {},(t = "eventEmitter") in (e = this) ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,this._startListenToMessages()}var e,t,r;return e = n,(t =[{key: "_startListenToMessages",value: function () {var a = this;this._unbindEvent(window, "message", function () {}),this._bindEvent(window, "message", function (e) {return "string" == typeof e.data && void function (e) {try {
var t = JSON.parse(e.data),
  r = t.type,
  n = t.data,
  i = t.scope,
  o = K.EmitEvents[r];
o && "@joinsherpa/v1" === i && a.eventEmitter(o, n)} catch (e) {}}(e)})}},{key: "_bindEvent",value: function (e, t, r) {e.attachEvent ? e.attachEvent("on" + t, r) : e.addEventListener(t, r)}},{key: "_unbindEvent",value: function (e, t, r) {e.detachEvent ? e.detachEvent("on" + t, r) : e.removeEventListener(t, r)}},{key: "_createIframeDom",value: function (e, t, r, n, i) {var o = "".concat("https://sherpa-widget-sandbox.joinsherpa.io"),a = null;null != e ? a = "orders/".concat(e) : null != t && (a = "applications/products/".concat(t)),o = "".concat(o, "/").concat(a, "?nationality=").concat(r),o += "&runningInIframe=true",o += "&language=".concat(i),n && (s = n.join("&"), o = "".concat(o, "&").concat(s));var s = I.getAffiliateId();s && (o = "".concat(o, "&affiliateId=").concat(s));s = I.getPlacement();s && (o = "".concat(o, "&placement=").concat(s));s = H.replace("${iframeUrl}", o),o = document.createElement("div");o.id = "sherpa-wrap",o.innerHTML = s,document.body.appendChild(o)}}, {key: "_sendIframeMessage",value: function (e, t) {var r = document.getElementById("sherpa-integration-iframe"),n = "";try {n = JSON.stringify({type: e, data: t})} catch (e) {console.warn("CRITICAL invalid data send attempt")}r.contentWindow.postMessage(n, "https://sherpa-widget-sandbox.joinsherpa.io")}}, {key: "_isIframeOpen",value: function () {return !!document.getElementById("sherpa-wrap")}}, {key: "_removeIframe",value: function () {var e = document.getElementById("sherpa-wrap");null != e && e.remove()}}, {key: "_hideIframe",value: function () {var e = document.getElementById("sherpa-wrap");e && (e.style.display = "none")}}, {key: "_loadingBlockBody",value: function () {document.body.classList.remove("sherpa-is-open"),document.body.classList.add("sherpa-is-loading")}}, {key: "_blockBody",value: function () {document.body.classList.remove("sherpa-is-loading"),document.body.classList.add("sherpa-is-open")}}, {key: "_unBlockBody",value: function () {document.body.classList.remove("sherpa-is-open"),document.body.classList.remove("sherpa-is-loading")}}, {key: "initIframeAndListen",value: function (e, r) {var n = this;this.eventEmitter = r,this.closeIframe(),this._loadingBlockBody(),r = r || function () {};var t = e.orderId,i = e.selectedProductId,o = e.defaultNationalityCountry,a = e.utmOptions,s = q.getLang();this._createIframeDom(t, i, o, a, s);var c = document.getElementById("sherpa-integration-iframe");c.onload = function () {n._blockBody();var t = !0;try {t = null != c.contentWindow.frames[0]} catch (e) {console.warn(e),t = !1}t ? (r(K.EmitEvents.iframeSuccess), n._sendIframeMessage("sdkOptions", e)) : r(K.EmitEvents.iframeFailure)}}}, {key: "closeIframe",value: function () {this._unBlockBody(),this._isIframeOpen() && this._removeIframe()}}]) && z(e.prototype, t),r && z(e, r),n}();function V(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function G(t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? V(Object(r), !0).forEach(function (e) {Y(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function (e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}function F(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function Y(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var K = function () {function i() {var r = this,e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : d.Dom;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, i),Y(this, "isLoaded", function () {var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],t = 1 < arguments.length ? arguments[1] : void 0;return setTimeout(function () {null == window.$sherpa ? e && r.isLoaded(!0, t) : t()}, 10)}),Y(this, "setMode", function (e) {i.mode = e}),i.mode = e,this.isLoaded(!0, function () {r._emitEvent(i.EmitEvents.sdkLoaded),window.self !== window.top && r.messageParent(i.EmitEvents.embeddedSdkReady)})}var e,t,r;return e = i,r = [{key: "messageChild",value: function (e, t) {e = {type: e,data: t,scope: "@joinsherpa/v1"},t = document.getElementById(c);null != t && t.contentWindow.postMessage(JSON.stringify(e), "*")}}],(t =[{key: "initListener",value: function (e) {i.iframeEvent = e,i.iframeEventsAdapter.eventEmitter = this._emitEvent}}, {key: "openCheckout",value: function (e) {this._emitEvent(i.EmitEvents.iframeStartLoading, e);var t = I.getClientId(),r = e.utmOptions || [];Array.isArray(r) && 0 === r.length && (r = I.getUtmQueryParams(e.enableUtmPassThrough)),e = G(G({}, e), {}, {utmOptions: r,clientId: t}),i.iframeEventsAdapter.initIframeAndListen(e, this._emitEvent)}}, {key: "_emitEvent",value: function (e, t) {var r,n = {type: e,data: t = t || null,scope: "@joinsherpa/v1"};if (n.type === i.EmitEvents.modalClose && (i.iframeEventsAdapter.closeIframe(), null != (r = document.getElementsByClassName("result-item__product_btn--clicked").item(0)) && r.focus()), "function" == typeof i.iframeEvent._onSdkEvent && i.iframeEvent._onSdkEvent(n), "function" == typeof window.onSherpaEvent) {switch (i.mode) {case d.Dom: e !== i.EmitEvents.sdkLoaded && I.sendEvent(I.cat.sdkEmitted, e);break;case d.Embedded: I.sendEvent(I.cat.sdkEmitted, e);break;case d.Iframe: i.messageChild(e, t);break;default:return}e !== i.EmitEvents.sdkLoaded && [i.EmitEvents.iframeResized].includes(e) || window.onSherpaEvent(n)} else i.isClientNotifiedAboutListener || (i.isClientNotifiedAboutListener =! 0)}}, {key: "messageParent",value: function (e, t) {window.parent.postMessage(JSON.stringify({type: e, data: t, scope: "@joinsherpa/v1"}), "*")}}]) && F(e.prototype, t),r && F(e, r),i}();Y(K, "iframeEvent", {_onSdkEvent: function () {}}),Y(K, "iframeEventsAdapter", new n),Y(K, "isClientNotifiedAboutListener", !1),Y(K, "mode", d.Dom),i = K = K || {},(n = we = we || {}).sdkLoaded = "sdkLoaded",n.sdkError = "sdkError",n.iframeStartLoading = "iframeStartLoading",n.iframeSuccess = "iframeSuccess",n.iframeFailure = "iframeFailure",n.iframeResized = "iframeResized",n.orderSuccess = "orderSuccess",n.orderDecline = "orderDecline",n.modalClose = "modalClose",n.embeddedSdkReady = "embeddedSdkReady",n.createWidget = "createWidget",n.openApplicationWidget = "openApplicationWidget",i.EmitEvents = we;r(240),r(242);var W,X = r(96),J = r(184),Z = r(185),$ = r(186),Q = r(187);function ee(e, t) {var r;if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {if (Array.isArray(e) || (r = function (e, t) {if (e) {if ("string" == typeof e) return te(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? te(e, t) : void 0}}(e)) || t && e && "number" == typeof e.length) {r && (e = r);var n = 0,t = function () {};return {s: t,n: function () {return n >= e.length ? {done: !0} : {done: !1,value: e[n++]}},e: function (e) {throw e},f: t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o = !0,a = !1;return {s: function () {r = e[Symbol.iterator]()},n: function () {var e = r.next();return o = e.done,e},e: function (e) {a = !0,i = e},f: function () {try {o || null == r.return || r.return()} finally {if (a) throw i}}}}function te(e, t) {(null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];return n}function re(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function ne(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}(we = W = W || {}).success = "success",we.loading = "loading",we.error = "error",we.justFine = "just-fine",we.default = "default";var ie = function () {function r(e, t) {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, r),ne(this, "resultsStateView", void 0),ne(this, "templates", void 0),ne(this, "integrationBridge", void 0),this._applyRootDom(e),this.templates = {root: document.getElementById("sherpa-template-root").innerHTML,requirementsResults: document.getElementById("sherpa-template-result").innerHTML,dropDown: document.getElementById("sherpa-template-dropdown-selected").innerHTML,dropDownOptions: document.getElementById("sherpa-template-dropdown-options").innerHTML},this.integrationBridge = t}var e,t,n;return e = r,n = [{key: "renderToSelector",value: function (e, t, r) {e = document.getElementById(e);e.innerHTML = t,r && (e.removeEventListener("click", r, !0), e.addEventListener("click", r))}},{key: "addClass",value: function (e, t) {e = "string" == typeof e ? document.getElementById(e) : e;if (! e) return !1;t = t,-1 == e.className.split(" ").indexOf(t) && (e.className += " " + t + " ")}},{key: "removeClass",value: function (e, t) {e = "string" == typeof e ? document.getElementById(e) : e;if (! e) return !1;e.className = e.className.replace(new RegExp("(?:^|\\s)" + t + "(?:\\s|$)"), " ")}},{key: "listenToAllClick",value: function (e, t) {document.querySelectorAll(e).forEach(function (e) {e.removeEventListener("click", t, !0),e.addEventListener("click", t)})}}, {key: "listenToKeyUp",value: function (e, t) {e = document.getElementById(e);e.removeEventListener("keyup", t),e.addEventListener("keyup", t)}}, {key: "listenToKeyUpBySelector",value: function (e, t) {document.querySelectorAll(e).forEach(function (e) {e.removeEventListener("keyup", t, !0),e.addEventListener("keyup", t)})}}, {key: "listenToKey",value: function (e, t, r) {document.querySelectorAll(e).forEach(function (e) {e.removeEventListener(t, r, !0),e.addEventListener(t, r)})}}, {key: "resetSearchBtn",value: function () {r.searchBtnClickable = !0;var e = document.getElementById("sherpa-btn-check");null != e && (e.disabled =! 1)}}],(t =[{key: "initializeResizeEventListener",value: function () {var i = this,e = new(window.ResizeObserver || X.a)(function (e) {var t,r = ee(e);try {for (r.s(); !(t = r.n()).done;) {
var n = t.value.contentRect;
i.integrationBridge.messageParent(K.EmitEvents.iframeResized, {
  height: n.height,
  width: n.width
})}} catch (e) {r.e(e)} finally {r.f()}}),t = document.getElementById("".concat(p, "-wrap"));this.isExist("discovery-wrap") && (t = document.getElementById("discovery-wrap")),e.observe(t)}},{key: "_applyRootDom",value: function (e) {var t = document.createElement("div");t.id = "".concat(p, "-wrap"),t.setAttribute("sdk-version", "1.7.1"),t.setAttribute("build-date", "2021-09-01 21:44"),t.innerHTML = $.toString() + Z.toString();var r = document.createElement("style");r.innerHTML = "\n            ".concat(J.toString(), "    \n            ").concat(Q.toString(), "\n        "),this.isExist(p) || (console.warn("CRITICAL | can't find div with id: sherpa-root"), this.createRootEl(p));var n = document.getElementById(p);n.innerHTML = "",n.appendChild(t),n.appendChild(r),this.isExist(s) && "false" === document.getElementById(s).dataset.loaded && this._applyRootDiscovery()}},{key: "_applyRootDiscovery",value: function () {var e = "key=".concat(q.requirementsApiKey);e += "&filter[restriction.originCountries]=".concat("TUR"),e += "&filter[restriction.category]=NO_RESTRICTION,RESTRICTED_ENTRY,ENTRY",e += "&filter[restriction.subCategory]=BOARDING,ON_ARRIVAL,IN_FLIGHT,ENTRY",e += "&filter[continent]=africa,asia,europe,americas",e += "&filter[restriction.activeDate]=".concat(b()().format("YYYY-MM-DD")),e += "&language=".concat(q.getLang());e = "".concat("https://requirements-api.sandbox.joinsherpa.com", "/v2/countries?").concat(e);fetch(e).then(function (e) {return e.json()}).then(function (e) {return e.data.filter(function (e) {return 0 < e.relationships.restrictions.meta.count})}).then(function (e) {return window.renderDiscovery(e)})}},{key: "isExist",value: function (e) {return !!document.getElementById(e)}}, {key: "createRootEl",value: function (e) {var t = document.createElement("div");t.setAttribute("id", e),document.body.appendChild(t)}}, {key: "showResultsState",value: function (e) {r.searchBtnClickable = !0,this.resultsStateView = e,Object.values(W).forEach(function (e) {r.removeClass("widget__body__results", "widget__body__results--".concat(e))}),r.addClass("widget__body__results", " widget__body__results--".concat(this.resultsStateView))}}, {key: "getInputValue",value: function (e) {return document.querySelector(e).value}}]) && re(e.prototype, t),n && re(e, n),r}();function oe(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function ae(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}ne(ie, "searchBtnClickable", !1),ne(ie, "isOutOfViewport", function (e) {e = e.getBoundingClientRect(),e = {top: e.top < 0,left: e.left < 0,bottom: e.bottom > (window.innerHeight || document.documentElement.clientHeight),right: e.right > (window.innerWidth || document.documentElement.clientWidth)};return e.top || e.left || e.bottom || e.right}),ne(ie, "scrollTo", function (e) {return window.scrollBy({behavior: "smooth",top: e.getBoundingClientRect().top - 64})});var se = r(27),ce = r(245),le = r(246).toString(),pe = function () {function r(e) {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, r),ae(this, "checkoutOptions", void 0),ae(this, "checkoutSpecialHandling", void 0),ae(this, "integrationBridge", void 0),ae(this, "rootElId", "sherpa-consent-wrap"),ae(this, "consentView", void 0),this.integrationBridge = e,this._applyConsentDom()}var e,t,n;return e = r,(t =[{key: "open",value: function (e) {var t = this;this.checkoutOptions = e,this.checkoutSpecialHandling = {checkoutInitiator: "widgetOpenCheckout",askDataConsent: !1},this.consentView = {sdkBase: a.V1,localization: r.translation.localization.consent,cdnUrl: "https://sdk-sandbox.joinsherpa.io/cdn",disclaimerUrl: "https://www.joinsherpa.com/terms-conditions?origin=widget"};e = document.getElementById("sherpa-consent-template"),e = se.render(e.innerHTML, this.consentView);document.getElementById("sherpa-consent-form").innerHTML = e,ie.listenToAllClick(".sherpa-consent-close", function (e) {return t.onConsentCloseClick(e)})}}, {key: "_applyConsentDom",value: function () {var e = document.createElement("style");e.innerHTML = le;var t = document.createElement("div");t.id = this.rootElId,t.innerHTML = ce,t.append(e),document.body.appendChild(t)}}, {key: "onConsentCloseClick",value: function (e) {e = e.target.dataset;"true" === e.open && (t = JSON.parse(JSON.stringify(this.checkoutOptions)), !1 === JSON.parse(e.consent) && (t.applications =[], t.itinerary =[], t.travellers =[]), Fe.openCheckout(t, this.checkoutSpecialHandling));var t = document.getElementById("sherpa-consent");null != t && t.remove()}}]) && oe(e.prototype, t),n && oe(e, n),r}();ae(pe, "translation", void 0);r(248),r(165),r(167),r(168),r(106);function de(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function ue(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var he = function () {function o() {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, o)}var e,t,r;return e = o,r = [{key: "isIE",value: function () {return !!document.documentMode}},{key: "hide",value: function () {setTimeout(function () {o.getCalendar().setAttribute("data-open", "false"),o.getDepartureDate().focus()}, 100)}},{key: "show",value: function () {o.getCalendar().setAttribute("data-open", "true")}},{key: "focusOnCalendarEvent",value: function () {o.getCalendar().addEventListener("keyup", function (e) {"Esc" === e.key && o.hide()});var t = o.getDepartureDate();t.addEventListener("click", function (e) {e.preventDefault(),o.focusElement(t)}),t.addEventListener("keyup", function (e) {e.preventDefault(),"Enter" !== e.key && "Tab" !== e.key || (o.show(), o.focusElement(t))})}}, {key: "focusElement",value: function (n) {var e = document.getElementsByClassName("yearSelect")[0];setTimeout(function () {null != e && e.focus()}, 200),document.querySelectorAll('[data-day=""]').forEach(function (e) {e.setAttribute("tabindex", "0")});var i = document.querySelector("date-input-polyfill tbody");null != i && i.addEventListener("keyup", function (e) {if ("Enter" === e.key) {var t = e.target;if (! t.hasAttribute("data-day")) return !1;var r = i.querySelector("[data-selected]");r && r.removeAttribute("data-selected"),t.setAttribute("data-selected", "");e = o.getYearInput().value,r = "0".concat(parseInt(o.getMonthInput().value) + 1).slice(-2),t = "0".concat(t.textContent.trim()).slice(-2);n.value = "".concat(e, "-").concat(r, "-").concat(t),o.hide()}})}}],(t = null) && de(e.prototype, t),r && de(e, r),o}();ue(he, "getCalendar", function () {return document.querySelector("date-input-polyfill")}),ue(he, "getYearInput", function () {return he.getCalendar().childNodes[0]}),ue(he, "getMonthInput", function () {return he.getCalendar().childNodes[1]}),ue(he, "getDepartureDate", function () {return document.getElementById("sherpa-departure-date")});var fe,ge = r(188),we = (r(255), r(27)),me = r.n(we),we = r(58),ve = r.n(we);function ye(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function _e(t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? ye(Object(r), !0).forEach(function (e) {Se(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ye(Object(r)).forEach(function (e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}function be(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function Se(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}(we = fe = fe || {}).nationality = "REQUIREMENTS",we.destination = "DESTINATION",we.origin = "ORIGIN";var Ae = function () {function l(e, t, r, n, i, o, a, s) {var c = this;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, l),Se(this, "localizationServer", void 0),Se(this, "dropDownView", {}),Se(this, "viewEvents", void 0),Se(this, "clientPage", void 0),Se(this, "mustache", null),Se(this, "dropDownAreaId", "sherpa-dropdown-wrap"),Se(this, "dropDownId", "sherpa-requirements-dropdown"),Se(this, "optionsId", "sherpa-requirements-dropdown-options"),Se(this, "defaultFlag", "WW"),Se(this, "selectable", !0),Se(this, "dropDownType", fe.nationality),Se(this, "selections", []),Se(this, "allowAirports", !1),Se(this, "allowRegions", !1),Se(this, "allowCountries", !0),Se(this, "hasOnClickListener", !1),Se(this, "isDropDownOpen", !1),Se(this, "isDropDownRendered", !1),Se(this, "isClosing", !1),Se(this, "getDropDownElement", function () {return document.querySelector("#".concat(c.dropDownId))}),Se(this, "getDropDownButtonElement", function () {return document.querySelector("#".concat(c.dropDownId, " .sherpa-dropdown__current"))}),Se(this, "getOtherDropDownElements", function () {return document.querySelectorAll(".sherpa-dropdown-wrap__current:not(#".concat(c.dropDownId, ")"))}),Se(this, "getOptionsElement", function () {return document.querySelector(c.optionsId)}),Se(this, "getOptionsDialog", function () {return document.querySelector("".concat(c.optionsId, " .sherpa-dropdown-options"))}),Se(this, "getOptionsEmptyElement", function () {return document.querySelector("".concat(c.optionsId, " .dropdown-options__empty"))}),Se(this, "getOptionsWrapElement", function () {return document.querySelector("".concat(c.optionsId, " .sherpa-dropdown-options__wrap"))}),Se(this, "getAllOptionElements", function () {return document.querySelectorAll("".concat(c.optionsId, " .dropdown-options"))}),Se(this, "getAllVisibleOptionElements", function () {return document.querySelectorAll("".concat(c.optionsId, " .dropdown-options--visible"))}),Se(this, "getOtherOptionsElements", function () {return document.querySelectorAll(".sherpa-dropdown-wrap__options:not(".concat(c.optionsId, ")"))}),Se(this, "getSearchElement", function () {return document.querySelector("".concat(c.optionsId, " #sherpa-dropdown-options__search_input"))}),Se(this, "getAllFocused", function () {return document.querySelectorAll(".focused")}),this.mustache = e,this.clientPage = t,this.localizationServer = r,this.viewEvents = n,this.dropDownView.localization = r.localization,this.dropDownType = i || this.dropDownType,this.dropDownAreaId = a || this.dropDownAreaId,this.dropDownId = o || this.dropDownId,this.optionsId = "#sherpa-".concat(this.dropDownType.toLowerCase(), "-dropdown-options"),this.allowAirports = null == s ? void 0 : s.allowAirports,this.allowRegions = null == s ? void 0 : s.allowRegions,this.allowCountries = null == s ? void 0 : s.allowCountries,this.dropDownView.regionsAndAirportsEnabled = this.allowAirports && this.allowRegions,this.dropDownView.showAsOverlay = q.mode === d.Embedded}var e,t,r;return e = l,(t =[{key: "_renderDropDownSelected",value: function () {var e = this.clientPage.templates.dropDown,t = me.a.render(e, this.dropDownView),e = this._addOnClickListener();ie.renderToSelector("".concat(this.dropDownId), t, e)}},{key: "_addOnClickListener",value: function () {var l = this,e = null;return this.hasOnClickListener || (this.hasOnClickListener =! 0, e = function (e) {e.stopPropagation(),l.isDropDownRendered || (l._renderDropDownOptions(), l.isDropDownRendered =! 0);var t = l.getDropDownElement(),r = l.getOtherDropDownElements(),n = l.getOptionsElement(),i = l.getOtherOptionsElements(),o = l.getOptionsDialog();o.style.top = "0",o.style.left = "-16px";var a,s = l.getSearchElement(),c = l.getAllFocused();l.isDropDownOpen = ! t.classList.contains("is-open"),l.isDropDownOpen ? (t.classList.add("is-open"), n.classList.add("is-open"), r.forEach(function (e) {return e.classList.remove("is-open")}), i.forEach(function (e) {return e.classList.remove("is-open")}), e = 120 < (a = l.getMaxAvailableDimensions()).height ? a.height : 120, o.style.height = "".concat(e, "px"), null != a.width && (o.style.width = "".concat(a.width, "px")), a.height < 100 ? (o.style.top = "-270px", o.style.height = "".concat(e + 270, "px")) : a.height < 200 && (o.style.top = "-180px", o.style.height = "".concat(e + 180, "px")), setTimeout(function () {c.forEach(function (e) {return e.classList.remove("focused")}),s.focus()}, 0)) : (t.classList.remove("is-open"), n.classList.remove("is-open"), r.forEach(function (e) {return e.classList.remove("is-open")}), i.forEach(function (e) {return e.classList.remove("is-open")}))}),e}},{key: "_closeDropDown",value: function () {var e = this;this.isClosing || (this.isClosing =! 0, this.getOptionsElement().classList.remove("is-open"), this.getDropDownElement().classList.remove("is-open"), setTimeout(function () {e.getDropDownButtonElement().focus(),e.isClosing = !1,e.getSearchElement().value = null,e.getAllOptionElements().forEach(function (e) {e.classList.add("dropdown-options--visible"),e.classList.remove("focused"),e.classList.remove("search-result")})}, 0))}},{key: "_renderDropDownOptions",value: function () {function o(e) {setTimeout(function () {s._closeDropDown(),s.isDropDownOpen = !1,r()}, 250)}function a(e) {var t = s.getAllVisibleOptionElements();t.forEach(function (e, t) {e.classList.contains("focused") && (l = t),e.classList.remove("focused")}),e ? l++ : l--,(l = l <= -1 ? t.length - 1 : l) >= t.length - 1 && (l = t.length - 1),null != (e = t.item(l)) && e.classList.contains("dropdown-options--visible") && (e.classList.add("focused"), null != (t = t.item(l - 4)) ? s.getOptionsWrapElement().scrollTo({top: t.offsetTop, behavior: "smooth"}) : s.getOptionsWrapElement().scrollTo({top: e.offsetTop, behavior: "smooth"}))}function t(e) {var t = e.currentTarget.getAttribute("code"),r = e.currentTarget.getAttribute("type"),n = e.currentTarget.getAttribute("region-code"),e = e.currentTarget.getAttribute("airport-code");s.renderDropDown({type: r, countryCode: t, regionCode: n, airportCode: e}),s.viewEvents._onCountryChange(s.dropDownType, {type: r,countryCode: t,regionCode: n,airportCode: e}),s.isDropDownOpen = !1,s._closeDropDown()}var s = this,e = this.clientPage.templates.dropDownOptions,e = me.a.render(e, this.dropDownView),l = -1,r = function () {s.getAllVisibleOptionElements().forEach(function (e, t) {e.classList.remove("focused")}),l = -1};ie.renderToSelector("".concat(this.dropDownId, "-options"), e),this.getSearchElement().addEventListener("keyup", function (e) {var t = ve.a.nfd(s.getSearchElement().value.trim().toUpperCase()).replace(/[\u0300-\u036f]/g, "");switch (e.keyCode) {case 38:case 40:case 9:var r = 40 === e.keyCode;return void a(r);case 27:case 9: o();break;case 13: s.getAllFocused().forEach(function (e) {
return e.click()});break;default: l = -1}var c = s.selections.filter(function (e) {return "country" === e.type ? ve.a.nfd(e.countryName.toUpperCase()).replace(/[\u0300-\u036f]/g, "").startsWith(t) || e.countryCode === t : "airport" === e.type ? ve.a.nfd(e.airportCode.toUpperCase()).replace(/[\u0300-\u036f]/g, "").startsWith(t) || ve.a.nfd(e.cityName.toUpperCase()).replace(/[\u0300-\u036f]/g, "").startsWith(t) : "region" === e.type ? -1 < "washington".toUpperCase().indexOf(t) ? ve.a.nfd(e.regionName.toUpperCase()).replace(/[\u0300-\u036f]/g, "").startsWith(t) || e.regionCode === t.toUpperCase() || "US-DC" === e.regionCode : e.regionName.toUpperCase().startsWith(t) || e.regionCode === t : void 0});s.getAllOptionElements().forEach(function (e) {var t = e.getAttribute("code"),r = e.getAttribute("airport-code"),n = e.getAttribute("region-code"),i = e.getAttribute("type"),o = c.filter(function (e) {
return e.type === i}).find(function (e) {
return e.countryCode === t && null == e.airportCode && null == e.regionCode}),a = c.filter(function (e) {
return e.type === i}).find(function (e) {
return e.airportCode === r}),s = c.filter(function (e) {
return e.type === i}).find(function (e) {
return e.regionCode === n && null == e.airportCode});null != o || null != a || null != s ? (e.classList.add("dropdown-options--visible"), e.classList.add("search-result")) : (e.classList.remove("dropdown-options--visible"), e.classList.remove("search-result")),e.classList.remove("focused")});var n = 0 === c.length,i = s.getOptionsEmptyElement();if (n ? i.classList.add("dropdown-options__empty--visible") : i.classList.remove("dropdown-options__empty--visible"), null == t || 0 == t.length) return l = -1,void a(!0);a(!(l = -1))}),this.getSearchElement().addEventListener("focusout", o),this.getSearchElement().addEventListener("onkeydown", o),this.getAllOptionElements().forEach(function (e) {return e.addEventListener("click", t)})}}, {key: "renderDropDown",value: function (t) {var e,r,n,i,o = this,a = this.localizationServer.countries;this.dropDownView = _e(_e({}, this.dropDownView), {}, {selectLabel: this.getSelectLabel(),selectedFlagUrl: q.getFlagUrlByCode(this.defaultFlag)}),this.allowCountries && a.forEach(function (e) {o.selections.push({flagUrl: q.getFlagUrlByCode(e.alpha_2),name: e.name,countryName: e.name,countryCode: e.alpha_3,countryCode2: e.alpha_2,type: "country",isDivider: !1,isAirport: !1,isRegion: !1,isCountry: !0})}),this.allowAirports && q.getAirports().filter(function (e) {return null != e.i && 0 < e.i.length && null != e.c}).forEach(function (t) {var e;o.selections.push({countryCode: t.cc,countryName: null === (e = a.find(function (e) {return e.alpha_3 == t.cc})) || void 0 === e ? void 0 : e.name,type: "airport",cityName: t.c,airportCode: t.i,regionCode: t.r,isDivider: !1,isAirport: !0,isRegion: !1,isCountry: !1})}),this.allowRegions && q.getRegions().forEach(function (t) {var e;o.selections.push({countryCode: t.isoAlpha3,countryName: null === (e = a.find(function (e) {return e.alpha_3 == t.isoAlpha3})) || void 0 === e ? void 0 : e.name,type: "region",regionCode: t.regionCode,regionName: t.name,isDivider: !1,isAirport: !1,isRegion: !0,isCountry: !1})}),null != t && (i =( e = this.selections.filter(function (e) {return null == t.airportCode && null == t.regionCode ? e.type === t.type && (e.countryCode === t.countryCode || e.countryCode2 === t.countryCode) : null != t.regionCode && null == t.airportCode ? e.type === t.type && e.regionCode === t.regionCode && (e.countryCode === t.countryCode || e.countryCode2 === t.countryCode) : null != t.airportCode ? e.type === t.type && e.airportCode === t.airportCode && (e.countryCode === t.countryCode || e.countryCode2 === t.countryCode) : void 0})[0] || {}) ? e.countryCode2 : null, r = e ? e.countryCode : null, n = null === (n = a.find(function (e) {return e.alpha_3 == r})) || void 0 === n ? void 0 : n.name, i = e.isCountry && null != i ? q.getFlagUrlByCode(i) : q.getFlagUrlByCode(this.defaultFlag), this.dropDownView = _e(_e({}, this.dropDownView), {}, {selectedFlagUrl: i,selectedCountry: r,selectedCountryName: n,selectedIsAirport: e.isAirport,selectedIsRegion: e.isRegion,selectedIsCountry: e.isCountry,selectedType: e.type,selectedRegionCode: e.regionCode,selectedAirportCode: e.airportCode,selectedCityName: e.cityName,selectedRegionName: e.regionName})),this.dropDownView = _e(_e({}, this.dropDownView), {}, {selections: this.selections}),this._renderDropDownSelected()}}, {key: "getSelectLabel",value: function () {switch (this.dropDownType) {case fe.destination:return this.localizationServer.localization.selectDestinationLabel;case fe.nationality:return this.localizationServer.localization.selectCitizenshipLabel;case fe.origin:return this.localizationServer.localization.selectOriginLabel}}}, {key: "getMaxAvailableDimensions",value: function () {var e = document.getElementById(p).getClientRects()[0],t = e.height,e = e.width,t = t - this.getOptionsDialog().getClientRects()[0].y - 16;return {height: 300 < t ? 300 : t,width: e < 350 ? e - 32 : null}}}]) && be(e.prototype, t),r && be(e, r),l}();function Ce(e) {return function (e) {if (Array.isArray(e)) return xe(e)}(e) || function (e) {if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)}(e) || function (e, t) {if (e) {if ("string" == typeof e) return xe(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xe(e, t) : void 0}}(e) || function () {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e, t) {(null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];return n}function Ee(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function Ue(t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? Ee(Object(r), !0).forEach(function (e) {ke(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach(function (e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}function Te(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function ke(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}b.a.extend(t.a);var Re = function () {function i(e, t, r) {var o = this;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, i),ke(this, "localizationServer", void 0),ke(this, "requirementsServer", void 0),ke(this, "widgetOptions", {defaultNationalityCountry: "",finalAirportName: "",itinerary: [],language: q.getLang(),showTravelRestriction: !0,showEntryRequirements: !0,showCollapseTravelRestrictions: !1,showSubcribe: !!{hasPwLogo: !0,askDataConsent: !1,showEntryRequirements: !0,showTravelRestriction: !0,showCollapseTravelRestrictions: !1,showTravelRestrictionsInitiallyCollapsed: !0,useSearchBtn: !0,showAsTrip: !0,showHelpBtn: !0,showInputActions: !0,sdkVersion: "1.7.1",buildDate: "2021-09-01 21:44",showDepartureDateSelector: !0,showDestinationSelector: !0,showOriginSelector: !0,trackCustomEvents: !1,showQuarantineOnReturn: !1,enableUtmPassThrough: !0,enablePlacementDetection: !0,mode: "dom",iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"}.showSubscribe}),ke(this, "mayHaveAvailVisa", [D.ESTA, D.ETA, D.E_VISA]),ke(this, "widgetView", {}),ke(this, "requirementsView", {}),ke(this, "checkoutOptions", {}),ke(this, "checkoutSpecialHandling", {}),ke(this, "dropDownView", void 0),ke(this, "viewEvents", void 0),ke(this, "clientPage", void 0),ke(this, "dropDown", void 0),ke(this, "dropDowns", {}),ke(this, "searchBtnClickable", !1),ke(this, "onSearchBtn", function () {var e;!0 === ie.searchBtnClickable && (o.viewEvents._onCheckClicked(), ie.searchBtnClickable =! 1, null != (e = document.getElementById("sherpa-btn-check")) && (e.disabled =! 0))}),ke(this, "trackSubscribeUrl", function (e) {I.trackSubscribe(q.affiliateHeader)}),ke(this, "showOrHideTravelRestrictions", function () {q.toggleCollapaseTravelRestrictionState();var e = q.getCollapaseTravelRestrictionState(),t = document.getElementsByClassName("visa-requirements__insights")[0],r = document.getElementsByClassName("visa-requirements__title")[0];t && t.setAttribute("data-collapsed", e.toString()),r && r.setAttribute("data-collapsed", e.toString()),! q.getShowSubscribe() || (n = document.getElementById("sherpaSubscribeComponent")) && n.setAttribute("data-collapsed", e.toString());var n = document.getElementsByClassName("travel-restrictions-control__more").item(0);null !== (n =! e ? document.getElementsByClassName("tile").item(0) : n) && void 0 !== n && n.focus(),I.sendEvent(I.cat.widgetExpandTravelRestrictionsChange, {collapsedAfterClick: e})}),ke(this, "mapTile", function (e, t, r) {var n = -1;switch (e) {case "restriction":case "transit": n = 1;break;case "quarantine": n = 2;break;case "health_declaration": n = 3;break;case "health_assessment": n = 4;break;case "ppe": n = 5}var i = t[n];i.isAvailable ? (i = o.createRestrictionTile(t.length + 1, e, r), t.push(i)) : t[n] = o.mapRestrictionTile(i, e, r)}),ke(this, "onProductClick", function () {Fe.openCheckout(o.checkoutOptions, o.checkoutSpecialHandling)}),ke(this, "getHeaderTitle", function () {return q.getShowTravelRestriction() && q.getShowEntryRequirements() ? o.localizationServer.localization.visaAndRestrictionsTitle : q.getShowTravelRestriction() && ! q.getShowEntryRequirements() ? o.localizationServer.localization.restrictionsTitle : ! q.getShowTravelRestriction() && q.getShowEntryRequirements() ? o.localizationServer.localization.visaRequirements : o.localizationServer.localization.visaAndRestrictionsTitle});var n = a.V1;this.checkoutOptions.affiliateId = e,this.viewEvents = t,this.clientPage = new ie(e, r),this.widgetView = Ue(Ue({}, this.widgetView), {}, {cdnUrl: "https://sdk-sandbox.joinsherpa.io/cdn",hasPwLogo: !0,affiliate: e,sdkBase: n});e = "naturaladventure" === e;this.requirementsView = Ue(Ue({}, this.requirementsView), {}, {externalLinkIconBefore: e,sdkBase: n,disclaimerUrl: "https://www.joinsherpa.com/terms-conditions?origin=widget"})}var e,t,r;return e = i,(t =[{key: "initiateWidgetDom",value: function (e, t) {var r,n,i,o,a,s,c,l,p;q.getIntegrationMode() === d.Embedded && this.clientPage.initializeResizeEventListener(),this.localizationServer = e,this.widgetOptions = t,this.widgetView = Ue(Ue({}, this.widgetView), {}, {widgetOptions: JSON.stringify(this.widgetOptions),isLangRight: q.getIsLangDirectionRight(),selectDestination: q.getSelectDestination(),showDepartureDateSelector: q.getShowDepartureDateSelector(),showDestinationSelector: q.getShowDestinationSelector(),showOriginSelector: q.getShowOriginSelector(),showPassportSelector: q.getShowPassportSelector()}),this.checkoutOptions = Ue(Ue({}, this.checkoutOptions), this.widgetOptions),this.checkoutOptions.lang = t ? t.language : null,this.checkoutOptions.travellers = t ? t.travellers : null,this.checkoutOptions.itinerary = t ? t.itinerary : null,this._renderRoot(),q.getShowInputActions() && (t = new Ae(me.a, this.clientPage, this.localizationServer, this.viewEvents, fe.nationality, "sherpa-requirements-dropdown", null, {allowCountries: !0}), this.dropDown = t, t = this.widgetOptions.defaultNationalityCountry, this.dropDown.renderDropDown({type: "country", countryCode: t, airportCode: null, regionCode: null}), this.widgetView.selectDestination && (i = "country", (l = a = o = null) != this.widgetOptions.itinerary && 0 < this.widgetOptions.itinerary.length && (o = this.widgetOptions.itinerary[0].destinationCountry, l = null === (s = this.widgetOptions) || void 0 === s || null === (c = s.itinerary[0]) || void 0 === c ? void 0 : c.destinationRegionCode, i = null != (a = null === (r = this.widgetOptions) || void 0 === r || null === (n = r.itinerary[0]) || void 0 === n ? void 0 : n.destinationAirportCode) ? "airport" : null != l ? "region" : "country"), p = new Ae(me.a, this.clientPage, this.localizationServer, this.viewEvents, fe.destination, "sherpa-destination-dropdown", null, {allowCountries: !0,allowAirports: !0,allowRegions: !0}), !0 !== this.dropDowns["sherpa-destination-dropdown"] && (p.renderDropDown({type: i, countryCode: o, airportCode: a, regionCode: l}), this.dropDowns["sherpa-destination-dropdown"] =! 0)), this.widgetOptions.showAsTrip && (c = s = "country", (a = o = i = p = n = r = null) != this.widgetOptions.itinerary && (n = this.widgetOptions.itinerary[0].originCountry, a = this.widgetOptions.itinerary[0].originRegionCode, c = null != (i = this.widgetOptions.itinerary[0].originAirportCode) ? "airport" : null != a ? "region" : c, r = this.widgetOptions.itinerary[0].destinationCountry, o = this.widgetOptions.itinerary[0].destinationRegionCode, s = null != (p = this.widgetOptions.itinerary[0].destinationAirportCode) ? "airport" : null != o ? "region" : s), l = new Ae(me.a, this.clientPage, this.localizationServer, this.viewEvents, fe.destination, "sherpa-destination-dropdown", null, {allowCountries: !0,allowAirports: !0,allowRegions: !0}), !0 !== this.dropDowns["sherpa-destination-dropdown"] && (l.renderDropDown({countryCode: r, type: s, regionCode: o, airportCode: p}), this.dropDowns["sherpa-destination-dropdown"] =! 0), p = new Ae(me.a, this.clientPage, this.localizationServer, this.viewEvents, fe.origin, "sherpa-origin-dropdown", null, {allowCountries: !0,allowAirports: !0,allowRegions: !0}), !0 !== this.dropDowns["sherpa-origin-dropdown"] && (p.renderDropDown({countryCode: n, type: c, regionCode: a, airportCode: i}), this.dropDowns["sherpa-origin-dropdown"] =! 0)))}},{key: "showProductLoading",value: function (e) {ie.addClass("sherpa-btn-".concat(e), "sherpa-btn--loading")}},{key: "hideProductsLoading",value: function () {document.querySelectorAll(".result-item__product_btn.sherpa-btn").forEach(function (e) {ie.removeClass(e, "sherpa-btn--loading")})}},{key: "_renderRoot",value: function () {var o = this,e = this.localizationServer.localization,t = this.widgetOptions.finalAirportName,r = e.visaRequirementsFor,r = t ? r.replace("{{destination}}", t) : e.visaRequirements,t = e.checkRequirements;this.widgetView = Ue(Ue({}, this.widgetView), {}, {destinations: [],headerMsg: r,requirementsMsg: t,localization: e,showDestinations: !1,useSearchBtn: !0}),null != this.widgetOptions.itinerary && (this.widgetView.destinations = this.widgetOptions.itinerary.map(function (e) {var t = e.destinationCountry,r = void 0,n = void 0;null != t && 2 !== t.length && (t = o.localizationServer.countries.filter(function (e) {return 2 === t.length ? e.alpha_2 === t : e.alpha_3 === t}).map(function (e) {return e.alpha_2})[0],r = q.getFlagUrlByCode(t),n = o._getCountryByCode(t));var i = b()().format("YYYY-MM-DD");return null != e.departureDate && (i = b()(e.departureDate, "YYYY-MM-DD").format("YYYY-MM-DD")), {isSelected: !1,destinationCode: t,departureDate: i,title: n,flagUrl: r}}), this.widgetView.destinations[0].isSelected =! 0, this.widgetOptions.showAsTrip && (this.widgetView.destinations = this.widgetView.destinations.slice(0, 1), this.widgetView.departureDate = this.widgetView.destinations[0].departureDate, this.widgetView.departureDateMin = b()().subtract(1, "day").format("YYYY-MM-DD"))),(this.widgetView.destinations && 1 < this.widgetView.destinations.length || q.getShowTravelRestriction()) && (this.widgetView.showDestinations =! 0),this.widgetView.showAsTrip = q.getShowAsTrip(),this.widgetView.showInputActions = q.getShowInputActions(),this.widgetView.showTravelRestriction = q.getShowTravelRestriction(),this.widgetView.showAsOverlay = q.mode === d.Embedded,this.widgetView.headerTitle = this.getHeaderTitle(),this.widgetView.showDefaultShort = "turkishairlines" === q.affiliateHeader,this.widgetView.showDefaultTitle = "turkishairlines" !== q.affiliateHeader;e = this.clientPage.templates.root,e = me.a.render(e, this.widgetView);ie.renderToSelector("sherpa-root", e),this.widgetOptions.showAsTrip && (ie.listenToAllClick("#sherpa-btn-check", this.onSearchBtn), null != (e = document.getElementById("sherpa-btn-check")) && (e.disabled =! 0))}}, {key: "_getCountryByCode",value: function (t) {return(3 === t.length ? this.localizationServer.countries.find(function (e) {return e.alpha_3 == t}) : this.localizationServer.countries.find(function (e) {return e.alpha_2 == t})).name}}, {key: "_getLongCountryCode",value: function (t) {return 3 === t.length ? t : this.localizationServer.countries.find(function (e) {return e.alpha_2 == t}).alpha_3}}, {key: "_getApplicationWithProductCodes",value: function () {var i = this;return this.requirementsServer.filter(function (e) {try {return !! Ue(Ue({}, e.response.visa[0].availableVisas[0]), {}, {type: e.response.visa[0].requirement})} catch (e) {return !1}}).map(function (t) {var e = i._getLongCountryCode(t.request.citizenship),r = Ue(Ue({}, t.response.visa[0].availableVisas[0]), {}, {type: t.response.visa[0].requirement}),n = {destinationCountry: t.request.country};return null != i.widgetOptions.itinerary && (n = i.widgetOptions.itinerary.filter(function (e) {return e.destinationCountry == t.request.country})[0]), {programId: r.applicationCode,availVisa: r,data: Ue({
nationality: e},n)}})}}, {key: "_renderVisaResults",value: function () {var S = this,A = this.requirementsServer,C = this.localizationServer.localization,e = "",x = [],t = [],E = {checkoutInitiator: "widgetOpenCheckout",askDataConsent: !1};this.checkoutSpecialHandling = E;var U = "",T = !1,k = !1,R = !1;this.widgetOptions.showAsTrip && (n = A[0].request, U = "".concat(n.country, ",").concat(n.destinationCountries.join(",")), T = 1 === Ce(new Set(A.map(function (e) {return e.request}).map(function (e) {return e.country}))).length, k = Ce(new Set(A.map(function (e) {return e.request}).filter(function (e) {return null != e.airportCode || null != e.regionCode}))).length === A.length, R = 0 < A.map(function (e) {return e.request}).map(function (e) {return e.isUnknownDomestic}).filter(function (e) {return !0 === e}).length && T);var O = [];A.forEach(function (t, e) {var r = "";if (t.request.citizenship === t.request.country) r = D.TO_HOME; else {if (! t.response.visa[0]) throw new Error("WARNING | Empty visa array");r = t.response.visa[0].requirement} r === D.TO_HOME && (t.response.visa =[{}], t.response.visa[0].textual ={ class: L.normal,text: [S.localizationServer.localization.generalJustFine, ""]});var n = null;-1 != S.mayHaveAvailVisa.indexOf(D[r]) && (S.checkoutOptions.applications = S._getApplicationWithProductCodes(), (v = t.response.visa[0]) && v.availableVisas && v.availableVisas[0] && (n = v.availableVisas[0], O.push(n.applicationCode)));var i = t.response.visa[0].textual.text,o = t.response.visa[0].alerts,a = S.localizationServer.countries,s = t.request.country;2 !== s.length && (s = a.filter(function (e) {return 2 === t.request.country.length ? e.alpha_2 === t.request.country : e.alpha_3 === t.request.country}).map(function (e) {return e.alpha_2})[0]);var c = a.filter(function (e) {return 2 === t.request.country.length ? e.alpha_2 === t.request.country : e.alpha_3 === t.request.country}).map(function (e) {return e.alpha_2})[0],l = q.getFlagUrlByCode(s),p = S._getCountryByCode(t.request.country),d = p,u = q.findRegion(t.request.regionCode);null != t.request.regionCode && 1 === u.length && (d = "".concat(q.findRegion(t.request.regionCode)[0].name, ", ").concat(p));var h = null == x.find(function (e) {return !! e.isSelected}) && null != S.widgetView.destinations && null != S.widgetView.destinations[0] && S.widgetView.destinations[0].destinationCode === c || 0 === S.widgetView.destinations.length,f = document.getElementsByClassName("destination dest-selected");0 < f.length && Array.from(f).forEach(function (e) {e = e.dataset.id;h = c === e});var g = q.showSubscribe,w = !0,m = !1,v = C.from,a = q.showEntryRequirements;S.widgetOptions.showAsTrip ? (m = h =! 0, 0 < e && (w =! 1, v = C.to), 0 !== e && 2 !== e || (a = g =! 1)) : h = 0 === e;u = t.request.originCountries && t.request.originCountries[0];null != u && 2 === u.length && (u = S._getLongCountryCode(u));f = t.request.country;null != f && 2 === f.length && (f = S._getLongCountryCode(f));var y = {index: e,showResult: !0,title: d,text: "",productName: "",nationality: t.request.citizenship,destination: f,origin: u,dataTrip: U,destinationCode: s,isSelected: h,lang: q.getLang(),requirementType: D[r],flagUrl: l,messageStyle: L[t.response.visa[0].textual.class],checkoutSpecialHandling: JSON.stringify(E),showEntryRequirements: a && ! T,showTravelRestriction: q.getShowTravelRestriction(),showCollapseTravelRestrictions: q.getShowCollapaseTravelRestriction(),collapseTravelRestrictionsState: q.getCollapaseTravelRestrictionState(),showSubscribe: g,showTitle: w,showAsTrip: q.getShowAsTrip(),showCountryInTitle: m,travelDirection: v,showCountryFlag: ! q.getShowTravelRestriction() && 1 === A.length,cdnUrl: "https://sdk-sandbox.joinsherpa.io/cdn",showEmbassySearch: !1,embassySearchUrl: "https://www.google.com/search?q=".concat(p, "+embassy+near+me"),showPaperVisaProvider: q.getPaperVisaProvider().show,paperVisaProviderUrl: q.getPaperVisaProvider().url,affiliate: S.checkoutOptions.affiliateId,showVisaRequirementsTitleOutside: !1,showTravelRestrictionsTitle: !0,showSubscribeBtn: q.getShowSubscribeBtn(),showHelpBtn: q.getShowHelpBtn(),showInputActions: q.getShowInputActions(),showDepartureDateSelector: q.getShowDepartureDateSelector(),showDestinationSelector: q.getShowDestinationSelector(),showOriginSelector: q.getShowOriginSelector(),showPassportSelector: q.getShowPassportSelector(),subscribeUrl: S.getSubscribeUrl(t.request.citizenship, t.request.country, null, q.getLang(), S.checkoutOptions.affiliateId, "alert", t.request.originAirportCode, t.request.destinationAirportCode, t.request.originRegionCode, t.request.destinationRegionCode, t.request.originCountryCode, t.request.destinationCountryCode, t.request.departureDate, t.request.arrivalDate),showNoDomesticAvailable: 0 === e && R,showMoreSearchOptions: 0 === e && S.widgetOptions.showAsTrip && T && ! R && ! k,showQuarantineOnReturn: q.getShowQuarantineOnReturn(),isReturn: !! t.request.isReturn};switch (T && (y.showSubscribe =! 1), y.restrictionTiles = S.generateTiles(t, e), 0 === y.restrictionTiles.filter(function (e) {return e.hasContent}).length && (y.showResult =! 1), r) {case D.ON_ARRIVAL:case D.NOT_REQUIRED: x.push(Ue(Ue({}, y), {}, {
text: "".concat(i[0], " ").concat(i[1]),
availVisa: n,
checkoutOptions: JSON.stringify(S.checkoutOptions),
infoIcon: o && o[0] ? N.clock : null,
iconUrl: "".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/img/").concat(S.checkoutOptions.affiliateId, "/check_circle_outline_24px.svg"),
infoText: o && o[0] ? o[0].body : null,
iconAlt: "",
showPaperVisaProvider: !1}));break;case D.E_VISA: S.checkoutOptions.selectedProductId = n ? n.applicationCode : null;var _ = t.response.visa[0].availableVisas ? t.response.visa[0].availableVisas[0].name : S._getCountryByCode(t.request.country);x.push(Ue(Ue({}, y), {}, {
productName: _,
text: "".concat(i[0], " ").concat(i[1]),
availVisa: n,
checkoutOptions: JSON.stringify(S.checkoutOptions),
infoIcon: o && o[0] ? N.clock : null,
infoText: o && o[0] ? o[0].body : null,
iconUrl: "".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/img/").concat(S.checkoutOptions.affiliateId, "/error_outline_24px_rounded.svg"),
iconAlt: ""}));break;case D.ESTA:case D.ETA: S.checkoutOptions.selectedProductId = n ? n.applicationCode : null,x.push(Ue(Ue({}, y), {}, {
availVisa: n,
checkoutOptions: JSON.stringify(S.checkoutOptions),
text: "".concat(i[0], " ").concat(i[1]),
infoIcon: N.clock,
infoText: i[2],
iconUrl: "".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/img/").concat(S.checkoutOptions.affiliateId, "/error_outline_24px_rounded.svg"),
iconAlt: ""}));break;case D.SPECIAL_PROVISIONS:case D.EMBASSY_VISA: x.push(Ue(Ue({}, y), {}, {
text: "".concat(i[0], " ").concat(i[1]),
infoIcon: o && o[0] ? N.clock : N.yellow,
infoText: o && o[0] ? o[0].body : C.messages.embassyVisa,
iconUrl: "".concat("https://sdk-sandbox.joinsherpa.io/cdn", "/img/").concat(S.checkoutOptions.affiliateId, "/attention_outline_24px_rounded.svg"),
iconAlt: "",
showEmbassySearch: !0}));break;case D.TO_HOME: x.push(Ue(Ue({}, y), {}, {
text: C.generalJustFine,
showPaperVisaProvider: !1}));break;default: x.push(Ue(Ue({}, y), {}, {
text: "".concat(i[0], " ").concat(i[1]),
showEmbassySearch: !0}))}if (1 === e && ! T) try {var b = n ? n.applicationCode : null;I.sendEvent("showVisaRequirement", null, null, null, {
type: r,
productId: b})} catch (e) {}});var r,n = this.localizationServer.localization.messages;t.length === A.length ? ([].forEach(function (e) {return x.push(e)}), e = C.messages.mayRequireVisa, r = N.yellow) : 0 !== t.length && (i = t.map(function (e) {return S._getCountryByCode(e)}).join(", "), e = "".concat(n.doNotNeedVisa, " <span>").concat(i, "</span>"), r = N.success);var i = 1 === x.length;this.requirementsView = Ue(Ue({}, this.requirementsView), {}, {bottomMessage: e,bottomMessageStyle: r,isSingeResult: i,results: x,localization: C,cdnUrl: "https://sdk-sandbox.joinsherpa.io/cdn",affiliate: this.checkoutOptions.affiliateId,hasPwLogo: !0,showInputActions: q.getShowInputActions()});i = this.clientPage.templates.requirementsResults,i = me.a.render(i, this.requirementsView);ie.renderToSelector("sherpa-requirements-results", i);i = document.querySelectorAll(".selected-countries-preview");null != i && i.forEach(function (e) {return e.addEventListener("click", function (e) {e.currentTarget.nextElementSibling.classList.contains("selected-countries-preview--show") ? (e.currentTarget.nextElementSibling.classList.remove("selected-countries-preview--show"), e.currentTarget.nextElementSibling.classList.add("selected-countries-preview--hide")) : e.currentTarget.nextElementSibling.classList.contains("selected-countries-preview--hide") && (e.currentTarget.nextElementSibling.classList.remove("selected-countries-preview--hide"), e.currentTarget.nextElementSibling.classList.add("selected-countries-preview--show"), e.currentTarget.classList.remove("selected-countries-preview--show"), e.currentTarget.classList.add("selected-countries-preview--hide"))})}),ie.listenToAllClick(".tile", function (e) {var t,r,n,i;0 != Object.keys(e.currentTarget.dataset).length && !1 !== e.currentTarget.dataset.hasContent && "false" !== e.currentTarget.dataset.clickable && (t = e.currentTarget.dataset.destination, i = e.currentTarget.dataset.region, r = e.currentTarget.dataset.index, n = ".tile-details-".concat(e.currentTarget.dataset.id, '[data-destination="').concat(t, '"][data-region="').concat(i, '"]'), document.querySelectorAll(n).forEach(function (e) {e.classList.remove("tile-details-hide"),e.classList.add("tile-details-show")}), document.querySelectorAll(".tile").forEach(function (e) {e.classList.remove("tile-show"),e.parentElement.classList.remove("tile-show"),e.classList.add("tile-hide"),e.parentElement.classList.add("tile-hide")}), document.querySelectorAll('.visa-requirements__insights[data-index="'.concat(r, '"]')).forEach(function (e) {e.classList.add("visa-requirements__insights--grid")}), document.querySelectorAll(".visa-requirements__title").forEach(function (e) {var t = e.attributes.getNamedItem("data-index");null != t && t.value !== r && (e.classList.remove("visa-requirements__title--show"), e.classList.add("visa-requirements__title--hide"))}), document.querySelectorAll(".result-item__visa-requirements").forEach(function (e) {var t = e.attributes.getNamedItem("data-index");null != t && t.value !== r && (e.classList.remove("result-item__visa-requirements--show"), e.classList.add("result-item__visa-requirements--hide"))}), (i = document.querySelector(".tile-details-".concat(e.currentTarget.dataset.id, '[data-destination="').concat(t, '"][data-region="').concat(i, '"] .tile-details__header'))) && ie.isOutOfViewport(i) && ie.scrollTo(i))}),ie.listenToAllClick(".navigate-back", function (e) {var t = document.getElementsByClassName("tile-details");Array.from(t).forEach(function (e) {e.classList.remove("tile-details-show"),e.classList.add("tile-details-hide")});t = document.getElementsByClassName("tile");Array.from(t).forEach(function (e) {e.classList.remove("tile-hide"),e.parentElement.classList.remove("tile-hide"),e.classList.add("tile-show"),e.parentElement.classList.add("tile-show")});t = document.getElementsByClassName("visa-requirements__insights");Array.from(t).forEach(function (e) {e.classList.remove("visa-requirements__insights--grid")}),document.querySelectorAll(".visa-requirements__title").forEach(function (e) {e.classList.remove("visa-requirements__title--hide"),e.classList.add("visa-requirements__title--show")}),document.querySelectorAll(".result-item__visa-requirements").forEach(function (e) {e.classList.remove("result-item__visa-requirements--hide"),e.classList.add("result-item__visa-requirements--show")})}),ie.listenToAllClick(".destination", function (e) {var t = e.currentTarget.dataset.id,e = document.getElementsByClassName("result-item");Array.from(e).forEach(function (e) {e.classList.remove("selected"),e.classList.add("not-selected")});e = document.getElementsByClassName("destination");Array.from(e).forEach(function (e) {e.classList.remove("dest-selected"),e.classList.add("dest-not-selected")});e = document.getElementsByClassName("result-item-country-".concat(t));Array.from(e).forEach(function (e) {e.classList.remove("not-selected"),e.classList.add("selected")});t = document.getElementsByClassName("destination-".concat(t));Array.from(t).forEach(function (e) {e.classList.remove("dest-not-selected"),e.classList.add("dest-selected")})}),ie.listenToAllClick(".result-item__product_btn", function (e) {var t = document.getElementsByClassName("result-item__product_btn");Array.from(t).forEach(function (e) {e.classList.remove("result-item__product_btn--clicked")}),e.currentTarget.classList.add("result-item__product_btn--clicked")}),ie.listenToAllClick(".tile-details__rating__button", function (e) {var t = document.getElementsByClassName("tile-details__rating__button");Array.from(t).forEach(function (e) {e.classList.remove("active")}),e.currentTarget.classList.add("active");var r = e.target.parentNode.parentNode.parentNode.querySelector(".tile-details__helpful-feedback"),t = document.getElementsByClassName("tile-details__helpful-feedback");Array.from(t).forEach(function (e) {e.classList.add("hide")}),e.currentTarget.classList.contains("active") && e.currentTarget.classList.contains("dislike") && r.classList.remove("hide")}),ie.listenToAllClick('input[name="helpful-feedback"]', function (e) {var t = document.getElementsByClassName("button.tile-details__helpful-feedback__submit");Array.from(t).forEach(function (e) {e.disabled = !0}),e.target.parentNode.parentNode.parentNode.querySelector("button").disabled = !1}),ie.listenToAllClick(".tile-details__helpful-feedback__submit", function (e) {for (var t, r = e.target.parentNode, n = Array.from(r.querySelectorAll('input[name="helpful-feedback"]')), i = 0; i < n.length; i++) n[i].checked && (t = n[i].value);var o = r.parentNode.parentNode,a = o.dataset.destination,s = o.querySelector(".tile-details-header__title").innerText,c = o.querySelector(".tile-details__rating__button.like").dataset.id;"INCORRECT_INFORMATION" === t && (e = "https://joinsherpa.typeform.com/to/oX9OqGnG?destination=".concat(a, "&sourcetype=REQUIREMENTS_WIDGET&updatetitle=").concat(s, "&updateid=").concat(c), window.open(e, "_blank")),I.sendEvent("Helpful Feedback", null, null, null, {contentId: c,feedback: t,destination: a,title: s}),r.classList.add("hide"),o.querySelector(".tile-details__footer__thankyou").classList.remove("hide")}),ie.listenToAllClick(".result-item__travel-restrictions-control", this.showOrHideTravelRestrictions),ie.listenToAllClick(".visa-requirements__title > div", this.showOrHideTravelRestrictions),O.forEach(function (e) {e = "#sherpa-btn-apply-".concat(e, "-inside");ie.listenToAllClick(e, S.onProductClick)}),ie.listenToAllClick("#sherpa-btn-subscribe-small", this.trackSubscribeUrl),ie.listenToAllClick("#sherpa-btn-subscribe", this.trackSubscribeUrl)}}, {key: "renderRequirementsError",value: function (e) {"generalJustFine" === e ? this.clientPage.showResultsState(W.justFine) : (this.clientPage.integrationBridge.messageParent(K.EmitEvents.sdkError), this.clientPage.showResultsState(W.error))}}, {key: "renderRequirementsLoading",value: function () {this.clientPage.showResultsState(W.loading)}}, {key: "renderRequirementsDefault",value: function () {this.clientPage.showResultsState(W.default)}}, {key: "renderRequirements",value: function (e, t) {var r,n,i,o,a,s,c = e.filter(function (e) {return null === e.response});this.checkoutOptions.defaultNationalityCountry = t,this.requirementsServer = e,q.getShowEntryRequirements && (1 === e.length && null !== (r = e[0]) && void 0 !== r && null !== (n = r.response) && void 0 !== n && null !== (i = n.visa[0]) && void 0 !== i && i.available || 2 === e.length && null !== (o = e[1]) && void 0 !== o && null !== (a = o.response) && void 0 !== a && null !== (s = a.visa[0]) && void 0 !== s && s.available) && I.trackImpression(e, this.widgetOptions.placement),0 == c.length ? (this.clientPage.showResultsState(W.success), this._renderVisaResults()) : (this.clientPage.integrationBridge.messageParent(K.EmitEvents.sdkError), this.clientPage.showResultsState(W.error))}}, {key: "resizeWidgetFrame",value: function (e) {document.getElementById(c).style.height = "".concat(e, "px")}}, {key: "createRestrictionTile",value: function (e, t, r) {return this.mapRestrictionTile({id: e,hasContent: !1,clickable: !1,isAvailable: !0,iconAlt: "",disabled: !0}, t, r)}}, {key: "stringHasAnyString",value: function (t, e) {return e.some(function (e) {return 1 < t.indexOf(e)})}}, {key: "replaceStrings",value: function (t, e, r) {e = e.find(function (e) {return 1 < t.indexOf(e)});return t.replace(e, r)}}, {key: "mapRestrictionTile",value: function (e, t, r) {var n,i,o,a = [this.localizationServer.localization.replacements.selectedCountries, this.localizationServer.localization.replacements.aSelectedCountry, this.localizationServer.localization.replacements.anExemptedCountry],s = [this.localizationServer.localization.replacements.selectedRegions, this.localizationServer.localization.replacements.aSelectedRegion, this.localizationServer.localization.replacements.covidHotspot],c = r.attributes.description;switch (r.attributes.included && 0 < r.attributes.included.length ? (n = r.attributes.included.filter(function (e) {return "COUNTRY" === e.type}).map(function (e) {return e.countryName}).sort(), n = this.getReplacement(e.id, n), this.stringHasAnyString(c, a) && (c = this.replaceStrings(c, a, n)), n = r.attributes.included.filter(function (e) {return "REGION" === e.type}).map(function (e) {return e.name}).sort(), n = this.getReplacement(e.id, n), this.stringHasAnyString(c, s) && (c = this.replaceStrings(c, s, n))) : r.attributes.excluded && 0 < r.attributes.excluded.length && (i = r.attributes.excluded.map(function (e) {return e.countryName}).sort(), i = this.getReplacement(e.id, i), this.stringHasAnyString(c, a) && (c = this.replaceStrings(c, a, i))), r.attributes.travelHistory && 0 < r.attributes.travelHistory.length && (null != (i = r.attributes.travelHistory[0].countries) && (i = i.map(function (e) {return e.countryName}).sort(), r.attributes.travelHistory[0].countries = i, o = this.getReplacement(e.id, i), this.stringHasAnyString(c, a) && (c = this.replaceStrings(c, a, o))), null != (o = r.attributes.travelHistory[0].regions) && (o = o.map(function (e) {return e.name}).sort(), r.attributes.travelHistory[0].regions = o, o = this.getReplacement(e.id, o), this.stringHasAnyString(c, s) && (c = this.replaceStrings(c, s, o)))), t) {case "restriction": e.iconUrl = q.getIconUrl("restrictions_24px"),e.headline = this.localizationServer.localization.headlines.restrictions,"NO_RESTRICTION" === r.attributes.category && (e.iconUrl = q.getIconUrl("check_circle_outline_24px"), e.headline = this.localizationServer.localization.headlines.noRestrictions),e.position = 1;break;case "transit": e.iconUrl = q.getIconUrl("restrictions_24px"),e.headline = this.localizationServer.localization.headlines.transit,"NO_RESTRICTION" === r.attributes.category && (e.iconUrl = q.getIconUrl("check_circle_outline_24px"), e.headline = this.localizationServer.localization.headlines.noTransit),e.position = 2;break;case "quarantine": e.iconUrl = q.getIconUrl("quarantine_24px"),"NO_QUARANTINE" === r.attributes.category && (e.iconUrl = q.getIconUrl("quarantine_24px--green")),e.headline = this.localizationServer.localization.headlines.quarantine,e.position = 2;break;case "health_declaration": e.iconUrl = q.getIconUrl("health_declaration_24px"),e.headline = this.localizationServer.localization.headlines.documents,e.position = 3;break;case "health_assessment": e.iconUrl = q.getIconUrl("health_assessment_24px"),e.headline = this.localizationServer.localization.headlines.health,e.position = 4;break;case "covid_testing": e.iconUrl = q.getIconUrl("health_assessment_24px"),e.headline = this.localizationServer.localization.headlines.covid,e.position = 4;break;case "ppe": e.iconUrl = q.getIconUrl("mask_24px"),e.headline = this.localizationServer.localization.headlines.ppe,e.position = 5;break;case "health_insurance": e.iconUrl = q.getIconUrl("health_insurance"),e.headline = this.localizationServer.localization.headlines.healthInsurance,e.position = 6;break;case "travel_insurance": e.iconUrl = q.getIconUrl("travel_insurance"),e.headline = this.localizationServer.localization.headlines.travelInsurance,e.position = 6}return Ue(Ue({}, e), {}, {tileType: t,title: r.attributes.title,regionCode: r.attributes.region,isRegion: null != r.attributes.region,description: c,more: r.attributes.more,sourceType: null !== (c = null === (c = r.attributes.source) || void 0 === c ? void 0 : c.type) && void 0 !== c ? c : "",sourceUrl: null !== (c = null === (c = r.attributes.source) || void 0 === c ? void 0 : c.url) && void 0 !== c ? c : "",sourceName: null !== (c = null === (c = r.attributes.source) || void 0 === c ? void 0 : c.title) && void 0 !== c ? c : "",category: r.attributes.category,subCategory: r.attributes.subCategory,documentLinks: r.attributes.documentLinks,restrictionId: r.id,lastUpdatedAt: null != r.attributes.lastUpdatedAt ? b()(r.attributes.lastUpdatedAt).format("lll") : null,isAvailable: !0,clickable: !0,hasContent: !0,disabled: !1})}}, {key: "getReplacement",value: function (e, t) {return '<span tabindex="1" role="list" aria-label="'.concat(t.join(","), '" class="selected-countries-preview selected-countries-preview--show" data-tile-id="').concat(e, '">\n    ').concat(t.slice(0, 2).join(", "), " ( ").concat(this.localizationServer.localization.and, " ").concat(t.length - 2, " ").concat(this.localizationServer.localization.more, ' )</span><span class="selected-countries-preview--hide" data-tile-id="').concat(e, '">').concat(t.join(", "), "</span>")}}, {key: "getSubscribeUrl",value: function (e, t, r, n, i, o, a, s, c, l, p, d, u, h) {var f = "https://joinsherpa.typeform.com/to/yruyLYFf";return null != e && (f += "#nationality=".concat(e)),null != t && (f += "&destination=".concat(t)),null != r && (f += "&itinerary=".concat(r)),null != n && (f += "&language=".concat(n)),null != i && (f += "&affiliateid=".concat(i)),null != o && (f += "&sourcetype=".concat(o)),f += "&environment=".concat("sandbox"),null != a && (f += "&originAirportCode=".concat(a)),null != s && (f += "&destinationAirportCode=".concat(s)),null != c && (f += "&originRegionCode=".concat(c)),null != l && (f += "&destinationRegionCode=".concat(l)),null != p && (f += "&originCountryCode=".concat(p)),null != d && (f += "&destinationCountryCode=".concat(d)),null != u && (f += "&departureDate=".concat(u)),null != h && (f += "&arrivalDate=".concat(h)),f}}, {key: "generateTiles",value: function (e, t) {var n = this,r = this.localizationServer.localization,i = [{id: 0,position: 0,hasContent: !1,clickable: !1,isAvailable: !1,headline: r.headlines.entry,iconUrl: q.getIconUrl("world_24px"),iconAlt: "",disabled: !0},{id: 1,position: 1,tileType: "restriction",hasContent: !0,clickable: !1,isAvailable: !1,headline: r.headlines.restrictions,title: r.informationNotAvailable,iconUrl: q.getIconUrl("restrictions_24px--gray"),iconAlt: "",disabled: !0},{id: 2,position: 2,hasContent: !0,tileType: "quarantine",clickable: !1,isAvailable: !1,headline: r.headlines.quarantine,title: r.informationNotAvailable,iconUrl: q.getIconUrl("quarantine_24px--gray"),iconAlt: "",disabled: !0},{id: 3,position: 3,hasContent: !1,tileType: "health_declaration",clickable: !0,isAvailable: !1,headline: r.headlines.documents,iconUrl: q.getIconUrl("health_declaration_24px"),iconAlt: "",disabled: !1}, {id: 4,position: 4,hasContent: !1,tileType: "health_assessment",clickable: !0,isAvailable: !1,headline: r.headlines.covid,iconUrl: q.getIconUrl("health_assessment_24px"),iconAlt: "",disabled: !1}, {id: 5,position: 5,hasContent: !1,tileType: "ppe",clickable: !0,isAvailable: !1,headline: r.headlines.ppe,iconUrl: q.getIconUrl("mask_24px"),iconAlt: "",disabled: !1}],o = e.response.restriction.entryStatus;switch (i[0].category = "BORDER_STATUS", i[0].subCategory = "ENTRY", this.widgetOptions.showAsTrip && e.request.isOrigin && (o = e.response.restriction.exitStatus, i[0].subCategory = "EXIT"), i[0].title = r[o], o) {case "COMPLETELY_CLOSED": i[0].iconUrl = q.getIconUrl("world_24px--red");break;case "NO_RESTRICTION": i[0].iconUrl = q.getIconUrl("world_24px--green");break;case "PARTIALLY_CLOSED": i[0].iconUrl = q.getIconUrl("world_24px--red")}e.response.restriction.restrictions.filter(function (e) {return "NO_ENTRY" === e.attributes.category || "ENTRY" === e.attributes.category || "RESTRICTED_ENTRY" === e.attributes.category || "NO_RESTRICTION" === e.attributes.category || "DOMESTIC" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "restriction",r = i[1];"TRANSIT" === e.attributes.subCategory && (t = "transit"),r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[1] = n.mapRestrictionTile(r, t, e)}),this.widgetOptions.showAsTrip && 0 === t && (i.filter(function (e) {return "restriction" === e.tileType || "transit" === e.tileType}).forEach(function (e) {e.hasContent = !1,e.isAvailable = !1}), e.response.restriction.restrictions.filter(function (e) {return "NO_EXIT" === e.attributes.category || "EXIT" === e.attributes.subCategory}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "restriction";"TRANSIT" === e.attributes.subCategory && (t = "transit");var r = i[1];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[1] = n.mapRestrictionTile(r, t, e)})),e.response.restriction.procedures.filter(function (e) {return "QUARANTINE" === e.attributes.category || "NO_QUARANTINE" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "quarantine",r = i[2];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[2] = n.mapRestrictionTile(r, t, e)}),e.response.restriction.procedures.filter(function (e) {return "DOC_REQUIRED" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "health_declaration",r = i[3];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[3] = n.mapRestrictionTile(r, t, e)}),e.response.restriction.procedures.filter(function (e) {return "COVID_19_TEST" === e.attributes.category || "NO_COVID_19_TEST" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = i[4];t.isAvailable ? (t = n.createRestrictionTile(i.length + 1, "covid", e), i.push(t)) : i[4] = n.mapRestrictionTile(t, "covid", e)}),e.response.restriction.procedures.filter(function (e) {return "HEALTH_ASSESSMENT" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "health_assessment",r = i[4];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[4] = n.mapRestrictionTile(r, t, e)}),e.response.restriction.procedures.filter(function (e) {return "PPE" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = i[5];t.isAvailable ? (t = n.createRestrictionTile(i.length + 1, "ppe", e), i.push(t)) : i[5] = n.mapRestrictionTile(t, "ppe", e)}),e.response.restriction.procedures.filter(function (e) {return "HEALTH_INSURANCE" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "health_insurance",r = i[5];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[5] = n.mapRestrictionTile(r, t, e)}),e.response.restriction.procedures.filter(function (e) {return "TRAVEL_INSURANCE" === e.attributes.category}).sort(function (e, t) {return b()(e.attributes.lastUpdatedAt).isAfter(b()(t.attributes.lastUpdatedAt)) ? 1 : -1}).forEach(function (e) {var t = "travel_insurance",r = i[5];r.isAvailable ? (r = n.createRestrictionTile(i.length + 1, t, e), i.push(r)) : i[5] = n.mapRestrictionTile(r, t, e)}),this.widgetOptions.showAsTrip && 0 === t && (i[2].hasContent =! 1, i[5].hasContent =! 1),(i = i.filter(function (e) {return e.hasContent})).sort(function (e, t) {return e.position < t.position ? -1 : 1});t = (i = q.getShowQuarantineOnReturn() && 2 === t ? i.filter(function (e) {return "QUARANTINE" === e.category || "NO_QUARANTINE" === e.category || "COVID_19_TEST" === e.category || "NO_COVID_19_TEST" === e.category || "HEALTH_ASSESSMENT" === e.category || "RE_ENTRY_PERMIT" === e.category || "SANITIZATION" === e.category || "HEALTH_MEASURES" === e.category || "DOC_REQUIRED" === e.category || "ON_ARRIVAL" === e.subCategory || "BEFORE_ARRIVAL" === e.subCategory}) : i).length,t = 6 < t ? 6 - t % 3 : 6 - t,t = Array.from({length: t}).fill({hasContent: !1,clickable: !1,isAvailable: !1,isStretch: !0,disabled: !0}).map(function (e, t) {return e.id = 100 + t,e});return [].concat(Ce(i), Ce(t))}}]) && Te(e.prototype, t),r && Te(e, r),i}();function Oe(t, e) {var r,n = Object.keys(t);return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {return Object.getOwnPropertyDescriptor(t, e).enumerable})), n.push.apply(n, r)),n}function Ne(t) {for (var e = 1; e < arguments.length; e++) {var r = null != arguments[e] ? arguments[e] : {};e % 2 ? Oe(Object(r), !0).forEach(function (e) {Be(t, e, r[e])}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function (e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))})}return t}function De(e) {return function (e) {if (Array.isArray(e)) return Le(e)}(e) || function (e) {if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)}(e) || function (e, t) {if (e) {if ("string" == typeof e) return Le(e, t);var r = Object.prototype.toString.call(e).slice(8, -1);return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Le(e, t) : void 0}}(e) || function () {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(e, t) {(null == t || t > e.length) && (t = e.length);for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];return n}function Ie(e, t, r, n, i, o, a) {try {var s = e[o](a),c = s.value} catch (e) {return void r(e)}s.done ? t(c) : Promise.resolve(c).then(n, i)}function Me(s) {return function () {var e = this,a = arguments;return new Promise(function (t, r) {var n = s.apply(e, a);function i(e) {Ie(n, t, r, i, o, "next", e)}function o(e) {Ie(n, t, r, i, o, "throw", e)}i(void 0)})}}function Pe(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function Be(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var je = function () {function r(e, t) {var i = this;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, r),Be(this, "viewAdapter", void 0),Be(this, "dal", void 0),Be(this, "affiliate", void 0),Be(this, "widgetOptions", {}),Be(this, "uiState", {isLoading: !1}),Be(this, "localization", void 0),Be(this, "integrationBridge", void 0),Be(this, "createOriginRequest", function (e) {e = {isOrigin: !0,type: "country",country: i.uiState.origin.countryCode,regionCode: i.uiState.origin.regionCode,airportCode: i.uiState.origin.airportCode,citizenship: i.uiState.citizenship.countryCode,activeDate: i.uiState.departureDate || e && e.departureDate,destinationCountries: [i.uiState.destination.countryCode || e && e.destinationCountry]};return null != i.uiState.origin.regionCode ? e.isUnknownDomestic = 0 === q.findRegion(i.uiState.origin.regionCode).length : e.isUnknownDomestic = !["USA", "CAN", "AUS"].includes(e.country),e.originAirportCode = i.uiState.origin.airportCode,e.originRegionCode = i.uiState.origin.regionCode,e.originCountryCode = i.uiState.origin.countryCode,e.destinationAirportCode = i.uiState.destination.airportCode,e.destinationRegionCode = i.uiState.destination.regionCode,e.destinationCountryCode = i.uiState.destination.countryCode,e.departureDate = i.uiState.departureDate,e.arrivalDate = i.uiState.arrivalDate,e}),Be(this, "createDestinationRequest", function (e) {var t = [],r = (null == i.uiState.origin.regionCode || i.uiState.origin.countryCode !== i.uiState.destination.countryCode) && null != i.uiState.destination.regionCode,n = {isOrigin: !1,type: "country",country: i.uiState.destination.countryCode,regionCode: i.uiState.destination.regionCode,airportCode: i.uiState.destination.airportCode,citizenship: i.uiState.citizenship.countryCode,activeDate: i.uiState.departureDate || (null == e ? void 0 : e.arrivalDate),originCountries: [i.uiState.origin.countryCode || (null == e ? void 0 : e.originCountry)]};null != i.uiState.destination.regionCode ? n.isUnknownDomestic = 0 === q.findRegion(i.uiState.destination.regionCode).length : n.isUnknownDomestic = !["USA", "CAN", "AUS"].includes(n.country),n.originAirportCode = i.uiState.origin.airportCode,n.originRegionCode = i.uiState.origin.regionCode,n.originCountryCode = i.uiState.origin.countryCode,n.destinationAirportCode = i.uiState.destination.airportCode,n.destinationRegionCode = i.uiState.destination.regionCode,n.destinationCountryCode = i.uiState.destination.countryCode,n.departureDate = i.uiState.departureDate,n.arrivalDate = i.uiState.arrivalDate;return ["GB-SCT", "GB-ENG", "GB-NIR", "GB-WLS"].includes(i.uiState.destination.regionCode) || t.push(n),r && ((e ={isOrigin: !1,type: "region",country: i.uiState.destination.countryCode,regionCode: i.uiState.destination.regionCode,airportCode: i.uiState.destination.airportCode,citizenship: i.uiState.citizenship.countryCode,activeDate: i.uiState.departureDate || (null == e ? void 0 : e.arrivalDate),originCountries: [i.uiState.origin.countryCode || (null == e ? void 0 : e.originCountry)]}).originAirportCode = i.uiState.origin.airportCode, e.originRegionCode = i.uiState.origin.regionCode, e.originCountryCode = i.uiState.origin.countryCode, e.destinationAirportCode = i.uiState.destination.airportCode, e.destinationRegionCode = i.uiState.destination.regionCode, e.destinationCountryCode = i.uiState.destination.countryCode, e.departureDate = i.uiState.departureDate, e.arrivalDate = i.uiState.arrivalDate, t.push(e)),t}),Be(this, "createReturnRequests", function (e) {var t,r = [];return i.uiState.origin.countryCode === i.uiState.destination.countryCode ? (t = i.generateCountryToRegionReturn(e)) && r.push(t) : (null != (t = i.generateCountryToCountryReturn(e)) && r.push(t), (e = i.generateCountryToRegionReturn(e)) && r.push(e)),r}),Be(this, "onDepartureDateChange", function (e) {i.uiState.departureDate = e.target.value;e = b()((i.uiState.departureDate, "YYYY-MM-DD"));null != i.uiState.departureDate && e.isValid() && e.isAfter(b()()) && I.sendEvent(I.cat.widgetDepartureDateChange, i.uiState.departureDate)});try {this.affiliate = "sherpa",this.viewAdapter = new Re(this.affiliate, this, e),this.dal = new q(this.affiliate),this.integrationBridge = e} catch (e) {this._onError(e)}}var e,t,n,i,o,a,s;return e = r,(t =[{key: "_onCountryChange",value: function (e, t) {switch (e) {case fe.nationality:this.uiState.citizenship = t,I.sendEvent(I.cat.widgetCountryChange, t);break;case fe.origin:this.uiState.origin = t,I.sendEvent(I.cat.widgetOriginChange, t);break;case fe.destination:this.uiState.destination = t,I.sendEvent(I.cat.widgetDestinationChange, t)}q.getShowEntryRequirements() && null == this.uiState.citizenship.countryCode || (this.widgetOptions.showAsTrip ? (null != this.uiState.destination && null != this.uiState.origin && ie.resetSearchBtn(), null != this.uiState.destination.countryCode && null != this.uiState.citizenship.countryCode && null != this.uiState.origin.countryCode || this.disableCheckNowButton()) : this._renderRequirements())}},{key: "_onCheckClicked",value: function () {ie.searchBtnClickable && (this.widgetOptions.showAsTrip ? this._renderTrip() : this._renderRequirements())}},{key: "generateCountryToCountryReturn",value: function (e) {e = {isReturn: !0,type: "country",country: this.uiState.origin.countryCode,regionCode: this.uiState.origin.regionCode,airportCode: this.uiState.origin.airportCode,citizenship: this.uiState.citizenship.countryCode,activeDate: this.uiState.departureDate || (null == e ? void 0 : e.arrivalDate),originCountries: [this.uiState.destination.countryCode || (null == e ? void 0 : e.destinationCountry)]};return null != this.uiState.destination.regionCode ? e.isUnknownDomestic = 0 === q.findRegion(this.uiState.destination.regionCode).length : e.isUnknownDomestic = !["USA", "CAN", "AUS"].includes(e.country),e.originAirportCode = this.uiState.destination.airportCode,e.originRegionCode = this.uiState.destination.regionCode,e.originCountryCode = this.uiState.destination.countryCode,e.destinationAirportCode = this.uiState.origin.airportCode,e.destinationRegionCode = this.uiState.origin.regionCode,e.destinationCountryCode = this.uiState.origin.countryCode,e.departureDate = this.uiState.departureDate,e.arrivalDate = this.uiState.arrivalDate,e}},{key: "generateCountryToRegionReturn",value: function (e) {var t = !["USA", "CAN", "AUS"].includes(this.uiState.origin.countryCode);if (null == this.uiState.origin.regionCode || t) return null;e = {isReturn: !0,type: "region",country: this.uiState.origin.countryCode,regionCode: this.uiState.origin.regionCode,airportCode: this.uiState.origin.airportCode,citizenship: this.uiState.citizenship.countryCode,activeDate: this.uiState.departureDate || (null == e ? void 0 : e.arrivalDate),originCountries: [this.uiState.destination.countryCode || (null == e ? void 0 : e.destinationCountry)],originRegions: [this.uiState.destination.regionCode]};return null != this.uiState.destination.regionCode ? e.isUnknownDomestic = 0 === q.findRegion(this.uiState.destination.regionCode).length : e.isUnknownDomestic = !["USA", "CAN", "AUS"].includes(e.country),e.originAirportCode = this.uiState.destination.airportCode,e.originRegionCode = this.uiState.destination.regionCode,e.originCountryCode = this.uiState.destination.countryCode,e.destinationAirportCode = this.uiState.origin.airportCode,e.destinationRegionCode = this.uiState.origin.regionCode,e.destinationCountryCode = this.uiState.origin.countryCode,e.departureDate = this.uiState.departureDate,e.arrivalDate = this.uiState.arrivalDate,e}}, {key: "_renderTrip",value: (s = Me(regeneratorRuntime.mark(function e() {var t,r,n,a,i,o,s,c,l,p,d,u,h,f;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {case 0:
if (this.uiState.isLoading) 
  return e.abrupt("return");

e.next = 2;
break;case 2:
if (!this.widgetOptions.showAsTrip || null != this.uiState.destination.countryCode && null != this.uiState.citizenship.countryCode && null != this.uiState.origin.countryCode) {
  e.next = 7;
  break
}
return this.viewAdapter.renderRequirementsDefault(),
this.endLoading(),
this.disableCheckNowButton(),
e.abrupt("return", !1);case 7:
if (e.prev = 7, this.startLoading(), this.viewAdapter.renderRequirementsLoading(), null != this.widgetOptions.itinerary && 1 < this.widgetOptions.itinerary.length) 
  throw new Error("Only one trip at a time.");

e.next = 14;
break;case 14:
null == this.widgetOptions.itinerary && (this.widgetOptions.itinerary =[]);case 15:
return c = this.widgetOptions.itinerary[0],
l = [],
n = this.uiState.origin.countryCode !== this.uiState.destination.countryCode,
(p = this.createOriginRequest(c)).isInternational = n,
l.push(p),
(u = this.createDestinationRequest(c)).forEach(function (e) {
  return e.isInternational = n
}),
0 < u.length && (l = l.concat(u)),
q.getShowQuarantineOnReturn() && ((d = this.createReturnRequests(c)).forEach(function (e) {
  return e.isInternational = n
}), 0 < d.length && (l = l.concat(d))),
("region" === this.uiState.destination.type || "airport" === this.uiState.destination.type) && 0 < q.findRegion(this.uiState.destination.regionCode).length && (this.uiState.origin.countryCode === this.uiState.destination.countryCode || "GBR" === (null === (h = this.uiState.destination) || void 0 === h ? void 0 : h.countryCode) && null !== (t = this.uiState.destination) && void 0 !== t && null !== (r = t.regionCode) && void 0 !== r && r.startsWith("GB-")) && ((f =
  {
  isOrigin: !1,
  type: "region",
  country: this.uiState.destination.countryCode || c && c.destinationCountry,
  regionCode: this.uiState.destination.regionCode,
  airportCode: this.uiState.destination.airportCode,
  citizenship: this.uiState.citizenship.countryCode || this.widgetOptions.defaultNationalityCountry,
  activeDate: this.uiState.departureDate || c && c.arrivalDate,
  originCountries: [this.uiState.origin.countryCode || c && c.originCountry],
  originRegions: [this.uiState.origin.regionCode]
}).isInternational = n, null != this.uiState.destination.regionCode ? f.isUnknownDomestic = 0 === q.findRegion(this.uiState.destination.regionCode).length : f.isUnknownDomestic =!["USA", "CAN", "AUS"].includes(f.country), f.originAirportCode = this.uiState.origin.airportCode, f.originRegionCode = this.uiState.origin.regionCode, f.originCountryCode = this.uiState.origin.countryCode, f.destinationAirportCode = this.uiState.destination.airportCode, f.destinationRegionCode = this.uiState.destination.regionCode, f.destinationCountryCode = this.uiState.destination.countryCode, f.departureDate = this.uiState.departureDate, f.arrivalDate = this.uiState.arrivalDate, l.push(f)),
I.sendEvent(I.cat.searchRequirements, "searchRestriction", "single-trip", "requests", {
  originCountry: this.uiState.origin.countryCode,
  originRegions: this.uiState.origin.regionCode,
  originAirportCode: this.uiState.origin.airportCode,
  destinationCountry: this.uiState.destination.countryCode,
  destinationRegion: this.uiState.destination.regionCode,
  destinationAirportCode: this.uiState.destination.airportCode,
  isDomestic: this.uiState.destination.countryCode === this.uiState.origin.countryCode,
  departureDate: this.uiState.departureDate || c && c.arrivalDate,
  nationality: this.uiState.citizenship.countryCode
}),
e.next = 30,
this.dal.fetchRequirements(l);case 30: a = e.sent,
i = [],
(p = a.filter(function (e) {
  return e.request.isOrigin
}).map(function (e) {
  return e.response
})[0]).restriction.restrictions = p.restriction.restrictions.filter(function (e) {
  return "RESTRICTED_EXIT" === e.attributes.category || "NO_EXIT" === e.attributes.category || "EXIT" === e.attributes.subCategory || "DOMESTIC" === e.attributes.subCategory
}),
p.restriction.procedures = p.restriction.procedures.filter(function (e) {
  return "IN_AIRPORT" === e.attributes.subCategory
}),
i = i.concat(a.filter(function (e) {
  return e.request.isOrigin
})),
u = a.filter(function (e) {
  return ! e.request.isOrigin && ! e.request.isReturn
}).map(function (e) {
  return e.response
}),
d = a.filter(function (e) {
  return ! e.request.isReturn
}).map(function (e) {
  var t = [];
  return null != e.request.originCountries && (t = t.concat.apply(t, De(e.request.originCountries))),
  t = null != e.request.destinationCountries ? t.concat.apply(t, De(e.request.destinationCountries)) : t
}).flat(),
1 === De(new Set(d)).length ? (u.forEach(function (e) {
  return e.restriction.restrictions = e.restriction.restrictions.filter(function (e) {
    return null != e.attributes.region && ("NO_ENTRY" === e.attributes.category || "NO_RESTRICTION" === e.attributes.category || "ENTRY" === e.attributes.category || "RESTRICTED_ENTRY" === e.attributes.category || "DOMESTIC" === e.attributes.category || "HEALTH_ASSESSMENT" === e.attributes.category || "ON_ARRIVAL" === e.attributes.subCategory)
  })
}), u.forEach(function (e) {
  return e.restriction.procedures = e.restriction.procedures.filter(function (e) {
    return null != e.attributes.region
  })
})) : u.forEach(function (e) {
  return e.restriction.restrictions = e.restriction.restrictions.filter(function (e) {
    return "NO_ENTRY" === e.attributes.category || "NO_RESTRICTION" === e.attributes.category || "ENTRY" === e.attributes.category || "RESTRICTED_ENTRY" === e.attributes.category || "HEALTH_ASSESSMENT" === e.attributes.category || "ON_ARRIVAL" === e.attributes.subCategory
  })
}),
o = (o = a.filter(function (e) {
  return ! e.request.isOrigin && ! e.request.isReturn
}).map(function (e) {
  return e.response.restriction.restrictions
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e, t, r) {
  return r.map(function (e) {
    return e.id
  }).indexOf(e.id) === t
})).filter(function (t) {
  if (1 < o.filter(function (e) {
    return e.attributes.category === t.attributes.category && e.attributes.subCategory === t.attributes.subCategory
  }).length) {
    var e = null != t.attributes.region,
      r = a[0].request.originCountryCode,
      n = a[0].request.originRegionCode;
    return e = null != t.attributes.included ? t.attributes.included.some(function (e) {
      return "REGION" === e.type ? e.regionCode === n : "COUNTRY" === e.type && e.isoAlpha3 === r
    }) : e
  }
  return !0
}).filter(function (e) {
  if (null != e.attributes.region && e.attributes.included && 0 < e.attributes.included.length) {
    var t = a[0].request.originCountryCode,
      r = a[0].request.originRegionCode;
    return e.attributes.included.some(function (e) {
      return "COUNTRY" === e.type ? e.isoAlpha3 === t : null != r ? e.regionCode === r : e.countryCode === t
    })
  }
  return !0
}),
(h = a.filter(function (e) {
  return ! e.request.isOrigin && ! e.request.isReturn
})[0]).response.restriction.restrictions = o,
s = (s = a.filter(function (e) {
  return ! e.request.isOrigin && ! e.request.isReturn
}).map(function (e) {
  return e.response.restriction.procedures
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e, t, r) {
  return r.map(function (e) {
    return e.id
  }).indexOf(e.id) === t
})).filter(function (t) {
  var e = s.filter(function (e) {
      return("NO_QUARANTINE" === e.attributes.category && "NO_QUARANTINE" === t.attributes.category || "QUARANTINE" === e.attributes.category && "QUARANTINE" === t.attributes.category || "QUARANTINE" === e.attributes.category && "NO_QUARANTINE" === t.attributes.category || "NO_QUARANTINE" === e.attributes.category && "QUARANTINE" === t.attributes.category || "PPE" === e.attributes.category && "PPE" === t.attributes.category) && e.attributes.subCategory === t.attributes.subCategory
    }),
    r = e.every(function (e) {
      return null == e.attributes.regionCode
    });
  if (1 < e.length && ! r) {
    var n = null != t.attributes.region,
      i = a[0].request.originCountryCode,
      o = a[0].request.originRegionCode,
      r = e.filter(function (e) {
        return null != e.attributes.region
      })[0];
    return null == r || null == r.attributes.included || 0 < (e = r.attributes.included.filter(function (e) {
      return "ORIGIN" === e.locationType
    })).length && (n = e.some(function (e) {
      return "REGION" === e.type ? e.regionCode === o : "COUNTRY" === e.type && e.isoAlpha3 === i
    }) === (t.id === r.id)),
    n
  }
  return !0
}).filter(function (e) {
  if (null != e.attributes.region && e.attributes.included && 0 < e.attributes.included.filter(function (e) {
    return "ORIGIN" === e.locationType
  }).length) {
    var t = a[0].request.originCountryCode,
      r = a[0].request.originRegionCode,
      e = e.attributes.included.filter(function (e) {
        return "ORIGIN" === e.locationType
      });
    if (0 < e.length) 
      return e.some(function (e) {
        return "COUNTRY" === e.type ? e.isoAlpha3 === t : null != r ? e.regionCode === r : e.countryCode === t
      })
    
  }
  return !0
}),
h.response.restriction.procedures = s,
(i = i.concat(h)).sort(function (e, t) {
  return e.request.isOrigin ? -1 : 1
}),
0 < (f = a.filter(function (e) {
  return e.request.isReturn
})).length && (c = f[0], l = f.map(function (e) {
  return e.response.restriction.procedures
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e) {
  return !(null == e.attributes.region || "ON_ARRIVAL" !== e.attributes.subCategory && "BEFORE_ARRIVAL" !== e.attributes.subCategory || "QUARANTINE" !== e.attributes.category && "NO_QUARANTINE" !== e.attributes.category)
}), p = f.map(function (e) {
  return e.response.restriction.procedures
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e) {
  return !(null == e.attributes.region || "ON_ARRIVAL" !== e.attributes.subCategory && "BEFORE_ARRIVAL" !== e.attributes.subCategory || "QUARANTINE" === e.attributes.category || "NO_QUARANTINE" === e.attributes.category || "COVID_19_TEST" !== e.attributes.category && "HEALTH_ASSESSMENT" !== e.attributes.category && "RE_ENTRY_PERMIT" !== e.attributes.category && "SANITIZATION" !== e.attributes.category && "HEALTH_MEASURES" !== e.attributes.category && "DOC_REQUIRED" !== e.attributes.category)
}), d = 0 < l.length, u = f.map(function (e) {
  return e.response.restriction.procedures
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e) {
  return !(null != e.attributes.region || "ON_ARRIVAL" !== e.attributes.subCategory && "BEFORE_ARRIVAL" !== e.attributes.subCategory || "QUARANTINE" !== e.attributes.category && "NO_QUARANTINE" !== e.attributes.category)
}), h = f.map(function (e) {
  return e.response.restriction.procedures
}).reduce(function (e, t) {
  return e.concat(t)
}, []).filter(function (e) {
  return !(null != e.attributes.region || "ON_ARRIVAL" !== e.attributes.subCategory && "BEFORE_ARRIVAL" !== e.attributes.subCategory || "QUARANTINE" === e.attributes.category || "NO_QUARANTINE" === e.attributes.category || "COVID_19_TEST" !== e.attributes.category && "HEALTH_ASSESSMENT" !== e.attributes.category && "RE_ENTRY_PERMIT" !== e.attributes.category && "SANITIZATION" !== e.attributes.category && "HEALTH_MEASURES" !== e.attributes.category && "DOC_REQUIRED" !== e.attributes.category)
}), f = 0 < u.length, d ? c.response.restriction.procedures = l : f && (c.response.restriction.procedures = u), c.response.restriction.procedures =[].concat(De(c.response.restriction.procedures), De(p), De(h)), (d || f) && (i = i.concat(c))),
this.viewAdapter.renderRequirements(i, this.uiState.citizenship.countryCode),
this.endLoading(),
e.next = 59;
break;case 55: e.prev = 55,
e.t0 = e.catch(7),
this.uiState.isLoading = !1,
this._onError(e.t0);case 59:case "end":
return e.stop()}}, e, this, [[7, 55]])})), function () {return s.apply(this, arguments)})}, {key: "startLoading",value: function () {this.uiState.isLoading = !0;var e = document.getElementById("sherpa-btn-check");null != e && (e.disabled =! 0, e.classList.add("sherpa-btn--loading"))}}, {key: "endLoading",value: function () {var e;this.uiState.isLoading = !1,null == this.uiState.destination || null == this.uiState.origin || null != (e = document.getElementById("sherpa-btn-check")) && (e.disabled =! 1, e.classList.remove("sherpa-btn--loading"))}}, {key: "disableCheckNowButton",value: function () {var e = document.getElementById("sherpa-btn-check");null != e && (e.disabled =! 0)}}, {key: "_renderRequirements",value: (a = Me(regeneratorRuntime.mark(function e() {var t,r,n,i;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {case 0:
if (this.uiState.isLoading) 
  return e.abrupt("return");

e.next = 2;
break;case 2:
if (this.widgetOptions.itinerary = this.widgetOptions.itinerary || [
  {
    destinationCountry: this.uiState.destination.countryCode,
    destinationAirportCode: this.uiState.destination.airportCode,
    destinationRegionCode: this.uiState.destination.regionCode,
    departureDate: this.uiState.departureDate
  }
], null != this.uiState.destination.countryCode && (this.widgetOptions.itinerary[0].destinationCountry = this.uiState.destination.countryCode, this.widgetOptions.itinerary[0].destinationAirportCode = this.uiState.destination.airportCode, this.widgetOptions.itinerary[0].destinationRegionCode = this.uiState.destination.regionCode, this.widgetOptions.itinerary[0].departureDate = this.uiState.departureDate), t = this.widgetOptions.itinerary, r = this.uiState.citizenship, null == t || null == r) 
  return this.viewAdapter.renderRequirementsDefault(),
  this.endLoading(),
  e.abrupt("return", !1);

e.next = 12;
break;case 12:
if (e.prev = 12, this.startLoading(), this.viewAdapter.renderRequirementsLoading(), 1 === t.length && null == t[0].destinationCountry) 
  return this.viewAdapter.renderRequirementsDefault(),
  this.endLoading(),
  e.abrupt("return", !1);

e.next = 19;
break;case 19:
return n = [],
t.forEach(function (e) {
  e = {
    isOrigin: !0,
    country: e.destinationCountry,
    airportCode: e.destinationAirportCode,
    citizenship: r.countryCode,
    type: "country"
  };
  n.push(e)
}),
e.next = 23,
this.dal.fetchRequirements(n);case 23: i = e.sent,
this.viewAdapter.renderRequirements(i, this.uiState.citizenship.countryCode),
this.endLoading(),
e.next = 31;
break;case 28: e.prev = 28,
e.t0 = e.catch(12),
this._onError(e.t0);case 31:case "end":
return e.stop()}}, e, this, [[12, 28]])})), function () {return a.apply(this, arguments)})}, {key: "createIframe",value: (o = Me(regeneratorRuntime.mark(function e(t) {var r,n,i,o,a;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {case 0:
this.widgetOptions = t || {},
document.getElementById(p) || ((i = document.createElement("div")).setAttribute("id", p), document.body.appendChild(i)),
o = null != this.widgetOptions.embeddedUrl ? this.widgetOptions.embeddedUrl : "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
a = "".concat(o, "?affiliateId=").concat(t.affiliateId),
a += "&utm_source=".concat(t.placement),
a += "&utm_medium=".concat(t.affiliateId),
a += "&language=".concat(q.getLang()),
a += "&placement=".concat(I.getPlacement());
try {
  (r = I.getUtmQueryParams(t.enableUtmPassThrough)) && 0 < r.length && (n = r.join("&"), a += "&".concat(n))
} catch (e) {}(i = document.createElement("iframe")).title = "Sherpa Widget - ".concat(t.affiliateId),
i.src = a,
i.id = c,
i.allowFullscreen = !0,
i.setAttribute("sdk-version", "1.7.1"),
i.setAttribute("build-date", "2021-09-01 21:44"),
o = document.getElementById(p),
(a = document.createElement("style")).innerHTML = "".concat(ge.toString()),
o.innerHTML = "",
o.appendChild(a),
o.appendChild(i);case 22:case "end":
return e.stop()}}, e, this)})), function (e) {return o.apply(this, arguments)})}, {key: "createWidget",value: (i = Me(regeneratorRuntime.mark(function e(t) {var r,n,i,o,a,s,c,l,p,d,u,h,f,g,w,m,v,y,_,b = this;return regeneratorRuntime.wrap(function (e) {for (;;) switch (e.prev = e.next) {case 0:
return I.trackCreateWidget(t),
e.prev = 1,
this.widgetOptions = t || {},
q.setLang(this.widgetOptions.language),
this.dal.setRequirementsApiKey(this.widgetOptions.requirementsApiKey),
m = null != this.widgetOptions.mode ? this.widgetOptions.mode : "dom",
this.dal.setIntegrationMode(m),
n = null == this.widgetOptions.showEntryRequirements || this.widgetOptions.showEntryRequirements,
i = null == this.widgetOptions.showTravelRestriction || this.widgetOptions.showTravelRestriction,
0,
o = null == this.widgetOptions.showHelpBtn || this.widgetOptions.showHelpBtn,
null == this.widgetOptions.placement || this.widgetOptions.placement !== S.Mmb && this.widgetOptions.placement !== S.Confirmation || (o =! 1),
a = null == this.widgetOptions.showInputActions || this.widgetOptions.showInputActions,
s = !0,
this.widgetOptions.showAsTrip = s,
"single-trip" === this.widgetOptions.appearance && (s =! 0, this.widgetOptions.showAsTrip = s),
"destination" === this.widgetOptions.appearance && (s =! 1, this.widgetOptions.showAsTrip = s, _ = null != this.widgetOptions.showDestinationSelector && this.widgetOptions.showDestinationSelector, this.dal.setSelectDestination(_)),
c = null != this.widgetOptions.showCollapseTravelRestrictions && this.widgetOptions.showCollapseTravelRestrictions,
l = null == this.widgetOptions.showTravelRestrictionsInitiallyCollapsed || this.widgetOptions.showTravelRestrictionsInitiallyCollapsed,
p = null == this.widgetOptions.showDepartureDateSelector || this.widgetOptions.showDepartureDateSelector,
d = null == this.widgetOptions.showDestinationSelector || this.widgetOptions.showDestinationSelector,
u = null == this.widgetOptions.showOriginSelector || this.widgetOptions.showOriginSelector,
h = (null != this.widgetOptions.showPassportSelector ? this.widgetOptions : {
  hasPwLogo: !0,
  askDataConsent: !1,
  showEntryRequirements: !0,
  showTravelRestriction: !0,
  showCollapseTravelRestrictions: !1,
  showTravelRestrictionsInitiallyCollapsed: !0,
  useSearchBtn: !0,
  showAsTrip: !0,
  showHelpBtn: !0,
  showInputActions: !0,
  sdkVersion: "1.7.1",
  buildDate: "2021-09-01 21:44",
  showDepartureDateSelector: !0,
  showDestinationSelector: !0,
  showOriginSelector: !0,
  trackCustomEvents: !1,
  showQuarantineOnReturn: !1,
  enableUtmPassThrough: !0,
  enablePlacementDetection: !0,
  mode: "dom",
  iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",
  embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
  integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",
  integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",
  customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",
  requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"
}).showPassportSelector,
f = (null != this.widgetOptions.showPaperVisaProvider ? this.widgetOptions : {
  hasPwLogo: !0,
  askDataConsent: !1,
  showEntryRequirements: !0,
  showTravelRestriction: !0,
  showCollapseTravelRestrictions: !1,
  showTravelRestrictionsInitiallyCollapsed: !0,
  useSearchBtn: !0,
  showAsTrip: !0,
  showHelpBtn: !0,
  showInputActions: !0,
  sdkVersion: "1.7.1",
  buildDate: "2021-09-01 21:44",
  showDepartureDateSelector: !0,
  showDestinationSelector: !0,
  showOriginSelector: !0,
  trackCustomEvents: !1,
  showQuarantineOnReturn: !1,
  enableUtmPassThrough: !0,
  enablePlacementDetection: !0,
  mode: "dom",
  iframeUrl: "https://sherpa-widget-sandbox.joinsherpa.io",
  embeddedUrl: "https://sdk-sandbox.joinsherpa.io/sherpa-embedded.html",
  integrationScriptBaseUrl: "https://sdk-sandbox.joinsherpa.io/widget.js",
  integrationScriptUrl: "https://sdk-sandbox.joinsherpa.io/widget.js?affiliateId=sherpa",
  customEventsUrl: "https://sdk-sandbox.joinsherpa.io/event",
  requirementsApiKey: "AIzaSyCE3VJqrN2djxL2ojNLlkj1V9kLY0x_u3E"
}).showPaperVisaProvider,
g = this.widgetOptions.showPaperVisaProvider && this.widgetOptions.paperVisaProviderUrl ? this.widgetOptions.paperVisaProviderUrl : null,
w = null == this.widgetOptions.enableUtmPassThrough || this.widgetOptions.enableUtmPassThrough,
m = null == this.widgetOptions.enablePlacementDetection || this.widgetOptions.enablePlacementDetection,
_ = null != this.widgetOptions.showQuarantineOnReturn && this.widgetOptions.showQuarantineOnReturn,
this.dal.setShowEntryRequirements(n),
this.dal.setShowTravelRestriction(i),
this.dal.setShowCollapseTravelRestriction(c),
this.dal.setShowTravelRestrictionsInitiallyCollapsed(l),
this.dal.setShowSubscribe(!1),
this.dal.setShowAsTrip(s),
this.dal.setShowSubscribeBtn(!1),
this.dal.setShowHelpBtn(o),
this.dal.setShowInputActions(a),
this.dal.setEnableUtmPassThrough(w),
this.dal.setEnablePlacementDetection(m),
this.dal.setShowDepartureDateSelector(p),
this.dal.setShowDestinationSelector(d),
this.dal.setShowOriginSelector(u),
this.dal.setShowPassportSelector(h),
this.dal.setPaperVisaProvider(f, g),
this.dal.setShowQuarantineOnReturn(_),
this.uiState.citizenship = {
  type: "country",
  countryCode: t ? t.defaultNationalityCountry : ""
},
this.uiState.destination = {
  type: "country"
},
this.uiState.origin = {
  type: "country"
},
0 === (null == t || null === (r = t.itinerary) || void 0 === r ? void 0 : r.length) && (t.itinerary = void 0),
e.next = 52,
this.dal.fetchLocalization();case 52:
this.localization = e.sent,
null != t.itinerary && 0 < t.itinerary.length && (t.itinerary = this.augmentItinerary(t.itinerary), this.uiState.destination =
  { type: "country",
  countryCode: t.itinerary[0].destinationCountry,
  regionCode: t.itinerary[0].destinationRegionCode,
  airportCode: t.itinerary[0].destinationAirportCode
}, null != this.uiState.destination.regionCode && null == this.uiState.destination.airportCode ? (this.uiState.destination.type = "region", null == this.uiState.destination.countryCode && null != (v = q.getRegions().find(function (e) {
  return e.regionCode === b.uiState.destination.regionCode
})) && (this.uiState.destination.countryCode = v.isoAlpha3)) : null != this.uiState.destination.regionCode && null != this.uiState.destination.airportCode && (this.uiState.destination.type = "airport"), s && (this.uiState.origin =
  { type: "country",
  countryCode: this.widgetOptions.itinerary[0].originCountry,
  regionCode: this.widgetOptions.itinerary[0].originRegionCode,
  airportCode: this.widgetOptions.itinerary[0].originAirportCode
}, null != this.uiState.origin.regionCode && null == this.uiState.origin.airportCode ? (this.uiState.origin.type = "region", null == this.uiState.origin.countryCode && null != (y = q.getRegions().find(function (e) {
  return e.regionCode === b.uiState.origin.regionCode
})) && (this.uiState.origin.countryCode = y.isoAlpha3)) : null != this.uiState.origin.regionCode && null != this.uiState.origin.airportCode && (this.uiState.origin.type = "airport"), this.uiState.departureDate = this.widgetOptions.itinerary[0].departureDate, this.uiState.arrivalDate = this.widgetOptions.itinerary[0].arrivalDate)),
this.viewAdapter.initiateWidgetDom(this.localization, t),
pe.translation = this.localization,
null != (_ = document.getElementById("sherpa-departure-date")) && (_.addEventListener("input", this.onDepartureDateChange), he.isIE() && (_.addEventListener("keydown", function (e) {
  "Tab" !== e.key && e.preventDefault()
}), he.focusOnCalendarEvent())),
e.next = 63;
break;case 60: e.prev = 60,
e.t0 = e.catch(1),
this._onError(e.t0);case 63:
this.uiState.citizenship.countryCode = t.defaultNationalityCountry,
this.widgetOptions.showAsTrip ? this._renderTrip() : this._renderRequirements();case 65:case "end":
return e.stop()}}, e, this, [[1, 60]])})), function (e) {return i.apply(this, arguments)})}, {key: "onSdkEvent",value: function (e) {var t,r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d.Dom;switch (e.type === K.EmitEvents.iframeStartLoading ? (t = e.data.selectedProductId, this.viewAdapter.showProductLoading(t)) : this.viewAdapter.hideProductsLoading(), e.type) {case K.EmitEvents.iframeStartLoading: r === d.Iframe ? K.messageChild(K.EmitEvents.iframeStartLoading) : I.iframeLoading();break;case K.EmitEvents.iframeSuccess: r === d.Iframe ? K.messageChild(K.EmitEvents.iframeSuccess) : I.iframeLoaded();break;case K.EmitEvents.iframeFailure: r === d.Iframe ? K.messageChild(K.EmitEvents.iframeFailure) : (I.iframeError(), this.endLoading(), this.viewAdapter.renderRequirementsError(), K.iframeEventsAdapter.closeIframe());break;case K.EmitEvents.iframeResized:if (r === d.Iframe) {if (! e.data || ! e.data.height && 0 < e.data.height) 
break;var n = e.data.height;this.viewAdapter.resizeWidgetFrame(n)}break;case K.EmitEvents.embeddedSdkReady: K.messageChild(K.EmitEvents.createWidget, this.widgetOptions);break;case K.EmitEvents.createWidget:var i = e.data;i.mode = d.Embedded,this.createWidget(i);break;case K.EmitEvents.openApplicationWidget: r === d.Iframe && ((n = e.data.checkoutOptions || {}).mode = r, i = e.data.specialCheckoutOptions || {}, Fe.openCheckout(n, i))}}}, {key: "_onError",value: function (e) {console.warn(e),I.sendEvent(I.cat.widgetError, e.message, e.stack, null, this.uiState),this.endLoading(),this.viewAdapter.renderRequirementsError()}}, {key: "augmentItinerary",value: function (e) {var a = this;return e.map(function (e) {var t,r,n,i = {};0 === (null == e || null === (t = e.originAirportCode) || void 0 === t ? void 0 : t.length) && (e.originAirportCode = null),0 === (null == e || null === (r = e.destinationAirportCode) || void 0 === r ? void 0 : r.length) && (e.destinationAirportCode = null),null != e.originCountry && a.isValid(e.originCountry) && 2 === e.originCountry.length && (e.originCountry = a.alpha2ToAlpha3(e.originCountry)),null != e.originAirportCode && (null != (r = q.findByAirportCode(e.originAirportCode)) && 1 === r.length ? (n = r[0], null != e.originCountry && n.cc !== e.originCountry ? (i.originCountry = void 0, i.originAirportCode = void 0) : (i.originCountry = n.cc, i.originAirportCode = n.i, i.originRegionCode = n.r)) : I.sendEvent(I.cat.widgetError, "originAirportCode [".concat(e.originAirportCode, "] not found"), null, null, {airportCode: e.originAirportCode})),e.destinationCountry = e.destinationCountry || e.country,null != e.destinationCountry && a.isValid(e.destinationCountry) && 2 === e.destinationCountry.length && (e.destinationCountry = a.alpha2ToAlpha3(e.destinationCountry)),null != e.destinationAirportCode && (null != (n = q.findByAirportCode(e.destinationAirportCode)) && 1 === n.length ? (o = n[0], null != e.destinationCountry && o.cc !== e.destinationCountry ? (i.destinationCountry = void 0, i.destinationAirportCode = void 0) : (i.destinationCountry = o.cc, i.destinationAirportCode = o.i, i.destinationRegionCode = o.r)) : I.sendEvent(I.cat.widgetError, "destinationAirportCode [".concat(e.destinationAirportCode, "] not found"), null, null, {airportCode: e.destinationAirportCode}));var o = b()().format("YYYY-MM-DD");return null != e.departureDate && (o = b()(e.departureDate, "YYYY-MM-DD").format("YYYY-MM-DD")),i.departureDate = o,null != e.arrivalDate && (i.arrivalDate = b()(e.arrivalDate, "YYYY-MM-DD").format("YYYY-MM-DD")),Ne(Ne({}, e), i)})}}, {key: "alpha2ToAlpha3",value: function (t) {return this.localization.countries.find(function (e) {return e.alpha_2 === t}).alpha_3}}, {key: "isValid",value: function (t) {return null != this.localization.countries.find(function (e) {return e.alpha_2 === t || e.alpha_3 === t})}}]) && Pe(e.prototype, t),n && Pe(e, n),r}();function qe(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}var ze,He,Ve,Ge = new K("dom"),Fe = function () {function e() {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, e)}var t,r,n;return t = e,n = [{key: "openCheckout",value: function (e) {var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};if (Ge.setMode(e.mode), null != e.placement && "unknown" !== e.placement) I.setPlacement(e.placement); else try {I.determinePlacement(window.location.pathname, e.enablePlacementDetection)} catch (e) {}switch (e.placement = I.getPlacement(), e.mode) {case d.Embedded: I.load(e.affiliateId);break;case d.Dom:case d.Iframe:}if (t.askDataConsent) new pe(Ge).open(e); else switch (e.mode) {case d.Embedded: I.trackOpenCheckout(e, t),I.trackProductClick(e, t, e.placement),Ge.messageParent(K.EmitEvents.openApplicationWidget, {
checkoutOptions: e,
mode: "iframe"});break;case d.Dom: I.trackOpenCheckout(e, t),I.trackProductClick(e, t, e.placement),Ge.openCheckout(e);break;case d.Iframe:default: Ge.openCheckout(e)}}}, {key: "createWidget",value: function (t) {null != t.language && q.setLang(t.language),Ge.setMode(t.mode),Ge.initListener({_onSdkEvent: function (e) {return r.onSdkEvent(e, t.mode)}});var r = new je(Ge, t.affiliateId);switch (null == t.mode && (t.mode = "dom"), t.mode === d.Embedded && window.self === window.top && (t.mode = d.Dom), t.mode) {case d.Iframe:if (null != t.placement && "unknown" !== t.placement) I.setPlacement(t.placement); else try {
I.determinePlacement(window.location.pathname, t.enablePlacementDetection)} catch (e) {}t.placement = I.getPlacement(),r.createIframe(t);break;case d.Embedded: I.load(t.affiliateId),t.reload && r.createWidget(t);break;case d.Dom:default:if (null != t.placement && "unknown" !== t.placement) I.setPlacement(t.placement); else try {
I.determinePlacement(window.location.pathname, t.enablePlacementDetection)} catch (e) {}t.placement = I.getPlacement(),I.load(t.affiliateId),r.createWidget(t)}}}],(r = null) && qe(t.prototype, r),n && qe(t, n),e}();Ve = "sandbox",(He = "env") in (ze = Fe) ? Object.defineProperty(ze, He, {value: Ve,enumerable: !0,configurable: !0,writable: !0}) : ze[He] = Ve;var Ye = r(57),Ke = r(4),We = r(18),Xe = r(1);function Je(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}function Ze(e, t, r) {return t in e ? Object.defineProperty(e, t, {value: r,enumerable: !0,configurable: !0,writable: !0}) : e[t] = r,e}var $e = function () {function t(e) {var n = this;!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, t),Ze(this, "elements", []),Ze(this, "mode", Ke.IntegrationMode.Iframe),Ze(this, "targetDomain", Object(Xe.f)()),Ze(this, "elementId", void 0),Ze(this, "handlePostMessageEvents", function (e) {var t,r = Object(Xe.j)(e.data);null != r.source && (r.scope = r.source),null != r.data && null !== (t = r.scope) && void 0 !== t && t.startsWith("@joinsherpa/") && (t = n.elements.find(function (e) {return e.id === r.elementId}), e.origin === (null == t ? void 0 : t.originDomain) && "@joinsherpa/v2" === (null == r ? void 0 : r.scope) && Object(We.b)(r, t.id))}),Ze(this, "onSdkLoaded", function () {n.mode === Ke.IntegrationMode.Embedded && Object(We.g)(n.elementId, Ke.EventMessageType.sdkLoaded),Object(We.a)(n.elementId, Ke.EventMessageType.sdkLoaded)}),this.mode = (null == e ? void 0 : e.mode) || this.mode,Object(Xe.g)() && this.initializeAsEmbeddedElement(),Object(Xe.h)(window.$sherpa, this.onSdkLoaded)}var e,r,n;return e = t,(r =[{key: "addElement",value: function (e) {0 === this.elements.length && Object(We.e)(this.handlePostMessageEvents),this.elements.push(e)}}, {key: "sendIntent",value: function (e, t) {Object(We.h)(this.elementId, e, t)}}, {key: "initializeAsEmbeddedElement",value: function () {var e,t = this;this.mode = Ke.IntegrationMode.Embedded,this.elementId = null === (e = document.getElementById(Xe.a)) || void 0 === e ? void 0 : e.dataset.elementId,Object(Xe.i)(function (e) {Object(We.g)(t.elementId, Ke.EventMessageType.iframeResized, e)})}}]) && Je(e.prototype, r),n && Je(e, n),t}();function Qe(e, t) {for (var r = 0; r < t.length; r++) {var n = t[r];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable =! 0),Object.defineProperty(e, n.key, n)}}var et = function () {function i() {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, i)}var e,t,r;return e = i,r = [{key: "createElement",value: function (e, t) {rt(t);var r,n = i.getAppConfig();switch (e) {case "map": r = Object(Ye.createMapElement)(tt, n, t);break;case "trip": r = Object(Ye.createTripElement)(tt, n, t);break;case "application": r = Object(Ye.createApplicationElement)(tt, n, t);break;default:console.error("Element ".concat(e, " unkown."))}return r}}, {key: "getElement",value: function (t) {return tt.elements.find(function (e) {return e.id === t})}}, {key: "sendIntent",value: function (e, t) {tt.sendIntent(e, t)}}, {key: "getAppConfig",value: function () {var e = {"custom": {},"affiliateId": "sherpa","fallbackLanguage": "en-US","variables": {"mapElementUrl": "https://apps-sandbox.joinsherpa.io/map","targetDomain": "","originDomain": "","submissionApiUrl": "https://submission-api-sandbox.joinsherpa.io","requirementsApiKey": "AIzaSyDgOi4B7hKkPonE9pqPuSpx7L9dsam8YVE","requirementsApiUrl": "https://requirements-api.sandbox.joinsherpa.com","mapboxAccessToken": "pk.eyJ1IjoiaXNoYXJrbyIsImEiOiJjazdxNnd4OHgwMGgwM21wZXllNXExaHFtIn0.W6smTmU36DDhSiUwil6H9w","submissionApiKey": "AIzaSyBU86KBedJrQGwHnNwcCauR0JUrtkG0eNA","tripElementUrl": "https://apps-sandbox.joinsherpa.io/trip","environment": "sandbox","applicationElementUrl": "https://sherpa-widget-sandbox.joinsherpa.io","sherpaSdkUrl": null,"gtmId": "GTM-PJPT3MW"},"availableLanguages": ["ar-SA","da-DK","de-DE","en-CA","en-GB","en-US","es-ES","es-XL","fi-FI","fr-CA","fr-FR","is-IS","it-IT","ja-JP","ko-KR","lv-LV","nl-NL","no-NO","pl-PL","pt-BR","pt-PT","ru-RU","sv-SE","tr-TR","zh-CN","zh-TW"],"description": null,"appId": "sherpa-elements","worldView": null,"affiliateName": null,"features": {"map": {"showMapLegend": true,"fullscreen": false,"enableVisaECommerce": true,"availableDomesticCountries": ["ALL"],"showFullscreenToggle": false,"showVisaPrice": null,"showFlightsTo": true,"travelRestrictionsEnabled": true,"covidTestingLocatorEnabled": true,"showFilterPassport": true,"showFilterTripType": true,"showVisaInformation": true,"showCovidTestingSitesInActions": true,"showNavigation": false,"showFilters": true,"enablePatternLayer": true,"showVaccinationFilter": true},"webapp": {"defaultFullyVaccinated": null,"showWelcomeOnInit": null,"showFullVaccinatedTypes": true,"showConnections": true,"showFutureTravelRestrictions": null,"showTravelRestrictions": true,"whiteLabel": true,"showVisas": true,"showNationality": true,"loginEnabled": null,"showTravelAgent": null,"showMapLink": true,"showLogo": true},"trip": {"showFilterVaccinated": true,"enableSegmentEditor": true,"showFilters": true,"showTravelRestrictionsDisclaimer": false,"showFilterPassport": true,"showVisaPrice": null,"showVisaInformation": true,"enableVisaECommerce": true,"showSegments": true,"travelRestrictionsEnabled": true,"showTitle": true,"showViewAllLink": true,"showFilterConnection": true,"visasEnabled": true,"layouts": {
"visaOnly": false,
"compact": false,
"accordion": true,
"expanded": false}}},"appName": "webapp","language": "en-US","defaultNationality": "USA"};return "string" == typeof e ? {appId: "sherpa-elements",affiliateId: "sherpa",language: "en-US",availableLanguages: ["en-US", "es-ES"],fallbackLanguage: "en-US",features: {map: {showFilters: !1,covidTestingLocatorEnabled: !1,showCovidTestingSitesInActions: !0,showMapLegend: !1,showNavigation: !1,travelRestrictionsEnabled: !1},trip: {layouts: {},enableVisaECommerce: !0,showVisaInformation: !0,visasEnabled: !0,showFilterPassport: !0,showFilterNationality: !0,showSegments: !0,enableSegmentEditor: !0}},styling: {},variables: {environment: "staging",mapboxAccessToken: "pk.eyJ1IjoiaXNoYXJrbyIsImEiOiJjazdxNnd4OHgwMGgwM21wZXllNXExaHFtIn0.W6smTmU36DDhSiUwil6H9w",sherpaSdkUrl: "https://sdk-staging.joinsherpa.io/widget.js",gtmId: "GTM-PJPT3MW",mapElementUrl: "http://localhost:4200/map",tripElementUrl: "http://localhost:4200/trip",applicationElementUrl: "https://sherpa-widget-staging.joinsherpa.io",requirementsApiUrl: "https://requirements-api-staging.joinsherpa.io",requirementsApiKey: "AIzaSyACnJQq9mKiQEQ5ls881TYT64O8fMOiOls",targetDomain: "http://localhost:4200",originDomain: "http://localhost:4200"}} : e}}],(t = null) && Qe(e.prototype, t),r && Qe(e, r),i}(),tt = new $e,rt = function (e) {null == e || Ke.placements.includes(e.placement) || console.warn("[sherpa-sdk] Placement is missing. Use any of [".concat(Ke.placements.join(", "), "]. \n\r For more info see: https://docs.joinsherpa.io/docs/map-element"))};function nt(e) {return(nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}function it(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}function ot(e, t) {if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, {constructor: {value: e,writable: !0,configurable: !0}}),t && at(e, t)}function at(e, t) {return(at = Object.setPrototypeOf || function (e, t) {return e.__proto__ = t,e})(e, t)}function st(r) {var n = function () {if ("undefined" == typeof Reflect || !Reflect.construct) return !1;if (Reflect.construct.sham) return !1;if ("function" == typeof Proxy) return !0;try {return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),!0} catch (e) {return !1}}();return function () {var e,t = ct(r);return e = n ? (e = ct(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments),t = this,!(e = e) || "object" !== nt(e) && "function" != typeof e ? function (e) {if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t) : e}}function ct(e) {return(ct = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {return e.__proto__ || Object.getPrototypeOf(e)})(e)}var lt = function () {ot(t, Fe);var e = st(t);function t() {return it(this, t),e.apply(this, arguments)}return t}(),pt = function () {ot(t, et);var e = st(t);function t() {return it(this, t),e.apply(this, arguments)}return t}() }]);
