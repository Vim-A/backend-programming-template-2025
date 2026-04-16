# Backend Programming Template (2025)

## QUIZ BackEnd 2026
## TIC David Adrian // 535250113
## Penjelasan Endpointnya

Gacha Endpoint

Fitur gacha digunakan untuk melakukan pengundian hadiah, melihat histori gacha user, menampilkan daftar hadiah yang tersedia, serta menampilkan daftar pemenang. Semua endpoint disini menggunakan /gacha.

POST /gacha
Digunakan untuk melakukan gacha. Controller membaca request.body.user_id dan request.body.nama. Jika salah satu kosong, sistem mengembalikan validation error. Pada service, user dibatasi maksimal 5 kali gacha per hari. Sistem mengambil data hadiah dari database, lalu menentukan hasil menang atau kalah secara acak. Jika menang dan kuota hadiah masih tersedia, hadiah akan disimpan ke histori gacha.
parameter user_id dan nama

{
  "user_id": "D002",
  "nama": "SnD"
}

GET /gacha/histori
Digunakan untuk mengambil histori gacha berdasarkan user_id. Pada implementasi saat ini, endpoint GET ini tetap membaca user_id dari request body. Jika user_id kosong, sistem mengembalikan validation error. Service akan mengambil seluruh histori milik user tersebut dari collection gacha.
parameter user_id

{
  "user_id": "D002"
}


GET /gacha/hadiah
Digunakan untuk menampilkan semua hadiah yang tersedia. Service mengambil seluruh hadiah lalu menghitung jumlah pemenang untuk setiap hadiah agar bisa menampilkan sisa kuota. Output berisi nama_hadiah, kuota, dan sisa_kuota.
Input request: Tidak memerlukan body atau parameter tambahan.
Respons sukses: message = "List hadiah berhasil diambil" dan data berupa daftar hadiah.


GET /gacha/pemenang
Digunakan untuk menampilkan daftar pemenang per hadiah. Service mengambil seluruh hadiah, lalu mencari semua histori yang is_winner = true untuk hadiah tersebut. Nama pemenang disamarkan sebelum dikirim ke client.
