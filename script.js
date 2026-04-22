// ===== FIX F5 LUÔN VỀ ĐẦU =====
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ===== CHỜ LOAD XONG =====
window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    // ===== FADE SCROLL =====
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll(){
        reveals.forEach((el, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if(elementTop < windowHeight - 120){
                setTimeout(() => {
                    el.classList.add("active");
                }, index * 100);
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ===== GALLERY LIGHTBOX =====
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    // ===== VIDEO CUSTOM FULL =====
    const video = document.getElementById("myVideo");
    const btn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const volume = document.getElementById("volume");
    const playPause = document.getElementById("playPause");
    const fullscreen = document.getElementById("fullscreen");
    const videoFull = document.getElementById("video-full");

    if(video && btn){

        // nút play giữa
        btn.addEventListener("click", () => {
            video.play();
            btn.style.display = "none";
        });

        // click video play/pause
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                btn.style.display = "none";
            } else {
                video.pause();
                btn.style.display = "flex";
            }
        });

        // khi video kết thúc
        video.addEventListener("ended", () => {
            btn.style.display = "flex";
        });

        // ===== THANH TUA =====
        if(progress){
            video.addEventListener("timeupdate", () => {
                progress.value = (video.currentTime / video.duration) * 100 || 0;
            });

            progress.addEventListener("input", () => {
                video.currentTime = (progress.value / 100) * video.duration;
            });
        }

        // ===== ÂM LƯỢNG =====
        if(volume){
            volume.value = video.volume;
            volume.addEventListener("input", () => {
                video.volume = volume.value;
            });
        }

        // ===== PLAY/PAUSE BUTTON =====
        if(playPause){
            playPause.addEventListener("click", () => {
                if(video.paused) video.play();
                else video.pause();
            });
        }

        // ===== FULLSCREEN =====
        if(fullscreen){
            fullscreen.addEventListener("click", () => {
                video.requestFullscreen();
            });
        }

        // ===== LIGHTBOX VIDEO =====
        if(videoLightbox && videoFull){
            video.addEventListener("dblclick", () => {
                videoLightbox.classList.add("active");
                videoFull.src = video.src;
                videoFull.play();
            });

            videoLightbox.addEventListener("click", () => {
                videoLightbox.classList.remove("active");
                videoFull.pause();
            });
        }
    }

});
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
