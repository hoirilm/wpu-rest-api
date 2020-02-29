function AllMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) { //perulangan terhadap object
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div ></div >')
        })
    });
}

AllMenu();

// tolong carikan elemen .nav-link, ketika diklik jalankan perintah berikut:
$('.nav-link').on('click', function () {
    // tolong carikan elemen .nav-link, lalu hapus clas activenya
    $('.nav-link').removeClass('active');
    // pada elemen yang di klik (this) tolong tambahkan class active
    $(this).addClass('active');

    // membuat variable kategori berisi nilai HTML pada link yg dicklik
    let kategori = $(this).html();
    $('h1').html(kategori);


    if (kategori == "All Menu") {
        AllMenu();
        return;
    }


    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class= "card-img-top" ><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div ></div >';
            }
        });

        $('#daftar-menu').html(content);
    })
});