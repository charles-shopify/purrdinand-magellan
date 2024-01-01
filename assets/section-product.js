let currentComponent = 1;

allComponents = document.querySelectorAll('.component');

function showCurrentComponent() {

  allComponents.forEach(component => {
    component.style.display = 'none';

  });

  document.querySelector(`#component-${currentComponent}`).style.display = 'block';

} 

function handleNextClick(event) {
  if (currentComponent < 3) {
    event.preventDefault();
    currentComponent++;
    showCurrentComponent();
    

  }
  console.log("HEllo")

}

function handleBackClick(event) {
  if (currentComponent > 1) {
    event.preventDefault();
    currentComponent--;
    showCurrentComponent();
   
  }
}


document.getElementById('nextBtn1').addEventListener('click', handleNextClick);
document.getElementById('nextBtn2').addEventListener('click', handleNextClick);




document.getElementById('backBtn1').addEventListener('click', handleBackClick);
document.getElementById('backBtn2').addEventListener('click', handleBackClick);



showCurrentComponent();