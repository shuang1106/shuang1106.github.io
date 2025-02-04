// 用var宣告之變數無視大括號{}區隔 用let宣告之變數會受大括號{}影響
// 宣告變數時區分為全域變數和區域變數
export function Years() {
    // 宣告變數承接時間實體化
    let Years = new Date().getFullYear();
    // 讀取標籤的id選擇器
    let Year = document.getElementById('Years');
    // 將年份寫入html標籤之內
    Year.textContent = Years;
}