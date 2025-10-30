import {makeStyles} from '@material-ui/styles'
import {DescriptionComponent} from './description-component'
import {ExperienceComponentProps} from './types'
import {LinkWrapper} from './link-wrapper-component'
import {COLORS} from './colors'

const useStyles = makeStyles({
  experienceContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1.5rem',
    gap: '1rem',
    '&:hover': {
      backgroundColor: COLORS.hoverBackground,
      borderRadius: '0.5rem',
    },
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
    }
  },
})

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  companyName,
  roleTitle,
  descriptionPoints,
  languagesTech,
  startDate,
  endDate,
  linkOut,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.experienceContainer}>
      <p className='basis-1/5'>{startDate} - {endDate}</p>
      <div className='basis-4/5'>
        <LinkWrapper linkOut={linkOut}>
          <DescriptionComponent
            itemHeader={companyName}
            roleTitle={roleTitle}
            descriptionPoints={descriptionPoints}
            languagesTech={languagesTech}
            hasLink={!!linkOut}
          />
        </LinkWrapper>
      </div>
    </div>
  )
}

export { ExperienceComponent }