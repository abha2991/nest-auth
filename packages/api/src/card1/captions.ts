import {Caption} from './card.service'
import path from 'path'
import { join, resolve } from 'path'



const captions: Caption[] = [
    {
        id:1,
        page: 'one.png',

        captions: [
            {
                x: 1000,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 1900,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 2500,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 2700,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
        ]
    },


    {
        id:1,
        page: 'two.png',

        captions: [
            {
                x: 1000,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
            {
                x: 1000,
                y: 1900,

                font: resolve(__dirname, 'fonts', 'n2PLJ8CWxtCEJwCG6cN2Sz70.ttf.fnt')
            },
        ]
    },
    {
        id:1,
        page: 'three.png',

        captions: [
            {
                x: 1000,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 1000,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 1000,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 1000,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 1000,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },
    {
        id:1,
        page: 'four.png',

        captions: [
            {
                x: 800,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },


    {
        id:2,
        page: 'photo.png',

        captions: [
            {
                x: 800,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },
    {
        id:2,
        page: 'download.png',

        captions: [
            {
                x: 800,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },
    {
        id:2,
        page: 'hand.png',

        captions: [
            {
                x: 800,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },
    {
        id:2,
        page: 'old.png',

        captions: [
            {
                x: 800,
                y: 500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
            {
                x: 800,
                y: 900,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1500,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },

            {
                x: 800,
                y: 1700,

                font: resolve(__dirname, 'fonts', 'hzfLCQDLC7Ep8554dYTuy2p0.ttf.fnt')
            },
        ]
    },




]

export default captions
