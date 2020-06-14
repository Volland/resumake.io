import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { TextInput } from 'common/components/TextInput'
import { LabeledCard } from 'common/components/LabeledCard'
import { darkTheme } from 'common/theme'
import { Header } from './Header'

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  margin-bottom: 2em;
  padding: 0;
  background: 0;
  display: flex;
  flex-direction: column;
`

const Legend = styled.legend`
  width: 85%;
  margin: 0 auto;
  text-transform: uppercase;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
`

const SectionContent = styled.section`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: Varela;
`

const Input = styled(TextInput)`
  background: ${darken(0.05, darkTheme.gray)};
`

interface Props {
  title: string
  inputName?: string
  disableSectionRenaming?: boolean
  children: ReactNode
}

export function FormSection({
  title,
  inputName,
  disableSectionRenaming,
  children
}: Props) {
  return (
    <Fieldset>
      <Header background={darkTheme.black}>
        <Legend>{title}</Legend>
      </Header>
      <SectionContent>
        {disableSectionRenaming ? null : (
          <LabeledCard label="Section Name">
            <Input name={inputName} placeholder={title} component="input" />
          </LabeledCard>
        )}
        {children}
      </SectionContent>
    </Fieldset>
  )
}
