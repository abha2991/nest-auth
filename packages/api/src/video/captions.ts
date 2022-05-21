import { resolve } from 'path'
import { Caption } from './video.service'

const captions: Caption[] = [
  {
    id: 1,
    video: 'video.mp4',

    captions: [
      {
        x: 200,
        y: 900,
        text: 'Wedding Invitation',
        fontSize: 120,
        startTime: 1,
        endTime: 3,
        fontColor: 'white',
        font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
      },
      {
        x: 400,
        y: 700,

        text: 'Cheenu Weds Meenu',
        fontSize: 80,
        startTime: 4,
        endTime: 6,
        fontColor: 'yellow',
        font: resolve(__dirname, 'fonts', 'DancingScript-VariableFont.ttf')
      },
      {
        x: 400,
        y: 900,

        text: 'Date Time Venue',
        fontSize: 80,
        startTime: 7,
        endTime: 9,
        fontColor: 'green',
        font: resolve(__dirname, 'fonts', 'Caveat-Bold.ttf')
      },
      {
        x: 300,
        y: 900,

        text: 'One Plus 6 T',
        fontSize: 80,
        startTime: 10,
        endTime: 12,
        fontColor: 'gray',
        font: resolve(__dirname, 'fonts', 'Hubballi-Regular..ttf')
      },
      {
        x: 400,
        y: 900,

        text: 'Save The Date',
        fontSize: 60,
        startTime: 13,
        endTime: 15,
        fontColor: 'silver',
        font: resolve(__dirname, 'fonts', 'NanumMyeongjo-ExtraBold..ttf')
      },

      {
        x: 200,
        y: 900,

        text: 'Instagram Facebook',
        fontSize: 100,
        startTime: 16,
        endTime: 18,
        fontColor: 'purple',
        font: resolve(__dirname, 'fonts', 'Satisfy-Regular.ttf')
      }
    ]
  }
]

export default captions
