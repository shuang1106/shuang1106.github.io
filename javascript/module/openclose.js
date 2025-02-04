export function OpenClose() {
    // 宣告變數讀取選單按鈕(開啟選單的按鈕)
    let MenuBtn = document.getElementById("MenuBtn");
    // 宣告變數讀取選單項目
    let NB = document.getElementById("NB");
    // 宣告變數 讀取關閉按鈕
    let Close = document.getElementById("Close");
    // 宣告變數 讀取關於我按鈕
    let AB = document.getElementById("AB");
    let YB = document.getElementById("YB");
    let PB = document.getElementById("PB");
    let CB = document.getElementById("CB");

    MenuBtn.addEventListener("click", function() {
        NB.style.display = "block";
    });
    Close.addEventListener("click", function() {
        NB.style.display = "none";
    });
    AB.addEventListener("click", function() {
        NB.style.display = "none";
    });
    YB.addEventListener("click", function() {
        NB.style.display = "none";
    });
    PB.addEventListener("click", function() {
        NB.style.display = "none";
    });
    CB.addEventListener("click", function() {
        NB.style.display = "none";
    })
}