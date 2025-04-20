import {
    $ as Fr,
    B as pe,
    D as sr,
    F as dr,
    G as cr,
    Ga as Se,
    K as Ae,
    L as mr,
    La as ke,
    N as Je,
    Na as Nr,
    Pa as J,
    Ra as Ke,
    S as Ne,
    Ta as Ve,
    Ua as te,
    Va as Br,
    W as we,
    X as Dr,
    ba as Me,
    d as I,
    da as n,
    f as Fe,
    ga as E,
    h as le,
    ia as de,
    j as Mr,
    k as Pe,
    ka as Ce,
    l as be,
    la as k,
    m as he,
    n as xe,
    na as B,
    p as se,
    pa as ce,
    q as Z,
    r as Te,
    s as Ie,
    t as jr,
    u as e,
    v as R,
    wa as ue,
    y as U,
    z as s,
    za as ge
} from "./chunk-RTVEDZCG.mjs";
import {
    c as j
} from "./chunk-RIUMFBNJ.mjs";
var Xe, $e, Be, er, rr, fr, hr, pr, ur, Wr;
(fr = Xe || (Xe = {})).In = "in", fr.Out = "out", fr["In & Out"] = "inOut", (hr = $e || ($e = {})).First = "first", hr.Center = "center", hr.Last = "last", (pr = Be || (Be = {})).Left = "left", pr.Center = "center", pr.Right = "right", (ur = er || (er = {})).Top = "top", ur.Center = "center", ur.Bottom = "bottom", (Wr = rr || (rr = {})).Hidden = "hidden", Wr.Visible = "visible";

function gr(r) {
    var t, i, l, f, g, y, a;
    let x = Me.current() === Me.canvas,
        u = Z(null),
        v = Z(),
        b = Z(),
        h = Z([]),
        p = dr(0, r.transition),
        m = cr({
            target: !((t = r.override) === null || t === void 0) && t.target ? (i = r.override) === null || i === void 0 ? void 0 : i.target() : u,
            offset: [(y = (l = r.override) === null || l === void 0 ? void 0 : l.start) !== null && y !== void 0 ? y : "start end", (a = (f = r.override) === null || f === void 0 ? void 0 : f.end) !== null && a !== void 0 ? a : "end start"],
            layoutEffect: (g = r.override) === null || g === void 0 ? void 0 : g.layoutEffect
        });
    x || (m.scrollYProgress.on("change", V => {
        p.set(V)
    }), p.on("change", V => {
        v.current && b.current && (v.current.time = b.current(V))
    })), he(() => {
        me.createClasses();
        let V = [],
            M = me.getDuration(h.current.length, r.staggerOptions.amount, r.staggerOptions.from, r.transition.delay, r.transition.extend),
            F = {
                duration: 1,
                delay: Je(r.staggerOptions.amount, {
                    from: r.staggerOptions.from,
                    startDelay: r.transition.delay
                })
            },
            C = r.direction !== "out" ? me.getKeyframe(r.effectInOptions, !1) : void 0,
            c = r.direction !== "in" ? me.getKeyframe(r.effectOutOptions, !0) : void 0;
        if (!x) {
            var L, O;
            switch (r.direction) {
                case "in":
                    v.current = Ae([
                        [h.current, C, F]
                    ]), V = [0, .6];
                    break;
                case "out":
                    v.current = Ae([
                        [h.current, c, F]
                    ]), V = [.4, 1];
                    break;
                case "inOut":
                    v.current = Ae([
                        [h.current, C, F],
                        [h.current, c, {
                            duration: 1,
                            delay: Je(r.staggerOptions.amount, {
                                from: r.staggerOptions.from
                            }),
                            at: M + r.transition.delay
                        }]
                    ]), V = [0, 1], M *= 2
            }
            v.current.pause(), b.current = sr(!((L = r.override) === null || L === void 0) && L.start || !((O = r.override) === null || O === void 0) && O.end ? [0, 1] : V, [0, M])
        }
        return () => {
            var W;
            (W = v.current) === null || W === void 0 || W.stop()
        }
    }, []);
    let T = {
            width: "100%",
            fontSize: r.font.fontSize,
            fontFamily: r.font.font,
            fontWeight: r.font.fontWeight,
            letterSpacing: r.font.letterSpacing,
            lineHeight: r.font.lineHeightType ? r.font.lineHeight : `${r.font.lineHeightPixels}px`,
            textAlign: r.font.textAlign,
            color: r.color,
            perspective: r.styles.perspective
        },
        D = me.registerClass("c", {
            display: "inline-block",
            "transform-style": "preserve-3d"
        }),
        A = me.registerClass("o", {
            display: "inline-block",
            overflow: "hidden",
            "transform-style": "preserve-3d"
        }),
        d = me.registerClass("i" + r.styleItems.transformHorizontal.substring(0, 1) + r.styleItems.transformVertical.substring(0, 1), {
            display: "inline-block",
            "white-space": "pre-wrap",
            "transform-origin": r.styleItems.transformHorizontal + " " + r.styleItems.transformVertical
        });
    return Fe("div", {
        ref: u,
        style: T
    }, me.splitItems(r.text, h, r.perWord, D, d, A, r.styleItems.overflow === "hidden"))
}
gr.displayName = "Animated Text";
var Ye = {
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0
    },
    me = {
        splitItems: (r, t, i, l, f, g, y) => {
            let a = 0,
                x = b => {
                    t.current[a] = b, a += 1
                },
                u = (b, h) => y ? Fe("span", {
                    key: h,
                    className: g
                }, Fe("span", {
                    ref: x,
                    className: f
                }, b)) : Fe("span", {
                    key: h,
                    ref: x,
                    className: f
                }, b),
                v = r.split(" ").map((b, h, p) => h < p.length - 1 ? b + " " : b);
            return i ? v.map((b, h) => u(b, h)) : v.map((b, h) => Fe("span", {
                key: h,
                className: l
            }, b.split("").map((p, m) => u(p, m))))
        },
        getKeyframeProperty: (r, t, i, l) => {
            r[t] !== Ye[t] && (i[t] = l ? [Ye[t], r[t]] : [r[t], Ye[t]])
        },
        getKeyframe: (r, t) => {
            let i = {};
            for (let l in Ye) me.getKeyframeProperty(r, l, i, t);
            return i
        },
        getDuration: (r, t, i, l, f) => l + f + 1 + (i === "center" ? Math.ceil(r / 2) - 1 : r - 1) * t,
        classesId: "_animatedtext_",
        rules: [],
        registerClass: (r, t) => {
            let i = me.classesId + "_" + r;
            return me.rules.push([i, t]), i
        },
        createClasses: () => {
            let r = document.getElementById(me.classesId);
            if (r) return;
            r = document.createElement("style"), document.head.appendChild(r), r.id = me.classesId;
            let t = r.sheet;
            for (let i of me.rules) t.insertRule(`.${i[0]}{${Object.keys(i[1]).map(l=>`${l}:${i[1][l]}`).join("; ")}}`, t.cssRules.length)
        },
        findTarget: r => {
            var t;
            return (t = document.querySelector(`[name="${r}"]`)) !== null && t !== void 0 ? t : document.querySelector(`[data-framer-name="${r}"]`)
        }
    },
    Re = {
        opacity: 1,
        x: 0,
        y: 20,
        z: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0
    },
    G = {
        text: "Animated Text",
        perWord: !1,
        direction: "in",
        effectInOptions: Re,
        effectOutOptions: Re,
        staggerOptions: {
            amount: .1,
            from: "first"
        },
        color: "#666",
        font: {
            font: "Inter",
            fontSize: 32,
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: 1.2,
            lineHeightPixels: 100,
            lineHeightType: !0
        },
        styles: {
            perspective: 400
        },
        styleItems: {
            transformHorizontal: "center",
            transformVertical: "center",
            overflow: "visible"
        },
        transition: {
            stiffness: 500,
            damping: 60,
            mass: 1,
            delay: 0,
            extend: 0
        }
    },
    Ar = {
        opacity: {
            title: "Opacity",
            type: n.Number,
            min: 0,
            max: 1,
            step: .01,
            defaultValue: Re.opacity
        },
        x: {
            title: "X",
            type: n.Number,
            min: -500,
            max: 500,
            unit: "px",
            step: 1,
            displayStepper: !0,
            defaultValue: Re.x
        },
        y: {
            title: "Y",
            type: n.Number,
            min: -500,
            max: 500,
            unit: "px",
            step: 1,
            displayStepper: !0,
            defaultValue: Re.y
        },
        z: {
            title: "Z",
            type: n.Number,
            min: -400,
            max: 400,
            unit: "px",
            step: 1,
            displayStepper: !0,
            defaultValue: Re.z
        },
        scale: {
            title: "Scale",
            type: n.Number,
            min: 0,
            max: 5,
            step: .01,
            displayStepper: !0,
            defaultValue: Re.scale
        },
        rotate: {
            title: "Rotate",
            type: n.Number,
            min: -360,
            max: 360,
            unit: "\xB0",
            step: 1,
            defaultValue: Re.rotate
        },
        rotateX: {
            title: "Rotate X",
            type: n.Number,
            min: -360,
            max: 360,
            unit: "\xB0",
            step: 1,
            defaultValue: Re.rotateX
        },
        rotateY: {
            title: "Rotate Y",
            type: n.Number,
            min: -360,
            max: 360,
            unit: "\xB0",
            step: 1,
            defaultValue: Re.rotateY
        }
    };
E(gr, {
    text: {
        title: "Text",
        type: n.String,
        defaultValue: G.text,
        displayTextArea: !0
    },
    perWord: {
        title: "Per Word",
        type: n.Boolean,
        defaultValue: G.perWord
    },
    direction: {
        title: "Direction",
        type: n.Enum,
        options: Object.values(Xe),
        optionTitles: Object.keys(Xe),
        defaultValue: G.direction
    },
    effectInOptions: {
        title: "From",
        type: n.Object,
        controls: Ar,
        hidden: r => r.direction === "out"
    },
    effectOutOptions: {
        title: "To",
        type: n.Object,
        controls: Ar,
        hidden: r => r.direction === "in"
    },
    staggerOptions: {
        title: "Stagger",
        type: n.Object,
        controls: {
            amount: {
                title: "Amount",
                type: n.Number,
                step: .01,
                defaultValue: G.staggerOptions.amount
            },
            from: {
                title: "From",
                type: n.Enum,
                options: Object.values($e),
                optionTitles: Object.keys($e),
                defaultValue: G.staggerOptions.from
            }
        }
    },
    color: {
        type: n.Color,
        defaultValue: G.color
    },
    font: {
        type: n.Object,
        controls: {
            font: {
                title: "Font",
                type: n.String,
                placeholder: "Inter",
                defaultValue: G.font.font
            },
            fontSize: {
                title: "Size",
                type: n.Number,
                min: 0,
                max: 500,
                step: .5,
                defaultValue: G.font.fontSize
            },
            fontWeight: {
                title: "Weight",
                type: n.Enum,
                options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                defaultValue: G.font.fontWeight
            },
            textAlign: {
                type: n.Enum,
                displaySegmentedControl: !0,
                title: "Align",
                options: Object.values(Be),
                optionTitles: Object.keys(Be),
                defaultValue: G.font.textAlign
            },
            letterSpacing: {
                title: "Letter",
                type: n.Number,
                step: .1,
                displayStepper: !0,
                defaultValue: G.font.letterSpacing
            },
            lineHeight: {
                type: n.Number,
                title: "Line",
                min: -5,
                max: 5,
                step: .1,
                displayStepper: !0,
                defaultValue: G.font.lineHeight,
                hidden: r => !r.lineHeightType
            },
            lineHeightPixels: {
                type: n.Number,
                title: "Line",
                min: -500,
                max: 500,
                step: 1,
                displayStepper: !0,
                defaultValue: G.font.lineHeightPixels,
                hidden: r => r.lineHeightType
            },
            lineHeightType: {
                type: n.Boolean,
                title: " ",
                enabledTitle: "em",
                disabledTitle: "px",
                defaultValue: G.font.lineHeightType
            }
        }
    },
    styles: {
        title: "Style",
        type: n.Object,
        controls: {
            perspective: {
                type: n.Number,
                min: 0,
                max: 1200,
                step: 1,
                defaultValue: G.styles.perspective
            }
        }
    },
    styleItems: {
        type: n.Object,
        title: "Style Item",
        controls: {
            transformHorizontal: {
                type: n.Enum,
                title: "Origin",
                displaySegmentedControl: !0,
                options: Object.values(Be),
                optionTitles: Object.keys(Be),
                defaultValue: G.styleItems.transformHorizontal
            },
            transformVertical: {
                type: n.Enum,
                title: " ",
                displaySegmentedControl: !0,
                options: Object.values(er),
                optionTitles: Object.keys(er),
                defaultValue: G.styleItems.transformVertical
            },
            overflow: {
                type: n.Enum,
                optionTitles: Object.keys(rr),
                options: Object.values(rr),
                defaultValue: G.styleItems.overflow
            }
        }
    },
    transition: {
        title: "Scroll Transition",
        type: n.Object,
        controls: {
            stiffness: {
                title: "Stiffness",
                type: n.Number,
                min: 1,
                max: 1e3,
                step: 1,
                defaultValue: G.transition.stiffness
            },
            damping: {
                title: "Damping",
                type: n.Number,
                min: 0,
                max: 100,
                step: 1,
                defaultValue: G.transition.damping
            },
            mass: {
                title: "Mass",
                type: n.Number,
                min: 0,
                max: 10,
                step: .1,
                defaultValue: G.transition.mass
            },
            delay: {
                title: "Delay",
                type: n.Number,
                displayStepper: !0,
                min: 0,
                max: 10,
                step: .1,
                defaultValue: G.transition.delay
            },
            extend: {
                title: "Extend",
                type: n.Number,
                displayStepper: !0,
                min: 0,
                max: 10,
                step: .1,
                defaultValue: G.transition.extend
            }
        }
    }
});
var xt = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var wt = {
        ...xt,
        borderRadius: 6,
        background: "rgba(149, 149, 149, 0.1)",
        border: "1px dashed rgba(149, 149, 149, 0.15)",
        color: "#a5a5a5",
        flexDirection: "column"
    },
    zr = le((r, t) => e("div", {
        style: wt,
        ref: t
    }));
var yr, Or, Ct = r => (yr || (yr = new Map([
    ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"
    }))],
    ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
        opacity: "0.2"
    }), r.createElement("path", {
        d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"
    }))],
    ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"
    }))],
    ["light", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"
    }))],
    ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"
    }))],
    ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"
    }))]
]), Or = r.forwardRef((t, i) => r.createElement("g", {
    ref: i,
    ...t
}, yr.get(t.weight)))), Or);
var Zr = Ct;
var Gr = {
        onClick: {
            type: n.EventHandler
        },
        onMouseDown: {
            type: n.EventHandler
        },
        onMouseUp: {
            type: n.EventHandler
        },
        onMouseEnter: {
            type: n.EventHandler
        },
        onMouseLeave: {
            type: n.EventHandler
        }
    },
    St = (r, t) => r.find(i => i.toLowerCase().includes(t));

function Er(r, t, i = "", l, f) {
    let g = se(() => {
        if (i == null || i?.length === 0) return null;
        let a = i.toLowerCase().replace(/-|\s/g, "");
        var x;
        return (x = f[a]) !== null && x !== void 0 ? x : St(r, a)
    }, [l, i]);
    return t ? l : g
}
var vr = ["Acorn", "AddressBook", "AddressBookTabs", "AirTrafficControl", "Airplane", "AirplaneInFlight", "AirplaneLanding", "AirplaneTakeoff", "AirplaneTaxiing", "AirplaneTilt", "Airplay", "Alarm", "Alien", "AlignBottom", "AlignBottomSimple", "AlignCenterVertical", "AlignLeft", "AlignLeftSimple", "AlignRight", "AlignRightSimple", "AlignTop", "AlignTopSimple", "AmazonLogo", "Ambulance", "Anchor", "AnchorSimple", "AndroidLogo", "Angle", "AngularLogo", "Aperture", "AppStoreLogo", "AppWindow", "AppleLogo", "ApplePodcastsLogo", "ApproximateEquals", "Archive", "ArchiveBox", "ArchiveTray", "Armchair", "ArrowArcLeft", "ArrowArcRight", "ArrowBendDownLeft", "ArrowBendDownRight", "ArrowBendLeftDown", "ArrowBendLeftUp", "ArrowBendRightDown", "ArrowBendRightUp", "ArrowBendUpLeft", "ArrowBendUpRight", "ArrowCircleDown", "ArrowCircleDownLeft", "ArrowCircleDownRight", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowCircleUpLeft", "ArrowCircleUpRight", "ArrowClockwise", "ArrowDown", "ArrowDownLeft", "ArrowDownRight", "ArrowElbowDownLeft", "ArrowElbowDownRight", "ArrowElbowLeft", "ArrowElbowLeftDown", "ArrowElbowLeftUp", "ArrowElbowRight", "ArrowElbowRightDown", "ArrowElbowRightUp", "ArrowElbowUpLeft", "ArrowElbowUpRight", "ArrowFatDown", "ArrowFatLeft", "ArrowFatLineDown", "ArrowFatLineLeft", "ArrowFatLineRight", "ArrowFatLineUp", "ArrowFatLinesDown", "ArrowFatLinesLeft", "ArrowFatLinesRight", "ArrowFatLinesUp", "ArrowFatRight", "ArrowFatUp", "ArrowLeft", "ArrowLineDown", "ArrowLineDownLeft", "ArrowLineDownRight", "ArrowLineLeft", "ArrowLineRight", "ArrowLineUp", "ArrowLineUpLeft", "ArrowLineUpRight", "ArrowRight", "ArrowSquareDown", "ArrowSquareDownLeft", "ArrowSquareDownRight", "ArrowSquareIn", "ArrowSquareLeft", "ArrowSquareOut", "ArrowSquareRight", "ArrowSquareUp", "ArrowSquareUpLeft", "ArrowSquareUpRight", "ArrowUDownLeft", "ArrowUDownRight", "ArrowULeftDown", "ArrowULeftUp", "ArrowURightDown", "ArrowURightUp", "ArrowUUpLeft", "ArrowUUpRight", "ArrowUp", "ArrowUpLeft", "ArrowUpRight", "ArrowsClockwise", "ArrowsDownUp", "ArrowsHorizontal", "ArrowsIn", "ArrowsInCardinal", "ArrowsInLineVertical", "ArrowsInSimple", "ArrowsLeftRight", "ArrowsMerge", "ArrowsOut", "ArrowsOutCardinal", "ArrowsOutSimple", "ArrowsSplit", "ArrowsVertical", "Article", "ArticleMedium", "ArticleNyTimes", "Asclepius", "Asterisk", "AsteriskSimple", "At", "Atom", "Avocado", "Axe", "Baby", "BabyCarriage", "Backpack", "Backspace", "Bag", "BagSimple", "Balloon", "Bandaids", "Bank", "Barbell", "Barcode", "Barn", "Barricade", "Baseball", "BaseballCap", "BaseballHelmet", "Basket", "Basketball", "Bathtub", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryHigh", "BatteryLow", "BatteryMedium", "BatteryPlus", "BatteryPlusVertical", "BatteryVerticalEmpty", "BatteryVerticalFull", "BatteryVerticalHigh", "BatteryVerticalLow", "BatteryWarning", "BeachBall", "Beanie", "Bed", "BeerBottle", "BeerStein", "BehanceLogo", "Bell", "BellRinging", "BellSimple", "BellSimpleRinging", "BellSimpleSlash", "BellSimpleZ", "BellSlash", "BellZ", "Belt", "BezierCurve", "Bicycle", "Binary", "Binoculars", "Biohazard", "Bird", "Blueprint", "Bluetooth", "BluetoothConnected", "BluetoothSlash", "BluetoothX", "Boat", "Bomb", "Bone", "Book", "BookBookmark", "BookOpen", "BookOpenText", "BookOpenUser", "BookUser", "Bookmark", "BookmarkSimple", "Bookmarks", "BookmarksSimple", "Books", "Boot", "Boules", "BoundingBox", "BowlFood", "BowlSteam", "BowlingBall", "BoxArrowDown", "BoxArrowUp", "BoxingGlove", "BracketsAngle", "BracketsCurly", "BracketsRound", "BracketsSquare", "Brain", "Brandy", "Bread", "Bridge", "Briefcase", "BriefcaseMetal", "Broadcast", "Broom", "Browser", "Browsers", "Bug", "BugBeetle", "BugDroid", "Building", "BuildingApartment", "BuildingOffice", "Buildings", "Bulldozer", "Bus", "Butterfly", "CableCar", "Cactus", "Cake", "Calculator", "Calendar", "CalendarBlank", "CalendarCheck", "CalendarDot", "CalendarDots", "CalendarHeart", "CalendarMinus", "CalendarPlus", "CalendarSlash", "CalendarStar", "CalendarX", "CallBell", "Camera", "CameraPlus", "CameraRotate", "CameraSlash", "Campfire", "Car", "CarBattery", "CarProfile", "CarSimple", "Cardholder", "Cards", "CardsThree", "CaretCircleDoubleUp", "CaretCircleDown", "CaretCircleLeft", "CaretCircleRight", "CaretCircleUp", "CaretCircleUpDown", "CaretDoubleDown", "CaretDoubleLeft", "CaretDoubleRight", "CaretDoubleUp", "CaretDown", "CaretLeft", "CaretLineDown", "CaretLineLeft", "CaretLineRight", "CaretLineUp", "CaretRight", "CaretUp", "CaretUpDown", "Carrot", "CashRegister", "CassetteTape", "CastleTurret", "Cat", "CellSignalFull", "CellSignalHigh", "CellSignalLow", "CellSignalMedium", "CellSignalNone", "CellSignalSlash", "CellSignalX", "CellTower", "Certificate", "Chair", "Chalkboard", "ChalkboardSimple", "ChalkboardTeacher", "Champagne", "ChargingStation", "ChartBar", "ChartBarHorizontal", "ChartDonut", "ChartLine", "ChartLineDown", "ChartLineUp", "ChartPie", "ChartPieSlice", "ChartPolar", "ChartScatter", "Chat", "ChatCentered", "ChatCenteredDots", "ChatCenteredSlash", "ChatCenteredText", "ChatCircle", "ChatCircleDots", "ChatCircleSlash", "ChatCircleText", "ChatDots", "ChatSlash", "ChatTeardrop", "ChatTeardropDots", "ChatTeardropSlash", "ChatTeardropText", "ChatText", "Chats", "ChatsCircle", "ChatsTeardrop", "Check", "CheckCircle", "CheckFat", "CheckSquare", "CheckSquareOffset", "Checkerboard", "Checks", "Cheers", "Cheese", "ChefHat", "Cherries", "Church", "Cigarette", "CigaretteSlash", "Circle", "CircleDashed", "CircleHalf", "CircleHalfTilt", "CircleNotch", "CirclesFour", "CirclesThree", "CirclesThreePlus", "Circuitry", "City", "Clipboard", "ClipboardText", "Clock", "ClockAfternoon", "ClockClockwise", "ClockCountdown", "ClockUser", "ClosedCaptioning", "Cloud", "CloudArrowDown", "CloudArrowUp", "CloudCheck", "CloudFog", "CloudLightning", "CloudMoon", "CloudRain", "CloudSlash", "CloudSnow", "CloudSun", "CloudWarning", "CloudX", "Clover", "Club", "CoatHanger", "CodaLogo", "Code", "CodeBlock", "CodeSimple", "CodepenLogo", "CodesandboxLogo", "Coffee", "CoffeeBean", "Coin", "CoinVertical", "Coins", "Columns", "ColumnsPlusLeft", "ColumnsPlusRight", "Command", "Compass", "CompassRose", "CompassTool", "ComputerTower", "Confetti", "ContactlessPayment", "Control", "Cookie", "CookingPot", "Copy", "CopySimple", "Copyleft", "Copyright", "CornersIn", "CornersOut", "Couch", "CourtBasketball", "Cow", "CowboyHat", "Cpu", "Crane", "CraneTower", "CreditCard", "Cricket", "Crop", "Cross", "Crosshair", "CrosshairSimple", "Crown", "CrownCross", "CrownSimple", "Cube", "CubeFocus", "CubeTransparent", "CurrencyBtc", "CurrencyCircleDollar", "CurrencyCny", "CurrencyDollar", "CurrencyDollarSimple", "CurrencyEth", "CurrencyEur", "CurrencyGbp", "CurrencyInr", "CurrencyJpy", "CurrencyKrw", "CurrencyKzt", "CurrencyNgn", "CurrencyRub", "Cursor", "CursorClick", "CursorText", "Cylinder", "Database", "Desk", "Desktop", "DesktopTower", "Detective", "DevToLogo", "DeviceMobile", "DeviceMobileCamera", "DeviceMobileSlash", "DeviceMobileSpeaker", "DeviceRotate", "DeviceTablet", "DeviceTabletCamera", "DeviceTabletSpeaker", "Devices", "Diamond", "DiamondsFour", "DiceFive", "DiceFour", "DiceOne", "DiceSix", "DiceThree", "DiceTwo", "Disc", "DiscoBall", "DiscordLogo", "Divide", "Dna", "Dog", "Door", "DoorOpen", "Dot", "DotOutline", "DotsNine", "DotsSix", "DotsSixVertical", "DotsThree", "DotsThreeCircle", "DotsThreeOutline", "DotsThreeVertical", "Download", "DownloadSimple", "Dress", "Dresser", "DribbbleLogo", "Drone", "Drop", "DropHalf", "DropHalfBottom", "DropSimple", "DropSlash", "DropboxLogo", "Ear", "EarSlash", "Egg", "EggCrack", "Eject", "EjectSimple", "Elevator", "Empty", "Engine", "Envelope", "EnvelopeOpen", "EnvelopeSimple", "EnvelopeSimpleOpen", "Equalizer", "Equals", "Eraser", "EscalatorDown", "EscalatorUp", "Exam", "ExclamationMark", "Exclude", "ExcludeSquare", "Export", "Eye", "EyeClosed", "EyeSlash", "Eyedropper", "EyedropperSample", "Eyeglasses", "Eyes", "FaceMask", "FacebookLogo", "Factory", "Faders", "FadersHorizontal", "FalloutShelter", "Fan", "Farm", "FastForward", "FastForwardCircle", "Feather", "FediverseLogo", "FigmaLogo", "File", "FileArchive", "FileArrowDown", "FileArrowUp", "FileAudio", "FileC", "FileCloud", "FileCode", "FileCpp", "FileCss", "FileCsv", "FileDashed", "FileDoc", "FileHtml", "FileImage", "FileIni", "FileJpg", "FileJs", "FileJsx", "FileLock", "FileMagnifyingGlass", "FileMd", "FileMinus", "FilePdf", "FilePlus", "FilePng", "FilePpt", "FilePy", "FileRs", "FileSql", "FileSvg", "FileText", "FileTs", "FileTsx", "FileTxt", "FileVideo", "FileVue", "FileX", "FileXls", "FileZip", "Files", "FilmReel", "FilmScript", "FilmSlate", "FilmStrip", "Fingerprint", "FingerprintSimple", "FinnTheHuman", "Fire", "FireExtinguisher", "FireSimple", "FireTruck", "FirstAid", "FirstAidKit", "Fish", "FishSimple", "Flag", "FlagBanner", "FlagBannerFold", "FlagCheckered", "FlagPennant", "Flame", "Flashlight", "Flask", "FlipHorizontal", "FlipVertical", "FloppyDisk", "FloppyDiskBack", "FlowArrow", "Flower", "FlowerLotus", "FlowerTulip", "FlyingSaucer", "Folder", "FolderDashed", "FolderLock", "FolderMinus", "FolderNotch", "FolderNotchMinus", "FolderNotchOpen", "FolderNotchPlus", "FolderOpen", "FolderPlus", "FolderSimple", "FolderSimpleDashed", "FolderSimpleLock", "FolderSimpleMinus", "FolderSimplePlus", "FolderSimpleStar", "FolderSimpleUser", "FolderStar", "FolderUser", "Folders", "Football", "FootballHelmet", "Footprints", "ForkKnife", "FourK", "FrameCorners", "FramerLogo", "Function", "Funnel", "FunnelSimple", "FunnelSimpleX", "FunnelX", "GameController", "Garage", "GasCan", "GasPump", "Gauge", "Gavel", "Gear", "GearFine", "GearSix", "GenderFemale", "GenderIntersex", "GenderMale", "GenderNeuter", "GenderNonbinary", "GenderTransgender", "Ghost", "Gif", "Gift", "GitBranch", "GitCommit", "GitDiff", "GitFork", "GitMerge", "GitPullRequest", "GithubLogo", "GitlabLogo", "GitlabLogoSimple", "Globe", "GlobeHemisphereEast", "GlobeHemisphereWest", "GlobeSimple", "GlobeSimpleX", "GlobeStand", "GlobeX", "Goggles", "Golf", "GoodreadsLogo", "GoogleCardboardLogo", "GoogleChromeLogo", "GoogleDriveLogo", "GoogleLogo", "GooglePhotosLogo", "GooglePlayLogo", "GooglePodcastsLogo", "Gps", "GpsFix", "GpsSlash", "Gradient", "GraduationCap", "Grains", "GrainsSlash", "Graph", "GraphicsCard", "GreaterThan", "GreaterThanOrEqual", "GridFour", "GridNine", "Guitar", "HairDryer", "Hamburger", "Hammer", "Hand", "HandArrowDown", "HandArrowUp", "HandCoins", "HandDeposit", "HandEye", "HandFist", "HandGrabbing", "HandHeart", "HandPalm", "HandPeace", "HandPointing", "HandSoap", "HandSwipeLeft", "HandSwipeRight", "HandTap", "HandWaving", "HandWithdraw", "Handbag", "HandbagSimple", "HandsClapping", "HandsPraying", "Handshake", "HardDrive", "HardDrives", "HardHat", "Hash", "HashStraight", "HeadCircuit", "Headlights", "Headphones", "Headset", "Heart", "HeartBreak", "HeartHalf", "HeartStraight", "HeartStraightBreak", "Heartbeat", "Hexagon", "HighDefinition", "HighHeel", "Highlighter", "HighlighterCircle", "Hockey", "Hoodie", "Horse", "Hospital", "Hourglass", "HourglassHigh", "HourglassLow", "HourglassMedium", "HourglassSimple", "HourglassSimpleHigh", "HourglassSimpleLow", "House", "HouseLine", "HouseSimple", "Hurricane", "IceCream", "IdentificationBadge", "IdentificationCard", "Image", "ImageBroken", "ImageSquare", "Images", "ImagesSquare", "Infinity", "Info", "InstagramLogo", "Intersect", "IntersectSquare", "IntersectThree", "Intersection", "Invoice", "Island", "Jar", "JarLabel", "Jeep", "Joystick", "Kanban", "Key", "KeyReturn", "Keyboard", "Keyhole", "Knife", "Ladder", "LadderSimple", "Lamp", "LampPendant", "Laptop", "Lasso", "LastfmLogo", "Layout", "Leaf", "Lectern", "Lego", "LegoSmiley", "LessThan", "LessThanOrEqual", "LetterCircleH", "LetterCircleP", "LetterCircleV", "Lifebuoy", "Lightbulb", "LightbulbFilament", "Lighthouse", "Lightning", "LightningA", "LightningSlash", "LineSegment", "LineSegments", "LineVertical", "Link", "LinkBreak", "LinkSimple", "LinkSimpleBreak", "LinkSimpleHorizontal", "LinkedinLogo", "LinktreeLogo", "LinuxLogo", "List", "ListBullets", "ListChecks", "ListDashes", "ListHeart", "ListMagnifyingGlass", "ListNumbers", "ListPlus", "ListStar", "Lock", "LockKey", "LockKeyOpen", "LockLaminated", "LockLaminatedOpen", "LockOpen", "LockSimple", "LockSimpleOpen", "Lockers", "Log", "MagicWand", "Magnet", "MagnetStraight", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "Mailbox", "MapPin", "MapPinArea", "MapPinLine", "MapPinPlus", "MapPinSimple", "MapPinSimpleArea", "MapPinSimpleLine", "MapTrifold", "MarkdownLogo", "MarkerCircle", "Martini", "MaskHappy", "MaskSad", "MastodonLogo", "MathOperations", "MatrixLogo", "Medal", "MedalMilitary", "MediumLogo", "Megaphone", "MegaphoneSimple", "MemberOf", "Memory", "MessengerLogo", "MetaLogo", "Meteor", "Metronome", "Microphone", "MicrophoneSlash", "MicrophoneStage", "Microscope", "MicrosoftExcelLogo", "MicrosoftOutlookLogo", "MicrosoftTeamsLogo", "MicrosoftWordLogo", "Minus", "MinusCircle", "MinusSquare", "Money", "MoneyWavy", "Monitor", "MonitorArrowUp", "MonitorPlay", "Moon", "MoonStars", "Moped", "MopedFront", "Mosque", "Motorcycle", "Mountains", "Mouse", "MouseLeftClick", "MouseMiddleClick", "MouseRightClick", "MouseScroll", "MouseSimple", "MusicNote", "MusicNoteSimple", "MusicNotes", "MusicNotesMinus", "MusicNotesPlus", "MusicNotesSimple", "NavigationArrow", "Needle", "Network", "NetworkSlash", "NetworkX", "Newspaper", "NewspaperClipping", "NotEquals", "NotMemberOf", "NotSubsetOf", "NotSupersetOf", "Notches", "Note", "NoteBlank", "NotePencil", "Notebook", "Notepad", "Notification", "NotionLogo", "NuclearPlant", "NumberCircleEight", "NumberCircleFive", "NumberCircleFour", "NumberCircleNine", "NumberCircleOne", "NumberCircleSeven", "NumberCircleSix", "NumberCircleThree", "NumberCircleTwo", "NumberCircleZero", "NumberEight", "NumberFive", "NumberFour", "NumberNine", "NumberOne", "NumberSeven", "NumberSix", "NumberSquareEight", "NumberSquareFive", "NumberSquareFour", "NumberSquareNine", "NumberSquareOne", "NumberSquareSeven", "NumberSquareSix", "NumberSquareThree", "NumberSquareTwo", "NumberSquareZero", "NumberThree", "NumberTwo", "NumberZero", "Numpad", "Nut", "NyTimesLogo", "Octagon", "OfficeChair", "Onigiri", "OpenAiLogo", "Option", "Orange", "OrangeSlice", "Oven", "Package", "PaintBrush", "PaintBrushBroad", "PaintBrushHousehold", "PaintBucket", "PaintRoller", "Palette", "Panorama", "Pants", "PaperPlane", "PaperPlaneRight", "PaperPlaneTilt", "Paperclip", "PaperclipHorizontal", "Parachute", "Paragraph", "Parallelogram", "Park", "Password", "Path", "PatreonLogo", "Pause", "PauseCircle", "PawPrint", "PaypalLogo", "Peace", "Pen", "PenNib", "PenNibStraight", "Pencil", "PencilCircle", "PencilLine", "PencilRuler", "PencilSimple", "PencilSimpleLine", "PencilSimpleSlash", "PencilSlash", "Pentagon", "Pentagram", "Pepper", "Percent", "Person", "PersonArmsSpread", "PersonSimple", "PersonSimpleBike", "PersonSimpleCircle", "PersonSimpleHike", "PersonSimpleRun", "PersonSimpleSki", "PersonSimpleSwim", "PersonSimpleTaiChi", "PersonSimpleThrow", "PersonSimpleWalk", "Perspective", "Phone", "PhoneCall", "PhoneDisconnect", "PhoneIncoming", "PhoneList", "PhoneOutgoing", "PhonePause", "PhonePlus", "PhoneSlash", "PhoneTransfer", "PhoneX", "PhosphorLogo", "Pi", "PianoKeys", "PicnicTable", "PictureInPicture", "PiggyBank", "Pill", "PingPong", "PintGlass", "PinterestLogo", "Pinwheel", "Pipe", "PipeWrench", "PixLogo", "Pizza", "Placeholder", "Planet", "Plant", "Play", "PlayCircle", "PlayPause", "Playlist", "Plug", "PlugCharging", "Plugs", "PlugsConnected", "Plus", "PlusCircle", "PlusMinus", "PlusSquare", "PokerChip", "PoliceCar", "Polygon", "Popcorn", "Popsicle", "PottedPlant", "Power", "Prescription", "Presentation", "PresentationChart", "Printer", "Prohibit", "ProhibitInset", "ProjectorScreen", "ProjectorScreenChart", "Pulse", "PushPin", "PushPinSimple", "PushPinSimpleSlash", "PushPinSlash", "PuzzlePiece", "QrCode", "Question", "QuestionMark", "Queue", "Quotes", "Rabbit", "Racquet", "Radical", "Radio", "RadioButton", "Radioactive", "Rainbow", "RainbowCloud", "Ranking", "ReadCvLogo", "Receipt", "ReceiptX", "Record", "Rectangle", "RectangleDashed", "Recycle", "RedditLogo", "Repeat", "RepeatOnce", "ReplitLogo", "Resize", "Rewind", "RewindCircle", "RoadHorizon", "Robot", "Rocket", "RocketLaunch", "Rows", "RowsPlusBottom", "RowsPlusTop", "Rss", "RssSimple", "Rug", "Ruler", "Sailboat", "Scales", "Scan", "ScanSmiley", "Scissors", "Scooter", "Screencast", "Screwdriver", "Scribble", "ScribbleLoop", "Scroll", "Seal", "SealCheck", "SealPercent", "SealQuestion", "SealWarning", "Seat", "Seatbelt", "SecurityCamera", "Selection", "SelectionAll", "SelectionBackground", "SelectionForeground", "SelectionInverse", "SelectionPlus", "SelectionSlash", "Shapes", "Share", "ShareFat", "ShareNetwork", "Shield", "ShieldCheck", "ShieldCheckered", "ShieldChevron", "ShieldPlus", "ShieldSlash", "ShieldStar", "ShieldWarning", "ShippingContainer", "ShirtFolded", "ShootingStar", "ShoppingBag", "ShoppingBagOpen", "ShoppingCart", "ShoppingCartSimple", "Shovel", "Shower", "Shrimp", "Shuffle", "ShuffleAngular", "ShuffleSimple", "Sidebar", "SidebarSimple", "Sigma", "SignIn", "SignOut", "Signature", "Signpost", "SimCard", "Siren", "SketchLogo", "SkipBack", "SkipBackCircle", "SkipForward", "SkipForwardCircle", "Skull", "SkypeLogo", "SlackLogo", "Sliders", "SlidersHorizontal", "Slideshow", "Smiley", "SmileyAngry", "SmileyBlank", "SmileyMeh", "SmileyMelting", "SmileyNervous", "SmileySad", "SmileySticker", "SmileyWink", "SmileyXEyes", "SnapchatLogo", "Sneaker", "SneakerMove", "Snowflake", "SoccerBall", "Sock", "SolarPanel", "SolarRoof", "SortAscending", "SortDescending", "SoundcloudLogo", "Spade", "Sparkle", "SpeakerHifi", "SpeakerHigh", "SpeakerLow", "SpeakerNone", "SpeakerSimpleHigh", "SpeakerSimpleLow", "SpeakerSimpleNone", "SpeakerSimpleSlash", "SpeakerSimpleX", "SpeakerSlash", "SpeakerX", "Speedometer", "Sphere", "Spinner", "SpinnerBall", "SpinnerGap", "Spiral", "SplitHorizontal", "SplitVertical", "SpotifyLogo", "SprayBottle", "Square", "SquareHalf", "SquareHalfBottom", "SquareLogo", "SquareSplitVertical", "SquaresFour", "Stack", "StackMinus", "StackOverflowLogo", "StackPlus", "StackSimple", "Stairs", "Stamp", "StandardDefinition", "Star", "StarAndCrescent", "StarFour", "StarHalf", "StarOfDavid", "SteamLogo", "SteeringWheel", "Steps", "Stethoscope", "Sticker", "Stool", "Stop", "StopCircle", "Storefront", "Strategy", "StripeLogo", "Student", "SubsetOf", "SubsetProperOf", "Subtitles", "SubtitlesSlash", "Subtract", "SubtractSquare", "Subway", "Suitcase", "SuitcaseRolling", "SuitcaseSimple", "Sun", "SunDim", "SunHorizon", "Sunglasses", "SupersetOf", "SupersetProperOf", "Swap", "Swatches", "SwimmingPool", "Sword", "Synagogue", "Syringe", "TShirt", "Table", "Tabs", "Tag", "TagChevron", "TagSimple", "Target", "Taxi", "TeaBag", "TelegramLogo", "Television", "TelevisionSimple", "TennisBall", "Tent", "Terminal", "TerminalWindow", "TestTube", "TextAUnderline", "TextAa", "TextAlignCenter", "TextAlignJustify", "TextAlignLeft", "TextAlignRight", "TextB", "TextColumns", "TextH", "TextHFive", "TextHFour", "TextHOne", "TextHSix", "TextHThree", "TextHTwo", "TextIndent", "TextItalic", "TextOutdent", "TextStrikethrough", "TextSubscript", "TextSuperscript", "TextT", "TextTSlash", "TextUnderline", "Textbox", "Thermometer", "ThermometerCold", "ThermometerHot", "ThermometerSimple", "ThreadsLogo", "ThreeD", "ThumbsDown", "ThumbsUp", "Ticket", "TidalLogo", "TiktokLogo", "Tilde", "Timer", "TipJar", "Tipi", "Tire", "ToggleLeft", "ToggleRight", "Toilet", "ToiletPaper", "Toolbox", "Tooth", "Tornado", "Tote", "ToteSimple", "Towel", "Tractor", "Trademark", "TrademarkRegistered", "TrafficCone", "TrafficSign", "TrafficSignal", "Train", "TrainRegional", "TrainSimple", "Tram", "Translate", "Trash", "TrashSimple", "Tray", "TrayArrowDown", "TrayArrowUp", "TreasureChest", "Tree", "TreeEvergreen", "TreePalm", "TreeStructure", "TreeView", "TrendDown", "TrendUp", "Triangle", "TriangleDashed", "Trolley", "TrolleySuitcase", "Trophy", "Truck", "TruckTrailer", "TumblrLogo", "TwitchLogo", "TwitterLogo", "Umbrella", "UmbrellaSimple", "Union", "Unite", "UniteSquare", "Upload", "UploadSimple", "Usb", "User", "UserCheck", "UserCircle", "UserCircleCheck", "UserCircleDashed", "UserCircleGear", "UserCircleMinus", "UserCirclePlus", "UserFocus", "UserGear", "UserList", "UserMinus", "UserPlus", "UserRectangle", "UserSound", "UserSquare", "UserSwitch", "Users", "UsersFour", "UsersThree", "Van", "Vault", "VectorThree", "VectorTwo", "Vibrate", "Video", "VideoCamera", "VideoCameraSlash", "VideoConference", "Vignette", "VinylRecord", "VirtualReality", "Virus", "Visor", "Voicemail", "Volleyball", "Wall", "Wallet", "Warehouse", "Warning", "WarningCircle", "WarningDiamond", "WarningOctagon", "WashingMachine", "Watch", "WaveSawtooth", "WaveSine", "WaveSquare", "WaveTriangle", "Waveform", "WaveformSlash", "Waves", "Webcam", "WebcamSlash", "WebhooksLogo", "WechatLogo", "WhatsappLogo", "Wheelchair", "WheelchairMotion", "WifiHigh", "WifiLow", "WifiMedium", "WifiNone", "WifiSlash", "WifiX", "Wind", "Windmill", "WindowsLogo", "Wine", "Wrench", "X", "XCircle", "XLogo", "XSquare", "Yarn", "YinYang", "YoutubeLogo"],
    kt = "https://framer.com/m/phosphor-icons/",
    Hr = ["thin", "light", "regular", "bold", "fill", "duotone"],
    Vt = vr.reduce((r, t) => (r[t.toLowerCase()] = t, r), {});

function X(r) {
    let {
        color: t,
        selectByList: i,
        iconSearch: l,
        iconSelection: f,
        onClick: g,
        onMouseDown: y,
        onMouseUp: a,
        onMouseEnter: x,
        onMouseLeave: u,
        weight: v,
        mirrored: b
    } = r, h = Z(!1), p = Er(vr, i, l, f, Vt), [m, T] = Te(p === "Home" ? Zr(Ie) : null);
    async function D() {
        try {
            let F = await import(`${kt}${p}.js@0.0.57`);
            h.current && T(F.default(Ie))
        } catch {
            h.current && T(null)
        }
    }
    he(() => (h.current = !0, D(), () => {
        h.current = !1
    }), [p]);
    let d = Me.current() === Me.canvas ? e(zr, {}) : null;
    return e(s.div, {
        style: {
            display: "contents"
        },
        onClick: g,
        onMouseEnter: x,
        onMouseLeave: u,
        onMouseDown: y,
        onMouseUp: a,
        children: m ? e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            style: {
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: t,
                color: t,
                flexShrink: 0,
                transform: b ? "scale(-1, 1)" : void 0
            },
            focusable: "false",
            color: t,
            children: e(m, {
                color: t,
                weight: v
            })
        }) : d
    })
}
X.displayName = "Phosphor";
X.defaultProps = {
    width: 24,
    height: 24,
    iconSelection: "House",
    iconSearch: "House",
    color: "#66F",
    selectByList: !0,
    weight: "regular",
    mirrored: !1
};
E(X, {
    selectByList: {
        type: n.Boolean,
        title: "Select",
        enabledTitle: "List",
        disabledTitle: "Search",
        defaultValue: X.defaultProps.selectByList
    },
    iconSelection: {
        type: n.Enum,
        options: vr,
        defaultValue: X.defaultProps.iconSelection,
        title: "Name",
        hidden: ({
            selectByList: r
        }) => !r,
        description: "Find every icon name on the [Phosphor site](https://phosphoricons.com/)"
    },
    iconSearch: {
        type: n.String,
        title: "Name",
        placeholder: "Menu, Wifi, Box\u2026",
        hidden: ({
            selectByList: r
        }) => r
    },
    color: {
        type: n.Color,
        title: "Color",
        defaultValue: X.defaultProps.color
    },
    weight: {
        type: n.Enum,
        title: "Weight",
        optionTitles: Hr.map(r => r.charAt(0).toUpperCase() + r.slice(1)),
        options: Hr,
        defaultValue: X.defaultProps.weight
    },
    mirrored: {
        type: n.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: X.defaultProps.mirrored
    },
    ...Gr
});

function qr(r, t, i) {
    return Math.max(r, Math.min(t, i))
}
var br = class {
        advance(t) {
            if (!this.isRunning) return;
            let i = !1;
            if (this.lerp) this.value = function(f, g, y, a) {
                return function(u, v, b) {
                    return (1 - b) * u + b * v
                }(f, g, 1 - Math.exp(-y * a))
            }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, i = !0);
            else {
                this.currentTime += t;
                let l = qr(0, this.currentTime / this.duration, 1);
                i = l >= 1;
                let f = i ? 1 : this.easing(l);
                this.value = this.from + (this.to - this.from) * f
            }
            i && this.stop(), this.onUpdate?.(this.value, i)
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(t, i, {
            lerp: l = .1,
            duration: f = 1,
            easing: g = x => x,
            onStart: y,
            onUpdate: a
        }) {
            this.from = this.value = t, this.to = i, this.lerp = l, this.duration = f, this.easing = g, this.currentTime = 0, this.isRunning = !0, y?.(), this.onUpdate = a
        }
    },
    xr = class {
        constructor({
            wrapper: t,
            content: i,
            autoResize: l = !0,
            debounce: f = 250
        } = {}) {
            this.wrapper = t, this.content = i, l && (this.debouncedResize = function(y, a) {
                let x;
                return function() {
                    let u = arguments,
                        v = this;
                    clearTimeout(x), x = setTimeout(function() {
                        y.apply(v, u)
                    }, a)
                }
            }(this.resize, f), this.wrapper === j ? j.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), j.removeEventListener("resize", this.debouncedResize, !1)
        }
        resize = () => {
            this.onWrapperResize(), this.onContentResize()
        };
        onWrapperResize = () => {
            this.wrapper === j ? (this.width = j.innerWidth, this.height = j.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        };
        onContentResize = () => {
            this.wrapper === j ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        };
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    },
    tr = class {
        constructor() {
            this.events = {}
        }
        emit(t, ...i) {
            let l = this.events[t] || [];
            for (let f = 0, g = l.length; f < g; f++) l[f](...i)
        }
        on(t, i) {
            return this.events[t]?.push(i) || (this.events[t] = [i]), () => {
                this.events[t] = this.events[t]?.filter(l => i !== l)
            }
        }
        off(t, i) {
            this.events[t] = this.events[t]?.filter(l => i !== l)
        }
        destroy() {
            this.events = {}
        }
    },
    Qr = 100 / 6,
    wr = class {
        constructor(t, {
            wheelMultiplier: i = 1,
            touchMultiplier: l = 1
        }) {
            this.element = t, this.wheelMultiplier = i, this.touchMultiplier = l, this.touchStart = {
                x: null,
                y: null
            }, this.emitter = new tr, j.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        on(t, i) {
            return this.emitter.on(t, i)
        }
        destroy() {
            this.emitter.destroy(), j.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        onTouchStart = t => {
            let {
                clientX: i,
                clientY: l
            } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = i, this.touchStart.y = l, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        };
        onTouchMove = t => {
            let {
                clientX: i,
                clientY: l
            } = t.targetTouches ? t.targetTouches[0] : t, f = -(i - this.touchStart.x) * this.touchMultiplier, g = -(l - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = i, this.touchStart.y = l, this.lastDelta = {
                x: f,
                y: g
            }, this.emitter.emit("scroll", {
                deltaX: f,
                deltaY: g,
                event: t
            })
        };
        onTouchEnd = t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        };
        onWheel = t => {
            let {
                deltaX: i,
                deltaY: l,
                deltaMode: f
            } = t;
            i *= f === 1 ? Qr : f === 2 ? this.windowWidth : 1, l *= f === 1 ? Qr : f === 2 ? this.windowHeight : 1, i *= this.wheelMultiplier, l *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: l,
                event: t
            })
        };
        onWindowResize = () => {
            this.windowWidth = j.innerWidth, this.windowHeight = j.innerHeight
        }
    },
    ar = class {
        constructor({
            wrapper: t = j,
            content: i = document.documentElement,
            wheelEventsTarget: l = t,
            eventsTarget: f = l,
            smoothWheel: g = !0,
            syncTouch: y = !1,
            syncTouchLerp: a = .075,
            touchInertiaMultiplier: x = 35,
            duration: u,
            easing: v = M => Math.min(1, 1.001 - Math.pow(2, -10 * M)),
            lerp: b = !u && .1,
            infinite: h = !1,
            orientation: p = "vertical",
            gestureOrientation: m = "vertical",
            touchMultiplier: T = 1,
            wheelMultiplier: D = 1,
            autoResize: A = !0,
            prevent: d = !1,
            __experimental__naiveDimensions: V = !1
        } = {}) {
            this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
                deltaX: M,
                deltaY: F,
                event: C
            }) => {
                if (C.ctrlKey) return;
                let c = C.type.includes("touch"),
                    L = C.type.includes("wheel");
                if (this.isTouching = C.type === "touchstart" || C.type === "touchmove", this.options.syncTouch && c && C.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
                let O = M === 0 && F === 0,
                    W = this.options.gestureOrientation === "vertical" && F === 0 || this.options.gestureOrientation === "horizontal" && M === 0;
                if (O || W) return;
                let q = C.composedPath();
                q = q.slice(0, q.indexOf(this.rootElement));
                let o = this.options.prevent;
                if (q.find(w => {
                        var K, oe, $, ne, _;
                        return (typeof o == "function" ? o?.(w) : o) || ((K = w.hasAttribute) === null || K === void 0 ? void 0 : K.call(w, "data-lenis-prevent")) || c && ((oe = w.hasAttribute) === null || oe === void 0 ? void 0 : oe.call(w, "data-lenis-prevent-touch")) || L && (($ = w.hasAttribute) === null || $ === void 0 ? void 0 : $.call(w, "data-lenis-prevent-wheel")) || ((ne = w.classList) === null || ne === void 0 ? void 0 : ne.contains("lenis")) && !(!((_ = w.classList) === null || _ === void 0) && _.contains("lenis-stopped"))
                    })) return;
                if (this.isStopped || this.isLocked) return void C.preventDefault();
                if (!(this.options.syncTouch && c || this.options.smoothWheel && L)) return this.isScrolling = "native", void this.animate.stop();
                C.preventDefault();
                let H = F;
                this.options.gestureOrientation === "both" ? H = Math.abs(F) > Math.abs(M) ? F : M : this.options.gestureOrientation === "horizontal" && (H = M);
                let P = c && this.options.syncTouch,
                    ie = c && C.type === "touchend" && Math.abs(H) > 5;
                ie && (H = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + H, Object.assign({
                    programmatic: !1
                }, P ? {
                    lerp: ie ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }))
            }, this.onNativeScroll = () => {
                if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
                else if (this.isScrolling === !1 || this.isScrolling === "native") {
                    let M = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - M, this.direction = Math.sign(this.animatedScroll - M), this.isScrolling = "native", this.emit(), this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            }, j.lenisVersion = "1.1.2", t !== document.documentElement && t !== document.body || (t = j), this.options = {
                wrapper: t,
                content: i,
                wheelEventsTarget: l,
                eventsTarget: f,
                smoothWheel: g,
                syncTouch: y,
                syncTouchLerp: a,
                touchInertiaMultiplier: x,
                duration: u,
                easing: v,
                lerp: b,
                infinite: h,
                gestureOrientation: m,
                orientation: p,
                touchMultiplier: T,
                wheelMultiplier: D,
                autoResize: A,
                prevent: d,
                __experimental__naiveDimensions: V
            }, this.animate = new br, this.emitter = new tr, this.dimensions = new xr({
                wrapper: t,
                content: i,
                autoResize: A
            }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new wr(f, {
                touchMultiplier: T,
                wheelMultiplier: D
            }), this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName()
        }
        on(t, i) {
            return this.emitter.on(t, i)
        }
        off(t, i) {
            return this.emitter.off(t, i)
        }
        setScroll(t) {
            this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
        }
        resize() {
            this.dimensions.resize()
        }
        emit({
            userData: t = {}
        } = {}) {
            this.userData = t, this.emitter.emit("scroll", this), this.userData = {}
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.isStopped = !1, this.reset())
        }
        stop() {
            this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
        }
        raf(t) {
            let i = t - (this.time || t);
            this.time = t, this.animate.advance(.001 * i)
        }
        scrollTo(t, {
            offset: i = 0,
            immediate: l = !1,
            lock: f = !1,
            duration: g = this.options.duration,
            easing: y = this.options.easing,
            lerp: a = !g && this.options.lerp,
            onStart: x,
            onComplete: u,
            force: v = !1,
            programmatic: b = !0,
            userData: h = {}
        } = {}) {
            if (!this.isStopped && !this.isLocked || v) {
                if (["top", "left", "start"].includes(t)) t = 0;
                else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                else {
                    let p;
                    if (typeof t == "string" ? p = document.querySelector(t) : t?.nodeType && (p = t), p) {
                        if (this.options.wrapper !== j) {
                            let T = this.options.wrapper.getBoundingClientRect();
                            i -= this.isHorizontal ? T.left : T.top
                        }
                        let m = p.getBoundingClientRect();
                        t = (this.isHorizontal ? m.left : m.top) + this.animatedScroll
                    }
                }
                if (typeof t == "number") {
                    if (t += i, t = Math.round(t), this.options.infinite ? b && (this.targetScroll = this.animatedScroll = this.scroll) : t = qr(0, t, this.limit), l) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void(u == null || u(this));
                    t !== this.targetScroll && (b || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
                        duration: g,
                        easing: y,
                        lerp: a,
                        onStart: () => {
                            f && (this.isLocked = !0), this.isScrolling = "smooth", x?.(this)
                        },
                        onUpdate: (p, m) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = p - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = p, this.setScroll(this.scroll), b && (this.targetScroll = p), m || this.emit({
                                userData: h
                            }), m && (this.reset(), this.emit({
                                userData: h
                            }), u?.(this), this.__preventNextNativeScrollEvent = !0)
                        }
                    }))
                }
            }
        }
        get rootElement() {
            return this.options.wrapper === j ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? function(i, l) {
                return (i % l + l) % l
            }(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this.__isScrolling
        }
        set isScrolling(t) {
            this.__isScrolling !== t && (this.__isScrolling = t, this.updateClassName())
        }
        get isStopped() {
            return this.__isStopped
        }
        set isStopped(t) {
            this.__isStopped !== t && (this.__isStopped = t, this.updateClassName())
        }
        get isLocked() {
            return this.__isLocked
        }
        set isLocked(t) {
            this.__isLocked !== t && (this.__isLocked = t, this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === "smooth"
        }
        get className() {
            let t = "lenis";
            return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isScrolling === "smooth" && (t += " lenis-smooth"), t
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
        }
    };

function Cr(r) {
    let {
        intensity: t
    } = r, i = Z(null);
    return he(() => {
        i.current && i.current.scrollTo(0, {
            immediate: !0
        })
    }, [i]), he(() => {
        let l = document.getElementById("overlay");
        if (l) {
            let f = () => {
                    j.getComputedStyle(document.documentElement).overflow === "hidden" && l.setAttribute("data-lenis-prevent", "true")
                },
                g = new MutationObserver(y => {
                    for (let a of y) a.type === "attributes" && a.attributeName === "style" && f()
                });
            return g.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["style"]
            }), f(), () => {
                g.disconnect()
            }
        }
    }, []), he(() => {
        let l = document.getElementsByTagName("*");
        for (let f = 0; f < l.length; f++) {
            let g = l[f];
            j.getComputedStyle(g).getPropertyValue("overflow") === "auto" && g.setAttribute("data-lenis-prevent", "true")
        }
    }, []), he(() => {
        i.current = new ar({
            duration: t / 10
        });
        let l = f => {
            i.current && (i.current.raf(f), requestAnimationFrame(l))
        };
        return requestAnimationFrame(l), () => {
            i.current && (i.current.destroy(), i.current = null)
        }
    }, []), he(() => {
        let l = document.createElement("style");
        return l.textContent = `
html.lenis {
height: auto;
}
.lenis.lenis-smooth {

scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {

overscroll-behavior: contain;
}
.lenis.lenis-stopped {

overflow: hidden;
}
.lenis.lenis-scrolling iframe {

pointer-events: none;
}
`, document.head.appendChild(l), () => {
            document.head.removeChild(l)
        }
    }, []), he(() => {
        let l = [...document.querySelectorAll("a[href]")],
            f = (g, y) => {
                g.preventDefault();
                let a = decodeURIComponent(y);
                i.current.scrollTo(a)
            };
        return l.filter(g => g.href.includes("#")).forEach(g => {
            let y = `#${g.href.split("#").pop()}`;
            g.addEventListener("click", a => f(a, y))
        }), () => {
            l.filter(g => g.href.includes("#")).forEach(g => {
                let y = `#${g.href.split("#").pop()}`;
                g.removeEventListener("click", a => f(a, y))
            })
        }
    }, [i]), e(jr, {})
}
Cr.displayName = "Smooth Scroll";
E(Cr, {
    intensity: {
        title: "Intensity",
        type: n.Number,
        defaultValue: 10,
        description: "More components at [Framer University](https://framer.university?utm_source=component)."
    }
});
var It = te(X),
    Rt = {
        aVQhnrdxV: {
            hover: !0
        },
        d5VYawAjB: {
            hover: !0
        },
        P_db5kSUW: {
            hover: !0
        }
    },
    Lt = ["P_db5kSUW", "kHqqY_Fbi", "aVQhnrdxV", "d5VYawAjB"],
    Pt = "framer-qZ13Z",
    Tt = {
        aVQhnrdxV: "framer-v-156et7q",
        d5VYawAjB: "framer-v-1fyxeg0",
        kHqqY_Fbi: "framer-v-cohcl9",
        P_db5kSUW: "framer-v-1r2gyto"
    };

function Sr(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var Mt = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    jt = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    Dt = s.create(I),
    Ft = {
        "Blue + Animation": "d5VYawAjB",
        Blue: "aVQhnrdxV",
        Mobile: "kHqqY_Fbi",
        Primary: "P_db5kSUW"
    },
    Nt = ({
        baseColour: r,
        height: t,
        icon: i,
        iconBaseColour: l,
        iconColor: f,
        iconColorHover: g,
        id: y,
        link: a,
        newTab: x,
        tap: u,
        textColor: v,
        title: b,
        width: h,
        ...p
    }) => {
        var m, T, D, A, d, V, M, F, C;
        return {
            ...p,
            C2KktBOrF: (m = g ?? p.C2KktBOrF) !== null && m !== void 0 ? m : "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
            CvcuIBadb: u ?? p.CvcuIBadb,
            f8o4yitr5: (T = f ?? p.f8o4yitr5) !== null && T !== void 0 ? T : "rgb(255, 255, 255)",
            JUgooHRE7: (D = l ?? p.JUgooHRE7) !== null && D !== void 0 ? D : "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
            NCB7NePzH: (A = b ?? p.NCB7NePzH) !== null && A !== void 0 ? A : "Learn more",
            O76k0m1VG: (d = v ?? p.O76k0m1VG) !== null && d !== void 0 ? d : "rgb(255, 255, 255)",
            variant: (M = (V = Ft[p.variant]) !== null && V !== void 0 ? V : p.variant) !== null && M !== void 0 ? M : "P_db5kSUW",
            WvVe0JxPX: (F = i ?? p.WvVe0JxPX) !== null && F !== void 0 ? F : "Plus",
            WwqjDfMe_: (C = r ?? p.WwqjDfMe_) !== null && C !== void 0 ? C : "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
            xLFmzFpQN: a ?? p.xLFmzFpQN,
            YS1hVnYbg: x ?? p.YS1hVnYbg
        }
    },
    Bt = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    Wt = le(function(r, t) {
        let {
            activeLocale: i,
            setLocale: l
        } = we(), {
            style: f,
            className: g,
            layoutId: y,
            variant: a,
            NCB7NePzH: x,
            CvcuIBadb: u,
            WvVe0JxPX: v,
            f8o4yitr5: b,
            xLFmzFpQN: h,
            YS1hVnYbg: p,
            JUgooHRE7: m,
            WwqjDfMe_: T,
            O76k0m1VG: D,
            C2KktBOrF: A,
            ...d
        } = Nt(r), {
            baseVariant: V,
            classNames: M,
            clearLoadingGesture: F,
            gestureHandlers: C,
            gestureVariant: c,
            isLoading: L,
            setGestureState: O,
            setVariant: W,
            variants: q
        } = ke({
            cycleOrder: Lt,
            defaultVariant: "P_db5kSUW",
            enabledGestures: Rt,
            variant: a,
            variantClassNames: Tt
        }), o = Bt(r, q), {
            activeVariantCallback: H,
            delay: P
        } = Se(V), ie = H(async (..._) => {
            if (O({
                    isPressed: !1
                }), u && await u(..._) === !1) return !1
        }), w = Z(null), K = () => V !== "kHqqY_Fbi", oe = xe(), $ = [], ne = Ce();
        return e(pe, {
            id: y ?? oe,
            children: e(Dt, {
                animate: q,
                initial: !1,
                children: e(jt, {
                    value: Mt,
                    children: e(ue, {
                        href: h,
                        nodeId: "P_db5kSUW",
                        openInNewTab: p,
                        smoothScroll: !1,
                        children: R(s.a, {
                            ...d,
                            ...C,
                            className: `${de(Pt,...$,"framer-1r2gyto",g,M)} framer-g9r7nn`,
                            "data-border": !0,
                            "data-framer-name": "Primary",
                            "data-highlight": !0,
                            layoutDependency: o,
                            layoutId: "P_db5kSUW",
                            onTap: ie,
                            ref: t ?? w,
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0.2)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backdropFilter: "blur(0px)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                WebkitBackdropFilter: "blur(0px)",
                                ...f
                            },
                            variants: {
                                "aVQhnrdxV-hover": {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px"
                                },
                                "d5VYawAjB-hover": {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px"
                                },
                                "P_db5kSUW-hover": {
                                    "--border-color": "rgba(255, 255, 255, 0)",
                                    backdropFilter: "blur(50px)",
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    WebkitBackdropFilter: "blur(50px)"
                                },
                                aVQhnrdxV: {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px",
                                    backgroundColor: T
                                },
                                d5VYawAjB: {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px",
                                    backgroundColor: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))"
                                },
                                kHqqY_Fbi: {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px"
                                }
                            },
                            ...Sr({
                                "aVQhnrdxV-hover": {
                                    "data-framer-name": void 0
                                },
                                "d5VYawAjB-hover": {
                                    "data-framer-name": void 0
                                },
                                "P_db5kSUW-hover": {
                                    "data-framer-name": void 0
                                },
                                aVQhnrdxV: {
                                    "data-framer-name": "Blue"
                                },
                                d5VYawAjB: {
                                    "data-framer-name": "Blue + Animation"
                                },
                                kHqqY_Fbi: {
                                    "data-framer-name": "Mobile"
                                }
                            }, V, c),
                            children: [K() && e(s.div, {
                                className: "framer-2k7dq6",
                                "data-framer-name": "Label",
                                layoutDependency: o,
                                layoutId: "VVjunEQ1u",
                                children: e(J, {
                                    __fromCanvasComponent: !0,
                                    children: e(I, {
                                        children: e(s.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "16px",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: "Log in"
                                        })
                                    }),
                                    className: "framer-1xd4v8u",
                                    fonts: ["CUSTOM;Safiro Medium"],
                                    layoutDependency: o,
                                    layoutId: "whaGTf7py",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline",
                                        "--variable-reference-O76k0m1VG-YcYFEcYka": D
                                    },
                                    text: x,
                                    variants: {
                                        aVQhnrdxV: {
                                            "--extracted-r6o4lv": "var(--variable-reference-O76k0m1VG-YcYFEcYka)",
                                            "--variable-reference-O76k0m1VG-YcYFEcYka": D
                                        }
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...Sr({
                                        aVQhnrdxV: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                        "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "16px",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-O76k0m1VG-YcYFEcYka))"
                                                    },
                                                    children: "Learn more"
                                                })
                                            })
                                        },
                                        d5VYawAjB: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                        "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "16px",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: "Learn more"
                                                })
                                            })
                                        }
                                    }, V, c)
                                })
                            }), e(s.div, {
                                className: "framer-itpcmc",
                                layoutDependency: o,
                                layoutId: "DZkr6y_BS",
                                style: {
                                    backdropFilter: "none",
                                    backgroundColor: "rgba(0, 64, 255, 0)",
                                    borderBottomLeftRadius: 500,
                                    borderBottomRightRadius: 500,
                                    borderTopLeftRadius: 500,
                                    borderTopRightRadius: 500,
                                    WebkitBackdropFilter: "none"
                                },
                                variants: {
                                    "aVQhnrdxV-hover": {
                                        backgroundColor: "rgb(255, 255, 255)"
                                    },
                                    "d5VYawAjB-hover": {
                                        backgroundColor: "rgb(255, 255, 255)"
                                    },
                                    "P_db5kSUW-hover": {
                                        backdropFilter: "blur(0px)",
                                        backgroundColor: m,
                                        borderBottomLeftRadius: 100,
                                        borderBottomRightRadius: 100,
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                        WebkitBackdropFilter: "blur(0px)"
                                    },
                                    kHqqY_Fbi: {
                                        backgroundColor: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))"
                                    }
                                },
                                children: e(k, {
                                    children: e(s.div, {
                                        className: "framer-x5itne-container",
                                        layoutDependency: o,
                                        layoutId: "B25JtVSV5-container",
                                        style: {
                                            rotate: 0
                                        },
                                        variants: {
                                            "d5VYawAjB-hover": {
                                                rotate: 90
                                            },
                                            "P_db5kSUW-hover": {
                                                rotate: 90
                                            }
                                        },
                                        children: e(X, {
                                            color: b,
                                            height: "100%",
                                            iconSearch: v,
                                            iconSelection: "ArrowDownRight",
                                            id: "B25JtVSV5",
                                            layoutId: "B25JtVSV5",
                                            mirrored: !1,
                                            selectByList: !1,
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            weight: "bold",
                                            width: "100%",
                                            ...Sr({
                                                "aVQhnrdxV-hover": {
                                                    color: A
                                                },
                                                "d5VYawAjB-hover": {
                                                    color: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))"
                                                }
                                            }, V, c)
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    At = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qZ13Z.framer-g9r7nn, .framer-qZ13Z .framer-g9r7nn { display: block; }", ".framer-qZ13Z.framer-1r2gyto { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; overflow: visible; padding: 4px 6px 4px 20px; position: relative; text-decoration: none; width: min-content; }", ".framer-qZ13Z .framer-2k7dq6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-qZ13Z .framer-1xd4v8u { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-qZ13Z .framer-itpcmc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 32px; }", ".framer-qZ13Z .framer-x5itne-container { aspect-ratio: 1 / 1; flex: none; height: 16px; position: relative; width: var(--framer-aspect-ratio-supported, 16px); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qZ13Z.framer-1r2gyto, .framer-qZ13Z .framer-2k7dq6, .framer-qZ13Z .framer-itpcmc { gap: 0px; } .framer-qZ13Z.framer-1r2gyto > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-qZ13Z.framer-1r2gyto > :first-child, .framer-qZ13Z .framer-2k7dq6 > :first-child { margin-left: 0px; } .framer-qZ13Z.framer-1r2gyto > :last-child, .framer-qZ13Z .framer-2k7dq6 > :last-child { margin-right: 0px; } .framer-qZ13Z .framer-2k7dq6 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-qZ13Z .framer-itpcmc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-qZ13Z .framer-itpcmc > :first-child { margin-top: 0px; } .framer-qZ13Z .framer-itpcmc > :last-child { margin-bottom: 0px; } }", ".framer-qZ13Z.framer-v-cohcl9.framer-1r2gyto { padding: 0px; }", ".framer-qZ13Z.framer-v-cohcl9 .framer-itpcmc { height: 44px; width: 44px; }", ".framer-qZ13Z.framer-v-1r2gyto.hover .framer-itpcmc { flex-direction: row; gap: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qZ13Z.framer-v-1r2gyto.hover .framer-itpcmc { gap: 0px; } .framer-qZ13Z.framer-v-1r2gyto.hover .framer-itpcmc > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-qZ13Z.framer-v-1r2gyto.hover .framer-itpcmc > :first-child { margin-left: 0px; } .framer-qZ13Z.framer-v-1r2gyto.hover .framer-itpcmc > :last-child { margin-right: 0px; } }", '.framer-qZ13Z[data-border="true"]::after, .framer-qZ13Z [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ze = ce(Wt, At, "framer-qZ13Z"),
    kr = ze;
ze.displayName = "Button/Arrow Circle Reveal";
ze.defaultProps = {
    height: 44,
    width: 141
};
E(ze, {
    variant: {
        options: ["P_db5kSUW", "kHqqY_Fbi", "aVQhnrdxV", "d5VYawAjB"],
        optionTitles: ["Primary", "Mobile", "Blue", "Blue + Animation"],
        title: "Variant",
        type: n.Enum
    },
    NCB7NePzH: {
        defaultValue: "Learn more",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    },
    CvcuIBadb: {
        title: "Tap",
        type: n.EventHandler
    },
    WvVe0JxPX: {
        defaultValue: "Plus",
        placeholder: "Menu, Wifi, Box\u2026",
        title: "Icon",
        type: n.String
    },
    f8o4yitr5: {
        defaultValue: "rgb(255, 255, 255)",
        title: "Icon Color",
        type: n.Color
    },
    xLFmzFpQN: {
        title: "Link",
        type: n.Link
    },
    YS1hVnYbg: {
        defaultValue: !1,
        title: "New Tab",
        type: n.Boolean
    },
    JUgooHRE7: {
        defaultValue: 'var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255)) /* {"name":"Blue"} */',
        title: "Icon Base Colour",
        type: n.Color
    },
    WwqjDfMe_: {
        defaultValue: 'var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255)) /* {"name":"Blue"} */',
        title: "Base Colour",
        type: n.Color
    },
    O76k0m1VG: {
        defaultValue: "rgb(255, 255, 255)",
        title: "Text Color",
        type: n.Color
    },
    C2KktBOrF: {
        defaultValue: 'var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255)) /* {"name":"Blue"} */',
        title: "Icon Color Hover",
        type: n.Color
    }
});
Ve(ze, [{
    explicitInter: !0,
    fonts: [{
        family: "Safiro Medium",
        source: "custom",
        url: "/assets/media/BPTBqFZT8NLInucfcnAjjSb5XM.woff2"
    }]
}, ...It], {
    supportsExplicitInterCodegen: !0
});
var zt = ["QztZReDwv", "WyxGXx2Yl", "MRoHUgPaI", "Rxioy4Pm3", "Rnp6ObXge", "iw4XEJlxw"],
    Ot = "framer-nYBRQ",
    Zt = {
        iw4XEJlxw: "framer-v-1q77qm8",
        MRoHUgPaI: "framer-v-3c51fl",
        QztZReDwv: "framer-v-zhe08h",
        Rnp6ObXge: "framer-v-1alrxhf",
        Rxioy4Pm3: "framer-v-18imoax",
        WyxGXx2Yl: "framer-v-sskjwu"
    };

function Ur(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var Gt = {
        bounce: .2,
        delay: 0,
        duration: .7,
        type: "spring"
    },
    Et = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    Ht = s.create(I),
    Qt = {
        "Descktop - Hover": "WyxGXx2Yl",
        "Desktop - 14px": "Rxioy4Pm3",
        "Desktop Hover - 14px": "Rnp6ObXge",
        "Mobile Big": "iw4XEJlxw",
        Desktop: "QztZReDwv",
        Mobile: "MRoHUgPaI"
    },
    qt = ({
        click: r,
        height: t,
        id: i,
        link: l,
        newTab: f,
        smoothScroll: g,
        title: y,
        tXTColor: a,
        underline: x,
        width: u,
        ...v
    }) => {
        var b, h, p, m, T, D;
        return {
            ...v,
            blufgyiGb: r ?? v.blufgyiGb,
            j4rGAQlsA: (b = a ?? v.j4rGAQlsA) !== null && b !== void 0 ? b : "rgb(0, 0, 0)",
            jQJZIhVdX: l ?? v.jQJZIhVdX,
            k8auuk0mY: (h = x ?? v.k8auuk0mY) !== null && h !== void 0 ? h : "rgb(0, 0, 0)",
            tJMuU5vK4: (p = g ?? v.tJMuU5vK4) !== null && p !== void 0 ? p : !0,
            variant: (T = (m = Qt[v.variant]) !== null && m !== void 0 ? m : v.variant) !== null && T !== void 0 ? T : "QztZReDwv",
            VKzWGEV7h: f ?? v.VKzWGEV7h,
            yNXUemuGw: (D = y ?? v.yNXUemuGw) !== null && D !== void 0 ? D : "Link Menu"
        }
    },
    Ut = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    _t = le(function(r, t) {
        let {
            activeLocale: i,
            setLocale: l
        } = we(), {
            style: f,
            className: g,
            layoutId: y,
            variant: a,
            jQJZIhVdX: x,
            yNXUemuGw: u,
            VKzWGEV7h: v,
            tJMuU5vK4: b,
            j4rGAQlsA: h,
            k8auuk0mY: p,
            blufgyiGb: m,
            ...T
        } = qt(r), {
            baseVariant: D,
            classNames: A,
            clearLoadingGesture: d,
            gestureHandlers: V,
            gestureVariant: M,
            isLoading: F,
            setGestureState: C,
            setVariant: c,
            variants: L
        } = ke({
            cycleOrder: zt,
            defaultVariant: "QztZReDwv",
            variant: a,
            variantClassNames: Zt
        }), O = Ut(r, L), {
            activeVariantCallback: W,
            delay: q
        } = Se(D), o = W(async (..._) => {
            if (C({
                    isPressed: !1
                }), m && await m(..._) === !1) return !1
        }), H = W(async (..._) => {
            C({
                isHovered: !0
            }), c("WyxGXx2Yl")
        }), P = W(async (..._) => {
            C({
                isHovered: !1
            }), c("QztZReDwv")
        }), ie = W(async (..._) => {
            C({
                isHovered: !0
            }), c("Rnp6ObXge")
        }), w = W(async (..._) => {
            C({
                isHovered: !1
            }), c("Rxioy4Pm3")
        }), K = Z(null), oe = xe(), $ = [], ne = Ce();
        return e(pe, {
            id: y ?? oe,
            children: e(Ht, {
                animate: L,
                initial: !1,
                children: e(Et, {
                    value: Gt,
                    children: e(ue, {
                        href: x,
                        nodeId: "QztZReDwv",
                        openInNewTab: v,
                        smoothScroll: b,
                        children: R(s.a, {
                            ...T,
                            ...V,
                            className: `${de(Ot,...$,"framer-zhe08h",g,A)} framer-1b8a8w0`,
                            "data-framer-name": "Desktop",
                            "data-highlight": !0,
                            layoutDependency: O,
                            layoutId: "QztZReDwv",
                            onMouseEnter: H,
                            onTap: o,
                            ref: t ?? K,
                            style: {
                                ...f
                            },
                            ...Ur({
                                iw4XEJlxw: {
                                    "data-framer-name": "Mobile Big",
                                    onMouseEnter: void 0
                                },
                                MRoHUgPaI: {
                                    "data-framer-name": "Mobile",
                                    onMouseEnter: void 0
                                },
                                Rnp6ObXge: {
                                    "data-framer-name": "Desktop Hover - 14px",
                                    onMouseEnter: void 0,
                                    onMouseLeave: w
                                },
                                Rxioy4Pm3: {
                                    "data-framer-name": "Desktop - 14px",
                                    onMouseEnter: ie
                                },
                                WyxGXx2Yl: {
                                    "data-framer-name": "Descktop - Hover",
                                    onMouseLeave: P
                                }
                            }, D, M),
                            children: [e(s.div, {
                                className: "framer-xxyxcr",
                                layoutDependency: O,
                                layoutId: "A4r3MsTQ2",
                                style: {
                                    backgroundColor: p,
                                    opacity: 0
                                },
                                variants: {
                                    Rnp6ObXge: {
                                        opacity: 1
                                    },
                                    WyxGXx2Yl: {
                                        opacity: 1
                                    }
                                }
                            }), e(J, {
                                __fromCanvasComponent: !0,
                                children: e(I, {
                                    children: e(s.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                            "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                            "--framer-letter-spacing": "0px",
                                            "--framer-line-height": "22px",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-j4rGAQlsA-UacFZzPEp))"
                                        },
                                        children: "Link Menu"
                                    })
                                }),
                                className: "framer-14be8y1",
                                fonts: ["CUSTOM;Safiro Medium"],
                                layoutDependency: O,
                                layoutId: "h0reTr3A4",
                                style: {
                                    "--extracted-r6o4lv": "var(--variable-reference-j4rGAQlsA-UacFZzPEp)",
                                    "--framer-paragraph-spacing": "0px",
                                    "--variable-reference-j4rGAQlsA-UacFZzPEp": h,
                                    opacity: 1
                                },
                                text: u,
                                variants: {
                                    WyxGXx2Yl: {
                                        opacity: .7
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...Ur({
                                    iw4XEJlxw: {
                                        children: e(I, {
                                            children: e(s.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "22px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "22px",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-j4rGAQlsA-UacFZzPEp))"
                                                },
                                                children: "Link Menu"
                                            })
                                        })
                                    },
                                    MRoHUgPaI: {
                                        children: e(I, {
                                            children: e(s.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "22px",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-j4rGAQlsA-UacFZzPEp))"
                                                },
                                                children: "Link Menu"
                                            })
                                        })
                                    },
                                    Rnp6ObXge: {
                                        children: e(I, {
                                            children: e(s.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "22px",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-j4rGAQlsA-UacFZzPEp))"
                                                },
                                                children: "Link Menu"
                                            })
                                        })
                                    },
                                    Rxioy4Pm3: {
                                        children: e(I, {
                                            children: e(s.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "22px",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-j4rGAQlsA-UacFZzPEp))"
                                                },
                                                children: "Link Menu"
                                            })
                                        })
                                    }
                                }, D, M)
                            })]
                        })
                    })
                })
            })
        })
    }),
    Jt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-nYBRQ.framer-1b8a8w0, .framer-nYBRQ .framer-1b8a8w0 { display: block; }", ".framer-nYBRQ.framer-zhe08h { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-nYBRQ .framer-xxyxcr { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; width: 1%; z-index: 1; }", ".framer-nYBRQ .framer-14be8y1 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nYBRQ.framer-zhe08h { gap: 0px; } .framer-nYBRQ.framer-zhe08h > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-nYBRQ.framer-zhe08h > :first-child { margin-top: 0px; } .framer-nYBRQ.framer-zhe08h > :last-child { margin-bottom: 0px; } }", ".framer-nYBRQ.framer-v-sskjwu .framer-xxyxcr, .framer-nYBRQ.framer-v-1alrxhf .framer-xxyxcr { width: 100%; }"],
    Oe = ce(_t, Jt, "framer-nYBRQ"),
    N = Oe;
Oe.displayName = "Link Menu";
Oe.defaultProps = {
    height: 22,
    width: 77.5
};
E(Oe, {
    variant: {
        options: ["QztZReDwv", "WyxGXx2Yl", "MRoHUgPaI", "Rxioy4Pm3", "Rnp6ObXge", "iw4XEJlxw"],
        optionTitles: ["Desktop", "Descktop - Hover", "Mobile", "Desktop - 14px", "Desktop Hover - 14px", "Mobile Big"],
        title: "Variant",
        type: n.Enum
    },
    jQJZIhVdX: {
        title: "Link",
        type: n.Link
    },
    yNXUemuGw: {
        defaultValue: "Link Menu",
        displayTextArea: !1,
        placeholder: "Link Menu",
        title: "Title",
        type: n.String
    },
    VKzWGEV7h: {
        defaultValue: !1,
        title: "New Tab",
        type: n.Boolean
    },
    tJMuU5vK4: {
        defaultValue: !0,
        title: "Smooth Scroll",
        type: n.Boolean
    },
    j4rGAQlsA: {
        defaultValue: "rgb(0, 0, 0)",
        title: "TXT Color",
        type: n.Color
    },
    k8auuk0mY: {
        defaultValue: "rgb(0, 0, 0)",
        title: "Underline",
        type: n.Color
    },
    blufgyiGb: {
        title: "Click",
        type: n.EventHandler
    }
});
Ve(Oe, [{
    explicitInter: !0,
    fonts: [{
        family: "Safiro Medium",
        source: "custom",
        url: "/assets/media/BPTBqFZT8NLInucfcnAjjSb5XM.woff2"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var Kt = te(N),
    Yt = te(kr),
    Xt = ["E7tKtbY2K", "sBp8DQVFI", "ZqrEFyc47", "Gk7a0jnRd", "PIJ3ysjk2", "wvMo1QZOr", "rsJejvZnf"],
    $t = "framer-Ks5Gt",
    ea = {
        E7tKtbY2K: "framer-v-1hckxfp",
        Gk7a0jnRd: "framer-v-1en8mpn",
        PIJ3ysjk2: "framer-v-104qlzg",
        rsJejvZnf: "framer-v-1ahm21k",
        sBp8DQVFI: "framer-v-1cdxlau",
        wvMo1QZOr: "framer-v-1xxa076",
        ZqrEFyc47: "framer-v-moi1lw"
    };

function Q(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var ra = {
        duration: 0,
        type: "tween"
    },
    Vr = {
        bounce: 0,
        delay: 0,
        duration: .3,
        type: "spring"
    },
    ta = {
        bounce: 0,
        delay: 0,
        duration: .6,
        type: "spring"
    },
    _r = (r, t) => `translate(-50%, -50%) ${t}`,
    Jr = (r, t) => `translateX(-50%) ${t}`,
    Ir = (r, t) => `translateY(-50%) ${t}`,
    aa = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    ia = s.create(I),
    oa = {
        "Desktop Dark": "sBp8DQVFI",
        "Mobile - Dark": "PIJ3ysjk2",
        "Mobile - Light": "Gk7a0jnRd",
        "Mobile - Open": "wvMo1QZOr",
        "Variant 7": "rsJejvZnf",
        Desktop: "E7tKtbY2K",
        Tablet: "ZqrEFyc47"
    },
    na = ({
        border: r,
        height: t,
        id: i,
        width: l,
        ...f
    }) => ({
        ...f,
        ry8c6ZQ6t: r ?? f.ry8c6ZQ6t ?? {
            borderBottomWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: "solid",
            borderTopWidth: 0
        },
        variant: oa[f.variant] ?? f.variant ?? "E7tKtbY2K"
    }),
    la = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    sa = le(function(r, t) {
        let i = Z(null),
            l = t ?? i,
            f = xe(),
            {
                activeLocale: g,
                setLocale: y
            } = we(),
            a = Ce(),
            {
                style: x,
                className: u,
                layoutId: v,
                variant: b,
                ry8c6ZQ6t: h,
                ...p
            } = na(r),
            {
                baseVariant: m,
                classNames: T,
                clearLoadingGesture: D,
                gestureHandlers: A,
                gestureVariant: d,
                isLoading: V,
                setGestureState: M,
                setVariant: F,
                variants: C
            } = ke({
                cycleOrder: Xt,
                defaultVariant: "E7tKtbY2K",
                ref: l,
                variant: b,
                variantClassNames: ea
            }),
            c = la(r, C),
            {
                activeVariantCallback: L,
                delay: O
            } = Se(m),
            W = L(async (...w) => {
                F("wvMo1QZOr")
            }),
            q = L(async (...w) => {
                F("Gk7a0jnRd")
            }),
            H = de($t, ...[]),
            P = Ne(),
            ie = () => !!["Gk7a0jnRd", "PIJ3ysjk2", "wvMo1QZOr", "rsJejvZnf"].includes(m);
        return e(pe, {
            id: v ?? f,
            children: e(ia, {
                animate: C,
                initial: !1,
                children: e(aa, {
                    value: ra,
                    ...Q({
                        Gk7a0jnRd: {
                            value: Vr
                        },
                        PIJ3ysjk2: {
                            value: Vr
                        },
                        rsJejvZnf: {
                            value: Vr
                        },
                        wvMo1QZOr: {
                            value: ta
                        }
                    }, m, d),
                    children: e(s.div, {
                        ...p,
                        ...A,
                        className: de(H, "framer-1hckxfp", u, T),
                        "data-border": !0,
                        "data-framer-name": "Desktop",
                        layoutDependency: c,
                        layoutId: "E7tKtbY2K",
                        ref: l,
                        style: {
                            "--border-bottom-width": (h.borderBottomWidth ?? h.borderWidth) + "px",
                            "--border-color": h.borderColor,
                            "--border-left-width": (h.borderLeftWidth ?? h.borderWidth) + "px",
                            "--border-right-width": (h.borderRightWidth ?? h.borderWidth) + "px",
                            "--border-style": h.borderStyle,
                            "--border-top-width": (h.borderTopWidth ?? h.borderWidth) + "px",
                            backdropFilter: "blur(30px)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            WebkitBackdropFilter: "blur(30px)",
                            ...x
                        },
                        variants: {
                            Gk7a0jnRd: {
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)"
                            },
                            PIJ3ysjk2: {
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)"
                            },
                            rsJejvZnf: {
                                "--border-bottom-width": "0px",
                                "--border-left-width": "0px",
                                "--border-right-width": "0px",
                                "--border-top-width": "0px",
                                backdropFilter: "none",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                WebkitBackdropFilter: "none"
                            },
                            wvMo1QZOr: {
                                backdropFilter: "blur(10px)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                WebkitBackdropFilter: "blur(10px)"
                            }
                        },
                        ...Q({
                            Gk7a0jnRd: {
                                "data-framer-name": "Mobile - Light"
                            },
                            PIJ3ysjk2: {
                                "data-framer-name": "Mobile - Dark"
                            },
                            rsJejvZnf: {
                                "data-framer-name": "Variant 7"
                            },
                            sBp8DQVFI: {
                                "data-framer-name": "Desktop Dark"
                            },
                            wvMo1QZOr: {
                                "data-framer-name": "Mobile - Open"
                            },
                            ZqrEFyc47: {
                                "data-framer-name": "Tablet"
                            }
                        }, m, d),
                        children: R(s.div, {
                            className: "framer-1flugly",
                            layoutDependency: c,
                            layoutId: "Mx33wMQqP",
                            style: {
                                backdropFilter: "none",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                WebkitBackdropFilter: "none"
                            },
                            variants: {
                                rsJejvZnf: {
                                    backdropFilter: "blur(10px)",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    WebkitBackdropFilter: "blur(10px)"
                                }
                            },
                            children: [e(ue, {
                                href: {
                                    hash: ":yd0Wn5Api",
                                    webPageId: "xJq_mmwcR"
                                },
                                motionChild: !0,
                                nodeId: "U0fOx_Yyz",
                                openInNewTab: !1,
                                scopeId: "ErUG9kIkR",
                                smoothScroll: !0,
                                children: e(s.a, {
                                    className: "framer-440hhi framer-my1lo8",
                                    "data-framer-name": "Logo",
                                    layoutDependency: c,
                                    layoutId: "U0fOx_Yyz",
                                    children: e(Ke, {
                                        className: "framer-ra7nxw",
                                        "data-framer-name": "Logo FULL",
                                        layout: "position",
                                        layoutDependency: c,
                                        layoutId: "mBD0wcI4W",
                                        opacity: 1,
                                        style: {
                                            backgroundColor: "rgba(255, 0, 0, 0)"
                                        },
                                        svg: '<svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.0434 11.0008L39.3909 22.0547H35.9015L31.3858 11.0008H34.1225L37.3725 20.2229H38.0567L41.3066 11.0008H44.0434Z M57.0404 22.0547H54.6457V20.444L52.5931 22.0547H47.4617C46.8003 22.0547 46.2301 21.8442 45.7512 21.4231C45.2951 20.9809 45.067 20.4545 45.067 19.8439V17.6332C45.067 17.0226 45.2951 16.5067 45.7512 16.0856C46.2301 15.6435 46.8003 15.4224 47.4617 15.4224H54.3036L52.251 17.2858H47.4617V20.1598H54.6457V12.8958H45.067L47.1196 11.0008H54.6457C55.3071 11.0008 55.8659 11.2219 56.322 11.6641C56.8009 12.0852 57.0404 12.601 57.0404 13.2116V22.0547Z M72.0793 22.0547H69.6847V20.4756L67.9742 22.0547H62.5006C61.8392 22.0547 61.2691 21.8442 60.7901 21.4231C60.334 20.9809 60.1059 20.4545 60.1059 19.8439V11.0008H62.5006V20.1598H69.6847V11.0008H72.0793V22.0547Z M77.903 22.0547H75.5083V5.94763L77.903 3.73685V22.0547Z M89.2083 22.0547H84.4189C83.7575 22.0547 83.1874 21.8442 82.7084 21.4231C82.2523 20.9809 82.0242 20.4545 82.0242 19.8439V12.8958H78.6032L80.6558 11.0008H82.0242V8.79006L84.4189 6.57928V11.0008H89.2083V12.8958H84.4189V20.1598H89.2083V22.0547Z M90.7119 22.0547V2.76569H102.925V5.77787H94.4536V10.8074H101.787V13.7367H94.4536V22.0547H90.7119Z M120 22.0547H115.69L111.619 14.8421H111.229L107.218 22.0547H103.207L109.164 12.1891L103.507 2.76569H107.787L111.499 9.45329H111.918L115.69 2.76569H119.701L113.953 12.1615L120 22.0547Z M19.6924 0.415729L6.06334 0C5.15861 0.266066 4.31613 0.702581 3.55251 1.23471L20.3066 0.723367C20.1032 0.619435 19.8999 0.515504 19.6924 0.415729Z M22.1534 2.11606L3.1541 1.53404C2.65193 1.93729 2.20787 2.39875 1.80531 2.90178L22.3277 2.29066C22.2654 2.24493 22.2115 2.17426 22.1534 2.11606Z M23.4565 3.7956L1.6393 3.13459C1.31144 3.58773 1.03338 4.07414 0.784375 4.58964L23.5105 3.90785C23.4856 3.86627 23.469 3.8247 23.4565 3.7956Z M8.28781 5.77031L16.7458 6.01975C16.613 5.92829 16.476 5.83267 16.3557 5.75368L24.2284 5.51672C24.2284 5.50009 24.2077 5.4793 24.2077 5.45436L15.2891 5.17582C15.2891 5.17582 14.9903 5.04279 14.8367 4.98874L9.41664 5.15503C9.52869 5.10099 9.6615 5.0511 9.786 5.00953L0.734572 4.7393C0.527066 5.21323 0.35276 5.72042 0.240707 6.2484L7.95994 6.0239C8.0637 5.91997 8.17575 5.8493 8.28781 5.77031Z M18.0946 7.32929L24.5895 7.1339C24.5895 7.11727 24.5771 7.1048 24.5895 7.09233L17.7169 6.88446C17.6048 6.77222 17.4886 6.65581 17.389 6.55604L6.96806 6.86783C7.07182 6.7639 7.16312 6.67244 7.26687 6.56851L0.195056 6.35233C0.0913029 6.84705 0.0207505 7.35008 0.00830012 7.87805L6.28744 7.69098C6.37045 7.56626 6.45345 7.46648 6.54475 7.35008L18.3809 7.69929C18.3021 7.57873 18.2025 7.45401 18.0946 7.32929Z M5.56947 8.95063L19.2773 9.3622C19.2234 9.20838 19.0947 8.92984 19.0947 8.92984L24.6642 8.75524V8.71367L18.9121 8.53906C18.9121 8.53906 18.7669 8.26884 18.6839 8.12749L5.77698 8.51827C5.83923 8.39771 5.90978 8.26052 5.98034 8.14827L0.0249024 7.96951C0.0249024 8.02771 0.0249019 8.09423 0.0166017 8.14412L0.0166027 9.48276L5.41177 9.31647C5.45742 9.20422 5.50722 9.07119 5.56947 8.95063Z M5.05486 10.5553L19.6799 10.996C19.6592 10.8089 19.6011 10.5013 19.6094 10.5346L24.6601 10.3807V10.3392L19.5264 10.1853C19.5264 10.202 19.4558 9.90681 19.406 9.7322L5.13786 10.1646C5.17106 10.0315 5.20841 9.88602 5.24991 9.74467L0.0083004 9.59085L0.0124509 11.1166L4.9926 10.9752C5.00505 10.838 5.03411 10.7008 5.05486 10.5553Z M19.7463 12.1767L24.6559 12.0229V11.9813L19.7463 11.8275C19.7339 11.6737 19.7339 11.5074 19.7131 11.3619L4.9096 11.815C4.9096 11.6737 4.93035 11.5281 4.93035 11.3785L0 11.2205L8.29777e-08 12.7504L4.9428 12.6049C4.9345 12.4719 4.92205 12.318 4.92205 12.1684L19.7214 12.6257C19.7297 12.476 19.7339 12.3305 19.7463 12.1767Z M5.15031 13.8271L19.3935 14.2595C19.4558 14.0724 19.5264 13.7772 19.5264 13.8188L24.6601 13.665V13.6234L19.6094 13.4696C19.6011 13.5195 19.6592 13.2118 19.6799 13.0081L5.06731 13.4363C5.03411 13.3033 5.01336 13.1578 4.99261 13.0123L0.0166025 12.8668L0.0166013 14.3967L5.27481 14.2429C5.22086 14.1057 5.19181 13.9685 5.15031 13.8271Z M5.78943 15.4734L18.6548 15.8642C18.7503 15.7104 18.8914 15.4443 18.8914 15.4609L24.6684 15.2863V15.2448L19.0906 15.0785C19.0823 15.0868 19.2151 14.8124 19.2732 14.6461L5.60267 15.0618C5.54042 14.9413 5.48647 14.8041 5.43667 14.6711L0.0249017 14.5048L0.0249021 15.8268C0.0249021 15.885 0.0249019 15.9681 0.0332022 16.043L6.00939 15.8683C5.92223 15.7312 5.85998 15.6106 5.78943 15.4734Z M7.00127 17.1446L17.3558 17.4564C17.4886 17.34 17.6837 17.128 17.6837 17.128L24.5812 16.9201C24.5812 16.9035 24.5937 16.891 24.5812 16.8786L18.0697 16.6832C18.0697 16.6832 18.2564 16.4545 18.356 16.3132L6.56965 16.6707C6.4742 16.5585 6.39535 16.4545 6.31234 16.3298L0.0124486 16.1469C0.0290491 16.6624 0.0954528 17.1779 0.207506 17.6643L7.29592 17.4481C7.19632 17.34 7.10502 17.2486 7.00127 17.1446Z M9.51624 18.8574L14.7579 19.0113C14.899 18.9697 15.231 18.8283 15.2227 18.8367L24.216 18.5664C24.216 18.5498 24.2367 18.529 24.2367 18.5041L16.3225 18.2671C16.3225 18.2671 16.5798 18.0925 16.7126 18.001L8.35421 18.2505C8.24215 18.1798 8.11765 18.0967 8.01805 18.0135L0.269756 17.7765C0.39426 18.292 0.568566 18.7992 0.776072 19.2732L9.8939 18.9946C9.74865 18.9489 9.62414 18.9073 9.51624 18.8574Z M23.4897 20.1171L0.805126 19.4353C1.05413 19.9508 1.33219 20.4372 1.6725 20.8779L23.4358 20.2293C23.4607 20.1878 23.4773 20.1462 23.4897 20.1171Z M22.2945 21.7052L1.83436 21.0816C2.23692 21.5846 2.70173 22.0502 3.1956 22.4618L22.1119 21.8881C22.1824 21.8341 22.2364 21.7634 22.2945 21.7052Z M6.16709 24L19.6094 23.5884C19.8376 23.4845 20.041 23.3806 20.2609 23.2683L3.60646 22.7736C4.37839 23.3224 5.24161 23.7298 6.16709 24Z" fill="rgb(255, 255, 255)"/></svg>',
                                        svgContentId: 9936305020,
                                        withExternalLayout: !0,
                                        ...Q({
                                            Gk7a0jnRd: {
                                                svg: '<svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.7028 9.16736L32.8257 18.3789H29.9179L26.1548 9.16736H28.4355L31.1437 16.8524H31.7139L34.4222 9.16736H36.7028Z M47.5337 18.3789H45.5381V17.0367L43.8276 18.3789H39.5514C39.0002 18.3789 38.5251 18.2035 38.126 17.8526C37.7459 17.4841 37.5558 17.0455 37.5558 16.5366V14.6943C37.5558 14.1855 37.7459 13.7556 38.126 13.4047C38.5251 13.0362 39.0002 12.852 39.5514 12.852H45.253L43.5425 14.4048H39.5514V16.7998H45.5381V10.7465H37.5558L39.2663 9.16736H45.5381C46.0893 9.16736 46.5549 9.3516 46.935 9.72006C47.3341 10.071 47.5337 10.5008 47.5337 11.0097V18.3789Z M60.0661 18.3789H58.0706V17.063L56.6451 18.3789H52.0838C51.5327 18.3789 51.0576 18.2035 50.6584 17.8526C50.2783 17.4841 50.0883 17.0455 50.0883 16.5366V9.16736H52.0838V16.7998H58.0706V9.16736H60.0661V18.3789Z M64.9192 18.3789H62.9236V4.95636L64.9192 3.11404V18.3789Z M74.3402 18.3789H70.3491C69.7979 18.3789 69.3228 18.2035 68.9237 17.8526C68.5436 17.4841 68.3535 17.0455 68.3535 16.5366V10.7465H65.5027L67.2132 9.16736H68.3535V7.32505L70.3491 5.48273V9.16736H74.3402V10.7465H70.3491V16.7998H74.3402V18.3789Z M75.5933 18.3789V2.30474H85.7707V4.81489H78.7113V9.00616H84.8228V11.4472H78.7113V18.3789H75.5933Z M100 18.3789H96.408L93.0155 12.3684H92.6912L89.3486 18.3789H86.0061L90.97 10.1576L86.2555 2.30474H89.8226L92.9157 7.87774H93.265L96.408 2.30474H99.7506L94.9612 10.1346L100 18.3789Z M16.4103 0.346441L5.05278 0C4.29884 0.221722 3.59678 0.585484 2.96042 1.02893L16.9221 0.602806C16.7527 0.516196 16.5832 0.429586 16.4103 0.346441Z M18.4612 1.76338L2.62842 1.27836C2.20994 1.61441 1.83989 1.99896 1.50442 2.41815L18.6064 1.90889C18.5545 1.87078 18.5096 1.81188 18.4612 1.76338Z M19.5471 3.163L1.36609 2.61216C1.09287 2.98978 0.861152 3.39511 0.653646 3.8247L19.5921 3.25654C19.5713 3.2219 19.5575 3.18725 19.5471 3.163Z M6.9065 4.80859L13.9548 5.01646C13.8441 4.94024 13.73 4.86056 13.6297 4.79473L20.1904 4.59726C20.1904 4.58341 20.1731 4.56608 20.1731 4.5453L12.7409 4.31318C12.7409 4.31318 12.4919 4.20232 12.3639 4.15728L7.8472 4.29586C7.94058 4.25082 8.05125 4.20925 8.155 4.17461L0.612144 3.94942C0.439222 4.34436 0.293967 4.76702 0.200589 5.207L6.63329 5.01992C6.71975 4.93331 6.81313 4.87442 6.9065 4.80859Z M15.0788 6.10774L20.4913 5.94492C20.4913 5.93106 20.4809 5.92066 20.4913 5.91027L14.7641 5.73705C14.6707 5.64351 14.5739 5.54651 14.4909 5.46336L5.80672 5.72319C5.89318 5.63658 5.96927 5.56037 6.05573 5.47376L0.162547 5.29361C0.0760858 5.70587 0.0172921 6.12506 0.00691677 6.56504L5.23954 6.40915C5.30871 6.30521 5.37787 6.22207 5.45396 6.12506L15.3174 6.41607C15.2517 6.31561 15.1687 6.21167 15.0788 6.10774Z M4.64123 7.45886L16.0645 7.80184C16.0195 7.67365 15.9123 7.44154 15.9123 7.44154L20.5535 7.29603V7.26139L15.7601 7.11588C15.7601 7.11588 15.6391 6.8907 15.5699 6.77291L4.81415 7.09856C4.86603 6.99809 4.92482 6.88377 4.98361 6.79023L0.020752 6.64126C0.020752 6.68976 0.0207516 6.74519 0.0138347 6.78676L0.0138356 7.9023L4.50981 7.76373C4.54785 7.67019 4.58935 7.55933 4.64123 7.45886Z M4.21238 8.79612L16.3999 9.16335C16.3826 9.00745 16.3342 8.75108 16.3411 8.7788L20.5501 8.65061V8.61597L16.272 8.48779C16.272 8.50165 16.2132 8.25567 16.1717 8.11017L4.28155 8.47047C4.30922 8.3596 4.34034 8.23835 4.37493 8.12056L0.006917 7.99238L0.0103758 9.26381L4.1605 9.14602C4.17088 9.0317 4.19509 8.91737 4.21238 8.79612Z M16.4553 10.1472L20.5466 10.0191V9.98441L16.4553 9.85623C16.4449 9.72805 16.4449 9.58947 16.4276 9.46821L4.09133 9.84583C4.09133 9.72804 4.10863 9.60679 4.10863 9.48207L0 9.35042L6.91481e-08 10.6253L4.119 10.5041C4.11209 10.3932 4.10171 10.265 4.10171 10.1403L16.4345 10.5214C16.4414 10.3967 16.4449 10.2754 16.4553 10.1472Z M4.29192 11.5226L16.1613 11.8829C16.2132 11.727 16.272 11.481 16.272 11.5157L20.5501 11.3875V11.3528L16.3411 11.2247C16.3342 11.2662 16.3826 11.0099 16.3999 10.8401L4.22276 11.197C4.19509 11.0861 4.1778 10.9648 4.1605 10.8436L0.0138354 10.7223L0.0138344 11.9972L4.39568 11.869C4.35072 11.7547 4.32651 11.6404 4.29192 11.5226Z M4.82453 12.8945L15.5457 13.2202C15.6252 13.092 15.7428 12.8703 15.7428 12.8841L20.557 12.7386V12.704L15.9088 12.5654C15.9019 12.5723 16.0126 12.3437 16.061 12.2051L4.66889 12.5515C4.61702 12.4511 4.57206 12.3367 4.53056 12.2259L0.0207514 12.0873L0.0207517 13.189C0.0207517 13.2375 0.0207516 13.3068 0.0276685 13.3691L5.00782 13.2236C4.9352 13.1093 4.88332 13.0088 4.82453 12.8945Z M5.83439 14.2872L14.4632 14.547C14.5739 14.45 14.7364 14.2733 14.7364 14.2733L20.4843 14.1001C20.4843 14.0863 20.4947 14.0759 20.4843 14.0655L15.058 13.9027C15.058 13.9027 15.2137 13.7121 15.2967 13.5943L5.47471 13.8923C5.39517 13.7987 5.32946 13.7121 5.26029 13.6082L0.0103738 13.4557C0.0242075 13.8853 0.079544 14.3149 0.172922 14.7203L6.07994 14.5401C5.99693 14.45 5.92085 14.3738 5.83439 14.2872Z M7.9302 15.7145L12.2982 15.8427C12.4158 15.8081 12.6925 15.6903 12.6856 15.6972L20.18 15.472C20.18 15.4582 20.1973 15.4408 20.1973 15.4201L13.602 15.2226C13.602 15.2226 13.8165 15.0771 13.9271 15.0009L6.96184 15.2087C6.86846 15.1498 6.76471 15.0805 6.68171 15.0113L0.224797 14.8138C0.32855 15.2434 0.473805 15.666 0.646727 16.061L8.24492 15.8289C8.12387 15.7908 8.02012 15.7561 7.9302 15.7145Z M19.5748 16.7642L0.670938 16.1961C0.878445 16.6257 1.11016 17.031 1.39375 17.3982L19.5298 16.8578C19.5506 16.8231 19.5644 16.7885 19.5748 16.7642Z M18.5787 18.0877L1.52863 17.568C1.8641 17.9872 2.25144 18.3752 2.663 18.7182L18.4266 18.2401C18.4854 18.195 18.5303 18.1362 18.5787 18.0877Z M5.13924 20L16.3411 19.657C16.5313 19.5704 16.7008 19.4838 16.8841 19.3903L3.00539 18.978C3.64865 19.4353 4.36801 19.7748 5.13924 20Z" fill="rgb(255, 255, 255)"/></svg>',
                                                svgContentId: 9284744883
                                            },
                                            PIJ3ysjk2: {
                                                svg: '<svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.7028 9.16736L32.8257 18.3789H29.9179L26.1548 9.16736H28.4355L31.1437 16.8524H31.7139L34.4222 9.16736H36.7028Z M47.5337 18.3789H45.5381V17.0367L43.8276 18.3789H39.5514C39.0002 18.3789 38.5251 18.2035 38.126 17.8526C37.7459 17.4841 37.5558 17.0455 37.5558 16.5366V14.6943C37.5558 14.1855 37.7459 13.7556 38.126 13.4047C38.5251 13.0362 39.0002 12.852 39.5514 12.852H45.253L43.5425 14.4048H39.5514V16.7998H45.5381V10.7465H37.5558L39.2663 9.16736H45.5381C46.0893 9.16736 46.5549 9.3516 46.935 9.72006C47.3341 10.071 47.5337 10.5008 47.5337 11.0097V18.3789Z M60.0661 18.3789H58.0706V17.063L56.6451 18.3789H52.0838C51.5327 18.3789 51.0576 18.2035 50.6584 17.8526C50.2783 17.4841 50.0883 17.0455 50.0883 16.5366V9.16736H52.0838V16.7998H58.0706V9.16736H60.0661V18.3789Z M64.9192 18.3789H62.9236V4.95636L64.9192 3.11404V18.3789Z M74.3402 18.3789H70.3491C69.7979 18.3789 69.3228 18.2035 68.9237 17.8526C68.5436 17.4841 68.3535 17.0455 68.3535 16.5366V10.7465H65.5027L67.2132 9.16736H68.3535V7.32505L70.3491 5.48273V9.16736H74.3402V10.7465H70.3491V16.7998H74.3402V18.3789Z M75.5933 18.3789V2.30474H85.7707V4.81489H78.7113V9.00616H84.8228V11.4472H78.7113V18.3789H75.5933Z M100 18.3789H96.408L93.0155 12.3684H92.6912L89.3486 18.3789H86.0061L90.97 10.1576L86.2555 2.30474H89.8226L92.9157 7.87774H93.265L96.408 2.30474H99.7506L94.9612 10.1346L100 18.3789Z M16.4103 0.346441L5.05278 0C4.29884 0.221722 3.59678 0.585484 2.96042 1.02893L16.9221 0.602806C16.7527 0.516196 16.5832 0.429586 16.4103 0.346441Z M18.4612 1.76338L2.62842 1.27836C2.20994 1.61441 1.83989 1.99896 1.50442 2.41815L18.6064 1.90889C18.5545 1.87078 18.5096 1.81188 18.4612 1.76338Z M19.5471 3.163L1.36609 2.61216C1.09287 2.98978 0.861152 3.39511 0.653646 3.8247L19.5921 3.25654C19.5713 3.2219 19.5575 3.18725 19.5471 3.163Z M6.9065 4.80859L13.9548 5.01646C13.8441 4.94024 13.73 4.86056 13.6297 4.79473L20.1904 4.59726C20.1904 4.58341 20.1731 4.56608 20.1731 4.5453L12.7409 4.31318C12.7409 4.31318 12.4919 4.20232 12.3639 4.15728L7.8472 4.29586C7.94058 4.25082 8.05125 4.20925 8.155 4.17461L0.612144 3.94942C0.439222 4.34436 0.293967 4.76702 0.200589 5.207L6.63329 5.01992C6.71975 4.93331 6.81313 4.87442 6.9065 4.80859Z M15.0788 6.10774L20.4913 5.94492C20.4913 5.93106 20.4809 5.92066 20.4913 5.91027L14.7641 5.73705C14.6707 5.64351 14.5739 5.54651 14.4909 5.46336L5.80672 5.72319C5.89318 5.63658 5.96927 5.56037 6.05573 5.47376L0.162547 5.29361C0.0760858 5.70587 0.0172921 6.12506 0.00691677 6.56504L5.23954 6.40915C5.30871 6.30521 5.37787 6.22207 5.45396 6.12506L15.3174 6.41607C15.2517 6.31561 15.1687 6.21167 15.0788 6.10774Z M4.64123 7.45886L16.0645 7.80184C16.0195 7.67365 15.9123 7.44154 15.9123 7.44154L20.5535 7.29603V7.26139L15.7601 7.11588C15.7601 7.11588 15.6391 6.8907 15.5699 6.77291L4.81415 7.09856C4.86603 6.99809 4.92482 6.88377 4.98361 6.79023L0.020752 6.64126C0.020752 6.68976 0.0207516 6.74519 0.0138347 6.78676L0.0138356 7.9023L4.50981 7.76373C4.54785 7.67019 4.58935 7.55933 4.64123 7.45886Z M4.21238 8.79612L16.3999 9.16335C16.3826 9.00745 16.3342 8.75108 16.3411 8.7788L20.5501 8.65061V8.61597L16.272 8.48779C16.272 8.50165 16.2132 8.25567 16.1717 8.11017L4.28155 8.47047C4.30922 8.3596 4.34034 8.23835 4.37493 8.12056L0.006917 7.99238L0.0103758 9.26381L4.1605 9.14602C4.17088 9.0317 4.19509 8.91737 4.21238 8.79612Z M16.4553 10.1472L20.5466 10.0191V9.98441L16.4553 9.85623C16.4449 9.72805 16.4449 9.58947 16.4276 9.46821L4.09133 9.84583C4.09133 9.72804 4.10863 9.60679 4.10863 9.48207L0 9.35042L6.91481e-08 10.6253L4.119 10.5041C4.11209 10.3932 4.10171 10.265 4.10171 10.1403L16.4345 10.5214C16.4414 10.3967 16.4449 10.2754 16.4553 10.1472Z M4.29192 11.5226L16.1613 11.8829C16.2132 11.727 16.272 11.481 16.272 11.5157L20.5501 11.3875V11.3528L16.3411 11.2247C16.3342 11.2662 16.3826 11.0099 16.3999 10.8401L4.22276 11.197C4.19509 11.0861 4.1778 10.9648 4.1605 10.8436L0.0138354 10.7223L0.0138344 11.9972L4.39568 11.869C4.35072 11.7547 4.32651 11.6404 4.29192 11.5226Z M4.82453 12.8945L15.5457 13.2202C15.6252 13.092 15.7428 12.8703 15.7428 12.8841L20.557 12.7386V12.704L15.9088 12.5654C15.9019 12.5723 16.0126 12.3437 16.061 12.2051L4.66889 12.5515C4.61702 12.4511 4.57206 12.3367 4.53056 12.2259L0.0207514 12.0873L0.0207517 13.189C0.0207517 13.2375 0.0207516 13.3068 0.0276685 13.3691L5.00782 13.2236C4.9352 13.1093 4.88332 13.0088 4.82453 12.8945Z M5.83439 14.2872L14.4632 14.547C14.5739 14.45 14.7364 14.2733 14.7364 14.2733L20.4843 14.1001C20.4843 14.0863 20.4947 14.0759 20.4843 14.0655L15.058 13.9027C15.058 13.9027 15.2137 13.7121 15.2967 13.5943L5.47471 13.8923C5.39517 13.7987 5.32946 13.7121 5.26029 13.6082L0.0103738 13.4557C0.0242075 13.8853 0.079544 14.3149 0.172922 14.7203L6.07994 14.5401C5.99693 14.45 5.92085 14.3738 5.83439 14.2872Z M7.9302 15.7145L12.2982 15.8427C12.4158 15.8081 12.6925 15.6903 12.6856 15.6972L20.18 15.472C20.18 15.4582 20.1973 15.4408 20.1973 15.4201L13.602 15.2226C13.602 15.2226 13.8165 15.0771 13.9271 15.0009L6.96184 15.2087C6.86846 15.1498 6.76471 15.0805 6.68171 15.0113L0.224797 14.8138C0.32855 15.2434 0.473805 15.666 0.646727 16.061L8.24492 15.8289C8.12387 15.7908 8.02012 15.7561 7.9302 15.7145Z M19.5748 16.7642L0.670938 16.1961C0.878445 16.6257 1.11016 17.031 1.39375 17.3982L19.5298 16.8578C19.5506 16.8231 19.5644 16.7885 19.5748 16.7642Z M18.5787 18.0877L1.52863 17.568C1.8641 17.9872 2.25144 18.3752 2.663 18.7182L18.4266 18.2401C18.4854 18.195 18.5303 18.1362 18.5787 18.0877Z M5.13924 20L16.3411 19.657C16.5313 19.5704 16.7008 19.4838 16.8841 19.3903L3.00539 18.978C3.64865 19.4353 4.36801 19.7748 5.13924 20Z" fill="rgb(0, 0, 0)"/></svg>',
                                                svgContentId: 8800377506
                                            },
                                            rsJejvZnf: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 20"><path d="M 9.857 4.859 C 12.664 4.859 14.909 7.144 14.909 10 C 14.909 12.856 12.664 15.141 9.857 15.141 C 7.05 15.141 4.804 12.856 4.804 10 C 4.804 7.144 7.05 4.859 9.857 4.859 Z M 9.857 18.461 C 14.453 18.461 18.172 14.677 18.172 10 C 18.172 5.323 14.453 1.538 9.857 1.538 C 5.26 1.538 1.541 5.323 1.541 10 C 1.541 14.677 5.26 18.461 9.857 18.461 Z M 89.196 18.461 L 89.196 10.018 C 89.196 7.168 86.95 4.852 84.143 4.852 C 81.336 4.852 79.091 7.168 79.091 10.018 L 79.091 18.461 L 75.828 18.461 L 75.828 10.018 C 75.828 5.351 79.547 1.538 84.143 1.538 C 88.74 1.538 92.459 5.351 92.459 10.018 L 92.459 18.461 Z M 73.056 10.018 L 73.056 18.461 L 69.793 18.461 L 69.793 16.716 L 69.793 10.018 C 69.793 7.168 67.547 4.852 64.74 4.852 C 61.933 4.852 59.688 7.168 59.688 10.018 C 59.688 12.832 61.933 15.148 64.74 15.148 L 64.74 18.461 C 60.144 18.461 56.424 14.685 56.424 10.018 C 56.424 5.351 60.144 1.539 64.74 1.539 C 69.337 1.539 73.056 5.351 73.056 10.018 Z M 50.32 8.581 L 40.321 8.581 C 40.927 6.359 42.947 4.718 45.337 4.718 C 47.727 4.718 49.714 6.359 50.32 8.581 Z M 40.455 11.761 L 50.219 11.761 L 53.451 11.761 C 53.585 11.214 53.653 10.598 53.653 10.017 C 53.653 5.333 49.916 1.539 45.337 1.539 C 40.725 1.539 37.021 5.333 37.021 10.017 C 37.021 14.667 40.725 18.461 45.337 18.461 C 48.838 18.461 51.835 16.239 53.047 13.128 L 49.511 13.128 C 48.569 14.427 47.054 15.282 45.337 15.282 C 43.081 15.282 41.162 13.812 40.455 11.761 Z M 21.499 1.539 C 21.192 1.539 20.944 1.791 20.944 2.103 L 20.944 4.359 C 20.944 4.671 21.192 4.923 21.499 4.923 L 30.369 4.923 C 30.675 4.923 30.923 4.671 30.923 4.359 L 30.923 2.103 C 30.923 1.791 30.675 1.539 30.369 1.539 Z M 31.477 4.923 C 31.171 4.923 30.923 5.176 30.923 5.487 L 30.923 7.747 C 30.923 8.058 31.171 8.311 31.477 8.311 L 33.695 8.311 C 34.001 8.311 34.249 8.058 34.249 7.747 L 34.249 5.487 C 34.249 5.176 34.001 4.923 33.695 4.923 Z M 21.499 11.692 C 21.192 11.692 20.944 11.945 20.944 12.256 L 20.944 14.513 C 20.944 14.824 21.192 15.077 21.499 15.077 L 23.716 15.077 C 24.022 15.077 24.27 14.824 24.27 14.513 L 24.27 12.256 C 24.27 11.945 24.022 11.692 23.716 11.692 Z M 25.934 8.872 C 25.934 8.56 26.182 8.308 26.488 8.308 L 28.706 8.308 C 29.012 8.308 29.26 8.56 29.26 8.872 L 29.26 11.128 C 29.26 11.44 29.012 11.692 28.706 11.692 L 26.488 11.692 C 26.182 11.692 25.934 11.44 25.934 11.128 Z M 24.825 15.077 C 24.519 15.077 24.27 15.33 24.27 15.641 L 24.27 17.897 C 24.27 18.209 24.519 18.462 24.825 18.462 L 33.695 18.462 C 34.001 18.462 34.249 18.209 34.249 17.897 L 34.249 15.641 C 34.249 15.33 34.001 15.077 33.695 15.077 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                                svgContentId: 9284744883
                                            },
                                            sBp8DQVFI: {
                                                svg: '<svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.0434 11.0008L39.3909 22.0547H35.9015L31.3858 11.0008H34.1225L37.3725 20.2229H38.0567L41.3066 11.0008H44.0434Z M57.0404 22.0547H54.6457V20.444L52.5931 22.0547H47.4617C46.8003 22.0547 46.2301 21.8442 45.7512 21.4231C45.2951 20.9809 45.067 20.4545 45.067 19.8439V17.6332C45.067 17.0226 45.2951 16.5067 45.7512 16.0856C46.2301 15.6435 46.8003 15.4224 47.4617 15.4224H54.3036L52.251 17.2858H47.4617V20.1598H54.6457V12.8958H45.067L47.1196 11.0008H54.6457C55.3071 11.0008 55.8659 11.2219 56.322 11.6641C56.8009 12.0852 57.0404 12.601 57.0404 13.2116V22.0547Z M72.0793 22.0547H69.6847V20.4756L67.9742 22.0547H62.5006C61.8392 22.0547 61.2691 21.8442 60.7901 21.4231C60.334 20.9809 60.1059 20.4545 60.1059 19.8439V11.0008H62.5006V20.1598H69.6847V11.0008H72.0793V22.0547Z M77.903 22.0547H75.5083V5.94763L77.903 3.73685V22.0547Z M89.2083 22.0547H84.4189C83.7575 22.0547 83.1874 21.8442 82.7084 21.4231C82.2523 20.9809 82.0242 20.4545 82.0242 19.8439V12.8958H78.6032L80.6558 11.0008H82.0242V8.79006L84.4189 6.57928V11.0008H89.2083V12.8958H84.4189V20.1598H89.2083V22.0547Z M90.7119 22.0547V2.76569H102.925V5.77787H94.4536V10.8074H101.787V13.7367H94.4536V22.0547H90.7119Z M120 22.0547H115.69L111.619 14.8421H111.229L107.218 22.0547H103.207L109.164 12.1891L103.507 2.76569H107.787L111.499 9.45329H111.918L115.69 2.76569H119.701L113.953 12.1615L120 22.0547Z M19.6924 0.415729L6.06334 0C5.15861 0.266066 4.31613 0.702581 3.55251 1.23471L20.3066 0.723367C20.1032 0.619435 19.8999 0.515504 19.6924 0.415729Z M22.1534 2.11606L3.1541 1.53404C2.65193 1.93729 2.20787 2.39875 1.80531 2.90178L22.3277 2.29066C22.2654 2.24493 22.2115 2.17426 22.1534 2.11606Z M23.4565 3.7956L1.6393 3.13459C1.31144 3.58773 1.03338 4.07414 0.784375 4.58964L23.5105 3.90785C23.4856 3.86627 23.469 3.8247 23.4565 3.7956Z M8.28781 5.77031L16.7458 6.01975C16.613 5.92829 16.476 5.83267 16.3557 5.75368L24.2284 5.51672C24.2284 5.50009 24.2077 5.4793 24.2077 5.45436L15.2891 5.17582C15.2891 5.17582 14.9903 5.04279 14.8367 4.98874L9.41664 5.15503C9.52869 5.10099 9.6615 5.0511 9.786 5.00953L0.734572 4.7393C0.527066 5.21323 0.35276 5.72042 0.240707 6.2484L7.95994 6.0239C8.0637 5.91997 8.17575 5.8493 8.28781 5.77031Z M18.0946 7.32929L24.5895 7.1339C24.5895 7.11727 24.5771 7.1048 24.5895 7.09233L17.7169 6.88446C17.6048 6.77222 17.4886 6.65581 17.389 6.55604L6.96806 6.86783C7.07182 6.7639 7.16312 6.67244 7.26687 6.56851L0.195056 6.35233C0.0913029 6.84705 0.0207505 7.35008 0.00830012 7.87805L6.28744 7.69098C6.37045 7.56626 6.45345 7.46648 6.54475 7.35008L18.3809 7.69929C18.3021 7.57873 18.2025 7.45401 18.0946 7.32929Z M5.56947 8.95063L19.2773 9.3622C19.2234 9.20838 19.0947 8.92984 19.0947 8.92984L24.6642 8.75524V8.71367L18.9121 8.53906C18.9121 8.53906 18.7669 8.26884 18.6839 8.12749L5.77698 8.51827C5.83923 8.39771 5.90978 8.26052 5.98034 8.14827L0.0249024 7.96951C0.0249024 8.02771 0.0249019 8.09423 0.0166017 8.14412L0.0166027 9.48276L5.41177 9.31647C5.45742 9.20422 5.50722 9.07119 5.56947 8.95063Z M5.05486 10.5553L19.6799 10.996C19.6592 10.8089 19.6011 10.5013 19.6094 10.5346L24.6601 10.3807V10.3392L19.5264 10.1853C19.5264 10.202 19.4558 9.90681 19.406 9.7322L5.13786 10.1646C5.17106 10.0315 5.20841 9.88602 5.24991 9.74467L0.0083004 9.59085L0.0124509 11.1166L4.9926 10.9752C5.00505 10.838 5.03411 10.7008 5.05486 10.5553Z M19.7463 12.1767L24.6559 12.0229V11.9813L19.7463 11.8275C19.7339 11.6737 19.7339 11.5074 19.7131 11.3619L4.9096 11.815C4.9096 11.6737 4.93035 11.5281 4.93035 11.3785L0 11.2205L8.29777e-08 12.7504L4.9428 12.6049C4.9345 12.4719 4.92205 12.318 4.92205 12.1684L19.7214 12.6257C19.7297 12.476 19.7339 12.3305 19.7463 12.1767Z M5.15031 13.8271L19.3935 14.2595C19.4558 14.0724 19.5264 13.7772 19.5264 13.8188L24.6601 13.665V13.6234L19.6094 13.4696C19.6011 13.5195 19.6592 13.2118 19.6799 13.0081L5.06731 13.4363C5.03411 13.3033 5.01336 13.1578 4.99261 13.0123L0.0166025 12.8668L0.0166013 14.3967L5.27481 14.2429C5.22086 14.1057 5.19181 13.9685 5.15031 13.8271Z M5.78943 15.4734L18.6548 15.8642C18.7503 15.7104 18.8914 15.4443 18.8914 15.4609L24.6684 15.2863V15.2448L19.0906 15.0785C19.0823 15.0868 19.2151 14.8124 19.2732 14.6461L5.60267 15.0618C5.54042 14.9413 5.48647 14.8041 5.43667 14.6711L0.0249017 14.5048L0.0249021 15.8268C0.0249021 15.885 0.0249019 15.9681 0.0332022 16.043L6.00939 15.8683C5.92223 15.7312 5.85998 15.6106 5.78943 15.4734Z M7.00127 17.1446L17.3558 17.4564C17.4886 17.34 17.6837 17.128 17.6837 17.128L24.5812 16.9201C24.5812 16.9035 24.5937 16.891 24.5812 16.8786L18.0697 16.6832C18.0697 16.6832 18.2564 16.4545 18.356 16.3132L6.56965 16.6707C6.4742 16.5585 6.39535 16.4545 6.31234 16.3298L0.0124486 16.1469C0.0290491 16.6624 0.0954528 17.1779 0.207506 17.6643L7.29592 17.4481C7.19632 17.34 7.10502 17.2486 7.00127 17.1446Z M9.51624 18.8574L14.7579 19.0113C14.899 18.9697 15.231 18.8283 15.2227 18.8367L24.216 18.5664C24.216 18.5498 24.2367 18.529 24.2367 18.5041L16.3225 18.2671C16.3225 18.2671 16.5798 18.0925 16.7126 18.001L8.35421 18.2505C8.24215 18.1798 8.11765 18.0967 8.01805 18.0135L0.269756 17.7765C0.39426 18.292 0.568566 18.7992 0.776072 19.2732L9.8939 18.9946C9.74865 18.9489 9.62414 18.9073 9.51624 18.8574Z M23.4897 20.1171L0.805126 19.4353C1.05413 19.9508 1.33219 20.4372 1.6725 20.8779L23.4358 20.2293C23.4607 20.1878 23.4773 20.1462 23.4897 20.1171Z M22.2945 21.7052L1.83436 21.0816C2.23692 21.5846 2.70173 22.0502 3.1956 22.4618L22.1119 21.8881C22.1824 21.8341 22.2364 21.7634 22.2945 21.7052Z M6.16709 24L19.6094 23.5884C19.8376 23.4845 20.041 23.3806 20.2609 23.2683L3.60646 22.7736C4.37839 23.3224 5.24161 23.7298 6.16709 24Z" fill="rgb(0, 0, 0)"/></svg>',
                                                svgContentId: 12147505915
                                            },
                                            wvMo1QZOr: {
                                                svg: '<svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.7028 9.16736L32.8257 18.3789H29.9179L26.1548 9.16736H28.4355L31.1437 16.8524H31.7139L34.4222 9.16736H36.7028Z M47.5337 18.3789H45.5381V17.0367L43.8276 18.3789H39.5514C39.0002 18.3789 38.5251 18.2035 38.126 17.8526C37.7459 17.4841 37.5558 17.0455 37.5558 16.5366V14.6943C37.5558 14.1855 37.7459 13.7556 38.126 13.4047C38.5251 13.0362 39.0002 12.852 39.5514 12.852H45.253L43.5425 14.4048H39.5514V16.7998H45.5381V10.7465H37.5558L39.2663 9.16736H45.5381C46.0893 9.16736 46.5549 9.3516 46.935 9.72006C47.3341 10.071 47.5337 10.5008 47.5337 11.0097V18.3789Z M60.0661 18.3789H58.0706V17.063L56.6451 18.3789H52.0838C51.5327 18.3789 51.0576 18.2035 50.6584 17.8526C50.2783 17.4841 50.0883 17.0455 50.0883 16.5366V9.16736H52.0838V16.7998H58.0706V9.16736H60.0661V18.3789Z M64.9192 18.3789H62.9236V4.95636L64.9192 3.11404V18.3789Z M74.3402 18.3789H70.3491C69.7979 18.3789 69.3228 18.2035 68.9237 17.8526C68.5436 17.4841 68.3535 17.0455 68.3535 16.5366V10.7465H65.5027L67.2132 9.16736H68.3535V7.32505L70.3491 5.48273V9.16736H74.3402V10.7465H70.3491V16.7998H74.3402V18.3789Z M75.5933 18.3789V2.30474H85.7707V4.81489H78.7113V9.00616H84.8228V11.4472H78.7113V18.3789H75.5933Z M100 18.3789H96.408L93.0155 12.3684H92.6912L89.3486 18.3789H86.0061L90.97 10.1576L86.2555 2.30474H89.8226L92.9157 7.87774H93.265L96.408 2.30474H99.7506L94.9612 10.1346L100 18.3789Z M16.4103 0.346441L5.05278 0C4.29884 0.221722 3.59678 0.585484 2.96042 1.02893L16.9221 0.602806C16.7527 0.516196 16.5832 0.429586 16.4103 0.346441Z M18.4612 1.76338L2.62842 1.27836C2.20994 1.61441 1.83989 1.99896 1.50442 2.41815L18.6064 1.90889C18.5545 1.87078 18.5096 1.81188 18.4612 1.76338Z M19.5471 3.163L1.36609 2.61216C1.09287 2.98978 0.861152 3.39511 0.653646 3.8247L19.5921 3.25654C19.5713 3.2219 19.5575 3.18725 19.5471 3.163Z M6.9065 4.80859L13.9548 5.01646C13.8441 4.94024 13.73 4.86056 13.6297 4.79473L20.1904 4.59726C20.1904 4.58341 20.1731 4.56608 20.1731 4.5453L12.7409 4.31318C12.7409 4.31318 12.4919 4.20232 12.3639 4.15728L7.8472 4.29586C7.94058 4.25082 8.05125 4.20925 8.155 4.17461L0.612144 3.94942C0.439222 4.34436 0.293967 4.76702 0.200589 5.207L6.63329 5.01992C6.71975 4.93331 6.81313 4.87442 6.9065 4.80859Z M15.0788 6.10774L20.4913 5.94492C20.4913 5.93106 20.4809 5.92066 20.4913 5.91027L14.7641 5.73705C14.6707 5.64351 14.5739 5.54651 14.4909 5.46336L5.80672 5.72319C5.89318 5.63658 5.96927 5.56037 6.05573 5.47376L0.162547 5.29361C0.0760858 5.70587 0.0172921 6.12506 0.00691677 6.56504L5.23954 6.40915C5.30871 6.30521 5.37787 6.22207 5.45396 6.12506L15.3174 6.41607C15.2517 6.31561 15.1687 6.21167 15.0788 6.10774Z M4.64123 7.45886L16.0645 7.80184C16.0195 7.67365 15.9123 7.44154 15.9123 7.44154L20.5535 7.29603V7.26139L15.7601 7.11588C15.7601 7.11588 15.6391 6.8907 15.5699 6.77291L4.81415 7.09856C4.86603 6.99809 4.92482 6.88377 4.98361 6.79023L0.020752 6.64126C0.020752 6.68976 0.0207516 6.74519 0.0138347 6.78676L0.0138356 7.9023L4.50981 7.76373C4.54785 7.67019 4.58935 7.55933 4.64123 7.45886Z M4.21238 8.79612L16.3999 9.16335C16.3826 9.00745 16.3342 8.75108 16.3411 8.7788L20.5501 8.65061V8.61597L16.272 8.48779C16.272 8.50165 16.2132 8.25567 16.1717 8.11017L4.28155 8.47047C4.30922 8.3596 4.34034 8.23835 4.37493 8.12056L0.006917 7.99238L0.0103758 9.26381L4.1605 9.14602C4.17088 9.0317 4.19509 8.91737 4.21238 8.79612Z M16.4553 10.1472L20.5466 10.0191V9.98441L16.4553 9.85623C16.4449 9.72805 16.4449 9.58947 16.4276 9.46821L4.09133 9.84583C4.09133 9.72804 4.10863 9.60679 4.10863 9.48207L0 9.35042L6.91481e-08 10.6253L4.119 10.5041C4.11209 10.3932 4.10171 10.265 4.10171 10.1403L16.4345 10.5214C16.4414 10.3967 16.4449 10.2754 16.4553 10.1472Z M4.29192 11.5226L16.1613 11.8829C16.2132 11.727 16.272 11.481 16.272 11.5157L20.5501 11.3875V11.3528L16.3411 11.2247C16.3342 11.2662 16.3826 11.0099 16.3999 10.8401L4.22276 11.197C4.19509 11.0861 4.1778 10.9648 4.1605 10.8436L0.0138354 10.7223L0.0138344 11.9972L4.39568 11.869C4.35072 11.7547 4.32651 11.6404 4.29192 11.5226Z M4.82453 12.8945L15.5457 13.2202C15.6252 13.092 15.7428 12.8703 15.7428 12.8841L20.557 12.7386V12.704L15.9088 12.5654C15.9019 12.5723 16.0126 12.3437 16.061 12.2051L4.66889 12.5515C4.61702 12.4511 4.57206 12.3367 4.53056 12.2259L0.0207514 12.0873L0.0207517 13.189C0.0207517 13.2375 0.0207516 13.3068 0.0276685 13.3691L5.00782 13.2236C4.9352 13.1093 4.88332 13.0088 4.82453 12.8945Z M5.83439 14.2872L14.4632 14.547C14.5739 14.45 14.7364 14.2733 14.7364 14.2733L20.4843 14.1001C20.4843 14.0863 20.4947 14.0759 20.4843 14.0655L15.058 13.9027C15.058 13.9027 15.2137 13.7121 15.2967 13.5943L5.47471 13.8923C5.39517 13.7987 5.32946 13.7121 5.26029 13.6082L0.0103738 13.4557C0.0242075 13.8853 0.079544 14.3149 0.172922 14.7203L6.07994 14.5401C5.99693 14.45 5.92085 14.3738 5.83439 14.2872Z M7.9302 15.7145L12.2982 15.8427C12.4158 15.8081 12.6925 15.6903 12.6856 15.6972L20.18 15.472C20.18 15.4582 20.1973 15.4408 20.1973 15.4201L13.602 15.2226C13.602 15.2226 13.8165 15.0771 13.9271 15.0009L6.96184 15.2087C6.86846 15.1498 6.76471 15.0805 6.68171 15.0113L0.224797 14.8138C0.32855 15.2434 0.473805 15.666 0.646727 16.061L8.24492 15.8289C8.12387 15.7908 8.02012 15.7561 7.9302 15.7145Z M19.5748 16.7642L0.670938 16.1961C0.878445 16.6257 1.11016 17.031 1.39375 17.3982L19.5298 16.8578C19.5506 16.8231 19.5644 16.7885 19.5748 16.7642Z M18.5787 18.0877L1.52863 17.568C1.8641 17.9872 2.25144 18.3752 2.663 18.7182L18.4266 18.2401C18.4854 18.195 18.5303 18.1362 18.5787 18.0877Z M5.13924 20L16.3411 19.657C16.5313 19.5704 16.7008 19.4838 16.8841 19.3903L3.00539 18.978C3.64865 19.4353 4.36801 19.7748 5.13924 20Z" fill="rgb(255, 255, 255)"></path></svg>',
                                                svgContentId: 9284744883
                                            }
                                        }, m, d)
                                    })
                                })
                            }), R(s.div, {
                                className: "framer-hc9zup",
                                "data-framer-name": "Links",
                                layoutDependency: c,
                                layoutId: "tF308oBh6",
                                transformTemplate: _r,
                                ...Q({
                                    Gk7a0jnRd: {
                                        transformTemplate: void 0
                                    },
                                    PIJ3ysjk2: {
                                        transformTemplate: void 0
                                    },
                                    rsJejvZnf: {
                                        transformTemplate: void 0
                                    },
                                    wvMo1QZOr: {
                                        transformTemplate: void 0
                                    }
                                }, m, d),
                                children: [e(s.div, {
                                    className: "framer-roa447",
                                    "data-framer-name": "Link + Icon",
                                    layoutDependency: c,
                                    layoutId: "rpKjIjvtZ",
                                    children: e(ge, {
                                        links: [{
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":k_Yqzzj2J",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: w => e(k, {
                                            height: 22,
                                            y: (a?.y || 0) + (24 + ((a?.height || 64) - 48 - 0) / 2) + -11 + 0 + 0,
                                            ...Q({
                                                Gk7a0jnRd: {
                                                    y: (a?.y || 0) + 4 + 64 + 0 + 0 + 0
                                                },
                                                PIJ3ysjk2: {
                                                    y: (a?.y || 0) + 4 + 64 + 0 + 0 + 0
                                                },
                                                rsJejvZnf: {
                                                    y: (a?.y || 0) + (0 + ((a?.height || 56) - 0 - 0) / 2) + 64 + 0 + 0 + 0
                                                },
                                                wvMo1QZOr: {
                                                    y: (a?.y || 0) + 4 + 80 + 0 + 0 + 0
                                                }
                                            }, m, d),
                                            children: e(B, {
                                                className: "framer-1mf0swa-container",
                                                layoutDependency: c,
                                                layoutId: "NUoW13CUL-container",
                                                nodeId: "NUoW13CUL",
                                                rendersWithMotion: !0,
                                                scopeId: "ErUG9kIkR",
                                                children: e(N, {
                                                    height: "100%",
                                                    id: "NUoW13CUL",
                                                    j4rGAQlsA: "rgb(255, 255, 255)",
                                                    jQJZIhVdX: w[0],
                                                    k8auuk0mY: "rgba(255, 255, 255, 0.8)",
                                                    layoutId: "NUoW13CUL",
                                                    tJMuU5vK4: !0,
                                                    variant: "Rxioy4Pm3",
                                                    VKzWGEV7h: !1,
                                                    width: "100%",
                                                    yNXUemuGw: "Home",
                                                    ...Q({
                                                        Gk7a0jnRd: {
                                                            jQJZIhVdX: w[3]
                                                        },
                                                        PIJ3ysjk2: {
                                                            jQJZIhVdX: w[4]
                                                        },
                                                        rsJejvZnf: {
                                                            jQJZIhVdX: w[6]
                                                        },
                                                        sBp8DQVFI: {
                                                            j4rGAQlsA: "rgb(0, 0, 0)",
                                                            jQJZIhVdX: w[1],
                                                            k8auuk0mY: "rgb(0, 0, 0)"
                                                        },
                                                        wvMo1QZOr: {
                                                            jQJZIhVdX: w[5],
                                                            variant: "MRoHUgPaI"
                                                        },
                                                        ZqrEFyc47: {
                                                            jQJZIhVdX: w[2],
                                                            variant: "MRoHUgPaI"
                                                        }
                                                    }, m, d)
                                                })
                                            })
                                        })
                                    })
                                }), e(s.div, {
                                    className: "framer-akrdkx",
                                    "data-framer-name": "Link + Icon",
                                    layoutDependency: c,
                                    layoutId: "tfT5Q3j_X",
                                    children: e(ge, {
                                        links: [{
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: ":OiUQ3vq90",
                                                webPageId: "xJq_mmwcR"
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: w => e(k, {
                                            height: 22,
                                            y: (a?.y || 0) + (24 + ((a?.height || 64) - 48 - 0) / 2) + -11 + 0 + 0,
                                            ...Q({
                                                Gk7a0jnRd: {
                                                    y: (a?.y || 0) + 4 + 64 + 0 + 30 + 0
                                                },
                                                PIJ3ysjk2: {
                                                    y: (a?.y || 0) + 4 + 64 + 0 + 30 + 0
                                                },
                                                rsJejvZnf: {
                                                    y: (a?.y || 0) + (0 + ((a?.height || 56) - 0 - 0) / 2) + 64 + 0 + 30 + 0
                                                },
                                                wvMo1QZOr: {
                                                    y: (a?.y || 0) + 4 + 80 + 0 + 46 + 0
                                                }
                                            }, m, d),
                                            children: e(B, {
                                                className: "framer-1538jds-container",
                                                layoutDependency: c,
                                                layoutId: "hn7CEtjM_-container",
                                                nodeId: "hn7CEtjM_",
                                                rendersWithMotion: !0,
                                                scopeId: "ErUG9kIkR",
                                                children: e(N, {
                                                    height: "100%",
                                                    id: "hn7CEtjM_",
                                                    j4rGAQlsA: "rgb(255, 255, 255)",
                                                    jQJZIhVdX: w[0],
                                                    k8auuk0mY: "rgba(255, 255, 255, 0.8)",
                                                    layoutId: "hn7CEtjM_",
                                                    tJMuU5vK4: !0,
                                                    variant: "Rxioy4Pm3",
                                                    VKzWGEV7h: !1,
                                                    width: "100%",
                                                    yNXUemuGw: "About",
                                                    ...Q({
                                                        Gk7a0jnRd: {
                                                            jQJZIhVdX: w[3]
                                                        },
                                                        PIJ3ysjk2: {
                                                            jQJZIhVdX: w[4]
                                                        },
                                                        rsJejvZnf: {
                                                            jQJZIhVdX: w[6]
                                                        },
                                                        sBp8DQVFI: {
                                                            j4rGAQlsA: "rgb(0, 0, 0)",
                                                            jQJZIhVdX: w[1],
                                                            k8auuk0mY: "rgb(0, 0, 0)"
                                                        },
                                                        wvMo1QZOr: {
                                                            jQJZIhVdX: w[5],
                                                            variant: "MRoHUgPaI"
                                                        },
                                                        ZqrEFyc47: {
                                                            jQJZIhVdX: w[2],
                                                            variant: "MRoHUgPaI"
                                                        }
                                                    }, m, d)
                                                })
                                            })
                                        })
                                    })
 
  
                                }), e(s.div, {
                                    className: "framer-fm3rni",
                                    "data-framer-name": "Link + Icon",
                                    layoutDependency: c,
                                    layoutId: "x4KCH_YXt",
                                    children: e(k, {
                                        height: 22,
                                        y: (a?.y || 0) + (24 + ((a?.height || 64) - 48 - 0) / 2) + -11 + 0 + 0,
                                        ...Q({
                                            Gk7a0jnRd: {
                                                y: (a?.y || 0) + 4 + 64 + 0 + 120 + 0
                                            },
                                            PIJ3ysjk2: {
                                                y: (a?.y || 0) + 4 + 64 + 0 + 120 + 0
                                            },
                                            rsJejvZnf: {
                                                y: (a?.y || 0) + (0 + ((a?.height || 56) - 0 - 0) / 2) + 64 + 0 + 120 + 0
                                            },
                                            wvMo1QZOr: {
                                                y: (a?.y || 0) + 4 + 80 + 0 + 184 + 0
                                            }
                                        }, m, d),
                                        children: e(B, {
                                            className: "framer-wmw17r-container",
                                            layoutDependency: c,
                                            layoutId: "CsSv9EeF6-container",
                                            nodeId: "CsSv9EeF6",
                                            rendersWithMotion: !0,
                                            scopeId: "ErUG9kIkR",
                                            children: e(N, {
                                                height: "100%",
                                                id: "CsSv9EeF6",
                                                j4rGAQlsA: "rgb(255, 255, 255)",
                                                jQJZIhVdX: "mailto:info@ozean.finance",
                                                k8auuk0mY: "rgba(255, 255, 255, 0.8)",
                                                layoutId: "CsSv9EeF6",
                                                tJMuU5vK4: !0,
                                                variant: "Rxioy4Pm3",
                                                VKzWGEV7h: !1,
                                                width: "100%",
                                                yNXUemuGw: "Contact",
                                                ...Q({
                                                    sBp8DQVFI: {
                                                        j4rGAQlsA: "rgb(0, 0, 0)",
                                                        k8auuk0mY: "rgb(0, 0, 0)"
                                                    },
                                                    ZqrEFyc47: {
                                                        variant: "MRoHUgPaI"
                                                    }
                                                }, m, d)
                                            })
                                        })
                                    })
                                })]
                            }), ie() && R(s.div, {
                                className: "framer-1gjx95n",
                                "data-framer-name": "Menu Mobile",
                                layoutDependency: c,
                                layoutId: "ZV9BcD23h",
                                style: {
                                    rotate: 0
                                },
                                variants: {
                                    rsJejvZnf: {
                                        rotate: 0
                                    },
                                    wvMo1QZOr: {
                                        rotate: 45
                                    }
                                },
                                ...Q({
                                    Gk7a0jnRd: {
                                        "data-highlight": !0,
                                        onTap: W
                                    },
                                    PIJ3ysjk2: {
                                        "data-highlight": !0,
                                        onTap: W
                                    },
                                    rsJejvZnf: {
                                        "data-highlight": !0,
                                        onTap: W
                                    },
                                    wvMo1QZOr: {
                                        "data-highlight": !0,
                                        onTap: q
                                    }
                                }, m, d),
                                children: [ie() && e(s.div, {
                                    className: "framer-1jinlzi",
                                    layoutDependency: c,
                                    layoutId: "CwxPFq60T",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    },
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-1e8mfs0",
                                    layoutDependency: c,
                                    layoutId: "ZlB_lUpZ2",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        opacity: 1
                                    },
                                    transformTemplate: Jr,
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        },
                                        rsJejvZnf: {
                                            opacity: 1
                                        },
                                        wvMo1QZOr: {
                                            opacity: 0
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-133bns6",
                                    layoutDependency: c,
                                    layoutId: "vnesbihUs",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    },
                                    transformTemplate: _r,
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-ximdmb",
                                    layoutDependency: c,
                                    layoutId: "pldXS9GPg",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    },
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-1dy1q68",
                                    layoutDependency: c,
                                    layoutId: "ma1VRkPgH",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        opacity: 1
                                    },
                                    transformTemplate: Ir,
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        },
                                        rsJejvZnf: {
                                            opacity: 1
                                        },
                                        wvMo1QZOr: {
                                            opacity: 0
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-10lbrx6",
                                    layoutDependency: c,
                                    layoutId: "rs4OU7ytn",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        opacity: 1
                                    },
                                    transformTemplate: Ir,
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        },
                                        rsJejvZnf: {
                                            opacity: 1
                                        },
                                        wvMo1QZOr: {
                                            opacity: 0
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-12a1urg",
                                    layoutDependency: c,
                                    layoutId: "A3ApJKBpA",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    },
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-x195vn",
                                    layoutDependency: c,
                                    layoutId: "Lfi8oxNF7",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        opacity: 1
                                    },
                                    transformTemplate: Jr,
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        },
                                        rsJejvZnf: {
                                            opacity: 1
                                        },
                                        wvMo1QZOr: {
                                            opacity: 0
                                        }
                                    }
                                }), e(s.div, {
                                    className: "framer-xhunol",
                                    layoutDependency: c,
                                    layoutId: "vqpeeftAF",
                                    style: {
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    },
                                    variants: {
                                        PIJ3ysjk2: {
                                            backgroundColor: "rgb(0, 0, 0)"
                                        }
                                    }
                                })]
                            }), e(k, {
                                height: 44,
                                y: (a?.y || 0) + (24 + ((a?.height || 64) - 48 - 0) / 2) + -22,
                                ...Q({
                                    Gk7a0jnRd: {
                                        width: `min(${a?.width||"100vw"} * 0.9385, 1552px)`,
                                        y: (a?.y || 0) + 4 + -22
                                    },
                                    PIJ3ysjk2: {
                                        width: `min(${a?.width||"100vw"} * 0.9385, 1552px)`,
                                        y: (a?.y || 0) + 4 + -22
                                    },
                                    rsJejvZnf: {
                                        width: `min(${a?.width||"100vw"} - 16px, 1552px)`,
                                        y: (a?.y || 0) + (0 + ((a?.height || 56) - 0 - 0) / 2) + -22
                                    },
                                    wvMo1QZOr: {
                                        width: `min(${a?.width||"100vw"} * 0.9385, 1552px)`,
                                        y: (a?.y || 0) + 4 + 0 - -324
                                    }
                                }, m, d),
                                children: e(B, {
                                    className: "framer-1twkisw-container",
                                    layoutDependency: c,
                                    layoutId: "U22JmU3Zv-container",
                                    nodeId: "U22JmU3Zv",
                                    rendersWithMotion: !0,
                                    scopeId: "ErUG9kIkR",
                                    transformTemplate: Ir,
                                    ...Q({
                                        Gk7a0jnRd: {
                                            transformTemplate: void 0
                                        },
                                        PIJ3ysjk2: {
                                            transformTemplate: void 0
                                        },
                                        rsJejvZnf: {
                                            transformTemplate: void 0
                                        },
                                        wvMo1QZOr: {
                                            transformTemplate: void 0
                                        }
                                    }, m, d),
                                    children: e(kr, {
                                        C2KktBOrF: "rgb(0, 0, 0)",
                                        f8o4yitr5: "rgb(255, 255, 255)",
                                        height: "100%",
                                        id: "U22JmU3Zv",
                                        JUgooHRE7: "rgb(255, 255, 255)",
                                        layoutId: "U22JmU3Zv",
                                        NCB7NePzH: "Contact Us",
                                        O76k0m1VG: "rgb(255, 255, 255)",
                                        style: {
                                            height: "100%"
                                        },
                                        variant: "aVQhnrdxV",
                                        width: "100%",
                                        WvVe0JxPX: "arrow-up-right",
                                        WwqjDfMe_: "rgb(0, 0, 0)",
                                        xLFmzFpQN: "app.ozean.finance",
                                        YS1hVnYbg: !0,
                                        ...Q({
                                            Gk7a0jnRd: {
                                                f8o4yitr5: "rgb(0, 0, 0)",
                                                O76k0m1VG: "rgb(0, 0, 0)",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                WwqjDfMe_: "rgb(255, 255, 255)"
                                            },
                                            PIJ3ysjk2: {
                                                f8o4yitr5: "rgb(0, 0, 0)",
                                                O76k0m1VG: "rgb(0, 0, 0)",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                WwqjDfMe_: "rgb(255, 255, 255)"
                                            },
                                            rsJejvZnf: {
                                                f8o4yitr5: "rgb(0, 0, 0)",
                                                O76k0m1VG: "rgb(0, 0, 0)",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                WwqjDfMe_: "rgb(255, 255, 255)"
                                            },
                                            wvMo1QZOr: {
                                                f8o4yitr5: "rgb(0, 0, 0)",
                                                O76k0m1VG: "rgb(0, 0, 0)",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                WwqjDfMe_: "rgb(255, 255, 255)"
                                            },
                                            ZqrEFyc47: {
                                                NCB7NePzH: "Testnet"
                                            }
                                        }, m, d)
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    da = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Ks5Gt.framer-my1lo8, .framer-Ks5Gt .framer-my1lo8 { display: block; }", ".framer-Ks5Gt.framer-1hckxfp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 64px; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1200px; }", ".framer-Ks5Gt .framer-1flugly { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1552px; min-height: 48px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; z-index: 1; }", ".framer-Ks5Gt .framer-440hhi { flex: none; height: 24px; left: 0px; overflow: visible; position: absolute; text-decoration: none; top: calc(50.00000000000002% - 24px / 2); width: 113px; z-index: 1; }", ".framer-Ks5Gt .framer-ra7nxw { flex: none; height: 24px; left: calc(49.557522123893825% - 113px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 113px; }", ".framer-Ks5Gt .framer-hc9zup { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: min-content; z-index: 1; }", ".framer-Ks5Gt .framer-roa447, .framer-Ks5Gt .framer-akrdkx, .framer-Ks5Gt .framer-uy2bwj, .framer-Ks5Gt .framer-1vl654e, .framer-Ks5Gt .framer-fm3rni, .framer-Ks5Gt .framer-v9nhfl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-Ks5Gt .framer-1mf0swa-container, .framer-Ks5Gt .framer-1538jds-container { flex: none; height: auto; mix-blend-mode: difference; position: relative; width: auto; }", ".framer-Ks5Gt .framer-1jgaxy3-container, .framer-Ks5Gt .framer-1f1f5uo-container, .framer-Ks5Gt .framer-wmw17r-container, .framer-Ks5Gt .framer-pw20qg-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-Ks5Gt .framer-1gjx95n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 24px; justify-content: space-between; overflow: visible; padding: 4px; position: absolute; right: -36px; top: calc(50.00000000000002% - 24px / 2); width: 24px; z-index: 1; }", ".framer-Ks5Gt .framer-1jinlzi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 3px; overflow: visible; position: absolute; top: 3px; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-1e8mfs0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 50%; overflow: visible; position: absolute; top: 3px; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-133bns6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-ximdmb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); overflow: visible; position: absolute; right: 3px; top: 3px; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-1dy1q68 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); overflow: visible; position: absolute; right: 3px; top: 50%; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-10lbrx6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 3px; overflow: visible; position: absolute; top: 50%; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-12a1urg { aspect-ratio: 1 / 1; bottom: 3px; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 3px; overflow: visible; position: absolute; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-x195vn { aspect-ratio: 1 / 1; bottom: 3px; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 50%; overflow: visible; position: absolute; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-xhunol { aspect-ratio: 1 / 1; bottom: 3px; flex: none; height: var(--framer-aspect-ratio-supported, 3px); overflow: visible; position: absolute; right: 3px; width: 3px; z-index: 1; }", ".framer-Ks5Gt .framer-1twkisw-container { flex: none; height: 44px; position: absolute; right: 0px; top: 50%; width: auto; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-1hckxfp, .framer-Ks5Gt .framer-1flugly, .framer-Ks5Gt .framer-hc9zup, .framer-Ks5Gt .framer-roa447, .framer-Ks5Gt .framer-akrdkx, .framer-Ks5Gt .framer-uy2bwj, .framer-Ks5Gt .framer-1vl654e, .framer-Ks5Gt .framer-fm3rni, .framer-Ks5Gt .framer-v9nhfl { gap: 0px; } .framer-Ks5Gt.framer-1hckxfp > *, .framer-Ks5Gt .framer-1flugly > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Ks5Gt.framer-1hckxfp > :first-child, .framer-Ks5Gt .framer-1flugly > :first-child, .framer-Ks5Gt .framer-hc9zup > :first-child, .framer-Ks5Gt .framer-roa447 > :first-child, .framer-Ks5Gt .framer-akrdkx > :first-child, .framer-Ks5Gt .framer-uy2bwj > :first-child, .framer-Ks5Gt .framer-1vl654e > :first-child, .framer-Ks5Gt .framer-fm3rni > :first-child, .framer-Ks5Gt .framer-v9nhfl > :first-child { margin-left: 0px; } .framer-Ks5Gt.framer-1hckxfp > :last-child, .framer-Ks5Gt .framer-1flugly > :last-child, .framer-Ks5Gt .framer-hc9zup > :last-child, .framer-Ks5Gt .framer-roa447 > :last-child, .framer-Ks5Gt .framer-akrdkx > :last-child, .framer-Ks5Gt .framer-uy2bwj > :last-child, .framer-Ks5Gt .framer-1vl654e > :last-child, .framer-Ks5Gt .framer-fm3rni > :last-child, .framer-Ks5Gt .framer-v9nhfl > :last-child { margin-right: 0px; } .framer-Ks5Gt .framer-hc9zup > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-Ks5Gt .framer-roa447 > *, .framer-Ks5Gt .framer-akrdkx > *, .framer-Ks5Gt .framer-uy2bwj > *, .framer-Ks5Gt .framer-1vl654e > *, .framer-Ks5Gt .framer-fm3rni > *, .framer-Ks5Gt .framer-v9nhfl > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }", ".framer-Ks5Gt.framer-v-moi1lw.framer-1hckxfp { width: 810px; }", ".framer-Ks5Gt.framer-v-moi1lw .framer-hc9zup { gap: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-v-moi1lw .framer-hc9zup { gap: 0px; } .framer-Ks5Gt.framer-v-moi1lw .framer-hc9zup > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-Ks5Gt.framer-v-moi1lw .framer-hc9zup > :first-child { margin-left: 0px; } .framer-Ks5Gt.framer-v-moi1lw .framer-hc9zup > :last-child { margin-right: 0px; } }", ".framer-Ks5Gt.framer-v-1en8mpn.framer-1hckxfp, .framer-Ks5Gt.framer-v-104qlzg.framer-1hckxfp { height: 56px; padding: 0px 12px 0px 12px; width: 390px; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-1flugly, .framer-Ks5Gt.framer-v-104qlzg .framer-1flugly, .framer-Ks5Gt.framer-v-1xxa076 .framer-1flugly { left: 12px; position: absolute; top: 4px; width: 94%; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-440hhi, .framer-Ks5Gt.framer-v-104qlzg .framer-440hhi, .framer-Ks5Gt.framer-v-1xxa076 .framer-440hhi { height: 20px; top: calc(50.00000000000002% - 20px / 2); width: 96px; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-ra7nxw, .framer-Ks5Gt.framer-v-104qlzg .framer-ra7nxw, .framer-Ks5Gt.framer-v-1xxa076 .framer-ra7nxw, .framer-Ks5Gt.framer-v-1ahm21k .framer-ra7nxw { height: 20px; left: 0px; top: calc(50.00000000000002% - 20px / 2); width: 94px; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-hc9zup, .framer-Ks5Gt.framer-v-104qlzg .framer-hc9zup, .framer-Ks5Gt.framer-v-1ahm21k .framer-hc9zup { flex-direction: column; gap: 8px; left: 0px; top: 64px; width: 100%; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-1gjx95n, .framer-Ks5Gt.framer-v-104qlzg .framer-1gjx95n, .framer-Ks5Gt.framer-v-1xxa076 .framer-1gjx95n { cursor: pointer; right: 0px; }", ".framer-Ks5Gt.framer-v-1en8mpn .framer-1twkisw-container, .framer-Ks5Gt.framer-v-104qlzg .framer-1twkisw-container, .framer-Ks5Gt.framer-v-1ahm21k .framer-1twkisw-container { top: calc(570.8333333333333% - 44px / 2); width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-v-1en8mpn .framer-hc9zup { gap: 0px; } .framer-Ks5Gt.framer-v-1en8mpn .framer-hc9zup > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Ks5Gt.framer-v-1en8mpn .framer-hc9zup > :first-child { margin-top: 0px; } .framer-Ks5Gt.framer-v-1en8mpn .framer-hc9zup > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-v-104qlzg .framer-hc9zup { gap: 0px; } .framer-Ks5Gt.framer-v-104qlzg .framer-hc9zup > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Ks5Gt.framer-v-104qlzg .framer-hc9zup > :first-child { margin-top: 0px; } .framer-Ks5Gt.framer-v-104qlzg .framer-hc9zup > :last-child { margin-bottom: 0px; } }", ".framer-Ks5Gt.framer-v-1xxa076.framer-1hckxfp { height: 436px; padding: 0px 12px 0px 12px; width: 390px; }", ".framer-Ks5Gt.framer-v-1xxa076 .framer-hc9zup { flex-direction: column; gap: 24px; left: 0px; top: 80px; width: 100%; }", ".framer-Ks5Gt.framer-v-1xxa076 .framer-1twkisw-container { bottom: -368px; left: calc(50.00000000000002% - 100% / 2); right: unset; top: unset; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-v-1xxa076 .framer-hc9zup { gap: 0px; } .framer-Ks5Gt.framer-v-1xxa076 .framer-hc9zup > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-Ks5Gt.framer-v-1xxa076 .framer-hc9zup > :first-child { margin-top: 0px; } .framer-Ks5Gt.framer-v-1xxa076 .framer-hc9zup > :last-child { margin-bottom: 0px; } }", ".framer-Ks5Gt.framer-v-1ahm21k.framer-1hckxfp { height: 56px; padding: 0px 8px 0px 8px; width: 390px; }", ".framer-Ks5Gt.framer-v-1ahm21k .framer-1flugly { padding: 0px; }", ".framer-Ks5Gt.framer-v-1ahm21k .framer-440hhi { height: 20px; left: 12px; top: calc(50.00000000000002% - 20px / 2); width: 96px; }", ".framer-Ks5Gt.framer-v-1ahm21k .framer-1gjx95n { cursor: pointer; right: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ks5Gt.framer-v-1ahm21k .framer-hc9zup { gap: 0px; } .framer-Ks5Gt.framer-v-1ahm21k .framer-hc9zup > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Ks5Gt.framer-v-1ahm21k .framer-hc9zup > :first-child { margin-top: 0px; } .framer-Ks5Gt.framer-v-1ahm21k .framer-hc9zup > :last-child { margin-bottom: 0px; } }", '.framer-Ks5Gt[data-border="true"]::after, .framer-Ks5Gt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    Ze = ce(sa, da, "framer-Ks5Gt"),
    vl = Ze;
Ze.displayName = "Menu";
Ze.defaultProps = {
    height: 64,
    width: 1200
};
E(Ze, {
    variant: {
        options: ["E7tKtbY2K", "sBp8DQVFI", "ZqrEFyc47", "Gk7a0jnRd", "PIJ3ysjk2", "wvMo1QZOr", "rsJejvZnf"],
        optionTitles: ["Desktop", "Desktop Dark", "Tablet", "Mobile - Light", "Mobile - Dark", "Mobile - Open", "Variant 7"],
        title: "Variant",
        type: n.Enum
    },
    ry8c6ZQ6t: {
        defaultValue: {
            borderBottomWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: "solid",
            borderTopWidth: 0
        },
        title: "Border",
        type: n.Border
    }
});
Ve(Ze, [{
    explicitInter: !0,
    fonts: []
}, ...Kt, ...Yt], {
    supportsExplicitInterCodegen: !0
});
var ca = '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

function ma(r, {
    showYear: t,
    showMonth: i,
    showWeekday: l,
    showMinutes: f,
    showSeconds: g
}, y, a, x) {
    let u = new Date,
        v = !l && !i && t;
    switch (r) {
        case "date":
            return new Intl.DateTimeFormat(x, {
                weekday: l ? "long" : void 0,
                day: v ? void 0 : "numeric",
                month: i ? a : void 0,
                year: t ? "numeric" : void 0
            }).format(u);
        case "time":
            return new Intl.DateTimeFormat(x, {
                hour: "numeric",
                minute: f ? "numeric" : void 0,
                second: g && f ? "numeric" : void 0,
                hour12: y === "12h"
            }).format(u);
        default:
            return new Intl.DateTimeFormat(x).format(u)
    }
}
var Le = {
    height: 20,
    width: 140,
    outputType: "time",
    color: "#999",
    timeFormat: "24h",
    showYear: !0,
    showMonth: !0,
    showWeekday: !0,
    showMinutes: !0,
    showSeconds: !0,
    monthFormat: "long",
    alignment: "center"
};

function Ge(r) {
    let t = {
            ...Le,
            ...r
        },
        {
            outputType: i,
            timeFormat: l,
            showYear: f,
            showMonth: g,
            showWeekday: y,
            showMinutes: a,
            showSeconds: x,
            monthFormat: u,
            color: v,
            font: b,
            tabularFont: h
        } = t,
        p = Dr(),
        m = Pe(() => ma(i, {
            showYear: f,
            showMonth: g,
            showWeekday: y,
            showMinutes: a,
            showSeconds: x
        }, l, u, p), [p, u, i, a, g, x, y, f, l]),
        T = Z(),
        D = Pe(M => {
            if (M === null) {
                clearTimeout(T.current);
                return
            }
            let F, C = () => {
                let c = new Date,
                    L = new Date().setSeconds(c.getSeconds() + 1, 0) - +c;
                T.current = setTimeout(C, L);
                let O = m();
                F !== O && (M.textContent = O, F = O)
            };
            C()
        }, [m]),
        [A, d] = Te(!1),
        V = Me.current() === Me.canvas;
    return he(() => {
        Mr(() => d(!0))
    }, [V]), e("p", {
        suppressHydrationWarning: !0,
        style: {
            margin: 0,
            padding: 0,
            color: v,
            fontFamily: ca,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1,
            visibility: A ? "visible" : "hidden",
            ...b,
            fontVariantNumeric: h ? "tabular-nums" : "normal",
            whiteSpace: "nowrap"
        },
        ref: V ? void 0 : D,
        children: m()
    })
}
Ge.displayName = "Time & Date";
E(Ge, {
    outputType: {
        title: "Type",
        type: n.Enum,
        displaySegmentedControl: !0,
        options: ["date", "time"],
        optionTitles: ["Date", "Time"],
        defaultValue: Le.outputType
    },
    showWeekday: {
        title: "Day",
        type: n.Boolean,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: Le.showWeekday,
        hidden: r => r.outputType !== "date"
    },
    showMonth: {
        title: "Month",
        type: n.Boolean,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: Le.showMonth,
        hidden: r => r.outputType !== "date"
    },
    monthFormat: {
        title: "Format",
        type: n.Enum,
        options: ["short", "long", "numeric"],
        optionTitles: ["Short", "Long", "Numeric"],
        defaultValue: Le.monthFormat,
        hidden: r => r.outputType !== "date" || !r.showMonth
    },
    showYear: {
        title: "Year",
        type: n.Boolean,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: Le.showYear,
        hidden: r => r.outputType !== "date"
    },
    timeFormat: {
        title: "Format",
        type: n.Enum,
        options: ["12h", "24h"],
        optionTitles: ["12h", "24h"],
        displaySegmentedControl: !0,
        defaultValue: Le.timeFormat,
        hidden: r => r.outputType !== "time"
    },
    showMinutes: {
        title: "Minutes",
        type: n.Boolean,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: Le.showMinutes,
        hidden: r => r.outputType !== "time"
    },
    showSeconds: {
        title: "Seconds",
        type: n.Boolean,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: Le.showSeconds,
        hidden: r => r.outputType !== "time" || !r.showMinutes
    },
    font: {
        type: n.Font,
        controls: "extended"
    },
    tabularFont: {
        title: "Tabular",
        type: n.Boolean,
        defaultValue: !0
    },
    color: {
        type: n.Color,
        defaultValue: Le.color
    }
});
var fa = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ha = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/,
    Kr = r => fa.test(String(r).toLowerCase()),
    pa = r => {
        var t;
        let [, i, l] = (t = r.replace("&amp;", "&").match(ha)) !== null && t !== void 0 ? t : [null, null, null];
        return [i, l ? new URLSearchParams(l) : null]
    };

function ua(r) {
    console.log(r);
    try {
        return new URL(r), r
    } catch {
        try {
            return new URL(`https://${r}`), `https://${r}`
        } catch {}
    }
}

function ga(r) {
    return r === void 0 ? !1 : !!(r.startsWith("#") || r.startsWith("/") || r.startsWith("."))
}
var Yr = "v1",
    et = ce(function({
        service: t,
        redirectAs: i,
        mailchimpURL: l,
        loopsID: f,
        loopsUserGroup: g,
        loopsMailingList: y,
        formsparkID: a,
        getwaitlistAPI: x,
        convertkitAPI: u,
        convertkitFormID: v,
        input: b,
        button: h,
        font: p,
        layout: m,
        link: T,
        gap: D,
        style: A,
        onSubmit: d
    }) {
        let [V, M] = Te(""), [F, C] = Te(!1), [c, L] = Te(!1), [O, W] = Te(!1), {
            paddingPerSide: q,
            paddingTop: o,
            paddingRight: H,
            paddingBottom: P,
            paddingLeft: ie,
            padding: w,
            borderRadius: K,
            borderObject: oe,
            focusObject: $,
            shadowObject: ne,
            height: _,
            fixedHeight: qe
        } = b, {
            buttonPaddingPerSide: it,
            buttonPaddingTop: ot,
            buttonPaddingRight: nt,
            buttonPaddingBottom: lt,
            buttonPaddingLeft: st,
            buttonPadding: Ue
        } = h, dt = q ? `${o}px ${h.isDocked?H+h.widthWhenDocked:H}px ${P}px ${ie}px` : `${w}px ${h.isDocked?w+h.widthWhenDocked:w}px ${w}px ${w}px`, ct = it ? `${h.isDocked?0:ot}px ${nt}px ${h.isDocked?0:lt}px ${st}px` : `${h.isDocked?0:Ue}px ${Ue}px ${h.isDocked?0:Ue}px ${Ue}px`, Pr = Ne(), We = () => {
            if (L(!1), W(!1), M(""), i === "link" && T && !F) {
                let [fe, ye] = T.split("#"), {
                    routeId: Y,
                    pathVariables: ve
                } = Fr(Pr.routes, fe);
                if (Y && Pr.navigate(Y, ye, ve), !ga(T)) {
                    let _e = ua(T);
                    _e && j.open(_e, "_blank")
                }
            }
        }, De = Pe(fe => fe === "" || !Kr(fe) ? (C(!0), je.start("error"), !1) : !0, [Kr]), mt = Pe(fe => {
            C(!1), M(fe.target.value)
        }, []), ft = Pe(fe => {
            W(!0)
        }, []), ht = Pe(fe => {
            W(!1), C(!1)
        }, []), pt = Pe(fe => {
            if (fe.preventDefault(), !c) {
                if (L(!0), t === "mailchimp") {
                    let [ye, Y] = pa(l);
                    if (!De(V) || !ye || !Y) {
                        L(!1);
                        return
                    }
                    Y.set("MERGE0", V), fetch(`https://${ye}/subscribe/post`, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                        },
                        body: Y.toString()
                    }).then(ve => {
                        We(), i === "overlay" && d?.()
                    }).catch(ve => {
                        console.error(ve), L(!1), C(!0), je.start("error")
                    })
                }
                if (t === "loops") {
                    if (!De(V)) {
                        L(!1);
                        return
                    }
                    let ye = `email=${encodeURIComponent(V)}`,
                        Y = `userGroup=${encodeURIComponent(g)}`,
                        ve = `mailingLists=${encodeURIComponent(y)}`,
                        _e = !!y && y !== " ",
                        vt = !!g && g !== " ",
                        lr = ye;
                    vt && (lr += `&${Y}`), _e && (lr += `&${ve}`), fetch(`https://app.loops.so/api/newsletter-form/${f}`, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: lr
                    }).then(() => {
                        We(), i === "overlay" && d?.()
                    }).catch(bt => {
                        console.error(bt), L(!1), C(!0), je.start("error")
                    })
                }
                if (t === "formspark") {
                    if (!De(V)) {
                        L(!1);
                        return
                    }
                    let ye = new FormData(fe.target),
                        Y = Object.fromEntries(ye.entries());
                    fetch(`https://api.formspark.io/${a}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(Y)
                    }).then(() => {
                        We(), d?.()
                    }).catch(ve => {
                        console.error(ve), L(!1), C(!0), je.start("error")
                    })
                }
                if (t === "getwaitlist") {
                    if (!De(V)) {
                        L(!1);
                        return
                    }
                    let ye = new FormData(fe.target),
                        Y = Object.fromEntries(ye.entries());
                    Y.referral_link = document.URL, fetch(`https://api.getwaitlist.com/api/v1
/waiter/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(Y)
                    }).then(() => {
                        We(), i === "overlay" && d?.()
                    }).catch(ve => {
                        console.error(ve), L(!1), C(!0), je.start("error")
                    })
                }
                if (t === "convertkit") {
                    if (!De(V)) {
                        L(!1);
                        return
                    }
                    let ye = new FormData(fe.target),
                        Y = Object.fromEntries(ye.entries());
                    Y.referral_link = document.URL, Y.api_key = u, fetch(`https://api.convertkit.com/v3/forms/${v}/subscribe`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(Y)
                    }).then(() => {
                        We(), i === "overlay" && d?.()
                    }).catch(ve => {
                        console.error(ve), L(!1), C(!0), je.start("error")
                    })
                }
            }
        }, [l, a, v, V, d, De, c]), je = mr(), Tr = b.focusObject ? `inset 0 0 0 ${$.focusWidthFrom}px ${$.focusColor}` : null, ut = b.focusObject ? `inset 0 0 0 ${$.focusWidthTo}px ${$.focusColor}` : null, or = b.shadowObject ? `${ne.shadowX}px ${ne.shadowY}px ${ne.shadowBlur}px ${ne.shadowColor}` : null, nr = b.borderObject ? `inset 0 0 0 ${oe.borderWidth}px ${oe.borderColor}` : null, gt = {
            default: {
                x: 0
            },
            error: {
                x: [0, -4, 4, 0],
                transition: {
                    duration: .2
                }
            }
        }, yt = {
            default: {
                boxShadow: Rr(Tr, or, nr)
            },
            focused: {
                boxShadow: Rr(ut, or, nr)
            }
        };
        return e(s.div, {
            style: {
                ...A,
                ...ya,
                "--framer-custom-placeholder-color": b.placeholderColor
            },
            variants: gt,
            animate: je,
            children: R("form", {
                style: {
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    position: "relative",
                    flexDirection: m === "vertical" ? "column" : "row",
                    color: h.color,
                    gap: h.isDocked ? 0 : D
                },
                onSubmit: pt,
                method: "POST",
                children: [t === "getwaitlist" && e("input", {
                    type: "hidden",
                    name: "api_key",
                    value: x
                }), t === "convertkit" && e("input", {
                    type: "hidden",
                    name: "api_key",
                    value: u
                }), e(s.input, {
                    type: "email",
                    name: "email",
                    placeholder: b.placeholder,
                    value: V,
                    className: `${Yr} framer-custom-input`,
                    onChange: mt,
                    onFocus: ft,
                    onBlur: ht,
                    autoComplete: "off",
                    autoCapitalize: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    style: {
                        ...$r,
                        padding: dt,
                        borderRadius: K,
                        fontSize: 16,
                        ...p,
                        background: b.fill,
                        height: _ ? "auto" : qe,
                        color: b.color,
                        boxShadow: Rr(Tr, or, nr)
                    },
                    variants: yt,
                    initial: !1,
                    animate: O ? "focused" : "default",
                    transition: {
                        duration: .3
                    },
                    "data-1p-ignore": !0
                }), !h.shouldAppear && c && e(Xr, {
                    shouldAppear: h.shouldAppear,
                    paddingPerSide: q,
                    paddingTop: o,
                    paddingRight: H,
                    padding: w,
                    color: b.color
                }), h.shouldAppear && R("div", {
                    style: {
                        position: h.isDocked ? "absolute" : "relative",
                        top: h.isDocked ? h.insetWhenDocked : 0,
                        right: h.isDocked ? h.insetWhenDocked : 0,
                        bottom: h.isDocked ? h.insetWhenDocked : 0
                    },
                    children: [e(s.input, {
                        type: "submit",
                        value: h.label,
                        style: {
                            ...$r,
                            width: h.isDocked ? h.widthWhenDocked : "100%",
                            height: _ ? "100%" : qe,
                            cursor: "pointer",
                            padding: ct,
                            borderRadius: h.isDocked ? K - h.insetWhenDocked : K,
                            fontSize: 16,
                            ...h.buttonFont,
                            background: h.fill,
                            color: h.color,
                            zIndex: 1,
                            boxShadow: va(h)
                        }
                    }), c && e("div", {
                        style: {
                            borderRadius: h.isDocked ? K - h.insetWhenDocked : K,
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            inset: 0,
                            zIndex: 2,
                            color: h.color,
                            background: h.fill
                        },
                        children: e(Xr, {
                            color: h.color
                        })
                    })]
                })]
            })
        })
    }, [`.${Yr}.framer-custom-input::placeholder { color: var(--framer-custom-placeholder-color) !important; }`]),
    Xr = r => {
        let t = r.shouldAppear ? {} : {
            position: "absolute",
            top: "calc(50% - 8px)",
            right: r.paddingPerSide ? r.paddingRight : r.padding
        };
        return e(s.div, {
            style: {
                height: 16,
                width: 16,
                ...t
            },
            initial: {
                rotate: 0
            },
            animate: {
                rotate: 360
            },
            transition: {
                duration: 1,
                repeat: 1 / 0
            },
            children: e(s.div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                children: R("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    style: {
                        fill: "currentColor",
                        color: r.color
                    },
                    children: [e("path", {
                        d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                        fill: "currentColor",
                        opacity: "0.2"
                    }), e("path", {
                        d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
                        fill: "currentColor"
                    })]
                })
            })
        })
    };
E(et, {
    service: {
        title: "Service",
        type: n.Enum,
        options: ["loops", "formspark", "mailchimp", "getwaitlist", "convertkit"],
        optionTitles: ["Loops", "FormSpark", "MailChimp", "Get Waitlist", "ConvertKit"],
        defaultValue: "loops"
    },
    mailchimpURL: {
        title: "URL",
        placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
        type: n.String,
        hidden: r => r.service !== "mailchimp"
    },
    loopsID: {
        title: "ID",
        placeholder: "klm2jxy0i98abzr01pq7defg5",
        type: n.String,
        hidden: r => r.service !== "loops"
    },
    loopsUserGroup: {
        title: "User Group",
        type: n.String,
        placeholder: "Title",
        optional: !0,
        hidden: r => r.service !== "loops"
    },
    loopsMailingList: {
        title: "Mailing List",
        type: n.String,
        placeholder: "cm3q41c5v02ii1lml14om2wtr",
        optional: !0,
        hidden: r => r.service !== "loops"
    },
    formsparkID: {
        title: "ID",
        placeholder: "7PbPpGN3",
        type: n.String,
        hidden: r => r.service !== "formspark"
    },
    getwaitlistAPI: {
        title: "ID",
        placeholder: "9148",
        type: n.String,
        hidden: r => r.service !== "getwaitlist"
    },
    convertkitAPI: {
        title: "API Key",
        placeholder: "5opis1WK6xnVsBwrOINUpe",
        type: n.String,
        hidden: r => r.service !== "convertkit"
    },
    convertkitFormID: {
        title: "Form ID",
        placeholder: "1043389",
        type: n.String,
        hidden: r => r.service !== "convertkit"
    },
    redirectAs: {
        title: "Success",
        type: n.Enum,
        options: ["link", "overlay"],
        optionTitles: ["Open Link", "Show Overlay"],
        defaultValue: "link"
    },
    link: {
        title: "Redirect",
        type: n.Link,
        hidden: r => r.redirectAs === "overlay"
    },
    onSubmit: {
        title: "Submit",
        type: n.EventHandler,
        hidden: r => r.redirectAs === "link"
    },
    layout: {
        title: "Layout",
        type: n.Enum,
        options: ["horizontal", "vertical"],
        displaySegmentedControl: !0,
        hidden: r => r.button.isDocked
    },
    font: {
        type: n.Font,
        title: "Font",
        controls: "extended"
    },
    input: {
        title: "Input",
        type: n.Object,
        controls: {
            placeholder: {
                title: "Placeholder",
                type: n.String,
                defaultValue: "name@email.com"
            },
            placeholderColor: {
                title: " ",
                type: n.Color,
                defaultValue: "rgba(0, 0, 0, 0.3)"
            },
            fill: {
                title: "Fill",
                type: n.Color,
                defaultValue: "#EBEBEB"
            },
            color: {
                title: "Text",
                type: n.Color,
                defaultValue: "#000"
            },
            height: {
                title: "Height",
                type: n.Boolean,
                enabledTitle: "Auto",
                disabledTitle: "Fixed"
            },
            fixedHeight: {
                title: " ",
                type: n.Number,
                displayStepper: !0,
                min: 0,
                defaultValue: 50,
                hidden: r => r.height
            },
            padding: {
                title: "Padding",
                type: n.FusedNumber,
                toggleKey: "paddingPerSide",
                toggleTitles: ["Padding", "Padding per side"],
                defaultValue: 15,
                valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
                valueLabels: ["T", "R", "B", "L"],
                min: 0
            },
            borderRadius: {
                title: "Radius",
                type: n.Number,
                displayStepper: !0,
                min: 0,
                defaultValue: 8
            },
            focusObject: {
                type: n.Object,
                title: "Focus",
                optional: !0,
                controls: {
                    focusWidthFrom: {
                        title: "From",
                        type: n.Number,
                        displayStepper: !0,
                        defaultValue: 0
                    },
                    focusWidthTo: {
                        title: "To",
                        type: n.Number,
                        displayStepper: !0,
                        defaultValue: 2
                    },
                    focusColor: {
                        title: "Color",
                        type: n.Color,
                        defaultValue: "#09F"
                    }
                }
            },
            borderObject: {
                type: n.Object,
                title: "Border",
                optional: !0,
                controls: {
                    borderWidth: {
                        title: "Width",
                        type: n.Number,
                        displayStepper: !0,
                        defaultValue: 1
                    },
                    borderColor: {
                        title: "Color",
                        type: n.Color,
                        defaultValue: "rgba(200,200,200,0.5)"
                    }
                }
            },
            shadowObject: {
                type: n.Object,
                title: "Shadow",
                optional: !0,
                controls: {
                    shadowColor: {
                        title: "Color",
                        type: n.Color,
                        defaultValue: "rgba(0,0,0,0.25)"
                    },
                    shadowX: {
                        title: "Shadow X",
                        type: n.Number,
                        min: -100,
                        max: 100,
                        defaultValue: 0
                    },
                    shadowY: {
                        title: "Shadow Y",
                        type: n.Number,
                        min: -100,
                        max: 100,
                        defaultValue: 2
                    },
                    shadowBlur: {
                        title: "Shadow B",
                        type: n.Number,
                        min: 0,
                        max: 100,
                        defaultValue: 4
                    }
                }
            }
        }
    },
    button: {
        title: "Button",
        type: n.Object,
        controls: {
            shouldAppear: {
                title: "Show",
                type: n.Boolean,
                defaultValue: !0
            },
            label: {
                title: "Label",
                type: n.String,
                defaultValue: "Subscribe"
            },
            buttonFont: {
                type: n.Font,
                title: "Font",
                controls: "extended"
            },
            fill: {
                title: "Fill",
                type: n.Color,
                defaultValue: "#333"
            },
            color: {
                title: "Text",
                type: n.Color,
                defaultValue: "#FFF"
            },
            isDocked: {
                title: "Docked",
                type: n.Boolean,
                defaultValue: !1
            },
            widthWhenDocked: {
                title: "Width",
                type: n.Number,
                min: 0,
                defaultValue: 100,
                displayStepper: !0,
                hidden: r => !r.isDocked
            },
            insetWhenDocked: {
                title: "Inset",
                type: n.Number,
                min: 0,
                defaultValue: 5,
                displayStepper: !0,
                hidden: r => !r.isDocked
            },
            buttonPadding: {
                title: "Padding",
                type: n.FusedNumber,
                toggleKey: "buttonPaddingPerSide",
                toggleTitles: ["Padding", "Padding per side"],
                defaultValue: 15,
                valueKeys: ["buttonPaddingTop", "buttonPaddingRight", "buttonPaddingBottom", "buttonPaddingLeft"],
                valueLabels: ["T", "R", "B", "L"],
                min: 0
            },
            buttonShadow: {
                type: n.Object,
                title: "Shadow",
                optional: !0,
                controls: {
                    shadowColor: {
                        title: "Color",
                        type: n.Color,
                        defaultValue: "rgba(0,0,0,0.25)"
                    },
                    shadowX: {
                        title: "Shadow X",
                        type: n.Number,
                        min: -100,
                        max: 100,
                        defaultValue: 0
                    },
                    shadowY: {
                        title: "Shadow Y",
                        type: n.Number,
                        min: -100,
                        max: 100,
                        defaultValue: 2
                    },
                    shadowBlur: {
                        title: "Shadow B",
                        type: n.Number,
                        min: 0,
                        max: 100,
                        defaultValue: 4
                    }
                }
            }
        }
    },
    gap: {
        title: "Gap",
        type: n.Number,
        displayStepper: !0,
        min: 0,
        defaultValue: 10,
        hidden: r => r.button.isDocked
    }
});
var $r = {
        WebkitAppearance: "none",
        appearance: "none",
        width: "100%",
        height: "auto",
        outline: "none",
        border: "none"
    },
    ya = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

function va(r) {
    return r.buttonShadow ? `${r.buttonShadow.shadowX}px ${r.buttonShadow.shadowY}px ${r.buttonShadow.shadowBlur}px ${r.buttonShadow.shadowColor}` : "none"
}

function Rr(...r) {
    let t = [];
    return r.forEach(i => i && t.push(i)), t.join(", ")
}
var Lr = et;
Nr.loadFonts([]);
var rt = [{
        explicitInter: !0,
        fonts: []
    }],
    tt = [".framer-TcMhS .framer-styles-preset-v6qza5:not(.rich-text-wrapper), .framer-TcMhS .framer-styles-preset-v6qza5.rich-text-wrapper a { --framer-link-current-text-color: #000000; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #3b3b3b; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #000000; --framer-link-text-decoration: none; }"],
    at = "framer-TcMhS";
var xa = te(X),
    wa = te(Lr),
    Ca = te(N),
    Sa = te(Ge),
    ka = ["XRNYxiK3r", "ENBOF9sr9", "w5pDPqY8h"],
    Va = "framer-efd75",
    Ia = {
        ENBOF9sr9: "framer-v-91q6u1",
        w5pDPqY8h: "framer-v-1k8jvft",
        XRNYxiK3r: "framer-v-eydxj6"
    };

function S(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var Ra = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: "spring"
    },
    La = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    Pa = s.create(I),
    Ta = {
        Desktop: "XRNYxiK3r",
        Phone: "w5pDPqY8h",
        Tablet: "ENBOF9sr9"
    },
    Ma = ({
        click: r,
        height: t,
        id: i,
        width: l,
        ...f
    }) => ({
        ...f,
        PQu4cI01v: r ?? f.PQu4cI01v,
        variant: Ta[f.variant] ?? f.variant ?? "XRNYxiK3r"
    }),
    ja = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    Da = le(function(r, t) {
        let i = Z(null),
            l = t ?? i,
            f = xe(),
            {
                activeLocale: g,
                setLocale: y
            } = we(),
            a = Ce(),
            {
                style: x,
                className: u,
                layoutId: v,
                variant: b,
                PQu4cI01v: h,
                ...p
            } = Ma(r),
            {
                baseVariant: m,
                classNames: T,
                clearLoadingGesture: D,
                gestureHandlers: A,
                gestureVariant: d,
                isLoading: V,
                setGestureState: M,
                setVariant: F,
                variants: C
            } = ke({
                cycleOrder: ka,
                defaultVariant: "XRNYxiK3r",
                ref: l,
                variant: b,
                variantClassNames: Ia
            }),
            c = ja(r, C),
            {
                activeVariantCallback: L,
                delay: O
            } = Se(m),
            W = L(async (...P) => {
                if (h && await h(...P) === !1) return !1
            }),
            o = de(Va, ...[at]),
            H = Ne();
        return e(pe, {
            id: v ?? f,
            children: e(Pa, {
                animate: C,
                initial: !1,
                children: e(La, {
                    value: Ra,
                    children: R(s.div, {
                        ...p,
                        ...A,
                        className: de(o, "framer-eydxj6", u, T),
                        "data-framer-name": "Desktop",
                        layoutDependency: c,
                        layoutId: "XRNYxiK3r",
                        ref: l,
                        style: {
                            backgroundColor: "rgb(255, 255, 255)",
                            ...x
                        },
                        ...S({
                            ENBOF9sr9: {
                                "data-framer-name": "Tablet"
                            },
                            w5pDPqY8h: {
                                "data-framer-name": "Phone"
                            }
                        }, m, d),
                        children: [e(s.div, {
                            className: "framer-1j2n3p2",
                            "data-framer-name": "Logo",
                            layoutDependency: c,
                            layoutId: "AthzEfidl",
                            children: R(s.div, {
                                className: "framer-1m3af02",
                                "data-framer-name": "Illistration",
                                layoutDependency: c,
                                layoutId: "wLLxMUvVE",
                                style: {
                                    background: "linear-gradient(90.0000042651414deg, rgba(0, 64, 255, 0) 0%, rgba(0, 200, 255, 0.54) 100%)",
                                    borderBottomLeftRadius: 64,
                                    borderBottomRightRadius: 64,
                                    borderTopLeftRadius: 64,
                                    borderTopRightRadius: 64
                                },
                                variants: {
                                    w5pDPqY8h: {
                                        background: "linear-gradient(90.0000042651414deg, rgba(0, 64, 255, 0) 0%, rgba(0, 200, 255, 0.3) 100%)"
                                    }
                                },
                                children: [e(s.div, {
                                    className: "framer-1qbj06h",
                                    layoutDependency: c,
                                    layoutId: "nigoJMlB0",
                                    style: {
                                        backgroundColor: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
                                        borderBottomLeftRadius: 64,
                                        borderBottomRightRadius: 64,
                                        borderTopLeftRadius: 64,
                                        borderTopRightRadius: 64
                                    },
                                    children: e(Ke, {
                                        className: "framer-19we44o",
                                        "data-framer-name": "OZ",
                                        layout: "position",
                                        layoutDependency: c,
                                        layoutId: "i_tMZ3O9v",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.03 16"><path d="M 8 3.287 C 10.619 3.287 12.714 5.381 12.714 8 C 12.714 10.618 10.619 12.713 8 12.713 C 5.381 12.713 3.287 10.618 3.287 8 C 3.287 5.381 5.381 3.287 8 3.287 Z M 8 15.757 C 12.288 15.757 15.758 12.288 15.758 8 C 15.758 3.712 12.288 0.242 8 0.242 C 3.712 0.242 0.242 3.712 0.242 8 C 0.242 12.288 3.712 15.757 8 15.757 Z M 18.861 0.243 C 18.575 0.243 18.344 0.474 18.344 0.76 L 18.344 2.828 C 18.344 3.114 18.575 3.346 18.861 3.346 L 27.136 3.346 C 27.421 3.346 27.653 3.114 27.653 2.828 L 27.653 0.76 C 27.653 0.474 27.421 0.243 27.136 0.243 Z M 28.17 3.345 C 27.884 3.345 27.653 3.577 27.653 3.863 L 27.653 5.934 C 27.653 6.22 27.884 6.451 28.17 6.451 L 30.239 6.451 C 30.524 6.451 30.756 6.22 30.756 5.934 L 30.756 3.863 C 30.756 3.577 30.524 3.345 30.239 3.345 Z M 18.861 9.552 C 18.575 9.552 18.344 9.783 18.344 10.069 L 18.344 12.137 C 18.344 12.423 18.575 12.655 18.861 12.655 L 20.93 12.655 C 21.215 12.655 21.447 12.423 21.447 12.137 L 21.447 10.069 C 21.447 9.783 21.215 9.552 20.93 9.552 Z M 22.998 6.966 C 22.998 6.68 23.23 6.449 23.515 6.449 L 25.584 6.449 C 25.87 6.449 26.101 6.68 26.101 6.966 L 26.101 9.035 C 26.101 9.32 25.87 9.552 25.584 9.552 L 23.515 9.552 C 23.23 9.552 22.998 9.32 22.998 9.035 Z M 21.964 12.655 C 21.678 12.655 21.447 12.886 21.447 13.172 L 21.447 15.24 C 21.447 15.526 21.678 15.758 21.964 15.758 L 30.239 15.758 C 30.524 15.758 30.756 15.526 30.756 15.24 L 30.756 13.172 C 30.756 12.886 30.524 12.655 30.239 12.655 Z" fill="rgba(255, 255, 255, 0)"></path></svg>',
                                        svgContentId: 10000930470,
                                        withExternalLayout: !0,
                                        ...S({
                                            w5pDPqY8h: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 11"><path d="M 5.677 2.259 C 7.536 2.259 9.023 3.7 9.023 5.5 C 9.023 7.3 7.536 8.74 5.677 8.74 C 3.819 8.74 2.332 7.3 2.332 5.5 C 2.332 3.7 3.819 2.259 5.677 2.259 Z M 5.677 10.833 C 8.721 10.833 11.183 8.448 11.183 5.5 C 11.183 2.552 8.721 0.167 5.677 0.167 C 2.634 0.167 0.172 2.552 0.172 5.5 C 0.172 8.448 2.634 10.833 5.677 10.833 Z M 13.385 0.167 C 13.182 0.167 13.018 0.326 13.018 0.522 L 13.018 1.945 C 13.018 2.141 13.182 2.3 13.385 2.3 L 19.258 2.3 C 19.46 2.3 19.625 2.141 19.625 1.945 L 19.625 0.522 C 19.625 0.326 19.46 0.167 19.258 0.167 Z M 19.992 2.3 C 19.789 2.3 19.625 2.459 19.625 2.655 L 19.625 4.08 C 19.625 4.276 19.789 4.435 19.992 4.435 L 21.46 4.435 C 21.662 4.435 21.827 4.276 21.827 4.08 L 21.827 2.655 C 21.827 2.459 21.662 2.3 21.46 2.3 Z M 13.385 6.567 C 13.182 6.567 13.018 6.726 13.018 6.922 L 13.018 8.344 C 13.018 8.541 13.182 8.7 13.385 8.7 L 14.853 8.7 C 15.056 8.7 15.22 8.541 15.22 8.344 L 15.22 6.922 C 15.22 6.726 15.056 6.567 14.853 6.567 Z M 16.321 4.789 C 16.321 4.593 16.486 4.433 16.688 4.433 L 18.156 4.433 C 18.359 4.433 18.524 4.593 18.524 4.789 L 18.524 6.211 C 18.524 6.408 18.359 6.567 18.156 6.567 L 16.688 6.567 C 16.486 6.567 16.321 6.408 16.321 6.211 Z M 15.587 8.7 C 15.385 8.7 15.22 8.859 15.22 9.056 L 15.22 10.478 C 15.22 10.674 15.385 10.833 15.587 10.833 L 21.46 10.833 C 21.662 10.833 21.827 10.674 21.827 10.478 L 21.827 9.056 C 21.827 8.859 21.662 8.7 21.46 8.7 Z" fill="rgba(255, 255, 255, 0)"></path></svg>',
                                                svgContentId: 9081236771
                                            }
                                        }, m, d)
                                    })
                                }), e(s.div, {
                                    className: "framer-15lbtad",
                                    layoutDependency: c,
                                    layoutId: "SFMZcqCRx",
                                    style: {
                                        backgroundColor: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
                                        borderBottomLeftRadius: 64,
                                        borderBottomRightRadius: 64,
                                        borderTopLeftRadius: 64,
                                        borderTopRightRadius: 64
                                    },
                                    children: e(k, {
                                        children: e(B, {
                                            className: "framer-16d0r0z-container",
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            layoutDependency: c,
                                            layoutId: "bHhSOOy4p-container",
                                            nodeId: "bHhSOOy4p",
                                            rendersWithMotion: !0,
                                            scopeId: "qcoVW79gd",
                                            children: e(X, {
                                                color: "rgb(255, 255, 255)",
                                                height: "100%",
                                                iconSearch: "arrow-circle-up-right",
                                                iconSelection: "ArrowBendUpLeft",
                                                id: "bHhSOOy4p",
                                                layoutId: "bHhSOOy4p",
                                                mirrored: !1,
                                                selectByList: !1,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                weight: "regular",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })]
                            })
                        
                        }), R(s.div, {
                            className: "framer-1m5dgbc",
                            "data-framer-name": "Legal",
                            layoutDependency: c,
                            layoutId: "vbIzxEWFi",
                            children: [R(s.div, {
                                className: "framer-m84bbw",
                                "data-framer-name": "Data",
                                layoutDependency: c,
                                layoutId: "rEQ3z8hb5",
                                children: [e(J, {
                                    __fromCanvasComponent: !0,
                                    children: e(I, {
                                        children: e(s.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "1.6em",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "\xA9"
                                        })
                                    }),
                                    className: "framer-b2mt71",
                                    fonts: ["CUSTOM;Safiro Regular"],
                                    layoutDependency: c,
                                    layoutId: "TIf4cCQO6",
                                    style: {
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...S({
                                        w5pDPqY8h: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                        "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.6em",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "\xA9"
                                                })
                                            })
                                        }
                                    }, m, d)
                                }), e(k, {
                                    children: e(B, {
                                        className: "framer-1346npi-container",
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: c,
                                        layoutId: "FgljxBNO8-container",
                                        nodeId: "FgljxBNO8",
                                        rendersWithMotion: !0,
                                        scopeId: "qcoVW79gd",
                                        children: e(Ge, {
                                            color: "rgb(0, 0, 0)",
                                            font: {
                                                fontFamily: '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                fontSize: "12px",
                                                letterSpacing: "0em",
                                                lineHeight: "1em"
                                            },
                                            height: "100%",
                                            id: "FgljxBNO8",
                                            layoutId: "FgljxBNO8",
                                            monthFormat: "long",
                                            outputType: "date",
                                            showMinutes: !0,
                                            showMonth: !1,
                                            showSeconds: !0,
                                            showWeekday: !1,
                                            showYear: !0,
                                            tabularFont: !0,
                                            timeFormat: "24h",
                                            width: "100%",
                                            ...S({
                                                w5pDPqY8h: {
                                                    font: {
                                                        fontFamily: '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                        fontSize: "10px",
                                                        letterSpacing: "0em",
                                                        lineHeight: "1em"
                                                    }
                                                }
                                            }, m, d)
                                        })
                                    })
                                }), e(J, {
                                    __fromCanvasComponent: !0,
                                    children: e(I, {
                                        children: e(s.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "1.6em",
                                                "--framer-text-transform": "capitalize"
                                            },
                                            children: "VaultFX. All Rights Reserved."
                                        })
                                    }),
                                    className: "framer-1g6yzl3",
                                    fonts: ["CUSTOM;Safiro Regular"],
                                    layoutDependency: c,
                                    layoutId: "NePlttcWk",
                                    style: {
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...S({
                                        w5pDPqY8h: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                        "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.6em",
                                                        "--framer-text-transform": "capitalize"
                                                    },
                                                    children: "VaultFX."
                                                })
                                            })
                                        }
                                    }, m, d)
                                })]
                            }), R(s.div, {
                                className: "framer-14mqhv0",
                                "data-framer-name": "Docks",
                                layoutDependency: c,
                                layoutId: "lZMI1kkYJ",
                                children: [e(J, {
                                    __fromCanvasComponent: !0,
                                    children: e(I, {
                                        children: e(s.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "1.6em",
                                                "--framer-text-transform": "capitalize"
                                            },
                                            children: e(ue, {
                                                href: "/legal/privacy",
                                                motionChild: !0,
                                                nodeId: "mCVGQE5xq",
                                                openInNewTab: !0,
                                                scopeId: "qcoVW79gd",
                                                smoothScroll: !1,
                                                children: e(s.a, {
                                                    className: "framer-styles-preset-v6qza5",
                                                    "data-styles-preset": "FOLBapscn",
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-gf5i6u",
                                    fonts: ["CUSTOM;Safiro Regular"],
                                    layoutDependency: c,
                                    layoutId: "mCVGQE5xq",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...S({
                                        w5pDPqY8h: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                        "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.6em",
                                                        "--framer-text-transform": "capitalize"
                                                    },
                                                    children: e(ue, {
                                                        href: "/legal/privacy",
                                                        motionChild: !0,
                                                        nodeId: "mCVGQE5xq",
                                                        openInNewTab: !0,
                                                        scopeId: "qcoVW79gd",
                                                        smoothScroll: !1,
                                                        children: e(s.a, {
                                                            className: "framer-styles-preset-v6qza5",
                                                            "data-styles-preset": "FOLBapscn",
                                                            children: "Privacy Policy"
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    }, m, d)
                                }), e(J, {
                                    __fromCanvasComponent: !0,
                                    children: e(I, {
                                        children: e(s.p, {
                                            style: {
                                                "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "1.6em",
                                                "--framer-text-transform": "capitalize"
                                            },
                                            children: e(ue, {
                                                href: "/legal/terms",
                                                motionChild: !0,
                                                nodeId: "Lc0avJdEV",
                                                openInNewTab: !0,
                                                scopeId: "qcoVW79gd",
                                                smoothScroll: !1,
                                                children: e(s.a, {
                                                    className: "framer-styles-preset-v6qza5",
                                                    "data-styles-preset": "FOLBapscn",
                                                    children: "Terms of Service"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-najgf5",
                                    fonts: ["CUSTOM;Safiro Regular"],
                                    layoutDependency: c,
                                    layoutId: "Lc0avJdEV",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...S({
                                        w5pDPqY8h: {
                                            children: e(I, {
                                                children: e(s.p, {
                                                    style: {
                                                        "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                        "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.6em",
                                                        "--framer-text-transform": "capitalize"
                                                    },
                                                    children: e(ue, {
                                                        href: "/legal/terms",
                                                        motionChild: !0,
                                                        nodeId: "Lc0avJdEV",
                                                        openInNewTab: !0,
                                                        scopeId: "qcoVW79gd",
                                                        smoothScroll: !1,
                                                        children: e(s.a, {
                                                            className: "framer-styles-preset-v6qza5",
                                                            "data-styles-preset": "FOLBapscn",
                                                            children: "Terms of Service"
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    }, m, d)
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }),
    Fa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-efd75.framer-1y3a8p, .framer-efd75 .framer-1y3a8p { display: block; }", ".framer-efd75.framer-eydxj6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }", ".framer-efd75 .framer-1j2n3p2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }", ".framer-efd75 .framer-1m3af02 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-efd75 .framer-1qbj06h, .framer-efd75 .framer-15lbtad { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 64px; will-change: var(--framer-will-change-override, transform); }", ".framer-efd75 .framer-19we44o { flex: none; height: 16px; position: relative; width: 31px; }", ".framer-efd75 .framer-16d0r0z-container { aspect-ratio: 1 / 1; flex: none; height: 28px; position: relative; width: var(--framer-aspect-ratio-supported, 28px); }", ".framer-efd75 .framer-1p3ugdc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: hidden; padding: 100px 24px 24px 24px; position: relative; width: 100%; }", ".framer-efd75 .framer-1trljxq { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-efd75 .framer-1t2jn4d { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 319px; word-break: break-word; word-wrap: break-word; }", ".framer-efd75 .framer-9owb25 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 85%; }", ".framer-efd75 .framer-pwej72-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; z-index: 8; }", ".framer-efd75 .framer-nr6err { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-efd75 .framer-1isijgn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-efd75 .framer-1umujpf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-efd75 .framer-1kbjczw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-efd75 .framer-55rpp0, .framer-efd75 .framer-fvc6tu, .framer-efd75 .framer-4d2017, .framer-efd75 .framer-1p0b9xo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-efd75 .framer-4uknij, .framer-efd75 .framer-1svfvwm, .framer-efd75 .framer-ekn6w4, .framer-efd75 .framer-1r5w0a4, .framer-efd75 .framer-1e52t7r, .framer-efd75 .framer-1wdkvrj, .framer-efd75 .framer-f3qht1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-efd75 .framer-1gj7ron-container, .framer-efd75 .framer-ey35rw-container, .framer-efd75 .framer-d6gxme-container, .framer-efd75 .framer-we3696-container, .framer-efd75 .framer-gmihlf-container, .framer-efd75 .framer-ko66ig-container, .framer-efd75 .framer-d4xnni-container, .framer-efd75 .framer-wud0uh-container, .framer-efd75 .framer-vmjxd4-container, .framer-efd75 .framer-626yew-container, .framer-efd75 .framer-vpt6jj-container, .framer-efd75 .framer-1tzupjl-container, .framer-efd75 .framer-1huz1mg-container, .framer-efd75 .framer-cgamxm-container, .framer-efd75 .framer-26vv16-container, .framer-efd75 .framer-1ltbubz-container, .framer-efd75 .framer-va857v-container, .framer-efd75 .framer-zasato-container, .framer-efd75 .framer-1346npi-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-efd75 .framer-e2gbkf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-efd75 .framer-1m5dgbc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1600px; overflow: hidden; padding: 25px 24px 25px 24px; position: relative; width: 100%; z-index: 1; }", ".framer-efd75 .framer-m84bbw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-efd75 .framer-b2mt71, .framer-efd75 .framer-1g6yzl3, .framer-efd75 .framer-gf5i6u, .framer-efd75 .framer-najgf5 { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-efd75 .framer-14mqhv0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-efd75.framer-eydxj6, .framer-efd75 .framer-1j2n3p2, .framer-efd75 .framer-1qbj06h, .framer-efd75 .framer-15lbtad, .framer-efd75 .framer-1p3ugdc, .framer-efd75 .framer-9owb25, .framer-efd75 .framer-1isijgn, .framer-efd75 .framer-1umujpf, .framer-efd75 .framer-1kbjczw, .framer-efd75 .framer-4uknij, .framer-efd75 .framer-1svfvwm, .framer-efd75 .framer-ekn6w4, .framer-efd75 .framer-e2gbkf, .framer-efd75 .framer-1r5w0a4, .framer-efd75 .framer-1e52t7r, .framer-efd75 .framer-1wdkvrj, .framer-efd75 .framer-f3qht1, .framer-efd75 .framer-m84bbw, .framer-efd75 .framer-14mqhv0 { gap: 0px; } .framer-efd75.framer-eydxj6 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-efd75.framer-eydxj6 > :first-child, .framer-efd75 .framer-9owb25 > :first-child, .framer-efd75 .framer-1umujpf > :first-child, .framer-efd75 .framer-1kbjczw > :first-child, .framer-efd75 .framer-4uknij > :first-child, .framer-efd75 .framer-1svfvwm > :first-child, .framer-efd75 .framer-ekn6w4 > :first-child, .framer-efd75 .framer-e2gbkf > :first-child, .framer-efd75 .framer-1r5w0a4 > :first-child, .framer-efd75 .framer-1e52t7r > :first-child, .framer-efd75 .framer-1wdkvrj > :first-child, .framer-efd75 .framer-f3qht1 > :first-child { margin-top: 0px; } .framer-efd75.framer-eydxj6 > :last-child, .framer-efd75 .framer-9owb25 > :last-child, .framer-efd75 .framer-1umujpf > :last-child, .framer-efd75 .framer-1kbjczw > :last-child, .framer-efd75 .framer-4uknij > :last-child, .framer-efd75 .framer-1svfvwm > :last-child, .framer-efd75 .framer-ekn6w4 > :last-child, .framer-efd75 .framer-e2gbkf > :last-child, .framer-efd75 .framer-1r5w0a4 > :last-child, .framer-efd75 .framer-1e52t7r > :last-child, .framer-efd75 .framer-1wdkvrj > :last-child, .framer-efd75 .framer-f3qht1 > :last-child { margin-bottom: 0px; } .framer-efd75 .framer-1j2n3p2 > *, .framer-efd75 .framer-14mqhv0 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-efd75 .framer-1j2n3p2 > :first-child, .framer-efd75 .framer-1qbj06h > :first-child, .framer-efd75 .framer-15lbtad > :first-child, .framer-efd75 .framer-1p3ugdc > :first-child, .framer-efd75 .framer-1isijgn > :first-child, .framer-efd75 .framer-m84bbw > :first-child, .framer-efd75 .framer-14mqhv0 > :first-child { margin-left: 0px; } .framer-efd75 .framer-1j2n3p2 > :last-child, .framer-efd75 .framer-1qbj06h > :last-child, .framer-efd75 .framer-15lbtad > :last-child, .framer-efd75 .framer-1p3ugdc > :last-child, .framer-efd75 .framer-1isijgn > :last-child, .framer-efd75 .framer-m84bbw > :last-child, .framer-efd75 .framer-14mqhv0 > :last-child { margin-right: 0px; } .framer-efd75 .framer-1qbj06h > *, .framer-efd75 .framer-15lbtad > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-efd75 .framer-1p3ugdc > *, .framer-efd75 .framer-1isijgn > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-efd75 .framer-9owb25 > *, .framer-efd75 .framer-1kbjczw > *, .framer-efd75 .framer-4uknij > *, .framer-efd75 .framer-1svfvwm > *, .framer-efd75 .framer-ekn6w4 > *, .framer-efd75 .framer-1r5w0a4 > *, .framer-efd75 .framer-1e52t7r > *, .framer-efd75 .framer-1wdkvrj > *, .framer-efd75 .framer-f3qht1 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-efd75 .framer-1umujpf > *, .framer-efd75 .framer-e2gbkf > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-efd75 .framer-m84bbw > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }", ".framer-efd75.framer-v-91q6u1.framer-eydxj6 { width: 810px; }", ".framer-efd75.framer-v-91q6u1 .framer-9owb25 { width: 95%; }", ".framer-efd75.framer-v-1k8jvft.framer-eydxj6 { padding: 0px 12px 12px 12px; width: 390px; }", ".framer-efd75.framer-v-1k8jvft .framer-1j2n3p2 { padding: 0px; }", ".framer-efd75.framer-v-1k8jvft .framer-1qbj06h, .framer-efd75.framer-v-1k8jvft .framer-15lbtad { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); width: 48px; }", ".framer-efd75.framer-v-1k8jvft .framer-19we44o { height: 11px; width: 22px; }", ".framer-efd75.framer-v-1k8jvft .framer-16d0r0z-container { height: 20px; width: var(--framer-aspect-ratio-supported, 20px); }", ".framer-efd75.framer-v-1k8jvft .framer-1p3ugdc { flex-direction: column; padding: 0px; }", ".framer-efd75.framer-v-1k8jvft .framer-1trljxq { align-self: unset; flex: none; gap: 48px; height: min-content; justify-content: center; padding: 48px 0px 48px 0px; width: 100%; }", ".framer-efd75.framer-v-1k8jvft .framer-9owb25 { gap: 48px; width: 100%; }", ".framer-efd75.framer-v-1k8jvft .framer-1isijgn { flex: none; flex-direction: column; gap: 48px; padding: 48px 0px 0px 0px; width: 100%; }", ".framer-efd75.framer-v-1k8jvft .framer-1umujpf { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: row; gap: 0px; justify-content: flex-start; width: 100%; }", ".framer-efd75.framer-v-1k8jvft .framer-1kbjczw, .framer-efd75.framer-v-1k8jvft .framer-1svfvwm, .framer-efd75.framer-v-1k8jvft .framer-1r5w0a4, .framer-efd75.framer-v-1k8jvft .framer-1wdkvrj { flex: 1 0 0px; width: 1px; }", ".framer-efd75.framer-v-1k8jvft .framer-e2gbkf { flex: none; flex-direction: row; gap: 0px; width: 100%; }", ".framer-efd75.framer-v-1k8jvft .framer-1m5dgbc { gap: 8px; justify-content: flex-start; padding: 48px 0px 0px 0px; }", ".framer-efd75.framer-v-1k8jvft .framer-14mqhv0 { align-content: flex-start; align-items: flex-start; gap: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-efd75.framer-v-1k8jvft .framer-1p3ugdc, .framer-efd75.framer-v-1k8jvft .framer-1trljxq, .framer-efd75.framer-v-1k8jvft .framer-9owb25, .framer-efd75.framer-v-1k8jvft .framer-1isijgn, .framer-efd75.framer-v-1k8jvft .framer-1umujpf, .framer-efd75.framer-v-1k8jvft .framer-e2gbkf, .framer-efd75.framer-v-1k8jvft .framer-1m5dgbc, .framer-efd75.framer-v-1k8jvft .framer-14mqhv0 { gap: 0px; } .framer-efd75.framer-v-1k8jvft .framer-1p3ugdc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-efd75.framer-v-1k8jvft .framer-1p3ugdc > :first-child, .framer-efd75.framer-v-1k8jvft .framer-1trljxq > :first-child, .framer-efd75.framer-v-1k8jvft .framer-9owb25 > :first-child, .framer-efd75.framer-v-1k8jvft .framer-1isijgn > :first-child { margin-top: 0px; } .framer-efd75.framer-v-1k8jvft .framer-1p3ugdc > :last-child, .framer-efd75.framer-v-1k8jvft .framer-1trljxq > :last-child, .framer-efd75.framer-v-1k8jvft .framer-9owb25 > :last-child, .framer-efd75.framer-v-1k8jvft .framer-1isijgn > :last-child { margin-bottom: 0px; } .framer-efd75.framer-v-1k8jvft .framer-1trljxq > *, .framer-efd75.framer-v-1k8jvft .framer-9owb25 > *, .framer-efd75.framer-v-1k8jvft .framer-1isijgn > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-efd75.framer-v-1k8jvft .framer-1umujpf > *, .framer-efd75.framer-v-1k8jvft .framer-e2gbkf > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-efd75.framer-v-1k8jvft .framer-1umujpf > :first-child, .framer-efd75.framer-v-1k8jvft .framer-e2gbkf > :first-child, .framer-efd75.framer-v-1k8jvft .framer-1m5dgbc > :first-child, .framer-efd75.framer-v-1k8jvft .framer-14mqhv0 > :first-child { margin-left: 0px; } .framer-efd75.framer-v-1k8jvft .framer-1umujpf > :last-child, .framer-efd75.framer-v-1k8jvft .framer-e2gbkf > :last-child, .framer-efd75.framer-v-1k8jvft .framer-1m5dgbc > :last-child, .framer-efd75.framer-v-1k8jvft .framer-14mqhv0 > :last-child { margin-right: 0px; } .framer-efd75.framer-v-1k8jvft .framer-1m5dgbc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-efd75.framer-v-1k8jvft .framer-14mqhv0 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }", ...tt, '.framer-efd75[data-border="true"]::after, .framer-efd75 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }, "framer-ekn6w4 { display: none; } }"'],
    Ee = ce(Da, Fa, "framer-efd75"),
    Gl = Ee;
Ee.displayName = "Footer";
Ee.defaultProps = {
    height: 774.5,
    width: 1200
};
E(Ee, {
    variant: {
        options: ["XRNYxiK3r", "ENBOF9sr9", "w5pDPqY8h"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: n.Enum
    },
    PQu4cI01v: {
        title: "Click",
        type: n.EventHandler
    }
});
Ve(Ee, [{
    explicitInter: !0,
    fonts: [{
        family: "Safiro Medium",
        source: "custom",
        url: "/assets/media/BPTBqFZT8NLInucfcnAjjSb5XM.woff2"
    }, {
        family: "Safiro Regular",
        source: "custom",
        url: "/assets/media/SX0WifClEumjDezacEJPOShtDA.woff2"
    }]
}, ...xa, ...wa, ...Ca, ...Sa, ...Br(rt)], {
    supportsExplicitInterCodegen: !0
});
var Na = te(X),
    Ba = {
        lSRTaC8VY: {
            hover: !0
        }
    },
    Wa = ["lSRTaC8VY", "yNeTEUsDr", "mUvWXH9VK", "UHPTaekQt"],
    Aa = "framer-Q0VC4",
    za = {
        lSRTaC8VY: "framer-v-r5y59v",
        mUvWXH9VK: "framer-v-1jsta29",
        UHPTaekQt: "framer-v-1a5wg6s",
        yNeTEUsDr: "framer-v-1qxlp8"
    };

function ir(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var Oa = {
        damping: 40,
        delay: 0,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    Za = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    Ga = s.create(I),
    Ea = {
        "Mobile - Open": "UHPTaekQt",
        Closed: "lSRTaC8VY",
        Mobile: "mUvWXH9VK",
        Open: "yNeTEUsDr"
    },
    Ha = ({
        answer: r,
        border: t,
        height: i,
        id: l,
        question: f,
        width: g,
        ...y
    }) => {
        var a, x, u, v, b;
        return {
            ...y,
            NsJ5j5A5E: (a = t ?? y.NsJ5j5A5E) !== null && a !== void 0 ? a : {
                borderBottomWidth: 1,
                borderColor: "#222",
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderStyle: "solid",
                borderTopWidth: 0
            },
            T8rQFvSBR: (x = r ?? y.T8rQFvSBR) !== null && x !== void 0 ? x : "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
            variant: (v = (u = Ea[y.variant]) !== null && u !== void 0 ? u : y.variant) !== null && v !== void 0 ? v : "lSRTaC8VY",
            W88zB8mIG: (b = f ?? y.W88zB8mIG) !== null && b !== void 0 ? b : "Framer is a web builder for creative"
        }
    },
    Qa = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    qa = le(function(r, t) {
        let {
            activeLocale: i,
            setLocale: l
        } = we(), {
            style: f,
            className: g,
            layoutId: y,
            variant: a,
            W88zB8mIG: x,
            T8rQFvSBR: u,
            NsJ5j5A5E: v,
            ...b
        } = Ha(r), {
            baseVariant: h,
            classNames: p,
            clearLoadingGesture: m,
            gestureHandlers: T,
            gestureVariant: D,
            isLoading: A,
            setGestureState: d,
            setVariant: V,
            variants: M
        } = ke({
            cycleOrder: Wa,
            defaultVariant: "lSRTaC8VY",
            enabledGestures: Ba,
            variant: a,
            variantClassNames: za
        }), F = Qa(r, M), {
            activeVariantCallback: C,
            delay: c
        } = Se(h), L = C(async (..._) => {
            d({
                isPressed: !1
            }), V("UHPTaekQt")
        }), O = C(async (..._) => {
            d({
                isPressed: !1
            }), V("mUvWXH9VK")
        }), W = C(async (..._) => {
            V("yNeTEUsDr")
        }), q = C(async (..._) => {
            V("lSRTaC8VY")
        }), o = Z(null), H = () => !!["yNeTEUsDr", "UHPTaekQt"].includes(h), P = xe(), ie = [], w = Ce();
        var K, oe, $, ne;
        return e(pe, {
            id: y ?? P,
            children: e(Ga, {
                animate: M,
                initial: !1,
                children: e(Za, {
                    value: Oa,
                    children: R(s.div, {
                        ...b,
                        ...T,
                        className: de(Aa, ...ie, "framer-r5y59v", g, p),
                        "data-border": !0,
                        "data-framer-name": "Closed",
                        layoutDependency: F,
                        layoutId: "lSRTaC8VY",
                        ref: t ?? o,
                        style: {
                            "--border-bottom-width": `${(K=v.borderBottomWidth)!==null&&K!==void 0?K:v.borderWidth}px`,
                            "--border-color": v.borderColor,
                            "--border-left-width": `${(oe=v.borderLeftWidth)!==null&&oe!==void 0?oe:v.borderWidth}px`,
                            "--border-right-width": `${($=v.borderRightWidth)!==null&&$!==void 0?$:v.borderWidth}px`,
                            "--border-style": v.borderStyle,
                            "--border-top-width": `${(ne=v.borderTopWidth)!==null&&ne!==void 0?ne:v.borderWidth}px`,
                            backgroundColor: "rgb(255, 255, 255)",
                            ...f
                        },
                        ...ir({
                            "lSRTaC8VY-hover": {
                                "data-framer-name": void 0
                            },
                            mUvWXH9VK: {
                                "data-framer-name": "Mobile",
                                "data-highlight": !0,
                                onTap: L
                            },
                            UHPTaekQt: {
                                "data-framer-name": "Mobile - Open",
                                "data-highlight": !0,
                                onTap: O
                            },
                            yNeTEUsDr: {
                                "data-framer-name": "Open"
                            }
                        }, h, D),
                        children: [R(s.div, {
                            className: "framer-3f1ncb",
                            "data-framer-name": "Question",
                            "data-highlight": !0,
                            layoutDependency: F,
                            layoutId: "xKYEYRoFn",
                            onTap: W,
                            ...ir({
                                UHPTaekQt: {
                                    onTap: q
                                },
                                yNeTEUsDr: {
                                    onTap: q
                                }
                            }, h, D),
                            children: [e(J, {
                                __fromCanvasComponent: !0,
                                children: e(I, {
                                    children: e(s.h6, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                            "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-letter-spacing": "0px",
                                            "--framer-line-height": "1.4em",
                                            "--framer-text-alignment": "left"
                                        },
                                        children: "Framer is a web builder for creative"
                                    })
                                }),
                                className: "framer-n84hzs",
                                fonts: ["CUSTOM;Safiro Medium"],
                                layoutDependency: F,
                                layoutId: "djh5cUK7P",
                                style: {
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: x,
                                variants: {
                                    "lSRTaC8VY-hover": {
                                        "--extracted-1w1cjl5": "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))"
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...ir({
                                    "lSRTaC8VY-hover": {
                                        children: e(I, {
                                            children: e(s.h6, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "18px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-1w1cjl5, var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255)))"
                                                },
                                                children: "Framer is a web builder for creative"
                                            })
                                        })
                                    },
                                    mUvWXH9VK: {
                                        children: e(I, {
                                            children: e(s.h6, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Framer is a web builder for creative"
                                            })
                                        })
                                    },
                                    UHPTaekQt: {
                                        children: e(I, {
                                            children: e(s.h6, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBNZWRpdW0=",
                                                    "--framer-font-family": '"Safiro Medium", "Safiro Medium Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "0px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Framer is a web builder for creative"
                                            })
                                        })
                                    }
                                }, h, D)
                            }), e(k, {
                                children: e(s.div, {
                                    className: "framer-3lfdgs-container",
                                    layoutDependency: F,
                                    layoutId: "onA7La67J-container",
                                    style: {
                                        rotate: 0
                                    },
                                    variants: {
                                        UHPTaekQt: {
                                            rotate: 90
                                        },
                                        yNeTEUsDr: {
                                            rotate: 90
                                        }
                                    },
                                    children: e(X, {
                                        color: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
                                        height: "100%",
                                        iconSearch: "Plus",
                                        iconSelection: "ArrowDownRight",
                                        id: "onA7La67J",
                                        layoutId: "onA7La67J",
                                        mirrored: !1,
                                        selectByList: !1,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        weight: "bold",
                                        width: "100%"
                                    })
                                })
                            })]
                        }), H() && e(s.div, {
                            className: "framer-15s1var",
                            "data-framer-name": "Answer",
                            layoutDependency: F,
                            layoutId: "dARqbdYsW",
                            style: {
                                opacity: 0
                            },
                            variants: {
                                UHPTaekQt: {
                                    opacity: 1
                                },
                                yNeTEUsDr: {
                                    opacity: 1
                                }
                            },
                            children: e(J, {
                                __fromCanvasComponent: !0,
                                children: e(I, {
                                    children: e(s.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                            "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d9f63e05-d653-4352-b1ce-5ec0a1dc53fe, rgb(89, 89, 89)))"
                                        },
                                        children: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
                                    })
                                }),
                                className: "framer-pfya0i",
                                fonts: ["CUSTOM;Safiro Regular"],
                                layoutDependency: F,
                                layoutId: "D8Eu9dnIr",
                                style: {
                                    "--extracted-r6o4lv": "var(--token-d9f63e05-d653-4352-b1ce-5ec0a1dc53fe, rgb(89, 89, 89))",
                                    "--framer-paragraph-spacing": "0px",
                                    opacity: .6
                                },
                                text: u,
                                variants: {
                                    UHPTaekQt: {
                                        opacity: 1
                                    },
                                    yNeTEUsDr: {
                                        opacity: 1
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...ir({
                                    UHPTaekQt: {
                                        children: e(I, {
                                            children: e(s.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1NhZmlybyBSZWd1bGFy",
                                                    "--framer-font-family": '"Safiro Regular", "Safiro Regular Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d9f63e05-d653-4352-b1ce-5ec0a1dc53fe, rgb(89, 89, 89)))"
                                                },
                                                children: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
                                            })
                                        })
                                    }
                                }, h, D)
                            })
                        })]
                    })
                })
            })
        })
    }),
    Ua = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Q0VC4.framer-1p813cm, .framer-Q0VC4 .framer-1p813cm { display: block; }", ".framer-Q0VC4.framer-r5y59v { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; }", ".framer-Q0VC4 .framer-3f1ncb { -webkit-user-select: none; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 0px 24px 0px; position: relative; user-select: none; width: 100%; }", ".framer-Q0VC4 .framer-n84hzs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }", ".framer-Q0VC4 .framer-3lfdgs-container { flex: none; height: 16px; position: absolute; right: 0px; top: calc(50.68493150684934% - 16px / 2); width: 16px; z-index: 1; }", ".framer-Q0VC4 .framer-15s1var { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 16px 16px 0px; position: relative; width: 100%; }", ".framer-Q0VC4 .framer-pfya0i { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q0VC4.framer-r5y59v, .framer-Q0VC4 .framer-3f1ncb, .framer-Q0VC4 .framer-15s1var { gap: 0px; } .framer-Q0VC4.framer-r5y59v > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Q0VC4.framer-r5y59v > :first-child, .framer-Q0VC4 .framer-15s1var > :first-child { margin-top: 0px; } .framer-Q0VC4.framer-r5y59v > :last-child, .framer-Q0VC4 .framer-15s1var > :last-child { margin-bottom: 0px; } .framer-Q0VC4 .framer-3f1ncb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Q0VC4 .framer-3f1ncb > :first-child { margin-left: 0px; } .framer-Q0VC4 .framer-3f1ncb > :last-child { margin-right: 0px; } .framer-Q0VC4 .framer-15s1var > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", ".framer-Q0VC4.framer-v-1qxlp8.framer-r5y59v { cursor: unset; padding: 0px 0px 24px 0px; }", ".framer-Q0VC4.framer-v-1qxlp8 .framer-15s1var { padding: 0px 16px 0px 0px; }", ".framer-Q0VC4.framer-v-1jsta29 .framer-3f1ncb, .framer-Q0VC4.framer-v-1a5wg6s .framer-3f1ncb { gap: 4px; padding: 16px 0px 16px 0px; }", ".framer-Q0VC4.framer-v-1jsta29 .framer-n84hzs, .framer-Q0VC4.framer-v-1a5wg6s .framer-n84hzs { --framer-text-wrap: balance; width: 85%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q0VC4.framer-v-1jsta29 .framer-3f1ncb { gap: 0px; } .framer-Q0VC4.framer-v-1jsta29 .framer-3f1ncb > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-Q0VC4.framer-v-1jsta29 .framer-3f1ncb > :first-child { margin-left: 0px; } .framer-Q0VC4.framer-v-1jsta29 .framer-3f1ncb > :last-child { margin-right: 0px; } }", ".framer-Q0VC4.framer-v-1a5wg6s .framer-15s1var { padding: 0px 16px 16px 0px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q0VC4.framer-v-1a5wg6s .framer-3f1ncb { gap: 0px; } .framer-Q0VC4.framer-v-1a5wg6s .framer-3f1ncb > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-Q0VC4.framer-v-1a5wg6s .framer-3f1ncb > :first-child { margin-left: 0px; } .framer-Q0VC4.framer-v-1a5wg6s .framer-3f1ncb > :last-child { margin-right: 0px; } }", '.framer-Q0VC4[data-border="true"]::after, .framer-Q0VC4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    He = ce(qa, Ua, "framer-Q0VC4"),
    ae = He;
He.displayName = "FAQ Row";
He.defaultProps = {
    height: 73,
    width: 400
};
E(He, {
    variant: {
        options: ["lSRTaC8VY", "yNeTEUsDr", "mUvWXH9VK", "UHPTaekQt"],
        optionTitles: ["Closed", "Open", "Mobile", "Mobile - Open"],
        title: "Variant",
        type: n.Enum
    },
    W88zB8mIG: {
        defaultValue: "Framer is a web builder for creative",
        displayTextArea: !0,
        title: "Question",
        type: n.String
    },
    T8rQFvSBR: {
        defaultValue: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
        displayTextArea: !0,
        title: "Answer",
        type: n.String
    },
    NsJ5j5A5E: {
        defaultValue: {
            borderBottomWidth: 1,
            borderColor: "#222",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: "solid",
            borderTopWidth: 0
        },
        title: "Border",
        type: n.Border
    }
});
Ve(He, [{
    explicitInter: !0,
    fonts: [{
        family: "Safiro Medium",
        source: "custom",
        url: "/assets/media/BPTBqFZT8NLInucfcnAjjSb5XM.woff2"
    }, {
        family: "Safiro Regular",
        source: "custom",
        url: "/assets/media/SX0WifClEumjDezacEJPOShtDA.woff2"
    }]
}, ...Na], {
    supportsExplicitInterCodegen: !0
});
var _a = te(ae),
    Ja = te(N),
    Ka = ["c0rMXkrBC", "F0zxYt4hJ", "JOLSOvwAn", "iLKIVhKfH"],
    Ya = "framer-cQ58C",
    Xa = {
        c0rMXkrBC: "framer-v-1hv9od7",
        F0zxYt4hJ: "framer-v-dnokaz",
        iLKIVhKfH: "framer-v-bls5t9",
        JOLSOvwAn: "framer-v-1o4ebwe"
    };

function z(r, ...t) {
    let i = {};
    return t?.forEach(l => l && Object.assign(i, r[l])), i
}
var $a = {
        damping: 40,
        delay: 0,
        mass: 1,
        stiffness: 400,
        type: "spring"
    },
    ei = ({
        value: r,
        children: t
    }) => {
        let i = be(U),
            l = r ?? i.transition,
            f = se(() => ({
                ...i,
                transition: l
            }), [JSON.stringify(l)]);
        return e(U.Provider, {
            value: f,
            children: t
        })
    },
    ri = s.create(I),
    ti = {
        "Mobile Open": "iLKIVhKfH",
        "Variant 1": "c0rMXkrBC",
        "Variant 3": "JOLSOvwAn",
        Mobile: "F0zxYt4hJ"
    },
    ai = ({
        height: r,
        id: t,
        width: i,
        ...l
    }) => {
        var f, g;
        return {
            ...l,
            variant: (g = (f = ti[l.variant]) !== null && f !== void 0 ? f : l.variant) !== null && g !== void 0 ? g : "c0rMXkrBC"
        }
    },
    ii = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    oi = le(function(r, t) {
        let {
            activeLocale: i,
            setLocale: l
        } = we(), {
            style: f,
            className: g,
            layoutId: y,
            variant: a,
            ...x
        } = ai(r), {
            baseVariant: u,
            classNames: v,
            clearLoadingGesture: b,
            gestureHandlers: h,
            gestureVariant: p,
            isLoading: m,
            setGestureState: T,
            setVariant: D,
            variants: A
        } = ke({
            cycleOrder: Ka,
            defaultVariant: "c0rMXkrBC",
            variant: a,
            variantClassNames: Xa
        }), d = ii(r, A), {
            activeVariantCallback: V,
            delay: M
        } = Se(u), F = V(async (...H) => {
            D("JOLSOvwAn")
        }), C = V(async (...H) => {
            D("iLKIVhKfH")
        }), c = Z(null), L = () => !!["JOLSOvwAn", "iLKIVhKfH"].includes(u), O = () => !["JOLSOvwAn", "iLKIVhKfH"].includes(u), W = xe(), q = [], o = Ce();
        return e(pe, {
            id: y ?? W,
            children: e(ri, {
                animate: A,
                initial: !1,
                children: e(ei, {
                    value: $a,
                    children: R(s.div, {
                        ...x,
                        ...h,
                        className: de(Ya, ...q, "framer-1hv9od7", g, v),
                        "data-framer-name": "Variant 1",
                        layoutDependency: d,
                        layoutId: "c0rMXkrBC",
                        ref: t ?? c,
                        style: {
                            backgroundColor: "rgb(255, 255, 255)",
                            ...f
                        },
                        ...z({
                            F0zxYt4hJ: {
                                "data-framer-name": "Mobile"
                            },
                            iLKIVhKfH: {
                                "data-framer-name": "Mobile Open"
                            },
                            JOLSOvwAn: {
                                "data-framer-name": "Variant 3"
                            }
                        }, u, p),
                        children: [e(k, {
                            height: 73,
                            width: o?.width || "100vw",
                            y: (o?.y || 0) + 0 + 0,
                            children: e(s.div, {
                                className: "framer-izwaf5-container",
                                layoutDependency: d,
                                layoutId: "GqF7tddUX-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "GqF7tddUX",
                                    layoutId: "GqF7tddUX",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_01",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_02",
                                    width: "100%",
                                    ...z({
                                        F0zxYt4hJ: {
                                            variant: "mUvWXH9VK"
                                        },
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), e(k, {
                            height: 73,
                            width: o?.width || "100vw",
                            y: (o?.y || 0) + 0 + 73,
                            children: e(s.div, {
                                className: "framer-q20z53-container",
                                layoutDependency: d,
                                layoutId: "JdOVHau56-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "JdOVHau56",
                                    layoutId: "JdOVHau56",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_02",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_02",
                                    width: "100%",
                                    ...z({
                                        F0zxYt4hJ: {
                                            variant: "mUvWXH9VK"
                                        },
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), e(k, {
                            height: 73,
                            width: o?.width || "100vw",
                            y: (o?.y || 0) + 0 + 146,
                            children: e(s.div, {
                                className: "framer-17edkfn-container",
                                layoutDependency: d,
                                layoutId: "pM_9tH4Sl-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "pM_9tH4Sl",
                                    layoutId: "pM_9tH4Sl",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_03",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_03",
                                    width: "100%",
                                    ...z({
                                        F0zxYt4hJ: {
                                            variant: "mUvWXH9VK"
                                        },
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), e(k, {
                            height: 73,
                            width: o?.width || "100vw",
                            y: (o?.y || 0) + 0 + 219,
                            children: e(s.div, {
                                className: "framer-1rw1kc3-container",
                                layoutDependency: d,
                                layoutId: "V5D2fW1NF-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "V5D2fW1NF",
                                    layoutId: "V5D2fW1NF",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_04",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_04",
                                    width: "100%",
                                    ...z({
                                        F0zxYt4hJ: {
                                            variant: "mUvWXH9VK"
                                        },
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), e(k, {
                            height: 73,
                            width: o?.width || "100vw",
                            y: (o?.y || 0) + 0 + 292,
                            children: e(s.div, {
                                className: "framer-15kwkax-container",
                                layoutDependency: d,
                                layoutId: "bv6Vch4r6-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "bv6Vch4r6",
                                    layoutId: "bv6Vch4r6",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_05",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_05",
                                    width: "100%",
                                    ...z({
                                        F0zxYt4hJ: {
                                            variant: "mUvWXH9VK"
                                        },
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 365
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 365
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-u4inun-container",
                                layoutDependency: d,
                                layoutId: "lqNPsdzDg-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "lqNPsdzDg",
                                    layoutId: "lqNPsdzDg",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_QUESTION_HERE_06",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_06",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 438
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 438
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-pke7rm-container",
                                layoutDependency: d,
                                layoutId: "I_i1pqPHy-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "I_i1pqPHy",
                                    layoutId: "I_i1pqPHy",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_07",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_07",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 511
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 511
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-8nby3z-container",
                                layoutDependency: d,
                                layoutId: "wkN3nuDs7-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "wkN3nuDs7",
                                    layoutId: "wkN3nuDs7",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_08",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_08",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 584
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 584
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-1r6r0cc-container",
                                layoutDependency: d,
                                layoutId: "lTFcRbdPh-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "lTFcRbdPh",
                                    layoutId: "lTFcRbdPh",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_09",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_09",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 657
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 657
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-1bjklvl-container",
                                layoutDependency: d,
                                layoutId: "XL61B984r-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "XL61B984r",
                                    layoutId: "XL61B984r",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_10",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_10",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 730
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 730
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-1qysgbx-container",
                                layoutDependency: d,
                                layoutId: "NjQr3s17j-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "NjQr3s17j",
                                    layoutId: "NjQr3s17j",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_11",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_11",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 803
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 803
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-zgmrnh-container",
                                layoutDependency: d,
                                layoutId: "J8nlfySly-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "J8nlfySly",
                                    layoutId: "J8nlfySly",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 1,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_12",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_12",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), L() && e(k, {
                            ...z({
                                iLKIVhKfH: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 876
                                },
                                JOLSOvwAn: {
                                    height: 73,
                                    width: o?.width || "100vw",
                                    y: (o?.y || 0) + 0 + 876
                                }
                            }, u, p),
                            children: e(s.div, {
                                className: "framer-czugid-container",
                                layoutDependency: d,
                                layoutId: "uD4ZjNzzJ-container",
                                children: e(ae, {
                                    height: "100%",
                                    id: "uD4ZjNzzJ",
                                    layoutId: "uD4ZjNzzJ",
                                    NsJ5j5A5E: {
                                        borderBottomWidth: 0,
                                        borderColor: "rgb(237, 237, 237)",
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: "solid",
                                        borderTopWidth: 0
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    T8rQFvSBR: "FAQ_ANSWER_HERE_13",
                                    variant: "lSRTaC8VY",
                                    W88zB8mIG: "FAQ_QUESTION_HERE_13",
                                    width: "100%",
                                    ...z({
                                        iLKIVhKfH: {
                                            variant: "mUvWXH9VK"
                                        }
                                    }, u, p)
                                })
                            })
                        }), O() && e(s.div, {
                            className: "framer-584m26",
                            "data-framer-name": "Button",
                            layoutDependency: d,
                            layoutId: "UQZHNpM9e",
                            children: e(k, {
                                height: 22,
                                y: (o?.y || 0) + 0 + 365 + 25,
                                ...z({
                                    F0zxYt4hJ: {
                                        y: (o?.y || 0) + 0 + 365 + 15
                                    }
                                }, u, p),
                                children: e(s.div, {
                                    className: "framer-18wr2mt-container",
                                    layoutDependency: d,
                                    layoutId: "wSmoCvVo3-container",
                                    children: e(N, {
                                        blufgyiGb: F,
                                        height: "100%",
                                        id: "wSmoCvVo3",
                                        j4rGAQlsA: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
                                        k8auuk0mY: "var(--token-8c1544bc-af40-4f3f-8e80-d7141bdf714a, rgb(0, 64, 255))",
                                        layoutId: "wSmoCvVo3",
                                        tJMuU5vK4: !0,
                                        variant: "QztZReDwv",
                                        VKzWGEV7h: !1,
                                        width: "100%",
                                        yNXUemuGw: "Show more",
                                        ...z({
                                            F0zxYt4hJ: {
                                                blufgyiGb: C,
                                                variant: "MRoHUgPaI"
                                            }
                                        }, u, p)
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        })
    }),
    ni = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cQ58C.framer-1w2mq6e, .framer-cQ58C .framer-1w2mq6e { display: block; }", ".framer-cQ58C.framer-1hv9od7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1000px; }", ".framer-cQ58C .framer-izwaf5-container, .framer-cQ58C .framer-q20z53-container, .framer-cQ58C .framer-17edkfn-container, .framer-cQ58C .framer-1rw1kc3-container, .framer-cQ58C .framer-15kwkax-container, .framer-cQ58C .framer-u4inun-container, .framer-cQ58C .framer-pke7rm-container, .framer-cQ58C .framer-8nby3z-container, .framer-cQ58C .framer-1r6r0cc-container, .framer-cQ58C .framer-1bjklvl-container, .framer-cQ58C .framer-1qysgbx-container, .framer-cQ58C .framer-zgmrnh-container, .framer-cQ58C .framer-czugid-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-cQ58C .framer-584m26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 72px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-cQ58C .framer-18wr2mt-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cQ58C.framer-1hv9od7, .framer-cQ58C .framer-584m26 { gap: 0px; } .framer-cQ58C.framer-1hv9od7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-cQ58C.framer-1hv9od7 > :first-child { margin-top: 0px; } .framer-cQ58C.framer-1hv9od7 > :last-child { margin-bottom: 0px; } .framer-cQ58C .framer-584m26 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cQ58C .framer-584m26 > :first-child { margin-left: 0px; } .framer-cQ58C .framer-584m26 > :last-child { margin-right: 0px; } }", ".framer-cQ58C.framer-v-dnokaz .framer-584m26 { height: 52px; }"],
    Qe = ce(oi, ni, "framer-cQ58C"),
    ts = Qe;
Qe.displayName = "FAQ";
Qe.defaultProps = {
    height: 438,
    width: 1e3
};
E(Qe, {
    variant: {
        options: ["c0rMXkrBC", "F0zxYt4hJ", "JOLSOvwAn", "iLKIVhKfH"],
        optionTitles: ["Variant 1", "Mobile", "Variant 3", "Mobile Open"],
        title: "Variant",
        type: n.Enum
    }
});
Ve(Qe, [{
    explicitInter: !0,
    fonts: []
}, ..._a, ...Ja], {
    supportsExplicitInterCodegen: !0
});
export {
    gr as a, X as b, Cr as c, kr as d, vl as e, Gl as f, ts as g
};
//# sourceMappingURL=chunk-Q7OW72PN.mjs.map