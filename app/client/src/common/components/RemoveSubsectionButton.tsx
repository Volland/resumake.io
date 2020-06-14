import styled from 'styled-components'
import { darkTheme } from 'common/theme'

export const RemoveSubsectionButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 1.25em;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  outline: none;
  border: 0;
  background: #111314;
  color: ${darkTheme.primary};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);

  &:hover {
    background: ${darkTheme.primary};
    color: #111314;
  }
`
