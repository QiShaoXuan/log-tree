(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.library = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var logTree =
  /*#__PURE__*/
  function () {
    function logTree() {
      _classCallCheck(this, logTree);

      this.settings = {
        keyword: {
          name: 'name',
          children: 'children'
        },
        maxLevel: 1000
      };
    }

    _createClass(logTree, [{
      key: "setPre",
      value: function setPre(level, hasNext) {
        var parentPre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        return "".concat(parentPre).concat(hasNext ? '├' : '└', "\u2500\u2500 ");
      }
    }, {
      key: "setTransferPre",
      value: function setTransferPre() {
        var parentPre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var hasNext = arguments.length > 1 ? arguments[1] : undefined;
        return "".concat(parentPre).concat(hasNext ? '│' : ' ', "   ");
      }
    }, {
      key: "log",
      value: function log(tree) {
        var _this = this;

        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var parentPre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var treeStr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        if (level >= this.settings.maxLevel) return '';
        tree.forEach(function (child, index) {
          var hasNext = tree[index + 1] ? true : false;
          var children = child[_this.settings.keyword.children];
          treeStr += "".concat(_this.setPre(level, hasNext, parentPre)).concat(child[_this.settings.keyword.name], "\n");

          if (children) {
            treeStr += _this.log(children, level + 1, _this.setTransferPre(parentPre, hasNext));
          }
        });
        return treeStr;
      }
    }, {
      key: "setSettings",
      value: function setSettings() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.settings = Object.assign(this.setSettings(settings));
      }
    }]);

    return logTree;
  }();

  var index = new logTree();

  return index;

}));
//# sourceMappingURL=index.js.map
