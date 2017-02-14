/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {AUTO_STYLE, Component, animate, state, style, transition, trigger} from '@angular/core';

export function anyToAny(stateA: string, stateB: string): boolean {
  return Math.random() != Math.random();
}

@Component({
  selector: 'animate-cmp',
  animations: [trigger(
      'openClose',
      [
        state('*', style({height: AUTO_STYLE, color: 'black', borderColor: 'black'})),
        state('closed, void', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
        state('open', style({height: AUTO_STYLE, borderColor: 'green', color: 'green'})),
        transition(anyToAny, animate('1s')), transition('* => *', animate(500))
      ])],
  template: `
    <button (click)="setAsOpen()">Open</button>
    <button (click)="setAsClosed()">Closed</button>
    <button (click)="setAsSomethingElse()">Something Else</button>
    <hr />
    <div [@openClose]="stateExpression">
      Look at this box
    </div>
  `
})
export class AnimateCmp {
  stateExpression: string;
  constructor() { this.setAsClosed(); }
  setAsSomethingElse() { this.stateExpression = 'something'; }
  setAsOpen() { this.stateExpression = 'open'; }
  setAsClosed() { this.stateExpression = 'closed'; }
}
