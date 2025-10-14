(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6061], {
        90064: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 75038))
        },
        67923: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ay: () => s
            });
            let s = a(82651).A.create({
                baseURL: "http://localhost:5512",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
        },
        69787: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => d,
                Z: () => h
            });
            var s = a(93233),
                r = a(35906),
                l = a(25848),
                n = a(30227),
                i = a(67923);
            let c = a(67433).L9 + n.$.ROUTES.CATEGORIES_POST.BASE,
                o = {
                    create: async e => (await i.Ay.post(c, e, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data,
                    update: async (e, t) => (await i.Ay.patch("".concat(c, "/").concat(e), t, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })).data,
                    getOne: async e => (await i.Ay.get("".concat(c, "/").concat(e))).data,
                    findAll: async e => {
                        let t = new URLSearchParams;
                        (null == e ? void 0 : e.page) && t.append("page", e.page.toString()), (null == e ? void 0 : e.limit) && t.append("limit", e.limit.toString()), (null == e ? void 0 : e.search) && t.append("search", e.search);
                        let a = "".concat(c).concat(t.toString() ? "?".concat(t.toString()) : "");
                        return (await i.Ay.get(a)).data
                    },
                    softDelete: async e => (await i.Ay.patch("".concat(c, "/").concat(e, "/soft-delete"), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("token")),
                            "Content-Type": "application/json"
                        }
                    })).data,
                    hardDelete: async e => (await i.Ay.delete("".concat(c, "/").concat(e), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("token")),
                            "Content-Type": "application/json"
                        }
                    })).data
                },
                d = e => (0, s.I)({
                    queryKey: ["category-posts", e],
                    queryFn: async () => (await o.getOne(e)).data,
                    enabled: !!e
                }),
                h = function() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        i = (0, r.jE)(),
                        c = (0, s.I)({
                            queryKey: ["category-posts", a, n],
                            queryFn: async () => {
                                let e = await o.findAll({
                                    page: a,
                                    limit: n
                                });
                                return {
                                    categories: e.data,
                                    total: e.total || 0
                                }
                            }
                        }),
                        d = (0, l.n)({
                            mutationFn: e => o.create(e),
                            onSuccess: () => {
                                i.invalidateQueries({
                                    queryKey: ["category-posts"]
                                })
                            }
                        });
                    return {
                        listQuery: c,
                        createMutation: d,
                        updateMutation: (0, l.n)({
                            mutationFn: e => o.update(e.slug, e.data),
                            onSuccess: () => {
                                i.invalidateQueries({
                                    queryKey: ["category-posts"]
                                })
                            }
                        }),
                        softDeleteMutation: (0, l.n)({
                            mutationFn: e => o.softDelete(e),
                            onSuccess: () => {
                                i.invalidateQueries({
                                    queryKey: ["category-posts"]
                                })
                            }
                        }),
                        hardDeleteMutation: (0, l.n)({
                            mutationFn: e => o.hardDelete(e),
                            onSuccess: () => {
                                i.invalidateQueries({
                                    queryKey: ["category-posts"]
                                })
                            }
                        }),
                        total: (null === (e = c.data) || void 0 === e ? void 0 : e.total) || 0,
                        categories: (null === (t = c.data) || void 0 === t ? void 0 : t.categories) || [],
                        isLoading: c.isLoading,
                        isError: c.isError,
                        error: c.error
                    }
                }
        },
        75038: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => b
            });
            var s = a(95155),
                r = a(12115),
                l = a(48173),
                n = a.n(l),
                i = a(72411),
                c = a(76046);
            let o = e => {
                    let {
                        post: t,
                        getThumbnailPath: a
                    } = e, r = (0, c.useRouter)(), l = a(t.thumbnail), i = () => r.push("/posts/".concat(t.slug));
                    return (0, s.jsxs)("div", {
                        className: "overflow-hidden rounded-xl mb-10 group cursor-pointer bg-white",
                        onClick: i,
                        tabIndex: 0,
                        "aria-label": t.title,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && i()
                        },
                        children: [(0, s.jsx)("div", {
                            className: "relative h-[500px] w-full",
                            children: (0, s.jsx)("img", {
                                src: l || "/placeholder.svg",
                                alt: t.title,
                                className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105",
                                crossOrigin: "anonymous",
                                loading: "lazy"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "p-6",
                            children: [(0, s.jsx)("h2", {
                                className: "text-3xl font-bold mb-3 leading-tight",
                                children: t.title
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center text-sm mb-4 text-gray-600",
                                children: [(0, s.jsx)("span", {
                                    children: new Date(t.publishedDate).toLocaleDateString("vi-VN")
                                }), (0, s.jsx)("span", {
                                    className: "mx-2",
                                    children: "•"
                                }), (0, s.jsx)("span", {
                                    children: t.author
                                })]
                            }), (0, s.jsx)(n(), {
                                href: "/posts/".concat(t.slug),
                                onClick: e => e.stopPropagation(),
                                className: "inline-block bg-[#021737] text-white px-4 py-2 font-medium rounded-sm hover:bg-[#193a6a] transition-colors",
                                children: "Đọc tiếp"
                            })]
                        })]
                    })
                },
                d = e => {
                    let {
                        post: t,
                        getThumbnailPath: a
                    } = e, r = (0, c.useRouter)(), l = a(t.thumbnail), i = () => r.push("/posts/".concat(t.slug));
                    return (0, s.jsxs)("div", {
                        className: "grid md:grid-cols-5 gap-6 items-center mb-8 pb-8 border-b cursor-pointer",
                        onClick: i,
                        tabIndex: 0,
                        "aria-label": t.title,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && i()
                        },
                        children: [(0, s.jsx)("div", {
                            className: "md:col-span-2 relative h-[240px] overflow-hidden rounded-lg",
                            children: (0, s.jsx)("img", {
                                src: l || "/placeholder.svg",
                                alt: t.title,
                                className: "object-cover w-full h-full",
                                crossOrigin: "anonymous",
                                loading: "lazy"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "md:col-span-3",
                            children: [(0, s.jsx)("h2", {
                                className: "text-2xl font-bold mb-3 hover:text-[#021737] transition-colors",
                                children: (0, s.jsx)(n(), {
                                    href: "/posts/".concat(t.slug),
                                    onClick: e => e.stopPropagation(),
                                    children: t.title
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center text-sm text-gray-500 mb-3",
                                children: [(0, s.jsx)("span", {
                                    children: new Date(t.publishedDate).toLocaleDateString("vi-VN")
                                }), (0, s.jsx)("span", {
                                    className: "mx-2",
                                    children: "•"
                                }), (0, s.jsx)("span", {
                                    children: t.author
                                })]
                            }), (0, s.jsx)("div", {
                                className: "text-gray-700 mb-4",
                                dangerouslySetInnerHTML: {
                                    __html: t.excerpt
                                }
                            }), (0, s.jsx)(n(), {
                                href: "/posts/".concat(t.slug),
                                onClick: e => e.stopPropagation(),
                                className: "inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 font-medium rounded-sm transition-colors",
                                children: "Đọc tiếp"
                            })]
                        })]
                    })
                },
                h = e => {
                    let {
                        post: t,
                        getThumbnailPath: a
                    } = e, r = a(t.thumbnail);
                    return (0, s.jsxs)("div", {
                        className: "group",
                        children: [(0, s.jsx)("div", {
                            className: "relative h-56 overflow-hidden rounded-lg mb-3",
                            children: (0, s.jsx)("img", {
                                src: r || "/placeholder.svg",
                                alt: t.title,
                                className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105",
                                crossOrigin: "anonymous",
                                loading: "lazy"
                            })
                        }), (0, s.jsx)("h3", {
                            className: "font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#021737] transition-colors",
                            children: t.title
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center text-xs text-gray-500 mb-2",
                            children: [(0, s.jsx)("span", {
                                children: new Date(t.publishedDate).toLocaleDateString("vi-VN")
                            }), (0, s.jsx)("span", {
                                className: "mx-2",
                                children: "•"
                            }), (0, s.jsx)("span", {
                                children: t.author
                            })]
                        }), (0, s.jsx)("div", {
                            className: "text-gray-600 line-clamp-3 text-sm",
                            dangerouslySetInnerHTML: {
                                __html: t.excerpt
                            }
                        })]
                    })
                },
                m = () => (0, s.jsx)("div", {
                    className: "relative overflow-hidden rounded-xl mb-10 animate-pulse bg-gray-200 h-[500px] w-full",
                    children: (0, s.jsxs)("div", {
                        className: "absolute bottom-0 left-0 right-0 p-6 z-20",
                        children: [(0, s.jsx)("div", {
                            className: "inline-block bg-gray-300 h-6 w-20 rounded mb-3"
                        }), (0, s.jsx)("div", {
                            className: "h-10 w-2/3 bg-gray-300 rounded mb-3"
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center space-x-2 mb-4",
                            children: [(0, s.jsx)("div", {
                                className: "h-4 w-16 bg-gray-300 rounded"
                            }), (0, s.jsx)("div", {
                                className: "h-4 w-4 bg-gray-300 rounded-full"
                            }), (0, s.jsx)("div", {
                                className: "h-4 w-16 bg-gray-300 rounded"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "h-8 w-32 bg-gray-300 rounded"
                        })]
                    })
                }),
                g = () => (0, s.jsxs)("div", {
                    className: "grid md:grid-cols-5 gap-6 items-center mb-8 pb-8 border-b animate-pulse",
                    children: [(0, s.jsx)("div", {
                        className: "md:col-span-2 h-[240px] bg-gray-200 rounded-lg"
                    }), (0, s.jsxs)("div", {
                        className: "md:col-span-3 space-y-3",
                        children: [(0, s.jsx)("div", {
                            className: "h-7 w-2/3 bg-gray-200 rounded"
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [(0, s.jsx)("div", {
                                className: "h-4 w-16 bg-gray-200 rounded"
                            }), (0, s.jsx)("div", {
                                className: "h-4 w-4 bg-gray-200 rounded-full"
                            }), (0, s.jsx)("div", {
                                className: "h-4 w-16 bg-gray-200 rounded"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "h-4 w-full bg-gray-200 rounded"
                        }), (0, s.jsx)("div", {
                            className: "h-4 w-1/2 bg-gray-200 rounded"
                        }), (0, s.jsx)("div", {
                            className: "h-8 w-24 bg-gray-200 rounded"
                        })]
                    })]
                }),
                u = () => (0, s.jsxs)("div", {
                    className: "group animate-pulse",
                    children: [(0, s.jsx)("div", {
                        className: "relative h-56 bg-gray-200 rounded-lg mb-3"
                    }), (0, s.jsx)("div", {
                        className: "h-5 w-3/4 bg-gray-200 rounded mb-2"
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center space-x-2 mb-2",
                        children: [(0, s.jsx)("div", {
                            className: "h-3 w-12 bg-gray-200 rounded"
                        }), (0, s.jsx)("div", {
                            className: "h-3 w-3 bg-gray-200 rounded-full"
                        }), (0, s.jsx)("div", {
                            className: "h-3 w-12 bg-gray-200 rounded"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "h-4 w-full bg-gray-200 rounded mb-1"
                    }), (0, s.jsx)("div", {
                        className: "h-4 w-2/3 bg-gray-200 rounded"
                    })]
                });
            var p = a(22885),
                x = a(69787);
            let v = () => {
                    let {
                        categories: e,
                        isLoading: t,
                        isError: a
                    } = (0, x.Z)(), [l, i] = (0, r.useState)([]);
                    if (t) return (0, s.jsx)(() => (0, s.jsxs)("div", {
                        className: "bg-gray-50 p-6 rounded-lg mb-8 animate-pulse",
                        children: [(0, s.jsx)("div", {
                            className: "h-6 w-32 bg-gray-200 rounded mb-4"
                        }), (0, s.jsx)("ul", {
                            className: "space-y-2",
                            children: Array.from({
                                length: 6
                            }).map((e, t) => (0, s.jsx)("li", {
                                children: (0, s.jsx)("div", {
                                    className: "h-4 w-3/4 bg-gray-200 rounded mb-2"
                                })
                            }, t))
                        }), (0, s.jsx)("div", {
                            className: "mt-4 pt-2 border-t",
                            children: (0, s.jsx)("div", {
                                className: "h-4 w-24 bg-gray-200 rounded"
                            })
                        })]
                    }), {});
                    if (a) return (0, s.jsx)("div", {
                        className: "text-center py-2",
                        children: (0, s.jsx)("p", {
                            className: "text-red-500 text-sm",
                            children: "Kh\xf4ng thể tải danh mục. Vui l\xf2ng thử lại sau."
                        })
                    });
                    if (!e || 0 === e.length) return (0, s.jsx)("div", {
                        className: "text-center py-2",
                        children: (0, s.jsx)("p", {
                            className: "text-gray-500 text-sm",
                            children: "Chưa c\xf3 danh mục n\xe0o."
                        })
                    });
                    let c = e => {
                            i(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                        },
                        o = e => {
                            let t = e.children && e.children.length > 0,
                                a = l.includes(e._id),
                                i = t ? a ? (0, s.jsx)(p.oss, {
                                    className: "text-gray-600"
                                }) : (0, s.jsx)(p.YZI, {
                                    className: "text-gray-600"
                                }) : null;
                            return (0, s.jsxs)("li", {
                                className: "py-1",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center group",
                                    children: [(0, s.jsx)(n(), {
                                        href: "#",
                                        className: "text-gray-700 hover:text-[#021737] transition-colors flex items-center flex-grow group-hover:font-medium",
                                        children: (0, s.jsx)("span", {
                                            children: e.name
                                        })
                                    }), t && (0, s.jsx)("button", {
                                        onClick: t => {
                                            t.preventDefault(), c(e._id)
                                        },
                                        className: "ml-2 p-1 opacity-60 hover:opacity-100 transition-opacity",
                                        children: i
                                    })]
                                }), t && a && (0, s.jsx)("ul", {
                                    className: "ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2",
                                    children: e.children.map(e => (0, s.jsx)(r.Fragment, {
                                        children: o(e)
                                    }, e._id))
                                })]
                            }, e._id)
                        },
                        d = e.filter(e => 0 === e.level && !e.isDeleted);
                    return (0, s.jsxs)("div", {
                        className: "bg-gray-50 p-6 rounded-lg mb-8",
                        children: [(0, s.jsx)("h3", {
                            className: "text-lg font-bold mb-4 border-b pb-2 text-[#021737]",
                            children: "Danh Mục B\xe0i Viết"
                        }), d.length > 0 ? (0, s.jsx)("ul", {
                            className: "space-y-1",
                            children: d.map(e => (0, s.jsx)(r.Fragment, {
                                children: o(e)
                            }, e._id))
                        }) : (0, s.jsx)("p", {
                            className: "text-gray-500 text-sm text-center",
                            children: "Chưa c\xf3 danh mục n\xe0o."
                        }), (0, s.jsx)("div", {
                            className: "mt-4 pt-2 border-t",
                            children: (0, s.jsxs)(n(), {
                                href: "#",
                                className: "text-[#021737] hover:underline text-sm font-medium inline-flex items-center",
                                children: ["Xem tất cả b\xe0i viết", (0, s.jsx)("span", {
                                    className: "ml-1",
                                    children: "→"
                                })]
                            })
                        })]
                    })
                },
                y = e => {
                    if (!e) return "/placeholder.svg?height=400&width=600";
                    let t = Array.isArray(e) ? e[0] : e;
                    return "string" == typeof t && (t.startsWith("http://") || t.startsWith("https://")) ? t : "string" == typeof t && t.startsWith("/uploads") ? "".concat(t) : t || "/placeholder.svg?height=400&width=600"
                };

            function b() {
                let e = (0, r.useRef)(null),
                    {
                        data: t,
                        total: a,
                        isLoading: l,
                        error: c,
                        fetchNextPage: p,
                        hasNextPage: x,
                        isFetchingNextPage: b
                    } = (0, i.Lm)(12);
                (0, r.useEffect)(() => {
                    let t = new IntersectionObserver(e => {
                            e[0].isIntersecting && x && !b && p()
                        }, {
                            rootMargin: "100px",
                            threshold: .1
                        }),
                        a = e.current;
                    return a && t.observe(a), () => {
                        a && t.unobserve(a)
                    }
                }, [p, x, b]);
                let j = t ? [...new Map(t.map(e => [e.slug, e])).values()].sort((e, t) => new Date(t.publishedDate).getTime() - new Date(e.publishedDate).getTime()) : [],
                    N = j[0],
                    f = j[1],
                    w = j.slice(2);
                return l ? (0, s.jsxs)("div", {
                    className: "lg:col-span-8",
                    children: [(0, s.jsx)(m, {}), (0, s.jsx)(g, {}), (0, s.jsx)("h2", {
                        className: "text-2xl font-bold mb-6 border-b pb-2",
                        children: "Tất cả b\xe0i viết"
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10",
                        children: Array.from({
                            length: 12
                        }).map((e, t) => (0, s.jsx)(u, {}, t))
                    })]
                }) : c ? (0, s.jsx)("div", {
                    className: "lg:col-span-8",
                    children: (0, s.jsx)("div", {
                        className: "text-center py-10",
                        children: (0, s.jsx)("p", {
                            className: "text-red-500",
                            children: "C\xf3 lỗi xảy ra khi tải b\xe0i viết. Vui l\xf2ng thử lại sau."
                        })
                    })
                }) : (0, s.jsx)("div", {
                    className: "lg:col-span-8",
                    children: (0, s.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                        children: [(0, s.jsxs)("div", {
                            className: "lg:col-span-3 mt-4",
                            children: [N && (0, s.jsx)(o, {
                                post: N,
                                getThumbnailPath: y
                            }), f && (0, s.jsx)(d, {
                                post: f,
                                getThumbnailPath: y
                            }), (0, s.jsxs)("h2", {
                                className: "text-2xl font-bold mb-6 border-b pb-2",
                                children: ["Tất cả b\xe0i viết (", a, " b\xe0i viết)"]
                            }), (0, s.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10",
                                children: w.map(e => (0, s.jsx)(n(), {
                                    href: "/posts/".concat(e.slug),
                                    children: (0, s.jsx)(h, {
                                        post: e,
                                        getThumbnailPath: y
                                    })
                                }, e.id || e.slug))
                            }), (0, s.jsxs)("div", {
                                ref: e,
                                className: "text-center py-4",
                                children: [b && (0, s.jsxs)("div", {
                                    className: "flex justify-center items-center space-x-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
                                    }), (0, s.jsxs)("span", {
                                        className: "text-gray-600",
                                        children: ["Đang tải th\xeam b\xe0i viết... (", j.length, "/", a, ")"]
                                    })]
                                }), !x && !b && (0, s.jsxs)("p", {
                                    className: "text-gray-500",
                                    children: ["Đ\xe3 hiển thị tất cả ", a, " b\xe0i viết"]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "lg:col-span-1",
                            children: (0, s.jsx)("div", {
                                className: "sticky top-32",
                                children: (0, s.jsx)(v, {})
                            })
                        })]
                    })
                })
            }
        },
        72411: (e, t, a) => {
            "use strict";
            a.d(t, {
                Lm: () => x,
                UG: () => p,
                u2: () => u
            });
            var s = a(93233),
                r = a(57882),
                l = function(e) {
                    return e.Draft = "draft", e.Pending = "pending", e.Approved = "approved", e.Rejected = "rejected", e
                }({}),
                n = a(67433),
                i = a(30227);
            let c = n.L9 + i.$.ROUTES.POSTS.BASE,
                o = (n.L9, i.$.ROUTES.CATEGORIES_POST.BASE, async e => {
                    if (!e.ok) {
                        let t = await e.json().catch(() => null);
                        throw Error((null == t ? void 0 : t.message) || "Lỗi từ m\xe1y chủ")
                    }
                    return e.json()
                });

            function d() {
                let e = localStorage.getItem("token") || "";
                return {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e)
                }
            }
            let h = {
                    getPosts: async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        try {
                            let a = Math.max(1, e),
                                s = Math.max(1, Math.min(100, t)),
                                r = "".concat(c, "?page=").concat(a, "&limit=").concat(s, "&includeHidden=false&status=").concat(l.Approved, "&sort=-publishedDate"),
                                n = await fetch(r, {
                                    method: "GET",
                                    headers: d(),
                                    cache: "no-store"
                                });
                            if (!n.ok) throw Error("Failed to fetch posts");
                            let i = await o(n);
                            if (!Array.isArray(i.data)) throw console.error("Invalid response structure:", i), Error("Invalid response structure from server");
                            return {
                                data: i.data.filter(e => e.status === l.Approved && !0 === e.isVisible),
                                total: i.total || 0,
                                currentPage: a,
                                totalPages: Math.ceil((i.total || 0) / s)
                            }
                        } catch (e) {
                            throw console.error("Error fetching posts:", e), e
                        }
                    },
                    getPostBySlug: async e => {
                        let t = "".concat(c, "/").concat(e, "?includeHidden=false"),
                            a = await fetch(t, {
                                method: "GET",
                                headers: d()
                            }),
                            s = await o(a);
                        if (s.status !== l.Approved || !0 !== s.isVisible) throw Error("B\xe0i viết kh\xf4ng tồn tại hoặc chưa được ph\xea duyệt");
                        return s
                    }
                },
                m = h.getPosts,
                g = h.getPostBySlug,
                u = e => (0, s.I)({
                    queryKey: ["post", e],
                    queryFn: () => g(e),
                    enabled: !!e,
                    staleTime: 3e5,
                    retry: (e, t) => !(t instanceof Error && t.message.includes("kh\xf4ng tồn tại hoặc chưa được ph\xea duyệt")) && e < 3
                }),
                p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return (0, s.I)({
                        queryKey: ["posts", e, t],
                        queryFn: () => m(e, t),
                        staleTime: 3e5
                    })
                },
                x = function() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12,
                        {
                            data: s,
                            fetchNextPage: l,
                            hasNextPage: n,
                            isFetchingNextPage: i,
                            isLoading: c,
                            error: o
                        } = (0, r.q)({
                            queryKey: ["infinite-posts", a],
                            initialPageParam: 1,
                            queryFn: async e => {
                                let t = "number" == typeof e.pageParam ? e.pageParam : 1;
                                return { ...await m(t, a),
                                    currentPage: t
                                }
                            },
                            getNextPageParam: e => {
                                if (!e.data.length) return;
                                let t = (e.currentPage || 0) + 1;
                                return t <= Math.ceil(e.total / a) ? t : void 0
                            },
                            staleTime: 3e5
                        }),
                        d = (null == s ? void 0 : null === (e = s.pages) || void 0 === e ? void 0 : e.flatMap(e => e.data)) || [],
                        h = (null == s ? void 0 : null === (t = s.pages) || void 0 === t ? void 0 : t[0]) ? s.pages[0].total : 0;
                    return {
                        data: d,
                        total: h,
                        isLoading: c,
                        error: o,
                        fetchNextPage: l,
                        hasNextPage: d.length < h,
                        isFetchingNextPage: i
                    }
                }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [2202, 2651, 8173, 3642, 1152, 227, 8441, 1517, 7358], () => t(90064)), _N_E = e.O()
    }
]);