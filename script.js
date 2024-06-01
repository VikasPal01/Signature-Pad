
var x=0;
var y=0;
var isdrawing=false;
const cnvs=document.getElementById("signaturePad");
const clearBtn=document.getElementById("clearPad");
const colorPicker=document.getElementById("bgColor");
const penColor=document.getElementById("textColor");
const fontPicker=document.getElementById("fontPicker");
const saveBtn=document.getElementById("saveBtn");

const ctx = cnvs.getContext("2d");

penColor.addEventListener('change', (event) => {
    ctx.fillStyle = event.target.value;
    console.log(ctx.fillStyle);
    ctx.strokeStyle = event.target.value;
});
//canvas color change
colorPicker.addEventListener('input',(event)=>{
    ctx.fillStyle = event.target.value;;
    ctx.fillRect(0, 0, cnvs.width, cnvs.height);
});

cnvs.addEventListener("mousedown",(e)=>{
    isdrawing=true;
    x=e.offsetX;
    y=e.offsetY;
   
});

cnvs.addEventListener("mousemove" ,(event) =>{
    if(isdrawing === true){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        x = event.offsetX;
        y = event.offsetY;

    }
 });
 cnvs.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
cnvs.addEventListener('mouseup', () => {
    isdrawing = false;
});
 clearBtn.addEventListener("click",function(){
    ctx.clearRect(0,0,cnvs.width,cnvs.height);
 });
 fontPicker.addEventListener('change', (event) => {
    ctx.lineWidth = event.target.value;
    // ctx.font = `${fontPicker.value} ${event.target.value}px`;
});
saveBtn.addEventListener('click',()=>{
    localStorage.setItem('canvasContents', cnvs.toDataURL());
      // Create a new <a> element
      let link = document.createElement('a');
// Set the download attribute and the href attribute of the <a> element
link.download = 'my-canvas.png';
link.href = cnvs.toDataURL();

// Dispatch a click event on the <a> element
link.click();


});

     




 

