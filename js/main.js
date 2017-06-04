
lightbox.option({
  'wrapAround': true,
  'imageFadeDuration': 1000,
})





document.getElementById('search').addEventListener('keyup', searchPicture);
function searchPicture() {
  // setting var
  var input, filter, ul, li, a, i;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('img-list');
  li = ul.getElementsByTagName('li');
    // LOOPS THROUGH ALL LIST ITEMS TO FIND THE ONE THAT MATCHES THE KEYWORD
  for (i = 0; i < li.length; i += 1) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = 'none';
    }
  }
}
