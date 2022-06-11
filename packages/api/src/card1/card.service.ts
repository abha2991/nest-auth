import { Body, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

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

const breakTextToLines = (text: any, maxCharsPerLine: number, minWordsPerLine: number) => {
  // Function takes text and breaks it to lines where every line is the closest to maxCharsPerLine as possible
  // Line breaks only at ' ' so no words are cut
  const words = text.split(' ')
  let lines: string[] = []
  let charCount = 0
  let currLine = ''

  for (const word of words) {
    // every max amount of chars make a new line
    if (charCount + word.length > maxCharsPerLine) {
      lines.push(currLine)
      currLine = ''
      charCount = 0
    } else if (currLine !== '') {
      // Don't add space at first
      currLine += ' '
    }
    charCount += word.length
    currLine += word
  }
  // Add last line that we didn't get to the end of it
  // Optional, add to last line only if it has more than 2 words
  if (currLine.split(' ').length < minWordsPerLine) {
    lines.push(lines.pop() + ' ' + currLine)
  } else {
    lines.push(currLine)
  }

  if (lines.length === 0) {
    // Which means text is shorter than MAX_CHARS_PER_LINE
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
        console.log({ fileName })

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }

      console.log(typeof id)
      const details = await this.cardetailsService.find(id)
      console.log({ details })

      const user = new UserCardEntity()
      user.userId = userid
      user.cardType = 'WeddingInvitation'
      user.cardNames = fileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      const createdUser = this.usersCardRepository.create(user)
      console.log({ createdUser })

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
        console.log({ fileName })

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      let a = await this.cardetailsService.findOne()
      console.log({ a })
      console.log(typeof id)
      const details = await this.cardetailsService.find(id)
      console.log({ details })

      const user = new UserCardEntity()
      user.userId = userid
      user.cardType = 'WeddingInvitation'
      user.cardNames = fileName

      user.text = Details
      user.cardId = id
      user.cardSalePrice = details.cardSalePrice
      user.cardTotalPrice = details.cardTotalPrice
      user.noOfPages = details.noOfPages
      const createdUser = this.usersCardRepository.create(user)
      console.log({ createdUser })

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

  async PreviewCard(@Body() cardDto: CardDto) {
    //console.log({cardDto})
    const generatePreviewImage = async (id, Details, userid, email) => {
      let fileName = []
      var image
      const details = await this.cardetailsService.find(id)

      console.log(details.Caption[0].Caption)
      const car = await captions.filter((x) => x.id === id)
      let k

      //console.log({id, Details, userid})
      for (k = 0; k < details.noOfPages; k++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.Caption[k].previewPage))
        console.log({ image })
        //console.log(car[k].captions.length)
        //                 for (let i = 0; i < car[k].captions.length; i++) {
        for (let i = 0; i < details.Caption[k].Caption.length; i++) {
          console.log(car[k].captions.length)
          //console.log(details.Caption[k].Caption.length)
          // const capt = await car[k].captions[i]
          const capt = await details.Caption[k].Caption[i]
          console.log({ capt })
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)

          let data = Object.values(Details[k])

          //const lines = breakTextToLines(data[i], 10, 2);
          //console.log({data,Details})

          if (data[i]) {
            // console.log(details.Caption[k].PreviewPage)
            // console.log({capt})
            // console.log(data[i])

            //console.log(lines[i])

            // console.log(data[i])
            // const lines = breakTextToLines(data[i], 24, 2);
            // console.log(lines[0])
            // let textWidth = Jimp.measureText(font, lines[0]);
            //
            // const singleLineHeight = Jimp.measureTextHeight(font, 'a', textWidth); // Just to have the height of a line, could be any char
            // const allTextHeight = singleLineHeight * lines.length; // Used to center the whole text
            // console.log({lines,textWidth,singleLineHeight,allTextHeight})
            // let b = await image.print(font, capt.x, capt.y, data[i],textWidth,singleLineHeight)
            let b = await image.print(font, capt.x, capt.y, data[i])
            //console.log({b})
          } else {
          }
        }
        const newFileName = `${details.Caption[k].previewPage.replace(
          extname(details.Caption[k].previewPage),
          ''
        )}-${Date.now()}${extname(details.Caption[k].previewPage)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

        fileName.push(newFileName)
        //console.log({fileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      console.log({ fileName })
      let downloadFileName = []

      for (let j = 0; j < details.noOfPages; j++) {
        image = await Jimp.read(resolve('src', 'card1', 'assets', details.Caption[k].page))
        //console.log(car[j].previewpage)
        //console.log(car[k].captions.length)
        for (let i = 0; i < details.Caption[j].Caption.length; i++) {
          // const capt = await car[j].captions[i]
          const capt = await details.Caption[j].Caption[i]
          //console.log({capt})

          //const font = await Jimp.loadFont(capt.font)
          let jimpfont = resolve(__dirname, 'fonts', capt.font)
          const font = await Jimp.loadFont(jimpfont)
          let data = Object.values(Details[j])
          //console.log({data,Details})
          if (data[i]) {
            let b = await image.print(font, capt.x, capt.y, data[i])
            // console.log({b})
          } else {
          }
        }
        const newFileName = `${car[j].page.replace(extname(car[j].page), '')}-${Date.now()}${extname(car[j].page)}`

        await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

        downloadFileName.push(newFileName)
        //console.log({downloadFileName})

        //let user = await this.usersService.findByEmail(email)
        //console.log({user})
      }
      console.log({ downloadFileName })
      //console.log({id})
      // console.log(typeof id)

      // let a=await this.cardetailsService.findOne()
      // console.log({a})

      //console.log({Details})

      const user = new UserCardEntity()
      user.userId = userid
      user.email = email
      user.cardType = details.cardCategory
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
    console.log(typeof id)
    console.log(typeof userid)
    return await generatePreviewImage(id, cardDto.details, userid, email)
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
      console.log({ id, data })
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

  remove(id: string) {
    return this.usersCardRepository.delete(id)
  }
}
