import {r as _, F as ee, J as K, E as x, S as O, Z as z, T as f, U as $, $ as Je, a0 as Qe, a4 as N, C as o, V as e, X as l, a1 as I, a2 as W, A as xe, _ as oe, a5 as B, a3 as E, Y as j, aj as ce, j as D, v as re, y as et, a9 as ae, W as J, ag as Y, w as Q, aa as de, ab as pe, B as we, I as he, aD as tt, aJ as Re, H as Ve, a8 as st} from "./modules-37155226.js";
import {G as Ee, S as Be, aY as Fe, aZ as ot, g as A, a_ as at, a$ as nt, R as ve, _ as H, u as te, b0 as lt, A as ne, b1 as rt, b2 as Ue, b3 as Le, b4 as it, a as Ne, D as De, b5 as Me, b6 as Oe, b7 as ut, b8 as ct, F as dt} from "./page-activity-f933121a.js";
import {v as ye, a as pt} from "./page-home-a6a3dd4e.js";
const Pe = _(!1);
function He() {
    const {locale: v} = ee()
      , k = Ee()
      , d = K();
    async function t(p, n) {
        v.value = p,
        k.updateLanguage(p),
        await at(p),
        nt(ve.global.t),
        localStorage.setItem("needUpd", "1"),
        n === 1 ? r() : Pe.value = !1
    }
    const r = ()=>{
        d.back()
    }
      , s = x(()=>{
        let p = 0;
        const n = Be().getLanguage
          , c = [];
        if (n) {
            const m = n == null ? void 0 : n.replace("th", "tha").split("|");
            m == null || m.forEach(i=>{
                Fe.forEach(g=>{
                    (i.toLowerCase().indexOf(g.key.toLowerCase()) !== -1 || g.key.toLowerCase().indexOf(i.toLowerCase()) !== -1) && (c.push(g),
                    p++)
                }
                )
            }
            )
        }
        return k.getLanguage || k.updateLanguage(ot()),
        p == 0 ? Fe : c
    }
    );
    return {
        onClick: t,
        languagesList: s,
        getIcons: A,
        locale: v,
        goBack: r,
        getLangName: p=>s.value.find(c=>c.key === p).key.toLocaleUpperCase(),
        show: Pe
    }
}
const vt = ["onClick"]
  , _t = {
    class: "item-title"
}
  , mt = ["src"]
  , gt = {
    key: 0
}
  , ht = {
    key: 1
}
  , ft = O({
    __name: "index",
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    setup(v) {
        const {onClick: k, getIcons: d, languagesList: t, locale: r} = He();
        return (s,a)=>{
            const p = z("van-radio")
              , n = z("van-radio-group");
            return f(),
            $("div", {
                class: N(v.type === 2 ? "list info" : "list")
            }, [(f(!0),
            $(Je, null, Qe(o(t), (c,m)=>(f(),
            $("div", {
                class: N(["item ar-1px-b", c.key == o(r) ? "checked" : ""]),
                key: m,
                onClick: i=>o(k)(c.key, v.type)
            }, [e("div", _t, [e("img", {
                src: o(d)("languages", c.key)
            }, null, 8, mt), v.type === 2 ? (f(),
            $("span", gt, l(c.key.toLocaleUpperCase()), 1)) : (f(),
            $("span", ht, l(c.name), 1))]), I(n, {
                modelValue: o(r),
                "onUpdate:modelValue": a[0] || (a[0] = i=>xe(r) ? r.value = i : null)
            }, {
                default: W(()=>[I(p, {
                    "checked-color": "#F74747",
                    name: c.key
                }, null, 8, ["name"])]),
                _: 2
            }, 1032, ["modelValue"])], 10, vt))), 128))], 2)
        }
    }
});
const wt = H(ft, [["__scopeId", "data-v-0859e7fa"]])
  , yt = {
    class: "img"
}
  , bt = O({
    __name: "LangPopup",
    setup(v) {
        const {getLangName: k, getIcons: d, locale: t, show: r} = He()
          , s = Be()
          , a = x(()=>s.getLoginChangeLanguage == "1");
        return (p,n)=>{
            const c = z("van-popup")
              , m = oe("lazy");
            return f(),
            $("div", null, [a.value ? (f(),
            $("div", {
                key: 0,
                class: "right",
                onClick: n[0] || (n[0] = i=>r.value = !0)
            }, [e("div", yt, [B(e("img", null, null, 512), [[m, o(d)("languages", o(t))]])]), E(" " + l(o(k)(o(t))), 1)])) : j("", !0), I(c, {
                show: o(r),
                "onUpdate:show": n[1] || (n[1] = i=>xe(r) ? r.value = i : null),
                class: "popup",
                position: "bottom",
                teleport: "body"
            }, {
                default: W(()=>[I(wt, {
                    type: 2
                })]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const kt = H(bt, [["__scopeId", "data-v-4eb25d27"]])
  , $t = {
    class: "popups"
}
  , St = {
    class: "popup-content"
}
  , Ct = {
    class: "tit"
}
  , It = {
    class: "con"
}
  , Tt = {
    class: "info"
}
  , Ft = {
    class: "txt"
}
  , Pt = {
    class: "txt"
}
  , xt = {
    class: "box"
}
  , Rt = ["placeholder"]
  , Vt = {
    class: "lab"
}
  , Et = {
    class: "popup-foot"
}
  , Bt = O({
    __name: "index",
    props: {
        showPopup: {
            type: Boolean,
            default: _(!1)
        }
    },
    emits: ["update:showPopup", "onConfirm", "onBack"],
    setup(v, {emit: k}) {
        const d = v
          , t = K()
          , {t: r} = ee()
          , s = x({
            get() {
                return d.showPopup || !1
            },
            set(m) {
                k("update:showPopup", m)
            }
        })
          , a = _("")
          , p = ()=>{
            if (!a.value)
                return D(r("googleKey"));
            k("onConfirm", a.value.toString())
        }
          , n = ()=>{
            a.value = "",
            k("onBack")
        }
        ;
        function c() {
            t.push({
                name: "CustomerService"
            })
        }
        return (m,i)=>{
            const g = z("van-icon")
              , C = z("van-popup")
              , u = oe("throttle-click")
              , y = oe("lazy");
            return f(),
            $("div", $t, [I(C, {
                show: s.value,
                "onUpdate:show": i[1] || (i[1] = b=>s.value = b),
                position: "center",
                round: "",
                class: "popup",
                "close-on-click-overlay": !1
            }, {
                default: W(()=>[e("div", St, [e("div", Ct, l(o(r)("googleVerification")), 1), e("div", It, [e("div", Tt, [e("p", Ft, l(o(r)("googleTip5")), 1), e("p", Pt, l(o(r)("googleTip6")), 1)]), e("div", xt, [B(e("input", {
                    class: "input",
                    type: "text",
                    "onUpdate:modelValue": i[0] || (i[0] = b=>a.value = b),
                    maxlength: "6",
                    oninput: "value=value.replace(/\\D/g,'')",
                    placeholder: o(r)("PgoogleVerification")
                }, null, 8, Rt), [[ce, a.value]]), e("p", Vt, [I(g, {
                    class: "icon",
                    name: "warning-o"
                }), E(l(o(r)("PVerificationCode")) + " ", 1), e("span", {
                    onClick: c
                }, l(o(r)("contactServicer")), 1)])]), e("div", Et, [B((f(),
                $("div", null, [E(l(o(r)("confirm")), 1)])), [[u, {
                    handler: p,
                    wait: 1e3
                }]]), e("div", {
                    onClick: n
                }, l(o(r)("withdrawDialogDesc6")), 1)])]), B(e("img", {
                    class: "close",
                    onClick: n
                }, null, 512), [[y, o(A)("main", "close")]])])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const We = H(Bt, [["__scopeId", "data-v-f426e896"]])
  , Z = v=>(de("data-v-3eaa4b0b"),
v = v(),
pe(),
v)
  , Ut = ["src"]
  , Lt = ["src"]
  , Nt = {
    key: 1,
    class: "captcha_message"
}
  , Dt = {
    class: "captcha_message__icon"
}
  , Mt = {
    key: 0,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg"
}
  , Ot = Z(()=>e("g", {
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "#fff",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5"
}, [e("path", {
    d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
}), e("path", {
    d: "M7 12.5l7 7 13-13"
})], -1))
  , Ht = [Ot]
  , Wt = {
    key: 1,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg"
}
  , zt = Z(()=>e("g", {
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "#fff",
    "stroke-width": "1.5"
}, [e("circle", {
    cx: "14",
    cy: "14",
    r: "13.25"
}), e("path", {
    d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , qt = [zt]
  , At = {
    class: "captcha_message__text"
}
  , Gt = {
    key: 2,
    class: "captcha_message loadding"
}
  , jt = Z(()=>e("div", {
    class: "captcha_message__icon captcha_message__icon--loadding"
}, null, -1))
  , Xt = Z(()=>e("div", {
    class: "captcha_message__text"
}, "加载中...", -1))
  , Yt = [jt, Xt]
  , Kt = {
    key: 3,
    class: "captcha_message"
}
  , Zt = Z(()=>e("div", {
    class: "captcha_message__icon captcha_message__icon--loadding"
}, null, -1))
  , Jt = Z(()=>e("div", {
    class: "captcha_message__text"
}, null, -1))
  , Qt = [Zt, Jt]
  , es = Z(()=>e("path", {
    d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
    "p-id": "820"
}, null, -1))
  , ts = Z(()=>e("path", {
    d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
    "p-id": "821"
}, null, -1))
  , ss = [es, ts]
  , os = {
    key: 0,
    class: "captcha__actions"
}
  , as = ["fill"]
  , ns = Z(()=>e("path", {
    d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
    "fill-rule": "nonzero"
}, null, -1))
  , ls = [ns]
  , rs = O({
    __name: "SlideCaptcha",
    props: {
        width: {
            type: Number,
            default: 340
        },
        height: {
            type: Number,
            default: 212
        },
        barHeight: {
            type: Number,
            default: 40
        },
        handlerIconWidth: {
            type: Number,
            default: 16
        },
        handlerIconHeigth: {
            type: Number,
            default: 16
        },
        background: {
            type: String,
            default: "#eee"
        },
        circle: {
            type: Boolean,
            default: !1
        },
        radius: {
            type: String,
            default: "4px"
        },
        text: {
            type: String,
            default: "按住滑块拖动"
        },
        progressBarBg: {
            type: String,
            default: "#76c61d"
        },
        successTip: {
            type: String,
            default: "验证通过，超过80%用户"
        },
        failTip: {
            type: String,
            default: "验证未通过，拖动滑块将悬浮图像正确合并"
        },
        showRefresh: {
            type: Boolean,
            default: !1
        },
        refreshColor: {
            type: String,
            default: "#505050"
        }
    },
    emits: ["finish", "refresh"],
    setup(v, {expose: k, emit: d}) {
        const t = v
          , r = _(!1)
          , s = _(!1)
          , a = _(0)
          , p = _(0)
          , n = _(!1)
          , c = _(!1)
          , m = _(!1)
          , i = _([])
          , g = _(void 0)
          , C = _(!1)
          , u = _(!1)
          , y = _(!1)
          , b = _("")
          , M = _("")
          , R = _(!1)
          , S = x(()=>({
            width: t.width + "px",
            height: t.height + "px",
            position: "relative",
            overflow: "hidden"
        }))
          , P = x(()=>({
            width: t.width + "px"
        }))
          , V = x(()=>({
            width: t.width + "px",
            height: t.barHeight + "px",
            lineHeight: t.barHeight + "px",
            background: t.background,
            borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
        }))
          , G = x(()=>({
            background: t.progressBarBg,
            height: t.barHeight + "px",
            borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
        }))
          , se = x(()=>({
            height: t.barHeight + "px",
            width: t.width + "px"
        }))
          , w = x(()=>({
            width: t.barHeight + "px",
            height: t.barHeight - 2 + "px"
        }))
          , F = x(()=>({
            width: t.handlerIconWidth + "px",
            height: t.handlerIconHeigth + "px"
        }))
          , ie = x(()=>t.refreshColor)
          , q = x(()=>({
            color: t.refreshColor
        }))
          , h = _()
          , T = _()
          , ue = _()
          , U = _()
          , _e = _();
        re(()=>{}
        );
        const qe = ()=>{
            r.value = !0,
            Q(()=>{
                Ce(),
                Ye()
            }
            ),
            y.value = !0
        }
          , Ae = (L,X)=>{
            y.value = !1,
            b.value = L,
            M.value = X
        }
          , Ge = ()=>{
            u.value = !0
        }
          , je = L=>{
            L.value = L,
            u.value = !1,
            C.value = !0
        }
          , Ce = ()=>{
            a.value = 0,
            p.value = 0,
            i.value = [],
            s.value = !1,
            m.value = !1,
            y.value = !1,
            u.value = !1,
            C.value = !1,
            R.value = !1,
            T && (T.value.style.width = 0),
            U && (U.value.style.left = 0),
            _e && (_e.value.style.left = 0)
        }
          , Ie = ()=>{
            window.removeEventListener("touchmove", me),
            window.removeEventListener("touchend", ge),
            window.removeEventListener("mousemove", me),
            window.removeEventListener("mouseup", ge)
        }
          , Te = L=>{
            !R.value && b.value && M.value && !m.value && (window.addEventListener("touchmove", me),
            window.addEventListener("touchend", ge),
            window.addEventListener("mousemove", me),
            window.addEventListener("mouseup", ge),
            s.value = !0,
            g.value = new Date,
            a.value = L.pageX || L.touches[0].pageX,
            p.value = L.pageY || L.touches[0].pageY)
        }
          , me = L=>{
            if (s.value && !R.value && b.value && M.value && !m.value) {
                const X = (L.pageX || L.touches[0].pageX) - a.value
                  , fe = (L.pageY || L.touches[0].pageY) - p.value;
                _e.value.style.left = X + "px",
                T.value.style.width = X + t.barHeight / 2 + "px",
                U.value.style.left = X + "px",
                i.value.push({
                    x: Math.round(X),
                    y: Math.round(fe),
                    t: new Date().getTime() - g.value.getTime()
                })
            }
        }
          , ge = ()=>{
            s.value && !R.value && b.value && M.value && !m.value && (s.value = !1,
            m.value = !0,
            Ie(),
            d("finish", {
                backgroundImageWidth: ue.value.offsetWidth,
                backgroundImageHeight: ue.value.offsetHeight,
                sliderImageWidth: U.value.offsetWidth,
                sliderImageHeight: U.value.offsetHeight,
                startTime: g.value,
                endTime: new Date,
                tracks: i.value
            }))
        }
          , Xe = L=>{
            r.value = L
        }
          , Ye = ()=>{
            h.value.style.setProperty("--textColor", "#333"),
            h.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"),
            h.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
        }
          , Ke = ()=>{
            Ce(),
            d("refresh")
        }
        ;
        return k({
            startRequestVerify: Ge,
            endRequestVerify: je,
            startRequestGenerate: qe,
            endRequestGenerate: Ae,
            setShowHiden: Xe
        }),
        et(()=>{
            Ie()
        }
        ),
        (L,X)=>{
            const fe = z("van-popup");
            return f(),
            ae(fe, {
                show: r.value,
                "onUpdate:show": X[0] || (X[0] = Ze=>r.value = Ze),
                teleport: "body"
            }, {
                default: W(()=>[e("div", {
                    class: "captcha",
                    style: J(P.value)
                }, [e("div", {
                    class: "captcha__main",
                    style: J(S.value)
                }, [b.value ? (f(),
                $("img", {
                    key: 0,
                    ref_key: "backgroundRef",
                    ref: ue,
                    alt: "background",
                    class: "captcha_background",
                    src: b.value
                }, null, 8, Ut)) : j("", !0), B(e("img", {
                    ref_key: "sliderRef",
                    ref: U,
                    alt: "slider",
                    class: N(["captcha_slider", {
                        goFirst: n.value,
                        goKeep: c.value
                    }]),
                    src: M.value
                }, null, 10, Lt), [[Y, M.value]]), C.value ? (f(),
                $("div", Nt, [e("div", Dt, [R.value ? (f(),
                $("svg", Mt, Ht)) : (f(),
                $("svg", Wt, qt))]), e("div", At, l(R.value ? v.successTip : v.failTip), 1)])) : j("", !0), y.value ? (f(),
                $("div", Gt, Yt)) : j("", !0), u.value ? (f(),
                $("div", Kt, Qt)) : j("", !0)], 4), e("div", {
                    ref_key: "dragVerifyRef",
                    ref: h,
                    class: "captcha__bar",
                    style: J(V.value)
                }, [e("div", {
                    ref_key: "progressBarRef",
                    ref: T,
                    class: N(["captcha_progress_bar", {
                        goFirst2: n.value
                    }]),
                    style: J(G.value)
                }, null, 6), e("div", {
                    class: "captcha_progress_bar__text",
                    style: J(se.value)
                }, l(v.text), 5), e("div", {
                    ref_key: "handlerRef",
                    ref: _e,
                    class: N(["captcha_handler", {
                        goFirst: n.value
                    }]),
                    style: J(w.value),
                    onMousedown: Te,
                    onTouchstart: Te
                }, [(f(),
                $("svg", {
                    "p-id": "819",
                    style: J(F.value),
                    version: "1.1",
                    viewBox: "0 0 1024 1024",
                    xmlns: "http://www.w3.org/2000/svg"
                }, ss, 4))], 38)], 4), v.showRefresh ? (f(),
                $("div", os, [e("a", {
                    class: "captcha__action",
                    style: J(q.value),
                    onClick: Ke
                }, [(f(),
                $("svg", {
                    fill: ie.value,
                    height: "20px",
                    version: "1.1",
                    viewBox: "0 0 20 20",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg"
                }, ls, 8, as))], 4)])) : j("", !0)], 4)]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const ze = H(rs, [["__scopeId", "data-v-3eaa4b0b"]])
  , is = {
    class: "verifyInput__container"
}
  , us = {
    class: "verifyInput__container-label"
}
  , cs = {
    class: "verifyInput__container-label__icon"
}
  , ds = {
    key: 0
}
  , ps = {
    key: 1
}
  , vs = {
    class: "verifyInput__container-input"
}
  , _s = ["placeholder"]
  , ms = {
    key: 0
}
  , gs = {
    key: 1
}
  , hs = {
    class: "verifyInput__container-tip"
}
  , fs = O({
    __name: "VerifyInput",
    props: {
        value: {},
        typeP: {},
        isShowVerifyT: {
            type: Boolean
        },
        placeholder: {
            default: ve.global.t("registerTip1")
        },
        sendFunc: {},
        number: {},
        numberType: {
            default: ""
        },
        showVerify: {
            type: Boolean,
            default: !0
        },
        email: {},
        loginType: {}
    },
    emits: ["update:value"],
    setup(v, {emit: k}) {
        const d = v
          , {t} = ee()
          , r = te()
          , a = Ee().getUserInfo
          , p = K()
          , n = x({
            get() {
                return d.value || ""
            },
            set(u) {
                k("update:value", u)
            }
        })
          , c = _(!0);
        async function m() {
            var y;
            if (c.value && (c.value = !1),
            r.countDown > 0)
                return;
            if (p.currentRoute.value.name === "rpwd" || p.currentRoute.value.name === "register" || p.currentRoute.value.name === "SettingC-UpdatePhone" && !d.isShowVerifyT) {
                if (!((y = d.number) != null && y.trim()))
                    return D({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                const b = (d.number.trim() + d.numberType.trim()).length;
                if (b < 10 || b > 14)
                    return D({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
            } else if (!localStorage.getItem("numberType") && localStorage.getItem("number"))
                return D({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
            !d.sendFunc || await d.sendFunc() === -1 || r.sendCode()
        }
        const i = x(()=>{
            var u;
            return d.number ? d.numberType + d.number : ((u = a == null ? void 0 : a.verifyMethods) == null ? void 0 : u.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
        }
        )
          , g = u=>{
            const y = u.target;
            y.value = y.value.replace(/\s+/g, ""),
            y.value = y.value.replace(/[^\d]/g, "")
        }
        ;
        function C() {
            p.push({
                name: "CustomerService"
            })
        }
        return (u,y)=>{
            const b = z("van-icon")
              , M = oe("lazy");
            return B((f(),
            $("div", is, [B(e("div", us, [B(e("img", cs, null, 512), [[M, o(A)("login", "verify")]]), u.typeP === "updatePhone" || u.typeP === "lock" ? (f(),
            $("span", ds, l(u.$t("sendVerifyCodeTo")) + " " + l(o(lt)(i.value)), 1)) : (f(),
            $("span", ps, l(u.$t("verifyCode")), 1))], 512), [[Y, !(u.isShowVerifyT === !1 && u.typeP === "updatePhone")]]), e("div", vs, [B(e("input", {
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = R=>n.value = R),
                placeholder: u.$t("phEnterVerificationCode"),
                maxlength: "6",
                onInput: g
            }, null, 40, _s), [[ce, n.value]]), e("button", {
                onClick: m,
                class: N({
                    inActive: o(r).countDown > 0
                })
            }, [o(r).countDown === 0 ? (f(),
            $("span", ms, l(u.$t("send")), 1)) : (f(),
            $("span", gs, l(o(r).countDown) + "S ", 1))], 2)]), B(e("div", hs, [I(b, {
                name: "warning-o"
            }), e("span", null, l(u.$t("codeUnreceived")) + "?", 1), e("span", {
                onClick: y[1] || (y[1] = R=>C())
            }, l(u.$t("contactServicer")), 1)], 512), [[Y, !c.value]])], 512)), [[Y, u.showVerify]])
        }
    }
});
const ws = H(fs, [["__scopeId", "data-v-f597e2c8"]])
  , ys = {
    class: "passwordInput__container"
}
  , bs = {
    class: "passwordInput__container-label"
}
  , ks = {
    class: "passwordInput__container-label__icon"
}
  , $s = {
    class: "passwordInput__container-input"
}
  , Ss = ["type", "placeholder", "maxlength", "value"]
  , Cs = ["src"]
  , Is = O({
    __name: "PasswordInput",
    props: {
        value: {},
        maxlength: {
            default: 15
        },
        label: {}
    },
    emits: ["update:value"],
    setup(v, {emit: k}) {
        const d = v
          , t = ve.global.t
          , r = _()
          , s = _("")
          , a = _(!1)
          , p = _(!1);
        we(s, S=>{
            k("update:value", S)
        }
        , {
            flush: "post"
        });
        const n = S=>{
            if (a.value)
                return;
            let P = m();
            const V = S.target;
            V.value = V.value.replace(/\s+/g, "");
            const G = /[\u4e00-\u9fa5]/g;
            V.value = V.value.replace(G, ""),
            i(P, V.value),
            g(V.value),
            C(P)
        }
          , c = x(()=>A("login", `${p.value ? "eyeVisible" : "eyeInvisible"}`))
          , m = ()=>{
            var S = {
                start: 0,
                end: 0
            };
            return S.start = r.value.selectionStart,
            S.end = r.value.selectionEnd,
            S
        }
          , i = (S,P)=>{
            if (P.length > 1 && !P.includes("•")) {
                s.value = P;
                return
            }
            let V = P.split("•").join("");
            if (V) {
                let G = s.value.length - (P.length - S.end);
                s.value = s.value.slice(0, S.end - V.length) + V + s.value.slice(G)
            } else
                s.value = s.value.slice(0, S.end) + s.value.slice(S.end + s.value.length - P.length)
        }
          , g = S=>{
            if (p.value)
                return;
            if (!S) {
                r.value.value = "";
                return
            }
            let P = "";
            for (let V = 0; V < S.length; V++)
                P += "•";
            r.value.value = P
        }
          , C = S=>{
            r.value.setSelectionRange(S.start, S.end)
        }
          , u = ()=>{
            a.value = !0
        }
          , y = S=>{
            a.value && (a.value = !1,
            n(S))
        }
          , b = ()=>{
            p.value = !p.value,
            p.value ? r.value.value = s.value : g(s.value)
        }
        ;
        re(()=>{
            s.value = d.value || "",
            g(s.value)
        }
        );
        const M = localStorage.getItem("language")
          , R = x(()=>{
            let S, P = d.label;
            switch (M) {
            case "vi":
                switch (P) {
                case "Đặt mật khẩu":
                    S = t("setLoginPSW");
                    break;
                case "Xác nhận mật khẩu":
                    S = t("enterPswConfirmation");
                    break;
                default:
                    S = t("phEnter") + P;
                    break
                }
                break;
            default:
                S = P
            }
            return S
        }
        );
        return (S,P)=>{
            const V = oe("lazy");
            return f(),
            $("div", ys, [e("div", bs, [B(e("img", ks, null, 512), [[V, o(A)("login", "password")]]), e("span", null, l(S.label), 1)]), e("div", $s, [e("input", {
                type: p.value ? "text" : "password",
                placeholder: R.value,
                maxlength: S.maxlength,
                onInput: n,
                onCompositionstart: u,
                onCompositionend: y,
                ref_key: "inputPwd",
                ref: r,
                value: S.value,
                autocomplete: "new-password"
            }, null, 40, Ss), e("img", {
                src: c.value,
                class: "eye",
                onClick: b
            }, null, 8, Cs)])])
        }
    }
});
const le = H(Is, [["__scopeId", "data-v-41f52b32"]])
  , be = v=>(de("data-v-b9aa42cb"),
v = v(),
pe(),
v)
  , Ts = {
    class: "RpwdPopup"
}
  , Fs = {
    class: "RpwdPopup-head"
}
  , Ps = {
    class: "RpwdPopup-topTip"
}
  , xs = be(()=>e("br", null, null, -1))
  , Rs = {
    class: "RpwdPopup-tip"
}
  , Vs = be(()=>e("div", {
    class: "tipbg"
}, null, -1))
  , Es = {
    class: "RpwdPopup-errorTip"
}
  , Bs = {
    key: 0
}
  , Us = ["src"]
  , Ls = {
    class: "errorTip"
}
  , Ns = be(()=>e("br", null, null, -1))
  , Ds = {
    class: "RpwdPopup-foot"
}
  , Ms = O({
    __name: "RpwdPopup",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        },
        phoneNumber: {
            type: String,
            default: ""
        },
        phoneNumberType: {
            type: String,
            default: ""
        },
        passwordErrorMaxNum: {
            default: 10
        }
    },
    emits: ["update:show"],
    setup(v, {emit: k}) {
        const d = v
          , {t} = ee()
          , r = K()
          , s = _(!1)
          , a = te()
          , p = _(!1)
          , n = _({
            smsvcode: "",
            password: "",
            rePassword: ""
        })
          , c = x({
            get() {
                return d.show || !1
            },
            set(C) {
                C || k("update:show", !1)
            }
        })
          , m = async()=>{
            if (!d.phoneNumber)
                return;
            await ne(rt({
                phone: d.phoneNumberType + d.phoneNumber,
                codeType: Ue.resetPassword
            })) ? he(t("sendSuccess")) : setTimeout(()=>{
                a.setCountDown(0)
            }
            , 500)
        }
          , i = async()=>{
            if (!n.value.smsvcode.trim())
                return D({
                    message: t("registerTip1"),
                    wordBreak: "break-word"
                });
            if (n.value.smsvcode.trim().length != 6)
                return D({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
            if (!n.value.password.trim())
                return D({
                    message: t("registerTip2"),
                    wordBreak: "break-word"
                });
            if (!ye.passReg3.test(n.value.password)) {
                s.value = !0;
                return
            }
            if (!n.value.rePassword.trim())
                return D({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
            if (n.value.password !== n.value.rePassword) {
                p.value = !0;
                return
            } else
                p.value = !1;
            const {password: C, smsvcode: u} = n.value;
            let y = {
                username: d.phoneNumberType + d.phoneNumber,
                password: C,
                type: "mobile",
                smsvcode: u
            };
            await ne(Le(y)) && (he(t("rpdsucceed")),
            localStorage.clear(),
            k("update:show", !1))
        }
          , g = ()=>{
            r.push({
                name: "CustomerService"
            })
        }
        ;
        return (C,u)=>{
            const y = z("van-popup");
            return f(),
            ae(y, {
                show: c.value,
                "onUpdate:show": u[4] || (u[4] = b=>c.value = b),
                "close-on-click-overlay": !1,
                position: "bottom",
                round: ""
            }, {
                default: W(()=>[e("div", Ts, [e("div", Fs, l(o(t)("idlockTitle")), 1), e("div", Ps, [E(l(o(t)("idlockTip1", [v.passwordErrorMaxNum])), 1), xs, E(l(o(t)("idlockTip3")), 1)]), I(ws, {
                    value: n.value.smsvcode,
                    "onUpdate:value": u[0] || (u[0] = b=>n.value.smsvcode = b),
                    number: v.phoneNumber,
                    sendFunc: m,
                    numberType: v.phoneNumberType,
                    "type-p": "lock"
                }, null, 8, ["value", "number", "numberType"]), I(le, {
                    value: n.value.password,
                    "onUpdate:value": u[1] || (u[1] = b=>n.value.password = b),
                    label: o(t)("newPSWRest")
                }, null, 8, ["value", "label"]), B(e("div", Rs, [Vs, e("span", null, l(o(t)("pswRule")), 1)], 512), [[Y, s.value]]), I(le, {
                    value: n.value.rePassword,
                    "onUpdate:value": u[2] || (u[2] = b=>n.value.rePassword = b),
                    label: o(t)("newPSWconfirm")
                }, null, 8, ["value", "label"]), e("div", Es, [p.value ? (f(),
                $("span", Bs, l(o(t)("unmatchedInput")), 1)) : j("", !0)]), e("div", {
                    class: "gotuserver van-hairline--surround",
                    onClick: g
                }, [e("img", {
                    src: o(A)("login", "iconservr-r")
                }, null, 8, Us), E(l(o(t)("contactServicer")), 1)]), e("div", Ls, [E(l(o(t)("wrongTel")), 1), Ns, E(l(o(t)("rpwdPopupTip")), 1)]), e("div", Ds, [e("button", {
                    class: "dialogBtn",
                    onClick: u[3] || (u[3] = b=>k("update:show", !1))
                }, l(o(t)("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: i
                }, l(o(t)("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Os = H(Ms, [["__scopeId", "data-v-b9aa42cb"]])
  , Hs = {
    class: "phoneInput__container"
}
  , Ws = {
    class: "phoneInput__container-label"
}
  , zs = ["src"]
  , qs = {
    class: "phoneInput__container-input"
}
  , As = ["placeholder"]
  , Gs = O({
    __name: "PhoneInput",
    props: {
        type: {},
        showValidate: {
            type: Boolean
        },
        typeP: {},
        numberType: {},
        number: {}
    },
    emits: ["update:show-validate", "changeT", "changeN"],
    setup(v, {expose: k, emit: d}) {
        const t = v
          , r = _()
          , s = x({
            get() {
                return t.number
            },
            set(i) {
                d("changeN", i.replace(/[^0-9]/g, ""))
            }
        });
        function a(i) {
            i.target.value.length < 6 && d("update:show-validate", !0)
        }
        function p(i) {
            const g = i.target
              , C = /[\u4e00-\u9fa5]/g;
            g.value = g.value.replace(C, ""),
            g.value.length > 0 && d("update:show-validate", !1)
        }
        const n = i=>{
            d("changeT", i)
        }
        ;
        tt(r, ()=>{
            r.value.close()
        }
        ),
        re(()=>{}
        );
        const c = _();
        function m() {
            Q(()=>{
                c.value.focus()
            }
            )
        }
        return k({
            getFocus: m
        }),
        (i,g)=>{
            const C = oe("only-num");
            return f(),
            $("div", Hs, [e("div", Ws, [e("img", {
                src: o(A)("login", "cellphone"),
                class: "phoneInput__container-label__icon"
            }, null, 8, zs), e("span", null, l(i.$t("phone")), 1)]), e("div", qs, [I(it, {
                typeValue: t.numberType,
                ref_key: "dropDown",
                ref: r,
                onChangeT: n
            }, null, 8, ["typeValue"]), B(e("input", {
                type: "text",
                name: "userNumber",
                "onUpdate:modelValue": g[0] || (g[0] = u=>s.value = u),
                placeholder: i.$t("plsEnterTel"),
                onBlur: a,
                onInput: p,
                ref_key: "number",
                ref: c
            }, null, 40, As), [[C], [ce, s.value]])])])
        }
    }
});
const js = H(Gs, [["__scopeId", "data-v-3c9391fd"]])
  , ke = v=>(de("data-v-c16e655a"),
v = v(),
pe(),
v)
  , Xs = {
    class: "signIn__container"
}
  , Ys = {
    class: "signIn__container-button"
}
  , Ks = {
    class: "signIn_footer"
}
  , Zs = ke(()=>e("div", {
    class: "forgetbg"
}, null, -1))
  , Js = {
    class: "font24"
}
  , Qs = ke(()=>e("div", {
    class: "custombg"
}, null, -1))
  , eo = {
    class: "font24"
}
  , to = {
    class: "idlockTip"
}
  , so = ke(()=>e("br", null, null, -1))
  , oo = ["src"]
  , ao = O({
    __name: "SignIn",
    setup(v, {expose: k}) {
        const d = K()
          , {t} = ee()
          , r = _("login")
          , {setLoading: s} = Ne()
          , a = te()
          , p = _(!1)
          , n = _(!1)
          , c = _(10)
          , m = _();
        let i = !1;
        async function g() {
            if (!i) {
                if (i = !0,
                Me() && await new Promise(h=>setTimeout(h, 1e3)),
                i = !1,
                !a.userForm.number || a.userForm.number.toString().trim() === "") {
                    n.value = !0;
                    return
                }
                if (!a.userForm.password || a.userForm.password.toString().trim() === "")
                    return D({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                a.userForm.numberType = a.getUserForm.numberType.replace("+", ""),
                a.userForm.remember && a.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", a.userForm.password) : localStorage.setItem("remember", ""),
                a.isOpenCaptcha ? se() : (s(!0),
                await a.signIn(a.userForm).then(h=>{
                    a.userForm.vCode = ""
                }
                ).catch(h=>{
                    var T;
                    h.code === 1 && (c.value = ((T = h.data) == null ? void 0 : T.passwordErrorMaxNum) || 10),
                    h.msgCode === 33 ? Q(()=>F.value = !0) : w(h.msgCode || 0)
                }
                ).finally(()=>{
                    R.value.setShowHiden(!1),
                    s(!1)
                }
                ))
            }
        }
        const C = ()=>{
            d.push({
                name: "register"
            })
        }
        ;
        function u() {
            d.push({
                name: "rpwd"
            }),
            a.setCurrentView("ResetPassword")
        }
        function y() {
            d.push({
                name: "CustomerService"
            })
        }
        const b = h=>{
            a.getUserForm.numberType = h
        }
          , M = h=>{
            a.getUserForm.number = h
        }
          , R = _()
          , S = _("")
          , P = ()=>{
            p.value = !1,
            d.push({
                name: "CustomerService"
            })
        }
        ;
        Re(window, "keydown", h=>{
            h.key == "Enter" && g()
        }
        ),
        re(async()=>{
            var T;
            const h = a.getUserForm;
            localStorage.getItem("remember") != null && ((T = localStorage.getItem("remember")) == null ? void 0 : T.toString().trim()) != "" ? h.password = localStorage.getItem("remember") : h.password = "",
            a.setUserForm({
                ...h
            })
        }
        );
        let V = we(()=>a.userForm.number, h=>{
            a.setCountDown(0)
        }
        , {
            flush: "post"
        });
        const G = async h=>{
            Q(async()=>{
                R.value.startRequestVerify(),
                s(!0),
                a.signIn(Object.assign(a.userForm, {
                    captchaId: S.value,
                    track: h
                })).then(T=>{}
                ).catch(T=>{
                    w(T.msgCode || 0)
                }
                ).finally(()=>{
                    R.value.setShowHiden(!1),
                    s(!1)
                }
                )
            }
            )
        }
          , se = ()=>{
            Q(async()=>{
                R.value.startRequestGenerate();
                const h = await ne(Oe());
                h ? (S.value = h.data.captchaId,
                R.value.endRequestGenerate(h.data.backgroundImage, h.data.sliderImage)) : R.value.endRequestGenerate(null, null)
            }
            )
        }
          , w = h=>{
            h == 122 && (p.value = !0)
        }
        ;
        Ve(()=>{
            V(),
            a.getUserForm.remember || (a.getUserForm.password = "")
        }
        );
        const F = _(!1)
          , ie = h=>{
            a.userForm.vCode = h,
            g()
        }
          , q = ()=>{
            F.value = !1,
            a.userForm.vCode = ""
        }
        ;
        return k({
            showPhoneValidate: n
        }),
        (h,T)=>{
            const ue = z("van-checkbox");
            return f(),
            $("div", Xs, [I(js, {
                "show-validate": n.value,
                "onUpdate:showValidate": T[0] || (T[0] = U=>n.value = U),
                ref_key: "phone",
                ref: m,
                type: r.value,
                "number-type": o(a).getUserForm.numberType,
                number: o(a).userForm.number,
                onChangeT: b,
                onChangeN: M
            }, null, 8, ["show-validate", "type", "number-type", "number"]), I(le, {
                value: o(a).userForm.password,
                "onUpdate:value": T[1] || (T[1] = U=>o(a).userForm.password = U),
                label: h.$t("password"),
                maxlength: 32
            }, null, 8, ["value", "label"]), e("div", null, [I(ue, {
                modelValue: o(a).userForm.rememberpwd,
                "onUpdate:modelValue": T[2] || (T[2] = U=>o(a).userForm.rememberpwd = U),
                "checked-color": "#ff7172"
            }, {
                default: W(()=>[E(l(h.$t("rememberPSW")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), e("div", Ys, [e("button", {
                class: N([o(a).userForm.number != "" ? "active" : ""]),
                onClick: g
            }, l(h.$t("login")), 3), e("button", {
                class: "register",
                onClick: C
            }, l(h.$t("register")), 1)]), e("div", Ks, [o(a).isOpenForgetPasswordSMSState || o(a).isOpenForgetPasswordEmailState ? (f(),
            $("div", {
                key: 0,
                class: "forgetcon",
                onClick: u
            }, [Zs, e("div", Js, l(h.$t("forgetPSW")), 1)])) : j("", !0), e("div", {
                class: "customcon",
                onClick: y
            }, [Qs, e("div", eo, l(h.$t("customerServiceTitle")), 1)])]), I(ze, {
                ref_key: "captchaRef",
                ref: R,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                text: o(t)("slideCaptchaText"),
                onFinish: G,
                onRefresh: se
            }, null, 8, ["text"]), o(a).isOpenForgetPasswordSMSState && p.value ? (f(),
            ae(Os, {
                key: 0,
                show: p.value,
                "onUpdate:show": T[3] || (T[3] = U=>p.value = U),
                phoneNumber: o(a).getUserForm.number,
                phoneNumberType: o(a).getUserForm.numberType,
                passwordErrorMaxNum: c.value
            }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : (f(),
            ae(De, {
                key: 1,
                show: p.value,
                "onUpdate:show": T[5] || (T[5] = U=>p.value = U),
                "show-cancel-btn": !0,
                title: h.$t("idlockTitle")
            }, {
                content: W(()=>[e("div", to, [E(l(h.$t("idlockTip1", [c.value])) + " ", 1), so, E(l(h.$t("idlockTip2")), 1)])]),
                footer: W(()=>[e("button", {
                    class: "dialogBtn",
                    onClick: P
                }, [e("img", {
                    src: o(A)("login", "iconservr")
                }, null, 8, oo), E(" " + l(h.$t("contactServicer")), 1)]), e("button", {
                    class: "dialogBtn",
                    onClick: T[4] || (T[4] = U=>p.value = !1)
                }, l(h.$t("cancel")), 1)]),
                _: 1
            }, 8, ["show", "title"])), I(We, {
                showPopup: F.value,
                onOnConfirm: ie,
                onOnBack: q
            }, null, 8, ["showPopup"])])
        }
    }
});
const no = H(ao, [["__scopeId", "data-v-c16e655a"]])
  , lo = {
    class: "verifyInput__container"
}
  , ro = {
    class: "verifyInput__container-label"
}
  , io = {
    class: "verifyInput__container-label__icon"
}
  , uo = {
    key: 0
}
  , co = {
    key: 1
}
  , po = {
    class: "verifyInput__container-input"
}
  , vo = ["placeholder"]
  , _o = {
    key: 0
}
  , mo = {
    key: 1
}
  , go = {
    class: "verifyInput__container-tip"
}
  , ho = O({
    __name: "VerifyEmailInput",
    props: {
        value: {},
        typeP: {},
        isShowVerifyT: {
            type: Boolean
        },
        placeholder: {
            default: ve.global.t("registerTip6")
        },
        sendFunc: {},
        number: {},
        numberType: {},
        showVerify: {
            type: Boolean,
            default: !0
        },
        email: {
            default: ""
        },
        loginType: {}
    },
    emits: ["update:value"],
    setup(v, {emit: k}) {
        const d = v;
        ee();
        const t = te()
          , r = K()
          , s = x({
            get() {
                return d.value || ""
            },
            set(i) {
                k("update:value", i)
            }
        })
          , a = _(!0);
        async function p() {
            a.value && (a.value = !1),
            !(t.countEmailDown > 0) && (t.sendEmailCode(),
            d.sendFunc && d.sendFunc())
        }
        const n = x(()=>localStorage.getItem("email") || d.email)
          , c = i=>{
            const g = i.target;
            g.value = g.value.replace(/\s+/g, ""),
            g.value = g.value.replace(/[^\d]/g, "")
        }
        ;
        function m() {
            r.push({
                name: "CustomerService"
            })
        }
        return (i,g)=>{
            const C = z("van-icon")
              , u = oe("lazy");
            return B((f(),
            $("div", lo, [B(e("div", ro, [B(e("img", io, null, 512), [[u, o(A)("login", "verify")]]), i.typeP === "updateEmail" || i.typeP === "lock" ? (f(),
            $("span", uo, l(i.$t("sendVerifyCodeTo")) + " " + l(o(ut)(n.value)), 1)) : (f(),
            $("span", co, l(i.$t("verifyCode")), 1))], 512), [[Y, !(i.isShowVerifyT === !1 && i.typeP === "updateEmail")]]), e("div", po, [B(e("input", {
                type: "text",
                "onUpdate:modelValue": g[0] || (g[0] = y=>s.value = y),
                placeholder: i.$t("phEnterVerificationCode"),
                maxlength: "6",
                onInput: c
            }, null, 40, vo), [[ce, s.value]]), e("button", {
                onClick: p,
                class: N({
                    inActive: o(t).countEmailDown > 0
                })
            }, [o(t).countEmailDown === 0 ? (f(),
            $("span", _o, l(i.$t("send")), 1)) : (f(),
            $("span", mo, l(o(t).countEmailDown) + "S ", 1))], 2)]), B(e("div", go, [I(C, {
                name: "warning-o"
            }), e("span", null, l(i.$t("codeUnreceived")) + "?", 1), e("span", {
                onClick: g[1] || (g[1] = y=>m())
            }, l(i.$t("contactServicer")), 1)], 512), [[Y, !a.value]])], 512)), [[Y, i.showVerify]])
        }
    }
});
const fo = H(ho, [["__scopeId", "data-v-1848510a"]])
  , $e = v=>(de("data-v-350d418d"),
v = v(),
pe(),
v)
  , wo = {
    class: "RpwdPopup"
}
  , yo = {
    class: "RpwdPopup-head"
}
  , bo = {
    class: "RpwdPopup-topTip"
}
  , ko = $e(()=>e("br", null, null, -1))
  , $o = {
    class: "RpwdPopup-tip"
}
  , So = $e(()=>e("div", {
    class: "tipbg"
}, null, -1))
  , Co = {
    class: "RpwdPopup-errorTip"
}
  , Io = {
    key: 0
}
  , To = ["src"]
  , Fo = {
    class: "errorTip"
}
  , Po = $e(()=>e("br", null, null, -1))
  , xo = {
    class: "RpwdPopup-foot"
}
  , Ro = O({
    __name: "EmailRpwdPopup",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        },
        passwordErrorMaxNum: {
            default: 10
        }
    },
    emits: ["update:show"],
    setup(v, {emit: k}) {
        const d = v
          , {t} = ee()
          , r = K()
          , s = _(!1)
          , a = te()
          , p = _(!1)
          , n = _({
            smsvcode: "",
            password: "",
            rePassword: ""
        })
          , c = x({
            get() {
                return d.show || !1
            },
            set(C) {
                C || k("update:show", !1)
            }
        })
          , m = async()=>{
            if (!d.email)
                return;
            await ne(ct({
                email: d.email,
                emailType: Ue.resetPassword
            })) ? he(t("sendSuccess")) : setTimeout(()=>{
                a.setCountEmailDown(0)
            }
            , 500)
        }
          , i = async()=>{
            if (!n.value.smsvcode.trim())
                return D({
                    message: t("registerTip6"),
                    wordBreak: "break-word"
                });
            if (n.value.smsvcode.trim().length != 6)
                return D({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
            if (!n.value.password.trim())
                return D({
                    message: t("registerTip2"),
                    wordBreak: "break-word"
                });
            if (!ye.passReg3.test(n.value.password)) {
                s.value = !0;
                return
            }
            if (!n.value.rePassword.trim())
                return D({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
            if (n.value.password !== n.value.rePassword) {
                p.value = !0;
                return
            } else
                p.value = !1;
            const {password: C, smsvcode: u} = n.value;
            let y = {
                username: d.email,
                type: "email",
                password: C,
                smsvcode: u
            };
            await ne(Le(y)) && (he(t("rpdsucceed")),
            localStorage.clear(),
            k("update:show", !1))
        }
          , g = ()=>{
            r.push({
                name: "CustomerService"
            })
        }
        ;
        return (C,u)=>{
            const y = z("van-popup");
            return f(),
            ae(y, {
                show: c.value,
                "onUpdate:show": u[4] || (u[4] = b=>c.value = b),
                "close-on-click-overlay": !1,
                position: "bottom",
                round: ""
            }, {
                default: W(()=>[e("div", wo, [e("div", yo, l(o(t)("idlockTitle")), 1), e("div", bo, [E(l(o(t)("idlockTip1", [v.passwordErrorMaxNum])), 1), ko, E(l(o(t)("idlockTip3")), 1)]), I(fo, {
                    value: n.value.smsvcode,
                    "onUpdate:value": u[0] || (u[0] = b=>n.value.smsvcode = b),
                    sendFunc: m,
                    email: v.email,
                    "type-p": "lock"
                }, null, 8, ["value", "email"]), I(le, {
                    value: n.value.password,
                    "onUpdate:value": u[1] || (u[1] = b=>n.value.password = b),
                    label: o(t)("newPSWRest")
                }, null, 8, ["value", "label"]), B(e("div", $o, [So, e("span", null, l(o(t)("pswRule")), 1)], 512), [[Y, s.value]]), I(le, {
                    value: n.value.rePassword,
                    "onUpdate:value": u[2] || (u[2] = b=>n.value.rePassword = b),
                    label: o(t)("newPSWconfirm")
                }, null, 8, ["value", "label"]), e("div", Co, [p.value ? (f(),
                $("span", Io, l(o(t)("unmatchedInput")), 1)) : j("", !0)]), e("div", {
                    class: "gotuserver",
                    onClick: g
                }, [e("img", {
                    src: o(A)("login", "iconservr-r")
                }, null, 8, To), E(l(o(t)("contactServicer")), 1)]), e("div", Fo, [E(l(o(t)("wrongemail")), 1), Po, E(l(o(t)("rpwdEmailPopupTip")), 1)]), e("div", xo, [e("button", {
                    class: "dialogBtn",
                    onClick: u[3] || (u[3] = b=>k("update:show", !1))
                }, l(o(t)("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: i
                }, l(o(t)("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Vo = H(Ro, [["__scopeId", "data-v-350d418d"]])
  , Eo = {
    class: "emailcontainer"
}
  , Bo = {
    class: "emailinput__container"
}
  , Uo = {
    class: "emailinput__container-label"
}
  , Lo = ["src"]
  , No = {
    class: "emailinput__container-input"
}
  , Do = ["placeholder"]
  , Mo = O({
    __name: "EmailInput",
    props: {
        type: {},
        email: {}
    },
    emits: ["update:show-validate", "changeN"],
    setup(v, {expose: k, emit: d}) {
        const t = v
          , r = te()
          , s = x({
            get() {
                return t.email
            },
            set(c) {
                d("changeN", c)
            }
        });
        function a(c) {
            const m = c.target
              , i = /[\u4e00-\u9fa5]/g;
            m.value = m.value.replace(i, ""),
            m.value.length > 0 && d("update:show-validate", !1)
        }
        const p = _();
        function n() {
            Q(()=>{
                p.value.focus()
            }
            )
        }
        return k({
            getFocus: n
        }),
        (c,m)=>(f(),
        $("div", Eo, [e("div", Bo, [e("div", Uo, [e("img", {
            src: o(A)("login/newlogin", "emailnumber"),
            class: "emailinput__container-label__icon"
        }, null, 8, Lo), e("span", null, l(o(r).isOpenExternalAccount ? `${c.$t("otherlogin")} ${c.$t("login")}` : c.$t("email")), 1)]), e("div", No, [B(e("input", {
            type: "text",
            name: "userEmail",
            maxlength: "250",
            "onUpdate:modelValue": m[0] || (m[0] = i=>s.value = i),
            placeholder: c.$t("inputemail"),
            onInput: a,
            ref_key: "email",
            ref: p
        }, null, 40, Do), [[ce, s.value]])])])]))
    }
});
const Oo = H(Mo, [["__scopeId", "data-v-9ea79214"]])
  , Se = v=>(de("data-v-93816af6"),
v = v(),
pe(),
v)
  , Ho = {
    class: "signIn__container"
}
  , Wo = {
    class: "signIn__container-button"
}
  , zo = {
    class: "signIn_footer"
}
  , qo = Se(()=>e("div", {
    class: "forgetbg"
}, null, -1))
  , Ao = {
    class: "font24"
}
  , Go = Se(()=>e("div", {
    class: "custombg"
}, null, -1))
  , jo = {
    class: "font24"
}
  , Xo = {
    class: "idlockTip"
}
  , Yo = Se(()=>e("br", null, null, -1))
  , Ko = ["src"]
  , Zo = O({
    __name: "EmailSignIn",
    setup(v) {
        const k = K()
          , {t: d} = ee()
          , t = _(10)
          , {setLoading: r} = Ne()
          , s = te()
          , a = _(!1)
          , p = _(!1)
          , n = _()
          , c = _("login");
        async function m() {
            if (Me() && await new Promise(w=>setTimeout(w, 500)),
            !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                if (!s.isOpenExternalAccount && !ye.email1.test(s.userForm.email))
                    return D({
                        message: d(pt.email),
                        wordBreak: "break-word"
                    });
                if (!s.userForm.password || s.userForm.password.toString().trim() === "")
                    return D({
                        message: d("registerTip2"),
                        wordBreak: "break-word"
                    });
                s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""),
                s.isOpenCaptcha ? G() : (r(!0),
                await s.signIn(s.userForm).then(w=>{}
                ).catch(w=>{
                    var F;
                    w.code === 1 && (t.value = ((F = w.data) == null ? void 0 : F.passwordErrorMaxNum) || 10),
                    w.msgCode === 33 ? p.value = !0 : se(w.msgCode || 0)
                }
                ).finally(()=>{
                    y.value.setShowHiden(!1),
                    r(!1)
                }
                ))
            }
        }
        const i = ()=>{
            k.push({
                name: "register"
            })
        }
        ;
        function g() {
            k.push({
                name: "rpwd"
            }),
            s.setCurrentView("ResetPassword")
        }
        function C() {
            k.push({
                name: "CustomerService"
            })
        }
        const u = w=>{
            s.getUserForm.email = w
        }
          , y = _()
          , b = _("")
          , M = ()=>{
            a.value = !1,
            k.push({
                name: "CustomerService"
            })
        }
        ;
        Re(window, "keydown", w=>{
            w.key == "Enter" && m()
        }
        );
        const R = w=>{
            s.userForm.vCode = w,
            m()
        }
          , S = ()=>{
            p.value = !1,
            s.userForm.vCode = ""
        }
        ;
        re(async()=>{
            var F;
            const w = s.getUserForm;
            localStorage.getItem("remember") != null && ((F = localStorage.getItem("remember")) == null ? void 0 : F.toString().trim()) != "" ? w.password = localStorage.getItem("remember") : w.password = "",
            s.setUserForm({
                ...w
            })
        }
        );
        let P = we(()=>s.userForm.number, w=>{
            s.setCountDown(0)
        }
        , {
            flush: "post"
        });
        const V = async w=>{
            Q(async()=>{
                y.value.startRequestVerify(),
                r(!0),
                s.signIn(Object.assign(s.userForm, {
                    captchaId: b.value,
                    track: w
                })).then(F=>{
                    s.userForm.vCode = ""
                }
                ).catch(F=>{
                    se(F.msgCode || 0)
                }
                ).finally(()=>{
                    y.value.setShowHiden(!1),
                    r(!1)
                }
                )
            }
            )
        }
          , G = ()=>{
            Q(async()=>{
                y.value.startRequestGenerate();
                const w = await ne(Oe());
                w ? (b.value = w.data.captchaId,
                y.value.endRequestGenerate(w.data.backgroundImage, w.data.sliderImage)) : y.value.endRequestGenerate(null, null)
            }
            )
        }
          , se = w=>{
            w == 122 && (a.value = !0)
        }
        ;
        return Ve(()=>{
            P(),
            s.getUserForm.remember || (s.getUserForm.password = "")
        }
        ),
        (w,F)=>{
            const ie = z("van-checkbox");
            return f(),
            $("div", Ho, [I(Oo, {
                ref_key: "email",
                ref: n,
                type: c.value,
                email: o(s).userForm.email,
                onChangeN: u
            }, null, 8, ["type", "email"]), I(le, {
                value: o(s).userForm.password,
                "onUpdate:value": F[0] || (F[0] = q=>o(s).userForm.password = q),
                label: w.$t("password"),
                maxlength: 32
            }, null, 8, ["value", "label"]), e("div", null, [I(ie, {
                modelValue: o(s).userForm.rememberpwd,
                "onUpdate:modelValue": F[1] || (F[1] = q=>o(s).userForm.rememberpwd = q),
                "checked-color": "#ff7172"
            }, {
                default: W(()=>[E(l(w.$t("rememberPSW")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), e("div", Wo, [e("button", {
                class: N([o(s).userForm.email != "" ? "active" : ""]),
                onClick: m
            }, l(w.$t("login")), 3), e("button", {
                class: "register",
                onClick: i
            }, l(w.$t("register")), 1)]), e("div", zo, [o(s).isOpenForgetPasswordSMSState || o(s).isOpenForgetPasswordEmailState ? (f(),
            $("div", {
                key: 0,
                class: "forgetcon",
                onClick: g
            }, [qo, e("div", Ao, l(w.$t("forgetPSW")), 1)])) : j("", !0), e("div", {
                class: "customcon",
                onClick: C
            }, [Go, e("div", jo, l(w.$t("customerServiceTitle")), 1)])]), I(ze, {
                ref_key: "captchaRef",
                ref: y,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                text: o(d)("slideCaptchaText"),
                onFinish: V,
                onRefresh: G
            }, null, 8, ["text"]), o(s).isOpenForgetPasswordEmailState && a.value ? (f(),
            ae(Vo, {
                key: 0,
                show: a.value,
                "onUpdate:show": F[2] || (F[2] = q=>a.value = q),
                email: o(s).getUserForm.email,
                passwordErrorMaxNum: t.value
            }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : (f(),
            ae(De, {
                key: 1,
                show: a.value,
                "onUpdate:show": F[4] || (F[4] = q=>a.value = q),
                "show-cancel-btn": !0,
                title: w.$t("idlockTitle")
            }, {
                content: W(()=>[e("div", Xo, [E(l(w.$t("idlockTip1", [t.value])) + " ", 1), Yo, E(l(w.$t("idlockTip2")), 1)])]),
                footer: W(()=>[e("button", {
                    class: "dialogBtn",
                    onClick: F[3] || (F[3] = q=>a.value = !1)
                }, l(w.$t("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: M
                }, [e("img", {
                    src: o(A)("login", "iconservr")
                }, null, 8, Ko), E(" " + l(w.$t("contactServicer")), 1)])]),
                _: 1
            }, 8, ["show", "title"])), I(We, {
                showPopup: p.value,
                onOnConfirm: R,
                onOnBack: S
            }, null, 8, ["showPopup"])])
        }
    }
});
const Jo = H(Zo, [["__scopeId", "data-v-93816af6"]])
  , Qo = {
    class: "login__container-heading"
}
  , ea = {
    class: "login__container-heading__title"
}
  , ta = {
    class: "login__container-heading__subTitle"
}
  , sa = {
    class: "login_container-tab"
}
  , oa = {
    class: "login__container-form"
}
  , aa = O({
    __name: "index",
    setup(v) {
        const {t: k} = ve.global
          , d = K()
          , t = te();
        t.getRegisterState();
        const r = _("mobile")
          , s = _(void 0);
        t.userForm.logintype = r.value;
        const {openAll: a} = dt();
        function p() {
            d.replace("/")
        }
        const n = c=>{
            r.value = c,
            t.userForm.logintype = c,
            t.userForm.password = "",
            t.remember(!0)
        }
        ;
        return st((c,m,i)=>{
            i(),
            c.name === "home" && a()
        }
        ),
        re(()=>{
            t.remember(!0),
            t.getIp()
        }
        ),
        (c,m)=>{
            const i = z("NavBar");
            return f(),
            $("div", {
                class: "login__container",
                ref_key: "loginContainerRef",
                ref: s
            }, [I(i, {
                onClickLeft: p,
                leftArrow: !0,
                headLogo: !0
            }, {
                right: W(()=>[I(kt)]),
                _: 1
            }), e("div", Qo, [e("h1", ea, l(o(k)("login")), 1), e("div", ta, [e("div", null, l(c.$t("pleaseloginphoneoremail")), 1), e("div", null, l(c.$t("forgetyourpassword")), 1)])]), e("div", sa, [e("div", {
                class: N(["tab", [r.value == "mobile" ? "active" : ""]]),
                onClick: m[0] || (m[0] = g=>n("mobile"))
            }, [e("div", {
                class: N(["phonebg", [r.value == "mobile" ? "phoneactive" : ""]])
            }, null, 2), e("div", {
                class: N(["font30", [r.value == "mobile" ? "phonefont30active" : ""]])
            }, l(c.$t("mobilelogin")), 3)], 2), e("div", {
                class: N(["tab", [r.value == "email" ? "active" : ""]]),
                onClick: m[1] || (m[1] = g=>n("email"))
            }, [e("div", {
                class: N(["emialbg", [r.value == "email" ? "emailactive" : "", o(t).isOpenExternalAccount && "other"]])
            }, null, 2), e("div", {
                class: N(["font30", [r.value == "email" ? "emailfont30active" : ""]])
            }, l(o(t).isOpenExternalAccount ? c.$t("otherlogin") : c.$t("emaillogin")), 3)], 2)]), e("div", oa, [e("div", {
                class: N(["tab-content", [r.value == "mobile" ? "activecontent" : ""]])
            }, [I(no, {
                ref: "signIn"
            }, null, 512)], 2), e("div", {
                class: N(["tab-content", [r.value == "email" ? "activecontent" : ""]])
            }, [I(Jo, {
                ref: "signIn"
            }, null, 512)], 2)])], 512)
        }
    }
});
const na = H(aa, [["__scopeId", "data-v-ee3ddeea"]])
  , ua = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: na
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Oo as E, wt as L, le as P, ze as S, ws as V, We as a, fo as b, js as c, kt as d, ua as i};
