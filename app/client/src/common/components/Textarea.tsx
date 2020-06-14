import styled from 'styled-components'
import { Field } from 'redux-form'
import { darkTheme } from 'common/theme'

interface Props {
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  width?: string
}

export const Textarea: any = styled(Field)`
  font-family: Arial;
  resize: vertical;
  min-height: 6em;
  background: ${darkTheme.gray};
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  width: ${(props: Props) => props.width ?? '100%'};
  color: ${darkTheme.foreground};
  transition: 0.4s border-color ease;
  outline: none;
  margin-top: ${(props: Props) => props.marginTop || 0};
  margin-right: ${(props: Props) => props.marginRight || 0};
  margin-bottom: ${(props: Props) => props.marginBottom || 0};
  margin-left: ${(props: Props) => props.marginLeft || 0};

  &::placeholder {
    color: ${darkTheme.foreground};
    opacity: 0.25;
  }

  &:focus {
    color: ${darkTheme.primary};
    border: 2px solid ${darkTheme.primary};

    &::placeholder {
      opacity: 0.75;
    }
  }
`
