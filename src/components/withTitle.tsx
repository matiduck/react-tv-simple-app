import * as React from 'react'
import Helmet from 'react-helmet'

export const withTitle = (
  PageComponent: React.ComponentType,
  title: string,
) => () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageComponent />
  </>
)
