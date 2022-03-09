import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

function Logo() {
  return (
      <Wrapper href="https://myclassgame.es">
          <img src={logo} width="50" height="50" alt="myclassgame" />
      </Wrapper>
  )
}

export default Logo
