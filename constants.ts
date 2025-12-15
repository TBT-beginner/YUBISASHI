import { SentenceData, PartType, LessonData } from './types';

// --- Lesson 5 Part 1 Data (Mt. Fuji) ---
const PART_1_SENTENCES: SentenceData[] = [
  {
    id: '1',
    code: '2F',
    fullText: 'Mt. Fuji is a large, beautiful mountain.',
    translation: '富士山は大きく美しい山です。',
    parts: [
      { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
      { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
      { text: 'a large, beautiful mountain', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '大きく美しい山' },
    ]
  },
  {
    id: '2',
    code: '2F',
    fullText: 'It is one of the best-known sights in Japan.',
    translation: 'それは日本で最もよく知られた名所の一つです。',
    parts: [
      { text: 'It', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
      { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
      { text: 'one of the best-known sights', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '最もよく知られた名所の一つ' },
      { text: 'in Japan', type: PartType.MODIFIER, detail: 'Where (どこ)', japanese: '日本で' },
    ]
  },
  {
    id: '3',
    code: '1A',
    fullText: 'Among other things, its size and beauty attract a large number of people.',
    translation: 'とりわけ、その大きさと美しさは多くの人々を惹きつけます。',
    parts: [
      { text: 'Among other things,', type: PartType.MODIFIER, detail: 'Context', japanese: 'とりわけ' },
      { text: 'its size and beauty', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'その大きさと美しさは' },
      { text: 'attract', type: PartType.VERB, label: 'V (どうする)', japanese: '惹きつけます' },
      { text: 'a large number of people', type: PartType.OBJECT, label: 'O (誰を/何を)', japanese: '多くの人々を' },
    ]
  },
  {
    id: '4',
    code: '4N',
    fullText: 'In 2013, Mt. Fuji was placed on the Cultural World Heritage List.',
    translation: '2013年、富士山は世界文化遺産リストに登録されました。',
    parts: [
      { text: 'In 2013,', type: PartType.MODIFIER, detail: 'When (いつ)', japanese: '2013年に' },
      { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
      { text: 'was placed', type: PartType.VERB, label: 'V (受身)', japanese: '登録されました' },
      { text: 'on the Cultural World Heritage List', type: PartType.MODIFIER, detail: 'Where/Target', japanese: '世界文化遺産リストに' },
    ]
  },
  {
    id: '5',
    code: '4N',
    fullText: 'Many people were surprised that it was not put on the Natural World Heritage List.',
    translation: '多くの人々は、それが世界自然遺産リストに載らなかったことに驚きました。',
    parts: [
      { text: 'Many people', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '多くの人々は' },
      { text: 'were surprised', type: PartType.VERB, label: 'V (受身/感情)', japanese: '驚きました' },
      { 
        text: 'that it was not put on the Natural World Heritage List', 
        type: PartType.MODIFIER, 
        detail: 'Reason (～して)',
        japanese: 'それが自然遺産リストに載らなかったことに',
        subParts: [
           { text: 'that', type: PartType.CONNECT, japanese: '～ということ' },
           { text: 'it', type: PartType.SUBJECT, japanese: 'それが' },
           { text: 'was not put', type: PartType.VERB, japanese: '載らなかった' },
           { text: 'on the Natural World Heritage List', type: PartType.MODIFIER, japanese: '自然遺産リストに' }
        ]
      },
    ]
  },
  {
    id: '6',
    code: '1B / 4N',
    fullText: 'Though Mt. Fuji extends over both Shizuoka and Yamanashi Prefectures, it can be seen from many other prefectures.',
    translation: '富士山は静岡県と山梨県の両県にまたがっていますが、他の多くの県から見ることができます。',
    parts: [
      { 
        text: 'Though Mt. Fuji extends over both Shizuoka and Yamanashi Prefectures,', 
        type: PartType.MODIFIER, 
        detail: 'Clause (～だけれど)',
        japanese: '富士山は静岡と山梨の両県にまたがっていますが',
        subParts: [
          { text: 'Though', type: PartType.CONNECT, japanese: '～だけれど' },
          { text: 'Mt. Fuji', type: PartType.SUBJECT, japanese: '富士山は' },
          { text: 'extends', type: PartType.VERB, japanese: 'またがっている' },
          { text: 'over both Shizuoka and Yamanashi Prefectures', type: PartType.MODIFIER, japanese: '静岡と山梨の両県に' }
        ]
      },
      { text: 'it', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
      { text: 'can be seen', type: PartType.VERB, label: 'V (受身/可能)', japanese: '見ることができます' },
      { text: 'from many other prefectures', type: PartType.MODIFIER, detail: 'Where (どこから)', japanese: '他の多くの県から' },
    ]
  },
  {
    id: '7',
    code: '1B / 1A',
    fullText: 'When people come to Japan by air, they sometimes can see Mt. Fuji from their airplane windows.',
    translation: '人々が飛行機で日本に来るとき、時々飛行機の窓から富士山を見ることができます。',
    parts: [
       {
         text: 'When people come to Japan by air,',
         type: PartType.MODIFIER,
         detail: 'When (いつ)',
         japanese: '人々が飛行機で日本に来るとき',
         subParts: [
            { text: 'When', type: PartType.CONNECT, japanese: '～のとき' },
            { text: 'people', type: PartType.SUBJECT, japanese: '人々が' },
            { text: 'come', type: PartType.VERB, japanese: '来る' },
            { text: 'to Japan', type: PartType.MODIFIER, japanese: '日本へ' },
            { text: 'by air', type: PartType.MODIFIER, japanese: '飛行機で' },
         ]
       },
       { text: 'they', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
       { text: 'sometimes', type: PartType.MODIFIER, detail: 'Freq', japanese: '時々' },
       { text: 'can see', type: PartType.VERB, label: 'V (どうする)', japanese: '見ることができます' },
       { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山を' },
       { text: 'from their airplane windows', type: PartType.MODIFIER, detail: 'Where (どこから)', japanese: '飛行機の窓から' },
    ]
  },
  {
    id: '8',
    code: '1A / 1B',
    fullText: 'Then they know they have arrived over Japan.',
    translation: 'その時、彼らは日本の上空に到着したことが分かります。',
    parts: [
      { text: 'Then', type: PartType.MODIFIER, detail: 'Time/Seq', japanese: 'その時' },
      { text: 'they', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
      { text: 'know', type: PartType.VERB, label: 'V (どうする)', japanese: '分かります' },
      { 
        text: '(that) they have arrived over Japan', 
        type: PartType.OBJECT, 
        label: 'O (～ということを)',
        japanese: '日本の上空に到着したことを',
        subParts: [
          { text: 'they', type: PartType.SUBJECT, japanese: '彼らが' },
          { text: 'have arrived', type: PartType.VERB, japanese: '到着した' },
          { text: 'over Japan', type: PartType.MODIFIER, japanese: '日本の上空に' }
        ]
      },
    ]
  },
  {
    id: '9',
    code: '4N',
    fullText: 'Why was Mt. Fuji chosen for its cultural value?',
    translation: 'なぜ富士山はその文化的価値のために選ばれたのでしょうか？',
    parts: [
      { text: 'Why', type: PartType.MODIFIER, detail: 'Why (なぜ)', japanese: 'なぜ' },
      { text: 'was', type: PartType.VERB, label: 'V (aux)', japanese: '（～された）' },
      { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
      { text: 'chosen', type: PartType.VERB, label: 'V (pp)', japanese: '選ばれたか' },
      { text: 'for its cultural value', type: PartType.MODIFIER, detail: 'Reason', japanese: 'その文化的価値のために' },
    ]
  },
  {
    id: '10',
    code: '1B',
    fullText: 'It has had a strong influence on religion, literature, and art in Japan.',
    translation: 'それは日本の宗教、文学、そして芸術に強い影響を与えてきました。',
    parts: [
      { text: 'It', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
      { text: 'has had', type: PartType.VERB, label: 'V (どうする)', japanese: '与えてきました' },
      { text: 'a strong influence', type: PartType.OBJECT, label: 'O (何を)', japanese: '強い影響を' },
      { text: 'on religion, literature, and art', type: PartType.MODIFIER, detail: 'Target', japanese: '宗教、文学、芸術に' },
      { text: 'in Japan', type: PartType.MODIFIER, detail: 'Place', japanese: '日本における' },
    ]
  },
  {
    id: '11',
    code: '1D',
    fullText: 'Let us look at some of that influence.',
    translation: 'その影響の一部を見てみましょう。',
    parts: [
      { text: 'Let', type: PartType.VERB, label: 'V (使役)', japanese: '～しましょう' },
      { text: 'us', type: PartType.OBJECT, label: 'O (私たちに)', japanese: '私たちが' },
      { text: 'look at some of that influence', type: PartType.COMPLEMENT, label: 'C (原形不定詞)', japanese: 'その影響の一部を見ることを' },
    ]
  }
];

// --- Lesson 5 Part 2 Data ---
const PART_2_SENTENCES: SentenceData[] = [
  {
    id: 'p2-1',
    code: '2F',
    fullText: 'Mt. Fuji is an active volcano.',
    translation: '富士山は活火山です。',
    parts: [
      { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
      { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
      { text: 'an active volcano', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '活火山' },
    ]
  },
  {
    id: 'p2-2',
    code: '1B',
    fullText: 'In ancient times, it often erupted.',
    translation: '昔、それはしばしば噴火しました。',
    parts: [
      { text: 'In ancient times,', type: PartType.MODIFIER, detail: 'Time', japanese: '昔' },
      { text: 'it', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
      { text: 'often', type: PartType.MODIFIER, detail: 'Freq', japanese: 'しばしば' },
      { text: 'erupted', type: PartType.VERB, label: 'V (どうする)', japanese: '噴火した' },
    ]
  },
  {
    id: 'p2-3',
    code: '1A',
    fullText: 'But it has not done that for about 300 years.',
    translation: 'しかし、約300年間それはそれを（噴火を）していません。',
    parts: [
      { text: 'But', type: PartType.CONNECT, label: 'Conn', japanese: 'しかし' },
      { text: 'it', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
      { text: 'has not done', type: PartType.VERB, label: 'V (どうする)', japanese: 'していない' },
      { text: 'that', type: PartType.OBJECT, label: 'O (何を)', japanese: 'それを' },
      { text: 'for about 300 years', type: PartType.MODIFIER, detail: 'Duration', japanese: '約300年間' },
    ]
  },
  {
    id: 'p2-4',
    code: '1D',
    fullText: 'Ancient Japanese people regarded Mt. Fuji as a goddess.',
    translation: '昔の日本人は富士山を女神として崇めていました。',
    parts: [
      { text: 'Ancient Japanese people', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '昔の日本人は' },
      { text: 'regarded', type: PartType.VERB, label: 'V (どうする)', japanese: 'みなした（崇めた）' },
      { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山を' },
      { text: 'as a goddess', type: PartType.COMPLEMENT, label: 'C (何として)', japanese: '女神として' },
    ]
  },
  {
    id: 'p2-5',
    code: '1A / 1D',
    fullText: 'They thought the goddess’ anger made her erupt.',
    translation: '彼らは、女神の怒りが彼女（富士山）を噴火させると考えました。',
    parts: [
      { text: 'They', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
      { text: 'thought', type: PartType.VERB, label: 'V (どうする)', japanese: '考えました' },
      { 
        text: '(that) the goddess’ anger made her erupt', 
        type: PartType.OBJECT, 
        label: 'O (～ということを)', 
        japanese: '女神の怒りが噴火させると',
        subParts: [
            { text: 'the goddess’ anger', type: PartType.SUBJECT, japanese: '女神の怒りが' },
            { text: 'made', type: PartType.VERB, japanese: 'させた' },
            { text: 'her', type: PartType.OBJECT, japanese: '彼女（富士山）に' },
            { text: 'erupt', type: PartType.COMPLEMENT, japanese: '噴火する（ように）' },
        ]
      },
    ]
  },
  {
    id: 'p2-6',
    code: '1A',
    fullText: 'To prevent eruptions, they built a shrine on Mt. Fuji.',
    translation: '噴火を防ぐために、彼らは富士山に神社を建てました。',
    parts: [
      { text: 'To prevent eruptions,', type: PartType.MODIFIER, detail: 'Purpose', japanese: '噴火を防ぐために' },
      { text: 'they', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
      { text: 'built', type: PartType.VERB, label: 'V (どうする)', japanese: '建てました' },
      { text: 'a shrine', type: PartType.OBJECT, label: 'O (何を)', japanese: '神社を' },
      { text: 'on Mt. Fuji', type: PartType.MODIFIER, detail: 'Place', japanese: '富士山に' },
    ]
  },
  {
    id: 'p2-7',
    code: '1A / 2I',
    fullText: 'There, people prayed that the goddess would remain calm.',
    translation: 'そこで、人々は女神が穏やかでいるように祈りました。',
    parts: [
      { text: 'There,', type: PartType.MODIFIER, detail: 'Place', japanese: 'そこで' },
      { text: 'people', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '人々は' },
      { text: 'prayed', type: PartType.VERB, label: 'V (どうする)', japanese: '祈りました' },
      { 
        text: 'that the goddess would remain calm', 
        type: PartType.OBJECT, 
        label: 'O (～と)', 
        japanese: '女神が穏やかでいるように',
        subParts: [
            { text: 'that', type: PartType.CONNECT, japanese: '～と' },
            { text: 'the goddess', type: PartType.SUBJECT, japanese: '女神が' },
            { text: 'would remain', type: PartType.VERB, japanese: 'ままでいる' },
            { text: 'calm', type: PartType.COMPLEMENT, japanese: '穏やかな' },
        ]
      },
    ]
  },
  {
    id: 'p2-8',
    code: '1A',
    fullText: 'Long ago, people climbed Mt. Fuji to refresh their souls.',
    translation: '昔、人々は魂を清めるために富士山に登りました。',
    parts: [
      { text: 'Long ago,', type: PartType.MODIFIER, detail: 'Time', japanese: '昔' },
      { text: 'people', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '人々は' },
      { text: 'climbed', type: PartType.VERB, label: 'V (どうする)', japanese: '登りました' },
      { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山に' },
      { text: 'to refresh their souls', type: PartType.MODIFIER, detail: 'Purpose', japanese: '魂を清めるために' },
    ]
  },
  {
    id: 'p2-9',
    code: '2G',
    fullText: 'After climbing the mountain, they felt pure in their hearts.',
    translation: '山に登った後、彼らは心が清らかになったと感じました。',
    parts: [
      { text: 'After climbing the mountain,', type: PartType.MODIFIER, detail: 'Time', japanese: '山に登った後' },
      { text: 'they', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
      { text: 'felt', type: PartType.VERB, label: 'V (感覚)', japanese: '感じました' },
      { text: 'pure', type: PartType.COMPLEMENT, label: 'C (どんな状態に)', japanese: '清らかに' },
      { text: 'in their hearts', type: PartType.MODIFIER, detail: 'Place', japanese: '心の中で' },
    ]
  },
  {
    id: 'p2-10',
    code: '2F',
    fullText: 'This was an important tradition.',
    translation: 'これは重要な伝統でした。',
    parts: [
      { text: 'This', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'これは' },
      { text: 'was', type: PartType.VERB, label: 'V (be)', japanese: 'でした' },
      { text: 'an important tradition', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '重要な伝統' },
    ]
  },
  {
    id: 'p2-11',
    code: '2F',
    fullText: 'But it was difficult for many people to get to the mountain because their homes were far away.',
    translation: 'しかし、家が遠く離れていたため、多くの人々にとって山に行くことは困難でした。',
    parts: [
      { text: 'But', type: PartType.CONNECT, label: 'Conn', japanese: 'しかし' },
      { text: 'it', type: PartType.SUBJECT, label: 'S (仮)', japanese: 'それは' },
      { text: 'was', type: PartType.VERB, label: 'V (be)', japanese: 'でした' },
      { text: 'difficult', type: PartType.COMPLEMENT, label: 'C (どんな)', japanese: '難しい' },
      { text: 'for many people', type: PartType.MODIFIER, label: 'Meaningful S', japanese: '多くの人々にとって' },
      { text: 'to get to the mountain', type: PartType.SUBJECT, label: 'S (真)', japanese: '山に行くことは' },
      { 
        text: 'because their homes were far away', 
        type: PartType.MODIFIER, 
        detail: 'Reason',
        japanese: '家が遠かったので',
        subParts: [
            { text: 'because', type: PartType.CONNECT, japanese: 'なぜなら' },
            { text: 'their homes', type: PartType.SUBJECT, japanese: '彼らの家は' },
            { text: 'were', type: PartType.VERB, japanese: 'だった' },
            { text: 'far away', type: PartType.COMPLEMENT, japanese: '遠く離れて' },
        ]
      },
    ]
  },
  {
    id: 'p2-12',
    code: '1A / 4N',
    fullText: 'They sometimes built mounds that were shaped like Mt. Fuji.',
    translation: '彼らは時々、富士山のような形をした塚を作りました。',
    parts: [
      { text: 'They', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼らは' },
      { text: 'sometimes', type: PartType.MODIFIER, detail: 'Freq', japanese: '時々' },
      { text: 'built', type: PartType.VERB, label: 'V (どうする)', japanese: '作りました' },
      { text: 'mounds', type: PartType.OBJECT, label: 'O (何を)', japanese: '塚を' },
      { 
        text: 'that were shaped like Mt. Fuji', 
        type: PartType.MODIFIER, 
        label: 'M (Adj Clause)',
        japanese: '富士山のような形をした',
        subParts: [
            { text: 'that', type: PartType.SUBJECT, japanese: 'それは（関係代名詞）' },
            { text: 'were shaped', type: PartType.VERB, japanese: '形作られていた' },
            { text: 'like Mt. Fuji', type: PartType.MODIFIER, japanese: '富士山のように' },
        ]
      },
    ]
  },
  {
    id: 'p2-13',
    code: '4Q',
    fullText: 'These were called fujizuka.',
    translation: 'これらは富士塚と呼ばれました。',
    parts: [
      { text: 'These', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'これらは' },
      { text: 'were called', type: PartType.VERB, label: 'V (受身)', japanese: '呼ばれました' },
      { text: 'fujizuka', type: PartType.COMPLEMENT, label: 'C (何と)', japanese: '富士塚と' },
    ]
  },
  {
    id: 'p2-14',
    code: '1D / 1A',
    fullText: 'Climbing the mounds let them feel that they were cleansing their souls.',
    translation: 'その塚に登ることは、彼らに魂を清めていると感じさせました。',
    parts: [
      { text: 'Climbing the mounds', type: PartType.SUBJECT, label: 'S (何が)', japanese: '塚に登ることは' },
      { text: 'let', type: PartType.VERB, label: 'V (使役)', japanese: 'させました' },
      { text: 'them', type: PartType.OBJECT, label: 'O (誰に)', japanese: '彼らに' },
      { 
        text: 'feel that they were cleansing their souls', 
        type: PartType.COMPLEMENT, 
        label: 'C (原形不定詞)', 
        japanese: '魂を清めていると感じることを',
        subParts: [
            { text: 'feel', type: PartType.VERB, japanese: '感じる' },
            { 
               text: 'that they were cleansing their souls',
               type: PartType.OBJECT,
               japanese: '彼らが魂を清めていると',
               subParts: [
                   { text: 'that', type: PartType.CONNECT, japanese: '～と' },
                   { text: 'they', type: PartType.SUBJECT, japanese: '彼らが' },
                   { text: 'were cleansing', type: PartType.VERB, japanese: '清めている' },
                   { text: 'their souls', type: PartType.OBJECT, japanese: '魂を' }
               ]
            }
        ]
      },
    ]
  }
];

// --- Lesson 5 Part 3 Data ---
const PART_3_SENTENCES: SentenceData[] = [
    {
        id: 'p3-1',
        code: '1B',
        fullText: 'Mt. Fuji has also strongly affected Japanese literature.',
        translation: '富士山はまた、日本文学にも強い影響を与えてきました。',
        parts: [
            { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
            { text: 'has also strongly affected', type: PartType.VERB, label: 'V (どうする)', japanese: 'また強く影響を与えてきた' },
            { text: 'Japanese literature', type: PartType.OBJECT, label: 'O (何を)', japanese: '日本文学に' }
        ]
    },
    {
        id: 'p3-2',
        code: '1B',
        fullText: 'Writers in Japan have often used it in their works since ancient times.',
        translation: '日本の作家たちは、昔から作品の中でしばしばそれ（富士山）を使ってきました。',
        parts: [
            { text: 'Writers in Japan', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '日本の作家たちは' },
            { text: 'have often used', type: PartType.VERB, label: 'V (どうする)', japanese: 'しばしば使ってきた' },
            { text: 'it', type: PartType.OBJECT, label: 'O (何を)', japanese: 'それを' },
            { text: 'in their works', type: PartType.MODIFIER, detail: 'Where', japanese: '彼らの作品の中で' },
            { text: 'since ancient times', type: PartType.MODIFIER, detail: 'Time', japanese: '昔から' }
        ]
    },
    {
        id: 'p3-3',
        code: '1B',
        fullText: 'In the Nara Period, Yamabe no Akahito, a famous poet, described Mt. Fuji in a Japanese tanka.',
        translation: '奈良時代、有名な歌人である山部赤人は、日本の短歌で富士山を描写しました。',
        parts: [
            { text: 'In the Nara Period,', type: PartType.MODIFIER, detail: 'Time', japanese: '奈良時代に' },
            { text: 'Yamabe no Akahito, a famous poet,', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '有名な歌人の山部赤人は' },
            { text: 'described', type: PartType.VERB, label: 'V (どうする)', japanese: '描写しました' },
            { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山を' },
            { text: 'in a Japanese tanka', type: PartType.MODIFIER, detail: 'Where', japanese: '日本の短歌で' }
        ]
    },
    {
        id: 'p3-4',
        code: '4N',
        fullText: 'This work is included in the Manyoshu.',
        translation: 'この作品は万葉集に含まれています。',
        parts: [
            { text: 'This work', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'この作品は' },
            { text: 'is included', type: PartType.VERB, label: 'V (受身)', japanese: '含まれています' },
            { text: 'in the Manyoshu', type: PartType.MODIFIER, detail: 'Where', japanese: '万葉集に' }
        ]
    },
    {
        id: 'p3-5',
        code: '1A / 1B',
        fullText: 'As I sail out through the Bay of Tago, I look up and see that pure white snow is falling on the crest of Fuji.',
        translation: '（田子の浦ゆ…）田子の浦を通って船出すると、見上げれば真っ白な雪が富士の頂に降り積もっているのが見える。',
        parts: [
            { 
               text: 'As I sail out through the Bay of Tago,', 
               type: PartType.MODIFIER, 
               detail: 'Clause',
               japanese: '田子の浦を通って船出すると',
               subParts: [
                 { text: 'As', type: PartType.CONNECT, japanese: '～するとき' },
                 { text: 'I', type: PartType.SUBJECT, japanese: '私が' },
                 { text: 'sail out', type: PartType.VERB, japanese: '船出する' },
                 { text: 'through the Bay of Tago', type: PartType.MODIFIER, japanese: '田子の浦を通って' }
               ]
            },
            { text: 'I', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '私は' },
            { text: 'look up and see', type: PartType.VERB, label: 'V (どうする)', japanese: '見上げて見る' },
            { 
                text: 'that pure white snow is falling on the crest of Fuji', 
                type: PartType.OBJECT, 
                label: 'O (～ということを)', 
                japanese: '真っ白な雪が富士の頂に降っているのを',
                subParts: [
                    { text: 'that', type: PartType.CONNECT, japanese: '～ということ' },
                    { text: 'pure white snow', type: PartType.SUBJECT, japanese: '真っ白な雪が' },
                    { text: 'is falling', type: PartType.VERB, japanese: '降っている' },
                    { text: 'on the crest of Fuji', type: PartType.MODIFIER, japanese: '富士の頂に' }
                ]
            }
        ]
    },
    {
        id: 'p3-6',
        code: '1B',
        fullText: 'Writers in the Meiji Period also described Mt. Fuji.',
        translation: '明治時代の作家たちもまた、富士山を描写しました。',
        parts: [
            { text: 'Writers in the Meiji Period', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '明治時代の作家たちも' },
            { text: 'also described', type: PartType.VERB, label: 'V (どうする)', japanese: 'また描写しました' },
            { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山を' }
        ]
    },
    {
        id: 'p3-7',
        code: '1B',
        fullText: 'In Natsume Soseki’s Sanshiro, the hero saw Mt. Fuji from a train.',
        translation: '夏目漱石の『三四郎』では、主人公が列車から富士山を見ました。',
        parts: [
            { text: 'In Natsume Soseki’s Sanshiro,', type: PartType.MODIFIER, detail: 'Where', japanese: '夏目漱石の『三四郎』で' },
            { text: 'the hero', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '主人公は' },
            { text: 'saw', type: PartType.VERB, label: 'V (どうする)', japanese: '見ました' },
            { text: 'Mt. Fuji', type: PartType.OBJECT, label: 'O (何を)', japanese: '富士山を' },
            { text: 'from a train', type: PartType.MODIFIER, detail: 'Where', japanese: '列車から' }
        ]
    },
    {
        id: 'p3-8',
        code: '1A',
        fullText: 'He talked about it with another passenger.',
        translation: '彼は別の乗客とそれについて話しました。',
        parts: [
            { text: 'He', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '彼は' },
            { text: 'talked', type: PartType.VERB, label: 'V (どうする)', japanese: '話しました' },
            { text: 'about it', type: PartType.MODIFIER, detail: 'Topic', japanese: 'それについて' },
            { text: 'with another passenger', type: PartType.MODIFIER, detail: 'With', japanese: '別の乗客と' }
        ]
    },
    {
        id: 'p3-9',
        code: '2F',
        fullText: 'Another example, from the Showa Period, is Dazai Osamu’s short story Fugaku Hyakkei.',
        translation: '昭和時代からのもう一つの例は、太宰治の短編小説『富嶽百景』です。',
        parts: [
            { text: 'Another example, from the Showa Period,', type: PartType.SUBJECT, label: 'S (何が)', japanese: '昭和時代のもう一つの例は' },
            { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
            { text: 'Dazai Osamu’s short story Fugaku Hyakkei', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '太宰治の短編『富嶽百景』' }
        ]
    },
    {
        id: 'p3-10',
        code: '4N',
        fullText: 'In this work, the different daily lives of various people are described.',
        translation: 'この作品では、様々な人々の異なる日常生活が描かれています。',
        parts: [
            { text: 'In this work,', type: PartType.MODIFIER, detail: 'Where', japanese: 'この作品では' },
            { text: 'the different daily lives of various people', type: PartType.SUBJECT, label: 'S (何が)', japanese: '様々な人々の異なる日常生活が' },
            { text: 'are described', type: PartType.VERB, label: 'V (受身)', japanese: '描かれています' }
        ]
    },
    {
        id: 'p3-11',
        code: '4N',
        fullText: 'The differences that they see in the appearance of Mt. Fuji are also described.',
        translation: '彼らが富士山の外観に見る違いもまた、描かれています。',
        parts: [
            { 
               text: 'The differences that they see in the appearance of Mt. Fuji', 
               type: PartType.SUBJECT, 
               label: 'S (何が)', 
               japanese: '彼らが富士山の外観に見る違いが',
               subParts: [
                 { text: 'The differences', type: PartType.SUBJECT, japanese: '違い' },
                 { 
                   text: 'that they see in the appearance of Mt. Fuji', 
                   type: PartType.MODIFIER, 
                   japanese: '彼らが富士山の外観に見る（関係節）',
                   subParts: [
                     { text: 'that', type: PartType.CONNECT, japanese: '（関係代名詞）' },
                     { text: 'they', type: PartType.SUBJECT, japanese: '彼らが' },
                     { text: 'see', type: PartType.VERB, japanese: '見る' },
                     { text: 'in the appearance of Mt. Fuji', type: PartType.MODIFIER, japanese: '富士山の外観に' }
                   ]
                 }
               ]
            },
            { text: 'are also described', type: PartType.VERB, label: 'V (受身)', japanese: 'また描かれています' }
        ]
    }
];

// --- Lesson 5 Part 4 Data ---
const PART_4_SENTENCES: SentenceData[] = [
    {
        id: 'p4-1',
        code: '2F',
        fullText: 'Of all mountains, Mt. Fuji has been artists’ favorite as a subject for their paintings and prints.',
        translation: '全ての山の中で、富士山は絵画や版画の題材として芸術家たちのお気に入りであり続けてきました。',
        parts: [
            { text: 'Of all mountains,', type: PartType.MODIFIER, detail: 'Context', japanese: '全ての山の中で' },
            { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
            { text: 'has been', type: PartType.VERB, label: 'V (be)', japanese: '（ずっと）です' },
            { text: 'artists’ favorite', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '芸術家のお気に入り' },
            { text: 'as a subject for their paintings and prints', type: PartType.MODIFIER, detail: 'As', japanese: '絵画や版画の題材として' }
        ]
    },
    {
        id: 'p4-2',
        code: '2F',
        fullText: 'The Thirty-six Views of Mt. Fuji series, by Katsushika Hokusai, is especially popular.',
        translation: '葛飾北斎による「富嶽三十六景」シリーズは特に人気があります。',
        parts: [
            { text: 'The Thirty-six Views of Mt. Fuji series, by Katsushika Hokusai,', type: PartType.SUBJECT, label: 'S (何が)', japanese: '葛飾北斎の「富嶽三十六景」は' },
            { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
            { text: 'especially popular', type: PartType.COMPLEMENT, label: 'C (どんな)', japanese: '特に人気が' }
        ]
    },
    {
        id: 'p4-3',
        code: '2F',
        fullText: 'Hokusai is one of the most famous of all the ukiyoe artists.',
        translation: '北斎は全ての浮世絵師の中で最も有名な一人です。',
        parts: [
            { text: 'Hokusai', type: PartType.SUBJECT, label: 'S (誰が)', japanese: '北斎は' },
            { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
            { text: 'one of the most famous of all the ukiyoe artists', type: PartType.COMPLEMENT, label: 'C (何)', japanese: '最も有名な浮世絵師の一人' }
        ]
    },
    {
        id: 'p4-4',
        code: '1B',
        fullText: 'The works of ukiyoe artists have influenced Western art as well as other Japanese art.',
        translation: '浮世絵師たちの作品は、他の日本美術と同様に西洋美術にも影響を与えました。',
        parts: [
            { text: 'The works of ukiyoe artists', type: PartType.SUBJECT, label: 'S (何が)', japanese: '浮世絵師たちの作品は' },
            { text: 'have influenced', type: PartType.VERB, label: 'V (どうする)', japanese: '影響を与えました' },
            { text: 'Western art as well as other Japanese art', type: PartType.OBJECT, label: 'O (何を)', japanese: '他の日本美術と同様に西洋美術に' }
        ]
    },
    {
        id: 'p4-5',
        code: '1B',
        fullText: 'In particular, Hokusai’s views of Mt. Fuji changed Western art.',
        translation: '特に、北斎の富士山の眺め（富嶽三十六景など）は西洋美術を変えました。',
        parts: [
            { text: 'In particular,', type: PartType.MODIFIER, detail: 'Adv', japanese: '特に' },
            { text: 'Hokusai’s views of Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '北斎の富士山の眺めは' },
            { text: 'changed', type: PartType.VERB, label: 'V (どうする)', japanese: '変えました' },
            { text: 'Western art', type: PartType.OBJECT, label: 'O (何を)', japanese: '西洋美術を' }
        ]
    },
    {
        id: 'p4-6',
        code: '1B',
        fullText: 'They strongly influenced impressionism in France.',
        translation: 'それらはフランスの印象派に強い影響を与えました。',
        parts: [
            { text: 'They', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それらは' },
            { text: 'strongly', type: PartType.MODIFIER, detail: 'Adv', japanese: '強く' },
            { text: 'influenced', type: PartType.VERB, label: 'V (どうする)', japanese: '影響を与えました' },
            { text: 'impressionism', type: PartType.OBJECT, label: 'O (何を)', japanese: '印象派に' },
            { text: 'in France', type: PartType.MODIFIER, detail: 'Place', japanese: 'フランスにおける' }
        ]
    },
    {
        id: 'p4-7',
        code: '4N',
        fullText: 'It is said that Claude Monet learned much about the use of colors and perspectives from Hokusai.',
        translation: 'クロード・モネは色や遠近法の使い方について北斎から多くを学んだと言われています。',
        parts: [
            { text: 'It', type: PartType.SUBJECT, label: 'S (仮)', japanese: 'それは' },
            { text: 'is said', type: PartType.VERB, label: 'V (受身)', japanese: '言われています' },
            { 
               text: 'that Claude Monet learned much about the use of colors and perspectives from Hokusai', 
               type: PartType.SUBJECT, 
               label: 'S (真)', 
               japanese: 'モネが北斎から色や遠近法について多くを学んだと',
               subParts: [
                 { text: 'that', type: PartType.CONNECT, japanese: '～と' },
                 { text: 'Claude Monet', type: PartType.SUBJECT, japanese: 'クロード・モネが' },
                 { text: 'learned', type: PartType.VERB, japanese: '学んだ' },
                 { text: 'much', type: PartType.OBJECT, japanese: '多くを' },
                 { text: 'about the use of colors and perspectives', type: PartType.MODIFIER, japanese: '色や遠近法の使い方について' },
                 { text: 'from Hokusai', type: PartType.MODIFIER, japanese: '北斎から' }
               ]
            }
        ]
    },
    {
        id: 'p4-8',
        code: '1B',
        fullText: 'Thus, Mt. Fuji has played very important roles in a number of different ways.',
        translation: 'このように、富士山は様々な方法で非常に重要な役割を果たしてきました。',
        parts: [
            { text: 'Thus,', type: PartType.MODIFIER, detail: 'Conn', japanese: 'このように' },
            { text: 'Mt. Fuji', type: PartType.SUBJECT, label: 'S (何が)', japanese: '富士山は' },
            { text: 'has played', type: PartType.VERB, label: 'V (どうする)', japanese: '果たしてきました' },
            { text: 'very important roles', type: PartType.OBJECT, label: 'O (何を)', japanese: '非常に重要な役割を' },
            { text: 'in a number of different ways', type: PartType.MODIFIER, detail: 'Manner', japanese: '様々な方法で' }
        ]
    },
    {
        id: 'p4-9',
        code: '1B',
        fullText: 'It has had particular meaning for Japanese culture, especially in religion, literature, and art.',
        translation: 'それは日本文化、特に宗教、文学、芸術において特別な意味を持ってきました。',
        parts: [
            { text: 'It', type: PartType.SUBJECT, label: 'S (何が)', japanese: 'それは' },
            { text: 'has had', type: PartType.VERB, label: 'V (どうする)', japanese: '持ってきました' },
            { text: 'particular meaning', type: PartType.OBJECT, label: 'O (何を)', japanese: '特別な意味を' },
            { text: 'for Japanese culture, especially in religion, literature, and art', type: PartType.MODIFIER, detail: 'Context', japanese: '日本文化、特に宗教、文学、芸術にとって' }
        ]
    },
    {
        id: 'p4-10',
        code: '2F',
        fullText: 'It is not surprising that it was placed on the Cultural World Heritage List.',
        translation: 'それが世界文化遺産リストに登録されたことは驚くべきことではありません。',
        parts: [
            { text: 'It', type: PartType.SUBJECT, label: 'S (仮)', japanese: 'それは' },
            { text: 'is', type: PartType.VERB, label: 'V (be)', japanese: 'です' },
            { text: 'not', type: PartType.MODIFIER, detail: 'Neg', japanese: 'ない' },
            { text: 'surprising', type: PartType.COMPLEMENT, label: 'C (どんな)', japanese: '驚くべきこと' },
            { 
               text: 'that it was placed on the Cultural World Heritage List', 
               type: PartType.SUBJECT, 
               label: 'S (真)', 
               japanese: 'それが世界文化遺産リストに登録されたことは',
               subParts: [
                 { text: 'that', type: PartType.CONNECT, japanese: '～ということ' },
                 { text: 'it', type: PartType.SUBJECT, japanese: 'それが' },
                 { text: 'was placed', type: PartType.VERB, japanese: '置かれた（登録された）' },
                 { text: 'on the Cultural World Heritage List', type: PartType.MODIFIER, japanese: '世界文化遺産リストに' }
               ]
            }
        ]
    }
];

// --- Exported Lessons Collection ---
export const LESSONS: LessonData[] = [
    {
        id: 'L5-P1',
        title: 'Lesson 5 Part 1',
        subtitle: 'Mt. Fuji as a Cultural Heritage',
        description: 'Learn about Mt. Fuji, its beauty, and why it was chosen as a Cultural World Heritage site instead of a Natural one.',
        sentences: PART_1_SENTENCES
    },
    {
        id: 'L5-P2',
        title: 'Lesson 5 Part 2',
        subtitle: 'Mt. Fuji: Volcano and Worship',
        description: 'Discover the history of Mt. Fuji as an active volcano and how ancient people worshipped it to prevent eruptions.',
        sentences: PART_2_SENTENCES
    },
    {
        id: 'L5-P3',
        title: 'Lesson 5 Part 3',
        subtitle: 'Mt. Fuji in Literature',
        description: 'Explore how Mt. Fuji has influenced Japanese literature, including works from the Nara, Meiji, and Showa periods.',
        sentences: PART_3_SENTENCES
    },
    {
        id: 'L5-P4',
        title: 'Lesson 5 Part 4',
        subtitle: 'Mt. Fuji in Art',
        description: 'Examine the influence of Mt. Fuji on art, particularly Ukiyoe by Hokusai and its impact on Western Impressionism.',
        sentences: PART_4_SENTENCES
    }
];

// Fallback for types if needed mostly for initial load compatibility before dashboard selection
export const FUJI_DATA = PART_1_SENTENCES;
