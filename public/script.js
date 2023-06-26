const _0xcdfb36 = _0x386d;
(function (_0x415447, _0x805380) {
  const _0x3d4b16 = _0x386d,
    _0x2ddbe7 = _0x415447();
  while (!![]) {
    try {
      const _0x24f4d3 =
        parseInt(_0x3d4b16(0x1c2)) / 0x1 +
        (parseInt(_0x3d4b16(0x1cc)) / 0x2) *
          (-parseInt(_0x3d4b16(0x1dc)) / 0x3) +
        parseInt(_0x3d4b16(0x1db)) / 0x4 +
        parseInt(_0x3d4b16(0x1cd)) / 0x5 +
        (-parseInt(_0x3d4b16(0x1d8)) / 0x6) *
          (parseInt(_0x3d4b16(0x1d5)) / 0x7) +
        parseInt(_0x3d4b16(0x1c5)) / 0x8 +
        (-parseInt(_0x3d4b16(0x1e0)) / 0x9) *
          (parseInt(_0x3d4b16(0x1da)) / 0xa);
      if (_0x24f4d3 === _0x805380) break;
      else _0x2ddbe7["push"](_0x2ddbe7["shift"]());
    } catch (_0x3b3986) {
      _0x2ddbe7["push"](_0x2ddbe7["shift"]());
    }
  }
})(_0x30cb, 0x43c80);
function _0x386d(_0x5ad5c3, _0x4a5bb0) {
  const _0x30cbae = _0x30cb();
  return (
    (_0x386d = function (_0x386d74, _0x5893fd) {
      _0x386d74 = _0x386d74 - 0x1c1;
      let _0x299dc3 = _0x30cbae[_0x386d74];
      return _0x299dc3;
    }),
    _0x386d(_0x5ad5c3, _0x4a5bb0)
  );
}
let disabled = ![],
  timeouts = [];
document["getElementById"](_0xcdfb36(0x1e2))[_0xcdfb36(0x1ce)](
  "click",
  getEventListener(0x64)
),
  document[_0xcdfb36(0x1d0)]("pay250")[_0xcdfb36(0x1ce)](
    _0xcdfb36(0x1d6),
    getEventListener(0xfa)
  ),
  document[_0xcdfb36(0x1d0)](_0xcdfb36(0x1e1))[_0xcdfb36(0x1ce)](
    _0xcdfb36(0x1d6),
    getEventListener(0x1f4)
  ),
  document["getElementById"](_0xcdfb36(0x1c7))[_0xcdfb36(0x1ce)](
    "click",
    getEventListener(0x3e8)
  ),
  document[_0xcdfb36(0x1d0)](_0xcdfb36(0x1c4))["addEventListener"](
    _0xcdfb36(0x1d6),
    getEventListener(0x9c4)
  ),
  document[_0xcdfb36(0x1d0)]("pay5000")[_0xcdfb36(0x1ce)](
    _0xcdfb36(0x1d6),
    getEventListener(0x1388)
  ),
  document["getElementById"](_0xcdfb36(0x1d2))[_0xcdfb36(0x1ce)](
    _0xcdfb36(0x1d6),
    getEventListener(0x1d4c)
  ),
  document[_0xcdfb36(0x1d0)](_0xcdfb36(0x1cb))[_0xcdfb36(0x1ce)](
    _0xcdfb36(0x1d6),
    getEventListener(0x2710)
  );
function _0x30cb() {
  const _0x496934 = [
    "innerHTML",
    "getElementById",
    "length",
    "pay7500",
    "POST",
    "finally",
    "413GLIpwk",
    "click",
    "json",
    "16950DhtwfF",
    "forEach",
    "377950CqmvyE",
    "877460zlstNQ",
    "156Kggziu",
    "catch",
    "then",
    "Please\x20wait",
    "18ccNSzK",
    "pay500",
    "pay100",
    "/api/create-checkout-session",
    "368497bsvUAB",
    "push",
    "pay2500",
    "2085688zuFZJQ",
    "application/json",
    "pay1000",
    "reject",
    "message",
    "error",
    "pay10000",
    "13738BqjMzh",
    "142560rVuALA",
    "addEventListener",
  ];
  _0x30cb = function () {
    return _0x496934;
  };
  return _0x30cb();
}
function getEventListener(_0x15cb22) {
  return (_0x13993d) => {
    const _0x4960d7 = _0x386d,
      _0x1072cb = document[_0x4960d7(0x1d0)](_0x4960d7(0x1ca));
    _0x1072cb[_0x4960d7(0x1cf)] = "";
    if (disabled) {
      _0x1072cb[_0x4960d7(0x1cf)] = _0x4960d7(0x1df);
      return;
    }
    timeouts[_0x4960d7(0x1d1)] &&
      timeouts[_0x4960d7(0x1d9)]((_0x38b263) => clearTimeout(_0x38b263)),
      (disabled = !![]),
      fetch(_0x4960d7(0x1c1), {
        method: _0x4960d7(0x1d3),
        headers: { "Content-Type": _0x4960d7(0x1c6) },
        body: JSON["stringify"]({ amount: _0x15cb22 }),
      })
        ["then"]((_0x59d6da) => {
          const _0x222950 = _0x4960d7;
          if (_0x59d6da["ok"]) return _0x59d6da[_0x222950(0x1d7)]();
          return _0x59d6da[_0x222950(0x1d7)]()["then"]((_0x23a38f) =>
            Promise[_0x222950(0x1c8)](_0x23a38f)
          );
        })
        [_0x4960d7(0x1de)](({ url: _0x1d7d82 }) => {
          window["location"] = _0x1d7d82;
        })
        [_0x4960d7(0x1dd)]((_0x3379b1) => {
          const _0xd63434 = _0x4960d7,
            _0x5ddee5 = document["getElementById"](_0xd63434(0x1ca));
          _0x5ddee5[_0xd63434(0x1cf)] = _0x3379b1[_0xd63434(0x1c9)];
          let _0x241499 = setTimeout(() => {
            const _0x226f46 = _0xd63434;
            _0x5ddee5[_0x226f46(0x1cf)] = "";
          }, 0x2710);
          timeouts[_0xd63434(0x1c3)](_0x241499);
        })
        [_0x4960d7(0x1d4)](() => {
          const _0x1770b7 = _0x4960d7;
          let _0x5ab103 = setTimeout(() => {
            disabled = ![];
          }, 0x3e8);
          timeouts[_0x1770b7(0x1c3)](_0x5ab103);
        });
  };
}
