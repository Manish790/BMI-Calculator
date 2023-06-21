
function convertHeight(event){
  event.preventDefault();
  document.getElementById("ftInput").value = "";
  document.getElementById("mInput").value ="";
  document.getElementById("cmInput").value="";
  document.querySelector(".wrap").style.display = "block";
}
function convertWeight(event){
  event.preventDefault();
  document.getElementById("lbInput").value="";
  document.getElementById("kgInput").value="";
  document.querySelector(".wrap2").style.display = "block";
}
function clicked() {
    
    const w = parseFloat(document.querySelector('#weight').value);
    const h = parseFloat(document.querySelector('#height').value)/100;
    
    const ans = w / (h * h);
    document.querySelector(".formWrap").style.height = "400px";
    document.getElementById("ans").textContent = `Your BMI is ${ans.toFixed(2)}`;
    document.getElementById('ans').style.boxShadow="5px 5px 10px black";
    document.getElementById('ans').style.backgroundColor="yellow";
    document.querySelector('form').reset();
   

   
    
  }
  function crossed_tool(){
   document.querySelector(".wrap").style.display = "none";
  }
  function crossed_tool2(){
    document.querySelector(".wrap2").style.display = "none";
   }
  function crossed() {
    
    document.querySelector(".formWrap").style.display = "none";
  }
  function showFormWrap() {
    var formWrap = document.querySelector(".formWrap");
    formWrap.style.display = "block";
    
  }
  function convertCm() {
    var cm = parseFloat(document.getElementById("cmInput").value);
    var ft = cm * 0.0328084;
    var m = cm * 0.01;
    
    document.getElementById("ftInput").value = ft.toFixed(2);
    document.getElementById("mInput").value = m.toFixed(2);
  }
  
  function convertFt() {
    var ft = parseFloat(document.getElementById("ftInput").value);
    var cm = ft * 30.48;
    var m = cm * 0.01;
    
    document.getElementById("cmInput").value = cm.toFixed(2);
    document.getElementById("mInput").value = m.toFixed(2);
  }
  
  function convertM() {
    var m = parseFloat(document.getElementById("mInput").value);
    var cm = m * 100;
    var ft = cm * 0.0328084;
    
    document.getElementById("cmInput").value = cm.toFixed(2);
    document.getElementById("ftInput").value = ft.toFixed(2);
  }




  function convertKg() {
    var kg = parseFloat(document.getElementById("kgInput").value);
    var lb = kg * 2.20462;
    var st = kg * 0.157473;
  
    document.getElementById("lbInput").value = lb.toFixed(2);
    document.getElementById("stInput").value = st.toFixed(2);
  }
  
  function convertLb() {
    var lb = parseFloat(document.getElementById("lbInput").value);
    var kg = lb * 0.453592;
    var st = lb * 0.0714286;
  
    document.getElementById("kgInput").value = kg.toFixed(2);
    document.getElementById("stInput").value = st.toFixed(2);
  }
  

  

  
 
  