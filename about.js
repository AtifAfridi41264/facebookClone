



function addPost() {
    const postText = document.getElementById('post-text').value;
    if (!postText.trim()) {
      alert('Please enter some text for your post.');
      return;
    }

     

    const postContainer = document.createElement('div');
    postContainer.className = 'post-container';

    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
    postHeader.innerHTML = `
      <img src = "pic.jpg" id = "pic">
       <h3>Atif Ullah</h3>
    `;
    postContainer.appendChild(postHeader);

    const postContent = document.createElement('div');
    postContent.className = 'post-content';
    postContent.innerHTML = `
      <p>${postText}</p>
    `;
    postContainer.appendChild(postContent);

     

    // Check if media has been uploaded
    const mediaInput = document.getElementById('media-input');
    if (mediaInput.files && mediaInput.files[0]) {
      const mediaFile = mediaInput.files[0];
      const mediaType = mediaFile.type.split('/')[0];
      if (mediaType === 'image' || mediaType === 'video') {
        const postMedia = document.createElement(mediaType === 'image' ? 'img' : 'video');
        postMedia.className = 'post-media';
        postMedia.src = URL.createObjectURL(mediaFile);
        postMedia.controls = true; // Show controls for video
        postContainer.appendChild(postMedia);

        if (mediaType === 'image' || mediaType === 'video'){
          const iconsContainer = document.createElement('div');
          iconsContainer.className = 'icons';
           
          for (let i = 0; i < 3; i++) {
            const icon = document.createElement('i');
            icon.className = 'fa-regular fa-thumbs-up'; // You can change the icon class here
            iconsContainer.appendChild(icon);
        }
        }

      } else {
        alert('Unsupported media type. Please upload an image or a video.');
        return;
      }
    }

    
    
    document.getElementById('posts-container').appendChild(postContainer);



    // Clear the inputs after posting
    document.getElementById('post-text').value = '';
    document.getElementById('media-input').value = '';
  }

   