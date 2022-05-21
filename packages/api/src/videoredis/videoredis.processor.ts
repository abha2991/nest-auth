import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import * as path from 'path'
import captions from './caption'
import { CreateVideorediDto } from './dto/create-videoredi.dto'

const { render } = require('@nexrender/core')

export interface Caption {
  id: number
  video: string
  composition: string
  captions: Array<{
    layerName: string
    value: string
  }>
}

@Processor('video-queue')
export class VideoredisProcessor {
  @Process()
  async main(job: Job<CreateVideorediDto>) {
    console.log(job)
    console.log(job.progress)

    // @ts-ignore
    var details = await captions.filter((x) => x.id === job.data)

    try {
      const filePath = `file://${path.resolve(__dirname, 'assets', details[0].video)}`
      let outputfile = `${Date.now()}.mp4`
      // let output=`Users/abha/WebstormProjects/HeartEnvit/packages/api/video/generated/${outputfile}`
      let output = path.resolve('src', 'videoredis', 'generated', outputfile)
      //const params = []
      let params: Array<string>
      params = []
      let array = details[0].captions
      array.forEach((item) => {
        params.push(`{type:'data',layerName: ${item.layerName},property: 'Source Text',value: ${item.value}}`)
      })

      const paramsText = params.join(',')
      console.log({ paramsText })

      const result = await render({
        template: {
          src: filePath,
          composition: details[0].composition
        },
        assets: [
          {
            type: 'data',
            layerName: details[0].captions[0].layerName,
            property: 'Source Text',
            value: details[0].captions[0].value
          }
          // `${paramsText}`,
        ],

        actions: {
          postrender: [
            {
              module: '@nexrender/action-encode',
              preset: 'mp4',
              output: 'encoded.mp4'
            },
            {
              module: '@nexrender/action-copy',
              input: 'encoded.mp4',
              // "output": "/Users/abha/Desktop/myresult2.mp4"
              output: `${output}`
            }
          ]
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
