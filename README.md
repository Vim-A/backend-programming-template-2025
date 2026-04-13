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

## Penjelasan Endpointnya

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


Endpoint: /gacha/hadiah

Endpoint ini digunakan untuk menampilkan seluruh daftar hadiah yang tersedia pada sistem gacha.

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
