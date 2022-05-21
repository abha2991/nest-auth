import { Caption } from './videoredis.processor'
import path from 'path'
import { join, resolve } from 'path'

const captions: Caption[] = [
  {
    id: 1,
    video: 'template2.aep',
    composition: 'Comp 1',

    captions: [
      {
        layerName: 'Mixkit',
        value: 'Invite'
      }
    ]
  }
]

export default captions
