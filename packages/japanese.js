const japanese = [
    // あ
    { Japanese: 'あ', Kanji: '', Chinese: '啊', Lesson: '2' },
    { Japanese: 'あした', Chinese: '明天', Lesson: '1' },
    { Japanese: 'あそこ', Kanji: '', Chinese: '那裡', Lesson: '3' },
    { Japanese: 'あなた', Kanji: '貴方', Chinese: '你', Lesson: '1' },
    { Japanese: 'あの', Kanji: '', Chinese: '那個', Lesson: '2' },
    { Japanese: 'あのう', Kanji: '', Chinese: '那個...', Lesson: '2' },
    { Japanese: 'あのかた', Kanji: 'あの方', Chinese: '他,她,那個人（「あのひと」的禮貌說法）', Lesson: '1' },
    { Japanese: 'あのひと', Chinese: '他,她,那個人', Lesson: '1' },
    { Japanese: 'あれ', Chinese: '那', Lesson: '2' },
    { Japanese: 'ありがとう', Kanji: '', Chinese: '謝謝', Lesson: '2' },
    { Japanese: 'アメリカ', Chinese: '美國', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // い
    { Japanese: 'いいえ', Chinese: '不,不是', Lesson: '1' },
    { Japanese: 'いしゃ', Kanji: '医者', Chinese: '醫生', Lesson: '1' },
    { Japanese: 'いす', Kanji: '', Chinese: '椅子', Lesson: '2' },
    { Japanese: 'イギリス', Chinese: '英國', Lesson: '1' },
    { Japanese: 'インド', Chinese: '印度', Lesson: '1' },
    { Japanese: 'インドネシア', Chinese: '印度尼西亞,印尼', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // う
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // え
    { Japanese: 'えいご', Kanji: '英語', Chinese: '英語', Lesson: '2' },
    { Japanese: 'えっ', Kanji: '', Chinese: '咦...', Lesson: '2' },
    { Japanese: 'えんぴつ', Kanji: '鉛筆', Chinese: '鉛筆', Lesson: '2' },
    { Japanese: 'エアー', Chinese: 'Air', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // お
    { Japanese: 'おいくつ', Chinese: '幾歲(「なんさい」的禮貌說法)', Lesson: '1' },
    { Japanese: 'おなまえは?', Kanji: 'お名前は？', Chinese: '您貴姓? 您叫什麼名字?', Lesson: '1' },
    { Japanese: 'おみやげ', Kanji: 'お土産', Chinese: '伴手禮,土產', Lesson: '2' },
    { Japanese: 'おせわになります', Kanji: 'お世話になります', Chinese: '承蒙您的照顧', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // か
    { Japanese: 'かいしゃいん', Kanji: '会社員', Chinese: '公司職員', Lesson: '1' },
    { Japanese: 'かぎ', Kanji: '', Chinese: '鑰匙', Lesson: '2' },
    { Japanese: 'がくせい', Kanji: '学生' , Chinese: '學生', Lesson: '1'},
    { Japanese: 'かさ', Kanji: '傘', Chinese: '傘', Lesson: '2' },
    { Japanese: 'から', Chinese: '從...', Lesson: '1' },
    { Japanese: 'かばん', Kanji: '', Chinese: '皮包,提包', Lesson: '2' },
    { Japanese: 'かんこく', Kanji: '韓国', Chinese: '韓國', Lesson: '1' },
    { Japanese: 'カード', Kanji: 'card', Chinese: '卡片', Lesson: '2' },
    { Japanese: 'カメラ', Kanji: 'Camera', Chinese: '照相機', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // き
    { Japanese: 'きょうし', Kanji: '教師', Chinese: '教師', Lesson: '1' },
    { Japanese: 'ぎんこういん', Kanji: '銀行員', Chinese: '銀行行員', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // く
    { Japanese: 'くるま', Kanji: '車', Chinese: '汽車', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // け
    { Japanese: 'けんきゅうしゃ', Kanji: '研究者', Chinese: '研究人員', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // こ
    { Japanese: 'こうべ', Kanji: '神戸', Chinese: '神戶', Lesson: '1' },
    { Japanese: 'ここ', Kanji: '', Chinese: '這裡', Lesson: '3' },
    { Japanese: 'こちら', Chinese: '這位', Lesson: '1' },
    { Japanese: 'こちら', Kanji: '', Chinese: '這邊(「ここ」的禮貌用法)', Lesson: '3' },
    { Japanese: 'こちらこそ', Kanji: '', Chinese: '哪裡哪裡', Lesson: '2' },
    { Japanese: 'この', Kanji: '', Chinese: '這個', Lesson: '2' },
    { Japanese: 'これ', Kanji: '', Chinese: '這', Lesson: '2' },
    { Japanese: 'これから', Kanji: '', Chinese: '今後', Lesson: '2' },
    { Japanese: 'ご', Kanji: '語', Chinese: '語', Lesson: '2' },
    { Japanese: 'コンピューター', Kanji: 'Computer', Chinese: '電腦', Lesson: '2' },
    { Japanese: 'コーヒー', Kanji: 'coffee', Chinese: '咖啡', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // さ
    { Japanese: 'さい', Kanji: '歳', Chinese: '歲', Lesson: '1' },
    { Japanese: 'さくら', Chinese: '櫻花', Lesson: '1' },
    { Japanese: 'ざっし', Kanji: '雑誌', Chinese: '雜誌', Lesson: '2' },
    { Japanese: 'さん', Chinese: '先生,小姐,女士', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // し
    { Japanese: 'しゃいん', Kanji: '社員', Chinese: '公司職員', Lesson: '1' },
    { Japanese: 'しつれいですが', Kanji: '失礼ですが', Chinese: '抱歉,請問...', Lesson: '1' },
    { Japanese: 'しんぶん', Kanji: '新聞', Chinese: '報紙', Lesson: '2' },
    { Japanese: 'じしょ', Kanji: '辞書', Chinese: '字典', Lesson: '2' },
    { Japanese: 'じん', Chinese: '人', Lesson: '1', Kanji: '人' },
    { Japanese: 'シャープペンシル', Kanji: 'sharp pencil, mechanical pencil', Chinese: '自動鉛筆', Lesson: '2' },
    { Japanese: 'シーディー', Kanji: 'CD', Chinese: '光碟', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // す
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // せ
    { Japanese: 'せんせい', Kanji: '先生', Chinese: '老師', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // そ
    { Japanese: 'そう', Kanji: '', Chinese: '是的', Lesson: '2' },
    { Japanese: 'そうですか', Kanji: '', Chinese: '這樣啊', Lesson: '2' },
    { Japanese: 'そこ', Kanji: '', Chinese: '那裡', Lesson: '3' },
    { Japanese: 'そちら', Kanji: '', Chinese: '那邊(「そこ」的禮貌用法)', Lesson: '3' },
    { Japanese: 'それ', Kanji: '', Chinese: '那', Lesson: '2' },
    { Japanese: 'その', Kanji: '', Chinese: '那個', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // た
    { Japanese: 'だいがく', Kanji: '大学', Chinese: '大學', Lesson: '1' },
    { Japanese: 'だれ', Kanji: '誰', Chinese: '誰', Lesson: '1' },
    { Japanese: 'タイ', Chinese: '泰國', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ち
    { Japanese: 'ちがいます', Kanji: '違います', Chinese: '不是', Lesson: '2' },
    { Japanese: 'ちゃん', Chinese: '接在小孩子名字後面', Lesson: '1' },
    { Japanese: 'ちゅうごく', Kanji: '中国', Chinese: '中國', Lesson: '1' },
    { Japanese: 'チョコレート', Kanji: 'chocolate', Chinese: '巧克力', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // つ
    { Japanese: 'つくえ', Kanji: '机', Chinese: '桌子', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // て
    { Japanese: 'てちょう', Kanji: '手帳', Chinese: '記事本', Lesson: '2' },
    { Japanese: 'テレビ', Kanji: 'TV', Chinese: '電視', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // と
    { Japanese: 'とけい', Kanji: '時計', Chinese: '鐘錶', Lesson: '2' },
    { Japanese: 'どうぞ', Chinese: '請', Lesson: '1' },
    { Japanese: 'どうぞ', Kanji: '', Chinese: '請', Lesson: '2' },
    { Japanese: 'どこ', Kanji: '', Chinese: '哪裡', Lesson: '3' },
    { Japanese: 'どなた', Chinese: '誰（「だれ」的禮貌說法）', Lesson: '1' },
    { Japanese: 'ドイツ', Chinese: '德國', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // な
    { Japanese: 'なまえ', Kanji: '名前', Chinese: '名字', Lesson: '1' },
    { Japanese: 'なん', Kanji: '何', Chinese: '什麼', Lesson: '2' },
    { Japanese: 'なんさい', Kanji: '何歳', Chinese: '幾歲', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // に
    { Japanese: 'にほん', Kanji: '日本', Chinese: '日本', Lesson: '1' },
    { Japanese: 'にほんご', Kanji: '日本語', Chinese: '日語', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ぬ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ね
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // の
    { Japanese: 'ノート', Kanji: 'note', Chinese: '筆記本', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // は
    { Japanese: 'はい', Chinese: '是,對', Lesson: '1' },
    { Japanese: 'はじめまして', Chinese: '初次見面', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ひ
    { Japanese: 'びょういん', Kanji: '病院', Chinese: '醫院', Lesson: '1' },
    // ふ
    { Japanese: 'ふじ', Kanji: '富士', Chinese: '富士', Lesson: '1' },
    { Japanese: 'ブラジル', Chinese: '巴西', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // へ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ほ
    { Japanese: 'ほん', Kanji: '本', Chinese: '書', Lesson: '2' },
    { Japanese: 'ボールペン', Kanji: 'ball pen', Chinese: '原子筆', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // ま
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // み
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // む
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // め
    { Japanese: 'めいし', Kanji: '名刺', Chinese: '名片', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // も
    { Japanese: 'もじ', Chinese: '文字', Lesson: '' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },





    // や
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ゆ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // よ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },






    // ら
    { Japanese: 'ラジオ', Kanji: 'radio', Chinese: '收音機', Lesson: '2' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // り
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // る
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // れ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ろ
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },






    // わ
    { Japanese: 'わたし', Kanji: '私', Chinese: '我', Lesson: '1' },
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // を
    { Japanese: '', Kanji: '', Chinese: '', Lesson: '' },
    // ん
    { Japanese: 'ん', Chinese: '', Lesson: '' },
];
