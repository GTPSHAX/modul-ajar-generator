import openai from 'openai';

class G4F {
  constructor(apiKey, type = 'default') {
    this.client = new openai.OpenAI({
      apiKey: apiKey,
      baseURL: 'https://api.longcat.chat/openai',
    });
    this.type = type;
  }

  setModel(model) {
    this.model = model;
  }

  #getSystemPrompt() {
    switch (this.type) {
      case 'recommendation':
        return 'Kamu akan membantu memberikan 1 rekomendasi langsung untuk mengisi kolom input, tentang tujuan pembelajaran yang cocok untuk siswa siswi PAUD berdasarkan minat dan kebutuhan mereka. Tampa ada kalimat penjelasan, tanpa ada kalimat seperti "Berikut rekomendasi tujuan pembelajaran langsung untuk kolom input:" atau kalimat pembuka lainnya. Kamu hanya memberikan rekomendasi tujuan pembelajaran yang cocok untuk siswa siswi PAUD berdasarkan minat dan kebutuhan mereka, tanpa ada kalimat penjelasan lainnya.';
      default:
        return `Kamu bertugas membuat RPP (Rencana Pelaksanaan Pembelajaran) untuk PAUD/TK dalam format Markdown STRICT.

ATURAN FORMAT (WAJIB DIPATUHI):
1. Output HANYA berisi pasangan key-value.
2. Setiap key WAJIB dalam format:
   {NAMA_KEY}
   value
3. DILARANG keras:
   - Menulis key tanpa tanda "{" dan "}"
   - Menulis "{key" tanpa "}" penutup
   - Menulis "{key}" tanpa value
   - Menambahkan teks penjelasan di luar format key-value
   - Menambahkan judul, heading, atau kalimat pembuka/penutup

4. Format WAJIB selalu:
   {KEY}
   value

   {KEY_LAIN}
   value

   (dipisah 1 baris kosong antar key)

ATURAN KONTEN:
5. Semua key HARUS memiliki value yang valid dan relevan.
6. Tidak boleh ada value kosong atau placeholder.

ATURAN KHUSUS PENILAIAN:
7. Key yang berhubungan dengan penilaian WAJIB dalam bentuk tabel Markdown.

8. Untuk {INDIKATOR_PENILAIAN} gunakan tabel dengan 3 kolom:
   | Program Pengembangan | KD | Indikator |

9. Untuk {TEKNIK_PENILAIAN} gunakan tabel sesuai teknik, contoh:
   | Teknik | Bentuk |

VALIDASI INTERNAL (WAJIB):
10. Sebelum output, pastikan:
   - Tidak ada key yang salah format
   - Tidak ada key tanpa value
   - Tidak ada teks di luar key-value
   - Semua tabel valid Markdown

Jika melanggar SATU saja aturan di atas, perbaiki sebelum mengirim jawaban.`;
    }
  }

  async chat(prompt) {
    try {
      const messages = [
        {
          role: 'system',
          content: this.#getSystemPrompt(),
        },
        {
          role: 'user',
          content: prompt,
        },
      ];

      const response = await this.client.chat.completions.create({
        model: this.model || 'LongCat-Flash-Lite',
        messages,
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error generating response:', error);
      throw error;
    }
  }
}

export default G4F;