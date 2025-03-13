import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
        
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/agecalculator'>Age-Calculator</Link>&nbsp;&nbsp;
      <Link to='/emicalculator'>Emi-Calculator</Link>&nbsp;&nbsp;
    </div>
  )
}

export default Header
