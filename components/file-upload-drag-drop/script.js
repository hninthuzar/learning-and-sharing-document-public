let dropzone = document.querySelector(".dropzone");
// let dragArea = document.querySelector(".drag area");
let dragText = document.querySelector(".header");

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
})

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  let file = e.dataTransfer.files[0];

  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  if(validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;

      let imgTag = `<img src="${fileURL}" alt="">`;

      dropzone.innerHTML = imgTag;
    };

    fileReader.readAsDataURL(file);
  } else {
    alert('this is not image');
    dropzone.classList.remove('active');
  }

  // console.log(e.dataTransfer.files);
  // for(let file of e.dataTransfer.files) {
  //   if(file.type == 'image/jpeg') {
  //     // upload(file);
  //     console.log({file});
  //   }
  // }
})