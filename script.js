    const profilePic = document.getElementById('profile-pic');


const images = ['https://beliani.info/Content_Marketing/Graphics/Daniel/l1.PNG', 'https://beliani.info/Content_Marketing/Graphics/Daniel/l2.PNG', 'https://beliani.info/Content_Marketing/Graphics/Daniel/l3.PNG', 'https://beliani.info/Content_Marketing/Graphics/Daniel/l4.png'];


let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  profilePic.src = images[currentIndex];
}, 3000);
