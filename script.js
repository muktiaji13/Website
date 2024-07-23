    function setRandomPosition(element) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Ukuran awan untuk penempatan acak
        const cloudWidth = element.offsetWidth;
        const cloudHeight = element.offsetHeight;

        // Posisi acak untuk awan
        const randomX = Math.random() * (viewportWidth - cloudWidth);
        const randomY = Math.random() * (viewportHeight - cloudHeight);

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    function setRandomAnimationDirection(element) {
        const direction = Math.random() > 0.5 ? 'Right' : 'Left'; // Pilih arah acak
        element.style.animationName = `moveClouds${direction}`;
        element.style.animationDuration = `${Math.random() * 20 + 20}s`; // Durasi animasi acak antara 20s dan 40s
    }

    function createClouds() {
        const numberOfClouds = 10; // Jumlah awan yang akan dibuat

        for (let i = 0; i < numberOfClouds; i++) {
            const cloud = document.createElement('img');
            cloud.src = Math.random() > 0.5 ? 'img/awan1.png' : 'img/awan2.png';
            cloud.className = Math.random() > 0.5 ? 'awan1' : 'awan2';

            document.body.appendChild(cloud);

            setRandomPosition(cloud);
            setRandomAnimationDirection(cloud);
        }
    }

    // Buat awan saat halaman dimuat
    window.onload = createClouds;