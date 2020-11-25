import React from 'react'
import styled from 'styled-components'

import PanelScoreboard from './PanelScoreboard'
import InputTeam from './InputTeam'

const PanelScore = styled.div`
  display: ${props => props.ready ? 'block' : 'none'}
`

const Container = styled.div`
  margin: auto;
  padding: 20px;
  text-align: center;
`

function ScoreBoard() {
  const [teams, setTeams] = React.useState([])
  const [ready, setReady] = React.useState(false)

  return (
    <Container>
      <InputTeam ready={ready} setReady={setReady} teams={teams} setTeams={setTeams} />
      <PanelScore ready={ready}>
        <PanelScoreboard teams={teams} />
      </PanelScore>
    </Container>
  )
}

export default ScoreBoard