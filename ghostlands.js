<html><head>
<script type="text/javascript">
{
   var s = document.createElement('script');
   s.src = "sprintf.js";
   s.type = "text/javascript";
   document.getElementsByTagName("head")[0].appendChild(s);
}
function go(toon) {
   document.write('<div id='+toon+'><h2>'+toon+'</h2>Loading</div>');
   var s = document.createElement('script');
   s.src = "http://eu.battle.net/api/wow/character/ghostlands/"+toon+"?fields=titles&jsonp=bnetreturn";
   s.type = "text/javascript";
   document.getElementsByTagName("head")[0].appendChild(s);
}
function bnetreturn(o) {
   var toon=o.name;
   var s=toon;
   for(i=0;i<o.titles.length;i++){
      if(o.titles[i].selected){
          s=sprintf( o.titles[i].name,toon);
      }
   }
   document.getElementById(toon).innerHTML = "<h2>"+s+"</h2>"
   document.getElementById(toon).innerHTML += '<a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/><img src=http://eu.battle.net/static-render/eu/'+o.thumbnail+' alt=img></a>';
   document.getElementById(toon).innerHTML += '<br><a href=http://www.wow-heroes.com/character/eu/Ghostlands/'+toon+'/>wow heroes</a>';
   document.getElementById(toon).innerHTML += ' <a href=http://www.askmrrobot.com/wow/gear/eu/ghostlands/'+toon+'>askmr robot</a>';
}
</script>
</head><body>
<div>
   <script>go("Manxan");</script>Healer (maybe mdps)
</div>
<div>
   <script>go("Filonia");</script>Healer / Dps
</div>
<div>
   <script>go("Templaar");</script>Tank
</div>
<div>
   <script>go("Oria");</script>Dps
</div>
<div>
   <script>go("Spirtmoon");</script>Healer
</div>
div>
   <script>go("Vanburen");</script>Tank
</div>
<div>
   <script>go("Mayem");</script>Dps / Tank
</div>
<div>
   <script>go("Máxxpain");</script>Dps / Tank
</div>
<div>
   <script>go("Drizztdourde");</script>Meele Dps
</div>
<div>
   <script>go("Shootudead");</script>Dps
</div>
<div>
   <script>go("Trialpexan");</script>Dps
</div>
<div>
   <script>go("Pringao");</script>(alt) healer
</div>
<div>
   <script>go("Kermitzz");</script>Dps but cannot be online most of the nights
</div>
<div>
   <script>go("Bodiless");</script>Healer levling up
</div>
</body></html>
