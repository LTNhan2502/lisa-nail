(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6522], {
        7754: (e, t, a) => {
            Promise.resolve().then(a.t.bind(a, 2252, 23)), Promise.resolve().then(a.t.bind(a, 56970, 23)), Promise.resolve().then(a.bind(a, 49701)), Promise.resolve().then(a.bind(a, 17756)), Promise.resolve().then(a.bind(a, 60138))
        },
        68435: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => u,
                AuthProvider: () => h
            });
            var o = a(95155),
                r = a(12115),
                s = a(76046),
                n = a(92922),
                l = a(82651),
                i = a(67433);
            let c = i.L9,
                d = (0, r.createContext)(void 0),
                h = e => {
                    let {
                        children: t
                    } = e, [a, h] = (0, r.useState)(null), [u, g] = (0, r.useState)(null), [m, f] = (0, r.useState)(!1), [p, x] = (0, r.useState)(!1), y = (0, s.useRouter)(), b = (0, r.useCallback)(async () => {
                        let e = a || localStorage.getItem("token");
                        if (!e) return console.log("⚠️ Cannot fetch permissions: No token"), [];
                        x(!0);
                        try {
                            console.log("\uD83D\uDD0D Fetching user permissions from API with token...");
                            let {
                                permissions: t,
                                isAdmin: a
                            } = (await l.A.get("".concat(c).concat(i.pe.AUTH.MY_PERMISSIONS), {
                                headers: {
                                    Authorization: "Bearer ".concat(e)
                                }
                            })).data;
                            if (console.log("✅ Permissions loaded: ".concat((null == t ? void 0 : t.length) || 0, " permissions")), t && Array.isArray(t)) return g(a => {
                                if (!a) try {
                                    let a = (0, n.s)(e);
                                    return f(!0), {
                                        id: a.userId,
                                        email: a.email,
                                        role: a.role,
                                        permissions: t || []
                                    }
                                } catch (e) {
                                    return console.error("❌ Failed to decode token during permission fetch:", e), null
                                }
                                return { ...a,
                                    permissions: t || []
                                }
                            }), t;
                            return console.error("❌ Invalid permissions format received from API"), []
                        } catch (e) {
                            var t;
                            return console.error("❌ Error fetching permissions:", e), l.A.isAxiosError(e) && (null === (t = e.response) || void 0 === t ? void 0 : t.status) === 401 && k(), []
                        } finally {
                            x(!1)
                        }
                    }, [a]);
                    (0, r.useEffect)(() => {
                        (() => {
                            let e = localStorage.getItem("token");
                            e && !m ? (console.log("\uD83D\uDD04 Found token in storage but not authenticated, revalidating..."), w(e)) : !e && m && (console.log("⚠️ No token in storage but authenticated state is true, fixing state..."), f(!1), g(null))
                        })()
                    }, [m]), (0, r.useEffect)(() => {
                        (async () => {
                            try {
                                let e = localStorage.getItem("token");
                                e ? (console.log("\uD83D\uDCDD Found token in localStorage, verifying..."), h(e), await w(e)) : console.log("⚠️ No token found in localStorage")
                            } catch (e) {
                                console.error("❌ Error during initialization:", e)
                            }
                        })()
                    }, []);
                    let w = async e => {
                            let t = e || a || localStorage.getItem("token");
                            if (!t) {
                                console.log("❌ No token found during verification"), k();
                                return
                            }
                            try {
                                console.log("\uD83D\uDD11 Verifying token...");
                                let e = (0, n.s)(t);
                                console.log("✅ Token decoded successfully:", {
                                    userId: e.userId,
                                    role: e.role,
                                    fullName: e.fullName
                                });
                                let a = Math.floor(Date.now() / 1e3);
                                if (e.exp && e.exp < a) {
                                    console.log("❌ Token has expired"), k(), y.replace("/");
                                    return
                                }
                                h(t), localStorage.setItem("token", t);
                                let o = {
                                    id: e.userId,
                                    email: e.email,
                                    role: e.role,
                                    fullName: e.fullName,
                                    avatar: e.avatar,
                                    permissions: []
                                };
                                g(o), f(!0);
                                let r = await b();
                                console.log("\uD83D\uDD12 User authenticated with ".concat(r.length, " permissions"))
                            } catch (e) {
                                console.error("❌ Token verification failed:", e), k()
                            }
                        },
                        v = async e => {
                            try {
                                console.log("\uD83D\uDD11 Processing login with new token..."), localStorage.setItem("token", e), h(e);
                                let t = (0, n.s)(e);
                                g({
                                    id: t.userId,
                                    email: t.email,
                                    role: t.role,
                                    fullName: t.fullName,
                                    avatar: t.avatar,
                                    permissions: []
                                }), f(!0), console.log("\uD83D\uDD04 Fetching permissions after login...");
                                let a = await b();
                                console.log("✅ Login complete with ".concat(a.length, " permissions")), y.replace("/")
                            } catch (e) {
                                console.error("❌ Token decode error during login:", e), k()
                            }
                        },
                        k = () => {
                            console.log("\uD83D\uDEAA Logging out: Clearing token, updating state, and redirecting to login..."), h(null), g(null), f(!1), localStorage.removeItem("token"), y.replace("/")
                        },
                        N = (e, t) => {
                            if (!u) return console.log("⚠️ No user found when checking permission: ".concat(e, ":").concat(t)), !1;
                            if ("admin" === u.role) return console.log("✅ Admin user has access to ".concat(e, ":").concat(t)), !0;
                            if ("technical" === u.role && "users" !== e && "permissions" !== e) return console.log("✅ Technical user has access to ".concat(e, ":").concat(t)), !0;
                            if ("manager" === u.role && !["users", "permissions"].includes(e)) return console.log("✅ Manager user has access to ".concat(e, ":").concat(t)), !0;
                            if (!u.permissions || !(u.permissions.length > 0)) return console.log("⚠️ No permissions loaded yet for: ".concat(e, ":").concat(t)), !1; {
                                let a = u.permissions.some(a => a.resource === e && a.action === t);
                                return (console.log("Permission check for ".concat(e, ":").concat(t, ":"), {
                                    userHasPermission: a,
                                    permissionsCount: u.permissions.length,
                                    userPermissions: u.permissions.map(e => "".concat(e.resource, ":").concat(e.action)).slice(0, 5),
                                    morePermissions: u.permissions.length > 5 ? "...and ".concat(u.permissions.length - 5, " more") : ""
                                }), a) ? (console.log("✅ User has specific permission: ".concat(e, ":").concat(t)), !0) : (console.log("❌ User lacks permission: ".concat(e, ":").concat(t)), !1)
                            }
                        };
                    return (0, o.jsx)(d.Provider, {
                        value: {
                            token: a,
                            user: u,
                            isAuthenticated: m,
                            verifyToken: w,
                            login: v,
                            logout: k,
                            hasAdminAccess: () => u ? "admin" === u.role ? (console.log("✅ User has admin role - granting admin access"), !0) : ["staff", "manager", "technical"].includes(u.role) ? (console.log("✅ User has ".concat(u.role, " role - granting admin access")), !0) : u.permissions && u.permissions.length > 0 ? (console.log("✅ User has ".concat(u.permissions.length, " permissions - granting admin access")), !0) : (console.log("❌ User has no admin access rights"), !1) : (console.log("⚠️ No user found in hasAdminAccess check"), !1),
                            hasPermission: N,
                            hasPathPermission: e => {
                                if (!u) return !1;
                                if ("/admin" === e || "admin" === u.role) return !0;
                                let t = e.split("/").filter(Boolean);
                                if (t.length < 2 || "admin" !== t[0]) return !1;
                                let a = t[1],
                                    o = "read";
                                if (t.length > 2) {
                                    let e = t[2];
                                    "create" === e ? o = "create" : "edit" === e ? o = "update" : "delete" === e && (o = "delete")
                                }
                                return t.length > 3 && "edit" === t[2] && (o = "update"), console.log("\uD83D\uDD0D Path permission check for ".concat(e, ":"), {
                                    derivedResource: a,
                                    derivedAction: o,
                                    pathParts: t,
                                    userRole: u.role
                                }), N(a, o)
                            },
                            fetchUserPermissions: b,
                            isLoadingPermissions: p
                        },
                        children: t
                    })
                },
                u = () => {
                    let e = (0, r.useContext)(d);
                    if (!e) throw Error("useAuth must be used within an AuthProvider");
                    return e
                }
        },
        49701: (e, t, a) => {
            "use strict";
            a.d(t, {
                ProductsProvider: () => g
            });
            var o = a(95155),
                r = a(12115),
                s = a(59012),
                n = a(85310);
            let l = (0, r.createContext)({
                    allProducts: [],
                    isLoading: !0,
                    error: null,
                    categoryCache: {},
                    tagCache: {},
                    setCategoryProducts: () => {},
                    setTagProducts: () => {}
                }),
                i = "decor_all_products",
                c = "decor_category_cache",
                d = "decor_tag_cache",
                h = "decor_products_timestamp",
                u = e => {
                    let t = {},
                        a = {},
                        o = new Set,
                        r = new Set,
                        s = ["style", "Style", "abstract", "Abstract", "minimalist", "Minimalist", "morden-farmhouse", "modern-farmhouse", "Modern-Farmhouse", "Modern Farmhouse", "neo-classical", "Neo-Classical", "Neo Classical", "scandinavian", "Scandinavian", "vintage", "Vintage"],
                        l = {
                            abstract: "abstract",
                            Abstract: "abstract",
                            minimalist: "minimalist",
                            Minimalist: "minimalist",
                            "morden-farmhouse": "modern-farmhouse",
                            "modern-farmhouse": "modern-farmhouse",
                            "Modern-Farmhouse": "modern-farmhouse",
                            "Modern Farmhouse": "modern-farmhouse",
                            "neo-classical": "neo-classical",
                            "Neo-Classical": "neo-classical",
                            "Neo Classical": "neo-classical",
                            scandinavian: "scandinavian",
                            Scandinavian: "scandinavian",
                            vintage: "vintage",
                            Vintage: "vintage",
                            style: "style",
                            Style: "style"
                        };
                    e.forEach(i => {
                        if (i.category) {
                            if (i.category.main) {
                                let a = (0, n.qz)(i.category.main);
                                o.has(a) || (t[a] = (0, n.w)(e, a), o.add(a), console.log("Pre-cached category: ".concat(a, " with ").concat(t[a].length, " products")))
                            }
                            i.category.sub && Array.isArray(i.category.sub) && i.category.sub.forEach(a => {
                                let r = s.includes(a),
                                    i = (0, n.qz)(a);
                                r && l[a] && (i = l[a]), o.has(i) || (t[i] = (0, n.w)(e, i), o.add(i), r ? console.log("Pre-cached style category: ".concat(i, " with ").concat(t[i].length, " products")) : console.log("Pre-cached sub-category: ".concat(i, " with ").concat(t[i].length, " products")))
                            }), i.category.tags && Array.isArray(i.category.tags) && i.category.tags.forEach(t => {
                                let o = (0, n.qz)(t);
                                r.has(o) || (a[o] = (0, n.Kd)(e, o), r.add(o), console.log("Pre-cached tag: ".concat(o, " with ").concat(a[o].length, " products")))
                            })
                        }
                    });
                    let i = e.filter(e => !!e.category && !!e.category.sub && e.category.sub.some(e => s.includes(e) && "style" !== (0, n.qz)(e)));
                    for (let e of (t.style = i, o.add("style"), console.log("Pre-cached main style category with ".concat(i.length, " products")), ["abstract", "minimalist", "modern-farmhouse", "neo-classical", "scandinavian", "vintage"])) o.has(e) || (t[e] = [], o.add(e), console.log("Pre-cached empty style category: ".concat(e)));
                    return {
                        categoryCache: t,
                        tagCache: a
                    }
                };

            function g(e) {
                let {
                    children: t
                } = e, [a, n] = (0, r.useState)({
                    allProducts: [],
                    isLoading: !0,
                    error: null,
                    categoryCache: {},
                    tagCache: {},
                    initialized: !1
                });
                (0, r.useEffect)(() => {
                    if (!a.initialized) try {
                        let e = localStorage.getItem(h),
                            t = e ? parseInt(e) : 0;
                        if (!(Date.now() - t > 36e5)) {
                            let e = localStorage.getItem(i),
                                t = localStorage.getItem(c),
                                a = localStorage.getItem(d);
                            if (e) {
                                let o = JSON.parse(e),
                                    r = t ? JSON.parse(t) : {},
                                    s = a ? JSON.parse(a) : {};
                                if (0 === Object.keys(r).length || 0 === Object.keys(s).length) {
                                    let e = u(o);
                                    r = e.categoryCache, s = e.tagCache, localStorage.setItem(c, JSON.stringify(r)), localStorage.setItem(d, JSON.stringify(s))
                                }
                                n({
                                    allProducts: o,
                                    isLoading: !1,
                                    error: null,
                                    categoryCache: r,
                                    tagCache: s,
                                    initialized: !0
                                });
                                return
                            }
                        }
                        g()
                    } catch (e) {
                        console.error("Error loading from localStorage:", e), g()
                    }
                }, [a.initialized]);
                let g = async () => {
                    try {
                        n(e => ({ ...e,
                            isLoading: !0
                        }));
                        let e = await s.b.getBasicInfo(),
                            {
                                categoryCache: t,
                                tagCache: a
                            } = u(e.data);
                        localStorage.setItem(i, JSON.stringify(e.data)), localStorage.setItem(c, JSON.stringify(t)), localStorage.setItem(d, JSON.stringify(a)), localStorage.setItem(h, Date.now().toString()), n({
                            allProducts: e.data,
                            isLoading: !1,
                            error: null,
                            categoryCache: t,
                            tagCache: a,
                            initialized: !0
                        })
                    } catch (e) {
                        console.error("Lỗi khi tải sản phẩm:", e), n(e => ({ ...e,
                            error: "Kh\xf4ng thể tải danh s\xe1ch sản phẩm",
                            isLoading: !1,
                            initialized: !0
                        }))
                    }
                };
                return (0, r.useEffect)(() => {
                    if (a.initialized) try {
                        localStorage.setItem(c, JSON.stringify(a.categoryCache)), localStorage.setItem(d, JSON.stringify(a.tagCache))
                    } catch (e) {
                        console.error("Error saving cache to localStorage:", e)
                    }
                }, [a.categoryCache, a.tagCache, a.initialized]), (0, o.jsx)(l.Provider, {
                    value: {
                        allProducts: a.allProducts,
                        isLoading: a.isLoading,
                        error: a.error,
                        categoryCache: a.categoryCache,
                        tagCache: a.tagCache,
                        setCategoryProducts: (e, t) => {
                            n(a => ({ ...a,
                                categoryCache: { ...a.categoryCache,
                                    [e]: t
                                }
                            }))
                        },
                        setTagProducts: (e, t) => {
                            n(a => ({ ...a,
                                tagCache: { ...a.tagCache,
                                    [e]: t
                                }
                            }))
                        }
                    },
                    children: t
                })
            }
        },
        59012: (e, t, a) => {
            "use strict";
            a.d(t, {
                b: () => d
            });
            var o = a(30227),
                r = a(67433);
            let s = r.L9 + o.$.ROUTES.IMAGES.UPLOAD,
                n = r.L9 + o.$.ROUTES.PRODUCTS.BASE,
                l = r.L9 + o.$.ROUTES.CATEGORIES_PRODUCT.BASE,
                i = async e => {
                    if (!e.ok) {
                        let t = await e.json().catch(() => null);
                        throw console.error("API Error Response:", {
                            status: e.status,
                            statusText: e.statusText,
                            errorData: t
                        }), Error((null == t ? void 0 : t.message) || "Lỗi khi xử l\xfd y\xeau cầu")
                    }
                    return e.json()
                },
                c = (e, t) => ({
                    method: e,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(localStorage.getItem("token"))
                    },
                    body: t ? JSON.stringify(t) : void 0
                }),
                d = {
                    getAll: async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
                        try {
                            let a = await fetch("".concat(n, "?page=").concat(e, "&limit=").concat(t));
                            if (!a.ok) throw Error("Lỗi API: ".concat(a.status, " - ").concat(a.statusText));
                            let o = await i(a);
                            if (!o || !o.data) throw Error("Dữ liệu trả về kh\xf4ng hợp lệ");
                            return o
                        } catch (e) {
                            throw console.error("Lỗi khi lấy danh s\xe1ch sản phẩm c\xf3 ph\xe2n trang:", e), e
                        }
                    },
                    getBasicInfo: async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
                        return i(await fetch("".concat(n, "/basic-info?page=").concat(e, "&limit=").concat(t)))
                    },
                    getByCategory: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16;
                        try {
                            let o = encodeURIComponent(e),
                                r = await fetch("".concat(n, "/bycategory/").concat(o, "?page=").concat(t, "&limit=").concat(a));
                            if (!r.ok) throw Error("Lỗi API: ".concat(r.status, " - ").concat(r.statusText));
                            return i(r)
                        } catch (a) {
                            return console.error('Lỗi khi lấy danh s\xe1ch sản phẩm theo danh mục "'.concat(e, '":'), a), {
                                data: [],
                                total: 0,
                                page: t,
                                totalPages: 0
                            }
                        }
                    },
                    getOne: async e => {
                        try {
                            let t = await fetch("".concat(n, "/").concat(e));
                            return i(t)
                        } catch (t) {
                            throw console.error("Lỗi khi lấy sản phẩm với slug ".concat(e, ":"), t), t
                        }
                    },
                    create: async e => {
                        try {
                            let t = !!(e.variants && e.variants.length > 0),
                                a = { ...e,
                                    hasVariants: t,
                                    stock: t ? void 0 : e.stock || 0
                                };
                            console.log("Creating product with data:", a);
                            let o = await fetch(n, c("POST", a));
                            if (!o.ok) {
                                let e = await o.text();
                                console.error("Create product error details:", {
                                    status: o.status,
                                    statusText: o.statusText,
                                    responseText: e,
                                    requestData: a
                                });
                                try {
                                    let t = JSON.parse(e);
                                    throw Error(t.message || "Lỗi khi tạo sản phẩm")
                                } catch (t) {
                                    throw console.log(t), Error("Lỗi khi tạo sản phẩm: ".concat(e))
                                }
                            }
                            return i(o)
                        } catch (e) {
                            throw console.error("Lỗi chi tiết khi tạo sản phẩm:", e), e
                        }
                    },
                    update: async (e, t) => {
                        try {
                            let a = !!(t.variants && t.variants.length > 0),
                                o = { ...t,
                                    hasVariants: a,
                                    stock: a ? void 0 : t.stock || 0
                                },
                                r = await fetch("".concat(n, "/").concat(e), c("PUT", o));
                            return i(r)
                        } catch (t) {
                            throw console.error("Lỗi khi cập nhật sản phẩm ".concat(e, ":"), t), t
                        }
                    },
                    remove: async e => {
                        try {
                            let t = await fetch("".concat(n, "/").concat(e), c("DELETE"));
                            await i(t)
                        } catch (t) {
                            throw console.error("Lỗi khi x\xf3a sản phẩm ".concat(e, ":"), t), t
                        }
                    },
                    uploadImage: async e => {
                        try {
                            let t = new FormData;
                            t.append("file", e);
                            let a = await fetch(s, {
                                    method: "POST",
                                    body: t,
                                    headers: {
                                        Authorization: "Bearer ".concat(localStorage.getItem("token"))
                                    }
                                }),
                                o = await i(a);
                            if (!o.imageUrl) throw Error("Kh\xf4ng t\xecm thấy URL ảnh");
                            return {
                                url: o.imageUrl
                            }
                        } catch (e) {
                            throw console.error("Lỗi khi upload ảnh:", e), e
                        }
                    },
                    getAllCategories: async () => {
                        try {
                            let e = await fetch(l);
                            return i(e)
                        } catch (e) {
                            throw console.error("Lỗi khi lấy danh mục sản phẩm:", e), e
                        }
                    },
                    searchByName: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16;
                        try {
                            let o = encodeURIComponent(e),
                                r = await fetch("".concat(n, "/search?q=").concat(o, "&page=").concat(t, "&limit=").concat(a));
                            if (!r.ok) throw Error("Lỗi API: ".concat(r.status, " - ").concat(r.statusText));
                            let s = await i(r);
                            if (!s || !s.data) throw Error("Dữ liệu trả về kh\xf4ng hợp lệ");
                            return s
                        } catch (e) {
                            throw console.error("Lỗi khi t\xecm kiếm sản phẩm:", e), e
                        }
                    },
                    updateVariants: async (e, t) => {
                        try {
                            let a = await fetch("".concat(n, "/").concat(e, "/variants"), c("PUT", {
                                variants: t,
                                hasVariants: !0
                            }));
                            return i(a)
                        } catch (t) {
                            throw console.error("Lỗi khi cập nhật biến thể sản phẩm ".concat(e, ":"), t), t
                        }
                    },
                    updateVariantAttributes: async (e, t) => {
                        try {
                            let a = await fetch("".concat(n, "/").concat(e, "/variant-attributes"), c("PUT", {
                                variantAttributes: t
                            }));
                            return i(a)
                        } catch (t) {
                            throw console.error("Lỗi khi cập nhật thuộc t\xednh biến thể sản phẩm ".concat(e, ":"), t), t
                        }
                    },
                    updateStock: async (e, t) => {
                        try {
                            let a = await fetch("".concat(n, "/").concat(e, "/stock"), c("PUT", {
                                stock: t
                            }));
                            return i(a)
                        } catch (t) {
                            throw console.error("Lỗi khi cập nhật số lượng tồn kho sản phẩm ".concat(e, ":"), t), t
                        }
                    }
                }
        },
        17756: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => u
            });
            var o = a(95155),
                r = a(11536),
                s = a(48173),
                n = a.n(s),
                l = a(5565),
                i = a(12115),
                c = a(47650);
            let d = e => {
                let {
                    percentage: t,
                    size: a = 48,
                    strokeWidth: r = 4,
                    circleColor: s = "#e6e6e6",
                    progressColor: n = "#F9DD82"
                } = e, l = (a - r) / 2, i = 2 * Math.PI * l;
                return (0, o.jsxs)("svg", {
                    width: a,
                    height: a,
                    viewBox: "0 0 ".concat(a, " ").concat(a),
                    className: "transform -rotate-90",
                    children: [(0, o.jsx)("circle", {
                        stroke: s,
                        fill: "transparent",
                        strokeWidth: r,
                        r: l,
                        cx: a / 2,
                        cy: a / 2,
                        className: "opacity-30"
                    }), (0, o.jsx)("circle", {
                        stroke: n,
                        fill: "transparent",
                        strokeWidth: r,
                        r: l,
                        cx: a / 2,
                        cy: a / 2,
                        strokeDasharray: i,
                        strokeDashoffset: i - t / 100 * i,
                        strokeLinecap: "butt",
                        style: {
                            transition: "stroke-dashoffset 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            filter: "drop-shadow(0 0 3px rgba(31, 41, 55, 0.4))"
                        }
                    })]
                })
            };
            if ("undefined" != typeof document) {
                let e = document.createElement("style");
                e.textContent = "\n  @keyframes pulse-ring {\n    0% {\n      transform: scale(0.8);\n      opacity: 1;\n    }\n    100% {\n      transform: scale(2.4);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes pulse-dot {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n", document.head.appendChild(e)
            }
            let h = [{
                    label: "About Us",
                    href: "/about"
                }, {
                    label: "Our Services",
                    href: "/services"
                }, {
                    label: "Blog",
                    href: "/posts"
                }, {
                    label: "Contact Us",
                    href: "/contact"
                }],
                u = () => {
                    let [e, t] = (0, i.useState)(!1), [a, s] = (0, i.useState)(0), [u, g] = (0, i.useState)(!1), m = () => {
                        window.scrollY > 200 ? t(!0) : t(!1);
                        let e = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                            a = window.scrollY;
                        e > 0 && s(Math.min(100, a / e * 100))
                    };
                    return (0, i.useEffect)(() => (window.addEventListener("scroll", m), () => {
                        window.removeEventListener("scroll", m)
                    }), []), (0, i.useEffect)(() => {
                        g(!0)
                    }, []), (0, o.jsxs)("footer", {
                        className: "relative z-10 !bg-black text-white pt-20 pb-12 w-full mt-auto",
                        children: [(0, o.jsx)("div", {
                            className: "container mx-auto px-8",
                            children: (0, o.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto",
                                children: [(0, o.jsxs)("div", {
                                    className: "space-y-8",
                                    children: [(0, o.jsx)("div", {
                                        className: "flex flex-col items-start",
                                        children: (0, o.jsx)(l.default, {
                                            src: "/image/logo.png",
                                            alt: "NailLux Logo",
                                            width: 120,
                                            height: 120,
                                            className: "mb-6 drop-shadow-lg"
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: "text-left",
                                        children: [(0, o.jsx)("p", {
                                            className: "text-white text-lg mb-4 font-semibold",
                                            children: "We Are Available:"
                                        }), (0, o.jsx)("p", {
                                            className: "text-gray-200 text-lg",
                                            children: "Mon - Sat: 9am - 8pm"
                                        }), (0, o.jsx)("p", {
                                            className: "text-gray-200 text-lg",
                                            children: "Sunday: 10am - 6pm"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: "flex space-x-4 justify-start",
                                        children: [(0, o.jsx)("a", {
                                            href: "https://www.facebook.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-12 h-12 bg-gray-600 rounded flex items-center justify-center hover:bg-blue-600 transition-colors duration-300",
                                            children: (0, o.jsx)("span", {
                                                className: "text-white text-lg font-bold",
                                                children: "f"
                                            })
                                        }), (0, o.jsx)("a", {
                                            href: "https://www.instagram.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-12 h-12 bg-gray-600 rounded flex items-center justify-center hover:bg-pink-600 transition-colors duration-300",
                                            children: (0, o.jsx)("span", {
                                                className: "text-white text-lg",
                                                children: "★"
                                            })
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, o.jsx)("h3", {
                                        className: "text-white text-2xl font-semibold border-b border-dashed border-gray-400 pb-3",
                                        children: "Quick Link"
                                    }), (0, o.jsx)("div", {
                                        className: "space-y-4",
                                        children: h.map((e, t) => (0, o.jsxs)(n(), {
                                            href: e.href,
                                            className: "flex items-center text-gray-200 hover:text-white transition-colors duration-300 text-lg",
                                            children: [(0, o.jsx)(r.Z0P, {
                                                className: "text-base mr-3"
                                            }), e.label]
                                        }, t))
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, o.jsx)("h3", {
                                        className: "text-white text-2xl font-semibold border-b border-dashed border-gray-400 pb-3",
                                        children: "Contact Details"
                                    }), (0, o.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, o.jsxs)("div", {
                                            className: "flex items-center text-gray-200 text-lg",
                                            children: [(0, o.jsx)(r.Cab, {
                                                className: "mr-4 text-xl"
                                            }), (0, o.jsx)("span", {
                                                children: "818-758-4076"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "flex items-center text-gray-200 text-lg",
                                            children: [(0, o.jsx)(r.vq8, {
                                                className: "mr-4 text-xl"
                                            }), (0, o.jsx)("span", {
                                                children: "18221 N Pima Rd Scottsdale AZ 85255"
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, o.jsx)("h3", {
                                        className: "text-white text-2xl font-semibold border-b border-dashed border-gray-400 pb-3",
                                        children: "Newsletter"
                                    }), (0, o.jsx)("p", {
                                        className: "text-gray-200 text-lg leading-relaxed",
                                        children: "Sign Up to get updates & news about us. Get Latest Deals from NailLux to our mail address."
                                    }), (0, o.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, o.jsx)("input", {
                                            type: "email",
                                            placeholder: "Email",
                                            className: "w-full px-4 py-4 bg-white text-black rounded text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        }), (0, o.jsxs)("button", {
                                            className: "w-full bg-white text-black py-4 px-6 rounded flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 text-lg font-medium",
                                            children: ["SUBSCRIBE NOW", (0, o.jsx)(r.Z0P, {
                                                className: "ml-2 text-base"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), u && (0, c.createPortal)((0, o.jsxs)("div", {
                            className: "fixed bottom-8 right-8 space-y-4 z-[100000]",
                            children: [(0, o.jsxs)("div", {
                                className: "relative",
                                children: [(0, o.jsx)("div", {
                                    className: "absolute inset-0 rounded-full opacity-75",
                                    style: {
                                        backgroundColor: "#EAC463",
                                        animation: "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite"
                                    }
                                }), (0, o.jsx)("div", {
                                    className: "absolute inset-0 rounded-full opacity-75",
                                    style: {
                                        backgroundColor: "#EAC463",
                                        animation: "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                                        animationDelay: "0.5s"
                                    }
                                }), (0, o.jsx)("button", {
                                    className: "relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10",
                                    onClick: () => window.open("tel:480 513 4068", "_self"),
                                    "aria-label": "Gọi điện thoại",
                                    style: {
                                        backgroundColor: "#EAC463",
                                        animation: "pulse-dot 1.5s ease-in-out infinite"
                                    },
                                    children: (0, o.jsx)(r.Cab, {
                                        className: "text-black text-lg"
                                    })
                                })]
                            }), e && (0, o.jsxs)("button", {
                                className: "w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 relative",
                                onClick: () => {
                                    let e = Date.now(),
                                        t = () => {
                                            let o = Math.min((Date.now() - e) / 800, 1);
                                            s(a * (1 - (1 - Math.pow(1 - o, 3)))), o < 1 ? requestAnimationFrame(t) : s(0)
                                        };
                                    requestAnimationFrame(t), setTimeout(() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        })
                                    }, 100)
                                },
                                "aria-label": "L\xean đầu trang",
                                children: [(0, o.jsx)(d, {
                                    percentage: a,
                                    size: 56,
                                    strokeWidth: 5,
                                    progressColor: "#5d4c16",
                                    circleColor: "rgba(255, 255, 255, 0.3)"
                                }), (0, o.jsx)(r.uCC, {
                                    className: "text-[#5d4c16] text-lg absolute"
                                })]
                            })]
                        }), document.body)]
                    })
                }
        },
        60138: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => p
            });
            var o = a(95155),
                r = a(58803),
                s = a.n(r),
                n = a(76046),
                l = a(48173),
                i = a.n(l);

            function c(e) {
                let t = document.getElementById(e);
                if (!t) return;
                let a = document.getElementById("site-header"),
                    o = a ? a.getBoundingClientRect().height : 0,
                    r = t.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: Math.max(r - o - 64, 0),
                    behavior: "smooth"
                })
            }

            function d(e) {
                return "/" === e || (null == e ? void 0 : e.startsWith("/home"))
            }
            var h = a(12115),
                u = a(11536);
            let g = () => {
                    let [e, t] = (0, h.useState)(!1), [a, r] = (0, h.useState)(!0), l = (0, n.usePathname)();
                    if ((0, h.useEffect)(() => {
                            r(!1)
                        }, []), (0, h.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                            document.body.style.overflow = ""
                        }), [e]), a) return null;
                    let g = () => {
                        t(!e)
                    };
                    return (0, o.jsxs)("div", {
                        className: "jsx-2a6d5107099d8572 md:hidden",
                        children: [(0, o.jsx)("div", {
                            className: "jsx-2a6d5107099d8572 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl shadow-2xl border-b border-yellow-400/20 sticky top-0 z-50",
                            children: (0, o.jsx)("div", {
                                className: "jsx-2a6d5107099d8572 container mx-auto p-3",
                                children: (0, o.jsxs)("div", {
                                    className: "jsx-2a6d5107099d8572 flex items-center justify-between",
                                    children: [(0, o.jsx)("div", {
                                        className: "jsx-2a6d5107099d8572 flex items-center",
                                        children: (0, o.jsx)(i(), {
                                            href: "/#hero",
                                            className: "logo transition-all duration-300 ease-out hover:scale-110",
                                            onClick: e => {
                                                d(l) && (e.preventDefault(), c("hero"))
                                            },
                                            children: (0, o.jsx)("img", {
                                                src: "/image/logo.png",
                                                alt: "NailLux Logo",
                                                loading: "lazy",
                                                className: "jsx-2a6d5107099d8572 h-14 w-auto drop-shadow-lg"
                                            })
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "jsx-2a6d5107099d8572 flex items-center gap-3",
                                        children: (0, o.jsx)("button", {
                                            onClick: g,
                                            className: "jsx-2a6d5107099d8572 p-2 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 ease-out",
                                            children: e ? (0, o.jsx)(u.QCr, {
                                                size: 24,
                                                className: "text-yellow-400"
                                            }) : (0, o.jsx)(u.OXb, {
                                                size: 24,
                                                className: "text-yellow-400"
                                            })
                                        })
                                    })]
                                })
                            })
                        }), e && (0, o.jsx)("div", {
                            onClick: g,
                            className: "jsx-2a6d5107099d8572 fixed inset-0 bg-black bg-opacity-50 z-[99]"
                        }), (0, o.jsxs)("div", {
                            className: "jsx-2a6d5107099d8572 " + "fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-black via-gray-900 to-black z-[100] transform ".concat(e ? "translate-x-0" : "-translate-x-full", " transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl"),
                            children: [(0, o.jsxs)("div", {
                                className: "jsx-2a6d5107099d8572 p-6 flex items-center justify-between border-b border-yellow-400/20 bg-gradient-to-r from-black/95 to-gray-900/95",
                                children: [(0, o.jsx)("div", {
                                    className: "jsx-2a6d5107099d8572 flex items-center",
                                    children: (0, o.jsx)("img", {
                                        src: "/image/logo.png",
                                        alt: "NailLux Logo",
                                        className: "jsx-2a6d5107099d8572 h-14 w-auto drop-shadow-lg"
                                    })
                                }), (0, o.jsx)("button", {
                                    onClick: g,
                                    className: "jsx-2a6d5107099d8572 text-yellow-400 hover:text-yellow-300 p-2 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 ease-out",
                                    children: (0, o.jsx)(u.QCr, {
                                        size: 20
                                    })
                                })]
                            }), (0, o.jsx)("ul", {
                                className: "jsx-2a6d5107099d8572 px-6 py-8 space-y-2",
                                children: [{
                                    label: "HOME",
                                    targetId: "hero"
                                }, {
                                    label: "OUR SERVICES",
                                    targetId: "our-services"
                                }, {
                                    label: "GALLERY",
                                    targetId: "gallery"
                                }, {
                                    label: "SERVICES & PRICING",
                                    targetId: "services-1"
                                }, {
                                    label: "ABOUT US",
                                    targetId: "about-us"
                                }].map((e, t) => (0, o.jsx)("li", {
                                    className: "jsx-2a6d5107099d8572",
                                    children: (0, o.jsx)(i(), {
                                        href: "/#".concat(e.targetId),
                                        onClick: t => {
                                            d(l) && (t.preventDefault(), c(e.targetId)), g()
                                        },
                                        className: "nav-link block py-4 px-6 rounded-xl transition-all duration-300 ease-out font-inter text-lg font-medium border border-transparent ".concat(0 === t ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/30 shadow-lg shadow-yellow-400/20" : "text-white hover:text-yellow-400 hover:bg-yellow-400/5 hover:border-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/10"),
                                        children: e.label
                                    })
                                }, e.label))
                            })]
                        }), (0, o.jsx)(s(), {
                            id: "2a6d5107099d8572",
                            children: ".nav-link{text-decoration:none;position:relative}.nav-link:hover{text-decoration:none}.submenu-product-item{border:1px solid#d9ab17;padding:8px 12px;text-align:center;color:#555;font-size:15px;font-weight:400;min-width:160px;display:block;text-decoration:none;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;white-space:nowrap}.submenu-product-item:hover{border-color:#d26d00;color:#d26d00;background-color:rgba(242,242,242,.5)}"
                        })]
                    })
                },
                m = () => {
                    let [e, t] = (0, h.useState)(!1), [a, r] = (0, h.useState)("hero"), s = (0, n.usePathname)(), l = (0, h.useMemo)(() => [{
                        label: "HOME",
                        targetId: "hero"
                    }, {
                        label: "ABOUT US",
                        targetId: "about-us"
                    }, {
                        label: "OUR SERVICES",
                        targetId: "our-services"
                    }, {
                        label: "GALLERY",
                        targetId: "gallery"
                    }], []), u = (0, h.useMemo)(() => [{
                        label: "SERVICES & PRICING",
                        targetId: "services-1"
                    }], []), g = (0, h.useMemo)(() => [...l, ...u], [l, u]);
                    return (0, h.useEffect)(() => {
                        let e = !1,
                            a = () => {
                                e || (requestAnimationFrame(() => {
                                    let a = window.scrollY;
                                    for (let e of (t(a > 50), [...l, ...u].map(e => e.targetId))) {
                                        let t = document.getElementById(e);
                                        if (t) {
                                            let o = t.getBoundingClientRect().top + a;
                                            if (a + 100 >= o - 150 && a + 100 < o + t.offsetHeight - 150) {
                                                r(e);
                                                break
                                            }
                                        }
                                    }
                                    e = !1
                                }), e = !0)
                            };
                        return window.addEventListener("scroll", a, {
                            passive: !0
                        }), () => window.removeEventListener("scroll", a)
                    }, [l, u]), (0, o.jsx)("div", {
                        id: "site-header",
                        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ".concat(e ? "bg-black shadow-2xl border-b border-yellow-400/20" : "bg-transparent", " block"),
                        children: (0, o.jsx)("div", {
                            className: "max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3",
                            children: (0, o.jsxs)("div", {
                                className: "flex items-center justify-between w-full",
                                children: [(0, o.jsx)(i(), {
                                    href: "/#hero",
                                    className: "flex items-center",
                                    onClick: e => {
                                        d(s) && (e.preventDefault(), c("hero"))
                                    },
                                    children: (0, o.jsx)("img", {
                                        src: "/image/logo.png",
                                        alt: "NailLux Logo",
                                        className: "h-16 w-auto drop-shadow-lg transition-all duration-500 ease-out ".concat(e ? "h-12" : "h-16")
                                    })
                                }), (0, o.jsx)("nav", {
                                    className: "flex items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 px-1 flex-1 overflow-x-auto whitespace-nowrap transition-all duration-500 ease-out ".concat(e ? "h-12" : "h-16"),
                                    style: {
                                        fontFamily: "'Montserrat', sans-serif"
                                    },
                                    children: g.map(e => {
                                        var t;
                                        let r = "/#".concat(null !== (t = e.targetId) && void 0 !== t ? t : ""),
                                            n = a === e.targetId;
                                        return (0, o.jsx)(i(), {
                                            href: r,
                                            onClick: t => {
                                                d(s) && e.targetId && (t.preventDefault(), c(e.targetId))
                                            },
                                            className: "group relative transition-all duration-300 ease-out font-inter text-base sm:text-lg lg:text-xl font-medium focus-visible:outline-none ".concat(n ? "text-[#EAC463] transform scale-105 drop-shadow-lg" : "text-white hover:text-[#EAC463] hover:scale-105 focus-visible:text-[#EAC463]"),
                                            children: (0, o.jsxs)("span", {
                                                className: "relative inline-block",
                                                children: [(0, o.jsx)("span", {
                                                    children: e.label
                                                }), (0, o.jsx)("span", {
                                                    className: "absolute left-0 -bottom-1 h-px bg-[#EAC463] w-full origin-left transform transition-transform duration-300 ease-out ".concat(n ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100")
                                                })]
                                            })
                                        }, e.label)
                                    })
                                }), (0, o.jsxs)("a", {
                                    href: "https://booking.salondragon.com/luster",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "relative group overflow-hidden inline-flex items-center justify-center border border-[#EAC463] text-[#EAC463] bg-transparent px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold tracking-wide uppercase transition-colors duration-300",
                                    children: [(0, o.jsx)("span", {
                                        className: "relative z-10 group-hover:text-black transition-colors duration-300",
                                        children: "Book now"
                                    }), (0, o.jsx)("span", {
                                        className: "pointer-events-none absolute left-0 top-0 h-full w-0 bg-[#EAC463] transition-[width] duration-300 ease-out group-hover:w-full"
                                    })]
                                })]
                            })
                        })
                    })
                };
            var f = a(68435);
            let p = () => {
                let e = (0, n.usePathname)(),
                    {
                        hasPermission: t,
                        user: a
                    } = (0, f.A)(),
                    r = null == e ? void 0 : e.startsWith("/posts/"),
                    l = null == e ? void 0 : e.startsWith("/san-pham/"),
                    i = r ? e.split("/").pop() : null,
                    c = l ? e.split("/").pop() : null,
                    d = t("posts", "update") || (null == a ? void 0 : a.role) === "admin",
                    h = t("products", "update") || (null == a ? void 0 : a.role) === "admin";
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s(), {
                        id: "663324977d8e673d",
                        children: ".submenu-product-item{border:1px solid#d9ab17;padding:8px 12px;text-align:center;color:#555;font-size:15px;font-weight:400;min-width:160px;display:block;text-decoration:none;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;white-space:nowrap}.submenu-product-item:hover{border-color:#d26d00;color:#d26d00;background-color:rgba(242,242,242,.5)}.submenu-container{background-color:white;border:1px solid#d9ab17;z-index:50}"
                    }), (0, o.jsxs)("div", {
                        id: "site-header",
                        style: {
                            top: r && d && i || l && h && c ? 36 : 0
                        },
                        className: "jsx-663324977d8e673d sticky z-50 shadow",
                        children: [(0, o.jsx)(m, {}), (0, o.jsx)(g, {})]
                    })]
                })
            }
        },
        85310: (e, t, a) => {
            "use strict";
            a.d(t, {
                Kd: () => n,
                qz: () => o,
                rb: () => s,
                w: () => r
            });
            let o = e => s(e).toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                r = (e, t) => {
                    if (!e || 0 === e.length) return [];
                    let a = ["style", "abstract", "minimalist", "modern-farmhouse", "neo-classical", "scandinavian", "vintage"].includes(t.toLowerCase()),
                        r = {
                            abstract: ["Abstract", "abstract", "Abstract Art", "abstract art"],
                            minimalist: ["Minimalist", "minimalist", "Minimal", "minimal"],
                            "modern-farmhouse": ["Modern Farmhouse", "modern farmhouse", "Modern-Farmhouse", "Morden Farmhouse"],
                            "neo-classical": ["Neo Classical", "Neo-Classical", "neo-classical", "Neo classical", "Neoclassical"],
                            scandinavian: ["Scandinavian", "scandinavian", "Scandi", "Nordic"],
                            vintage: ["Vintage", "vintage", "Retro", "retro"],
                            style: ["Style", "style"]
                        };
                    return e.filter(e => {
                        if (!e.category) return !1;
                        if (o(e.category.main || "") === t) return !0;
                        if (e.category.sub && Array.isArray(e.category.sub)) {
                            if (!a) return e.category.sub.some(e => o(e) === t); {
                                let a = r[t] || [t];
                                return e.category.sub.some(e => !!a.includes(e) || o(e) === t)
                            }
                        }
                        return !1
                    })
                },
                s = e => e.normalize("NFD").replace(/đ/g, "d").replace(/Đ/g, "D").replace(/[\u0300-\u036f]/g, ""),
                n = (e, t) => {
                    if (!e || 0 === e.length) return [];
                    let a = ["style", "abstract", "minimalist", "morden-farmhouse", "modern-farmhouse", "neo-classical", "scandinavian", "vintage"].includes(t.toLowerCase());
                    return e.filter(e => !!e.category && (a && e.category.sub && Array.isArray(e.category.sub) ? e.category.sub.some(e => o(e) === t) : !!(e.category.tags && Array.isArray(e.category.tags)) && e.category.tags.some(e => o(e) === t)))
                }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [5792, 6711, 2651, 8173, 5565, 2073, 227, 8441, 1517, 7358], () => t(7754)), _N_E = e.O()
    }
]);