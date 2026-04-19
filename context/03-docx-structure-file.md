# DOCX Structure

Dokumen ini menjelaskan struktur dan isi dari setiap bagian dalam file `.docx`. Pada file `.docx`, harus mengikuti struktur yang telah ditentukan, dengan key utama yang wajib ada dan tidak boleh diubah. Setiap key memiliki fungsi dan isi yang spesifik sesuai dengan kebutuhan dokumen pembelajaran anak usia dini (PAUD/TK).

---

## JUDUL UTAMA

Judul utama selalu berisi "MODUL AJAR PENDIDIKAN ANAK USIA DINI  KURIKULUM MERDEKA PERENCANAAN PEMBELAJARAN MENDALAM" yang dibungkus dengan sebuah table.

Kamu dapat memanfaatkan `TableWrapper` class tersedia pada API, contoh:

```js
new TableWrapper()
  .addTitleRow('MODUL AJAR PENDIDIKAN ANAK USIA DINI  KURIKULUM MERDEKA PERENCANAAN PEMBELAJARAN MENDALAM')
  .build(),
createParagraph('')
```

Kemudian diikuti dengan table yang berisi metadata atau informasi dari modul ajar tersebut, meliputi Penulis, Semester, Asal Sekolah, Minggu Ke-, Fase, Bulan, Jenjang/Kelas, Alokasi Waktu, Model Pembelajaran, Jumlah Anak, dan Topik /Sub Topik.

Kamu harus menggunakan pre-defined variable untuk metadata ini, jangan menggunakan variable lain atau mengubah nama variable yang sudah ada. Variable ini akan digunakan untuk memetakan data secara konsisten di seluruh dokumen.

Kamu dapat memanfaatkan `TableWrapper` class untuk membuat table metadata ini, contoh:

```js
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
```
