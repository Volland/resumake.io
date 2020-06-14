import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { reduxForm, InjectedFormProps } from 'redux-form'
import styled from 'styled-components'
import { darkTheme } from 'common/theme'
import { ProfileSection } from './profile/ProfileSection'
import { EducationSection } from './education/EducationSection'
import { ExperienceSection } from './experience/ExperienceSection'
import { ProjectsSection } from './projects/ProjectsSection'
import { SkillsSection } from './skills/SkillsSection'
import { AwardsSection } from './awards/AwardsSection'
import { CustomSection } from './custom/CustomSection'
import { useFormValues } from '../hooks/useFormValues'
import { useSections } from '../hooks/useSections'
import { Section, CustomSection as CustomSectionType } from '../types/sections'

const Form = styled.form`
  background: ${darkTheme.black};
  width: 45%;
  margin-left: 10%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: auto;
`

function isCustomSection(section: Section): section is CustomSectionType {
  return section.type !== 'default'
}

function ResumeFormView({ handleSubmit }: InjectedFormProps) {
  const vals = useFormValues()
  const sections = useSections()

  const onSubmit = () => {
    console.log(vals)
  }

  const onChange = () => {
    console.log('change')
  }

  return (
    <Form
      id="resume-form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
    >
      <Switch>
        <Route
          exact
          path="/generator"
          render={() => <Redirect to="/generator/profile" />}
        />
        <Route path="/generator/profile" component={ProfileSection} />
        <Route path="/generator/education" component={EducationSection} />
        <Route path="/generator/work" component={ExperienceSection} />
        <Route path="/generator/skills" component={SkillsSection} />
        <Route path="/generator/projects" component={ProjectsSection} />
        <Route path="/generator/awards" component={AwardsSection} />
        {sections
          .filter(isCustomSection)
          .map((customSection: CustomSectionType, i) => (
            <Route
              key={i}
              path={`/generator/${customSection.name}`}
              render={() => <CustomSection sectionInfo={customSection} />}
            />
          ))}
        <Route path="*" render={() => <h1>404</h1>} />
      </Switch>
    </Form>
  )
}

export const ResumeForm = reduxForm({
  form: 'resume',
  destroyOnUnmount: false
})(ResumeFormView)
