import React from 'react'

import reactLogo, { ReactComponent as ReactLogo } from 'assets/images/react.svg'

export const App: React.FC = () => {
  return (
    <>
      <h1>Wellcome to React with webpack</h1>

      <img
        src={reactLogo}
        alt="React Logo Url mode SVG"
        style={{ width: '150px' }}
      />
      <ReactLogo
        aria-label="React Logo Component mode SVG"
        role="img"
        style={{ width: '150px' }}
      />
    </>
  )
}

export default App
