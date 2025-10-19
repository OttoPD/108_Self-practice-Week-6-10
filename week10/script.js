document.addEventListener('DOMContentLoaded', () => {
const bgColor = localStorage.getItem('bgColor');
const fontColor = localStorage.getItem('fontColor');
const fontSize = localStorage.getItem('fontSize');

if (bgColor) {
   document.getElementById('bgColor').value = bgColor;
   document.body.style.backgroundColor = bgColor;
 }
if (fontColor) {
   document.getElementById('fontColor').value = fontColor;
   document.body.style.color = fontColor;
 }
if (fontSize) {
   document.getElementById('fontSize').value = fontSize;
   updateFontSize(fontSize);
 }
});


function updateFontSize(size) {
document.body.classList.remove('small', 'medium', 'large');
document.body.classList.add(size);
}


document.getElementById('saveBtn').addEventListener('click', () => {
const bgColor = document.getElementById('bgColor').value;
const fontColor = document.getElementById('fontColor').value;
const fontSize = document.getElementById('fontSize').value;

localStorage.setItem('bgColor', bgColor);
localStorage.setItem('fontColor', fontColor);
localStorage.setItem('fontSize', fontSize);

document.body.style.backgroundColor = bgColor;
document.body.style.color = fontColor;
updateFontSize(fontSize);
alert('บันทึกค่าเรียบร้อยแล้ว');
});


document.getElementById('resetBtn').addEventListener('click', () => {
localStorage.removeItem('bgColor');
localStorage.removeItem('fontColor');
localStorage.removeItem('fontSize');


const defaultBg = '#ffffff';
const defaultFontColor = '#000000';
const defaultFontSize = 'medium';

document.getElementById('bgColor').value = defaultBg;
document.getElementById('fontColor').value = defaultFontColor;
document.getElementById('fontSize').value = defaultFontSize;

document.body.style.backgroundColor = defaultBg;
document.body.style.color = defaultFontColor;
updateFontSize(defaultFontSize);
alert('รีเซ็ตค่าเรียบร้อยแล้ว');
});