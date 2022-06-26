function val(result)
{
    form.disp.value = form.disp.value + result;
}
console.log(val);

function calculate()
{
    if(form.disp.value=="")
    {
        alert("please enter numbers");
    }else{
        form.disp.value = eval(form.disp.value);
    }
}

var btn = form.veql;
btn.addEventListener('dblclick', function(){
 form.disp.value = ""; // when we double click on equal button to result will be clear
});
console.log(btn);