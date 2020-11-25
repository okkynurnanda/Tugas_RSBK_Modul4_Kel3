import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Context from "./Context";
const PanelInputTeam = styled.div`
  width: 400px;
  margin: auto;
  display: ${props => props.ready ? 'none' : 'flex'}
  flex-direction: column;
  justify-content: space-around;
`

function InputTeam(props) {
  const teamA = React.useRef()
  const teamB = React.useRef()


  const handleSubmit = () => {
    props.setTeams(
      props.teams.concat(teamA.current.value, teamB.current.value)
    )
    props.setReady(true)
  }

  return (
    <PanelInputTeam ready={props.ready}>
      <Context />
      <h3>Masukkan Nama Kedua Tim</h3>
      <input ref={teamA} type='text' placeholder='Team A' />
      <input ref={teamB} type='text' placeholder='Team B' />
      <button onClick={handleSubmit}>Submit</button>
    </PanelInputTeam>
  )
}

export default InputTeam