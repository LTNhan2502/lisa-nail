(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1993], {
        79271: (e, a, s) => {
            Promise.resolve().then(s.bind(s, 79974))
        },
        79974: (e, a, s) => {
            "use strict";
            s.r(a), s.d(a, {
                default: () => P
            });
            var t = s(95155),
                l = s(12115);
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        [a, s] = (0, l.useState)(!1),
                        t = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        let a = new IntersectionObserver(a => {
                                let [t] = a;
                                t.isIntersecting && setTimeout(() => {
                                    s(!0)
                                }, e)
                            }, {
                                threshold: .05,
                                rootMargin: "0px 0px -20px 0px"
                            }),
                            l = t.current;
                        return l && a.observe(l), () => {
                            l && a.unobserve(l)
                        }
                    }, [e]), {
                        elementRef: t,
                        isVisible: a
                    }
                },
                r = e => {
                    let {
                        children: a,
                        delay: s = 0,
                        className: l = ""
                    } = e, {
                        elementRef: r,
                        isVisible: n
                    } = i(s);
                    return (0, t.jsx)("div", {
                        ref: r,
                        className: "transition-all duration-800 ease-out ".concat(n ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", " ").concat(l),
                        children: a
                    })
                },
                n = () => (0, t.jsxs)("div", {
                    className: "relative w-full h-screen overflow-hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [(0, t.jsx)("video", {
                            className: "w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover object-center sm:object-center md:object-center lg:object-center xl:object-center",
                            src: "/video/bg.mp4",
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            preload: "auto"
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-0 bg-black bg-opacity-70"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "relative z-10 flex items-center justify-center h-full",
                        children: (0, t.jsx)(r, {
                            delay: 400,
                            children: (0, t.jsxs)("div", {
                                className: "text-center text-white",
                                children: [(0, t.jsx)("div", {
                                    className: "mb-6",
                                    children: (0, t.jsx)("h1", {
                                        className: "text-5xl md:text-7xl mb-4 drop-shadow-lg uppercase",
                                        style: {
                                            fontFamily: "'Montserrat', sans-serif",
                                            letterSpacing: "0.08em",
                                            fontWeight: 700
                                        },
                                        children: "LUSTER | nails salon & spa"
                                    })
                                }), (0, t.jsx)("p", {
                                    className: "text-2xl md:text-3xl mb-8 font-inter drop-shadow-md",
                                    children: "Beauty and self-care, with us"
                                })]
                            })
                        })
                    })]
                });
            s(73067);
            let c = (0, l.createContext)({
                    categories: [],
                    loading: !0,
                    error: null,
                    refetch: async () => {}
                }),
                d = () => (0, t.jsx)("div", {
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center w-full my-1",
                        children: [(0, t.jsx)("div", {
                            className: "flex-1 h-[2px] bg-gradient-to-r from-[#EAC463] via-[#e1d28e] to-[#2b2407]"
                        }), (0, t.jsx)("span", {
                            className: "mx-4 flex items-center justify-center",
                            children: (0, t.jsxs)("svg", {
                                width: "28",
                                height: "20",
                                viewBox: "0 0 28 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, t.jsx)("g", {
                                    filter: "url(#star-glow)",
                                    children: (0, t.jsx)("path", {
                                        d: "M14 3L15.2361 8.76393L21 10L15.2361 11.2361L14 17L12.7639 11.2361L7 10L12.7639 8.76393L14 3Z",
                                        fill: "#EAC463",
                                        stroke: "#EAC463",
                                        strokeWidth: "1.2"
                                    })
                                }), (0, t.jsx)("defs", {
                                    children: (0, t.jsx)("filter", {
                                        id: "star-glow",
                                        x: "0",
                                        y: "0",
                                        width: "28",
                                        height: "20",
                                        filterUnits: "userSpaceOnUse",
                                        colorInterpolationFilters: "sRGB",
                                        children: (0, t.jsx)("feDropShadow", {
                                            dx: "0",
                                            dy: "0",
                                            stdDeviation: "2",
                                            floodColor: "#EAC463",
                                            floodOpacity: "0.7"
                                        })
                                    })
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "flex-1 h-[2px]  bg-gradient-to-l from-[#EAC463] via-[#e1d28e] to-[#2b2407]"
                        })]
                    })
                }),
                o = () => {
                    let {
                        categories: e,
                        loading: a
                    } = (0, l.useContext)(c);
                    return (0, t.jsxs)("div", {
                        className: " bg-gradient-to-b from-[#212121] via-[#1A1A1A] to-[#1A1A1B] relative overflow-hidden font-montserrat",
                        children: [(0, t.jsxs)("div", {
                            className: "absolute inset-0 opacity-20",
                            children: [(0, t.jsx)("div", {
                                className: "absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white/10 to-transparent",
                                children: (0, t.jsx)("div", {
                                    className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                                })
                            }), (0, t.jsx)("div", {
                                className: "absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent",
                                children: (0, t.jsx)("div", {
                                    className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "relative z-10 max-w-7xl mx-auto px-4 py-12",
                            children: [(0, t.jsx)(r, {
                                delay: 0,
                                children: (0, t.jsxs)("div", {
                                    className: "text-center mb-10",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-5xl md:text-6xl  tracking-wide text-[#EAC463] font-montserrat",
                                        children: "Services & Pricing"
                                    }), (0, t.jsx)("p", {
                                        className: "mt-2 text-lg md:text-xl text-gray-300",
                                        children: "Explore our service menu and transparent prices."
                                    }), !a && (null == e ? void 0 : e.length) ? (0, t.jsx)("div", {
                                        className: "mt-6 flex flex-wrap justify-center gap-2",
                                        children: e.map(e => (0, t.jsx)("span", {
                                            className: "px-3 py-1 rounded-full text-sm md:text-base bg-white/10 text-gray-200 border border-white/20",
                                            children: e.name
                                        }, e._id))
                                    }) : null]
                                })
                            }), (0, t.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch",
                                children: [(0, t.jsx)(r, {
                                    delay: 200,
                                    children: (0, t.jsxs)("div", {
                                        className: " flex flex-col h-full",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-center mb-8",
                                            children: (0, t.jsx)("div", {
                                                className: "",
                                                children: (0, t.jsx)("img", {
                                                    src: "/image/logo2.png",
                                                    alt: "Luster Nails and Spa Logo",
                                                    className: "h-60 w-auto object-contain mx-auto"
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "bg-black/20 backdrop-blur-sm rounded-3xl border-[2px] border-[rgb(249,221,130,1)] p-6 flex-1",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-4xl font-inter text-[#EAC463] font-bold mb-6 text-center italic break-words",
                                                style: {
                                                    fontFamily: "serif"
                                                },
                                                children: "NAIL ENHANCEMENT"
                                            }), (0, t.jsxs)("div", {
                                                className: "mb-6",
                                                children: [(0, t.jsx)("h3", {
                                                    className: "text-3xl font-inter text-center text-white font-semibold mb-3 italic break-words",
                                                    children: "DIPPING POWDER"
                                                }), (0, t.jsx)("div", {
                                                    className: "space-y-2",
                                                    children: [{
                                                        name: "Dip On Real Nails",
                                                        price: "$50"
                                                    }, {
                                                        name: "Dip Tips On",
                                                        price: "$65"
                                                    }, {
                                                        name: "Dip French",
                                                        price: "$70"
                                                    }, {
                                                        name: "Ombre' Real Nails",
                                                        price: "$60"
                                                    }, {
                                                        name: "Ombre' Tip On",
                                                        price: "$75"
                                                    }, {
                                                        name: "Take Off",
                                                        price: "$10"
                                                    }].map((e, a) => (0, t.jsxs)("div", {
                                                        className: "flex items-end text-white py-1",
                                                        children: [(0, t.jsx)("span", {
                                                            className: "text-lg whitespace-nowrap",
                                                            children: e.name
                                                        }), (0, t.jsx)("div", {
                                                            className: "flex-1 mx-3 border-t border-white/20",
                                                            style: {
                                                                alignSelf: "flex-end",
                                                                marginBottom: "6px"
                                                            }
                                                        }), (0, t.jsx)("span", {
                                                            className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                            children: e.price
                                                        })]
                                                    }, a))
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("h3", {
                                                    className: "text-3xl font-inter text-white font-semibold mb-3 italic text-center break-words",
                                                    children: "ACRYLIC"
                                                }), (0, t.jsx)("div", {
                                                    className: "space-y-2",
                                                    children: [{
                                                        name: "Fullset Regular",
                                                        price: "$50"
                                                    }, {
                                                        name: "Full set Gel",
                                                        price: "$55 & up"
                                                    }, {
                                                        name: "Full Set Pink & White",
                                                        price: "$65 & Up"
                                                    }, {
                                                        name: "Full Set Ombre'",
                                                        price: "$65 & Up"
                                                    }, {
                                                        name: "Full Set Deep French Cut",
                                                        price: "$65 & Up"
                                                    }, {
                                                        name: "AF Refill Gel",
                                                        price: "$48"
                                                    }, {
                                                        name: "Gel Polish Change",
                                                        price: "$35"
                                                    }, {
                                                        name: "Take Off",
                                                        price: "$10"
                                                    }, {
                                                        name: "Design 2 Fingers",
                                                        price: "$8 & Up"
                                                    }, {
                                                        name: "Special Shape",
                                                        price: "$5"
                                                    }, {
                                                        name: "Length",
                                                        price: "$5 & Up"
                                                    }, {
                                                        name: "Fix 1 Nail Broken",
                                                        price: "$3 & Up"
                                                    }, {
                                                        name: "Deep French Art",
                                                        price: "$10 & Up"
                                                    }, {
                                                        name: "Chrome Extra",
                                                        price: "$15"
                                                    }].map((e, a) => (0, t.jsxs)("div", {
                                                        className: "flex items-end text-white py-1",
                                                        children: [(0, t.jsx)("span", {
                                                            className: "text-lg whitespace-nowrap",
                                                            children: e.name
                                                        }), (0, t.jsx)("div", {
                                                            className: "flex-1 mx-3 border-t border-white/20",
                                                            style: {
                                                                alignSelf: "flex-end",
                                                                marginBottom: "6px"
                                                            }
                                                        }), (0, t.jsx)("span", {
                                                            className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                            children: e.price
                                                        })]
                                                    }, a))
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)(r, {
                                    delay: 400,
                                    children: (0, t.jsx)("div", {
                                        className: "space-y-6 flex flex-col h-full",
                                        children: (0, t.jsxs)("div", {
                                            className: "bg-black/20 backdrop-blur-sm rounded-3xl border-[2px] border-[rgb(249,221,130,1)] p-6 h-full",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center italic break-words",
                                                children: "MANICURE"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2",
                                                children: [{
                                                    name: "Manicure Gel",
                                                    price: "$40"
                                                }, {
                                                    name: "Gel Polish Change",
                                                    price: "$30"
                                                }, {
                                                    name: "Manicure Regular",
                                                    price: "$25"
                                                }, {
                                                    name: "Regular Polish Change",
                                                    price: "$20"
                                                }, {
                                                    name: "Design 2 Fingers",
                                                    price: "$10 &up"
                                                }, {
                                                    name: "French Tips",
                                                    price: "$7 & up"
                                                }, {
                                                    name: "Take Off Gel",
                                                    price: "$10"
                                                }, {
                                                    name: "Paraffin Hands",
                                                    price: "$10"
                                                }, {
                                                    name: "Shiny Buff",
                                                    price: "$6"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            }), (0, t.jsx)(d, {}), (0, t.jsx)("h2", {
                                                className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center  italic break-words",
                                                children: "KID SERVICE (11 OR YOUNGER)"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2",
                                                children: [{
                                                    name: "Manicure Regular",
                                                    price: "$15 & up"
                                                }, {
                                                    name: "Manicure Gel",
                                                    price: "$20 & up"
                                                }, {
                                                    name: "Pedicure Regular",
                                                    price: "$25 & up"
                                                }, {
                                                    name: "Pedicure Gel",
                                                    price: "$35 & up"
                                                }, {
                                                    name: "Design",
                                                    price: "$5 & Up"
                                                }, {
                                                    name: "Hand Paint",
                                                    price: "$10 & up"
                                                }, {
                                                    name: "Toes Paint",
                                                    price: "$15 & up"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            }), (0, t.jsx)(d, {}), (0, t.jsx)("h2", {
                                                className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center italic break-words",
                                                children: "GEL X FULLSET"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2",
                                                children: [{
                                                    name: "Gel X Any Shape Short",
                                                    price: "$60"
                                                }, {
                                                    name: "Gel X Any Shape Medium",
                                                    price: "$65"
                                                }, {
                                                    name: "Gel X Any Shape Long",
                                                    price: "$75"
                                                }, {
                                                    name: "Take Off",
                                                    price: "$15"
                                                }, {
                                                    name: "Gel X Fill Extra",
                                                    price: "$15 & Up"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })]
                                        })
                                    })
                                }), (0, t.jsx)(r, {
                                    delay: 600,
                                    children: (0, t.jsx)("div", {
                                        className: "space-y-6 flex flex-col h-full",
                                        children: (0, t.jsxs)("div", {
                                            className: "bg-black/20 backdrop-blur-sm rounded-3xl border-[2px] border-[rgb(249,221,130,1)] p-6 h-full",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center italic break-words",
                                                children: "PEDICURES"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2",
                                                children: [{
                                                    name: "Classic Pedicure",
                                                    price: "$35"
                                                }, {
                                                    name: "Foot Treatment",
                                                    price: "$46"
                                                }, {
                                                    name: "Luster Deluxe Spa",
                                                    price: "$54"
                                                }, {
                                                    name: "Scottsdale Jelly Spa",
                                                    price: "$69"
                                                }, {
                                                    name: "Scottsdale Pearl Spa",
                                                    price: "$78"
                                                }, {
                                                    name: "Scottsdale Pearl Spa Gold",
                                                    price: "$90"
                                                }, {
                                                    name: "Duong Thảo",
                                                    price: "$95"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            }), (0, t.jsx)(d, {}), (0, t.jsx)("h2", {
                                                className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center italic break-words",
                                                children: "HYBRIDS GEL + LIQUID GEL"
                                            }), (0, t.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    [{
                                                        name: "Full Set",
                                                        price: "$65+"
                                                    }, {
                                                        name: "French Full Set",
                                                        price: "$70+"
                                                    }, {
                                                        name: "Refill",
                                                        price: "$50+"
                                                    }, {
                                                        name: "Special Shape",
                                                        price: "$5 UP"
                                                    }, {
                                                        name: "Length",
                                                        price: "$5 UP"
                                                    }, {
                                                        name: "Design",
                                                        price: "$10 UP"
                                                    }, {
                                                        name: "Fix 1 Nail",
                                                        price: "$10 UP"
                                                    }, {
                                                        name: "Gel polish",
                                                        price: "$30 up"
                                                    }, {
                                                        name: "Af fullset",
                                                        price: "$60"
                                                    }, {
                                                        name: "Take off",
                                                        price: "$10 up"
                                                    }, {
                                                        name: "Refill liquid",
                                                        price: "$55"
                                                    }, {
                                                        name: "Gel liquid",
                                                        price: "$55"
                                                    }].map((e, a) => (0, t.jsxs)("div", {
                                                        className: "flex items-end text-white py-1",
                                                        children: [(0, t.jsx)("span", {
                                                            className: "text-lg whitespace-nowrap",
                                                            children: e.name
                                                        }), (0, t.jsx)("div", {
                                                            className: "flex-1 mx-3 border-t border-white/20",
                                                            style: {
                                                                alignSelf: "flex-end",
                                                                marginBottom: "6px"
                                                            }
                                                        }), (0, t.jsx)("span", {
                                                            className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                            children: e.price
                                                        })]
                                                    }, a)), (0, t.jsx)(d, {}), (0, t.jsx)("h2", {
                                                        className: "text-3xl font-inter text-[#EAC463] font-bold mb-8 text-center italic break-words",
                                                        children: "WAXING"
                                                    }), (0, t.jsx)("div", {
                                                        className: "space-y-2",
                                                        children: [{
                                                            name: "Eyebrows",
                                                            price: "$15"
                                                        }, {
                                                            name: "Up Lip",
                                                            price: "$10"
                                                        }, {
                                                            name: "Down Lip",
                                                            price: "$8"
                                                        }, {
                                                            name: "Chin",
                                                            price: "$10 UP"
                                                        }, {
                                                            name: "Full Face",
                                                            price: "$45"
                                                        }].map((e, a) => (0, t.jsxs)("div", {
                                                            className: "flex items-end text-white py-1",
                                                            children: [(0, t.jsx)("span", {
                                                                className: "text-lg whitespace-nowrap",
                                                                children: e.name
                                                            }), (0, t.jsx)("div", {
                                                                className: "flex-1 mx-3 border-t border-white/20",
                                                                style: {
                                                                    alignSelf: "flex-end",
                                                                    marginBottom: "6px"
                                                                }
                                                            }), (0, t.jsx)("span", {
                                                                className: "text-white font-bold text-base whitespace-nowrap mb-1.5",
                                                                children: e.price
                                                            })]
                                                        }, a))
                                                    })
                                                ]
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                };
            var m = s(5565);
            let x = () => (0, t.jsxs)("div", {
                    className: "bg-gradient-to-b from-[#212121] via-[#1A1A1A] to-[#1A1A1B] relative overflow-hidden font-montserrat",
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 opacity-20",
                        children: [(0, t.jsx)("div", {
                            className: "absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-2 md:px-6 py-12",
                        children: [(0, t.jsx)(r, {
                            delay: 0,
                            children: (0, t.jsx)("div", {
                                className: "text-center mt-12",
                                children: (0, t.jsx)("h1", {
                                    className: "text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#EAC463] italic mb-4 font-montserrat",
                                    children: "SERVICES MENU"
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "space-y-8 lg:space-y-12",
                            children: [(0, t.jsx)(r, {
                                delay: 200,
                                children: (0, t.jsxs)("div", {
                                    id: "menu2-nail-enhancement",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsxs)("div", {
                                        className: "text-center mb-8",
                                        children: [(0, t.jsx)("h2", {
                                            className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic",
                                            children: "NAIL ENHANCEMENT"
                                        }), (0, t.jsx)("h3", {
                                            className: "text-xl p-5 md:text-4xl font-inter text-[#EAC463] font-semibold italic whitespace-nowrap",
                                            children: "DIPPING POWDER"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Dip On Real Nails",
                                                    price: "$50"
                                                }, {
                                                    name: "Dip Tips On",
                                                    price: "$65"
                                                }, {
                                                    name: "Dip French",
                                                    price: "$70"
                                                }, {
                                                    name: "Dip Overlay French",
                                                    price: "$60"
                                                }, {
                                                    name: "Ombre' Real Nails",
                                                    price: "$60"
                                                }, {
                                                    name: "Ombre' Tip On",
                                                    price: "$75"
                                                }, {
                                                    name: "Take Off",
                                                    price: "$10"
                                                }, {
                                                    name: "Acrylic Off",
                                                    price: "$10 & up"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu_DIPPINGPOWDER.jpg",
                                                    alt: "Nail Enhancement Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-64 md:h-80 lg:h-96 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 400,
                                children: (0, t.jsxs)("div", {
                                    id: "menu2-acrylic",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-center mb-8",
                                        children: (0, t.jsx)("h2", {
                                            className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic",
                                            children: "ACRYLIC"
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Fullset Regular",
                                                    price: "$50"
                                                }, {
                                                    name: "Full set Gel",
                                                    price: "$55 & up"
                                                }, {
                                                    name: "Full Set Pink & White",
                                                    price: "$65 & Up"
                                                }, {
                                                    name: "Full Set Ombre'",
                                                    price: "$65 & Up"
                                                }, {
                                                    name: "Full Set Deep French Cut",
                                                    price: "$65 & Up"
                                                }, {
                                                    name: "AF Refill Gel",
                                                    price: "$48"
                                                }, {
                                                    name: "Gel Polish Change",
                                                    price: "$35"
                                                }, {
                                                    name: "Take Off",
                                                    price: "$10"
                                                }, {
                                                    name: "Design 2 Fingers",
                                                    price: "$8 & Up"
                                                }, {
                                                    name: "Special Shape",
                                                    price: "$5"
                                                }, {
                                                    name: "Length",
                                                    price: "$5 & Up"
                                                }, {
                                                    name: "Fix 1 Nail Broken",
                                                    price: "$3 & Up"
                                                }, {
                                                    name: "Deep French Art",
                                                    price: "$10 & Up"
                                                }, {
                                                    name: "Chrome Extra",
                                                    price: "$15"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/banner1.jpg",
                                                    alt: "Acrylic Nail Services",
                                                    width: 400,
                                                    height: 800,
                                                    className: "w-full h-80 md:h-96 lg:h-[40rem] object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                }),
                h = () => (0, t.jsxs)("div", {
                    className: "bg-gradient-to-b from-[#212121] via-[#1A1A1A] to-[#1A1A1B] relative overflow-hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 opacity-20",
                        children: [(0, t.jsx)("div", {
                            className: "absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-2 md:px-6 py-12",
                        children: (0, t.jsxs)("div", {
                            className: "space-y-8 lg:space-y-12",
                            children: [(0, t.jsx)(r, {
                                delay: 0,
                                children: (0, t.jsxs)("div", {
                                    id: "menu3-pedicures",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "PEDICURES"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Classic Pedicure",
                                                    price: "$35"
                                                }, {
                                                    name: "Foot Treatment",
                                                    price: "$46"
                                                }, {
                                                    name: "Luster Deluxe Spa",
                                                    price: "$54"
                                                }, {
                                                    name: "Scottsdale Jelly Spa",
                                                    price: "$69"
                                                }, {
                                                    name: "Scottsdale Pearl Spa",
                                                    price: "$78"
                                                }, {
                                                    name: "Scottsdale Pearl Spa Gold",
                                                    price: "$90"
                                                }, {
                                                    name: "Duong Thảo",
                                                    price: "$95"
                                                }, {
                                                    name: "Add Gel",
                                                    price: "$15/each"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu-PEDICURES.jpg",
                                                    alt: "Pedicure Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-64 md:h-80 lg:h-96 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 200,
                                children: (0, t.jsxs)("div", {
                                    id: "menu3-hybrids-waxing",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "HYBRIDS GEL + LIQUID GEL"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Full Set",
                                                    price: "$65+"
                                                }, {
                                                    name: "French Full Set",
                                                    price: "$70+"
                                                }, {
                                                    name: "Refill",
                                                    price: "$55+"
                                                }, {
                                                    name: "Special Shape",
                                                    price: "$5 UP"
                                                }, {
                                                    name: "Length",
                                                    price: "$5 UP"
                                                }, {
                                                    name: "Design",
                                                    price: "$10 UP"
                                                }, {
                                                    name: "Fix 1 Nail",
                                                    price: "$10 UP"
                                                }, {
                                                    name: "Gel polish",
                                                    price: "$30 up"
                                                }, {
                                                    name: "Af fullset",
                                                    price: "$60"
                                                }, {
                                                    name: "Take off",
                                                    price: "$10 up"
                                                }, {
                                                    name: "Refill liquid",
                                                    price: "$55"
                                                }, {
                                                    name: "Gel liquid",
                                                    price: "$55"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/test1.jpg",
                                                    alt: "Hybrid Gel Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-80 md:h-96 lg:h-[40rem] object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 400,
                                children: (0, t.jsxs)("div", {
                                    id: "menu3-waxing",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "WAXING"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Eyebrows",
                                                    price: "$15"
                                                }, {
                                                    name: "Up Lip",
                                                    price: "$10"
                                                }, {
                                                    name: "Down Lip",
                                                    price: "$8"
                                                }, {
                                                    name: "Chin",
                                                    price: "$10 UP"
                                                }, {
                                                    name: "Full Face",
                                                    price: "$45"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu_waxing.jpg",
                                                    alt: "Waxing Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-56 md:h-64 lg:h-72 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                }),
                p = () => (0, t.jsxs)("div", {
                    className: "bg-gradient-to-b from-[#212121] via-[#1A1A1A] to-[#1A1A1B] relative overflow-hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 opacity-20",
                        children: [(0, t.jsx)("div", {
                            className: "absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent",
                            children: (0, t.jsx)("div", {
                                className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmbG93ZXIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgPHBhdGggZD0iTTEwMCwxMDAgQzEyMCwxMjAgMTQwLDEwMCAxNjAsMTIwIEMxODAsMTQwIDE2MCwxNjAgMTQwLDE4MCBDMTIwLDIwMCAxMDAsMTgwIDgwLDE2MCBDNjAsMTQwIDgwLDEyMCAxMDAsMTAwIFoiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjZmZkNzAwIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmbG93ZXIpIi8+Cjwvc3ZnPg==')] opacity-30"
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-2 md:px-6 py-12",
                        children: (0, t.jsxs)("div", {
                            className: "space-y-8 lg:space-y-12",
                            children: [(0, t.jsx)(r, {
                                delay: 0,
                                children: (0, t.jsxs)("div", {
                                    id: "menu4-manicure",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "MANICURE"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Manicure Gel",
                                                    price: "$43"
                                                }, {
                                                    name: "Gel Polish Change",
                                                    price: "$30"
                                                }, {
                                                    name: "Manicure Regular",
                                                    price: "$25"
                                                }, {
                                                    name: "Regular Polish Change",
                                                    price: "$20"
                                                }, {
                                                    name: "Design 2 Fingers",
                                                    price: "$10 &up"
                                                }, {
                                                    name: "French Tips",
                                                    price: "$8+"
                                                }, {
                                                    name: "Take Off  Gel",
                                                    price: "$10"
                                                }, {
                                                    name: "Paraffin Hands",
                                                    price: "$10"
                                                }, {
                                                    name: "Shiny Buff",
                                                    price: "$6"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu_manicure.jpg",
                                                    alt: "Manicure Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-64 md:h-80 lg:h-96 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 200,
                                children: (0, t.jsxs)("div", {
                                    id: "menu4-kids",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "KID SERVICE (11 OR YOUNGER)"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Manicure Regular",
                                                    price: "$15 & up"
                                                }, {
                                                    name: "Manicure Gel",
                                                    price: "$25 & up"
                                                }, {
                                                    name: "Pedicure Regular",
                                                    price: "$25 & up"
                                                }, {
                                                    name: "Pedicure Gel",
                                                    price: "$35 & up"
                                                }, {
                                                    name: "Design",
                                                    price: "$5 & Up"
                                                }, {
                                                    name: "Hand Paint",
                                                    price: "$10 & up"
                                                }, {
                                                    name: "Toes Paint",
                                                    price: "$15 & up"
                                                }, {
                                                    name: "Kid gel polish",
                                                    price: "$20 & up"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu_kid.jpg",
                                                    alt: "Kid Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-64 md:h-80 lg:h-96 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 400,
                                children: (0, t.jsxs)("div", {
                                    id: "menu4-gelx",
                                    className: "rounded-3xl p-6 md:p-10 w-full",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold text-[#EAC463] italic text-center mb-6",
                                        children: "GEL X FULLSET"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-12",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex-1 w-full lg:w-auto",
                                            children: (0, t.jsx)("div", {
                                                className: "space-y-3",
                                                children: [{
                                                    name: "Gel X Any Shape Short",
                                                    price: "$60"
                                                }, {
                                                    name: "Gel X Any Shape Medium",
                                                    price: "$65"
                                                }, {
                                                    name: "Gel X Any Shape Long",
                                                    price: "$75"
                                                }, {
                                                    name: "Take Off",
                                                    price: "$15"
                                                }, {
                                                    name: "Gel X Fill Extra",
                                                    price: "$15 & Up"
                                                }].map((e, a) => (0, t.jsxs)("div", {
                                                    className: "flex items-end text-white py-1",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "text-lg whitespace-nowrap",
                                                        children: e.name
                                                    }), (0, t.jsx)("div", {
                                                        className: "flex-1 mx-3 border-t border-white/20",
                                                        style: {
                                                            alignSelf: "flex-end",
                                                            marginBottom: "6px"
                                                        }
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-white font-bold text-lg whitespace-nowrap mb-1.5",
                                                        children: e.price
                                                    })]
                                                }, a))
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex-shrink-0 w-full lg:w-80 xl:w-96",
                                            children: (0, t.jsxs)("div", {
                                                className: "relative rounded-2xl overflow-hidden shadow-2xl",
                                                children: [(0, t.jsx)(m.default, {
                                                    src: "/gallery/menu_gel.jpg",
                                                    alt: "Gel X Fullset Services",
                                                    width: 400,
                                                    height: 400,
                                                    className: "w-full h-56 md:h-64 lg:h-72 object-cover"
                                                }), (0, t.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                }),
                g = [{
                    title: "Nail Enhancement",
                    description: "Professional dipping powder and acrylic services to enhance your natural nails with beautiful, long-lasting results.",
                    imageUrl: "/gallery/nail2.jpg",
                    ctaText: "OUR SERVICES"
                }, {
                    title: "Manicure",
                    description: "Let your nails shine with our professional manicure services, including gel and regular polish options.",
                    imageUrl: "/gallery/manicure1.jpg",
                    ctaText: "OUR SERVICES"
                }, {
                    title: "Pedicures",
                    description: "Enjoy a relaxing pedicure experience with our range of spa treatments from classic to deluxe services.",
                    imageUrl: "/gallery/Pedicures4.jpg",
                    ctaText: "OUR SERVICES"
                }, {
                    title: "Gel X Fullset",
                    description: "Get beautiful, durable nails with our Gel X system in any shape and length you desire.",
                    imageUrl: "/gallery/a4.jpg",
                    ctaText: "OUR SERVICES"
                }, {
                    title: "Kid's Services",
                    description: "Special services designed for children 11 and younger, including manicures, pedicures, and fun designs.",
                    imageUrl: "/gallery/kid3.jpg",
                    ctaText: "OUR SERVICES"
                }, {
                    title: "Waxing",
                    description: "Professional waxing services for eyebrows, facial hair, and other areas to help you achieve smooth, hair-free skin.",
                    imageUrl: "/gallery/waxing4.jpg",
                    ctaText: "OUR SERVICES"
                }],
                w = e => {
                    let {
                        card: a
                    } = e;
                    return (0, t.jsx)("div", {
                        className: "relative bg-[#1a1a1b] group h-full font-montserrat",
                        children: (0, t.jsxs)("div", {
                            className: "overflow-hidden shadow-2xl h-full flex flex-col",
                            children: [(0, t.jsxs)("div", {
                                className: "h-48 md:h-64 w-full overflow-hidden relative",
                                children: [(0, t.jsx)(m.default, {
                                    src: a.imageUrl,
                                    alt: a.title,
                                    fill: !0,
                                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                    priority: !1
                                }), (0, t.jsxs)("div", {
                                    className: "absolute inset-0 pointer-events-none",
                                    children: [(0, t.jsx)("div", {
                                        className: "absolute inset-0 bg-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-black/40"
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: (0, t.jsx)("div", {
                                            className: "w-full h-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 opacity-0 scale-y-0 origin-center transition-[transform,opacity] duration-500 ease-out group-hover:h-full group-hover:opacity-100 group-hover:scale-y-100"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-150 ease-in-out group-hover:opacity-100 group-hover:translate-y-0",
                                        children: (0, t.jsxs)("button", {
                                            type: "button",
                                            onClick: () => {
                                                window.open("https://booking.salondragon.com/luster", "_blank")
                                            },
                                            className: "group relative pointer-events-auto overflow-hidden inline-flex items-center justify-center border border-[#EAC463] text-[#EAC463] bg-transparent px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                                            children: [(0, t.jsx)("span", {
                                                className: "relative z-10 group-hover:text-black transition-colors duration-300",
                                                children: "Book now"
                                            }), (0, t.jsx)("span", {
                                                className: "pointer-events-none absolute left-0 top-0 h-full w-0 bg-[#EAC463] transition-[width] duration-300 ease-out group-hover:w-full"
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "bg-[url('/image/marble.jpg')] bg-cover bg-center flex-1",
                                style: {
                                    backgroundColor: "#f7f4ef"
                                },
                                children: (0, t.jsxs)("div", {
                                    className: "p-4 md:p-6 bg-white text-start h-full",
                                    children: [(0, t.jsx)("h3", {
                                        className: "font-bold text-xl md:text-3xl tracking-widest text-dark bg-clip-text",
                                        style: {
                                            fontFamily: "'Montserrat', sans-serif"
                                        },
                                        children: a.title
                                    }), (0, t.jsx)("div", {
                                        className: "my-2 md:my-3",
                                        children: (0, t.jsx)("svg", {
                                            width: "60",
                                            height: "10",
                                            viewBox: "0 0 60 12",
                                            className: "opacity-70 md:w-20 md:h-3.5",
                                            children: (0, t.jsx)("path", {
                                                d: "M0 6h60",
                                                stroke: "#d0ad4f",
                                                strokeWidth: "2"
                                            })
                                        })
                                    }), (0, t.jsx)("p", {
                                        className: "text-sm md:text-lg text-gray-700 leading-relaxed min-h-[4.5rem] max-h-[4.5rem] md:min-h-[5.5rem] md:max-h-[5.5rem]",
                                        style: {
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden"
                                        },
                                        title: a.description,
                                        children: a.description
                                    })]
                                })
                            })]
                        })
                    })
                },
                j = e => {
                    let {
                        cards: a
                    } = e, s = (0, l.useMemo)(() => a && a.length ? a : g, [a]);
                    return (0, t.jsx)("section", {
                        className: "relative py-12 bg-[#1a1a1b] bg-center font-montserrat",
                        children: (0, t.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [(0, t.jsx)(r, {
                                delay: 0,
                                children: (0, t.jsxs)("div", {
                                    className: "text-center mb-8",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-4xl md:text-6xl tracking-wide text-[#EAC463] font-montserrat",
                                        children: "Our Services"
                                    }), (0, t.jsx)("p", {
                                        className: "mt-3 text-base md:text-xl text-gray-300 max-w-3xl mx-auto",
                                        children: "Welcome to Smiling Nails & Lash. We offer professional services for manicure, pedicure, eyelash extensions, and waxing. Visit us and let our professional team pamper you."
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 200,
                                children: (0, t.jsx)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch",
                                    children: s.map((e, a) => (0, t.jsx)("div", {
                                        className: "h-full",
                                        children: (0, t.jsx)(w, {
                                            card: e
                                        })
                                    }, a))
                                })
                            })]
                        })
                    })
                },
                u = () => (0, t.jsx)("section", {
                    className: "py-16 bg-[#1a1a1b] font-montserrat",
                    children: (0, t.jsx)("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: (0, t.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start",
                            children: [(0, t.jsx)(r, {
                                delay: 100,
                                children: (0, t.jsxs)("div", {
                                    className: "relative w-full",
                                    children: [(0, t.jsx)("div", {
                                        className: "relative w-full h-[420px] rounded-sm overflow-hidden",
                                        children: (0, t.jsx)(m.default, {
                                            src: "/image/spa.jpg",
                                            alt: "Nail service close-up",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes: "(max-width: 1024px) 100vw, 48vw",
                                            priority: !1
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "absolute -bottom-16 -right-4 w-[65%] h-44 md:h-52 rounded-sm overflow-hidden shadow-xl hidden md:block",
                                        children: (0, t.jsx)(m.default, {
                                            src: "/gallery/spa.png",
                                            alt: "Relaxing spa pedicure",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes: "40vw"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "h-16 md:h-24"
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 250,
                                children: (0, t.jsxs)("div", {
                                    className: "text-white font-montserrat",
                                    children: [(0, t.jsxs)("div", {
                                        className: "mb-4",
                                        children: [(0, t.jsx)("span", {
                                            className: "uppercase tracking-[0.25em] text-xl text-[#EAC463] font-montserrat",
                                            children: "About Us"
                                        }), (0, t.jsx)("div", {
                                            className: "mt-2 max-w-xs",
                                            children: (0, t.jsx)(d, {})
                                        })]
                                    }), (0, t.jsxs)("h2", {
                                        className: "text-4xl md:text-5xl  tracking-wide leading-tight font-montserrat text-[#EAC463]",
                                        children: ["Discover a Premier", (0, t.jsx)("br", {}), "Nails & Spa Experience"]
                                    }), (0, t.jsxs)("div", {
                                        className: "mt-6 space-y-4 text-gray-300 leading-7 font-montserrat",
                                        children: [(0, t.jsx)("p", {
                                            children: "Welcome to LUSTER | nails salon & spa — where beauty and relaxation meet. We offer premium nail care and spa services delivered by a dedicated team that values cleanliness, attention to detail, and your personal style."
                                        }), (0, t.jsx)("p", {
                                            children: "At LUSTER, choose from a full menu: Nail Enhancement (Dip/Acrylic), Gel or Regular Manicures, relaxing Spa Pedicures, trendy Gel X Fullsets, kid-friendly services, and professional Waxing. Every service is designed with hygiene, safety, and comfort in mind."
                                        }), (0, t.jsx)("p", {
                                            children: "We celebrate creativity — from classic to modern shapes, soft to statement colors, and finishes like Glitter or Color Powder. Everything is customized to your vibe. Bring the inspiration; our team will take care of the rest."
                                        }), (0, t.jsx)("p", {
                                            children: "Visit LUSTER | nails salon & spa to enjoy a warm atmosphere, thoughtful service, and a flawless finish that exceeds expectations. Book your appointment today and feel the difference."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "mt-8 flex gap-8 text-sm text-gray-200",
                                        children: [(0, t.jsx)("a", {
                                            href: "#",
                                            className: "underline underline-offset-4 hover:text-[#EAC463]",
                                            children: "Personalized Program"
                                        }), (0, t.jsx)("a", {
                                            href: "#",
                                            className: "underline underline-offset-4 hover:text-[#EAC463]",
                                            children: "Care Consultation"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                });
            var f = s(58803),
                y = s.n(f),
                I = s(47650);
            let b = [{
                    id: "1",
                    src: "/gallery/nail1.jpg",
                    alt: "Nail Enhancement 1",
                    category: "nail-enhancement",
                    width: 400,
                    height: 600
                }, {
                    id: "2",
                    src: "/gallery/nail2.jpg",
                    alt: "Nail Enhancement 2",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "3",
                    src: "/gallery/nail3.jpg",
                    alt: "Nail Enhancement 3",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "4",
                    src: "/gallery/nail4.jpg",
                    alt: "Nail Enhancement 4",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "5",
                    src: "/gallery/nail5.jpg",
                    alt: "Nail Enhancement 5",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "6",
                    src: "/gallery/nail6.jpg",
                    alt: "Nail Enhancement 6",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "7",
                    src: "/gallery/nail7.jpg",
                    alt: "Nail Enhancement 7",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "8",
                    src: "/gallery/nail8.jpg",
                    alt: "Nail Enhancement 8",
                    category: "nail-enhancement",
                    width: 400,
                    height: 500
                }, {
                    id: "9",
                    src: "/gallery/manicure1.jpg",
                    alt: "Manicure 1",
                    category: "manicure",
                    width: 400,
                    height: 700
                }, {
                    id: "10",
                    src: "/gallery/manicure2.jpg",
                    alt: "Manicure 2",
                    category: "manicure",
                    width: 400,
                    height: 550
                }, {
                    id: "11",
                    src: "/gallery/manicure3.jpg",
                    alt: "Manicure 3",
                    category: "manicure",
                    width: 400,
                    height: 650
                }, {
                    id: "12",
                    src: "/gallery/manicure4.jpg",
                    alt: "Manicure 4",
                    category: "manicure",
                    width: 400,
                    height: 500
                }, {
                    id: "13",
                    src: "/gallery/manicure5.jpg",
                    alt: "Manicure 5",
                    category: "manicure",
                    width: 400,
                    height: 500
                }, {
                    id: "14",
                    src: "/gallery/manicure6.jpg",
                    alt: "Manicure 6",
                    category: "manicure",
                    width: 400,
                    height: 500
                }, {
                    id: "24",
                    src: "/gallery/manicure7.jpg",
                    alt: "Manicure 7",
                    category: "manicure",
                    width: 400,
                    height: 500
                }, {
                    id: "15",
                    src: "/gallery/Pedicures1.jpg",
                    alt: "Pedicures 1",
                    category: "pedicures",
                    width: 400,
                    height: 600
                }, {
                    id: "16",
                    src: "/gallery/Pedicures2.jpg",
                    alt: "Pedicures 2",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "17",
                    src: "/gallery/Pedicures3.jpg",
                    alt: "Pedicures 3",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "18",
                    src: "/gallery/Pedicures4.jpg",
                    alt: "Pedicures 4",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "19",
                    src: "/gallery/Pedicures5.jpg",
                    alt: "Pedicures 5",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "20",
                    src: "/gallery/Pedicures6.jpg",
                    alt: "Pedicures 6",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "21",
                    src: "/gallery/Pedicures7.jpg",
                    alt: "Pedicures 7",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "22",
                    src: "/gallery/Pedicures8.jpg",
                    alt: "Pedicures 8",
                    category: "pedicures",
                    width: 400,
                    height: 550
                }, {
                    id: "23",
                    src: "/gallery/kid1.jpg",
                    alt: "Kid Service 1",
                    category: "kid-service",
                    width: 400,
                    height: 550
                }, {
                    id: "24",
                    src: "/gallery/kid2.jpg",
                    alt: "Kid Service 2",
                    category: "kid-service",
                    width: 400,
                    height: 550
                }, {
                    id: "25",
                    src: "/gallery/kid3.jpg",
                    alt: "Kid Service 3",
                    category: "kid-service",
                    width: 400,
                    height: 550
                }, {
                    id: "26",
                    src: "/gallery/kid4.jpg",
                    alt: "Kid Service 4",
                    category: "kid-service",
                    width: 400,
                    height: 550
                }, {
                    id: "27",
                    src: "/gallery/kid5.jpg",
                    alt: "Kid Service 5",
                    category: "kid-service",
                    width: 400,
                    height: 550
                }, {
                    id: "28",
                    src: "/gallery/waxing1.jpg",
                    alt: "Waxing 1",
                    category: "waxing",
                    width: 400,
                    height: 550
                }, {
                    id: "29",
                    src: "/gallery/waxing2.jpg",
                    alt: "Waxing 2",
                    category: "waxing",
                    width: 400,
                    height: 550
                }, {
                    id: "30",
                    src: "/gallery/waxing3.jpg",
                    alt: "Waxing 3",
                    category: "waxing",
                    width: 400,
                    height: 550
                }, {
                    id: "31",
                    src: "/gallery/waxing4.jpg",
                    alt: "Waxing 4",
                    category: "waxing",
                    width: 400,
                    height: 550
                }],
                v = [{
                    id: "nail-enhancement",
                    name: "Nail Enhancement",
                    image: "/gallery/nail_enhancement.png"
                }, {
                    id: "manicure",
                    name: "Manicure",
                    image: "/gallery/manicure.png"
                }, {
                    id: "pedicures",
                    name: "Pedicures",
                    image: "/gallery/pedicure.png"
                }, {
                    id: "kid-service",
                    name: "Kid Service",
                    image: "/gallery/kid_service.png"
                }, {
                    id: "waxing",
                    name: "Waxing",
                    image: "/gallery/waxing.svg"
                }],
                N = e => {
                    let {
                        category: a,
                        isSelected: s,
                        onClick: i
                    } = e, [r, n] = (0, l.useState)(!1), c = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => () => {
                        c.current && clearTimeout(c.current)
                    }, []), (0, t.jsxs)("button", {
                        onClick: i,
                        onMouseEnter: () => {
                            c.current && clearTimeout(c.current), n(!0)
                        },
                        onMouseLeave: () => {
                            c.current && clearTimeout(c.current), c.current = setTimeout(() => {
                                n(!1)
                            }, 200)
                        },
                        className: "group flex flex-col items-center p-1 sm:p-2 font-semibold text-[10px] sm:text-xs md:text-sm transition-all duration-300 min-w-[60px] sm:min-w-[90px] md:min-w-[100px] ".concat(s ? "text-white" : "text-gray-300 hover:text-white"),
                        children: [(0, t.jsx)("div", {
                            className: "mb-2 sm:mb-3 md:mb-4 flex items-center justify-center",
                            children: (0, t.jsxs)("div", {
                                className: "jsx-2392e3b0a932f87c relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-2392e3b0a932f87c absolute inset-0 rounded-full bg-[#EAC463] -translate-x-1 -translate-y-1 sm:-translate-x-1 sm:-translate-y-1"
                                }), (0, t.jsx)("div", {
                                    className: "jsx-2392e3b0a932f87c relative w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center",
                                    children: (0, t.jsx)(m.default, {
                                        src: a.image,
                                        alt: a.name,
                                        width: 90,
                                        height: 90,
                                        className: "rounded-full object-cover transition-transform duration-300 ".concat("waxing" === a.id ? "w-2/3 h-2/3" : "w-full h-full", " ").concat(r ? "scale-x-[-1]" : "")
                                    })
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "0ms"
                                    },
                                    className: "jsx-2392e3b0a932f87c star-cat absolute w-1 h-1 bg-white rounded-full left-[42%] top-[6%] opacity-0 pointer-events-none"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "120ms"
                                    },
                                    className: "jsx-2392e3b0a932f87c star-cat absolute w-1 h-1 bg-white rounded-full left-[48%] top-[4%] opacity-0 pointer-events-none"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "220ms"
                                    },
                                    className: "jsx-2392e3b0a932f87c star-cat absolute w-1 h-1 bg-white rounded-full left-[54%] top-[7%] opacity-0 pointer-events-none"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "320ms"
                                    },
                                    className: "jsx-2392e3b0a932f87c star-cat absolute w-1 h-1 bg-white rounded-full left-[46%] top-[2%] opacity-0 pointer-events-none"
                                }), (0, t.jsx)(y(), {
                                    id: "2392e3b0a932f87c",
                                    children: "@-webkit-keyframes floatUpTinyStars{0%{-webkit-transform:translate(0,2px)scale(.7);transform:translate(0,2px)scale(.7);opacity:0}40%{opacity:1}100%{-webkit-transform:translate(-2px,-16px)scale(1);transform:translate(-2px,-16px)scale(1);opacity:0}}@-moz-keyframes floatUpTinyStars{0%{-moz-transform:translate(0,2px)scale(.7);transform:translate(0,2px)scale(.7);opacity:0}40%{opacity:1}100%{-moz-transform:translate(-2px,-16px)scale(1);transform:translate(-2px,-16px)scale(1);opacity:0}}@-o-keyframes floatUpTinyStars{0%{-o-transform:translate(0,2px)scale(.7);transform:translate(0,2px)scale(.7);opacity:0}40%{opacity:1}100%{-o-transform:translate(-2px,-16px)scale(1);transform:translate(-2px,-16px)scale(1);opacity:0}}@keyframes floatUpTinyStars{0%{-webkit-transform:translate(0,2px)scale(.7);-moz-transform:translate(0,2px)scale(.7);-o-transform:translate(0,2px)scale(.7);transform:translate(0,2px)scale(.7);opacity:0}40%{opacity:1}100%{-webkit-transform:translate(-2px,-16px)scale(1);-moz-transform:translate(-2px,-16px)scale(1);-o-transform:translate(-2px,-16px)scale(1);transform:translate(-2px,-16px)scale(1);opacity:0}}.group:hover .star-cat{-webkit-animation:floatUpTinyStars 900ms ease-out forwards;-moz-animation:floatUpTinyStars 900ms ease-out forwards;-o-animation:floatUpTinyStars 900ms ease-out forwards;animation:floatUpTinyStars 900ms ease-out forwards;-webkit-filter:drop-shadow(0 0 4px rgba(255,255,255,.6));filter:drop-shadow(0 0 4px rgba(255,255,255,.6))}"
                                })]
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-xs md:text-2xl transition-all duration-300 ".concat(s ? "border-b-2 border-white pb-1" : ""),
                            children: a.name
                        })]
                    })
                },
                A = e => {
                    let {
                        image: a,
                        onClick: s
                    } = e, [i, r] = (0, l.useState)(!1);
                    return (0, t.jsx)("div", {
                        className: "group relative overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
                        onClick: s,
                        children: (0, t.jsxs)("div", {
                            className: "relative aspect-[5/5] overflow-hidden",
                            children: [(0, t.jsx)(m.default, {
                                src: a.src,
                                alt: a.alt,
                                fill: !0,
                                className: "object-cover transition-all duration-700 ".concat(i ? "opacity-100 scale-100" : "opacity-0 scale-110", " group-hover:scale-105"),
                                onLoad: () => r(!0),
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), (0, t.jsxs)("div", {
                                className: "jsx-43e765af7fa87820 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-43e765af7fa87820 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 border-2 border-white/80 bg-black/10 z-0 pointer-events-none"
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-43e765af7fa87820 text-center text-white relative z-10",
                                    children: [(0, t.jsx)("div", {
                                        className: "jsx-43e765af7fa87820 w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border border-black/30 text-black transition-all duration-200 ease-out hover:bg-transparent hover:text-white hover:border-white active:scale-95",
                                        children: (0, t.jsx)("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-43e765af7fa87820 w-7 h-7",
                                            children: (0, t.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M7 17L17 7M17 7H10M17 7V14",
                                                className: "jsx-43e765af7fa87820"
                                            })
                                        })
                                    }), (0, t.jsx)("p", {
                                        className: "jsx-43e765af7fa87820 text-sm font-medium",
                                        children: "View Details"
                                    })]
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "0ms"
                                    },
                                    className: "jsx-43e765af7fa87820 star absolute w-1.5 h-1.5 bg-white rounded-full left-[48%] top-[52%] opacity-0"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "120ms"
                                    },
                                    className: "jsx-43e765af7fa87820 star absolute w-1.5 h-1.5 bg-white rounded-full left-[60%] top-[50%] opacity-0"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "200ms"
                                    },
                                    className: "jsx-43e765af7fa87820 star absolute w-1.5 h-1.5 bg-white rounded-full left-[40%] top-[50%] opacity-0"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "260ms"
                                    },
                                    className: "jsx-43e765af7fa87820 star absolute w-1.5 h-1.5 bg-white rounded-full left-[55%] top-[58%] opacity-0"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        animationDelay: "320ms"
                                    },
                                    className: "jsx-43e765af7fa87820 star absolute w-1.5 h-1.5 bg-white rounded-full left-[45%] top-[58%] opacity-0"
                                }), (0, t.jsx)(y(), {
                                    id: "43e765af7fa87820",
                                    children: "@-webkit-keyframes floatUp{0%{-webkit-transform:translatey(8px)scale(.6);transform:translatey(8px)scale(.6);opacity:0}40%{opacity:1}100%{-webkit-transform:translatey(-26px)scale(1);transform:translatey(-26px)scale(1);opacity:0}}@-moz-keyframes floatUp{0%{-moz-transform:translatey(8px)scale(.6);transform:translatey(8px)scale(.6);opacity:0}40%{opacity:1}100%{-moz-transform:translatey(-26px)scale(1);transform:translatey(-26px)scale(1);opacity:0}}@-o-keyframes floatUp{0%{-o-transform:translatey(8px)scale(.6);transform:translatey(8px)scale(.6);opacity:0}40%{opacity:1}100%{-o-transform:translatey(-26px)scale(1);transform:translatey(-26px)scale(1);opacity:0}}@keyframes floatUp{0%{-webkit-transform:translatey(8px)scale(.6);-moz-transform:translatey(8px)scale(.6);-o-transform:translatey(8px)scale(.6);transform:translatey(8px)scale(.6);opacity:0}40%{opacity:1}100%{-webkit-transform:translatey(-26px)scale(1);-moz-transform:translatey(-26px)scale(1);-o-transform:translatey(-26px)scale(1);transform:translatey(-26px)scale(1);opacity:0}}.group:hover .star{-webkit-animation:floatUp 900ms ease-out forwards;-moz-animation:floatUp 900ms ease-out forwards;-o-animation:floatUp 900ms ease-out forwards;animation:floatUp 900ms ease-out forwards;-webkit-filter:drop-shadow(0 0 4px rgba(255,255,255,.6));filter:drop-shadow(0 0 4px rgba(255,255,255,.6))}"
                                })]
                            })]
                        })
                    })
                },
                M = e => {
                    let {
                        image: a,
                        isOpen: s,
                        onClose: i,
                        onPrev: r,
                        onNext: n,
                        hasPrev: c,
                        hasNext: d
                    } = e;
                    return ((0, l.useEffect)(() => {
                        let e = e => {
                            "Escape" === e.key && i(), "ArrowLeft" === e.key && c && r(), "ArrowRight" === e.key && d && n()
                        };
                        return s && (document.addEventListener("keydown", e), document.body.style.overflow = "hidden"), () => {
                            document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
                        }
                    }, [s, i, r, n, c, d]), s && a) ? (0, I.createPortal)((0, t.jsx)("div", {
                        className: "fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/90 backdrop-blur-sm",
                        children: (0, t.jsxs)("div", {
                            className: "relative max-w-7xl max-h-[90vh] mx-auto p-4",
                            children: [(0, t.jsx)("button", {
                                onClick: i,
                                className: "absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors",
                                children: (0, t.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                })
                            }), c && (0, t.jsx)("button", {
                                onClick: r,
                                className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors",
                                children: (0, t.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    })
                                })
                            }), d && (0, t.jsx)("button", {
                                onClick: n,
                                className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors",
                                children: (0, t.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7"
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "relative",
                                children: (0, t.jsx)(m.default, {
                                    src: a.src,
                                    alt: a.alt,
                                    width: 1200,
                                    height: 800,
                                    className: "max-w-full max-h-[80vh] object-contain",
                                    priority: !0
                                })
                            })]
                        })
                    }), document.body) : null
                },
                C = () => {
                    let [e, a] = (0, l.useState)("nail-enhancement"), [s, i] = (0, l.useState)(null), [n, c] = (0, l.useState)(0), [d, o] = (0, l.useState)(!1), m = b.filter(a => a.category === e), x = e => {
                        c(m.findIndex(a => a.id === e.id)), i(e), o(!0)
                    };
                    return (0, t.jsx)("section", {
                        className: "py-20 bg-[#1a1a1b]",
                        children: (0, t.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [(0, t.jsx)(r, {
                                delay: 0,
                                children: (0, t.jsxs)("div", {
                                    className: "text-center mb-16",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-5xl md:text-6xl text-[#EAC463] mb-6 font-montserrat",
                                        children: "Art Gallery"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                                        children: "Discover our beautiful artistic works. From delicate nail art to unique designs, each image showcases our dedication and professional craftsmanship."
                                    })]
                                })
                            }), (0, t.jsx)(r, {
                                delay: 200,
                                children: (0, t.jsx)("div", {
                                    className: "flex flex-nowrap justify-center gap-4 sm:gap-6 md:gap-10 xl:gap-24 mb-12",
                                    children: v.map(s => (0, t.jsx)(N, {
                                        category: s,
                                        isSelected: e === s.id,
                                        onClick: () => a(s.id)
                                    }, s.id))
                                })
                            }), (0, t.jsx)(r, {
                                delay: 400,
                                children: (0, t.jsx)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6",
                                    children: m.map((e, a) => (0, t.jsx)("div", {
                                        className: "w-full",
                                        style: {
                                            animationDelay: "".concat(.1 * a, "s")
                                        },
                                        children: (0, t.jsx)(A, {
                                            image: e,
                                            onClick: () => x(e)
                                        })
                                    }, e.id))
                                })
                            }), 0 === m.length && (0, t.jsxs)("div", {
                                className: "text-center py-20",
                                children: [(0, t.jsx)("div", {
                                    className: "mb-4 flex items-center justify-center",
                                    children: (0, t.jsx)("svg", {
                                        className: "w-16 h-16 text-gray-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                        })
                                    })
                                }), (0, t.jsx)("h3", {
                                    className: "text-2xl font-medium text-gray-600 mb-2",
                                    children: "No images found"
                                }), (0, t.jsx)("p", {
                                    className: "text-gray-500",
                                    children: "Try selecting a different category to see more images."
                                })]
                            }), (0, t.jsx)(M, {
                                image: s,
                                isOpen: d,
                                onClose: () => {
                                    o(!1), i(null)
                                },
                                onPrev: () => {
                                    if (n > 0) {
                                        let e = n - 1;
                                        c(e), i(m[e])
                                    }
                                },
                                onNext: () => {
                                    if (n < m.length - 1) {
                                        let e = n + 1;
                                        c(e), i(m[e])
                                    }
                                },
                                hasPrev: n > 0,
                                hasNext: n < m.length - 1
                            })]
                        })
                    })
                },
                D = e => {
                    let {
                        children: a,
                        delay: s = 0,
                        staggerDelay: i = 100,
                        className: r = ""
                    } = e, [n, c] = (0, l.useState)(!1), d = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        let e = new IntersectionObserver(e => {
                                let [a] = e;
                                a.isIntersecting && setTimeout(() => {
                                    c(!0)
                                }, s)
                            }, {
                                threshold: .1,
                                rootMargin: "0px 0px -50px 0px"
                            }),
                            a = d.current;
                        return a && e.observe(a), () => {
                            a && e.unobserve(a)
                        }
                    }, [s]), (0, l.useEffect)(() => {
                        n && d.current && Array.from(d.current.children).forEach((e, a) => {
                            e.style.opacity = "0", e.style.transform = "translateY(15px)", e.style.transition = "none", e.offsetHeight, e.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out", setTimeout(() => {
                                e.style.opacity = "1", e.style.transform = "translateY(0)"
                            }, a * i)
                        })
                    }, [n, i]), (0, t.jsx)("div", {
                        ref: d,
                        className: r,
                        children: a
                    })
                },
                S = () => (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("section", {
                        id: "hero",
                        children: (0, t.jsx)(n, {})
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "about-us",
                            children: (0, t.jsx)(u, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "our-services",
                            children: (0, t.jsx)(j, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "gallery",
                            children: (0, t.jsx)(C, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "services-1",
                            children: (0, t.jsx)(o, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "services-2",
                            children: (0, t.jsx)(x, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "services-3",
                            children: (0, t.jsx)(h, {})
                        })
                    }), (0, t.jsx)(D, {
                        delay: 0,
                        staggerDelay: 50,
                        children: (0, t.jsx)("section", {
                            id: "services-4",
                            children: (0, t.jsx)(p, {})
                        })
                    })]
                }),
                k = () => (0, t.jsx)(S, {});

            function P() {
                return (0, t.jsx)(k, {})
            }
        },
        67923: (e, a, s) => {
            "use strict";
            s.d(a, {
                Ay: () => t
            });
            let t = s(82651).A.create({
                baseURL: "http://localhost:5512",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
        },
        73067: (e, a, s) => {
            "use strict";
            s.d(a, {
                $W: () => o,
                Vg: () => m,
                WJ: () => n,
                qI: () => c,
                sZ: () => d,
                sw: () => r,
                wn: () => x
            });
            var t = s(30227),
                l = s(67923);
            let i = s(67433).L9 + t.$.ROUTES.CATEGORIES_PRODUCT.BASE,
                r = async () => (await l.Ay.get("".concat(i))).data,
                n = async e => (await l.Ay.get("".concat(i, "/id/").concat(e))).data,
                c = async e => (await l.Ay.get("".concat(i, "/").concat(e))).data,
                d = async e => (await l.Ay.post("".concat(i), e, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(localStorage.getItem("token"))
                    }
                })).data,
                o = async (e, a) => (await l.Ay.put("".concat(i, "/").concat(e), a, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(localStorage.getItem("token"))
                    }
                })).data,
                m = async e => {
                    await l.Ay.delete("".concat(i, "/").concat(e), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("token"))
                        }
                    })
                },
                x = {
                    getAll: r,
                    getById: n,
                    getBySlug: c,
                    create: d,
                    update: o,
                    delete: m
                }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [2651, 5565, 6315, 227, 8441, 1517, 7358], () => a(79271)), _N_E = e.O()
    }
]);