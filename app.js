 setInterval(()=>{
    d = new Date;
    hvalue = d.getHours();
    mvalue = d.getMinutes();
    svalue = d.getSeconds();
    hrotation = 30*hvalue + mvalue/2;
    mrotation = 6*mvalue;
    srotation = 6*svalue;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
 },1000)
 

