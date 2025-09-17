// ---------------------------------------------
// �רҽ����\��]�䴩�h�ս����^�� cases.html ����
// ---------------------------------------------
const caseSliders = document.querySelectorAll('.caseSlides');

if (caseSliders.length > 0) {
  caseSliders.forEach((slider) => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.slide');

    // ? �۰ʮھڹϤ��ƶq�]�w .caseSlides ���`�e��
    slider.style.width = `${slides.length * 100}%`;

    const parent = slider.closest('.slider');
    const prevBtn = parent.querySelector('.controls-left');
    const nextBtn = parent.querySelector('.controls-right');

    function update() {
      slider.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % slides.length;
      update();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      update();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    setInterval(showNext, 5000); // ?? �C5��۰ʼ���
    update();
  });
}
document.querySelectorAll('.caseSlides').forEach((slider) => {
  let currentIndex = 0;
  const slides = slider.querySelectorAll('.slide');
  const parent = slider.closest('.slider');
  const prevBtn = parent.querySelector('.controls-left');
  const nextBtn = parent.querySelector('.controls-right');

  function update() {
    slider.style.transform = `translateX(-${100 * currentIndex}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    update();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    update();
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
  }

  // �[�J�۰ʽ����]�C5������^
  setInterval(showNext, 5000);

  update(); // ��l��
});
