// ========================================
// アイドルデータ
// ========================================
//
// ★★★ ここを自分のアイドル情報に変更してください ★★★
//
// image → imagesフォルダに入れた画像のファイル名
// name  → アイドルの名前
// group → グループ名
//
// 例：
// {
//     image: "idol01.jpg",
//     name: "山田花子",
//     group: "○○○○"
// }
//
// ========================================

const idols = [

    {
        image: "bora.jpg",
        name: "ボラ",
        group: "SISTAR"
    },

    {
        image: "dasom.jpg",
        name: "ダソム",
        group: "SISTAR"
    },

    {
        image: "allen.jpg",
        name: "アレン",
        group: "CRAVITY"
    },

    {
        image: "bomin.jpg",
        name: "ボミン",
        group: "AEN"
    },

    {
        image: "bona.jpg",
        name: "ボナ",
        group: "WJSN"
    },

    {
        image: "chengxiao.jpg",
        name: "ソンソ",
        group: "WJSN"
    },

    {
        image: "dawon.jpg",
        name: "ダウォン",
        group: "WJSN"
    },

    {
        image: "dayoung.jpg",
        name: "ダヨン",
        group: "WJSN"
    },

    {
        image: "donghyun.jpg",
        name: "ドンヒョン",
        group: "BOYFRIEND"
    },

    {
        image: "eunseo.jpg",
        name: "ウンソ",
        group: "WJSN"
    },

    {
        image: "exy.jpg",
        name: "エクシ",
        group: "WJSN"
    },

    {
        image: "gaeul.jpeg",
        name: "ガウル",
        group: "IVE"
    },

    {
        image: "haru.jpg",
        name: "ハル",
        group: "AEN"
    },

    {
        image: "haruto.jpg",
        name: "ハルト",
        group: "AEN"
    },

    {
        image: "haum.jpg",
        name: "ハウム",
        group: "KiiiKiii"
    },

    {
        image: "hyeongjun.jpg",
        name: "ヒョンジュン",
        group: "CRAVITY"
    },

    {
        image: "hyolyn.jpg",
        name: "ヒョリン",
        group: "SISTAR"
    },

    {
        image: "hyungwon.jpeg",
        name: "ヒョンウォン",
        group: "MONSTA X"
    },

    {
        image: "hyunseong.jpg",
        name: "ヒョンソン",
        group: "IDID"
    },

    {
        image: "im.jpg",
        name: "I.M",
        group: "MONSTA X"
    },

    {
        image: "jeongmin.jpg",
        name: "ジョンミン",
        group: "BOYFRIEND"
    },

    {
        image: "jiyong.jpg",
        name: "ジヨン",
        group: "AEN"
    },

    {
        image: "jiyu.jpg",
        name: "ジユ",
        group: "KiiiKiii"
    },

    {
        image: "joohoney.jpeg",
        name: "ジュホン",
        group: "MONSTA X"
    },

    {
        image: "jungmo.jpg",
        name: "ジョンモ",
        group: "CRAVITY"
    },

    {
        image: "junhyuk.jpg",
        name: "ジュニョク",
        group: "IDID"
    },

    {
        image: "junseo.jpg",
        name: "ジュンソ",
        group: "AEN"
    },

    {
        image: "kaira.jpg",
        name: "カイラ",
        group: "AEN"
    },

    {
        image: "kihyun.jpg",
        name: "キヒョン",
        group: "MONSTA X"
    },

    {
        image: "kwangmin.jpg",
        name: "クァンミン",
        group: "BOYFRIEND"
    },

    {
        image: "kya.jpg",
        name: "キヤ",
        group: "KiiiKiii"
    },

    {
        image: "kyuhyun.jpg",
        name: "ギュヒョン",
        group: "AEN"
    },

    {
        image: "leeseo.jpeg",
        name: "イソ",
        group: "IVE"
    },

    {
        image: "leesol.jpg",
        name: "イソル",
        group: "KiiiKiii"
    },

    {
        image: "liz.jpeg",
        name: "リズ",
        group: "IVE"
    },

    {
        image: "luda.jpg",
        name: "ルダ",
        group: "WJSN"
    },

    {
        image: "meiqi.jpg",
        name: "ミギ",
        group: "WJSN"
    },

    {
        image: "minhee.jpg",
        name: "ミ二",
        group: "CRAVITY"
    },

    {
        image: "minhyuk.jpg",
        name: "ミニョク",
        group: "MONSTA X"
    },

    {
        image: "minjae.jpg",
        name: "ミンジェ",
        group: "IDID"
    },

    {
        image: "minwoo.png",
        name: "ミヌ",
        group: "BOYFRIEND"
    },

    {
        image: "rei.jpg",
        name: "レイ",
        group: "IVE"
    },

    {
        image: "semin.jpg",
        name: "セミン",
        group: "IDID"
    },

    {
        image: "seola.jpg",
        name: "ソラ",
        group: "WJSN"
    },

    {
        image: "seonghyeon.jpg",
        name: "ソンヒョン",
        group: "IDID"
    },

    {
        image: "seongmin.jpg",
        name: "ソンミン",
        group: "CRAVITY"
    },

    {
        image: "serim.jpg",
        name: "セリム",
        group: "CRAVITY"
    },

    {
        image: "shownu.jpg",
        name: "ショヌ",
        group: "MONSTA X"
    },

    {
        image: "soobin.jpg",
        name: "スビン",
        group: "WJSN"
    },

    {
        image: "soyou.jpg",
        name: "ソユ",
        group: "SISTAR"
    },

    {
        image: "sui.jpeg",
        name: "スイ",
        group: "KiiiKiii"
    },

    {
        image: "taeyoung.jpg",
        name: "テヨン",
        group: "CRAVITY"
    },

    {
        image: "wonbin.jpg",
        name: "ウォンビン",
        group: "IDID"
    },

    {
        image: "wonho.jpg",
        name: "ウォノ",
        group: "MONSTA X"
    },

    {
        image: "wonjin.jpg",
        name: "ウォンジン",
        group: "CRAVITY"
    },

    {
        image: "wonyoung.jpg",
        name: "ウォニョン",
        group: "IVE"
    },

    {
        image: "woobin.jpg",
        name: "ウビン",
        group: "CRAVITY"
    },

    {
        image: "xuanyi.jpg",
        name: "ソニ",
        group: "WJSN"
    },

    {
        image: "yeonjung.jpg",
        name: "ヨンジョン",
        group: "WJSN"
    },

    {
        image: "yeoreum.jpg",
        name: "ヨルム",
        group: "WJSN"
    },

    {
        image: "yonghoon.jpg",
        name: "ヨンフン",
        group: "IDID"
    },

    {
        image: "yoochan.jpg",
        name: "ユチャン",
        group: "IDID"
    },

    {
        image: "youngmin.jpg",
        name: "ヨンミン",
        group: "BOYFRIEND"
    },

    {
        image: "yujin.jpeg",
        name: "ユジン",
        group: "IVE"
    }


];








// ==================================================
// 設定
// ==================================================

const FIRST_GROUP_SIZE = 8;
const GROUP_SIZE = 8;
const SELECT_COUNT = 5;
const FINAL_COUNT = 9;
const REVIVAL_COUNT = 9;


// ==================================================
// ゲーム状態
// ==================================================

let roundNumber = 1;

// 現在生き残っているメンバー
let O = [];

// 現在のラウンドでまだ戦っていないメンバー
let roundPool = [];

// 現在表示中のカード
let currentBattle = [];

// 現在選択しているカード
let selectedCards = [];

// 現在のラウンドで脱落したカード
let currentRoundLosers = [];

// 直前のラウンドで脱落したカード
let previousRoundLosers = [];
let revivalCandidates = [];

// 第1回戦のグループ番号
let firstGroupNumber = 0;


// ==================================================
// HTML
// ==================================================

const cardContainer =
    document.getElementById("cardContainer");

const confirmButton =
    document.getElementById("confirmButton");

const roundText =
    document.getElementById("roundText");

const instructionText =
    document.getElementById("instructionText");

const resultSection =
    document.getElementById("resultSection");

const finalContainer =
    document.getElementById("finalContainer");

const restartButton =
    document.getElementById("restartButton");
    const saveImageButton =
    document.getElementById("saveImageButton");

const shareXButton =
    document.getElementById("shareXButton");


// ==================================================
// シャッフル
// ==================================================


// ==================================================
// 重複カードを削除
// ==================================================
//
// image（画像ファイル名）を
// そのアイドルを識別するものとして使います。
//
// 同じ画像ファイルのカードが2枚以上あった場合、
// 最初の1枚だけ残して、それ以降は削除します。
//
// ==================================================

function removeDuplicates(array) {

    const seen = new Set();

    return array.filter(idol => {

        if (seen.has(idol.image)) {

            return false;

        }

        seen.add(idol.image);

        return true;

    });

}


// ==================================================
// シャッフル
// ==================================================

function shuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [result[i], result[j]] =
            [result[j], result[i]];

    }

    return result;

}


// ==================================================
// ゲーム開始
// ==================================================

function startGame(revivalCandidates = []) {

    roundNumber = 1;

    O = [];

    roundPool = [];

    currentBattle = [];

    selectedCards = [];

    currentRoundLosers = [];

    previousRoundLosers = [];

    firstGroupNumber = 0;

    resultSection.classList.add("hidden");

    confirmButton.style.display = "block";

    startFirstRound();

}


// ==================================================
// ゲーム開始
// ==================================================

function startGame() {

    roundNumber = 1;

    O = [];

    roundPool = [];

    currentBattle = [];

    selectedCards = [];

    currentRoundLosers = [];

    previousRoundLosers = [];

    firstGroupNumber = 0;

    resultSection.classList.add("hidden");

    confirmButton.style.display = "block";

    startFirstRound();
}


// ==================================================
// 第1回戦
// ==================================================

function startFirstRound() {

    const start =
        firstGroupNumber * FIRST_GROUP_SIZE;

    const end =
        start + FIRST_GROUP_SIZE;

    currentBattle =
        idols.slice(start, end);

    selectedCards = [];

    roundText.textContent =
        `第1回戦　${firstGroupNumber + 1}組目 / 8組`;

    instructionText.textContent =
        "この8人の中から、好きな人数を選んでください";

    displayCards();
}


// ==================================================
// カード表示
// ==================================================

function displayCards() {

    cardContainer.innerHTML = "";

    currentBattle.forEach(idol => {

        const card =
            createCard(idol);

        cardContainer.appendChild(card);

    });
}


// ==================================================
// カード作成
// ==================================================

function createCard(idol) {

    const card =
        document.createElement("div");

    card.classList.add("idol-card");

    card.innerHTML = `
        <img
            src="images/${idol.image}"
            alt="${idol.name}"
        >

        <div class="idol-info">

            <p class="idol-name">
                ${idol.name}
            </p>

            <p class="group-name">
                ${idol.group}
            </p>

        </div>
    `;

    card.addEventListener("click", () => {

        toggleSelection(idol, card);

    });

    return card;
}


// ==================================================
// カード選択
// ==================================================

function toggleSelection(idol, card) {

    const index =
        selectedCards.indexOf(idol);


    // 選択解除
    if (index !== -1) {

        selectedCards.splice(index, 1);

        card.classList.remove("selected");

        return;
    }


    // 第1回戦は好きな人数
    if (roundNumber === 1) {

        selectedCards.push(idol);

        card.classList.add("selected");

        return;
    }


    // 第2回戦以降は5人まで
    if (selectedCards.length >= SELECT_COUNT) {

        alert("5人まで選択できます。");

        return;
    }


    selectedCards.push(idol);

    card.classList.add("selected");
}


// ==================================================
// 「このメンバーで決定」
// ==================================================

confirmButton.addEventListener("click", function () {

    // ------------------------------------------
    // 敗者復活戦
    // ------------------------------------------

    if (roundText.textContent === "敗者復活戦") {

        confirmRevival();

        return;
    }


    // ------------------------------------------
    // 通常の選抜
    // ------------------------------------------

    if (selectedCards.length === 0) {

        alert("少なくとも1人選んでください。");

        return;
    }


    // 第1回戦
    if (roundNumber === 1) {

        confirmFirstRound();

        return;
    }


    // 第2回戦以降
    confirmNormalBattle();

});


// ==================================================
// 第1回戦の決定
// ==================================================

function confirmFirstRound() {

    // 選ばれなかった人
    const losers =
        currentBattle.filter(
            idol =>
                !selectedCards.includes(idol)
        );


    // 選ばれた人をOへ
    O.push(...selectedCards);


    // 第1回戦の落選者は
    // 敗者復活候補にはしない


    firstGroupNumber++;


    // 次の8人
    if (firstGroupNumber < 8) {

        startFirstRound();

        return;
    }


// ------------------------------------------
// 第1回戦終了
// ------------------------------------------

// 9人ちょうど
if (O.length === FINAL_COUNT) {

    showFinalResult(O);

    return;
}


// 8人だけ残った場合
// → 特例で敗者復活戦
if (O.length === 8) {

    startRevival();

    return;
}


// 9人より多い場合
// → 第2回戦へ
if (O.length > FINAL_COUNT) {

    roundNumber = 2;

    startNormalRound();

    return;
}


// 8人未満の場合
// → 現在のルールでは終了
showFinalResult(O);

return;


    // 第2回戦へ
    roundNumber = 2;

    startNormalRound();
}


// ==================================================
// 第2回戦以降開始
// ==================================================

function startNormalRound() {

    // 今回のラウンドのカードを
    // ランダムな順番にする
    roundPool =
        shuffle(O);


    // Oを空にして、
    // 選ばれたカードだけ戻していく
    O = [];

    currentRoundLosers = [];

    nextNormalBattle();
}


// ==================================================
// 次の8人を表示
// ==================================================

function nextNormalBattle() {

    // まだカードが残っている
    if (roundPool.length > 0) {

        currentBattle =
            roundPool.splice(
                0,
                GROUP_SIZE
            );


        // ------------------------------------------
        // 1～5人
        // → 不戦勝
        // ------------------------------------------

        if (currentBattle.length <= 5) {

            O.push(...currentBattle);

            nextNormalBattle();

            return;
        }


        // ------------------------------------------
        // 6～7人
        // → 5人選択
        // ------------------------------------------

        selectedCards = [];

        roundText.textContent =
            `第${roundNumber}回戦`;

        instructionText.textContent =
            `${currentBattle.length}人の中から5人を選んでください`;

        displayCards();

        return;
    }


    // 全部終わった
    finishNormalRound();
}


// ==================================================
// 第2回戦以降の決定
// ==================================================

function confirmNormalBattle() {

    // 5人選ばれているか
    if (selectedCards.length !== 5) {

        alert("5人ちょうど選んでください。");

        return;
    }


    // 選ばれなかった人
    const losers =
        currentBattle.filter(
            idol =>
                !selectedCards.includes(idol)
        );


    // 選ばれた5人
    O.push(...selectedCards);


    // 今回の落選者
    currentRoundLosers.push(...losers);


    // 次のグループ
    nextNormalBattle();
}


// ==================================================
// 通常ラウンド終了
// ==================================================

function finishNormalRound() {

    // 今回のラウンドで落選した人を
    // 次回の敗者復活候補として保存
   // 今回のラウンドの落選者を
// 敗者復活候補に追加
//
// 「直近で脱落した人」を先頭にするため、
// 今回の落選者を逆順で前に追加する

previousRoundLosers =
    [...currentRoundLosers];

revivalCandidates =
    [
        ...currentRoundLosers.reverse(),
        ...revivalCandidates
    ];


    // ------------------------------------------
    // 9人
    // ------------------------------------------

    if (O.length === FINAL_COUNT) {

        showFinalResult(O);

        return;
    }


    // ------------------------------------------
    // 9人未満
    // → 敗者復活
    // ------------------------------------------

    if (O.length < FINAL_COUNT) {

        startRevival();

        return;
    }


    // ------------------------------------------
    // 9人より多い
    // → 敗者復活なし
    // ------------------------------------------

    roundNumber++;

    startNormalRound();
}


// ==================================================
// 敗者復活戦
// ==================================================

function startRevival() {

    const needed =
        FINAL_COUNT - O.length;


    let candidates;


    // ==========================================
    // 第1回戦で8人になった場合
    // ==========================================
    //
    // 特例として、
    // 第1回戦で脱落した人を含む
    // 全脱落者からランダムに9枚選ぶ
    //

    if (roundNumber === 1) {

        candidates =
            shuffle(
                idols.filter(
                    idol => !O.includes(idol)
                )
            );

    }

    // ==========================================
    // 第2回戦以降
    // ==========================================
    //
    // 直近のラウンドの落選者を最優先。
    // 9枚に足りなければ、そのさらに前の
    // ラウンドの落選者から補充する。
    //
    // 第1回戦の落選者はここには入れない。
    //

    else {

        candidates =
            removeDuplicates(
                revivalCandidates
            );

    }


    // ==========================================
    // 必ず9枚用意
    // ==========================================

    const revivalCards =
        candidates.slice(
            0,
            REVIVAL_COUNT
        );


    // ==========================================
    // 9枚用意できなかった場合
    // ==========================================

    if (
        revivalCards.length <
        REVIVAL_COUNT
    ) {

        alert(
            `敗者復活候補を9枚用意できません。現在${revivalCards.length}枚です。`
        );

        return;
    }


    // ==========================================
    // 敗者復活戦を表示
    // ==========================================

    currentBattle =
        revivalCards;

    selectedCards = [];


    roundText.textContent =
        "敗者復活戦";

    instructionText.textContent =
        `敗者復活候補9人の中から${needed}人を選んでください`;


    cardContainer.innerHTML = "";


    currentBattle.forEach(idol => {

        const card =
            createCard(idol);

        cardContainer.appendChild(card);

    });

}

// ==================================================
// 敗者復活の決定
// ==================================================

function confirmRevival() {

    const needed =
        FINAL_COUNT - O.length;


    if (selectedCards.length !== needed) {

        alert(
            `${needed}人ちょうど選んでください。`
        );

        return;
    }


    O.push(...selectedCards);

    showFinalResult(O);
}


// ==================================================
// 最終結果
// ==================================================

function showFinalResult(finalMembers) {

    cardContainer.innerHTML = "";

    confirmButton.style.display = "none";

    roundText.textContent =
        "最終結果";

    instructionText.textContent =
        "最終選抜メンバー9人が決定しました！";

    finalContainer.innerHTML = "";


    finalMembers
        .slice(0, FINAL_COUNT)
        .forEach(idol => {

            const card =
                createFinalCard(idol);

            finalContainer.appendChild(card);

        });


    resultSection.classList.remove("hidden");
}


// ==================================================
// 最終結果カード
// ==================================================

function createFinalCard(idol) {

    const card =
        document.createElement("div");

    card.classList.add("idol-card");

    card.innerHTML = `
        <img
            src="images/${idol.image}"
            alt="${idol.name}"
        >

        <div class="idol-info">

            <p class="idol-name">
                ${idol.name}
            </p>

            <p class="group-name">
                ${idol.group}
            </p>

        </div>
    `;

    return card;
}


// ==================================================
// やり直す
// ==================================================

restartButton.addEventListener("click", function () {

    startGame();

});


// ==================================================
// ゲーム開始
// ==================================================

startGame();

// ==================================================
// 最終9人の3×3画像を作る
// ==================================================

async function createFinalImage(finalMembers) {

    const canvas =
        document.createElement("canvas");

    // 正方形 1080 × 1080
    canvas.width = 1080;
    canvas.height = 1080;


    const ctx =
        canvas.getContext("2d");


    // 背景
    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // 3×3
    const gap = 12;

    const cellSize =
        (1080 - gap * 2) / 3;


    // 9人
    for (
        let i = 0;
        i < finalMembers.length &&
        i < 9;
        i++
    ) {

        const idol =
            finalMembers[i];


        const img =
            await loadImage(
                `images/${idol.image}`
            );


        const row =
            Math.floor(i / 3);

        const col =
            i % 3;


        const x =
            col *
            (cellSize + gap);

        const y =
            row *
            (cellSize + gap);


        // ------------------------------------------
        // 画像を正方形いっぱいに表示
        // ------------------------------------------

        drawCoverImage(
            ctx,
            img,
            x,
            y,
            cellSize,
            cellSize
        );


        // ------------------------------------------
        // 下部に名前・グループ
        // ------------------------------------------

        const textHeight = 65;


        ctx.fillStyle =
            "rgba(0, 0, 0, 0.65)";

        ctx.fillRect(
            x,
            y + cellSize - textHeight,
            cellSize,
            textHeight
        );


        // 名前
        ctx.fillStyle = "#ffffff";

        ctx.font =
            "bold 24px Arial, sans-serif";

        ctx.textAlign = "center";

        ctx.textBaseline = "middle";

        ctx.fillText(
            idol.name,
            x + cellSize / 2,
            y + cellSize - 40
        );


        // グループ名
        ctx.font =
            "16px Arial, sans-serif";

        ctx.fillText(
            idol.group,
            x + cellSize / 2,
            y + cellSize - 18
        );

    }


    return canvas;
}


// ==================================================
// 画像を読み込む
// ==================================================

function loadImage(src) {

    return new Promise((resolve, reject) => {

        const img =
            new Image();

        img.onload = () => {

            resolve(img);

        };

        img.onerror = () => {

            reject(
                new Error(
                    `画像を読み込めませんでした: ${src}`
                )
            );

        };

        img.src = src;

    });
}


// ==================================================
// 画像を「切り抜いて正方形」にする
// ==================================================

function drawCoverImage(
    ctx,
    img,
    x,
    y,
    width,
    height
) {

    const imageRatio =
        img.width / img.height;

    const targetRatio =
        width / height;


    let sourceWidth =
        img.width;

    let sourceHeight =
        img.height;

    let sourceX = 0;

    let sourceY = 0;


    // 横長画像
    if (imageRatio > targetRatio) {

        sourceWidth =
            img.height *
            targetRatio;

        sourceX =
            (img.width - sourceWidth) / 2;

    }


    // 縦長画像
    else if (imageRatio < targetRatio) {

        sourceHeight =
            img.width /
            targetRatio;

        sourceY =
            (img.height - sourceHeight) / 2;

    }


    ctx.drawImage(
        img,

        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,

        x,
        y,
        width,
        height
    );
}


// ==================================================
// PNGとして保存
// ==================================================

async function saveFinalImage() {

    try {

        const finalMembers =
            getFinalMembers();


        const canvas =
            await createFinalImage(
                finalMembers
            );


        const link =
            document.createElement("a");


        link.download =
            "final-9-members.png";


        link.href =
            canvas.toDataURL("image/png");


        link.click();

    }

    catch (error) {

        console.error(error);

        alert(
            "画像の作成に失敗しました。"
        );

    }
}


// ==================================================
// 最終9人を取得
// ==================================================

function getFinalMembers() {

    return Array.from(
        finalContainer.querySelectorAll(".idol-card")
    );
}


// ==================================================
// Xシェア
// ==================================================

async function shareToX() {

    try {

        // 最終メンバーを
        // Oから取得
        const finalMembers =
            O.slice(
                0,
                FINAL_COUNT
            );


        // 3×3画像を生成
        const canvas =
            await createFinalImage(
                finalMembers
            );


        // PNG
        const blob =
            await new Promise(resolve => {

                canvas.toBlob(
                    resolve,
                    "image/png"
                );

            });


        if (!blob) {

            throw new Error(
                "画像を作成できませんでした"
            );

        }


        const file =
            new File(
                [blob],
                "final-9-members.png",
                {
                    type: "image/png"
                }
            );


        // 公開したサイトのURL
        const shareUrl =
            window.location.href;


        const shareText =
            "私が選んだ最終9人！";


        // ==========================================
        // スマホなどの共有機能に対応している場合
        // ==========================================

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
                files: [file]
            })
        ) {

            await navigator.share({

                title:
                    "最終選抜メンバー",

                text:
                    shareText,

                url:
                    shareUrl,

                files:
                    [file]

            });

            return;
        }


        // ==========================================
        // ファイル共有に対応していない場合
        // ==========================================

        // まず画像を保存
        const link =
            document.createElement("a");

        link.download =
            "final-9-members.png";

        link.href =
            URL.createObjectURL(blob);

        link.click();


        // Xの投稿画面
        const xUrl =
            "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent(
                shareText
            ) +
            "&url=" +
            encodeURIComponent(
                shareUrl
            );


        window.open(
            xUrl,
            "_blank"
        );


        alert(
            "画像を保存しました。Xの投稿画面で保存した画像を添付してください。"
        );

    }

    catch (error) {

        console.error(error);

        // ユーザーが共有画面を閉じた場合など
        if (
            error.name ===
            "AbortError"
        ) {

            return;
        }


        alert(
            "Xへの共有に失敗しました。"
        );

    }
}


// ==================================================
// 保存ボタン
// ==================================================

saveImageButton.addEventListener(
    "click",
    saveFinalImage
);


// ==================================================
// Xボタン
// ==================================================

shareXButton.addEventListener(
    "click",
    shareToX
);