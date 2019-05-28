/**
 *
 * Asynchronously loads the component for Token
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
