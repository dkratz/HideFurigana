/* Required CSS:
.hiddenFurigana {
    color: transparent;
}

ruby:hover .hiddenFurigana {
    color: inherit;
}
*/

const REQUIRED_CSS = ".hiddenFurigana {" +
    "    color: transparent !important;" +
    "}" +
    "ruby:hover .hiddenFurigana {" +
    "    color: inherit !important;" +
    "}";

const DEBUG = false;

const TRIVIAL_CHARS = "1234567890１２３４５６７８９０ー＝。「」、！？" +
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん" +
    "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ" +
    "ぁぃぅぇぉァィゥェォヵヶっッ" +
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

const KANJI_SETS = {
    jlpt5: "日一国人年大十二本中長出三時行見月後前生五間上東四今金九入学高円子外八六下来気小七山話女北午百書先名川千水半男西電校語土木聞食車何南万毎白天母火右読友左休父雨",
    jlpt4: "会同事自社発者地業方新場員立開手力問代明動京目通言理体田主題意不作用度強公持野以思家世多正安院心界教文元重近考画海売知道集別物使品計死特私始朝運終台広住真有口少町料工建空急止送切転研足究楽起着店病質待試族銀早映親験英医仕去味写字答夜音注帰古歌買悪図週室歩風紙黒花春赤青館屋色走秋夏習駅洋旅服夕借曜飲肉貸堂鳥飯勉冬昼茶弟牛魚兄犬妹姉漢",
    jlpt3: "政議民連対部合市内相定回選米実関決全表戦経最現調化当約首法性要制治務成期取都和機平加受続進数記初指権支産点報済活原共得解交資予向際勝面告反判認参利組信在件側任引求所次昨論官増係感情投示変打直両式確果容必演歳争談能位置流格疑過局放常状球職与供役構割費付由説難優夫収断石違消神番規術備宅害配警育席訪乗残想声念助労例然限追商葉伝働形景落好退頭負渡失差末守若種美命福望非観察段横深申様財港識呼達良候程満敗値突光路科積他処太客否師登易速存飛殺号単座破除完降責捕危給苦迎園具辞因馬愛富彼未舞亡冷適婦寄込顔類余王返妻背熱宿薬険頼覚船途許抜便留罪努精散静婚喜浮絶幸押倒等老曲払庭徒勤遅居雑招困欠更刻賛抱犯恐息遠戻願絵越欲痛笑互束似列探逃遊迷夢君閉緒折草暮酒悲晴掛到寝暗盗吸陽御歯忘雪吹娘誤洗慣礼窓昔貧怒泳祖杯疲皆鳴腹煙眠怖耳頂箱晩寒髪忙才靴恥偶偉猫幾",
    jlpt2: "党協総区領県設改府査委軍団各島革村勢減再税営比防補境導副算輸述線農州武象域額欧担準賞辺造被技低復移個門課脳極含蔵量型況針専谷史階管兵接細効丸湾録省旧橋岸周材戸央券編捜竹超並療採森競介根販歴将幅般貿講林装諸劇河航鉄児禁印逆換久短油暴輪占植清倍均億圧芸署伸停爆陸玉波帯延羽固則乱普測豊厚齢囲卒略承順岩練軽了庁城患層版令角絡損募裏仏績築貨混昇池血温季星永著誌庫刊像香坂底布寺宇巨震希触依籍汚枚複郵仲栄札板骨傾届巻燃跡包駐弱紹雇替預焼簡章臓律贈照薄群秒奥詰双刺純翌快片敬悩泉皮漁荒貯硬埋柱祭袋筆訓浴童宝封胸砂塩賢腕兆床毛緑尊祝柔殿濃液衣肩零幼荷泊黄甘臣浅掃雲掘捨軟沈凍乳恋紅郊腰炭踊冊勇械菜珍卵湖喫干虫刷湯溶鉱涙匹孫鋭枝塗軒毒叫拝氷乾棒祈拾粉糸綿汗銅湿瓶咲召缶隻脂蒸肌耕鈍泥隅灯辛磨麦姓筒鼻粒詞胃畳机膚濯塔沸灰菓帽枯涼舟貝符憎皿肯燥畜挟曇滴伺",
    jlpt1: "氏統保第結派案策基価提挙応企検藤沢裁証援施井護展態鮮視条幹独宮率衛張監環審義訴株姿閣衆評影松撃佐核整融製票渉響推請器士討攻崎督授催及憲離激摘系批郎健盟従修隊織拡故振弁就異献厳維浜遺塁邦素遣抗模雄益緊標宣昭廃伊江僚吉盛皇臨踏壊債興源儀創障継筋闘葬避司康善逮迫惑崩紀聴脱級博締救執房撤削密措志載陣我為抑幕染奈傷択秀徴弾償功拠秘拒刑塚致繰尾描鈴盤項喪伴養懸街契掲躍棄邸縮還属慮枠恵露沖緩節需射購揮充貢鹿却端賃獲郡併徹貴衝焦奪災浦析譲称納樹挑誘紛至宗促慎控智握宙俊銭渋銃操携診託撮誕侵括謝駆透津壁稲仮裂敏是排裕堅訳芝綱典賀扱顧弘看訟戒祉誉歓奏勧騒閥甲縄郷揺免既薦隣華範隠徳哲杉釈己妥威豪熊滞微隆症暫忠倉彦肝喚沿妙唱阿索誠襲懇俳柄驚麻李浩剤瀬趣陥斎貫仙慰序旬兼聖旨即柳舎偽較覇詳抵脅茂犠旗距雅飾網竜詩繁翼潟敵魅嫌斉敷擁圏酸罰滅礎腐脚潮梅尽僕桜滑孤炎賠句鋼頑鎖彩摩励縦輝蓄軸巡稼瞬砲噴誇祥牲秩帝宏唆阻泰賄撲堀菊絞縁唯膨矢耐塾漏慶猛芳懲剣彰棋丁恒揚冒之倫陳憶潜梨仁克岳概拘墓黙須偏雰遇諮狭卓亀糧簿炉牧殊殖艦輩穴奇慢鶴謀暖昌拍朗寛覆胞泣隔浄没暇肺貞靖鑑飼陰銘随烈尋稿丹啓也丘棟壌漫玄粘悟舗妊熟旭恩騰往豆遂狂岐陛緯培衰艇屈径淡抽披廷錦准暑磯奨浸剰胆繊駒虚霊帳悔諭惨虐翻墜沼据肥徐糖搭盾脈滝軌俵妨擦鯨荘諾雷漂懐勘栽拐駄添冠斜鏡聡浪亜覧詐壇勲魔酬紫曙紋卸奮欄逸涯拓眼獄尚彫穏顕巧矛垣欺釣萩粛栗愚嘉遭架鬼庶稚滋幻煮姫誓把践呈疎仰剛疾征砕謡嫁謙后嘆菌鎌巣頻琴班棚潔酷宰廊寂辰霞伏碁俗漠邪晶墨鎮洞履劣那殴娠奉憂朴亭淳怪鳩酔惜穫佳潤悼乏該赴桑桂髄虎盆晋穂壮堤飢傍疫累痴搬晃癒桐寸郭尿凶吐宴鷹賓虜陶鐘憾猪紘磁弥昆粗訂芽庄傘敦騎寧循忍怠如寮祐鵬鉛珠凝苗獣哀跳匠垂蛇澄縫僧眺亘呉凡憩媛溝恭刈睡錯伯笹穀陵霧魂弊妃舶餓窮掌麗綾臭悦刃縛暦宜盲粋辱毅轄猿弦稔窒炊洪摂飽冗桃狩朱渦紳枢碑鍛刀鼓裸猶塊旋弓幣膜扇腸槽慈楊伐駿漬糾亮墳坪紺娯椿舌羅峡俸厘峰圭醸蓮弔乙汁尼遍衡薫猟羊款閲偵喝敢胎酵憤豚遮扉硫赦窃泡瑞又慨紡恨肪扶戯伍忌濁奔斗蘭迅肖鉢朽殻享秦茅藩沙輔媒鶏禅嘱胴迭挿嵐椎絹陪剖譜郁悠淑帆暁傑楠笛玲奴錠拳翔遷拙侍尺峠篤肇渇叔雌亨堪叙酢吟逓嶺甚喬崇漆岬癖愉寅礁乃洲屯樺槙姻巌擬塀唇睦閑胡幽峻曹詠卑侮鋳抹尉槻隷禍蝶酪茎帥逝汽琢匿襟蛍蕉寡琉痢庸朋坑藍賊搾畔遼唄孔橘漱呂拷嬢苑巽杜渓翁廉謹瞳湧欣窯褒醜升殉煩巴禎劾堕租稜桟倭婿慕斐罷矯某囚魁虹鴻泌於赳漸蚊葵厄藻禄孟嫡尭嚇巳凸暢韻霜硝勅芹杏棺儒鳳馨慧愁楼彬匡眉欽薪褐賜嵯綜繕栓翠鮎榛凹艶惣蔦錬隼渚衷逐斥稀芙詔皐雛惟佑耀黛渥憧宵妄惇脩甫酌蚕嬉蒼暉頒只肢檀凱彗謄梓丑嗣叶汐絢朔伽畝抄爽黎惰蛮冴旺萌偲壱瑠允侯蒔鯉弧遥舜瑛附彪卯但綺芋茜凌皓洸毬婆緋鯛怜邑倣碧啄穣酉悌倹柚繭亦詢采紗賦眸玖弐錘諄倖痘笙侃裟洵爾耗昴銑莞伶碩宥滉晏伎朕迪綸且竣晨吏燦麿頌箇楓琳梧哉澪匁晟衿凪梢丙颯茄勺恕蕗瑚遵瞭燎虞柊侑謁斤嵩捺蓉茉袈燿誼冶栞墾勁菖旦椋叡紬胤凜亥爵脹麟莉汰瑶瑳耶椰絃丞璃奎塑昂柾熙菫諒鞠崚濫捷"
};

const KANJI_SETS_LEVEL = {
    kklc: "日一ニ三十四五六七八九丸円〇人百千万口田目川月明曜火水木金土本東大小中生山出入下上止正足定手用無不回言舌話活行心耳又取身休体信付受以立部倍成代王玉宝国白皇全書事自貝見力刀切刃分公別長男女子好安案字学父文交校母毎海者工式弐武糸前後午牛年件条化花北比背車気汽性畑青麦素毒先洗元光去法走当思早草朝潮形発廃音意作昨雨電頁首道通乳豆頭予矛預句旬勺的約勿物方防面画両岡満顔産同向尚高圧地池他集進込斤近辺最皿血温湿爪瓜巾布市吊泉原源線綿絹錦願内肉猪豚家吾我語伝転芸会合今令念印命亡米粒和私広細林森松竹都京政府戸所至致屋室古居局故胡湖固箇個且組夕外多汐名天未末味来新親欠次席度渡限銀根良郎廊食飲官館宿犬太器凶区図番号品楽薬周週調束整数類示禁礼社申神員質党堂常賞償掌覚悟感央映決快英並平半馬尺尽駅鳥島角虫触解独店占点士商買売続読共供洪昔冬寒春夏秋主住駐注志誌仕任支反坂阪飯返雑乱寸寺時持特待得侍詩即節筋等均季委穴空友有左右石若苦在存干刊汗竿利害益溢割憲羽翌習弓引強弱風己記紀改起姓由油井囲丼丁寧町灯庁貯易賜場湯門間閉開関問聞訪送券包巻圏勝戦単簡過骨昼夜液戒幾畿磯機械飛氏民紙低抵邸底巨臣基期毛尾育羊洋魚鮮蘇詳祥美業実養様企曲典興輿竜滝籠辰農濃豊吉詰結投役没設段殺刹刈絵給巴色声眉里理埋野黒墨童量重動働労協種亜悪要価必証歪否処拠計針総窓矢知医短失鉄夫朱株族旅遊施旋旗放激牧位泣笑専恵連軍運蓮隊呈程聖丑紐革靴鞄皮破彼波果課巣菓茶世葉棄緑録剝縁介界浮将奨状病症痛憶臆億視規則側測考老孝厚教完院奈宗祭際察祈祖助仲忠沖保呆守団対村才財材沈枕丈杖偉緯衛韓違抱砲泡丹舟船舶般搬盤歯冷齢少砂歩渉省相想称弥互務柔軟軌軒軸較庫蔵倉創告造衣依袋褒裏表現著制製初裸難准準備死葬列烈裂例刑型研厄危範怨苑宛碗腕却脚犯狂獄非排俳罪罰伴判評批帥師座坐卒率傘笠星汁斗料科然燃黙獣猟漁狩猛煙焼暁旧児亦赤変蛮恋愛憂優栗票標漂遷各客路格絡略閣落南西酉酒洒配酸猶尊遵導敬警驚散敢厳仏払拡可何苛荷河阿司伺詞飼冊嗣覗歌唄負敗責積債漬紡績具真直植殖値置県州洲接継断応床麻歴暦臨園遠与写移卸御複腹復往柱征従徒縦延伸紳縮誕廷庭艇展殿異翼累塁吏使史更便硬能態熊罷羅雲曇雪雷零震振久賑丘兵岳浜舎再虎寅演黄横構講購溝仮片版板販義議儀犠牲旨指揮輝刺策差着看到倒論倫輪輸諭愉癒台治冶療僚瞭寮始終了承蒸舞隣瞬夢枝技伎岐峠阜急争情清晴精請静浄算答符博縛簿薄采菜採彩杉街術述余除徐叙斜途塗漆仙垂乗兼剰睡眠郵錘華侵浸寝掃婦帰戻涙射謝討訂打撃拭試検験険倹剣谷欲浴容溶俗裕寛甘紺紅攻功巧朽枯汚升弁昇登澄充銃統流硫盲忘忙荒慌望希稀括拘拾捨孤弧弾禅系係孫懸偏遍編篇普譜職織識殉退眼智仁忍認求救球駐純鈍召招沼紹詔勅昭照超越趣赴訃朴掛摘滴嫡適敵授援媛緩暖観勧権歓鶴確慢漫卯抑仰迎柳卵疎速遅辻迅加減滅威嚇或惑域収納献貢貪貰貧賃貸貨資賛替潜貿留溜賀架染梨傑貴潰遺遣追迫泊伯拍弔沸煮費弟第剃兄只税鋭説脱閲祝況悦克競姉妹珠殊序秩迭喜善繕膳憾恨惜措借錯曽増層憎僧贈賄賂賦賊帯滞渋摂為偽参惨呂侶宮営蛍栄誉挙拳桜妥咲朕茎径怪軽経斉斎済剤剖陪培賠貼粘衡換喚絶免逸勉晩許象像彫景影撮就涼鯨隔融肖消硝梢削宵宴郷饗響城誠盛旺盆蓋盗盟塩傷揚暢陽陰隠穏穂稲愁裁載栽赦跡踪痕蹴踊踏躍濯奇寄騎椅崎埼岬模膜漠幕墓募暮慕添恭暴爆沿礎疑凝擬倣似俵俺庵僕撲叩伐閥闘闇閑脈派缶揺謡遥陶陳陣陥隆降峰逢縫蜂蜜密秘欧枢殴駆馳騒旭旦但担亘恒垣宣喧嘩唾壷坪畔衆伊君群郡那邦郊効絞搾紋菊帝締諦享郭亭停昆混皆楷諧階陛陸睦勢熱熟塾陵菱俊唆筈箸暑署曙賭諸儲緒翁婆姿恣妄萎妻凄章彰障辛宰辣辞壁璧癖避幸服報執摯達朗浪呉娯誤富副幅福祉禍渦鍋蘭欄潤淵滑稽肩脅肯双江湾港選択沢訳釈敷傲贅審藩翻翔査租粗阻狙宜畳甲乙丙柄押抽捜届宙笛袖襟衿裾据握揃撫託宅詫宇芋寿鋳銘鏡境環還盾循巡這逓息憩鼻孔臭嗅奥尖突窒窃衝契喫潔侮梅悔敏繁繋茂橋矯稿縞箋残桟銭践浅洩壮荘装冥暗韻損捕挿補浦哺舗掴捉促筆津律逮建健康庸粛繍唐糖粧糧粉紛糾粋砕枠酔醒酬酷凡凧帆汎恐怖築尋訊諮抗航坑拝耕耗崇灰炭岸岩崩嵐崖催焦礁奮奪隻獲穫護譲嬢醸壌壊懐徳聴恥羞爵侯喉候修悠是提堤題匙冒昌唱晶帽棟凍氷永泳詠札枚杯析折挫捻誓逝哲斬漸暫斥訴訟究窮極函探深慄惧慎鎮塡婚囚困梱因姻咽恩菌漢嘆勤謹僅索牽牢啓庶遮燕雀劣抄秒妙沙汰煎炒炊焚薪乃之此其乏芝及扱級吸吹呼吐叶叱叫吟含琴迷謎逆遡塑勲薫芳香秀誘拐透携雄雌些柴紫髪髭詐欺棋碁甚勘堪匹匠匿諾乞迄乾幹操燥繰藻噴墳憤牙芽雅邪既概慨苗描猫萌兆眺逃桃跳挑拙屈掘堀封筒管棺轄洞窟淫妊娠唇辱襲伏吠噛班斑輩悲忽惚猿哀衰衷喪忌卓悼貞偵覇覆履属嘱偶隅隙遇愚曹遭槽妨坊傍於房扇扉雇顧屑糞尿泌尻炉窯釜爺窪佳涯暇霞雰霧露霜箱籍貫慣頂戴項頃傾頑頒頓顕領頻捗順馴訓須額頼瀬峡狭挟頰顎煩串患疾痴疫痢痘瘍癌痩疲被披抜控扶抹拓拷楼壇塔搭寡賓飾飽餓飢机冗冠離胸悩脳臓胃炎談淡災肝肺胆腺胞腸胎腰肘膝股肢胴脇脂詣肪肌膚慮虐虞劇虚虜勇湧戯繊緻嘘噂樽距拒嬉鼓樹膨脹張帳腫肥把誇覧監鑑艦濫藍賢腎堅緊勃励栃茨羨歳戚叔淑寂督奴努怒隷款殻穀臼毀廉鎌嫌謙遜亀練錬鍛鉱銅鉛銑鋼剛綱網縄鉢鎖絆鍵釘錮錠綻鈴鐘瞳憧憬卑碑痺鬼塊醜魂魅魔畏刷擦摩磨凹凸奉奏泰俸棒捧耐霊需濡儒端壱尼泥漏氾彙某謀媒尉慰酪酵醤酢酎酌釣畜蓄玄眩呟囁喋喩鬱弦舷舵幻幽幼稚維推堆椎脊雛誰唯鳴亥刻劾核骸咳該診珍瓦併瓶屏塀餅餌呑沃妖呪艶慈滋磁擁腐芯蒔撒撤徹微徴懲殆后垢妃姫如茹婿娘嫁稼塚豪蒙墾懇貌逐遂墜堕随附髄怠惰佐玩弄嘲奔弊幣蔽朋棚柵桁栓詮塞梗柿藤騰謄麺拉晃幌厘畝匁匂勾挨拶曖昧瑠璃嫉妬鹿塵麓麗薦慶兜睨鼠溺潟濁渇褐葛喝謁掲戌尤駄駒篤罵蔑罠烏鴨鳩鶏渓鷹鷲璽爽綴桑蚕蛋蟹蚊巳蛇繭蝶虹",
    rtk: "一二三四五六七八九十口日月田目古吾冒朋明唱晶品呂昌早旭世胃旦胆亘凹凸旧自白百中千舌升昇丸寸肘専博占上下卓朝嘲只貝唄貞員貼見児元頁頑凡負万句肌旬勺的首乙乱直具真工左右有賄貢項刀刃切召昭則副別丁町可頂子孔了女好如母貫兄呪克小少大多夕汐外名石肖硝砕砂妬削光太器臭嗅妙省厚奇川州順水氷永泉腺原願泳沼沖汎江汰汁沙潮源活消況河泊湖測土吐圧埼垣填圭封涯寺時均火炎煩淡灯畑災灰点照魚漁里黒墨鯉量厘埋同洞胴向尚字守完宣宵安宴寄富貯木林森桂柏枠梢棚杏桐植椅枯朴村相机本札暦案燥未末昧沫味妹朱株若草苦苛寛薄葉模漠墓暮膜苗兆桃眺犬状黙然荻狩猫牛特告先洗介界茶脊合塔王玉宝珠現玩狂旺皇呈全栓理主注柱金銑鉢銅釣針銘鎮道導辻迅造迫逃辺巡車連軌輸喩前煎各格賂略客額夏処条落冗冥軍輝運冠夢坑高享塾熟亭京涼景鯨舎周週士吉壮荘売学覚栄書津牧攻敗枚故敬言警計詮獄訂訃討訓詔詰話詠詩語読調談諾諭式試弐域賊栽載茂戚成城誠威滅減蔑桟銭浅止歩渉頻肯企歴武賦正証政定錠走超赴越是題堤建鍵延誕礎婿衣裁装裏壊哀遠猿初巾布帆幅帽幕幌錦市柿姉肺帯滞刺制製転芸雨雲曇雷霜冬天妖沃橋嬌立泣章競帝諦童瞳鐘商嫡適滴敵匕叱匂頃北背比昆皆楷諧混渇謁褐喝葛旨脂詣壱毎敏梅海乞乾腹複欠吹炊歌軟次茨資姿諮賠培剖音暗韻識鏡境亡盲妄荒望方妨坊芳肪訪放激脱説鋭曽増贈東棟凍妊廷染燃賓歳県栃地池虫蛍蛇虹蝶独蚕風己起妃改記包胞砲泡亀電竜滝豚逐遂家嫁豪腸場湯羊美洋詳鮮達羨差着唯堆椎誰焦礁集准進雑雌準奮奪確午許歓権観羽習翌曜濯曰困固錮国団因姻咽園回壇店庫庭庁床麻磨心忘恣忍認忌志誌芯忠串患思恩応意臆想息憩恵恐惑感憂寡忙悦恒悼悟怖慌悔憎慣愉惰慎憾憶惧憧憬慕添必泌手看摩我義議犠抹拭拉抱搭抄抗批招拓拍打拘捨拐摘挑指持拶括揮推揚提損拾担拠描操接掲掛捗研戒弄械鼻刑型才財材存在乃携及吸扱丈史吏更硬梗又双桑隻護獲奴怒友抜投没股設撃殻支技枝肢茎怪軽叔督寂淑反坂板返販爪妥乳浮淫将奨采採菜受授愛曖払広勾拡鉱弁雄台怠治冶始胎窓去法会至室到致互棄育撤充銃硫流允唆出山拙岩炭岐峠崩密蜜嵐崎崖入込分貧頒公松翁訟谷浴容溶欲裕鉛沿賞党堂常裳掌皮波婆披破被残殉殊殖列裂烈死葬瞬耳取趣最撮恥職聖敢聴懐慢漫買置罰寧濁環還夫扶渓規替賛潜失鉄迭臣姫蔵臓賢腎堅臨覧巨拒力男労募劣功勧努勃励加賀架脇脅協行律復得従徒待往征径彼役徳徹徴懲微街桁衡稿稼程税稚和移秒秋愁私秩秘称利梨穫穂稲香季委秀透誘稽穀菌萎米粉粘粒粧迷粋謎糧菊奥数楼類漆膝様求球救竹笑笠笹箋筋箱筆筒等算答策簿築篭人佐侶但住位仲体悠件仕他伏伝仏休仮伎伯俗信佳依例個健側侍停値倣傲倒偵僧億儀償仙催仁侮使便倍優伐宿傷保褒傑付符府任賃代袋貸化花貨傾何荷俊傍俺久畝囚内丙柄肉腐座挫卒傘匁以似併瓦瓶宮営善膳年夜液塚幣蔽弊喚換融施旋遊旅勿物易賜尿尼尻泥塀履屋握屈掘堀居据裾層局遅漏刷尺尽沢訳択昼戸肩房扇炉戻涙雇顧啓示礼祥祝福祉社視奈尉慰款禁襟宗崇祭察擦由抽油袖宙届笛軸甲押岬挿申伸神捜果菓課裸斤析所祈近折哲逝誓斬暫漸断質斥訴昨詐作雪録剥尋急穏侵浸寝婦掃当彙争浄事唐糖康逮伊君群耐需儒端両満画歯曲曹遭漕槽斗料科図用庸備昔錯借惜措散廿庶遮席度渡奔噴墳憤焼暁半伴畔判拳券巻圏勝藤謄片版之乏芝不否杯矢矯族知智挨矛柔務霧班帰弓引弔弘強弥弱溺沸費第弟巧号朽誇顎汚与写身射謝老考孝教拷者煮著箸署暑諸猪渚賭峡狭挟頬追阜師帥官棺管父釜交効較校足促捉距路露跳躍践踏踪骨滑髄禍渦鍋過阪阿際障隙随陪陽陳防附院陣隊墜降階陛隣隔隠堕陥穴空控突究窒窃窟窪搾窯窮探深丘岳兵浜糸織繕縮繁縦緻線綻締維羅練緒続絵統絞給絡結終級紀紅納紡紛紹経紳約細累索総綿絹繰継緑縁網緊紫縛縄幼後幽幾機畿玄畜蓄弦擁滋慈磁系係孫懸遜却脚卸御服命令零齢冷領鈴勇湧通踊疑擬凝範犯氾厄危宛腕苑怨柳卵留瑠貿印臼毀興酉酒酌酎酵酷酬酪酢酔配酸猶尊豆頭短豊鼓喜樹皿血盆盟盗温蓋監濫鑑藍猛盛塩銀恨根即爵節退限眼良朗浪娘食飯飲飢餓飾餌館餅養飽既概慨平呼坪評刈刹希凶胸離璃殺爽純頓鈍辛辞梓宰壁璧避新薪親幸執摯報叫糾収卑碑陸睦勢熱菱陵亥核刻該骸劾述術寒塞醸譲壌嬢毒素麦青精請情晴清静責績積債漬表俵潔契喫害轄割憲生星醒姓性牲産隆峰蜂縫拝寿鋳籍春椿泰奏実奉俸棒謹僅勤漢嘆難華垂唾睡錘乗剰今含貪吟念捻琴陰予序預野兼嫌鎌謙廉西価要腰票漂標栗慄遷覆煙南楠献門問閲閥間闇簡開閉閣閑聞潤欄闘倉創非俳排悲罪輩扉侯喉候決快偉違緯衛韓干肝刊汗軒岸幹芋宇余除徐叙途斜塗束頼瀬勅疎辣速整剣険検倹重動腫勲働種衝薫病痴痘症瘍痩疾嫉痢痕疲疫痛癖匿匠医匹区枢殴欧抑仰迎登澄発廃僚瞭寮療彫形影杉彩彰彦顔須膨参惨修珍診文対紋蚊斑斉剤済斎粛塁楽薬率渋摂央英映赤赦変跡蛮恋湾黄横把色絶艶肥甘紺某謀媒欺棋旗期碁基甚勘堪貴遺遣潰舞無組粗租狙祖阻査助宜畳並普譜湿顕繊霊業撲僕共供異翼戴洪港暴爆恭選殿井丼囲耕亜悪円角触解再講購構溝論倫輪偏遍編冊柵典氏紙婚低抵底民眠捕哺浦蒲舗補邸郭郡郊部都郵邦那郷響郎廊盾循派脈衆逓段鍛后幻司伺詞飼嗣舟舶航舷般盤搬船艦艇瓜弧孤繭益暇敷来気汽飛沈枕妻凄衰衷面麺革靴覇声眉呉娯誤蒸承函極牙芽邪雅釈番審翻藩毛耗尾宅託為偽畏長張帳脹髪展喪巣単戦禅弾桜獣脳悩厳鎖挙誉猟鳥鳴鶴烏蔦鳩鶏島暖媛援緩属嘱偶遇愚隅逆塑遡岡鋼綱剛缶陶揺謡鬱就蹴懇墾貌免逸晩勉象像馬駒験騎駐駆駅騒駄驚篤罵騰虎虜膚虚戯虞慮劇虐鹿麓薦慶麗熊能態寅演辰辱震振娠唇農濃送関咲鬼醜魂魔魅塊襲嚇朕雰箇錬遵罷屯且藻隷癒璽潟丹丑羞卯巳"
};

var observer;

function getKnownKanji(config) {
    let result = TRIVIAL_CHARS + config.extraKanji;
    if(config.hasOwnProperty("kanjiSets") && config.kanjiSets.constructor === Array) {
        for(let i = 0; i < config.kanjiSets.length; i++) {
            if(KANJI_SETS.hasOwnProperty(config.kanjiSets[i])) {
                result += KANJI_SETS[config.kanjiSets[i]];
            }
        }
    }
    if(config.hasOwnProperty("kanjiSetsLevel")) {
        for(let key in config.kanjiSetsLevel) {
            if(KANJI_SETS_LEVEL.hasOwnProperty(key)) {
                result += KANJI_SETS_LEVEL[key].substring(0, config.kanjiSetsLevel[key]);
            }
        }
    }
    return result;
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
    let head = document.getElementsByTagName("head")[0];
    if(!head) { return; }
    let style = document.createElement("style");
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
    observer = new MutationObserver((mutationsList) => {
        for(let mutation of mutationsList) {
            hideKnownKanji(mutation.target, knownKanji);
        }
    });
    observer.observe(targetNode, config);
}

function initAnki() {
    log("init anki");
    // stored in separate variables to be easily accesible to scripts
    let ankiKklcLevel = 0;
    let ankiRtkLevel = 0;
    let ankiextra = "";
    let ankiConfig = {
        kanjiSets: [],
        kanjiSetsLevel: {
            kklc: ankiKklcLevel,
            rtk: ankiRtkLevel
        },
        extraKanji: ankiextra
    }
    let knownKanji = getKnownKanji(ankiConfig);
    let nodes = document.querySelectorAll(".hideFurigana");
    for(let i = 0; i < nodes.length; i++) {
        hideKnownKanji(nodes[i], knownKanji);
    }
}

function initChrome() {
    log("init chrome");
    let knownKanji;
    chrome.storage.sync.get({ extraKanji: "", kanjiSets: [], kanjiSetsLevel: {}, furiganaHidden: true }, (data) => {
        log(data);
        knownKanji = getKnownKanji(data);
        if(data.furiganaHidden) {
            initObserver(knownKanji);
        }
    });

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.hasOwnProperty("toggleFurigana")) {
            log("toggleFurigana");
            if(request.toggleFurigana) {
                initObserver(knownKanji);
            } else {
                observer.disconnect();
                let nodes = document.querySelectorAll(".hiddenFurigana");
                for(let i = 0; i < nodes.length; i++) {
                    nodes[i].classList.remove("hiddenFurigana");
                }
            }
            sendResponse(true);
        }
    });
}

(function () {
    "use strict";

    log("running hideFurigana script");

    addGlobalStyle(REQUIRED_CSS);

    if(typeof chrome !== "undefined") {
        initChrome();
    } else {
        initAnki();
    }
})();