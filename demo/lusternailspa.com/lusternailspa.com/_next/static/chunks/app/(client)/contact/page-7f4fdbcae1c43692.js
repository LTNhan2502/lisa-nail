(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5830], {
        71902: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 57254))
        },
        67401: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => E
            });
            var i = t(12115);
            let s = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                o = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, a, t) => t ? t.toUpperCase() : a.toLowerCase()),
                c = e => {
                    let a = o(e);
                    return a.charAt(0).toUpperCase() + a.slice(1)
                },
                n = function() {
                    for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return a.filter((e, a, t) => !!e && "" !== e.trim() && t.indexOf(e) === a).join(" ").trim()
                },
                r = e => {
                    for (let a in e)
                        if (a.startsWith("aria-") || "role" === a || "title" === a) return !0
                };
            var p = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let l = (0, i.forwardRef)((e, a) => {
                    let {
                        color: t = "currentColor",
                        size: s = 24,
                        strokeWidth: o = 2,
                        absoluteStrokeWidth: c,
                        className: l = "",
                        children: E,
                        iconNode: u,
                        ...d
                    } = e;
                    return (0, i.createElement)("svg", {
                        ref: a,
                        ...p,
                        width: s,
                        height: s,
                        stroke: t,
                        strokeWidth: c ? 24 * Number(o) / Number(s) : o,
                        className: n("lucide", l),
                        ...!E && !r(d) && {
                            "aria-hidden": "true"
                        },
                        ...d
                    }, [...u.map(e => {
                        let [a, t] = e;
                        return (0, i.createElement)(a, t)
                    }), ...Array.isArray(E) ? E : [E]])
                }),
                E = (e, a) => {
                    let t = (0, i.forwardRef)((t, o) => {
                        let {
                            className: r,
                            ...p
                        } = t;
                        return (0, i.createElement)(l, {
                            ref: o,
                            iconNode: a,
                            className: n("lucide-".concat(s(c(e))), "lucide-".concat(e), r),
                            ...p
                        })
                    });
                    return t.displayName = c(e), t
                }
        },
        67433: (e, a, t) => {
            "use strict";
            t.d(a, {
                L9: () => i,
                QQ: () => o,
                pe: () => s
            });
            let i = "http://localhost:5512",
                s = {
                    ADDRESSES: {
                        BASE: "/addressesapi",
                        CREATE: "/addressesapi",
                        GET_ALL: "/addressesapi",
                        GET_BY_ID: e => "/addressesapi/".concat(e),
                        UPDATE: e => "/addressesapi/".concat(e),
                        DELETE: e => "/addressesapi/".concat(e),
                        SET_DEFAULT: e => "/addressesapi/".concat(e, "/default")
                    },
                    AUTH: {
                        BASE: "/authapi",
                        CHECK_EMAIL: "/authapi/check-email",
                        REGISTER: "/authapi/register",
                        LOGIN: "/authapi/login",
                        LOGOUT: "/authapi/logout",
                        ME: "/authapi/me",
                        MY_PERMISSIONS: "/authapi/my-permissions",
                        USERS: "/authapi/users",
                        UPDATE: "/authapi/update",
                        GOOGLE: "/authapi/google",
                        GOOGLE_REDIRECT: "/authapi/google/redirect",
                        REQUEST_PASSWORD_RESET: "/authapi/request-password-reset",
                        VERIFY_OTP: "/authapi/verify-otp",
                        RESET_PASSWORD_WITH_TOKEN: "/authapi/reset-password/token",
                        RESET_PASSWORD_WITH_OTP: "/authapi/reset-password/otp",
                        CHECK_PERMISSION: "/authapi/check-permission",
                        METAMASK: {
                            NONCE: "/authapi/metamask/nonce",
                            AUTHENTICATE: "/authapi/metamask/authenticate",
                            LINK: "/authapi/metamask/link",
                            WALLETS: "/authapi/metamask/wallets",
                            WALLETS_BY_ADDRESS: e => "/authapi/metamask/wallets/".concat(e),
                            WALLETS_BY_ADDRESS_PRIMARY: e => "/authapi/metamask/wallets/".concat(e, "/primary")
                        }
                    },
                    BANNERS: {
                        BASE: "/bannersapi",
                        CREATE: "/bannersapi",
                        GET_ALL: "/bannersapi",
                        GET_ACTIVE_BY_TYPE: e => "/bannersapi/active/".concat(e),
                        GET_BY_ID: e => "/bannersapi/".concat(e),
                        UPDATE: e => "/bannersapi/".concat(e),
                        UPDATE_ORDER: e => "/bannersapi/".concat(e, "/order"),
                        TOGGLE_ACTIVE: e => "/bannersapi/".concat(e, "/toggle-active"),
                        DELETE: e => "/bannersapi/".concat(e)
                    },
                    CATEGORIES_POST: {
                        BASE: "/category-postsapi",
                        CREATE: "/category-postsapi",
                        UPDATE: e => "/category-postsapi/".concat(e),
                        GET_ONE: e => "/category-postsapi/".concat(e),
                        GET_ALL: e => {
                            let a = "/category-postsapi";
                            if (e) {
                                let t = new URLSearchParams;
                                void 0 !== e.page && t.append("page", String(e.page)), void 0 !== e.limit && t.append("limit", String(e.limit)), e.search && t.append("search", e.search);
                                let i = t.toString();
                                i && (a += "?".concat(i))
                            }
                            return a
                        },
                        SOFT_DELETE: e => "/category-postsapi/".concat(e, "/soft-delete"),
                        DELETE: e => "/category-postsapi/".concat(e)
                    },
                    CATEGORIES_PRODUCT: {
                        BASE: "/categories-productsapi",
                        CREATE: "/categories-productsapi",
                        GET_ALL: "/categories-productsapi",
                        GET_BY_ID: e => "/categories-productsapi/id/".concat(e),
                        GET_MAIN: "/categories-productsapi/main",
                        GET_SUB_BY_PARENT_ID: e => "/categories-productsapi/sub/".concat(e),
                        GET_BY_SLUG: e => "/categories-productsapi/".concat(e),
                        UPDATE: e => "/categories-productsapi/".concat(e),
                        DELETE: e => "/categories-productsapi/".concat(e)
                    },
                    CHECKOUTS: {
                        BASE: "/checkoutsapi",
                        CREATE: "/checkoutsapi",
                        GET_ALL: "/checkoutsapi",
                        GET_BY_SLUG: e => "/checkoutsapi/".concat(e),
                        UPDATE: e => "/checkoutsapi/".concat(e),
                        UPDATE_PAYMENT_STATUS: e => "/checkoutsapi/".concat(e, "/payment-status"),
                        DELETE: e => "/checkoutsapi/".concat(e),
                        METAMASK: {
                            BASE: "/checkoutsapi/metamask",
                            VERIFY_TRANSACTION: e => "/checkoutsapi/metamask/".concat(e, "/verify"),
                            GENERATE_PAYMENT_INFO: e => "/checkoutsapi/metamask/".concat(e, "/payment-info")
                        }
                    },
                    CONTACTS: {
                        BASE: "/contactsapi",
                        CREATE: "/contactsapi",
                        GET_ALL: "/contactsapi",
                        GET_BY_ID: e => "/contactsapi/".concat(e),
                        DELETE: e => "/contactsapi/".concat(e)
                    },
                    CREATE_PAGES: {
                        BASE: "/pagesapi",
                        CREATE: "/pagesapi",
                        GET_ALL: "/pagesapi",
                        GET_BY_SLUG: e => "/pagesapi/by-slug/".concat(e),
                        UPDATE: e => "/pagesapi/by-slug/".concat(e),
                        DELETE: e => "/pagesapi/by-slug/".concat(e)
                    },
                    IMAGES: {
                        BASE: "/imagesapi",
                        GET_ALL: "/imagesapi",
                        UPLOAD: "/imagesapi/upload",
                        UPLOAD_MULTIPLE: "/imagesapi/upload-multiple",
                        UPLOAD_SUNEDITOR: "/imagesapi/sunEditor",
                        DELETE: e => "/imagesapi/".concat(e)
                    },
                    INFO_WEBSITE: {
                        BASE: "/info-websitesapi",
                        CREATE: "/info-websitesapi",
                        GET_ALL: "/info-websitesapi",
                        GET_ACTIVE: "/info-websitesapi/active",
                        GET_BY_ID: e => "/info-websitesapi/".concat(e),
                        UPDATE: e => "/info-websitesapi/".concat(e),
                        DELETE: e => "/info-websitesapi/".concat(e),
                        SET_ACTIVE: e => "/info-websitesapi/".concat(e, "/set-active")
                    },
                    MANAGER_PERMISSIONS: {
                        ROLES_BASE: "/rolesapi",
                        ROLES_GET_ALL: "/rolesapi",
                        ROLES_GET_ALL_WITH_PERMISSIONS: "/rolesapi/with-permissions",
                        ROLES_GET_BY_ID: e => "/rolesapi/".concat(e),
                        ROLES_CREATE: "/rolesapi",
                        ROLES_UPDATE: e => "/rolesapi/".concat(e),
                        ROLES_DELETE: e => "/rolesapi/".concat(e),
                        ROLES_GET_PERMISSIONS: e => "/rolesapi/".concat(e, "/permissions"),
                        ROLES_UPDATE_PERMISSIONS: e => "/rolesapi/".concat(e, "/permissions"),
                        USER_ROLES_BASE: "/user-rolesapi",
                        USER_ROLES_ASSIGN: "/user-rolesapi",
                        USER_ROLES_REMOVE: e => "/user-rolesapi/".concat(e, "/role"),
                        USER_ROLES_GET: e => "/user-rolesapi/".concat(e, "/role")
                    },
                    ORDERS: {
                        BASE: "/ordersapi",
                        CREATE: "/ordersapi",
                        GET_ALL: "/ordersapi",
                        GET_BY_SLUG: e => "/ordersapi/".concat(e),
                        UPDATE: e => "/ordersapi/".concat(e),
                        UPDATE_STATUS: e => "/ordersapi/".concat(e, "/status"),
                        DELETE: e => "/ordersapi/".concat(e),
                        UPDATE_PAYMENT_STATUS: e => "/ordersapi/".concat(e, "/update-payment-status")
                    },
                    PAYPAL: {
                        BASE: "/paypalsapi",
                        CREATE_ORDER: "/paypalsapi/create-order",
                        GET_ORDER_DETAILS: e => "/paypalsapi/order/".concat(e),
                        CAPTURE_PAYMENT: e => "/paypalsapi/order/".concat(e, "/capture"),
                        AUTHORIZE_PAYMENT: e => "/paypalsapi/order/".concat(e, "/authorize"),
                        WEBHOOKS: "/paypalsapi/webhooks"
                    },
                    PERMISSIONS: {
                        BASE: "/permissionsapi",
                        GET_ALL: "/permissionsapi",
                        CREATE: "/permissionsapi",
                        GET_BY_USER_ID: e => "/permissionsapi/user/".concat(e),
                        UPDATE_USER_PERMISSIONS: e => "/permissionsapi/user/".concat(e),
                        INITIALIZE: "/permissionsapi/initialize",
                        ASSIGN_ALL_TO_ADMIN: e => "/permissionsapi/admin/".concat(e)
                    },
                    POSTS: {
                        BASE: "/postsapi",
                        CREATE: "/postsapi",
                        GET_ALL: "/postsapi",
                        GET_MY_POSTS: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                            return "/postsapi/my-posts?userId=".concat(e, "&page=").concat(a, "&limit=").concat(t)
                        },
                        GET_BY_STATUS: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            return "/postsapi/by-status/".concat(e, "?page=").concat(a, "&limit=").concat(t, "&includeHidden=").concat(i)
                        },
                        GET_BY_SLUG: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return "/postsapi/".concat(e, "?includeHidden=").concat(a)
                        },
                        UPDATE: e => "/postsapi/".concat(e),
                        UPDATE_SLUG: e => "/postsapi/".concat(e, "/update-slug"),
                        UPDATE_VISIBILITY: e => "/postsapi/".concat(e, "/visibility"),
                        UPDATE_STATUS: e => "/postsapi/".concat(e, "/status"),
                        DELETE: e => "/postsapi/".concat(e),
                        HARD_DELETE: e => "/postsapi/".concat(e, "/force"),
                        TRANSFER_ALL: "/postsapi/transfer-all",
                        TRANSFER_SELECTED: "/postsapi/transfer-selected"
                    },
                    PRODUCTS: {
                        BASE: "/productsapi",
                        CREATE: "/productsapi",
                        GET_ALL: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return "/productsapi?page=".concat(e)
                        },
                        GET_ALL_BASIC_INFO: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return "/productsapi/basic-info?page=".concat(e)
                        },
                        GET_BY_CATEGORY_ID: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
                            return "/productsapi/by-categoryID?mainCategoryId=".concat(e, "&page=").concat(a, "&limit=").concat(t)
                        },
                        SEARCH: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/search?q=".concat(encodeURIComponent(e), "&page=").concat(a)
                        },
                        GET_BY_SLUG: e => "/productsapi/".concat(e),
                        GET_BY_MAIN_CATEGORY: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/bycategory/".concat(encodeURIComponent(e), "?page=").concat(a)
                        },
                        GET_BY_SUB_CATEGORY: function(e) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/bysubcategory/".concat(encodeURIComponent(e), "?page=").concat(a)
                        },
                        UPDATE: e => "/productsapi/".concat(e),
                        DELETE: e => "/productsapi/".concat(e),
                        UPDATE_NAME: e => "/productsapi/".concat(e, "/name"),
                        UPDATE_CATEGORY: e => "/productsapi/".concat(e, "/category"),
                        UPDATE_VARIANTS: e => "/productsapi/".concat(e, "/variants"),
                        UPDATE_SLUG: e => "/productsapi/".concat(e, "/slug")
                    },
                    REDIRECTS: {
                        BASE: "/redirectsapi",
                        CREATE: "/redirectsapi",
                        CREATE_BULK: "/redirectsapi/bulk",
                        GET_ALL: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                t = arguments.length > 2 ? arguments[2] : void 0,
                                i = arguments.length > 3 ? arguments[3] : void 0,
                                s = arguments.length > 4 ? arguments[4] : void 0,
                                o = arguments.length > 5 ? arguments[5] : void 0,
                                c = "/redirectsapi?page=".concat(e, "&limit=").concat(a);
                            return void 0 !== t && (c += "&type=".concat(encodeURIComponent(t))), void 0 !== i && (c += "&isActive=".concat(i)), void 0 !== s && (c += "&path=".concat(encodeURIComponent(s))), void 0 !== o && (c += "&statusCode=".concat(o)), c
                        },
                        CHECK: e => "/redirectsapi/check?path=".concat(encodeURIComponent(e)),
                        GET_BY_ID: e => "/redirectsapi/".concat(e),
                        UPDATE: e => "/redirectsapi/".concat(e),
                        DELETE: e => "/redirectsapi/".concat(e)
                    },
                    REVIEWS: {
                        BASE: "/reviewsapi",
                        CREATE: "/reviewsapi",
                        GET_ALL: "/reviewsapi",
                        GET_BY_PRODUCT_SLUG: e => "/reviewsapi/product/".concat(e),
                        GET_PRODUCT_RATING: e => "/reviewsapi/product/".concat(e, "/rating"),
                        GET_BY_ID: e => "/reviewsapi/".concat(e),
                        UPDATE: e => "/reviewsapi/".concat(e),
                        DELETE: e => "/reviewsapi/".concat(e)
                    },
                    SCRIPTS: {
                        BASE: "/scriptsapi",
                        CREATE: "/scriptsapi",
                        GET_ALL: "/scriptsapi",
                        GET_BY_POSITION: e => "/scriptsapi/position/".concat(encodeURIComponent(e)),
                        GET_ALL_BY_SECTION: "/scriptsapi/sections",
                        GET_BY_ID: e => "/scriptsapi/".concat(e),
                        UPDATE: e => "/scriptsapi/".concat(e),
                        DELETE: e => "/scriptsapi/".concat(e),
                        TOGGLE_ACTIVE: e => "/scriptsapi/".concat(e, "/toggle")
                    },
                    USERS: {
                        BASE: "/usersapi",
                        GET_ME: "/usersapi/me",
                        UPDATE_ME: "/usersapi/me",
                        GET_ALL: "/usersapi",
                        GET_BY_ID: e => "/usersapi/".concat(e),
                        CREATE: "/usersapi",
                        UPDATE: e => "/usersapi/".concat(e),
                        DELETE: e => "/usersapi/".concat(e)
                    },
                    VARIANTS: {
                        BASE: "/variantsapi",
                        CREATE: "/variantsapi",
                        GET_ALL: "/variantsapi",
                        GET_BY_SLUG: e => "/variantsapi/".concat(e),
                        UPDATE: e => "/variantsapi/".concat(e),
                        DELETE: e => "/variantsapi/".concat(e),
                        UPDATE_NAME: e => "/variantsapi/".concat(e, "/name"),
                        UPDATE_VALUES: e => "/variantsapi/".concat(e, "/values"),
                        UPDATE_SLUG: e => "/variantsapi/".concat(e, "/slug")
                    },
                    VERIFY: {
                        BASE: "/verifysapi",
                        SEND_VERIFICATION_EMAIL: "/verifysapi/send",
                        VERIFY_EMAIL: "/verifysapi/verify-email"
                    },
                    VIETQR_CONFIG: {
                        BASE: "/vietqr-configsapi",
                        GET_ACTIVE: "/vietqr-configsapi",
                        GET_ALL: "/vietqr-configsapi/all",
                        CREATE: "/vietqr-configsapi",
                        UPDATE: e => "/vietqr-configsapi/".concat(e),
                        SET_ACTIVE: e => "/vietqr-configsapi/".concat(e, "/activate")
                    },
                    VOUCHERS: {
                        BASE: "/vouchersapi",
                        CREATE: "/vouchersapi",
                        GET_ALL: "/vouchersapi",
                        GET_VALID: e => {
                            let a = "/vouchersapi/valid",
                                t = [];
                            return (null == e ? void 0 : e.productSlug) && t.push("productSlug=".concat(encodeURIComponent(e.productSlug))), (null == e ? void 0 : e.userId) && t.push("userId=".concat(encodeURIComponent(e.userId))), (null == e ? void 0 : e.paymentMethod) && t.push("paymentMethod=".concat(encodeURIComponent(e.paymentMethod))), t.length && (a += "?" + t.join("&")), a
                        },
                        GET_BY_ID: e => "/vouchersapi/".concat(e),
                        GET_BY_CODE: e => "/vouchersapi/code/".concat(encodeURIComponent(e)),
                        CHECK_VALIDITY: (e, a) => {
                            let t = "/vouchersapi/check/".concat(encodeURIComponent(e)),
                                i = [];
                            return (null == a ? void 0 : a.productSlug) && i.push("productSlug=".concat(encodeURIComponent(a.productSlug))), (null == a ? void 0 : a.userId) && i.push("userId=".concat(encodeURIComponent(a.userId))), (null == a ? void 0 : a.paymentMethod) && i.push("paymentMethod=".concat(encodeURIComponent(a.paymentMethod))), (null == a ? void 0 : a.totalAmount) !== void 0 && i.push("totalAmount=".concat(a.totalAmount)), i.length && (t += "?" + i.join("&")), t
                        },
                        USE: e => "/vouchersapi/use/".concat(encodeURIComponent(e)),
                        UPDATE: e => "/vouchersapi/".concat(e),
                        DELETE: e => "/vouchersapi/".concat(e)
                    },
                    FILTERS: {
                        BASE: "/filtersapi",
                        CREATE: "/filtersapi",
                        GET_ALL: "/filtersapi",
                        GET_BY_ID: e => "/filtersapi/".concat(e),
                        UPDATE: e => "/filtersapi/".concat(e),
                        DELETE: e => "/filtersapi/".concat(e)
                    },
                    SPECIFICATIONS: {
                        GET_ALL: "/specificationsapi",
                        CREATE: "/specificationsapi",
                        GET_BY_SLUG: e => "/specificationsapi/".concat(e),
                        UPDATE: e => "/specificationsapi/".concat(e),
                        DELETE: e => "/specificationsapi/".concat(e),
                        UPDATE_STATUS: e => "/specificationsapi/".concat(e, "/status"),
                        GET_BY_CATEGORIES: e => "/specificationsapi/category/".concat(e)
                    }
                },
                o = s
        },
        57254: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => u
            });
            var i = t(95155),
                s = t(12115),
                o = t(67401);
            let c = (0, o.A)("message-square", [
                    ["path", {
                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                        key: "1lielz"
                    }]
                ]),
                n = (0, o.A)("arrow-right", [
                    ["path", {
                        d: "M5 12h14",
                        key: "1ays0h"
                    }],
                    ["path", {
                        d: "m12 5 7 7-7 7",
                        key: "xquz4c"
                    }]
                ]);
            var r = t(67433);
            let p = {
                sendEmail: async e => {
                    try {
                        let a = await fetch("".concat(r.L9).concat(r.pe.CONTACTS.CREATE), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(e)
                            }),
                            t = null;
                        try {
                            t = await a.json()
                        } catch (e) {}
                        if (a.ok) return {
                            success: !0,
                            message: t && (t.message || t.msg) || "Email đ\xe3 được gửi th\xe0nh c\xf4ng!"
                        };
                        return {
                            success: !1,
                            message: t && (t.message || t.error || t.msg) || "Lỗi gửi email"
                        }
                    } catch (e) {
                        return console.error("Lỗi gửi email:", e), {
                            success: !1,
                            message: "Kh\xf4ng thể gửi email"
                        }
                    }
                }
            };
            var l = t(55037);
            let E = () => {
                    let [e, a] = (0, s.useState)(!1);
                    return {
                        isLoading: e,
                        handleSubmit: async e => {
                            try {
                                a(!0);
                                let t = await p.sendEmail(e);
                                if (t.success) return l.oR.success(t.message), !0;
                                return l.oR.error(t.message), !1
                            } catch (e) {
                                return console.log(e), l.oR.error("C\xf3 lỗi xảy ra. Vui l\xf2ng thử lại sau!"), !1
                            } finally {
                                a(!1)
                            }
                        }
                    }
                },
                u = () => {
                    let e = (0, s.useRef)(null),
                        a = (0, s.useRef)(null),
                        t = (0, s.useRef)(null),
                        [, o] = (0, s.useState)(0),
                        {
                            handleSubmit: r,
                            isLoading: p
                        } = E(),
                        [l, u] = (0, s.useState)(!1),
                        [d, T] = (0, s.useState)({
                            fullName: "",
                            phoneNumber: "",
                            customerEmail: "",
                            content: "",
                            projectTitle: "Th\xf4ng b\xe1o x\xe1c nhận",
                            sendNotificationToAdmin: !0,
                            sendConfirmationToCustomer: !0
                        });
                    (0, s.useEffect)(() => {
                        let i = e.current,
                            s = a.current,
                            c = t.current,
                            n = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    e.isIntersecting && (e.target === i && (null == i || i.classList.add("visible-left")), e.target === s && (null == s || s.classList.add("visible-right")), e.target === c && (null == c || c.classList.add("visible-templates")), n.unobserve(e.target))
                                })
                            }, {
                                threshold: .3
                            });
                        i && n.observe(i), s && n.observe(s), c && n.observe(c);
                        let r = setInterval(() => {
                            o(e => (e + 1) % 6)
                        }, 3e3);
                        return () => {
                            i && n.unobserve(i), s && n.unobserve(s), c && n.unobserve(c), clearInterval(r)
                        }
                    }, []);
                    let m = async e => {
                            e.preventDefault();
                            let a = ["Th\xf4ng tin li\xean hệ:", "- Họ v\xe0 t\xean: ".concat(d.fullName || "(kh\xf4ng cung cấp)"), "- Số điện thoại: ".concat(d.phoneNumber || "(kh\xf4ng cung cấp)"), "- Email: ".concat(d.customerEmail || "(kh\xf4ng cung cấp)"), "", "Nội dung y\xeau cầu:", d.content || "(kh\xf4ng c\xf3)"].join("\n");
                            await r({
                                fullName: d.fullName,
                                phoneNumber: d.phoneNumber,
                                customerEmail: d.customerEmail,
                                content: a,
                                projectTitle: d.projectTitle || "Đăng k\xfd tư vấn trực tuyến",
                                sendNotificationToAdmin: !0,
                                sendConfirmationToCustomer: !1
                            }), u(!0), T({
                                fullName: "",
                                phoneNumber: "",
                                customerEmail: "",
                                content: "",
                                projectTitle: "Đăng k\xfd tư vấn trực tuyến",
                                sendNotificationToAdmin: !0,
                                sendConfirmationToCustomer: !1
                            }), setTimeout(() => u(!1), 3e3)
                        },
                        h = e => {
                            let {
                                name: a,
                                value: t
                            } = e.target;
                            T(e => ({ ...e,
                                [a]: t
                            }))
                        };
                    return (0, i.jsxs)("div", {
                        className: "min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 relative overflow-hidden",
                        children: [l && (0, i.jsxs)("div", {
                            className: "fixed inset-0 z-[10000] flex items-center justify-center",
                            children: [(0, i.jsx)("div", {
                                className: "absolute inset-0 bg-black/40",
                                onClick: () => u(!1)
                            }), (0, i.jsxs)("div", {
                                className: "relative z-[10001] bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 text-center",
                                children: [(0, i.jsx)("div", {
                                    className: "mx-auto mb-3 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center",
                                    children: (0, i.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 text-green-600",
                                        children: (0, i.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M5 13l4 4L19 7"
                                        })
                                    })
                                }), (0, i.jsx)("h3", {
                                    className: "text-lg font-semibold text-gray-800",
                                    children: "Đặt trước th\xe0nh c\xf4ng"
                                }), (0, i.jsx)("p", {
                                    className: "text-sm text-gray-600 mt-2",
                                    children: "Cảm ơn bạn! Vui l\xf2ng kiểm tra email để x\xe1c nhận th\xf4ng tin."
                                }), (0, i.jsx)("button", {
                                    type: "button",
                                    onClick: () => u(!1),
                                    className: "mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-rose-500 text-white hover:bg-rose-600 transition-colors",
                                    children: "Đ\xf3ng"
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "relative z-10 pt-10 md:pt-20",
                            children: (0, i.jsx)("div", {
                                className: "bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden",
                                children: (0, i.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, i.jsxs)("div", {
                                        className: "text-center mb-8",
                                        children: [(0, i.jsx)("div", {
                                            className: "inline-block p-2 bg-rose-50 rounded-full mb-3",
                                            children: (0, i.jsx)(c, {
                                                className: "w-6 h-6 text-rose-500"
                                            })
                                        }), (0, i.jsx)("h2", {
                                            className: "text-2xl font-bold text-gray-800",
                                            children: "Đăng k\xfd tư vấn trực tuyến"
                                        }), (0, i.jsx)("p", {
                                            className: "text-gray-500 mt-2",
                                            children: "Nhận tư vấn miễn ph\xed từ chuy\xean gia"
                                        }), (0, i.jsx)("div", {
                                            className: "flex justify-center mt-4",
                                            children: (0, i.jsx)("div", {
                                                className: "h-px w-16 bg-rose-200"
                                            })
                                        })]
                                    }), (0, i.jsxs)("form", {
                                        className: "space-y-5",
                                        onSubmit: m,
                                        children: [(0, i.jsxs)("div", {
                                            className: "group",
                                            children: [(0, i.jsx)("label", {
                                                htmlFor: "fullName",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Họ v\xe0 T\xean"
                                            }), (0, i.jsx)("div", {
                                                className: "relative",
                                                children: (0, i.jsx)("input", {
                                                    type: "text",
                                                    id: "fullName",
                                                    name: "fullName",
                                                    value: d.fullName,
                                                    onChange: h,
                                                    required: !0,
                                                    className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-all outline-none",
                                                    placeholder: "Nhập họ v\xe0 t\xean của bạn"
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "group",
                                            children: [(0, i.jsx)("label", {
                                                htmlFor: "phoneNumber",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Số điện thoại"
                                            }), (0, i.jsx)("div", {
                                                className: "relative",
                                                children: (0, i.jsx)("input", {
                                                    type: "tel",
                                                    id: "phoneNumber",
                                                    name: "phoneNumber",
                                                    value: d.phoneNumber,
                                                    onChange: h,
                                                    required: !0,
                                                    className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-all outline-none",
                                                    placeholder: "Nhập số điện thoại của bạn"
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "group",
                                            children: [(0, i.jsx)("label", {
                                                htmlFor: "customerEmail",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Email"
                                            }), (0, i.jsx)("div", {
                                                className: "relative",
                                                children: (0, i.jsx)("input", {
                                                    type: "email",
                                                    id: "customerEmail",
                                                    name: "customerEmail",
                                                    value: d.customerEmail,
                                                    onChange: h,
                                                    className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-all outline-none",
                                                    placeholder: "Nhập email của bạn (kh\xf4ng bắt buộc)"
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "group",
                                            children: [(0, i.jsx)("label", {
                                                htmlFor: "content",
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Nội dung"
                                            }), (0, i.jsx)("div", {
                                                className: "relative",
                                                children: (0, i.jsx)("textarea", {
                                                    id: "content",
                                                    name: "content",
                                                    value: d.content,
                                                    onChange: h,
                                                    required: !0,
                                                    rows: 4,
                                                    className: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-all outline-none",
                                                    placeholder: "Nhập nội dung bạn muốn tư vấn"
                                                })
                                            })]
                                        }), (0, i.jsx)("button", {
                                            type: "submit",
                                            disabled: p,
                                            className: "w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                            children: p ? (0, i.jsx)("span", {
                                                children: "Đang gửi..."
                                            }) : (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)("span", {
                                                    children: "Gửi y\xeau cầu tư vấn"
                                                }), (0, i.jsx)(n, {
                                                    className: "w-5 h-5"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [5037, 8441, 1517, 7358], () => a(71902)), _N_E = e.O()
    }
]);