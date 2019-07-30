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
               output +="<td><a Href=" +f[j].url+">readmore</a></td>"
               
               output +="<td><img src="+f[j].urlToImage+" style=width:150px;height:100px></td></tr>"
           }
           output +='</table>'
            $('.result').html(output)
            } 
            
        })
    })
