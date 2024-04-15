

const TelegramBot = require("node-telegram-bot-api");



const token = "[Masukan Token API Bot Telegram Anda]";
const options = {
    polling: true
}
console.log("bot ready")
const wahbot = new TelegramBot(token, options)





const prefix = "!"
const halo = /^halo$/
const sayang = /^aku sayang kamu$/
const salam = /^assalamualaikum$/
const beritagempa = new RegExp(`^${prefix}gempa$`)
const beritaindo = new RegExp(`^${prefix}beritaindo$`) 
const beritadunia = new RegExp(`^${prefix}beritadunia`)
const beritamakanan = new RegExp(`^${prefix}beritamakanan`)
const beritateknologi = new RegExp(`^${prefix}beritateknologi`)
const kesehatan = new RegExp(`^${prefix}kesehatan`)
const lifestyle = new RegExp(`^${prefix}lifestyle`)
const entertainment = new RegExp(`^${prefix}entertainment`)
const culture = new RegExp(`^${prefix}culture`)
const candaan = new RegExp(`^${prefix}candaan`)
const btc = new RegExp(`^${prefix}bitcoin`) 
const meme = new RegExp(`^${prefix}meme`)
const help = new RegExp(`^${prefix}help`)
const doa = new RegExp(`^${prefix}doa`)
const kisah = new RegExp(`^${prefix}kisahbukhari`)


wahbot.onText(salam, (callback) => {
    wahbot.sendMessage(callback.from.id, "waalaikumsalam")
})
wahbot.onText(halo,(callback) => {
    wahbot.sendMessage(callback.from.id,"hai Kamu👋👋")
})
wahbot.onText(sayang,(callback) => {
    wahbot.sendMessage(callback.from.id,"Aku Juga sayang kamu😍😘🥰")
})




//gempa
wahbot.onText(beritagempa, async(callback) => {
    const BMKG_ENDPOINT = "https://data.bmkg.go.id/DataMKG/TEWS/"
 const apiCall = await fetch(BMKG_ENDPOINT + "/autogempa.json")
const {Infogempa: 
    { gempa: {
        Jam, Magnitude,DateTime, Tanggal, Wilayah,Potensi, Kedalaman,Coordinates, Lintang, Bujur , Shakemap
    }
 }
} = await apiCall.json()

const BMKGImage = BMKG_ENDPOINT + Shakemap
const resultText = `Waktu: ${Tanggal} | ${Jam}
Date:  ${DateTime}
Besaran: ${Magnitude} SR 
Wilayah: ${Wilayah} 
Potensi: ${Potensi} 
Kedalaman: ${Kedalaman}
Koordinat: ${Coordinates}
Lintang: ${Lintang}
Bujur: ${Bujur}`
    wahbot.sendPhoto(callback.from.id, BMKGImage, {
        caption: resultText
    })
})
//gempa end

//berita indo
wahbot.onText(beritaindo, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/indonesia"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//berita indo end

//berita dunia
wahbot.onText(beritadunia, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/world"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//berita dunia end

//berita makanan
wahbot.onText(beritamakanan, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/food"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//berita makanan end

//berita teknologi
wahbot.onText(beritateknologi, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/science-tech"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//berita teknologi end

//kesehatan
wahbot.onText(kesehatan, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/health"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//kesehatan end

//lifestyle
wahbot.onText(lifestyle, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/style"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//lifestyle end

//entertainment
wahbot.onText(entertainment, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/entertainment"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//entertainment end

//culture
wahbot.onText(culture, async (callback) => {
    const newsEndpoint = "https://jakpost.vercel.app/api/category/life/art-culture"

                const apiCall = await fetch(newsEndpoint)
                const response = await apiCall.json()
                const maxNews = 2

                for (let i = 0; i < maxNews; i++) {
                    const news = response.posts[i]
                    const { title, image, headline } = news
                    wahbot.sendPhoto(callback.from.id, image, { caption: `Judul: ${title} \n\nHeadline: ${headline}` })
                }
})
//culture end




wahbot.onText(btc, async (callback) => {
    const btc_ENDPOINT = "https://api.coindesk.com/v1/bpi/"
    const apiCallUSD = await fetch(btc_ENDPOINT + "currentprice/USD.json")
    const {bpi:
    {
        USD: {
            code, rate , description ,rate_float
        },
    }} = await apiCallUSD.json()
const resultText = `  Nilai Dari : ${code} |  ${rate}
deskripsi : ${description}
kurs mengambang : ${rate_float}`

    wahbot.sendMessage(callback.from.id, resultText)
})

wahbot.onText(candaan,async (callback) => {
    const jokes_ENDPOINT = "https://candaan-api.vercel.app/api/text/random"
    const apiCall = await fetch(jokes_ENDPOINT)
    const response = await apiCall.json()
    const resultText = response.data

    wahbot.sendMessage(callback.from.id, resultText)

})

wahbot.onText(meme,async (callback) => {
    const jokes_ENDPOINT = "https://candaan-api.vercel.app/api/image/random"
    const apiCall = await fetch(jokes_ENDPOINT)
    const {
        data: {
        url, source
    }
    
    } = await apiCall.json()

    const JokesImage = url
    const sourceData = `source ${source}`
    wahbot.sendPhoto(callback.from.id, JokesImage, {
        caption: sourceData
    })

})

wahbot.onText(doa,async (callback) => {
    const doa_ENDPOINT = "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random"
    const apiCall = await fetch(doa_ENDPOINT)
    const [ {
        doa, ayat, latin, artinya
    } ] = await apiCall.json()

   const resultText = `${doa}
    ${ayat}
    ${latin}
    ${artinya}`
    wahbot.sendMessage(callback.from.id,resultText)

})

wahbot.onText(kisah,async (callback) => {
    const kisah_ENDPOINT = "https://random-hadith-generator.vercel.app/bukhari/"
    const apiCall = await fetch(kisah_ENDPOINT)
    const  {
        data: {
            book,bookName,chapterName,hadith_english,refno
        }

    }  = await apiCall.json()

    const resultText = `Buku Dari : ${book}
    Judul Buku : ${bookName}
    Tentang : ${chapterName}
    Kisah : ${hadith_english}
    Riwayat : ${refno}`


    wahbot.sendMessage(callback.from.id,resultText)
})





wahbot.onText(help,async (callback) => {
    Text = `Selamat datang! silahkan gunakan perintah yang tersedia berikut ini:

    ------
    
    --📰Berita🗞️--
!beritaindo  -> generate berita terkini dari media Indonesia
!beritadunia  -> generate berita terkini dari media dunia
!beritamakanan  -> generate berita terkini dari liputan makanan
!beritagempa  -> generate berita terkini dari gempa
!beritateknologi  -> generate berita seputar teknologi


  --🏃Sehari-hari👦--
!kesehatan  -> generate tentang kesehatan
!lifestyle   -> generate tentang gaya hidup
!entertainment  -> generate tentang para artis
!culture  -> generate tentang budaya


    --🤣Hiburan😁--
!candaan  -> bot memberikan candaan yang kadang garing
!meme  -> generate meme meme acak dan kocak


    --🕌Islam🕋--
!doa  -> generate doa-doa kehidupan sehari hari
!doaharian  -> generate doa-doa untuk kegiatan sehari-hari
!jadwalsolat  -> informasi jadwal solat untuk wilayah tertentu

!kisahbukhari  -> generate kisah/hadist riwayat bukhari


    --🤑crypto💵--
!bitcoin  -> Harga bitcoin sekarang dan terupdate


    --


    --👋interaksi Ketikan👍--
halo  -> untuk menyapa bot
assalamuakum  -> bot akan menyapa salam anda
aku sayang kamu  -> bot Juga sayang kamu kok
    
    -----`
    wahbot.sendMessage(callback.from.id, Text )
})


