let slideIndex = 0; // 초기 슬라이드 인덱스를 0으로 설정
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0; // 마지막 슬라이드를 넘어가면 처음 슬라이드로 돌아감
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // 처음 슬라이드 이전으로 가면 마지막 슬라이드로 이동
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 모든 슬라이드 숨기기
    }
    
    slides[slideIndex].style.display = "block"; // 현재 슬라이드만 보이기
}
