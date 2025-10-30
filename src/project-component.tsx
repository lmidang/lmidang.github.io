import {makeStyles} from '@material-ui/styles'
import {LinkWrapper} from './link-wrapper-component'
import {DescriptionComponent} from './description-component'
import {ProjectComponentProps} from './types'
import React from 'react'
import {COLORS} from './colors'

const useStyles = makeStyles({
  projectContainer: {
    padding: '1.5rem',
    '&:hover': {
      backgroundColor: COLORS.hoverBackground,
      borderRadius: '0.5rem',
    },
  },
  containerCursor: {
    cursor: 'pointer',
  }
})

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  projectName,
  descriptionPoints,
  languagesTech,
  linkOut
}) => {
  const classes = useStyles()

  return (
    <LinkWrapper linkOut={linkOut}>
    <div 
      className={classes.projectContainer}>
      <DescriptionComponent
        itemHeader={projectName}
        descriptionPoints={descriptionPoints}
        languagesTech={languagesTech}
        hasLink={!!linkOut}
      />
    </div>
    </LinkWrapper>
  )
}

export {ProjectComponent}