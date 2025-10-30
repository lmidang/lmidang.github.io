interface DescriptionComponentProps {
  itemHeader: string
  roleTitle?: string
  descriptionPoints: string[]
  languagesTech: string[]
  hasLink?: boolean
}

interface ExperienceComponentProps {
  companyName: string
  roleTitle: string
  descriptionPoints: string[]
  languagesTech: string[]
  startDate: string
  endDate: string
  linkOut?: string
}

interface ProjectComponentProps {
  projectName: string,
  descriptionPoints: string[],
  languagesTech: string[],
  linkOut?: string
}

export {DescriptionComponentProps, ExperienceComponentProps, ProjectComponentProps}