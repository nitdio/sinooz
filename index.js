function updateIntroScroll() {
    const wrapper = document.querySelector(".intro-scroll-wrapper");
    const sticky = document.querySelector(".intro-sticky");
    const content = document.getElementById("intro-content");
    if (!wrapper || !sticky || !content) return;

    const rect = wrapper.getBoundingClientRect();
    const scrollableDistance = wrapper.offsetHeight - window.innerHeight;

    // progress: 0 = at the top (fully visible), 1 = scrolled fully past
    let progress = scrollableDistance > 0 ? (-rect.top) / scrollableDistance : 0;
    progress = Math.min(Math.max(progress, 0), 1);

    const translateY = -progress * 15; // 0 -> -15vh, rises as you scroll
    const opacity = 1 - progress;      // 1 -> 0, fades out as you scroll

    content.style.transform = `translateY(${translateY}vh)`;
    content.style.opacity = opacity;

    // Dark blue background fades out in sync with the text
    sticky.style.backgroundColor = `rgba(10, 20, 60, ${opacity * 0.9})`;
}

document.addEventListener("DOMContentLoaded", updateIntroScroll);
window.addEventListener("scroll", () => requestAnimationFrame(updateIntroScroll));
window.addEventListener("resize", () => requestAnimationFrame(updateIntroScroll));