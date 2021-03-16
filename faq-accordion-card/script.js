let question = document.querySelectorAll(".single_question");


question.forEach((item) => item.addEventListener("click", ()=>{

  if(item.parentNode.classList.contains("active")) {
    item.parentNode.classList.toggle("active")
  } else {
    question.forEach(item => item.parentNode.classList.remove("active"));
    item.parentNode.classList.add("active");
  }

}))


