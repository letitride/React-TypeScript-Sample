import React from 'react'
import { rows } from './data'
import Thead from './table/thead'
import Tbody from './table/tbody'

const Component: React.FC = () => (
  <div>
    <table>
      <Thead />
      <Tbody rows={rows} />
    </table>
  </div>
)

export default Component