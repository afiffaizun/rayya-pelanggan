# Rayya Water

Aplikasi Dikembangkan sebagai bagian dari mata kuliah MPPL.

## Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| React | 19 | UI Library |
| TypeScript | 5.8 | Type Safety |
| Vite | 6 | Build Tool & Dev Server |
| Tailwind CSS | 4 | Utility-First CSS |
| Motion (Framer Motion) | 12 | Animasi & Transisi |
| Lucide React | 0.546 | Ikon |

## Fitur

- Login & Registrasi Pelanggan
- Dashboard pemesanan air galon (Refill / Galon Baru)
- Pilihan metode pembayaran (COD, E-Wallet, Bank Transfer)
- Riwayat pesanan
- Profil pelanggan
- Tampilan Mobile Frame (bingkai HP realistis)

## Cara Setup

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (sudah termasuk saat install Node.js)
- Git

### Langkah-Langkah

**1. Clone repository**

```bash
git clone https://github.com/afiffaizun/rayya-pelanggan.git
```

**2. Masuk ke direktori project**

```bash
cd rayya-water
```

**3. Install dependencies**

```bash
npm install
```

**4. Setup file environment**

```bash
cp .env.example .env
```

Buka file `.env` dan isi `GEMINI_API_KEY` jika ingin menggunakan fitur AI (opsional).

**5. Jalankan development server**

```bash
npm run dev
```

Buka browser dan akses **http://localhost:3000**.

### Perintah Lainnya

| Perintah | Fungsi |
|----------|--------|
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run lint` | Jalankan TypeScript type checking |
| `npm run clean` | Hapus folder `dist` dan `server.js` |

