let datas = []

$(".lastcard").hover(()=>{
      $(this).css("margin-bottom","+20px")
      $(this).css("transition","1s")
},function(){
	$(this).css("margin-bottom","0px")
});

$(".add").click(()=>{
      $(".block").show();
      $(".second,.first,.sor").css("opacity","0.3")
})
function showimg(){
  if(this.files && this.files[0]){
        var obj = new FileReader();
        obj.onload = function(data){
              return data.target.value;
        }
  }
}
$(".sub").click((e)=>{
      const cardname = $(".cardname").val();
      const author = $(".authorname").val();
      const image = $(".authorimage").val();
      const cardtype = $(".cardtype").val();
      var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      var today  = new Date();
      $(".cards").prepend(`
            <div class="card1 sum">
            <p class="head1 font-weight-bold">Article<span class="ml-2 text-muted">${today.toLocaleDateString("en-US", options).slice(4)}</span></p>
<div class="front1 font-weight-bold"><p>${cardname}
</p></div>
<div class="padd">
<div class="mt-3 row"><img class="man" accept="image/*;capture=camera" src="${image}">
<div class="mt-3">
  <p class="text-muted font-weight-bold">
Author<br>
<span class="chris text-white">${author}</span></p>
</div>
       </div>
 </div>
  <p class="bor1">${cardtype}</p>
</div>`);
      $(".block").hide();
       const data = {
            cardname:cardname,
            author:author,
            image:image,
            cardtype:cardtype
      };
      datas.push(data);
      $(".rese")[0].reset();
      e.preventDefault();
      $(".second,.first,.sor").css("opacity","1")
})

$(".fa-times").click(()=>{
      $(".block").hide()
      $(".second,.first,.sor").css("opacity","1")
})