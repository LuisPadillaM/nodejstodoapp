import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'react-toolbox/lib/font_icon';

const FontIcons = ({icons}) => (
  <span>
    {
      icons.map((icon, ind)=>
        <FontIcon key={ind} value={icon.value} {...icon.attr} />
      )
    }
  </span>
)

FontIcons.propTypes = {
  icons: PropTypes.array.isRequired
}

export default FontIcons;
