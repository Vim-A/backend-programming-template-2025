# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Penjelasan endpointnya

Gacha Endpoint

Fitur gacha digunakan untuk melakukan pengundian hadiah, melihat histori gacha user, menampilkan daftar hadiah yang tersedia, serta menampilkan daftar pemenang. Semua endpoint disini menggunakan /gacha.

Endpoint: /gacha
Endpoint ini digunakan untuk menjalankan proses gacha untuk user tertentu. Sistem akan menerima user_id dan nama, lalu memproses pengundian melalui service. Jika data tidak lengkap, sistem akan mengembalikan error validasi.
contoh =
{
"user_id": " D002 ",
"nama": "Viddd"
}

Endpoint: /gacha/histori

Endpoint ini digunakan untuk menampilkan histori gacha berdasarkan user_id. Pada implementasi saat ini, user_id diambil dari request body.
contoh =
{
"user_id": "D002"
}

{
"message": "Histori gacha berhasil diambil",
"data": [
{
"\_id": "69d9f2d1d01aecb5691aaa0c",
"user_id": " D002 ",
"nama": " Viddd ",
"is_winner": true,
"hadiah": "Smartphone X",
"created_at": "2026-04-11T07:05:53.477Z",
"\_\_v": 0
},
}

Endpoint: /gacha/hadiah

Endpoint ini digunakan untuk menampilkan seluruh daftar hadiah yang tersedia pada sistem gacha.
{
"message": "List hadiah berhasil diambil",
"data": [
{
"nama_hadiah": "Emas 10 gram",
"kuota": 1,
"sisa_kuota": 0
},
{
"nama_hadiah": "Smartphone X",
"kuota": 5,
"sisa_kuota": 2
},
{
"nama_hadiah": "Smartwatch Y",
"kuota": 10,
"sisa_kuota": 9
},
{
"nama_hadiah": "Voucher Rp100.000",
"kuota": 100,
"sisa_kuota": 99
},
{
"nama_hadiah": "Pulsa Rp50.000",
"kuota": 500,
"sisa_kuota": 499
}
]
}

Endpoint: /gacha/pemenang

Endpoint ini digunakan untuk menampilkan daftar user yang pernah memenangkan hadiah dari sistem gacha.

    {
    		"nama_hadiah": "Smartphone X",
    		"pemenang": [
    			"undefined* F***x R****l undefined*",
    			"undefined* V***d undefined*",
    			"undefined* D***d A****n"
    		]
    	},
