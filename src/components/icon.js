import React from 'react'

import PropTypes from 'prop-types'

import './icon.css'

const Icon = (props) => {
  return (
    <div className={`icon-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="icon-icon">
        <path
          d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

Icon.defaultProps = {
  rootClassName: '',
}

Icon.propTypes = {
  rootClassName: PropTypes.string,
}

export default Icon
