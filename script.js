let data1 = {
    photo:'images/1.jpg',
    title: 'Totál a gyűteményből',
    description: ''
}

let data2 = {
    photo:'images/2.jpg',
    title: 'Még egy totál',
    description: ''
}

let data3 = {
    photo:'images/3.jpg',
    title: 'Egyik sarok',
    description: ''
}

let data4 = {
    photo:'images/4.jpg',
    title: 'Üvegek és dobozok',
    description: 'Egyedi üvegek (alsó polc, felette) egyedi dobozok'
}

let data5 = {
    photo:'images/5.jpg',
    title: 'Poharak',
    description: 'Egyről tudok, amit még nem sikerült beszereznem. '
}

let data6 = {
    photo:'images/6.jpg',
    title: 'Nagy üvegek',
    description: ''
}


let imagesData = [data1, data2, data3, data4, data5, data6, 
    data ={ photo:'images/7.jpg', title:'Legnagyobb dobozok', description:''},
    data ={ photo:'images/8.jpg', title:'Flaskák', description:''},
    data ={ photo:'images/9.jpg', title:'Mütyürök', description:''},
    data ={ photo:'images/10.jpg', title:'Erőművészek', description:'Házi videóból egy kép. Az "erőművészek" súlyzói unicumos üvegből vannak.'},
    data ={ photo:'images/11.jpg', title:'Házi készítésű', description:'Gyerekeim által készített ajándékok: nyílnál marcipánból unicum, az egyedi katalógus papírból készült.'},
    data ={ photo:'images/12.jpg', title:'Katalógus', description:'Belül egyedi képek díszitik. (Soha nem írtam bele. :-))'},
    data ={ photo:'images/13.jpg', title:'Madárlátta üveg', description:'Egyik gyerek meglátta és megvette apjának.'},
    data ={ photo:'images/14.jpg', title:'Műalkotás', description:'Bolhapiacron vásárolt ajándék Apunak.'},
    data ={ photo:'images/15.jpg', title:'Kedvencem', description:'Adagolási ajánlások a gyerekektől. Felülről lefelé:(1.) Csak úgy (2.) Gyomorrontás (3.) Rosszkedv (4.) Munka (5.) GYEREKEK! '},
    data ={ photo:'images/16.jpg', title:'Profilkép', description:'2003. márciusától Unicum néven játszom a KGS nevű go-server-en. Az ellenfeleim ezt a képet látják.'},
    data ={ photo:'images/17.jpg', title:'Panoráma próbálkozás', description:''},
    data ={ photo:'images/18.jpg', title:'Hétköznapi csendélet', description:''},
    data ={ photo:'images/19.jpg', title:'Cserebogár', description:'2004. (Sajnos, korábbi felvételt nem találtam.)'},
    data ={ photo:'images/20.jpg', title:'2010', description:'Alakulgat'},
    data ={ photo:'images/20.jpg', title:'2012', description:'Ez egy korábbi lakásban készült felvétel..'},
]

let currentPhoto = 0

let photoNumber = 0

let loadPhoto = (photoNumber) => {

    $('#big_picture').attr('src', imagesData[photoNumber].photo)
    $('#photo_description').text(imagesData[photoNumber].description)
    $('#photo_title').text(imagesData[photoNumber].title)

 
    $('.thumbnail').each(function()
    {
        if( parseInt($(this).attr('data-number')) === photoNumber){
            $(this).css('border', '5px solid white')
            $(this).css('width', '80px')
            $(this).css('height', '80px')
        }   
        else {
            $(this).css('border', '3px solid white')
            $(this).css('width', '70px')
            $(this).css('height', '70px')
        }
    }
    )
}

$('#rightarrow').click(() =>{
    currentPhoto++
    if (currentPhoto >= imagesData.length){
        currentPhoto = 0
        }
    loadPhoto(currentPhoto)
})

$('#leftarrow').click(() =>{
    currentPhoto--
    if (currentPhoto < 0){
        currentPhoto = imagesData.length-1
        }
    loadPhoto(currentPhoto)
})

let i = 0
imagesData.forEach((data) =>{
     
    $('#thumbnail_containerr').append(`<div class=tooltip><img src= ${data.photo} class=thumbnail data-number=${i}> <span class=tooltiptext> ${data.title}</span></div>`)
    
    i++
})

$('.thumbnail').click(() =>{
    
   loadPhoto(parseInt(($(event.target).attr('data-number'))))
})

loadPhoto(currentPhoto)








