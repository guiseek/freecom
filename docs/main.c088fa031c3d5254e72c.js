;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '+SKG': function (t, e) {
      t.exports = function (t) {
        return (
          (n && Buffer.isBuffer(t)) ||
          (r &&
            (t instanceof ArrayBuffer ||
              (function (t) {
                return 'function' == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t.buffer instanceof ArrayBuffer
              })(t)))
        )
      }
      var n =
          'function' == typeof Buffer && 'function' == typeof Buffer.isBuffer,
        r = 'function' == typeof ArrayBuffer
    },
    0: function (t, e, n) {
      t.exports = n('DUmd')
    },
    '0z79': function (t, e, n) {
      var r = n('AdPF'),
        i = n('CUme'),
        s = n('cpc2'),
        o = n('Yvos'),
        a = n('x7D4')('engine.io-client:polling-xhr'),
        l = n('2UHX')
      function c() {}
      function u(t) {
        if (
          (i.call(this, t),
          (this.requestTimeout = t.requestTimeout),
          (this.extraHeaders = t.extraHeaders),
          'undefined' != typeof location)
        ) {
          var e = 'https:' === location.protocol,
            n = location.port
          n || (n = e ? 443 : 80),
            (this.xd =
              ('undefined' != typeof location &&
                t.hostname !== location.hostname) ||
              n !== t.port),
            (this.xs = t.secure !== e)
        }
      }
      function h(t) {
        ;(this.method = t.method || 'GET'),
          (this.uri = t.uri),
          (this.xd = !!t.xd),
          (this.xs = !!t.xs),
          (this.async = !1 !== t.async),
          (this.data = void 0 !== t.data ? t.data : null),
          (this.agent = t.agent),
          (this.isBinary = t.isBinary),
          (this.supportsBinary = t.supportsBinary),
          (this.enablesXDR = t.enablesXDR),
          (this.withCredentials = t.withCredentials),
          (this.requestTimeout = t.requestTimeout),
          (this.pfx = t.pfx),
          (this.key = t.key),
          (this.passphrase = t.passphrase),
          (this.cert = t.cert),
          (this.ca = t.ca),
          (this.ciphers = t.ciphers),
          (this.rejectUnauthorized = t.rejectUnauthorized),
          (this.extraHeaders = t.extraHeaders),
          this.create()
      }
      function d() {
        for (var t in h.requests)
          h.requests.hasOwnProperty(t) && h.requests[t].abort()
      }
      ;(t.exports = u),
        (t.exports.Request = h),
        o(u, i),
        (u.prototype.supportsBinary = !0),
        (u.prototype.request = function (t) {
          return (
            ((t = t || {}).uri = this.uri()),
            (t.xd = this.xd),
            (t.xs = this.xs),
            (t.agent = this.agent || !1),
            (t.supportsBinary = this.supportsBinary),
            (t.enablesXDR = this.enablesXDR),
            (t.withCredentials = this.withCredentials),
            (t.pfx = this.pfx),
            (t.key = this.key),
            (t.passphrase = this.passphrase),
            (t.cert = this.cert),
            (t.ca = this.ca),
            (t.ciphers = this.ciphers),
            (t.rejectUnauthorized = this.rejectUnauthorized),
            (t.requestTimeout = this.requestTimeout),
            (t.extraHeaders = this.extraHeaders),
            new h(t)
          )
        }),
        (u.prototype.doWrite = function (t, e) {
          var n = this.request({
              method: 'POST',
              data: t,
              isBinary: 'string' != typeof t && void 0 !== t,
            }),
            r = this
          n.on('success', e),
            n.on('error', function (t) {
              r.onError('xhr post error', t)
            }),
            (this.sendXhr = n)
        }),
        (u.prototype.doPoll = function () {
          a('xhr poll')
          var t = this.request(),
            e = this
          t.on('data', function (t) {
            e.onData(t)
          }),
            t.on('error', function (t) {
              e.onError('xhr poll error', t)
            }),
            (this.pollXhr = t)
        }),
        s(h.prototype),
        (h.prototype.create = function () {
          var t = {
            agent: this.agent,
            xdomain: this.xd,
            xscheme: this.xs,
            enablesXDR: this.enablesXDR,
          }
          ;(t.pfx = this.pfx),
            (t.key = this.key),
            (t.passphrase = this.passphrase),
            (t.cert = this.cert),
            (t.ca = this.ca),
            (t.ciphers = this.ciphers),
            (t.rejectUnauthorized = this.rejectUnauthorized)
          var e = (this.xhr = new r(t)),
            n = this
          try {
            a('xhr open %s: %s', this.method, this.uri),
              e.open(this.method, this.uri, this.async)
            try {
              if (this.extraHeaders)
                for (var i in (e.setDisableHeaderCheck &&
                  e.setDisableHeaderCheck(!0),
                this.extraHeaders))
                  this.extraHeaders.hasOwnProperty(i) &&
                    e.setRequestHeader(i, this.extraHeaders[i])
            } catch (s) {}
            if ('POST' === this.method)
              try {
                e.setRequestHeader(
                  'Content-type',
                  this.isBinary
                    ? 'application/octet-stream'
                    : 'text/plain;charset=UTF-8'
                )
              } catch (s) {}
            try {
              e.setRequestHeader('Accept', '*/*')
            } catch (s) {}
            'withCredentials' in e &&
              (e.withCredentials = this.withCredentials),
              this.requestTimeout && (e.timeout = this.requestTimeout),
              this.hasXDR()
                ? ((e.onload = function () {
                    n.onLoad()
                  }),
                  (e.onerror = function () {
                    n.onError(e.responseText)
                  }))
                : (e.onreadystatechange = function () {
                    if (2 === e.readyState)
                      try {
                        var t = e.getResponseHeader('Content-Type')
                        ;((n.supportsBinary &&
                          'application/octet-stream' === t) ||
                          'application/octet-stream; charset=UTF-8' === t) &&
                          (e.responseType = 'arraybuffer')
                      } catch (s) {}
                    4 === e.readyState &&
                      (200 === e.status || 1223 === e.status
                        ? n.onLoad()
                        : setTimeout(function () {
                            n.onError(
                              'number' == typeof e.status ? e.status : 0
                            )
                          }, 0))
                  }),
              a('xhr data %s', this.data),
              e.send(this.data)
          } catch (s) {
            return void setTimeout(function () {
              n.onError(s)
            }, 0)
          }
          'undefined' != typeof document &&
            ((this.index = h.requestsCount++), (h.requests[this.index] = this))
        }),
        (h.prototype.onSuccess = function () {
          this.emit('success'), this.cleanup()
        }),
        (h.prototype.onData = function (t) {
          this.emit('data', t), this.onSuccess()
        }),
        (h.prototype.onError = function (t) {
          this.emit('error', t), this.cleanup(!0)
        }),
        (h.prototype.cleanup = function (t) {
          if (null != this.xhr) {
            if (
              (this.hasXDR()
                ? (this.xhr.onload = this.xhr.onerror = c)
                : (this.xhr.onreadystatechange = c),
              t)
            )
              try {
                this.xhr.abort()
              } catch (e) {}
            'undefined' != typeof document && delete h.requests[this.index],
              (this.xhr = null)
          }
        }),
        (h.prototype.onLoad = function () {
          var t
          try {
            var e
            try {
              e = this.xhr.getResponseHeader('Content-Type')
            } catch (n) {}
            t =
              (('application/octet-stream' === e ||
                'application/octet-stream; charset=UTF-8' === e) &&
                this.xhr.response) ||
              this.xhr.responseText
          } catch (n) {
            this.onError(n)
          }
          null != t && this.onData(t)
        }),
        (h.prototype.hasXDR = function () {
          return (
            'undefined' != typeof XDomainRequest && !this.xs && this.enablesXDR
          )
        }),
        (h.prototype.abort = function () {
          this.cleanup()
        }),
        (h.requestsCount = 0),
        (h.requests = {}),
        'undefined' != typeof document &&
          ('function' == typeof attachEvent
            ? attachEvent('onunload', d)
            : 'function' == typeof addEventListener &&
              addEventListener(
                'onpagehide' in l ? 'pagehide' : 'unload',
                d,
                !1
              ))
    },
    1: function (t, e) {},
    '14A5': function (t, e) {
      var n =
          void 0 !== n
            ? n
            : 'undefined' != typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : 'undefined' != typeof MSBlobBuilder
            ? MSBlobBuilder
            : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder,
        r = (function () {
          try {
            return 2 === new Blob(['hi']).size
          } catch (t) {
            return !1
          }
        })(),
        i =
          r &&
          (function () {
            try {
              return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (t) {
              return !1
            }
          })(),
        s = n && n.prototype.append && n.prototype.getBlob
      function o(t) {
        return t.map(function (t) {
          if (t.buffer instanceof ArrayBuffer) {
            var e = t.buffer
            if (t.byteLength !== e.byteLength) {
              var n = new Uint8Array(t.byteLength)
              n.set(new Uint8Array(e, t.byteOffset, t.byteLength)),
                (e = n.buffer)
            }
            return e
          }
          return t
        })
      }
      function a(t, e) {
        e = e || {}
        var r = new n()
        return (
          o(t).forEach(function (t) {
            r.append(t)
          }),
          e.type ? r.getBlob(e.type) : r.getBlob()
        )
      }
      function l(t, e) {
        return new Blob(o(t), e || {})
      }
      'undefined' != typeof Blob &&
        ((a.prototype = Blob.prototype), (l.prototype = Blob.prototype)),
        (t.exports = r ? (i ? Blob : l) : s ? a : void 0)
    },
    '2Dig': function (t, e) {
      t.exports = function (t, e, n) {
        return (
          t.on(e, n),
          {
            destroy: function () {
              t.removeListener(e, n)
            },
          }
        )
      }
    },
    '2UHX': function (t, e) {
      t.exports =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : Function('return this')()
    },
    '2pII': function (t, e, n) {
      var r = n('akSB'),
        i = n('cpc2'),
        s = n('x7D4')('engine.io-client:socket'),
        o = n('7jRU'),
        a = n('Wm4p'),
        l = n('Uxeu'),
        c = n('TypT')
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e)
        ;(e = e || {}),
          t && 'object' == typeof t && ((e = t), (t = null)),
          t
            ? ((t = l(t)),
              (e.hostname = t.host),
              (e.secure = 'https' === t.protocol || 'wss' === t.protocol),
              (e.port = t.port),
              t.query && (e.query = t.query))
            : e.host && (e.hostname = l(e.host).host),
          (this.secure =
            null != e.secure
              ? e.secure
              : 'undefined' != typeof location &&
                'https:' === location.protocol),
          e.hostname && !e.port && (e.port = this.secure ? '443' : '80'),
          (this.agent = e.agent || !1),
          (this.hostname =
            e.hostname ||
            ('undefined' != typeof location ? location.hostname : 'localhost')),
          (this.port =
            e.port ||
            ('undefined' != typeof location && location.port
              ? location.port
              : this.secure
              ? 443
              : 80)),
          (this.query = e.query || {}),
          'string' == typeof this.query && (this.query = c.decode(this.query)),
          (this.upgrade = !1 !== e.upgrade),
          (this.path = (e.path || '/engine.io').replace(/\/$/, '') + '/'),
          (this.forceJSONP = !!e.forceJSONP),
          (this.jsonp = !1 !== e.jsonp),
          (this.forceBase64 = !!e.forceBase64),
          (this.enablesXDR = !!e.enablesXDR),
          (this.withCredentials = !1 !== e.withCredentials),
          (this.timestampParam = e.timestampParam || 't'),
          (this.timestampRequests = e.timestampRequests),
          (this.transports = e.transports || ['polling', 'websocket']),
          (this.transportOptions = e.transportOptions || {}),
          (this.readyState = ''),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0),
          (this.policyPort = e.policyPort || 843),
          (this.rememberUpgrade = e.rememberUpgrade || !1),
          (this.binaryType = null),
          (this.onlyBinaryUpgrades = e.onlyBinaryUpgrades),
          (this.perMessageDeflate =
            !1 !== e.perMessageDeflate && (e.perMessageDeflate || {})),
          !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
          this.perMessageDeflate &&
            null == this.perMessageDeflate.threshold &&
            (this.perMessageDeflate.threshold = 1024),
          (this.pfx = e.pfx || null),
          (this.key = e.key || null),
          (this.passphrase = e.passphrase || null),
          (this.cert = e.cert || null),
          (this.ca = e.ca || null),
          (this.ciphers = e.ciphers || null),
          (this.rejectUnauthorized =
            void 0 === e.rejectUnauthorized || e.rejectUnauthorized),
          (this.forceNode = !!e.forceNode),
          (this.isReactNative =
            'undefined' != typeof navigator &&
            'string' == typeof navigator.product &&
            'reactnative' === navigator.product.toLowerCase()),
          ('undefined' == typeof self || this.isReactNative) &&
            (e.extraHeaders &&
              Object.keys(e.extraHeaders).length > 0 &&
              (this.extraHeaders = e.extraHeaders),
            e.localAddress && (this.localAddress = e.localAddress)),
          (this.id = null),
          (this.upgrades = null),
          (this.pingInterval = null),
          (this.pingTimeout = null),
          (this.pingIntervalTimer = null),
          (this.pingTimeoutTimer = null),
          this.open()
      }
      ;(t.exports = u),
        (u.priorWebsocketSuccess = !1),
        i(u.prototype),
        (u.protocol = a.protocol),
        (u.Socket = u),
        (u.Transport = n('Gbct')),
        (u.transports = n('akSB')),
        (u.parser = n('Wm4p')),
        (u.prototype.createTransport = function (t) {
          s('creating transport "%s"', t)
          var e = (function (t) {
            var e = {}
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            return e
          })(this.query)
          ;(e.EIO = a.protocol), (e.transport = t)
          var n = this.transportOptions[t] || {}
          return (
            this.id && (e.sid = this.id),
            new r[t]({
              query: e,
              socket: this,
              agent: n.agent || this.agent,
              hostname: n.hostname || this.hostname,
              port: n.port || this.port,
              secure: n.secure || this.secure,
              path: n.path || this.path,
              forceJSONP: n.forceJSONP || this.forceJSONP,
              jsonp: n.jsonp || this.jsonp,
              forceBase64: n.forceBase64 || this.forceBase64,
              enablesXDR: n.enablesXDR || this.enablesXDR,
              withCredentials: n.withCredentials || this.withCredentials,
              timestampRequests: n.timestampRequests || this.timestampRequests,
              timestampParam: n.timestampParam || this.timestampParam,
              policyPort: n.policyPort || this.policyPort,
              pfx: n.pfx || this.pfx,
              key: n.key || this.key,
              passphrase: n.passphrase || this.passphrase,
              cert: n.cert || this.cert,
              ca: n.ca || this.ca,
              ciphers: n.ciphers || this.ciphers,
              rejectUnauthorized:
                n.rejectUnauthorized || this.rejectUnauthorized,
              perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
              extraHeaders: n.extraHeaders || this.extraHeaders,
              forceNode: n.forceNode || this.forceNode,
              localAddress: n.localAddress || this.localAddress,
              requestTimeout: n.requestTimeout || this.requestTimeout,
              protocols: n.protocols || void 0,
              isReactNative: this.isReactNative,
            })
          )
        }),
        (u.prototype.open = function () {
          var t
          if (
            this.rememberUpgrade &&
            u.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf('websocket')
          )
            t = 'websocket'
          else {
            if (0 === this.transports.length) {
              var e = this
              return void setTimeout(function () {
                e.emit('error', 'No transports available')
              }, 0)
            }
            t = this.transports[0]
          }
          this.readyState = 'opening'
          try {
            t = this.createTransport(t)
          } catch (n) {
            return this.transports.shift(), void this.open()
          }
          t.open(), this.setTransport(t)
        }),
        (u.prototype.setTransport = function (t) {
          s('setting transport %s', t.name)
          var e = this
          this.transport &&
            (s('clearing existing transport %s', this.transport.name),
            this.transport.removeAllListeners()),
            (this.transport = t),
            t
              .on('drain', function () {
                e.onDrain()
              })
              .on('packet', function (t) {
                e.onPacket(t)
              })
              .on('error', function (t) {
                e.onError(t)
              })
              .on('close', function () {
                e.onClose('transport close')
              })
        }),
        (u.prototype.probe = function (t) {
          s('probing transport "%s"', t)
          var e = this.createTransport(t, { probe: 1 }),
            n = !1,
            r = this
          function i() {
            r.onlyBinaryUpgrades &&
              (n = n || (!this.supportsBinary && r.transport.supportsBinary)),
              n ||
                (s('probe transport "%s" opened', t),
                e.send([{ type: 'ping', data: 'probe' }]),
                e.once('packet', function (i) {
                  if (!n)
                    if ('pong' === i.type && 'probe' === i.data) {
                      if (
                        (s('probe transport "%s" pong', t),
                        (r.upgrading = !0),
                        r.emit('upgrading', e),
                        !e)
                      )
                        return
                      ;(u.priorWebsocketSuccess = 'websocket' === e.name),
                        s('pausing current transport "%s"', r.transport.name),
                        r.transport.pause(function () {
                          n ||
                            ('closed' !== r.readyState &&
                              (s(
                                'changing transport and sending upgrade packet'
                              ),
                              d(),
                              r.setTransport(e),
                              e.send([{ type: 'upgrade' }]),
                              r.emit('upgrade', e),
                              (e = null),
                              (r.upgrading = !1),
                              r.flush()))
                        })
                    } else {
                      s('probe transport "%s" failed', t)
                      var o = new Error('probe error')
                      ;(o.transport = e.name), r.emit('upgradeError', o)
                    }
                }))
          }
          function o() {
            n || ((n = !0), d(), e.close(), (e = null))
          }
          function a(n) {
            var i = new Error('probe error: ' + n)
            ;(i.transport = e.name),
              o(),
              s('probe transport "%s" failed because of error: %s', t, n),
              r.emit('upgradeError', i)
          }
          function l() {
            a('transport closed')
          }
          function c() {
            a('socket closed')
          }
          function h(t) {
            e &&
              t.name !== e.name &&
              (s('"%s" works - aborting "%s"', t.name, e.name), o())
          }
          function d() {
            e.removeListener('open', i),
              e.removeListener('error', a),
              e.removeListener('close', l),
              r.removeListener('close', c),
              r.removeListener('upgrading', h)
          }
          ;(u.priorWebsocketSuccess = !1),
            e.once('open', i),
            e.once('error', a),
            e.once('close', l),
            this.once('close', c),
            this.once('upgrading', h),
            e.open()
        }),
        (u.prototype.onOpen = function () {
          if (
            (s('socket open'),
            (this.readyState = 'open'),
            (u.priorWebsocketSuccess = 'websocket' === this.transport.name),
            this.emit('open'),
            this.flush(),
            'open' === this.readyState && this.upgrade && this.transport.pause)
          ) {
            s('starting upgrade probes')
            for (var t = 0, e = this.upgrades.length; t < e; t++)
              this.probe(this.upgrades[t])
          }
        }),
        (u.prototype.onPacket = function (t) {
          if (
            'opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState
          )
            switch (
              (s('socket receive: type "%s", data "%s"', t.type, t.data),
              this.emit('packet', t),
              this.emit('heartbeat'),
              t.type)
            ) {
              case 'open':
                this.onHandshake(JSON.parse(t.data))
                break
              case 'pong':
                this.setPing(), this.emit('pong')
                break
              case 'error':
                var e = new Error('server error')
                ;(e.code = t.data), this.onError(e)
                break
              case 'message':
                this.emit('data', t.data), this.emit('message', t.data)
            }
          else s('packet received with socket readyState "%s"', this.readyState)
        }),
        (u.prototype.onHandshake = function (t) {
          this.emit('handshake', t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            this.onOpen(),
            'closed' !== this.readyState &&
              (this.setPing(),
              this.removeListener('heartbeat', this.onHeartbeat),
              this.on('heartbeat', this.onHeartbeat))
        }),
        (u.prototype.onHeartbeat = function (t) {
          clearTimeout(this.pingTimeoutTimer)
          var e = this
          e.pingTimeoutTimer = setTimeout(function () {
            'closed' !== e.readyState && e.onClose('ping timeout')
          }, t || e.pingInterval + e.pingTimeout)
        }),
        (u.prototype.setPing = function () {
          var t = this
          clearTimeout(t.pingIntervalTimer),
            (t.pingIntervalTimer = setTimeout(function () {
              s(
                'writing ping packet - expecting pong within %sms',
                t.pingTimeout
              ),
                t.ping(),
                t.onHeartbeat(t.pingTimeout)
            }, t.pingInterval))
        }),
        (u.prototype.ping = function () {
          var t = this
          this.sendPacket('ping', function () {
            t.emit('ping')
          })
        }),
        (u.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emit('drain') : this.flush()
        }),
        (u.prototype.flush = function () {
          'closed' !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length &&
            (s('flushing %d packets in socket', this.writeBuffer.length),
            this.transport.send(this.writeBuffer),
            (this.prevBufferLen = this.writeBuffer.length),
            this.emit('flush'))
        }),
        (u.prototype.write = u.prototype.send = function (t, e, n) {
          return this.sendPacket('message', t, e, n), this
        }),
        (u.prototype.sendPacket = function (t, e, n, r) {
          if (
            ('function' == typeof e && ((r = e), (e = void 0)),
            'function' == typeof n && ((r = n), (n = null)),
            'closing' !== this.readyState && 'closed' !== this.readyState)
          ) {
            ;(n = n || {}).compress = !1 !== n.compress
            var i = { type: t, data: e, options: n }
            this.emit('packetCreate', i),
              this.writeBuffer.push(i),
              r && this.once('flush', r),
              this.flush()
          }
        }),
        (u.prototype.close = function () {
          if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing'
            var t = this
            this.writeBuffer.length
              ? this.once('drain', function () {
                  this.upgrading ? r() : e()
                })
              : this.upgrading
              ? r()
              : e()
          }
          function e() {
            t.onClose('forced close'),
              s('socket closing - telling transport to close'),
              t.transport.close()
          }
          function n() {
            t.removeListener('upgrade', n),
              t.removeListener('upgradeError', n),
              e()
          }
          function r() {
            t.once('upgrade', n), t.once('upgradeError', n)
          }
          return this
        }),
        (u.prototype.onError = function (t) {
          s('socket error %j', t),
            (u.priorWebsocketSuccess = !1),
            this.emit('error', t),
            this.onClose('transport error', t)
        }),
        (u.prototype.onClose = function (t, e) {
          ;('opening' !== this.readyState &&
            'open' !== this.readyState &&
            'closing' !== this.readyState) ||
            (s('socket close with reason: "%s"', t),
            clearTimeout(this.pingIntervalTimer),
            clearTimeout(this.pingTimeoutTimer),
            this.transport.removeAllListeners('close'),
            this.transport.close(),
            this.transport.removeAllListeners(),
            (this.readyState = 'closed'),
            (this.id = null),
            this.emit('close', t, e),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0))
        }),
        (u.prototype.filterUpgrades = function (t) {
          for (var e = [], n = 0, r = t.length; n < r; n++)
            ~o(this.transports, t[n]) && e.push(t[n])
          return e
        })
    },
    '5LH7': function (t, e) {
      var n = 1e3,
        r = 60 * n,
        i = 60 * r,
        s = 24 * i
      function o(t, e, n) {
        if (!(t < e))
          return t < 1.5 * e
            ? Math.floor(t / e) + ' ' + n
            : Math.ceil(t / e) + ' ' + n + 's'
      }
      t.exports = function (t, e) {
        e = e || {}
        var a,
          l = typeof t
        if ('string' === l && t.length > 0)
          return (function (t) {
            if (!((t = String(t)).length > 100)) {
              var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                t
              )
              if (e) {
                var o = parseFloat(e[1])
                switch ((e[2] || 'ms').toLowerCase()) {
                  case 'years':
                  case 'year':
                  case 'yrs':
                  case 'yr':
                  case 'y':
                    return 315576e5 * o
                  case 'days':
                  case 'day':
                  case 'd':
                    return o * s
                  case 'hours':
                  case 'hour':
                  case 'hrs':
                  case 'hr':
                  case 'h':
                    return o * i
                  case 'minutes':
                  case 'minute':
                  case 'mins':
                  case 'min':
                  case 'm':
                    return o * r
                  case 'seconds':
                  case 'second':
                  case 'secs':
                  case 'sec':
                  case 's':
                    return o * n
                  case 'milliseconds':
                  case 'millisecond':
                  case 'msecs':
                  case 'msec':
                  case 'ms':
                    return o
                  default:
                    return
                }
              }
            }
          })(t)
        if ('number' === l && !1 === isNaN(t))
          return e.long
            ? o((a = t), s, 'day') ||
                o(a, i, 'hour') ||
                o(a, r, 'minute') ||
                o(a, n, 'second') ||
                a + ' ms'
            : (function (t) {
                return t >= s
                  ? Math.round(t / s) + 'd'
                  : t >= i
                  ? Math.round(t / i) + 'h'
                  : t >= r
                  ? Math.round(t / r) + 'm'
                  : t >= n
                  ? Math.round(t / n) + 's'
                  : t + 'ms'
              })(t)
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(t)
        )
      }
    },
    '7jRU': function (t, e) {
      var n = [].indexOf
      t.exports = function (t, e) {
        if (n) return t.indexOf(e)
        for (var r = 0; r < t.length; ++r) if (t[r] === e) return r
        return -1
      }
    },
    AdPF: function (t, e, n) {
      var r = n('yeub'),
        i = n('2UHX')
      t.exports = function (t) {
        var e = t.xdomain,
          n = t.xscheme,
          s = t.enablesXDR
        try {
          if ('undefined' != typeof XMLHttpRequest && (!e || r))
            return new XMLHttpRequest()
        } catch (o) {}
        try {
          if ('undefined' != typeof XDomainRequest && !n && s)
            return new XDomainRequest()
        } catch (o) {}
        if (!e)
          try {
            return new i[['Active'].concat('Object').join('X')](
              'Microsoft.XMLHTTP'
            )
          } catch (o) {}
      }
    },
    Aplp: function (t, e, n) {
      'use strict'
      var r,
        i = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
          ''
        ),
        s = {},
        o = 0,
        a = 0
      function l(t) {
        var e = ''
        do {
          ;(e = i[t % 64] + e), (t = Math.floor(t / 64))
        } while (t > 0)
        return e
      }
      function c() {
        var t = l(+new Date())
        return t !== r ? ((o = 0), (r = t)) : t + '.' + l(o++)
      }
      for (; a < 64; a++) s[i[a]] = a
      ;(c.encode = l),
        (c.decode = function (t) {
          var e = 0
          for (a = 0; a < t.length; a++) e = 64 * e + s[t.charAt(a)]
          return e
        }),
        (t.exports = c)
    },
    C2QD: function (t, e) {
      function n(t) {
        ;(this.ms = (t = t || {}).min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0)
      }
      ;(t.exports = n),
        (n.prototype.duration = function () {
          var t = this.ms * Math.pow(this.factor, this.attempts++)
          if (this.jitter) {
            var e = Math.random(),
              n = Math.floor(e * this.jitter * t)
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
          }
          return 0 | Math.min(t, this.max)
        }),
        (n.prototype.reset = function () {
          this.attempts = 0
        }),
        (n.prototype.setMin = function (t) {
          this.ms = t
        }),
        (n.prototype.setMax = function (t) {
          this.max = t
        }),
        (n.prototype.setJitter = function (t) {
          this.jitter = t
        })
    },
    CIKq: function (t, e, n) {
      var r,
        i,
        s = n('Gbct'),
        o = n('Wm4p'),
        a = n('TypT'),
        l = n('Yvos'),
        c = n('Aplp'),
        u = n('x7D4')('engine.io-client:websocket')
      if (
        ('undefined' != typeof WebSocket
          ? (r = WebSocket)
          : 'undefined' != typeof self &&
            (r = self.WebSocket || self.MozWebSocket),
        'undefined' == typeof window)
      )
        try {
          i = n(1)
        } catch (p) {}
      var h = r || i
      function d(t) {
        t && t.forceBase64 && (this.supportsBinary = !1),
          (this.perMessageDeflate = t.perMessageDeflate),
          (this.usingBrowserWebSocket = r && !t.forceNode),
          (this.protocols = t.protocols),
          this.usingBrowserWebSocket || (h = i),
          s.call(this, t)
      }
      ;(t.exports = d),
        l(d, s),
        (d.prototype.name = 'websocket'),
        (d.prototype.supportsBinary = !0),
        (d.prototype.doOpen = function () {
          if (this.check()) {
            var t = this.uri(),
              e = this.protocols,
              n = {}
            this.isReactNative ||
              ((n.agent = this.agent),
              (n.perMessageDeflate = this.perMessageDeflate),
              (n.pfx = this.pfx),
              (n.key = this.key),
              (n.passphrase = this.passphrase),
              (n.cert = this.cert),
              (n.ca = this.ca),
              (n.ciphers = this.ciphers),
              (n.rejectUnauthorized = this.rejectUnauthorized)),
              this.extraHeaders && (n.headers = this.extraHeaders),
              this.localAddress && (n.localAddress = this.localAddress)
            try {
              this.ws =
                this.usingBrowserWebSocket && !this.isReactNative
                  ? e
                    ? new h(t, e)
                    : new h(t)
                  : new h(t, e, n)
            } catch (r) {
              return this.emit('error', r)
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
              this.ws.supports && this.ws.supports.binary
                ? ((this.supportsBinary = !0),
                  (this.ws.binaryType = 'nodebuffer'))
                : (this.ws.binaryType = 'arraybuffer'),
              this.addEventListeners()
          }
        }),
        (d.prototype.addEventListeners = function () {
          var t = this
          ;(this.ws.onopen = function () {
            t.onOpen()
          }),
            (this.ws.onclose = function () {
              t.onClose()
            }),
            (this.ws.onmessage = function (e) {
              t.onData(e.data)
            }),
            (this.ws.onerror = function (e) {
              t.onError('websocket error', e)
            })
        }),
        (d.prototype.write = function (t) {
          var e = this
          this.writable = !1
          for (var n = t.length, r = 0, i = n; r < i; r++)
            !(function (t) {
              o.encodePacket(t, e.supportsBinary, function (r) {
                if (!e.usingBrowserWebSocket) {
                  var i = {}
                  t.options && (i.compress = t.options.compress),
                    e.perMessageDeflate &&
                      ('string' == typeof r ? Buffer.byteLength(r) : r.length) <
                        e.perMessageDeflate.threshold &&
                      (i.compress = !1)
                }
                try {
                  e.usingBrowserWebSocket ? e.ws.send(r) : e.ws.send(r, i)
                } catch (p) {
                  u('websocket closed before onclose event')
                }
                --n ||
                  (e.emit('flush'),
                  setTimeout(function () {
                    ;(e.writable = !0), e.emit('drain')
                  }, 0))
              })
            })(t[r])
        }),
        (d.prototype.onClose = function () {
          s.prototype.onClose.call(this)
        }),
        (d.prototype.doClose = function () {
          void 0 !== this.ws && this.ws.close()
        }),
        (d.prototype.uri = function () {
          var t = this.query || {},
            e = this.secure ? 'wss' : 'ws',
            n = ''
          return (
            this.port &&
              (('wss' === e && 443 !== Number(this.port)) ||
                ('ws' === e && 80 !== Number(this.port))) &&
              (n = ':' + this.port),
            this.timestampRequests && (t[this.timestampParam] = c()),
            this.supportsBinary || (t.b64 = 1),
            (t = a.encode(t)).length && (t = '?' + t),
            e +
              '://' +
              (-1 !== this.hostname.indexOf(':')
                ? '[' + this.hostname + ']'
                : this.hostname) +
              n +
              this.path +
              t
          )
        }),
        (d.prototype.check = function () {
          return !(
            !h ||
            ('__initialize' in h && this.name === d.prototype.name)
          )
        })
    },
    CUme: function (t, e, n) {
      var r = n('Gbct'),
        i = n('TypT'),
        s = n('Wm4p'),
        o = n('Yvos'),
        a = n('Aplp'),
        l = n('x7D4')('engine.io-client:polling')
      t.exports = u
      var c = null != new (n('AdPF'))({ xdomain: !1 }).responseType
      function u(t) {
        ;(c && !(t && t.forceBase64)) || (this.supportsBinary = !1),
          r.call(this, t)
      }
      o(u, r),
        (u.prototype.name = 'polling'),
        (u.prototype.doOpen = function () {
          this.poll()
        }),
        (u.prototype.pause = function (t) {
          var e = this
          function n() {
            l('paused'), (e.readyState = 'paused'), t()
          }
          if (((this.readyState = 'pausing'), this.polling || !this.writable)) {
            var r = 0
            this.polling &&
              (l('we are currently polling - waiting to pause'),
              r++,
              this.once('pollComplete', function () {
                l('pre-pause polling complete'), --r || n()
              })),
              this.writable ||
                (l('we are currently writing - waiting to pause'),
                r++,
                this.once('drain', function () {
                  l('pre-pause writing complete'), --r || n()
                }))
          } else n()
        }),
        (u.prototype.poll = function () {
          l('polling'), (this.polling = !0), this.doPoll(), this.emit('poll')
        }),
        (u.prototype.onData = function (t) {
          var e = this
          l('polling got data %s', t),
            s.decodePayload(t, this.socket.binaryType, function (t, n, r) {
              if (
                ('opening' === e.readyState && e.onOpen(), 'close' === t.type)
              )
                return e.onClose(), !1
              e.onPacket(t)
            }),
            'closed' !== this.readyState &&
              ((this.polling = !1),
              this.emit('pollComplete'),
              'open' === this.readyState
                ? this.poll()
                : l('ignoring poll - transport state "%s"', this.readyState))
        }),
        (u.prototype.doClose = function () {
          var t = this
          function e() {
            l('writing close packet'), t.write([{ type: 'close' }])
          }
          'open' === this.readyState
            ? (l('transport open - closing'), e())
            : (l('transport not open - deferring close'), this.once('open', e))
        }),
        (u.prototype.write = function (t) {
          var e = this
          this.writable = !1
          var n = function () {
            ;(e.writable = !0), e.emit('drain')
          }
          s.encodePayload(t, this.supportsBinary, function (t) {
            e.doWrite(t, n)
          })
        }),
        (u.prototype.uri = function () {
          var t = this.query || {},
            e = this.secure ? 'https' : 'http',
            n = ''
          return (
            !1 !== this.timestampRequests && (t[this.timestampParam] = a()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            (t = i.encode(t)),
            this.port &&
              (('https' === e && 443 !== Number(this.port)) ||
                ('http' === e && 80 !== Number(this.port))) &&
              (n = ':' + this.port),
            t.length && (t = '?' + t),
            e +
              '://' +
              (-1 !== this.hostname.indexOf(':')
                ? '[' + this.hostname + ']'
                : this.hostname) +
              n +
              this.path +
              t
          )
        })
    },
    Cl5A: function (t, e, n) {
      var r = n('CUme'),
        i = n('Yvos'),
        s = n('2UHX')
      t.exports = u
      var o,
        a = /\n/g,
        l = /\\n/g
      function c() {}
      function u(t) {
        r.call(this, t),
          (this.query = this.query || {}),
          o || (o = s.___eio = s.___eio || []),
          (this.index = o.length)
        var e = this
        o.push(function (t) {
          e.onData(t)
        }),
          (this.query.j = this.index),
          'function' == typeof addEventListener &&
            addEventListener(
              'beforeunload',
              function () {
                e.script && (e.script.onerror = c)
              },
              !1
            )
      }
      i(u, r),
        (u.prototype.supportsBinary = !1),
        (u.prototype.doClose = function () {
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            this.form &&
              (this.form.parentNode.removeChild(this.form),
              (this.form = null),
              (this.iframe = null)),
            r.prototype.doClose.call(this)
        }),
        (u.prototype.doPoll = function () {
          var t = this,
            e = document.createElement('script')
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            (e.async = !0),
            (e.src = this.uri()),
            (e.onerror = function (e) {
              t.onError('jsonp poll error', e)
            })
          var n = document.getElementsByTagName('script')[0]
          n
            ? n.parentNode.insertBefore(e, n)
            : (document.head || document.body).appendChild(e),
            (this.script = e),
            'undefined' != typeof navigator &&
              /gecko/i.test(navigator.userAgent) &&
              setTimeout(function () {
                var t = document.createElement('iframe')
                document.body.appendChild(t), document.body.removeChild(t)
              }, 100)
        }),
        (u.prototype.doWrite = function (t, e) {
          var n = this
          if (!this.form) {
            var r,
              i = document.createElement('form'),
              s = document.createElement('textarea'),
              o = (this.iframeId = 'eio_iframe_' + this.index)
            ;(i.className = 'socketio'),
              (i.style.position = 'absolute'),
              (i.style.top = '-1000px'),
              (i.style.left = '-1000px'),
              (i.target = o),
              (i.method = 'POST'),
              i.setAttribute('accept-charset', 'utf-8'),
              (s.name = 'd'),
              i.appendChild(s),
              document.body.appendChild(i),
              (this.form = i),
              (this.area = s)
          }
          function c() {
            u(), e()
          }
          function u() {
            if (n.iframe)
              try {
                n.form.removeChild(n.iframe)
              } catch (t) {
                n.onError('jsonp polling iframe removal error', t)
              }
            try {
              r = document.createElement(
                '<iframe src="javascript:0" name="' + n.iframeId + '">'
              )
            } catch (t) {
              ;((r = document.createElement('iframe')).name = n.iframeId),
                (r.src = 'javascript:0')
            }
            ;(r.id = n.iframeId), n.form.appendChild(r), (n.iframe = r)
          }
          ;(this.form.action = this.uri()),
            u(),
            (t = t.replace(l, '\\\n')),
            (this.area.value = t.replace(a, '\\n'))
          try {
            this.form.submit()
          } catch (h) {}
          this.iframe.attachEvent
            ? (this.iframe.onreadystatechange = function () {
                'complete' === n.iframe.readyState && c()
              })
            : (this.iframe.onload = c)
        })
    },
    DUmd: function (t, e, n) {
      'use strict'
      function r(t) {
        return 'function' == typeof t
      }
      n.r(e)
      let i = !1
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error()
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            )
          } else
            i &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              )
          i = t
        },
        get useDeprecatedSynchronousErrorHandling() {
          return i
        },
      }
      function o(t) {
        setTimeout(() => {
          throw t
        }, 0)
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (s.useDeprecatedSynchronousErrorHandling) throw t
            o(t)
          },
          complete() {},
        },
        l = (() => Array.isArray || ((t) => t && 'number' == typeof t.length))()
      function c(t) {
        return null !== t && 'object' == typeof t
      }
      const u = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          )
        }
        return (t.prototype = Object.create(Error.prototype)), t
      })()
      let h = (() => {
        class t {
          constructor(t) {
            ;(this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t)
          }
          unsubscribe() {
            let e
            if (this.closed) return
            let {
              _parentOrParents: n,
              _unsubscribe: i,
              _subscriptions: s,
            } = this
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this)
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this)
            if (r(i))
              try {
                i.call(this)
              } catch (o) {
                e = o instanceof u ? d(o.errors) : [o]
              }
            if (l(s)) {
              let t = -1,
                n = s.length
              for (; ++t < n; ) {
                const n = s[t]
                if (c(n))
                  try {
                    n.unsubscribe()
                  } catch (o) {
                    ;(e = e || []),
                      o instanceof u ? (e = e.concat(d(o.errors))) : e.push(o)
                  }
              }
            }
            if (e) throw new u(e)
          }
          add(e) {
            let n = e
            if (!e) return t.EMPTY
            switch (typeof e) {
              case 'function':
                n = new t(e)
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n
                if (this.closed) return n.unsubscribe(), n
                if (!(n instanceof t)) {
                  const e = n
                  ;(n = new t()), (n._subscriptions = [e])
                }
                break
              default:
                throw new Error(
                  'unrecognized teardown ' + e + ' added to Subscription.'
                )
            }
            let { _parentOrParents: r } = n
            if (null === r) n._parentOrParents = this
            else if (r instanceof t) {
              if (r === this) return n
              n._parentOrParents = [r, this]
            } else {
              if (-1 !== r.indexOf(this)) return n
              r.push(this)
            }
            const i = this._subscriptions
            return null === i ? (this._subscriptions = [n]) : i.push(n), n
          }
          remove(t) {
            const e = this._subscriptions
            if (e) {
              const n = e.indexOf(t)
              ;-1 !== n && e.splice(n, 1)
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t
          })(new t())),
          t
        )
      })()
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), [])
      }
      const p = (() =>
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random())()
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a
              break
            case 1:
              if (!t) {
                this.destination = a
                break
              }
              if ('object' == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, t)))
                break
              }
            default:
              ;(this.syncErrorThrowable = !0),
                (this.destination = new m(this, t, e, n))
          }
        }
        [p]() {
          return this
        }
        static create(t, e, n) {
          const r = new f(t, e, n)
          return (r.syncErrorThrowable = !1), r
        }
        next(t) {
          this.isStopped || this._next(t)
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t))
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete())
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe())
        }
        _next(t) {
          this.destination.next(t)
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe()
        }
        _complete() {
          this.destination.complete(), this.unsubscribe()
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          )
        }
      }
      class m extends f {
        constructor(t, e, n, i) {
          let s
          super(), (this._parentSubscriber = t)
          let o = this
          r(e)
            ? (s = e)
            : e &&
              ((s = e.next),
              (n = e.error),
              (i = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = s),
            (this._error = n),
            (this._complete = i)
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this
            s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t)
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = s
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe())
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe()
            else {
              if ((this.unsubscribe(), n)) throw t
              o(t)
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this
            if (this._complete) {
              const e = () => this._complete.call(this._context)
              s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe())
            } else this.unsubscribe()
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e)
          } catch (n) {
            if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling))
              throw n
            o(n)
          }
        }
        __tryOrSetError(t, e, n) {
          if (!s.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call')
          try {
            e.call(this._context, n)
          } catch (r) {
            return s.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0)
          }
          return !1
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this
          ;(this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe()
        }
      }
      const g = (() =>
        ('function' == typeof Symbol && Symbol.observable) || '@@observable')()
      function y(t) {
        return t
      }
      let _ = (() => {
        class t {
          constructor(t) {
            ;(this._isScalar = !1), t && (this._subscribe = t)
          }
          lift(e) {
            const n = new t()
            return (n.source = this), (n.operator = e), n
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              i = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t
                  if (t[p]) return t[p]()
                }
                return t || e || n ? new f(t, e, n) : new f(a)
              })(t, e, n)
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source ||
                    (s.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              s.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue
            return i
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t)
            } catch (e) {
              s.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t
                    if (e || r) return !1
                    t = n && n instanceof f ? n : null
                  }
                  return !0
                })(t)
                  ? t.error(e)
                  : console.warn(e)
            }
          }
          forEach(t, e) {
            return new (e = v(e))((e, n) => {
              let r
              r = this.subscribe(
                (e) => {
                  try {
                    t(e)
                  } catch (i) {
                    n(i), r && r.unsubscribe()
                  }
                },
                n,
                e
              )
            })
          }
          _subscribe(t) {
            const { source: e } = this
            return e && e.subscribe(t)
          }
          [g]() {
            return this
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? y
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t)
                    })(this)
            var e
          }
          toPromise(t) {
            return new (t = v(t))((t, e) => {
              let n
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              )
            })
          }
        }
        return (t.create = (e) => new t(e)), t
      })()
      function v(t) {
        if ((t || (t = s.Promise || Promise), !t))
          throw new Error('no Promise impl found')
        return t
      }
      const b = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'object unsubscribed'),
            (this.name = 'ObjectUnsubscribedError'),
            this
          )
        }
        return (t.prototype = Object.create(Error.prototype)), t
      })()
      class w extends h {
        constructor(t, e) {
          super(), (this.subject = t), (this.subscriber = e), (this.closed = !1)
        }
        unsubscribe() {
          if (this.closed) return
          this.closed = !0
          const t = this.subject,
            e = t.observers
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return
          const n = e.indexOf(this.subscriber)
          ;-1 !== n && e.splice(n, 1)
        }
      }
      class S extends f {
        constructor(t) {
          super(t), (this.destination = t)
        }
      }
      let C = (() => {
        class t extends _ {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null)
          }
          [p]() {
            return new S(this)
          }
          lift(t) {
            const e = new E(this, this)
            return (e.operator = t), e
          }
          next(t) {
            if (this.closed) throw new b()
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice()
              for (let i = 0; i < n; i++) r[i].next(t)
            }
          }
          error(t) {
            if (this.closed) throw new b()
            ;(this.hasError = !0), (this.thrownError = t), (this.isStopped = !0)
            const { observers: e } = this,
              n = e.length,
              r = e.slice()
            for (let i = 0; i < n; i++) r[i].error(t)
            this.observers.length = 0
          }
          complete() {
            if (this.closed) throw new b()
            this.isStopped = !0
            const { observers: t } = this,
              e = t.length,
              n = t.slice()
            for (let r = 0; r < e; r++) n[r].complete()
            this.observers.length = 0
          }
          unsubscribe() {
            ;(this.isStopped = !0), (this.closed = !0), (this.observers = null)
          }
          _trySubscribe(t) {
            if (this.closed) throw new b()
            return super._trySubscribe(t)
          }
          _subscribe(t) {
            if (this.closed) throw new b()
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new w(this, t))
          }
          asObservable() {
            const t = new _()
            return (t.source = this), t
          }
        }
        return (t.create = (t, e) => new E(t, e)), t
      })()
      class E extends C {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e)
        }
        next(t) {
          const { destination: e } = this
          e && e.next && e.next(t)
        }
        error(t) {
          const { destination: e } = this
          e && e.error && this.destination.error(t)
        }
        complete() {
          const { destination: t } = this
          t && t.complete && this.destination.complete()
        }
        _subscribe(t) {
          const { source: e } = this
          return e ? this.source.subscribe(t) : h.EMPTY
        }
      }
      function k(t) {
        return t && 'function' == typeof t.schedule
      }
      class x extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0)
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          )
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe()
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe()
        }
      }
      const T = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n])
        e.complete()
      }
      function I() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator'
      }
      const A = I(),
        O = (t) => t && 'number' == typeof t.length && 'function' != typeof t
      function R(t) {
        return (
          !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then
        )
      }
      const P = (t) => {
        if (t && 'function' == typeof t[g])
          return (
            (r = t),
            (t) => {
              const e = r[g]()
              if ('function' != typeof e.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                )
              return e.subscribe(t)
            }
          )
        if (O(t)) return T(t)
        if (R(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete())
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          )
        if (t && 'function' == typeof t[A])
          return (
            (e = t),
            (t) => {
              const n = e[A]()
              for (;;) {
                const e = n.next()
                if (e.done) {
                  t.complete()
                  break
                }
                if ((t.next(e.value), t.closed)) break
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return()
                  }),
                t
              )
            }
          )
        {
          const e = c(t) ? 'an invalid object' : `'${t}'`
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          )
        }
        var e, n, r
      }
      function D(t, e, n, r, i = new x(t, n, r)) {
        if (!i.closed) return e instanceof _ ? e.subscribe(i) : P(e)(i)
      }
      class M extends f {
        notifyNext(t, e, n, r, i) {
          this.destination.next(e)
        }
        notifyError(t, e) {
          this.destination.error(t)
        }
        notifyComplete(t) {
          this.destination.complete()
        }
      }
      function F(t, e) {
        return function (n) {
          if ('function' != typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            )
          return n.lift(new N(t, e))
        }
      }
      class N {
        constructor(t, e) {
          ;(this.project = t), (this.thisArg = e)
        }
        call(t, e) {
          return e.subscribe(new j(t, this.project, this.thisArg))
        }
      }
      class j extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this)
        }
        _next(t) {
          let e
          try {
            e = this.project.call(this.thisArg, t, this.count++)
          } catch (n) {
            return void this.destination.error(n)
          }
          this.destination.next(e)
        }
      }
      function z(t, e) {
        return new _((n) => {
          const r = new h()
          let i = 0
          return (
            r.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
                  : n.complete()
              })
            ),
            r
          )
        })
      }
      function L(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[g]
                  })(t)
                )
                  return (function (t, e) {
                    return new _((n) => {
                      const r = new h()
                      return (
                        r.add(
                          e.schedule(() => {
                            const i = t[g]()
                            r.add(
                              i.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)))
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)))
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()))
                                },
                              })
                            )
                          })
                        ),
                        r
                      )
                    })
                  })(t, e)
                if (R(t))
                  return (function (t, e) {
                    return new _((n) => {
                      const r = new h()
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()))
                                  })
                                )
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)))
                              }
                            )
                          )
                        ),
                        r
                      )
                    })
                  })(t, e)
                if (O(t)) return z(t, e)
                if (
                  (function (t) {
                    return t && 'function' == typeof t[A]
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null')
                    return new _((n) => {
                      const r = new h()
                      let i
                      return (
                        r.add(() => {
                          i && 'function' == typeof i.return && i.return()
                        }),
                        r.add(
                          e.schedule(() => {
                            ;(i = t[A]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return
                                  let t, e
                                  try {
                                    const n = i.next()
                                    ;(t = n.value), (e = n.done)
                                  } catch (r) {
                                    return void n.error(r)
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule())
                                })
                              )
                          })
                        ),
                        r
                      )
                    })
                  })(t, e)
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable'
              )
            })(t, e)
          : t instanceof _
          ? t
          : new _(P(t))
      }
      function U(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (r) =>
              r.pipe(
                U((n, r) => L(t(n, r)).pipe(F((t, i) => e(n, t, r, i))), n)
              )
          : ('number' == typeof e && (n = e), (e) => e.lift(new B(t, n)))
      }
      class B {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          ;(this.project = t), (this.concurrent = e)
        }
        call(t, e) {
          return e.subscribe(new q(t, this.project, this.concurrent))
        }
      }
      class q extends M {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0)
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
        }
        _tryNext(t) {
          let e
          const n = this.index++
          try {
            e = this.project(t, n)
          } catch (r) {
            return void this.destination.error(r)
          }
          this.active++, this._innerSub(e, t, n)
        }
        _innerSub(t, e, n) {
          const r = new x(this, e, n),
            i = this.destination
          i.add(r)
          const s = D(this, t, void 0, void 0, r)
          s !== r && i.add(s)
        }
        _complete() {
          ;(this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe()
        }
        notifyNext(t, e, n, r, i) {
          this.destination.next(e)
        }
        notifyComplete(t) {
          const e = this.buffer
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete()
        }
      }
      function H(t = Number.POSITIVE_INFINITY) {
        return U(y, t)
      }
      function V(t, e) {
        return e ? z(t, e) : new _(T(t))
      }
      function $() {
        return function (t) {
          return t.lift(new W(t))
        }
      }
      class W {
        constructor(t) {
          this.connectable = t
        }
        call(t, e) {
          const { connectable: n } = this
          n._refCount++
          const r = new K(t, n),
            i = e.subscribe(r)
          return r.closed || (r.connection = n.connect()), i
        }
      }
      class K extends f {
        constructor(t, e) {
          super(t), (this.connectable = e)
        }
        _unsubscribe() {
          const { connectable: t } = this
          if (!t) return void (this.connection = null)
          this.connectable = null
          const e = t._refCount
          if (e <= 0) return void (this.connection = null)
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null)
          const { connection: n } = this,
            r = t._connection
          ;(this.connection = null), !r || (n && r !== n) || r.unsubscribe()
        }
      }
      class Q extends _ {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1)
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t)
        }
        getSubject() {
          const t = this._subject
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          )
        }
        connect() {
          let t = this._connection
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new Z(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          )
        }
        refCount() {
          return $()(this)
        }
      }
      const G = (() => {
        const t = Q.prototype
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        }
      })()
      class Z extends S {
        constructor(t, e) {
          super(t), (this.connectable = e)
        }
        _error(t) {
          this._unsubscribe(), super._error(t)
        }
        _complete() {
          ;(this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete()
        }
        _unsubscribe() {
          const t = this.connectable
          if (t) {
            this.connectable = null
            const e = t._connection
            ;(t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe()
          }
        }
      }
      function Y() {
        return new C()
      }
      function X() {
        return (t) => {
          return $()(
            ((e = Y),
            function (t) {
              let n
              n =
                'function' == typeof e
                  ? e
                  : function () {
                      return e
                    }
              const r = Object.create(t, G)
              return (r.source = t), (r.subjectFactory = n), r
            })(t)
          )
          var e
        }
      }
      function J(t) {
        for (let e in t) if (t[e] === J) return e
        throw Error('Could not find renamed property on target object.')
      }
      function tt(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
      }
      function et(t) {
        if ('string' == typeof t) return t
        if (Array.isArray(t)) return '[' + t.map(et).join(', ') + ']'
        if (null == t) return '' + t
        if (t.overriddenName) return '' + t.overriddenName
        if (t.name) return '' + t.name
        const e = t.toString()
        if (null == e) return '' + e
        const n = e.indexOf('\n')
        return -1 === n ? e : e.substring(0, n)
      }
      function nt(t, e) {
        return null == t || '' === t
          ? null === e
            ? ''
            : e
          : null == e || '' === e
          ? t
          : t + ' ' + e
      }
      const rt = J({ __forward_ref__: J })
      function it(t) {
        return (
          (t.__forward_ref__ = it),
          (t.toString = function () {
            return et(this())
          }),
          t
        )
      }
      function st(t) {
        return 'function' == typeof (e = t) &&
          e.hasOwnProperty(rt) &&
          e.__forward_ref__ === it
          ? t()
          : t
        var e
      }
      function ot(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        }
      }
      function at(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        }
      }
      function lt(t) {
        return ct(t, ht) || ct(t, pt)
      }
      function ct(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null
      }
      function ut(t) {
        return t && (t.hasOwnProperty(dt) || t.hasOwnProperty(ft))
          ? t[dt]
          : null
      }
      const ht = J({ '\u0275prov': J }),
        dt = J({ '\u0275inj': J }),
        pt = J({ ngInjectableDef: J }),
        ft = J({ ngInjectorDef: J })
      var mt = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        )
      })({})
      let gt
      function yt(t) {
        const e = gt
        return (gt = t), e
      }
      function _t(t, e, n) {
        const r = lt(t)
        if (r && 'root' == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value
        if (n & mt.Optional) return null
        if (void 0 !== e) return e
        throw new Error(`Injector: NOT_FOUND [${et(t)}]`)
      }
      function vt(t) {
        return { toString: t }.toString()
      }
      var bt = (function (t) {
          return (
            (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t
          )
        })({}),
        wt = (function (t) {
          return (
            (t[(t.Emulated = 0)] = 'Emulated'),
            (t[(t.None = 2)] = 'None'),
            (t[(t.ShadowDom = 3)] = 'ShadowDom'),
            t
          )
        })({})
      const St = 'undefined' != typeof globalThis && globalThis,
        Ct = 'undefined' != typeof window && window,
        Et =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        kt = 'undefined' != typeof global && global,
        xt = St || kt || Ct || Et,
        Tt = {},
        It = [],
        At = J({ '\u0275cmp': J }),
        Ot = J({ '\u0275dir': J }),
        Rt = J({ '\u0275pipe': J }),
        Pt = J({ '\u0275mod': J }),
        Dt = J({ '\u0275loc': J }),
        Mt = J({ '\u0275fac': J }),
        Ft = J({ __NG_ELEMENT_ID__: J })
      let Nt = 0
      function jt(t) {
        return vt(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === bt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || It,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || wt.Emulated,
              id: 'c',
              styles: t.styles || It,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            r = t.directives,
            i = t.features,
            s = t.pipes
          return (
            (n.id += Nt++),
            (n.inputs = qt(t.inputs, e)),
            (n.outputs = qt(t.outputs)),
            i && i.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ('function' == typeof r ? r() : r).map(zt)
              : null),
            (n.pipeDefs = s
              ? () => ('function' == typeof s ? s() : s).map(Lt)
              : null),
            n
          )
        })
      }
      function zt(t) {
        return (
          $t(t) ||
          (function (t) {
            return t[Ot] || null
          })(t)
        )
      }
      function Lt(t) {
        return (function (t) {
          return t[Rt] || null
        })(t)
      }
      const Ut = {}
      function Bt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || It,
          declarations: t.declarations || It,
          imports: t.imports || It,
          exports: t.exports || It,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        }
        return (
          null != t.id &&
            vt(() => {
              Ut[t.id] = t.type
            }),
          e
        )
      }
      function qt(t, e) {
        if (null == t) return Tt
        const n = {}
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let i = t[r],
              s = i
            Array.isArray(i) && ((s = i[1]), (i = i[0])),
              (n[i] = r),
              e && (e[i] = s)
          }
        return n
      }
      const Ht = jt
      function Vt(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        }
      }
      function $t(t) {
        return t[At] || null
      }
      function Wt(t, e) {
        const n = t[Pt] || null
        if (!n && !0 === e)
          throw new Error(`Type ${et(t)} does not have '\u0275mod' property.`)
        return n
      }
      const Kt = 20,
        Qt = 10
      function Gt(t) {
        return Array.isArray(t) && 'object' == typeof t[1]
      }
      function Zt(t) {
        return Array.isArray(t) && !0 === t[1]
      }
      function Yt(t) {
        return 0 != (8 & t.flags)
      }
      function Xt(t) {
        return 2 == (2 & t.flags)
      }
      function Jt(t) {
        return 1 == (1 & t.flags)
      }
      function te(t) {
        return null !== t.template
      }
      function ee(t, e) {
        return t.hasOwnProperty(Mt) ? t[Mt] : null
      }
      class ne extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ''}${e}`
            })(t, e)
          ),
            (this.code = t)
        }
      }
      function re(t) {
        return 'string' == typeof t ? t : null == t ? '' : String(t)
      }
      function ie(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : re(t)
      }
      function se(t, e) {
        const n = e ? ' in ' + e : ''
        throw new ne('201', `No provider for ${ie(t)} found${n}`)
      }
      class oe {
        constructor(t, e, n) {
          ;(this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n)
        }
        isFirstChange() {
          return this.firstChange
        }
      }
      function ae() {
        const t = ce(this),
          e = null == t ? void 0 : t.current
        if (e) {
          const n = t.previous
          if (n === Tt) t.previous = e
          else for (let t in e) n[t] = e[t]
          ;(t.current = null), this.ngOnChanges(e)
        }
      }
      function le(t, e, n, r) {
        const i =
            ce(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e)
            })(t, { previous: Tt, current: null }),
          s = i.current || (i.current = {}),
          o = i.previous,
          a = this.declaredInputs[n],
          l = o[a]
        ;(s[a] = new oe(l && l.currentValue, e, o === Tt)), (t[r] = e)
      }
      function ce(t) {
        return t.__ngSimpleChanges__ || null
      }
      let ue = void 0
      function he(t) {
        return !!t.listen
      }
      const de = {
        createRenderer: (t, e) =>
          void 0 !== ue
            ? ue
            : 'undefined' != typeof document
            ? document
            : void 0,
      }
      function pe(t) {
        for (; Array.isArray(t); ) t = t[0]
        return t
      }
      function fe(t, e) {
        return pe(e[t])
      }
      function me(t, e) {
        return pe(e[t.index])
      }
      function ge(t, e) {
        return t.data[e]
      }
      function ye(t, e) {
        return t[e]
      }
      function _e(t, e) {
        const n = e[t]
        return Gt(n) ? n : n[0]
      }
      function ve(t) {
        const e = (function (t) {
          return t.__ngContext__ || null
        })(t)
        return e ? (Array.isArray(e) ? e : e.lView) : null
      }
      function be(t) {
        return 4 == (4 & t[2])
      }
      function we(t) {
        return 128 == (128 & t[2])
      }
      function Se(t, e) {
        return null == e ? null : t[e]
      }
      function Ce(t) {
        t[18] = 0
      }
      function Ee(t, e) {
        t[5] += e
        let n = t,
          r = t[3]
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3])
      }
      const ke = {
        lFrame: We(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      }
      function xe() {
        return ke.bindingsEnabled
      }
      function Te() {
        return ke.lFrame.lView
      }
      function Ie() {
        return ke.lFrame.tView
      }
      function Ae(t) {
        ke.lFrame.contextLView = t
      }
      function Oe() {
        let t = Re()
        for (; null !== t && 64 === t.type; ) t = t.parent
        return t
      }
      function Re() {
        return ke.lFrame.currentTNode
      }
      function Pe(t, e) {
        const n = ke.lFrame
        ;(n.currentTNode = t), (n.isParent = e)
      }
      function De() {
        return ke.lFrame.isParent
      }
      function Me() {
        ke.lFrame.isParent = !1
      }
      function Fe() {
        return ke.isInCheckNoChangesMode
      }
      function Ne(t) {
        ke.isInCheckNoChangesMode = t
      }
      function je() {
        return ke.lFrame.bindingIndex++
      }
      function ze(t, e) {
        const n = ke.lFrame
        ;(n.bindingIndex = n.bindingRootIndex = t), Le(e)
      }
      function Le(t) {
        ke.lFrame.currentDirectiveIndex = t
      }
      function Ue() {
        return ke.lFrame.currentQueryIndex
      }
      function Be(t) {
        ke.lFrame.currentQueryIndex = t
      }
      function qe(t) {
        const e = t[1]
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null
      }
      function He(t, e, n) {
        if (n & mt.SkipSelf) {
          let r = e,
            i = t
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & mt.Host ||
                ((r = qe(i)), null === r) ||
                ((i = i[15]), 10 & r.type)
              );

          );
          if (null === r) return !1
          ;(e = r), (t = i)
        }
        const r = (ke.lFrame = $e())
        return (r.currentTNode = e), (r.lView = t), !0
      }
      function Ve(t) {
        const e = $e(),
          n = t[1]
        ;(ke.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1)
      }
      function $e() {
        const t = ke.lFrame,
          e = null === t ? null : t.child
        return null === e ? We(t) : e
      }
      function We(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
          inI18n: !1,
        }
        return null !== t && (t.child = e), e
      }
      function Ke() {
        const t = ke.lFrame
        return (
          (ke.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        )
      }
      const Qe = Ke
      function Ge() {
        const t = Ke()
        ;(t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = -1),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0)
      }
      function Ze() {
        return ke.lFrame.selectedIndex
      }
      function Ye(t) {
        ke.lFrame.selectedIndex = t
      }
      function Xe() {
        const t = ke.lFrame
        return ge(t.tView, t.selectedIndex)
      }
      function Je(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: i,
              ngAfterViewInit: s,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            i &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, i),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, i)),
            s && (t.viewHooks || (t.viewHooks = [])).push(-n, s),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
        }
      }
      function tn(t, e, n) {
        rn(t, e, 3, n)
      }
      function en(t, e, n, r) {
        ;(3 & t[2]) === n && rn(t, e, n, r)
      }
      function nn(t, e) {
        let n = t[2]
        ;(3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n))
      }
      function rn(t, e, n, r) {
        const i = null != r ? r : -1
        let s = 0
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ('number' == typeof e[o + 1]) {
            if (((s = e[o]), null != r && s >= r)) break
          } else
            e[o] < 0 && (t[18] += 65536),
              (s < i || -1 == i) &&
                (sn(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++
      }
      function sn(t, e, n, r) {
        const i = n[r] < 0,
          s = n[r + 1],
          o = t[i ? -n[r] : n[r]]
        i
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), s.call(o))
          : s.call(o)
      }
      const on = -1
      class an {
        constructor(t, e, n) {
          ;(this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n)
        }
      }
      function ln(t, e, n) {
        const r = he(t)
        let i = 0
        for (; i < n.length; ) {
          const s = n[i]
          if ('number' == typeof s) {
            if (0 !== s) break
            i++
            const o = n[i++],
              a = n[i++],
              l = n[i++]
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
          } else {
            const o = s,
              a = n[++i]
            un(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              i++
          }
        }
        return i
      }
      function cn(t) {
        return 3 === t || 4 === t || 6 === t
      }
      function un(t) {
        return 64 === t.charCodeAt(0)
      }
      function hn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice()
        else {
          let n = -1
          for (let r = 0; r < e.length; r++) {
            const i = e[r]
            'number' == typeof i
              ? (n = i)
              : 0 === n ||
                dn(t, n, i, null, -1 === n || 2 === n ? e[++r] : null)
          }
        }
        return t
      }
      function dn(t, e, n, r, i) {
        let s = 0,
          o = t.length
        if (-1 === e) o = -1
        else
          for (; s < t.length; ) {
            const n = t[s++]
            if ('number' == typeof n) {
              if (n === e) {
                o = -1
                break
              }
              if (n > e) {
                o = s - 1
                break
              }
            }
          }
        for (; s < t.length; ) {
          const e = t[s]
          if ('number' == typeof e) break
          if (e === n) {
            if (null === r) return void (null !== i && (t[s + 1] = i))
            if (r === t[s + 1]) return void (t[s + 2] = i)
          }
          s++, null !== r && s++, null !== i && s++
        }
        ;-1 !== o && (t.splice(o, 0, e), (s = o + 1)),
          t.splice(s++, 0, n),
          null !== r && t.splice(s++, 0, r),
          null !== i && t.splice(s++, 0, i)
      }
      function pn(t) {
        return t !== on
      }
      function fn(t) {
        return 32767 & t
      }
      function mn(t, e) {
        let n = t >> 16,
          r = e
        for (; n > 0; ) (r = r[15]), n--
        return r
      }
      let gn = !0
      function yn(t) {
        const e = gn
        return (gn = t), e
      }
      let _n = 0
      function vn(t, e) {
        const n = wn(t, e)
        if (-1 !== n) return n
        const r = e[1]
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          bn(r.data, t),
          bn(e, null),
          bn(r.blueprint, null))
        const i = Sn(t, e),
          s = t.injectorIndex
        if (pn(i)) {
          const t = fn(i),
            n = mn(i, e),
            r = n[1].data
          for (let i = 0; i < 8; i++) e[s + i] = n[t + i] | r[t + i]
        }
        return (e[s + 8] = i), s
      }
      function bn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
      }
      function wn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex
      }
      function Sn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex
        let n = 0,
          r = null,
          i = e
        for (; null !== i; ) {
          const t = i[1],
            e = t.type
          if (((r = 2 === e ? t.declTNode : 1 === e ? i[6] : null), null === r))
            return on
          if ((n++, (i = i[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16)
        }
        return on
      }
      function Cn(t, e, n) {
        !(function (t, e, n) {
          let r
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Ft) && (r = n[Ft]),
            null == r && (r = n[Ft] = _n++)
          const i = 255 & r,
            s = 1 << i,
            o = 64 & i,
            a = 32 & i,
            l = e.data
          128 & i
            ? o
              ? a
                ? (l[t + 7] |= s)
                : (l[t + 6] |= s)
              : a
              ? (l[t + 5] |= s)
              : (l[t + 4] |= s)
            : o
            ? a
              ? (l[t + 3] |= s)
              : (l[t + 2] |= s)
            : a
            ? (l[t + 1] |= s)
            : (l[t] |= s)
        })(t, e, n)
      }
      function En(t, e, n) {
        if (n & mt.Optional) return t
        se(e, 'NodeInjector')
      }
      function kn(t, e, n, r) {
        if (
          (n & mt.Optional && void 0 === r && (r = null),
          0 == (n & (mt.Self | mt.Host)))
        ) {
          const i = t[9],
            s = yt(void 0)
          try {
            return i ? i.get(e, r, n & mt.Optional) : _t(e, r, n & mt.Optional)
          } finally {
            yt(s)
          }
        }
        return En(r, e, n)
      }
      function xn(t, e, n, r = mt.Default, i) {
        if (null !== t) {
          const s = (function (t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0
            const e = t.hasOwnProperty(Ft) ? t[Ft] : void 0
            return 'number' == typeof e ? (e >= 0 ? 255 & e : In) : e
          })(n)
          if ('function' == typeof s) {
            if (!He(e, t, r)) return r & mt.Host ? En(i, n, r) : kn(e, n, r, i)
            try {
              const t = s()
              if (null != t || r & mt.Optional) return t
              se(n)
            } finally {
              Qe()
            }
          } else if ('number' == typeof s) {
            let i = null,
              o = wn(t, e),
              a = on,
              l = r & mt.Host ? e[16][6] : null
            for (
              (-1 === o || r & mt.SkipSelf) &&
              ((a = -1 === o ? Sn(t, e) : e[o + 8]),
              a !== on && Dn(r, !1)
                ? ((i = e[1]), (o = fn(a)), (e = mn(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1]
              if (Pn(s, o, t.data)) {
                const t = An(o, e, n, i, r, l)
                if (t !== Tn) return t
              }
              ;(a = e[o + 8]),
                a !== on && Dn(r, e[1].data[o + 8] === l) && Pn(s, o, e)
                  ? ((i = t), (o = fn(a)), (e = mn(a, e)))
                  : (o = -1)
            }
          }
        }
        return kn(e, n, r, i)
      }
      const Tn = {}
      function In() {
        return new Mn(Oe(), Te())
      }
      function An(t, e, n, r, i, s) {
        const o = e[1],
          a = o.data[t + 8],
          l = On(
            a,
            o,
            n,
            null == r ? Xt(a) && gn : r != o && 0 != (3 & a.type),
            i & mt.Host && s === a
          )
        return null !== l ? Rn(e, o, l, a) : Tn
      }
      function On(t, e, n, r, i) {
        const s = t.providerIndexes,
          o = e.data,
          a = 1048575 & s,
          l = t.directiveStart,
          c = s >> 20,
          u = i ? a + c : t.directiveEnd
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h]
          if ((h < l && n === t) || (h >= l && t.type === n)) return h
        }
        if (i) {
          const t = o[l]
          if (t && te(t) && t.type === n) return l
        }
        return null
      }
      function Rn(t, e, n, r) {
        let i = t[n]
        const s = e.data
        if (i instanceof an) {
          const o = i
          o.resolving &&
            (function (t, e) {
              throw new ne('200', 'Circular dependency in DI detected for ' + t)
            })(ie(s[n]))
          const a = yn(o.canSeeViewProviders)
          o.resolving = !0
          const l = o.injectImpl ? yt(o.injectImpl) : null
          He(t, r, mt.Default)
          try {
            ;(i = t[n] = o.factory(void 0, s, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: s,
                  } = e.type.prototype
                  if (r) {
                    const r =
                      ((o = e).type.prototype.ngOnChanges && (o.setInput = le),
                      ae)
                    ;(n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r)
                  }
                  var o
                  i &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, i),
                    s &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, s))
                })(n, s[n], e)
          } finally {
            null !== l && yt(l), yn(a), (o.resolving = !1), Qe()
          }
        }
        return i
      }
      function Pn(t, e, n) {
        const r = 64 & t,
          i = 32 & t
        let s
        return (
          (s =
            128 & t
              ? r
                ? i
                  ? n[e + 7]
                  : n[e + 6]
                : i
                ? n[e + 5]
                : n[e + 4]
              : r
              ? i
                ? n[e + 3]
                : n[e + 2]
              : i
              ? n[e + 1]
              : n[e]),
          !!(s & (1 << t))
        )
      }
      function Dn(t, e) {
        return !(t & mt.Self || (t & mt.Host && e))
      }
      class Mn {
        constructor(t, e) {
          ;(this._tNode = t), (this._lView = e)
        }
        get(t, e) {
          return xn(this._tNode, this._lView, t, void 0, e)
        }
      }
      function Fn(t) {
        return (function (t, e) {
          if ('class' === e) return t.classes
          if ('style' === e) return t.styles
          const n = t.attrs
          if (n) {
            const t = n.length
            let r = 0
            for (; r < t; ) {
              const i = n[r]
              if (cn(i)) break
              if (0 === i) r += 2
              else if ('number' == typeof i)
                for (r++; r < t && 'string' == typeof n[r]; ) r++
              else {
                if (i === e) return n[r + 1]
                r += 2
              }
            }
          }
          return null
        })(Oe(), t)
      }
      const Nn = '__parameters__'
      function jn(t, e, n) {
        return vt(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e)
                for (const t in n) this[t] = n[t]
              }
            }
          })(e)
          function i(...t) {
            if (this instanceof i) return r.apply(this, t), this
            const e = new i(...t)
            return (n.annotation = e), n
            function n(t, n, r) {
              const i = t.hasOwnProperty(Nn)
                ? t[Nn]
                : Object.defineProperty(t, Nn, { value: [] })[Nn]
              for (; i.length <= r; ) i.push(null)
              return (i[r] = i[r] || []).push(e), t
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = t),
            (i.annotationCls = i),
            i
          )
        })
      }
      class zn {
        constructor(t, e) {
          ;(this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = ot({
                  token: this,
                  providedIn: e.providedIn || 'root',
                  factory: e.factory,
                }))
        }
        toString() {
          return 'InjectionToken ' + this._desc
        }
      }
      const Ln = new zn('AnalyzeForEntryComponents'),
        Un = Function
      function Bn(t, e) {
        void 0 === e && (e = t)
        for (let n = 0; n < t.length; n++) {
          let r = t[n]
          Array.isArray(r)
            ? (e === t && (e = t.slice(0, n)), Bn(r, e))
            : e !== t && e.push(r)
        }
        return e
      }
      function qn(t, e) {
        t.forEach((t) => (Array.isArray(t) ? qn(t, e) : e(t)))
      }
      function Hn(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n)
      }
      function Vn(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
      }
      function $n(t, e) {
        const n = []
        for (let r = 0; r < t; r++) n.push(e)
        return n
      }
      function Wn(t, e, n) {
        let r = Qn(t, e)
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let i = t.length
                if (i == e) t.push(n, r)
                else if (1 === i) t.push(r, t[0]), (t[0] = n)
                else {
                  for (i--, t.push(t[i - 1], t[i]); i > e; )
                    (t[i] = t[i - 2]), i--
                  ;(t[e] = n), (t[e + 1] = r)
                }
              })(t, r, e, n)),
          r
        )
      }
      function Kn(t, e) {
        const n = Qn(t, e)
        if (n >= 0) return t[1 | n]
      }
      function Qn(t, e) {
        return (function (t, e, n) {
          let r = 0,
            i = t.length >> 1
          for (; i !== r; ) {
            const n = r + ((i - r) >> 1),
              s = t[n << 1]
            if (e === s) return n << 1
            s > e ? (i = n) : (r = n + 1)
          }
          return ~(i << 1)
        })(t, e)
      }
      const Gn = jn('Inject', (t) => ({ token: t })),
        Zn = jn('Optional'),
        Yn = jn('Self'),
        Xn = jn('SkipSelf'),
        Jn = {},
        tr = /\n/gm,
        er = '__source',
        nr = J({ provide: String, useValue: J })
      let rr = void 0
      function ir(t) {
        const e = rr
        return (rr = t), e
      }
      function sr(t, e = mt.Default) {
        if (void 0 === rr)
          throw new Error('inject() must be called from an injection context')
        return null === rr
          ? _t(t, void 0, e)
          : rr.get(t, e & mt.Optional ? null : void 0, e)
      }
      function or(t, e = mt.Default) {
        return (gt || sr)(st(t), e)
      }
      const ar = or
      function lr(t) {
        const e = []
        for (let n = 0; n < t.length; n++) {
          const r = st(t[n])
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.')
            let t = void 0,
              n = mt.Default
            for (let e = 0; e < r.length; e++) {
              const i = r[e]
              i instanceof Zn || 'Optional' === i.ngMetadataName || i === Zn
                ? (n |= mt.Optional)
                : i instanceof Xn || 'SkipSelf' === i.ngMetadataName || i === Xn
                ? (n |= mt.SkipSelf)
                : i instanceof Yn || 'Self' === i.ngMetadataName || i === Yn
                ? (n |= mt.Self)
                : (t = i instanceof Gn || i === Gn ? i.token : i)
            }
            e.push(or(t, n))
          } else e.push(or(r))
        }
        return e
      }
      let cr
      function ur(t) {
        var e
        return (
          (null ===
            (e = (function () {
              if (void 0 === cr && ((cr = null), xt.trustedTypes))
                try {
                  cr = xt.trustedTypes.createPolicy('angular', {
                    createHTML: (t) => t,
                    createScript: (t) => t,
                    createScriptURL: (t) => t,
                  })
                } catch (e) {}
              return cr
            })()) || void 0 === e
            ? void 0
            : e.createHTML(t)) || t
        )
      }
      class hr {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see https://g.co/ng/security#xss)'
          )
        }
      }
      class dr extends hr {
        getTypeName() {
          return 'HTML'
        }
      }
      class pr extends hr {
        getTypeName() {
          return 'Style'
        }
      }
      class fr extends hr {
        getTypeName() {
          return 'Script'
        }
      }
      class mr extends hr {
        getTypeName() {
          return 'URL'
        }
      }
      class gr extends hr {
        getTypeName() {
          return 'ResourceURL'
        }
      }
      function yr(t) {
        return t instanceof hr ? t.changingThisBreaksApplicationSecurity : t
      }
      function _r(t, e) {
        const n = vr(t)
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0
          throw new Error(
            `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`
          )
        }
        return n === e
      }
      function vr(t) {
        return (t instanceof hr && t.getTypeName()) || null
      }
      class br {
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t
          try {
            const e = new window.DOMParser().parseFromString(ur(t), 'text/html')
              .body
            return e.removeChild(e.firstChild), e
          } catch (e) {
            return null
          }
        }
      }
      class wr {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            null == this.inertDocument.body)
          ) {
            const t = this.inertDocument.createElement('html')
            this.inertDocument.appendChild(t)
            const e = this.inertDocument.createElement('body')
            t.appendChild(e)
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement('template')
          if ('content' in e) return (e.innerHTML = ur(t)), e
          const n = this.inertDocument.createElement('body')
          return (
            (n.innerHTML = ur(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          )
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name
            ;('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              t.removeAttribute(n)
          }
          let n = t.firstChild
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling)
        }
      }
      const Sr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Cr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i
      function Er(t) {
        return (t = String(t)).match(Sr) || t.match(Cr) ? t : 'unsafe:' + t
      }
      function kr(t) {
        const e = {}
        for (const n of t.split(',')) e[n] = !0
        return e
      }
      function xr(...t) {
        const e = {}
        for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0)
        return e
      }
      const Tr = kr('area,br,col,hr,img,wbr'),
        Ir = kr('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Ar = kr('rp,rt'),
        Or = xr(Ar, Ir),
        Rr = xr(
          Tr,
          xr(
            Ir,
            kr(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          xr(
            Ar,
            kr(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Or
        ),
        Pr = kr('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Dr = kr('srcset'),
        Mr = xr(
          Pr,
          Dr,
          kr(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          kr(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Fr = kr('script,style,template')
      class Nr {
        constructor() {
          ;(this.sanitizedSomething = !1), (this.buf = [])
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e)
                let t = this.checkClobberedElement(e, e.nextSibling)
                if (t) {
                  e = t
                  break
                }
                e = this.checkClobberedElement(e, e.parentNode)
              }
          return this.buf.join('')
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase()
          if (!Rr.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !Fr.hasOwnProperty(e)
          this.buf.push('<'), this.buf.push(e)
          const n = t.attributes
          for (let i = 0; i < n.length; i++) {
            const t = n.item(i),
              e = t.name,
              s = e.toLowerCase()
            if (!Mr.hasOwnProperty(s)) {
              this.sanitizedSomething = !0
              continue
            }
            let o = t.value
            Pr[s] && (o = Er(o)),
              Dr[s] &&
                ((r = o),
                (o = (r = String(r))
                  .split(',')
                  .map((t) => Er(t.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', Lr(o), '"')
          }
          var r
          return this.buf.push('>'), !0
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase()
          Rr.hasOwnProperty(e) &&
            !Tr.hasOwnProperty(e) &&
            (this.buf.push('</'), this.buf.push(e), this.buf.push('>'))
        }
        chars(t) {
          this.buf.push(Lr(t))
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              'Failed to sanitize html because the element is clobbered: ' +
                t.outerHTML
            )
          return e
        }
      }
      const jr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        zr = /([^\#-~ |!])/g
      function Lr(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(jr, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            )
          })
          .replace(zr, function (t) {
            return '&#' + t.charCodeAt(0) + ';'
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
      }
      let Ur
      function Br(t) {
        return 'content' in t &&
          (function (t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName
          })(t)
          ? t.content
          : null
      }
      var qr = (function (t) {
        return (
          (t[(t.NONE = 0)] = 'NONE'),
          (t[(t.HTML = 1)] = 'HTML'),
          (t[(t.STYLE = 2)] = 'STYLE'),
          (t[(t.SCRIPT = 3)] = 'SCRIPT'),
          (t[(t.URL = 4)] = 'URL'),
          (t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          t
        )
      })({})
      function Hr(t) {
        const e = (function () {
          const t = Te()
          return t && t[12]
        })()
        return e
          ? e.sanitize(qr.URL, t) || ''
          : _r(t, 'URL')
          ? yr(t)
          : Er(re(t))
      }
      function Vr(t) {
        return t.ngDebugContext
      }
      function $r(t) {
        return t.ngOriginalError
      }
      function Wr(t, ...e) {
        t.error(...e)
      }
      class Kr {
        constructor() {
          this._console = console
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || Wr
            })(t)
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n)
        }
        _findContext(t) {
          return t ? (Vr(t) ? Vr(t) : this._findContext($r(t))) : null
        }
        _findOriginalError(t) {
          let e = $r(t)
          for (; e && $r(e); ) e = $r(e)
          return e
        }
      }
      function Qr(t, e) {
        t.__ngContext__ = e
      }
      const Gr = (() =>
        (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(xt))()
      function Zr(t) {
        return { name: 'document', target: t.ownerDocument }
      }
      function Yr(t) {
        return t instanceof Function ? t() : t
      }
      var Xr = (function (t) {
        return (
          (t[(t.Important = 1)] = 'Important'),
          (t[(t.DashCase = 2)] = 'DashCase'),
          t
        )
      })({})
      function Jr(t, e) {
        return (void 0)(t, e)
      }
      function ti(t) {
        const e = t[3]
        return Zt(e) ? e[3] : e
      }
      function ei(t) {
        return ri(t[13])
      }
      function ni(t) {
        return ri(t[4])
      }
      function ri(t) {
        for (; null !== t && !Zt(t); ) t = t[4]
        return t
      }
      function ii(t, e, n, r, i) {
        if (null != r) {
          let s,
            o = !1
          Zt(r) ? (s = r) : Gt(r) && ((o = !0), (r = r[0]))
          const a = pe(r)
          0 === t && null !== n
            ? null == i
              ? di(e, n, a)
              : hi(e, n, a, i || null, !0)
            : 1 === t && null !== n
            ? hi(e, n, a, i || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = fi(t, e)
                r &&
                  (function (t, e, n, r) {
                    he(t) ? t.removeChild(e, n, r) : e.removeChild(n)
                  })(t, r, e, n)
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != s &&
              (function (t, e, n, r, i) {
                const s = n[7]
                s !== pe(n) && ii(e, t, r, s, i)
                for (let o = Qt; o < n.length; o++) {
                  const i = n[o]
                  wi(i[1], i, t, e, r, s)
                }
              })(e, t, s, n, i)
        }
      }
      function si(t, e, n) {
        return he(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e)
      }
      function oi(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          i = e[3]
        1024 & e[2] && ((e[2] &= -1025), Ee(i, -1)), n.splice(r, 1)
      }
      function ai(t, e) {
        if (t.length <= Qt) return
        const n = Qt + e,
          r = t[n]
        if (r) {
          const s = r[17]
          null !== s && s !== t && oi(s, r), e > 0 && (t[n - 1][4] = r[4])
          const o = Vn(t, Qt + e)
          wi(r[1], (i = r), i[11], 2, null, null), (i[0] = null), (i[6] = null)
          const a = o[19]
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129)
        }
        var i
        return r
      }
      function li(t, e) {
        if (!(256 & e[2])) {
          const n = e[11]
          he(n) && n.destroyNode && wi(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13]
              if (!e) return ci(t[1], t)
              for (; e; ) {
                let n = null
                if (Gt(e)) n = e[13]
                else {
                  const t = e[10]
                  t && (n = t)
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Gt(e) && ci(e[1], e), (e = e[3])
                  null === e && (e = t), Gt(e) && ci(e[1], e), (n = e && e[4])
                }
                e = n
              }
            })(e)
        }
      }
      function ci(t, e) {
        if (!(256 & e[2])) {
          ;(e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]]
                  if (!(t instanceof an)) {
                    const e = n[r + 1]
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]])
                    else e.call(t)
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7]
              let i = -1
              if (null !== n) {
                for (let t = 0; t < n.length - 1; t += 2)
                  if ('string' == typeof n[t]) {
                    const s = n[t + 1],
                      o = 'function' == typeof s ? s(e) : pe(e[s]),
                      a = r[(i = n[t + 2])],
                      l = n[t + 3]
                    'boolean' == typeof l
                      ? o.removeEventListener(n[t], a, l)
                      : l >= 0
                      ? r[(i = l)]()
                      : r[(i = -l)].unsubscribe(),
                      (t += 2)
                  } else {
                    const e = r[(i = n[t + 1])]
                    n[t].call(e)
                  }
                if (null !== r)
                  for (let t = i + 1; t < r.length; t++) (0, r[t])()
                e[7] = null
              }
            })(t, e),
            1 === e[1].type && he(e[11]) && e[11].destroy()
          const n = e[17]
          if (null !== n && Zt(e[3])) {
            n !== e[3] && oi(n, e)
            const r = e[19]
            null !== r && r.detachView(t)
          }
        }
      }
      function ui(t, e, n) {
        return (function (t, e, n) {
          let r = e
          for (; null !== r && 40 & r.type; ) r = (e = r).parent
          if (null === r) return n[0]
          if (2 & r.flags) {
            const e = t.data[r.directiveStart].encapsulation
            if (e === wt.None || e === wt.Emulated) return null
          }
          return me(r, n)
        })(t, e.parent, n)
      }
      function hi(t, e, n, r, i) {
        he(t) ? t.insertBefore(e, n, r, i) : e.insertBefore(n, r, i)
      }
      function di(t, e, n) {
        he(t) ? t.appendChild(e, n) : e.appendChild(n)
      }
      function pi(t, e, n, r, i) {
        null !== r ? hi(t, e, n, r, i) : di(t, e, n)
      }
      function fi(t, e) {
        return he(t) ? t.parentNode(e) : e.parentNode
      }
      function mi(t, e, n) {
        return gi(t, e, n)
      }
      let gi = function (t, e, n) {
        return 40 & t.type ? me(t, n) : null
      }
      function yi(t, e, n, r) {
        const i = ui(t, r, e),
          s = e[11],
          o = mi(r.parent || e[6], r, e)
        if (null != i)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) pi(s, i, n[a], o, !1)
          else pi(s, i, n, o, !1)
      }
      function _i(t, e) {
        if (null !== e) {
          const n = e.type
          if (3 & n) return me(e, t)
          if (4 & n) return vi(-1, t[e.index])
          if (8 & n) {
            const n = e.child
            if (null !== n) return _i(t, n)
            {
              const n = t[e.index]
              return Zt(n) ? vi(-1, n) : pe(n)
            }
          }
          if (32 & n) return Jr(e, t)() || pe(t[e.index])
          {
            const n = t[16],
              r = n[6],
              i = ti(n),
              s = r.projection[e.projection]
            return null != s ? _i(i, s) : _i(t, e.next)
          }
        }
        return null
      }
      function vi(t, e) {
        const n = Qt + t + 1
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild
          if (null !== r) return _i(t, r)
        }
        return e[7]
      }
      function bi(t, e, n, r, i, s, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type
          if (
            (o && 0 === e && (a && Qr(pe(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) bi(t, e, n.child, r, i, s, !1), ii(e, t, i, a, s)
            else if (32 & l) {
              const o = Jr(n, r)
              let l
              for (; (l = o()); ) ii(e, t, i, l, s)
              ii(e, t, i, a, s)
            } else 16 & l ? Si(t, e, r, n, i, s) : ii(e, t, i, a, s)
          n = o ? n.projectionNext : n.next
        }
      }
      function wi(t, e, n, r, i, s) {
        bi(n, r, t.firstChild, e, i, s, !1)
      }
      function Si(t, e, n, r, i, s) {
        const o = n[16],
          a = o[6].projection[r.projection]
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) ii(e, t, i, a[l], s)
        else bi(t, e, a, o[3], i, s, !0)
      }
      function Ci(t, e, n) {
        he(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n)
      }
      function Ei(t, e, n) {
        he(t)
          ? '' === n
            ? t.removeAttribute(e, 'class')
            : t.setAttribute(e, 'class', n)
          : (e.className = n)
      }
      function ki(t, e, n) {
        let r = t.length
        for (;;) {
          const i = t.indexOf(e, n)
          if (-1 === i) return i
          if (0 === i || t.charCodeAt(i - 1) <= 32) {
            const n = e.length
            if (i + n === r || t.charCodeAt(i + n) <= 32) return i
          }
          n = i + 1
        }
      }
      const xi = 'ng-template'
      function Ti(t, e, n) {
        let r = 0
        for (; r < t.length; ) {
          let i = t[r++]
          if (n && 'class' === i) {
            if (((i = t[r]), -1 !== ki(i.toLowerCase(), e, 0))) return !0
          } else if (1 === i) {
            for (; r < t.length && 'string' == typeof (i = t[r++]); )
              if (i.toLowerCase() === e) return !0
            return !1
          }
        }
        return !1
      }
      function Ii(t) {
        return 4 === t.type && t.value !== xi
      }
      function Ai(t, e, n) {
        return e === (4 !== t.type || n ? t.value : xi)
      }
      function Oi(t, e, n) {
        let r = 4
        const i = t.attrs || [],
          s = (function (t) {
            for (let e = 0; e < t.length; e++) if (cn(t[e])) return e
            return t.length
          })(i)
        let o = !1
        for (let a = 0; a < e.length; a++) {
          const l = e[a]
          if ('number' != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== l && !Ai(t, l, n)) || ('' === l && 1 === e.length))
                ) {
                  if (Ri(r)) return !1
                  o = !0
                }
              } else {
                const c = 8 & r ? l : e[++a]
                if (8 & r && null !== t.attrs) {
                  if (!Ti(t.attrs, c, n)) {
                    if (Ri(r)) return !1
                    o = !0
                  }
                  continue
                }
                const u = Pi(8 & r ? 'class' : l, i, Ii(t), n)
                if (-1 === u) {
                  if (Ri(r)) return !1
                  o = !0
                  continue
                }
                if ('' !== c) {
                  let t
                  t = u > s ? '' : i[u + 1].toLowerCase()
                  const e = 8 & r ? t : null
                  if ((e && -1 !== ki(e, c, 0)) || (2 & r && c !== t)) {
                    if (Ri(r)) return !1
                    o = !0
                  }
                }
              }
          } else {
            if (!o && !Ri(r) && !Ri(l)) return !1
            if (o && Ri(l)) continue
            ;(o = !1), (r = l | (1 & r))
          }
        }
        return Ri(r) || o
      }
      function Ri(t) {
        return 0 == (1 & t)
      }
      function Pi(t, e, n, r) {
        if (null === e) return -1
        let i = 0
        if (r || !n) {
          let n = !1
          for (; i < e.length; ) {
            const r = e[i]
            if (r === t) return i
            if (3 === r || 6 === r) n = !0
            else {
              if (1 === r || 2 === r) {
                let t = e[++i]
                for (; 'string' == typeof t; ) t = e[++i]
                continue
              }
              if (4 === r) break
              if (0 === r) {
                i += 4
                continue
              }
            }
            i += n ? 1 : 2
          }
          return -1
        }
        return (function (t, e) {
          let n = t.indexOf(4)
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n]
              if ('number' == typeof r) return -1
              if (r === e) return n
              n++
            }
          return -1
        })(e, t)
      }
      function Di(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (Oi(t, e[r], n)) return !0
        return !1
      }
      function Mi(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n]
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t
            return !0
          }
        }
        return !1
      }
      function Fi(t, e) {
        return t ? ':not(' + e.trim() + ')' : e
      }
      function Ni(t) {
        let e = t[0],
          n = 1,
          r = 2,
          i = '',
          s = !1
        for (; n < t.length; ) {
          let o = t[n]
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n]
              i += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']'
            } else 8 & r ? (i += '.' + o) : 4 & r && (i += ' ' + o)
          else
            '' === i || Ri(o) || ((e += Fi(s, i)), (i = '')),
              (r = o),
              (s = s || !Ri(r))
          n++
        }
        return '' !== i && (e += Fi(s, i)), e
      }
      const ji = {}
      function zi(t) {
        Li(Ie(), Te(), Ze() + t, Fe())
      }
      function Li(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks
            null !== r && tn(e, r, n)
          } else {
            const r = t.preOrderHooks
            null !== r && en(e, r, 0, n)
          }
        Ye(n)
      }
      function Ui(t, e) {
        return (t << 17) | (e << 2)
      }
      function Bi(t) {
        return (t >> 17) & 32767
      }
      function qi(t) {
        return 2 | t
      }
      function Hi(t) {
        return (131068 & t) >> 2
      }
      function Vi(t, e) {
        return (-131069 & t) | (e << 2)
      }
      function $i(t) {
        return 1 | t
      }
      function Wi(t, e) {
        const n = t.contentQueries
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r],
              s = n[r + 1]
            if (-1 !== s) {
              const n = t.data[s]
              Be(i), n.contentQueries(2, e[s], s)
            }
          }
      }
      function Ki(t, e, n, r, i, s, o, a, l, c) {
        const u = e.blueprint.slice()
        return (
          (u[0] = i),
          (u[2] = 140 | r),
          Ce(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = s),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        )
      }
      function Qi(t, e, n, r, i) {
        let s = t.data[e]
        if (null === s)
          (s = (function (t, e, n, r, i) {
            const s = Re(),
              o = De(),
              a = (t.data[e] = (function (t, e, n, r, i, s) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: e ? e.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: i,
                  attrs: s,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: e,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                }
              })(0, o ? s : s && s.parent, n, e, r, i))
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== s &&
                (o
                  ? null == s.child && null !== a.parent && (s.child = a)
                  : null === s.next && (s.next = a)),
              a
            )
          })(t, e, n, r, i)),
            ke.lFrame.inI18n && (s.flags |= 64)
        else if (64 & s.type) {
          ;(s.type = n), (s.value = r), (s.attrs = i)
          const t = (function () {
            const t = ke.lFrame,
              e = t.currentTNode
            return t.isParent ? e : e.parent
          })()
          s.injectorIndex = null === t ? -1 : t.injectorIndex
        }
        return Pe(s, !0), s
      }
      function Gi(t, e, n, r) {
        if (0 === n) return -1
        const i = e.length
        for (let s = 0; s < n; s++)
          e.push(r), t.blueprint.push(r), t.data.push(null)
        return i
      }
      function Zi(t, e, n) {
        Ve(e)
        try {
          const r = t.viewQuery
          null !== r && xs(1, r, n)
          const i = t.template
          null !== i && Ji(t, e, i, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Wi(t, e),
            t.staticViewQueries && xs(2, t.viewQuery, n)
          const s = t.components
          null !== s &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) ws(t, e[n])
            })(e, s)
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r)
        } finally {
          ;(e[2] &= -5), Ge()
        }
      }
      function Yi(t, e, n, r) {
        const i = e[2]
        if (256 == (256 & i)) return
        Ve(e)
        const s = Fe()
        try {
          Ce(e),
            (ke.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Ji(t, e, n, 2, r)
          const o = 3 == (3 & i)
          if (!s)
            if (o) {
              const n = t.preOrderCheckHooks
              null !== n && tn(e, n, null)
            } else {
              const n = t.preOrderHooks
              null !== n && en(e, n, 0, null), nn(e, 0)
            }
          if (
            ((function (t) {
              for (let e = ei(t); null !== e; e = ni(e)) {
                if (!e[2]) continue
                const t = e[9]
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3]
                  0 == (1024 & n[2]) && Ee(r, 1), (n[2] |= 1024)
                }
              }
            })(e),
            (function (t) {
              for (let e = ei(t); null !== e; e = ni(e))
                for (let t = Qt; t < e.length; t++) {
                  const n = e[t],
                    r = n[1]
                  we(n) && Yi(r, n, r.template, n[8])
                }
            })(e),
            null !== t.contentQueries && Wi(t, e),
            !s)
          )
            if (o) {
              const n = t.contentCheckHooks
              null !== n && tn(e, n)
            } else {
              const n = t.contentHooks
              null !== n && en(e, n, 1), nn(e, 1)
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t]
                  if (r < 0) Ye(~r)
                  else {
                    const i = r,
                      s = n[++t],
                      o = n[++t]
                    ze(s, i), o(2, e[i])
                  }
                }
              } finally {
                Ye(-1)
              }
          })(t, e)
          const a = t.components
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) vs(t, e[n])
            })(e, a)
          const l = t.viewQuery
          if ((null !== l && xs(2, l, r), !s))
            if (o) {
              const n = t.viewCheckHooks
              null !== n && tn(e, n)
            } else {
              const n = t.viewHooks
              null !== n && en(e, n, 2), nn(e, 2)
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            s || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ee(e[3], -1))
        } finally {
          Ge()
        }
      }
      function Xi(t, e, n, r) {
        const i = e[10],
          s = !Fe(),
          o = be(e)
        try {
          s && !o && i.begin && i.begin(), o && Zi(t, e, r), Yi(t, e, n, r)
        } finally {
          s && !o && i.end && i.end()
        }
      }
      function Ji(t, e, n, r, i) {
        const s = Ze()
        try {
          Ye(-1), 2 & r && e.length > Kt && Li(t, e, Kt, Fe()), n(r, i)
        } finally {
          Ye(s)
        }
      }
      function ts(t, e, n) {
        if (Yt(e)) {
          const r = e.directiveEnd
          for (let i = e.directiveStart; i < r; i++) {
            const e = t.data[i]
            e.contentQueries && e.contentQueries(1, n[i], i)
          }
        }
      }
      function es(t, e, n) {
        xe() &&
          ((function (t, e, n, r) {
            const i = n.directiveStart,
              s = n.directiveEnd
            t.firstCreatePass || vn(n, e), Qr(r, e)
            const o = n.initialInputs
            for (let a = i; a < s; a++) {
              const r = t.data[a],
                s = te(r)
              s && ms(e, n, r)
              const l = Rn(e, t, a, n)
              Qr(l, e),
                null !== o && gs(0, a - i, l, r, 0, o),
                s && (_e(n.index, e)[8] = l)
            }
          })(t, e, n, me(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                i = n.directiveEnd,
                s = n.index,
                o = ke.lFrame.currentDirectiveIndex
              try {
                Ye(s)
                for (let n = r; n < i; n++) {
                  const r = t.data[n],
                    i = e[n]
                  Le(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      us(r, i)
                }
              } finally {
                Ye(-1), Le(o)
              }
            })(t, e, n))
      }
      function ns(t, e, n = me) {
        const r = e.localNames
        if (null !== r) {
          let i = e.index + 1
          for (let s = 0; s < r.length; s += 2) {
            const o = r[s + 1],
              a = -1 === o ? n(e, t) : t[o]
            t[i++] = a
          }
        }
      }
      function rs(t) {
        const e = t.tView
        return null === e || e.incompleteFirstPass
          ? (t.tView = is(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e
      }
      function is(t, e, n, r, i, s, o, a, l, c) {
        const u = Kt + r,
          h = u + i,
          d = (function (t, e) {
            const n = []
            for (let r = 0; r < e; r++) n.push(r < t ? null : ji)
            return n
          })(u, h),
          p = 'function' == typeof c ? c() : c
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof s ? s() : s,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        })
      }
      function ss(t, e, n, r) {
        const i = Is(e)
        null === n
          ? i.push(r)
          : (i.push(n), t.firstCreatePass && As(t).push(r, i.length - 1))
      }
      function os(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const i = t[r]
            ;(n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, i)
              : (n[r] = [e, i])
          }
        return n
      }
      function as(t, e, n, r, i, s, o, a) {
        const l = me(e, n)
        let c,
          u = e.inputs
        var h
        !a && null != u && (c = u[r])
          ? (Rs(t, n, c, r, i),
            Xt(e) &&
              (function (t, e) {
                const n = _e(e, t)
                16 & n[2] || (n[2] |= 64)
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              'class' === (h = r)
                ? 'className'
                : 'for' === h
                ? 'htmlFor'
                : 'formaction' === h
                ? 'formAction'
                : 'innerHtml' === h
                ? 'innerHTML'
                : 'readonly' === h
                ? 'readOnly'
                : 'tabindex' === h
                ? 'tabIndex'
                : h),
            (i = null != o ? o(i, e.value || '', r) : i),
            he(s)
              ? s.setProperty(l, r, i)
              : un(r) || (l.setProperty ? l.setProperty(r, i) : (l[r] = i)))
      }
      function ls(t, e, n, r) {
        let i = !1
        if (xe()) {
          const s = (function (t, e, n) {
              const r = t.directiveRegistry
              let i = null
              if (r)
                for (let s = 0; s < r.length; s++) {
                  const o = r[s]
                  Di(n, o.selectors, !1) &&
                    (i || (i = []),
                    Cn(vn(n, e), t, o.type),
                    te(o) ? (hs(t, n), i.unshift(o)) : i.push(o))
                }
              return i
            })(t, e, n),
            o = null === r ? null : { '': -1 }
          if (null !== s) {
            ;(i = !0), ps(n, t.data.length, s.length)
            for (let t = 0; t < s.length; t++) {
              const e = s[t]
              e.providersResolver && e.providersResolver(e)
            }
            let r = !1,
              a = !1,
              l = Gi(t, e, s.length, null)
            for (let i = 0; i < s.length; i++) {
              const c = s[i]
              ;(n.mergedAttrs = hn(n.mergedAttrs, c.hostAttrs)),
                fs(t, n, e, l, c),
                ds(l, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128)
              const u = c.type.prototype
              !r &&
                (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!u.ngOnChanges && !u.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                l++
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                i = e.attrs,
                s = []
              let o = null,
                a = null
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  c = null === i || Ii(e) ? null : ys(n, i)
                s.push(c), (o = os(n, l, o)), (a = os(t.outputs, l, a))
              }
              null !== o &&
                (o.hasOwnProperty('class') && (e.flags |= 16),
                o.hasOwnProperty('style') && (e.flags |= 32)),
                (e.initialInputs = s),
                (e.inputs = o),
                (e.outputs = a)
            })(t, n)
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = [])
                for (let t = 0; t < e.length; t += 2) {
                  const i = n[e[t + 1]]
                  if (null == i)
                    throw new ne(
                      '301',
                      `Export of name '${e[t + 1]}' not found!`
                    )
                  r.push(e[t], i)
                }
              }
            })(n, r, o)
        }
        return (n.mergedAttrs = hn(n.mergedAttrs, n.attrs)), i
      }
      function cs(t, e, n, r, i, s) {
        const o = s.hostBindings
        if (o) {
          let n = t.hostBindingOpCodes
          null === n && (n = t.hostBindingOpCodes = [])
          const s = ~e.index
          ;(function (t) {
            let e = t.length
            for (; e > 0; ) {
              const n = t[--e]
              if ('number' == typeof n && n < 0) return n
            }
            return 0
          })(n) != s && n.push(s),
            n.push(r, i, o)
        }
      }
      function us(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e)
      }
      function hs(t, e) {
        ;(e.flags |= 2), (t.components || (t.components = [])).push(e.index)
      }
      function ds(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t
          te(e) && (n[''] = t)
        }
      }
      function ps(t, e, n) {
        ;(t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e)
      }
      function fs(t, e, n, r, i) {
        t.data[r] = i
        const s = i.factory || (i.factory = ee(i.type)),
          o = new an(s, te(i), null)
        ;(t.blueprint[r] = o),
          (n[r] = o),
          cs(t, e, 0, r, Gi(t, n, i.hostVars, ji), i)
      }
      function ms(t, e, n) {
        const r = me(e, t),
          i = rs(n),
          s = t[10],
          o = Ss(
            t,
            Ki(
              t,
              i,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              s,
              s.createRenderer(r, n),
              null,
              null
            )
          )
        t[e.index] = o
      }
      function gs(t, e, n, r, i, s) {
        const o = s[e]
        if (null !== o) {
          const t = r.setInput
          for (let e = 0; e < o.length; ) {
            const i = o[e++],
              s = o[e++],
              a = o[e++]
            null !== t ? r.setInput(n, a, i, s) : (n[s] = a)
          }
        }
      }
      function ys(t, e) {
        let n = null,
          r = 0
        for (; r < e.length; ) {
          const i = e[r]
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break
              t.hasOwnProperty(i) &&
                (null === n && (n = []), n.push(i, t[i], e[r + 1])),
                (r += 2)
            } else r += 2
          else r += 4
        }
        return n
      }
      function _s(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null)
      }
      function vs(t, e) {
        const n = _e(e, t)
        if (we(n)) {
          const t = n[1]
          80 & n[2] ? Yi(t, n, t.template, n[8]) : n[5] > 0 && bs(n)
        }
      }
      function bs(t) {
        for (let n = ei(t); null !== n; n = ni(n))
          for (let t = Qt; t < n.length; t++) {
            const e = n[t]
            if (1024 & e[2]) {
              const t = e[1]
              Yi(t, e, t.template, e[8])
            } else e[5] > 0 && bs(e)
          }
        const e = t[1].components
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = _e(e[n], t)
            we(r) && r[5] > 0 && bs(r)
          }
      }
      function ws(t, e) {
        const n = _e(e, t),
          r = n[1]
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n])
        })(r, n),
          Zi(r, n, n[8])
      }
      function Ss(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e
      }
      function Cs(t) {
        for (; t; ) {
          t[2] |= 64
          const e = ti(t)
          if (0 != (512 & t[2]) && !e) return t
          t = e
        }
        return null
      }
      function Es(t, e, n) {
        const r = e[10]
        r.begin && r.begin()
        try {
          Yi(t, e, t.template, n)
        } catch (i) {
          throw (Os(e, i), i)
        } finally {
          r.end && r.end()
        }
      }
      function ks(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = ve(n),
              i = r[1]
            Xi(i, r, i.template, n)
          }
        })(t[8])
      }
      function xs(t, e, n) {
        Be(0), e(t, n)
      }
      const Ts = (() => Promise.resolve(null))()
      function Is(t) {
        return t[7] || (t[7] = [])
      }
      function As(t) {
        return t.cleanup || (t.cleanup = [])
      }
      function Os(t, e) {
        const n = t[9],
          r = n ? n.get(Kr, null) : null
        r && r.handleError(e)
      }
      function Rs(t, e, n, r, i) {
        for (let s = 0; s < n.length; ) {
          const o = n[s++],
            a = n[s++],
            l = e[o],
            c = t.data[o]
          null !== c.setInput ? c.setInput(l, i, r, a) : (l[a] = i)
        }
      }
      function Ps(t, e, n) {
        let r = n ? t.styles : null,
          i = n ? t.classes : null,
          s = 0
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o]
            'number' == typeof t
              ? (s = t)
              : 1 == s
              ? (i = nt(i, t))
              : 2 == s && (r = nt(r, t + ': ' + e[++o] + ';'))
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = i) : (t.classesWithoutHost = i)
      }
      const Ds = new zn('INJECTOR', -1)
      class Ms {
        get(t, e = Jn) {
          if (e === Jn) {
            const e = new Error(`NullInjectorError: No provider for ${et(t)}!`)
            throw ((e.name = 'NullInjectorError'), e)
          }
          return e
        }
      }
      const Fs = new zn('Set Injector scope.'),
        Ns = {},
        js = {},
        zs = []
      let Ls = void 0
      function Us() {
        return void 0 === Ls && (Ls = new Ms()), Ls
      }
      function Bs(t, e = null, n = null, r) {
        return new qs(t, n, e || Us(), r)
      }
      class qs {
        constructor(t, e, n, r = null) {
          ;(this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1)
          const i = []
          e && qn(e, (n) => this.processProvider(n, t, e)),
            qn([t], (t) => this.processInjectorType(t, [], i)),
            this.records.set(Ds, $s(void 0, this))
          const s = this.records.get(Fs)
          ;(this.scope = null != s ? s.value : null),
            (this.source = r || ('object' == typeof t ? null : et(t)))
        }
        get destroyed() {
          return this._destroyed
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0)
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy())
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear()
          }
        }
        get(t, e = Jn, n = mt.Default) {
          this.assertNotDestroyed()
          const r = ir(this)
          try {
            if (!(n & mt.SkipSelf)) {
              let e = this.records.get(t)
              if (void 0 === e) {
                const n =
                  ('function' == typeof (i = t) ||
                    ('object' == typeof i && i instanceof zn)) &&
                  lt(t)
                ;(e = n && this.injectableDefInScope(n) ? $s(Hs(t), Ns) : null),
                  this.records.set(t, e)
              }
              if (null != e) return this.hydrate(t, e)
            }
            return (n & mt.Self ? Us() : this.parent).get(
              t,
              (e = n & mt.Optional && e === Jn ? null : e)
            )
          } catch (s) {
            if ('NullInjectorError' === s.name) {
              if (
                ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(et(t)),
                r)
              )
                throw s
              return (function (t, e, n, r) {
                const i = t.ngTempTokenPath
                throw (
                  (e[er] && i.unshift(e[er]),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1)
                        ? t.substr(2)
                        : t
                    let i = et(e)
                    if (Array.isArray(e)) i = e.map(et).join(' -> ')
                    else if ('object' == typeof e) {
                      let t = []
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n]
                          t.push(
                            n +
                              ':' +
                              ('string' == typeof r ? JSON.stringify(r) : et(r))
                          )
                        }
                      i = `{${t.join(', ')}}`
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${t.replace(
                      tr,
                      '\n  '
                    )}`
                  })('\n' + t.message, i, n, r)),
                  (t.ngTokenPath = i),
                  (t.ngTempTokenPath = null),
                  t)
                )
              })(s, t, 'R3InjectorError', this.source)
            }
            throw s
          } finally {
            ir(r)
          }
          var i
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t))
        }
        toString() {
          const t = []
          return (
            this.records.forEach((e, n) => t.push(et(n))),
            `R3Injector[${t.join(', ')}]`
          )
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error('Injector has already been destroyed.')
        }
        processInjectorType(t, e, n) {
          if (!(t = st(t))) return !1
          let r = ut(t)
          const i = (null == r && t.ngModule) || void 0,
            s = void 0 === i ? t : i,
            o = -1 !== n.indexOf(s)
          if ((void 0 !== i && (r = ut(i)), null == r)) return !1
          if (null != r.imports && !o) {
            let t
            n.push(s)
            try {
              qn(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r))
              })
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e]
                qn(r, (t) => this.processProvider(t, n, r || zs))
              }
          }
          this.injectorDefTypes.add(s), this.records.set(s, $s(r.factory, Ns))
          const a = r.providers
          if (null != a && !o) {
            const e = t
            qn(a, (t) => this.processProvider(t, e, a))
          }
          return void 0 !== i && void 0 !== t.providers
        }
        processProvider(t, e, n) {
          let r = Ks((t = st(t))) ? t : st(t && t.provide)
          const i = (function (t, e, n) {
            return Ws(t) ? $s(void 0, t.useValue) : $s(Vs(t), Ns)
          })(t)
          if (Ks(t) || !0 !== t.multi) this.records.get(r)
          else {
            let e = this.records.get(r)
            e ||
              ((e = $s(void 0, Ns, !0)),
              (e.factory = () => lr(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t)
          }
          this.records.set(r, i)
        }
        hydrate(t, e) {
          var n
          return (
            e.value === Ns && ((e.value = js), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          )
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          )
        }
      }
      function Hs(t) {
        const e = lt(t),
          n = null !== e ? e.factory : ee(t)
        if (null !== n) return n
        const r = ut(t)
        if (null !== r) return r.factory
        if (t instanceof zn)
          throw new Error(`Token ${et(t)} is missing a \u0275prov definition.`)
        if (t instanceof Function)
          return (function (t) {
            const e = t.length
            if (e > 0) {
              const n = $n(e, '?')
              throw new Error(
                `Can't resolve all parameters for ${et(t)}: (${n.join(', ')}).`
              )
            }
            const n = (function (t) {
              const e = t && (t[ht] || t[pt])
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty('name')) return t.name
                  const e = ('' + t).match(/^function\s*([^\s(]+)/)
                  return null === e ? '' : e[1]
                })(t)
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                )
              }
              return null
            })(t)
            return null !== n ? () => n.factory(t) : () => new t()
          })(t)
        throw new Error('unreachable')
      }
      function Vs(t, e, n) {
        let r = void 0
        if (Ks(t)) {
          const e = st(t)
          return ee(e) || Hs(e)
        }
        if (Ws(t)) r = () => st(t.useValue)
        else if ((i = t) && i.useFactory)
          r = () => t.useFactory(...lr(t.deps || []))
        else if (
          (function (t) {
            return !(!t || !t.useExisting)
          })(t)
        )
          r = () => or(st(t.useExisting))
        else {
          const e = st(t && (t.useClass || t.provide))
          if (
            !(function (t) {
              return !!t.deps
            })(t)
          )
            return ee(e) || Hs(e)
          r = () => new e(...lr(t.deps))
        }
        var i
        return r
      }
      function $s(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 }
      }
      function Ws(t) {
        return null !== t && 'object' == typeof t && nr in t
      }
      function Ks(t) {
        return 'function' == typeof t
      }
      const Qs = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const i = Bs(t, e, n, r)
          return i._resolveInjectorDefTypes(), i
        })({ name: n }, e, t, n)
      }
      let Gs = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? Qs(t, e, '')
              : Qs(t.providers, t.parent, t.name || '')
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Jn),
          (t.NULL = new Ms()),
          (t.ɵprov = ot({
            token: t,
            providedIn: 'any',
            factory: () => or(Ds),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        )
      })()
      function Zs(t, e) {
        Je(ve(t)[1], Oe())
      }
      function Ys(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0
        const r = [t]
        for (; e; ) {
          let i = void 0
          if (te(t)) i = e.ɵcmp || e.ɵdir
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components')
            i = e.ɵdir
          }
          if (i) {
            if (n) {
              r.push(i)
              const e = t
              ;(e.inputs = Xs(t.inputs)),
                (e.declaredInputs = Xs(t.declaredInputs)),
                (e.outputs = Xs(t.outputs))
              const n = i.hostBindings
              n && eo(t, n)
              const s = i.viewQuery,
                o = i.contentQueries
              if (
                (s && Js(t, s),
                o && to(t, o),
                tt(t.inputs, i.inputs),
                tt(t.declaredInputs, i.declaredInputs),
                tt(t.outputs, i.outputs),
                te(i) && i.data.animation)
              ) {
                const e = t.data
                e.animation = (e.animation || []).concat(i.data.animation)
              }
            }
            const e = i.features
            if (e)
              for (let r = 0; r < e.length; r++) {
                const i = e[r]
                i && i.ngInherit && i(t), i === Ys && (n = !1)
              }
          }
          e = Object.getPrototypeOf(e)
        }
        !(function (t) {
          let e = 0,
            n = null
          for (let r = t.length - 1; r >= 0; r--) {
            const i = t[r]
            ;(i.hostVars = e += i.hostVars),
              (i.hostAttrs = hn(i.hostAttrs, (n = hn(n, i.hostAttrs))))
          }
        })(r)
      }
      function Xs(t) {
        return t === Tt ? {} : t === It ? [] : t
      }
      function Js(t, e) {
        const n = t.viewQuery
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r)
            }
          : e
      }
      function to(t, e) {
        const n = t.contentQueries
        t.contentQueries = n
          ? (t, r, i) => {
              e(t, r, i), n(t, r, i)
            }
          : e
      }
      function eo(t, e) {
        const n = t.hostBindings
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r)
            }
          : e
      }
      let no = null
      function ro() {
        if (!no) {
          const t = xt.Symbol
          if (t && t.iterator) no = t.iterator
          else {
            const t = Object.getOwnPropertyNames(Map.prototype)
            for (let e = 0; e < t.length; ++e) {
              const n = t[e]
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (no = n)
            }
          }
        }
        return no
      }
      class io {
        constructor(t) {
          this.wrapped = t
        }
        static wrap(t) {
          return new io(t)
        }
        static unwrap(t) {
          return io.isWrapped(t) ? t.wrapped : t
        }
        static isWrapped(t) {
          return t instanceof io
        }
      }
      function so(t) {
        return (
          !!oo(t) && (Array.isArray(t) || (!(t instanceof Map) && ro() in t))
        )
      }
      function oo(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t)
      }
      function ao(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0)
      }
      function lo(t, e, n, r) {
        const i = Te()
        return (
          ao(i, je(), e) &&
            (Ie(),
            (function (t, e, n, r, i, s) {
              const o = me(t, e)
              !(function (t, e, n, r, i, s, o) {
                if (null == s)
                  he(t) ? t.removeAttribute(e, i, n) : e.removeAttribute(i)
                else {
                  const a = null == o ? re(s) : o(s, r || '', i)
                  he(t)
                    ? t.setAttribute(e, i, a, n)
                    : n
                    ? e.setAttributeNS(n, i, a)
                    : e.setAttribute(i, a)
                }
              })(e[11], o, s, t.value, n, r, i)
            })(Xe(), i, t, e, n, r)),
          lo
        )
      }
      function co(t, e, n, r, i, s, o, a) {
        const l = Te(),
          c = Ie(),
          u = t + Kt,
          h = c.firstCreatePass
            ? (function (t, e, n, r, i, s, o, a, l) {
                const c = e.consts,
                  u = Qi(e, t, 4, o || null, Se(c, a))
                ls(e, n, u, Se(c, l)), Je(e, u)
                const h = (u.tViews = is(
                  2,
                  u,
                  r,
                  i,
                  s,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  c
                ))
                return (
                  null !== e.queries &&
                    (e.queries.template(e, u),
                    (h.queries = e.queries.embeddedTView(u))),
                  u
                )
              })(u, c, l, e, n, r, i, s, o)
            : c.data[u]
        Pe(h, !1)
        const d = l[11].createComment('')
        yi(c, l, d, h),
          Qr(d, l),
          Ss(l, (l[u] = _s(d, l, d, h))),
          Jt(h) && es(c, l, h),
          null != o && ns(l, h, a)
      }
      function uo(t) {
        return ye(ke.lFrame.contextLView, Kt + t)
      }
      function ho(t, e = mt.Default) {
        const n = Te()
        return null === n ? or(t, e) : xn(Oe(), n, st(t), e)
      }
      function po(t, e, n) {
        const r = Te()
        return ao(r, je(), e) && as(Ie(), Xe(), r, t, e, r[11], n, !1), po
      }
      function fo(t, e, n, r, i) {
        const s = i ? 'class' : 'style'
        Rs(t, n, e.inputs[s], s, r)
      }
      function mo(t, e, n, r) {
        const i = Te(),
          s = Ie(),
          o = Kt + t,
          a = i[11],
          l = (i[o] = si(a, e, ke.lFrame.currentNamespace)),
          c = s.firstCreatePass
            ? (function (t, e, n, r, i, s, o) {
                const a = e.consts,
                  l = Qi(e, t, 2, i, Se(a, s))
                return (
                  ls(e, n, l, Se(a, o)),
                  null !== l.attrs && Ps(l, l.attrs, !1),
                  null !== l.mergedAttrs && Ps(l, l.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                )
              })(o, s, i, 0, e, n, r)
            : s.data[o]
        Pe(c, !0)
        const u = c.mergedAttrs
        null !== u && ln(a, l, u)
        const h = c.classes
        null !== h && Ei(a, l, h)
        const d = c.styles
        null !== d && Ci(a, l, d),
          64 != (64 & c.flags) && yi(s, i, l, c),
          0 === ke.lFrame.elementDepthCount && Qr(l, i),
          ke.lFrame.elementDepthCount++,
          Jt(c) && (es(s, i, c), ts(s, c, i)),
          null !== r && ns(i, c)
      }
      function go() {
        let t = Oe()
        De() ? Me() : ((t = t.parent), Pe(t, !1))
        const e = t
        ke.lFrame.elementDepthCount--
        const n = Ie()
        n.firstCreatePass && (Je(n, t), Yt(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags)
            })(e) &&
            fo(n, e, Te(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags)
            })(e) &&
            fo(n, e, Te(), e.stylesWithoutHost, !1)
      }
      function yo(t, e, n, r) {
        mo(t, e, n, r), go()
      }
      function _o() {
        return Te()
      }
      function vo(t) {
        return !!t && 'function' == typeof t.then
      }
      function bo(t) {
        return !!t && 'function' == typeof t.subscribe
      }
      function wo(t, e, n = !1, r) {
        const i = Te(),
          s = Ie(),
          o = Oe()
        return (
          (function (t, e, n, r, i, s, o = !1, a) {
            const l = Jt(r),
              c = t.firstCreatePass && As(t),
              u = Is(e)
            let h = !0
            if (3 & r.type) {
              const d = me(r, e),
                p = a ? a(d) : Tt,
                f = p.target || d,
                m = u.length,
                g = a ? (t) => a(pe(t[r.index])).target : r.index
              if (he(n)) {
                let o = null
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const i = t.cleanup
                      if (null != i)
                        for (let s = 0; s < i.length - 1; s += 2) {
                          const t = i[s]
                          if (t === n && i[s + 1] === r) {
                            const t = e[7],
                              n = i[s + 2]
                            return t.length > n ? t[n] : null
                          }
                          'string' == typeof t && (s += 2)
                        }
                      return null
                    })(t, e, i, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = s),
                    (o.__ngLastListenerFn__ = s),
                    (h = !1)
                else {
                  s = Co(r, e, s, !1)
                  const t = n.listen(p.name || f, i, s)
                  u.push(s, t), c && c.push(i, g, m, m + 1)
                }
              } else
                (s = Co(r, e, s, !0)),
                  f.addEventListener(i, s, o),
                  u.push(s),
                  c && c.push(i, g, m, o)
            } else s = Co(r, e, s, !1)
            const d = r.outputs
            let p
            if (h && null !== d && (p = d[i])) {
              const t = p.length
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(s),
                    o = u.length
                  u.push(s, t), c && c.push(i, r.index, o, -(o + 1))
                }
            }
          })(s, i, i[11], o, t, e, n, r),
          wo
        )
      }
      function So(t, e, n) {
        try {
          return !1 !== e(n)
        } catch (r) {
          return Os(t, r), !1
        }
      }
      function Co(t, e, n, r) {
        return function i(s) {
          if (s === Function) return n
          const o = 2 & t.flags ? _e(t.index, e) : e
          0 == (32 & e[2]) && Cs(o)
          let a = So(e, n, s),
            l = i.__ngNextListenerFn__
          for (; l; ) (a = So(e, l, s) && a), (l = l.__ngNextListenerFn__)
          return r && !1 === a && (s.preventDefault(), (s.returnValue = !1)), a
        }
      }
      function Eo(t = 1) {
        return (function (t) {
          return (ke.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--
            return e
          })(t, ke.lFrame.contextLView))[8]
        })(t)
      }
      function ko(t, e) {
        let n = null
        const r = (function (t) {
          const e = t.attrs
          if (null != e) {
            const t = e.indexOf(5)
            if (0 == (1 & t)) return e[t + 1]
          }
          return null
        })(t)
        for (let i = 0; i < e.length; i++) {
          const s = e[i]
          if ('*' !== s) {
            if (null === r ? Di(t, s, !0) : Mi(r, s)) return i
          } else n = i
        }
        return n
      }
      function xo(t) {
        const e = Te()[16][6]
        if (!e.projection) {
          const n = (e.projection = $n(t ? t.length : 1, null)),
            r = n.slice()
          let i = e.child
          for (; null !== i; ) {
            const e = t ? ko(i, t) : 0
            null !== e &&
              (r[e] ? (r[e].projectionNext = i) : (n[e] = i), (r[e] = i)),
              (i = i.next)
          }
        }
      }
      function To(t, e = 0, n) {
        const r = Te(),
          i = Ie(),
          s = Qi(i, Kt + t, 16, null, n || null)
        null === s.projection && (s.projection = e),
          Me(),
          64 != (64 & s.flags) &&
            (function (t, e, n) {
              Si(e[11], 0, e, n, ui(t, n, e), mi(n.parent || e[6], n, e))
            })(i, r, s)
      }
      const Io = []
      function Ao(t, e, n, r, i) {
        const s = t[n + 1],
          o = null === e
        let a = r ? Bi(s) : Hi(s),
          l = !1
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1]
          Oo(t[a], e) && ((l = !0), (t[a + 1] = r ? $i(n) : qi(n))),
            (a = r ? Bi(n) : Hi(n))
        }
        l && (t[n + 1] = r ? qi(s) : $i(s))
      }
      function Oo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && Qn(t, e) >= 0)
        )
      }
      function Ro(t, e) {
        return (
          (function (t, e, n, r) {
            const i = Te(),
              s = Ie(),
              o = (function (t) {
                const e = ke.lFrame,
                  n = e.bindingIndex
                return (e.bindingIndex = e.bindingIndex + 2), n
              })()
            s.firstUpdatePass &&
              (function (t, e, n, r) {
                const i = t.data
                if (null === i[n + 1]) {
                  const s = i[Ze()],
                    o = (function (t, e) {
                      return e >= t.expandoStartIndex
                    })(t, n)
                  ;(function (t, e) {
                    return 0 != (16 & t.flags)
                  })(s) &&
                    null === e &&
                    !o &&
                    (e = !1),
                    (e = (function (t, e, n, r) {
                      const i = (function (t) {
                        const e = ke.lFrame.currentDirectiveIndex
                        return -1 === e ? null : t[e]
                      })(t)
                      let s = e.residualClasses
                      if (null === i)
                        0 === e.classBindings &&
                          ((n = Do((n = Po(null, t, e, n, r)), e.attrs, r)),
                          (s = null))
                      else {
                        const o = e.directiveStylingLast
                        if (-1 === o || t[o] !== i)
                          if (((n = Po(i, t, e, n, r)), null === s)) {
                            let n = (function (t, e, n) {
                              const r = e.classBindings
                              if (0 !== Hi(r)) return t[Bi(r)]
                            })(t, e)
                            void 0 !== n &&
                              Array.isArray(n) &&
                              ((n = Po(null, t, e, n[1], r)),
                              (n = Do(n, e.attrs, r)),
                              (function (t, e, n, r) {
                                t[Bi(e.classBindings)] = r
                              })(t, e, 0, n))
                          } else
                            s = (function (t, e, n) {
                              let r = void 0
                              const i = e.directiveEnd
                              for (
                                let s = 1 + e.directiveStylingLast;
                                s < i;
                                s++
                              )
                                r = Do(r, t[s].hostAttrs, true)
                              return Do(r, e.attrs, true)
                            })(t, e)
                      }
                      return void 0 !== s && (e.residualClasses = s), n
                    })(i, s, e, r)),
                    (function (t, e, n, r, i, s) {
                      let o = e.classBindings,
                        a = Bi(o),
                        l = Hi(o)
                      t[r] = n
                      let c,
                        u = !1
                      if (Array.isArray(n)) {
                        const t = n
                        ;(c = t[1]), (null === c || Qn(t, c) > 0) && (u = !0)
                      } else c = n
                      if (i)
                        if (0 !== l) {
                          const e = Bi(t[a + 1])
                          ;(t[r + 1] = Ui(e, a)),
                            0 !== e && (t[e + 1] = Vi(t[e + 1], r)),
                            (t[a + 1] = (131071 & t[a + 1]) | (r << 17))
                        } else
                          (t[r + 1] = Ui(a, 0)),
                            0 !== a && (t[a + 1] = Vi(t[a + 1], r)),
                            (a = r)
                      else
                        (t[r + 1] = Ui(l, 0)),
                          0 === a ? (a = r) : (t[l + 1] = Vi(t[l + 1], r)),
                          (l = r)
                      u && (t[r + 1] = qi(t[r + 1])),
                        Ao(t, c, r, !0),
                        Ao(t, c, r, !1),
                        (function (t, e, n, r, i) {
                          const s = t.residualClasses
                          null != s &&
                            'string' == typeof e &&
                            Qn(s, e) >= 0 &&
                            (n[r + 1] = $i(n[r + 1]))
                        })(e, c, t, r),
                        (o = Ui(a, l)),
                        (e.classBindings = o)
                    })(i, s, e, n, o)
                }
              })(s, t, o, true),
              e !== ji &&
                ao(i, o, e) &&
                (function (t, e, n, r, i, s, o, a) {
                  if (!(3 & e.type)) return
                  const l = t.data,
                    c = l[a + 1]
                  Fo(1 == (1 & c) ? Mo(l, e, n, i, Hi(c), o) : void 0) ||
                    (Fo(s) ||
                      ((function (t) {
                        return 2 == (2 & t)
                      })(c) &&
                        (s = Mo(l, null, n, i, a, o))),
                    (function (t, e, n, r, i) {
                      const s = he(t)
                      i
                        ? s
                          ? t.addClass(n, r)
                          : n.classList.add(r)
                        : s
                        ? t.removeClass(n, r)
                        : n.classList.remove(r)
                    })(r, 0, fe(Ze(), n), i, s))
                })(
                  s,
                  s.data[Ze()],
                  i,
                  i[11],
                  t,
                  (i[o + 1] = (function (t, e) {
                    return (
                      null == t || ('object' == typeof t && (t = et(yr(t)))), t
                    )
                  })(e)),
                  true,
                  o
                )
          })(t, e),
          Ro
        )
      }
      function Po(t, e, n, r, i) {
        let s = null
        const o = n.directiveEnd
        let a = n.directiveStylingLast
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((s = e[a]), (r = Do(r, s.hostAttrs, i)), s !== t);

        )
          a++
        return null !== t && (n.directiveStylingLast = a), r
      }
      function Do(t, e, n) {
        const r = n ? 1 : 2
        let i = -1
        if (null !== e)
          for (let s = 0; s < e.length; s++) {
            const o = e[s]
            'number' == typeof o
              ? (i = o)
              : i === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]),
                Wn(t, o, !!n || e[++s]))
          }
        return void 0 === t ? null : t
      }
      function Mo(t, e, n, r, i, s) {
        const o = null === e
        let a = void 0
        for (; i > 0; ) {
          const e = t[i],
            s = Array.isArray(e),
            l = s ? e[1] : e,
            c = null === l
          let u = n[i + 1]
          u === ji && (u = c ? Io : void 0)
          let h = c ? Kn(u, r) : l === r ? u : void 0
          if ((s && !Fo(h) && (h = Kn(e, r)), Fo(h) && ((a = h), o))) return a
          const d = t[i + 1]
          i = o ? Bi(d) : Hi(d)
        }
        if (null !== e) {
          let t = s ? e.residualClasses : e.residualStyles
          null != t && (a = Kn(t, r))
        }
        return a
      }
      function Fo(t) {
        return void 0 !== t
      }
      function No(t, e = '') {
        const n = Te(),
          r = Ie(),
          i = t + Kt,
          s = r.firstCreatePass ? Qi(r, i, 1, e, null) : r.data[i],
          o = (n[i] = (function (t, e) {
            return he(t) ? t.createText(e) : t.createTextNode(e)
          })(n[11], e))
        yi(r, n, o, s), Pe(s, !1)
      }
      function jo(t) {
        return zo('', t, ''), jo
      }
      function zo(t, e, n) {
        const r = Te(),
          i = (function (t, e, n, r) {
            return ao(t, je(), n) ? e + re(n) + r : ji
          })(r, t, e, n)
        return (
          i !== ji &&
            (function (t, e, n) {
              const r = fe(e, t)
              !(function (t, e, n) {
                he(t) ? t.setValue(e, n) : (e.textContent = n)
              })(t[11], r, n)
            })(r, Ze(), i),
          zo
        )
      }
      function Lo(t, e, n) {
        const r = Te()
        return ao(r, je(), e) && as(Ie(), Xe(), r, t, e, r[11], n, !0), Lo
      }
      const Uo = void 0
      var Bo = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Uo],
        [['AM', 'PM'], Uo, Uo],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Uo,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Uo,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Uo, "{1} 'at' {0}", Uo],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length
          return 1 === e && 0 === n ? 1 : 5
        },
      ]
      let qo = {}
      function Ho(t) {
        return (
          t in qo ||
            (qo[t] =
              xt.ng &&
              xt.ng.common &&
              xt.ng.common.locales &&
              xt.ng.common.locales[t]),
          qo[t]
        )
      }
      var Vo = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = 'LocaleId'),
          (t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
          (t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
          (t[(t.DaysFormat = 3)] = 'DaysFormat'),
          (t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
          (t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
          (t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
          (t[(t.Eras = 7)] = 'Eras'),
          (t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
          (t[(t.WeekendRange = 9)] = 'WeekendRange'),
          (t[(t.DateFormat = 10)] = 'DateFormat'),
          (t[(t.TimeFormat = 11)] = 'TimeFormat'),
          (t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
          (t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
          (t[(t.NumberFormats = 14)] = 'NumberFormats'),
          (t[(t.CurrencyCode = 15)] = 'CurrencyCode'),
          (t[(t.CurrencySymbol = 16)] = 'CurrencySymbol'),
          (t[(t.CurrencyName = 17)] = 'CurrencyName'),
          (t[(t.Currencies = 18)] = 'Currencies'),
          (t[(t.Directionality = 19)] = 'Directionality'),
          (t[(t.PluralCase = 20)] = 'PluralCase'),
          (t[(t.ExtraData = 21)] = 'ExtraData'),
          t
        )
      })({})
      const $o = 'en-US'
      let Wo = $o
      function Ko(t) {
        var e, n
        ;(n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                'ASSERTION ERROR: ' + t + ` [Expected=> null != ${e} <=Actual]`
              )
            })(n, e),
          'string' == typeof t && (Wo = t.toLowerCase().replace(/_/g, '-'))
      }
      function Qo(t, e, n, r, i) {
        if (((t = st(t)), Array.isArray(t)))
          for (let s = 0; s < t.length; s++) Qo(t[s], e, n, r, i)
        else {
          const s = Ie(),
            o = Te()
          let a = Ks(t) ? t : st(t.provide),
            l = Vs(t)
          const c = Oe(),
            u = 1048575 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 20
          if (Ks(t) || !t.multi) {
            const r = new an(l, i, ho),
              p = Yo(a, e, i ? u : u + d, h)
            ;-1 === p
              ? (Cn(vn(c, o), s, a),
                Go(s, t, e.length),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                i && (c.providerIndexes += 1048576),
                n.push(r),
                o.push(r))
              : ((n[p] = r), (o[p] = r))
          } else {
            const p = Yo(a, e, u + d, h),
              f = Yo(a, e, u, u + d),
              m = p >= 0 && n[p],
              g = f >= 0 && n[f]
            if ((i && !g) || (!i && !m)) {
              Cn(vn(c, o), s, a)
              const u = (function (t, e, n, r, i) {
                const s = new an(t, n, ho)
                return (
                  (s.multi = []),
                  (s.index = e),
                  (s.componentProviders = 0),
                  Zo(s, i, r && !n),
                  s
                )
              })(i ? Jo : Xo, n.length, i, r, l)
              !i && g && (n[f].providerFactory = u),
                Go(s, t, e.length, 0),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                i && (c.providerIndexes += 1048576),
                n.push(u),
                o.push(u)
            } else Go(s, t, p > -1 ? p : f, Zo(n[i ? f : p], l, !i && r))
            !i && r && g && n[f].componentProviders++
          }
        }
      }
      function Go(t, e, n, r) {
        const i = Ks(e)
        if (i || e.useClass) {
          const s = (e.useClass || e).prototype.ngOnDestroy
          if (s) {
            const o = t.destroyHooks || (t.destroyHooks = [])
            if (!i && e.multi) {
              const t = o.indexOf(n)
              ;-1 === t ? o.push(n, [r, s]) : o[t + 1].push(r, s)
            } else o.push(n, s)
          }
        }
      }
      function Zo(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1
      }
      function Yo(t, e, n, r) {
        for (let i = n; i < r; i++) if (e[i] === t) return i
        return -1
      }
      function Xo(t, e, n, r) {
        return ta(this.multi, [])
      }
      function Jo(t, e, n, r) {
        const i = this.multi
        let s
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = Rn(n, n[1], this.providerFactory.index, r)
          ;(s = e.slice(0, t)), ta(i, s)
          for (let n = t; n < e.length; n++) s.push(e[n])
        } else (s = []), ta(i, s)
        return s
      }
      function ta(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])())
        return e
      }
      function ea(t, e = []) {
        return (n) => {
          n.providersResolver = (n, r) =>
            (function (t, e, n) {
              const r = Ie()
              if (r.firstCreatePass) {
                const i = te(t)
                Qo(n, r.data, r.blueprint, i, !0),
                  Qo(e, r.data, r.blueprint, i, !1)
              }
            })(n, r ? r(t) : t, e)
        }
      }
      class na {}
      class ra {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${et(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            )
            return (e.ngComponent = t), e
          })(t)
        }
      }
      let ia = (() => {
        class t {}
        return (t.NULL = new ra()), t
      })()
      function sa(...t) {}
      function oa(t, e) {
        return new la(me(t, e))
      }
      const aa = function () {
        return oa(Oe(), Te())
      }
      let la = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t
          }
        }
        return (t.__NG_ELEMENT_ID__ = aa), t
      })()
      class ca {}
      let ua = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ha()), t
      })()
      const ha = function () {
        const t = Te(),
          e = _e(Oe().index, t)
        return (function (t) {
          return t[11]
        })(Gt(e) ? e : t)
      }
      let da = (() => {
        class t {}
        return (
          (t.ɵprov = ot({ token: t, providedIn: 'root', factory: () => null })),
          t
        )
      })()
      class pa {
        constructor(t) {
          ;(this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'))
        }
      }
      const fa = new pa('11.0.4')
      class ma {
        constructor() {}
        supports(t) {
          return so(t)
        }
        create(t) {
          return new ya(t)
        }
      }
      const ga = (t, e) => e
      class ya {
        constructor(t) {
          ;(this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || ga)
        }
        forEachItem(t) {
          let e
          for (e = this._itHead; null !== e; e = e._next) t(e)
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            i = null
          for (; e || n; ) {
            const s = !n || (e && e.currentIndex < wa(n, r, i)) ? e : n,
              o = wa(s, r, i),
              a = s.currentIndex
            if (s === n) r--, (n = n._nextRemoved)
            else if (((e = e._next), null == s.previousIndex)) r++
            else {
              i || (i = [])
              const t = o - r,
                e = a - r
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < i.length ? i[n] : (i[n] = 0),
                    s = r + n
                  e <= s && s < t && (i[n] = r + 1)
                }
                i[s.previousIndex] = e - t
              }
            }
            o !== a && t(s, o, a)
          }
        }
        forEachPreviousItem(t) {
          let e
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
        }
        forEachAddedItem(t) {
          let e
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
        }
        forEachMovedItem(t) {
          let e
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
        }
        forEachRemovedItem(t) {
          let e
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
        }
        forEachIdentityChange(t) {
          let e
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e)
        }
        diff(t) {
          if ((null == t && (t = []), !so(t)))
            throw new Error(
              `Error trying to diff '${et(
                t
              )}'. Only arrays and iterables are allowed`
            )
          return this.check(t) ? this : null
        }
        onDestroy() {}
        check(t) {
          this._reset()
          let e,
            n,
            r,
            i = this._itHead,
            s = !1
          if (Array.isArray(t)) {
            this.length = t.length
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== i && Object.is(i.trackById, r)
                  ? (s && (i = this._verifyReinsertion(i, n, r, e)),
                    Object.is(i.item, n) || this._addIdentityChange(i, n))
                  : ((i = this._mismatch(i, n, r, e)), (s = !0)),
                (i = i._next)
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n])
                else {
                  const n = t[ro()]()
                  let r
                  for (; !(r = n.next()).done; ) e(r.value)
                }
              })(t, (t) => {
                ;(r = this._trackByFn(e, t)),
                  null !== i && Object.is(i.trackById, r)
                    ? (s && (i = this._verifyReinsertion(i, t, r, e)),
                      Object.is(i.item, t) || this._addIdentityChange(i, t))
                    : ((i = this._mismatch(i, t, r, e)), (s = !0)),
                  (i = i._next),
                  e++
              }),
              (this.length = e)
          return this._truncate(i), (this.collection = t), this.isDirty
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          )
        }
        _reset() {
          if (this.isDirty) {
            let t
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex
            ;(this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null)
          }
        }
        _mismatch(t, e, n, r) {
          let i
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, i, r))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, i, r))
              : (t = this._addAfter(new _a(e, n), i, r)),
            t
          )
        }
        _verifyReinsertion(t, e, n, r) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null)
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          )
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next
            this._addToRemovals(this._unlink(t)), (t = e)
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null)
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t)
          const r = t._prevRemoved,
            i = t._nextRemoved
          return (
            null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
            null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          )
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          )
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          )
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ba()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          )
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t))
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t)
          const e = t._prev,
            n = t._next
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          )
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          )
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ba()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          )
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          )
        }
      }
      class _a {
        constructor(t, e) {
          ;(this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null)
        }
      }
      class va {
        constructor() {
          ;(this._head = null), (this._tail = null)
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t))
        }
        get(t, e) {
          let n
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n
          return null
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          )
        }
      }
      class ba {
        constructor() {
          this.map = new Map()
        }
        put(t) {
          const e = t.trackById
          let n = this.map.get(e)
          n || ((n = new va()), this.map.set(e, n)), n.add(t)
        }
        get(t, e) {
          const n = this.map.get(t)
          return n ? n.get(t, e) : null
        }
        remove(t) {
          const e = t.trackById
          return this.map.get(e).remove(t) && this.map.delete(e), t
        }
        get isEmpty() {
          return 0 === this.map.size
        }
        clear() {
          this.map.clear()
        }
      }
      function wa(t, e, n) {
        const r = t.previousIndex
        if (null === r) return r
        let i = 0
        return n && r < n.length && (i = n[r]), r + e + i
      }
      class Sa {
        constructor() {}
        supports(t) {
          return t instanceof Map || oo(t)
        }
        create() {
          return new Ca()
        }
      }
      class Ca {
        constructor() {
          ;(this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null)
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          )
        }
        forEachItem(t) {
          let e
          for (e = this._mapHead; null !== e; e = e._next) t(e)
        }
        forEachPreviousItem(t) {
          let e
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
        }
        forEachChangedItem(t) {
          let e
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
        }
        forEachAddedItem(t) {
          let e
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
        }
        forEachRemovedItem(t) {
          let e
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || oo(t)))
              throw new Error(
                `Error trying to diff '${et(
                  t
                )}'. Only maps and objects are allowed`
              )
          } else t = new Map()
          return this.check(t) ? this : null
        }
        onDestroy() {}
        check(t) {
          this._reset()
          let e = this._mapHead
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next)
              else {
                const r = this._getOrCreateRecordForKey(n, t)
                e = this._insertBeforeOrAppend(e, r)
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e)
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null)
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          )
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            )
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          )
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t)
            this._maybeAddToChanges(n, e)
            const r = n._prev,
              i = n._next
            return (
              r && (r._next = i),
              i && (i._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            )
          }
          const n = new Ea(t)
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          )
        }
        _reset() {
          if (this.isDirty) {
            let t
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue
            ;(this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null)
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t))
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t))
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t))
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n))
        }
      }
      class Ea {
        constructor(t) {
          ;(this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null)
        }
      }
      let ka = (() => {
          class t {
            constructor(t) {
              this.factories = t
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice()
                e = e.concat(t)
              }
              return new t(e)
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    )
                  return t.create(e, n)
                },
                deps: [[t, new Xn(), new Zn()]],
              }
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t))
              if (null != e) return e
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              )
              var n
            }
          }
          return (
            (t.ɵprov = ot({
              token: t,
              providedIn: 'root',
              factory: () => new t([new ma()]),
            })),
            t
          )
        })(),
        xa = (() => {
          class t {
            constructor(t) {
              this.factories = t
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice()
                e = e.concat(t)
              }
              return new t(e)
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    )
                  return t.create(e, n)
                },
                deps: [[t, new Xn(), new Zn()]],
              }
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t))
              if (e) return e
              throw new Error(`Cannot find a differ supporting object '${t}'`)
            }
          }
          return (
            (t.ɵprov = ot({
              token: t,
              providedIn: 'root',
              factory: () => new t([new Sa()]),
            })),
            t
          )
        })()
      function Ta(t, e, n, r, i = !1) {
        for (; null !== n; ) {
          const s = e[n.index]
          if ((null !== s && r.push(pe(s)), Zt(s)))
            for (let t = Qt; t < s.length; t++) {
              const e = s[t],
                n = e[1].firstChild
              null !== n && Ta(e[1], e, n, r)
            }
          const o = n.type
          if (8 & o) Ta(t, e, n.child, r)
          else if (32 & o) {
            const t = Jr(n, e)
            let i
            for (; (i = t()); ) r.push(i)
          } else if (16 & o) {
            const t = e[16],
              i = t[6].projection[n.projection]
            if (Array.isArray(i)) r.push(...i)
            else {
              const e = ti(t)
              Ta(e[1], e, i, r, !0)
            }
          }
          n = i ? n.projectionNext : n.next
        }
        return r
      }
      class Ia {
        constructor(t, e) {
          ;(this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null)
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1]
          return Ta(e, t, e.firstChild, [])
        }
        get context() {
          return this._lView[8]
        }
        get destroyed() {
          return 256 == (256 & this._lView[2])
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this)
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this)
            t > -1 && this._viewContainerRef.detach(t),
              (this._viewContainerRef = null)
          }
          li(this._lView[1], this._lView)
        }
        onDestroy(t) {
          ss(this._lView[1], this._lView, null, t)
        }
        markForCheck() {
          Cs(this._cdRefInjectingView || this._lView)
        }
        detach() {
          this._lView[2] &= -129
        }
        reattach() {
          this._lView[2] |= 128
        }
        detectChanges() {
          Es(this._lView[1], this._lView, this.context)
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Ne(!0)
            try {
              Es(t, e, n)
            } finally {
              Ne(!1)
            }
          })(this._lView[1], this._lView, this.context)
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            )
          this._viewContainerRef = t
        }
        detachFromAppRef() {
          var t
          ;(this._appRef = null),
            wi(this._lView[1], (t = this._lView), t[11], 2, null, null)
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error('This view is already attached to a ViewContainer!')
          this._appRef = t
        }
      }
      class Aa extends Ia {
        constructor(t) {
          super(t), (this._view = t)
        }
        detectChanges() {
          ks(this._view)
        }
        checkNoChanges() {
          !(function (t) {
            Ne(!0)
            try {
              ks(t)
            } finally {
              Ne(!1)
            }
          })(this._view)
        }
        get context() {
          return null
        }
      }
      const Oa = Pa
      let Ra = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Oa), (t.__ChangeDetectorRef__ = !0), t
      })()
      function Pa(t = !1) {
        return (function (t, e, n) {
          if (!n && Xt(t)) {
            const n = _e(t.index, e)
            return new Ia(n, n)
          }
          return 47 & t.type ? new Ia(e[16], e) : null
        })(Oe(), Te(), t)
      }
      const Da = [new Sa()],
        Ma = new ka([new ma()]),
        Fa = new xa(Da),
        Na = function () {
          return Ua(Oe(), Te())
        }
      let ja = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Na), t
      })()
      const za = ja,
        La = class extends za {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n)
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = Ki(
                this._declarationLView,
                e,
                t,
                16,
                null,
                e.declTNode,
                null,
                null,
                null,
                null
              )
            n[17] = this._declarationLView[this._declarationTContainer.index]
            const r = this._declarationLView[19]
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              Zi(e, n, t),
              new Ia(n)
            )
          }
        }
      function Ua(t, e) {
        return 4 & t.type ? new La(e, t, oa(t, e)) : null
      }
      class Ba {}
      class qa {}
      const Ha = function () {
        return Ga(Oe(), Te())
      }
      let Va = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Ha), t
      })()
      const $a = Va,
        Wa = class extends $a {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n)
          }
          get element() {
            return oa(this._hostTNode, this._hostLView)
          }
          get injector() {
            return new Mn(this._hostTNode, this._hostLView)
          }
          get parentInjector() {
            const t = Sn(this._hostTNode, this._hostLView)
            if (pn(t)) {
              const e = mn(t, this._hostLView),
                n = fn(t)
              return new Mn(e[1].data[n + 8], e)
            }
            return new Mn(null, this._hostLView)
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1)
          }
          get(t) {
            const e = Ka(this._lContainer)
            return (null !== e && e[t]) || null
          }
          get length() {
            return this._lContainer.length - Qt
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {})
            return this.insert(r, n), r
          }
          createComponent(t, e, n, r, i) {
            const s = n || this.parentInjector
            if (!i && null == t.ngModule && s) {
              const t = s.get(Ba, null)
              t && (i = t)
            }
            const o = t.create(s, r, void 0, i)
            return this.insert(o.hostView, e), o
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1]
            if (Zt(n[3])) {
              const e = this.indexOf(t)
              if (-1 !== e) this.detach(e)
              else {
                const e = n[3],
                  r = new Wa(e, e[6], e[3])
                r.detach(r.indexOf(t))
              }
            }
            const i = this._adjustIndex(e),
              s = this._lContainer
            !(function (t, e, n, r) {
              const i = Qt + r,
                s = n.length
              r > 0 && (n[i - 1][4] = e),
                r < s - Qt
                  ? ((e[4] = n[i]), Hn(n, Qt + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n)
              const o = e[17]
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9]
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e)
                })(o, e)
              const a = e[19]
              null !== a && a.insertView(t), (e[2] |= 128)
            })(r, n, s, i)
            const o = vi(i, s),
              a = n[11],
              l = fi(a, s[7])
            return (
              null !== l &&
                (function (t, e, n, r, i, s) {
                  ;(r[0] = i), (r[6] = e), wi(t, r, n, 1, i, s)
                })(r, s[6], a, n, l, o),
              t.attachToViewContainerRef(this),
              Hn(Qa(s), i, t),
              t
            )
          }
          move(t, e) {
            return this.insert(t, e)
          }
          indexOf(t) {
            const e = Ka(this._lContainer)
            return null !== e ? e.indexOf(t) : -1
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = ai(this._lContainer, e)
            n && (Vn(Qa(this._lContainer), e), li(n[1], n))
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = ai(this._lContainer, e)
            return n && null != Vn(Qa(this._lContainer), e) ? new Ia(n) : null
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t
          }
        }
      function Ka(t) {
        return t[8]
      }
      function Qa(t) {
        return t[8] || (t[8] = [])
      }
      function Ga(t, e) {
        let n
        const r = e[t.index]
        if (Zt(r)) n = r
        else {
          let i
          if (8 & t.type) i = pe(r)
          else {
            const n = e[11]
            i = n.createComment('')
            const r = me(t, e)
            hi(
              n,
              fi(n, r),
              i,
              (function (t, e) {
                return he(t) ? t.nextSibling(e) : e.nextSibling
              })(n, r),
              !1
            )
          }
          ;(e[t.index] = n = _s(r, e, i, t)), Ss(e, n)
        }
        return new Wa(n, t, e)
      }
      const Za = {}
      class Ya extends ia {
        constructor(t) {
          super(), (this.ngModule = t)
        }
        resolveComponentFactory(t) {
          const e = $t(t)
          return new tl(e, this.ngModule)
        }
      }
      function Xa(t) {
        const e = []
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n })
        return e
      }
      const Ja = new zn('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: () => Gr,
      })
      class tl extends na {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Ni).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e)
        }
        get inputs() {
          return Xa(this.componentDef.inputs)
        }
        get outputs() {
          return Xa(this.componentDef.outputs)
        }
        create(t, e, n, r) {
          const i = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, i) => {
                      const s = t.get(n, Za, i)
                      return s !== Za || r === Za ? s : e.get(n, r, i)
                    },
                  }
                })(t, r.injector)
              : t,
            s = i.get(ca, de),
            o = i.get(da, null),
            a = s.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || 'div',
            c = n
              ? (function (t, e, n) {
                  if (he(t)) return t.selectRootElement(e, n === wt.ShadowDom)
                  let r = 'string' == typeof e ? t.querySelector(e) : e
                  return (r.textContent = ''), r
                })(a, n, this.componentDef.encapsulation)
              : si(
                  s.createRenderer(null, this.componentDef),
                  l,
                  (function (t) {
                    const e = t.toLowerCase()
                    return 'svg' === e
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === e
                      ? 'http://www.w3.org/1998/MathML/'
                      : null
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: Gr,
              clean: Ts,
              playerHandler: null,
              flags: 0,
            },
            d = is(0, null, null, 1, 0, null, null, null, null, null),
            p = Ki(null, d, h, u, null, null, s, a, o, i)
          let f, m
          Ve(p)
          try {
            const t = (function (t, e, n, r, i, s) {
              const o = n[1]
              n[20] = t
              const a = Qi(o, 20, 2, '#host', null),
                l = (a.mergedAttrs = e.hostAttrs)
              null !== l &&
                (Ps(a, l, !0),
                null !== t &&
                  (ln(i, t, l),
                  null !== a.classes && Ei(i, t, a.classes),
                  null !== a.styles && Ci(i, t, a.styles)))
              const c = r.createRenderer(t, e),
                u = Ki(
                  n,
                  rs(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  null,
                  null
                )
              return (
                o.firstCreatePass &&
                  (Cn(vn(a, n), o, e.type), hs(o, a), ps(a, n.length, 1)),
                Ss(n, u),
                (n[20] = u)
              )
            })(c, this.componentDef, p, s, a)
            if (c)
              if (n) ln(a, c, ['ng-version', fa.full])
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = []
                  let r = 1,
                    i = 2
                  for (; r < t.length; ) {
                    let s = t[r]
                    if ('string' == typeof s)
                      2 === i
                        ? '' !== s && e.push(s, t[++r])
                        : 8 === i && n.push(s)
                    else {
                      if (!Ri(i)) break
                      i = s
                    }
                    r++
                  }
                  return { attrs: e, classes: n }
                })(this.componentDef.selectors[0])
                t && ln(a, c, t), e && e.length > 0 && Ei(a, c, e.join(' '))
              }
            if (((m = ge(d, Kt)), void 0 !== e)) {
              const t = (m.projection = [])
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n]
                t.push(null != r ? Array.from(r) : null)
              }
            }
            ;(f = (function (t, e, n, r, i) {
              const s = n[1],
                o = (function (t, e, n) {
                  const r = Oe()
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    fs(t, r, e, Gi(t, e, 1, null), n))
                  const i = Rn(e, t, r.directiveStart, r)
                  Qr(i, e)
                  const s = me(r, e)
                  return s && Qr(s, e), i
                })(s, n, e)
              if (
                (r.components.push(o),
                (t[8] = o),
                i && i.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = Oe()
                e.contentQueries(1, o, t.directiveStart)
              }
              const a = Oe()
              return (
                !s.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (Ye(a.index),
                  cs(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  us(e, o)),
                o
              )
            })(t, this.componentDef, p, h, [Zs])),
              Zi(d, p, null)
          } finally {
            Ge()
          }
          return new el(this.componentType, f, oa(m, p), p, m)
        }
      }
      class el extends class {} {
        constructor(t, e, n, r, i) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = i),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Aa(r)),
            (this.componentType = t)
        }
        get injector() {
          return new Mn(this._tNode, this._rootLView)
        }
        destroy() {
          this.hostView.destroy()
        }
        onDestroy(t) {
          this.hostView.onDestroy(t)
        }
      }
      const nl = new Map()
      class rl extends Ba {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Ya(this))
          const n = Wt(t),
            r = t[Dt] || null
          r && Ko(r),
            (this._bootstrapComponents = Yr(n.bootstrap)),
            (this._r3Injector = Bs(
              t,
              e,
              [
                { provide: Ba, useValue: this },
                { provide: ia, useValue: this.componentFactoryResolver },
              ],
              et(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t))
        }
        get(t, e = Gs.THROW_IF_NOT_FOUND, n = mt.Default) {
          return t === Gs || t === Ba || t === Ds
            ? this
            : this._r3Injector.get(t, e, n)
        }
        destroy() {
          const t = this._r3Injector
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null)
        }
        onDestroy(t) {
          this.destroyCbs.push(t)
        }
      }
      class il extends qa {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Wt(t) &&
              (function (t) {
                const e = new Set()
                !(function t(n) {
                  const r = Wt(n, !0),
                    i = r.id
                  null !== i &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${et(
                            e
                          )} vs ${et(e.name)}`
                        )
                    })(i, nl.get(i), n),
                    nl.set(i, n))
                  const s = Yr(r.imports)
                  for (const o of s) e.has(o) || (e.add(o), t(o))
                })(t)
              })(t)
        }
        create(t) {
          return new rl(this.moduleType, t)
        }
      }
      function sl(t, e) {
        const n = Ie()
        let r
        const i = t + Kt
        n.firstCreatePass
          ? ((r = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n]
                  if (t === r.name) return r
                }
              throw new ne('302', `The pipe '${t}' could not be found!`)
            })(e, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy))
          : (r = n.data[i])
        const s = r.factory || (r.factory = ee(r.type)),
          o = yt(ho)
        try {
          const t = yn(!1),
            e = s()
          return (
            yn(t),
            (function (t, e, n, r) {
              n >= t.data.length &&
                ((t.data[n] = null), (t.blueprint[n] = null)),
                (e[n] = r)
            })(n, Te(), i, e),
            e
          )
        } finally {
          yt(o)
        }
      }
      function ol(t, e, n) {
        const r = t + Kt,
          i = Te(),
          s = ye(i, r)
        return (function (t, e) {
          return (
            io.isWrapped(e) &&
              ((e = io.unwrap(e)), (t[ke.lFrame.bindingIndex] = ji)),
            e
          )
        })(
          i,
          (function (t, e) {
            return t[1].data[e].pure
          })(i, r)
            ? (function (t, e, n, r, i, s) {
                const o = e + n
                return ao(t, o, i)
                  ? (function (t, e, n) {
                      return (t[e] = n)
                    })(t, o + 1, s ? r.call(s, i) : r(i))
                  : (function (t, e) {
                      const n = t[e]
                      return n === ji ? void 0 : n
                    })(t, o + 1)
              })(
                i,
                (function () {
                  const t = ke.lFrame
                  let e = t.bindingRootIndex
                  return (
                    -1 === e &&
                      (e = t.bindingRootIndex = t.tView.bindingStartIndex),
                    e
                  )
                })(),
                e,
                s.transform,
                n,
                s
              )
            : s.transform(n)
        )
      }
      const al = class extends C {
        constructor(t = !1) {
          super(), (this.__isAsync = t)
        }
        emit(t) {
          super.next(t)
        }
        subscribe(t, e, n) {
          let r,
            i = (t) => null,
            s = () => null
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e))
                  }
                : (e) => {
                    t.next(e)
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e))
                    }
                  : (e) => {
                      t.error(e)
                    }),
              t.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete())
                    }
                  : () => {
                      t.complete()
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e))
                  }
                : (e) => {
                    t(e)
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t))
                    }
                  : (t) => {
                      e(t)
                    }),
              n &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => n())
                    }
                  : () => {
                      n()
                    }))
          const o = super.subscribe(r, i, s)
          return t instanceof h && t.add(o), o
        }
      }
      function ll() {
        return this._results[ro()]()
      }
      class cl {
        constructor() {
          ;(this.dirty = !0),
            (this._results = []),
            (this.changes = new al()),
            (this.length = 0)
          const t = ro(),
            e = cl.prototype
          e[t] || (e[t] = ll)
        }
        map(t) {
          return this._results.map(t)
        }
        filter(t) {
          return this._results.filter(t)
        }
        find(t) {
          return this._results.find(t)
        }
        reduce(t, e) {
          return this._results.reduce(t, e)
        }
        forEach(t) {
          this._results.forEach(t)
        }
        some(t) {
          return this._results.some(t)
        }
        toArray() {
          return this._results.slice()
        }
        toString() {
          return this._results.toString()
        }
        reset(t) {
          ;(this._results = Bn(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0])
        }
        notifyOnChanges() {
          this.changes.emit(this)
        }
        setDirty() {
          this.dirty = !0
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe()
        }
      }
      class ul {
        constructor(t) {
          ;(this.queryList = t), (this.matches = null)
        }
        clone() {
          return new ul(this.queryList)
        }
        setDirty() {
          this.queryList.setDirty()
        }
      }
      class hl {
        constructor(t = []) {
          this.queries = t
        }
        createEmbeddedView(t) {
          const e = t.queries
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = []
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t)
              r.push(this.queries[n.indexInDeclarationView].clone())
            }
            return new hl(r)
          }
          return null
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t)
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t)
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== Sl(t, e).matches && this.queries[e].setDirty()
        }
      }
      class dl {
        constructor(t, e, n, r = null) {
          ;(this.predicate = t),
            (this.descendants = e),
            (this.isStatic = n),
            (this.read = r)
        }
      }
      class pl {
        constructor(t = []) {
          this.queries = t
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e)
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t)
        }
        embeddedTView(t) {
          let e = null
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              i = this.getByIndex(n).embeddedTView(t, r)
            i &&
              ((i.indexInDeclarationView = n),
              null !== e ? e.push(i) : (e = [i]))
          }
          return null !== e ? new pl(e) : null
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e)
        }
        getByIndex(t) {
          return this.queries[t]
        }
        get length() {
          return this.queries.length
        }
        track(t) {
          this.queries.push(t)
        }
      }
      class fl {
        constructor(t, e = -1) {
          ;(this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e)
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e)
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1)
        }
        template(t, e) {
          this.elementStart(t, e)
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new fl(this.metadata))
            : null
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex
            let n = t.parent
            for (; null !== n && 8 & n.type && n.index !== e; ) n = n.parent
            return e === (null !== n ? n.index : -1)
          }
          return this._appliesToNextNode
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const i = n[r]
              this.matchTNodeWithReadOption(t, e, ml(e, i)),
                this.matchTNodeWithReadOption(t, e, On(e, t, i, !1, !1))
            }
          else
            n === ja
              ? 4 & e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, On(e, t, n, !1, !1))
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read
            if (null !== r)
              if (r === la || r === Va || (r === ja && 4 & e.type))
                this.addMatch(e.index, -2)
              else {
                const n = On(e, t, r, !1, !1)
                null !== n && this.addMatch(e.index, n)
              }
            else this.addMatch(e.index, n)
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e)
        }
      }
      function ml(t, e) {
        const n = t.localNames
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1]
        return null
      }
      function gl(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 11 & t.type ? oa(t, e) : 4 & t.type ? Ua(t, e) : null
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === la
                ? oa(e, t)
                : n === ja
                ? Ua(e, t)
                : n === Va
                ? Ga(e, t)
                : void 0
            })(t, e, r)
          : Rn(t, t[1], n, e)
      }
      function yl(t, e, n, r) {
        const i = e[19].queries[r]
        if (null === i.matches) {
          const r = t.data,
            s = n.matches,
            o = []
          for (let t = 0; t < s.length; t += 2) {
            const i = s[t]
            o.push(i < 0 ? null : gl(e, r[i], s[t + 1], n.metadata.read))
          }
          i.matches = o
        }
        return i.matches
      }
      function _l(t, e, n, r) {
        const i = t.queries.getByIndex(n),
          s = i.matches
        if (null !== s) {
          const o = yl(t, e, i, n)
          for (let t = 0; t < s.length; t += 2) {
            const n = s[t]
            if (n > 0) r.push(o[t / 2])
            else {
              const i = s[t + 1],
                o = e[-n]
              for (let t = Qt; t < o.length; t++) {
                const e = o[t]
                e[17] === e[3] && _l(e[1], e, i, r)
              }
              if (null !== o[9]) {
                const t = o[9]
                for (let e = 0; e < t.length; e++) {
                  const n = t[e]
                  _l(n[1], n, i, r)
                }
              }
            }
          }
        }
        return r
      }
      function vl(t) {
        const e = Te(),
          n = Ie(),
          r = Ue()
        Be(r + 1)
        const i = Sl(n, r)
        if (t.dirty && be(e) === i.metadata.isStatic) {
          if (null === i.matches) t.reset([])
          else {
            const s = i.crossesNgTemplate ? _l(n, e, r, []) : yl(n, e, i, r)
            t.reset(s), t.notifyOnChanges()
          }
          return !0
        }
        return !1
      }
      function bl(t, e, n) {
        !(function (t, e, n, r, i, s) {
          t.firstCreatePass &&
            (function (t, e, n) {
              null === t.queries && (t.queries = new pl()),
                t.queries.track(new fl(e, -1))
            })(t, new dl(n, r, false, i)),
            (function (t, e) {
              const n = new cl()
              ss(t, e, n, n.destroy),
                null === e[19] && (e[19] = new hl()),
                e[19].queries.push(new ul(n))
            })(t, e)
        })(Ie(), Te(), t, e, n)
      }
      function wl() {
        return (t = Te()), (e = Ue()), t[19].queries[e].queryList
        var t, e
      }
      function Sl(t, e) {
        return t.queries.getByIndex(e)
      }
      function Cl(t, e) {
        return Ua(t, e)
      }
      const El = new zn('Application Initializer')
      let kl = (() => {
        class t {
          constructor(t) {
            ;(this.appInits = t),
              (this.resolve = sa),
              (this.reject = sa),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                ;(this.resolve = t), (this.reject = e)
              }))
          }
          runInitializers() {
            if (this.initialized) return
            const t = [],
              e = () => {
                ;(this.done = !0), this.resolve()
              }
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]()
                vo(e) && t.push(e)
              }
            Promise.all(t)
              .then(() => {
                e()
              })
              .catch((t) => {
                this.reject(t)
              }),
              0 === t.length && e(),
              (this.initialized = !0)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(El, 8))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const xl = new zn('AppId'),
        Tl = {
          provide: xl,
          useFactory: function () {
            return `${Il()}${Il()}${Il()}`
          },
          deps: [],
        }
      function Il() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
      }
      const Al = new zn('Platform Initializer'),
        Ol = new zn('Platform ID'),
        Rl = new zn('appBootstrapListener')
      let Pl = (() => {
        class t {
          log(t) {
            console.log(t)
          }
          warn(t) {
            console.warn(t)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const Dl = new zn('LocaleId'),
        Ml = new zn('DefaultCurrencyCode')
      class Fl {
        constructor(t, e) {
          ;(this.ngModuleFactory = t), (this.componentFactories = e)
        }
      }
      const Nl = function (t) {
          return new il(t)
        },
        jl = Nl,
        zl = function (t) {
          return Promise.resolve(Nl(t))
        },
        Ll = function (t) {
          const e = Nl(t),
            n = Yr(Wt(t).declarations).reduce((t, e) => {
              const n = $t(e)
              return n && t.push(new tl(n)), t
            }, [])
          return new Fl(e, n)
        },
        Ul = Ll,
        Bl = function (t) {
          return Promise.resolve(Ll(t))
        }
      let ql = (() => {
        class t {
          constructor() {
            ;(this.compileModuleSync = jl),
              (this.compileModuleAsync = zl),
              (this.compileModuleAndAllComponentsSync = Ul),
              (this.compileModuleAndAllComponentsAsync = Bl)
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const Hl = (() => Promise.resolve(0))()
      function Vl(t) {
        'undefined' == typeof Zone
          ? Hl.then(() => {
              t && t.apply(null, null)
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t)
      }
      class $l {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new al(!1)),
            (this.onMicrotaskEmpty = new al(!1)),
            (this.onStable = new al(!1)),
            (this.onError = new al(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js')
          Zone.assertZonePatched()
          const n = this
          ;(n._nesting = 0),
            (n._outer = n._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (n._inner = n._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (n._inner = n._inner.fork(Zone.longStackTraceZoneSpec)),
            (n.shouldCoalesceEventChangeDetection = e),
            (n.lastRequestAnimationFrameId = -1),
            (n.nativeRequestAnimationFrame = (function () {
              let t = xt.requestAnimationFrame,
                e = xt.cancelAnimationFrame
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')]
                n && (t = n)
                const r = e[Zone.__symbol__('OriginalDelegate')]
                r && (e = r)
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              }
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    ;-1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                        xt,
                        () => {
                          t.fakeTopEventTask ||
                            (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                              'fakeTopEventTask',
                              () => {
                                ;(t.lastRequestAnimationFrameId = -1),
                                  Ql(t),
                                  Kl(t)
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            t.fakeTopEventTask.invoke()
                        }
                      )),
                      Ql(t))
                  })(t)
                })
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, i, s, o, a) => {
                  try {
                    return Gl(t), n.invokeTask(i, s, o, a)
                  } finally {
                    e && 'eventTask' === s.type && e(), Zl(t)
                  }
                },
                onInvoke: (e, n, r, i, s, o, a) => {
                  try {
                    return Gl(t), e.invoke(r, i, s, o, a)
                  } finally {
                    Zl(t)
                  }
                },
                onHasTask: (e, n, r, i) => {
                  e.hasTask(r, i),
                    n === r &&
                      ('microTask' == i.change
                        ? ((t._hasPendingMicrotasks = i.microTask),
                          Ql(t),
                          Kl(t))
                        : 'macroTask' == i.change &&
                          (t.hasPendingMacrotasks = i.macroTask))
                },
                onHandleError: (e, n, r, i) => (
                  e.handleError(r, i),
                  t.runOutsideAngular(() => t.onError.emit(i)),
                  !1
                ),
              })
            })(n)
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone')
        }
        static assertInAngularZone() {
          if (!$l.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!')
        }
        static assertNotInAngularZone() {
          if ($l.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!')
        }
        run(t, e, n) {
          return this._inner.run(t, e, n)
        }
        runTask(t, e, n, r) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + r, t, Wl, sa, sa)
          try {
            return i.runTask(s, e, n)
          } finally {
            i.cancelTask(s)
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n)
        }
        runOutsideAngular(t) {
          return this._outer.run(t)
        }
      }
      const Wl = {}
      function Kl(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null)
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null))
              } finally {
                t.isStable = !0
              }
          }
      }
      function Ql(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        )
      }
      function Gl(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null))
      }
      function Zl(t) {
        t._nesting--, Kl(t)
      }
      class Yl {
        constructor() {
          ;(this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new al()),
            (this.onMicrotaskEmpty = new al()),
            (this.onStable = new al()),
            (this.onError = new al())
        }
        run(t, e, n) {
          return t.apply(e, n)
        }
        runGuarded(t, e, n) {
          return t.apply(e, n)
        }
        runOutsideAngular(t) {
          return t()
        }
        runTask(t, e, n, r) {
          return t.apply(e, n)
        }
      }
      let Xl = (() => {
          class t {
            constructor(t) {
              ;(this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone
                      ? null
                      : Zone.current.get('TaskTrackingZone')
                })
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  ;(this._didWork = !0), (this._isZoneStable = !1)
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      $l.assertNotInAngularZone(),
                        Vl(() => {
                          ;(this._isZoneStable = !0),
                            this._runCallbacksIfReady()
                        })
                    },
                  })
                })
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              )
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero')
              return this._runCallbacksIfReady(), this._pendingCount
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              )
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Vl(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop()
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                  }
                  this._didWork = !1
                })
              else {
                let t = this.getPendingTasks()
                ;(this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0)
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : []
            }
            addCallback(t, e, n) {
              let r = -1
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  ;(this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks())
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n })
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                )
              this.addCallback(t, e, n), this._runCallbacksIfReady()
            }
            getPendingRequestCount() {
              return this._pendingCount
            }
            findProviders(t, e, n) {
              return []
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or($l))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        Jl = (() => {
          class t {
            constructor() {
              ;(this._applications = new Map()), nc.addToWindow(this)
            }
            registerApplication(t, e) {
              this._applications.set(t, e)
            }
            unregisterApplication(t) {
              this._applications.delete(t)
            }
            unregisterAllApplications() {
              this._applications.clear()
            }
            getTestability(t) {
              return this._applications.get(t) || null
            }
            getAllTestabilities() {
              return Array.from(this._applications.values())
            }
            getAllRootElements() {
              return Array.from(this._applications.keys())
            }
            findTestabilityInTree(t, e = !0) {
              return nc.findTestabilityInTree(this, t, e)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })()
      class tc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null
        }
      }
      let ec,
        nc = new tc(),
        rc = !1
      function ic() {
        return (rc = !0), true
      }
      const sc = new zn('AllowMultipleToken')
      class oc {
        constructor(t, e) {
          ;(this.name = t), (this.token = e)
        }
      }
      function ac(t, e, n = []) {
        const r = 'Platform: ' + e,
          i = new zn(r)
        return (e = []) => {
          let s = lc()
          if (!s || s.injector.get(sc, !1))
            if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }))
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: i, useValue: !0 },
                  { provide: Fs, useValue: 'platform' }
                )
              !(function (t) {
                if (ec && !ec.destroyed && !ec.injector.get(sc, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  )
                ec = t.get(cc)
                const e = t.get(Al, null)
                e && e.forEach((t) => t())
              })(Gs.create({ providers: t, name: r }))
            }
          return (function (t) {
            const e = lc()
            if (!e) throw new Error('No platform exists!')
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              )
            return e
          })(i)
        }
      }
      function lc() {
        return ec && !ec.destroyed ? ec : null
      }
      let cc = (() => {
        class t {
          constructor(t) {
            ;(this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1)
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n
                return (
                  (n =
                    'noop' === t
                      ? new Yl()
                      : ('zone.js' === t ? void 0 : t) ||
                        new $l({
                          enableLongStackTrace: ic(),
                          shouldCoalesceEventChangeDetection: e,
                        })),
                  n
                )
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: $l, useValue: n }]
            return n.run(() => {
              const e = Gs.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                i = t.create(e),
                s = i.injector.get(Kr, null)
              if (!s)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                )
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      s.handleError(t)
                    },
                  })
                  i.onDestroy(() => {
                    dc(this._modules, i), t.unsubscribe()
                  })
                }),
                (function (t, e, n) {
                  try {
                    const r = n()
                    return vo(r)
                      ? r.catch((n) => {
                          throw (e.runOutsideAngular(() => t.handleError(n)), n)
                        })
                      : r
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r)
                  }
                })(s, n, () => {
                  const t = i.injector.get(kl)
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        Ko(i.injector.get(Dl, $o) || $o),
                        this._moduleDoBootstrap(i),
                        i
                      )
                    )
                  )
                })
              )
            })
          }
          bootstrapModule(t, e = []) {
            const n = uc({}, e)
            return (function (t, e, n) {
              const r = new il(n)
              return Promise.resolve(r)
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n))
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(hc)
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t))
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${et(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                )
              t.instance.ngDoBootstrap(e)
            }
            this._modules.push(t)
          }
          onDestroy(t) {
            this._destroyListeners.push(t)
          }
          get injector() {
            return this._injector
          }
          destroy() {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!')
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0)
          }
          get destroyed() {
            return this._destroyed
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Gs))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      function uc(t, e) {
        return Array.isArray(e)
          ? e.reduce(uc, t)
          : Object.assign(Object.assign({}, t), e)
      }
      let hc = (() => {
        class t {
          constructor(t, e, n, r, i, s) {
            ;(this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = i),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe(
                {
                  next: () => {
                    this._zone.run(() => {
                      this.tick()
                    })
                  },
                }
              ))
            const o = new _((t) => {
                ;(this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete()
                  })
              }),
              a = new _((t) => {
                let e
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    $l.assertNotInAngularZone(),
                      Vl(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0))
                      })
                  })
                })
                const n = this._zone.onUnstable.subscribe(() => {
                  $l.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1)
                      }))
                })
                return () => {
                  e.unsubscribe(), n.unsubscribe()
                }
              })
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1]
              return (
                k(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      'number' == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : 'number' == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof _
                  ? t[0]
                  : H(e)(V(t, n))
              )
            })(o, a.pipe(X()))
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              )
            let n
            ;(n =
              t instanceof na
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType)
            const r = n.isBoundToModule ? void 0 : this._injector.get(Ba),
              i = n.create(Gs.NULL, [], e || n.selector, r),
              s = i.location.nativeElement,
              o = i.injector.get(Xl, null),
              a = o && i.injector.get(Jl)
            return (
              o && a && a.registerApplication(s, o),
              i.onDestroy(() => {
                this.detachView(i.hostView),
                  dc(this.components, i),
                  a && a.unregisterApplication(s)
              }),
              this._loadComponent(i),
              ic() &&
                this._console.log(
                  'Angular is running in development mode. Call enableProdMode() to enable production mode.'
                ),
              i
            )
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively')
            try {
              this._runningTick = !0
              for (let t of this._views) t.detectChanges()
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              )
            } finally {
              this._runningTick = !1
            }
          }
          attachView(t) {
            const e = t
            this._views.push(e), e.attachToAppRef(this)
          }
          detachView(t) {
            const e = t
            dc(this._views, e), e.detachFromAppRef()
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Rl, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t))
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe()
          }
          get viewCount() {
            return this._views.length
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or($l), or(Pl), or(Gs), or(Kr), or(ia), or(kl))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      function dc(t, e) {
        const n = t.indexOf(e)
        n > -1 && t.splice(n, 1)
      }
      class pc {}
      class fc {}
      const mc = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' }
      let gc = (() => {
        class t {
          constructor(t, e) {
            ;(this._compiler = t), (this._config = e || mc)
          }
          load(t) {
            return this.loadAndCompile(t)
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#')
            return (
              void 0 === r && (r = 'default'),
              n('xb4r')(e)
                .then((t) => t[r])
                .then((t) => yc(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            )
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              i = 'NgFactory'
            return (
              void 0 === r && ((r = 'default'), (i = '')),
              n('xb4r')(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + i])
                .then((t) => yc(t, e, r))
            )
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(ql), or(fc, 8))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      function yc(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`)
        return t
      }
      const _c = ac(null, 'core', [
          { provide: Ol, useValue: 'unknown' },
          { provide: cc, deps: [Gs] },
          { provide: Jl, deps: [] },
          { provide: Pl, deps: [] },
        ]),
        vc = [
          { provide: hc, useClass: hc, deps: [$l, Pl, Gs, Kr, ia, kl] },
          {
            provide: Ja,
            deps: [$l],
            useFactory: function (t) {
              let e = []
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()()
                }),
                function (t) {
                  e.push(t)
                }
              )
            },
          },
          { provide: kl, useClass: kl, deps: [[new Zn(), El]] },
          { provide: ql, useClass: ql, deps: [] },
          Tl,
          {
            provide: ka,
            useFactory: function () {
              return Ma
            },
            deps: [],
          },
          {
            provide: xa,
            useFactory: function () {
              return Fa
            },
            deps: [],
          },
          {
            provide: Dl,
            useFactory: function (t) {
              return (
                Ko(
                  (t =
                    t ||
                    ('undefined' != typeof $localize && $localize.locale) ||
                    $o)
                ),
                t
              )
            },
            deps: [[new Gn(Dl), new Zn(), new Xn()]],
          },
          { provide: Ml, useValue: 'USD' },
        ]
      let bc = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = Bt({ type: t })),
          (t.ɵinj = at({
            factory: function (e) {
              return new (e || t)(or(hc))
            },
            providers: vc,
          })),
          t
        )
      })()
      const wc = {
        rtc: { iceServers: [{ urls: 'stun:ubuntu.gui:3478' }] },
        socket: { uri: 'http://localhost:3000' },
      }
      let Sc = null
      function Cc() {
        return Sc
      }
      const Ec = new zn('DocumentToken')
      let kc = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵprov = ot({ factory: xc, token: t, providedIn: 'platform' })),
          t
        )
      })()
      function xc() {
        return or(Ic)
      }
      const Tc = new zn('Location Initialized')
      let Ic = (() => {
        class t extends kc {
          constructor(t) {
            super(), (this._doc = t), this._init()
          }
          _init() {
            ;(this.location = Cc().getLocation()),
              (this._history = Cc().getHistory())
          }
          getBaseHrefFromDOM() {
            return Cc().getBaseHref(this._doc)
          }
          onPopState(t) {
            Cc()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', t, !1)
          }
          onHashChange(t) {
            Cc()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', t, !1)
          }
          get href() {
            return this.location.href
          }
          get protocol() {
            return this.location.protocol
          }
          get hostname() {
            return this.location.hostname
          }
          get port() {
            return this.location.port
          }
          get pathname() {
            return this.location.pathname
          }
          get search() {
            return this.location.search
          }
          get hash() {
            return this.location.hash
          }
          set pathname(t) {
            this.location.pathname = t
          }
          pushState(t, e, n) {
            Ac() ? this._history.pushState(t, e, n) : (this.location.hash = n)
          }
          replaceState(t, e, n) {
            Ac()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n)
          }
          forward() {
            this._history.forward()
          }
          back() {
            this._history.back()
          }
          getState() {
            return this._history.state
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Ec))
          }),
          (t.ɵprov = ot({ factory: Oc, token: t, providedIn: 'platform' })),
          t
        )
      })()
      function Ac() {
        return !!window.history.pushState
      }
      function Oc() {
        return new Ic(or(Ec))
      }
      function Rc(t, e) {
        if (0 == t.length) return e
        if (0 == e.length) return t
        let n = 0
        return (
          t.endsWith('/') && n++,
          e.startsWith('/') && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        )
      }
      function Pc(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n)
      }
      function Dc(t) {
        return t && '?' !== t[0] ? '?' + t : t
      }
      let Mc = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵprov = ot({ factory: Fc, token: t, providedIn: 'root' })),
          t
        )
      })()
      function Fc(t) {
        const e = or(Ec).location
        return new jc(or(kc), (e && e.origin) || '')
      }
      const Nc = new zn('appBaseHref')
      let jc = (() => {
          class t extends Mc {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                )
              this._baseHref = e
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
            }
            getBaseHref() {
              return this._baseHref
            }
            prepareExternalUrl(t) {
              return Rc(this._baseHref, t)
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  Dc(this._platformLocation.search),
                n = this._platformLocation.hash
              return n && t ? `${e}${n}` : e
            }
            pushState(t, e, n, r) {
              const i = this.prepareExternalUrl(n + Dc(r))
              this._platformLocation.pushState(t, e, i)
            }
            replaceState(t, e, n, r) {
              const i = this.prepareExternalUrl(n + Dc(r))
              this._platformLocation.replaceState(t, e, i)
            }
            forward() {
              this._platformLocation.forward()
            }
            back() {
              this._platformLocation.back()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(kc), or(Nc, 8))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        zc = (() => {
          class t extends Mc {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                null != e && (this._baseHref = e)
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
            }
            getBaseHref() {
              return this._baseHref
            }
            path(t = !1) {
              let e = this._platformLocation.hash
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e
            }
            prepareExternalUrl(t) {
              const e = Rc(this._baseHref, t)
              return e.length > 0 ? '#' + e : e
            }
            pushState(t, e, n, r) {
              let i = this.prepareExternalUrl(n + Dc(r))
              0 == i.length && (i = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, i)
            }
            replaceState(t, e, n, r) {
              let i = this.prepareExternalUrl(n + Dc(r))
              0 == i.length && (i = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, i)
            }
            forward() {
              this._platformLocation.forward()
            }
            back() {
              this._platformLocation.back()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(kc), or(Nc, 8))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        Lc = (() => {
          class t {
            constructor(t, e) {
              ;(this._subject = new al()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t)
              const n = this._platformStrategy.getBaseHref()
              ;(this._platformLocation = e),
                (this._baseHref = Pc(Bc(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  })
                })
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t))
            }
            getState() {
              return this._platformLocation.getState()
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + Dc(e))
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e
                })(this._baseHref, Bc(e))
              )
            }
            prepareExternalUrl(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t),
                this._platformStrategy.prepareExternalUrl(t)
              )
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Dc(e)),
                  n
                )
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Dc(e)),
                  n
                )
            }
            forward() {
              this._platformStrategy.forward()
            }
            back() {
              this._platformStrategy.back()
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state)
                  }))
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach((n) => n(t, e))
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({ next: t, error: e, complete: n })
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Mc), or(kc))
            }),
            (t.normalizeQueryParams = Dc),
            (t.joinWithSlash = Rc),
            (t.stripTrailingSlash = Pc),
            (t.ɵprov = ot({ factory: Uc, token: t, providedIn: 'root' })),
            t
          )
        })()
      function Uc() {
        return new Lc(or(Mc), or(kc))
      }
      function Bc(t) {
        return t.replace(/\/index.html$/, '')
      }
      var qc = (function (t) {
        return (
          (t[(t.Zero = 0)] = 'Zero'),
          (t[(t.One = 1)] = 'One'),
          (t[(t.Two = 2)] = 'Two'),
          (t[(t.Few = 3)] = 'Few'),
          (t[(t.Many = 4)] = 'Many'),
          (t[(t.Other = 5)] = 'Other'),
          t
        )
      })({})
      class Hc {}
      let Vc = (() => {
          class t extends Hc {
            constructor(t) {
              super(), (this.locale = t)
            }
            getPluralCategory(t, e) {
              switch (
                (function (t) {
                  return (function (t) {
                    const e = (function (t) {
                      return t.toLowerCase().replace(/_/g, '-')
                    })(t)
                    let n = Ho(e)
                    if (n) return n
                    const r = e.split('-')[0]
                    if (((n = Ho(r)), n)) return n
                    if ('en' === r) return Bo
                    throw new Error(
                      `Missing locale data for the locale "${t}".`
                    )
                  })(t)[Vo.PluralCase]
                })(e || this.locale)(t)
              ) {
                case qc.Zero:
                  return 'zero'
                case qc.One:
                  return 'one'
                case qc.Two:
                  return 'two'
                case qc.Few:
                  return 'few'
                case qc.Many:
                  return 'many'
                default:
                  return 'other'
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Dl))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        $c = (() => {
          class t {
            constructor(t, e, n, r) {
              ;(this._iterableDiffers = t),
                (this._keyValueDiffers = e),
                (this._ngEl = n),
                (this._renderer = r),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._initialClasses = []),
                (this._rawClass = null)
            }
            set klass(t) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses =
                  'string' == typeof t ? t.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass)
            }
            set ngClass(t) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
                this._rawClass &&
                  (so(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers
                        .find(this._rawClass)
                        .create())
                    : (this._keyValueDiffer = this._keyValueDiffers
                        .find(this._rawClass)
                        .create()))
            }
            ngDoCheck() {
              if (this._iterableDiffer) {
                const t = this._iterableDiffer.diff(this._rawClass)
                t && this._applyIterableChanges(t)
              } else if (this._keyValueDiffer) {
                const t = this._keyValueDiffer.diff(this._rawClass)
                t && this._applyKeyValueChanges(t)
              }
            }
            _applyKeyValueChanges(t) {
              t.forEachAddedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
                t.forEachChangedItem((t) =>
                  this._toggleClass(t.key, t.currentValue)
                ),
                t.forEachRemovedItem((t) => {
                  t.previousValue && this._toggleClass(t.key, !1)
                })
            }
            _applyIterableChanges(t) {
              t.forEachAddedItem((t) => {
                if ('string' != typeof t.item)
                  throw new Error(
                    'NgClass can only toggle CSS classes expressed as strings, got ' +
                      et(t.item)
                  )
                this._toggleClass(t.item, !0)
              }),
                t.forEachRemovedItem((t) => this._toggleClass(t.item, !1))
            }
            _applyClasses(t) {
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach((t) => this._toggleClass(t, !0))
                  : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])))
            }
            _removeClasses(t) {
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach((t) => this._toggleClass(t, !1))
                  : Object.keys(t).forEach((t) => this._toggleClass(t, !1)))
            }
            _toggleClass(t, e) {
              ;(t = t.trim()) &&
                t.split(/\s+/g).forEach((t) => {
                  e
                    ? this._renderer.addClass(this._ngEl.nativeElement, t)
                    : this._renderer.removeClass(this._ngEl.nativeElement, t)
                })
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ho(ka), ho(xa), ho(la), ho(ua))
            }),
            (t.ɵdir = Ht({
              type: t,
              selectors: [['', 'ngClass', '']],
              inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
            })),
            t
          )
        })()
      class Wc {
        constructor(t, e, n, r) {
          ;(this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r)
        }
        get first() {
          return 0 === this.index
        }
        get last() {
          return this.index === this.count - 1
        }
        get even() {
          return this.index % 2 == 0
        }
        get odd() {
          return !this.even
        }
      }
      let Kc = (() => {
        class t {
          constructor(t, e, n) {
            ;(this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null)
          }
          set ngForOf(t) {
            ;(this._ngForOf = t), (this._ngForOfDirty = !0)
          }
          set ngForTrackBy(t) {
            this._trackByFn = t
          }
          get ngForTrackBy() {
            return this._trackByFn
          }
          set ngForTemplate(t) {
            t && (this._template = t)
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1
              const n = this._ngForOf
              if (!this._differ && n)
                try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy)
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  )
                }
            }
            var t
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf)
              t && this._applyChanges(t)
            }
          }
          _applyChanges(t) {
            const e = []
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Wc(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  i = new Qc(t, n)
                e.push(i)
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n)
              else if (null !== n) {
                const i = this._viewContainer.get(n)
                this._viewContainer.move(i, r)
                const s = new Qc(t, i)
                e.push(s)
              }
            })
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record)
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n)
              ;(t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf)
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit = t.item
            })
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item
          }
          static ngTemplateContextGuard(t, e) {
            return !0
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(Va), ho(ja), ho(ka))
          }),
          (t.ɵdir = Ht({
            type: t,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
          })),
          t
        )
      })()
      class Qc {
        constructor(t, e) {
          ;(this.record = t), (this.view = e)
        }
      }
      let Gc = (() => {
        class t {
          constructor(t, e) {
            ;(this._viewContainer = t),
              (this._context = new Zc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e)
          }
          set ngIf(t) {
            ;(this._context.$implicit = this._context.ngIf = t),
              this._updateView()
          }
          set ngIfThen(t) {
            Yc('ngIfThen', t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView()
          }
          set ngIfElse(t) {
            Yc('ngIfElse', t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView()
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )))
          }
          static ngTemplateContextGuard(t, e) {
            return !0
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(Va), ho(ja))
          }),
          (t.ɵdir = Ht({
            type: t,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
          })),
          t
        )
      })()
      class Zc {
        constructor() {
          ;(this.$implicit = null), (this.ngIf = null)
        }
      }
      function Yc(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${et(e)}'.`
          )
      }
      let Xc = (() => {
        class t {
          constructor(t, e, n) {
            ;(this._ngEl = t),
              (this._differs = e),
              (this._renderer = n),
              (this._ngStyle = null),
              (this._differ = null)
          }
          set ngStyle(t) {
            ;(this._ngStyle = t),
              !this._differ &&
                t &&
                (this._differ = this._differs.find(t).create())
          }
          ngDoCheck() {
            if (this._differ) {
              const t = this._differ.diff(this._ngStyle)
              t && this._applyChanges(t)
            }
          }
          _setStyle(t, e) {
            const [n, r] = t.split('.')
            null != (e = null != e && r ? `${e}${r}` : e)
              ? this._renderer.setStyle(this._ngEl.nativeElement, n, e)
              : this._renderer.removeStyle(this._ngEl.nativeElement, n)
          }
          _applyChanges(t) {
            t.forEachRemovedItem((t) => this._setStyle(t.key, null)),
              t.forEachAddedItem((t) => this._setStyle(t.key, t.currentValue)),
              t.forEachChangedItem((t) => this._setStyle(t.key, t.currentValue))
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(la), ho(xa), ho(ua))
          }),
          (t.ɵdir = Ht({
            type: t,
            selectors: [['', 'ngStyle', '']],
            inputs: { ngStyle: 'ngStyle' },
          })),
          t
        )
      })()
      class Jc {
        createSubscription(t, e) {
          return t.subscribe({
            next: e,
            error: (t) => {
              throw t
            },
          })
        }
        dispose(t) {
          t.unsubscribe()
        }
        onDestroy(t) {
          t.unsubscribe()
        }
      }
      class tu {
        createSubscription(t, e) {
          return t.then(e, (t) => {
            throw t
          })
        }
        dispose(t) {}
        onDestroy(t) {}
      }
      const eu = new tu(),
        nu = new Jc()
      let ru = (() => {
          class t {
            constructor(t) {
              ;(this._ref = t),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null)
            }
            ngOnDestroy() {
              this._subscription && this._dispose()
            }
            transform(t) {
              return this._obj
                ? t !== this._obj
                  ? (this._dispose(), this.transform(t))
                  : this._latestValue
                : (t && this._subscribe(t), this._latestValue)
            }
            _subscribe(t) {
              ;(this._obj = t),
                (this._strategy = this._selectStrategy(t)),
                (this._subscription = this._strategy.createSubscription(
                  t,
                  (e) => this._updateLatestValue(t, e)
                ))
            }
            _selectStrategy(e) {
              if (vo(e)) return eu
              if (bo(e)) return nu
              throw Error(`InvalidPipeArgument: '${e}' for pipe '${et(t)}'`)
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null)
            }
            _updateLatestValue(t, e) {
              t === this._obj &&
                ((this._latestValue = e), this._ref.markForCheck())
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                (function (t = mt.Default) {
                  const e = Pa(!0)
                  if (null != e || t & mt.Optional) return e
                  se('ChangeDetectorRef')
                })()
              )
            }),
            (t.ɵpipe = Vt({ name: 'async', type: t, pure: !1 })),
            t
          )
        })(),
        iu = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [{ provide: Hc, useClass: Vc }],
            })),
            t
          )
        })(),
        su = (() => {
          class t {}
          return (
            (t.ɵprov = ot({
              token: t,
              providedIn: 'root',
              factory: () => new ou(or(Ec), window, or(Kr)),
            })),
            t
          )
        })()
      class ou {
        constructor(t, e, n) {
          ;(this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0])
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0]
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
        }
        scrollToAnchor(t) {
          if (this.supportsScrolling()) {
            const e =
              this.document.getElementById(t) ||
              this.document.getElementsByName(t)[0]
            e && this.scrollToElement(e)
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history
            e && e.scrollRestoration && (e.scrollRestoration = t)
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            i = this.offset()
          this.window.scrollTo(n - i[0], r - i[1])
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1
            const t =
              au(this.window.history) ||
              au(Object.getPrototypeOf(this.window.history))
            return !(!t || (!t.writable && !t.set))
          } catch (t) {
            return !1
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            )
          } catch (t) {
            return !1
          }
        }
      }
      function au(t) {
        return Object.getOwnPropertyDescriptor(t, 'scrollRestoration')
      }
      class lu extends class extends class {} {
        constructor() {
          super()
        }
        supportsDOMEvents() {
          return !0
        }
      } {
        static makeCurrent() {
          var t
          ;(t = new lu()), Sc || (Sc = t)
        }
        getProperty(t, e) {
          return t[e]
        }
        log(t) {
          window.console && window.console.log && window.console.log(t)
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t)
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd()
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1)
            }
          )
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e)
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t
        }
        getValue(t) {
          return t.value
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t)
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle')
        }
        getDefaultDocument() {
          return document
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e
            ? window
            : 'document' === e
            ? t
            : 'body' === e
            ? t.body
            : null
        }
        getHistory() {
          return window.history
        }
        getLocation() {
          return window.location
        }
        getBaseHref(t) {
          const e =
            uu || ((uu = document.querySelector('base')), uu)
              ? uu.getAttribute('href')
              : null
          return null == e
            ? null
            : ((n = e),
              cu || (cu = document.createElement('a')),
              cu.setAttribute('href', n),
              '/' === cu.pathname.charAt(0) ? cu.pathname : '/' + cu.pathname)
          var n
        }
        resetBaseElement() {
          uu = null
        }
        getUserAgent() {
          return window.navigator.userAgent
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime()
        }
        supportsCookies() {
          return !0
        }
        getCookie(t) {
          return (function (t, e) {
            e = encodeURIComponent(e)
            for (const n of t.split(';')) {
              const t = n.indexOf('='),
                [r, i] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)]
              if (r.trim() === e) return decodeURIComponent(i)
            }
            return null
          })(document.cookie, t)
        }
      }
      let cu,
        uu = null
      const hu = new zn('TRANSITION_ID'),
        du = [
          {
            provide: El,
            useFactory: function (t, e, n) {
              return () => {
                n.get(kl).donePromise.then(() => {
                  const n = Cc()
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter((e) => e.getAttribute('ng-transition') === t)
                    .forEach((t) => n.remove(t))
                })
              }
            },
            deps: [hu, Ec, Gs],
            multi: !0,
          },
        ]
      class pu {
        static init() {
          var t
          ;(t = new pu()), (nc = t)
        }
        addToWindow(t) {
          ;(xt.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n)
            if (null == r)
              throw new Error('Could not find testability for element.')
            return r
          }),
            (xt.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (xt.getAllAngularRootElements = () => t.getAllRootElements()),
            xt.frameworkStabilizers || (xt.frameworkStabilizers = []),
            xt.frameworkStabilizers.push((t) => {
              const e = xt.getAllAngularTestabilities()
              let n = e.length,
                r = !1
              const i = function (e) {
                ;(r = r || e), n--, 0 == n && t(r)
              }
              e.forEach(function (t) {
                t.whenStable(i)
              })
            })
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null
          const r = t.getTestability(e)
          return null != r
            ? r
            : n
            ? Cc().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null
        }
      }
      const fu = new zn('EventManagerPlugins')
      let mu = (() => {
        class t {
          constructor(t, e) {
            ;(this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse())
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n)
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n)
          }
          getZone() {
            return this._zone
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t)
            if (e) return e
            const n = this._plugins
            for (let r = 0; r < n.length; r++) {
              const e = n[r]
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
            }
            throw new Error('No event manager plugin found for event ' + t)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(fu), or($l))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      class gu {
        constructor(t) {
          this._doc = t
        }
        addGlobalEventListener(t, e, n) {
          const r = Cc().getGlobalEventTarget(this._doc, t)
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`)
          return this.addEventListener(r, e, n)
        }
      }
      let yu = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set()
            }
            addStyles(t) {
              const e = new Set()
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
              }),
                this.onStylesAdded(e)
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        _u = (() => {
          class t extends yu {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head)
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement('style')
                ;(n.textContent = t), this._styleNodes.add(e.appendChild(n))
              })
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
            }
            removeHost(t) {
              this._hostNodes.delete(t)
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e))
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Cc().remove(t))
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Ec))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })()
      const vu = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        bu = /%COMP%/g
      function wu(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let i = e[r]
          Array.isArray(i) ? wu(t, i, n) : ((i = i.replace(bu, t)), n.push(i))
        }
        return n
      }
      function Su(t) {
        return (e) => {
          if ('__ngUnwrap__' === e) return t
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1))
        }
      }
      let Cu = (() => {
        class t {
          constructor(t, e, n) {
            ;(this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Eu(t))
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer
            switch (e.encapsulation) {
              case wt.Emulated: {
                let n = this.rendererByCompId.get(e.id)
                return (
                  n ||
                    ((n = new ku(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                )
              }
              case 1:
              case wt.ShadowDom:
                return new xu(this.eventManager, this.sharedStylesHost, t, e)
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = wu(e.id, e.styles, [])
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer)
                }
                return this.defaultRenderer
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(mu), or(_u), or(xl))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      class Eu {
        constructor(t) {
          ;(this.eventManager = t), (this.data = Object.create(null))
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(vu[e] || e, t)
            : document.createElement(t)
        }
        createComment(t) {
          return document.createComment(t)
        }
        createText(t) {
          return document.createTextNode(t)
        }
        appendChild(t, e) {
          t.appendChild(e)
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n)
        }
        removeChild(t, e) {
          t && t.removeChild(e)
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`)
          return e || (n.textContent = ''), n
        }
        parentNode(t) {
          return t.parentNode
        }
        nextSibling(t) {
          return t.nextSibling
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e
            const i = vu[r]
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
          } else t.setAttribute(e, n)
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = vu[n]
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
          } else t.removeAttribute(e)
        }
        addClass(t, e) {
          t.classList.add(e)
        }
        removeClass(t, e) {
          t.classList.remove(e)
        }
        setStyle(t, e, n, r) {
          r & (Xr.DashCase | Xr.Important)
            ? t.style.setProperty(e, n, r & Xr.Important ? 'important' : '')
            : (t.style[e] = n)
        }
        removeStyle(t, e, n) {
          n & Xr.DashCase ? t.style.removeProperty(e) : (t.style[e] = '')
        }
        setProperty(t, e, n) {
          t[e] = n
        }
        setValue(t, e) {
          t.nodeValue = e
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, Su(n))
            : this.eventManager.addEventListener(t, e, Su(n))
        }
      }
      class ku extends Eu {
        constructor(t, e, n, r) {
          super(t), (this.component = n)
          const i = wu(r + '-' + n.id, n.styles, [])
          e.addStyles(i),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(
              bu,
              r + '-' + n.id
            )),
            (this.hostAttr = '_nghost-%COMP%'.replace(bu, r + '-' + n.id))
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '')
        }
        createElement(t, e) {
          const n = super.createElement(t, e)
          return super.setAttribute(n, this.contentAttr, ''), n
        }
      }
      class xu extends Eu {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot)
          const i = wu(r.id, r.styles, [])
          for (let s = 0; s < i.length; s++) {
            const t = document.createElement('style')
            ;(t.textContent = i[s]), this.shadowRoot.appendChild(t)
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot)
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e)
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e)
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          )
        }
      }
      let Tu = (() => {
        class t extends gu {
          constructor(t) {
            super(t)
          }
          supports(t) {
            return !0
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            )
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Ec))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const Iu = ['alt', 'control', 'meta', 'shift'],
        Au = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Ou = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        Ru = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        }
      let Pu = (() => {
          class t extends gu {
            constructor(t) {
              super(t)
            }
            supports(e) {
              return null != t.parseEventName(e)
            }
            addEventListener(e, n, r) {
              const i = t.parseEventName(n),
                s = t.eventCallback(i.fullKey, r, this.manager.getZone())
              return this.manager
                .getZone()
                .runOutsideAngular(() => Cc().onAndCancel(e, i.domEventName, s))
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split('.'),
                r = n.shift()
              if (0 === n.length || ('keydown' !== r && 'keyup' !== r))
                return null
              const i = t._normalizeKey(n.pop())
              let s = ''
              if (
                (Iu.forEach((t) => {
                  const e = n.indexOf(t)
                  e > -1 && (n.splice(e, 1), (s += t + '.'))
                }),
                (s += i),
                0 != n.length || 0 === i.length)
              )
                return null
              const o = {}
              return (o.domEventName = r), (o.fullKey = s), o
            }
            static getEventFullKey(t) {
              let e = '',
                n = (function (t) {
                  let e = t.key
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e))
                      return 'Unidentified'
                    e.startsWith('U+') &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && Ou.hasOwnProperty(e) && (e = Ou[e]))
                  }
                  return Au[e] || e
                })(t)
              return (
                (n = n.toLowerCase()),
                ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
                Iu.forEach((r) => {
                  r != n && (0, Ru[r])(t) && (e += r + '.')
                }),
                (e += n),
                e
              )
            }
            static eventCallback(e, n, r) {
              return (i) => {
                t.getEventFullKey(i) === e && r.runGuarded(() => n(i))
              }
            }
            static _normalizeKey(t) {
              switch (t) {
                case 'esc':
                  return 'escape'
                default:
                  return t
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Ec))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        Du = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({
              factory: function () {
                return or(Mu)
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        Mu = (() => {
          class t extends Du {
            constructor(t) {
              super(), (this._doc = t)
            }
            sanitize(t, e) {
              if (null == e) return null
              switch (t) {
                case qr.NONE:
                  return e
                case qr.HTML:
                  return _r(e, 'HTML')
                    ? yr(e)
                    : (function (t, e) {
                        let n = null
                        try {
                          Ur =
                            Ur ||
                            (function (t) {
                              return (function () {
                                try {
                                  return !!new window.DOMParser().parseFromString(
                                    ur(''),
                                    'text/html'
                                  )
                                } catch (t) {
                                  return !1
                                }
                              })()
                                ? new br()
                                : new wr(t)
                            })(t)
                          let r = e ? String(e) : ''
                          n = Ur.getInertBodyElement(r)
                          let i = 5,
                            s = r
                          do {
                            if (0 === i)
                              throw new Error(
                                'Failed to sanitize html because the input is unstable'
                              )
                            i--,
                              (r = s),
                              (s = n.innerHTML),
                              (n = Ur.getInertBodyElement(r))
                          } while (r !== s)
                          return new Nr().sanitizeChildren(Br(n) || n)
                        } finally {
                          if (n) {
                            const t = Br(n) || n
                            for (; t.firstChild; ) t.removeChild(t.firstChild)
                          }
                        }
                      })(this._doc, String(e))
                case qr.STYLE:
                  return _r(e, 'Style') ? yr(e) : e
                case qr.SCRIPT:
                  if (_r(e, 'Script')) return yr(e)
                  throw new Error('unsafe value used in a script context')
                case qr.URL:
                  return vr(e), _r(e, 'URL') ? yr(e) : Er(String(e))
                case qr.RESOURCE_URL:
                  if (_r(e, 'ResourceURL')) return yr(e)
                  throw new Error(
                    'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)'
                  )
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${t} (see https://g.co/ng/security#xss)`
                  )
              }
            }
            bypassSecurityTrustHtml(t) {
              return new dr(t)
            }
            bypassSecurityTrustStyle(t) {
              return new pr(t)
            }
            bypassSecurityTrustScript(t) {
              return new fr(t)
            }
            bypassSecurityTrustUrl(t) {
              return new mr(t)
            }
            bypassSecurityTrustResourceUrl(t) {
              return new gr(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Ec))
            }),
            (t.ɵprov = ot({
              factory: function () {
                return (t = or(Ds)), new Mu(t.get(Ec))
                var t
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })()
      const Fu = ac(_c, 'browser', [
          { provide: Ol, useValue: 'browser' },
          {
            provide: Al,
            useValue: function () {
              lu.makeCurrent(), pu.init()
            },
            multi: !0,
          },
          {
            provide: Ec,
            useFactory: function () {
              return (
                (function (t) {
                  ue = t
                })(document),
                document
              )
            },
            deps: [],
          },
        ]),
        Nu = [
          [],
          { provide: Fs, useValue: 'root' },
          {
            provide: Kr,
            useFactory: function () {
              return new Kr()
            },
            deps: [],
          },
          { provide: fu, useClass: Tu, multi: !0, deps: [Ec, $l, Ol] },
          { provide: fu, useClass: Pu, multi: !0, deps: [Ec] },
          [],
          { provide: Cu, useClass: Cu, deps: [mu, _u, xl] },
          { provide: ca, useExisting: Cu },
          { provide: yu, useExisting: _u },
          { provide: _u, useClass: _u, deps: [Ec] },
          { provide: Xl, useClass: Xl, deps: [$l] },
          { provide: mu, useClass: mu, deps: [fu, $l] },
          [],
        ]
      let ju,
        zu = (() => {
          class t {
            constructor(t) {
              if (t)
                throw new Error(
                  'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
                )
            }
            static withServerTransition(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: xl, useValue: e.appId },
                  { provide: hu, useExisting: xl },
                  du,
                ],
              }
            }
          }
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)(or(t, 12))
              },
              providers: Nu,
              imports: [iu, bc],
            })),
            t
          )
        })()
      'undefined' != typeof window && window
      try {
        ju = 'undefined' != typeof Intl && Intl.v8BreakIterator
      } catch (CC) {
        ju = !1
      }
      let Lu,
        Uu,
        Bu = (() => {
          class t {
            constructor(t) {
              ;(this._platformId = t),
                (this.isBrowser = this._platformId
                  ? 'browser' === this._platformId
                  : 'object' == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !ju) &&
                  'undefined' != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(Ol))
            }),
            (t.ɵprov = ot({
              factory: function () {
                return new t(or(Ol))
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        qu = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
            })),
            t
          )
        })()
      function Hu(t) {
        return (function () {
          if (null == Lu && 'undefined' != typeof window)
            try {
              window.addEventListener(
                'test',
                null,
                Object.defineProperty({}, 'passive', { get: () => (Lu = !0) })
              )
            } finally {
              Lu = Lu || !1
            }
          return Lu
        })()
          ? t
          : !!t.capture
      }
      function Vu(...t) {
        let e = t[t.length - 1]
        return k(e) ? (t.pop(), z(t, e)) : V(t)
      }
      function $u() {}
      function Wu(t, e, n) {
        return function (r) {
          return r.lift(new Ku(t, e, n))
        }
      }
      class Ku {
        constructor(t, e, n) {
          ;(this.nextOrObserver = t), (this.error = e), (this.complete = n)
        }
        call(t, e) {
          return e.subscribe(
            new Qu(t, this.nextOrObserver, this.error, this.complete)
          )
        }
      }
      class Qu extends f {
        constructor(t, e, n, i) {
          super(t),
            (this._tapNext = $u),
            (this._tapError = $u),
            (this._tapComplete = $u),
            (this._tapError = n || $u),
            (this._tapComplete = i || $u),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || $u),
                (this._tapError = e.error || $u),
                (this._tapComplete = e.complete || $u))
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t)
          } catch (e) {
            return void this.destination.error(e)
          }
          this.destination.next(t)
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t)
          } catch (t) {
            return void this.destination.error(t)
          }
          this.destination.error(t)
        }
        _complete() {
          try {
            this._tapComplete.call(this._context)
          } catch (t) {
            return void this.destination.error(t)
          }
          return this.destination.complete()
        }
      }
      function Gu(t, e) {
        return function (n) {
          return n.lift(new Zu(t, e))
        }
      }
      class Zu {
        constructor(t, e) {
          ;(this.predicate = t), (this.thisArg = e)
        }
        call(t, e) {
          return e.subscribe(new Yu(t, this.predicate, this.thisArg))
        }
      }
      class Yu extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0)
        }
        _next(t) {
          let e
          try {
            e = this.predicate.call(this.thisArg, t, this.count++)
          } catch (n) {
            return void this.destination.error(n)
          }
          e && this.destination.next(t)
        }
      }
      const Xu = (() => {
          function t() {
            return (
              Error.call(this),
              (this.message = 'argument out of range'),
              (this.name = 'ArgumentOutOfRangeError'),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })(),
        Ju = new _((t) => t.complete())
      function th(t) {
        return t
          ? (function (t) {
              return new _((e) => t.schedule(() => e.complete()))
            })(t)
          : Ju
      }
      function eh(t) {
        return (e) => (0 === t ? th() : e.lift(new nh(t)))
      }
      class nh {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Xu()
        }
        call(t, e) {
          return e.subscribe(new rh(t, this.total))
        }
      }
      class rh extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0)
        }
        _next(t) {
          const e = this.total,
            n = ++this.count
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()))
        }
      }
      function ih(t) {
        return null != t && '' + t != 'false'
      }
      function sh(t, e = 0) {
        return (function (t) {
          return !isNaN(parseFloat(t)) && !isNaN(Number(t))
        })(t)
          ? Number(t)
          : e
      }
      function oh(t) {
        return t instanceof la ? t.nativeElement : t
      }
      function ah(t) {
        return 0 === t.buttons
      }
      'undefined' != typeof Element && Element
      const lh = new zn('cdk-focus-monitor-default-options'),
        ch = Hu({ passive: !0, capture: !0 })
      let uh = (() => {
        class t {
          constructor(t, e, n, r) {
            ;(this._ngZone = t),
              (this._platform = e),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._documentKeydownListener = () => {
                ;(this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue('keyboard')
              }),
              (this._documentMousedownListener = (t) => {
                if (!this._lastTouchTarget) {
                  const e = ah(t) ? 'keyboard' : 'mouse'
                  this._setOriginForCurrentEventQueue(e)
                }
              }),
              (this._documentTouchstartListener = (t) => {
                null != this._touchTimeoutId &&
                  clearTimeout(this._touchTimeoutId),
                  (this._lastTouchTarget = hh(t)),
                  (this._touchTimeoutId = setTimeout(
                    () => (this._lastTouchTarget = null),
                    650
                  ))
              }),
              (this._windowFocusListener = () => {
                ;(this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ))
              }),
              (this._rootNodeFocusAndBlurListener = (t) => {
                const e = hh(t),
                  n = 'focus' === t.type ? this._onFocus : this._onBlur
                for (let r = e; r; r = r.parentElement) n.call(this, t, r)
              }),
              (this._document = n),
              (this._detectionMode =
                (null == r ? void 0 : r.detectionMode) || 0)
          }
          monitor(t, e = !1) {
            const n = oh(t)
            if (!this._platform.isBrowser || 1 !== n.nodeType) return Vu(null)
            const r =
                (function (t) {
                  if (
                    (function () {
                      if (null == Uu) {
                        const t =
                          'undefined' != typeof document ? document.head : null
                        Uu = !(!t || (!t.createShadowRoot && !t.attachShadow))
                      }
                      return Uu
                    })()
                  ) {
                    const e = t.getRootNode ? t.getRootNode() : null
                    if (
                      'undefined' != typeof ShadowRoot &&
                      ShadowRoot &&
                      e instanceof ShadowRoot
                    )
                      return e
                  }
                  return null
                })(n) || this._getDocument(),
              i = this._elementInfo.get(n)
            if (i) return e && (i.checkChildren = !0), i.subject
            const s = { checkChildren: e, subject: new C(), rootNode: r }
            return (
              this._elementInfo.set(n, s),
              this._registerGlobalListeners(s),
              s.subject
            )
          }
          stopMonitoring(t) {
            const e = oh(t),
              n = this._elementInfo.get(e)
            n &&
              (n.subject.complete(),
              this._setClasses(e),
              this._elementInfo.delete(e),
              this._removeGlobalListeners(n))
          }
          focusVia(t, e, n) {
            const r = oh(t)
            r === this._getDocument().activeElement && this._elementInfo.has(r)
              ? this._originChanged(r, e, this._elementInfo.get(r))
              : (this._setOriginForCurrentEventQueue(e),
                'function' == typeof r.focus && r.focus(n))
          }
          ngOnDestroy() {
            this._elementInfo.forEach((t, e) => this.stopMonitoring(e))
          }
          _getDocument() {
            return this._document || document
          }
          _getWindow() {
            return this._getDocument().defaultView || window
          }
          _toggleClass(t, e, n) {
            n ? t.classList.add(e) : t.classList.remove(e)
          }
          _getFocusOrigin(t) {
            return this._origin
              ? this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : this._wasCausedByTouch(t)
              ? 'touch'
              : 'program'
          }
          _setClasses(t, e) {
            this._toggleClass(t, 'cdk-focused', !!e),
              this._toggleClass(t, 'cdk-touch-focused', 'touch' === e),
              this._toggleClass(t, 'cdk-keyboard-focused', 'keyboard' === e),
              this._toggleClass(t, 'cdk-mouse-focused', 'mouse' === e),
              this._toggleClass(t, 'cdk-program-focused', 'program' === e)
          }
          _setOriginForCurrentEventQueue(t) {
            this._ngZone.runOutsideAngular(() => {
              ;(this._origin = t),
                0 === this._detectionMode &&
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    1
                  ))
            })
          }
          _wasCausedByTouch(t) {
            const e = hh(t)
            return (
              this._lastTouchTarget instanceof Node &&
              e instanceof Node &&
              (e === this._lastTouchTarget || e.contains(this._lastTouchTarget))
            )
          }
          _onFocus(t, e) {
            const n = this._elementInfo.get(e)
            n &&
              (n.checkChildren || e === hh(t)) &&
              this._originChanged(e, this._getFocusOrigin(t), n)
          }
          _onBlur(t, e) {
            const n = this._elementInfo.get(e)
            !n ||
              (n.checkChildren &&
                t.relatedTarget instanceof Node &&
                e.contains(t.relatedTarget)) ||
              (this._setClasses(e), this._emitOrigin(n.subject, null))
          }
          _emitOrigin(t, e) {
            this._ngZone.run(() => t.next(e))
          }
          _registerGlobalListeners(t) {
            if (!this._platform.isBrowser) return
            const e = t.rootNode,
              n = this._rootNodeFocusListenerCount.get(e) || 0
            n ||
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener(
                  'focus',
                  this._rootNodeFocusAndBlurListener,
                  ch
                ),
                  e.addEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    ch
                  )
              }),
              this._rootNodeFocusListenerCount.set(e, n + 1),
              1 == ++this._monitoredElementCount &&
                this._ngZone.runOutsideAngular(() => {
                  const t = this._getDocument(),
                    e = this._getWindow()
                  t.addEventListener(
                    'keydown',
                    this._documentKeydownListener,
                    ch
                  ),
                    t.addEventListener(
                      'mousedown',
                      this._documentMousedownListener,
                      ch
                    ),
                    t.addEventListener(
                      'touchstart',
                      this._documentTouchstartListener,
                      ch
                    ),
                    e.addEventListener('focus', this._windowFocusListener)
                })
          }
          _removeGlobalListeners(t) {
            const e = t.rootNode
            if (this._rootNodeFocusListenerCount.has(e)) {
              const t = this._rootNodeFocusListenerCount.get(e)
              t > 1
                ? this._rootNodeFocusListenerCount.set(e, t - 1)
                : (e.removeEventListener(
                    'focus',
                    this._rootNodeFocusAndBlurListener,
                    ch
                  ),
                  e.removeEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    ch
                  ),
                  this._rootNodeFocusListenerCount.delete(e))
            }
            if (!--this._monitoredElementCount) {
              const t = this._getDocument(),
                e = this._getWindow()
              t.removeEventListener(
                'keydown',
                this._documentKeydownListener,
                ch
              ),
                t.removeEventListener(
                  'mousedown',
                  this._documentMousedownListener,
                  ch
                ),
                t.removeEventListener(
                  'touchstart',
                  this._documentTouchstartListener,
                  ch
                ),
                e.removeEventListener('focus', this._windowFocusListener),
                clearTimeout(this._windowFocusTimeoutId),
                clearTimeout(this._touchTimeoutId),
                clearTimeout(this._originTimeoutId)
            }
          }
          _originChanged(t, e, n) {
            this._setClasses(t, e),
              this._emitOrigin(n.subject, e),
              (this._lastFocusOrigin = e)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or($l), or(Bu), or(Ec, 8), or(lh, 8))
          }),
          (t.ɵprov = ot({
            factory: function () {
              return new t(or($l), or(Bu), or(Ec, 8), or(lh, 8))
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      function hh(t) {
        return t.composedPath ? t.composedPath()[0] : t.target
      }
      const dh = 'cdk-high-contrast-black-on-white',
        ph = 'cdk-high-contrast-white-on-black',
        fh = 'cdk-high-contrast-active'
      let mh = (() => {
        class t {
          constructor(t, e) {
            ;(this._platform = t), (this._document = e)
          }
          getHighContrastMode() {
            if (!this._platform.isBrowser) return 0
            const t = this._document.createElement('div')
            ;(t.style.backgroundColor = 'rgb(1,2,3)'),
              (t.style.position = 'absolute'),
              this._document.body.appendChild(t)
            const e = this._document.defaultView || window,
              n = e && e.getComputedStyle ? e.getComputedStyle(t) : null,
              r = ((n && n.backgroundColor) || '').replace(/ /g, '')
            switch ((this._document.body.removeChild(t), r)) {
              case 'rgb(0,0,0)':
                return 2
              case 'rgb(255,255,255)':
                return 1
            }
            return 0
          }
          _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
              const t = this._document.body.classList
              t.remove(fh), t.remove(dh), t.remove(ph)
              const e = this.getHighContrastMode()
              1 === e
                ? (t.add(fh), t.add(dh))
                : 2 === e && (t.add(fh), t.add(ph))
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Bu), or(Ec))
          }),
          (t.ɵprov = ot({
            factory: function () {
              return new t(or(Bu), or(Ec))
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      const gh = new zn('cdk-dir-doc', {
        providedIn: 'root',
        factory: function () {
          return ar(Ec)
        },
      })
      let yh = (() => {
          class t {
            constructor(t) {
              if (((this.value = 'ltr'), (this.change = new al()), t)) {
                const e = t.documentElement ? t.documentElement.dir : null,
                  n = (t.body ? t.body.dir : null) || e
                this.value = 'ltr' === n || 'rtl' === n ? n : 'ltr'
              }
            }
            ngOnDestroy() {
              this.change.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(gh, 8))
            }),
            (t.ɵprov = ot({
              factory: function () {
                return new t(or(gh, 8))
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        _h = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
            })),
            t
          )
        })()
      const vh = new pa('11.0.2')
      function bh() {
        return H(1)
      }
      function wh(...t) {
        return bh()(Vu(...t))
      }
      class Sh {}
      const Ch = '*'
      function Eh(t, e = null) {
        return { type: 2, steps: t, options: e }
      }
      function kh(t) {
        return { type: 6, styles: t, offset: null }
      }
      function xh(t) {
        Promise.resolve(null).then(t)
      }
      class Th {
        constructor(t = 0, e = 0) {
          ;(this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = t + e)
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []))
        }
        onStart(t) {
          this._onStartFns.push(t)
        }
        onDone(t) {
          this._onDoneFns.push(t)
        }
        onDestroy(t) {
          this._onDestroyFns.push(t)
        }
        hasStarted() {
          return this._started
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0)
        }
        triggerMicrotask() {
          xh(() => this._onFinish())
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = [])
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish()
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []))
        }
        reset() {}
        setPosition(t) {
          this._position = this.totalTime ? t * this.totalTime : 1
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns
          e.forEach((t) => t()), (e.length = 0)
        }
      }
      class Ih {
        constructor(t) {
          ;(this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t)
          let e = 0,
            n = 0,
            r = 0
          const i = this.players.length
          0 == i
            ? xh(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == i && this._onFinish()
                }),
                  t.onDestroy(() => {
                    ++n == i && this._onDestroy()
                  }),
                  t.onStart(() => {
                    ++r == i && this._onStart()
                  })
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ))
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []))
        }
        init() {
          this.players.forEach((t) => t.init())
        }
        onStart(t) {
          this._onStartFns.push(t)
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []))
        }
        onDone(t) {
          this._onDoneFns.push(t)
        }
        onDestroy(t) {
          this._onDestroyFns.push(t)
        }
        hasStarted() {
          return this._started
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play())
        }
        pause() {
          this.players.forEach((t) => t.pause())
        }
        restart() {
          this.players.forEach((t) => t.restart())
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish())
        }
        destroy() {
          this._onDestroy()
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []))
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1)
        }
        setPosition(t) {
          const e = t * this.totalTime
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1
            t.setPosition(n)
          })
        }
        getPosition() {
          const t = this.players.reduce(
            (t, e) => (null === t || e.totalTime > t.totalTime ? e : t),
            null
          )
          return null != t ? t.getPosition() : 0
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy()
          })
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns
          e.forEach((t) => t()), (e.length = 0)
        }
      }
      function Ah() {
        return (
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process)
        )
      }
      function Oh(t) {
        switch (t.length) {
          case 0:
            return new Th()
          case 1:
            return t[0]
          default:
            return new Ih(t)
        }
      }
      function Rh(t, e, n, r, i = {}, s = {}) {
        const o = [],
          a = []
        let l = -1,
          c = null
        if (
          (r.forEach((t) => {
            const n = t.offset,
              r = n == l,
              u = (r && c) || {}
            Object.keys(t).forEach((n) => {
              let r = n,
                a = t[n]
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, o)), a)) {
                  case '!':
                    a = i[n]
                    break
                  case Ch:
                    a = s[n]
                    break
                  default:
                    a = e.normalizeStyleValue(n, r, a, o)
                }
              u[r] = a
            }),
              r || a.push(u),
              (c = u),
              (l = n)
          }),
          o.length)
        ) {
          const t = '\n - '
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          )
        }
        return a
      }
      function Ph(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(() => r(n && Dh(n, 'start', t)))
            break
          case 'done':
            t.onDone(() => r(n && Dh(n, 'done', t)))
            break
          case 'destroy':
            t.onDestroy(() => r(n && Dh(n, 'destroy', t)))
        }
      }
      function Dh(t, e, n) {
        const r = n.totalTime,
          i = Mh(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          s = t._data
        return null != s && (i._data = s), i
      }
      function Mh(t, e, n, r, i = '', s = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: r,
          phaseName: i,
          totalTime: s,
          disabled: !!o,
        }
      }
      function Fh(t, e, n) {
        let r
        return (
          t instanceof Map
            ? ((r = t.get(e)), r || t.set(e, (r = n)))
            : ((r = t[e]), r || (r = t[e] = n)),
          r
        )
      }
      function Nh(t) {
        const e = t.indexOf(':')
        return [t.substring(1, e), t.substr(e + 1)]
      }
      let jh = (t, e) => !1,
        zh = (t, e) => !1,
        Lh = (t, e, n) => []
      const Uh = Ah()
      ;(Uh || 'undefined' != typeof Element) &&
        ((jh = (t, e) => t.contains(e)),
        (zh = (() => {
          if (Uh || Element.prototype.matches) return (t, e) => t.matches(e)
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector
            return e ? (t, n) => e.apply(t, [n]) : zh
          }
        })()),
        (Lh = (t, e, n) => {
          let r = []
          if (n) {
            const n = t.querySelectorAll(e)
            for (let t = 0; t < n.length; t++) r.push(n[t])
          } else {
            const n = t.querySelector(e)
            n && r.push(n)
          }
          return r
        }))
      let Bh = null,
        qh = !1
      function Hh(t) {
        Bh ||
          ((Bh = ('undefined' != typeof document ? document.body : null) || {}),
          (qh = !!Bh.style && 'WebkitAppearance' in Bh.style))
        let e = !0
        return (
          Bh.style &&
            !(function (t) {
              return 'ebkit' == t.substring(1, 6)
            })(t) &&
            ((e = t in Bh.style), !e && qh) &&
            (e =
              'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in Bh.style),
          e
        )
      }
      const Vh = zh,
        $h = jh,
        Wh = Lh
      function Kh(t) {
        const e = {}
        return (
          Object.keys(t).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, '$1-$2')
            e[r] = t[n]
          }),
          e
        )
      }
      let Qh = (() => {
          class t {
            validateStyleProperty(t) {
              return Hh(t)
            }
            matchesElement(t, e) {
              return Vh(t, e)
            }
            containsElement(t, e) {
              return $h(t, e)
            }
            query(t, e, n) {
              return Wh(t, e, n)
            }
            computeStyle(t, e, n) {
              return n || ''
            }
            animate(t, e, n, r, i, s = [], o) {
              return new Th(n, r)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        Gh = (() => {
          class t {}
          return (t.NOOP = new Qh()), t
        })()
      const Zh = 'ng-enter',
        Yh = 'ng-leave',
        Xh = 'ng-trigger',
        Jh = '.ng-trigger',
        td = 'ng-animating',
        ed = '.ng-animating'
      function nd(t) {
        if ('number' == typeof t) return t
        const e = t.match(/^(-?[\.\d]+)(m?s)/)
        return !e || e.length < 2 ? 0 : rd(parseFloat(e[1]), e[2])
      }
      function rd(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t
          default:
            return t
        }
      }
      function id(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function (t, e, n) {
              let r,
                i = 0,
                s = ''
              if ('string' == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                )
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: '' }
                  )
                r = rd(parseFloat(n[1]), n[2])
                const o = n[3]
                null != o && (i = rd(parseFloat(o), n[4]))
                const a = n[5]
                a && (s = a)
              } else r = t
              if (!n) {
                let n = !1,
                  s = e.length
                r < 0 &&
                  (e.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (n = !0)),
                  i < 0 &&
                    (e.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      s,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    )
              }
              return { duration: r, delay: i, easing: s }
            })(t, e, n)
      }
      function sd(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n]
          }),
          e
        )
      }
      function od(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r]
        else sd(t, n)
        return n
      }
      function ad(t, e, n) {
        return n ? e + ':' + n + ';' : ''
      }
      function ld(t) {
        let e = ''
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n)
          e += ad(0, r, t.style.getPropertyValue(r))
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (e += ad(
              0,
              n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              t.style[n]
            ))
        t.setAttribute('style', e)
      }
      function cd(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((r) => {
            const i = yd(r)
            n && !n.hasOwnProperty(r) && (n[r] = t.style[i]),
              (t.style[i] = e[r])
          }),
          Ah() && ld(t))
      }
      function ud(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = yd(e)
            t.style[n] = ''
          }),
          Ah() && ld(t))
      }
      function hd(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Eh(t)) : t
      }
      const dd = new RegExp('{{\\s*(.+?)\\s*}}', 'g')
      function pd(t) {
        let e = []
        if ('string' == typeof t) {
          let n
          for (; (n = dd.exec(t)); ) e.push(n[1])
          dd.lastIndex = 0
        }
        return e
      }
      function fd(t, e, n) {
        const r = t.toString(),
          i = r.replace(dd, (t, r) => {
            let i = e[r]
            return (
              e.hasOwnProperty(r) ||
                (n.push('Please provide a value for the animation param ' + r),
                (i = '')),
              i.toString()
            )
          })
        return i == r ? t : i
      }
      function md(t) {
        const e = []
        let n = t.next()
        for (; !n.done; ) e.push(n.value), (n = t.next())
        return e
      }
      const gd = /-+([a-z0-9])/g
      function yd(t) {
        return t.replace(gd, (...t) => t[1].toUpperCase())
      }
      function _d(t, e) {
        return 0 === t || 0 === e
      }
      function vd(t, e, n) {
        const r = Object.keys(n)
        if (r.length && e.length) {
          let s = e[0],
            o = []
          if (
            (r.forEach((t) => {
              s.hasOwnProperty(t) || o.push(t), (s[t] = n[t])
            }),
            o.length)
          )
            for (var i = 1; i < e.length; i++) {
              let n = e[i]
              o.forEach(function (e) {
                n[e] = wd(t, e)
              })
            }
        }
        return e
      }
      function bd(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n)
          case 0:
            return t.visitState(e, n)
          case 1:
            return t.visitTransition(e, n)
          case 2:
            return t.visitSequence(e, n)
          case 3:
            return t.visitGroup(e, n)
          case 4:
            return t.visitAnimate(e, n)
          case 5:
            return t.visitKeyframes(e, n)
          case 6:
            return t.visitStyle(e, n)
          case 8:
            return t.visitReference(e, n)
          case 9:
            return t.visitAnimateChild(e, n)
          case 10:
            return t.visitAnimateRef(e, n)
          case 11:
            return t.visitQuery(e, n)
          case 12:
            return t.visitStagger(e, n)
          default:
            throw new Error(
              'Unable to resolve animation metadata node #' + e.type
            )
        }
      }
      function wd(t, e) {
        return window.getComputedStyle(t)[e]
      }
      const Sd = '*'
      function Cd(t, e) {
        const n = []
        return (
          'string' == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (':' == t[0]) {
                    const r = (function (t, e) {
                      switch (t) {
                        case ':enter':
                          return 'void => *'
                        case ':leave':
                          return '* => void'
                        case ':increment':
                          return (t, e) => parseFloat(e) > parseFloat(t)
                        case ':decrement':
                          return (t, e) => parseFloat(e) < parseFloat(t)
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            '* => *'
                          )
                      }
                    })(t, n)
                    if ('function' == typeof r) return void e.push(r)
                    t = r
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/)
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    )
                  const i = r[1],
                    s = r[2],
                    o = r[3]
                  e.push(xd(i, o)),
                    '<' != s[0] || (i == Sd && o == Sd) || e.push(xd(o, i))
                })(t, n, e)
              )
            : n.push(t),
          n
        )
      }
      const Ed = new Set(['true', '1']),
        kd = new Set(['false', '0'])
      function xd(t, e) {
        const n = Ed.has(t) || kd.has(t),
          r = Ed.has(e) || kd.has(e)
        return (i, s) => {
          let o = t == Sd || t == i,
            a = e == Sd || e == s
          return (
            !o && n && 'boolean' == typeof i && (o = i ? Ed.has(t) : kd.has(t)),
            !a && r && 'boolean' == typeof s && (a = s ? Ed.has(e) : kd.has(e)),
            o && a
          )
        }
      }
      const Td = new RegExp('s*:selfs*,?', 'g')
      function Id(t, e, n) {
        return new Ad(t).build(e, n)
      }
      class Ad {
        constructor(t) {
          this._driver = t
        }
        build(t, e) {
          const n = new Od(e)
          return this._resetContextStyleTimingState(n), bd(this, hd(t), n)
        }
        _resetContextStyleTimingState(t) {
          ;(t.currentQuerySelector = ''),
            (t.collectedStyles = {}),
            (t.collectedStyles[''] = {}),
            (t.currentTime = 0)
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0)
          const i = [],
            s = []
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    ;(n.name = t), i.push(this.visitState(n, e))
                  }),
                  (n.name = r)
              } else if (1 == t.type) {
                const i = this.visitTransition(t, e)
                ;(n += i.queryCount), (r += i.depCount), s.push(i)
              } else
                e.errors.push(
                  'only state() and transition() definitions can sit inside of a trigger()'
                )
            }),
            {
              type: 7,
              name: t.name,
              states: i,
              transitions: s,
              queryCount: n,
              depCount: r,
              options: null,
            }
          )
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null
          if (n.containsDynamicStyles) {
            const i = new Set(),
              s = r || {}
            if (
              (n.styles.forEach((t) => {
                if (Rd(t)) {
                  const e = t
                  Object.keys(e).forEach((t) => {
                    pd(e[t]).forEach((t) => {
                      s.hasOwnProperty(t) || i.add(t)
                    })
                  })
                }
              }),
              i.size)
            ) {
              const n = md(i.values())
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              )
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: r ? { params: r } : null,
          }
        }
        visitTransition(t, e) {
          ;(e.queryCount = 0), (e.depCount = 0)
          const n = bd(this, hd(t.animation), e)
          return {
            type: 1,
            matchers: Cd(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Pd(t.options),
          }
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => bd(this, t, e)),
            options: Pd(t.options),
          }
        }
        visitGroup(t, e) {
          const n = e.currentTime
          let r = 0
          const i = t.steps.map((t) => {
            e.currentTime = n
            const i = bd(this, t, e)
            return (r = Math.max(r, e.currentTime)), i
          })
          return (
            (e.currentTime = r), { type: 3, steps: i, options: Pd(t.options) }
          )
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null
            if (t.hasOwnProperty('duration')) n = t
            else if ('number' == typeof t) return Dd(id(t, e).duration, 0, '')
            const r = t
            if (
              r
                .split(/\s+/)
                .some((t) => '{' == t.charAt(0) && '{' == t.charAt(1))
            ) {
              const t = Dd(0, 0, '')
              return (t.dynamic = !0), (t.strValue = r), t
            }
            return (n = n || id(r, e)), Dd(n.duration, n.delay, n.easing)
          })(t.timings, e.errors)
          let r
          e.currentAnimateTimings = n
          let i = t.styles ? t.styles : kh({})
          if (5 == i.type) r = this.visitKeyframes(i, e)
          else {
            let i = t.styles,
              s = !1
            if (!i) {
              s = !0
              const t = {}
              n.easing && (t.easing = n.easing), (i = kh(t))
            }
            e.currentTime += n.duration + n.delay
            const o = this.visitStyle(i, e)
            ;(o.isEmptyStep = s), (r = o)
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          )
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e)
          return this._validateStyleAst(n, e), n
        }
        _makeStyleAst(t, e) {
          const n = []
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                'string' == typeof t
                  ? t == Ch
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t)
              })
            : n.push(t.styles)
          let r = !1,
            i = null
          return (
            n.forEach((t) => {
              if (Rd(t)) {
                const e = t,
                  n = e.easing
                if ((n && ((i = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf('{{') >= 0) {
                      r = !0
                      break
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: i,
              offset: t.offset,
              containsDynamicStyles: r,
              options: null,
            }
          )
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings
          let r = e.currentTime,
            i = e.currentTime
          n && i > 0 && (i -= n.duration + n.delay),
            t.styles.forEach((t) => {
              'string' != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    )
                  const s = e.collectedStyles[e.currentQuerySelector],
                    o = s[n]
                  let a = !0
                  o &&
                    (i != r &&
                      i >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${i}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (i = o.startTime)),
                    a && (s[n] = { startTime: i, endTime: r }),
                    e.options &&
                      (function (t, e, n) {
                        const r = e.params || {},
                          i = pd(t)
                        i.length &&
                          i.forEach((t) => {
                            r.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              )
                          })
                      })(t[n], e.options, e.errors)
                })
            })
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null }
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                'keyframes() must be placed inside of a call to animate()'
              ),
              n
            )
          let r = 0
          const i = []
          let s = !1,
            o = !1,
            a = 0
          const l = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e)
            let l =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ('string' == typeof t) return null
                      let e = null
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (Rd(t) && t.hasOwnProperty('offset')) {
                            const n = t
                            ;(e = parseFloat(n.offset)), delete n.offset
                          }
                        })
                      else if (Rd(t) && t.hasOwnProperty('offset')) {
                        const n = t
                        ;(e = parseFloat(n.offset)), delete n.offset
                      }
                      return e
                    })(n.styles),
              c = 0
            return (
              null != l && (r++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (s = s || c < a),
              (a = c),
              i.push(c),
              n
            )
          })
          o &&
            e.errors.push(
              'Please ensure that all keyframe offsets are between 0 and 1'
            ),
            s &&
              e.errors.push(
                'Please ensure that all keyframe offsets are in order'
              )
          const c = t.steps.length
          let u = 0
          r > 0 && r < c
            ? e.errors.push(
                'Not all style() steps within the declared keyframes() contain offsets'
              )
            : 0 == r && (u = 1 / (c - 1))
          const h = c - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration
          return (
            l.forEach((t, r) => {
              const s = u > 0 ? (r == h ? 1 : u * r) : i[r],
                o = s * f
              ;(e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = s),
                n.styles.push(t)
            }),
            n
          )
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: bd(this, hd(t.animation), e),
            options: Pd(t.options),
          }
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: Pd(t.options) }
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: Pd(t.options),
          }
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {}
          e.queryCount++, (e.currentQuery = t)
          const [i, s] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ':self' == t)
            return (
              e && (t = t.replace(Td, '')),
              [
                (t = t
                  .replace(/@\*/g, Jh)
                  .replace(/@\w+/g, (t) => '.ng-trigger-' + t.substr(1))
                  .replace(/:animating/g, ed)),
                e,
              ]
            )
          })(t.selector)
          ;(e.currentQuerySelector = n.length ? n + ' ' + i : i),
            Fh(e.collectedStyles, e.currentQuerySelector, {})
          const o = bd(this, hd(t.animation), e)
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: i,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: s,
              animation: o,
              originalSelector: t.selector,
              options: Pd(t.options),
            }
          )
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push('stagger() can only be used inside of query()')
          const n =
            'full' === t.timings
              ? { duration: 0, delay: 0, easing: 'full' }
              : id(t.timings, e.errors, !0)
          return {
            type: 12,
            animation: bd(this, hd(t.animation), e),
            timings: n,
            options: null,
          }
        }
      }
      class Od {
        constructor(t) {
          ;(this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null)
        }
      }
      function Rd(t) {
        return !Array.isArray(t) && 'object' == typeof t
      }
      function Pd(t) {
        var e
        return (
          t
            ? (t = sd(t)).params && (t.params = (e = t.params) ? sd(e) : null)
            : (t = {}),
          t
        )
      }
      function Dd(t, e, n) {
        return { duration: t, delay: e, easing: n }
      }
      function Md(t, e, n, r, i, s, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: i,
          delay: s,
          totalTime: i + s,
          easing: o,
          subTimeline: a,
        }
      }
      class Fd {
        constructor() {
          this._map = new Map()
        }
        consume(t) {
          let e = this._map.get(t)
          return e ? this._map.delete(t) : (e = []), e
        }
        append(t, e) {
          let n = this._map.get(t)
          n || this._map.set(t, (n = [])), n.push(...e)
        }
        has(t) {
          return this._map.has(t)
        }
        clear() {
          this._map.clear()
        }
      }
      const Nd = new RegExp(':enter', 'g'),
        jd = new RegExp(':leave', 'g')
      function zd(t, e, n, r, i, s = {}, o = {}, a, l, c = []) {
        return new Ld().buildKeyframes(t, e, n, r, i, s, o, a, l, c)
      }
      class Ld {
        buildKeyframes(t, e, n, r, i, s, o, a, l, c = []) {
          l = l || new Fd()
          const u = new Bd(t, e, l, r, i, c, [])
          ;(u.options = a),
            u.currentTimeline.setStyles([s], null, u.errors, a),
            bd(this, n, u)
          const h = u.timelines.filter((t) => t.containsAnimation())
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1]
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a)
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [Md(e, [], [], [], 0, 0, '', !1)]
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element)
          if (n) {
            const r = e.createSubContext(t.options),
              i = e.currentTimeline.currentTime,
              s = this._visitSubInstructions(n, r, r.options)
            i != s && e.transformIntoNewTimeline(s)
          }
          e.previousNode = t
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options)
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t)
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime
          const i = null != n.duration ? nd(n.duration) : null,
            s = null != n.delay ? nd(n.delay) : null
          return (
            0 !== i &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, i, s)
                r = Math.max(r, n.duration + n.delay)
              }),
            r
          )
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            bd(this, t.animation, e),
            (e.previousNode = t)
        }
        visitSequence(t, e) {
          const n = e.subContextCount
          let r = e
          const i = t.options
          if (
            i &&
            (i.params || i.delay) &&
            ((r = e.createSubContext(i)),
            r.transformIntoNewTimeline(),
            null != i.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = Ud))
            const t = nd(i.delay)
            r.delayNextStep(t)
          }
          t.steps.length &&
            (t.steps.forEach((t) => bd(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t)
        }
        visitGroup(t, e) {
          const n = []
          let r = e.currentTimeline.currentTime
          const i = t.options && t.options.delay ? nd(t.options.delay) : 0
          t.steps.forEach((s) => {
            const o = e.createSubContext(t.options)
            i && o.delayNextStep(i),
              bd(this, s, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline)
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t)
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue
            return id(e.params ? fd(n, e.params, e.errors) : n, e.errors)
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing }
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles())
          const i = t.style
          5 == i.type
            ? this.visitKeyframes(i, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(i, e),
              r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t)
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings
          !r && n.getCurrentStyleProperties().length && n.forwardFrame()
          const i = (r && r.easing) || t.easing
          t.isEmptyStep
            ? n.applyEmptyStep(i)
            : n.setStyles(t.styles, i, e.errors, e.options),
            (e.previousNode = t)
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            i = n.duration,
            s = e.createSubContext().currentTimeline
          ;(s.easing = n.easing),
            t.styles.forEach((t) => {
              s.forwardTime((t.offset || 0) * i),
                s.setStyles(t.styles, t.easing, e.errors, e.options),
                s.applyStylesToKeyframe()
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(s),
            e.transformIntoNewTimeline(r + i),
            (e.previousNode = t)
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            i = r.delay ? nd(r.delay) : 0
          i &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = Ud))
          let s = n
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!r.optional,
            e.errors
          )
          e.currentQueryTotal = o.length
          let a = null
          o.forEach((n, r) => {
            e.currentQueryIndex = r
            const o = e.createSubContext(t.options, n)
            i && o.delayNextStep(i),
              n === e.element && (a = o.currentTimeline),
              bd(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (s = Math.max(s, o.currentTimeline.currentTime))
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(s),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t)
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            i = t.timings,
            s = Math.abs(i.duration),
            o = s * (e.currentQueryTotal - 1)
          let a = s * e.currentQueryIndex
          switch (i.duration < 0 ? 'reverse' : i.easing) {
            case 'reverse':
              a = o - a
              break
            case 'full':
              a = n.currentStaggerTime
          }
          const l = e.currentTimeline
          a && l.delayNextStep(a)
          const c = l.currentTime
          bd(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              r.currentTime - c + (r.startTime - n.currentTimeline.startTime))
        }
      }
      const Ud = {}
      class Bd {
        constructor(t, e, n, r, i, s, o, a) {
          ;(this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = i),
            (this.errors = s),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Ud),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new qd(this._driver, e, 0)),
            o.push(this.currentTimeline)
        }
        get params() {
          return this.options.params
        }
        updateOptions(t, e) {
          if (!t) return
          const n = t
          let r = this.options
          null != n.duration && (r.duration = nd(n.duration)),
            null != n.delay && (r.delay = nd(n.delay))
          const i = n.params
          if (i) {
            let t = r.params
            t || (t = this.options.params = {}),
              Object.keys(i).forEach((n) => {
                ;(e && t.hasOwnProperty(n)) || (t[n] = fd(i[n], t, this.errors))
              })
          }
        }
        _copyOptions() {
          const t = {}
          if (this.options) {
            const e = this.options.params
            if (e) {
              const n = (t.params = {})
              Object.keys(e).forEach((t) => {
                n[t] = e[t]
              })
            }
          }
          return t
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            i = new Bd(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            )
          return (
            (i.previousNode = this.previousNode),
            (i.currentAnimateTimings = this.currentAnimateTimings),
            (i.options = this._copyOptions()),
            i.updateOptions(t),
            (i.currentQueryIndex = this.currentQueryIndex),
            (i.currentQueryTotal = this.currentQueryTotal),
            (i.parentContext = this),
            this.subContextCount++,
            i
          )
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = Ud),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          )
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: '',
            },
            i = new Hd(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            )
          return this.timelines.push(i), r
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t)
        }
        invokeQuery(t, e, n, r, i, s) {
          let o = []
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(Nd, '.' + this._enterClassName)).replace(
              jd,
              '.' + this._leaveClassName
            )
            let e = this._driver.query(this.element, t, 1 != n)
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e)
          }
          return (
            i ||
              0 != o.length ||
              s.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          )
        }
      }
      class qd {
        constructor(t, e, n, r) {
          ;(this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              e
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe()
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1
            case 1:
              return this.getCurrentStyleProperties().length > 0
            default:
              return !0
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe)
        }
        get currentTime() {
          return this.startTime + this.duration
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size && Object.keys(this._pendingStyles).length
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t)
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new qd(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          )
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe))
        }
        forwardFrame() {
          ;(this.duration += 1), this._loadKeyframe()
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe()
        }
        _updateStyle(t, e) {
          ;(this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e })
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              ;(this._backFill[t] = this._globalTimelineStyles[t] || Ch),
                (this._currentKeyframe[t] = Ch)
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe)
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e)
          const i = (r && r.params) || {},
            s = (function (t, e) {
              const n = {}
              let r
              return (
                t.forEach((t) => {
                  '*' === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach((t) => {
                        n[t] = Ch
                      }))
                    : od(t, !1, n)
                }),
                n
              )
            })(t, this._globalTimelineStyles)
          Object.keys(s).forEach((t) => {
            const e = fd(s[t], i, n)
            ;(this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : Ch),
              this._updateStyle(t, e)
          })
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t)
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e]
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t])
            }))
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t]
            ;(this._pendingStyles[t] = e), this._updateStyle(t, e)
          })
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration)
        }
        get properties() {
          const t = []
          for (let e in this._currentKeyframe) t.push(e)
          return t
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e]
            ;(!n || r.time > n.time) && this._updateStyle(e, r.value)
          })
        }
        buildKeyframes() {
          this.applyStylesToKeyframe()
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration
          let r = []
          this._keyframes.forEach((i, s) => {
            const o = od(i, !0)
            Object.keys(o).forEach((n) => {
              const r = o[n]
              '!' == r ? t.add(n) : r == Ch && e.add(n)
            }),
              n || (o.offset = s / this.duration),
              r.push(o)
          })
          const i = t.size ? md(t.values()) : [],
            s = e.size ? md(e.values()) : []
          if (n) {
            const t = r[0],
              e = sd(t)
            ;(t.offset = 0), (e.offset = 1), (r = [t, e])
          }
          return Md(
            this.element,
            r,
            i,
            s,
            this.duration,
            this.startTime,
            this.easing,
            !1
          )
        }
      }
      class Hd extends qd {
        constructor(t, e, n, r, i, s, o = !1) {
          super(t, e, s.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = i),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: s.duration,
              delay: s.delay,
              easing: s.easing,
            })
        }
        containsAnimation() {
          return this.keyframes.length > 1
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings
          if (this._stretchStartingKeyframe && e) {
            const i = [],
              s = n + e,
              o = e / s,
              a = od(t[0], !1)
            ;(a.offset = 0), i.push(a)
            const l = od(t[0], !1)
            ;(l.offset = Vd(o)), i.push(l)
            const c = t.length - 1
            for (let r = 1; r <= c; r++) {
              let o = od(t[r], !1)
              ;(o.offset = Vd((e + o.offset * n) / s)), i.push(o)
            }
            ;(n = s), (e = 0), (r = ''), (t = i)
          }
          return Md(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            r,
            !0
          )
        }
      }
      function Vd(t, e = 3) {
        const n = Math.pow(10, e - 1)
        return Math.round(t * n) / n
      }
      class $d {}
      class Wd extends $d {
        normalizePropertyName(t, e) {
          return yd(t)
        }
        normalizeStyleValue(t, e, n, r) {
          let i = ''
          const s = n.toString().trim()
          if (Kd[e] && 0 !== n && '0' !== n)
            if ('number' == typeof n) i = 'px'
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/)
              e &&
                0 == e[1].length &&
                r.push(`Please provide a CSS unit value for ${t}:${n}`)
            }
          return s + i
        }
      }
      const Kd = (() =>
        (function (t) {
          const e = {}
          return t.forEach((t) => (e[t] = !0)), e
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))()
      function Qd(t, e, n, r, i, s, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: s,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d,
        }
      }
      const Gd = {}
      class Zd {
        constructor(t, e, n) {
          ;(this._triggerName = t), (this.ast = e), (this._stateStyles = n)
        }
        match(t, e, n, r) {
          return (function (t, e, n, r, i) {
            return t.some((t) => t(e, n, r, i))
          })(this.ast.matchers, t, e, n, r)
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles['*'],
            i = this._stateStyles[t],
            s = r ? r.buildStyles(e, n) : {}
          return i ? i.buildStyles(e, n) : s
        }
        build(t, e, n, r, i, s, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || Gd,
            d = this.buildStyles(n, (o && o.params) || Gd, u),
            p = (a && a.params) || Gd,
            f = this.buildStyles(r, p, u),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            _ = 'void' === r,
            v = { params: Object.assign(Object.assign({}, h), p) },
            b = c ? [] : zd(t, e, this.ast.animation, i, s, d, f, v, l, u)
          let w = 0
          if (
            (b.forEach((t) => {
              w = Math.max(t.duration + t.delay, w)
            }),
            u.length)
          )
            return Qd(e, this._triggerName, n, r, _, d, f, [], [], g, y, w, u)
          b.forEach((t) => {
            const n = t.element,
              r = Fh(g, n, {})
            t.preStyleProps.forEach((t) => (r[t] = !0))
            const i = Fh(y, n, {})
            t.postStyleProps.forEach((t) => (i[t] = !0)), n !== e && m.add(n)
          })
          const S = md(m.values())
          return Qd(e, this._triggerName, n, r, _, d, f, b, S, g, y, w)
        }
      }
      class Yd {
        constructor(t, e) {
          ;(this.styles = t), (this.defaultParams = e)
        }
        buildStyles(t, e) {
          const n = {},
            r = sd(this.defaultParams)
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e]
              null != n && (r[e] = n)
            }),
            this.styles.styles.forEach((t) => {
              if ('string' != typeof t) {
                const i = t
                Object.keys(i).forEach((t) => {
                  let s = i[t]
                  s.length > 1 && (s = fd(s, r, e)), (n[t] = s)
                })
              }
            }),
            n
          )
        }
      }
      class Xd {
        constructor(t, e) {
          ;(this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new Yd(
                t.style,
                (t.options && t.options.params) || {}
              )
            }),
            Jd(this.states, 'true', '1'),
            Jd(this.states, 'false', '0'),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new Zd(t, e, this.states))
            }),
            (this.fallbackTransition = new Zd(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ))
        }
        get containsQueries() {
          return this.ast.queryCount > 0
        }
        matchTransition(t, e, n, r) {
          return (
            this.transitionFactories.find((i) => i.match(t, e, n, r)) || null
          )
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n)
        }
      }
      function Jd(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n])
      }
      const tp = new Fd()
      class ep {
        constructor(t, e, n) {
          ;(this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = [])
        }
        register(t, e) {
          const n = [],
            r = Id(this._driver, e, n)
          if (n.length)
            throw new Error(
              'Unable to build the animation due to the following errors: ' +
                n.join('\n')
            )
          this._animations[t] = r
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            i = Rh(0, this._normalizer, 0, t.keyframes, e, n)
          return this._driver.animate(
            r,
            i,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          )
        }
        create(t, e, n = {}) {
          const r = [],
            i = this._animations[t]
          let s
          const o = new Map()
          if (
            (i
              ? ((s = zd(this._driver, e, i, Zh, Yh, {}, {}, n, tp, r)),
                s.forEach((t) => {
                  const e = Fh(o, t.element, {})
                  t.postStyleProps.forEach((t) => (e[t] = null))
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (s = [])),
            r.length)
          )
            throw new Error(
              'Unable to create the animation due to the following errors: ' +
                r.join('\n')
            )
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, Ch)
            })
          })
          const a = Oh(
            s.map((t) => {
              const e = o.get(t.element)
              return this._buildPlayer(t, {}, e)
            })
          )
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          )
        }
        destroy(t) {
          const e = this._getPlayer(t)
          e.destroy(), delete this._playersById[t]
          const n = this.players.indexOf(e)
          n >= 0 && this.players.splice(n, 1)
        }
        _getPlayer(t) {
          const e = this._playersById[t]
          if (!e)
            throw new Error(
              'Unable to find the timeline player referenced by ' + t
            )
          return e
        }
        listen(t, e, n, r) {
          const i = Mh(e, '', '', '')
          return Ph(this._getPlayer(t), n, i, r), () => {}
        }
        command(t, e, n, r) {
          if ('register' == n) return void this.register(t, r[0])
          if ('create' == n) return void this.create(t, e, r[0] || {})
          const i = this._getPlayer(t)
          switch (n) {
            case 'play':
              i.play()
              break
            case 'pause':
              i.pause()
              break
            case 'reset':
              i.reset()
              break
            case 'restart':
              i.restart()
              break
            case 'finish':
              i.finish()
              break
            case 'init':
              i.init()
              break
            case 'setPosition':
              i.setPosition(parseFloat(r[0]))
              break
            case 'destroy':
              this.destroy(t)
          }
        }
      }
      const np = 'ng-animate-queued',
        rp = 'ng-animate-disabled',
        ip = '.ng-animate-disabled',
        sp = [],
        op = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        ap = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        }
      class lp {
        constructor(t, e = '') {
          this.namespaceId = e
          const n = t && t.hasOwnProperty('value')
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = sd(t)
            delete e.value, (this.options = e)
          } else this.options = {}
          var r
          this.options.params || (this.options.params = {})
        }
        get params() {
          return this.options.params
        }
        absorbOptions(t) {
          const e = t.params
          if (e) {
            const t = this.options.params
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n])
            })
          }
        }
      }
      const cp = 'void',
        up = new lp(cp)
      class hp {
        constructor(t, e, n) {
          ;(this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            _p(e, this._hostClassName)
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            )
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            )
          if ('start' != (i = n) && 'done' != i)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            )
          var i
          const s = Fh(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r }
          s.push(o)
          const a = Fh(this._engine.statesByElement, t, {})
          return (
            a.hasOwnProperty(e) ||
              (_p(t, Xh), _p(t, 'ng-trigger-' + e), (a[e] = up)),
            () => {
              this._engine.afterFlush(() => {
                const t = s.indexOf(o)
                t >= 0 && s.splice(t, 1), this._triggers[e] || delete a[e]
              })
            }
          )
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0)
        }
        _getTrigger(t) {
          const e = this._triggers[t]
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            )
          return e
        }
        trigger(t, e, n, r = !0) {
          const i = this._getTrigger(e),
            s = new pp(this.id, e, t)
          let o = this._engine.statesByElement.get(t)
          o ||
            (_p(t, Xh),
            _p(t, 'ng-trigger-' + e),
            this._engine.statesByElement.set(t, (o = {})))
          let a = o[e]
          const l = new lp(n, this.id)
          if (
            (!(n && n.hasOwnProperty('value')) &&
              a &&
              l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = up),
            l.value !== cp && a.value === l.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e)
                if (n.length != r.length) return !1
                for (let i = 0; i < n.length; i++) {
                  const r = n[i]
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1
                }
                return !0
              })(a.params, l.params)
            ) {
              const e = [],
                n = i.matchStyles(a.value, a.params, e),
                r = i.matchStyles(l.value, l.params, e)
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    ud(t, n), cd(t, r)
                  })
            }
            return
          }
          const c = Fh(this._engine.playersByElement, t, [])
          c.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy()
          })
          let u = i.matchTransition(a.value, l.value, t, l.params),
            h = !1
          if (!u) {
            if (!r) return
            ;(u = i.fallbackTransition), (h = !0)
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: u,
              fromState: a,
              toState: l,
              player: s,
              isFallbackTransition: h,
            }),
            h ||
              (_p(t, np),
              s.onStart(() => {
                vp(t, np)
              })),
            s.onDone(() => {
              let e = this.players.indexOf(s)
              e >= 0 && this.players.splice(e, 1)
              const n = this._engine.playersByElement.get(t)
              if (n) {
                let t = n.indexOf(s)
                t >= 0 && n.splice(t, 1)
              }
            }),
            this.players.push(s),
            c.push(s),
            s
          )
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t]
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              )
            })
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t)
          const e = this._engine.playersByElement.get(t)
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t))
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, Jh, !0)
          n.forEach((t) => {
            if (t.__ng_removed) return
            const n = this._engine.fetchNamespacesByElement(t)
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t)
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            )
        }
        triggerLeaveAnimation(t, e, n, r) {
          const i = this._engine.statesByElement.get(t)
          if (i) {
            const s = []
            if (
              (Object.keys(i).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, cp, r)
                  n && s.push(n)
                }
              }),
              s.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && Oh(s).onDone(() => this._engine.processLeaveNode(t)),
                !0
              )
          }
          return !1
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t)
          if (e) {
            const n = new Set()
            e.forEach((e) => {
              const r = e.name
              if (n.has(r)) return
              n.add(r)
              const i = this._triggers[r].fallbackTransition,
                s = this._engine.statesByElement.get(t)[r] || up,
                o = new lp(cp),
                a = new pp(this.id, r, t)
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: r,
                  transition: i,
                  fromState: s,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0,
                })
            })
          }
        }
        removeNode(t, e) {
          const n = this._engine
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return
          let r = !1
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : []
            if (e && e.length) r = !0
            else {
              let e = t
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0
                  break
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r))
            n.markElementAsRemoved(this.id, t, !1, e)
          else {
            const r = t.__ng_removed
            ;(r && r !== op) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e))
          }
        }
        insertNode(t, e) {
          _p(t, this._hostClassName)
        }
        drainQueuedTransitions(t) {
          const e = []
          return (
            this._queue.forEach((n) => {
              const r = n.player
              if (r.destroyed) return
              const i = n.element,
                s = this._elementListeners.get(i)
              s &&
                s.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const r = Mh(
                      i,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    )
                    ;(r._data = t), Ph(n.player, e.phase, r, e.callback)
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy()
                    })
                  : e.push(n)
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1
            })
          )
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t)
        }
        elementContainsData(t) {
          let e = !1
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          )
        }
      }
      class dp {
        constructor(t, e, n) {
          ;(this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {})
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e)
        }
        get queuedPlayers() {
          const t = []
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e)
              })
            }),
            t
          )
        }
        createNamespace(t, e) {
          const n = new hp(t, e, this)
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          )
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1
          if (n >= 0) {
            let r = !1
            for (let i = n; i >= 0; i--)
              if (
                this.driver.containsElement(
                  this._namespaceList[i].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(i + 1, 0, t), (r = !0)
                break
              }
            r || this._namespaceList.splice(0, 0, t)
          } else this._namespaceList.push(t)
          return this.namespacesByHostElement.set(e, t), t
        }
        register(t, e) {
          let n = this._namespaceLookup[t]
          return n || (n = this.createNamespace(t, e)), n
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t]
          r && r.register(e, n) && this.totalAnimations++
        }
        destroy(t, e) {
          if (!t) return
          const n = this._fetchNamespace(t)
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t]
            const e = this._namespaceList.indexOf(n)
            e >= 0 && this._namespaceList.splice(e, 1)
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e))
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t]
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t)
          if (n) {
            const t = Object.keys(n)
            for (let r = 0; r < t.length; r++) {
              const i = n[t[r]].namespaceId
              if (i) {
                const t = this._fetchNamespace(i)
                t && e.add(t)
              }
            }
          }
          return e
        }
        trigger(t, e, n, r) {
          if (fp(e)) {
            const i = this._fetchNamespace(t)
            if (i) return i.trigger(e, n, r), !0
          }
          return !1
        }
        insertNode(t, e, n, r) {
          if (!fp(e)) return
          const i = e.__ng_removed
          if (i && i.setForRemoval) {
            ;(i.setForRemoval = !1), (i.setForMove = !0)
            const t = this.collectedLeaveElements.indexOf(e)
            t >= 0 && this.collectedLeaveElements.splice(t, 1)
          }
          if (t) {
            const r = this._fetchNamespace(t)
            r && r.insertNode(e, n)
          }
          r && this.collectEnterElement(e)
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t)
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), _p(t, rp))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), vp(t, rp))
        }
        removeNode(t, e, n, r) {
          if (fp(e)) {
            const i = t ? this._fetchNamespace(t) : null
            if (
              (i ? i.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e)
              n && n.id !== t && n.removeNode(e, r)
            }
          } else this._onRemovalComplete(e, r)
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1,
            })
        }
        listen(t, e, n, r, i) {
          return fp(e) ? this._fetchNamespace(t).listen(e, n, r, i) : () => {}
        }
        _buildInstruction(t, e, n, r, i) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            i
          )
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, Jh, !0)
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, ed, !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)))
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t)
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy()
            })
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t)
          e && e.forEach((t) => t.finish())
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return Oh(this.players).onDone(() => t())
            t()
          })
        }
        processLeaveNode(t) {
          const e = t.__ng_removed
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = op), e.namespaceId)) {
              this.destroyInnerAnimations(t)
              const n = this._fetchNamespace(e.namespaceId)
              n && n.clearElementCache(t)
            }
            this._onRemovalComplete(t, e.setForRemoval)
          }
          this.driver.matchesElement(t, ip) &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, ip, !0).forEach((t) => {
              this.markElementAsDisabled(t, !1)
            })
        }
        flush(t = -1) {
          let e = []
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              _p(this.collectedEnterElements[n], 'ng-star-inserted')
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = []
            try {
              e = this._flushAnimations(n, t)
            } finally {
              for (let t = 0; t < n.length; t++) n[t]()
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n])
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns
            ;(this._whenQuietFns = []),
              e.length
                ? Oh(e).onDone(() => {
                    t.forEach((t) => t())
                  })
                : t.forEach((t) => t())
          }
        }
        reportError(t) {
          throw new Error(
            'Unable to process animations due to the following failed trigger transitions\n ' +
              t.join('\n')
          )
        }
        _flushAnimations(t, e) {
          const n = new Fd(),
            r = [],
            i = new Map(),
            s = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set()
          this.disabledNodes.forEach((t) => {
            c.add(t)
            const e = this.driver.query(t, '.ng-animate-queued', !0)
            for (let n = 0; n < e.length; n++) c.add(e[n])
          })
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = yp(h, this.collectedEnterElements),
            p = new Map()
          let f = 0
          d.forEach((t, e) => {
            const n = Zh + f++
            p.set(e, n), t.forEach((t) => _p(t, n))
          })
          const m = [],
            g = new Set(),
            y = new Set()
          for (let O = 0; O < this.collectedLeaveElements.length; O++) {
            const t = this.collectedLeaveElements[O],
              e = t.__ng_removed
            e &&
              e.setForRemoval &&
              (m.push(t),
              g.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, '.ng-star-inserted', !0)
                    .forEach((t) => g.add(t))
                : y.add(t))
          }
          const _ = new Map(),
            v = yp(h, Array.from(g))
          v.forEach((t, e) => {
            const n = Yh + f++
            _.set(e, n), t.forEach((t) => _p(t, n))
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e)
                t.forEach((t) => vp(t, n))
              }),
                v.forEach((t, e) => {
                  const n = _.get(e)
                  t.forEach((t) => vp(t, n))
                }),
                m.forEach((t) => {
                  this.processLeaveNode(t)
                })
            })
          const b = [],
            w = []
          for (let O = this._namespaceList.length - 1; O >= 0; O--)
            this._namespaceList[O].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                i = t.element
              if ((b.push(e), this.collectedEnterElements.length)) {
                const t = i.__ng_removed
                if (t && t.setForMove) return void e.destroy()
              }
              const c = !u || !this.driver.containsElement(u, i),
                h = _.get(i),
                d = p.get(i),
                f = this._buildInstruction(t, n, d, h, c)
              if (f.errors && f.errors.length) w.push(f)
              else {
                if (c)
                  return (
                    e.onStart(() => ud(i, f.fromStyles)),
                    e.onDestroy(() => cd(i, f.toStyles)),
                    void r.push(e)
                  )
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => ud(i, f.fromStyles)),
                    e.onDestroy(() => cd(i, f.toStyles)),
                    void r.push(e)
                  )
                f.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(i, f.timelines),
                  s.push({ instruction: f, player: e, element: i }),
                  f.queriedElements.forEach((t) => Fh(o, t, []).push(e)),
                  f.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t)
                    if (n.length) {
                      let t = a.get(e)
                      t || a.set(e, (t = new Set())), n.forEach((e) => t.add(e))
                    }
                  }),
                  f.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t)
                    let r = l.get(e)
                    r || l.set(e, (r = new Set())), n.forEach((t) => r.add(t))
                  })
              }
            })
          if (w.length) {
            const t = []
            w.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`))
            }),
              b.forEach((t) => t.destroy()),
              this.reportError(t)
          }
          const S = new Map(),
            C = new Map()
          s.forEach((t) => {
            const e = t.element
            n.has(e) &&
              (C.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                S
              ))
          }),
            r.forEach((t) => {
              const e = t.element
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                Fh(S, e, []).push(t), t.destroy()
              })
            })
          const E = m.filter((t) => Sp(t, a, l)),
            k = new Map()
          gp(k, this.driver, y, l, Ch).forEach((t) => {
            Sp(t, a, l) && E.push(t)
          })
          const x = new Map()
          d.forEach((t, e) => {
            gp(x, this.driver, new Set(t), a, '!')
          }),
            E.forEach((t) => {
              const e = k.get(t),
                n = x.get(t)
              k.set(t, Object.assign(Object.assign({}, e), n))
            })
          const T = [],
            I = [],
            A = {}
          s.forEach((t) => {
            const { element: e, player: s, instruction: o } = t
            if (n.has(e)) {
              if (c.has(e))
                return (
                  s.onDestroy(() => cd(e, o.toStyles)),
                  (s.disabled = !0),
                  s.overrideTotalTime(o.totalTime),
                  void r.push(s)
                )
              let t = A
              if (C.size > 1) {
                let n = e
                const r = []
                for (; (n = n.parentNode); ) {
                  const e = C.get(n)
                  if (e) {
                    t = e
                    break
                  }
                  r.push(n)
                }
                r.forEach((e) => C.set(e, t))
              }
              const n = this._buildAnimation(s.namespaceId, o, S, i, x, k)
              if ((s.setRealPlayer(n), t === A)) T.push(s)
              else {
                const e = this.playersByElement.get(t)
                e && e.length && (s.parentPlayer = Oh(e)), r.push(s)
              }
            } else
              ud(e, o.fromStyles),
                s.onDestroy(() => cd(e, o.toStyles)),
                I.push(s),
                c.has(e) && r.push(s)
          }),
            I.forEach((t) => {
              const e = i.get(t.element)
              if (e && e.length) {
                const n = Oh(e)
                t.setRealPlayer(n)
              }
            }),
            r.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
            })
          for (let O = 0; O < m.length; O++) {
            const t = m[O],
              e = t.__ng_removed
            if ((vp(t, Yh), e && e.hasAnimation)) continue
            let n = []
            if (o.size) {
              let e = o.get(t)
              e && e.length && n.push(...e)
              let r = this.driver.query(t, ed, !0)
              for (let t = 0; t < r.length; t++) {
                let e = o.get(r[t])
                e && e.length && n.push(...e)
              }
            }
            const r = n.filter((t) => !t.destroyed)
            r.length ? bp(this, t, r) : this.processLeaveNode(t)
          }
          return (
            (m.length = 0),
            T.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy()
                  const e = this.players.indexOf(t)
                  this.players.splice(e, 1)
                }),
                t.play()
            }),
            T
          )
        }
        elementContainsData(t, e) {
          let n = !1
          const r = e.__ng_removed
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          )
        }
        afterFlush(t) {
          this._flushFns.push(t)
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t)
        }
        _getPreviousPlayers(t, e, n, r, i) {
          let s = []
          if (e) {
            const e = this.playersByQueriedElement.get(t)
            e && (s = e)
          } else {
            const e = this.playersByElement.get(t)
            if (e) {
              const t = !i || i == cp
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == r) && s.push(e))
              })
            }
          }
          return (
            (n || r) &&
              (s = s.filter(
                (t) => !((n && n != t.namespaceId) || (r && r != t.triggerName))
              )),
            s
          )
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            i = e.isRemovalTransition ? void 0 : t,
            s = e.isRemovalTransition ? void 0 : e.triggerName
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              l = Fh(n, t, [])
            this._getPreviousPlayers(t, a, i, s, e.toState).forEach((t) => {
              const e = t.getRealPlayer()
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
            })
          }
          ud(r, e.fromStyles)
        }
        _buildAnimation(t, e, n, r, i, s) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = e.timelines.map((e) => {
              const h = e.element
              c.add(h)
              const d = h.__ng_removed
              if (d && d.removedBeforeQueried)
                return new Th(e.duration, e.delay)
              const p = h !== a,
                f = (function (t) {
                  const e = []
                  return wp(t, e), e
                })((n.get(h) || sp).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === h
                ),
                m = i.get(h),
                g = s.get(h),
                y = Rh(0, this._normalizer, 0, e.keyframes, m, g),
                _ = this._buildPlayer(e, y, f)
              if ((e.subTimeline && r && u.add(h), p)) {
                const e = new pp(t, o, h)
                e.setRealPlayer(_), l.push(e)
              }
              return _
            })
          l.forEach((t) => {
            Fh(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let r
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n)
                        r.splice(t, 1)
                      }
                      0 == r.length && t.delete(e)
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n)
                      r.splice(t, 1)
                    }
                    0 == r.length && delete t[e]
                  }
                  return r
                })(this.playersByQueriedElement, t.element, t)
              )
          }),
            c.forEach((t) => _p(t, td))
          const d = Oh(h)
          return (
            d.onDestroy(() => {
              c.forEach((t) => vp(t, td)), cd(a, e.toStyles)
            }),
            u.forEach((t) => {
              Fh(r, t, []).push(d)
            }),
            d
          )
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new Th(t.duration, t.delay)
        }
      }
      class pp {
        constructor(t, e, n) {
          ;(this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new Th()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0)
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => Ph(t, e, void 0, n))
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1))
        }
        getRealPlayer() {
          return this._player
        }
        overrideTotalTime(t) {
          this.totalTime = t
        }
        syncPlayerEvents(t) {
          const e = this._player
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy())
        }
        _queueEvent(t, e) {
          Fh(this._queuedCallbacks, t, []).push(e)
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t)
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t)
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t),
            this._player.onDestroy(t)
        }
        init() {
          this._player.init()
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted()
        }
        play() {
          !this.queued && this._player.play()
        }
        pause() {
          !this.queued && this._player.pause()
        }
        restart() {
          !this.queued && this._player.restart()
        }
        finish() {
          this._player.finish()
        }
        destroy() {
          ;(this.destroyed = !0), this._player.destroy()
        }
        reset() {
          !this.queued && this._player.reset()
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t)
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition()
        }
        triggerCallback(t) {
          const e = this._player
          e.triggerCallback && e.triggerCallback(t)
        }
      }
      function fp(t) {
        return t && 1 === t.nodeType
      }
      function mp(t, e) {
        const n = t.style.display
        return (t.style.display = null != e ? e : 'none'), n
      }
      function gp(t, e, n, r, i) {
        const s = []
        n.forEach((t) => s.push(mp(t)))
        const o = []
        r.forEach((n, r) => {
          const s = {}
          n.forEach((t) => {
            const n = (s[t] = e.computeStyle(r, t, i))
            ;(n && 0 != n.length) || ((r.__ng_removed = ap), o.push(r))
          }),
            t.set(r, s)
        })
        let a = 0
        return n.forEach((t) => mp(t, s[a++])), o
      }
      function yp(t, e) {
        const n = new Map()
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n
        const r = new Set(e),
          i = new Map()
        function s(t) {
          if (!t) return 1
          let e = i.get(t)
          if (e) return e
          const o = t.parentNode
          return (e = n.has(o) ? o : r.has(o) ? 1 : s(o)), i.set(t, e), e
        }
        return (
          e.forEach((t) => {
            const e = s(t)
            1 !== e && n.get(e).push(t)
          }),
          n
        )
      }
      function _p(t, e) {
        if (t.classList) t.classList.add(e)
        else {
          let n = t.$$classes
          n || (n = t.$$classes = {}), (n[e] = !0)
        }
      }
      function vp(t, e) {
        if (t.classList) t.classList.remove(e)
        else {
          let n = t.$$classes
          n && delete n[e]
        }
      }
      function bp(t, e, n) {
        Oh(n).onDone(() => t.processLeaveNode(e))
      }
      function wp(t, e) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n]
          r instanceof Ih ? wp(r.players, e) : e.push(r)
        }
      }
      function Sp(t, e, n) {
        const r = n.get(t)
        if (!r) return !1
        let i = e.get(t)
        return i ? r.forEach((t) => i.add(t)) : e.set(t, r), n.delete(t), !0
      }
      class Cp {
        constructor(t, e, n) {
          ;(this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new dp(t, e, n)),
            (this._timelineEngine = new ep(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e))
        }
        registerTrigger(t, e, n, r, i) {
          const s = t + '-' + r
          let o = this._triggerCache[s]
          if (!o) {
            const t = [],
              e = Id(this._driver, i, t)
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join(
                  '\n - '
                )}`
              )
            ;(o = (function (t, e) {
              return new Xd(t, e)
            })(r, e)),
              (this._triggerCache[s] = o)
          }
          this._transitionEngine.registerTrigger(e, r, o)
        }
        register(t, e) {
          this._transitionEngine.register(t, e)
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e)
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r)
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n)
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e)
        }
        process(t, e, n, r) {
          if ('@' == n.charAt(0)) {
            const [t, i] = Nh(n)
            this._timelineEngine.command(t, e, i, r)
          } else this._transitionEngine.trigger(t, e, n, r)
        }
        listen(t, e, n, r, i) {
          if ('@' == n.charAt(0)) {
            const [t, r] = Nh(n)
            return this._timelineEngine.listen(t, e, r, i)
          }
          return this._transitionEngine.listen(t, e, n, r, i)
        }
        flush(t = -1) {
          this._transitionEngine.flush(t)
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          )
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone()
        }
      }
      function Ep(t, e) {
        let n = null,
          r = null
        return (
          Array.isArray(e) && e.length
            ? ((n = xp(e[0])), e.length > 1 && (r = xp(e[e.length - 1])))
            : e && (n = xp(e)),
          n || r ? new kp(t, n, r) : null
        )
      }
      let kp = (() => {
        class t {
          constructor(e, n, r) {
            ;(this._element = e),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0)
            let i = t.initialStylesByElement.get(e)
            i || t.initialStylesByElement.set(e, (i = {})),
              (this._initialStyles = i)
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                cd(this._element, this._startStyles, this._initialStyles),
              (this._state = 1))
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (cd(this._element, this._initialStyles),
                this._endStyles &&
                  (cd(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1))
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (ud(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (ud(this._element, this._endStyles),
                  (this._endStyles = null)),
                cd(this._element, this._initialStyles),
                (this._state = 3))
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t
      })()
      function xp(t) {
        let e = null
        const n = Object.keys(t)
        for (let r = 0; r < n.length; r++) {
          const i = n[r]
          Tp(i) && ((e = e || {}), (e[i] = t[i]))
        }
        return e
      }
      function Tp(t) {
        return 'display' === t || 'position' === t
      }
      const Ip = 'animation',
        Ap = 'animationend'
      class Op {
        constructor(t, e, n, r, i, s, o) {
          ;(this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = i),
            (this._fillMode = s),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t))
        }
        apply() {
          !(function (t, e) {
            const n = Np(t, '').trim()
            n.length &&
              ((function (t, e) {
                let n = 0
                for (let r = 0; r < t.length; r++) ',' === t.charAt(r) && n++
              })(n),
              (e = `${n}, ${e}`)),
              Fp(t, '', e)
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Mp(this._element, this._eventFn, !1),
            (this._startTime = Date.now())
        }
        pause() {
          Rp(this._element, this._name, 'paused')
        }
        resume() {
          Rp(this._element, this._name, 'running')
        }
        setPosition(t) {
          const e = Pp(this._element, this._name)
          ;(this._position = t * this._duration),
            Fp(this._element, 'Delay', `-${this._position}ms`, e)
        }
        getPosition() {
          return this._position
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3))
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish()
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Mp(this._element, this._eventFn, !0))
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = Np(t, '').split(','),
                r = Dp(n, e)
              r >= 0 && (n.splice(r, 1), Fp(t, '', n.join(',')))
            })(this._element, this._name))
        }
      }
      function Rp(t, e, n) {
        Fp(t, 'PlayState', n, Pp(t, e))
      }
      function Pp(t, e) {
        const n = Np(t, '')
        return n.indexOf(',') > 0 ? Dp(n.split(','), e) : Dp([n], e)
      }
      function Dp(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n
        return -1
      }
      function Mp(t, e, n) {
        n ? t.removeEventListener(Ap, e) : t.addEventListener(Ap, e)
      }
      function Fp(t, e, n, r) {
        const i = Ip + e
        if (null != r) {
          const e = t.style[i]
          if (e.length) {
            const t = e.split(',')
            ;(t[r] = n), (n = t.join(','))
          }
        }
        t.style[i] = n
      }
      function Np(t, e) {
        return t.style[Ip + e] || ''
      }
      class jp {
        constructor(t, e, n, r, i, s, o, a) {
          ;(this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = i),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = s || 'linear'),
            (this.totalTime = r + i),
            this._buildStyler()
        }
        onStart(t) {
          this._onStartFns.push(t)
        }
        onDone(t) {
          this._onDoneFns.push(t)
        }
        onDestroy(t) {
          this._onDestroyFns.push(t)
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []))
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = [])
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = [])
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns())
        }
        setPosition(t) {
          this._styler.setPosition(t)
        }
        getPosition() {
          return this._styler.getPosition()
        }
        hasStarted() {
          return this._state >= 2
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause())
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume()
        }
        pause() {
          this.init(), this._styler.pause()
        }
        restart() {
          this.reset(), this.play()
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply()
        }
        _buildStyler() {
          this._styler = new Op(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            'forwards',
            () => this.finish()
          )
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns
          e.forEach((t) => t()), (e.length = 0)
        }
        beforeDestroy() {
          this.init()
          const t = {}
          if (this.hasStarted()) {
            const e = this._state >= 3
            Object.keys(this._finalStyles).forEach((n) => {
              'offset' != n &&
                (t[n] = e ? this._finalStyles[n] : wd(this.element, n))
            })
          }
          this.currentSnapshot = t
        }
      }
      class zp extends Th {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Kh(e))
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t]
            }),
            super.init())
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play())
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t]
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t)
            }),
            (this._startingStyles = null),
            super.destroy())
        }
      }
      class Lp {
        constructor() {
          ;(this._count = 0), (this._head = document.querySelector('head'))
        }
        validateStyleProperty(t) {
          return Hh(t)
        }
        matchesElement(t, e) {
          return Vh(t, e)
        }
        containsElement(t, e) {
          return $h(t, e)
        }
        query(t, e, n) {
          return Wh(t, e, n)
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e]
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => Kh(t))
          let r = `@keyframes ${e} {\n`,
            i = ''
          n.forEach((t) => {
            i = ' '
            const e = parseFloat(t.offset)
            ;(r += `${i}${100 * e}% {\n`),
              (i += ' '),
              Object.keys(t).forEach((e) => {
                const n = t[e]
                switch (e) {
                  case 'offset':
                    return
                  case 'easing':
                    return void (
                      n && (r += `${i}animation-timing-function: ${n};\n`)
                    )
                  default:
                    return void (r += `${i}${e}: ${n};\n`)
                }
              }),
              (r += i + '}\n')
          }),
            (r += '}\n')
          const s = document.createElement('style')
          return (s.textContent = r), s
        }
        animate(t, e, n, r, i, s = [], o) {
          const a = s.filter((t) => t instanceof jp),
            l = {}
          _d(n, r) &&
            a.forEach((t) => {
              let e = t.currentSnapshot
              Object.keys(e).forEach((t) => (l[t] = e[t]))
            })
          const c = (function (t) {
            let e = {}
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    'offset' != n && 'easing' != n && (e[n] = t[n])
                  })
                }),
              e
            )
          })((e = vd(t, e, l)))
          if (0 == n) return new zp(t, c)
          const u = 'gen_css_kf_' + this._count++,
            h = this.buildKeyframeElement(t, u, e)
          document.querySelector('head').appendChild(h)
          const d = Ep(t, e),
            p = new jp(t, e, u, n, r, i, c, d)
          return (
            p.onDestroy(() => {
              var t
              ;(t = h).parentNode.removeChild(t)
            }),
            p
          )
        }
      }
      class Up {
        constructor(t, e, n, r) {
          ;(this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay)
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []))
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart()
        }
        _buildPlayer() {
          if (this._initialized) return
          this._initialized = !0
          const t = this.keyframes
          ;(this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish())
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n)
        }
        onStart(t) {
          this._onStartFns.push(t)
        }
        onDone(t) {
          this._onDoneFns.push(t)
        }
        onDestroy(t) {
          this._onDestroyFns.push(t)
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play()
        }
        pause() {
          this.init(), this.domPlayer.pause()
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish()
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1)
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel()
        }
        restart() {
          this.reset(), this.play()
        }
        hasStarted() {
          return this._started
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []))
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time
        }
        get totalTime() {
          return this._delay + this._duration
        }
        beforeDestroy() {
          const t = {}
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              'offset' != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : wd(this.element, e))
            }),
            (this.currentSnapshot = t)
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns
          e.forEach((t) => t()), (e.length = 0)
        }
      }
      class Bp {
        constructor() {
          ;(this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            qp().toString()
          )),
            (this._cssKeyframesDriver = new Lp())
        }
        validateStyleProperty(t) {
          return Hh(t)
        }
        matchesElement(t, e) {
          return Vh(t, e)
        }
        containsElement(t, e) {
          return $h(t, e)
        }
        query(t, e, n) {
          return Wh(t, e, n)
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e]
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t
        }
        animate(t, e, n, r, i, s = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, r, i, s)
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? 'both' : 'forwards',
          }
          i && (a.easing = i)
          const l = {},
            c = s.filter((t) => t instanceof Up)
          _d(n, r) &&
            c.forEach((t) => {
              let e = t.currentSnapshot
              Object.keys(e).forEach((t) => (l[t] = e[t]))
            })
          const u = Ep(t, (e = vd(t, (e = e.map((t) => od(t, !1))), l)))
          return new Up(t, e, a, u)
        }
      }
      function qp() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        )
      }
      let Hp = (() => {
        class t extends Sh {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: '0',
                encapsulation: wt.None,
                styles: [],
                data: { animation: [] },
              }))
          }
          build(t) {
            const e = this._nextAnimationId.toString()
            this._nextAnimationId++
            const n = Array.isArray(t) ? Eh(t) : t
            return (
              Wp(this._renderer, null, e, 'register', [n]),
              new Vp(e, this._renderer)
            )
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(ca), or(Ec))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      class Vp extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e)
        }
        create(t, e) {
          return new $p(this._id, t, e || {}, this._renderer)
        }
      }
      class $p {
        constructor(t, e, n, r) {
          ;(this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n)
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e)
        }
        _command(t, ...e) {
          return Wp(this._renderer, this.element, this.id, t, e)
        }
        onDone(t) {
          this._listen('done', t)
        }
        onStart(t) {
          this._listen('start', t)
        }
        onDestroy(t) {
          this._listen('destroy', t)
        }
        init() {
          this._command('init')
        }
        hasStarted() {
          return this._started
        }
        play() {
          this._command('play'), (this._started = !0)
        }
        pause() {
          this._command('pause')
        }
        restart() {
          this._command('restart')
        }
        finish() {
          this._command('finish')
        }
        destroy() {
          this._command('destroy')
        }
        reset() {
          this._command('reset')
        }
        setPosition(t) {
          this._command('setPosition', t)
        }
        getPosition() {
          var t, e
          return null !==
            (e =
              null === (t = this._renderer.engine.players[+this.id]) ||
              void 0 === t
                ? void 0
                : t.getPosition()) && void 0 !== e
            ? e
            : 0
        }
      }
      function Wp(t, e, n, r, i) {
        return t.setProperty(e, `@@${n}:${r}`, i)
      }
      const Kp = '@',
        Qp = '@.disabled'
      let Gp = (() => {
        class t {
          constructor(t, e, n) {
            ;(this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t)
              })
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e)
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n)
              return (
                t ||
                  ((t = new Zp('', n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              )
            }
            const r = e.id,
              i = e.id + '-' + this._currentId
            this._currentId++, this.engine.register(i, t)
            const s = (e) => {
              Array.isArray(e)
                ? e.forEach(s)
                : this.engine.registerTrigger(r, i, t, e.name, e)
            }
            return e.data.animation.forEach(s), new Yp(this, i, n, this.engine)
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++
            })
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t
                        e(n)
                      }),
                        (this._animationCallbacksBuffer = [])
                    })
                  }),
                this._animationCallbacksBuffer.push([e, n]))
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId)
                }),
              this.delegate.end && this.delegate.end()
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone()
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(ca), or(Cp), or($l))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      class Zp {
        constructor(t, e, n) {
          ;(this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null)
        }
        get data() {
          return this.delegate.data
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy()
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e)
        }
        createComment(t) {
          return this.delegate.createComment(t)
        }
        createText(t) {
          return this.delegate.createText(t)
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1)
        }
        insertBefore(t, e, n, r = !0) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, r)
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n)
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e)
        }
        parentNode(t) {
          return this.delegate.parentNode(t)
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t)
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r)
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n)
        }
        addClass(t, e) {
          this.delegate.addClass(t, e)
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e)
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r)
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n)
        }
        setProperty(t, e, n) {
          e.charAt(0) == Kp && e == Qp
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n)
        }
        setValue(t, e) {
          this.delegate.setValue(t, e)
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n)
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e)
        }
      }
      class Yp extends Zp {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e)
        }
        setProperty(t, e, n) {
          e.charAt(0) == Kp
            ? '.' == e.charAt(1) && e == Qp
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n)
        }
        listen(t, e, n) {
          if (e.charAt(0) == Kp) {
            const r = (function (t) {
              switch (t) {
                case 'body':
                  return document.body
                case 'document':
                  return document
                case 'window':
                  return window
                default:
                  return t
              }
            })(t)
            let i = e.substr(1),
              s = ''
            return (
              i.charAt(0) != Kp &&
                ([i, s] = (function (t) {
                  const e = t.indexOf('.')
                  return [t.substring(0, e), t.substr(e + 1)]
                })(i)),
              this.engine.listen(this.namespaceId, r, i, s, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t)
              })
            )
          }
          return this.delegate.listen(t, e, n)
        }
      }
      let Xp = (() => {
        class t extends Cp {
          constructor(t, e, n) {
            super(t.body, e, n)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Ec), or(Gh), or($d))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const Jp = new zn('AnimationModuleType'),
        tf = [
          {
            provide: Gh,
            useFactory: function () {
              return 'function' == typeof qp() ? new Bp() : new Lp()
            },
          },
          { provide: Jp, useValue: 'BrowserAnimations' },
          { provide: Sh, useClass: Hp },
          {
            provide: $d,
            useFactory: function () {
              return new Wd()
            },
          },
          { provide: Cp, useClass: Xp },
          {
            provide: ca,
            useFactory: function (t, e, n) {
              return new Gp(t, e, n)
            },
            deps: [Cu, Cp, $l],
          },
        ]
      let ef = (() => {
        class t {}
        return (
          (t.ɵmod = Bt({ type: t })),
          (t.ɵinj = at({
            factory: function (e) {
              return new (e || t)()
            },
            providers: tf,
            imports: [zu],
          })),
          t
        )
      })()
      const nf = new pa('11.0.2'),
        rf = new zn('mat-sanity-checks', {
          providedIn: 'root',
          factory: function () {
            return !0
          },
        })
      let sf,
        of = (() => {
          class t {
            constructor(t, e, n) {
              ;(this._hasDoneGlobalChecks = !1),
                (this._document = n),
                t._applyBodyHighContrastModeCssClasses(),
                (this._sanityChecks = e),
                this._hasDoneGlobalChecks ||
                  (this._checkDoctypeIsDefined(),
                  this._checkThemeIsPresent(),
                  this._checkCdkVersionMatch(),
                  (this._hasDoneGlobalChecks = !0))
            }
            _getWindow() {
              const t = this._document.defaultView || window
              return 'object' == typeof t && t ? t : null
            }
            _checksAreEnabled() {
              return ic() && !this._isTestEnv()
            }
            _isTestEnv() {
              const t = this._getWindow()
              return t && (t.__karma__ || t.jasmine)
            }
            _checkDoctypeIsDefined() {
              this._checksAreEnabled() &&
                (!0 === this._sanityChecks || this._sanityChecks.doctype) &&
                !this._document.doctype &&
                console.warn(
                  'Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.'
                )
            }
            _checkThemeIsPresent() {
              if (
                !this._checksAreEnabled() ||
                !1 === this._sanityChecks ||
                !this._sanityChecks.theme ||
                !this._document.body ||
                'function' != typeof getComputedStyle
              )
                return
              const t = this._document.createElement('div')
              t.classList.add('mat-theme-loaded-marker'),
                this._document.body.appendChild(t)
              const e = getComputedStyle(t)
              e &&
                'none' !== e.display &&
                console.warn(
                  'Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming'
                ),
                this._document.body.removeChild(t)
            }
            _checkCdkVersionMatch() {
              this._checksAreEnabled() &&
                (!0 === this._sanityChecks || this._sanityChecks.version) &&
                nf.full !== vh.full &&
                console.warn(
                  'The Angular Material version (' +
                    nf.full +
                    ') does not match the Angular CDK version (' +
                    vh.full +
                    ').\nPlease ensure the versions of these two packages exactly match.'
                )
            }
          }
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)(or(mh), or(rf, 8), or(Ec))
              },
              imports: [[_h], _h],
            })),
            t
          )
        })()
      function af(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disabled = !1)
          }
          get disabled() {
            return this._disabled
          }
          set disabled(t) {
            this._disabled = ih(t)
          }
        }
      }
      function lf(t, e) {
        return class extends t {
          constructor(...t) {
            super(...t), (this.defaultColor = e), (this.color = e)
          }
          get color() {
            return this._color
          }
          set color(t) {
            const e = t || this.defaultColor
            e !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  'mat-' + this._color
                ),
              e && this._elementRef.nativeElement.classList.add('mat-' + e),
              (this._color = e))
          }
        }
      }
      function cf(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disableRipple = !1)
          }
          get disableRipple() {
            return this._disableRipple
          }
          set disableRipple(t) {
            this._disableRipple = ih(t)
          }
        }
      }
      function uf(t, e = 0) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._tabIndex = e), (this.defaultTabIndex = e)
          }
          get tabIndex() {
            return this.disabled ? -1 : this._tabIndex
          }
          set tabIndex(t) {
            this._tabIndex = null != t ? sh(t) : this.defaultTabIndex
          }
        }
      }
      try {
        sf = 'undefined' != typeof Intl
      } catch (CC) {
        sf = !1
      }
      class hf {
        constructor(t, e, n) {
          ;(this._renderer = t),
            (this.element = e),
            (this.config = n),
            (this.state = 3)
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this)
        }
      }
      const df = { enterDuration: 450, exitDuration: 400 },
        pf = Hu({ passive: !0 }),
        ff = ['mousedown', 'touchstart'],
        mf = ['mouseup', 'mouseleave', 'touchend', 'touchcancel']
      class gf {
        constructor(t, e, n, r) {
          ;(this._target = t),
            (this._ngZone = e),
            (this._isPointerDown = !1),
            (this._activeRipples = new Set()),
            (this._pointerUpEventsRegistered = !1),
            r.isBrowser && (this._containerElement = oh(n))
        }
        fadeInRipple(t, e, n = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            i = Object.assign(Object.assign({}, df), n.animation)
          n.centered && ((t = r.left + r.width / 2), (e = r.top + r.height / 2))
          const s =
              n.radius ||
              (function (t, e, n) {
                const r = Math.max(Math.abs(t - n.left), Math.abs(t - n.right)),
                  i = Math.max(Math.abs(e - n.top), Math.abs(e - n.bottom))
                return Math.sqrt(r * r + i * i)
              })(t, e, r),
            o = t - r.left,
            a = e - r.top,
            l = i.enterDuration,
            c = document.createElement('div')
          c.classList.add('mat-ripple-element'),
            (c.style.left = o - s + 'px'),
            (c.style.top = a - s + 'px'),
            (c.style.height = 2 * s + 'px'),
            (c.style.width = 2 * s + 'px'),
            null != n.color && (c.style.backgroundColor = n.color),
            (c.style.transitionDuration = l + 'ms'),
            this._containerElement.appendChild(c),
            window.getComputedStyle(c).getPropertyValue('opacity'),
            (c.style.transform = 'scale(1)')
          const u = new hf(this, c, n)
          return (
            (u.state = 0),
            this._activeRipples.add(u),
            n.persistent || (this._mostRecentTransientRipple = u),
            this._runTimeoutOutsideZone(() => {
              const t = u === this._mostRecentTransientRipple
              ;(u.state = 1),
                n.persistent || (t && this._isPointerDown) || u.fadeOut()
            }, l),
            u
          )
        }
        fadeOutRipple(t) {
          const e = this._activeRipples.delete(t)
          if (
            (t === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !e)
          )
            return
          const n = t.element,
            r = Object.assign(Object.assign({}, df), t.config.animation)
          ;(n.style.transitionDuration = r.exitDuration + 'ms'),
            (n.style.opacity = '0'),
            (t.state = 2),
            this._runTimeoutOutsideZone(() => {
              ;(t.state = 3), n.parentNode.removeChild(n)
            }, r.exitDuration)
        }
        fadeOutAll() {
          this._activeRipples.forEach((t) => t.fadeOut())
        }
        setupTriggerEvents(t) {
          const e = oh(t)
          e &&
            e !== this._triggerElement &&
            (this._removeTriggerEvents(),
            (this._triggerElement = e),
            this._registerEvents(ff))
        }
        handleEvent(t) {
          'mousedown' === t.type
            ? this._onMousedown(t)
            : 'touchstart' === t.type
            ? this._onTouchStart(t)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._registerEvents(mf), (this._pointerUpEventsRegistered = !0))
        }
        _onMousedown(t) {
          const e = ah(t),
            n =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800
          this._target.rippleDisabled ||
            e ||
            n ||
            ((this._isPointerDown = !0),
            this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig))
        }
        _onTouchStart(t) {
          if (!this._target.rippleDisabled) {
            ;(this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0)
            const e = t.changedTouches
            for (let t = 0; t < e.length; t++)
              this.fadeInRipple(
                e[t].clientX,
                e[t].clientY,
                this._target.rippleConfig
              )
          }
        }
        _onPointerUp() {
          this._isPointerDown &&
            ((this._isPointerDown = !1),
            this._activeRipples.forEach((t) => {
              !t.config.persistent &&
                (1 === t.state ||
                  (t.config.terminateOnPointerUp && 0 === t.state)) &&
                t.fadeOut()
            }))
        }
        _runTimeoutOutsideZone(t, e = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(t, e))
        }
        _registerEvents(t) {
          this._ngZone.runOutsideAngular(() => {
            t.forEach((t) => {
              this._triggerElement.addEventListener(t, this, pf)
            })
          })
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            (ff.forEach((t) => {
              this._triggerElement.removeEventListener(t, this, pf)
            }),
            this._pointerUpEventsRegistered &&
              mf.forEach((t) => {
                this._triggerElement.removeEventListener(t, this, pf)
              }))
        }
      }
      const yf = new zn('mat-ripple-global-options')
      let _f = (() => {
          class t {
            constructor(t, e, n, r, i) {
              ;(this._elementRef = t),
                (this._animationMode = i),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = r || {}),
                (this._rippleRenderer = new gf(this, e, t, n))
            }
            get disabled() {
              return this._disabled
            }
            set disabled(t) {
              ;(this._disabled = t), this._setupTriggerEventsIfEnabled()
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement
            }
            set trigger(t) {
              ;(this._trigger = t), this._setupTriggerEventsIfEnabled()
            }
            ngOnInit() {
              ;(this._isInitialized = !0), this._setupTriggerEventsIfEnabled()
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents()
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll()
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(
                  Object.assign(
                    Object.assign({}, this._globalOptions.animation),
                    'NoopAnimations' === this._animationMode
                      ? { enterDuration: 0, exitDuration: 0 }
                      : {}
                  ),
                  this.animation
                ),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
              }
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger)
            }
            launch(t, e = 0, n) {
              return 'number' == typeof t
                ? this._rippleRenderer.fadeInRipple(
                    t,
                    e,
                    Object.assign(Object.assign({}, this.rippleConfig), n)
                  )
                : this._rippleRenderer.fadeInRipple(
                    0,
                    0,
                    Object.assign(Object.assign({}, this.rippleConfig), t)
                  )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ho(la), ho($l), ho(Bu), ho(yf, 8), ho(Jp, 8))
            }),
            (t.ɵdir = Ht({
              type: t,
              selectors: [
                ['', 'mat-ripple', ''],
                ['', 'matRipple', ''],
              ],
              hostAttrs: [1, 'mat-ripple'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && Ro('mat-ripple-unbounded', e.unbounded)
              },
              inputs: {
                radius: ['matRippleRadius', 'radius'],
                disabled: ['matRippleDisabled', 'disabled'],
                trigger: ['matRippleTrigger', 'trigger'],
                color: ['matRippleColor', 'color'],
                unbounded: ['matRippleUnbounded', 'unbounded'],
                centered: ['matRippleCentered', 'centered'],
                animation: ['matRippleAnimation', 'animation'],
              },
              exportAs: ['matRipple'],
            })),
            t
          )
        })(),
        vf = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[of, qu], of],
            })),
            t
          )
        })()
      function bf(t, e) {
        return new _(
          e
            ? (n) => e.schedule(wf, 0, { error: t, subscriber: n })
            : (e) => e.error(t)
        )
      }
      function wf({ error: t, subscriber: e }) {
        e.error(t)
      }
      function Sf(t, e) {
        return new _((n) => {
          const r = t.length
          if (0 === r) return void n.complete()
          const i = new Array(r)
          let s = 0,
            o = 0
          for (let a = 0; a < r; a++) {
            const l = L(t[a])
            let c = !1
            n.add(
              l.subscribe({
                next: (t) => {
                  c || ((c = !0), o++), (i[a] = t)
                },
                error: (t) => n.error(t),
                complete: () => {
                  s++,
                    (s !== r && c) ||
                      (o === r &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = i[n]), t), {}) : i
                        ),
                      n.complete())
                },
              })
            )
          }
        })
      }
      function Cf(t) {
        return function (e) {
          const n = new Ef(t),
            r = e.lift(n)
          return (n.caught = r)
        }
      }
      class Ef {
        constructor(t) {
          this.selector = t
        }
        call(t, e) {
          return e.subscribe(new kf(t, this.selector, this.caught))
        }
      }
      class kf extends M {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n)
        }
        error(t) {
          if (!this.isStopped) {
            let n
            try {
              n = this.selector(t, this.caught)
            } catch (e) {
              return void super.error(e)
            }
            this._unsubscribeAndRecycle()
            const r = new x(this, void 0, void 0)
            this.add(r)
            const i = D(this, n, void 0, void 0, r)
            i !== r && this.add(i)
          }
        }
      }
      function xf(t) {
        return (e) => e.lift(new Tf(t))
      }
      class Tf {
        constructor(t) {
          this.callback = t
        }
        call(t, e) {
          return e.subscribe(new If(t, this.callback))
        }
      }
      class If extends f {
        constructor(t, e) {
          super(t), this.add(new h(e))
        }
      }
      function Af(t, e) {
        return U(t, e, 1)
      }
      class Of {}
      class Rf {
        constructor(t) {
          ;(this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        ;(this.headers = new Map()),
                          t.split('\n').forEach((t) => {
                            const e = t.indexOf(':')
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                i = t.slice(e + 1).trim()
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(i)
                                  : this.headers.set(r, [i])
                            }
                          })
                      }
                    : () => {
                        ;(this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e]
                            const r = e.toLowerCase()
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(e, r))
                          })
                      })
              : (this.headers = new Map())
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase())
        }
        get(t) {
          this.init()
          const e = this.headers.get(t.toLowerCase())
          return e && e.length > 0 ? e[0] : null
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values())
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' })
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' })
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' })
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Rf
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)))
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e))
            })
        }
        clone(t) {
          const e = new Rf()
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof Rf
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          )
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase()
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return
              this.maybeSetNormalizedName(t.name, e)
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || []
              r.push(...n), this.headers.set(e, r)
              break
            case 'd':
              const i = t.value
              if (i) {
                let t = this.headers.get(e)
                if (!t) return
                ;(t = t.filter((t) => -1 === i.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t)
              } else this.headers.delete(e), this.normalizedNames.delete(e)
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            )
        }
      }
      class Pf {
        encodeKey(t) {
          return Df(t)
        }
        encodeValue(t) {
          return Df(t)
        }
        decodeKey(t) {
          return decodeURIComponent(t)
        }
        decodeValue(t) {
          return decodeURIComponent(t)
        }
      }
      function Df(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/')
      }
      class Mf {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new Pf()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.')
            this.map = (function (t, e) {
              const n = new Map()
              return (
                t.length > 0 &&
                  t.split('&').forEach((t) => {
                    const r = t.indexOf('='),
                      [i, s] =
                        -1 == r
                          ? [e.decodeKey(t), '']
                          : [
                              e.decodeKey(t.slice(0, r)),
                              e.decodeValue(t.slice(r + 1)),
                            ],
                      o = n.get(i) || []
                    o.push(s), n.set(i, o)
                  }),
                n
              )
            })(t.fromString, this.encoder)
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e]
                  this.map.set(e, Array.isArray(n) ? n : [n])
                }))
              : (this.map = null)
        }
        has(t) {
          return this.init(), this.map.has(t)
        }
        get(t) {
          this.init()
          const e = this.map.get(t)
          return e ? e[0] : null
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null
        }
        keys() {
          return this.init(), Array.from(this.map.keys())
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' })
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' })
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' })
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t)
                return this.map
                  .get(t)
                  .map((t) => e + '=' + this.encoder.encodeValue(t))
                  .join('&')
              })
              .filter((t) => '' !== t)
              .join('&')
          )
        }
        clone(t) {
          const e = new Mf({ encoder: this.encoder })
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          )
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e =
                      ('a' === t.op ? this.map.get(t.param) : void 0) || []
                    e.push(t.value), this.map.set(t.param, e)
                    break
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param)
                      break
                    }
                    {
                      let e = this.map.get(t.param) || []
                      const n = e.indexOf(t.value)
                      ;-1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param)
                    }
                }
              }),
              (this.cloneFrom = this.updates = null))
        }
      }
      function Ff(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
      }
      function Nf(t) {
        return 'undefined' != typeof Blob && t instanceof Blob
      }
      function jf(t) {
        return 'undefined' != typeof FormData && t instanceof FormData
      }
      class zf {
        constructor(t, e, n, r) {
          let i
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1
                default:
                  return !0
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (i = r))
              : (i = n),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.params && (this.params = i.params)),
            this.headers || (this.headers = new Rf()),
            this.params)
          ) {
            const t = this.params.toString()
            if (0 === t.length) this.urlWithParams = e
            else {
              const n = e.indexOf('?')
              this.urlWithParams =
                e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t
            }
          } else (this.params = new Mf()), (this.urlWithParams = e)
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ff(this.body) ||
              Nf(this.body) ||
              jf(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof Mf
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString()
        }
        detectContentTypeHeader() {
          return null === this.body || jf(this.body)
            ? null
            : Nf(this.body)
            ? this.body.type || null
            : Ff(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Mf
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            i = void 0 !== t.body ? t.body : this.body,
            s =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress
          let a = t.headers || this.headers,
            l = t.params || this.params
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                l
              )),
            new zf(e, n, i, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: s,
            })
          )
        }
      }
      var Lf = (function (t) {
        return (
          (t[(t.Sent = 0)] = 'Sent'),
          (t[(t.UploadProgress = 1)] = 'UploadProgress'),
          (t[(t.ResponseHeader = 2)] = 'ResponseHeader'),
          (t[(t.DownloadProgress = 3)] = 'DownloadProgress'),
          (t[(t.Response = 4)] = 'Response'),
          (t[(t.User = 5)] = 'User'),
          t
        )
      })({})
      class Uf extends class {
        constructor(t, e = 200, n = 'OK') {
          ;(this.headers = t.headers || new Rf()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300)
        }
      } {
        constructor(t = {}) {
          super(t),
            (this.type = Lf.Response),
            (this.body = void 0 !== t.body ? t.body : null)
        }
        clone(t = {}) {
          return new Uf({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          })
        }
      }
      function Bf(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        }
      }
      let qf = (() => {
        class t {
          constructor(t) {
            this.handler = t
          }
          request(t, e, n = {}) {
            let r
            if (t instanceof zf) r = t
            else {
              let i = void 0
              i = n.headers instanceof Rf ? n.headers : new Rf(n.headers)
              let s = void 0
              n.params &&
                (s =
                  n.params instanceof Mf
                    ? n.params
                    : new Mf({ fromObject: n.params })),
                (r = new zf(t, e, void 0 !== n.body ? n.body : null, {
                  headers: i,
                  params: s,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials,
                }))
            }
            const i = Vu(r).pipe(Af((t) => this.handler.handle(t)))
            if (t instanceof zf || 'events' === n.observe) return i
            const s = i.pipe(Gu((t) => t instanceof Uf))
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return s.pipe(
                      F((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.')
                        return t.body
                      })
                    )
                  case 'blob':
                    return s.pipe(
                      F((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error('Response is not a Blob.')
                        return t.body
                      })
                    )
                  case 'text':
                    return s.pipe(
                      F((t) => {
                        if (null !== t.body && 'string' != typeof t.body)
                          throw new Error('Response is not a string.')
                        return t.body
                      })
                    )
                  case 'json':
                  default:
                    return s.pipe(F((t) => t.body))
                }
              case 'response':
                return s
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                )
            }
          }
          delete(t, e = {}) {
            return this.request('DELETE', t, e)
          }
          get(t, e = {}) {
            return this.request('GET', t, e)
          }
          head(t, e = {}) {
            return this.request('HEAD', t, e)
          }
          jsonp(t, e) {
            return this.request('JSONP', t, {
              params: new Mf().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            })
          }
          options(t, e = {}) {
            return this.request('OPTIONS', t, e)
          }
          patch(t, e, n = {}) {
            return this.request('PATCH', t, Bf(n, e))
          }
          post(t, e, n = {}) {
            return this.request('POST', t, Bf(n, e))
          }
          put(t, e, n = {}) {
            return this.request('PUT', t, Bf(n, e))
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Of))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const Hf = ['*']
      function Vf(t) {
        return Error(`Unable to find icon with the name "${t}"`)
      }
      function $f(t) {
        return Error(
          `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`
        )
      }
      function Wf(t) {
        return Error(
          `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`
        )
      }
      class Kf {
        constructor(t, e, n) {
          ;(this.url = t), (this.svgText = e), (this.options = n)
        }
      }
      let Qf = (() => {
        class t {
          constructor(t, e, n, r) {
            ;(this._httpClient = t),
              (this._sanitizer = e),
              (this._errorHandler = r),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._defaultFontSetClass = 'material-icons'),
              (this._document = n)
          }
          addSvgIcon(t, e, n) {
            return this.addSvgIconInNamespace('', t, e, n)
          }
          addSvgIconLiteral(t, e, n) {
            return this.addSvgIconLiteralInNamespace('', t, e, n)
          }
          addSvgIconInNamespace(t, e, n, r) {
            return this._addSvgIconConfig(t, e, new Kf(n, null, r))
          }
          addSvgIconLiteralInNamespace(t, e, n, r) {
            const i = this._sanitizer.sanitize(qr.HTML, n)
            if (!i) throw Wf(n)
            return this._addSvgIconConfig(t, e, new Kf('', i, r))
          }
          addSvgIconSet(t, e) {
            return this.addSvgIconSetInNamespace('', t, e)
          }
          addSvgIconSetLiteral(t, e) {
            return this.addSvgIconSetLiteralInNamespace('', t, e)
          }
          addSvgIconSetInNamespace(t, e, n) {
            return this._addSvgIconSetConfig(t, new Kf(e, null, n))
          }
          addSvgIconSetLiteralInNamespace(t, e, n) {
            const r = this._sanitizer.sanitize(qr.HTML, e)
            if (!r) throw Wf(e)
            return this._addSvgIconSetConfig(t, new Kf('', r, n))
          }
          registerFontClassAlias(t, e = t) {
            return this._fontCssClassesByAlias.set(t, e), this
          }
          classNameForFontAlias(t) {
            return this._fontCssClassesByAlias.get(t) || t
          }
          setDefaultFontSetClass(t) {
            return (this._defaultFontSetClass = t), this
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass
          }
          getSvgIconFromUrl(t) {
            const e = this._sanitizer.sanitize(qr.RESOURCE_URL, t)
            if (!e) throw $f(t)
            const n = this._cachedIconsByUrl.get(e)
            return n
              ? Vu(Gf(n))
              : this._loadSvgIconFromConfig(new Kf(t, null)).pipe(
                  Wu((t) => this._cachedIconsByUrl.set(e, t)),
                  F((t) => Gf(t))
                )
          }
          getNamedSvgIcon(t, e = '') {
            const n = Zf(e, t),
              r = this._svgIconConfigs.get(n)
            if (r) return this._getSvgFromConfig(r)
            const i = this._iconSetConfigs.get(e)
            return i ? this._getSvgFromIconSetConfigs(t, i) : bf(Vf(n))
          }
          ngOnDestroy() {
            this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear()
          }
          _getSvgFromConfig(t) {
            return t.svgText
              ? Vu(Gf(this._svgElementFromConfig(t)))
              : this._loadSvgIconFromConfig(t).pipe(F((t) => Gf(t)))
          }
          _getSvgFromIconSetConfigs(t, e) {
            const n = this._extractIconWithNameFromAnySet(t, e)
            return n
              ? Vu(n)
              : (function (...t) {
                  if (1 === t.length) {
                    const e = t[0]
                    if (l(e)) return Sf(e, null)
                    if (c(e) && Object.getPrototypeOf(e) === Object.prototype) {
                      const t = Object.keys(e)
                      return Sf(
                        t.map((t) => e[t]),
                        t
                      )
                    }
                  }
                  if ('function' == typeof t[t.length - 1]) {
                    const e = t.pop()
                    return Sf(
                      (t = 1 === t.length && l(t[0]) ? t[0] : t),
                      null
                    ).pipe(F((t) => e(...t)))
                  }
                  return Sf(t, null)
                })(
                  e
                    .filter((t) => !t.svgText)
                    .map((t) =>
                      this._loadSvgIconSetFromConfig(t).pipe(
                        Cf((e) => {
                          const n = this._sanitizer.sanitize(
                            qr.RESOURCE_URL,
                            t.url
                          )
                          return (
                            this._errorHandler.handleError(
                              new Error(
                                `Loading icon set URL: ${n} failed: ${e.message}`
                              )
                            ),
                            Vu(null)
                          )
                        })
                      )
                    )
                ).pipe(
                  F(() => {
                    const n = this._extractIconWithNameFromAnySet(t, e)
                    if (!n) throw Vf(t)
                    return n
                  })
                )
          }
          _extractIconWithNameFromAnySet(t, e) {
            for (let n = e.length - 1; n >= 0; n--) {
              const r = e[n]
              if (r.svgText && r.svgText.indexOf(t) > -1) {
                const e = this._svgElementFromConfig(r),
                  n = this._extractSvgIconFromSet(e, t, r.options)
                if (n) return n
              }
            }
            return null
          }
          _loadSvgIconFromConfig(t) {
            return this._fetchIcon(t).pipe(
              Wu((e) => (t.svgText = e)),
              F(() => this._svgElementFromConfig(t))
            )
          }
          _loadSvgIconSetFromConfig(t) {
            return t.svgText
              ? Vu(null)
              : this._fetchIcon(t).pipe(Wu((e) => (t.svgText = e)))
          }
          _extractSvgIconFromSet(t, e, n) {
            const r = t.querySelector(`[id="${e}"]`)
            if (!r) return null
            const i = r.cloneNode(!0)
            if ((i.removeAttribute('id'), 'svg' === i.nodeName.toLowerCase()))
              return this._setSvgAttributes(i, n)
            if ('symbol' === i.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(i), n)
            const s = this._svgElementFromString('<svg></svg>')
            return s.appendChild(i), this._setSvgAttributes(s, n)
          }
          _svgElementFromString(t) {
            const e = this._document.createElement('DIV')
            e.innerHTML = t
            const n = e.querySelector('svg')
            if (!n) throw Error('<svg> tag not found')
            return n
          }
          _toSvgElement(t) {
            const e = this._svgElementFromString('<svg></svg>'),
              n = t.attributes
            for (let r = 0; r < n.length; r++) {
              const { name: t, value: i } = n[r]
              'id' !== t && e.setAttribute(t, i)
            }
            for (let r = 0; r < t.childNodes.length; r++)
              t.childNodes[r].nodeType === this._document.ELEMENT_NODE &&
                e.appendChild(t.childNodes[r].cloneNode(!0))
            return e
          }
          _setSvgAttributes(t, e) {
            return (
              t.setAttribute('fit', ''),
              t.setAttribute('height', '100%'),
              t.setAttribute('width', '100%'),
              t.setAttribute('preserveAspectRatio', 'xMidYMid meet'),
              t.setAttribute('focusable', 'false'),
              e && e.viewBox && t.setAttribute('viewBox', e.viewBox),
              t
            )
          }
          _fetchIcon(t) {
            var e
            const { url: n, options: r } = t,
              i =
                null !== (e = null == r ? void 0 : r.withCredentials) &&
                void 0 !== e &&
                e
            if (!this._httpClient)
              throw Error(
                'Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.'
              )
            if (null == n) throw Error(`Cannot fetch icon from URL "${n}".`)
            const s = this._sanitizer.sanitize(qr.RESOURCE_URL, n)
            if (!s) throw $f(n)
            const o = this._inProgressUrlFetches.get(s)
            if (o) return o
            const a = this._httpClient
              .get(s, { responseType: 'text', withCredentials: i })
              .pipe(
                xf(() => this._inProgressUrlFetches.delete(s)),
                X()
              )
            return this._inProgressUrlFetches.set(s, a), a
          }
          _addSvgIconConfig(t, e, n) {
            return this._svgIconConfigs.set(Zf(t, e), n), this
          }
          _addSvgIconSetConfig(t, e) {
            const n = this._iconSetConfigs.get(t)
            return n ? n.push(e) : this._iconSetConfigs.set(t, [e]), this
          }
          _svgElementFromConfig(t) {
            if (!t.svgElement) {
              const e = this._svgElementFromString(t.svgText)
              this._setSvgAttributes(e, t.options), (t.svgElement = e)
            }
            return t.svgElement
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(qf, 8), or(Du), or(Ec, 8), or(Kr))
          }),
          (t.ɵprov = ot({
            factory: function () {
              return new t(or(qf, 8), or(Du), or(Ec, 8), or(Kr))
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      function Gf(t) {
        return t.cloneNode(!0)
      }
      function Zf(t, e) {
        return t + ':' + e
      }
      class Yf {
        constructor(t) {
          this._elementRef = t
        }
      }
      const Xf = lf(Yf),
        Jf = new zn('mat-icon-location', {
          providedIn: 'root',
          factory: function () {
            const t = ar(Ec),
              e = t ? t.location : null
            return { getPathname: () => (e ? e.pathname + e.search : '') }
          },
        }),
        tm = [
          'clip-path',
          'color-profile',
          'src',
          'cursor',
          'fill',
          'filter',
          'marker',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'stroke',
        ],
        em = tm.map((t) => `[${t}]`).join(', '),
        nm = /^url\(['"]?#(.*?)['"]?\)$/
      let rm = (() => {
          class t extends Xf {
            constructor(t, e, n, r, i) {
              super(t),
                (this._iconRegistry = e),
                (this._location = r),
                (this._errorHandler = i),
                (this._inline = !1),
                (this._currentIconFetch = h.EMPTY),
                n || t.nativeElement.setAttribute('aria-hidden', 'true')
            }
            get inline() {
              return this._inline
            }
            set inline(t) {
              this._inline = ih(t)
            }
            get svgIcon() {
              return this._svgIcon
            }
            set svgIcon(t) {
              t !== this._svgIcon &&
                (t
                  ? this._updateSvgIcon(t)
                  : this._svgIcon && this._clearSvgElement(),
                (this._svgIcon = t))
            }
            get fontSet() {
              return this._fontSet
            }
            set fontSet(t) {
              const e = this._cleanupFontValue(t)
              e !== this._fontSet &&
                ((this._fontSet = e), this._updateFontIconClasses())
            }
            get fontIcon() {
              return this._fontIcon
            }
            set fontIcon(t) {
              const e = this._cleanupFontValue(t)
              e !== this._fontIcon &&
                ((this._fontIcon = e), this._updateFontIconClasses())
            }
            _splitIconName(t) {
              if (!t) return ['', '']
              const e = t.split(':')
              switch (e.length) {
                case 1:
                  return ['', e[0]]
                case 2:
                  return e
                default:
                  throw Error(`Invalid icon name: "${t}"`)
              }
            }
            ngOnInit() {
              this._updateFontIconClasses()
            }
            ngAfterViewChecked() {
              const t = this._elementsWithExternalReferences
              if (t && t.size) {
                const t = this._location.getPathname()
                t !== this._previousPath &&
                  ((this._previousPath = t), this._prependPathToReferences(t))
              }
            }
            ngOnDestroy() {
              this._currentIconFetch.unsubscribe(),
                this._elementsWithExternalReferences &&
                  this._elementsWithExternalReferences.clear()
            }
            _usingFontIcon() {
              return !this.svgIcon
            }
            _setSvgElement(t) {
              this._clearSvgElement()
              const e = t.querySelectorAll('style')
              for (let r = 0; r < e.length; r++) e[r].textContent += ' '
              const n = this._location.getPathname()
              ;(this._previousPath = n),
                this._cacheChildrenWithExternalReferences(t),
                this._prependPathToReferences(n),
                this._elementRef.nativeElement.appendChild(t)
            }
            _clearSvgElement() {
              const t = this._elementRef.nativeElement
              let e = t.childNodes.length
              for (
                this._elementsWithExternalReferences &&
                this._elementsWithExternalReferences.clear();
                e--;

              ) {
                const n = t.childNodes[e]
                ;(1 === n.nodeType && 'svg' !== n.nodeName.toLowerCase()) ||
                  t.removeChild(n)
              }
            }
            _updateFontIconClasses() {
              if (!this._usingFontIcon()) return
              const t = this._elementRef.nativeElement,
                e = this.fontSet
                  ? this._iconRegistry.classNameForFontAlias(this.fontSet)
                  : this._iconRegistry.getDefaultFontSetClass()
              e != this._previousFontSetClass &&
                (this._previousFontSetClass &&
                  t.classList.remove(this._previousFontSetClass),
                e && t.classList.add(e),
                (this._previousFontSetClass = e)),
                this.fontIcon != this._previousFontIconClass &&
                  (this._previousFontIconClass &&
                    t.classList.remove(this._previousFontIconClass),
                  this.fontIcon && t.classList.add(this.fontIcon),
                  (this._previousFontIconClass = this.fontIcon))
            }
            _cleanupFontValue(t) {
              return 'string' == typeof t ? t.trim().split(' ')[0] : t
            }
            _prependPathToReferences(t) {
              const e = this._elementsWithExternalReferences
              e &&
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    n.setAttribute(e.name, `url('${t}#${e.value}')`)
                  })
                })
            }
            _cacheChildrenWithExternalReferences(t) {
              const e = t.querySelectorAll(em),
                n = (this._elementsWithExternalReferences =
                  this._elementsWithExternalReferences || new Map())
              for (let r = 0; r < e.length; r++)
                tm.forEach((t) => {
                  const i = e[r],
                    s = i.getAttribute(t),
                    o = s ? s.match(nm) : null
                  if (o) {
                    let e = n.get(i)
                    e || ((e = []), n.set(i, e)),
                      e.push({ name: t, value: o[1] })
                  }
                })
            }
            _updateSvgIcon(t) {
              if (
                ((this._svgNamespace = null),
                (this._svgName = null),
                this._currentIconFetch.unsubscribe(),
                t)
              ) {
                const [e, n] = this._splitIconName(t)
                e && (this._svgNamespace = e),
                  n && (this._svgName = n),
                  (this._currentIconFetch = this._iconRegistry
                    .getNamedSvgIcon(n, e)
                    .pipe(eh(1))
                    .subscribe(
                      (t) => this._setSvgElement(t),
                      (t) => {
                        this._errorHandler.handleError(
                          new Error(
                            `Error retrieving icon ${e}:${n}! ${t.message}`
                          )
                        )
                      }
                    ))
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                ho(la),
                ho(Qf),
                Fn('aria-hidden'),
                ho(Jf),
                ho(Kr)
              )
            }),
            (t.ɵcmp = jt({
              type: t,
              selectors: [['mat-icon']],
              hostAttrs: ['role', 'img', 1, 'mat-icon', 'notranslate'],
              hostVars: 7,
              hostBindings: function (t, e) {
                2 & t &&
                  (lo(
                    'data-mat-icon-type',
                    e._usingFontIcon() ? 'font' : 'svg'
                  )('data-mat-icon-name', e._svgName || e.fontIcon)(
                    'data-mat-icon-namespace',
                    e._svgNamespace || e.fontSet
                  ),
                  Ro('mat-icon-inline', e.inline)(
                    'mat-icon-no-color',
                    'primary' !== e.color &&
                      'accent' !== e.color &&
                      'warn' !== e.color
                  ))
              },
              inputs: {
                color: 'color',
                inline: 'inline',
                svgIcon: 'svgIcon',
                fontSet: 'fontSet',
                fontIcon: 'fontIcon',
              },
              exportAs: ['matIcon'],
              features: [Ys],
              ngContentSelectors: Hf,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (xo(), To(0))
              },
              styles: [
                '.mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        im = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[of], of],
            })),
            t
          )
        })()
      const sm = ['mat-button', ''],
        om = ['*'],
        am = [
          'mat-button',
          'mat-flat-button',
          'mat-icon-button',
          'mat-raised-button',
          'mat-stroked-button',
          'mat-mini-fab',
          'mat-fab',
        ]
      class lm {
        constructor(t) {
          this._elementRef = t
        }
      }
      const cm = lf(af(cf(lm)))
      let um = (() => {
          class t extends cm {
            constructor(t, e, n) {
              super(t),
                (this._focusMonitor = e),
                (this._animationMode = n),
                (this.isRoundButton = this._hasHostAttributes(
                  'mat-fab',
                  'mat-mini-fab'
                )),
                (this.isIconButton = this._hasHostAttributes('mat-icon-button'))
              for (const r of am)
                this._hasHostAttributes(r) &&
                  this._getHostElement().classList.add(r)
              t.nativeElement.classList.add('mat-button-base'),
                this.isRoundButton && (this.color = 'accent')
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this._elementRef, !0)
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef)
            }
            focus(t = 'program', e) {
              this._focusMonitor.focusVia(this._getHostElement(), t, e)
            }
            _getHostElement() {
              return this._elementRef.nativeElement
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled
            }
            _hasHostAttributes(...t) {
              return t.some((t) => this._getHostElement().hasAttribute(t))
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ho(la), ho(uh), ho(Jp, 8))
            }),
            (t.ɵcmp = jt({
              type: t,
              selectors: [
                ['button', 'mat-button', ''],
                ['button', 'mat-raised-button', ''],
                ['button', 'mat-icon-button', ''],
                ['button', 'mat-fab', ''],
                ['button', 'mat-mini-fab', ''],
                ['button', 'mat-stroked-button', ''],
                ['button', 'mat-flat-button', ''],
              ],
              viewQuery: function (t, e) {
                if ((1 & t && bl(_f, !0), 2 & t)) {
                  let t
                  vl((t = wl())) && (e.ripple = t.first)
                }
              },
              hostAttrs: [1, 'mat-focus-indicator'],
              hostVars: 5,
              hostBindings: function (t, e) {
                2 & t &&
                  (lo('disabled', e.disabled || null),
                  Ro(
                    '_mat-animation-noopable',
                    'NoopAnimations' === e._animationMode
                  )('mat-button-disabled', e.disabled))
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                color: 'color',
              },
              exportAs: ['matButton'],
              features: [Ys],
              attrs: sm,
              ngContentSelectors: om,
              decls: 4,
              vars: 5,
              consts: [
                [1, 'mat-button-wrapper'],
                [
                  'matRipple',
                  '',
                  1,
                  'mat-button-ripple',
                  3,
                  'matRippleDisabled',
                  'matRippleCentered',
                  'matRippleTrigger',
                ],
                [1, 'mat-button-focus-overlay'],
              ],
              template: function (t, e) {
                1 & t &&
                  (xo(),
                  mo(0, 'span', 0),
                  To(1),
                  go(),
                  yo(2, 'span', 1),
                  yo(3, 'span', 2)),
                  2 & t &&
                    (zi(2),
                    Ro(
                      'mat-button-ripple-round',
                      e.isRoundButton || e.isIconButton
                    ),
                    po('matRippleDisabled', e._isRippleDisabled())(
                      'matRippleCentered',
                      e.isIconButton
                    )('matRippleTrigger', e._getHostElement()))
              },
              directives: [_f],
              styles: [
                '.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        hm = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[vf, of], of],
            })),
            t
          )
        })()
      function dm(t, e, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function o(t) {
            try {
              l(r.next(t))
            } catch (e) {
              s(e)
            }
          }
          function a(t) {
            try {
              l(r.throw(t))
            } catch (e) {
              s(e)
            }
          }
          function l(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e)
                    })).then(o, a)
          }
          l((r = r.apply(t, e || [])).next())
        })
      }
      var pm = 32,
        fm = 31,
        mm = {}
      function gm(t) {
        t && (t.value = !0)
      }
      function ym() {}
      function _m(t) {
        return void 0 === t.size && (t.size = t.__iterate(bm)), t.size
      }
      function vm(t, e) {
        if ('number' != typeof e) {
          var n = e >>> 0
          if ('' + n !== e || 4294967295 === n) return NaN
          e = n
        }
        return e < 0 ? _m(t) + e : e
      }
      function bm() {
        return !0
      }
      function wm(t, e, n) {
        return (
          ((0 === t && !km(t)) || (void 0 !== n && t <= -n)) &&
          (void 0 === e || (void 0 !== n && e >= n))
        )
      }
      function Sm(t, e) {
        return Em(t, e, 0)
      }
      function Cm(t, e) {
        return Em(t, e, e)
      }
      function Em(t, e, n) {
        return void 0 === t
          ? n
          : km(t)
          ? e === 1 / 0
            ? e
            : 0 | Math.max(0, e + t)
          : void 0 === e || e === t
          ? t
          : 0 | Math.min(e, t)
      }
      function km(t) {
        return t < 0 || (0 === t && 1 / t == -1 / 0)
      }
      var xm = '@@__IMMUTABLE_ITERABLE__@@'
      function Tm(t) {
        return Boolean(t && t[xm])
      }
      var Im = '@@__IMMUTABLE_KEYED__@@'
      function Am(t) {
        return Boolean(t && t[Im])
      }
      var Om = '@@__IMMUTABLE_INDEXED__@@'
      function Rm(t) {
        return Boolean(t && t[Om])
      }
      function Pm(t) {
        return Am(t) || Rm(t)
      }
      var Dm = function (t) {
          return Tm(t) ? t : eg(t)
        },
        Mm = (function (t) {
          function e(t) {
            return Am(t) ? t : ng(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            e
          )
        })(Dm),
        Fm = (function (t) {
          function e(t) {
            return Rm(t) ? t : rg(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            e
          )
        })(Dm),
        Nm = (function (t) {
          function e(t) {
            return Tm(t) && !Pm(t) ? t : ig(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            e
          )
        })(Dm)
      ;(Dm.Keyed = Mm), (Dm.Indexed = Fm), (Dm.Set = Nm)
      var jm = '@@__IMMUTABLE_SEQ__@@'
      function zm(t) {
        return Boolean(t && t[jm])
      }
      var Lm = '@@__IMMUTABLE_RECORD__@@'
      function Um(t) {
        return Boolean(t && t[Lm])
      }
      function Bm(t) {
        return Tm(t) || Um(t)
      }
      var qm = '@@__IMMUTABLE_ORDERED__@@'
      function Hm(t) {
        return Boolean(t && t[qm])
      }
      var Vm = 'function' == typeof Symbol && Symbol.iterator,
        $m = Vm || '@@iterator',
        Wm = function (t) {
          this.next = t
        }
      function Km(t, e, n, r) {
        var i = 0 === t ? e : 1 === t ? n : [e, n]
        return r ? (r.value = i) : (r = { value: i, done: !1 }), r
      }
      function Qm() {
        return { value: void 0, done: !0 }
      }
      function Gm(t) {
        return !!Xm(t)
      }
      function Zm(t) {
        return t && 'function' == typeof t.next
      }
      function Ym(t) {
        var e = Xm(t)
        return e && e.call(t)
      }
      function Xm(t) {
        var e = t && ((Vm && t[Vm]) || t['@@iterator'])
        if ('function' == typeof e) return e
      }
      ;(Wm.prototype.toString = function () {
        return '[Iterator]'
      }),
        (Wm.KEYS = 0),
        (Wm.VALUES = 1),
        (Wm.ENTRIES = 2),
        (Wm.prototype.inspect = Wm.prototype.toSource = function () {
          return this.toString()
        }),
        (Wm.prototype[$m] = function () {
          return this
        })
      var Jm = Object.prototype.hasOwnProperty
      function tg(t) {
        return (
          !(!Array.isArray(t) && 'string' != typeof t) ||
          (t &&
            'object' == typeof t &&
            Number.isInteger(t.length) &&
            t.length >= 0 &&
            (0 === t.length
              ? 1 === Object.keys(t).length
              : t.hasOwnProperty(t.length - 1)))
        )
      }
      var eg = (function (t) {
          function e(t) {
            return null == t
              ? cg()
              : Bm(t)
              ? t.toSeq()
              : (function (t) {
                  var e = dg(t)
                  if (e) return e
                  if ('object' == typeof t) return new og(t)
                  throw new TypeError(
                    'Expected Array or collection object of values, or keyed object: ' +
                      t
                  )
                })(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.toSeq = function () {
              return this
            }),
            (e.prototype.toString = function () {
              return this.__toString('Seq {', '}')
            }),
            (e.prototype.cacheResult = function () {
              return (
                !this._cache &&
                  this.__iterateUncached &&
                  ((this._cache = this.entrySeq().toArray()),
                  (this.size = this._cache.length)),
                this
              )
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this._cache
              if (n) {
                for (var r = n.length, i = 0; i !== r; ) {
                  var s = n[e ? r - ++i : i++]
                  if (!1 === t(s[1], s[0], this)) break
                }
                return i
              }
              return this.__iterateUncached(t, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._cache
              if (n) {
                var r = n.length,
                  i = 0
                return new Wm(function () {
                  if (i === r) return { value: void 0, done: !0 }
                  var s = n[e ? r - ++i : i++]
                  return Km(t, s[0], s[1])
                })
              }
              return this.__iteratorUncached(t, e)
            }),
            e
          )
        })(Dm),
        ng = (function (t) {
          function e(t) {
            return null == t
              ? cg().toKeyedSeq()
              : Tm(t)
              ? Am(t)
                ? t.toSeq()
                : t.fromEntrySeq()
              : Um(t)
              ? t.toSeq()
              : ug(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.toKeyedSeq = function () {
              return this
            }),
            e
          )
        })(eg),
        rg = (function (t) {
          function e(t) {
            return null == t
              ? cg()
              : Tm(t)
              ? Am(t)
                ? t.entrySeq()
                : t.toIndexedSeq()
              : Um(t)
              ? t.toSeq().entrySeq()
              : hg(t)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.of = function () {
              return e(arguments)
            }),
            (e.prototype.toIndexedSeq = function () {
              return this
            }),
            (e.prototype.toString = function () {
              return this.__toString('Seq [', ']')
            }),
            e
          )
        })(eg),
        ig = (function (t) {
          function e(t) {
            return (Tm(t) && !Pm(t) ? t : rg(t)).toSetSeq()
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.of = function () {
              return e(arguments)
            }),
            (e.prototype.toSetSeq = function () {
              return this
            }),
            e
          )
        })(eg)
      ;(eg.isSeq = zm),
        (eg.Keyed = ng),
        (eg.Set = ig),
        (eg.Indexed = rg),
        (eg.prototype[jm] = !0)
      var sg = (function (t) {
          function e(t) {
            ;(this._array = t), (this.size = t.length)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.get = function (t, e) {
              return this.has(t) ? this._array[vm(this, t)] : e
            }),
            (e.prototype.__iterate = function (t, e) {
              for (var n = this._array, r = n.length, i = 0; i !== r; ) {
                var s = e ? r - ++i : i++
                if (!1 === t(n[s], s, this)) break
              }
              return i
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._array,
                r = n.length,
                i = 0
              return new Wm(function () {
                if (i === r) return { value: void 0, done: !0 }
                var s = e ? r - ++i : i++
                return Km(t, s, n[s])
              })
            }),
            e
          )
        })(rg),
        og = (function (t) {
          function e(t) {
            var e = Object.keys(t)
            ;(this._object = t), (this._keys = e), (this.size = e.length)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.get = function (t, e) {
              return void 0 === e || this.has(t) ? this._object[t] : e
            }),
            (e.prototype.has = function (t) {
              return Jm.call(this._object, t)
            }),
            (e.prototype.__iterate = function (t, e) {
              for (
                var n = this._object, r = this._keys, i = r.length, s = 0;
                s !== i;

              ) {
                var o = r[e ? i - ++s : s++]
                if (!1 === t(n[o], o, this)) break
              }
              return s
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._object,
                r = this._keys,
                i = r.length,
                s = 0
              return new Wm(function () {
                if (s === i) return { value: void 0, done: !0 }
                var o = r[e ? i - ++s : s++]
                return Km(t, o, n[o])
              })
            }),
            e
          )
        })(ng)
      og.prototype[qm] = !0
      var ag,
        lg = (function (t) {
          function e(t) {
            ;(this._collection = t), (this.size = t.length || t.size)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.__iterateUncached = function (t, e) {
              if (e) return this.cacheResult().__iterate(t, e)
              var n = Ym(this._collection),
                r = 0
              if (Zm(n))
                for (
                  var i;
                  !(i = n.next()).done && !1 !== t(i.value, r++, this);

                );
              return r
            }),
            (e.prototype.__iteratorUncached = function (t, e) {
              if (e) return this.cacheResult().__iterator(t, e)
              var n = Ym(this._collection)
              if (!Zm(n)) return new Wm(Qm)
              var r = 0
              return new Wm(function () {
                var e = n.next()
                return e.done ? e : Km(t, r++, e.value)
              })
            }),
            e
          )
        })(rg)
      function cg() {
        return ag || (ag = new sg([]))
      }
      function ug(t) {
        var e = Array.isArray(t) ? new sg(t) : Gm(t) ? new lg(t) : void 0
        if (e) return e.fromEntrySeq()
        if ('object' == typeof t) return new og(t)
        throw new TypeError(
          'Expected Array or collection object of [k, v] entries, or keyed object: ' +
            t
        )
      }
      function hg(t) {
        var e = dg(t)
        if (e) return e
        throw new TypeError(
          'Expected Array or collection object of values: ' + t
        )
      }
      function dg(t) {
        return tg(t) ? new sg(t) : Gm(t) ? new lg(t) : void 0
      }
      var pg = '@@__IMMUTABLE_MAP__@@'
      function fg(t) {
        return Boolean(t && t[pg])
      }
      function mg(t) {
        return fg(t) && Hm(t)
      }
      function gg(t) {
        return Boolean(
          t && 'function' == typeof t.equals && 'function' == typeof t.hashCode
        )
      }
      function yg(t, e) {
        if (t === e || (t != t && e != e)) return !0
        if (!t || !e) return !1
        if ('function' == typeof t.valueOf && 'function' == typeof e.valueOf) {
          if ((t = t.valueOf()) === (e = e.valueOf()) || (t != t && e != e))
            return !0
          if (!t || !e) return !1
        }
        return !!(gg(t) && gg(e) && t.equals(e))
      }
      var _g =
        'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2)
          ? Math.imul
          : function (t, e) {
              var n = 65535 & (t |= 0),
                r = 65535 & (e |= 0)
              return (
                (n * r + ((((t >>> 16) * r + n * (e >>> 16)) << 16) >>> 0)) | 0
              )
            }
      function vg(t) {
        return ((t >>> 1) & 1073741824) | (3221225471 & t)
      }
      var bg = Object.prototype.valueOf
      function wg(t) {
        switch (typeof t) {
          case 'boolean':
            return t ? 1108378657 : 1108378656
          case 'number':
            return (function (t) {
              if (t != t || t === 1 / 0) return 0
              var e = 0 | t
              for (e !== t && (e ^= 4294967295 * t); t > 4294967295; )
                e ^= t /= 4294967295
              return vg(e)
            })(t)
          case 'string':
            return t.length > Ag
              ? (void 0 === (n = Pg[(e = t)]) &&
                  ((n = Sg(e)),
                  Rg === Og && ((Rg = 0), (Pg = {})),
                  Rg++,
                  (Pg[e] = n)),
                n)
              : Sg(t)
          case 'object':
          case 'function':
            return null === t
              ? 1108378658
              : 'function' == typeof t.hashCode
              ? vg(t.hashCode(t))
              : (t.valueOf !== bg &&
                  'function' == typeof t.valueOf &&
                  (t = t.valueOf(t)),
                (function (t) {
                  var e
                  if (xg && void 0 !== (e = Cg.get(t))) return e
                  if (void 0 !== (e = t[Ig])) return e
                  if (!kg) {
                    if (
                      void 0 !==
                      (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Ig])
                    )
                      return e
                    if (
                      void 0 !==
                      (e = (function (t) {
                        if (t && t.nodeType > 0)
                          switch (t.nodeType) {
                            case 1:
                              return t.uniqueID
                            case 9:
                              return (
                                t.documentElement && t.documentElement.uniqueID
                              )
                          }
                      })(t))
                    )
                      return e
                  }
                  if (((e = ++Tg), 1073741824 & Tg && (Tg = 0), xg))
                    Cg.set(t, e)
                  else {
                    if (void 0 !== Eg && !1 === Eg(t))
                      throw new Error(
                        'Non-extensible objects are not allowed as keys.'
                      )
                    if (kg)
                      Object.defineProperty(t, Ig, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: e,
                      })
                    else if (
                      void 0 !== t.propertyIsEnumerable &&
                      t.propertyIsEnumerable ===
                        t.constructor.prototype.propertyIsEnumerable
                    )
                      (t.propertyIsEnumerable = function () {
                        return this.constructor.prototype.propertyIsEnumerable.apply(
                          this,
                          arguments
                        )
                      }),
                        (t.propertyIsEnumerable[Ig] = e)
                    else {
                      if (void 0 === t.nodeType)
                        throw new Error(
                          'Unable to set a non-enumerable property on object.'
                        )
                      t[Ig] = e
                    }
                  }
                  return e
                })(t))
          case 'undefined':
            return 1108378659
          default:
            if ('function' == typeof t.toString) return Sg(t.toString())
            throw new Error('Value type ' + typeof t + ' cannot be hashed.')
        }
        var e, n
      }
      function Sg(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = (31 * e + t.charCodeAt(n)) | 0
        return vg(e)
      }
      var Cg,
        Eg = Object.isExtensible,
        kg = (function () {
          try {
            return Object.defineProperty({}, '@', {}), !0
          } catch (t) {
            return !1
          }
        })(),
        xg = 'function' == typeof WeakMap
      xg && (Cg = new WeakMap())
      var Tg = 0,
        Ig = '__immutablehash__'
      'function' == typeof Symbol && (Ig = Symbol(Ig))
      var Ag = 16,
        Og = 255,
        Rg = 0,
        Pg = {},
        Dg = (function (t) {
          function e(t, e) {
            ;(this._iter = t), (this._useKeys = e), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.get = function (t, e) {
              return this._iter.get(t, e)
            }),
            (e.prototype.has = function (t) {
              return this._iter.has(t)
            }),
            (e.prototype.valueSeq = function () {
              return this._iter.valueSeq()
            }),
            (e.prototype.reverse = function () {
              var t = this,
                e = Lg(this, !0)
              return (
                this._useKeys ||
                  (e.valueSeq = function () {
                    return t._iter.toSeq().reverse()
                  }),
                e
              )
            }),
            (e.prototype.map = function (t, e) {
              var n = this,
                r = zg(this, t, e)
              return (
                this._useKeys ||
                  (r.valueSeq = function () {
                    return n._iter.toSeq().map(t, e)
                  }),
                r
              )
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e, r) {
                return t(e, r, n)
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              return this._iter.__iterator(t, e)
            }),
            e
          )
        })(ng)
      Dg.prototype[qm] = !0
      var Mg = (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.includes = function (t) {
              return this._iter.includes(t)
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this,
                r = 0
              return (
                e && _m(this),
                this._iter.__iterate(function (i) {
                  return t(i, e ? n.size - ++r : r++, n)
                }, e)
              )
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this,
                r = this._iter.__iterator(1, e),
                i = 0
              return (
                e && _m(this),
                new Wm(function () {
                  var s = r.next()
                  return s.done ? s : Km(t, e ? n.size - ++i : i++, s.value, s)
                })
              )
            }),
            e
          )
        })(rg),
        Fg = (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.has = function (t) {
              return this._iter.includes(t)
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e) {
                return t(e, e, n)
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._iter.__iterator(1, e)
              return new Wm(function () {
                var e = n.next()
                return e.done ? e : Km(t, e.value, e.value, e)
              })
            }),
            e
          )
        })(ig),
        Ng = (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.entrySeq = function () {
              return this._iter.toSeq()
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e) {
                if (e) {
                  Zg(e)
                  var r = Tm(e)
                  return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n)
                }
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._iter.__iterator(1, e)
              return new Wm(function () {
                for (;;) {
                  var e = n.next()
                  if (e.done) return e
                  var r = e.value
                  if (r) {
                    Zg(r)
                    var i = Tm(r)
                    return Km(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e)
                  }
                }
              })
            }),
            e
          )
        })(ng)
      function jg(t) {
        var e = Xg(t)
        return (
          (e._iter = t),
          (e.size = t.size),
          (e.flip = function () {
            return t
          }),
          (e.reverse = function () {
            var e = t.reverse.apply(this)
            return (
              (e.flip = function () {
                return t.reverse()
              }),
              e
            )
          }),
          (e.has = function (e) {
            return t.includes(e)
          }),
          (e.includes = function (e) {
            return t.has(e)
          }),
          (e.cacheResult = Jg),
          (e.__iterateUncached = function (e, n) {
            var r = this
            return t.__iterate(function (t, n) {
              return !1 !== e(n, t, r)
            }, n)
          }),
          (e.__iteratorUncached = function (e, n) {
            if (2 === e) {
              var r = t.__iterator(e, n)
              return new Wm(function () {
                var t = r.next()
                if (!t.done) {
                  var e = t.value[0]
                  ;(t.value[0] = t.value[1]), (t.value[1] = e)
                }
                return t
              })
            }
            return t.__iterator(1 === e ? 0 : 1, n)
          }),
          e
        )
      }
      function zg(t, e, n) {
        var r = Xg(t)
        return (
          (r.size = t.size),
          (r.has = function (e) {
            return t.has(e)
          }),
          (r.get = function (r, i) {
            var s = t.get(r, mm)
            return s === mm ? i : e.call(n, s, r, t)
          }),
          (r.__iterateUncached = function (r, i) {
            var s = this
            return t.__iterate(function (t, i, o) {
              return !1 !== r(e.call(n, t, i, o), i, s)
            }, i)
          }),
          (r.__iteratorUncached = function (r, i) {
            var s = t.__iterator(2, i)
            return new Wm(function () {
              var i = s.next()
              if (i.done) return i
              var o = i.value,
                a = o[0]
              return Km(r, a, e.call(n, o[1], a, t), i)
            })
          }),
          r
        )
      }
      function Lg(t, e) {
        var n = this,
          r = Xg(t)
        return (
          (r._iter = t),
          (r.size = t.size),
          (r.reverse = function () {
            return t
          }),
          t.flip &&
            (r.flip = function () {
              var e = jg(t)
              return (
                (e.reverse = function () {
                  return t.flip()
                }),
                e
              )
            }),
          (r.get = function (n, r) {
            return t.get(e ? n : -1 - n, r)
          }),
          (r.has = function (n) {
            return t.has(e ? n : -1 - n)
          }),
          (r.includes = function (e) {
            return t.includes(e)
          }),
          (r.cacheResult = Jg),
          (r.__iterate = function (n, r) {
            var i = this,
              s = 0
            return (
              r && _m(t),
              t.__iterate(function (t, o) {
                return n(t, e ? o : r ? i.size - ++s : s++, i)
              }, !r)
            )
          }),
          (r.__iterator = function (r, i) {
            var s = 0
            i && _m(t)
            var o = t.__iterator(2, !i)
            return new Wm(function () {
              var t = o.next()
              if (t.done) return t
              var a = t.value
              return Km(r, e ? a[0] : i ? n.size - ++s : s++, a[1], t)
            })
          }),
          r
        )
      }
      function Ug(t, e, n, r) {
        var i = Xg(t)
        return (
          r &&
            ((i.has = function (r) {
              var i = t.get(r, mm)
              return i !== mm && !!e.call(n, i, r, t)
            }),
            (i.get = function (r, i) {
              var s = t.get(r, mm)
              return s !== mm && e.call(n, s, r, t) ? s : i
            })),
          (i.__iterateUncached = function (i, s) {
            var o = this,
              a = 0
            return (
              t.__iterate(function (t, s, l) {
                if (e.call(n, t, s, l)) return a++, i(t, r ? s : a - 1, o)
              }, s),
              a
            )
          }),
          (i.__iteratorUncached = function (i, s) {
            var o = t.__iterator(2, s),
              a = 0
            return new Wm(function () {
              for (;;) {
                var s = o.next()
                if (s.done) return s
                var l = s.value,
                  c = l[0],
                  u = l[1]
                if (e.call(n, u, c, t)) return Km(i, r ? c : a++, u, s)
              }
            })
          }),
          i
        )
      }
      function Bg(t, e, n, r) {
        var i = t.size
        if (wm(e, n, i)) return t
        var s = Sm(e, i),
          o = Cm(n, i)
        if (s != s || o != o) return Bg(t.toSeq().cacheResult(), e, n, r)
        var a,
          l = o - s
        l == l && (a = l < 0 ? 0 : l)
        var c = Xg(t)
        return (
          (c.size = 0 === a ? a : (t.size && a) || void 0),
          !r &&
            zm(t) &&
            a >= 0 &&
            (c.get = function (e, n) {
              return (e = vm(this, e)) >= 0 && e < a ? t.get(e + s, n) : n
            }),
          (c.__iterateUncached = function (e, n) {
            var i = this
            if (0 === a) return 0
            if (n) return this.cacheResult().__iterate(e, n)
            var o = 0,
              l = !0,
              c = 0
            return (
              t.__iterate(function (t, n) {
                if (!l || !(l = o++ < s))
                  return c++, !1 !== e(t, r ? n : c - 1, i) && c !== a
              }),
              c
            )
          }),
          (c.__iteratorUncached = function (e, n) {
            if (0 !== a && n) return this.cacheResult().__iterator(e, n)
            if (0 === a) return new Wm(Qm)
            var i = t.__iterator(e, n),
              o = 0,
              l = 0
            return new Wm(function () {
              for (; o++ < s; ) i.next()
              if (++l > a) return { value: void 0, done: !0 }
              var t = i.next()
              return r || 1 === e || t.done
                ? t
                : Km(e, l - 1, 0 === e ? void 0 : t.value[1], t)
            })
          }),
          c
        )
      }
      function qg(t, e, n, r) {
        var i = Xg(t)
        return (
          (i.__iterateUncached = function (i, s) {
            var o = this
            if (s) return this.cacheResult().__iterate(i, s)
            var a = !0,
              l = 0
            return (
              t.__iterate(function (t, s, c) {
                if (!a || !(a = e.call(n, t, s, c)))
                  return l++, i(t, r ? s : l - 1, o)
              }),
              l
            )
          }),
          (i.__iteratorUncached = function (i, s) {
            var o = this
            if (s) return this.cacheResult().__iterator(i, s)
            var a = t.__iterator(2, s),
              l = !0,
              c = 0
            return new Wm(function () {
              var t, s, u
              do {
                if ((t = a.next()).done)
                  return r || 1 === i
                    ? t
                    : Km(i, c++, 0 === i ? void 0 : t.value[1], t)
                var h = t.value
                ;(s = h[0]), (u = h[1]), l && (l = e.call(n, u, s, o))
              } while (l)
              return 2 === i ? t : Km(i, s, u, t)
            })
          }),
          i
        )
      }
      function Hg(t, e) {
        var n = Am(t),
          r = [t]
            .concat(e)
            .map(function (t) {
              return (
                Tm(t)
                  ? n && (t = Mm(t))
                  : (t = n ? ug(t) : hg(Array.isArray(t) ? t : [t])),
                t
              )
            })
            .filter(function (t) {
              return 0 !== t.size
            })
        if (0 === r.length) return t
        if (1 === r.length) {
          var i = r[0]
          if (i === t || (n && Am(i)) || (Rm(t) && Rm(i))) return i
        }
        var s = new sg(r)
        return (
          n ? (s = s.toKeyedSeq()) : Rm(t) || (s = s.toSetSeq()),
          ((s = s.flatten(!0)).size = r.reduce(function (t, e) {
            if (void 0 !== t) {
              var n = e.size
              if (void 0 !== n) return t + n
            }
          }, 0)),
          s
        )
      }
      function Vg(t, e, n) {
        var r = Xg(t)
        return (
          (r.__iterateUncached = function (i, s) {
            if (s) return this.cacheResult().__iterate(i, s)
            var o = 0,
              a = !1
            return (
              (function t(l, c) {
                l.__iterate(function (s, l) {
                  return (
                    (!e || c < e) && Tm(s)
                      ? t(s, c + 1)
                      : (o++, !1 === i(s, n ? l : o - 1, r) && (a = !0)),
                    !a
                  )
                }, s)
              })(t, 0),
              o
            )
          }),
          (r.__iteratorUncached = function (r, i) {
            if (i) return this.cacheResult().__iterator(r, i)
            var s = t.__iterator(r, i),
              o = [],
              a = 0
            return new Wm(function () {
              for (; s; ) {
                var t = s.next()
                if (!1 === t.done) {
                  var l = t.value
                  if ((2 === r && (l = l[1]), (e && !(o.length < e)) || !Tm(l)))
                    return n ? t : Km(r, a++, l, t)
                  o.push(s), (s = l.__iterator(r, i))
                } else s = o.pop()
              }
              return { value: void 0, done: !0 }
            })
          }),
          r
        )
      }
      function $g(t, e, n) {
        e || (e = ty)
        var r = Am(t),
          i = 0,
          s = t
            .toSeq()
            .map(function (e, r) {
              return [r, e, i++, n ? n(e, r, t) : e]
            })
            .valueSeq()
            .toArray()
        return (
          s
            .sort(function (t, n) {
              return e(t[3], n[3]) || t[2] - n[2]
            })
            .forEach(
              r
                ? function (t, e) {
                    s[e].length = 2
                  }
                : function (t, e) {
                    s[e] = t[1]
                  }
            ),
          r ? ng(s) : Rm(t) ? rg(s) : ig(s)
        )
      }
      function Wg(t, e, n) {
        if ((e || (e = ty), n)) {
          var r = t
            .toSeq()
            .map(function (e, r) {
              return [e, n(e, r, t)]
            })
            .reduce(function (t, n) {
              return Kg(e, t[1], n[1]) ? n : t
            })
          return r && r[0]
        }
        return t.reduce(function (t, n) {
          return Kg(e, t, n) ? n : t
        })
      }
      function Kg(t, e, n) {
        var r = t(n, e)
        return (0 === r && n !== e && (null == n || n != n)) || r > 0
      }
      function Qg(t, e, n, r) {
        var i = Xg(t),
          s = new sg(n).map(function (t) {
            return t.size
          })
        return (
          (i.size = r ? s.max() : s.min()),
          (i.__iterate = function (t, e) {
            for (
              var n, r = this.__iterator(1, e), i = 0;
              !(n = r.next()).done && !1 !== t(n.value, i++, this);

            );
            return i
          }),
          (i.__iteratorUncached = function (t, i) {
            var s = n.map(function (t) {
                return (t = Dm(t)), Ym(i ? t.reverse() : t)
              }),
              o = 0,
              a = !1
            return new Wm(function () {
              var n
              return (
                a ||
                  ((n = s.map(function (t) {
                    return t.next()
                  })),
                  (a = r
                    ? n.every(function (t) {
                        return t.done
                      })
                    : n.some(function (t) {
                        return t.done
                      }))),
                a
                  ? { value: void 0, done: !0 }
                  : Km(
                      t,
                      o++,
                      e.apply(
                        null,
                        n.map(function (t) {
                          return t.value
                        })
                      )
                    )
              )
            })
          }),
          i
        )
      }
      function Gg(t, e) {
        return t === e ? t : zm(t) ? e : t.constructor(e)
      }
      function Zg(t) {
        if (t !== Object(t)) throw new TypeError('Expected [K, V] tuple: ' + t)
      }
      function Yg(t) {
        return Am(t) ? Mm : Rm(t) ? Fm : Nm
      }
      function Xg(t) {
        return Object.create((Am(t) ? ng : Rm(t) ? rg : ig).prototype)
      }
      function Jg() {
        return this._iter.cacheResult
          ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
          : eg.prototype.cacheResult.call(this)
      }
      function ty(t, e) {
        return void 0 === t && void 0 === e
          ? 0
          : void 0 === t
          ? 1
          : void 0 === e
          ? -1
          : t > e
          ? 1
          : t < e
          ? -1
          : 0
      }
      function ey(t, e) {
        e = e || 0
        for (
          var n = Math.max(0, t.length - e), r = new Array(n), i = 0;
          i < n;
          i++
        )
          r[i] = t[i + e]
        return r
      }
      function ny(t, e) {
        if (!t) throw new Error(e)
      }
      function ry(t) {
        ny(t !== 1 / 0, 'Cannot perform this action with an infinite size.')
      }
      function iy(t) {
        if (tg(t) && 'string' != typeof t) return t
        if (Hm(t)) return t.toArray()
        throw new TypeError(
          'Invalid keyPath: expected Ordered Collection or Array: ' + t
        )
      }
      function sy(t) {
        return (
          'object' == typeof t &&
          (Bm(t) ||
            Array.isArray(t) ||
            (function (t) {
              return (
                t &&
                ('function' != typeof t.constructor ||
                  'Object' === t.constructor.name)
              )
            })(t))
        )
      }
      function oy(t) {
        try {
          return 'string' == typeof t ? JSON.stringify(t) : String(t)
        } catch (e) {
          return JSON.stringify(t)
        }
      }
      function ay(t, e, n) {
        return Bm(t)
          ? t.get(e, n)
          : (function (t, e) {
              return Bm(t) ? t.has(e) : sy(t) && Jm.call(t, e)
            })(t, e)
          ? 'function' == typeof t.get
            ? t.get(e)
            : t[e]
          : n
      }
      function ly(t) {
        if (Array.isArray(t)) return ey(t)
        var e = {}
        for (var n in t) Jm.call(t, n) && (e[n] = t[n])
        return e
      }
      function cy(t, e, n, r) {
        r || ((r = n), (n = void 0))
        var i = uy(Bm(t), t, iy(e), 0, n, r)
        return i === mm ? n : i
      }
      function uy(t, e, n, r, i, s) {
        var o = e === mm
        if (r === n.length) {
          var a = o ? i : e,
            l = s(a)
          return l === a ? e : l
        }
        if (!o && !sy(e))
          throw new TypeError(
            'Cannot update within non-data-structure value in path [' +
              n.slice(0, r).map(oy) +
              ']: ' +
              e
          )
        var c = n[r],
          u = o ? mm : ay(e, c, mm),
          h = uy(u === mm ? t : Bm(u), u, n, r + 1, i, s)
        return h === u
          ? e
          : h === mm
          ? (function (t, e) {
              if (!sy(t))
                throw new TypeError(
                  'Cannot update non-data-structure value: ' + t
                )
              if (Bm(t)) {
                if (!t.remove)
                  throw new TypeError(
                    'Cannot update immutable value without .remove() method: ' +
                      t
                  )
                return t.remove(e)
              }
              if (!Jm.call(t, e)) return t
              var n = ly(t)
              return Array.isArray(n) ? n.splice(e, 1) : delete n[e], n
            })(e, c)
          : (function (t, e, n) {
              if (!sy(t))
                throw new TypeError(
                  'Cannot update non-data-structure value: ' + t
                )
              if (Bm(t)) {
                if (!t.set)
                  throw new TypeError(
                    'Cannot update immutable value without .set() method: ' + t
                  )
                return t.set(e, n)
              }
              if (Jm.call(t, e) && n === t[e]) return t
              var r = ly(t)
              return (r[e] = n), r
            })(o ? (t ? By() : {}) : e, c, h)
      }
      function hy(t, e) {
        return (function (t, e, n) {
          return cy(t, e, mm, function () {
            return n
          })
        })(this, t, e)
      }
      function dy(t) {
        return (function (t, e) {
          return cy(t, e, function () {
            return mm
          })
        })(this, t)
      }
      function py(t, e, n, r) {
        return cy(t, [e], n, r)
      }
      function fy(t, e, n) {
        return 1 === arguments.length ? t(this) : py(this, t, e, n)
      }
      function my(t, e, n) {
        return cy(this, t, e, n)
      }
      function gy() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
        return _y(this, t)
      }
      function yy(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        if ('function' != typeof t)
          throw new TypeError('Invalid merger function: ' + t)
        return _y(this, e, t)
      }
      function _y(t, e, n) {
        for (var r = [], i = 0; i < e.length; i++) {
          var s = Mm(e[i])
          0 !== s.size && r.push(s)
        }
        return 0 === r.length
          ? t
          : 0 !== t.toSeq().size || t.__ownerID || 1 !== r.length
          ? t.withMutations(function (t) {
              for (
                var e = n
                    ? function (e, r) {
                        py(t, r, mm, function (t) {
                          return t === mm ? e : n(t, e, r)
                        })
                      }
                    : function (e, n) {
                        t.set(n, e)
                      },
                  i = 0;
                i < r.length;
                i++
              )
                r[i].forEach(e)
            })
          : t.constructor(r[0])
      }
      function vy(t, e, n) {
        return by(
          t,
          e,
          (function (t) {
            return function e(n, r, i) {
              return sy(n) && sy(r) ? by(n, [r], e) : t ? t(n, r, i) : r
            }
          })(n)
        )
      }
      function by(t, e, n) {
        if (!sy(t))
          throw new TypeError(
            'Cannot merge into non-data-structure value: ' + t
          )
        if (Bm(t))
          return 'function' == typeof n && t.mergeWith
            ? t.mergeWith.apply(t, [n].concat(e))
            : t.merge
            ? t.merge.apply(t, e)
            : t.concat.apply(t, e)
        for (
          var r = Array.isArray(t),
            i = t,
            s = r ? Fm : Mm,
            o = r
              ? function (e) {
                  i === t && (i = ly(i)), i.push(e)
                }
              : function (e, r) {
                  var s = Jm.call(i, r),
                    o = s && n ? n(i[r], e, r) : e
                  ;(s && o === i[r]) || (i === t && (i = ly(i)), (i[r] = o))
                },
            a = 0;
          a < e.length;
          a++
        )
          s(e[a]).forEach(o)
        return i
      }
      function wy() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
        return vy(this, t)
      }
      function Sy(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return vy(this, e, t)
      }
      function Cy(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return cy(this, t, By(), function (t) {
          return by(t, e)
        })
      }
      function Ey(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return cy(this, t, By(), function (t) {
          return vy(t, e)
        })
      }
      function ky(t) {
        var e = this.asMutable()
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
      }
      function xy() {
        return this.__ownerID ? this : this.__ensureOwner(new ym())
      }
      function Ty() {
        return this.__ensureOwner()
      }
      function Iy() {
        return this.__altered
      }
      Mg.prototype.cacheResult = Dg.prototype.cacheResult = Fg.prototype.cacheResult = Ng.prototype.cacheResult = Jg
      var Ay = (function (t) {
        function e(e) {
          return null == e
            ? By()
            : fg(e) && !Hm(e)
            ? e
            : By().withMutations(function (n) {
                var r = t(e)
                ry(r.size),
                  r.forEach(function (t, e) {
                    return n.set(e, t)
                  })
              })
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.of = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return By().withMutations(function (e) {
              for (var n = 0; n < t.length; n += 2) {
                if (n + 1 >= t.length)
                  throw new Error('Missing value for key: ' + t[n])
                e.set(t[n], t[n + 1])
              }
            })
          }),
          (e.prototype.toString = function () {
            return this.__toString('Map {', '}')
          }),
          (e.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e
          }),
          (e.prototype.set = function (t, e) {
            return qy(this, t, e)
          }),
          (e.prototype.remove = function (t) {
            return qy(this, t, mm)
          }),
          (e.prototype.deleteAll = function (t) {
            var e = Dm(t)
            return 0 === e.size
              ? this
              : this.withMutations(function (t) {
                  e.forEach(function (e) {
                    return t.remove(e)
                  })
                })
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._root = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : By()
          }),
          (e.prototype.sort = function (t) {
            return p_($g(this, t))
          }),
          (e.prototype.sortBy = function (t, e) {
            return p_($g(this, e, t))
          }),
          (e.prototype.map = function (t, e) {
            return this.withMutations(function (n) {
              n.forEach(function (r, i) {
                n.set(i, t.call(e, r, i, n))
              })
            })
          }),
          (e.prototype.__iterator = function (t, e) {
            return new jy(this, t, e)
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this,
              r = 0
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return r++, t(e[1], e[0], n)
                }, e),
              r
            )
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Uy(this.size, this._root, t, this.__hash)
              : 0 === this.size
              ? By()
              : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          e
        )
      })(Mm)
      Ay.isMap = fg
      var Oy = Ay.prototype
      ;(Oy[pg] = !0),
        (Oy.delete = Oy.remove),
        (Oy.removeAll = Oy.deleteAll),
        (Oy.setIn = hy),
        (Oy.removeIn = Oy.deleteIn = dy),
        (Oy.update = fy),
        (Oy.updateIn = my),
        (Oy.merge = Oy.concat = gy),
        (Oy.mergeWith = yy),
        (Oy.mergeDeep = wy),
        (Oy.mergeDeepWith = Sy),
        (Oy.mergeIn = Cy),
        (Oy.mergeDeepIn = Ey),
        (Oy.withMutations = ky),
        (Oy.wasAltered = Iy),
        (Oy.asImmutable = Ty),
        (Oy['@@transducer/init'] = Oy.asMutable = xy),
        (Oy['@@transducer/step'] = function (t, e) {
          return t.set(e[0], e[1])
        }),
        (Oy['@@transducer/result'] = function (t) {
          return t.asImmutable()
        })
      var Ry = function (t, e) {
        ;(this.ownerID = t), (this.entries = e)
      }
      ;(Ry.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, s = 0, o = i.length; s < o; s++)
          if (yg(n, i[s][0])) return i[s][1]
        return r
      }),
        (Ry.prototype.update = function (t, e, n, r, i, s, o) {
          for (
            var a = i === mm, l = this.entries, c = 0, u = l.length;
            c < u && !yg(r, l[c][0]);
            c++
          );
          var h = c < u
          if (h ? l[c][1] === i : a) return this
          if ((gm(o), (a || !h) && gm(s), !a || 1 !== l.length)) {
            if (!h && !a && l.length >= Qy)
              return (function (t, e, n, r) {
                t || (t = new ym())
                for (
                  var i = new Fy(t, wg(n), [n, r]), s = 0;
                  s < e.length;
                  s++
                ) {
                  var o = e[s]
                  i = i.update(t, 0, void 0, o[0], o[1])
                }
                return i
              })(t, l, r, i)
            var d = t && t === this.ownerID,
              p = d ? l : ey(l)
            return (
              h
                ? a
                  ? c === u - 1
                    ? p.pop()
                    : (p[c] = p.pop())
                  : (p[c] = [r, i])
                : p.push([r, i]),
              d ? ((this.entries = p), this) : new Ry(t, p)
            )
          }
        })
      var Py = function (t, e, n) {
        ;(this.ownerID = t), (this.bitmap = e), (this.nodes = n)
      }
      ;(Py.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = wg(n))
        var i = 1 << ((0 === t ? e : e >>> t) & fm),
          s = this.bitmap
        return 0 == (s & i)
          ? r
          : this.nodes[Wy(s & (i - 1))].get(t + 5, e, n, r)
      }),
        (Py.prototype.update = function (t, e, n, r, i, s, o) {
          void 0 === n && (n = wg(r))
          var a = (0 === e ? n : n >>> e) & fm,
            l = 1 << a,
            c = this.bitmap,
            u = 0 != (c & l)
          if (!u && i === mm) return this
          var h = Wy(c & (l - 1)),
            d = this.nodes,
            p = u ? d[h] : void 0,
            f = Hy(p, t, e + 5, n, r, i, s, o)
          if (f === p) return this
          if (!u && f && d.length >= Gy)
            return (function (t, e, n, r, i) {
              for (var s = 0, o = new Array(pm), a = 0; 0 !== n; a++, n >>>= 1)
                o[a] = 1 & n ? e[s++] : void 0
              return (o[r] = i), new Dy(t, s + 1, o)
            })(t, d, c, a, f)
          if (u && !f && 2 === d.length && Vy(d[1 ^ h])) return d[1 ^ h]
          if (u && f && 1 === d.length && Vy(f)) return f
          var m = t && t === this.ownerID,
            g = u ? (f ? c : c ^ l) : c | l,
            y = u
              ? f
                ? Ky(d, h, f, m)
                : (function (t, e, n) {
                    var r = t.length - 1
                    if (n && e === r) return t.pop(), t
                    for (var i = new Array(r), s = 0, o = 0; o < r; o++)
                      o === e && (s = 1), (i[o] = t[o + s])
                    return i
                  })(d, h, m)
              : (function (t, e, n, r) {
                  var i = t.length + 1
                  if (r && e + 1 === i) return (t[e] = n), t
                  for (var s = new Array(i), o = 0, a = 0; a < i; a++)
                    a === e ? ((s[a] = n), (o = -1)) : (s[a] = t[a + o])
                  return s
                })(d, h, f, m)
          return m
            ? ((this.bitmap = g), (this.nodes = y), this)
            : new Py(t, g, y)
        })
      var Dy = function (t, e, n) {
        ;(this.ownerID = t), (this.count = e), (this.nodes = n)
      }
      ;(Dy.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = wg(n))
        var i = this.nodes[(0 === t ? e : e >>> t) & fm]
        return i ? i.get(t + 5, e, n, r) : r
      }),
        (Dy.prototype.update = function (t, e, n, r, i, s, o) {
          void 0 === n && (n = wg(r))
          var a = (0 === e ? n : n >>> e) & fm,
            l = this.nodes,
            c = l[a]
          if (i === mm && !c) return this
          var u = Hy(c, t, e + 5, n, r, i, s, o)
          if (u === c) return this
          var h = this.count
          if (c) {
            if (!u && --h < Zy)
              return (function (t, e, n, r) {
                for (
                  var i = 0,
                    s = 0,
                    o = new Array(n),
                    a = 0,
                    l = 1,
                    c = e.length;
                  a < c;
                  a++, l <<= 1
                ) {
                  var u = e[a]
                  void 0 !== u && a !== r && ((i |= l), (o[s++] = u))
                }
                return new Py(t, i, o)
              })(t, l, h, a)
          } else h++
          var d = t && t === this.ownerID,
            p = Ky(l, a, u, d)
          return d
            ? ((this.count = h), (this.nodes = p), this)
            : new Dy(t, h, p)
        })
      var My = function (t, e, n) {
        ;(this.ownerID = t), (this.keyHash = e), (this.entries = n)
      }
      ;(My.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, s = 0, o = i.length; s < o; s++)
          if (yg(n, i[s][0])) return i[s][1]
        return r
      }),
        (My.prototype.update = function (t, e, n, r, i, s, o) {
          void 0 === n && (n = wg(r))
          var a = i === mm
          if (n !== this.keyHash)
            return a ? this : (gm(o), gm(s), $y(this, t, e, n, [r, i]))
          for (
            var l = this.entries, c = 0, u = l.length;
            c < u && !yg(r, l[c][0]);
            c++
          );
          var h = c < u
          if (h ? l[c][1] === i : a) return this
          if ((gm(o), (a || !h) && gm(s), a && 2 === u))
            return new Fy(t, this.keyHash, l[1 ^ c])
          var d = t && t === this.ownerID,
            p = d ? l : ey(l)
          return (
            h
              ? a
                ? c === u - 1
                  ? p.pop()
                  : (p[c] = p.pop())
                : (p[c] = [r, i])
              : p.push([r, i]),
            d ? ((this.entries = p), this) : new My(t, this.keyHash, p)
          )
        })
      var Fy = function (t, e, n) {
        ;(this.ownerID = t), (this.keyHash = e), (this.entry = n)
      }
      ;(Fy.prototype.get = function (t, e, n, r) {
        return yg(n, this.entry[0]) ? this.entry[1] : r
      }),
        (Fy.prototype.update = function (t, e, n, r, i, s, o) {
          var a = i === mm,
            l = yg(r, this.entry[0])
          return (l ? i === this.entry[1] : a)
            ? this
            : (gm(o),
              a
                ? void gm(s)
                : l
                ? t && t === this.ownerID
                  ? ((this.entry[1] = i), this)
                  : new Fy(t, this.keyHash, [r, i])
                : (gm(s), $y(this, t, e, wg(r), [r, i])))
        }),
        (Ry.prototype.iterate = My.prototype.iterate = function (t, e) {
          for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
            if (!1 === t(n[e ? i - r : r])) return !1
        }),
        (Py.prototype.iterate = Dy.prototype.iterate = function (t, e) {
          for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
            var s = n[e ? i - r : r]
            if (s && !1 === s.iterate(t, e)) return !1
          }
        }),
        (Fy.prototype.iterate = function (t, e) {
          return t(this.entry)
        })
      var Ny,
        jy = (function (t) {
          function e(t, e, n) {
            ;(this._type = e),
              (this._reverse = n),
              (this._stack = t._root && Ly(t._root))
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.next = function () {
              for (var t = this._type, e = this._stack; e; ) {
                var n = e.node,
                  r = e.index++,
                  i = void 0
                if (n.entry) {
                  if (0 === r) return zy(t, n.entry)
                } else if (n.entries) {
                  if (r <= (i = n.entries.length - 1))
                    return zy(t, n.entries[this._reverse ? i - r : r])
                } else if (r <= (i = n.nodes.length - 1)) {
                  var s = n.nodes[this._reverse ? i - r : r]
                  if (s) {
                    if (s.entry) return zy(t, s.entry)
                    e = this._stack = Ly(s, e)
                  }
                  continue
                }
                e = this._stack = this._stack.__prev
              }
              return { value: void 0, done: !0 }
            }),
            e
          )
        })(Wm)
      function zy(t, e) {
        return Km(t, e[0], e[1])
      }
      function Ly(t, e) {
        return { node: t, index: 0, __prev: e }
      }
      function Uy(t, e, n, r) {
        var i = Object.create(Oy)
        return (
          (i.size = t),
          (i._root = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        )
      }
      function By() {
        return Ny || (Ny = Uy(0))
      }
      function qy(t, e, n) {
        var r, i
        if (t._root) {
          var s = { value: !1 },
            o = { value: !1 }
          if (((r = Hy(t._root, t.__ownerID, 0, void 0, e, n, s, o)), !o.value))
            return t
          i = t.size + (s.value ? (n === mm ? -1 : 1) : 0)
        } else {
          if (n === mm) return t
          ;(i = 1), (r = new Ry(t.__ownerID, [[e, n]]))
        }
        return t.__ownerID
          ? ((t.size = i),
            (t._root = r),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : r
          ? Uy(i, r)
          : By()
      }
      function Hy(t, e, n, r, i, s, o, a) {
        return t
          ? t.update(e, n, r, i, s, o, a)
          : s === mm
          ? t
          : (gm(a), gm(o), new Fy(e, r, [i, s]))
      }
      function Vy(t) {
        return t.constructor === Fy || t.constructor === My
      }
      function $y(t, e, n, r, i) {
        if (t.keyHash === r) return new My(e, r, [t.entry, i])
        var s,
          o = (0 === n ? t.keyHash : t.keyHash >>> n) & fm,
          a = (0 === n ? r : r >>> n) & fm,
          l =
            o === a
              ? [$y(t, e, n + 5, r, i)]
              : ((s = new Fy(e, r, i)), o < a ? [t, s] : [s, t])
        return new Py(e, (1 << o) | (1 << a), l)
      }
      function Wy(t) {
        return (
          (t =
            ((t =
              (858993459 & (t -= (t >> 1) & 1431655765)) +
              ((t >> 2) & 858993459)) +
              (t >> 4)) &
            252645135),
          127 & ((t += t >> 8) + (t >> 16))
        )
      }
      function Ky(t, e, n, r) {
        var i = r ? t : ey(t)
        return (i[e] = n), i
      }
      var Qy = 8,
        Gy = 16,
        Zy = 8,
        Yy = '@@__IMMUTABLE_LIST__@@'
      function Xy(t) {
        return Boolean(t && t[Yy])
      }
      var Jy = (function (t) {
        function e(e) {
          var n = o_()
          if (null == e) return n
          if (Xy(e)) return e
          var r = t(e),
            i = r.size
          return 0 === i
            ? n
            : (ry(i),
              i > 0 && i < pm
                ? s_(0, i, 5, null, new e_(r.toArray()))
                : n.withMutations(function (t) {
                    t.setSize(i),
                      r.forEach(function (e, n) {
                        return t.set(n, e)
                      })
                  }))
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.prototype.toString = function () {
            return this.__toString('List [', ']')
          }),
          (e.prototype.get = function (t, e) {
            if ((t = vm(this, t)) >= 0 && t < this.size) {
              var n = c_(this, (t += this._origin))
              return n && n.array[t & fm]
            }
            return e
          }),
          (e.prototype.set = function (t, e) {
            return (function (t, e, n) {
              if ((e = vm(t, e)) != e) return t
              if (e >= t.size || e < 0)
                return t.withMutations(function (t) {
                  e < 0 ? u_(t, e).set(0, n) : u_(t, 0, e + 1).set(e, n)
                })
              var r = t._tail,
                i = t._root,
                s = { value: !1 }
              return (
                (e += t._origin) >= h_(t._capacity)
                  ? (r = a_(r, t.__ownerID, 0, e, n, s))
                  : (i = a_(i, t.__ownerID, t._level, e, n, s)),
                s.value
                  ? t.__ownerID
                    ? ((t._root = i),
                      (t._tail = r),
                      (t.__hash = void 0),
                      (t.__altered = !0),
                      t)
                    : s_(t._origin, t._capacity, t._level, i, r)
                  : t
              )
            })(this, t, e)
          }),
          (e.prototype.remove = function (t) {
            return this.has(t)
              ? 0 === t
                ? this.shift()
                : t === this.size - 1
                ? this.pop()
                : this.splice(t, 1)
              : this
          }),
          (e.prototype.insert = function (t, e) {
            return this.splice(t, 0, e)
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = 5),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : o_()
          }),
          (e.prototype.push = function () {
            var t = arguments,
              e = this.size
            return this.withMutations(function (n) {
              u_(n, 0, e + t.length)
              for (var r = 0; r < t.length; r++) n.set(e + r, t[r])
            })
          }),
          (e.prototype.pop = function () {
            return u_(this, 0, -1)
          }),
          (e.prototype.unshift = function () {
            var t = arguments
            return this.withMutations(function (e) {
              u_(e, -t.length)
              for (var n = 0; n < t.length; n++) e.set(n, t[n])
            })
          }),
          (e.prototype.shift = function () {
            return u_(this, 1)
          }),
          (e.prototype.concat = function () {
            for (var e = arguments, n = [], r = 0; r < arguments.length; r++) {
              var i = e[r],
                s = t('string' != typeof i && Gm(i) ? i : [i])
              0 !== s.size && n.push(s)
            }
            return 0 === n.length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== n.length
              ? this.withMutations(function (t) {
                  n.forEach(function (e) {
                    return e.forEach(function (e) {
                      return t.push(e)
                    })
                  })
                })
              : this.constructor(n[0])
          }),
          (e.prototype.setSize = function (t) {
            return u_(this, 0, t)
          }),
          (e.prototype.map = function (t, e) {
            var n = this
            return this.withMutations(function (r) {
              for (var i = 0; i < n.size; i++)
                r.set(i, t.call(e, r.get(i), i, r))
            })
          }),
          (e.prototype.slice = function (t, e) {
            var n = this.size
            return wm(t, e, n) ? this : u_(this, Sm(t, n), Cm(e, n))
          }),
          (e.prototype.__iterator = function (t, e) {
            var n = e ? this.size : 0,
              r = i_(this, e)
            return new Wm(function () {
              var i = r()
              return i === r_
                ? { value: void 0, done: !0 }
                : Km(t, e ? --n : n++, i)
            })
          }),
          (e.prototype.__iterate = function (t, e) {
            for (
              var n, r = e ? this.size : 0, i = i_(this, e);
              (n = i()) !== r_ && !1 !== t(n, e ? --r : r++, this);

            );
            return r
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? s_(
                  this._origin,
                  this._capacity,
                  this._level,
                  this._root,
                  this._tail,
                  t,
                  this.__hash
                )
              : 0 === this.size
              ? o_()
              : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          e
        )
      })(Fm)
      Jy.isList = Xy
      var t_ = Jy.prototype
      ;(t_[Yy] = !0),
        (t_.delete = t_.remove),
        (t_.merge = t_.concat),
        (t_.setIn = hy),
        (t_.deleteIn = t_.removeIn = dy),
        (t_.update = fy),
        (t_.updateIn = my),
        (t_.mergeIn = Cy),
        (t_.mergeDeepIn = Ey),
        (t_.withMutations = ky),
        (t_.wasAltered = Iy),
        (t_.asImmutable = Ty),
        (t_['@@transducer/init'] = t_.asMutable = xy),
        (t_['@@transducer/step'] = function (t, e) {
          return t.push(e)
        }),
        (t_['@@transducer/result'] = function (t) {
          return t.asImmutable()
        })
      var e_ = function (t, e) {
        ;(this.array = t), (this.ownerID = e)
      }
      ;(e_.prototype.removeBefore = function (t, e, n) {
        if (n === e ? 1 << e : 0 === this.array.length) return this
        var r = (n >>> e) & fm
        if (r >= this.array.length) return new e_([], t)
        var i,
          s = 0 === r
        if (e > 0) {
          var o = this.array[r]
          if ((i = o && o.removeBefore(t, e - 5, n)) === o && s) return this
        }
        if (s && !i) return this
        var a = l_(this, t)
        if (!s) for (var l = 0; l < r; l++) a.array[l] = void 0
        return i && (a.array[r] = i), a
      }),
        (e_.prototype.removeAfter = function (t, e, n) {
          if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this
          var r,
            i = ((n - 1) >>> e) & fm
          if (i >= this.array.length) return this
          if (e > 0) {
            var s = this.array[i]
            if (
              (r = s && s.removeAfter(t, e - 5, n)) === s &&
              i === this.array.length - 1
            )
              return this
          }
          var o = l_(this, t)
          return o.array.splice(i + 1), r && (o.array[i] = r), o
        })
      var n_,
        r_ = {}
      function i_(t, e) {
        var n = t._origin,
          r = t._capacity,
          i = h_(r),
          s = t._tail
        return (function t(o, a, l) {
          return 0 === a
            ? (function (t, o) {
                var a = o === i ? s && s.array : t && t.array,
                  l = o > n ? 0 : n - o,
                  c = r - o
                return (
                  c > pm && (c = pm),
                  function () {
                    if (l === c) return r_
                    var t = e ? --c : l++
                    return a && a[t]
                  }
                )
              })(o, l)
            : (function (i, s, o) {
                var a,
                  l = i && i.array,
                  c = o > n ? 0 : (n - o) >> s,
                  u = 1 + ((r - o) >> s)
                return (
                  u > pm && (u = pm),
                  function () {
                    for (;;) {
                      if (a) {
                        var n = a()
                        if (n !== r_) return n
                        a = null
                      }
                      if (c === u) return r_
                      var r = e ? --u : c++
                      a = t(l && l[r], s - 5, o + (r << s))
                    }
                  }
                )
              })(o, a, l)
        })(t._root, t._level, 0)
      }
      function s_(t, e, n, r, i, s, o) {
        var a = Object.create(t_)
        return (
          (a.size = e - t),
          (a._origin = t),
          (a._capacity = e),
          (a._level = n),
          (a._root = r),
          (a._tail = i),
          (a.__ownerID = s),
          (a.__hash = o),
          (a.__altered = !1),
          a
        )
      }
      function o_() {
        return n_ || (n_ = s_(0, 0, 5))
      }
      function a_(t, e, n, r, i, s) {
        var o,
          a = (r >>> n) & fm,
          l = t && a < t.array.length
        if (!l && void 0 === i) return t
        if (n > 0) {
          var c = t && t.array[a],
            u = a_(c, e, n - 5, r, i, s)
          return u === c ? t : (((o = l_(t, e)).array[a] = u), o)
        }
        return l && t.array[a] === i
          ? t
          : (s && gm(s),
            (o = l_(t, e)),
            void 0 === i && a === o.array.length - 1
              ? o.array.pop()
              : (o.array[a] = i),
            o)
      }
      function l_(t, e) {
        return e && t && e === t.ownerID
          ? t
          : new e_(t ? t.array.slice() : [], e)
      }
      function c_(t, e) {
        if (e >= h_(t._capacity)) return t._tail
        if (e < 1 << (t._level + 5)) {
          for (var n = t._root, r = t._level; n && r > 0; )
            (n = n.array[(e >>> r) & fm]), (r -= 5)
          return n
        }
      }
      function u_(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0)
        var r = t.__ownerID || new ym(),
          i = t._origin,
          s = t._capacity,
          o = i + e,
          a = void 0 === n ? s : n < 0 ? s + n : i + n
        if (o === i && a === s) return t
        if (o >= a) return t.clear()
        for (var l = t._level, c = t._root, u = 0; o + u < 0; )
          (c = new e_(c && c.array.length ? [void 0, c] : [], r)),
            (u += 1 << (l += 5))
        u && ((o += u), (i += u), (a += u), (s += u))
        for (var h = h_(s), d = h_(a); d >= 1 << (l + 5); )
          (c = new e_(c && c.array.length ? [c] : [], r)), (l += 5)
        var p = t._tail,
          f = d < h ? c_(t, a - 1) : d > h ? new e_([], r) : p
        if (p && d > h && o < s && p.array.length) {
          for (var m = (c = l_(c, r)), g = l; g > 5; g -= 5) {
            var y = (h >>> g) & fm
            m = m.array[y] = l_(m.array[y], r)
          }
          m.array[(h >>> 5) & fm] = p
        }
        if ((a < s && (f = f && f.removeAfter(r, 0, a)), o >= d))
          (o -= d),
            (a -= d),
            (l = 5),
            (c = null),
            (f = f && f.removeBefore(r, 0, o))
        else if (o > i || d < h) {
          for (u = 0; c; ) {
            var _ = (o >>> l) & fm
            if ((_ !== d >>> l) & fm) break
            _ && (u += (1 << l) * _), (l -= 5), (c = c.array[_])
          }
          c && o > i && (c = c.removeBefore(r, l, o - u)),
            c && d < h && (c = c.removeAfter(r, l, d - u)),
            u && ((o -= u), (a -= u))
        }
        return t.__ownerID
          ? ((t.size = a - o),
            (t._origin = o),
            (t._capacity = a),
            (t._level = l),
            (t._root = c),
            (t._tail = f),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : s_(o, a, l, c, f)
      }
      function h_(t) {
        return t < pm ? 0 : ((t - 1) >>> 5) << 5
      }
      var d_,
        p_ = (function (t) {
          function e(t) {
            return null == t
              ? m_()
              : mg(t)
              ? t
              : m_().withMutations(function (e) {
                  var n = Mm(t)
                  ry(n.size),
                    n.forEach(function (t, n) {
                      return e.set(n, t)
                    })
                })
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.of = function () {
              return this(arguments)
            }),
            (e.prototype.toString = function () {
              return this.__toString('OrderedMap {', '}')
            }),
            (e.prototype.get = function (t, e) {
              var n = this._map.get(t)
              return void 0 !== n ? this._list.get(n)[1] : e
            }),
            (e.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
                : m_()
            }),
            (e.prototype.set = function (t, e) {
              return g_(this, t, e)
            }),
            (e.prototype.remove = function (t) {
              return g_(this, t, mm)
            }),
            (e.prototype.wasAltered = function () {
              return this._map.wasAltered() || this._list.wasAltered()
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._list.__iterate(function (e) {
                return e && t(e[1], e[0], n)
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              return this._list.fromEntrySeq().__iterator(t, e)
            }),
            (e.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this
              var e = this._map.__ensureOwner(t),
                n = this._list.__ensureOwner(t)
              return t
                ? f_(e, n, t, this.__hash)
                : 0 === this.size
                ? m_()
                : ((this.__ownerID = t),
                  (this._map = e),
                  (this._list = n),
                  this)
            }),
            e
          )
        })(Ay)
      function f_(t, e, n, r) {
        var i = Object.create(p_.prototype)
        return (
          (i.size = t ? t.size : 0),
          (i._map = t),
          (i._list = e),
          (i.__ownerID = n),
          (i.__hash = r),
          i
        )
      }
      function m_() {
        return d_ || (d_ = f_(By(), o_()))
      }
      function g_(t, e, n) {
        var r,
          i,
          s = t._map,
          o = t._list,
          a = s.get(e),
          l = void 0 !== a
        if (n === mm) {
          if (!l) return t
          o.size >= pm && o.size >= 2 * s.size
            ? ((r = (i = o.filter(function (t, e) {
                return void 0 !== t && a !== e
              }))
                .toKeyedSeq()
                .map(function (t) {
                  return t[0]
                })
                .flip()
                .toMap()),
              t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID))
            : ((r = s.remove(e)),
              (i = a === o.size - 1 ? o.pop() : o.set(a, void 0)))
        } else if (l) {
          if (n === o.get(a)[1]) return t
          ;(r = s), (i = o.set(a, [e, n]))
        } else (r = s.set(e, o.size)), (i = o.set(o.size, [e, n]))
        return t.__ownerID
          ? ((t.size = r.size),
            (t._map = r),
            (t._list = i),
            (t.__hash = void 0),
            t)
          : f_(r, i)
      }
      ;(p_.isOrderedMap = mg),
        (p_.prototype[qm] = !0),
        (p_.prototype.delete = p_.prototype.remove)
      var y_ = '@@__IMMUTABLE_STACK__@@'
      function __(t) {
        return Boolean(t && t[y_])
      }
      var v_ = (function (t) {
        function e(t) {
          return null == t ? C_() : __(t) ? t : C_().pushAll(t)
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.prototype.toString = function () {
            return this.__toString('Stack [', ']')
          }),
          (e.prototype.get = function (t, e) {
            var n = this._head
            for (t = vm(this, t); n && t--; ) n = n.next
            return n ? n.value : e
          }),
          (e.prototype.peek = function () {
            return this._head && this._head.value
          }),
          (e.prototype.push = function () {
            var t = arguments
            if (0 === arguments.length) return this
            for (
              var e = this.size + arguments.length,
                n = this._head,
                r = arguments.length - 1;
              r >= 0;
              r--
            )
              n = { value: t[r], next: n }
            return this.__ownerID
              ? ((this.size = e),
                (this._head = n),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : S_(e, n)
          }),
          (e.prototype.pushAll = function (e) {
            if (0 === (e = t(e)).size) return this
            if (0 === this.size && __(e)) return e
            ry(e.size)
            var n = this.size,
              r = this._head
            return (
              e.__iterate(function (t) {
                n++, (r = { value: t, next: r })
              }, !0),
              this.__ownerID
                ? ((this.size = n),
                  (this._head = r),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : S_(n, r)
            )
          }),
          (e.prototype.pop = function () {
            return this.slice(1)
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._head = void 0),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : C_()
          }),
          (e.prototype.slice = function (e, n) {
            if (wm(e, n, this.size)) return this
            var r = Sm(e, this.size)
            if (Cm(n, this.size) !== this.size)
              return t.prototype.slice.call(this, e, n)
            for (var i = this.size - r, s = this._head; r--; ) s = s.next
            return this.__ownerID
              ? ((this.size = i),
                (this._head = s),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : S_(i, s)
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? S_(this.size, this._head, t, this.__hash)
              : 0 === this.size
              ? C_()
              : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this
            if (e)
              return new sg(this.toArray()).__iterate(function (e, r) {
                return t(e, r, n)
              }, e)
            for (var r = 0, i = this._head; i && !1 !== t(i.value, r++, this); )
              i = i.next
            return r
          }),
          (e.prototype.__iterator = function (t, e) {
            if (e) return new sg(this.toArray()).__iterator(t, e)
            var n = 0,
              r = this._head
            return new Wm(function () {
              if (r) {
                var e = r.value
                return (r = r.next), Km(t, n++, e)
              }
              return { value: void 0, done: !0 }
            })
          }),
          e
        )
      })(Fm)
      v_.isStack = __
      var b_,
        w_ = v_.prototype
      function S_(t, e, n, r) {
        var i = Object.create(w_)
        return (
          (i.size = t),
          (i._head = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        )
      }
      function C_() {
        return b_ || (b_ = S_(0))
      }
      ;(w_[y_] = !0),
        (w_.shift = w_.pop),
        (w_.unshift = w_.push),
        (w_.unshiftAll = w_.pushAll),
        (w_.withMutations = ky),
        (w_.wasAltered = Iy),
        (w_.asImmutable = Ty),
        (w_['@@transducer/init'] = w_.asMutable = xy),
        (w_['@@transducer/step'] = function (t, e) {
          return t.unshift(e)
        }),
        (w_['@@transducer/result'] = function (t) {
          return t.asImmutable()
        })
      var E_ = '@@__IMMUTABLE_SET__@@'
      function k_(t) {
        return Boolean(t && t[E_])
      }
      function x_(t) {
        return k_(t) && Hm(t)
      }
      function T_(t, e) {
        if (t === e) return !0
        if (
          !Tm(e) ||
          (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
          (void 0 !== t.__hash &&
            void 0 !== e.__hash &&
            t.__hash !== e.__hash) ||
          Am(t) !== Am(e) ||
          Rm(t) !== Rm(e) ||
          Hm(t) !== Hm(e)
        )
          return !1
        if (0 === t.size && 0 === e.size) return !0
        var n = !Pm(t)
        if (Hm(t)) {
          var r = t.entries()
          return (
            e.every(function (t, e) {
              var i = r.next().value
              return i && yg(i[1], t) && (n || yg(i[0], e))
            }) && r.next().done
          )
        }
        var i = !1
        if (void 0 === t.size)
          if (void 0 === e.size)
            'function' == typeof t.cacheResult && t.cacheResult()
          else {
            i = !0
            var s = t
            ;(t = e), (e = s)
          }
        var o = !0,
          a = e.__iterate(function (e, r) {
            if (n ? !t.has(e) : i ? !yg(e, t.get(r, mm)) : !yg(t.get(r, mm), e))
              return (o = !1), !1
          })
        return o && t.size === a
      }
      function I_(t, e) {
        var n = function (n) {
          t.prototype[n] = e[n]
        }
        return (
          Object.keys(e).forEach(n),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(e).forEach(n),
          t
        )
      }
      function A_(t) {
        if (!t || 'object' != typeof t) return t
        if (!Tm(t)) {
          if (!sy(t)) return t
          t = eg(t)
        }
        if (Am(t)) {
          var e = {}
          return (
            t.__iterate(function (t, n) {
              e[n] = A_(t)
            }),
            e
          )
        }
        var n = []
        return (
          t.__iterate(function (t) {
            n.push(A_(t))
          }),
          n
        )
      }
      var O_ = (function (t) {
        function e(e) {
          return null == e
            ? F_()
            : k_(e) && !Hm(e)
            ? e
            : F_().withMutations(function (n) {
                var r = t(e)
                ry(r.size),
                  r.forEach(function (t) {
                    return n.add(t)
                  })
              })
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.fromKeys = function (t) {
            return this(Mm(t).keySeq())
          }),
          (e.intersect = function (t) {
            return (t = Dm(t).toArray()).length
              ? P_.intersect.apply(e(t.pop()), t)
              : F_()
          }),
          (e.union = function (t) {
            return (t = Dm(t).toArray()).length
              ? P_.union.apply(e(t.pop()), t)
              : F_()
          }),
          (e.prototype.toString = function () {
            return this.__toString('Set {', '}')
          }),
          (e.prototype.has = function (t) {
            return this._map.has(t)
          }),
          (e.prototype.add = function (t) {
            return D_(this, this._map.set(t, t))
          }),
          (e.prototype.remove = function (t) {
            return D_(this, this._map.remove(t))
          }),
          (e.prototype.clear = function () {
            return D_(this, this._map.clear())
          }),
          (e.prototype.map = function (t, e) {
            var n = this,
              r = [],
              i = []
            return (
              this.forEach(function (s) {
                var o = t.call(e, s, s, n)
                o !== s && (r.push(s), i.push(o))
              }),
              this.withMutations(function (t) {
                r.forEach(function (e) {
                  return t.remove(e)
                }),
                  i.forEach(function (e) {
                    return t.add(e)
                  })
              })
            )
          }),
          (e.prototype.union = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
              ? this.withMutations(function (n) {
                  for (var r = 0; r < e.length; r++)
                    t(e[r]).forEach(function (t) {
                      return n.add(t)
                    })
                })
              : this.constructor(e[0])
          }),
          (e.prototype.intersect = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            if (0 === e.length) return this
            e = e.map(function (e) {
              return t(e)
            })
            var r = []
            return (
              this.forEach(function (t) {
                e.every(function (e) {
                  return e.includes(t)
                }) || r.push(t)
              }),
              this.withMutations(function (t) {
                r.forEach(function (e) {
                  t.remove(e)
                })
              })
            )
          }),
          (e.prototype.subtract = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            if (0 === e.length) return this
            e = e.map(function (e) {
              return t(e)
            })
            var r = []
            return (
              this.forEach(function (t) {
                e.some(function (e) {
                  return e.includes(t)
                }) && r.push(t)
              }),
              this.withMutations(function (t) {
                r.forEach(function (e) {
                  t.remove(e)
                })
              })
            )
          }),
          (e.prototype.sort = function (t) {
            return X_($g(this, t))
          }),
          (e.prototype.sortBy = function (t, e) {
            return X_($g(this, e, t))
          }),
          (e.prototype.wasAltered = function () {
            return this._map.wasAltered()
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this
            return this._map.__iterate(function (e) {
              return t(e, e, n)
            }, e)
          }),
          (e.prototype.__iterator = function (t, e) {
            return this._map.__iterator(t, e)
          }),
          (e.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map.__ensureOwner(t)
            return t
              ? this.__make(e, t)
              : 0 === this.size
              ? this.__empty()
              : ((this.__ownerID = t), (this._map = e), this)
          }),
          e
        )
      })(Nm)
      O_.isSet = k_
      var R_,
        P_ = O_.prototype
      function D_(t, e) {
        return t.__ownerID
          ? ((t.size = e.size), (t._map = e), t)
          : e === t._map
          ? t
          : 0 === e.size
          ? t.__empty()
          : t.__make(e)
      }
      function M_(t, e) {
        var n = Object.create(P_)
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n
      }
      function F_() {
        return R_ || (R_ = M_(By()))
      }
      ;(P_[E_] = !0),
        (P_.delete = P_.remove),
        (P_.merge = P_.concat = P_.union),
        (P_.withMutations = ky),
        (P_.asImmutable = Ty),
        (P_['@@transducer/init'] = P_.asMutable = xy),
        (P_['@@transducer/step'] = function (t, e) {
          return t.add(e)
        }),
        (P_['@@transducer/result'] = function (t) {
          return t.asImmutable()
        }),
        (P_.__empty = F_),
        (P_.__make = M_)
      var N_,
        j_ = (function (t) {
          function e(t, n, r) {
            if (!(this instanceof e)) return new e(t, n, r)
            if (
              (ny(0 !== r, 'Cannot step a Range by 0'),
              (t = t || 0),
              void 0 === n && (n = 1 / 0),
              (r = void 0 === r ? 1 : Math.abs(r)),
              n < t && (r = -r),
              (this._start = t),
              (this._end = n),
              (this._step = r),
              (this.size = Math.max(0, Math.ceil((n - t) / r - 1) + 1)),
              0 === this.size)
            ) {
              if (N_) return N_
              N_ = this
            }
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.toString = function () {
              return 0 === this.size
                ? 'Range []'
                : 'Range [ ' +
                    this._start +
                    '...' +
                    this._end +
                    (1 !== this._step ? ' by ' + this._step : '') +
                    ' ]'
            }),
            (e.prototype.get = function (t, e) {
              return this.has(t) ? this._start + vm(this, t) * this._step : e
            }),
            (e.prototype.includes = function (t) {
              var e = (t - this._start) / this._step
              return e >= 0 && e < this.size && e === Math.floor(e)
            }),
            (e.prototype.slice = function (t, n) {
              return wm(t, n, this.size)
                ? this
                : ((t = Sm(t, this.size)),
                  (n = Cm(n, this.size)) <= t
                    ? new e(0, 0)
                    : new e(
                        this.get(t, this._end),
                        this.get(n, this._end),
                        this._step
                      ))
            }),
            (e.prototype.indexOf = function (t) {
              var e = t - this._start
              if (e % this._step == 0) {
                var n = e / this._step
                if (n >= 0 && n < this.size) return n
              }
              return -1
            }),
            (e.prototype.lastIndexOf = function (t) {
              return this.indexOf(t)
            }),
            (e.prototype.__iterate = function (t, e) {
              for (
                var n = this.size,
                  r = this._step,
                  i = e ? this._start + (n - 1) * r : this._start,
                  s = 0;
                s !== n && !1 !== t(i, e ? n - ++s : s++, this);

              )
                i += e ? -r : r
              return s
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this.size,
                r = this._step,
                i = e ? this._start + (n - 1) * r : this._start,
                s = 0
              return new Wm(function () {
                if (s === n) return { value: void 0, done: !0 }
                var o = i
                return (i += e ? -r : r), Km(t, e ? n - ++s : s++, o)
              })
            }),
            (e.prototype.equals = function (t) {
              return t instanceof e
                ? this._start === t._start &&
                    this._end === t._end &&
                    this._step === t._step
                : T_(this, t)
            }),
            e
          )
        })(rg)
      function z_(t, e, n) {
        for (var r = iy(e), i = 0; i !== r.length; )
          if ((t = ay(t, r[i++], mm)) === mm) return n
        return t
      }
      function L_(t, e) {
        return z_(this, t, e)
      }
      function U_() {
        ry(this.size)
        var t = {}
        return (
          this.__iterate(function (e, n) {
            t[n] = e
          }),
          t
        )
      }
      ;(Dm.isIterable = Tm),
        (Dm.isKeyed = Am),
        (Dm.isIndexed = Rm),
        (Dm.isAssociative = Pm),
        (Dm.isOrdered = Hm),
        (Dm.Iterator = Wm),
        I_(Dm, {
          toArray: function () {
            ry(this.size)
            var t = new Array(this.size || 0),
              e = Am(this),
              n = 0
            return (
              this.__iterate(function (r, i) {
                t[n++] = e ? [i, r] : r
              }),
              t
            )
          },
          toIndexedSeq: function () {
            return new Mg(this)
          },
          toJS: function () {
            return A_(this)
          },
          toKeyedSeq: function () {
            return new Dg(this, !0)
          },
          toMap: function () {
            return Ay(this.toKeyedSeq())
          },
          toObject: U_,
          toOrderedMap: function () {
            return p_(this.toKeyedSeq())
          },
          toOrderedSet: function () {
            return X_(Am(this) ? this.valueSeq() : this)
          },
          toSet: function () {
            return O_(Am(this) ? this.valueSeq() : this)
          },
          toSetSeq: function () {
            return new Fg(this)
          },
          toSeq: function () {
            return Rm(this)
              ? this.toIndexedSeq()
              : Am(this)
              ? this.toKeyedSeq()
              : this.toSetSeq()
          },
          toStack: function () {
            return v_(Am(this) ? this.valueSeq() : this)
          },
          toList: function () {
            return Jy(Am(this) ? this.valueSeq() : this)
          },
          toString: function () {
            return '[Collection]'
          },
          __toString: function (t, e) {
            return 0 === this.size
              ? t + e
              : t +
                  ' ' +
                  this.toSeq().map(this.__toStringMapper).join(', ') +
                  ' ' +
                  e
          },
          concat: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return Gg(this, Hg(this, t))
          },
          includes: function (t) {
            return this.some(function (e) {
              return yg(e, t)
            })
          },
          entries: function () {
            return this.__iterator(2)
          },
          every: function (t, e) {
            ry(this.size)
            var n = !0
            return (
              this.__iterate(function (r, i, s) {
                if (!t.call(e, r, i, s)) return (n = !1), !1
              }),
              n
            )
          },
          filter: function (t, e) {
            return Gg(this, Ug(this, t, e, !0))
          },
          find: function (t, e, n) {
            var r = this.findEntry(t, e)
            return r ? r[1] : n
          },
          forEach: function (t, e) {
            return ry(this.size), this.__iterate(e ? t.bind(e) : t)
          },
          join: function (t) {
            ry(this.size), (t = void 0 !== t ? '' + t : ',')
            var e = '',
              n = !0
            return (
              this.__iterate(function (r) {
                n ? (n = !1) : (e += t), (e += null != r ? r.toString() : '')
              }),
              e
            )
          },
          keys: function () {
            return this.__iterator(0)
          },
          map: function (t, e) {
            return Gg(this, zg(this, t, e))
          },
          reduce: function (t, e, n) {
            return V_(this, t, e, n, arguments.length < 2, !1)
          },
          reduceRight: function (t, e, n) {
            return V_(this, t, e, n, arguments.length < 2, !0)
          },
          reverse: function () {
            return Gg(this, Lg(this, !0))
          },
          slice: function (t, e) {
            return Gg(this, Bg(this, t, e, !0))
          },
          some: function (t, e) {
            return !this.every(K_(t), e)
          },
          sort: function (t) {
            return Gg(this, $g(this, t))
          },
          values: function () {
            return this.__iterator(1)
          },
          butLast: function () {
            return this.slice(0, -1)
          },
          isEmpty: function () {
            return void 0 !== this.size
              ? 0 === this.size
              : !this.some(function () {
                  return !0
                })
          },
          count: function (t, e) {
            return _m(t ? this.toSeq().filter(t, e) : this)
          },
          countBy: function (t, e) {
            return (function (t, e, n) {
              var r = Ay().asMutable()
              return (
                t.__iterate(function (i, s) {
                  r.update(e.call(n, i, s, t), 0, function (t) {
                    return t + 1
                  })
                }),
                r.asImmutable()
              )
            })(this, t, e)
          },
          equals: function (t) {
            return T_(this, t)
          },
          entrySeq: function () {
            var t = this
            if (t._cache) return new sg(t._cache)
            var e = t.toSeq().map(W_).toIndexedSeq()
            return (
              (e.fromEntrySeq = function () {
                return t.toSeq()
              }),
              e
            )
          },
          filterNot: function (t, e) {
            return this.filter(K_(t), e)
          },
          findEntry: function (t, e, n) {
            var r = n
            return (
              this.__iterate(function (n, i, s) {
                if (t.call(e, n, i, s)) return (r = [i, n]), !1
              }),
              r
            )
          },
          findKey: function (t, e) {
            var n = this.findEntry(t, e)
            return n && n[0]
          },
          findLast: function (t, e, n) {
            return this.toKeyedSeq().reverse().find(t, e, n)
          },
          findLastEntry: function (t, e, n) {
            return this.toKeyedSeq().reverse().findEntry(t, e, n)
          },
          findLastKey: function (t, e) {
            return this.toKeyedSeq().reverse().findKey(t, e)
          },
          first: function (t) {
            return this.find(bm, null, t)
          },
          flatMap: function (t, e) {
            return Gg(
              this,
              (function (t, e, n) {
                var r = Yg(t)
                return t
                  .toSeq()
                  .map(function (i, s) {
                    return r(e.call(n, i, s, t))
                  })
                  .flatten(!0)
              })(this, t, e)
            )
          },
          flatten: function (t) {
            return Gg(this, Vg(this, t, !0))
          },
          fromEntrySeq: function () {
            return new Ng(this)
          },
          get: function (t, e) {
            return this.find(
              function (e, n) {
                return yg(n, t)
              },
              void 0,
              e
            )
          },
          getIn: L_,
          groupBy: function (t, e) {
            return (function (t, e, n) {
              var r = Am(t),
                i = (Hm(t) ? p_() : Ay()).asMutable()
              t.__iterate(function (s, o) {
                i.update(e.call(n, s, o, t), function (t) {
                  return (t = t || []).push(r ? [o, s] : s), t
                })
              })
              var s = Yg(t)
              return i
                .map(function (e) {
                  return Gg(t, s(e))
                })
                .asImmutable()
            })(this, t, e)
          },
          has: function (t) {
            return this.get(t, mm) !== mm
          },
          hasIn: function (t) {
            return z_(this, t, mm) !== mm
          },
          isSubset: function (t) {
            return (
              (t = 'function' == typeof t.includes ? t : Dm(t)),
              this.every(function (e) {
                return t.includes(e)
              })
            )
          },
          isSuperset: function (t) {
            return (t = 'function' == typeof t.isSubset ? t : Dm(t)).isSubset(
              this
            )
          },
          keyOf: function (t) {
            return this.findKey(function (e) {
              return yg(e, t)
            })
          },
          keySeq: function () {
            return this.toSeq().map($_).toIndexedSeq()
          },
          last: function (t) {
            return this.toSeq().reverse().first(t)
          },
          lastKeyOf: function (t) {
            return this.toKeyedSeq().reverse().keyOf(t)
          },
          max: function (t) {
            return Wg(this, t)
          },
          maxBy: function (t, e) {
            return Wg(this, e, t)
          },
          min: function (t) {
            return Wg(this, t ? Q_(t) : Z_)
          },
          minBy: function (t, e) {
            return Wg(this, e ? Q_(e) : Z_, t)
          },
          rest: function () {
            return this.slice(1)
          },
          skip: function (t) {
            return 0 === t ? this : this.slice(Math.max(0, t))
          },
          skipLast: function (t) {
            return 0 === t ? this : this.slice(0, -Math.max(0, t))
          },
          skipWhile: function (t, e) {
            return Gg(this, qg(this, t, e, !0))
          },
          skipUntil: function (t, e) {
            return this.skipWhile(K_(t), e)
          },
          sortBy: function (t, e) {
            return Gg(this, $g(this, e, t))
          },
          take: function (t) {
            return this.slice(0, Math.max(0, t))
          },
          takeLast: function (t) {
            return this.slice(-Math.max(0, t))
          },
          takeWhile: function (t, e) {
            return Gg(
              this,
              (function (t, e, n) {
                var r = Xg(t)
                return (
                  (r.__iterateUncached = function (r, i) {
                    var s = this
                    if (i) return this.cacheResult().__iterate(r, i)
                    var o = 0
                    return (
                      t.__iterate(function (t, i, a) {
                        return e.call(n, t, i, a) && ++o && r(t, i, s)
                      }),
                      o
                    )
                  }),
                  (r.__iteratorUncached = function (r, i) {
                    var s = this
                    if (i) return this.cacheResult().__iterator(r, i)
                    var o = t.__iterator(2, i),
                      a = !0
                    return new Wm(function () {
                      if (!a) return { value: void 0, done: !0 }
                      var t = o.next()
                      if (t.done) return t
                      var i = t.value,
                        l = i[0],
                        c = i[1]
                      return e.call(n, c, l, s)
                        ? 2 === r
                          ? t
                          : Km(r, l, c, t)
                        : ((a = !1), { value: void 0, done: !0 })
                    })
                  }),
                  r
                )
              })(this, t, e)
            )
          },
          takeUntil: function (t, e) {
            return this.takeWhile(K_(t), e)
          },
          update: function (t) {
            return t(this)
          },
          valueSeq: function () {
            return this.toIndexedSeq()
          },
          hashCode: function () {
            return (
              this.__hash ||
              (this.__hash = (function (t) {
                if (t.size === 1 / 0) return 0
                var e = Hm(t),
                  n = Am(t),
                  r = e ? 1 : 0
                return (function (t, e) {
                  return (
                    (e = _g(e, 3432918353)),
                    (e = _g((e << 15) | (e >>> -15), 461845907)),
                    (e = _g((e << 13) | (e >>> -13), 5)),
                    (e = _g(
                      (e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16),
                      2246822507
                    )),
                    vg((e = _g(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16))
                  )
                })(
                  t.__iterate(
                    n
                      ? e
                        ? function (t, e) {
                            r = (31 * r + Y_(wg(t), wg(e))) | 0
                          }
                        : function (t, e) {
                            r = (r + Y_(wg(t), wg(e))) | 0
                          }
                      : e
                      ? function (t) {
                          r = (31 * r + wg(t)) | 0
                        }
                      : function (t) {
                          r = (r + wg(t)) | 0
                        }
                  ),
                  r
                )
              })(this))
            )
          },
        })
      var B_ = Dm.prototype
      ;(B_[xm] = !0),
        (B_[$m] = B_.values),
        (B_.toJSON = B_.toArray),
        (B_.__toStringMapper = oy),
        (B_.inspect = B_.toSource = function () {
          return this.toString()
        }),
        (B_.chain = B_.flatMap),
        (B_.contains = B_.includes),
        I_(Mm, {
          flip: function () {
            return Gg(this, jg(this))
          },
          mapEntries: function (t, e) {
            var n = this,
              r = 0
            return Gg(
              this,
              this.toSeq()
                .map(function (i, s) {
                  return t.call(e, [s, i], r++, n)
                })
                .fromEntrySeq()
            )
          },
          mapKeys: function (t, e) {
            var n = this
            return Gg(
              this,
              this.toSeq()
                .flip()
                .map(function (r, i) {
                  return t.call(e, r, i, n)
                })
                .flip()
            )
          },
        })
      var q_ = Mm.prototype
      ;(q_[Im] = !0),
        (q_[$m] = B_.entries),
        (q_.toJSON = U_),
        (q_.__toStringMapper = function (t, e) {
          return oy(e) + ': ' + oy(t)
        }),
        I_(Fm, {
          toKeyedSeq: function () {
            return new Dg(this, !1)
          },
          filter: function (t, e) {
            return Gg(this, Ug(this, t, e, !1))
          },
          findIndex: function (t, e) {
            var n = this.findEntry(t, e)
            return n ? n[0] : -1
          },
          indexOf: function (t) {
            var e = this.keyOf(t)
            return void 0 === e ? -1 : e
          },
          lastIndexOf: function (t) {
            var e = this.lastKeyOf(t)
            return void 0 === e ? -1 : e
          },
          reverse: function () {
            return Gg(this, Lg(this, !1))
          },
          slice: function (t, e) {
            return Gg(this, Bg(this, t, e, !1))
          },
          splice: function (t, e) {
            var n = arguments.length
            if (((e = Math.max(e || 0, 0)), 0 === n || (2 === n && !e)))
              return this
            t = Sm(t, t < 0 ? this.count() : this.size)
            var r = this.slice(0, t)
            return Gg(
              this,
              1 === n ? r : r.concat(ey(arguments, 2), this.slice(t + e))
            )
          },
          findLastIndex: function (t, e) {
            var n = this.findLastEntry(t, e)
            return n ? n[0] : -1
          },
          first: function (t) {
            return this.get(0, t)
          },
          flatten: function (t) {
            return Gg(this, Vg(this, t, !1))
          },
          get: function (t, e) {
            return (t = vm(this, t)) < 0 ||
              this.size === 1 / 0 ||
              (void 0 !== this.size && t > this.size)
              ? e
              : this.find(
                  function (e, n) {
                    return n === t
                  },
                  void 0,
                  e
                )
          },
          has: function (t) {
            return (
              (t = vm(this, t)) >= 0 &&
              (void 0 !== this.size
                ? this.size === 1 / 0 || t < this.size
                : -1 !== this.indexOf(t))
            )
          },
          interpose: function (t) {
            return Gg(
              this,
              (function (t, e) {
                var n = Xg(t)
                return (
                  (n.size = t.size && 2 * t.size - 1),
                  (n.__iterateUncached = function (n, r) {
                    var i = this,
                      s = 0
                    return (
                      t.__iterate(function (t) {
                        return (
                          (!s || !1 !== n(e, s++, i)) && !1 !== n(t, s++, i)
                        )
                      }, r),
                      s
                    )
                  }),
                  (n.__iteratorUncached = function (n, r) {
                    var i,
                      s = t.__iterator(1, r),
                      o = 0
                    return new Wm(function () {
                      return (!i || o % 2) && (i = s.next()).done
                        ? i
                        : o % 2
                        ? Km(n, o++, e)
                        : Km(n, o++, i.value, i)
                    })
                  }),
                  n
                )
              })(this, t)
            )
          },
          interleave: function () {
            var t = [this].concat(ey(arguments)),
              e = Qg(this.toSeq(), rg.of, t),
              n = e.flatten(!0)
            return e.size && (n.size = e.size * t.length), Gg(this, n)
          },
          keySeq: function () {
            return j_(0, this.size)
          },
          last: function (t) {
            return this.get(-1, t)
          },
          skipWhile: function (t, e) {
            return Gg(this, qg(this, t, e, !1))
          },
          zip: function () {
            var t = [this].concat(ey(arguments))
            return Gg(this, Qg(this, G_, t))
          },
          zipAll: function () {
            var t = [this].concat(ey(arguments))
            return Gg(this, Qg(this, G_, t, !0))
          },
          zipWith: function (t) {
            var e = ey(arguments)
            return (e[0] = this), Gg(this, Qg(this, t, e))
          },
        })
      var H_ = Fm.prototype
      function V_(t, e, n, r, i, s) {
        return (
          ry(t.size),
          t.__iterate(function (t, s, o) {
            i ? ((i = !1), (n = t)) : (n = e.call(r, n, t, s, o))
          }, s),
          n
        )
      }
      function $_(t, e) {
        return e
      }
      function W_(t, e) {
        return [e, t]
      }
      function K_(t) {
        return function () {
          return !t.apply(this, arguments)
        }
      }
      function Q_(t) {
        return function () {
          return -t.apply(this, arguments)
        }
      }
      function G_() {
        return ey(arguments)
      }
      function Z_(t, e) {
        return t < e ? 1 : t > e ? -1 : 0
      }
      function Y_(t, e) {
        return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0
      }
      ;(H_[Om] = !0),
        (H_[qm] = !0),
        I_(Nm, {
          get: function (t, e) {
            return this.has(t) ? t : e
          },
          includes: function (t) {
            return this.has(t)
          },
          keySeq: function () {
            return this.valueSeq()
          },
        }),
        (Nm.prototype.has = B_.includes),
        (Nm.prototype.contains = Nm.prototype.includes),
        I_(ng, Mm.prototype),
        I_(rg, Fm.prototype),
        I_(ig, Nm.prototype)
      var X_ = (function (t) {
        function e(t) {
          return null == t
            ? nv()
            : x_(t)
            ? t
            : nv().withMutations(function (e) {
                var n = Nm(t)
                ry(n.size),
                  n.forEach(function (t) {
                    return e.add(t)
                  })
              })
        }
        return (
          t && (e.__proto__ = t),
          ((e.prototype = Object.create(t && t.prototype)).constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.fromKeys = function (t) {
            return this(Mm(t).keySeq())
          }),
          (e.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}')
          }),
          e
        )
      })(O_)
      X_.isOrderedSet = x_
      var J_,
        tv = X_.prototype
      function ev(t, e) {
        var n = Object.create(tv)
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n
      }
      function nv() {
        return J_ || (J_ = ev(m_()))
      }
      ;(tv[qm] = !0),
        (tv.zip = H_.zip),
        (tv.zipWith = H_.zipWith),
        (tv.__empty = nv),
        (tv.__make = ev)
      var rv = function (t, e) {
        var n,
          r = function (s) {
            var o = this
            if (s instanceof r) return s
            if (!(this instanceof r)) return new r(s)
            if (!n) {
              n = !0
              var a = Object.keys(t),
                l = (i._indices = {})
              ;(i._name = e), (i._keys = a), (i._defaultValues = t)
              for (var c = 0; c < a.length; c++) {
                var u = a[c]
                ;(l[u] = c),
                  i[u]
                    ? 'object' == typeof console &&
                      console.warn &&
                      console.warn(
                        'Cannot define ' +
                          ov(this) +
                          ' with property "' +
                          u +
                          '" since that property name is part of the Record API.'
                      )
                    : lv(i, u)
              }
            }
            ;(this.__ownerID = void 0),
              (this._values = Jy().withMutations(function (t) {
                t.setSize(o._keys.length),
                  Mm(s).forEach(function (e, n) {
                    t.set(o._indices[n], e === o._defaultValues[n] ? void 0 : e)
                  })
              }))
          },
          i = (r.prototype = Object.create(iv))
        return (i.constructor = r), e && (r.displayName = e), r
      }
      ;(rv.prototype.toString = function () {
        for (
          var t, e = ov(this) + ' { ', n = this._keys, r = 0, i = n.length;
          r !== i;
          r++
        )
          e += (r ? ', ' : '') + (t = n[r]) + ': ' + oy(this.get(t))
        return e + ' }'
      }),
        (rv.prototype.equals = function (t) {
          return (
            this === t ||
            (t && this._keys === t._keys && av(this).equals(av(t)))
          )
        }),
        (rv.prototype.hashCode = function () {
          return av(this).hashCode()
        }),
        (rv.prototype.has = function (t) {
          return this._indices.hasOwnProperty(t)
        }),
        (rv.prototype.get = function (t, e) {
          if (!this.has(t)) return e
          var n = this._values.get(this._indices[t])
          return void 0 === n ? this._defaultValues[t] : n
        }),
        (rv.prototype.set = function (t, e) {
          if (this.has(t)) {
            var n = this._values.set(
              this._indices[t],
              e === this._defaultValues[t] ? void 0 : e
            )
            if (n !== this._values && !this.__ownerID) return sv(this, n)
          }
          return this
        }),
        (rv.prototype.remove = function (t) {
          return this.set(t)
        }),
        (rv.prototype.clear = function () {
          var t = this._values.clear().setSize(this._keys.length)
          return this.__ownerID ? this : sv(this, t)
        }),
        (rv.prototype.wasAltered = function () {
          return this._values.wasAltered()
        }),
        (rv.prototype.toSeq = function () {
          return av(this)
        }),
        (rv.prototype.toJS = function () {
          return A_(this)
        }),
        (rv.prototype.entries = function () {
          return this.__iterator(2)
        }),
        (rv.prototype.__iterator = function (t, e) {
          return av(this).__iterator(t, e)
        }),
        (rv.prototype.__iterate = function (t, e) {
          return av(this).__iterate(t, e)
        }),
        (rv.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this
          var e = this._values.__ensureOwner(t)
          return t
            ? sv(this, e, t)
            : ((this.__ownerID = t), (this._values = e), this)
        }),
        (rv.isRecord = Um),
        (rv.getDescriptiveName = ov)
      var iv = rv.prototype
      function sv(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t))
        return (r._values = e), (r.__ownerID = n), r
      }
      function ov(t) {
        return t.constructor.displayName || t.constructor.name || 'Record'
      }
      function av(t) {
        return ug(
          t._keys.map(function (e) {
            return [e, t.get(e)]
          })
        )
      }
      function lv(t, e) {
        try {
          Object.defineProperty(t, e, {
            get: function () {
              return this.get(e)
            },
            set: function (t) {
              ny(this.__ownerID, 'Cannot set on an immutable record.'),
                this.set(e, t)
            },
          })
        } catch (n) {}
      }
      ;(iv[Lm] = !0),
        (iv.delete = iv.remove),
        (iv.deleteIn = iv.removeIn = dy),
        (iv.getIn = L_),
        (iv.hasIn = B_.hasIn),
        (iv.merge = gy),
        (iv.mergeWith = yy),
        (iv.mergeIn = Cy),
        (iv.mergeDeep = wy),
        (iv.mergeDeepWith = Sy),
        (iv.mergeDeepIn = Ey),
        (iv.setIn = hy),
        (iv.update = fy),
        (iv.updateIn = my),
        (iv.withMutations = ky),
        (iv.asMutable = xy),
        (iv.asImmutable = Ty),
        (iv[$m] = iv.entries),
        (iv.toJSON = iv.toObject = B_.toObject),
        (iv.inspect = iv.toSource = function () {
          return this.toString()
        })
      var cv = (function (t) {
        return (
          (t.Disconnected = 'peer-disconnected'),
          (t.Connected = 'peer-connected'),
          (t.ConnectToRoom = 'connect-to-room'),
          (t.JoinedToRoom = 'joined-to-room'),
          (t.ScreenShared = 'screen-shared'),
          (t.Message = 'peer-message'),
          (t.SdpAnswer = 'sdp-answer'),
          (t.SdpOffer = 'sdp-offer'),
          (t.Ice = 'ice'),
          t
        )
      })({})
      class uv extends class {
        constructor(t, e) {
          ;(this.ctor = t), (this.data_ = e), (this.data = Ay(e))
        }
        toJS() {
          return this.data.toJS()
        }
        setValue(t, e) {
          return new this.ctor(this.data.set(t, e))
        }
      } {
        constructor(t) {
          super(uv, t)
        }
        get id() {
          return this.data.get('id')
        }
        get label() {
          return this.data.get('label')
        }
        get stream() {
          return this.data.get('stream')
        }
        setId(t) {
          return this.setValue('id', t)
        }
        setLabel(t) {
          return this.setValue('label', t)
        }
        setStream(t) {
          return this.setValue('stream', t)
        }
      }
      class hv {
        static offer(t, e, n) {
          return { type: cv.SdpOffer, by: t, to: e, sdp: n }
        }
        static answer(t, e, n) {
          return { type: cv.SdpAnswer, by: t, to: e, sdp: n }
        }
        static candidate(t, e, n) {
          return { type: cv.Ice, by: t, to: e, ice: n }
        }
        static set(t) {
          var { type: e, by: n, to: r } = t,
            i = (function (t, e) {
              var n = {}
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  e.indexOf(r) < 0 &&
                  (n[r] = t[r])
              if (
                null != t &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var i = 0
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                  e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
              }
              return n
            })(t, ['type', 'by', 'to'])
          return Object.assign({ type: e, by: n, to: r }, i)
        }
      }
      class dv {
        info(...t) {
          console.log('%c Info ' + new Date(), 'color: #448AFF'),
            console.log(t),
            console.log('---------------------------------------')
        }
        log(...t) {
          console.log('%c Log ' + new Date(), 'color: #448AFF'),
            console.log(t),
            console.log('---------------------------------------')
        }
        error(...t) {
          console.log('%c Error ' + new Date(), 'color: #F2FA8C'),
            console.log(t),
            console.log('---------------------------------------')
        }
        warn(...t) {
          console.log('%c Warn ' + new Date(), 'color: #E66B6E'),
            console.log(t),
            console.log('---------------------------------------')
        }
      }
      class pv extends C {
        constructor(t) {
          super(), (this._value = t)
        }
        get value() {
          return this.getValue()
        }
        _subscribe(t) {
          const e = super._subscribe(t)
          return e && !e.closed && t.next(this._value), e
        }
        getValue() {
          if (this.hasError) throw this.thrownError
          if (this.closed) throw new b()
          return this._value
        }
        next(t) {
          super.next((this._value = t))
        }
      }
      const fv = { uri: 'http://localhost:3000' },
        mv = {
          iceServers: [{ urls: 'stun:ubuntu.gui:3478' }],
          bundlePolicy: 'balanced',
          certificates: [],
          iceCandidatePoolSize: 10,
          iceTransportPolicy: 'all',
          peerIdentity: '',
        },
        gv = { peerIdentity: '', video: !0, audio: !0 },
        yv = new zn('peer-config')
      new zn('peer-rtc-configuration'), new zn('peer-media-constraints')
      let _v = (() => {
        class t {
          constructor() {
            this._clients = new pv(Jy([]))
          }
          get clients$() {
            return this._clients.asObservable()
          }
          getClient(t) {
            return this._clients.getValue().find((e) => e.id === t)
          }
          addClient(t) {
            this._clients.next(this._clients.getValue().push(t))
          }
          removeClient(t) {
            const e = this._clients.getValue(),
              n = e.findIndex((e) => e.id === t)
            this._clients.next(e.remove(n))
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      var vv = n('gFX4')
      let bv = (() => {
          class t {
            constructor(t, e) {
              ;(this.config = t),
                (this.clientStore = e),
                (this.peers = []),
                (this.active = new pv(!1)),
                (this.active$ = this.active.asObservable()),
                (this.logger = new dv()),
                (this.connectToRoom = () =>
                  dm(this, void 0, void 0, function* () {
                    const t = { height: 720, echoCancellation: !0 }
                    try {
                      const e = yield (function (t) {
                        return dm(this, void 0, void 0, function* () {
                          return navigator.mediaDevices.getUserMedia(t)
                        })
                      })({ video: t })
                      ;(this.stream = e), this.socket.emit(cv.ConnectToRoom)
                      const n = new uv({ id: this.socket.id, stream: e })
                      this.clientStore.addClient(n),
                        (this.peer = this.peers[this.peerId]),
                        console.log(this.peer),
                        this.active.next(!0)
                    } catch (e) {
                      this.logger.error("Can't get media stream", e)
                    }
                  })),
                (this.connectScreen = () =>
                  dm(this, void 0, void 0, function* () {
                    try {
                      const t = yield (function () {
                        return dm(this, void 0, void 0, function* () {
                          const t = { video: !0 },
                            e = navigator.mediaDevices
                          return 'getDisplayMedia' in navigator
                            ? navigator.getDisplayMedia(t)
                            : 'getDisplayMedia' in e
                            ? e.getDisplayMedia(t)
                            : e.getUserMedia({
                                video: { mediaSourcee: 'screen' },
                              })
                        })
                      })()
                      ;(this.stream = t), this.socket.emit(cv.ConnectToRoom)
                      const e = new uv({ id: this.socket.id, stream: t })
                      this.clientStore.addClient(e),
                        (this.peer = this.peers[this.peerId]),
                        console.log(this.peer),
                        this.active.next(!0)
                    } catch (t) {
                      this.logger.error("Can't get media stream", t)
                    }
                  }))
              const { socket: n } = this.config
              this.logger.info(n),
                (this.socket = vv.connect(n.uri)),
                this.socket.on('connect', () => {
                  this.logger.log('Socket connected. I am', this.socket.id),
                    (this.peerId = this.socket.id)
                }),
                this.socket.on('disconnect', ({ id: t }) => {
                  this.logger.log(
                    'Socket disconnected. I was',
                    t,
                    this.socket.id
                  )
                }),
                this.socket.on(cv.Connected, ({ id: t }) => this.makeOffer(t)),
                this.socket.on(cv.Disconnected, ({ id: t }) => this.close(t)),
                this.socket.on(cv.Message, (t) => this.handleMessage(t))
            }
            makeOffer(t) {
              return dm(this, void 0, void 0, function* () {
                try {
                  const e = this.getPeer(t),
                    n = yield e.createOffer({
                      offerToReceiveVideo: !0,
                      offerToReceiveAudio: !0,
                    })
                  return e.setLocalDescription(n).then(() => {
                    this.socket.emit(cv.Message, hv.offer(this.peerId, t, n))
                  })
                } catch (e) {
                  this.logger.error("Can't get media stream", e)
                }
              })
            }
            handleMessage(t) {
              return dm(this, void 0, void 0, function* () {
                const e = this.getPeer(t.by)
                switch ((this.logger.log(e), this.logger.log(t), t.type)) {
                  case cv.SdpOffer:
                    return this.handleOffer(e, t)
                  case cv.SdpAnswer:
                    return this.handleAnswer(e, t)
                  case cv.Ice:
                    return this.handleIce(e, t)
                }
              })
            }
            handleOffer(t, e) {
              return dm(this, void 0, void 0, function* () {
                try {
                  yield t.setRemoteDescription(
                    new RTCSessionDescription(e.sdp)
                  ),
                    this.logger.log('Setting remote description by offer')
                  const n = yield t.createAnswer()
                  return t.setLocalDescription(n).then(() => {
                    const t = hv.answer(this.peerId, e.by, n)
                    this.socket.emit(cv.Message, t)
                  })
                } catch (n) {
                  this.logger.error('Error on SDP-Offer:', n)
                }
              })
            }
            handleAnswer(t, e) {
              return dm(this, void 0, void 0, function* () {
                try {
                  yield t.setRemoteDescription(
                    new RTCSessionDescription(e.sdp)
                  ),
                    this.logger.log('Setting remote description by answer')
                } catch (n) {
                  this.logger.error('Error on SDP-Answer:', n)
                }
              })
            }
            handleIce(t, e) {
              return dm(this, void 0, void 0, function* () {
                e.ice &&
                  (this.logger.log('Adding ice candidate'),
                  t.addIceCandidate(e.ice))
              })
            }
            getPeer(t) {
              if (this.peers[t]) return this.peers[t]
              const e = new RTCPeerConnection()
              return (
                (this.peers[t] = e),
                t === this.peerId && (this.peer = e),
                e.addEventListener('icecandidate', ({ candidate: e }) => {
                  if (e) {
                    const n = hv.candidate(this.peerId, t, e)
                    this.socket.emit(cv.Message, n)
                  }
                }),
                e.addEventListener('iceconnectionstatechange', (t) => {
                  'failed' === e.iceConnectionState &&
                    console.log('peer.restartIce()')
                }),
                e.addEventListener('onnegotiationneeded', () => {
                  this.logger.log('Need negotiation:', t)
                }),
                e.addEventListener('onsignalingstatechange', () => {
                  this.logger.log(
                    'ICE signaling state changed to:',
                    e.signalingState,
                    'for client',
                    t
                  )
                }),
                window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
                  ? (e.addStream(this.stream),
                    (e.onaddstream = ({ stream: e }) => {
                      this.logger.log('Received new stream')
                      const n = new uv({ id: t, stream: e })
                      this.clientStore.addClient(n)
                    }))
                  : (e.addTrack(this.stream.getVideoTracks()[0], this.stream),
                    (e.ontrack = ({ streams: e }) => {
                      this.logger.log('Received new stream')
                      const n = new uv({ id: t, stream: e[0] })
                      this.clientStore.addClient(n)
                    })),
                e
              )
            }
            close(t) {
              const e = this.peers[t]
              e && e.close()
              const n = this.clientStore.getClient(t)
              n && n.stream.getTracks().forEach((t) => t.stop()),
                this.clientStore.removeClient(t)
            }
            hangup() {
              this.close(this.peerId),
                this.socket.emit(cv.Disconnected),
                (this.peer = null),
                (this.peerId = null),
                this.active.next(!1)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(yv), or(_v))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          )
        })(),
        wv = (() => {
          class t {
            static forRoot(e) {
              const n = (function ({ rtc: t, media: e, socket: n }) {
                return {
                  rtc: ((s = t), Object.assign(mv, s)),
                  media: ((i = e), Object.assign(gv, i)),
                  socket: ((r = n), Object.assign(fv, r)),
                }
                var r, i, s
              })(null != e ? e : { rtc: {}, media: {}, socket: null })
              return { ngModule: t, providers: [{ provide: yv, useValue: n }] }
            }
          }
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [bv, _v],
            })),
            t
          )
        })(),
        Sv = (() => {
          class t {
            addEvents(t, e) {
              for (let { element: n, name: r, dispose: i, callback: s } of e)
                i = t.listen(n, r, (t) => s(t))
            }
            removeEvents(t) {
              for (const e of t) e.dispose && e.dispose()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          )
        })(),
        Cv = (() => {
          class t {
            constructor() {
              ;(this.fnMap = [
                [
                  'requestFullscreen',
                  'exitFullscreen',
                  'fullscreenElement',
                  'fullscreenEnabled',
                  'fullscreenchange',
                  'fullscreenerror',
                ],
                [
                  'webkitRequestFullscreen',
                  'webkitExitFullscreen',
                  'webkitFullscreenElement',
                  'webkitFullscreenEnabled',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ],
                [
                  'webkitRequestFullScreen',
                  'webkitCancelFullScreen',
                  'webkitCurrentFullScreenElement',
                  'webkitCancelFullScreen',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ],
                [
                  'mozRequestFullScreen',
                  'mozCancelFullScreen',
                  'mozFullScreenElement',
                  'mozFullScreenEnabled',
                  'mozfullscreenchange',
                  'mozfullscreenerror',
                ],
                [
                  'msRequestFullscreen',
                  'msExitFullscreen',
                  'msFullscreenElement',
                  'msFullscreenEnabled',
                  'MSFullscreenChange',
                  'MSFullscreenError',
                ],
              ]),
                (this.keyboardAllowed =
                  'undefined' != typeof Element &&
                  'ALLOW_KEYBOARD_INPUT' in Element)
              const t = {}
              let e
              for (let n = 0; n < this.fnMap.length; n++)
                if (((e = this.fnMap[n]), e && e[1] in document)) {
                  for (n = 0; n < e.length; n++)
                    t[this.fnMap[0][n].toString()] = e[n]
                  this.fn = t
                }
            }
            request(t) {
              const e = this.fn.requestFullscreen
              ;(t = t || document.documentElement),
                /5\.1[.\d]* Safari/.test(navigator.userAgent)
                  ? t[e]()
                  : t[e](
                      this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {}
                    )
            }
            exit() {
              document[this.fn.exitFullscreen]()
            }
            toggle(t) {
              this.isFullscreen() ? this.exit() : this.request(t)
            }
            onChange(t) {
              document.addEventListener(this.fn.fullscreenchange, t, !1)
            }
            onError(t) {
              document.addEventListener(this.fn.fullscreenerror, t, !1)
            }
            isFullscreen() {
              return Boolean(document[this.fn.fullscreenElement])
            }
            isEnabled() {
              return Boolean(document[this.fn.fullscreenEnabled])
            }
            getElement() {
              return document[this.fn.fullscreenElement]
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })()
      const Ev = new Map([])
      function kv(t, e) {
        1 & t && (mo(0, 'i', 2), No(1, 'fullscreen'), go())
      }
      function xv(t, e) {
        1 & t && (mo(0, 'i', 2), No(1, 'fullscreen_exit'), go())
      }
      Ev.set(
        'start',
        '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#191919"/><path d="M109.88 206.157h-3.773c-20.25 0-39.39-.294-53.919-.74-27.266-.84-28.224-1.831-30.325-3.991-2.1-2.159-3.814-3.966-3.713-60.095 0-14.024.21-27.359.512-37.543.58-19.325 1.252-20.166 2.74-22.09 2.192-2.806 5.116-2.924 12.2-3.218 4.302-.177 10.419-.336 18.175-.462 14.368-.236 33.61-.37 54.272-.37s40.004.134 54.557.37c26.889.437 27.603.907 29.561 2.15 3.361 2.127 3.73 5.765 4.159 12.554.84 13.696.933 41.383.731 60.927-.471 45.181-1.412 45.962-4.201 48.273-2.051 1.68-3.412 2.823-30.56 3.63-13.495.386-31.283.605-50.416.605zm-77.345-15.125c22.208 2.202 126.181 2.235 148.061.059 1.185-16.998 1.681-81.505.261-99.15-22.83-1.193-125.064-1.193-148.28 0-1.328 18.032-1.361 82.345-.042 99.091z" fill="#191919"/><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#448AFF"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#191919"/><path d="M101.142 111.25c-23.838 0-48.55-.084-63.33-.336a568.517 568.517 0 01-9.176-.194c-3.983-.134-6.865-.226-8.848-3.361-.966-1.537-1.555-2.47-1.386-15.124.067-5.353.31-12.41 1.083-15.637a7.78 7.78 0 013.47-5.084c1.875-1.126 2.908-1.748 29.35-2.294 14.285-.294 33.418-.479 53.954-.52 20.225 0 39.45.066 54.104.302 26.149.412 27.501 1 29.056 1.68a7.35 7.35 0 014.134 4.941c.269.924 1.101 3.722 1.168 16.2.067 13.209-.546 14.142-1.58 15.679-2.033 3.034-4.319 3.092-10.444 3.244-3.101.075-7.563.151-13.343.21-10.756.117-25.485.201-42.61.252-8.041.033-16.755.042-25.602.042zM31.804 97.402c24.636.53 124.643.496 149.439-.042.076-4.36 0-10.394-.218-14.351-23.057-1.26-126.408-1.025-148.894.344-.252 3.89-.36 9.78-.327 14.05z" fill="#191919"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#fff"/><path d="M23.737 105.544s32.678-30.618 32.224-31.602c-.664-1.394-31.93-1.277-32.635-.36-.706.915-5.513 34.114.411 31.962zM185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#191919"/><path d="M25.678 74.279a6.596 6.596 0 01-5.47-2.345c-1.176-1.352-1.89-2.193-3.596-14.755-.723-5.302-1.521-12.326-1.235-15.628a7.78 7.78 0 012.68-5.546c1.68-1.395 2.63-2.16 28.762-6.512 14.066-2.344 33.03-5.277 53.398-8.268 20.032-2.941 39.089-5.596 53.667-7.478 25.964-3.361 27.376-2.966 29.014-2.521a7.408 7.408 0 014.857 4.31c1.084 2.336 2.277 7.504 3.546 15.36 2.033 12.604 1.554 13.637.756 15.318-1.563 3.294-3.697 3.672-10.024 4.781-3.159.555-7.739 1.32-13.612 2.269-10.991 1.773-25.973 4.117-43.324 6.772-30.316 4.664-69.413 10.461-88.42 13.007-3.36.454-5.966.782-7.755.983a29.404 29.404 0 01-3.244.253zm3.218-27.922c.32 3.89 1.084 9.705 1.748 13.915 24.494-3.135 123.618-18.1 148.129-22.343-.572-4.117-1.504-9.654-2.303-13.318-22.913 2.042-125.425 17.15-147.574 21.746z" fill="#191919"/><path d="M185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#fff"/><path d="M22.326 41.172s33.912 23.822 33.61 24.847c-.446 1.479-31.384 5.957-32.224 5.15-.84-.806-7.57-31.223-1.386-29.996zM54.306 32.72c-.152.84 36.794 28.88 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.61-29.291-1.882.277-30.677 4.596-30.828 5.445zM119.762 22.99c-.152.84 36.794 28.879 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.609-29.291-1.882.277-30.678 4.604-30.829 5.444zM59.28 105.679c-.269-.84 32.14-33.972 34.039-33.972h32.14c1.63 0-32.955 34.787-34.863 34.787-1.907 0-31.047 0-31.316-.815zM125.458 105.679c-.268-.84 32.14-33.972 34.039-33.972 1.899 0 28.871.547 28.871 2.177 0 .546-29.686 32.618-31.593 32.618-1.908 0-31.048-.008-31.317-.823z" fill="#191919"/><path d="M108.62 183.083c-12.705 0-25.35-.101-34.694-.269-16.99-.311-17.545-.672-18.536-1.319-1.63-1.05-2.05-2.647-2.378-8.957-.286-5.646-.37-14.562-.202-22.687.311-15.242 1.017-15.813 2.302-16.805 1.152-.924 1.244-1 17.646-1.168 8.873-.092 20.78-.143 33.518-.143 48.995 0 50.322.53 51.028.84 2.37.95 2.706 3.303 3.008 9.319.278 5.588.337 14.562.143 22.863-.092 4-.235 7.453-.411 9.974-.278 4.042-.505 6.025-2.446 7.033-.882.361-2.73 1.319-48.978 1.319z" fill="#fff"/><path d="M106.276 135.029c24.367 0 48.827.193 49.785.571 1.764.706 1.294 42.408 0 43.08-1.294.673-24.116 1.051-47.433 1.051-24.855 0-50.373-.37-51.415-1.051-1.622-1.05-1.386-41.962 0-43.08.479-.378 24.712-.571 49.063-.571zm0-6.722c-12.756 0-24.67.05-33.56.143-4.798.05-8.58.109-11.243.185-4.89.126-6.537.168-8.478 1.731-2.672 2.151-2.89 5.276-3.16 9.242-.176 2.588-.31 6.101-.394 10.176-.168 8.234-.084 17.25.21 22.964.277 5.445.479 9.369 3.907 11.587 1.857 1.202 2.353 1.521 20.309 1.857 9.36.177 22.031.269 34.761.269 12.285 0 23.67-.092 32.073-.252 16.091-.319 16.881-.731 18.485-1.546 3.698-1.924 3.966-5.739 4.244-9.781.176-2.571.319-6.066.42-10.083.193-8.402.134-17.435-.151-23.107-.11-2.142-.244-3.806-.412-5.041-.21-1.538-.756-5.63-4.706-7.201-1.42-.563-1.848-.74-18.544-.908-8.999-.092-21.006-.143-33.736-.143l-.025-.092z" fill="#191919"/><path d="M70.161 146.104c-4.41 0-4.621 6.512-.42 6.831 4.202.319 66.7.319 69.641 0 2.941-.319 4.411-6.302-.311-6.613-4.722-.311-63.448-.218-68.91-.218zM70.161 159.968c-4.41 0-4.621 6.512-.42 6.831 4.202.319 36.451.319 39.391 0 2.941-.319 4.412-6.302-.31-6.613-4.723-.311-33.199-.218-38.66-.218z" fill="#191919"/></svg>'
      ),
        Ev.set(
          'screen',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#191919"/><path d="M95.393 182.029c-64.615 0-72.17-8.192-74.782-10.974-5.277-5.722-9.067-18.989-11.243-39.433-1.908-17.872-2.059-38.047-.412-53.97 1.958-18.93 6.109-30.408 12.696-35.105L25.593 48l-3.899-5.478c3.034-2.16 9.915-5.277 34.619-7.403 15.637-1.344 35.224-2 55.154-1.823 20.536.201 39.778 1.26 54.247 2.94 24.368 2.908 30.308 7.025 32.93 10.68 6.352 8.848 8.092 34.03 8.562 48.248.773 23.46-.907 45.836-4.512 59.843-2.655 10.352-6.302 16.317-11.478 18.779-11.184 5.336-57.221 7.789-85.437 8.142-3.608.068-7.07.101-10.386.101zM29.492 53.504c-.202.143-4.865 3.714-7.125 25.535-1.555 15.04-1.404 34.165.411 51.155 2.219 20.83 5.882 29.753 7.756 31.736 3.36 2.983 26.485 7.26 76.186 6.571 43.122-.596 73.295-4.319 78.656-6.789.278-.227 3.294-2.933 5.739-16.805 2.521-14.091 3.42-34.241 2.471-53.903-1.042-21.56-3.941-33.207-5.731-36.047-3.941-3.083-28.51-7.965-78.824-8.234-47.357-.244-75.464 3.882-79.539 6.722v.059z" fill="#191919"/><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#448AFF"/><path d="M70.967 80.585c-5.529 6.277-5.882 48.97 1.252 55.247 3.52 3.1 54.054 2.874 56.549 0 2.496-2.874 2.672-16.679 5.529-13.814 2.857 2.865 11.764 10.587 14.452 12.554 2.689 1.966 5.882 2.772 6.958-3.588 1.067-6.101.714-46.458.176-50.769-.487-3.924-5.176-3.588-8.209-.714-3.034 2.874-11.957 10.587-14.091 12.554-2.135 1.966-1.966-9.865-4.991-12.377-3.025-2.513-52.987-4.353-57.625.907z" fill="#fff"/></svg>'
        ),
        Ev.set(
          'beta',
          '<svg width="217" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#191919"/><path d="M95.568 207.543a80.418 80.418 0 01-40.215-10.461c-19.528-11.276-33.753-28.317-40.063-47.97-4.714-14.671-9.865-43.568 8.663-71.573 14.494-21.914 34.114-33.745 61.725-37.207a109.426 109.426 0 0119.628-.47c10.982.47 16.024.697 23.788-8.403.563-1.1 1.168-4.646 1.538-6.78 1.025-5.975 1.991-11.621 6.251-14.487 3.974-2.663 8.848-1.025 13.083.941a80.352 80.352 0 0111.142 6.47c7.638 5.235 14.511 10.924 13.066 17.402-1.042 4.638-5.193 7.848-9.504 11.209-1.68 1.32-4.537 3.53-5.125 4.52-1.252 2.11-3.496 7.849 2.773 15.596 4.688 5.79 13.923 20.502 18.838 38.929 6.05 22.687 3.588 42.853-7.318 59.944-16.68 26.132-46.668 42.34-78.27 42.34zm1.68-154.464a78.074 78.074 0 00-9.848.588C63.95 56.608 47.337 66.557 35.17 84.95c-15.427 23.325-11.058 47.642-7.075 60.053 5.277 16.469 17.351 30.829 33.98 40.433a66.977 66.977 0 0033.493 8.663c27.064 0 52.717-13.831 66.943-36.131 8.797-13.763 10.696-30.325 5.655-49.239-4.496-16.88-13.293-30.25-16.301-33.938-11.923-14.713-5.974-27.384-3.891-30.913 1.883-3.16 5.202-5.739 8.403-8.243.84-.672 2.05-1.596 3.05-2.445a77.893 77.893 0 00-14.914-9.83 85.389 85.389 0 00-.647 3.562c-.841 5.041-1.681 9.84-4.403 13.057-12.1 14.285-23.107 13.814-34.753 13.31-2.328-.11-4.832-.21-7.504-.21h.042z" fill="#191919"/><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#fff"/><path d="M75.603 133.021L87.99 84.227c.798-3.075 4.2-4.705 7.797-1.563 3.596 3.143 33.409 34.451 33.409 34.451a4.071 4.071 0 01.003 5.645 4.078 4.078 0 01-1.751 1.077l-46.693 14.108a4.084 4.084 0 01-4.024-.946 4.078 4.078 0 01-1.127-3.978z" fill="#191919"/><path d="M157.074 109.032c-4.436-.647-11.763 3.756-15.402 3.957-3.638.202-12.368-3.361-16.107-3.361-3.739 0-11.167 3.286-13.654 3.311-2.488.025-9.134-1.622-13.251-1.622-4.117 0-8.99 1.681-13.075 1.63-4.083-.05-8.629-3.47-13.864-3.428-5.235.042-8.612 2.924-14.645 3.075-6.034.151-11.512-2.722-15.772-3.815-4.26-1.092-11.587-2.646-11.05 19.755.538 22.401 24.166 61.339 69.01 60.498 46.089-.916 67.641-43.693 67.641-60.271 0-16.578-5.386-19.082-9.831-19.729z" fill="#448AFF"/><path opacity=".2" d="M125.842 120.451c-2.185-3.294-8.554-8.831-8.554-8.831a31.172 31.172 0 01-5.453 1.176c-2.336.193-9.688-1.622-13.2-1.681-3.513-.058-11.428 2.051-13.713 1.731a41.804 41.804 0 01-6.16-1.68l-5.385 24.871c-.782 3.008 2.252 5.655 7.419 4.605 5.168-1.05 43.332-13.604 43.332-13.604 2.84-.865 3.899-3.302 1.714-6.587z" fill="#191919"/><path d="M67.436 87.487a6.504 6.504 0 00-8.2-1.78c-2.732 1.495-3.362 4.948-1.354 7.679 2.009 2.73 5.672 3.546 8.201 1.815a5.463 5.463 0 001.353-7.714zM144.614 90.975a4.59 4.59 0 00-5.781-1.278c-1.925 1.05-2.353 3.496-.95 5.42a4.295 4.295 0 005.781 1.277 3.854 3.854 0 001.615-2.51 3.861 3.861 0 00-.665-2.91z" fill="#448AFF"/><path d="M94.56 170.454a4.059 4.059 0 00-5.235-.176 3.17 3.17 0 00-.801 3.784c.2.418.492.787.851 1.081a3.797 3.797 0 005.235.176 3.396 3.396 0 00.998-2.443 3.405 3.405 0 00-1.049-2.422zM109.171 155.279a8.552 8.552 0 00-7.831 7.781c-.285 4.075 3.109 7.201 7.563 6.949 4.453-.252 7.957-3.756 7.831-7.781a7.184 7.184 0 00-2.318-5.067 7.179 7.179 0 00-5.245-1.882zM48.824 120.308a8.463 8.463 0 00-8.755 8.57 9.37 9.37 0 009.243 9.025h1.126c5.041.109 8.73-3.756 8.192-8.588a10.496 10.496 0 00-9.806-9.007z" fill="#fff"/><path d="M147.512 7.109c-3.361 3.302-3.134 11.956-5.243 18.662-2.109 6.705 9.319 14.082 13.268 11.47 3.949-2.614 14.41-10.202 16.662-14.285 2.252-4.084-21.359-19.141-24.687-15.847z" fill="#448AFF"/></svg>'
        ),
        Ev.set(
          'box',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0)"><path d="M109.029 119.581l-71.69-39.34a1.942 1.942 0 00-2.883 1.68c-.344 15.125-1.68 78.606.076 80.665 2.781 3.26 71.489 42.987 74.505 42.987 3.017 0 71.027-40.971 74.506-42.987 3.075-1.773.722-65.708.126-80.732a1.943 1.943 0 00-.992-1.61 1.947 1.947 0 00-1.89-.012l-71.758 39.349z" fill="#191919"/><path d="M109.029 212.27c-2.076 0-4.042 0-40.702-21.174-36.064-20.83-38.14-23.259-38.92-24.175-2-2.352-2.757-3.235-2.43-39.87.16-18.04.58-37.702.757-45.315a8.663 8.663 0 0112.84-7.394l68.463 37.568 68.515-37.593a8.668 8.668 0 0111.58 3.11 8.665 8.665 0 011.25 4.183c.303 7.638 1.034 27.367 1.32 45.5.159 10.285.142 18.486 0 24.46-.32 10.217-.841 14.595-4.756 16.864-.563.328-2.857 1.68-6.302 3.756-67.237 40.08-68.792 40.08-71.615 40.08zm-68.288-53.432c10.025 6.823 57.272 34.123 68.279 39.492 6.722-3.361 28.477-16.049 64.7-37.694l4.134-2.47c.84-7.697.647-34.249-.596-68.313l-64.994 35.619a6.726 6.726 0 01-6.47 0L41.002 89.92c-.74 35.073-.849 61.339-.26 68.918z" fill="#191919"/><path d="M34.523 76.98l74.506-39.735 74.505 39.735-74.505 40.879L34.523 76.98z" fill="#fff"/><path d="M109.365 34.556v80.614L34.859 74.283l74.506-39.727z" fill="#E6E6E6"/><path d="M109.029 119.581L34.523 78.695s-2 81.504 0 83.865c2.782 3.261 71.489 42.988 74.506 42.988 3.016 0 71.027-40.971 74.505-42.988 3.479-2.016 0-83.865 0-83.865l-74.505 40.886z" fill="#448AFF"/><path d="M109.029 119.581c-.84 1.731-1.681 86.387 0 85.967 5.335-1.311 71.69-39.433 74.783-43.483 1.327-1.756 2.008-82.287-.261-83.37-2.269-1.084-73.657 39.156-74.522 40.886z" fill="#2F72E2"/><path d="M183.097 74.048c3.857-2.126 24.754-13.721 23.653-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-20.569 11.848-23.636 13.864-3.159-2.193-25.897-17.847-28.485-16.402-2.78 1.513-70.069 39.056-72.48 40.45-2.218 1.32 22.51 13.747 26.334 15.663-3.571 1.806-24.948 12.26-23.628 13.015 1.319.757 70.43 41.543 74.127 41.946 2.378.26 21.679-11.965 24.216-13.646 2.84 1.882 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-21.78-12.974-26.183-15.259zm-75.396 41.055L33.969 74.09l73.598-39.257 74.203 39.14-74.069 41.13z" fill="#191919"/><path d="M135.808 138.168c-3.361 0-7.957-2.252-17.2-7.84a383.297 383.297 0 01-10.924-6.89 422.96 422.96 0 01-8.68 5.319c-11.267 6.63-13.73 7.268-16.25 6.999-2.151-.235-4.823-.521-75.094-41.828l-1.68-.983a6.823 6.823 0 01-3.412-6.125c.143-4.638 3.874-6.613 12.05-10.923 1.16-.614 2.37-1.244 3.57-1.858l-3.007-1.672C3.199 65.847-.07 63.427-.204 58.873a6.974 6.974 0 013.503-6.252c1.849-1.067 39.308-21.972 70.405-39.324l2.16-1.201c4.336-2.42 9.243-.269 20.872 7.008 4.042 2.52 8.075 5.21 10.974 7.175 20.922-13.612 22.51-13.124 25.518-12.2 2.874.84 76.295 39.416 76.892 39.77a6.876 6.876 0 013.395 5.915c-.042 4.562-2.958 6.251-13.789 12.545l-2.697 1.563 4.008 2.21c12.041 6.721 14.889 8.46 14.973 13.032a6.822 6.822 0 01-3.42 6.05l-66.506 38.13-6.722 3.849a6.983 6.983 0 01-3.554 1.025zm-15.335-22.485c6.344 3.982 11.764 7.133 14.595 8.469l4.378-2.52 57.053-32.712c-3.621-2.041-8.352-4.63-14.032-7.646l-61.994 34.409zM22.407 86.988c37.181 21.788 55.608 32.106 61.288 34.904 2.445-1.193 6.848-3.747 11.075-6.31l-61.423-34.14c-4.63 2.31-8.2 4.126-10.94 5.546zm25.62-12.772l59.657 33.173 59.936-33.257-60.062-31.678-59.532 31.762zM19.078 59.192c3.849 2.16 8.865 4.823 14.285 7.562l61.574-32.837a154.638 154.638 0 00-14.772-8.84 73376.054 73376.054 0 00-61.095 34.115h.008zM120.498 34.06l61.91 32.653a598.908 598.908 0 0011.209-6.378c-17.595-9.243-53.171-27.729-62.674-32.526-2.202 1.184-5.949 3.386-10.445 6.251z" fill="#191919"/><path d="M183.937 74.048c.068-1.092 23.914-13.721 22.813-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-23.14 13.805-23.636 13.864-.496.06-25.905-17.88-28.485-16.435-2.78 1.546-70.069 39.089-72.48 40.483-2.218 1.32 26.275 14.957 26.334 15.663.058.706-24.948 12.26-23.637 13.015 1.31.757 70.439 41.543 74.136 41.946 2.378.26 23.46-13.646 24.216-13.646.756 0 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-25.41-14.192-25.343-15.259zm-76.236 41.055c-.84-.067-73.707-40.45-73.724-40.988-.017-.538 73.102-39.18 73.598-39.256.496-.076 74.211 38.088 74.203 39.139-.008 1.05-73.228 41.147-74.077 41.08v.025zM61.033 157.805l-.37-29.981c0-1.873 1.723-2.268 3.118-.689l21.376 24.216c1.336 1.521 1.361 3.756.05 4.109l-21.006 5.722c-1.37.412-3.142-1.504-3.168-3.377z" fill="#fff"/><path d="M108.525 119.985c-.563 14.427-.841 65.262.512 85.563l-.512-85.563z" fill="#D32920"/><path d="M109.029 208.909a3.36 3.36 0 01-3.361-3.134c-1.378-20.738-1.067-71.607-.513-85.916a3.36 3.36 0 012.195-3.025 3.372 3.372 0 012.573.1 3.355 3.355 0 011.954 3.185c-.537 13.814-.84 65.061.504 85.211a3.347 3.347 0 01-1.865 3.239 3.364 3.364 0 01-1.269.34h-.218z" fill="#191919"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" transform="translate(.409 .105)" d="M0 0h215.105v215.105H0z"/></clipPath></defs></svg>'
        ),
        Ev.set(
          'running-out',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#191919"/><path d="M133.294 193.259a67.963 67.963 0 01-27.83-5.882c-28.468-12.822-40.466-29.829-41.416-58.683-.84-26.427 11.05-42.257 16.805-49.861a77.357 77.357 0 001.462-1.975 17.01 17.01 0 00-1.336-4.134 6.722 6.722 0 01-.453-1.21C77.71 61.078 83.18 56.39 88.264 53.508l16.721-9.537c7.68-4.387 15.352-2.025 20.024 6.15.085.14.161.287.227.437a5.509 5.509 0 001.604 1.9c.471 0 1.53-.068 2.471-.135 6.537-.48 20.166-1.48 38.173 7.915 18.006 9.394 31.56 24.645 36.887 41.744 4.991 16.032 2.882 33.484-6.109 50.466-15.15 28.61-40.903 40.811-64.968 40.811zM93.323 67.539c1.025 2.261 3.025 7.454 2.235 12.201-.404 2.437-1.84 4.344-4.017 7.235-5.167 6.865-14.788 19.645-14.074 41.332.773 23.527 9.856 36.215 33.501 46.869 23.527 10.588 57.894 4.025 75.363-28.972 7.377-13.939 9.116-27.459 5.15-40.172-4.268-13.696-15.292-26.048-30.249-33.812-14.646-7.63-24.871-6.882-30.98-6.428-1.438.14-2.883.188-4.327.143-7.756-.454-11.814-7.445-12.73-9.243a6.086 6.086 0 00-.967-1.302c-.22.083-.434.184-.638.302L94.869 65.23c-.606.334-1.183.719-1.723 1.151.03.39.088.778.177 1.16z" fill="#191919"/><path d="M63.704 55.894c-1.63 11.074-10.714 11.25-12.755 11.125-7.462-.462-12.52-4.697-7.008-8.025.361-.218.37-.395-.412-.411-54.76-1.084-46.836-13.21-.185-17.184.37 0 .404-.109.27-.327-11.823-19.326-11.252-31.3 11.284-8.403.16.16.37.126.42-.075 3.697-15.1 12.385 8.73 10.41 15.3a56.36 56.36 0 00-2.024 8z" fill="#448AFF"/><path d="M97.868 66.573c-1.268-12.435-7.965-21.535-21.35-14.191-14.394 7.923-24.628 1.983-22.074-3.504 2.991-6.437 5.714 3.083 18.1-3.731 28.828-15.847 39.264 24.157 29.853 25.115a4.129 4.129 0 01-4.056-2.147 4.126 4.126 0 01-.473-1.542z" fill="#191919"/><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#448AFF"/><path d="M118.001 97.033c-3.537 2.697 1.681 51.213 4.126 53.894 2.445 2.68 41.172-26.611 40.794-31.207-.378-4.597-41.383-25.385-44.92-22.687z" fill="#fff"/></svg>'
        ),
        Ev.set(
          'cutted',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M113.995 179.618c-1.614-18.293-15.276-18.965-17.369-21.713-2.092-2.747 1.48-121.257-1.041-122.324-2.521-1.067-19.973 4.773-20.688 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.445 8.192 5.193 17.645 18.217 19.191 11.494 1.311 23.611-9.663 22.561-21.174zm-10.083 0c-.177 4.831-5.933 10.52-11.218 10.268-7.327-.345-8.974-6.143-9.377-10.554-.403-4.411 4.873-11.091 10.335-10.68 5.882.404 10.47 4.622 10.26 10.932v.034z" fill="#191919"/><path d="M93.324 207.598a23.164 23.164 0 01-2.672-.151c-16.696-1.941-24.787-14.671-24.149-26.233.303-5.478 1.58-10.083 2.824-14.561a77.992 77.992 0 002.36-10.361c1.085-7.739-.47-17.645-2.52-22.989-1.756-4.68-2.605-18.343-1.025-69.825.563-18.486 10.083-27.3 15.771-30.93 2.017-1.294 9.016-5.353 14.285-3.151 4.403 1.857 4.588 6.251 4.814 11.822.143 3.496.219 8.403.244 15.04 0 12.184-.134 28.309-.302 43.913-.219 20.502-.479 45.424-.076 53.641 5.041 2.32 16.276 7.731 17.822 25.208.647 7.285-2.345 14.73-8.193 20.418a27.948 27.948 0 01-19.183 8.159zm-3.31-28.787c.411 4.201 1.605 4.269 2.991 4.327 1.386.059 4.058-2.52 4.201-3.814.118-3.361-2.79-3.916-4.041-4.008-.975.067-2.958 2.277-3.143 3.495h-.008zm-.328-133.853a18.503 18.503 0 00-1.823 1.68c-3.908 4.16-6.025 9.958-6.252 17.243-1.47 48.222-.706 61.834.202 64.758 2.52 6.806 4.663 18.99 3.193 29.51a71.197 71.197 0 01-1.462 7.361 16.094 16.094 0 017.764-3.496c-2.126-2.789-2.404-3.151-1.782-61.96.177-18.797.437-42.887.16-55.096z" fill="#191919"/><path d="M113.994 179.618c-1.613-18.293-15.275-18.965-17.368-21.713-2.092-2.747 1.48-121.257-1.042-122.324-2.52-1.067-19.972 4.773-20.687 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.446 8.192 5.193 17.645 18.216 19.191 11.495 1.311 23.612-9.663 22.561-21.174zm-10.083 0c-.176 4.831-5.932 10.52-11.217 10.268-7.327-.345-8.974-6.143-9.377-10.554-.404-4.411 4.873-11.091 10.335-10.68 5.882.404 10.469 4.622 10.259 10.932v.034z" fill="#fff"/><path d="M100.945 14.986c14.285.748 98.109 66.994 97.521 79.968-.589 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.294-62.549-95.394-76.732-1.101-14.184 40.013-70.406 55.145-69.616z" fill="#191919"/><path d="M142.303 168.215a11.57 11.57 0 01-2.622-.294c-10.083-2.319-40.257-24.191-54.818-35.433C40.086 97.911 39.338 88.29 39.094 85.123c-.512-6.193 3.546-16.117 11.965-29.435a207.174 207.174 0 0125.082-32.173c6.596-6.764 16.36-15.704 25.157-15.242 3.244.168 8.974 1.68 24.687 12.091 9.898 6.546 21.83 15.351 33.501 24.796 46.306 37.29 45.836 46.937 45.693 50.104-.622 13.613-30.636 53.037-48.55 66.641-5.604 4.26-10.234 6.31-14.326 6.31zM52.496 83.913c1.244 3.722 13.318 17.015 42.013 39.029 24.367 18.688 43.433 30.443 47.895 31.804 2.764-.504 12.856-7.369 28.182-26.384 14.914-18.486 20.435-30.25 21.09-33.308-1.63-4.083-14.091-18.191-42.097-40.61-26.711-21.375-44.962-32.139-49.012-32.77-1.495.102-7.562 3-18.645 15.294a198.059 198.059 0 00-21.006 28.266c-6.882 11.402-8.394 17.158-8.42 18.679z" fill="#191919"/><path d="M100.945 14.986c14.285.748 98.108 66.994 97.52 79.968-.588 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.293-62.549-95.394-76.732-1.1-14.184 40.013-70.406 55.146-69.616z" fill="#448AFF"/><path d="M115.591 63.343c-3.983 4.008-9.445 4.479-14.461 0-4.201-3.74-4.025-10.461 0-14.46 4.025-4 9.167-4.48 14.461 0 4.336 3.663 3.983 10.452 0 14.46zM168.468 109.515c-4.764 3.033-10.192 2.302-14.124-3.126-3.311-4.579-1.639-11.083 3.125-14.124 4.765-3.042 9.924-2.361 14.125 3.126 3.462 4.537 1.63 11.091-3.126 14.124zM87.88 87.912c-1.614.126-7.69 9.705-6.798 10.713.89 1.009 59.254 32.854 60.196 32.922.941.067 5.285-6.109 4.134-7.092-1.152-.983-56.197-36.652-57.533-36.543z" fill="#fff"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#191919"/><path d="M36.632 176.484c-7.445 0-15.368-3.361-21.502-11.487-4.63-6.108-6.201-14.662-4.201-22.88 1.932-7.932 6.831-14.284 13.444-17.427 15.855-7.562 26.207-.622 30.778 2.521 7.285-3.823 28.628-16.704 46.214-27.3 13.302-8.024 27.124-16.36 37.619-22.502 5.722-3.361 9.999-5.781 13.082-7.428 4.916-2.63 8.789-4.714 12.604-1.857 4.159 3.092 4.47 9.982 4.42 12.806-.109 5.394-2.109 19.132-18.334 30.249-18.746 12.814-45.374 29.157-59.659 34.736-2.52.992-5.041 1.807-7.402 2.588-5.621 1.832-10.562 3.445-14.864 6.865a78.083 78.083 0 00-7.73 7.293c-3.219 3.361-6.546 6.79-11.117 9.823a24.18 24.18 0 01-13.352 4zm1.496-32.065a3.888 3.888 0 00-2.1.681 5.192 5.192 0 00-1.631 2.941 3.126 3.126 0 00.067 1.966c.731 1.101 1.832 2.765 5.664 1 .949-.773 1.84-3.596 1.403-4.479-.538-.747-1.723-2.109-3.403-2.109zm15.805-3.041a16.08 16.08 0 01.933 8.461 71.14 71.14 0 015.562-4.991c6.184-4.916 12.722-7.067 19.049-9.142 2.319-.765 4.512-1.487 6.722-2.336 12.688-4.966 38.265-20.519 56.977-33.316 8.571-5.882 11.378-12.108 12.167-16.562-10.721 6.017-31.156 18.343-47.104 27.973-50.332 30.392-50.794 30.341-54.28 29.921l-.026-.008z" fill="#191919"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#fff"/></svg>'
        )
      let Tv = (() => {
        class t {
          constructor(t, e) {
            ;(this.fscreen = t),
              (this.evt = e),
              (this.canFullscreen = !1),
              (this.fullscreen = !1),
              (this.fullscreenChanged = new al()),
              (this.keyboard = !0)
          }
          ngOnInit() {
            this.fscreen.isEnabled() && (this.canFullscreen = !0),
              this.fscreen.onChange(() => {
                this.fscreen.isFullscreen()
                  ? this.onChangesFullscreen(!0)
                  : this.onChangesFullscreen(!1)
              })
          }
          setFullscreen(t) {
            this.canFullscreen &&
              this.fullscreen !== t &&
              this.toggleFullscreen()
          }
          toggleFullscreen() {
            ;(this.fullscreen = !this.fullscreen), this.updateFullscreen()
          }
          updateFullscreen() {
            this.fullscreen
              ? this.fscreen.request(this.player)
              : this.fscreen.exit(),
              this.fullscreenChanged.emit(this.fullscreen)
          }
          onChangesFullscreen(t) {
            ;(this.fullscreen = t), this.fullscreenChanged.emit(this.fullscreen)
          }
          onFullscreenKey(t) {
            this.keyboard && (this.toggleFullscreen(), t.preventDefault())
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(Cv), ho(Sv))
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['peer-fullscreen']],
            hostBindings: function (t, e) {
              1 & t &&
                wo(
                  'keyup.f',
                  function (t) {
                    return e.onFullscreenKey(t)
                  },
                  !1,
                  Zr
                )
            },
            inputs: {
              player: 'player',
              fullscreen: 'fullscreen',
              keyboard: 'keyboard',
            },
            outputs: { fullscreenChanged: 'fullscreenChanged' },
            decls: 3,
            vars: 3,
            consts: [
              ['mat-button', '', 'color', 'primary', 3, 'disabled', 'click'],
              ['class', 'material-icons', 4, 'ngIf'],
              [1, 'material-icons'],
            ],
            template: function (t, e) {
              1 & t &&
                (mo(0, 'button', 0),
                wo('click', function () {
                  return e.toggleFullscreen()
                }),
                co(1, kv, 2, 0, 'i', 1),
                co(2, xv, 2, 0, 'i', 1),
                go()),
                2 & t &&
                  (po('disabled', !e.canFullscreen),
                  zi(1),
                  po('ngIf', !e.fullscreen),
                  zi(1),
                  po('ngIf', e.fullscreen))
            },
            directives: [um, Gc],
            encapsulation: 2,
          })),
          t
        )
      })()
      function Iv(t, e) {
        1 & t && (mo(0, 'i', 2), No(1, 'play_arrow'), go())
      }
      function Av(t, e) {
        1 & t && (mo(0, 'i', 2), No(1, 'pause'), go())
      }
      let Ov = (() => {
        class t {
          constructor(t, e) {
            ;(this.renderer = t),
              (this.evt = e),
              (this.play = !1),
              (this.playChanged = new al()),
              (this.keyboard = !0)
          }
          ngAfterViewInit() {
            ;(this.events = [
              {
                element: this.video,
                name: 'play',
                callback: (t) => this.setVideoPlayback(!0),
                dispose: null,
              },
              {
                element: this.video,
                name: 'pause',
                callback: (t) => this.setVideoPlayback(!1),
                dispose: null,
              },
              {
                element: this.video,
                name: 'durationchange',
                callback: (t) => this.setVideoPlayback(!1),
                dispose: null,
              },
              {
                element: this.video,
                name: 'ended',
                callback: (t) => this.setVideoPlayback(!1),
                dispose: null,
              },
              {
                element: this.video,
                name: 'click',
                callback: (t) => this.toggleVideoPlayback(),
                dispose: null,
              },
            ]),
              this.evt.addEvents(this.renderer, this.events)
          }
          ngOnDestroy() {
            this.evt.removeEvents(this.events)
          }
          setVideoPlayback(t) {
            this.play !== t && this.toggleVideoPlayback()
          }
          toggleVideoPlayback() {
            ;(this.play = !this.play), this.updateVideoPlayback()
          }
          updateVideoPlayback() {
            this.play ? this.video.play() : this.video.pause(),
              this.playChanged.emit(this.play)
          }
          onPlayKey(t) {
            this.keyboard && (this.toggleVideoPlayback(), t.preventDefault())
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(ua), ho(Sv))
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['peer-play']],
            hostBindings: function (t, e) {
              1 & t &&
                wo(
                  'keyup.space',
                  function (t) {
                    return e.onPlayKey(t)
                  },
                  !1,
                  Zr
                )
            },
            inputs: { video: 'video', play: 'play', keyboard: 'keyboard' },
            outputs: { playChanged: 'playChanged' },
            decls: 3,
            vars: 2,
            consts: [
              ['mat-button', '', 'color', 'primary', 3, 'click'],
              ['class', 'material-icons', 4, 'ngIf'],
              [1, 'material-icons'],
            ],
            template: function (t, e) {
              1 & t &&
                (mo(0, 'button', 0),
                wo('click', function () {
                  return e.toggleVideoPlayback()
                }),
                co(1, Iv, 2, 0, 'i', 1),
                co(2, Av, 2, 0, 'i', 1),
                go()),
                2 & t && (zi(1), po('ngIf', !e.play), zi(1), po('ngIf', e.play))
            },
            directives: [um, Gc],
            encapsulation: 2,
          })),
          t
        )
      })()
      function Rv(t, e) {
        if ((1 & t && (mo(0, 'div', 1), No(1), go()), 2 & t)) {
          const t = Eo()
          zi(1), zo(' ', t.video.videoHeight, 'p ')
        }
      }
      let Pv = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['peer-quality']],
            inputs: { video: 'video' },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'quality', 4, 'ngIf'],
              [1, 'quality'],
            ],
            template: function (t, e) {
              1 & t && co(0, Rv, 2, 1, 'div', 0),
                2 & t && po('ngIf', e.video && e.video.videoHeight)
            },
            directives: [Gc],
            styles: [
              '.quality[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 12px;\n        padding-left: 12px;\n        padding-right: 12px;\n      }',
            ],
          })),
          t
        )
      })()
      const Dv = new zn('NgValueAccessor'),
        Mv = ['sliderWrapper'],
        Fv = Hu({ passive: !1 }),
        Nv = { provide: Dv, useExisting: it(() => Uv), multi: !0 }
      class jv {}
      class zv {
        constructor(t) {
          this._elementRef = t
        }
      }
      const Lv = uf(lf(af(zv), 'accent'))
      let Uv = (() => {
        class t extends Lv {
          constructor(t, e, n, r, i, s, o, a) {
            super(t),
              (this._focusMonitor = e),
              (this._changeDetectorRef = n),
              (this._dir = r),
              (this._ngZone = s),
              (this._animationMode = a),
              (this._invert = !1),
              (this._max = 100),
              (this._min = 0),
              (this._step = 1),
              (this._thumbLabel = !1),
              (this._tickInterval = 0),
              (this._value = null),
              (this._vertical = !1),
              (this.change = new al()),
              (this.input = new al()),
              (this.valueChange = new al()),
              (this.onTouched = () => {}),
              (this._percent = 0),
              (this._isSliding = !1),
              (this._isActive = !1),
              (this._tickIntervalPercent = 0),
              (this._sliderDimensions = null),
              (this._controlValueAccessorChangeFn = () => {}),
              (this._dirChangeSubscription = h.EMPTY),
              (this._pointerDown = (t) => {
                this.disabled ||
                  this._isSliding ||
                  (!Bv(t) && 0 !== t.button) ||
                  this._ngZone.run(() => {
                    const e = this.value,
                      n = qv(t)
                    ;(this._isSliding = !0),
                      (this._lastPointerEvent = t),
                      t.preventDefault(),
                      this._focusHostElement(),
                      this._onMouseenter(),
                      this._bindGlobalEvents(t),
                      this._focusHostElement(),
                      this._updateValueFromPosition(n),
                      (this._valueOnSlideStart = e),
                      e != this.value && this._emitInputEvent()
                  })
              }),
              (this._pointerMove = (t) => {
                if (this._isSliding) {
                  t.preventDefault()
                  const e = this.value
                  ;(this._lastPointerEvent = t),
                    this._updateValueFromPosition(qv(t)),
                    e != this.value && this._emitInputEvent()
                }
              }),
              (this._pointerUp = (t) => {
                this._isSliding &&
                  (t.preventDefault(),
                  this._removeGlobalEvents(),
                  (this._isSliding = !1),
                  this._valueOnSlideStart == this.value ||
                    this.disabled ||
                    this._emitChangeEvent(),
                  (this._valueOnSlideStart = this._lastPointerEvent = null))
              }),
              (this._windowBlur = () => {
                this._lastPointerEvent &&
                  this._pointerUp(this._lastPointerEvent)
              }),
              (this._document = o),
              (this.tabIndex = parseInt(i) || 0),
              s.runOutsideAngular(() => {
                const e = t.nativeElement
                e.addEventListener('mousedown', this._pointerDown, Fv),
                  e.addEventListener('touchstart', this._pointerDown, Fv)
              })
          }
          get invert() {
            return this._invert
          }
          set invert(t) {
            this._invert = ih(t)
          }
          get max() {
            return this._max
          }
          set max(t) {
            ;(this._max = sh(t, this._max)),
              (this._percent = this._calculatePercentage(this._value)),
              this._changeDetectorRef.markForCheck()
          }
          get min() {
            return this._min
          }
          set min(t) {
            ;(this._min = sh(t, this._min)),
              null === this._value && (this.value = this._min),
              (this._percent = this._calculatePercentage(this._value)),
              this._changeDetectorRef.markForCheck()
          }
          get step() {
            return this._step
          }
          set step(t) {
            ;(this._step = sh(t, this._step)),
              this._step % 1 != 0 &&
                (this._roundToDecimal = this._step
                  .toString()
                  .split('.')
                  .pop().length),
              this._changeDetectorRef.markForCheck()
          }
          get thumbLabel() {
            return this._thumbLabel
          }
          set thumbLabel(t) {
            this._thumbLabel = ih(t)
          }
          get tickInterval() {
            return this._tickInterval
          }
          set tickInterval(t) {
            this._tickInterval =
              'auto' === t
                ? 'auto'
                : 'number' == typeof t || 'string' == typeof t
                ? sh(t, this._tickInterval)
                : 0
          }
          get value() {
            return null === this._value && (this.value = this._min), this._value
          }
          set value(t) {
            if (t !== this._value) {
              let e = sh(t)
              this._roundToDecimal &&
                e !== this.min &&
                e !== this.max &&
                (e = parseFloat(e.toFixed(this._roundToDecimal))),
                (this._value = e),
                (this._percent = this._calculatePercentage(this._value)),
                this._changeDetectorRef.markForCheck()
            }
          }
          get vertical() {
            return this._vertical
          }
          set vertical(t) {
            this._vertical = ih(t)
          }
          get displayValue() {
            return this.displayWith
              ? this.displayWith(this.value)
              : this._roundToDecimal && this.value && this.value % 1 != 0
              ? this.value.toFixed(this._roundToDecimal)
              : this.value || 0
          }
          focus(t) {
            this._focusHostElement(t)
          }
          blur() {
            this._blurHostElement()
          }
          get percent() {
            return this._clamp(this._percent)
          }
          _shouldInvertAxis() {
            return this.vertical ? !this.invert : this.invert
          }
          _isMinValue() {
            return 0 === this.percent
          }
          _getThumbGap() {
            return this.disabled
              ? 7
              : this._isMinValue() && !this.thumbLabel
              ? this._isActive
                ? 10
                : 7
              : 0
          }
          _getTrackBackgroundStyles() {
            const t = this.vertical
              ? `1, ${1 - this.percent}, 1`
              : 1 - this.percent + ', 1, 1'
            return {
              transform: `translate${this.vertical ? 'Y' : 'X'}(${
                this._shouldInvertMouseCoords() ? '-' : ''
              }${this._getThumbGap()}px) scale3d(${t})`,
            }
          }
          _getTrackFillStyles() {
            const t = this.percent,
              e = this.vertical ? `1, ${t}, 1` : t + ', 1, 1'
            return {
              transform: `translate${this.vertical ? 'Y' : 'X'}(${
                this._shouldInvertMouseCoords() ? '' : '-'
              }${this._getThumbGap()}px) scale3d(${e})`,
              display: 0 === t ? 'none' : '',
            }
          }
          _getTicksContainerStyles() {
            return {
              transform: `translate${this.vertical ? 'Y' : 'X'}(${
                this.vertical || 'rtl' != this._getDirection() ? '-' : ''
              }${(this._tickIntervalPercent / 2) * 100}%)`,
            }
          }
          _getTicksStyles() {
            let t = 100 * this._tickIntervalPercent,
              e = {
                backgroundSize: this.vertical ? `2px ${t}%` : t + '% 2px',
                transform: `translateZ(0) translate${
                  this.vertical ? 'Y' : 'X'
                }(${this.vertical || 'rtl' != this._getDirection() ? '' : '-'}${
                  t / 2
                }%)${
                  this.vertical || 'rtl' != this._getDirection()
                    ? ''
                    : ' rotate(180deg)'
                }`,
              }
            if (this._isMinValue() && this._getThumbGap()) {
              const t = this._shouldInvertAxis()
              let n
              ;(n = this.vertical
                ? t
                  ? 'Bottom'
                  : 'Top'
                : t
                ? 'Right'
                : 'Left'),
                (e['padding' + n] = this._getThumbGap() + 'px')
            }
            return e
          }
          _getThumbContainerStyles() {
            const t = this._shouldInvertAxis()
            return {
              transform: `translate${this.vertical ? 'Y' : 'X'}(-${
                100 *
                (('rtl' != this._getDirection() || this.vertical ? t : !t)
                  ? this.percent
                  : 1 - this.percent)
              }%)`,
            }
          }
          _shouldInvertMouseCoords() {
            const t = this._shouldInvertAxis()
            return 'rtl' != this._getDirection() || this.vertical ? t : !t
          }
          _getDirection() {
            return this._dir && 'rtl' == this._dir.value ? 'rtl' : 'ltr'
          }
          ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, !0).subscribe((t) => {
              ;(this._isActive = !!t && 'keyboard' !== t),
                this._changeDetectorRef.detectChanges()
            }),
              this._dir &&
                (this._dirChangeSubscription = this._dir.change.subscribe(
                  () => {
                    this._changeDetectorRef.markForCheck()
                  }
                ))
          }
          ngOnDestroy() {
            const t = this._elementRef.nativeElement
            t.removeEventListener('mousedown', this._pointerDown, Fv),
              t.removeEventListener('touchstart', this._pointerDown, Fv),
              (this._lastPointerEvent = null),
              this._removeGlobalEvents(),
              this._focusMonitor.stopMonitoring(this._elementRef),
              this._dirChangeSubscription.unsubscribe()
          }
          _onMouseenter() {
            this.disabled ||
              ((this._sliderDimensions = this._getSliderDimensions()),
              this._updateTickIntervalPercent())
          }
          _onFocus() {
            ;(this._sliderDimensions = this._getSliderDimensions()),
              this._updateTickIntervalPercent()
          }
          _onBlur() {
            this.onTouched()
          }
          _onKeydown(t) {
            if (
              this.disabled ||
              (function (t, ...e) {
                return e.length
                  ? e.some((e) => t[e])
                  : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey
              })(t)
            )
              return
            const e = this.value
            switch (t.keyCode) {
              case 33:
                this._increment(10)
                break
              case 34:
                this._increment(-10)
                break
              case 35:
                this.value = this.max
                break
              case 36:
                this.value = this.min
                break
              case 37:
                this._increment('rtl' == this._getDirection() ? 1 : -1)
                break
              case 38:
                this._increment(1)
                break
              case 39:
                this._increment('rtl' == this._getDirection() ? -1 : 1)
                break
              case 40:
                this._increment(-1)
                break
              default:
                return
            }
            e != this.value &&
              (this._emitInputEvent(), this._emitChangeEvent()),
              (this._isSliding = !0),
              t.preventDefault()
          }
          _onKeyup() {
            this._isSliding = !1
          }
          _getWindow() {
            return this._document.defaultView || window
          }
          _bindGlobalEvents(t) {
            const e = this._document,
              n = Bv(t),
              r = n ? 'touchend' : 'mouseup'
            e.addEventListener(
              n ? 'touchmove' : 'mousemove',
              this._pointerMove,
              Fv
            ),
              e.addEventListener(r, this._pointerUp, Fv),
              n && e.addEventListener('touchcancel', this._pointerUp, Fv)
            const i = this._getWindow()
            void 0 !== i && i && i.addEventListener('blur', this._windowBlur)
          }
          _removeGlobalEvents() {
            const t = this._document
            t.removeEventListener('mousemove', this._pointerMove, Fv),
              t.removeEventListener('mouseup', this._pointerUp, Fv),
              t.removeEventListener('touchmove', this._pointerMove, Fv),
              t.removeEventListener('touchend', this._pointerUp, Fv),
              t.removeEventListener('touchcancel', this._pointerUp, Fv)
            const e = this._getWindow()
            void 0 !== e && e && e.removeEventListener('blur', this._windowBlur)
          }
          _increment(t) {
            this.value = this._clamp(
              (this.value || 0) + this.step * t,
              this.min,
              this.max
            )
          }
          _updateValueFromPosition(t) {
            if (!this._sliderDimensions) return
            let e = this._clamp(
              ((this.vertical ? t.y : t.x) -
                (this.vertical
                  ? this._sliderDimensions.top
                  : this._sliderDimensions.left)) /
                (this.vertical
                  ? this._sliderDimensions.height
                  : this._sliderDimensions.width)
            )
            if ((this._shouldInvertMouseCoords() && (e = 1 - e), 0 === e))
              this.value = this.min
            else if (1 === e) this.value = this.max
            else {
              const t = this._calculateValue(e),
                n =
                  Math.round((t - this.min) / this.step) * this.step + this.min
              this.value = this._clamp(n, this.min, this.max)
            }
          }
          _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value),
              this.valueChange.emit(this.value),
              this.change.emit(this._createChangeEvent())
          }
          _emitInputEvent() {
            this.input.emit(this._createChangeEvent())
          }
          _updateTickIntervalPercent() {
            if (this.tickInterval && this._sliderDimensions)
              if ('auto' == this.tickInterval) {
                let t = this.vertical
                    ? this._sliderDimensions.height
                    : this._sliderDimensions.width,
                  e = Math.ceil(30 / ((t * this.step) / (this.max - this.min)))
                this._tickIntervalPercent = (e * this.step) / t
              } else
                this._tickIntervalPercent =
                  (this.tickInterval * this.step) / (this.max - this.min)
          }
          _createChangeEvent(t = this.value) {
            let e = new jv()
            return (e.source = this), (e.value = t), e
          }
          _calculatePercentage(t) {
            return ((t || 0) - this.min) / (this.max - this.min)
          }
          _calculateValue(t) {
            return this.min + t * (this.max - this.min)
          }
          _clamp(t, e = 0, n = 1) {
            return Math.max(e, Math.min(t, n))
          }
          _getSliderDimensions() {
            return this._sliderWrapper
              ? this._sliderWrapper.nativeElement.getBoundingClientRect()
              : null
          }
          _focusHostElement(t) {
            this._elementRef.nativeElement.focus(t)
          }
          _blurHostElement() {
            this._elementRef.nativeElement.blur()
          }
          writeValue(t) {
            this.value = t
          }
          registerOnChange(t) {
            this._controlValueAccessorChangeFn = t
          }
          registerOnTouched(t) {
            this.onTouched = t
          }
          setDisabledState(t) {
            this.disabled = t
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              ho(la),
              ho(uh),
              ho(Ra),
              ho(yh, 8),
              Fn('tabindex'),
              ho($l),
              ho(Ec),
              ho(Jp, 8)
            )
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['mat-slider']],
            viewQuery: function (t, e) {
              if ((1 & t && bl(Mv, !0), 2 & t)) {
                let t
                vl((t = wl())) && (e._sliderWrapper = t.first)
              }
            },
            hostAttrs: [
              'role',
              'slider',
              1,
              'mat-slider',
              'mat-focus-indicator',
            ],
            hostVars: 29,
            hostBindings: function (t, e) {
              1 & t &&
                wo('focus', function () {
                  return e._onFocus()
                })('blur', function () {
                  return e._onBlur()
                })('keydown', function (t) {
                  return e._onKeydown(t)
                })('keyup', function () {
                  return e._onKeyup()
                })('mouseenter', function () {
                  return e._onMouseenter()
                })('selectstart', function (t) {
                  return t.preventDefault()
                }),
                2 & t &&
                  (Lo('tabIndex', e.tabIndex),
                  lo('aria-disabled', e.disabled)('aria-valuemax', e.max)(
                    'aria-valuemin',
                    e.min
                  )('aria-valuenow', e.value)(
                    'aria-valuetext',
                    null == e.valueText ? e.displayValue : e.valueText
                  )('aria-orientation', e.vertical ? 'vertical' : 'horizontal'),
                  Ro('mat-slider-disabled', e.disabled)(
                    'mat-slider-has-ticks',
                    e.tickInterval
                  )('mat-slider-horizontal', !e.vertical)(
                    'mat-slider-axis-inverted',
                    e._shouldInvertAxis()
                  )(
                    'mat-slider-invert-mouse-coords',
                    e._shouldInvertMouseCoords()
                  )('mat-slider-sliding', e._isSliding)(
                    'mat-slider-thumb-label-showing',
                    e.thumbLabel
                  )('mat-slider-vertical', e.vertical)(
                    'mat-slider-min-value',
                    e._isMinValue()
                  )(
                    'mat-slider-hide-last-tick',
                    e.disabled ||
                      (e._isMinValue() &&
                        e._getThumbGap() &&
                        e._shouldInvertAxis())
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === e._animationMode
                  ))
            },
            inputs: {
              disabled: 'disabled',
              color: 'color',
              tabIndex: 'tabIndex',
              invert: 'invert',
              max: 'max',
              min: 'min',
              value: 'value',
              step: 'step',
              thumbLabel: 'thumbLabel',
              tickInterval: 'tickInterval',
              vertical: 'vertical',
              displayWith: 'displayWith',
              valueText: 'valueText',
            },
            outputs: {
              change: 'change',
              input: 'input',
              valueChange: 'valueChange',
            },
            exportAs: ['matSlider'],
            features: [ea([Nv]), Ys],
            decls: 13,
            vars: 6,
            consts: [
              [1, 'mat-slider-wrapper'],
              ['sliderWrapper', ''],
              [1, 'mat-slider-track-wrapper'],
              [1, 'mat-slider-track-background', 3, 'ngStyle'],
              [1, 'mat-slider-track-fill', 3, 'ngStyle'],
              [1, 'mat-slider-ticks-container', 3, 'ngStyle'],
              [1, 'mat-slider-ticks', 3, 'ngStyle'],
              [1, 'mat-slider-thumb-container', 3, 'ngStyle'],
              [1, 'mat-slider-focus-ring'],
              [1, 'mat-slider-thumb'],
              [1, 'mat-slider-thumb-label'],
              [1, 'mat-slider-thumb-label-text'],
            ],
            template: function (t, e) {
              1 & t &&
                (mo(0, 'div', 0, 1),
                mo(2, 'div', 2),
                yo(3, 'div', 3),
                yo(4, 'div', 4),
                go(),
                mo(5, 'div', 5),
                yo(6, 'div', 6),
                go(),
                mo(7, 'div', 7),
                yo(8, 'div', 8),
                yo(9, 'div', 9),
                mo(10, 'div', 10),
                mo(11, 'span', 11),
                No(12),
                go(),
                go(),
                go(),
                go()),
                2 & t &&
                  (zi(3),
                  po('ngStyle', e._getTrackBackgroundStyles()),
                  zi(1),
                  po('ngStyle', e._getTrackFillStyles()),
                  zi(1),
                  po('ngStyle', e._getTicksContainerStyles()),
                  zi(1),
                  po('ngStyle', e._getTicksStyles()),
                  zi(1),
                  po('ngStyle', e._getThumbContainerStyles()),
                  zi(5),
                  jo(e.displayValue))
            },
            directives: [Xc],
            styles: [
              '.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n',
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        )
      })()
      function Bv(t) {
        return 't' === t.type[0]
      }
      function qv(t) {
        const e = Bv(t) ? t.touches[0] || t.changedTouches[0] : t
        return { x: e.clientX, y: e.clientY }
      }
      let Hv = (() => {
        class t {}
        return (
          (t.ɵmod = Bt({ type: t })),
          (t.ɵinj = at({
            factory: function (e) {
              return new (e || t)()
            },
            imports: [[iu, of], of],
          })),
          t
        )
      })()
      function Vv(t, e) {
        1 & t && (mo(0, 'i', 4), No(1, 'volume_off'), go())
      }
      function $v(t, e) {
        1 & t && (mo(0, 'i', 4), No(1, 'volume_mute'), go())
      }
      function Wv(t, e) {
        1 & t && (mo(0, 'i', 4), No(1, 'volume_down'), go())
      }
      function Kv(t, e) {
        1 & t && (mo(0, 'i', 4), No(1, 'volume_up'), go())
      }
      let Qv = (() => {
          class t {
            constructor(t) {
              ;(this.evt = t),
                (this.video = null),
                (this.color = 'primary'),
                (this.volume = 1),
                (this.volumeChanged = new al()),
                (this._muted = !1),
                (this.mutedChanged = new al()),
                (this.keyboard = !0)
            }
            get muted() {
              return this._muted
            }
            set muted(t) {
              ;(this._muted = t), this.video && (this.video.muted = this._muted)
            }
            setVolume(t) {
              ;(this.volume = t),
                (this.video.volume = this.volume),
                this.volumeChanged.emit(this.volume),
                this.volume > 0 && this.setMuted(!1)
            }
            setMuted(t) {
              this.muted !== t && this.toggleMuted()
            }
            toggleMuted() {
              ;(this.muted = !this.muted), this.updateMuted()
            }
            updateMuted() {
              ;(this.video.muted = this.muted),
                this.mutedChanged.emit(this.muted)
            }
            onMuteKey(t) {
              this.keyboard && (this.toggleMuted(), t.preventDefault())
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ho(Sv))
            }),
            (t.ɵcmp = jt({
              type: t,
              selectors: [['peer-volume']],
              hostBindings: function (t, e) {
                1 & t &&
                  wo(
                    'keyup.m',
                    function (t) {
                      return e.onMuteKey(t)
                    },
                    !1,
                    Zr
                  )
              },
              inputs: {
                video: 'video',
                color: 'color',
                volume: 'volume',
                muted: 'muted',
                keyboard: 'keyboard',
              },
              outputs: {
                volumeChanged: 'volumeChanged',
                mutedChanged: 'mutedChanged',
              },
              decls: 7,
              vars: 5,
              consts: [
                [1, 'volume-control'],
                ['mat-icon-button', '', 3, 'click'],
                ['class', 'material-icons', 4, 'ngIf'],
                [
                  'min',
                  '0',
                  'max',
                  '1',
                  'step',
                  '0.01',
                  'value',
                  '1',
                  1,
                  'volume-slider',
                  3,
                  'color',
                  'input',
                ],
                [1, 'material-icons'],
              ],
              template: function (t, e) {
                1 & t &&
                  (mo(0, 'div', 0),
                  mo(1, 'button', 1),
                  wo('click', function () {
                    return e.toggleMuted()
                  }),
                  co(2, Vv, 2, 0, 'i', 2),
                  co(3, $v, 2, 0, 'i', 2),
                  co(4, Wv, 2, 0, 'i', 2),
                  co(5, Kv, 2, 0, 'i', 2),
                  go(),
                  mo(6, 'mat-slider', 3),
                  wo('input', function (t) {
                    return e.setVolume(t.value)
                  }),
                  go(),
                  go()),
                  2 & t &&
                    (zi(2),
                    po('ngIf', e.muted || 0 === e.volume),
                    zi(1),
                    po('ngIf', !e.muted && e.volume > 0 && e.volume < 0.25),
                    zi(1),
                    po('ngIf', !e.muted && e.volume >= 0.25 && e.volume < 0.5),
                    zi(1),
                    po('ngIf', !e.muted && e.volume >= 0.5),
                    zi(1),
                    po('color', e.color))
              },
              directives: [um, Gc, Uv],
              styles: [
                '.volume-control[_ngcontent-%COMP%]{display:inline-block;min-width:120px}.volume-slider[_ngcontent-%COMP%]{margin-left:-15px} .mat-slider-thumb{border-color:transparent!important} .mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility 0s .2s,opacity .2s linear,width .2s linear}.volume-control[_ngcontent-%COMP%]:hover   .volume-slider[_ngcontent-%COMP%]{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}',
              ],
            })),
            t
          )
        })(),
        Gv = (() => {
          class t {}
          return (
            (t.ɵmod = Bt({ type: t })),
            (t.ɵinj = at({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [Cv],
              imports: [[iu, hm, Hv, vf]],
            })),
            t
          )
        })()
      const Zv = ['player'],
        Yv = ['video']
      function Xv(t, e) {
        if ((1 & t && (mo(0, 'div', 6), No(1), go()), 2 & t)) {
          const t = Eo()
          po('ngClass', t.getOverlayClass('visible', 'hidden')),
            zi(1),
            zo(' ', t.title, ' ')
        }
      }
      function Jv(t, e) {
        if (1 & t) {
          const t = _o()
          mo(0, 'peer-play', 13),
            wo('playChanged', function (e) {
              return Ae(t), (Eo(2).playing = e)
            }),
            go()
        }
        if (2 & t) {
          const t = Eo(2)
          po('video', uo(4))('keyboard', t.keyboard)
        }
      }
      function tb(t, e) {
        1 & t && yo(0, 'peer-quality', 14), 2 & t && (Eo(2), po('video', uo(4)))
      }
      function eb(t, e) {
        if (1 & t) {
          const t = _o()
          mo(0, 'peer-fullscreen', 15),
            wo('fullscreenChanged', function (e) {
              return Ae(t), (Eo(2).isFullscreen = e)
            }),
            go()
        }
        if (2 & t) {
          const t = Eo(2)
          po('player', uo(1))('keyboard', t.keyboard)
        }
      }
      function nb(t, e) {
        if (1 & t) {
          const t = _o()
          mo(0, 'div', 7),
            mo(1, 'div', 8),
            co(2, Jv, 1, 2, 'peer-play', 9),
            mo(3, 'peer-volume', 10),
            wo('mutedChanged', function (e) {
              Ae(t)
              const n = Eo()
              return (n.muted = e), n.mutedChange.emit(n.muted)
            }),
            go(),
            co(4, tb, 1, 1, 'peer-quality', 11),
            co(5, eb, 1, 2, 'peer-fullscreen', 12),
            go(),
            go()
        }
        if (2 & t) {
          const t = Eo(),
            e = uo(4)
          po('ngClass', t.getOverlayClass('visible', 'hidden')),
            zi(2),
            po('ngIf', !1 === t.stream),
            zi(1),
            po('muted', t.muted)('color', t.color)('video', e)(
              'keyboard',
              t.keyboard
            ),
            zi(1),
            po('ngIf', t.quality),
            zi(1),
            po('ngIf', t.fullscreen)
        }
      }
      const rb = [[['source']], [['track']]],
        ib = ['source', 'track']
      let sb = (() => {
        class t {
          constructor(t, e) {
            ;(this.renderer = t),
              (this.evt = e),
              (this.autoplay = !0),
              (this.preload = !0),
              (this.quality = !0),
              (this.fullscreen = !0),
              (this.stream = !0),
              (this.color = 'primary'),
              (this.keyboard = !1),
              (this.muted = !1),
              (this.mutedChange = new al()),
              (this.playing = !1),
              (this.isFullscreen = !1),
              (this.videoLoaded = !1),
              (this.isMouseMoving = !0),
              (this.isMouseMovingTimeout = 2e3)
          }
          ngAfterViewInit() {
            var t, e, n, r, i
            ;(this.events = [
              {
                element:
                  null === (t = this.video) || void 0 === t
                    ? void 0
                    : t.nativeElement,
                name: 'loadstart',
                callback: (t) => (this.videoLoaded = !1),
                dispose: () => {},
              },
              {
                element:
                  null === (e = this.video) || void 0 === e
                    ? void 0
                    : e.nativeElement,
                name: 'loadedmetadata',
                callback: (t) => this.evLoadedMetadata(t),
                dispose: () => {},
              },
              {
                element:
                  null === (n = this.video) || void 0 === n
                    ? void 0
                    : n.nativeElement,
                name: 'error',
                callback: (t) => console.error('Unhandled Video Error', t),
                dispose: () => {},
              },
              {
                element:
                  null === (r = this.video) || void 0 === r
                    ? void 0
                    : r.nativeElement,
                name: 'contextmenu',
                callback: (t) => t.preventDefault(),
                dispose: () => {},
              },
              {
                element:
                  null === (i = this.player) || void 0 === i
                    ? void 0
                    : i.nativeElement,
                name: 'mousemove',
                callback: (t) => this.evMouseMove(t),
                dispose: () => {},
              },
            ]),
              this.video &&
                this.video.nativeElement &&
                this.video.nativeElement.addEventListener(
                  'loadeddata',
                  () => (this.videoLoaded = !0)
                ),
              this.evt.addEvents(this.renderer, this.events)
          }
          evLoadedMetadata(t) {
            ;(this.videoWidth = this.video.nativeElement.videoWidth),
              (this.videoHeight = this.video.nativeElement.videoHeight),
              (this.videoLoaded = !0)
          }
          evMouseMove(t) {
            ;(this.isMouseMoving = !0),
              clearTimeout(this.isMouseMovingTimer),
              (this.isMouseMovingTimer = window.setTimeout(() => {
                this.isMouseMoving = !1
              }, this.isMouseMovingTimeout))
          }
          getOverlayClass(t, e) {
            return null === this.overlay
              ? !this.playing || this.isMouseMoving
                ? t
                : e
              : this.overlay
              ? t
              : e
          }
          load() {
            this.video &&
              this.video.nativeElement &&
              this.video.nativeElement.load()
          }
          getVideoTag() {
            var t
            return null !== (t = this.video && this.video.nativeElement) &&
              void 0 !== t
              ? t
              : this.video.nativeElement
          }
          ngOnDestroy() {
            ;(this.video.nativeElement.onloadeddata = null),
              this.evt.removeEvents(this.events),
              this.srcObject &&
                this.srcObject.getTracks().forEach((t) => t.stop())
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(ua), ho(Sv))
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['peer-player']],
            viewQuery: function (t, e) {
              if ((1 & t && (bl(Zv, !0), bl(Yv, !0)), 2 & t)) {
                let t
                vl((t = wl())) && (e.player = t.first),
                  vl((t = wl())) && (e.video = t.first)
              }
            },
            inputs: {
              src: 'src',
              srcObject: 'srcObject',
              title: 'title',
              autoplay: 'autoplay',
              preload: 'preload',
              quality: 'quality',
              fullscreen: 'fullscreen',
              stream: 'stream',
              poster: 'poster',
              color: 'color',
              keyboard: 'keyboard',
              overlay: 'overlay',
              muted: 'muted',
              videoWidth: 'videoWidth',
              videoHeight: 'videoHeight',
            },
            outputs: { mutedChange: 'mutedChange' },
            ngContentSelectors: ib,
            decls: 9,
            vars: 8,
            consts: [
              [1, 'videoplayer', 3, 'ngClass'],
              ['player', ''],
              ['class', 'header', 3, 'ngClass', 4, 'ngIf'],
              [1, 'video', 3, 'srcObject', 'preload'],
              ['video', ''],
              ['class', 'controls', 3, 'ngClass', 4, 'ngIf'],
              [1, 'header', 3, 'ngClass'],
              [1, 'controls', 3, 'ngClass'],
              [1, 'menu'],
              [3, 'video', 'keyboard', 'playChanged', 4, 'ngIf'],
              [3, 'muted', 'color', 'video', 'keyboard', 'mutedChanged'],
              [3, 'video', 4, 'ngIf'],
              [3, 'player', 'keyboard', 'fullscreenChanged', 4, 'ngIf'],
              [3, 'video', 'keyboard', 'playChanged'],
              [3, 'video'],
              [3, 'player', 'keyboard', 'fullscreenChanged'],
            ],
            template: function (t, e) {
              1 & t &&
                (xo(rb),
                mo(0, 'div', 0, 1),
                co(2, Xv, 2, 2, 'div', 2),
                mo(3, 'video', 3, 4),
                To(5),
                To(6, 1),
                No(7, ' This browser does not support HTML5 video. '),
                go(),
                co(8, nb, 6, 8, 'div', 5),
                go()),
                2 & t &&
                  (po('ngClass', e.getOverlayClass('show-mouse', 'hide-mouse')),
                  zi(2),
                  po('ngIf', e.title),
                  zi(1),
                  po('srcObject', e.srcObject ? e.srcObject : null)(
                    'preload',
                    e.preload ? 'auto' : 'metadata'
                  ),
                  lo(
                    'src',
                    e.src ? e.src : null,
                    Hr
                  )('autoplay', !!e.autoplay || null)(
                    'poster',
                    e.poster ? e.poster : null,
                    Hr
                  ),
                  zi(5),
                  po('ngIf', e.videoLoaded))
            },
            directives: [$c, Gc, Qv, Ov, Pv, Tv],
            styles: [
              '[_nghost-%COMP%]{display:block;max-height:100vh}.videoplayer[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(0deg,transparent,rgba(0,0,0,.65))}.video[_ngcontent-%COMP%]{display:block;width:100%;height:100%;z-index:0}.controls[_ngcontent-%COMP%]{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.65))}.controls[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;justify-content:space-around;height:48px}.visible[_ngcontent-%COMP%]{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transition:visibility 0s .5s,opacity .5s linear}.show-mouse[_ngcontent-%COMP%]{cursor:default}.hide-mouse[_ngcontent-%COMP%]{cursor:none}',
            ],
          })),
          t
        )
      })()
      function ob(t, e) {
        if (
          (1 & t &&
            ((function (t, e, n) {
              const r = Te(),
                i = Ie(),
                s = i.firstCreatePass
                  ? (function (t, e, n, r, i) {
                      const s = e.consts,
                        o = Se(s, undefined),
                        a = Qi(e, 20, 8, 'ng-container', o)
                      return (
                        null !== o && Ps(a, o, !0),
                        ls(e, n, a, Se(s, undefined)),
                        null !== e.queries && e.queries.elementStart(e, a),
                        a
                      )
                    })(0, i, r)
                  : i.data[20]
              Pe(s, !0)
              const o = (r[20] = r[11].createComment(''))
              yi(i, r, o, s), Qr(o, r), Jt(s) && (es(i, r, s), ts(i, s, r))
            })(),
            mo(1, 'figure'),
            yo(2, 'peer-player', 5),
            go(),
            (function () {
              let t = Oe()
              const e = Ie()
              De() ? Me() : ((t = t.parent), Pe(t, !1)),
                e.firstCreatePass &&
                  (Je(e, t), Yt(t) && e.queries.elementEnd(t))
            })()),
          2 & t)
        ) {
          const t = e.$implicit
          zi(2),
            po('autoplay', !0)('overlay', !0)('stream', !0)(
              'srcObject',
              null == t ? null : t.stream
            )
        }
      }
      function ab(t, e) {
        if (
          (1 & t &&
            (mo(0, 'section', 3),
            co(1, ob, 3, 4, 'ng-container', 4),
            sl(2, 'async'),
            go()),
          2 & t)
        ) {
          const t = Eo()
          zi(1), po('ngForOf', ol(2, 1, t.clients$))
        }
      }
      function lb(t, e) {
        if (1 & t) {
          const t = _o()
          mo(0, 'button', 6),
            wo('click', function () {
              return Ae(t), Eo().hangUp()
            }),
            mo(1, 'mat-icon'),
            No(2, 'close'),
            go(),
            go()
        }
      }
      function cb(t, e) {
        if (1 & t) {
          const t = _o()
          mo(0, 'div', 7),
            mo(1, 'button', 8),
            wo('click', function () {
              return Ae(t), Eo().connectToRoom()
            }),
            yo(2, 'img', 9),
            go(),
            mo(3, 'h2'),
            No(4, 'Chamada de v\xeddeo...'),
            go(),
            go()
        }
      }
      let ub = (() => {
        class t {
          constructor(t, e) {
            ;(this.clientStoreService = t),
              (this.connectionService = e),
              (this.title = 'docs-samples-peer-client'),
              (this.active$ = this.connectionService.active$),
              (this.clients$ = this.clientStoreService.clients$.pipe(
                F((t) => t.toArray()),
                Cf((t) => bf('E:', t))
              ))
          }
          connectToRoom() {
            this.connectionService.connectToRoom()
          }
          connectScreen() {
            this.connectionService.connectScreen()
          }
          hangUp() {
            this.connectionService.hangup()
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(ho(_v), ho(bv))
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['sample-root']],
            decls: 7,
            vars: 7,
            consts: [
              ['id', 'grid', 4, 'ngIf', 'ngIfElse'],
              ['type', 'button', 'mat-button', '', 3, 'click', 4, 'ngIf'],
              ['startTmpl', ''],
              ['id', 'grid'],
              [4, 'ngFor', 'ngForOf'],
              [
                'title',
                '@SeekPeer',
                3,
                'autoplay',
                'overlay',
                'stream',
                'srcObject',
              ],
              ['type', 'button', 'mat-button', '', 3, 'click'],
              [1, 'start'],
              [1, 'join-room', 3, 'click'],
              [
                'src',
                'assets/images/beta.svg',
                'alt',
                'Iniciar chamada de v\xeddeo',
              ],
            ],
            template: function (t, e) {
              if (
                (1 & t &&
                  (mo(0, 'main'),
                  co(1, ab, 3, 3, 'section', 0),
                  sl(2, 'async'),
                  co(3, lb, 3, 0, 'button', 1),
                  sl(4, 'async'),
                  co(5, cb, 5, 0, 'ng-template', null, 2, Cl),
                  go()),
                2 & t)
              ) {
                const t = uo(6)
                let n = null
                zi(1),
                  po(
                    'ngIf',
                    null == (n = ol(2, 3, e.clients$)) ? null : n.length
                  )('ngIfElse', t),
                  zi(2),
                  po('ngIf', ol(4, 5, e.active$))
              }
            },
            directives: [Gc, Kc, sb, um, rm],
            pipes: [ru],
            styles: [
              '[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]   main[_ngcontent-%COMP%], [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{align-items:center;justify-content:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   button.join-room[_ngcontent-%COMP%]{border:0;background-color:transparent;cursor:pointer}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(640px,1fr));row-gap:1rem;column-gap:1rem;transition:all 1s ease-in-out}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;max-width:inherit}',
            ],
          })),
          t
        )
      })()
      const hb = {}
      class db {
        constructor(t) {
          this.resultSelector = t
        }
        call(t, e) {
          return e.subscribe(new pb(t, this.resultSelector))
        }
      }
      class pb extends M {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = [])
        }
        _next(t) {
          this.values.push(hb), this.observables.push(t)
        }
        _complete() {
          const t = this.observables,
            e = t.length
          if (0 === e) this.destination.complete()
          else {
            ;(this.active = e), (this.toRespond = e)
            for (let n = 0; n < e; n++) {
              const e = t[n]
              this.add(D(this, e, e, n))
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete()
        }
        notifyNext(t, e, n, r, i) {
          const s = this.values,
            o = this.toRespond
              ? s[n] === hb
                ? --this.toRespond
                : this.toRespond
              : 0
          ;(s[n] = e),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(s)
                : this.destination.next(s.slice()))
        }
        _tryResultSelector(t) {
          let e
          try {
            e = this.resultSelector.apply(this, t)
          } catch (n) {
            return void this.destination.error(n)
          }
          this.destination.next(e)
        }
      }
      const fb = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = 'no elements in sequence'),
            (this.name = 'EmptyError'),
            this
          )
        }
        return (t.prototype = Object.create(Error.prototype)), t
      })()
      function mb(t) {
        return new _((e) => {
          let n
          try {
            n = t()
          } catch (r) {
            return void e.error(r)
          }
          return (n ? L(n) : th()).subscribe(e)
        })
      }
      function gb(t) {
        return function (e) {
          return 0 === t ? th() : e.lift(new yb(t))
        }
      }
      class yb {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Xu()
        }
        call(t, e) {
          return e.subscribe(new _b(t, this.total))
        }
      }
      class _b extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0)
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++
          e.length < n ? e.push(t) : (e[r % n] = t)
        }
        _complete() {
          const t = this.destination
          let e = this.count
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring
            for (let i = 0; i < n; i++) {
              const i = e++ % n
              t.next(r[i])
            }
          }
          t.complete()
        }
      }
      function vb(t = Sb) {
        return (e) => e.lift(new bb(t))
      }
      class bb {
        constructor(t) {
          this.errorFactory = t
        }
        call(t, e) {
          return e.subscribe(new wb(t, this.errorFactory))
        }
      }
      class wb extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1)
        }
        _next(t) {
          ;(this.hasValue = !0), this.destination.next(t)
        }
        _complete() {
          if (this.hasValue) return this.destination.complete()
          {
            let e
            try {
              e = this.errorFactory()
            } catch (t) {
              e = t
            }
            this.destination.error(e)
          }
        }
      }
      function Sb() {
        return new fb()
      }
      function Cb(t = null) {
        return (e) => e.lift(new Eb(t))
      }
      class Eb {
        constructor(t) {
          this.defaultValue = t
        }
        call(t, e) {
          return e.subscribe(new kb(t, this.defaultValue))
        }
      }
      class kb extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0)
        }
        _next(t) {
          ;(this.isEmpty = !1), this.destination.next(t)
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete()
        }
      }
      function xb(t, e) {
        return 'function' == typeof e
          ? (n) =>
              n.pipe(xb((n, r) => L(t(n, r)).pipe(F((t, i) => e(n, t, r, i)))))
          : (e) => e.lift(new Tb(t))
      }
      class Tb {
        constructor(t) {
          this.project = t
        }
        call(t, e) {
          return e.subscribe(new Ib(t, this.project))
        }
      }
      class Ib extends M {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0)
        }
        _next(t) {
          let e
          const n = this.index++
          try {
            e = this.project(t, n)
          } catch (r) {
            return void this.destination.error(r)
          }
          this._innerSub(e, t, n)
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription
          r && r.unsubscribe()
          const i = new x(this, e, n),
            s = this.destination
          s.add(i),
            (this.innerSubscription = D(this, t, void 0, void 0, i)),
            this.innerSubscription !== i && s.add(this.innerSubscription)
        }
        _complete() {
          const { innerSubscription: t } = this
          ;(t && !t.closed) || super._complete(), this.unsubscribe()
        }
        _unsubscribe() {
          this.innerSubscription = null
        }
        notifyComplete(t) {
          this.destination.remove(t),
            (this.innerSubscription = null),
            this.isStopped && super._complete()
        }
        notifyNext(t, e, n, r, i) {
          this.destination.next(e)
        }
      }
      class Ab {
        constructor(t, e, n = !1) {
          ;(this.accumulator = t), (this.seed = e), (this.hasSeed = n)
        }
        call(t, e) {
          return e.subscribe(
            new Ob(t, this.accumulator, this.seed, this.hasSeed)
          )
        }
      }
      class Ob extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0)
        }
        get seed() {
          return this._seed
        }
        set seed(t) {
          ;(this.hasSeed = !0), (this._seed = t)
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t)
          ;(this.seed = t), this.destination.next(t)
        }
        _tryNext(t) {
          const e = this.index++
          let n
          try {
            n = this.accumulator(this.seed, t, e)
          } catch (r) {
            this.destination.error(r)
          }
          ;(this.seed = n), this.destination.next(n)
        }
      }
      function Rb(t, e) {
        const n = arguments.length >= 2
        return (r) =>
          r.pipe(
            t ? Gu((e, n) => t(e, n, r)) : y,
            eh(1),
            n ? Cb(e) : vb(() => new fb())
          )
      }
      class Pb {
        constructor(t, e) {
          ;(this.id = t), (this.url = e)
        }
      }
      class Db extends Pb {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r)
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`
        }
      }
      class Mb extends Pb {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n)
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
        }
      }
      class Fb extends Pb {
        constructor(t, e, n) {
          super(t, e), (this.reason = n)
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
        }
      }
      class Nb extends Pb {
        constructor(t, e, n) {
          super(t, e), (this.error = n)
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
        }
      }
      class jb extends Pb {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r)
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
      }
      class zb extends Pb {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r)
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
      }
      class Lb extends Pb {
        constructor(t, e, n, r, i) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = i)
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
        }
      }
      class Ub extends Pb {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r)
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
      }
      class Bb extends Pb {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r)
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
      }
      class qb {
        constructor(t) {
          this.route = t
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`
        }
      }
      class Hb {
        constructor(t) {
          this.route = t
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`
        }
      }
      class Vb {
        constructor(t) {
          this.snapshot = t
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`
        }
      }
      class $b {
        constructor(t) {
          this.snapshot = t
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`
        }
      }
      class Wb {
        constructor(t) {
          this.snapshot = t
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`
        }
      }
      class Kb {
        constructor(t) {
          this.snapshot = t
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`
        }
      }
      class Qb {
        constructor(t, e, n) {
          ;(this.routerEvent = t), (this.position = e), (this.anchor = n)
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`
        }
      }
      const Gb = 'primary'
      class Zb {
        constructor(t) {
          this.params = t || {}
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t)
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t]
            return Array.isArray(e) ? e[0] : e
          }
          return null
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t]
            return Array.isArray(e) ? e : [e]
          }
          return []
        }
        get keys() {
          return Object.keys(this.params)
        }
      }
      function Yb(t) {
        return new Zb(t)
      }
      function Xb(t) {
        const e = Error('NavigationCancelingError: ' + t)
        return (e.ngNavigationCancelingError = !0), e
      }
      function Jb(t, e, n) {
        const r = n.path.split('/')
        if (r.length > t.length) return null
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null
        const i = {}
        for (let s = 0; s < r.length; s++) {
          const e = r[s],
            n = t[s]
          if (e.startsWith(':')) i[e.substring(1)] = n
          else if (e !== n.path) return null
        }
        return { consumed: t.slice(0, r.length), posParams: i }
      }
      function tw(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e)
        if (!n || !r || n.length != r.length) return !1
        let i
        for (let s = 0; s < n.length; s++)
          if (((i = n[s]), !ew(t[i], e[i]))) return !1
        return !0
      }
      function ew(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1
          const n = [...t].sort(),
            r = [...e].sort()
          return n.every((t, e) => r[e] === t)
        }
        return t === e
      }
      function nw(t) {
        return Array.prototype.concat.apply([], t)
      }
      function rw(t) {
        return t.length > 0 ? t[t.length - 1] : null
      }
      function iw(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
      }
      function sw(t) {
        return bo(t) ? t : vo(t) ? L(Promise.resolve(t)) : Vu(t)
      }
      function ow(t, e, n) {
        return n
          ? (function (t, e) {
              return tw(t, e)
            })(t.queryParams, e.queryParams) && aw(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => ew(t[n], e[n]))
              )
            })(t.queryParams, e.queryParams) && lw(t.root, e.root)
      }
      function aw(t, e) {
        if (!pw(t.segments, e.segments)) return !1
        if (t.numberOfChildren !== e.numberOfChildren) return !1
        for (const n in e.children) {
          if (!t.children[n]) return !1
          if (!aw(t.children[n], e.children[n])) return !1
        }
        return !0
      }
      function lw(t, e) {
        return cw(t, e, e.segments)
      }
      function cw(t, e, n) {
        if (t.segments.length > n.length)
          return !!pw(t.segments.slice(0, n.length), n) && !e.hasChildren()
        if (t.segments.length === n.length) {
          if (!pw(t.segments, n)) return !1
          for (const n in e.children) {
            if (!t.children[n]) return !1
            if (!lw(t.children[n], e.children[n])) return !1
          }
          return !0
        }
        {
          const r = n.slice(0, t.segments.length),
            i = n.slice(t.segments.length)
          return (
            !!pw(t.segments, r) &&
            !!t.children.primary &&
            cw(t.children.primary, e, i)
          )
        }
      }
      class uw {
        constructor(t, e, n) {
          ;(this.root = t), (this.queryParams = e), (this.fragment = n)
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Yb(this.queryParams)),
            this._queryParamMap
          )
        }
        toString() {
          return yw.serialize(this)
        }
      }
      class hw {
        constructor(t, e) {
          ;(this.segments = t),
            (this.children = e),
            (this.parent = null),
            iw(e, (t, e) => (t.parent = this))
        }
        hasChildren() {
          return this.numberOfChildren > 0
        }
        get numberOfChildren() {
          return Object.keys(this.children).length
        }
        toString() {
          return _w(this)
        }
      }
      class dw {
        constructor(t, e) {
          ;(this.path = t), (this.parameters = e)
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Yb(this.parameters)),
            this._parameterMap
          )
        }
        toString() {
          return kw(this)
        }
      }
      function pw(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path)
      }
      function fw(t, e) {
        let n = []
        return (
          iw(t.children, (t, r) => {
            r === Gb && (n = n.concat(e(t, r)))
          }),
          iw(t.children, (t, r) => {
            r !== Gb && (n = n.concat(e(t, r)))
          }),
          n
        )
      }
      class mw {}
      class gw {
        parse(t) {
          const e = new Ow(t)
          return new uw(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          )
        }
        serialize(t) {
          return `${'/' + vw(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e]
              return Array.isArray(n)
                ? n.map((t) => `${ww(e)}=${ww(t)}`).join('&')
                : `${ww(e)}=${ww(n)}`
            })
            return e.length ? '?' + e.join('&') : ''
          })(t.queryParams)}${
            'string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : ''
          }`
        }
      }
      const yw = new gw()
      function _w(t) {
        return t.segments.map((t) => kw(t)).join('/')
      }
      function vw(t, e) {
        if (!t.hasChildren()) return _w(t)
        if (e) {
          const e = t.children.primary ? vw(t.children.primary, !1) : '',
            n = []
          return (
            iw(t.children, (t, e) => {
              e !== Gb && n.push(`${e}:${vw(t, !1)}`)
            }),
            n.length > 0 ? `${e}(${n.join('//')})` : e
          )
        }
        {
          const e = fw(t, (e, n) =>
            n === Gb ? [vw(t.children.primary, !1)] : [`${n}:${vw(e, !1)}`]
          )
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${_w(t)}/${e[0]}`
            : `${_w(t)}/(${e.join('//')})`
        }
      }
      function bw(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
      }
      function ww(t) {
        return bw(t).replace(/%3B/gi, ';')
      }
      function Sw(t) {
        return bw(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&')
      }
      function Cw(t) {
        return decodeURIComponent(t)
      }
      function Ew(t) {
        return Cw(t.replace(/\+/g, '%20'))
      }
      function kw(t) {
        return `${Sw(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Sw(t)}=${Sw(e[t])}`)
            .join(''))
        }`
        var e
      }
      const xw = /^[^\/()?;=#]+/
      function Tw(t) {
        const e = t.match(xw)
        return e ? e[0] : ''
      }
      const Iw = /^[^=?&#]+/,
        Aw = /^[^?&#]+/
      class Ow {
        constructor(t) {
          ;(this.url = t), (this.remaining = t)
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new hw([], {})
              : new hw([], this.parseChildren())
          )
        }
        parseQueryParams() {
          const t = {}
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t)
            } while (this.consumeOptional('&'))
          return t
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null
        }
        parseChildren() {
          if ('' === this.remaining) return {}
          this.consumeOptional('/')
          const t = []
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment())
          let e = {}
          this.peekStartsWith('/(') &&
            (this.capture('/'), (e = this.parseParens(!0)))
          let n = {}
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new hw(t, e)),
            n
          )
        }
        parseSegment() {
          const t = Tw(this.remaining)
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            )
          return this.capture(t), new dw(Cw(t), this.parseMatrixParams())
        }
        parseMatrixParams() {
          const t = {}
          for (; this.consumeOptional(';'); ) this.parseParam(t)
          return t
        }
        parseParam(t) {
          const e = Tw(this.remaining)
          if (!e) return
          this.capture(e)
          let n = ''
          if (this.consumeOptional('=')) {
            const t = Tw(this.remaining)
            t && ((n = t), this.capture(n))
          }
          t[Cw(e)] = Cw(n)
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Iw)
            return e ? e[0] : ''
          })(this.remaining)
          if (!e) return
          this.capture(e)
          let n = ''
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(Aw)
              return e ? e[0] : ''
            })(this.remaining)
            t && ((n = t), this.capture(n))
          }
          const r = Ew(e),
            i = Ew(n)
          if (t.hasOwnProperty(r)) {
            let e = t[r]
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(i)
          } else t[r] = i
        }
        parseParens(t) {
          const e = {}
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = Tw(this.remaining),
              r = this.remaining[n.length]
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`)
            let i = void 0
            n.indexOf(':') > -1
              ? ((i = n.substr(0, n.indexOf(':'))),
                this.capture(i),
                this.capture(':'))
              : t && (i = Gb)
            const s = this.parseChildren()
            ;(e[i] = 1 === Object.keys(s).length ? s.primary : new hw([], s)),
              this.consumeOptional('//')
          }
          return e
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t)
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          )
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
        }
      }
      class Rw {
        constructor(t) {
          this._root = t
        }
        get root() {
          return this._root.value
        }
        parent(t) {
          const e = this.pathFromRoot(t)
          return e.length > 1 ? e[e.length - 2] : null
        }
        children(t) {
          const e = Pw(t, this._root)
          return e ? e.children.map((t) => t.value) : []
        }
        firstChild(t) {
          const e = Pw(t, this._root)
          return e && e.children.length > 0 ? e.children[0].value : null
        }
        siblings(t) {
          const e = Dw(t, this._root)
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t)
        }
        pathFromRoot(t) {
          return Dw(t, this._root).map((t) => t.value)
        }
      }
      function Pw(t, e) {
        if (t === e.value) return e
        for (const n of e.children) {
          const e = Pw(t, n)
          if (e) return e
        }
        return null
      }
      function Dw(t, e) {
        if (t === e.value) return [e]
        for (const n of e.children) {
          const r = Dw(t, n)
          if (r.length) return r.unshift(e), r
        }
        return []
      }
      class Mw {
        constructor(t, e) {
          ;(this.value = t), (this.children = e)
        }
        toString() {
          return `TreeNode(${this.value})`
        }
      }
      function Fw(t) {
        const e = {}
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e
      }
      class Nw extends Rw {
        constructor(t, e) {
          super(t), (this.snapshot = e), qw(this, t)
        }
        toString() {
          return this.snapshot.toString()
        }
      }
      function jw(t, e) {
        const n = (function (t, e) {
            const n = new Uw([], {}, {}, '', {}, Gb, e, null, t.root, -1, {})
            return new Bw('', new Mw(n, []))
          })(t, e),
          r = new pv([new dw('', {})]),
          i = new pv({}),
          s = new pv({}),
          o = new pv({}),
          a = new pv(''),
          l = new zw(r, i, o, a, s, Gb, e, n.root)
        return (l.snapshot = n.root), new Nw(new Mw(l, []), n)
      }
      class zw {
        constructor(t, e, n, r, i, s, o, a) {
          ;(this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = s),
            (this.component = o),
            (this._futureSnapshot = a)
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig
        }
        get root() {
          return this._routerState.root
        }
        get parent() {
          return this._routerState.parent(this)
        }
        get firstChild() {
          return this._routerState.firstChild(this)
        }
        get children() {
          return this._routerState.children(this)
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(F((t) => Yb(t)))),
            this._paramMap
          )
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(F((t) => Yb(t)))),
            this._queryParamMap
          )
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`
        }
      }
      function Lw(t, e = 'emptyOnly') {
        const n = t.pathFromRoot
        let r = 0
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1]
            if (t.routeConfig && '' === t.routeConfig.path) r--
            else {
              if (e.component) break
              r--
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          )
        })(n.slice(r))
      }
      class Uw {
        constructor(t, e, n, r, i, s, o, a, l, c, u) {
          ;(this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = s),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u)
        }
        get root() {
          return this._routerState.root
        }
        get parent() {
          return this._routerState.parent(this)
        }
        get firstChild() {
          return this._routerState.firstChild(this)
        }
        get children() {
          return this._routerState.children(this)
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Yb(this.params)), this._paramMap
          )
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Yb(this.queryParams)),
            this._queryParamMap
          )
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`
        }
      }
      class Bw extends Rw {
        constructor(t, e) {
          super(e), (this.url = t), qw(this, e)
        }
        toString() {
          return Hw(this._root)
        }
      }
      function qw(t, e) {
        ;(e.value._routerState = t), e.children.forEach((e) => qw(t, e))
      }
      function Hw(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(Hw).join(', ')} } ` : ''
        return `${t.value}${e}`
      }
      function Vw(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot
          ;(t.snapshot = n),
            tw(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            tw(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1
              for (let n = 0; n < t.length; ++n) if (!tw(t[n], e[n])) return !1
              return !0
            })(e.url, n.url) || t.url.next(n.url),
            tw(e.data, n.data) || t.data.next(n.data)
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data)
      }
      function $w(t, e) {
        var n, r
        return (
          tw(t.params, e.params) &&
          pw((n = t.url), (r = e.url)) &&
          n.every((t, e) => tw(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || $w(t.parent, e.parent))
        )
      }
      function Ww(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value
          r._futureSnapshot = e.value
          const i = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return Ww(t, e, r)
              return Ww(t, e)
            })
          })(t, e, n)
          return new Mw(r, i)
        }
        {
          const n = t.retrieve(e.value)
          if (n) {
            const t = n.route
            return Kw(e, t), t
          }
          {
            const n = new zw(
                new pv((r = e.value).url),
                new pv(r.params),
                new pv(r.queryParams),
                new pv(r.fragment),
                new pv(r.data),
                r.outlet,
                r.component,
                r
              ),
              i = e.children.map((e) => Ww(t, e))
            return new Mw(n, i)
          }
        }
        var r
      }
      function Kw(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot created from a different route'
          )
        if (t.children.length !== e.children.length)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot with a different number of children'
          )
        e.value._futureSnapshot = t.value
        for (let n = 0; n < t.children.length; ++n)
          Kw(t.children[n], e.children[n])
      }
      function Qw(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath
      }
      function Gw(t) {
        return 'object' == typeof t && null != t && t.outlets
      }
      function Zw(t, e, n, r, i) {
        let s = {}
        return (
          r &&
            iw(r, (t, e) => {
              s[e] = Array.isArray(t) ? t.map((t) => '' + t) : '' + t
            }),
          new uw(n.root === t ? e : Yw(n.root, t, e), s, i)
        )
      }
      function Yw(t, e, n) {
        const r = {}
        return (
          iw(t.children, (t, i) => {
            r[i] = t === e ? n : Yw(t, e, n)
          }),
          new hw(t.segments, r)
        )
      }
      class Xw {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && Qw(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters')
          const r = n.find(Gw)
          if (r && r !== rw(n))
            throw new Error('{outlets:{}} has to be the last command')
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          )
        }
      }
      class Jw {
        constructor(t, e, n) {
          ;(this.segmentGroup = t), (this.processChildren = e), (this.index = n)
        }
      }
      function tS(t, e, n) {
        if (
          (t || (t = new hw([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return eS(t, e, n)
        const r = (function (t, e, n) {
            let r = 0,
              i = e
            const s = { match: !1, pathIndex: 0, commandIndex: 0 }
            for (; i < t.segments.length; ) {
              if (r >= n.length) return s
              const e = t.segments[i],
                o = n[r]
              if (Gw(o)) break
              const a = '' + o,
                l = r < n.length - 1 ? n[r + 1] : null
              if (i > 0 && void 0 === a) break
              if (a && l && 'object' == typeof l && void 0 === l.outlets) {
                if (!sS(a, l, e)) return s
                r += 2
              } else {
                if (!sS(a, {}, e)) return s
                r++
              }
              i++
            }
            return { match: !0, pathIndex: i, commandIndex: r }
          })(t, e, n),
          i = n.slice(r.commandIndex)
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new hw(t.segments.slice(0, r.pathIndex), {})
          return (
            (e.children.primary = new hw(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            eS(e, 0, i)
          )
        }
        return r.match && 0 === i.length
          ? new hw(t.segments, {})
          : r.match && !t.hasChildren()
          ? nS(t, e, n)
          : r.match
          ? eS(t, 0, i)
          : nS(t, e, n)
      }
      function eS(t, e, n) {
        if (0 === n.length) return new hw(t.segments, {})
        {
          const r = (function (t) {
              return Gw(t[0]) ? t[0].outlets : { [Gb]: t }
            })(n),
            i = {}
          return (
            iw(r, (n, r) => {
              'string' == typeof n && (n = [n]),
                null !== n && (i[r] = tS(t.children[r], e, n))
            }),
            iw(t.children, (t, e) => {
              void 0 === r[e] && (i[e] = t)
            }),
            new hw(t.segments, i)
          )
        }
      }
      function nS(t, e, n) {
        const r = t.segments.slice(0, e)
        let i = 0
        for (; i < n.length; ) {
          const s = n[i]
          if (Gw(s)) {
            const t = rS(s.outlets)
            return new hw(r, t)
          }
          if (0 === i && Qw(n[0])) {
            r.push(new dw(t.segments[e].path, n[0])), i++
            continue
          }
          const o = Gw(s) ? s.outlets.primary : '' + s,
            a = i < n.length - 1 ? n[i + 1] : null
          o && a && Qw(a)
            ? (r.push(new dw(o, iS(a))), (i += 2))
            : (r.push(new dw(o, {})), i++)
        }
        return new hw(r, {})
      }
      function rS(t) {
        const e = {}
        return (
          iw(t, (t, n) => {
            'string' == typeof t && (t = [t]),
              null !== t && (e[n] = nS(new hw([], {}), 0, t))
          }),
          e
        )
      }
      function iS(t) {
        const e = {}
        return iw(t, (t, n) => (e[n] = '' + t)), e
      }
      function sS(t, e, n) {
        return t == n.path && tw(e, n.parameters)
      }
      class oS {
        constructor(t, e, n, r) {
          ;(this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r)
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null
          this.deactivateChildRoutes(e, n, t),
            Vw(this.futureState.root),
            this.activateChildRoutes(e, n, t)
        }
        deactivateChildRoutes(t, e, n) {
          const r = Fw(e)
          t.children.forEach((t) => {
            const e = t.value.outlet
            this.deactivateRoutes(t, r[e], n), delete r[e]
          }),
            iw(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n)
            })
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            i = e ? e.value : null
          if (r === i)
            if (r.component) {
              const i = n.getContext(r.outlet)
              i && this.deactivateChildRoutes(t, e, i.children)
            } else this.deactivateChildRoutes(t, e, n)
          else i && this.deactivateRouteAndItsChildren(e, n)
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e)
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet)
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated()
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            })
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet)
          if (n) {
            const r = Fw(t),
              i = t.value.component ? n.children : e
            iw(r, (t, e) => this.deactivateRouteAndItsChildren(t, i)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated())
          }
        }
        activateChildRoutes(t, e, n) {
          const r = Fw(e)
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new Kb(t.value.snapshot))
          }),
            t.children.length && this.forwardEvent(new $b(t.value.snapshot))
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            i = e ? e.value : null
          if ((Vw(r), r === i))
            if (r.component) {
              const i = n.getOrCreateContext(r.outlet)
              this.activateChildRoutes(t, e, i.children)
            } else this.activateChildRoutes(t, e, n)
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet)
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot)
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                aS(t.route)
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig
                    if (t && t._loadedConfig) return t._loadedConfig
                    if (t && t.component) return null
                  }
                  return null
                })(r.snapshot),
                i = n ? n.module.componentFactoryResolver : null
              ;(e.attachRef = null),
                (e.route = r),
                (e.resolver = i),
                e.outlet && e.outlet.activateWith(r, i),
                this.activateChildRoutes(t, null, e.children)
            }
          } else this.activateChildRoutes(t, null, n)
        }
      }
      function aS(t) {
        Vw(t.value), t.children.forEach(aS)
      }
      class lS {
        constructor(t, e) {
          ;(this.routes = t), (this.module = e)
        }
      }
      function cS(t) {
        return 'function' == typeof t
      }
      function uS(t) {
        return t instanceof uw
      }
      const hS = Symbol('INITIAL_VALUE')
      function dS() {
        return xb((t) =>
          (function (...t) {
            let e = null,
              n = null
            return (
              k(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              V(t, n).lift(new db(e))
            )
          })(
            ...t.map((t) =>
              t.pipe(
                eh(1),
                (function (...t) {
                  const e = t[t.length - 1]
                  return k(e) ? (t.pop(), (n) => wh(t, n, e)) : (e) => wh(t, e)
                })(hS)
              )
            )
          ).pipe(
            (function (t, e) {
              let n = !1
              return (
                arguments.length >= 2 && (n = !0),
                function (r) {
                  return r.lift(new Ab(t, e, n))
                }
              )
            })((t, e) => {
              let n = !1
              return e.reduce((t, r, i) => {
                if (t !== hS) return t
                if ((r === hS && (n = !0), !n)) {
                  if (!1 === r) return r
                  if (i === e.length - 1 || uS(r)) return r
                }
                return t
              }, t)
            }, hS),
            Gu((t) => t !== hS),
            F((t) => (uS(t) ? t : !0 === t)),
            eh(1)
          )
        )
      }
      let pS = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵcmp = jt({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && yo(0, 'router-outlet')
            },
            directives: function () {
              return [rC]
            },
            encapsulation: 2,
          })),
          t
        )
      })()
      function fS(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n]
          mS(r, gS(e, r))
        }
      }
      function mS(t, e) {
        t.children && fS(t.children, e)
      }
      function gS(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + '/'
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ''
          : t
      }
      function yS(t) {
        const e = t.children && t.children.map(yS),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t)
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== Gb &&
            (n.component = pS),
          n
        )
      }
      function _S(t) {
        return t.outlet || Gb
      }
      class vS {
        constructor(t) {
          this.segmentGroup = t || null
        }
      }
      class bS {
        constructor(t) {
          this.urlTree = t
        }
      }
      function wS(t) {
        return new _((e) => e.error(new vS(t)))
      }
      function SS(t) {
        return new _((e) => e.error(new bS(t)))
      }
      function CS(t) {
        return new _((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        )
      }
      class ES {
        constructor(t, e, n, r, i) {
          ;(this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Ba))
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            Gb
          )
            .pipe(
              F((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Cf((t) => {
                if (t instanceof bS)
                  return (this.allowRedirects = !1), this.match(t.urlTree)
                if (t instanceof vS) throw this.noMatchError(t)
                throw t
              })
            )
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, Gb)
            .pipe(F((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              Cf((t) => {
                if (t instanceof vS) throw this.noMatchError(t)
                throw t
              })
            )
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          )
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new hw([], { [Gb]: t }) : t
          return new uw(r, e, n)
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(F((t) => new hw([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0)
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Vu({})
            const n = [],
              r = [],
              i = {}
            return (
              iw(t, (t, s) => {
                const o = e(s, t).pipe(F((t) => (i[s] = t)))
                s === Gb ? n.push(o) : r.push(o)
              }),
              Vu.apply(null, n.concat(r)).pipe(
                bh(),
                (function (t, e) {
                  const n = arguments.length >= 2
                  return (r) =>
                    r.pipe(
                      t ? Gu((e, n) => t(e, n, r)) : y,
                      gb(1),
                      n ? Cb(e) : vb(() => new fb())
                    )
                })(),
                F(() => i)
              )
            )
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n))
        }
        expandSegment(t, e, n, r, i, s) {
          const o = (function (t) {
            return t.reduce((t, e) => {
              const n = _S(e)
              return t.has(n) ? t.get(n).push(e) : t.set(n, [e]), t
            }, new Map())
          })(n)
          o.has(i) || o.set(i, [])
          const a = (n) =>
            L(n).pipe(
              Af((o) =>
                this.expandSegmentAgainstRoute(t, e, n, o, r, i, s).pipe(
                  Cf((t) => {
                    if (t instanceof vS) return Vu(null)
                    throw t
                  })
                )
              ),
              Rb((t) => null !== t),
              Cf((t) => {
                if (t instanceof fb || 'EmptyError' === t.name) {
                  if (this.noLeftoversInUrl(e, r, i)) return Vu(new hw([], {}))
                  throw new vS(e)
                }
                throw t
              })
            )
          return L(
            Array.from(o.entries()).map(([t, e]) => {
              const n = a(e)
              return t === i
                ? n
                : n.pipe(
                    F(() => null),
                    Cf(() => Vu(null))
                  )
            })
          ).pipe(
            (t) => t.lift(new db(void 0)),
            Rb(),
            F((t) => t.find((t) => null !== t))
          )
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n]
        }
        expandSegmentAgainstRoute(t, e, n, r, i, s, o) {
          return _S(r) !== s && '' !== r.path
            ? wS(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, i)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, s)
            : wS(e)
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, s) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                i,
                s
              )
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const i = this.applyRedirectCommands([], n.redirectTo, {})
          return n.redirectTo.startsWith('/')
            ? SS(i)
            : this.lineralizeSegments(n, i).pipe(
                U((n) => {
                  const i = new hw(n, {})
                  return this.expandSegment(t, i, e, n, r, !1)
                })
              )
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, s) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = kS(e, r, i)
          if (!o) return wS(e)
          const u = this.applyRedirectCommands(a, r.redirectTo, c)
          return r.redirectTo.startsWith('/')
            ? SS(u)
            : this.lineralizeSegments(r, u).pipe(
                U((r) =>
                  this.expandSegment(t, e, n, r.concat(i.slice(l)), s, !1)
                )
              )
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(F((t) => ((n._loadedConfig = t), new hw(r, {}))))
              : Vu(new hw(r, {}))
          const { matched: i, consumedSegments: s, lastChild: o } = kS(e, n, r)
          if (!i) return wS(e)
          const a = r.slice(o)
          return this.getChildConfig(t, n, r).pipe(
            U((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: i, slicedSegments: o } = (function (
                  t,
                  e,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => TS(t, e, n) && _S(n) !== Gb)
                    })(t, n, r)
                    ? {
                        segmentGroup: xS(
                          new hw(
                            e,
                            (function (t, e) {
                              const n = {}
                              n.primary = e
                              for (const r of t)
                                '' === r.path &&
                                  _S(r) !== Gb &&
                                  (n[_S(r)] = new hw([], {}))
                              return n
                            })(r, new hw(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => TS(t, e, n))
                      })(t, n, r)
                    ? {
                        segmentGroup: xS(
                          new hw(
                            t.segments,
                            (function (t, e, n, r) {
                              const i = {}
                              for (const s of n)
                                TS(t, e, s) &&
                                  !r[_S(s)] &&
                                  (i[_S(s)] = new hw([], {}))
                              return Object.assign(Object.assign({}, r), i)
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n }
                })(e, s, a, r)
              return 0 === o.length && i.hasChildren()
                ? this.expandChildren(n, r, i).pipe(F((t) => new hw(s, t)))
                : 0 === r.length && 0 === o.length
                ? Vu(new hw(s, {}))
                : this.expandSegment(n, i, r, o, Gb, !0).pipe(
                    F((t) => new hw(s.concat(t.segments), t.children))
                  )
            })
          )
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Vu(new lS(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Vu(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  U((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(F((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new _((e) =>
                            e.error(
                              Xb(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          )
                        })(e)
                  )
                )
            : Vu(new lS([], t))
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad
          return r && 0 !== r.length
            ? Vu(
                r.map((r) => {
                  const i = t.get(r)
                  let s
                  if (
                    (function (t) {
                      return t && cS(t.canLoad)
                    })(i)
                  )
                    s = i.canLoad(e, n)
                  else {
                    if (!cS(i)) throw new Error('Invalid CanLoad guard')
                    s = i(e, n)
                  }
                  return sw(s)
                })
              ).pipe(
                dS(),
                Wu((t) => {
                  if (!uS(t)) return
                  const e = Xb(
                    `Redirecting to "${this.urlSerializer.serialize(t)}"`
                  )
                  throw ((e.url = t), e)
                }),
                F((t) => !0 === t)
              )
            : Vu(!0)
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Vu(n)
            if (r.numberOfChildren > 1 || !r.children.primary)
              return CS(t.redirectTo)
            r = r.children.primary
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          )
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const i = this.createSegmentGroup(t, e.root, n, r)
          return new uw(
            i,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          )
        }
        createQueryParams(t, e) {
          const n = {}
          return (
            iw(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const i = t.substring(1)
                n[r] = e[i]
              } else n[r] = t
            }),
            n
          )
        }
        createSegmentGroup(t, e, n, r) {
          const i = this.createSegments(t, e.segments, n, r)
          let s = {}
          return (
            iw(e.children, (e, i) => {
              s[i] = this.createSegmentGroup(t, e, n, r)
            }),
            new hw(i, s)
          )
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(':')
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          )
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)]
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            )
          return r
        }
        findOrReturn(t, e) {
          let n = 0
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r
            n++
          }
          return t
        }
      }
      function kS(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
        const r = (e.matcher || Jb)(n, t, e)
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            }
      }
      function xS(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary
          return new hw(t.segments.concat(e.segments), e.children)
        }
        return t
      }
      function TS(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        )
      }
      class IS {
        constructor(t) {
          ;(this.path = t), (this.route = this.path[this.path.length - 1])
        }
      }
      class AS {
        constructor(t, e) {
          ;(this.component = t), (this.route = e)
        }
      }
      function OS(t, e, n) {
        const r = t._root
        return PS(r, e ? e._root : null, n, [r.value])
      }
      function RS(t, e, n) {
        const r = (function (t) {
          if (!t) return null
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig
            if (t && t._loadedConfig) return t._loadedConfig
          }
          return null
        })(e)
        return (r ? r.module.injector : n).get(t)
      }
      function PS(
        t,
        e,
        n,
        r,
        i = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const s = Fw(e)
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              i = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const s = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null
              if (o && s.routeConfig === o.routeConfig) {
                const l = (function (t, e, n) {
                  if ('function' == typeof n) return n(t, e)
                  switch (n) {
                    case 'pathParamsChange':
                      return !pw(t.url, e.url)
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !pw(t.url, e.url) || !tw(t.queryParams, e.queryParams)
                      )
                    case 'always':
                      return !0
                    case 'paramsOrQueryParamsChange':
                      return !$w(t, e) || !tw(t.queryParams, e.queryParams)
                    case 'paramsChange':
                    default:
                      return !$w(t, e)
                  }
                })(o, s, s.routeConfig.runGuardsAndResolvers)
                l
                  ? i.canActivateChecks.push(new IS(r))
                  : ((s.data = o.data), (s._resolvedData = o._resolvedData)),
                  PS(t, e, s.component ? (a ? a.children : null) : n, r, i),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    i.canDeactivateChecks.push(new AS(a.outlet.component, o))
              } else
                o && DS(e, a, i),
                  i.canActivateChecks.push(new IS(r)),
                  PS(t, null, s.component ? (a ? a.children : null) : n, r, i)
            })(t, s[t.value.outlet], n, r.concat([t.value]), i),
              delete s[t.value.outlet]
          }),
          iw(s, (t, e) => DS(t, n.getContext(e), i)),
          i
        )
      }
      function DS(t, e, n) {
        const r = Fw(t),
          i = t.value
        iw(r, (t, r) => {
          DS(t, i.component ? (e ? e.children.getContext(r) : null) : e, n)
        }),
          n.canDeactivateChecks.push(
            new AS(
              i.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              i
            )
          )
      }
      function MS(t, e) {
        return null !== t && e && e(new Wb(t)), Vu(!0)
      }
      function FS(t, e) {
        return null !== t && e && e(new Vb(t)), Vu(!0)
      }
      function NS(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null
        return r && 0 !== r.length
          ? Vu(
              r.map((r) =>
                mb(() => {
                  const i = RS(r, e, n)
                  let s
                  if (
                    (function (t) {
                      return t && cS(t.canActivate)
                    })(i)
                  )
                    s = sw(i.canActivate(e, t))
                  else {
                    if (!cS(i)) throw new Error('Invalid CanActivate guard')
                    s = sw(i(e, t))
                  }
                  return s.pipe(Rb())
                })
              )
            ).pipe(dS())
          : Vu(!0)
      }
      function jS(t, e, n) {
        const r = e[e.length - 1],
          i = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null
                return e && 0 !== e.length ? { node: t, guards: e } : null
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              mb(() =>
                Vu(
                  e.guards.map((i) => {
                    const s = RS(i, e.node, n)
                    let o
                    if (
                      (function (t) {
                        return t && cS(t.canActivateChild)
                      })(s)
                    )
                      o = sw(s.canActivateChild(r, t))
                    else {
                      if (!cS(s))
                        throw new Error('Invalid CanActivateChild guard')
                      o = sw(s(r, t))
                    }
                    return o.pipe(Rb())
                  })
                ).pipe(dS())
              )
            )
        return Vu(i).pipe(dS())
      }
      class zS {}
      class LS {
        constructor(t, e, n, r, i, s) {
          ;(this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = s)
        }
        recognize() {
          try {
            const t = qS(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, Gb),
              n = new Uw(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                Gb,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new Mw(n, e),
              i = new Bw(this.url, r)
            return this.inheritParamsAndData(i._root), Vu(i)
          } catch (t) {
            return new _((e) => e.error(t))
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Lw(e, this.paramsInheritanceStrategy)
          ;(e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t))
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n)
        }
        processChildren(t, e) {
          const n = fw(e, (e, n) => this.processSegmentGroup(t, e, n))
          return (
            (function (t) {
              const e = {}
              t.forEach((t) => {
                const n = e[t.value.outlet]
                if (n) {
                  const e = n.url.map((t) => t.toString()).join('/'),
                    r = t.value.url.map((t) => t.toString()).join('/')
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${r}'.`
                  )
                }
                e[t.value.outlet] = t.value
              })
            })(n),
            n.sort((t, e) =>
              t.value.outlet === Gb
                ? -1
                : e.value.outlet === Gb
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          )
        }
        processSegment(t, e, n, r) {
          for (const s of t)
            try {
              return this.processSegmentAgainstRoute(s, e, n, r)
            } catch (i) {
              if (!(i instanceof zS)) throw i
            }
          if (this.noLeftoversInUrl(e, n, r)) return []
          throw new zS()
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n]
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new zS()
          if ((t.outlet || Gb) !== r) throw new zS()
          let i,
            s = [],
            o = []
          if ('**' === t.path) {
            const s = n.length > 0 ? rw(n).parameters : {}
            i = new Uw(
              n,
              s,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              VS(t),
              r,
              t.component,
              t,
              US(e),
              BS(e) + n.length,
              $S(t)
            )
          } else {
            const a = (function (t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new zS()
                return { consumedSegments: [], lastChild: 0, parameters: {} }
              }
              const r = (e.matcher || Jb)(n, t, e)
              if (!r) throw new zS()
              const i = {}
              iw(r.posParams, (t, e) => {
                i[e] = t.path
              })
              const s =
                r.consumed.length > 0
                  ? Object.assign(
                      Object.assign({}, i),
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : i
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: s,
              }
            })(e, t, n)
            ;(s = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (i = new Uw(
                s,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                VS(t),
                r,
                t.component,
                t,
                US(e),
                BS(e) + s.length,
                $S(t)
              ))
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : []
            })(t),
            { segmentGroup: l, slicedSegments: c } = qS(
              e,
              s,
              o,
              a,
              this.relativeLinkResolution
            )
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l)
            return [new Mw(i, t)]
          }
          if (0 === a.length && 0 === c.length) return [new Mw(i, [])]
          const u = this.processSegment(a, l, c, Gb)
          return [new Mw(i, u)]
        }
      }
      function US(t) {
        let e = t
        for (; e._sourceSegment; ) e = e._sourceSegment
        return e
      }
      function BS(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0)
        return n - 1
      }
      function qS(t, e, n, r, i) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => HS(t, e, n) && _S(n) !== Gb)
          })(t, n, r)
        ) {
          const i = new hw(
            e,
            (function (t, e, n, r) {
              const i = {}
              ;(i.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length)
              for (const s of n)
                if ('' === s.path && _S(s) !== Gb) {
                  const n = new hw([], {})
                  ;(n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (i[_S(s)] = n)
                }
              return i
            })(t, e, r, new hw(n, t.children))
          )
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: [] }
          )
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => HS(t, e, n))
          })(t, n, r)
        ) {
          const s = new hw(
            t.segments,
            (function (t, e, n, r, i, s) {
              const o = {}
              for (const a of r)
                if (HS(t, n, a) && !i[_S(a)]) {
                  const n = new hw([], {})
                  ;(n._sourceSegment = t),
                    (n._segmentIndexShift =
                      'legacy' === s ? t.segments.length : e.length),
                    (o[_S(a)] = n)
                }
              return Object.assign(Object.assign({}, i), o)
            })(t, e, n, r, t.children, i)
          )
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: n }
          )
        }
        const s = new hw(t.segments, t.children)
        return (
          (s._sourceSegment = t),
          (s._segmentIndexShift = e.length),
          { segmentGroup: s, slicedSegments: n }
        )
      }
      function HS(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        )
      }
      function VS(t) {
        return t.data || {}
      }
      function $S(t) {
        return t.resolve || {}
      }
      function WS(t) {
        return function (e) {
          return e.pipe(
            xb((e) => {
              const n = t(e)
              return n ? L(n).pipe(F(() => e)) : L([e])
            })
          )
        }
      }
      class KS extends class {
        shouldDetach(t) {
          return !1
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1
        }
        retrieve(t) {
          return null
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig
        }
      } {}
      const QS = new zn('ROUTES')
      class GS {
        constructor(t, e, n, r) {
          ;(this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r)
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              F((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e)
                const r = n.create(t)
                return new lS(nw(r.injector.get(QS)).map(yS), r)
              })
            )
          )
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? L(this.loader.load(t))
            : sw(t()).pipe(
                U((t) =>
                  t instanceof qa
                    ? Vu(t)
                    : L(this.compiler.compileModuleAsync(t))
                )
              )
        }
      }
      class ZS {
        constructor() {
          ;(this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new YS()),
            (this.attachRef = null)
        }
      }
      class YS {
        constructor() {
          this.contexts = new Map()
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t)
          ;(n.outlet = e), this.contexts.set(t, n)
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t)
          e && (e.outlet = null)
        }
        onOutletDeactivated() {
          const t = this.contexts
          return (this.contexts = new Map()), t
        }
        onOutletReAttached(t) {
          this.contexts = t
        }
        getOrCreateContext(t) {
          let e = this.getContext(t)
          return e || ((e = new ZS()), this.contexts.set(t, e)), e
        }
        getContext(t) {
          return this.contexts.get(t) || null
        }
      }
      class XS {
        shouldProcessUrl(t) {
          return !0
        }
        extract(t) {
          return t
        }
        merge(t, e) {
          return t
        }
      }
      function JS(t) {
        throw t
      }
      function tC(t, e, n) {
        return e.parse('/')
      }
      function eC(t, e) {
        return Vu(null)
      }
      let nC = (() => {
          class t {
            constructor(t, e, n, r, i, s, o, a) {
              ;(this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new C()),
                (this.errorHandler = JS),
                (this.malformedUriErrorHandler = tC),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: eC,
                  afterPreactivation: eC,
                }),
                (this.urlHandlingStrategy = new XS()),
                (this.routeReuseStrategy = new KS()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'corrected'),
                (this.ngModule = i.get(Ba)),
                (this.console = i.get(Pl))
              const l = i.get($l)
              ;(this.isNgZoneEnabled = l instanceof $l),
                this.resetConfig(a),
                (this.currentUrlTree = new uw(new hw([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new GS(
                  s,
                  o,
                  (t) => this.triggerEvent(new qb(t)),
                  (t) => this.triggerEvent(new Hb(t))
                )),
                (this.routerState = jw(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new pv({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations()
            }
            setupNavigations(t) {
              const e = this.events
              return t.pipe(
                Gu((t) => 0 !== t.id),
                F((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                xb((t) => {
                  let n = !1,
                    r = !1
                  return Vu(t).pipe(
                    Wu((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      }
                    }),
                    xb((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString()
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Vu(t).pipe(
                          xb((t) => {
                            const n = this.transitions.getValue()
                            return (
                              e.next(
                                new Db(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue() ? Ju : [t]
                            )
                          }),
                          xb((t) => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (i = this.configLoader),
                          (s = this.urlSerializer),
                          (o = this.config),
                          function (t) {
                            return t.pipe(
                              xb((t) =>
                                (function (t, e, n, r, i) {
                                  return new ES(t, e, n, r, i).apply()
                                })(r, i, s, t.extractedUrl, o).pipe(
                                  F((e) =>
                                    Object.assign(Object.assign({}, t), {
                                      urlAfterRedirects: e,
                                    })
                                  )
                                )
                              )
                            )
                          }),
                          Wu((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            )
                          }),
                          (function (t, e, n, r, i) {
                            return function (s) {
                              return s.pipe(
                                U((s) =>
                                  (function (
                                    t,
                                    e,
                                    n,
                                    r,
                                    i = 'emptyOnly',
                                    s = 'legacy'
                                  ) {
                                    return new LS(t, e, n, r, i, s).recognize()
                                  })(
                                    t,
                                    e,
                                    s.urlAfterRedirects,
                                    n(s.urlAfterRedirects),
                                    r,
                                    i
                                  ).pipe(
                                    F((t) =>
                                      Object.assign(Object.assign({}, s), {
                                        targetSnapshot: t,
                                      })
                                    )
                                  )
                                )
                              )
                            }
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Wu((t) => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects))
                          }),
                          Wu((t) => {
                            const n = new jb(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            )
                            e.next(n)
                          })
                        )
                      var r, i, s, o
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: i,
                            restoredState: s,
                            extras: o,
                          } = t,
                          a = new Db(n, this.serializeUrl(r), i, s)
                        e.next(a)
                        const l = jw(r, this.rootComponentType).snapshot
                        return Vu(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        )
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        Ju
                      )
                    }),
                    WS((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: i,
                        extras: { skipLocationChange: s, replaceUrl: o },
                      } = t
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: i,
                        skipLocationChange: !!s,
                        replaceUrl: !!o,
                      })
                    }),
                    Wu((t) => {
                      const e = new zb(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      )
                      this.triggerEvent(e)
                    }),
                    F((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: OS(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          U((n) => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: i,
                              guards: {
                                canActivateChecks: s,
                                canDeactivateChecks: o,
                              },
                            } = n
                            return 0 === o.length && 0 === s.length
                              ? Vu(
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: !0,
                                  })
                                )
                              : (function (t, e, n, r) {
                                  return L(t).pipe(
                                    U((t) =>
                                      (function (t, e, n, r, i) {
                                        const s =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null
                                        return s && 0 !== s.length
                                          ? Vu(
                                              s.map((s) => {
                                                const o = RS(s, e, i)
                                                let a
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && cS(t.canDeactivate)
                                                    )
                                                  })(o)
                                                )
                                                  a = sw(
                                                    o.canDeactivate(t, e, n, r)
                                                  )
                                                else {
                                                  if (!cS(o))
                                                    throw new Error(
                                                      'Invalid CanDeactivate guard'
                                                    )
                                                  a = sw(o(t, e, n, r))
                                                }
                                                return a.pipe(Rb())
                                              })
                                            ).pipe(dS())
                                          : Vu(!0)
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    Rb((t) => !0 !== t, !0)
                                  )
                                })(o, r, i, t).pipe(
                                  U((n) =>
                                    n && 'boolean' == typeof n
                                      ? (function (t, e, n, r) {
                                          return L(e).pipe(
                                            Af((e) =>
                                              L([
                                                FS(e.route.parent, r),
                                                MS(e.route, r),
                                                jS(t, e.path, n),
                                                NS(t, e.route, n),
                                              ]).pipe(
                                                bh(),
                                                Rb((t) => !0 !== t, !0)
                                              )
                                            ),
                                            Rb((t) => !0 !== t, !0)
                                          )
                                        })(r, s, t, e)
                                      : Vu(n)
                                  ),
                                  F((t) =>
                                    Object.assign(Object.assign({}, n), {
                                      guardsResult: t,
                                    })
                                  )
                                )
                          })
                        )
                      }
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Wu((t) => {
                      if (uS(t.guardsResult)) {
                        const e = Xb(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        )
                        throw ((e.url = t.guardsResult), e)
                      }
                    }),
                    Wu((t) => {
                      const e = new Lb(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      )
                      this.triggerEvent(e)
                    }),
                    Gu((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree()
                        const n = new Fb(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ''
                        )
                        return e.next(n), t.resolve(!1), !1
                      }
                      return !0
                    }),
                    WS((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Vu(t).pipe(
                          Wu((t) => {
                            const e = new Ub(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            )
                            this.triggerEvent(e)
                          }),
                          xb((t) => {
                            let n = !1
                            return Vu(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (i = this.ngModule.injector),
                              function (t) {
                                return t.pipe(
                                  U((t) => {
                                    const {
                                      targetSnapshot: e,
                                      guards: { canActivateChecks: n },
                                    } = t
                                    if (!n.length) return Vu(t)
                                    let s = 0
                                    return L(n).pipe(
                                      Af((t) =>
                                        (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            const i = Object.keys(t)
                                            if (0 === i.length) return Vu({})
                                            const s = {}
                                            return L(i).pipe(
                                              U((i) =>
                                                (function (t, e, n, r) {
                                                  const i = RS(t, e, r)
                                                  return sw(
                                                    i.resolve
                                                      ? i.resolve(e, n)
                                                      : i(e, n)
                                                  )
                                                })(t[i], e, n, r).pipe(
                                                  Wu((t) => {
                                                    s[i] = t
                                                  })
                                                )
                                              ),
                                              gb(1),
                                              U(() =>
                                                Object.keys(s).length ===
                                                i.length
                                                  ? Vu(s)
                                                  : Ju
                                              )
                                            )
                                          })(t._resolve, t, e, r).pipe(
                                            F(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(
                                                  Object.assign({}, t.data),
                                                  Lw(t, n).resolve
                                                )),
                                                null
                                              )
                                            )
                                          )
                                        })(t.route, e, r, i)
                                      ),
                                      Wu(() => s++),
                                      gb(1),
                                      U((e) => (s === n.length ? Vu(t) : Ju))
                                    )
                                  })
                                )
                              }),
                              Wu({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new Fb(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    )
                                    e.next(n), t.resolve(!1)
                                  }
                                },
                              })
                            )
                            var r, i
                          }),
                          Wu((t) => {
                            const e = new Bb(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            )
                            this.triggerEvent(e)
                          })
                        )
                    }),
                    WS((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: i,
                        extras: { skipLocationChange: s, replaceUrl: o },
                      } = t
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: i,
                        skipLocationChange: !!s,
                        replaceUrl: !!o,
                      })
                    }),
                    F((t) => {
                      const e = (function (t, e, n) {
                        const r = Ww(t, e._root, n ? n._root : void 0)
                        return new Nw(r, e)
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      )
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      })
                    }),
                    Wu((t) => {
                      ;(this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects))
                    }),
                    ((i = this.rootContexts),
                    (s = this.routeReuseStrategy),
                    (o = (t) => this.triggerEvent(t)),
                    F(
                      (t) => (
                        new oS(
                          s,
                          t.targetRouterState,
                          t.currentRouterState,
                          o
                        ).activate(i),
                        t
                      )
                    )),
                    Wu({
                      next() {
                        n = !0
                      },
                      complete() {
                        n = !0
                      },
                    }),
                    xf(() => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree()
                        const n = new Fb(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        )
                        e.next(n), t.resolve(!1)
                      }
                      this.currentNavigation = null
                    }),
                    Cf((n) => {
                      if (((r = !0), (i = n) && i.ngNavigationCancelingError)) {
                        const r = uS(n.url)
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ))
                        const i = new Fb(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        )
                        e.next(i),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                )
                                return this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      'eager' === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                )
                              }, 0)
                            : t.resolve(!1)
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        )
                        const r = new Nb(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        )
                        e.next(r)
                        try {
                          t.resolve(this.errorHandler(n))
                        } catch (s) {
                          t.reject(s)
                        }
                      }
                      var i
                      return Ju
                    })
                  )
                  var i, s, o
                })
              )
            }
            resetRootComponentType(t) {
              ;(this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType)
            }
            getTransition() {
              const t = this.transitions.value
              return (t.urlAfterRedirects = this.browserUrlTree), t
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              )
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 })
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t)
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        i = { replaceUrl: !0 }
                      if (n) {
                        const t = Object.assign({}, n)
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (i.state = t)
                      }
                      this.scheduleNavigation(r, t, n, i)
                    }, 0),
                    (this.lastLocationChangeInfo = e)
                }))
            }
            extractLocationChangeInfoFromEvent(t) {
              var e
              return {
                source: 'popstate' === t.type ? 'popstate' : 'hashchange',
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id,
              }
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0
              const n = e.urlTree.toString() === t.urlTree.toString()
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (('hashchange' === e.source && 'popstate' === t.source) ||
                  ('popstate' === e.source && 'hashchange' === t.source))
              )
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree)
            }
            getCurrentNavigation() {
              return this.currentNavigation
            }
            triggerEvent(t) {
              this.events.next(t)
            }
            resetConfig(t) {
              fS(t),
                (this.config = t.map(yS)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1)
            }
            ngOnDestroy() {
              this.dispose()
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0))
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: i,
                  queryParamsHandling: s,
                  preserveFragment: o,
                } = e,
                a = n || this.routerState.root,
                l = o ? this.currentUrlTree.fragment : i
              let c = null
              switch (s) {
                case 'merge':
                  c = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  )
                  break
                case 'preserve':
                  c = this.currentUrlTree.queryParams
                  break
                default:
                  c = r || null
              }
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function (t, e, n, r, i) {
                  if (0 === n.length) return Zw(e.root, e.root, e, r, i)
                  const s = (function (t) {
                    if (
                      'string' == typeof t[0] &&
                      1 === t.length &&
                      '/' === t[0]
                    )
                      return new Xw(!0, 0, t)
                    let e = 0,
                      n = !1
                    const r = t.reduce((t, r, i) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {}
                          return (
                            iw(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t
                            }),
                            [...t, { outlets: e }]
                          )
                        }
                        if (r.segmentPath) return [...t, r.segmentPath]
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === i
                        ? (r.split('/').forEach((r, i) => {
                            ;(0 == i && '.' === r) ||
                              (0 == i && '' === r
                                ? (n = !0)
                                : '..' === r
                                ? e++
                                : '' != r && t.push(r))
                          }),
                          t)
                        : [...t, r]
                    }, [])
                    return new Xw(n, e, r)
                  })(n)
                  if (s.toRoot()) return Zw(e.root, new hw([], {}), e, r, i)
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new Jw(e.root, !0, 0)
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment
                        return new Jw(t, t === e.root, 0)
                      }
                      const r = Qw(t.commands[0]) ? 0 : 1
                      return (function (t, e, n) {
                        let r = t,
                          i = e,
                          s = n
                        for (; s > i; ) {
                          if (((s -= i), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'")
                          i = r.segments.length
                        }
                        return new Jw(r, !1, i - s)
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      )
                    })(s, e, t),
                    a = o.processChildren
                      ? eS(o.segmentGroup, o.index, s.commands)
                      : tS(o.segmentGroup, o.index, s.commands)
                  return Zw(o.segmentGroup, a, e, r, i)
                })(a, this.currentUrlTree, t, c, l)
              )
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = uS(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree)
              return this.scheduleNavigation(r, 'imperative', null, e)
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e]
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      )
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              )
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t)
            }
            parseUrl(t) {
              let e
              try {
                e = this.urlSerializer.parse(t)
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
              }
              return e
            }
            isActive(t, e) {
              if (uS(t)) return ow(this.currentUrlTree, t, e)
              const n = this.parseUrl(t)
              return ow(this.currentUrlTree, n, e)
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n]
                return null != r && (e[n] = r), e
              }, {})
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  ;(this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new Mb(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0)
                },
                (t) => {
                  this.console.warn('Unhandled Navigation Error: ')
                }
              )
            }
            scheduleNavigation(t, e, n, r, i) {
              const s = this.getTransition(),
                o =
                  'imperative' !== e &&
                  'imperative' === (null == s ? void 0 : s.source),
                a =
                  (this.lastSuccessfulId === s.id || this.currentNavigation
                    ? s.rawUrl
                    : s.urlAfterRedirects
                  ).toString() === t.toString()
              if (o && a) return Promise.resolve(!0)
              let l, c, u
              i
                ? ((l = i.resolve), (c = i.reject), (u = i.promise))
                : (u = new Promise((t, e) => {
                    ;(l = t), (c = e)
                  }))
              const h = ++this.navigationId
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: l,
                  reject: c,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch((t) => Promise.reject(t))
              )
            }
            setBrowserUrl(t, e, n, r) {
              const i = this.urlSerializer.serialize(t)
              ;(r = r || {}),
                this.location.isCurrentPathEqualTo(i) || e
                  ? this.location.replaceState(
                      i,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      i,
                      '',
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
            }
            resetStateAndUrl(t, e, n) {
              ;(this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree()
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                { navigationId: this.lastSuccessfulId }
              )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                or(Un),
                or(mw),
                or(YS),
                or(Lc),
                or(Gs),
                or(pc),
                or(ql),
                or(void 0)
              )
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        rC = (() => {
          class t {
            constructor(t, e, n, r, i) {
              ;(this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = i),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new al()),
                (this.deactivateEvents = new al()),
                (this.name = r || Gb),
                t.onChildOutletCreated(this.name, this)
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name)
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name)
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null))
              }
            }
            get isActivated() {
              return !!this.activated
            }
            get component() {
              if (!this.activated) throw new Error('Outlet is not activated')
              return this.activated.instance
            }
            get activatedRoute() {
              if (!this.activated) throw new Error('Outlet is not activated')
              return this._activatedRoute
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {}
            }
            detach() {
              if (!this.activated) throw new Error('Outlet is not activated')
              this.location.detach()
              const t = this.activated
              return (this.activated = null), (this._activatedRoute = null), t
            }
            attach(t, e) {
              ;(this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView)
            }
            deactivate() {
              if (this.activated) {
                const t = this.component
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t)
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error('Cannot activate an already activated outlet')
              this._activatedRoute = t
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                i = new iC(t, r, this.location.injector)
              ;(this.activated = this.location.createComponent(
                n,
                this.location.length,
                i
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ho(YS), ho(Va), ho(ia), Fn('name'), ho(Ra))
            }),
            (t.ɵdir = Ht({
              type: t,
              selectors: [['router-outlet']],
              outputs: {
                activateEvents: 'activate',
                deactivateEvents: 'deactivate',
              },
              exportAs: ['outlet'],
            })),
            t
          )
        })()
      class iC {
        constructor(t, e, n) {
          ;(this.route = t), (this.childContexts = e), (this.parent = n)
        }
        get(t, e) {
          return t === zw
            ? this.route
            : t === YS
            ? this.childContexts
            : this.parent.get(t, e)
        }
      }
      class sC {}
      class oC {
        preload(t, e) {
          return Vu(null)
        }
      }
      let aC = (() => {
          class t {
            constructor(t, e, n, r, i) {
              ;(this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = i),
                (this.loader = new GS(
                  e,
                  n,
                  (e) => t.triggerEvent(new qb(e)),
                  (e) => t.triggerEvent(new Hb(e))
                ))
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Gu((t) => t instanceof Mb),
                  Af(() => this.preload())
                )
                .subscribe(() => {})
            }
            preload() {
              const t = this.injector.get(Ba)
              return this.processRoutes(t, this.router.config)
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe()
            }
            processRoutes(t, e) {
              const n = []
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig
                  n.push(this.processRoutes(t.module, t.routes))
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children))
              return L(n).pipe(
                H(),
                F((t) => {})
              )
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    U(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(nC), or(pc), or(ql), or(Gs), or(sC))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        lC = (() => {
          class t {
            constructor(t, e, n = {}) {
              ;(this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || 'disabled'),
                (n.anchorScrolling = n.anchorScrolling || 'disabled')
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents())
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Db
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof Mb &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ))
              })
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Qb &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]))
              })
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Qb(
                  t,
                  'popstate' === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              )
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(or(nC), or(su), or(void 0))
            }),
            (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
            t
          )
        })()
      const cC = new zn('ROUTER_CONFIGURATION'),
        uC = new zn('ROUTER_FORROOT_GUARD'),
        hC = [
          Lc,
          { provide: mw, useClass: gw },
          {
            provide: nC,
            useFactory: function (t, e, n, r, i, s, o, a = {}, l, c) {
              const u = new nC(null, t, e, n, r, i, s, nw(o))
              if (
                (l && (u.urlHandlingStrategy = l),
                c && (u.routeReuseStrategy = c),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy)
                })(a, u),
                a.enableTracing)
              ) {
                const t = Cc()
                u.events.subscribe((e) => {
                  t.logGroup('Router Event: ' + e.constructor.name),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd()
                })
              }
              return u
            },
            deps: [
              mw,
              YS,
              Lc,
              Gs,
              pc,
              ql,
              QS,
              cC,
              [class {}, new Zn()],
              [class {}, new Zn()],
            ],
          },
          YS,
          {
            provide: zw,
            useFactory: function (t) {
              return t.routerState.root
            },
            deps: [nC],
          },
          { provide: pc, useClass: gc },
          aC,
          oC,
          class {
            preload(t, e) {
              return e().pipe(Cf(() => Vu(null)))
            }
          },
          { provide: cC, useValue: { enableTracing: !1 } },
        ]
      function dC() {
        return new oc('Router', nC)
      }
      let pC = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                hC,
                yC(e),
                {
                  provide: uC,
                  useFactory: gC,
                  deps: [[nC, new Zn(), new Xn()]],
                },
                { provide: cC, useValue: n || {} },
                {
                  provide: Mc,
                  useFactory: mC,
                  deps: [kc, [new Gn(Nc), new Zn()], cC],
                },
                { provide: lC, useFactory: fC, deps: [nC, su, cC] },
                {
                  provide: sC,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : oC,
                },
                { provide: oc, multi: !0, useFactory: dC },
                [
                  _C,
                  { provide: El, multi: !0, useFactory: vC, deps: [_C] },
                  { provide: wC, useFactory: bC, deps: [_C] },
                  { provide: Rl, multi: !0, useExisting: wC },
                ],
              ],
            }
          }
          static forChild(e) {
            return { ngModule: t, providers: [yC(e)] }
          }
        }
        return (
          (t.ɵmod = Bt({ type: t })),
          (t.ɵinj = at({
            factory: function (e) {
              return new (e || t)(or(uC, 8), or(nC, 8))
            },
          })),
          t
        )
      })()
      function fC(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new lC(t, e, n)
      }
      function mC(t, e, n = {}) {
        return n.useHash ? new zc(t, e) : new jc(t, e)
      }
      function gC(t) {
        return 'guarded'
      }
      function yC(t) {
        return [
          { provide: Ln, multi: !0, useValue: t },
          { provide: QS, multi: !0, useValue: t },
        ]
      }
      let _C = (() => {
        class t {
          constructor(t) {
            ;(this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new C())
          }
          appInitializer() {
            return this.injector.get(Tc, Promise.resolve(null)).then(() => {
              let t = null
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(nC),
                r = this.injector.get(cC)
              return (
                'disabled' === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : 'enabled' === r.initialNavigation ||
                    'enabledBlocking' === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? Vu(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              )
            })
          }
          bootstrapListener(t) {
            const e = this.injector.get(cC),
              n = this.injector.get(aC),
              r = this.injector.get(lC),
              i = this.injector.get(nC),
              s = this.injector.get(hc)
            t === s.components[0] &&
              (('enabledNonBlocking' !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                i.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(s.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete())
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(or(Gs))
          }),
          (t.ɵprov = ot({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      function vC(t) {
        return t.appInitializer.bind(t)
      }
      function bC(t) {
        return t.bootstrapListener.bind(t)
      }
      const wC = new zn('Router Initializer')
      let SC = (() => {
        class t {}
        return (
          (t.ɵmod = Bt({ type: t, bootstrap: [ub] })),
          (t.ɵinj = at({
            factory: function (e) {
              return new (e || t)()
            },
            providers: [],
            imports: [
              [
                zu,
                im,
                hm,
                Gv,
                wv.forRoot(wc),
                pC.forRoot([], { initialNavigation: 'enabled' }),
                ef,
              ],
            ],
          })),
          t
        )
      })()
      Fu()
        .bootstrapModule(SC)
        .catch((t) => console.error(t))
    },
    Gbct: function (t, e, n) {
      var r = n('Wm4p'),
        i = n('cpc2')
      function s(t) {
        ;(this.path = t.path),
          (this.hostname = t.hostname),
          (this.port = t.port),
          (this.secure = t.secure),
          (this.query = t.query),
          (this.timestampParam = t.timestampParam),
          (this.timestampRequests = t.timestampRequests),
          (this.readyState = ''),
          (this.agent = t.agent || !1),
          (this.socket = t.socket),
          (this.enablesXDR = t.enablesXDR),
          (this.withCredentials = t.withCredentials),
          (this.pfx = t.pfx),
          (this.key = t.key),
          (this.passphrase = t.passphrase),
          (this.cert = t.cert),
          (this.ca = t.ca),
          (this.ciphers = t.ciphers),
          (this.rejectUnauthorized = t.rejectUnauthorized),
          (this.forceNode = t.forceNode),
          (this.isReactNative = t.isReactNative),
          (this.extraHeaders = t.extraHeaders),
          (this.localAddress = t.localAddress)
      }
      ;(t.exports = s),
        i(s.prototype),
        (s.prototype.onError = function (t, e) {
          var n = new Error(t)
          return (
            (n.type = 'TransportError'),
            (n.description = e),
            this.emit('error', n),
            this
          )
        }),
        (s.prototype.open = function () {
          return (
            ('closed' !== this.readyState && '' !== this.readyState) ||
              ((this.readyState = 'opening'), this.doOpen()),
            this
          )
        }),
        (s.prototype.close = function () {
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          )
        }),
        (s.prototype.send = function (t) {
          if ('open' !== this.readyState) throw new Error('Transport not open')
          this.write(t)
        }),
        (s.prototype.onOpen = function () {
          ;(this.readyState = 'open'), (this.writable = !0), this.emit('open')
        }),
        (s.prototype.onData = function (t) {
          var e = r.decodePacket(t, this.socket.binaryType)
          this.onPacket(e)
        }),
        (s.prototype.onPacket = function (t) {
          this.emit('packet', t)
        }),
        (s.prototype.onClose = function () {
          ;(this.readyState = 'closed'), this.emit('close')
        })
    },
    KFGy: function (t, e, n) {
      var r = n('Vo14'),
        i = n('cpc2'),
        s = n('kSER'),
        o = n('2Dig'),
        a = n('QN7Q'),
        l = n('x7D4')('socket.io-client:socket'),
        c = n('TypT'),
        u = n('WLGk')
      t.exports = p
      var h = {
          connect: 1,
          connect_error: 1,
          connect_timeout: 1,
          connecting: 1,
          disconnect: 1,
          error: 1,
          reconnect: 1,
          reconnect_attempt: 1,
          reconnect_failed: 1,
          reconnect_error: 1,
          reconnecting: 1,
          ping: 1,
          pong: 1,
        },
        d = i.prototype.emit
      function p(t, e, n) {
        ;(this.io = t),
          (this.nsp = e),
          (this.json = this),
          (this.ids = 0),
          (this.acks = {}),
          (this.receiveBuffer = []),
          (this.sendBuffer = []),
          (this.connected = !1),
          (this.disconnected = !0),
          (this.flags = {}),
          n && n.query && (this.query = n.query),
          this.io.autoConnect && this.open()
      }
      i(p.prototype),
        (p.prototype.subEvents = function () {
          if (!this.subs) {
            var t = this.io
            this.subs = [
              o(t, 'open', a(this, 'onopen')),
              o(t, 'packet', a(this, 'onpacket')),
              o(t, 'close', a(this, 'onclose')),
            ]
          }
        }),
        (p.prototype.open = p.prototype.connect = function () {
          return (
            this.connected ||
              (this.subEvents(),
              this.io.reconnecting || this.io.open(),
              'open' === this.io.readyState && this.onopen(),
              this.emit('connecting')),
            this
          )
        }),
        (p.prototype.send = function () {
          var t = s(arguments)
          return t.unshift('message'), this.emit.apply(this, t), this
        }),
        (p.prototype.emit = function (t) {
          if (h.hasOwnProperty(t)) return d.apply(this, arguments), this
          var e = s(arguments),
            n = {
              type: (void 0 !== this.flags.binary ? this.flags.binary : u(e))
                ? r.BINARY_EVENT
                : r.EVENT,
              data: e,
              options: {},
            }
          return (
            (n.options.compress = !this.flags || !1 !== this.flags.compress),
            'function' == typeof e[e.length - 1] &&
              (l('emitting packet with ack id %d', this.ids),
              (this.acks[this.ids] = e.pop()),
              (n.id = this.ids++)),
            this.connected ? this.packet(n) : this.sendBuffer.push(n),
            (this.flags = {}),
            this
          )
        }),
        (p.prototype.packet = function (t) {
          ;(t.nsp = this.nsp), this.io.packet(t)
        }),
        (p.prototype.onopen = function () {
          if ((l('transport is open - connecting'), '/' !== this.nsp))
            if (this.query) {
              var t =
                'object' == typeof this.query
                  ? c.encode(this.query)
                  : this.query
              l('sending connect packet with query %s', t),
                this.packet({ type: r.CONNECT, query: t })
            } else this.packet({ type: r.CONNECT })
        }),
        (p.prototype.onclose = function (t) {
          l('close (%s)', t),
            (this.connected = !1),
            (this.disconnected = !0),
            delete this.id,
            this.emit('disconnect', t)
        }),
        (p.prototype.onpacket = function (t) {
          if (t.nsp === this.nsp || (t.type === r.ERROR && '/' === t.nsp))
            switch (t.type) {
              case r.CONNECT:
                this.onconnect()
                break
              case r.EVENT:
              case r.BINARY_EVENT:
                this.onevent(t)
                break
              case r.ACK:
              case r.BINARY_ACK:
                this.onack(t)
                break
              case r.DISCONNECT:
                this.ondisconnect()
                break
              case r.ERROR:
                this.emit('error', t.data)
            }
        }),
        (p.prototype.onevent = function (t) {
          var e = t.data || []
          l('emitting event %j', e),
            null != t.id &&
              (l('attaching ack callback to event'), e.push(this.ack(t.id))),
            this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
        }),
        (p.prototype.ack = function (t) {
          var e = this,
            n = !1
          return function () {
            if (!n) {
              n = !0
              var i = s(arguments)
              l('sending ack %j', i),
                e.packet({ type: u(i) ? r.BINARY_ACK : r.ACK, id: t, data: i })
            }
          }
        }),
        (p.prototype.onack = function (t) {
          var e = this.acks[t.id]
          'function' == typeof e
            ? (l('calling ack %s with %j', t.id, t.data),
              e.apply(this, t.data),
              delete this.acks[t.id])
            : l('bad ack %s', t.id)
        }),
        (p.prototype.onconnect = function () {
          ;(this.connected = !0),
            (this.disconnected = !1),
            this.emit('connect'),
            this.emitBuffered()
        }),
        (p.prototype.emitBuffered = function () {
          var t
          for (t = 0; t < this.receiveBuffer.length; t++)
            d.apply(this, this.receiveBuffer[t])
          for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++)
            this.packet(this.sendBuffer[t])
          this.sendBuffer = []
        }),
        (p.prototype.ondisconnect = function () {
          l('server disconnect (%s)', this.nsp),
            this.destroy(),
            this.onclose('io server disconnect')
        }),
        (p.prototype.destroy = function () {
          if (this.subs) {
            for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy()
            this.subs = null
          }
          this.io.destroy(this)
        }),
        (p.prototype.close = p.prototype.disconnect = function () {
          return (
            this.connected &&
              (l('performing disconnect (%s)', this.nsp),
              this.packet({ type: r.DISCONNECT })),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }),
        (p.prototype.compress = function (t) {
          return (this.flags.compress = t), this
        }),
        (p.prototype.binary = function (t) {
          return (this.flags.binary = t), this
        })
    },
    Q80o: function (t, e, n) {
      function r(t) {
        var n
        function r() {
          if (r.enabled) {
            var t = r,
              i = +new Date(),
              s = i - (n || i)
            ;(t.diff = s), (t.prev = n), (t.curr = i), (n = i)
            for (var o = new Array(arguments.length), a = 0; a < o.length; a++)
              o[a] = arguments[a]
            ;(o[0] = e.coerce(o[0])), 'string' != typeof o[0] && o.unshift('%O')
            var l = 0
            ;(o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
              if ('%%' === n) return n
              l++
              var i = e.formatters[r]
              return (
                'function' == typeof i &&
                  ((n = i.call(t, o[l])), o.splice(l, 1), l--),
                n
              )
            })),
              e.formatArgs.call(t, o)
            var c = r.log || e.log || console.log.bind(console)
            c.apply(t, o)
          }
        }
        return (
          (r.namespace = t),
          (r.enabled = e.enabled(t)),
          (r.useColors = e.useColors()),
          (r.color = (function (t) {
            var n,
              r = 0
            for (n in t) (r = (r << 5) - r + t.charCodeAt(n)), (r |= 0)
            return e.colors[Math.abs(r) % e.colors.length]
          })(t)),
          (r.destroy = i),
          'function' == typeof e.init && e.init(r),
          e.instances.push(r),
          r
        )
      }
      function i() {
        var t = e.instances.indexOf(this)
        return -1 !== t && (e.instances.splice(t, 1), !0)
      }
      ;((e = t.exports = r.debug = r.default = r).coerce = function (t) {
        return t instanceof Error ? t.stack || t.message : t
      }),
        (e.disable = function () {
          e.enable('')
        }),
        (e.enable = function (t) {
          var n
          e.save(t), (e.names = []), (e.skips = [])
          var r = ('string' == typeof t ? t : '').split(/[\s,]+/),
            i = r.length
          for (n = 0; n < i; n++)
            r[n] &&
              ('-' === (t = r[n].replace(/\*/g, '.*?'))[0]
                ? e.skips.push(new RegExp('^' + t.substr(1) + '$'))
                : e.names.push(new RegExp('^' + t + '$')))
          for (n = 0; n < e.instances.length; n++) {
            var s = e.instances[n]
            s.enabled = e.enabled(s.namespace)
          }
        }),
        (e.enabled = function (t) {
          if ('*' === t[t.length - 1]) return !0
          var n, r
          for (n = 0, r = e.skips.length; n < r; n++)
            if (e.skips[n].test(t)) return !1
          for (n = 0, r = e.names.length; n < r; n++)
            if (e.names[n].test(t)) return !0
          return !1
        }),
        (e.humanize = n('5LH7')),
        (e.instances = []),
        (e.names = []),
        (e.skips = []),
        (e.formatters = {})
    },
    QN7Q: function (t, e) {
      var n = [].slice
      t.exports = function (t, e) {
        if (('string' == typeof e && (e = t[e]), 'function' != typeof e))
          throw new Error('bind() requires a function')
        var r = n.call(arguments, 2)
        return function () {
          return e.apply(t, r.concat(n.call(arguments)))
        }
      }
    },
    TypT: function (t, e) {
      ;(e.encode = function (t) {
        var e = ''
        for (var n in t)
          t.hasOwnProperty(n) &&
            (e.length && (e += '&'),
            (e += encodeURIComponent(n) + '=' + encodeURIComponent(t[n])))
        return e
      }),
        (e.decode = function (t) {
          for (var e = {}, n = t.split('&'), r = 0, i = n.length; r < i; r++) {
            var s = n[r].split('=')
            e[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
          }
          return e
        })
    },
    Uxeu: function (t, e) {
      var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ]
      t.exports = function (t) {
        var e,
          i,
          s = t,
          o = t.indexOf('['),
          a = t.indexOf(']')
        ;-1 != o &&
          -1 != a &&
          (t =
            t.substring(0, o) +
            t.substring(o, a).replace(/:/g, ';') +
            t.substring(a, t.length))
        for (var l, c = n.exec(t || ''), u = {}, h = 14; h--; )
          u[r[h]] = c[h] || ''
        return (
          -1 != o &&
            -1 != a &&
            ((u.source = s),
            (u.host = u.host
              .substring(1, u.host.length - 1)
              .replace(/;/g, ':')),
            (u.authority = u.authority
              .replace('[', '')
              .replace(']', '')
              .replace(/;/g, ':')),
            (u.ipv6uri = !0)),
          (u.pathNames =
            ((i = (e = u.path).replace(/\/{2,9}/g, '/').split('/')),
            ('/' != e.substr(0, 1) && 0 !== e.length) || i.splice(0, 1),
            '/' == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1),
            i)),
          (u.queryKey =
            ((l = {}),
            u.query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
              e && (l[e] = n)
            }),
            l)),
          u
        )
      }
    },
    Vo14: function (t, e, n) {
      var r = n('x7D4')('socket.io-parser'),
        i = n('cpc2'),
        s = n('cD5x'),
        o = n('ojuT'),
        a = n('+SKG')
      function l() {}
      ;(e.protocol = 4),
        (e.types = [
          'CONNECT',
          'DISCONNECT',
          'EVENT',
          'ACK',
          'ERROR',
          'BINARY_EVENT',
          'BINARY_ACK',
        ]),
        (e.CONNECT = 0),
        (e.DISCONNECT = 1),
        (e.EVENT = 2),
        (e.ACK = 3),
        (e.ERROR = 4),
        (e.BINARY_EVENT = 5),
        (e.BINARY_ACK = 6),
        (e.Encoder = l),
        (e.Decoder = h)
      var c = e.ERROR + '"encode error"'
      function u(t) {
        var n = '' + t.type
        if (
          ((e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type) ||
            (n += t.attachments + '-'),
          t.nsp && '/' !== t.nsp && (n += t.nsp + ','),
          null != t.id && (n += t.id),
          null != t.data)
        ) {
          var i = (function (t) {
            try {
              return JSON.stringify(t)
            } catch (e) {
              return !1
            }
          })(t.data)
          if (!1 === i) return c
          n += i
        }
        return r('encoded %j as %s', t, n), n
      }
      function h() {
        this.reconstructor = null
      }
      function d(t) {
        ;(this.reconPack = t), (this.buffers = [])
      }
      function p(t) {
        return { type: e.ERROR, data: 'parser error: ' + t }
      }
      ;(l.prototype.encode = function (t, n) {
        r('encoding packet %j', t),
          e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type
            ? (function (t, e) {
                s.removeBlobs(t, function (t) {
                  var n = s.deconstructPacket(t),
                    r = u(n.packet),
                    i = n.buffers
                  i.unshift(r), e(i)
                })
              })(t, n)
            : n([u(t)])
      }),
        i(h.prototype),
        (h.prototype.add = function (t) {
          var n
          if ('string' == typeof t)
            (n = (function (t) {
              var n = 0,
                i = { type: Number(t.charAt(0)) }
              if (null == e.types[i.type])
                return p('unknown packet type ' + i.type)
              if (e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type) {
                for (
                  var s = '';
                  '-' !== t.charAt(++n) && ((s += t.charAt(n)), n != t.length);

                );
                if (s != Number(s) || '-' !== t.charAt(n))
                  throw new Error('Illegal attachments')
                i.attachments = Number(s)
              }
              if ('/' === t.charAt(n + 1))
                for (
                  i.nsp = '';
                  ++n &&
                  ',' !== (l = t.charAt(n)) &&
                  ((i.nsp += l), n !== t.length);

                );
              else i.nsp = '/'
              var a = t.charAt(n + 1)
              if ('' !== a && Number(a) == a) {
                for (i.id = ''; ++n; ) {
                  var l
                  if (null == (l = t.charAt(n)) || Number(l) != l) {
                    --n
                    break
                  }
                  if (((i.id += t.charAt(n)), n === t.length)) break
                }
                i.id = Number(i.id)
              }
              if (t.charAt(++n)) {
                var c = (function (t) {
                  try {
                    return JSON.parse(t)
                  } catch (e) {
                    return !1
                  }
                })(t.substr(n))
                if (!1 === c || (i.type !== e.ERROR && !o(c)))
                  return p('invalid payload')
                i.data = c
              }
              return r('decoded %s as %j', t, i), i
            })(t)),
              e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type
                ? ((this.reconstructor = new d(n)),
                  0 === this.reconstructor.reconPack.attachments &&
                    this.emit('decoded', n))
                : this.emit('decoded', n)
          else {
            if (!a(t) && !t.base64) throw new Error('Unknown type: ' + t)
            if (!this.reconstructor)
              throw new Error(
                'got binary data when not reconstructing a packet'
              )
            ;(n = this.reconstructor.takeBinaryData(t)) &&
              ((this.reconstructor = null), this.emit('decoded', n))
          }
        }),
        (h.prototype.destroy = function () {
          this.reconstructor && this.reconstructor.finishedReconstruction()
        }),
        (d.prototype.takeBinaryData = function (t) {
          if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
          ) {
            var e = s.reconstructPacket(this.reconPack, this.buffers)
            return this.finishedReconstruction(), e
          }
          return null
        }),
        (d.prototype.finishedReconstruction = function () {
          ;(this.reconPack = null), (this.buffers = [])
        })
    },
    WLGk: function (t, e, n) {
      var r = n('ojuT'),
        i = Object.prototype.toString,
        s =
          'function' == typeof Blob ||
          ('undefined' != typeof Blob &&
            '[object BlobConstructor]' === i.call(Blob)),
        o =
          'function' == typeof File ||
          ('undefined' != typeof File &&
            '[object FileConstructor]' === i.call(File))
      t.exports = function t(e) {
        if (!e || 'object' != typeof e) return !1
        if (r(e)) {
          for (var n = 0, i = e.length; n < i; n++) if (t(e[n])) return !0
          return !1
        }
        if (
          ('function' == typeof Buffer &&
            Buffer.isBuffer &&
            Buffer.isBuffer(e)) ||
          ('function' == typeof ArrayBuffer && e instanceof ArrayBuffer) ||
          (s && e instanceof Blob) ||
          (o && e instanceof File)
        )
          return !0
        if (e.toJSON && 'function' == typeof e.toJSON && 1 === arguments.length)
          return t(e.toJSON(), !0)
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a])) return !0
        return !1
      }
    },
    Wm4p: function (t, e, n) {
      var r,
        i = n('dkv/'),
        s = n('WLGk'),
        o = n('ypnn'),
        a = n('zMFY'),
        l = n('oIG/')
      'undefined' != typeof ArrayBuffer && (r = n('g5Dd'))
      var c =
          'undefined' != typeof navigator &&
          /Android/i.test(navigator.userAgent),
        u =
          'undefined' != typeof navigator &&
          /PhantomJS/i.test(navigator.userAgent),
        h = c || u
      e.protocol = 3
      var d = (e.packets = {
          open: 0,
          close: 1,
          ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6,
        }),
        p = i(d),
        f = { type: 'error', data: 'parser error' },
        m = n('14A5')
      function g(t, e, n) {
        for (
          var r = new Array(t.length),
            i = a(t.length, n),
            s = function (t, n, i) {
              e(n, function (e, n) {
                ;(r[t] = n), i(e, r)
              })
            },
            o = 0;
          o < t.length;
          o++
        )
          s(o, t[o], i)
      }
      ;(e.encodePacket = function (t, n, r, i) {
        'function' == typeof n && ((i = n), (n = !1)),
          'function' == typeof r && ((i = r), (r = null))
        var s = void 0 === t.data ? void 0 : t.data.buffer || t.data
        if ('undefined' != typeof ArrayBuffer && s instanceof ArrayBuffer)
          return (function (t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r)
            var i = t.data,
              s = new Uint8Array(i),
              o = new Uint8Array(1 + i.byteLength)
            o[0] = d[t.type]
            for (var a = 0; a < s.length; a++) o[a + 1] = s[a]
            return r(o.buffer)
          })(t, n, i)
        if (void 0 !== m && s instanceof m)
          return (function (t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r)
            if (h)
              return (function (t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r)
                var i = new FileReader()
                return (
                  (i.onload = function () {
                    e.encodePacket({ type: t.type, data: i.result }, n, !0, r)
                  }),
                  i.readAsArrayBuffer(t.data)
                )
              })(t, n, r)
            var i = new Uint8Array(1)
            return (i[0] = d[t.type]), r(new m([i.buffer, t.data]))
          })(t, n, i)
        if (s && s.base64)
          return (function (t, n) {
            return n('b' + e.packets[t.type] + t.data.data)
          })(t, i)
        var o = d[t.type]
        return (
          void 0 !== t.data &&
            (o += r
              ? l.encode(String(t.data), { strict: !1 })
              : String(t.data)),
          i('' + o)
        )
      }),
        (e.encodeBase64Packet = function (t, n) {
          var r,
            i = 'b' + e.packets[t.type]
          if (void 0 !== m && t.data instanceof m) {
            var s = new FileReader()
            return (
              (s.onload = function () {
                var t = s.result.split(',')[1]
                n(i + t)
              }),
              s.readAsDataURL(t.data)
            )
          }
          try {
            r = String.fromCharCode.apply(null, new Uint8Array(t.data))
          } catch (c) {
            for (
              var o = new Uint8Array(t.data), a = new Array(o.length), l = 0;
              l < o.length;
              l++
            )
              a[l] = o[l]
            r = String.fromCharCode.apply(null, a)
          }
          return (i += btoa(r)), n(i)
        }),
        (e.decodePacket = function (t, n, r) {
          if (void 0 === t) return f
          if ('string' == typeof t) {
            if ('b' === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n)
            if (
              r &&
              !1 ===
                (t = (function (t) {
                  try {
                    t = l.decode(t, { strict: !1 })
                  } catch (e) {
                    return !1
                  }
                  return t
                })(t))
            )
              return f
            var i = t.charAt(0)
            return Number(i) == i && p[i]
              ? t.length > 1
                ? { type: p[i], data: t.substring(1) }
                : { type: p[i] }
              : f
          }
          i = new Uint8Array(t)[0]
          var s = o(t, 1)
          return m && 'blob' === n && (s = new m([s])), { type: p[i], data: s }
        }),
        (e.decodeBase64Packet = function (t, e) {
          var n = p[t.charAt(0)]
          if (!r) return { type: n, data: { base64: !0, data: t.substr(1) } }
          var i = r.decode(t.substr(1))
          return 'blob' === e && m && (i = new m([i])), { type: n, data: i }
        }),
        (e.encodePayload = function (t, n, r) {
          'function' == typeof n && ((r = n), (n = null))
          var i = s(t)
          return n && i
            ? m && !h
              ? e.encodePayloadAsBlob(t, r)
              : e.encodePayloadAsArrayBuffer(t, r)
            : t.length
            ? void g(
                t,
                function (t, r) {
                  e.encodePacket(t, !!i && n, !1, function (t) {
                    r(
                      null,
                      (function (t) {
                        return t.length + ':' + t
                      })(t)
                    )
                  })
                },
                function (t, e) {
                  return r(e.join(''))
                }
              )
            : r('0:')
        }),
        (e.decodePayload = function (t, n, r) {
          if ('string' != typeof t) return e.decodePayloadAsBinary(t, n, r)
          var i
          if (('function' == typeof n && ((r = n), (n = null)), '' === t))
            return r(f, 0, 1)
          for (var s, o, a = '', l = 0, c = t.length; l < c; l++) {
            var u = t.charAt(l)
            if (':' === u) {
              if ('' === a || a != (s = Number(a))) return r(f, 0, 1)
              if (a != (o = t.substr(l + 1, s)).length) return r(f, 0, 1)
              if (o.length) {
                if (
                  ((i = e.decodePacket(o, n, !1)),
                  f.type === i.type && f.data === i.data)
                )
                  return r(f, 0, 1)
                if (!1 === r(i, l + s, c)) return
              }
              ;(l += s), (a = '')
            } else a += u
          }
          return '' !== a ? r(f, 0, 1) : void 0
        }),
        (e.encodePayloadAsArrayBuffer = function (t, n) {
          if (!t.length) return n(new ArrayBuffer(0))
          g(
            t,
            function (t, n) {
              e.encodePacket(t, !0, !0, function (t) {
                return n(null, t)
              })
            },
            function (t, e) {
              var r = e.reduce(function (t, e) {
                  var n
                  return (
                    t +
                    (n =
                      'string' == typeof e ? e.length : e.byteLength).toString()
                      .length +
                    n +
                    2
                  )
                }, 0),
                i = new Uint8Array(r),
                s = 0
              return (
                e.forEach(function (t) {
                  var e = 'string' == typeof t,
                    n = t
                  if (e) {
                    for (
                      var r = new Uint8Array(t.length), o = 0;
                      o < t.length;
                      o++
                    )
                      r[o] = t.charCodeAt(o)
                    n = r.buffer
                  }
                  i[s++] = e ? 0 : 1
                  var a = n.byteLength.toString()
                  for (o = 0; o < a.length; o++) i[s++] = parseInt(a[o])
                  for (
                    i[s++] = 255, r = new Uint8Array(n), o = 0;
                    o < r.length;
                    o++
                  )
                    i[s++] = r[o]
                }),
                n(i.buffer)
              )
            }
          )
        }),
        (e.encodePayloadAsBlob = function (t, n) {
          g(
            t,
            function (t, n) {
              e.encodePacket(t, !0, !0, function (t) {
                var e = new Uint8Array(1)
                if (((e[0] = 1), 'string' == typeof t)) {
                  for (
                    var r = new Uint8Array(t.length), i = 0;
                    i < t.length;
                    i++
                  )
                    r[i] = t.charCodeAt(i)
                  ;(t = r.buffer), (e[0] = 0)
                }
                var s = (t instanceof ArrayBuffer
                    ? t.byteLength
                    : t.size
                  ).toString(),
                  o = new Uint8Array(s.length + 1)
                for (i = 0; i < s.length; i++) o[i] = parseInt(s[i])
                if (((o[s.length] = 255), m)) {
                  var a = new m([e.buffer, o.buffer, t])
                  n(null, a)
                }
              })
            },
            function (t, e) {
              return n(new m(e))
            }
          )
        }),
        (e.decodePayloadAsBinary = function (t, n, r) {
          'function' == typeof n && ((r = n), (n = null))
          for (var i = t, s = []; i.byteLength > 0; ) {
            for (
              var a = new Uint8Array(i), l = 0 === a[0], c = '', u = 1;
              255 !== a[u];
              u++
            ) {
              if (c.length > 310) return r(f, 0, 1)
              c += a[u]
            }
            ;(i = o(i, 2 + c.length)), (c = parseInt(c))
            var h = o(i, 0, c)
            if (l)
              try {
                h = String.fromCharCode.apply(null, new Uint8Array(h))
              } catch (m) {
                var d = new Uint8Array(h)
                for (h = '', u = 0; u < d.length; u++)
                  h += String.fromCharCode(d[u])
              }
            s.push(h), (i = o(i, c))
          }
          var p = s.length
          s.forEach(function (t, i) {
            r(e.decodePacket(t, n, !0), i, p)
          })
        })
    },
    Yvos: function (t, e) {
      t.exports = function (t, e) {
        var n = function () {}
        ;(n.prototype = e.prototype),
          (t.prototype = new n()),
          (t.prototype.constructor = t)
      }
    },
    akSB: function (t, e, n) {
      var r = n('AdPF'),
        i = n('0z79'),
        s = n('Cl5A'),
        o = n('CIKq')
      ;(e.polling = function (t) {
        var e = !1,
          n = !1,
          o = !1 !== t.jsonp
        if ('undefined' != typeof location) {
          var a = 'https:' === location.protocol,
            l = location.port
          l || (l = a ? 443 : 80),
            (e = t.hostname !== location.hostname || l !== t.port),
            (n = t.secure !== a)
        }
        if (
          ((t.xdomain = e),
          (t.xscheme = n),
          'open' in new r(t) && !t.forceJSONP)
        )
          return new i(t)
        if (!o) throw new Error('JSONP disabled')
        return new s(t)
      }),
        (e.websocket = o)
    },
    cD5x: function (t, e, n) {
      var r = n('ojuT'),
        i = n('+SKG'),
        s = Object.prototype.toString,
        o =
          'function' == typeof Blob ||
          ('undefined' != typeof Blob &&
            '[object BlobConstructor]' === s.call(Blob)),
        a =
          'function' == typeof File ||
          ('undefined' != typeof File &&
            '[object FileConstructor]' === s.call(File))
      function l(t, e) {
        if (!t) return t
        if (i(t)) {
          var n = { _placeholder: !0, num: e.length }
          return e.push(t), n
        }
        if (r(t)) {
          for (var s = new Array(t.length), o = 0; o < t.length; o++)
            s[o] = l(t[o], e)
          return s
        }
        if ('object' == typeof t && !(t instanceof Date)) {
          for (var a in ((s = {}), t)) s[a] = l(t[a], e)
          return s
        }
        return t
      }
      function c(t, e) {
        if (!t) return t
        if (t && t._placeholder) return e[t.num]
        if (r(t)) for (var n = 0; n < t.length; n++) t[n] = c(t[n], e)
        else if ('object' == typeof t) for (var i in t) t[i] = c(t[i], e)
        return t
      }
      ;(e.deconstructPacket = function (t) {
        var e = [],
          n = t
        return (
          (n.data = l(t.data, e)),
          (n.attachments = e.length),
          { packet: n, buffers: e }
        )
      }),
        (e.reconstructPacket = function (t, e) {
          return (t.data = c(t.data, e)), (t.attachments = void 0), t
        }),
        (e.removeBlobs = function (t, e) {
          var n = 0,
            s = t
          !(function t(l, c, u) {
            if (!l) return l
            if ((o && l instanceof Blob) || (a && l instanceof File)) {
              n++
              var h = new FileReader()
              ;(h.onload = function () {
                u ? (u[c] = this.result) : (s = this.result), --n || e(s)
              }),
                h.readAsArrayBuffer(l)
            } else if (r(l)) for (var d = 0; d < l.length; d++) t(l[d], d, l)
            else if ('object' == typeof l && !i(l))
              for (var p in l) t(l[p], p, l)
          })(s),
            n || e(s)
        })
    },
    cpc2: function (t, e, n) {
      function r(t) {
        if (t)
          return (function (t) {
            for (var e in r.prototype) t[e] = r.prototype[e]
            return t
          })(t)
      }
      ;(t.exports = r),
        (r.prototype.on = r.prototype.addEventListener = function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
            this
          )
        }),
        (r.prototype.once = function (t, e) {
          function n() {
            this.off(t, n), e.apply(this, arguments)
          }
          return (n.fn = e), this.on(t, n), this
        }),
        (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (
          t,
          e
        ) {
          if (
            ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
          )
            return (this._callbacks = {}), this
          var n,
            r = this._callbacks['$' + t]
          if (!r) return this
          if (1 == arguments.length)
            return delete this._callbacks['$' + t], this
          for (var i = 0; i < r.length; i++)
            if ((n = r[i]) === e || n.fn === e) {
              r.splice(i, 1)
              break
            }
          return 0 === r.length && delete this._callbacks['$' + t], this
        }),
        (r.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {}
          for (
            var e = new Array(arguments.length - 1),
              n = this._callbacks['$' + t],
              r = 1;
            r < arguments.length;
            r++
          )
            e[r - 1] = arguments[r]
          if (n) {
            r = 0
            for (var i = (n = n.slice(0)).length; r < i; ++r)
              n[r].apply(this, e)
          }
          return this
        }),
        (r.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks['$' + t] || []
          )
        }),
        (r.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length
        })
    },
    'dkv/': function (t, e) {
      t.exports =
        Object.keys ||
        function (t) {
          var e = [],
            n = Object.prototype.hasOwnProperty
          for (var r in t) n.call(t, r) && e.push(r)
          return e
        }
    },
    eOtv: function (t, e, n) {
      var r = n('lKxJ'),
        i = n('KFGy'),
        s = n('cpc2'),
        o = n('Vo14'),
        a = n('2Dig'),
        l = n('QN7Q'),
        c = n('x7D4')('socket.io-client:manager'),
        u = n('7jRU'),
        h = n('C2QD'),
        d = Object.prototype.hasOwnProperty
      function p(t, e) {
        if (!(this instanceof p)) return new p(t, e)
        t && 'object' == typeof t && ((e = t), (t = void 0)),
          ((e = e || {}).path = e.path || '/socket.io'),
          (this.nsps = {}),
          (this.subs = []),
          (this.opts = e),
          this.reconnection(!1 !== e.reconnection),
          this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(e.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
          this.randomizationFactor(e.randomizationFactor || 0.5),
          (this.backoff = new h({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
          })),
          this.timeout(null == e.timeout ? 2e4 : e.timeout),
          (this.readyState = 'closed'),
          (this.uri = t),
          (this.connecting = []),
          (this.lastPing = null),
          (this.encoding = !1),
          (this.packetBuffer = [])
        var n = e.parser || o
        ;(this.encoder = new n.Encoder()),
          (this.decoder = new n.Decoder()),
          (this.autoConnect = !1 !== e.autoConnect),
          this.autoConnect && this.open()
      }
      ;(t.exports = p),
        (p.prototype.emitAll = function () {
          for (var t in (this.emit.apply(this, arguments), this.nsps))
            d.call(this.nsps, t) &&
              this.nsps[t].emit.apply(this.nsps[t], arguments)
        }),
        (p.prototype.updateSocketIds = function () {
          for (var t in this.nsps)
            d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
        }),
        (p.prototype.generateId = function (t) {
          return ('/' === t ? '' : t + '#') + this.engine.id
        }),
        s(p.prototype),
        (p.prototype.reconnection = function (t) {
          return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection
        }),
        (p.prototype.reconnectionAttempts = function (t) {
          return arguments.length
            ? ((this._reconnectionAttempts = t), this)
            : this._reconnectionAttempts
        }),
        (p.prototype.reconnectionDelay = function (t) {
          return arguments.length
            ? ((this._reconnectionDelay = t),
              this.backoff && this.backoff.setMin(t),
              this)
            : this._reconnectionDelay
        }),
        (p.prototype.randomizationFactor = function (t) {
          return arguments.length
            ? ((this._randomizationFactor = t),
              this.backoff && this.backoff.setJitter(t),
              this)
            : this._randomizationFactor
        }),
        (p.prototype.reconnectionDelayMax = function (t) {
          return arguments.length
            ? ((this._reconnectionDelayMax = t),
              this.backoff && this.backoff.setMax(t),
              this)
            : this._reconnectionDelayMax
        }),
        (p.prototype.timeout = function (t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout
        }),
        (p.prototype.maybeReconnectOnOpen = function () {
          !this.reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect()
        }),
        (p.prototype.open = p.prototype.connect = function (t, e) {
          if (
            (c('readyState %s', this.readyState),
            ~this.readyState.indexOf('open'))
          )
            return this
          c('opening %s', this.uri), (this.engine = r(this.uri, this.opts))
          var n = this.engine,
            i = this
          ;(this.readyState = 'opening'), (this.skipReconnect = !1)
          var s = a(n, 'open', function () {
              i.onopen(), t && t()
            }),
            o = a(n, 'error', function (e) {
              if (
                (c('connect_error'),
                i.cleanup(),
                (i.readyState = 'closed'),
                i.emitAll('connect_error', e),
                t)
              ) {
                var n = new Error('Connection error')
                ;(n.data = e), t(n)
              } else i.maybeReconnectOnOpen()
            })
          if (!1 !== this._timeout) {
            var l = this._timeout
            c('connect attempt will timeout after %d', l),
              0 === l && s.destroy()
            var u = setTimeout(function () {
              c('connect attempt timed out after %d', l),
                s.destroy(),
                n.close(),
                n.emit('error', 'timeout'),
                i.emitAll('connect_timeout', l)
            }, l)
            this.subs.push({
              destroy: function () {
                clearTimeout(u)
              },
            })
          }
          return this.subs.push(s), this.subs.push(o), this
        }),
        (p.prototype.onopen = function () {
          c('open'),
            this.cleanup(),
            (this.readyState = 'open'),
            this.emit('open')
          var t = this.engine
          this.subs.push(a(t, 'data', l(this, 'ondata'))),
            this.subs.push(a(t, 'ping', l(this, 'onping'))),
            this.subs.push(a(t, 'pong', l(this, 'onpong'))),
            this.subs.push(a(t, 'error', l(this, 'onerror'))),
            this.subs.push(a(t, 'close', l(this, 'onclose'))),
            this.subs.push(a(this.decoder, 'decoded', l(this, 'ondecoded')))
        }),
        (p.prototype.onping = function () {
          ;(this.lastPing = new Date()), this.emitAll('ping')
        }),
        (p.prototype.onpong = function () {
          this.emitAll('pong', new Date() - this.lastPing)
        }),
        (p.prototype.ondata = function (t) {
          this.decoder.add(t)
        }),
        (p.prototype.ondecoded = function (t) {
          this.emit('packet', t)
        }),
        (p.prototype.onerror = function (t) {
          c('error', t), this.emitAll('error', t)
        }),
        (p.prototype.socket = function (t, e) {
          var n = this.nsps[t]
          if (!n) {
            ;(n = new i(this, t, e)), (this.nsps[t] = n)
            var r = this
            n.on('connecting', s),
              n.on('connect', function () {
                n.id = r.generateId(t)
              }),
              this.autoConnect && s()
          }
          function s() {
            ~u(r.connecting, n) || r.connecting.push(n)
          }
          return n
        }),
        (p.prototype.destroy = function (t) {
          var e = u(this.connecting, t)
          ~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close()
        }),
        (p.prototype.packet = function (t) {
          c('writing packet %j', t)
          var e = this
          t.query && 0 === t.type && (t.nsp += '?' + t.query),
            e.encoding
              ? e.packetBuffer.push(t)
              : ((e.encoding = !0),
                this.encoder.encode(t, function (n) {
                  for (var r = 0; r < n.length; r++)
                    e.engine.write(n[r], t.options)
                  ;(e.encoding = !1), e.processPacketQueue()
                }))
        }),
        (p.prototype.processPacketQueue = function () {
          if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift()
            this.packet(t)
          }
        }),
        (p.prototype.cleanup = function () {
          c('cleanup')
          for (var t = this.subs.length, e = 0; e < t; e++)
            this.subs.shift().destroy()
          ;(this.packetBuffer = []),
            (this.encoding = !1),
            (this.lastPing = null),
            this.decoder.destroy()
        }),
        (p.prototype.close = p.prototype.disconnect = function () {
          c('disconnect'),
            (this.skipReconnect = !0),
            (this.reconnecting = !1),
            'opening' === this.readyState && this.cleanup(),
            this.backoff.reset(),
            (this.readyState = 'closed'),
            this.engine && this.engine.close()
        }),
        (p.prototype.onclose = function (t) {
          c('onclose'),
            this.cleanup(),
            this.backoff.reset(),
            (this.readyState = 'closed'),
            this.emit('close', t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }),
        (p.prototype.reconnect = function () {
          if (this.reconnecting || this.skipReconnect) return this
          var t = this
          if (this.backoff.attempts >= this._reconnectionAttempts)
            c('reconnect failed'),
              this.backoff.reset(),
              this.emitAll('reconnect_failed'),
              (this.reconnecting = !1)
          else {
            var e = this.backoff.duration()
            c('will wait %dms before reconnect attempt', e),
              (this.reconnecting = !0)
            var n = setTimeout(function () {
              t.skipReconnect ||
                (c('attempting reconnect'),
                t.emitAll('reconnect_attempt', t.backoff.attempts),
                t.emitAll('reconnecting', t.backoff.attempts),
                t.skipReconnect ||
                  t.open(function (e) {
                    e
                      ? (c('reconnect attempt error'),
                        (t.reconnecting = !1),
                        t.reconnect(),
                        t.emitAll('reconnect_error', e.data))
                      : (c('reconnect success'), t.onreconnect())
                  }))
            }, e)
            this.subs.push({
              destroy: function () {
                clearTimeout(n)
              },
            })
          }
        }),
        (p.prototype.onreconnect = function () {
          var t = this.backoff.attempts
          ;(this.reconnecting = !1),
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll('reconnect', t)
        })
    },
    g5Dd: function (t, e) {
      !(function (t) {
        'use strict'
        ;(e.encode = function (e) {
          var n,
            r = new Uint8Array(e),
            i = r.length,
            s = ''
          for (n = 0; n < i; n += 3)
            (s += t[r[n] >> 2]),
              (s += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
              (s += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
              (s += t[63 & r[n + 2]])
          return (
            i % 3 == 2
              ? (s = s.substring(0, s.length - 1) + '=')
              : i % 3 == 1 && (s = s.substring(0, s.length - 2) + '=='),
            s
          )
        }),
          (e.decode = function (e) {
            var n,
              r,
              i,
              s,
              o,
              a = 0.75 * e.length,
              l = e.length,
              c = 0
            '=' === e[e.length - 1] && (a--, '=' === e[e.length - 2] && a--)
            var u = new ArrayBuffer(a),
              h = new Uint8Array(u)
            for (n = 0; n < l; n += 4)
              (r = t.indexOf(e[n])),
                (i = t.indexOf(e[n + 1])),
                (s = t.indexOf(e[n + 2])),
                (o = t.indexOf(e[n + 3])),
                (h[c++] = (r << 2) | (i >> 4)),
                (h[c++] = ((15 & i) << 4) | (s >> 2)),
                (h[c++] = ((3 & s) << 6) | (63 & o))
            return u
          })
      })('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')
    },
    gFX4: function (t, e, n) {
      var r = n('zJ60'),
        i = n('Vo14'),
        s = n('eOtv'),
        o = n('x7D4')('socket.io-client')
      t.exports = e = l
      var a = (e.managers = {})
      function l(t, e) {
        'object' == typeof t && ((e = t), (t = void 0)), (e = e || {})
        var n,
          i = r(t),
          l = i.source,
          c = i.id
        return (
          e.forceNew ||
          e['force new connection'] ||
          !1 === e.multiplex ||
          (a[c] && i.path in a[c].nsps)
            ? (o('ignoring socket cache for %s', l), (n = s(l, e)))
            : (a[c] || (o('new io instance for %s', l), (a[c] = s(l, e))),
              (n = a[c])),
          i.query && !e.query && (e.query = i.query),
          n.socket(i.path, e)
        )
      }
      ;(e.protocol = i.protocol),
        (e.connect = l),
        (e.Manager = n('eOtv')),
        (e.Socket = n('KFGy'))
    },
    kSER: function (t, e) {
      t.exports = function (t, e) {
        for (var n = [], r = (e = e || 0) || 0; r < t.length; r++)
          n[r - e] = t[r]
        return n
      }
    },
    lKxJ: function (t, e, n) {
      ;(t.exports = n('2pII')), (t.exports.parser = n('Wm4p'))
    },
    'oIG/': function (t, e) {
      var n,
        r,
        i,
        s = String.fromCharCode
      function o(t) {
        for (var e, n, r = [], i = 0, s = t.length; i < s; )
          (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < s
            ? 56320 == (64512 & (n = t.charCodeAt(i++)))
              ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
              : (r.push(e), i--)
            : r.push(e)
        return r
      }
      function a(t, e) {
        if (t >= 55296 && t <= 57343) {
          if (e)
            throw Error(
              'Lone surrogate U+' +
                t.toString(16).toUpperCase() +
                ' is not a scalar value'
            )
          return !1
        }
        return !0
      }
      function l(t, e) {
        return s(((t >> e) & 63) | 128)
      }
      function c(t, e) {
        if (0 == (4294967168 & t)) return s(t)
        var n = ''
        return (
          0 == (4294965248 & t)
            ? (n = s(((t >> 6) & 31) | 192))
            : 0 == (4294901760 & t)
            ? (a(t, e) || (t = 65533),
              (n = s(((t >> 12) & 15) | 224)),
              (n += l(t, 6)))
            : 0 == (4292870144 & t) &&
              ((n = s(((t >> 18) & 7) | 240)), (n += l(t, 12)), (n += l(t, 6))),
          n + s((63 & t) | 128)
        )
      }
      function u() {
        if (i >= r) throw Error('Invalid byte index')
        var t = 255 & n[i]
        if ((i++, 128 == (192 & t))) return 63 & t
        throw Error('Invalid continuation byte')
      }
      function h(t) {
        var e, s
        if (i > r) throw Error('Invalid byte index')
        if (i == r) return !1
        if (((e = 255 & n[i]), i++, 0 == (128 & e))) return e
        if (192 == (224 & e)) {
          if ((s = ((31 & e) << 6) | u()) >= 128) return s
          throw Error('Invalid continuation byte')
        }
        if (224 == (240 & e)) {
          if ((s = ((15 & e) << 12) | (u() << 6) | u()) >= 2048)
            return a(s, t) ? s : 65533
          throw Error('Invalid continuation byte')
        }
        if (
          240 == (248 & e) &&
          (s = ((7 & e) << 18) | (u() << 12) | (u() << 6) | u()) >= 65536 &&
          s <= 1114111
        )
          return s
        throw Error('Invalid UTF-8 detected')
      }
      t.exports = {
        version: '2.1.2',
        encode: function (t, e) {
          for (
            var n = !1 !== (e = e || {}).strict,
              r = o(t),
              i = r.length,
              s = -1,
              a = '';
            ++s < i;

          )
            a += c(r[s], n)
          return a
        },
        decode: function (t, e) {
          var a = !1 !== (e = e || {}).strict
          ;(n = o(t)), (r = n.length), (i = 0)
          for (var l, c = []; !1 !== (l = h(a)); ) c.push(l)
          return (function (t) {
            for (var e, n = t.length, r = -1, i = ''; ++r < n; )
              (e = t[r]) > 65535 &&
                ((i += s((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
                (i += s(e))
            return i
          })(c)
        },
      }
    },
    ojuT: function (t, e) {
      var n = {}.toString
      t.exports =
        Array.isArray ||
        function (t) {
          return '[object Array]' == n.call(t)
        }
    },
    x7D4: function (t, e, n) {
      function r() {
        var t
        try {
          t = e.storage.debug
        } catch (n) {}
        return (
          !t &&
            'undefined' != typeof process &&
            'env' in process &&
            (t = process.env.DEBUG),
          t
        )
      }
      ;((e = t.exports = n('Q80o')).log = function () {
        return (
          'object' == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        )
      }),
        (e.formatArgs = function (t) {
          var n = this.useColors
          if (
            ((t[0] =
              (n ? '%c' : '') +
              this.namespace +
              (n ? ' %c' : ' ') +
              t[0] +
              (n ? '%c ' : ' ') +
              '+' +
              e.humanize(this.diff)),
            n)
          ) {
            var r = 'color: ' + this.color
            t.splice(1, 0, r, 'color: inherit')
            var i = 0,
              s = 0
            t[0].replace(/%[a-zA-Z%]/g, function (t) {
              '%%' !== t && (i++, '%c' === t && (s = i))
            }),
              t.splice(s, 0, r)
          }
        }),
        (e.save = function (t) {
          try {
            null == t ? e.storage.removeItem('debug') : (e.storage.debug = t)
          } catch (n) {}
        }),
        (e.load = r),
        (e.useColors = function () {
          return (
            !(
              'undefined' == typeof window ||
              !window.process ||
              'renderer' !== window.process.type
            ) ||
            (('undefined' == typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (('undefined' != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ('undefined' != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          )
        }),
        (e.storage =
          'undefined' != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage
                } catch (t) {}
              })()),
        (e.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (e.formatters.j = function (t) {
          try {
            return JSON.stringify(t)
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message
          }
        }),
        e.enable(r())
    },
    xb4r: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })
      }
      ;(n.keys = function () {
        return []
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'xb4r')
    },
    yeub: function (t, e) {
      try {
        t.exports =
          'undefined' != typeof XMLHttpRequest &&
          'withCredentials' in new XMLHttpRequest()
      } catch (n) {
        t.exports = !1
      }
    },
    ypnn: function (t, e) {
      t.exports = function (t, e, n) {
        var r = t.byteLength
        if (((e = e || 0), (n = n || r), t.slice)) return t.slice(e, n)
        if (
          (e < 0 && (e += r),
          n < 0 && (n += r),
          n > r && (n = r),
          e >= r || e >= n || 0 === r)
        )
          return new ArrayBuffer(0)
        for (
          var i = new Uint8Array(t), s = new Uint8Array(n - e), o = e, a = 0;
          o < n;
          o++, a++
        )
          s[a] = i[o]
        return s.buffer
      }
    },
    zJ60: function (t, e, n) {
      var r = n('Uxeu'),
        i = n('x7D4')('socket.io-client:url')
      t.exports = function (t, e) {
        var n = t
        ;(e = e || ('undefined' != typeof location && location)),
          null == t && (t = e.protocol + '//' + e.host),
          'string' == typeof t &&
            ('/' === t.charAt(0) &&
              (t = '/' === t.charAt(1) ? e.protocol + t : e.host + t),
            /^(https?|wss?):\/\//.test(t) ||
              (i('protocol-less url %s', t),
              (t = void 0 !== e ? e.protocol + '//' + t : 'https://' + t)),
            i('parse %s', t),
            (n = r(t))),
          n.port ||
            (/^(http|ws)$/.test(n.protocol)
              ? (n.port = '80')
              : /^(http|ws)s$/.test(n.protocol) && (n.port = '443')),
          (n.path = n.path || '/')
        var s = -1 !== n.host.indexOf(':') ? '[' + n.host + ']' : n.host
        return (
          (n.id = n.protocol + '://' + s + ':' + n.port),
          (n.href =
            n.protocol +
            '://' +
            s +
            (e && e.port === n.port ? '' : ':' + n.port)),
          n
        )
      }
    },
    zMFY: function (t, e) {
      function n() {}
      t.exports = function (t, e, r) {
        var i = !1
        return (r = r || n), (s.count = t), 0 === t ? e() : s
        function s(t, n) {
          if (s.count <= 0) throw new Error('after called too many times')
          --s.count,
            t ? ((i = !0), e(t), (e = r)) : 0 !== s.count || i || e(null, n)
        }
      }
    },
  },
  [[0, 0]],
])
