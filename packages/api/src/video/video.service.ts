import { Body, Injectable } from '@nestjs/common'

import { extname, resolve } from 'path'

import { VideoDto } from './dto/create-video.dto'
import { exec } from 'child_process'
import captions from './captions'
import * as path from 'path'
const { render } = require('@nexrender/core')

export interface Caption {
  id: number
  video: string
  captions: Array<{
    x: number
    y: number
    fontSize: number
    startTime: number
    endTime: number
    text: string
    fontColor: string
    font: string
  }>
}

export interface Captions {
  id: number
  video: string
  composition: string
  captions: Array<{
    layerName: string
    value: string
  }>
}

@Injectable()
export class VideoService {
  async Video(@Body() videoDto: VideoDto) {
    const generateVideo = async (id, Details, text) => {
      var details = await captions.filter((x) => x.id === id)

      let array = details[0].captions
      // console.log(array[2])

      const filePath = path.resolve(__dirname, 'assets', details[0].video)

      const newFileName = `${details[0].video.replace(extname(details[0].video), '')}-${Date.now()}${extname(
        details[0].video
      )}`
      // exec("ffmpeg -i " + filePath +  ` -vf "[in]drawtext=text='Wedding Invitation' :enable='between(t,02,07)' :x=400:y=400:fontsize=50:fontcolor=white, drawtext=text='Cheena Weds Meena' :enable='between(t,10,13)' :x=400:y=400:fontsize=50:fontcolor=white[out]" -c:a copy ${newFileName}`, (error, stdout, stderr) => {
      //     if (error) {
      //         //console.log(`error: ${error.message}`);
      //         return;
      //     }
      //     if (stderr) {
      //         //console.log(`stderr: ${stderr}`);
      //         return;
      //     }
      //    // console.log(`stdout: ${stdout}`);
      // });

      const params = []
      array.forEach((item) => {
        params.push(
          `drawtext=text=${item.text} :enable='between(t,${item.startTime},${item.endTime})' :x=${item.x} :y=${item.y} :fontsize=${item.fontSize} :fontcolor=${item.fontColor} :fontfile=${item.font}`
        )
      })

      const paramsText = params.join(',')
      console.log({ paramsText })
      //      exec("ffmpeg -i " + filePath +  ` -vf "[in]drawtext=text=${text}
      //      :enable='between(t,${array[0].startTime},${array[0].endTime})'
      //      :x=${array[0].x}:y=${array[0].y}:fontsize=${array[0].fontSize}
      //      :fontcolor=${array[0].fontColor}:fontfile=/Users/abha/Library/Fonts/DancingScript-VariableFont_wght.ttf,
      //       drawtext=text=${array[1].text} :enable='between(t,${array[1].startTime},${array[1].endTime})'
      //       :x=${array[1].x}:y=${array[1].y}:fontsize=${array[1].fontSize}:fontcolor=${array[1].fontColor}
      //       :fontfile=${array[1].font}, drawtext=text=${array[2].text}
      //       :enable='between(t,${array[2].startTime},${array[2].endTime})'
      //       :x=${array[2].x}:y=${array[2].y}:fontsize=${array[2].fontSize}
      //       :fontcolor=${array[2].fontColor}:fontfile=${array[2].font},
      //       drawtext=text=${array[3].text}:enable='between(t,${array[3].startTime},${array[3].endTime})'
      //       :x=${array[3].x}:y=${array[3].y}:fontsize=${array[3].fontSize}:fontcolor=${array[3].fontColor}
      //       :fontfile=${array[3].font}, drawtext=text=${array[4].text}
      //       :enable='between(t,${array[4].startTime},${array[4].endTime})'
      //       :x=${array[4].x}:y=${array[4].y}:fontsize=${array[4].fontSize}
      //       :fontcolor=${array[4].fontColor}:fontfile=${array[4].font},
      //        drawtext=text=${array[5].text} :enable='between(t,${array[5].startTime},${array[5].endTime})'
      //         :x=${array[5].x}:y=${array[5].y}:fontsize=${array[5].fontSize}:fontcolor=${array[5].fontColor}
      //         :fontfile=${array[5].font}[out]" -c:a copy ${newFileName}`, (error, stdout, stderr) => {
      //          if (error) {
      //             console.log(`error: ${error.message}`);
      //              return;
      //          }
      //          if (stderr) {
      // console.log(`stderr: ${stderr}`);
      //              return;
      //          }
      //          // console.log(`stdout: ${stdout}`);
      //      });

      exec(
        'ffmpeg -i ' + filePath + ` -vf "[in]${paramsText}[out]" -c:a copy ${newFileName}`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`)
            return
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
          }
          // console.log(`stdout: ${stdout}`);
        }
      )
    }

    let id = videoDto.id
    let text = videoDto?.text ?? ''

    //await generateVideo(id, videoDto.Details, text)

    const main = async () => {
      try {
        const filePath = `file://${path.resolve(__dirname, 'assets', 'template2.aep')}`
        let outputfile = `${Date.now()}.mp4`
        // let output=`Users/abha/WebstormProjects/HeartEnvit/packages/api/video/generated/${outputfile}`
        let output = path.resolve('src', 'video', 'generated', outputfile)
        console.log({ filePath })
        const result = await render({
          template: {
            src: filePath,
            composition: 'Comp 1'
          },
          assets: [
            {
              type: 'data',
              layerName: 'Mixkit',
              property: 'Source Text',
              value: 'Invite'
            }
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

    main()
  }
  // create(createVideoDto: CreateVideoDto) {
  //   return 'This action adds a new video';
  // }

  // findAll() {
  //   return `This action returns all video`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} video`;
  // }

  // update(id: number, updateVideoDto: UpdateVideoDto) {
  //   return `This action updates a #${id} video`;
  // }

  remove(id: number) {
    return `This action removes a #${id} video`
  }
}
