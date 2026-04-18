import { ImageRun, AlignmentType } from 'docx'
import { createParagraph, TableWrapper } from './docx-api.js'
import { properties } from './docx-config.js'
import fs from 'fs'
import path from 'path'

const coverPage = {
  properties,
  children: [
    // Blank space
    createParagraph('', {
      before: 3000,
      line: 240,
      lineRule: 'AUTO'
    }),
    // Image tut wuri handayani
    createParagraph(
      {
        children: [
          new ImageRun({
            data: fs.readFileSync(
              path.join(__dirname, '../../assets/tut-wuri-handayani.png')
            ),
            transformation: {
              width: 200,
              height: 200
            }
          })
        ],
        alignment: AlignmentType.CENTER
      },
      {
        after: 400,
        lineRule: 'AUTO'
      }
    ),
    new TableWrapper()
      .addTitleRow('MODUL AJAR\nKURIKULUM MERDEKA (Deep Learning)')
      .addFormFieldRow('Nama Sekolah')
      .addFormFieldRow('Nama Penyusun')
      .addFormFieldRow('NIP')
      .addFormFieldRow('Tema / Subtema')
      .addFormFieldRow('Fase / Kelas / Semester')
      .build()
  ]
}

export {
  coverPage
}
