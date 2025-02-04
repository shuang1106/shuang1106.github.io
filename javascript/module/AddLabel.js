export function AddLabel() {
    // 主架構 宣告變數
    let Card = document.getElementById("YugiohCard");
    // 無迴圈
    // 1.在.Card之內加入div.CardContent
    let div = document.createElement("div");
    // 2.設定上述元素的class屬性
    div.className = "CardContent";
    // 3.在主架構之內動態新增div標籤
    Card.appendChild(div);

    // 新增第二個區塊屬性ImagesBox的div
    // 若是用動態創建標籤createElement這方法不能省略
    let div2 = document.createElement("div");
    // 設定要新增的div屬性
    div2.className = "ImagesBox";
    // querySelector是javascript中非常強大的DOM方法,專門用來選取符合指定CSS選擇器的第一個元素,它的靈活性非常高,因為它允許使用CSS選擇器語法來查找元素,例如ID class 標籤名稱等
    // 在.CardContent內動態新增div
    document.querySelector(".CardContent").appendChild(div2);

    // 新增img標籤
    let Img = document.createElement("img");
    // 新增圖片連結位置屬性
    Img.src = "/images/icons/Photos.jpg";
    // 在.ImagesBox動態新增img
    document.querySelector(".ImagesBox").appendChild(Img);

    // 新增h3標籤
    let h3 = document.createElement("h3");
    // 寫入文字
    h3.textContent = "漫畫";
    // 在.CardContent動態新增h3
    document.querySelector(".CardContent").appendChild(h3);

    // 新增p標籤
    let p = document.createElement("p");
    // 寫入文字
    p.textContent = "擅長玩遊戲的少年武藤遊戲從爺爺手上得到名為千年積木的古埃及神秘古董，他在拼好千年積木後寄宿在積木中的靈魂闇遊戲進入他的身體之中。闇遊戲是一個有高超遊戲技術、自信而且大膽的人格，他是正義的守門人，會以黑暗遊戲（闇のゲーム）來挑戰傷害遊戲和他的朋友的壞人，並對失敗者以懲罰遊戲來進行制裁。";
    // 在.CardContent動態新增p
    document.querySelector(".CardContent").appendChild(p);
}

export function AddLabelFor($Number) {
    // 主架構 宣告變數
    let Card = document.getElementById("YugiohCard");
    for( let i = 0; i < $Number; i++ ) {
        // 1.在.Card之內加入div.CardContent
        let div = document.createElement("div");
        // 2.設定上述元素的class屬性
        div.className = "CardContent";
        // 3.在主架構之內動態新增div標籤
        Card.appendChild(div);

        // 新增第二個區塊屬性ImagesBox的div
        // 若是用動態創建標籤createElement這方法不能省略
        let div2 = document.createElement("div");
        // 設定要新增的div屬性
        div2.className = "ImagesBox";
        // querySelectorAll搜尋所有特定class的元素
        // 在.CardContent內動態新增div 需指定哪一個class,用索引讀取
        document.querySelectorAll(".CardContent")[i].appendChild(div2);

        // 新增img標籤
        let Img = document.createElement("img");
        // 新增圖片連結位置屬性
        Img.src = "/images/icons/Photos.jpg";
        // 在.ImagesBox動態新增img
        document.querySelectorAll(".ImagesBox")[i].appendChild(Img);

        // 新增h3標籤
        let h3 = document.createElement("h3");
        // 寫入文字
        h3.textContent = "漫畫";
        // 在.CardContent動態新增h3
        document.querySelectorAll(".CardContent")[i].appendChild(h3);

        // 新增p標籤
        let p = document.createElement("p");
        // 寫入文字
        p.textContent = "擅長玩遊戲的少年武藤遊戲從爺爺手上得到名為千年積木的古埃及神秘古董，他在拼好千年積木後寄宿在積木中的靈魂闇遊戲進入他的身體之中。闇遊戲是一個有高超遊戲技術、自信而且大膽的人格，他是正義的守門人，會以黑暗遊戲（闇のゲーム）來挑戰傷害遊戲和他的朋友的壞人，並對失敗者以懲罰遊戲來進行制裁。";
        // 在.CardContent動態新增p
        document.querySelectorAll(".CardContent")[i].appendChild(p);
    }
}

export function AddLabelForOpt($MainId, $Number, $DivContent, $DivImages, $DivContent1, $DivImages1, $ImgSrc) {
    // 主架構 宣告變數
    let Card = document.getElementById($MainId);
    for( let i = 0; i < $Number; i++ ) {
        // 1.在.Card之內加入div.CardContent
        let div = document.createElement("div");
        // 2.設定上述元素的class屬性
        div.className = $DivContent;
        // 3.在主架構之內動態新增div標籤
        Card.appendChild(div);

        // 新增第二個區塊屬性ImagesBox的div
        // 若是用動態創建標籤createElement這方法不能省略
        let div2 = document.createElement("div");
        // 設定要新增的div屬性
        div2.className = $DivImages;
        // querySelectorAll搜尋所有特定class的元素
        // 在.CardContent內動態新增div 需指定哪一個class,用索引讀取
        document.querySelectorAll($DivContent1)[i].appendChild(div2);

        // 新增img標籤
        let Img = document.createElement("img");
        // 新增圖片連結位置屬性
        Img.src = $ImgSrc;
        // 在.ImagesBox動態新增img
        document.querySelectorAll($DivImages1)[i].appendChild(Img);

        // 新增h3標籤
        let h3 = document.createElement("h3");
        // 寫入文字
        h3.textContent = "漫畫";
        // 在.CardContent動態新增h3
        document.querySelectorAll($DivContent1)[i].appendChild(h3);

        // 新增p標籤
        let p = document.createElement("p");
        // 寫入文字
        p.textContent = "擅長玩遊戲的少年武藤遊戲從爺爺手上得到名為千年積木的古埃及神秘古董，他在拼好千年積木後寄宿在積木中的靈魂闇遊戲進入他的身體之中。闇遊戲是一個有高超遊戲技術、自信而且大膽的人格，他是正義的守門人，會以黑暗遊戲（闇のゲーム）來挑戰傷害遊戲和他的朋友的壞人，並對失敗者以懲罰遊戲來進行制裁。";
        // 在.CardContent動態新增p
        document.querySelectorAll($DivContent1)[i].appendChild(p);
    }
}

export function Photos() {
    // 新增多筆的li

    // 宣告主框架變數名稱
    let Photos = document.getElementById("PhotoS");
    // 建立li標籤
    let li = document.createElement("li");
    // 給予class屬性
    li.className = "One";
    // 在Photos架構中建立
    Photos.appendChild(li);

    // 新增a標籤
    let a = document.createElement("a");
    // 給予a href連結屬性
    a.href = "javascript:;";
    // 在li建立
    li.appendChild(a);
}

export function PhotosFor() {
    // 新增多筆的li

    // 宣告主框架變數名稱
    let Photos = document.getElementById("PhotoS");
    // 迴圈
    for( let i = 0; i < 9; i++ ) {
        // 建立li標籤
        let li = document.createElement("li");
        // 給予class屬性
        li.className = "One";
        // 在Photos架構中建立
        Photos.appendChild(li);

        // 新增a標籤
        let a = document.createElement("a");
        // 給予a href連結屬性
        a.href = "javascript:;";
        // 在li建立
        li.appendChild(a);
    }
}

export function PhotosForArray() {
    // 新增多筆的li

    // 宣告主框架變數名稱
    let Photos = document.getElementById("PhotoS");
    // 宣告迴圈陣列變數
    let liclass = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    let texts = ["作品", "作品", "作品", "作品", "作品", "作品", "作品", "作品", "作品", "作品"];
    // 迴圈
    for( let i = 0; i < liclass.length; i++ ) {
        // 建立li標籤
        let li = document.createElement("li");
        // 給予class屬性
        li.className = liclass[i];
        // 在Photos架構中建立
        Photos.appendChild(li);

        // 新增a標籤
        let a = document.createElement("a");
        // 給予a href連結屬性
        a.href = "javascript:;";
        // 給予文字內容
        a.textContent = texts[i];
        // 在li建立
        li.appendChild(a);
    }
}

// 資料陣列
export function PhotosDataArray() {
    // 新增多筆的li

    // 宣告主框架變數名稱
    let Photos = document.getElementById("PhotoS");
    // 宣告物件陣列變數
    let dataArray = [
        { IdName: "One", className: "BgImg", Text: "小動畫", Images: "url('../../images/photos/s/001.png')", Href: "javascript:;"},
        { IdName: "Two", className: "BgImg", Text: "名片設計", Images: "url('../../images/photos/s/002.jpg')", Href: "javascript:;"},
        { IdName: "Three", className: "BgImg", Text: "去背合成", Images: "url('../../images/photos/s/003.jpg')", Href: "javascript:;"},
        { IdName: "Four", className: "BgImg", Text: "刮刮樂", Images: "url('../../images/photos/s/004.png')", Href: "javascript:;"},
        { IdName: "Five", className: "BgImg", Text: "色度鍵", Images: "url('../../images/photos/s/005.png')", Href: "javascript:;"},
        { IdName: "Six", className: "BgImg", Text: "轉場", Images: "url('../../images/photos/s/006.png')", Href: "javascript:;"},
        { IdName: "Seven", className: "BgImg", Text: "繪圖", Images: "url('../../images/photos/s/007.jpg')", Href: "javascript:;"},
        { IdName: "Eigh", className: "BgImg", Text: "遮色片", Images: "url('../../images/photos/s/008.png')", Href: "javascript:;"},
        { IdName: "Nine", className: "BgImg", Text: "海報設計", Images: "url('../../images/photos/s/009.jpg')", Href: "javascript:;"},
        // { IdName: "Ten", className: "BgImg", Text: "作品", Images: "url('../../images/photos/s/010.png')", Href: "javascript:;"}
    ];
    // for...of用來迭代可迭代對象(如陣列)語法 能夠依序讀取陣列中的每個元素
    /*
    for ( let variable of iterable ) {
        執行程式內容
    }
    variable:每次迴圈中對應當前元素的變數
    iterable:需要迭代的可迭代對象(如陣列)   
    */ 
    for ( let Photo of dataArray ) {
        // 建立li標籤
        let li = document.createElement("li");
        // 給予id屬性
        li.id = Photo.IdName;
        // 給予共用class
        li.className = Photo.className;
        // 在Photos架構中建立
        Photos.appendChild(li);
        // 建立li之後再讀取圖片位置
        let ImgId = document.getElementById( Photo.IdName );
        ImgId.style.backgroundImage = Photo.Images;
        

        // 新增a標籤
        let a = document.createElement("a");
        // 給予a href連結屬性
        a.href = Photo.Href;
        // 給予文字內容
        a.textContent = Photo.Text;
        // 在li建立
        li.appendChild(a);
    }
}