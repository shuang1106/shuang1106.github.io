export function carousel() {
    // 圖片的索引(幾張圖)
    let currentIndex = 0;
    // 讀取圖片 宣告常數(值不能更改)變數 
    const Images = document.querySelectorAll(' #Banners .Images ');
    // 計算圖片的總數量
    const totalImages = Images.length;

    // 上一張.下一張的按鈕
    document.getElementById('NextBtn').addEventListener('click', showNextImages);
    document.getElementById('PrevBtn').addEventListener('click', showPrevImages);

    // 秀下一張圖片的函數
    function showNextImages() {
        // 移除目前圖片類別
        Images[currentIndex].classList.remove('active');
        // 計算索引值
        currentIndex = ( currentIndex + 1 ) % totalImages;
        // 讀取圖片的索引值 加入類別
        Images[currentIndex].classList.add('active');
    }
    // 秀上一張圖片
    function showPrevImages() {
        // 移除目前圖片類別
        Images[currentIndex].classList.remove('active');
        // 計算索引值
        currentIndex = ( currentIndex - 1 + totalImages ) % totalImages;
        // 讀取圖片的索引值 加入類別
        Images[currentIndex].classList.add('active');
    }

    // 自動播放-每隔固定的時間(3秒)間隔不斷地執行(切換一張圖片)直到主動停止
    // setInterval(函數名稱, 毫秒數);
    setInterval(showNextImages, 4000);
}