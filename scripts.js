let data = {
    photo: 'lake.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  

  

let currentPhoto = 0;
let imagesData = ['lake.jpg', 'mountain.jpg', 'sky.jpg', 'tree.jpg'];
$('#photo').attr('src', imagesData[currentPhoto]);

let loadPhoto = (index) => {
    $('#photo').attr('src', imagesData[index]);}

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
