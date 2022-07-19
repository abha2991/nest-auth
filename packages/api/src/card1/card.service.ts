import { Body, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { values } from 'lodash'

//import Jimp from 'Jimp'
import { extname, resolve } from 'path'
import { Repository } from 'typeorm'
import { CardetailsService } from '../cardetails/cardetails.service'
import { UsersService } from '../users/users.service'
import captions from './captions'

import { CardDto } from './dto/card.dto'

import { UserCardEntity } from './entities/usercard.entity'

const Jimp = require('jimp')

export interface CardId {
  userCardId: number
  id: number
  card: string
}

export interface Caption {
  id: number
  page: string
  previewpage: string
  captions: Array<{
    x: number
    y: number

    font: string
  }>
}

const breakTextToLines = (text: string, maxCharsPerLine: number, minWordsPerLine: number) => {
  const words = text.split(' ')
  let lines: string[] = []
  let charCount = 0
  let currLine = ''

  for (const word of words) {
    if (charCount + word.length > maxCharsPerLine) {
      lines.push(currLine)
      currLine = ''
      charCount = 0
    } else if (currLine !== '') {
      currLine += ' '
    }
    charCount += word.length
    currLine += word
  }

  if (currLine.split(' ').length < minWordsPerLine) {
    lines.push(lines.pop() + ' ' + currLine)
  } else {
    lines.push(currLine)
  }

  if (lines.length === 0) {
    lines.push(currLine)
  }
  return lines
}

@Injectable()
export class CardService {
  private readonly cardservice: CardService

  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(UserCardEntity) private readonly usersCardRepository: Repository<UserCardEntity>,
    private readonly cardetailsService: CardetailsService
  ) {}

  async Card(@Body() cardDto: CardDto) {
    //console.log({cardDto})
    const generateImage = async (id, Details, userid) => {
      let fileName = []
      var image
      const car = await captions.filter((x) => x.id === id)
      let k

      //console.log({id, Details, userid})
      for (k = 0; k < car.length; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))

        //console.log(car[k].captions.length)
        for (let i = 0; i < car[k].captions.length; i++) {
          const capt = await car[k].captions[i]

          //console.log({capt})

          const font = await Jimp.loadFont(capt.font)

          //console.log(`${k}-${i}-${data[i]}`)
          //                       let frontPageData=[];
          //                       frontPageData.push(data[0])
          //                       frontPageData.push(data[2])
          //                       console.log(data[i])
          //                       console.log(frontPageData)

          let data = Object.values(Details[k])
          //console.log({data,Details})
          if (data[i]) {
            let b = await image.print(font, capt.x, capt.y, data[i])
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

        fileName.push(newFileName)

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }

      const details = await this.cardetailsService.find(id)

      const user = new UserCardEntity()
      user.userId = userid
      user.cardCategory = 'WeddingInvitation'
      user.cardNames = fileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      const createdUser = this.usersCardRepository.create(user)

      return this.usersCardRepository.save(createdUser)

      // private readonly cardservice: CardService
      //
      // constructor(
      //   private readonly usersService: UsersService,
      //   @InjectRepository(UserCardEntity) private readonly usersCardRepository: Repository<UserCardEntity>
      // ) {}
      //
      // async Card(@Body() cardDto: CardDto) {
      //   console.log({ cardDto })
      //   const generateImage = async (id, Details, userid) => {
      //     let fileName = []
      //     var image
      //     const car = await captions.filter((x) => x.id === id)
      //     let k
      //
      //     console.log({ id, Details, userid })
      //     for (k = 0; k < car.length; k++) {
      //       image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))
      //
      //       for (let i = 0; i < car[k].captions.length; i++) {
      //         const capt = await car[k].captions[i]
      //
      //         console.log({ capt })
      //
      //         const font = await Jimp.loadFont(capt.font)
      //
      //         //console.log(`${k}-${i}-${data[i]}`)
      //         //                       let frontPageData=[];
      //         //                       frontPageData.push(data[0])
      //         //                       frontPageData.push(data[2])
      //         //                       console.log(data[i])
      //         //                       console.log(frontPageData)
      //
      //         let data = Object.values(Details[k])
      //         console.log({ data, Details })
      //         if (data[i]) {
      //           let b = await image.print(font, capt.x, capt.y, data[i])
      //           console.log({ b })
      //         } else {
      //         }
      //
      //       }
      //       const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`
      //
      //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
      //
      //       fileName.push(newFileName)

      //let user = await this.usersService.findByEmail(email)
      //console.log({user})
      //   }
      //
      //   const user = new UserCardEntity()
      //   user.UserId = userid
      //   user.CardType = 'WeddingInvitation'
      //   user.CardNames = fileName
      //
      //   user.Text = Details
      //   user.CardId = id
      //   const createdUser = this.usersCardRepository.create(user)
      //   console.log({ createdUser })
      //
      //   return this.usersCardRepository.save(createdUser)
      // }
    }
    let id = cardDto.id
    let userid = cardDto.userId
    let email = cardDto.email
    return await generateImage(id, cardDto.details, userid)
  }

  async Card1(@Body() cardDto: CardDto) {
    //console.log({cardDto})
    const generateImage = async (id, Details, userid) => {
      let fileName = []
      var image
      const car = await captions.filter((x) => x.id === id)
      let k

      //console.log({id, Details, userid})
      for (k = 0; k < car.length; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))

        //console.log(car[k].captions.length)
        for (let i = 0; i < car[k].captions.length; i++) {
          const capt = await car[k].captions[i]

          //console.log({capt})

          const font = await Jimp.loadFont(capt.font)

          //console.log(`${k}-${i}-${data[i]}`)
          //                       let frontPageData=[];
          //                       frontPageData.push(data[0])
          //                       frontPageData.push(data[2])
          //                       console.log(data[i])
          //                       console.log(frontPageData)

          let data = Object.values(Details[k])
          //console.log({data})
          if (data[i]) {
            let b = await image.print(font, capt.x, capt.y, data[i])
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

        fileName.push(newFileName)
        console.log({ fileName })

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      let a = await this.cardetailsService.findOne()
      // console.log({ a })
      // console.log(typeof id)
      const details = await this.cardetailsService.find(id)

      const user = new UserCardEntity()
      user.userId = userid
      user.cardCategory = 'WeddingInvitation'
      user.cardNames = fileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      const createdUser = this.usersCardRepository.create(user)

      return this.usersCardRepository.save(createdUser)

      // private readonly cardservice: CardService
      //
      // constructor(
      //   private readonly usersService: UsersService,
      //   @InjectRepository(UserCardEntity) private readonly usersCardRepository: Repository<UserCardEntity>
      // ) {}
      //
      // async Card(@Body() cardDto: CardDto) {
      //   console.log({ cardDto })
      //   const generateImage = async (id, Details, userid) => {
      //     let fileName = []
      //     var image
      //     const car = await captions.filter((x) => x.id === id)
      //     let k
      //
      //     console.log({ id, Details, userid })
      //     for (k = 0; k < car.length; k++) {
      //       image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))
      //
      //       for (let i = 0; i < car[k].captions.length; i++) {
      //         const capt = await car[k].captions[i]
      //
      //         console.log({ capt })
      //
      //         const font = await Jimp.loadFont(capt.font)
      //
      //         //console.log(`${k}-${i}-${data[i]}`)
      //         //                       let frontPageData=[];
      //         //                       frontPageData.push(data[0])
      //         //                       frontPageData.push(data[2])
      //         //                       console.log(data[i])
      //         //                       console.log(frontPageData)
      //
      //         let data = Object.values(Details[k])
      //         console.log({ data, Details })
      //         if (data[i]) {
      //           let b = await image.print(font, capt.x, capt.y, data[i])
      //           console.log({ b })
      //         } else {
      //         }
      //
      //       }
      //       const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`
      //
      //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
      //
      //       fileName.push(newFileName)

      //let user = await this.usersService.findByEmail(email)
      //console.log({user})
      //   }
      //
      //   const user = new UserCardEntity()
      //   user.UserId = userid
      //   user.CardType = 'WeddingInvitation'
      //   user.CardNames = fileName
      //
      //   user.Text = Details
      //   user.CardId = id
      //   const createdUser = this.usersCardRepository.create(user)
      //   console.log({ createdUser })
      //
      //   return this.usersCardRepository.save(createdUser)
      // }
    }
    let id = cardDto.id
    let userid = cardDto.userId
    return await generateImage(id, cardDto.details, userid)
  }

  // async PreviewCard(@Body() cardDto: CardDto) {
  //   //console.log({cardDto})
  //   const generatePreviewImage = async (id, Details, userid, email) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //     console.log(details.Caption)
  //     console.log(details.Caption[0].Caption)
  //     const car = await captions.filter((x) => x.id === id)
  //     let k
  //     console.log({ car })
  //     //console.log({id, Details, userid})
  //     for (k = 0; k < car.length; k++) {
  //       console.log(car.length)
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].previewpage))
  //       console.log(car[k].previewpage)
  //       //console.log(car[k].captions.length)
  //       for (let i = 0; i < car[k].captions.length; i++) {
  //         console.log(car[k].captions.length)
  //
  //         const capt = await car[k].captions[i]
  //
  //         //console.log({capt})
  //
  //         const font = await Jimp.loadFont(capt.font)
  //
  //         let data = Object.values(Details[k])
  //
  //         //const lines = breakTextToLines(data[i], 10, 2);
  //         //console.log({data,Details})
  //         if (data[i]) {
  //           //console.log(lines[i])
  //           let b = await image.print(font, capt.x, capt.y, data[i])
  //           //console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${car[k].previewpage.replace(extname(car[k].previewpage), '')}-${Date.now()}${extname(
  //         car[k].previewpage
  //       )}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
  //
  //       fileName.push(newFileName)
  //       console.log({ fileName })
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < car.length; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', car[j].page))
  //       console.log(car[j].previewpage)
  //       //console.log(car[k].captions.length)
  //       for (let i = 0; i < car[j].captions.length; i++) {
  //         const capt = await car[j].captions[i]
  //
  //         //console.log({capt})
  //
  //         const font = await Jimp.loadFont(capt.font)
  //
  //         let data = Object.values(Details[j])
  //         //console.log({data,Details})
  //         if (data[i]) {
  //           let b = await image.print(font, capt.x, capt.y, data[i])
  //           // console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${car[j].page.replace(extname(car[j].page), '')}-${Date.now()}${extname(car[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
  //
  //       downloadFileName.push(newFileName)
  //       console.log({ downloadFileName })
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //
  //     console.log({ id })
  //     console.log(typeof id)
  //
  //     // let a=await this.cardetailsService.findOne()
  //     // console.log({a})
  //
  //     //console.log({Details})
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.cardType = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //     // user.OrderCreationId="PENDING";
  //     //             user.RazorpayPaymentId="PENDING";
  //     //             user.RazorpayOrderId="PENDING";
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.email = email
  //     const createdUser = this.usersCardRepository.create(user)
  //     console.log({ createdUser })
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //   return await generatePreviewImage(id, cardDto.details, userid, email)
  // }

  // async PreviewCard(@Body() cardDto: CardDto) {
  //   //console.log({cardDto})
  //   const generatePreviewImage = async (id, Details, userid, email) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     // console.log(details.Caption[0].Caption)
  //     // const car = await captions.filter((x) => x.id === id)
  //     let k
  //
  //     //console.log({id, Details, userid})
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //       // console.log({ image })
  //       //console.log(car[k].captions.length)
  //       //                 for (let i = 0; i < car[k].captions.length; i++) {
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         //console.log(car[k].captions.length)
  //         //console.log(details.Caption[k].Caption.length)
  //         // const capt = await car[k].captions[i]
  //         const capt = await details.Caption[k].Caption[i]
  //         // console.log({ capt })
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let lines
  //         let data = Object.values(Details[k])
  //         lines = breakTextToLines(data[i], 20, 2)
  //         // console.log({ lines })
  //
  //         const array = []
  //         // let text = lines.split(',')
  //         // console.log({ text })
  //
  //         // console.log(lines.length)
  //
  //         // for (let a = 0; a < lines.length; a++) {
  //         //   let text = lines[a].split(',')
  //         //
  //         //   array.push(text)
  //         // }
  //         //
  //         // console.log(array.length)
  //
  //         //const lines = breakTextToLines(data[i], 25, 2)
  //         //console.log({data,Details})
  //         //console.log({ lines })
  //
  //         if (data[i]) {
  //           console.log({ array })
  //           // console.log(details.Caption[k].PreviewPage)
  //           // console.log({capt})
  //           // console.log(data[i])
  //
  //           //console.log(lines[i])
  //
  //           // console.log(data[i])
  //
  //           // let textWidth = Jimp.measureText(font, lines[0]);
  //           //
  //           // const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth); // Just to have the height of a line, could be any char
  //           // const allTextHeight = singleLineHeight * lines.length; // Used to center the whole text
  //           // console.log({lines,textWidth,singleLineHeight,allTextHeight})
  //           // let b = await image.print(font, capt.x, capt.y, data[i],textWidth,singleLineHeight)
  //
  //           await image.print(font, capt.x, capt.y, data[i])
  //
  //           //console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
  //
  //       fileName.push(newFileName)
  //       //console.log({fileName})
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //     // console.log({ fileName })
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.Caption[j].page))
  //       //console.log(car[j].previewpage)
  //       //console.log(car[k].captions.length)
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         // const capt = await car[j].captions[i]
  //         const capt = await details.Caption[j].Caption[i]
  //         //console.log({capt})
  //
  //         //const font = await Jimp.loadFont(capt.font)
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //         //console.log({data,Details})
  //         if (data[i]) {
  //           let b = await image.print(font, capt.x, capt.y, data[i])
  //           // console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))
  //
  //       downloadFileName.push(newFileName)
  //       //console.log({downloadFileName})
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //     // console.log({ downloadFileName })
  //     //console.log({id})
  //     // console.log(typeof id)
  //
  //     // let a=await this.cardetailsService.findOne()
  //     // console.log({a})
  //
  //     //console.log({Details})
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardType = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //     // user.OrderCreationId="PENDING";
  //     //             user.RazorpayPaymentId="PENDING";
  //     //             user.RazorpayOrderId="PENDING";
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //     //console.log({createdUser})
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //   // console.log(typeof id)
  //   // console.log(typeof userid)
  //   return await generatePreviewImage(id, cardDto.details, userid, email)
  // }

  async PreviewCard(@Body() cardDto: CardDto) {
    //console.log({cardDto})
    const generatePreviewImage = async (id, Details, userid, email) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      // console.log(details.Caption[0].Caption)
      // const car = await captions.filter((x) => x.id === id)
      let k

      //console.log({id, Details, userid})
      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        // console.log({ image })
        //console.log(car[k].captions.length)
        //                 for (let i = 0; i < car[k].captions.length; i++) {

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          //console.log(car[k].captions.length)
          //console.log(details.Caption[k].Caption.length)
          // const capt = await car[k].captions[i]
          const capt = await details.Caption[k].Caption[i]
          // console.log({ capt })
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > 30) {
              text = breakTextToLines(data[i] as string, 40, 3)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            // console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              await image.print(
                font,
                // image.bitmap.width / 3,
                x,

                //capt.x,
                // capt.y + space,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
        //console.log({fileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        //console.log(car[j].previewpage)
        //console.log(car[k].captions.length)
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          // const capt = await car[j].captions[i]
          const capt = await details.Caption[j].Caption[i]
          //console.log({ capt })

          //const font = await Jimp.loadFont(capt.font)
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            console.log(a.length)

            let text
            if (a.length > 30) {
              text = breakTextToLines(data[i] as string, 30, 3)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              await image.print(
                font,
                image.bitmap.width / 3,
                capt.y + singleLineHeight * e + spaceBetweenLines * e,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
        //console.log({downloadFileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      // console.log({ downloadFileName })
      //console.log({id})
      // console.log(typeof id)

      // let a=await this.cardetailsService.findOne()
      // console.log({a})

      //console.log({Details})

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName
      // user.OrderCreationId="PENDING";
      //             user.RazorpayPaymentId="PENDING";
      //             user.RazorpayOrderId="PENDING";

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      //console.log({createdUser})

      return this.usersCardRepository.save(createdUser)
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email
    // console.log(typeof id)
    // console.log(typeof userid)
    return await generatePreviewImage(id, cardDto.details, userid, email)
  }

  // async WeddingCard1(@Body() cardDto: CardDto) {
  //   //console.log({cardDto})
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //       let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
  //       let y_value = 0
  //
  //       const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
  //       y_value = y_value + secondPageCaption1
  //
  //       const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
  //       let yValue = thirdPageCaption
  //       const capt1 = await details.Caption[0].Caption[0]
  //       let y = 0
  //       y = y + capt1.y
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //           //console.log({ a })
  //           let text
  //           if (
  //             k === 0 ||
  //             (i === 0 && k === 1) ||
  //             (i === 3 && k === 1) ||
  //             (i === 0 && k === 2) ||
  //             (i === 3 && k === 2) ||
  //             (i === 6 && k === 2) ||
  //             (i === 9 && k === 2) ||
  //             (i === 12 && k === 2)
  //           ) {
  //             if (a.length > maxCharsPerLine - 20) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             let space = singleLineHeight * e + spaceBetweenLines * e
  //
  //             if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i === 0 && e === 0) {
  //                 yValue = yValue
  //               }
  //               if (i === 0 && e != 0) {
  //                 yValue = yValue + singleLineHeight2
  //               }
  //               if (i % 3 == 0 && e === 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //                 yValue = yValue + space3
  //               } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 2
  //                 yValue = yValue + space3
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines
  //                 yValue = yValue + space3
  //               }
  //
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               // yValue = yValue + space3
  //             } else {
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //                 // y_value + space,
  //                 //capt.x,
  //                 capt.y + space,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //           // await image.print(font, capt.x, capt.y, data[i])
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //     // console.log({ fileName })
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //       let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
  //       let y_value = 0
  //
  //       const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
  //       y_value = y_value + secondPageCaption1
  //
  //       const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
  //       let yValue = thirdPageCaption
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         // const capt = await car[j].captions[i]
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //         //console.log({ data, Details })
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
  //           const allTextHeight = singleLineHeight * text.length // Used to center the whole text
  //           let spaceBetweenLines = 10
  //           //console.log({ text, singleLineHeight, allTextHeight })
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             let space = singleLineHeight * e + spaceBetweenLines * e
  //
  //             if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //               // console.log({ singleLineHeight2 })
  //               // console.log({ k, e, i })
  //               let space3
  //
  //               if (i % 3 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 0.5
  //               } else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 2
  //               }
  //
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //                 // y_value + space,
  //                 //capt.x,
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue = yValue + space3
  //             } else {
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //                 // y_value + space,
  //                 //capt.x,
  //                 capt.y + space,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //           // console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //       //console.log({downloadFileName})
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //     // console.log({ downloadFileName })
  //     //console.log({id})
  //     // console.log(typeof id)
  //
  //     // let a=await this.cardetailsService.findOne()
  //     // console.log({a})
  //
  //     //console.log({Details})
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //     // user.OrderCreationId="PENDING";
  //     //             user.RazorpayPaymentId="PENDING";
  //     //             user.RazorpayOrderId="PENDING";
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //     //console.log({createdUser})
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }
  async WeddingCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k
      let y_value = 0
      const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
      y_value = y_value + secondPageCaption1

      const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
      let yValue = thirdPageCaption

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          // const secondPageCaption2 = (await details.Caption[1].Caption[3]?.y) ?? ''

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            //console.log({ a })
            let text
            if (
              k === 0 ||
              (i === 1 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 3 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 9 && k === 2) ||
              (i === 12 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              //if (k === 1) {
              // const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              //
              // let space2
              // if (text[0] === 'Weds') {
              //   space2 = singleLineHeight1
              //   y_value = y_value + space2
              //   space2 = singleLineHeight1 * 2
              // } else {
              //   space2 = singleLineHeight1 + 15
              // }
              //
              // await image.print(
              //   font,
              //
              //   x,
              //
              //   y_value,
              //
              //   { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
              //   textWidth,
              //   singleLineHeight
              // )
              // y_value = y_value + space2

              if (k === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space
                } else if (i === 1 && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space + 100
                } else if ((i === 5 || i === 4) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 10
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                // console.log({ singleLineHeight2 })
                // console.log({ k, e, i })
                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                }
                // else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
                //   space3 = singleLineHeight2 + spaceBetweenLines * 6
                // }
                else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else {
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  capt.y + space,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          // const capt = await car[j].captions[i]
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              j === 0 ||
              (i === 1 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 3 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 9 && j === 2) ||
              (i === 12 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space
                } else if (i === 1 && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space + 100
                } else if ((i === 5 || i === 4) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 10
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                // console.log({ singleLineHeight2 })
                // console.log({ k, e, i })
                let space3
                // if (i === 2 || i === 5 || i === 8 || i === 11) {
                //   space3 = singleLineHeight2 * 2
                // } else {
                if (i % 3 == 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 0.5
                } else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 6
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines * 2
                }
                //}

                // console.log({ text, e, i, k, space3 })

                // console.log(thirdPageCaption + space2)
                // console.log({ y_value })
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                yValue = yValue + space3
              } else {
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  capt.y + space,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
        //console.log({downloadFileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async WeddingCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const secondPageCaption2 = (await details.Caption[1].Caption[4]?.y) ?? ''

        let y_value = 0

        y_value = y_value + secondPageCaption1

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        const capt1 = await details.Caption[0].Caption[0]
        let y = capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              k === 0 ||
              (i === 1 && k === 1) ||
              (i === 4 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 3 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 9 && k === 2) ||
              (i === 12 && k === 2) ||
              (k === 3 && (i === 0 || i === 1 || i === 3 || i === 5))
            ) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            }

            if (k === 3) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  // space = singleLineHeight + spaceBetweenLines * 12
                  // y_value = y_value + space
                  y_value = y_value + 700
                }
                if (i === 4 && e === 0) {
                  // space = singleLineHeight + spaceBetweenLines * 12
                  // y_value = y_value + space
                  y_value = secondPageCaption2
                } else if ((i === 2 || i === 5) && e === 0) {
                  y_value = y_value + singleLineHeight + 40
                } else if ((i === 3 || i === 6) && e === 0) {
                  y_value = y_value + singleLineHeight + 20
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 0) {
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  capt.y + space,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const secondPageCaption2 = (await details.Caption[1].Caption[4]?.y) ?? ''

        let y_value = 0

        y_value = y_value + secondPageCaption1

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        const capt1 = await details.Caption[0].Caption[0]
        let y = capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          // const capt = await car[j].captions[i]
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              j === 0 ||
              (i === 1 && j === 1) ||
              (i === 4 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 3 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 9 && j === 2) ||
              (i === 12 && j === 2) ||
              (j === 3 && (i === 0 || i === 1 || i === 3 || i === 5))
            ) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            }
            if (j === 3) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 700
                }
                if (i === 4 && e === 0) {
                  y_value = secondPageCaption2
                } else if ((i === 2 || i === 5) && e === 0) {
                  y_value = y_value + singleLineHeight + 40
                } else if ((i === 3 || i === 6) && e === 0) {
                  y_value = y_value + singleLineHeight + 20
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 0) {
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  capt.y + space,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async WeddingCard10(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine, minCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const secondPageCaption1 = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y_value = 0

        y_value = y_value + secondPageCaption1

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          // const secondPageCaption2 = (await details.Caption[1].Caption[3]?.y) ?? ''

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            //console.log({ a })
            let text
            if (
              k === 0 ||
              (i === 1 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 3 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 9 && k === 2) ||
              (i === 12 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - minCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && (i === 0 || i === 1)) {
              if (a.length > maxCharsPerLine - minCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines * 3

                if (i === 0 && e === 0) {
                  y = y
                }
                if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                  y = y + space + 100
                }
                if (i === 3 && e === 0) {
                  y = y + space + 150
                } else if (e != 0) {
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value - 400
                } else if (i === 1 && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 7
                  y_value = y_value + space + 100
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if ((i === 4 || i === 5) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 5
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 7
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y_value = y_value + space2
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 50
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const secondPageCaption1 = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y_value = 0

        y_value = y_value + secondPageCaption1

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              j === 0 ||
              (i === 1 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 3 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 9 && j === 2) ||
              (i === 12 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - minCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            } else if (j === 3 && (i === 0 || i === 1)) {
              if (a.length > maxCharsPerLine - minCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines * 3

                if (i === 0 && e === 0) {
                  y = y
                }
                if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                  y = y + space + 100
                }
                if (i === 3 && e === 0) {
                  y = y + space + 150
                } else if (e != 0) {
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (j === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value - 400
                } else if (i === 1 && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 7
                  y_value = y_value + space + 100
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if ((i === 4 || i === 5) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 5
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 7
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y_value = y_value + space2
              } else if (j === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 50
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(
      id,
      cardDto.details,
      userid,
      email,
      cardDto.maxCharsPerLine,
      cardDto.minCharsPerLine
    )
  }
  async WeddingCard2(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = 0

        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          // const secondPageCaption2 = (await details.Caption[1].Caption[3]?.y) ?? ''

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            //console.log({ a })
            let text
            if (k === 0 || (i === 4 && k === 1) || (i === 5 && k === 1) || (i % 2 === 0 && k === 2)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 1) {
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 80
                }
                if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 2) {
                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 100
                }
                if (i % 2 == 0 && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else if (i % 2 != 0 && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  space3 = singleLineHeight2 + spaceBetweenLines * 9
                  yValue = yValue + space3
                } else if (e != 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue = yValue + singleLineHeight2
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 0) {
                await image.print(
                  font,

                  x,

                  capt.y + space,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = 0

        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0 || (i === 4 && j === 1) || (i === 5 && j === 1) || (i % 2 === 0 && j === 2)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j === 1) {
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 80
                }
                if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (j === 2) {
                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 100
                }
                if (i % 2 == 0 && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else if (i % 2 != 0 && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  space3 = singleLineHeight2 + spaceBetweenLines * 9
                  yValue = yValue + space3
                } else if (e != 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue = yValue + singleLineHeight2
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 0) {
                await image.print(
                  font,

                  x,

                  capt.y + space,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async WeddingCard3(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0 || (i === 0 && k === 1) || (i === 1 && k === 1)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2
                let space1 = singleLineHeight + spaceBetweenLines * 2

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y = y + space1
              } else if (k == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value - 40
                }
                if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + 100
                }
                // if (i === 2 && e === 0) {
                //   const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                //   let space = singleLineHeight + spaceBetweenLines * 2
                //   y_value = y_value + space
                // }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 200
                }
                if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0 || (i === 0 && j === 1) || (i === 1 && j === 1)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2
                let space1 = singleLineHeight + spaceBetweenLines * 2

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y = y + space1
              } else if (j == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value - 40
                }
                if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + 100
                }

                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 200
                }
                if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
        //console.log({downloadFileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async WeddingCard4(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            //
            // if (a.length > maxCharsPerLine) {
            //   text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            // } else {
            //   text = [data[i]]
            // }
            if (k === 0) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            }
            if ((i === 0 && k === 1) || (i === 1 && k === 1)) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2

                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space1 = singleLineHeight + spaceBetweenLines * 2 + 100
                  y = y + space1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + 140
                }
                // if (i === 2 && e === 0) {
                //   const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                //   let space = singleLineHeight + spaceBetweenLines * 2
                //   y_value = y_value + space
                // }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 210
                }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                }
                if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 15
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            }
            if ((i === 0 && j === 1) || (i === 1 && j === 1)) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2
                // let space1 = singleLineHeight + spaceBetweenLines * 2 + 100

                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space1 = singleLineHeight + spaceBetweenLines * 2 + 100
                  y = y + space1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space1
              } else if (j == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + 140
                }
                // if (i === 2 && e === 0) {
                //   const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                //   let space = singleLineHeight + spaceBetweenLines * 2
                //   y_value = y_value + space
                // }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 210
                }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                }
                if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 15
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  // async WeddingCard5(@Body() cardDto: CardDto) {
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //
  //     const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''
  //
  //     let y = firstPageCaption
  //     const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
  //     let y_value1 = secondPageCaption1
  //     const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
  //     let y_value2 = secondPageCaption2
  //     const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
  //     let y_value3 = secondPageCaption3
  //
  //     const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
  //     let yValue1 = thirdPageCaption1
  //
  //     const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
  //     let yValue2 = thirdPageCaption2
  //
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (
  //             k === 0 ||
  //             (i === 2 && k === 1) ||
  //             (i === 5 && k === 1) ||
  //             (i === 0 && k === 2) ||
  //             (i === 2 && k === 2) ||
  //             (i === 4 && k === 2) ||
  //             (i === 6 && k === 2) ||
  //             (i === 8 && k === 2) ||
  //             (i === 10 && k === 2)
  //           ) {
  //             if (a.length > maxCharsPerLine - 16) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if (i === 1 && k === 1) {
  //             if (a.length > maxCharsPerLine + 6) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //             const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //             let x = (image.bitmap.width - textWidth) / 2
  //             let space = singleLineHeight + spaceBetweenLines
  //             let y = capt.y
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y = y + space
  //             }
  //             if (k === 1 && (i === 0 || i === 1)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space1
  //             }
  //             if (k === 1 && (i === 2 || i === 3 || i === 4 || i === 5 || i === 6)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 3
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value2 = y_value2 + space1
  //             }
  //
  //             if (k === 1 && (i === 7 || i === 8)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value3,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value3 = y_value3 + space1
  //             }
  //             if (
  //               k === 2 &&
  //               (i === 0 ||
  //                 i === 1 ||
  //                 i === 2 ||
  //                 i === 3 ||
  //                 i === 4 ||
  //                 i === 5 ||
  //                 i === 6 ||
  //                 i === 7 ||
  //                 i === 8 ||
  //                 i === 9)
  //             ) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 2 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 3
  //               } else if (i % 2 != 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue1 = yValue1 + space3
  //             } else if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               space3 = singleLineHeight2 + spaceBetweenLines
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue2 = yValue2 + space3
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
  //           const allTextHeight = singleLineHeight * text.length // Used to center the whole text
  //           let spaceBetweenLines = 10
  //           //console.log({ text, singleLineHeight, allTextHeight })
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             let space = singleLineHeight * e + spaceBetweenLines * e
  //
  //             if (k === 1 && (i === 0 || i === 1)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space1
  //             }
  //             if (k === 1 && (i === 2 || i === 3 || i === 4 || i === 5 || i === 6)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value2 = y_value2 + space1
  //             }
  //
  //             if (k === 1 && (i === 7 || i === 8)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value3,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value3 = y_value3 + space1
  //             }
  //             if (
  //               k === 2 &&
  //               (i === 0 ||
  //                 i === 1 ||
  //                 i === 2 ||
  //                 i === 3 ||
  //                 i === 4 ||
  //                 i === 5 ||
  //                 i === 6 ||
  //                 i === 7 ||
  //                 i === 8 ||
  //                 i === 9)
  //             ) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 2 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 3
  //               } else if (i % 2 != 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue1 = yValue1 + space3
  //             }
  //
  //             if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               space3 = singleLineHeight2 + spaceBetweenLines
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue2 = yValue2 + space3
  //             } else if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 capt.y + space,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //       //console.log({downloadFileName})
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //     // console.log({ downloadFileName })
  //     //console.log({id})
  //     // console.log(typeof id)
  //
  //     // let a=await this.cardetailsService.findOne()
  //     // console.log({a})
  //
  //     //console.log({Details})
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //     // user.OrderCreationId="PENDING";
  //     //             user.RazorpayPaymentId="PENDING";
  //     //             user.RazorpayOrderId="PENDING";
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //     //console.log({createdUser})
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }

  async WeddingCard5(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption
        const firstPageCaption1 = (await details.Caption[0].Caption[3]?.y) ?? ''

        let y1 = firstPageCaption1
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              (k === 0 && (i === 0 || i === 1 || i === 2)) ||
              (i === 2 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 2 && k === 2) ||
              (i === 4 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 8 && k === 2) ||
              (i === 10 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && k === 1) {
              if (a.length > maxCharsPerLine + 6) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              //const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              //let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 200
                } else if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y1 = y1
                  y = y1
                } else if (i === 3 && e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y1 = y1 + singleLineHeight
                  y = y1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight + 10
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 130
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (k === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 4
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 4
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption
        const firstPageCaption1 = (await details.Caption[0].Caption[3]?.y) ?? ''

        let y1 = firstPageCaption1
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              (j === 0 && (i === 0 || i === 1 || i === 2)) ||
              (i === 2 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 2 && j === 2) ||
              (i === 4 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 8 && j === 2) ||
              (i === 10 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && j === 1) {
              if (a.length > maxCharsPerLine + 6) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 200
                } else if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y1 = y1
                  y = y1
                } else if (i === 3 && e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y1 = y1 + singleLineHeight
                  y = y1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 130
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (j === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 4
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 4
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async WeddingCard6(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption

        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              k === 0 ||
              (i === 2 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 2 && k === 2) ||
              (i === 4 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 8 && k === 2) ||
              (i === 10 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && k === 1) {
              if (a.length > maxCharsPerLine + 6) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              //const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              //let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 200
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight + 10
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 130
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (k === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 6
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 3
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 11 || i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption

        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              j === 0 ||
              (i === 2 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 2 && j === 2) ||
              (i === 4 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 8 && j === 2) ||
              (i === 10 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && j === 1) {
              if (a.length > maxCharsPerLine + 6) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if ((i === 1 || i === 2) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 200
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 130
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (j === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 6
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 3
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 11 || i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      //console.log({createdUser})
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async WeddingCard13(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption
        const firstPageCaption1 = (await details.Caption[0].Caption[1]?.y) ?? ''

        let y1 = firstPageCaption1

        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0) {
              if (a.length > maxCharsPerLine - 25) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 25, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && k === 1) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else if (
              (i === 2 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 2 && k === 2) ||
              (i === 4 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 8 && k === 2) ||
              (i === 10 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && k === 1) {
              if (a.length > maxCharsPerLine - 3) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 3, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              //const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              //let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y1 = y1
                  y = y1
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 300
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 150
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 70
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (k === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 6
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 3
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 11 || i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption

        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2
        const secondPageCaption3 = (await details.Caption[1].Caption[7]?.y) ?? ''
        let y_value3 = secondPageCaption3

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0) {
              if (a.length > maxCharsPerLine - 30) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 30, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && j === 1) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else if (
              (i === 2 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 2 && j === 2) ||
              (i === 4 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 8 && j === 2) ||
              (i === 10 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && j === 1) {
              if (a.length > maxCharsPerLine - 3) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 3, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 440
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + 300
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y = y + space
              }
              if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 50
                } else if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 150
                } else if (i === 8 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 70
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  y_value1 = y_value1 + space1
              }

              if (j === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 6
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 3
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 11 || i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //yValue1 = yValue1 + space3
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async WeddingCard14(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine, minCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[1].Caption[0]?.y) ?? ''

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''

        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''
        const firstPageCaption1 = (await details.Caption[0].Caption[1]?.y) ?? ''
        let y = 0
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              k === 0 ||
              (i === 1 && k === 1) ||
              (i === 5 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 3 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 9 && k === 2) ||
              (i === 12 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - minCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && (i === 0 || i === 1)) {
              if (a.length > maxCharsPerLine - minCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                if (i === 0 && e === 0) {
                  y = firstPageCaption
                } else if (i === 1 && e === 0) {
                  y = firstPageCaption1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space
                } else if ((i === 1 || i === 5 || i === 4) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 10
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''

        let y_value = 0

        y_value = y_value + secondPageCaption1

        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''

        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''
        const firstPageCaption1 = (await details.Caption[0].Caption[1]?.y) ?? ''
        let y = 0
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              j === 0 ||
              (i === 1 && j === 1) ||
              (i === 5 && j === 1) ||
              (i === 0 && j === 2) ||
              (i === 3 && j === 2) ||
              (i === 6 && j === 2) ||
              (i === 9 && j === 2) ||
              (i === 12 && j === 2)
            ) {
              if (a.length > maxCharsPerLine - minCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && (i === 0 || i === 1)) {
              if (a.length > maxCharsPerLine - minCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - minCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                if (i === 0 && e === 0) {
                  y = firstPageCaption
                } else if (i === 1 && e === 0) {
                  y = firstPageCaption1
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (j === 1) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space

                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if ((i === 3 || i === 7) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space
                } else if ((i === 1 || i === 5 || i === 4) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 4
                  y_value = y_value + space
                } else if ((i === 2 || i === 6) && e === 0) {
                  space = singleLineHeight + spaceBetweenLines * 10
                  y_value = y_value + space
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //y_value = y_value + space2
              } else if (j === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue
                }

                if ((i === 3 || i === 6 || i === 9 || i === 12) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else if ((i === 1 || i === 4 || i === 7 || i === 10 || i === 13) && e === 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 5
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 3) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                let space = singleLineHeight + spaceBetweenLines

                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                }
                if (i === 1 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space
                }
                if (i === 2 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 3 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                }
                if (i === 4 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 150
                }
                if (i === 5 && e === 0) {
                  fourthPageCaption = fourthPageCaption + space + 40
                } else if (e != 0) {
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)

      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(
      id,
      cardDto.details,
      userid,
      email,
      cardDto.maxCharsPerLine,
      cardDto.minCharsPerLine
    )
  }
  // async WeddingCard6(@Body() cardDto: CardDto) {
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //
  //     const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''
  //
  //     let y = firstPageCaption
  //     const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
  //     let y_value1 = secondPageCaption1
  //     const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
  //     let y_value2 = secondPageCaption2
  //
  //     const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
  //     let yValue1 = thirdPageCaption1
  //
  //     const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
  //     let yValue2 = thirdPageCaption2
  //
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //         let y_value3 = capt.y
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (
  //             k === 0 ||
  //             (i === 2 && k === 1) ||
  //             (i === 5 && k === 1) ||
  //             (i === 0 && k === 2) ||
  //             (i === 2 && k === 2) ||
  //             (i === 4 && k === 2) ||
  //             (i === 6 && k === 2) ||
  //             (i === 8 && k === 2) ||
  //             (i === 10 && k === 2)
  //           ) {
  //             if (a.length > maxCharsPerLine - 16) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if (i === 1 && k === 1) {
  //             if (a.length > maxCharsPerLine + 6) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //             const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //             let x = (image.bitmap.width - textWidth) / 2
  //             let space = singleLineHeight + spaceBetweenLines
  //             let y = capt.y
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y = y + space
  //             }
  //             if (k === 1 && (i === 0 || i === 1)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space1
  //             }
  //             if (k === 1 && (i === 2 || i === 3 || i === 4 || i === 5 || i === 6)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 3
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value2 = y_value2 + space1
  //             }
  //
  //             if (k === 1 && (i === 7 || i === 8)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value3 + space1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value3 = y_value3 + space1
  //             }
  //             if (
  //               k === 2 &&
  //               (i === 0 ||
  //                 i === 1 ||
  //                 i === 2 ||
  //                 i === 3 ||
  //                 i === 4 ||
  //                 i === 5 ||
  //                 i === 6 ||
  //                 i === 7 ||
  //                 i === 8 ||
  //                 i === 9)
  //             ) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 2 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 3
  //               } else if (i % 2 != 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue1 = yValue1 + space3
  //             } else if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               space3 = singleLineHeight2 + spaceBetweenLines
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue2 = yValue2 + space3
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
  //           const allTextHeight = singleLineHeight * text.length // Used to center the whole text
  //           let spaceBetweenLines = 10
  //           //console.log({ text, singleLineHeight, allTextHeight })
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             let space = singleLineHeight * e + spaceBetweenLines * e
  //
  //             if (k === 1 && (i === 0 || i === 1)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space1
  //             }
  //             if (k === 1 && (i === 2 || i === 3 || i === 4 || i === 5 || i === 6)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value2 = y_value2 + space1
  //             }
  //
  //             if (k === 1 && (i === 7 || i === 8)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space1
  //
  //               space1 = singleLineHeight2 + spaceBetweenLines * 2
  //               let y_value3 = capt.y
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value3,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value3 = y_value3 + space1
  //             }
  //             if (
  //               k === 2 &&
  //               (i === 0 ||
  //                 i === 1 ||
  //                 i === 2 ||
  //                 i === 3 ||
  //                 i === 4 ||
  //                 i === 5 ||
  //                 i === 6 ||
  //                 i === 7 ||
  //                 i === 8 ||
  //                 i === 9)
  //             ) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 2 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 3
  //               } else if (i % 2 != 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue1 = yValue1 + space3
  //             }
  //
  //             if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               space3 = singleLineHeight2 + spaceBetweenLines
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue2,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue2 = yValue2 + space3
  //             } else if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 capt.y + space,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //       //console.log({downloadFileName})
  //
  //       //let user = await this.usersService.findByEmail(email)
  //       //console.log({user})
  //     }
  //     // console.log({ downloadFileName })
  //     //console.log({id})
  //     // console.log(typeof id)
  //
  //     // let a=await this.cardetailsService.findOne()
  //     // console.log({a})
  //
  //     //console.log({Details})
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //     // user.OrderCreationId="PENDING";
  //     //             user.RazorpayPaymentId="PENDING";
  //     //             user.RazorpayOrderId="PENDING";
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //     //console.log({createdUser})
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }

  async WeddingCard7(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]
          let y_value3 = capt.y
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if (k === 0) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if (
              (i === 2 && k === 1) ||
              (i === 4 && k === 1) ||
              (i === 0 && k === 2) ||
              (i === 2 && k === 2) ||
              (i === 4 && k === 2) ||
              (i === 6 && k === 2) ||
              (i === 8 && k === 2) ||
              (i === 10 && k === 2)
            ) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 1 && k === 1) {
              if (a.length > maxCharsPerLine + 6) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 6, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let x = (image.bitmap.width - textWidth) / 2
              let space = singleLineHeight + spaceBetweenLines
              if (i === 0 && e === 0) {
                y = capt.y
              }
              if (i === 1 && e === 0) {
                y = capt.y
              } else if (e != 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                y = y + singleLineHeight
              }
              if (k === 0) {
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 1) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space1

                space1 = singleLineHeight2 + spaceBetweenLines * 2
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 20
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 100
                } else if ((i === 3 || i === 4) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 120
                } else if (i === 5 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + 80
                } else if (i === 6 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 150
                } else if (i === 7 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight + 70
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value1 = y_value1 + space1
              }

              if (k === 2) {
                if (i === 0 && e === 0) {
                  yValue1 = yValue1
                }

                if ((i === 2 || i === 4 || i === 6 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 6
                  yValue1 = yValue1 + space
                } else if ((i === 1 || i === 3 || i === 5 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight2 + spaceBetweenLines * 3
                  yValue1 = yValue1 + space
                } else if (i === 11 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight + 20
                } else if (i === 11 || i === 12 || i === 13 || i === 14 || e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  yValue1 = yValue1 + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                //  yValue1 = yValue1 + space3
              }
              // else if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
              //   const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
              //
              //   let space3
              //
              //   space3 = singleLineHeight2 + spaceBetweenLines
              //
              //   await image.print(
              //     font,
              //
              //     x,
              //
              //     yValue2,
              //
              //     { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
              //     textWidth,
              //     singleLineHeight
              //   )
              //   yValue2 = yValue2 + space3
              // }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const firstPageCaption = (await details.Caption[0].Caption[0]?.y) ?? ''

        let y = firstPageCaption
        const secondPageCaption1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        let y_value1 = secondPageCaption1
        const secondPageCaption2 = (await details.Caption[1].Caption[2]?.y) ?? ''
        let y_value2 = secondPageCaption2

        const thirdPageCaption1 = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue1 = thirdPageCaption1

        const thirdPageCaption2 = (await details.Caption[2].Caption[10]?.y) ?? ''
        let yValue2 = thirdPageCaption2
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k === 1 && (i === 0 || i === 1)) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space1

                space1 = singleLineHeight2 + spaceBetweenLines * 2

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y_value1 = y_value1 + space1
              }
              if (k === 1 && (i === 2 || i === 3 || i === 4 || i === 5 || i === 6)) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space1

                space1 = singleLineHeight2 + spaceBetweenLines * 2

                await image.print(
                  font,

                  x,

                  y_value2,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y_value2 = y_value2 + space1
              }

              if (k === 1 && (i === 7 || i === 8)) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space1

                space1 = singleLineHeight2 + spaceBetweenLines * 2
                let y_value3 = capt.y
                await image.print(
                  font,

                  x,

                  y_value3,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y_value3 = y_value3 + space1
              }
              if (
                k === 2 &&
                (i === 0 ||
                  i === 1 ||
                  i === 2 ||
                  i === 3 ||
                  i === 4 ||
                  i === 5 ||
                  i === 6 ||
                  i === 7 ||
                  i === 8 ||
                  i === 9)
              ) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i % 2 == 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 3
                } else if (i % 2 != 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 6
                }

                await image.print(
                  font,

                  x,

                  yValue1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                yValue1 = yValue1 + space3
              }

              if (k === 2 && (i === 10 || i === 11 || i === 12 || i === 13 || i === 14)) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                space3 = singleLineHeight2 + spaceBetweenLines

                await image.print(
                  font,

                  x,

                  yValue2,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                yValue2 = yValue2 + space3
              } else if (k === 0) {
                await image.print(
                  font,

                  x,

                  capt.y + space,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
        //console.log({downloadFileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      // console.log({ downloadFileName })
      //console.log({id})
      // console.log(typeof id)

      // let a=await this.cardetailsService.findOne()
      // console.log({a})

      //console.log({Details})

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName
      // user.OrderCreationId="PENDING";
      //             user.RazorpayPaymentId="PENDING";
      //             user.RazorpayOrderId="PENDING";

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async WeddingCard8(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0 || (i === 1 && k === 1) || (i === 6 && k === 1) || (k === 2 && i % 3 === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && k === 1) {
              if (a.length > maxCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && i === 0) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y1 = capt.y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if (i === 1 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 90
                }
                if (i === 2 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 40
                }
                if (i === 3 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 100
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (k === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if ((i === 2 || i === 7) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 60
                }
                if ((i === 4 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 40
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 60
                }

                if (
                  (i === 1 ||
                    i === 4 ||
                    i === 7 ||
                    i === 10 ||
                    i === 13 ||
                    i === 16 ||
                    i === 3 ||
                    i === 6 ||
                    i === 9 ||
                    i === 12 ||
                    i === 15) &&
                  e === 0
                ) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else if (k === 3) {
                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 80
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 10
                } else if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 120
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if (i === 1 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 90
                }
                if (i === 2 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 40
                }
                if (i === 3 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 100
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (j === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if ((i === 2 || i === 7) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 60
                }
                if ((i === 4 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 40
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (j === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 60
                }

                if (
                  (i === 1 ||
                    i === 4 ||
                    i === 7 ||
                    i === 10 ||
                    i === 13 ||
                    i === 16 ||
                    i === 3 ||
                    i === 6 ||
                    i === 9 ||
                    i === 12 ||
                    i === 15) &&
                  e === 0
                ) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else if (j === 3) {
                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 80
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 10
                } else if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 120
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  // async WeddingCard8(@Body() cardDto: CardDto) {
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //
  //     let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
  //
  //     const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
  //     let yValue = thirdPageCaption
  //
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //
  //       const capt1 = await details.Caption[0].Caption[0]
  //
  //       let y = capt1.y
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //           //console.log({ a })
  //           let text
  //           if (k === 0 || (i === 1 && k === 1) || (i === 6 && k === 1) || (k === 2 && i % 3 === 0)) {
  //             if (a.length > maxCharsPerLine - 20) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if (i === 0 && k === 1) {
  //             if (a.length > maxCharsPerLine + 10) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine + 10, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if (k === 3 && i === 0) {
  //             if (a.length > maxCharsPerLine - 12) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //           let y1 = capt.y
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //             let space = singleLineHeight + spaceBetweenLines
  //
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y1 = y1 + space
  //             }
  //
  //             if (k === 1 && i === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y1 = y1 + singleLineHeight
  //             }
  //
  //             if (
  //               k === 1 &&
  //               (i === 1 ||
  //                 i === 2 ||
  //                 i === 3 ||
  //                 i === 4 ||
  //                 i === 5 ||
  //                 i === 6 ||
  //                 i === 7 ||
  //                 i === 8 ||
  //                 i === 9 ||
  //                 i === 10)
  //             ) {
  //               const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space2
  //               if (i === 2 || i === 4 || i === 7 || i === 9) {
  //                 space2 = singleLineHeight1
  //               } else if (i === 1 || i === 6) {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 5
  //               } else if (i === 5) {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 12
  //               } else {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 2
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space2
  //             } else if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 3 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 0.5
  //               } else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 2
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue = yValue + space3
  //             } else if (k === 3) {
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //                 // y_value + space,
  //                 //capt.x,
  //                 y1,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y1 = y1 + space
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //     // console.log({ fileName })
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //         //console.log({ data, Details })
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
  //           const allTextHeight = singleLineHeight * text.length // Used to center the whole text
  //           let spaceBetweenLines = 10
  //           //console.log({ text, singleLineHeight, allTextHeight })
  //
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             let space = singleLineHeight + spaceBetweenLines
  //             let y = capt.y
  //
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y = y + space
  //             }
  //
  //             if (k === 1 && i === 0) {
  //               const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y = y + space
  //             }
  //
  //             if (k === 1 && i === 1 && i <= 10) {
  //               const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space2
  //               if (i === Number(5)) {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 4
  //               } else {
  //                 space2 = singleLineHeight1 + spaceBetweenLines
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value1 = y_value1 + space2
  //             } else if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i % 3 == 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 0.5
  //               } else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 6
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 2
  //               }
  //               //}
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue = yValue + space3
  //             } else if (k === 3) {
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //                 x,
  //                 // y_value + space,
  //                 //capt.x,
  //                 capt.y + space,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //           // console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //     }
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }
  async WeddingCard9(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''

        let thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption

        const capt1 = await details.Caption[0].Caption[0]

        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              (k === 0 && (i === 3 || i === 4)) ||
              (i === 0 && k === 1) ||
              (i === 5 && k === 1) ||
              (k === 1 && i === 1)
            ) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if ((i === 0 && k === 2) || (k === 2 && i === 2) || (k === 2 && i === 3)) {
              if (a.length > maxCharsPerLine - 8) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 8, 1)
              } else {
                text = [data[i]]
              }
            } else if ((k === 0 && i === 0) || (k === 0 && i === 2)) {
              if (a.length > maxCharsPerLine - 28) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 28, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y1 = capt.y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if ((i === 1 || i === 2) && e === 0) {
                  y = y + 120
                }
                if (i === 3 && e === 0) {
                  let space = singleLineHeight + 100
                  y = y + space
                }
                if (i === 4 && e === 0) {
                  y = y + singleLineHeight + 10
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (k === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 70
                }
                if ((i === 2 || i === 4 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 30
                }
                if (i === 5 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 80
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 2) {
                if (i === 0 && e === 0) {
                  thirdPageCaption = thirdPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight + 150
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight + 10
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  thirdPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''

        let thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption

        const capt1 = await details.Caption[0].Caption[0]

        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (
              (j === 0 && (i === 3 || i === 4)) ||
              (i === 0 && j === 1) ||
              (i === 5 && j === 1) ||
              (k === 1 && j === 1)
            ) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if ((i === 0 && j === 2) || (j === 2 && i === 2) || (j === 2 && i === 3)) {
              if (a.length > maxCharsPerLine - 8) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 8, 1)
              } else {
                text = [data[i]]
              }
            } else if ((j === 0 && i === 0) || (j === 0 && i === 2)) {
              if (a.length > maxCharsPerLine - 28) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 28, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })
            let y1 = capt.y

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if ((i === 1 || i === 2) && e === 0) {
                  y = y + 120
                }
                if (i === 3 && e === 0) {
                  let space = singleLineHeight + 100
                  y = y + space
                }
                if (i === 4 && e === 0) {
                  y = y + singleLineHeight + 10
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (j === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 70
                }
                if ((i === 2 || i === 4 || i === 7 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 10
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 30
                }
                if (i === 5 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 80
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 2) {
                if (i === 0 && e === 0) {
                  thirdPageCaption = thirdPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight + 150
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight + 10
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  thirdPageCaption = thirdPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  thirdPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  // async WeddingCard9(@Body() cardDto: CardDto) {
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //
  //     let y_value = (await details.Caption[1].Caption[0]?.y) ?? ''
  //
  //     const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
  //     let yValue = thirdPageCaption
  //
  //     const thirdPageCaption1 = (await details.Caption[2].Caption[1]?.y) ?? ''
  //     let yValue1 = thirdPageCaption1
  //     const capt1 = await details.Caption[0].Caption[0]
  //
  //     let y = 0
  //     y = y + capt1.y
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //           //console.log({ a })
  //           let text
  //           if (
  //             (k === 0 && (i === 3 || i === 4)) ||
  //             (i === 0 && k === 1) ||
  //             (i === 5 && k === 1) ||
  //             (k === 1 && i === 1)
  //           ) {
  //             if (a.length > maxCharsPerLine - 20) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if ((i === 0 && k === 2) || (k === 2 && i === 2) || (k === 2 && i === 3)) {
  //             if (a.length > maxCharsPerLine - 8) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 8, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else if ((k === 0 && i === 0) || (k === 0 && i === 2)) {
  //             if (a.length > maxCharsPerLine - 28) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 28, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //           let y1 = capt.y
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //             let space = singleLineHeight + spaceBetweenLines
  //
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y = y + space
  //             }
  //
  //             // if (k === 1) {
  //             //   const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //             //
  //             //   let space2
  //             //   if (i === 4) {
  //             //     space2 = singleLineHeight1 + spaceBetweenLines * 10
  //             //   } else {
  //             //     space2 = singleLineHeight1 + spaceBetweenLines * 2
  //             //   }
  //             //
  //             //   await image.print(
  //             //     font,
  //             //
  //             //     x,
  //             //
  //             //     y_value,
  //             //
  //             //     { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //             //     textWidth,
  //             //     singleLineHeight
  //             //   )
  //             //   y_value = y_value + space2
  //             // }
  //             if (k === 1) {
  //               const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space2
  //               if (i === 4) {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 10
  //                 //y_value = y_value + space2 +
  //               } else {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 2
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value = y_value + space2
  //             } else if (k === 2 && i === 0) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               space3 = singleLineHeight2 + spaceBetweenLines
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue = yValue + space3
  //             } else if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i === 1) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 5
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines
  //               }
  //               yValue1 = yValue1 + space3
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue1,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               // yValue = yValue + space3
  //             }
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //     // console.log({ fileName })
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //         //console.log({ data, Details })
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
  //           const allTextHeight = singleLineHeight * text.length // Used to center the whole text
  //           let spaceBetweenLines = 10
  //           //console.log({ text, singleLineHeight, allTextHeight })
  //           let y1 = capt.y
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //             let space = singleLineHeight + spaceBetweenLines
  //
  //             if (k === 0) {
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y1,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y1 = y1 + space
  //             }
  //
  //             if (k === 1) {
  //               const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space2
  //               if (i === 4) {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 6
  //               } else {
  //                 space2 = singleLineHeight1 + spaceBetweenLines * 2
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value,
  //
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value = y_value + space2
  //             } else if (k === 2) {
  //               const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)
  //
  //               let space3
  //
  //               if (i === 0) {
  //                 space3 = singleLineHeight2 + spaceBetweenLines * 5
  //               } else {
  //                 space3 = singleLineHeight2 + spaceBetweenLines
  //               }
  //
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 yValue,
  //                 // y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               yValue = yValue + space3
  //             }
  //           }
  //           // console.log({b})
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //     }
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }
  async WeddingCard11(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0 || (i === 1 && k === 1) || (i === 6 && k === 1) || (k === 2 && i % 3 === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && k === 1) {
              if (a.length > maxCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && i === 0) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y1 = capt.y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if (i === 1 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines
                  y = y + space + 20
                }
                if (i === 2 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines
                  y = y + space + 30
                }
                if (i === 3 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + space + 400
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (k === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if ((i === 2 || i === 7) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 60
                }
                if ((i === 4 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 40
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 60
                }

                if (
                  (i === 1 ||
                    i === 4 ||
                    i === 7 ||
                    i === 10 ||
                    i === 13 ||
                    i === 16 ||
                    i === 3 ||
                    i === 6 ||
                    i === 9 ||
                    i === 12 ||
                    i === 15) &&
                  e === 0
                ) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else if (k === 3) {
                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 80
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 10
                } else if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 120
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        const secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            //console.log({ text, singleLineHeight, allTextHeight })

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight + spaceBetweenLines
              let y = capt.y

              if (k === 0) {
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y = y + space
              }

              if (k === 1 && i === 0) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y = y + space
              }

              if (k === 1 && i === 1 && i <= 10) {
                const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space2
                if (i === Number(5)) {
                  space2 = singleLineHeight1 + spaceBetweenLines * 4
                } else {
                  space2 = singleLineHeight1 + spaceBetweenLines
                }

                await image.print(
                  font,

                  x,

                  y_value1,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y_value1 = y_value1 + space2
              } else if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i % 3 == 0) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 0.5
                } else if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 6
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines * 2
                }
                //}

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                yValue = yValue + space3
              } else if (k === 3) {
                await image.print(
                  font,
                  // image.bitmap.width / 3,
                  x,
                  // y_value + space,
                  //capt.x,
                  capt.y + space,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async WeddingCard12(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        const firstPageCaption = (await details.Caption[0].Caption[1]?.y) ?? ''

        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0 || (i === 1 && k === 1) || (i === 6 && k === 1) || (k === 2 && i % 3 === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && k === 1) {
              if (a.length > maxCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (k === 3 && i === 0) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y1 = capt.y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (k === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if (i === 1 && e === 0) {
                  y = firstPageCaption
                }
                if (i === 2 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = firstPageCaption + space + 200
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (k === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if ((i === 2 || i === 7) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 60
                }
                if ((i === 4 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 40
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (k === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 60
                }

                if (
                  (i === 1 ||
                    i === 4 ||
                    i === 7 ||
                    i === 10 ||
                    i === 13 ||
                    i === 16 ||
                    i === 3 ||
                    i === 6 ||
                    i === 9 ||
                    i === 12 ||
                    i === 15) &&
                  e === 0
                ) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else if (k === 3) {
                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 80
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 10
                } else if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 120
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }
      // console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y
        const firstPageCaption = (await details.Caption[0].Caption[1]?.y) ?? ''

        let y_value1 = (await details.Caption[1].Caption[1]?.y) ?? ''
        let secondPageCaption = (await details.Caption[1].Caption[0]?.y) ?? ''
        const thirdPageCaption = (await details.Caption[2].Caption[0]?.y) ?? ''
        let yValue = thirdPageCaption
        let fourthPageCaption = (await details.Caption[3].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({ data, Details })
          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0 || (i === 1 && k === 1) || (i === 6 && k === 1) || (j === 2 && i % 3 === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else if (i === 0 && j === 1) {
              if (a.length > maxCharsPerLine + 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine + 10, 1)
              } else {
                text = [data[i]]
              }
            } else if (j === 3 && i === 0) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y1 = capt.y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              const singleLineHeight1 = Jimp.measureTextHeight(font, 'a', textWidth)
              let space = singleLineHeight + spaceBetweenLines

              if (j === 0) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                if (i === 0 && e === 0) {
                  y = y
                }
                if (i === 1 && e === 0) {
                  y = firstPageCaption
                }
                if (i === 2 && e === 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = firstPageCaption + space + 200
                } else if (e != 0) {
                  let space = singleLineHeight + spaceBetweenLines * 3
                  y = y + singleLineHeight
                }
                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }

              if (j === 1) {
                let space
                if (i === 0 && e === 0) {
                  secondPageCaption = secondPageCaption
                }
                if ((i === 1 || i === 6) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 100
                }
                if ((i === 2 || i === 7) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 60
                }
                if ((i === 4 || i === 9) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight + 40
                }
                if ((i === 3 || i === 5 || i === 8 || i === 10) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  secondPageCaption = secondPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  secondPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
              if (j === 2) {
                const singleLineHeight2 = Jimp.measureTextHeight(font, 'a', textWidth)

                let space3

                if (i === 0 && e === 0) {
                  yValue = yValue - 60
                }

                if (
                  (i === 1 ||
                    i === 4 ||
                    i === 7 ||
                    i === 10 ||
                    i === 13 ||
                    i === 16 ||
                    i === 3 ||
                    i === 6 ||
                    i === 9 ||
                    i === 12 ||
                    i === 15) &&
                  e === 0
                ) {
                  space3 = singleLineHeight2 + spaceBetweenLines * 4
                  yValue = yValue + space3
                } else {
                  space3 = singleLineHeight2 + spaceBetweenLines
                  yValue = yValue + space3
                }

                await image.print(
                  font,

                  x,

                  yValue,
                  // y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // yValue = yValue + space3
              } else if (j === 3) {
                if (i === 0 && e === 0) {
                  fourthPageCaption = fourthPageCaption
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 80
                } else if ((i === 2 || i === 3) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 10
                } else if (i === 4 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight + 120
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  fourthPageCaption = fourthPageCaption + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  fourthPageCaption,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async WeddingCard15(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (k === 0 || (i === 0 && k === 1) || (i === 1 && k === 1)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (k == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2

                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 12

                  y = y + space
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 5
                  y = y + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y = y + space1
              } else if (k == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space + 80
                }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                }
                // if (i === 2 && e === 0) {
                //   const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                //   let space = singleLineHeight + spaceBetweenLines * 2
                //   y_value = y_value + space
                // }
                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 100
                }
                if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt2 = (await details.Caption[1].Caption[0]?.y) ?? ''
        const capt3 = (await details.Caption[1].Caption[3]?.y) ?? ''
        let y_value = capt2
        const capt1 = await details.Caption[0].Caption[0]

        let y = capt1.y

        let yValue = capt3
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (j === 0 || (i === 0 && j === 1) || (i === 1 && j === 1)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (j == 0) {
                textWidth = Jimp.measureText(font, text[e])

                let x = (image.bitmap.width - textWidth) / 2

                if (i === 0 && e === 0) {
                  y = y
                } else if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 12

                  y = y + space
                } else if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 5
                  y = y + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y = y + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y = y + space1
              } else if (j == 1) {
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines * 2
                  y_value = y_value + space + 80
                }
                if (i === 2 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                }

                if (i === 3 && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space + 100
                }
                if ((i === 4 || i === 5) && e === 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
                  let space = singleLineHeight + spaceBetweenLines
                  y_value = y_value + space
                } else if (e != 0) {
                  const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,

                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async AnniversaryCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (i === 2) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }

              await image.print(
                font,

                x,

                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (i === 2) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }
              await image.print(
                font,
                x,
                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async AnniversaryCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (e === 0 && i === 0) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }

              await image.print(
                font,

                x,

                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (e === 0 && i === 0) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }
              await image.print(
                font,
                x,
                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async AnniversaryCard2(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if ((e === 0 && i === 1 && k === 0) || (e === 0 && i === 0 && k === 1)) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }

              await image.print(
                font,

                x,

                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if ((e === 0 && i === 1 && k === 0) || (e === 0 && i === 0 && k === 1)) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }
              await image.print(
                font,
                x,
                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async AnniversaryCard3(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (e === 0 && i === 1 && k === 0) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }

              await image.print(
                font,

                x,

                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x

              let space = singleLineHeight * e + spaceBetweenLines * e

              if (e === 0 && i === 1 && k === 0) {
                x = capt.x
              } else {
                x = (image.bitmap.width - textWidth) / 2
              }
              await image.print(
                font,
                x,
                capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)
      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async ThankYouCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 20

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e
              y = y + space1
              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }

            y = y + 20
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 20
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x = (image.bitmap.width - textWidth) / 2
              y = y + space1

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                x,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }

            y = y + 20
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async GetWellSoonCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 15

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }
            y = y + 10
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 15
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x = (image.bitmap.width - textWidth) / 2

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                x,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }
            y = y + 10
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async GetWellSoonCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }

            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x = (image.bitmap.width - textWidth) / 2

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                x,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async EngagementCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((i === 0 && k === 0) || (i === 2 && k === 0)) {
              if (a.length > maxCharsPerLine - 13) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 13, 1)
              } else {
                text = [data[i]]
              }
            } else if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines
              if (i === 0) {
                y = y
              }
              if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                y = y + 20 + singleLineHeight
              }

              if (i === 3 && e === 0) {
                y = y + 150 + singleLineHeight
              }
              if (i === 5 && e === 0) {
                y = y + 80 + singleLineHeight
              } else if (i === 4 || e != 0) {
                y = y + singleLineHeight
              }

              // if (i === 0) {
              //   y = y
              // }
              // if ((i === 3 && e === 0) || (i === 5 && e === 0)) {
              //   y = y + 60 + singleLineHeight
              // }

              await image.print(
                font,

                x,
                y,
                // capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              // y = y + space1
            }

            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((i === 0 && j === 0) || (i === 2 && j === 0)) {
              if (a.length > maxCharsPerLine - 13) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 13, 1)
              } else {
                text = [data[i]]
              }
            } else if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines

              if (i === 0) {
                y = y
              }
              if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                y = y + 20 + singleLineHeight
              }

              if (i === 3 && e === 0) {
                y = y + 150 + singleLineHeight
              }
              if (i === 5 && e === 0) {
                y = y + 80 + singleLineHeight
              } else if (i === 4 || e != 0) {
                y = y + singleLineHeight
              }
              await image.print(
                font,

                x,
                y,
                // capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              // y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async EngagementCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        let y1 = (await details.Caption[0].Caption[3]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((i === 0 && k === 0) || (i === 2 && k === 0)) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines
              if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                y = y + 30
              }
              if (i === 3 && e === 0) {
                y1 = y1
                y = y1
              }
              if ((i === 3 && e != 0) || i === 4) {
                y1 = y1 + singleLineHeight
                y = y1
              }
              if (i === 5 && e === 0) {
                y = y + 40
              }

              await image.print(
                font,

                x,
                y,
                // capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y1 = (await details.Caption[0].Caption[3]?.y) ?? ''
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((i === 0 && j === 0) || (i === 2 && j === 0)) {
              if (a.length > maxCharsPerLine - 16) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 16, 1)
              } else {
                text = [data[i]]
              }
            } else if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 10
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines
              // if ((i === 0 && e === 0) || (i === 1 && e === 0) || (i === 2 && e === 0)) {
              //   y = y + 40
              // }
              // if (i === 3 && e === 0) {
              //   y = y + 150
              // }
              // if (i === 5 && e === 0) {
              //   y = y + 80
              // }

              if ((i === 1 && e === 0) || (i === 2 && e === 0)) {
                y = y + 30
              }
              if (i === 3 && e === 0) {
                y1 = y1
                y = y1
              }
              if ((i === 3 && e != 0) || i === 4) {
                y1 = y1 + singleLineHeight
                y = y1
              }
              if (i === 5 && e === 0) {
                y = y + 40
              }

              await image.print(
                font,

                x,
                y,
                // capt.y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async MissYouCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 15

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (i == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                // capt.x,
                // x_value,
                (image.bitmap.width - textWidth) / 2.75,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 15
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (i == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                // capt.x,
                // x_value,
                (image.bitmap.width - textWidth) / 2.75,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async MissYouCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 20

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (e == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 20
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x = (image.bitmap.width - textWidth) / 2
              let x_value
              if (e == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                // capt.x + 70,
                x,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }

            y = y + 10
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async MissYouCard2(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 15

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (e == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                capt.x + 70,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 15
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x = (image.bitmap.width - textWidth) / 2
              let x_value
              if (e == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                capt.x + 70,
                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y = y + space1
            }

            y = y + 10
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)

      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async MissYouCard3(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 15

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (i == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                // capt.x,
                // x_value,
                (image.bitmap.width - textWidth) / 2,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 15
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight * e + spaceBetweenLines * e

              let x_value
              if (i == 0) {
                x_value = capt.x + 70
              } else {
                x_value = (image.bitmap.width - textWidth) / 1.25
              }

              await image.print(
                font,

                // capt.x,
                // x_value,
                (image.bitmap.width - textWidth) / 2,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space1
            }

            y = y + 10
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async CongratulationsCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k
      const capt1 = await details.Caption[0].Caption[0]
      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 12

            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight + spaceBetweenLines

              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space
            }
            y = y + 50
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y = 0
        y = y + capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth) // Just to have the height of a line, could be any char
            const allTextHeight = singleLineHeight * text.length // Used to center the whole text
            let spaceBetweenLines = 12
            let space1 = singleLineHeight + spaceBetweenLines

            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              let space = singleLineHeight + spaceBetweenLines

              await image.print(
                font,

                x,

                y,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )

              y = y + space
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName
      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email
    let maxCharsPerLine = cardDto.maxCharsPerLine

    return await generatePreviewImage(id, cardDto.details, userid, email, maxCharsPerLine)
  }

  async BabyShowerCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt1 = await details.Caption[0].Caption[0]
        let y1 = capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (i === 0) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              if (i === details.Caption[k].Caption.length - 1) {
                y = capt.y + (singleLineHeight / 1.5) * e
              } else {
                y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              }

              let space1 = singleLineHeight + spaceBetweenLines * 2
              // if (i === 0) {
              //   y1 = y1
              // } else if (i === 1) {
              //   y1 = y1 + space1 + 40
              // } else {
              //   y1 = y1 + space1
              // }
              if (i === 0 && e === 0) {
                y1 = y1
              }
              if (i === 1 && e === 0) {
                y1 = y1 + 185
              }
              if (i === 3 && e === 0) {
                y1 = y1 + 170
              }
              if (i === 4 && e === 0) {
                y1 = y1 + 100
              } else if ((i === 2 && e === 0) || e != 0) {
                y1 = y1 + singleLineHeight
              }
              // if (i === 3) {
              //   y1 = y1 + space1
              // } else {
              //   y1 = y1
              // }

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y1,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              // y1 = y1 + space1
            }

            // y1 = y1 + 20
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y1 = capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (i === 0) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              // if (i === details.Caption[k].Caption.length - 1) {
              //   y = capt.y + (singleLineHeight / 1.5) * e
              // } else {
              //   y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              // }

              let space1 = singleLineHeight + spaceBetweenLines * 2
              // if (i === 0) {
              //   y1 = y1
              // } else if (i === 1) {
              //   y1 = y1 + space1 + 40
              // } else {
              //   y1 = y1 + space1
              // }

              if (i === 0 && e === 0) {
                y1 = y1
              }
              if (i === 1 && e === 0) {
                y1 = y1 + 185
              }
              if (i === 3 && e === 0) {
                y1 = y1 + 170
              }
              if (i === 4 && e === 0) {
                y1 = y1 + 100
              } else if ((i === 2 && e === 0) || e != 0) {
                y1 = y1 + singleLineHeight
              }
              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y1,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              //y1 = y1 + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async BabyShowerCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[0].Caption[1]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              // if (i === details.Caption[k].Caption.length - 1) {
              //   y = capt.y + (singleLineHeight / 1.5) * e
              // } else {
              //   y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              // }
              if (i === 0 && e === 0) {
                y_value = y_value
              }
              if (i === 1 && e === 0) {
                // y_value = y_value + 610
                y_value1 = y_value1
                y_value = y_value1
              }
              if (i === 3 && e === 0) {
                y_value = y_value + 200
              }
              if (i === 4 && e === 0) {
                y_value = y_value + 80
              } else if ((i === 2 && e === 0) || e != 0) {
                y_value = y_value + singleLineHeight
              }
              let space1 = singleLineHeight + spaceBetweenLines * 2

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y_value,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
            // y1 = y1 + 20
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[0].Caption[1]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2
              //
              // if (i === details.Caption[j].Caption.length - 1) {
              //   y = capt.y + (singleLineHeight / 1.5) * e
              // } else {
              //   y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              // }
              if (i === 0 && e === 0) {
                y_value = y_value
              }
              if (i === 1 && e === 0) {
                // y_value = y_value + 610
                y_value1 = y_value1
                y_value = y_value1
              }
              if (i === 3 && e === 0) {
                y_value = y_value + 200
              }
              if (i === 4 && e === 0) {
                y_value = y_value + 80
              } else if ((i === 2 && e === 0) || e != 0) {
                y_value = y_value + singleLineHeight
              }

              await image.print(
                font,
                // image.bitmap.width / 3,
                // capt.y + singleLineHeight * e + spaceBetweenLines * e,
                x,
                y_value,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async BabyShowerCard2(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k
      const capt1 = await details.Caption[0].Caption[0]
      let y1 = capt1.y
      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))

        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              if (i === details.Caption[k].Caption.length - 1) {
                y = capt.y + (singleLineHeight / 1.5) * e
              } else {
                y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              }

              let space1 = singleLineHeight

              if (i === 3) {
                y1 = y1 + 50
              } else {
                y1 = y1
              }

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y1,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y1 = y1 + space1
            }
            // y1 = y1 + 20
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt2 = await details.Caption[0].Caption[0]
        let y2 = capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              // if (i === details.Caption[j].Caption.length - 1) {
              //   y = capt.y + (singleLineHeight / 1.5) * e
              // } else {
              y = capt.y + singleLineHeight * e + spaceBetweenLines * e
              // }

              let space1 = singleLineHeight

              if (i === 3) {
                y2 = y2 + 50
              } else {
                y2 = y2
              }

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y2,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y2 = y2 + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  async BabyShowerCard3(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt1 = await details.Caption[0].Caption[0]
        let y1 = capt1.y
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines * 2

              if ((i === 1 || i === 3) && e === 0) {
                y1 = y1 + space1
              } else {
                y1 = y1
              }

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y1,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y1 = y1 + space1
            }
            // y1 = y1 + 20
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        const capt1 = await details.Caption[0].Caption[0]
        let y1 = capt1.y
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if (a.length > maxCharsPerLine) {
              text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
            } else {
              text = [data[i]]
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
              let spaceBetweenLines = 10
              let x = (image.bitmap.width - textWidth) / 2

              let space1 = singleLineHeight + spaceBetweenLines * 2

              if ((i === 1 || i === 3) && e === 0) {
                y1 = y1 + space1
              } else {
                y1 = y1
              }

              await image.print(
                font,
                // image.bitmap.width / 3,

                x,

                //capt.x,
                y1,
                { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                textWidth,
                singleLineHeight
              )
              y1 = y1 + space1
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async ReceptionCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''

        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if ((k === 0 && i === 0) || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 24) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 24, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 180
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 300
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 120
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''

        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((j === 0 && i === 0) || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 24) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 24, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 180
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 300
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 120
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async ReceptionCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if ((k === 0 && i === 0) || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 255
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 735
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 136
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((j === 0 && i === 0) || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 255
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 735
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 136
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async ReceptionCard2(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if ((k === 0 && i === 0) || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 470
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1 - 200
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 300
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 136
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if ((j === 0 && i === 0) || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 20) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 470
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1 - 200
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 300
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 136
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async ReceptionCard3(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text

            if ((k === 0 && i === 0) || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 24) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 24, 1)
              } else {
                text = [data[i]]
              }
            } else if ((k === 0 && i === 1) || (k === 1 && i === 1)) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 142
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (k === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 242
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 95
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
        let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
        let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''

            let text
            if ((j === 0 && i === 0) || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 24) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 24, 1)
              } else {
                text = [data[i]]
              }
            } else if ((j === 0 && i === 1) || (j === 1 && i === 1)) {
              if (a.length > maxCharsPerLine - 12) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 12, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])

              let x = (image.bitmap.width - textWidth) / 2

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                let space = singleLineHeight + spaceBetweenLines
                if (i === 0 && e === 0) {
                  y_value = y_value
                }
                if (i === 1 && e === 0) {
                  y_value = y_value + 142
                } else if (e != 0) {
                  y_value = y_value + singleLineHeight
                }

                await image.print(
                  font,

                  x,

                  y_value,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                // y_value = y_value + singleLineHeight
              } else if (j === 1) {
                if (i === 0 && e === 0) {
                  y_value1 = y_value1
                }
                if (i === 1 && e === 0) {
                  y_value1 = y_value1 + 242
                }
                if (i === 2 && e === 0) {
                  y_value1 = y_value1 + 95
                } else if (e != 0) {
                  y_value1 = y_value1 + singleLineHeight
                }

                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y_value1,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }
  // async ReceptionCard(@Body() cardDto: CardDto) {
  //   // console.log({ cardDto })
  //   const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
  //     let fileName = []
  //     var image
  //     const details = await this.cardetailsService.find(id)
  //
  //     let k
  //     let y_value = (await details.Caption[0].Caption[0]?.y) ?? ''
  //     let y_value1 = (await details.Caption[1].Caption[0]?.y) ?? ''
  //     for (k = 0; k < details.noOfPages; k++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
  //
  //       for (let i = 0; i < details.Caption[k].Caption.length; i++) {
  //         const capt = await details.Caption[k].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //
  //         let data = Object.values(Details[k])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //
  //           if ((k === 0 && i === 0) || (k === 1 && i === 0)) {
  //             if (a.length > maxCharsPerLine - 20) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine - 20, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           } else {
  //             if (a.length > maxCharsPerLine) {
  //               text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //             } else {
  //               text = [data[i]]
  //             }
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //
  //           let space1 = singleLineHeight + spaceBetweenLines
  //           let y
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             // if (i === details.Caption[k].Caption.length - 1) {
  //             //   y = capt.y + (singleLineHeight / 1.5) * e
  //             // } else {
  //             y = capt.y + singleLineHeight * e + spaceBetweenLines * e
  //             //}
  //
  //             // y = y + space1
  //             if (k === 0) {
  //               let space = singleLineHeight + spaceBetweenLines
  //               await image.print(
  //                 font,
  //
  //                 x,
  //
  //                 y_value,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //               y_value = y_value + space
  //             } else {
  //               await image.print(
  //                 font,
  //                 // image.bitmap.width / 3,
  //
  //                 x,
  //
  //                 //capt.x,
  //                 y,
  //                 { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //                 textWidth,
  //                 singleLineHeight
  //               )
  //             }
  //           }
  //           // await image.print(font, capt.x, capt.y, data[i])
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[k].previewPage.replace(
  //         extname(details.Caption[k].previewPage),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[k].previewPage)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       fileName.push(newFileName)
  //     }
  //
  //     let downloadFileName = []
  //
  //     for (let j = 0; j < details.noOfPages; j++) {
  //       image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))
  //
  //       for (let i = 0; i < details.Caption[j].Caption.length; i++) {
  //         const capt = await details.Caption[j].Caption[i]
  //
  //         let jimpfont = resolve(__dirname, 'fonts', capt.font)
  //         const font = await Jimp.loadFont(jimpfont)
  //         let data = Object.values(Details[j])
  //
  //         if (data[i]) {
  //           let a: any
  //           a = data[i]
  //           a = a?.replace(/\s/g, '') ?? ''
  //
  //           let text
  //           if (a.length > maxCharsPerLine) {
  //             text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
  //           } else {
  //             text = [data[i]]
  //           }
  //
  //           let textWidth = Jimp.measureText(font, text)
  //           const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
  //           const allTextHeight = singleLineHeight * text.length
  //           let spaceBetweenLines = 10
  //           let y
  //           for (let e = 0; e < text.length; e++) {
  //             textWidth = Jimp.measureText(font, text[e])
  //
  //             let x = (image.bitmap.width - textWidth) / 2
  //
  //             if (i === details.Caption[j].Caption.length - 1) {
  //               y = capt.y + (singleLineHeight / 1.5) * e
  //             } else {
  //               y = capt.y + singleLineHeight * e + spaceBetweenLines * e
  //             }
  //
  //             await image.print(
  //               font,
  //               // image.bitmap.width / 3,
  //               // capt.y + singleLineHeight * e + spaceBetweenLines * e,
  //               x,
  //               y,
  //               { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
  //               textWidth,
  //               singleLineHeight
  //             )
  //           }
  //         } else {
  //         }
  //       }
  //       const newFileName = `${details.Caption[j].page.replace(
  //         extname(details.Caption[j].page),
  //         ''
  //       )}-${Date.now()}${extname(details.Caption[j].page)}`
  //
  //       await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))
  //
  //       downloadFileName.push(newFileName)
  //     }
  //
  //     const user = new UserCardEntity()
  //     user.userId = userid
  //     user.email = email
  //     user.cardCategory = details.cardCategory
  //     user.previewCardNames = fileName
  //     user.cardNames = downloadFileName
  //
  //     user.text = Details
  //     user.cardId = id
  //     user.cardSalePrice = details.cardSalePrice
  //     user.cardTotalPrice = details.cardTotalPrice
  //     user.noOfPages = details.noOfPages
  //     user.description = details.description
  //     const createdUser = this.usersCardRepository.create(user)
  //
  //     return this.usersCardRepository.save(createdUser)
  //   }
  //   let id = cardDto.id.toString()
  //   let userid = cardDto.userId
  //   let email = cardDto.email
  //
  //   return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  // }

  async BirthdayCard(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt2 = await details.Caption[1].Caption[0]
        let y2 = capt2?.y ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          //console.log()
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            let text
            if (k === 0 || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x
              // if (i === 0) {
              //   x = capt.x
              // } else {
              x = (image.bitmap.width - textWidth) / 2
              //}

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                x = (image.bitmap.width - textWidth) / 2
                await image.print(
                  font,

                  x,

                  y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space = singleLineHeight
                if (i === 4) {
                  y2 = y2 + 100
                } else {
                  y2 = y2
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y2,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y2 = y2 + space
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        const capt2 = await details.Caption[1].Caption[0]
        let y2 = capt2?.y ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            let text
            if (j === 0 || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 15) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 15, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }
            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x
              // if (i === 0) {
              //   x = capt.x
              // } else {
              x = (image.bitmap.width - textWidth) / 2
              //}

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                x = (image.bitmap.width - textWidth) / 2
                await image.print(
                  font,

                  x,

                  y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space = singleLineHeight
                if (i === 4) {
                  y2 = y2 + 100
                } else {
                  y2 = y2
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y2,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y2 = y2 + space
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  async BirthdayCard1(@Body() cardDto: CardDto) {
    const generatePreviewImage = async (id, Details, userid, email, maxCharsPerLine) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      let k

      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[k].previewPage))
        const capt2 = await details.Caption[1].Caption[0]
        let y2 = capt2?.y ?? ''
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          const capt = await details.Caption[k].Caption[i]

          //console.log()
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            let text
            if (k === 0 || (k === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }

            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10

            let space1 = singleLineHeight + spaceBetweenLines
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x
              // if (i === 0) {
              //   x = capt.x
              // } else {
              x = (image.bitmap.width - textWidth) / 2
              //}

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (k === 0) {
                x = (image.bitmap.width - textWidth) / 2
                await image.print(
                  font,

                  x,

                  y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (k === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space = singleLineHeight
                if (i === 3) {
                  y2 = y2 + 100
                } else {
                  y2 = y2
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y2,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y2 = y2 + space
              }
            }
            // await image.print(font, capt.x, capt.y, data[i])
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        fileName.push(newFileName)
      }

      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.cardCategory, details.Caption[j].page))

        const capt2 = await details.Caption[1].Caption[0]
        let y2 = capt2?.y ?? ''
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          const capt = await details.Caption[j].Caption[i]

          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])

          if (data[i]) {
            let a: any
            a = data[i]
            a = a?.replace(/\s/g, '') ?? ''
            let text
            if (j === 0 || (j === 1 && i === 0)) {
              if (a.length > maxCharsPerLine - 10) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine - 10, 1)
              } else {
                text = [data[i]]
              }
            } else {
              if (a.length > maxCharsPerLine) {
                text = breakTextToLines(data[i] as string, maxCharsPerLine, 1)
              } else {
                text = [data[i]]
              }
            }
            let textWidth = Jimp.measureText(font, text)
            const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)
            const allTextHeight = singleLineHeight * text.length
            let spaceBetweenLines = 10
            let y
            for (let e = 0; e < text.length; e++) {
              textWidth = Jimp.measureText(font, text[e])
              let x
              // if (i === 0) {
              //   x = capt.x
              // } else {
              x = (image.bitmap.width - textWidth) / 2
              //}

              y = capt.y + singleLineHeight * e + spaceBetweenLines * e

              if (j === 0) {
                x = (image.bitmap.width - textWidth) / 2
                await image.print(
                  font,

                  x,

                  y,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
              } else if (j === 1) {
                const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth)

                let space = singleLineHeight
                if (i === 3) {
                  y2 = y2 + 100
                } else {
                  y2 = y2
                }
                await image.print(
                  font,
                  // image.bitmap.width / 3,

                  x,

                  //capt.x,
                  y2,
                  { text: text[e], alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, alignmentY: Jimp.VERTICAL_ALIGN_CENTER },
                  textWidth,
                  singleLineHeight
                )
                y2 = y2 + space
              }
            }
          } else {
          }
        }
        const newFileName = `${details.Caption[j].page.replace(
          extname(details.Caption[j].page),
          ''
        )}-${Date.now()}${extname(details.Caption[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', details.cardCategory, newFileName))

        downloadFileName.push(newFileName)
      }

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardCategory = details.cardCategory
      user.previewCardNames = fileName
      user.cardNames = downloadFileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      user.description = details.description
      const createdUser = this.usersCardRepository.create(user)

      const data = await this.usersCardRepository.save(createdUser)
      return { data, status: 'Success', message: 'Successfully Created' }
    }
    let id = cardDto.id.toString()
    let userid = cardDto.userId
    let email = cardDto.email

    return await generatePreviewImage(id, cardDto.details, userid, email, cardDto.maxCharsPerLine)
  }

  findAll(relations: string[] = []) {
    return this.usersCardRepository.find({ relations })
  }

  findById(id: string, relations: string[] = []) {
    return this.usersCardRepository.findOne({ id }, { relations })
  }

  async find(userId: string) {
    return await this.usersCardRepository.find({ userId })
  }

  // async find(UserId: string) {
  //
  //     const count=await this.usersCardRepository.count({UserId})
  //     console.log({count})
  //
  //     const data=await this.usersCardRepository.find({ UserId })
  //
  //     return{
  //         Count:count,
  //         data
  //     }
  // }

  async groupByUserId(userId: string) {
    return await this.usersCardRepository.findAndCount({ userId })
  }

  async updatepaymentstatus(id: string, data: any): Promise<any> {
    try {
      await this.usersCardRepository.update(id, data)

      return {
        success: true,
        message: 'Successfully updated Payment Status'
      }
    } catch (err) {
      console.log({ err })
    }
  }

  async findOne(id: string) {
    return await this.usersCardRepository.findOne(id)
  }

  async remove(id: string) {
    try {
      await this.usersCardRepository.delete(id)

      return {
        success: true,
        message: 'Successfully Deleted'
      }
    } catch (e) {
      console.log({ e })
    }
  }

  async remove1(email: string) {
    try {
      await this.usersCardRepository.delete({ email: email })

      return {
        success: true,
        message: 'Successfully Deleted'
      }
    } catch (e) {
      console.log({ e })
    }
  }
}
