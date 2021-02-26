const express = require("express")
const app = express()

const auth = require("./auth")

const user = require("./route/user")
app.use("/", user)

const pegawai = require("./route/pegawai")
app.use("/pegawai", auth, pegawai)

const siswa = require("./route/siswa")
app.use("/siswa", siswa)

const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", pelanggaran)

app.listen(2000, () => {
    console.log("Server run on port 2000");
})