"use client"
import React from 'react'
import type { CompetitionType } from '~/types/competition/CompetitionType';
import Image from 'next/image';
import tinycolor from 'tinycolor2';

const Competition = (props: CompetitionType) => {
  return (
    <div className='flex flex-row bg-slate-800 p-4 rounded-lg border-2 border-slate-600 max-w-md gap-4 items-center hover:bg-slate-700 max-h-52 cursor-default'>
      <div className='w-72 overflow-hidden'>
        <Image
          src={`https://picsum.photos/seed/${props.id}/400/500`}
          alt={props.title}
          width={1080}
          height={1080}
          className='rounded-lg object-fill h-32 w-32'
        />
      </div>
      <div className='flex flex-col gap-2 py-4'>
        <div className='flex flex-row gap-4' id='tags'>
          {
            props.tags.map((tag) => (
              <span
                key={tag.slug}
                className="text-sm"
                style={{
                  color: tinycolor(tag.colour)
                    .desaturate(50)
                    .toPercentageRgbString(),
                }}
              >
                #{tag.tag}
              </span>
            ))
          }
        </div>
        <h1 className='text-gray-200 font-bold text-base'>
          {props.title}
        </h1>
        <p className='text-gray-400 text-sm line-clamp-2'>
          {props.description}
        </p>
        <a href={props.link} className='btn btn-primary py-2' target={'_blank'} rel={'noreferrer'}>
          View
        </a>
      </div>
    </div>
  )
}

export default Competition