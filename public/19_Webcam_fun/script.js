const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: true })
        .then(localMediaStream => {
            // video.src = window.URL.createObjectURL(localMediaStream)
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`Erro`, err);
        });
}

function paintToCanvas() {
    const w = video.videoWidth;
    const h = video.videoHeight;

    canvas.width = w;
    canvas.height = h;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, w, h);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
}

snap.addEventListener('click', getVideo);