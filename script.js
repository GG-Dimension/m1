var content = document.getElementById('content');
var button = document.getElementById('show-more');


button.onclick = function(){
    if(content.className == 'open'){
        content.className = '';
        button.innerHTML = 'Show More';
    }else{

        content.className = 'open';
        button.innerHTML = 'Show Less';
    }
};



var content1 = document.getElementById('content1');
var button1 = document.getElementById('show-more1');


button1.onclick = function(){
    if(content1.className == 'open'){
        content1.className = '';
        button1.innerHTML = 'Show More';
    }else{

        content1.className = 'open';
        button1.innerHTML = 'Show Less';
    }
};

var content2 = document.getElementById('content2');
var button2 = document.getElementById('show-more2');


button2.onclick = function(){
    if(content2.className == 'open'){
        content2.className = '';
        button2.innerHTML = 'Show More';
    }else{

        content2.className = 'open';
        button2.innerHTML = 'Show Less';
    }
};