import { Section } from './types/sections'
import {
  FormValues,
  Headings,
  Basics,
  School,
  Job,
  Project,
  Skill,
  Award,
  BulletsSubsection,
  TableSubsection,
  ParagraphSubsection
} from './types/form'

export const emptyHeadings: Headings = {
  work: '',
  education: '',
  skills: '',
  projects: '',
  awards: ''
}

export const emptyProfile: Basics = {
  name: '',
  email: '',
  phone: '',
  website: '',
  location: {
    address: ''
  }
}

export const emptySchool: School = {
  institution: '',
  location: '',
  area: '',
  studyType: '',
  startDate: '',
  endDate: '',
  gpa: ''
}

export const emptyJob: Job = {
  company: '',
  location: '',
  position: '',
  website: '',
  startDate: '',
  endDate: '',
  highlights: ['', '', '']
}

export const emptySkill: Skill = {
  name: '',
  keywords: ['', '', '']
}

export const emptyProject: Project = {
  name: '',
  description: '',
  url: '',
  keywords: ['', '', '']
}

export const emptyAward: Award = {
  title: '',
  date: '',
  awarder: '',
  summary: ''
}

export const emptyBulletsSubsection: BulletsSubsection = {
  topLeftText: '',
  topRightText: '',
  bottomLeftText: '',
  bottomRightText: '',
  bullets: ['', '', '']
}

export const emptyTableSubsection: TableSubsection = {
  category: '',
  keywords: ['', '', '']
}

export const emptyParagraphSubsection: ParagraphSubsection = {
  topLeftText: '',
  topRightText: '',
  bottomLeftText: '',
  bottomRightText: '',
  paragraph: ''
}

export const defaultSections: Array<Section> = [
  { name: 'profile', displayName: 'Profile', type: 'default' },
  { name: 'education', displayName: 'Education', type: 'default' },
  { name: 'work', displayName: 'Work', type: 'default' },
  { name: 'skills', displayName: 'Skills', type: 'default' },
  { name: 'projects', displayName: 'Projects', type: 'default' },
  { name: 'awards', displayName: 'Awards', type: 'default' }
]

export const defaultFormValues: FormValues = {
  selectedTemplate: 1,
  headings: emptyHeadings,
  basics: emptyProfile,
  education: [emptySchool],
  work: [emptyJob],
  skills: [emptySkill],
  projects: [emptyProject],
  awards: [emptyAward],
  sections: [...defaultSections]
}
