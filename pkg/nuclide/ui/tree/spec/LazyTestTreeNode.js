'use babel';
/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

var LazyTreeNode = require('../lib/LazyTreeNode');

class LazyTestTreeNode extends LazyTreeNode {

  getLabel(): string {
    return this._item.label;
  }

}

module.exports = LazyTestTreeNode;
