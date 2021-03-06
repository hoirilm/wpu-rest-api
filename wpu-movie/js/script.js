
function searchMovie() {
    $('#movie-list').html('') // ,mengosongkan kembali semua isi yang ada apa div movie list

    $.ajax({
        url: 'http://omdbapi.com', //tempat mengambil api
        type: 'get', //method
        datatype: 'json',  //pilih bentuk data kembalian
        data: {
            'apikey': '583eb9d7',
            's': $('#search-input').val()
        },
        success: function (result) { //event ketika sukses
            if (result.Response == "True") {

                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-3">
                            <div class="card mb-3">
                            <img src="`+ data.Poster + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.Title + `</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID + `">See Detail</a>
                                </div>
                            </div>
                        </div>
                    `)
                })


                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">`+ result.Error + ` </h1>
                    </div>
                `)
            }
        }
    })
}

// dengan menekan tombol cari di web
$('#search-button').on('click', function () {
    searchMovie();
})

// dengan tombol enter
$('#search-input').on('keyup', function (event) {
    if (event.keyCode === 13) { // 13 adalah kode kunci untuk tombol enter
        searchMovie()
    }
})

// tombol detail
// problem : event binding / delegation
// penjelasan lebih lanjut ada di video REST API eps 5 menit 51
$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'))
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        datatype: 'json',
        data: {
            'apikey': '583eb9d7',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-md-4">
                                <img src="`+ movie.Poster + `" class="img-fluid">
                            </div>

                            <div class="col-md-8">
                                <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>

                                <li class="list-group-item">Release : `+ movie.Released + `</li>

                                <li class="list-group-item">Genre : `+ movie.Genre + `</li>

                                <li class="list-group-item">Director : `+ movie.Director + `</li>
                                
                                <li class="list-group-item">Actors : `+ movie.Actors + `</li>

                                <li class="list-group-item">Rotten Tomatoes : `+ movie.Ratings[0].Value + `</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                `)
            }
        }
    })
})