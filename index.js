

    function myMap() {
        var mapProp= {
          center:new google.maps.LatLng( 5.59887170791626,-0.311226099729538),
          zoom:5,
          panControl: true,
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          overviewMapControl: true,
          rotateControl: true
        };
   
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
       
  const card=  document.getElementById('card')
  const cardFront=  document.getElementsByClassName('flip-card-front')
const btn =document.getElementById('btn-main')

  card.addEventListener("click", ()=>{
    if (card.classList.contains('flip')){
        btn.innerText="Flip"
        return
    }
    else{
        btn.innerText="Flip"
        card.classList.add('flip')
    }
  })
 btn.addEventListener('click',()=>{
    if(btn.innerText!="Flip"){
        return
    }else{
        card.classList.remove('flip')
        btn.innerText="Click Card To View Location"
    }
 })



   


