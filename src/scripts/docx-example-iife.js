import { WidthType } from 'docx'
import {
  DocWrapper,
  SectionWrapper,
  TableWrapper,
  Row,
  parseContentAsParagraphs
} from './docx-api.js'
import { properties } from './docx-config.js'
import { coverPage } from './docx-cover-page.js'
import { convertNumToRoman } from './utils.js'
import {
  namaPenulis,
  semester,
  asalSekolah,
  mingguKe,
  fase,
  bulan,
  jenjangKelas,
  alokasiWaktu,
  modelPembelajaran,
  jumlahAnak,
  topikSubtopik
} from './docx-predefined-var.js'

;(async () => {
  const buffer = await new DocWrapper()
    .withDefaultStyles()

    // ── Section 1: Cover page ─────────────────────────────────────────────────
    .addSection(coverPage)

    // ── Section 2: Document content ───────────────────────────────────────────
    .addSection(
      new SectionWrapper(properties)

        // Document title table
        .table(
          new TableWrapper()
            .addTitleRow('MODUL AJAR PENDIDIKAN ANAK USIA DINI  KURIKULUM MERDEKA PERENCANAAN PEMBELAJARAN MENDALAM')
        )
        .sp()

        // Author / meta info table
        .table(
          new TableWrapper()
            .setFitContent()
            .addLabelValueRow('<b>Penulis</b>', namaPenulis, '<b>Semester</b>', convertNumToRoman(semester))
            .addLabelValueRow('<b>Asal Sekolah</b>', asalSekolah, '<b>Minggu Ke-</b>', mingguKe.toString())
            .addLabelValueRow('<b>Fase</b>', fase, '<b>Bulan</b>', bulan)
            .addLabelValueRow('<b>Jenjang/Kelas</b>', jenjangKelas, '<b>Alokasi Waktu</b>', alokasiWaktu)
            .addLabelValueRow('<b>Model Pembelajaran</b>', modelPembelajaran, '<b>Jumlah Anak</b>', jumlahAnak.toString())
            .addRowObject(
              new Row()
                .addTextCell('<b>Topik / Sub Topik</b>', { bold: true })
                .addTextCell(topikSubtopik, { columnSpan: 3 })
            )
        )
        .sp(2)

        // ── A. IDENTIFIKASI ───────────────────────────────────────────────────
        .heading('IDENTIFIKASI', 1, { numbering: { level: 0 } })
        .sp()
        .table(
          new TableWrapper()
            .setFitContent()
            .addRowObject(
              new Row()
                .addTextCell('<b>Peserta Didik</b>', {
                  bold: true,
                  width: { size: 1800, type: WidthType.DXA }
                })
                .addTextCell(
                  'Anak kelompok A (2-3 tahun) memiliki kemampuan bahasa yang sedang berkembang dengan kosakata terbatas namun mulai dapat mengungkapkan kebutuhan dasar. Mereka sangat membutuhkan pengulangan dan bimbingan dalam pengenalan identitas diri, serta masih dalam tahap mengembangkan kepercayaan terhadap lingkungan sekitar. Anak-anak pada usia ini belajar melalui eksplorasi sensori dan memerlukan dukungan emosional yang konsisten.',
                  { columnSpan: 4 }
                )
            )
            .addRowObject(
              new Row()
                .addTextCell('<b>Materi Pelajaran</b>', {
                  bold: true,
                  width: { size: 1800, type: WidthType.DXA }
                })
                .addTextCell(
                  'Materi pengenalan identitas diri mencakup pengetahuan esensial tentang nama dan bagian tubuh, pengetahuan aplikatif dalam berinteraksi sosial sederhana, serta pengetahuan nilai dan karakter melalui rasa percaya diri dan kemandirian. Materi ini sangat relevan dengan kehidupan sehari-hari anak dan memiliki tingkat kesulitan yang sesuai dengan tahap perkembangan mereka, mengintegrasikan nilai keimanan, kejujuran, dan kemandirian.',
                  { columnSpan: 4 }
                )
            )
            .addRowObject(
              new Row()
                .addTextCell('<b>Dimensi Profil Lulusan</b>', {
                  bold: true,
                  rowSpan: 2,
                  width: { size: 1800, type: WidthType.DXA }
                })
                .addTextCell('<b>[x] DPL1</b>\nKeimanan dan Ketakwaan terhadap Tuhan YME')
                .addTextCell('<b>[ ] DPL3</b>\nPenalaran Kritis')
                .addTextCell('<b>[x] DPL5</b>\nKolaborasi')
                .addTextCell('<b>[ ] DPL7</b>\nKesehatan')
            )
            .addRowObject(
              new Row()
                .addTextCell('<b>[x] DPL2</b>\nKewargaan')
                .addTextCell('<b>[ ] DPL4</b>\nKreativitas')
                .addTextCell('<b>[x] DPL6</b>\nKemandirian')
                .addTextCell('<b>[x] DPL8</b>\nKomunikasi')
            )
        )
        .sp(4)

        // ── B. DESAIN PEMBELAJARAN ────────────────────────────────────────────
        .heading('DESAIN PEMBELAJARAN', 1, { numbering: { level: 0 } })
        .sp()
        .table(
          new TableWrapper()
            .setColumnWidths([2000, 5000])
            .addLabelValuePairRow('<b>Capaian Pembelajaran</b>',
              '<ol><li><b>Elemen Jati Diri:</b> Sub Elemen Anak memahami identitas dirinya yang terbentuk oleh ragam minat, kebutuhan, karakteristik gender, agama, dan sosial budaya</li><li><b>Elemen Jati Diri:</b> Sub Elemen Anak menggunakan fungsi gerak (motorik kasar, halus, dan taktil) untuk mengeksplorasi dan memanipulasi berbagai objek dan lingkungan sekitar sebagai bentuk pengembangan diri</li></ol>')
            .addLabelValuePairRow('<b>Lintas Disiplin Ilmu</b>',
              'Nilai agama dan moral (mengenal keberadaan Tuhan melalui syukur atas identitas diri), nilai Pancasila (menghargai keberagaman nama dan karakteristik teman), fisik motorik (gerakan menunjuk dan melambai), kognitif (mengingat dan menyebut nama sendiri), bahasa (mengucapkan nama dengan jelas), sosial emosional (membangun kepercayaan diri dan interaksi dengan teman)')
            .addLabelValuePairRow('<b>Tujuan Pembelajaran</b>',
              '<ol><li>Anak mampu mengenal identitas dirinya sebagai bagian dari keluarga dan menyebutkan namanya sendiri sambil melakukan gerakan sederhana seperti melambai atau bertepuk tangan.</li></ol>')
            .addLabelValuePairRow('<b>Topik Pembelajaran</b>',
              'Aku Istimewa: Ayo Kita Berkenalan')
            .addLabelValuePairRow('<b>Praktik Pedagogis</b>',
              'Pembelajaran berbasis bermain dengan pendekatan eksplorasi langsung menggunakan metode bercerita interaktif, bernyanyi sambil bergerak, dan permainan cermin. Pendekatan ini mendukung prinsip berkesadaran melalui fokus pada diri sendiri, bermakna karena relevan dengan kehidupan sehari-hari, dan menggembirakan melalui aktivitas yang menyenangkan dan tidak menakutkan.')
            .addLabelValuePairRow('<b>Kemitraan Pembelajaran</b>',
              '<ol><li>Lingkungan pembelajaran mengintegrasikan ruang kelas yang nyaman dengan cermin besar, area bermain terbuka untuk aktivitas motorik, dan sudut tenang untuk kegiatan refleksi, menciptakan suasana aman yang mendorong eksplorasi identitas diri.</li></ol>')
            .addLabelValuePairRow('<b>Lingkungan Pembelajaran</b>',
              '<ol><li>Melibatkan guru kelas sebagai fasilitator utama, orang tua sebagai sumber informasi tentang anak di rumah, serta kakak kelas sebagai model positif dalam pengenalan diri dan interaksi sosial.</li></ol>')
            .addLabelValuePairRow('<b>Pemanfaatan Digital</b>',
              '<ol><li>Perencanaan: Persiapan video cerita dan lagu digital, aplikasi dokumentasi pembelajaran</li><li>Pelaksanaan: Video interaktif "Ayo Berkenalan", musik latar untuk aktivitas, dokumentasi foto dan video proses belajar anak</li><li>Asesmen: Portofolio digital karya anak, rekaman video presentasi sederhana anak</li><li>Dukungan media ajar digital tersedia melalui https://drive.paud.id/download/ayo-berkenalan/</li></ol>')
        )
        .sp(2)

        // ── C. RENCANA PELAKSANAAN PEMBELAJARAN ──────────────────────────────
        .section('RENCANA PELAKSANAAN PEMBELAJARAN', 1,
          new SectionWrapper()
            .sp()

            // C.1 AWAL
            .section('AWAL (BERKESADARAN, BERMAKNA, MENGGEMBIRAKAN)', 2,
              new SectionWrapper()
                .sp()
                .add(parseContentAsParagraphs(
                  '<ol>' +
                    '<li>Pembuka dari proses pembelajaran yang bertujuan untuk mempersiapkan peserta didik sebelum memasuki inti pembelajaran.</li>' +
                    '<li>Kegiatan dalam tahap ini meliputi orientasi yang bermakna, apersepsi yang kontekstual, dan motivasi yang menggembirakan:</li>' +
                    '<li>Salam dan doa pembuka untuk menciptakan suasana tenang dan fokus.</li>' +
                    '<li>Menyanyikan lagu "1234 Pergi Sekolah" untuk membangun semangat belajar.</li>' +
                    '<li>Kegiatan pemantik dengan buku cerita/video "Ayo Berkenalan".</li>' +
                    '<li>Permainan konsentrasi sederhana untuk memusatkan perhatian anak.</li>' +
                    '<li>Pertanyaan pemantik untuk mengembangkan berbagai aspek:\n' +
                      '<ol>' +
                        '<li>"Siapa yang menciptakan kita semua?" (Keimanan dan Ketakwaan.)</li>' +
                        '<li>"Apa yang bisa kamu lakukan sendiri hari ini?" (Kemandirian.)</li>' +
                        '<li>"Bagaimana perasaanmu ketika menyebutkan namamu?" (Kesehatan.)</li>' +
                        '<li>"Siapa temanmu yang paling baik?" (Kolaborasi.)</li>' +
                        '<li>"Apa yang membuat namamu istimewa?" (Kreativitas.)</li>' +
                        '<li>"Mengapa kita harus mengenal teman-teman kita?" (Kewargaan.)</li>' +
                        '<li>"Bagaimana caranya agar teman tahu nama kita?" (Komunikasi.)</li>' +
                        '<li>"Apa yang terjadi jika kita tidak tahu nama sendiri?" (Penalaran Kritis.)</li>' +
                      '</ol>' +
                    '</li>' +
                  '</ol>'
                )),
              { numbering: { level: 1 } }
            )
            .sp()

            // C.2 INTI
            .section('INTI', 2,
              new SectionWrapper()
                .sp()
                .para('Pada tahap ini, anak aktif terlibat dalam pengalaman belajar memahami, mengaplikasi, dan merefleksi. Guru menerapkan prinsip pembelajaran berkesadaran, bermakna, menggembirakan untuk mencapai tujuan pembelajaran.')
                .sp()
                .table(
                  new TableWrapper()
                    .setColumnWidths([500, 5000])
                    .addTitleRow('MEMAHAMI (BERKESADARAN, BERMAKNA, MENGGEMBIRAKAN)')
                    .addLabelValuePairRow('<b>Hari</b>', '<b>Uraian Kegiatan</b>')
                    .addLabelValuePairRow('<b>1</b>', 'Mengenal identitas diri melalui cerita interaktif "Ayo Berkenalan", diikuti dengan diskusi kelompok kecil untuk berbagi pengalaman tentang nama dan karakteristik diri masing-masing anak.')
                    .addLabelValuePairRow('<b>2</b>', 'Mengenal bagian tubuh melalui lagu dan gerakan, diikuti dengan permainan "Simon Says" untuk memperkuat pemahaman tentang fungsi gerak dan bagian tubuh.')
                )
                .table(
                  new TableWrapper()
                    .setColumnWidths([500, 5000])
                    .addTitleRow('MEMAHAMI (BERKESADARAN, BERMAKNA)')
                    .addLabelValuePairRow('<b>Hari</b>', '<b>Uraian Kegiatan</b>')
                    .addLabelValuePairRow('<b>3</b>', 'Mengenal identitas diri melalui cerita interaktif "Ayo Berkenalan", diikuti dengan diskusi kelompok kecil untuk berbagi pengalaman tentang nama dan karakteristik diri masing-masing anak.')
                    .addLabelValuePairRow('<b>4</b>', 'Mengenal bagian tubuh melalui lagu dan gerakan, diikuti dengan permainan "Simon Says" untuk memperkuat pemahaman tentang fungsi gerak dan bagian tubuh.')
                )
                .table(
                  new TableWrapper()
                    .setColumnWidths([500, 5000])
                    .addTitleRow('MEREFLEKSI (BERKESADARAN, BERMAKNA)')
                    .addLabelValuePairRow('<b>Hari</b>', '<b>Uraian Kegiatan</b>')
                    .addLabelValuePairRow('<b>5</b>', 'Mengenal identitas diri melalui cerita interaktif "Ayo Berkenalan", diikuti dengan diskusi kelompok kecil untuk berbagi pengalaman tentang nama dan karakteristik diri masing-masing anak.')
                ),
              { numbering: { level: 1 } }
            )
            .sp()

            // C.3 PENUTUP
            .section('PENUTUP (BEKESADARAN, MENGGEMBIRAKAN)', 2,
              new SectionWrapper()
                .sp()
                .para('Tahap akhir dalam proses pembelajaran yang bertujuan memberikan umpan balik yang konstruktif kepada anak atas pengalaman belajar yang telah dilakukan, menyimpulkan pembelajaran, dan anak terlibat dalam perencanaan pembelajaran selanjutnya:')
                .add(parseContentAsParagraphs(
                  '<ol>' +
                    '<li>Recalling kegiatan dengan antusias dan memberikan apresiasi.</li>' +
                    '<li>Anak bangga menunjukkan hasil karya dan menceritakan pengalaman.</li>' +
                    '<li>Permainan tepuk tangan bersama sambil menyebut nama masing-masing</li>' +
                    '<li>Bernyanyi lagu "Namaku" dengan gerakan sederhana.</li>' +
                    '<li>Memberikan pelukan atau high-five sebagai bentuk penghargaan</li>' +
                    '<li>Doa penutup dan persiapan pulang dengan riang gembira.</li>' +
                  '</ol>'
                )),
              { numbering: { level: 1 } }
            )
            .sp()

            // C.4 ASESMEN PEMBELAJARAN
            .section('ASESMEN PEMBELAJARAN', 2,
              new SectionWrapper()
                .sp()
                .para('Asesmen pada Awal Pembelajaran:')
                .para('Asesmen awal dilakukan untuk mengidentifikasi kemampuan dasar anak dalam mengenal identitas diri dan kesiapan mengikuti pembelajaran. Observasi difokuskan pada respon verbal, non-verbal, dan interaksi sosial anak.')
                .add(parseContentAsParagraphs(
                  '<ol>' +
                    '<li>Tanyakan langsung "Siapa namamu?" dan catat apakah anak menjawab, diam, atau menunjuk diri.</li>' +
                    '<li>Panggil nama anak satu per satu dan observasi respon (menoleh, tersenyum, atau mengabaikan.)</li>' +
                    '<li>Minta anak menunjuk bagian tubuh (kepala, tangan, kaki) dan catat keakuratan responnya.</li>' +
                    '<li>Amati tingkat kepercayaan diri anak saat berinteraksi dengan guru dan teman baru.</li>' +
                    '<li>Dokumentasikan kemampuan motorik awal melalui permainan sederhana seperti tepuk tangan.</li>' +
                  '</ol>'
                ))
                .sp()
                .para('Asesmen pada Proses Pembelajaran:')
                .para('Asesmen proses dilakukan berkelanjutan selama kegiatan berlangsung untuk memantau perkembangan dan memberikan dukungan tepat waktu. Focus pada partisipasi aktif dan kemajuan keterampilan.')
                .add(parseContentAsParagraphs(
                  '<ol>' +
                    '<li>Catat frekuensi anak menyebutkan nama sendiri selama aktivitas dan tingkat kejelasan ucapan.</li>' +
                    '<li>Observasi keaktifan anak dalam setiap permainan dan beri tanda centang pada lembar checklist.</li>' +
                    '<li>Dokumentasikan interaksi sosial positif seperti berbagi, membantu, atau bermain bersama teman.</li>' +
                    '<li>Amati kemampuan mengikuti instruksi sederhana dan beri bantuan jika diperlukan.</li>' +
                    '<li>Berikan pujian langsung saat anak menunjukkan progress dan catat momen keberhasilannya.</li>' +
                  '</ol>'
                ))
                .sp()
                .para('Asesmen pada Akhir Pembelajaran:')
                .para('Asesmen akhir mengevaluasi pencapaian tujuan pembelajaran dan memberikan gambaran kemajuan anak secara keseluruhan. Fokus pada demonstrasi kemampuan yang telah dipelajari.')
                .add(parseContentAsParagraphs(
                  '<ol>' +
                    '<li>Minta setiap anak memperkenalkan diri di depan teman dan catat kelancaran serta kepercayaan dirinya.</li>' +
                    '<li>Tes kemampuan menunjuk foto diri sendiri dari kumpulan foto anak-anak di kelas.</li>' +
                    '<li>Observasi kemampuan motorik melalui gerakan melambai dan bertepuk tangan saat menyebut nama.</li>' +
                    '<li>Dokumentasikan ekspresi kegembiraan dan antusiasme anak melalui foto atau video singkat.</li>' +
                    '<li>Berikan reward berupa stiker atau pujian khusus dan catat reaksi positif anak terhadap penghargaan.</li>' +
                  '</ol>'
                )),
              { numbering: { level: 1 } }
            ),

          { numbering: { level: 0 } }
        )
    )
    .save('Modul_Ajar_Keluarga_TK_Bintang_Kecil.docx')

  shared.buffer = buffer // eslint-disable-line no-undef
  console.log('Dokumen berhasil dibuat!')
})()
