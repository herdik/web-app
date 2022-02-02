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

let currentPhoto = 0;
let imagesData = [ data0, data1, data2, data3];

  


$('#photo').attr('src', imagesData[currentPhoto]);

let loadPhoto = (index) => {
    $('#photo').attr('src', imagesData[index].photo);
    $('#title').text(imagesData[index].title);
    $('#description').text(imagesData[index].description);
}

loadPhoto(currentPhoto); /*can be '0'*/


$('.rightarrow').on('click', () => { 
    console.log('clicked'); 
    console.log('currentindex:' + currentPhoto); 
    currentPhoto++;
    console.log('index+1:' + currentPhoto); 
    if (currentPhoto>=imagesData.length) {
        currentPhoto=0;
    }
    console.log('showindex:' + currentPhoto); 
    loadPhoto(currentPhoto);
}); 

$('.leftarrow').on('click', () => {   
    currentPhoto--;
    if (currentPhoto<0) {
        currentPhoto=imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
}); 

let i = 0;
imagesData.forEach(arrayObject => {
    $('#thumbnails').append(`<img src="${arrayObject.photo}"  dataIndex="${i}"></img>`);
    i++;
  });

 

  $('#thumbnails img').click((event) => {
	currentPhoto = $(event.target).attr('dataIndex');
	loadPhoto(currentPhoto);
});
