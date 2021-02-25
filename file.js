var container=document.createElement("div");
container.setAttribute("class","container");
var row= document.createElement("div");
row.setAttribute("class","row");
var column1= document.createElement("div");
column1.setAttribute("class", "col-2 bg-primary");


var column2= document.createElement("div");
column2.setAttribute("class","col-8 bg-success");
var rowa= document.createElement("div");
rowa.setAttribute("class","row");
var columna= document.createElement("div");
columna.setAttribute("class", "col-12");

var column3= document.createElement("div");
column3.setAttribute("class","col-2 bg-danger");

row.append(column1,column2,column3);
container.append(row);
rowa.append(columna);
column2.append(rowa);
document.body.append(container);

var tb = document.createElement('table');
tb.setAttribute = ('class', 'table');

var tr = document.createElement('tr');
tr.setAttribute = ('class', 'row1');
var head1 = document.createElement('th');
head1.setAttribute = ('class', 'head');
head1.innerHTML = 'Name';
var head2 = document.createElement('th');
head2.setAttribute = ('class', 'head');
head2.innerHTML = 'Email';
var head3 = document.createElement('th');
head3.setAttribute = ('class', 'head');
head3.innerHTML = 'Id';
tr.append(head1, head2, head3);
tb.append(tr);

var arr = [];

tb.style.border = 'solid';

head1.style.border = 'solid';
head1.style.width='50px';
            head1.style.height='50px';
head2.style.border = 'solid';
head2.style.width='50px';
            head2.style.height='50px';
head3.style.border = 'solid';
head3.style.width='50px';
            head3.style.height='50px';
            head3.style.padding='10px';
            head1.style.padding='10px';
            head2.style.padding='10px';

var b = prompt("How many IDs per page? Enter as numberics!");

var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
var i=0;
request.onload = function fun() {
    var data = JSON.parse(this.response);

    console.log(data);
    function print(x) {
        tb.innerHTML="";
       for(w=1;w<=10;w++){
         if(w!=x)
         arr[w].setAttribute('class','btn btn-lg btn-primary');
       }
    
       if(x=='next' && i!=100){
        
        arr[0].setAttribute('class','btn btn-lg btn-primary');
         console.log(i);
         var a=i;
         var a=a.toString();
         a=a.charAt(0);
         x= +a+1;
         console.log(x);
         if(x>3){
         arr[x-3].style.display='none';
        arr[x].style.display='inline';
        arr[x+1].style.display='inline';}
        
        arr[x-1].setAttribute('class','btn btn-lg btn-primary');
        arr[x].setAttribute('class','btn btn-lg btn-primary active');
       }
       if(x=='next' && i==100){
         x=10;
       }
       if(x=='prev' && i!=10){
        arr[11].setAttribute('class','btn btn-lg btn-primary');
        if(i==100)
        x=9;
        else{
        console.log(i);
        var a=i;
        var a=a.toString();
        a=a.charAt(0);
        x= +a-1;}
        if(x>2){
          arr[x+1].style.display='none';
         arr[x-2].style.display='inline';
         }
         
         arr[x].setAttribute('class','btn btn-lg btn-primary active');
         arr[x+1].setAttribute('class','btn btn-lg btn-primary');
        
      }
      if(x=='prev' && i==10){
        x=1;
        
      }
      
        for (i = ((x-1)*b);i<(b*x);i++) {
            
            console.log(data,i,x,b);
            var tr1 = document.createElement('tr');
            tr1.setAttribute = ('class', 'row1');
            var dataa1 = document.createElement('td');
            dataa1.innerHTML = 'Name: '+data[i].name;
            var dataa2 = document.createElement('td');
            dataa2.innerHTML = 'email: '+data[i].email;
            var dataa3 = document.createElement('td');
            dataa3.innerHTML = 'id: '+data[i].id;
            tr1.append(dataa1, dataa2, dataa3);
            tb.append(tr1);
            
            document.body.append(tb);
            column2.append(tb);
            dataa1.style.border = 'solid';
            dataa1.style.width='50px';
            dataa1.style.height='50px';
           
        dataa2.style.border = 'solid';
        dataa2.style.width='50px';
            dataa2.style.height='50px';
            
        dataa3.style.border = 'solid';
        dataa3.style.width='50px';
            dataa3.style.height='50px';
            dataa3.style.padding='10px';
            dataa1.style.padding='10px';
            dataa2.style.padding='10px';
        if(i==99)
        arr[11].setAttribute('class','btn btn-lg btn-primary disabled')
        //arr[11].style.display='none';
        if(i==9)
        arr[0].setAttribute('class','btn btn-lg btn-primary disabled')
        //arr[0].style.display='none';
        console.log(i);
        }}
    

    for (var j = 0; j <= (data.length / b)+ 1; j++) {
        
        var a = document.createElement('button');
        a.setAttribute('class','btn btn-lg btn-primary');
        if(j==0)
        a.innerHTML='prev';
        if(j==11)
        a.innerHTML='next';
        if(j!=0 && j!=11)
        a.innerHTML = j;
        
        
        document.body.appendChild(a);
        arr.push(a);
        
        console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
    }
    console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
    arr.forEach(element => {element.onclick=()=>print(element.innerHTML);                                                      
    });
    print(1);
    for(d=4;d<=10;d++){
      arr[d].style.display='none';    }

}

