/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BindingDef, BindingType, DepDef, DepFlags, NodeData, NodeDef, NodeType, ProviderData, PureExpressionData, PureExpressionType, Services, ViewData, asPureExpressionData} from './types';
import {checkAndUpdateBinding, tokenKey} from './util';

export function purePipeDef(argCount: number): NodeDef {
  // argCount + 1 to include the pipe as first arg
  return _pureExpressionDef(PureExpressionType.Pipe, new Array(argCount + 1));
}

export function pureArrayDef(argCount: number): NodeDef {
  return _pureExpressionDef(PureExpressionType.Array, new Array(argCount));
}

export function pureObjectDef(propertyNames: string[]): NodeDef {
  return _pureExpressionDef(PureExpressionType.Object, propertyNames);
}

function _pureExpressionDef(type: PureExpressionType, propertyNames: string[]): NodeDef {
  const bindings: BindingDef[] = new Array(propertyNames.length);
  for (let i = 0; i < propertyNames.length; i++) {
    const prop = propertyNames[i];
    bindings[i] = {
      type: BindingType.PureExpressionProperty,
      name: prop,
      nonMinifiedName: prop,
      securityContext: undefined,
      suffix: undefined
    };
  }
  return {
    type: NodeType.PureExpression,
    // will bet set by the view definition
    index: undefined,
    reverseChildIndex: undefined,
    parent: undefined,
    renderParent: undefined,
    bindingIndex: undefined,
    disposableIndex: undefined,
    // regular values
    flags: 0,
    childFlags: 0,
    childMatchedQueries: 0,
    matchedQueries: {},
    matchedQueryIds: 0,
    references: {},
    ngContentIndex: undefined,
    childCount: 0, bindings,
    disposableCount: 0,
    element: undefined,
    provider: undefined,
    text: undefined,
    pureExpression: {type},
    query: undefined,
    ngContent: undefined
  };
}

export function createPureExpression(view: ViewData, def: NodeDef): PureExpressionData {
  return {value: undefined};
}

export function checkAndUpdatePureExpressionInline(
    view: ViewData, def: NodeDef, v0: any, v1: any, v2: any, v3: any, v4: any, v5: any, v6: any,
    v7: any, v8: any, v9: any) {
  const bindings = def.bindings;
  let changed = false;
  // Note: fallthrough is intended!
  switch (bindings.length) {
    case 10:
      if (checkAndUpdateBinding(view, def, 9, v9)) changed = true;
    case 9:
      if (checkAndUpdateBinding(view, def, 8, v8)) changed = true;
    case 8:
      if (checkAndUpdateBinding(view, def, 7, v7)) changed = true;
    case 7:
      if (checkAndUpdateBinding(view, def, 6, v6)) changed = true;
    case 6:
      if (checkAndUpdateBinding(view, def, 5, v5)) changed = true;
    case 5:
      if (checkAndUpdateBinding(view, def, 4, v4)) changed = true;
    case 4:
      if (checkAndUpdateBinding(view, def, 3, v3)) changed = true;
    case 3:
      if (checkAndUpdateBinding(view, def, 2, v2)) changed = true;
    case 2:
      if (checkAndUpdateBinding(view, def, 1, v1)) changed = true;
    case 1:
      if (checkAndUpdateBinding(view, def, 0, v0)) changed = true;
  }

  const data = asPureExpressionData(view, def.index);
  if (changed) {
    let value: any;
    switch (def.pureExpression.type) {
      case PureExpressionType.Array:
        value = new Array(bindings.length);
        // Note: fallthrough is intended!
        switch (bindings.length) {
          case 10:
            value[9] = v9;
          case 9:
            value[8] = v8;
          case 8:
            value[7] = v7;
          case 7:
            value[6] = v6;
          case 6:
            value[5] = v5;
          case 5:
            value[4] = v4;
          case 4:
            value[3] = v3;
          case 3:
            value[2] = v2;
          case 2:
            value[1] = v1;
          case 1:
            value[0] = v0;
        }
        break;
      case PureExpressionType.Object:
        value = {};
        // Note: fallthrough is intended!
        switch (bindings.length) {
          case 10:
            value[bindings[9].name] = v9;
          case 9:
            value[bindings[8].name] = v8;
          case 8:
            value[bindings[7].name] = v7;
          case 7:
            value[bindings[6].name] = v6;
          case 6:
            value[bindings[5].name] = v5;
          case 5:
            value[bindings[4].name] = v4;
          case 4:
            value[bindings[3].name] = v3;
          case 3:
            value[bindings[2].name] = v2;
          case 2:
            value[bindings[1].name] = v1;
          case 1:
            value[bindings[0].name] = v0;
        }
        break;
      case PureExpressionType.Pipe:
        const pipe = v0;
        switch (bindings.length) {
          case 10:
            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8, v9);
            break;
          case 9:
            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7, v8);
            break;
          case 8:
            value = pipe.transform(v1, v2, v3, v4, v5, v6, v7);
            break;
          case 7:
            value = pipe.transform(v1, v2, v3, v4, v5, v6);
            break;
          case 6:
            value = pipe.transform(v1, v2, v3, v4, v5);
            break;
          case 5:
            value = pipe.transform(v1, v2, v3, v4);
            break;
          case 4:
            value = pipe.transform(v1, v2, v3);
            break;
          case 3:
            value = pipe.transform(v1, v2);
            break;
          case 2:
            value = pipe.transform(v1);
            break;
          case 1:
            value = pipe.transform(v0);
            break;
        }
        break;
    }
    data.value = value;
  }
  return data.value;
}

export function checkAndUpdatePureExpressionDynamic(view: ViewData, def: NodeDef, values: any[]) {
  const bindings = def.bindings;
  let changed = false;
  for (let i = 0; i < values.length; i++) {
    // Note: We need to loop over all values, so that
    // the old values are updates as well!
    if (checkAndUpdateBinding(view, def, i, values[i])) {
      changed = true;
    }
  }
  const data = asPureExpressionData(view, def.index);
  if (changed) {
    let value: any;
    switch (def.pureExpression.type) {
      case PureExpressionType.Array:
        value = values;
        break;
      case PureExpressionType.Object:
        value = {};
        for (let i = 0; i < values.length; i++) {
          value[bindings[i].name] = values[i];
        }
        break;
      case PureExpressionType.Pipe:
        const pipe = values[0];
        const params = values.slice(1);
        value = (<any>pipe.transform)(...params);
        break;
    }
    data.value = value;
  }
  return data.value;
}
