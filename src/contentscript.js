/* Required CSS:
.hiddenFurigana {
    color: transparent;
}

ruby:hover .hiddenFurigana {
    color: inherit;
}
*/
var REQUIRED_CSS = ".hiddenFurigana {" +
    "    color: transparent !important;" +
    "}" +
    "ruby:hover .hiddenFurigana {" +
    "    color: inherit !important;" +
    "}";

var DEBUG = false;

var KKLC_KANJI = "日一ニ三十四五六七八九丸円〇人百千万口田目川月明曜火水木金土本東大小中生山出入下上止正足定手用無不回言舌話活行心耳又取身休体信付受以立部倍成代王玉宝国白皇全書事自貝見力刀切刃分公別長男女子好安案字学父文交校母毎海者工式弐武糸前後午牛年件条化花北比背車気汽性畑青麦素毒先洗元光去法走当思早草朝潮形発廃音意作昨雨電頁首道通乳豆頭予矛預句旬勺的約勿物方防面画両岡満顔産同向尚高圧地池他集進込斤近辺最皿血温湿爪瓜巾布市吊泉原源線綿絹錦願内肉猪豚家吾我語伝転芸会合今令念印命亡米粒和私広細林森松竹都京政府戸所至致屋室古居局故胡湖固箇個且組夕外多汐名天未末味来新親欠次席度渡限銀根良郎廊食飲官館宿犬太器凶区図番号品楽薬周週調束整数類示禁礼社申神員質党堂常賞償掌覚悟感央映決快英並平半馬尺尽駅鳥島角虫触解独店占点士商買売続読共供洪昔冬寒春夏秋主住駐注志誌仕任支反坂阪飯返雑乱寸寺時持特待得侍詩即節筋等均季委穴空友有左右石若苦在存干刊汗竿利害益溢割憲羽翌習弓引強弱風己記紀改起姓由油井囲丼丁寧町灯庁貯易賜場湯門間閉開関問聞訪送券包巻圏勝戦単簡過骨昼夜液戒幾畿磯機械飛氏民紙低抵邸底巨臣基期毛尾育羊洋魚鮮蘇詳祥美業実養様企曲典興輿竜滝籠辰農濃豊吉詰結投役没設段殺刹刈絵給巴色声眉里理埋野黒墨童量重動働労協種亜悪要価必証歪否処拠計針総窓矢知医短失鉄夫朱株族旅遊施旋旗放激牧位泣笑専恵連軍運蓮隊呈程聖丑紐革靴鞄皮破彼波果課巣菓茶世葉棄緑録剝縁介界浮将奨状病症痛憶臆億視規則側測考老孝厚教完院奈宗祭際察祈祖助仲忠沖保呆守団対村才財材沈枕丈杖偉緯衛韓違抱砲泡丹舟船舶般搬盤歯冷齢少砂歩渉省相想称弥互務柔軟軌軒軸較庫蔵倉創告造衣依袋褒裏表現著制製初裸難准準備死葬列烈裂例刑型研厄危範怨苑宛碗腕却脚犯狂獄非排俳罪罰伴判評批帥師座坐卒率傘笠星汁斗料科然燃黙獣猟漁狩猛煙焼暁旧児亦赤変蛮恋愛憂優栗票標漂遷各客路格絡略閣落南西酉酒洒配酸猶尊遵導敬警驚散敢厳仏払拡可何苛荷河阿司伺詞飼冊嗣覗歌唄負敗責積債漬紡績具真直植殖値置県州洲接継断応床麻歴暦臨園遠与写移卸御複腹復往柱征従徒縦延伸紳縮誕廷庭艇展殿異翼累塁吏使史更便硬能態熊罷羅雲曇雪雷零震振久賑丘兵岳浜舎再虎寅演黄横構講購溝仮片版板販義議儀犠牲旨指揮輝刺策差着看到倒論倫輪輸諭愉癒台治冶療僚瞭寮始終了承蒸舞隣瞬夢枝技伎岐峠阜急争情清晴精請静浄算答符博縛簿薄采菜採彩杉街術述余除徐叙斜途塗漆仙垂乗兼剰睡眠郵錘華侵浸寝掃婦帰戻涙射謝討訂打撃拭試検験険倹剣谷欲浴容溶俗裕寛甘紺紅攻功巧朽枯汚升弁昇登澄充銃統流硫盲忘忙荒慌望希稀括拘拾捨孤弧弾禅系係孫懸偏遍編篇普譜職織識殉退眼智仁忍認求救球駐純鈍召招沼紹詔勅昭照超越趣赴訃朴掛摘滴嫡適敵授援媛緩暖観勧権歓鶴確慢漫卯抑仰迎柳卵疎速遅辻迅加減滅威嚇或惑域収納献貢貪貰貧賃貸貨資賛替潜貿留溜賀架染梨傑貴潰遺遣追迫泊伯拍弔沸煮費弟第剃兄只税鋭説脱閲祝況悦克競姉妹珠殊序秩迭喜善繕膳憾恨惜措借錯曽増層憎僧贈賄賂賦賊帯滞渋摂為偽参惨呂侶宮営蛍栄誉挙拳桜妥咲朕茎径怪軽経斉斎済剤剖陪培賠貼粘衡換喚絶免逸勉晩許象像彫景影撮就涼鯨隔融肖消硝梢削宵宴郷饗響城誠盛旺盆蓋盗盟塩傷揚暢陽陰隠穏穂稲愁裁載栽赦跡踪痕蹴踊踏躍濯奇寄騎椅崎埼岬模膜漠幕墓募暮慕添恭暴爆沿礎疑凝擬倣似俵俺庵僕撲叩伐閥闘闇閑脈派缶揺謡遥陶陳陣陥隆降峰逢縫蜂蜜密秘欧枢殴駆馳騒旭旦但担亘恒垣宣喧嘩唾壷坪畔衆伊君群郡那邦郊効絞搾紋菊帝締諦享郭亭停昆混皆楷諧階陛陸睦勢熱熟塾陵菱俊唆筈箸暑署曙賭諸儲緒翁婆姿恣妄萎妻凄章彰障辛宰辣辞壁璧癖避幸服報執摯達朗浪呉娯誤富副幅福祉禍渦鍋蘭欄潤淵滑稽肩脅肯双江湾港選択沢訳釈敷傲贅審藩翻翔査租粗阻狙宜畳甲乙丙柄押抽捜届宙笛袖襟衿裾据握揃撫託宅詫宇芋寿鋳銘鏡境環還盾循巡這逓息憩鼻孔臭嗅奥尖突窒窃衝契喫潔侮梅悔敏繁繋茂橋矯稿縞箋残桟銭践浅洩壮荘装冥暗韻損捕挿補浦哺舗掴捉促筆津律逮建健康庸粛繍唐糖粧糧粉紛糾粋砕枠酔醒酬酷凡凧帆汎恐怖築尋訊諮抗航坑拝耕耗崇灰炭岸岩崩嵐崖催焦礁奮奪隻獲穫護譲嬢醸壌壊懐徳聴恥羞爵侯喉候修悠是提堤題匙冒昌唱晶帽棟凍氷永泳詠札枚杯析折挫捻誓逝哲斬漸暫斥訴訟究窮極函探深慄惧慎鎮塡婚囚困梱因姻咽恩菌漢嘆勤謹僅索牽牢啓庶遮燕雀劣抄秒妙沙汰煎炒炊焚薪乃之此其乏芝及扱級吸吹呼吐叶叱叫吟含琴迷謎逆遡塑勲薫芳香秀誘拐透携雄雌些柴紫髪髭詐欺棋碁甚勘堪匹匠匿諾乞迄乾幹操燥繰藻噴墳憤牙芽雅邪既概慨苗描猫萌兆眺逃桃跳挑拙屈掘堀封筒管棺轄洞窟淫妊娠唇辱襲伏吠噛班斑輩悲忽惚猿哀衰衷喪忌卓悼貞偵覇覆履属嘱偶隅隙遇愚曹遭槽妨坊傍於房扇扉雇顧屑糞尿泌尻炉窯釜爺窪佳涯暇霞雰霧露霜箱籍貫慣頂戴項頃傾頑頒頓顕領頻捗順馴訓須額頼瀬峡狭挟頰顎煩串患疾痴疫痢痘瘍癌痩疲被披抜控扶抹拓拷楼壇塔搭寡賓飾飽餓飢机冗冠離胸悩脳臓胃炎談淡災肝肺胆腺胞腸胎腰肘膝股肢胴脇脂詣肪肌膚慮虐虞劇虚虜勇湧戯繊緻嘘噂樽距拒嬉鼓樹膨脹張帳腫肥把誇覧監鑑艦濫藍賢腎堅緊勃励栃茨羨歳戚叔淑寂督奴努怒隷款殻穀臼毀廉鎌嫌謙遜亀練錬鍛鉱銅鉛銑鋼剛綱網縄鉢鎖絆鍵釘錮錠綻鈴鐘瞳憧憬卑碑痺鬼塊醜魂魅魔畏刷擦摩磨凹凸奉奏泰俸棒捧耐霊需濡儒端壱尼泥漏氾彙某謀媒尉慰酪酵醤酢酎酌釣畜蓄玄眩呟囁喋喩鬱弦舷舵幻幽幼稚維推堆椎脊雛誰唯鳴亥刻劾核骸咳該診珍瓦併瓶屏塀餅餌呑沃妖呪艶慈滋磁擁腐芯蒔撒撤徹微徴懲殆后垢妃姫如茹婿娘嫁稼塚豪蒙墾懇貌逐遂墜堕随附髄怠惰佐玩弄嘲奔弊幣蔽朋棚柵桁栓詮塞梗柿藤騰謄麺拉晃幌厘畝匁匂勾挨拶曖昧瑠璃嫉妬鹿塵麓麗薦慶兜睨鼠溺潟濁渇褐葛喝謁掲戌尤駄駒篤罵蔑罠烏鴨鳩鶏渓鷹鷲璽爽綴桑蚕蛋蟹蚊巳蛇繭蝶虹";
var TRIVIAL_CHARS = "1234567890１２３４５６７８９０ー＝。「」、！？" +
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん" +
    "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ" +
    // TODO: add more
    "ぁぃぅぇぉァィゥェォヵヶっッ" +
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

function getKnownKanji(kklcLevel, additional) {
    //var knownKanji = "六車後分早森式取十貝七水首言中山体午生前事地木刀三受二光円月男内四転念画入部北集母他千作八行上切糸信込口広話全道子金通的九家女倍細五文定自雨安牛約意工力曜付比青今和足白電人案手土休海本目洗豆田音書最長耳小皿顔交好朝両万米市先気会成代近無発形国明以別百物年私父頭活大丸立法回学伝肉川方池走校林不化当去見正字者火下思出毎王産心高元一進花日用予合東公豚語同止性";
    return KKLC_KANJI.substring(0, kklcLevel) + TRIVIAL_CHARS + additional;
}

function log(msg) {
    if(DEBUG) {
        let container = document.getElementById("debug");
        if(container) {
            container.innerHTML += msg + "<br />";
        } else {
            console.log(msg);
        }
    }
}

function hideKnownKanji(element, knownKanji) {
    log("hideKnownKanji()");
    let rubies = element.querySelectorAll("ruby");
    //var rubies = Array.prototype.slice.call(rubies, 0);
    log(rubies.length);
    for(let r = 0; r < rubies.length; r++) {
        let ruby = rubies[r];
        // get all text and rb nodes
        let text = "";
        for(let i = 0; i < ruby.childNodes.length; i++) {
            let child = ruby.childNodes[i];
            //if(child.nodeType == Node.TEXT_NODE || child.nodeName.toLowerCase() == "rb") {
            if(child.nodeName.toLowerCase() != "rp" && child.nodeName.toLowerCase() != "rt") {
                text += child.textContent;
            }
        }
        log("Text: :" + text);
        let knowAll = true;
        for(let i = 0; i < text.length; i++) {
            let kanji = text[i];
            if(knownKanji.indexOf(kanji) === -1) {
                knowAll = false;
                //$("#debug").append(kanji);
                log(kanji);
                break;
            }
        }
        log(knowAll);
        if(knowAll) {
            //for(let child of ruby.childNodes) {
            for(let i = 0; i < ruby.childNodes.length; i++) {
                let child = ruby.childNodes[i];
                if(child.nodeName.toLowerCase() == "rt" || child.nodeName.toLowerCase() == "rp") {
                    child.classList.add("hiddenFurigana");
                }
            }
        }
    }
}

function addGlobalStyle(css) {
    let head, style;
    head = document.getElementsByTagName("head")[0];
    if(!head) { return; }
    style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
}


function initObserver(knownKanji) {
    let targetNode = document.querySelector("body");
    log(targetNode);
    hideKnownKanji(targetNode, knownKanji);

    // add observer
    let config = { attributes: false, childList: true, subtree: true };
    let callback = function (mutationsList) {
        for(let mutation of mutationsList) {
            // if (mutation.type == "childList") {
            //     console.log("A child node has been added or removed.");
            // }
            // else if (mutation.type == "attributes") {
            //     console.log("The " + mutation.attributeName + " attribute was modified.");
            // }
            // log(mutation);
            hideKnownKanji(mutation.target, knownKanji);
        }
    };

    let observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

function initAnki() {
    log("init anki");
    let ankiKklcLevel = 1005;
    let additional = "究";
    let knownKanji = getKnownKanji(ankiKklcLevel, additional);
    let nodes = document.querySelectorAll(".hideFurigana");
    for(let i = 0; i < nodes.length; i++) {
        hideKnownKanji(nodes[i], knownKanji);
    }
}

function initChrome() {
    log("init chrome");
    chrome.storage.sync.get({ kklcLevel: 0, additionalKanji: "" }, function (data) {
        log(data);
        let knownKanji = getKnownKanji(data.kklcLevel, data.additionalKanji);
        initObserver(knownKanji);
    });
}

// hideKnownKanji(".hideFurigana ruby");

(function () {
    "use strict";

    log("running hideKnownKanji script");

    addGlobalStyle(REQUIRED_CSS);

    if(typeof chrome !== "undefined") {
        initChrome();
    } else {
        initAnki();
    }
})();