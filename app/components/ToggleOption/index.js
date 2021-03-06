/**
*
* ToggleOption
*
*/

import React from "react";
import { injectIntl, intlShape } from "react-intl";

const ToggleOption = ({ value, message, intl }) => (
  <option value={value}>
    {message ? intl.formatMessage(message) : value}
  </option>
);

export default injectIntl(ToggleOption);
