(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [155], {
        76046: (t, e, s) => {
            "use strict";
            var i = s(66658);
            s.o(i, "useParams") && s.d(e, {
                useParams: function() {
                    return i.useParams
                }
            }), s.o(i, "usePathname") && s.d(e, {
                usePathname: function() {
                    return i.usePathname
                }
            }), s.o(i, "useRouter") && s.d(e, {
                useRouter: function() {
                    return i.useRouter
                }
            }), s.o(i, "useSearchParams") && s.d(e, {
                useSearchParams: function() {
                    return i.useSearchParams
                }
            })
        },
        97494: t => {
            t.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_fa2f99",
                variable: "__variable_fa2f99"
            }
        },
        5020: (t, e, s) => {
            "use strict";
            s.d(e, {
                PL: () => r,
                RQ: () => o,
                rB: () => u
            });
            var i = s(84403);

            function r(t) {
                return {
                    onFetch: (e, s) => {
                        let r = e.options,
                            u = e.fetchOptions ? .meta ? .fetchMore ? .direction,
                            o = e.state.data ? .pages || [],
                            h = e.state.data ? .pageParams || [],
                            l = {
                                pages: [],
                                pageParams: []
                            },
                            c = 0,
                            d = async () => {
                                let s = !1,
                                    d = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => (e.signal.aborted ? s = !0 : e.signal.addEventListener("abort", () => {
                                                s = !0
                                            }), e.signal)
                                        })
                                    },
                                    f = (0, i.ZM)(e.options, e.fetchOptions),
                                    p = async (t, r, a) => {
                                        if (s) return Promise.reject();
                                        if (null == r && t.pages.length) return Promise.resolve(t);
                                        let n = {
                                            client: e.client,
                                            queryKey: e.queryKey,
                                            pageParam: r,
                                            direction: a ? "backward" : "forward",
                                            meta: e.options.meta
                                        };
                                        d(n);
                                        let u = await f(n),
                                            {
                                                maxPages: o
                                            } = e.options,
                                            h = a ? i.ZZ : i.y9;
                                        return {
                                            pages: h(t.pages, u, o),
                                            pageParams: h(t.pageParams, r, o)
                                        }
                                    };
                                if (u && o.length) {
                                    let t = "backward" === u,
                                        e = {
                                            pages: o,
                                            pageParams: h
                                        },
                                        s = (t ? n : a)(r, e);
                                    l = await p(e, s, t)
                                } else {
                                    let e = t ? ? o.length;
                                    do {
                                        let t = 0 === c ? h[0] ? ? r.initialPageParam : a(r, l);
                                        if (c > 0 && null == t) break;
                                        l = await p(l, t), c++
                                    } while (c < e)
                                }
                                return l
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister ? .(d, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, s) : e.fetchFn = d
                    }
                }
            }

            function a(t, {
                pages: e,
                pageParams: s
            }) {
                let i = e.length - 1;
                return e.length > 0 ? t.getNextPageParam(e[i], e, s[i], s) : void 0
            }

            function n(t, {
                pages: e,
                pageParams: s
            }) {
                return e.length > 0 ? t.getPreviousPageParam ? .(e[0], e, s[0], s) : void 0
            }

            function u(t, e) {
                return !!e && null != a(t, e)
            }

            function o(t, e) {
                return !!e && !!t.getPreviousPageParam && null != n(t, e)
            }
        },
        1049: (t, e, s) => {
            "use strict";
            s.d(e, {
                $: () => u,
                s: () => n
            });
            var i = s(15586),
                r = s(2955),
                a = s(14267),
                n = class extends r.k {#
                    t;#
                    e;#
                    s;
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#e = t.mutationCache, this.#t = [], this.state = t.state || u(), this.setOptions(t.options), this.scheduleGc()
                    }
                    setOptions(t) {
                        this.options = t, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#t.includes(t) || (this.#t.push(t), this.clearGcTimeout(), this.#e.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#t = this.#t.filter(e => e !== t), this.scheduleGc(), this.#e.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#e.remove(this))
                    }
                    continue () {
                        return this.#s ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        this.#s = (0, a.II)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                            onFail: (t, e) => {
                                this.#i({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#i({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#i({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#e.canRun(this)
                        });
                        let e = "pending" === this.state.status,
                            s = !this.#s.canStart();
                        try {
                            if (!e) {
                                this.#i({
                                    type: "pending",
                                    variables: t,
                                    isPaused: s
                                }), await this.#e.config.onMutate ? .(t, this);
                                let e = await this.options.onMutate ? .(t);
                                e !== this.state.context && this.#i({
                                    type: "pending",
                                    context: e,
                                    variables: t,
                                    isPaused: s
                                })
                            }
                            let i = await this.#s.start();
                            return await this.#e.config.onSuccess ? .(i, t, this.state.context, this), await this.options.onSuccess ? .(i, t, this.state.context), await this.#e.config.onSettled ? .(i, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(i, null, t, this.state.context), this.#i({
                                type: "success",
                                data: i
                            }), i
                        } catch (e) {
                            try {
                                throw await this.#e.config.onError ? .(e, t, this.state.context, this), await this.options.onError ? .(e, t, this.state.context), await this.#e.config.onSettled ? .(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, e, t, this.state.context), e
                            } finally {
                                this.#i({
                                    type: "error",
                                    error: e
                                })
                            }
                        } finally {
                            this.#e.runNext(this)
                        }
                    }#
                    i(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...e,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), i.jG.batch(() => {
                            this.#t.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#e.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function u() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        13223: (t, e, s) => {
            "use strict";
            s.d(e, {
                E: () => p
            });
            var i = s(84403),
                r = s(47702),
                a = s(15586),
                n = s(99323),
                u = class extends n.Q {
                    constructor(t = {}) {
                        super(), this.config = t, this.#r = new Map
                    }#
                    r;
                    build(t, e, s) {
                        let a = e.queryKey,
                            n = e.queryHash ? ? (0, i.F$)(a, e),
                            u = this.get(n);
                        return u || (u = new r.X({
                            client: t,
                            queryKey: a,
                            queryHash: n,
                            options: t.defaultQueryOptions(e),
                            state: s,
                            defaultOptions: t.getQueryDefaults(a)
                        }), this.add(u)), u
                    }
                    add(t) {
                        this.#r.has(t.queryHash) || (this.#r.set(t.queryHash, t), this.notify({
                            type: "added",
                            query: t
                        }))
                    }
                    remove(t) {
                        let e = this.#r.get(t.queryHash);
                        e && (t.destroy(), e === t && this.#r.delete(t.queryHash), this.notify({
                            type: "removed",
                            query: t
                        }))
                    }
                    clear() {
                        a.jG.batch(() => {
                            this.getAll().forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    get(t) {
                        return this.#r.get(t)
                    }
                    getAll() {
                        return [...this.#r.values()]
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, i.MK)(e, t))
                    }
                    findAll(t = {}) {
                        let e = this.getAll();
                        return Object.keys(t).length > 0 ? e.filter(e => (0, i.MK)(t, e)) : e
                    }
                    notify(t) {
                        a.jG.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    onFocus() {
                        a.jG.batch(() => {
                            this.getAll().forEach(t => {
                                t.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        a.jG.batch(() => {
                            this.getAll().forEach(t => {
                                t.onOnline()
                            })
                        })
                    }
                },
                o = s(1049),
                h = class extends n.Q {
                    constructor(t = {}) {
                        super(), this.config = t, this.#a = new Set, this.#n = new Map, this.#u = 0
                    }#
                    a;#
                    n;#
                    u;
                    build(t, e, s) {
                        let i = new o.s({
                            mutationCache: this,
                            mutationId: ++this.#u,
                            options: t.defaultMutationOptions(e),
                            state: s
                        });
                        return this.add(i), i
                    }
                    add(t) {
                        this.#a.add(t);
                        let e = l(t);
                        if ("string" == typeof e) {
                            let s = this.#n.get(e);
                            s ? s.push(t) : this.#n.set(e, [t])
                        }
                        this.notify({
                            type: "added",
                            mutation: t
                        })
                    }
                    remove(t) {
                        if (this.#a.delete(t)) {
                            let e = l(t);
                            if ("string" == typeof e) {
                                let s = this.#n.get(e);
                                if (s) {
                                    if (s.length > 1) {
                                        let e = s.indexOf(t); - 1 !== e && s.splice(e, 1)
                                    } else s[0] === t && this.#n.delete(e)
                                }
                            }
                        }
                        this.notify({
                            type: "removed",
                            mutation: t
                        })
                    }
                    canRun(t) {
                        let e = l(t);
                        if ("string" != typeof e) return !0; {
                            let s = this.#n.get(e),
                                i = s ? .find(t => "pending" === t.state.status);
                            return !i || i === t
                        }
                    }
                    runNext(t) {
                        let e = l(t);
                        if ("string" != typeof e) return Promise.resolve(); {
                            let s = this.#n.get(e) ? .find(e => e !== t && e.state.isPaused);
                            return s ? .continue() ? ? Promise.resolve()
                        }
                    }
                    clear() {
                        a.jG.batch(() => {
                            this.#a.forEach(t => {
                                this.notify({
                                    type: "removed",
                                    mutation: t
                                })
                            }), this.#a.clear(), this.#n.clear()
                        })
                    }
                    getAll() {
                        return Array.from(this.#a)
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, i.nJ)(e, t))
                    }
                    findAll(t = {}) {
                        return this.getAll().filter(e => (0, i.nJ)(t, e))
                    }
                    notify(t) {
                        a.jG.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let t = this.getAll().filter(t => t.state.isPaused);
                        return a.jG.batch(() => Promise.all(t.map(t => t.continue().catch(i.lQ))))
                    }
                };

            function l(t) {
                return t.options.scope ? .id
            }
            var c = s(34017),
                d = s(38248),
                f = s(5020),
                p = class {#
                    o;#
                    e;#
                    h;#
                    l;#
                    c;#
                    d;#
                    f;#
                    p;
                    constructor(t = {}) {
                        this.#o = t.queryCache || new u, this.#e = t.mutationCache || new h, this.#h = t.defaultOptions || {}, this.#l = new Map, this.#c = new Map, this.#d = 0
                    }
                    mount() {
                        this.#d++, 1 === this.#d && (this.#f = c.m.subscribe(async t => {
                            t && (await this.resumePausedMutations(), this.#o.onFocus())
                        }), this.#p = d.t.subscribe(async t => {
                            t && (await this.resumePausedMutations(), this.#o.onOnline())
                        }))
                    }
                    unmount() {
                        this.#d--, 0 === this.#d && (this.#f ? .(), this.#f = void 0, this.#p ? .(), this.#p = void 0)
                    }
                    isFetching(t) {
                        return this.#o.findAll({ ...t,
                            fetchStatus: "fetching"
                        }).length
                    }
                    isMutating(t) {
                        return this.#e.findAll({ ...t,
                            status: "pending"
                        }).length
                    }
                    getQueryData(t) {
                        let e = this.defaultQueryOptions({
                            queryKey: t
                        });
                        return this.#o.get(e.queryHash) ? .state.data
                    }
                    ensureQueryData(t) {
                        let e = this.defaultQueryOptions(t),
                            s = this.#o.build(this, e),
                            r = s.state.data;
                        return void 0 === r ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime((0, i.d2)(e.staleTime, s)) && this.prefetchQuery(e), Promise.resolve(r))
                    }
                    getQueriesData(t) {
                        return this.#o.findAll(t).map(({
                            queryKey: t,
                            state: e
                        }) => [t, e.data])
                    }
                    setQueryData(t, e, s) {
                        let r = this.defaultQueryOptions({
                                queryKey: t
                            }),
                            a = this.#o.get(r.queryHash),
                            n = a ? .state.data,
                            u = (0, i.Zw)(e, n);
                        if (void 0 !== u) return this.#o.build(this, r).setData(u, { ...s,
                            manual: !0
                        })
                    }
                    setQueriesData(t, e, s) {
                        return a.jG.batch(() => this.#o.findAll(t).map(({
                            queryKey: t
                        }) => [t, this.setQueryData(t, e, s)]))
                    }
                    getQueryState(t) {
                        let e = this.defaultQueryOptions({
                            queryKey: t
                        });
                        return this.#o.get(e.queryHash) ? .state
                    }
                    removeQueries(t) {
                        let e = this.#o;
                        a.jG.batch(() => {
                            e.findAll(t).forEach(t => {
                                e.remove(t)
                            })
                        })
                    }
                    resetQueries(t, e) {
                        let s = this.#o;
                        return a.jG.batch(() => (s.findAll(t).forEach(t => {
                            t.reset()
                        }), this.refetchQueries({
                            type: "active",
                            ...t
                        }, e)))
                    }
                    cancelQueries(t, e = {}) {
                        let s = {
                            revert: !0,
                            ...e
                        };
                        return Promise.all(a.jG.batch(() => this.#o.findAll(t).map(t => t.cancel(s)))).then(i.lQ).catch(i.lQ)
                    }
                    invalidateQueries(t, e = {}) {
                        return a.jG.batch(() => (this.#o.findAll(t).forEach(t => {
                            t.invalidate()
                        }), t ? .refetchType === "none") ? Promise.resolve() : this.refetchQueries({ ...t,
                            type: t ? .refetchType ? ? t ? .type ? ? "active"
                        }, e))
                    }
                    refetchQueries(t, e = {}) {
                        let s = { ...e,
                            cancelRefetch: e.cancelRefetch ? ? !0
                        };
                        return Promise.all(a.jG.batch(() => this.#o.findAll(t).filter(t => !t.isDisabled()).map(t => {
                            let e = t.fetch(void 0, s);
                            return s.throwOnError || (e = e.catch(i.lQ)), "paused" === t.state.fetchStatus ? Promise.resolve() : e
                        }))).then(i.lQ)
                    }
                    fetchQuery(t) {
                        let e = this.defaultQueryOptions(t);
                        void 0 === e.retry && (e.retry = !1);
                        let s = this.#o.build(this, e);
                        return s.isStaleByTime((0, i.d2)(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data)
                    }
                    prefetchQuery(t) {
                        return this.fetchQuery(t).then(i.lQ).catch(i.lQ)
                    }
                    fetchInfiniteQuery(t) {
                        return t.behavior = (0, f.PL)(t.pages), this.fetchQuery(t)
                    }
                    prefetchInfiniteQuery(t) {
                        return this.fetchInfiniteQuery(t).then(i.lQ).catch(i.lQ)
                    }
                    ensureInfiniteQueryData(t) {
                        return t.behavior = (0, f.PL)(t.pages), this.ensureQueryData(t)
                    }
                    resumePausedMutations() {
                        return d.t.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
                    }
                    getQueryCache() {
                        return this.#o
                    }
                    getMutationCache() {
                        return this.#e
                    }
                    getDefaultOptions() {
                        return this.#h
                    }
                    setDefaultOptions(t) {
                        this.#h = t
                    }
                    setQueryDefaults(t, e) {
                        this.#l.set((0, i.EN)(t), {
                            queryKey: t,
                            defaultOptions: e
                        })
                    }
                    getQueryDefaults(t) {
                        let e = [...this.#l.values()],
                            s = {};
                        return e.forEach(e => {
                            (0, i.Cp)(t, e.queryKey) && Object.assign(s, e.defaultOptions)
                        }), s
                    }
                    setMutationDefaults(t, e) {
                        this.#c.set((0, i.EN)(t), {
                            mutationKey: t,
                            defaultOptions: e
                        })
                    }
                    getMutationDefaults(t) {
                        let e = [...this.#c.values()],
                            s = {};
                        return e.forEach(e => {
                            (0, i.Cp)(t, e.mutationKey) && Object.assign(s, e.defaultOptions)
                        }), s
                    }
                    defaultQueryOptions(t) {
                        if (t._defaulted) return t;
                        let e = { ...this.#h.queries,
                            ...this.getQueryDefaults(t.queryKey),
                            ...t,
                            _defaulted: !0
                        };
                        return e.queryHash || (e.queryHash = (0, i.F$)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.throwOnError && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === i.hT && (e.enabled = !1), e
                    }
                    defaultMutationOptions(t) {
                        return t ? ._defaulted ? t : { ...this.#h.mutations,
                            ...t ? .mutationKey && this.getMutationDefaults(t.mutationKey),
                            ...t,
                            _defaulted : !0
                        }
                    }
                    clear() {
                        this.#o.clear(), this.#e.clear()
                    }
                }
        },
        25848: (t, e, s) => {
            "use strict";
            s.d(e, {
                n: () => c
            });
            var i = s(12115),
                r = s(1049),
                a = s(15586),
                n = s(99323),
                u = s(84403),
                o = class extends n.Q {#
                    y;#
                    m = void 0;#
                    g;#
                    b;
                    constructor(t, e) {
                        super(), this.#y = t, this.setOptions(e), this.bindMethods(), this.#v()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#y.defaultMutationOptions(t), (0, u.f8)(this.options, e) || this.#y.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#g,
                            observer: this
                        }), e ? .mutationKey && this.options.mutationKey && (0, u.EN)(e.mutationKey) !== (0, u.EN)(this.options.mutationKey) ? this.reset() : this.#g ? .state.status === "pending" && this.#g.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#g ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#v(), this.#C(t)
                    }
                    getCurrentResult() {
                        return this.#m
                    }
                    reset() {
                        this.#g ? .removeObserver(this), this.#g = void 0, this.#v(), this.#C()
                    }
                    mutate(t, e) {
                        return this.#b = e, this.#g ? .removeObserver(this), this.#g = this.#y.getMutationCache().build(this.#y, this.options), this.#g.addObserver(this), this.#g.execute(t)
                    }#
                    v() {
                        let t = this.#g ? .state ? ? (0, r.$)();
                        this.#m = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    C(t) {
                        a.jG.batch(() => {
                            if (this.#b && this.hasListeners()) {
                                let e = this.#m.variables,
                                    s = this.#m.context;
                                t ? .type === "success" ? (this.#b.onSuccess ? .(t.data, e, s), this.#b.onSettled ? .(t.data, null, e, s)) : t ? .type === "error" && (this.#b.onError ? .(t.error, e, s), this.#b.onSettled ? .(void 0, t.error, e, s))
                            }
                            this.listeners.forEach(t => {
                                t(this.#m)
                            })
                        })
                    }
                },
                h = s(35906),
                l = s(96373);

            function c(t, e) {
                let s = (0, h.jE)(e),
                    [r] = i.useState(() => new o(s, t));
                i.useEffect(() => {
                    r.setOptions(t)
                }, [r, t]);
                let n = i.useSyncExternalStore(i.useCallback(t => r.subscribe(a.jG.batchCalls(t)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
                    u = i.useCallback((t, e) => {
                        r.mutate(t, e).catch(l.l)
                    }, [r]);
                if (n.error && (0, l.G)(r.options.throwOnError, [n.error])) throw n.error;
                return { ...n,
                    mutate: u,
                    mutateAsync: n.mutate
                }
            }
        },
        93233: (t, e, s) => {
            "use strict";
            s.d(e, {
                I: () => a
            });
            var i = s(24724),
                r = s(13237);

            function a(t, e) {
                return (0, r.t)(t, i.$, e)
            }
        },
        92922: (t, e, s) => {
            "use strict";
            s.d(e, {
                s: () => r
            });
            class i extends Error {}

            function r(t, e) {
                let s;
                if ("string" != typeof t) throw new i("Invalid token specified: must be a string");
                e || (e = {});
                let r = !0 === e.header ? 0 : 1,
                    a = t.split(".")[r];
                if ("string" != typeof a) throw new i(`Invalid token specified: missing part #${r+1}`);
                try {
                    s = function(t) {
                        let e = t.replace(/-/g, "+").replace(/_/g, "/");
                        switch (e.length % 4) {
                            case 0:
                                break;
                            case 2:
                                e += "==";
                                break;
                            case 3:
                                e += "=";
                                break;
                            default:
                                throw Error("base64 string is not of the correct length")
                        }
                        try {
                            var s;
                            return s = e, decodeURIComponent(atob(s).replace(/(.)/g, (t, e) => {
                                let s = e.charCodeAt(0).toString(16).toUpperCase();
                                return s.length < 2 && (s = "0" + s), "%" + s
                            }))
                        } catch (t) {
                            return atob(e)
                        }
                    }(a)
                } catch (t) {
                    throw new i(`Invalid token specified: invalid base64 for part #${r+1} (${t.message})`)
                }
                try {
                    return JSON.parse(s)
                } catch (t) {
                    throw new i(`Invalid token specified: invalid json for part #${r+1} (${t.message})`)
                }
            }
            i.prototype.name = "InvalidTokenError"
        }
    }
]);