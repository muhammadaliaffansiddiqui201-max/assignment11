function submitQuiz(){
    let score = 0;

    let answers = {
        q1:"2",
        q2:"1",
        q3:"0",
        q4:"1",
        q5:"1",
        q6:"2",
        q7:"0",
        q8:"0",
        q9:"0",
        q10:"1"
    };

    for(let q in answers){
        let options = document.querySelectorAll(`input[name="${q}"]`);
        let selected = document.querySelector(`input[name="${q}"]:checked`);

        options.forEach((opt) => {
            let parentDiv = opt.parentElement;

            // remove old classes
            parentDiv.classList.remove("correct","wrong");

            // correct option
            if(opt.value === answers[q]){
                parentDiv.classList.add("correct");
            }

            // wrong selected option
            if(selected && opt === selected && opt.value !== answers[q]){
                parentDiv.classList.add("wrong");
            }
        });

        if(selected && selected.value === answers[q]){
            score++;
        }
    }

    localStorage.setItem("score", score);
    localStorage.setItem("total", 10);

    
    setTimeout(() => {
        window.location.href = "result.html";
    }, 2000);
}
