import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import { initDB } from 'react-indexed-db'

// import { compress, decompress } from 'compress-json'
import { StoreConfig } from './api/store/store'
import { useInit } from './api/store/init'
import Menu from './components/Menu'
import { Grid } from '@geist-ui/react'

initDB(StoreConfig)
function App() {
  // @ts-ignore

  const { tokens } = useInit()

  return (
    <Grid.Container gap={2} justify='center'>
      <Grid lg={24}>
        <Menu />
      </Grid>
      <Grid lg={24}>
        <Dashboard tokens={tokens} tickerTokens={tokens} />
      </Grid>
    </Grid.Container>
  )
}

export default App
