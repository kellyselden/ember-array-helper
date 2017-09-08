import { helper } from '@ember/component/helper';
import { A as emberA } from '@ember/array';

export function array(params/*, hash*/) {
  // params is a frozen, non-ember array
  return emberA(params.slice());
}

export default helper(array);
