import { helper } from '@ember/component/helper';
import { A as emberA } from '@ember/array';

export default helper(function array(params) {
  // params is a frozen, non-ember array
  return emberA(params.slice());
});
