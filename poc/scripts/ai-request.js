import OpenAIWrapper from '../../src/lib/openai.js'
import fs from 'fs'
import generateDocxInVM from '../../src/lib/vm-generate-docx.js'
import { extractCodeFromMarkdownFence } from '../../src/utils/utils.js'

async function main () {
  try {
    const openAI = new OpenAIWrapper()

    const prompt = `
    Buatkan saya predefined variable dengan JavaScript berdasarkan data dibawah ini:

    # Identifikasi

    ## Peserta Didik
    Anak kelompok A (2-3 tahun) memiliki kemampuan bahasa yang sedang berkembang dengan kosakata terbatas namun mulai dapat mengungkapkan kebutuhan dasar. Mereka sangat membutuhkan pengulangan dan bimbingan dalam pengenalan identitas diri, serta masih dalam tahap mengembangkan kepercayaan terhadap lingkungan sekitar. Anak-anak pada usia ini belajar melalui eksplorasi sensori dan memerlukan dukungan emosional yang konsisten.

    ## Materi Pelajaran
    Materi pengenalan identitas diri mencakup pengetahuan esensial tentang nama dan bagian tubuh, pengetahuan aplikatif dalam berinteraksi sosial sederhana, serta pengetahuan nilai dan karakter melalui rasa percaya diri dan kemandirian. Materi ini sangat relevan dengan kehidupan sehari-hari anak dan memiliki tingkat kesulitan yang sesuai dengan tahap perkembangan mereka, mengintegrasikan nilai keimanan, kejujuran, dan kemandirian.
    
    ## Dimensi Profil Lulusan
    [true, true, true, false, true, true, false, true]

    ## Kegiatan Pembelajaran
    Kegiatan pembelajaran dirancang untuk anak kelompok A (2-3 tahun) dengan pendekatan kolaboratif dan eksperimental. Kegiatan ini melibatkan eksplorasi diri melalui permainan peran, pengenalan bagian tubuh dengan lagu dan gerakan, serta interaksi sosial sederhana untuk membangun kepercayaan diri. Setiap kegiatan disesuaikan dengan kebutuhan perkembangan anak, memberikan dukungan emosional, dan memfasilitasi pembelajaran yang menyenangkan dan bermakna.
    `

    const response = await openAI.chat(prompt)
    console.log('AI Response:\n', response)
    fs.writeFileSync('ai_response.txt', response)

    // Remove code blocks from the response
    const cleanResponse = extractCodeFromMarkdownFence(response)

    // Execute the code
    const docxBuffer = await generateDocxInVM({
      namaSekolah: 'TK Negeri Pembina Bangsa',
      namaPenyusun: 'Zert S.Pd.',
      nip: '198001012010121001',
      temaSubtema: 'Identitas / Diriku (Aku Istimewa; Ayo Kita Berkenalan)',
      fase: 'Fondasi',
      kelas: 'Kelompok A (2-3 tahun)',
      semester: 1,
      mingguKe: 1,
      bulan: 'Januari',
      alokasiWaktu: '5 x 3 JP',
      modelPembelajaran: 'Kolabortif, Eksperimental',
      jumlahAnak: 10
    }, cleanResponse)
    if (docxBuffer) {
      fs.writeFileSync('generated_document.docx', docxBuffer)
      console.log('Document generated successfully: generated_document.docx')
    } else {
      console.error('Failed to generate document: No buffer returned from VM')
    }
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

main()
