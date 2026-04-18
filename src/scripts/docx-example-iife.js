import {
  Document,
  DocumentDefaults,
  Packer
} from 'docx'
import { TableWrapper, Row, createParagraph } from './docx-api.js'
import { properties, spacing, paragraphStyles } from './docx-config.js'
import { coverPage } from './docx-cover-page.js'
import { convertNumToRoman } from './utils.js'
import fs from 'fs'
import { namaPenulis, semester, asalSekolah, mingguKe, fase, bulan, jenjangKelas, alokasiWaktu, modelPembelajaran, jumlahAnak, topikSubtopik } from './docx-predefined-var.js'

;(async () => {
  const doc = new Document({
    styles: {
      default: new DocumentDefaults({
        paragraph: { spacing }
      }),
      paragraphStyles
    },
    sections: [
      coverPage,
      {
        properties,
        children: [
          new TableWrapper()
            .addTitleRow('MODUL AJAR PENDIDIKAN ANAK USIA DINI  KURIKULUM MERDEKA PERENCANAAN PEMBELAJARAN MENDALAM')
            .build(),
          createParagraph(''),
          new TableWrapper()
            .setFitContent()
            .addLabelValueRow('Penulis', namaPenulis, 'Semester', convertNumToRoman(semester))
            .addLabelValueRow('Asal Sekolah', asalSekolah, 'Minggu Ke-', mingguKe.toString())
            .addLabelValueRow('Fase', fase, 'Bulan', bulan)
            .addLabelValueRow('Jenjang/Kelas', jenjangKelas, 'Alokasi Waktu', alokasiWaktu)
            .addLabelValueRow('Model Pembelajaran', modelPembelajaran, 'Jumlah Anak', jumlahAnak.toString())
            .addRowObject(
              new Row()
                .addTextCell('Topik / Sub Topik', { bold: true })
                .addTextCell(topikSubtopik, { columnSpan: 3 })
            )
            .build(),
          createParagraph('')
        ]
      }
    ]
  })

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync('Modul_Ajar_Keluarga_TK_Bintang_Kecil.docx', buffer)
    console.log('Dokumen berhasil dibuat!')
  })
})()
