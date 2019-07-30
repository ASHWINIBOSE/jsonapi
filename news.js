$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=b987e1b9e7d04987a557bb6f934e6828",
        success:function(data){
           var f=data.articles;
          
           var output="<table class='table'><thead><tr><th>title</th><th>discription</th><th>read more</th><th>image</th></tr></thead>"
           for(var j in f){
               output +="<tr><td>"+f[j].title+"</td>"
               output +="<td>"+f[j].description+"</td>"
               output +="<td><A Href=" +f[j].url+">readmore</A></td>"
               
               output +="<td><img src="+f[j].urlToImage+" style=width:50px;height:50px></td></tr>"
           }
           output +='</table>'
            $('.result').html(output)
            } 
            
        })
    })
