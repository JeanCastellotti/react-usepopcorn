import PropTypes from 'prop-types'
import { useState } from 'react'

TextExpander.propTypes = {
  className: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapsedButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
}

function TextExpander({
  className,
  collapsedNumWords = 10,
  expandButtonText = 'Show',
  collapsedButtonText = 'Close',
  buttonColor = 'dodgerblue',
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  const text = isExpanded
    ? children
    : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...'

  return (
    <div className={className}>
      <span>{text}</span>
      <button
        style={{ color: buttonColor }}
        onClick={() => setIsExpanded((e) => !e)}
      >
        {isExpanded ? collapsedButtonText : expandButtonText}
      </button>
    </div>
  )
}

export default TextExpander
