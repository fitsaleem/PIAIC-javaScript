let loadScript=(src ,callBack)=>{
    let script=document.createElement("script")
    script.src=src
    document.head.appendChild(script)
    script.onerror=function(){
        console.log("their is error occur in script : " + src)
    }
}
 let hello=(src)=>{
    console.log("your script loaded: "+src)
 }

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ,hello)