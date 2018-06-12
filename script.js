var i=0;
             
                var start = new Date().getTime();
                document.getElementById("shape").onclick=function()
                {
                    document.getElementById("shape").style.opacity=0;
                    var end=new Date().getTime();
                    document.getElementById("secs").innerHTML=(end-start)/1000;  
                    tout();
                   
                     
                } 
            function tout()
            {
                setTimeout(makeShapeAppear,Math.random()*2000);
            }
            
            





            function makeShapeAppear()
            {
                var top=Math.random()*400;
                var left=Math.random()*400;
                var width=Math.random()*300;
                document.getElementById("shape").style.top=top+"px";
                document.getElementById("shape").style.left=left+"px";
                document.getElementById("shape").style.width= width+"px";
                document.getElementById("shape").style.height=width+"px";
                document.getElementById("shape").style.opacity=1;
                document.getElementById("shape").style.backgroundColor=getRandomColor();
                getRandomShape();
                start= new Date().getTime();

            }
         
            
            
            function getRandomColor()
            {
                var no= "0123456789ABCDEF".split('');
                var color='#';
                for(var i=0;i<6;i++)
                    {
                        color=color+no[Math.ceil(Math.random()*16)];
                    }
                return color;
                
            }
            
            function getRandomShape()
            {
                var r=Math.floor(Math.random()*100);
                if (r%2==0)
                        document.getElementById("shape").style.borderRadius="100%";
                    
            }
            
            
            
            
            
            