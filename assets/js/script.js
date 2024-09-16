function generateImages(){
    let images = document.querySelectorAll(".create-link");
    images.forEach(image=>{
       let link = document.createElement('a'),
             parent = image.parentNode,
           childImage = new Image();
       link.href = image.src;
       link.classList.add('generated-link');
       childImage.src = image.src;
       link.append(childImage);
       image.parentNode.removeChild(image);
       parent.append(link);
    });
 }