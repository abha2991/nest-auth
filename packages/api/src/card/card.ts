import Jimp from 'Jimp'
import path from 'path'
import captions from './captions'


export interface Caption {
    file: string
    captions: Array<{
        x: number
        y: number
        text: string

        font: string

    }>
}




const execute = async (caption: Caption) => {
    const image = await Jimp.read(path.resolve('src','card','assets', caption.file))

    for (let i = 0; i < caption.captions.length; i++) {
        const capt = caption.captions[i]
        const font = await Jimp.loadFont(capt.font)
        await image.print(font, capt.x, capt.y, capt.text)
    }

    //const newFileName = `${fileName.replace(path.extname(fileName), '')}-${Date.now()}${path.extname(fileName)}`
    await image.writeAsync(path.resolve('src','card','generated', caption.file))
}

execute(captions[0])
