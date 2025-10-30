import React from 'react'
import {TagComponent} from './tag-component'
import {DescriptionComponentProps} from './types'
import {ICONS} from './icons'

const DescriptionComponent: React.FC<DescriptionComponentProps> = (
  {itemHeader, roleTitle, descriptionPoints, languagesTech, hasLink}
) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">{itemHeader}
        {hasLink &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="inline-block w-4 h-4 ml-1 text-white"
          >
            <path className="fill-white" d={ICONS.externalLinkSquare} />
          </svg>
        }
      </h2>
      {roleTitle && <h3 className="text-2xl">{roleTitle}</h3>}
      <ul className="ml-[2em] list-disc pt-4 pb-4">
        {descriptionPoints.map((description: string) => (
          <li>{description}</li>
        ))}
      </ul>
      {languagesTech.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {languagesTech.map((tech: string) => (
            <TagComponent key={tech} label={tech} />
          ))}
        </div>
      )}
    </div>
  )
}

export { DescriptionComponent }