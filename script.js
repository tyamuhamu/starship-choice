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

// 敗者復活候補
//
// 第2回戦以降では、
// 「直近で脱落した人」を先頭にする。
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

const shareXButton =
    document.getElementById("shareXButton");



// ==================================================
// 重複カードを削除
// ==================================================
//
// imageをアイドルの識別子として使用。
// 同じ画像ファイルを持つカードは1枚だけ残す。
// ==================================================

function removeDuplicates(array) {

    const seen = new Set();

    return array.filter(idol => {

        if (!idol || !idol.image) {
            return false;
        }

        if (seen.has(idol.image)) {
            return false;
        }

        seen.add(idol.image);

        return true;

    });

}



// ==================================================
// ゲームで使用するカード
// ==================================================
//
// 最初から重複を除いておく。
// これにより、第1回戦から同じカードが
// 同時に2枚表示されることを防ぐ。
// ==================================================

const uniqueIdols =
    removeDuplicates(idols);



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

function startGame() {

    roundNumber = 1;

    O = [];

    roundPool = [];

    currentBattle = [];

    selectedCards = [];

    currentRoundLosers = [];

    revivalCandidates = [];

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

    // 重複を除いたカードから8枚
    currentBattle =
        removeDuplicates(
            uniqueIdols.slice(start, end)
        );

    selectedCards = [];


    // 第1回戦の総組数
    const totalGroups =
        Math.ceil(
            uniqueIdols.length /
            FIRST_GROUP_SIZE
        );


    roundText.textContent =
        `第1回戦　${firstGroupNumber + 1}組目 / ${totalGroups}組`;

    instructionText.textContent =
        "この8人の中から、好きな人数を選んでください";


    displayCards();

}



// ==================================================
// カード表示
// ==================================================

function displayCards() {

    cardContainer.innerHTML = "";


    // 念のため表示前にも重複を除去
    currentBattle =
        removeDuplicates(currentBattle);


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


    const img =
        document.createElement("img");

    img.src =
        `images/${idol.image}`;

    img.alt =
        idol.name;


    const info =
        document.createElement("div");

    info.classList.add("idol-info");


    const name =
        document.createElement("p");

    name.classList.add("idol-name");

    name.textContent =
        idol.name;


    const group =
        document.createElement("p");

    group.classList.add("group-name");

    group.textContent =
        idol.group;


    info.appendChild(name);
    info.appendChild(group);

    card.appendChild(img);
    card.appendChild(info);


    card.addEventListener(
        "click",
        () => {

            toggleSelection(
                idol,
                card
            );

        }
    );


    return card;

}



// ==================================================
// カード選択
// ==================================================

function toggleSelection(idol, card) {

    const index =
        selectedCards.indexOf(idol);


    // ------------------------------------------
    // 選択解除
    // ------------------------------------------

    if (index !== -1) {

        selectedCards.splice(
            index,
            1
        );

        card.classList.remove(
            "selected"
        );

        return;

    }


    // ------------------------------------------
    // 第1回戦
    // ------------------------------------------

    if (roundNumber === 1) {

        selectedCards.push(idol);

        card.classList.add(
            "selected"
        );

        return;

    }


    // ------------------------------------------
    // 第2回戦以降
    // ------------------------------------------

    if (
        selectedCards.length >=
        SELECT_COUNT
    ) {

        alert(
            "5人まで選択できます。"
        );

        return;

    }


    selectedCards.push(idol);

    card.classList.add(
        "selected"
    );

}



// ==================================================
// 「このメンバーで決定」
// ==================================================

confirmButton.addEventListener(
    "click",
    function () {

        // ------------------------------------------
        // 敗者復活戦
        // ------------------------------------------

        if (
            roundText.textContent ===
            "敗者復活戦"
        ) {

            confirmRevival();

            return;

        }


        // ------------------------------------------
        // 通常の選抜
        // ------------------------------------------

        if (
            selectedCards.length === 0
        ) {

            alert(
                "少なくとも1人選んでください。"
            );

            return;

        }


        // ------------------------------------------
        // 第1回戦
        // ------------------------------------------

        if (
            roundNumber === 1
        ) {

            confirmFirstRound();

            return;

        }


        // ------------------------------------------
        // 第2回戦以降
        // ------------------------------------------

        confirmNormalBattle();

    }
);



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
    O.push(
        ...selectedCards
    );


    // 念のためO自体も重複除去
    O =
        removeDuplicates(O);


    // ------------------------------------------
    // 次の8人へ
    // ------------------------------------------

    firstGroupNumber++;


    const totalGroups =
        Math.ceil(
            uniqueIdols.length /
            FIRST_GROUP_SIZE
        );


    if (
        firstGroupNumber <
        totalGroups
    ) {

        startFirstRound();

        return;

    }


    // ==========================================
    // 第1回戦終了
    // ==========================================


    // ------------------------------------------
    // 9人ちょうど
    // ------------------------------------------

    if (
        O.length ===
        FINAL_COUNT
    ) {

        showFinalResult(O);

        return;

    }


    // ------------------------------------------
    // 9人未満
    // ------------------------------------------
    //
    // 第1回戦だけは、
    // 8人だった場合も敗者復活を行う。
    //
    // また、8人未満でも9人未満なので
    // 敗者復活を行う。
    // ------------------------------------------

    if (
        O.length <
        FINAL_COUNT
    ) {

        startRevival();

        return;

    }


    // ------------------------------------------
    // 9人より多い
    // → 第2回戦
    // ------------------------------------------

    roundNumber = 2;

    startNormalRound();

}



// ==================================================
// 第2回戦以降開始
// ==================================================

function startNormalRound() {

    // 現在のOを重複除去
    O =
        removeDuplicates(O);


    // ランダムな順番にする
    roundPool =
        shuffle(O);


    // Oを空にして、
    // 選ばれたカードだけ戻す
    O = [];


    currentRoundLosers = [];


    nextNormalBattle();

}



// ==================================================
// 次の8人を表示
// ==================================================

function nextNormalBattle() {

    // ------------------------------------------
    // まだカードが残っている
    // ------------------------------------------

    if (
        roundPool.length > 0
    ) {

        currentBattle =
            removeDuplicates(
                roundPool.splice(
                    0,
                    GROUP_SIZE
                )
            );


        // ------------------------------------------
        // 1～5人
        // → 不戦勝
        // ------------------------------------------

        if (
            currentBattle.length <=
            SELECT_COUNT
        ) {

            O.push(
                ...currentBattle
            );

            O =
                removeDuplicates(O);

            nextNormalBattle();

            return;

        }


        // ------------------------------------------
        // 6～8人
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


    // ------------------------------------------
    // 全部終わった
    // ------------------------------------------

    finishNormalRound();

}



// ==================================================
// 第2回戦以降の決定
// ==================================================

function confirmNormalBattle() {

    // ------------------------------------------
    // 5人選択
    // ------------------------------------------

    if (
        selectedCards.length !==
        SELECT_COUNT
    ) {

        alert(
            "5人ちょうど選んでください。"
        );

        return;

    }


    // 選ばれなかった人
    const losers =
        currentBattle.filter(
            idol =>
                !selectedCards.includes(idol)
        );


    // 選ばれた5人
    O.push(
        ...selectedCards
    );


    // 今回の落選者
    currentRoundLosers.push(
        ...losers
    );


    // Oの重複防止
    O =
        removeDuplicates(O);


    // 次のグループ
    nextNormalBattle();

}



// ==================================================
// 通常ラウンド終了
// ==================================================

function finishNormalRound() {

    // ------------------------------------------
    // 今回の落選者を
    // 敗者復活候補の先頭へ追加
    // ------------------------------------------
    //
    // reverse()を使わず、
    // 元の配列を壊さない。
    // ------------------------------------------

    const newestLosers =
        [
            ...currentRoundLosers
        ].reverse();


    revivalCandidates =
        [
            ...newestLosers,
            ...revivalCandidates
        ];


    // 敗者復活候補自体も重複除去
    revivalCandidates =
        removeDuplicates(
            revivalCandidates
        );


    // Oも重複除去
    O =
        removeDuplicates(O);


    // ------------------------------------------
    // 9人
    // ------------------------------------------

    if (
        O.length ===
        FINAL_COUNT
    ) {

        showFinalResult(O);

        return;

    }


    // ------------------------------------------
    // 9人未満
    // → 敗者復活
    // ------------------------------------------

    if (
        O.length <
        FINAL_COUNT
    ) {

        startRevival();

        return;

    }


    // ------------------------------------------
    // 9人より多い
    // → 次のラウンド
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


    let candidates = [];


    // ==========================================
    // 第1回戦終了後
    // ==========================================
    //
    // 第1回戦で8人しか残らなかった場合など、
    // 第1回戦の脱落者も候補にする特例。
    //
    // 「誰でもランダム」でOKというルール。
    // ==========================================

    if (
        roundNumber === 1
    ) {

        candidates =
            shuffle(
                uniqueIdols.filter(
                    idol =>
                        !O.includes(idol)
                )
            );

    }


    // ==========================================
    // 第2回戦以降
    // ==========================================
    //
    // 第1回戦の脱落者は候補にしない。
    //
    // 直近で脱落した順に候補を並べる。
    // ==========================================

    else {

        candidates =
            removeDuplicates(
                revivalCandidates
            ).filter(
                idol =>
                    !O.includes(idol)
            );

    }


    // ==========================================
    // 必ず9枚を候補として用意
    // ==========================================

    const revivalCards =
        candidates.slice(
            0,
            REVIVAL_COUNT
        );


    // ==========================================
    // 9枚用意できない場合
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
        removeDuplicates(
            revivalCards
        );

    selectedCards = [];


    roundText.textContent =
        "敗者復活戦";

    instructionText.textContent =
        `敗者復活候補9人の中から${needed}人を選んでください`;


    displayCards();

}



// ==================================================
// 敗者復活の決定
// ==================================================

function confirmRevival() {

    const needed =
        FINAL_COUNT - O.length;


    if (
        selectedCards.length !==
        needed
    ) {

        alert(
            `${needed}人ちょうど選んでください。`
        );

        return;

    }


    // 復活
    O.push(
        ...selectedCards
    );


    // 重複防止
    O =
        removeDuplicates(O);


    // ==========================================
    // 9人になったので終了
    // ==========================================

    if (
        O.length ===
        FINAL_COUNT
    ) {

        showFinalResult(O);

        return;

    }


    // 念のため
    // 9人にならなかった場合
    if (
        O.length <
        FINAL_COUNT
    ) {

        startRevival();

    }

}



// ==================================================
// 最終結果
// ==================================================

function showFinalResult(finalMembers) {

    // 最終メンバーも重複除去
    const uniqueFinalMembers =
        removeDuplicates(
            finalMembers
        );


    cardContainer.innerHTML = "";

    confirmButton.style.display =
        "none";


    roundText.textContent =
        "最終結果";


    instructionText.textContent =
        "最終選抜メンバー9人が決定しました！";


    finalContainer.innerHTML = "";


    uniqueFinalMembers
        .slice(
            0,
            FINAL_COUNT
        )
        .forEach(idol => {

            const card =
                createFinalCard(idol);

            finalContainer.appendChild(
                card
            );

        });


    resultSection.classList.remove(
        "hidden"
    );

}



// ==================================================
// 最終結果カード
// ==================================================

function createFinalCard(idol) {

    const card =
        document.createElement("div");

    card.classList.add(
        "idol-card"
    );


    const img =
        document.createElement("img");

    img.src =
        `images/${idol.image}`;

    img.alt =
        idol.name;


    const info =
        document.createElement("div");

    info.classList.add(
        "idol-info"
    );


    const name =
        document.createElement("p");

    name.classList.add(
        "idol-name"
    );

    name.textContent =
        idol.name;


    const group =
        document.createElement("p");

    group.classList.add(
        "group-name"
    );

    group.textContent =
        idol.group;


    info.appendChild(name);
    info.appendChild(group);

    card.appendChild(img);
    card.appendChild(info);


    return card;

}



// ==================================================
// やり直す
// ==================================================

restartButton.addEventListener(
    "click",
    function () {

        startGame();

    }
);



// ==================================================
// 最終9人の3×3画像を作る
// ==================================================

async function createFinalImage(
    finalMembers
) {

    const canvas =
        document.createElement(
            "canvas"
        );


    // 1080 × 1080
    canvas.width = 1080;
    canvas.height = 1080;


    const ctx =
        canvas.getContext("2d");


    // 背景
    ctx.fillStyle =
        "#ffffff";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // 3×3
    const gap = 12;

    const cellSize =
        (
            1080 -
            gap * 2
        ) / 3;


    // 最大9人
    for (
        let i = 0;
        i < finalMembers.length &&
        i < FINAL_COUNT;
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


        // 画像
        drawCoverImage(
            ctx,
            img,
            x,
            y,
            cellSize,
            cellSize
        );


        // ------------------------------------------
        // 名前・グループ用背景
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


        // ------------------------------------------
        // 名前
        // ------------------------------------------

        ctx.fillStyle =
            "#ffffff";


        ctx.font =
            "bold 24px Arial, sans-serif";


        ctx.textAlign =
            "center";


        ctx.textBaseline =
            "middle";


        ctx.fillText(
            idol.name,
            x + cellSize / 2,
            y + cellSize - 40
        );


        // ------------------------------------------
        // グループ名
        // ------------------------------------------

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

    return new Promise(
        (resolve, reject) => {

            const img =
                new Image();


            img.onload =
                () => {

                    resolve(img);

                };


            img.onerror =
                () => {

                    reject(
                        new Error(
                            `画像を読み込めませんでした: ${src}`
                        )
                    );

                };


            img.src = src;

        }
    );

}



// ==================================================
// 画像を正方形に切り抜く
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
        img.width /
        img.height;


    const targetRatio =
        width /
        height;


    let sourceWidth =
        img.width;


    let sourceHeight =
        img.height;


    let sourceX = 0;


    let sourceY = 0;


    // 横長
    if (
        imageRatio >
        targetRatio
    ) {

        sourceWidth =
            img.height *
            targetRatio;


        sourceX =
            (
                img.width -
                sourceWidth
            ) / 2;

    }


    // 縦長
    else if (
        imageRatio <
        targetRatio
    ) {

        sourceHeight =
            img.width /
            targetRatio;


        sourceY =
            (
                img.height -
                sourceHeight
            ) / 2;

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
// 共有
// ==================================================
//
// 「画像保存」専用ボタンは廃止。
// HTMLの「共有」ボタンからこの処理を呼び出す。
//
// 対応しているスマホ:
// → 画像＋URL＋文章を共有画面へ
//
// 対応していない環境:
// → 画像を保存
// → Xの投稿画面を開く
// ==================================================

async function shareToX() {

    try {

        // 最終9人
        const finalMembers =
            removeDuplicates(O)
                .slice(
                    0,
                    FINAL_COUNT
                );


        if (
            finalMembers.length !==
            FINAL_COUNT
        ) {

            alert(
                "最終9人が決定していません。"
            );

            return;

        }


        // 3×3画像を生成
        const canvas =
            await createFinalImage(
                finalMembers
            );


        // PNG
        const blob =
            await new Promise(
                resolve => {

                    canvas.toBlob(
                        resolve,
                        "image/png"
                    );

                }
            );


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


        // 公開サイトのURL
        const shareUrl =
            window.location.href;


        const shareText =
            "＃私の好きなスタシ顔９選";


        // ==========================================
        // スマホなどの共有機能
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
        // ファイル共有非対応の場合
        // ==========================================

        const downloadUrl =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            downloadUrl;


        link.download =
            "final-9-members.png";


        document.body.appendChild(
            link
        );


        link.click();


        document.body.removeChild(
            link
        );


        setTimeout(
            () => {

                URL.revokeObjectURL(
                    downloadUrl
                );

            },
            1000
        );


        // X投稿画面
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


        // 共有画面を閉じただけなら
        // エラー表示しない
        if (
            error.name ===
            "AbortError"
        ) {

            return;

        }


        alert(
            "共有に失敗しました。"
        );

    }

}



// ==================================================
// 「共有」ボタン
// ==================================================

if (shareXButton) {

    shareXButton.addEventListener(
        "click",
        shareToX
    );

}



// ==================================================
// ゲーム開始
// ==================================================

startGame();