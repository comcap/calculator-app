import React from 'react'
import styled from 'styled-components'

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    'Clean Multiple Minus Plus'
    'Seven Eight Nine Plus'
    'Four Five Six Sum'
    'One Two Three Sum'
    'Zero Zero Dot Sum';

  div {
    cursor: pointer;
    font-size: 26px;
    padding: 20px;
    color: #717172;
    font-weight: 600;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #e4e4e4;
    background-color: #a7d4fa;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Clean {
    grid-area: Clean;
  }
  .Multiple {
    grid-area: Multiple;
  }
  .Minus {
    grid-area: Minus;
  }
  .Plus {
    grid-area: Plus;
  }
  .Sum {
    grid-area: Sum;
  }
  .Seven {
    grid-area: Seven;
  }
  .Eight {
    grid-area: Eight;
  }
  .Nine {
    grid-area: Nine;
  }
  .Four {
    grid-area: Four;
  }
  .Five {
    grid-area: Five;
  }
  .Six {
    grid-area: Six;
  }
  .One {
    grid-area: One;
  }
  .Two {
    grid-area: Two;
  }
  .Three {
    grid-area: Three;
  }
  .Zero {
    grid-area: Zero;
  }
  .Dot {
    grid-area: Dot;
  }
`

const ButtonGridComponent = ({ onClick }) => {
  return (
    <ButtonGrid>
      <div onClick={() => onClick('Clean')} class='Clean'>
        C
      </div>
      <div onClick={() => onClick('Multiple')} class='Multiple'>
        X
      </div>
      <div onClick={() => onClick('Minus')} class='Minus'>
        -
      </div>
      <div onClick={() => onClick('Plus')} class='Plus'>
        +
      </div>
      <div onClick={() => onClick('Sum')} class='Sum'>
        =
      </div>
      <div onClick={() => onClick('Seven')} class='Seven'>
        7
      </div>
      <div onClick={() => onClick('Eight')} class='Eight'>
        8
      </div>
      <div onClick={() => onClick('Nine')} class='Nine'>
        9
      </div>
      <div onClick={() => onClick('Four')} class='Four'>
        4
      </div>
      <div onClick={() => onClick('Five')} class='Five'>
        5
      </div>
      <div onClick={() => onClick('Six')} class='Six'>
        6
      </div>
      <div onClick={() => onClick('One')} class='One'>
        1
      </div>
      <div onClick={() => onClick('Two')} class='Two'>
        2
      </div>
      <div onClick={() => onClick('Three')} class='Three'>
        3
      </div>
      <div onClick={() => onClick('Zero')} class='Zero'>
        0
      </div>
      <div onClick={() => onClick('Dot')} class='Dot'>
        .
      </div>
    </ButtonGrid>
  )
}

export default ButtonGridComponent
