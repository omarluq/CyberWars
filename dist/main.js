(function(){var __webpack_modules__={579:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval("var Game = __webpack_require__(273);\n\nvar Mc = __webpack_require__(208);\n\nwindow.mc = Mc;\nvar mc = new Mc();\nvar gamebg = new Image();\ngamebg.src = \"./imgs/background/background.jpeg\";\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canv = document.getElementById('canvas');\n  var ctx = canv.getContext('2d');\n  canv.width = 1080;\n  canv.height = window.innerHeight;\n  var game = new Game(ctx, mc);\n  game.start(gamebg, canvas);\n  var n = 0;\n  var i = 20;\n  var j = this.y;\n  var b = 0;\n  document.addEventListener('keydown', function () {\n    if (event.code === 'ArrowRight') {\n      mc.movef(ctx, gamebg, canvas, n, i);\n      n++;\n      if (i < 1000) i += 10;\n      if (n === 33) n = 1;\n      b = 0;\n    }\n\n    if (event.code === 'ArrowLeft') {\n      mc.moveb(ctx, gamebg, canvas, n, i);\n      n++;\n      if (i > -100) i -= 10;\n      if (n === 33) n = 1;\n      b = 0;\n    }\n\n    if (event.code === 'Space') {\n      setInterval(function () {\n        mc.jump(ctx, gamebg, canvas, b, mc.x, j);\n        b++;\n        if (j < 330) j -= 5;else {\n          j = 350;\n        }\n        if (b === 33) b = 0;\n      }, 50);\n    }\n\n    if (event.code === 'ArrowDown') {\n      if (mc.left) {\n        mc.down(ctx, gamebg, canvas, b, i, mc.y);\n        mc.y--;\n        b++;\n        if (i > -100) i -= 10;\n        if (b === 16) b = 0;\n      }\n    }\n\n    if (event.code === 'KeyQ') {\n      if (mc.left) {\n        var int = setInterval(function () {\n          mc.attack(ctx, gamebg, canvas, b);\n          b++;\n\n          if (b === 16) {\n            clearInterval(int);\n            b === 0;\n          }\n        }, 50);\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQzRCLElBQVAsRUFBYTtBQUNUNUIsUUFBQUEsRUFBRSxDQUFDNkIsSUFBSCxDQUFRckIsR0FBUixFQUFhUCxNQUFiLEVBQXFCYyxNQUFyQixFQUE2QkssQ0FBN0IsRUFBZ0NILENBQWhDLEVBQW1DakIsRUFBRSxDQUFDbUIsQ0FBdEM7QUFDQ25CLFFBQUFBLEVBQUUsQ0FBQ21CLENBQUg7QUFDQUMsUUFBQUEsQ0FBQztBQUNELFlBQUlILENBQUMsR0FBRyxDQUFDLEdBQVQsRUFBY0EsQ0FBQyxJQUFJLEVBQUw7QUFDZCxZQUFJRyxDQUFDLEtBQUssRUFBVixFQUFjQSxDQUFDLEdBQUcsQ0FBSjtBQUNqQjtBQUNKOztBQUVELFFBQUlDLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLFVBQUl0QixFQUFFLENBQUM0QixJQUFQLEVBQWE7QUFDYixZQUFJRSxHQUFHLEdBQUdMLFdBQVcsQ0FBQyxZQUFVO0FBQ3hCekIsVUFBQUEsRUFBRSxDQUFDK0IsTUFBSCxDQUFVdkIsR0FBVixFQUFlUCxNQUFmLEVBQXVCYyxNQUF2QixFQUErQkssQ0FBL0I7QUFDQUEsVUFBQUEsQ0FBQzs7QUFDRCxjQUFJQSxDQUFDLEtBQUssRUFBVixFQUFjO0FBQ1ZZLFlBQUFBLGFBQWEsQ0FBQ0YsR0FBRCxDQUFiO0FBQ0FWLFlBQUFBLENBQUMsS0FBSyxDQUFOO0FBQ0g7QUFDSixTQVBnQixFQU9kLEVBUGMsQ0FBckI7QUFTQztBQUNKO0FBS0osR0F0REQ7QUE4REgsQ0E1RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DeWJlcldhcnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9zY3JpcHRzL2dhbWUnKVxuY29uc3QgTWMgPSByZXF1aXJlKCcuL3NjcmlwdHMvbWMnKVxud2luZG93Lm1jID0gTWNcblxubGV0IG1jID0gbmV3IE1jKClcblxubGV0IGdhbWViZyA9IG5ldyBJbWFnZSgpXG5nYW1lYmcuc3JjID0gXCIuL2ltZ3MvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpwZWdcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICAgIFxuICAgIGxldCBjYW52ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpXG4gICAgbGV0IGN0eCA9IGNhbnYuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnYud2lkdGggPSAxMDgwXG4gICAgY2Fudi5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgbWMpXG4gICAgZ2FtZS5zdGFydChnYW1lYmcsIGNhbnZhcylcblxuICAgIGxldCBuID0gMFxuICAgIGxldCBpID0gMjAgXG4gICAgbGV0IGogPSB0aGlzLnlcbiAgICBsZXQgYiA9IDBcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKXtcbiAgICAgICAgbWMubW92ZWYoY3R4LCBnYW1lYmcsIGNhbnZhcywgbiwgaSlcbiAgICAgICAgbisrXG4gICAgICAgIGlmIChpIDwgMTAwMCkgaSArPSAxMDtcbiAgICAgICAgaWYgKG4gPT09IDMzKSBuID0gMTsgICAgXG4gICAgICAgIGIgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcpe1xuICAgICAgICAgICAgbWMubW92ZWIoY3R4LCBnYW1lYmcsIGNhbnZhcywgbiwgaSlcbiAgICAgICAgICAgIG4rK1xuICAgICAgICAgICAgaWYgKGkgPiAtMTAwKSBpIC09IDEwO1xuICAgICAgICAgICAgaWYgKG4gPT09IDMzKSBuID0gMTsgICAgXG4gICAgICAgICAgICBiID0gMCBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnKXtcbiAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7bWMuanVtcChjdHgsIGdhbWViZywgY2FudmFzLCBiLCBtYy54LCBqKVxuICAgICAgICAgICAgICAgIGIrK1xuICAgICAgICAgICAgICAgIGlmIChqIDwgMzMwKSBqIC09IDU7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqID0gMzUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChiID09PSAzMykgYiA9IDA7ICB9LDUwKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpe1xuICAgICAgICAgICBpZiAobWMubGVmdCkge1xuICAgICAgICAgICAgICAgbWMuZG93bihjdHgsIGdhbWViZywgY2FudmFzLCBiLCBpLCBtYy55KVxuICAgICAgICAgICAgICAgIG1jLnktLSBcbiAgICAgICAgICAgICAgICBiICsrXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMTAwKSBpIC09IDEwO1xuICAgICAgICAgICAgICAgIGlmIChiID09PSAxNikgYiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5UScpIHtcbiAgICAgICAgICAgIGlmIChtYy5sZWZ0KSB7XG4gICAgICAgICAgICBsZXQgaW50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbWMuYXR0YWNrKGN0eCwgZ2FtZWJnLCBjYW52YXMsIGIpXG4gICAgICAgICAgICAgICAgICAgIGIrK1xuICAgICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgXG5cblxuICAgIH0pXG5cblxuXG4gICAgXG5cbiAgIFxuXG59KVxuXG4iXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJNYyIsIndpbmRvdyIsIm1jIiwiZ2FtZWJnIiwiSW1hZ2UiLCJzcmMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImdhbWUiLCJzdGFydCIsImNhbnZhcyIsIm4iLCJpIiwiaiIsInkiLCJiIiwiZXZlbnQiLCJjb2RlIiwibW92ZWYiLCJtb3ZlYiIsInNldEludGVydmFsIiwianVtcCIsIngiLCJsZWZ0IiwiZG93biIsImludCIsImF0dGFjayIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///579\n")},273:function(module){eval('function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx, mc) {\n    _classCallCheck(this, Game);\n\n    this.ctx = ctx;\n    this.mc = mc;\n\n    for (var _len = arguments.length, enemies = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      enemies[_key - 2] = arguments[_key];\n    }\n\n    this.enemies = enemies;\n  }\n\n  _createClass(Game, [{\n    key: "start",\n    value: function start(img, canvas) {\n      var self = this;\n\n      img.onload = function () {\n        self.ctx.clearRect(0, 0, canvas.width, canvas.height);\n        self.ctx.drawImage(img, 0, 0);\n        self.ctx.drawImage(self.mc.img, self.mc.x, self.mc.y, self.mc.width, self.mc.height);\n      };\n    }\n  }]);\n\n  return Game;\n}();\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DeWJlcldhcnMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiR2FtZSIsImN0eCIsIm1jIiwiZW5lbWllcyIsImltZyIsImNhbnZhcyIsInNlbGYiLCJvbmxvYWQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsIngiLCJ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEk7QUFDRixnQkFBWUMsR0FBWixFQUFpQkMsRUFBakIsRUFBaUM7QUFBQTs7QUFDN0IsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsRUFBTCxHQUFVQSxFQUFWOztBQUY2QixzQ0FBVEMsT0FBUztBQUFUQSxNQUFBQSxPQUFTO0FBQUE7O0FBRzdCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIOzs7O1dBRUQsZUFBTUMsR0FBTixFQUFXQyxNQUFYLEVBQW1CO0FBQ2YsVUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csTUFBSixHQUFhLFlBQVc7QUFDcEJELFFBQUFBLElBQUksQ0FBQ0wsR0FBTCxDQUFTTyxTQUFULENBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCSCxNQUFNLENBQUNJLEtBQTlCLEVBQXFDSixNQUFNLENBQUNLLE1BQTVDO0FBQ0FKLFFBQUFBLElBQUksQ0FBQ0wsR0FBTCxDQUFTVSxTQUFULENBQW1CUCxHQUFuQixFQUF1QixDQUF2QixFQUF5QixDQUF6QjtBQUNBRSxRQUFBQSxJQUFJLENBQUNMLEdBQUwsQ0FBU1UsU0FBVCxDQUFtQkwsSUFBSSxDQUFDSixFQUFMLENBQVFFLEdBQTNCLEVBQWdDRSxJQUFJLENBQUNKLEVBQUwsQ0FBUVUsQ0FBeEMsRUFBMkNOLElBQUksQ0FBQ0osRUFBTCxDQUFRVyxDQUFuRCxFQUFzRFAsSUFBSSxDQUFDSixFQUFMLENBQVFPLEtBQTlELEVBQXFFSCxJQUFJLENBQUNKLEVBQUwsQ0FBUVEsTUFBN0U7QUFDSCxPQUpEO0FBS0g7Ozs7OztBQUtMSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBtYywgLi4uZW5lbWllcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLm1jID0gbWNcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gZW5lbWllc1xuICAgIH1cblxuICAgIHN0YXJ0KGltZywgY2FudmFzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApXG4gICAgICAgICAgICBzZWxmLmN0eC5kcmF3SW1hZ2UoaW1nLDAsMClcbiAgICAgICAgICAgIHNlbGYuY3R4LmRyYXdJbWFnZShzZWxmLm1jLmltZywgc2VsZi5tYy54LCBzZWxmLm1jLnksIHNlbGYubWMud2lkdGgsIHNlbGYubWMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lIl0sImZpbGUiOiIyNzMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///273\n')},208:function(module){eval('function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mc = /*#__PURE__*/function () {\n  function Mc() {\n    _classCallCheck(this, Mc);\n\n    this.img = new Image();\n    this.img.src = "./imgs/mc/walk/herowalking0.png";\n    this.width = 200;\n    this.height = 200;\n    this.x = 20;\n    this.y = 580;\n    this.points = 25;\n    this.left = false;\n  }\n\n  _createClass(Mc, [{\n    key: "movef",\n    value: function movef(ctx, img, canvas, n, i) {\n      var self = this;\n      this.left = false;\n      self.img.src = "./imgs/mc/walk/herowalking".concat(n, ".png");\n\n      this.img.onload = function () {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.drawImage(img, 0, 0);\n        ctx.drawImage(self.img, i, 580, self.width, self.height);\n      };\n\n      this.x = i;\n    }\n  }, {\n    key: "moveb",\n    value: function moveb(ctx, img, canvas, n, i) {\n      this.left = true;\n      var self = this;\n      self.img.src = "./imgs/mc/walkb/herowalking".concat(n, ".png");\n\n      this.img.onload = function () {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.drawImage(img, 0, 0);\n        ctx.drawImage(self.img, i, 580, self.width, self.height);\n      };\n\n      this.x = i;\n    }\n  }, {\n    key: "jump",\n    value: function jump(ctx, img, canvas, b, i, j) {\n      var self = this;\n      console.log(this.x);\n      self.img.src = "./imgs/mc/walkb/jump/robot4-jump".concat(b, ".png");\n\n      this.img.onload = function () {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.drawImage(img, 0, 0);\n        ctx.drawImage(self.img, this.x, j, 420, 420);\n        this.x += 20;\n      };\n    }\n  }, {\n    key: "down",\n    value: function down(ctx, img, canvas, b, i) {\n      var self = this;\n      this.img.src = "./imgs/mc/walkb/down/robot4-crouch".concat(b, ".png");\n\n      this.img.onload = function () {\n        console.log(ctx);\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.drawImage(img, 0, 0);\n        ctx.drawImage(self.img, i - 10, 610, 175, 175);\n      };\n    }\n  }, {\n    key: "attack",\n    value: function attack(ctx, img, canvas, b) {\n      var self = this;\n      this.img.src = "./imgs/mc/walkb/attack/robot4-attack".concat(b, ".png");\n\n      this.img.onload = function () {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.drawImage(img, 0, 0);\n        ctx.drawImage(self.img, self.x, self.y - 25, 225, 225);\n      };\n    }\n  }]);\n\n  return Mc;\n}();\n\nmodule.exports = Mc;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DeWJlcldhcnMvLi9zcmMvc2NyaXB0cy9tYy5qcz9lOWE3Il0sIm5hbWVzIjpbIk1jIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicG9pbnRzIiwibGVmdCIsImN0eCIsImNhbnZhcyIsIm4iLCJpIiwic2VsZiIsIm9ubG9hZCIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsImIiLCJqIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxFO0FBQ0YsZ0JBQWM7QUFBQTs7QUFDVixTQUFLQyxHQUFMLEdBQVcsSUFBSUMsS0FBSixFQUFYO0FBQ0EsU0FBS0QsR0FBTCxDQUFTRSxHQUFULEdBQWUsaUNBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEVBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSDs7OztXQUtELGVBQU1DLEdBQU4sRUFBV1QsR0FBWCxFQUFlVSxNQUFmLEVBQXVCQyxDQUF2QixFQUEwQkMsQ0FBMUIsRUFBNkI7QUFDekIsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxXQUFLTCxJQUFMLEdBQVksS0FBWjtBQUNBSyxNQUFBQSxJQUFJLENBQUNiLEdBQUwsQ0FBU0UsR0FBVCx1Q0FBNENTLENBQTVDOztBQUNFLFdBQUtYLEdBQUwsQ0FBU2MsTUFBVCxHQUFtQixZQUFXO0FBQzVCTCxRQUFBQSxHQUFHLENBQUNNLFNBQUosQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQW1CTCxNQUFNLENBQUNQLEtBQTFCLEVBQWlDTyxNQUFNLENBQUNOLE1BQXhDO0FBQ0FLLFFBQUFBLEdBQUcsQ0FBQ08sU0FBSixDQUFjaEIsR0FBZCxFQUFrQixDQUFs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RCxnQkFBT0gsR0FBUCxFQUFZVCxHQUFaLEVBQWlCVSxNQUFqQixFQUF5Qk8sQ0FBekIsRUFBNEI7QUFDeEIsVUFBSUosSUFBSSxHQUFHLElBQVg7QUFDQSxXQUFLYixHQUFMLENBQVNFLEdBQVQsaURBQXNEZSxDQUF0RDs7QUFDQSxXQUFLakIsR0FBTCxDQUFTYyxNQUFULEdBQWtCLFlBQVc7QUFDekJMLFFBQUFBLEdBQUcsQ0FBQ00sU0FBSixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUJMLE1BQU0sQ0FBQ1AsS0FBMUIsRUFBaUNPLE1BQU0sQ0FBQ04sTUFBeEM7QUFDQUssUUFBQUEsR0FBRyxDQUFDTyxTQUFKLENBQWNoQixHQUFkLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCO0FBQ0FTLFFBQUFBLEdBQUcsQ0FBQ08sU0FBSixDQUFjSCxJQUFJLENBQUNiLEdBQW5CLEVBQXdCYSxJQUFJLENBQUNSLENBQTdCLEVBQWdDUSxJQUFJLENBQUNQLENBQUwsR0FBTyxFQUF2QyxFQUEyQyxHQUEzQyxFQUFnRCxHQUFoRDtBQUNILE9BSkQ7QUFLSDs7Ozs7O0FBR0xlLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLEVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwiLi9pbWdzL21jL3dhbGsvaGVyb3dhbGtpbmcwLnBuZ1wiXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDBcbiAgICAgICAgdGhpcy54ID0gMjBcbiAgICAgICAgdGhpcy55ID0gNTgwXG4gICAgICAgIHRoaXMucG9pbnRzID0gMjUgXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlIFxuICAgIH1cblxuICAgIFxuICAgIFxuXG4gICAgbW92ZWYoY3R4LCBpbWcsY2FudmFzLCBuLCBpKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZVxuICAgICAgICBzZWxmLmltZy5zcmMgPSBgLi9pbWdzL21jL3dhbGsvaGVyb3dhbGtpbmcke259LnBuZ2BcbiAgICAgICAgICB0aGlzLmltZy5vbmxvYWQgID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsMCwwKVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzZWxmLmltZywgaSwgNTgwLCBzZWxmLndpZHRoLCBzZWxmLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggPSBpXG4gICAgICAgIFxuICAgIH1cblxuICAgIG1vdmViKGN0eCwgaW1nLGNhbnZhcywgbiwgaSkge1xuICAgICAgICB0aGlzLmxlZnQgPSB0cnVlIFxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pbWcuc3JjID0gYC4vaW1ncy9tYy93YWxrYi9oZXJvd2Fsa2luZyR7bn0ucG5nYFxuICAgICAgICAgIHRoaXMuaW1nLm9ubG9hZCAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywwLDApXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNlbGYuaW1nLCBpLCA1ODAsIHNlbGYud2lkdGgsIHNlbGYuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMueCA9IGlcbiAgICAgICAgXG4gICAgfVxuXG4gICAganVtcChjdHgsIGltZywgY2FudmFzLCBiLCBpLCBqKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcyBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy54KVxuICAgICAgICBzZWxmLmltZy5zcmMgPSBgLi9pbWdzL21jL3dhbGtiL2p1bXAvcm9ib3Q0LWp1bXAke2J9LnBuZ2BcbiAgICAgICAgdGhpcy5pbWcub25sb2FkICA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLDAsMClcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2VsZi5pbWcsIHRoaXMueCwgaiwgNDIwLCA0MjApXG4gICAgICAgICAgICB0aGlzLnggKz0gMjBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkb3duKGN0eCwgaW1nLCBjYW52YXMsIGIsIGksICkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gYC4vaW1ncy9tYy93YWxrYi9kb3duL3JvYm90NC1jcm91Y2gke2J9LnBuZ2BcbiAgICAgICAgdGhpcy5pbWcub25sb2FkICA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3R4KVxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLDAsMClcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2VsZi5pbWcsIGktMTAsIDYxMCwgMTc1LCAxNzUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2soY3R4LCBpbWcsIGNhbnZhcywgYikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMgXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IGAuL2ltZ3MvbWMvd2Fsa2IvYXR0YWNrL3JvYm90NC1hdHRhY2ske2J9LnBuZ2BcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsMCwwKVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzZWxmLmltZywgc2VsZi54LCBzZWxmLnktMjUsIDIyNSwgMjI1KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1jIl0sImZpbGUiOiIyMDguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///208\n')},37:function(){"use strict";eval("// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DeWJlcldhcnMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n")}},__webpack_module_cache__={};function __webpack_require__(Q){var F=__webpack_module_cache__[Q];if(void 0!==F)return F.exports;var B=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q](B,B.exports,__webpack_require__),B.exports}__webpack_require__(579);var __webpack_exports__=__webpack_require__(37)})();