// objekty a podobjekty(premennne) ktore su v poli imagesData
let data0 = {
    photo: 'lake.jpg',
    title: 'My title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };
  
  let data1 = {
    photo: 'mountain.jpg',
    title: 'My Hora',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };
  
  let data2 = {
    photo: 'sky.jpg',
    title: 'Sky',
    description: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };  

  let data3 = {
    photo: 'tree.jpg',
    title: 'Tree',
    description: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };  

// index aktualnych dát s vychodzou hodnotou 0 vychodzia pozicia pre aktualny slide 
let currentPhoto = 0;

// pole s objektami 
let imagesData = [ data0, data1, data2, data3];


  
// F nacita aktualne data z daneho indexu v poli imageesData; ked zavolas loadPhoto vykonaj všetko čo je vo funkcii
// definujme funkciu 
let loadPhoto = (index) => {
    $('#photo').attr('src', imagesData[index].photo);
    $('#title').text(imagesData[index].title);
    $('#description').text(imagesData[index].description);
}
// vykonavam alebo volám funckiu 
loadPhoto(currentPhoto); /*can be '0'*/

// imsgesData.lenght - 1 = poslednz inmdex v poli

$('.rightarrow').on('click', () => {  
    currentPhoto++; 
    // ak je index väčší mimo pola nastava index na 0
    if (currentPhoto>imagesData.length - 1) {
        currentPhoto=0;
    } 
    loadPhoto(currentPhoto);
}); 

$('.leftarrow').on('click', () => {   
    currentPhoto--;
    if (currentPhoto<0) {
        currentPhoto=imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
}); 

/*

let i = 0;
imagesData.forEach(arrayObject => {
    $('#thumbnails').append(`<img src="${arrayObject.photo}"  dataIndex="${i}"></img>`);
    i++;
  });*/

  for(let i= 0; i<imagesData.length;/*ak sme stale v ramci pola*/ i++){
    let arrayObject /* reprezentuje aktualny objekt z pola imagesData*/ = imagesData[i];
    $('#thumbnails').append(`<img src="${arrayObject.photo}"  dataIndex="${i}"></img>`);
  }

 

  $('#thumbnails img').click((event) => {
  /*var previousThumbnail = $('div[dataIndex="${i}"]').get();
  currentThumbnail.css('transform', 'scale(1.0)');*/
  currentPhoto = $(event.target) /* pridradim objekt y html */.attr('dataIndex');
	loadPhoto(currentPhoto);
 /* $(event.target).toggleClass('big');*/
  /*currentThumbnail = $(event.target);*/ 
});





 

