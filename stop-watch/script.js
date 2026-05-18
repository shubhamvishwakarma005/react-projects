const StartBtn = document.getElementById("startbtn");
const PauseBtn = document.getElementById("pausebtn");
const ResetBtn = document.getElementById("resetbtn");

const ShowTime = document.getElementById("showTime");

function StopWatch() {
    let timer = null;

    let millisecond = 0;
    let second = 0;
    let minute = 0;
    let hour = 0;



    // Start 
    StartBtn.addEventListener("click", () => {
        console.log("start btn clicked!");


        if (timer !== null) return


        timer = setInterval(() => {

             millisecond++

            if(millisecond == 100){
                millisecond = 0
                second++
            }

            if (second === 60) {
                second = 0
                minute++
            }


            if (minute === 60) {
                minute = 0;
                hour++
            }

            let hh = String(hour).padStart(2,'0')
            let mm = String(minute).padStart(2,'0')
            let ss = String(second).padStart(2,'0')
            let ms = String(millisecond).padStart(2,'0')

            ShowTime.innerText = `${hh}:${mm}:${ss}:${ms}`

        }, 10);
    });



    // Pause 
    PauseBtn.addEventListener("click", () => {
        console.log("pause btn clicked!");

        clearInterval(timer);
         timer = null
    });


    // Reset 
    ResetBtn.addEventListener("click", () => {
        console.log("Reset btn clicked!");
        clearInterval(timer);

         timer = null

        second = 0
        minute = 0
        hour = 0
        millisecond = 0

        ShowTime.innerText = '00:00:00:00';

    });
}

StopWatch();
