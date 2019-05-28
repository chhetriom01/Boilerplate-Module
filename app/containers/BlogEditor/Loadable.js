/**
 *
 * Asynchronously loads the component for BlogEditor
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
