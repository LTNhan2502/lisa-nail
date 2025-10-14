(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        45090: (e, t, o) => {
            Promise.resolve().then(o.t.bind(o, 97494, 23)), Promise.resolve().then(o.bind(o, 55037)), Promise.resolve().then(o.bind(o, 10297)), Promise.resolve().then(o.bind(o, 68435)), Promise.resolve().then(o.bind(o, 84252)), Promise.resolve().then(o.bind(o, 14595)), Promise.resolve().then(o.t.bind(o, 35786, 23))
        },
        10297: (e, t, o) => {
            "use strict";
            o.d(t, {
                default: () => d
            });
            var n = o(95155),
                r = o(12115),
                s = o(82651),
                i = o(30227),
                a = o(67433);
            a.L9, i.$.ROUTES.INFO_WEBSITE.BASE;
            let c = () => {
                    let e = localStorage.getItem("token");
                    return e ? {
                        Authorization: "Bearer ".concat(e)
                    } : {}
                },
                l = {
                    getActive: async () => {
                        try {
                            let {
                                data: e
                            } = await s.A.get(a.L9 + i.$.ROUTES.INFO_WEBSITE.GET_ACTIVE, {
                                headers: c()
                            });
                            return null != e ? e : null
                        } catch (t) {
                            var e;
                            if (s.A.isAxiosError(t) && (null === (e = t.response) || void 0 === e ? void 0 : e.status) === 404) return null;
                            throw t
                        }
                    }
                },
                u = () => {
                    let [e, t] = (0, r.useState)(null), [o, n] = (0, r.useState)(!0), [s, i] = (0, r.useState)(null);
                    return (0, r.useEffect)(() => {
                        (async () => {
                            try {
                                let e = await l.getActive();
                                t(Array.isArray(e) ? e[0] : e)
                            } catch (e) {
                                i("Failed to fetch contact information"), console.error("Error fetching contact:", e)
                            } finally {
                                n(!1)
                            }
                        })()
                    }, []), {
                        contact: e,
                        loading: o,
                        error: s
                    }
                };

            function d() {
                let {
                    contact: e
                } = u();
                return (0, n.jsx)("link", {
                    rel: "icon",
                    href: null == e ? void 0 : e.favicon,
                    sizes: "any"
                })
            }
        },
        68435: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => g,
                AuthProvider: () => d
            });
            var n = o(95155),
                r = o(12115),
                s = o(76046),
                i = o(92922),
                a = o(82651),
                c = o(67433);
            let l = c.L9,
                u = (0, r.createContext)(void 0),
                d = e => {
                    let {
                        children: t
                    } = e, [o, d] = (0, r.useState)(null), [g, m] = (0, r.useState)(null), [h, p] = (0, r.useState)(!1), [f, y] = (0, r.useState)(!1), S = (0, s.useRouter)(), v = (0, r.useCallback)(async () => {
                        let e = o || localStorage.getItem("token");
                        if (!e) return console.log("⚠️ Cannot fetch permissions: No token"), [];
                        y(!0);
                        try {
                            console.log("\uD83D\uDD0D Fetching user permissions from API with token...");
                            let {
                                permissions: t,
                                isAdmin: o
                            } = (await a.A.get("".concat(l).concat(c.pe.AUTH.MY_PERMISSIONS), {
                                headers: {
                                    Authorization: "Bearer ".concat(e)
                                }
                            })).data;
                            if (console.log("✅ Permissions loaded: ".concat((null == t ? void 0 : t.length) || 0, " permissions")), t && Array.isArray(t)) return m(o => {
                                if (!o) try {
                                    let o = (0, i.s)(e);
                                    return p(!0), {
                                        id: o.userId,
                                        email: o.email,
                                        role: o.role,
                                        permissions: t || []
                                    }
                                } catch (e) {
                                    return console.error("❌ Failed to decode token during permission fetch:", e), null
                                }
                                return { ...o,
                                    permissions: t || []
                                }
                            }), t;
                            return console.error("❌ Invalid permissions format received from API"), []
                        } catch (e) {
                            var t;
                            return console.error("❌ Error fetching permissions:", e), a.A.isAxiosError(e) && (null === (t = e.response) || void 0 === t ? void 0 : t.status) === 401 && k(), []
                        } finally {
                            y(!1)
                        }
                    }, [o]);
                    (0, r.useEffect)(() => {
                        (() => {
                            let e = localStorage.getItem("token");
                            e && !h ? (console.log("\uD83D\uDD04 Found token in storage but not authenticated, revalidating..."), A(e)) : !e && h && (console.log("⚠️ No token in storage but authenticated state is true, fixing state..."), p(!1), m(null))
                        })()
                    }, [h]), (0, r.useEffect)(() => {
                        (async () => {
                            try {
                                let e = localStorage.getItem("token");
                                e ? (console.log("\uD83D\uDCDD Found token in localStorage, verifying..."), d(e), await A(e)) : console.log("⚠️ No token found in localStorage")
                            } catch (e) {
                                console.error("❌ Error during initialization:", e)
                            }
                        })()
                    }, []);
                    let A = async e => {
                            let t = e || o || localStorage.getItem("token");
                            if (!t) {
                                console.log("❌ No token found during verification"), k();
                                return
                            }
                            try {
                                console.log("\uD83D\uDD11 Verifying token...");
                                let e = (0, i.s)(t);
                                console.log("✅ Token decoded successfully:", {
                                    userId: e.userId,
                                    role: e.role,
                                    fullName: e.fullName
                                });
                                let o = Math.floor(Date.now() / 1e3);
                                if (e.exp && e.exp < o) {
                                    console.log("❌ Token has expired"), k(), S.replace("/");
                                    return
                                }
                                d(t), localStorage.setItem("token", t);
                                let n = {
                                    id: e.userId,
                                    email: e.email,
                                    role: e.role,
                                    fullName: e.fullName,
                                    avatar: e.avatar,
                                    permissions: []
                                };
                                m(n), p(!0);
                                let r = await v();
                                console.log("\uD83D\uDD12 User authenticated with ".concat(r.length, " permissions"))
                            } catch (e) {
                                console.error("❌ Token verification failed:", e), k()
                            }
                        },
                        E = async e => {
                            try {
                                console.log("\uD83D\uDD11 Processing login with new token..."), localStorage.setItem("token", e), d(e);
                                let t = (0, i.s)(e);
                                m({
                                    id: t.userId,
                                    email: t.email,
                                    role: t.role,
                                    fullName: t.fullName,
                                    avatar: t.avatar,
                                    permissions: []
                                }), p(!0), console.log("\uD83D\uDD04 Fetching permissions after login...");
                                let o = await v();
                                console.log("✅ Login complete with ".concat(o.length, " permissions")), S.replace("/")
                            } catch (e) {
                                console.error("❌ Token decode error during login:", e), k()
                            }
                        },
                        k = () => {
                            console.log("\uD83D\uDEAA Logging out: Clearing token, updating state, and redirecting to login..."), d(null), m(null), p(!1), localStorage.removeItem("token"), S.replace("/")
                        },
                        I = (e, t) => {
                            if (!g) return console.log("⚠️ No user found when checking permission: ".concat(e, ":").concat(t)), !1;
                            if ("admin" === g.role) return console.log("✅ Admin user has access to ".concat(e, ":").concat(t)), !0;
                            if ("technical" === g.role && "users" !== e && "permissions" !== e) return console.log("✅ Technical user has access to ".concat(e, ":").concat(t)), !0;
                            if ("manager" === g.role && !["users", "permissions"].includes(e)) return console.log("✅ Manager user has access to ".concat(e, ":").concat(t)), !0;
                            if (!g.permissions || !(g.permissions.length > 0)) return console.log("⚠️ No permissions loaded yet for: ".concat(e, ":").concat(t)), !1; {
                                let o = g.permissions.some(o => o.resource === e && o.action === t);
                                return (console.log("Permission check for ".concat(e, ":").concat(t, ":"), {
                                    userHasPermission: o,
                                    permissionsCount: g.permissions.length,
                                    userPermissions: g.permissions.map(e => "".concat(e.resource, ":").concat(e.action)).slice(0, 5),
                                    morePermissions: g.permissions.length > 5 ? "...and ".concat(g.permissions.length - 5, " more") : ""
                                }), o) ? (console.log("✅ User has specific permission: ".concat(e, ":").concat(t)), !0) : (console.log("❌ User lacks permission: ".concat(e, ":").concat(t)), !1)
                            }
                        };
                    return (0, n.jsx)(u.Provider, {
                        value: {
                            token: o,
                            user: g,
                            isAuthenticated: h,
                            verifyToken: A,
                            login: E,
                            logout: k,
                            hasAdminAccess: () => g ? "admin" === g.role ? (console.log("✅ User has admin role - granting admin access"), !0) : ["staff", "manager", "technical"].includes(g.role) ? (console.log("✅ User has ".concat(g.role, " role - granting admin access")), !0) : g.permissions && g.permissions.length > 0 ? (console.log("✅ User has ".concat(g.permissions.length, " permissions - granting admin access")), !0) : (console.log("❌ User has no admin access rights"), !1) : (console.log("⚠️ No user found in hasAdminAccess check"), !1),
                            hasPermission: I,
                            hasPathPermission: e => {
                                if (!g) return !1;
                                if ("/admin" === e || "admin" === g.role) return !0;
                                let t = e.split("/").filter(Boolean);
                                if (t.length < 2 || "admin" !== t[0]) return !1;
                                let o = t[1],
                                    n = "read";
                                if (t.length > 2) {
                                    let e = t[2];
                                    "create" === e ? n = "create" : "edit" === e ? n = "update" : "delete" === e && (n = "delete")
                                }
                                return t.length > 3 && "edit" === t[2] && (n = "update"), console.log("\uD83D\uDD0D Path permission check for ".concat(e, ":"), {
                                    derivedResource: o,
                                    derivedAction: n,
                                    pathParts: t,
                                    userRole: g.role
                                }), I(o, n)
                            },
                            fetchUserPermissions: v,
                            isLoadingPermissions: f
                        },
                        children: t
                    })
                },
                g = () => {
                    let e = (0, r.useContext)(u);
                    if (!e) throw Error("useAuth must be used within an AuthProvider");
                    return e
                }
        },
        84252: (e, t, o) => {
            "use strict";
            o.d(t, {
                default: () => a
            });
            var n = o(95155),
                r = o(12115),
                s = o(13223),
                i = o(35906);

            function a(e) {
                let {
                    children: t
                } = e, [o] = (0, r.useState)(() => new s.E);
                return (0, n.jsx)(i.Ht, {
                    client: o,
                    children: t
                })
            }
        },
        85357: (e, t, o) => {
            "use strict";
            o.d(t, {
                HP: () => h,
                SW: () => c,
                g0: () => g,
                nW: () => u,
                sT: () => l,
                tH: () => d,
                uo: () => m
            });
            var n = o(93233),
                r = o(35906),
                s = o(25848),
                i = o(7941);
            let a = {
                    all: ["scripts"],
                    lists: () => [...a.all, "list"],
                    list: e => [...a.lists(), {
                        filters: e
                    }],
                    sections: () => [...a.all, "sections"],
                    position: e => [...a.all, "position", e],
                    details: () => [...a.all, "detail"],
                    detail: e => [...a.details(), e]
                },
                c = () => (0, n.I)({
                    queryKey: a.lists(),
                    queryFn: () => i.f.getAllScripts()
                }),
                l = () => (0, n.I)({
                    queryKey: a.sections(),
                    queryFn: () => i.f.getScriptsBySection()
                }),
                u = e => (0, n.I)({
                    queryKey: a.detail(e),
                    queryFn: () => i.f.getScriptById(e),
                    enabled: !!e
                }),
                d = () => {
                    let e = (0, r.jE)();
                    return (0, s.n)({
                        mutationFn: e => i.f.createScript(e),
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: a.lists()
                            }), e.invalidateQueries({
                                queryKey: a.sections()
                            })
                        }
                    })
                },
                g = () => {
                    let e = (0, r.jE)();
                    return (0, s.n)({
                        mutationFn: e => {
                            let {
                                id: t,
                                data: o
                            } = e;
                            return i.f.updateScript(t, o)
                        },
                        onSuccess: (t, o) => {
                            let {
                                id: n
                            } = o;
                            e.invalidateQueries({
                                queryKey: a.detail(n)
                            }), e.invalidateQueries({
                                queryKey: a.lists()
                            }), e.invalidateQueries({
                                queryKey: a.sections()
                            })
                        }
                    })
                },
                m = () => {
                    let e = (0, r.jE)();
                    return (0, s.n)({
                        mutationFn: e => i.f.deleteScript(e),
                        onSuccess: () => {
                            e.invalidateQueries({
                                queryKey: a.lists()
                            }), e.invalidateQueries({
                                queryKey: a.sections()
                            })
                        }
                    })
                },
                h = () => {
                    let e = (0, r.jE)();
                    return (0, s.n)({
                        mutationFn: e => i.f.toggleScriptActive(e),
                        onSuccess: (t, o) => {
                            e.invalidateQueries({
                                queryKey: a.detail(o)
                            }), e.invalidateQueries({
                                queryKey: a.lists()
                            }), e.invalidateQueries({
                                queryKey: a.sections()
                            })
                        }
                    })
                }
        },
        14595: (e, t, o) => {
            "use strict";
            o.d(t, {
                ScriptLayout: () => u
            });
            var n = o(95155),
                r = o(12115),
                s = o(85357),
                i = o(7941);
            let a = e => {
                    let t = document.createElement("script");
                    t.innerHTML = e.content;
                    let o = e.content.match(/src=["'](.*?)["']/);
                    return o && (t.src = o[1], t.innerHTML = ""), e.content.includes("async") && (t.async = !0), e.content.includes("defer") && (t.defer = !0), t
                },
                c = (e, t) => {
                    e.forEach(e => {
                        if (!e.isActive || document.querySelector('script[data-script-id="'.concat(e._id, '"]'))) return;
                        let o = a(e);
                        switch (o.setAttribute("data-script-id", e._id), t) {
                            case i.V.HEADER:
                                document.head.appendChild(o);
                                break;
                            case i.V.MAIN:
                                document.body.insertBefore(o, document.body.firstChild);
                                break;
                            case i.V.FOOTER:
                                document.body.appendChild(o)
                        }
                    })
                },
                l = () => {
                    let {
                        data: e,
                        isLoading: t,
                        error: o
                    } = (0, s.sT)();
                    return (0, r.useEffect)(() => {
                        if (e) return c(e[i.V.HEADER], i.V.HEADER), c(e[i.V.MAIN], i.V.MAIN), c(e[i.V.FOOTER], i.V.FOOTER), () => {
                            document.querySelectorAll("script[data-script-id]").forEach(e => {
                                e.remove()
                            })
                        }
                    }, [e]), {
                        isLoading: t,
                        error: o
                    }
                },
                u = e => {
                    let {
                        children: t
                    } = e;
                    return l(), (0, n.jsx)(n.Fragment, {
                        children: t
                    })
                }
        },
        7941: (e, t, o) => {
            "use strict";
            o.d(t, {
                V: () => i,
                f: () => c
            });
            var n = o(82651),
                r = o(30227),
                s = o(67433),
                i = function(e) {
                    return e.HEADER = "header", e.MAIN = "main", e.FOOTER = "footer", e
                }({});
            let a = s.L9 + r.$.ROUTES.SCRIPTS.BASE,
                c = {
                    getAllScripts: async () => (await n.A.get("".concat(a))).data,
                    getScriptsBySection: async () => (await n.A.get("".concat(a, "/sections"))).data,
                    getScriptsByPosition: async e => (await n.A.get("".concat(a, "/position/").concat(e))).data,
                    getScriptById: async e => (await n.A.get("".concat(a, "/").concat(e))).data,
                    createScript: async e => (await n.A.post("".concat(a), e, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data,
                    updateScript: async (e, t) => (await n.A.patch("".concat(a, "/").concat(e), t, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data,
                    deleteScript: async e => (await n.A.delete("".concat(a, "/").concat(e), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data,
                    toggleScriptActive: async e => (await n.A.patch("".concat(a, "/").concat(e, "/toggle"), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data
                }
        },
        35786: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [3603, 4523, 2651, 5037, 3642, 155, 227, 8441, 1517, 7358], () => t(45090)), _N_E = e.O()
    }
]);