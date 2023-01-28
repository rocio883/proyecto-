

function mostrar(input)
{
    var img=document.getElementById("img")
    if(input.value=="OCULTAR")
    {
        img.style.visibility="hidden"
        input.value="MOSTRAR"
    }
else
{
    img.style.visibility="visible"
        input.value="OCULTAR"
}

}