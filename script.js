
const canvas = new fabric.Canvas('canvas');

function setBg(src){
  fabric.Image.fromURL(src, img => {
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX: canvas.width / img.width,
      scaleY: canvas.height / img.height
    });
  });
}

document.getElementById('upload').onchange = e => {
  const reader = new FileReader();
  reader.onload = () => {
    fabric.Image.fromURL(reader.result, img => {
      img.scaleToWidth(250);
      canvas.add(img);
    });
  };
  reader.readAsDataURL(e.target.files[0]);
};

function addText(){
  const value = document.getElementById('customText').value || 'Happy Birthday';
  const text = new fabric.Textbox(value, {
    fill:'#000',
    fontSize:30,
    left:50,
    top:50
  });
  canvas.add(text);
}

function clearCanvas(){
  canvas.clear();
}

function download(){
  const link = document.createElement('a');
  link.download = 'mezotic-edits-card.png';
  link.href = canvas.toDataURL();
  link.click();
}
