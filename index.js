/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let row = document.getElementsByTagName('tr');
  let positionAge;
  let positionGender;
  let positionStatus;

  for (let i = 0; i < row[0].children.length; i++) {
    if (row[0].children[i].innerHTML == 'Age') {
      positionAge = i;
    }
    if (row[0].children[i].innerHTML == 'Gender') {
      positionGender = i;
    }
    if (row[0].children[i].innerHTML == 'Status') {
      positionStatus = [i];
    }
  }

  for (let k = 1; k < row.length; k++) {
    let classGender = row[k].children[positionGender];

    if (classGender.innerHTML == 'f') {
      classGender.parentNode.classList.add('female');
    } else {
      classGender.parentNode.classList.add('male');
    }

    let classAge = row[k].children[positionAge].innerHTML;
    if (classAge < 18) {
      classGender.parentNode.setAttribute('style', 'text-decoration: line-through');
    }

    let classStatus = row[k].children[positionStatus];

    if (classStatus.hasAttribute('data-available')) {
      let elem = classStatus.getAttribute('data-available');
      if (elem == 'true') {
        classStatus.parentNode.classList.add('available');
      }
      else {
        classStatus.parentNode.classList.add('unavailable');
      }

    }
  }
}
