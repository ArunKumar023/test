import { T as n, U as a, S as U, J as $e, r as g, v as Pe, a9 as se, ae as ft, C as u, V as e, X as t, Y as M, a3 as W, af as Et, _ as Je, a2 as A, a0 as G, ao as go, a5 as be, $ as B, ap as yo, aq as bo, D as je, F as ye, w as Xe, a4 as P, W as mt, E as ee, y as Ns, B as Ge, ag as et, ar as sn, as as Xn, Z as V, a1 as R, at as Ht, O as hs, aa as De, ab as Ae, au as Qn, a7 as pt, j as qe, av as _t, aw as $o, ax as ko, ay as To, H as Ut, az as wo, aA as Co, aj as en, aB as Yn, l as at, aC as No, aD as Lo, a6 as Zn, A as it, I as nn, an as ht, ah as an, x as wt, am as Io, aE as Ro, aF as xo, aG as Jn, K as ea, aH as So, aI as Bo } from "./modules-37155226.js";
import { _ as K, G as gt, A as ae, h as Mo, i as Ft, j as Po, g as re, k as jt, l as Go, m as Do, S as Zt, n as Re, o as ta, p as Ao, q as sa, r as on, s as ln, t as na, v as aa, w as gs, x as Oo, y as oa, z as zo, B as Ze, C as qo, E as On, a as Ls, F as Wo, H as la, I as ia, L as ca, J as Eo, K as Fo, M as jo, O as tn, P as Ct, Q as Nt, R as Is, T as ua, U as ra, V as cn, W as Vo, X as Ho, Y as Uo, Z as Ko, $ as Xo, a0 as Qo, a1 as Yo, a2 as Zo, a3 as Jo, D as xt, a4 as Vt, a5 as ut, a6 as Kt, a7 as el, a8 as da, a9 as _a, aa as tl, ab as va, ac as sl, ad as nl, ae as al, af as pa, ag as ma, ah as un, ai as rn, aj as ol, ak as ll, al as ha, am as fa, an as il, ao as dn, ap as cl, aq as ul, ar as rl, as as ga, at as dl, au as ya, av as _l, aw as vl, ax as ba, ay as $a, az as pl, aA as ml, aB as hl, aC as fl, aD as gl, aE as Ts, aF as kt, aG as Tt, aH as zn, aI as qn, aJ as yl, aK as ka, aL as Ta, aM as bl, aN as $l, aO as kl, aP as wa, aQ as Tl, aR as wl, aS as Cl, aT as Ca, aU as Nl, aV as Ll, aW as Il, aX as Rl, u as xl } from "./page-activity-f933121a.js";
const Sl = {}
  , Bl = {
    class: "point point-flicker"
  };
function Ml(c, s) {
  return n(),
    a("div", Bl)
}
const Pl = K(Sl, [["render", Ml], ["__scopeId", "data-v-d6fe61e8"]])
  , Gl = {
    class: "noticeBar__container"
  }
  , Dl = {
    class: "noticeBar__container-body"
  }
  , Al = {
    key: 0,
    class: "noticeBar__container-body-text"
  }
  , Ol = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = gt()
        , i = g(null)
        , _ = Et(() => Ft(() => import("./noticeBarSpeaker-a00b07a4.js"), ["assets/js/noticeBarSpeaker-a00b07a4.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"]))
        , p = Et(() => Ft(() => import("./noticeBarHot-b1ea50c8.js"), ["assets/js/noticeBarHot-b1ea50c8.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"]))
        , r = g(l.messageList)
        , d = async () => {
          const v = await ae(Mo({
            pageNo: 1,
            pageSize: 5
          }));
          if (v) {
            if (l.setMessage(v.data.list),
              r.value = v.data.list,
              !r.value.length)
              return;
            i.value && clearInterval(i.value),
              i.value = setInterval(() => {
                r.value.push(r.value.shift())
              }
                , 7e3)
          }
        }
        ;
      return Pe(() => {
        r.value || setTimeout(() => {
          d()
        }
          , 1e3)
      }
      ),
        (v, o) => {
          var h;
          return n(),
            a("div", Gl, [(n(),
              se(ft(u(_)))), e("div", Dl, [r.value && r.value[0] && r.value[0].siteMessage ? (n(),
                a("div", Al, t((h = r.value[0]) == null ? void 0 : h.siteMessage), 1)) : M("", !0)]), e("button", {
                  onClick: o[0] || (o[0] = y => u(s).push({
                    name: "Notification"
                  }))
                }, [(n(),
                  se(ft(u(p)))), W(" " + t(v.$t("more")), 1)])])
        }
    }
  });
const ys = K(Ol, [["__scopeId", "data-v-6c05b3dc"]])
  , zl = ["onClick"]
  , ql = U({
    __name: "index",
    setup(c) {
      const s = g([])
        , l = [bo]
        , i = r => { }
        , _ = () => { }
        , p = r => {
          r && (window.location.href = r)
        }
        ;
      return Pe(async () => {
        const r = await ae(Po());
        r && (s.value = r.data,
          s.value.length === 0 && s.value.push({
            bannerUrl: re("home", "banner"),
            url: ""
          }))
      }
      ),
        (r, d) => {
          const v = Je("lazy");
          return n(),
            se(u(yo), {
              class: "my-swipe",
              "slides-per-view": 1,
              "space-between": 20,
              onSwiper: i,
              onSlideChange: _,
              autoplay: {
                delay: 5e3,
                disableOnInteraction: !1
              },
              modules: l,
              loop: !0
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(s.value, (o, h) => (n(),
                  se(u(go), {
                    key: h
                  }, {
                    default: A(() => [be(e("img", {
                      onClick: y => p(o.url)
                    }, null, 8, zl), [[v, o.bannerUrl]])]),
                    _: 2
                  }, 1024))), 128))]),
              _: 1
            })
        }
    }
  });
const Wl = K(ql, [["__scopeId", "data-v-5b06ab80"]])
  , El = U({
    __name: "ChangLong",
    setup(c) {
      const s = $e()
        , l = () => {
          s.push({
            name: "AllLotteryGames-ChangLong"
          })
        }
        ;
      return (i, _) => (n(),
        a("div", {
          class: "changlongEnter",
          onClick: l
        }))
    }
  });
const Rs = K(El, [["__scopeId", "data-v-4ed7b722"]])
  , Fl = {
    class: "home_menu"
  }
  , jl = ["onClick"]
  , Vl = U({
    __name: "index",
    props: {
      currentMenu: {},
      currentTitle: {}
    },
    emits: ["changeMenu", "update:currentMenu", "update:currentTitle"],
    setup(c, { emit: s }) {
      const l = c
        , i = Go()
        , _ = je([])
        , { t: p } = ye()
        , r = jt()
        , d = (o, h) => {
          s("update:currentMenu", o.key),
            s("changeMenu", o.key),
            s("update:currentTitle", o.title),
            sessionStorage.setItem("currentMenu", o.key)
        }
        ;
      return (async () => {
        let o = r.getHomeMenu;
        if (!o || o.length < 1) {
          const h = await ae(Do());
          h && h.data.forEach(y => {
            y.state === 1 && y.categoryCode !== "BigAward" && _.push({
              title: p("code" + y.typeNameCode),
              img: y.categoryImg,
              key: y.categoryCode.toLocaleLowerCase()
            })
          }
          ),
            r.setHomeMenu(_)
        } else
          _.push(...o);
        l.currentMenu.length < 1 && (d(_[0]),
          s("update:currentMenu", _[0].key),
          s("update:currentTitle", _[0].title)),
          l.currentMenu && !l.currentTitle && _.forEach(h => {
            h.key === l.currentMenu && s("update:currentTitle", h.title)
          }
          ),
          i.on("changeMenu", () => {
            Xe(() => {
              var h;
              s("update:currentMenu", "flash"),
                s("changeMenu", "flash"),
                s("update:currentTitle", (h = _.find(y => y.key === "flash")) == null ? void 0 : h.title),
                sessionStorage.setItem("currentMenu", "flash"),
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
            }
            )
          }
          )
      }
      )(),
        Pe(() => {
          i.off("changeMenu")
        }
        ),
        (o, h) => {
          const y = Je("lazy");
          return n(),
            a("div", Fl, [(n(!0),
              a(B, null, G(_, (T, $) => (n(),
                a("div", {
                  class: P(["menu_item", {
                    active: o.currentMenu === T.key
                  }]),
                  key: T.key,
                  onClick: b => d(T)
                }, [be(e("img", {
                  class: P(T.key),
                  alt: ""
                }, null, 2), [[y, T.img]]), e("span", null, t(T.title), 1)], 10, jl))), 128))])
        }
    }
  });
const Hl = K(Vl, [["__scopeId", "data-v-ca18f14a"]])
  , Ul = {
    class: "hot_container"
  }
  , Kl = {
    class: "title"
  }
  , Xl = ["src"]
  , Ql = {
    class: "popular"
  }
  , Yl = {
    class: "list"
  }
  , Zl = ["onClick"]
  , Jl = {
    class: "item"
  }
  , ei = ["src", "data-img"]
  , ti = {
    key: 0,
    class: "win-odds"
  }
  , si = {
    class: "title"
  }
  , ni = ["src"]
  , ai = {
    class: "popular"
  }
  , oi = {
    class: "list"
  }
  , li = ["onClick"]
  , ii = {
    class: "item"
  }
  , ci = ["src", "data-img"]
  , ui = {
    key: 0,
    class: "win-odds"
  }
  , ri = U({
    __name: "HotGameItem",
    props: {
      clicksTopList: {}
    },
    emits: ["onItemClick"],
    setup(c, { emit: s }) {
      const l = Zt()
        , i = _ => {
          s("onItemClick", {
            item: _
          })
        }
        ;
      return (_, p) => (n(),
        a("div", Ul, [e("div", Kl, [e("img", {
          src: u(re)("home", "tuijian"),
          alt: ""
        }, null, 8, Xl), W(t(_.$t("platRecom")), 1)]), e("div", Ql, [e("div", Yl, [(n(!0),
          a(B, null, G(_.clicksTopList[0], r => (n(),
            a("div", {
              key: r.vendorId,
              onClick: d => i(r)
            }, [e("div", Jl, [e("img", {
              src: r.imgUrl,
              alt: "",
              "data-img": u(re)("images", "avatar")
            }, null, 8, ei)]), u(l).isShowHotGameWinOdds ? (n(),
              a("div", ti, [e("span", null, t(_.$t("winOdds")), 1), e("span", null, t(r.winOdds) + "%", 1), e("div", {
                class: "win-p",
                style: mt({
                  width: `${Math.min(r.winOdds, 100)}%`
                })
              }, null, 4)])) : M("", !0)], 8, Zl))), 128))])]), e("div", si, [e("img", {
                src: u(re)("home", "hot_icon"),
                alt: ""
              }, null, 8, ni), W(t(_.$t("hot")), 1)]), e("div", ai, [e("div", oi, [(n(!0),
                a(B, null, G(_.clicksTopList[1], r => (n(),
                  a("div", {
                    key: r.vendorId,
                    onClick: d => i(r)
                  }, [e("div", ii, [e("img", {
                    src: r.imgUrl,
                    alt: "",
                    "data-img": u(re)("images", "avatar")
                  }, null, 8, ci)]), u(l).isShowHotGameWinOdds ? (n(),
                    a("div", ui, [e("span", null, t(_.$t("winOdds")), 1), e("span", null, t(r.winOdds) + "%", 1), e("div", {
                      class: "win-p",
                      style: mt({
                        width: `${Math.min(r.winOdds, 100)}%`
                      })
                    }, null, 4)])) : M("", !0)], 8, li))), 128))])])]))
    }
  });
const di = K(ri, [["__scopeId", "data-v-50236f06"]])
  , _i = {
    class: "other_game"
  }
  , vi = ["onClick"]
  , pi = U({
    __name: "OtherGameItem",
    props: {
      gameList: {},
      currentMenu: {}
    },
    emits: ["onItemClick"],
    setup(c, { emit: s }) {
      const l = _ => _.vendorImg
        , i = _ => {
          s("onItemClick", {
            item: _
          })
        }
        ;
      return (_, p) => {
        const r = Je("lazy");
        return n(),
          a("div", _i, [(n(!0),
            a(B, null, G(_.gameList, d => (n(),
              a("div", {
                key: d.slotsTypeID,
                style: {
                  position: "relative"
                }
              }, [be(e("img", {
                alt: "",
                class: P(["other_img", {
                  noSlot: _.currentMenu !== "slot"
                }]),
                onClick: v => i(d)
              }, null, 10, vi), [[r, l(d)]])]))), 128))])
      }
    }
  });
const mi = K(pi, [["__scopeId", "data-v-2735da97"]])
  , hi = {
    class: "fish_game"
  }
  , fi = ["onClick"]
  , gi = ["src", "data-img"]
  , yi = U({
    __name: "Fish",
    props: {
      gameList: {}
    },
    emits: ["onItemClick"],
    setup(c, { emit: s }) {
      const l = i => {
        s("onItemClick", {
          item: i
        })
      }
        ;
      return (i, _) => (n(),
        a("div", hi, [(n(!0),
          a(B, null, G(i.gameList, p => (n(),
            a("div", {
              class: "item",
              key: p.vendorId,
              onClick: r => l(p)
            }, [e("img", {
              src: p.img,
              alt: "",
              "data-img": u(re)("images", "avatar")
            }, null, 8, gi)], 8, fi))), 128))]))
    }
  });
const bi = K(yi, [["__scopeId", "data-v-f487ebc7"]])
  , $i = {
    class: "flash_game"
  }
  , ki = ["onClick"]
  , Ti = U({
    __name: "Flash",
    props: {
      gameList: {}
    },
    emits: ["onItemClick"],
    setup(c, { emit: s }) {
      const l = i => {
        s("onItemClick", {
          item: i
        })
      }
        ;
      return (i, _) => {
        const p = Je("lazy");
        return n(),
          a("div", $i, [(n(!0),
            a(B, null, G(i.gameList, r => be((n(),
              a("img", {
                class: "gameImg",
                key: r.vendorId,
                onClick: d => l(r)
              }, null, 8, ki)), [[p, r.img]])), 128))])
      }
    }
  });
const wi = K(Ti, [["__scopeId", "data-v-4d72bb49"]])
  , Ci = {
    class: "lottery_container"
  }
  , Ni = ["onClick"]
  , Li = {
    class: "lottery"
  }
  , Ii = ["src"]
  , Ri = ["src"]
  , xi = {
    class: "lottery_logo"
  }
  , Si = {
    class: "win_info"
  }
  , Bi = ["id"]
  , Mi = {
    class: "left"
  }
  , Pi = ["data-img"]
  , Gi = {
    class: "right"
  }
  , Di = U({
    __name: "LotterySlotItem",
    props: {
      gameList: {}
    },
    setup(c) {
      const s = c
        , l = "lottery82"
        , { t: i } = ye()
        , _ = $e()
        , p = je({
          "Win Go": [],
          "K3 Lotre": [],
          XOSO: [],
          "5D Lotre": [],
          "Trx Win": []
        })
        , r = g(null)
        , d = ee(() => jt().getDailProfit)
        , v = b => {
          if (b) {
            let f = b;
            switch (f) {
              case "Trx Win Go":
                f = "Trx Win";
                break;
              case "K3":
              case "5D":
                f = f + " Lotre";
                break;
              case "FXOSO":
                f = i("FXOSO");
              default:
                f = f
            }
            return f
          }
          return ""
        }
        , o = b => {
          if (b) {
            let f = [];
            switch (b) {
              case "Win Go":
              case "Trx Win Go":
                f = [i("lotteryHintStr1"), i("lotteryHintStr2")];
                break;
              case "5D":
              case "K3":
                f = [i("lotteryHintStr3"), i("lotteryHintStr4")];
                break;
              case "XOSO":
              case "FXOSO":
                f = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                break;
              case "Bingo18":
                f = [i("lotteryHintStr5"), i("lotteryHintStr6")];
                break;
              case "4D":
                f = [i("lotteryHintStr7"), i("lotteryHintStr6")];
                break;
              default:
                f = []
            }
            return f
          }
          return ""
        }
        , h = [{
          value: 1,
          path: "WinGo"
        }, {
          value: 3,
          path: "5D"
        }, {
          value: 2,
          path: "K3"
        }, {
          value: 4,
          path: "WinTrx"
        }, {
          value: 5,
          path: "XoSo"
        }, {
          value: 6,
          path: "XoSo"
        }, {
          value: 7,
          path: "Binguo"
        }, {
          value: 8,
          path: "4D"
        }]
        , y = b => {
          _.push({
            name: "AllLotteryGames-" + h[h.findIndex(f => f.value === b.id)].path,
            query: {
              id: b.id
            }
          })
        }
        , T = async () => {
          const b = jt().getDailProfit;
          p["5D Lotre"] = b.filter(f => f.showType == 7),
            p["K3 Lotre"] = b.filter(f => f.showType == 9),
            p.XOSO = b.filter(f => f.showType == 10),
            p["Trx Win"] = b.filter(f => f.showType == 8),
            p["Win Go"] = b.filter(f => f.showType == 11),
            setTimeout(() => {
              $()
            }
              , 1e3)
        }
        , $ = () => {
          let b = {};
          Xe(() => {
            Object.keys(p).map(f => {
              let k = s.gameList.find(m => v(m.categoryCode) === f)
                , w = document.getElementById((k == null ? void 0 : k.id) + "win");
              p[f].length > 0 && w && (b[f] = sn(w),
                Xn(b[f].value))
            }
            ),
              r.value ? clearInterval(r.value) : r.value = setInterval(() => {
                Object.values(p).forEach(f => {
                  f.length > 0 && f.unshift(f.pop())
                }
                )
              }
                , 3e3)
          }
          )
        }
        ;
      return Ns(() => {
        r.value && clearInterval(r.value)
      }
      ),
        Ge([() => s.gameList, () => d.value], ([b, f]) => {
          b.length > 0 && T()
        }
          , {
            immediate: !0
          }),
        (b, f) => {
          const k = Je("lazy");
          return n(),
            a("div", Ci, [(n(!0),
              a(B, null, G(b.gameList, w => be((n(),
                a("div", {
                  class: "lotterySlotItem",
                  key: w.id,
                  onClick: m => y(w)
                }, [e("div", Li, [["lottery82"].includes(u(l)) ? (n(),
                  a("img", {
                    key: 1,
                    src: u(re)("home/lottery", "lottery82_bg"),
                    alt: "",
                    class: "lottery_bg"
                  }, null, 8, Ri)) : (n(),
                    a("img", {
                      key: 0,
                      src: u(re)("home/lottery", w.categoryCode + "_bg"),
                      alt: "",
                      class: "lottery_bg"
                    }, null, 8, Ii)), be(e("img", xi, null, 512), [[k, w.categoryImg]]), e("span", null, t(v(w.categoryCode)), 1), e("h4", null, [e("div", null, t(o(w.categoryCode)[0]), 1), e("div", null, t(o(w.categoryCode)[1]), 1)])]), e("div", Si, [e("div", {
                      id: w.id + "win"
                    }, [(n(!0),
                      a(B, null, G(p[v(w.categoryCode)], (m, C) => (n(),
                        a("div", {
                          class: "win_item",
                          key: m.betAmount + C
                        }, [e("div", Mi, [be(e("img", {
                          alt: "",
                          "data-img": u(re)("home", "avatar")
                        }, null, 8, Pi), [[k, m.userPhoto]]), e("span", null, t(m.nickName), 1)]), e("div", Gi, t(b.$t("winningAmount")) + t(u(Re)(m.amount || 0)), 1)]))), 128))], 8, Bi)])], 8, Ni)), [[et, w.state == 1]])), 128))])
        }
    }
  });
const Ai = K(Di, [["__scopeId", "data-v-91dcc665"]])
  , Oi = {
    alt: ""
  }
  , zi = U({
    __name: "ElectronicWinRate",
    setup(c) {
      const s = Zt()
        , l = ee(() => s.winRate.electronicWinRateImgUrl || "")
        , i = ee(() => !!(s.winRate.isShowElectronicWinRateExternalLink && l.value))
        , _ = () => {
          s.winRate.electronicWinRateExternalLink && window.open(s.winRate.electronicWinRateExternalLink)
        }
        ;
      return (p, r) => {
        const d = Je("lazy");
        return i.value ? (n(),
          a("div", {
            key: 0,
            class: "WinRate",
            onClick: _
          }, [be(e("img", Oi, null, 512), [[d, l.value]])])) : M("", !0)
      }
    }
  });
const qi = K(zi, [["__scopeId", "data-v-31fca86c"]])
  , bs = c => (De("data-v-5753dc86"),
    c = c(),
    Ae(),
    c)
  , Wi = {
    class: "home_container"
  }
  , Ei = bs(() => e("div", {
    class: "skeleton_hot"
  }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1))
  , Fi = bs(() => e("div", {
    class: "skeleton_other"
  }, [e("div"), e("div"), e("div"), e("div")], -1))
  , ji = bs(() => e("div", {
    class: "skeleton_hot"
  }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1))
  , Vi = bs(() => e("div", {
    class: "skeleton_flash"
  }, [e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div"), e("div")], -1))
  , Hi = bs(() => e("div", {
    class: "skeleton_lottery"
  }, [e("div", null, [e("div")]), e("div")], -1))
  , Ui = U({
    __name: "index",
    props: {
      currentMenu: {},
      currentTitle: {}
    },
    setup(c) {
      const s = c
        , { start: l, end: i, flag: _ } = ta()
        , p = $e()
        , { t: r } = ye()
        , d = g(!1)
        , v = g(!1)
        , o = je({
          slot: [],
          video: [],
          chess: [],
          sport: [],
          popular: {
            platformList: [],
            clicksTopList: []
          },
          fish: [],
          flash: [],
          lottery: []
        })
        , h = g()
        , y = k => ["slot", "video", "chess", "sport"].includes(k)
        , T = async () => {
          const k = await ae(Ao())
            , w = ["slot", "video", "chess", "sport", "lottey"];
          if (k) {
            const m = sa(k.data);
            Object.keys(o).forEach(C => {
              w.includes(C) ? o[C] = m[C].filter(N => N.state === 1) : C === "popular" ? o.popular = {
                platformList: m[C].platformList,
                clicksTopList: m[C].clicksTopList
              } : o[C] = m[C]
            }
            ),
              sessionStorage.setItem("gameList", JSON.stringify(o))
          }
          setTimeout(() => {
            d.value = !1
          }
            , 0)
        }
        , $ = k => {
          if (!gt().token) {
            p.push({
              name: "login"
            });
            return
          }
          let { item: m } = k;
          ["chess", "slot"].includes(s.currentMenu) ? (sessionStorage.setItem("slotChessGameList", JSON.stringify(o[s.currentMenu])),
            sessionStorage.setItem("currentGame", JSON.stringify(m)),
            p.push({
              name: "AllOnlineGames",
              query: {
                title: s.currentTitle
              }
            })) : hs({
              title: r("tips"),
              message: r("tipsPlayGame"),
              cancelButtonText: r("cancel"),
              showCancelButton: !0
            }).then(async () => {
              l(() => {
                hs({
                  title: "",
                  message: r("gameLoadTimeOut")
                }).then(() => {
                  p.push({
                    path: "/"
                  })
                }
                )
              }
              );
              let N = {
                gameCode: m.gameCode || m.gameID,
                vendorCode: Number(m.vendorId) || Number(m.slotsTypeID)
              };
              const S = await ae(on({
                ...N,
                phonetype: ln()
              }));
              if (S && !_.value)
                na() ? aa("game", {
                  url: (S == null ? void 0 : S.data) || "",
                  gameName: k.item.slotsName || k.item.gameNameEn || ""
                }) : gs(S == null ? void 0 : S.data, 1);
              else {
                !_.value && i(!0);
                return
              }
              !_.value && i()
            }
            )
        }
        , b = () => {
          p.push({
            name: "FishGames"
          })
        }
        ;
      return (() => {
        d.value = !0,
          T(),
          h.value = sessionStorage.getItem("homeMenu"),
          h.value === "lottery" && (v.value = !0)
      }
      )(),
        (k, w) => {
          const m = V("van-skeleton");
          return n(),
            a("div", Wi, [k.currentMenu === "popular" ? (n(),
              se(m, {
                key: 0,
                loading: d.value
              }, {
                template: A(() => [Ei]),
                default: A(() => [R(di, {
                  clicksTopList: [o.popular.platformList, o.popular.clicksTopList],
                  onOnItemClick: $
                }, null, 8, ["clicksTopList"])]),
                _: 1
              }, 8, ["loading"])) : M("", !0), y(k.currentMenu) ? (n(),
                se(m, {
                  key: 1,
                  loading: d.value
                }, {
                  template: A(() => [Fi]),
                  default: A(() => [["slot"].includes(k.currentMenu) ? (n(),
                    se(qi, {
                      key: 0
                    })) : M("", !0), R(mi, {
                      gameList: o[k.currentMenu],
                      currentMenu: k.currentMenu,
                      onOnItemClick: $
                    }, null, 8, ["gameList", "currentMenu"])]),
                  _: 1
                }, 8, ["loading"])) : M("", !0), k.currentMenu === "fish" ? (n(),
                  se(m, {
                    key: 2,
                    loading: d.value
                  }, {
                    template: A(() => [ji]),
                    default: A(() => [R(bi, {
                      gameList: o.fish.slice(0, 15),
                      onOnItemClick: $
                    }, null, 8, ["gameList"])]),
                    _: 1
                  }, 8, ["loading"])) : M("", !0), k.currentMenu === "flash" ? (n(),
                    se(m, {
                      key: 3,
                      loading: d.value
                    }, {
                      template: A(() => [Vi]),
                      default: A(() => [R(wi, {
                        gameList: o.flash,
                        currentMenu: k.currentMenu,
                        onOnItemClick: $
                      }, null, 8, ["gameList", "currentMenu"])]),
                      _: 1
                    }, 8, ["loading"])) : M("", !0), k.currentMenu === "lottery" ? (n(),
                      se(m, {
                        key: 4,
                        loading: v.value
                      }, {
                        template: A(() => [Hi]),
                        default: A(() => [(n(),
                          se(Ht, null, [k.currentMenu === "lottery" ? (n(),
                            se(Ai, {
                              key: 0,
                              gameList: o.lottery
                            }, null, 8, ["gameList"])) : M("", !0)], 1024))]),
                        _: 1
                      }, 8, ["loading"])) : M("", !0), k.currentMenu === "fish" ? (n(),
                        a("div", {
                          key: 5,
                          class: "all_btn",
                          onClick: b
                        }, t(k.$t("viewAll")), 1)) : M("", !0)])
        }
    }
  });
const Ki = K(Ui, [["__scopeId", "data-v-5753dc86"]])
  , Xi = U({
    __name: "Turntable",
    setup(c) {
      const s = $e()
        , l = g()
        , i = Zt();
      function _() {
        i.getBigTurntableLink && window.open(i.getBigTurntableLink)
      }
      return (p, r) => (n(),
        a(B, null, [u(i).getOpenTurntable ? (n(),
          a("div", {
            key: 0,
            class: P(["turntable-lottery", {
              "lottery-bottom": u(i).getBigTurntableLink
            }]),
            onClick: r[0] || (r[0] = d => u(s).push({
              name: "Turntable"
            }))
          }, null, 2)) : M("", !0), u(i).getBigTurntableLink ? (n(),
            a("div", {
              key: 1,
              class: "turntable",
              onClick: _,
              ref_key: "turntableId",
              ref: l
            }, null, 512)) : M("", !0)], 64))
    }
  });
const Qi = c => (De("data-v-6c54ca58"),
  c = c(),
  Ae(),
  c)
  , Yi = Qi(() => e("svg", {
    class: "line",
    width: "1",
    height: "60",
    viewBox: "0 0 1 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("line", {
    x1: "0.5",
    x2: "0.5",
    y2: "60",
    stroke: "white"
  })], -1))
  , Zi = ["src"]
  , Ji = {
    class: "text"
  }
  , ec = 1.1
  , tc = U({
    __name: "DownloadPWA",
    setup(c) {
      const s = Qn("show-pwa-download", !0);
      let l = null;
      const { t: i } = ye()
        , _ = je({
          canIUse: !1,
          download: null
        });
      window.addEventListener("beforeinstallprompt", o => {
        o.preventDefault(),
          l = o,
          _.canIUse = !0
      }
        , {
          once: !0
        }),
        _.download = function () {
          l.prompt().then(o => {
            o.outcome === "accepted" && (_.canIUse = !1)
          }
          )
        }
        ;
      let p = Oo();
      p = p == null ? void 0 : p.toLowerCase();
      const r = ee(() => re("common", "downloadPWA" + p));
      /[\u4e00-\u9fa5]+/.test(p) && (p = "vxth");
      const d = document.querySelector("link[rel='manifest']");
      d == null || d.setAttribute("href", "/manifest/manifest." + p + ".json?version=" + ec);
      async function v() {
        if (s.value)
          if (_.canIUse)
            _.download && _.download();
          else {
            const o = await ae(oa());
            if (!o)
              return;
            gs(zo ? o.data.androidUrl : o.data.iosUrl)
          }
      }
      return (o, h) => {
        const y = V("van-icon");
        return n(),
          a("div", {
            class: "btn",
            onClick: v
          }, [Yi, R(y, {
            class: "close",
            name: "close",
            color: "rgb(255,255,255)",
            onClick: h[0] || (h[0] = T => s.value = !1)
          }), e("img", {
            class: "icon",
            src: r.value
          }, null, 8, Zi), e("div", Ji, t(_.canIUse ? u(i)("addToDesktop") : u(i)("downloadAPP")), 1)])
      }
    }
  });
const sc = K(tc, [["__scopeId", "data-v-6c54ca58"]])
  , nc = {
    class: "dialog__container",
    role: "dialog",
    tabindex: "0"
  }
  , ac = {
    class: "dialog__container-img"
  }
  , oc = {
    alt: ""
  }
  , lc = {
    class: "dialog__container-title"
  }
  , ic = {
    class: "dialog__container-content"
  }
  , cc = {
    class: "dialog__container-footer"
  }
  , uc = U({
    __name: "HomeDialog",
    props: {
      show: {
        type: Boolean,
        default: !1
      },
      title: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      showCancelBtn: {
        type: Boolean,
        default: !0
      },
      cancelText: {
        type: String,
        default: ""
      },
      clickOutSide: {
        type: Boolean,
        default: !1
      },
      pathname: {
        type: String,
        default: "main/Laundry"
      },
      picname: {
        type: String,
        default: "superjackpotHome"
      }
    },
    emits: ["update:show", "confirm"],
    setup(c, { emit: s }) {
      const l = c;
      Ge(() => l.show, p => {
        p ? window.addEventListener("touchmove", _, {
          passive: !1
        }) : window.removeEventListener("touchmove", _)
      }
      );
      function i(p) {
        l.clickOutSide && s("update:show", !1)
      }
      const _ = p => {
        l.show && p.preventDefault()
      }
        ;
      return (p, r) => {
        const d = Je("lazy");
        return n(),
          a("div", {
            class: P(["dialog", {
              active: c.show,
              inactive: !c.show
            }])
          }, [e("div", nc, [e("div", ac, [pt(p.$slots, "header", {}, () => [be(e("img", oc, null, 512), [[d, u(re)(c.pathname, c.picname)]])], !0)]), e("div", lc, [pt(p.$slots, "title", {}, () => [e("h1", null, t(c.title), 1)], !0)]), e("div", ic, [pt(p.$slots, "content", {}, void 0, !0)]), e("div", cc, [pt(p.$slots, "footer", {}, () => [c.showCancelBtn ? (n(),
            a("button", {
              key: 0,
              onClick: r[0] || (r[0] = () => {
                s("update:show", !1)
              }
              )
            }, t(c.confirmText || p.$t("cancelText")), 1)) : M("", !0), e("button", {
              onClick: r[1] || (r[1] = () => {
                s("confirm")
              }
              )
            }, t(c.cancelText || p.$t("checkOver")), 1)], !0)])]), e("div", {
              class: "dialog__outside",
              onClick: i
            })], 2)
      }
    }
  });
const rc = K(uc, [["__scopeId", "data-v-02d72267"]])
  , dc = {
    class: "luckyWinners__container"
  }
  , _c = {
    class: "luckyWinners__container-wrapper"
  }
  , vc = {
    class: "luckyWinners__container-wrapper__item-img"
  }
  , pc = {
    class: "luckyWinners__container-wrapper__item-info"
  }
  , mc = {
    class: "gameTypeImg"
  }
  , hc = {
    class: "luckyWinners__container-wrapper__item-winAmount"
  }
  , fc = U({
    __name: "index",
    setup(c) {
      const s = jt()
        , l = g(null)
        , i = g(null)
        , _ = g([])
        , p = d => {
          if (d.length >= 7)
            return d.substring(0, 3) + "***" + d.substring(d.length - 3);
          {
            const v = "***"
              , o = 7 - d.length
              , h = "*".repeat(o);
            return d.substring(0, Math.ceil((7 - o) / 2)) + v + h + d.substring(Math.ceil((7 - o) / 2))
          }
        }
        ;
      async function r() {
        const [d, v] = await Ze(qo());
        if (d)
          qe({
            message: d.msg,
            wordBreak: "break-word"
          });
        else if (v) {
          _.value = v.data.dataList || [],
            s.setDailProfit(_.value);
          const o = v.data.penarikanList || [];
          o.length > 0 && s.setRankList(o)
        }
      }
      return Pe(async () => {
        await r(),
          Xn(i.value),
          _.value.length > 0 && (l.value = setInterval(async () => {
            _.value.unshift(_.value.pop())
          }
            , 3e3))
      }
      ),
        Ns(() => {
          clearInterval(l.value)
        }
        ),
        (d, v) => {
          const o = Je("lazy");
          return n(),
            a("div", dc, [e("h1", null, t(d.$t("winningDetal")), 1), e("div", _c, [e("div", {
              ref_key: "wrapperRef",
              ref: i
            }, [(n(!0),
              a(B, null, G(_.value.slice(0, 6), h => (n(),
                a("div", {
                  class: "luckyWinners__container-wrapper__item",
                  key: h
                }, [e("div", vc, [be(e("img", null, null, 512), [[o, u(re)("main/Avatar", h.userPhoto) || u(re)("home", "avatar")]])]), e("div", pc, [e("h1", null, t(p(h.nickName)), 1)]), be(e("img", mc, null, 512), [[o, h.imgUrl]]), e("div", hc, [e("h1", null, t(d.$t("titleGot")) + " " + t(u(Re)(h.amount || 0)), 1), e("span", null, t(d.$t("winningAmount")), 1)])]))), 128))], 512)])])
        }
    }
  });
const gc = K(fc, [["__scopeId", "data-v-5eadbc3e"]])
  , yc = {
    class: "dailyProfitRank"
  }
  , bc = {
    class: "dailyProfitRank__content"
  }
  , $c = {
    class: "dailyProfitRank__content-topThree"
  }
  , kc = ["data-img"]
  , Tc = ["data-img"]
  , wc = {
    class: "dailyProfitRank__content-list"
  }
  , Cc = {
    class: "left-rank"
  }
  , Nc = ["data-img"]
  , Lc = ["data-img"]
  , Ic = {
    class: "middle-name"
  }
  , Rc = {
    class: "right-box"
  }
  , xc = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = jt()
        , i = {
          nickName: s("noData"),
          userPhoto: "",
          price: 0,
          time: "",
          typeName: ""
        };
      Ge(() => l.getRankList, r => {
        _.value.splice(0, r.length, ...r.sort((d, v) => v.price - d.price).slice(0, 3)),
          p.value.splice(0, r.length, ...r.sort((d, v) => v.price - d.price).slice(3, 10))
      }
      );
      const _ = g([i, i, i])
        , p = g([]);
      return (r, d) => {
        const v = Je("lazy");
        return n(),
          a("div", yc, [e("h1", null, t(r.$t("earningsRankingToday")), 1), e("div", bc, [e("div", $c, [(n(!0),
            a(B, null, G(_.value, (o, h) => (n(),
              a("div", {
                class: "dailyProfitRank__content-topThree__item",
                key: h,
                style: mt({
                  order: h === 0 ? 2 : h === 2 ? 3 : 1,
                  top: h === 0 ? "-45px" : "-30px"
                })
              }, [e("div", {
                style: mt({
                  background: `url(${u(re)("images/DailyProfitRank", `border${h + 1}`)}) no-repeat center center / 100% 100%`
                })
              }, [o.userPhoto.length > 2 ? be((n(),
                a("img", {
                  key: 0,
                  "data-img": u(re)("home", "avatar")
                }, null, 8, kc)), [[v, o.userPhoto]]) : be((n(),
                  a("img", {
                    key: 1,
                    "data-img": u(re)("home", "avatar")
                  }, null, 8, Tc)), [[v, u(re)("main/Avatar", o.userPhoto)]])], 4), e("div", null, [be(e("img", null, null, 512), [[v, u(re)("images/DailyProfitRank", `crown${h + 1}`)]]), be(e("img", null, null, 512), [[v, u(re)("images/DailyProfitRank", `place${h + 1}`)]])]), e("span", null, t(u(On)(o.nickName)), 1), e("span", null, t(u(Re)(o.price)), 1)], 4))), 128))]), e("div", wc, [(n(!0),
                    a(B, null, G(p.value, (o, h) => (n(),
                      a("div", {
                        class: "dailyProfitRank__content-list__item",
                        key: h
                      }, [e("span", Cc, t(h + 4), 1), o.userPhoto.length > 2 ? be((n(),
                        a("img", {
                          key: 0,
                          "data-img": u(re)("home", "avatar")
                        }, null, 8, Nc)), [[v, o.userPhoto]]) : be((n(),
                          a("img", {
                            key: 1,
                            "data-img": u(re)("home", "avatar")
                          }, null, 8, Lc)), [[v, u(re)("main/Avatar", o.userPhoto)]]), e("span", Ic, t(u(On)(o.nickName)), 1), e("span", Rc, t(u(Re)(o.price)), 1)]))), 128))])])])
      }
    }
  });
const Sc = K(xc, [["__scopeId", "data-v-9057b220"]])
  , Bc = {
    class: "content_home"
  }
  , Mc = ["src"]
  , Pc = {
    class: "content__right"
  }
  , Gc = ["src"]
  , Dc = ["src", "onClick"]
  , Ac = {
    class: "promptHeader"
  }
  , Oc = ["innerHTML"]
  , zc = {
    class: "Laundry-Con"
  }
  , qc = {
    class: "Laundry-Con_tip"
  }
  , Wc = {
    class: "Landty-Con-tips"
  }
  , Ec = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , { setLoading: i } = Ls()
        , _ = Zt();
      i(!1);
      const { closeLaundry: p, closePrompt: r, store: d, promptContent: v } = Wo()
        , o = ee(() => _.getIsShowLotteryDragon)
        , h = g(sessionStorage.getItem("currentMenu") || "")
        , y = g("");
      g(!1),
        g(!1);
      const T = Qn("show-pwa-download", !0);
      function $() {
        l.push({
          name: "Messages"
        })
      }
      const b = ee(() => _.getIsCanAppDownload)
        , f = ee(() => _.getIsShowAppDownloadIcon);
      async function k() {
        const x = await ae(oa());
        if (x) {
          let I = navigator.userAgent.toLowerCase()
            , O = "";
          I.indexOf("windows") != -1 || I.indexOf("android") != -1 ? O = x.data.androidUrl : I.indexOf("iphone") != -1 || I.indexOf("mac") != -1 || I.indexOf("ipad") != -1 ? O = x.data.iosUrl : O = x.data.androidUrl,
            gs(O)
        }
      }
      const w = () => {
        p(),
          l.push({
            name: "SuperJackpot"
          })
      }
        , m = gt()
        , C = g(!0);
      async function N() {
        const x = jt();
        C.value = !(m.getUserInfo.unRead > 0),
          x.setReadState(C.value)
      }
      const S = x => { }
        , L = ee(() => _.getProjectLogo);
      return Pe(() => {
        N(),
          i(!1)
      }
      ),
        (x, I) => {
          const O = V("NavBar")
            , D = V("van-dialog");
          return n(),
            a("div", Bc, [R(O, null, {
              left: A(() => [e("img", {
                src: L.value,
                alt: ""
              }, null, 8, Mc)]),
              right: A(() => [e("div", Pc, [e("div", {
                class: "message",
                onClick: $
              }, [e("img", {
                src: u(re)("home", "message")
              }, null, 8, Gc), be(R(Pl, {
                class: "point"
              }, null, 512), [[et, !C.value]])]), b.value ? (n(),
                a("img", {
                  key: 0,
                  src: u(re)("home", "down"),
                  class: "down",
                  onClick: _t(k, ["stop"])
                }, null, 8, Dc)) : M("", !0)])]),
              _: 1
            }), R(Wl), R(ys, {
              key: "home"
            }), R(Hl, {
              currentMenu: h.value,
              "onUpdate:currentMenu": I[0] || (I[0] = j => h.value = j),
              onChangeMenu: S,
              currentTitle: y.value,
              "onUpdate:currentTitle": I[1] || (I[1] = j => y.value = j)
            }, null, 8, ["currentMenu", "currentTitle"]), R(Ki, {
              currentMenu: h.value,
              currentTitle: y.value
            }, null, 8, ["currentMenu", "currentTitle"]), R(gc), R(Sc), o.value ? (n(),
              se(Rs, {
                key: 0
              })) : M("", !0), f.value && u(T) ? (n(),
                se(sc, {
                  key: 1
                })) : M("", !0), R(Xi), R(D, {
                  show: u(d).prompt,
                  "onUpdate:show": I[2] || (I[2] = j => u(d).prompt = j),
                  "confirm-button-text": u(s)("confirm"),
                  onConfirm: u(r)
                }, {
                  default: A(() => [e("div", Ac, t(u(s)("prompt")), 1), e("div", {
                    class: "promptContent",
                    innerHTML: u(v)
                  }, null, 8, Oc)]),
                  _: 1
                }, 8, ["show", "confirm-button-text", "onConfirm"]), R(rc, {
                  show: u(d).laundry,
                  "onUpdate:show": I[3] || (I[3] = j => u(d).laundry = j),
                  onConfirm: w,
                  "show-cancel-btn": !1,
                  confirmText: "OK",
                  title: u(s)("congratulations")
                }, {
                  content: A(() => [e("div", zc, [e("div", qc, t(u(s)("getSuper")), 1), e("div", Wc, t(u(s)("getRewards")), 1)])]),
                  _: 1
                }, 8, ["show", "title"])])
        }
    }
  });
const Fc = K(Ec, [["__scopeId", "data-v-4760d9ea"]])
  , VS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Fc
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , jc = {
    moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
    redNum: /^([1-9]\d{0,2}|1000)$/,
    requiredNum: /^.{0,20}$/,
    passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
    passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    outmoneypwd: /^\d{6}$/,
    name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
    tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
    yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
    httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
    password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
    account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
    email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
    email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    length1: /^.{6,30}$/,
    phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
    moneys21: /^\d{1,4}(\.\d{1,2})?$/,
    ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
    int: /^[1-9]\d*$/,
    verifyname: /[^a-zA-Z\s+$]/g,
    inputrule: /^[0-9,|]+$/
  }
  , Vc = {
    moneyup: "validateDesc1",
    redNum: "validateDesc2",
    requiredNum: "validateDesc3",
    passReg2: "pswRequirements",
    outmoneypwd: "validateDesc5",
    name: "validateDesc6",
    tuiName: "validateDesc7",
    endSpace: "validateDesc8",
    yaoma: "validateDesc9",
    httpCheck: "validateDesc10",
    password: "validateDesc11",
    account: "validateDesc13",
    email: "validateDesc14",
    length1: "validateDesc15",
    phone: "validateDesc16",
    moneys2: "validateDesc17",
    moneys21: "validateDesc18",
    ip: "validateDesc19",
    int: "validateDesc20",
    verifyname: "validateDesc21",
    inputtip: "validateDesc22"
  }
  , Hc = {
    class: "lotteryGamesList__container"
  }
  , Uc = {
    alt: ""
  }
  , Kc = {
    class: "lotteryGamesList__container-item__time"
  }
  , Xc = U({
    __name: "index",
    props: {
      gamesList: {
        type: Object,
        default: () => { }
      }
    },
    setup(c) {
      const s = $e();
      function l() {
        s.push({
          name: "AllLotteryGames-VietnamLottery"
        })
      }
      return (i, _) => {
        const p = Je("lazy");
        return n(),
          a("div", Hc, [e("div", {
            class: "lotteryGamesList__container-item",
            onClick: l
          }, [be(e("img", Uc, null, 512), [[p, u(re)("home/AllLotteryGames", "cover")]]), e("span", Kc, t(c.gamesList.title), 1)])])
      }
    }
  });
const Qc = K(Xc, [["__scopeId", "data-v-01da4a9c"]])
  , Yc = {
    class: "lotteryGames__container"
  }
  , Us = 46 + 90 + 35 + 16
  , Wn = 16 + 28
  , Zc = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , i = g(0)
        , _ = g(0)
        , p = g(null)
        , r = [{
          title: s("all"),
          value: "all"
        }, {
          title: "Win Go",
          value: "winGo"
        }, {
          title: s("Lotre4d"),
          value: "4DLottery"
        }, {
          title: "Lottery",
          value: "lottery"
        }, {
          title: "Xổ số",
          value: "lotteryVi"
        }, {
          title: "Xổ số",
          value: "lotteryVi"
        }]
        , d = [{
          title: s("all"),
          value: "all"
        }, {
          title: s("minites1"),
          value: "60"
        }, {
          title: s("minites3"),
          value: "180"
        }, {
          title: s("minites5"),
          value: "300"
        }, {
          title: s("minites10"),
          value: "600"
        }, {
          title: s("minitesLong"),
          value: "long"
        }];
      function v() {
        l.go(-1)
      }
      function o(b) {
        return b === i.value ? i.value : -1
      }
      const { direction: h } = $o(p, {
        onSwipeStart: () => {
          y()
        }
        ,
        onSwipe: y,
        onSwipeEnd: () => {
          y()
        }
      });
      function y() {
        const b = document.getElementById(`gamesList-${i.value}`);
        if (b) {
          const { top: f, bottom: k } = b.getBoundingClientRect();
          k - Us - Wn < 0 ? h.value === "UP" && (i.value = i.value + 1) : f - Us - Wn > 0 && h.value === "DOWN" && (i.value = i.value - 1)
        }
      }
      function T() {
        $()
      }
      function $() {
        const b = document.getElementById(`gamesList-${i.value}`);
        b && p.value.scrollTo({
          top: b.offsetTop - Us,
          behavior: "smooth"
        })
      }
      return (b, f) => {
        const k = V("NavBar")
          , w = V("van-tab")
          , m = V("van-tabs");
        return n(),
          a("div", Yc, [R(k, {
            "left-arrow": "",
            title: b.$t("lottery"),
            onClickLeft: v
          }, null, 8, ["title"]), R(m, {
            class: "lotteryGames__container-tabBar mgt10",
            active: i.value,
            "onUpdate:active": f[0] || (f[0] = C => i.value = C),
            onClickTab: T,
            type: "card",
            color: "transparent",
            background: "transparent"
          }, {
            default: A(() => [(n(),
              a(B, null, G(r, (C, N) => R(w, {
                name: N,
                key: N,
                title: C.title
              }, null, 8, ["name", "title"])), 64))]),
            _: 1
          }, 8, ["active"]), R(m, {
            class: "lotteryGames__container-timeTab",
            active: _.value,
            "onUpdate:active": f[1] || (f[1] = C => _.value = C),
            color: "#F13F39",
            background: "#fff"
          }, {
            default: A(() => [(n(),
              a(B, null, G(d, (C, N) => R(w, {
                name: N,
                key: N,
                title: C.title
              }, null, 8, ["name", "title"])), 64))]),
            _: 1
          }, 8, ["active"]), e("div", {
            class: "lotteryGames__container-list",
            ref_key: "allGamesContainer",
            ref: p
          }, [(n(),
            a(B, null, G(d, (C, N) => R(Qc, {
              "games-list": C,
              active: o(N),
              key: N,
              id: `gamesList-${N}`
            }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
      }
    }
  });
const Jc = K(Zc, [["__scopeId", "data-v-7b29b132"]])
  , HS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Jc
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Na = Symbol();
var La = (c, s) => {
  const l = c.__vccOpts || c;
  for (const [i, _] of s)
    l[i] = _;
  return l
}
  ;
const eu = U({
  name: "FunTabItem",
  props: {
    title: String,
    name: [String, Number],
    badge: [String, Number]
  },
  setup(c) {
    const s = ko(Na)
      , l = g()
      , i = ee(() => (s == null ? void 0 : s.activeValue.value) === c.name ? {
        color: s == null ? void 0 : s.activeColor.value
      } : {})
      , _ = () => {
        s == null || s.setActiveValue(c.name)
      }
      , p = {
        name: sn(c, "name"),
        el: l
      };
    return Pe(() => {
      var r;
      (r = s.addItem) == null || r.call(s, p)
    }
    ),
      Ns(() => {
        var r;
        (r = s.removeItem) == null || r.call(s, p)
      }
      ),
    {
      el: l,
      style: i,
      handleClick: _
    }
  }
})
  , tu = {
    class: "fun-tab-item__wrap"
  }
  , su = {
    class: "fun-tab-item__label"
  }
  , nu = {
    key: 0,
    class: "fun-tab-item__badge"
  };
function au(c, s, l, i, _, p) {
  return n(),
    a("div", {
      ref: "el",
      style: mt(c.style),
      class: "fun-tab-item",
      onClick: s[0] || (s[0] = (...r) => c.handleClick && c.handleClick(...r))
    }, [e("div", tu, [pt(c.$slots, "icon"), e("div", su, [pt(c.$slots, "default", {}, () => [W(t(c.title), 1)])]), c.badge ? (n(),
      a("div", nu, t(c.badge), 1)) : M("v-if", !0)])], 4)
}
var Ia = La(eu, [["render", au], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]]);
const Ks = window;
function ou() {
  let c = 0;
  const s = ["webkit", "moz"];
  for (let l = 0; l < s.length && !window.requestAnimationFrame; ++l)
    window.requestAnimationFrame = Ks[s[l] + "RequestAnimationFrame"],
      window.cancelAnimationFrame = Ks[s[l] + "CancelAnimationFrame"] || Ks[s[l] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function (l) {
    const i = Date.now()
      , _ = i - c
      , p = Math.max(0, 16.7 - _)
      , r = window.setTimeout(function () {
        l(_)
      }, p);
    return c = i + p,
      r
  }
  ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (l) {
      clearTimeout(l)
    }
    )
}
const lu = U({
  name: "FunTabs",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    lineWidth: {
      type: [Number, String],
      default: 30
    },
    lineHeight: {
      type: Number,
      default: 3
    },
    activeColor: {
      type: String,
      default: "#1677ff"
    },
    additionalX: {
      type: Number,
      default: 50
    },
    reBoundExponent: {
      type: Number,
      default: 10,
      validator(c) {
        return c > 0
      }
    },
    inertialDuration: {
      type: Number,
      default: 1e3,
      validator(c) {
        return c > 0
      }
    },
    reBoundingDuration: {
      type: Number,
      default: 360
    }
  },
  emits: ["update:modelValue", "change"],
  setup(c, { emit: s, expose: l }) {
    let i = null;
    const _ = []
      , p = g()
      , r = g()
      , d = g(c.modelValue)
      , v = g(0)
      , o = g(0)
      , h = g(0)
      , y = g(0)
      , T = g(0)
      , $ = g(!1)
      , b = g(!1)
      , f = g(0)
      , k = g(0)
      , w = g(0)
      , m = g(0)
      , C = g(0)
      , N = g(0)
      , S = g(16.7)
      , L = g(0)
      , x = g(0)
      , I = g(0)
      , O = g(.001)
      , D = g(.001)
      , j = ee(() => {
        const F = b.value && !$.value ? c.reBoundingDuration : 0;
        return {
          transitionTimingFunction: b.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
          transitionDuration: `${F}ms`,
          transform: `translate3d(${f.value}px, 0px, 0px)`
        }
      }
      )
      , X = ee(() => ({
        transition: "all 300ms",
        width: `${o.value}px`,
        height: `${c.lineHeight}px`,
        transform: `translate3d(${v.value}px, 0, 0)`,
        backgroundColor: c.activeColor
      }))
      , ce = ee(() => m.value <= k.value);
    Ge(() => c.modelValue, F => {
      d.value = F,
        de()
    }
    );
    const de = () => {
      i || (i = new Promise(F => {
        Xe(() => {
          Se(),
            F(),
            i = null
        }
        )
      }
      ))
    }
      , le = F => {
        d.value = F,
          s("update:modelValue", F),
          s("change", F)
      }
      , J = F => {
        _.push(F),
          de()
      }
      , Q = F => {
        const we = _.findIndex(Ee => Ee.name === F.name);
        we !== -1 && (_.splice(we, 1),
          de())
      }
      , _e = {
        activeValue: d,
        activeColor: sn(c, "activeColor"),
        addItem: J,
        removeItem: Q,
        setActiveValue: le
      };
    To(Na, _e);
    const Se = () => {
      var F, we;
      h.value = ((F = p.value) == null ? void 0 : F.offsetWidth) || 0,
        y.value = ((we = r.value) == null ? void 0 : we.offsetWidth) - h.value,
        Me(),
        Be()
    }
      , Oe = () => (b.value = !1,
        f.value > 0 ? (b.value = !0,
          f.value = 0) : f.value < -y.value && (b.value = !0,
            f.value = -y.value),
        b.value)
      , ve = () => {
        ce.value ? f.value <= 0 && f.value + y.value > 0 || f.value > 0 ? f.value += m.value - w.value : f.value + y.value <= 0 && (f.value += c.additionalX * (m.value - w.value) / (h.value + Math.abs(f.value + y.value))) : f.value >= 0 ? f.value += c.additionalX * (m.value - w.value) / (h.value + f.value) : (f.value <= 0 && f.value + y.value >= 0 || f.value + y.value <= 0) && (f.value += m.value - w.value),
          w.value = m.value
      }
      , ke = () => {
        if (x.value = Date.now(),
          S.value = x.value - L.value,
          ce.value ? f.value <= -y.value ? (D.value *= (c.reBoundExponent + Math.abs(f.value + y.value)) / c.reBoundExponent,
            T.value = Math.min(T.value - D.value, 0)) : T.value = Math.min(T.value - D.value * S.value, 0) : f.value >= 0 ? (D.value *= (c.reBoundExponent + f.value) / c.reBoundExponent,
              T.value = Math.max(T.value - D.value, 0)) : T.value = Math.max(T.value - D.value * S.value, 0),
          f.value += T.value * S.value / 2,
          Math.abs(T.value) <= O.value) {
          Oe();
          return
        }
        L.value = x.value,
          I.value = requestAnimationFrame(ke)
      }
      , Te = () => {
        if (!_.length)
          return;
        const F = _.find(we => we.name.value === d.value);
        return F && F.el.value
      }
      , Be = () => {
        const F = Te();
        if (!F)
          return;
        const we = F.offsetWidth
          , Ee = F.offsetLeft
          , { lineWidth: tt } = c;
        tt === "auto" ? o.value = we : tt < 1 ? o.value = we * tt : o.value = tt,
          v.value = Ee + (we - o.value) / 2
      }
      , Me = () => {
        const F = Te();
        if (!F)
          return;
        const we = F.offsetLeft
          , Ee = (h.value - F.offsetWidth) / 2;
        let tt = 0;
        const Lt = Math.abs(f.value);
        we <= Lt + Ee ? tt = Ee - (we + f.value) : tt = -(we - Lt - Ee);
        let ct = tt + f.value;
        ct > 0 && (ct = 0),
          ct < -y.value && (ct = -y.value),
          b.value = !0,
          f.value = ct
      }
      , me = F => {
        F.stopPropagation(),
          cancelAnimationFrame(I.value),
          w.value = F.touches[0].clientX
      }
      , ne = F => {
        y.value <= 0 || (F.preventDefault(),
          F.stopPropagation(),
          $.value = !0,
          C.value = N.value,
          k.value = w.value,
          m.value = F.touches[0].clientX,
          ve(),
          N.value = F.timeStamp)
      }
      , oe = F => {
        if ($.value = !1,
          Oe())
          cancelAnimationFrame(I.value);
        else {
          let we = F.timeStamp - N.value
            , Ee = N.value - C.value;
          if (Ee = Ee > 0 ? Ee : 8,
            we > 100)
            return;
          T.value = (w.value - k.value) / Ee,
            D.value = T.value / c.inertialDuration,
            L.value = Date.now(),
            I.value = requestAnimationFrame(ke)
        }
      }
      , Y = () => {
        const F = p.value;
        F.addEventListener("touchstart", me, !1),
          F.addEventListener("touchmove", ne, !1),
          F.addEventListener("touchend", oe, !1)
      }
      , Z = () => {
        const F = p.value;
        F.removeEventListener("touchstart", me),
          F.removeEventListener("touchmove", ne),
          F.removeEventListener("touchend", oe)
      }
      ;
    return Pe(() => {
      ou(),
        Y(),
        de()
    }
    ),
      Ut(() => {
        Z()
      }
      ),
      l({
        resize: Se
      }),
    {
      viewAreaRef: p,
      listRef: r,
      activeValue: d,
      lineOffset: v,
      activeLineWidth: o,
      viewAreaWidth: h,
      offsetX: y,
      speed: T,
      touching: $,
      reBounding: b,
      translateX: f,
      startX: k,
      lastX: w,
      currentX: m,
      startMoveTime: C,
      endMoveTime: N,
      frameTime: S,
      frameStartTime: L,
      frameEndTime: x,
      inertiaFrame: I,
      zeroSpeed: O,
      acceleration: D,
      listStyle: j,
      activeBarStyle: X,
      isMoveLeft: ce
    }
  }
})
  , iu = {
    ref: "viewAreaRef",
    class: "fun-tabs"
  };
function cu(c, s, l, i, _, p) {
  return n(),
    a("div", iu, [e("div", {
      ref: "listRef",
      style: mt(c.listStyle),
      class: "fun-tabs__tab-list"
    }, [pt(c.$slots, "default"), e("div", {
      style: mt(c.activeBarStyle),
      class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var Ra = La(lu, [["render", cu], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]]);
const uu = {
  class: "onlineGames__container"
}
  , ru = {
    class: "searchBox"
  }
  , du = ["placeholder"]
  , _u = ["src"]
  , vu = ["src"]
  , pu = {
    class: "onlineGames__container-list"
  }
  , mu = ["onClick"]
  , hu = {
    key: 1
  }
  , fu = {
    class: "onlineGames__container-list miniGames"
  }
  , gu = ["onClick"]
  , yu = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = g()
        , i = g([])
        , _ = g(0)
        , p = g(0)
        , r = g(!1)
        , d = g("")
        , v = g(null)
        , o = g()
        , h = g([])
        , y = g([])
        , T = g("")
        , $ = $e()
        , { start: b, end: f, flag: k } = ta()
        , w = wo(y, I => {
          var O;
          return d.value ? I.gameNameEn.toLowerCase().includes((O = d.value) == null ? void 0 : O.toLowerCase()) : I.customGameType === _.value
        }
        );
      Ge(p, I => {
        const O = h.value[I];
        y.value = [],
          L(O.slotsTypeID)
      }
      ),
        Ge(r, I => {
          I ? setTimeout(() => {
            v.value.focus()
          }
            , 0) : d.value = ""
        }
        );
      const m = I => I.indexOf("_") === -1 ? I : I.split("_")[0].toUpperCase();
      Co(d, I => {
        if (o.value) {
          const O = h.value[p.value];
          L(O.slotsTypeID, I)
        }
      }
        , {
          debounce: 300
        });
      function C(I) {
        return I ? I.split(/(?=[A-Z])/).join(" ") : ""
      }
      function N() {
        $.go(-1)
      }
      function S(I) {
        if (!gt().token) {
          $.push({
            name: "login"
          });
          return
        }
        hs({
          title: s("tips"),
          message: s("tipsPlayGame"),
          cancelButtonText: s("cancel"),
          showCancelButton: !0
        }).then(async () => {
          b(() => {
            hs({
              title: "",
              message: s("gameLoadTimeOut")
            }).then(() => {
              $.push({
                path: "/"
              })
            }
            )
          }
          );
          const D = await ae(on({
            vendorCode: Number(I.vendorId),
            gameCode: I.gameID,
            phonetype: ln()
          }));
          if (D && !k.value)
            na() ? aa("game", {
              ...(D == null ? void 0 : D.data) || {},
              gameName: I.gameNameEn
            }) : gs(D == null ? void 0 : D.data, 1);
          else {
            !k.value && f(!0);
            return
          }
          !k.value && f()
        }
        )
      }
      async function L(I, O = "") {
        const D = await ae(la({
          type: I,
          gameNameEn: O
        }));
        if (D) {
          if (y.value = D.data.gameLists || [],
            i.value = D.data.gameCustomTypeLists || [],
            !i.value.length)
            return;
          _.value = i.value[0].customGameType
        }
      }
      return (() => {
        T.value = $.currentRoute.value.query.title,
          o.value = sessionStorage.getItem("currentGame") ? JSON.parse(sessionStorage.getItem("currentGame")) : void 0,
          h.value = sessionStorage.getItem("slotChessGameList") ? JSON.parse(sessionStorage.getItem("slotChessGameList")) : null,
          h && (p.value = h.value.findIndex(O => {
            var D;
            return O.slotsTypeID === ((D = o.value) == null ? void 0 : D.slotsTypeID)
          }
          )),
          l.value && l.value.scrollTo(p.value);
        const I = h.value[p.value];
        L(I.slotsTypeID)
      }
      )(),
        (I, O) => {
          var de, le;
          const D = V("NavBar")
            , j = V("van-tab")
            , X = V("van-tabs")
            , ce = Je("lazy");
          return n(),
            a("div", uu, [R(D, {
              "left-arrow": "",
              onClickLeft: N
            }, {
              center: A(() => [e("span", {
                class: P({
                  active: r.value
                })
              }, t(T.value) + t(I.$t("game")), 3)]),
              _: 1
            }), e("div", ru, [be(e("input", {
              type: "text",
              placeholder: I.$t("searchGame"),
              class: P({
                active: r.value
              }),
              "onUpdate:modelValue": O[0] || (O[0] = J => d.value = J),
              ref_key: "searchBarRef",
              ref: v
            }, null, 10, du), [[en, d.value]]), e("img", {
              src: u(re)("searchBarIcons", "searchIcon"),
              alt: ""
            }, null, 8, _u)]), ((de = o.value) == null ? void 0 : de.key) !== "fish" && ((le = o.value) == null ? void 0 : le.key) !== "flash" ? (n(),
              se(X, {
                key: 0,
                class: "onlineGames__container-tabBar",
                active: p.value,
                "onUpdate:active": O[2] || (O[2] = J => p.value = J),
                type: "card",
                color: "transparent",
                background: "transparent",
                ref_key: "tabsRef",
                ref: l,
                "swipe-threshold": 4
              }, {
                default: A(() => [(n(!0),
                  a(B, null, G(h.value, (J, Q) => (n(),
                    se(j, {
                      key: Q
                    }, {
                      title: A(() => [e("img", {
                        src: u(re)("home/AllOnlineGames/svg", `${Q === p.value ? m(J.slotsName) + "Active" : m(J.slotsName)}`)
                      }, null, 8, vu), e("span", null, t(J.slotsName), 1)]),
                      _: 2
                    }, 1024))), 128)), !r.value || i.value.length === 0 ? (n(),
                      se(u(Ra), {
                        key: 0,
                        modelValue: _.value,
                        "onUpdate:modelValue": O[1] || (O[1] = J => _.value = J),
                        lineWidth: 0
                      }, {
                        default: A(() => [(n(!0),
                          a(B, null, G(i.value, (J, Q) => (n(),
                            se(u(Ia), {
                              name: Q,
                              key: Q,
                              class: P([{
                                activeClassName: _.value === J.customGameType
                              }]),
                              onClick: _e => _.value = J.customGameType
                            }, {
                              default: A(() => [e("span", null, t(J.customGameTypeName), 1)]),
                              _: 2
                            }, 1032, ["name", "class", "onClick"]))), 128))]),
                        _: 1
                      }, 8, ["modelValue"])) : M("", !0), e("div", pu, [(n(!0),
                        a(B, null, G(u(w), (J, Q) => (n(),
                          a("div", {
                            class: "onlineGames__container-list__item",
                            key: Q,
                            onClick: _e => S(J)
                          }, [be(e("img", null, null, 512), [[ce, J.img]]), e("span", null, t(C(J.gameNameEn)), 1)], 8, mu))), 128))])]),
                _: 1
              }, 8, ["active"])) : (n(),
                a("div", hu, [e("div", fu, [(n(!0),
                  a(B, null, G(h.value, (J, Q) => (n(),
                    a("div", {
                      class: "onlineGames__container-list__item",
                      key: Q,
                      onClick: _e => S(J)
                    }, [W(t(J) + " ", 1), be(e("img", null, null, 512), [[ce, J.img]]), e("span", null, t(J.gameNameEn), 1)], 8, gu))), 128))])]))])
        }
    }
  });
const bu = K(yu, [["__scopeId", "data-v-343c9dd3"]])
  , US = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bu
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , $u = {
    class: "fish_game"
  }
  , ku = {
    class: "fish_list"
  }
  , Tu = ["onClick"]
  , wu = U({
    __name: "index",
    setup(c) {
      const s = je([])
        , { t: l } = ye()
        , i = () => {
          ia.back()
        }
        , _ = async () => {
          const r = await ae(la({
            type: 11
          }));
          r && s.push(...r.data)
        }
        , p = r => {
          hs({
            title: l("tips"),
            message: l("tipsPlayGame"),
            cancelButtonText: l("cancel"),
            showCancelButton: !0
          }).then(async () => {
            let d = {
              gameCode: r.gameCode || r.gameID,
              vendorCode: Number(r.vendorId) || Number(r.slotsTypeID)
            };
            const v = await ae(on({
              ...d,
              phonetype: ln()
            }));
            v && gs(v == null ? void 0 : v.data, 1)
          }
          )
        }
        ;
      return _(),
        (r, d) => {
          const v = V("NavBar")
            , o = Je("lazy");
          return n(),
            a("div", $u, [R(v, {
              title: r.$t("fishing"),
              backgroundColor: "linear-gradient(90deg, #CF0305 0%, #F23F3A 100%)",
              placeholder: !1,
              "left-arrow": "",
              onClickLeft: i
            }, null, 8, ["title"]), e("div", ku, [(n(!0),
              a(B, null, G(s, h => be((n(),
                a("img", {
                  class: "gameImg",
                  key: h.vendorId,
                  onClick: y => p(h)
                }, null, 8, Tu)), [[o, h.img]])), 128))])])
        }
    }
  });
const Cu = K(wu, [["__scopeId", "data-v-29dfb48a"]])
  , KS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cu
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Nu = {
    class: "sysMessage__container"
  }
  , Lu = {
    class: "sysMessage__container-msgWrapper__item-title"
  }
  , Iu = {
    class: "sysMessage__container-msgWrapper__item-time"
  }
  , Ru = {
    class: "sysMessage__container-msgWrapper__item-content"
  }
  , xu = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , { setLoading: l } = Ls()
        , i = g()
        , _ = gt()
        , p = $e()
        , r = g(!1)
        , d = g([])
        , v = jt()
        , o = g({
          pageSize: 25
        })
        , h = {
          readAllIcon: Et(() => Ft(() => import("./messageReadAll-c35cfd5a.js"), ["assets/js/messageReadAll-c35cfd5a.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"])),
          messageIconRed: Et(() => Ft(() => import("./messageIconRed-a0bf3359.js"), ["assets/js/messageIconRed-a0bf3359.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"])),
          messageIconIsRead: Et(() => Ft(() => import("./messageIconIsRead-cbf6c8c0.js"), ["assets/js/messageIconIsRead-cbf6c8c0.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"])),
          messageGarbage: Et(() => Ft(() => import("./messageGarbage-605506c5.js"), ["assets/js/messageGarbage-605506c5.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"]))
        };
      function y() {
        p.back()
      }
      async function T() {
        const f = jt();
        await Eo({
          state: 1
        }).then(k => {
          k && f.setReadState(!0)
        }
        ).catch(k => { }
        )
      }
      function $(f) {
        Yn({
          title: s("warning"),
          message: s("warningTxt1")
        }).then(async () => {
          if (await ae(tn({
            messageID: f.messageID,
            state: 2
          }))) {
            let w = d.value;
            d.value = w.filter(m => m.messageID !== f.messageID)
          }
        }
        )
      }
      const b = _.getUserInfo;
      return Pe(async () => {
        l(!0),
          await T(),
          l(!1),
          i.value.resetRefresh(),
          b.unRead = 0,
          _.setUserInfo({
            ...b
          }),
          v.setReadState(!0)
      }
      ),
        (f, k) => {
          const w = V("NavBar");
          return n(),
            a("div", Nu, [R(w, {
              title: u(s)("notifications"),
              "left-arrow": "",
              onClickLeft: y
            }, null, 8, ["title"]), R(ca, {
              ref_key: "msgWrapperRef",
              ref: i,
              list: d.value,
              "onUpdate:list": k[0] || (k[0] = m => d.value = m),
              "page-query": o.value,
              "onUpdate:pageQuery": k[1] || (k[1] = m => o.value = m),
              api: u(jo),
              distance: 100,
              isAutoLoad: r.value
            }, {
              content: A(() => [(n(!0),
                a(B, null, G(d.value, m => (n(),
                  a("div", {
                    class: "sysMessage__container-msgWrapper__item",
                    key: m.messageID
                  }, [e("div", Lu, [(n(),
                    se(ft(m.state === 0 ? h.messageIconRed : h.messageIconIsRead))), e("span", null, t(u(Fo)(m.title, 20)), 1), (n(),
                      se(ft(h.messageGarbage), {
                        onClick: C => {
                          C.stopPropagation(),
                            $(m)
                        }
                      }, null, 8, ["onClick"]))]), e("div", Iu, t(m.addTime), 1), e("div", Ru, t(m.messages), 1)]))), 128))]),
              _: 1
            }, 8, ["list", "page-query", "api", "isAutoLoad"])])
        }
    }
  });
const Su = K(xu, [["__scopeId", "data-v-4991efa4"]])
  , XS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Su
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , fs = U({
    __name: "NavBar",
    props: {
      list: {},
      tabClassName: {},
      active: {
        default: 0
      },
      tabItemClassName: {}
    },
    emits: ["update:active", "onClickTab"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , _ = g()
        , p = g(0)
        , r = (d, v) => {
          l("update:active", p.value),
            l("onClickTab", {
              item: d,
              index: v
            })
        }
        ;
      return Ge(() => i.active, d => {
        p.value = d
      }
      ),
        s({
          funtabRef: _
        }),
        (d, v) => (n(),
          se(u(Ra), {
            modelValue: p.value,
            "onUpdate:modelValue": v[0] || (v[0] = o => p.value = o),
            class: P(d.tabClassName),
            lineWidth: "0",
            ref_key: "funtabRef",
            ref: _
          }, {
            default: A(() => [(n(!0),
              a(B, null, G(d.list, (o, h) => (n(),
                se(u(Ia), {
                  name: h,
                  key: h,
                  class: P([d.tabItemClassName, {
                    activeClassName: d.active === h
                  }]),
                  onClick: y => r(o, h)
                }, {
                  default: A(() => [pt(d.$slots, "default", {
                    item: o,
                    index: h
                  })]),
                  _: 2
                }, 1032, ["name", "class", "onClick"]))), 128))]),
            _: 3
          }, 8, ["modelValue", "class"]))
    }
  })
  , Bu = [{
    typeID: 13,
    typeName: "Trx Win Go<br />1Min",
    tabName: "Trx 1Min",
    intervalM: 1,
    scope: "1|10|100|1000",
    sort: 1,
    gamePresentation: ""
  }, {
    typeID: 14,
    typeName: "Trx Win Go<br />3Min",
    tabName: "Trx 3Min",
    intervalM: 3,
    scope: "1|10|100|1000",
    sort: 2
  }, {
    typeID: 15,
    typeName: "Trx Win Go<br />5Min",
    tabName: "Trx 5Min",
    intervalM: 5,
    scope: "1|10|100|1000",
    sort: 3,
    gamePresentation: ""
  }, {
    typeID: 16,
    typeName: "Trx Win Go<br />10Min",
    tabName: "Trx 10Min",
    intervalM: 10,
    scope: "1|10|100|1000",
    sort: 4,
    gamePresentation: ""
  }]
  , Mu = [{
    typeID: 5,
    typeName: "5D Lotre<br />1Min",
    tabName: "5D 1Min",
    intervalM: 1,
    scope: "1|10|100|1000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
  }, {
    typeID: 6,
    typeName: "5D Lotre<br />3Min",
    tabName: "5D 3Min",
    intervalM: 3,
    scope: "1|10|100|1000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
  }, {
    typeID: 7,
    typeName: "5D Lotre<br />5Min",
    tabName: "5D 5Min",
    intervalM: 5,
    scope: "1|10|100|1000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
  }, {
    typeID: 8,
    typeName: "5D Lotre<br />10Min",
    tabName: "5D 10Min",
    intervalM: 10,
    scope: "1|10|100|1000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
  }]
  , Pu = [{
    typeID: 9,
    typeName: "K3 Lotre<br />1Min",
    tabName: "K3 1Min",
    intervalM: 1,
    scope: "1|10|100|1000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
  }, {
    typeID: 10,
    typeName: "K3 Lotre<br />3Min",
    tabName: "K3 3Min",
    intervalM: 3,
    scope: "1|10|100|1000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font><span style="font-family: 宋体;">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="margin-bottom: 0px; -webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
  }, {
    typeID: 11,
    typeName: "K3 Lotre<br />5Min",
    tabName: "K3 5Min",
    intervalM: 5,
    scope: "1|10|100|1000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
  }, {
    typeID: 12,
    typeName: "K3 Lotre<br />10Min",
    tabName: "K3 10Min",
    intervalM: 10,
    scope: "1|10|100|1000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
  }]
  , Gu = [{
    typeID: 1,
    typeName: "Win Go<br />1Min",
    tabName: "WinGo 1Min",
    intervalM: 1,
    scope: "1|10|100|1000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal"><span style="font-family: &quot;Times New Roman&quot;;">\uFEFF</span><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 1 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần , 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 1440 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal" style="margin-bottom: 0px;"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
  }, {
    typeID: 2,
    typeName: "Win Go<br />3Min",
    tabName: "WinGo 3Min",
    intervalM: 3,
    scope: "1|10|100|1000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 3 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần ,2 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 480 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
  }, {
    typeID: 3,
    typeName: "Win Go<br />5Min",
    tabName: "WinGo 5Min",
    intervalM: 5,
    scope: "1|10|100|1000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
  }, {
    typeID: 4,
    typeName: "Win Go<br />10Min",
    tabName: "WinGo 10Min",
    intervalM: 10,
    scope: "1|10|100|1000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
  }]
  , Du = c => Ct(Nt.GetMyBingo18HistoryBetting, c)
  , Au = () => Ct(Nt.GetBinguoGameConfig)
  , Ou = () => Ct(Nt.GetBingo18OddsList)
  , zu = () => Ct(Nt.GetGameBingo18Issue)
  , qu = () => Ct(Nt.GetBingo18LastGameResult)
  , Wu = c => Ct(Nt.GetBingo18BetAmount, c)
  , Eu = c => Ct(Nt.Bingo18Betting, c)
  , xa = () => Ct(Nt.GetBingo18Last50Result)
  , Fu = () => Ct(Nt.GetTrendstatistics)
  , ju = () => Ct(Nt.GetLotteryRankList)
  , Vu = () => Ct(Nt.GetLotteryResult7Day)
  , Hu = c => Ct(Nt.GetUserRankList, {
    uid: c
  })
  , lt = je({
    currentTabIndex: 0,
    resultSumTrend: [],
    smallAndBigTrend: void 0,
    threeSameTrend: [],
    twoSameTrend: [],
    isTrend: !1,
    trendList: [],
    last50List: [],
    userRank: 0,
    last7Day: []
  })
  , { t: rs } = Is.global
  , ws = g([{
    title: rs("time"),
    key: "issueEndTime",
    isLockColumn: !0,
    isSlot: !0,
    width: "50px",
    cusTdClass: "column_time"
  }])
  , Jt = () => {
    const c = {
      1: {
        player: rs("xosoTxt60"),
        Big: {
          class: "big"
        },
        Small: {
          class: "small"
        },
        Drawn: {
          class: "sum"
        }
      },
      2: {
        player: rs("same"),
        class: "small"
      },
      3: {
        player: rs("sameNum")
      },
      4: {
        player: rs("numbersMatch")
      }
    }
      , s = ee(() => {
        let T = []
          , $ = [];
        for (let b = 0; b < lt.last50List.length; b++)
          $.length < 5 || (T.push($),
            $ = []),
            $.push(lt.last50List[b].resultSum),
            b === lt.last50List.length - 1 && T.push($);
        return T
      }
      )
      , l = ee(() => {
        let T = lt.last50List.map(b => b.resultSum)
          , $ = h(T).slice(0, 10).reverse();
        return $.forEach(b => {
          if (b.length < 5) {
            let f = 5 - b.length;
            for (let k = 0; k < f; k++)
              b.push("")
          }
        }
        ),
          $
      }
      )
      , i = ee(() => lt.last50List.map(T => {
        const $ = T.result.split("")
          , b = {};
        for (let f = 1; f <= 6; f++)
          b["num" + f] = $.filter(k => k === f.toString()).length;
        return {
          issueNo: T.issueNo,
          sum: T.resultSum,
          ...b
        }
      }
      ))
      , _ = async () => {
        const T = await ae(Vu());
        if (T != null && T.data) {
          ws.value = [{
            title: rs("time"),
            key: "issueEndTime",
            isLockColumn: !0,
            isSlot: !0,
            width: "50px",
            cusTdClass: "column_time"
          }];
          let $ = T.data.reverse();
          [...new Set(T.data.map(w => w.startDate))].slice(0, 7).reverse().forEach((w, m) => {
            ws.value.push({
              key: "time_index_" + m,
              title: w,
              isSlot: !0
            })
          }
          );
          let f = p($, "issueEndTime")
            , k = [];
          Object.entries(f).forEach(([w, m]) => {
            let C = {};
            m.forEach((N, S) => {
              var x;
              let L = (x = ws.value.find(I => I.title === N.startDate)) == null ? void 0 : x.key;
              C[`${L}`] = N
            }
            ),
              k.push({
                issueEndTime: w,
                ...C
              })
          }
          ),
            lt.last7Day = k.sort((w, m) => {
              const C = w.issueEndTime.split(":")
                , N = m.issueEndTime.split(":")
                , S = parseInt(C[0])
                , L = parseInt(C[1])
                , x = parseInt(N[0])
                , I = parseInt(N[1]);
              return S === x ? L - I : S - x
            }
            )
        }
      }
      ;
    function p(T, $) {
      const b = {};
      return T.forEach(f => {
        const k = f[$];
        b[k] || (b[k] = []),
          b[k].push(f)
      }
      ),
        b
    }
    const r = async () => {
      const T = await ae(ju());
      T != null && T.data && (lt.trendList = T.data);
      const b = gt().getUserInfo
        , f = await ae(Hu(b.userId));
      f != null && f.data && (f.data < 100 && (lt.isTrend = !0),
        lt.userRank = f.data)
    }
      , d = async () => {
        const T = await ae(xa());
        T != null && T.data && (lt.last50List = T.data)
      }
      , v = async () => {
        const T = await ae(Fu());
        T && (lt.resultSumTrend = T.data.resultSumTrend,
          lt.smallAndBigTrend = T.data.smallAndBigTrend,
          lt.threeSameTrend = T.data.threeSameTrend,
          lt.twoSameTrend = T.data.twoSameTrend)
      }
      , o = (T, $) => {
        let b = ""
          , f = "";
        return T === 1 ? (Number($) ? b = y(Number($)) : b = c[1][$].class,
          f = c[1].player) : T === 2 ? (b = c[2].class,
            f = c[2].player) : T === 3 ? (Number($) < 5 ? b = "small" : Number($) === 5 ? b = "sum" : b = "big",
              f = c[3].player) : T === 4 && ($.includes("*") ? b = "big" : /[123]/.test($) ? b = "small" : b = "big",
                f = c[4].player),
        {
          className: b,
          playerName: f
        }
      }
      ;
    function h(T) {
      const $ = []
        , b = [];
      let f = "";
      const k = m => m < 10 ? "small" : m > 11 ? "big" : "sum"
        , w = (m, C) => {
          let N = 0;
          if (m !== C[C.length - 1])
            return 0;
          for (let S = C.length - 1; S >= 0; S--)
            if (m === C[S])
              N += 1;
            else
              return N;
          return N
        }
        ;
      for (let m = 0; m < T.length; m++) {
        const C = T[m]
          , N = k(C);
        if ($.length === 0 || N !== f) {
          $.push([C]),
            f = N,
            b.push(f);
          continue
        }
        if ($[$.length - 1].length < 5)
          $[$.length - 1].push(C);
        else {
          let S = w(N, b)
            , L = $[$.length - S].length;
          L === 5 ? ($.splice($.length - S, 0, [C]),
            b.push(N)) : (L > 5,
              $[$.length - S].unshift(C))
        }
        f = N
      }
      return $
    }
    const y = T => Number(T) < 10 ? "small" : Number(T) > 11 ? "big" : "sum";
    return {
      store: lt,
      last50Result: s,
      last50Record: l,
      last50RecordResult: i,
      columnOptions: ws,
      filterStyle: y,
      filterGameType: o,
      getTrendstatistics: v,
      getLotteryRankList: r,
      getLotteryResult7Day: _,
      getBingo18Last50Result: d
    }
  }
  , Uu = {
    class: "ar-searchbar__selector"
  }
  , Ku = {
    key: 0,
    class: "noSelect"
  }
  , Xu = {
    key: 1,
    class: "ar-searchbar__selector-default"
  }
  , Qu = U({
    __name: "Calendar",
    emits: ["confirm"],
    setup(c, { expose: s, emit: l }) {
      const { minDate: i, maxDate: _ } = ua()
        , p = g("")
        , r = g("")
        , d = g(!1)
        , v = y => `${y.getFullYear()}-${y.getMonth() + 1}-${y.getDate()}`
        , o = async y => {
          d.value = !1;
          const [T, $] = y;
          p.value = v(T),
            r.value = v($),
            l("confirm")
        }
        ;
      function h() {
        d.value = !0
      }
      return s({
        startDateValue: p,
        endDateValue: r
      }),
        (y, T) => {
          const $ = V("van-icon")
            , b = V("van-calendar");
          return n(),
            a(B, null, [e("div", Uu, [e("div", {
              onClick: h
            }, [p.value === "" || r.value === "" ? (n(),
              a("span", Ku, t(y.$t("datePick")), 1)) : (n(),
                a("span", Xu, t(p.value) + "/" + t(r.value), 1)), R($, {
                  name: "arrow-down"
                })])]), R(b, {
                  show: d.value,
                  "onUpdate:show": T[0] || (T[0] = f => d.value = f),
                  type: "range",
                  onConfirm: o,
                  "min-date": u(i),
                  "max-date": u(_),
                  teleport: "body"
                }, null, 8, ["show", "min-date", "max-date"])], 64)
        }
    }
  })
  , Yu = c => (De("data-v-bcb2e4d0"),
    c = c(),
    Ae(),
    c)
  , Zu = {
    class: "x-4d-head"
  }
  , Ju = {
    class: "menu"
  }
  , er = ["onClick"]
  , tr = {
    class: "lottery"
  }
  , sr = {
    class: "item"
  }
  , nr = Yu(() => e("div", {
    class: "box"
  }, [e("div")], -1))
  , ar = [nr]
  , or = {
    class: "mask"
  }
  , lr = ["onClick"]
  , ir = {
    class: "img"
  }
  , cr = U({
    __name: "lotterylist",
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      timeIndex: {
        default: 0
      },
      timeVal: {
        default: at().format("YYYY-MM-DD")
      },
      lotteryList: {},
      lotteryTab: {},
      timeWeek: {
        type: Function,
        default: () => ""
      }
    },
    emits: ["onLotteryTab", "onTime", "update:modelValue"],
    setup(c, { emit: s }) {
      const i = No(c, "modelValue", s)
        , _ = (h, y) => {
          s("onLotteryTab", h, y)
        }
        , p = (h, y) => {
          s("onTime", h, y)
        }
        , r = () => {
          i.value = !0
        }
        , d = () => {
          i.value = !1
        }
        , v = () => {
          i.value ? d() : r()
        }
        , o = g(null);
      return Lo(o, h => {
        i.value = !1
      }
      ),
        (h, y) => {
          var b;
          const T = V("van-skeleton")
            , $ = Je("lazy");
          return n(),
            a("div", Zu, [e("div", {
              class: "time",
              ref_key: "target",
              ref: o
            }, [e("div", {
              class: "box",
              onClick: v
            }, t(h.timeVal.replace(/-/g, "/")) + " " + t(h.timeWeek(h.timeVal)), 1), be(e("div", Ju, [e("h3", {
              onClick: d
            }, t(h.$t("Drawdate")), 1), e("ul", null, [(n(!0),
              a(B, null, G(h.lotteryTab, (f, k) => (n(),
                a("li", {
                  class: P([h.timeVal == f.date ? "active" : ""]),
                  key: k,
                  onClick: w => p(f, k)
                }, t(f.date.replace(/-/g, "/")) + " " + t(h.timeWeek(f.date)), 11, er))), 128))])], 512), [[et, u(i)]])], 512), e("div", tr, [R(T, {
                  loading: !((b = h.lotteryTab[h.timeIndex]) != null && b.games),
                  class: "flex"
                }, {
                  template: A(() => [(n(),
                    a(B, null, G(10, () => e("div", sr, ar)), 64))]),
                  default: A(() => {
                    var f;
                    return [be(e("div", or, null, 512), [[et, u(i)]]), (n(!0),
                      a(B, null, G((f = h.lotteryTab[h.timeIndex]) == null ? void 0 : f.games, (k, w) => (n(),
                        a("div", {
                          class: "item",
                          key: w,
                          onClick: m => _(k, w)
                        }, [e("div", {
                          class: P(["box", [h.lotteryList.includes(k.type) ? "active" : ""]])
                        }, [be(e("img", ir, null, 512), [[$, k.typeImg]])], 2)], 8, lr))), 128))]
                  }
                  ),
                  _: 1
                }, 8, ["loading"])])])
        }
    }
  });
const ur = K(cr, [["__scopeId", "data-v-bcb2e4d0"]])
  , rr = {
    class: "betType"
  }
  , dr = {
    class: "title"
  }
  , _r = {
    class: "betType-list"
  }
  , vr = {
    class: "item action"
  }
  , pr = ["onClick"]
  , mr = U({
    __name: "bettype",
    props: {
      betType: {},
      betTypeList: {}
    },
    emits: ["onBetType"],
    setup(c, { emit: s }) {
      const l = i => {
        s("onBetType", i)
      }
        ;
      return (i, _) => {
        const p = V("van-skeleton");
        return n(),
          a("div", rr, [e("h4", dr, t(i.$t("xosoTxt78")), 1), e("ul", _r, [R(p, {
            loading: !i.betTypeList,
            class: "flex"
          }, {
            template: A(() => [(n(),
              a(B, null, G(7, () => e("li", vr)), 64))]),
            default: A(() => [(n(!0),
              a(B, null, G(i.betTypeList, (r, d) => (n(),
                a("li", {
                  class: P([i.betType.includes(r) ? "item action" : "item"]),
                  onClick: v => l(r),
                  key: d
                }, t(i.$t("d4gameType" + r)), 11, pr))), 128))]),
            _: 1
          }, 8, ["loading"])])])
      }
    }
  });
const hr = K(mr, [["__scopeId", "data-v-e977fff9"]])
  , fr = {
    class: "howPay"
  }
  , gr = {
    class: "title"
  }
  , yr = {
    class: "howPay-list"
  }
  , br = {
    class: "item"
  }
  , $r = {
    key: 0,
    class: "icon"
  }
  , kr = U({
    __name: "betpay",
    props: {
      rollNum: {
        default: 1
      },
      banBetPay: {
        default: 0
      },
      betPayId: {
        default: 1
      },
      duplex: {
        type: Boolean,
        default: !1
      },
      betPayList: {}
    },
    emits: ["onBetpay"],
    setup(c, { emit: s }) {
      const l = c
        , i = r => r.includes(5) ? r.slice(0, -1) : r
        , _ = r => {
          let d = !1
            , v = (r === 2 || r === 3) && l.banBetPay === 1 || l.rollNum > 0
            , o = l.duplex ? (r === 2 || r === 3 || r === 4) && l.banBetPay === 1 : r === 2 && (r === 2 || r === 3) && l.banBetPay === 1;
          return (v || o) && (d = !0),
            d
        }
        , p = r => {
          s("onBetpay", r)
        }
        ;
      return (r, d) => {
        const v = V("van-icon")
          , o = V("van-button")
          , h = V("van-skeleton");
        return n(),
          a("div", fr, [e("h4", gr, t(r.$t("gamePlay")), 1), e("ul", yr, [R(h, {
            loading: !i(r.betPayList),
            class: "flex"
          }, {
            template: A(() => [(n(),
              a(B, null, G(4, () => e("li", br)), 64))]),
            default: A(() => [(n(!0),
              a(B, null, G(i(r.betPayList), (y, T) => (n(),
                se(o, {
                  plain: "",
                  disabled: _(y),
                  class: P([y == r.betPayId ? "item action" : "item"]),
                  onClick: $ => p(y),
                  key: T
                }, {
                  default: A(() => [W(t(r.$t("d4gamePay" + y)) + " ", 1), y == r.betPayId ? (n(),
                    a("i", $r, [R(v, {
                      name: "success"
                    })])) : M("", !0)]),
                  _: 2
                }, 1032, ["disabled", "class", "onClick"]))), 128))]),
            _: 1
          }, 8, ["loading"])])])
      }
    }
  });
const Tr = K(kr, [["__scopeId", "data-v-736844bd"]])
  , wr = {
    class: "betAmount"
  }
  , Cr = {
    class: "title"
  }
  , Nr = {
    class: "betAmount-list"
  }
  , Lr = ["onClick"]
  , Ir = U({
    __name: "betamount",
    props: {
      count: {
        default: 10
      },
      list: {}
    },
    emits: ["onAmount"],
    setup(c, { emit: s }) {
      const l = i => {
        s("onAmount", i)
      }
        ;
      return (i, _) => (n(),
        a("div", wr, [e("h4", Cr, t(i.$t("betAmounts")), 1), e("ul", Nr, [(n(!0),
          a(B, null, G(i.list, (p, r) => (n(),
            a("li", {
              class: P([p == i.count ? "item active" : "item"]),
              onClick: d => l(p),
              key: r
            }, t(p), 11, Lr))), 128))])]))
    }
  });
const Rr = K(Ir, [["__scopeId", "data-v-5cf3458b"]])
  , xr = c => (De("data-v-018f548a"),
    c = c(),
    Ae(),
    c)
  , Sr = {
    class: "select"
  }
  , Br = {
    class: "tab"
  }
  , Mr = ["onClick"]
  , Pr = xr(() => e("span", null, "ALL", -1))
  , Gr = {
    class: "numList"
  }
  , Dr = ["onClick"]
  , Ar = U({
    __name: "duplexbet",
    props: {
      tabList: {},
      allActive: {},
      numList: {}
    },
    emits: ["allAddnum", "addNumber"],
    setup(c, { emit: s }) {
      const l = _ => {
        s("allAddnum", _)
      }
        , i = (_, p) => {
          s("addNumber", _, p)
        }
        ;
      return (_, p) => (n(),
        a("div", Sr, [e("ul", Br, [(n(!0),
          a(B, null, G(_.tabList, (r, d) => (n(),
            a("li", {
              onClick: v => l(r.type),
              class: P(_.allActive.includes(r.type) ? "active" : ""),
              key: d
            }, [W(t(r.name) + " ", 1), Pr], 10, Mr))), 128))]), e("div", Gr, [(n(!0),
              a(B, null, G(_.numList, (r, d) => (n(),
                a("ul", {
                  class: "",
                  key: d
                }, [(n(),
                  a(B, null, G(10, (v, o) => e("li", {
                    class: P([r != null && r.list.includes(o) ? "action" : ""]),
                    key: v,
                    onClick: h => i(d, o)
                  }, t(o), 11, Dr)), 64))]))), 128))])]))
    }
  });
const Or = K(Ar, [["__scopeId", "data-v-018f548a"]])
  , zr = {
    class: "foot"
  }
  , qr = {
    class: "item"
  }
  , Wr = {
    class: "item"
  }
  , Er = U({
    __name: "navfoot",
    props: {
      betQuantity: {
        type: Number,
        default: 0
      },
      totalAmount: {
        type: Number,
        default: 0
      }
    },
    emits: ["onBet"],
    setup(c, { emit: s }) {
      const l = c
        , i = () => {
          l.totalAmount > 0 && s("onBet")
        }
        ;
      return (_, p) => (n(),
        a("div", zr, [e("div", qr, [e("p", null, t(_.$t("quantity")), 1), e("span", null, t(c.betQuantity), 1)]), e("div", Wr, [e("p", null, t(_.$t("betAmounts")), 1), e("span", null, t(u(ra)(c.totalAmount)), 1)]), e("div", {
          class: P(["item bet", [c.totalAmount > 0 ? "active" : ""]]),
          onClick: i
        }, t(_.$t("betting")), 3)]))
    }
  });
const Fr = K(Er, [["__scopeId", "data-v-7f2118d8"]])
  , jr = {
    class: "x-bet"
  }
  , Vr = {
    class: "x-bet-sub"
  }
  , Hr = {
    class: "x-bet-lottery"
  }
  , Ur = {
    class: "x-bet-title"
  }
  , Kr = {
    class: "box"
  }
  , Xr = {
    class: "img"
  }
  , Qr = {
    class: "x-bet-type"
  }
  , Yr = {
    class: "x-bet-title"
  }
  , Zr = {
    class: "box"
  }
  , Jr = {
    class: "x-bet-multiple"
  }
  , ed = {
    class: "tit"
  }
  , td = {
    class: "box"
  }
  , sd = {
    class: "multiple-list"
  }
  , nd = {
    class: "box"
  }
  , ad = ["onClick"]
  , od = {
    class: "x-bet-list"
  }
  , ld = {
    class: "item"
  }
  , id = {
    class: "lab"
  }
  , cd = {
    class: "number"
  }
  , ud = {
    class: "item"
  }
  , rd = {
    class: "lab"
  }
  , dd = {
    class: "balance"
  }
  , _d = {
    class: "item"
  }
  , vd = {
    class: "lab"
  }
  , pd = {
    class: "amount"
  }
  , md = {
    key: 0,
    class: "x-bet-wallet"
  }
  , hd = {
    class: "tip"
  }
  , fd = ["src"]
  , gd = {
    class: "x-bet-agree"
  }
  , yd = {
    class: "agree"
  }
  , bd = {
    class: "x-bet-foot"
  }
  , $d = U({
    __name: "betpopup",
    props: {
      betShow: {
        type: Boolean,
        default: !1
      },
      betQuantity: {
        default: 0
      },
      timeIndex: {
        default: 0
      },
      totalAmount: {
        default: 0
      },
      balance: {
        default: 0
      },
      lotteryList: {},
      betType: {},
      countVal: {},
      multipleList: {},
      checked: {
        type: Boolean,
        default: !1
      },
      preSaleRule: {
        type: Boolean,
        default: !1
      },
      lotteryTab: {}
    },
    emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
    setup(c, { emit: s }) {
      const l = c
        , i = $e()
        , _ = k => {
          s("getClear", k)
        }
        , p = k => {
          s("onStepper", k)
        }
        , r = k => {
          s("changeStep", k)
        }
        , d = k => {
          s("onMltiple", k)
        }
        , v = k => {
          s("checkboxChange", k)
        }
        , o = () => {
          s("onCancel")
        }
        , h = () => {
          s("onBet")
        }
        , y = k => {
          const { lotteryTab: w, timeIndex: m } = l;
          let C = w[m].games.find(N => N.type == k);
          return C == null ? void 0 : C.typeImg
        }
        , { checked: T, betShow: $, countVal: b, preSaleRule: f } = Zn(l, s);
      return (k, w) => {
        const m = V("van-icon")
          , C = V("van-field")
          , N = V("van-checkbox")
          , S = V("van-popup")
          , L = Je("lazy");
        return n(),
          se(S, {
            show: u($),
            "onUpdate:show": w[7] || (w[7] = x => it($) ? $.value = x : null),
            position: "bottom",
            "close-on-click-overlay": !1,
            style: {
              borderRadius: "15px 15px 0 0"
            }
          }, {
            default: A(() => [e("div", jr, [e("div", Vr, [W(t(k.$t("betting")) + " ", 1), e("div", {
              class: "clear",
              onClick: w[0] || (w[0] = x => _(1))
            }, [R(m, {
              class: "icon",
              name: "delete-o"
            }), W(t(k.$t("Clear")), 1)])]), e("div", Hr, [e("h5", Ur, t(k.$t("ColorSpecies")), 1), e("ul", Kr, [(n(!0),
              a(B, null, G(k.lotteryList, (x, I) => (n(),
                a("li", {
                  class: "item",
                  key: I
                }, [be(e("img", Xr, null, 512), [[L, y(x)]])]))), 128))])]), e("div", Qr, [e("h5", Yr, t(k.$t("xosoTxt78")), 1), e("ul", Zr, [(n(!0),
                  a(B, null, G(k.betType, (x, I) => (n(),
                    a("li", {
                      class: "item",
                      key: I
                    }, t(k.$t("d4gameType" + x)), 1))), 128))])]), pt(k.$slots, "default", {}, void 0, !0), e("div", Jr, [e("div", ed, t(k.$t("multiple")), 1), e("div", td, [e("div", {
                      class: "li minus",
                      onClick: w[1] || (w[1] = x => p(1))
                    }, [R(m, {
                      name: "minus"
                    })]), R(C, {
                      class: "digit",
                      modelValue: u(b),
                      "onUpdate:modelValue": w[2] || (w[2] = x => it(b) ? b.value = x : null),
                      type: "digit",
                      maxlength: 5,
                      onInput: r
                    }, null, 8, ["modelValue"]), e("div", {
                      class: "li plus",
                      onClick: w[3] || (w[3] = x => p(2))
                    }, [R(m, {
                      name: "plus"
                    })])])]), e("div", sd, [e("div", nd, [(n(!0),
                      a(B, null, G(k.multipleList, (x, I) => (n(),
                        a("div", {
                          key: I,
                          class: P(u(b) == x ? "active item" : "item"),
                          onClick: O => d(x)
                        }, " X" + t(x), 11, ad))), 128))])]), e("div", od, [e("div", ld, [e("div", id, t(k.$t("quantity")), 1), e("div", cd, t(k.betQuantity) + t(k.$t("note")), 1)]), e("div", ud, [e("div", rd, t(k.$t("walletBalance")), 1), e("div", dd, t(u(Re)(k.balance)), 1)]), e("div", _d, [e("div", vd, t(k.$t("betAmounts")), 1), e("div", pd, t(u(ra)(k.totalAmount)), 1)])]), k.totalAmount > k.balance ? (n(),
                          a("div", md, [e("div", hd, [e("img", {
                            src: u(re)("home/AllLotteryGames/NewVietnam", "tip")
                          }, null, 8, fd), W(t(k.$t("insufficientWallet")), 1)]), e("div", {
                            class: "txt",
                            onClick: w[4] || (w[4] = x => u(i).push({
                              name: "Recharge"
                            }))
                          }, t(k.$t("torecharge")) + " >>", 1)])) : M("", !0), e("div", gd, [R(N, {
                            modelValue: u(T),
                            "onUpdate:modelValue": w[5] || (w[5] = x => it(T) ? T.value = x : null),
                            "checked-color": "#F13F39",
                            onChange: v
                          }, {
                            default: A(() => [e("div", yd, t(k.$t("agree")), 1)]),
                            _: 1
                          }, 8, ["modelValue"]), e("span", {
                            class: "txt",
                            onClick: w[6] || (w[6] = x => f.value = !0)
                          }, t(k.$t("presaleRules")), 1)])]), e("div", bd, [e("div", {
                            class: "cancel",
                            onClick: o
                          }, t(k.$t("cancel")), 1), e("div", {
                            class: "bet",
                            onClick: h
                          }, t(k.$t("betting")), 1)])]),
            _: 3
          }, 8, ["show"])
      }
    }
  });
const kd = K($d, [["__scopeId", "data-v-b0228090"]])
  , Td = {
    class: "x-bet"
  }
  , wd = {
    key: 0,
    class: "x-bet-box"
  }
  , Cd = {
    class: "item"
  }
  , Nd = {
    class: "pay"
  }
  , Ld = {
    class: "txt"
  }
  , Id = {
    class: "item"
  }
  , Rd = {
    class: "num"
  }
  , xd = {
    class: "txt"
  }
  , Sd = {
    key: 1,
    class: "x-bet-pay"
  }
  , Bd = {
    class: "x-bet-title"
  }
  , Md = {
    class: "name"
  }
  , Pd = {
    key: 2,
    class: "x-bet-dupleList"
  }
  , Gd = {
    class: "digits"
  }
  , Dd = {
    class: "sub"
  }
  , Ad = {
    class: "list"
  }
  , Od = {
    class: "item"
  }
  , zd = U({
    __name: "betcontent",
    props: {
      tabId: {
        default: 0
      },
      betPay: {
        default: 0
      },
      num: {},
      dupleList: {},
      tabList: {}
    },
    setup(c) {
      return (s, l) => (n(),
        a("div", Td, [s.tabId === 1 ? (n(),
          a("div", wd, [e("div", Cd, [e("span", Nd, t(s.$t("d4gamePay" + s.betPay)), 1), e("p", Ld, t(s.$t("gamePlay")), 1)]), e("div", Id, [e("span", Rd, t(s.num), 1), e("p", xd, t(s.$t("bettingnumber")), 1)])])) : M("", !0), s.tabId === 2 ? (n(),
            a("div", Sd, [e("h5", Bd, t(s.$t("gamePlay")), 1), e("div", Md, t(s.$t("d4gamePay" + s.betPay)), 1)])) : M("", !0), s.tabId === 2 ? (n(),
              a("div", Pd, [(n(!0),
                a(B, null, G(s.dupleList, (i, _) => (n(),
                  a("div", {
                    class: "box",
                    key: _
                  }, [e("div", Gd, [e("div", Dd, t(s.tabList[_].name), 1), e("div", Ad, [(n(!0),
                    a(B, null, G(i.list, (p, r) => (n(),
                      a("div", {
                        class: "num",
                        key: r
                      }, [e("div", Od, t(p), 1)]))), 128))])])]))), 128))])) : M("", !0)]))
    }
  });
const qd = K(zd, [["__scopeId", "data-v-83c575d9"]])
  , En = g(!1)
  , Xs = g(!1)
  , Fn = g(0)
  , Cs = g()
  , jn = g();
function ds() {
  const c = je({
    timeVal: at().format("YYYY-MM-DD"),
    timeIndex: 0,
    lotteryList: [],
    lotteryTab: [],
    tabId: 1,
    rollNum: 0,
    betQuantity: 0,
    betAmount: 0,
    totalAmount: 0,
    betType: [],
    betTypeList: [],
    betPay: 1,
    betPayList: [],
    dupleList: [{
      list: []
    }, {
      list: []
    }, {
      list: []
    }, {
      list: []
    }],
    allActive: [],
    banbetpay: 0,
    multipleList: [1, 5, 10, 20, 50, 100],
    betAmountList: [10, 50, 100, 500, 1e3, 5e3],
    duplex: !1,
    balance: 0,
    stopTime: null
  })
    , { t: s } = ye()
    , { setLoading: l } = Ls()
    , i = g("")
    , _ = g(1)
    , p = g(!0)
    , r = g(!1)
    , d = g(!1)
    , v = g([{}])
    , o = g()
    , h = g()
    , y = [{
      name: s("xosoTxt90"),
      type: 0
    }, {
      name: s("xosoTxt89"),
      type: 1
    }, {
      name: s("xosoTxt88"),
      type: 2
    }, {
      name: s("xosoTxt87"),
      type: 3
    }]
    , T = ee(() => c.timeVal)
    , $ = ee(() => c.timeIndex)
    , b = ee(() => c.lotteryList)
    , f = ee(() => c.lotteryTab)
    , k = ee(() => c.tabId)
    , w = ee(() => c.rollNum)
    , m = ee(() => c.betType)
    , C = ee(() => c.betTypeList)
    , N = ee(() => c.betPay)
    , S = ee(() => c.betPayList)
    , L = ee(() => c.betAmount)
    , x = ee(() => c.totalAmount)
    , I = ee(() => c.betQuantity)
    , O = ee(() => c.banbetpay)
    , D = ee(() => c.dupleList)
    , j = ee(() => c.allActive)
    , X = ee(() => c.multipleList)
    , ce = ee(() => c.betAmountList)
    , de = ee(() => c.duplex)
    , le = ee(() => c.balance)
    , J = E => {
      const te = [s("Sunday"), s("Monday"), s("Tuesday"), s("Wednesday"), s("Thursday"), s("Friday"), s("Saturday")]
        , fe = new Date(E);
      return te[fe.getDay()]
    }
    , Q = (E, te) => {
      c.timeIndex = te,
        c.timeVal = E.date,
        Oe(1),
        En.value = !1
    }
    , _e = (E, te) => {
      if (c.lotteryList.includes(E.type)) {
        let fe = c.lotteryList.indexOf(E.type);
        c.lotteryList.splice(fe, 1)
      } else
        c.lotteryList.push(E.type);
      Z(c.betType.length, c.betAmount, c.betPay)
    }
    , Se = E => {
      c.tabId = E,
        Oe(0)
    }
    , Oe = E => {
      i.value = "",
        c.betPay = 1,
        c.rollNum = 0,
        c.betType.length = 0,
        c.betAmount = c.betAmountList[0],
        c.dupleList.forEach(te => te.list = []),
        c.allActive.length = 0,
        _.value = 1,
        ve(),
        d.value = !1,
        E == 1 && (c.lotteryList.length = 0)
    }
    , ve = () => {
      c.totalAmount = 0,
        c.betQuantity = 0,
        c.banbetpay = 0
    }
    , ke = () => {
      if (c.rollNum >= 2 || i.value.length >= 4)
        return qe(s("EnterTip"));
      c.betPay = 5,
        i.value += "R",
        c.rollNum = me(i.value.split("")),
        Z(c.betType.length, c.betAmount, c.betPay)
    }
    , Te = E => {
      i.value = E.target.value,
        i.value == "" && (c.betPay = 1),
        i.value.length !== 4 ? ve() : Me(E.target.value) ? (Z(c.betType.length, c.betAmount, c.betPay),
          c.banbetpay = Ee(i.value),
          c.banbetpay === 1 && (c.betPay = 1)) : (i.value = "",
            c.betPay = 1,
            qe(s("FormatTip1"))),
        c.rollNum = me(i.value.split(""))
    }
    , Be = E => {
      if (E.target.value == "" || E.target.value.length !== 4)
        return;
      Me(E.target.value) || (i.value = "",
        c.betPay = 1,
        qe(s("FormatTip1")))
    }
    , Me = E => /^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(E)
    , me = E => {
      let te = E.indexOf("R")
        , fe = 0;
      for (; te !== -1;)
        fe++,
          te = E.indexOf("R", te + 1);
      return fe
    }
    , ne = E => {
      const { betType: te, betAmount: fe, betPay: Ce } = c;
      if (te.includes(E)) {
        let ze = te.indexOf(E);
        te.splice(ze, 1)
      } else
        te.push(E);
      Z(te.length, fe, Ce)
    }
    , oe = E => {
      c.betPay = E,
        Z(c.betType.length, c.betAmount, E)
    }
    , Y = E => {
      c.betAmount = E,
        Z(c.betType.length, E, c.betPay)
    }
    , Z = (E, te, fe) => {
      let { tabId: Ce, dupleList: ze, lotteryList: xe } = c;
      if (Ce === 1) {
        if (i.value.length !== 4)
          return !1;
        F(E, te, i.value, fe)
      } else if (It(ze))
        c.betQuantity = he(ze) * xe.length * c.betType.length,
          c.totalAmount = c.betQuantity * te * xe.length * _.value;
      else {
        const Ye = ze.map(We => We.list[0]).join("");
        if (Ye.length !== 4)
          return;
        c.banbetpay = Ee(Ye),
          F(E, te, Ye, fe)
      }
    }
    , F = (E, te, fe, Ce) => {
      let { rollNum: ze, lotteryList: xe } = c
        , Ye = E * te * xe.length * _.value
        , We = E * xe.length
        , Ue = 0
        , ot = 0;
      if (Ce === 1 || Ce === 2)
        Ue = Ye,
          ot = We;
      else if (Ce === 3) {
        const Ot = Ee(fe);
        Ue = Ye * Ot,
          ot = We * Ot
      } else if (Ce === 4) {
        const Ot = we(fe);
        Ue = Ye * (Ot ? 1 : 2),
          ot = We * (Ot ? 1 : 2)
      } else
        Ce === 5 && (Ue = Ye * (ze > 0 ? ze == 1 ? 10 : 10 * 10 : 0),
          ot = We * (ze > 0 ? ze == 1 ? 10 : 10 * 10 : 0));
      c.totalAmount = Ue,
        c.betQuantity = ot
    }
    , we = E => E === E.split("").reverse().join("");
  function Ee(E) {
    function te(We) {
      return We <= 1 ? 1 : We * te(We - 1)
    }
    let fe = E.split("").map(Number)
      , Ce = [...new Set(fe)]
      , ze = te(fe.length)
      , xe = 1;
    for (const We of Ce) {
      const Ue = fe.filter(ot => ot === We).length;
      xe *= te(Ue)
    }
    return ze / xe
  }
  const tt = E => {
    const { dupleList: te, allActive: fe, betType: Ce, betAmount: ze } = c;
    if (te[E].list = [],
      fe.includes(E)) {
      let xe = fe.indexOf(E);
      fe.splice(xe, 1)
    } else {
      fe.push(E);
      for (let xe = 0; xe < 10; xe++)
        te[E].list.push(xe)
    }
    ct(),
      Z(Ce.length, ze)
  }
    , Lt = (E, te) => {
      const { dupleList: fe, allActive: Ce, betType: ze, betAmount: xe, betPay: Ye } = c
        , We = fe[E].list;
      if (We.includes(te)) {
        let Ue = We.indexOf(te);
        We.splice(Ue, 1)
      } else
        We.push(te);
      if (We.length === 10)
        Ce.push(E);
      else if (Ce.includes(E)) {
        let Ue = Ce.indexOf(E);
        Ce.splice(Ue, 1)
      }
      if (ct(),
        he(fe) > 0) {
        if (Z(ze.length, xe, Ye),
          he(fe) === 1) {
          const Ue = fe.map(ot => ot.list[0]).join("");
          c.banbetpay = Ee(Ue)
        }
        c.banbetpay === 1 && (c.betPay = 1)
      } else
        It(fe) ? c.banbetpay = It(fe) ? 1 : 0 : ve()
    }
    , ct = () => {
      const { dupleList: E } = c;
      c.duplex = It(E),
        c.banbetpay = It(E) ? 1 : 0,
        It(E) && (c.betPay = 1)
    }
    ;
  function It(E) {
    for (let te = 0; te < E.length; te++) {
      const fe = E[te].list;
      if (Array.isArray(fe) && fe.length > 1)
        return !0
    }
    return !1
  }
  function he(E) {
    let te = 1;
    return E.forEach((fe, Ce) => {
      te *= fe.list.length
    }
    ),
      te
  }
  const Dt = () => {
    d.value = !0
  }
    , St = E => {
      const { betType: te, betAmount: fe, betPay: Ce } = c;
      switch (E) {
        case 1:
          _.value > 1 && _.value--;
          break;
        case 2:
          _.value++;
          break
      }
      Z(te.length, fe, Ce)
    }
    , yt = E => {
      const { betType: te, betAmount: fe, betPay: Ce } = c;
      _.value = E.target.value,
        Z(te.length, fe, Ce)
    }
    , Ne = E => {
      const { betType: te, betAmount: fe, betPay: Ce } = c;
      _.value = E,
        Z(te.length, fe, Ce)
    }
    , es = E => {
      p.value = E
    }
    , bt = () => {
      const { lotteryList: E, lotteryTab: te, timeIndex: fe, tabId: Ce, betPay: ze, betType: xe, betQuantity: Ye, betAmount: We, dupleList: Ue, totalAmount: ot, balance: Ot } = c;
      if (ot > Ot)
        return qe(s("wfDesc3"));
      if (Ye / E.length > 7e3)
        return qe(s("d4BetTip", [7e3]));
      if (!p.value)
        return qe(s("agreePresaleRules"));
      let vt = {};
      vt.type = E,
        vt.gameType = ze;
      let Wt = "";
      Ce === 1 ? Wt = i.value : Wt = Ue.map(zt => zt.list.sort((Mt, as) => Mt - as).join(",")).join("|"),
        vt.betContent = Wt,
        vt.betType = xe,
        vt.betMethod = Ce,
        vt.betNumber = Ye,
        vt.multiple = Number(_.value),
        vt.amount = We,
        vt.issueNumber = E.map(zt => {
          const Mt = te[fe].games.find(as => as.type === zt);
          return Mt == null ? void 0 : Mt.issueNumber
        }
        ),
        d.value = !1,
        ms(vt),
        ts()
    }
    , ts = () => {
      setTimeout(() => {
        Xs.value = !1
      }
        , 1500)
    }
    , $t = async () => {
      const E = await ae(cn());
      E != null && E.data && (c.balance = (E == null ? void 0 : E.data.amount) || 0)
    }
    , qs = async () => {
      const E = await ae(Vo());
      E != null && E.data && (c.multipleList = (E == null ? void 0 : E.data.betMultiplier) || [],
        c.betAmountList = (E == null ? void 0 : E.data.betAmount) || [],
        c.betTypeList = (E == null ? void 0 : E.data.betType) || [],
        c.betPayList = (E == null ? void 0 : E.data.gameType) || [],
        c.betAmount = (E == null ? void 0 : E.data.betAmount[0]) || 0)
    }
    , Qe = async () => {
      l(!0);
      const E = await ae(Ho());
      E != null && E.data && (c.timeVal = E.data[c.timeIndex].date,
        c.lotteryTab = (E == null ? void 0 : E.data) || [],
        ks(E.serviceNowTime)),
        l(!1)
    }
    , ks = E => {
      const { lotteryTab: te, timeIndex: fe } = c
        , ze = te[fe].games.map(Ue => Ue.stopTime).map(Ue => new Date(Ue))
        , xe = new Date(Math.min(...ze))
        , Ye = at(xe).format("YYYY-MM-DD HH:mm:ss")
        , We = at(Ye).diff(at(E));
      He(We / 1e3)
    }
    , He = E => {
      c.stopTime = setInterval(() => {
        E > 0 ? E-- : (Oe(1),
          clearInterval(c.stopTime),
          Qe())
      }
        , 1e3)
    }
    , ms = async E => {
      const te = await ae(Uo(E));
      (te == null ? void 0 : te.code) === 0 ? (Xs.value = !0,
        $t(),
        Fn.value === 1 && Bt({
          pageSize: 10,
          pageNo: 1,
          type: 0,
          date: at(new Date).format("YYYY-MM-DD") + " 00:00:00"
        }),
        ts()) : Qe(),
        Oe(1)
    }
    , At = async () => {
      l(!0),
        v.value.length = 0;
      const E = await ae(Ko());
      E != null && E.data && (E == null || E.data.forEach(te => {
        let fe = []
          , Ce = []
          , ze = [];
        te.items.forEach(xe => {
          xe.playId.split("_").length == 1 ? ze.push({
            ...xe,
            code: xe.playId
          }) : (xe.playId.split("_")[0] == "1" && fe.push({
            ...xe,
            code: xe.playId.split("_")[1]
          }),
            xe.playId.split("_")[0] == "2" && Ce.push({
              ...xe,
              code: xe.playId.split("_")[1]
            }))
        }
        ),
          v.value.push({
            playTypeId: te.playTypeId,
            playTypeTitle: te.playTypeTitle,
            lists: [{
              type: 1,
              list: fe
            }, {
              type: 2,
              list: Ce
            }, {
              type: 3,
              list: ze
            }]
          })
      }
      )),
        l(!1)
    }
    , ss = async () => {
      if (Cs.value)
        return;
      l(!0);
      const E = await ae(Xo());
      E != null && E.data && (Cs.value = E.data.map(te => (te.typeName = s(`d4LType${te.typeId}`),
        te)),
        Cs.value.unshift({
          typeId: 0,
          typeName: s("all")
        })),
        l(!1)
    }
    , Bt = async E => {
      l(!0);
      const te = await ae(Qo(E));
      te != null && te.data && (jn.value = (te == null ? void 0 : te.data) || {}),
        l(!1)
    }
    , ns = async () => {
      l(!0);
      const E = await ae(Yo());
      E != null && E.data && (o.value = (E == null ? void 0 : E.data) || []),
        l(!1)
    }
    , qt = async E => {
      l(!0);
      const te = await ae(Zo(E));
      te && (h.value = (te == null ? void 0 : te.data) || {}),
        l(!1)
    }
    , Xt = async E => {
      const te = await ae(Jo(E));
      return new Promise(async (fe, Ce) => {
        te ? fe(te) : Ce(te)
      }
      )
    }
    ;
  return Ut(() => {
    clearInterval(c.stopTime)
  }
  ),
  {
    tabList: y,
    getTimeWeek: J,
    onTime: Q,
    lotterTab: _e,
    onTab: Se,
    getClear: Oe,
    onRoll: ke,
    getInput: Te,
    getBlur: Be,
    onBetType: ne,
    onBetpay: oe,
    onAmount: Y,
    onClickBet: Dt,
    addNumber: Lt,
    allAddnum: tt,
    onStepper: St,
    changeStep: yt,
    onMltiple: Ne,
    checkboxChange: es,
    onBet: bt,
    getWinsUserAmount: $t,
    getGameConfig: qs,
    getGameIssue: Qe,
    getOddsList: At,
    getTypeList: ss,
    getMy4DHistory: Bt,
    get4DResult: ns,
    gameResultByType: qt,
    gameCancelOrder: Xt,
    gameListIndex: Fn,
    timeVal: T,
    lotteryTab: f,
    timeIndex: $,
    lotteryList: b,
    timeShow: En,
    betShow: d,
    tabId: k,
    rollNum: w,
    banbetpay: O,
    num: i,
    betType: m,
    betTypeList: C,
    betPay: N,
    betPayList: S,
    count: L,
    totalAmount: x,
    betQuantity: I,
    allActive: j,
    dupleList: D,
    countVal: _,
    checked: p,
    preSaleRule: r,
    multipleList: X,
    betAmountList: ce,
    duplex: de,
    balance: le,
    promptShow: Xs,
    oddsList: v,
    typeList: Cs,
    myHistory: jn,
    newGameResult: o,
    gameResultByTypeO: h
  }
}
const Wd = {
  key: 0,
  class: "resultBox"
}
  , Ed = {
    class: "r123"
  }
  , Fd = {
    class: "r"
  }
  , jd = {
    class: "num"
  }
  , Vd = {
    class: "r"
  }
  , Hd = {
    class: "num"
  }
  , Ud = {
    class: "r"
  }
  , Kd = {
    class: "num"
  }
  , Xd = {
    class: "title"
  }
  , Qd = {
    class: "rOther"
  }
  , Yd = {
    class: "title"
  }
  , Zd = {
    class: "rOther"
  }
  , Jd = U({
    __name: "showResult",
    props: {
      data: {}
    },
    setup(c) {
      return (s, l) => {
        var i, _, p, r, d;
        return s.data ? (n(),
          a("div", Wd, [e("div", Ed, [e("div", Fd, [e("div", jd, [(n(!0),
            a(B, null, G((i = s.data) == null ? void 0 : i.firstPrize.split(""), (v, o) => (n(),
              a("span", {
                key: o
              }, t(v), 1))), 128))]), e("p", null, t(s.$t("d4gameType3")), 1)]), e("div", Vd, [e("div", Hd, [(n(!0),
                a(B, null, G((_ = s.data) == null ? void 0 : _.secondPrize.split(""), (v, o) => (n(),
                  a("span", {
                    key: o
                  }, t(v), 1))), 128))]), e("p", null, t(s.$t("d4gameType4")), 1)]), e("div", Ud, [e("div", Kd, [(n(!0),
                    a(B, null, G((p = s.data) == null ? void 0 : p.thirdPrize.split(""), (v, o) => (n(),
                      a("span", {
                        key: o
                      }, t(v), 1))), 128))]), e("p", null, t(s.$t("d4gameType5")), 1)])]), e("div", Xd, t(s.$t("d4gameType6")), 1), e("div", Qd, [(n(!0),
                        a(B, null, G((r = s.data) == null ? void 0 : r.specialPrize.split(","), (v, o) => (n(),
                          a("span", {
                            key: o
                          }, t(v), 1))), 128))]), e("div", Yd, t(s.$t("d4gameType7")), 1), e("div", Zd, [(n(!0),
                            a(B, null, G((d = s.data) == null ? void 0 : d.consolationPrize.split(","), (v, o) => (n(),
                              a("span", {
                                key: o
                              }, t(v), 1))), 128))])])) : M("", !0)
      }
    }
  });
const _n = K(Jd, [["__scopeId", "data-v-e89da5ba"]])
  , Gt = c => (De("data-v-3eb21f69"),
    c = c(),
    Ae(),
    c)
  , e_ = {
    key: 0,
    class: "gameBox"
  }
  , t_ = {
    class: "items"
  }
  , s_ = ["onClick"]
  , n_ = {
    class: "left"
  }
  , a_ = {
    class: "time"
  }
  , o_ = {
    class: "right"
  }
  , l_ = {
    key: 0,
    class: "info"
  }
  , i_ = {
    class: "order"
  }
  , c_ = ["onClick"]
  , u_ = {
    class: "copy"
  }
  , r_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , d_ = ["onClick"]
  , __ = {
    class: "copy"
  }
  , v_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , p_ = {
    class: "li"
  }
  , m_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , h_ = {
    class: "li"
  }
  , f_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , g_ = {
    class: "li"
  }
  , y_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , b_ = {
    class: "li"
  }
  , $_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , k_ = {
    class: "li"
  }
  , T_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , w_ = {
    class: "li"
  }
  , C_ = {
    class: "type"
  }
  , N_ = Gt(() => e("div", {
    class: "line1"
  }, [e("p")], -1))
  , L_ = {
    class: "order"
  }
  , I_ = {
    class: "li"
  }
  , R_ = {
    class: "numTit"
  }
  , x_ = {
    class: "num type"
  }
  , S_ = {
    class: "li"
  }
  , B_ = {
    class: "numTit"
  }
  , M_ = {
    class: "num select"
  }
  , P_ = {
    class: "n"
  }
  , G_ = {
    class: "li"
  }
  , D_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , A_ = {
    class: "li"
  }
  , O_ = {
    key: 1
  }
  , z_ = Gt(() => e("div", {
    class: "line"
  }, null, -1))
  , q_ = {
    class: "li"
  }
  , W_ = {
    class: "reTitle"
  }
  , E_ = ["onClick"]
  , F_ = {
    class: "foot"
  }
  , j_ = {
    class: "page"
  }
  , V_ = U({
    __name: "showGame",
    props: {
      pageQuery: {}
    },
    emits: ["update:pageQuery"],
    setup(c, { emit: s }) {
      const l = c
        , { pageQuery: i } = Zn(l, s)
        , { gameCancelOrder: _, myHistory: p, tabList: r, getMy4DHistory: d } = ds()
        , { t: v } = ye()
        , o = g(!1)
        , h = g("")
        , y = g(-1);
      function T(m) {
        switch (m) {
          case 1:
            return v("bettingResultState1");
          case 2:
            return v("bettingResultState3");
          case 3:
            return v("hasWon");
          case 4:
            return v("xosoTxt74");
          case 5:
            return v("xosoTxt75");
          case 6:
            return v("xosoTxt76");
          default:
            return m
        }
      }
      const $ = () => {
        i.value.pageNo--,
          y.value = -1,
          d(i.value)
      }
        , b = () => {
          i.value.pageNo++,
            y.value = -1,
            d(i.value)
        }
        , f = m => {
          y.value === m ? y.value = -1 : y.value = m
        }
        ;
      function k(m) {
        o.value = !0,
          h.value = m
      }
      function w() {
        o.value = !1,
          _({
            orderNumber: h.value
          }).then(m => {
            m && (nn(v("xosoTxt96")),
              d(i.value))
          }
          ).catch(m => { }
          )
      }
      return (m, C) => {
        var S, L, x;
        const N = V("van-icon");
        return n(),
          a(B, null, [((S = u(p)) == null ? void 0 : S.list.length) > 0 ? (n(),
            a("div", e_, [e("div", t_, [(n(!0),
              a(B, null, G(u(p).list, (I, O) => (n(),
                a("div", {
                  class: P(["itemBox", {
                    active: y.value === O
                  }])
                }, [e("div", {
                  class: "item",
                  onClick: D => f(O)
                }, [e("div", n_, [e("div", {
                  class: P(["name", {
                    bold: y.value === O
                  }])
                }, t(m.$t(`d4LType${I.type}`)), 3), e("div", a_, t(I.createTime), 1)]), e("div", o_, [e("div", {
                  class: P(["state", `state${I.state}`])
                }, t(T(I.state)), 3), [2, 3].includes(I.state) ? (n(),
                  a("div", {
                    key: 0,
                    class: P(["amount", I.state == 3 ? "green" : "red"])
                  }, t(I.profitAmount), 3)) : M("", !0)])], 8, s_), y.value === O ? (n(),
                    a("div", l_, [e("div", i_, [e("div", {
                      class: "li",
                      onClick: D => u(Vt)(I.orderNumber)
                    }, [e("span", null, t(m.$t("orderNo")), 1), e("h6", u_, t(I.orderNumber), 1)], 8, c_), r_, e("div", {
                      class: "li",
                      onClick: D => u(Vt)(I.issueNumber)
                    }, [e("span", null, t(m.$t("betNumber")), 1), e("h6", __, t(I.issueNumber), 1)], 8, d_), v_, e("div", p_, [e("span", null, t(m.$t("ColorSpecies")), 1), e("h6", null, t(m.$t(`d4LType${I.type}`)), 1)]), m_, e("div", h_, [e("span", null, t(m.$t("gamePlay")), 1), e("h6", null, t(m.$t(`d4gamePay${I.gameType}`)), 1)]), f_, e("div", g_, [e("span", null, t(m.$t("betAmounts")), 1), e("h6", null, t(u(Re)(I.amount)), 1)]), y_, e("div", b_, [e("span", null, t(m.$t("xosoTxt79")), 1), e("h6", null, t(I.betNumber) + " " + t(m.$t("note")), 1)]), $_, e("div", k_, [e("span", null, t(m.$t("multiple")), 1), e("h6", null, t(I.multiple), 1)]), T_, e("div", w_, [e("span", null, t(m.$t("xosoTxt78")), 1)]), e("div", C_, [(n(!0),
                      a(B, null, G(I.betType.split(","), D => (n(),
                        a("span", null, t(m.$t(`d4gameType${D}`)), 1))), 256))]), N_]), e("div", L_, [I.betMethod == 1 ? (n(),
                          a(B, {
                            key: 0
                          }, [e("div", I_, [e("span", R_, t(m.$t("bettingnumber")) + " (" + t(m.$t("EnterBet")) + ") ", 1)]), e("div", x_, [e("span", null, t(I.betContent), 1)])], 64)) : M("", !0), I.betMethod == 2 ? (n(),
                            a(B, {
                              key: 1
                            }, [e("div", S_, [e("span", B_, t(m.$t("bettingnumber")) + " (" + t(m.$t("SelectBet")) + ")", 1)]), e("div", M_, [(n(!0),
                              a(B, null, G(I.betContent.split("|"), (D, j) => (n(),
                                a("div", {
                                  key: j
                                }, [e("h6", null, t(u(r)[j].name), 1), e("div", P_, [(n(!0),
                                  a(B, null, G(D.split(","), (X, ce) => (n(),
                                    a("span", {
                                      key: ce
                                    }, t(X), 1))), 128))])]))), 128))])], 64)) : M("", !0), e("div", G_, [e("span", null, t(m.$t("statusMay")), 1), e("h6", {
                                      class: P(["stateInfo", `state${I.state}`])
                                    }, t(T(I.state)), 3)]), D_, e("div", A_, [e("span", null, t(m.$t("winOrLose")), 1), [2, 3].includes(I.state) ? (n(),
                                      a("h6", {
                                        key: 0,
                                        class: P(["amountInfo", I.state == 3 ? "green" : "red"])
                                      }, t(I.profitAmount), 3)) : (n(),
                                        a("h6", O_, "--"))]), z_, e("div", q_, [e("span", null, t(m.$t("createTime")), 1), e("h6", null, t(I.createTime), 1)])]), [2, 3].includes(I.state) ? (n(),
                                          a(B, {
                                            key: 0
                                          }, [e("div", W_, t(m.$t("betResult")), 1), R(_n, {
                                            data: I
                                          }, null, 8, ["data"])], 64)) : M("", !0), I.state == 1 ? (n(),
                                            a("div", {
                                              key: 1,
                                              class: "btn",
                                              onClick: D => k(I.orderNumber)
                                            }, t(m.$t("xosoTxt82")), 9, E_)) : M("", !0)])) : M("", !0)], 2))), 256))]), e("div", F_, [e("div", {
                                              class: P(["previous", {
                                                disabled: u(p).pageNo <= 1
                                              }]),
                                              onClick: $
                                            }, [R(N, {
                                              name: "arrow-left",
                                              size: "20"
                                            })], 2), e("div", j_, t(u(p).pageNo) + "/" + t((L = u(p)) == null ? void 0 : L.totalPage), 1), e("div", {
                                              class: P(["next", {
                                                disabled: u(p).pageNo >= ((x = u(p)) == null ? void 0 : x.totalPage)
                                              }]),
                                              onClick: b
                                            }, [R(N, {
                                              name: "arrow",
                                              size: "20"
                                            })], 2)])])) : (n(),
                                              se(ut, {
                                                key: 1
                                              })), R(xt, {
                                                show: o.value,
                                                "onUpdate:show": C[0] || (C[0] = I => o.value = I),
                                                title: m.$t("xosoTxt99"),
                                                onConfirm: C[1] || (C[1] = I => w())
                                              }, null, 8, ["show", "title"])], 64)
      }
    }
  });
const Sa = K(V_, [["__scopeId", "data-v-3eb21f69"]])
  , H_ = {
    class: "gamelist"
  }
  , U_ = {
    class: "tab"
  }
  , K_ = {
    class: "con"
  }
  , X_ = {
    class: "head"
  }
  , Q_ = ["src"]
  , Y_ = U({
    __name: "gameList",
    setup(c) {
      const s = $e()
        , { gameListIndex: l, newGameResult: i, get4DResult: _, getMy4DHistory: p } = ds();
      function r(h) {
        l.value = h,
          o()
      }
      function d() {
        l.value == 0 ? s.push({
          name: "AllLotteryGames-4DLotteryResults"
        }) : l.value == 1 && s.push({
          name: "AllLotteryGames-4DmyGame"
        })
      }
      const v = je({
        type: 0,
        date: at(new Date).format("YYYY-MM-DD 00:00:00"),
        pageSize: 10,
        pageNo: 1
      });
      function o() {
        l.value == 0 ? _() : p(v)
      }
      return Pe(() => {
        o()
      }
      ),
        (h, y) => {
          var T;
          return n(),
            a("div", H_, [e("div", U_, [e("div", {
              class: P({
                active: u(l) == 0
              }),
              onClick: y[0] || (y[0] = $ => r(0))
            }, t(h.$t("d4Tip1")), 3), e("div", {
              class: P({
                active: u(l) == 1
              }),
              onClick: y[1] || (y[1] = $ => r(1))
            }, t(h.$t("myGame")), 3)]), e("div", K_, [e("div", {
              class: "more",
              onClick: d
            }, t(h.$t("more")), 1), u(l) == 0 ? (n(),
              a(B, {
                key: 0
              }, [(n(!0),
                a(B, null, G(u(i), $ => (n(),
                  a("div", {
                    class: "items",
                    key: $.issueNumber
                  }, [e("div", X_, [e("img", {
                    src: $.typeImg,
                    alt: ""
                  }, null, 8, Q_), e("h1", null, t(h.$t(`d4LType${$.type}`)), 1), e("p", null, t($.openDate) + " " + t(h.$t(`${u(at)($.openDate).format("dddd")}`)), 1)]), R(_n, {
                    data: $
                  }, null, 8, ["data"])]))), 128)), ((T = u(i)) == null ? void 0 : T.length) == 0 ? (n(),
                    se(ut, {
                      key: 0
                    })) : M("", !0)], 64)) : M("", !0), u(l) == 1 ? (n(),
                      se(Sa, {
                        key: 1,
                        pageQuery: v,
                        "onUpdate:pageQuery": y[2] || (y[2] = $ => v = $)
                      }, null, 8, ["pageQuery"])) : M("", !0)])])
        }
    }
  });
const Z_ = K(Y_, [["__scopeId", "data-v-50de62e0"]])
  , J_ = {
    class: "x-4d"
  }
  , ev = {
    class: "x-4d-more"
  }
  , tv = ["src"]
  , sv = ["src"]
  , nv = {
    class: "x-4d-body"
  }
  , av = {
    class: "x-4d-tab"
  }
  , ov = {
    class: "x-4d-content"
  }
  , lv = {
    key: 0,
    class: "enter"
  }
  , iv = ["placeholder"]
  , cv = ["placeholder"]
  , uv = {
    class: "box"
  }
  , rv = ["src"]
  , dv = {
    class: "PreSale"
  }
  , _v = {
    class: "head"
  }
  , vv = {
    class: "body"
  }
  , pv = {
    class: "foot"
  }
  , mv = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , { getTimeWeek: i, onTime: _, lotterTab: p, onTab: r, getClear: d, onRoll: v, getInput: o, getBlur: h, onBetType: y, onBetpay: T, onAmount: $, onClickBet: b, addNumber: f, allAddnum: k, onStepper: w, changeStep: m, onMltiple: C, checkboxChange: N, onBet: S, getWinsUserAmount: L, getGameConfig: x, getGameIssue: I, tabList: O, timeVal: D, lotteryTab: j, timeIndex: X, lotteryList: ce, timeShow: de, betShow: le, tabId: J, num: Q, rollNum: _e, banbetpay: Se, betType: Oe, betTypeList: ve, betPay: ke, betPayList: Te, count: Be, totalAmount: Me, betQuantity: me, dupleList: ne, allActive: oe, countVal: Y, checked: Z, preSaleRule: F, multipleList: we, betAmountList: Ee, duplex: tt, balance: Lt, promptShow: ct } = ds();
      return Pe(() => {
        L(),
          x(),
          I()
      }
      ),
        (It, he) => {
          const Dt = V("NavBar")
            , St = V("van-button")
            , yt = V("van-popup");
          return n(),
            a("div", J_, [R(Dt, {
              "left-arrow": "",
              onClickLeft: he[2] || (he[2] = Ne => u(l).go(-1)),
              title: "4D"
            }, {
              right: A(() => [e("div", ev, [e("img", {
                class: "img",
                src: u(re)("home/AllLotteryGames/4D", "howpay"),
                alt: "",
                onClick: he[0] || (he[0] = () => u(l).push({
                  name: "AllLotteryGames-4DPlay"
                }))
              }, null, 8, tv), e("img", {
                class: "img",
                src: u(re)("home/AllLotteryGames/4D", "odds"),
                alt: "",
                onClick: he[1] || (he[1] = () => u(l).push({
                  name: "AllLotteryGames-4DOdds"
                }))
              }, null, 8, sv)])]),
              _: 1
            }), R(ur, {
              onOnTime: u(_),
              "lottery-tab": u(j),
              "time-index": u(X),
              onOnLotteryTab: u(p),
              "time-week": u(i),
              "lottery-list": u(ce),
              modelValue: u(de),
              "onUpdate:modelValue": he[3] || (he[3] = Ne => it(de) ? de.value = Ne : null),
              "time-val": u(D)
            }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), e("div", nv, [e("div", av, [e("div", {
              onClick: he[4] || (he[4] = Ne => u(r)(1)),
              class: P([u(J) == 1 ? "active" : ""])
            }, t(u(s)("EnterBet")), 3), e("div", {
              onClick: he[5] || (he[5] = Ne => u(r)(2)),
              class: P([u(J) == 2 ? "active" : ""])
            }, t(u(s)("SelectBet")), 3)]), e("div", ov, [u(J) === 1 ? (n(),
              a("div", lv, [u(ke) != 5 ? be((n(),
                a("input", {
                  key: 0,
                  class: P(u(Q).length > 0 ? "input fz24" : "input"),
                  oninput: "value=value.replace(/\\D/g,'')",
                  "onUpdate:modelValue": he[6] || (he[6] = Ne => it(Q) ? Q.value = Ne : null),
                  type: "text",
                  placeholder: u(s)("PenterNumber"),
                  maxlength: "4",
                  onInput: he[7] || (he[7] = (...Ne) => u(o) && u(o)(...Ne)),
                  onBlur: he[8] || (he[8] = (...Ne) => u(h) && u(h)(...Ne))
                }, null, 42, iv)), [[en, u(Q)]]) : be((n(),
                  a("input", {
                    key: 1,
                    class: P(u(Q).length > 0 ? "input fz24" : "input"),
                    oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                    "onUpdate:modelValue": he[9] || (he[9] = Ne => it(Q) ? Q.value = Ne : null),
                    type: "text",
                    placeholder: u(s)("PenterNumber"),
                    maxlength: "4",
                    onInput: he[10] || (he[10] = (...Ne) => u(o) && u(o)(...Ne)),
                    onBlur: he[11] || (he[11] = (...Ne) => u(h) && u(h)(...Ne))
                  }, null, 42, cv)), [[en, u(Q)]]), be(R(St, {
                    class: "btn",
                    onClick: u(v)
                  }, {
                    default: A(() => [W("ROll")]),
                    _: 1
                  }, 8, ["onClick"]), [[et, u(Te).includes(5)]])])) : M("", !0), R(hr, {
                    class: "mb30",
                    "bet-type": u(Oe),
                    "bet-type-list": u(ve),
                    onOnBetType: u(y)
                  }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), u(J) === 2 ? (n(),
                    se(Or, {
                      key: 1,
                      "tab-list": u(O),
                      "all-active": u(oe),
                      "num-list": u(ne),
                      onAddNumber: u(f),
                      onAllAddnum: u(k)
                    }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : M("", !0), R(Tr, {
                      class: "mb30",
                      "roll-num": u(_e),
                      "ban-bet-pay": u(Se),
                      "bet-pay-list": u(Te),
                      "bet-pay-id": u(ke),
                      duplex: u(tt),
                      onOnBetpay: u(T)
                    }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), R(Rr, {
                      count: u(Be),
                      list: u(Ee),
                      onOnAmount: u($)
                    }, null, 8, ["count", "list", "onOnAmount"])])]), R(Z_), R(Fr, {
                      "total-amount": u(Me),
                      "bet-quantity": u(me),
                      onOnBet: u(b)
                    }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), R(kd, {
                      betShow: u(le),
                      "onUpdate:betShow": he[12] || (he[12] = Ne => it(le) ? le.value = Ne : null),
                      "bet-quantity": u(me),
                      "lottery-tab": u(j),
                      "time-index": u(X),
                      "total-amount": u(Me),
                      balance: u(Lt),
                      "lottery-list": u(ce),
                      "bet-type": u(Oe),
                      "multiple-list": u(we),
                      "count-val": u(Y),
                      "onUpdate:countVal": he[13] || (he[13] = Ne => it(Y) ? Y.value = Ne : null),
                      checked: u(Z),
                      "onUpdate:checked": he[14] || (he[14] = Ne => it(Z) ? Z.value = Ne : null),
                      "pre-sale-rule": u(F),
                      "onUpdate:preSaleRule": he[15] || (he[15] = Ne => it(F) ? F.value = Ne : null),
                      onCheckboxChange: u(N),
                      onOnCancel: he[16] || (he[16] = Ne => le.value = !1),
                      onGetClear: u(d),
                      onOnStepper: u(w),
                      onOnMltiple: u(C),
                      onChangeStep: u(m),
                      onOnBet: u(S)
                    }, {
                      default: A(() => [R(qd, {
                        num: u(Q),
                        "tab-id": u(J),
                        "bet-pay": u(ke),
                        "duple-list": u(ne),
                        "tab-list": u(O)
                      }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                      _: 1
                    }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), R(yt, {
                      show: u(ct),
                      "onUpdate:show": he[17] || (he[17] = Ne => it(ct) ? ct.value = Ne : null),
                      position: "center",
                      class: "x-4d-prompt",
                      style: {
                        borderRadius: "10px",
                        width: "8rem",
                        height: "80px"
                      }
                    }, {
                      default: A(() => [e("div", uv, [e("img", {
                        src: u(re)("home/AllLotteryGames/4D", "success")
                      }, null, 8, rv), W(" " + t(It.$t("code402")), 1)])]),
                      _: 1
                    }, 8, ["show"]), R(yt, {
                      show: u(F),
                      "onUpdate:show": he[19] || (he[19] = Ne => it(F) ? F.value = Ne : null),
                      class: "PreSaleRule",
                      "close-on-click-overlay": !1,
                      round: ""
                    }, {
                      default: A(() => [e("div", dv, [e("div", _v, t(u(s)("presaleRules")), 1), e("div", vv, t(It.$t("betPopTXT")), 1), e("div", pv, [e("div", {
                        class: "btn",
                        onClick: he[18] || (he[18] = Ne => F.value = !1)
                      }, t(u(s)("iKonw")), 1)])])]),
                      _: 1
                    }, 8, ["show"])])
        }
    }
  });
const hv = K(mv, [["__scopeId", "data-v-5b2f2c97"]])
  , QS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hv
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , fv = {
    class: "LR"
  }
  , gv = {
    class: "lotterys"
  }
  , yv = ["onClick"]
  , bv = {
    alt: ""
  }
  , $v = {
    class: "date"
  }
  , kv = {
    class: "dateBox"
  }
  , Tv = {
    class: "result"
  }
  , wv = U({
    __name: "index",
    setup(c) {
      const { typeList: s, getTypeList: l, gameResultByType: i, gameResultByTypeO: _ } = ds();
      l();
      const { t: p } = ye()
        , r = $e()
        , d = g(0)
        , v = ee(() => s.value ? s.value.slice(1) : [])
        , { minDate: o, maxDate: h } = ua(0)
        , y = at(h).startOf("day")
        , T = g(!1)
        , $ = je({
          type: 0,
          date: y.format("YYYY-MM-DD")
        });
      Ge(() => v, () => {
        v.value.length > 0 && ($.type = v.value[0].typeId,
          i($))
      }
        , {
          deep: !0,
          immediate: !0
        });
      const b = ee(() => at($.date).format("YYYY-MM-DD") + " " + p(`${at($.date).format("dddd")}`))
        , f = w => {
          T.value = !1,
            $.date = at(w).format("YYYY-MM-DD"),
            i($)
        }
        ;
      function k(w, m) {
        d.value = m,
          $.type = w.typeId,
          i($)
      }
      return (w, m) => {
        const C = V("NavBar")
          , N = V("ArSelect")
          , S = V("van-calendar")
          , L = Je("lazy");
        return n(),
          a("div", fv, [R(C, {
            "left-arrow": "",
            onClickLeft: m[0] || (m[0] = () => u(r).back()),
            title: w.$t("d4Tip2")
          }, null, 8, ["title"]), e("div", gv, [(n(!0),
            a(B, null, G(v.value, (x, I) => (n(),
              a("div", {
                class: P(["lottery", {
                  active: d.value === I
                }]),
                onClick: O => k(x, I),
                key: I
              }, [be(e("img", bv, null, 512), [[L, x.typeImg]])], 10, yv))), 128))]), e("div", $v, [e("div", kv, [R(N, {
                onClickSelect: m[1] || (m[1] = x => T.value = !0),
                selectName: b.value
              }, null, 8, ["selectName"])])]), e("div", Tv, [e("h1", null, t(w.$t("betResult")), 1), JSON.stringify(u(_)) !== "{}" ? (n(),
                se(_n, {
                  key: 0,
                  data: u(_)
                }, null, 8, ["data"])) : (n(),
                  se(ut, {
                    key: 1
                  }))]), R(S, {
                    show: T.value,
                    "onUpdate:show": m[2] || (m[2] = x => T.value = x),
                    onCancel: m[3] || (m[3] = () => T.value = !1),
                    onConfirm: f,
                    "min-date": u(o),
                    "max-date": u(h)
                  }, null, 8, ["show", "min-date", "max-date"])])
      }
    }
  });
const Cv = K(wv, [["__scopeId", "data-v-39cf6338"]])
  , YS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cv
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , _s = c => (De("data-v-f1cd3cab"),
    c = c(),
    Ae(),
    c)
  , Nv = {
    class: "oddsBox"
  }
  , Lv = {
    class: "title"
  }
  , Iv = {
    class: "tabHead"
  }
  , Rv = {
    class: "tabCon1"
  }
  , xv = {
    class: "item"
  }
  , Sv = _s(() => e("div", null, null, -1))
  , Bv = _s(() => e("div", null, null, -1))
  , Mv = [Sv, Bv]
  , Pv = {
    class: "tabHead h2"
  }
  , Gv = {
    class: "tabCon2"
  }
  , Dv = {
    class: "tabHead h2"
  }
  , Av = {
    key: 0
  }
  , Ov = {
    key: 1
  }
  , zv = {
    key: 2
  }
  , qv = _s(() => e("br", null, null, -1))
  , Wv = _s(() => e("br", null, null, -1))
  , Ev = _s(() => e("br", null, null, -1))
  , Fv = _s(() => e("br", null, null, -1))
  , jv = {
    class: "tabCon1 c2"
  }
  , Vv = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , { getOddsList: i, oddsList: _ } = ds();
      return Pe(() => {
        i()
      }
      ),
        (p, r) => {
          const d = V("NavBar");
          return n(),
            a("div", Nv, [R(d, {
              "left-arrow": "",
              title: u(s)("odds"),
              onClickLeft: r[0] || (r[0] = () => u(l).back())
            }, null, 8, ["title"]), (n(!0),
              a(B, null, G(u(_), v => {
                var o, h, y, T, $;
                return n(),
                  a("div", {
                    class: "items",
                    key: v.playTypeId
                  }, [e("div", Lv, t(u(s)(`d4gamePay${v.playTypeId}`)), 1), v.playTypeId != 2 ? (n(),
                    a(B, {
                      key: 0
                    }, [e("div", Iv, [e("span", null, t(u(s)("d4gameType1")), 1), e("span", null, t(u(s)("d4gameType2")), 1)]), e("div", Rv, [(n(!0),
                      a(B, null, G((o = v.lists) == null ? void 0 : o.filter(b => [1, 2].includes(b.type)), b => (n(),
                        a("div", {
                          key: b.type
                        }, [(n(!0),
                          a(B, null, G(b.list, f => (n(),
                            a("div", {
                              class: "item",
                              key: f.playId
                            }, [e("div", null, t(u(s)(`d4gameType${f.code}`)), 1), e("div", null, t(f.odds > 0 ? f.odds : f.oddsDefault), 1)]))), 128)), b.list.length < 5 ? (n(),
                              a(B, {
                                key: 0
                              }, G(2, f => e("div", xv, Mv)), 64)) : M("", !0)]))), 128))]), e("div", Pv, [(n(!0),
                                a(B, null, G((y = (h = v.lists) == null ? void 0 : h.filter(b => [3].includes(b.type))[0]) == null ? void 0 : y.list, b => (n(),
                                  a("span", {
                                    key: b.playId
                                  }, t(u(s)(`d4gameType${b.playId}`)), 1))), 128))]), e("div", Gv, [(n(!0),
                                    a(B, null, G(($ = (T = v.lists) == null ? void 0 : T.filter(b => [3].includes(b.type))[0]) == null ? void 0 : $.list, b => (n(),
                                      a("div", {
                                        key: b.playId
                                      }, t(b.odds > 0 ? b.odds : b.oddsDefault), 1))), 128))])], 64)) : (n(!0),
                                        a(B, {
                                          key: 1
                                        }, G(v.lists, b => (n(),
                                          a(B, null, [e("div", Dv, [b.type == 1 ? (n(),
                                            a("span", Av, t(u(s)("d4gameType1")), 1)) : M("", !0), b.type == 2 ? (n(),
                                              a("span", Ov, t(u(s)("d4gameType2")), 1)) : M("", !0), b.type == 3 ? (n(),
                                                a("span", zv, t(u(s)("d4Tip3")), 1)) : M("", !0), e("span", null, [W(t(u(s)("d4Tip4")), 1), qv, W("24")]), e("span", null, [W(t(u(s)("d4Tip4")), 1), Wv, W("12")]), e("span", null, [W(t(u(s)("d4Tip4")), 1), Ev, W("6")]), e("span", null, [W(t(u(s)("d4Tip4")), 1), Fv, W("4")])]), e("div", jv, [(n(!0),
                                                  a(B, null, G(b.list, f => (n(),
                                                    a("div", {
                                                      class: "itemR item",
                                                      key: f.playId
                                                    }, [e("div", null, t(u(s)(`d4gameType${f.code}`)), 1), e("div", null, t(f.odds24 > 0 ? f.odds24 : f.oddsDefault24), 1), e("div", null, t(f.odds12 > 0 ? f.odds12 : f.oddsDefault12), 1), e("div", null, t(f.odds6 > 0 ? f.odds6 : f.oddsDefault6), 1), e("div", null, t(f.odds4 > 0 ? f.odds4 : f.oddsDefault4), 1)]))), 128))])], 64))), 256))])
              }
              ), 128))])
        }
    }
  });
const Hv = K(Vv, [["__scopeId", "data-v-f1cd3cab"]])
  , ZS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hv
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Uv = {
    class: "playBox"
  }
  , Kv = {
    class: "con"
  }
  , Xv = {
    class: "tip"
  }
  , Qv = {
    class: "tip"
  }
  , Yv = ["innerHTML"]
  , Zv = {
    class: "txt"
  }
  , Jv = {
    key: 0,
    class: "num"
  }
  , ep = ["innerHTML"]
  , tp = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , i = g(0)
        , _ = g([{
          title: s("d4gamePay1"),
          tip1: s("Play4DTip2"),
          tip2: s("Play4DTip4"),
          txt: {
            tip1: "[1234]",
            tip2: "",
            tip3: [],
            tip4: s("Play4DTip1", ["1234"])
          }
        }, {
          title: s("d4gamePay5"),
          tip1: s("Play4DTip5"),
          tip2: s("Play4DTip6"),
          txt: {
            tip1: "[123R]",
            tip2: s("Play4DTip10", [10]),
            tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"],
            tip4: s("Play4DTip1", ["1234"])
          }
        }, {
          title: s("d4gamePay2"),
          tip1: s("Play4DTip7"),
          tip2: s("Play4DTip8"),
          txt: {
            tip1: "[1122]",
            tip2: s("Play4DTip11"),
            tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
            tip4: s("Play4DTip1", ["1212"])
          }
        }, {
          title: s("d4gamePay3"),
          tip1: s("Play4DTip9"),
          tip2: s("Play4DTip8"),
          txt: {
            tip1: "[1122]",
            tip2: s("Play4DTip10", [6]),
            tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
            tip4: s("Play4DTip1", ["1212"])
          }
        }, {
          title: s("d4gamePay4"),
          tip1: s("Play4DTip3"),
          tip2: s("Play4DTip4"),
          txt: {
            tip1: "[1234]",
            tip2: s("Play4DTip10", [2]),
            tip3: ["1234", "4321"],
            tip4: s("Play4DTip1", ["1234"])
          }
        }]);
      return (p, r) => {
        const d = V("NavBar")
          , v = V("van-icon")
          , o = V("van-tab")
          , h = V("van-tabs");
        return n(),
          a("div", Uv, [R(d, {
            "left-arrow": "",
            title: u(s)("lotteryManual"),
            onClickLeft: r[0] || (r[0] = () => u(l).back())
          }, null, 8, ["title"]), R(h, {
            active: i.value,
            "onUpdate:active": r[1] || (r[1] = y => i.value = y),
            type: "card",
            "swipe-threshold": 3
          }, {
            default: A(() => [(n(!0),
              a(B, null, G(_.value, (y, T) => (n(),
                se(o, {
                  title: y.title,
                  key: T
                }, {
                  default: A(() => [e("div", Kv, [e("h1", null, [R(v, {
                    name: "play",
                    class: "icon",
                    size: "20"
                  }), W(t(u(s)("betting")), 1)]), e("div", Xv, t(y.tip1), 1), e("h1", null, [R(v, {
                    name: "play",
                    class: "icon",
                    size: "20"
                  }), W(t(u(s)("winningconditions")), 1)]), e("div", Qv, [e("span", {
                    innerHTML: y.tip2
                  }, null, 8, Yv)]), e("div", Zv, [e("div", null, t(u(s)("example")), 1), e("div", null, t(u(s)("betting")) + ":   " + t(y.txt.tip1), 1), e("div", null, t(y.txt.tip2), 1), y.txt.tip3.length > 0 ? (n(),
                    a("div", Jv, [(n(!0),
                      a(B, null, G(y.txt.tip3, ($, b) => (n(),
                        a("span", {
                          key: b
                        }, t($), 1))), 128))])) : M("", !0), e("div", null, [W(t(u(s)("result")) + ":   ", 1), e("span", {
                          innerHTML: y.txt.tip4
                        }, null, 8, ep)])])])]),
                  _: 2
                }, 1032, ["title"]))), 128))]),
            _: 1
          }, 8, ["active"])])
      }
    }
  });
const sp = K(tp, [["__scopeId", "data-v-c84d3aa1"]])
  , JS = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sp
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , np = {
    class: "MG"
  }
  , ap = U({
    __name: "index",
    setup(c) {
      const { getTypeList: s, typeList: l, getMy4DHistory: i } = ds();
      s();
      const { t: _ } = ye()
        , p = $e()
        , r = g(!1)
        , d = g(_("all"))
        , v = je({
          type: 0,
          date: "",
          pageSize: 20,
          pageNo: 1
        });
      i(v);
      const o = async ({ selectedOptions: h }) => {
        r.value = !1,
          v.type = h[0].typeId,
          v.pageNo = 1,
          d.value = h[0].typeName,
          i(v)
      }
        ;
      return (h, y) => {
        const T = V("NavBar")
          , $ = V("ArSelect")
          , b = V("van-picker")
          , f = V("van-popup");
        return n(),
          a("div", np, [R(T, {
            "left-arrow": "",
            onClickLeft: y[0] || (y[0] = () => u(p).back()),
            title: h.$t("xosoTxt73")
          }, null, 8, ["title"]), R($, {
            onClickSelect: y[1] || (y[1] = k => r.value = !0),
            selectName: d.value
          }, null, 8, ["selectName"]), R(Sa, {
            pageQuery: v,
            "onUpdate:pageQuery": y[2] || (y[2] = k => v = k)
          }, null, 8, ["pageQuery"]), R(f, {
            show: r.value,
            "onUpdate:show": y[4] || (y[4] = k => r.value = k),
            round: "",
            position: "bottom"
          }, {
            default: A(() => [R(b, {
              "columns-field-names": {
                text: "typeName",
                value: "typeId"
              },
              columns: u(l),
              onCancel: y[3] || (y[3] = k => r.value = !1),
              onConfirm: o
            }, null, 8, ["columns"])]),
            _: 1
          }, 8, ["show"])])
      }
    }
  });
const op = K(ap, [["__scopeId", "data-v-59bf1373"]])
  , e7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: op
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , lp = {
    class: "Wallet__C"
  }
  , ip = {
    class: "Wallet__C-balance"
  }
  , cp = {
    class: "Wallet__C-balance-l1"
  }
  , up = {
    class: "Wallet__C-balance-l2"
  }
  , rp = {
    class: "Wallet__C-balance-l3"
  }
  , dp = U({
    __name: "Wallet",
    setup(c, { expose: s }) {
      const { t: l } = ye()
        , i = g(0)
        , _ = async (d = !0) => {
          const v = await ae(cn());
          v && (i.value = (v == null ? void 0 : v.data.amount) || 0,
            d && ht(l("refreshSuccess")))
        }
        , p = $e()
        , r = d => {
          p.push({
            name: d
          })
        }
        ;
      return Pe(() => {
        _(!1)
      }
      ),
        s({
          getWinsUserAmount: _
        }),
        (d, v) => {
          const o = Je("throttle-click");
          return n(),
            a("div", lp, [e("div", ip, [e("div", cp, [be((n(),
              a("div", null, [W(t(u(Re)(i.value)), 1)])), [[o, {
                handler: _,
                wait: 2e3
              }]])]), e("div", up, [e("div", null, t(d.$t("walletBalance")), 1)]), e("div", rp, [e("div", {
                onClick: v[0] || (v[0] = h => r("Withdraw"))
              }, t(d.$t("withdraw")), 1), e("div", {
                onClick: v[1] || (v[1] = h => r("Recharge"))
              }, t(d.$t("recharge")), 1)])])])
        }
    }
  });
const xs = K(dp, [["__scopeId", "data-v-ed6673b8"]])
  , _p = {
    class: "GameList__C"
  }
  , vp = ["onClick"]
  , pp = ["innerHTML"]
  , mp = U({
    __name: "GameList",
    props: {
      gameList: {
        default: {
          type: Array,
          default: () => []
        }
      },
      currentGameIndex: {
        default: {
          type: Number,
          default: 0
        }
      }
    },
    setup(c) {
      const s = c;
      return (l, i) => (n(),
        a("div", _p, [(n(!0),
          a(B, null, G(s.gameList, (_, p) => (n(),
            a("div", {
              key: p,
              class: P(["GameList__C-item", {
                active: l.currentGameIndex == p
              }]),
              onClick: r => l.$emit("changeGame", p)
            }, [e("div", {
              innerHTML: _.typeName
            }, null, 8, pp)], 10, vp))), 128))]))
    }
  });
const Ss = K(mp, [["__scopeId", "data-v-484ec2ec"]])
  , hp = {
    class: "TimeLeft__C-PreSale"
  }
  , fp = {
    class: "TimeLeft__C-PreSale-head"
  }
  , gp = {
    class: "TimeLeft__C-PreSale-body"
  }
  , yp = ["innerHTML"]
  , bp = {
    class: "TimeLeft__C-PreSale-foot"
  }
  , $p = U({
    __name: "rule",
    props: {
      howPlayShow: {
        type: Boolean,
        default: !1
      },
      gamePresentation: {
        type: String,
        default: ""
      }
    },
    emits: ["close"],
    setup(c, { emit: s }) {
      const l = c
        , i = ee({
          get() {
            return l.howPlayShow || !1
          },
          set(_) {
            _ || s("close")
          }
        });
      return (_, p) => {
        const r = V("van-popup");
        return n(),
          se(r, {
            show: i.value,
            "onUpdate:show": p[1] || (p[1] = d => i.value = d),
            "close-on-click-overlay": !1,
            round: ""
          }, {
            default: A(() => [e("div", hp, [e("div", fp, t(_.$t("winTrxIndicate")), 1), e("div", gp, [e("div", {
              innerHTML: c.gamePresentation
            }, null, 8, yp)]), e("div", bp, [e("div", {
              class: "TimeLeft__C-PreSale-foot-btn",
              onClick: p[0] || (p[0] = d => s("close"))
            }, t(_.$t("winTrxClose")), 1)])])]),
            _: 1
          }, 8, ["show"])
      }
    }
  });
const Bs = K($p, [["__scopeId", "data-v-a7a14dc2"]])
  , kp = c => (De("data-v-4841d7c5"),
    c = c(),
    Ae(),
    c)
  , Tp = {
    class: "FDTL__C"
  }
  , wp = {
    class: "FDTL__C-l1"
  }
  , Cp = {
    class: "left"
  }
  , Np = {
    class: "FDTL__C-l2"
  }
  , Lp = {
    class: "FDTL__C-time"
  }
  , Ip = kp(() => e("div", {
    notime: ""
  }, ":", -1))
  , Rp = {
    class: "FDTL__C-l3"
  }
  , xp = {
    class: "box"
  }
  , Sp = ["num"]
  , Bp = an('<div class="slot-num" data-v-4841d7c5>1</div><div class="slot-num" data-v-4841d7c5>2</div><div class="slot-num" data-v-4841d7c5>0</div><div class="slot-num" data-v-4841d7c5>1</div><div class="slot-num" data-v-4841d7c5>2</div><div class="slot-num" data-v-4841d7c5>3</div><div class="slot-num" data-v-4841d7c5>4</div><div class="slot-num" data-v-4841d7c5>5</div><div class="slot-num" data-v-4841d7c5>6</div><div class="slot-num" data-v-4841d7c5>7</div><div class="slot-num" data-v-4841d7c5>8</div><div class="slot-num" data-v-4841d7c5>9</div><div class="slot-num" data-v-4841d7c5>0</div><div class="slot-num" data-v-4841d7c5>1</div><div class="slot-num" data-v-4841d7c5>2</div><div class="slot-num" data-v-4841d7c5>3</div><div class="slot-num" data-v-4841d7c5>4</div><div class="slot-num" data-v-4841d7c5>5</div><div class="slot-num" data-v-4841d7c5>6</div><div class="slot-num" data-v-4841d7c5>7</div><div class="slot-num" data-v-4841d7c5>8</div><div class="slot-num" data-v-4841d7c5>9</div><div class="slot-num" data-v-4841d7c5>0</div><div class="slot-num" data-v-4841d7c5>1</div><div class="slot-num" data-v-4841d7c5>2</div><div class="slot-num" data-v-4841d7c5>3</div><div class="slot-num" data-v-4841d7c5>4</div><div class="slot-num" data-v-4841d7c5>5</div><div class="slot-num" data-v-4841d7c5>6</div><div class="slot-num" data-v-4841d7c5>7</div><div class="slot-num" data-v-4841d7c5>8</div><div class="slot-num" data-v-4841d7c5>9</div>', 32)
  , Mp = ["num"]
  , Pp = U({
    __name: "TimeLeft",
    props: {
      premium: {},
      currentInfo: {},
      currentGame: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = g(0)
        , _ = g([{
          arr: []
        }, {
          arr: []
        }, {
          arr: []
        }, {
          arr: []
        }, {
          arr: []
        }]);
      Ge(() => l.premium, h => {
        h && (_.value = p(h))
      }
      );
      const p = h => {
        let y = [];
        for (let $ = 0; $ < h.length; $++) {
          let b = h[$];
          var T = [];
          switch (b) {
            case 9:
              T.push(b - 8, b - 9, b);
              break;
            case 0:
              T.push(b + 8, b + 9, b);
              break;
            default:
              T.push(b - 2, b - 1, b)
          }
          y.push({
            arr: T
          })
        }
        return y
      }
        , r = () => {
          i.value = 1,
            setTimeout(() => {
              i.value = 0
            }
              , 3e3)
        }
        , d = g(!1)
        , v = Kt()
        , o = () => {
          d.value = !0,
            v.get5DRule(l.currentGame.typeID)
        }
        ;
      return s({
        animationShow: r
      }),
        (h, y) => (n(),
          a(B, null, [e("div", Tp, [e("div", wp, [e("div", Cp, [e("div", null, t(h.$t("betIssue")), 1), e("div", {
            class: "FDTL__C-rule",
            onClick: o
          }, t(h.$t("winTrxIndicate")), 1)]), e("div", null, t(h.$t("k3TimeLeftToBuy")), 1)]), e("div", Np, [e("div", null, t(l.currentInfo.gameNo), 1), e("div", Lp, [e("div", null, t(h.currentInfo.time1), 1), e("div", null, t(h.currentInfo.time2), 1), Ip, e("div", null, t(h.currentInfo.time3), 1), e("div", null, t(h.currentInfo.time4), 1)])]), e("div", Rp, [e("div", xp, [(n(!0),
            a(B, null, G(_.value, (T, $) => (n(),
              a("div", {
                key: $,
                class: "slot-column"
              }, [e("div", {
                class: P(["slot-transform", "transform" + $, i.value == 1 && "slot-scroll"])
              }, [(n(!0),
                a(B, null, G(T.arr, (b, f) => (n(),
                  a("div", {
                    class: "slot-num",
                    num: T,
                    key: "2" + f
                  }, t(b), 9, Sp))), 128)), Bp, (n(!0),
                    a(B, null, G(T.arr, (b, f) => (n(),
                      a("div", {
                        class: "slot-num",
                        num: T,
                        key: "2" + f
                      }, t(b), 9, Mp))), 128))], 2)]))), 128))])])]), R(Bs, {
                        howPlayShow: d.value,
                        gamePresentation: h.currentGame.gamePresentation,
                        onClose: y[0] || (y[0] = T => d.value = !1)
                      }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
  });
const Gp = K(Pp, [["__scopeId", "data-v-4841d7c5"]])
  , Dp = {
    class: "FDB__C-nav"
  }
  , Ap = ["onClick"]
  , Op = {
    class: "FDB__C-H"
  }
  , zp = ["onClick"]
  , qp = {
    class: "FDB__C-Num"
  }
  , Wp = ["txt", "onClick"]
  , Ep = {
    class: "round"
  }
  , Fp = {
    class: "rate"
  }
  , jp = U({
    __name: "BetCom",
    props: {
      betTypeNameMap: {},
      betType: {},
      BettingH: {},
      onTabID: {},
      numberChack: {},
      OddsList: {}
    },
    emits: ["changeType", "onTab", "numberTab"],
    setup(c, { emit: s }) {
      return (l, i) => (n(),
        a(B, null, [e("div", Dp, [(n(!0),
          a(B, null, G(l.betTypeNameMap, (_, p) => (n(),
            a("div", {
              key: p,
              class: P({
                active: l.betType == p
              }),
              onClick: r => s("changeType", p)
            }, t(_), 11, Ap))), 128))]), e("div", Op, [(n(!0),
              a(B, null, G(l.BettingH, (_, p) => (n(),
                a("div", {
                  key: p,
                  class: P({
                    active: l.onTabID == _.id
                  }),
                  onClick: r => s("onTab", _.id)
                }, [e("span", null, t(_.name), 1), e("span", null, t(_.rate), 1)], 10, zp))), 128))]), e("div", qp, [l.betType != 5 ? (n(),
                  a(B, {
                    key: 0
                  }, G(10, (_, p) => e("div", {
                    key: p,
                    txt: p,
                    class: P({
                      active: l.numberChack[p]
                    }),
                    onClick: r => s("numberTab", p)
                  }, [e("div", Ep, t(p), 1), e("div", Fp, t(l.OddsList[0].playRate ? l.OddsList[0].playRate : l.OddsList[0].playRate_Original), 1)], 10, Wp)), 64)) : M("", !0)])], 64))
    }
  });
const Vn = K(jp, [["__scopeId", "data-v-aec62e6a"]])
  , Vp = c => (De("data-v-85f615c4"),
    c = c(),
    Ae(),
    c)
  , Hp = {
    class: "Betting__Popup-body"
  }
  , Up = {
    class: "Betting__Popup-body-line"
  }
  , Kp = {
    class: "Betting__Popup-body-line-list"
  }
  , Xp = ["onClick"]
  , Qp = {
    class: "Betting__Popup-body-line"
  }
  , Yp = {
    class: "Betting__Popup-body-line-btnL"
  }
  , Zp = {
    class: "Betting__Popup-body-line"
  }
  , Jp = Vp(() => e("div", null, null, -1))
  , em = {
    class: "Betting__Popup-body-line-list"
  }
  , tm = ["onClick"]
  , sm = {
    class: "Betting__Popup-body-line"
  }
  , nm = {
    class: "Betting__Popup-foot"
  }
  , am = {
    class: "Betting__Popup-foot-s bgcolor"
  }
  , om = {
    class: "Betting__Popup-PreSale"
  }
  , lm = {
    class: "Betting__Popup-PreSale-head"
  }
  , im = {
    class: "Betting__Popup-PreSale-body"
  }
  , cm = {
    class: "Betting__Popup-PreSale-foot"
  }
  , um = U({
    __name: "BettingPopup",
    props: {
      currentInfo: {},
      currentGame: {},
      bettingPopupShow: {},
      betTypeList: {},
      selectInfo: {}
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
    setup(c, { emit: s }) {
      const l = c
        , { t: i } = ye()
        , _ = g(!1)
        , p = g(!0)
        , r = ee(() => l.currentGame.betMultiple.split("|"));
      Ge(() => r, () => {
        l.selectInfo.count = r.value[0]
      }
        , {
          deep: !0,
          immediate: !0
        });
      let d = ee({
        get() {
          return l.bettingPopupShow || !1
        },
        set(b) {
          s("update:bettingPopupShow", b)
        }
      });
      const v = b => {
        switch (b) {
          case 1:
            l.selectInfo.count > 1 && l.selectInfo.count--;
            break;
          case 2:
            l.selectInfo.count++;
            break
        }
        s("computedCoin")
      }
        , o = b => {
          b > 0 && (l.selectInfo.count = Math.floor(b)),
            s("computedCoin")
        }
        , h = b => {
          l.selectInfo.count = b,
            s("computedCoin")
        }
        , y = b => {
          l.selectInfo.coin = b,
            s("computedCoin")
        }
        , T = () => {
          _.value = !1,
            p.value = !0
        }
        , $ = async () => {
          if (!p.value) {
            ht(i("agreePresaleRules"));
            return
          }
          s("submitBetting")
        }
        ;
      return (b, f) => {
        const k = V("van-field")
          , w = V("van-popup")
          , m = Je("throttle-click");
        return n(),
          a(B, null, [R(w, {
            show: u(d),
            "onUpdate:show": f[6] || (f[6] = C => it(d) ? d.value = C : d = C),
            position: "bottom",
            style: {
              "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
            },
            round: !0,
            "close-on-click-overlay": !1
          }, {
            default: A(() => [e("div", Hp, [pt(b.$slots, "default", {}, void 0, !0), e("div", Up, [W(t(u(i)("amount")) + " ", 1), e("div", Kp, [(n(!0),
              a(B, null, G(b.betTypeList, (C, N) => (n(),
                a("div", {
                  key: N,
                  class: P(["Betting__Popup-body-line-item", {
                    bgcolor: l.selectInfo.coin == C
                  }]),
                  onClick: S => y(C)
                }, t(C), 11, Xp))), 128))])]), e("div", Qp, [W(t(u(i)("numbers")) + " ", 1), e("div", Yp, [e("div", {
                  class: P(["Betting__Popup-btn", {
                    bgcolor: l.selectInfo.count > 0
                  }]),
                  onClick: f[0] || (f[0] = C => v(1))
                }, "-", 2), R(k, {
                  class: "Betting__Popup-input",
                  modelValue: l.selectInfo.count,
                  "onUpdate:modelValue": f[1] || (f[1] = C => l.selectInfo.count = C),
                  modelModifiers: {
                    number: !0
                  },
                  type: "digit",
                  maxlength: 4,
                  onInput: o
                }, null, 8, ["modelValue"]), e("div", {
                  class: "Betting__Popup-btn bgcolor",
                  onClick: f[2] || (f[2] = C => v(2))
                }, "+")])]), e("div", Zp, [Jp, e("div", em, [(n(!0),
                  a(B, null, G(r.value, (C, N) => (n(),
                    a("div", {
                      key: N,
                      class: P(["Betting__Popup-body-line-item", {
                        bgcolor: l.selectInfo.count == C
                      }]),
                      onClick: S => h(C)
                    }, " X" + t(C), 11, tm))), 128))])]), e("div", sm, [e("span", {
                      class: P(["Betting__Popup-agree", {
                        active: p.value
                      }]),
                      onClick: f[3] || (f[3] = C => p.value = !p.value)
                    }, t(u(i)("agree")), 3), e("span", {
                      onClick: f[4] || (f[4] = C => _.value = !0),
                      class: "Betting__Popup-preSaleShow"
                    }, t(u(i)("presaleRules")), 1)])]), e("div", nm, [e("div", {
                      class: "Betting__Popup-foot-c",
                      onClick: f[5] || (f[5] = C => s("clearBetting"))
                    }, t(u(i)("cancel")), 1), be((n(),
                      a("div", am, [W(t(u(i)("totalAmount")) + t(u(Re)(l.selectInfo.allCoin || 0)), 1)])), [[m, {
                        handler: $,
                        wait: 2e3
                      }]])])]),
            _: 3
          }, 8, ["show"]), R(w, {
            show: _.value,
            "onUpdate:show": f[7] || (f[7] = C => _.value = C),
            "close-on-click-overlay": !1,
            round: ""
          }, {
            default: A(() => [e("div", om, [e("div", lm, t(u(i)("presaleRules")), 1), e("div", im, t(b.$t("betPopTXT")), 1), e("div", cm, [e("div", {
              class: "Betting__Popup-PreSale-foot-btn",
              onClick: T
            }, t(u(i)("iKonw")), 1)])])]),
            _: 1
          }, 8, ["show"])], 64)
      }
    }
  });
const rm = K(um, [["__scopeId", "data-v-85f615c4"]])
  , dm = {
    class: "FDB__C"
  }
  , _m = {
    class: "FDB__C-mark"
  }
  , vm = U({
    __name: "Betting",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({})
      },
      ProhibitBuyTime: {
        type: Number,
        default: 5
      },
      currentGame: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["betting", "changeBettingP"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , { t: _ } = ye();
      g();
      const p = g(!1);
      Ge(() => p.value, O => {
        O && ($.value.coin = f.value[0])
      }
      );
      const r = g(0)
        , d = g(["A", "B", "C", "D", "E", "SUM"])
        , v = g([{
          playID: 1,
          playType: 1,
          playBet: "0-9",
          playResult: "0-9",
          playRate: 9,
          playRate_Original: 9
        }, {
          playID: 2,
          playType: 2,
          playBet: "H",
          playResult: "H",
          playRate: 2,
          playRate_Original: 2
        }, {
          playID: 3,
          playType: 2,
          playBet: "L",
          playResult: "L",
          playRate: 2,
          playRate_Original: 2
        }, {
          playID: 4,
          playType: 3,
          playBet: "O",
          playResult: "O",
          playRate: 2,
          playRate_Original: 2
        }, {
          playID: 5,
          playType: 3,
          playBet: "E",
          playResult: "E",
          playRate: 2,
          playRate_Original: 2
        }])
        , o = g(0)
        , h = g([])
        , y = g([!1, !1, !1, !1, !1, !1, !1, !1])
        , T = ee(() => [{
          id: 1,
          name: _("k3Big"),
          rate: v.value[1].playRate || v.value[1].playRate_Original
        }, {
          id: 2,
          name: _("k3Small"),
          rate: v.value[2].playRate || v.value[2].playRate_Original
        }, {
          id: 3,
          name: _("k3Odd"),
          rate: v.value[3].playRate || v.value[3].playRate_Original
        }, {
          id: 4,
          name: _("k3Even"),
          rate: v.value[4].playRate || v.value[4].playRate_Original
        }])
        , $ = g({
          coin: 0,
          count: 1,
          allCoin: 0,
          gametype: 0,
          typeid: 1,
          issuenumber: "2020",
          selecttype: ""
        })
        , b = ee(() => (i.currentInfo.passTime < i.ProhibitBuyTime && L(),
          i.currentInfo.passTime < i.ProhibitBuyTime))
        , f = ee(() => i.currentGame.scope ? i.currentGame.scope.split("|").map(O => Number(O)) : [])
        , k = O => {
          r.value = O,
            O == 5 && S()
        }
        , w = async () => {
          const [O, D] = await Ze(el());
          D && (v.value = D)
        }
        , m = O => {
          S(),
            o.value == O ? (o.value = 0,
              p.value = !0) : (o.value = O,
                p.value = !0),
            N()
        }
        , C = O => {
          if (o.value = 0,
            y.value[O]) {
            y.value[O] = !1;
            const D = h.value.indexOf(O);
            D > -1 && h.value.splice(D, 1),
              p.value = !0
          } else
            h.value.push(O),
              y.value[O] = !0,
              p.value = !0;
          N()
        }
        , N = () => {
          Xe(() => {
            h.value.length > 0 ? $.value.allCoin = $.value.coin * $.value.count * h.value.length : o.value ? $.value.allCoin = $.value.coin * $.value.count : $.value.allCoin = 0
          }
          )
        }
        , S = () => {
          h.value = [];
          for (let O = 0; y.value.length > O; O++)
            y.value[O] = !1;
          N()
        }
        , L = () => {
          var O;
          $.value.count = ((O = i.currentGame.betMultiple) == null ? void 0 : O.split("|")[0]) || 1,
            p.value = !1,
            x()
        }
        , x = () => {
          h.value = [],
            y.value = [!1, !1, !1, !1, !1, !1, !1, !1],
            o.value = 0
        }
        , I = async () => {
          if ($.value.count == 0)
            return qe(_("bteNoCount"));
          let O;
          if (h.value.length > 0)
            O = h.value.join("|");
          else
            switch (o.value) {
              case 1:
                O = "H";
                break;
              case 2:
                O = "L";
                break;
              case 3:
                O = "O";
                break;
              case 4:
                O = "E";
                break
            }
          if (!O)
            return qe("请下注");
          const D = {
            issuenumber: i.currentInfo.gameNo,
            typeId: i.currentGame.typeID,
            amount: $.value.coin,
            betCount: Number($.value.count),
            gameType: r.value + 1,
            selectType: O
          }
            , j = await ae(da(D));
          (j == null ? void 0 : j.code) === 0 && (ht(_("code" + (j == null ? void 0 : j.msgCode))),
            p.value = !1,
            x(),
            l("betting", i.currentInfo.gameNo))
        }
        ;
      return Pe(() => {
        w()
      }
      ),
        s({
          bettingPopupShow: p
        }),
        (O, D) => (n(),
          a("div", dm, [be(e("div", _m, [e("div", null, t(i.currentInfo.time3 || "0"), 1), e("div", null, t(i.currentInfo.time4 || "0"), 1)], 512), [[et, b.value]]), R(Vn, {
            betTypeNameMap: d.value,
            betType: r.value,
            BettingH: T.value,
            onTabID: o.value,
            OddsList: v.value,
            numberChack: y.value,
            onChangeType: k,
            onNumberTab: C,
            onOnTab: m
          }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), R(rm, {
            currentInfo: c.currentInfo,
            currentGame: c.currentGame,
            bettingPopupShow: p.value,
            betTypeList: f.value,
            selectInfo: $.value,
            onComputedCoin: N,
            onClearBetting: L,
            onSubmitBetting: I
          }, {
            default: A(() => [R(Vn, {
              betTypeNameMap: d.value,
              betType: r.value,
              BettingH: T.value,
              onTabID: o.value,
              OddsList: v.value,
              numberChack: y.value,
              onChangeType: k,
              onNumberTab: C,
              onOnTab: m
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
            _: 1
          }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
    }
  });
const pm = K(vm, [["__scopeId", "data-v-5b31f58d"]])
  , mm = {
    class: "RecordNav__C"
  }
  , hm = ["onClick"]
  , fm = U({
    __name: "RecordNav",
    props: {
      record: {
        type: String,
        default: "GameRecord"
      }
    },
    setup(c) {
      const s = c
        , { t: l } = ye()
        , i = g([{
          name: l("gameRecords"),
          componentName: "GameRecord"
        }, {
          name: l("chartTrends"),
          componentName: "Trend"
        }, {
          name: l("myGameRecords"),
          componentName: "MyGameRecord"
        }]);
      return (_, p) => (n(),
        a("div", mm, [(n(!0),
          a(B, null, G(i.value, (r, d) => (n(),
            a("div", {
              key: d,
              onClick: v => _.$emit("changeC", r.componentName),
              class: P({
                active: s.record == r.componentName
              })
            }, t(r.name), 11, hm))), 128))]))
    }
  });
const Ms = K(fm, [["__scopeId", "data-v-4e271e20"]])
  , gm = {
    class: "GameRecord__C"
  }
  , ym = {
    class: "GameRecord__C-head"
  }
  , bm = {
    class: "GameRecord__C-body"
  }
  , $m = {
    class: "numList"
  }
  , km = {
    class: "numItem"
  }
  , Tm = {
    class: "redNumItem"
  }
  , wm = {
    key: 1,
    class: "GameRecord__C-body-empty"
  }
  , Cm = {
    key: 0,
    class: "GameRecord__C-foot"
  }
  , Nm = {
    class: "GameRecord__C-foot-page"
  }
  , Lm = U({
    __name: "GameRecord",
    props: {
      typeid: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = g([])
        , _ = g(4)
        , p = g(10)
        , r = g(1)
        , d = () => {
          r.value--,
            o()
        }
        , v = () => {
          r.value++,
            o()
        }
        , o = async (h = !1) => {
          if (l.typeid == null)
            return;
          h && (r.value = 1);
          const y = await ae(_a({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }));
          i.value = (y == null ? void 0 : y.data.list) || [],
            _.value = (y == null ? void 0 : y.data.totalPage) || 0
        }
        ;
      return s({
        getData: o
      }),
        wt(() => {
          o()
        }
        ),
        (h, y) => {
          const T = V("van-col")
            , $ = V("van-row")
            , b = V("van-icon");
          return n(),
            a("div", gm, [e("div", ym, [R($, null, {
              default: A(() => [R(T, {
                span: "8"
              }, {
                default: A(() => [W(t(h.$t("FDNumber")), 1)]),
                _: 1
              }), R(T, {
                span: "12"
              }, {
                default: A(() => [W(t(h.$t("FDResult")), 1)]),
                _: 1
              }), R(T, {
                span: "4"
              }, {
                default: A(() => [W(t(h.$t("FDTotal")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", bm, [i.value.length ? (n(!0),
              a(B, {
                key: 0
              }, G(i.value, (f, k) => (n(),
                se($, {
                  key: k
                }, {
                  default: A(() => [R(T, {
                    span: "8"
                  }, {
                    default: A(() => [W(t(f.issueNumber), 1)]),
                    _: 2
                  }, 1024), R(T, {
                    span: "12"
                  }, {
                    default: A(() => [e("div", $m, [(n(!0),
                      a(B, null, G([...f.premium], (w, m) => (n(),
                        a("div", km, t(w), 1))), 256))])]),
                    _: 2
                  }, 1024), R(T, {
                    span: "4"
                  }, {
                    default: A(() => [e("span", Tm, t(f.sumCount), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024))), 128)) : (n(),
                  a("div", wm, [R(ut)]))]), i.value.length ? (n(),
                    a("div", Cm, [e("div", {
                      class: P(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: d
                    }, [R(b, {
                      name: "arrow-left",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", Nm, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["GameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: v
                    }, [R(b, {
                      name: "arrow",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const Im = K(Lm, [["__scopeId", "data-v-72ff2550"]])
  , Rm = {
    class: "Trend__C"
  }
  , xm = {
    class: "Trend__C-body1"
  }
  , Sm = {
    class: "Trend__C-nav"
  }
  , Bm = ["onClick"]
  , Mm = {
    class: "Trend__C-body1-line"
  }
  , Pm = {
    key: 0,
    class: "Trend__C-body1-line"
  }
  , Gm = {
    class: "Trend__C-body1-line-num"
  }
  , Dm = {
    key: 1,
    class: "Trend__C-body1-line"
  }
  , Am = {
    class: "Trend__C-body1-line-num"
  }
  , Om = {
    key: 2,
    class: "Trend__C-body1-line"
  }
  , zm = {
    class: "Trend__C-body1-line-num"
  }
  , qm = {
    key: 3,
    class: "Trend__C-body1-line"
  }
  , Wm = {
    class: "Trend__C-body1-line-num"
  }
  , Em = {
    class: "Trend__C-head"
  }
  , Fm = {
    class: "Trend__C-body2"
  }
  , jm = ["IssueNumber", "Number", "Colour", "rowId"]
  , Vm = {
    class: "Trend__C-body2-IssueNumber"
  }
  , Hm = {
    class: "Trend__C-body2-Num"
  }
  , Um = ["id"]
  , Km = {
    key: 1,
    class: "Trend__C-body2-empty"
  }
  , Xm = {
    key: 0,
    class: "Trend__C-foot"
  }
  , Qm = {
    class: "Trend__C-foot-page"
  }
  , Ym = U({
    __name: "Trend",
    props: {
      typeid: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = g([])
        , _ = g([])
        , p = g()
        , r = g()
        , d = g()
        , v = g()
        , o = g()
        , h = g(["A", "B", "C", "D", "E"])
        , y = g(0)
        , T = g(1)
        , $ = g(4);
      function b() {
        Xe(() => {
          for (let S = 0; S < _.value.length; S++)
            _.value[S + 1] && k(_.value[S], _.value[S + 1])
        }
        )
      }
      const f = S => {
        y.value = S,
          C(!0)
      }
        ;
      function k(S, L) {
        let x = parseInt(S.number)
          , I = parseInt(L.number);
        var O = document.getElementById("myCanvas" + S.rowId);
        if (O && O.getContext) {
          var D = O.getContext("2d");
          D.clearRect(0, 0, O.width, O.height),
            D.beginPath(),
            D.moveTo(x == 0 ? 14 : x * 27 + 14, 0),
            D.lineTo(I == 0 ? 14 : I * 27 + 14, O.height),
            D.strokeStyle = "red",
            D.stroke(),
            D.closePath()
        }
      }
      const w = () => {
        T.value--,
          N()
      }
        , m = () => {
          T.value++,
            N()
        }
        , C = async (S = !1) => {
          if (l.typeid == null)
            return;
          N(),
            S && (T.value = 1);
          const L = await ae(tl({
            typeId: l.typeid,
            typeNumber: y.value + 1
          }));
          if (L) {
            const x = Object.keys(L.data[0]).filter(I => I.startsWith("number_"));
            i.value = L.data.filter(I => I.type_Number == y.value + 1).map(I => {
              const O = {
                list: [],
                type: 0
              };
              return O.type = I.type,
                O.list = [],
                x.forEach(D => {
                  O.list.push(I[D])
                }
                ),
                O
            }
            )
          }
          p.value = i.value.find(x => x.type == 1),
            r.value = i.value.find(x => x.type == 2),
            d.value = i.value.find(x => x.type == 3),
            v.value = i.value.find(x => x.type == 4),
            o.value = i.value.find(x => x.type == 5)
        }
        , N = async (S = !1) => {
          if (l.typeid == null)
            return;
          S && (T.value = 1);
          const L = await ae(_a({
            pageSize: 10,
            pageNo: T.value,
            typeId: l.typeid
          }));
          L && (_.value = L.data.list.map((x, I) => (x.rowId = I,
            x.number = x.premium[y.value],
            x)) || []),
            $.value = (L == null ? void 0 : L.data.totalPage) || 0,
            b()
        }
        ;
      return s({
        getData: C
      }),
        wt(() => {
          C()
        }
        ),
        (S, L) => {
          const x = V("van-col")
            , I = V("van-row")
            , O = V("van-icon");
          return n(),
            a("div", Rm, [e("div", xm, [e("div", Sm, [(n(!0),
              a(B, null, G(h.value, (D, j) => (n(),
                a("div", {
                  key: j,
                  class: P({
                    active: y.value == j
                  }),
                  onClick: X => f(j)
                }, t(D), 11, Bm))), 128))]), e("div", Mm, t(S.$t("trendDesc1")), 1), r.value ? (n(),
                  a("div", Pm, [e("div", null, t(S.$t("trendDesc3")), 1), e("div", Gm, [(n(!0),
                    a(B, null, G(r.value.list, (D, j) => (n(),
                      a("div", {
                        key: "2" + j
                      }, t(D), 1))), 128))])])) : M("", !0), v.value ? (n(),
                        a("div", Dm, [e("div", null, t(S.$t("trendDesc4")), 1), e("div", Am, [(n(!0),
                          a(B, null, G(v.value.list, (D, j) => (n(),
                            a("div", {
                              key: "4" + j
                            }, t(D), 1))), 128))])])) : M("", !0), p.value ? (n(),
                              a("div", Om, [e("div", null, t(S.$t("trendDesc5")), 1), e("div", zm, [(n(!0),
                                a(B, null, G(p.value.list, (D, j) => (n(),
                                  a("div", {
                                    key: "5" + j
                                  }, t(D), 1))), 128))])])) : M("", !0), d.value ? (n(),
                                    a("div", qm, [e("div", null, t(S.$t("trendDesc6")), 1), e("div", Wm, [(n(!0),
                                      a(B, null, G(d.value.list, (D, j) => (n(),
                                        a("div", {
                                          key: "3" + j
                                        }, t(D), 1))), 128))])])) : M("", !0)]), e("div", Em, [R(I, null, {
                                          default: A(() => [R(x, {
                                            span: "8"
                                          }, {
                                            default: A(() => [W(t(S.$t("betIssue")), 1)]),
                                            _: 1
                                          }), R(x, {
                                            span: "16"
                                          }, {
                                            default: A(() => [W(t(S.$t("number")), 1)]),
                                            _: 1
                                          })]),
                                          _: 1
                                        })]), e("div", Fm, [_.value.length ? (n(!0),
                                          a(B, {
                                            key: 0
                                          }, G(_.value, (D, j) => (n(),
                                            a("div", {
                                              key: j,
                                              IssueNumber: D.issueNumber,
                                              Number: D.number,
                                              Colour: D.colour,
                                              rowId: D.rowId
                                            }, [R(I, null, {
                                              default: A(() => [R(x, {
                                                span: "8"
                                              }, {
                                                default: A(() => [e("div", Vm, t(D.issueNumber), 1)]),
                                                _: 2
                                              }, 1024), R(x, {
                                                span: "16"
                                              }, {
                                                default: A(() => [e("div", Hm, [e("canvas", {
                                                  canvas: "",
                                                  id: "myCanvas" + D.rowId,
                                                  ref_for: !0,
                                                  ref: "canvas",
                                                  class: "line-canvas"
                                                }, null, 8, Um), (n(),
                                                  a(B, null, G(10, X => e("div", {
                                                    class: P(["Trend__C-body2-Num-item", {
                                                      action: Number(D.number) == X - 1
                                                    }]),
                                                    key: X
                                                  }, t(X - 1), 3)), 64)), e("div", {
                                                    class: P(["Trend__C-body2-Num-BS", {
                                                      isB: Number(D.number) > 4
                                                    }])
                                                  }, t(Number(D.number) > 4 ? "H" : "L"), 3), e("div", {
                                                    class: P(["Trend__C-body2-Num-OE", {
                                                      isE: Number(D.number) % 2
                                                    }])
                                                  }, t(Number(D.number) % 2 ? "O" : "E"), 3)])]),
                                                _: 2
                                              }, 1024)]),
                                              _: 2
                                            }, 1024)], 8, jm))), 128)) : (n(),
                                              a("div", Km, [R(ut)]))]), _.value.length ? (n(),
                                                a("div", Xm, [e("div", {
                                                  class: P(["Trend__C-foot-previous", {
                                                    disabled: T.value <= 1
                                                  }]),
                                                  onClick: w
                                                }, [R(O, {
                                                  name: "arrow-left",
                                                  class: "Trend__C-icon",
                                                  size: "20"
                                                })], 2), e("div", Qm, t(T.value) + "/" + t($.value), 1), e("div", {
                                                  class: P(["Trend__C-foot-next", {
                                                    disabled: T.value >= $.value
                                                  }]),
                                                  onClick: m
                                                }, [R(O, {
                                                  name: "arrow",
                                                  class: "Trend__C-icon",
                                                  size: "20"
                                                })], 2)])) : M("", !0)])
        }
    }
  });
const Zm = K(Ym, [["__scopeId", "data-v-7178dc33"]])
  , Jm = {
    class: "MyGameRecordList__C"
  }
  , e1 = ["onClick"]
  , t1 = {
    class: "MyGameRecordList__C-item-m"
  }
  , s1 = {
    class: "MyGameRecordList__C-item-m-top"
  }
  , n1 = {
    class: "MyGameRecordList__C-item-m-bottom"
  }
  , a1 = {
    key: 0,
    class: "MyGameRecordList__C-detail"
  }
  , o1 = {
    class: "MyGameRecordList__C-detail-text"
  }
  , l1 = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
  }
  , i1 = ["onClick"]
  , c1 = ["src"]
  , u1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , r1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , d1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , _1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , v1 = {
    class: "red"
  }
  , p1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , m1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , h1 = {
    key: 0,
    class: "numList"
  }
  , f1 = {
    key: 1
  }
  , g1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , y1 = {
    class: "line1"
  }
  , b1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , $1 = {
    key: 1
  }
  , k1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , T1 = {
    key: 1
  }
  , w1 = {
    class: "MyGameRecordList__C-detail-line"
  }
  , C1 = U({
    __name: "MayrecordList",
    props: {
      mayrecord: {}
    },
    setup(c) {
      const { t: s } = ye()
        , l = g(-1)
        , i = d => ["", "A", "B", "C", "D", "E"][d]
        , _ = d => {
          switch (d) {
            case "L":
              return s("k3Small");
            case "O":
              return s("k3Odd");
            case "E":
              return s("k3Even");
            case "H":
              return s("k3Big");
            default:
              return d
          }
        }
        , p = d => {
          l.value == d ? l.value = -1 : l.value = d
        }
        , r = d => {
          switch (d) {
            case "E":
              return "Even";
            case "O":
              return "Odd";
            case "H":
              return "Big";
            case "L":
              return "Small";
            default:
              return d
          }
        }
        ;
      return (d, v) => (n(),
        a("div", Jm, [(n(!0),
          a(B, null, G(d.mayrecord, (o, h) => (n(),
            a(B, {
              key: h
            }, [e("div", {
              class: "MyGameRecordList__C-item",
              onClick: _t(y => p(h), ["stop", "prevent"])
            }, [e("div", {
              class: P(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + o.selectType]])
            }, t(r(o.selectType)), 3), e("div", t1, [e("div", s1, t(o.issueNumber), 1), e("div", n1, t(o.addTime), 1)]), o.profitAmount ? (n(),
              a("div", {
                key: 0,
                class: P(["MyGameRecordList__C-item-r", {
                  success: o.state
                }])
              }, [o.profitAmount ? (n(),
                a("div", {
                  key: 0,
                  class: P({
                    success: o.state
                  })
                }, t(o.state ? d.$t("success") : d.$t("fail")), 3)) : M("", !0), e("span", null, t(`${o.state ? "+" : "-"}${u(Re)(o.profitAmount)}`), 1)], 2)) : M("", !0)], 8, e1), h == l.value ? (n(),
                  a("div", a1, [e("div", o1, t(d.$t("detailMay")), 1), o.orderNumber ? (n(),
                    a("div", l1, [W(t(d.$t("orderNoMay")) + " ", 1), e("div", {
                      onClick: y => u(Vt)(o.orderNumber)
                    }, [W(t(o.orderNumber) + " ", 1), e("img", {
                      src: u(re)("home/AllLotteryGames/WinGo", "copy")
                    }, null, 8, c1)], 8, i1)])) : M("", !0), e("div", u1, [W(t(d.$t("issueMay")) + " ", 1), e("div", null, t(o.issueNumber), 1)]), e("div", r1, [W(t(d.$t("amountMay")) + " ", 1), e("div", null, t(u(Re)(o.amount)), 1)]), e("div", d1, [W(t(d.$t("numMay")) + " ", 1), e("div", null, t(o.betCount), 1)]), e("div", _1, [W(t(d.$t("afterTaxAmount")) + " ", 1), e("div", v1, t(u(Re)(o.realAmount)), 1)]), e("div", p1, [W(t(d.$t("tax")) + " ", 1), e("div", null, t(u(Re)(o.fee)), 1)]), e("div", m1, [W(t(d.$t("resultMay")) + " ", 1), o.premium ? (n(),
                      a("div", h1, [(n(!0),
                        a(B, null, G(o.premium, (y, T) => (n(),
                          a("div", {
                            key: T
                          }, t(y), 1))), 128))])) : (n(),
                            a("div", f1, "--"))]), e("div", g1, [W(t(d.$t("selectMay")) + " ", 1), e("div", y1, [e("div", null, t(i(o.gameType)), 1), (n(!0),
                              a(B, null, G(o.selectType.split("|"), (y, T) => (n(),
                                a("div", {
                                  class: "num",
                                  key: T
                                }, t(_(y)), 1))), 128))])]), e("div", b1, [W(t(d.$t("statusMay")) + " ", 1), o.state != 2 ? (n(),
                                  a("div", {
                                    key: 0,
                                    class: P([o.state ? "green" : "red"])
                                  }, t(o.state ? d.$t("success") : d.$t("fail")), 3)) : (n(),
                                    a("div", $1, t(d.$t("unsettled")), 1))]), e("div", k1, [W(t(d.$t("winOrLose")) + " ", 1), o.state != 2 ? (n(),
                                      a("div", {
                                        key: 0,
                                        class: P([o.state ? "green" : "red"])
                                      }, t(`${o.state ? "+" : "-"} ${u(Re)(o.profitAmount)}`), 3)) : (n(),
                                        a("div", T1, "--"))]), e("div", w1, [W(t(d.$t("createTime")) + " ", 1), e("div", null, t(o.addTime), 1)])])) : M("", !0)], 64))), 128))]))
    }
  });
const Ba = K(C1, [["__scopeId", "data-v-b4b99df8"]])
  , N1 = {
    class: "MyGameRecord__C"
  }
  , L1 = {
    key: 0,
    class: "MyGameRecord__C-head"
  }
  , I1 = {
    class: "MyGameRecord__C-body"
  }
  , R1 = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
  }
  , x1 = {
    key: 1,
    class: "MyGameRecord__C-foot"
  }
  , S1 = {
    class: "MyGameRecord__C-foot-page"
  }
  , B1 = U({
    __name: "MyGameRecord",
    props: {
      typeid: {},
      goPathName: {},
      hasHead: {
        type: Boolean,
        default: !0
      }
    },
    setup(c, { expose: s }) {
      const l = c
        , i = $e()
        , _ = g(4)
        , p = g(20)
        , r = g(1)
        , d = g([])
        , v = T => {
          i.push({
            name: T
          })
        }
        , o = () => {
          r.value--,
            y()
        }
        , h = () => {
          r.value++,
            y()
        }
        , y = async (T = !1) => {
          if (l.typeid == null)
            return;
          T && (r.value = 1);
          const $ = await ae(va({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }));
          d.value = ($ == null ? void 0 : $.data.list) || [],
            _.value = ($ == null ? void 0 : $.data.totalPage) || 0
        }
        ;
      return s({
        getData: y
      }),
        wt(() => {
          y()
        }
        ),
        (T, $) => {
          const b = V("van-icon");
          return n(),
            a("div", N1, [T.hasHead ? (n(),
              a("div", L1, [e("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: $[0] || ($[0] = f => v(T.goPathName))
              }, t(T.$t("more")), 1)])) : M("", !0), e("div", I1, [d.value.length ? (n(),
                se(Ba, {
                  key: 0,
                  mayrecord: d.value
                }, null, 8, ["mayrecord"])) : (n(),
                  a("div", R1, [R(ut)]))]), d.value.length ? (n(),
                    a("div", x1, [e("div", {
                      class: P(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: o
                    }, [R(b, {
                      name: "arrow-left",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", S1, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: h
                    }, [R(b, {
                      name: "arrow",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const Ma = K(B1, [["__scopeId", "data-v-94c68861"]])
  , M1 = c => (De("data-v-ad4ed0a8"),
    c = c(),
    Ae(),
    c)
  , P1 = {
    class: "FDP__C"
  }
  , G1 = {
    class: "FDP__C-text"
  }
  , D1 = {
    class: "FDP__C-list"
  }
  , A1 = {
    class: "num"
  }
  , O1 = {
    class: "letter"
  }
  , z1 = M1(() => e("div", {
    class: "FDP__C-symbol"
  }, "=", -1))
  , q1 = {
    class: "FDP__C-sum"
  }
  , W1 = U({
    __name: "premium",
    props: {
      sumCount: {
        type: Number,
        default: 0
      },
      premium: {
        type: String,
        default: "00000"
      }
    },
    setup(c) {
      const s = c
        , l = ee(() => [...s.premium])
        , i = g(["A", "B", "C", "D", "E"]);
      return (_, p) => (n(),
        a("div", P1, [e("div", G1, t(_.$t("betResult")), 1), e("div", D1, [(n(!0),
          a(B, null, G(l.value, (r, d) => (n(),
            a("div", {
              key: d
            }, [e("div", A1, t(r), 1), e("div", O1, t(i.value[d]), 1)]))), 128))]), z1, e("div", q1, t(c.sumCount), 1)]))
    }
  });
const E1 = K(W1, [["__scopeId", "data-v-ad4ed0a8"]])
  , F1 = c => (De("data-v-7102728b"),
    c = c(),
    Ae(),
    c)
  , j1 = {
    key: 1,
    class: "WinningTip__C-body-l1"
  }
  , V1 = {
    class: "WinningTip__C-body-l2"
  }
  , H1 = {
    class: "line1"
  }
  , U1 = {
    class: "title"
  }
  , K1 = {
    class: "num"
  }
  , X1 = F1(() => e("div", {
    class: "title sum"
  }, "SUM", -1))
  , Q1 = {
    class: "num"
  }
  , Y1 = {
    class: "WinningTip__C-body-l3"
  }
  , Z1 = {
    key: 0,
    class: "isLose"
  }
  , J1 = {
    class: "head"
  }
  , eh = {
    class: "bonus"
  }
  , th = {
    class: "gameDetail"
  }
  , sh = {
    class: "WinningTip__C-body-l4"
  }
  , nh = ["onClick"]
  , ah = U({
    __name: "WinningTips",
    setup(c, { expose: s }) {
      const l = ee(() => p.value[0] ? p.value[0].state == 0 : !1)
        , i = ee(() => p.value[0] || {})
        , _ = g(!1)
        , p = g([])
        , r = g(["A", "B", "C", "D", "E", "SUM"]);
      let d = g();
      const v = () => {
        clearTimeout(d.value),
          p.value.shift(),
          _.value && p.value.length && (d.value = setTimeout(() => {
            v()
          }
            , 1e3 * 3))
      }
        , o = () => {
          _.value = !_.value,
            _.value ? d.value = setTimeout(() => {
              v()
            }
              , 1e3 * 3) : clearTimeout(d.value)
        }
        , h = T => {
          T.list = T.premium.split(""),
            T.sum = T.sumCount,
            p.value.push(T),
            _.value && (d.value = setTimeout(() => {
              v()
            }
              , 1e3 * 3))
        }
        , y = () => {
          p.value = []
        }
        ;
      return s({
        showMark: h
      }),
        (T, $) => be((n(),
          a("div", {
            class: "WinningTip__C",
            onClick: v
          }, [e("div", {
            class: P(["WinningTip__C-body", {
              isL: l.value
            }])
          }, [l.value ? (n(),
            a("div", {
              key: 0,
              class: P(["WinningTip__C-body-l1", {
                isL: l.value
              }])
            }, t(T.$t("k3WarningTip1")), 3)) : (n(),
              a("div", j1, t(T.$t("k3WarningTip2")), 1)), e("div", V1, [W(t(T.$t("betResult")) + " ", 1), e("div", H1, [(n(!0),
                a(B, null, G(i.value.list, (b, f) => (n(),
                  a("div", {
                    key: f
                  }, [e("div", U1, t(r.value[f]), 1), e("div", K1, t(b), 1)]))), 128)), e("div", null, [X1, e("div", Q1, t(i.value.sum), 1)])])]), e("div", Y1, [l.value ? (n(),
                    a("div", Z1, t(T.$t("k3WarningTip3")), 1)) : (n(),
                      a(B, {
                        key: 1
                      }, [e("div", J1, t(T.$t("k3WarningTip4")), 1), e("div", eh, t(u(Re)(Number(i.value.winAmount))), 1)], 64)), e("div", th, t(T.$t("k3WarningTip5")) + t(i.value.typeName) + " " + t(i.value.issueNumber), 1)]), e("div", sh, [e("div", {
                        class: P(["acitveBtn", {
                          active: _.value
                        }]),
                        onClick: _t(o, ["stop"])
                      }, null, 10, nh), W(" " + t(T.$t("autoShutOff3s")), 1)]), e("div", {
                        class: "closeBtn",
                        onClick: y
                      })], 2)], 512)), [[et, p.value.length]])
    }
  });
const oh = K(ah, [["__scopeId", "data-v-7102728b"]])
  , lh = "/assets/mp3/di1-0f3d86cb.mp3"
  , ih = "/assets/mp3/di2-ad9aa8fb.mp3"
  , ch = ["muted"]
  , uh = e("source", {
    src: lh,
    type: "audio/mpeg"
  }, null, -1)
  , rh = [uh]
  , dh = ["muted"]
  , _h = e("source", {
    src: ih,
    type: "audio/mpeg"
  }, null, -1)
  , vh = [_h]
  , Ps = U({
    __name: "audio",
    setup(c) {
      const s = g(!1);
      Ge(() => gt().visibility, i => {
        i === 0 ? s.value = !0 : setTimeout(() => {
          s.value = !1
        }
          , 500)
      }
      );
      const l = () => {
        s.value = !0,
          Xe(() => {
            const i = document.getElementById("voice1")
              , _ = document.getElementById("voice2");
            i.play(),
              _.play(),
              i.pause(),
              _.pause(),
              s.value = !1,
              document.removeEventListener("touchstart", l)
          }
          )
      }
        ;
      return Pe(() => {
        document.addEventListener("touchstart", l)
      }
      ),
        (i, _) => (n(),
          a(B, null, [e("audio", {
            id: "voice1",
            muted: s.value
          }, rh, 8, ch), e("audio", {
            id: "voice2",
            muted: s.value
          }, vh, 8, dh)], 64))
    }
  })
  , ph = {
    class: "FD__C"
  }
  , mh = {
    class: "FD__C-head-more"
  }
  , hh = U({
    __name: "index",
    setup(c) {
      const s = {
        GameRecord: Im,
        Trend: Zm,
        MyGameRecord: Ma
      }
        , l = g()
        , i = g()
        , _ = g()
        , p = g()
        , r = g(!1)
        , d = g("GameRecord")
        , v = $e()
        , o = Kt()
        , h = o.get5D
        , y = g(0)
        , T = g(localStorage.getItem("volumeShow") || "1")
        , $ = g(!1)
        , b = g(null)
        , f = g({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
        , k = g(5)
        , w = g("")
        , m = g(!1)
        , C = g(null)
        , N = g("00000")
        , S = g(0)
        , L = ee(() => h[y.value] || {})
        , x = Zt()
        , I = ee(() => x.getIsShowLotteryDragon);
      Pe(() => {
        X()
      }
      ),
        Ut(() => {
          clearInterval(b.value),
            ke.value.forEach(ne => {
              clearInterval(ne)
            }
            ),
            Me.value && clearTimeout(Me.value)
        }
        ),
        Ge(() => gt().visibility, ne => {
          ne === 0 ? clearInterval(b.value) : (X(),
            de(y.value))
        }
        );
      const O = () => {
        sessionStorage.setItem("clickedGameType", "lottery"),
          v.push({
            path: "/"
          })
      }
        , D = () => {
          T.value == "1" ? T.value = "2" : T.value = "1",
            localStorage.setItem("volumeShow", T.value)
        }
        , j = ne => {
          v.push({
            name: ne
          })
        }
        , X = () => {
          C.value == null && de(0)
        }
        , ce = async (ne, oe = !1) => {
          const [Y, Z] = await Ze(nl({
            typeId: ne
          }));
          N.value = Z.premium,
            S.value = Z.sumCount,
            oe && p.value.animationShow()
        }
        , de = ne => {
          o.get5DData(),
            y.value = ne,
            C.value = h[ne].typeID,
            le(C.value),
            Xe(() => {
              l.value.getData(C.value)
            }
            )
        }
        , le = async (ne, oe = !1) => {
          ce(ne, oe);
          const [Y, Z] = await Ze(sl({
            typeId: ne
          }));
          f.value.gameNo = Z.issueNumber,
            f.value.currentTime = Z.serviceTime.replace(/-/g, "/"),
            f.value.beginTime = Z.startTime.replace(/-/g, "/"),
            J()
        }
        , J = () => {
          if (!h.length)
            return;
          var ne = new Date(f.value.currentTime).getTime()
            , oe = new Date(f.value.beginTime).getTime();
          let Y = (ne - oe) / 1e3
            , Z = h[y.value];
          if (Y > Z.intervalM * 60 && (Y = Z.intervalM * 60),
            f.value.passTime = Z.intervalM * 60 - Y,
            f.value.passTime < 0) {
            w.value = "An error occurred, please contact customer service。The game time is " + Z.intervalM + " minutes,start time is " + f.value.beginTime + ",current time is" + f.value.currentTime + "!",
              $.value = !0;
            return
          }
          Q()
        }
        , Q = () => {
          clearInterval(b.value),
            _e(!1),
            b.value = setInterval(function () {
              _e()
            }, 1e3)
        }
        , _e = (ne = !0) => {
          if (f.value.passTime <= k.value && (m.value = !1),
            T.value == "1" && (f.value.passTime <= k.value && f.value.passTime > 1 ? Se(1) : f.value.passTime == 1 && Se(2)),
            f.value.passTime > 0) {
            let oe = f.value.passTime;
            f.value.time2 = Math.floor(oe / 60),
              f.value.time3 = Math.floor(oe % 60 / 10),
              f.value.time4 = Math.floor(oe % 10),
              f.value.passTime--
          } else
            clearInterval(b.value),
              ne && Oe()
        }
        , Se = (ne = 1) => {
          const oe = document.getElementById(`voice${ne}`);
          oe && (oe.currentTime = 0,
            oe.play())
        }
        , Oe = () => {
          le(C.value, !0),
            _.value.getWinsUserAmount(!1),
            l.value.getData(!0)
        }
        , ve = g({})
        , ke = g([])
        , Te = ne => {
          if (_.value.getWinsUserAmount(!1),
            l.value.getData(),
            ve.value[ne])
            return;
          ve.value[ne] = !0;
          const { time1: oe, time2: Y, time3: Z, time4: F } = f.value
            , we = (oe * 10 * 60 + Y * 60 + Z * 10 + F) * 1e3;
          ke.value[L.value.intervalM] = setTimeout(() => {
            me(ne)
          }
            , we)
        }
        , Be = ne => {
          r.value = ne
        }
        , Me = g(null)
        , me = async ne => {
          const [oe, Y] = await Ze(al({
            issueNumber: ne
          }));
          if (Y.data)
            if (Y.data.state != 2)
              i.value.showMark(Y.data),
                delete ve.value[ne];
            else {
              Me.value = setTimeout(() => {
                me(ne)
              }
                , 2e3);
              return
            }
        }
        ;
      return (ne, oe) => {
        const Y = V("NavBar");
        return n(),
          a("div", ph, [R(Y, {
            "left-arrow": "",
            onClickLeft: O,
            "background-color": "linear-gradient(90deg, #DE2325 0%, #FF504A 100%)",
            headLogo: !0
          }, {
            right: A(() => [e("div", mh, [e("div", {
              onClick: oe[0] || (oe[0] = Z => j("CustomerService"))
            }), e("div", {
              class: P({
                disableVoice: T.value == "2"
              }),
              onClick: D
            }, null, 2)])]),
            _: 1
          }), R(xs, {
            ref_key: "WallteRef",
            ref: _
          }, null, 512), R(ys, {
            key: "5d"
          }), R(Ss, {
            gameList: u(h),
            currentGameIndex: y.value,
            onChangeGame: de
          }, null, 8, ["gameList", "currentGameIndex"]), R(E1, {
            premium: N.value,
            sumCount: S.value
          }, null, 8, ["premium", "sumCount"]), R(Gp, {
            ref_key: "tiemLeftRef",
            ref: p,
            currentInfo: f.value,
            premium: N.value,
            currentGame: L.value
          }, null, 8, ["currentInfo", "premium", "currentGame"]), R(pm, {
            currentInfo: f.value,
            currentGame: L.value,
            VoiceType: T.value,
            typeid: C.value,
            onBetting: Te,
            onChangeBettingP: Be
          }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), R(Ms, {
            record: d.value,
            onChangeC: oe[1] || (oe[1] = Z => d.value = Z)
          }, null, 8, ["record"]), (n(),
            se(Ht, null, [(n(),
              se(ft(s[d.value]), {
                ref_key: "RecordComponent",
                ref: l,
                typeid: C.value,
                EmerdApi: u(pa),
                goPathName: "AllLotteryGames-BettingRecord5D"
              }, null, 8, ["typeid", "EmerdApi"]))], 1024)), R(xt, {
                show: $.value,
                onConfirm: oe[2] || (oe[2] = Z => j("/login"))
              }, {
                content: A(() => [e("div", null, t(w.value), 1)]),
                _: 1
              }, 8, ["show"]), R(oh, {
                ref_key: "WinningTipsRef",
                ref: i
              }, null, 512), I.value ? (n(),
                se(Rs, {
                  key: 0
                })) : M("", !0), R(Ps)])
      }
    }
  });
const fh = K(hh, [["__scopeId", "data-v-eb7ccf12"]])
  , t7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: fh
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , gh = {
    class: "BettingRecord5D__C"
  }
  , yh = {
    class: "BettingRecord5D__C-nav"
  }
  , bh = {
    class: "BettingRecord5D__C-list"
  }
  , $h = {
    key: 0,
    class: "BettingRecord5D__C-foot"
  }
  , kh = {
    class: "BettingRecord5D__C-foot-page"
  }
  , Th = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = g(Mu)
        , i = g([])
        , _ = g(0)
        , p = g(1)
        , r = g(4)
        , d = b => {
          v.value = b.name,
            p.value = 1,
            o()
        }
        , v = g(0)
        , o = async () => {
          const b = await ae(va({
            pageSize: 20,
            pageNo: p.value,
            typeId: v.value
          }));
          i.value = (b == null ? void 0 : b.data.list) || [],
            r.value = (b == null ? void 0 : b.data.totalPage) || 0
        }
        , h = () => {
          v.value = l.value[0].typeID,
            o()
        }
        ;
      function y() {
        s.go(-1)
      }
      const T = () => {
        p.value--,
          o()
      }
        , $ = () => {
          p.value++,
            o()
        }
        ;
      return Pe(() => {
        h()
      }
      ),
        (b, f) => {
          const k = V("van-tab")
            , w = V("van-tabs")
            , m = V("van-icon");
          return n(),
            a("div", gh, [e("div", {
              class: "BettingRecord5D__C-head"
            }, [e("div", {
              class: "BettingRecord5D__C-head-bcak",
              onClick: y
            }), W(" 5D Lotre ")]), e("div", yh, [R(w, {
              active: _.value,
              "onUpdate:active": f[0] || (f[0] = C => _.value = C),
              onClickTab: d
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(l.value, (C, N) => (n(),
                  se(k, {
                    key: N,
                    title: C.tabName,
                    name: C.typeID
                  }, null, 8, ["title", "name"]))), 128))]),
              _: 1
            }, 8, ["active"])]), e("div", bh, [R(Ba, {
              mayrecord: i.value
            }, null, 8, ["mayrecord"])]), i.value.length ? (n(),
              a("div", $h, [e("div", {
                class: P(["BettingRecord5D__C-foot-previous", {
                  disabled: p.value <= 1
                }]),
                onClick: T
              }, [R(m, {
                name: "arrow-left",
                class: "BettingRecord5D__C-icon",
                size: "20"
              })], 2), e("div", kh, t(p.value) + "/" + t(r.value), 1), e("div", {
                class: P(["BettingRecord5D__C-foot-next", {
                  disabled: p.value >= r.value
                }]),
                onClick: $
              }, [R(m, {
                name: "arrow",
                class: "BettingRecord5D__C-icon",
                size: "20"
              })], 2)])) : M("", !0)])
        }
    }
  });
const wh = K(Th, [["__scopeId", "data-v-2ba4fb52"]])
  , s7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: wh
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Ch = {
    class: "MyGameRecordList__C"
  }
  , Nh = ["onClick"]
  , Lh = {
    class: "MyGameRecordList__C-item-m"
  }
  , Ih = {
    class: "MyGameRecordList__C-item-m-top"
  }
  , Rh = {
    class: "MyGameRecordList__C-item-m-bottom"
  }
  , xh = {
    key: 0,
    class: "MyGameRecordList__C-detail"
  }
  , Sh = {
    class: "MyGameRecordList__C-detail-text"
  }
  , Bh = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
  }
  , Mh = ["onClick"]
  , Ph = ["src"]
  , Gh = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Dh = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Ah = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Oh = {
    class: "MyGameRecordList__C-detail-line"
  }
  , zh = {
    class: "red"
  }
  , qh = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Wh = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Eh = {
    key: 0,
    class: "numList"
  }
  , Fh = {
    key: 1
  }
  , jh = {
    class: "MyGameRecordList__C-detail-line noLine"
  }
  , Vh = {
    key: 0,
    class: "line1"
  }
  , Hh = {
    key: 1,
    class: "line1"
  }
  , Uh = {
    class: ""
  }
  , Kh = {
    class: ""
  }
  , Xh = {
    key: 2,
    class: "line1"
  }
  , Qh = {
    class: ""
  }
  , Yh = {
    key: 1,
    class: "btn actionBtn"
  }
  , Zh = {
    key: 3,
    class: "line1"
  }
  , Jh = {
    class: ""
  }
  , ef = {
    key: 1,
    class: "actionBtn"
  }
  , tf = {
    class: ""
  }
  , sf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , nf = {
    key: 1
  }
  , af = {
    class: "MyGameRecordList__C-detail-line"
  }
  , of = {
    key: 1
  }
  , lf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , cf = U({
    __name: "MayrecordList",
    props: {
      mayrecord: {}
    },
    setup(c) {
      const { t: s } = ye()
        , l = g(-1)
        , i = d => {
          switch (d) {
            case "H":
              return s("k3Big");
            case "L":
              return s("k3Small");
            case "O":
              return s("k3Odd");
            case "E":
              return s("k3Even");
            default:
              return d
          }
        }
        , _ = d => {
          l.value == d ? l.value = -1 : l.value = d
        }
        , p = d => {
          var v, o;
          if (d.gameType == "3") {
            if (d.selectType == "|AAA|")
              return "3=";
            if (d.oneList.length)
              return d.oneList[0]
          }
          if (d.gameType == "4")
            return d.selectType == "|ABC|" ? "3≠" : d.threeList.length ? `${d.threeList.join("")}` : `${d.oneList.join("")}`;
          if ((v = d.towList) != null && v.length)
            return d.towList[0];
          if ((o = d.oneList) != null && o.length)
            switch (d.oneList[0]) {
              case "H":
                return "Big";
              case "L":
                return "Small";
              case "O":
                return "Odd";
              case "E":
                return "Even";
              default:
                return d.oneList[0]
            }
        }
        , r = d => {
          var v, o;
          if ((v = d.towList) != null && v.length)
            return "num";
          if ((o = d.oneList) != null && o.length)
            return d.oneList[0].length > 2 ? "num" : d.oneList[0]
        }
        ;
      return (d, v) => (n(),
        a("div", Ch, [(n(!0),
          a(B, null, G(d.mayrecord, (o, h) => (n(),
            a(B, {
              key: h
            }, [e("div", {
              class: "MyGameRecordList__C-item",
              onClick: _t(y => _(h), ["stop", "prevent"])
            }, [e("div", {
              class: P(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + r(o)]])
            }, t(p(o)), 3), e("div", Lh, [e("div", Ih, t(o.issueNumber), 1), e("div", Rh, t(o.addTime), 1)]), o.profitAmount ? (n(),
              a("div", {
                key: 0,
                class: P(["MyGameRecordList__C-item-r", {
                  success: o.state
                }])
              }, [o.profitAmount ? (n(),
                a("div", {
                  key: 0,
                  class: P({
                    success: o.state
                  })
                }, t(o.state ? d.$t("success") : d.$t("fail")), 3)) : M("", !0), e("span", null, t(`${o.state ? "+" : "-"}${u(Re)(o.profitAmount)}`), 1)], 2)) : M("", !0)], 8, Nh), h == l.value ? (n(),
                  a("div", xh, [e("div", Sh, t(d.$t("detailMay")), 1), o.orderNumber ? (n(),
                    a("div", Bh, [W(t(d.$t("orderNoMay")) + " ", 1), e("div", {
                      onClick: y => u(Vt)(o.orderNumber)
                    }, [W(t(o.orderNumber) + " ", 1), e("img", {
                      src: u(re)("home/AllLotteryGames/WinGo", "copy")
                    }, null, 8, Ph)], 8, Mh)])) : M("", !0), e("div", Gh, [W(t(d.$t("issueMay")) + " ", 1), e("div", null, t(o.issueNumber), 1)]), e("div", Dh, [W(t(d.$t("amountMay")) + " ", 1), e("div", null, t(u(Re)(o.amount)), 1)]), e("div", Ah, [W(t(d.$t("numMay")) + " ", 1), e("div", null, t(o.betCount), 1)]), e("div", Oh, [W(t(d.$t("afterTaxAmount")) + " ", 1), e("div", zh, t(u(Re)(o.realAmount)), 1)]), e("div", qh, [W(t(d.$t("tax")) + " ", 1), e("div", null, t(u(Re)(o.fee)), 1)]), e("div", Wh, [W(t(d.$t("resultMay")) + " ", 1), o.premium ? (n(),
                      a("div", Eh, [(n(!0),
                        a(B, null, G(o.premium, (y, T) => (n(),
                          a("div", {
                            key: T,
                            class: P(["n" + y])
                          }, null, 2))), 128))])) : (n(),
                            a("div", Fh, "--"))]), e("div", jh, [W(t(d.$t("selectMay")) + " ", 1), o.gameType == 1 ? (n(),
                              a("div", Vh, [o.oneList.length > 0 ? (n(),
                                a(B, {
                                  key: 0
                                }, [e("span", null, t(d.$t("k3RecordDesc1")), 1), (n(!0),
                                  a(B, null, G(o.oneList, (y, T) => (n(),
                                    a("span", {
                                      key: T + "1",
                                      class: "btn"
                                    }, t(i(y)), 1))), 128))], 64)) : M("", !0)])) : M("", !0), o.gameType == 2 ? (n(),
                                      a("div", Hh, [o.oneList.length > 0 ? (n(),
                                        a(B, {
                                          key: 0
                                        }, [e("span", Uh, t(d.$t("k3RecordDesc2")), 1), (n(!0),
                                          a(B, null, G(o.oneList, (y, T) => (n(),
                                            a("span", {
                                              class: "btn actionViolet",
                                              key: T + "1"
                                            }, t(y), 1))), 128))], 64)) : M("", !0), o.towList.length > 0 ? (n(),
                                              a(B, {
                                                key: 1
                                              }, [e("span", Kh, t(d.$t("k3RecordDesc3")), 1), (n(!0),
                                                a(B, null, G(o.towList, (y, T) => (n(),
                                                  a("span", {
                                                    class: "btn actionRedGreen",
                                                    key: T + "1"
                                                  }, t(y), 1))), 128))], 64)) : M("", !0)])) : M("", !0), o.gameType == 3 ? (n(),
                                                    a("div", Xh, [o.oneList.length > 0 ? (n(),
                                                      a(B, {
                                                        key: 0
                                                      }, [e("span", Qh, t(d.$t("k3RecordDesc4")), 1), (n(!0),
                                                        a(B, null, G(o.oneList, (y, T) => (n(),
                                                          a("span", {
                                                            class: "btn actionViolet",
                                                            key: T + "1"
                                                          }, t(y), 1))), 128))], 64)) : M("", !0), o.towList ? (n(),
                                                            a("div", Yh, t(d.$t("k3RecordDesc5")), 1)) : M("", !0)])) : M("", !0), o.gameType == 4 ? (n(),
                                                              a("div", Zh, [o.oneList.length > 0 ? (n(),
                                                                a(B, {
                                                                  key: 0
                                                                }, [e("span", Jh, t(d.$t("k3RecordDesc6")), 1), (n(!0),
                                                                  a(B, null, G(o.oneList, (y, T) => (n(),
                                                                    a("span", {
                                                                      class: "actionViolet",
                                                                      key: T + "1"
                                                                    }, t(y), 1))), 128))], 64)) : M("", !0), o.towList ? (n(),
                                                                      a("div", ef, t(d.$t("k3RecordDesc7")), 1)) : M("", !0), o.threeList.length > 0 ? (n(),
                                                                        a(B, {
                                                                          key: 2
                                                                        }, [e("span", tf, t(d.$t("k3RecordDesc8")), 1), (n(!0),
                                                                          a(B, null, G(o.threeList, (y, T) => (n(),
                                                                            a("span", {
                                                                              class: "actionViolet",
                                                                              key: T + "1"
                                                                            }, t(y), 1))), 128))], 64)) : M("", !0)])) : M("", !0)]), e("div", sf, [W(t(d.$t("statusMay")) + " ", 1), o.state != 2 ? (n(),
                                                                              a("div", {
                                                                                key: 0,
                                                                                class: P([o.state ? "green" : "red"])
                                                                              }, t(o.state ? d.$t("success") : d.$t("fail")), 3)) : (n(),
                                                                                a("div", nf, t(d.$t("k3RecordDesc9")), 1))]), e("div", af, [W(t(d.$t("winOrLose")) + " ", 1), o.state != 2 ? (n(),
                                                                                  a("div", {
                                                                                    key: 0,
                                                                                    class: P([o.state ? "green" : "red"])
                                                                                  }, t(`${o.state ? "+" : "-"} ${u(Re)(o.profitAmount)}`), 3)) : (n(),
                                                                                    a("div", of, "--"))]), e("div", lf, [W(t(d.$t("createTime")) + " ", 1), e("div", null, t(o.addTime), 1)])])) : M("", !0)], 64))), 128))]))
    }
  });
const Pa = K(cf, [["__scopeId", "data-v-65f84609"]])
  , uf = {
    class: "BettingRecordK3__C"
  }
  , rf = {
    class: "BettingRecordK3__C-nav"
  }
  , df = {
    class: "BettingRecordK3__C-list"
  }
  , _f = {
    key: 0,
    class: "BettingRecordK3__C-foot"
  }
  , vf = {
    class: "BettingRecordK3__C-foot-page"
  }
  , pf = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = g(Pu)
        , i = g([])
        , _ = g(0)
        , p = g(1)
        , r = g(4)
        , d = f => {
          v.value = f.name,
            p.value = 1,
            o()
        }
        , v = g(0)
        , o = async () => {
          const f = await ae(ma({
            pageSize: 20,
            pageNo: p.value,
            typeId: v.value
          }))
            , k = (f == null ? void 0 : f.data.list) || [];
          for (let w = 0; k.length > w; w++) {
            let m = k[w].gameType.split(",")
              , C = k[w].selectType.split(",");
            for (let N = 0; m.length > N; N++)
              if (m[N] == "1" || m[N] == "2" || m[N] == "3")
                k[w].gameType = "1",
                  k[w].oneList = C;
              else if (m[N] == "5" || m[N] == "6") {
                let S = []
                  , L = []
                  , x = [];
                for (let I = 0; C.length > I; I++) {
                  if (C[I] == "|11|" || C[I] == "|22|" || C[I] == "|33|" || C[I] == "|44|" || C[I] == "|55|" || C[I] == "|66|") {
                    let O = C[I].split("|");
                    O.pop(),
                      O.shift(),
                      S.push(O.join())
                  }
                  if (C[I] == ":11:" || C[I] == ":22:" || C[I] == ":33:" || C[I] == ":44:" || C[I] == ":55:" || C[I] == ":66:") {
                    let O = C[I].split(":");
                    O.pop(),
                      O.shift(),
                      L.push(O.join())
                  }
                  if (C[I] == ":1:" || C[I] == ":2:" || C[I] == ":3:" || C[I] == ":4:" || C[I] == ":5:" || C[I] == ":6:") {
                    let O = C[I].split(":");
                    O.pop(),
                      O.shift(),
                      x.push(O.join())
                  }
                }
                k[w].gameType = "2",
                  k[w].oneList = S,
                  k[w].towList = !!h(L, x)
              } else if (m[N] == "7" || m[N] == "8") {
                let S = []
                  , L = !1;
                for (let x = 0; C.length > x; x++) {
                  if (C[x] == "|111|" || C[x] == "|222|" || C[x] == "|333|" || C[x] == "|444|" || C[x] == "|555|" || C[x] == "|666|") {
                    let I = C[x].split("|");
                    I.pop(),
                      I.shift(),
                      S.push(I.join())
                  }
                  C[x] == "|AAA|" && (L = !0),
                    k[w].oneList = S,
                    k[w].towList = L,
                    k[w].gameType = "3"
                }
              } else if (m[N] == "9" || m[N] == "10" || m[N] == "4") {
                let S = []
                  , L = !1
                  , x = [];
                for (let I = 0; C.length > I; I++) {
                  if (C[I] == "|1|" || C[I] == "|2|" || C[I] == "|3|" || C[I] == "|4|" || C[I] == "|5|" || C[I] == "|6|") {
                    let O = C[I].split("|");
                    O.pop(),
                      O.shift(),
                      S.push(O.join())
                  }
                  if (C[I] == "|ABC|" && (L = !0),
                    C[I] == ".1." || C[I] == ".2." || C[I] == ".3." || C[I] == ".4." || C[I] == ".5." || C[I] == ".6.") {
                    let O = C[I].split(".");
                    O.pop(),
                      O.shift(),
                      x.push(O.join())
                  }
                }
                k[w].oneList = S,
                  k[w].towList = L,
                  k[w].threeList = x,
                  k[w].gameType = "4"
              }
          }
          i.value = k || [],
            r.value = (f == null ? void 0 : f.data.totalPage) || 0
        }
        , h = (f, k) => {
          let w = [];
          for (var m = 0; f.length > m; m++) {
            let N = f[m]
              , S = [];
            for (var C = 0; k.length > C; C++)
              S.push(k[C]);
            if (S.length > 0) {
              let L = S.sort().join(",");
              w.push(N + "|" + L)
            }
          }
          return w.sort()
        }
        , y = () => {
          v.value = l.value[0].typeID,
            o()
        }
        ;
      function T() {
        s.go(-1)
      }
      const $ = () => {
        p.value--,
          o()
      }
        , b = () => {
          p.value++,
            o()
        }
        ;
      return Pe(() => {
        y()
      }
      ),
        (f, k) => {
          const w = V("van-tab")
            , m = V("van-tabs")
            , C = V("van-icon");
          return n(),
            a("div", uf, [e("div", {
              class: "BettingRecordK3__C-head"
            }, [e("div", {
              class: "BettingRecordK3__C-head-bcak",
              onClick: T
            }), W(" K3 Lotre ")]), e("div", rf, [R(m, {
              active: _.value,
              "onUpdate:active": k[0] || (k[0] = N => _.value = N),
              onClickTab: d
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(l.value, (N, S) => (n(),
                  se(w, {
                    key: S,
                    title: N.tabName,
                    name: N.typeID
                  }, null, 8, ["title", "name"]))), 128))]),
              _: 1
            }, 8, ["active"])]), e("div", df, [R(Pa, {
              mayrecord: i.value
            }, null, 8, ["mayrecord"])]), i.value.length ? (n(),
              a("div", _f, [e("div", {
                class: P(["BettingRecordK3__C-foot-previous", {
                  disabled: p.value <= 1
                }]),
                onClick: $
              }, [R(C, {
                name: "arrow-left",
                class: "BettingRecordK3__C-icon",
                size: "20"
              })], 2), e("div", vf, t(p.value) + "/" + t(r.value), 1), e("div", {
                class: P(["BettingRecordK3__C-foot-next", {
                  disabled: p.value >= r.value
                }]),
                onClick: b
              }, [R(C, {
                name: "arrow",
                class: "BettingRecordK3__C-icon",
                size: "20"
              })], 2)])) : M("", !0)])
        }
    }
  });
const mf = K(pf, [["__scopeId", "data-v-34d9b8ed"]])
  , n7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mf
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , hf = {
    class: "MyGameRecordList__C"
  }
  , ff = ["onClick"]
  , gf = {
    class: "MyGameRecordList__C-item-m"
  }
  , yf = {
    class: "MyGameRecordList__C-item-m-top"
  }
  , bf = {
    class: "MyGameRecordList__C-item-m-bottom"
  }
  , $f = {
    key: 0,
    class: "MyGameRecordList__C-detail"
  }
  , kf = {
    class: "MyGameRecordList__C-detail-text"
  }
  , Tf = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
  }
  , wf = ["onClick"]
  , Cf = ["src"]
  , Nf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Lf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , If = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Rf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , xf = {
    class: "red"
  }
  , Sf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Bf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Mf = {
    key: 0
  }
  , Pf = {
    class: "MyGameRecordList__C-inlineB"
  }
  , Gf = {
    key: 0,
    class: "MyGameRecordList__C-inlineB purpleColor"
  }
  , Df = {
    key: 1
  }
  , Af = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Of = {
    class: "MyGameRecordList__C-detail-line"
  }
  , zf = {
    key: 1
  }
  , qf = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Wf = {
    key: 1
  }
  , Ef = {
    class: "MyGameRecordList__C-detail-line"
  }
  , Ff = U({
    __name: "MayrecordList",
    props: {
      mayrecord: {}
    },
    setup(c) {
      const { t: s } = ye()
        , l = g(-1)
        , i = v => {
          switch (v) {
            case "big":
              return "big";
            case "green":
            case "red":
            case "violet":
              return "";
            default:
              return v
          }
        }
        , _ = v => {
          switch (v % 2) {
            case 1:
              return s("greenColor");
            default:
              return s("redColor")
          }
        }
        , p = v => {
          switch (v % 2) {
            case 1:
              return "greenColor";
            default:
              return "redColor"
          }
        }
        , r = v => {
          switch (v) {
            case "small":
              return s("small");
            case "big":
              return s("big");
            case "green":
              return s("green");
            case "violet":
              return s("purpleColor");
            case "red":
              return s("redColor");
            default:
              return v
          }
        }
        , d = v => {
          l.value == v ? l.value = -1 : l.value = v
        }
        ;
      return (v, o) => (n(),
        a("div", hf, [(n(!0),
          a(B, null, G(v.mayrecord, (h, y) => (n(),
            a(B, {
              key: y
            }, [e("div", {
              class: "MyGameRecordList__C-item",
              onClick: _t(T => d(y), ["stop", "prevent"])
            }, [e("div", {
              class: P(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + h.selectType]])
            }, t(i(h.selectType)), 3), e("div", gf, [e("div", yf, t(h.issueNumber), 1), e("div", bf, t(h.addTime), 1)]), h.profitAmount ? (n(),
              a("div", {
                key: 0,
                class: P(["MyGameRecordList__C-item-r", {
                  success: h.state
                }])
              }, [h.profitAmount ? (n(),
                a("div", {
                  key: 0,
                  class: P({
                    success: h.state
                  })
                }, t(h.state ? v.$t("success") : v.$t("fail")), 3)) : M("", !0), e("span", null, t(`${h.state ? "+" : "-"}${u(Re)(h.profitAmount)}`), 1)], 2)) : M("", !0)], 8, ff), y == l.value ? (n(),
                  a("div", $f, [e("div", kf, t(v.$t("detailMay")), 1), h.orderNumber ? (n(),
                    a("div", Tf, [W(t(v.$t("orderNoMay")) + " ", 1), e("div", {
                      onClick: T => u(Vt)(h.orderNumber)
                    }, [W(t(h.orderNumber) + " ", 1), e("img", {
                      src: u(re)("home/AllLotteryGames/WinGo", "copy")
                    }, null, 8, Cf)], 8, wf)])) : M("", !0), e("div", Nf, [W(t(v.$t("issueMay")) + " ", 1), e("div", null, t(h.issueNumber), 1)]), e("div", Lf, [W(t(v.$t("amountMay")) + " ", 1), e("div", null, t(u(Re)(h.amount)), 1)]), e("div", If, [W(t(v.$t("numMay")) + " ", 1), e("div", null, t(h.betCount), 1)]), e("div", Rf, [W(t(v.$t("afterTaxAmount")) + " ", 1), e("div", xf, t(u(Re)(h.realAmount)), 1)]), e("div", Sf, [W(t(v.$t("tax")) + " ", 1), e("div", null, t(u(Re)(h.fee)), 1)]), e("div", Bf, [W(t(v.$t("resultMay")) + " ", 1), h.number ? (n(),
                      a("div", Mf, [e("div", Pf, t(h.number), 1), e("div", {
                        class: P(["MyGameRecordList__C-inlineB", [p(Number(h.number))]])
                      }, t(_(Number(h.number))), 3), h.number == 0 || h.number == 5 ? (n(),
                        a("div", Gf, t(v.$t("purpleColor")), 1)) : M("", !0), e("div", {
                          class: P(["MyGameRecordList__C-inlineB", [Number(h.number) > 4 ? "big" : "small"]])
                        }, t(Number(h.number) > 4 ? v.$t("big") : v.$t("small")), 3)])) : (n(),
                          a("div", Df, "--"))]), e("div", Af, [W(t(v.$t("selectMay")) + " ", 1), e("div", null, t(r(h.selectType)), 1)]), e("div", Of, [W(t(v.$t("statusMay")) + " ", 1), h.state != 2 ? (n(),
                            a("div", {
                              key: 0,
                              class: P([h.state ? "green" : "red"])
                            }, t(h.state ? v.$t("success") : v.$t("fail")), 3)) : (n(),
                              a("div", zf, t(v.$t("k3RecordDesc9")), 1))]), e("div", qf, [W(t(v.$t("winOrLose")) + " ", 1), h.state != 2 ? (n(),
                                a("div", {
                                  key: 0,
                                  class: P([h.state ? "green" : "red"])
                                }, t(`${h.state ? "+" : "-"} ${u(Re)(h.profitAmount)}`), 3)) : (n(),
                                  a("div", Wf, "--"))]), e("div", Ef, [W(t(v.$t("createTime")) + " ", 1), e("div", null, t(h.addTime), 1)])])) : M("", !0)], 64))), 128))]))
    }
  });
const vn = K(Ff, [["__scopeId", "data-v-373b3197"]])
  , jf = {
    class: "BettingRecordWin__C"
  }
  , Vf = {
    class: "BettingRecordWin__C-nav"
  }
  , Hf = {
    class: "BettingRecordWin__C-list"
  }
  , Uf = {
    key: 0,
    class: "BettingRecordWin__C-foot"
  }
  , Kf = {
    class: "BettingRecordWin__C-foot-page"
  }
  , Xf = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = g(Gu)
        , i = g([])
        , _ = g(0)
        , p = g(1)
        , r = g(4)
        , d = b => {
          v.value = b.name,
            p.value = 1,
            o()
        }
        , v = g(0)
        , o = async () => {
          const [b, f] = await Ze(un({
            pageSize: 20,
            pageNo: p.value,
            typeId: v.value
          }));
          i.value = f.list || [],
            r.value = f.totalPage
        }
        , h = () => {
          v.value = l.value[0].typeID,
            o()
        }
        ;
      function y() {
        s.go(-1)
      }
      const T = () => {
        p.value--,
          o()
      }
        , $ = () => {
          p.value++,
            o()
        }
        ;
      return Pe(() => {
        h()
      }
      ),
        (b, f) => {
          const k = V("van-tab")
            , w = V("van-tabs")
            , m = V("van-icon");
          return n(),
            a("div", jf, [e("div", {
              class: "BettingRecordWin__C-head"
            }, [e("div", {
              class: "BettingRecordWin__C-head-bcak",
              onClick: y
            }), W(" Win Go ")]), e("div", Vf, [R(w, {
              active: _.value,
              "onUpdate:active": f[0] || (f[0] = C => _.value = C),
              onClickTab: d
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(l.value, (C, N) => (n(),
                  se(k, {
                    key: N,
                    title: C.tabName,
                    name: C.typeID
                  }, null, 8, ["title", "name"]))), 128))]),
              _: 1
            }, 8, ["active"])]), e("div", Hf, [R(vn, {
              mayrecord: i.value
            }, null, 8, ["mayrecord"])]), i.value.length ? (n(),
              a("div", Uf, [e("div", {
                class: P(["BettingRecordWin__C-foot-previous", {
                  disabled: p.value <= 1
                }]),
                onClick: T
              }, [R(m, {
                name: "arrow-left",
                class: "BettingRecordWin__C-icon",
                size: "20"
              })], 2), e("div", Kf, t(p.value) + "/" + t(r.value), 1), e("div", {
                class: P(["BettingRecordWin__C-foot-next", {
                  disabled: p.value >= r.value
                }]),
                onClick: $
              }, [R(m, {
                name: "arrow",
                class: "BettingRecordWin__C-icon",
                size: "20"
              })], 2)])) : M("", !0)])
        }
    }
  });
const Qf = K(Xf, [["__scopeId", "data-v-8b9d5be9"]])
  , a7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Qf
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Yf = {
    class: "BettingRecordWinTrx__C"
  }
  , Zf = {
    class: "BettingRecordWinTrx__C-nav"
  }
  , Jf = {
    class: "BettingRecordWinTrx__C-list"
  }
  , eg = {
    key: 0,
    class: "BettingRecordWinTrx__C-foot"
  }
  , tg = {
    class: "BettingRecordWinTrx__C-foot-page"
  }
  , sg = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = g(Bu)
        , i = g([])
        , _ = g(0)
        , p = g(1)
        , r = g(0)
        , d = g(4)
        , v = b => {
          r.value = b.name,
            p.value = 1,
            o()
        }
        , o = async () => {
          const [b, f] = await Ze(rn({
            pageSize: 20,
            pageNo: p.value,
            typeId: r.value
          }));
          i.value = f.list || [],
            d.value = f.totalPage
        }
        , h = async () => {
          r.value = l.value[0].typeID,
            o()
        }
        ;
      function y() {
        s.go(-1)
      }
      const T = () => {
        p.value--,
          o()
      }
        , $ = () => {
          p.value++,
            o()
        }
        ;
      return Pe(() => {
        h()
      }
      ),
        (b, f) => {
          const k = V("van-tab")
            , w = V("van-tabs")
            , m = V("van-icon");
          return n(),
            a("div", Yf, [e("div", {
              class: "BettingRecordWinTrx__C-head"
            }, [e("div", {
              class: "BettingRecordWinTrx__C-head-bcak",
              onClick: y
            }), W(" Trx Win Go ")]), e("div", Zf, [R(w, {
              active: _.value,
              "onUpdate:active": f[0] || (f[0] = C => _.value = C),
              onClickTab: v
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(l.value, (C, N) => (n(),
                  se(k, {
                    key: N,
                    title: C.tabName,
                    name: C.typeID
                  }, null, 8, ["title", "name"]))), 128))]),
              _: 1
            }, 8, ["active"])]), e("div", Jf, [R(vn, {
              mayrecord: i.value
            }, null, 8, ["mayrecord"])]), i.value.length ? (n(),
              a("div", eg, [e("div", {
                class: P(["BettingRecordWinTrx__C-foot-previous", {
                  disabled: p.value <= 1
                }]),
                onClick: T
              }, [R(m, {
                name: "arrow-left",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
              })], 2), e("div", tg, t(p.value) + "/" + t(d.value), 1), e("div", {
                class: P(["BettingRecordWinTrx__C-foot-next", {
                  disabled: p.value >= d.value
                }]),
                onClick: $
              }, [R(m, {
                name: "arrow",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
              })], 2)])) : M("", !0)])
        }
    }
  });
const ng = K(sg, [["__scopeId", "data-v-3cdfbae5"]])
  , o7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ng
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , ie = g({
    odds: 1.5,
    money_list: [100, 1e3, 200, 5e3, 1e4],
    bet_money: 0,
    binguoType: 1,
    currentNumber: "20230610858776",
    award_result: "246",
    bet_item: "",
    trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"],
    trend_result2: ["123", "245", "532", "666"],
    currentMoneyIndex: 0,
    bet_number: "",
    beishu: 1,
    beishuList: [1, 5, 10, 20, 50, 100],
    currentBeishuIndex: 0,
    currentBetType: void 0,
    currentPlayId: 0,
    currentSelectType: "",
    currentOdds: "",
    drawIssnum: ""
  })
  , ls = g()
  , Qs = g(!1)
  , is = g(!1)
  , Hn = g(!0)
  , Un = g(!1)
  , ag = g(!1)
  , Ys = g("00:00")
  , og = g(!1)
  , Zs = g(!0)
  , { t: Js } = Is.global
  , cs = g([])
  , Qt = g([{
    value: Js("small"),
    type: 1,
    range: "3-9",
    beishu: "2.0",
    bet_amount: 0,
    key: "Small",
    groupId: 1,
    playId: 0,
    hot: !1
  }, {
    value: Js("binguoHe"),
    type: 2,
    range: "10-11",
    beishu: "3.0",
    bet_amount: 0,
    key: "Drawn",
    groupId: 1,
    playId: 0,
    hot: !1
  }, {
    value: Js("k3Big"),
    type: 3,
    range: "12-18",
    beishu: "5.0",
    bet_amount: 0,
    key: "Big",
    groupId: 1,
    playId: 0,
    hot: !1
  }])
  , us = g(Array.from({
    length: 16
  }, (c, s) => {
    const l = s + 3;
    return {
      value: l,
      type: l < 10 ? 1 : l > 11 ? 3 : 2,
      beishu: "2.0",
      bet_amount: 0,
      hot: !1,
      groupId: 1,
      playId: 0
    }
  }
  ))
  , Rt = g({
    third: {
      amount1: 0,
      amount2: 0
    },
    two: 0,
    one: {
      amount1: 0,
      amount2: 0,
      amount3: 0
    }
  })
  , Pt = g([{
    value: "1",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "2",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "3",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "4",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "5",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "6",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }, {
    value: "*",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
  }])
  , Gs = () => {
    const { t: c } = ye()
      , s = g()
      , l = ee(() => [re("home/AllLotteryGames/binguo", "dice_" + ie.value.award_result.toString()[0]), re("home/AllLotteryGames/binguo", "dice_" + ie.value.award_result.toString()[1]), re("home/AllLotteryGames/binguo", "dice_" + ie.value.award_result.toString()[2])])
      , i = ee(() => ie.value.currentBetType === 1 ? "small" : ie.value.currentBetType === 2 ? "and" : "big")
      , _ = async () => {
        const L = await ae(Au());
        L != null && L.data && (ie.value.money_list = L.data.betAmount,
          ie.value.beishuList = L.data.betMultiplier,
          ie.value.bet_money = L.data.betAmount[0])
      }
      , p = async () => {
        const L = await ae(Ou());
        if (L != null && L.data) {
          cs.value = L == null ? void 0 : L.data;
          let x = L == null ? void 0 : L.data;
          x.filter(D => D.groupId === 1).forEach(D => {
            Number(D.betType) ? us.value.forEach(j => {
              D.betType === j.value + "" && (j.beishu = D.odds,
                j.playId = D.playId)
            }
            ) : Qt.value.forEach(j => {
              j.key === D.betType && (j.beishu = D.odds,
                j.playId = D.playId)
            }
            )
          }
          ),
            x.filter(D => D.groupId !== 1).forEach(D => {
              D.groupId === 4 && (D.betType === "1" ? Rt.value.third.amount1 = D.odds : Rt.value.third.amount2 = D.odds),
                D.groupId === 3 && (Rt.value.two = D.odds),
                D.groupId === 2 && (D.betType === "1" ? Rt.value.one.amount1 = D.odds : D.betType === "2" ? Rt.value.one.amount2 = D.odds : Rt.value.one.amount3 = D.odds)
            }
            )
        }
      }
      , r = async () => {
        const L = await ae(Wu({
          issueNumber: ie.value.currentNumber
        }));
        L != null && L.data && (L.data.forEach(x => {
          switch (Qt.value.forEach(I => {
            x.playId === I.playId && (I.bet_amount = x.amount)
          }
          ),
          us.value.forEach(I => {
            x.playId === I.playId && (I.bet_amount = x.amount)
          }
          ),
          x.playId) {
            case 28:
              Pt.value[Number(x.selectType[0]) - 1].amount1 = x.amount;
              break;
            case 29:
              Pt.value[6].amount1 = x.amount;
              break;
            case 27:
              Pt.value[Number(x.selectType[0]) - 1].amount2 = x.amount;
              break;
            case 24:
              Pt.value[Number(x.selectType[0]) - 1].amount3 = x.amount;
              break
          }
        }
        ),
          await d(0),
          Xe(() => {
            L.data.sort((O, D) => D.amount - O.amount).slice(0, 3).forEach(O => {
              let D = Qt.value.findIndex(X => O.playId === X.playId);
              D > -1 && (Qt.value[D].hot = !0);
              let j = us.value.findIndex(X => O.playId === X.playId);
              switch (j > -1 && (us.value[j].hot = !0),
              O.playId) {
                case 28:
                  Pt.value[Number(O.selectType[0]) - 1].hot1 = !0;
                  break;
                case 29:
                  Pt.value[6].hot1 = !0;
                  break;
                case 27:
                  Pt.value[Number(O.selectType[0]) - 1].hot2 = !0;
                  break;
                case 24:
                  Pt.value[Number(O.selectType[0]) - 1].hot3 = !0;
                  break
              }
            }
            )
          }
          ))
      }
      , d = async L => {
        Pt.value.forEach(x => {
          x.hot1 = !1,
            x.hot2 = !1,
            x.hot3 = !1,
            L === 1 && (x.amount1 = 0,
              x.amount2 = 0,
              x.amount3 = 0)
        }
        ),
          Qt.value.forEach(x => {
            L === 1 && (x.bet_amount = 0),
              x.hot = !1
          }
          ),
          us.value.forEach(x => {
            L === 1 && (x.bet_amount = 0),
              x.hot = !1
          }
          )
      }
      , v = async () => {
        const L = await ae(zu());
        L && (L.data ? L.data.startTime && L.data.endTime && (ie.value.currentNumber = L == null ? void 0 : L.data.issueNumber,
          k(L.data.serviceTime, L.data.endTime, async () => {
            Ys.value = "10:00",
              await v(),
              clearInterval(s.value),
              setTimeout(() => {
                o()
              }
                , 60 * 1e3),
              d(1)
          }
          )) : Zs.value = !1,
          await r())
      }
      , o = async () => {
        let L = 1;
        s.value = setInterval(async () => {
          L === 10 ? clearInterval(s.value) : (await h(),
            await y(),
            L++)
        }
          , 1e4)
      }
      , h = async () => {
        const L = await ae(qu());
        L && (ie.value.award_result = L == null ? void 0 : L.data.result,
          ie.value.drawIssnum = L == null ? void 0 : L.data.issueNo)
      }
      , y = async () => {
        const L = await ae(xa());
        L && (ie.value.trend_result = L == null ? void 0 : L.data.map(x => x.resultSum + "").slice(0, 13).reverse(),
          ie.value.trend_result2 = L == null ? void 0 : L.data.map(x => x.result + "").slice(0, 4).reverse())
      }
      , T = L => {
        is.value = !0,
          ie.value.bet_number = L.value + "",
          ie.value.currentBetType = L.type,
          ie.value.currentPlayId = L.playId,
          ie.value.currentOdds = L.beishu + ""
      }
      , $ = (L, x) => {
        var I, O, D, j;
        x === 1 ? (ie.value.bet_number = L,
          ie.value.currentBetType = x,
          ie.value.currentPlayId = (I = cs.value.find(X => X.betType === "1" && X.groupId === 2)) == null ? void 0 : I.playId,
          ie.value.currentOdds = Rt.value.one.amount1 + "") : x === 2 ? (ie.value.bet_number = L + "," + L,
            L.includes("6") ? ie.value.currentBetType = 3 : L.includes("5") ? ie.value.currentBetType = 2 : ie.value.currentBetType = 1,
            ie.value.currentOdds = Rt.value.two + "",
            ie.value.currentPlayId = (O = cs.value.find(X => X.betType === "2" && X.groupId === 3)) == null ? void 0 : O.playId) : x === 3 && (ie.value.bet_number = L + "," + L + "," + L,
              /[123]/.test(L) ? ie.value.currentBetType = 1 : ie.value.currentBetType = 3,
              L.includes("*") ? (ie.value.currentOdds = Rt.value.third.amount2 + "",
                ie.value.currentPlayId = (D = cs.value.find(X => X.betType === "2" && X.groupId === 4)) == null ? void 0 : D.playId) : (ie.value.currentOdds = Rt.value.third.amount1 + "",
                  ie.value.currentPlayId = (j = cs.value.find(X => X.betType === "1" && X.groupId === 4)) == null ? void 0 : j.playId)),
          is.value = !0
      }
      , b = async () => {
        var D;
        if (!Zs.value) {
          is.value = !1,
            Un.value = !0;
          return
        }
        if (!Hn.value)
          return;
        let L = cs.value.find(j => j.playId === ie.value.currentPlayId)
          , x = "";
        (L == null ? void 0 : L.groupId) === 2 || (L == null ? void 0 : L.groupId) === 3 ? x = ie.value.bet_number.split(",")[0] : (L == null ? void 0 : L.groupId) === 4 ? x = ie.value.bet_number.includes("*") ? "***" : ie.value.bet_number.split(",").join("") : x = Number(ie.value.bet_number) ? ie.value.bet_number : (D = Qt.value.find(j => j.value === ie.value.bet_number)) == null ? void 0 : D.key;
        let I = {
          issueNumber: ie.value.currentNumber,
          amount: ie.value.bet_money * ie.value.beishu,
          figure: Number(ie.value.beishu),
          gameType: (L == null ? void 0 : L.groupId) + "",
          selectType: x,
          playId: ie.value.currentPlayId
        };
        (await ae(Eu(I))).data && (nn(c("code402")),
          is.value = !1,
          r())
      }
      , f = (L, x) => {
        let I = new Date(L.replace(/-/g, "/"));
        return new Date(x.replace(/-/g, "/")).getTime() - I.getTime()
      }
      , k = (L, x, I) => {
        clearInterval(ls.value),
          ls.value = void 0;
        let O = f(L, x);
        if (O <= 1e3)
          throw new Error("时间不正确");
        ls.value = setInterval(() => {
          if (O -= 1e3,
            O <= 1e3) {
            clearInterval(ls.value),
              I();
            return
          }
          Ys.value = ol(O, "mm:ss")
        }
          , 1e3)
      }
      , w = () => Qs.value = !Qs.value
      , m = L => {
        L === "add" ? ie.value.beishu = Number(ie.value.beishu) + 1 : ie.value.beishu = Number(ie.value.beishu) - 1
      }
      , C = () => {
        is.value = !1,
          ie.value.currentBeishuIndex = 0,
          ie.value.currentMoneyIndex = 0
      }
      , N = () => ia.back()
      , S = L => L >= 1e6 ? (L / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : L >= 1e3 ? (L / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : L + "";
    return Ge(() => ie.value.currentMoneyIndex, L => {
      ie.value.bet_money = Number(ie.value.money_list[L])
    }
      , {
        immediate: !0
      }),
      Ge(() => ie.value.bet_number, () => {
        ie.value.currentMoneyIndex = 0,
          ie.value.currentBeishuIndex = 0
      }
        , {
          immediate: !0
        }),
      Ge(() => ie.value.currentBeishuIndex, L => {
        ie.value.beishu = Number(ie.value.beishuList[L])
      }
        , {
          immediate: !0
        }),
      Ut(() => {
        clearInterval(ls.value)
      }
      ),
    {
      store: ie,
      timer: ls,
      isShowBetMoney: Qs,
      filterNumberSize: i,
      handleToggleShwoMoney: w,
      handleBet: T,
      goBack: N,
      handleStep: m,
      handleCancel: C,
      isSell: Zs,
      handleAlike: $,
      getBinguoConfig: _,
      getBinguoOddsList: p,
      getGameBingo18Issue: v,
      countdownTimeFun: k,
      getBingo18LastGameResult: h,
      getBingo18BetAmount: r,
      handleBetSubmit: b,
      getBingo18Last50Result: y,
      formatNum: S,
      checkRule: Hn,
      resultImgList: l,
      betSizeList: Qt,
      betNumberList: us,
      betSheetVisible: is,
      overVisble: Un,
      alikeList: Pt,
      timeText: Ys,
      oddObject: Rt,
      playerRuleVisble: ag,
      betPopTXT: og
    }
  }
  , Ga = c => (De("data-v-ebbda7cb"),
    c = c(),
    Ae(),
    c)
  , lg = {
    class: "binguo_info"
  }
  , ig = {
    class: "binguo_award"
  }
  , cg = {
    key: 0,
    class: "main"
  }
  , ug = {
    class: "current_award"
  }
  , rg = {
    class: "tit"
  }
  , dg = {
    class: "current_number"
  }
  , _g = {
    class: "award_time"
  }
  , vg = {
    class: "award_result"
  }
  , pg = {
    class: "tit"
  }
  , mg = {
    class: "award_type"
  }
  , hg = {
    key: 1,
    class: "over_tip"
  }
  , fg = {
    class: "trend"
  }
  , gg = {
    key: 0,
    class: "trend_result1"
  }
  , yg = {
    class: "text"
  }
  , bg = {
    class: "result_list"
  }
  , $g = Ga(() => e("span", {
    class: "tag animation_tag"
  }, "-", -1))
  , kg = {
    key: 1,
    class: "trend_result2"
  }
  , Tg = {
    class: "result_list2"
  }
  , wg = {
    class: "result_list2"
  }
  , Cg = {
    class: "animation_tag"
  }
  , Ng = Ga(() => e("div", {
    id: "time"
  }, null, -1))
  , Lg = U({
    __name: "BinguoInfo",
    setup(c) {
      const { store: s, resultImgList: l, isSell: i, timeText: _, getGameBingo18Issue: p, getBingo18LastGameResult: r, getBingo18Last50Result: d } = Gs()
        , v = $e();
      function o(y) {
        let T = 0;
        return s.value.binguoType === 1 ? T = Number(y) : (T = 0,
          y.split("").forEach($ => {
            T += Number($)
          }
          )),
          T < 10 ? "small" : T === 11 || T === 10 ? "sum" : "big"
      }
      const h = () => {
        v.push({
          path: "/home/AllLotteryGames/BinguoCount"
        })
      }
        ;
      return p(),
        r(),
        d(),
        (y, T) => {
          const $ = V("van-icon");
          return n(),
            a(B, null, [e("div", lg, [e("div", ig, [u(i) ? (n(),
              a("div", cg, [e("div", ug, [e("div", rg, t(y.$t("currentIssNumber")), 1), e("div", dg, t(u(s).currentNumber), 1)]), e("div", _g, t(u(_)), 1), e("div", vg, [e("div", pg, t(u(s).drawIssnum), 1), e("div", mg, [e("div", {
                style: mt({
                  backgroundImage: `url(${u(l)[0]}) `
                })
              }, null, 4), u(s).binguoType !== 2 ? (n(),
                se($, {
                  key: 0,
                  name: u(re)("home/AllLotteryGames/binguo", "add")
                }, null, 8, ["name"])) : M("", !0), e("div", {
                  style: mt({
                    backgroundImage: `url(${u(l)[1]}) `
                  })
                }, null, 4), u(s).binguoType !== 2 ? (n(),
                  se($, {
                    key: 1,
                    name: u(re)("home/AllLotteryGames/binguo", "add")
                  }, null, 8, ["name"])) : M("", !0), e("div", {
                    style: mt({
                      backgroundImage: `url(${u(l)[2]})`
                    })
                  }, null, 4)])])])) : (n(),
                    a("div", hg, t(y.$t("playerEnd")), 1))]), e("div", fg, [u(s).binguoType === 1 ? (n(),
                      a("div", gg, [e("div", yg, t(y.$t("result")), 1), e("div", bg, [(n(!0),
                        a(B, null, G(u(s).trend_result, b => (n(),
                          a("span", {
                            class: P(["tag", `${o(b)}_tag`])
                          }, t(b), 3))), 256)), $g])])) : (n(),
                            a("div", kg, [(n(!0),
                              a(B, null, G(u(s).trend_result2, b => (n(),
                                a("div", Tg, [(n(!0),
                                  a(B, null, G(b, f => (n(),
                                    a("span", {
                                      class: P(`${o(b)}_tag`)
                                    }, t(f), 3))), 256))]))), 256)), e("div", wg, [(n(),
                                      a(B, null, G(3, () => e("span", Cg)), 64))])])), e("div", {
                                        class: "trend_img",
                                        onClick: T[0] || (T[0] = b => h())
                                      })])]), Ng], 64)
        }
    }
  });
const Ig = K(Lg, [["__scopeId", "data-v-ebbda7cb"]])
  , Rg = c => (De("data-v-c361e07d"),
    c = c(),
    Ae(),
    c)
  , xg = {
    class: "main_desk"
  }
  , Sg = {
    key: 0,
    class: "rule_tip"
  }
  , Bg = {
    class: "bet_size"
  }
  , Mg = ["onClick"]
  , Pg = {
    class: "head"
  }
  , Gg = {
    class: "range"
  }
  , Dg = {
    key: 0,
    class: "hot"
  }
  , Ag = ["onClick"]
  , Og = {
    key: 1,
    class: "alike_box"
  }
  , zg = {
    class: "rule_tip"
  }
  , qg = {
    class: "alike"
  }
  , Wg = ["onClick"]
  , Eg = {
    class: "amount"
  }
  , Fg = {
    class: "third_list"
  }
  , jg = {
    class: "ball"
  }
  , Vg = {
    class: "ball2"
  }
  , Hg = {
    key: 0,
    class: "ball_hot2"
  }
  , Ug = {
    class: "rule_tip"
  }
  , Kg = {
    class: "alike two_alike"
  }
  , Xg = ["onClick"]
  , Qg = {
    class: "amount"
  }
  , Yg = {
    class: "third_list"
  }
  , Zg = {
    class: "ball"
  }
  , Jg = {
    class: "ball2"
  }
  , ey = {
    key: 0,
    class: "ball_hot2"
  }
  , ty = {
    class: "rule_tip"
  }
  , sy = {
    class: "alike one_alike"
  }
  , ny = ["onClick"]
  , ay = {
    class: "amount"
  }
  , oy = Rg(() => e("div", {
    class: "ball_hot"
  }, null, -1))
  , ly = {
    class: "third_list"
  }
  , iy = {
    class: "ball"
  }
  , cy = {
    class: "ball2"
  }
  , uy = {
    key: 0,
    class: "ball_hot2"
  }
  , ry = {
    class: "rule_tip_header"
  }
  , dy = ["src"]
  , _y = {
    class: "rule_tip_dialog"
  }
  , vy = {
    class: "rule_tip_tit"
  }
  , py = {
    class: "rule_tip_text"
  }
  , my = U({
    __name: "BinguoMainDesk",
    setup(c) {
      const { t: s } = ye()
        , { betSizeList: l, betNumberList: i, isShowBetMoney: _, handleBet: p, store: r, alikeList: d, handleAlike: v, oddObject: o, formatNum: h } = Gs()
        , y = {
          sum: {
            dice: "1,3,6",
            tip1: s("result"),
            tip2: s("binguoRuleTipText1")
          },
          third: {
            dice: "6,6,6",
            tip1: s("numbersMatch"),
            tip2: s("binguoRuleTipText2")
          },
          two: {
            dice: "6,6",
            tip1: s("sameNum"),
            tip2: s("binguoRuleTipText3")
          },
          one: {
            dice: "1,2,3,5,4,6",
            tip1: s("same"),
            tip2: s("binguoRuleTipText4")
          }
        }
        , T = g(!1)
        , $ = g()
        , b = () => {
          const f = document.querySelectorAll(".rule_tip");
          for (let k = 0; k < f.length; k++)
            f[k].addEventListener("click", () => {
              T.value = !0,
                k === 0 && ($.value = y.sum),
                k === 1 && ($.value = y.third),
                k === 2 && ($.value = y.two),
                k === 3 && ($.value = y.one)
            }
            )
        }
        ;
      return Ge(() => r.value.binguoType, f => {
        f === 2 && Xe(() => {
          b()
        }
        )
      }
        , {
          deep: !0,
          immediate: !0
        }),
        (f, k) => (n(),
          a("div", xg, [u(r).binguoType === 2 ? (n(),
            a("div", Sg, t(f.$t("xosoTxt60")), 1)) : M("", !0), e("div", Bg, [(n(!0),
              a(B, null, G(u(l), w => (n(),
                a("div", {
                  class: "size_item",
                  onClick: _t(m => u(p)(w), ["stop"])
                }, [e("div", Pg, [e("span", null, t(u(_) && w.bet_amount ? u(h)(w.bet_amount) : ""), 1), e("span", null, t(w.beishu + "x" || ""), 1)]), e("div", {
                  class: P(`value value_${w.type}`)
                }, t(w.value), 3), e("div", Gg, t(w.range), 1), w.hot && u(_) ? (n(),
                  a("div", Dg)) : M("", !0)], 8, Mg))), 256))]), e("div", {
                    class: P(["bet_number", {
                      betAll: u(r).binguoType === 2
                    }])
                  }, [(n(!0),
                    a(B, null, G(u(i), w => (n(),
                      a("div", {
                        key: w.value,
                        class: "item",
                        onClick: m => u(p)(w)
                      }, [e("div", null, t(u(_) && w.bet_amount ? u(h)(w.bet_amount) : ""), 1), e("div", null, t(w.value), 1), e("div", null, t(w.beishu) + "X", 1), w.hot && u(_) ? (n(),
                        a("div", {
                          key: 0,
                          class: P(["hot", {
                            hot2: u(r).binguoType === 2
                          }])
                        }, null, 2)) : M("", !0)], 8, Ag))), 128))], 2), u(r).binguoType === 2 ? (n(),
                          a("div", Og, [e("div", zg, t(f.$t("trendTXT4")) + " " + t(f.$t("odds")) + t(u(o).third.amount1) + "x " + t(f.$t("k3bet3Desc4")) + " " + t(f.$t("odds")) + t(u(o).third.amount2) + "x ", 1), e("div", qg, [(n(!0),
                            a(B, null, G(u(d), w => (n(),
                              a("div", {
                                class: "alike_item",
                                onClick: m => u(v)(w.value, 3)
                              }, [e("div", Eg, t(u(_) && w.amount1 ? u(h)(w.amount1) : ""), 1), e("div", Fg, [(n(),
                                a(B, null, G(3, () => e("div", jg, [e("span", Vg, t(w.value), 1), w.hot1 ? (n(),
                                  a("span", Hg)) : M("", !0)])), 64))])], 8, Wg))), 256))]), e("div", Ug, t(f.$t("trendTXT3") + f.$t("odds")) + " " + t(u(o).two) + "x", 1), e("div", Kg, [(n(!0),
                                    a(B, null, G(u(d).slice(0, 6), w => (n(),
                                      a("div", {
                                        class: "alike_item",
                                        onClick: m => u(v)(w.value, 2)
                                      }, [e("div", Qg, t(u(_) && w.amount2 ? u(h)(w.amount2) : ""), 1), e("div", Yg, [(n(),
                                        a(B, null, G(2, () => e("div", Zg, [e("span", Jg, t(w.value), 1), w.hot2 ? (n(),
                                          a("span", ey)) : M("", !0)])), 64))])], 8, Xg))), 256))]), e("div", ty, t(f.$t("binguoRuleTip1")) + t(u(o).one.amount1) + "x " + t(f.$t("binguoRuleTip2")) + t(u(o).one.amount2) + "x " + t(f.$t("binguoRuleTip3")) + " " + t(u(o).one.amount3) + "x ", 1), e("div", sy, [(n(!0),
                                            a(B, null, G(u(d).slice(0, 6), w => (n(),
                                              a("div", {
                                                class: "alike_item",
                                                onClick: m => u(v)(w.value, 1)
                                              }, [e("div", ay, t(u(_) && w.amount3 ? u(h)(w.amount3) : ""), 1), oy, e("div", ly, [e("span", iy, [e("span", cy, t(w.value), 1), w.hot3 ? (n(),
                                                a("span", uy)) : M("", !0)])])], 8, ny))), 256))])])) : M("", !0), R(xt, {
                                                  show: T.value,
                                                  "onUpdate:show": k[0] || (k[0] = w => T.value = w),
                                                  showCloseIcon: !0,
                                                  clickOutSide: !0,
                                                  "show-cancel-btn": !1,
                                                  showFooter: !1,
                                                  isShowHeader: !1
                                                }, {
                                                  title: A(() => {
                                                    var w;
                                                    return [e("div", ry, [(n(!0),
                                                      a(B, null, G((w = $.value) == null ? void 0 : w.dice.split(","), m => (n(),
                                                        a("img", {
                                                          src: u(re)("home/AllLotteryGames/binguo", `rule_dice_${m}`),
                                                          alt: ""
                                                        }, null, 8, dy))), 256))])]
                                                  }
                                                  ),
                                                  content: A(() => {
                                                    var w, m;
                                                    return [e("div", _y, [e("div", vy, t((w = $.value) == null ? void 0 : w.tip1), 1), e("div", py, t((m = $.value) == null ? void 0 : m.tip2), 1)])]
                                                  }
                                                  ),
                                                  footer: A(() => []),
                                                  _: 1
                                                }, 8, ["show"])]))
    }
  });
const hy = K(my, [["__scopeId", "data-v-c361e07d"]])
  , fy = {
    class: "bet_content"
  }
  , gy = {
    class: "bet_tit"
  }
  , yy = {
    class: "bet_cnt"
  }
  , by = {
    class: "bet_item"
  }
  , $y = {
    class: "bet_item_tit"
  }
  , ky = {
    class: "bet_money_list"
  }
  , Ty = ["onClick"]
  , wy = {
    class: "bet_item"
  }
  , Cy = {
    class: "bet_item_tit"
  }
  , Ny = {
    class: "bet_step"
  }
  , Ly = {
    class: "bet_money_list bet_beishu"
  }
  , Iy = ["onClick"]
  , Ry = {
    class: "bet_info"
  }
  , xy = {
    class: "tit"
  }
  , Sy = {
    class: "pl",
    style: {
      color: "#fff"
    }
  }
  , By = {
    class: "bet_info"
  }
  , My = {
    class: "tit"
  }
  , Py = {
    class: "pl",
    style: {
      color: "#cee98c"
    }
  }
  , Gy = {
    class: "bet_info"
  }
  , Dy = {
    class: "tit"
  }
  , Ay = {
    class: "pl",
    style: {
      color: "#f9bc36"
    }
  }
  , Oy = {
    key: 0,
    class: "recharge_tip"
  }
  , zy = {
    class: "apply"
  }
  , qy = {
    class: "bet_btn_group"
  }
  , Wy = U({
    __name: "BinguoBetSheet",
    setup(c) {
      const { betSheetVisible: s, store: l, betPopTXT: i, filterNumberSize: _, handleStep: p, checkRule: r, handleCancel: d, handleBetSubmit: v } = Gs()
        , h = gt().getUserInfo
        , y = $e()
        , T = () => {
          y.push("/wallet/recharge")
        }
        ;
      return ($, b) => {
        const f = V("van-field")
          , k = V("van-icon")
          , w = V("van-checkbox")
          , m = V("van-action-sheet");
        return n(),
          se(m, {
            show: u(s),
            "onUpdate:show": b[8] || (b[8] = C => it(s) ? s.value = C : null),
            closeable: !1
          }, {
            default: A(() => [e("div", fy, [e("div", gy, t($.$t("betting")), 1), e("div", yy, [(n(!0),
              a(B, null, G(u(l).bet_number.split(","), C => (n(),
                a("span", {
                  class: P(`${u(_)}`)
                }, t(C), 3))), 256))]), e("div", by, [e("div", $y, t($.$t("amount")), 1), e("div", ky, [(n(!0),
                  a(B, null, G(u(l).money_list, (C, N) => (n(),
                    a("div", {
                      class: P(["money_item", {
                        monyActive: u(l).currentMoneyIndex === N
                      }]),
                      onClick: S => u(l).currentMoneyIndex = N
                    }, t(C), 11, Ty))), 256))])]), e("div", wy, [e("div", Cy, [e("span", null, t($.$t("multiple")), 1), e("div", Ny, [e("span", {
                      onClick: b[0] || (b[0] = C => u(p)("sub"))
                    }, "-"), R(f, {
                      modelValue: u(l).beishu,
                      "onUpdate:modelValue": b[1] || (b[1] = C => u(l).beishu = C),
                      "input-align": "center",
                      onInput: b[2] || (b[2] = C => {
                        if (9999 < Number(C.target.value)) {
                          u(l).beishu = 9999;
                          return
                        }
                        if (Number(C.target.value) < 1) {
                          u(l).beishu = 0;
                          return
                        }
                        u(l).beishu = Number(C.target.value)
                      }
                      ),
                      type: "digit",
                      class: "bet_beishu_input"
                    }, null, 8, ["modelValue"]), e("span", {
                      onClick: b[3] || (b[3] = C => u(p)("add"))
                    }, "+")])]), e("div", Ly, [(n(!0),
                      a(B, null, G(u(l).beishuList, (C, N) => (n(),
                        a("div", {
                          class: P(["money_item", {
                            monyActive: u(l).currentBeishuIndex === N
                          }]),
                          onClick: S => u(l).currentBeishuIndex = N
                        }, " X" + t(C), 11, Iy))), 256))])]), e("div", Ry, [e("div", xy, t($.$t("odds")), 1), e("div", Sy, t(u(l).currentOdds), 1)]), e("div", By, [e("div", My, t($.$t("walletBalance")), 1), e("div", Py, t(u(h).amount), 1)]), e("div", Gy, [e("div", Dy, t($.$t("betAmounts")), 1), e("div", Ay, t(u(l).bet_money * u(l).beishu), 1)]), u(h).amount < u(l).bet_money * u(l).beishu ? (n(),
                          a("div", Oy, [e("div", null, [R(k, {
                            name: "warning-o",
                            size: "18"
                          }), W(" " + t($.$t("walletTip")), 1)]), e("span", {
                            onClick: T
                          }, t($.$t("goRecharge")) + " >>", 1)])) : M("", !0), R(w, {
                            modelValue: u(r),
                            "onUpdate:modelValue": b[5] || (b[5] = C => it(r) ? r.value = C : null),
                            "checked-color": "#CEE98C",
                            "label-disabled": "",
                            "icon-size": "24px"
                          }, {
                            default: A(() => [e("span", zy, t($.$t("agree")), 1), e("span", {
                              class: "rule",
                              onClick: b[4] || (b[4] = () => {
                                s.value = !1,
                                  i.value = !0
                              }
                              )
                            }, t($.$t("presaleRules")), 1)]),
                            _: 1
                          }, 8, ["modelValue"]), e("div", qy, [e("div", {
                            class: "cancel_btn",
                            onClick: b[6] || (b[6] = (...C) => u(d) && u(d)(...C))
                          }, t($.$t("cancel")), 1), e("div", {
                            class: P(["bet_btn", {
                              inconformity: u(h).amount < u(l).bet_money * u(l).beishu || !u(r) || u(l).bet_money * u(l).beishu === 0
                            }]),
                            onClick: b[7] || (b[7] = (...C) => u(v) && u(v)(...C))
                          }, t($.$t("betting")), 3)])])]),
            _: 1
          }, 8, ["show"])
      }
    }
  });
const Ey = K(Wy, [["__scopeId", "data-v-999f9938"]]);
const Fy = {}
  , pn = c => (De("data-v-65bb586b"),
    c = c(),
    Ae(),
    c)
  , jy = {
    class: "container"
  }
  , Vy = {
    class: "first-paragraph"
  }
  , Hy = {
    class: "first-statement"
  }
  , Uy = {
    class: "paragraph-two"
  }
  , Ky = {
    class: "paragraph-two-statement"
  }
  , Xy = {
    class: "paragraph-three"
  }
  , Qy = {
    class: "paragraph-three-statement"
  }
  , Yy = {
    class: "svg-container"
  }
  , Zy = an('<div class="first-vector" data-v-65bb586b><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-65bb586b><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-65bb586b></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-65bb586b></path><defs data-v-65bb586b><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient></defs></svg></div>', 1)
  , Jy = {
    class: "vector-heading"
  }
  , eb = an('<div class="vector-two" data-v-65bb586b><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-65bb586b><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-65bb586b></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-65bb586b></path><defs data-v-65bb586b><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient></defs></svg></div>', 1)
  , tb = {
    class: "details-container-one"
  }
  , sb = {
    class: "details-container-items"
  }
  , nb = {
    class: "first-heading"
  }
  , ab = {
    class: "fontBold"
  }
  , ob = {
    class: "paragraph-inside-container"
  }
  , lb = {
    class: "paragraph-title"
  }
  , ib = {
    class: "paragraph-inside-container"
  }
  , cb = {
    class: "paragraph-title"
  }
  , ub = {
    class: "paragraph-inside-container"
  }
  , rb = {
    class: "paragraph-title"
  }
  , db = {
    class: "paragraph-inside-container"
  }
  , _b = {
    class: "paragraph-title"
  }
  , vb = {
    class: "details-container-one"
  }
  , pb = {
    class: "details-container-items"
  }
  , mb = {
    class: "first-heading"
  }
  , hb = pn(() => e("span", {
    class: "fontBold"
  }, "1,2,3,4,5,6", -1))
  , fb = {
    class: "paragraph-inside-container"
  }
  , gb = {
    class: "paragraph-title"
  }
  , yb = {
    class: "details-container-one"
  }
  , bb = {
    class: "details-container-items"
  }
  , $b = {
    class: "first-heading"
  }
  , kb = pn(() => e("span", {
    class: "fontBold"
  }, "11,22...66", -1))
  , Tb = {
    class: "paragraph-inside-container"
  }
  , wb = {
    class: "paragraph-title"
  }
  , Cb = {
    class: "details-container-one"
  }
  , Nb = {
    class: "details-container-items"
  }
  , Lb = {
    class: "first-heading"
  }
  , Ib = pn(() => e("span", {
    class: "fontBold"
  }, "111,222...666,***", -1))
  , Rb = {
    class: "paragraph-inside-container"
  }
  , xb = {
    class: "paragraph-title"
  }
  , Sb = {
    class: "paragraph-inside-container"
  }
  , Bb = {
    class: "paragraph-title"
  };
function Mb(c, s) {
  return n(),
    a("div", jy, [e("div", Vy, [e("p", Hy, t(c.$t("binguoRuleText1")), 1)]), e("div", Uy, [e("p", Ky, t(c.$t("binguoRuleText2")), 1)]), e("div", Xy, [e("p", Qy, t(c.$t("binguoRuleText3")), 1)]), e("div", Yy, [Zy, e("div", Jy, t(c.$t("gamePlay")), 1), eb]), e("div", tb, [e("div", sb, t(c.$t("xosoTxt60")), 1), e("div", nb, [W(t(c.$t("binguoRuleText4")) + " ", 1), e("span", ab, t(c.$t("binguoRuleText5")), 1), W(t(c.$t("binguoRuleText6")), 1)]), e("div", ob, [e("div", lb, [e("span", null, t(c.$t("binguoRuleText7")) + ":", 1), W(t(c.$t("binguoRuleText8")), 1)])]), e("div", ib, [e("div", cb, [e("span", null, t(c.$t("binguoRuleText9")) + ":", 1), W(t(c.$t("binguoRuleText10")), 1)])]), e("div", ub, [e("div", rb, [e("span", null, t(c.$t("binguoRuleText17")) + ":", 1), W(t(c.$t("binguoRuleText18")), 1)])]), e("div", db, [e("div", _b, [e("span", null, t(c.$t("binguoRuleText11")) + ",", 1), W(t(c.$t("binguoRuleText12")), 1)])])]), e("div", vb, [e("div", pb, t(c.$t("same")), 1), e("div", mb, [W(t(c.$t("binguoRuleText4")) + " ", 1), hb]), e("div", fb, [e("div", gb, t(c.$t("binguoRuleText13")), 1)])]), e("div", yb, [e("div", bb, t(c.$t("sameNum")), 1), e("div", $b, [W(t(c.$t("binguoRuleText4")), 1), kb]), e("div", Tb, [e("div", wb, t(c.$t("binguoRuleText14")), 1)])]), e("div", Cb, [e("div", Nb, t(c.$t("numbersMatch")), 1), e("div", Lb, [W(t(c.$t("binguoRuleText4")), 1), Ib]), e("div", Rb, [e("div", xb, t(c.$t("binguoRuleText15")), 1)]), e("div", Sb, [e("div", Bb, t(c.$t("binguoRuleText16")), 1)])])])
}
const Pb = K(Fy, [["render", Mb], ["__scopeId", "data-v-65bb586b"]])
  , Gb = c => (De("data-v-e2b24d31"),
    c = c(),
    Ae(),
    c)
  , Db = {
    class: "binguo_container"
  }
  , Ab = Gb(() => e("span", {
    class: "nav_title"
  }, "BINGO18", -1))
  , Ob = {
    class: "nav_right"
  }
  , zb = {
    class: "binguo_btn_group"
  }
  , qb = ["src"]
  , Wb = {
    class: "over_dialog_tip"
  }
  , Eb = {
    class: "playerRule"
  }
  , Fb = {
    class: "playerRule"
  }
  , jb = {
    style: {
      color: "#fff"
    }
  }
  , Vb = U({
    __name: "index",
    setup(c) {
      const { goBack: s, betPopTXT: l, isShowBetMoney: i, handleToggleShwoMoney: _, store: p, overVisble: r, getBinguoConfig: d, getBinguoOddsList: v, playerRuleVisble: o } = Gs()
        , h = $e()
        , y = () => {
          h.push({
            path: "/home/AllLotteryGames/BinguoRecord"
          })
        }
        ;
      return Pe(() => {
        d(),
          v()
      }
      ),
        (T, $) => {
          const b = V("van-icon")
            , f = V("NavBar");
          return n(),
            a("div", Db, [R(f, {
              "left-arrow": "",
              onClickLeft: u(s),
              backgroundColor: "#0a4529"
            }, {
              left: A(() => [R(b, {
                name: "arrow-left",
                size: 24
              }), Ab]),
              right: A(() => [e("div", Ob, [e("div", {
                onClick: $[0] || ($[0] = _t(() => o.value = !0, ["stop"])),
                class: "binguo_explain"
              }), e("div", {
                class: P(["binguo_money", u(i) ? "binguo_money_look" : "binguo_money_hidden"]),
                onClick: $[1] || ($[1] = _t(() => u(_)(), ["stop"]))
              }, null, 2), e("div", {
                onClick: $[2] || ($[2] = _t(() => y(), ["stop"])),
                class: "binguo_count1"
              })])]),
              _: 1
            }, 8, ["onClickLeft"]), e("div", zb, [e("div", {
              class: P(["btn_1", {
                active_btn: u(p).binguoType === 1
              }]),
              onClick: $[3] || ($[3] = k => u(p).binguoType = 1)
            }, t(T.$t("binguoDesk1")), 3), e("div", {
              class: P(["btn_2", {
                active_btn: u(p).binguoType === 2
              }]),
              onClick: $[4] || ($[4] = k => u(p).binguoType = 2)
            }, t(T.$t("binguoDesk2")), 3)]), R(Ig), R(hy), R(Ey), R(xt, {
              show: u(r),
              onConfirm: $[5] || ($[5] = k => r.value = !1),
              "show-cancel-btn": !1,
              confirmText: T.$t("confirm")
            }, {
              header: A(() => [e("img", {
                src: u(re)("home/AllLotteryGames/binguo", "binguo_tip"),
                alt: "",
                class: "binguo_tip"
              }, null, 8, qb)]),
              content: A(() => [e("div", Wb, t(T.$t("over_dialog_tip")), 1)]),
              _: 1
            }, 8, ["show", "confirmText"]), R(xt, {
              class: "rule_dialog",
              show: u(o),
              onConfirm: $[6] || ($[6] = k => o.value = !1),
              "show-cancel-btn": !1,
              isShowHeader: !1,
              confirmText: T.$t("iKonw")
            }, {
              title: A(() => [e("div", null, t(T.$t("binguo_playerRule")), 1)]),
              content: A(() => [e("div", Eb, [R(Pb)])]),
              _: 1
            }, 8, ["show", "confirmText"]), R(xt, {
              class: "rule_dialog",
              show: u(l),
              onConfirm: $[7] || ($[7] = k => l.value = !1),
              "show-cancel-btn": !1,
              isShowHeader: !1,
              confirmText: T.$t("iKonw")
            }, {
              title: A(() => [e("div", null, t(T.$t("presaleRules")), 1)]),
              content: A(() => [e("div", Fb, [e("div", jb, t(T.$t("betPopTXT")), 1)])]),
              _: 1
            }, 8, ["show", "confirmText"])])
        }
    }
  });
const Hb = K(Vb, [["__scopeId", "data-v-e2b24d31"]])
  , l7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hb
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Ub = {
    class: "binguo_count_tab"
  }
  , Kb = ["onClick"]
  , Xb = U({
    __name: "BinguoTab",
    setup(c) {
      const { store: s } = Jt()
        , { t: l } = ye()
        , i = [{
          lable: l("betting"),
          value: 1
        }, {
          lable: l("detail"),
          value: 2
        }, {
          lable: l("thisWeek"),
          value: 3
        }, {
          lable: l("binguoLeaderboard"),
          value: 4
        }];
      return (_, p) => (n(),
        a("div", Ub, [(n(),
          a(B, null, G(i, (r, d) => e("div", {
            class: P(["item", {
              active: u(s).currentTabIndex === d
            }]),
            key: r.value,
            onClick: v => u(s).currentTabIndex = d
          }, t(r.lable), 11, Kb)), 64))]))
    }
  });
const Qb = K(Xb, [["__scopeId", "data-v-0f91ea76"]])
  , Yb = c => (De("data-v-c375424d"),
    c = c(),
    Ae(),
    c)
  , Zb = {
    class: "t-table_border"
  }
  , Jb = {
    class: "t-table_th_round"
  }
  , e0 = {
    class: "tab_header"
  }
  , t0 = {
    key: 0,
    class: "tab_default_cell"
  }
  , s0 = {
    class: "tab_default_cell"
  }
  , n0 = {
    key: 0
  }
  , a0 = {
    key: 0
  }
  , o0 = ["colspan"]
  , l0 = Yb(() => e("div", {
    style: {
      color: "#666",
      "font-size": "14px",
      padding: "6px",
      "text-align": "center"
    }
  }, "暂无数据", -1))
  , i0 = U({
    __name: "index",
    props: {
      dataSource: {},
      columnOptions: {},
      headerClass: {},
      bodyClass: {},
      isLockHeader: {
        type: Boolean
      },
      border: {
        type: Boolean,
        default: !0
      },
      scroll: {
        type: Boolean,
        default: !0
      },
      borderColor: {
        default: "#0B462A"
      },
      hBgColor: {
        default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)"
      },
      hColor: {
        default: "#F9BC36"
      },
      align: {
        default: "center"
      },
      rowHeight: {
        default: "auto"
      },
      rowBgColor: {
        default: "#09613E"
      },
      tabWidth: {
        default: "100%"
      },
      tabHeight: {
        default: "600px"
      }
    },
    setup(c) {
      const s = c;
      Io(o => ({
        "70334ce3": o.tabWidth,
        "7c6755aa": o.tabHeight,
        "5911c82f": u(r),
        f4262ada: u(_),
        e5d07fd4: u(i),
        "41635e0d": o.hColor,
        31354248: u(p)
      }));
      const l = g([])
        , { rowBgColor: i, align: _, hBgColor: p, rowHeight: r } = s
        , d = () => {
          l.value = JSON.parse(JSON.stringify(s.dataSource))
        }
        , v = () => {
          s.columnOptions.forEach((o, h) => {
            if (o.isLockColumn) {
              let y = document.querySelector(`.th_${o.key}_${h}`)
                , T = document.querySelectorAll(`.td_${o.key}`);
              y.style.position = "sticky",
                y.style.top = "-2px",
                y.style.left = "0",
                y.style.zIndex = "11",
                T.forEach($ => {
                  $.style.position = "sticky",
                    $.style.left = "0",
                    $.style.zIndex = "10"
                }
                )
            }
          }
          )
        }
        ;
      return Pe(() => {
        v()
      }
      ),
        Ge(() => s.dataSource, (o, h) => {
          o !== h && (d(),
            v())
        }
          , {
            deep: !0
          }),
        (o, h) => (n(),
          a("div", {
            class: "cuTable",
            style: mt({
              ...o.scroll && {
                overflowX: "auto"
              },
              ...!o.scroll && {
                overflow: "hidden"
              }
            })
          }, [e("div", Zb, [e("table", Jb, [e("tr", e0, [(n(!0),
            a(B, null, G(o.columnOptions, (y, T) => (n(),
              a("th", {
                style: mt({
                  width: y.width || 100 / o.columnOptions.length + "%"
                }),
                key: T + "p",
                class: P(`th_${y.key}_${T} default_header_cell ${o.border ? "" : "noBorder"}`)
              }, [y.isSlotHeader ? pt(o.$slots, y.key + "_head", {
                key: 1,
                item: y
              }, void 0, !0) : (n(),
                a("div", t0, t(y.title), 1))], 6))), 128))]), (n(!0),
                  a(B, null, G(o.dataSource, (y, T) => be((n(),
                    a("tr", {
                      class: "tab_body",
                      key: T + "p1"
                    }, [(n(!0),
                      a(B, null, G(o.columnOptions, ($, b) => (n(),
                        a("td", {
                          key: b + "p2",
                          class: P(`td_${$.key} default_cell ${$.cusTdClass || ""} ${o.border ? "" : "noBorder"}`),
                          style: mt({
                            width: $.width
                          })
                        }, [e("div", s0, [$.isSlot ? M("", !0) : (n(),
                          a("span", n0, t(y[$.key]), 1)), pt(o.$slots, $.key, {
                            item: y
                          }, void 0, !0)])], 6))), 128))])), [[et, o.dataSource && o.dataSource.length > 0]])), 128)), o.dataSource.length === 0 ? (n(),
                            a("tr", a0, [e("td", {
                              colspan: o.columnOptions.length
                            }, [pt(o.$slots, "empty", {}, () => [l0], !0)], 8, o0)])) : M("", !0)])])], 4))
    }
  });
const Yt = K(i0, [["__scopeId", "data-v-c375424d"]])
  , c0 = {
    class: "binguo_bet_count"
  }
  , u0 = {
    class: "bingtip_count_title"
  }
  , r0 = {
    class: "lately"
  }
  , d0 = {
    class: "average_column"
  }
  , _0 = {
    class: "noaverage_column"
  }
  , v0 = {
    class: "average_column"
  }
  , p0 = {
    class: "noaverage_column"
  }
  , m0 = {
    class: "progress_box"
  }
  , h0 = {
    class: "progress"
  }
  , f0 = {
    class: "tit"
  }
  , g0 = {
    class: "progress"
  }
  , y0 = {
    class: "tit"
  }
  , b0 = {
    class: "progress"
  }
  , $0 = {
    class: "tit"
  }
  , k0 = {
    class: "bingtip_count_title"
  }
  , T0 = {
    class: "alike_column"
  }
  , w0 = {
    class: "big"
  }
  , C0 = {
    class: "bingtip_count_title two_title"
  }
  , N0 = {
    class: "alike_column"
  }
  , L0 = {
    class: "big"
  }
  , I0 = U({
    __name: "BinguoBetCount",
    setup(c) {
      const { store: s, filterStyle: l } = Jt()
        , { t: i } = ye()
        , _ = ee(() => {
          var v, o, h, y;
          return (v = s.smallAndBigTrend) != null && v.bigCount ? ((o = s.smallAndBigTrend) == null ? void 0 : o.bigCount) + ((h = s.smallAndBigTrend) == null ? void 0 : h.smallCount) + ((y = s.smallAndBigTrend) == null ? void 0 : y.equalCount) : 0
        }
        )
        , p = g([{
          title: i("xosoTxt60"),
          key: "number",
          isSlot: !0,
          cusTdClass: "sum_column"
        }, {
          title: i("binguoAvgCount"),
          key: "avgCount",
          isSlot: !0
        }, {
          title: i("binguoNotOpenCount"),
          key: "notOpenCount",
          isSlot: !0
        }])
        , r = g([{
          title: i("numbersMatch"),
          key: "number",
          isSlot: !0,
          cusTdClass: "sum_column"
        }, {
          title: i("binguoOpenCount"),
          key: "openCount",
          isSlot: !1
        }, {
          title: i("binguoAvgCount"),
          key: "avgCount",
          isSlot: !1
        }, {
          title: i("binguoNotOpenCount"),
          key: "notOpenCount",
          isSlot: !1
        }])
        , d = ee(() => {
          let v = sa(r.value);
          return v[0].title = i("sameNum"),
            v
        }
        );
      return (v, o) => {
        var y, T, $, b, f, k;
        const h = V("van-progress");
        return n(),
          a("div", c0, [e("div", u0, t(v.$t("binguoLastIssue")), 1), e("div", r0, [R(Yt, {
            "column-options": p.value,
            "data-source": u(s).resultSumTrend.slice(0, 8),
            rowHeight: "40px",
            tabWidth: "49.6%",
            tabHeight: "100%",
            border: !1
          }, {
            number: A(({ item: w }) => [e("div", {
              class: P(`sum_column ${u(l)(w.number)}`)
            }, t(w.number), 3)]),
            avgCount: A(({ item: w }) => [e("div", d0, t(w.avgCount), 1)]),
            notOpenCount: A(({ item: w }) => [e("div", _0, t(w.notOpenCount), 1)]),
            _: 1
          }, 8, ["column-options", "data-source"]), R(Yt, {
            "column-options": p.value,
            "data-source": u(s).resultSumTrend.slice(8, 16),
            rowHeight: "40px",
            tabWidth: "49.6%",
            tabHeight: "100%",
            border: !1
          }, {
            number: A(({ item: w }) => [e("div", {
              class: P(`sum_column ${u(l)(w.number)}`)
            }, t(w.number), 3)]),
            avgCount: A(({ item: w }) => [e("div", v0, t(w.avgCount), 1)]),
            notOpenCount: A(({ item: w }) => [e("div", p0, t(w.notOpenCount), 1)]),
            _: 1
          }, 8, ["column-options", "data-source"])]), e("div", m0, [e("div", h0, [e("div", f0, [e("span", null, t(v.$t("small")), 1), e("div", null, [W(t(v.$t("binguoAppeared")), 1), e("span", null, t((y = u(s).smallAndBigTrend) == null ? void 0 : y.smallCount), 1)])]), R(h, {
            percentage: ((T = u(s).smallAndBigTrend) == null ? void 0 : T.smallCount) / _.value * 100,
            "stroke-width": "10",
            "track-color": "#0A603E",
            color: "#5DBA47"
          }, null, 8, ["percentage"])]), e("div", g0, [e("div", y0, [e("span", null, t(v.$t("binguoHe")), 1), e("div", null, [W(t(v.$t("binguoAppeared")), 1), e("span", null, t(($ = u(s).smallAndBigTrend) == null ? void 0 : $.equalCount), 1)])]), R(h, {
            percentage: ((b = u(s).smallAndBigTrend) == null ? void 0 : b.equalCount) / _.value * 100,
            "stroke-width": "10",
            "track-color": "#0A603E",
            color: "#F9BC36"
          }, null, 8, ["percentage"])]), e("div", b0, [e("div", $0, [e("span", null, t(v.$t("k3Big")), 1), e("div", null, [W(t(v.$t("binguoAppeared")), 1), e("span", null, t((f = u(s).smallAndBigTrend) == null ? void 0 : f.bigCount), 1)])]), R(h, {
            percentage: ((k = u(s).smallAndBigTrend) == null ? void 0 : k.bigCount) / _.value * 100,
            "stroke-width": "10",
            "track-color": "#0A603E",
            color: "#5DBA47"
          }, null, 8, ["percentage"])])]), e("div", k0, t(v.$t("binguoThirdAlike")), 1), R(Yt, {
            "column-options": r.value,
            "data-source": u(s).threeSameTrend,
            rowHeight: "40px",
            tabWidth: "100%",
            tabHeight: "100%",
            border: !1,
            class: "binguoCountTable"
          }, {
            number: A(({ item: w }) => [e("div", T0, [(n(!0),
              a(B, null, G((w.number + "").split(""), m => (n(),
                a("div", w0, t(m), 1))), 256))])]),
            _: 1
          }, 8, ["column-options", "data-source"]), e("div", C0, t(v.$t("binguoTwoAlike")), 1), R(Yt, {
            "column-options": d.value,
            "data-source": u(s).twoSameTrend,
            rowHeight: "40px",
            tabWidth: "100%",
            tabHeight: "100%",
            border: !1,
            class: "binguoCountTable"
          }, {
            number: A(({ item: w }) => [e("div", N0, [(n(!0),
              a(B, null, G((w.number + "").split(""), m => (n(),
                a("div", L0, t(m), 1))), 256))])]),
            _: 1
          }, 8, ["column-options", "data-source"])])
      }
    }
  });
const R0 = K(I0, [["__scopeId", "data-v-0c2d4a4c"]])
  , vs = c => (De("data-v-f1b0d287"),
    c = c(),
    Ae(),
    c)
  , x0 = {
    class: "binguo_detail"
  }
  , S0 = {
    class: "bingtip_count_title"
  }
  , B0 = {
    class: "result1"
  }
  , M0 = {
    class: "column_list"
  }
  , P0 = {
    class: "bingtip_count_title"
  }
  , G0 = {
    class: "record_list"
  }
  , D0 = {
    class: "record_item"
  }
  , A0 = {
    class: "item"
  }
  , O0 = {
    key: 1
  }
  , z0 = {
    class: "bingtip_count_title"
  }
  , q0 = {
    class: "issueNo_head"
  }
  , W0 = {
    class: "issue_text"
  }
  , E0 = {
    class: "issue_number"
  }
  , F0 = vs(() => e("div", {
    class: "ball"
  }, "1", -1))
  , j0 = vs(() => e("div", {
    class: "ball"
  }, "2", -1))
  , V0 = vs(() => e("div", {
    class: "ball"
  }, "3", -1))
  , H0 = vs(() => e("div", {
    class: "ball"
  }, "4", -1))
  , U0 = vs(() => e("div", {
    class: "ball"
  }, "5", -1))
  , K0 = vs(() => e("div", {
    class: "ball"
  }, "6", -1))
  , X0 = {
    class: "issueNo_column"
  }
  , Q0 = U({
    __name: "BinguoDetail",
    setup(c) {
      const { t: s } = ye()
        , l = g([{
          title: s("betNumber"),
          key: "issueNo",
          isSlotHeader: !0,
          isSlot: !0,
          width: "28%"
        }, {
          title: "1",
          key: "num1",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: "2",
          key: "num2",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: "3",
          key: "num3",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: "4",
          key: "num4",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: "5",
          key: "num5",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: "6",
          key: "num6",
          isSlotHeader: !0,
          isSlot: !0,
          width: "10%"
        }, {
          title: s("gameRecordTotal"),
          key: "sum",
          isSlot: !0,
          width: "10%"
        }])
        , { filterStyle: i, last50Result: _, last50Record: p, last50RecordResult: r } = Jt();
      return (d, v) => (n(),
        a("div", x0, [e("div", S0, t(d.$t("binguoLast50")), 1), e("div", B0, [(n(!0),
          a(B, null, G(u(_), o => (n(),
            a("div", M0, [(n(!0),
              a(B, null, G(o, h => (n(),
                a("div", {
                  class: P(`item ${u(i)(h)}`)
                }, t(h), 3))), 256))]))), 256))]), e("div", P0, t(d.$t("binguoLast50Record")), 1), e("div", G0, [(n(!0),
                  a(B, null, G(u(p), o => (n(),
                    a("div", D0, [(n(!0),
                      a(B, null, G(o, h => (n(),
                        a("div", A0, [h ? (n(),
                          a("div", {
                            key: 0,
                            class: P(`${u(i)(h)}`)
                          }, t(h), 3)) : (n(),
                            a("div", O0))]))), 256))]))), 256))]), e("div", z0, t(d.$t("binguoRecordResult")), 1), R(Yt, {
                              "column-options": l.value,
                              "data-source": u(r),
                              rowHeight: "30px",
                              tabWidth: "100%",
                              hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
                              tabHeight: "100%",
                              border: !0,
                              hColor: "#FFF880"
                            }, {
                              issueNo_head: A(() => [e("div", q0, [e("span", W0, t(d.$t("betNumber")), 1), e("span", E0, t(d.$t("binguoNumber")), 1)])]),
                              num1_head: A(() => [F0]),
                              num2_head: A(() => [j0]),
                              num3_head: A(() => [V0]),
                              num4_head: A(() => [H0]),
                              num5_head: A(() => [U0]),
                              num6_head: A(() => [K0]),
                              issueNo: A(({ item: o }) => [e("div", X0, t(o.issueNo), 1)]),
                              sum: A(({ item: o }) => [e("div", {
                                class: P(`sum_column ${u(i)(o.sum)}`)
                              }, t(o.sum), 3)]),
                              num1: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num1}`)
                              }, [(n(!0),
                                a(B, null, G(o.num1, () => (n(),
                                  a("div"))), 256))], 2)]),
                              num2: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num2}`)
                              }, [(n(!0),
                                a(B, null, G(o.num2, () => (n(),
                                  a("div"))), 256))], 2)]),
                              num3: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num3}`)
                              }, [(n(!0),
                                a(B, null, G(o.num3, () => (n(),
                                  a("div"))), 256))], 2)]),
                              num4: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num4}`)
                              }, [(n(!0),
                                a(B, null, G(o.num4, () => (n(),
                                  a("div"))), 256))], 2)]),
                              num5: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num5}`)
                              }, [(n(!0),
                                a(B, null, G(o.num5, () => (n(),
                                  a("div"))), 256))], 2)]),
                              num6: A(({ item: o }) => [e("div", {
                                class: P(`num_column num_column${o.num6}`)
                              }, [(n(!0),
                                a(B, null, G(o.num6, () => (n(),
                                  a("div"))), 256))], 2)]),
                              _: 1
                            }, 8, ["column-options", "data-source"])]))
    }
  });
const Y0 = K(Q0, [["__scopeId", "data-v-f1b0d287"]])
  , mn = c => (De("data-v-596004d5"),
    c = c(),
    Ae(),
    c)
  , Z0 = {
    class: "trend_container"
  }
  , J0 = {
    class: "trend_header"
  }
  , e$ = {
    class: "trend_header_title"
  }
  , t$ = mn(() => e("span", null, "7", -1))
  , s$ = mn(() => e("br", null, null, -1))
  , n$ = mn(() => e("span", null, "100", -1))
  , a$ = ["src"]
  , o$ = ["src"]
  , l$ = {
    class: "trend_table"
  }
  , i$ = {
    class: "trend_tip"
  }
  , c$ = {
    class: "tip_text"
  }
  , u$ = {
    key: 0
  }
  , r$ = {
    key: 0
  }
  , d$ = {
    class: "custom_column"
  }
  , _$ = {
    class: "custom_column winmount_column"
  }
  , v$ = U({
    __name: "BinguoTrend",
    setup(c) {
      const { store: s } = Jt()
        , { t: l } = ye()
        , i = g([{
          title: "Top",
          key: "rankID",
          isSlot: !0,
          width: "20%",
          cusTdClass: "rankID_column"
        }, {
          title: l("account"),
          key: "userName",
          width: "38%",
          isSlot: !0
        }, {
          title: l("winningAmount"),
          width: "42%",
          key: "winAmount",
          isSlot: !0
        }])
        , _ = $e()
        , p = () => {
          s.isTrend || _.back()
        }
        ;
      return (r, d) => (n(),
        a("div", Z0, [e("div", J0, [e("div", e$, [W(t(r.$t("binguoLately")), 1), t$, W(t(r.$t("days")), 1), s$, W(" " + t(r.$t("binguoQian")), 1), n$, W(t(r.$t("binguoMin") + r.$t("binguoPaimin")), 1)]), e("img", {
          src: u(re)("home/AllLotteryGames/binguo", "trend1"),
          class: "trend1",
          alt: ""
        }, null, 8, a$), e("img", {
          src: u(re)("home/AllLotteryGames/binguo", "trend2"),
          class: "trend2",
          alt: ""
        }, null, 8, o$)]), e("div", l$, [e("div", i$, [e("div", c$, [W(t(u(s).isTrend ? r.$t("binguoMyLead") : r.$t("binguoNotBoard")) + " ", 1), u(s).isTrend ? M("", !0) : (n(),
          a("br", u$)), W(" " + t(u(s).isTrend ? "" : r.$t("binguoGoPlay")), 1)]), e("div", {
            class: "trend_go",
            onClick: p
          }, [W(t(u(s).isTrend ? u(s).userRank : "GO") + " ", 1), u(s).isTrend ? (n(),
            a("span", r$, t(r.$t("binguoMin")), 1)) : M("", !0)])]), R(Yt, {
              "column-options": i.value,
              "data-source": u(s).trendList,
              rowHeight: "50px",
              tabWidth: "100%",
              hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
              tabHeight: "100%",
              border: !1,
              hColor: "#FFF880"
            }, {
              rankID: A(({ item: v }) => [e("div", {
                class: P(["rankID_column", `${v.rankID < 4 ? "top_" + v.rankID : "rank_text"}`])
              }, t(v.rankID > 3 ? v.rankID : ""), 3)]),
              userName: A(({ item: v }) => [e("div", d$, t(v.userName), 1)]),
              winAmount: A(({ item: v }) => [e("div", _$, t(u(Re)(v.winAmount)), 1)]),
              _: 1
            }, 8, ["column-options", "data-source"])])]))
    }
  });
const p$ = K(v$, [["__scopeId", "data-v-596004d5"]])
  , m$ = {
    class: "last7Day_container"
  }
  , h$ = {
    class: "bingtip_count_title"
  }
  , f$ = {
    class: "column_time"
  }
  , g$ = {
    key: 0,
    class: "result"
  }
  , y$ = {
    class: "quan"
  }
  , b$ = {
    key: 0,
    class: "result"
  }
  , $$ = {
    class: "quan"
  }
  , k$ = {
    key: 0,
    class: "result"
  }
  , T$ = {
    class: "quan"
  }
  , w$ = {
    key: 0,
    class: "result"
  }
  , C$ = {
    class: "quan"
  }
  , N$ = {
    key: 0,
    class: "result"
  }
  , L$ = {
    class: "quan"
  }
  , I$ = {
    key: 0,
    class: "result"
  }
  , R$ = {
    class: "quan"
  }
  , x$ = {
    key: 0,
    class: "result"
  }
  , S$ = {
    class: "quan"
  }
  , B$ = U({
    __name: "BinguoLast7Day",
    setup(c) {
      const { store: s, columnOptions: l, filterStyle: i } = Jt();
      return (_, p) => (n(),
        a("div", m$, [e("div", h$, t(_.$t("binguoLast7Result")), 1), R(Yt, {
          "column-options": u(l),
          "data-source": u(s).last7Day,
          rowHeight: "40px",
          "tab-height": "1200px"
        }, {
          issueEndTime: A(({ item: r }) => [e("div", f$, t(r.issueEndTime), 1)]),
          time_index_0: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_0 ? (n(),
              a("div", g$, [e("div", y$, [(n(!0),
                a(B, null, G((d = r.time_index_0) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_0) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_0) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_1: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_1 ? (n(),
              a("div", b$, [e("div", $$, [(n(!0),
                a(B, null, G((d = r.time_index_1) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_1) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_1) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_2: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_2 ? (n(),
              a("div", k$, [e("div", T$, [(n(!0),
                a(B, null, G((d = r.time_index_2) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_2) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_2) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_3: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_3 ? (n(),
              a("div", w$, [e("div", C$, [(n(!0),
                a(B, null, G((d = r.time_index_3) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_3) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_3) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_4: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_4 ? (n(),
              a("div", N$, [e("div", L$, [(n(!0),
                a(B, null, G((d = r.time_index_4) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_4) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_4) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_5: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_5 ? (n(),
              a("div", I$, [e("div", R$, [(n(!0),
                a(B, null, G((d = r.time_index_5) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_5) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_5) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          time_index_6: A(({ item: r }) => {
            var d, v, o;
            return [r.time_index_6 ? (n(),
              a("div", x$, [e("div", S$, [(n(!0),
                a(B, null, G((d = r.time_index_6) == null ? void 0 : d.result.split(""), h => (n(),
                  a("div", null, t(h), 1))), 256))]), e("div", {
                    class: P(["result_sum", u(i)((v = r.time_index_6) == null ? void 0 : v.resultSum)])
                  }, t((o = r.time_index_6) == null ? void 0 : o.resultSum), 3)])) : M("", !0)]
          }
          ),
          _: 1
        }, 8, ["column-options", "data-source"])]))
    }
  });
const M$ = K(B$, [["__scopeId", "data-v-5e5628ad"]])
  , P$ = {
    class: "binguo_count"
  }
  , G$ = U({
    __name: "index",
    setup(c) {
      const { store: s, getTrendstatistics: l, getLotteryRankList: i, getLotteryResult7Day: _, getBingo18Last50Result: p } = Jt()
        , r = $e()
        , d = () => {
          r.back()
        }
        ;
      return Ge(() => s.currentTabIndex, v => {
        switch (v) {
          case 0:
            l();
            break;
          case 1:
            p();
            break;
          case 2:
            _();
            break;
          case 3:
            i();
            break
        }
      }
        , {
          immediate: !0
        }),
        (v, o) => {
          const h = V("NavBar");
          return n(),
            a("div", P$, [R(h, {
              "left-arrow": "",
              onClickLeft: d,
              backgroundColor: "#0a4529",
              title: `${v.$t("binguoCount")}`
            }, null, 8, ["title"]), R(Qb), u(s).currentTabIndex === 0 ? (n(),
              se(R0, {
                key: 0
              })) : M("", !0), u(s).currentTabIndex === 1 ? (n(),
                se(Y0, {
                  key: 1
                })) : M("", !0), u(s).currentTabIndex === 2 ? (n(),
                  se(M$, {
                    key: 2
                  })) : M("", !0), u(s).currentTabIndex === 3 ? (n(),
                    se(p$, {
                      key: 3
                    })) : M("", !0)])
        }
    }
  });
const i7 = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: G$
}, Symbol.toStringTag, {
  value: "Module"
}))
  , Ds = c => (De("data-v-1f6155ee"),
    c = c(),
    Ae(),
    c)
  , D$ = {
    class: "body-container"
  }
  , A$ = {
    class: "MyGameRecordList__C"
  }
  , O$ = ["onClick"]
  , z$ = {
    class: "MyGameRecordList__C_left"
  }
  , q$ = {
    class: "MyGameRecordList__C-item-m"
  }
  , W$ = {
    class: "MyGameRecordList__C-item-m-top"
  }
  , E$ = {
    class: "MyGameRecordList__C-item-m-bottom"
  }
  , F$ = {
    key: 0
  }
  , j$ = {
    key: 0,
    class: "MyGameRecordList__C-detail"
  }
  , V$ = {
    class: "detail_title"
  }
  , H$ = {
    class: "detail_item"
  }
  , U$ = {
    class: "item_title"
  }
  , K$ = {
    class: "item_result"
  }
  , X$ = ["onClick"]
  , Q$ = Ds(() => e("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1))
  , Y$ = Ds(() => e("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
  }, null, -1))
  , Z$ = [Q$, Y$]
  , J$ = {
    class: "detail_item"
  }
  , e2 = {
    class: "item_title"
  }
  , t2 = {
    class: "item_result"
  }
  , s2 = ["onClick"]
  , n2 = Ds(() => e("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1))
  , a2 = Ds(() => e("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
  }, null, -1))
  , o2 = [n2, a2]
  , l2 = {
    class: "detail_item"
  }
  , i2 = {
    class: "item_title"
  }
  , c2 = {
    class: "item_result"
  }
  , u2 = {
    class: "detail_item"
  }
  , r2 = {
    class: "item_title"
  }
  , d2 = {
    class: "item_result"
  }
  , _2 = {
    class: "detail_item"
  }
  , v2 = {
    class: "item_title"
  }
  , p2 = {
    class: "item_result"
  }
  , m2 = {
    class: "detail_item"
  }
  , h2 = {
    class: "item_title"
  }
  , f2 = {
    class: "item_result"
  }
  , g2 = {
    class: "detail_item"
  }
  , y2 = {
    class: "item_title"
  }
  , b2 = {
    class: "item_result"
  }
  , $2 = {
    class: "detail_item"
  }
  , k2 = {
    class: "item_title"
  }
  , T2 = {
    class: "item_result"
  }
  , w2 = {
    class: "draw_result"
  }
  , C2 = {
    class: "detail_item"
  }
  , N2 = {
    class: "item_title"
  }
  , L2 = {
    key: 1,
    class: "item_result"
  }
  , I2 = {
    class: "detail_item"
  }
  , R2 = {
    class: "item_title"
  }
  , x2 = {
    class: "detail_item"
  }
  , S2 = {
    class: "item_title"
  }
  , B2 = {
    class: "item_result"
  }
  , M2 = {
    class: "detail_item"
  }
  , P2 = {
    class: "item_title"
  }
  , G2 = {
    class: "item_result"
  }
  , D2 = U({
    __name: "RecordList",
    props: {
      mayrecord: {}
    },
    setup(c) {
      const { t: s } = ye()
        , { filterGameType: l } = Jt()
        , i = g(-1)
        , _ = d => {
          i.value == d ? i.value = -1 : i.value = d
        }
        , p = (d, v) => {
          if (v == 1)
            switch (d) {
              case 0:
                return s("bettingResultState3");
              case 1:
                return s("hasWon");
              case 2:
                return s("bettingResultState1");
              case 3:
                return s("xosoTxt76");
              default:
                return ""
            }
          else
            switch (d) {
              case 0:
                return "fail";
              case 1:
                return "success";
              case 2:
                return "wait";
              case 3:
                return "ing";
              default:
                return "ing"
            }
        }
        , r = d => {
          switch (d) {
            case "Big":
              return s("big");
            case "Drawn":
              return s("binguoHe");
            case "Small":
              return s("small");
            default:
              return d
          }
        }
        ;
      return (d, v) => (n(),
        a("div", D$, [e("div", A$, [(n(!0),
          a(B, null, G(d.mayrecord, (o, h) => (n(),
            a(B, {
              key: h
            }, [e("div", {
              class: "MyGameRecordList__C-item",
              onClick: y => _(h)
            }, [e("div", {
              class: P(["MyGameRecordList__C-item-l", u(l)(Number(o.gameType), o.selectType).className])
            }, t(r(o.selectType)), 3), e("div", z$, [e("div", q$, [e("div", W$, t(o.issueNumber), 1), e("div", E$, t(o.addTime), 1)]), e("div", {
              class: P(["MyGameRecordList__C-item-r", p(o.state, 2)])
            }, [e("div", {
              class: P(p(o.state, 2))
            }, t(p(o.state, 1)), 3), o.premium ? (n(),
              a("span", F$, t(u(Re)(o.profitAmount)), 1)) : M("", !0)], 2)])], 8, O$), h == i.value ? (n(),
                a("div", j$, [e("div", V$, t(d.$t("details")), 1), e("div", H$, [e("div", U$, t(d.$t("orderNoMay")), 1), e("div", K$, [W(t(o.orderNumber) + " ", 1), (n(),
                  a("svg", {
                    onClick: y => u(Vt)(o.orderNumber),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none"
                  }, Z$, 8, X$))])]), e("div", J$, [e("div", e2, t(d.$t("issueMay")), 1), e("div", t2, [W(t(o.issueNumber) + " ", 1), (n(),
                    a("svg", {
                      onClick: y => u(Vt)(o.issueNumber),
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, o2, 8, s2))])]), e("div", l2, [e("div", i2, t(d.$t("gamePlay")), 1), e("div", c2, t(u(l)(Number(o.gameType), o.selectType).playerName), 1)]), e("div", u2, [e("div", r2, t(d.$t("amountMay")), 1), e("div", d2, t(o.amount), 1)]), e("div", _2, [e("div", v2, t(d.$t("multiple")), 1), e("div", p2, t(o.figure), 1)]), e("div", m2, [e("div", h2, t(d.$t("afterTaxAmount")), 1), e("div", f2, t(o.realAmount), 1)]), e("div", g2, [e("div", y2, t(d.$t("tax")), 1), e("div", b2, t(o.serviceCharge || "-"), 1)]), e("div", $2, [e("div", k2, t(d.$t("winTips3")), 1), e("div", T2, [e("div", {
                      class: P(["draw_num", `${o.sumCount ? u(l)(Number(o.gameType), o.selectType).className : ""}`])
                    }, t(o.sumCount || "-"), 3), o.premium ? (n(!0),
                      a(B, {
                        key: 0
                      }, G(o.premium.split(""), y => (n(),
                        a("div", w2, t(y), 1))), 256)) : M("", !0)])]), e("div", C2, [e("div", N2, t(d.$t("betting")), 1), o.gameType === "2" || o.gameType === "1" ? (n(),
                          a("div", {
                            key: 0,
                            class: P(["item_result item_bet", `${u(l)(Number(o.gameType), o.selectType).className}`])
                          }, t(o.selectType), 3)) : (n(),
                            a("div", L2, [(n(!0),
                              a(B, null, G(o.selectType.split(""), y => (n(),
                                a("div", {
                                  class: P(["item_result item_bet item_alike", `${u(l)(Number(o.gameType), o.selectType).className}`])
                                }, t(y), 3))), 256))]))]), e("div", I2, [e("div", R2, t(d.$t("statusMay")), 1), e("div", {
                                  class: P(["item_result", p(o.state, 2)])
                                }, t(p(o.state, 1)), 3)]), e("div", x2, [e("div", S2, t(d.$t("winOrLose")), 1), e("div", B2, t(o.profitAmount ? u(Re)(o.profitAmount) : "-"), 1)]), e("div", M2, [e("div", P2, t(d.$t("createTime")), 1), e("div", G2, t(o.addTime), 1)])])) : M("", !0)], 64))), 128))])]))
    }
  });
const A2 = K(D2, [["__scopeId", "data-v-1f6155ee"]])
  , O2 = {
    class: "record-container"
  }
  , z2 = {
    class: "WinTrx__C-head-more"
  }
  , q2 = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = () => {
          s.back()
        }
        , i = g([])
        , _ = g({
          pageSize: 20
        })
        , p = () => { }
        , r = () => { }
        , d = g("");
      return (v, o) => {
        const h = V("NavBar");
        return n(),
          a("div", O2, [R(h, {
            "left-arrow": "",
            onClickLeft: l,
            "background-color": "#0a4529",
            title: v.$t("xosoTxt73")
          }, {
            right: A(() => [e("div", z2, [e("div", {
              onClick: o[0] || (o[0] = y => p())
            }), e("div", {
              class: P({
                disableVoice: d.value == "2"
              }),
              onClick: r
            }, null, 2)])]),
            _: 1
          }, 8, ["title"]), R(ca, {
            list: i.value,
            "onUpdate:list": o[1] || (o[1] = y => i.value = y),
            pageQuery: _.value,
            "onUpdate:pageQuery": o[2] || (o[2] = y => _.value = y),
            api: u(Du),
            distance: 100,
            ref: "listRef",
            isAutoLoad: !0
          }, {
            content: A(() => [R(A2, {
              mayrecord: i.value
            }, null, 8, ["mayrecord"])]),
            _: 1
          }, 8, ["list", "pageQuery", "api"])])
      }
    }
  });
const W2 = K(q2, [["__scopeId", "data-v-121431cd"]])
  , c7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: W2
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , E2 = c => (De("data-v-06ed9f7d"),
    c = c(),
    Ae(),
    c)
  , F2 = {
    class: "Betting__Popup"
  }
  , j2 = {
    class: "Betting__Popup-head"
  }
  , V2 = {
    class: "Betting__Popup-head-title"
  }
  , H2 = {
    class: "Betting__Popup-head-selectName"
  }
  , U2 = {
    class: "Betting__Popup-body"
  }
  , K2 = {
    class: "Betting__Popup-body-line"
  }
  , X2 = {
    class: "Betting__Popup-body-line-list"
  }
  , Q2 = ["onClick"]
  , Y2 = {
    class: "Betting__Popup-body-line"
  }
  , Z2 = {
    class: "Betting__Popup-body-line-btnL"
  }
  , J2 = {
    class: "Betting__Popup-body-line"
  }
  , ek = E2(() => e("div", null, null, -1))
  , tk = {
    class: "Betting__Popup-body-line-list"
  }
  , sk = ["onClick"]
  , nk = {
    class: "Betting__Popup-body-line"
  }
  , ak = {
    class: "Betting__Popup-foot"
  }
  , ok = {
    class: "Betting__Popup-foot-s bgcolor"
  }
  , lk = {
    class: "Betting__Popup-PreSale"
  }
  , ik = {
    class: "Betting__Popup-PreSale-head"
  }
  , ck = {
    class: "Betting__Popup-PreSale-body"
  }
  , uk = {
    class: "Betting__Popup-PreSale-foot"
  }
  , rk = U({
    __name: "BettingPopup",
    props: {
      selectInfo: {
        type: Object,
        default: () => ({})
      },
      bettingPopupShow: {
        type: Boolean,
        default: g(!1)
      },
      actionItem: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(c, { emit: s }) {
      const l = c
        , { t: i } = ye()
        , _ = g(!1)
        , p = g(!0)
        , r = ee(() => l.actionItem.scopeList || [])
        , d = g([1, 5, 10, 20, 50, 100])
        , v = ee({
          get() {
            return l.bettingPopupShow || !1
          },
          set(k) {
            s("update:bettingPopupShow", k)
          }
        })
        , o = k => {
          switch (k) {
            case 1:
              l.selectInfo.count > 1 && (l.selectInfo.count--,
                f());
              break;
            case 2:
              l.selectInfo.count++,
                f();
              break
          }
        }
        , h = k => {
          k > 0 && (l.selectInfo.count = parseInt(k),
            f())
        }
        , y = k => {
          l.selectInfo.count = k,
            f()
        }
        , T = k => {
          l.selectInfo.coin = k,
            f()
        }
        , $ = () => {
          _.value = !1,
            p.value = !0
        }
        , b = () => {
          p.value ? s("submitBetting") : ht(i("agreePresaleRules"))
        }
        , f = () => {
          l.selectInfo.allCoin = l.selectInfo.coin * l.selectInfo.count
        }
        ;
      return (k, w) => {
        const m = V("van-field")
          , C = V("van-popup")
          , N = Je("throttle-click");
        return n(),
          a(B, null, [R(C, {
            show: v.value,
            "onUpdate:show": w[6] || (w[6] = S => v.value = S),
            position: "bottom",
            round: !0,
            "close-on-click-overlay": !1
          }, {
            default: A(() => [e("div", F2, [e("div", j2, [e("div", V2, t(c.actionItem.lotteryName), 1), e("div", H2, [e("span", null, t(u(i)("choose")), 1), e("span", null, t(c.selectInfo.selectCon), 1)])]), e("div", U2, [e("div", K2, [W(t(u(i)("amount")) + " ", 1), e("div", X2, [(n(!0),
              a(B, null, G(r.value, (S, L) => (n(),
                a("div", {
                  key: L,
                  class: P(["Betting__Popup-body-line-item", {
                    bgcolor: c.selectInfo.coin == S
                  }]),
                  onClick: x => T(S)
                }, t(S), 11, Q2))), 128))])]), e("div", Y2, [W(t(u(i)("numbers")) + " ", 1), e("div", Z2, [e("div", {
                  class: P(["Betting__Popup-btn", {
                    bgcolor: c.selectInfo.count > 0
                  }]),
                  onClick: w[0] || (w[0] = S => o(1))
                }, "-", 2), R(m, {
                  class: "Betting__Popup-input",
                  modelValue: c.selectInfo.count,
                  "onUpdate:modelValue": w[1] || (w[1] = S => c.selectInfo.count = S),
                  type: "digit",
                  maxlength: 4,
                  onInput: h
                }, null, 8, ["modelValue"]), e("div", {
                  class: "Betting__Popup-btn bgcolor",
                  onClick: w[2] || (w[2] = S => o(2))
                }, "+")])]), e("div", J2, [ek, e("div", tk, [(n(!0),
                  a(B, null, G(d.value, (S, L) => (n(),
                    a("div", {
                      key: L,
                      class: P(["Betting__Popup-body-line-item", {
                        bgcolor: c.selectInfo.count == S
                      }]),
                      onClick: x => y(S)
                    }, " X" + t(S), 11, sk))), 128))])]), e("div", nk, [e("span", {
                      class: P(["Betting__Popup-agree", {
                        active: p.value
                      }]),
                      onClick: w[3] || (w[3] = S => p.value = !p.value)
                    }, t(u(i)("agree")), 3), e("span", {
                      onClick: w[4] || (w[4] = S => _.value = !0),
                      class: "Betting__Popup-preSaleShow"
                    }, t(u(i)("presaleRules")), 1)])]), e("div", ak, [e("div", {
                      class: "Betting__Popup-foot-c",
                      onClick: w[5] || (w[5] = S => s("clearBetting"))
                    }, t(u(i)("cancel")), 1), be((n(),
                      a("div", ok, [W(t(u(i)("totalAmount")) + " " + t(u(Re)(c.selectInfo.count * c.selectInfo.coin || 0)), 1)])), [[N, {
                        handler: b,
                        wait: 2e3
                      }]])])])]),
            _: 1
          }, 8, ["show"]), R(C, {
            show: _.value,
            "onUpdate:show": w[7] || (w[7] = S => _.value = S),
            "close-on-click-overlay": !1,
            round: ""
          }, {
            default: A(() => [e("div", lk, [e("div", ik, t(u(i)("presaleRules")), 1), e("div", ck, t(k.$t("betPopTXT")), 1), e("div", uk, [e("div", {
              class: "Betting__Popup-PreSale-foot-btn",
              onClick: $
            }, t(u(i)("iKonw")), 1)])])]),
            _: 1
          }, 8, ["show"])], 64)
      }
    }
  });
const dk = K(rk, [["__scopeId", "data-v-06ed9f7d"]])
  , _k = {
    class: "changLong__C"
  }
  , vk = {
    class: "changLong__C-bet"
  }
  , pk = {
    class: "changLong__C-bet-l"
  }
  , mk = {
    class: "num"
  }
  , hk = {
    class: "time"
  }
  , fk = {
    class: "other"
  }
  , gk = {
    class: "remark"
  }
  , yk = {
    class: "issue"
  }
  , bk = ["onClick"]
  , $k = ["onClick"]
  , kk = ["onClick"]
  , Tk = ["onClick"]
  , wk = ["onClick"]
  , Ck = ["onClick"]
  , Nk = ["onClick"]
  , Lk = ["onClick"]
  , Ik = ["onClick"]
  , Rk = ["onClick"]
  , xk = ["onClick"]
  , Kn = 5
  , Sk = U({
    __name: "Bet",
    setup(c) {
      const s = Is.global.t
        , l = g(!1)
        , i = g({})
        , _ = g({
          coin: 0,
          count: 1,
          allCoin: 0,
          gametype: 0,
          typeid: 1,
          issuenumber: "2020",
          selecttype: 1,
          selectCon: ""
        })
        , p = Ro([]);
      let r = null;
      const d = (m, C, N, S, L) => {
        if (p.value[C].action = N,
          i.value = m,
          _.value.selectCon = S,
          _.value.coin = m.scopeList[0],
          _.value.typeid = m.type,
          _.value.gametype = m.bettingGameType,
          m.type > 4)
          L == "big" ? _.value.selecttype = "H" : L == "small" ? _.value.selecttype = "L" : _.value.selecttype = L;
        else {
          const x = {
            red: 10,
            green: 11,
            violet: 12,
            big: 13,
            small: 14
          };
          _.value.selecttype = x[L]
        }
        _.value.issuenumber = m.issueNumber,
          l.value = !0
      }
        , v = g(!1)
        , o = async () => {
          if (r && clearInterval(r),
            v.value)
            return;
          v.value = !0;
          const m = await ae(ll({
            gameType: -1
          }));
          if (v.value = !1,
            !m)
            return;
          const C = m.data.serviceTime;
          p.value = m.data.list.map(N => {
            let S = new Date(C).getTime()
              , L = new Date(N.startTime).getTime()
              , x = (S - L) / 1e3;
            return x > N.intervalM * 60 && (x = N.intervalM * 60),
              N.scopeList = N.scope.split("|").map(I => Number(I)),
              N.passTime = Math.floor(N.intervalM * 60 - x),
              N.time1 = 0,
              N.time2 = Math.floor(N.passTime / 60),
              N.time3 = Math.floor(N.passTime % 60 / 10),
              N.time4 = Math.floor(N.passTime % 10),
              N
          }
          ),
            r = setInterval(function () {
              h()
            }, 1e3)
        }
        , h = () => {
          const m = p.value.length;
          let C = !1;
          for (let N = 0; N < m; N++) {
            let S = p.value[N];
            if (S.passTime < Kn && S.issueNumber == i.value.issueNumber && y(),
              S.passTime > 0)
              S.time2 = Math.floor(S.passTime / 60),
                S.time3 = Math.floor(S.passTime % 60 / 10),
                S.time4 = Math.floor(S.passTime % 10),
                S.passTime--;
            else {
              C = !1,
                clearInterval(r),
                o();
              break
            }
            C = S.time3 + S.time4 == 0
          }
          xo(p),
            C && (clearInterval(r),
              o())
        }
        , y = () => {
          l.value = !1;
          let m = p.value.findIndex(C => JSON.stringify(C) == JSON.stringify(i.value));
          m != -1 && (p.value[m].action = 0),
            _.value.coin = i.value.scopeList ? i.value.scopeList[0] : 0,
            _.value.count = 1,
            i.value = {}
        }
        , T = () => {
          const { typeid: m = 0 } = _.value;
          m && (m < 5 ? b() : m < 9 ? k() : f())
        }
        , $ = m => m < 5 ? "winGo" : m < 9 ? "Fd" : "k3"
        , b = async () => {
          const m = await ae(ha({
            typeId: _.value.typeid,
            issuenumber: _.value.issuenumber,
            amount: _.value.coin,
            betCount: Number(_.value.count),
            gameType: _.value.gametype,
            selectType: _.value.selecttype
          }));
          (m == null ? void 0 : m.code) === 0 && (ht(s("code" + m.msgCode)),
            y())
        }
        , f = async () => {
          let { coin: m, count: C, issuenumber: N, gametype: S, selecttype: L, typeid: x } = _.value;
          const I = await ae(fa({
            amount: m,
            betCount: Number(C),
            gameType: S.toString(),
            selectType: L,
            typeId: x,
            issuenumber: N
          }));
          (I == null ? void 0 : I.code) === 0 && (ht(s("code" + I.msgCode)),
            y())
        }
        , k = async () => {
          let { coin: m, count: C, issuenumber: N, gametype: S, selecttype: L, typeid: x } = _.value;
          const I = {
            issuenumber: N,
            typeId: x,
            amount: m,
            betCount: Number(C),
            gameType: S,
            selectType: L
          }
            , O = await ae(da(I));
          (O == null ? void 0 : O.code) === 0 && (ht(s("code" + O.msgCode)),
            y())
        }
        , w = m => m == "H" ? "B" : m.trim() == "L" ? "S" : m;
      return Pe(() => {
        o()
      }
      ),
        Ut(() => {
          clearInterval(r)
        }
        ),
        Ge(() => gt().visibility, m => {
          o()
        }
        ),
        (m, C) => (n(),
          a(B, null, [e("div", _k, [(n(!0),
            a(B, null, G(p.value, (N, S) => (n(),
              a("div", vk, [e("div", pk, [e("div", {
                class: P(["titel", [$(N.type)]])
              }, t(N.lotteryName), 3), e("div", mk, [W(t(N.issueNumber) + " ", 1), e("span", hk, t(`${N.time1}${N.time2}:${N.time3}${N.time4}`), 1)]), e("div", fk, [e("div", gk, t(N.remark), 1), e("div", {
                class: P(["gameResult", "bg-" + N.gameResult])
              }, t(w(N.gameResult)), 3), e("div", yk, t(N.issue) + t(m.$t("betIssues")), 1)])]), e("div", {
                class: P(["changLong__C-bet-r", {
                  disable: N.passTime < Kn
                }])
              }, [N.gameType == 0 ? (n(),
                a(B, {
                  key: 0
                }, [e("div", {
                  class: P({
                    active: N.action == 1
                  }),
                  onClick: L => d(N, S, 1, m.$t("betBig"), "big")
                }, t(m.$t("betBig")), 11, bk), e("div", {
                  class: P({
                    active: N.action == 2
                  }),
                  onClick: L => d(N, S, 2, m.$t("betSmall"), "small")
                }, t(m.$t("betSmall")), 11, $k)], 64)) : M("", !0), N.gameType == 1 ? (n(),
                  a(B, {
                    key: 1
                  }, [e("div", {
                    class: P({
                      active: N.action == 1
                    }),
                    onClick: L => d(N, S, 1, m.$t("betRed"), "red")
                  }, t(m.$t("betRed")), 11, kk), e("div", {
                    class: P({
                      active: N.action == 2
                    }),
                    onClick: L => d(N, S, 2, m.$t("betGreen"), "green")
                  }, t(m.$t("betGreen")), 11, Tk), e("div", {
                    class: P({
                      active: N.action == 3
                    }),
                    onClick: L => d(N, S, 3, m.$t("betPurple"), "violet")
                  }, t(m.$t("betPurple")), 11, wk)], 64)) : M("", !0), N.gameType == 2 ? (n(),
                    a(B, {
                      key: 2
                    }, [e("div", {
                      class: P({
                        active: N.action == 1
                      }),
                      onClick: L => d(N, S, 1, m.$t("betOdd"), "O")
                    }, t(m.$t("betOdd")), 11, Ck), e("div", {
                      class: P({
                        active: N.action == 2
                      }),
                      onClick: L => d(N, S, 2, m.$t("betEven"), "E")
                    }, t(m.$t("betEven")), 11, Nk)], 64)) : M("", !0), N.gameType == 3 ? (n(),
                      a(B, {
                        key: 3
                      }, [e("div", {
                        class: P({
                          active: N.action == 1
                        }),
                        onClick: L => d(N, S, 1, m.$t("betWithSingle"), "O")
                      }, t(m.$t("betWithSingle")), 11, Lk), e("div", {
                        class: P({
                          active: N.action == 2
                        }),
                        onClick: L => d(N, S, 2, m.$t("betWithDouble"), "E")
                      }, t(m.$t("betWithDouble")), 11, Ik)], 64)) : M("", !0), N.gameType == 4 ? (n(),
                        a(B, {
                          key: 4
                        }, [e("div", {
                          class: P({
                            active: N.action == 1
                          }),
                          onClick: L => d(N, S, 1, m.$t("betWithBig"), "H")
                        }, t(m.$t("betWithBig")), 11, Rk), e("div", {
                          class: P({
                            active: N.action == 2
                          }),
                          onClick: L => d(N, S, 2, m.$t("betWithSmall"), "L")
                        }, t(m.$t("betWithSmall")), 11, xk)], 64)) : M("", !0)], 2)]))), 256))]), R(dk, {
                          bettingPopupShow: l.value,
                          selectInfo: _.value,
                          actionItem: i.value,
                          onClearBetting: y,
                          onSubmitBetting: T
                        }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
    }
  });
const Bk = K(Sk, [["__scopeId", "data-v-cd611085"]])
  , Mk = {
    class: "MyGameRecord__C"
  }
  , Pk = {
    key: 0,
    class: "MyGameRecord__C-head"
  }
  , Gk = {
    class: "MyGameRecord__C-body"
  }
  , Dk = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
  }
  , Ak = {
    key: 1,
    class: "MyGameRecord__C-foot"
  }
  , Ok = {
    class: "MyGameRecord__C-foot-page"
  }
  , zk = U({
    __name: "MyGameRecord",
    props: {
      typeid: {},
      ApiFun: {},
      goPathName: {},
      hasHead: {
        type: Boolean,
        default: !0
      }
    },
    setup(c, { expose: s }) {
      const l = c
        , i = $e()
        , _ = g(4)
        , p = g(20)
        , r = g(1)
        , d = g([])
        , v = T => {
          i.push({
            name: T
          })
        }
        , o = () => {
          r.value--,
            y()
        }
        , h = () => {
          r.value++,
            y()
        }
        , y = async (T = !1) => {
          if (l.typeid == null)
            return;
          T && (r.value = 1);
          const [$, b] = await Ze(l.ApiFun({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }));
          b && (d.value = (b == null ? void 0 : b.list) || [],
            _.value = (b == null ? void 0 : b.totalPage) || 0)
        }
        ;
      return s({
        getData: y
      }),
        wt(() => {
          y()
        }
        ),
        (T, $) => {
          const b = V("van-icon");
          return n(),
            a("div", Mk, [T.hasHead ? (n(),
              a("div", Pk, [e("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: $[0] || ($[0] = f => v(T.goPathName))
              }, t(T.$t("more")), 1)])) : M("", !0), e("div", Gk, [d.value.length ? (n(),
                se(vn, {
                  key: 0,
                  mayrecord: d.value
                }, null, 8, ["mayrecord"])) : (n(),
                  a("div", Dk, [R(ut)]))]), d.value.length ? (n(),
                    a("div", Ak, [e("div", {
                      class: P(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: o
                    }, [R(b, {
                      name: "arrow-left",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", Ok, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: h
                    }, [R(b, {
                      name: "arrow",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const hn = K(zk, [["__scopeId", "data-v-5d80657f"]])
  , qk = {
    class: "MyGameRecord__C"
  }
  , Wk = {
    key: 0,
    class: "MyGameRecord__C-head"
  }
  , Ek = {
    class: "MyGameRecord__C-body"
  }
  , Fk = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
  }
  , jk = {
    key: 1,
    class: "MyGameRecord__C-foot"
  }
  , Vk = {
    class: "MyGameRecord__C-foot-page"
  }
  , Hk = U({
    __name: "MyGameRecord",
    props: {
      typeid: {},
      goPathName: {},
      hasHead: {
        type: Boolean,
        default: !0
      }
    },
    setup(c, { expose: s }) {
      const l = c
        , i = $e()
        , _ = g(4)
        , p = g(20)
        , r = g(1)
        , d = g([])
        , v = $ => {
          i.push({
            name: $
          })
        }
        , o = () => {
          r.value--,
            y()
        }
        , h = () => {
          r.value++,
            y()
        }
        , y = async ($ = !1) => {
          if (l.typeid == null)
            return;
          $ && (r.value = 1);
          const b = await ae(ma({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }))
            , f = (b == null ? void 0 : b.data.list) || [];
          for (let k = 0; f.length > k; k++) {
            let w = f[k].gameType.split(",")
              , m = f[k].selectType.split(",");
            for (let C = 0; w.length > C; C++)
              if (w[C] == "1" || w[C] == "2" || w[C] == "3")
                f[k].gameType = "1",
                  f[k].oneList = m;
              else if (w[C] == "5" || w[C] == "6") {
                let N = []
                  , S = []
                  , L = [];
                for (let x = 0; m.length > x; x++) {
                  if (m[x] == "|11|" || m[x] == "|22|" || m[x] == "|33|" || m[x] == "|44|" || m[x] == "|55|" || m[x] == "|66|") {
                    let I = m[x].split("|");
                    I.pop(),
                      I.shift(),
                      N.push(I.join())
                  }
                  if (m[x] == ":11:" || m[x] == ":22:" || m[x] == ":33:" || m[x] == ":44:" || m[x] == ":55:" || m[x] == ":66:") {
                    let I = m[x].split(":");
                    I.pop(),
                      I.shift(),
                      S.push(I.join())
                  }
                  if (m[x] == ":1:" || m[x] == ":2:" || m[x] == ":3:" || m[x] == ":4:" || m[x] == ":5:" || m[x] == ":6:") {
                    let I = m[x].split(":");
                    I.pop(),
                      I.shift(),
                      L.push(I.join())
                  }
                }
                f[k].gameType = "2",
                  f[k].oneList = N,
                  f[k].towList = T(S, L)
              } else if (w[C] == "7" || w[C] == "8") {
                let N = []
                  , S = !1;
                for (let L = 0; m.length > L; L++) {
                  if (m[L] == "|111|" || m[L] == "|222|" || m[L] == "|333|" || m[L] == "|444|" || m[L] == "|555|" || m[L] == "|666|") {
                    let x = m[L].split("|");
                    x.pop(),
                      x.shift(),
                      N.push(x.join())
                  }
                  m[L] == "|AAA|" && (S = !0),
                    f[k].oneList = N,
                    f[k].towList = S,
                    f[k].gameType = "3"
                }
              } else if (w[C] == "9" || w[C] == "10" || w[C] == "4") {
                let N = []
                  , S = !1
                  , L = [];
                for (let x = 0; m.length > x; x++) {
                  if (m[x] == "|1|" || m[x] == "|2|" || m[x] == "|3|" || m[x] == "|4|" || m[x] == "|5|" || m[x] == "|6|") {
                    let I = m[x].split("|");
                    I.pop(),
                      I.shift(),
                      N.push(I.join())
                  }
                  if (m[x] == "|ABC|" && (S = !0),
                    m[x] == ".1." || m[x] == ".2." || m[x] == ".3." || m[x] == ".4." || m[x] == ".5." || m[x] == ".6.") {
                    let I = m[x].split(".");
                    I.pop(),
                      I.shift(),
                      L.push(I.join())
                  }
                }
                f[k].oneList = N,
                  f[k].towList = S,
                  f[k].threeList = L,
                  f[k].gameType = "4"
              }
          }
          d.value = f || [],
            _.value = (b == null ? void 0 : b.data.totalPage) || 0
        }
        , T = ($, b) => {
          let f = [];
          for (var k = 0; $.length > k; k++) {
            let m = $[k]
              , C = [];
            for (var w = 0; b.length > w; w++)
              C.push(b[w]);
            if (C.length > 0) {
              let N = C.sort().join(",");
              f.push(m + "|" + N)
            }
          }
          return f.sort()
        }
        ;
      return s({
        getData: y
      }),
        wt(() => {
          y()
        }
        ),
        ($, b) => {
          const f = V("van-icon");
          return n(),
            a("div", qk, [$.hasHead ? (n(),
              a("div", Wk, [e("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: b[0] || (b[0] = k => v($.goPathName))
              }, t($.$t("more")), 1)])) : M("", !0), e("div", Ek, [d.value.length ? (n(),
                se(Pa, {
                  key: 0,
                  mayrecord: d.value
                }, null, 8, ["mayrecord"])) : (n(),
                  a("div", Fk, [R(ut)]))]), d.value.length ? (n(),
                    a("div", jk, [e("div", {
                      class: P(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: o
                    }, [R(f, {
                      name: "arrow-left",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", Vk, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: h
                    }, [R(f, {
                      name: "arrow",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const Da = K(Hk, [["__scopeId", "data-v-ec82ea10"]])
  , Uk = {
    class: "BetRecord__C"
  }
  , Kk = U({
    __name: "BetRecord",
    setup(c) {
      const s = {
        Win: hn,
        FD: Ma,
        K3: Da
      }
        , l = g()
        , i = g(0)
        , _ = g(0)
        , p = g([{
          name: "WinGo",
          com: "Win"
        }, {
          name: "5D Lotre",
          com: "FD"
        }, {
          name: "K3Lotre",
          com: "K3"
        }])
        , r = g(["1min", "3min", "5min", "10min"])
        , d = g(1)
        , v = () => {
          d.value = i.value * 4 + _.value + 1,
            Xe(() => {
              l.value && l.value.getData()
            }
            )
        }
        ;
      return Pe(() => {
        v()
      }
      ),
        (o, h) => {
          const y = V("van-tab")
            , T = V("van-tabs");
          return n(),
            a("div", Uk, [R(T, {
              class: "BetRecord__C-gameTab",
              active: i.value,
              "onUpdate:active": h[1] || (h[1] = $ => i.value = $),
              onClick: v
            }, {
              default: A(() => [(n(!0),
                a(B, null, G(p.value, ($, b) => (n(),
                  se(y, {
                    key: b,
                    title: $.name
                  }, {
                    default: A(() => [R(T, {
                      class: "BetRecord__C-timeTab",
                      active: _.value,
                      "onUpdate:active": h[0] || (h[0] = f => _.value = f)
                    }, {
                      default: A(() => [(n(!0),
                        a(B, null, G(r.value, (f, k) => (n(),
                          se(y, {
                            key: k,
                            title: f
                          }, null, 8, ["title"]))), 128))]),
                      _: 2
                    }, 1032, ["active"])]),
                    _: 2
                  }, 1032, ["title"]))), 128))]),
              _: 1
            }, 8, ["active"]), (n(),
              se(ft(s[p.value[i.value].com]), {
                ref_key: "RecRef",
                ref: l,
                typeid: d.value,
                "has-head": !1,
                ApiFun: u(un),
                "go-path-name": "0"
              }, null, 8, ["typeid", "ApiFun"]))])
        }
    }
  });
const Xk = K(Kk, [["__scopeId", "data-v-7de531bd"]])
  , Qk = {
    class: "changLong__C"
  }
  , Yk = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = g(0);
      function i() {
        s.go(-1)
      }
      return Pe(() => { }
      ),
        (_, p) => {
          const r = V("NavBar")
            , d = V("van-tab")
            , v = V("van-tabs");
          return n(),
            a("div", Qk, [R(r, {
              "left-arrow": "",
              title: _.$t("loongAssistant"),
              "background-color": "linear-gradient(90deg, #DF2426 0%, #FF504A 100%)",
              onClickLeft: i
            }, null, 8, ["title"]), R(v, {
              class: "changLong__C-tab",
              active: l.value,
              "onUpdate:active": p[0] || (p[0] = o => l.value = o)
            }, {
              default: A(() => [R(d, {
                title: _.$t("latestLoong")
              }, null, 8, ["title"]), R(d, {
                title: _.$t("myBet")
              }, null, 8, ["title"])]),
              _: 1
            }, 8, ["active"]), l.value == 0 ? (n(),
              se(Bk, {
                key: 0
              })) : (n(),
                se(Xk, {
                  key: 1
                }))])
        }
    }
  });
const Zk = K(Yk, [["__scopeId", "data-v-ea71fbe6"]])
  , u7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zk
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Jk = c => (De("data-v-60ededf7"),
    c = c(),
    Ae(),
    c)
  , eT = {
    class: "K3TL__C"
  }
  , tT = {
    class: "K3TL__C-l1"
  }
  , sT = {
    class: "left"
  }
  , nT = {
    class: "K3TL__C-l2"
  }
  , aT = {
    class: "K3TL__C-time"
  }
  , oT = Jk(() => e("div", {
    notime: ""
  }, ":", -1))
  , lT = {
    class: "K3TL__C-l3"
  }
  , iT = {
    class: "box"
  }
  , cT = U({
    __name: "TimeLeft",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
      },
      premium: {
        type: String,
        default: "666"
      },
      currentGame: {
        type: Object,
        default: () => ({})
      }
    },
    setup(c) {
      const s = c
        , l = ee(() => [...s.premium])
        , i = g(!1)
        , _ = Kt()
        , p = () => {
          i.value = !0,
            _.getK3Rule(s.currentGame.typeID)
        }
        ;
      return (r, d) => (n(),
        a(B, null, [e("div", eT, [e("div", tT, [e("div", sT, [e("div", null, t(r.$t("k3Number")), 1), e("div", {
          class: "K3TL__C-rule",
          onClick: p
        }, t(r.$t("winTrxIndicate")), 1)]), e("div", null, t(r.$t("k3TimeLeftToBuy")), 1)]), e("div", nT, [e("div", null, t(s.currentInfo.gameNo), 1), e("div", aT, [e("div", null, t(c.currentInfo.time1), 1), e("div", null, t(c.currentInfo.time2), 1), oT, e("div", null, t(c.currentInfo.time3), 1), e("div", null, t(c.currentInfo.time4), 1)])]), e("div", lT, [e("div", iT, [(n(!0),
          a(B, null, G(l.value, (v, o) => (n(),
            a("div", {
              key: o,
              class: P(["num" + v])
            }, null, 2))), 128))])])]), R(Bs, {
              howPlayShow: i.value,
              gamePresentation: c.currentGame.gamePresentation,
              onClose: d[0] || (d[0] = v => i.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
  });
const uT = K(cT, [["__scopeId", "data-v-60ededf7"]])
  , rT = {
    class: "K3B__C-bettingList"
  }
  , dT = ["onClick"]
  , _T = {
    key: 1,
    class: ""
  }
  , vT = {
    key: 2,
    class: "K3B__C-odds-rate"
  }
  , pT = {
    key: 3,
    class: "K3B__C-odds-rate"
  }
  , mT = {
    key: 4,
    class: "K3B__C-odds-rate"
  }
  , hT = U({
    __name: "Betting1",
    props: {
      OddsList: {},
      betnumList: {}
    },
    emits: ["showP", "upAll"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , { t: _ } = ye()
        , p = g([{
          num: 3,
          odds: 191.16,
          chack: !1
        }, {
          num: 4,
          odds: 63.72,
          chack: !1
        }, {
          num: 5,
          odds: 31.86,
          chack: !1
        }, {
          num: 6,
          odds: 19.11,
          chack: !1
        }, {
          num: 7,
          odds: 12.74,
          chack: !1
        }, {
          num: 8,
          odds: 9.1,
          chack: !1
        }, {
          num: 9,
          odds: 7.64,
          chack: !1
        }, {
          num: 10,
          odds: 7.08,
          chack: !1
        }, {
          num: 11,
          odds: 7.08,
          chack: !1
        }, {
          num: 12,
          odds: 7.64,
          chack: !1
        }, {
          num: 13,
          odds: 9.1,
          chack: !1
        }, {
          num: 14,
          odds: 12.74,
          chack: !1
        }, {
          num: 15,
          odds: 19.11,
          chack: !1
        }, {
          num: 16,
          odds: 31.86,
          chack: !1
        }, {
          num: 17,
          odds: 63.72,
          chack: !1
        }, {
          num: 18,
          odds: 191.16,
          chack: !1
        }, {
          num: "A",
          odds: 2,
          chack: !1
        }, {
          num: "B",
          odds: 2,
          chack: !1
        }, {
          num: "C",
          odds: 2,
          chack: !1
        }, {
          num: "D",
          odds: 2,
          chack: !1
        }])
        , r = T => {
          switch (T) {
            case "A":
              return _("k3Big");
            case "B":
              return _("k3Small");
            case "C":
              return _("k3Odd");
            case "D":
              return _("k3Even");
            default:
              return T
          }
        }
        , d = (T, $) => {
          $ < 16 ? p.value[$].chack ? h(T, $) : (i.betnumList.push(T.num),
            p.value[$].chack = !0) : v(T, $),
            i.betnumList.length > 0 ? l("showP", !0) : l("showP", !1),
            l("upAll")
        }
        , v = (T, $) => {
          switch ($) {
            case 16:
              o(T, $, 17);
              break;
            case 17:
              o(T, $, 16);
              break;
            case 18:
              o(T, $, 19);
              break;
            case 19:
              o(T, $, 18);
              break
          }
        }
        , o = (T, $, b) => {
          p.value[b].chack && h(p.value[b], b),
            p.value[$].chack ? h(T, $) : (i.betnumList.push(T.num),
              p.value[$].chack = !0)
        }
        , h = (T, $) => {
          p.value[$].chack = !1;
          let b = i.betnumList.indexOf(T.num);
          b > -1 && i.betnumList.splice(b, 1)
        }
        ;
      return s({
        clearList: () => {
          p.value = p.value.map(T => (T.chack = !1,
            T))
        }
      }),
        (T, $) => (n(),
          a("div", rT, [(n(!0),
            a(B, null, G(p.value, (b, f) => (n(),
              a("div", {
                class: P("num num" + b.num),
                key: f,
                onClick: k => d(b, f)
              }, [f < 16 ? (n(),
                a("div", {
                  key: 0,
                  class: P(f % 2 == 0 ? "ball rball" : "ball gball")
                }, [e("div", {
                  class: P("K3B__C-odds-bet num" + b.num)
                }, t(r(b.num)), 3)], 2)) : (n(),
                  a("div", _T, t(r(b.num)), 1)), f < 16 ? (n(),
                    a("div", vT, t(i.OddsList[f] && (i.OddsList[f].playRate || i.OddsList[f].playRate_Original)) + "X ", 1)) : f < 18 ? (n(),
                      a("div", pT, t(i.OddsList[16] && (i.OddsList[16].playRate || i.OddsList[16].playRate_Original)) + "X ", 1)) : (n(),
                        a("div", mT, t(i.OddsList[17] && (i.OddsList[17].playRate || i.OddsList[17].playRate_Original)) + "X ", 1))], 10, dT))), 128))]))
    }
  });
const fT = K(hT, [["__scopeId", "data-v-01cf71e0"]])
  , gT = {
    class: "K3B__C-betting2"
  }
  , yT = {
    class: "K3B__C-betting2-tip1"
  }
  , bT = {
    key: 0
  }
  , $T = {
    class: "K3B__C-betting2-line1 mb30"
  }
  , kT = ["onClick"]
  , TT = {
    class: "K3B__C-betting2-tip1"
  }
  , wT = {
    key: 0
  }
  , CT = {
    class: "K3B__C-betting2-line2"
  }
  , NT = ["onClick"]
  , LT = {
    class: ""
  }
  , IT = {
    class: "K3B__C-betting2-line3"
  }
  , RT = ["onClick"]
  , xT = {
    class: ""
  }
  , ST = U({
    __name: "Betting2",
    props: {
      OddsList: {},
      numList: {},
      betnumList: {},
      numTow: {},
      numOne: {},
      numChack: {
        type: Boolean
      }
    },
    emits: ["showP", "upAll", "selectNum", "onQuestion"],
    setup(c, { emit: s }) {
      const l = c
        , i = (r, d, v) => {
          let o = r.num
            , h = r.num + "" + r.num;
          if (v == 1)
            if (l.numList[d].chackOne) {
              l.numList[d].chackOne = !1;
              let y = l.numTow.indexOf(h);
              y > -1 && l.numTow.splice(y, 1)
            } else {
              l.numList[d].chackOne = !0,
                l.numList[d].chackTow = !1;
              let y = l.numOne.indexOf(o);
              y > -1 && l.numOne.splice(y, 1),
                l.numTow.push(h)
            }
          else if (l.numList[d].chackTow) {
            l.numList[d].chackTow = !1;
            let y = l.numOne.indexOf(o);
            y > -1 && l.numOne.splice(y, 1)
          } else {
            l.numList[d].chackTow = !0,
              l.numList[d].chackOne = !1;
            let y = l.numTow.indexOf(h);
            y > -1 && l.numTow.splice(y, 1),
              l.numOne.push(o)
          }
          s("selectNum"),
            l.numTow.length > 0 && l.numOne.length > 0 || l.betnumList.length > 0 ? s("showP", !0) : s("showP", !1)
        }
        , _ = (r, d) => {
          let v = r.num + "" + r.num;
          if (l.numList[d].chack) {
            l.numList[d].chack = !1;
            let o = l.betnumList.indexOf(v);
            o > -1 && l.betnumList.splice(o, 1)
          } else
            l.betnumList.push(v),
              l.betnumList.sort(),
              l.numList[d].chack = !0;
          l.numChack || l.betnumList.length > 0 || l.numTow.length > 0 && l.numOne.length > 0 ? s("showP", !0) : s("showP", !1)
        }
        , p = (r, d) => {
          s("onQuestion", r, d)
        }
        ;
      return Pe(() => { }
      ),
        (r, d) => {
          const v = V("van-icon");
          return n(),
            a("div", gT, [e("div", yT, [W(t(r.$t("k3bet2Desc1")), 1), r.OddsList[20] ? (n(),
              a("span", bT, "(" + t(r.OddsList[20].playRate ? r.OddsList[20].playRate : r.OddsList[20].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                onClick: d[0] || (d[0] = o => p(r.$t("k3bet2Desc2"), [5, 5])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
              })]), e("div", $T, [(n(!0),
                a(B, null, G(r.numList, (o, h) => (n(),
                  a("div", {
                    class: P({
                      active: o.chack
                    }),
                    key: h,
                    onClick: y => _(o, h)
                  }, [e("div", null, t(o.num) + t(o.num), 1)], 10, kT))), 128))]), e("div", TT, [W(t(r.$t("k3bet2Desc3")), 1), r.OddsList[19] ? (n(),
                    a("span", wT, "(" + t(r.OddsList[19].playRate ? r.OddsList[19].playRate : r.OddsList[19].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                      onClick: d[1] || (d[1] = o => p(r.$t("k3bet2Desc4"), [6, 1, 6])),
                      class: "icon",
                      color: "#FA574A",
                      size: "16",
                      name: "question"
                    })]), e("div", CT, [(n(!0),
                      a(B, null, G(r.numList, (o, h) => (n(),
                        a("div", {
                          class: P({
                            active: o.chackOne
                          }),
                          key: h,
                          onClick: y => i(o, h, 1)
                        }, [e("div", LT, t(o.num) + t(o.num), 1)], 10, NT))), 128))]), e("div", IT, [(n(!0),
                          a(B, null, G(r.numList, (o, h) => (n(),
                            a("div", {
                              class: P({
                                active: o.chackTow
                              }),
                              key: h,
                              onClick: y => i(o, h, 2)
                            }, [e("div", xT, t(o.num), 1)], 10, RT))), 128))])])
        }
    }
  });
const BT = K(ST, [["__scopeId", "data-v-ab3a9776"]])
  , MT = {
    class: "K3B__C-betting3"
  }
  , PT = {
    class: "K3B__C-betting3-tip1"
  }
  , GT = {
    key: 0
  }
  , DT = {
    class: "K3B__C-betting3-line1 mb30"
  }
  , AT = ["onClick"]
  , OT = {
    class: "K3B__C-betting3-tip1"
  }
  , zT = {
    key: 0
  }
  , qT = U({
    __name: "Betting3",
    props: {
      OddsList: {},
      numList: {},
      betnumList: {},
      numChack: {},
      numTow: {},
      numOne: {}
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(c, { emit: s }) {
      const l = c
        , i = (r, d) => {
          let v = r.num + "" + r.num + r.num;
          if (l.numList[d].chack) {
            l.numList[d].chack = !1;
            let o = l.betnumList.indexOf(v);
            o > -1 && l.betnumList.splice(o, 1)
          } else
            l.betnumList.push(v),
              l.betnumList.sort(),
              l.numList[d].chack = !0;
          l.numChack || l.betnumList.length > 0 || l.numTow.length > 0 && l.numOne.length > 0 ? s("showP", !0) : s("showP", !1)
        }
        , _ = () => {
          s("cNumChack"),
            Xe(() => {
              l.numChack || l.betnumList.length > 0 || l.numTow.length > 1 || l.numOne.length > 2 ? s("showP", !0) : s("showP", !1)
            }
            )
        }
        , p = (r, d) => {
          s("onQuestion", r, d)
        }
        ;
      return Pe(() => { }
      ),
        (r, d) => {
          const v = V("van-icon");
          return n(),
            a("div", MT, [e("div", PT, [W(t(r.$t("k3bet3Desc1")) + " ", 1), r.OddsList[21] ? (n(),
              a("span", GT, "(" + t(r.OddsList[21].playRate ? r.OddsList[21].playRate : r.OddsList[21].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                onClick: d[0] || (d[0] = o => p(r.$t("k3bet3Desc2"), [6, 6, 6])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
              })]), e("div", DT, [(n(!0),
                a(B, null, G(r.numList, (o, h) => (n(),
                  a("div", {
                    class: P({
                      active: o.chack
                    }),
                    key: h,
                    onClick: y => i(o, h)
                  }, [e("div", null, t(o.num) + t(o.num) + t(o.num), 1)], 10, AT))), 128))]), e("div", OT, [W(t(r.$t("k3bet3Desc3")) + " ", 1), r.OddsList[22] ? (n(),
                    a("span", zT, "(" + t(r.OddsList[22].playRate ? r.OddsList[22].playRate : r.OddsList[22].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                      onClick: d[1] || (d[1] = o => p(r.$t("k3bet3Desc5"), [7, 7, 7])),
                      class: "icon",
                      color: "#FA574A",
                      size: "16",
                      name: "question"
                    })]), e("div", {
                      class: P(["K3B__C-betting3-btn", {
                        active: l.numChack
                      }]),
                      onClick: _
                    }, t(r.$t("k3bet3Desc4")), 3)])
        }
    }
  });
const WT = K(qT, [["__scopeId", "data-v-d1d67fb2"]])
  , ET = {
    class: "K3B__C-betting4"
  }
  , FT = {
    class: "K3B__C-betting4-tip1"
  }
  , jT = {
    key: 0
  }
  , VT = {
    class: "K3B__C-betting4-line1 mb30"
  }
  , HT = ["onClick"]
  , UT = {
    class: "K3B__C-betting4-tip1"
  }
  , KT = {
    key: 0
  }
  , XT = {
    class: "K3B__C-betting4-tip1"
  }
  , QT = {
    key: 0
  }
  , YT = {
    class: "K3B__C-betting4-line1"
  }
  , ZT = ["onClick"]
  , JT = U({
    __name: "Betting4",
    props: {
      OddsList: {},
      numList: {},
      numTow: {},
      numOne: {},
      numChack: {},
      betnumList: {}
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(c, { emit: s }) {
      const l = c
        , i = (r, d, v) => {
          if (v == 1)
            if (l.numList[d].chackOne) {
              l.numList[d].chackOne = !1;
              var o = l.numOne.indexOf(r.num);
              o > -1 && l.numOne.splice(o, 1)
            } else
              l.numList[d].chackOne = !0,
                l.numOne.push(r.num),
                l.numOne.sort();
          else if (l.numList[d].chackTow) {
            l.numList[d].chackTow = !1;
            var d = l.numTow.indexOf(r.num);
            d > -1 && l.numTow.splice(d, 1)
          } else
            l.numList[d].chackTow = !0,
              l.numTow.push(r.num),
              l.numTow.sort();
          l.numChack || l.numTow.length > 1 || l.numOne.length > 2 ? s("showP", !0) : s("showP", !1)
        }
        , _ = (r, d) => {
          s("onQuestion", r, d)
        }
        , p = () => {
          s("cNumChack"),
            Xe(() => {
              l.numChack || l.betnumList.length > 0 || l.numTow.length > 1 || l.numOne.length > 2 ? s("showP", !0) : s("showP", !1)
            }
            )
        }
        ;
      return Pe(() => { }
      ),
        (r, d) => {
          const v = V("van-icon");
          return n(),
            a("div", ET, [e("div", FT, [W(t(r.$t("k3bet4Desc1")) + " ", 1), r.OddsList[23] ? (n(),
              a("span", jT, "(" + t(r.OddsList[23].playRate ? r.OddsList[23].playRate : r.OddsList[23].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                onClick: d[0] || (d[0] = o => _(r.$t("k3bet4Desc2"), [1, 2, 4])),
                class: "icon",
                color: "#FA574A",
                size: "16",
                name: "question"
              })]), e("div", VT, [(n(!0),
                a(B, null, G(r.numList, (o, h) => (n(),
                  a("div", {
                    class: P({
                      active: o.chackOne
                    }),
                    key: h,
                    onClick: y => i(o, h, 1)
                  }, [e("div", null, t(o.num), 1)], 10, HT))), 128))]), e("div", UT, [W(t(r.$t("k3bet4Desc3")) + " ", 1), r.OddsList[24] ? (n(),
                    a("span", KT, "(" + t(r.OddsList[24].playRate ? r.OddsList[24].playRate : r.OddsList[24].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                      onClick: d[1] || (d[1] = o => _(r.$t("k3bet4Desc4"), [1, 2, 3])),
                      class: "icon",
                      color: "#FA574A",
                      size: "16",
                      name: "question"
                    })]), e("div", {
                      class: P(["K3B__C-betting4-btn", {
                        active: r.numChack
                      }]),
                      onClick: p
                    }, t(r.$t("betPopDesc7")), 3), e("div", XT, [W(t(r.$t("k3bet4Desc5")) + " ", 1), r.OddsList[18] ? (n(),
                      a("span", QT, "(" + t(r.OddsList[18].playRate ? r.OddsList[18].playRate : r.OddsList[18].playRate_Original) + ")", 1)) : M("", !0), R(v, {
                        onClick: d[2] || (d[2] = o => _(r.$t("k3bet4Desc6"), [1, 2])),
                        class: "icon",
                        color: "#FA574A",
                        size: "16",
                        name: "question"
                      })]), e("div", YT, [(n(!0),
                        a(B, null, G(r.numList, (o, h) => (n(),
                          a("div", {
                            class: P({
                              active: o.chackTow
                            }),
                            key: h,
                            onClick: y => i(o, h, 2)
                          }, [e("div", null, t(o.num), 1)], 10, ZT))), 128))])])
        }
    }
  });
const ew = K(JT, [["__scopeId", "data-v-c6b7f91d"]])
  , tw = c => (De("data-v-6ac039f3"),
    c = c(),
    Ae(),
    c)
  , sw = {
    class: "Betting__Popup-body"
  }
  , nw = {
    key: 0,
    class: "Betting__Popup-type1"
  }
  , aw = {
    class: "title"
  }
  , ow = {
    class: "list"
  }
  , lw = {
    key: 0,
    class: "Betting__Popup-type2"
  }
  , iw = {
    class: "title"
  }
  , cw = {
    class: "list"
  }
  , uw = {
    key: 1,
    class: "Betting__Popup-type2"
  }
  , rw = {
    class: "title"
  }
  , dw = {
    class: "list"
  }
  , _w = ["innerHTML"]
  , vw = {
    key: 0,
    class: "Betting__Popup-type2"
  }
  , pw = {
    class: "title"
  }
  , mw = {
    class: "list"
  }
  , hw = {
    key: 1,
    class: "title"
  }
  , fw = {
    key: 2,
    class: "Betting__Popup-type2-r"
  }
  , gw = {
    key: 0,
    class: "Betting__Popup-type2"
  }
  , yw = {
    class: "title"
  }
  , bw = {
    class: "list"
  }
  , $w = {
    key: 1,
    class: "title"
  }
  , kw = {
    key: 2,
    class: "Betting__Popup-type2-r"
  }
  , Tw = {
    key: 3,
    class: "Betting__Popup-type2"
  }
  , ww = {
    class: "title"
  }
  , Cw = {
    class: "list"
  }
  , Nw = {
    class: "Betting__Popup-body-line"
  }
  , Lw = {
    class: "Betting__Popup-body-line-list"
  }
  , Iw = ["onClick"]
  , Rw = {
    class: "Betting__Popup-body-line"
  }
  , xw = {
    class: "Betting__Popup-body-line-btnL"
  }
  , Sw = {
    class: "Betting__Popup-body-line"
  }
  , Bw = tw(() => e("div", null, null, -1))
  , Mw = {
    class: "Betting__Popup-body-line-list"
  }
  , Pw = ["onClick"]
  , Gw = {
    class: "Betting__Popup-body-line"
  }
  , Dw = {
    class: "Betting__Popup-foot"
  }
  , Aw = {
    class: "Betting__Popup-foot-s bgcolor"
  }
  , Ow = {
    class: "Betting__Popup-PreSale"
  }
  , zw = {
    class: "Betting__Popup-PreSale-head"
  }
  , qw = {
    class: "Betting__Popup-PreSale-body"
  }
  , Ww = {
    class: "Betting__Popup-PreSale-foot"
  }
  , Ew = U({
    __name: "BettingPopup",
    props: {
      currentInfo: {},
      currentGame: {},
      bettingPopupShow: {},
      betTypeList: {},
      betnumList: {},
      numTow: {},
      numOne: {},
      actNav: {},
      numTowList: {},
      numChack: {}
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , { t: _ } = ye()
        , p = g(!1)
        , r = g(!0)
        , d = ee(() => i.currentGame.betMultiple.split("|"));
      Ge(() => i.bettingPopupShow, () => {
        v.value.coin = Number(i.betTypeList[0]),
          v.value.count = d.value[0]
      }
      );
      const v = g({
        coin: 0,
        count: d.value[0],
        allCoin: 0,
        gametype: 0,
        typeid: 1,
        issuenumber: "",
        selecttype: "1"
      });
      Ge(() => d, () => {
        v.value.count = d.value[0]
      }
        , {
          deep: !0,
          immediate: !0
        });
      let o = ee({
        get() {
          return w(),
            i.bettingPopupShow || !1
        },
        set(L) {
          l("update:bettingPopupShow", L)
        }
      });
      const h = L => {
        switch (L) {
          case 1:
            v.value.count > 1 && (v.value.count--,
              w());
            break;
          case 2:
            v.value.count++,
              w();
            break
        }
      }
        , y = L => {
          L > 0 && (v.value.count = parseInt(L),
            w())
        }
        , T = L => {
          v.value.count = L,
            w()
        }
        , $ = L => {
          v.value.coin = L,
            w()
        }
        , b = () => {
          p.value = !1,
            r.value = !0
        }
        , f = async () => {
          if (!r.value) {
            ht(_("agreePresaleRules"));
            return
          }
          let { coin: L, count: x, selecttype: I } = v.value;
          if (x == 0)
            return qe(_("bteNoCount"));
          let O = null
            , D = i.betnumList;
          if (i.actNav === 0 && i.betnumList.length) {
            O = k(i.betnumList),
              D.sort();
            for (let X = 0; D.length > X; X++)
              D[X] == "A" && (D[X] = "H"),
                D[X] == "B" && (D[X] = "L"),
                D[X] == "C" && (D[X] = "O"),
                D[X] == "D" && (D[X] = "E");
            I = D.join(",")
          } else if (i.actNav == 1) {
            let X = []
              , ce = ""
              , de = "";
            if (D.length > 0) {
              let le = [];
              for (let J = 0; D.length > J; J++) {
                let Q = "|" + D[J] + "|";
                le.push(Q)
              }
              de = le.join(","),
                X.push(6)
            }
            if (i.numTowList.length > 0) {
              let le = []
                , J = [];
              for (let Q = 0; i.numOne.length > Q; Q++) {
                let _e = ":" + i.numOne[Q] + ":";
                le.push(_e),
                  le = le.sort()
              }
              for (let Q = 0; i.numTow.length > Q; Q++) {
                let _e = ":" + i.numTow[Q] + ":";
                J.push(_e),
                  J = J.sort()
              }
              ce = J.join(",") + "," + le.join(","),
                X.push(5)
            }
            X = X.sort((le, J) => le - J),
              O = X.join(","),
              ce && (I = ce),
              de && (I = de),
              ce && de && (I = ce + "," + de)
          } else if (i.actNav == 2) {
            let X = []
              , ce = ""
              , de = "";
            if (D.length > 0) {
              let le = [];
              for (let J = 0; D.length > J; J++) {
                let Q = "|" + D[J] + "|";
                le.push(Q),
                  le = le.sort()
              }
              ce = le.join(","),
                X.push(7)
            }
            i.numChack && (de = "|AAA|",
              X.push(8)),
              X = X.sort((le, J) => le - J),
              O = X.join(","),
              ce && (I = ce),
              de && (I = de),
              ce && de && (I = ce + "," + de)
          } else if (i.actNav == 3) {
            let X = []
              , ce = ""
              , de = ""
              , le = "";
            if (i.numOne.length > 2) {
              let J = [];
              for (let Q = 0; i.numOne.length > Q; Q++) {
                let _e = "|" + i.numOne[Q] + "|";
                J.push(_e),
                  J = J.sort()
              }
              ce = J.join(","),
                X.push(9)
            }
            if (i.numChack && (de = "|ABC|",
              X.push(10)),
              i.numTow.length > 1) {
              let J = [];
              for (let Q = 0; i.numTow.length > Q; Q++) {
                let _e = "." + i.numTow[Q] + ".";
                J.push(_e),
                  J = J.sort()
              }
              le = J.join(","),
                X.push(4)
            }
            X = X.sort((J, Q) => J - Q),
              O = X.join(","),
              le && (I = le),
              ce && (I = ce),
              de && (I = de),
              ce && de && (I = ce + "," + de),
              le && ce && (I = le + "," + ce),
              le && de && (I = le + "," + de),
              le && ce && de && (I = le + "," + ce + "," + de)
          }
          const j = await ae(fa({
            amount: L,
            betCount: Number(x),
            gameType: O,
            selectType: I,
            typeId: i.currentGame.typeID,
            issuenumber: i.currentInfo.gameNo
          }));
          (j == null ? void 0 : j.code) === 0 ? (ht(_("code" + (j == null ? void 0 : j.msgCode))),
            l("submitBetting", i.currentInfo.gameNo)) : l("clearBetting")
        }
        , k = L => {
          let x = [];
          for (let I = 0; L.length > I; I++) {
            if (L[I] == "3" || L[I] == "4" || L[I] == "5" || L[I] == "6" || L[I] == "7" || L[I] == "8" || L[I] == "9" || L[I] == "10" || L[I] == "11" || L[I] == "12" || L[I] == "13" || L[I] == "14" || L[I] == "15" || L[I] == "16" || L[I] == "17" || L[I] == "18") {
              x.push(1);
              continue
            }
            if (L[I] == "A" || L[I] == "B") {
              x.push(2);
              continue
            }
            if (L[I] == "C" || L[I] == "D") {
              x.push(3);
              continue
            }
          }
          return x = x.sort(function (I, O) {
            return I - O
          }),
            [...new Set(x)].join(",")
        }
        , w = () => {
          const L = i.betnumList.length + m() + (i.numChack ? 1 : 0) + C(i.numOne, 3) + C(i.numTow);
          v.value.allCoin = v.value.coin * v.value.count * L
        }
        , m = () => {
          const L = i.numTowList.length;
          return L && i.numTowList[0].split("|")[1].split(",").length * L
        }
        , C = (L, x = 2) => {
          if (i.actNav != 3)
            return 0;
          function I(D) {
            let j = 1;
            for (let X = 2; X <= D; X++)
              j *= X;
            return j
          }
          const O = L.length;
          return O < x ? 0 : I(O) / (I(x) * I(O - x))
        }
        , N = L => {
          switch (L) {
            case "A":
              return _("betBig");
            case "B":
              return _("betSmall");
            case "C":
              return _("betOdd");
            case "D":
              return _("betEven");
            default:
              return L
          }
        }
        , S = L => {
          let x = L.split("|")
            , I = "";
          return x.forEach(O => {
            I += `<div>${O}</div>`
          }
          ),
            I
        }
        ;
      return s({
        setAllCoin: w
      }),
        (L, x) => {
          const I = V("van-field")
            , O = V("van-popup")
            , D = Je("throttle-click");
          return n(),
            a(B, null, [R(O, {
              show: u(o),
              "onUpdate:show": x[6] || (x[6] = j => it(o) ? o.value = j : o = j),
              position: "bottom",
              style: {
                "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)"
              },
              round: !0,
              overlay: !1,
              "close-on-click-overlay": !1,
              "lock-scroll": !1
            }, {
              default: A(() => [e("div", sw, [L.actNav === 0 && L.betnumList.length ? (n(),
                a("div", nw, [e("p", aw, t(L.$t("betPopDesc1")), 1), e("div", ow, [(n(!0),
                  a(B, null, G(L.betnumList, (j, X) => (n(),
                    a("div", {
                      class: P(j % 2 === 0 ? "green" : "red num" + j),
                      key: X
                    }, t(N(j)), 3))), 128))])])) : M("", !0), L.actNav === 1 ? (n(),
                      a(B, {
                        key: 1
                      }, [L.betnumList.length ? (n(),
                        a("div", lw, [e("p", iw, t(L.$t("betPopDesc2")), 1), e("div", cw, [(n(!0),
                          a(B, null, G(L.betnumList, (j, X) => (n(),
                            a("div", {
                              key: X,
                              class: "Betting__Popup-type2-d"
                            }, t(N(j)), 1))), 128))])])) : M("", !0), L.numTowList.length ? (n(),
                              a("div", uw, [e("p", rw, t(L.$t("betPopDesc3")), 1), e("div", dw, [(n(!0),
                                a(B, null, G(L.numTowList, (j, X) => (n(),
                                  a("div", {
                                    key: X,
                                    class: "Betting__Popup-type2-o",
                                    innerHTML: S(j)
                                  }, null, 8, _w))), 128))])])) : M("", !0)], 64)) : M("", !0), L.actNav === 2 ? (n(),
                                    a(B, {
                                      key: 2
                                    }, [L.betnumList.length ? (n(),
                                      a("div", vw, [e("p", pw, t(L.$t("betPopDesc4")), 1), e("div", mw, [(n(!0),
                                        a(B, null, G(L.betnumList, (j, X) => (n(),
                                          a("div", {
                                            key: X,
                                            class: "Betting__Popup-type2-d"
                                          }, t(N(j)), 1))), 128))])])) : M("", !0), L.numChack ? (n(),
                                            a("p", hw, t(L.$t("betPopDesc5")), 1)) : M("", !0), L.numChack ? (n(),
                                              a("div", fw, t(L.$t("k3bet3Desc4")), 1)) : M("", !0)], 64)) : M("", !0), L.actNav === 3 ? (n(),
                                                a(B, {
                                                  key: 3
                                                }, [L.numOne.length > 2 ? (n(),
                                                  a("div", gw, [e("p", yw, t(L.$t("betPopDesc6")), 1), e("div", bw, [(n(!0),
                                                    a(B, null, G(L.numOne, (j, X) => (n(),
                                                      a("div", {
                                                        key: X,
                                                        class: "Betting__Popup-type2-d"
                                                      }, t(N(j)), 1))), 128))])])) : M("", !0), L.numChack ? (n(),
                                                        a("p", $w, t(L.$t("betPopDesc7")), 1)) : M("", !0), L.numChack ? (n(),
                                                          a("div", kw, t(L.$t("betPopDesc7")), 1)) : M("", !0), L.numTow.length > 1 ? (n(),
                                                            a("div", Tw, [e("p", ww, t(L.$t("betPopDesc8")), 1), e("div", Cw, [(n(!0),
                                                              a(B, null, G(L.numTow, (j, X) => (n(),
                                                                a("div", {
                                                                  key: X,
                                                                  class: "Betting__Popup-type2-d"
                                                                }, t(N(j)), 1))), 128))])])) : M("", !0)], 64)) : M("", !0), e("div", Nw, [W(t(u(_)("amount")) + " ", 1), e("div", Lw, [(n(!0),
                                                                  a(B, null, G(L.betTypeList, (j, X) => (n(),
                                                                    a("div", {
                                                                      key: X,
                                                                      class: P(["Betting__Popup-body-line-item", {
                                                                        bgcolor: v.value.coin == j
                                                                      }]),
                                                                      onClick: ce => $(j)
                                                                    }, t(j), 11, Iw))), 128))])]), e("div", Rw, [W(t(u(_)("numbers")) + " ", 1), e("div", xw, [e("div", {
                                                                      class: P(["Betting__Popup-btn", {
                                                                        bgcolor: v.value.count > 0
                                                                      }]),
                                                                      onClick: x[0] || (x[0] = j => h(1))
                                                                    }, "-", 2), R(I, {
                                                                      class: "Betting__Popup-input",
                                                                      modelValue: v.value.count,
                                                                      "onUpdate:modelValue": x[1] || (x[1] = j => v.value.count = j),
                                                                      type: "digit",
                                                                      maxlength: 4,
                                                                      onInput: y
                                                                    }, null, 8, ["modelValue"]), e("div", {
                                                                      class: "Betting__Popup-btn bgcolor",
                                                                      onClick: x[2] || (x[2] = j => h(2))
                                                                    }, "+")])]), e("div", Sw, [Bw, e("div", Mw, [(n(!0),
                                                                      a(B, null, G(d.value, (j, X) => (n(),
                                                                        a("div", {
                                                                          key: X,
                                                                          class: P(["Betting__Popup-body-line-item", {
                                                                            bgcolor: v.value.count == j
                                                                          }]),
                                                                          onClick: ce => T(j)
                                                                        }, " X" + t(j), 11, Pw))), 128))])]), e("div", Gw, [e("span", {
                                                                          class: P(["Betting__Popup-agree", {
                                                                            active: r.value
                                                                          }]),
                                                                          onClick: x[3] || (x[3] = j => r.value = !r.value)
                                                                        }, t(u(_)("agree")), 3), e("span", {
                                                                          onClick: x[4] || (x[4] = j => p.value = !0),
                                                                          class: "Betting__Popup-preSaleShow"
                                                                        }, t(u(_)("presaleRules")), 1)])]), e("div", Dw, [e("div", {
                                                                          class: "Betting__Popup-foot-c",
                                                                          onClick: x[5] || (x[5] = j => l("clearBetting"))
                                                                        }, t(u(_)("cancel")), 1), be((n(),
                                                                          a("div", Aw, [W(t(u(_)("totalAmount")) + " " + t(u(Re)(v.value.allCoin || 0)), 1)])), [[D, {
                                                                            handler: f,
                                                                            wait: 2e3
                                                                          }]])])]),
              _: 1
            }, 8, ["show"]), R(O, {
              show: p.value,
              "onUpdate:show": x[7] || (x[7] = j => p.value = j),
              "close-on-click-overlay": !1,
              round: ""
            }, {
              default: A(() => [e("div", Ow, [e("div", zw, t(u(_)("presaleRules")), 1), e("div", qw, t(L.$t("betPopTXT")), 1), e("div", Ww, [e("div", {
                class: "Betting__Popup-PreSale-foot-btn",
                onClick: b
              }, t(u(_)("iKonw")), 1)])])]),
              _: 1
            }, 8, ["show"])], 64)
        }
    }
  });
const Fw = K(Ew, [["__scopeId", "data-v-6ac039f3"]])
  , jw = {
    class: "K3B__C"
  }
  , Vw = {
    class: "K3B__C-mark"
  }
  , Hw = {
    class: "K3B__C-nav"
  }
  , Uw = ["onClick"]
  , Kw = {
    class: "qpopup-box"
  }
  , Xw = {
    class: "qpopup-box-list"
  }
  , Qw = {
    class: "qpopup-box-txt"
  }
  , Yw = U({
    __name: "Betting",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({})
      },
      ProhibitBuyTime: {
        type: Number,
        default: 5
      },
      currentGame: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["betting", "changeBettingP"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , { t: _ } = ye()
        , p = {
          bt1: fT,
          bt2: BT,
          bt3: WT,
          bt4: ew
        }
        , r = g()
        , d = g()
        , v = g([])
        , o = g(0)
        , h = g([{
          name: _("totalBet"),
          comp: "bt1"
        }, {
          name: _("sameNum"),
          comp: "bt2"
        }, {
          name: _("numbersMatch"),
          comp: "bt3"
        }, {
          name: _("numbersUnmatch"),
          comp: "bt4"
        }])
        , y = g([{
          num: 1,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }, {
          num: 2,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }, {
          num: 3,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }, {
          num: 4,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }, {
          num: 5,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }, {
          num: 6,
          chack: !1,
          chackOne: !1,
          chackTow: !1
        }])
        , T = g([])
        , $ = g([])
        , b = g([])
        , f = g(!1)
        , k = g([])
        , w = g(!1)
        , m = ee(() => (i.currentInfo.passTime < i.ProhibitBuyTime && N(),
          i.currentInfo.passTime < i.ProhibitBuyTime))
        , C = ee(() => i.currentGame.scope ? i.currentGame.scope.split("|").map(le => Number(le)) : [])
        , N = () => {
          w.value = !1,
            S()
        }
        , S = () => {
          d.value.clearList && d.value.clearList(),
            T.value = [],
            $.value = [],
            b.value = [],
            f.value = !1,
            k.value = [],
            y.value = [{
              num: 1,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }, {
              num: 2,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }, {
              num: 3,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }, {
              num: 4,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }, {
              num: 5,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }, {
              num: 6,
              chack: !1,
              chackOne: !1,
              chackTow: !1
            }]
        }
        , L = async () => {
          const le = await ae(il());
          v.value = (le == null ? void 0 : le.data) || []
        }
        , x = () => {
          r.value.setAllCoin()
        }
        , I = le => {
          o.value = le,
            w.value = !1,
            S()
        }
        , O = () => {
          let le = [];
          for (let J = 0; $.value.length > J; J++) {
            let Q = $.value[J]
              , _e = [];
            for (let Se = 0; b.value.length > Se; Se++)
              _e.push(b.value[Se]);
            if (_e.length > 0) {
              let Se = _e.sort().join(",");
              le.push(Q + "|" + Se)
            }
          }
          k.value = le.sort()
        }
        , D = async le => {
          l("betting", le),
            w.value = !1,
            S()
        }
        , j = g(!1)
        , X = g([])
        , ce = g("")
        , de = (le, J) => {
          ce.value = le,
            X.value = J,
            j.value = !0
        }
        ;
      return Pe(() => {
        L()
      }
      ),
        s({
          bettingPopupShow: w
        }),
        (le, J) => {
          const Q = V("van-popup");
          return n(),
            a("div", jw, [be(e("div", Vw, [e("div", null, t(i.currentInfo.time3 || "0"), 1), e("div", null, t(i.currentInfo.time4 || "0"), 1)], 512), [[et, m.value]]), e("div", Hw, [(n(!0),
              a(B, null, G(h.value, (_e, Se) => (n(),
                a("div", {
                  key: Se,
                  class: P({
                    active: o.value == Se
                  }),
                  onClick: Oe => I(Se)
                }, t(_e.name), 11, Uw))), 128))]), (n(),
                  se(ft(p[h.value[o.value].comp]), {
                    ref_key: "BetRef",
                    ref: d,
                    OddsList: v.value,
                    numList: y.value,
                    numTow: $.value,
                    numOne: b.value,
                    numChack: f.value,
                    betnumList: T.value,
                    onSelectNum: O,
                    onShowP: J[0] || (J[0] = _e => w.value = _e),
                    onUpAll: x,
                    onCNumChack: J[1] || (J[1] = _e => f.value = !f.value),
                    onOnQuestion: de
                  }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), R(Fw, {
                    ref_key: "betPopupRef",
                    ref: r,
                    currentInfo: i.currentInfo,
                    bettingPopupShow: w.value,
                    numTow: $.value,
                    numOne: b.value,
                    betTypeList: C.value,
                    numTowList: k.value,
                    currentGame: c.currentGame,
                    actNav: o.value,
                    betnumList: T.value,
                    numChack: f.value,
                    onClearBetting: N,
                    onSubmitBetting: D
                  }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), R(Q, {
                    class: "qpopup",
                    show: j.value,
                    "onUpdate:show": J[2] || (J[2] = _e => j.value = _e),
                    "close-on-click-overlay": !1,
                    closeable: "",
                    "close-icon": "close",
                    "close-icon-position": "bottom-left",
                    round: ""
                  }, {
                    default: A(() => [e("div", Kw, [e("div", Xw, [(n(!0),
                      a(B, null, G(X.value, (_e, Se) => (n(),
                        a("div", {
                          class: P("num num" + _e),
                          key: Se
                        }, null, 2))), 128))]), e("div", Qw, t(ce.value), 1)])]),
                    _: 1
                  }, 8, ["show"])])
        }
    }
  });
const Zw = K(Yw, [["__scopeId", "data-v-b537c9f7"]])
  , Jw = {
    class: "GameRecord__C"
  }
  , eC = {
    class: "GameRecord__C-head"
  }
  , tC = {
    class: "GameRecord__C-body"
  }
  , sC = {
    class: "GameRecord__C-body-premium"
  }
  , nC = {
    key: 1,
    class: "GameRecord__C-body-empty"
  }
  , aC = {
    key: 0,
    class: "GameRecord__C-foot"
  }
  , oC = {
    class: "GameRecord__C-foot-page"
  }
  , lC = U({
    __name: "GameRecord",
    props: {
      typeid: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = g([])
        , _ = g(4)
        , p = g(10)
        , r = g(1)
        , d = () => {
          r.value--,
            o()
        }
        , v = () => {
          r.value++,
            o()
        }
        , o = async (h = !1) => {
          if (l.typeid == null)
            return;
          h && (r.value = 1);
          const [y, T] = await Ze(dn({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }));
          i.value = T.list || [],
            _.value = T.totalPage
        }
        ;
      return s({
        getData: o
      }),
        wt(() => {
          o()
        }
        ),
        (h, y) => {
          const T = V("van-col")
            , $ = V("van-row")
            , b = V("van-icon");
          return n(),
            a("div", Jw, [e("div", eC, [R($, null, {
              default: A(() => [R(T, {
                span: "10"
              }, {
                default: A(() => [W(t(h.$t("gameRecordNum")), 1)]),
                _: 1
              }), R(T, {
                span: "4"
              }, {
                default: A(() => [W(t(h.$t("gameRecordTotal")), 1)]),
                _: 1
              }), R(T, {
                span: "10"
              }, {
                default: A(() => [W(t(h.$t("gameRecordResult")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", tC, [i.value.length ? (n(!0),
              a(B, {
                key: 0
              }, G(i.value, (f, k) => (n(),
                se($, {
                  key: k
                }, {
                  default: A(() => [R(T, {
                    span: "8"
                  }, {
                    default: A(() => [W(t(f.issueNumber), 1)]),
                    _: 2
                  }, 1024), R(T, {
                    span: "1"
                  }, {
                    default: A(() => [e("span", null, t(f.sumCount), 1)]),
                    _: 2
                  }, 1024), R(T, {
                    span: "4"
                  }, {
                    default: A(() => [e("span", null, t(f.sumCount > 10 ? h.$t("big") : h.$t("small")), 1)]),
                    _: 2
                  }, 1024), R(T, {
                    span: "4"
                  }, {
                    default: A(() => [e("span", null, t(f.sumCount % 2 ? h.$t("k3Odd") : h.$t("k3Even")), 1)]),
                    _: 2
                  }, 1024), R(T, {
                    span: "6"
                  }, {
                    default: A(() => [e("div", sC, [(n(!0),
                      a(B, null, G(f.premium, (w, m) => (n(),
                        a("div", {
                          key: m,
                          class: P("n" + w)
                        }, null, 2))), 128))])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024))), 128)) : (n(),
                  a("div", nC, [R(ut)]))]), i.value.length ? (n(),
                    a("div", aC, [e("div", {
                      class: P(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: d
                    }, [R(b, {
                      name: "arrow-left",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", oC, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["GameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: v
                    }, [R(b, {
                      name: "arrow",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const iC = K(lC, [["__scopeId", "data-v-f5a8bf77"]])
  , cC = {
    class: "Trend__C"
  }
  , uC = {
    class: "Trend__C-head"
  }
  , rC = {
    class: "Trend__C-body"
  }
  , dC = {
    class: "Trend__C-body-premium"
  }
  , _C = {
    class: "Trend__C-body-gameText"
  }
  , vC = {
    key: 1,
    class: "Trend__C-body-empty"
  }
  , pC = {
    key: 0,
    class: "Trend__C-foot"
  }
  , mC = {
    class: "Trend__C-foot-page"
  }
  , hC = U({
    __name: "Trend",
    props: {
      typeid: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , { t: i } = ye()
        , _ = g([])
        , p = g(4)
        , r = g(10)
        , d = g(1)
        , v = () => {
          d.value--,
            h()
        }
        , o = () => {
          d.value++,
            h()
        }
        , h = async ($ = !1) => {
          if (l.typeid == null)
            return;
          $ && (d.value = 1);
          const [b, f] = await Ze(dn({
            pageSize: r.value,
            pageNo: d.value,
            typeId: l.typeid
          }));
          _.value = f.list.map(k => {
            let w = [0, 0, 0, 0, 0, 0]
              , m = k.premium.split("").map(Number)
              , C = k.premium.split("").map(Number);
            for (let N = 0; w.length > N; N++)
              w[m[N] - 1] = m[N];
            return k.Premiums = w,
              k.AllEqual = T(C),
              k
          }
          ) || [],
            p.value = f.totalPage
        }
        , y = g([i("trendTXT1"), i("trendTXT2"), i("trendTXT3"), i("trendTXT4")])
        , T = $ => {
          let b = [0, 0, 0, 0, 0, 0]
            , f = $.sort()
            , k = 2;
          for (let w = 0; w < f.length - 1; w++)
            f[w] == f[w + 1] && (b[f[w] - 1] = k++);
          return b
        }
        ;
      return s({
        getData: h
      }),
        wt(() => {
          h()
        }
        ),
        ($, b) => {
          const f = V("van-col")
            , k = V("van-row")
            , w = V("van-icon");
          return n(),
            a("div", cC, [e("div", uC, [R(k, null, {
              default: A(() => [R(f, {
                span: "8"
              }, {
                default: A(() => [W(t($.$t("trendNumber")), 1)]),
                _: 1
              }), R(f, {
                span: "6"
              }, {
                default: A(() => [W(t($.$t("trendResult")), 1)]),
                _: 1
              }), R(f, {
                span: "10"
              }, {
                default: A(() => [W(t($.$t("trendNum")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", rC, [_.value.length ? (n(!0),
              a(B, {
                key: 0
              }, G(_.value, (m, C) => (n(),
                se(k, {
                  key: C
                }, {
                  default: A(() => [R(f, {
                    span: "8"
                  }, {
                    default: A(() => [W(t(m.issueNumber), 1)]),
                    _: 2
                  }, 1024), R(f, {
                    span: "6"
                  }, {
                    default: A(() => [e("div", dC, [(n(!0),
                      a(B, null, G(m.premium, (N, S) => (n(),
                        a("div", {
                          key: S,
                          class: P("n" + N)
                        }, null, 2))), 128))])]),
                    _: 2
                  }, 1024), R(f, {
                    span: "10"
                  }, {
                    default: A(() => [e("div", _C, [e("span", null, t(y.value[m.gameType]), 1)])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024))), 128)) : (n(),
                  a("div", vC, [R(ut)]))]), _.value.length ? (n(),
                    a("div", pC, [e("div", {
                      class: P(["Trend__C-foot-previous", {
                        disabled: d.value <= 1
                      }]),
                      onClick: v
                    }, [R(w, {
                      name: "arrow-left",
                      class: "Trend__C-icon",
                      size: "20"
                    })], 2), e("div", mC, t(d.value) + "/" + t(p.value), 1), e("div", {
                      class: P(["Trend__C-foot-next", {
                        disabled: d.value >= p.value
                      }]),
                      onClick: o
                    }, [R(w, {
                      name: "arrow",
                      class: "Trend__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const fC = K(hC, [["__scopeId", "data-v-cacd164b"]])
  , gC = {
    key: 1,
    class: "WinningTip__C-body-l1"
  }
  , yC = {
    class: "WinningTip__C-body-l2"
  }
  , bC = {
    class: "line1"
  }
  , $C = {
    class: "line2"
  }
  , kC = {
    class: "yuan"
  }
  , TC = {
    class: "WinningTip__C-body-l3"
  }
  , wC = {
    key: 0,
    class: "isLose"
  }
  , CC = {
    class: "head"
  }
  , NC = {
    class: "bonus"
  }
  , LC = {
    class: "gameDetail"
  }
  , IC = {
    class: "WinningTip__C-body-l4"
  }
  , RC = ["onClick"]
  , xC = U({
    __name: "WinningTips",
    setup(c, { expose: s }) {
      const l = ee(() => p.value[0] ? p.value[0].state == 0 : !1)
        , i = ee(() => p.value[0] || {})
        , _ = g(!1)
        , p = g([]);
      let r = g();
      const d = () => {
        clearTimeout(r.value),
          p.value.shift(),
          _.value && p.value.length && (r.value = setTimeout(() => {
            d()
          }
            , 1e3 * 3))
      }
        , v = () => {
          _.value = !_.value,
            _.value ? r.value = setTimeout(() => {
              d()
            }
              , 1e3 * 3) : clearTimeout(r.value)
        }
        , o = y => {
          y.list = y.premium.split(""),
            y.sum = Number(y.list[0]) + Number(y.list[1]) + Number(y.list[2]),
            p.value.push(y),
            _.value && (r.value = setTimeout(() => {
              d()
            }
              , 1e3 * 3))
        }
        , h = () => {
          p.value = []
        }
        ;
      return s({
        showMark: o
      }),
        (y, T) => be((n(),
          a("div", {
            class: "WinningTip__C",
            onClick: d
          }, [e("div", {
            class: P(["WinningTip__C-body", {
              isL: l.value
            }])
          }, [l.value ? (n(),
            a("div", {
              key: 0,
              class: P(["WinningTip__C-body-l1", {
                isL: l.value
              }])
            }, t(y.$t("k3WarningTip1")), 3)) : (n(),
              a("div", gC, t(y.$t("k3WarningTip2")), 1)), e("div", yC, [e("div", bC, [(n(!0),
                a(B, null, G(i.value.list, ($, b) => (n(),
                  a("div", {
                    class: P(["n" + $])
                  }, null, 2))), 256))]), e("div", $C, [e("div", null, t(i.value.premium), 1), e("div", kC, t(i.value.sum > 10 ? y.$t("big") : y.$t("small")), 1), e("div", null, t(i.value.sum % 2 ? y.$t("k3Odd") : y.$t("k3Even")), 1)])]), e("div", TC, [l.value ? (n(),
                    a("div", wC, t(y.$t("k3WarningTip3")), 1)) : (n(),
                      a(B, {
                        key: 1
                      }, [e("div", CC, t(y.$t("k3WarningTip4")), 1), e("div", NC, t(u(Re)(Number(i.value.winAmount))), 1)], 64)), e("div", LC, t(y.$t("k3WarningTip5")) + t(i.value.typeName) + " " + t(i.value.issueNumber), 1)]), e("div", IC, [e("div", {
                        class: P(["acitveBtn", {
                          active: _.value
                        }]),
                        onClick: _t(v, ["stop"])
                      }, null, 10, RC), W(" " + t(y.$t("autoShutOff3s")), 1)]), e("div", {
                        class: "closeBtn",
                        onClick: h
                      })], 2)], 512)), [[et, p.value.length]])
    }
  });
const SC = K(xC, [["__scopeId", "data-v-0d18fc5a"]])
  , BC = {
    class: "K3__C"
  }
  , MC = {
    class: "K3__C-head-more"
  }
  , PC = U({
    __name: "index",
    setup(c) {
      const s = {
        GameRecord: iC,
        Trend: fC,
        MyGameRecord: Da
      }
        , l = g()
        , i = g()
        , _ = g()
        , p = g(!1)
        , r = g("GameRecord")
        , d = $e()
        , v = Kt()
        , o = v.getK3
        , h = g(0)
        , y = g(localStorage.getItem("volumeShow") || "1")
        , T = g(!1)
        , $ = g([])
        , b = g(null)
        , f = g({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
        , k = g("666")
        , w = g(5)
        , m = g("")
        , C = g(!1)
        , N = g(null)
        , S = ee(() => o[h.value] || {})
        , L = Zt()
        , x = ee(() => L.getIsShowLotteryDragon);
      Pe(() => {
        j()
      }
      ),
        Ut(() => {
          clearInterval(b.value),
            clearInterval(Oe.value),
            Be.value.forEach(Y => {
              clearInterval(Y)
            }
            ),
            ne.value && clearTimeout(ne.value)
        }
        ),
        Ge(() => gt().visibility, Y => {
          Y === 0 ? clearInterval(b.value) : (j(),
            ce(h.value))
        }
        );
      const I = () => {
        sessionStorage.setItem("clickedGameType", "lottery"),
          d.push({
            path: "/"
          })
      }
        , O = () => {
          y.value == "1" ? y.value = "2" : y.value = "1",
            localStorage.setItem("volumeShow", y.value)
        }
        , D = Y => {
          d.push({
            name: Y
          })
        }
        , j = () => {
          N.value == null && ce(0)
        }
        , X = async (Y, Z = !1) => {
          const F = await ae(ul({
            typeId: Y
          }));
          F && (k.value = F.data.premium,
            Z && ke(k.value))
        }
        , ce = Y => {
          v.getK3Data(),
            h.value = Y,
            N.value = o[Y].typeID,
            de(N.value),
            Xe(() => {
              l.value.getData(N.value)
            }
            )
        }
        , de = async (Y, Z = !1) => {
          X(Y, Z);
          const [F, we] = await Ze(cl({
            typeId: Y
          }));
          f.value.gameNo = we.issueNumber,
            f.value.currentTime = we.serviceTime.replace(/-/g, "/"),
            f.value.beginTime = we.startTime.replace(/-/g, "/"),
            le()
        }
        , le = () => {
          if (!o.length)
            return;
          var Y = new Date(f.value.currentTime).getTime()
            , Z = new Date(f.value.beginTime).getTime();
          let F = (Y - Z) / 1e3
            , we = o[h.value];
          if (F > we.intervalM * 60 && (F = we.intervalM * 60),
            f.value.passTime = we.intervalM * 60 - F,
            f.value.passTime < 0) {
            m.value = "An error occurred, please contact customer service。The game time is " + we.intervalM + " minutes,start time is " + f.value.beginTime + ",current time is" + f.value.currentTime + "!",
              T.value = !0;
            return
          }
          J()
        }
        , J = () => {
          clearInterval(b.value),
            Q(!1),
            b.value = setInterval(function () {
              Q()
            }, 1e3)
        }
        , Q = (Y = !0) => {
          if (f.value.passTime <= w.value && (C.value = !1),
            y.value == "1" && (f.value.passTime <= w.value && f.value.passTime > 1 ? _e(1) : f.value.passTime == 1 && _e(2)),
            f.value.passTime > 0) {
            let Z = f.value.passTime;
            f.value.time2 = Math.floor(Z / 60),
              f.value.time3 = Math.floor(Z % 60 / 10),
              f.value.time4 = Math.floor(Z % 10),
              f.value.passTime--
          } else
            clearInterval(b.value),
              Y && Se()
        }
        , _e = (Y = 1) => {
          const Z = document.getElementById(`voice${Y}`);
          Z && Z.play()
        }
        , Se = () => {
          de(N.value, !0),
            _.value.getWinsUserAmount(!1),
            l.value.getData(!0)
        }
        , Oe = g(null)
        , ve = (Y, Z) => {
          if (Y >= 0 && Z > 0 && Z >= Y) {
            let F = Z - Y + 1;
            return Math.floor(Math.random() * F + Y)
          } else
            return 0
        }
        , ke = Y => {
          Oe.value || (Oe.value = setInterval(function () {
            for (var Z = [], F = 0; 3 > F; F++)
              Z.push(ve(1, 6));
            k.value = Z.join("")
          }, 50)),
            setTimeout(function () {
              clearInterval(Oe.value),
                k.value = Y,
                Oe.value = null
            }, 2e3)
        }
        , Te = g({})
        , Be = g([])
        , Me = Y => {
          if (_.value.getWinsUserAmount(!1),
            l.value.getData(),
            Te.value[Y])
            return;
          Te.value[Y] = !0;
          const { time1: Z, time2: F, time3: we, time4: Ee } = f.value
            , tt = (Z * 10 * 60 + F * 60 + we * 10 + Ee) * 1e3;
          Be.value[S.value.intervalM] = setTimeout(() => {
            oe(Y)
          }
            , tt)
        }
        , me = Y => {
          p.value = Y
        }
        , ne = g(null)
        , oe = async Y => {
          const Z = await ae(rl({
            issueNumber: Y
          }));
          if (Z) {
            if (!(Z.data.state != 2)) {
              ne.value = setTimeout(() => {
                oe(Y)
              }
                , 2e3);
              return
            }
            i.value.showMark(Z.data),
              delete Te.value[Y]
          }
        }
        ;
      return (Y, Z) => {
        const F = V("NavBar");
        return n(),
          a("div", BC, [R(F, {
            "left-arrow": "",
            onClickLeft: I,
            "background-color": "linear-gradient(90deg, #DE2325 0%, #FF504A 100%)",
            headLogo: !0
          }, {
            right: A(() => [e("div", MC, [e("div", {
              onClick: Z[0] || (Z[0] = we => D("CustomerService"))
            }), e("div", {
              class: P({
                disableVoice: y.value == "2"
              }),
              onClick: O
            }, null, 2)])]),
            _: 1
          }), R(xs, {
            ref_key: "WallteRef",
            ref: _
          }, null, 512), R(ys, {
            siteMsg: $.value,
            key: "k3"
          }, null, 8, ["siteMsg"]), R(Ss, {
            gameList: u(o),
            currentGameIndex: h.value,
            onChangeGame: ce
          }, null, 8, ["gameList", "currentGameIndex"]), R(uT, {
            currentInfo: f.value,
            premium: k.value,
            currentGame: S.value
          }, null, 8, ["currentInfo", "premium", "currentGame"]), R(Zw, {
            currentInfo: f.value,
            currentGame: S.value,
            VoiceType: y.value,
            typeid: N.value,
            onBetting: Me,
            onChangeBettingP: me
          }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), R(Ms, {
            record: r.value,
            onChangeC: Z[1] || (Z[1] = we => r.value = we)
          }, null, 8, ["record"]), (n(),
            se(Ht, null, [(n(),
              se(ft(s[r.value]), {
                ref_key: "RecordComponent",
                ref: l,
                typeid: N.value,
                ApiFun: u(rn),
                listApi: u(dn),
                EmerdApi: u(ga),
                goPathName: "AllLotteryGames-BettingRecordK3"
              }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), R(xt, {
                show: T.value,
                onConfirm: Z[2] || (Z[2] = we => D("/login"))
              }, {
                content: A(() => [e("div", null, t(m.value), 1)]),
                _: 1
              }, 8, ["show"]), R(SC, {
                ref_key: "WinningTipsRef",
                ref: i
              }, null, 512), x.value ? (n(),
                se(Rs, {
                  key: 0
                })) : M("", !0), R(Ps)])
      }
    }
  });
const GC = K(PC, [["__scopeId", "data-v-4e250099"]])
  , r7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: GC
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , As = c => (De("data-v-5d6270a9"),
    c = c(),
    Ae(),
    c)
  , DC = {
    class: "TimeLeft__C"
  }
  , AC = {
    class: "box"
  }
  , OC = {
    class: "tit"
  }
  , zC = {
    class: "citycon"
  }
  , qC = As(() => e("div", {
    class: "citybg"
  }, null, -1))
  , WC = {
    class: "font30"
  }
  , EC = {
    class: "playmethod"
  }
  , FC = {
    key: 0,
    class: "odds"
  }
  , jC = As(() => e("div", {
    class: "line"
  }, "|", -1))
  , VC = {
    class: "odd"
  }
  , HC = {
    key: 1,
    class: "color8"
  }
  , UC = {
    class: "bettingcut"
  }
  , KC = {
    class: "font22"
  }
  , XC = {
    class: "info"
  }
  , QC = As(() => e("div", {
    class: "illustratebg"
  }, null, -1))
  , YC = {
    class: "font24"
  }
  , ZC = {
    class: "issue"
  }
  , JC = As(() => e("div", {
    class: "issuebg"
  }, null, -1))
  , e3 = {
    class: "font26"
  }
  , t3 = {
    class: "closure"
  }
  , s3 = {
    class: "closuretime"
  }
  , n3 = {
    class: "closurtimes"
  }
  , a3 = U({
    __name: "TimeLeft",
    props: {
      defaultcityname: {
        type: String,
        default: ""
      },
      defaultplayname: {
        type: String,
        default: ""
      },
      defaultexpiredate: {
        type: String,
        default: ""
      },
      issue: {
        type: String,
        default: ""
      },
      time: {
        type: String,
        default: ""
      },
      odds: {
        type: Number,
        default: 0
      },
      colorId: {
        type: Number,
        default: 0
      },
      areId: {
        type: Number,
        default: 0
      }
    },
    setup(c) {
      const s = c
        , l = $e()
        , i = () => {
          l.push({
            name: "AllLotteryGames-Play",
            query: {
              id: s.areId,
              gVSs: 1
            }
          })
        }
        ;
      return (_, p) => (n(),
        a("div", DC, [e("div", AC, [e("div", OC, [e("div", zC, [qC, e("div", WC, t(c.defaultcityname), 1)]), e("div", EC, t(_.$t("code" + c.defaultplayname)), 1), c.colorId != 8 ? (n(),
          a("div", FC, [e("div", null, t(_.$t("odds")), 1), jC, e("div", VC, "1:" + t(c.odds), 1)])) : M("", !0), c.colorId == 8 ? (n(),
            a("div", HC)) : M("", !0), e("div", UC, [e("div", KC, t(_.$t("xosoTxt91")), 1), e("div", null, t(c.defaultexpiredate), 1)])]), e("div", XC, [e("div", {
              class: "playillustrate",
              onClick: i
            }, [QC, e("div", YC, t(_.$t("lotteryManual")), 1)]), e("div", ZC, [JC, e("div", e3, t(c.issue), 1)]), e("div", t3, [e("div", s3, t(_.$t("xosoTxt92")), 1), e("div", n3, [(n(!0),
              a(B, null, G(c.time.split(""), (r, d) => (n(),
                a("div", {
                  class: P(r == ":" ? "red" : "redsqure"),
                  key: d
                }, t(r), 3))), 128))])])])])]))
    }
  });
const o3 = K(a3, [["__scopeId", "data-v-5d6270a9"]])
  , fn = c => (De("data-v-a467b1ca"),
    c = c(),
    Ae(),
    c)
  , l3 = {
    class: "TimeLeft__C"
  }
  , i3 = {
    class: "box"
  }
  , c3 = {
    class: "tit"
  }
  , u3 = {
    class: "citycon"
  }
  , r3 = fn(() => e("div", {
    class: "citybg"
  }, null, -1))
  , d3 = {
    class: "font30"
  }
  , _3 = {
    key: 0,
    class: "playmethod"
  }
  , v3 = {
    class: "odd"
  }
  , p3 = {
    class: "odds"
  }
  , m3 = {
    class: "result"
  }
  , h3 = {
    class: "info"
  }
  , f3 = fn(() => e("div", {
    class: "illustratebg"
  }, null, -1))
  , g3 = {
    class: "font24"
  }
  , y3 = {
    class: "issue"
  }
  , b3 = fn(() => e("div", {
    class: "issuebg"
  }, null, -1))
  , $3 = {
    class: "font26"
  }
  , k3 = {
    key: 0,
    class: "closure isShowPreparing"
  }
  , T3 = {
    key: 1,
    class: "closure"
  }
  , w3 = {
    class: "closuretime"
  }
  , C3 = {
    class: "closurtimes"
  }
  , N3 = U({
    __name: "TimeLeftF",
    props: {
      defaultcityname: {
        type: String,
        default: ""
      },
      defaultplayname: {
        type: String,
        default: ""
      },
      issue: {
        type: String,
        default: ""
      },
      time: {
        type: String,
        default: ""
      },
      odds: {
        type: Number,
        default: 0
      },
      colorId: {
        type: Number,
        default: 0
      },
      areId: {
        type: Number,
        default: 0
      },
      resultList: {
        type: Object,
        default: {}
      },
      isShowPreparing: {
        type: Boolean,
        defauft: !1
      }
    },
    setup(c) {
      const s = c
        , l = $e()
        , i = ee(() => {
          var r, d;
          let p = (r = s.resultList) != null && r.openingResult ? (d = s.resultList) == null ? void 0 : d.openingResult.find(v => v.resultType == 0).result : "";
          return Array.isArray(p) && (p = p[0]),
            p
        }
        )
        , _ = () => {
          l.push({
            name: "AllLotteryGames-Play",
            query: {
              id: s.areId,
              gVSs: 2
            }
          })
        }
        ;
      return (p, r) => {
        var d;
        return n(),
          a("div", l3, [e("div", i3, [e("div", c3, [e("div", u3, [r3, e("div", d3, t(c.defaultcityname), 1)]), c.colorId != 8 ? (n(),
            a("div", _3, [e("div", null, "(" + t(p.$t("code" + c.defaultplayname)) + ")", 1), e("div", v3, "1:" + t(c.odds), 1)])) : M("", !0), e("div", p3, [e("div", null, t(p.$t("betResult")), 1), e("div", null, t((d = c.resultList) == null ? void 0 : d.issueNumber), 1), e("div", m3, [(n(!0),
              a(B, null, G(i.value.split(""), (v, o) => (n(),
                a("span", {
                  key: o
                }, t(v), 1))), 128))])])]), e("div", h3, [e("div", {
                  class: "playillustrate",
                  onClick: _
                }, [f3, e("div", g3, t(p.$t("lotteryManual")), 1)]), e("div", y3, [b3, e("div", $3, t(c.issue), 1)]), c.isShowPreparing ? (n(),
                  a("div", k3, t(p.$t("preparing")), 1)) : M("", !0), c.isShowPreparing ? M("", !0) : (n(),
                    a("div", T3, [e("div", w3, t(p.$t("xosoTxt91")), 1), e("div", C3, [(n(!0),
                      a(B, null, G(c.time.split(""), (v, o) => (n(),
                        a("div", {
                          class: P(v == ":" ? "red" : "redsqure"),
                          key: o
                        }, t(v), 3))), 128))])]))])])])
      }
    }
  });
const L3 = K(N3, [["__scopeId", "data-v-a467b1ca"]])
  , I3 = {
    class: "ColorsContainer"
  }
  , R3 = U({
    __name: "ColorsAndPlay",
    props: {
      gameCategoryList: {
        type: Array,
        default: () => []
      },
      colortab: {
        type: Number,
        default: 0
      },
      playtab: {
        type: Number,
        default: 0
      }
    },
    emits: ["colorupdate", "update"],
    setup(c, { emit: s }) {
      const l = c
        , i = g(l.colortab)
        , _ = g(l.playtab)
        , p = ee(() => {
          var v;
          return ((v = l.gameCategoryList[i.value]) == null ? void 0 : v.gamePlayList) || []
        }
        );
      function r(v) {
        s("colorupdate", v.item.categoryId, v.index)
      }
      function d({ item: v, index: o }) {
        s("update", v.playId, o, v.playNameCode, v.betType)
      }
      return Ge(() => l.playtab, () => {
        _.value = l.playtab
      }
      ),
        Ge(() => l.colortab, () => {
          i.value = l.colortab
        }
        ),
        (v, o) => (n(),
          a("div", I3, [R(fs, {
            list: c.gameCategoryList,
            active: i.value,
            "onUpdate:active": o[0] || (o[0] = h => i.value = h),
            tabClassName: "ColorsMethod",
            onOnClickTab: r
          }, {
            default: A(({ item: h, index: y }) => [e("div", {
              class: P(["coloritem", {
                active: y === i.value
              }])
            }, t(v.$t("code" + h.categoryNameCode)), 3)]),
            _: 1
          }, 8, ["list", "active"]), R(fs, {
            list: p.value,
            active: _.value,
            "onUpdate:active": o[1] || (o[1] = h => _.value = h),
            tabClassName: "PlayMethod",
            onOnClickTab: d
          }, {
            default: A(({ item: h, index: y }) => [e("div", {
              class: P(["playitem", {
                active: y === _.value
              }])
            }, t(v.$t("code" + h.playNameCode)), 3)]),
            _: 1
          }, 8, ["list", "active"])]))
    }
  });
const Os = c => (De("data-v-1b2d551c"),
  c = c(),
  Ae(),
  c)
  , x3 = {
    class: "NumberSelectContainer"
  }
  , S3 = {
    class: "NumberSelectContainer-mark"
  }
  , B3 = {
    class: "NumberTabContent"
  }
  , M3 = {
    key: 0,
    class: "selectcontainer"
  }
  , P3 = {
    class: "selectbutton"
  }
  , G3 = {
    class: "selectcontent"
  }
  , D3 = {
    class: "selectheader"
  }
  , A3 = {
    class: "selectball"
  }
  , O3 = ["onClick"]
  , z3 = {
    key: 1,
    class: "selectcontainer"
  }
  , q3 = {
    class: "selectbutton"
  }
  , W3 = {
    class: "selectcontent"
  }
  , E3 = {
    class: "selectheader"
  }
  , F3 = {
    class: "selectball"
  }
  , j3 = ["onClick"]
  , V3 = {
    key: 2,
    class: "selectcontainer"
  }
  , H3 = {
    class: "selectbutton"
  }
  , U3 = {
    class: "selectcontent"
  }
  , K3 = {
    class: "selectheader"
  }
  , X3 = {
    class: "selectball"
  }
  , Q3 = ["onClick"]
  , Y3 = {
    key: 3,
    class: "selectcontainer"
  }
  , Z3 = {
    class: "selectbutton"
  }
  , J3 = {
    class: "selectcontent"
  }
  , e4 = {
    class: "selectheader"
  }
  , t4 = {
    class: "selectball"
  }
  , s4 = ["onClick"]
  , n4 = {
    class: "quickcontainer"
  }
  , a4 = {
    key: 0,
    class: "intervalcontainer"
  }
  , o4 = ["onClick"]
  , l4 = {
    key: 1,
    class: "randomcontainer"
  }
  , i4 = {
    class: "randomheader"
  }
  , c4 = Os(() => e("div", {
    class: "redline"
  }, null, -1))
  , u4 = {
    class: "font30"
  }
  , r4 = {
    class: "randombutton"
  }
  , d4 = ["onClick"]
  , _4 = {
    key: 2,
    class: "specialcontainer"
  }
  , v4 = {
    class: "specialheader"
  }
  , p4 = Os(() => e("div", {
    class: "redline"
  }, null, -1))
  , m4 = {
    class: "font30"
  }
  , h4 = {
    class: "specialbutton"
  }
  , f4 = {
    class: "Ntit"
  }
  , g4 = Os(() => e("br", null, null, -1))
  , y4 = Os(() => e("br", null, null, -1))
  , b4 = {
    class: "list"
  }
  , $4 = ["onClick"]
  , k4 = U({
    __name: "NumberSelect",
    props: {
      methodList: {
        type: String,
        default: ""
      },
      activeTab: {
        type: Number,
        default: 0
      },
      randomList: {
        type: Array,
        default: () => { }
      },
      randomtype: {
        type: Number,
        default: 0
      },
      specialtype: {
        type: Number,
        default: 0
      },
      isthreenumber: {
        type: Number,
        default: 0
      },
      speciaSelectNo: {
        type: String,
        default: ""
      },
      isShowMark: {
        type: Boolean,
        default: !1
      },
      hundred: {
        type: String,
        default: ""
      },
      betconfig: {
        type: String,
        default: ""
      },
      groupTab: {
        type: Number,
        default: 30
      },
      thousandnumList: {
        type: Array,
        default: []
      },
      hundrednumList: {
        type: Array,
        default: []
      },
      tennumList: {
        type: Array,
        default: []
      },
      indicualnumList: {
        type: Array,
        default: []
      },
      quicknumList: {
        type: Array,
        default: []
      },
      intervalnumber: {
        type: Array,
        default: []
      },
      intervalTab: {
        type: Number,
        default: 0
      }
    },
    emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , { t: _ } = ye()
        , p = [{
          name: _("selectNo"),
          value: 1
        }, {
          name: _("xosoTxt81"),
          value: 3
        }, {
          name: _("xosoTxt80"),
          value: 2
        }]
        , r = ee(() => p.filter(C => {
          var N;
          return (N = i.methodList) == null ? void 0 : N.includes(C.value + "")
        }
        ))
        , d = g(0)
        , v = g("")
        , o = g(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
        , h = ({ item: C }) => {
          l("tabupdate", C.value)
        }
        , y = (C, N, S) => {
          l("selectgroup", C, N, S)
        }
        , T = (C, N) => {
          l("betNum", C, N)
        }
        , $ = (C, N, S) => {
          l("betQuickNum", C, N, S)
        }
        , b = (C, N, S, L) => {
          l("getselect", C, N, S, L)
        }
        , f = (C, N) => {
          l("getquick", C, N)
        }
        , k = (C, N) => {
          l("selectinterval", C, N)
        }
        , w = C => {
          C.target.value != "" && l("inputblur", C.target.value)
        }
        , m = () => {
          v.value = ""
        }
        ;
      return Ge(() => i.activeTab, async () => {
        await Xe();
        const C = r.value.findIndex(N => N.value == i.activeTab);
        C !== -1 && (d.value = C)
      }
      ),
        s({
          cleardata: m
        }),
        (C, N) => {
          var L, x, I, O;
          const S = V("van-field");
          return n(),
            a("div", x3, [be(e("div", S3, [e("div", null, t(u(_)("nomorebet")), 1)], 512), [[et, c.isShowMark]]), r.value.length > 0 ? (n(),
              se(fs, {
                key: 0,
                list: r.value,
                active: d.value,
                "onUpdate:active": N[0] || (N[0] = D => d.value = D),
                tabClassName: "NumberTab",
                onOnClickTab: h
              }, {
                default: A(({ item: D, index: j }) => [e("div", {
                  class: P(["tabitem", {
                    active: D.value === c.activeTab
                  }])
                }, t(D.name), 3)]),
                _: 1
              }, 8, ["list", "active"])) : M("", !0), e("div", B3, [be(e("div", null, [(L = c.betconfig) != null && L.includes("4") ? (n(),
                a("div", M3, [e("div", P3, [e("div", {
                  class: "selectall",
                  onClick: N[1] || (N[1] = D => b("Thousand", 0, 9, "all"))
                }, t(u(_)("all")), 1), e("div", {
                  class: "selectbig",
                  onClick: N[2] || (N[2] = D => b("Thousand", 0, 9, "big"))
                }, t(u(_)("big")), 1), e("div", {
                  class: "selectsmall",
                  onClick: N[3] || (N[3] = D => b("Thousand", 0, 9, "small"))
                }, t(u(_)("small")), 1), e("div", {
                  class: "selectodd",
                  onClick: N[4] || (N[4] = D => b("Thousand", 0, 9, "odd"))
                }, t(u(_)("xosoTxt71")), 1), e("div", {
                  class: "selecteven",
                  onClick: N[5] || (N[5] = D => b("Thousand", 0, 9, "even"))
                }, t(u(_)("xosoTxt70")), 1)]), e("div", G3, [e("div", D3, t(u(_)("xosoTxt87")), 1), e("div", A3, [(n(!0),
                  a(B, null, G(o.value, (D, j) => (n(),
                    a("div", {
                      key: j,
                      onClick: X => T("Thousand", D)
                    }, [e("div", {
                      class: P(c.thousandnumList.includes(D) ? "ball action " : "ball")
                    }, t(D), 3)], 8, O3))), 128))])])])) : M("", !0), (x = c.betconfig) != null && x.includes("3") ? (n(),
                      a("div", z3, [e("div", q3, [e("div", {
                        class: "selectall",
                        onClick: N[6] || (N[6] = D => b("hundred", 0, 9, "all"))
                      }, t(u(_)("all")), 1), e("div", {
                        class: "selectbig",
                        onClick: N[7] || (N[7] = D => b("hundred", 0, 9, "big"))
                      }, t(u(_)("big")), 1), e("div", {
                        class: "selectsmall",
                        onClick: N[8] || (N[8] = D => b("hundred", 0, 9, "small"))
                      }, t(u(_)("small")), 1), e("div", {
                        class: "selectodd",
                        onClick: N[9] || (N[9] = D => b("hundred", 0, 9, "odd"))
                      }, t(u(_)("xosoTxt71")), 1), e("div", {
                        class: "selecteven",
                        onClick: N[10] || (N[10] = D => b("hundred", 0, 9, "even"))
                      }, t(u(_)("xosoTxt70")), 1)]), e("div", W3, [e("div", E3, t(u(_)("xosoTxt88")), 1), e("div", F3, [(n(!0),
                        a(B, null, G(o.value, (D, j) => (n(),
                          a("div", {
                            key: j,
                            onClick: X => T("Hundred", D)
                          }, [e("div", {
                            class: P(c.hundrednumList.includes(D) ? "action ball" : "ball")
                          }, t(D), 3)], 8, j3))), 128))])])])) : M("", !0), (I = c.betconfig) != null && I.includes("2") ? (n(),
                            a("div", V3, [e("div", H3, [e("div", {
                              class: "selectall",
                              onClick: N[11] || (N[11] = D => b("ten", 0, 9, "all"))
                            }, t(u(_)("all")), 1), e("div", {
                              class: "selectbig",
                              onClick: N[12] || (N[12] = D => b("ten", 0, 9, "big"))
                            }, t(u(_)("big")), 1), e("div", {
                              class: "selectsmall",
                              onClick: N[13] || (N[13] = D => b("ten", 0, 9, "small"))
                            }, t(u(_)("small")), 1), e("div", {
                              class: "selectodd",
                              onClick: N[14] || (N[14] = D => b("ten", 0, 9, "odd"))
                            }, t(u(_)("xosoTxt71")), 1), e("div", {
                              class: "selecteven",
                              onClick: N[15] || (N[15] = D => b("ten", 0, 9, "even"))
                            }, t(u(_)("xosoTxt70")), 1)]), e("div", U3, [e("div", K3, t(u(_)("xosoTxt89")), 1), e("div", X3, [(n(!0),
                              a(B, null, G(o.value, (D, j) => (n(),
                                a("div", {
                                  key: j,
                                  onClick: X => T("ten", D)
                                }, [e("div", {
                                  class: P(c.tennumList.includes(D) ? "action ball" : "ball")
                                }, t(D), 3)], 8, Q3))), 128))])])])) : M("", !0), (O = c.betconfig) != null && O.includes("1") ? (n(),
                                  a("div", Y3, [e("div", Z3, [e("div", {
                                    class: "selectall",
                                    onClick: N[16] || (N[16] = D => b("Indivual", 0, 9, "all"))
                                  }, t(u(_)("all")), 1), e("div", {
                                    class: "selectbig",
                                    onClick: N[17] || (N[17] = D => b("Indivual", 0, 9, "big"))
                                  }, t(u(_)("big")), 1), e("div", {
                                    class: "selectsmall",
                                    onClick: N[18] || (N[18] = D => b("Indivual", 0, 9, "small"))
                                  }, t(u(_)("small")), 1), e("div", {
                                    class: "selectodd",
                                    onClick: N[19] || (N[19] = D => b("Indivual", 0, 9, "odd"))
                                  }, t(u(_)("xosoTxt71")), 1), e("div", {
                                    class: "selecteven",
                                    onClick: N[20] || (N[20] = D => b("Indivual", 0, 9, "even"))
                                  }, t(u(_)("xosoTxt70")), 1)]), e("div", J3, [e("div", e4, t(u(_)("xosoTxt90")), 1), e("div", t4, [(n(!0),
                                    a(B, null, G(o.value, (D, j) => (n(),
                                      a("div", {
                                        key: j,
                                        onClick: X => T("Indivual", D)
                                      }, [e("div", {
                                        class: P(c.indicualnumList.includes(D) ? "ball action" : "ball")
                                      }, t(D), 3)], 8, s4))), 128))])])])) : M("", !0)], 512), [[et, c.activeTab === 1]]), be(e("div", null, [R(S, {
                                        class: "custom-field",
                                        modelValue: v.value,
                                        "onUpdate:modelValue": N[21] || (N[21] = D => v.value = D),
                                        rows: "4",
                                        autosize: "",
                                        type: "textarea",
                                        placeholder: u(_)("xosoTxt86"),
                                        onInput: w
                                      }, null, 8, ["modelValue", "placeholder"])], 512), [[et, c.activeTab === 2]]), be(e("div", null, [e("div", n4, [c.isthreenumber === 1 ? (n(),
                                        a("div", a4, [(n(!0),
                                          a(B, null, G(c.intervalnumber, (D, j) => (n(),
                                            a("div", {
                                              class: P(["intervalitem", [c.intervalTab === j ? "active" : ""]]),
                                              key: j,
                                              onClick: X => k(D, j)
                                            }, t(D), 11, o4))), 128))])) : M("", !0), c.randomtype === 1 ? (n(),
                                              a("div", l4, [e("div", i4, [c4, e("div", u4, t(u(_)("xosoTxt83")), 1)]), e("div", r4, [(n(!0),
                                                a(B, null, G(c.randomList, (D, j) => (n(),
                                                  a("div", {
                                                    class: P([c.groupTab === j ? "active" : ""]),
                                                    key: j,
                                                    onClick: X => y(D, j, c.isthreenumber)
                                                  }, t(D) + t(u(_)("xosoTxt84")), 11, d4))), 128))])])) : M("", !0), c.specialtype === 1 ? (n(),
                                                    a("div", _4, [e("div", v4, [p4, e("div", m4, t(u(_)("xosoTxt97")), 1)]), e("div", h4, [c.speciaSelectNo.includes("1") ? (n(),
                                                      a("div", {
                                                        key: 0,
                                                        class: "specialsame",
                                                        onClick: N[22] || (N[22] = D => f(c.isthreenumber, "same"))
                                                      }, t(u(_)("xosoTxt85")), 1)) : M("", !0), c.speciaSelectNo.includes("4") ? (n(),
                                                        a("div", {
                                                          key: 1,
                                                          class: "specialbig",
                                                          onClick: N[23] || (N[23] = D => f(c.isthreenumber, "big"))
                                                        }, t(u(_)("big")), 1)) : M("", !0), c.speciaSelectNo.includes("5") ? (n(),
                                                          a("div", {
                                                            key: 2,
                                                            class: "specialsmall",
                                                            onClick: N[24] || (N[24] = D => f(c.isthreenumber, "small"))
                                                          }, t(u(_)("small")), 1)) : M("", !0), c.speciaSelectNo.includes("2") ? (n(),
                                                            a("div", {
                                                              key: 3,
                                                              class: "specialodd",
                                                              onClick: N[25] || (N[25] = D => f(c.isthreenumber, "odd"))
                                                            }, t(u(_)("xosoTxt71")), 1)) : M("", !0), c.speciaSelectNo.includes("3") ? (n(),
                                                              a("div", {
                                                                key: 4,
                                                                class: "specialeven",
                                                                onClick: N[26] || (N[26] = D => f(c.isthreenumber, "even"))
                                                              }, t(u(_)("xosoTxt70")), 1)) : M("", !0)])])) : M("", !0), c.activeTab === 3 ? (n(),
                                                                a(B, {
                                                                  key: 3
                                                                }, G(10, (D, j) => e("div", {
                                                                  class: "numbercontainer",
                                                                  key: D
                                                                }, [e("div", f4, [e("div", null, [W(t(c.hundred) + t(j) + "0", 1), g4, W("/"), y4, W(t(c.hundred) + t(j) + "9", 1)])]), e("div", b4, [(n(),
                                                                  a(B, null, G(10, (X, ce) => e("div", {
                                                                    class: "item",
                                                                    key: X
                                                                  }, [e("div", {
                                                                    onClick: de => $(c.hundred, j, ce)
                                                                  }, [e("div", {
                                                                    class: P(c.quicknumList.includes(c.hundred + "" + j + ce) ? "number action" : "number")
                                                                  }, t(c.hundred) + t(j) + t(ce), 3)], 8, $4)])), 64))])])), 64)) : M("", !0)])], 512), [[et, c.activeTab === 3]])])])
        }
    }
  });
const T4 = K(k4, [["__scopeId", "data-v-1b2d551c"]])
  , w4 = {
    class: "TasteContainer"
  }
  , C4 = {
    class: "TasteHeader"
  }
  , N4 = {
    class: "NumberSelect"
  }
  , L4 = {
    class: "NumberSelectCon"
  }
  , I4 = ["onClick"]
  , R4 = U({
    __name: "TasteSelect",
    props: {
      funplaylist: {
        type: Array,
        default: []
      },
      numbercon: {
        type: String,
        default: "1000"
      }
    },
    emits: ["selectvalue"],
    setup(c, { emit: s }) {
      const l = (i, _) => {
        s("selectvalue", i, _)
      }
        ;
      return (i, _) => (n(),
        a("div", w4, [e("div", C4, t(i.$t("xosoTxt60")), 1), e("div", N4, [e("div", L4, [(n(!0),
          a(B, null, G(c.funplaylist, (p, r) => (n(),
            a("div", {
              class: P(["NumberCon", {
                action: p.oddTypeName === c.numbercon,
                more: r == 18
              }]),
              key: r,
              onClick: d => l(p, r)
            }, [e("div", {
              class: P(["number", {
                active: p.oddTypeName === c.numbercon
              }])
            }, t(i.$t("code" + p.oddTypeNameCode)), 3), e("div", {
              class: P(["odds", {
                active: p.oddTypeName === c.numbercon
              }])
            }, t(p.oddsOrAmount), 3)], 10, I4))), 128))])])]))
    }
  });
const x4 = K(R4, [["__scopeId", "data-v-292b9857"]])
  , S4 = {
    class: "Footer__C"
  }
  , B4 = {
    class: "nav c-row c-row-between"
  }
  , M4 = {
    class: "c-row left c-row c-row-middle-center"
  }
  , P4 = {
    class: "item"
  }
  , G4 = {
    class: "txt"
  }
  , D4 = {
    class: "num"
  }
  , A4 = {
    class: "item"
  }
  , O4 = {
    class: "txt"
  }
  , z4 = {
    class: "num"
  }
  , q4 = {
    class: ""
  }
  , W4 = U({
    __name: "Footer",
    props: {
      betNumber: {
        default: {
          type: Number,
          default: 0
        }
      },
      betSum: {
        default: {
          type: Number,
          default: 0
        }
      }
    },
    emits: ["playBet"],
    setup(c, { emit: s }) {
      const l = () => {
        s("playBet")
      }
        ;
      return (i, _) => (n(),
        a("div", S4, [e("div", B4, [e("div", M4, [e("div", P4, [e("p", G4, t(i.$t("quantity")), 1), e("span", D4, t(i.betNumber || 0), 1)]), e("div", A4, [e("p", O4, t(i.$t("betAmount")), 1), e("span", z4, t(u(Re)(i.betSum || 0)), 1)])]), e("div", {
          class: P(["c-row c-row-middle-center", [i.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
          onClick: _[0] || (_[0] = p => l())
        }, [e("span", q4, t(i.$t("betting")), 1)], 2)])]))
    }
  });
const E4 = K(W4, [["__scopeId", "data-v-afe1106e"]])
  , F4 = {
    class: "RecordNav__C"
  }
  , j4 = ["onClick"]
  , V4 = U({
    __name: "RecordNav",
    props: {
      record: {
        type: String,
        default: "GameRecord"
      }
    },
    setup(c) {
      const s = c
        , { t: l } = ye()
        , i = g([{
          name: l("gameRecords"),
          componentName: "GameRecord"
        }, {
          name: l("myGame"),
          componentName: "MyGameRecord"
        }]);
      return (_, p) => (n(),
        a("div", F4, [(n(!0),
          a(B, null, G(i.value, (r, d) => (n(),
            a("div", {
              key: d,
              onClick: v => _.$emit("changeC", r.componentName),
              class: P({
                active: s.record == r.componentName
              })
            }, t(r.name), 11, j4))), 128))]))
    }
  });
const H4 = K(V4, [["__scopeId", "data-v-884042b3"]])
  , U4 = {
    class: "GameRecord__C"
  }
  , K4 = {
    class: "GameRecord__C-head"
  }
  , X4 = {
    class: "GameRecord__C-body"
  }
  , Q4 = {
    class: "c-tc goItem"
  }
  , Y4 = {
    class: "c-row"
  }
  , Z4 = {
    class: "c-row c-row-middle-center"
  }
  , J4 = {
    class: "c-row c-row-middle-center time"
  }
  , eN = {
    key: 0
  }
  , tN = {
    key: 1
  }
  , sN = {
    key: 0,
    class: "details"
  }
  , nN = {
    key: 0,
    class: "detailLi"
  }
  , aN = {
    class: "prize-tit"
  }
  , oN = {
    key: 0
  }
  , lN = {
    class: "prize-box c-row c-flex-warp"
  }
  , iN = {
    class: "prize-box-item action"
  }
  , cN = {
    key: 1,
    class: "GameRecord__C-body-empty"
  }
  , uN = {
    key: 0,
    class: "GameRecord__C-foot"
  }
  , rN = {
    class: "GameRecord__C-foot-page"
  }
  , dN = U({
    __name: "GameRecord",
    props: {
      areId: {},
      cityCode: {},
      gVSs: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , { t: i } = ye()
        , _ = g([])
        , p = g(4)
        , r = g(10)
        , d = g(1)
        , v = g(-1)
        , o = async (k = !1, w) => {
          var m, C, N;
          if ((w == null ? void 0 : w.list.length) > 0)
            _.value = Jn(w == null ? void 0 : w.list) || [],
              p.value = w == null ? void 0 : w.totalPage,
              d.value = w == null ? void 0 : w.pageNo;
          else {
            if (l.cityCode === "")
              return;
            let S;
            l.gVSs == "1" ? S = await ae(dl({
              pageSize: r.value,
              pageNo: d.value,
              areId: l == null ? void 0 : l.areId,
              cityCode: l == null ? void 0 : l.cityCode
            })) : l.gVSs == "2" && (S = await ae(ya({
              pageSize: r.value,
              pageNo: d.value,
              areId: l.areId,
              typeId: Number(l.cityCode)
            }))),
              _.value = ((m = S.data) == null ? void 0 : m.list) || [],
              p.value = (C = S.data) == null ? void 0 : C.totalPage,
              d.value = (N = S.data) == null ? void 0 : N.pageNo
          }
        }
        , h = k => {
          for (var w = [], m = 0; m < k.length; m++) {
            var C = w.findIndex(function (N) {
              return N.resultType === k[m].resultType
            });
            C !== -1 ? w[C].result.push(k[m].result) : w.push({
              resultType: k[m].resultType,
              result: [k[m].result]
            })
          }
          return w
        }
        ;
      function y(k) {
        return k.join("-")
      }
      function T(k) {
        switch (k) {
          case 0:
            return i("GrandPrize");
          case 1:
            return i("firstprize");
          case 2:
            return i("secondprize");
          case 3:
            return i("thirdprize");
          case 4:
            return i("fourprize");
          case 5:
            return i("fiveprize");
          case 6:
            return i("sixprize");
          case 7:
            return i("sevenprize");
          case 8:
            return i("eightprize")
        }
      }
      const $ = () => {
        d.value--,
          o()
      }
        , b = k => {
          v.value == k ? v.value = -1 : v.value = k
        }
        , f = () => {
          d.value++,
            o()
        }
        ;
      return s({
        getData: o
      }),
        wt(() => {
          v.value = -1
        }
        ),
        (k, w) => {
          var S, L;
          const m = V("van-col")
            , C = V("van-row")
            , N = V("van-icon");
          return n(),
            a("div", U4, [e("div", K4, [R(C, null, {
              default: A(() => [R(m, {
                span: "8"
              }, {
                default: A(() => [W(t(k.$t("betSerial")), 1)]),
                _: 1
              }), R(m, {
                span: "10"
              }, {
                default: A(() => [W(t(k.$t("result")), 1)]),
                _: 1
              }), R(m, {
                span: "6"
              }, {
                default: A(() => [W(t(k.$t("time")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", X4, [(S = _.value) != null && S.length ? (n(!0),
              a(B, {
                key: 0
              }, G(_.value, (x, I) => (n(),
                se(C, {
                  key: I,
                  onClick: O => b(I)
                }, {
                  default: A(() => [R(m, {
                    span: "8"
                  }, {
                    default: A(() => [e("div", Q4, t(x.issueNumber), 1)]),
                    _: 2
                  }, 1024), R(m, {
                    span: "10",
                    class: "c-row c-row-middle-center"
                  }, {
                    default: A(() => [e("div", Y4, [e("div", Z4, [x.openingResult ? (n(!0),
                      a(B, {
                        key: 0
                      }, G(x.openingResult[0].result, (O, D) => (n(),
                        a("div", {
                          class: "li circle-black c-row c-row-middle-center c-tc",
                          key: D
                        }, [e("div", null, t(O), 1)]))), 128)) : M("", !0)])])]),
                    _: 2
                  }, 1024), R(m, {
                    span: "6"
                  }, {
                    default: A(() => [e("div", J4, [k.gVSs == "1" ? (n(),
                      a("div", eN, t(x.openingTime.substr(0, 10)), 1)) : (n(),
                        a("div", tN, t(x.openingTime), 1))])]),
                    _: 2
                  }, 1024), I == v.value ? (n(),
                    a("div", sN, [x.openingResult ? (n(),
                      a("div", nN, [(n(!0),
                        a(B, null, G(h(x.openingResult), (O, D) => (n(),
                          a("div", {
                            class: P([`selectItem${O.resultType}`, "prize"]),
                            key: D
                          }, [e("div", aN, t(T(O.resultType)), 1), [0, 1, 2].includes(O.resultType) ? (n(),
                            a("div", oN, "|")) : M("", !0), e("div", lN, [e("span", iN, t(y(O.result)), 1)])], 2))), 128))])) : M("", !0)])) : M("", !0)]),
                  _: 2
                }, 1032, ["onClick"]))), 128)) : (n(),
                  a("div", cN, [R(ut)]))]), (L = _.value) != null && L.length ? (n(),
                    a("div", uN, [e("div", {
                      class: P(["GameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                      }]),
                      onClick: $
                    }, [R(N, {
                      name: "arrow-left",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", rN, t(d.value) + "/" + t(p.value), 1), e("div", {
                      class: P(["GameRecord__C-foot-next", {
                        disabled: d.value >= p.value
                      }]),
                      onClick: f
                    }, [R(N, {
                      name: "arrow",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const _N = K(dN, [["__scopeId", "data-v-b5a08846"]])
  , vN = c => (De("data-v-81486f6a"),
    c = c(),
    Ae(),
    c)
  , pN = {
    class: "MyGameRecordList__C"
  }
  , mN = ["onClick"]
  , hN = {
    class: "box"
  }
  , fN = {
    class: "time"
  }
  , gN = {
    key: 0,
    class: "state state0"
  }
  , yN = {
    key: 1,
    class: "state state3"
  }
  , bN = {
    key: 2,
    class: "state state4"
  }
  , $N = {
    key: 3,
    class: "state state2"
  }
  , kN = {
    key: 4,
    class: "state state5"
  }
  , TN = {
    key: 5,
    class: "state state1"
  }
  , wN = {
    key: 0,
    class: "info"
  }
  , CN = {
    class: "order"
  }
  , NN = {
    key: 0,
    class: "li"
  }
  , LN = {
    class: "lab"
  }
  , IN = ["onClick"]
  , RN = ["src"]
  , xN = {
    key: 1,
    class: "li"
  }
  , SN = {
    class: "lab"
  }
  , BN = {
    class: "sub"
  }
  , MN = {
    class: "li"
  }
  , PN = {
    class: "lab"
  }
  , GN = {
    key: 0,
    class: "sub"
  }
  , DN = {
    key: 1,
    class: "sub"
  }
  , AN = {
    key: 2,
    class: "li"
  }
  , ON = {
    class: "lab"
  }
  , zN = {
    class: "sub"
  }
  , qN = {
    class: "li"
  }
  , WN = {
    class: "lab"
  }
  , EN = {
    class: "sub"
  }
  , FN = {
    class: "li"
  }
  , jN = {
    class: "lab"
  }
  , VN = {
    class: "sub"
  }
  , HN = {
    class: "li"
  }
  , UN = {
    class: "lab"
  }
  , KN = {
    class: "sub"
  }
  , XN = {
    class: "li"
  }
  , QN = {
    class: "lab"
  }
  , YN = {
    class: "sub"
  }
  , ZN = {
    class: "li"
  }
  , JN = {
    class: "lab"
  }
  , e5 = {
    class: "sub"
  }
  , t5 = vN(() => e("div", {
    class: "line"
  }, [e("p")], -1))
  , s5 = {
    class: "bet"
  }
  , n5 = {
    class: "li betNum"
  }
  , a5 = {
    class: "lab"
  }
  , o5 = {
    key: 0,
    class: "txt"
  }
  , l5 = {
    key: 1,
    class: "txt"
  }
  , i5 = {
    key: 2,
    class: "txt"
  }
  , c5 = {
    key: 3,
    class: "betList select"
  }
  , u5 = {
    key: 4,
    class: "betList select"
  }
  , r5 = {
    class: "li"
  }
  , d5 = {
    class: "lab"
  }
  , _5 = {
    key: 0,
    class: "state state0"
  }
  , v5 = {
    key: 1,
    class: "state state3"
  }
  , p5 = {
    key: 2,
    class: "state state4"
  }
  , m5 = {
    key: 3,
    class: "state state2"
  }
  , h5 = {
    key: 4,
    class: "state state5"
  }
  , f5 = {
    key: 5,
    class: "state state1"
  }
  , g5 = {
    class: "li"
  }
  , y5 = {
    class: "lab"
  }
  , b5 = {
    key: 0,
    class: "sub success"
  }
  , $5 = {
    key: 1,
    class: "sub fail"
  }
  , k5 = {
    key: 2,
    class: "sub"
  }
  , T5 = {
    key: 0,
    class: "li"
  }
  , w5 = {
    class: "lab"
  }
  , C5 = {
    class: "sub"
  }
  , N5 = {
    key: 1,
    class: "li"
  }
  , L5 = {
    class: "lab"
  }
  , I5 = {
    class: "sub"
  }
  , R5 = {
    key: 0
  }
  , x5 = ["onClick"]
  , S5 = {
    key: 1,
    class: "result"
  }
  , B5 = {
    key: 0,
    class: "txt"
  }
  , M5 = {
    key: 1,
    class: "txt"
  }
  , P5 = {
    key: 2,
    class: "txt"
  }
  , G5 = {
    key: 3,
    class: "txt"
  }
  , D5 = {
    key: 4,
    class: "txt"
  }
  , A5 = {
    key: 5,
    class: "txt"
  }
  , O5 = {
    key: 6,
    class: "txt"
  }
  , z5 = {
    key: 7,
    class: "txt"
  }
  , q5 = {
    key: 8,
    class: "txt"
  }
  , W5 = {
    class: "num"
  }
  , E5 = U({
    __name: "MyRecordList",
    props: {
      mayrecord: {},
      gVSs: {}
    },
    emits: ["click-cance"],
    setup(c, { emit: s }) {
      const { t: l } = ye()
        , i = g(-1)
        , _ = k => {
          i.value === k ? i.value = -1 : i.value = k
        }
        , p = g(!1)
        , r = g("")
        , d = async () => {
          await ae(vl({
            orderId: r.value
          })) && (p.value = !1,
            nn(l("xosoTxt96")),
            s("click-cance"))
        }
        , v = k => {
          r.value = k,
            p.value = !0
        }
        , o = _l(d, 1e3)
        , h = k => {
          for (var w = [], m = 0; m < k.length; m++) {
            var C = w.findIndex(function (N) {
              return N.resultType === k[m].resultType
            });
            C !== -1 ? w[C].result.push("-" + k[m].result) : w.push({
              resultType: k[m].resultType,
              result: [k[m].result]
            })
          }
          return w
        }
        , y = k => {
          const w = T(k);
          return $(w)
        }
        , T = k => {
          let w = [];
          if (k.includes(",")) {
            let m = k.split(",")
              , C = {};
            for (let N = 0; m.length > N; N++)
              C = m[N].split("|"),
                w.push(C);
            return w
          }
          return k
        }
        , $ = k => {
          let w = k[0]
            , m = k[1]
            , C = [];
          for (let S = 0; w.length > S; S++)
            for (let L = 0; m.length > L; L++)
              C.push(w[S] + m[L]);
          let N = k.slice(2);
          return N.length > 0 ? $([C, ...N]) : C
        }
        , b = k => {
          if (k != null) {
            let w = k.split(",");
            if (w.length > 0)
              return w
          }
          return []
        }
        , f = k => k.replace(/\|/g, ",");
      return Pe(() => { }
      ),
        (k, w) => (n(),
          a("div", pN, [(n(!0),
            a(B, null, G(k.mayrecord, (m, C) => (n(),
              a("div", {
                class: P(i.value === C ? "item active" : "item"),
                key: m,
                onClick: N => _(C)
              }, [e("div", hN, [e("div", null, [e("h4", null, t(u(l)("code" + m.bettingParentTypeNameCode)), 1), e("span", fN, t(m.createTime), 1)]), m.status === 1 ? (n(),
                a("div", gN, [e("p", null, t(u(l)("bettingResultState1")), 1)])) : M("", !0), m.status === 3 ? (n(),
                  a("div", yN, [e("p", null, t(u(l)("hasWon")), 1), e("span", null, "+" + t(m.winningAmount), 1)])) : M("", !0), m.status === 2 ? (n(),
                    a("div", bN, [e("p", null, t(u(l)("bettingResultState3")), 1), e("span", null, "-" + t(m.realBettingAmount), 1)])) : M("", !0), m.status === 4 ? (n(),
                      a("div", $N, [e("p", null, t(u(l)("xosoTxt74")), 1)])) : M("", !0), m.status === 5 ? (n(),
                        a("div", kN, [e("p", null, t(u(l)("xosoTxt75")), 1)])) : M("", !0), m.status === 6 ? (n(),
                          a("div", TN, [e("p", null, t(u(l)("xosoTxt76")), 1)])) : M("", !0)]), i.value === C ? (n(),
                            a("div", wN, [e("div", CN, [m.orderNo ? (n(),
                              a("div", NN, [e("div", LN, t(u(l)("orderNo")), 1), e("div", {
                                class: "sub",
                                onClick: _t(N => u(Vt)(m.orderNo), ["stop"])
                              }, [W(t(m.orderNo) + " ", 1), e("img", {
                                src: u(re)("home/AllLotteryGames/WinGo", "copy")
                              }, null, 8, RN)], 8, IN)])) : M("", !0), m.issueNo ? (n(),
                                a("div", xN, [e("div", SN, t(u(l)("betIssue")), 1), e("div", BN, t(m.issueNo), 1)])) : M("", !0), e("div", MN, [e("div", PN, t(u(l)("area")), 1), k.gVSs == "1" ? (n(),
                                  a("div", GN, t(u(l)("code" + m.areNameCode)), 1)) : k.gVSs == "2" ? (n(),
                                    a("div", DN, t(u(l)("code" + m.typeCode)), 1)) : M("", !0)]), k.gVSs == "1" ? (n(),
                                      a("div", AN, [e("div", ON, t(u(l)("xosoTxt77")), 1), e("div", zN, t(u(l)("code" + m.nameCode)), 1)])) : M("", !0), e("div", qN, [e("div", WN, t(u(l)("gamePlay")), 1), e("div", EN, t(u(l)("code" + m.bettingParentTypeNameCode)), 1)]), e("div", FN, [e("div", jN, t(u(l)("xosoTxt78")), 1), e("div", VN, t(u(l)("code" + m.bettingTypeNameCode)), 1)]), e("div", HN, [e("div", UN, t(u(l)("amountMay")), 1), e("div", KN, t(m.amount), 1)]), e("div", XN, [e("div", QN, t(u(l)("multiple")), 1), e("div", YN, t(m.bettingMultiple), 1)]), e("div", ZN, [e("div", JN, t(u(l)("xosoTxt79")), 1), e("div", e5, t(m.totalBetting) + " " + t(u(l)("note")), 1)])]), t5, e("div", s5, [e("div", n5, [e("div", a5, [W(t(u(l)("bettingnumber")), 1), m.bettingFormat === 1 ? (n(),
                                        a("span", o5, "(" + t(u(l)("selectNo")) + ")", 1)) : M("", !0), m.bettingFormat === 2 ? (n(),
                                          a("span", l5, "(" + t(u(l)("xosoTxt80")) + ")", 1)) : M("", !0), m.bettingFormat === 3 ? (n(),
                                            a("span", i5, "(" + t(u(l)("xosoTxt81")) + ")", 1)) : M("", !0), m.bettingFormat == 1 ? (n(),
                                              a("div", c5, [(n(!0),
                                                a(B, null, G(y(m.bettingContent), (N, S) => (n(),
                                                  a("span", {
                                                    class: P({
                                                      active: b(m.winningNum).includes(N)
                                                    }),
                                                    key: S
                                                  }, t(N), 3))), 128))])) : (n(),
                                                    a("div", u5, [(n(!0),
                                                      a(B, null, G(m.bettingContent.split(","), (N, S) => (n(),
                                                        a("span", {
                                                          class: P({
                                                            active: b(m.winningNum).includes(N)
                                                          }),
                                                          key: S
                                                        }, t(f(N)), 3))), 128))]))])]), e("div", r5, [e("div", d5, t(u(l)("statusMay")), 1), m.status === 1 ? (n(),
                                                          a("div", _5, [e("p", null, t(u(l)("bettingResultState1")), 1)])) : M("", !0), m.status === 3 ? (n(),
                                                            a("div", v5, [e("p", null, t(u(l)("hasWon")), 1)])) : M("", !0), m.status === 2 ? (n(),
                                                              a("div", p5, [e("p", null, t(u(l)("bettingResultState3")), 1)])) : M("", !0), m.status === 4 ? (n(),
                                                                a("div", m5, [e("p", null, t(u(l)("xosoTxt74")), 1)])) : M("", !0), m.status === 5 ? (n(),
                                                                  a("div", h5, [e("p", null, t(u(l)("xosoTxt75")), 1)])) : M("", !0), m.status === 6 ? (n(),
                                                                    a("div", f5, [e("p", null, t(u(l)("xosoTxt76")), 1)])) : M("", !0)]), e("div", g5, [e("div", y5, t(u(l)("winOrLose")), 1), m.status === 3 ? (n(),
                                                                      a("div", b5, "+" + t(m.winningAmount), 1)) : m.status === 2 ? (n(),
                                                                        a("div", $5, "-" + t(m.realBettingAmount), 1)) : (n(),
                                                                          a("div", k5, "---"))]), m.createTime ? (n(),
                                                                            a("div", T5, [e("div", w5, t(u(l)("createTime")), 1), e("div", C5, t(m.createTime), 1)])) : M("", !0), m.openingTime ? (n(),
                                                                              a("div", N5, [e("div", L5, t(u(l)("winTrxTime")), 1), e("div", I5, t(m.openingTime), 1)])) : M("", !0)]), m.issueNoStatus === 1 && m.status === 1 && k.gVSs == "1" ? (n(),
                                                                                a("div", R5, [e("div", {
                                                                                  class: "btn",
                                                                                  onClick: _t(N => v(m.id), ["stop"])
                                                                                }, t(u(l)("xosoTxt82")), 9, x5)])) : M("", !0), m.openingResult ? (n(),
                                                                                  a("div", S5, [(n(!0),
                                                                                    a(B, null, G(h(m.openingResult), (N, S) => (n(),
                                                                                      a("div", {
                                                                                        class: P(S < 3 ? "result-item jusb" : "result-item"),
                                                                                        key: S
                                                                                      }, [N.resultType == 0 ? (n(),
                                                                                        a("div", B5, t(u(l)("GrandPrize")), 1)) : M("", !0), N.resultType == 1 ? (n(),
                                                                                          a("div", M5, t(u(l)("firstprize")), 1)) : M("", !0), N.resultType == 2 ? (n(),
                                                                                            a("div", P5, t(u(l)("secondprize")), 1)) : M("", !0), N.resultType == 3 ? (n(),
                                                                                              a("div", G5, t(u(l)("thirdprize")), 1)) : M("", !0), N.resultType == 4 ? (n(),
                                                                                                a("div", D5, t(u(l)("fourprize")), 1)) : M("", !0), N.resultType == 5 ? (n(),
                                                                                                  a("div", A5, t(u(l)("fiveprize")), 1)) : M("", !0), N.resultType == 6 ? (n(),
                                                                                                    a("div", O5, t(u(l)("sixprize")), 1)) : M("", !0), N.resultType == 7 ? (n(),
                                                                                                      a("div", z5, t(u(l)("sevenprize")), 1)) : M("", !0), N.resultType == 8 ? (n(),
                                                                                                        a("div", q5, t(u(l)("eightprize")), 1)) : M("", !0), e("div", W5, [(n(!0),
                                                                                                          a(B, null, G(N.result, (L, x) => (n(),
                                                                                                            a("span", {
                                                                                                              key: x
                                                                                                            }, t(L), 1))), 128))])], 2))), 128))])) : M("", !0)])) : M("", !0)], 10, mN))), 128)), R(xt, {
                                                                                                              show: p.value,
                                                                                                              "onUpdate:show": w[0] || (w[0] = m => p.value = m),
                                                                                                              title: u(l)("xosoTxt99"),
                                                                                                              onConfirm: u(o)
                                                                                                            }, null, 8, ["show", "title", "onConfirm"])]))
    }
  });
const F5 = K(E5, [["__scopeId", "data-v-81486f6a"]])
  , j5 = {
    class: "MyGameRecord__C"
  }
  , V5 = {
    class: "MyGameRecord__C-body"
  }
  , H5 = {
    key: 0,
    class: "MyGameRecord__C-head"
  }
  , U5 = {
    key: 2,
    class: "MyGameRecord__C-body-empty"
  }
  , K5 = {
    key: 0,
    class: "MyGameRecord__C-foot"
  }
  , X5 = {
    class: "MyGameRecord__C-foot-page"
  }
  , Q5 = U({
    __name: "MyGameRecord",
    props: {
      parmas: {},
      ApiFun: {},
      cityCode: {},
      hasHead: {
        type: Boolean,
        default: !0
      },
      gVSs: {},
      areId: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = $e()
        , _ = g(0)
        , p = g(10)
        , r = g(1)
        , d = g([])
        , v = async () => {
          var w, m, C;
          const f = o(l.parmas);
          (l == null ? void 0 : l.gVSs) == "2" && (l != null && l.areId && (f.areId = l == null ? void 0 : l.areId),
            l != null && l.cityCode && (f.typeId = Number(l == null ? void 0 : l.cityCode)));
          const k = await ae(l.ApiFun({
            pageSize: p.value,
            pageNo: r.value,
            ...f
          }));
          k && (d.value = ((w = k.data) == null ? void 0 : w.list) || [],
            _.value = ((m = k.data) == null ? void 0 : m.totalPage) || 0,
            r.value = (C = k.data) == null ? void 0 : C.pageNo)
        }
        ;
      function o(f) {
        const k = {};
        for (const w in f)
          f[w] !== "" && (k[w] = f[w]);
        return k
      }
      const h = () => {
        v()
      }
        , y = ee(() => l.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : l.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : "")
        , T = f => {
          i.push({
            name: f,
            query: {
              areId: l.areId,
              typeId: l.cityCode
            }
          })
        }
        , $ = () => {
          r.value--,
            v()
        }
        , b = () => {
          r.value++,
            v()
        }
        ;
      return s({
        getData: v
      }),
        wt(() => {
          v()
        }
        ),
        (f, k) => {
          var m, C;
          const w = V("van-icon");
          return n(),
            a("div", j5, [e("div", V5, [f.hasHead ? (n(),
              a("div", H5, [e("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: k[0] || (k[0] = N => T(y.value || ""))
              }, t(f.$t("more")), 1)])) : M("", !0), (m = d.value) != null && m.length ? (n(),
                se(F5, {
                  key: 1,
                  mayrecord: d.value,
                  onClickCance: h,
                  gVSs: f.gVSs
                }, null, 8, ["mayrecord", "gVSs"])) : (n(),
                  a("div", U5, [R(ut)]))]), (C = d.value) != null && C.length ? (n(),
                    a("div", K5, [e("div", {
                      class: P(["MyGameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: $
                    }, [R(w, {
                      name: "arrow-left",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", X5, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["MyGameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: b
                    }, [R(w, {
                      name: "arrow",
                      class: "MyGameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const gn = K(Q5, [["__scopeId", "data-v-a9fa5d22"]])
  , Y5 = {
    key: 0,
    class: "WinningTip__C-body-l1 isL"
  }
  , Z5 = {
    key: 1,
    class: "WinningTip__C-body-l1"
  }
  , J5 = {
    key: 2,
    class: "notwinning"
  }
  , e8 = {
    key: 3,
    class: "WinningTip__C-body-l2"
  }
  , t8 = {
    key: 4,
    class: "WinningTip__C-body-l5"
  }
  , s8 = {
    class: "WinningTip__C-body-l5-content"
  }
  , n8 = {
    class: "balltext"
  }
  , a8 = {
    class: "WinningTip__C-body-l3"
  }
  , o8 = {
    key: 0,
    class: "isLose"
  }
  , l8 = {
    class: "head"
  }
  , i8 = {
    class: "bonus"
  }
  , c8 = {
    class: "gameDetail"
  }
  , u8 = {
    class: "gameDetail"
  }
  , r8 = {
    class: "WinningTip__C-body-l4"
  }
  , d8 = ["onClick"]
  , _8 = U({
    __name: "WinningTips",
    setup(c, { expose: s }) {
      const l = ee(() => p.value[0] ? p.value[0].winningAmount == 0 : !1)
        , i = ee(() => p.value[0] || {})
        , _ = g(!1)
        , p = g([]);
      let r = g();
      const d = () => {
        clearTimeout(r.value),
          p.value.shift(),
          _.value && p.value.length && (r.value = setTimeout(() => {
            d()
          }
            , 1e3 * 3))
      }
        ;
      Ge(() => p.value.length, y => {
        y ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
      }
      );
      const v = () => {
        _.value = !_.value,
          _.value ? r.value = setTimeout(() => {
            d()
          }
            , 1e3 * 3) : clearTimeout(r.value)
      }
        , o = y => {
          p.value.push(y),
            _.value && (r.value = setTimeout(() => {
              d()
            }
              , 1e3 * 3))
        }
        , h = () => {
          p.value = []
        }
        ;
      return s({
        showMark: o
      }),
        (y, T) => be((n(),
          a("div", {
            class: "WinningTip__C",
            onClick: d
          }, [e("div", {
            class: P(["WinningTip__C-body", {
              isL: l.value
            }])
          }, [l.value ? (n(),
            a("div", Y5, t(y.$t("k3WarningTip1")), 1)) : M("", !0), l.value ? M("", !0) : (n(),
              a("div", Z5, t(y.$t("k3WarningTip2")), 1)), l.value ? (n(),
                a("div", J5)) : M("", !0), l.value ? M("", !0) : (n(),
                  a("div", e8, t(y.$t("code" + i.value.bettingParentTypeNameCode)) + "/" + t(y.$t("code" + i.value.bettingTypeNameCode)), 1)), l.value ? M("", !0) : (n(),
                    a("div", t8, [e("div", s8, [(n(!0),
                      a(B, null, G(i.value.openingResult, ($, b) => (n(),
                        a("div", {
                          class: "ball",
                          key: b
                        }, [e("div", n8, t($), 1)]))), 128))])])), e("div", a8, [l.value ? (n(),
                          a("div", o8, t(y.$t("winTips4")), 1)) : M("", !0), l.value ? M("", !0) : (n(),
                            a(B, {
                              key: 1
                            }, [e("div", l8, t(y.$t("winTips5")), 1), e("div", i8, t(u(Re)(i.value.winningAmount)), 1)], 64)), e("div", c8, t(y.$t(`code${i.value.typeCode}`)), 1), e("div", u8, t(y.$t("winTips6")) + t(i.value.issueNo), 1)]), e("div", r8, [e("div", {
                              class: P(["acitveBtn", {
                                active: _.value
                              }]),
                              onClick: _t(v, ["stop"])
                            }, null, 10, d8), W(" " + t(y.$t("autoShutOff3s")), 1)]), e("div", {
                              class: "closeBtn",
                              onClick: h
                            })], 2)], 512)), [[et, p.value.length]])
    }
  });
const v8 = K(_8, [["__scopeId", "data-v-b229ff74"]])
  , yn = c => (De("data-v-273cca7e"),
    c = c(),
    Ae(),
    c)
  , p8 = {
    class: "NewVietnam__C"
  }
  , m8 = yn(() => e("div", {
    class: "bottombg"
  }, null, -1))
  , h8 = {
    class: "box p-l-10 p-r-10 p-t-10 p-b-10"
  }
  , f8 = ["src"]
  , g8 = {
    class: "title c-tc"
  }
  , y8 = {
    key: 0,
    class: "titlebets c-tc border60"
  }
  , b8 = {
    class: "box"
  }
  , $8 = {
    class: "c-row"
  }
  , k8 = {
    key: 2,
    class: P("c-row c-flex-warp compound")
  }
  , T8 = {
    key: 0,
    class: "item"
  }
  , w8 = {
    class: "title"
  }
  , C8 = {
    class: "numcontainer"
  }
  , N8 = {
    key: 1,
    class: "item"
  }
  , L8 = {
    class: "title"
  }
  , I8 = {
    class: "numcontainer"
  }
  , R8 = {
    key: 2,
    class: "item"
  }
  , x8 = {
    class: "title"
  }
  , S8 = {
    class: "numcontainer"
  }
  , B8 = {
    key: 3,
    class: "item"
  }
  , M8 = {
    class: "title"
  }
  , P8 = {
    class: "numcontainer"
  }
  , G8 = {
    key: 4,
    class: "item"
  }
  , D8 = {
    class: "numcontainer"
  }
  , A8 = {
    class: "popup-info"
  }
  , O8 = {
    class: "popup-info-item c-row c-row-between"
  }
  , z8 = {
    class: "tit"
  }
  , q8 = {
    class: "c-row c-row-between stepper-box"
  }
  , W8 = {
    class: "popup-info-item c-row c-flew-end"
  }
  , E8 = {
    class: "c-row multiple-box"
  }
  , F8 = ["onClick"]
  , j8 = {
    class: "c-row c-row-between c-row-middle quantity"
  }
  , V8 = {
    class: "c-row c-row-middle-center"
  }
  , H8 = yn(() => e("span", {
    class: "line"
  }, "|", -1))
  , U8 = {
    class: "num"
  }
  , K8 = {
    class: "c-row c-row-middle-center"
  }
  , X8 = yn(() => e("span", {
    class: "line"
  }, "|", -1))
  , Q8 = {
    class: "num"
  }
  , Y8 = {
    class: "wallet c-row c-row-between c-row-middle"
  }
  , Z8 = {
    class: "txt c-row"
  }
  , J8 = {
    class: "num c-row c-row-middle"
  }
  , e6 = {
    class: "balance c-row c-row-middle"
  }
  , t6 = {
    class: "txt"
  }
  , s6 = {
    class: "num yellow"
  }
  , n6 = {
    key: 0,
    class: "wallet c-row c-row-between c-row-middle"
  }
  , a6 = {
    class: "txt c-row bg7172"
  }
  , o6 = ["src"]
  , l6 = {
    class: "popup-info-item c-row c-row-middle"
  }
  , i6 = {
    class: "agree p-r-15"
  }
  , c6 = {
    class: "popup-btn c-row c-row-between"
  }
  , u6 = {
    class: "left"
  }
  , r6 = {
    class: "right"
  }
  , d6 = {
    class: ""
  }
  , _6 = {
    class: "areList"
  }
  , v6 = ["src"]
  , p6 = {
    class: "itemsC"
  }
  , m6 = ["onClick"]
  , h6 = {
    class: "PreSale"
  }
  , f6 = {
    class: "head"
  }
  , g6 = {
    class: "body"
  }
  , y6 = {
    class: "foot"
  }
  , b6 = ["src"]
  , $6 = ["src"]
  , k6 = {
    class: "font36"
  }
  , T6 = {
    class: "tipMsg"
  }
  , w6 = U({
    __name: "index",
    setup(c) {
      var In, Rn;
      const s = $e()
        , l = ea()
        , { t: i } = ye()
        , _ = g(!1)
        , p = ee(() => {
          var z, q;
          return y.value ? (z = y.value) == null ? void 0 : z.type : (q = l.query) == null ? void 0 : q.type
        }
        )
        , r = g(s.currentRoute.value.query.nameCode)
        , d = g(Number((In = l.query) == null ? void 0 : In.areId) || 1)
        , v = ee(() => r.value ? i("code" + r.value) : "")
        , o = g((Rn = l.query) == null ? void 0 : Rn.code)
        , h = g()
        , y = g()
        , T = je({
          bettingParentType: "",
          areId: "",
          startDate: "",
          endDate: ""
        })
        , $ = new Date
        , b = `${at($).format("YYYY-MM-DD")} 00:00:00`
        , f = `${at($).format("YYYY-MM-DD")} 23:59:59`;
      T.startDate = b,
        T.endDate = f;
      const k = g(!1)
        , w = g([])
        , m = g([])
        , C = g({})
        , N = g(0)
        , S = g(1)
        , L = g(0)
        , x = g(1)
        , I = g(1)
        , O = g("")
        , D = g("")
        , j = g("00:00:00")
        , X = g(1.995)
        , ce = g(1)
        , de = g([])
        , le = g(0)
        , J = g("")
        , Q = g(1)
        , _e = g("")
        , Se = g([])
        , Oe = g(0)
        , ve = g(0)
        , ke = g(0)
        , Te = g(0)
        , Be = g("")
        , Me = g()
        , me = g(1e3)
        , ne = g([])
        , oe = g([])
        , Y = g([])
        , Z = g([])
        , F = g([])
        , we = g([])
        , Ee = g("1000")
        , tt = g(1)
        , Lt = g(!1)
        , ct = ee(() => !(At.value > ss.value || Qe.value <= 0))
        , It = g(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"])
        , he = g("000/099")
        , Dt = g(0)
        , St = g(!1)
        , yt = g(1)
        , Ne = g(1)
        , es = g(0)
        , bt = g(0)
        , ts = g(0)
        , $t = g("GameRecord")
        , qs = {
          GameRecord: _N,
          MyGameRecord: gn
        }
        , Qe = g(1)
        , ks = g()
        , He = g(!1)
        , ms = g(!0)
        , At = g(0)
        , ss = g(0)
        , Bt = g(0)
        , ns = g(!1)
        , qt = g()
        , Xt = g(!1)
        , E = g("")
        , te = g("")
        , fe = ee(() => {
          if (p.value == "1")
            return ka;
          if (p.value == "2")
            return Ta
        }
        )
        , Ce = z => {
          const q = String(Math.floor(ze.value % 3600 / 60)).padStart(2, "0")
            , H = String(ze.value % 60).padStart(2, "0");
          return `${q}:${H}`
        }
        , ze = g()
        , xe = g(null)
        , Ye = g("00:00")
        , We = g(!1)
        , Ue = () => {
          xe.value = setInterval(() => {
            ze.value <= 0 ? (Ye.value = "00:00",
              setTimeout(() => {
                We.value = !0
              }
                , 500),
              clearInterval(xe.value),
              Wt(),
              setTimeout(() => {
                os(!0)
              }
                , 5e3)) : (We.value = !1,
                  Ye.value = Ce(ze.value),
                  ze.value--)
          }
            , 1e3)
        }
        , ot = g(null)
        , Ot = (z, q) => {
          clearInterval(Bt.value),
            Lt.value = !1,
            Bt.value = (q - z) / 1e3,
            ot.value = setInterval(() => {
              if (Bt.value <= 0)
                clearInterval(ot.value),
                  j.value = "00:00:00",
                  Lt.value = !0;
              else {
                const H = String(Math.floor(Bt.value / 3600)).padStart(2, "0")
                  , ue = String(Math.floor(Bt.value % 3600 / 60)).padStart(2, "0")
                  , ge = String(Bt.value % 60).padStart(2, "0");
                j.value = H + ":" + ue + ":" + ge,
                  Bt.value--
              }
            }
              , 1e3)
        }
        ;
      function vt() {
        y.value || (ht({
          message: i("xosoTip5"),
          wordBreak: "break-word"
        }),
          setTimeout(function () {
            Ln("AllLotteryGames-XoSo")
          }, 2e3))
      }
      const Wt = async () => {
        let z;
        if (p.value == "1") {
          const ge = at(l.query.day).format("YYYY-MM-DD HH:mm:ss");
          z = await ae(ba({
            dateTime: ge
          }))
        } else
          p.value == "2" && (z = await ae($a({
            are: d.value,
            typeId: Number(o.value)
          })));
        z.data.length == 0 && vt();
        let q = z.data.find(ge => ge.day == l.query.day);
        D.value = q.day;
        let H = q.areInfos.find(ge => (ge == null ? void 0 : ge.areId) == d.value);
        const ue = H == null ? void 0 : H.serverTime;
        if (y.value = H.areIssueNos.find(ge => ge.code == o.value),
          y.value || vt(),
          p.value == "1") {
          const ge = H == null ? void 0 : H.closingTime;
          clearInterval(ot.value),
            Ot(new Date(ue.replace(/-/g, "/")).getTime(), new Date(ge.replace(/-/g, "/")).getTime())
        } else
          p.value == "2" && (ze.value = (new Date(y.value.endTime.replace(/-/g, "/")).getTime() - new Date(ue.replace(/-/g, "/")).getTime()) / 1e3,
            clearInterval(xe.value),
            Ue())
      }
        ;
      let zt = null;
      const Mt = g("")
        , as = g()
        , os = async (z = !1) => {
          var ue, ge, Ve, Ke, rt, dt, pe, Le;
          if (_.value || p.value != "2")
            return;
          let q, H = !0;
          if ($t.value === "GameRecord") {
            if (q = await ae(ya({
              pageSize: 10,
              pageNo: 1,
              areId: d.value,
              typeId: Number(o.value)
            })),
              q) {
              if (((ge = (ue = q.data) == null ? void 0 : ue.list) == null ? void 0 : ge.length) > 0 && (Mt.value.trim().length == 0 || Mt.value != ((Ke = (Ve = q.data) == null ? void 0 : Ve.list[0]) == null ? void 0 : Ke.issueNumber)) && (H = !1,
                Mt.value = (dt = (rt = q.data) == null ? void 0 : rt.list[0]) == null ? void 0 : dt.issueNumber),
                H == !0 && z) {
                clearTimeout(zt),
                  zt = setTimeout(() => {
                    os(!0)
                  }
                    , 1e3);
                return
              }
              C.value = (pe = q.data) == null ? void 0 : pe.list[0],
                as.value = q.data,
                Xe(() => {
                  qt.value.getData(!1, as.value)
                }
                )
            }
          } else if ($t.value === "MyGameRecord" && (q = await ae(pl({
            areId: d.value,
            typeId: Number(o.value)
          })),
            q && q.data && q.data.openingResult && q.data.openingResult.length > 0 && (H = !1,
              Mt.value = (Le = q.data) == null ? void 0 : Le.issueNumber,
              C.value = q.data),
            H == !0 && z)) {
            clearTimeout(zt),
              zt = setTimeout(() => {
                os(!0)
              }
                , 1e3);
            return
          }
        }
        ;
      function qa() {
        let z = JSON.parse(sessionStorage.getItem("xosoList") || "")
          , q = [];
        for (let H = 0; H < z.areInfos.length; H++)
          q.push({
            text: i("code" + z.areInfos[H].areNameCode),
            value: z.areInfos[H].areId,
            disabled: !0,
            info: z.areInfos[H].areIssueNos
          });
        w.value = q
      }
      function Wa(z, q) {
        var H;
        if (o.value == z.code) {
          St.value = !1;
          return
        }
        Vs(),
          d.value = q,
          r.value = z.nameCode,
          o.value = z.code,
          N.value = 0,
          L.value = 0,
          S.value = m.value.length > 0 ? (H = m == null ? void 0 : m.value[0]) == null ? void 0 : H.categoryId : 1,
          St.value = !1,
          Ea(z, q),
          y.value = z,
          z.type == "2" && (Lt.value = !1,
            os()),
          Wt(),
          bn(),
          Xe(() => {
            $t.value === "MyGameRecord" && qt.value.getData(!0)
          }
          )
      }
      function Ea(z, q) {
        const H = Bo("hash");
        H.code = z == null ? void 0 : z.code,
          H.nameCode = z == null ? void 0 : z.nameCode,
          H.type = z == null ? void 0 : z.type,
          H.areId = q
      }
      const bn = async () => {
        var q, H, ue, ge, Ve, Ke, rt, dt;
        $n(),
          st();
        let z;
        p.value == "1" ? z = await ae(ml({
          areaId: d.value
        })) : p.value == "2" && (z = await ae(hl({
          areaId: d.value,
          typeId: Number(o.value)
        }))),
          z && (m.value = (H = (q = z.data) == null ? void 0 : q.areaConfigList[0]) == null ? void 0 : H.gameCategoryList,
            localStorage.setItem("gameCategoryList", JSON.stringify((ue = z.data.areaConfigList[0]) == null ? void 0 : ue.gameCategoryList)),
            O.value = (Ve = (ge = m == null ? void 0 : m.value[0]) == null ? void 0 : ge.gamePlayList[0]) == null ? void 0 : Ve.playNameCode,
            x.value = (rt = (Ke = m == null ? void 0 : m.value[0]) == null ? void 0 : Ke.gamePlayList[0]) == null ? void 0 : rt.playId,
            S.value = (dt = m == null ? void 0 : m.value[0]) == null ? void 0 : dt.categoryId,
            Ws())
      }
        , Fa = (z, q) => {
          st(),
            N.value = q,
            S.value = z,
            L.value = 0,
            x.value = m == null ? void 0 : m.value[q].gamePlayList[0].playId,
            I.value = m.value[q].gamePlayList[0].betType,
            O.value = m.value[q].gamePlayList[0].playNameCode,
            Dt.value = 0,
            Ws()
        }
        , ja = (z, q, H, ue) => {
          L.value = q,
            x.value = z,
            O.value = H,
            I.value = Number(ue),
            Dt.value = 0,
            Ws(),
            st()
        }
        , Ws = async () => {
          var q, H, ue, ge, Ve, Ke, rt, dt, pe, Le, nt, Ie, Hs, xn, Sn, Bn, Mn, Pn, Gn, Dn, An;
          $n();
          let z;
          p.value == "1" ? z = await ae(fl({
            areaId: d.value,
            categoryId: S.value,
            playId: x.value
          })) : p.value == "2" && (z = await ae(gl({
            areaId: d.value,
            categoryId: S.value,
            playId: x.value
          }))),
            J.value = (q = z.data) == null ? void 0 : q.betMethod,
            _e.value = (H = z.data) == null ? void 0 : H.betScopeConfig,
            Oe.value = (ue = z.data) == null ? void 0 : ue.isThreeNumber,
            ve.value = (ge = z.data) == null ? void 0 : ge.betNumber,
            Be.value = (Ve = z.data) == null ? void 0 : Ve.fastSpeciaSelectNo,
            ke.value = (Ke = z.data) == null ? void 0 : Ke.fastRandomType,
            Te.value = (rt = z.data) == null ? void 0 : rt.fastSpeciaType,
            ts.value = (dt = z.data) == null ? void 0 : dt.playOddInfo.defaultOdds,
            X.value = (pe = z.data) == null ? void 0 : pe.playOddInfo.oddsOrAmount,
            es.value = (Le = z.data) == null ? void 0 : Le.playOddInfo.bettingAmount,
            Se.value = (Ie = (nt = z.data) == null ? void 0 : nt.fastRandomSelecNo) == null ? void 0 : Ie.split(",").map(Number),
            de.value = (xn = (Hs = z.data) == null ? void 0 : Hs.playOddInfo.bettingMultiple) == null ? void 0 : xn.split(",").map(Number),
            Qe.value = (Bn = (Sn = z.data) == null ? void 0 : Sn.playOddInfo.bettingMultiple) == null ? void 0 : Bn.split(",")[0],
            Ne.value = (Mn = z.data) == null ? void 0 : Mn.perBetNumber,
            S.value == 8 && (we.value = (Pn = z.data) == null ? void 0 : Pn.funPlayOddList),
            Va((Gn = z.data) == null ? void 0 : Gn.betMethod),
            Ua((Dn = z.data) == null ? void 0 : Dn.betNumber),
            Ka((An = z.data) == null ? void 0 : An.isThreeNumber)
        }
        , Va = z => {
          z != null && z.includes("1") ? Q.value = 1 : S.value === 4 || S.value === 8 ? Q.value == 1 : Q.value = 3
        }
        , Ha = (z, q) => {
          Ee.value = z.oddTypeName,
            tt.value = z.oddsOrAmount,
            F.value = [Ee.value],
            Fe(3, ve.value)
        }
        , Ua = z => {
          z == 10 ? yt.value = 1 : z == 8 ? yt.value = 2 : z == 4 ? yt.value = 3 : z == 3 ? yt.value = 4 : z == 2 ? yt.value = 5 : yt.value = 0
        }
        , Ka = z => {
          z == 1 && (Me.value = he.value.split("/")[0][0].toString())
        }
        , $n = () => {
          Q.value = 1,
            X.value = 0,
            es.value = 0,
            de.value = [],
            J.value = "",
            _e.value = "",
            Se.value = [],
            Oe.value = 0,
            ve.value = 0,
            Be.value = "",
            ke.value = 0,
            Te.value = 0,
            me.value = 1e3,
            Me.value = ""
        }
        , st = () => {
          ne.value = [],
            oe.value = [],
            Y.value = [],
            Z.value = [],
            F.value = [],
            ce.value = 0,
            Ee.value = "1000",
            At.value = 0,
            bt.value = 0,
            Qe.value = 1,
            te.value = "",
            me.value = 1e3,
            Xe(() => {
              h.value && h.value.cleardata()
            }
            )
        }
        , Xa = z => {
          te.value = z;
          let H = z.split(",").flatMap(ue => ue.split("|"));
          F.value = H.map(String),
            Fe(Q.value, ve.value)
        }
        , Qa = (z, q, H, ue) => {
          z == "Thousand" ? ue == "all" ? ne.value = Ts(q, H) : ue == "big" ? ne.value = kt(q, H, "big", 0) : ue == "small" ? ne.value = kt(q, H, "small", 0) : ue == "odd" ? ne.value = Tt(q, H, "odd", 0) : ne.value = Tt(q, H, "even", 0) : z == "hundred" ? ue == "all" ? oe.value = Ts(q, H) : ue == "big" ? oe.value = kt(q, H, "big", 0) : ue == "small" ? oe.value = kt(q, H, "small", 0) : ue == "odd" ? oe.value = Tt(q, H, "odd", 0) : oe.value = Tt(q, H, "even", 0) : z == "ten" ? ue == "all" ? Y.value = Ts(q, H) : ue == "big" ? Y.value = kt(q, H, "big", 0) : ue == "small" ? Y.value = kt(q, H, "small", 0) : ue == "odd" ? Y.value = Tt(q, H, "odd", 0) : Y.value = Tt(q, H, "even", 0) : ue == "all" ? Z.value = Ts(q, H) : ue == "big" ? Z.value = kt(q, H, "big", 0) : ue == "small" ? Z.value = kt(q, H, "small", 0) : ue == "odd" ? Z.value = Tt(q, H, "odd", 0) : Z.value = Tt(q, H, "even", 0),
            Fe(Q.value, ve.value)
        }
        , Ya = (z, q) => {
          if (z == 0)
            q == "even" ? (st(),
              F.value = Tt(0, 99, "even", 2),
              Fe(Q.value, ve.value)) : q == "big" ? (st(),
                F.value = kt(0, 99, "big", 2),
                Fe(Q.value, ve.value)) : q == "small" ? (st(),
                  F.value = kt(0, 99, "small", 2),
                  Fe(Q.value, ve.value)) : q == "odd" ? (st(),
                    F.value = Tt(0, 99, "odd", 2),
                    Fe(Q.value, ve.value)) : (st(),
                      F.value = zn(0, 99, 2),
                      Fe(Q.value, ve.value));
          else {
            let H = Number(he.value.split("/")[0])
              , ue = Number(he.value.split("/")[1]);
            q == "even" ? (st(),
              F.value = Tt(H, ue, "even", 3),
              Fe(Q.value, ve.value)) : q == "big" ? (st(),
                F.value = kt(H, ue, "big", 3),
                Fe(Q.value, ve.value)) : q == "small" ? (st(),
                  F.value = kt(H, ue, "small", 3),
                  Fe(Q.value, ve.value)) : q == "odd" ? (st(),
                    F.value = Tt(H, ue, "odd", 3),
                    Fe(Q.value, ve.value)) : (st(),
                      F.value = zn(H, ue, 3),
                      Fe(Q.value, ve.value))
          }
        }
        , Za = (z, q, H) => {
          if (z == "") {
            let ue = q + "" + H;
            F.value.includes(ue) ? F.value = F.value.filter(function (ge) {
              return ge != ue
            }) : F.value.push(ue)
          } else {
            let ue = z + "" + q + H;
            F.value.includes(ue) ? F.value = F.value.filter(function (ge) {
              return ge != ue
            }) : F.value.push(ue)
          }
          Fe(Q.value, ve.value)
        }
        , Ja = (z, q) => {
          z == "Thousand" ? ne.value.includes(q) ? ne.value = ne.value.filter(function (H) {
            return H != q
          }) : ne.value.push(q) : z == "Hundred" ? oe.value.includes(q) ? oe.value = oe.value.filter(function (H) {
            return H != q
          }) : oe.value.push(q) : z == "ten" ? Y.value.includes(q) ? Y.value = Y.value.filter(function (H) {
            return H != q
          }) : Y.value.push(q) : Z.value.includes(q) ? Z.value = Z.value.filter(function (H) {
            return H != q
          }) : Z.value.push(q),
            Fe(Q.value, ve.value)
        }
        , eo = (z, q) => {
          Dt.value = q,
            he.value = z,
            me.value = 1e3,
            Me.value = he.value.split("/")[0][0].toString(),
            st()
        }
        , to = (z, q, H) => {
          if (me.value = q,
            H == 0)
            F.value = qn(Number(z) * ve.value, 0, 99, H),
              Fe(Q.value, ve.value);
          else {
            let ue = Number(he.value.split("/")[0])
              , ge = Number(he.value.split("/")[1]);
            F.value = qn(Number(z), ue, ge, H),
              Fe(Q.value, ve.value)
          }
        }
        , so = z => {
          Q.value = z,
            st()
        }
        , no = () => {
          He.value = !1,
            st()
        }
        , ao = z => { }
        , oo = () => {
          ns.value = !1,
            ms.value = !0
        }
        , lo = () => {
          He.value = !1,
            Qe.value = 1,
            Fe(Q.value, ve.value)
        }
        , kn = () => {
          const z = m.value[N.value].gamePlayList[L.value].availableBetNumber
            , q = m.value[N.value].gamePlayList[L.value].eachIssueBetMaxWinningAmount;
          return bt.value > z ? qe(i("xosoTip1", [z])) : At.value > q ? qe(i("xosoTip2", [q])) : !0
        }
        , io = async () => {
          var q, H, ue, ge;
          if (kn() === !0) {
            if (bt.value > 5e3)
              return qe(i("xosoTxt94"));
            if (Q.value == 1)
              (q = _e.value) != null && q.includes("4") ? Z.value.length > 0 && Y.value.length > 0 && oe.value.length > 0 && ne.value.length > 0 ? He.value = !0 : qe(i("xosoTxt95")) : (H = _e.value) != null && H.includes("3") ? Z.value.length > 0 && Y.value.length > 0 && oe.value.length > 0 ? He.value = !0 : qe(i("xosoTxt95")) : (ue = _e.value) != null && ue.includes("2") ? Z.value.length > 0 && Y.value.length > 0 && S.value != 4 || Y.value.length > 0 && S.value == 4 ? He.value = !0 : qe(i("xosoTxt95")) : (ge = _e.value) != null && ge.includes("1") ? Z.value.length > 0 ? He.value = !0 : qe(i("xosoTxt95")) : F.value.length > 0 && S.value == 8 ? He.value = !0 : qe(i("xosoTxt95"));
            else if (Q.value == 3)
              Tn(ve.value, F.value);
            else if (Q.value == 2) {
              if (!jc.inputrule.test(te.value))
                return qe({
                  message: i(Vc.inputtip),
                  wordBreak: "break-word"
                });
              for (let Ve = 0; Ve < F.value.length; Ve++)
                if (F.value[Ve].toString().length != Ne.value)
                  return qe(i("xosoTxt95"));
              if (yl(F.value))
                return qe(i("xosoTxt98"));
              Tn(ve.value, F.value)
            } else
              S.value == 8 && F.value.length === 1 ? He.value = !0 : qe(i("xosoTxt95"));
            Fe(Q.value, ve.value)
          }
        }
        , Tn = (z, q) => {
          z == 1 ? q.length > 0 ? He.value = !0 : qe(i("xosoTxt95")) : z == 2 ? q.length % 2 == 0 ? He.value = !0 : qe(i("xosoTxt95")) : z == 3 ? q.length % 3 == 0 ? He.value = !0 : qe(i("xosoTxt95")) : z == 4 ? q.length % 4 == 0 ? He.value = !0 : qe(i("xosoTxt95")) : z == 8 ? q.length % 8 == 0 ? He.value = !0 : qe(i("xosoTxt95")) : z == 10 && (q.length % 10 == 0 ? He.value = !0 : qe(i("xosoTxt95")))
        }
        , Es = g(null)
        , co = async () => {
          Es.value && clearTimeout(Es.value),
            Es.value = setTimeout(async () => {
              var Ke, rt, dt;
              if (We.value)
                return ht({
                  message: i("xosoTip6"),
                  wordBreak: "break-word"
                });
              if (!ct.value || kn() !== !0)
                return;
              let q = []
                , H = "";
              if (Q.value == 1 ? _e.value.toString().includes("4") ? H = ne.value.join("|") + "," + oe.value.join("|") + "," + Y.value.join("|") + "," + Z.value.join("|") : _e.value.toString().includes("3") ? H = oe.value.join("|") + "," + Y.value.join("|") + "," + Z.value.join("|") : _e.value.toString().includes("2") ? S.value == 4 ? H = Y.value.join(",") : H = Y.value.join("|") + "," + Z.value.join("|") : S.value == 4 ? (H = Z.value.join(","),
                Q.value = 3) : S.value == 8 && (H = F.value[0]) : [2, 3].includes(Q.value) ? ve.value == 1 ? H = F.value.join(",") : ve.value == 2 ? H = F.value.reduce((Le, nt, Ie) => (Ie % 2 === 0 && Le.push(nt + "|" + F.value[Ie + 1]),
                  Le), []).join(",") : ve.value == 3 ? H = F.value.reduce((Le, nt, Ie) => (Ie % 3 === 0 && Le.push(nt + "|" + F.value[Ie + 1] + "|" + F.value[Ie + 2]),
                    Le), []).join(",") : ve.value == 4 ? H = F.value.reduce((Le, nt, Ie) => (Ie % 4 === 0 && Le.push(nt + "|" + F.value[Ie + 1] + "|" + F.value[Ie + 2] + "|" + F.value[Ie + 3]),
                      Le), []).join(",") : ve.value == 8 ? H = F.value.reduce((Le, nt, Ie) => (Ie % 8 === 0 && Le.push(nt + "|" + F.value[Ie + 1] + "|" + F.value[Ie + 2] + "|" + F.value[Ie + 3] + "|" + F.value[Ie + 4] + "|" + F.value[Ie + 5] + "|" + F.value[Ie + 6] + "|" + F.value[Ie + 7]),
                        Le), []).join(",") : H = F.value.reduce((Le, nt, Ie) => (Ie % 10 === 0 && Le.push(nt + "|" + F.value[Ie + 1] + "|" + F.value[Ie + 2] + "|" + F.value[Ie + 3] + "|" + F.value[Ie + 4] + "|" + F.value[Ie + 5] + "|" + F.value[Ie + 6] + "|" + F.value[Ie + 7] + "|" + F.value[Ie + 8] + "|" + F.value[Ie + 9]),
                          Le), []).join(",") : S.value === 8 && ve.value == 1 && (H = F.value[0],
                            bt.value = ve.value),
                [4, 8].includes(S.value) && (Q.value = 3),
                H.replace(",", "").trim().length == 0 || bt.value == 0)
                return;
              q.push({
                bettingParentType: S.value,
                bettingType: I.value,
                bettingFormat: Q.value,
                bettingContent: H,
                totalBetting: bt.value,
                initialAmount: es.value,
                bettingMultiple: Qe.value,
                defaultOdds: ts.value
              });
              let [ue, ge] = [null, null]
                , Ve = Jn((Ke = y.value) == null ? void 0 : Ke.issueNo);
              if (p.value == "1" ? [ue, ge] = await Ze(bl({
                areId: d.value,
                issueNo: (rt = y.value) == null ? void 0 : rt.issueNo,
                xosoBettingData: q
              })) : p.value == "2" && ([ue, ge] = await Ze($l({
                areId: d.value,
                typeId: Number(o.value),
                issueNo: (dt = y.value) == null ? void 0 : dt.issueNo,
                xosoBettingData: q
              }))),
                ge) {
                S.value === 4 && (Q.value = 1),
                  He.value = !1;
                const pe = wn(ge == null ? void 0 : ge.msgCode, ge == null ? void 0 : ge.msg);
                E.value = pe,
                  Dt.value = 0,
                  st(),
                  js(),
                  $t.value === "MyGameRecord" && qt.value.getData(),
                  setTimeout(() => {
                    Cn(Ve)
                  }
                    , Number(ze.value * 1e3) + 5e3)
              } else {
                He.value = !1;
                const pe = wn(ge == null ? void 0 : ge.msgCode, ge == null ? void 0 : ge.msg);
                E.value = pe
              }
            }
              , 500)
        }
        , uo = () => {
          setTimeout(() => {
            Xt.value && (Xt.value = !1)
          }
            , 1500)
        }
        , wn = (z, q) => {
          let H = "";
          switch (z) {
            case 345:
              H = i("xosoTip2", [q]),
                k.value = !0;
              break;
            case 346:
              H = i("xosoTip3"),
                k.value = !0;
              break;
            case 347:
              H = i("xosoTip3"),
                k.value = !0;
              break;
            case 348:
              H = i("xosoTip1", [q]),
                k.value = !0;
              break;
            case 349:
              H = i("xosoTip4"),
                k.value = !0;
              break;
            default:
              H = "code" + z,
                Xt.value = !0,
                uo();
              break
          }
          return H
        }
        , ro = () => {
          k.value = !1
        }
        ;
      let Fs = null;
      async function Cn(z) {
        if (_.value || p.value != "2")
          return;
        const q = await ae(kl({
          issueNo: z
        }));
        if (q) {
          if (q.data.status == 1) {
            clearTimeout(Fs),
              Fs = setTimeout(() => {
                Cn(z)
              }
                , 1e3);
            return
          }
          ks.value.showMark(q.data),
            $t.value === "MyGameRecord" && qt.value.getData()
        }
      }
      const _o = z => {
        z <= 0 || (z >= 5e4 ? Qe.value = 5e4 : Qe.value = z),
          Fe(Q.value, ve.value)
      }
        , vo = (z, q) => {
          le.value = q,
            Qe.value = z,
            Fe(Q.value, ve.value)
        }
        , Nn = z => {
          switch (z) {
            case 1:
              Qe.value > 1 && (Qe.value--,
                Fe(Q.value, ve.value));
              break;
            case 2:
              Qe.value++,
                Fe(Q.value, ve.value);
              break
          }
        }
        , Fe = (z, q) => {
          q != 0 && (bt.value = po(z, q),
            At.value = bt.value * es.value * Qe.value * ts.value,
            S.value === 8 ? ce.value = tt.value : ce.value = X.value)
        }
        , po = (z, q) => {
          let H = 0;
          if (z == 1) {
            let ue = ne.value.length
              , ge = oe.value.length
              , Ve = Y.value.length
              , Ke = Z.value.length;
            return _e.value.toString().includes("4") ? H = ue * ge * Ve * Ke : _e.value.toString().includes("3") ? H = ge * Ve * Ke : _e.value.toString().includes("2") ? S.value === 4 ? H = Ve : H = Ve * Ke : _e.value.toString().includes("1") ? H = Ke : S.value === 8 && (H = 1),
              H
          } else {
            if (z == 3)
              return H = Math.floor(F.value.length / q),
                H;
            if (z == 2)
              return F.value.length == 1 && F.value[0] == "1" ? H = 0 : H = Math.floor(F.value.length / q),
                H
          }
          return H
        }
        , mo = () => {
          s.go(-1)
        }
        , Ln = z => {
          var q;
          s.push({
            name: z,
            query: {
              id: (q = l.query) == null ? void 0 : q.id
            }
          })
        }
        , js = async () => {
          const z = await ae(cn());
          z && (ss.value = (z == null ? void 0 : z.data.amount) || 0)
        }
        ;
      function ho(z) {
        $t.value = z,
          $t.value == "GameRecord" && Xe(() => {
            qt.value.getData()
          }
          )
      }
      qa(),
        Wt(),
        p.value == "2" && os(),
        bn(),
        js();
      function Vs() {
        clearInterval(ot.value),
          clearInterval(xe.value),
          clearTimeout(zt),
          clearTimeout(Fs)
      }
      Ns(() => {
        _.value = !0,
          Vs()
      }
      );
      const fo = So();
      return Ge(fo, (z, q) => {
        z === "visible" && q === "hidden" ? (Wt(),
          p.value == "2" && os(),
          js()) : Vs()
      }
      ),
        (z, q) => {
          var rt, dt;
          const H = V("NavBar")
            , ue = V("van-field")
            , ge = V("van-checkbox")
            , Ve = V("van-button")
            , Ke = V("van-popup");
          return n(),
            a(B, null, [e("div", p8, [R(H, {
              "left-arrow": "",
              onClickLeft: mo,
              "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
            }, {
              center: A(() => [e("div", {
                class: "centercity",
                onClick: q[0] || (q[0] = pe => St.value = !0)
              }, [W(t(v.value) + " ", 1), m8])]),
              _: 1
            }), R(R3, {
              gameCategoryList: m.value,
              colortab: N.value,
              playtab: L.value,
              onColorupdate: Fa,
              onUpdate: ja
            }, null, 8, ["gameCategoryList", "colortab", "playtab"]), p.value == "1" ? (n(),
              se(o3, {
                key: 0,
                defaultcityname: v.value,
                defaultplayname: O.value,
                defaultexpiredate: D.value,
                colorId: S.value,
                issue: (rt = y.value) == null ? void 0 : rt.issueNo,
                time: j.value,
                odds: X.value,
                areId: d.value
              }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : p.value == "2" ? (n(),
                se(L3, {
                  key: 1,
                  defaultcityname: v.value,
                  defaultplayname: O.value,
                  colorId: S.value,
                  issue: (dt = y.value) == null ? void 0 : dt.issueNo,
                  time: Ye.value,
                  odds: X.value,
                  areId: d.value,
                  resultList: C.value,
                  isShowPreparing: We.value
                }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : M("", !0), S.value === 8 ? (n(),
                  se(x4, {
                    key: 2,
                    funplaylist: we.value,
                    numbercon: Ee.value,
                    onSelectvalue: Ha
                  }, null, 8, ["funplaylist", "numbercon"])) : (n(),
                    se(T4, {
                      key: 3,
                      ref_key: "numberselectRef",
                      ref: h,
                      methodList: J.value,
                      activeTab: Q.value,
                      randomList: Se.value,
                      randomtype: ke.value,
                      specialtype: Te.value,
                      isthreenumber: Oe.value,
                      speciaSelectNo: Be.value,
                      isShowMark: Lt.value,
                      betconfig: _e.value,
                      hundred: Me.value,
                      groupTab: me.value,
                      thousandnumList: ne.value,
                      hundrednumList: oe.value,
                      tennumList: Y.value,
                      indicualnumList: Z.value,
                      quicknumList: F.value,
                      intervalnumber: It.value,
                      intervalTab: Dt.value,
                      onTabupdate: so,
                      onSelectgroup: to,
                      onSelectinterval: eo,
                      onBetNum: Ja,
                      onBetQuickNum: Za,
                      onGetselect: Qa,
                      onGetquick: Ya,
                      onInputblur: Xa
                    }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])), R(H4, {
                      record: $t.value,
                      onChangeC: ho
                    }, null, 8, ["record"]), (n(),
                      se(Ht, null, [(n(),
                        se(ft(qs[$t.value]), {
                          ref_key: "RecordComponent",
                          ref: qt,
                          ApiFun: fe.value,
                          areId: d.value,
                          cityCode: o.value,
                          parmas: T,
                          gVSs: p.value
                        }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), R(E4, {
                          betNumber: bt.value,
                          betSum: At.value,
                          onPlayBet: io
                        }, null, 8, ["betNumber", "betSum"]), R(v8, {
                          ref_key: "WinningTipsRef",
                          ref: ks
                        }, null, 512)]), R(Ke, {
                          show: He.value,
                          "onUpdate:show": q[8] || (q[8] = pe => He.value = pe),
                          "close-on-click-overlay": !1,
                          class: "popup",
                          position: "bottom"
                        }, {
                          default: A(() => [e("div", h8, [e("div", {
                            class: "close",
                            onClick: no
                          }, [e("img", {
                            class: "img",
                            src: u(re)("home/AllLotteryGames/NewVietnam", "close")
                          }, null, 8, f8)]), e("div", g8, t(z.$t("bettingnumber")), 1), S.value === 6 || d.value === 2 && S.value === 1 && x.value === 4 || d.value === 3 && S.value === 1 && x.value === 4 || d.value === 1 && S.value === 1 && x.value === 5 ? (n(),
                            a("div", y8, t(z.$t("xosoTxt93")), 1)) : M("", !0), Q.value == 2 || Q.value == 3 ? (n(),
                              a("div", {
                                key: 1,
                                class: P("c-row c-flex-warp compound" + Q.value)
                              }, [e("div", {
                                class: P("c-row item item" + yt.value + "-" + Ne.value)
                              }, [e("div", b8, [e("div", $8, [(n(!0),
                                a(B, null, G(F.value, (pe, Le) => (n(),
                                  a("div", {
                                    class: "num c-row c-row-middle-center",
                                    key: Le
                                  }, t(pe), 1))), 128))])])], 2)], 2)) : M("", !0), Q.value == 1 ? (n(),
                                    a("div", k8, [ne.value.length > 0 ? (n(),
                                      a("div", T8, [e("div", w8, t(z.$t("xosoTxt87")), 1), e("div", C8, [(n(!0),
                                        a(B, null, G(ne.value, (pe, Le) => (n(),
                                          a("div", {
                                            class: "num",
                                            key: Le
                                          }, t(pe), 1))), 128))])])) : M("", !0), oe.value.length > 0 ? (n(),
                                            a("div", N8, [e("div", L8, t(z.$t("xosoTxt88")), 1), e("div", I8, [(n(!0),
                                              a(B, null, G(oe.value, (pe, Le) => (n(),
                                                a("div", {
                                                  class: "num",
                                                  key: Le
                                                }, t(pe), 1))), 128))])])) : M("", !0), Y.value.length > 0 ? (n(),
                                                  a("div", R8, [e("div", x8, t(z.$t("xosoTxt89")), 1), e("div", S8, [(n(!0),
                                                    a(B, null, G(Y.value, (pe, Le) => (n(),
                                                      a("div", {
                                                        class: "num",
                                                        key: Le
                                                      }, t(pe), 1))), 128))])])) : M("", !0), Z.value.length > 0 ? (n(),
                                                        a("div", B8, [e("div", M8, t(z.$t("xosoTxt90")), 1), e("div", P8, [(n(!0),
                                                          a(B, null, G(Z.value, (pe, Le) => (n(),
                                                            a("div", {
                                                              class: "num",
                                                              key: Le
                                                            }, t(pe), 1))), 128))])])) : M("", !0), F.value.length > 0 ? (n(),
                                                              a("div", G8, [e("div", D8, [(n(!0),
                                                                a(B, null, G(F.value, (pe, Le) => (n(),
                                                                  a("div", {
                                                                    class: "num",
                                                                    key: Le
                                                                  }, t(pe), 1))), 128))])])) : M("", !0)])) : M("", !0), e("div", A8, [e("div", O8, [e("div", z8, t(z.$t("multiple")), 1), e("div", q8, [e("div", {
                                                                    class: "li minus",
                                                                    onClick: q[1] || (q[1] = pe => Nn(1))
                                                                  }, "-"), R(ue, {
                                                                    class: "digit-box",
                                                                    modelValue: Qe.value,
                                                                    "onUpdate:modelValue": q[2] || (q[2] = pe => Qe.value = pe),
                                                                    type: "digit",
                                                                    maxlength: 5,
                                                                    onInput: q[3] || (q[3] = pe => _o(Qe.value))
                                                                  }, null, 8, ["modelValue"]), e("div", {
                                                                    class: "li plus c-row c-row-middle-center",
                                                                    onClick: q[4] || (q[4] = pe => Nn(2))
                                                                  }, "+")])]), e("div", W8, [e("div", E8, [(n(!0),
                                                                    a(B, null, G(de.value, (pe, Le) => (n(),
                                                                      a("div", {
                                                                        class: P(Qe.value == pe ? "action li" : "li"),
                                                                        onClick: nt => vo(pe, Le)
                                                                      }, " X" + t(pe), 11, F8))), 256))])]), e("div", j8, [e("div", V8, [W(t(z.$t("quantity")) + " ", 1), H8, e("span", U8, t(bt.value || 0) + t(z.$t("note")), 1)]), e("div", K8, [W(t(z.$t("odds")), 1), X8, W(), e("span", Q8, t(ce.value), 1)])]), e("div", Y8, [e("div", Z8, [W(t(z.$t("walletBalance")) + " ", 1), e("span", J8, t(u(Re)(ss.value)), 1)])]), e("div", e6, [e("div", t6, [W(t(z.$t("betAmounts")), 1), e("span", s6, t(u(Re)(At.value)), 1)])]), At.value > ss.value ? (n(),
                                                                        a("div", n6, [e("div", a6, [e("img", {
                                                                          src: u(re)("home/AllLotteryGames/NewVietnam", "tip")
                                                                        }, null, 8, o6), W(t(z.$t("insufficientWallet")), 1)]), e("div", {
                                                                          class: "txt bg333",
                                                                          onClick: q[5] || (q[5] = pe => Ln("Recharge"))
                                                                        }, t(z.$t("torecharge")) + " >>", 1)])) : M("", !0), e("div", l6, [R(ge, {
                                                                          modelValue: ms.value,
                                                                          "onUpdate:modelValue": q[6] || (q[6] = pe => ms.value = pe),
                                                                          shape: "square",
                                                                          "checked-color": "#F4453E",
                                                                          onChange: ao
                                                                        }, {
                                                                          default: A(() => [e("div", i6, t(z.$t("agree")), 1)]),
                                                                          _: 1
                                                                        }, 8, ["modelValue"]), e("span", {
                                                                          class: "txt",
                                                                          onClick: q[7] || (q[7] = pe => ns.value = !0)
                                                                        }, t(z.$t("presaleRules")), 1)])])]), e("div", c6, [e("div", u6, [R(Ve, {
                                                                          class: "btn",
                                                                          block: "",
                                                                          onClick: lo
                                                                        }, {
                                                                          default: A(() => [e("span", null, t(z.$t("cancel")), 1)]),
                                                                          _: 1
                                                                        })]), e("div", r6, [R(Ve, {
                                                                          class: P(["btn", {
                                                                            noActive: !ct.value
                                                                          }]),
                                                                          block: "",
                                                                          onClick: co
                                                                        }, {
                                                                          default: A(() => [e("span", d6, t(z.$t("betting")), 1)]),
                                                                          _: 1
                                                                        }, 8, ["class"])])])]),
                          _: 1
                        }, 8, ["show"]), R(Ke, {
                          class: "areBox",
                          show: St.value,
                          "onUpdate:show": q[10] || (q[10] = pe => St.value = pe),
                          round: "",
                          position: "bottom",
                          style: {
                            overflow: "initial"
                          }
                        }, {
                          default: A(() => [e("div", _6, [e("img", {
                            class: "close",
                            src: u(re)("common", "close"),
                            alt: "",
                            onClick: q[9] || (q[9] = () => St.value = !1)
                          }, null, 8, v6), (n(!0),
                            a(B, null, G(w.value, (pe, Le) => (n(),
                              a("div", {
                                class: "items",
                                key: Le
                              }, [e("h1", null, t(pe.text), 1), e("div", p6, [(n(!0),
                                a(B, null, G(pe.info, (nt, Ie) => (n(),
                                  a("div", {
                                    key: Ie,
                                    class: P({
                                      isActive: o.value == nt.code
                                    }),
                                    onClick: Hs => Wa(nt, pe.value)
                                  }, t(z.$t("code" + nt.nameCode)), 11, m6))), 128))])]))), 128))])]),
                          _: 1
                        }, 8, ["show"]), R(Ke, {
                          show: ns.value,
                          "onUpdate:show": q[11] || (q[11] = pe => ns.value = pe),
                          class: "PreSaleRule",
                          "close-on-click-overlay": !1,
                          round: ""
                        }, {
                          default: A(() => [e("div", h6, [e("div", f6, t(u(i)("presaleRules")), 1), e("div", g6, t(z.$t("betPopTXT")), 1), e("div", y6, [e("div", {
                            class: "btn",
                            onClick: oo
                          }, t(u(i)("iKonw")), 1)])])]),
                          _: 1
                        }, 8, ["show"]), R(Ke, {
                          show: Xt.value,
                          "onUpdate:show": q[12] || (q[12] = pe => Xt.value = pe),
                          class: "Tips",
                          "close-on-click-overlay": !0
                        }, {
                          default: A(() => [e("div", null, [E.value == "code402" ? (n(),
                            a("img", {
                              key: 0,
                              src: u(re)("home/AllLotteryGames/NewVietnam", "success")
                            }, null, 8, b6)) : (n(),
                              a("img", {
                                key: 1,
                                src: u(re)("home/AllLotteryGames/NewVietnam", "fail")
                              }, null, 8, $6)), e("div", k6, t(z.$t(E.value)), 1)])]),
                          _: 1
                        }, 8, ["show"]), R(xt, {
                          show: k.value,
                          "onUpdate:show": q[13] || (q[13] = pe => k.value = pe),
                          onConfirm: ro,
                          confirmText: u(i)("confirm"),
                          showCancelBtn: !1
                        }, {
                          content: A(() => [e("div", T6, t(E.value ? z.$t(E.value) : ""), 1)]),
                          _: 1
                        }, 8, ["show", "confirmText"])], 64)
        }
    }
  });
const C6 = K(w6, [["__scopeId", "data-v-273cca7e"]])
  , d7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: C6
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , N6 = {
    class: "Play__C"
  }
  , L6 = {
    class: "title"
  }
  , I6 = ["src"]
  , R6 = {
    class: "info"
  }
  , x6 = ["src"]
  , S6 = {
    class: "sub"
  }
  , B6 = {
    class: "text"
  }
  , M6 = {
    class: "info_text"
  }
  , P6 = {
    class: "forexample"
  }
  , G6 = {
    key: 0,
    class: "betting"
  }
  , D6 = {
    class: "result"
  }
  , A6 = {
    key: 0,
    class: "info_item"
  }
  , O6 = ["src"]
  , z6 = {
    class: "sub"
  }
  , q6 = {
    class: "text"
  }
  , W6 = {
    key: 1,
    class: "info_text"
  }
  , E6 = {
    class: "forexample"
  }
  , F6 = {
    class: "result"
  }
  , j6 = U({
    __name: "NorthPlay",
    setup(c) {
      const { t: s } = ye()
        , l = g(0)
        , i = je([{
          title: s("xosoTab1"),
          subList: [{
            sub: s("xosoSub1"),
            num: "［45］",
            resultTip: s("xosoTxt3", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["27", "2"])
            }]
          }, {
            sub: s("xosoSub2"),
            num: "［45］",
            resultTip: s("xosoTxt5"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt4")
            }]
          }, {
            sub: s("xosoSub3"),
            num: "［45］",
            resultTip: s("xosoTxt6", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["27", "2"])
            }]
          }, {
            sub: s("xosoSub4"),
            num: "［456］",
            resultTip: s("xosoTxt9", ["23"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt8")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["23", "3"])
            }]
          }, {
            sub: s("xosoSub5"),
            num: "［4567］",
            resultTip: s("xosoTxt11", ["20"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt10")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["20", "4"])
            }]
          }]
        }, {
          title: s("xosoTab2"),
          subList: [{
            sub: s("xosoSub6"),
            num: "［45/55］",
            resultTip: s("xosoTxt14", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["2"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["27", "2", "2"])
            }]
          }, {
            sub: s("xosoSub7"),
            num: "［45/55/65］",
            resultTip: s("xosoTxt15", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["3"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["27", "3", "2"])
            }]
          }, {
            sub: s("xosoSub8"),
            num: "［45/55/65/75］",
            resultTip: s("xosoTxt16", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["4"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["27", "4", "2"])
            }]
          }]
        }, {
          title: s("xosoTab3"),
          subList: [{
            sub: s("xosoSub9"),
            num: "［45］",
            resultTip: s("xosoTxt19"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt17")
            }]
          }, {
            sub: s("xosoSub18"),
            num: "［45］",
            resultTip: s("xosoTxt23"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt21")
            }]
          }, {
            sub: s("xosoSub11"),
            num: "［45］",
            resultTip: s("xosoTxt27"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt25")
            }]
          }, {
            sub: s("xosoSub12"),
            num: "［45］",
            resultTip: s("xosoTxt35"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt34")
            }]
          }, {
            sub: s("xosoSub13"),
            num: "［45］",
            resultTip: s("xosoTxt37"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt36")
            }]
          }]
        }, {
          title: s("xosoTab4"),
          subList: [{
            sub: s("xosoSub17"),
            num: "［4］",
            resultTip: s("xosoTxt31"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt29")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt30")
            }]
          }, {
            sub: s("xosoTxt100"),
            num: "［4］",
            resultTip: s("xosoTxt33"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt101")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt102")
            }]
          }]
        }, {
          title: s("xosoTab5"),
          subList: [{
            sub: s("xosoSub19"),
            num: "［456］",
            resultTip: s("xosoTxt41"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt38")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt39")
            }]
          }, {
            sub: s("xosoSub20"),
            num: "［456］",
            resultTip: s("xosoTxt45"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt43")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt44")
            }]
          }, {
            sub: s("xosoSub21"),
            num: "［456］",
            resultTip: s("xosoTxt49"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt43")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt47")
            }]
          }, {
            sub: s("xosoSub22"),
            num: "［456］",
            resultTip: s("xosoTxt55"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt43")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt54")
            }]
          }]
        }, {
          title: s("xosoTab6"),
          subList: [{
            sub: s("xosoSub25"),
            num: "［4567］",
            resultTip: s("xosoTxt53"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt51")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt52")
            }]
          }]
        }, {
          title: s("xosoTab7"),
          subList: [{
            sub: s("xosoSub26"),
            num: "［45/55/66/77］",
            resultTip: s("xosoTxt57", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["4"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["27"])
            }]
          }, {
            sub: s("xosoSub27"),
            num: "［45/55/66/77/88/99/11/22］",
            resultTip: s("xosoTxt58", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["8"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["27"])
            }]
          }, {
            sub: s("xosoSub28"),
            num: "［45/55/66/77/88/99/11/22/33/44］",
            resultTip: s("xosoTxt59", ["27"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["10"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["27"])
            }]
          }]
        }, {
          title: s("xosoTab8"),
          subList: [{
            sub: s("xosoTxt60"),
            num: "",
            resultTip: s("xosoTxt66"),
            txtList: [{
              bet: s("xosoTxt60"),
              betTip: s("xosoTxt61")
            }, {
              bet: s("big"),
              betTip: s("xosoTxt62")
            }, {
              bet: s("small"),
              betTip: s("xosoTxt63")
            }, {
              bet: s("xosoTxt69"),
              betTip: s("xosoTxt64")
            }, {
              bet: s("xosoTxt70"),
              betTip: s("xosoTxt65")
            }]
          }]
        }]);
      return (_, p) => {
        const r = V("van-tab")
          , d = V("van-tabs");
        return n(),
          a("div", N6, [R(d, {
            active: l.value,
            "onUpdate:active": p[0] || (p[0] = v => l.value = v),
            type: "card"
          }, {
            default: A(() => [(n(!0),
              a(B, null, G(i, (v, o) => (n(),
                se(r, {
                  title: v.title,
                  key: o
                }, {
                  default: A(() => [(n(!0),
                    a(B, null, G(v.subList, (h, y) => (n(),
                      a("div", {
                        class: "Play__C-Cotent",
                        key: y
                      }, [e("div", L6, [e("img", {
                        src: u(re)("home/AllLotteryGames/NewVietnam", "Star")
                      }, null, 8, I6), e("span", null, t(h.sub), 1)]), e("div", R6, [(n(!0),
                        a(B, null, G(h.txtList, (T, $) => (n(),
                          a("div", {
                            class: "info_item",
                            key: $
                          }, [e("img", {
                            src: u(re)("home/AllLotteryGames/NewVietnam", "Triangle")
                          }, null, 8, x6), e("span", S6, t(T.bet), 1), e("div", B6, t(T.betTip), 1)]))), 128)), e("div", M6, [e("div", P6, t(u(s)("forexample")), 1), h.num ? (n(),
                            a("div", G6, t(u(s)("betting")) + "：" + t(h.num), 1)) : M("", !0), e("div", D6, t(u(s)("result")) + "：" + t(h.resultTip), 1)]), l.value === 7 ? (n(),
                              a("div", A6, [e("img", {
                                src: u(re)("home/AllLotteryGames/NewVietnam", "Triangle")
                              }, null, 8, O6), e("span", z6, t(u(s)("xosoTxt71")), 1), e("div", q6, t(u(s)("xosoTxt67")), 1)])) : M("", !0), l.value === 7 ? (n(),
                                a("div", W6, [e("div", E6, t(u(s)("forexample")), 1), e("div", F6, t(u(s)("result")) + "： " + t(u(s)("xosoTxt68")), 1)])) : M("", !0)])]))), 128))]),
                  _: 2
                }, 1032, ["title"]))), 128))]),
            _: 1
          }, 8, ["active"])])
      }
    }
  });
const V6 = K(j6, [["__scopeId", "data-v-9fb9bedb"]])
  , $s = c => (De("data-v-fa6bdd16"),
    c = c(),
    Ae(),
    c)
  , H6 = {
    class: "NorthRule__C"
  }
  , U6 = {
    class: "NorthRule__C-title"
  }
  , K6 = {
    class: "NorthRule__C-tips"
  }
  , X6 = $s(() => e("div", {
    class: "borderTopStyle"
  }, [e("span"), e("span")], -1))
  , Q6 = {
    class: "title"
  }
  , Y6 = {
    class: "text"
  }
  , Z6 = {
    class: "table"
  }
  , J6 = {
    class: "table-row header-time"
  }
  , eL = {
    class: "table-time-1"
  }
  , tL = $s(() => e("div", {
    class: "table-time-1"
  }, "18:15", -1))
  , sL = {
    class: "table-row header-week"
  }
  , nL = {
    class: "table-week-1"
  }
  , aL = {
    class: "table-week-1"
  }
  , oL = {
    class: "table-cell-1"
  }
  , lL = {
    class: "table-cell-1"
  }
  , iL = $s(() => e("div", {
    class: "borderTopStyle"
  }, [e("span"), e("span")], -1))
  , cL = {
    class: "title"
  }
  , uL = {
    class: "text"
  }
  , rL = {
    key: 0,
    class: "text"
  }
  , dL = {
    key: 1,
    class: "text"
  }
  , _L = {
    class: "NorthRule__C-Rule"
  }
  , vL = {
    class: "NorthRule__C-Struct"
  }
  , pL = $s(() => e("span", {
    class: "left"
  }, null, -1))
  , mL = $s(() => e("span", {
    class: "right"
  }, null, -1))
  , hL = {
    class: "table-rule"
  }
  , fL = {
    class: "table-header"
  }
  , gL = {
    class: "table-header-cell"
  }
  , yL = {
    class: "table-header-cell"
  }
  , bL = {
    class: "table-header-cell"
  }
  , $L = {
    class: "table-cell"
  }
  , kL = {
    class: "table-cell"
  }
  , TL = {
    class: "table-cell"
  }
  , wL = {
    class: "table-rule"
  }
  , CL = {
    class: "table-header"
  }
  , NL = {
    class: "table-header-cell"
  }
  , LL = {
    key: 0,
    class: "table-box-title"
  }
  , IL = U({
    __name: "NorthRule",
    setup(c) {
      const { t: s } = ye()
        , l = je([{
          title: "01",
          sub: s("resultsVielottery")
        }, {
          title: "02",
          sub: s("systemresult")
        }, {
          title: "03",
          sub: s("lotterytime")
        }])
        , i = je([{
          title: "04",
          sub: s("oddsmiscalculated")
        }, {
          title: "05",
          sub: s("oddsbettingprincipal")
        }, {
          title: "06",
          sub: s("oddsfluctuate")
        }, {
          title: "07",
          sub: s("oncebetgenerated")
        }, {
          title: "08",
          sub: s("anyreasonCauses")
        }, {
          title: "09",
          sub: s("platformcancel"),
          sub1: s("drawdelayedtoolong"),
          sub2: s("resultsofthelotterybeenleaked")
        }])
        , _ = je([{
          week: s("Monday"),
          addressList: s("Hanoi")
        }, {
          week: s("Tuesday"),
          addressList: s("quangNinh")
        }, {
          week: s("Wednesday"),
          addressList: s("bacninh")
        }, {
          week: s("Thursday"),
          addressList: s("Hanoi")
        }, {
          week: s("Friday"),
          addressList: s("haiphong")
        }, {
          week: s("Saturday"),
          addressList: s("nanning")
        }, {
          week: s("Sunday"),
          addressList: s("taiping")
        }])
        , p = je([{
          title: s("GrandPrize"),
          quantity: 1,
          number: s("fivedigits"),
          drawsNumber: ["29818"]
        }, {
          title: s("FirstPrize"),
          quantity: 1,
          number: s("fivedigits"),
          drawsNumber: ["69388"]
        }, {
          title: s("SecondPrize"),
          quantity: 2,
          number: s("fivedigits"),
          drawsNumber: ["66992", "95797"]
        }, {
          title: s("ThirdPrize"),
          quantity: 6,
          number: s("fivedigits"),
          drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"]
        }, {
          title: s("FourPrize"),
          quantity: 4,
          number: s("fourdigits"),
          drawsNumber: ["6545", "5257", "7896", "3682"]
        }, {
          title: s("FivePrize"),
          quantity: 6,
          number: s("fourdigits"),
          drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"]
        }, {
          title: s("SixPrize"),
          quantity: 3,
          number: s("fourdigits"),
          drawsNumber: ["567", "642", "934"]
        }, {
          title: s("SevenPrize"),
          quantity: 4,
          number: s("seconddigits"),
          drawsNumber: ["48", "64", "32", "51"]
        }, {
          title: s("intotal"),
          quantity: s("lotteryawards"),
          number: ""
        }]);
      return (r, d) => (n(),
        a("div", H6, [e("div", U6, t(u(s)("northVieLotteryGameRules")), 1), e("div", K6, t(u(s)("precautions")), 1), (n(!0),
          a(B, null, G(l, (v, o) => (n(),
            a("div", {
              class: "NorthRule__C-Content",
              key: o
            }, [X6, e("div", Q6, t(v.title), 1), e("div", Y6, t(v.sub), 1)]))), 128)), e("div", Z6, [e("div", J6, [e("div", eL, t(u(s)("winTrxTime")), 1), tL]), e("div", sL, [e("div", nL, t(u(s)("weeks")), 1), e("div", aL, t(u(s)("northLotteryCities")), 1)]), (n(!0),
              a(B, null, G(_, (v, o) => (n(),
                a("div", {
                  class: "table-row",
                  key: o
                }, [e("div", oL, t(v.week), 1), e("div", lL, t(v.addressList), 1)]))), 128))]), (n(!0),
                  a(B, null, G(i, (v, o) => (n(),
                    a("div", {
                      class: "NorthRule__C-Content",
                      key: o
                    }, [iL, e("div", cL, t(v.title), 1), e("div", uL, t(v.sub), 1), v.sub1 ? (n(),
                      a("div", rL, t(v.sub1), 1)) : M("", !0), v.sub2 ? (n(),
                        a("div", dL, t(v.sub2), 1)) : M("", !0)]))), 128)), e("div", _L, t(u(s)("northernLotteryGameRules")), 1), e("div", vL, [pL, W(t(u(s)("colorstructure")), 1), mL]), e("div", hL, [e("div", fL, [e("div", gL, t(u(s)("Lottery")), 1), e("div", yL, t(u(s)("numberofPrizes")), 1), e("div", bL, t(u(s)("Number")), 1)]), (n(!0),
                          a(B, null, G(p, (v, o) => (n(),
                            a("div", {
                              class: "table-row",
                              key: o
                            }, [e("div", $L, t(v.title), 1), e("div", kL, t(v.quantity), 1), e("div", TL, t(v.number), 1)]))), 128))]), e("div", wL, [e("div", CL, [e("div", NL, t(u(s)("sorthlotteryresult")), 1)]), (n(!0),
                              a(B, null, G(p, (v, o) => (n(),
                                a("div", {
                                  class: P(o == 8 ? "table-box none" : "table-box"),
                                  key: o
                                }, [o != 8 ? (n(),
                                  a("div", LL, t(v.title), 1)) : M("", !0), (n(!0),
                                    a(B, null, G(v.drawsNumber, (h, y) => (n(),
                                      a("div", {
                                        class: "table-box-number",
                                        key: y
                                      }, t(h), 1))), 128))], 2))), 128))])]))
    }
  });
const RL = K(IL, [["__scopeId", "data-v-fa6bdd16"]])
  , xL = {
    class: "Play__C"
  }
  , SL = {
    class: "title"
  }
  , BL = ["src"]
  , ML = {
    class: "info"
  }
  , PL = ["src"]
  , GL = {
    class: "sub"
  }
  , DL = {
    class: "text"
  }
  , AL = {
    class: "info_text"
  }
  , OL = {
    class: "forexample"
  }
  , zL = {
    key: 0,
    class: "betting"
  }
  , qL = {
    class: "result"
  }
  , WL = {
    key: 0,
    class: "info_item"
  }
  , EL = ["src"]
  , FL = {
    class: "sub"
  }
  , jL = {
    class: "text"
  }
  , VL = {
    key: 1,
    class: "info_text"
  }
  , HL = {
    class: "forexample"
  }
  , UL = {
    class: "result"
  }
  , KL = U({
    __name: "SorthPlay",
    setup(c) {
      const { t: s } = ye()
        , l = g(0)
        , i = je([{
          title: s("xosoTab1"),
          subList: [{
            sub: s("xosoSub1"),
            num: "［45］",
            resultTip: s("xosoTxt3", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["18", "2"])
            }]
          }, {
            sub: s("xosoSub3"),
            num: "［45］",
            resultTip: s("xosoTxt6", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["18", "2"])
            }]
          }, {
            sub: s("xosoSub4"),
            num: "［456］",
            resultTip: s("xosoTxt9", ["17"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt8")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["17", "3"])
            }]
          }, {
            sub: s("xosoSub5"),
            num: "［4567］",
            resultTip: s("xosoTxt11", ["16"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt10")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt2", ["16", "4"])
            }]
          }]
        }, {
          title: s("xosoTab2"),
          subList: [{
            sub: s("xosoSub6"),
            num: "［45/55］",
            resultTip: s("xosoTxt14", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["2"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["18", "2", "2"])
            }]
          }, {
            sub: s("xosoSub7"),
            num: "［45/55/65］",
            resultTip: s("xosoTxt15", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["3"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["18", "3", "2"])
            }]
          }, {
            sub: s("xosoSub8"),
            num: "［45/55/65/75］",
            resultTip: s("xosoTxt16", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["4"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt13", ["18", "4", "2"])
            }]
          }]
        }, {
          title: s("xosoTab3"),
          subList: [{
            sub: s("xosoSub14"),
            num: "［45］",
            resultTip: s("xosoTxt20"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt18")
            }]
          }, {
            sub: s("xosoSub15"),
            num: "［45］",
            resultTip: s("xosoTxt24"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt22")
            }]
          }, {
            sub: s("xosoSub16"),
            num: "［45］",
            resultTip: s("xosoTxt28"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt1")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt26")
            }]
          }]
        }, {
          title: s("xosoTab4"),
          subList: [{
            sub: s("xosoSub17"),
            num: "［4］",
            resultTip: s("xosoTxt31"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt29")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt30")
            }]
          }, {
            sub: s("xosoTxt100"),
            num: "［4］",
            resultTip: s("xosoTxt33"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt101")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt102")
            }]
          }]
        }, {
          title: s("xosoTab5"),
          subList: [{
            sub: s("xosoSub23"),
            num: "［456］",
            resultTip: s("xosoTxt42"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt38")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt40")
            }]
          }, {
            sub: s("xosoSub20"),
            num: "［456］",
            resultTip: s("xosoTxt45"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt43")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt44")
            }]
          }, {
            sub: s("xosoSub24"),
            num: "［456］",
            resultTip: s("xosoTxt50"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt43")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt48")
            }]
          }]
        }, {
          title: s("xosoTab6"),
          subList: [{
            sub: s("xosoSub25"),
            num: "［4567］",
            resultTip: s("xosoTxt53"),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt51")
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt52")
            }]
          }]
        }, {
          title: s("xosoTab7"),
          subList: [{
            sub: s("xosoSub26"),
            num: "［45/55/66/77］",
            resultTip: s("xosoTxt57", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["4"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["18"])
            }]
          }, {
            sub: s("xosoSub27"),
            num: "［45/55/66/77/88/99/11/22］",
            resultTip: s("xosoTxt58", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["8"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["18"])
            }]
          }, {
            sub: s("xosoSub28"),
            num: "［45/55/66/77/88/99/11/22/33/44］",
            resultTip: s("xosoTxt59", ["18"]),
            txtList: [{
              bet: s("betting"),
              betTip: s("xosoTxt12", ["10"])
            }, {
              bet: s("winningconditions"),
              betTip: s("xosoTxt56", ["18"])
            }]
          }]
        }, {
          title: s("xosoTab8"),
          subList: [{
            sub: s("xosoTxt60"),
            num: "",
            resultTip: s("xosoTxt66"),
            txtList: [{
              bet: s("xosoTxt60"),
              betTip: s("xosoTxt61")
            }, {
              bet: s("big"),
              betTip: s("xosoTxt62")
            }, {
              bet: s("small"),
              betTip: s("xosoTxt63")
            }, {
              bet: s("xosoTxt69"),
              betTip: s("xosoTxt64")
            }, {
              bet: s("xosoTxt70"),
              betTip: s("xosoTxt65")
            }]
          }]
        }]);
      return (_, p) => {
        const r = V("van-tab")
          , d = V("van-tabs");
        return n(),
          a("div", xL, [R(d, {
            active: l.value,
            "onUpdate:active": p[0] || (p[0] = v => l.value = v),
            type: "card"
          }, {
            default: A(() => [(n(!0),
              a(B, null, G(i, (v, o) => (n(),
                se(r, {
                  title: v.title,
                  key: o
                }, {
                  default: A(() => [(n(!0),
                    a(B, null, G(v.subList, (h, y) => (n(),
                      a("div", {
                        class: "Play__C-Cotent",
                        key: y
                      }, [e("div", SL, [e("img", {
                        src: u(re)("home/AllLotteryGames/NewVietnam", "Star")
                      }, null, 8, BL), e("span", null, t(h.sub), 1)]), e("div", ML, [(n(!0),
                        a(B, null, G(h.txtList, (T, $) => (n(),
                          a("div", {
                            class: "info_item",
                            key: $
                          }, [e("img", {
                            src: u(re)("home/AllLotteryGames/NewVietnam", "Triangle")
                          }, null, 8, PL), e("span", GL, t(T.bet), 1), e("div", DL, t(T.betTip), 1)]))), 128)), e("div", AL, [e("div", OL, t(u(s)("forexample")), 1), h.num ? (n(),
                            a("div", zL, t(u(s)("betting")) + "：" + t(h.num), 1)) : M("", !0), e("div", qL, t(u(s)("result")) + "：" + t(h.resultTip), 1)]), l.value === 7 ? (n(),
                              a("div", WL, [e("img", {
                                src: u(re)("home/AllLotteryGames/NewVietnam", "Triangle")
                              }, null, 8, EL), e("span", FL, t(u(s)("xosoTxt71")), 1), e("div", jL, t(u(s)("xosoTxt67")), 1)])) : M("", !0), l.value === 7 ? (n(),
                                a("div", VL, [e("div", HL, t(u(s)("forexample")), 1), e("div", UL, t(u(s)("result")) + "： " + t(u(s)("xosoTxt68")), 1)])) : M("", !0)])]))), 128))]),
                  _: 2
                }, 1032, ["title"]))), 128))]),
            _: 1
          }, 8, ["active"])])
      }
    }
  });
const XL = K(KL, [["__scopeId", "data-v-584e1104"]])
  , ps = c => (De("data-v-1d7b1eb6"),
    c = c(),
    Ae(),
    c)
  , QL = {
    class: "NorthRule__C"
  }
  , YL = {
    class: "NorthRule__C-title"
  }
  , ZL = {
    class: "NorthRule__C-tips"
  }
  , JL = ps(() => e("div", {
    class: "borderTopStyle"
  }, [e("span"), e("span")], -1))
  , eI = {
    class: "title"
  }
  , tI = {
    class: "text"
  }
  , sI = {
    class: "table"
  }
  , nI = {
    class: "table-row header-time"
  }
  , aI = {
    class: "table-time-1"
  }
  , oI = ps(() => e("div", {
    class: "table-time-1"
  }, "16:20(GMT+7)", -1))
  , lI = ps(() => e("div", {
    class: "table-time-1"
  }, "17:15(GMT+7)", -1))
  , iI = {
    class: "table-row header-week"
  }
  , cI = {
    class: "table-week-1"
  }
  , uI = {
    class: "table-week-1"
  }
  , rI = {
    class: "table-week-1"
  }
  , dI = {
    class: "table-cell-1"
  }
  , _I = {
    class: "table-cell-2"
  }
  , vI = ps(() => e("div", {
    class: "borderTopStyle"
  }, [e("span"), e("span")], -1))
  , pI = {
    class: "title"
  }
  , mI = {
    class: "text"
  }
  , hI = {
    key: 0,
    class: "text"
  }
  , fI = {
    key: 1,
    class: "text"
  }
  , gI = {
    class: "NorthRule__C-Rule"
  }
  , yI = {
    class: "NorthRule__C-Struct"
  }
  , bI = ps(() => e("span", {
    class: "left"
  }, null, -1))
  , $I = ps(() => e("span", {
    class: "right"
  }, null, -1))
  , kI = {
    class: "table-rule"
  }
  , TI = {
    class: "table-header"
  }
  , wI = {
    class: "table-header-cell"
  }
  , CI = {
    class: "table-header-cell"
  }
  , NI = {
    class: "table-header-cell"
  }
  , LI = {
    class: "table-cell"
  }
  , II = {
    class: "table-cell"
  }
  , RI = {
    class: "table-cell"
  }
  , xI = {
    class: "table-rule"
  }
  , SI = {
    class: "table-header"
  }
  , BI = {
    class: "table-header-cell"
  }
  , MI = {
    key: 0,
    class: "table-box-title"
  }
  , PI = U({
    __name: "SorthRule",
    setup(c) {
      const { t: s } = ye()
        , l = je([{
          title: "01",
          sub: s("resultsVielottery")
        }, {
          title: "02",
          sub: s("systemresult")
        }, {
          title: "03",
          sub: s("lotterytime1")
        }])
        , i = je([{
          title: "04",
          sub: s("oddsmiscalculated")
        }, {
          title: "05",
          sub: s("oddsbettingprincipal")
        }, {
          title: "06",
          sub: s("oddsfluctuate")
        }, {
          title: "07",
          sub: s("oncebetgenerated")
        }, {
          title: "08",
          sub: s("anyreasonCauses")
        }, {
          title: "09",
          sub: s("platformcancel"),
          sub1: s("drawdelayedtoolong"),
          sub2: s("resultsofthelotterybeenleaked")
        }])
        , _ = je([{
          week: s("Monday"),
          addressList: [s("hochiminhcity"), s("sametower"), s("camua"), s("fuan"), s("hue")]
        }, {
          week: s("Tuesday"),
          addressList: [s("BenTre"), s("VungTau"), s("BacLieu"), s("Guangnan"), s("Dole")]
        }, {
          week: s("Wednesday"),
          addressList: [s("DongNai"), s("CanTho"), s("Shuozhuang"), s("danang"), s("Qinghe")]
        }, {
          week: s("Thursday"),
          addressList: [s("Xining"), s("Anjiang"), s("smooth"), s("putdown"), s("QuangBinh"), s("Koji")]
        }, {
          week: s("Friday"),
          addressList: [s("VinhLong"), s("BinhDuong"), s("ChaRong"), s("Carai"), s("NinhThun")]
        }, {
          week: s("Saturday"),
          addressList: [s("hochiminhcity"), s("LongAn"), s("Pingfu"), s("Houjiang"), s("danang"), s("Generalized"), s("Denon")]
        }, {
          week: s("Sunday"),
          addressList: [s("Qianjiang"), s("jianjiang"), s("DaLat"), s("Qinghe"), s("KonTum")]
        }])
        , p = je([{
          title: s("GrandPrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["575333"]
        }, {
          title: s("FirstPrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["34521"]
        }, {
          title: s("SecondPrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["34675"]
        }, {
          title: s("ThirdPrize"),
          quantity: 2,
          number: s("seconddigits"),
          drawsNumber: ["34575", "45732"]
        }, {
          title: s("FourPrize"),
          quantity: 7,
          number: s("sevendigits"),
          drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"]
        }, {
          title: s("FivePrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["6425"]
        }, {
          title: s("SixPrize"),
          quantity: 3,
          number: s("threedigits"),
          drawsNumber: ["66992", "95797", "4356"]
        }, {
          title: s("SevenPrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["69388"]
        }, {
          title: s("EightPrize"),
          quantity: 1,
          number: s("onedigits"),
          drawsNumber: ["12"]
        }, {
          title: s("intotal"),
          quantity: s("eightlotteryawards"),
          number: ""
        }])
        , r = d => d.slice().reverse();
      return (d, v) => (n(),
        a("div", QL, [e("div", YL, t(u(s)("sorthVieLotteryGameRules")), 1), e("div", ZL, t(u(s)("precautions")), 1), (n(!0),
          a(B, null, G(l, (o, h) => (n(),
            a("div", {
              class: "NorthRule__C-Content",
              key: h
            }, [JL, e("div", eI, t(o.title), 1), e("div", tI, t(o.sub), 1)]))), 128)), e("div", sI, [e("div", nI, [e("div", aI, t(u(s)("winTrxTime")), 1), oI, lI]), e("div", iI, [e("div", cI, t(u(s)("weeks")), 1), e("div", uI, t(u(s)("sorthLotteryCities")), 1), e("div", rI, t(u(s)("middleLotteryCities")), 1)]), (n(!0),
              a(B, null, G(_, (o, h) => (n(),
                a("div", {
                  class: "table-row",
                  key: h
                }, [e("div", dI, t(o.week), 1), e("div", _I, [(n(!0),
                  a(B, null, G(o.addressList, (y, T) => (n(),
                    a("div", {
                      class: "table-column-1",
                      key: T
                    }, t(y), 1))), 128))])]))), 128))]), (n(!0),
                      a(B, null, G(i, (o, h) => (n(),
                        a("div", {
                          class: "NorthRule__C-Content",
                          key: h
                        }, [vI, e("div", pI, t(o.title), 1), e("div", mI, t(o.sub), 1), o.sub1 ? (n(),
                          a("div", hI, t(o.sub1), 1)) : M("", !0), o.sub2 ? (n(),
                            a("div", fI, t(o.sub2), 1)) : M("", !0)]))), 128)), e("div", gI, t(u(s)("sorthernLotteryGameRules")), 1), e("div", yI, [bI, W(t(u(s)("colorstructure")), 1), $I]), e("div", kI, [e("div", TI, [e("div", wI, t(u(s)("Lottery")), 1), e("div", CI, t(u(s)("numberofPrizes")), 1), e("div", NI, t(u(s)("Number")), 1)]), (n(!0),
                              a(B, null, G(p, (o, h) => (n(),
                                a("div", {
                                  class: "table-row",
                                  key: h
                                }, [e("div", LI, t(o.title), 1), e("div", II, t(o.quantity), 1), e("div", RI, t(o.number), 1)]))), 128))]), e("div", xI, [e("div", SI, [e("div", BI, t(u(s)("sorthlotteryresult")), 1)]), (n(!0),
                                  a(B, null, G(r(p), (o, h) => (n(),
                                    a("div", {
                                      class: P(h == 0 ? "table-box none" : "table-box"),
                                      key: h
                                    }, [h != 0 ? (n(),
                                      a("div", MI, t(o.title), 1)) : M("", !0), (n(!0),
                                        a(B, null, G(o.drawsNumber, (y, T) => (n(),
                                          a("div", {
                                            class: "table-box-number",
                                            key: T
                                          }, t(y), 1))), 128))], 2))), 128))])]))
    }
  });
const GI = K(PI, [["__scopeId", "data-v-1d7b1eb6"]])
  , DI = {
    class: "vietnamPlay__C"
  }
  , AI = {
    key: 0,
    class: "play"
  }
  , OI = {
    key: 1,
    class: "play"
  }
  , zI = {
    key: 0,
    class: "northrule"
  }
  , qI = {
    key: 1,
    class: "sorthrule"
  }
  , WI = U({
    __name: "index",
    setup(c) {
      var r, d;
      const s = $e()
        , l = g(0)
        , i = s.currentRoute.value.query.id
        , _ = ((d = (r = s.currentRoute.value.query) == null ? void 0 : r.gVSs) == null ? void 0 : d.toString()) || ""
        , p = () => {
          s.go(-1)
        }
        ;
      return (v, o) => {
        const h = V("NavBar")
          , y = V("van-tab")
          , T = V("van-tabs");
        return n(),
          a("div", DI, [R(h, {
            "left-arrow": "",
            title: v.$t("lotteryManual"),
            onClickLeft: p,
            "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
          }, null, 8, ["title"]), R(T, {
            active: l.value,
            "onUpdate:active": o[0] || (o[0] = $ => l.value = $),
            type: "card",
            class: P({
              dis: u(_) == "2"
            })
          }, {
            default: A(() => [R(y, {
              title: v.$t("gamePlay")
            }, {
              default: A(() => [u(i) == "1" ? (n(),
                a("div", AI, [R(V6)])) : (n(),
                  a("div", OI, [R(XL)]))]),
              _: 1
            }, 8, ["title"]), u(_) != "2" ? (n(),
              se(y, {
                key: 0,
                title: v.$t("rule")
              }, {
                default: A(() => [u(i) == "1" ? (n(),
                  a("div", zI, [R(RL)])) : (n(),
                    a("div", qI, [R(GI)]))]),
                _: 1
              }, 8, ["title"])) : M("", !0)]),
            _: 1
          }, 8, ["active", "class"])])
      }
    }
  });
const EI = K(WI, [["__scopeId", "data-v-f2d38c45"]])
  , _7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: EI
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , FI = c => (De("data-v-c0d1aac6"),
    c = c(),
    Ae(),
    c)
  , jI = {
    class: "TimeLeft__C"
  }
  , VI = {
    class: "TimeLeft__C-name"
  }
  , HI = {
    class: "TimeLeft__C-num"
  }
  , UI = {
    class: "TimeLeft__C-id"
  }
  , KI = {
    class: "TimeLeft__C-text"
  }
  , XI = {
    class: "TimeLeft__C-time"
  }
  , QI = FI(() => e("div", null, ":", -1))
  , YI = U({
    __name: "TimeLeft",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
      },
      winNum: {
        type: Array,
        default: [0, 0, 0, 0, 0]
      },
      gameName: {
        type: String,
        default: ""
      },
      currentGame: {
        type: Object,
        default: () => ({})
      }
    },
    setup(c) {
      const s = c
        , l = g(!1)
        , i = Kt()
        , _ = () => {
          l.value = !0,
            i.getWinGoRule(s.currentGame.typeID)
        }
        ;
      return (p, r) => (n(),
        a(B, null, [e("div", jI, [e("div", {
          class: "TimeLeft__C-rule",
          onClick: _
        }, t(p.$t("winTrxIndicate")), 1), e("div", VI, t(s.gameName.replace("<br />", " ")), 1), e("div", HI, [(n(!0),
          a(B, null, G(c.winNum, (d, v) => (n(),
            a("div", {
              key: v,
              class: P(["n" + d])
            }, null, 2))), 128))]), e("div", UI, t(s.currentInfo.gameNo), 1), e("div", KI, t(p.$t("timeLeftToBuy")), 1), e("div", XI, [e("div", null, t(c.currentInfo.time1), 1), e("div", null, t(c.currentInfo.time2), 1), QI, e("div", null, t(c.currentInfo.time3), 1), e("div", null, t(c.currentInfo.time4), 1)])]), R(Bs, {
              howPlayShow: l.value,
              gamePresentation: c.currentGame.gamePresentation,
              onClose: r[0] || (r[0] = d => l.value = !1)
            }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
  });
const ZI = K(YI, [["__scopeId", "data-v-c0d1aac6"]])
  , JI = c => (De("data-v-15f0cefa"),
    c = c(),
    Ae(),
    c)
  , eR = {
    class: "Betting__Popup-head"
  }
  , tR = {
    class: "Betting__Popup-head-title"
  }
  , sR = {
    class: "Betting__Popup-head-selectName"
  }
  , nR = {
    class: "Betting__Popup-body"
  }
  , aR = {
    class: "Betting__Popup-body-line"
  }
  , oR = {
    class: "Betting__Popup-body-line-list"
  }
  , lR = ["onClick"]
  , iR = {
    class: "Betting__Popup-body-line"
  }
  , cR = {
    class: "Betting__Popup-body-line-btnL"
  }
  , uR = {
    class: "Betting__Popup-body-line"
  }
  , rR = JI(() => e("div", null, null, -1))
  , dR = {
    class: "Betting__Popup-body-line-list"
  }
  , _R = ["onClick"]
  , vR = {
    class: "Betting__Popup-body-line"
  }
  , pR = {
    class: "Betting__Popup-foot"
  }
  , mR = {
    class: "Betting__Popup-foot-s bgcolor"
  }
  , hR = {
    class: "Betting__Popup-PreSale"
  }
  , fR = {
    class: "Betting__Popup-PreSale-head"
  }
  , gR = {
    class: "Betting__Popup-PreSale-body"
  }
  , yR = {
    class: "Betting__Popup-PreSale-foot"
  }
  , bR = U({
    __name: "BettingPopup",
    props: {
      currentGame: {
        type: Object,
        default: () => ({})
      },
      selectInfo: {
        type: Object,
        default: () => ({})
      },
      bettingPopupShow: {
        type: Boolean,
        default: g(!1)
      },
      betTypeList: {
        type: Array,
        default: []
      },
      multipleList: {
        type: Array,
        default: () => [1, 5, 10, 20, 50, 100]
      }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(c, { emit: s }) {
      const l = c
        , { t: i } = ye()
        , _ = g(!1)
        , p = g(!0)
        , r = ee({
          get() {
            return l.bettingPopupShow || !1
          },
          set(k) {
            s("update:bettingPopupShow", k)
          }
        })
        , d = ee(() => {
          switch (l.selectInfo.selecttype) {
            case 13:
              return i("big");
            case 14:
              return i("small");
            case 10:
              return i("redColor");
            case 11:
              return i("greenColor");
            case 12:
              return i("purpleColor");
            default:
              return l.selectInfo.selecttype
          }
        }
        )
        , v = ee(() => l.currentGame.typeName)
        , o = k => {
          switch (k) {
            case 1:
              l.selectInfo.count > 1 && (l.selectInfo.count--,
                f());
              break;
            case 2:
              l.selectInfo.count++,
                f();
              break
          }
        }
        , h = k => {
          k > 0 && (l.selectInfo.count = parseInt(k),
            f())
        }
        , y = k => {
          l.selectInfo.count = k,
            f()
        }
        , T = k => {
          l.selectInfo.coin = k,
            f()
        }
        , $ = () => {
          _.value = !1,
            p.value = !0
        }
        , b = () => {
          if (l.selectInfo.count == 0)
            return qe(i("bteNoCount"));
          p.value ? s("submitBetting") : ht(i("agreePresaleRules"))
        }
        , f = () => {
          l.selectInfo.allCoin = l.selectInfo.coin * l.selectInfo.count
        }
        ;
      return (k, w) => {
        const m = V("van-field")
          , C = V("van-popup")
          , N = Je("throttle-click");
        return n(),
          a(B, null, [R(C, {
            show: r.value,
            "onUpdate:show": w[6] || (w[6] = S => r.value = S),
            position: "bottom",
            round: !0,
            "close-on-click-overlay": !1
          }, {
            default: A(() => [e("div", {
              class: P([`Betting__Popup-${c.selectInfo.selecttype}`])
            }, [e("div", eR, [e("div", tR, t(v.value.replace("<br />", " ")), 1), e("div", sR, [e("span", null, t(u(i)("choose")), 1), e("span", null, t(d.value), 1)])]), e("div", nR, [e("div", aR, [W(t(u(i)("amount")) + " ", 1), e("div", oR, [(n(!0),
              a(B, null, G(c.betTypeList, (S, L) => (n(),
                a("div", {
                  key: L,
                  class: P(["Betting__Popup-body-line-item", {
                    bgcolor: c.selectInfo.coin == S
                  }]),
                  onClick: x => T(S)
                }, t(S), 11, lR))), 128))])]), e("div", iR, [W(t(u(i)("numbers")) + " ", 1), e("div", cR, [e("div", {
                  class: P(["Betting__Popup-btn", {
                    bgcolor: c.selectInfo.count > 0
                  }]),
                  onClick: w[0] || (w[0] = S => o(1))
                }, "-", 2), R(m, {
                  class: "Betting__Popup-input",
                  modelValue: c.selectInfo.count,
                  "onUpdate:modelValue": w[1] || (w[1] = S => c.selectInfo.count = S),
                  modelModifiers: {
                    number: !0
                  },
                  type: "digit",
                  maxlength: 4,
                  onInput: h
                }, null, 8, ["modelValue"]), e("div", {
                  class: "Betting__Popup-btn bgcolor",
                  onClick: w[2] || (w[2] = S => o(2))
                }, "+")])]), e("div", uR, [rR, e("div", dR, [(n(!0),
                  a(B, null, G(c.multipleList, (S, L) => (n(),
                    a("div", {
                      key: L,
                      class: P(["Betting__Popup-body-line-item", {
                        bgcolor: c.selectInfo.count == S
                      }]),
                      onClick: x => y(S)
                    }, " X" + t(S), 11, _R))), 128))])]), e("div", vR, [e("span", {
                      class: P(["Betting__Popup-agree", {
                        active: p.value
                      }]),
                      onClick: w[3] || (w[3] = S => p.value = !p.value)
                    }, t(u(i)("agree")), 3), e("span", {
                      onClick: w[4] || (w[4] = S => _.value = !0),
                      class: "Betting__Popup-preSaleShow"
                    }, t(u(i)("presaleRules")), 1)])]), e("div", pR, [e("div", {
                      class: "Betting__Popup-foot-c",
                      onClick: w[5] || (w[5] = S => s("clearBetting"))
                    }, t(u(i)("cancel")), 1), be((n(),
                      a("div", mR, [W(t(u(i)("totalAmount")) + " " + t(u(Re)(c.selectInfo.count * c.selectInfo.coin || 0)), 1)])), [[N, {
                        handler: b,
                        wait: 2e3
                      }]])])], 2)]),
            _: 1
          }, 8, ["show"]), R(C, {
            show: _.value,
            "onUpdate:show": w[7] || (w[7] = S => _.value = S),
            "close-on-click-overlay": !1,
            round: ""
          }, {
            default: A(() => [e("div", hR, [e("div", fR, t(u(i)("presaleRules")), 1), e("div", gR, t(k.$t("betPopTXT")), 1), e("div", yR, [e("div", {
              class: "Betting__Popup-PreSale-foot-btn",
              onClick: $
            }, t(u(i)("iKonw")), 1)])])]),
            _: 1
          }, 8, ["show"])], 64)
      }
    }
  });
const $R = K(bR, [["__scopeId", "data-v-15f0cefa"]])
  , kR = {
    class: "Betting__C"
  }
  , TR = {
    class: "Betting__C-mark"
  }
  , wR = {
    class: "Betting__C-head"
  }
  , CR = {
    class: "Betting__C-numC"
  }
  , NR = ["onClick"]
  , LR = {
    class: "Betting__C-multiple"
  }
  , IR = ["onClick"]
  , RR = {
    class: "Betting__C-foot"
  }
  , xR = U({
    __name: "Betting",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({})
      },
      ProhibitBuyTime: {
        type: Number,
        default: 5
      },
      currentGame: {
        type: Object,
        default: () => ({})
      },
      bettingApiFun: {
        type: Function,
        required: !0
      }
    },
    emits: ["betting", "changeBettingP"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , _ = Is.global.t
        , p = ee(() => i.currentGame.betMultiple.split("|"))
        , r = g(!1)
        , d = g("")
        , v = g({
          coin: 0,
          count: p.value[0],
          allCoin: 0,
          gametype: 0,
          typeid: 1,
          issuenumber: "2020",
          selecttype: 1
        });
      Ge(() => p, () => {
        v.value.count = p.value[0]
      }
        , {
          deep: !0,
          immediate: !0
        });
      const o = g(null)
        , h = g(0)
        , y = g(!1)
        , T = ee(() => (i.currentInfo.passTime < i.ProhibitBuyTime && C(),
          i.currentInfo.passTime < i.ProhibitBuyTime))
        , $ = ee(() => i.currentGame.typeID)
        , b = ee(() => i.currentGame.scope ? i.currentGame.scope.split("|").map(S => Number(S)) : [])
        , f = S => {
          v.value.count = S,
            k()
        }
        , k = () => {
          v.value.allCoin = v.value.coin * v.value.count
        }
        , w = (S, L, x) => {
          v.value.gametype = x,
            v.value.selecttype = S,
            v.value.issuenumber = i.currentInfo.gameNo,
            v.value.typeid = $.value,
            v.value.coin = b.value[0],
            d.value = S,
            r.value = !0
        }
        , m = () => {
          y.value || (y.value = !0,
            o.value || (o.value = setInterval(function () {
              h.value = Math.floor(Math.random() * 11)
            }, 50)),
            setTimeout(function () {
              h.value > 9 && (h.value = 9),
                clearInterval(o.value),
                y.value = !1,
                o.value = null,
                w(h.value, "color" + h.value, 1)
            }, 5e3))
        }
        , C = () => {
          r.value && (r.value = !1,
            v.value.coin = b.value[0],
            v.value.count = p.value[0],
            k(),
            l("changeBettingP", r.value))
        }
        , N = async () => {
          const S = await ae(i.bettingApiFun({
            typeId: v.value.typeid,
            issuenumber: v.value.issuenumber,
            amount: v.value.coin,
            betCount: Number(v.value.count),
            gameType: v.value.gametype,
            selectType: v.value.selecttype
          }));
          (S == null ? void 0 : S.code) === 0 && (ht(_("code" + S.msgCode)),
            l("betting", v.value.issuenumber),
            C())
        }
        ;
      return s({
        bettingPopupShow: r
      }),
        (S, L) => (n(),
          a("div", kR, [be(e("div", TR, [e("div", null, t(i.currentInfo.time3 || "0"), 1), e("div", null, t(i.currentInfo.time4 || "0"), 1)], 512), [[et, T.value]]), e("div", wR, [e("div", {
            class: "Betting__C-head-g",
            onClick: L[0] || (L[0] = x => w(11, "#5CBA47", 0))
          }, t(S.$t("greenColor")), 1), e("div", {
            class: "Betting__C-head-p",
            onClick: L[1] || (L[1] = x => w(12, "#9831E9", 0))
          }, t(S.$t("purpleColor")), 1), e("div", {
            class: "Betting__C-head-r",
            onClick: L[2] || (L[2] = x => w(10, "#FB4E4E", 0))
          }, t(S.$t("redColor")), 1)]), e("div", CR, [(n(),
            a(B, null, G(10, (x, I) => e("div", {
              key: I,
              class: P([h.value == x ? "active" : "", "Betting__C-numC-item" + I]),
              onClick: O => w(I, "color" + I, 1)
            }, null, 10, NR)), 64))]), e("div", LR, [e("div", {
              class: "Betting__C-multiple-l",
              onClick: m
            }, t(S.$t("randomBet")), 1), (n(!0),
              a(B, null, G(p.value, (x, I) => (n(),
                a("div", {
                  key: I,
                  class: P(["Betting__C-multiple-r", {
                    active: v.value.count == x
                  }]),
                  onClick: O => f(x)
                }, " X" + t(x), 11, IR))), 128))]), e("div", RR, [e("div", {
                  class: "Betting__C-foot-b",
                  onClick: L[3] || (L[3] = x => w(13, "#ffc511", 2))
                }, t(S.$t("big")), 1), e("div", {
                  class: "Betting__C-foot-s",
                  onClick: L[4] || (L[4] = x => w(14, "#5CBA47", 2))
                }, t(S.$t("small")), 1)]), R($R, {
                  currentGame: c.currentGame,
                  selectInfo: v.value,
                  bettingPopupShow: r.value,
                  betTypeList: b.value,
                  multipleList: p.value,
                  onClearBetting: C,
                  onSubmitBetting: N
                }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
    }
  });
const Aa = K(xR, [["__scopeId", "data-v-0aa493a0"]])
  , zs = c => (De("data-v-c74f4bba"),
    c = c(),
    Ae(),
    c)
  , SR = {
    class: "GameRecord__C"
  }
  , BR = {
    class: "GameRecord__C-head"
  }
  , MR = {
    class: "GameRecord__C-body"
  }
  , PR = {
    key: 0
  }
  , GR = {
    key: 1
  }
  , DR = {
    class: "GameRecord__C-origin"
  }
  , AR = zs(() => e("div", {
    class: "GameRecord__C-origin-I red"
  }, null, -1))
  , OR = zs(() => e("div", {
    class: "GameRecord__C-origin-I violet"
  }, null, -1))
  , zR = {
    key: 1,
    class: "GameRecord__C-origin-I green"
  }
  , qR = {
    key: 2,
    class: "GameRecord__C-origin-I red"
  }
  , WR = zs(() => e("div", {
    class: "GameRecord__C-origin-I green"
  }, null, -1))
  , ER = zs(() => e("div", {
    class: "GameRecord__C-origin-I violet"
  }, null, -1))
  , FR = {
    key: 1,
    class: "GameRecord__C-body-empty"
  }
  , jR = {
    key: 0,
    class: "GameRecord__C-foot"
  }
  , VR = {
    class: "GameRecord__C-foot-page"
  }
  , HR = U({
    __name: "GameRecord",
    props: {
      typeid: {}
    },
    emits: ["changefive"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , _ = g([])
        , p = g(4)
        , r = g(10)
        , d = g(1)
        , v = () => {
          d.value--,
            h()
        }
        , o = () => {
          d.value++,
            h()
        }
        , h = async ($ = !1) => {
          if (i.typeid == null)
            return;
          $ && (d.value = 1);
          const [b, f] = await Ze(wa({
            pageSize: r.value,
            pageNo: d.value,
            typeId: i.typeid
          }));
          _.value = f.list || [],
            p.value = f.totalPage,
            $ && l("changefive", f.list.slice(0, 5).map(k => k.number))
        }
        , y = $ => parseInt($, 10) % 2 !== 0
        , T = $ => {
          let b = "";
          switch (y($) ? b = "greenColor" : b = "defaultColor",
          $) {
            case "0":
              b = "mixedColor0";
              break;
            case "5":
              b = "mixedColor5";
              break
          }
          return b
        }
        ;
      return s({
        getData: h
      }),
        wt(() => {
          h()
        }
        ),
        ($, b) => {
          const f = V("van-col")
            , k = V("van-row")
            , w = V("van-icon");
          return n(),
            a("div", SR, [e("div", BR, [R(k, null, {
              default: A(() => [R(f, {
                span: "8"
              }, {
                default: A(() => [W(t($.$t("betSerial")), 1)]),
                _: 1
              }), R(f, {
                span: "5"
              }, {
                default: A(() => [W(t($.$t("num")), 1)]),
                _: 1
              }), R(f, {
                span: "5"
              }, {
                default: A(() => [W(t($.$t("bigOrSmall")), 1)]),
                _: 1
              }), R(f, {
                span: "6"
              }, {
                default: A(() => [W(t($.$t("color")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", MR, [_.value.length ? (n(!0),
              a(B, {
                key: 0
              }, G(_.value, (m, C) => (n(),
                se(k, {
                  key: C
                }, {
                  default: A(() => [R(f, {
                    span: "8"
                  }, {
                    default: A(() => [W(t(m.issueNumber), 1)]),
                    _: 2
                  }, 1024), R(f, {
                    span: "5",
                    class: "numcenter"
                  }, {
                    default: A(() => [e("div", {
                      class: P(["GameRecord__C-body-num", T(m.number)])
                    }, t(m.number), 3)]),
                    _: 2
                  }, 1024), R(f, {
                    span: "5"
                  }, {
                    default: A(() => [Number(m.number) > 4 ? (n(),
                      a("span", PR, t($.$t("big")), 1)) : (n(),
                        a("span", GR, t($.$t("small")), 1))]),
                    _: 2
                  }, 1024), R(f, {
                    span: "6"
                  }, {
                    default: A(() => [e("div", DR, [m.number == "0" ? (n(),
                      a(B, {
                        key: 0
                      }, [AR, OR], 64)) : M("", !0), m.number == "1" || m.number == "3" || m.number == "7" || m.number == "9" ? (n(),
                        a("div", zR)) : M("", !0), m.number == "2" || m.number == "4" || m.number == "6" || m.number == "8" ? (n(),
                          a("div", qR)) : M("", !0), m.number == "5" ? (n(),
                            a(B, {
                              key: 3
                            }, [WR, ER], 64)) : M("", !0)])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024))), 128)) : (n(),
                  a("div", FR, [R(ut)]))]), _.value.length ? (n(),
                    a("div", jR, [e("div", {
                      class: P(["GameRecord__C-foot-previous", {
                        disabled: d.value <= 1
                      }]),
                      onClick: v
                    }, [R(w, {
                      name: "arrow-left",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", VR, t(d.value) + "/" + t(p.value), 1), e("div", {
                      class: P(["GameRecord__C-foot-next", {
                        disabled: d.value >= p.value
                      }]),
                      onClick: o
                    }, [R(w, {
                      name: "arrow",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const UR = K(HR, [["__scopeId", "data-v-c74f4bba"]])
  , KR = {
    class: "Trend__C"
  }
  , XR = {
    class: "Trend__C-head"
  }
  , QR = {
    class: "Trend__C-body1"
  }
  , YR = {
    class: "Trend__C-body1-line"
  }
  , ZR = {
    class: "Trend__C-body1-line lottery"
  }
  , JR = {
    key: 0,
    class: "Trend__C-body1-line-num"
  }
  , ex = {
    key: 0,
    class: "Trend__C-body1-line"
  }
  , tx = {
    class: "Trend__C-body1-line-num"
  }
  , sx = {
    key: 1,
    class: "Trend__C-body1-line"
  }
  , nx = {
    class: "Trend__C-body1-line-num"
  }
  , ax = {
    key: 2,
    class: "Trend__C-body1-line"
  }
  , ox = {
    class: "Trend__C-body1-line-num"
  }
  , lx = {
    key: 3,
    class: "Trend__C-body1-line"
  }
  , ix = {
    class: "Trend__C-body1-line-num"
  }
  , cx = {
    class: "Trend__C-body2"
  }
  , ux = ["IssueNumber", "Number", "Colour", "rowId"]
  , rx = {
    class: "Trend__C-body2-IssueNumber"
  }
  , dx = {
    class: "Trend__C-body2-Num"
  }
  , _x = ["id"]
  , vx = {
    key: 1,
    class: "Trend__C-body2-empty"
  }
  , px = {
    key: 0,
    class: "Trend__C-foot"
  }
  , mx = {
    class: "Trend__C-foot-page"
  }
  , hx = U({
    __name: "Trend",
    props: {
      typeid: {},
      listApi: {},
      EmerdApi: {}
    },
    emits: ["changefive"],
    setup(c, { expose: s, emit: l }) {
      const i = c
        , _ = g([])
        , p = g([])
        , r = g()
        , d = g()
        , v = g()
        , o = g()
        , h = g()
        , y = g(1)
        , T = g(4);
      function $() {
        Xe(() => {
          for (let C = 0; C < p.value.length; C++)
            p.value[C + 1] && b(p.value[C], p.value[C + 1])
        }
        )
      }
      function b(C, N) {
        let S = parseInt(C.number)
          , L = parseInt(N.number);
        var x = document.getElementById("myCanvas" + C.rowId);
        if (x && x.getContext) {
          var I = x.getContext("2d");
          I.clearRect(0, 0, x.width, x.height),
            I.beginPath(),
            I.moveTo(S == 0 ? 15 : S * 29 + 15, 0),
            I.lineTo(L == 0 ? 15 : L * 29 + 15, x.height),
            I.strokeStyle = "red",
            I.stroke(),
            I.closePath()
        }
      }
      const f = () => {
        y.value--,
          m()
      }
        , k = () => {
          y.value++,
            m()
        }
        , w = async (C = !1) => {
          if (i.typeid == null)
            return;
          C && (y.value = 1,
            m(C));
          const [N, S] = await Ze(i.EmerdApi({
            typeId: i.typeid
          }));
          if (S.length) {
            const L = Object.keys(S[0]).filter(x => x.startsWith("number_"));
            _.value = S.map(x => {
              const I = {
                list: []
              };
              return I.type = x.type,
                I.list = [],
                L.forEach(O => {
                  I.list.push(x[O])
                }
                ),
                I
            }
            )
          }
          r.value = _.value[0],
            d.value = _.value[1],
            v.value = _.value[2],
            o.value = _.value[3],
            h.value = _.value[4]
        }
        , m = async (C = !1) => {
          var L;
          if (i.typeid == null)
            return;
          C && (y.value = 1);
          const [N, S] = await Ze(i.listApi({
            pageSize: 10,
            pageNo: y.value,
            typeId: i.typeid
          }));
          if (S.list ? p.value = S.list.map((x, I) => (x.rowId = I,
            x)) || [] : S.data.gameslist && (p.value = S.data.gameslist.map((x, I) => (x.rowId = I,
              x)) || []),
            T.value = S.totalPage,
            C) {
            const x = ((L = S.data) == null ? void 0 : L.gameslist) || S.list || [];
            l("changefive", x.slice(0, 5).map(I => I.number))
          }
          $()
        }
        ;
      return s({
        getData: w
      }),
        wt(() => {
          w(),
            m()
        }
        ),
        (C, N) => {
          const S = V("van-col")
            , L = V("van-row")
            , x = V("van-icon");
          return n(),
            a("div", KR, [e("div", XR, [R(L, null, {
              default: A(() => [R(S, {
                span: "8"
              }, {
                default: A(() => [W(t(C.$t("betIssue")), 1)]),
                _: 1
              }), R(S, {
                span: "16"
              }, {
                default: A(() => [W(t(C.$t("number")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", QR, [e("div", YR, t(C.$t("trendDesc1")), 1), e("div", ZR, [e("div", null, t(C.$t("trendDesc2")), 1), r.value ? (n(),
              a("div", JR, [(n(),
                a(B, null, G(10, I => e("div", {
                  key: I
                }, t(I - 1), 1)), 64))])) : M("", !0)]), o.value && o.value.type == 2 ? (n(),
                  a("div", ex, [e("div", null, t(C.$t("trendDesc3")), 1), e("div", tx, [(n(!0),
                    a(B, null, G(o.value.list, (I, O) => (n(),
                      a("div", {
                        key: "4" + O
                      }, t(I), 1))), 128))])])) : M("", !0), d.value && d.value.type == 4 ? (n(),
                        a("div", sx, [e("div", null, t(C.$t("trendDesc4")), 1), e("div", nx, [(n(!0),
                          a(B, null, G(d.value.list, (I, O) => (n(),
                            a("div", {
                              key: "2" + O
                            }, t(I), 1))), 128))])])) : M("", !0), h.value && h.value.type == 1 ? (n(),
                              a("div", ax, [e("div", null, t(C.$t("trendDesc5")), 1), e("div", ox, [(n(!0),
                                a(B, null, G(h.value.list, (I, O) => (n(),
                                  a("div", {
                                    key: "5" + O
                                  }, t(I), 1))), 128))])])) : M("", !0), v.value && v.value.type == 3 ? (n(),
                                    a("div", lx, [e("div", null, t(C.$t("trendDesc6")), 1), e("div", ix, [(n(!0),
                                      a(B, null, G(v.value.list, (I, O) => (n(),
                                        a("div", {
                                          key: "3" + O
                                        }, t(I), 1))), 128))])])) : M("", !0)]), e("div", cx, [p.value.length ? (n(!0),
                                          a(B, {
                                            key: 0
                                          }, G(p.value, (I, O) => (n(),
                                            a("div", {
                                              key: O,
                                              IssueNumber: I.issueNumber,
                                              Number: I.number,
                                              Colour: I.colour,
                                              rowId: I.rowId
                                            }, [R(L, null, {
                                              default: A(() => [R(S, {
                                                span: "8"
                                              }, {
                                                default: A(() => [e("div", rx, t(I.issueNumber), 1)]),
                                                _: 2
                                              }, 1024), R(S, {
                                                span: "16"
                                              }, {
                                                default: A(() => [e("div", dx, [e("canvas", {
                                                  canvas: "",
                                                  id: "myCanvas" + I.rowId,
                                                  ref_for: !0,
                                                  ref: "canvas",
                                                  class: "line-canvas"
                                                }, null, 8, _x), (n(),
                                                  a(B, null, G(10, D => e("div", {
                                                    class: P(["Trend__C-body2-Num-item", Number(I.number) == D - 1 ? "action" + (D - 1) : ""]),
                                                    key: D
                                                  }, t(D - 1), 3)), 64)), e("div", {
                                                    class: P(["Trend__C-body2-Num-BS", {
                                                      isB: Number(I.number) > 4
                                                    }])
                                                  }, t(Number(I.number) > 4 ? "B" : "S"), 3)])]),
                                                _: 2
                                              }, 1024)]),
                                              _: 2
                                            }, 1024)], 8, ux))), 128)) : (n(),
                                              a("div", vx, [R(ut)]))]), p.value.length ? (n(),
                                                a("div", px, [e("div", {
                                                  class: P(["Trend__C-foot-previous", {
                                                    disabled: y.value <= 1
                                                  }]),
                                                  onClick: f
                                                }, [R(x, {
                                                  name: "arrow-left",
                                                  class: "Trend__C-icon",
                                                  size: "20"
                                                })], 2), e("div", mx, t(y.value) + "/" + t(T.value), 1), e("div", {
                                                  class: P(["Trend__C-foot-next", {
                                                    disabled: y.value >= T.value
                                                  }]),
                                                  onClick: k
                                                }, [R(x, {
                                                  name: "arrow",
                                                  class: "Trend__C-icon",
                                                  size: "20"
                                                })], 2)])) : M("", !0)])
        }
    }
  });
const Oa = K(hx, [["__scopeId", "data-v-3d4e28a8"]])
  , fx = {
    key: 1,
    class: "WinningTip__C-body-l1"
  }
  , gx = {
    class: "WinningNum"
  }
  , yx = {
    class: "WinningTip__C-body-l3"
  }
  , bx = {
    key: 0,
    class: "isLose"
  }
  , $x = {
    class: "head"
  }
  , kx = {
    class: "bonus"
  }
  , Tx = {
    class: "gameDetail"
  }
  , wx = {
    class: "WinningTip__C-body-l4"
  }
  , Cx = ["onClick"]
  , Nx = U({
    __name: "WinningTips",
    setup(c, { expose: s }) {
      const { t: l } = ye()
        , i = ee(() => r.value[0] ? r.value[0].state == 0 : !1)
        , _ = ee(() => r.value[0] || {})
        , p = g(!1)
        , r = g([])
        , d = g({
          red: l("winColor1"),
          green: l("winColor2"),
          "red,violet": l("winColor3"),
          "green,violet": l("winColor4"),
          violet: l("winColor5")
        });
      let v = g();
      const o = () => {
        clearTimeout(v.value),
          r.value.shift(),
          p.value && r.value.length && (v.value = setTimeout(() => {
            o()
          }
            , 1e3 * 3))
      }
        ;
      Ge(() => r.value.length, $ => {
        $ ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
      }
      );
      const h = () => {
        p.value = !p.value,
          p.value ? v.value = setTimeout(() => {
            o()
          }
            , 1e3 * 3) : clearTimeout(v.value)
      }
        , y = $ => {
          r.value.push(...$),
            p.value && (v.value = setTimeout(() => {
              o()
            }
              , 1e3 * 3))
        }
        , T = () => {
          r.value = []
        }
        ;
      return s({
        showMark: y
      }),
        ($, b) => be((n(),
          a("div", {
            class: "WinningTip__C",
            onClick: o
          }, [e("div", {
            class: P(["WinningTip__C-body", {
              isL: i.value
            }])
          }, [i.value ? (n(),
            a("div", {
              key: 0,
              class: P(["WinningTip__C-body-l1", {
                isL: i.value
              }])
            }, t($.$t("k3WarningTip1")), 3)) : (n(),
              a("div", fx, t($.$t("k3WarningTip2")), 1)), e("div", {
                class: P(["WinningTip__C-body-l2", [`type${_.value.number}`]])
              }, [W(t($.$t("winTips3")) + " ", 1), e("div", null, t(d.value[_.value.colour]), 1), e("div", gx, t(_.value.number), 1), e("div", null, t(_.value.number > 4 ? $.$t("big") : $.$t("small")), 1)], 2), e("div", yx, [i.value ? (n(),
                a("div", bx, t($.$t("winTips4")), 1)) : (n(),
                  a(B, {
                    key: 1
                  }, [e("div", $x, t($.$t("winTips5")), 1), e("div", kx, t(u(Re)(Number(_.value.winAmount))), 1)], 64)), e("div", Tx, t($.$t("winTips6")) + t(_.value.typeName) + " " + t(_.value.issueNumber), 1)]), e("div", wx, [e("div", {
                    class: P(["acitveBtn", {
                      active: p.value
                    }]),
                    onClick: _t(h, ["stop"])
                  }, null, 10, Cx), W(" " + t($.$t("autoShutOff3s")), 1)]), e("div", {
                    class: "closeBtn",
                    onClick: T
                  })], 2)], 512)), [[et, r.value.length]])
    }
  });
const za = K(Nx, [["__scopeId", "data-v-537dde41"]])
  , Lx = {
    class: "WinGo__C"
  }
  , Ix = {
    class: "WinGo__C-head-more"
  }
  , Rx = U({
    __name: "index",
    setup(c) {
      const s = {
        GameRecord: UR,
        Trend: Oa,
        MyGameRecord: hn
      }
        , l = g()
        , i = g()
        , _ = g()
        , p = g(!1)
        , r = g("GameRecord")
        , d = $e()
        , v = Kt();
      v.getWinGoData();
      const o = v.getWingo
        , h = g(0)
        , y = g(localStorage.getItem("volumeShow") || "1")
        , T = g(!1)
        , $ = g(null)
        , b = g({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
        , f = g(5)
        , k = g("")
        , w = g(!1)
        , m = g(null)
        , C = ee(() => o[h.value] || {})
        , N = g([0, 0, 0, 0, 0])
        , S = Zt()
        , L = ee(() => S.getIsShowLotteryDragon);
      Pe(() => {
        D()
      }
      ),
        Ut(() => {
          clearInterval($.value),
            Oe.value.forEach(me => {
              clearInterval(me)
            }
            ),
            Be.value && clearTimeout(Be.value)
        }
        ),
        Ge(() => gt().visibility, me => {
          me === 0 ? clearInterval($.value) : (D(),
            j(h.value))
        }
        );
      const x = () => {
        sessionStorage.setItem("clickedGameType", "lottery"),
          d.push({
            path: "/"
          })
      }
        , I = () => {
          y.value == "1" ? y.value = "2" : y.value = "1",
            localStorage.setItem("volumeShow", y.value)
        }
        , O = me => {
          d.push({
            name: me
          })
        }
        , D = () => {
          m.value == null && j(0)
        }
        , j = me => {
          v.getWinGoData(),
            h.value = me,
            m.value = o[me].typeID,
            X(m.value),
            Xe(() => {
              l.value.getData(m.value)
            }
            )
        }
        , X = async me => {
          r.value == "MyGameRecord" && ce(me);
          const [ne, oe] = await Ze(Tl({
            typeId: me
          }));
          b.value.gameNo = oe.issueNumber,
            b.value.currentTime = oe.serviceTime.replace(/-/g, "/"),
            b.value.beginTime = oe.startTime.replace(/-/g, "/"),
            de()
        }
        , ce = async me => {
          const ne = await ae(wl({
            typeId: me
          }));
          ne && (N.value = ne.data.number.split(","))
        }
        , de = () => {
          const me = new Date(b.value.currentTime).getTime()
            , ne = new Date(b.value.beginTime).getTime();
          let oe = (me - ne) / 1e3
            , Y = o[h.value];
          if (oe > Y.intervalM * 60 && (oe = Y.intervalM * 60),
            b.value.passTime = Y.intervalM * 60 - oe,
            b.value.passTime < 0) {
            k.value = "An error occurred, please contact customer service。The game time is " + Y.intervalM + " minutes,start time is " + b.value.beginTime + ",current time is" + b.value.currentTime + "!",
              T.value = !0;
            return
          }
          le()
        }
        , le = () => {
          clearInterval($.value),
            J(!1),
            $.value = setInterval(function () {
              J()
            }, 1e3)
        }
        , J = (me = !0) => {
          if (b.value.passTime <= f.value && (w.value = !1),
            y.value == "1" && (b.value.passTime <= f.value && b.value.passTime > 1 ? Q(1) : b.value.passTime == 1 && Q(2)),
            b.value.passTime > 0) {
            let ne = b.value.passTime;
            b.value.time2 = Math.floor(ne / 60),
              b.value.time3 = Math.floor(ne % 60 / 10),
              b.value.time4 = Math.floor(ne % 10),
              b.value.passTime--
          } else
            clearInterval($.value),
              me && _e()
        }
        , Q = (me = 1) => {
          const ne = document.getElementById(`voice${me}`);
          ne && ne.play()
        }
        , _e = () => {
          X(m.value || 0),
            _.value.getWinsUserAmount(!1),
            l.value.getData(!0)
        }
        , Se = g({})
        , Oe = g([])
        , ve = me => {
          if (_.value.getWinsUserAmount(!1),
            l.value.getData(),
            Se.value[me])
            return;
          Se.value[me] = !0;
          const { time1: ne, time2: oe, time3: Y, time4: Z } = b.value
            , F = (ne * 10 * 60 + oe * 60 + Y * 10 + Z) * 1e3 + Math.floor(Math.random() * 3e3) + 2e3;
          Oe.value[C.value.intervalM] = setTimeout(() => {
            Me(me)
          }
            , F)
        }
        , ke = me => {
          p.value = me
        }
        , Te = me => {
          N.value = me
        }
        , Be = g(null)
        , Me = async me => {
          const [ne, oe] = await Ze(Cl({
            issueNumber: [me]
          }));
          if (oe) {
            const Y = oe.filter(Z => Z.state != 2);
            if (!Y.length)
              return;
            i.value.showMark(Y),
              delete Se.value[me]
          }
        }
        ;
      return (me, ne) => {
        const oe = V("NavBar");
        return n(),
          a("div", Lx, [R(oe, {
            "left-arrow": "",
            onClickLeft: x,
            "background-color": "linear-gradient(90deg, #DE2325 0%, #FF504A 100%)",
            headLogo: !0
          }, {
            right: A(() => [e("div", Ix, [e("div", {
              onClick: ne[0] || (ne[0] = Y => O("CustomerService"))
            }), e("div", {
              class: P({
                disableVoice: y.value == "2"
              }),
              onClick: I
            }, null, 2)])]),
            _: 1
          }), R(xs, {
            ref_key: "WallteRef",
            ref: _
          }, null, 512), R(ys, {
            key: "wingo"
          }), R(Ss, {
            gameList: u(o),
            currentGameIndex: h.value,
            onChangeGame: j
          }, null, 8, ["gameList", "currentGameIndex"]), R(ZI, {
            currentInfo: b.value,
            winNum: N.value,
            gameName: C.value.typeName,
            currentGame: C.value
          }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), R(Aa, {
            currentInfo: b.value,
            currentGame: C.value,
            VoiceType: y.value,
            typeid: m.value,
            onBetting: ve,
            onChangeBettingP: ke,
            "betting-api-fun": u(ha)
          }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), R(Ms, {
            record: r.value,
            onChangeC: ne[1] || (ne[1] = Y => r.value = Y)
          }, null, 8, ["record"]), (n(),
            se(Ht, null, [(n(),
              se(ft(s[r.value]), {
                ref_key: "RecordComponent",
                ref: l,
                typeid: m.value,
                ApiFun: u(un),
                listApi: u(wa),
                EmerdApi: u(pa),
                goPathName: "AllLotteryGames-BettingRecordWin",
                onChangefive: Te
              }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), R(xt, {
                show: T.value,
                onConfirm: ne[2] || (ne[2] = Y => O("/login"))
              }, {
                content: A(() => [e("div", null, t(k.value), 1)]),
                _: 1
              }, 8, ["show"]), R(za, {
                ref_key: "WinningTipsRef",
                ref: i
              }, null, 512), L.value ? (n(),
                se(Rs, {
                  key: 0
                })) : M("", !0), R(Ps)])
      }
    }
  });
const xx = K(Rx, [["__scopeId", "data-v-3bd30231"]])
  , v7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xx
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , Sx = c => (De("data-v-f38ad68c"),
    c = c(),
    Ae(),
    c)
  , Bx = {
    class: "TimeLeft__C"
  }
  , Mx = {
    class: "TimeLeft__C-l1"
  }
  , Px = {
    class: "TimeLeft__C-l1-l"
  }
  , Gx = {
    class: "TimeLeft__C-l1-no"
  }
  , Dx = {
    class: "TimeLeft__C-l2"
  }
  , Ax = {
    class: "TimeLeft__C-time"
  }
  , Ox = Sx(() => e("div", {
    notime: ""
  }, ":", -1))
  , zx = {
    class: "TimeLeft__C-l3"
  }
  , qx = U({
    __name: "TimeLeft",
    props: {
      currentInfo: {
        type: Object,
        default: () => ({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
      },
      settled: {
        type: Object,
        default: () => ({})
      },
      gameName: {
        type: String,
        default: ""
      },
      currentGame: {
        type: Object,
        default: () => ({})
      }
    },
    setup(c) {
      const s = c
        , l = g(!1)
        , i = $e()
        , _ = ee(() => {
          const { blockID: o } = s.settled;
          if (!o)
            return [0, 0, 0, 0, 0];
          let h = o.substring(o.length - 5).toUpperCase();
          return /\d/.test(h) ? [...h] : [...o.substring(o.length - 5, o.length - 10).toUpperCase()]
        }
        )
        , p = ee(() => {
          var o;
          return (o = s.settled) == null ? void 0 : o.number
        }
        )
        , r = () => {
          let o = "https://tronscan.org";
          i.push({
            name: "AllLotteryGames-WinTrxIframe",
            query: {
              url: o
            }
          })
        }
        , d = Kt()
        , v = () => {
          l.value = !0,
            d.getTrxRule(s.currentGame.typeID)
        }
        ;
      return (o, h) => (n(),
        a("div", Bx, [e("div", Mx, [e("div", Px, [e("div", Gx, t(o.$t("winTrxNum")), 1), e("div", {
          class: "TimeLeft__C-l1-tip",
          onClick: v
        }, t(o.$t("winTrxIndicate")), 1)]), e("div", {
          class: "TimeLeft__C-l1-r",
          onClick: r
        }, t(o.$t("winTrxPub")), 1)]), e("div", Dx, [e("div", null, t(s.currentInfo.gameNo), 1), e("div", Ax, [e("span", null, t(o.$t("winTrxTime")), 1), e("div", null, t(c.currentInfo.time1), 1), e("div", null, t(c.currentInfo.time2), 1), Ox, e("div", null, t(c.currentInfo.time3), 1), e("div", null, t(c.currentInfo.time4), 1)])]), e("div", zx, [(n(!0),
          a(B, null, G(_.value, (y, T) => (n(),
            a(B, {
              key: T
            }, [p.value == y ? (n(),
              a("p", {
                key: 0,
                class: P(["num" + y, p.value == y && "prize" + y])
              }, null, 2)) : (n(),
                a("div", {
                  key: 1,
                  class: P(["num" + y, p.value == y && "prize" + y])
                }, null, 2))], 64))), 128))]), R(Bs, {
                  howPlayShow: l.value,
                  gamePresentation: c.currentGame.gamePresentation,
                  onClose: h[0] || (h[0] = y => l.value = !1)
                }, null, 8, ["howPlayShow", "gamePresentation"])]))
    }
  });
const Wx = K(qx, [["__scopeId", "data-v-f38ad68c"]])
  , Ex = {
    class: "GameRecord__C"
  }
  , Fx = {
    class: "GameRecord__C-head"
  }
  , jx = {
    class: "GameRecord__C-body"
  }
  , Vx = {
    class: "Binquire"
  }
  , Hx = {
    class: "numberC"
  }
  , Ux = {
    key: 1,
    class: "GameRecord__C-body-empty"
  }
  , Kx = {
    key: 0,
    class: "GameRecord__C-foot"
  }
  , Xx = {
    class: "GameRecord__C-foot-page"
  }
  , Qx = U({
    __name: "GameRecord",
    props: {
      typeid: {}
    },
    setup(c, { expose: s }) {
      const l = c
        , i = g([])
        , _ = g(4)
        , p = g(10)
        , r = g(1)
        , d = $e()
        , v = () => {
          r.value--,
            h()
        }
        , o = () => {
          r.value++,
            h()
        }
        , h = async (T = !1) => {
          if (l.typeid == null)
            return;
          T && (r.value = 1);
          const [$, b] = await Ze(Ca({
            pageSize: p.value,
            pageNo: r.value,
            typeId: l.typeid
          }));
          if (!b)
            return;
          let f = b == null ? void 0 : b.data.date.serviceTime;
          i.value = b.data.gameslist.map(k => {
            if (k.blockID) {
              var w = k.blockID.length
                , m = k.blockID.substring(w - 4, w);
              k.blockName = "**" + m
            }
            if (k.issueNumber) {
              var C = k.issueNumber.substring(0, 3)
                , N = k.issueNumber.length
                , S = k.issueNumber.substring(N - 4, N);
              k.issue = C + "**" + S
            }
            if (k.blockTime) {
              let L = f.split(" ")
                , x = k.blockTime.split(" ");
              k.day = L[0].substring(8, 10) == x[0].substring(8, 10),
                k.time = x[1]
            }
            return k
          }
          ),
            _.value = b.totalPage
        }
        , y = T => {
          let $ = `https://tronscan.org/#/block/${T}`;
          d.push({
            name: "AllLotteryGames-WinTrxIframe",
            query: {
              url: $
            }
          })
        }
        ;
      return s({
        getData: h
      }),
        wt(() => {
          h()
        }
        ),
        (T, $) => {
          const b = V("van-col")
            , f = V("van-row")
            , k = V("van-icon");
          return n(),
            a("div", Ex, [e("div", Fx, [R(f, null, {
              default: A(() => [R(b, {
                span: "6"
              }, {
                default: A(() => [W(t(T.$t("betSerial")), 1)]),
                _: 1
              }), R(b, {
                span: "4"
              }, {
                default: A(() => [W(t(T.$t("winTrxDesc1")), 1)]),
                _: 1
              }), R(b, {
                span: "5"
              }, {
                default: A(() => [W(t(T.$t("winTrxDesc2")), 1)]),
                _: 1
              }), R(b, {
                span: "4"
              }, {
                default: A(() => [W(t(T.$t("winTrxDesc3")), 1)]),
                _: 1
              }), R(b, {
                span: "5"
              }, {
                default: A(() => [W(t(T.$t("winTrxDesc4")), 1)]),
                _: 1
              })]),
              _: 1
            })]), e("div", jx, [i.value.length ? (n(!0),
              a(B, {
                key: 0
              }, G(i.value, (w, m) => (n(),
                se(f, {
                  key: m
                }, {
                  default: A(() => [R(b, {
                    span: "6"
                  }, {
                    default: A(() => [W(t(w.issue), 1)]),
                    _: 2
                  }, 1024), R(b, {
                    span: "4",
                    onClick: C => y(w.blockNumber)
                  }, {
                    default: A(() => [W(t(w.blockNumber) + " ", 1), be(e("div", Vx, null, 512), [[et, w.day]])]),
                    _: 2
                  }, 1032, ["onClick"]), R(b, {
                    span: "5"
                  }, {
                    default: A(() => [W(t(w.time), 1)]),
                    _: 2
                  }, 1024), R(b, {
                    span: "4"
                  }, {
                    default: A(() => [W(t(w.blockName), 1)]),
                    _: 2
                  }, 1024), R(b, {
                    span: "5"
                  }, {
                    default: A(() => [e("div", Hx, [e("div", {
                      class: P(["number", ["num" + w.number]])
                    }, t(w.number), 3), e("div", {
                      class: P([Number(w.number) > 4 ? "big" : "small"])
                    }, t(Number(w.number) > 4 ? "B" : "S"), 3)])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024))), 128)) : (n(),
                  a("div", Ux, [R(ut)]))]), i.value.length ? (n(),
                    a("div", Kx, [e("div", {
                      class: P(["GameRecord__C-foot-previous", {
                        disabled: r.value <= 1
                      }]),
                      onClick: v
                    }, [R(k, {
                      name: "arrow-left",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2), e("div", Xx, t(r.value) + "/" + t(_.value), 1), e("div", {
                      class: P(["GameRecord__C-foot-next", {
                        disabled: r.value >= _.value
                      }]),
                      onClick: o
                    }, [R(k, {
                      name: "arrow",
                      class: "GameRecord__C-icon",
                      size: "20"
                    })], 2)])) : M("", !0)])
        }
    }
  });
const Yx = K(Qx, [["__scopeId", "data-v-cbcf2a34"]])
  , Zx = {
    class: "WinTrx__C"
  }
  , Jx = {
    class: "WinTrx__C-head-more"
  }
  , eS = U({
    __name: "index",
    setup(c) {
      const s = {
        GameRecord: Yx,
        Trend: Oa,
        MyGameRecord: hn
      }
        , l = g()
        , i = g()
        , _ = g()
        , p = g(!1)
        , r = g("GameRecord")
        , d = $e()
        , v = Kt()
        , o = v.getTrx
        , h = g(0)
        , y = g(localStorage.getItem("volumeShow") || "1")
        , T = g(!1)
        , $ = g(null)
        , b = g()
        , f = g({
          gameNo: "loading",
          currentTime: "",
          beginTime: "",
          passTime: 180,
          time1: 0,
          time2: 0,
          time3: 0,
          time4: 0
        })
        , k = g(10)
        , w = g("")
        , m = g(!1)
        , C = g(null)
        , N = ee(() => o[h.value] || {});
      Pe(() => {
        I()
      }
      ),
        Ut(() => {
          clearInterval($.value),
            Q.value.forEach(ke => {
              clearInterval(ke)
            }
            ),
            Oe.value && clearTimeout(Oe.value)
        }
        ),
        Ge(() => gt().visibility, ke => {
          ke === 0 ? clearInterval($.value) : (I(),
            O(h.value))
        }
        );
      const S = () => {
        sessionStorage.setItem("clickedGameType", "lottery"),
          d.push({
            path: "/"
          })
      }
        , L = () => {
          y.value == "1" ? y.value = "2" : y.value = "1",
            localStorage.setItem("volumeShow", y.value)
        }
        , x = ke => {
          d.push({
            name: ke
          })
        }
        , I = () => {
          C.value == null && O(0)
        }
        , O = ke => {
          v.getTrxData(),
            h.value = ke,
            C.value = o[ke].typeID,
            D(C.value),
            Xe(() => {
              l.value.getData(C.value)
            }
            )
        }
        , D = async ke => {
          const [Te, Be] = await Ze(Nl({
            typeId: ke
          }));
          f.value.gameNo = Be.predraw.issueNumber,
            f.value.currentTime = Be.predraw.serviceTime.replace(/-/g, "/"),
            f.value.beginTime = Be.predraw.startTime.replace(/-/g, "/"),
            b.value = Be.settled,
            j()
        }
        , j = () => {
          if (!o.length)
            return;
          var ke = new Date(f.value.currentTime).getTime()
            , Te = new Date(f.value.beginTime).getTime();
          let Be = (ke - Te) / 1e3
            , Me = o[h.value];
          if (Be > Me.intervalM * 60 && (Be = Me.intervalM * 60),
            f.value.passTime = Me.intervalM * 60 - Be,
            f.value.passTime < 0) {
            w.value = "An error occurred, please contact customer service。The game time is " + Me.intervalM + " minutes,start time is " + f.value.beginTime + ",current time is" + f.value.currentTime + "!",
              T.value = !0;
            return
          }
          X()
        }
        , X = () => {
          clearInterval($.value),
            ce(!1),
            $.value = setInterval(function () {
              ce()
            }, 1e3)
        }
        , ce = (ke = !0) => {
          if (f.value.passTime <= k.value && (m.value = !1),
            y.value == "1" && (f.value.passTime <= k.value && f.value.passTime > 1 ? de(1) : f.value.passTime == 1 && de(2)),
            f.value.passTime > 0) {
            let Te = f.value.passTime;
            f.value.time2 = Math.floor(Te / 60),
              f.value.time3 = Math.floor(Te % 60 / 10),
              f.value.time4 = Math.floor(Te % 10),
              f.value.passTime--
          } else
            clearInterval($.value),
              ke && le()
        }
        , de = (ke = 1) => {
          const Te = document.getElementById(`voice${ke}`);
          Te && Te.play()
        }
        , le = () => {
          D(C.value),
            _.value.getWinsUserAmount(!1),
            l.value.getData(!0)
        }
        , J = g({})
        , Q = g([])
        , _e = ke => {
          if (_.value.getWinsUserAmount(!1),
            l.value.getData(),
            J.value[ke])
            return;
          J.value[ke] = !0;
          const { time1: Te, time2: Be, time3: Me, time4: me } = f.value
            , ne = (Te * 10 * 60 + Be * 60 + Me * 10 + me) * 1e3;
          Q.value[N.value.intervalM] = setTimeout(() => {
            ve(ke)
          }
            , ne)
        }
        , Se = ke => {
          p.value = ke
        }
        , Oe = g(null)
        , ve = async ke => {
          const Te = await ae(Ll({
            issueNumber: [ke]
          }));
          if (Te) {
            const Be = Te.data.filter(Me => Me.state != 2);
            if (!Be.length) {
              Oe.value = setTimeout(() => {
                ve(ke)
              }
                , 2e3);
              return
            }
            i.value.showMark(Be),
              delete J.value[ke]
          }
        }
        ;
      return (ke, Te) => {
        const Be = V("NavBar");
        return n(),
          a("div", Zx, [R(Be, {
            "left-arrow": "",
            onClickLeft: S,
            "background-color": "linear-gradient(90deg, #DE2325 0%, #FF504A 100%)",
            headLogo: !0
          }, {
            right: A(() => [e("div", Jx, [e("div", {
              onClick: Te[0] || (Te[0] = Me => x("CustomerService"))
            }), e("div", {
              class: P({
                disableVoice: y.value == "2"
              }),
              onClick: L
            }, null, 2)])]),
            _: 1
          }), R(xs, {
            ref_key: "WallteRef",
            ref: _
          }, null, 512), R(ys, {
            key: "winx"
          }), R(Ss, {
            gameList: u(o),
            currentGameIndex: h.value,
            onChangeGame: O
          }, null, 8, ["gameList", "currentGameIndex"]), R(Wx, {
            currentInfo: f.value,
            gameName: N.value.typeName,
            currentGame: N.value,
            settled: b.value
          }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), R(Aa, {
            currentInfo: f.value,
            ProhibitBuyTime: k.value,
            currentGame: N.value,
            VoiceType: y.value,
            typeid: C.value,
            onBetting: _e,
            onChangeBettingP: Se,
            "betting-api-fun": u(Il)
          }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), R(Ms, {
            record: r.value,
            onChangeC: Te[1] || (Te[1] = Me => r.value = Me)
          }, null, 8, ["record"]), (n(),
            se(Ht, null, [(n(),
              se(ft(s[r.value]), {
                ref_key: "RecordComponent",
                ref: l,
                typeid: C.value,
                ApiFun: u(rn),
                listApi: u(Ca),
                EmerdApi: u(ga),
                goPathName: "AllLotteryGames-BettingRecordWinTrx"
              }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), R(xt, {
                show: T.value,
                onConfirm: Te[2] || (Te[2] = Me => x("/login"))
              }, {
                content: A(() => [e("div", null, t(w.value), 1)]),
                _: 1
              }, 8, ["show"]), R(za, {
                ref_key: "WinningTipsRef",
                ref: i
              }, null, 512), R(Ps)])
      }
    }
  });
const tS = K(eS, [["__scopeId", "data-v-d339f4b0"]])
  , p7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tS
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , sS = {
    class: "WinTrxIfram__C"
  }
  , nS = ["src"]
  , aS = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = ee(() => String(s.currentRoute.value.query.url))
        , i = () => {
          s.go(-1)
        }
        ;
      return (_, p) => {
        const r = V("NavBar");
        return n(),
          a("div", sS, [R(r, {
            "left-arrow": "",
            onClickLeft: i,
            backgroundColor: "linear-gradient(90deg,#cd0103,#f64841)",
            title: "TRX"
          }), e("iframe", {
            class: "iframe",
            sandbox: "allow-same-origin allow-popups allow-scripts",
            frameborder: "0",
            marginwidth: "0",
            marginheight: "0",
            vspace: "0",
            hspace: "0",
            allowtransparency: "true",
            allowfullscreen: !0,
            ref: "iframe",
            src: l.value
          }, null, 8, nS)])
      }
    }
  });
const oS = K(aS, [["__scopeId", "data-v-7ae895b3"]])
  , m7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: oS
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , lS = {
    class: "Xoso"
  }
  , iS = {
    style: {
      "background-color": "#f7f8ff"
    }
  }
  , cS = {
    key: 1,
    class: "Xoso-page"
  }
  , uS = {
    class: "title"
  }
  , rS = {
    class: "list"
  }
  , dS = ["onClick"]
  , _S = {
    key: 0
  }
  , vS = ["src"]
  , pS = {
    key: 1,
    class: "info"
  }
  , mS = {
    class: "issue"
  }
  , hS = ["src"]
  , fS = {
    class: "time"
  }
  , gS = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e();
      let i = l.currentRoute.value.query.id;
      const _ = ee(() => i == "5" ? "XOSO" : i == "6" ? s("fXosoTitle") : "XOSO")
        , { setLoading: p } = Ls()
        , r = () => {
          l.go(-1)
        }
        , d = ($, b, f, k) => {
          b.day = f,
            b.id = i,
            b.areId = k,
            l.push({
              name: $,
              query: b
            })
        }
        , v = g(null)
        , o = g(0)
        , h = $ => {
          sessionStorage.setItem("xosoList", JSON.stringify(y.value[$.index]))
        }
        , y = g([]);
      return (async () => {
        p(!0);
        let $;
        i == "5" ? $ = await ae(ba()) : i == "6" && ($ = await ae($a())),
          $ && (y.value = $.data,
            sessionStorage.setItem("xosoList", JSON.stringify($.data[0]))),
          p(!1)
      }
      )(),
        ($, b) => {
          const f = V("NavBar")
            , k = V("van-sticky");
          return n(),
            a("div", lS, [R(f, {
              "left-arrow": "",
              onClickLeft: r,
              "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
              title: _.value
            }, null, 8, ["title"]), u(i) == "5" ? (n(),
              se(k, {
                key: 0,
                "offset-top": 46,
                container: v.value,
                class: "bet-container-sticky"
              }, {
                default: A(() => [e("div", iS, [R(fs, {
                  list: y.value,
                  active: o.value,
                  "onUpdate:active": b[0] || (b[0] = w => o.value = w),
                  tabClassName: "tabs",
                  onOnClickTab: h,
                  activeClassName: "tab_active",
                  ref: "tabRefs",
                  tabItemClassName: "funtab_item"
                }, {
                  default: A(({ item: w, index: m }) => [e("div", {
                    class: P(["tab_item", {
                      tab_active: m === o.value
                    }])
                  }, [e("span", null, t($.$t(w.week)), 1), e("p", null, t(w.day), 1)], 2)]),
                  _: 1
                }, 8, ["list", "active"])])]),
                _: 1
              }, 8, ["container"])) : M("", !0), y.value[o.value] ? (n(),
                a("div", cS, [(n(!0),
                  a(B, null, G(y.value[o.value].areInfos, (w, m) => (n(),
                    a("div", {
                      class: "Xoso-page-box",
                      key: m
                    }, [e("div", uS, t($.$t("code" + w.areNameCode)), 1), e("div", rS, [(n(!0),
                      a(B, null, G(w.areIssueNos, (C, N) => (n(),
                        a("div", {
                          class: "item",
                          key: N,
                          onClick: S => d("AllLotteryGames-NewVietnam", C, y.value[o.value].day, w.areId)
                        }, [C.status == 1 || C.status == 2 || C.status == 3 ? (n(),
                          a("h4", _S, [W(t($.$t("code" + C.nameCode)) + " ", 1), e("img", {
                            class: "img",
                            src: u(re)("home/AllLotteryGames/NewVietnam", "xosoCity"),
                            alt: ""
                          }, null, 8, vS)])) : M("", !0), C.status == 1 || C.status == 2 || C.status == 3 ? (n(),
                            a("div", pS, [e("div", mS, [e("img", {
                              class: "img",
                              src: u(re)("home/AllLotteryGames/NewVietnam", "ticketstar"),
                              alt: ""
                            }, null, 8, hS), W(t(C.issueNo), 1)]), e("p", null, t($.$t("xosoTxt72")), 1), e("div", fS, [(n(!0),
                              a(B, null, G(y.value[o.value].day.split("-"), (S, L) => (n(),
                                a("div", {
                                  key: L
                                }, t(S), 1))), 128))])])) : M("", !0)], 8, dS))), 128))])]))), 128))])) : M("", !0)])
        }
    }
  });
const yS = K(gS, [["__scopeId", "data-v-c55e9a5b"]])
  , h7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yS
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , bS = {
    class: "TeamReport__C"
  }
  , $S = {
    class: "TeamReport__C-head"
  }
  , kS = {
    class: "TeamReport__C-head-fixed"
  }
  , TS = {
    class: "TeamReport__C-head-line1"
  }
  , wS = {
    key: 0,
    class: "default"
  }
  , CS = {
    key: 1,
    class: "default"
  }
  , NS = {
    class: "TeamReport__C-head-line2"
  }
  , LS = {
    key: 0,
    class: "default"
  }
  , IS = {
    key: 1,
    class: "default"
  }
  , RS = {
    class: "TeamReport__C-list"
  }
  , xS = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = $e()
        , i = ea()
        , _ = () => {
          l.go(-1)
        }
        , p = g([])
        , r = g([])
        , d = {
          text: "nameCode",
          value: "value"
        }
        , v = g()
        , o = g(!1)
        , h = g(!1)
        , y = je({
          bettingParentType: "",
          areId: "",
          startDate: "",
          endDate: ""
        })
        , T = g()
        , $ = g()
        , b = ({ selectedOptions: N }) => {
          y.bettingParentType = Number(N[0].value),
            $.value = N[0].nameCode,
            T.value.getData(),
            o.value = !1
        }
        , f = g()
        , k = ({ selectedOptions: N }) => {
          y.areId = Number(N[0].value),
            f.value = N[0].nameCode,
            T.value.getData(),
            h.value = !1
        }
        ;
      async function w() {
        let N = v.value.endDateValue !== "" ? `${v.value.endDateValue} 23:59:59` : "";
        y.startDate = `${at(v.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`,
          y.endDate = `${at(N).format("YYYY-MM-DD")} 23:59:59`,
          T.value.getData()
      }
      const m = async () => {
        const N = Number(i.query.areId) | 0
          , S = await ae(Rl({
            areId: N
          }));
        r.value = C(S.data.categorys),
          r.value.unshift({
            value: "",
            nameCode: s("all")
          }),
          p.value = C(S.data.ares),
          p.value.unshift({
            value: "",
            nameCode: s("all")
          })
      }
        , C = N => N.map(L => {
          let x = {
            value: "",
            nameCode: ""
          };
          return x.value = L.value,
            x.nameCode = s("code" + L.nameCode),
            x
        }
        );
      return m(),
        (N, S) => {
          const L = V("NavBar")
            , x = V("van-icon")
            , I = V("van-picker")
            , O = V("van-popup");
          return n(),
            a("div", bS, [R(L, {
              "left-arrow": "",
              onClickLeft: _,
              "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
              title: N.$t("xosoTxt73")
            }, null, 8, ["title"]), e("div", $S, [e("div", kS, [e("div", TS, [e("div", {
              onClick: S[0] || (S[0] = D => h.value = !0)
            }, [f.value ? (n(),
              a("span", wS, t(f.value), 1)) : (n(),
                a("span", CS, t(u(s)("all")), 1)), R(x, {
                  name: "arrow-down"
                })])]), e("div", NS, [e("div", {
                  onClick: S[1] || (S[1] = D => o.value = !0)
                }, [$.value ? (n(),
                  a("span", LS, t($.value), 1)) : (n(),
                    a("span", IS, t(u(s)("all")), 1)), R(x, {
                      name: "arrow-down"
                    })]), e("div", null, [R(Qu, {
                      ref_key: "calendar",
                      ref: v,
                      onConfirm: w
                    }, null, 512)])])])]), e("div", RS, [(n(),
                      se(Ht, null, [R(gn, {
                        ref_key: "RecordComponent",
                        ref: T,
                        parmas: y,
                        ApiFun: u(ka),
                        hasHead: !1,
                        gVSs: "1"
                      }, null, 8, ["parmas", "ApiFun"])], 1024))]), R(O, {
                        show: o.value,
                        "onUpdate:show": S[3] || (S[3] = D => o.value = D),
                        round: "",
                        position: "bottom"
                      }, {
                        default: A(() => [R(I, {
                          "columns-field-names": d,
                          columns: r.value,
                          onCancel: S[2] || (S[2] = D => o.value = !1),
                          onConfirm: b
                        }, null, 8, ["columns"])]),
                        _: 1
                      }, 8, ["show"]), R(O, {
                        show: h.value,
                        "onUpdate:show": S[5] || (S[5] = D => h.value = D),
                        round: "",
                        position: "bottom"
                      }, {
                        default: A(() => [R(I, {
                          "columns-field-names": d,
                          columns: p.value,
                          onCancel: S[4] || (S[4] = D => h.value = !1),
                          onConfirm: k
                        }, null, 8, ["columns"])]),
                        _: 1
                      }, 8, ["show"])])
        }
    }
  });
const SS = K(xS, [["__scopeId", "data-v-9ee753e7"]])
  , f7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: SS
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , BS = {
    class: "TeamReport__C"
  }
  , MS = {
    style: {
      "background-color": "#f7f8ff"
    }
  }
  , PS = {
    class: "TeamReport__C-list"
  }
  , GS = U({
    __name: "index",
    setup(c) {
      const s = $e()
        , l = () => {
          s.go(-1)
        }
        , i = g(0)
        , _ = g([])
        , p = g();
      let r = s.currentRoute.value.query.areId
        , d = s.currentRoute.value.query.typeId;
      const v = je({
        bettingParentType: "",
        startDate: "",
        endDate: "",
        areId: "",
        typeId: ""
      })
        , o = y => {
          v.areId = y.item.areId,
            v.typeId = y.item.typeId,
            p.value.getData()
        }
        ;
      async function h() {
        let y = JSON.parse(sessionStorage.getItem("xosoList") || "")
          , T = [];
        for (let $ = 0; $ < y.areInfos.length; $++)
          for (let b = 0; b < y.areInfos[$].areIssueNos.length; b++)
            y.areInfos[$].areIssueNos[b].type == 2 && T.push({
              areId: y.areInfos[$].areId,
              typeId: y.areInfos[$].areIssueNos[b].code,
              nameCode: y.areInfos[$].areIssueNos[b].nameCode
            });
        _.value = T,
          _.value.length > 0 && (i.value = _.value.findIndex($ => $.areId == r && $.typeId == d))
      }
      return h(),
        (y, T) => {
          const $ = V("NavBar")
            , b = V("van-sticky");
          return n(),
            a("div", BS, [R($, {
              "left-arrow": "",
              onClickLeft: l,
              "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
              title: y.$t("fXosoTitle")
            }, null, 8, ["title"]), R(b, {
              "offset-top": 46,
              class: "bet-container-sticky"
            }, {
              default: A(() => [e("div", MS, [R(fs, {
                list: _.value,
                active: i.value,
                "onUpdate:active": T[0] || (T[0] = f => i.value = f),
                tabClassName: "tabs",
                activeClassName: "tab_active",
                ref: "tabRefs",
                tabItemClassName: "funtab_item",
                onOnClickTab: o
              }, {
                default: A(({ item: f, index: k }) => [e("div", {
                  class: P(["tab_item", {
                    tab_active: k === i.value
                  }])
                }, [e("p", null, t(y.$t(`code${f.nameCode}`)), 1)], 2)]),
                _: 1
              }, 8, ["list", "active"])])]),
              _: 1
            }), e("div", PS, [(n(),
              se(Ht, null, [R(gn, {
                ref_key: "RecordComponent",
                ref: p,
                parmas: v,
                ApiFun: u(Ta),
                hasHead: !1,
                gVSs: "2"
              }, null, 8, ["parmas", "ApiFun"])], 1024))])])
        }
    }
  });
const DS = K(GS, [["__scopeId", "data-v-7ab1268a"]])
  , g7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: DS
  }, Symbol.toStringTag, {
    value: "Module"
  }))
  , AS = {
    class: "messageDetail__container content"
  }
  , OS = {
    class: "messageDetail__container-wrapper"
  }
  , zS = {
    class: "messageDetail__container-title"
  }
  , qS = {
    class: "messageDetail__container-content"
  }
  , WS = U({
    __name: "index",
    setup(c) {
      const { t: s } = ye()
        , l = xl()
        , i = $e()
        , _ = g({})
        , p = Et(() => Ft(() => import("./messageIconNoDot-79942892.js"), ["assets/js/messageIconNoDot-79942892.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"]))
        , r = Et(() => Ft(() => import("./messageGarbage-605506c5.js"), ["assets/js/messageGarbage-605506c5.js", "assets/js/page-activity-f933121a.js", "assets/js/modules-37155226.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-9a97a253.js", "assets/js/en-0c6850ab.js", "assets/js/rus-76b9a6ea.js", "assets/js/vi-d1006bf3.js", "assets/js/id-c40b4de7.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-f64fcbc9.js", "assets/js/my-04066c3e.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-b8834b2c.js", "assets/js/pak-748a9e8f.js", "assets/css/page-activity-7f0be3d3.css"]));
      function d() {
        i.back()
      }
      function v() {
        Yn({
          title: s("warning"),
          message: s("warningTxt1")
        }).then(() => {
          tn({
            messageID: _.value.messageID,
            state: 2
          }),
            i.back()
        }
        )
      }
      return Pe(async () => {
        _.value = l.getMessagesDetail,
          _.value.state !== 1 && (await tn({
            messageID: _.value.messageID,
            state: 1
          }),
            l.setMessageDetail({
              ..._.value,
              state: 1
            }))
      }
      ),
        (o, h) => {
          const y = V("NavBar");
          return n(),
            a("div", AS, [R(y, {
              "left-arrow": "",
              onClickLeft: d,
              title: u(s)("notificationDetails")
            }, null, 8, ["title"]), e("div", OS, [e("div", zS, [e("div", null, [e("div", null, [(n(),
              se(ft(u(p)))), e("span", null, t(_.value.title), 1)]), e("span", null, t(_.value.addTime), 1)]), (n(),
                se(ft(u(r)), {
                  onClick: v
                }))]), e("div", qS, t(_.value.messages), 1)])])
        }
    }
  });
const ES = K(WS, [["__scopeId", "data-v-4c381eda"]])
  , y7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ES
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export { d7 as A, _7 as B, v7 as C, rc as D, p7 as E, Mu as F, m7 as G, h7 as H, f7 as I, g7 as J, Pu as K, y7 as L, fs as _, Vc as a, Bu as b, Qu as c, HS as d, US as e, KS as f, XS as g, QS as h, VS as i, YS as j, ZS as k, JS as l, e7 as m, t7 as n, s7 as o, n7 as p, a7 as q, o7 as r, l7 as s, i7 as t, Jt as u, jc as v, Gu as w, c7 as x, u7 as y, r7 as z };
