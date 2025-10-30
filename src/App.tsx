import {makeStyles} from '@material-ui/styles'

import {ICONS} from './icons'
import {ExperienceComponent} from './experience-component'
import listingsData from './listings.json'
import {ProjectComponent} from './project-component'
import {COLORS} from './colors'

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '7rem 14rem',
    gap: '6rem',

    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      padding: '2rem',
      gap: '2rem',
    }
  },
  sidebar: {
    flexBasis: '30%',
    position: 'sticky',
    top: '1rem',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '@media (max-width: 1000px)': {
      position: 'static',
      paddingBottom: '2rem',
    }
  },
  mainContent: {
    flexBasis: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
  },
  navProgressBar: {
    listStyle: 'none',
    position: 'relative',
    height: '500px',
    // float: 'left',
    top: '10px',
    left: '10px',

    '& li:last-child': {
      background: 'none',
    },

    '& li': {
      width: '6px',
      background: "white",
      height: '13%',

      '&:before': {
        content: '""',
        display: 'block',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'white',
        position: 'relative',
        left: '-7px',
        top: 'calc(100% - 75px)',
      }
    },

    '@media (max-width: 1000px)': {
      display: 'none',
    }
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',

    '& li': {
      color: COLORS.fontColor,
      transition: '0.5s',

      '&:hover': {
        color: COLORS.fontHoverColor,
        marginLeft: '10px',

        '@media (max-width: 1000px)': {
          marginLeft: '0px',
        }            
      }
    },

    '@media (max-width: 1000px)': {
      flexDirection: 'row',
      gap: '1.5rem',
    }
  }
})

const SocialsComponent: React.FC = () => {
  return (
    <div className="flex flex-row gap-2">
      <a href="https://github.com/lmidang" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="inline-block w-8 h-8 ml-1 text-white"
        >
          <path className="fill-white" d={ICONS.github} />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/lmidang" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="inline-block w-8 h-8 ml-1 text-white"
        >
          <path className="fill-white" d={ICONS.linkedIn} />
        </svg>
      </a>
    </div>
  )
}

const NavigationComponent: React.FC = () => {
  const classes = useStyles()
  
  return (
    <nav className="flex flex-row gap-10 mt-4">
      <ul className={classes.navProgressBar}>
        <li></li>
        <li></li>
        <li></li>
        {/* <li></li> */}
      </ul>
      <ul className={classes.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#resume">Resume</a></li> */}
      </ul>
    </nav>
  )
}

function App() {
  const classes = useStyles()

  return (
    <>
      <div id="about" className={classes.appContainer}>
        <div className={classes.sidebar}>
          <h1 className="text-6xl font-bold pb-1">Lynn Dang</h1>
          <h2 className="text-2xl font-bold">Software Engineer</h2>
          <h3 className="text-2xl">Yay! Science! 🔨</h3>
          <SocialsComponent />
          <NavigationComponent />
        </div>
        <div className={classes.mainContent}>
          <div className="gap-4 flex flex-col">
            {listingsData.about.map((about, index) => (
              <p key={index}>{about}</p>
            ))}
          </div>
          <div id="experience" className="flex flex-col gap-3">
            {listingsData.experiences.map((exp, index) => (
              <ExperienceComponent 
                key={index}
                companyName={exp.companyName}
                roleTitle={exp.roleTitle}
                descriptionPoints={exp.descriptionPoints}
                languagesTech={exp.languagesTech}
                startDate={exp.startDate}
                endDate={exp.endDate}
                linkOut={exp.linkOut || undefined}
              />
            ))}
          </div>
          <div id="projects" className="flex flex-col gap-3">
            {listingsData.projects.map((proj, index) => (
              <ProjectComponent
                key={index}
                projectName={proj.projectName}
                descriptionPoints={proj.descriptionPoints}
                languagesTech={proj.languagesTech}
                linkOut={proj.linkOut || undefined}
              />
            ))}
          </div>
          {/* <a id="resume" href="/resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a> */}
        </div>
      </div>
    </>
  )
}

export default App
