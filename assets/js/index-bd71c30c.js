import {S as A, J as ee, K as J, T as u, U as b, $ as Z, a0 as fe, V as n, a4 as U, X as v, C as c, v as G, H as le, am as re, r as _, _ as ce, a5 as C, Y as T, l as pe, R as ge, E as x, B as X, Z as H, a9 as S, a2 as E, a1 as $, F as he, at as ye, ae as se, aZ as be, a_ as we, au as ke, a7 as K, W as oe, w as Se, a$ as Ce, ag as z, ah as $e, aW as Le, b0 as Ie, b1 as Ae, b2 as De, b3 as Te, b4 as Be, b5 as Ee, b6 as Pe, b7 as Re, b8 as xe, b9 as Ne, ba as Ve, bb as Fe, bc as Me, bd as Ue, be as Ge, bf as Oe, bg as qe, bh as ze, bi as Ke, bj as He, bk as Ye, bl as je, bm as We, bn as Xe, bo as Je, bp as Ze, bq as Qe, br as et, bs as tt, bt as at, bu as st, bv as ot, bw as nt, bx as it, by as lt, bz as rt, bA as ct, bB as ut, bC as dt, bD as vt, bE as _t} from "./modules-37155226.js";
import {_ as N, G as ue, g as B, x as mt, F as te, dq as de, dr as ft, n as Q, u as pt, S as ve, a as gt, ds as ht, dt as yt, du as bt, dv as wt, l as kt, a_ as St, a$ as Ct, R as _e, dw as ne, I as $t} from "./page-activity-f933121a.js";
import "./native/index-9a97a253.js";
import "./en-0c6850ab.js";
import "./rus-76b9a6ea.js";
import "./vi-d1006bf3.js";
import "./id-c40b4de7.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-e8a5e3b0.js";
import "./bra-f64fcbc9.js";
import "./my-04066c3e.js";
import "./bdt-d8f19d0c.js";
import "./zh-b8834b2c.js";
import "./pak-748a9e8f.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        o(a);
    new MutationObserver(a=>{
        for (const i of a)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(a) {
        const i = {};
        return a.integrity && (i.integrity = a.integrity),
        a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function o(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const i = s(a);
        fetch(a.href, i)
    }
}
)();
const Lt = {
    class: "tabbar__container"
}
  , It = ["onClick"]
  , At = A({
    __name: "index",
    setup(t) {
        const e = ee()
          , s = J();
        async function o(i) {
            await e.push({
                name: i
            })
        }
        const a = [{
            name: "home"
        }, {
            name: "activity"
        }, {
            name: "promotion"
        }, {
            name: "wallet"
        }, {
            name: "main"
        }];
        return (i,l)=>(u(),
        b("div", Lt, [(u(),
        b(Z, null, fe(a, (r,m)=>n("div", {
            class: U(["tabbar__container-item", {
                active: r.name === c(s).name
            }]),
            key: r + "" + m,
            onClick: f=>o(r.name)
        }, [n("div", {
            class: U([r.name])
        }, v(i.$t(r.name)), 3)], 10, It)), 64))]))
    }
});
const Dt = N(At, [["__scopeId", "data-v-df3dcb90"]]);
function Tt() {
    const t = ue()
      , e = ()=>{
        document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0)
    }
    ;
    G(()=>{
        document.addEventListener("visibilitychange", e)
    }
    ),
    le(()=>{
        document.removeEventListener("visibilitychange", e)
    }
    )
}
const Bt = A({
    __name: "Customer",
    setup(t) {
        re(d=>({
            "17a7a9f6": q.value
        }));
        const e = _(!1)
          , s = _({
            x: 0,
            y: 0
        })
          , o = _(0)
          , a = _(0)
          , i = _(0)
          , l = _(0)
          , r = _(0)
          , m = _(0)
          , f = _();
        let p, V, F, D;
        const P = ee();
        function O() {
            L(p, V, F, D) || P.push({
                name: "CustomerService"
            })
        }
        G(()=>{
            f.value = document.getElementById("customerId")
        }
        );
        function M(d) {
            e.value = !0;
            var h;
            d.touches ? h = d.touches[0] : h = d,
            s.value.x = h.clientX,
            s.value.y = h.clientY,
            o.value = f.value.offsetLeft,
            a.value = f.value.offsetTop,
            p = d.clientX,
            V = d.clientY
        }
        function g(d) {
            if (e.value) {
                var h, I = document.getElementById("customerId"), R = I.clientWidth, Y = I.clientHeight, y = document.documentElement.clientHeight, k = document.documentElement.clientWidth;
                d.touches ? h = d.touches[0] : h = d,
                i.value = h.clientX - s.value.x,
                l.value = h.clientY - s.value.y,
                r.value = o.value + i.value,
                m.value = a.value + l.value,
                r.value <= 0 && (r.value = 0),
                m.value <= 0 && (m.value = 0),
                r.value >= k - R && (r.value = k - R),
                m.value >= y - Y && (m.value = y - Y),
                f.value.style.left = r.value + "px",
                f.value.style.top = m.value + "px",
                document.addEventListener("touchmove", function() {
                    d.preventDefault()
                }, !1)
            }
            d.stopPropagation(),
            d.preventDefault()
        }
        function w(d) {
            e.value = !1,
            F = d.clientX,
            D = d.clientY
        }
        function L(d, h, I, R) {
            return !(Math.sqrt((d - I) * (d - I) + (h - R) * (h - R)) <= 1)
        }
        const q = _("bahnschrift");
        return (d,h)=>{
            const I = ce("lazy");
            return u(),
            b("div", {
                class: "customer",
                onClick: O,
                onMousedown: M,
                onTouchstart: M,
                onMousemove: g,
                onTouchmove: g,
                onMouseup: w,
                id: "customerId"
            }, [C(n("img", null, null, 512), [[I, c(B)("home", "icon_sevice")]])], 32)
        }
    }
});
const Et = {
    key: 0
}
  , Pt = ["src"]
  , Rt = A({
    __name: "StartPage",
    setup(t) {
        const e = "lottery82"
          , s = {}.VITE_STARTEXT || "";
        return (o,a)=>(u(),
        b("div", {
            class: U(["start-page", [c(e)]])
        }, [["lottery82"].includes(c(e)) ? T("", !0) : (u(),
        b("div", Et, [n("div", {
            class: U(["dice", [c(e)]])
        }, null, 2), n("p", null, v(c(s) || o.$t("fairAndSafe")), 1), n("p", null, v(o.$t("quickWithdraw")), 1), n("img", {
            class: U(["logo", [c(e)]]),
            src: c(B)("home/StartPage", c(mt)())
        }, null, 10, Pt)]))], 2))
    }
});
const xt = N(Rt, [["__scopeId", "data-v-42c40576"]])
  , Nt = {
    class: "header"
}
  , Vt = {
    class: "title"
}
  , Ft = {
    class: "tip"
}
  , Mt = {
    class: "container"
}
  , Ut = {
    class: "footer"
}
  , Gt = A({
    __name: "dialog",
    setup(t) {
        const e = ee()
          , s = J()
          , o = _(!1)
          , {store: a, closeFirstSave: i} = te()
          , {ActiveSotre: l, getFirstRechargeList: r} = de()
          , m = pe(new Date).format("YYYY-MM-DD")
          , f = ge("firstSave", null)
          , p = x(()=>f.value == m)
          , V = ()=>{
            p.value ? (f.value = "",
            localStorage.removeItem("firstSave")) : f.value = m
        }
          , F = ()=>{
            o.value = !1,
            i()
        }
          , D = ["activity", "home", "main", "wallet", "promotion"];
        X(()=>s.name, g=>{
            D.includes(s.name) && P()
        }
        );
        const P = ()=>{
            f.value != m && r().then(g=>{
                if (!g.length) {
                    o.value = !1,
                    i();
                    return
                }
                const w = g.find(L=>L.isFinshed);
                w && (l.value.isShowFirstSaveDialog = !1),
                w || (o.value = !0)
            }
            )
        }
          , O = ()=>{
            o.value = !1,
            i(!0),
            e.push({
                name: "FirstRecharge"
            })
        }
          , M = ()=>{
            o.value = !1,
            i(!0),
            e.push({
                name: "Recharge"
            })
        }
        ;
        return G(()=>{
            D.includes(s.name) && P()
        }
        ),
        (g,w)=>{
            const L = H("van-dialog");
            return u(),
            S(L, {
                show: o.value,
                "onUpdate:show": w[0] || (w[0] = q=>o.value = q),
                className: "firstSaveDialog"
            }, {
                title: E(()=>[n("div", Nt, [n("div", Vt, v(g.$t("firstDialogH")), 1), n("div", Ft, v(g.$t("firstDialogTip")), 1)])]),
                footer: E(()=>[n("div", Ut, [n("div", {
                    class: U(["active", {
                        a: p.value
                    }]),
                    onClick: V
                }, v(g.$t("noTipToday")), 3), n("div", {
                    class: "btn",
                    onClick: O
                }, v(g.$t("activity")), 1)])]),
                default: E(()=>[n("div", Mt, [$(ft, {
                    list: c(l).FirstRechargeList,
                    onGorecharge: M
                }, null, 8, ["list"])]), n("div", {
                    class: "close",
                    onClick: F
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Ot = N(Gt, [["__scopeId", "data-v-f482462e"]])
  , qt = {
    class: "dialog-window"
}
  , zt = {
    class: "dialog-wrapper"
}
  , Kt = {
    class: "dialog-title"
}
  , Ht = {
    class: "dialog-content"
}
  , Yt = {
    class: "dialog-window"
}
  , jt = {
    class: "dialog-wrapper"
}
  , Wt = {
    class: "dialog-title"
}
  , Xt = {
    class: "dialog-tips"
}
  , Jt = {
    class: "dialog-content"
}
  , Zt = {
    class: "dialog-tips",
    style: {
        "margin-bottom": "0"
    }
}
  , Qt = {
    class: "dialog-window"
}
  , ea = {
    class: "dialog-wrapper"
}
  , ta = {
    class: "dialog-tips",
    style: {
        "margin-top": "10px"
    }
}
  , aa = {
    class: "dialog-title",
    style: {
        "margin-top": "0"
    }
}
  , sa = {
    class: "dialog-tips"
}
  , oa = {
    class: "dialog-content"
}
  , na = A({
    __name: "AllPageDialog",
    setup(t) {
        J();
        const {ActiveSotre: e} = de()
          , {store: s, closeInvite: o, showFirstSave: a, onReturnAwards: i} = te();
        return (l,r)=>{
            const m = H("van-dialog")
              , f = ce("lazy");
            return u(),
            b(Z, null, [c(a) ? (u(),
            S(Ot, {
                key: 0
            })) : T("", !0), $(m, {
                show: c(e).showReceiveDialog,
                "onUpdate:show": r[1] || (r[1] = p=>c(e).showReceiveDialog = p),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: E(()=>[n("div", qt, [n("div", zt, [C(n("img", null, null, 512), [[f, c(B)("activity/DailyTask", "confirmationReceived")]]), n("div", Kt, v(l.$t("awardsReceived")), 1), n("div", Ht, [C(n("img", null, null, 512), [[f, c(B)("activity/DailyTask", "amountIcon")]]), n("span", null, v(c(Q)(c(e).receiveAmount)), 1)]), n("div", {
                    class: "dialog-btn",
                    onClick: r[0] || (r[0] = p=>c(e).showReceiveDialog = !1)
                }, v(l.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), $(m, {
                show: c(s).invite,
                "onUpdate:show": r[3] || (r[3] = p=>c(s).invite = p),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: E(()=>[n("div", Yt, [n("div", jt, [C(n("img", null, null, 512), [[f, c(B)("activity/DailyTask", "confirmationReceived")]]), n("div", Wt, v(l.$t("inviteTips")), 1), n("p", Xt, v(l.$t("inviteAmount")), 1), n("div", Jt, [n("span", Zt, v(l.$t("commissionAmount")), 1), n("span", null, v(c(Q)(c(s).rebateAmount)), 1)]), n("div", {
                    class: "dialog-btn",
                    onClick: r[2] || (r[2] = p=>c(o)())
                }, v(l.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"]), $(m, {
                show: c(s).oldUser,
                "onUpdate:show": r[5] || (r[5] = p=>c(s).oldUser = p),
                "show-confirm-button": !1,
                "close-on-click-overlay": !0,
                className: "noOverHidden"
            }, {
                default: E(()=>[n("div", Qt, [n("div", ea, [C(n("img", null, null, 512), [[f, c(B)("activity/DailyTask", "confirmationReceived")]]), n("p", ta, v(l.$t("oldPromptTip")), 1), n("div", aa, v(l.$t("oldPrompt")), 1), n("p", sa, v(l.$t("oldPromptGift")), 1), n("div", oa, [n("span", null, v(c(Q)(c(s).returnAwards)), 1)]), n("div", {
                    class: "dialog-btn",
                    onClick: r[4] || (r[4] = p=>c(i)())
                }, v(l.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const ia = N(na, [["__scopeId", "data-v-1f9bf73d"]])
  , la = A({
    __name: "App",
    setup(t) {
        re(y=>({
            "95743e00": L.value
        }));
        const {openAll: e} = te()
          , s = kt()
          , o = _(!1)
          , a = _(!1)
          , i = J()
          , l = pt()
          , r = ve()
          , {locale: m} = he()
          , f = ue()
          , p = _(!1)
          , V = x(()=>i.meta.tabBar)
          , F = x(()=>!["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C"].includes(i.path))
          , D = _(0)
          , P = _(Math.floor(Math.random() * 1e4))
          , O = x(()=>i.name + P.value)
          , M = ()=>{
            s.on("changeKeepAliveKey", ()=>{
                P.value = Math.floor(Math.random() * 1e4)
            }
            )
        }
        ;
        sessionStorage.getItem("isload") ? o.value = !1 : (a.value = !0,
        sessionStorage.setItem("isload", a.value.toString()),
        o.value = !0),
        r.getHomeSetting(),
        X(()=>r.getAreacode, y=>{
            y && l.setNumberType(y.substring(1))
        }
        ),
        X(()=>r.getDL, y=>{
            m.value = y,
            f.updateLanguage(y),
            St(y),
            Ct(_e.global.t)
        }
        ),
        setTimeout(()=>{
            o.value = !1
        }
        , 2e3);
        const g = _(!1)
          , w = gt();
        w.$subscribe((y,k)=>{
            g.value = k.isLoading,
            w.setLoading(g.value)
        }
        );
        const L = _("bahnschrift");
        let q = ht()
          , d = r.getLanguage
          , h = yt(q, d);
        const I = async y=>{
            const k = [{
                title: "vi",
                fontStyle: "bahnschrift"
            }, {
                title: "else",
                fontStyle: "'Roboto', 'Inter', sans-serif"
            }]
              , j = k.findIndex(W=>W.title == h);
            j >= 0 ? L.value = k[j].fontStyle : L.value = k[k.length - 1].fontStyle
        }
          , R = ()=>{
            s.on("keyChange", ()=>{
                D.value++
            }
            ),
            s.on("changeIsGame", ()=>{
                p.value = !p.value,
                g.value = !g.value
            }
            )
        }
          , Y = ()=>{
            s.off("keyChange"),
            s.off("changeKeepAliveKey"),
            s.off("changeIsGame")
        }
        ;
        return l.setNumberType(r.getAreacode.substring(1)),
        I(),
        G(()=>{
            bt() && wt(),
            e(),
            Y(),
            R(),
            M()
        }
        ),
        Tt(),
        (y,k)=>{
            const j = H("LoadingView");
            return u(),
            b(Z, null, [$(j, {
                loading: g.value,
                type: "loading",
                isGame: p.value
            }, {
                default: E(()=>[(u(),
                S(c(be), {
                    key: D.value
                }, {
                    default: E(({Component: W})=>[(u(),
                    S(ye, {
                        max: 1
                    }, [c(i).meta.keepAlive ? (u(),
                    S(se(W), {
                        key: O.value
                    })) : T("", !0)], 1024)), c(i).meta.keepAlive ? T("", !0) : (u(),
                    S(se(W), {
                        key: 0
                    }))]),
                    _: 1
                })), F.value ? (u(),
                S(Bt, {
                    key: 0
                })) : (u(),
                S(c(we), {
                    key: 1,
                    license: "15861567"
                })), V.value ? (u(),
                S(Dt, {
                    key: 2
                })) : T("", !0)]),
                _: 1
            }, 8, ["loading", "isGame"]), o.value ? (u(),
            S(xt, {
                key: 0
            })) : T("", !0), $(ia)], 64)
        }
    }
});
const ra = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-debounce: value must be an array that includes a function and a number");
        let s = null;
        const o = e.value[0]
          , a = e.value[1];
        t.__handleClick__ = function() {
            s && clearTimeout(s),
            s = setTimeout(()=>{
                o()
            }
            , a || 500)
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , ca = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-throttle: value must be an array that includes a function and a number");
        let s = null;
        const o = e.value[0]
          , a = e.value[1];
        t.__handleClick__ = function() {
            s && clearTimeout(s),
            t.disabled || (t.disabled = !0,
            o(),
            s = setTimeout(()=>{
                t.disabled = !1
            }
            , a || 500))
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , ua = {
    mounted(t, e) {
        t.addEventListener("input", s=>{
            const a = t.value.replace(/\D+/g, "");
            t.value = a,
            e.value = a
        }
        )
    }
}
  , da = t=>({
    beforeMount: (e,s)=>{
        e.classList.add("ar-lazyload");
        const {value: o} = s;
        e.dataset.origin = o,
        t.observe(e)
    }
    ,
    updated(e, s) {
        e.dataset.origin = s.value,
        t.observe(e)
    },
    unmounted(e, s) {
        t.unobserve(e)
    },
    mounted(e, s) {
        t.observe(e)
    }
})
  , va = {
    mounted(t, e) {
        let s = 0;
        const o = e.value && e.value.wait ? e.value.wait : 3e3
          , a = i=>{
            const l = Date.now();
            l - s >= o && (s = l,
            e.value && e.value.handler && e.value.handler(i))
        }
        ;
        t.addEventListener("click", a),
        t._throttleClickCleanup = ()=>{
            t.removeEventListener("click", a)
        }
    },
    unmounted(t) {
        t._throttleClickCleanup && t._throttleClickCleanup(),
        delete t._throttleClickCleanup
    }
}
  , _a = {
    mounted(t, e) {
        const {value: s} = e;
        let o = ke("permission", null);
        o.value === null || !s || (o && (o = JSON.parse(o.value)),
        o && o[s] === !1 && (t.style.display = "none"))
    }
}
  , ie = {
    debounce: ra,
    throttle: ca,
    onlyNum: ua,
    throttleClick: va,
    haspermission: _a
}
  , ma = {
    install: function(t) {
        Object.keys(ie).forEach(s=>{
            t.directive(s, ie[s])
        }
        );
        const e = new IntersectionObserver(s=>{
            s.forEach(o=>{
                if (o.isIntersecting) {
                    const a = o.target;
                    a.src = a.dataset.origin || B("images", "avatar"),
                    a.onerror = ()=>{
                        let i = a.dataset.img;
                        a.src = i || B("images", "avatar"),
                        a.style.objectFit = "contain"
                    }
                    ,
                    a.classList.remove("ar-lazyload"),
                    e.unobserve(a)
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -50px 0px"
        });
        t.directive("lazy", da(e))
    }
}
  , fa = {
    class: "navbar__content"
}
  , pa = {
    key: 0,
    class: "backIcon"
}
  , ga = {
    class: "navbar__content-center"
}
  , ha = {
    class: "navbar__content-title"
}
  , ya = A({
    __name: "NavBar",
    props: {
        title: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Boolean,
            default: !0
        },
        leftArrow: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "linear-gradient(90deg, #CE0204 0%, #F2403A 100%)"
        },
        classN: {
            type: String,
            default: ""
        },
        headLogo: {
            type: Boolean,
            default: !1
        },
        headerUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["click-left", "click-right"],
    setup(t, {emit: e}) {
        const s = _()
          , o = ve()
          , a = x(()=>o.getHeadLogo)
          , i = ()=>{
            e("click-left")
        }
          , l = ()=>{
            e("click-right")
        }
        ;
        return G(()=>{}
        ),
        (r,m)=>(u(),
        b("div", {
            class: "navbar",
            ref_key: "navbar",
            ref: s
        }, [n("div", {
            class: "navbar-fixed",
            style: oe({
                background: t.backgroundColor
            })
        }, [n("div", fa, [n("div", {
            class: "navbar__content-left",
            onClick: i
        }, [K(r.$slots, "left", {}, ()=>[t.leftArrow ? (u(),
        b("div", pa)) : T("", !0)], !0)]), n("div", ga, [t.headLogo ? (u(),
        b("div", {
            key: 0,
            class: "headLogo",
            style: oe({
                backgroundImage: "url(" + (t.headerUrl || a.value) + ")"
            })
        }, null, 4)) : T("", !0), K(r.$slots, "center", {}, ()=>[n("div", ha, v(t.title), 1)], !0)]), n("div", {
            class: "navbar__content-right",
            onClick: l
        }, [K(r.$slots, "right", {}, void 0, !0)])])], 4)], 512))
    }
});
const ba = N(ya, [["__scopeId", "data-v-905dfe8c"]])
  , wa = {
    class: "ar-loading-view"
}
  , ka = {
    class: "loading-wrapper"
}
  , Sa = {
    class: "com__box"
}
  , Ca = $e('<div class="loading" data-v-1690b988><div class="shape shape-1" data-v-1690b988></div><div class="shape shape-2" data-v-1690b988></div><div class="shape shape-3" data-v-1690b988></div><div class="shape shape-4" data-v-1690b988></div></div>', 1)
  , $a = [Ca]
  , La = {
    class: "skeleton-wrapper"
}
  , Ia = A({
    __name: "LoadingView",
    props: {
        loading: {
            type: Boolean
        },
        type: {},
        isGame: {
            type: Boolean
        }
    },
    setup(t) {
        const e = t
          , s = _();
        let o = null;
        return G(async()=>{
            const a = "82lottery";
            await Se(),
            o = Ce.loadAnimation({
                container: s.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: `/loading/${a}/data.json`
            })
        }
        ),
        X(()=>e.loading, ()=>{
            e.type === "loading" && !e.isGame && (e.loading ? o && o.play() : o && o.stop())
        }
        ),
        le(()=>{
            o && o.destroy(),
            o = null
        }
        ),
        (a,i)=>{
            const l = H("VanSkeleton");
            return u(),
            b(Z, null, [C(n("div", wa, [K(a.$slots, "template", {}, ()=>[C(n("div", ka, [C(n("div", {
                ref_key: "element",
                ref: s,
                class: "loading-animat"
            }, null, 512), [[z, !a.isGame]]), C(n("div", Sa, $a, 512), [[z, a.isGame]])], 512), [[z, a.type === "loading"]]), C(n("div", La, [$(l, {
                row: 10
            }), $(l, {
                title: "",
                avatar: "",
                row: 5
            }), $(l, {
                title: "",
                row: 5
            })], 512), [[z, a.type === "skeleton"]])], !0)], 512), [[z, a.loading]]), K(a.$slots, "default", {}, void 0, !0)], 64)
        }
    }
});
const Aa = N(Ia, [["__scopeId", "data-v-1690b988"]]);
const Da = ["xlink:href"]
  , Ta = {
    __name: "svgIcons",
    props: {
        name: {
            type: String,
            required: !0
        },
        color: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const e = t
          , s = x(()=>`#icon-${e.name}`)
          , o = x(()=>e.name ? `svg-icon icon-${e.name}` : "svg-icon");
        return (a,i)=>(u(),
        b("svg", Le({
            class: o.value
        }, a.$attrs, {
            style: {
                color: t.color
            }
        }), [n("use", {
            "xlink:href": s.value
        }, null, 8, Da)], 16))
    }
}
  , Ba = {
    class: "ar-searchbar__selector"
}
  , Ea = {
    class: "ar-searchbar__selector-default"
}
  , Pa = A({
    __name: "ArSelect",
    props: {
        selectName: {
            type: String,
            default: ""
        }
    },
    emits: ["click-select"],
    setup(t, {emit: e}) {
        const s = ()=>{
            e("click-select")
        }
        ;
        return (o,a)=>{
            const i = H("van-icon");
            return u(),
            b("div", Ba, [n("div", {
                onClick: s
            }, [n("span", Ea, v(t.selectName), 1), $(i, {
                name: "arrow-down"
            })])])
        }
    }
});
const Ra = N(Pa, [["__scopeId", "data-v-f330f1f2"]])
  , xa = t=>{
    t.component("NavBar", ba),
    t.component("LoadingView", Aa),
    t.component("ArSelect", Ra),
    t.component("svg-icon", Ta),
    t.use(Ie).use(Ae).use(De).use(Te).use(Be).use(Ee).use(Pe).use(Re).use(xe).use(Ne).use(Ve).use(Fe).use(Me).use(Ue).use(Ge).use(Oe).use(qe).use(ze).use(Ke).use(He).use(Ye).use(je).use(We).use(Xe).use(Je).use(Ze).use(Qe).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(rt).use(ct).use(_e).use(ma).use(ut);
    let e = t.config.globalProperties
      , s = {};
    s.TopHeight = 38,
    Object.keys(ne.refiter).forEach(o=>{
        s[o] = ne.refiter[o]
    }
    ),
    e.$u = s
}
  , Na = {
    yjlottery: ()=>{
        (function(t, e, s, o, a, i, l) {
            t.fbq || (a = t.fbq = function() {
                a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
            }
            ,
            t._fbq || (t._fbq = a),
            a.push = a,
            a.loaded = !0,
            a.version = "2.0",
            a.queue = [],
            i = e.createElement(s),
            i.async = !0,
            i.src = o,
            l = e.getElementsByTagName(s)[0],
            l.parentNode.insertBefore(i, l))
        }
        )(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", "865606625239361"),
        fbq("track", "PageView")
    }
    ,
    lottery82: ()=>{
        const t = document.createElement("meta");
        t.name = "description",
        t.content = "82Lottery - is an online lottery platform in India that allows users in exciting lottery games and have a chance to big prizes and be lucky winners at 82Lottery!",
        document.head.appendChild(t);
        const e = document.createElement("meta");
        e.name = "keywords",
        e.content = "82Lottery, 82bet, play india lottery",
        document.head.appendChild(e)
    }
};
Na.lottery82();
const ae = dt(la)
  , me = vt();
xa(ae);
me.use(_t);
ae.use($t).use(me);
ae.mount("#app");
