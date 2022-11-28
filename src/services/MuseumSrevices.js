const MUSEUMS = [
    {
        id : 1,
        name : "Museum Fatahillah",
        address : "Jalan Taman Fatahillah No.1, Pinangsia, Tamansari",
        city : "Jakarta Barat",
        content : " Bangunan ini dahulu merupakan Balai Kota Batavia (bahasa Belanda: Stadhuis van Batavia) yang dibangun pada tahun 1707-1710 atas perintah Gubernur Jenderal Joan van Hoorn. Bangunan ini menyerupai Istana Dam di Amsterdam, terdiri atas bangunan utama dengan dua sayap di bagian timur dan barat serta bangunan sanding yang digunakan sebagai kantor, ruang pengadilan, dan ruang-ruang bawah tanah yang dipakai sebagai penjara. Pada tanggal 30 Maret 1974, bangunan ini kemudian diresmikan oleh bapak Ali Sadikin sebagai Museum Sejarah Jakarta.",
        image : require("../images/MuseumFatahillahPict2.jpg") 
    },
    {
        id : 2,
        name : "Museum Wayang",
        address : "Jalan Pintu Besar Utara No.27 Pinangsia, RT.3/RW.6, Kota Tua, Tamansari",
        city : "Jakarta Barat",
        content : " Pada awalnya bangunan ini bernama De Oude Hollandsche Kerk (Gereja Lama Belanda) dan dibangun pertama kali pada tahun 1640. Tahun 1732 diperbaiki dan berganti nama De Nieuwe Hollandse Kerk (Gereja Baru Belanda) hingga tahun 1808 akibat hancur oleh gempa bumi pada tahun yang sama. Setelah kemerdekaan Indonesia, tepatnya tahun 1957 Lembaga Kebudayaan Indonesia(LKI) bersedia mengelola gedung dan mengganti namanya menjadi Museum Jakarta Lama. Namun pada tanggal 1 Agustus 1960, kata 'Lama' resmi dihilangkan sehingga menjadi Museum Jakarta. Dua tahun kemudian, tanggal 16 September, LKI menyerahkan kembali pengelolaan kepada Pemerintahan Indonesia khususnya Jakarta. Gedung ini pun sempat dipindahkan ke gedung Jakarta atau yg dikenal Museum Sejarah Jakarta. Satu tahun sebelum diresmikannya Museum Wayang, tepatnya pada acara Pekan Wayang II Wali Kota Jakarta pada saat itu, Ali Sadikin kagum dengan inventarisasi dan kebudayaan wayang. Kekaguman inilah yang mendorong berdirinya Museum Wayang yang diresmikan pada tanggal 13 Agustus 1975, Meskipun telah dipugar beberapa bagian gereja lama dan baru masih tampak terlihat dalam bangunan ini.",
        image : require("../images/MuseumWayangPict.jpg")
    },
    {
        id : 3,
        name : "Museum Taman Prasasti",
        address : "Jl. Tanah Abang I No.1, RT.11/RW.8, Petojo Sel., Gambir",
        city : "Jakarta Pusat",
        content : " Museum ini memiliki koleksi prasasti nisan kuno serta miniatur makam khas dari 27 provinsi di Indonesia, beserta koleksi kereta jenazah antik. Museum seluas 1,2 ha ini merupakan museum terbuka yang menampilkan karya seni dari masa lampau tentang kecanggihan para pematung, pemahat, kaligrafer dan sastrawan yang menyatu.",
        image : require("../images/MuseumTamanPrasastiPict.jpg")
    },
    {
        id : 4,
        name : "Museum Gajah",
        address : "Jl. Medan Merdeka Barat No.12, Gambir",
        city : "Jakarta Pusat",
        content : " Dengan gaya Klasisisme, gedung Museum Nasional Republik Indonesia adalah salah satu wujud pengaruh Eropa, terutama semangat Abad Pencerahan, yang muncul pada sekitar abad 18. Gedung ini dibangun pada tahun 1862 oleh pemerintah sebagai tanggapan atas perhimpunan Bataviaasch Genootschap van Kunsten en Wetenschappen yang bertujuan menelaah riset-riset ilmiah di Hindia Belanda.",
        image : require("../images/MuseumGajahPict.jpg")
    },
    {
        id : 5,
        name : "Museum Seni Rupa & Keramik",
        address : "Jl. Pos Kota, RT.9/RW.7, Pinangsia, Tamansari",
        city : "Jakarta Pusat",
        content : " Museum yang tepatnya berada di seberang Museum Sejarah Jakarta itu memajang keramik lokal dari berbagai daerah di Tanah Air, dari era Kerajaan Majapahit abad ke-14, dan dari berbagai negara di dunia. Pada awalnya, nama yang digunakan untuk gedung ini adalah Balai Seni Rupa dan Keramik yang kemudian berubah menjadi Museum Seni Rupa dan Keramik.",
        image : require("../images/MuseumSeniRupaPict.jpg")
    },
]

export function getMuseums(){
    return MUSEUMS;
}

export function getMuseum(id){
    return MUSEUMS.find((museum) => museum.id == id)
}