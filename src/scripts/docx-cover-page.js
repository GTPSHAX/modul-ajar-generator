import { ImageRun, AlignmentType } from 'docx'
import { SectionWrapper, TableWrapper } from './docx-api.js'
import { properties } from './docx-config.js'
import fs from 'fs'
import path from 'path'

const __dirname = import.meta.dirname

/**
 * Cover page section for the Modul Ajar document.
 *
 * Built with SectionWrapper — no manual spread operators or raw arrays.
 * To customise the cover image path, update the readFileSync() call below.
 */
const coverPage = new SectionWrapper(properties)
  // 1. Vertical whitespace before the logo
  .para('', { before: 3000, line: 240, lineRule: 'AUTO' })

  // 2. Centred tut-wuri-handayani logo
  .para(
    {
      children: [
        new ImageRun({
          data: fs.readFileSync(
            path.join(__dirname, '../../assets/tut-wuri-handayani.png')
          ),
          transformation: { width: 200, height: 200 }
        })
      ],
      alignment: AlignmentType.CENTER
    },
    { after: 400, lineRule: 'AUTO' }
  )

  // 3. Cover info table
  .table(
    new TableWrapper()
      .addTitleRow('MODUL AJAR\nKURIKULUM MERDEKA (Deep Learning)')
      .addFormFieldRow('Nama Sekolah')
      .addFormFieldRow('Nama Penyusun')
      .addFormFieldRow('NIP')
      .addFormFieldRow('Tema / Subtema')
      .addFormFieldRow('Fase / Kelas / Semester')
  )

  .build()

export { coverPage }
