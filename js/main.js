let input = document.querySelector(".colorCode");
let rValue = document.querySelector(".r");
let gValue = document.querySelector(".g");
let bValue = document.querySelector(".b");
let rgba = document.querySelector(".c");
let button = document.querySelector(".btn");
let reset = document.querySelector("#btn-1");

reset.addEventListener("click", ()=>{
    input.value = " ";
    rValue.value = " ";
    gValue.value = " ";
    bValue.value = " ";
    rgba.value = " ";
    document.querySelector(".area").style.backgroundColor = "#fff";


})

button.addEventListener ("click", ()=>{
    var v = input.value;

    let hex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

    if(v.length === 4 || v.length === 7){
        let result = hex.exec(v)
        if(result == null){
            rValue.value = "Not Valid Color Code";
            gValue.value = "Not Valid Color Code";
            bValue.value = "Not Valid Color Code";
             rgba.value = "Not Valid Color Code";
             document.querySelector(".area").style.backgroundColor = "#fff";
        }else{
            rValue.value = `${getColorValue(result[1])}`;
            gValue.value = `${getColorValue(result[2])}`;
            bValue.value = `${getColorValue(result[3])}`;
            rgba.value = `${`rgba`}(${getColorValue(result[1])}, ${getColorValue(result[2])}, ${getColorValue(result[3])})`;
            document.querySelector(".area").style.backgroundColor = v;
        }

    }else{
        rValue.value = "Not Valid Color Code";
        gValue.value = "Not Valid Color Code";
        bValue.value = "Not Valid Color Code";
        rgba.value = "Not Valid Color Code";
    }
})
function getColorValue(hex){
    if(hex.length == 1){
        hex = hex + hex
    }
    return parseInt(hex, 16);
}

