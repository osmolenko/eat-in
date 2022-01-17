import mongoose from 'mongoose'
import formidable from 'formidable-serverless'
import * as fs from 'fs'
import ProductItem from '../../../entities/ProductItem'

export default async function postHandler(req, res) {
  if (req.method === 'POST') {
    await mongoose.connect(process.env.MONGODB_URI)
    const pid = new Date().getTime().toString()

    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, files) {
      await ProductItem.create({
        ...fields,
        photo: await saveFile(files.image, pid),
        pid: pid,
      })
    })
  }
  return res.status(201).send('All good!')
}

const saveFile = async (file, name) => {
  const newFileName =
    name + file.name.substring(file.name.lastIndexOf('.'), file.name.length)

  const data = fs.readFileSync(file.path)
  fs.writeFileSync(`./public/uploads/${newFileName}`, data)
  await fs.unlinkSync(file.path)

  return newFileName
}

export const config = {
  api: {
    bodyParser: false,
  },
}
