import React from 'react'

export const PreferencesContext = React.createContext({
  initialQuery: 'batman',
  resultsPerPage: 6,
  // setPerPage: (v: number) => {
  //   this.resultsPerPage = v;
  // }
})

PreferencesContext.displayName = 'Preferences'
