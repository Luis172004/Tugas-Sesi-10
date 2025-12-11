const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let mahasiswa = [
    { nim: '123', nama: 'Alice' },
    { nim: '456', nama: 'Bob' }
];


app.get('/mahasiswa', (req, res) => {
    res.json(mahasiswa);
});


app.post('/mahasiswa', (req, res) => {
    const dataBaru = req.body;
    mahasiswa.push(dataBaru);

    res.json({
        message: "Mahasiswa berhasil ditambahkan",
        data: dataBaru
    });
});


app.delete('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim;

    mahasiswa = mahasiswa.filter(m => m.nim !== nim);

    res.json({
        message: `Mahasiswa dengan NIM ${nim} berhasil dihapus`
    });
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
